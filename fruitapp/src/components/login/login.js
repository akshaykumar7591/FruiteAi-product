import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false); // To check if the form is submitted
  const [formValid, setFormValid] = useState(false);

  const navigate = useNavigate(); // For navigation

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  // Email validation using regular expression
  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true); // Set submitted to true when form is submitted

    // If form is valid, navigate to the homepage
    if (email && password && !emailError && !passwordError) {
      navigate('/home'); // Navigating to the homepage
    }
  };

  // Validate email and password whenever values change
  useEffect(() => {
    if (isSubmitted) {
      // Email validation
      if (email && !validateEmail(email)) {
        setEmailError('Invalid email format');
      } else if (!email) {
        setEmailError('Email is required');
      } else {
        setEmailError('');
      }

      // Password validation
      if (!password) {
        setPasswordError('Password is required');
      } else if (password.length < 6) {
        setPasswordError('Password must be at least 6 characters');
      } else {
        setPasswordError('');
      }

      // Check form validity
      setFormValid(!emailError && !passwordError && email && password);
    }
  }, [email, password, isSubmitted, emailError, passwordError]);

  return (
    <div className="w-screen flex justify-center align-middle">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4 header">Login</h1>
        <p className="text-center text-gray-600 mb-4">
          By signing in you are agreeing to our <a href="#" className="text-blue-500">Terms and privacy policy</a>
        </p>
        <div className="flex justify-center mb-4">
          <Link to="/" className="text-blue-500 border-b-2 border-blue-500 pb-1 mr-4">Login</Link>
          <Link to="/register" className="text-gray-500 pb-1">Register</Link>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">
              <i className="fas fa-envelope mr-2"></i>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 py-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            {isSubmitted && emailError && <p className="text-red-500 text-sm">{emailError}</p>}
          </div>
          <div className="mb-4 relative">
            <label className="block text-gray-700">
              <i className="fas fa-lock mr-2"></i>
              <input
                type={passwordVisible ? 'text' : 'password'}
                placeholder="Password"
                className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 py-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <i
                className={`fas ${passwordVisible ? 'fa-eye-slash' : 'fa-eye'} absolute right-0 top-0 mt-3 mr-2 text-gray-500 cursor-pointer`}
                onClick={togglePasswordVisibility}
              ></i>
            </label>
            {isSubmitted && passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
          </div>
          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center text-gray-700">
              <input type="checkbox" className="mr-2" />
              Remember password
            </label>
            <a href="#" className="text-blue-500">Forget password?</a>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg"
          >
            Login
          </button>
        </form>
        <p className="text-center text-gray-500 my-4">or connect with</p>
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#" className="text-blue-700"><i className="fab fa-facebook fa-2x"></i></a>
          <a href="#" className="text-gray-700"><i className="fab fa-instagram fa-2x"></i></a>
          <a href="#" className="text-red-600"><i className="fab fa-pinterest fa-2x"></i></a>
          <a href="#" className="text-blue-500"><i className="fab fa-linkedin fa-2x"></i></a>
        </div>
        <div className="flex justify-center">
           {/* <FontAwesomeIcon icon="fa-solid fa-fingerprint" /> */}
          {/* <a href="#"><img src='/biometrics.png' alt='biometrics'/></a> */}
        </div>
      </div>
    </div>
  );
}

export default Login;
