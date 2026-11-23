from fastapi import FastAPI
from disease_api import app as disease_app
from waste_vol_api import app as waste_app

app = FastAPI()

app.include_router(disease_app.router, prefix="/farmx")
app.include_router(waste_app.router, prefix="/farmx")
