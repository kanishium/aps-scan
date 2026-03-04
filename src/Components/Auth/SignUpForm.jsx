import React from 'react'
import { FaApple, FaEye, FaEyeSlash } from "react-icons/fa";
import { FaMeta } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';
import { useState } from "react";
const SignUpForm = ({ onSubmit }) => {

    const handleGoogleLogin = () => {
  console.log("Google login simulated");
  onSubmit();
};

const handleAppleLogin = () => {
  console.log("Apple login simulated");
  onSubmit();
};

const handleMetaLogin = () => {
  console.log("Meta login simulated");
  onSubmit();
};

    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className="m-5 sm:m-0 max-w-md bg-white rounded-2xl shadow-2xl p-8">

            <h2 className="text-3xl font-semibold text-center text-gray-800">
                Sign up
            </h2>

            <p className="text-center text-sm text-gray-800 mt-2">
                Already have an account?{" "}
                <span className="text-teal-600 font-medium cursor-pointer hover:underline">
                    Log in
                </span>
            </p>

            <form className="mt-6 space-y-4" onSubmit={(e) => {
                e.preventDefault();
                onSubmit(); 
            }}
            >

                <input
                    required
                    type="text"
                    placeholder="First name*"
                    className="w-full border  text-[#9E9E9E] border-gray-400 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-teal-500"
                    />

                <input
                    required
                    type="text"
                    placeholder="Last name*"
                    className="w-full border text-[#9E9E9E] border-gray-400 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-teal-500"
                    />

                <input
                    required
                    type="email"
                    placeholder="Email address*"
                    className="w-full border text-[#9E9E9E] border-gray-400 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-teal-500"
                    />

                <div className="relative">
                    <input
                    required
                        type={showPassword ? "text" : "password"}
                        placeholder="Password (8+ characters)*"
                        className="w-full border text-[#9E9E9E] border-gray-400 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-teal-500"
                    />

                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                </div>

                <div className="flex items-start gap-2 text-xs text-gray-600 mt-2">
                    <input required type="checkbox" className="mt-1" />
                    <p>
                        I agree to Aps’s{" "}
                        <span className="text-blue-500 underline cursor-pointer hover:underline">
                            Terms & Conditions
                        </span>{" "}
                        and acknowledge the{" "}
                        <span className="text-blue-500 underline cursor-pointer hover:underline">
                            Privacy Policy
                        </span>
                    </p>
                </div>

                <button
                    type="submit"
                    className="w-full  bg-[#0E9E9E] hover:bg-teal-700 text-white font-medium py-3 rounded-full transition mt-2"
                >
                    Create account
                </button>
            </form>

            <div className="flex justify-between gap-3 mt-6">

                <button onClick={handleAppleLogin} className="flex-1 bg-black text-2xl text-white  py-3 rounded-full flex items-center justify-center">
                    <FaApple />
                </button>
                <button onClick={handleGoogleLogin} className="flex-1 bg-gray-100 text-2xl py-3 rounded-full flex items-center justify-center">
                    <FcGoogle />
                </button>

                <button onClick={handleMetaLogin} className="flex-1 bg-blue-600 text-2xl text-white py-3 rounded-full flex items-center justify-center">
                    <FaMeta />
                </button>

            </div>
        </div>
    )
}

export default SignUpForm