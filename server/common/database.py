import os
from contextlib import asynccontextmanager

from common.models import Base
from dotenv import load_dotenv
from loguru import logger
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy.ext.asyncio import AsyncEngine, async_sessionmaker, create_async_engine

load_dotenv()


class DatabaseSessionFactory:
    _instance: "DatabaseSessionFactory | None" = None
    _engine: AsyncEngine | None = None
    _initialized: bool = False

    def __new__(cls) -> "DatabaseSessionFactory":
        if cls._instance is None:
            cls._instance = super(DatabaseSessionFactory, cls).__new__(cls)
        return cls._instance

    def __init__(self):
        if self._initialized:
            return

        db_url = os.getenv("DATABASE_URL", "sqlite+aiosqlite:///./sesame.db")
        self._engine = create_async_engine(
            db_url,
            connect_args={"check_same_thread": False},
            pool_pre_ping=True,
            echo=bool(int(os.getenv("DATABASE_ECHO_OUTPUT", "0"))),
        )
        self.session_maker = async_sessionmaker(self._engine, expire_on_commit=False)
        self._initialized = True

    @property
    def engine(self) -> AsyncEngine:
        if self._engine is None:
            raise RuntimeError("Engine not initialized")
        return self._engine

    async def initialize_schema(self):
        """Initialize the database schema from SQLAlchemy models"""
        async with self.engine.begin() as conn:
            await conn.run_sync(Base.metadata.create_all)
            logger.debug("SQLite schema applied")

    @asynccontextmanager
    async def __call__(self):
        async with self.session_maker() as session:
            try:
                yield session
            except SQLAlchemyError as e:
                logger.exception(e)
                await session.rollback()
                raise
            finally:
                await session.close()


# Create a default session factory for convenience
default_session_factory = DatabaseSessionFactory()
