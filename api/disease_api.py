from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from transformers import AutoImageProcessor, AutoModelForImageClassification
from PIL import Image
import io
from google import genai
from dotenv import load_dotenv
import os

load_dotenv()

client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))
app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load a pre-trained image classification model
preprocessor = AutoImageProcessor.from_pretrained("linkanjarad/mobilenet_v2_1.0_224-plant-disease-identification")
model = AutoModelForImageClassification.from_pretrained("linkanjarad/mobilenet_v2_1.0_224-plant-disease-identification")

@app.post("/predict/")
async def predict(file: UploadFile = File(...)):
    image = Image.open(io.BytesIO(await file.read()))
    inputs = preprocessor(images=image, return_tensors="pt")
    outputs = model(**inputs)
    logits = outputs.logits
    predicted_class_idx = logits.argmax(-1).item()
    result = model.config.id2label[predicted_class_idx]
    response = client.models.generate_content(
        model="gemini-1.5-flash",
        contents=f"{result}. Explain about this plant disease and give measures, preventives. Do not put up or say anything extra.",
    )    
    return {"disease": result, "info": response.text}
