# AgriSaarthi - Smart Farming Assistant

## Project Overview

AgriSaarthi is a web application designed to assist farmers with various aspects of smart farming. It includes features for user authentication, plant disease prediction via image analysis, and agricultural waste volume prediction based on farming parameters. The project integrates a frontend built with HTML, CSS, and JavaScript, a Node.js backend using Express and MongoDB, and Python-based machine learning APIs for predictions.

## Directory Structure

```
challenge_project-1/
├── LICENSE
├── README.md                 # Main project README (this file)
├── api/                      # Python prediction APIs (Flask/FastAPI)
│   ├── disease_api.py        # API endpoint for disease prediction
│   ├── waste_vol_api.py      # API endpoint for waste volume prediction
│   ├── model.pkl             # ML model file
│   ├── model_features.pkl    # features file
│   ├── *.csv                 # Data files
│   └── requirements.txt      # Python dependencies for APIs
├── backend/                  # Node.js backend (Express.js)
│   ├── .env                  # Environment variables (DB connection, JWT, API URL)
│   ├── index.js              # Main server entry point
│   ├── package.json          # Node.js dependencies
│   ├── config/               # Configuration files (DB, JWT)
│   ├── controllers/          # Request handlers (auth, predictions)
│   ├── middleware/           # Custom middleware (auth protection)
│   ├── models/               # Mongoose schemas (User, Predictions)
│   └── routes/               # API route definitions
├── challenge/                # Frontend application (HTML, CSS, JS)
│   ├── main_page/            # Main application pages
│   │   ├── index.html        # Landing page
│   │   ├── styles.css
│   │   ├── about/            # About, Signin, Signup pages
│   │   │   ├── signin.html
│   │   │   ├── account.html  # Signup page
│   │   │   ├── signin.js     # Login logic
│   │   │   └── signup.js     # Signup logic
│   │   └── profile/          # User profile section (Dashboard, Analysis, Tracking)
│   │       ├── user.html     # User dashboard
│   │       ├── analyse.html  # Disease analysis page
│   │       ├── track.html    # Waste tracking/prediction page
│   │       ├── profile.js    # Common profile logic (auth check, logout)
│   │       ├── analyse.js    # Disease prediction logic
│   │       └── track.js      # Waste prediction logic
│   └── *.html/css/png/md     # Other static assets and pages
└── chatbot/                  # (Separate) Chatbot component (Client/Server)
    └── ...
```

## Setup and Installation

### Prerequisites

*   **Node.js and npm:** Required for the backend. ([Download Node.js](https://nodejs.org/))
*   **Python and pip:** Required for the prediction APIs. ([Download Python](https://www.python.org/))
*   **MongoDB:** Required database for the backend. ([Install MongoDB](https://www.mongodb.com/try/download/community)) Ensure the MongoDB server is running.

### 1. Backend Setup

```bash
# Navigate to the backend directory
cd backend

# Install dependencies
npm install

# Create a .env file (if not present) and configure variables:
# PORT=5000
# MONGO_URI=mongodb://localhost:27017/auth_db  # Adjust if your DB is different
# JWT_SECRET=your_super_secret_jwt_key         # Choose a strong secret key
# BASE_URL=http://127.0.0.1:8000/             # URL of your running Python APIs (adjust port if needed)
# Or BASE_URL=https://your-deployed-api-url/ if APIs are deployed

# Start the backend server
node index.js
# The server should now be running (default: http://localhost:5000)
```

### 2. Prediction API Setup

*   **Note:** The backend is currently configured via `backend/.env` to use `https://arshsensei.duckdns.org/` as the `BASE_URL`. If you intend to run the Python APIs locally, update the `BASE_URL` in `backend/.env` accordingly (e.g., `http://127.0.0.1:8000/` if the APIs run on port 8000).

*   **Important:** The disease prediction API requires a Gemini API key. You must obtain a key from Google AI Studio and set it as an environment variable.

*   **If running locally:**
    ```bash
    # Navigate to the api directory
    cd api

    # Create a .env file (if not present) and add your Gemini API key:
    # echo "GEMINI_API_KEY=YOUR_GEMINI_API_KEY" > .env

    # Install Python dependencies
    pip install -r requirements.txt

    # Install Python dependencies
    pip install -r requirements.txt

    # Start the prediction APIs
    # uvicorn disease_api:app --reload --port 8000
    # uvicorn waste_vol_api:app --reload --port 8001
    ```

    *   **To run the APIs:**
        ```bash
        # From the api directory, run each API:
        uvicorn disease_api:app --reload --port 8000
        uvicorn waste_vol_api:app --reload --port 8001 # Use a different port
        ```

### 3. Frontend Access

*  Access your frontend at http://localhost:5000/main_page/

## Running the Application

1.  Ensure your MongoDB server is running.
2.  Ensure the Prediction APIs are running (either locally or deployed at the `BASE_URL` specified in `backend/.env`).
3.  Start the Node.js backend server (`cd backend && node index.js`).
4.  Open the frontend HTML files (e.g., `challenge/main_page/about/signin.html`) in your browser.

## Key Features Implemented

*   **User Authentication:** Sign up, sign in, and logout functionality using JWT tokens stored in `localStorage`. Profile pages are protected.
*   **Disease Prediction:** Upload plant leaf images on the 'Analysis' page to get predictions from the Python API.
*   **Waste Volume Prediction:** Input farm parameters on the 'Track' page to get waste volume predictions from the Python API.

## Environment Variables (`backend/.env`)

*   `PORT`: Port for the Node.js backend server (default: 5000).
*   `MONGO_URI`: Connection string for your MongoDB database.
*   `JWT_SECRET`: Secret key used for signing JSON Web Tokens.
*   `BASE_URL`: The base URL where the Python prediction APIs are hosted.

## Confirmation of Setup

*   The frontend (`challenge/`) is connected to the backend (`backend/`) via API calls initiated from the JavaScript files (`signin.js`, `signup.js`, `profile.js`, `analyse.js`, `track.js`).
*   Authentication is handled via `/api/auth/` routes, and predictions via `/api/predictions/` routes.
*   The backend uses the `BASE_URL` environment variable to communicate with the Python prediction APIs (`api/`).
*   All created JavaScript files are linked within their respective HTML pages.
*   The `chatbot/` directory appears to be a separate component and was not modified or integrated in this task.
*   The social login buttons in `signin.html` and `account.html` are currently placeholders and do not have functional OAuth implementations.
*   The Google Map integration in `track.html` was pre-existing and is separate from the waste prediction form added.
