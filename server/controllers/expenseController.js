const pool = require("../config/db");

// Add Expense
const addExpense = async (req, res) => {
  try {
    console.log("✅ Add Expense Controller Hit");

   const {
  title,
  amount,
  category,
  payment_method,
  expense_date,
  notes,
} = req.body;

const user_id = req.user.id;

    if (!title || !amount) {
      return res.status(400).json({
        success: false,
        message: "User ID, Title and Amount are required",
      });
    }

    await pool.query(
      `INSERT INTO expenses
      (user_id, title, amount, category, payment_method, expense_date, notes)
      VALUES ($1,$2,$3,$4,$5,$6,$7)`,
      [
        user_id,
        title,
        amount,
        category,
        payment_method,
        expense_date,
        notes,
      ]
    );

    return res.status(201).json({
      success: true,
      message: "Expense Added Successfully",
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
// Get All Expenses
const getExpenses = async (req, res) => {
  try {
    console.log("✅ Get Expenses Controller Hit");

    const user_id = req.user.id;

const result = await pool.query(
  `SELECT *
   FROM expenses
   WHERE user_id = $1
   ORDER BY id DESC`,
  [user_id]
);

    res.status(200).json({
      success: true,
      count: result.rows.length,
      expenses: result.rows,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
// Update Expense
const updateExpense = async (req, res) => {
  try {
    console.log("✅ Update Expense Controller Hit");

    const { id } = req.params;

    const {
      title,
      amount,
      category,
      payment_method,
      expense_date,
      notes,
    } = req.body;

    const user_id = req.user.id;

const result = await pool.query(
  `UPDATE expenses
   SET title=$1,
       amount=$2,
       category=$3,
       payment_method=$4,
       expense_date=$5,
       notes=$6
   WHERE id=$7
   AND user_id=$8
   RETURNING *`,
  [
    title,
    amount,
    category,
    payment_method,
    expense_date,
    notes,
    id,
    user_id,
  ]
);

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Expense not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Expense Updated Successfully",
      expense: result.rows[0],
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
// Delete Expense
const deleteExpense = async (req, res) => {
  try {
    console.log("✅ Delete Expense Controller Hit");

    const { id } = req.params;

    const user_id = req.user.id;

const result = await pool.query(
  "DELETE FROM expenses WHERE id = $1 AND user_id = $2 RETURNING *",
  [id, user_id]
);

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Expense not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Expense Deleted Successfully",
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
// Dashboard Summary
const getSummary = async (req, res) => {
  try {
    console.log("✅ Summary Controller Hit");

    const user_id = req.user.id;

const result = await pool.query(
  `
  SELECT
    COALESCE(SUM(amount), 0) AS total_expense
  FROM expenses
  WHERE user_id = $1
  `,
  [user_id]
);

    const totalExpense = Number(result.rows[0].total_expense);

    // Temporary values (we'll replace these when we add Income)
    const totalIncome = 65000;
    const balance = totalIncome - totalExpense;
    const savings = balance;

    res.status(200).json({
      success: true,
      balance,
      income: totalIncome,
      expense: totalExpense,
      savings,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
// Monthly Expense Chart
const getMonthlyExpenses = async (req, res) => {
  try {
    console.log("✅ Monthly Expense Chart Controller Hit");

    const user_id = req.user.id;

const result = await pool.query(
  `
  SELECT
    TO_CHAR(expense_date, 'Mon') AS month,
    COALESCE(SUM(amount), 0) AS expense
  FROM expenses
  WHERE user_id = $1
  GROUP BY TO_CHAR(expense_date, 'Mon'),
           EXTRACT(MONTH FROM expense_date)
  ORDER BY EXTRACT(MONTH FROM expense_date);
  `,
  [user_id]
);

    res.status(200).json({
      success: true,
      data: result.rows,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
// AI Insights
const getAIInsights = async (req, res) => {
  try {
    const user_id = req.user.id;

    const result = await pool.query(
      `
      SELECT category,
             SUM(amount) AS total
      FROM expenses
      WHERE user_id = $1
      GROUP BY category
      ORDER BY total DESC
      `,
      [user_id]
    );

    if (result.rows.length === 0) {
      return res.json({
        success: true,
        insights: [
          "No expense data available yet.",
        ],
      });
    }

    const highestCategory = result.rows[0];
    const totalExpense = result.rows.reduce(
  (sum, item) => sum + Number(item.total),
  0
);

const totalCategories = result.rows.length;

    const suggestion = Math.round(
      Number(highestCategory.total) * 0.1
    );

    return res.json({
      success: true,
      insights: [
  `🍔 Highest spending category: ${highestCategory.category}`,

  `💰 Total expense: ₹${totalExpense}`,

  `📂 You spent money in ${totalCategories} categories.`,

  `💸 You spent ₹${highestCategory.total} on ${highestCategory.category}.`,

  `💡 Reduce ${highestCategory.category} spending by 10% to save ₹${suggestion}.`,

  totalExpense > 10000
    ? "⚠️ Your monthly expenses are high. Consider reducing unnecessary spending."
    : "✅ Great job! Your expenses are under control.",
],
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
module.exports = {
  addExpense,
  getExpenses,
  updateExpense,
  deleteExpense,
  getSummary,
  getMonthlyExpenses,
  getAIInsights,
};