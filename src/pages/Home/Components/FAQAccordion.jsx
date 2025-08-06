import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  HelpCircle, 
  Shield, 
  CreditCard, 
  Truck, 
  Users, 
  Settings, 
  MessageCircle,
  Clock,
  RefreshCw
} from 'lucide-react';

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      id: 1,
      icon: HelpCircle,
      question: "What is Health Linee",
      answer: "Health Linee is a leading digital health publisher offering expert-reviewed, evidence-based content on a wide range of health topics.."
    },
    {
      id: 2,
      icon: Shield,
      question: "Is my data secure and private?",
      answer: "Health Linee is committed to protecting your information and will never share or disclose your personal information with any third party."
    },
    {
      id: 3,
      icon: CreditCard,
      question: "Is Health Linee a medical provider?",
      answer: "No, Healthline is a digital publisher and does not offer personal health or medical advice. "
    },
    {
      id: 4,
      icon: Truck,
      question: "How does Health Linee ensure content accuracy?",
      answer: "Health Linee's content is created, fact-checked, and reviewed by qualified writers, editors, clinicians, and other contributors to ensure accuracy and trustworthiness"
    },
    
    // {
    //   id: 6,
    //   icon: Settings,
    //   question: "Can I customize the service to fit my needs?",
    //   answer: "Absolutely! Our service is highly customizable. We offer various configuration options and can work with you to create tailored solutions that perfectly match your specific requirements and workflow."
    // },
    // {
    //   id: 7,
    //   icon: RefreshCw,
    //   question: "What is your refund policy?",
    //   answer: "We offer a 30-day money-back guarantee. If you're not completely satisfied with our service, you can request a full refund within 30 days of purchase, no questions asked."
    // },
    // {
    //   id: 8,
    //   icon: MessageCircle,
    //   question: "How can I get in touch for more questions?",
    //   answer: "You can reach us through our contact form, live chat on our website, email at support@example.com, or call our toll-free number. We typically respond to inquiries within 2 hours during business hours."
    // }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6">
            <HelpCircle className="w-8 h-8 text-orange-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our service. Can't find what you're looking for? 
            <span className="text-orange-600 font-medium"> Contact our support team</span>.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const IconComponent = item.icon;
            const isActive = activeIndex === index;
            
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <motion.button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-8 py-6 text-left focus:outline-none focus:ring-4 focus:ring-orange-100 transition-colors duration-200"
                  whileHover={{ backgroundColor: "rgb(248, 250, 252)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <motion.div 
                        className={`flex items-center justify-center w-12 h-12 rounded-xl transition-colors duration-300 ${
                          isActive ? 'bg-orange-600 text-white' : 'bg-orange-100 text-orange-600'
                        }`}
                        animate={{ 
                          scale: isActive ? 1.1 : 1,
                          rotate: isActive ? 5 : 0 
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <IconComponent className="w-6 h-6" />
                      </motion.div>
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">
                        {item.question}
                      </h3>
                    </div>
                    <motion.div
                      animate={{ rotate: isActive ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className={`w-6 h-6 transition-colors duration-300 ${
                        isActive ? 'text-orange-600' : 'text-gray-400'
                      }`} />
                    </motion.div>
                  </div>
                </motion.button>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        initial={{ y: -10 }}
                        animate={{ y: 0 }}
                        exit={{ y: -10 }}
                        transition={{ duration: 0.2, delay: 0.1 }}
                        className="px-8 pb-6"
                      >
                        <div className="ml-16 border-l-4 border-orange-100 pl-6">
                          <p className="text-gray-700 leading-relaxed text-base">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="relative text-center mt-16 overflow-hidden"
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
    </div>
  );
};

export default FAQAccordion;