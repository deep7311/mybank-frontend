import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

const ProfilePage = () => {
  const { user, setUser } = useContext(AppContext);
  const [amount, setAmount] = useState("");
  const [transactionType, setTransactionType] = useState("");
  const [loading, setLoading] = useState(false);

  const handleTransaction = async () => {
    if (!amount || !transactionType) {
      toast.error("Please enter amount and select transaction type");
      return;
    }

    setLoading(true);
    const url = `${import.meta.env.VITE_API_URL}/api/user/${transactionType}/${user._id}`;
    try {
      const response = await axios.post(url, { amount });
      setUser(response.data.user);
      if (response.data.success) {
        toast.success(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-800 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-2xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">
          👤 Welcome, {user.name}
        </h1>
        <p className="text-sm text-center text-gray-500 mb-1">📧 {user.email}</p>
        <p className="text-xl text-green-600 font-semibold text-center mb-6">
          💰 Balance: ₹{user.balance}
        </p>

        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Amount
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              className="w-full px-4 py-2 text-gray-800 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Transaction Type
            </label>
            <select
              value={transactionType}
              onChange={(e) => setTransactionType(e.target.value)}
              className="w-full px-4 py-2 text-gray-800 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">-- Select Transaction --</option>
              <option value="withdraw">Withdraw</option>
              <option value="deposit">Deposit</option>
            </select>
          </div>

          <button
            onClick={handleTransaction}
            disabled={loading}
            className={`w-full py-2 rounded-md text-white font-semibold transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700"
            }`}
          >
            {loading ? "Processing..." : `Submit ${transactionType || ""}`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
