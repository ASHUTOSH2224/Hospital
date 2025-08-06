"use client";

import { useState } from "react";
import {
  Dumbbell,
  Target,
  CircleDot,
  Award,
  Clock,
  UserCheck,
  HeartPulse,
  Calendar,
  ChevronDown,
  ChevronRight,
  ListOrdered,
Utensils,
Handshake,
} from "lucide-react";

export default function FitnessArticle6() {
  const [email, setEmail] = useState("");
  const [activeTab, setActiveTab] = useState("Introduction");
  const [expandedSections, setExpandedSections] = useState({
    qualifications: true,
    philosophy: false,
    program: false,
    safety: false,
    results: false,
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
    "Qualifications",
    "Training Philosophy",
    "Program Design",
    "Safety & Progress",
    "Results & Communication",
    "Key Takeaways",
  ];

  return (
    <div className="min-h-screen bg-white mt-36 lg:mt-32 pt-4 sm:pt-8 md:pt-12 lg:pt-16 xl:pt-20">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header Section */}
            <div className="mb-6 sm:mb-8 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6 text-black">
              <div className="flex items-start">
                <div className="bg-white bg-opacity-20 p-3 rounded-lg mr-4">
                  <Dumbbell className="w-8 h-8 text-orange-600" />
                </div>
                <div>
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight">
                    Essential Questions to Ask Your Personal Trainer
                  </h1>
                  <p className="text-lg sm:text-xl text-gray-800 font-medium">
                    Prepare for your fitness journey with this comprehensive
                    list of important questions about training philosophy,
                    certifications, experience, and program customization
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Tabs */}
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
                        <Dumbbell className="w-4 h-4 mr-1" />
                      )}
                      {tab === "Qualifications" && (
                        <Award className="w-4 h-4 mr-1" />
                      )}
                      {tab === "Training Philosophy" && (
                        <Target className="w-4 h-4 mr-1" />
                      )}
                      {tab === "Program Design" && (
                        <UserCheck className="w-4 h-4 mr-1" />
                      )}
                      {tab === "Safety & Progress" && (
                        <HeartPulse className="w-4 h-4 mr-1" />
                      )}
                      {tab === "Results & Communication" && (
                        <Clock className="w-4 h-4 mr-1" />
                      )}
                      {tab}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Introduction Section */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 mb-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-2/3">
                  <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-4 leading-relaxed">
                    Choosing the right personal trainer is crucial for achieving
                    your fitness goals safely and effectively. This
                    comprehensive guide provides 35+ essential questions across
                    six key categories to help you evaluate trainers'
                    qualifications, approach, and compatibility with your needs.
                    Asking these questions will ensure you find a professional
                    who can create a personalized program aligned with your
                    objectives, limitations, and preferences.
                  </p>
                  <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-400">
                    <p className="text-sm text-orange-800 font-medium">
                      "The right trainer-client relationship can mean the
                      difference between achieving your goals and becoming
                      another dropout statistic. Asking detailed questions
                      upfront prevents mismatches." - American Council on
                      Exercise
                    </p>
                  </div>
                </div>
                <div className="md:w-1/3 bg-gradient-to-br from-orange-50 to-white rounded-lg p-4 flex flex-col items-center justify-center border border-orange-100">
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div className="bg-white p-3 rounded-lg shadow-xs border border-gray-100 flex flex-col items-center">
                      <Award className="w-6 h-6 text-orange-600 mb-1" />
                      <span className="text-xs text-center">
                        Certifications
                      </span>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-xs border border-gray-100 flex flex-col items-center">
                      <Target className="w-6 h-6 text-amber-600 mb-1" />
                      <span className="text-xs text-center">Philosophy</span>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-xs border border-gray-100 flex flex-col items-center">
                      <UserCheck className="w-6 h-6 text-blue-600 mb-1" />
                      <span className="text-xs text-center">Customization</span>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-xs border border-gray-100 flex flex-col items-center">
                      <HeartPulse className="w-6 h-6 text-red-600 mb-1" />
                      <span className="text-xs text-center">Safety</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 text-center">
                    Key areas to evaluate in a personal trainer
                  </p>
                </div>
              </div>
            </div>

            {/* Qualifications Section */}
            <section
              className="bg-white rounded-xl shadow-md mb-8 overflow-hidden border border-gray-200"
              onClick={() => toggleSection("qualifications")}
            >
              <div className="flex justify-between items-center bg-gradient-to-r from-orange-50 to-white p-5 cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-orange-100 p-2 rounded-lg mr-4">
                    <Award className="w-5 h-5 text-orange-600" />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    Trainer Qualifications & Experience
                  </h2>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    expandedSections.qualifications ? "rotate-180" : ""
                  }`}
                />
              </div>

              {expandedSections.qualifications && (
                <div className="p-5 pt-0">
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Essential Credential Questions
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <div className="bg-orange-100 p-1 rounded-full mr-3">
                            <span className="text-orange-600 text-xs font-bold">
                              1
                            </span>
                          </div>
                          <h4 className="font-medium text-gray-800">
                            What certifications do you hold?
                          </h4>
                        </div>
                        <p className="text-sm text-gray-600">
                          Look for accredited certifications like NASM, ACE,
                          ACSM, or NSCA. These require ongoing education and
                          testing.
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <div className="bg-orange-100 p-1 rounded-full mr-3">
                            <span className="text-orange-600 text-xs font-bold">
                              2
                            </span>
                          </div>
                          <h4 className="font-medium text-gray-800">
                            Are you CPR/AED certified?
                          </h4>
                        </div>
                        <p className="text-sm text-gray-600">
                          Non-negotiable for safety. Certification should be
                          current (renewed every 2 years).
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <div className="bg-orange-100 p-1 rounded-full mr-3">
                            <span className="text-orange-600 text-xs font-bold">
                              3
                            </span>
                          </div>
                          <h4 className="font-medium text-gray-800">
                            How long have you been training clients?
                          </h4>
                        </div>
                        <p className="text-sm text-gray-600">
                          Experience matters, but don't discount passionate new
                          trainers with proper education.
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <div className="bg-orange-100 p-1 rounded-full mr-3">
                            <span className="text-orange-600 text-xs font-bold">
                              4
                            </span>
                          </div>
                          <h4 className="font-medium text-gray-800">
                            Do you have experience with clients like me?
                          </h4>
                        </div>
                        <p className="text-sm text-gray-600">
                          Ask about age, fitness level, injuries, or conditions
                          similar to yours.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-orange-50 rounded-lg p-5 mb-4">
                    <h3 className="font-semibold text-orange-800 mb-3">
                      Red Flags in Trainer Qualifications
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-white p-3 rounded-lg border border-orange-100">
                        <h4 className="text-sm font-medium text-orange-700 mb-1">
                          No Certification
                        </h4>
                        <p className="text-xs text-gray-700">
                          Anyone can call themselves a "trainer" - insist on
                          proof of accredited certification
                        </p>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-orange-100">
                        <h4 className="text-sm font-medium text-orange-700 mb-1">
                          Expired Certifications
                        </h4>
                        <p className="text-xs text-gray-700">
                          CPR/AED or training certs older than 2-4 years
                          (depending on organization)
                        </p>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-orange-100">
                        <h4 className="text-sm font-medium text-orange-700 mb-1">
                          No Insurance
                        </h4>
                        <p className="text-xs text-gray-700">
                          Professional liability insurance is essential for your
                          protection
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-5">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Specialization Questions
                    </h3>
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-1">
                        <div className="flex items-start mb-2">
                          <span className="bg-orange-100 text-orange-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            1
                          </span>
                          <p className="text-sm text-gray-600">
                            Do you specialize in any particular training methods
                            (e.g., HIIT, strength, mobility)?
                          </p>
                        </div>
                        <div className="flex items-start mb-2">
                          <span className="bg-orange-100 text-orange-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            2
                          </span>
                          <p className="text-sm text-gray-600">
                            Have you worked with clients who have [your specific
                            condition/injury]?
                          </p>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start mb-2">
                          <span className="bg-orange-100 text-orange-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            3
                          </span>
                          <p className="text-sm text-gray-600">
                            What continuing education have you completed
                            recently?
                          </p>
                        </div>
                        <div className="flex items-start">
                          <span className="bg-orange-100 text-orange-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            4
                          </span>
                          <p className="text-sm text-gray-600">
                            Can you provide references from clients with similar
                            goals?
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* Training Philosophy Section */}
            <section
              className="bg-white rounded-xl shadow-md mb-8 overflow-hidden border border-gray-200"
              onClick={() => toggleSection("philosophy")}
            >
              <div className="flex justify-between items-center bg-gradient-to-r from-amber-50 to-white p-5 cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-amber-100 p-2 rounded-lg mr-4">
                    <Target className="w-5 h-5 text-amber-600" />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    Training Philosophy & Approach
                  </h2>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    expandedSections.philosophy ? "rotate-180" : ""
                  }`}
                />
              </div>

              {expandedSections.philosophy && (
                <div className="p-5 pt-0">
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Core Philosophy Questions
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full bg-white rounded-lg overflow-hidden">
                        <thead className="bg-amber-100">
                          <tr>
                            <th className="py-2 px-4 text-left text-xs font-medium text-amber-800">
                              Question
                            </th>
                            <th className="py-2 px-4 text-left text-xs font-medium text-amber-800">
                              What to Listen For
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 text-xs">
                          <tr>
                            <td className="py-3 px-4 font-medium text-gray-800">
                              How do you assess new clients?
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Comprehensive initial assessment including
                              movement screens, health history, and goal setting
                            </td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="py-3 px-4 font-medium text-gray-800">
                              What's your training philosophy?
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Alignment with your preferences (e.g.,
                              evidence-based, holistic, sport-specific)
                            </td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 font-medium text-gray-800">
                              How do you modify programs for different fitness
                              levels?
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Clear progression/regression strategies for all
                              exercises
                            </td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="py-3 px-4 font-medium text-gray-800">
                              What's your view on nutrition advice?
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Appropriate scope (most trainers shouldn't
                              prescribe diets unless RD-certified)
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="font-semibold text-amber-800 mb-3">
                        Approach to Client Goals
                      </h3>
                      <div className="space-y-4">
                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                          <h4 className="font-medium text-gray-800 mb-1">
                            How do you help clients stay motivated?
                          </h4>
                          <p className="text-xs text-gray-600">
                            Look for specific strategies beyond generic "I
                            encourage them"
                          </p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                          <h4 className="font-medium text-gray-800 mb-1">
                            How do you balance challenge with safety?
                          </h4>
                          <p className="text-xs text-gray-600">
                            Should emphasize proper form over heavy weights or
                            intensity
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-amber-800 mb-3">
                        Philosophy Red Flags
                      </h3>
                      <div className="bg-amber-50 rounded-lg p-4 h-full">
                        <ul className="space-y-3 text-sm">
                          <li className="flex items-start">
                            <span className="bg-amber-100 text-amber-800 rounded-full p-1 mr-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-3 w-3"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                            <span>
                              "No pain, no gain" mentality - should emphasize
                              progressive overload safely
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-amber-100 text-amber-800 rounded-full p-1 mr-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-3 w-3"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                            <span>
                              One-size-fits-all programs without individual
                              assessment
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-amber-100 text-amber-800 rounded-full p-1 mr-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-3 w-3"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                            <span>
                              Promising unrealistic results (e.g., "Lose 30lbs
                              in 30 days")
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-5">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Additional Philosophy Questions
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-medium text-amber-700 mb-1">
                          Client-Centered Approach
                        </h4>
                        <ul className="text-xs text-gray-700 space-y-1">
                          <li>
                            • How do you incorporate client preferences into
                            programs?
                          </li>
                          <li>
                            • What's your process for adjusting programs based
                            on feedback?
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-amber-700 mb-1">
                          Scientific Foundation
                        </h4>
                        <ul className="text-xs text-gray-700 space-y-1">
                          <li>
                            • What research informs your training methods?
                          </li>
                          <li>
                            • How do you stay current with exercise science?
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* Program Design Section */}
            <section
              className="bg-white rounded-xl shadow-md mb-8 overflow-hidden border border-gray-200"
              onClick={() => toggleSection("program")}
            >
              <div className="flex justify-between items-center bg-gradient-to-r from-blue-50 to-white p-5 cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-lg mr-4">
                    <UserCheck className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    Program Design & Customization
                  </h2>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    expandedSections.program ? "rotate-180" : ""
                  }`}
                />
              </div>

              {expandedSections.program && (
                <div className="p-5 pt-0">
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Program Structure Questions
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <div className="bg-blue-100 p-1 rounded-full mr-3">
                            <span className="text-blue-600 text-xs font-bold">
                              1
                            </span>
                          </div>
                          <h4 className="font-medium text-gray-800">
                            How do you create personalized programs?
                          </h4>
                        </div>
                        <p className="text-sm text-gray-600">
                          Should consider goals, movement assessment, injury
                          history, schedule, equipment access
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <div className="bg-blue-100 p-1 rounded-full mr-3">
                            <span className="text-blue-600 text-xs font-bold">
                              2
                            </span>
                          </div>
                          <h4 className="font-medium text-gray-800">
                            How often do you change workout routines?
                          </h4>
                        </div>
                        <p className="text-sm text-gray-600">
                          Ideal is every 4-6 weeks with progressive overload in
                          between
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <div className="bg-blue-100 p-1 rounded-full mr-3">
                            <span className="text-blue-600 text-xs font-bold">
                              3
                            </span>
                          </div>
                          <h4 className="font-medium text-gray-800">
                            Do you provide workouts for non-training days?
                          </h4>
                        </div>
                        <p className="text-sm text-gray-600">
                          Good trainers provide guidance for recovery and
                          complementary activities
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <div className="bg-blue-100 p-1 rounded-full mr-3">
                            <span className="text-blue-600 text-xs font-bold">
                              4
                            </span>
                          </div>
                          <h4 className="font-medium text-gray-800">
                            How do you track progress beyond the scale?
                          </h4>
                        </div>
                        <p className="text-sm text-gray-600">
                          Look for multiple metrics: strength gains, endurance,
                          mobility, body measurements
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-5 mb-4">
                    <h3 className="font-semibold text-blue-800 mb-3">
                      Customization Factors
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-white p-3 rounded-lg border border-blue-100">
                        <h4 className="text-sm font-medium text-blue-700 mb-1">
                          Injury History
                        </h4>
                        <p className="text-xs text-gray-700">
                          How they modify for past/current injuries
                        </p>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-blue-100">
                        <h4 className="text-sm font-medium text-blue-700 mb-1">
                          Equipment Access
                        </h4>
                        <p className="text-xs text-gray-700">
                          Home vs gym equipment options
                        </p>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-blue-100">
                        <h4 className="text-sm font-medium text-blue-700 mb-1">
                          Time Commitment
                        </h4>
                        <p className="text-xs text-gray-700">
                          Realistic programming for your schedule
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-5">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Additional Program Questions
                    </h3>
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-1">
                        <div className="flex items-start mb-2">
                          <span className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            1
                          </span>
                          <p className="text-sm text-gray-600">
                            How do you balance strength, cardio, and flexibility
                            in programs?
                          </p>
                        </div>
                        <div className="flex items-start mb-2">
                          <span className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            2
                          </span>
                          <p className="text-sm text-gray-600">
                            What's your approach to deload weeks or recovery
                            periods?
                          </p>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start mb-2">
                          <span className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            3
                          </span>
                          <p className="text-sm text-gray-600">
                            Do you incorporate mobility and corrective
                            exercises?
                          </p>
                        </div>
                        <div className="flex items-start">
                          <span className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            4
                          </span>
                          <p className="text-sm text-gray-600">
                            How do you adjust programs when progress stalls?
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* Safety & Progress Section */}
            <section
              className="bg-white rounded-xl shadow-md mb-8 overflow-hidden border border-gray-200"
              onClick={() => toggleSection("safety")}
            >
              <div className="flex justify-between items-center bg-gradient-to-r from-red-50 to-white p-5 cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-red-100 p-2 rounded-lg mr-4">
                    <HeartPulse className="w-5 h-5 text-red-600" />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    Safety & Progress Tracking
                  </h2>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    expandedSections.safety ? "rotate-180" : ""
                  }`}
                />
              </div>

              {expandedSections.safety && (
                <div className="p-5 pt-0">
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Safety Protocol Questions
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <div className="bg-red-100 p-1 rounded-full mr-3">
                            <span className="text-red-600 text-xs font-bold">
                              1
                            </span>
                          </div>
                          <h4 className="font-medium text-gray-800">
                            What's your approach to spotting and safety with
                            heavy lifts?
                          </h4>
                        </div>
                        <p className="text-sm text-gray-600">
                          Should demonstrate knowledge of proper spotting
                          techniques
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <div className="bg-red-100 p-1 rounded-full mr-3">
                            <span className="text-red-600 text-xs font-bold">
                              2
                            </span>
                          </div>
                          <h4 className="font-medium text-gray-800">
                            How do you handle clients who experience pain during
                            exercise?
                          </h4>
                        </div>
                        <p className="text-sm text-gray-600">
                          Should differentiate between good discomfort and bad
                          pain
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <div className="bg-red-100 p-1 rounded-full mr-3">
                            <span className="text-red-600 text-xs font-bold">
                              3
                            </span>
                          </div>
                          <h4 className="font-medium text-gray-800">
                            What's your emergency action plan?
                          </h4>
                        </div>
                        <p className="text-sm text-gray-600">
                          Should have clear procedures for injuries or medical
                          emergencies
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <div className="bg-red-100 p-1 rounded-full mr-3">
                            <span className="text-red-600 text-xs font-bold">
                              4
                            </span>
                          </div>
                          <h4 className="font-medium text-gray-800">
                            How do you modify exercises for joint issues or
                            limitations?
                          </h4>
                        </div>
                        <p className="text-sm text-gray-600">
                          Should provide examples of alternative movements
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-red-50 rounded-lg p-5 mb-4">
                    <h3 className="font-semibold text-red-800 mb-3">
                      Progress Tracking Methods
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-white p-3 rounded-lg border border-red-100">
                        <h4 className="text-sm font-medium text-red-700 mb-1">
                          Quantitative
                        </h4>
                        <p className="text-xs text-gray-700">
                          Strength metrics, body measurements, performance tests
                        </p>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-red-100">
                        <h4 className="text-sm font-medium text-red-700 mb-1">
                          Qualitative
                        </h4>
                        <p className="text-xs text-gray-700">
                          Energy levels, sleep quality, mood improvements
                        </p>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-red-100">
                        <h4 className="text-sm font-medium text-red-700 mb-1">
                          Functional
                        </h4>
                        <p className="text-xs text-gray-700">
                          Daily activity ease, posture, movement quality
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-5">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Additional Safety Questions
                    </h3>
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-1">
                        <div className="flex items-start mb-2">
                          <span className="bg-red-100 text-red-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            1
                          </span>
                          <p className="text-sm text-gray-600">
                            How do you ensure proper form with new exercises?
                          </p>
                        </div>
                        <div className="flex items-start mb-2">
                          <span className="bg-red-100 text-red-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            2
                          </span>
                          <p className="text-sm text-gray-600">
                            What's your policy on training when sick or injured?
                          </p>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start mb-2">
                          <span className="bg-red-100 text-red-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            3
                          </span>
                          <p className="text-sm text-gray-600">
                            How often do you reassess mobility and movement
                            patterns?
                          </p>
                        </div>
                        <div className="flex items-start">
                          <span className="bg-red-100 text-red-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            4
                          </span>
                          <p className="text-sm text-gray-600">
                            Do you collaborate with healthcare providers when
                            needed?
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* Results & Communication Section */}
            <section
              className="bg-white rounded-xl shadow-md mb-8 overflow-hidden border border-gray-200"
              onClick={() => toggleSection("results")}
            >
              <div className="flex justify-between items-center bg-gradient-to-r from-green-50 to-white p-5 cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-green-100 p-2 rounded-lg mr-4">
                    <Clock className="w-5 h-5 text-green-600" />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    Results Expectations & Communication
                  </h2>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    expandedSections.results ? "rotate-180" : ""
                  }`}
                />
              </div>

              {expandedSections.results && (
                <div className="p-5 pt-0">
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Realistic Expectations
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <div className="bg-green-100 p-1 rounded-full mr-3">
                            <span className="text-green-600 text-xs font-bold">
                              1
                            </span>
                          </div>
                          <h4 className="font-medium text-gray-800">
                            What's a realistic timeline for my goals?
                          </h4>
                        </div>
                        <p className="text-sm text-gray-600">
                          Should provide science-based estimates, not quick-fix
                          promises
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <div className="bg-green-100 p-1 rounded-full mr-3">
                            <span className="text-green-600 text-xs font-bold">
                              2
                            </span>
                          </div>
                          <h4 className="font-medium text-gray-800">
                            How do you handle plateaus?
                          </h4>
                        </div>
                        <p className="text-sm text-gray-600">
                          Should discuss periodization and strategy adjustments
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <div className="bg-green-100 p-1 rounded-full mr-3">
                            <span className="text-green-600 text-xs font-bold">
                              3
                            </span>
                          </div>
                          <h4 className="font-medium text-gray-800">
                            What percentage of your clients achieve their main
                            goals?
                          </h4>
                        </div>
                        <p className="text-sm text-gray-600">
                          Beware of "100%" claims - should acknowledge
                          individual variability
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <div className="bg-green-100 p-1 rounded-full mr-3">
                            <span className="text-green-600 text-xs font-bold">
                              4
                            </span>
                          </div>
                          <h4 className="font-medium text-gray-800">
                            How do you define "success" for clients?
                          </h4>
                        </div>
                        <p className="text-sm text-gray-600">
                          Should align with your values beyond just physical
                          changes
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 rounded-lg p-5 mb-4">
                    <h3 className="font-semibold text-green-800 mb-3">
                      Communication & Support
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-white p-3 rounded-lg border border-green-100">
                        <h4 className="text-sm font-medium text-green-700 mb-1">
                          Session Communication
                        </h4>
                        <p className="text-xs text-gray-700">
                          How they explain exercises and provide feedback
                        </p>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-green-100">
                        <h4 className="text-sm font-medium text-green-700 mb-1">
                          Between-Session Support
                        </h4>
                        <p className="text-xs text-gray-700">
                          Availability for questions outside sessions
                        </p>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-green-100">
                        <h4 className="text-sm font-medium text-green-700 mb-1">
                          Progress Reviews
                        </h4>
                        <p className="text-xs text-gray-700">
                          Frequency and format of progress discussions
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-5">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Additional Communication Questions
                    </h3>
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-1">
                        <div className="flex items-start mb-2">
                          <span className="bg-green-100 text-green-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            1
                          </span>
                          <p className="text-sm text-gray-600">
                            How do you provide feedback during sessions?
                          </p>
                        </div>
                        <div className="flex items-start mb-2">
                          <span className="bg-green-100 text-green-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            2
                          </span>
                          <p className="text-sm text-gray-600">
                            What's your policy on texting/emailing between
                            sessions?
                          </p>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start mb-2">
                          <span className="bg-green-100 text-green-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            3
                          </span>
                          <p className="text-sm text-gray-600">
                            How do you handle client feedback about the program?
                          </p>
                        </div>
                        <div className="flex items-start">
                          <span className="bg-green-100 text-green-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            4
                          </span>
                          <p className="text-sm text-gray-600">
                            What's your cancellation/rescheduling policy?
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
                Key Takeaways for Choosing a Trainer
              </h2>

              <div className="bg-orange-50 p-5 rounded-lg mb-5">
                <h3 className="text-lg font-semibold text-orange-800 mb-3">
                  Essential Evaluation Criteria
                </h3>
                <ol className="space-y-3">
                  {[
                    "Certifications from accredited organizations (NASM, ACE, ACSM, NSCA)",
                    "CPR/AED certification and professional liability insurance",
                    "Experience with clients similar to you in age, goals, and limitations",
                    "Philosophy aligns with your preferences (e.g., evidence-based, holistic)",
                    "Clear communication style and teaching methods that work for you",
                    "Comprehensive initial assessment process",
                    "Customized program design based on your needs",
                    "Appropriate progress tracking methods",
                    "Realistic expectations about results timelines",
                    "Good personal rapport and motivational style",
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

              <div className="bg-green-50 p-5 rounded-lg">
                <h3 className="text-lg font-semibold text-green-800 mb-3">
                  Next Steps After Interviewing
                </h3>
                <p className="text-sm text-gray-700 mb-3">
                  After asking these questions, consider doing a trial session
                  with your top candidates. Pay attention to how they cue
                  movements, correct form, and explain concepts. Notice if their
                  communication style works for you and whether you feel
                  comfortable with their approach. Remember that the most
                  expensive trainer isn't necessarily the best for you - focus
                  on finding the right fit for your personality, goals, and
                  learning style.
                </p>
                <p className="text-sm text-gray-700">
                  A good trainer-client relationship should feel collaborative,
                  with the trainer listening to your feedback and adjusting as
                  needed. Don't be afraid to ask for references or before/after
                  examples from past clients with similar goals. The right
                  trainer will welcome your questions and be transparent about
                  their methods and expectations.
                </p>
              </div>
            </section>
            <section className="bg-white rounded-xl shadow-md mb-8 p-6 border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 p-2 rounded-lg mr-4">
                  <ListOrdered className="w-5 h-5 text-purple-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-800">
                  Training Session Structure
                </h2>
              </div>

              <h3 className="text-lg font-semibold text-purple-700 mb-3 border-b border-purple-100 pb-2">
                What to Expect During Your Workouts
              </h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="bg-purple-100 text-purple-800 rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 text-xs">
                    1
                  </span>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">
                      Warm-Up Protocol
                    </h4>
                    <ul className="text-sm text-gray-600 list-disc list-inside">
                      <li>Dynamic stretching tailored to your workout</li>
                      <li>5-10 minute cardio activation</li>
                      <li>Mobility drills for injury prevention</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="bg-purple-100 text-purple-800 rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 text-xs">
                    2
                  </span>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">
                      Main Workout
                    </h4>
                    <ul className="text-sm text-gray-600 list-disc list-inside">
                      <li>Strength training with progressive overload</li>
                      <li>Hybrid circuits for endurance athletes</li>
                      <li>Sport-specific skill development</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="bg-purple-100 text-purple-800 rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 text-xs">
                    3
                  </span>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">
                      Cool Down
                    </h4>
                    <ul className="text-sm text-gray-600 list-disc list-inside">
                      <li>Static stretching for recovery</li>
                      <li>Foam rolling demonstrations</li>
                      <li>Breathing exercises for relaxation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            <section className="bg-white rounded-xl shadow-md mb-8 p-6 border-2 border-teal-200">
              <div className="flex items-center mb-4">
                <div className="bg-teal-100 p-2 rounded-lg mr-4">
                  <Utensils className="w-5 h-5 text-teal-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-800">
                  Nutrition Guidance
                </h2>
              </div>

              <h3 className="text-lg font-semibold text-teal-700 mb-3 border-b border-teal-100 pb-2">
                How Trainers Approach Diet Advice
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-teal-50 p-4 rounded-lg">
                  <h4 className="font-medium text-teal-800 mb-2 flex items-center">
                    <CircleDot className="w-4 h-4 mr-2" /> Scope of Practice
                  </h4>
                  <ul className="text-sm text-gray-700 list-disc list-inside pl-5">
                    <li>Basic macronutrient education</li>
                    <li>Meal timing strategies</li>
                    <li>Hydration recommendations</li>
                    <li className="text-red-600">
                      Avoids prescribing diets (unless RD-certified)
                    </li>
                  </ul>
                </div>

                <div className="bg-teal-50 p-4 rounded-lg">
                  <h4 className="font-medium text-teal-800 mb-2 flex items-center">
                    <CircleDot className="w-4 h-4 mr-2" /> Common Approaches
                  </h4>
                  <ul className="text-sm text-gray-700 list-disc list-inside pl-5">
                    <li>Food journal analysis</li>
                    <li>Behavior change strategies</li>
                    <li>Supplement safety information</li>
                    <li>Restaurant eating guidelines</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 bg-white border border-teal-200 rounded-lg p-4">
                <h4 className="font-medium text-gray-800 mb-2">
                  Red Flags in Nutrition Advice
                </h4>
                <ul className="text-sm text-gray-600 list-disc list-inside pl-5 space-y-1">
                  <li>Promoting extreme calorie restrictions</li>
                  <li>Selling supplements aggressively</li>
                  <li>One-size-fits-all meal plans</li>
                  <li>Diagnosing food intolerances without medical input</li>
                </ul>
              </div>
            </section>
            <section className="bg-white rounded-xl shadow-md mb-8 p-6 border-l-4 border-blue-500">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-2 rounded-lg mr-4">
                  <Handshake className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-800">
                  Client-Trainer Relationship
                </h2>
              </div>

              <h3 className="text-lg font-semibold text-blue-700 mb-3">
                Building a Productive Partnership
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2 flex items-center">
                    <ChevronRight className="w-4 h-4 mr-2 text-blue-500" />
                    Communication Expectations
                  </h4>
                  <ul className="text-sm text-gray-600 list-disc list-inside pl-6 space-y-1">
                    <li>
                      <strong>Session feedback:</strong> How they provide
                      corrections and cues
                    </li>
                    <li>
                      <strong>Between-session contact:</strong> Email/text
                      response policies
                    </li>
                    <li>
                      <strong>Progress discussions:</strong> Frequency of formal
                      check-ins
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2 flex items-center">
                    <ChevronRight className="w-4 h-4 mr-2 text-blue-500" />
                    Motivational Strategies
                  </h4>
                  <ul className="text-sm text-gray-600 list-disc list-inside pl-6 space-y-1">
                    <li>
                      <strong>Accountability systems:</strong> Tracking methods
                      used
                    </li>
                    <li>
                      <strong>Positive reinforcement:</strong> How they
                      celebrate milestones
                    </li>
                    <li>
                      <strong>Setback management:</strong> Approach to missed
                      sessions or plateaus
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2 flex items-center">
                    <ChevronRight className="w-4 h-4 mr-2 text-blue-500" />
                    Professional Boundaries
                  </h4>
                  <ul className="text-sm text-gray-600 list-disc list-inside pl-6 space-y-1">
                    <li>
                      <strong>Session punctuality:</strong> Start/end time
                      policies
                    </li>
                    <li>
                      <strong>Payment structures:</strong> Package vs
                      single-session rates
                    </li>
                    <li>
                      <strong>Physical contact:</strong> Spotting and form
                      correction policies
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 lg:sticky lg:top-28 lg:self-start">
            {/* Author Info */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                  {/* <User className="w-8 h-8 text-gray-600" /> */}
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
                      Dr. James Wilson, Exercise Physiologist
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
                  FITNESS TIPS NEWSLETTER
                </h3>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Get more expert fitness advice
                </h4>
                <p className="text-gray-700 text-sm">
                  Monthly training tips, workout plans, and expert interviews
                  delivered to your inbox.
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

            {/* Trainer Certification Resources */}
            <div className="bg-white rounded-lg p-6 mb-8 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Trainer Certification Bodies
              </h3>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <h4 className="font-medium text-gray-800">
                    National Academy of Sports Medicine
                  </h4>
                  <a
                    href="#"
                    className="text-blue-600 text-sm hover:underline block"
                  >
                    NASM Certification
                  </a>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-medium text-gray-800">
                    American Council on Exercise
                  </h4>
                  <a
                    href="#"
                    className="text-blue-600 text-sm hover:underline block"
                  >
                    ACE Certification
                  </a>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-medium text-gray-800">
                    National Strength and Conditioning Association
                  </h4>
                  <a
                    href="#"
                    className="text-blue-600 text-sm hover:underline block"
                  >
                    NSCA Certification
                  </a>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">
                    American College of Sports Medicine
                  </h4>
                  <a
                    href="#"
                    className="text-blue-600 text-sm hover:underline block"
                  >
                    ACSM Certification
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
                      Trainer Interview Checklist
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
                      Fitness Goal Worksheet
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
                      Progress Tracking Template
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
                <h4 className="font-bold mb-2">Find Certified Trainers</h4>
                <p className="text-sm mb-4">
                  Our directory connects you with vetted professionals in your
                  area
                </p>
                <button className="bg-white hover:bg-gray-100 text-orange-600 px-4 py-2 rounded text-sm font-medium transition-colors">
                  SEARCH NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
