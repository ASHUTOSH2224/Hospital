import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Eye, EyeOff } from 'lucide-react';
import signinImage from '../../assets/signinImage.png'; // Placeholder for illustration

const BezzySignUpForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    isAdult: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const validatePassword = (password) => {
    const hasMinLength = password.length >= 10;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    
    return hasMinLength && hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear errors when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validate email
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    // Validate password
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (!validatePassword(formData.password)) {
      newErrors.password = 'Password does not meet requirements';
    }

    // Validate age checkbox
    if (!formData.isAdult) {
      newErrors.isAdult = 'You must be 18 or older to join';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
      // Handle successful submission
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
        
        {/* Left side - Form */}
        <motion.div 
          className="bg-white rounded-xl p-8 lg:p-8 shadow-xl border border-gray-100"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-3xl lg:text-3xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join Bezzy for free
          </motion.h1>
          
          <motion.p 
            className="text-gray-600 mb-5 "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Unlimited advice, meaningful connection, Q&A, inspirational knowledge, 
            and more community perks.
          </motion.p>

          <div className="space-y-5">
            {/* Email Input */}
            <motion.div 
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-4 pr-12 border rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                <Mail className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-teal-500" />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </motion.div>

            {/* Password Input */}
            <motion.div 
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-4 pr-12 border rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all ${
                    errors.password ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              <p className="text-xs text-black">
                Your password must be at least 10 characters and contain at least one upper case, lower case, 
                number, and special character
              </p>
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
            </motion.div>

            {/* Age Verification Checkbox */}
            <motion.div 
              className="flex items-start space-x-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <input
                type="checkbox"
                id="isAdult"
                name="isAdult"
                checked={formData.isAdult}
                onChange={handleInputChange}
                className="mt-1 w-4 h-4 text-pink-600 border-gray-300 rounded focus:ring-pink-500"
              />
              <label htmlFor="isAdult" className="text-gray-700 text-sm">
                Are you 18 or older?
              </label>
              {errors.isAdult && (
                <p className="text-red-500 text-sm ml-2">{errors.isAdult}</p>
              )}
            </motion.div>

            {/* Submit Button */}
            <motion.button
              type="button"
              onClick={handleSubmit}
              className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Next
            </motion.button>

            {/* Login Link */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <p className="text-gray-600">
                Already a member?{' '}
                <a href="#" className="text-gray-900 font-medium underline hover:text-pink-600 transition-colors">
                  Log in
                </a>
              </p>
            </motion.div>

            {/* Terms and Privacy */}
            <motion.div 
              className="text-center text-sm text-gray-600 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              <p>
                By tapping "Next", you agree to our{' '}
                <a href="#" className="text-gray-900 underline hover:text-pink-600 transition-colors">
                  Terms
                </a>{' '}
                and acknowledge that you have read our{' '}
                <a href="#" className="text-gray-900 underline hover:text-pink-600 transition-colors">
                  Privacy Policy
                </a>
              </p>
            </motion.div>
            </div>
        </motion.div>

        {/* Right side - Illustration */}
      <div>
        <motion.div 
          className="hidden lg:block"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img 
            src={signinImage} 
            alt="Sign Up Illustration" 
            className="w-full h-auto shadow-lg"
          />
        </motion.div>
      </div>
      </div>
    </div>
  );
};

export default BezzySignUpForm;