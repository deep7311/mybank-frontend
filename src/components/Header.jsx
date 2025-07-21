import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";

const Header = () => {
  const { user, setUser } = useContext(AppContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate("/");
  };
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-gradient">
          My Bank
        </h1>

        {/* Login Button */}
        {user ? (
          <Link
            to="/login"
            className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold hover:from-indigo-500 hover:to-purple-500 transition duration-300 shadow-md"
            onClick={handleLogout}
          >
            Logout
          </Link>
        ) : (
          <Link
            to="/login"
            className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold hover:from-indigo-500 hover:to-purple-500 transition duration-300 shadow-md"
          >
            Login
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
