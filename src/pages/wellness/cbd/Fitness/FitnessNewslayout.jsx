"use client";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Mail,
  ChevronRight,
  X,
  Star,
  Clock,
  Users,
  Shield,
  CheckCircle,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  FileText,
  Dumbbell,
} from "lucide-react";

export default function FitnessNewsletterLayout() {
  const [email, setEmail] = useState("");
  const [footerEmail, setFooterEmail] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleSignUp = () => {
    if (!email.trim()) return;
    setIsAnimating(true);
    setTimeout(() => {
      setShowSuccessMessage(true);
      setEmail("");
      setIsAnimating(false);
      setTimeout(() => setShowSuccessMessage(false), 3000);
    }, 1000);
  };

  const handleFooterSignUp = () => {
    if (!footerEmail.trim()) return;
    setShowSuccessMessage(true);
    setFooterEmail("");
    setTimeout(() => setShowSuccessMessage(false), 3000);
  };

  const workoutArticles = [
    {
      id: 1,
      title: "Understanding Workout Types: Strength, Cardio, HIIT, and More",
      description:
        "Explore comprehensive workout options including strength training, cardiovascular exercise, high-intensity interval training, flexibility work, and emerging fitness methods for optimal health benefits...",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
      readTime: "8 min read",
      category: "Workout Guide",
      link: "/wellness/Fitness/Understanding-Workout-Types",
    },
    {
      id: 2,
      title: "Essential Questions to Ask Your Personal Trainer",
      description:
        "Prepare for your fitness journey with this comprehensive list of important questions about training philosophy, certifications, experience, and program customization...",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
      readTime: "6 min read",
      category: "Trainer Guidance",
      link: "/wellness/Fitness/Essential-Questions-to-Ask-Your-Personal-Trainer",
    },
    {
      id: 3,
      title: "Real Fitness Transformations: A Member's Journey",
      description:
        "Real experiences and practical advice from fitness enthusiasts on building sustainable routines, overcoming plateaus, and maintaining motivation throughout their transformation journey...",
      image:
        "https://images.unsplash.com/photo-1549476464-37392f717541?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
      readTime: "10 min read",
      category: "Success Story",
      link: "/wellness/Fitness/Real-Fitness-Transformations",
    },
    {
      id: 4,
      title: "Managing Stress and Recovery in Modern Fitness",
      description:
        "Learn effective strategies for incorporating recovery into your fitness routine including sleep optimization, stress management, active recovery, and lifestyle integration...",
      image:
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
      readTime: "7 min read",
      category: "Recovery Guide",
      link: "/wellness/Fitness/Managing-Stress-and-Recovery-in-Modern-Fitness",
    },
    {
      id: 5,
      title: "Building Your Fitness Support Network",
      description:
        "Discover how to create a strong support system with trainers, workout partners, healthcare providers, and community resources for your fitness journey...",
      image:
        "https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
      readTime: "5 min read",
      category: "Support Resources",
      link: "/wellness/Fitness/Building-Your-network",
    },
    {
      id: 6,
      title: "Fitness and Nutrition: Maximizing Your Performance",
      description:
        "Essential nutrition guidelines, meal timing recommendations, and dietary strategies to fuel your workouts and support recovery for optimal fitness results...",
      image:
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
      readTime: "9 min read",
      category: "Nutrition Guide",
      link: "/wellness/Fitness/Fitness-and-Nutrition",
    },
  ];

  const educationArticles = [
    {
      id: 7,
      title: "The Science Behind Exercise: How It Transforms Your Body",
      description:
        "Learn about muscle adaptation, cardiovascular improvements, metabolic changes, and how scientific research supports exercise's impact on physical and mental health...",
      image:
        "https://images.unsplash.com/photo-1576671081837-49000212a370?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
      readTime: "7 min read",
      category: "Exercise Science",
      link: "/wellness/Fitness/Science-behind-exercise",
    },
    {
      id: 8,
      title: "Understanding Fitness Equipment: Quality, Safety, and Selection",
      description:
        "Explore equipment quality factors, safety certifications, proper maintenance, and industry standards that ensure you're getting effective, safe fitness gear...",
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
      readTime: "8 min read",
      category: "Equipment Guide",
      link: "/wellness/Fitness/Understanding-Fitness-Equipment:",
    },
    {
      id: 9,
      title: "Progressive Overload: The Key to Continuous Improvement",
      description:
        "Learn to implement progressive overload principles based on your fitness level, goals, exercise type, and individual response patterns for consistent progress...",
      image:
        "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
      readTime: "6 min read",
      category: "Training Guide",
      link: "/wellness/Fitness/Progressive-Overload",
    },
    {
      id: 10,
      title: "Injury Prevention: Understanding Form and Safety",
      description:
        "Navigate proper exercise technique, warm-up protocols, and safety considerations to prevent injuries and maintain long-term fitness success...",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
      readTime: "9 min read",
      category: "Safety Guide",
      link: "/wellness/Fitness/Injury-Prevention",
    },
  ];

  const footerLinks = {
    company: [
      { name: "About Us", href: "#" },
      { name: "Contact Us", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Privacy Settings", href: "#" },
      { name: "Advertising Policy", href: "#" },
      { name: "Fitness Topics", href: "#" },
    ],
    resources: [
      { name: "Sitemap", href: "#" },
      { name: "Equipment Reviews", href: "#" },
      { name: "Content Integrity", href: "#" },
      { name: "Newsletters", href: "#" },
    ],
  };

  return (
    <div className="min-h-screen relative overflow-hidden pt-20 md:pt-32">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-blue-50"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-red-200 rounded-full opacity-20 animate-pulse"></div>
        <div
          className="absolute top-40 right-20 w-16 h-16 bg-blue-200 rounded-full opacity-30 animate-bounce"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-40 left-20 w-12 h-12 bg-orange-200 rounded-full opacity-25 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 right-40 w-24 h-24 bg-red-100 rounded-full opacity-20 animate-bounce"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute top-60 left-1/2 w-8 h-8 bg-blue-300 rounded-full opacity-40 animate-ping"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
        {/* Header Newsletter Section */}
        <div className="bg-gradient-to-r from-red-600 to-blue-500 rounded-3xl p-8 mb-12 relative overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300">
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full transform translate-x-32 -translate-y-32 animate-pulse"></div>
            <div
              className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full transform -translate-x-20 translate-y-20 animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>

          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <div className="flex items-center mb-4 animate-fadeIn">
                <Dumbbell className="w-8 h-8 mr-3 text-orange-300 animate-pulse" />
                <h1 className="text-4xl font-bold">
                  Get Our Weekly Fitness Newsletter
                </h1>
              </div>
              <p className="text-red-100 mb-6 text-lg leading-relaxed">
                Join over 150K subscribers in receiving expert guidance on
                workout routines, fitness equipment, training techniques, and
                the latest breakthroughs in exercise science and performance.
              </p>

              <div className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-red-300 transition-all duration-300 transform hover:scale-105"
                  />
                </div>
                <button
                  onClick={handleSignUp}
                  disabled={isAnimating}
                  className={`bg-red-700 hover:bg-red-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                    isAnimating ? "animate-spin" : ""
                  }`}
                >
                  {isAnimating ? (
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    "SIGN UP"
                  )}
                </button>
              </div>

              <p className="text-red-200 text-sm mt-4 opacity-75">
                Your privacy is important to us
              </p>
            </div>

            <div className="relative">
              <div
                className="relative z-10 animate-fadeIn"
                style={{ animationDelay: "0.5s" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80"
                  alt="Fitness equipment and workout scene"
                  className="rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300"
                  onError={(e) => {
                    e.target.src = "/placeholder.svg?height=300&width=400";
                  }}
                />
                <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg animate-bounce">
                  <Dumbbell className="w-6 h-6 text-red-500" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Workouts Section */}
        <div className="mb-16 animate-fadeIn" style={{ animationDelay: "1s" }}>
          <div className="flex items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mr-4">
              WORKOUTS & FITNESS TRAINING
            </h2>
            <div className="flex-1 h-1 bg-gradient-to-r from-red-300 to-blue-300 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {workoutArticles.map((article, index) => (
              <div
                key={article.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer overflow-hidden animate-slideUp"
                style={{ animationDelay: `${index * 0.2}s` }}
                onClick={() => setSelectedArticle(article)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = "/placeholder.svg?height=200&width=300";
                    }}
                  />
                  <div className="absolute top-4 left-4 bg-white bg-opacity-90 px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                    {article.category}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {article.readTime}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-bold text-xl text-gray-800 mb-3 line-clamp-2 group-hover:text-red-600 transition-colors duration-300">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                    {article.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="w-4 h-4 mr-1" />
                      <span>2.1k readers</span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-red-600 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div
          className="mb-12 animate-fadeIn"
          style={{ animationDelay: "1.5s" }}
        >
          <div className="flex items-center mb-8">
            <Shield className="w-8 h-8 text-blue-600 mr-4 animate-pulse" />
            <h2 className="text-3xl font-bold text-gray-800 mr-4">
              EDUCATION & TRAINING SCIENCE
            </h2>
            <div className="flex-1 h-1 bg-gradient-to-r from-red-300 to-blue-300 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {educationArticles.map((article, index) => (
              <div
                key={article.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer overflow-hidden animate-slideUp"
                style={{ animationDelay: `${index * 0.15 + 1.5}s` }}
                onClick={() => setSelectedArticle(article)}
              >
                <div className="md:flex">
                  <div className="md:w-40 md:flex-shrink-0 relative overflow-hidden">
                    <img
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      className="w-full h-40 md:h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        e.target.src = "/placeholder.svg?height=200&width=300";
                      }}
                    />
                    <div className="absolute top-3 left-3 bg-white bg-opacity-90 px-2 py-1 rounded-full text-xs font-medium text-gray-700">
                      {article.category}
                    </div>
                  </div>

                  <div className="p-6 flex-1">
                    <h3 className="font-bold text-lg text-gray-800 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed text-sm">
                      {article.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-xs text-gray-500">
                        <Clock className="w-3 h-3 mr-1" />
                        <span>{article.readTime}</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Section */}
        <div
          className="bg-gradient-to-r from-blue-50 to-red-50 rounded-3xl p-8 shadow-xl animate-fadeIn"
          style={{ animationDelay: "2s" }}
        >
          {/* FitLine Logo and Social Icons */}
          <div className="flex flex-col md:flex-row justify-between items-start mb-8">
            <div className="mb-6 md:mb-0">
              <h1 className="text-3xl font-bold text-gray-800 mb-4 animate-slideIn">
                FitLine
              </h1>
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, color: "text-blue-600" },
                  { icon: Twitter, color: "text-blue-400" },
                  { icon: Instagram, color: "text-pink-600" },
                  { icon: Youtube, color: "text-red-600" },
                  { icon: FileText, color: "text-gray-600" },
                ].map(({ icon: Icon, color }, index) => (
                  <div
                    key={index}
                    className={`p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110 cursor-pointer animate-bounceIn ${color}`}
                    style={{ animationDelay: `${index * 0.1 + 2}s` }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Newsletter Signup */}
            <div className="md:col-span-1">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Mail className="w-5 h-5 mr-2 text-blue-600" />
                Get our fitness newsletter
              </h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                Stay informed with trusted fitness information, workout
                routines, equipment reviews, and training tips delivered to your
                inbox weekly.
              </p>

              <div className="flex mb-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={footerEmail}
                  onChange={(e) => setFooterEmail(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-l-xl border-2 border-red-200 focus:border-red-400 focus:outline-none transition-colors duration-300"
                />
                <button
                  onClick={handleFooterSignUp}
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-r-xl font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  SIGN UP
                </button>
              </div>

              <p className="text-gray-500 text-xs">
                Your{" "}
                <span className="underline cursor-pointer hover:text-blue-600">
                  privacy
                </span>{" "}
                is important to us
              </p>
            </div>

            {/* Footer Links */}
            <div className="md:col-span-2 grid md:grid-cols-2 gap-8">
              <div>
                <ul className="space-y-3">
                  {footerLinks.company.map((link, index) => (
                    <li
                      key={index}
                      className="animate-slideIn"
                      style={{ animationDelay: `${index * 0.05 + 2.2}s` }}
                    >
                      <a
                        href={link.href}
                        className="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-sm hover:underline"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <ul className="space-y-3">
                  {footerLinks.resources.map((link, index) => (
                    <li
                      key={index}
                      className="animate-slideIn"
                      style={{ animationDelay: `${(index + 6) * 0.05 + 2.2}s` }}
                    >
                      <a
                        href={link.href}
                        className="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-sm hover:underline"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-200 mt-8 pt-6 text-center">
            <p
              className="text-gray-500 text-xs leading-relaxed animate-fadeIn"
              style={{ animationDelay: "2.5s" }}
            >
              ©️ 2025 FitLine Media LLC. All rights reserved. FitLine Media is a
              fitness information company. Our website services, content, and
              products are for informational purposes only. FitLine Media does
              not provide medical advice, diagnosis, or treatment.
              <a
                href="#"
                className="underline hover:text-blue-600 transition-colors duration-300 ml-1"
              >
                See additional information
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Success Message */}
      {showSuccessMessage && (
        <div className="fixed top-6 right-6 bg-green-500 text-white rounded-2xl shadow-2xl p-4 flex items-center animate-slideIn z-50">
          <CheckCircle className="w-6 h-6 mr-3" />
          <span className="font-medium">
            Successfully subscribed to newsletter!
          </span>
        </div>
      )}

      {/* Pop-up Notification */}
      {showPopup && (
        <div className="fixed bottom-6 right-6 bg-white rounded-2xl shadow-2xl p-6 max-w-sm animate-slideIn z-50 border border-blue-100">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-blue-500 to-red-500 rounded-full p-2 mr-3">
                <Star className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-bold text-gray-800">New Article Alert!</h4>
            </div>
            <button
              onClick={() => setShowPopup(false)}
              className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <p className="text-gray-600 text-sm mb-3">
            "Understanding Workout Types" just published!
          </p>
          <button className="bg-gradient-to-r from-blue-500 to-red-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            Read Now
          </button>
        </div>
      )}

      {/* Article Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-slideUp">
            <div className="relative">
              <img
                src={selectedArticle.image || "/placeholder.svg"}
                alt={selectedArticle.title}
                className="w-full h-64 object-cover rounded-t-3xl"
                onError={(e) => {
                  e.target.src = "/placeholder.svg?height=264&width=672";
                }}
              />
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 bg-white bg-opacity-90 rounded-full p-2 hover:bg-opacity-100 transition-all duration-200"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>
            <div className="p-8">
              <div className="flex items-center mb-4">
                <span className="bg-gradient-to-r from-blue-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-medium mr-3">
                  {selectedArticle.category}
                </span>
                <span className="text-gray-500 text-sm flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {selectedArticle.readTime}
                </span>
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                {selectedArticle.title}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {selectedArticle.description}
              </p>
              <div className="border-t pt-6">
                <Link to={selectedArticle.link}>
                  <button className="bg-gradient-to-r from-red-500 to-blue-600 text-white px-6 py-2 rounded-lg">
                    Continue Reading
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
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-slideUp {
          animation: slideUp 0.6s ease-out forwards;
        }

        .animate-slideIn {
          animation: slideIn 0.5s ease-out forwards;
        }

        .animate-bounceIn {
          animation: bounceIn 0.6s ease-out forwards;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
