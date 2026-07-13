import { Bell, CalendarDays } from "lucide-react";
function Topbar() {
 return (
  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">

    <div>
      <h1 className="text-3xl md:text-4xl font-bold text-slate-800">
        Dashboard
      </h1>

      <p className="text-gray-500 mt-2">
        Welcome back, Shweta 👋
      </p>
    </div>

    <div className="flex items-center gap-4">

      <div className="hidden md:flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow">
        <CalendarDays size={18} />
        <span className="text-sm font-medium">
          {new Date().toLocaleDateString("en-IN", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </span>
      </div>

      <button className="bg-white p-3 rounded-xl shadow hover:shadow-lg transition">
        <Bell size={20} />
      </button>

      <img
        src="https://i.pravatar.cc/80"
        alt="Profile"
        className="w-14 h-14 rounded-full border-4 border-white shadow-lg"
      />

    </div>

  </div>
);
}

export default Topbar;