"use client";

import { useState } from "react";
import {
  Dumbbell,
  Target,
  Clock,
  Calendar,
  ChevronDown,
  User,
  Flame,
  HeartPulse,
  Scale,
} from "lucide-react";

export default function FitnessArticle4() {
  const [email, setEmail] = useState("");
  const [activeTab, setActiveTab] = useState("Basics");
  const [expandedSections, setExpandedSections] = useState({
    basics: true,
    exercises: false,
    nutrition: false,
    programs: false,
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
    "Basics",
    "Exercises",
    "Nutrition",
    "Programs",
    "Form Tips",
    "Equipment",
    "FAQs",
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
                    A Beginner's Guide to Weight Training
                  </h1>
                  <p className="text-lg sm:text-xl text-black font-medium">
                    Weight training is an excellent way to build muscle, boost
                    metabolism, and improve overall health. Learn proper
                    techniques, essential exercises, and how to create an
                    effective routine.
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
                      {tab === "Basics" && (
                        <Dumbbell className="w-4 h-4 mr-1" />
                      )}
                      {tab === "Exercises" && (
                        <Target className="w-4 h-4 mr-1" />
                      )}
                      {tab === "Nutrition" && (
                        <Flame className="w-4 h-4 mr-1" />
                      )}
                      {tab === "Programs" && (
                        <Calendar className="w-4 h-4 mr-1" />
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
                    Weight training, also called resistance training, is one of
                    the most effective ways to transform your body and improve
                    health. Unlike cardio, strength training builds lean muscle
                    mass that continues burning calories even at rest. This
                    comprehensive guide covers everything beginners need to
                    start safely and effectively.
                  </p>
                  <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-400">
                    <p className="text-sm text-orange-800 font-medium">
                      "Just 2-3 strength training sessions per week can increase
                      lean muscle mass by 1-2 pounds per month for beginners." -
                      American Council on Exercise
                    </p>
                  </div>
                </div>
                <div className="md:w-1/3 bg-gradient-to-br from-orange-50 to-white rounded-lg p-4 flex flex-col items-center justify-center border border-orange-100">
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div className="bg-white p-3 rounded-lg shadow-xs border border-gray-100 flex flex-col items-center">
                      <Dumbbell className="w-6 h-6 text-orange-600 mb-1" />
                      <span className="text-xs text-center">Strength</span>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-xs border border-gray-100 flex flex-col items-center">
                      <HeartPulse className="w-6 h-6 text-red-500 mb-1" />
                      <span className="text-xs text-center">Health</span>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-xs border border-gray-100 flex flex-col items-center">
                      <Scale className="w-6 h-6 text-teal-600 mb-1" />
                      <span className="text-xs text-center">Metabolism</span>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-xs border border-gray-100 flex flex-col items-center">
                      <Target className="w-6 h-6 text-blue-600 mb-1" />
                      <span className="text-xs text-center">Confidence</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 text-center">
                    Benefits of Weight Training
                  </p>
                </div>
              </div>
            </div>

            {/* Basics Section */}
            <section
              className="bg-white rounded-xl shadow-md mb-8 overflow-hidden border border-gray-200"
              onClick={() => toggleSection("basics")}
            >
              <div className="flex justify-between items-center bg-gradient-to-r from-orange-50 to-white p-5 cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-orange-100 p-2 rounded-lg mr-4">
                    <Dumbbell className="w-5 h-5 text-orange-600" />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    Weight Training Fundamentals
                  </h2>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    expandedSections.basics ? "rotate-180" : ""
                  }`}
                />
              </div>

              {expandedSections.basics && (
                <div className="p-5 pt-0">
                  {/* Training Basics */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Core Principles of Effective Training
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
                            Progressive Overload
                          </h4>
                        </div>
                        <p className="text-sm text-gray-600">
                          Gradually increase weight, reps, or sets to
                          continually challenge muscles. Aim for 2-5% increases
                          in weight when you can complete all reps with good
                          form.
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <div className="bg-blue-100 p-1 rounded-full mr-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-4 h-4 text-blue-600"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                            </svg>
                          </div>
                          <h4 className="font-medium text-gray-800">
                            Recovery
                          </h4>
                        </div>
                        <p className="text-sm text-gray-600">
                          Muscles grow during rest, not workouts. Allow 48 hours
                          between working the same muscle groups. Aim for 7-9
                          hours of sleep nightly for optimal recovery.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Training Benefits */}
                  <div className="bg-orange-50 rounded-lg p-5 mb-4">
                    <h3 className="font-semibold text-orange-800 mb-3">
                      Key Benefits of Weight Training
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-white p-3 rounded-lg border border-orange-100">
                        <h4 className="text-sm font-medium text-orange-700 mb-1">
                          Muscle Growth
                        </h4>
                        <p className="text-xs text-gray-700">
                          Increases lean muscle mass and definition
                        </p>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-orange-100">
                        <h4 className="text-sm font-medium text-orange-700 mb-1">
                          Metabolism Boost
                        </h4>
                        <p className="text-xs text-gray-700">
                          Burns more calories at rest than fat tissue
                        </p>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-orange-100">
                        <h4 className="text-sm font-medium text-orange-700 mb-1">
                          Bone Density
                        </h4>
                        <p className="text-xs text-gray-700">
                          Reduces risk of osteoporosis
                        </p>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-orange-100">
                        <h4 className="text-sm font-medium text-orange-700 mb-1">
                          Injury Prevention
                        </h4>
                        <p className="text-xs text-gray-700">
                          Strengthens joints and connective tissue
                        </p>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-orange-100">
                        <h4 className="text-sm font-medium text-orange-700 mb-1">
                          Mental Health
                        </h4>
                        <p className="text-xs text-gray-700">
                          Reduces anxiety and depression symptoms
                        </p>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-orange-100">
                        <h4 className="text-sm font-medium text-orange-700 mb-1">
                          Longevity
                        </h4>
                        <p className="text-xs text-gray-700">
                          Associated with longer, healthier life
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Getting Started */}
                  <div className="bg-white border border-gray-200 rounded-lg p-5">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Getting Started with Weight Training
                    </h3>
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-1">
                        <div className="flex items-start mb-2">
                          <span className="bg-orange-100 text-orange-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            1
                          </span>
                          <p className="text-sm text-gray-600">
                            Start with 2-3 sessions per week, 30-45 minutes each
                          </p>
                        </div>
                        <div className="flex items-start mb-2">
                          <span className="bg-orange-100 text-orange-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            2
                          </span>
                          <p className="text-sm text-gray-600">
                            Focus on compound movements that work multiple
                            muscle groups
                          </p>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start mb-2">
                          <span className="bg-orange-100 text-orange-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            3
                          </span>
                          <p className="text-sm text-gray-600">
                            Use weights that challenge you in the 8-12 rep range
                          </p>
                        </div>
                        <div className="flex items-start">
                          <span className="bg-orange-100 text-orange-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            4
                          </span>
                          <p className="text-sm text-gray-600">
                            Allow at least one rest day between working the same
                            muscles
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* Exercises Section */}
            <section
              className="bg-white rounded-xl shadow-md mb-8 overflow-hidden border border-gray-200"
              onClick={() => toggleSection("exercises")}
            >
              <div className="flex justify-between items-center bg-gradient-to-r from-blue-50 to-white p-5 cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-lg mr-4">
                    <Target className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    Essential Exercises for Beginners
                  </h2>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    expandedSections.exercises ? "rotate-180" : ""
                  }`}
                />
              </div>

              {expandedSections.exercises && (
                <div className="p-5 pt-0">
                  {/* Exercise Types */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Foundational Movements
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
                              Beginner Tips
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 text-xs">
                          <tr>
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Squats
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Quads, Hamstrings, Glutes, Core
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Start with bodyweight, keep knees behind toes
                            </td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Push-ups
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Chest, Shoulders, Triceps
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Modify with knees down if needed
                            </td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Rows
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Back, Biceps
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Squeeze shoulder blades together
                            </td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Deadlifts
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Hamstrings, Glutes, Back
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Keep back straight, hinge at hips
                            </td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Overhead Press
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Shoulders, Triceps
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Start with light dumbbells
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Exercise Programs */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="font-semibold text-blue-800 mb-3">
                        Proper Form Guidelines
                      </h3>
                      <div className="space-y-4">
                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                          <h4 className="font-medium text-gray-800 mb-1">
                            Control the Weight
                          </h4>
                          <p className="text-xs text-gray-600">
                            Move deliberately through full range of motion.
                            Avoid swinging or using momentum.
                          </p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                          <h4 className="font-medium text-gray-800 mb-1">
                            Mind-Muscle Connection
                          </h4>
                          <p className="text-xs text-gray-600">
                            Focus on the muscle you're working. Visualize it
                            contracting and extending.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-800 mb-3">
                        Common Mistakes to Avoid
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
                              Going too heavy too soon (sacrifices form)
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
                              Partial range of motion (not going deep enough)
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
                              Not warming up properly (increases injury risk)
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
                              Holding breath (can spike blood pressure)
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Exercise Visualization */}
                  <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Sample Beginner Workout
                    </h3>
                    <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-6">
                      <div className="grid grid-cols-3 gap-4 text-xs mb-4">
                        <div className="bg-white p-2 rounded border border-blue-100">
                          <div className="bg-blue-100 rounded-full w-8 h-8 mx-auto mb-1 flex items-center justify-center">
                            <Dumbbell className="w-4 h-4 text-blue-600" />
                          </div>
                          <p>Squats: 3x10</p>
                        </div>
                        <div className="bg-white p-2 rounded border border-blue-100">
                          <div className="bg-blue-100 rounded-full w-8 h-8 mx-auto mb-1 flex items-center justify-center">
                            <Dumbbell className="w-4 h-4 text-blue-600" />
                          </div>
                          <p>Push-ups: 3x8-12</p>
                        </div>
                        <div className="bg-white p-2 rounded border border-blue-100">
                          <div className="bg-blue-100 rounded-full w-8 h-8 mx-auto mb-1 flex items-center justify-center">
                            <Dumbbell className="w-4 h-4 text-blue-600" />
                          </div>
                          <p>Rows: 3x10</p>
                        </div>
                        <div className="bg-white p-2 rounded border border-blue-100">
                          <div className="bg-blue-100 rounded-full w-8 h-8 mx-auto mb-1 flex items-center justify-center">
                            <Dumbbell className="w-4 h-4 text-blue-600" />
                          </div>
                          <p>Plank: 3x30s</p>
                        </div>
                        <div className="bg-white p-2 rounded border border-blue-100">
                          <div className="bg-blue-100 rounded-full w-8 h-8 mx-auto mb-1 flex items-center justify-center">
                            <Dumbbell className="w-4 h-4 text-blue-600" />
                          </div>
                          <p>Lunges: 3x8 each</p>
                        </div>
                        <div className="bg-white p-2 rounded border border-blue-100">
                          <div className="bg-blue-100 rounded-full w-8 h-8 mx-auto mb-1 flex items-center justify-center">
                            <Dumbbell className="w-4 h-4 text-blue-600" />
                          </div>
                          <p>Rest 60-90s between sets</p>
                        </div>
                      </div>
                      <p className="text-xs text-gray-600">
                        Perform this full-body workout 2-3x per week with at
                        least one rest day between sessions
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* Nutrition Section */}
            <section
              className="bg-white rounded-xl shadow-md mb-8 overflow-hidden border border-gray-200"
              onClick={() => toggleSection("nutrition")}
            >
              <div className="flex justify-between items-center bg-gradient-to-r from-green-50 to-white p-5 cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-green-100 p-2 rounded-lg mr-4">
                    <Flame className="w-5 h-5 text-green-600" />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    Nutrition for Muscle Growth
                  </h2>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    expandedSections.nutrition ? "rotate-180" : ""
                  }`}
                />
              </div>

              {expandedSections.nutrition && (
                <div className="p-5 pt-0">
                  {/* Nutrition Basics */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Building Muscle Requires Proper Fuel
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-green-700 mb-2">
                          Protein Intake
                        </h4>
                        <p className="text-xs text-gray-600">
                          Aim for 0.7-1g per pound of body weight daily from
                          quality sources like chicken, fish, eggs, and legumes
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-green-700 mb-2">
                          Caloric Surplus
                        </h4>
                        <p className="text-xs text-gray-600">
                          To gain muscle, consume 250-500 calories above
                          maintenance daily
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-green-700 mb-2">
                          Carbohydrates
                        </h4>
                        <p className="text-xs text-gray-600">
                          Primary energy source - aim for 2-3g per pound of body
                          weight
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-green-700 mb-2">
                          Healthy Fats
                        </h4>
                        <p className="text-xs text-gray-600">
                          Essential for hormone production - 20-30% of total
                          calories
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-green-700 mb-2">
                          Hydration
                        </h4>
                        <p className="text-xs text-gray-600">
                          Muscle is 75% water - aim for 0.5-1oz per pound of
                          body weight
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-green-700 mb-2">
                          Meal Timing
                        </h4>
                        <p className="text-xs text-gray-600">
                          Spread protein intake evenly across 3-5 meals
                          throughout the day
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Supplement Guide */}
                  <div className="bg-green-50 rounded-lg p-5 mb-6">
                    <h3 className="font-semibold text-green-800 mb-3">
                      Supplement Guide for Beginners
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-medium text-green-700 mb-1">
                          Recommended
                        </h4>
                        <ul className="text-xs text-gray-700 space-y-1">
                          <li>• Whey protein (convenient protein source)</li>
                          <li>
                            • Creatine monohydrate (5g daily for strength)
                          </li>
                          <li>• Omega-3 fish oil (reduces inflammation)</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-green-700 mb-1">
                          Optional
                        </h4>
                        <ul className="text-xs text-gray-700 space-y-1">
                          <li>• Multivitamin (fills nutritional gaps)</li>
                          <li>• Vitamin D (supports muscle function)</li>
                          <li>• Caffeine (pre-workout energy)</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Sample Meal Plan */}
                  <div className="bg-white border border-gray-200 rounded-lg p-5">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Sample Muscle-Building Meal Plan (180lb Male)
                    </h3>
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-1">
                        <div className="flex items-start mb-2">
                          <span className="bg-green-100 text-green-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            1
                          </span>
                          <p className="text-sm text-gray-600">
                            Breakfast: 3 eggs, 1 cup oats, 1 banana, 1 tbsp
                            peanut butter
                          </p>
                        </div>
                        <div className="flex items-start mb-2">
                          <span className="bg-green-100 text-green-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            2
                          </span>
                          <p className="text-sm text-gray-600">
                            Lunch: 6oz chicken, 1 cup rice, 2 cups mixed
                            vegetables
                          </p>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start mb-2">
                          <span className="bg-green-100 text-green-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            3
                          </span>
                          <p className="text-sm text-gray-600">
                            Post-workout: Protein shake, 1 medium sweet potato
                          </p>
                        </div>
                        <div className="flex items-start">
                          <span className="bg-green-100 text-green-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            4
                          </span>
                          <p className="text-sm text-gray-600">
                            Dinner: 8oz salmon, 1 cup quinoa, 2 cups roasted
                            vegetables
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* Training Programs Section */}
            <section
              className="bg-white rounded-xl shadow-md mb-8 overflow-hidden border border-gray-200"
              onClick={() => toggleSection("programs")}
            >
              <div className="flex justify-between items-center bg-gradient-to-r from-purple-50 to-white p-5 cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-purple-100 p-2 rounded-lg mr-4">
                    <Calendar className="w-5 h-5 text-purple-600" />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    Training Programs
                  </h2>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    expandedSections.programs ? "rotate-180" : ""
                  }`}
                />
              </div>

              {expandedSections.programs && (
                <div className="p-5 pt-0">
                  {/* Program Types */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Beginner Program Options
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full bg-white rounded-lg overflow-hidden">
                        <thead className="bg-purple-100">
                          <tr>
                            <th className="py-2 px-4 text-left text-xs font-medium text-purple-800">
                              Program
                            </th>
                            <th className="py-2 px-4 text-left text-xs font-medium text-purple-800">
                              Frequency
                            </th>
                            <th className="py-2 px-4 text-left text-xs font-medium text-purple-800">
                              Best For
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 text-xs">
                          <tr>
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Full Body
                            </td>
                            <td className="py-3 px-4 text-gray-700">3x/week</td>
                            <td className="py-3 px-4 text-gray-700">
                              Complete beginners, general fitness
                            </td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Upper/Lower Split
                            </td>
                            <td className="py-3 px-4 text-gray-700">4x/week</td>
                            <td className="py-3 px-4 text-gray-700">
                              Those with some experience
                            </td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Push/Pull/Legs
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              3-6x/week
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Intermediate lifters
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Program Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="font-semibold text-purple-800 mb-3">
                        12-Week Beginner Full Body Program
                      </h3>
                      <div className="space-y-4">
                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                          <h4 className="font-medium text-gray-800 mb-1">
                            Phase 1: Weeks 1-4
                          </h4>
                          <p className="text-xs text-gray-600 mb-2">
                            Learn proper form with light weights, 2-3 sets of
                            12-15 reps per exercise
                          </p>
                          <a
                            href="#"
                            className="text-xs text-purple-600 hover:underline"
                          >
                            View Workout
                          </a>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                          <h4 className="font-medium text-gray-800 mb-1">
                            Phase 2: Weeks 5-8
                          </h4>
                          <p className="text-xs text-gray-600 mb-2">
                            Increase weight, 3 sets of 8-12 reps, add 1-2 new
                            exercises
                          </p>
                          <a
                            href="#"
                            className="text-xs text-purple-600 hover:underline"
                          >
                            View Workout
                          </a>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-purple-800 mb-3">
                        Progression Strategy
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
                            <span>
                              Increase weight when you can complete all reps
                              with good form
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
                            <span>Add 1 set per exercise every 2 weeks</span>
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
                              Reduce rest periods from 90s to 60s as you advance
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
                              After 12 weeks, transition to intermediate program
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Program Tracking */}
                  <div className="bg-white border border-gray-200 rounded-lg p-5">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Tracking Your Progress
                    </h3>
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-1">
                        <div className="flex items-start mb-2">
                          <span className="bg-purple-100 text-purple-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            1
                          </span>
                          <p className="text-sm text-gray-600">
                            Keep a workout log (exercise, weight, reps, sets)
                          </p>
                        </div>
                        <div className="flex items-start mb-2">
                          <span className="bg-purple-100 text-purple-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            2
                          </span>
                          <p className="text-sm text-gray-600">
                            Take monthly progress photos
                          </p>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start mb-2">
                          <span className="bg-purple-100 text-purple-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            3
                          </span>
                          <p className="text-sm text-gray-600">
                            Measure strength gains (track 1RM on key lifts)
                          </p>
                        </div>
                        <div className="flex items-start">
                          <span className="bg-purple-100 text-purple-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            4
                          </span>
                          <p className="text-sm text-gray-600">
                            Note how clothes fit and energy levels
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* Equipment Guide Section */}
            <section className="bg-white rounded-xl shadow-md mb-10 p-6">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                Essential Equipment Guide
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Home Gym */}
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-5 border border-blue-100">
                  <h3 className="font-semibold text-blue-800 mb-3">
                    Home Gym Essentials
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
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
                      <span className="text-sm text-gray-700">
                        Adjustable dumbbells (save space)
                      </span>
                    </div>
                    <div className="flex items-start">
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
                      <span className="text-sm text-gray-700">
                        Resistance bands (versatile and portable)
                      </span>
                    </div>
                    <div className="flex items-start">
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
                      <span className="text-sm text-gray-700">
                        Yoga mat (for floor exercises)
                      </span>
                    </div>
                    <div className="flex items-start">
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
                      <span className="text-sm text-gray-700">
                        Pull-up bar (doorway mounted)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Gym Equipment */}
                <div className="bg-gradient-to-br from-purple-50 to-white rounded-lg p-5 border border-purple-100">
                  <h3 className="font-semibold text-purple-800 mb-3">
                    Gym Equipment Guide
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
                        Barbell and plates (for compound lifts)
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
                        Power rack (safety for squats/bench)
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
                        Cable machine (versatile resistance)
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
                        Bench (adjustable preferred)
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-gradient-to-r from-teal-50 to-white p-5 rounded-lg border border-teal-200">
                <h3 className="font-semibold text-teal-800 mb-3">
                  Budget-Friendly Options
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="text-sm font-medium text-teal-700 mb-1">
                      Bodyweight Only
                    </h4>
                    <p className="text-xs text-gray-600">
                      Push-ups, pull-ups, squats, lunges, dips
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-teal-700 mb-1">
                      Minimal Equipment
                    </h4>
                    <p className="text-xs text-gray-600">
                      Resistance bands, suspension trainer, sandbags
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-teal-700 mb-1">
                      Secondhand Gear
                    </h4>
                    <p className="text-xs text-gray-600">
                      Check Craigslist, Facebook Marketplace for deals
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Final Takeaways */}
            <section className="bg-white rounded-xl shadow-md mb-10 p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                Key Training Takeaways
              </h2>

              <div className="bg-orange-50 p-5 rounded-lg mb-5">
                <h3 className="text-lg font-semibold text-orange-800 mb-3">
                  Fundamentals for Success
                </h3>
                <ol className="space-y-3">
                  {[
                    "Consistency matters more than perfection - aim for 80% adherence",
                    "Progressive overload is the key driver of muscle growth",
                    "Compound movements should form the foundation of your program",
                    "Proper form prevents injuries and ensures muscle activation",
                    "Recovery is when muscles grow - don't skip rest days",
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
                  Next Steps in Your Fitness Journey
                </h3>
                <p className="text-sm text-gray-700 mb-3">
                  After 3-6 months of consistent training, consider
                  transitioning to an intermediate program with more
                  specialization. Track your progress meticulously and don't be
                  afraid to adjust your approach based on results. Remember that
                  fitness is a marathon, not a sprint - sustainable habits will
                  yield the best long-term results.
                </p>
                <p className="text-sm text-gray-700">
                  Whether your goal is strength, hypertrophy, or general
                  fitness, the principles remain the same: train hard, recover
                  well, eat properly, and stay consistent. The weights will feel
                  lighter, the movements will become smoother, and your
                  confidence will grow with each workout.
                </p>
              </div>
            </section>
            <section
              className="bg-white rounded-xl shadow-md mb-8 overflow-hidden border border-gray-200"
              onClick={() => toggleSection("mistakes")}
            >
              <div className="flex justify-between items-center bg-gradient-to-r from-red-50 to-white p-5 cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-red-100 p-2 rounded-lg mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-red-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    Common Beginner Mistakes
                  </h2>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    expandedSections.mistakes ? "rotate-180" : ""
                  }`}
                />
              </div>

              {expandedSections.mistakes && (
                <div className="p-5 pt-0">
                  {/* Mistake Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="font-semibold text-red-800 mb-3">
                        Form Errors
                      </h3>
                      <div className="space-y-4">
                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                          <h4 className="font-medium text-gray-800 mb-1">
                            Rounded Back Deadlifts
                          </h4>
                          <p className="text-xs text-gray-600 mb-2">
                            Increases injury risk - keep spine neutral
                          </p>
                          <div className="bg-red-50 p-2 rounded text-xs text-red-800">
                            <span className="font-medium">Fix:</span> Engage
                            lats, push hips back, maintain flat back
                          </div>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                          <h4 className="font-medium text-gray-800 mb-1">
                            Partial Range Squats
                          </h4>
                          <p className="text-xs text-gray-600 mb-2">
                            Reduces effectiveness - thighs should reach parallel
                          </p>
                          <div className="bg-red-50 p-2 rounded text-xs text-red-800">
                            <span className="font-medium">Fix:</span> Lower
                            weight, focus on depth, use box squats
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-red-800 mb-3">
                        Training Errors
                      </h3>
                      <div className="space-y-4">
                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                          <h4 className="font-medium text-gray-800 mb-1">
                            Skipping Warm-ups
                          </h4>
                          <p className="text-xs text-gray-600 mb-2">
                            Increases injury risk and reduces performance
                          </p>
                          <div className="bg-red-50 p-2 rounded text-xs text-red-800">
                            <span className="font-medium">Fix:</span> 5-10 min
                            dynamic warm-up, 2 light sets per exercise
                          </div>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                          <h4 className="font-medium text-gray-800 mb-1">
                            Training to Failure
                          </h4>
                          <p className="text-xs text-gray-600 mb-2">
                            Impairs recovery without additional benefit
                          </p>
                          <div className="bg-red-50 p-2 rounded text-xs text-red-800">
                            <span className="font-medium">Fix:</span> Stop 1-2
                            reps short of failure, especially as beginner
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Visual Comparison */}
                  <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Proper vs Improper Form
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gradient-to-br from-red-50 to-white p-4 rounded border border-red-100">
                        <h4 className="text-sm font-medium text-red-700 mb-2">
                          ❌ Common Errors
                        </h4>
                        <ul className="text-xs text-gray-700 space-y-1">
                          <li>• Rounded back during lifts</li>
                          <li>• Knees caving in during squats</li>
                          <li>• Overarching lower back on bench</li>
                          <li>• Using momentum instead of control</li>
                        </ul>
                      </div>
                      <div className="bg-gradient-to-br from-green-50 to-white p-4 rounded border border-green-100">
                        <h4 className="text-sm font-medium text-green-700 mb-2">
                          ✅ Proper Technique
                        </h4>
                        <ul className="text-xs text-gray-700 space-y-1">
                          <li>• Neutral spine throughout</li>
                          <li>• Knees tracking over toes</li>
                          <li>• Shoulder blades retracted</li>
                          <li>• Controlled tempo (2s up, 2s down)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </section>
            <section
              className="bg-white rounded-xl shadow-md mb-8 overflow-hidden border border-gray-200"
              onClick={() => toggleSection("advanced")}
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
                        d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    Advanced Training Techniques
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
                  {/* Technique Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="font-semibold text-purple-800 mb-3">
                        Progression Methods
                      </h3>
                      <div className="space-y-4">
                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                          <h4 className="font-medium text-gray-800 mb-1">
                            Double Progression
                          </h4>
                          <p className="text-xs text-gray-600">
                            Master rep range (e.g., 8-12 reps) then increase
                            weight
                          </p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                          <h4 className="font-medium text-gray-800 mb-1">
                            Cluster Sets
                          </h4>
                          <p className="text-xs text-gray-600">
                            Short rest (10-20s) between mini-sets within one set
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-purple-800 mb-3">
                        Intensity Techniques
                      </h3>
                      <div className="space-y-4">
                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                          <h4 className="font-medium text-gray-800 mb-1">
                            Drop Sets
                          </h4>
                          <p className="text-xs text-gray-600">
                            Immediately reduce weight after failure for extra
                            reps
                          </p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                          <h4 className="font-medium text-gray-800 mb-1">
                            Eccentric Focus
                          </h4>
                          <p className="text-xs text-gray-600">
                            Slow lowering phase (3-5s) to increase time under
                            tension
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* When to Implement */}
                  <div className="bg-purple-50 rounded-lg p-5 mb-6">
                    <h3 className="font-semibold text-purple-800 mb-3">
                      When to Use These Techniques
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                      <div className="bg-white p-3 rounded border border-purple-100">
                        <h4 className="font-medium text-purple-700">
                          After 6 Months
                        </h4>
                        <p>Basic double progression</p>
                      </div>
                      <div className="bg-white p-3 rounded border border-purple-100">
                        <h4 className="font-medium text-purple-700">
                          After 1 Year
                        </h4>
                        <p>Drop sets, eccentric training</p>
                      </div>
                      <div className="bg-white p-3 rounded border border-purple-100">
                        <h4 className="font-medium text-purple-700">
                          Advanced
                        </h4>
                        <p>Cluster sets, advanced splits</p>
                      </div>
                    </div>
                  </div>

                  {/* Technique Visual Guide */}
                  <div className="bg-white border border-gray-200 rounded-lg p-5">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Sample Advanced Workout
                    </h3>
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-1">
                        <div className="flex items-start mb-2">
                          <span className="bg-purple-100 text-purple-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            1
                          </span>
                          <p className="text-sm text-gray-600">
                            Squats: 4x6 (3s eccentric)
                          </p>
                        </div>
                        <div className="flex items-start mb-2">
                          <span className="bg-purple-100 text-purple-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            2
                          </span>
                          <p className="text-sm text-gray-600">
                            Bench Press: 3x8-12 with drop set on last set
                          </p>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start mb-2">
                          <span className="bg-purple-100 text-purple-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            3
                          </span>
                          <p className="text-sm text-gray-600">
                            Pull-ups: Cluster sets (3x(3x3) with 15s rest
                          </p>
                        </div>
                        <div className="flex items-start">
                          <span className="bg-purple-100 text-purple-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            4
                          </span>
                          <p className="text-sm text-gray-600">
                            Rest 2-3 minutes between main sets
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
                    Injury Prevention & Recovery
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
                  {/* Recovery Basics */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Essential Recovery Practices
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-teal-700 mb-2">
                          Sleep Quality
                        </h4>
                        <p className="text-xs text-gray-600">
                          7-9 hours nightly for optimal muscle repair and
                          hormone balance
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-teal-700 mb-2">
                          Active Recovery
                        </h4>
                        <p className="text-xs text-gray-600">
                          Light walks, yoga, or swimming on rest days
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-teal-700 mb-2">
                          Hydration
                        </h4>
                        <p className="text-xs text-gray-600">
                          Muscle tissue is 75% water - drink 0.5-1oz per lb body
                          weight
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-teal-700 mb-2">
                          Mobility Work
                        </h4>
                        <p className="text-xs text-gray-600">
                          10-15 minutes daily dynamic stretching
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-teal-700 mb-2">
                          Deload Weeks
                        </h4>
                        <p className="text-xs text-gray-600">
                          Every 6-8 weeks, reduce volume by 40-60%
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-teal-700 mb-2">
                          Nutrition Timing
                        </h4>
                        <p className="text-xs text-gray-600">
                          Protein + carbs within 1 hour post-workout
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Injury Prevention */}
                  <div className="bg-teal-50 rounded-lg p-5 mb-6">
                    <h3 className="font-semibold text-teal-800 mb-3">
                      Injury Prevention Checklist
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-medium text-teal-700 mb-1">
                          Pre-Workout
                        </h4>
                        <ul className="text-xs text-gray-700 space-y-1">
                          <li>• 5-10 minute general warm-up</li>
                          <li>• 2-3 warm-up sets per exercise</li>
                          <li>• Dynamic stretches for target muscles</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-teal-700 mb-1">
                          During Workout
                        </h4>
                        <ul className="text-xs text-gray-700 space-y-1">
                          <li>• Maintain proper form at all times</li>
                          <li>• Use spotters for heavy lifts</li>
                          <li>
                            • Stop if you feel sharp pain (not discomfort)
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Recovery Protocols */}
                  <div className="bg-white border border-gray-200 rounded-lg p-5">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Common Injuries & Rehab
                    </h3>
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-1">
                        <div className="flex items-start mb-2">
                          <span className="bg-teal-100 text-teal-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            1
                          </span>
                          <p className="text-sm text-gray-600">
                            Rotator Cuff: Band pull-aparts, face pulls, reduce
                            overhead work
                          </p>
                        </div>
                        <div className="flex items-start mb-2">
                          <span className="bg-teal-100 text-teal-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            2
                          </span>
                          <p className="text-sm text-gray-600">
                            Lower Back: Strengthen core, improve hip mobility,
                            perfect deadlift form
                          </p>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start mb-2">
                          <span className="bg-teal-100 text-teal-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            3
                          </span>
                          <p className="text-sm text-gray-600">
                            Knee Pain: Strengthen glutes, improve squat depth,
                            reduce running
                          </p>
                        </div>
                        <div className="flex items-start">
                          <span className="bg-teal-100 text-teal-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            4
                          </span>
                          <p className="text-sm text-gray-600">
                            Always consult a sports medicine professional for
                            persistent pain
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
                      Updated on June 15, 2024
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-orange-50 rounded-lg p-6 mb-8">
              <div className="mb-4">
                <h3 className="text-sm font-bold text-orange-800 uppercase tracking-wide mb-2">
                  FITNESS NEWSLETTER
                </h3>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Get weekly workout tips
                </h4>
                <p className="text-gray-700 text-sm">
                  Receive exercise guides, form videos, and program
                  recommendations straight to your inbox.
                </p>
              </div>

              <form onSubmit={handleEmailSubmit} className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200"
                >
                  SUBSCRIBE
                </button>
              </form>

              <p className="text-xs text-gray-600 mt-3">
                Your{" "}
                <a href="#" className="text-orange-600 hover:underline">
                  privacy
                </a>{" "}
                is important to us
              </p>
            </div>

            {/* Workout Resources */}
            <div className="bg-white rounded-lg p-6 mb-8 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Workout Resources
              </h3>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <h4 className="font-medium text-gray-800">Form Videos</h4>
                  <a
                    href="#"
                    className="text-blue-600 text-sm hover:underline block"
                  >
                    Essential Exercise Tutorials
                  </a>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-medium text-gray-800">Printable Plans</h4>
                  <a
                    href="#"
                    className="text-blue-600 text-sm hover:underline block"
                  >
                    12-Week Beginner Program
                  </a>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-medium text-gray-800">
                    Progress Tracker
                  </h4>
                  <a
                    href="#"
                    className="text-blue-600 text-sm hover:underline block"
                  >
                    Downloadable Workout Log
                  </a>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Community</h4>
                  <a
                    href="#"
                    className="text-blue-600 text-sm hover:underline block"
                  >
                    Beginner Lifters Forum
                  </a>
                </div>
              </div>
            </div>

            {/* Educational Resources */}
            <div className="bg-white rounded-lg p-6 mb-8 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Recommended Reading
              </h3>
              <div className="space-y-3">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h4 className="text-sm font-medium text-blue-700 mb-1">
                    Strength Training 101
                  </h4>
                  <a
                    href="#"
                    className="text-xs text-blue-600 hover:underline block"
                  >
                    Complete Guide to Getting Started
                  </a>
                </div>
                <div className="bg-orange-50 p-3 rounded-lg">
                  <h4 className="text-sm font-medium text-orange-700 mb-1">
                    Nutrition for Lifters
                  </h4>
                  <a
                    href="#"
                    className="text-xs text-orange-600 hover:underline block"
                  >
                    Muscle Building Meal Plans
                  </a>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <h4 className="text-sm font-medium text-purple-700 mb-1">
                    Form Fixes
                  </h4>
                  <a
                    href="#"
                    className="text-xs text-purple-600 hover:underline block"
                  >
                    Common Mistakes and Corrections
                  </a>
                </div>
                <div className="bg-teal-50 p-3 rounded-lg">
                  <h4 className="text-sm font-medium text-teal-700 mb-1">
                    Home Workouts
                  </h4>
                  <a
                    href="#"
                    className="text-xs text-teal-600 hover:underline block"
                  >
                    No-Equipment Training Guide
                  </a>
                </div>
              </div>
            </div>

            {/* Downloadable Resources */}
            <div className="bg-white rounded-lg p-6 mb-8 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Free Workout Tools
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
                      Workout Planner
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
                      Exercise Library
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
                      Progress Tracker
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
                <h4 className="font-bold mb-2">Personal Training App</h4>
                <p className="text-sm mb-4">
                  Customized workouts and form coaching in your pocket
                </p>
                <button className="bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded text-sm font-medium transition-colors">
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
