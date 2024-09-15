import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  // Email validation using a regular expression
  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  // Validate form fields and set errors
  const validateForm = () => {
    const newErrors = {};

    // Username validation
    if (!username) {
      newErrors.username = 'Username is required';
    }

    // Email validation
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      newErrors.email = 'Invalid email format';
    }

    // Password validation
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // useEffect to handle validation when user submits or modifies the input
  useEffect(() => {
    if (isSubmitted) {
      validateForm();
    }
  }, [username, email, password, isSubmitted]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (validateForm()) {
      navigate('/'); // Navigate after successful registration
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="w-screen flex justify-center align-middle">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4 header">Register</h1>
        <p className="text-center text-gray-600 mb-4">
          By signing in you are agreeing to our{' '}
          <a href="#" className="text-blue-500">
            Terms and privacy policy
          </a>
        </p>
        <div className="flex justify-center mb-4">
          <Link to="/" className="text-gray-500 pb-1 mr-4">
            Login
          </Link>
          <Link to="/register" className="text-blue-500 border-b-2 border-blue-500 pb-1 mr-4">
            Register
          </Link>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">
              <i className="fas fa-user mr-2"></i>
              <input
                type="text"
                placeholder="Username"
                className={`w-full border-b-2 ${errors.username ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-blue-500 py-2`}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">
              <i className="fas fa-envelope mr-2"></i>
              <input
                type="email"
                placeholder="Email Address"
                className={`w-full border-b-2 ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-blue-500 py-2`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div className="mb-4 relative">
            <label className="block text-gray-700">
              <i className="fas fa-lock mr-2"></i>
              <input
                type={passwordVisible ? 'text' : 'password'}
                placeholder="Password"
                className={`w-full border-b-2 ${errors.password ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-blue-500 py-2`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <i
                className={`fas ${passwordVisible ? 'fa-eye-slash' : 'fa-eye'} absolute right-0 top-0 mt-3 mr-2 text-gray-500 cursor-pointer`}
                onClick={togglePasswordVisibility}
              ></i>
            </label>
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>

          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center text-gray-700">
              <input type="checkbox" className="mr-2" />
              Remember password
            </label>
            <a href="#" className="text-blue-500">
              Forget password?
            </a>
          </div>

          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg">
            Register
          </button>
        </form>

        <p className="text-center text-gray-500 my-4">or connect with</p>
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#" className="text-blue-700">
            <i className="fab fa-facebook fa-2x"></i>
          </a>
          <a href="#" className="text-gray-700">
            <i className="fab fa-instagram fa-2x"></i>
          </a>
          <a href="#" className="text-red-600">
            <i className="fab fa-pinterest fa-2x"></i>
          </a>
          <a href="#" className="text-blue-500">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
        </div>
        {/* <div className="flex justify-center">
          <a href="#">
            <img src="https://placehold.co/50x50" alt="Fingerprint icon" className="w-12 h-12" />
          </a>
        </div> */}
      </div>
    </div>
  );
}

export default Register;
