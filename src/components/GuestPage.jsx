import React from "react";
import { Link } from "react-router-dom";

const GuestPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-indigo-900 via-purple-800 to-pink-700 flex items-center justify-center px-4">
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-xl max-w-lg text-center text-white border border-white/20">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to <span className="text-yellow-300">My Bank</span>!</h1>
        <p className="text-lg mb-6">
          This is a secure and modern banking portal. Please log in to continue.
        </p>

        <Link to="/login">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded-full transition-all duration-300 shadow-md">
            Login to Continue
          </button>
        </Link>

        <p className="mt-6 text-sm text-white/80">
          Don't have an account?{" "}
          <Link to="/register" className="underline text-white hover:text-yellow-300">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default GuestPage;
