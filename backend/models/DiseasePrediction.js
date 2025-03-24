const mongoose = require("mongoose");

const diseasePredictionSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    imageData: {
      type: String,
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

const DiseasePrediction = mongoose.model(
  "DiseasePrediction",
  diseasePredictionSchema
);

module.exports = DiseasePrediction;
