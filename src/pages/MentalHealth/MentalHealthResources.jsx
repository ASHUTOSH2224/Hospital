"use client"

import { useState, useEffect } from "react"
import { X, ArrowRight, Brain, Users, Heart, Shield } from "lucide-react"
import { Link } from "react-router-dom"

const MentalHealthResources = () => {
  const [selectedCard, setSelectedCard] = useState(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const resources = [
    {
      id: 1,
      title: "Understanding Your Mental Health Team",
      description: "Learn about psychiatrists, psychologists, and other mental health specialists in your care...",
      fullDescription:
        "A comprehensive guide to understanding your mental health care team. Learn about the different specialists involved in your mental wellness including psychiatrists, psychologists, therapists, counselors, and social workers. Discover how to communicate effectively with your mental health professionals and advocate for your needs throughout your treatment journey. Understanding each professional's role helps you get the most comprehensive care for your mental wellbeing.",
      image:
        "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      icon: <Users className="w-5 h-5" />,
      category: "Care Team",
      link: "/health-conditions/mental-health/blogs/mental-health-team-guide"
    },
    {
      id: 2,
      title: "Managing Common Mental Health Conditions",
      description: "Learn effective strategies to cope with anxiety, depression, and other mental health issues...",
      fullDescription:
        "Practical guidance on managing common mental health conditions including anxiety disorders, depression, bipolar disorder, and PTSD. Discover evidence-based strategies, treatment options, and lifestyle modifications that can help you maintain your mental wellbeing. Includes tips for proper self-care, stress management techniques, healthy coping mechanisms, and when to seek professional help for your mental health.",
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      icon: <Brain className="w-5 h-5" />,
      category: "Conditions",
      link: "/health-conditions/mental-health/blogs/managing-common-mental-health"
    },
    {
      id: 3,
      title: "Mental Health Support Resources",
      description: "Accessing community resources, support groups, and services for mental wellness...",
      fullDescription:
        "Learn how to access mental health support resources in your community. Discover information about support groups, crisis services, and community mental health centers. Includes guidance on insurance coverage for mental health care, financial assistance programs, and resources for maintaining independence while managing mental health challenges. Connect with others who understand your journey.",
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      icon: <Heart className="w-5 h-5" />,
      category: "Support",
      link: "/health-conditions/mental-health/blogs/mental-health-support-resources"
    },
    {
      id: 4,
      title: "Digital Mental Health Tools",
      description: "Explore apps, online therapy, and digital resources for mental wellness support...",
      fullDescription:
        "In our digital age, accessing mental health support online has become increasingly important. Learn about teletherapy options, mental health apps, online support communities, and digital wellness tools. Discover how to evaluate the quality of digital mental health resources, protect your privacy, and integrate technology into your mental wellness routine in a healthy, balanced way.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      icon: <Shield className="w-5 h-5" />,
      category: "Digital Tools",
      link: "/health-conditions/mental-health/blogs/digital-mental-health-guide"
    },
  ]

  const additionalResources = [
    {
      title: "Comprehensive Mental Health Assessments",
      description: "What to expect during your mental health evaluation",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        link: "/health-conditions/mental-health/blogs/mental-health-assessments-guide"
    },
    {
      title: "Therapy Approaches & Modalities",
      description: "Understanding different therapeutic techniques and approaches",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        link: "/health-conditions/mental-health/blogs/therapy-approaches-guide"
    },
    {
      title: "Mental Health Professional Consultations",
      description: "Making the most of your therapy and psychiatric appointments",
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      link: "/health-conditions/mental-health/blogs/mental-health-assessments-guide"
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
              <Brain className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 tracking-wide">MENTAL HEALTH RESOURCES</h1>
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
                  title: "Comprehensive Mental Health Guide",
                  description: "Your complete resource for maintaining optimal mental wellness and emotional health.",
                  fullDescription:
                    "This comprehensive guide provides essential information about mental health, from understanding your psychological assessment through treatment options and preventive care. Learn about different mental health conditions including anxiety disorders, depression, bipolar disorder, PTSD, and schizophrenia. Discover how to work with your mental health care team, develop healthy coping strategies, build resilience, and access mental health support resources for you and your family. This guide covers everything from basic mental health concepts to advanced treatment approaches.",
                  image:
                    "https://images.unsplash.com/photo-1493836512294-502baa1986e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                  category: "Complete Guide",
                  link: "/health-conditions/mental-health/blogs/mental-health-guide"
                })
              }
            >
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1493836512294-502baa1986e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Mental health and wellness concept"
                  className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = "/placeholder.svg?height=400&width=600"
                  }}
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
                  Comprehensive Mental Health Guide
                </h2>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  Your complete resource for maintaining optimal mental wellness and emotional health throughout every
                  stage of life.
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
                    src={resource.image || "/placeholder.svg?height=200&width=300"}
                    alt={resource.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = "/placeholder.svg?height=200&width=300"
                    }}
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
            Additional Mental Health Resources
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
                    fullDescription: `Learn more about ${resource.title.toLowerCase()}. This comprehensive resource provides detailed information and practical guidance for your mental health journey.`,
                  })
                }
              >
                <div className="relative overflow-hidden h-40">
                  <img
                    src={resource.image || "/placeholder.svg?height=200&width=300"}
                    alt={resource.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = "/placeholder.svg?height=200&width=300"
                    }}
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
                  src={resources[3].image || "/placeholder.svg?height=200&width=300"}
                  alt={resources[3].title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = "/placeholder.svg?height=200&width=300"
                  }}
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
                src={selectedCard.image || "/placeholder.svg?height=300&width=600"}
                alt={selectedCard.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = "/placeholder.svg?height=300&width=600"
                }}
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
                <Link to={selectedCard.link || "#"}>
                
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

export default MentalHealthResources
