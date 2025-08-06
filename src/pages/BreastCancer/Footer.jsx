import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#FDECF1] border-t border-gray-200 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          
          {/* Left side - Logo and Social Icons */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Bezzy BC Logo */}
            <div className="flex items-center">
              <span className="text-4xl lg:text-5xl font-bold text-gray-900">bezzy</span>
              <span className="text-3xl lg:text-4xl font-bold text-pink-600 ml-1">BC</span>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <motion.a
                href="#"
                className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center text-white hover:bg-pink-700 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram className="w-6 h-6" />
              </motion.a>
              
              <motion.a
                href="#"
                className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center text-white hover:bg-pink-700 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Facebook className="w-6 h-6" />
              </motion.a>
              
              <motion.a
                href="#"
                className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center text-white hover:bg-pink-700 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Twitter className="w-6 h-6" />
              </motion.a>
            </div>
          </motion.div>
          
          {/* Right side - Links and Copyright */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Top row links */}
            <div className="flex flex-wrap gap-x-8 gap-y-2">
              <a 
                href="#" 
                className="text-gray-700 hover:text-pink-600 transition-colors duration-200 underline"
              >
                About Us
              </a>
              <a 
                href="#" 
                className="text-gray-700 hover:text-pink-600 transition-colors duration-200 underline"
              >
                Contact Us
              </a>
              <a 
                href="#" 
                className="text-gray-700 hover:text-pink-600 transition-colors duration-200 underline"
              >
                Terms of Use
              </a>
              <a 
                href="#" 
                className="text-gray-700 hover:text-pink-600 transition-colors duration-200 underline"
              >
                Advertising Policy
              </a>
            </div>
            
            {/* Second row links */}
            <div className="flex flex-wrap gap-x-8 gap-y-2">
              <a 
                href="#" 
                className="text-gray-700 hover:text-pink-600 transition-colors duration-200 underline"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-gray-700 hover:text-pink-600 transition-colors duration-200 underline"
              >
                Consumer Health Data Privacy Policy
              </a>
            </div>
            
            {/* Third row links */}
            <div className="flex flex-wrap gap-x-8 gap-y-2 items-center">
              <div className="flex items-center space-x-2">
                <a 
                  href="#" 
                  className="text-gray-700 hover:text-pink-600 transition-colors duration-200 underline"
                >
                  Your Privacy Choices
                </a>
                <div className="flex items-center space-x-1 bg-blue-600 text-white px-2 py-1 rounded text-xs">
                  <ExternalLink className="w-3 h-3" />
                  <span>CA</span>
                </div>
              </div>
              <a 
                href="#" 
                className="text-gray-700 hover:text-pink-600 transition-colors duration-200 underline"
              >
                Privacy Settings
              </a>
            </div>
            
            {/* Copyright and Disclaimer */}
            <div className="text-sm text-gray-600 leading-relaxed pt-4">
              <p className="mb-2">
                © 2025 Healthline Media LLC. All rights reserved. Healthline Media is a RVO Health Company. 
                Our website services, content, and products are for informational purposes only. Healthline Media 
                does not provide medical advice, diagnosis, or treatment. See{' '}
                <a 
                  href="#" 
                  className="text-gray-700 hover:text-pink-600 transition-colors duration-200 underline"
                >
                  additional information
                </a>
                .
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

// Alternative version with more compact mobile layout
const BezzyFooterCompact = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Mobile-first layout */}
        <div className="space-y-8">
          
          {/* Logo and Social - Centered on mobile */}
          <motion.div 
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Bezzy BC Logo */}
            <div className="flex items-center justify-center md:justify-start mb-4">
              <span className="text-3xl md:text-4xl font-bold text-gray-900">bezzy</span>
              <span className="text-2xl md:text-3xl font-bold text-pink-600 ml-1">BC</span>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex justify-center md:justify-start space-x-3">
              <motion.a
                href="#"
                className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center text-white hover:bg-pink-700 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              
              <motion.a
                href="#"
                className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center text-white hover:bg-pink-700 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              
              <motion.a
                href="#"
                className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center text-white hover:bg-pink-700 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
          
          {/* Links Grid */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Links arranged in rows */}
            <div className="grid grid-cols-2 md:flex md:flex-wrap gap-x-4 md:gap-x-8 gap-y-3 text-sm md:text-base">
              <a href="#" className="text-gray-700 hover:text-pink-600 transition-colors duration-200 underline">
                About Us
              </a>
              <a href="#" className="text-gray-700 hover:text-pink-600 transition-colors duration-200 underline">
                Contact Us
              </a>
              <a href="#" className="text-gray-700 hover:text-pink-600 transition-colors duration-200 underline">
                Terms of Use
              </a>
              <a href="#" className="text-gray-700 hover:text-pink-600 transition-colors duration-200 underline">
                Advertising Policy
              </a>
              <a href="#" className="text-gray-700 hover:text-pink-600 transition-colors duration-200 underline">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-700 hover:text-pink-600 transition-colors duration-200 underline">
                Consumer Health Data Privacy Policy
              </a>
            </div>
            
            {/* Privacy choices with icon */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm md:text-base">
              <div className="flex items-center space-x-2">
                <a href="#" className="text-gray-700 hover:text-pink-600 transition-colors duration-200 underline">
                  Your Privacy Choices
                </a>
                <div className="flex items-center space-x-1 bg-blue-600 text-white px-2 py-1 rounded text-xs">
                  <ExternalLink className="w-3 h-3" />
                  <span>CA</span>
                </div>
              </div>
              <a href="#" className="text-gray-700 hover:text-pink-600 transition-colors duration-200 underline">
                Privacy Settings
              </a>
            </div>
          </motion.div>
          
          {/* Copyright */}
          <motion.div 
            className="text-xs md:text-sm text-gray-600 leading-relaxed border-t border-gray-200 pt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p>
              © 2025 Healthline Media LLC. All rights reserved. Healthline Media is a RVO Health Company. 
              Our website services, content, and products are for informational purposes only. Healthline Media 
              does not provide medical advice, diagnosis, or treatment. See{' '}
              <a 
                href="#" 
                className="text-gray-700 hover:text-pink-600 transition-colors duration-200 underline"
              >
                additional information
              </a>
              .
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;