from common.config import SERVICE_API_KEYS
from fastapi import APIRouter
from fastapi.responses import JSONResponse

from .bots import router as bots_router
from .conversations import router as conversations_router

router = APIRouter()

router.include_router(conversations_router, tags=["Conversations"])
router.include_router(bots_router, tags=["Bots"])


@router.get("/", response_class=JSONResponse)
async def config():
    # Note: do not send gemini-api-key in production (key will be exposed to the client.)
    return {
        "webrtc-enabled": bool(SERVICE_API_KEYS["daily"]),
        "gemini-api-key": SERVICE_API_KEYS["gemini"],
    }
