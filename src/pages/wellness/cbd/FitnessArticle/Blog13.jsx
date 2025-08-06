"use client";

import { useState } from "react";
import {
  Dumbbell,
  Target,
  BarChart2,
  TrendingUp,
  ChevronDown,
  Calendar,
  User,
  Clipboard,
  HeartPulse,
} from "lucide-react";

export default function FitnessArticle13() {
  const [email, setEmail] = useState("");
  const [activeTab, setActiveTab] = useState("Principles");
  const [expandedSections, setExpandedSections] = useState({
    principles: true,
    implementation: false,
    variations: false,
    tracking: false,
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
    "Principles",
    "Implementation",
    "Exercise Types",
    "Progress Tracking",
    "Common Mistakes",
    "Advanced Techniques",
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
                  <Dumbbell className="w-8 h-8 text-orange-600" />
                </div>
                <div>
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight">
                    Progressive Overload: The Key to Continuous Improvement
                  </h1>
                  <p className="text-lg sm:text-xl text-gray-800 font-medium">
                    Learn to implement progressive overload principles based on
                    your fitness level, goals, exercise type, and individual
                    response patterns for consistent progress
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
                      {tab === "Principles" && (
                        <TrendingUp className="w-4 h-4 mr-1" />
                      )}
                      {tab === "Implementation" && (
                        <Target className="w-4 h-4 mr-1" />
                      )}
                      {tab === "Exercise Types" && (
                        <Dumbbell className="w-4 h-4 mr-1" />
                      )}
                      {tab === "Progress Tracking" && (
                        <BarChart2 className="w-4 h-4 mr-1" />
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
                    Progressive overload is the foundational principle behind
                    all successful strength training and muscle growth programs.
                    By systematically increasing the demands on your
                    musculoskeletal system, you force continuous adaptations
                    that lead to increased strength, muscle size, and
                    performance. This guide breaks down the science-backed
                    methods to implement progressive overload effectively based
                    on your individual needs and goals.
                  </p>
                  <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-400">
                    <p className="text-sm text-orange-800 font-medium">
                      "Properly applied progressive overload can lead to 2-3x
                      greater strength gains compared to non-progressive
                      training." - Journal of Strength and Conditioning Research
                    </p>
                  </div>
                </div>
                <div className="md:w-1/3 bg-gradient-to-br from-orange-50 to-white rounded-lg p-4 flex flex-col items-center justify-center border border-orange-100">
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div className="bg-white p-3 rounded-lg shadow-xs border border-gray-100 flex flex-col items-center">
                      <Dumbbell className="w-6 h-6 text-orange-600 mb-1" />
                      <span className="text-xs text-center">
                        Strength Gains
                      </span>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-xs border border-gray-100 flex flex-col items-center">
                      <Target className="w-6 h-6 text-orange-600 mb-1" />
                      <span className="text-xs text-center">Muscle Growth</span>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-xs border border-gray-100 flex flex-col items-center">
                      <TrendingUp className="w-6 h-6 text-orange-600 mb-1" />
                      <span className="text-xs text-center">Performance</span>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-xs border border-gray-100 flex flex-col items-center">
                      <HeartPulse className="w-6 h-6 text-orange-600 mb-1" />
                      <span className="text-xs text-center">Adaptation</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 text-center">
                    Key benefits of progressive overload training
                  </p>
                </div>
              </div>
            </div>

            {/* Core Principles Section */}
            <section
              className="bg-white rounded-xl shadow-md mb-8 overflow-hidden border border-gray-200"
              onClick={() => toggleSection("principles")}
            >
              <div className="flex justify-between items-center bg-gradient-to-r from-orange-50 to-white p-5 cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-orange-100 p-2 rounded-lg mr-4">
                    <TrendingUp className="w-5 h-5 text-orange-600" />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    Core Principles of Progressive Overload
                  </h2>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    expandedSections.principles ? "rotate-180" : ""
                  }`}
                />
              </div>

              {expandedSections.principles && (
                <div className="p-5 pt-0">
                  {/* Scientific Foundation */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      The Science Behind Progressive Overload
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
                            Physiological Adaptation
                          </h4>
                        </div>
                        <p className="text-sm text-gray-600">
                          Your body adapts to stress by becoming stronger.
                          Progressive overload creates microtrauma in muscle
                          fibers, triggering repair and growth processes that
                          lead to increased strength and size.
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <div className="bg-amber-100 p-1 rounded-full mr-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-4 h-4 text-amber-600"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                            </svg>
                          </div>
                          <h4 className="font-medium text-gray-800">
                            SAID Principle
                          </h4>
                        </div>
                        <p className="text-sm text-gray-600">
                          Specific Adaptation to Imposed Demands (SAID) means
                          your body adapts specifically to the type of stress
                          placed upon it. Progressive overload ensures these
                          adaptations continue over time.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Key Principles */}
                  <div className="bg-orange-50 rounded-lg p-5 mb-4">
                    <h3 className="font-semibold text-orange-800 mb-3">
                      5 Fundamental Principles
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <span className="bg-orange-100 text-orange-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          1
                        </span>
                        <div>
                          <h4 className="text-sm font-medium text-gray-800 mb-1">
                            Gradual Increase
                          </h4>
                          <p className="text-xs text-gray-700">
                            Systematically increase training stress (weight,
                            reps, sets, intensity) to continually challenge your
                            body beyond its current capacity
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-orange-100 text-orange-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          2
                        </span>
                        <div>
                          <h4 className="text-sm font-medium text-gray-800 mb-1">
                            Individualization
                          </h4>
                          <p className="text-xs text-gray-700">
                            Adjust progression rate based on your training age,
                            genetics, recovery capacity, and specific goals
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-orange-100 text-orange-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          3
                        </span>
                        <div>
                          <h4 className="text-sm font-medium text-gray-800 mb-1">
                            Variation
                          </h4>
                          <p className="text-xs text-gray-700">
                            Change the type of overload (weight, tempo, volume)
                            to prevent plateaus and overuse injuries
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-orange-100 text-orange-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          4
                        </span>
                        <div>
                          <h4 className="text-sm font-medium text-gray-800 mb-1">
                            Recovery Balance
                          </h4>
                          <p className="text-xs text-gray-700">
                            Match overload increases with adequate recovery to
                            allow adaptations to occur
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-orange-100 text-orange-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          5
                        </span>
                        <div>
                          <h4 className="text-sm font-medium text-gray-800 mb-1">
                            Specificity
                          </h4>
                          <p className="text-xs text-gray-700">
                            Apply overload in ways that directly support your
                            specific fitness goals (strength, hypertrophy,
                            endurance)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Progression Rates */}
                  <div className="bg-white border border-gray-200 rounded-lg p-5">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Recommended Progression Rates
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full bg-white rounded-lg overflow-hidden">
                        <thead className="bg-orange-100">
                          <tr>
                            <th className="py-2 px-4 text-left text-xs font-medium text-orange-800">
                              Training Level
                            </th>
                            <th className="py-2 px-4 text-left text-xs font-medium text-orange-800">
                              Strength Focus
                            </th>
                            <th className="py-2 px-4 text-left text-xs font-medium text-orange-800">
                              Hypertrophy Focus
                            </th>
                            <th className="py-2 px-4 text-left text-xs font-medium text-orange-800">
                              Endurance Focus
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 text-xs">
                          <tr>
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Beginner (0-6 months)
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              2.5-5kg/week
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              1-2 reps/set weekly
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              5-10% volume weekly
                            </td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Intermediate (6-24 months)
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              1-2.5kg/week
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              0.5-1 rep/set weekly
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              2-5% volume weekly
                            </td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Advanced (2+ years)
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              0.5-1kg/week
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              0.25-0.5 rep/set weekly
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              1-2% volume weekly
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="text-xs text-gray-600 mt-3">
                      Note: These are general guidelines - individual response
                      may vary based on genetics, age, and recovery factors
                    </p>
                  </div>
                </div>
              )}
            </section>

            {/* Implementation Section */}
            <section
              className="bg-white rounded-xl shadow-md mb-8 overflow-hidden border border-gray-200"
              onClick={() => toggleSection("implementation")}
            >
              <div className="flex justify-between items-center bg-gradient-to-r from-amber-50 to-white p-5 cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-amber-100 p-2 rounded-lg mr-4">
                    <Target className="w-5 h-5 text-amber-600" />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    Practical Implementation
                  </h2>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    expandedSections.implementation ? "rotate-180" : ""
                  }`}
                />
              </div>

              {expandedSections.implementation && (
                <div className="p-5 pt-0">
                  {/* Implementation Methods */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      7 Proven Methods to Apply Progressive Overload
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-amber-700 mb-2">
                          1. Increase Weight
                        </h4>
                        <p className="text-xs text-gray-600">
                          The most straightforward method - add small increments
                          of weight (1-5%) while maintaining proper form and
                          target rep ranges.
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-amber-700 mb-2">
                          2. Increase Repetitions
                        </h4>
                        <p className="text-xs text-gray-600">
                          Add 1-2 reps per set while keeping weight constant
                          until you reach the top of your rep range, then
                          increase weight.
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-amber-700 mb-2">
                          3. Increase Sets
                        </h4>
                        <p className="text-xs text-gray-600">
                          Add additional sets to your exercises to increase
                          total volume (e.g., from 3 to 4 sets per exercise).
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-amber-700 mb-2">
                          4. Increase Training Frequency
                        </h4>
                        <p className="text-xs text-gray-600">
                          Train each muscle group more often (e.g., from 2x to
                          3x per week) to increase total weekly volume.
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-amber-700 mb-2">
                          5. Improve Technique
                        </h4>
                        <p className="text-xs text-gray-600">
                          Better form allows you to lift more efficiently,
                          effectively increasing the load on target muscles.
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-amber-700 mb-2">
                          6. Reduce Rest Periods
                        </h4>
                        <p className="text-xs text-gray-600">
                          Decreasing rest between sets increases metabolic
                          stress and training density.
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4 md:col-span-2">
                        <h4 className="font-medium text-amber-700 mb-2">
                          7. Advanced Techniques
                        </h4>
                        <p className="text-xs text-gray-600">
                          Incorporate techniques like drop sets, supersets,
                          eccentric overload, or isometric holds to create new
                          overload stimuli.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Goal-Specific Implementation */}
                  <div className="bg-amber-50 rounded-lg p-5 mb-6">
                    <h3 className="font-semibold text-amber-800 mb-3">
                      Goal-Specific Implementation
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-white p-3 rounded-lg border border-amber-100">
                        <h4 className="text-sm font-medium text-amber-700 mb-1">
                          Strength
                        </h4>
                        <ul className="text-xs text-gray-700 space-y-1">
                          <li>• Focus on weight increases (2-5%)</li>
                          <li>• 3-6 rep range</li>
                          <li>• Longer rest periods (3-5 min)</li>
                        </ul>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-amber-100">
                        <h4 className="text-sm font-medium text-amber-700 mb-1">
                          Hypertrophy
                        </h4>
                        <ul className="text-xs text-gray-700 space-y-1">
                          <li>• Mix weight and rep increases</li>
                          <li>• 6-12 rep range</li>
                          <li>• Moderate rest (60-90 sec)</li>
                        </ul>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-amber-100">
                        <h4 className="text-sm font-medium text-amber-700 mb-1">
                          Endurance
                        </h4>
                        <ul className="text-xs text-gray-700 space-y-1">
                          <li>• Focus on volume increases</li>
                          <li>• 12-20+ rep range</li>
                          <li>• Short rest (30-60 sec)</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Sample Progression Plan */}
                  <div className="bg-white border border-gray-200 rounded-lg p-5">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Sample 4-Week Progression Plan (Bench Press)
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full bg-white rounded-lg overflow-hidden">
                        <thead className="bg-amber-100">
                          <tr>
                            <th className="py-2 px-4 text-left text-xs font-medium text-amber-800">
                              Week
                            </th>
                            <th className="py-2 px-4 text-left text-xs font-medium text-amber-800">
                              Weight
                            </th>
                            <th className="py-2 px-4 text-left text-xs font-medium text-amber-800">
                              Sets x Reps
                            </th>
                            <th className="py-2 px-4 text-left text-xs font-medium text-amber-800">
                              Rest
                            </th>
                            <th className="py-2 px-4 text-left text-xs font-medium text-amber-800">
                              Progression Method
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 text-xs">
                          <tr>
                            <td className="py-3 px-4 font-medium text-gray-800">
                              1
                            </td>
                            <td className="py-3 px-4 text-gray-700">70kg</td>
                            <td className="py-3 px-4 text-gray-700">4x6</td>
                            <td className="py-3 px-4 text-gray-700">3 min</td>
                            <td className="py-3 px-4 text-gray-700">
                              Establish baseline
                            </td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="py-3 px-4 font-medium text-gray-800">
                              2
                            </td>
                            <td className="py-3 px-4 text-gray-700">72.5kg</td>
                            <td className="py-3 px-4 text-gray-700">4x6</td>
                            <td className="py-3 px-4 text-gray-700">3 min</td>
                            <td className="py-3 px-4 text-gray-700">
                              Weight increase (3.5%)
                            </td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 font-medium text-gray-800">
                              3
                            </td>
                            <td className="py-3 px-4 text-gray-700">72.5kg</td>
                            <td className="py-3 px-4 text-gray-700">4x7</td>
                            <td className="py-3 px-4 text-gray-700">3 min</td>
                            <td className="py-3 px-4 text-gray-700">
                              Rep increase
                            </td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="py-3 px-4 font-medium text-gray-800">
                              4
                            </td>
                            <td className="py-3 px-4 text-gray-700">75kg</td>
                            <td className="py-3 px-4 text-gray-700">4x6</td>
                            <td className="py-3 px-4 text-gray-700">3 min</td>
                            <td className="py-3 px-4 text-gray-700">
                              Weight increase (3.5%)
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* Exercise Variations Section */}
            <section
              className="bg-white rounded-xl shadow-md mb-8 overflow-hidden border border-gray-200"
              onClick={() => toggleSection("variations")}
            >
              <div className="flex justify-between items-center bg-gradient-to-r from-red-50 to-white p-5 cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-red-100 p-2 rounded-lg mr-4">
                    <Dumbbell className="w-5 h-5 text-red-600" />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    Exercise-Specific Overload Strategies
                  </h2>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    expandedSections.variations ? "rotate-180" : ""
                  }`}
                />
              </div>

              {expandedSections.variations && (
                <div className="p-5 pt-0">
                  {/* Exercise Types */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Optimal Overload Methods by Exercise Type
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-red-700 mb-2">
                          Compound Lifts (Squat, Bench, Deadlift)
                        </h4>
                        <ul className="text-xs text-gray-600 space-y-1">
                          <li>
                            • Focus on weight progression (1-5kg increments)
                          </li>
                          <li>
                            • Prioritize technique mastery before increasing
                            load
                          </li>
                          <li>• Use microplates for smaller increments</li>
                          <li>• Consider volume accumulation phases</li>
                        </ul>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-red-700 mb-2">
                          Isolation Exercises (Biceps, Triceps)
                        </h4>
                        <ul className="text-xs text-gray-600 space-y-1">
                          <li>• Mix weight and rep progression</li>
                          <li>
                            • Incorporate intensity techniques (dropsets,
                            partials)
                          </li>
                          <li>• Focus on time under tension increases</li>
                          <li>• Use smaller increments (0.5-1kg)</li>
                        </ul>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-red-700 mb-2">
                          Bodyweight Exercises (Pull-ups, Dips)
                        </h4>
                        <ul className="text-xs text-gray-600 space-y-1">
                          <li>• Progress through rep increases first</li>
                          <li>• Add resistance with weight belts/dumbbells</li>
                          <li>
                            • Advance to harder variations (archer, one-arm)
                          </li>
                          <li>• Manipulate tempo and pauses</li>
                        </ul>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-red-700 mb-2">
                          Cardio/Endurance Training
                        </h4>
                        <ul className="text-xs text-gray-600 space-y-1">
                          <li>• Increase duration or distance (5-10% rule)</li>
                          <li>
                            • Increase intensity (speed, incline, resistance)
                          </li>
                          <li>• Decrease rest intervals</li>
                          <li>• Add intervals or hill repeats</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Advanced Techniques */}
                  <div className="bg-red-50 rounded-lg p-5 mb-6">
                    <h3 className="font-semibold text-red-800 mb-3">
                      Advanced Overload Techniques
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-medium text-red-700 mb-1">
                          Eccentric Overload
                        </h4>
                        <p className="text-xs text-gray-700">
                          Focus on slow, controlled lowering phase (3-5 seconds)
                          with heavier weight than concentric phase
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-red-700 mb-1">
                          Cluster Sets
                        </h4>
                        <p className="text-xs text-gray-700">
                          Short rest periods (10-30 sec) between mini-sets to
                          accumulate more volume at higher intensities
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-red-700 mb-1">
                          Accommodating Resistance
                        </h4>
                        <p className="text-xs text-gray-700">
                          Use bands/chains to vary resistance through range of
                          motion
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-red-700 mb-1">
                          Isometric Holds
                        </h4>
                        <p className="text-xs text-gray-700">
                          Pause at sticking points with heavy loads (3-5
                          seconds) to improve strength at specific angles
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Exercise Comparison */}
                  <div className="bg-white border border-gray-200 rounded-lg p-5">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Exercise Progression Examples
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full bg-white rounded-lg overflow-hidden">
                        <thead className="bg-red-100">
                          <tr>
                            <th className="py-2 px-4 text-left text-xs font-medium text-red-800">
                              Exercise
                            </th>
                            <th className="py-2 px-4 text-left text-xs font-medium text-red-800">
                              Beginner
                            </th>
                            <th className="py-2 px-4 text-left text-xs font-medium text-red-800">
                              Intermediate
                            </th>
                            <th className="py-2 px-4 text-left text-xs font-medium text-red-800">
                              Advanced
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 text-xs">
                          <tr>
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Squat
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Bodyweight → Goblet
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Barbell back squat
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Front squat, overhead squat
                            </td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Pull-up
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Band-assisted → Negatives
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Bodyweight pull-ups
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Weighted, one-arm progressions
                            </td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Push-up
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Incline → Knee
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Standard push-up
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Archer, one-arm, plyometric
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}
            </section>
            <section className="bg-white rounded-xl shadow-md mb-8 p-6 border border-gray-200">
              <div className="flex items-center mb-5">
                <div className="bg-red-100 p-2 rounded-lg mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                  Common Progressive Overload Mistakes
                </h2>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-red-600 mb-3 border-b border-red-100 pb-2">
                    Progressing Too Quickly
                  </h3>
                  <ul className="space-y-2 pl-5">
                    <li className="relative before:content-['✗'] before:absolute before:-left-5 before:text-red-500">
                      <span className="font-medium">Problem:</span> Adding
                      weight/reps too fast leads to form breakdown
                    </li>
                    <li className="relative before:content-['✓'] before:absolute before:-left-5 before:text-green-500">
                      <span className="font-medium">Solution:</span> Follow the
                      2-for-2 rule (add weight only after completing 2 extra
                      reps for 2 consecutive workouts)
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-red-600 mb-3 border-b border-red-100 pb-2">
                    Inconsistent Tracking
                  </h3>
                  <ul className="space-y-2 pl-5">
                    <li className="relative before:content-['✗'] before:absolute before:-left-5 before:text-red-500">
                      <span className="font-medium">Problem:</span> Not
                      recording workouts makes progress impossible to measure
                    </li>
                    <li className="relative before:content-['✓'] before:absolute before:-left-5 before:text-green-500">
                      <span className="font-medium">Solution:</span> Use a
                      dedicated workout log (app or notebook) and record every
                      session
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-red-600 mb-3 border-b border-red-100 pb-2">
                    Neglecting Recovery
                  </h3>
                  <ul className="space-y-2 pl-5">
                    <li className="relative before:content-['✗'] before:absolute before:-left-5 before:text-red-500">
                      <span className="font-medium">Problem:</span> Increasing
                      load without adequate recovery leads to overtraining
                    </li>
                    <li className="relative before:content-['✓'] before:absolute before:-left-5 before:text-green-500">
                      <span className="font-medium">Solution:</span> Schedule
                      deload weeks every 4-8 weeks (reduce volume by 30-50%)
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            <section className="bg-white rounded-xl shadow-md mb-8 p-6 border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="bg-indigo-100 p-2 rounded-lg mr-4">
                  <Dumbbell className="w-6 h-6 text-indigo-600" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                  Exercise-Specific Progression Strategies
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Compound Lifts */}
                <div className="bg-indigo-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-indigo-700 mb-3 flex items-center">
                    <span className="bg-white p-1 rounded-full mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-indigo-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    Compound Lifts
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex">
                      <span className="bg-white rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs font-bold">
                        1
                      </span>
                      <span>
                        <span className="font-medium">Squats:</span> Add
                        2.5-5lbs per session (linear progression)
                      </span>
                    </li>
                    <li className="flex">
                      <span className="bg-white rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs font-bold">
                        2
                      </span>
                      <span>
                        <span className="font-medium">Deadlifts:</span> Progress
                        every 2-3 sessions (slower than squats)
                      </span>
                    </li>
                    <li className="flex">
                      <span className="bg-white rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs font-bold">
                        3
                      </span>
                      <span>
                        <span className="font-medium">Bench Press:</span>{" "}
                        Micro-load with 1-2.5lb increases
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Bodyweight Exercises */}
                <div className="bg-amber-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-amber-700 mb-3 flex items-center">
                    <span className="bg-white p-1 rounded-full mr-2">
                      <User className="h-4 w-4 text-amber-600" />
                    </span>
                    Bodyweight Exercises
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex">
                      <span className="bg-white rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs font-bold">
                        1
                      </span>
                      <span>
                        <span className="font-medium">Pushups:</span> Add 1
                        rep/set weekly → progress to archer pushups
                      </span>
                    </li>
                    <li className="flex">
                      <span className="bg-white rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs font-bold">
                        2
                      </span>
                      <span>
                        <span className="font-medium">Pullups:</span> Use bands
                        → negatives → full reps → weighted
                      </span>
                    </li>
                    <li className="flex">
                      <span className="bg-white rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs font-bold">
                        3
                      </span>
                      <span>
                        <span className="font-medium">Pistol Squats:</span>{" "}
                        Start with assisted range → box pistols → full ROM
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Isolation Exercises */}
                <div className="bg-purple-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-700 mb-3 flex items-center">
                    <span className="bg-white p-1 rounded-full mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-purple-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                      </svg>
                    </span>
                    Isolation Exercises
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex">
                      <span className="bg-white rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs font-bold">
                        1
                      </span>
                      <span>
                        <span className="font-medium">Biceps Curls:</span>{" "}
                        Increase reps → add sets → increase weight
                      </span>
                    </li>
                    <li className="flex">
                      <span className="bg-white rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs font-bold">
                        2
                      </span>
                      <span>
                        <span className="font-medium">Triceps Extensions:</span>{" "}
                        Focus on time under tension increases
                      </span>
                    </li>
                    <li className="flex">
                      <span className="bg-white rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs font-bold">
                        3
                      </span>
                      <span>
                        <span className="font-medium">Calf Raises:</span>{" "}
                        Progress through bodyweight → weighted → single-leg
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            <section className="bg-white rounded-xl shadow-md mb-8 p-6 border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 p-2 rounded-lg mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                  Nutrition for Progressive Overload
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                  <h3 className="font-medium text-green-700 mb-2 flex items-center">
                    <span className="bg-white p-1 rounded-full mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-green-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                      </svg>
                    </span>
                    Protein Requirements
                  </h3>
                  <ul className="text-sm space-y-1 pl-5">
                    <li className="relative before:absolute before:-left-3 before:top-2 before:w-1.5 before:h-1.5 before:bg-green-500 before:rounded-full">
                      1.6-2.2g per kg body weight
                    </li>
                    <li className="relative before:absolute before:-left-3 before:top-2 before:w-1.5 before:h-1.5 before:bg-green-500 before:rounded-full">
                      Distribute across 4-5 meals
                    </li>
                    <li className="relative before:absolute before:-left-3 before:top-2 before:w-1.5 before:h-1.5 before:bg-green-500 before:rounded-full">
                      Include leucine-rich sources
                    </li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
                  <h3 className="font-medium text-yellow-700 mb-2 flex items-center">
                    <span className="bg-white p-1 rounded-full mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-yellow-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    Caloric Surplus
                  </h3>
                  <ul className="text-sm space-y-1 pl-5">
                    <li className="relative before:absolute before:-left-3 before:top-2 before:w-1.5 before:h-1.5 before:bg-yellow-500 before:rounded-full">
                      250-500kcal surplus for muscle gain
                    </li>
                    <li className="relative before:absolute before:-left-3 before:top-2 before:w-1.5 before:h-1.5 before:bg-yellow-500 before:rounded-full">
                      Adjust based on weekly progress
                    </li>
                    <li className="relative before:absolute before:-left-3 before:top-2 before:w-1.5 before:h-1.5 before:bg-yellow-500 before:rounded-full">
                      Prioritize nutrient-dense foods
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <h3 className="font-medium text-blue-700 mb-2 flex items-center">
                    <span className="bg-white p-1 rounded-full mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-blue-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    Timing Strategies
                  </h3>
                  <ul className="text-sm space-y-1 pl-5">
                    <li className="relative before:absolute before:-left-3 before:top-2 before:w-1.5 before:h-1.5 before:bg-blue-500 before:rounded-full">
                      Pre-workout: Carbs + protein
                    </li>
                    <li className="relative before:absolute before:-left-3 before:top-2 before:w-1.5 before:h-1.5 before:bg-blue-500 before:rounded-full">
                      Post-workout: Fast protein + carbs
                    </li>
                    <li className="relative before:absolute before:-left-3 before:top-2 before:w-1.5 before:h-1.5 before:bg-blue-500 before:rounded-full">
                      Nighttime: Casein protein
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="font-semibold text-gray-800 mb-3">
                  Supplement Considerations
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
                  <div className="bg-gray-50 p-2 rounded">
                    <div className="bg-white rounded-full w-8 h-8 mx-auto mb-1 flex items-center justify-center text-xs font-bold">
                      1
                    </div>
                    <p className="text-xs font-medium">Creatine</p>
                  </div>
                  <div className="bg-gray-50 p-2 rounded">
                    <div className="bg-white rounded-full w-8 h-8 mx-auto mb-1 flex items-center justify-center text-xs font-bold">
                      2
                    </div>
                    <p className="text-xs font-medium">Whey Protein</p>
                  </div>
                  <div className="bg-gray-50 p-2 rounded">
                    <div className="bg-white rounded-full w-8 h-8 mx-auto mb-1 flex items-center justify-center text-xs font-bold">
                      3
                    </div>
                    <p className="text-xs font-medium">Beta-Alanine</p>
                  </div>
                  <div className="bg-gray-50 p-2 rounded">
                    <div className="bg-white rounded-full w-8 h-8 mx-auto mb-1 flex items-center justify-center text-xs font-bold">
                      4
                    </div>
                    <p className="text-xs font-medium">Caffeine</p>
                  </div>
                </div>
              </div>
            </section>
            <section className="bg-white rounded-xl shadow-md mb-8 p-8 border border-gray-200">
              {/* Header with progress bar visual */}
              <div className="mb-8">
                <div className="flex items-center mb-3">
                  <div className="bg-amber-100 p-2 rounded-lg mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-amber-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    Navigating Fitness Plateaus & Setbacks
                  </h2>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-amber-500 h-2.5 rounded-full"
                    style={{ width: "65%" }}
                  ></div>
                </div>
              </div>

              {/* Content Block 1 */}
              <div className="mb-8 bg-amber-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-amber-800 mb-4">
                  Identifying Plateaus
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2 flex items-center">
                      <span className="bg-white text-amber-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 border border-amber-300">
                        1
                      </span>
                      Common Signs:
                    </h4>
                    <ul className="space-y-2 pl-9">
                      <li className="relative before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-amber-500 before:rounded-full">
                        No strength gains for 4+ weeks despite consistent
                        training
                      </li>
                      <li className="relative before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-amber-500 before:rounded-full">
                        Performance declines in previously manageable workouts
                      </li>
                      <li className="relative before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-amber-500 before:rounded-full">
                        Persistent fatigue that doesn't resolve with rest
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2 flex items-center">
                      <span className="bg-white text-amber-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 border border-amber-300">
                        2
                      </span>
                      Diagnostic Tools:
                    </h4>
                    <ul className="space-y-2 pl-9">
                      <li className="relative before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-amber-500 before:rounded-full">
                        Training logs (compare current performance to 6-8 weeks
                        prior)
                      </li>
                      <li className="relative before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-amber-500 before:rounded-full">
                        Body composition scans (DEXA or skinfold measurements)
                      </li>
                      <li className="relative before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-amber-500 before:rounded-full">
                        Recovery metrics (HRV, resting heart rate trends)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Content Block 2 */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-amber-800 mb-4">
                  Strategies to Break Through
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start p-4 hover:bg-amber-50 rounded-lg transition">
                    <div className="bg-amber-100 text-amber-800 rounded-lg p-3 mr-4 flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">
                        Program Variation
                      </h4>
                      <p className="text-gray-700">
                        After 12-16 weeks of similar training, your body adapts.
                        Work with your trainer to:
                      </p>
                      <ul className="mt-2 space-y-1 text-gray-600 pl-5 list-disc">
                        <li>
                          Change exercise selection (swap barbell squats for
                          Bulgarian split squats)
                        </li>
                        <li>Alter rep ranges (try 5x5 instead of 3x10)</li>
                        <li>
                          Modify tempo (add eccentric focus with 3-second
                          lowers)
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start p-4 hover:bg-amber-50 rounded-lg transition">
                    <div className="bg-amber-100 text-amber-800 rounded-lg p-3 mr-4 flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">
                        Recovery Optimization
                      </h4>
                      <p className="text-gray-700">
                        Plateaus often signal inadequate recovery. Consult your
                        healthcare team to assess:
                      </p>
                      <ul className="mt-2 space-y-1 text-gray-600 pl-5 list-disc">
                        <li>
                          Sleep quality (aim for 7-9 hours with consistent REM
                          cycles)
                        </li>
                        <li>
                          Nutritional deficiencies (common culprits: iron,
                          vitamin D, magnesium)
                        </li>
                        <li>
                          Stress management (cortisol impacts muscle protein
                          synthesis)
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Block 3 */}
              <div className="bg-white border border-amber-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-amber-800 mb-4">
                  When to Seek Help
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h4 className="font-medium text-amber-800 mb-2">
                      From Your Trainer
                    </h4>
                    <p className="text-sm text-gray-700">
                      If technique feels off or you're not feeling targeted
                      muscle engagement after 3+ sessions
                    </p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h4 className="font-medium text-amber-800 mb-2">
                      From Healthcare Providers
                    </h4>
                    <p className="text-sm text-gray-700">
                      When experiencing persistent joint pain, unusual fatigue,
                      or sleep disturbances
                    </p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h4 className="font-medium text-amber-800 mb-2">
                      From Support Network
                    </h4>
                    <p className="text-sm text-gray-700">
                      If motivation wanes for 2+ weeks - accountability partners
                      can help re-engage
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section className="bg-white rounded-xl shadow-md mb-8 p-8 border border-gray-200">
              {/* Header with demographic visualization */}
              <div className="mb-8 flex flex-col md:flex-row items-start md:items-center">
                <div className="bg-blue-100 p-3 rounded-lg mr-6 mb-4 md:mb-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    Age-Appropriate Support Networks
                  </h2>
                  <p className="text-gray-600">
                    Tailoring your fitness community to life stage needs
                  </p>
                </div>
              </div>

              {/* Life Stage Tabs */}
              <div className="mb-8">
                <div className="flex overflow-x-auto pb-2 scrollbar-hide">
                  <div className="flex space-x-2 min-w-max">
                    {["20s-30s", "40s-50s", "60+"].map((age) => (
                      <button
                        key={age}
                        className={`px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-colors flex-shrink-0 ${
                          age === "20s-30s"
                            ? "bg-blue-600 text-white shadow-md"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {age}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* 20s-30s Column */}
                <div className="bg-blue-50 rounded-lg p-5">
                  <h3 className="font-semibold text-blue-800 mb-3 flex items-center">
                    <span className="bg-white text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 border border-blue-300">
                      A
                    </span>
                    20s-30s Priorities
                  </h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start">
                      <span className="bg-white text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                        ✓
                      </span>
                      <span>
                        <strong>Skill Development:</strong> Master fundamental
                        movement patterns with trainers
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-white text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                        ✓
                      </span>
                      <span>
                        <strong>Social Fitness:</strong> Group classes,
                        intramural sports, climbing gym communities
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-white text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                        ✓
                      </span>
                      <span>
                        <strong>Injury Prevention:</strong> Establish proper
                        form before intensity increases
                      </span>
                    </li>
                  </ul>
                </div>

                {/* 40s-50s Column */}
                <div className="bg-purple-50 rounded-lg p-5">
                  <h3 className="font-semibold text-purple-800 mb-3 flex items-center">
                    <span className="bg-white text-purple-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 border border-purple-300">
                      B
                    </span>
                    40s-50s Priorities
                  </h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start">
                      <span className="bg-white text-purple-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                        ✓
                      </span>
                      <span>
                        <strong>Mobility Focus:</strong> Yoga/Pilates
                        instructors, physical therapists
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-white text-purple-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                        ✓
                      </span>
                      <span>
                        <strong>Hormonal Changes:</strong> Women's health
                        specialists, TRT clinics for men
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-white text-purple-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                        ✓
                      </span>
                      <span>
                        <strong>Time Efficiency:</strong> High-intensity
                        interval training with small groups
                      </span>
                    </li>
                  </ul>
                </div>

                {/* 60+ Column */}
                <div className="bg-green-50 rounded-lg p-5">
                  <h3 className="font-semibold text-green-800 mb-3 flex items-center">
                    <span className="bg-white text-green-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 border border-green-300">
                      C
                    </span>
                    60+ Priorities
                  </h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start">
                      <span className="bg-white text-green-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                        ✓
                      </span>
                      <span>
                        <strong>Bone Density:</strong> Certified osteoporosis
                        exercise specialists
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-white text-green-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                        ✓
                      </span>
                      <span>
                        <strong>Balance Training:</strong> Tai chi instructors,
                        fall prevention programs
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-white text-green-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                        ✓
                      </span>
                      <span>
                        <strong>Social Connection:</strong> SilverSneakers
                        classes, walking clubs
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Special Considerations */}
              <div className="bg-white border border-blue-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">
                  Finding Age-Specific Resources
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">
                        Community Centers
                      </h4>
                      <p className="text-gray-700 text-sm">
                        Most offer age-banded fitness programs with peers at
                        similar life stages
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">
                        Professional Associations
                      </h4>
                      <p className="text-gray-700 text-sm">
                        Functional Aging Institute certifies trainers
                        specializing in 50+ fitness
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">
                        Online Communities
                      </h4>
                      <p className="text-gray-700 text-sm">
                        Reddit's r/fitness30plus and Facebook's "Fit Over 50"
                        groups
                      </p>
                    </div>
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
                      Dr. Sarah Chen, Exercise Physiologist
                    </a>
                  </p>

                  <p className="text-sm text-gray-600 mb-1">
                    — Written by{" "}
                    <a
                      href="#"
                      className="text-blue-600 hover:underline font-medium"
                    >
                      Strength Training Research Team
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
            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <div className="mb-4">
                <h3 className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-2">
                  PROGRESSIVE TRAINING INSIGHTS
                </h3>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Get progressive overload strategies
                </h4>
                <p className="text-gray-700 text-sm">
                  Monthly updates on strength training techniques, periodization
                  methods, and evidence-based progression strategies.
                </p>
              </div>

              <form onSubmit={handleEmailSubmit} className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200"
                >
                  SUBSCRIBE
                </button>
              </form>

              <p className="text-xs text-gray-600 mt-3">
                Your{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  privacy
                </a>{" "}
                is important to us
              </p>
            </div>

            {/* Training Resources */}
            <div className="bg-white rounded-lg p-6 mb-8 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Training Resources
              </h3>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <h4 className="font-medium text-gray-800">
                    Progression Methods
                  </h4>
                  <a
                    href="#"
                    className="text-blue-600 text-sm hover:underline block"
                  >
                    NSCA Progression Guidelines
                  </a>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-medium text-gray-800">
                    Research Studies
                  </h4>
                  <a
                    href="#"
                    className="text-blue-600 text-sm hover:underline block"
                  >
                    Journal of Strength & Conditioning
                  </a>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-medium text-gray-800">Periodization</h4>
                  <a
                    href="#"
                    className="text-blue-600 text-sm hover:underline block"
                  >
                    ACSM Periodization Models
                  </a>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Case Studies</h4>
                  <a
                    href="#"
                    className="text-blue-600 text-sm hover:underline block"
                  >
                    Real-world Progression Examples
                  </a>
                </div>
              </div>
            </div>

            {/* Downloadable Resources */}
            <div className="bg-white rounded-lg p-6 mb-8 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Free Training Guides
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
                      Progressive Overload Planner
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
                      Strength Progression Charts
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
                      Individual Response Tracker
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
              <div className="bg-blue-600 rounded-lg p-6 text-white text-center">
                <h4 className="font-bold mb-2">Master Progressive Overload</h4>
                <p className="text-sm mb-4">
                  Our 8-week course teaches you how to systematically increase
                  training stimulus for optimal results
                </p>
                <button className="bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded text-sm font-medium transition-colors">
                  START COURSE
                </button>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
