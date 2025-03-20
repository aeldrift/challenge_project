import asyncio
import functools
import os
import shutil
import subprocess
from pathlib import Path
from typing import Callable, Dict, Literal

import typer
from common.database import default_session_factory
from dotenv import load_dotenv
from rich.console import Console
from rich.panel import Panel
from rich.prompt import Confirm, Prompt
from rich.syntax import Syntax
from rich.table import Table
from sqlalchemy import text

console = Console()
app = typer.Typer(
    help="Sesame CLI - Development and management tools for the Sesame application.",
    no_args_is_help=True,
    add_completion=False,
)

env_example = Path("env.example")
env_file = Path(".env")


def check_required_env_vars() -> bool:
    """Check if all required environment variables are present in .env."""
    # Variables that must have non-empty values
    required_vars = [
        "DATABASE_URL",
    ]

    # Variables that must exist but can be empty
    required_vars_allow_empty = []

    if not env_file.exists():
        console.print("\n✗ No .env file found. Please run 'sesame init' first.", style="red bold")
        return False

    load_dotenv(env_file)

    # Check vars that must have values
    missing_vars = [var for var in required_vars if not os.getenv(var)]

    # Check vars that must exist but can be empty
    undefined_vars = [var for var in required_vars_allow_empty if os.getenv(var) is None]

    if missing_vars or undefined_vars:
        console.print("\n✗ Missing required environment variables:", style="red bold")
        for var in missing_vars:
            console.print(f"  • {var}", style="red")
        for var in undefined_vars:
            console.print(f"  • {var} (can be empty but must be defined)", style="red")
        console.print(
            "\nPlease run 'sesame init' or 'sesame init-db' to set these variables.", style="yellow"
        )
        return False

    return True


def require_env(f: Callable) -> Callable:
    """Decorator to ensure environment variables."""

    @functools.wraps(f)
    def wrapper(*args, **kwargs):
        if not check_required_env_vars():
            raise typer.Exit(1)
        return f(*args, **kwargs)

    return wrapper


def format_env_contents(current_contents: list[str], updates: Dict[str, str]) -> list[str]:
    """Format the environment contents with updates."""
    env_contents = current_contents.copy()

    # Update each variable
    for var_name, var_value in updates.items():
        var_found = False
        for i, line in enumerate(env_contents):
            if line.strip().startswith(f"{var_name}="):
                env_contents[i] = f'{var_name}="{var_value}"\n'
                var_found = True
                break

        if not var_found:
            env_contents.append(f'{var_name}="{var_value}"\n')

    return env_contents


def handle_env_updates(
    env_updates: Dict[str, str],
    action: Literal["print", "save", "both", "skip"] = "both",
    init_mode: bool = False,
) -> None:
    """Helper function to handle env variable updates with flexible output options.

    Args:
        env_updates: Dictionary of environment variables to update
        action: How to handle the updates ("print", "save", "both", or "skip")
        init_mode: If True, creates a fresh .env file instead of updating existing one
    """
    try:
        if init_mode:
            # For initialization, always start with the example template
            with open(env_example, "r") as f:
                current_contents = f.readlines()

            # If .env exists, create a backup before overwriting
            if env_file.exists():
                backup_file = env_file.with_suffix(".backup")
                shutil.copy2(env_file, backup_file)
                console.print(f"Created backup of existing .env at {backup_file}", style="yellow")
        else:
            # For updates, use existing .env or fall back to example
            if env_file.exists():
                with open(env_file, "r") as f:
                    current_contents = f.readlines()
            else:
                with open(env_example, "r") as f:
                    current_contents = f.readlines()
                console.print("\nNo .env file found, using env.example as template", style="yellow")

        # Format the updated contents
        updated_contents = format_env_contents(current_contents, env_updates)
        formatted_text = "".join(updated_contents)

        # Handle based on specified action
        if action in ["print", "both"]:
            console.print("\nUpdated environment variables:", style="blue bold")
            syntax = Syntax(
                formatted_text, "env", theme="monokai", line_numbers=False, word_wrap=True
            )
            console.print(syntax)

        if action in ["save", "both"]:
            # Write the updates
            with open(env_file, "w") as f:
                f.writelines(updated_contents)
            console.print(
                "✓ Created new .env file" if init_mode else "✓ Successfully updated .env file",
                style="bold green",
            )

        if action == "skip":
            console.print("Skipped environment variable updates", style="yellow")

    except Exception as e:
        console.print(f"\nError handling .env file: {str(e)}", style="red")
        raise typer.Exit(1)


