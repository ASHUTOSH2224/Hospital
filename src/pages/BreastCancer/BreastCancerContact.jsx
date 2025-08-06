import React from "react";
import { motion } from "framer-motion";
import cancerImageDesktop from "../../assets/cancerImageDesktop.png"
import BezzyStats from "./BezzyStats";
import BezzySignUpForm from "./BezzySignUpForm";
// import Footer from "./Footer";

const BreastCancerContact = () => {
  return (
    <>
    <div
      className="min-h-screen relative overflow-hidden pt-20 md:pt-32"
      style={{
        backgroundImage: "url(" + cancerImageDesktop + ")",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      {/* Main content container */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Sign up form */}
          <motion.div
            className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 lg:p-8 shadow-2xl border border-pink-100"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-center max-w-md mx-auto">
              <motion.h1
                className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Sign up for
                <br />
                <span className="text-pink-600">Bezzy BC</span>
              </motion.h1>

              <motion.p
                className="text-gray-700 text-sm mb-5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Bezzy members are excited to meet you, share advice and stories
                about their experiences living with breast cancer. Join a
                judgment-free space with a free profile.
              </motion.p>

              <motion.button
                className="w-full bg-[#DB2464] hover:bg-pink-700 text-white font-semibold py-2 px-8 rounded-md text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Join Bezzy for free
              </motion.button>

              <motion.a
                href="#"
                className="text-pink-600 hover:text-pink-700 text-sm underline transition-colors duration-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                Privacy Policy
              </motion.a>
            </div>
          </motion.div>

          {/* Right side - Illustration area */}
        </div>
      </div>

      {/* Additional floating decorations */}
      <motion.div
        className="absolute top-1/2 left-1/3 w-3 h-3 bg-pink-400 rounded-full opacity-60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 0.4, delay: 2 }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-pink-500 rounded-full opacity-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 0.4, delay: 2.2 }}
      />

      {/* Floating animation for some elements */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-4 h-4 bg-pink-400 rounded-full opacity-40"
        animate={{
          y: [0, -10, 0],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
    <BezzyStats/>
    <BezzySignUpForm/>
    {/* <Footer/> */}
    </>
  );
};

export default BreastCancerContact;
