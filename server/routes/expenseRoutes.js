const authMiddleware = require("../middleware/authMiddleware");
const express = require("express");
const router = express.Router();

const {
  addExpense,
  getExpenses,
  updateExpense,
  deleteExpense,
  getSummary,
  getMonthlyExpenses,
  getAIInsights,
} = require("../controllers/expenseController");



// Get All Expenses
router.get("/", authMiddleware, getExpenses);

router.post("/", authMiddleware, addExpense);

router.put("/:id", authMiddleware, updateExpense);

router.delete("/:id", authMiddleware, deleteExpense);

router.get("/summary", authMiddleware, getSummary);

router.get("/monthly-chart", authMiddleware, getMonthlyExpenses);
router.get("/ai-insights", authMiddleware, getAIInsights);
router.get(
  "/category-summary",
  authMiddleware, getCategorySummary
);

module.exports = router;