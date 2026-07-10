import { useEffect, useState } from "react";
import {
  Wallet,
  IndianRupee,
  CreditCard,
  PiggyBank,
  TrendingUp,
} from "lucide-react";
import { expenseService } from "../../services/expenseService";

function SummaryCards() {
  const [summary, setSummary] = useState({
    balance: 0,
    income: 0,
    expense: 0,
    savings: 0,
  });

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const data = await expenseService.getSummary();

        if (data.success) {
          setSummary(data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchSummary();
  }, []);

  const cards = [
    {
      title: "Total Balance",
      value: summary.balance,
      icon: Wallet,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Income",
      value: summary.income,
      icon: TrendingUp,
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Expense",
      value: summary.expense,
      icon: CreditCard,
      gradient: "from-red-500 to-orange-500",
    },
    {
      title: "Savings",
      value: summary.savings,
      icon: PiggyBank,
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
      {cards.map((card, index) => {
        const Icon = card.icon;

        return (
          <div
            key={index}
            className={`bg-gradient-to-r ${card.gradient} rounded-3xl text-white p-6 shadow-xl hover:scale-105 transition-all duration-300`}
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="text-white/80 text-sm">{card.title}</p>

                <h2 className="text-3xl font-bold mt-3 flex items-center gap-1">
                  <IndianRupee size={26} />
                  {Number(card.value).toLocaleString("en-IN")}
                </h2>
              </div>

              <div className="bg-white/20 p-4 rounded-2xl">
                <Icon size={32} />
              </div>
            </div>

            <div className="mt-6 flex items-center text-sm">
              <TrendingUp size={16} className="mr-2" />
              <span>Live Dashboard Data</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SummaryCards;