import React, { useState, useEffect } from 'react';
import { X, Mail, User, MessageCircle } from 'lucide-react';

// ContactPopup Component
const ContactPopup = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Handle form submission here
    onClose();
    setFormData({ fullName: '', email: '', message: '' });
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-2 sm:p-4 z-50 transition-opacity duration-300"
      onClick={onClose}
    >
      {/* Popup Container */}
      <div
        className="bg-white rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-sm sm:max-w-md lg:max-w-lg p-4 sm:p-6 lg:p-8 relative transform transition-all duration-300 scale-100 max-h-[95vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 p-1.5 sm:p-2 text-gray-400 hover:text-gray-600 transition-colors hover:scale-110 z-10"
        >
          <X size={18} className="sm:w-5 sm:h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
            <Mail className="text-white" size={20} />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 px-8">
            Send us a <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Message</span>
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm px-2">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        {/* Form */}
        <div className="space-y-4 sm:space-y-6">
          {/* Full Name Field */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
              Full Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                className="w-full pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-200 text-sm sm:text-base"
                required
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className="w-full pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-200 text-sm sm:text-base"
                required
              />
            </div>
          </div>

          {/* Message Field */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
              Message
            </label>
            <div className="relative">
              <MessageCircle className="absolute left-3 top-3 sm:top-4 text-gray-400" size={16} />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us more about your inquiry..."
                rows={3}
                className="w-full pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-200 resize-none text-sm sm:text-base min-h-[80px] sm:min-h-[100px]"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2.5 sm:py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] text-sm sm:text-base active:scale-[0.98]"
          >
            Send Message
          </button>
        </div>

        {/* Footer */}
        <div className="text-center mt-4 sm:mt-6">
          <p className="text-xs text-gray-500">
            We'll get back to you within 24 hours
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactPopup;