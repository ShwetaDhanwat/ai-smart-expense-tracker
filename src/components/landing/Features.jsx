import { FaRobot, FaChartPie, FaWallet, FaFileInvoice } from "react-icons/fa";

function Features() {
  const features = [
    {
      icon: <FaWallet className="text-4xl text-blue-600" />,
      title: "Expense Tracking",
      desc: "Record and organize every expense with ease.",
    },
    {
      icon: <FaChartPie className="text-4xl text-green-600" />,
      title: "Analytics",
      desc: "Visualize your spending with interactive charts.",
    },
    {
      icon: <FaRobot className="text-4xl text-purple-600" />,
      title: "AI Insights",
      desc: "Get smart suggestions to improve your finances.",
    },
    {
      icon: <FaFileInvoice className="text-4xl text-orange-500" />,
      title: "Reports",
      desc: "Download monthly and yearly expense reports.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center mb-4">
          Powerful Features
        </h2>

        <p className="text-center text-gray-600 mb-16">
          Everything you need to manage your personal finances.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((item, index) => (
            <div
              key={index}
              className="bg-slate-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            >
              {item.icon}

              <h3 className="text-2xl font-semibold mt-6">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-4">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Features;