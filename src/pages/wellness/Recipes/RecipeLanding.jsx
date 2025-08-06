"use client"

import { useState, useEffect } from "react"
import { ChevronDown, Check, Mail, Shield, ChefHat, Heart, Utensils } from "lucide-react"

const RecipesLandingPage = () => {
  const [email, setEmail] = useState("")
  const [showSuccessPopup, setShowSuccessPopup] = useState(false)
  const [expandedFaq, setExpandedFaq] = useState(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleSignup = (e) => {
    e.preventDefault()
    if (email) {
      setShowSuccessPopup(true)
      setEmail("")
      setTimeout(() => setShowSuccessPopup(false), 3000)
    }
  }

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  const faqData = [
    {
      question: "Why people choose healthy cooking",
      answer:
        "Healthy cooking offers numerous benefits beyond just nutrition. It improves overall well-being, boosts energy levels, enhances immune function, supports weight management, and reduces the risk of chronic diseases. Many people appreciate how cooking healthy meals makes them feel more in control of their health and creates meaningful connections with family and friends.",
    },
    {
      question: "How meal planning works",
      answer:
        "Meal planning involves preparing and organizing your meals in advance, typically for a week. This process includes choosing recipes, creating shopping lists, prepping ingredients, and sometimes batch cooking. Effective meal planning saves time, reduces food waste, ensures balanced nutrition, and helps maintain consistent healthy eating habits. Results in better eating patterns typically become noticeable after 2-3 weeks of consistent planning.",
    },
    {
      question: "What to look for in healthy recipes",
      answer:
        "Look for recipes created by certified nutritionists or culinary professionals, balanced macronutrients, clear ingredient lists with whole foods, realistic preparation times, and nutritional information. The best recipes include modifications for different dietary needs, clear cooking instructions, and guidance on ingredient substitutions and storage.",
    },
    {
      question: "The best kitchen equipment for healthy cooking",
      answer:
        "The best kitchen equipment depends on your cooking style, but versatile options include a quality chef's knife, cutting board, non-stick or cast iron pans, steamer basket, food processor, and measuring tools. These items provide excellent value by enabling numerous cooking techniques in any kitchen. For efficiency, consider a slow cooker or instant pot for batch cooking healthy meals.",
    },
    {
      question: "How to start a sustainable healthy eating routine",
      answer:
        "Start with 2-3 home-cooked meals per week and gradually increase. Focus on simple, nutritious recipes rather than complex dishes, and gradually expand your cooking skills as you build confidence. Choose recipes you enjoy, set realistic meal prep goals, track your progress, and consider taking a cooking class initially to learn proper techniques and knife skills.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 -left-20 w-40 h-40 bg-green-200 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-20 right-1/4 w-60 h-60 bg-yellow-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
      </div>

      {/* Hero Section */}
      <section
        className={`relative bg-gradient-to-r from-orange-600 via-orange-500 to-gray-400 text-white transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in-left">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Transform your kitchen with the Recipe Wire Wishlist!
              </h1>
              <p className="text-lg lg:text-xl text-orange-100 leading-relaxed">
                Healthline's rigorous vetting process ensures that we provide access to high-quality recipes and cooking
                resources from respected chefs and nutritionists. Sign up for the Wishlist newsletter and get our best
                healthy recipe recommendations delivered to your inbox.
              </p>

              {/* Email Signup Form */}
              <div className="flex flex-col sm:flex-row gap-4 max-w-md">
                <div className="flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 text-gray-800 rounded-lg border-2 border-transparent focus:border-green-400 focus:outline-none transition-all duration-300 transform hover:scale-105"
                  />
                </div>
                <button
                  onClick={handleSignup}
                  className="bg-orange-500 hover:bg-orange-400 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 flex items-center justify-center gap-2"
                >
                  <Mail size={20} />
                  SIGN UP
                </button>
              </div>

              <p className="text-sm text-orange-200 flex items-center gap-2">
                <Shield size={16} />
                Your <span className="underline cursor-pointer hover:text-white transition-colors">privacy</span> is
                important to us
              </p>
            </div>

            {/* Right Content - Decorative Items */}
            <div className="relative lg:block hidden">
              <div className="relative w-full h-96 animate-float">
                {/* Floating cooking items */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-green-400 rounded-full flex items-center justify-center animate-bounce delay-300">
                  <ChefHat className="text-green-800" size={32} />
                </div>
                <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center animate-pulse">
                  <Heart className="text-orange-800" size={24} />
                </div>
                <div className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center animate-bounce delay-700">
                  <Utensils className="text-gray-600" size={32} />
                </div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-green-400 to-green-600 rounded-lg transform rotate-12 animate-pulse delay-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Article Content */}
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">Spotlight: Healthy Cooking</h2>
            <div className="prose prose-lg text-gray-600 leading-relaxed space-y-4">
              <p>
                Healthy cooking has become increasingly popular over the last few years, with more people turning to
                home-prepared meals for improved nutrition, mental wellness, and overall health benefits. Many people
                find cooking empowering, and many reviewers — including Healthline's own testers — find it to be
                transformative for both body and lifestyle.
              </p>
              <p>
                Healthy cooking comes in many forms, from simple meal prep to elaborate gourmet dishes to quick
                weeknight dinners. Each approach offers unique benefits, allowing you to choose what works best for your
                skill level, time constraints, and dietary goals. Here, we walk through everything you need to know
                about healthy cooking to get you started, including how it works, how long it takes to see results, and
                what to look for in recipes.
              </p>
              <p>
                Plus, we share our picks for the best healthy recipes based on over 150 dishes that we've tested,
                evaluated, and nutritionally reviewed by our team of registered dietitians.
              </p>
            </div>
          </div>

          {/* Right Column - FAQ Section */}
          <div
            className={`transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
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
                    <span className="font-semibold text-gray-800 text-lg">{faq.question}</span>
                    <div className={`transition-transform duration-300 ${expandedFaq === index ? "rotate-180" : ""}`}>
                      <ChevronDown className="text-orange-600" size={24} />
                    </div>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      expandedFaq === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 py-4 bg-gray-50 text-gray-600 leading-relaxed">{faq.answer}</div>
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
                Thank you for signing up! You'll receive our best healthy recipe recommendations straight to your inbox.
              </p>
              <button
                onClick={() => setShowSuccessPopup(false)}
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg transition-colors duration-200"
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
  )
}

export default RecipesLandingPage
