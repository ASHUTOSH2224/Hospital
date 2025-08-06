"use client"

import { useState, useEffect } from "react"
import { ChevronDown, Check, Mail, Shield, Moon, Heart, Zap } from "lucide-react"

const SleepHealthLandingPage = () => {
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
      question: "Why people prioritize quality sleep health",
      answer:
        "Quality sleep offers numerous benefits beyond just feeling rested. It improves cognitive function, boosts immune system, enhances emotional regulation, supports physical recovery, and reduces the risk of chronic diseases. Many people appreciate how consistent sleep habits make them feel more energized and creates meaningful bedtime rituals that promote overall wellness and mental clarity.",
    },
    {
      question: "How sleep routine planning works",
      answer:
        "Sleep planning involves creating and organizing your bedtime and wake routines in advance, typically including wind-down activities and sleep environment preparation. This process includes setting consistent sleep schedules, creating relaxing pre-sleep rituals, optimizing your bedroom environment, and sometimes incorporating sleep tracking. Effective sleep planning improves sleep quality, reduces time to fall asleep, ensures consistent rest patterns, and helps maintain healthy sleep habits. Results in improved sleep quality typically become noticeable after 2-3 weeks of consistent practice.",
    },
    {
      question: "What to look for in quality sleep products",
      answer:
        "Look for products recommended by certified sleep specialists or healthcare professionals, clinically tested sleep aids, clear usage instructions with proven effectiveness, realistic expectations, and safety testing data. The best sleep products include modifications for different sleep preferences, clear guidelines for use, and guidance on proper timing and sleep environment optimization.",
    },
    {
      question: "The best sleep tools for effective rest",
      answer:
        "The best sleep tools depend on your sleep challenges, but versatile options include a quality mattress, blackout curtains, white noise machine, comfortable pillows, sleep tracker, and temperature control. These items provide excellent value by enabling numerous sleep optimization techniques for any sleep type. For enhanced results, consider a weighted blanket or meditation app for professional-level sleep support at home.",
    },
    {
      question: "How to start a sustainable sleep routine",
      answer:
        "Start with 3-4 basic sleep habits and gradually expand your routine. Focus on simple, effective practices rather than complex multi-step processes, and gradually add new elements as you understand your sleep patterns. Choose habits you enjoy maintaining, set realistic sleep goals, track your sleep progress, and consider consulting a sleep specialist initially to understand your specific sleep needs and challenges.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 -left-20 w-40 h-40 bg-purple-200 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-20 right-1/4 w-60 h-60 bg-blue-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
      </div>

      {/* Hero Section */}
      <section
        className={`relative bg-gradient-to-r from-indigo-600 via-purple-500 to-blue-500 text-white transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in-left">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Transform your rest with the Sleep Wellness Guide!
              </h1>
              <p className="text-lg lg:text-xl text-indigo-100 leading-relaxed">
                Healthline's rigorous vetting process ensures that we provide access to high-quality sleep health
                strategies and products from respected sleep specialists and wellness experts. Sign up for the Sleep
                Wellness newsletter and get our best sleep optimization recommendations delivered to your inbox.
              </p>

              {/* Email Signup Form */}
              <div className="flex flex-col sm:flex-row gap-4 max-w-md">
                <div className="flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 text-gray-800 rounded-lg border-2 border-transparent focus:border-purple-400 focus:outline-none transition-all duration-300 transform hover:scale-105"
                  />
                </div>
                <button
                  onClick={handleSignup}
                  className="bg-indigo-500 hover:bg-indigo-400 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 flex items-center justify-center gap-2"
                >
                  <Mail size={20} />
                  SIGN UP
                </button>
              </div>

              <p className="text-sm text-indigo-200 flex items-center gap-2">
                <Shield size={16} />
                Your <span className="underline cursor-pointer hover:text-white transition-colors">privacy</span> is
                important to us
              </p>
            </div>

            {/* Right Content - Decorative Items */}
            <div className="relative lg:block hidden">
              <div className="relative w-full h-96 animate-float">
                {/* Floating sleep items */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-purple-400 rounded-full flex items-center justify-center animate-bounce delay-300">
                  <Moon className="text-purple-800" size={32} />
                </div>
                <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-indigo-400 rounded-full flex items-center justify-center animate-pulse">
                  <Heart className="text-indigo-800" size={24} />
                </div>
                <div className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-blue-300 rounded-full flex items-center justify-center animate-bounce delay-700">
                  <Zap className="text-blue-600" size={32} />
                </div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg transform rotate-12 animate-pulse delay-500"></div>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">Spotlight: Professional Sleep Health</h2>
            <div className="prose prose-lg text-gray-600 leading-relaxed space-y-4">
              <p>
                Professional sleep health has become increasingly recognized over the last few years, with more people
                turning to science-backed sleep strategies for improved rest quality, cognitive function, and overall
                wellness benefits. Many people find sleep optimization empowering, and many reviewers — including
                Healthline's own testers — find it to be transformative for both physical health and mental well-being.
              </p>
              <p>
                Professional sleep health comes in many forms, from simple bedtime routines to comprehensive sleep
                hygiene programs to quick relaxation techniques. Each approach offers unique benefits, allowing you to
                choose what works best for your sleep challenges, lifestyle constraints, and wellness goals. Here, we
                walk through everything you need to know about professional sleep health to get you started, including
                how it works, how long it takes to see results, and what to look for in sleep products.
              </p>
              <p>
                Plus, we share our picks for the best sleep optimization strategies based on over 150 sleep studies that
                we've reviewed, evaluated, and clinically assessed by our team of certified sleep specialists and
                wellness experts.
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
                      <ChevronDown className="text-indigo-600" size={24} />
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
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="text-purple-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Welcome to Sleep Wellness!</h3>
              <p className="text-gray-600 mb-6">
                Thank you for signing up! You'll receive our best sleep health strategies and product recommendations
                straight to your inbox.
              </p>
              <button
                onClick={() => setShowSuccessPopup(false)}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg transition-colors duration-200"
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

export default SleepHealthLandingPage
