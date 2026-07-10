function Topbar() {
  return (
    <div className="flex justify-between items-center">

      <div>
        <h1 className="text-4xl font-bold">
          Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Welcome back, Shweta 👋
        </p>
      </div>

      <img
        src="https://i.pravatar.cc/80"
        alt="Profile"
        className="w-14 h-14 rounded-full"
      />

    </div>
  );
}

export default Topbar;