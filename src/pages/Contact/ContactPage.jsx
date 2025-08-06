import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, MessageCircle } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

    useEffect(() => {
      // Scroll to top when the component mounts
      window.scrollTo(0, 0)
    }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      content: "support@articlark.com",
      description: "Send us an email anytime!"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 6pm."
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      content: "123 Health Street, NYC",
      description: "Come say hello at our office HQ."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Working Hours",
      content: "Mon-Fri: 9AM-6PM",
      description: "Weekend support available."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      {/* Header */}
      {/* <header className="bg-white/80 backdrop-blur-sm border-b border-purple-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-xl font-bold text-gray-800">Health Linee</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Health Conditions</a>
              <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Wellness</a>
              <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Featured</a>
              <a href="#" className="text-purple-600 font-medium">Contact</a>
            </nav>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </header> */}

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative py-20 px-4 sm:px-6 lg:px-8 pt-16 md:pt-36"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            className="w-20 h-20 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <Mail className="w-10 h-10 text-white" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
          >
            Get in <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Touch</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            Have questions about health trends or need expert advice? Our team is here to help you on your wellness journey.
          </motion.p>
        </div>
      </motion.section>

      {/* Contact Info Cards */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-purple-600 font-medium mb-1">{item.content}</p>
                <p className="text-sm text-gray-500">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Form */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-purple-100">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Send us a Message</h2>
              <p className="text-gray-600">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 }}
                >
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 bg-white/50"
                    placeholder="Enter your full name"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.3 }}
                >
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 bg-white/50"
                    placeholder="Enter your email"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
              >
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 bg-white/50"
                  placeholder="What's this about?"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
              >
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 bg-white/50 resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 }}
                className="text-center"
              >
                <motion.button
                  onClick={handleSubmit}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-xl font-semibold flex items-center justify-center space-x-2 mx-auto hover:shadow-lg transition-all duration-300 min-w-[200px]"
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Support Section */}
      {/* <motion.section 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8 }}
        className="py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-orange-400 to-pink-500 rounded-3xl p-8 md:p-12 text-white">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2, type: "spring", stiffness: 100 }}
              className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <Clock className="w-8 h-8" />
            </motion.div>
            
            <h2 className="text-3xl font-bold mb-4">Still have questions?</h2>
            <p className="text-lg mb-6 opacity-90">Our expert support team is here to help you 24/7.</p>
            <p className="mb-8 opacity-80">Get instant assistance and we'll respond within 2 hours.</p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-purple-600 px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
            >
              Contact Support
            </motion.button>
            
            <div className="flex justify-center space-x-8 mt-8 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                <span>24/7 Available</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-orange-300 rounded-full"></div>
                <span>2 Hour Response</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-pink-300 rounded-full"></div>
                <span>Expert Support</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section> */}

      {/* Stats Section */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2 }}
        className="py-16 px-4 sm:px-6 lg:px-8"
      >
        {/* <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📈</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">2.5M+</h3>
              <p className="text-gray-600">Daily Readers</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📄</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">15K+</h3>
              <p className="text-gray-600">Articles Published</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">👥</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">500K+</h3>
              <p className="text-gray-600">Newsletter Subscribers</p>
            </div>
          </div>
        </div> */}

            <div className=''>
            <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="relative text-center mt-16 overflow-hidden "
        >
          {/* Background with gradient mesh */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-orange-50 to-pink-50 rounded-3xl"></div>
          
          {/* Animated background orbs */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl">
            <motion.div
              animate={{
                x: [0, 100, 0],
                y: [0, -50, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full blur-3xl"
            ></motion.div>
            <motion.div
              animate={{
                x: [0, -80, 0],
                y: [0, 60, 0],
                scale: [1.2, 1, 1.2],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
              className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-l from-pink-400/20 to-purple-400/20 rounded-full blur-3xl"
            ></motion.div>
            <motion.div
              animate={{
                x: [0, 50, 0],
                y: [0, -30, 0],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute top-1/2 left-1/2 w-48 h-48 bg-gradient-to-br from-orange-300/15 to-purple-300/15 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"
            ></motion.div>
          </div>

          {/* Content */}
          <div className="relative z-10 p-12">
            {/* Icon with animated background */}
            <motion.div 
              className="relative inline-block mb-6"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl blur-lg opacity-30"></div>
              <div className="relative bg-gradient-to-r from-orange-500 to-pink-500 p-4 rounded-2xl shadow-lg">
                <Clock className="w-12 h-12 text-white" />
              </div>
            </motion.div>

            {/* Enhanced heading */}
            <motion.h3 
              className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              Still have questions?
            </motion.h3>
            
            {/* Enhanced description */}
            <motion.p 
              className="text-lg text-gray-700 mb-8 max-w-md mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              Our expert support team is here to help you 24/7. 
              <span className="font-semibold text-purple-700"> Get instant assistance</span> and we'll respond within 2 hours.
            </motion.p>

            {/* Enhanced button with border beam */}
            <motion.div
              className="relative inline-block"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4, duration: 0.5 }}
            >
              {/* Animated border beam */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: "conic-gradient(from 0deg, #eab308, #f97316, #ec4899, #a855f7, #eab308)"
                  }}
                ></motion.div>
                <div className="absolute inset-1 bg-white rounded-2xl"></div>
              </div>

              {/* Button */}
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                whileTap={{ scale: 0.95 }}
                className="relative inline-flex items-center px-10 py-5 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <MessageCircle className="relative w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                <span className="relative text-lg">Contact Support</span>
                
                {/* Sparkle effect */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full"
                ></motion.div>
              </motion.button>
            </motion.div>

            {/* Additional info badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.5 }}
              className="flex flex-wrap justify-center gap-4 mt-8"
            >
              <div className="flex items-center bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 shadow-sm">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                <span className="text-sm font-medium text-gray-700">24/7 Available</span>
              </div>
              <div className="flex items-center bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 shadow-sm">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                <span className="text-sm font-medium text-gray-700">2 Hour Response</span>
              </div>
              <div className="flex items-center bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 shadow-sm">
                <div className="w-2 h-2 bg-pink-500 rounded-full mr-2"></div>
                <span className="text-sm font-medium text-gray-700">Expert Support</span>
              </div>
            </motion.div>
          </div>

          {/* Enhanced glow effects */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{
              background: [
                "radial-gradient(circle at 30% 40%, rgba(234, 179, 8, 0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 70% 60%, rgba(249, 115, 22, 0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 50% 30%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 40% 70%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 30% 40%, rgba(234, 179, 8, 0.1) 0%, transparent 50%)"
              ]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full"
                style={{
                  background: [
                    "#eab308", "#f97316", "#ec4899", "#a855f7"
                  ][i % 4],
                  left: `${20 + (i * 15)}%`,
                  top: `${30 + (i * 10)}%`,
                }}
                animate={{
                  y: [-20, -60, -20],
                  opacity: [0, 1, 0],
                  scale: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3 + (i * 0.5),
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.4
                }}
              />
            ))}
          </div>
        </motion.div>
            </div>
      </motion.section>
    </div>
  );
};

export default ContactPage;