import os
import sys
from contextlib import asynccontextmanager

from common.database import DatabaseSessionFactory
from common.models import Base
from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import HTMLResponse
from loguru import logger

from .api import router as api_router

load_dotenv(override=True)

logger.remove(0)
logger.add(sys.stderr, level=os.getenv("WEBAPP_LOG_LEVEL", "DEBUG"))


default_session_factory = DatabaseSessionFactory()

# ========================
# FastAPI App
# ========================


@asynccontextmanager
async def lifespan(app: FastAPI):
    app.state.db_factory = default_session_factory

    try:
        # Initialize schema from model definitions
        await default_session_factory.initialize_schema()
        if bool(int(os.getenv("DATABASE_USE_REFLECTION", "0"))):
            async with default_session_factory.engine.connect() as conn:
                await conn.run_sync(Base.metadata.reflect)

    except Exception as e:
        logger.error(f"Database connection failed: {str(e)}")
        os._exit(1)
    yield
    await default_session_factory.engine.dispose()


app = FastAPI(
    title="Open Saarthi API",
    docs_url="/docs",
    lifespan=lifespan,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(api_router, prefix="/api")


@app.get("/", response_class=HTMLResponse)
async def home():
    return "Saarthi is running"
