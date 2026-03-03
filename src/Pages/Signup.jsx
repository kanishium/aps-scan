import React from 'react'
import AuthLayout from '../Components/Auth/AuthLayout'
import SignUpForm from '../Components/Auth/SignUpForm'
import { useNavigate } from "react-router-dom";
const Signup = () => {
    const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/dashboard");
  };
  return (
    <AuthLayout>
      <SignUpForm onSubmit={handleSignup} />
    </AuthLayout>
  )
}

export default Signup