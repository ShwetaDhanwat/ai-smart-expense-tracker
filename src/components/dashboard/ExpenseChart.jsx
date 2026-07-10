import { useEffect, useState } from "react";
import { expenseService } from "../../services/expenseService";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

function ExpenseChart() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchChart = async () => {
      try {
        const data = await expenseService.getMonthlyChart();

        if (data.success) {
          const formattedData = data.data.map((item) => ({
            month: item.month,
            expense: Number(item.expense),
          }));

          setChartData(formattedData);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchChart();
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 h-[420px]">
      <h2 className="text-2xl font-bold mb-6">
        Monthly Expenses
      </h2>

      {chartData.length === 0 ? (
        <div className="flex justify-center items-center h-[300px] text-gray-500">
          No expense data available.
        </div>
      ) : (
        <ResponsiveContainer width="100%" height="85%">
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="expense"
              fill="#2563eb"
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}

export default ExpenseChart;