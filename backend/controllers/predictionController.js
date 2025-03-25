const axios = require("axios");
const DiseasePrediction = require("../models/DiseasePrediction");
const WastePrediction = require("../models/WastePrediction");

// @desc    Predict plant disease
// @route   POST /api/predictions/disease
// @access  Private
const predictDisease = async (req, res) => {
  try {
    const { imageData } = req.body;

    if (!imageData) {
      return res.status(400).json({ message: "Image data is required" });
    }

    // Forward the request to the external API
    const response = await axios.post(
      `${process.env.BASE_URL}/farmx/predict/`,
      { image: imageData },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // Store the prediction in the database
    const prediction = await DiseasePrediction.create({
      user: req.user._id,
      imageData,
      result: response.data,
    });

    res.status(200).json({
      success: true,
      result: response.data,
      predictionId: prediction._id,
    });
  } catch (error) {
    console.error("Error predicting disease:", error.message);
    res.status(500).json({
      message: "Failed to predict disease",
      error: error.message,
    });
  }
};

// @desc    Predict waste volume
// @route   POST /api/predictions/waste
// @access  Private
const predictWasteVolume = async (req, res) => {
  try {
    const { crop, season, state, area, fertilizer, pesticide } = req.body;

    // Validate input
    if (
      !crop ||
      !season ||
      !state ||
      area === undefined ||
      fertilizer === undefined ||
      pesticide === undefined
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Forward the request to the external API
    const response = await axios.post(
      `${process.env.BASE_URL}/farmx/predict_waste_volume`,
      {
        crop,
        season,
        state,
        area,
        fertilizer,
        pesticide,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // Store the prediction in the database
    const prediction = await WastePrediction.create({
      user: req.user._id,
      crop,
      season,
      state,
      area,
      fertilizer,
      pesticide,
      result: response.data,
    });

    res.status(200).json({
      success: true,
      result: response.data,
      predictionId: prediction._id,
    });
  } catch (error) {
    console.error("Error predicting waste volume:", error.message);
    res.status(500).json({
      message: "Failed to predict waste volume",
      error: error.message,
    });
  }
};

module.exports = { predictDisease, predictWasteVolume };
