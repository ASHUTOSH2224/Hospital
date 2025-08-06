import React, { useState, useEffect } from 'react';
import { ChevronDown,  X, Check, Mail, Shield, Award, Clock, Users } from 'lucide-react';

const WellnessLandingPage = () => {
  const [email, setEmail] = useState('');
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSignup = (e) => {
    e.preventDefault();
    if (email) {
      setShowSuccessPopup(true);
      setEmail('');
      setTimeout(() => setShowSuccessPopup(false), 3000);
    }
  };

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "Why people choose CBD gummies",
      answer: "CBD gummies offer a convenient, discreet, and tasty way to consume CBD. They provide consistent dosing, longer-lasting effects compared to other methods, and are perfect for those who want to avoid the taste of CBD oil. Many users appreciate the precise dosing and the familiar format of a gummy."
    },
    {
      question: "How CBD gummies work",
      answer: "When you consume CBD gummies, they're digested in your stomach and processed by your liver before entering your bloodstream. This process typically takes 30-90 minutes to feel effects, but the benefits can last 4-8 hours. The CBD interacts with your body's endocannabinoid system to potentially promote balance and wellness."
    },
    {
      question: "What to look for in CBD gummies",
      answer: "Look for third-party lab tested products, full-spectrum or broad-spectrum CBD, organic ingredients, clear labeling with CBD content per gummy, and products from reputable brands. Check for certificates of analysis (COAs) that verify potency and purity, and ensure the product contains less than 0.3% THC."
    },
    {
      question: "The best CBD gummies",
      answer: "The best CBD gummies are those that are lab-tested, made with high-quality ingredients, and from trusted manufacturers. Look for gummies with natural flavors, organic sweeteners, and consistent dosing. Popular options include full-spectrum gummies for the entourage effect or isolate-based gummies for those avoiding THC."
    },
    {
      question: "How to take CBD gummies",
      answer: "Start with a low dose (typically 5-10mg) and wait at least 2 hours before taking more. Take them consistently at the same time daily for best results. They can be taken with or without food, though taking with food may help with absorption. Always follow the manufacturer's recommended dosage and consult with a healthcare provider if needed."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 -left-20 w-40 h-40 bg-yellow-200 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-20 right-1/4 w-60 h-60 bg-blue-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
      </div>

      {/* Hero Section */}
      <section className={`relative bg-gradient-to-r from-teal-700 via-teal-600 to-gray-400 text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in-left">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Live better with the Wellness Wire Wishlist!
              </h1>
              <p className="text-lg lg:text-xl text-teal-100 leading-relaxed">
                Healthline's rigorous vetting process ensures that we provide access to high-quality products from respected brands. Sign up for the Wishlist newsletter and get our best recommendations delivered to your inbox.
              </p>
              
              {/* Email Signup Form */}
              <div className="flex flex-col sm:flex-row gap-4 max-w-md">
                <div className="flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 text-gray-800 rounded-lg border-2 border-transparent focus:border-yellow-400 focus:outline-none transition-all duration-300 transform hover:scale-105"
                  />
                </div>
                <button
                  onClick={handleSignup}
                  className="bg-teal-500 hover:bg-teal-400 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 flex items-center justify-center gap-2"
                >
                  <Mail size={20} />
                  SIGN UP
                </button>
              </div>
              
              <p className="text-sm text-teal-200 flex items-center gap-2">
                <Shield size={16} />
                Your <span className="underline cursor-pointer hover:text-white transition-colors">privacy</span> is important to us
              </p>
            </div>

            {/* Right Content - Decorative Items */}
            <div className="relative lg:block hidden">
              <div className="relative w-full h-96 animate-float">
                {/* Floating wellness items */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce delay-300">
                  <Award className="text-yellow-800" size={32} />
                </div>
                <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-teal-400 rounded-full flex items-center justify-center animate-pulse">
                  <Clock className="text-teal-800" size={24} />
                </div>
                <div className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center animate-bounce delay-700">
                  <Users className="text-gray-600" size={32} />
                </div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg transform rotate-12 animate-pulse delay-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Article Content */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
              Spotlight: CBD Gummies
            </h2>
            <div className="prose prose-lg text-gray-600 leading-relaxed space-y-4">
              <p>
                Cannabidiol (CBD) gummies have become increasingly popular over the last few years, with more people turning to them for anxiety, sleep, and more. Many people find CBD gummies easy to take, and many reviewers — including Healthline's own testers — find them to be effective.
              </p>
              <p>
                CBD gummies are soft and ingestible and come in many flavors. Each gummy contains a set amount of CBD, so you don't have to measure a dose as you do with ingestible CBD oils. Here, we walk through everything you need to know about CBD gummies to get you started, including how they work, how long the effects last, and what to look for.
              </p>
              <p>
                Plus, we share our picks for the best CBD gummies based on over 150 CBD gummies that we've evaluated and medically reviewed.
              </p>
            </div>
          </div>

          {/* Right Column - FAQ Section */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center bg-white hover:bg-gray-50 transition-colors duration-200"
                  >
                    <span className="font-semibold text-gray-800 text-lg">
                      {faq.question}
                    </span>
                    <div className={`transition-transform duration-300 ${expandedFaq === index ? 'rotate-180' : ''}`}>
                      <ChevronDown className="text-teal-600" size={24} />
                    </div>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      expandedFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 py-4 bg-gray-50 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-8 max-w-md w-full transform animate-scale-in shadow-2xl">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="text-green-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Welcome to the Wishlist!</h3>
              <p className="text-gray-600 mb-6">
                Thank you for signing up! You'll receive our best wellness recommendations straight to your inbox.
              </p>
              <button
                onClick={() => setShowSuccessPopup(false)}
                className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg transition-colors duration-200"
              >
                Got it!
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fade-in-left {
          animation: fade-in-left 1s ease-out;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default WellnessLandingPage;