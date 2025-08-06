"use client";

import { useState } from "react";
import {
  Dumbbell,
  HeartPulse,
  Layers,
  Target,
  ChevronDown,
  User,
  Calendar,
  Award,
  Clock,
  BarChart2,
} from "lucide-react";

export default function FitnessArticle3() {
  const [email, setEmail] = useState("");
  const [activeTab, setActiveTab] = useState("Introduction");
  const [expandedSections, setExpandedSections] = useState({
    introduction: true,
    beginners: false,
    intermediate: false,
    advanced: false,
    routines: false,
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  const tabs = [
    "Introduction",
    "Beginner Exercises",
    "Intermediate Exercises",
    "Advanced Exercises",
    "Sample Routines",
    "Common Mistakes",
    "Progression Tips",
  ];

  return (
    <div className="min-h-screen bg-white mt-36 lg:mt-32 pt-4 sm:pt-8 md:pt-12 lg:pt-16 xl:pt-20">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
        {/* Main grid container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Main Content - takes 2/3 width on large screens */}
          <div className="lg:col-span-2">
            {/* Header Section with Icon */}
            <div className="mb-6 sm:mb-8 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6 text-black">
              <div className="flex items-start">
                <div className="bg-white bg-opacity-20 p-3 rounded-lg mr-4">
                  <Dumbbell className="w-8 h-8 text-orange-600" />
                </div>
                <div>
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight">
                    The Best Core Exercises for All Fitness Levels
                  </h1>
                  <p className="text-lg sm:text-xl text-black font-medium">
                    Strengthening your core muscles helps stabilize your body,
                    improve posture, and enhance overall athletic performance
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
                          ? "bg-orange-600 text-white shadow-md"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {tab === "Introduction" && (
                        <HeartPulse className="w-4 h-4 mr-1" />
                      )}
                      {tab === "Beginner Exercises" && (
                        <Layers className="w-4 h-4 mr-1" />
                      )}
                      {tab === "Intermediate Exercises" && (
                        <BarChart2 className="w-4 h-4 mr-1" />
                      )}
                      {tab === "Advanced Exercises" && (
                        <Award className="w-4 h-4 mr-1" />
                      )}
                      {tab === "Sample Routines" && (
                        <Clock className="w-4 h-4 mr-1" />
                      )}
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
                    A strong core is the foundation for all movement and
                    athletic performance. Contrary to popular belief, the core
                    includes much more than just your abdominal muscles—it
                    comprises all the muscles that stabilize your spine and
                    pelvis, including your obliques, transverse abdominis,
                    erector spinae, diaphragm, pelvic floor, and even your
                    glutes. This comprehensive guide covers the most effective
                    core exercises for every fitness level, with proper form
                    cues, progressions, and sample routines.
                  </p>
                  <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-400">
                    <p className="text-sm text-orange-800 font-medium">
                      "Core strength reduces injury risk by 30% and improves
                      athletic performance by up to 20% according to multiple
                      sports medicine studies."
                    </p>
                  </div>
                </div>
                <div className="md:w-1/3 bg-gradient-to-br from-orange-50 to-white rounded-lg p-4 flex flex-col items-center justify-center border border-orange-100">
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div className="bg-white p-3 rounded-lg shadow-xs border border-gray-100 flex flex-col items-center">
                      <HeartPulse className="w-6 h-6 text-orange-600 mb-1" />
                      <span className="text-xs text-center">
                        Injury Prevention
                      </span>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-xs border border-gray-100 flex flex-col items-center">
                      <Target className="w-6 h-6 text-orange-600 mb-1" />
                      <span className="text-xs text-center">
                        Better Posture
                      </span>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-xs border border-gray-100 flex flex-col items-center">
                      <Dumbbell className="w-6 h-6 text-orange-600 mb-1" />
                      <span className="text-xs text-center">
                        Strength Gains
                      </span>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-xs border border-gray-100 flex flex-col items-center">
                      <BarChart2 className="w-6 h-6 text-orange-600 mb-1" />
                      <span className="text-xs text-center">Performance</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 text-center">
                    Benefits of Core Strength
                  </p>
                </div>
              </div>
            </div>

            {/* Core Anatomy Section */}
            <section
              className="bg-white rounded-xl shadow-md mb-8 overflow-hidden border border-gray-200"
              onClick={() => toggleSection("introduction")}
            >
              <div className="flex justify-between items-center bg-gradient-to-r from-orange-50 to-white p-5 cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-orange-100 p-2 rounded-lg mr-4">
                    <HeartPulse className="w-5 h-5 text-orange-600" />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    Core Anatomy & Fundamentals
                  </h2>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    expandedSections.introduction ? "rotate-180" : ""
                  }`}
                />
              </div>

              {expandedSections.introduction && (
                <div className="p-5 pt-0">
                  {/* Core Basics */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Understanding Your Core Muscles
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <div className="bg-orange-100 p-1 rounded-full mr-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-4 h-4 text-orange-600"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <h4 className="font-medium text-gray-800">
                            Muscle Groups
                          </h4>
                        </div>
                        <p className="text-sm text-gray-600">
                          The core includes rectus abdominis, obliques
                          (internal/external), transverse abdominis, erector
                          spinae, multifidus, diaphragm, pelvic floor, and hip
                          flexors.
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <div className="bg-teal-100 p-1 rounded-full mr-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-4 h-4 text-teal-600"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                            </svg>
                          </div>
                          <h4 className="font-medium text-gray-800">
                            Functions
                          </h4>
                        </div>
                        <p className="text-sm text-gray-600">
                          Core muscles stabilize the spine, transfer force
                          between upper/lower body, maintain posture, and
                          protect internal organs.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Core Functions */}
                  <div className="bg-orange-50 rounded-lg p-5 mb-4">
                    <h3 className="font-semibold text-orange-800 mb-3">
                      Why Core Strength Matters
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-white p-3 rounded-lg border border-orange-100">
                        <h4 className="text-sm font-medium text-orange-700 mb-1">
                          Injury Prevention
                        </h4>
                        <p className="text-xs text-gray-700">
                          Reduces back pain and risk of sports injuries
                        </p>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-orange-100">
                        <h4 className="text-sm font-medium text-orange-700 mb-1">
                          Improved Posture
                        </h4>
                        <p className="text-xs text-gray-700">
                          Helps maintain proper alignment during
                          sitting/standing
                        </p>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-orange-100">
                        <h4 className="text-sm font-medium text-orange-700 mb-1">
                          Better Balance
                        </h4>
                        <p className="text-xs text-gray-700">
                          Enhances stability during movement
                        </p>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-orange-100">
                        <h4 className="text-sm font-medium text-orange-700 mb-1">
                          Enhanced Performance
                        </h4>
                        <p className="text-xs text-gray-700">
                          Improves power transfer in athletic movements
                        </p>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-orange-100">
                        <h4 className="text-sm font-medium text-orange-700 mb-1">
                          Daily Function
                        </h4>
                        <p className="text-xs text-gray-700">
                          Makes everyday movements easier
                        </p>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-orange-100">
                        <h4 className="text-sm font-medium text-orange-700 mb-1">
                          Breathing Efficiency
                        </h4>
                        <p className="text-xs text-gray-700">
                          Supports diaphragmatic breathing
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Core Training Principles */}
                  <div className="bg-white border border-gray-200 rounded-lg p-5">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Core Training Principles
                    </h3>
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-1">
                        <div className="flex items-start mb-2">
                          <span className="bg-orange-100 text-orange-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            1
                          </span>
                          <p className="text-sm text-gray-600">
                            Focus on quality over quantity - proper form is
                            crucial
                          </p>
                        </div>
                        <div className="flex items-start mb-2">
                          <span className="bg-orange-100 text-orange-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            2
                          </span>
                          <p className="text-sm text-gray-600">
                            Train all movement planes: flexion, extension,
                            rotation, anti-rotation
                          </p>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start mb-2">
                          <span className="bg-orange-100 text-orange-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            3
                          </span>
                          <p className="text-sm text-gray-600">
                            Include both dynamic and isometric exercises
                          </p>
                        </div>
                        <div className="flex items-start">
                          <span className="bg-orange-100 text-orange-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            4
                          </span>
                          <p className="text-sm text-gray-600">
                            Progress gradually - don't rush to advanced
                            movements
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* Beginner Exercises Section */}
            <section
              className="bg-white rounded-xl shadow-md mb-8 overflow-hidden border border-gray-200"
              onClick={() => toggleSection("beginners")}
            >
              <div className="flex justify-between items-center bg-gradient-to-r from-blue-50 to-white p-5 cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-lg mr-4">
                    <Layers className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    Beginner Core Exercises
                  </h2>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    expandedSections.beginners ? "rotate-180" : ""
                  }`}
                />
              </div>

              {expandedSections.beginners && (
                <div className="p-5 pt-0">
                  {/* Beginner Exercises */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Foundation Movements
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full bg-white rounded-lg overflow-hidden">
                        <thead className="bg-blue-100">
                          <tr>
                            <th className="py-2 px-4 text-left text-xs font-medium text-blue-800">
                              Exercise
                            </th>
                            <th className="py-2 px-4 text-left text-xs font-medium text-blue-800">
                              Muscles Worked
                            </th>
                            <th className="py-2 px-4 text-left text-xs font-medium text-blue-800">
                              Instructions
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 text-xs">
                          <tr>
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Dead Bug
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Transverse abdominis, rectus abdominis
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Lie on back, raise knees to 90°, extend opposite
                              arm/leg while maintaining pelvic stability
                            </td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Plank (Knees)
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Entire core, shoulders
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Forearms and knees on ground, body straight from
                              knees to head, hold 15-30 sec
                            </td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Bird Dog
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Erector spinae, glutes, shoulders
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              On hands and knees, extend opposite arm/leg while
                              keeping hips level
                            </td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Glute Bridge
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Glutes, hamstrings, lower abs
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Lie on back, knees bent, lift hips until body
                              forms straight line from shoulders to knees
                            </td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Seated Knee Lift
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Lower abs, hip flexors
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Sit tall on chair, lift one knee toward chest
                              while maintaining upright posture
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Beginner Tips */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="font-semibold text-blue-800 mb-3">
                        Beginner Progression Tips
                      </h3>
                      <div className="space-y-4">
                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                          <h4 className="font-medium text-gray-800 mb-1">
                            Focus on Form
                          </h4>
                          <p className="text-xs text-gray-600">
                            Master basic movements before adding intensity.
                            Quality reps are more valuable than quantity.
                          </p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                          <h4 className="font-medium text-gray-800 mb-1">
                            Breathing
                          </h4>
                          <p className="text-xs text-gray-600">
                            Exhale during exertion, inhale during relaxation.
                            Avoid holding your breath.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-800 mb-3">
                        Common Beginner Mistakes
                      </h3>
                      <div className="bg-blue-50 rounded-lg p-4 h-full">
                        <ul className="space-y-3 text-sm">
                          <li className="flex items-start">
                            <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-3 w-3"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                            <span>
                              Arching back during planks (tuck pelvis to engage
                              core properly)
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-3 w-3"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                            <span>
                              Moving too fast - control is more important than
                              speed
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-3 w-3"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                            <span>
                              Only training abs (neglecting other core muscles)
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-3 w-3"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                            <span>Holding breath during exertion</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Beginner Visualization */}
                  <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Beginner Exercise Progression
                    </h3>
                    <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-6 text-center">
                      <div className="grid grid-cols-3 gap-4 text-xs mb-4">
                        <div className="bg-white p-2 rounded border border-blue-100">
                          <div className="bg-blue-100 rounded-full w-8 h-8 mx-auto mb-1 flex items-center justify-center">
                            <Layers className="w-4 h-4 text-blue-600" />
                          </div>
                          <p>Dead Bug</p>
                          <p className="text-xs text-gray-500">3x8 each side</p>
                        </div>
                        <div className="bg-white p-2 rounded border border-blue-100">
                          <div className="bg-blue-100 rounded-full w-8 h-8 mx-auto mb-1 flex items-center justify-center">
                            <Layers className="w-4 h-4 text-blue-600" />
                          </div>
                          <p>Knee Plank</p>
                          <p className="text-xs text-gray-500">3x20 sec</p>
                        </div>
                        <div className="bg-white p-2 rounded border border-blue-100">
                          <div className="bg-blue-100 rounded-full w-8 h-8 mx-auto mb-1 flex items-center justify-center">
                            <Layers className="w-4 h-4 text-blue-600" />
                          </div>
                          <p>Bird Dog</p>
                          <p className="text-xs text-gray-500">3x6 each side</p>
                        </div>
                      </div>
                      <p className="text-xs text-gray-600">
                        Perform this circuit 2-3 times per week with at least
                        one day of rest between sessions
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* Intermediate Exercises Section */}
            <section
              className="bg-white rounded-xl shadow-md mb-8 overflow-hidden border border-gray-200"
              onClick={() => toggleSection("intermediate")}
            >
              <div className="flex justify-between items-center bg-gradient-to-r from-purple-50 to-white p-5 cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-purple-100 p-2 rounded-lg mr-4">
                    <BarChart2 className="w-5 h-5 text-purple-600" />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    Intermediate Core Exercises
                  </h2>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    expandedSections.intermediate ? "rotate-180" : ""
                  }`}
                />
              </div>

              {expandedSections.intermediate && (
                <div className="p-5 pt-0">
                  {/* Intermediate Exercises */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Progressive Movements
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full bg-white rounded-lg overflow-hidden">
                        <thead className="bg-purple-100">
                          <tr>
                            <th className="py-2 px-4 text-left text-xs font-medium text-purple-800">
                              Exercise
                            </th>
                            <th className="py-2 px-4 text-left text-xs font-medium text-purple-800">
                              Muscles Worked
                            </th>
                            <th className="py-2 px-4 text-left text-xs font-medium text-purple-800">
                              Instructions
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 text-xs">
                          <tr>
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Forearm Plank
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Entire core, shoulders
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Hold plank position on forearms and toes, body
                              straight, 30-60 sec
                            </td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Side Plank
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Obliques, transverse abdominis
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Balance on one forearm and side of foot, lift
                              hips, hold 20-40 sec per side
                            </td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Hollow Hold
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Rectus abdominis, hip flexors
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Lie on back, lift shoulders/legs off ground, hold
                              with lower back pressed down
                            </td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Russian Twist
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Obliques, rectus abdominis
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Sit with knees bent, lean back slightly, rotate
                              torso side to side
                            </td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Leg Raises
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Lower abs, hip flexors
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Lie on back, keep legs straight, raise/lower with
                              control
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Intermediate Tips */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="font-semibold text-purple-800 mb-3">
                        Intermediate Progression Tips
                      </h3>
                      <div className="space-y-4">
                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                          <h4 className="font-medium text-gray-800 mb-1">
                            Add Time Under Tension
                          </h4>
                          <p className="text-xs text-gray-600">
                            Increase plank holds by 5 seconds each session. Slow
                            down movement tempo.
                          </p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                          <h4 className="font-medium text-gray-800 mb-1">
                            Incorporate Instability
                          </h4>
                          <p className="text-xs text-gray-600">
                            Try planks with arms on stability ball or feet on
                            foam roller.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-purple-800 mb-3">
                        Common Intermediate Mistakes
                      </h3>
                      <div className="bg-purple-50 rounded-lg p-4 h-full">
                        <ul className="space-y-3 text-sm">
                          <li className="flex items-start">
                            <span className="bg-purple-100 text-purple-800 rounded-full p-1 mr-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-3 w-3"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                            <span>Sacrificing form for duration in planks</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-purple-100 text-purple-800 rounded-full p-1 mr-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-3 w-3"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                            <span>
                              Using momentum in Russian twists (control
                              rotation)
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-purple-100 text-purple-800 rounded-full p-1 mr-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-3 w-3"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                            <span>
                              Arching back during leg raises (press low back
                              into floor)
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Intermediate Visualization */}
                  <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Intermediate Circuit
                    </h3>
                    <div className="bg-gradient-to-br from-purple-50 to-white rounded-lg p-6 text-center">
                      <div className="grid grid-cols-3 gap-4 text-xs mb-4">
                        <div className="bg-white p-2 rounded border border-purple-100">
                          <div className="bg-purple-100 rounded-full w-8 h-8 mx-auto mb-1 flex items-center justify-center">
                            <BarChart2 className="w-4 h-4 text-purple-600" />
                          </div>
                          <p>Forearm Plank</p>
                          <p className="text-xs text-gray-500">3x45 sec</p>
                        </div>
                        <div className="bg-white p-2 rounded border border-purple-100">
                          <div className="bg-purple-100 rounded-full w-8 h-8 mx-auto mb-1 flex items-center justify-center">
                            <BarChart2 className="w-4 h-4 text-purple-600" />
                          </div>
                          <p>Side Plank</p>
                          <p className="text-xs text-gray-500">3x30 sec/side</p>
                        </div>
                        <div className="bg-white p-2 rounded border border-purple-100">
                          <div className="bg-purple-100 rounded-full w-8 h-8 mx-auto mb-1 flex items-center justify-center">
                            <BarChart2 className="w-4 h-4 text-purple-600" />
                          </div>
                          <p>Hollow Hold</p>
                          <p className="text-xs text-gray-500">3x30 sec</p>
                        </div>
                      </div>
                      <p className="text-xs text-gray-600">
                        Rest 30-45 sec between exercises. Perform 2-3 rounds, 3x
                        per week.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* Advanced Exercises Section */}
            <section
              className="bg-white rounded-xl shadow-md mb-8 overflow-hidden border border-gray-200"
              onClick={() => toggleSection("advanced")}
            >
              <div className="flex justify-between items-center bg-gradient-to-r from-red-50 to-white p-5 cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-red-100 p-2 rounded-lg mr-4">
                    <Award className="w-5 h-5 text-red-600" />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    Advanced Core Exercises
                  </h2>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    expandedSections.advanced ? "rotate-180" : ""
                  }`}
                />
              </div>

              {expandedSections.advanced && (
                <div className="p-5 pt-0">
                  {/* Advanced Exercises */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Challenging Movements
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full bg-white rounded-lg overflow-hidden">
                        <thead className="bg-red-100">
                          <tr>
                            <th className="py-2 px-4 text-left text-xs font-medium text-red-800">
                              Exercise
                            </th>
                            <th className="py-2 px-4 text-left text-xs font-medium text-red-800">
                              Muscles Worked
                            </th>
                            <th className="py-2 px-4 text-left text-xs font-medium text-red-800">
                              Instructions
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 text-xs">
                          <tr>
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Dragon Flag
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Entire core, especially rectus abdominis
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Lie on bench, grip behind head, lift entire body
                              up keeping straight
                            </td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Hanging Leg Raise
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Lower abs, hip flexors, grip strength
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Hang from bar, raise legs to 90° or higher with
                              control
                            </td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Ab Wheel Rollout
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Entire core, shoulders
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Kneel with ab wheel, roll forward while
                              maintaining core tension
                            </td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Front Lever
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Core, lats, shoulders
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Hang from bar, lift body to horizontal position
                            </td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 font-medium text-gray-800">
                              L-Sit
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Core, hip flexors, triceps
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Support on parallel bars or floor, lift legs to
                              90°
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Advanced Tips */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="font-semibold text-red-800 mb-3">
                        Advanced Progression Tips
                      </h3>
                      <div className="space-y-4">
                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                          <h4 className="font-medium text-gray-800 mb-1">
                            Master Progressions
                          </h4>
                          <p className="text-xs text-gray-600">
                            Work through progressions (e.g., tuck lever before
                            full front lever)
                          </p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                          <h4 className="font-medium text-gray-800 mb-1">
                            Eccentric Control
                          </h4>
                          <p className="text-xs text-gray-600">
                            Focus on slow lowering phases (4-6 seconds) to build
                            strength
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-red-800 mb-3">
                        Common Advanced Mistakes
                      </h3>
                      <div className="bg-red-50 rounded-lg p-4 h-full">
                        <ul className="space-y-3 text-sm">
                          <li className="flex items-start">
                            <span className="bg-red-100 text-red-800 rounded-full p-1 mr-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-3 w-3"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                            <span>
                              Using momentum instead of controlled strength
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-red-100 text-red-800 rounded-full p-1 mr-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-3 w-3"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                            <span>
                              Attempting movements without proper warm-up
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-red-100 text-red-800 rounded-full p-1 mr-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-3 w-3"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                            <span>
                              Neglecting mobility work which limits performance
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Advanced Visualization */}
                  <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Advanced Training Protocol
                    </h3>
                    <div className="bg-gradient-to-br from-red-50 to-white rounded-lg p-6 text-center">
                      <div className="grid grid-cols-3 gap-4 text-xs mb-4">
                        <div className="bg-white p-2 rounded border border-red-100">
                          <div className="bg-red-100 rounded-full w-8 h-8 mx-auto mb-1 flex items-center justify-center">
                            <Award className="w-4 h-4 text-red-600" />
                          </div>
                          <p>Hanging Leg Raise</p>
                          <p className="text-xs text-gray-500">4x8-12</p>
                        </div>
                        <div className="bg-white p-2 rounded border border-red-100">
                          <div className="bg-red-100 rounded-full w-8 h-8 mx-auto mb-1 flex items-center justify-center">
                            <Award className="w-4 h-4 text-red-600" />
                          </div>
                          <p>Ab Wheel Rollout</p>
                          <p className="text-xs text-gray-500">4x8-10</p>
                        </div>
                        <div className="bg-white p-2 rounded border border-red-100">
                          <div className="bg-red-100 rounded-full w-8 h-8 mx-auto mb-1 flex items-center justify-center">
                            <Award className="w-4 h-4 text-red-600" />
                          </div>
                          <p>Front Lever Progression</p>
                          <p className="text-xs text-gray-500">4x max hold</p>
                        </div>
                      </div>
                      <p className="text-xs text-gray-600">
                        Rest 60-90 sec between sets. Train 2-3x per week with at
                        least one day of rest between sessions.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* Sample Routines Section */}
            <section
              className="bg-white rounded-xl shadow-md mb-8 overflow-hidden border border-gray-200"
              onClick={() => toggleSection("routines")}
            >
              <div className="flex justify-between items-center bg-gradient-to-r from-teal-50 to-white p-5 cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-teal-100 p-2 rounded-lg mr-4">
                    <Clock className="w-5 h-5 text-teal-600" />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    Sample Core Workout Routines
                  </h2>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    expandedSections.routines ? "rotate-180" : ""
                  }`}
                />
              </div>

              {expandedSections.routines && (
                <div className="p-5 pt-0">
                  {/* Beginner Routine */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Beginner Routine (2-3x/week)
                    </h3>
                    <div className="bg-blue-50 rounded-lg p-5 mb-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white p-3 rounded-lg border border-blue-100">
                          <h4 className="text-sm font-medium text-blue-700 mb-1">
                            Knee Plank
                          </h4>
                          <p className="text-xs text-gray-700">
                            3 sets x 20-30 sec
                          </p>
                        </div>
                        <div className="bg-white p-3 rounded-lg border border-blue-100">
                          <h4 className="text-sm font-medium text-blue-700 mb-1">
                            Dead Bug
                          </h4>
                          <p className="text-xs text-gray-700">
                            3 sets x 8 reps/side
                          </p>
                        </div>
                        <div className="bg-white p-3 rounded-lg border border-blue-100">
                          <h4 className="text-sm font-medium text-blue-700 mb-1">
                            Glute Bridge
                          </h4>
                          <p className="text-xs text-gray-700">
                            3 sets x 12 reps
                          </p>
                        </div>
                      </div>
                      <p className="text-xs text-gray-600 mt-3">
                        Rest 30 sec between exercises. Complete 2-3 rounds.
                      </p>
                    </div>
                  </div>

                  {/* Intermediate Routine */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Intermediate Routine (3x/week)
                    </h3>
                    <div className="bg-purple-50 rounded-lg p-5 mb-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white p-3 rounded-lg border border-purple-100">
                          <h4 className="text-sm font-medium text-purple-700 mb-1">
                            Forearm Plank
                          </h4>
                          <p className="text-xs text-gray-700">
                            3 sets x 45-60 sec
                          </p>
                        </div>
                        <div className="bg-white p-3 rounded-lg border border-purple-100">
                          <h4 className="text-sm font-medium text-purple-700 mb-1">
                            Hanging Knee Raise
                          </h4>
                          <p className="text-xs text-gray-700">
                            3 sets x 10-12 reps
                          </p>
                        </div>
                        <div className="bg-white p-3 rounded-lg border border-purple-100">
                          <h4 className="text-sm font-medium text-purple-700 mb-1">
                            Russian Twist
                          </h4>
                          <p className="text-xs text-gray-700">
                            3 sets x 12/side
                          </p>
                        </div>
                      </div>
                      <p className="text-xs text-gray-600 mt-3">
                        Rest 45 sec between exercises. Complete 3 rounds.
                      </p>
                    </div>
                  </div>

                  {/* Advanced Routine */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Advanced Routine (3-4x/week)
                    </h3>
                    <div className="bg-red-50 rounded-lg p-5 mb-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white p-3 rounded-lg border border-red-100">
                          <h4 className="text-sm font-medium text-red-700 mb-1">
                            Dragon Flag Negatives
                          </h4>
                          <p className="text-xs text-gray-700">
                            4 sets x 5 reps
                          </p>
                        </div>
                        <div className="bg-white p-3 rounded-lg border border-red-100">
                          <h4 className="text-sm font-medium text-red-700 mb-1">
                            Hanging Leg Raise
                          </h4>
                          <p className="text-xs text-gray-700">
                            4 sets x 8-12 reps
                          </p>
                        </div>
                        <div className="bg-white p-3 rounded-lg border border-red-100">
                          <h4 className="text-sm font-medium text-red-700 mb-1">
                            Ab Wheel Rollout
                          </h4>
                          <p className="text-xs text-gray-700">
                            4 sets x 8-10 reps
                          </p>
                        </div>
                      </div>
                      <p className="text-xs text-gray-600 mt-3">
                        Rest 60-90 sec between sets. Superset exercises when
                        possible.
                      </p>
                    </div>
                  </div>

                  {/* Full-Body Integration */}
                  <div className="bg-white border border-gray-200 rounded-lg p-5">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Full-Body Core Integration
                    </h3>
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-1">
                        <div className="flex items-start mb-2">
                          <span className="bg-teal-100 text-teal-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            1
                          </span>
                          <p className="text-sm text-gray-600">
                            Compound lifts (squats, deadlifts) engage core
                            significantly
                          </p>
                        </div>
                        <div className="flex items-start mb-2">
                          <span className="bg-teal-100 text-teal-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            2
                          </span>
                          <p className="text-sm text-gray-600">
                            Unilateral exercises (single-arm presses) challenge
                            core stability
                          </p>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start mb-2">
                          <span className="bg-teal-100 text-teal-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            3
                          </span>
                          <p className="text-sm text-gray-600">
                            Overhead movements require strong core bracing
                          </p>
                        </div>
                        <div className="flex items-start">
                          <span className="bg-teal-100 text-teal-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            4
                          </span>
                          <p className="text-sm text-gray-600">
                            Plyometrics develop explosive core power
                          </p>
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
                Core Training Essentials
              </h2>

              <div className="bg-orange-50 p-5 rounded-lg mb-5">
                <h3 className="text-lg font-semibold text-orange-800 mb-3">
                  Key Principles
                </h3>
                <ol className="space-y-3">
                  {[
                    "Progressive overload - gradually increase difficulty",
                    "Train all movement patterns (flexion, extension, rotation, anti-rotation)",
                    "Quality over quantity - maintain perfect form",
                    "Consistency matters more than intensity",
                    "Combine isolation exercises with functional movements",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="bg-orange-100 text-orange-800 rounded-full p-1 mr-3">
                        <span className="w-5 h-5 flex items-center justify-center text-sm font-medium">
                          {index + 1}
                        </span>
                      </span>
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="bg-teal-50 p-5 rounded-lg">
                <h3 className="text-lg font-semibold text-teal-800 mb-3">
                  Long-Term Core Development
                </h3>
                <p className="text-sm text-gray-700 mb-3">
                  Building a strong core is a long-term investment in your
                  overall health and fitness. While you may see initial
                  improvements in 4-6 weeks, true core strength develops over
                  months and years of consistent training. Remember that visible
                  "six-pack" abs are primarily a result of low body fat
                  percentage, while functional core strength comes from proper
                  training of all the core muscles.
                </p>
                <p className="text-sm text-gray-700">
                  The best core routine is one you'll stick with consistently.
                  Choose exercises appropriate for your level, focus on
                  progressive overload, and be patient with your progress. A
                  strong core will serve you well in all physical activities and
                  help prevent injuries as you age.
                </p>
              </div>
            </section>
            <section
              className="bg-white rounded-xl shadow-md mb-8 overflow-hidden border border-gray-200"
              onClick={() => toggleSection("sports")}
            >
              <div className="flex justify-between items-center bg-gradient-to-r from-green-50 to-white p-5 cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-green-100 p-2 rounded-lg mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-green-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    Sport-Specific Core Training
                  </h2>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    expandedSections.sports ? "rotate-180" : ""
                  }`}
                />
              </div>

              {expandedSections.sports && (
                <div className="p-5 pt-0">
                  {/* Sport-Specific Exercises */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Tailored Core Work for Athletic Performance
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full bg-white rounded-lg overflow-hidden">
                        <thead className="bg-green-100">
                          <tr>
                            <th className="py-2 px-4 text-left text-xs font-medium text-green-800">
                              Sport
                            </th>
                            <th className="py-2 px-4 text-left text-xs font-medium text-green-800">
                              Key Core Demands
                            </th>
                            <th className="py-2 px-4 text-left text-xs font-medium text-green-800">
                              Recommended Exercises
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 text-xs">
                          <tr>
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Running
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Rotation control, pelvic stability
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Pallof press, single-leg glute bridge, standing
                              cable rotations
                            </td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Swimming
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Streamline position, rotational power
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Flutter kick planks, medicine ball rotational
                              throws, hollow rock
                            </td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Golf/Tennis
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Rotational power, anti-rotation
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Cable chops/lifts, landmine rotations, side plank
                              with rotation
                            </td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Basketball
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Multi-directional stability, landing control
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Single-leg deadlifts, medicine ball slams, lateral
                              bounds
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Training Protocols */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="font-semibold text-green-800 mb-3">
                        In-Season vs Off-Season
                      </h3>
                      <div className="space-y-4">
                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                          <h4 className="font-medium text-gray-800 mb-1">
                            Off-Season
                          </h4>
                          <p className="text-xs text-gray-600">
                            Focus on foundational strength: 3-4 sessions/week,
                            heavier loads, longer rest periods
                          </p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                          <h4 className="font-medium text-gray-800 mb-1">
                            In-Season
                          </h4>
                          <p className="text-xs text-gray-600">
                            Maintenance mode: 1-2 sessions/week, bodyweight
                            focus, integrate with sport movements
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-green-800 mb-3">
                        Sport-Specific Circuits
                      </h3>
                      <div className="bg-green-50 rounded-lg p-4 h-full">
                        <ul className="space-y-3 text-sm">
                          <li className="flex items-start">
                            <span className="bg-green-100 text-green-800 rounded-full p-1 mr-2">
                              1
                            </span>
                            <span>
                              Rotational sports: 3 rounds of med ball throws
                              (10/side), cable chops (12/side), side plank (30
                              sec/side)
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-green-100 text-green-800 rounded-full p-1 mr-2">
                              2
                            </span>
                            <span>
                              Endurance sports: 4 rounds of dead bug (30 sec),
                              bird dog (30 sec), plank (60 sec)
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-green-100 text-green-800 rounded-full p-1 mr-2">
                              3
                            </span>
                            <span>
                              Contact sports: 3 rounds of landmine rotations
                              (8/side), hanging leg raises (10), pallof press
                              (30 sec/side)
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-5">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Key Considerations
                    </h3>
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-1">
                        <div className="flex items-start mb-2">
                          <span className="bg-green-100 text-green-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            1
                          </span>
                          <p className="text-sm text-gray-600">
                            Mimic sport-specific movement patterns in core
                            exercises
                          </p>
                        </div>
                        <div className="flex items-start mb-2">
                          <span className="bg-green-100 text-green-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            2
                          </span>
                          <p className="text-sm text-gray-600">
                            Prioritize anti-rotation for rotational sports to
                            prevent overuse injuries
                          </p>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start mb-2">
                          <span className="bg-green-100 text-green-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            3
                          </span>
                          <p className="text-sm text-gray-600">
                            Time core sessions carefully around competition days
                          </p>
                        </div>
                        <div className="flex items-start">
                          <span className="bg-green-100 text-green-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            4
                          </span>
                          <p className="text-sm text-gray-600">
                            Measure progress through sport performance metrics,
                            not just core strength
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </section>
            <section
              className="bg-white rounded-xl shadow-md mb-8 overflow-hidden border border-gray-200"
              onClick={() => toggleSection("injury")}
            >
              <div className="flex justify-between items-center bg-gradient-to-r from-indigo-50 to-white p-5 cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-indigo-100 p-2 rounded-lg mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    Injury Prevention & Rehab
                  </h2>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    expandedSections.injury ? "rotate-180" : ""
                  }`}
                />
              </div>

              {expandedSections.injury && (
                <div className="p-5 pt-0">
                  {/* Common Injuries */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Core-Related Injuries & Prevention
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-indigo-700 mb-2">
                          Lower Back Pain
                        </h4>
                        <p className="text-xs text-gray-600">
                          <span className="font-semibold">Prevention:</span>{" "}
                          Strengthen transverse abdominis, improve hip mobility
                          <br />
                          <span className="font-semibold">Exercises:</span> Dead
                          bug progressions, glute bridges, cat-cow
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-indigo-700 mb-2">
                          Sports Hernia
                        </h4>
                        <p className="text-xs text-gray-600">
                          <span className="font-semibold">Prevention:</span>{" "}
                          Balanced adductor/abdominal strength
                          <br />
                          <span className="font-semibold">Exercises:</span>{" "}
                          Copenhagen plank, resisted hip adduction
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Rehab Protocols */}
                  <div className="bg-indigo-50 rounded-lg p-5 mb-6">
                    <h3 className="font-semibold text-indigo-800 mb-3">
                      Rehabilitation Protocols
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-white p-3 rounded-lg border border-indigo-100">
                        <h4 className="text-sm font-medium text-indigo-700 mb-1">
                          Acute Phase (0-2 weeks)
                        </h4>
                        <p className="text-xs text-gray-700">
                          Isometric holds (plank, dead bug), diaphragmatic
                          breathing, gentle mobility
                        </p>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-indigo-100">
                        <h4 className="text-sm font-medium text-indigo-700 mb-1">
                          Recovery Phase (2-6 weeks)
                        </h4>
                        <p className="text-xs text-gray-700">
                          Light dynamic movements, progressive loading,
                          neuromuscular control
                        </p>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-indigo-100">
                        <h4 className="text-sm font-medium text-indigo-700 mb-1">
                          Functional Phase (6+ weeks)
                        </h4>
                        <p className="text-xs text-gray-700">
                          Sport-specific movements, eccentric loading, power
                          development
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Prevention Exercises */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Essential Preventive Exercises
                    </h3>
                    <div className="space-y-4">
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <div className="flex items-start">
                          <span className="bg-indigo-100 text-indigo-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 text-xs">
                            1
                          </span>
                          <div>
                            <h4 className="font-medium text-gray-800 mb-1">
                              90/90 Breathing
                            </h4>
                            <p className="text-xs text-gray-600">
                              Lie with knees bent 90°, feet on wall. Inhale to
                              expand belly, exhale to engage deep core. 3x10
                              breaths daily.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <div className="flex items-start">
                          <span className="bg-indigo-100 text-indigo-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 text-xs">
                            2
                          </span>
                          <div>
                            <h4 className="font-medium text-gray-800 mb-1">
                              Suitcase Carry
                            </h4>
                            <p className="text-xs text-gray-600">
                              Walk with heavy dumbbell in one hand, maintaining
                              upright posture. 3x30 sec/side.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <div className="flex items-start">
                          <span className="bg-indigo-100 text-indigo-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 text-xs">
                            3
                          </span>
                          <div>
                            <h4 className="font-medium text-gray-800 mb-1">
                              Pallof Press
                            </h4>
                            <p className="text-xs text-gray-600">
                              Resist rotation against cable machine. 3x10/side
                              with 2-sec hold at extension.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </section>
            <section
              className="bg-white rounded-xl shadow-md mb-8 overflow-hidden border border-gray-200"
              onClick={() => toggleSection("equipment")}
            >
              <div className="flex justify-between items-center bg-gradient-to-r from-amber-50 to-white p-5 cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-amber-100 p-2 rounded-lg mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-amber-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    Core Training Equipment
                  </h2>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    expandedSections.equipment ? "rotate-180" : ""
                  }`}
                />
              </div>

              {expandedSections.equipment && (
                <div className="p-5 pt-0">
                  {/* Equipment Types */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Essential Core Training Tools
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-amber-700 mb-2">
                          Ab Wheel ($15-$40)
                        </h4>
                        <p className="text-xs text-gray-600">
                          <span className="font-semibold">Best for:</span>{" "}
                          Progressive overload, anti-extension
                          <br />
                          <span className="font-semibold">Exercises:</span>{" "}
                          Rollouts, knee tucks, standing rollouts
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-amber-700 mb-2">
                          Sliders ($10-$25)
                        </h4>
                        <p className="text-xs text-gray-600">
                          <span className="font-semibold">Best for:</span> Home
                          workouts, instability training
                          <br />
                          <span className="font-semibold">Exercises:</span>{" "}
                          Mountain climbers, knee tucks, pikes
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-amber-700 mb-2">
                          Hanging Straps ($20-$60)
                        </h4>
                        <p className="text-xs text-gray-600">
                          <span className="font-semibold">Best for:</span>{" "}
                          Advanced athletes, full-range movements
                          <br />
                          <span className="font-semibold">Exercises:</span> Leg
                          raises, knee tucks, windshield wipers
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Equipment Comparison */}
                  <div className="bg-amber-50 rounded-lg p-5 mb-6">
                    <h3 className="font-semibold text-amber-800 mb-3">
                      Equipment Comparison
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full bg-white rounded-lg overflow-hidden">
                        <thead className="bg-amber-100">
                          <tr>
                            <th className="py-2 px-4 text-left text-xs font-medium text-amber-800">
                              Equipment
                            </th>
                            <th className="py-2 px-4 text-left text-xs font-medium text-amber-800">
                              Portability
                            </th>
                            <th className="py-2 px-4 text-left text-xs font-medium text-amber-800">
                              Versatility
                            </th>
                            <th className="py-2 px-4 text-left text-xs font-medium text-amber-800">
                              Skill Level
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 text-xs">
                          <tr>
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Resistance Bands
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Excellent
                            </td>
                            <td className="py-3 px-4 text-gray-700">High</td>
                            <td className="py-3 px-4 text-gray-700">
                              All levels
                            </td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Medicine Ball
                            </td>
                            <td className="py-3 px-4 text-gray-700">Good</td>
                            <td className="py-3 px-4 text-gray-700">Medium</td>
                            <td className="py-3 px-4 text-gray-700">
                              Intermediate+
                            </td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Cable Machine
                            </td>
                            <td className="py-3 px-4 text-gray-700">Poor</td>
                            <td className="py-3 px-4 text-gray-700">
                              Excellent
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              All levels
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* DIY Options */}
                  <div className="bg-white border border-gray-200 rounded-lg p-5">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Budget-Friendly Alternatives
                    </h3>
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-1">
                        <div className="flex items-start mb-2">
                          <span className="bg-amber-100 text-amber-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            1
                          </span>
                          <p className="text-sm text-gray-600">
                            Towels can substitute for sliders on hard floors
                          </p>
                        </div>
                        <div className="flex items-start mb-2">
                          <span className="bg-amber-100 text-amber-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            2
                          </span>
                          <p className="text-sm text-gray-600">
                            Backpack with books for weighted core exercises
                          </p>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start mb-2">
                          <span className="bg-amber-100 text-amber-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            3
                          </span>
                          <p className="text-sm text-gray-600">
                            Door anchor for resistance band exercises
                          </p>
                        </div>
                        <div className="flex items-start">
                          <span className="bg-amber-100 text-amber-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            4
                          </span>
                          <p className="text-sm text-gray-600">
                            Broomstick for landmine exercises
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </section>
          </div>

          {/* Sidebar - takes 1/3 width on large screens */}
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
                      Expert reviewed
                    </a>{" "}
                    by{" "}
                    <a
                      href="#"
                      className="text-blue-600 hover:underline font-medium"
                    >
                      Dr. James Wilson, CSCS
                    </a>
                  </p>

                  <p className="text-sm text-gray-600 mb-1">
                    — Written by{" "}
                    <a
                      href="#"
                      className="text-blue-600 hover:underline font-medium"
                    >
                      Sarah Johnson
                    </a>
                  </p>

                  <p className="text-sm text-gray-600 flex items-center gap-1">
                    — <Calendar className="w-3 h-3" />
                    <a href="#" className="text-blue-600 hover:underline">
                      Updated on June 30, 2024
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-teal-50 rounded-lg p-6 mb-8">
              <div className="mb-4">
                <h3 className="text-sm font-bold text-teal-800 uppercase tracking-wide mb-2">
                  FITNESS NEWSLETTER
                </h3>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Get weekly workout tips
                </h4>
                <p className="text-gray-700 text-sm">
                  Receive exercise guides, form tips, and program
                  recommendations straight to your inbox.
                </p>
              </div>

              <form onSubmit={handleEmailSubmit} className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200"
                >
                  SUBSCRIBE
                </button>
              </form>

              <p className="text-xs text-gray-600 mt-3">
                Your{" "}
                <a href="#" className="text-teal-600 hover:underline">
                  privacy
                </a>{" "}
                is important to us
              </p>
            </div>

            {/* Exercise Resources */}
            <div className="bg-white rounded-lg p-6 mb-8 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Exercise Databases
              </h3>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <h4 className="font-medium text-gray-800">
                    Exercise Library
                  </h4>
                  <a
                    href="#"
                    className="text-blue-600 text-sm hover:underline block"
                  >
                    Core Exercise Database
                  </a>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-medium text-gray-800">Form Guides</h4>
                  <a
                    href="#"
                    className="text-blue-600 text-sm hover:underline block"
                  >
                    Proper Technique Videos
                  </a>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-medium text-gray-800">Workout Plans</h4>
                  <a
                    href="#"
                    className="text-blue-600 text-sm hover:underline block"
                  >
                    4-Week Core Program
                  </a>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Research</h4>
                  <a
                    href="#"
                    className="text-blue-600 text-sm hover:underline block"
                  >
                    Core Training Studies
                  </a>
                </div>
              </div>
            </div>

            {/* Educational Resources */}
            <div className="bg-white rounded-lg p-6 mb-8 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Training Resources
              </h3>
              <div className="space-y-3">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h4 className="text-sm font-medium text-blue-700 mb-1">
                    Beginner's Guide
                  </h4>
                  <a
                    href="#"
                    className="text-xs text-blue-600 hover:underline block"
                  >
                    Core Training Fundamentals
                  </a>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <h4 className="text-sm font-medium text-purple-700 mb-1">
                    Form Checklist
                  </h4>
                  <a
                    href="#"
                    className="text-xs text-purple-600 hover:underline block"
                  >
                    Common Mistakes PDF
                  </a>
                </div>
                <div className="bg-teal-50 p-3 rounded-lg">
                  <h4 className="text-sm font-medium text-teal-700 mb-1">
                    Progression Charts
                  </h4>
                  <a
                    href="#"
                    className="text-xs text-teal-600 hover:underline block"
                  >
                    Exercise Difficulty Levels
                  </a>
                </div>
                <div className="bg-amber-50 p-3 rounded-lg">
                  <h4 className="text-sm font-medium text-amber-700 mb-1">
                    Workout Tracker
                  </h4>
                  <a
                    href="#"
                    className="text-xs text-amber-600 hover:underline block"
                  >
                    Printable Template
                  </a>
                </div>
              </div>
            </div>

            {/* Downloadable Resources */}
            <div className="bg-white rounded-lg p-6 mb-8 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Free Guides
              </h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="bg-gray-100 p-1 rounded mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-gray-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <div>
                    <h4 className="text-sm font-medium text-gray-800">
                      Core Anatomy Guide
                    </h4>
                    <a
                      href="#"
                      className="text-xs text-blue-600 hover:underline"
                    >
                      Download PDF
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-gray-100 p-1 rounded mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-gray-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <div>
                    <h4 className="text-sm font-medium text-gray-800">
                      Exercise Progression Chart
                    </h4>
                    <a
                      href="#"
                      className="text-xs text-blue-600 hover:underline"
                    >
                      Download PDF
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-gray-100 p-1 rounded mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-gray-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <div>
                    <h4 className="text-sm font-medium text-gray-800">
                      4-Week Core Program
                    </h4>
                    <a
                      href="#"
                      className="text-xs text-blue-600 hover:underline"
                    >
                      Download PDF
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Advertisement Placeholder */}
            <div className="bg-gray-100 rounded-lg p-6 mb-8">
              <p className="text-center text-gray-500 text-sm mb-4">
                ADVERTISEMENT
              </p>
              <div className="bg-orange-600 rounded-lg p-6 text-white text-center">
                <h4 className="font-bold mb-2">Core Training Journal</h4>
                <p className="text-sm mb-4">
                  Track your core workouts and progress with our specialized log
                </p>
                <button className="bg-white hover:bg-gray-100 text-orange-600 px-4 py-2 rounded text-sm font-medium transition-colors">
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
