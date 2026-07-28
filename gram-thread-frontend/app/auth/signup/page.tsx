"use client";

import Link from "next/link";
import { useState } from "react"; 

export default function SignupPage() {

    const [formData, setFormData] = useState({
  name: "",
  email: "",
  mobile: "",
  password: "",
}); 

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {

    const response = await fetch(
      "http://localhost:8000/api/users/signup",
      //"http://108.129.210.146:8000/api/users/signup",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(formData),
      }
    );


    const data = await response.json();

    console.log(data);

  } catch (error) {

    console.log(error);

  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        
        <h1 className="text-3xl font-semibold text-center text-gray-900">
          Create Account
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Join Gramthread and start shopping
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              value={formData.name}
  onChange={(e) =>
    setFormData({
      ...formData,
      name: e.target.value,
    })
  }
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
            />
          </div>


          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={formData.email}
  onChange={(e) =>
    setFormData({
      ...formData,
      email: e.target.value,
    })
  }
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
            />
          </div>
<div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
             mobile number
            </label>
            <input
              type="tel"
              placeholder="enter your mobile number"
               value={formData.mobile}
  onChange={(e) =>
    setFormData({
      ...formData,
      mobile: e.target.value,
    })
  }
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Create password"
               value={formData.password}
  onChange={(e) =>
    setFormData({
      ...formData,
      password: e.target.value,
    })
  }
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
            />
          </div>


          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm password"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
            />
          </div>


          {/* Terms */}
          <div className="flex items-center gap-2">
            <input type="checkbox" className="h-4 w-4" />

            <p className="text-sm text-gray-600">
              I agree to the Terms & Conditions
            </p>
          </div>


          {/* Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Create Account
          </button>

        </form>


        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <Link
            href="/auth/login"
            className="text-black font-medium hover:underline"
          >
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}