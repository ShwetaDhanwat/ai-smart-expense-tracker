import { Link, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaWallet,
  FaChartPie,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";
import { toast } from "react-toastify";

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");

    toast.success("Logged out successfully!");

    navigate("/login");
  };

  return (
    <div className="w-64 bg-white shadow-xl min-h-screen p-6 sticky top-0">

      <h2 className="text-3xl font-extrabold text-blue-600 mb-10 tracking-wide">
        💰 Expense AI
      </h2>

      <nav className="space-y-5">

        <Link
          to="/dashboard"
          className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-all duration-300"
        >
          <FaHome />
          Dashboard
        </Link>

        <Link
          to="/add-expense"
          className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-all duration-300"
        >
          <FaWallet />
          Expenses
        </Link>

        <Link
          to="/reports"
          className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-all duration-300"
        >
          <FaChartPie />
          Reports
        </Link>

        <Link
          to="/profile"
          className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-all duration-300"
        >
          <FaUser />
          Profile
        </Link>

        <button
          onClick={handleLogout}
          className="flex items-center gap-3 text-red-500 mt-12 p-3 rounded-xl hover:bg-red-50 transition-all duration-300"
        >
          <FaSignOutAlt />
          Logout
        </button>

      </nav>

    </div>
  );
}

export default Sidebar;