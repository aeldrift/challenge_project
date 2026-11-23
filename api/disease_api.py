from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from huggingface_hub import InferenceClient
from google import genai
from dotenv import load_dotenv
import os

load_dotenv()

app = FastAPI()

# API clients
hf_client = InferenceClient(
    provider="hf-inference",
    api_key=os.getenv("HF_TOKEN")
)

gemini_client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/predict/")
async def predict(file: UploadFile = File(...)):

    image_bytes = await file.read()

    # Plant disease classification through Hugging Face
    predictions = hf_client.image_classification(
        image_bytes,
        model="linkanjarad/mobilenet_v2_1.0_224-plant-disease-identification"
    )

    result = predictions[0].label

    # Generate explanation through Gemini
    response = gemini_client.models.generate_content(
        model="gemini-1.5-flash",
        contents=(
            f"{result}. Explain about this plant disease and give "
            f"measures and preventives. Do not put up or say anything extra."
        ),
    )

    return {
        "disease": result,
        "info": response.text
    }
