const express = require("express");
const router = express.Router();

const { register, login } = require("../controllers/authController");

console.log("✅ authRoutes loaded");

// Test Route
router.get("/test", (req, res) => {
  res.json({
    success: true,
    message: "GET OK",
  });
});

// Register Route
router.post("/register", register);

// Login Route
router.post("/login", login);

module.exports = router;