import { Trash2 } from "lucide-react";
import { FaTrash } from "react-icons/fa";
import { useExpense } from "../../context/ExpenseContext";
import { toast } from "react-toastify";
import { useState } from "react";
import { FaUtensils, FaPlane, FaShoppingBag, FaMoneyBill, FaHeartbeat, FaGraduationCap, FaFilm } from "react-icons/fa";
function RecentTransactions() {
  const { expenses, deleteExpense } = useExpense();
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const filteredExpenses = expenses.filter((expense) => {
  const searchText = search.toLowerCase();

  const matchesSearch =
    expense.title?.toLowerCase().includes(searchText) ||
    expense.category?.toLowerCase().includes(searchText) ||
    expense.notes?.toLowerCase().includes(searchText);

  const matchesCategory =
    categoryFilter === "All" ||
    expense.category === categoryFilter;

  return matchesSearch && matchesCategory;
});
const handleDelete = async (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this expense?"
  );

  if (!confirmDelete) return;

  const response = await deleteExpense(id);

  if (response?.success) {
    toast.success("Expense Deleted Successfully");
  } else {
    toast.error(response?.message || "Delete Failed");
  }
};

const getCategoryBadge = (category) => {
  const styles = {
    Food: "bg-green-100 text-green-700",
    Travel: "bg-blue-100 text-blue-700",
    Shopping: "bg-purple-100 text-purple-700",
    Bills: "bg-orange-100 text-orange-700",
    Health: "bg-red-100 text-red-700",
    Education: "bg-indigo-100 text-indigo-700",
    Entertainment: "bg-pink-100 text-pink-700",
    Others: "bg-gray-100 text-gray-700",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-sm font-semibold ${
        styles[category] || styles.Others
      }`}
    >
      {category}
    </span>
  );
};
 
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mt-6">
      <h2 className="text-2xl font-bold mb-6">
        Recent Transactions
      </h2>
      <div className="grid md:grid-cols-2 gap-4 mb-6">

  <input
    type="text"
    placeholder="🔍 Search by title, category or notes..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />

  <select
    value={categoryFilter}
    onChange={(e) => setCategoryFilter(e.target.value)}
    className="w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
  >
    <option value="All">📂 All Categories</option>
    <option value="Food">Food</option>
    <option value="Travel">Travel</option>
    <option value="Shopping">Shopping</option>
    <option value="Bills">Bills</option>
    <option value="Health">Health</option>
    <option value="Education">Education</option>
    <option value="Entertainment">Entertainment</option>
    <option value="Others">Others</option>
  
</select>
</div>
  

      {filteredExpenses.length === 0 ? (
        <p className="text-gray-500">
          No expenses added yet.
        </p>
      ) : (
        <table className="w-full">
          <thead className="bg-slate-100">
  <tr>
    <th className="w-2/5 text-left py-4 px-4 font-bold text-gray-700">
      Title
    </th>

    <th className="w-1/5 text-left py-4 px-4 font-bold text-gray-700">
      Category
    </th>

    <th className="w-1/5 text-center py-4 px-4 font-bold text-gray-700">
      Date
    </th>

    <th className="w-1/6 text-right py-4 px-4 font-bold text-gray-700">
      Amount
    </th>

    <th className="w-24 text-center py-4 px-6 font-bold text-gray-700">
      Action
    </th>
  </tr>
</thead>

          <tbody>
            {filteredExpenses.map((expense) => (
              <tr
  key={expense.id}
  className="border-b hover:bg-blue-50 transition duration-200"
>
                <td className="py-4 px-4">
                  {expense.title}</td>
                <td>
  {getCategoryBadge(expense.category)}
</td>
                <td className="text-center py-4 px-4">
  {expense.expense_date
    ? new Date(expense.expense_date).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    : "-"}
</td>
                <td className="text-right py-4 px-6 font-bold text-blue-600 whitespace-nowrap">
  ₹{Number(expense.amount).toLocaleString("en-IN")}
</td>
                <td className="text-center py-4 px-6 whitespace-nowrap">
<button
  onClick={() => handleDelete(expense.id)}
  className="inline-flex items-center gap-1 bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded-md transition"
>
  <Trash2 size={14} />
  <span className="text-xs">Delete</span>
</button>
</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default RecentTransactions;