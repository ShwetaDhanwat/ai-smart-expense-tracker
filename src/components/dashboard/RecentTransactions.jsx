import { useExpense } from "../../context/ExpenseContext";

function RecentTransactions() {
  const { expenses } = useExpense();

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mt-6">
      <h2 className="text-2xl font-bold mb-6">
        Recent Transactions
      </h2>

      {expenses.length === 0 ? (
        <p className="text-gray-500">
          No expenses added yet.
        </p>
      ) : (
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3">Title</th>
              <th className="text-left py-3">Category</th>
              <th className="text-left py-3">Date</th>
              <th className="text-right py-3">Amount</th>
            </tr>
          </thead>

          <tbody>
            {expenses.map((expense) => (
              <tr key={expense.id} className="border-b hover:bg-gray-50">
                <td className="py-3">{expense.title}</td>
                <td>{expense.category}</td>
                <td>{expense.date}</td>
                <td className="text-right font-semibold text-red-600">
                  ₹{expense.amount}
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