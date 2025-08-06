"use client";

import { useState } from "react";
import {
  Dumbbell,
  Trophy,
  TrendingUp,
  Calendar,
  Check,
  Brain,
  Moon,
  Droplet,
  Activity,
  Banana,
  Home,
  Clock,
  Scale,
  HeartPulse,
  ChevronDown,
  User,
  Calendar as CalendarIcon,
} from "lucide-react";

export default function FitnessArticle7() {
  const [email, setEmail] = useState("");
  const [activeTab, setActiveTab] = useState("Journeys");
  const [expandedSections, setExpandedSections] = useState({
    journeys: true,
    routines: false,
    plateaus: false,
    nutrition: false,
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
    "Journeys",
    "Routines",
    "Plateaus",
    "Nutrition",
    "Mindset",
    "Equipment",
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
            {/* Hero Section with Gradient Background */}
            <div className="mb-8 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-8 text-white">
              <div className="flex items-start">
                <div className="bg-white bg-opacity-20 p-3 rounded-lg mr-4">
                  <Dumbbell className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight">
                    Real Fitness Transformations: A Member's Journey
                  </h1>
                  <p className="text-lg sm:text-xl text-blue-100 font-medium">
                    Real experiences and practical advice from fitness
                    enthusiasts on building sustainable routines, overcoming
                    plateaus, and maintaining motivation throughout their
                    transformation journey
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Tabs with Icons */}
            <div className="relative mb-6">
              <div className="flex overflow-x-auto pb-2 mb-4 scrollbar-hide">
                <div className="flex space-x-2 min-w-max">
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`flex items-center px-4 py-2 text-xs sm:text-sm font-medium rounded-full whitespace-nowrap transition-colors flex-shrink-0 ${
                        activeTab === tab
                          ? "bg-blue-600 text-white shadow-md"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {tab === "Journeys" && <User className="w-4 h-4 mr-1" />}
                      {tab === "Routines" && <Clock className="w-4 h-4 mr-1" />}
                      {tab === "Plateaus" && (
                        <TrendingUp className="w-4 h-4 mr-1" />
                      )}
                      {tab === "Nutrition" && (
                        <Scale className="w-4 h-4 mr-1" />
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
                  <h2 className="text-xl font-bold text-gray-800 mb-4">
                    The Truth About Fitness Transformations
                  </h2>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Real fitness transformations aren't about quick fixes or
                    extreme diets—they're about consistent effort, smart
                    training, and sustainable lifestyle changes. In this
                    article, we share authentic journeys from members who've
                    achieved remarkable results through dedication and
                    perseverance.
                  </p>
                  <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-400">
                    <p className="text-blue-800 font-medium">
                      "The secret isn't in the program—it's in sticking to the
                      program. My 50lb weight loss took 18 months of consistent
                      work, not 6 weeks." — Mark T., Transformation Spotlight
                    </p>
                  </div>
                </div>
                <div className="md:w-1/3 bg-gradient-to-br from-blue-50 to-white rounded-lg p-4 flex flex-col items-center justify-center border border-blue-100">
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div className="bg-white p-3 rounded-lg shadow-xs border border-gray-100 flex flex-col items-center">
                      <Dumbbell className="w-6 h-6 text-blue-600 mb-1" />
                      <span className="text-xs text-center">Training</span>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-xs border border-gray-100 flex flex-col items-center">
                      <Scale className="w-6 h-6 text-indigo-600 mb-1" />
                      <span className="text-xs text-center">Nutrition</span>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-xs border border-gray-100 flex flex-col items-center">
                      <HeartPulse className="w-6 h-6 text-teal-600 mb-1" />
                      <span className="text-xs text-center">Recovery</span>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-xs border border-gray-100 flex flex-col items-center">
                      <Trophy className="w-6 h-6 text-amber-600 mb-1" />
                      <span className="text-xs text-center">Mindset</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 text-center">
                    The four pillars of successful transformations
                  </p>
                </div>
              </div>
            </div>

            {/* Transformation Journeys Section */}
            <section
              className="bg-white rounded-xl shadow-md mb-8 overflow-hidden border border-gray-200"
              onClick={() => toggleSection("journeys")}
            >
              <div className="flex justify-between items-center bg-gradient-to-r from-blue-50 to-white p-5 cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-lg mr-4">
                    <User className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    Member Transformation Journeys
                  </h2>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    expandedSections.journeys ? "rotate-180" : ""
                  }`}
                />
              </div>

              {expandedSections.journeys && (
                <div className="p-5 pt-0">
                  {/* Journey 1 */}
                  <div className="mb-6 bg-gray-50 rounded-lg p-5">
                    <div className="flex flex-col md:flex-row gap-5">
                      <div className="md:w-1/3">
                        <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-200">
                          <div className="aspect-w-3 aspect-h-4 bg-gray-200 rounded mb-2"></div>
                          <div className="flex justify-between text-xs text-gray-600">
                            <span>Before: 220lbs</span>
                            <span>After: 175lbs</span>
                          </div>
                        </div>
                      </div>
                      <div className="md:w-2/3">
                        <h3 className="font-bold text-lg text-gray-800 mb-2">
                          Sarah's 12-Month Body Recomposition
                        </h3>
                        <div className="grid grid-cols-2 gap-3 mb-3">
                          <div className="bg-white p-2 rounded border border-gray-200">
                            <p className="text-xs text-gray-500">Timeframe</p>
                            <p className="font-medium">12 months</p>
                          </div>
                          <div className="bg-white p-2 rounded border border-gray-200">
                            <p className="text-xs text-gray-500">Body Fat %</p>
                            <p className="font-medium">32% → 21%</p>
                          </div>
                          <div className="bg-white p-2 rounded border border-gray-200">
                            <p className="text-xs text-gray-500">Program</p>
                            <p className="font-medium">
                              Strength Training 4x/week
                            </p>
                          </div>
                          <div className="bg-white p-2 rounded border border-gray-200">
                            <p className="text-xs text-gray-500">Nutrition</p>
                            <p className="font-medium">Macro Tracking</p>
                          </div>
                        </div>
                        <div className="bg-white border-l-4 border-blue-500 p-3 rounded-r">
                          <h4 className="font-medium text-gray-800 mb-1">
                            Key Takeaways
                          </h4>
                          <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                            <li>
                              Started with just 2 workouts per week and built up
                              gradually
                            </li>
                            <li>
                              Meal prepping Sundays was crucial for consistency
                            </li>
                            <li>
                              Progress photos kept me motivated when scale
                              didn't move
                            </li>
                            <li>Learning proper form prevented injuries</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Journey 2 */}
                  <div className="mb-6 bg-gray-50 rounded-lg p-5">
                    <div className="flex flex-col md:flex-row gap-5">
                      <div className="md:w-1/3">
                        <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-200">
                          <div className="aspect-w-3 aspect-h-4 bg-gray-200 rounded mb-2"></div>
                          <div className="flex justify-between text-xs text-gray-600">
                            <span>Before: 155lbs</span>
                            <span>After: 180lbs</span>
                          </div>
                        </div>
                      </div>
                      <div className="md:w-2/3">
                        <h3 className="font-bold text-lg text-gray-800 mb-2">
                          James' Muscle Building Journey
                        </h3>
                        <div className="grid grid-cols-2 gap-3 mb-3">
                          <div className="bg-white p-2 rounded border border-gray-200">
                            <p className="text-xs text-gray-500">Timeframe</p>
                            <p className="font-medium">18 months</p>
                          </div>
                          <div className="bg-white p-2 rounded border border-gray-200">
                            <p className="text-xs text-gray-500">
                              Lifts Improved
                            </p>
                            <p className="font-medium">Bench: +85lbs</p>
                          </div>
                          <div className="bg-white p-2 rounded border border-gray-200">
                            <p className="text-xs text-gray-500">Program</p>
                            <p className="font-medium">PPL Split</p>
                          </div>
                          <div className="bg-white p-2 rounded border border-gray-200">
                            <p className="text-xs text-gray-500">Nutrition</p>
                            <p className="font-medium">300kcal Surplus</p>
                          </div>
                        </div>
                        <div className="bg-white border-l-4 border-blue-500 p-3 rounded-r">
                          <h4 className="font-medium text-gray-800 mb-1">
                            Key Takeaways
                          </h4>
                          <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                            <li>
                              Consistent progressive overload was key for gains
                            </li>
                            <li>
                              Had to eat more than I thought to see growth
                            </li>
                            <li>Deload weeks helped break through plateaus</li>
                            <li>Sleep quality made a noticeable difference</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Common Themes */}
                  <div className="bg-blue-50 rounded-lg p-5 mb-4">
                    <h3 className="font-semibold text-blue-800 mb-3">
                      Common Themes in Successful Transformations
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-white p-3 rounded-lg border border-blue-100">
                        <h4 className="text-sm font-medium text-blue-700 mb-1">
                          Realistic Timeframes
                        </h4>
                        <p className="text-xs text-gray-700">
                          Average meaningful transformation takes 6-18 months
                        </p>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-blue-100">
                        <h4 className="text-sm font-medium text-blue-700 mb-1">
                          Consistency Over Intensity
                        </h4>
                        <p className="text-xs text-gray-700">
                          Showing up regularly beats occasional heroic efforts
                        </p>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-blue-100">
                        <h4 className="text-sm font-medium text-blue-700 mb-1">
                          Lifestyle Integration
                        </h4>
                        <p className="text-xs text-gray-700">
                          Sustainable changes beat short-term diets
                        </p>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-blue-100">
                        <h4 className="text-sm font-medium text-blue-700 mb-1">
                          Progress Tracking
                        </h4>
                        <p className="text-xs text-gray-700">
                          Measure beyond the scale - photos, measurements,
                          performance
                        </p>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-blue-100">
                        <h4 className="text-sm font-medium text-blue-700 mb-1">
                          Community Support
                        </h4>
                        <p className="text-xs text-gray-700">
                          Accountability partners increase success rates
                        </p>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-blue-100">
                        <h4 className="text-sm font-medium text-blue-700 mb-1">
                          Mindset Shift
                        </h4>
                        <p className="text-xs text-gray-700">
                          View as lifelong journey, not temporary fix
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* Building Routines Section */}
            <section
              className="bg-white rounded-xl shadow-md mb-8 overflow-hidden border border-gray-200"
              onClick={() => toggleSection("routines")}
            >
              <div className="flex justify-between items-center bg-gradient-to-r from-indigo-50 to-white p-5 cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-indigo-100 p-2 rounded-lg mr-4">
                    <Clock className="w-5 h-5 text-indigo-600" />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    Building Sustainable Routines
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
                  {/* Routine Types */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Effective Routine Structures
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full bg-white rounded-lg overflow-hidden">
                        <thead className="bg-indigo-100">
                          <tr>
                            <th className="py-2 px-4 text-left text-xs font-medium text-indigo-800">
                              Routine Type
                            </th>
                            <th className="py-2 px-4 text-left text-xs font-medium text-indigo-800">
                              Best For
                            </th>
                            <th className="py-2 px-4 text-left text-xs font-medium text-indigo-800">
                              Weekly Commitment
                            </th>
                            <th className="py-2 px-4 text-left text-xs font-medium text-indigo-800">
                              Example Split
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 text-xs">
                          <tr>
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Full Body
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Beginners, time-crunched
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              2-3 days
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Mon/Wed/Fri
                            </td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Upper/Lower
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Intermediate lifters
                            </td>
                            <td className="py-3 px-4 text-gray-700">4 days</td>
                            <td className="py-3 px-4 text-gray-700">
                              Mon/Tue/Thu/Fri
                            </td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Push/Pull/Legs
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Advanced lifters
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              3-6 days
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Mon/Tue/Wed or Mon/Wed/Fri
                            </td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Bro Split
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Bodybuilders
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              5-6 days
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Chest/Back/Arms/Legs/Shoulders
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Routine Building */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="font-semibold text-indigo-800 mb-3">
                        Creating Your Routine
                      </h3>
                      <div className="space-y-4">
                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                          <h4 className="font-medium text-gray-800 mb-1">
                            Assess Your Schedule
                          </h4>
                          <p className="text-xs text-gray-600">
                            Be realistic about how many days you can commit. 3
                            consistent days beats 5 sporadic ones.
                          </p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                          <h4 className="font-medium text-gray-800 mb-1">
                            Progressive Overload
                          </h4>
                          <p className="text-xs text-gray-600">
                            Plan how you'll increase difficulty - more weight,
                            reps, sets, or decreased rest time.
                          </p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                          <h4 className="font-medium text-gray-800 mb-1">
                            Exercise Selection
                          </h4>
                          <p className="text-xs text-gray-600">
                            Include compound movements (squats, deadlifts,
                            presses) and accessory work.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-indigo-800 mb-3">
                        Sample Beginner Routine
                      </h3>
                      <div className="bg-indigo-50 rounded-lg p-4 h-full">
                        <h4 className="text-sm font-medium text-indigo-700 mb-2">
                          Full Body (3x/week)
                        </h4>
                        <ul className="space-y-3 text-sm">
                          <li className="flex items-start">
                            <span className="bg-indigo-100 text-indigo-800 rounded-full p-1 mr-2">
                              <Dumbbell className="h-3 w-3" />
                            </span>
                            <span>Squats: 3 sets × 8-12 reps</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-indigo-100 text-indigo-800 rounded-full p-1 mr-2">
                              <Dumbbell className="h-3 w-3" />
                            </span>
                            <span>Bench Press: 3 × 8-12</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-indigo-100 text-indigo-800 rounded-full p-1 mr-2">
                              <Dumbbell className="h-3 w-3" />
                            </span>
                            <span>Rows: 3 × 8-12</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-indigo-100 text-indigo-800 rounded-full p-1 mr-2">
                              <Dumbbell className="h-3 w-3" />
                            </span>
                            <span>Overhead Press: 3 × 8-12</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-indigo-100 text-indigo-800 rounded-full p-1 mr-2">
                              <Dumbbell className="h-3 w-3" />
                            </span>
                            <span>Plank: 3 × 30-60sec</span>
                          </li>
                        </ul>
                        <p className="text-xs text-indigo-600 mt-2">
                          Rest 60-90sec between sets. Add 2.5-5lbs when you hit
                          top of rep range.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Adherence Tips */}
                  <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Tips for Routine Adherence
                    </h3>
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-1">
                        <div className="flex items-start mb-2">
                          <span className="bg-indigo-100 text-indigo-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            1
                          </span>
                          <p className="text-sm text-gray-600">
                            Schedule workouts like important appointments
                          </p>
                        </div>
                        <div className="flex items-start mb-2">
                          <span className="bg-indigo-100 text-indigo-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            2
                          </span>
                          <p className="text-sm text-gray-600">
                            Prepare gym clothes and bag the night before
                          </p>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start mb-2">
                          <span className="bg-indigo-100 text-indigo-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            3
                          </span>
                          <p className="text-sm text-gray-600">
                            Find an accountability partner or group
                          </p>
                        </div>
                        <div className="flex items-start">
                          <span className="bg-indigo-100 text-indigo-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            4
                          </span>
                          <p className="text-sm text-gray-600">
                            Track workouts to see progress over time
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* Overcoming Plateaus Section */}
            <section
              className="bg-white rounded-xl shadow-md mb-8 overflow-hidden border border-gray-200"
              onClick={() => toggleSection("plateaus")}
            >
              <div className="flex justify-between items-center bg-gradient-to-r from-purple-50 to-white p-5 cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-purple-100 p-2 rounded-lg mr-4">
                    <TrendingUp className="w-5 h-5 text-purple-600" />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    Overcoming Plateaus
                  </h2>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    expandedSections.plateaus ? "rotate-180" : ""
                  }`}
                />
              </div>

              {expandedSections.plateaus && (
                <div className="p-5 pt-0">
                  {/* Plateau Types */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Common Plateaus and Solutions
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-purple-700 mb-2">
                          Strength Plateau
                        </h4>
                        <ul className="text-xs text-gray-600 list-disc pl-5 space-y-1">
                          <li>Deload week (reduce volume 40-50%)</li>
                          <li>Change rep ranges (try 5x5 or 3x3)</li>
                          <li>Improve form and technique</li>
                        </ul>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-purple-700 mb-2">
                          Weight Loss Stall
                        </h4>
                        <ul className="text-xs text-gray-600 list-disc pl-5 space-y-1">
                          <li>Recalculate TDEE (metabolism adapts)</li>
                          <li>Try diet break at maintenance</li>
                          <li>Increase NEAT (non-exercise activity)</li>
                        </ul>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-purple-700 mb-2">
                          Muscle Growth Plateau
                        </h4>
                        <ul className="text-xs text-gray-600 list-disc pl-5 space-y-1">
                          <li>Increase training volume gradually</li>
                          <li>Try new exercises for variety</li>
                          <li>Ensure sufficient protein intake</li>
                        </ul>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-purple-700 mb-2">
                          Motivation Plateau
                        </h4>
                        <ul className="text-xs text-gray-600 list-disc pl-5 space-y-1">
                          <li>Set new short-term goals</li>
                          <li>Try a new workout style</li>
                          <li>Join a challenge or competition</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Plateau Breaking Strategies */}
                  <div className="bg-purple-50 rounded-lg p-5 mb-6">
                    <h3 className="font-semibold text-purple-800 mb-3">
                      Advanced Plateau-Breaking Strategies
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-medium text-purple-700 mb-1">
                          For Strength
                        </h4>
                        <ul className="text-xs text-gray-700 space-y-1">
                          <li>
                            • Cluster sets (short rests between mini-sets)
                          </li>
                          <li>• Eccentric overload training</li>
                          <li>• Isometric holds at sticking points</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-purple-700 mb-1">
                          For Hypertrophy
                        </h4>
                        <ul className="text-xs text-gray-700 space-y-1">
                          <li>• Drop sets and rest-pause sets</li>
                          <li>• Blood flow restriction training</li>
                          <li>• Time under tension variations</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* When to Change Programs */}
                  <div className="bg-white border border-gray-200 rounded-lg p-5">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      When to Change Your Program
                    </h3>
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-1">
                        <div className="flex items-start mb-2">
                          <span className="bg-purple-100 text-purple-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            ✓
                          </span>
                          <p className="text-sm text-gray-600">
                            No progress for 4+ weeks despite effort
                          </p>
                        </div>
                        <div className="flex items-start mb-2">
                          <span className="bg-purple-100 text-purple-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            ✓
                          </span>
                          <p className="text-sm text-gray-600">
                            Persistent joint pain (not muscle soreness)
                          </p>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start mb-2">
                          <span className="bg-purple-100 text-purple-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            ✓
                          </span>
                          <p className="text-sm text-gray-600">
                            Complete loss of motivation for current routine
                          </p>
                        </div>
                        <div className="flex items-start">
                          <span className="bg-purple-100 text-purple-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            ✓
                          </span>
                          <p className="text-sm text-gray-600">
                            New goals requiring different approach
                          </p>
                        </div>
                      </div>
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
              <div className="flex justify-between items-center bg-gradient-to-r from-teal-50 to-white p-5 cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-teal-100 p-2 rounded-lg mr-4">
                    <Scale className="w-5 h-5 text-teal-600" />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    Nutrition for Transformations
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
                      Fundamentals of Transformation Nutrition
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-teal-700 mb-2">
                          Calories
                        </h4>
                        <p className="text-xs text-gray-600">
                          Determine TDEE (Total Daily Energy Expenditure) and
                          adjust based on goals
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-teal-700 mb-2">
                          Protein
                        </h4>
                        <p className="text-xs text-gray-600">
                          0.7-1g per lb body weight for muscle
                          preservation/growth
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-teal-700 mb-2">Fats</h4>
                        <p className="text-xs text-gray-600">
                          20-35% of calories for hormone production and satiety
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-teal-700 mb-2">
                          Carbs
                        </h4>
                        <p className="text-xs text-gray-600">
                          Fill remaining calories, adjust based on activity
                          level
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-teal-700 mb-2">
                          Fiber
                        </h4>
                        <p className="text-xs text-gray-600">
                          14g per 1000 calories for digestive health
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-teal-700 mb-2">
                          Hydration
                        </h4>
                        <p className="text-xs text-gray-600">
                          0.5-1oz per lb body weight daily
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Meal Planning */}
                  <div className="bg-teal-50 rounded-lg p-5 mb-6">
                    <h3 className="font-semibold text-teal-800 mb-3">
                      Practical Meal Planning Tips
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-medium text-teal-700 mb-1">
                          For Fat Loss
                        </h4>
                        <ul className="text-xs text-gray-700 space-y-1">
                          <li>• Prioritize lean proteins and vegetables</li>
                          <li>• Use smaller plates to control portions</li>
                          <li>• Plan 1-2 higher carb days weekly</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-teal-700 mb-1">
                          For Muscle Gain
                        </h4>
                        <ul className="text-xs text-gray-700 space-y-1">
                          <li>• Eat every 3-4 hours to hit calorie goals</li>
                          <li>
                            • Include calorie-dense foods like nuts and oils
                          </li>
                          <li>• Post-workout nutrition matters most</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Supplement Guide */}
                  <div className="bg-white border border-gray-200 rounded-lg p-5">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Supplement Guide
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full bg-white rounded-lg overflow-hidden">
                        <thead className="bg-teal-100">
                          <tr>
                            <th className="py-2 px-4 text-left text-xs font-medium text-teal-800">
                              Supplement
                            </th>
                            <th className="py-2 px-4 text-left text-xs font-medium text-teal-800">
                              Benefit
                            </th>
                            <th className="py-2 px-4 text-left text-xs font-medium text-teal-800">
                              Dosing
                            </th>
                            <th className="py-2 px-4 text-left text-xs font-medium text-teal-800">
                              Evidence Level
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 text-xs">
                          <tr>
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Whey Protein
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Convenient protein source
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              20-40g post-workout
                            </td>
                            <td className="py-3 px-4 text-gray-700">High</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Creatine
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Strength and power output
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              5g daily
                            </td>
                            <td className="py-3 px-4 text-gray-700">High</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Caffeine
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Workout performance
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              3-6mg/kg 30-60min pre
                            </td>
                            <td className="py-3 px-4 text-gray-700">High</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Omega-3s
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Recovery and inflammation
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              1-3g EPA+DHA daily
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Moderate
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* Final Takeaways */}
            <section className="bg-white rounded-xl shadow-md mb-10 p-6">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                Key Transformation Takeaways
              </h2>

              <div className="bg-blue-50 p-5 rounded-lg mb-5">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">
                  The 5 Pillars of Successful Transformations
                </h3>
                <ol className="space-y-3">
                  {[
                    "Consistency beats intensity - showing up regularly matters more than occasional heroic efforts",
                    "Nutrition is 80% of body composition changes - you can't out-train a bad diet",
                    "Progressive overload is non-negotiable for continued progress",
                    "Recovery (sleep, stress management) is where adaptation happens",
                    "Mindset determines long-term success - view fitness as a lifestyle, not a temporary fix",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-3">
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
                  Getting Started
                </h3>
                <p className="text-sm text-gray-700 mb-3">
                  The best fitness program is the one you'll stick to. Start
                  with modest goals and build from there. Remember that every
                  expert was once a beginner, and every transformation story
                  began with a single workout, a single healthy meal, a single
                  decision to change.
                </p>
                <p className="text-sm text-gray-700">
                  Your journey won't be linear—there will be setbacks and
                  plateaus. What matters is your commitment to keep moving
                  forward. The members featured in this article didn't achieve
                  their results overnight; they achieved them by showing up day
                  after day, even when motivation was low.
                </p>
              </div>
            </section>
            <section className="bg-white rounded-xl shadow-md mb-8 p-6 border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="bg-purple-100 p-2 rounded-lg mr-4">
                  <Brain className="w-5 h-5 text-purple-600" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                  The Psychology of Transformations
                </h2>
              </div>

              <h3 className="text-lg font-semibold text-purple-700 mb-4 border-b pb-2">
                Mental Milestones in a Fitness Journey
              </h3>

              <div className="space-y-6">
                {/* Timeline Item 1 */}
                <div className="flex">
                  <div className="flex flex-col items-center mr-4">
                    <div className="bg-purple-500 rounded-full w-3 h-3 mt-1"></div>
                    <div className="w-px bg-gray-300 h-full"></div>
                  </div>
                  <div className="pb-6">
                    <h4 className="font-medium text-gray-800 mb-1">
                      Week 1-2: The Honeymoon Phase
                    </h4>
                    <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                      <li>Initial excitement and motivation are high</li>
                      <li>Everything feels new and interesting</li>
                      <li>Notice quick "newbie gains" in performance</li>
                    </ul>
                  </div>
                </div>

                {/* Timeline Item 2 */}
                <div className="flex">
                  <div className="flex flex-col items-center mr-4">
                    <div className="bg-purple-500 rounded-full w-3 h-3 mt-1"></div>
                    <div className="w-px bg-gray-300 h-full"></div>
                  </div>
                  <div className="pb-6">
                    <h4 className="font-medium text-gray-800 mb-1">
                      Week 3-6: The Reality Check
                    </h4>
                    <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                      <li>Novelty wears off, discipline becomes crucial</li>
                      <li>First major soreness and fatigue sets in</li>
                      <li>Scale might not move as quickly as expected</li>
                    </ul>
                  </div>
                </div>

                {/* Timeline Item 3 */}
                <div className="flex">
                  <div className="flex flex-col items-center mr-4">
                    <div className="bg-purple-500 rounded-full w-3 h-3 mt-1"></div>
                    <div className="w-px bg-gray-300 h-full"></div>
                  </div>
                  <div className="pb-6">
                    <h4 className="font-medium text-gray-800 mb-1">
                      Month 2-3: The Habit Formation
                    </h4>
                    <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                      <li>Workouts become part of your routine</li>
                      <li>Start seeing noticeable physical changes</li>
                      <li>Develop personal preferences for exercises</li>
                    </ul>
                  </div>
                </div>

                {/* Timeline Item 4 */}
                <div className="flex">
                  <div className="flex flex-col items-center mr-4">
                    <div className="bg-purple-500 rounded-full w-3 h-3 mt-1"></div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">
                      Month 4+: The Lifestyle
                    </h4>
                    <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                      <li>Fitness becomes part of your identity</li>
                      <li>Automatically make healthier choices</li>
                      <li>Begin setting new performance goals</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            <section className="bg-white rounded-xl shadow-md mb-8 p-6 border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-2 rounded-lg mr-4">
                  <HeartPulse className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                  Recovery Essentials
                </h2>
              </div>

              <h3 className="text-lg font-semibold text-blue-700 mb-4 border-b pb-2">
                The Often Overlooked Pillar of Transformations
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {/* Recovery Method 1 */}
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Moon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-medium text-gray-800 mb-1">
                    Sleep Quality
                  </h4>
                  <ul className="text-xs text-gray-700 space-y-1">
                    <li>7-9 hours nightly</li>
                    <li>Consistent schedule</li>
                    <li>Cool, dark environment</li>
                  </ul>
                </div>

                {/* Recovery Method 2 */}
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Droplet className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-medium text-gray-800 mb-1">Hydration</h4>
                  <ul className="text-xs text-gray-700 space-y-1">
                    <li>0.5-1oz water/lb</li>
                    <li>Electrolyte balance</li>
                    <li>Monitor urine color</li>
                  </ul>
                </div>

                {/* Recovery Method 3 */}
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Activity className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-medium text-gray-800 mb-1">
                    Active Recovery
                  </h4>
                  <ul className="text-xs text-gray-700 space-y-1">
                    <li>Light walks</li>
                    <li>Yoga/stretching</li>
                    <li>Foam rolling</li>
                  </ul>
                </div>

                {/* Recovery Method 4 */}
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Banana className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-medium text-gray-800 mb-1">Nutrition</h4>
                  <ul className="text-xs text-gray-700 space-y-1">
                    <li>Post-workout protein</li>
                    <li>Anti-inflammatory foods</li>
                    <li>Micronutrient focus</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-100 rounded-lg p-4">
                <h4 className="font-medium text-blue-800 mb-2">
                  Recovery Progression Tips
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                  <div className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                      1
                    </span>
                    <p>Track sleep with wearable tech to identify patterns</p>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                      2
                    </span>
                    <p>Schedule deload weeks every 4-8 weeks of training</p>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                      3
                    </span>
                    <p>Contrast showers (hot/cold) for circulation</p>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                      4
                    </span>
                    <p>Meditation for stress management (5-10min daily)</p>
                  </div>
                </div>
              </div>
            </section>
            <section className="bg-white rounded-xl shadow-md mb-8 p-6 border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 p-2 rounded-lg mr-4">
                  <Home className="w-5 h-5 text-green-600" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                  Home Workout Solutions
                </h2>
              </div>

              <h3 className="text-lg font-semibold text-green-700 mb-4 border-b pb-2">
                Effective Training Without Gym Equipment
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Card 1 */}
                <div className="bg-green-50 rounded-lg overflow-hidden border border-green-200">
                  <div className="bg-green-100 p-4">
                    <h4 className="font-bold text-green-800">
                      Bodyweight Fundamentals
                    </h4>
                  </div>
                  <div className="p-4">
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start">
                        <span className="bg-green-200 text-green-800 rounded-full p-1 mr-2">
                          <Check className="h-3 w-3" />
                        </span>
                        <span>
                          Push-up variations (incline, decline, diamond)
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-green-200 text-green-800 rounded-full p-1 mr-2">
                          <Check className="h-3 w-3" />
                        </span>
                        <span>
                          Bodyweight squats → pistol squat progressions
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-green-200 text-green-800 rounded-full p-1 mr-2">
                          <Check className="h-3 w-3" />
                        </span>
                        <span>Plank variations (side, reverse, weighted)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-green-200 text-green-800 rounded-full p-1 mr-2">
                          <Check className="h-3 w-3" />
                        </span>
                        <span>
                          Pull-up alternatives (table rows, towel rows)
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-green-50 rounded-lg overflow-hidden border border-green-200">
                  <div className="bg-green-100 p-4">
                    <h4 className="font-bold text-green-800">
                      Minimal Equipment
                    </h4>
                  </div>
                  <div className="p-4">
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start">
                        <span className="bg-green-200 text-green-800 rounded-full p-1 mr-2">
                          <Check className="h-3 w-3" />
                        </span>
                        <span>Resistance bands for progressive overload</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-green-200 text-green-800 rounded-full p-1 mr-2">
                          <Check className="h-3 w-3" />
                        </span>
                        <span>Chair dips for triceps development</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-green-200 text-green-800 rounded-full p-1 mr-2">
                          <Check className="h-3 w-3" />
                        </span>
                        <span>Backpack weighted exercises</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-green-200 text-green-800 rounded-full p-1 mr-2">
                          <Check className="h-3 w-3" />
                        </span>
                        <span>Towel slides for core and mobility</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-green-300 rounded-lg p-4">
                <h4 className="font-medium text-green-800 mb-2">
                  Sample Home Workout Routine
                </h4>
                <div className="grid grid-cols-3 gap-2 text-xs font-medium text-green-800 mb-2">
                  <div className="bg-green-100 p-1 rounded text-center">
                    Exercise
                  </div>
                  <div className="bg-green-100 p-1 rounded text-center">
                    Sets
                  </div>
                  <div className="bg-green-100 p-1 rounded text-center">
                    Reps
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  {[
                    { exercise: "Pike Push-ups", sets: "3", reps: "8-12" },
                    {
                      exercise: "Single-leg Glute Bridge",
                      sets: "3",
                      reps: "10/side",
                    },
                    { exercise: "Inverted Rows", sets: "3", reps: "AMRAP" },
                    { exercise: "Jump Squats", sets: "3", reps: "15-20" },
                    { exercise: "Plank to Push-up", sets: "3", reps: "30sec" },
                  ].map((item, index) => (
                    <div key={index} className="grid grid-cols-3 gap-2">
                      <div className="p-1 border-b">{item.exercise}</div>
                      <div className="p-1 border-b text-center">
                        {item.sets}
                      </div>
                      <div className="p-1 border-b text-center">
                        {item.reps}
                      </div>
                    </div>
                  ))}
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
                      Dr. Lisa Hamilton, Sports Medicine Specialist
                    </a>
                  </p>

                  <p className="text-sm text-gray-600 mb-1">
                    — Written by{" "}
                    <a
                      href="#"
                      className="text-blue-600 hover:underline font-medium"
                    >
                      Jason Carter
                    </a>
                  </p>

                  <p className="text-sm text-gray-600 flex items-center gap-1">
                    — <CalendarIcon className="w-3 h-3" />
                    <a href="#" className="text-blue-600 hover:underline">
                      Updated on June 30, 2024
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
                  Get weekly transformation tips
                </h4>
                <p className="text-gray-700 text-sm">
                  Receive workout plans, nutrition guides, and success stories
                  directly to your inbox.
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
                Workout Programs
              </h3>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <h4 className="font-medium text-gray-800">Beginner</h4>
                  <a
                    href="#"
                    className="text-blue-600 text-sm hover:underline block"
                  >
                    12-Week Starter Program
                  </a>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-medium text-gray-800">Intermediate</h4>
                  <a
                    href="#"
                    className="text-blue-600 text-sm hover:underline block"
                  >
                    6-Month Strength Builder
                  </a>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-medium text-gray-800">Advanced</h4>
                  <a
                    href="#"
                    className="text-blue-600 text-sm hover:underline block"
                  >
                    Hypertrophy Specialization
                  </a>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Home Workouts</h4>
                  <a
                    href="#"
                    className="text-blue-600 text-sm hover:underline block"
                  >
                    No-Equipment Program
                  </a>
                </div>
              </div>
            </div>

            {/* Nutrition Resources */}
            <div className="bg-white rounded-lg p-6 mb-8 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Nutrition Guides
              </h3>
              <div className="space-y-3">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h4 className="text-sm font-medium text-blue-700 mb-1">
                    Meal Planning
                  </h4>
                  <a
                    href="#"
                    className="text-xs text-blue-600 hover:underline block"
                  >
                    Beginner's Meal Prep Guide
                  </a>
                </div>
                <div className="bg-teal-50 p-3 rounded-lg">
                  <h4 className="text-sm font-medium text-teal-700 mb-1">
                    Macro Calculator
                  </h4>
                  <a
                    href="#"
                    className="text-xs text-teal-600 hover:underline block"
                  >
                    Personalized Nutrition Plan
                  </a>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <h4 className="text-sm font-medium text-purple-700 mb-1">
                    Recipes
                  </h4>
                  <a
                    href="#"
                    className="text-xs text-purple-600 hover:underline block"
                  >
                    High-Protein Meal Ideas
                  </a>
                </div>
                <div className="bg-amber-50 p-3 rounded-lg">
                  <h4 className="text-sm font-medium text-amber-700 mb-1">
                    Eating Out Guide
                  </h4>
                  <a
                    href="#"
                    className="text-xs text-amber-600 hover:underline block"
                  >
                    Healthy Restaurant Choices
                  </a>
                </div>
              </div>
            </div>

            {/* Community Section */}
            <div className="bg-white rounded-lg p-6 mb-8 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Join Our Community
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
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <div>
                    <h4 className="text-sm font-medium text-gray-800">
                      Accountability Groups
                    </h4>
                    <a
                      href="#"
                      className="text-xs text-blue-600 hover:underline"
                    >
                      Find your fitness tribe
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
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <div>
                    <h4 className="text-sm font-medium text-gray-800">
                      Monthly Challenges
                    </h4>
                    <a
                      href="#"
                      className="text-xs text-blue-600 hover:underline"
                    >
                      Join our July challenge
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
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <div>
                    <h4 className="text-sm font-medium text-gray-800">
                      Q&A Sessions
                    </h4>
                    <a
                      href="#"
                      className="text-xs text-blue-600 hover:underline"
                    >
                      Ask our coaches anything
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
                <h4 className="font-bold mb-2">
                  Fitness Transformation Journal
                </h4>
                <p className="text-sm mb-4">
                  Track workouts, nutrition, and progress with our science-based
                  system
                </p>
                <button className="bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded text-sm font-medium transition-colors">
                  GET YOURS NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
