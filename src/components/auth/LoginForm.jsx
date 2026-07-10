import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
const navigate = useNavigate();

const [formData, setFormData] = useState({
  email: "",
  password: "",
});

const [loading, setLoading] = useState(false);
const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    setLoading(true);

    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (data.success) {
      // Save JWT token
      localStorage.setItem("token", data.token);

      // Save logged-in user
      localStorage.setItem("user", JSON.stringify(data.user));

      alert("Login Successful 🎉");

      navigate("/dashboard");
    } else {
      alert(data.message);
    }

  } catch (error) {
    console.error(error);
    alert("Server Error");
  } finally {
    setLoading(false);
  }
};
  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

      <h1 className="text-3xl font-bold text-center text-blue-600">
        Welcome Back
      </h1>

      <p className="text-center text-gray-500 mt-2">
        Login to your account
      </p>

      <form
  className="mt-8 space-y-5"
  onSubmit={handleSubmit}
>

        <div>
          <label className="font-medium">Email</label>

         <input
  type="email"
  name="email"
  placeholder="Enter your email"
  value={formData.email}
  onChange={handleChange}
  className="w-full mt-2 border rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500"
/>
        </div>

        <div>
          <label className="font-medium">Password</label>

          <input
  type={showPassword ? "text" : "password"}
  name="password"
  placeholder="Enter password"
  value={formData.password}
  onChange={handleChange}
  className="w-full mt-2 border rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500"
/>

          <button
            type="button"
            className="text-sm text-blue-600 mt-2"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide Password" : "Show Password"}
          </button>
        </div>
<button
  type="submit"
  disabled={loading}
  className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-xl"
>
  {loading ? "Logging in..." : "Login"}
</button>

      </form>

      <p className="text-center mt-6">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="text-blue-600 font-semibold"
        >
          Register
        </Link>
      </p>

    </div>
  );
}

export default LoginForm;