"use client";

import { useState } from "react";
import {
  Dumbbell,
  HeartPulse,
  Zap,
  Activity,
  ChevronDown,
  Calendar,
  User,
} from "lucide-react";

export default function FitnessArticle5() {
  const [email, setEmail] = useState("");
  const [activeTab, setActiveTab] = useState("Strength");
  const [expandedSections, setExpandedSections] = useState({
    strength: true,
    cardio: false,
    hiit: false,
    flexibility: false,
    recovery: false,
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
    "Strength",
    "Cardio",
    "HIIT",
    "Flexibility",
    "Recovery",
    "Emerging",
    "Program Design",
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
                  <Activity className="w-8 h-8 text-orange-600" />
                </div>
                <div>
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight">
                    Understanding Workout Types: Strength, Cardio, HIIT, and
                    More
                  </h1>
                  <p className="text-lg sm:text-xl text-gray-800 font-medium">
                    Explore comprehensive workout options including strength
                    training, cardiovascular exercise, high-intensity interval
                    training, flexibility work, and emerging fitness methods for
                    optimal health benefits
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
                      {tab === "Strength" && (
                        <Dumbbell className="w-4 h-4 mr-1" />
                      )}
                      {tab === "Cardio" && (
                        <HeartPulse className="w-4 h-4 mr-1" />
                      )}
                      {tab === "HIIT" && <Zap className="w-4 h-4 mr-1" />}
                      {tab}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Fitness Pyramid Visual */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 mb-8">
              <div className="flex flex-col items-center text-center mb-6">
                <h2 className="text-xl font-bold text-gray-800 mb-3">
                  The Fitness Pyramid
                </h2>
                <p className="text-sm text-gray-600 max-w-2xl">
                  A balanced fitness program incorporates multiple modalities to
                  address all aspects of physical health and performance.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {/* Base - Cardio */}
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 text-center">
                  <div className="bg-blue-100 w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-2">
                    <HeartPulse className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="font-medium text-blue-800 mb-1">Cardio</h3>
                  <p className="text-xs text-gray-600">3-5x/week</p>
                </div>

                {/* Strength */}
                <div className="bg-orange-50 p-4 rounded-lg border border-orange-100 text-center">
                  <div className="bg-orange-100 w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-2">
                    <Dumbbell className="w-5 h-5 text-orange-600" />
                  </div>
                  <h3 className="font-medium text-orange-800 mb-1">Strength</h3>
                  <p className="text-xs text-gray-600">2-4x/week</p>
                </div>

                {/* HIIT */}
                <div className="bg-red-50 p-4 rounded-lg border border-red-100 text-center">
                  <div className="bg-red-100 w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-2">
                    <Zap className="w-5 h-5 text-red-600" />
                  </div>
                  <h3 className="font-medium text-red-800 mb-1">HIIT</h3>
                  <p className="text-xs text-gray-600">1-2x/week</p>
                </div>

                {/* Flexibility */}
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-100 text-center">
                  <div className="bg-purple-100 w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-purple-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm11 1H6v8l4-2 4 2V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 className="font-medium text-purple-800 mb-1">
                    Flexibility
                  </h3>
                  <p className="text-xs text-gray-600">Daily</p>
                </div>

                {/* Recovery */}
                <div className="bg-teal-50 p-4 rounded-lg border border-teal-100 text-center">
                  <div className="bg-teal-100 w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-teal-600"
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
                  <h3 className="font-medium text-teal-800 mb-1">Recovery</h3>
                  <p className="text-xs text-gray-600">Daily</p>
                </div>
              </div>
            </div>

            {/* Strength Training Section */}
            <section
              className="bg-white rounded-xl shadow-md mb-8 overflow-hidden border border-gray-200"
              onClick={() => toggleSection("strength")}
            >
              <div className="flex justify-between items-center bg-gradient-to-r from-orange-50 to-white p-5 cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-orange-100 p-2 rounded-lg mr-4">
                    <Dumbbell className="w-5 h-5 text-orange-600" />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    Strength Training
                  </h2>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    expandedSections.strength ? "rotate-180" : ""
                  }`}
                />
              </div>

              {expandedSections.strength && (
                <div className="p-5 pt-0">
                  {/* Strength Basics */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      The Foundation of Fitness
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
                            Benefits
                          </h4>
                        </div>
                        <p className="text-sm text-gray-600">
                          Increases muscle mass, bone density, metabolic rate,
                          and functional capacity while reducing injury risk.
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <div className="bg-orange-100 p-1 rounded-full mr-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-4 h-4 text-orange-600"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                            </svg>
                          </div>
                          <h4 className="font-medium text-gray-800">Methods</h4>
                        </div>
                        <p className="text-sm text-gray-600">
                          Barbell training, dumbbells, resistance machines,
                          bodyweight exercises, kettlebells, and resistance
                          bands.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Strength Programs */}
                  <div className="bg-orange-50 rounded-lg p-5 mb-4">
                    <h3 className="font-semibold text-orange-800 mb-3">
                      Popular Strength Training Protocols
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-white p-3 rounded-lg border border-orange-100">
                        <h4 className="text-sm font-medium text-orange-700 mb-1">
                          5x5 Linear Progression
                        </h4>
                        <p className="text-xs text-gray-700">
                          5 sets of 5 reps with progressive overload
                        </p>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-orange-100">
                        <h4 className="text-sm font-medium text-orange-700 mb-1">
                          German Volume Training
                        </h4>
                        <p className="text-xs text-gray-700">
                          10 sets of 10 reps for hypertrophy
                        </p>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-orange-100">
                        <h4 className="text-sm font-medium text-orange-700 mb-1">
                          Westside Barbell
                        </h4>
                        <p className="text-xs text-gray-700">
                          Max effort and dynamic effort days
                        </p>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-orange-100">
                        <h4 className="text-sm font-medium text-orange-700 mb-1">
                          5/3/1
                        </h4>
                        <p className="text-xs text-gray-700">
                          Wave-loading periodization
                        </p>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-orange-100">
                        <h4 className="text-sm font-medium text-orange-700 mb-1">
                          Bodyweight Progressions
                        </h4>
                        <p className="text-xs text-gray-700">
                          Calisthenics skill development
                        </p>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-orange-100">
                        <h4 className="text-sm font-medium text-orange-700 mb-1">
                          Powerbuilding
                        </h4>
                        <p className="text-xs text-gray-700">
                          Hybrid of powerlifting and bodybuilding
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Strength Science */}
                  <div className="bg-white border border-gray-200 rounded-lg p-5">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Key Strength Training Principles
                    </h3>
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-1">
                        <div className="flex items-start mb-2">
                          <span className="bg-orange-100 text-orange-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            1
                          </span>
                          <p className="text-sm text-gray-600">
                            Progressive Overload: Gradually increase weight,
                            reps, or volume
                          </p>
                        </div>
                        <div className="flex items-start mb-2">
                          <span className="bg-orange-100 text-orange-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            2
                          </span>
                          <p className="text-sm text-gray-600">
                            Specificity: Train movements relevant to your goals
                          </p>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start mb-2">
                          <span className="bg-orange-100 text-orange-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            3
                          </span>
                          <p className="text-sm text-gray-600">
                            Recovery: Muscles grow during rest, not workouts
                          </p>
                        </div>
                        <div className="flex items-start">
                          <span className="bg-orange-100 text-orange-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            4
                          </span>
                          <p className="text-sm text-gray-600">
                            Variation: Change stimulus to prevent plateaus
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* Cardio Section */}
            <section
              className="bg-white rounded-xl shadow-md mb-8 overflow-hidden border border-gray-200"
              onClick={() => toggleSection("cardio")}
            >
              <div className="flex justify-between items-center bg-gradient-to-r from-blue-50 to-white p-5 cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-lg mr-4">
                    <HeartPulse className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    Cardiovascular Exercise
                  </h2>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    expandedSections.cardio ? "rotate-180" : ""
                  }`}
                />
              </div>

              {expandedSections.cardio && (
                <div className="p-5 pt-0">
                  {/* Cardio Types */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Forms of Cardiovascular Training
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full bg-white rounded-lg overflow-hidden">
                        <thead className="bg-blue-100">
                          <tr>
                            <th className="py-2 px-4 text-left text-xs font-medium text-blue-800">
                              Type
                            </th>
                            <th className="py-2 px-4 text-left text-xs font-medium text-blue-800">
                              Intensity
                            </th>
                            <th className="py-2 px-4 text-left text-xs font-medium text-blue-800">
                              Benefits
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 text-xs">
                          <tr>
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Steady-State (LISS)
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Low to moderate (60-70% HRmax)
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Fat burning, endurance, recovery
                            </td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Moderate-Intensity
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              70-80% HRmax
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Aerobic capacity, cardiovascular health
                            </td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 font-medium text-gray-800">
                              High-Intensity (HIIT)
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              85-95% HRmax intervals
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              VO2 max, metabolic rate, time efficiency
                            </td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Fartlek Training
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Variable intensity
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Sport-specific endurance, mental engagement
                            </td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Tempo/Threshold
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              "Comfortably hard" pace
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Lactate threshold improvement
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Cardio Benefits */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="font-semibold text-blue-800 mb-3">
                        Cardiovascular Adaptations
                      </h3>
                      <div className="space-y-4">
                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                          <h4 className="font-medium text-gray-800 mb-1">
                            Heart Changes
                          </h4>
                          <p className="text-xs text-gray-600">
                            Increased stroke volume, lower resting heart rate,
                            improved cardiac output
                          </p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                          <h4 className="font-medium text-gray-800 mb-1">
                            Metabolic Benefits
                          </h4>
                          <p className="text-xs text-gray-600">
                            Improved insulin sensitivity, increased
                            mitochondrial density, better fat oxidation
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-800 mb-3">
                        Cardio Equipment Options
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
                            <span>Treadmill (walking, running, incline)</span>
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
                            <span>Stationary bike (upright, recumbent)</span>
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
                            <span>Elliptical machine (low impact)</span>
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
                            <span>Rowing machine (full-body workout)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Cardio Recommendations */}
                  <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Cardio Programming Guidelines
                    </h3>
                    <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-6 text-center">
                      <div className="grid grid-cols-3 gap-4 text-xs mb-4">
                        <div className="bg-white p-2 rounded border border-blue-100">
                          <div className="bg-blue-100 rounded-full w-8 h-8 mx-auto mb-1 flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-4 h-4 text-blue-600"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p>Frequency</p>
                          <p className="text-xs font-medium">3-5x/week</p>
                        </div>
                        <div className="bg-white p-2 rounded border border-blue-100">
                          <div className="bg-blue-100 rounded-full w-8 h-8 mx-auto mb-1 flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-4 h-4 text-blue-600"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
                            </svg>
                          </div>
                          <p>Duration</p>
                          <p className="text-xs font-medium">20-60 min</p>
                        </div>
                        <div className="bg-white p-2 rounded border border-blue-100">
                          <div className="bg-blue-100 rounded-full w-8 h-8 mx-auto mb-1 flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-4 h-4 text-blue-600"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p>Intensity</p>
                          <p className="text-xs font-medium">60-85% HRmax</p>
                        </div>
                      </div>
                      <p className="text-xs text-gray-600">
                        Adjust based on fitness level and goals (endurance vs
                        fat loss)
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* HIIT Section */}
            <section
              className="bg-white rounded-xl shadow-md mb-8 overflow-hidden border border-gray-200"
              onClick={() => toggleSection("hiit")}
            >
              <div className="flex justify-between items-center bg-gradient-to-r from-red-50 to-white p-5 cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-red-100 p-2 rounded-lg mr-4">
                    <Zap className="w-5 h-5 text-red-600" />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    High-Intensity Interval Training (HIIT)
                  </h2>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    expandedSections.hiit ? "rotate-180" : ""
                  }`}
                />
              </div>

              {expandedSections.hiit && (
                <div className="p-5 pt-0">
                  {/* HIIT Basics */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      The Science of HIIT
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-red-700 mb-2">
                          EPOC Effect
                        </h4>
                        <p className="text-xs text-gray-600">
                          "Afterburn" effect increases calorie burn for 24-48
                          hours post-workout due to oxygen debt repayment
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-red-700 mb-2">
                          Time Efficiency
                        </h4>
                        <p className="text-xs text-gray-600">
                          Achieve similar or greater benefits than steady-state
                          cardio in less time (15-30 min sessions)
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-red-700 mb-2">
                          Metabolic Adaptations
                        </h4>
                        <p className="text-xs text-gray-600">
                          Improves both aerobic and anaerobic capacity
                          simultaneously
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-red-700 mb-2">
                          Hormonal Response
                        </h4>
                        <p className="text-xs text-gray-600">
                          Increases growth hormone and testosterone more than
                          steady-state cardio
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* HIIT Protocols */}
                  <div className="bg-red-50 rounded-lg p-5 mb-6">
                    <h3 className="font-semibold text-red-800 mb-3">
                      Common HIIT Protocols
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-medium text-red-700 mb-1">
                          Tabata
                        </h4>
                        <ul className="text-xs text-gray-700 space-y-1">
                          <li>• 20 sec work / 10 sec rest</li>
                          <li>• 8 rounds (4 min total)</li>
                          <li>• 170% VO2 max intensity</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-red-700 mb-1">
                          Little-Gibala
                        </h4>
                        <ul className="text-xs text-gray-700 space-y-1">
                          <li>• 60 sec work / 75 sec rest</li>
                          <li>• 8-12 rounds</li>
                          <li>• ~90% HRmax</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-red-700 mb-1">
                          Zuniga
                        </h4>
                        <ul className="text-xs text-gray-700 space-y-1">
                          <li>• 30 sec work / 30 sec rest</li>
                          <li>• 10-20 rounds</li>
                          <li>• 100% max effort</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-red-700 mb-1">
                          Wingate
                        </h4>
                        <ul className="text-xs text-gray-700 space-y-1">
                          <li>• 30 sec max effort cycling</li>
                          <li>• 4-6 rounds</li>
                          <li>• 4 min rest between</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* HIIT Exercises */}
                  <div className="bg-white border border-gray-200 rounded-lg p-5">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Effective HIIT Exercises
                    </h3>
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-1">
                        <div className="flex items-start mb-2">
                          <span className="bg-red-100 text-red-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            1
                          </span>
                          <p className="text-sm text-gray-600">
                            Bodyweight: Burpees, jump squats, mountain climbers
                          </p>
                        </div>
                        <div className="flex items-start mb-2">
                          <span className="bg-red-100 text-red-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            2
                          </span>
                          <p className="text-sm text-gray-600">
                            Equipment: Battle ropes, sled pushes, rowing machine
                          </p>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start mb-2">
                          <span className="bg-red-100 text-red-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            3
                          </span>
                          <p className="text-sm text-gray-600">
                            Cycling: Stationary bike sprints
                          </p>
                        </div>
                        <div className="flex items-start">
                          <span className="bg-red-100 text-red-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            4
                          </span>
                          <p className="text-sm text-gray-600">
                            Running: Hill sprints, track intervals
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* Flexibility Section */}
            <section
              className="bg-white rounded-xl shadow-md mb-8 overflow-hidden border border-gray-200"
              onClick={() => toggleSection("flexibility")}
            >
              <div className="flex justify-between items-center bg-gradient-to-r from-purple-50 to-white p-5 cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-purple-100 p-2 rounded-lg mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-purple-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm11 1H6v8l4-2 4 2V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    Flexibility & Mobility
                  </h2>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    expandedSections.flexibility ? "rotate-180" : ""
                  }`}
                />
              </div>

              {expandedSections.flexibility && (
                <div className="p-5 pt-0">
                  {/* Flexibility Types */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Flexibility Training Methods
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-purple-700 mb-2">
                          Static Stretching
                        </h4>
                        <p className="text-xs text-gray-600">
                          Hold stretches for 15-60 seconds to improve passive
                          range of motion
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-purple-700 mb-2">
                          Dynamic Stretching
                        </h4>
                        <p className="text-xs text-gray-600">
                          Movement-based stretches ideal for warm-ups
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-purple-700 mb-2">
                          PNF
                        </h4>
                        <p className="text-xs text-gray-600">
                          Proprioceptive neuromuscular facilitation
                          (contract-relax)
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-purple-700 mb-2">
                          Mobility Drills
                        </h4>
                        <p className="text-xs text-gray-600">
                          Active movements through full ranges of motion
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-purple-700 mb-2">
                          Myofascial Release
                        </h4>
                        <p className="text-xs text-gray-600">
                          Foam rolling and massage techniques
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-purple-700 mb-2">
                          Yoga/Pilates
                        </h4>
                        <p className="text-xs text-gray-600">
                          Structured flexibility and core engagement systems
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Flexibility Benefits */}
                  <div className="bg-purple-50 rounded-lg p-5 mb-6">
                    <h3 className="font-semibold text-purple-800 mb-3">
                      Benefits of Flexibility Training
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
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
                            <span>
                              Reduces injury risk by improving joint range of
                              motion
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
                              Improves posture and movement efficiency
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div>
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
                            <span>Reduces muscle soreness and stiffness</span>
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
                              Enhances performance in strength and speed
                              activities
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Flexibility Routine */}
                  <div className="bg-white border border-gray-200 rounded-lg p-5">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Sample Daily Mobility Routine
                    </h3>
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-1">
                        <div className="flex items-start mb-2">
                          <span className="bg-purple-100 text-purple-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            1
                          </span>
                          <p className="text-sm text-gray-600">
                            Neck circles and tilts (2 min)
                          </p>
                        </div>
                        <div className="flex items-start mb-2">
                          <span className="bg-purple-100 text-purple-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            2
                          </span>
                          <p className="text-sm text-gray-600">
                            Shoulder dislocates with band (10 reps)
                          </p>
                        </div>
                        <div className="flex items-start mb-2">
                          <span className="bg-purple-100 text-purple-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            3
                          </span>
                          <p className="text-sm text-gray-600">
                            Cat-cow stretch (10 reps)
                          </p>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start mb-2">
                          <span className="bg-purple-100 text-purple-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            4
                          </span>
                          <p className="text-sm text-gray-600">
                            90/90 hip stretch (30 sec per side)
                          </p>
                        </div>
                        <div className="flex items-start mb-2">
                          <span className="bg-purple-100 text-purple-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            5
                          </span>
                          <p className="text-sm text-gray-600">
                            Couch stretch (30 sec per leg)
                          </p>
                        </div>
                        <div className="flex items-start">
                          <span className="bg-purple-100 text-purple-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            6
                          </span>
                          <p className="text-sm text-gray-600">
                            Ankle mobility drills (2 min)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* Recovery Section */}
            <section
              className="bg-white rounded-xl shadow-md mb-8 overflow-hidden border border-gray-200"
              onClick={() => toggleSection("recovery")}
            >
              <div className="flex justify-between items-center bg-gradient-to-r from-teal-50 to-white p-5 cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-teal-100 p-2 rounded-lg mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-teal-600"
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
                    Recovery & Regeneration
                  </h2>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    expandedSections.recovery ? "rotate-180" : ""
                  }`}
                />
              </div>

              {expandedSections.recovery && (
                <div className="p-5 pt-0">
                  {/* Recovery Methods */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Essential Recovery Techniques
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-teal-700 mb-2">
                          Sleep Optimization
                        </h4>
                        <p className="text-xs text-gray-600">
                          7-9 hours quality sleep with consistent schedule
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-teal-700 mb-2">
                          Nutrition Timing
                        </h4>
                        <p className="text-xs text-gray-600">
                          Protein and carbs within 30-60 min post-workout
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-teal-700 mb-2">
                          Active Recovery
                        </h4>
                        <p className="text-xs text-gray-600">
                          Light movement on rest days (walking, swimming)
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-teal-700 mb-2">
                          Hydration
                        </h4>
                        <p className="text-xs text-gray-600">
                          0.5-1 oz water per pound bodyweight daily
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-teal-700 mb-2">
                          Cold Therapy
                        </h4>
                        <p className="text-xs text-gray-600">
                          Ice baths or cold showers to reduce inflammation
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-teal-700 mb-2">
                          Compression
                        </h4>
                        <p className="text-xs text-gray-600">
                          Compression garments to improve circulation
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Recovery Science */}
                  <div className="bg-teal-50 rounded-lg p-5 mb-6">
                    <h3 className="font-semibold text-teal-800 mb-3">
                      The Science of Recovery
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-medium text-teal-700 mb-1">
                          Muscle Protein Synthesis
                        </h4>
                        <ul className="text-xs text-gray-700 space-y-1">
                          <li>• Peaks 24-48 hours post-workout</li>
                          <li>• Requires adequate protein intake</li>
                          <li>• Enhanced by sleep and proper nutrition</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-teal-700 mb-1">
                          CNS Recovery
                        </h4>
                        <ul className="text-xs text-gray-700 space-y-1">
                          <li>
                            • Central nervous system needs 48-72h after intense
                            training
                          </li>
                          <li>• Light activity promotes recovery</li>
                          <li>• Meditation and breathing help</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Recovery Tracking */}
                  <div className="bg-white border border-gray-200 rounded-lg p-5">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Recovery Monitoring
                    </h3>
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-1">
                        <div className="flex items-start mb-2">
                          <span className="bg-teal-100 text-teal-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            1
                          </span>
                          <p className="text-sm text-gray-600">
                            Morning resting heart rate (increase may indicate
                            overtraining)
                          </p>
                        </div>
                        <div className="flex items-start mb-2">
                          <span className="bg-teal-100 text-teal-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            2
                          </span>
                          <p className="text-sm text-gray-600">
                            HRV (heart rate variability) tracking
                          </p>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start mb-2">
                          <span className="bg-teal-100 text-teal-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            3
                          </span>
                          <p className="text-sm text-gray-600">
                            Sleep quality and duration monitoring
                          </p>
                        </div>
                        <div className="flex items-start">
                          <span className="bg-teal-100 text-teal-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            4
                          </span>
                          <p className="text-sm text-gray-600">
                            Subjective measures (energy, motivation, soreness)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* Program Design Section */}
            <section className="bg-white rounded-xl shadow-md mb-10 p-6">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                Creating a Balanced Fitness Program
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Sample Programs */}
                <div className="bg-gradient-to-br from-orange-50 to-white rounded-lg p-5 border border-orange-100">
                  <h3 className="font-semibold text-orange-800 mb-3">
                    Sample Weekly Programs
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-white p-3 rounded-lg border border-orange-100">
                      <h4 className="font-medium text-orange-700 mb-1">
                        General Fitness (3-4 days/week)
                      </h4>
                      <ul className="text-xs text-gray-700 space-y-1">
                        <li>• Day 1: Full-body strength</li>
                        <li>• Day 2: 30 min cardio + mobility</li>
                        <li>• Day 3: Upper/lower split strength</li>
                        <li>• Day 4: HIIT + core</li>
                      </ul>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-orange-100">
                      <h4 className="font-medium text-orange-700 mb-1">
                        Strength Focus (4-5 days/week)
                      </h4>
                      <ul className="text-xs text-gray-700 space-y-1">
                        <li>• Day 1: Lower body (squat focus)</li>
                        <li>• Day 2: Upper body (push focus)</li>
                        <li>• Day 3: Active recovery + cardio</li>
                        <li>• Day 4: Lower body (hinge focus)</li>
                        <li>• Day 5: Upper body (pull focus)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Periodization */}
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-5 border border-blue-100">
                  <h3 className="font-semibold text-blue-800 mb-3">
                    Periodization Principles
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-blue-700 mb-1">
                        Macrocycles (3-12 months)
                      </h4>
                      <p className="text-xs text-gray-700">
                        Annual plan with seasonal focus (strength, hypertrophy,
                        endurance)
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-blue-700 mb-1">
                        Mesocycles (4-6 weeks)
                      </h4>
                      <p className="text-xs text-gray-700">
                        Focused training blocks with specific goals
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-blue-700 mb-1">
                        Microcycles (1 week)
                      </h4>
                      <p className="text-xs text-gray-700">
                        Weekly training schedule with planned recovery
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-blue-700 mb-1">
                        Deload Weeks
                      </h4>
                      <p className="text-xs text-gray-700">
                        Every 4-8 weeks reduce volume by 40-60%
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-gradient-to-r from-teal-50 to-white p-5 rounded-lg border border-teal-200">
                <h3 className="font-semibold text-teal-800 mb-3">
                  Exercise Selection Guidelines
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="text-sm font-medium text-teal-700 mb-1">
                      Compound Movements
                    </h4>
                    <p className="text-xs text-gray-600">
                      Squats, deadlifts, presses, pulls (80% of program)
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-teal-700 mb-1">
                      Accessory Work
                    </h4>
                    <p className="text-xs text-gray-600">
                      Isolation exercises for weak points (20% of program)
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-teal-700 mb-1">
                      Movement Patterns
                    </h4>
                    <p className="text-xs text-gray-600">
                      Include push, pull, hinge, squat, carry, and rotation
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Final Takeaways */}
            <section className="bg-white rounded-xl shadow-md mb-10 p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                Key Fitness Principles
              </h2>

              <div className="bg-orange-50 p-5 rounded-lg mb-5">
                <h3 className="text-lg font-semibold text-orange-800 mb-3">
                  Fundamental Truths
                </h3>
                <ol className="space-y-3">
                  {[
                    "Progressive overload is the key driver of adaptation",
                    "Recovery is when improvement happens - not during workouts",
                    "Consistency beats intensity over the long term",
                    "Nutrition supports but doesn't replace training",
                    "The best program is the one you'll stick to consistently",
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

              <div className="bg-blue-50 p-5 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">
                  Getting Started
                </h3>
                <p className="text-sm text-gray-700 mb-3">
                  Begin with 2-3 full-body strength sessions and 2-3 cardio
                  sessions per week, focusing on mastering basic movement
                  patterns. Gradually increase intensity and volume over months,
                  not weeks. Remember that fitness is a lifelong journey -
                  small, sustainable changes create lasting results.
                </p>
                <p className="text-sm text-gray-700">
                  Consult with fitness professionals to tailor programs to your
                  individual needs, goals, and limitations. Track progress
                  through performance metrics, body measurements, and how you
                  feel, not just scale weight.
                </p>
              </div>
            </section>
            {/* Nutrition for Workout Performance Section */}
            <section className="bg-white rounded-xl shadow-md mb-8 p-6 border-2 border-amber-200">
              <div className="flex items-center mb-5">
                <div className="bg-amber-100 p-2 rounded-lg mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-amber-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M5 4a2 2 0 00-2 2v1h14V6a2 2 0 00-2-2H5z" />
                    <path
                      fillRule="evenodd"
                      d="M3 9h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V9zm5 2a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Nutrition for Workout Performance
                </h2>
              </div>

              <div className="bg-amber-50 rounded-lg p-5 mb-4">
                <h3 className="text-lg font-semibold text-amber-800 mb-3">
                  Fueling Your Fitness Journey
                </h3>
                <p className="text-sm text-gray-700 mb-4">
                  Proper nutrition enhances workout performance, recovery, and
                  results. These evidence-based guidelines will help optimize
                  your training:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-amber-700 mb-2 flex items-center">
                      <span className="bg-amber-200 text-amber-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 text-xs">
                        1
                      </span>
                      Pre-Workout Nutrition
                    </h4>
                    <ul className="text-sm text-gray-700 space-y-2 pl-7">
                      <li className="relative before:absolute before:-left-4 before:top-2 before:w-2 before:h-2 before:bg-amber-400 before:rounded-full">
                        Consume 20-40g carbs + 10-20g protein 1-2 hours before
                      </li>
                      <li className="relative before:absolute before:-left-4 before:top-2 before:w-2 before:h-2 before:bg-amber-400 before:rounded-full">
                        Hydrate with 16-20oz water
                      </li>
                      <li className="relative before:absolute before:-left-4 before:top-2 before:w-2 before:h-2 before:bg-amber-400 before:rounded-full">
                        Caffeine (3-6mg/kg) for endurance/strength
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-amber-700 mb-2 flex items-center">
                      <span className="bg-amber-200 text-amber-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 text-xs">
                        2
                      </span>
                      Post-Workout Recovery
                    </h4>
                    <ul className="text-sm text-gray-700 space-y-2 pl-7">
                      <li className="relative before:absolute before:-left-4 before:top-2 before:w-2 before:h-2 before:bg-amber-400 before:rounded-full">
                        0.3-0.5g/kg protein within 2 hours
                      </li>
                      <li className="relative before:absolute before:-left-4 before:top-2 before:w-2 before:h-2 before:bg-amber-400 before:rounded-full">
                        1-1.2g/kg carbs for glycogen replenishment
                      </li>
                      <li className="relative before:absolute before:-left-4 before:top-2 before:w-2 before:h-2 before:bg-amber-400 before:rounded-full">
                                                  Electrolytes for sessions &gt;60 minutes
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-amber-100 rounded-lg p-5">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  Macronutrient Timing Guide
                </h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white rounded-lg overflow-hidden">
                    <thead className="bg-amber-100">
                      <tr>
                        <th className="py-2 px-4 text-left text-xs font-medium text-amber-800">
                          Workout Type
                        </th>
                        <th className="py-2 px-4 text-left text-xs font-medium text-amber-800">
                          Protein (g/kg)
                        </th>
                        <th className="py-2 px-4 text-left text-xs font-medium text-amber-800">
                          Carbs (g/kg)
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-amber-50 text-xs">
                      <tr>
                        <td className="py-3 px-4 font-medium text-gray-800">
                          Strength Training
                        </td>
                        <td className="py-3 px-4 text-gray-700">1.6-2.2</td>
                        <td className="py-3 px-4 text-gray-700">3-5</td>
                      </tr>
                      <tr className="bg-amber-50">
                        <td className="py-3 px-4 font-medium text-gray-800">
                          Endurance
                        </td>
                        <td className="py-3 px-4 text-gray-700">1.2-1.6</td>
                        <td className="py-3 px-4 text-gray-700">5-8</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium text-gray-800">
                          HIIT
                        </td>
                        <td className="py-3 px-4 text-gray-700">1.4-1.8</td>
                        <td className="py-3 px-4 text-gray-700">4-6</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
            {/* Common Workout Mistakes Section */}
            <section className="bg-white rounded-xl shadow-md mb-8 p-6 border-2 border-rose-200">
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                <div className="bg-rose-100 p-3 rounded-lg flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-rose-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-1">
                    Common Workout Mistakes to Avoid
                  </h2>
                  <p className="text-gray-600">
                    Even experienced exercisers make these errors that hinder
                    progress and increase injury risk
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-rose-50 p-4 rounded-lg border-l-4 border-rose-400">
                  <h3 className="font-medium text-rose-800 mb-2">
                    1. Skipping Warm-ups/Cool-downs
                  </h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li className="flex items-start">
                      <span className="text-rose-500 mr-2">•</span>
                      <span>
                        Increases injury risk by 48% (American Journal of Sports
                        Medicine)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-rose-500 mr-2">•</span>
                      <span>
                        Reduces performance by limiting range of motion
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-rose-500 mr-2">•</span>
                      <span>
                        Solution: Dynamic warm-up (5-10 min) + static stretching
                        post-workout
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-rose-50 p-4 rounded-lg border-l-4 border-rose-400">
                  <h3 className="font-medium text-rose-800 mb-2">
                    2. Poor Exercise Form
                  </h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li className="flex items-start">
                      <span className="text-rose-500 mr-2">•</span>
                      <span>
                        Leads to muscle imbalances and joint damage over time
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-rose-500 mr-2">•</span>
                      <span>Reduces effectiveness by 30-40%</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-rose-500 mr-2">•</span>
                      <span>
                        Solution: Film your lifts, work with a coach, start with
                        lighter weights
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-rose-50 p-4 rounded-lg border-l-4 border-rose-400">
                  <h3 className="font-medium text-rose-800 mb-2">
                    3. Overtraining Syndrome
                  </h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li className="flex items-start">
                      <span className="text-rose-500 mr-2">•</span>
                      <span>Affects 60% of serious athletes at some point</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-rose-500 mr-2">•</span>
                      <span>
                        Signs: Fatigue, insomnia, decreased performance,
                        irritability
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-rose-500 mr-2">•</span>
                      <span>
                        Solution: Schedule deload weeks, monitor HRV, prioritize
                        sleep
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-white border border-rose-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-2">Pro Tip:</h3>
                <p className="text-sm text-gray-700">
                  "Track your workouts and how you feel - plateaus often come
                  from repeating the same routine for too long. Change 1-2
                  variables every 4-6 weeks."
                  <span className="block text-rose-600 font-medium mt-1">
                    — Dr. Emily Chen, Sports Physiologist
                  </span>
                </p>
              </div>
            </section>
            {/* Workout Gear Essentials Section */}
            <section className="bg-white rounded-xl shadow-md mb-8 p-6 border-2 border-indigo-200">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  Workout Gear Essentials
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  The right equipment enhances performance, safety, and comfort
                  without breaking the bank
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-indigo-50 p-4 rounded-lg text-center">
                  <div className="bg-white w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-3 shadow-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 className="font-medium text-indigo-800 mb-1">Footwear</h3>
                  <ul className="text-xs text-gray-700 space-y-1">
                    <li>• Running shoes (replace every 300-500 miles)</li>
                    <li>• Cross-trainers for weightlifting</li>
                    <li>• Barefoot shoes for mobility work</li>
                  </ul>
                </div>

                <div className="bg-indigo-50 p-4 rounded-lg text-center">
                  <div className="bg-white w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-3 shadow-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                    </svg>
                  </div>
                  <h3 className="font-medium text-indigo-800 mb-1">
                    Strength Equipment
                  </h3>
                  <ul className="text-xs text-gray-700 space-y-1">
                    <li>• Resistance bands (various tensions)</li>
                    <li>• Weightlifting belt (for heavy lifts)</li>
                    <li>• Gym chalk (improves grip)</li>
                  </ul>
                </div>

                <div className="bg-indigo-50 p-4 rounded-lg text-center">
                  <div className="bg-white w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-3 shadow-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 className="font-medium text-indigo-800 mb-1">
                    Tech & Accessories
                  </h3>
                  <ul className="text-xs text-gray-700 space-y-1">
                    <li>• Heart rate monitor (chest strap most accurate)</li>
                    <li>• Foam roller (for myofascial release)</li>
                    <li>• Moisture-wicking clothing</li>
                  </ul>
                </div>
              </div>

              <div className="bg-indigo-100 rounded-lg p-4">
                <h3 className="font-semibold text-indigo-800 mb-2">
                  Budget-Friendly Alternatives
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                  <div className="bg-white p-3 rounded-lg">
                    <p className="font-medium text-gray-800 mb-1">
                      Instead of dumbbells:
                    </p>
                    <p className="text-gray-700">
                      Use water jugs or backpacks with books
                    </p>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <p className="font-medium text-gray-800 mb-1">
                      Instead of gym membership:
                    </p>
                    <p className="text-gray-700">
                      Bodyweight exercises + park equipment
                    </p>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <p className="font-medium text-gray-800 mb-1">
                      Instead of foam roller:
                    </p>
                    <p className="text-gray-700">
                      Tennis ball + towel for trigger points
                    </p>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <p className="font-medium text-gray-800 mb-1">
                      Instead of fitness tracker:
                    </p>
                    <p className="text-gray-700">
                      Smartphone apps + manual pulse check
                    </p>
                  </div>
                </div>
              </div>
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
                  FITNESS DIGEST NEWSLETTER
                </h3>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Get workout science updates
                </h4>
                <p className="text-gray-700 text-sm">
                  Monthly summaries of new exercise research, program templates,
                  and technique breakdowns.
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

            {/* Workout Resources */}
            <div className="bg-white rounded-lg p-6 mb-8 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Workout Programs
              </h3>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <h4 className="font-medium text-gray-800">Beginner</h4>
                  <a
                    href="#"
                    className="text-blue-600 text-sm hover:underline block"
                  >
                    12-Week Foundation Program
                  </a>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-medium text-gray-800">Intermediate</h4>
                  <a
                    href="#"
                    className="text-blue-600 text-sm hover:underline block"
                  >
                    Strength & Conditioning Hybrid
                  </a>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-medium text-gray-800">Advanced</h4>
                  <a
                    href="#"
                    className="text-blue-600 text-sm hover:underline block"
                  >
                    Periodized Powerbuilding
                  </a>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">
                    Special Populations
                  </h4>
                  <a
                    href="#"
                    className="text-blue-600 text-sm hover:underline block"
                  >
                    Adaptive Exercise Programs
                  </a>
                </div>
              </div>
            </div>

            {/* Exercise Databases */}
            <div className="bg-white rounded-lg p-6 mb-8 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Exercise Libraries
              </h3>
              <div className="space-y-3">
                <div className="bg-orange-50 p-3 rounded-lg">
                  <h4 className="text-sm font-medium text-orange-700 mb-1">
                    Strength Exercises
                  </h4>
                  <a
                    href="#"
                    className="text-xs text-orange-600 hover:underline block"
                  >
                    500+ Weight Training Movements
                  </a>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h4 className="text-sm font-medium text-blue-700 mb-1">
                    Cardio Variations
                  </h4>
                  <a
                    href="#"
                    className="text-xs text-blue-600 hover:underline block"
                  >
                    HIIT and Steady-State Options
                  </a>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <h4 className="text-sm font-medium text-purple-700 mb-1">
                    Mobility Drills
                  </h4>
                  <a
                    href="#"
                    className="text-xs text-purple-600 hover:underline block"
                  >
                    By Body Part and Goal
                  </a>
                </div>
                <div className="bg-teal-50 p-3 rounded-lg">
                  <h4 className="text-sm font-medium text-teal-700 mb-1">
                    Recovery Techniques
                  </h4>
                  <a
                    href="#"
                    className="text-xs text-teal-600 hover:underline block"
                  >
                    Active and Passive Methods
                  </a>
                </div>
              </div>
            </div>

            {/* Downloadable Resources */}
            <div className="bg-white rounded-lg p-6 mb-8 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Free Resources
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
                      Workout Templates
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
                      Exercise Technique Guide
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
                      Mobility Routine PDF
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
                <h4 className="font-bold mb-2">Fitness Progress Tracker</h4>
                <p className="text-sm mb-4">
                  Log workouts, track progress, and get science-based
                  recommendations
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
