import { FaArrowRight, FaPlayCircle } from "react-icons/fa";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="pt-32 pb-24 bg-gradient-to-br from-blue-50 via-white to-indigo-100">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >

            <span className="inline-block bg-blue-100 text-blue-600 px-5 py-2 rounded-full font-semibold">
              🚀 AI Powered Personal Finance
            </span>

            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight text-gray-900 mt-8">
              Track Expenses
              <br />
              Smarter with AI
            </h1>

            <p className="text-xl text-gray-600 mt-8 leading-9 max-w-xl">
              Manage your income and expenses effortlessly,
              discover smart AI insights,
              visualize your spending habits,
              and achieve your financial goals faster.
            </p>

            <div className="flex gap-5 mt-10">

              <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-4 rounded-xl flex items-center gap-3 shadow-lg">

                Get Started

                <FaArrowRight />

              </button>

              <button className="border border-gray-300 hover:bg-gray-100 transition px-8 py-4 rounded-xl flex items-center gap-3">

                <FaPlayCircle />

                Watch Demo

              </button>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >

            <div className="bg-white rounded-3xl shadow-2xl p-8">

              <h2 className="text-3xl font-bold mb-8">
                Monthly Overview
              </h2>

              <div className="space-y-5">

                <div className="flex justify-between bg-blue-50 rounded-xl p-5">
                  <span>Total Balance</span>
                  <span className="font-bold text-blue-600">
                    ₹45,200
                  </span>
                </div>

                <div className="flex justify-between bg-red-50 rounded-xl p-5">
                  <span>Total Expense</span>
                  <span className="font-bold text-red-500">
                    ₹18,600
                  </span>
                </div>

                <div className="flex justify-between bg-green-50 rounded-xl p-5">
                  <span>Savings</span>
                  <span className="font-bold text-green-600">
                    ₹26,600
                  </span>
                </div>

                <div className="bg-yellow-50 rounded-xl p-5">
                  🤖 AI predicts you can save
                  <span className="font-bold">
                    {" "}₹4,500
                  </span>
                  {" "}this month.
                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default Hero;