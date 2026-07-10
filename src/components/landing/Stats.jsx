import { FaUsers, FaWallet, FaChartLine, FaStar } from "react-icons/fa";

function Stats() {
  const stats = [
    {
      icon: <FaUsers className="text-4xl text-blue-600" />,
      number: "25K+",
      title: "Active Users",
    },
    {
      icon: <FaWallet className="text-4xl text-green-600" />,
      number: "₹5 Cr+",
      title: "Expenses Tracked",
    },
    {
      icon: <FaChartLine className="text-4xl text-purple-600" />,
      number: "98%",
      title: "Prediction Accuracy",
    },
    {
      icon: <FaStar className="text-4xl text-yellow-500" />,
      number: "4.9★",
      title: "User Rating",
    },
  ];

  return (
    <section className="bg-blue-600 py-20 text-white">
      <div className="max-w-7xl mx-auto px-8">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 rounded-2xl p-8 text-center backdrop-blur-sm"
            >
              <div className="flex justify-center mb-4">
                {item.icon}
              </div>

              <h2 className="text-4xl font-bold">
                {item.number}
              </h2>

              <p className="mt-3 text-lg">
                {item.title}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Stats;