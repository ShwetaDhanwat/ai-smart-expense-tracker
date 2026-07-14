import DashboardLayout from "../components/dashboard/DashboardLayout";

function Reports() {
  return (
    <DashboardLayout>
      <div className="space-y-6">

        <h1 className="text-4xl font-bold">
          📊 Expense Reports
        </h1>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-gray-500">Total Income</h3>
            <h2 className="text-3xl font-bold text-green-600">
              ₹65,000
            </h2>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-gray-500">Total Expense</h3>
            <h2 className="text-3xl font-bold text-red-600">
              ₹12,500
            </h2>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-gray-500">Savings</h3>
            <h2 className="text-3xl font-bold text-blue-600">
              ₹52,500
            </h2>
          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}

export default Reports;