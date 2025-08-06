"use client";

import { useState } from "react";
import {
  HeartPulse,
  Dumbbell,
  Brain,
  Clock,
  ChevronDown,
  User,
  Calendar,
  Leaf,

  Activity,
} from "lucide-react";

export default function FitnessArticle11() {
  const [email, setEmail] = useState("");
  const [activeTab, setActiveTab] = useState("Adaptations");
  const [expandedSections, setExpandedSections] = useState({
    adaptations: true,
    cardiovascular: false,
    metabolic: false,
    mental: false,
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
    "Adaptations",
    "Cardiovascular",
    "Metabolic",
    "Neurological",
    "Longevity",
    "FAQs",
    "Key Takeaways",
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
                    The Science Behind Exercise: How It Transforms Your Body
                  </h1>
                  <p className="text-lg sm:text-xl text-gray-800 font-medium">
                    Learn about muscle adaptation, cardiovascular improvements,
                    metabolic changes, and how scientific research supports
                    exercise's impact on physical and mental health
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
                      {tab === "Adaptations" && (
                        <Dumbbell className="w-4 h-4 mr-1" />
                      )}
                      {tab === "Cardiovascular" && (
                        <HeartPulse className="w-4 h-4 mr-1" />
                      )}
                      {tab === "Metabolic" && <Leaf className="w-4 h-4 mr-1" />}
                      {tab === "Neurological" && (
                        <Brain className="w-4 h-4 mr-1" />
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
                    Physical exercise is one of the most potent stimuli for
                    positive physiological adaptation in the human body. Regular
                    physical activity triggers complex biochemical cascades that
                    remodel muscles, strengthen the cardiovascular system,
                    optimize metabolism, and enhance brain function. This
                    article explores the peer-reviewed science behind how
                    exercise transforms your physiology at the cellular and
                    systemic levels.
                  </p>
                  <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-400">
                    <p className="text-sm text-orange-800 font-medium">
                      "Exercise is medicine. Regular physical activity can
                      prevent or treat many chronic diseases and is associated
                      with reduced mortality." - American College of Sports
                      Medicine
                    </p>
                  </div>
                </div>
                <div className="md:w-1/3 bg-gradient-to-br from-orange-50 to-white rounded-lg p-4 flex flex-col items-center justify-center border border-orange-100">
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div className="bg-white p-3 rounded-lg shadow-xs border border-gray-100 flex flex-col items-center">
                      <Dumbbell className="w-6 h-6 text-orange-600 mb-1" />
                      <span className="text-xs text-center">
                        Muscle Hypertrophy
                      </span>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-xs border border-gray-100 flex flex-col items-center">
                      <HeartPulse className="w-6 h-6 text-red-600 mb-1" />
                      <span className="text-xs text-center">
                        Cardiac Output
                      </span>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-xs border border-gray-100 flex flex-col items-center">
                      <Leaf className="w-6 h-6 text-green-600 mb-1" />
                      <span className="text-xs text-center">
                        Metabolic Rate
                      </span>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-xs border border-gray-100 flex flex-col items-center">
                      <Brain className="w-6 h-6 text-blue-600 mb-1" />
                      <span className="text-xs text-center">Neurogenesis</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 text-center">
                    Exercise's multifaceted effects on human physiology
                  </p>
                </div>
              </div>
            </div>

            {/* Muscle Adaptations Section */}
            <section
              className="bg-white rounded-xl shadow-md mb-8 overflow-hidden border border-gray-200"
              onClick={() => toggleSection("adaptations")}
            >
              <div className="flex justify-between items-center bg-gradient-to-r from-orange-50 to-white p-5 cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-orange-100 p-2 rounded-lg mr-4">
                    <Dumbbell className="w-5 h-5 text-orange-600" />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    Muscular Adaptations to Exercise
                  </h2>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    expandedSections.adaptations ? "rotate-180" : ""
                  }`}
                />
              </div>

              {expandedSections.adaptations && (
                <div className="p-5 pt-0">
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Key Muscular Changes
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-orange-700 mb-2">
                          Structural Changes
                        </h4>
                        <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                          <li>Muscle fiber hypertrophy (size increase)</li>
                          <li>Increased myofibrils and contractile proteins</li>
                          <li>Enhanced capillary density (angiogenesis)</li>
                          <li>Greater mitochondrial density</li>
                        </ul>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-orange-700 mb-2">
                          Biochemical Changes
                        </h4>
                        <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                          <li>Increased glycogen storage capacity</li>
                          <li>
                            Enhanced enzyme activity for energy production
                          </li>
                          <li>Improved calcium handling</li>
                          <li>Greater antioxidant defenses</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-orange-50 rounded-lg p-5 mb-6">
                      <h3 className="font-semibold text-orange-800 mb-3">
                        Time Course of Muscle Adaptation
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                        <div className="bg-white p-3 rounded-lg border border-orange-100">
                          <div className="bg-orange-100 rounded-full w-10 h-10 mx-auto mb-2 flex items-center justify-center">
                            <Clock className="w-5 h-5 text-orange-600" />
                          </div>
                          <h4 className="text-xs font-medium text-orange-700 mb-1">
                            0-4 Weeks
                          </h4>
                          <p className="text-xs text-gray-600">
                            Neural adaptations dominate
                          </p>
                        </div>
                        <div className="bg-white p-3 rounded-lg border border-orange-100">
                          <div className="bg-orange-100 rounded-full w-10 h-10 mx-auto mb-2 flex items-center justify-center">
                            <Clock className="w-5 h-5 text-orange-600" />
                          </div>
                          <h4 className="text-xs font-medium text-orange-700 mb-1">
                            4-8 Weeks
                          </h4>
                          <p className="text-xs text-gray-600">
                            Early muscle hypertrophy begins
                          </p>
                        </div>
                        <div className="bg-white p-3 rounded-lg border border-orange-100">
                          <div className="bg-orange-100 rounded-full w-10 h-10 mx-auto mb-2 flex items-center justify-center">
                            <Clock className="w-5 h-5 text-orange-600" />
                          </div>
                          <h4 className="text-xs font-medium text-orange-700 mb-1">
                            8-12 Weeks
                          </h4>
                          <p className="text-xs text-gray-600">
                            Significant strength gains
                          </p>
                        </div>
                        <div className="bg-white p-3 rounded-lg border border-orange-100">
                          <div className="bg-orange-100 rounded-full w-10 h-10 mx-auto mb-2 flex items-center justify-center">
                            <Clock className="w-5 h-5 text-orange-600" />
                          </div>
                          <h4 className="text-xs font-medium text-orange-700 mb-1">
                            12+ Weeks
                          </h4>
                          <p className="text-xs text-gray-600">
                            Advanced structural changes
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold text-orange-800 mb-3">
                          Resistance Training Effects
                        </h3>
                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                          <ul className="space-y-3 text-sm">
                            <li className="flex items-start">
                              <span className="bg-orange-100 text-orange-800 rounded-full p-1 mr-2">
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
                                Activates mTOR pathway for protein synthesis
                              </span>
                            </li>
                            <li className="flex items-start">
                              <span className="bg-orange-100 text-orange-800 rounded-full p-1 mr-2">
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
                                Increases fast-twitch (Type II) fiber size
                              </span>
                            </li>
                            <li className="flex items-start">
                              <span className="bg-orange-100 text-orange-800 rounded-full p-1 mr-2">
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
                                Strengthens connective tissues
                                (tendons/ligaments)
                              </span>
                            </li>
                            <li className="flex items-start">
                              <span className="bg-orange-100 text-orange-800 rounded-full p-1 mr-2">
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
                                Elevates growth hormone and testosterone acutely
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-orange-800 mb-3">
                          Endurance Training Effects
                        </h3>
                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                          <ul className="space-y-3 text-sm">
                            <li className="flex items-start">
                              <span className="bg-orange-100 text-orange-800 rounded-full p-1 mr-2">
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
                                Activates AMPK pathway for mitochondrial
                                biogenesis
                              </span>
                            </li>
                            <li className="flex items-start">
                              <span className="bg-orange-100 text-orange-800 rounded-full p-1 mr-2">
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
                                Increases slow-twitch (Type I) fiber efficiency
                              </span>
                            </li>
                            <li className="flex items-start">
                              <span className="bg-orange-100 text-orange-800 rounded-full p-1 mr-2">
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
                              <span>Enhances fat oxidation capacity</span>
                            </li>
                            <li className="flex items-start">
                              <span className="bg-orange-100 text-orange-800 rounded-full p-1 mr-2">
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
                                Improves lactate threshold and VO2 max
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* Cardiovascular Section */}
            <section
              className="bg-white rounded-xl shadow-md mb-8 overflow-hidden border border-gray-200"
              onClick={() => toggleSection("cardiovascular")}
            >
              <div className="flex justify-between items-center bg-gradient-to-r from-red-50 to-white p-5 cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-red-100 p-2 rounded-lg mr-4">
                    <HeartPulse className="w-5 h-5 text-red-600" />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    Cardiovascular Adaptations
                  </h2>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    expandedSections.cardiovascular ? "rotate-180" : ""
                  }`}
                />
              </div>

              {expandedSections.cardiovascular && (
                <div className="p-5 pt-0">
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Cardiac Remodeling
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-red-700 mb-2">
                          Structural Changes
                        </h4>
                        <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                          <li>Left ventricular hypertrophy (eccentric)</li>
                          <li>Increased chamber volume</li>
                          <li>Enhanced diastolic filling</li>
                          <li>Greater coronary artery diameter</li>
                        </ul>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-red-700 mb-2">
                          Functional Changes
                        </h4>
                        <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                          <li>Increased stroke volume</li>
                          <li>Lower resting heart rate</li>
                          <li>Improved cardiac output</li>
                          <li>Enhanced contractility</li>
                        </ul>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-red-700 mb-2">
                          Vascular Changes
                        </h4>
                        <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                          <li>Improved endothelial function</li>
                          <li>Increased capillary density</li>
                          <li>Enhanced vasodilation capacity</li>
                          <li>Reduced arterial stiffness</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-red-50 rounded-lg p-5 mb-6">
                      <h3 className="font-semibold text-red-800 mb-3">
                        Cardiovascular Benefits Timeline
                      </h3>
                      <div className="overflow-x-auto">
                        <table className="min-w-full bg-white rounded-lg overflow-hidden">
                          <thead className="bg-red-100">
                            <tr>
                              <th className="py-2 px-4 text-left text-xs font-medium text-red-800">
                                Time Frame
                              </th>
                              <th className="py-2 px-4 text-left text-xs font-medium text-red-800">
                                Adaptations
                              </th>
                              <th className="py-2 px-4 text-left text-xs font-medium text-red-800">
                                Clinical Impact
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200 text-xs">
                            <tr>
                              <td className="py-3 px-4 font-medium text-gray-800">
                                1-4 Weeks
                              </td>
                              <td className="py-3 px-4 text-gray-700">
                                Improved endothelial function, plasma volume
                                expansion
                              </td>
                              <td className="py-3 px-4 text-gray-700">
                                Lower blood pressure, better circulation
                              </td>
                            </tr>
                            <tr className="bg-gray-50">
                              <td className="py-3 px-4 font-medium text-gray-800">
                                4-12 Weeks
                              </td>
                              <td className="py-3 px-4 text-gray-700">
                                Cardiac remodeling begins, increased stroke
                                volume
                              </td>
                              <td className="py-3 px-4 text-gray-700">
                                Lower resting HR, improved exercise capacity
                              </td>
                            </tr>
                            <tr>
                              <td className="py-3 px-4 font-medium text-gray-800">
                                3-6 Months
                              </td>
                              <td className="py-3 px-4 text-gray-700">
                                Significant ventricular changes, angiogenesis
                              </td>
                              <td className="py-3 px-4 text-gray-700">
                                Enhanced VO2 max, cardiac efficiency
                              </td>
                            </tr>
                            <tr className="bg-gray-50">
                              <td className="py-3 px-4 font-medium text-gray-800">
                                6+ Months
                              </td>
                              <td className="py-3 px-4 text-gray-700">
                                Advanced structural adaptations
                              </td>
                              <td className="py-3 px-4 text-gray-700">
                                Reduced cardiovascular disease risk
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold text-red-800 mb-3">
                          Aerobic Exercise Effects
                        </h3>
                        <div className="bg-white border border-gray-200 rounded-lg p-4">
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
                                Increases VO2 max by 5-30% depending on baseline
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
                                Reduces systolic BP by 4-9 mmHg in hypertensives
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
                              <span>Improves HDL cholesterol by 3-9 mg/dL</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-red-800 mb-3">
                          HIIT Benefits
                        </h3>
                        <div className="bg-white border border-gray-200 rounded-lg p-4">
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
                                Produces similar cardiovascular benefits in less
                                time
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
                                Enhances both aerobic and anaerobic capacity
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
                                Particularly effective for improving endothelial
                                function
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* Metabolic Section */}
            <section
              className="bg-white rounded-xl shadow-md mb-8 overflow-hidden border border-gray-200"
              onClick={() => toggleSection("metabolic")}
            >
              <div className="flex justify-between items-center bg-gradient-to-r from-green-50 to-white p-5 cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-green-100 p-2 rounded-lg mr-4">
                    <Leaf className="w-5 h-5 text-green-600" />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    Metabolic Adaptations
                  </h2>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    expandedSections.metabolic ? "rotate-180" : ""
                  }`}
                />
              </div>

              {expandedSections.metabolic && (
                <div className="p-5 pt-0">
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Energy System Adaptations
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-green-700 mb-2">
                          Carbohydrate Metabolism
                        </h4>
                        <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                          <li>Increased GLUT4 transporters</li>
                          <li>Enhanced glycogen storage capacity</li>
                          <li>Improved insulin sensitivity</li>
                          <li>Better glucose clearance</li>
                        </ul>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-green-700 mb-2">
                          Fat Metabolism
                        </h4>
                        <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                          <li>Increased mitochondrial density</li>
                          <li>Enhanced lipolytic enzyme activity</li>
                          <li>Greater fat oxidation capacity</li>
                          <li>Improved fatty acid transport</li>
                        </ul>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-green-700 mb-2">
                          Protein Metabolism
                        </h4>
                        <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                          <li>Improved protein synthesis efficiency</li>
                          <li>Reduced protein breakdown</li>
                          <li>Enhanced amino acid utilization</li>
                          <li>Better nitrogen retention</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-green-50 rounded-lg p-5 mb-6">
                      <h3 className="font-semibold text-green-800 mb-3">
                        Exercise and Metabolic Health
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-sm font-medium text-green-700 mb-2">
                            Type 2 Diabetes Prevention
                          </h4>
                          <p className="text-xs text-gray-700 mb-3">
                            Regular exercise reduces diabetes risk by 30-50%
                            through multiple mechanisms including improved
                            insulin sensitivity, glucose disposal, and
                            pancreatic β-cell function.
                          </p>
                          <div className="bg-white p-3 rounded-lg border border-green-100">
                            <p className="text-xs text-green-700 font-medium">
                              "150 minutes/week of moderate exercise reduces
                              diabetes risk by 58% in high-risk individuals." -
                              Diabetes Prevention Program
                            </p>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-green-700 mb-2">
                            Obesity Management
                          </h4>
                          <p className="text-xs text-gray-700 mb-3">
                            Exercise helps regulate appetite hormones (leptin,
                            ghrelin), increases energy expenditure, and
                            preferentially reduces visceral fat even without
                            significant weight loss.
                          </p>
                          <div className="bg-white p-3 rounded-lg border border-green-100">
                            <p className="text-xs text-green-700 font-medium">
                              "Exercise preserves lean mass during weight loss,
                              maintaining metabolic rate." - Obesity Reviews
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold text-green-800 mb-3">
                          EPOC (Afterburn Effect)
                        </h3>
                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                          <ul className="space-y-3 text-sm">
                            <li className="flex items-start">
                              <span className="bg-green-100 text-green-800 rounded-full p-1 mr-2">
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
                                Elevated metabolism post-exercise (4-10% of
                                total calories burned)
                              </span>
                            </li>
                            <li className="flex items-start">
                              <span className="bg-green-100 text-green-800 rounded-full p-1 mr-2">
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
                                Higher intensity = greater EPOC
                                magnitude/duration
                              </span>
                            </li>
                            <li className="flex items-start">
                              <span className="bg-green-100 text-green-800 rounded-full p-1 mr-2">
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
                                Resistance training creates significant EPOC
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-green-800 mb-3">
                          Hormonal Effects
                        </h3>
                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                          <ul className="space-y-3 text-sm">
                            <li className="flex items-start">
                              <span className="bg-green-100 text-green-800 rounded-full p-1 mr-2">
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
                                Increases insulin sensitivity for 2-72 hours
                                post-exercise
                              </span>
                            </li>
                            <li className="flex items-start">
                              <span className="bg-green-100 text-green-800 rounded-full p-1 mr-2">
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
                                Elevates growth hormone (especially with intense
                                exercise)
                              </span>
                            </li>
                            <li className="flex items-start">
                              <span className="bg-green-100 text-green-800 rounded-full p-1 mr-2">
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
                                Modulates appetite-regulating hormones (leptin,
                                ghrelin)
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* Neurological Section */}
            <section
              className="bg-white rounded-xl shadow-md mb-8 overflow-hidden border border-gray-200"
              onClick={() => toggleSection("mental")}
            >
              <div className="flex justify-between items-center bg-gradient-to-r from-blue-50 to-white p-5 cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-lg mr-4">
                    <Brain className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    Neurological & Mental Health Benefits
                  </h2>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    expandedSections.mental ? "rotate-180" : ""
                  }`}
                />
              </div>

              {expandedSections.mental && (
                <div className="p-5 pt-0">
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Brain Structure & Function
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-blue-700 mb-2">
                          Structural Changes
                        </h4>
                        <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                          <li>Increased hippocampal volume (memory)</li>
                          <li>
                            Greater prefrontal cortex thickness (executive
                            function)
                          </li>
                          <li>Enhanced white matter integrity</li>
                          <li>Increased cerebral blood flow</li>
                        </ul>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-blue-700 mb-2">
                          Neurochemical Changes
                        </h4>
                        <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                          <li>
                            Elevated BDNF (brain-derived neurotrophic factor)
                          </li>
                          <li>Increased dopamine and serotonin activity</li>
                          <li>Enhanced endocannabinoid signaling</li>
                          <li>Reduced inflammatory markers</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-blue-50 rounded-lg p-5 mb-6">
                      <h3 className="font-semibold text-blue-800 mb-3">
                        Cognitive Benefits
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white p-3 rounded-lg border border-blue-100">
                          <h4 className="text-sm font-medium text-blue-700 mb-1">
                            Memory
                          </h4>
                          <p className="text-xs text-gray-700">
                            Improves both working and long-term memory
                          </p>
                        </div>
                        <div className="bg-white p-3 rounded-lg border border-blue-100">
                          <h4 className="text-sm font-medium text-blue-700 mb-1">
                            Attention
                          </h4>
                          <p className="text-xs text-gray-700">
                            Enhances focus and reduces distractibility
                          </p>
                        </div>
                        <div className="bg-white p-3 rounded-lg border border-blue-100">
                          <h4 className="text-sm font-medium text-blue-700 mb-1">
                            Processing Speed
                          </h4>
                          <p className="text-xs text-gray-700">
                            Increases information processing efficiency
                          </p>
                        </div>
                        <div className="bg-white p-3 rounded-lg border border-blue-100">
                          <h4 className="text-sm font-medium text-blue-700 mb-1">
                            Executive Function
                          </h4>
                          <p className="text-xs text-gray-700">
                            Better planning, decision-making, impulse control
                          </p>
                        </div>
                        <div className="bg-white p-3 rounded-lg border border-blue-100">
                          <h4 className="text-sm font-medium text-blue-700 mb-1">
                            Creativity
                          </h4>
                          <p className="text-xs text-gray-700">
                            Enhances divergent thinking
                          </p>
                        </div>
                        <div className="bg-white p-3 rounded-lg border border-blue-100">
                          <h4 className="text-sm font-medium text-blue-700 mb-1">
                            Neuroplasticity
                          </h4>
                          <p className="text-xs text-gray-700">
                            Strengthens synaptic connections
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold text-blue-800 mb-3">
                          Mental Health Benefits
                        </h3>
                        <div className="bg-white border border-gray-200 rounded-lg p-4">
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
                                Reduces depression symptoms comparable to
                                antidepressants
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
                                Decreases anxiety through multiple neurochemical
                                pathways
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
                                Improves stress resilience via HPA axis
                                modulation
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
                                May reduce ADHD symptoms through dopamine
                                regulation
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-blue-800 mb-3">
                          Neuroprotective Effects
                        </h3>
                        <div className="bg-white border border-gray-200 rounded-lg p-4">
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
                                Reduces Alzheimer's risk by 30-50% through
                                multiple pathways
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
                                Slows Parkinson's progression via neurotrophic
                                factors
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
                                Enhances recovery from stroke and brain injury
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
                                May delay cognitive decline by 10-15 years
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* Longevity Section */}
            <section className="bg-white rounded-xl shadow-md mb-10 p-6">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                Exercise and Longevity
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Biological Aging */}
                <div className="bg-gradient-to-br from-purple-50 to-white rounded-lg p-5 border border-purple-100">
                  <h3 className="font-semibold text-purple-800 mb-3">
                    Anti-Aging Mechanisms
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
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
                      <span className="text-sm text-gray-700">
                        Preserves telomere length (biological age marker)
                      </span>
                    </div>
                    <div className="flex items-start">
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
                      <span className="text-sm text-gray-700">
                        Enhances autophagy (cellular cleanup process)
                      </span>
                    </div>
                    <div className="flex items-start">
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
                      <span className="text-sm text-gray-700">
                        Reduces systemic inflammation
                      </span>
                    </div>
                    <div className="flex items-start">
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
                      <span className="text-sm text-gray-700">
                        Improves mitochondrial function
                      </span>
                    </div>
                  </div>
                </div>

                {/* Longevity Research */}
                <div className="bg-gradient-to-br from-teal-50 to-white rounded-lg p-5 border border-teal-100">
                  <h3 className="font-semibold text-teal-800 mb-3">
                    Longevity Research Findings
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <span className="bg-teal-100 text-teal-800 rounded-full p-1 mr-2">
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
                      <span className="text-sm text-gray-700">
                        Regular exercisers live 3-7 years longer on average
                      </span>
                    </div>
                    <div className="flex items-start">
                      <span className="bg-teal-100 text-teal-800 rounded-full p-1 mr-2">
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
                      <span className="text-sm text-gray-700">
                        Vigorous exercisers have 22% lower mortality risk
                      </span>
                    </div>
                    <div className="flex items-start">
                      <span className="bg-teal-100 text-teal-800 rounded-full p-1 mr-2">
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
                      <span className="text-sm text-gray-700">
                        Combined aerobic + resistance training most effective
                      </span>
                    </div>
                    <div className="flex items-start">
                      <span className="bg-teal-100 text-teal-800 rounded-full p-1 mr-2">
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
                      <span className="text-sm text-gray-700">
                        Exercise reduces all-cause mortality by 30-35%
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-gradient-to-r from-orange-50 to-white p-5 rounded-lg border border-orange-200">
                <h3 className="font-semibold text-orange-800 mb-3">
                  Optimal Exercise for Longevity
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="text-sm font-medium text-orange-700 mb-1">
                      Aerobic Exercise
                    </h4>
                    <p className="text-xs text-gray-600">
                      150-300 min/week moderate or 75-150 min vigorous
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-orange-700 mb-1">
                      Resistance Training
                    </h4>
                    <p className="text-xs text-gray-600">
                      2-3 sessions/week targeting major muscle groups
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-orange-700 mb-1">
                      Movement Variety
                    </h4>
                    <p className="text-xs text-gray-600">
                      Include balance, flexibility, and functional movements
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Final Takeaways */}
            <section className="bg-white rounded-xl shadow-md mb-10 p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                Key Scientific Takeaways
              </h2>

              <div className="bg-orange-50 p-5 rounded-lg mb-5">
                <h3 className="text-lg font-semibold text-orange-800 mb-3">
                  Core Physiological Adaptations
                </h3>
                <ol className="space-y-3">
                  {[
                    "Exercise induces hundreds of molecular changes that collectively improve nearly all body systems",
                    "Adaptations are specific to the type, intensity, and duration of exercise performed",
                    "Both immediate (acute) and long-term (chronic) effects contribute to health benefits",
                    "The body becomes more efficient at energy production and utilization",
                    "Even modest amounts of exercise provide significant health benefits",
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
                  Practical Applications
                </h3>
                <p className="text-sm text-gray-700 mb-3">
                  The science clearly shows that regular physical activity is
                  one of the most powerful tools for enhancing health and
                  longevity. While optimal exercise programs should be
                  individualized, some universal principles emerge from the
                  research:
                </p>
                <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
                  <li>
                    Consistency matters more than perfection - regular moderate
                    activity beats occasional intense workouts
                  </li>
                  <li>
                    Combining aerobic, resistance, and flexibility training
                    provides comprehensive benefits
                  </li>
                  <li>
                    Even short bouts of activity (10 minutes) accumulate
                    benefits throughout the day
                  </li>
                  <li>
                    Progressive overload (gradually increasing challenge) drives
                    continued adaptation
                  </li>
                  <li>
                    Recovery is essential for allowing adaptations to occur
                  </li>
                </ul>
                <p className="text-sm text-gray-700 mt-3">
                  Perhaps most importantly, the best exercise is the one you'll
                  do consistently. Understanding the profound physiological
                  changes that occur with regular physical activity can serve as
                  powerful motivation to make movement a lifelong habit.
                </p>
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
                      Medically reviewed
                    </a>{" "}
                    by{" "}
                    <a
                      href="#"
                      className="text-blue-600 hover:underline font-medium"
                    >
                      Dr. James Wilson, PhD Exercise Physiology
                    </a>
                  </p>

                  <p className="text-sm text-gray-600 mb-1">
                    — Written by{" "}
                    <a
                      href="#"
                      className="text-blue-600 hover:underline font-medium"
                    >
                      Jack Wellson
                    </a>
                  </p>

                  <p className="text-sm text-gray-600 flex items-center gap-1">
                    — <Calendar className="w-3 h-3" />
                    <a href="#" className="text-blue-600 hover:underline">
                      Updated on July 17, 2024
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-teal-50 rounded-lg p-6 mb-8">
              <div className="mb-4">
                <h3 className="text-sm font-bold text-teal-800 uppercase tracking-wide mb-2">
                  FITNESS SCIENCE NEWSLETTER
                </h3>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Stay updated on exercise research
                </h4>
                <p className="text-gray-700 text-sm">
                  Get monthly summaries of new exercise science, training
                  techniques, and physiology insights.
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

            {/* Research Resources */}
            <div className="bg-white rounded-lg p-6 mb-8 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Exercise Science Resources
              </h3>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <h4 className="font-medium text-gray-800">
                    Professional Organizations
                  </h4>
                  <a
                    href="#"
                    className="text-blue-600 text-sm hover:underline block"
                  >
                    American College of Sports Medicine
                  </a>
                  <a
                    href="#"
                    className="text-blue-600 text-sm hover:underline block"
                  >
                    National Strength and Conditioning Association
                  </a>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-medium text-gray-800">
                    Research Databases
                  </h4>
                  <a
                    href="#"
                    className="text-blue-600 text-sm hover:underline block"
                  >
                    PubMed Exercise Studies
                  </a>
                  <a
                    href="#"
                    className="text-blue-600 text-sm hover:underline block"
                  >
                    Exercise Prescription Guidelines
                  </a>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">
                    Educational Content
                  </h4>
                  <a
                    href="#"
                    className="text-blue-600 text-sm hover:underline block"
                  >
                    Exercise Physiology Textbook
                  </a>
                  <a
                    href="#"
                    className="text-blue-600 text-sm hover:underline block"
                  >
                    Evidence-Based Training Principles
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
