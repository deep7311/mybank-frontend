import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

const Register = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    confirm_password: ''
  })

  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const url = import.meta.env.VITE_API_URL

  const handleInput = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (data.password !== data.confirm_password) {
      toast.error("Password doesn't match")
      return
    }
    setLoading(true)
    try {
      const response = await axios.post(`${url}/api/user/register`, data)
      if (response.data.success) {
        toast.success(response.data.message)
        setData({
          name: '',
          email: '',
          password: '',
          confirm_password: ''
        })
        navigate('/login')
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-800 to-indigo-900 flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white/10 backdrop-blur-md p-8 md:p-10 rounded-2xl shadow-xl w-full max-w-md text-white border border-white/20"
      >
        <h2 className="text-3xl font-bold text-center mb-6">Create Account</h2>

        {/* Name */}
        <input
          type="text"
          name="name"
          value={data.name}
          placeholder="Enter your name"
          onChange={handleInput}
          required
          className="w-full mb-4 p-3 rounded-lg bg-white/20 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          value={data.email}
          placeholder="Enter your email"
          onChange={handleInput}
          required
          className="w-full mb-4 p-3 rounded-lg bg-white/20 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />

        {/* Password with eye toggle */}
        <div className="relative mb-4">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={data.password}
            placeholder="Create password"
            onChange={handleInput}
            required
            className="w-full p-3 rounded-lg bg-white/20 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 pr-10"
          />
          <div
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
          </div>
        </div>

        {/* Confirm Password */}
        <input
          type="password"
          name="confirm_password"
          value={data.confirm_password}
          placeholder="Confirm password"
          onChange={handleInput}
          required
          className="w-full mb-6 p-3 rounded-lg bg-white/20 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded-lg font-semibold transition duration-300 ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-yellow-400 hover:bg-yellow-500 text-black"
          }`}
        >
          {loading ? "Creating..." : "Register"}
        </button>

        <p className="mt-6 text-center text-sm text-white/80">
          Already have an account?{" "}
          <Link to="/login" className="underline text-yellow-300 hover:text-yellow-400">
            Login
          </Link>
        </p>
      </form>
    </div>
  )
}

export default Register
