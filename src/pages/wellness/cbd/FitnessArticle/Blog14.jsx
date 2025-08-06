"use client";

import { useState } from "react";
import {
  Dumbbell,
  ShieldAlert,
  HeartPulse,
  Clock,
  ChevronDown,
  User,
  Calendar,
  AlertCircle,
  Activity,
  Thermometer,
} from "lucide-react";

export default function FitnessArticle14() {
  const [email, setEmail] = useState("");
  const [activeTab, setActiveTab] = useState("Fundamentals");
  const [expandedSections, setExpandedSections] = useState({
    fundamentals: true,
    techniques: false,
    warmup: false,
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
    "Fundamentals",
    "Techniques",
    "Warm-up",
    "Recovery",
    "Equipment",
    "Common Mistakes",
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
                  <ShieldAlert className="w-8 h-8 text-orange-600" />
                </div>
                <div>
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight">
                    Injury Prevention: Understanding Form and Safety
                  </h1>
                  <p className="text-lg sm:text-xl text-gray-800 font-medium">
                    Navigate proper exercise technique, warm-up protocols, and
                    safety considerations to prevent injuries and maintain
                    long-term fitness success
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
                      {tab === "Fundamentals" && (
                        <Dumbbell className="w-4 h-4 mr-1" />
                      )}
                      {tab === "Techniques" && (
                        <Activity className="w-4 h-4 mr-1" />
                      )}
                      {tab === "Warm-up" && (
                        <Thermometer className="w-4 h-4 mr-1" />
                      )}
                      {tab === "Recovery" && (
                        <HeartPulse className="w-4 h-4 mr-1" />
                      )}
                      {tab}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Article Introduction */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 mb-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-2/3">
                  <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-4 leading-relaxed">
                    Proper form and safety protocols are the foundation of
                    effective, sustainable fitness. Each year, thousands of
                    gym-related injuries could be prevented through better
                    education on technique, preparation, and body mechanics.
                    This comprehensive guide breaks down the science of injury
                    prevention to help you train smarter and safer.
                  </p>
                  <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-400">
                    <p className="text-sm text-orange-800 font-medium">
                      "Up to 80% of gym injuries result from poor technique or
                      inadequate preparation, not from the weights themselves."
                      - Journal of Sports Medicine, 2023
                    </p>
                  </div>
                </div>
                <div className="md:w-1/3 bg-gradient-to-br from-orange-50 to-white rounded-lg p-4 flex flex-col items-center justify-center border border-orange-100">
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div className="bg-white p-3 rounded-lg shadow-xs border border-gray-100 flex flex-col items-center">
                      <AlertCircle className="w-6 h-6 text-orange-600 mb-1" />
                      <span className="text-xs text-center">
                        Common Injuries
                      </span>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-xs border border-gray-100 flex flex-col items-center">
                      <Dumbbell className="w-6 h-6 text-amber-600 mb-1" />
                      <span className="text-xs text-center">Proper Form</span>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-xs border border-gray-100 flex flex-col items-center">
                      <Thermometer className="w-6 h-6 text-red-600 mb-1" />
                      <span className="text-xs text-center">Warm-up</span>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-xs border border-gray-100 flex flex-col items-center">
                      <HeartPulse className="w-6 h-6 text-emerald-600 mb-1" />
                      <span className="text-xs text-center">Recovery</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 text-center">
                    Key pillars of injury prevention
                  </p>
                </div>
              </div>
            </div>

            {/* Fundamentals Section */}
            <section
              className="bg-white rounded-xl shadow-md mb-8 overflow-hidden border border-gray-200"
              onClick={() => toggleSection("fundamentals")}
            >
              <div className="flex justify-between items-center bg-gradient-to-r from-orange-50 to-white p-5 cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-orange-100 p-2 rounded-lg mr-4">
                    <Dumbbell className="w-5 h-5 text-orange-600" />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    Fundamentals of Injury Prevention
                  </h2>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    expandedSections.fundamentals ? "rotate-180" : ""
                  }`}
                />
              </div>

              {expandedSections.fundamentals && (
                <div className="p-5 pt-0">
                  {/* Biomechanics Basics */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Biomechanics Principles
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
                            Alignment
                          </h4>
                        </div>
                        <p className="text-sm text-gray-600">
                          Maintain neutral spine position during lifts.
                          Misalignment increases injury risk by up to 300% for
                          spinal structures.
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
                            Load Distribution
                          </h4>
                        </div>
                        <p className="text-sm text-gray-600">
                          Distribute weight evenly across joints. Improper
                          loading causes 62% of chronic joint injuries in weight
                          training.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Injury Statistics */}
                  <div className="bg-orange-50 rounded-lg p-5 mb-4">
                    <h3 className="font-semibold text-orange-800 mb-3">
                      Common Gym Injuries by Type
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-white p-3 rounded-lg border border-orange-100">
                        <h4 className="text-sm font-medium text-orange-700 mb-1">
                          Muscle Strains
                        </h4>
                        <p className="text-xs text-gray-700">
                          32% of all gym injuries
                        </p>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-orange-100">
                        <h4 className="text-sm font-medium text-orange-700 mb-1">
                          Tendonitis
                        </h4>
                        <p className="text-xs text-gray-700">
                          24% of chronic cases
                        </p>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-orange-100">
                        <h4 className="text-sm font-medium text-orange-700 mb-1">
                          Joint Sprains
                        </h4>
                        <p className="text-xs text-gray-700">
                          18% of acute injuries
                        </p>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-orange-100">
                        <h4 className="text-sm font-medium text-orange-700 mb-1">
                          Lower Back Pain
                        </h4>
                        <p className="text-xs text-gray-700">
                          28% of weightlifters
                        </p>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-orange-100">
                        <h4 className="text-sm font-medium text-orange-700 mb-1">
                          Rotator Cuff
                        </h4>
                        <p className="text-xs text-gray-700">
                          15% of upper body
                        </p>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-orange-100">
                        <h4 className="text-sm font-medium text-orange-700 mb-1">
                          Knee Injuries
                        </h4>
                        <p className="text-xs text-gray-700">
                          22% of leg training
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Prevention Pyramid */}
                  <div className="bg-white border border-gray-200 rounded-lg p-5">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Injury Prevention Pyramid
                    </h3>
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-1">
                        <div className="flex items-start mb-2">
                          <span className="bg-orange-100 text-orange-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            1
                          </span>
                          <p className="text-sm text-gray-600">
                            <strong>Base:</strong> Proper technique and form
                            (accounts for 60% of prevention)
                          </p>
                        </div>
                        <div className="flex items-start mb-2">
                          <span className="bg-orange-100 text-orange-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            2
                          </span>
                          <p className="text-sm text-gray-600">
                            <strong>Middle:</strong> Progressive overload and
                            programming (25% of prevention)
                          </p>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start mb-2">
                          <span className="bg-orange-100 text-orange-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            3
                          </span>
                          <p className="text-sm text-gray-600">
                            <strong>Top:</strong> Recovery and mobility work
                            (15% of prevention)
                          </p>
                        </div>
                        <div className="flex items-start">
                          <span className="bg-orange-100 text-orange-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            !
                          </span>
                          <p className="text-sm text-gray-600">
                            <strong>Foundation:</strong> All levels require
                            proper warm-up and cooldown
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* Technique Section */}
            <section
              className="bg-white rounded-xl shadow-md mb-8 overflow-hidden border border-gray-200"
              onClick={() => toggleSection("techniques")}
            >
              <div className="flex justify-between items-center bg-gradient-to-r from-blue-50 to-white p-5 cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-lg mr-4">
                    <Activity className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    Exercise Technique Mastery
                  </h2>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    expandedSections.techniques ? "rotate-180" : ""
                  }`}
                />
              </div>

              {expandedSections.techniques && (
                <div className="p-5 pt-0">
                  {/* Compound Lifts */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Key Exercises Breakdown
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full bg-white rounded-lg overflow-hidden">
                        <thead className="bg-blue-100">
                          <tr>
                            <th className="py-2 px-4 text-left text-xs font-medium text-blue-800">
                              Exercise
                            </th>
                            <th className="py-2 px-4 text-left text-xs font-medium text-blue-800">
                              Common Mistakes
                            </th>
                            <th className="py-2 px-4 text-left text-xs font-medium text-blue-800">
                              Proper Form Cues
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 text-xs">
                          <tr>
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Squat
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Knee valgus, excessive forward lean, depth issues
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              "Screw feet" into floor, brace core, maintain
                              neutral spine
                            </td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Deadlift
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Rounded back, hyperextension at top, bar path
                              drift
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Hips and shoulders rise together, bar stays close
                              to legs
                            </td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Bench Press
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Flared elbows, unstable shoulder position,
                              bouncing
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              45° elbow angle, retract scapula, controlled
                              descent
                            </td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Overhead Press
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Excessive arch, forward head, uneven lockout
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Brace core, keep ribs down, bar travels in
                              straight line
                            </td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Pull-up
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Partial range, kipping, shoulder elevation
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Full extension at bottom, chest to bar at top
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Form Principles */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="font-semibold text-blue-800 mb-3">
                        Universal Form Principles
                      </h3>
                      <div className="space-y-4">
                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                          <h4 className="font-medium text-gray-800 mb-1">
                            Bracing Sequence
                          </h4>
                          <p className="text-xs text-gray-600">
                            Diaphragmatic breath → abdominal contraction →
                            pelvic floor engagement → spinal erector activation
                          </p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                          <h4 className="font-medium text-gray-800 mb-1">
                            Joint Stacking
                          </h4>
                          <p className="text-xs text-gray-600">
                            Maintain vertical alignment of joints under load
                            (e.g., knees over ankles in squat)
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-800 mb-3">
                        Progressive Overload Safely
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
                              Increase weight only when current load is mastered
                              (5% rule)
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
                              Follow 2-for-2 rule: If you can do 2 extra reps
                              for 2 consecutive sessions, increase weight
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
                              Never sacrifice form for weight - ego lifting
                              causes 38% of acute injuries
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Exercise Modifications */}
                  <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Exercise Modifications for Injury Prevention
                    </h3>
                    <div className="grid grid-cols-3 gap-4 text-xs mb-4">
                      <div className="bg-white p-2 rounded border border-blue-100">
                        <div className="bg-blue-100 rounded-full w-8 h-8 mx-auto mb-1 flex items-center justify-center">
                          <Dumbbell className="w-4 h-4 text-blue-600" />
                        </div>
                        <p>Landmine press instead of overhead press</p>
                      </div>
                      <div className="bg-white p-2 rounded border border-blue-100">
                        <div className="bg-blue-100 rounded-full w-8 h-8 mx-auto mb-1 flex items-center justify-center">
                          <Dumbbell className="w-4 h-4 text-blue-600" />
                        </div>
                        <p>Trap bar deadlift instead of conventional</p>
                      </div>
                      <div className="bg-white p-2 rounded border border-blue-100">
                        <div className="bg-blue-100 rounded-full w-8 h-8 mx-auto mb-1 flex items-center justify-center">
                          <Dumbbell className="w-4 h-4 text-blue-600" />
                        </div>
                        <p>Neutral grip pull-ups instead of pronated</p>
                      </div>
                      <div className="bg-white p-2 rounded border border-blue-100">
                        <div className="bg-blue-100 rounded-full w-8 h-8 mx-auto mb-1 flex items-center justify-center">
                          <Dumbbell className="w-4 h-4 text-blue-600" />
                        </div>
                        <p>Front squat instead of back squat</p>
                      </div>
                      <div className="bg-white p-2 rounded border border-blue-100">
                        <div className="bg-blue-100 rounded-full w-8 h-8 mx-auto mb-1 flex items-center justify-center">
                          <Dumbbell className="w-4 h-4 text-blue-600" />
                        </div>
                        <p>Incline bench instead of flat bench</p>
                      </div>
                      <div className="bg-white p-2 rounded border border-blue-100">
                        <div className="bg-blue-100 rounded-full w-8 h-8 mx-auto mb-1 flex items-center justify-center">
                          <Dumbbell className="w-4 h-4 text-blue-600" />
                        </div>
                        <p>Step-ups instead of lunges</p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-600 text-center">
                      These variations reduce joint stress while maintaining
                      effectiveness
                    </p>
                  </div>
                </div>
              )}
            </section>

            {/* Warm-up Section */}
            <section
              className="bg-white rounded-xl shadow-md mb-8 overflow-hidden border border-gray-200"
              onClick={() => toggleSection("warmup")}
            >
              <div className="flex justify-between items-center bg-gradient-to-r from-red-50 to-white p-5 cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-red-100 p-2 rounded-lg mr-4">
                    <Thermometer className="w-5 h-5 text-red-600" />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    Comprehensive Warm-up Protocols
                  </h2>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    expandedSections.warmup ? "rotate-180" : ""
                  }`}
                />
              </div>

              {expandedSections.warmup && (
                <div className="p-5 pt-0">
                  {/* Warm-up Components */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      5-Phase Warm-up System
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-red-700 mb-2">
                          1. General Warm-up
                        </h4>
                        <p className="text-xs text-gray-600">
                          5-10 min light cardio (RPE 3-4) to increase core temp
                          by 1-2°C
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-red-700 mb-2">
                          2. Mobility
                        </h4>
                        <p className="text-xs text-gray-600">
                          Dynamic stretches targeting workout-specific joints
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-red-700 mb-2">
                          3. Activation
                        </h4>
                        <p className="text-xs text-gray-600">
                          Light resistance exercises for prime movers (band
                          work, bodyweight)
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-red-700 mb-2">
                          4. Potentiation
                        </h4>
                        <p className="text-xs text-gray-600">
                          Explosive movements to prime nervous system (jumps,
                          throws)
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-red-700 mb-2">
                          5. Ramp-up Sets
                        </h4>
                        <p className="text-xs text-gray-600">
                          Gradual weight increase to working sets (40%, 60%, 80%
                          of working weight)
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Warm-up Benefits */}
                  <div className="bg-red-50 rounded-lg p-5 mb-6">
                    <h3 className="font-semibold text-red-800 mb-3">
                      Scientific Benefits of Proper Warm-up
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-medium text-red-700 mb-1">
                          Physiological Effects
                        </h4>
                        <ul className="text-xs text-gray-700 space-y-1">
                          <li>
                            • Increases muscle temperature by 1-3°C (↑
                            elasticity)
                          </li>
                          <li>• Reduces joint viscosity by up to 20%</li>
                          <li>• Improves oxygen delivery to muscles</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-red-700 mb-1">
                          Performance Effects
                        </h4>
                        <ul className="text-xs text-gray-700 space-y-1">
                          <li>• Enhances force production by 3-10%</li>
                          <li>• Reduces injury risk by 28-45%</li>
                          <li>• Improves neuromuscular coordination</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Sample Warm-ups */}
                  <div className="bg-white border border-gray-200 rounded-lg p-5">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Workout-Specific Warm-up Examples
                    </h3>
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-1">
                        <div className="flex items-start mb-2">
                          <span className="bg-red-100 text-red-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            L
                          </span>
                          <p className="text-sm text-gray-600">
                            <strong>Lower Body:</strong> Bike 5min → Leg swings
                            → Bodyweight squats → Box jumps → Ramp-up squats
                          </p>
                        </div>
                        <div className="flex items-start mb-2">
                          <span className="bg-red-100 text-red-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            U
                          </span>
                          <p className="text-sm text-gray-600">
                            <strong>Upper Body:</strong> Rower 5min → Band
                            pull-aparts → Push-ups → Medicine ball throws →
                            Ramp-up bench
                          </p>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start mb-2">
                          <span className="bg-red-100 text-red-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            F
                          </span>
                          <p className="text-sm text-gray-600">
                            <strong>Full Body:</strong> Jump rope 5min → World's
                            greatest stretch → KB swings → Ramp-up deadlifts
                          </p>
                        </div>
                        <div className="flex items-start">
                          <span className="bg-red-100 text-red-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            H
                          </span>
                          <p className="text-sm text-gray-600">
                            <strong>HIIT:</strong> Dynamic movements → Mobility
                            drills → Pulse raisers → Technique practice
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
              <div className="flex justify-between items-center bg-gradient-to-r from-emerald-50 to-white p-5 cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-emerald-100 p-2 rounded-lg mr-4">
                    <HeartPulse className="w-5 h-5 text-emerald-600" />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    Recovery & Injury Mitigation
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
                      Evidence-Based Recovery Protocols
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full bg-white rounded-lg overflow-hidden">
                        <thead className="bg-emerald-100">
                          <tr>
                            <th className="py-2 px-4 text-left text-xs font-medium text-emerald-800">
                              Method
                            </th>
                            <th className="py-2 px-4 text-left text-xs font-medium text-emerald-800">
                              Effectiveness
                            </th>
                            <th className="py-2 px-4 text-left text-xs font-medium text-emerald-800">
                              Best Use Cases
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 text-xs">
                          <tr>
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Active Recovery
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              High (↑ blood flow 40-60%)
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Between heavy sessions, DOMS reduction
                            </td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Sleep Optimization
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Critical (↑ HGH 70-80%)
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Daily, especially after intense training
                            </td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Nutrition Timing
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              High (↑ protein synthesis 25%)
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Post-workout window (30-120min)
                            </td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Mobility Work
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Moderate (↑ ROM 15-30%)
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Daily, especially pre/post workout
                            </td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Cold Therapy
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Contextual (↓ inflammation)
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Acute injuries, not post-strength training
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Recovery Timeline */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="font-semibold text-emerald-800 mb-3">
                        Injury Warning Signs
                      </h3>
                      <div className="space-y-4">
                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                          <h4 className="font-medium text-gray-800 mb-1">
                            Acute Indicators
                          </h4>
                          <p className="text-xs text-gray-600">
                            Sharp pain during movement, joint instability,
                            immediate swelling
                          </p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                          <h4 className="font-medium text-gray-800 mb-1">
                            Chronic Indicators
                          </h4>
                          <p className="text-xs text-gray-600">
                            Persistent ache, reduced range of motion, morning
                            stiffness
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-emerald-800 mb-3">
                        Recovery Timeline
                      </h3>
                      <div className="bg-emerald-50 rounded-lg p-4 h-full">
                        <ul className="space-y-3 text-sm">
                          <li className="flex items-start">
                            <span className="bg-emerald-100 text-emerald-800 rounded-full p-1 mr-2">
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
                              Muscle recovery: 24-72 hours depending on
                              intensity
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-emerald-100 text-emerald-800 rounded-full p-1 mr-2">
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
                              Tendon/ligament recovery: 6 weeks+ for significant
                              damage
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-emerald-100 text-emerald-800 rounded-full p-1 mr-2">
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
                              Full systemic recovery: 7-10 days after max effort
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Recovery Protocols */}
                  <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Injury-Specific Recovery Protocols
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs mb-4">
                      <div className="bg-white p-2 rounded border border-emerald-100">
                        <div className="bg-emerald-100 rounded-full w-8 h-8 mx-auto mb-1 flex items-center justify-center">
                          <HeartPulse className="w-4 h-4 text-emerald-600" />
                        </div>
                        <p>
                          Rotator Cuff: Isometric holds → Band work → Light DB
                        </p>
                      </div>
                      <div className="bg-white p-2 rounded border border-emerald-100">
                        <div className="bg-emerald-100 rounded-full w-8 h-8 mx-auto mb-1 flex items-center justify-center">
                          <HeartPulse className="w-4 h-4 text-emerald-600" />
                        </div>
                        <p>
                          Lower Back: McGill Big 3 → Bird dogs → Deadbug
                          progressions
                        </p>
                      </div>
                      <div className="bg-white p-2 rounded border border-emerald-100">
                        <div className="bg-emerald-100 rounded-full w-8 h-8 mx-auto mb-1 flex items-center justify-center">
                          <HeartPulse className="w-4 h-4 text-emerald-600" />
                        </div>
                        <p>
                          Knee: Quad sets → Terminal knee extensions → Step-ups
                        </p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-600 text-center">
                      Always consult a medical professional for proper injury
                      diagnosis and treatment
                    </p>
                  </div>
                </div>
              )}
            </section>

            {/* Final Takeaways */}
            <section className="bg-white rounded-xl shadow-md mb-10 p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                Key Injury Prevention Takeaways
              </h2>

              <div className="bg-orange-50 p-5 rounded-lg mb-5">
                <h3 className="text-lg font-semibold text-orange-800 mb-3">
                  Essential Safety Practices
                </h3>
                <ol className="space-y-3">
                  {[
                    "Master technique before adding weight - quality over quantity always",
                    "Implement comprehensive warm-ups specific to your workout",
                    "Follow progressive overload principles (≤5% weekly increases)",
                    "Prioritize recovery as much as training - it's when adaptation occurs",
                    "Listen to your body - pain is different from discomfort",
                    "Address muscle imbalances before they cause injury",
                    "Vary your training stimulus to avoid overuse injuries",
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
                  Long-Term Training Sustainability
                </h3>
                <p className="text-sm text-gray-700 mb-3">
                  Injury prevention isn't about avoiding challenges—it's about
                  training intelligently so you can continue progressing for
                  decades. The athletes with the longest careers aren't those
                  who push hardest in the short term, but those who master the
                  balance between stress and recovery while maintaining
                  impeccable form.
                </p>
                <p className="text-sm text-gray-700">
                  By implementing these evidence-based strategies, you'll not
                  only reduce injury risk but also enhance performance.
                  Remember: the best workout program is the one you can
                  consistently perform without interruption. Train smart today
                  to keep training tomorrow.
                </p>
              </div>
            </section>
            <section className="bg-white rounded-xl shadow-md mb-8 p-6 border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="bg-amber-100 p-2 rounded-lg mr-4">
                  <AlertCircle className="w-6 h-6 text-amber-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-800">
                  Common Training Mistakes & Corrections
                </h2>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-amber-700 mb-2">
                    1. Ego Lifting
                  </h3>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                    <li>
                      <strong>Problem:</strong> Using weights beyond technical
                      capacity increases injury risk by 3x
                    </li>
                    <li>
                      <strong>Solution:</strong> Follow 2-for-2 rule for
                      progression (2 extra reps for 2 consecutive sessions)
                    </li>
                    <li>
                      <strong>Data:</strong> 62% of acute injuries occur during
                      max effort attempts
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-amber-700 mb-2">
                    2. Partial Range of Motion
                  </h3>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                    <li>
                      <strong>Problem:</strong> Reduces muscle activation by
                      25-40% and increases joint stress
                    </li>
                    <li>
                      <strong>Solution:</strong> Use tempo training (e.g.,
                      3-0-1-0) to ensure full ROM
                    </li>
                    <li>
                      <strong>Tip:</strong> Film your lifts to verify range
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-amber-700 mb-2">
                    3. Poor Rest Periods
                  </h3>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                    <li>
                      <strong>Problem:</strong> 58% of trainees rest ≤60s
                      between heavy sets
                    </li>
                    <li>
                      <strong>Solution:</strong> 2-5min for strength, 30-90s for
                      hypertrophy
                    </li>
                    <li>
                      <strong>Science:</strong> ATP replenishment requires 3+
                      minutes for maximal efforts
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            <section className="bg-white rounded-xl shadow-md mb-8 p-6 border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-2 rounded-lg mr-4">
                  <Activity className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-800">
                  Mobility Requirements by Exercise
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-700 mb-2">
                    Lower Body
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 flex-shrink-0">
                        <svg
                          className="w-3 h-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L9 12.586l7.293-7.293a1 1 0 011.414 1.414l-8 8z" />
                        </svg>
                      </span>
                      <span className="text-sm">
                        <strong>Squat:</strong> 15° ankle dorsiflexion, 110° hip
                        flexion
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 flex-shrink-0">
                        <svg
                          className="w-3 h-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L9 12.586l7.293-7.293a1 1 0 011.414 1.414l-8 8z" />
                        </svg>
                      </span>
                      <span className="text-sm">
                        <strong>Deadlift:</strong> 20° hamstring flexibility,
                        neutral spine
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-700 mb-2">
                    Upper Body
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 flex-shrink-0">
                        <svg
                          className="w-3 h-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L9 12.586l7.293-7.293a1 1 0 011.414 1.414l-8 8z" />
                        </svg>
                      </span>
                      <span className="text-sm">
                        <strong>Overhead Press:</strong> 180° shoulder flexion,
                        T-spine extension
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 flex-shrink-0">
                        <svg
                          className="w-3 h-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L9 12.586l7.293-7.293a1 1 0 011.414 1.414l-8 8z" />
                        </svg>
                      </span>
                      <span className="text-sm">
                        <strong>Pull-up:</strong> 60° scapular upward rotation
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            <section className="bg-white rounded-xl shadow-md mb-8 p-6 border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 p-2 rounded-lg mr-4">
                  <ShieldAlert className="w-6 h-6 text-red-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-800">
                  Equipment Safety Guidelines
                </h2>
              </div>

              <div className="space-y-4">
                <div className="border-l-4 border-red-400 pl-4">
                  <h3 className="font-semibold text-red-700">
                    Barbell Training
                  </h3>
                  <ul className="list-[square] pl-5 mt-2 space-y-1 text-sm text-gray-700">
                    <li>Always use collars with Olympic lifts</li>
                    <li>Check knurling marks for proper hand placement</li>
                    <li>45lb standard bar requires ≥25mm sleeves</li>
                  </ul>
                </div>

                <div className="border-l-4 border-amber-400 pl-4">
                  <h3 className="font-semibold text-amber-700">
                    Machine Usage
                  </h3>
                  <ul className="list-[square] pl-5 mt-2 space-y-1 text-sm text-gray-700">
                    <li>
                      Adjust seat height so joints align with machine axis
                    </li>
                    <li>Pad placement should not compress vertebrae</li>
                    <li>Never bypass safety stops on cable machines</li>
                  </ul>
                </div>

                <div className="border-l-4 border-blue-400 pl-4">
                  <h3 className="font-semibold text-blue-700">Free Weights</h3>
                  <ul className="list-[square] pl-5 mt-2 space-y-1 text-sm text-gray-700">
                    <li>Drop zones should be clear of obstructions</li>
                    <li>Hex dumbbells reduce rolling risk by 70%</li>
                    <li>Kettlebell handles must accommodate 2-handed grip</li>
                  </ul>
                </div>
              </div>
            </section>
            <section className="bg-white rounded-xl shadow-md mb-8 p-6 border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 p-2 rounded-lg mr-4">
                  <User className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-800">
                  Age-Specific Considerations
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-purple-700 mb-2">
                    Teens (13-19)
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>Focus on technique before heavy loading</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>Growth plates vulnerable until age 16-18</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-700 mb-2">
                    Adults (20-50)
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Peak injury risk during years 30-45</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Maintain 2:1 pull:push ratio</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-amber-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-amber-700 mb-2">50+</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">•</span>
                      <span>Require longer warm-ups (10-15min)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">•</span>
                      <span>Tendon elasticity decreases 30%</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            <section className="bg-white rounded-xl shadow-md mb-8 p-6 border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 p-2 rounded-lg mr-4">
                  <AlertCircle className="w-6 h-6 text-red-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-800">
                  Emergency Response Protocol
                </h2>
              </div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="bg-red-100 text-red-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                    1
                  </span>
                  <div>
                    <h3 className="font-semibold text-gray-800">Muscle Tear</h3>
                    <ul className="list-disc pl-5 mt-1 text-sm text-gray-700">
                      <li>
                        Apply RICE protocol immediately (Rest, Ice, Compression,
                        Elevation)
                      </li>
                      <li>Seek medical attention if audible "pop" was heard</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="bg-red-100 text-red-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                    2
                  </span>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Joint Dislocation
                    </h3>
                    <ul className="list-disc pl-5 mt-1 text-sm text-gray-700">
                      <li>Immobilize in current position</li>
                      <li>Never attempt to relocate yourself</li>
                      <li>Ice to reduce swelling</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="bg-red-100 text-red-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                    3
                  </span>
                  <div>
                    <h3 className="font-semibold text-gray-800">Head Impact</h3>
                    <ul className="list-disc pl-5 mt-1 text-sm text-gray-700">
                      <li>Monitor for concussion symptoms</li>
                      <li>No return to activity same day</li>
                      <li>Seek neurological evaluation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            <section className="bg-white rounded-xl shadow-md mb-8 overflow-hidden border border-gray-200">
              <div className="flex justify-between items-center bg-gradient-to-r from-indigo-50 to-white p-5 cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-indigo-100 p-2 rounded-lg mr-4">
                    <Calendar className="w-5 h-5 text-indigo-600" />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    Periodization for Injury Prevention
                  </h2>
                </div>
                <ChevronDown className="w-5 h-5 text-gray-500" />
              </div>

              <div className="p-5 pt-0">
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-800 mb-3">
                    Annual Training Cycle Structure
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white rounded-lg overflow-hidden">
                      <thead className="bg-indigo-100">
                        <tr>
                          <th className="py-2 px-4 text-left text-xs font-medium text-indigo-800">
                            Phase
                          </th>
                          <th className="py-2 px-4 text-left text-xs font-medium text-indigo-800">
                            Duration
                          </th>
                          <th className="py-2 px-4 text-left text-xs font-medium text-indigo-800">
                            Intensity
                          </th>
                          <th className="py-2 px-4 text-left text-xs font-medium text-indigo-800">
                            Injury Focus
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 text-xs">
                        {[
                          [
                            "Preparation",
                            "4-6 weeks",
                            "Low (RPE 4-6)",
                            "Corrective exercises, mobility",
                          ],
                          [
                            "Hypertrophy",
                            "8 weeks",
                            "Moderate (RPE 7)",
                            "Tendon/joint prep with volume",
                          ],
                          [
                            "Strength",
                            "6 weeks",
                            "High (RPE 8-9)",
                            "Gradual load progression",
                          ],
                          [
                            "Peaking",
                            "3-4 weeks",
                            "Very High (RPE 9-10)",
                            "Spotter required, deload weeks",
                          ],
                          [
                            "Active Recovery",
                            "2-4 weeks",
                            "Very Low (RPE 3-4)",
                            "Tissue repair protocols",
                          ],
                        ].map((row, i) => (
                          <tr key={i} className={i % 2 ? "bg-gray-50" : ""}>
                            {row.map((cell, j) => (
                              <td
                                key={j}
                                className={`py-3 px-4 ${
                                  j === 0
                                    ? "font-medium text-gray-800"
                                    : "text-gray-700"
                                }`}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="font-semibold text-indigo-800 mb-3">
                      Microcycle Planning
                    </h3>
                    <div className="bg-indigo-50 rounded-lg p-4 h-full">
                      <ul className="space-y-3 text-sm">
                        <li className="flex items-start">
                          <span className="bg-indigo-100 text-indigo-800 rounded-full p-1 mr-2">
                            <svg
                              className="w-3 h-3"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M6.4 12L10 8.4l3.6 3.6L16 10l-6-6-6 6 1.4 1.4z" />
                            </svg>
                          </span>
                          <span>
                            <strong>Monday:</strong> Heavy lower (85% 1RM) with
                            extended warm-up
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-indigo-100 text-indigo-800 rounded-full p-1 mr-2">
                            <svg
                              className="w-3 h-3"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M6.4 12L10 8.4l3.6 3.6L16 10l-6-6-6 6 1.4 1.4z" />
                            </svg>
                          </span>
                          <span>
                            <strong>Wednesday:</strong> Dynamic upper (speed
                            work at 60% 1RM)
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-indigo-100 text-indigo-800 rounded-full p-1 mr-2">
                            <svg
                              className="w-3 h-3"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M6.4 12L10 8.4l3.6 3.6L16 10l-6-6-6 6 1.4 1.4z" />
                            </svg>
                          </span>
                          <span>
                            <strong>Friday:</strong> Moderate full-body
                            (hypertrophy focus)
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-indigo-100 text-indigo-800 rounded-full p-1 mr-2">
                            <svg
                              className="w-3 h-3"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M6.4 12L10 8.4l3.6 3.6L16 10l-6-6-6 6 1.4 1.4z" />
                            </svg>
                          </span>
                          <span>
                            <strong>Sunday:</strong> Active recovery
                            (yoga/mobility)
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-indigo-800 mb-3">
                      Deload Protocols
                    </h3>
                    <div className="space-y-4">
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-gray-800 mb-1">
                          Volume Deload
                        </h4>
                        <ul className="list-disc pl-5 text-xs text-gray-700 space-y-1">
                          <li>Reduce sets by 50% every 4-6 weeks</li>
                          <li>Maintain same intensity (weight on bar)</li>
                          <li>Focus on perfect technique</li>
                        </ul>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-gray-800 mb-1">
                          Intensity Deload
                        </h4>
                        <ul className="list-disc pl-5 text-xs text-gray-700 space-y-1">
                          <li>Reduce weight by 20-30% every 8-12 weeks</li>
                          <li>Maintain same volume (sets/reps)</li>
                          <li>Increase tempo for time under tension</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-800 mb-3">
                    Injury Prevention Metrics
                  </h3>
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                      <div className="flex items-start mb-2">
                        <span className="bg-indigo-100 text-indigo-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                          1
                        </span>
                        <p className="text-sm text-gray-600">
                          <strong>Joint Angle Measurements:</strong> Track ROM
                          improvements (e.g., squat depth)
                        </p>
                      </div>
                      <div className="flex items-start mb-2">
                        <span className="bg-indigo-100 text-indigo-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                          2
                        </span>
                        <p className="text-sm text-gray-600">
                          <strong>Asymmetry Detection:</strong> Single-leg tests
                          show 10% imbalance
                        </p>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start mb-2">
                        <span className="bg-indigo-100 text-indigo-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                          3
                        </span>
                        <p className="text-sm text-gray-600">
                          <strong>Recovery Markers:</strong> Morning HRV
                          fluctuations 15%
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-indigo-100 text-indigo-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                          4
                        </span>
                        <p className="text-sm text-gray-600">
                          <strong>Pain Monitoring:</strong> VAS scale 3/10
                          requires modification
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="bg-white rounded-xl shadow-md mb-8 overflow-hidden border border-gray-200">
              <div className="flex justify-between items-center bg-gradient-to-r from-emerald-50 to-white p-5 cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-emerald-100 p-2 rounded-lg mr-4">
                    <HeartPulse className="w-5 h-5 text-emerald-600" />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    Nutrition for Tissue Resilience
                  </h2>
                </div>
                <ChevronDown className="w-5 h-5 text-gray-500" />
              </div>

              <div className="p-5 pt-0">
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-800 mb-3">
                    Macronutrient Timing
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      {
                        title: "Pre-Workout (2-3hr before)",
                        icon: (
                          <Thermometer className="w-4 h-4 text-amber-600" />
                        ),
                        items: [
                          "1.2g/kg carbs for glycogen",
                          "0.4g/kg protein for MPS",
                          "Low fiber/fat for digestion",
                        ],
                      },
                      {
                        title: "Intra-Workout (>60min sessions)",
                        icon: <Activity className="w-4 h-4 text-blue-600" />,
                        items: [
                          "30-60g/hr carbs",
                          "EAAs for endurance",
                          "Electrolytes for cramps",
                        ],
                      },
                      {
                        title: "Post-Workout (0-2hr window)",
                        icon: <Clock className="w-4 h-4 text-emerald-600" />,
                        items: [
                          "0.5g/kg protein",
                          "3:1 carb:protein ratio",
                          "Anti-inflammatory foods",
                        ],
                      },
                    ].map((box, i) => (
                      <div
                        key={i}
                        className="bg-white border border-gray-200 rounded-lg p-4"
                      >
                        <div className="flex items-center mb-2">
                          <div className="bg-emerald-100 p-1 rounded-full mr-2">
                            {box.icon}
                          </div>
                          <h4 className="font-medium text-emerald-700">
                            {box.title}
                          </h4>
                        </div>
                        <ul className="list-disc pl-5 text-xs text-gray-700 space-y-1">
                          {box.items.map((item, j) => (
                            <li key={j}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-emerald-50 rounded-lg p-5 mb-6">
                  <h3 className="font-semibold text-emerald-800 mb-3">
                    Key Nutrients for Tissue Health
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-medium text-emerald-700 mb-2">
                        Collagen Support
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white p-2 rounded border border-emerald-100">
                          <p className="text-xs font-medium">Vitamin C</p>
                          <p className="text-xs text-gray-600">
                            15mg/kg for synthesis
                          </p>
                        </div>
                        <div className="bg-white p-2 rounded border border-emerald-100">
                          <p className="text-xs font-medium">Glycine</p>
                          <p className="text-xs text-gray-600">
                            3g/day for repair
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-emerald-700 mb-2">
                        Inflammation Control
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white p-2 rounded border border-emerald-100">
                          <p className="text-xs font-medium">Omega-3s</p>
                          <p className="text-xs text-gray-600">
                            2g EPA/DHA daily
                          </p>
                        </div>
                        <div className="bg-white p-2 rounded border border-emerald-100">
                          <p className="text-xs font-medium">Curcumin</p>
                          <p className="text-xs text-gray-600">
                            500mg with piperine
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white border border-gray-200 rounded-lg p-5">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Hydration Guidelines
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="bg-emerald-100 text-emerald-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                          1
                        </span>
                        <p className="text-sm text-gray-600">
                          30-40ml/kg bodyweight daily baseline
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-emerald-100 text-emerald-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                          2
                        </span>
                        <p className="text-sm text-gray-600">
                          Add 1L per hour of intense training
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-emerald-100 text-emerald-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                          3
                        </span>
                        <p className="text-sm text-gray-600">
                          Monitor urine color (pale straw ideal)
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-5">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Supplement Protocol
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="bg-emerald-100 text-emerald-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                          A
                        </span>
                        <p className="text-sm text-gray-600">
                          Creatine: 5g/day for muscle resilience
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-emerald-100 text-emerald-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                          B
                        </span>
                        <p className="text-sm text-gray-600">
                          Magnesium: 400mg at night for recovery
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-emerald-100 text-emerald-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                          C
                        </span>
                        <p className="text-sm text-gray-600">
                          Vitamin D: 2000-5000 IU with fat
                        </p>
                      </div>
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
                      Medically reviewed
                    </a>{" "}
                    by{" "}
                    <a
                      href="#"
                      className="text-blue-600 hover:underline font-medium"
                    >
                      Dr. James Peterson, DPT
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
                      Updated on July 1, 2024
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
                  Get expert training advice
                </h4>
                <p className="text-gray-700 text-sm">
                  Monthly insights on injury prevention, biomechanics, and
                  evidence-based training strategies.
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

            {/* Form Checklists */}
            <div className="bg-white rounded-lg p-6 mb-8 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Form Checklist PDFs
              </h3>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <h4 className="font-medium text-gray-800">Squat Checklist</h4>
                  <a
                    href="#"
                    className="text-blue-600 text-sm hover:underline block"
                  >
                    Download 12-Point Form Guide
                  </a>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-medium text-gray-800">
                    Deadlift Checklist
                  </h4>
                  <a
                    href="#"
                    className="text-blue-600 text-sm hover:underline block"
                  >
                    Download 10-Point Safety Check
                  </a>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-medium text-gray-800">Overhead Press</h4>
                  <a
                    href="#"
                    className="text-blue-600 text-sm hover:underline block"
                  >
                    Download Shoulder Safety Guide
                  </a>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Pull-up Form</h4>
                  <a
                    href="#"
                    className="text-blue-600 text-sm hover:underline block"
                  >
                    Download Scapular Health PDF
                  </a>
                </div>
              </div>
            </div>

            {/* Warm-up Guides */}
            <div className="bg-white rounded-lg p-6 mb-8 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Warm-up Templates
              </h3>
              <div className="space-y-3">
                <div className="bg-orange-50 p-3 rounded-lg">
                  <h4 className="text-sm font-medium text-orange-700 mb-1">
                    Strength Training
                  </h4>
                  <a
                    href="#"
                    className="text-xs text-orange-600 hover:underline block"
                  >
                    Download 15-Minute Routine
                  </a>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h4 className="text-sm font-medium text-blue-700 mb-1">
                    HIIT Workouts
                  </h4>
                  <a
                    href="#"
                    className="text-xs text-blue-600 hover:underline block"
                  >
                    Download Dynamic Warm-up
                  </a>
                </div>
                <div className="bg-red-50 p-3 rounded-lg">
                  <h4 className="text-sm font-medium text-red-700 mb-1">
                    Running
                  </h4>
                  <a
                    href="#"
                    className="text-xs text-red-600 hover:underline block"
                  >
                    Download Mobility Sequence
                  </a>
                </div>
                <div className="bg-emerald-50 p-3 rounded-lg">
                  <h4 className="text-sm font-medium text-emerald-700 mb-1">
                    Recovery Day
                  </h4>
                  <a
                    href="#"
                    className="text-xs text-emerald-600 hover:underline block"
                  >
                    Download Active Recovery Guide
                  </a>
                </div>
              </div>
            </div>

            {/* Recommended Equipment */}
            <div className="bg-white rounded-lg p-6 mb-8 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Safety Equipment
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
                      Lifting Belt
                    </h4>
                    <p className="text-xs text-gray-600">
                      For heavy compound lifts only
                    </p>
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
                      Wrist Wraps
                    </h4>
                    <p className="text-xs text-gray-600">
                      For pressing movements
                    </p>
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
                      Knee Sleeves
                    </h4>
                    <p className="text-xs text-gray-600">
                      For squatting movements
                    </p>
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
                <h4 className="font-bold mb-2">Form Coaching App</h4>
                <p className="text-sm mb-4">
                  AI-powered real-time form feedback for safer training
                </p>
                <button className="bg-white hover:bg-gray-100 text-orange-600 px-4 py-2 rounded text-sm font-medium transition-colors">
                  TRY FREE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
