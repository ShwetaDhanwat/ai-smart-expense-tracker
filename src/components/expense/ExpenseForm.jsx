import { expenseService } from "../../services/expenseService";
import { useForm } from "react-hook-form";

function ExpenseForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();


 const onSubmit = async (data) => {
  try {
const expenseData = {
  title: data.title,
  amount: Number(data.amount),
  category: data.category,
  payment_method: data.payment,
  expense_date: data.date,
  notes: data.notes,
};
    const response = await expenseService.addExpense(expenseData);

    if (response.success) {
      alert("Expense Added Successfully 🎉");
      reset();
    } else {
      alert(response.message);
    }

  } catch (error) {
    console.error(error);
    alert("Server Error");
  }
};
  return (
    <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Add New Expense
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

        {/* Title */}
        <div>
          <label className="block mb-2 font-semibold">
            Expense Title
          </label>

          <input
            type="text"
            placeholder="Enter expense title"
            {...register("title", {
              required: "Title is required",
            })}
            className="w-full border rounded-lg p-3"
          />

          <p className="text-red-500 text-sm mt-1">
            {errors.title?.message}
          </p>
        </div>

        {/* Amount */}
        <div>
          <label className="block mb-2 font-semibold">
            Amount (₹)
          </label>

          <input
            type="number"
            placeholder="Enter amount"
            {...register("amount", {
              required: "Amount is required",
            })}
            className="w-full border rounded-lg p-3"
          />

          <p className="text-red-500 text-sm mt-1">
            {errors.amount?.message}
          </p>
        </div>

        {/* Category */}
        <div>
          <label className="block mb-2 font-semibold">
            Category
          </label>

          <select
            {...register("category")}
            className="w-full border rounded-lg p-3"
          >
            <option>Food</option>
            <option>Travel</option>
            <option>Shopping</option>
            <option>Bills</option>
            <option>Health</option>
            <option>Education</option>
            <option>Entertainment</option>
            <option>Others</option>
          </select>
        </div>

        {/* Date */}
        <div>
          <label className="block mb-2 font-semibold">
            Date
          </label>

          <input
            type="date"
            {...register("date")}
            className="w-full border rounded-lg p-3"
          />
        </div>

        {/* Payment */}
        <div>
          <label className="block mb-2 font-semibold">
            Payment Method
          </label>

          <select
            {...register("payment")}
            className="w-full border rounded-lg p-3"
          >
            <option>UPI</option>
            <option>Cash</option>
            <option>Credit Card</option>
            <option>Debit Card</option>
            <option>Net Banking</option>
          </select>
        </div>

        {/* Notes */}
        <div>
          <label className="block mb-2 font-semibold">
            Notes
          </label>

          <textarea
            rows="4"
            placeholder="Optional notes..."
            {...register("notes")}
            className="w-full border rounded-lg p-3"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
        >
          Add Expense
        </button>

      </form>
    </div>
  );
}

export default ExpenseForm;