def print_success_banner() -> None:
    """Print a success message with a prominent green background."""
    # Create padding for the message
    padding = " " * 2
    padded_message = (
        f"{padding}Setup complete! Run `python sesame.py run` to start the app.{padding}"
    )

    # Create a box around the message
    width = len(padded_message)
    border = "─" * width

    console.print()  # Empty line before banner
    console.print(f"╭{border}╮", style="green on green")
    console.print(f"│{padded_message}│", style="black on green bold")
    console.print(f"╰{border}╯", style="green on green")
    console.print()  # Empty line after banner


# ========================
# Initialize
# ========================


@app.command()
def init():
    """Initialize a new project and Open Sesame environment."""

    if env_file.exists():
        warning_panel = Panel(
            "[yellow]A project .env file already exists.\n"
            "Proceeding will create a fresh .env file.\n"
            "Your current .env will be backed up to .env.backup[/yellow]",
            title="[red bold]Warning",
            border_style="red",
        )
        console.print("\n", warning_panel, "\n")

        if not Confirm.ask("Would you like to proceed?"):
            print_success_banner()
            raise typer.Exit()

    api_keys_panel = Panel(
        "This app can run using the following APIs:\n\n"
        "- Google Gemini (voice-to-voice)\n"
        "- Optional: Daily.co (WebRTC voice, vision and text)\n",
        title="[white bold]Enter API Keys",
        border_style="white",
    )
    console.print("\n", api_keys_panel, "\n")

    # 1. Ask for Gemini API key
    gemini_api_key = Prompt.ask("Enter your Gemini API key")

    # 2. Optional: ask for Daily API key
    if Confirm.ask("Enable real-time voice and vision features with Daily.co?"):
        daily_api_key = Prompt.ask("Enter your Daily API key")
    else:
        daily_api_key = ""

    if Confirm.ask("Enable function calling with youtube api?"):
        youtube_api_key = Prompt.ask("Enter your YOUTUBE API key from google cloud console")
    else:
        youtube_api_key = ""

    action = Prompt.ask(
        "How would you like to handle these updates?",
        choices=["print", "save", "both", "skip"],
        default="both",
    )

    console.print("\nAPI keys entered successfully", style="green bold")

    table = Table(show_header=False, box=None, padding=(0, 2), collapse_padding=True)

    table.add_column("Option", style="cyan")
    table.add_column("Description", style="white")

    table.add_row("print", "Display the changes in the terminal without saving to .env")
    table.add_row("save", "Save the changes to .env without displaying")
    table.add_row("both", "Display and save the changes")
    table.add_row("skip", "Cancel without making any changes")

    console.print("\nAvailable options:", style="blue bold")
    console.print(table)
    console.print()

    handle_env_updates(
        {"GEMINI_API_KEY": gemini_api_key, "DAILY_API_KEY": daily_api_key, "YOUTUBE_API_KEY": youtube_api_key},
        action=action,
        init_mode=True,
    )

    if Confirm.ask(
        "\nWould you like to create and test the SQLite database? (Otherwise it is done automatically when running the app.)"
    ):
        test_db(show_success_banner=False)
    else:
        console.print(
            "Skipping database configuration. You can do this later by running test_db",
            style="yellow",
        )

    # Add success banner
    print_success_banner()


