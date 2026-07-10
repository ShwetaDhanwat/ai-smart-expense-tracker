import { Link } from "react-router-dom";
import { FaWallet } from "react-icons/fa";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
     className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg shadow-md"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 h-20">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">

          <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg">
            <FaWallet className="text-white text-2xl" />
          </div>

          <div>
            <h1 className="text-3xl font-bold text-blue-600">
              Smart Expense Tracker
            </h1>

            <p className="text-sm text-gray-500">
              AI Powered Finance
            </p>
          </div>

        </Link>

        {/* Buttons */}

        <div className="flex gap-4">

          <Link to="/login">
            <button className="font-semibold px-5 py-2 hover:text-blue-600 transition">
              Login
            </button>
          </Link>

          <Link to="/register">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition shadow-lg">
              Register
            </button>
          </Link>

        </div>

      </div>
    </motion.nav>
  );
}

export default Navbar;