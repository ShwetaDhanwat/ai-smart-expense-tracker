function AIInsights() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-5">
        🤖 AI Insights
      </h2>

      <div className="space-y-4">

        <div className="bg-blue-50 p-4 rounded-xl">
          You spent 15% less this week.
        </div>

        <div className="bg-green-50 p-4 rounded-xl">
          Saving trend is improving.
        </div>

        <div className="bg-yellow-50 p-4 rounded-xl">
          Food expenses increased this month.
        </div>

      </div>

    </div>
  );
}

export default AIInsights;