# ========================
# Test Database Connection
# ========================
@app.command()
@require_env
def test_db(show_success_banner: bool = True):
    """Test database connection and schema initialization."""
    try:
        load_dotenv(env_file)

        async def _run_tests():
            console.print("\nTesting Database Connection", style="blue bold")

            with console.status("[blue]Initializing database...", spinner="dots") as status:
                # Test 1: Initialize schema
                await default_session_factory.initialize_schema()
                console.print("✓ Schema initialized successfully", style="green")

                # Test 2: Basic connection test
                status.update("[blue]Testing connection...")
                async with default_session_factory() as session:
                    result = await session.execute(text("SELECT 1"))
                    result.scalar()
                console.print("✓ Connection test successful", style="green")

                # Test 3: Get SQLite version
                status.update("[blue]Getting database version...")
                async with default_session_factory() as session:
                    result = await session.execute(text("SELECT sqlite_version()"))
                    version = result.scalar()
                    console.print(f"✓ SQLite Version: {version}", style="green")

                # Show database location
                db_url = os.getenv("DATABASE_URL", "sqlite+aiosqlite:///./sesame.db")
                if db_url.startswith("sqlite"):
                    db_path = db_url.split("///")[-1]
                    abs_path = os.path.abspath(db_path)
                    console.print(f"\nDatabase location: {abs_path}", style="blue")

                console.print("\n✓ All database tests passed!", style="green bold")

        # Run the async tests
        asyncio.run(_run_tests())

        # Only show banner if requested
        if show_success_banner:
            print_success_banner()

    except Exception as e:
        console.print(f"\n✗ Database test failed: {str(e)}", style="red bold")
        raise typer.Exit(1)


# ========================
# Run FastAPI App
# ========================


@app.command()
@require_env
def run(
    host: str = typer.Option("0.0.0.0", "--host", "-h", help="Bind socket to this host."),
    port: int = typer.Option(None, "--port", "-p", help="Bind socket to this port."),
    reload: bool = typer.Option(True, "--reload/--no-reload", help="Enable auto-reload."),
):
    """Run the FastAPI server using uvicorn."""
    load_dotenv(env_file)

    try:
        final_port = port or int(os.getenv("PORT", "8000"))
        app_path = "webapp.main:app"

        # Build command arguments
        command = [
            "/home/ubuntu/.local/bin/uvicorn",
            app_path,
            "--host",
            host,
            "--port",
            str(final_port),
        ]

        if reload:
            command.append("--reload")

        # Show server info
        console.print("\nStarting development server...", style="blue bold")
        console.print(f"Application: {app_path}", style="blue")
        if host:
            console.print(f"Host: {host}", style="blue")
        console.print(f"Port: {final_port}", style="blue")
        console.print(f"Reload: {'enabled' if reload else 'disabled'}", style="blue")
        console.print("\nPress CTRL+C to stop the server\n", style="yellow")

        # Run uvicorn
        subprocess.run(command)

    except KeyboardInterrupt:
        console.print("\nServer stopped", style="yellow")
    except Exception as e:
        console.print(f"\nError starting server: {str(e)}", style="red bold")
        raise typer.Exit(1)


@app.command()
def init_client():
    """Initialize the client .env.local file with the correct server URL."""
    # Check for parent directory containing client folder
    client_dir = Path("../client")
    env_local_file = client_dir / ".env.local"

    if not client_dir.exists():
        console.print("\n✗ Client directory not found at ../client", style="red bold")

        # Ask if they want to specify a different path
        if Confirm.ask("Would you like to specify the client directory path?"):
            while True:
                client_path = Prompt.ask("Enter the path to the client directory")
                client_dir = Path(client_path)
                if client_dir.exists():
                    env_local_file = client_dir / ".env.local"
                    break
                console.print(f"\n✗ Directory not found: {client_path}", style="red")
        else:
            raise typer.Exit(1)

    # Get port from env or use default
    port = os.getenv("WEBAPP_PORT", "8000")
    server_url = f"https://arshjaved.duckdns.org/api"

    # Show confirmation with details
    console.print("\nClient .env.local configuration:", style="blue bold")
    console.print(f"Directory: {client_dir.absolute()}", style="blue")
    console.print(f"VITE_SERVER_URL: {server_url}", style="blue")

    if not Confirm.ask("\nProceed with this configuration?"):
        raise typer.Exit()

    try:
        # Create or update .env.local
        env_local_file.write_text(f"VITE_SERVER_URL={server_url}\n")
        console.print("\n✓ Successfully created .env.local file", style="green bold")

    except Exception as e:
        console.print(f"\n✗ Error creating .env.local file: {str(e)}", style="red bold")
        raise typer.Exit(1)


def main():
    app()


if __name__ == "__main__":
    app()
