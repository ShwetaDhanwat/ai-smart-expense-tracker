import { toast } from "react-toastify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

const [formData, setFormData] = useState({
  name: "",
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

    const response = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (data.success) {
      toast.success("Registration Successful");

      navigate("/login");
    } else {
      toast.error(data.message);
    }

  } catch (error) {
    toast.error("Server Error");
    console.error(error);
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

      <h1 className="text-3xl font-bold text-center text-blue-600">
        Create Account
      </h1>

      <p className="text-center text-gray-500 mt-2">
        Join Smart Expense Tracker
      </p>

     <form
  className="mt-8 space-y-5"
  onSubmit={handleSubmit}
>

      <input
  type="text"
  name="name"
  placeholder="Full Name"
  value={formData.name}
  onChange={handleChange}
  className="w-full border rounded-xl p-3"
/>

      <input
  type="email"
  name="email"
  placeholder="Email"
  value={formData.email}
  onChange={handleChange}
  className="w-full border rounded-xl p-3"
/>

        <input
  type={showPassword ? "text" : "password"}
  name="password"
  placeholder="Password"
  value={formData.password}
  onChange={handleChange}
  className="w-full border rounded-xl p-3"
/>

        <button
          type="button"
          className="text-blue-600 text-sm"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? "Hide Password" : "Show Password"}
        </button>

        <button
  type="submit"
  disabled={loading}
 className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition text-white py-3 rounded-xl"
>
  {loading ? "Registering..." : "Register"}
</button>

      </form>

      <p className="text-center mt-6">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-blue-600 font-semibold"
        >
          Login
        </Link>
      </p>

    </div>
  );
}

export default RegisterForm;