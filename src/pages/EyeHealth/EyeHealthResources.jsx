"use client"

import { useState, useEffect } from "react"
import { X, ArrowRight, Eye, Users, Heart, Shield } from "lucide-react"
import { Link } from "react-router-dom"

const EyeHealthResources = () => {
  const [selectedCard, setSelectedCard] = useState(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const resources = [
    {
      id: 1,
      title: "Understanding Your Eye Care Team",
      description: "Learn about optometrists, ophthalmologists, and other vision specialists in your care...",
      fullDescription:
        "A comprehensive guide to understanding your eye care team. Learn about the different specialists involved in your vision care including optometrists, ophthalmologists, opticians, vision therapists, and retina specialists. Discover how to communicate effectively with your eye care professionals and advocate for your vision health needs throughout your treatment journey. Understanding each professional's role helps you get the most comprehensive care for your eyes.",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      icon: <Users className="w-5 h-5" />,
      category: "Care Team",
      link: "/health-conditions/eye-health/blogs/eye-care-team-guide"
    },
    {
      id: 2,
      title: "Managing Common Eye Conditions",
      description: "Learn effective strategies to cope with dry eyes, glaucoma, and other vision issues...",
      fullDescription:
        "Practical guidance on managing common eye conditions including dry eye syndrome, glaucoma, cataracts, and age-related macular degeneration. Discover evidence-based strategies, treatment options, and lifestyle modifications that can help you maintain your vision health. Includes tips for proper eye care, nutrition for eye health, protective measures, and when to seek immediate medical attention for your eyes.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsMgzclV7eGVCwVCQejh1aq_9Y-rQv6pws7A&s",
      icon: <Eye className="w-5 h-5" />,
      category: "Conditions",
      link: "/health-conditions/eye-health/blogs/eye-conditions-guide"
    },
    {
      id: 3,
      title: "Vision Health Support Resources",
      description: "Accessing community resources, assistive technologies, and support services for vision care...",
      fullDescription:
        "Learn how to access vision health support resources in your community. Discover information about assistive technologies, vision rehabilitation services, and support groups for people with vision impairments. Includes guidance on insurance coverage for vision care, financial assistance programs, and resources for maintaining independence with vision challenges. Connect with others who understand your journey.",
      image:
        "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      icon: <Heart className="w-5 h-5" />,
      category: "Support",
      link: "/health-conditions/eye-health/blogs/vision-health-support-resources"
    },
    {
      id: 4,
      title: "Digital Eye Strain Prevention",
      description: "Protect your eyes from computer screens and digital devices with proven strategies...",
      fullDescription:
        "In our digital age, protecting your eyes from screen-related strain is crucial. Learn about the 20-20-20 rule, proper lighting, screen positioning, and blue light protection. Discover exercises to reduce eye fatigue, symptoms to watch for, and when digital eye strain might indicate a more serious condition. Get practical tips for creating an eye-friendly workspace.",
      image:
        "https://images.unsplash.com/photo-1511715282680-fbf93a50e721?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      icon: <Shield className="w-5 h-5" />,
      category: "Prevention",
      link: "/health-conditions/eye-health/blogs/digital-eye-strain-guide"
    },
  ]

  const additionalResources = [
    {
      title: "Comprehensive Eye Exams",
      description: "What to expect during your routine eye examination",
      image:
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        link: "/health-conditions/eye-health/blogs/comprehensive-eye-exams-guide"
    },
    {
      title: "Vision Therapy Options",
      description: "Specialized treatments for vision problems",
      image: "https://images.unsplash.com/photo-1551884831-bbf3cdc6469e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      link: "/health-conditions/eye-health/blogs/vision-therapy-guide"
    },
    {
      title: "Optometrist Consultations",
      description: "Making the most of your eye care appointments",
      image:
        "https://images.unsplash.com/photo-1580121441575-41bcb5c6b47c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        link: "/health-conditions/eye-health/blogs/optometrist-consultations-guide"
    },
  ]

  const openPopup = (resource) => {
    setSelectedCard(resource)
  }

  const closePopup = () => {
    setSelectedCard(null)
  }

  return (
    <div className="min-h-screen relative">
      {/* Background with your specified gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-orange-50">
        {/* Subtle animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-16 h-16 bg-purple-200 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-12 h-12 bg-orange-200 rounded-full animate-bounce"></div>
          <div className="absolute bottom-32 left-1/4 w-10 h-10 bg-purple-300 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-1/3 w-8 h-8 bg-pink-200 rounded-full animate-pulse delay-500"></div>
          <div className="absolute bottom-20 right-10 w-14 h-14 bg-indigo-200 rounded-full animate-bounce delay-700"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header - Enhanced with icon */}
        <div
          className={`mb-8 transform transition-all duration-800 ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-orange-500 rounded-lg flex items-center justify-center">
              <Eye className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 tracking-wide">EYE HEALTH RESOURCES</h1>
          </div>
          <hr className="border-t-2 border-gray-300 w-full" />
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left Column - Large Guide Card */}
          <div
            className={`lg:col-span-1 transform transition-all duration-1000 delay-200 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"}`}
          >
            <div
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group"
              onClick={() =>
                openPopup({
                  id: "main",
                  title: "Comprehensive Eye Health Guide",
                  description: "Your complete resource for maintaining optimal vision and eye health.",
                  fullDescription:
                    "This comprehensive guide provides essential information about eye health, from understanding your vision assessment through treatment options and preventive care. Learn about different eye conditions including refractive errors, cataracts, glaucoma, macular degeneration, and diabetic retinopathy. Discover how to work with your eye care team, maintain proper eye hygiene, protect your vision from digital strain, and access vision support resources for you and your family. This guide covers everything from basic eye anatomy to advanced treatment options.",
                  image:
                    "https://images.unsplash.com/photo-1577401239170-897942555fb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                  category: "Complete Guide",
                  link: "/health-conditions/eye-health/blogs/comprehensive-eye-health-guide"
                })
              }
            >
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1577401239170-897942555fb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Professional eye examination with modern equipment"
                  className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/30 transition-all duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-purple-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured Guide
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 group-hover:text-purple-700 transition-colors duration-300">
                  Comprehensive Eye Health Guide
                </h2>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  Your complete resource for maintaining optimal vision and eye health throughout every stage of life.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Resource Cards */}
          <div
            className={`lg:col-span-1 space-y-6 transform transition-all duration-1000 delay-400 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}`}
          >
            {resources.slice(0, 3).map((resource, index) => (
              <div
                key={resource.id}
                className="flex bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group"
                onClick={() => openPopup(resource)}
                style={{
                  animationDelay: `${index * 150}ms`,
                }}
              >
                {/* Image - Square format */}
                <div className="relative w-32 h-24 flex-shrink-0 overflow-hidden">
                  <img
                    src={resource.image || "/placeholder.svg"}
                    alt={resource.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-orange-500/0 group-hover:from-purple-500/20 group-hover:to-orange-500/20 transition-all duration-300"></div>
                  <div className="absolute top-2 left-2">
                    <div className="w-6 h-6 bg-white/90 rounded-full flex items-center justify-center text-purple-600">
                      {resource.icon}
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div className="p-4 flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold text-purple-600 bg-purple-100 px-2 py-1 rounded-full">
                      {resource.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-purple-700 transition-colors duration-300">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{resource.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Resources Section */}
        <div
          className={`transform transition-all duration-1000 delay-600 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
        >
          <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <div className="w-2 h-6 bg-gradient-to-b from-purple-500 to-orange-500 rounded-full"></div>
            Additional Eye Health Resources
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {additionalResources.map((resource, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group"
                onClick={() =>
                  openPopup({
                    ...resource,
                    id: `additional-${index}`,
                    fullDescription: `Learn more about ${resource.title.toLowerCase()}. This comprehensive resource provides detailed information and practical guidance for your eye health journey.`,
                  })
                }
              >
                <div className="relative overflow-hidden h-40">
                  <img
                    src={resource.image || "/placeholder.svg"}
                    alt={resource.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-800 mb-2 group-hover:text-purple-700 transition-colors duration-300">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{resource.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Fourth main resource card */}
          <div
            className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group"
            onClick={() => openPopup(resources[3])}
          >
            <div className="flex">
              <div className="relative w-48 h-32 flex-shrink-0 overflow-hidden">
                <img
                  src={resources[3].image || "/placeholder.svg"}
                  alt={resources[3].title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-orange-500/0 group-hover:from-purple-500/20 group-hover:to-orange-500/20 transition-all duration-300"></div>
                <div className="absolute top-2 left-2">
                  <div className="w-6 h-6 bg-white/90 rounded-full flex items-center justify-center text-purple-600">
                    {resources[3].icon}
                  </div>
                </div>
              </div>
              <div className="p-6 flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-semibold text-purple-600 bg-purple-100 px-2 py-1 rounded-full">
                    {resources[3].category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-700 transition-colors duration-300">
                  {resources[3].title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{resources[3].description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {selectedCard && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform animate-slideUp">
            {/* Popup Header with Image */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={selectedCard.image || "/placeholder.svg"}
                alt={selectedCard.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/80 to-orange-500/80"></div>
              <button
                onClick={closePopup}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="absolute bottom-4 left-6 right-6">
                {selectedCard.category && (
                  <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold mb-2">
                    {selectedCard.category}
                  </span>
                )}
                <h2 className="text-2xl font-bold text-white mb-2">{selectedCard.title}</h2>
              </div>
            </div>

            {/* Popup Content */}
            <div className="p-6">
              <p className="text-gray-700 leading-relaxed text-lg mb-6">{selectedCard.fullDescription}</p>
              <div className="flex justify-end space-x-3">
                <button
                  onClick={closePopup}
                  className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors duration-200"
                >
                  Close
                </button>

                <Link to={selectedCard?.link || "#"}>
                <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-orange-500 text-white rounded-lg hover:from-purple-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
      `}</style>
    </div>
  )
}

export default EyeHealthResources
