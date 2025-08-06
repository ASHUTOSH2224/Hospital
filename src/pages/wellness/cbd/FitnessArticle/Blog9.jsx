"use client";

import { useState } from "react";
import {
  Users,
  Dumbbell,
  HeartPulse,
  MessageSquare,
  ChevronDown,
  Calendar,
  User,
} from "lucide-react";

export default function FitnessArticle9() {
  const [email, setEmail] = useState("");
  const [activeTab, setActiveTab] = useState("Trainers");
  const [expandedSections, setExpandedSections] = useState({
    trainers: true,
    partners: false,
    providers: false,
    community: false,
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
    "Trainers",
    "Workout Partners",
    "Healthcare Team",
    "Community",
    "Online Resources",
    "Maintenance",
    "Success Stories",
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
                  <Users className="w-8 h-8 text-orange-600" />
                </div>
                <div>
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight">
                    Building Your Fitness Support Network
                  </h1>
                  <p className="text-lg sm:text-xl text-gray-800 font-medium">
                    Discover how to create a strong support system with
                    trainers, workout partners, healthcare providers, and
                    community resources for your fitness journey
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
                      {tab === "Trainers" && <User className="w-4 h-4 mr-1" />}
                      {tab === "Workout Partners" && (
                        <Users className="w-4 h-4 mr-1" />
                      )}
                      {tab === "Healthcare Team" && (
                        <HeartPulse className="w-4 h-4 mr-1" />
                      )}
                      {tab === "Community" && (
                        <MessageSquare className="w-4 h-4 mr-1" />
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
                    A well-constructed support network can increase your chances
                    of fitness success by 95%, according to the American College
                    of Sports Medicine. This comprehensive guide will walk you
                    through building each component of your fitness ecosystem,
                    from professional trainers to workout buddies, medical
                    support, and community resources that keep you motivated and
                    accountable.
                  </p>
                  <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-400">
                    <p className="text-sm text-orange-800 font-medium">
                      "Individuals with strong fitness support systems are 3
                      times more likely to maintain their exercise routines
                      long-term." - Journal of Sports Science & Medicine
                    </p>
                  </div>
                </div>
                <div className="md:w-1/3 bg-gradient-to-br from-orange-50 to-white rounded-lg p-4 flex flex-col items-center justify-center border border-orange-100">
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div className="bg-white p-3 rounded-lg shadow-xs border border-gray-100 flex flex-col items-center">
                      <User className="w-6 h-6 text-orange-600 mb-1" />
                      <span className="text-xs text-center">
                        Expert Guidance
                      </span>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-xs border border-gray-100 flex flex-col items-center">
                      <Users className="w-6 h-6 text-amber-600 mb-1" />
                      <span className="text-xs text-center">
                        Accountability
                      </span>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-xs border border-gray-100 flex flex-col items-center">
                      <HeartPulse className="w-6 h-6 text-red-600 mb-1" />
                      <span className="text-xs text-center">Health Safety</span>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-xs border border-gray-100 flex flex-col items-center">
                      <MessageSquare className="w-6 h-6 text-blue-600 mb-1" />
                      <span className="text-xs text-center">Community</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 text-center">
                    Four pillars of a complete fitness support system
                  </p>
                </div>
              </div>
            </div>

            {/* Trainers Section */}
            <section
              className="bg-white rounded-xl shadow-md mb-8 overflow-hidden border border-gray-200"
              onClick={() => toggleSection("trainers")}
            >
              <div className="flex justify-between items-center bg-gradient-to-r from-orange-50 to-white p-5 cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-orange-100 p-2 rounded-lg mr-4">
                    <User className="w-5 h-5 text-orange-600" />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    Finding the Right Trainer
                  </h2>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    expandedSections.trainers ? "rotate-180" : ""
                  }`}
                />
              </div>

              {expandedSections.trainers && (
                <div className="p-5 pt-0">
                  {/* Trainer Basics */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Why Professional Guidance Matters
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
                            Expertise
                          </h4>
                        </div>
                        <p className="text-sm text-gray-600">
                          Certified trainers reduce injury risk by 72% through
                          proper form instruction and program design tailored to
                          your abilities.
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
                            Progress Tracking
                          </h4>
                        </div>
                        <p className="text-sm text-gray-600">
                          Trainers provide objective measurements and adjust
                          programs based on your evolving fitness level and
                          goals.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Trainer Selection */}
                  <div className="bg-orange-50 rounded-lg p-5 mb-4">
                    <h3 className="font-semibold text-orange-800 mb-3">
                      Choosing Your Trainer: Key Considerations
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-white p-3 rounded-lg border border-orange-100">
                        <h4 className="text-sm font-medium text-orange-700 mb-1">
                          Certification
                        </h4>
                        <p className="text-xs text-gray-700">
                          Look for NASM, ACE, ACSM or other NCCA-accredited
                          certifications
                        </p>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-orange-100">
                        <h4 className="text-sm font-medium text-orange-700 mb-1">
                          Specialization
                        </h4>
                        <p className="text-xs text-gray-700">
                          Match their expertise with your goals (strength,
                          rehab, sports-specific)
                        </p>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-orange-100">
                        <h4 className="text-sm font-medium text-orange-700 mb-1">
                          Personality Fit
                        </h4>
                        <p className="text-xs text-gray-700">
                          Choose a coaching style that motivates you (tough vs
                          nurturing)
                        </p>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-orange-100">
                        <h4 className="text-sm font-medium text-orange-700 mb-1">
                          Availability
                        </h4>
                        <p className="text-xs text-gray-700">
                          Ensure their schedule aligns with your preferred
                          workout times
                        </p>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-orange-100">
                        <h4 className="text-sm font-medium text-orange-700 mb-1">
                          Location
                        </h4>
                        <p className="text-xs text-gray-700">
                          Convenient gym, park, or virtual training options
                        </p>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-orange-100">
                        <h4 className="text-sm font-medium text-orange-700 mb-1">
                          Cost
                        </h4>
                        <p className="text-xs text-gray-700">
                          Rates typically $50-$150/hour; group sessions reduce
                          cost
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Trainer Types */}
                  <div className="bg-white border border-gray-200 rounded-lg p-5">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Types of Fitness Professionals
                    </h3>
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-1">
                        <div className="flex items-start mb-2">
                          <span className="bg-orange-100 text-orange-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            1
                          </span>
                          <div>
                            <h4 className="font-medium text-gray-800">
                              Personal Trainer
                            </h4>
                            <p className="text-sm text-gray-600">
                              One-on-one customized programming and instruction
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start mb-2">
                          <span className="bg-orange-100 text-orange-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            2
                          </span>
                          <div>
                            <h4 className="font-medium text-gray-800">
                              Strength Coach
                            </h4>
                            <p className="text-sm text-gray-600">
                              Specializes in athletic performance and power
                              development
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start mb-2">
                          <span className="bg-orange-100 text-orange-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            3
                          </span>
                          <div>
                            <h4 className="font-medium text-gray-800">
                              Corrective Exercise Specialist
                            </h4>
                            <p className="text-sm text-gray-600">
                              Addresses muscle imbalances and movement
                              dysfunctions
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <span className="bg-orange-100 text-orange-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            4
                          </span>
                          <div>
                            <h4 className="font-medium text-gray-800">
                              Group Fitness Instructor
                            </h4>
                            <p className="text-sm text-gray-600">
                              Leads classes in specific modalities (yoga,
                              cycling, HIIT)
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* Workout Partners Section */}
            <section
              className="bg-white rounded-xl shadow-md mb-8 overflow-hidden border border-gray-200"
              onClick={() => toggleSection("partners")}
            >
              <div className="flex justify-between items-center bg-gradient-to-r from-amber-50 to-white p-5 cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-amber-100 p-2 rounded-lg mr-4">
                    <Users className="w-5 h-5 text-amber-600" />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    Finding Workout Partners
                  </h2>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    expandedSections.partners ? "rotate-180" : ""
                  }`}
                />
              </div>

              {expandedSections.partners && (
                <div className="p-5 pt-0">
                  {/* Partner Benefits */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      The Power of Workout Accountability
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full bg-white rounded-lg overflow-hidden">
                        <thead className="bg-amber-100">
                          <tr>
                            <th className="py-2 px-4 text-left text-xs font-medium text-amber-800">
                              Benefit
                            </th>
                            <th className="py-2 px-4 text-left text-xs font-medium text-amber-800">
                              Impact
                            </th>
                            <th className="py-2 px-4 text-left text-xs font-medium text-amber-800">
                              Research Finding
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 text-xs">
                          <tr>
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Consistency
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Increased adherence
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              95% more likely to stick to routine with partner
                            </td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Motivation
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Higher intensity
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Workouts are 20% more intense with partner
                            </td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Safety
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Spotting and form checks
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Reduces injury risk by 34%
                            </td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Social Connection
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Mental health benefits
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Combats gym anxiety and isolation
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Finding Partners */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="font-semibold text-amber-800 mb-3">
                        Where to Find Workout Partners
                      </h3>
                      <div className="space-y-4">
                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                          <h4 className="font-medium text-gray-800 mb-1">
                            Gym Buddy Boards
                          </h4>
                          <p className="text-xs text-gray-600 mb-2">
                            Most gyms have physical or digital boards for
                            matching members
                          </p>
                          <a
                            href="#"
                            className="text-xs text-amber-600 hover:underline"
                          >
                            Example matching form
                          </a>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                          <h4 className="font-medium text-gray-800 mb-1">
                            Fitness Apps
                          </h4>
                          <p className="text-xs text-gray-600 mb-2">
                            Try WeStrive, GymPact, or Meetup for fitness
                            connections
                          </p>
                          <a
                            href="#"
                            className="text-xs text-amber-600 hover:underline"
                          >
                            App comparisons
                          </a>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-amber-800 mb-3">
                        Creating Successful Partnerships
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
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                            <span>
                              Match fitness levels (within 10-15% of each other)
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
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                            <span>
                              Align on goals (weight loss vs strength vs
                              endurance)
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
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                            <span>
                              Schedule at least 3 consistent weekly sessions
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
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                            <span>
                              Establish communication preferences (text, app,
                              in-person)
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Partner Agreements */}
                  <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Workout Partner Agreement Template
                    </h3>
                    <div className="bg-gradient-to-br from-amber-50 to-white rounded-lg p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs mb-4">
                        <div className="bg-white p-3 rounded border border-amber-100">
                          <h4 className="font-medium text-amber-700 mb-1">
                            Commitment Level
                          </h4>
                          <p>3 sessions/week, 60 min each</p>
                        </div>
                        <div className="bg-white p-3 rounded border border-amber-100">
                          <h4 className="font-medium text-amber-700 mb-1">
                            Cancellation Policy
                          </h4>
                          <p>24-hour notice required</p>
                        </div>
                        <div className="bg-white p-3 rounded border border-amber-100">
                          <h4 className="font-medium text-amber-700 mb-1">
                            Goals
                          </h4>
                          <p>Increase strength by 20% in 3 months</p>
                        </div>
                        <div className="bg-white p-3 rounded border border-amber-100">
                          <h4 className="font-medium text-amber-700 mb-1">
                            Accountability
                          </h4>
                          <p>Weekly progress check-ins</p>
                        </div>
                      </div>
                      <p className="text-xs text-gray-600">
                        Formalizing expectations increases partnership success
                        by 62%
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* Healthcare Team Section */}
            <section
              className="bg-white rounded-xl shadow-md mb-8 overflow-hidden border border-gray-200"
              onClick={() => toggleSection("providers")}
            >
              <div className="flex justify-between items-center bg-gradient-to-r from-red-50 to-white p-5 cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-red-100 p-2 rounded-lg mr-4">
                    <HeartPulse className="w-5 h-5 text-red-600" />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    Assembling Your Healthcare Team
                  </h2>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    expandedSections.providers ? "rotate-180" : ""
                  }`}
                />
              </div>

              {expandedSections.providers && (
                <div className="p-5 pt-0">
                  {/* Healthcare Professionals */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Essential Medical Support
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-red-700 mb-2">
                          Primary Care Physician
                        </h4>
                        <p className="text-xs text-gray-600">
                          Annual physicals and clearance for exercise programs
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-red-700 mb-2">
                          Physical Therapist
                        </h4>
                        <p className="text-xs text-gray-600">
                          Address injuries and movement limitations
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-red-700 mb-2">
                          Sports Medicine Doctor
                        </h4>
                        <p className="text-xs text-gray-600">
                          Specialized care for athletic injuries
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-red-700 mb-2">
                          Registered Dietitian
                        </h4>
                        <p className="text-xs text-gray-600">
                          Nutrition planning for performance and recovery
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-red-700 mb-2">
                          Chiropractor
                        </h4>
                        <p className="text-xs text-gray-600">
                          Spinal alignment and joint mobility
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-red-700 mb-2">
                          Massage Therapist
                        </h4>
                        <p className="text-xs text-gray-600">
                          Muscle recovery and tension relief
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Healthcare Coordination */}
                  <div className="bg-red-50 rounded-lg p-5 mb-6">
                    <h3 className="font-semibold text-red-800 mb-3">
                      Coordinating Your Care Team
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-medium text-red-700 mb-1">
                          Communication Protocol
                        </h4>
                        <ul className="text-xs text-gray-700 space-y-1">
                          <li>• Share release forms between providers</li>
                          <li>• Maintain updated health records</li>
                          <li>• Schedule team reviews every 6 months</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-red-700 mb-1">
                          Insurance Considerations
                        </h4>
                        <ul className="text-xs text-gray-700 space-y-1">
                          <li>• Verify coverage for each specialist</li>
                          <li>• Understand HSA/FSA eligible services</li>
                          <li>• Ask about cash-pay discounts</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Finding Providers */}
                  <div className="bg-white border border-gray-200 rounded-lg p-5">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Finding Fitness-Friendly Providers
                    </h3>
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-1">
                        <div className="flex items-start mb-2">
                          <span className="bg-red-100 text-red-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            1
                          </span>
                          <p className="text-sm text-gray-600">
                            Ask trainers for referrals to providers they trust
                          </p>
                        </div>
                        <div className="flex items-start mb-2">
                          <span className="bg-red-100 text-red-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            2
                          </span>
                          <p className="text-sm text-gray-600">
                            Search professional association directories
                          </p>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start mb-2">
                          <span className="bg-red-100 text-red-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            3
                          </span>
                          <p className="text-sm text-gray-600">
                            Look for providers who work with athletes
                          </p>
                        </div>
                        <div className="flex items-start">
                          <span className="bg-red-100 text-red-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            4
                          </span>
                          <p className="text-sm text-gray-600">
                            Check online reviews from fitness communities
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* Community Section */}
            <section
              className="bg-white rounded-xl shadow-md mb-8 overflow-hidden border border-gray-200"
              onClick={() => toggleSection("community")}
            >
              <div className="flex justify-between items-center bg-gradient-to-r from-blue-50 to-white p-5 cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-lg mr-4">
                    <MessageSquare className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    Building Your Fitness Community
                  </h2>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    expandedSections.community ? "rotate-180" : ""
                  }`}
                />
              </div>

              {expandedSections.community && (
                <div className="p-5 pt-0">
                  {/* Community Types */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Community Support Options
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full bg-white rounded-lg overflow-hidden">
                        <thead className="bg-blue-100">
                          <tr>
                            <th className="py-2 px-4 text-left text-xs font-medium text-blue-800">
                              Community Type
                            </th>
                            <th className="py-2 px-4 text-left text-xs font-medium text-blue-800">
                              Benefits
                            </th>
                            <th className="py-2 px-4 text-left text-xs font-medium text-blue-800">
                              Where to Find
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 text-xs">
                          <tr>
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Gym/Fitness Studio
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Built-in social network, classes, events
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Local businesses, ClassPass, gym directories
                            </td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Online Forums
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              24/7 access, diverse perspectives
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Reddit, Bodybuilding.com, MyFitnessPal
                            </td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Social Media Groups
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Visual inspiration, challenges
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Facebook, Instagram, Strava clubs
                            </td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Running/Cycling Clubs
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Structured group workouts
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Meetup, local running stores
                            </td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Competition Teams
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Goal-oriented motivation
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              CrossFit boxes, sports leagues
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Community Engagement */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="font-semibold text-blue-800 mb-3">
                        Maximizing Community Benefits
                      </h3>
                      <div className="space-y-4">
                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                          <h4 className="font-medium text-gray-800 mb-1">
                            Participation Tips
                          </h4>
                          <p className="text-xs text-gray-600 mb-2">
                            Attend consistently, ask questions, share your
                            progress
                          </p>
                          <a
                            href="#"
                            className="text-xs text-blue-600 hover:underline"
                          >
                            Community engagement guide
                          </a>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                          <h4 className="font-medium text-gray-800 mb-1">
                            Hosting Events
                          </h4>
                          <p className="text-xs text-gray-600 mb-2">
                            Organize group hikes, fitness challenges, or
                            workshops
                          </p>
                          <a
                            href="#"
                            className="text-xs text-blue-600 hover:underline"
                          >
                            Event planning checklist
                          </a>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-800 mb-3">
                        Virtual Community Options
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
                              Peloton, Zwift, and other app communities
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
                              Discord servers for specific fitness niches
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
                            <span>Hashtag challenges on Instagram/TikTok</span>
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
                            <span>Virtual races and competitions</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Community Impact */}
                  <div className="bg-white border border-gray-200 rounded-lg p-5">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Measuring Community Impact
                    </h3>
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-1">
                        <div className="flex items-start mb-2">
                          <span className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            1
                          </span>
                          <p className="text-sm text-gray-600">
                            Track attendance/participation rates
                          </p>
                        </div>
                        <div className="flex items-start mb-2">
                          <span className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            2
                          </span>
                          <p className="text-sm text-gray-600">
                            Note improvements in consistency
                          </p>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start mb-2">
                          <span className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            3
                          </span>
                          <p className="text-sm text-gray-600">
                            Monitor enjoyment levels
                          </p>
                        </div>
                        <div className="flex items-start">
                          <span className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            4
                          </span>
                          <p className="text-sm text-gray-600">
                            Assess knowledge gained from others
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* Maintenance Section */}
            <section className="bg-white rounded-xl shadow-md mb-10 p-6">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                Maintaining Your Support Network
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Nurturing Relationships */}
                <div className="bg-gradient-to-br from-green-50 to-white rounded-lg p-5 border border-green-100">
                  <h3 className="font-semibold text-green-800 mb-3">
                    Nurturing Your Fitness Relationships
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
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
                      <span className="text-sm text-gray-700">
                        Schedule quarterly check-ins with your trainer
                      </span>
                    </div>
                    <div className="flex items-start">
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
                      <span className="text-sm text-gray-700">
                        Celebrate partner milestones together
                      </span>
                    </div>
                    <div className="flex items-start">
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
                      <span className="text-sm text-gray-700">
                        Provide constructive feedback to each other
                      </span>
                    </div>
                    <div className="flex items-start">
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
                      <span className="text-sm text-gray-700">
                        Rotate workout locations to keep things fresh
                      </span>
                    </div>
                  </div>
                </div>

                {/* When to Adjust */}
                <div className="bg-gradient-to-br from-yellow-50 to-white rounded-lg p-5 border border-yellow-100">
                  <h3 className="font-semibold text-yellow-800 mb-3">
                    When to Adjust Your Network
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <span className="bg-yellow-100 text-yellow-800 rounded-full p-1 mr-2">
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
                        Your goals have significantly changed
                      </span>
                    </div>
                    <div className="flex items-start">
                      <span className="bg-yellow-100 text-yellow-800 rounded-full p-1 mr-2">
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
                        You're no longer seeing progress
                      </span>
                    </div>
                    <div className="flex items-start">
                      <span className="bg-yellow-100 text-yellow-800 rounded-full p-1 mr-2">
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
                        Motivation is consistently low
                      </span>
                    </div>
                    <div className="flex items-start">
                      <span className="bg-yellow-100 text-yellow-800 rounded-full p-1 mr-2">
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
                        Life circumstances have changed (schedule, location)
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-gradient-to-r from-purple-50 to-white p-5 rounded-lg border border-purple-200">
                <h3 className="font-semibold text-purple-800 mb-3">
                  Support Network Evaluation Checklist
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="text-sm font-medium text-purple-700 mb-1">
                      Every 3 Months
                    </h4>
                    <p className="text-xs text-gray-600">
                      Assess satisfaction with each component
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-purple-700 mb-1">
                      Every 6 Months
                    </h4>
                    <p className="text-xs text-gray-600">
                      Review progress toward goals
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-purple-700 mb-1">
                      Annually
                    </h4>
                    <p className="text-xs text-gray-600">
                      Consider major adjustments or additions
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Final Takeaways */}
            <section className="bg-white rounded-xl shadow-md mb-10 p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                Key Takeaways for Building Your Fitness Support Network
              </h2>

              <div className="bg-orange-50 p-5 rounded-lg mb-5">
                <h3 className="text-lg font-semibold text-orange-800 mb-3">
                  Core Principles
                </h3>
                <ol className="space-y-3">
                  {[
                    "Diversify your support system across professional, peer, medical, and community resources",
                    "Invest in quality trainer relationships - they provide expertise that prevents injury and accelerates progress",
                    "Workout partners significantly increase accountability - choose partners with compatible goals and schedules",
                    "Healthcare providers ensure you're training safely and addressing limitations proactively",
                    "Community connections provide motivation, variety, and social benefits that sustain long-term commitment",
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
                  Begin by auditing your current support system - identify gaps
                  and prioritize which elements to develop first. Schedule
                  consultations with 2-3 potential trainers, post in local
                  fitness groups to find partners, and ask your doctor for
                  referrals to fitness-friendly healthcare providers. Remember
                  that building an effective support network is an ongoing
                  process that evolves with your fitness journey.
                </p>
                <p className="text-sm text-gray-700">
                  The most successful fitness enthusiasts aren't lone wolves -
                  they're connected to a web of support that keeps them
                  motivated, informed, and accountable. Your network will become
                  your greatest asset in achieving and maintaining your fitness
                  goals.
                </p>
              </div>
            </section>
            <section className="bg-white rounded-xl shadow-md mb-8 p-6 border border-gray-200">
              {/* Minimalist header with icon */}
              <div className="flex items-center mb-6">
                <div className="bg-indigo-100 p-2 rounded-lg mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Leveraging Technology for Support
                </h2>
              </div>

              {/* Subsection 1 */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-indigo-700 mb-3 border-b pb-2">
                  Fitness Tracking Apps
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="bg-indigo-100 text-indigo-800 rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 text-xs">
                      ✓
                    </span>
                    <span>
                      <strong>Progress Tracking:</strong> Apps like MyFitnessPal
                      or Strong provide detailed analytics on your workouts and
                      nutrition
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-indigo-100 text-indigo-800 rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 text-xs">
                      ✓
                    </span>
                    <span>
                      <strong>Community Features:</strong> Strava and Fitbit
                      offer social components for accountability and
                      encouragement
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-indigo-100 text-indigo-800 rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 text-xs">
                      ✓
                    </span>
                    <span>
                      <strong>Remote Coaching:</strong> Platforms like Future or
                      Trainiac connect you with certified trainers virtually
                    </span>
                  </li>
                </ul>
              </div>

              {/* Subsection 2 */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-indigo-700 mb-3 border-b pb-2">
                  Wearable Technology
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="bg-indigo-100 text-indigo-800 rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 text-xs">
                      ✓
                    </span>
                    <span>
                      <strong>Real-time Feedback:</strong> Devices like Whoop or
                      Apple Watch provide immediate performance data
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-indigo-100 text-indigo-800 rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 text-xs">
                      ✓
                    </span>
                    <span>
                      <strong>Recovery Metrics:</strong> Track sleep quality,
                      heart rate variability, and other recovery indicators
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-indigo-100 text-indigo-800 rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 text-xs">
                      ✓
                    </span>
                    <span>
                      <strong>Goal Setting:</strong> Set and track specific
                      fitness targets with visual progress indicators
                    </span>
                  </li>
                </ul>
              </div>

              {/* Subsection 3 */}
              <div>
                <h3 className="text-xl font-semibold text-indigo-700 mb-3 border-b pb-2">
                  Virtual Support Systems
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="bg-indigo-100 text-indigo-800 rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 text-xs">
                      ✓
                    </span>
                    <span>
                      <strong>Online Challenges:</strong> Participate in virtual
                      fitness events through apps like Peloton or Zwift
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-indigo-100 text-indigo-800 rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 text-xs">
                      ✓
                    </span>
                    <span>
                      <strong>AI Trainers:</strong> Apps like Freeletics use
                      artificial intelligence to adapt workouts to your progress
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-indigo-100 text-indigo-800 rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 text-xs">
                      ✓
                    </span>
                    <span>
                      <strong>Hybrid Models:</strong> Combine in-person and
                      virtual training for flexible support
                    </span>
                  </li>
                </ul>
              </div>
            </section>
            <section className="bg-white rounded-xl shadow-md mb-8 p-6 border border-gray-200">
              {/* Clean header with divider */}
              <div className="mb-8">
                <div className="flex items-center">
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
                  <h2 className="text-2xl font-bold text-gray-800">
                    Nutritional Support Network
                  </h2>
                </div>
                <div className="border-b mt-4 border-gray-200"></div>
              </div>

              {/* Subsection 1 */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-green-700 mb-4">
                  Building Your Nutrition Team
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">
                      Professional Support:
                    </h4>
                    <ul className="space-y-2 text-gray-700 pl-5 list-disc">
                      <li>
                        <strong>Registered Dietitians:</strong> Evidence-based
                        meal planning for your fitness goals
                      </li>
                      <li>
                        <strong>Nutrition Coaches:</strong> Help develop
                        sustainable eating habits
                      </li>
                      <li>
                        <strong>Meal Prep Services:</strong> Local or
                        subscription-based healthy meal options
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">
                      Peer Support:
                    </h4>
                    <ul className="space-y-2 text-gray-700 pl-5 list-disc">
                      <li>
                        <strong>Cooking Clubs:</strong> Group meal prep sessions
                        to share recipes and techniques
                      </li>
                      <li>
                        <strong>Accountability Partners:</strong> Share food
                        logs and check in on nutrition goals
                      </li>
                      <li>
                        <strong>Grocery Buddies:</strong> Shop together for
                        healthy ingredients
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Subsection 2 */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-green-700 mb-4">
                  Nutrition Tracking Tools
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium text-green-800 mb-2">
                      Macro Tracking
                    </h4>
                    <ul className="space-y-1 text-sm text-gray-700 pl-5 list-disc">
                      <li>MyFitnessPal</li>
                      <li>Cronometer</li>
                      <li>MacroFactor</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium text-green-800 mb-2">
                      Meal Planning
                    </h4>
                    <ul className="space-y-1 text-sm text-gray-700 pl-5 list-disc">
                      <li>Mealime</li>
                      <li>PlateJoy</li>
                      <li>Eat This Much</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium text-green-800 mb-2">
                      Education
                    </h4>
                    <ul className="space-y-1 text-sm text-gray-700 pl-5 list-disc">
                      <li>Precision Nutrition</li>
                      <li>Examine.com</li>
                      <li>NutritionFacts.org</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Subsection 3 */}
              <div>
                <h3 className="text-xl font-semibold text-green-700 mb-4">
                  Creating a Supportive Food Environment
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="bg-green-100 text-green-800 rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 text-xs">
                      1
                    </span>
                    <span>
                      <strong>Family/Housemate Alignment:</strong> Get everyone
                      on board with healthy eating habits
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-100 text-green-800 rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 text-xs">
                      2
                    </span>
                    <span>
                      <strong>Workplace Support:</strong> Advocate for healthy
                      options in office cafeterias
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-100 text-green-800 rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 text-xs">
                      3
                    </span>
                    <span>
                      <strong>Social Circle:</strong> Choose restaurants with
                      healthy options when dining out
                    </span>
                  </li>
                </ul>
              </div>
            </section>
            <section className="bg-white rounded-xl shadow-md mb-8 p-6 border border-gray-200">
              {/* Header with accent border */}
              <div className="border-l-4 border-purple-500 pl-4 mb-8">
                <h2 className="text-2xl font-bold text-gray-800">
                  Mental Fitness Support
                </h2>
                <p className="text-gray-600">
                  Building psychological resilience for your fitness journey
                </p>
              </div>

              {/* Subsection 1 */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-purple-700 mb-4 pb-2 border-b border-purple-100">
                  Mindset Coaches & Resources
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2 flex items-center">
                      <span className="bg-purple-100 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center mr-2">
                        ①
                      </span>
                      Professional Support
                    </h4>
                    <ul className="space-y-2 text-gray-700 pl-8">
                      <li className="relative before:absolute before:-left-4 before:content-['•'] before:text-purple-500">
                        Sports psychologists for performance mindset
                      </li>
                      <li className="relative before:absolute before:-left-4 before:content-['•'] before:text-purple-500">
                        Meditation coaches for recovery focus
                      </li>
                      <li className="relative before:absolute before:-left-4 before:content-['•'] before:text-purple-500">
                        Motivational interviewing specialists
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2 flex items-center">
                      <span className="bg-purple-100 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center mr-2">
                        ②
                      </span>
                      Self-Help Tools
                    </h4>
                    <ul className="space-y-2 text-gray-700 pl-8">
                      <li className="relative before:absolute before:-left-4 before:content-['•'] before:text-purple-500">
                        Journaling prompts for fitness reflection
                      </li>
                      <li className="relative before:absolute before:-left-4 before:content-['•'] before:text-purple-500">
                        Visualization exercises
                      </li>
                      <li className="relative before:absolute before:-left-4 before:content-['•'] before:text-purple-500">
                        Positive affirmation practices
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Subsection 2 */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-purple-700 mb-4 pb-2 border-b border-purple-100">
                  Accountability Systems
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-purple-100 text-purple-800 rounded-lg p-2 mr-4 flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
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
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">
                        Habit Tracking
                      </h4>
                      <p className="text-sm text-gray-600">
                        Use apps like Habitica or Streaks to build consistency
                        in your routine
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-purple-100 text-purple-800 rounded-lg p-2 mr-4 flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">
                        Accountability Groups
                      </h4>
                      <p className="text-sm text-gray-600">
                        Join or create small groups (3-5 people) for weekly
                        check-ins
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Subsection 3 */}
              <div>
                <h3 className="text-xl font-semibold text-purple-700 mb-4 pb-2 border-b border-purple-100">
                  Motivation Maintenance
                </h3>
                <div className="bg-purple-50 rounded-lg p-4">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="bg-white text-purple-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 font-bold">
                        A
                      </span>
                      <span className="text-gray-700">
                        Set micro-goals (weekly targets) in addition to
                        long-term objectives
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-white text-purple-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 font-bold">
                        B
                      </span>
                      <span className="text-gray-700">
                        Create a motivational playlist or podcast library for
                        workouts
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-white text-purple-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 font-bold">
                        C
                      </span>
                      <span className="text-gray-700">
                        Schedule regular "fun workouts" to prevent burnout
                      </span>
                    </li>
                  </ul>
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
                      Dr. James Wilson, Sports Medicine Specialist
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
                  Get more fitness tips
                </h4>
                <p className="text-gray-700 text-sm">
                  Weekly insights on building effective fitness routines,
                  finding support, and staying motivated.
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

            {/* Trainer Finder Resources */}
            <div className="bg-white rounded-lg p-6 mb-8 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Find Certified Trainers
              </h3>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <h4 className="font-medium text-gray-800">
                    National Databases
                  </h4>
                  <a
                    href="#"
                    className="text-blue-600 text-sm hover:underline block"
                  >
                    ACE Find a Trainer
                  </a>
                  <a
                    href="#"
                    className="text-blue-600 text-sm hover:underline block"
                  >
                    NASM Pro Directory
                  </a>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-medium text-gray-800">Local Resources</h4>
                  <a
                    href="#"
                    className="text-blue-600 text-sm hover:underline block"
                  >
                    Gym Trainer Match Services
                  </a>
                  <a
                    href="#"
                    className="text-blue-600 text-sm hover:underline block"
                  >
                    Community Center Listings
                  </a>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">
                    Virtual Training
                  </h4>
                  <a
                    href="#"
                    className="text-blue-600 text-sm hover:underline block"
                  >
                    Online Trainer Platforms
                  </a>
                  <a
                    href="#"
                    className="text-blue-600 text-sm hover:underline block"
                  >
                    Video Consultation Options
                  </a>
                </div>
              </div>
            </div>

            {/* Workout Partner Resources */}
            <div className="bg-white rounded-lg p-6 mb-8 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Find Workout Partners
              </h3>
              <div className="space-y-3">
                <div className="bg-orange-50 p-3 rounded-lg">
                  <h4 className="text-sm font-medium text-orange-700 mb-1">
                    Local Meetups
                  </h4>
                  <a
                    href="#"
                    className="text-xs text-orange-600 hover:underline block"
                  >
                    Find Fitness Groups Near You
                  </a>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h4 className="text-sm font-medium text-blue-700 mb-1">
                    Partner Matching Apps
                  </h4>
                  <a
                    href="#"
                    className="text-xs text-blue-600 hover:underline block"
                  >
                    Gymbuddy
                  </a>
                  <a
                    href="#"
                    className="text-xs text-blue-600 hover:underline block"
                  >
                    Spotter
                  </a>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <h4 className="text-sm font-medium text-green-700 mb-1">
                    Social Media
                  </h4>
                  <a
                    href="#"
                    className="text-xs text-green-600 hover:underline block"
                  >
                    Facebook Fitness Groups
                  </a>
                  <a
                    href="#"
                    className="text-xs text-green-600 hover:underline block"
                  >
                    Reddit Fitness Partners
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
                      Trainer Interview Questions
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
                      Workout Partner Agreement
                    </h4>
                    <a
                      href="#"
                      className="text-xs text-blue-600 hover:underline"
                    >
                      Download Template
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
                      Support Network Checklist
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
                <h4 className="font-bold mb-2">Fitness Community App</h4>
                <p className="text-sm mb-4">
                  Connect with local workout partners and trainers in your area
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
