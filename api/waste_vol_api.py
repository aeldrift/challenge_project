from fastapi import FastAPI
from pydantic import BaseModel
import pickle
import pandas as pd

# Initialize the FastAPI app
app = FastAPI()

# Rainfall data dictionary
rainfall_data = {
    "Andaman and Nicobar Islands": 2967,
    "Andhra Pradesh": 900,
    "Arunachal Pradesh": 2782,
    "Assam": 2818,
    "Bihar": 1027,
    "Chandigarh": 1111,
    "Chhattisgarh": 1447,
    "Dadra and Nagar Haveli": 2500,
    "Daman and Diu": 1700,
    "Delhi": 792,
    "Goa": 3005,
    "Gujarat": 800,
    "Haryana": 509,
    "Himachal Pradesh": 1367,
    "Jammu and Kashmir": 1295,
    "Jharkhand": 1351,
    "Karnataka": 1500,
    "Kerala": 3055,
    "Ladakh": 100,
    "Lakshadweep": 1648,
    "Madhya Pradesh": 1144,
    "Maharashtra": 1700,
    "Manipur": 1467,
    "Meghalaya": 2818,
    "Mizoram": 2555,
    "Nagaland": 2034,
    "Odisha": 1525,
    "Pondicherry": 998,
    "Punjab": 506,
    "Rajasthan": 300,
    "Sikkim": 2739,
    "Tamil Nadu": 998,
    "Tripura": 2143,
    "Uttarakhand": 1742,
    "Uttar Pradesh": 900,
    "West Bengal": 1900,
}

# Load the trained model and feature names
with open('model.pkl', 'rb') as model_file:
    model = pickle.load(model_file)

with open('model_features.pkl', 'rb') as feature_file:
    expected_features = pickle.load(feature_file)

# Define the input schema for the API
class FarmerInput(BaseModel):
    crop: str
    season: str
    state: str
    area: float  # in hectares
    fertilizer: float  # in kilograms
    pesticide: float  # in kilograms

# API endpoint to predict waste crop volume
@app.post("/predict_waste_volume")
def predict_waste_volume(data: FarmerInput):
    # Determine the annual rainfall based on state
    state = data.state
    if state in rainfall_data:
        # If state has specific rainfall data, use it
        annual_rainfall = rainfall_data[state]
    else:
        annual_rainfall = 500  # Default to 500 if no data is available

    # Prepare input data as a DataFrame
    input_data = {
        'Crop': [data.crop],
        'Season': [data.season],
        'State': [state],
        'Area': [data.area],
        'Annual_Rainfall': [annual_rainfall],
        'Fertilizer': [data.fertilizer],
        'Pesticide': [data.pesticide]
    }
    input_df = pd.DataFrame(input_data)

    # One-hot encode categorical columns
    categorical_columns = ['Crop', 'Season', 'State']
    input_encoded = pd.get_dummies(input_df, columns=categorical_columns)

    # Align input features with model's expected features
    for feature in expected_features:
        if feature not in input_encoded:
            input_encoded[feature] = 0  # Add missing columns with default values
    input_encoded = input_encoded[expected_features]  # Reorder columns to match

    # Predict yield (metric tons per hectare)
    predicted_yield = model.predict(input_encoded)[0]
    
    # Crop Residue Waste: In India, the total crop residue waste is estimated to be 87.94 million tonnes (Mt) per year. Out of this, 37.54 Mt of dry matter (DM) per year is available for biofuel production. Primary crop waste contributes 30.53 Mt DM per year, and secondary crop leftovers account for 7.01 Mt DM per year.
    # Total production rate = 832 million tonnes annually
    # Waste-to-Production Ratio = 832 / 87.94 = 10.1%
    total_yield = predicted_yield * data.area
    waste = (10.1 * total_yield)/100

    # results
    return {
        "predicted_yield_per_unit_area": predicted_yield,
        "total_yield": total_yield,
        "waste": waste
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=10000)

