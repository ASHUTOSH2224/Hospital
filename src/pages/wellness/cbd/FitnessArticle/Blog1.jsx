"use client";

import { useState } from "react";
import { Heart, Dumbbell, Leaf, Clock, ChevronDown, User, Calendar } from "lucide-react";

export default function FitnessArticle1() {
  const [email, setEmail] = useState("");
  const [activeTab, setActiveTab] = useState("Welcome");
  const [expandedSections, setExpandedSections] = useState({
    welcome: true,
    philosophy: false,
    approach: false,
    resources: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  const tabs = [
    "Welcome",
    "Our Philosophy",
    "Science-Based Approach",
    "Workout Plans",
    "Nutrition Guides",
    "Success Stories",
    "Join Us"
  ];

  return (
    <div className="min-h-screen bg-white mt-36 lg:mt-32 pt-4 sm:pt-8 md:pt-12 lg:pt-16 xl:pt-20">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
        {/* Main grid container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Main Content - takes 2/3 width on large screens */}
          <div className="lg:col-span-2">
            {/* Header Section with Icon */}
            <div className="mb-6 sm:mb-8 bg-gradient-to-r from-green-100 to-blue-50 rounded-xl p-6 text-black">
              <div className="flex items-start">
                <div className="bg-white bg-opacity-20 p-3 rounded-lg mr-4">
                  <Dumbbell className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight">
                    Welcome to Healthline Fitness: A Letter from the Editor
                  </h1>
                  <p className="text-lg sm:text-xl text-gray-800 font-medium">
                    Fitness isn't about what you can lose. It's about what you can gain.
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Tabs with Icons */}
            <div className="relative mb-4 sm:mb-6">
              <div className="flex overflow-x-auto pb-2 mb-4 sm:mb-6 scrollbar-hide">
                <div className="flex space-x-2 min-w-max">
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`flex items-center px-4 py-2 text-xs sm:text-sm font-medium rounded-full whitespace-nowrap transition-colors flex-shrink-0 ${
                        activeTab === tab
                          ? "bg-green-600 text-white shadow-md"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {tab === "Welcome" && <Heart className="w-4 h-4 mr-1" />}
                      {tab === "Our Philosophy" && <Leaf className="w-4 h-4 mr-1" />}
                      {tab === "Science-Based Approach" && <Dumbbell className="w-4 h-4 mr-1" />}
                      {tab}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Intro with Visual Elements */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 mb-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-2/3">
                  <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-4 leading-relaxed">
                    Dear Healthline Fitness Community,<br /><br />
                    As we embark on this journey together, I want to share our vision for what fitness truly means. 
                    In a world obsessed with quick fixes and unrealistic standards, we're here to redefine fitness 
                    as a celebration of what your body can achieve, not just what it looks like.
                  </p>
                  <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-400">
                    <p className="text-sm text-green-800 font-medium">
                      "Fitness is not about being better than someone else. It's about being better than you used to be." 
                      <span className="block mt-1 text-xs">— Dr. Gabrielle Lyon, Founder of the Institute for Muscle-Centric Medicine</span>
                    </p>
                  </div>
                </div>
                <div className="md:w-1/3 bg-gradient-to-br from-green-50 to-white rounded-lg p-4 flex flex-col items-center justify-center border border-green-100">
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div className="bg-white p-3 rounded-lg shadow-xs border border-gray-100 flex flex-col items-center">
                      <Heart className="w-6 h-6 text-green-600 mb-1" />
                      <span className="text-xs text-center">Health First</span>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-xs border border-gray-100 flex flex-col items-center">
                      <Dumbbell className="w-6 h-6 text-blue-600 mb-1" />
                      <span className="text-xs text-center">Strength</span>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-xs border border-gray-100 flex flex-col items-center">
                      <Leaf className="w-6 h-6 text-teal-600 mb-1" />
                      <span className="text-xs text-center">Sustainability</span>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-xs border border-gray-100 flex flex-col items-center">
                      <Clock className="w-6 h-6 text-amber-600 mb-1" />
                      <span className="text-xs text-center">Longevity</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 text-center">Our pillars of fitness philosophy</p>
                </div>
              </div>
            </div>

            {/* Welcome Section */}
            <section 
              className="bg-white rounded-xl shadow-md mb-8 overflow-hidden border border-gray-200"
              onClick={() => toggleSection('welcome')}
            >
              <div className="flex justify-between items-center bg-gradient-to-r from-green-50 to-white p-5 cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-green-100 p-2 rounded-lg mr-4">
                    <Heart className="w-5 h-5 text-green-600" />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    A Warm Welcome
                  </h2>
                </div>
                <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${expandedSections.welcome ? 'rotate-180' : ''}`} />
              </div>
              
              {expandedSections.welcome && (
                <div className="p-5 pt-0">
                  {/* Welcome Content */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">Why We're Different</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <div className="bg-green-100 p-1 rounded-full mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <h4 className="font-medium text-gray-800">Evidence-Based</h4>
                        </div>
                        <p className="text-sm text-gray-600">
                          Every recommendation is backed by peer-reviewed science, not fitness fads or trends.
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <div className="bg-teal-100 p-1 rounded-full mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-teal-600" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                            </svg>
                          </div>
                          <h4 className="font-medium text-gray-800">Holistic Approach</h4>
                        </div>
                        <p className="text-sm text-gray-600">
                          We integrate physical training, nutrition, recovery, and mental wellness for complete health.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Editor's Note */}
                  <div className="bg-green-50 rounded-lg p-5 mb-4">
                    <h3 className="font-semibold text-green-800 mb-3">From the Editor's Desk</h3>
                    <div className="space-y-4">
                      <p className="text-sm text-gray-700">
                        After 15 years in the fitness industry, I've seen countless trends come and go. What remains constant is the power of movement to transform lives—not just bodies. At Healthline Fitness, we're committed to helping you discover that power in a way that respects your individuality, your schedule, and your goals.
                      </p>
                      <p className="text-sm text-gray-700">
                        Whether you're taking your first steps toward fitness or you're a seasoned athlete looking to optimize performance, you'll find science-backed resources here to support your journey.
                      </p>
                    </div>
                  </div>

                  {/* Fitness Benefits */}
                  <div className="bg-white border border-gray-200 rounded-lg p-5">
                    <h3 className="font-semibold text-gray-800 mb-3">What Fitness Can Give You</h3>
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-1">
                        <div className="flex items-start mb-2">
                          <span className="bg-green-100 text-green-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">1</span>
                          <p className="text-sm text-gray-600">More energy for your daily activities and loved ones</p>
                        </div>
                        <div className="flex items-start mb-2">
                          <span className="bg-green-100 text-green-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">2</span>
                          <p className="text-sm text-gray-600">Improved mood and mental clarity from endorphin release</p>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start mb-2">
                          <span className="bg-green-100 text-green-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">3</span>
                          <p className="text-sm text-gray-600">Greater confidence in what your body can accomplish</p>
                        </div>
                        <div className="flex items-start">
                          <span className="bg-green-100 text-green-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">4</span>
                          <p className="text-sm text-gray-600">Long-term health benefits that extend far beyond aesthetics</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* Philosophy Section */}
            <section 
              className="bg-white rounded-xl shadow-md mb-8 overflow-hidden border border-gray-200"
              onClick={() => toggleSection('philosophy')}
            >
              <div className="flex justify-between items-center bg-gradient-to-r from-blue-50 to-white p-5 cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-lg mr-4">
                    <Leaf className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    Our Fitness Philosophy
                  </h2>
                </div>
                <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${expandedSections.philosophy ? 'rotate-180' : ''}`} />
              </div>
              
              {expandedSections.philosophy && (
                <div className="p-5 pt-0">
                  {/* Philosophy Content */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">Core Principles That Guide Us</h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full bg-white rounded-lg overflow-hidden">
                        <thead className="bg-blue-100">
                          <tr>
                            <th className="py-2 px-4 text-left text-xs font-medium text-blue-800">Principle</th>
                            <th className="py-2 px-4 text-left text-xs font-medium text-blue-800">What It Means</th>
                            <th className="py-2 px-4 text-left text-xs font-medium text-blue-800">How We Apply It</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 text-xs">
                          <tr>
                            <td className="py-3 px-4 font-medium text-gray-800">Progress Over Perfection</td>
                            <td className="py-3 px-4 text-gray-700">Celebrating small wins leads to big results</td>
                            <td className="py-3 px-4 text-gray-700">We provide tools to track non-scale victories</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="py-3 px-4 font-medium text-gray-800">Movement as Medicine</td>
                            <td className="py-3 px-4 text-gray-700">Exercise is preventive healthcare</td>
                            <td className="py-3 px-4 text-gray-700">Our programs focus on functional fitness for life</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 font-medium text-gray-800">Individuality Matters</td>
                            <td className="py-3 px-4 text-gray-700">No one-size-fits-all approaches</td>
                            <td className="py-3 px-4 text-gray-700">We offer adaptable plans for all levels</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="py-3 px-4 font-medium text-gray-800">Sustainability First</td>
                            <td className="py-3 px-4 text-gray-700">Lifestyle changes beat short-term diets</td>
                            <td className="py-3 px-4 text-gray-700">We teach habits you can maintain forever</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Philosophy Highlights */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="font-semibold text-blue-800 mb-3">What We Believe About Fitness</h3>
                      <div className="space-y-4">
                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                          <h4 className="font-medium text-gray-800 mb-1">It's Not About Punishment</h4>
                          <p className="text-xs text-gray-600">
                            Exercise shouldn't be penance for what you ate. It's a celebration of your body's capabilities.
                          </p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                          <h4 className="font-medium text-gray-800 mb-1">All Movement Counts</h4>
                          <p className="text-xs text-gray-600">
                            From gardening to dancing to walking meetings—if it gets you moving, it's valuable.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-800 mb-3">Our Promise to You</h3>
                      <div className="bg-blue-50 rounded-lg p-4 h-full">
                        <ul className="space-y-3 text-sm">
                          <li className="flex items-start">
                            <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </span>
                            <span>We'll never promote unhealthy extremes or quick fixes</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </span>
                            <span>We'll provide modifications for all fitness levels</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </span>
                            <span>We'll celebrate your progress, no matter the pace</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Fitness Visualization */}
                  <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">The Healthline Fitness Pyramid</h3>
                    <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-6">
                      <div className="flex flex-col items-center">
                        <div className="w-full max-w-md">
                          {/* Fitness Pyramid Visualization */}
                          <div className="mb-2 bg-green-100 p-3 rounded-t-lg text-center border border-green-200">
                            <h4 className="text-sm font-medium text-green-800">Enjoyment & Consistency</h4>
                            <p className="text-xs text-gray-600">Finding activities you love and can sustain</p>
                          </div>
                          <div className="mb-2 bg-blue-100 p-3 text-center border border-blue-200">
                            <h4 className="text-sm font-medium text-blue-800">Strength & Mobility</h4>
                            <p className="text-xs text-gray-600">Building functional capacity for daily life</p>
                          </div>
                          <div className="mb-2 bg-teal-100 p-3 text-center border border-teal-200">
                            <h4 className="text-sm font-medium text-teal-800">Cardiovascular Health</h4>
                            <p className="text-xs text-gray-600">Supporting heart health and endurance</p>
                          </div>
                          <div className="bg-purple-100 p-3 rounded-b-lg text-center border border-purple-200">
                            <h4 className="text-sm font-medium text-purple-800">Nutrition & Recovery</h4>
                            <p className="text-xs text-gray-600">Fueling and restoring your body properly</p>
                          </div>
                        </div>
                      </div>
                      <p className="text-xs text-gray-600 text-center mt-3">Our hierarchy of fitness priorities—each layer supports the ones above</p>
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* Science-Based Approach Section */}
            <section 
              className="bg-white rounded-xl shadow-md mb-8 overflow-hidden border border-gray-200"
              onClick={() => toggleSection('approach')}
            >
              <div className="flex justify-between items-center bg-gradient-to-r from-teal-50 to-white p-5 cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-teal-100 p-2 rounded-lg mr-4">
                    <Dumbbell className="w-5 h-5 text-teal-600" />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    Our Science-Based Approach
                  </h2>
                </div>
                <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${expandedSections.approach ? 'rotate-180' : ''}`} />
              </div>
              
              {expandedSections.approach && (
                <div className="p-5 pt-0">
                  {/* Research Areas */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">Evidence-Based Fitness Strategies</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-teal-700 mb-2">Progressive Overload</h4>
                        <p className="text-xs text-gray-600">
                          Gradually increasing demands to continually make gains in strength and endurance
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-teal-700 mb-2">Recovery Science</h4>
                        <p className="text-xs text-gray-600">
                          Optimizing rest periods, sleep, and active recovery for better results
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-teal-700 mb-2">Metabolic Flexibility</h4>
                        <p className="text-xs text-gray-600">
                          Training your body to efficiently use different energy systems
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-teal-700 mb-2">NEAT Principles</h4>
                        <p className="text-xs text-gray-600">
                          Harnessing Non-Exercise Activity Thermogenesis for daily calorie burn
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-teal-700 mb-2">Mind-Muscle Connection</h4>
                        <p className="text-xs text-gray-600">
                          Using focused attention to improve exercise effectiveness
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-teal-700 mb-2">Periodization</h4>
                        <p className="text-xs text-gray-600">
                          Structured variation in training to prevent plateaus
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Research Highlights */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="font-semibold text-teal-800 mb-3">Featured Research</h3>
                      <div className="space-y-4">
                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                          <h4 className="font-medium text-gray-800 mb-1">JAMA 2022 (Exercise & Longevity)</h4>
                          <p className="text-xs text-gray-600 mb-2">150-300 minutes/week of moderate activity associated with 21-31% lower mortality risk</p>
                          <a href="#" className="text-xs text-teal-600 hover:underline">View Study</a>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                          <h4 className="font-medium text-gray-800 mb-1">Sports Medicine 2023 (Strength Training)</h4>
                          <p className="text-xs text-gray-600 mb-2">2x/week resistance training shown to reduce all-cause mortality by 21%</p>
                          <a href="#" className="text-xs text-teal-600 hover:underline">View Study</a>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-teal-800 mb-3">Upcoming Content Focus</h3>
                      <div className="bg-teal-50 rounded-lg p-4 h-full">
                        <ul className="space-y-3 text-sm">
                          <li className="flex items-start">
                            <span className="bg-teal-100 text-teal-800 rounded-full p-1 mr-2">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </span>
                            <span>Muscle protein synthesis optimization for all ages</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-teal-100 text-teal-800 rounded-full p-1 mr-2">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </span>
                            <span>Exercise strategies for metabolic health</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-teal-100 text-teal-800 rounded-full p-1 mr-2">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </span>
                            <span>Time-efficient workout protocols</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-teal-100 text-teal-800 rounded-full p-1 mr-2">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </span>
                            <span>Exercise for cognitive health and neuroprotection</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Research Limitations */}
                  <div className="bg-white border border-gray-200 rounded-lg p-5">
                    <h3 className="font-semibold text-gray-800 mb-3">Our Commitment to Scientific Integrity</h3>
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-1">
                        <div className="flex items-start mb-2">
                          <span className="bg-teal-100 text-teal-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">1</span>
                          <p className="text-sm text-gray-600">We cite primary research studies rather than media interpretations</p>
                        </div>
                        <div className="flex items-start mb-2">
                          <span className="bg-teal-100 text-teal-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">2</span>
                          <p className="text-sm text-gray-600">We distinguish between correlation and causation</p>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start mb-2">
                          <span className="bg-teal-100 text-teal-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">3</span>
                          <p className="text-sm text-gray-600">We acknowledge when evidence is preliminary or conflicting</p>
                        </div>
                        <div className="flex items-start">
                          <span className="bg-teal-100 text-teal-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">4</span>
                          <p className="text-sm text-gray-600">We update content as new research emerges</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* Final Takeaways */}
            <section className="bg-white rounded-xl shadow-md mb-10 p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                Your Fitness Journey Starts Here
              </h2>

              <div className="bg-green-50 p-5 rounded-lg mb-5">
                <h3 className="text-lg font-semibold text-green-800 mb-3">Getting Started</h3>
                <ol className="space-y-3">
                  {[
                    "Begin where you are—not where you think you should be",
                    "Focus on consistency before intensity",
                    "Celebrate every workout as a victory",
                    "Listen to your body's signals",
                    "Remember that rest days are part of progress"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="bg-green-100 text-green-800 rounded-full p-1 mr-3">
                        <span className="w-5 h-5 flex items-center justify-center text-sm font-medium">{index + 1}</span>
                      </span>
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="bg-blue-50 p-5 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Our Invitation to You</h3>
                <p className="text-sm text-gray-700 mb-3">
                  Fitness is a lifelong journey, not a destination. Whether you're here to build strength, improve health, manage stress, or simply feel more energized in your daily life—we're honored to be part of your path.
                </p>
                <p className="text-sm text-gray-700">
                  In the coming weeks, we'll be sharing workout plans, nutrition guides, recovery strategies, and mindset tools to support your goals. But remember—the most important step is the first one you take today. Welcome to the Healthline Fitness community.
                </p>
              </div>
            </section>
          </div>






<div className="lg:col-span-1 lg:sticky lg:top-28 lg:self-start">
  {/* Author Info */}
  <div className="bg-gray-50 rounded-lg p-6 mb-8">
    <div className="flex items-start gap-4 mb-4">
      <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
        <User className="w-8 h-8 text-gray-600" />
      </div>
      <div>
        <p className="text-sm text-gray-600 mb-1">
          <a href="#" className="text-blue-600 hover:underline">
            Fitness certified
          </a>{" "}
          by{" "}
          <a
            href="#"
            className="text-blue-600 hover:underline font-medium"
          >
            Dr. James Wilson, PhD Exercise Science
          </a>
        </p>

        <p className="text-sm text-gray-600 mb-1">
          — Written by{" "}
          <a
            href="#"
            className="text-blue-600 hover:underline font-medium"
          >
            Jessica Miller
          </a>
        </p>

        <p className="text-sm text-gray-600 flex items-center gap-1">
          — <Calendar className="w-3 h-3" />
          <a href="#" className="text-blue-600 hover:underline">
            Updated on July 1, 2024
          </a>
        </p>
      </div>
    </div>
  </div>

  {/* Newsletter Signup */}
  <div className="bg-green-50 rounded-lg p-6 mb-8">
    <div className="mb-4">
      <h3 className="text-sm font-bold text-green-800 uppercase tracking-wide mb-2">
        FITNESS DIGEST NEWSLETTER
      </h3>
      <h4 className="text-xl font-bold text-gray-900 mb-2">
        Get weekly fitness tips
      </h4>
      <p className="text-gray-700 text-sm">
        Receive workout plans, nutrition advice, and the latest exercise science delivered to your inbox.
      </p>
    </div>

    <form onSubmit={handleEmailSubmit} className="space-y-4">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
        required
      />
      <button
        type="submit"
        className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200"
      >
        SUBSCRIBE
      </button>
    </form>

    <p className="text-xs text-gray-600 mt-3">
      Your{" "}
      <a href="#" className="text-green-600 hover:underline">
        privacy
      </a>{" "}
      is important to us
    </p>
  </div>

  {/* Fitness Resources */}
  <div className="bg-white rounded-lg p-6 mb-8 border border-gray-200 shadow-sm">
    <h3 className="text-lg font-bold text-gray-800 mb-4">
      Fitness Resources
    </h3>
    <div className="space-y-4">
      <div className="border-b pb-4">
        <h4 className="font-medium text-gray-800">Workout Plans</h4>
        <a href="#" className="text-blue-600 text-sm hover:underline block">Beginner to Advanced Programs</a>
      </div>
      <div className="border-b pb-4">
        <h4 className="font-medium text-gray-800">Exercise Library</h4>
        <a href="#" className="text-blue-600 text-sm hover:underline block">500+ Exercises with Videos</a>
      </div>
      <div className="border-b pb-4">
        <h4 className="font-medium text-gray-800">Nutrition Guides</h4>
        <a href="#" className="text-blue-600 text-sm hover:underline block">Meal Plans for Your Goals</a>
      </div>
      <div>
        <h4 className="font-medium text-gray-800">Recovery Techniques</h4>
        <a href="#" className="text-blue-600 text-sm hover:underline block">Mobility & Restoration Methods</a>
      </div>
    </div>
  </div>

  {/* Educational Resources */}
  <div className="bg-white rounded-lg p-6 mb-8 border border-gray-200 shadow-sm">
    <h3 className="text-lg font-bold text-gray-800 mb-4">
      Fitness Education
    </h3>
    <div className="space-y-3">
      <div className="bg-blue-50 p-3 rounded-lg">
        <h4 className="text-sm font-medium text-blue-700 mb-1">Form Fundamentals</h4>
        <a href="#" className="text-xs text-blue-600 hover:underline block">Proper Technique Videos</a>
      </div>
      <div className="bg-purple-50 p-3 rounded-lg">
        <h4 className="text-sm font-medium text-purple-700 mb-1">Science of Strength</h4>
        <a href="#" className="text-xs text-purple-600 hover:underline block">How Muscles Adapt (PDF)</a>
      </div>
      <div className="bg-teal-50 p-3 rounded-lg">
        <h4 className="text-sm font-medium text-teal-700 mb-1">Workout Webinars</h4>
        <a href="#" className="text-xs text-teal-600 hover:underline block">Monthly Expert Sessions</a>
      </div>
      <div className="bg-amber-50 p-3 rounded-lg">
        <h4 className="text-sm font-medium text-amber-700 mb-1">Fitness Tracker</h4>
        <a href="#" className="text-xs text-amber-600 hover:underline block">Personalized Progress Tool</a>
      </div>
    </div>
  </div>

  {/* Downloadable Resources */}
  <div className="bg-white rounded-lg p-6 mb-8 border border-gray-200 shadow-sm">
    <h3 className="text-lg font-bold text-gray-800 mb-4">
      Free Fitness Guides
    </h3>
    <div className="space-y-3">
      <div className="flex items-start">
        <span className="bg-gray-100 p-1 rounded mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </span>
        <div>
          <h4 className="text-sm font-medium text-gray-800">Home Workout Plan</h4>
          <a href="#" className="text-xs text-blue-600 hover:underline">Download PDF</a>
        </div>
      </div>
      <div className="flex items-start">
        <span className="bg-gray-100 p-1 rounded mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </span>
        <div>
          <h4 className="text-sm font-medium text-gray-800">Meal Prep Guide</h4>
          <a href="#" className="text-xs text-blue-600 hover:underline">Download PDF</a>
        </div>
      </div>
      <div className="flex items-start">
        <span className="bg-gray-100 p-1 rounded mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </span>
        <div>
          <h4 className="text-sm font-medium text-gray-800">Progress Tracker</h4>
          <a href="#" className="text-xs text-blue-600 hover:underline">Download PDF</a>
        </div>
      </div>
    </div>
  </div>

  {/* Advertisement Placeholder */}
  <div className="bg-gray-100 rounded-lg p-6 mb-8">
    <p className="text-center text-gray-500 text-sm mb-4">
      ADVERTISEMENT
    </p>
    <div className="bg-green-600 rounded-lg p-6 text-white text-center">
      <h4 className="font-bold mb-2">Fitness Progress Journal</h4>
      <p className="text-sm mb-4">
        Track your workouts, nutrition, and progress with our science-based journal
      </p>
      <button className="bg-white hover:bg-gray-100 text-green-600 px-4 py-2 rounded text-sm font-medium transition-colors">
        LEARN MORE
      </button>
    </div>
  </div>
</div>
           </div>
      </div>
    </div>  
  );
}