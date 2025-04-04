const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path"); // Import path module

// Load environment variables
dotenv.config();

// Import routes
const authRoutes = require("./routes/authRoutes");
const predictionRoutes = require("./routes/predictionRoutes");

// Create Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

// Connect to database
require("./config/db")();

// --- Serve Static Frontend Files ---
// Serve all files within the '../challenge' directory from the root URL '/'
// e.g., /main_page/index.html will map to ../challenge/main_page/index.html
// e.g., /analyse.css will map to ../challenge/analyse.css
app.use(express.static(path.join(__dirname, '../challenge')));

// API Routes (These should come AFTER static serving if they have conflicting paths, but /api/ is distinct)
app.use("/api/auth", authRoutes);
app.use("/api/predictions", predictionRoutes);

// --- Fallback for SPA or direct HTML access ---
// This should come after API routes and static file serving.
// If a request is not an API call and not a file found by express.static,
// assume it's a frontend route and serve the main index.html.
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../challenge', 'main_page', 'index.html'));
});


// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
