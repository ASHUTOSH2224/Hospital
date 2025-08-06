import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, BookOpen, ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ContactPopup from '@/component/ContactPopup';

const Hero = ({ onStartReadingClick }) => {

    const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);
  
  
    useEffect(() => {
  
      // setIsVisible(true);
  
      const timer = setTimeout(() => setIsContactPopupOpen(true), 1000);
      return () => clearTimeout(timer);
  
  
    }, []);
  
    const closeContactPopup = () => {
      setIsContactPopupOpen(false);
    };

  const navigate = useNavigate();

  return (
    <div className="w-full overflow-hidden pt-20 ">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-orange-50 -z-10" />
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse -z-10" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000 -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-32 pb-16 sm:pb-20 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center min-h-[70vh] lg:min-h-[80vh]">
          
          {/* Text Content - Mobile First Approach */}
          <div className="order-2 lg:order-1 space-y-4 sm:space-y-6 lg:space-y-8 text-center lg:text-left">
            
            {/* Greeting Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-orange-100 px-4 py-2 rounded-full border border-purple-200/50 backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span className="text-purple-700 font-medium text-sm sm:text-base">
                Hi There, Welcome!
              </span>
            </motion.div>
            
            {/* Main Heading - Responsive Typography */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight sm:leading-tight lg:leading-snug"
            >
             "US{" "}
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
                Health Trends 
              </span>
              <br className="hidden sm:block" />
              <span className="block sm:inline">expert picks</span>
              <span className="text-gray-700"> - All in </span>
              <br className="hidden lg:block" />
              <span className="block lg:inline">One Frame"</span>
            </motion.h1>
            
            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-600 text-base sm:text-lg lg:text-lg leading-relaxed max-w-none lg:max-w-2xl mx-auto lg:mx-0"
            >
              Discover the most talked-about health topics, expert advice, and wellness trends shaping {" "}
              <span className="font-semibold text-purple-600">America today.</span>. 
Curated weekly to keep you informed, inspired, and one step ahead on your health journey             </motion.p>
            
            {/* Stats */}
            {/* <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 py-4 sm:py-6 max-w-md mx-auto lg:mx-0"
            >
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">125+</div>
                <div className="text-xs sm:text-sm text-gray-600">Articles</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">12K+</div>
                <div className="text-xs sm:text-sm text-gray-600">Readers</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">4.9</div>
                <div className="text-xs sm:text-sm text-gray-600">Rating</div>
              </div>
            </motion.div> */}
            
            {/* CTA Buttons - Responsive Layout */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6 max-w-md lg:max-w-none mx-auto lg:mx-0"
            >
              {/* Start Reading Button */}
              <motion.button
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(239, 68, 68, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300,
                  damping: 20 
                }}
                className="group relative bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg overflow-hidden shadow-lg flex-1 sm:flex-none"
                onClick={onStartReadingClick}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
                <div className="relative flex items-center justify-center gap-2 sm:gap-3">
                  <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Start Reading</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.button>
              
              {/* Contact Us Button */}
              <motion.button
                whileHover={{ 
                  scale: 1.02,
                  backgroundColor: "rgba(107, 114, 128, 0.1)",
                  borderColor: "rgba(147, 51, 234, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300,
                  damping: 20 
                }}

                onClick={() => navigate('/contact-page')}
                className="group border-2 border-gray-300 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg hover:shadow-lg transition-all duration-300 flex-1 sm:flex-none"
              >
                <div className="flex items-center justify-center gap-2 sm:gap-3">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                  <span>Contact Us</span>
                </div>
              </motion.button>
            </motion.div>
            
            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-4 sm:pt-6 text-xs sm:text-sm text-gray-500"
            >
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Available for projects</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Based in NYC</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>5+ years experience</span>
              </div>
            </motion.div>
          </div>
          
          {/* Image Section - Mobile Optimized */}
          <div className="order-1 lg:order-2 relative flex justify-center items-center px-4 sm:px-8 lg:px-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 3 }}
              transition={{ 
                duration: 1,
                delay: 0.3,
                type: "spring",
                stiffness: 100 
              }}
              className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl"
            >
              {/* Enhanced Blurred Shadow */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-200 via-pink-200 to-purple-200 rounded-2xl sm:rounded-3xl blur-2xl sm:blur-3xl opacity-40 sm:opacity-60 transform translate-x-2 translate-y-2 sm:translate-x-4 sm:translate-y-4 scale-105"></div>
              
              {/* Main Image Container - Responsive */}
              <motion.div
                whileHover={{ 
                  rotate: 1,
                  scale: 1.02
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300,
                  damping: 20 
                }}
                className="relative bg-gradient-to-br from-amber-100 via-orange-100 to-pink-100 rounded-2xl sm:rounded-3xl p-1 sm:p-2 shadow-xl sm:shadow-2xl aspect-square"
              >
                <div className="bg-gradient-to-br from-amber-50 to-orange-100 rounded-2xl sm:rounded-3xl overflow-hidden w-full h-full relative">
                  <img 
                    src="/9.cover-source.jpg" 
                    alt="Peter D. Morris - Product Designer"
                    className="w-full h-full object-cover object-center"
                  />
                  
                  {/* Overlay with subtle gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
                  
                  {/* Professional Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-xl shadow-lg"
                  >
                    <div className="text-xs sm:text-sm font-semibold text-gray-900">Peter D. Morris</div>
                    <div className="text-xs text-purple-600">Product Designer</div>
                  </motion.div>
                </div>
              </motion.div>
            
              {/* Floating Elements - Responsive Sizes */}
              <motion.div
                animate={{ 
                  y: [0, -8, 0],
                  rotate: [0, 5, 0] 
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full shadow-lg opacity-80"
              ></motion.div>
              
              <motion.div
                animate={{ 
                  y: [0, 8, 0],
                  x: [0, 4, 0] 
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-3 -right-3 sm:-bottom-6 sm:-right-6 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-orange-400 to-red-400 rounded-full shadow-lg opacity-70"
              ></motion.div>
              
              <motion.div
                animate={{ 
                  rotate: [0, 360] 
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute top-1/4 -right-4 sm:top-1/2 sm:-right-8 w-4 h-4 sm:w-6 sm:h-6 border-2 border-purple-400 rounded-full opacity-60"
              ></motion.div>
              
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="absolute top-1/3 -left-6 sm:top-1/4 sm:-left-8 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-60"
              ></motion.div>
              
              {/* Experience Badge */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute top-4 -right-4 sm:top-8 sm:-right-8 bg-white rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-lg border border-gray-100"
              >
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-purple-600">5+</div>
                  <div className="text-xs text-gray-600">Years</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-12 sm:mt-16 lg:mt-20"
        >
          <p className="text-gray-600 text-sm sm:text-base mb-4">
            Join thousands of readers who get inspired daily
          </p>
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center text-purple-600 font-medium cursor-pointer"
          >
            <span className="text-sm sm:text-base">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowRight className="w-4 h-4 ml-2 rotate-90" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
<ContactPopup isOpen={isContactPopupOpen} onClose={closeContactPopup} />

    </div>
  );
};

export default Hero;