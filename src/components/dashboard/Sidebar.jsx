import { Link } from "react-router-dom";
import {
  FaHome,
  FaWallet,
  FaChartPie,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";

function Sidebar() {
  return (
    <div className="w-64 bg-white shadow-lg min-h-screen p-6">

      <h2 className="text-2xl font-bold text-blue-600 mb-10">
        💰 Expense AI
      </h2>

      <nav className="space-y-5">

        <Link to="/dashboard" className="flex items-center gap-3 hover:text-blue-600">
          <FaHome />
          Dashboard
        </Link>

        <Link to="/add-expense" className="flex items-center gap-3 hover:text-blue-600">
          <FaWallet />
          Expenses
        </Link>

        <Link to="/reports" className="flex items-center gap-3 hover:text-blue-600">
          <FaChartPie />
          Reports
        </Link>

        <Link to="/profile" className="flex items-center gap-3 hover:text-blue-600">
          <FaUser />
          Profile
        </Link>

        <button className="flex items-center gap-3 text-red-500 mt-12">
          <FaSignOutAlt />
          Logout
        </button>

      </nav>

    </div>
  );
}

export default Sidebar;