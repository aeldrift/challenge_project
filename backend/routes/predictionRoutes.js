const express = require("express");
const {
  predictDisease,
  predictWasteVolume,
} = require("../controllers/predictionController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/disease", protect, predictDisease);
router.post("/waste", protect, predictWasteVolume);

module.exports = router;
