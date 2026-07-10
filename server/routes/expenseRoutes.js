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
} = require("../controllers/expenseController");

// Dashboard Summary
router.get("/summary", getSummary);
// Monthly Expense Chart
router.get("/monthly-chart", getMonthlyExpenses);

// Get All Expenses
router.get("/", authMiddleware, getExpenses);

router.post("/", authMiddleware, addExpense);

router.put("/:id", authMiddleware, updateExpense);

router.delete("/:id", authMiddleware, deleteExpense);

router.get("/summary", authMiddleware, getSummary);

router.get("/monthly-chart", authMiddleware, getMonthlyExpenses);

module.exports = router;