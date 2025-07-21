import axios from "axios";
import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const { setUser } = useContext(AppContext);
  const [loading, setLoading] = useState(false);

  const handleInput = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const url = import.meta.env.VITE_API_URL;

    try {
      const response = await axios.post(`${url}/api/user/login`, data);
      if (response.data.success) {
        toast.success(response.data.message);
        setUser(response.data.user);
        setLoading(false);
        navigate("/");
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
      toast.error(error?.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-800 to-indigo-900 flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white/10 backdrop-blur-md p-8 md:p-10 rounded-2xl shadow-xl w-full max-w-md text-white border border-white/20"
      >
        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          onChange={handleInput}
          className="w-full mb-4 p-3 rounded-lg bg-white/20 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />

        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          onChange={handleInput}
          className="w-full mb-6 p-3 rounded-lg bg-white/20 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded-lg font-semibold transition duration-300 ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-yellow-400 hover:bg-yellow-500 text-black"
          }`}
        >
          {loading ? "Loading..." : "Login"}
        </button>

        <p className="mt-6 text-center text-sm text-white/80">
          Don't have an account?{" "}
          <Link to="/register" className="underline text-yellow-300 hover:text-yellow-400">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
