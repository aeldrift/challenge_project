from typing import AsyncGenerator

from common.database import DatabaseSessionFactory
from fastapi import Depends
from sqlalchemy.ext.asyncio import AsyncSession

default_session_factory = DatabaseSessionFactory()


# ========================
# Dependencies
# ========================
def create_db_dependency(factory: DatabaseSessionFactory = default_session_factory):
    async def get_db_session() -> AsyncGenerator[AsyncSession, None]:
        async with factory() as session:
            yield session

    return get_db_session


get_db_session = create_db_dependency()


async def get_db(
    db: AsyncSession = Depends(get_db_session),
) -> AsyncSession:
    return db
