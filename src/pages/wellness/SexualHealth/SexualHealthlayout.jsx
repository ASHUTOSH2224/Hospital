"use client"

import { useState, useEffect } from "react"
import { ChevronDown, Check, Mail, Shield, Heart, Users, BookOpen } from "lucide-react"

const SexualHealthLandingPage = () => {
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
      question: "Why sexual health education matters",
      answer:
        "Comprehensive sexual health education provides essential knowledge about anatomy, relationships, consent, and health practices. It empowers individuals to make informed decisions, promotes healthy relationships, reduces the risk of STIs and unplanned pregnancies, and supports overall physical and emotional well-being. Access to accurate information helps people understand their bodies and communicate effectively with partners and healthcare providers.",
    },
    {
      question: "How to approach sexual health conversations",
      answer:
        "Open communication about sexual health starts with creating a safe, non-judgmental environment. Begin with basic topics, use clear and respectful language, listen actively, and be prepared to provide accurate information or resources. Whether talking with partners, children, or healthcare providers, honest conversations about boundaries, health concerns, and questions are essential for maintaining good sexual health throughout life.",
    },
    {
      question: "What to look for in sexual health resources",
      answer:
        "Reliable sexual health information should come from certified healthcare professionals, medical organizations, or accredited educational institutions. Look for evidence-based content, current medical guidelines, inclusive language that respects all identities, and resources that address diverse needs and experiences. Avoid sources that shame, provide outdated information, or make unrealistic claims.",
    },
    {
      question: "Essential sexual health practices",
      answer:
        "Key sexual health practices include regular STI testing, using barrier protection, maintaining good hygiene, communicating with partners about health status and boundaries, and seeking regular healthcare check-ups. Understanding consent, practicing safe sex, and being aware of your body's changes are fundamental aspects of maintaining sexual health and well-being.",
    },
    {
      question: "How to start prioritizing your sexual health",
      answer:
        "Begin by scheduling a check-up with a healthcare provider who specializes in sexual health. Educate yourself through reputable sources, practice open communication with partners, and don't hesitate to ask questions. Start with small steps like learning about your anatomy, understanding consent, and establishing healthy boundaries. Remember that sexual health is an ongoing journey of learning and self-care.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 -left-20 w-40 h-40 bg-purple-200 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-20 right-1/4 w-60 h-60 bg-blue-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
      </div>

      {/* Hero Section */}
      <section
        className={`relative bg-gradient-to-r from-pink-600 via-purple-500 to-blue-400 text-white transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in-left">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Empower your health with the Sexual Wellness Newsletter!
              </h1>
              <p className="text-lg lg:text-xl text-pink-100 leading-relaxed">
                Healthline's rigorous vetting process ensures that we provide access to high-quality sexual health
                information from certified healthcare professionals and educators. Sign up for our newsletter and get
                evidence-based sexual health resources delivered to your inbox.
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
                  className="bg-pink-500 hover:bg-pink-400 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 flex items-center justify-center gap-2"
                >
                  <Mail size={20} />
                  SIGN UP
                </button>
              </div>

              <p className="text-sm text-pink-200 flex items-center gap-2">
                <Shield size={16} />
                Your <span className="underline cursor-pointer hover:text-white transition-colors">privacy</span> is
                important to us
              </p>
            </div>

            {/* Right Content - Decorative Items */}
            <div className="relative lg:block hidden">
              <div className="relative w-full h-96 animate-float">
                {/* Floating health items */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-purple-400 rounded-full flex items-center justify-center animate-bounce delay-300">
                  <Heart className="text-purple-800" size={32} />
                </div>
                <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-pink-400 rounded-full flex items-center justify-center animate-pulse">
                  <Users className="text-pink-800" size={24} />
                </div>
                <div className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-blue-300 rounded-full flex items-center justify-center animate-bounce delay-700">
                  <BookOpen className="text-blue-600" size={32} />
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">Spotlight: Sexual Health Education</h2>
            <div className="prose prose-lg text-gray-600 leading-relaxed space-y-4">
              <p>
                Sexual health education has become increasingly recognized as essential healthcare over the last few
                years, with more people seeking comprehensive, evidence-based information about their bodies,
                relationships, and well-being. Many people find that proper sexual health education is empowering, and
                many reviewers — including healthcare professionals — find it to be transformative for both physical and
                emotional health.
              </p>
              <p>
                Sexual health encompasses many aspects, from understanding anatomy and physiology to building healthy
                relationships and practicing safe behaviors. Each component offers unique benefits, allowing you to make
                informed decisions about your health, relationships, and overall well-being. Here, we walk through
                everything you need to know about sexual health to get you started, including how to access reliable
                information, what to expect from healthcare visits, and how to maintain good sexual health practices.
              </p>
              <p>
                Plus, we share our picks for the best sexual health resources based on extensive research and review by
                our team of certified healthcare professionals and sexual health educators.
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
                      <ChevronDown className="text-pink-600" size={24} />
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
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Welcome to Sexual Wellness!</h3>
              <p className="text-gray-600 mb-6">
                Thank you for signing up! You'll receive evidence-based sexual health information and resources straight
                to your inbox.
              </p>
              <button
                onClick={() => setShowSuccessPopup(false)}
                className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-lg transition-colors duration-200"
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

export default SexualHealthLandingPage
