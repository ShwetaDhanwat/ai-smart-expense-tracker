import { useEffect, useState } from "react";
import { expenseService } from "../../services/expenseService";
function AIInsights() {
  const [insights, setInsights] = useState([]);
  useEffect(() => {
  const fetchAIInsights = async () => {
    try {
      const data = await expenseService.getAIInsights();

      if (data.success) {
        setInsights(data.insights);
      }
    } catch (error) {
      console.error(error);
    }
  };

  fetchAIInsights();
}, []);
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-5">
        🤖 AI Insights
      </h2>

      <div className="space-y-4">
  {insights.map((item, index) => (
    <div
      key={index}
      className="bg-blue-50 p-4 rounded-xl"
    >
      {item}
    </div>
  ))}
</div>
    </div>
  );
}

export default AIInsights;