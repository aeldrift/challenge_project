const mongoose = require("mongoose");

const wastePredictionSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    crop: {
      type: String,
      required: true,
    },
    season: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    area: {
      type: Number,
      required: true,
    },
    fertilizer: {
      type: Number,
      required: true,
    },
    pesticide: {
      type: Number,
      required: true,
    },
    result: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const WastePrediction = mongoose.model(
  "WastePrediction",
  wastePredictionSchema
);

module.exports = WastePrediction;
