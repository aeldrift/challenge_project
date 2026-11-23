from fastapi import FastAPI
from disease_api import app as disease_app
from waste_vol_api import app as waste_app

app = FastAPI()

app.mount("/disease", disease_app)
app.mount("/waste", waste_app)
