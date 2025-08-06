"use client";

import { useState } from "react";
import {
  Activity,
  HeartPulse,
  Moon,
  Sun,
  Clock,
  ChevronDown,
  Dumbbell,
  Leaf,
  Brain,
  Scale,
  Calendar,
  Snowflake,
  Zap,
  Waves,
  Droplet,
} from "lucide-react";

export default function FitnessArticle8() {
  const [email, setEmail] = useState("");
  const [activeTab, setActiveTab] = useState("Recovery");
  const [expandedSections, setExpandedSections] = useState({
    recovery: true,
    stress: false,
    sleep: false,
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
    "Recovery",
    "Stress Science",
    "Sleep Optimization",
    "Active Recovery",
    "Lifestyle Integration",
    "Case Studies",
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
                  <HeartPulse className="w-8 h-8 text-orange-600" />
                </div>
                <div>
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight">
                    Managing Stress and Recovery in Modern Fitness
                  </h1>
                  <p className="text-lg sm:text-xl text-gray-800 font-medium">
                    Learn effective strategies for incorporating recovery into
                    your fitness routine including sleep optimization, stress
                    management, active recovery, and lifestyle integration
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
                      {tab === "Recovery" && (
                        <Activity className="w-4 h-4 mr-1" />
                      )}
                      {tab === "Stress Science" && (
                        <Brain className="w-4 h-4 mr-1" />
                      )}
                      {tab === "Sleep Optimization" && (
                        <Moon className="w-4 h-4 mr-1" />
                      )}
                      {tab === "Active Recovery" && (
                        <Dumbbell className="w-4 h-4 mr-1" />
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
                    In today's high-performance fitness culture, recovery is no
                    longer an afterthought—it's a science. Modern athletes and
                    fitness enthusiasts are discovering that optimal results
                    come not just from training harder, but from recovering
                    smarter. This comprehensive guide explores the physiology of
                    recovery, evidence-based stress management techniques, and
                    practical strategies to enhance your body's repair
                    processes.
                  </p>
                  <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-400">
                    <p className="text-sm text-orange-800 font-medium">
                      "Elite athletes spend only 20% of their time training—the
                      other 80% is dedicated to recovery and preparation." -
                      Journal of Sports Sciences, 2023
                    </p>
                  </div>
                </div>
                <div className="md:w-1/3 bg-gradient-to-br from-orange-50 to-white rounded-lg p-4 flex flex-col items-center justify-center border border-orange-100">
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div className="bg-white p-3 rounded-lg shadow-xs border border-gray-100 flex flex-col items-center">
                      <Moon className="w-6 h-6 text-indigo-600 mb-1" />
                      <span className="text-xs text-center">Sleep Science</span>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-xs border border-gray-100 flex flex-col items-center">
                      <HeartPulse className="w-6 h-6 text-red-600 mb-1" />
                      <span className="text-xs text-center">HRV Tracking</span>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-xs border border-gray-100 flex flex-col items-center">
                      <Leaf className="w-6 h-6 text-green-600 mb-1" />
                      <span className="text-xs text-center">
                        Nutrition Timing
                      </span>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-xs border border-gray-100 flex flex-col items-center">
                      <Scale className="w-6 h-6 text-blue-600 mb-1" />
                      <span className="text-xs text-center">
                        Load Management
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 text-center">
                    Pillars of Modern Recovery Science
                  </p>
                </div>
              </div>
            </div>

            {/* Recovery Science Section */}
            <section
              className="bg-white rounded-xl shadow-md mb-8 overflow-hidden border border-gray-200"
              onClick={() => toggleSection("recovery")}
            >
              <div className="flex justify-between items-center bg-gradient-to-r from-orange-50 to-white p-5 cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-orange-100 p-2 rounded-lg mr-4">
                    <Activity className="w-5 h-5 text-orange-600" />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    The Science of Recovery
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
                      Why Recovery Matters
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
                            Adaptation Occurs During Rest
                          </h4>
                        </div>
                        <p className="text-sm text-gray-600">
                          Muscle growth, strength gains, and performance
                          improvements happen during recovery periods, not
                          during workouts. Training creates stimulus—recovery
                          enables adaptation.
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
                            Hormonal Balance
                          </h4>
                        </div>
                        <p className="text-sm text-gray-600">
                          Proper recovery maintains optimal
                          cortisol-testosterone balance. Chronic under-recovery
                          elevates cortisol while suppressing anabolic hormones.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Recovery Phases */}
                  <div className="bg-orange-50 rounded-lg p-5 mb-4">
                    <h3 className="font-semibold text-orange-800 mb-3">
                      The 4 Phases of Recovery
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div className="bg-white p-3 rounded-lg border border-orange-100">
                        <h4 className="text-sm font-medium text-orange-700 mb-1">
                          Immediate (0-30 min)
                        </h4>
                        <p className="text-xs text-gray-700">
                          ATP-PC replenishment, heart rate normalization
                        </p>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-orange-100">
                        <h4 className="text-sm font-medium text-orange-700 mb-1">
                          Short-term (30 min-4 hr)
                        </h4>
                        <p className="text-xs text-gray-700">
                          Glycogen resynthesis, lactate clearance
                        </p>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-orange-100">
                        <h4 className="text-sm font-medium text-orange-700 mb-1">
                          Training (24-48 hr)
                        </h4>
                        <p className="text-xs text-gray-700">
                          Protein synthesis, tissue repair
                        </p>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-orange-100">
                        <h4 className="text-sm font-medium text-orange-700 mb-1">
                          Chronic (weeks-months)
                        </h4>
                        <p className="text-xs text-gray-700">
                          Supercompensation, long-term adaptations
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Recovery Strategies */}
                  <div className="bg-white border border-gray-200 rounded-lg p-5">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Evidence-Based Recovery Strategies
                    </h3>
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-1">
                        <div className="flex items-start mb-2">
                          <span className="bg-orange-100 text-orange-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            1
                          </span>
                          <p className="text-sm text-gray-600">
                            <strong>Active Recovery:</strong> Light exercise
                            (30-50% VO2 max) enhances blood flow and nutrient
                            delivery
                          </p>
                        </div>
                        <div className="flex items-start mb-2">
                          <span className="bg-orange-100 text-orange-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            2
                          </span>
                          <p className="text-sm text-gray-600">
                            <strong>Nutrition Timing:</strong> 20-40g protein +
                            0.8g/kg carbs within 30 min post-exercise
                          </p>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start mb-2">
                          <span className="bg-orange-100 text-orange-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            3
                          </span>
                          <p className="text-sm text-gray-600">
                            <strong>Sleep Optimization:</strong> Prioritize 7-9
                            hours with emphasis on deep and REM cycles
                          </p>
                        </div>
                        <div className="flex items-start">
                          <span className="bg-orange-100 text-orange-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            4
                          </span>
                          <p className="text-sm text-gray-600">
                            <strong>Hydration:</strong> Replace 150% of sweat
                            losses with electrolyte-balanced fluids
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* Stress Management Section */}
            <section
              className="bg-white rounded-xl shadow-md mb-8 overflow-hidden border border-gray-200"
              onClick={() => toggleSection("stress")}
            >
              <div className="flex justify-between items-center bg-gradient-to-r from-blue-50 to-white p-5 cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-lg mr-4">
                    <Brain className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    Stress Science & Management
                  </h2>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    expandedSections.stress ? "rotate-180" : ""
                  }`}
                />
              </div>

              {expandedSections.stress && (
                <div className="p-5 pt-0">
                  {/* Stress Physiology */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      How Stress Impacts Fitness
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full bg-white rounded-lg overflow-hidden">
                        <thead className="bg-blue-100">
                          <tr>
                            <th className="py-2 px-4 text-left text-xs font-medium text-blue-800">
                              System
                            </th>
                            <th className="py-2 px-4 text-left text-xs font-medium text-blue-800">
                              Acute Stress Effect
                            </th>
                            <th className="py-2 px-4 text-left text-xs font-medium text-blue-800">
                              Chronic Stress Effect
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 text-xs">
                          <tr>
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Nervous
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Enhanced focus and reaction time
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Sympathetic overdrive, burnout
                            </td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Endocrine
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Brief cortisol/testosterone spike
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              HPA axis dysregulation
                            </td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Muscular
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Increased power output
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Protein breakdown, inhibited repair
                            </td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Immune
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Temporary immune boost
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Chronic inflammation
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Stress Management Techniques */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="font-semibold text-blue-800 mb-3">
                        Stress Monitoring Tools
                      </h3>
                      <div className="space-y-4">
                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                          <h4 className="font-medium text-gray-800 mb-1">
                            HRV Tracking
                          </h4>
                          <p className="text-xs text-gray-600">
                            Heart rate variability (HRV) is the gold standard
                            for measuring autonomic nervous system balance.
                            Higher variability indicates better recovery.
                          </p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                          <h4 className="font-medium text-gray-800 mb-1">
                            Sleep Quality Metrics
                          </h4>
                          <p className="text-xs text-gray-600">
                            Track deep sleep percentage, resting heart rate, and
                            wake events to assess recovery status.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-800 mb-3">
                        Stress Reduction Techniques
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
                              Box breathing (4-4-4-4 pattern) for 5 minutes
                              post-workout
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
                              10-minute daily mindfulness meditation (reduces
                              cortisol by 25%)
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
                              Nature exposure (20+ minutes lowers stress
                              hormones)
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
                              Digital detox 1 hour before bed (reduces
                              sympathetic activation)
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Stress Adaptation */}
                  <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      The Stress-Recovery-Adaptation Cycle
                    </h3>
                    <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-6 text-center">
                      <div className="grid grid-cols-3 gap-4 text-xs mb-4">
                        <div className="bg-white p-2 rounded border border-blue-100">
                          <div className="bg-blue-100 rounded-full w-8 h-8 mx-auto mb-1 flex items-center justify-center">
                            <Activity className="w-4 h-4 text-blue-600" />
                          </div>
                          <p>Stress Phase</p>
                        </div>
                        <div className="bg-white p-2 rounded border border-blue-100">
                          <div className="bg-blue-100 rounded-full w-8 h-8 mx-auto mb-1 flex items-center justify-center">
                            <Moon className="w-4 h-4 text-blue-600" />
                          </div>
                          <p>Recovery Phase</p>
                        </div>
                        <div className="bg-white p-2 rounded border border-blue-100">
                          <div className="bg-blue-100 rounded-full w-8 h-8 mx-auto mb-1 flex items-center justify-center">
                            <HeartPulse className="w-4 h-4 text-blue-600" />
                          </div>
                          <p>Adaptation Phase</p>
                        </div>
                      </div>
                      <p className="text-xs text-gray-600">
                        Optimal fitness progress requires balancing all three
                        phases. Most athletes fail by overemphasizing stress
                        (training) while neglecting recovery.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* Sleep Optimization Section */}
            <section
              className="bg-white rounded-xl shadow-md mb-8 overflow-hidden border border-gray-200"
              onClick={() => toggleSection("sleep")}
            >
              <div className="flex justify-between items-center bg-gradient-to-r from-indigo-50 to-white p-5 cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-indigo-100 p-2 rounded-lg mr-4">
                    <Moon className="w-5 h-5 text-indigo-600" />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    Sleep Optimization for Recovery
                  </h2>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    expandedSections.sleep ? "rotate-180" : ""
                  }`}
                />
              </div>

              {expandedSections.sleep && (
                <div className="p-5 pt-0">
                  {/* Sleep Science */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Why Sleep is the Ultimate Performance Enhancer
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-indigo-700 mb-2">
                          HGH Release
                        </h4>
                        <p className="text-xs text-gray-600">
                          70% of daily growth hormone is secreted during deep
                          sleep (Stage 3 NREM)
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-indigo-700 mb-2">
                          Memory Consolidation
                        </h4>
                        <p className="text-xs text-gray-600">
                          Motor skill improvement happens during REM sleep
                          through neural replay
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-indigo-700 mb-2">
                          Inflammation Reduction
                        </h4>
                        <p className="text-xs text-gray-600">
                          Just one night of poor sleep increases inflammatory
                          markers by 20-40%
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-indigo-700 mb-2">
                          Glycogen Restoration
                        </h4>
                        <p className="text-xs text-gray-600">
                          Muscle glycogen synthesis rates double during sleep
                          compared to waking rest
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-indigo-700 mb-2">
                          Protein Synthesis
                        </h4>
                        <p className="text-xs text-gray-600">
                          MPS (muscle protein synthesis) peaks during the first
                          3 hours of sleep
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-indigo-700 mb-2">
                          Pain Tolerance
                        </h4>
                        <p className="text-xs text-gray-600">
                          Sleep extension improves pain threshold by 15% in
                          athletes
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Sleep Optimization */}
                  <div className="bg-indigo-50 rounded-lg p-5 mb-6">
                    <h3 className="font-semibold text-indigo-800 mb-3">
                      Evidence-Based Sleep Optimization
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-medium text-indigo-700 mb-1">
                          Sleep Environment
                        </h4>
                        <ul className="text-xs text-gray-700 space-y-1">
                          <li>• Maintain 60-67°F (15-19°C) room temperature</li>
                          <li>
                            • Use blackout curtains (complete darkness ideal)
                          </li>
                          <li>
                            • Minimize EMF exposure (router distance, airplane
                            mode)
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-indigo-700 mb-1">
                          Sleep Timing
                        </h4>
                        <ul className="text-xs text-gray-700 space-y-1">
                          <li>
                            • Align with circadian rhythm (10pm-6am ideal)
                          </li>
                          <li>
                            • Consistent bedtime ±30 minutes (even weekends)
                          </li>
                          <li>
                            • 90-minute sleep cycles (aim for multiples: 6, 7.5,
                            9 hours)
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Sleep Supplements */}
                  <div className="bg-white border border-gray-200 rounded-lg p-5">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Sleep Supplement Protocol
                    </h3>
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-1">
                        <div className="flex items-start mb-2">
                          <span className="bg-indigo-100 text-indigo-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            1
                          </span>
                          <p className="text-sm text-gray-600">
                            <strong>Magnesium Glycinate:</strong> 200-400mg 1
                            hour before bed (enhances deep sleep)
                          </p>
                        </div>
                        <div className="flex items-start mb-2">
                          <span className="bg-indigo-100 text-indigo-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            2
                          </span>
                          <p className="text-sm text-gray-600">
                            <strong>L-Theanine:</strong> 100-200mg with dinner
                            (reduces sleep latency)
                          </p>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start mb-2">
                          <span className="bg-indigo-100 text-indigo-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            3
                          </span>
                          <p className="text-sm text-gray-600">
                            <strong>Apigenin:</strong> 50mg (found in chamomile,
                            binds GABA receptors)
                          </p>
                        </div>
                        <div className="flex items-start">
                          <span className="bg-indigo-100 text-indigo-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            4
                          </span>
                          <p className="text-sm text-gray-600">
                            <strong>Glycine:</strong> 3g before bed (lowers core
                            temperature)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* Nutrition & Lifestyle Section */}
            <section
              className="bg-white rounded-xl shadow-md mb-8 overflow-hidden border border-gray-200"
              onClick={() => toggleSection("nutrition")}
            >
              <div className="flex justify-between items-center bg-gradient-to-r from-green-50 to-white p-5 cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-green-100 p-2 rounded-lg mr-4">
                    <Leaf className="w-5 h-5 text-green-600" />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    Nutrition & Lifestyle Integration
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
                  {/* Recovery Nutrition */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Recovery Nutrition Timeline
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full bg-white rounded-lg overflow-hidden">
                        <thead className="bg-green-100">
                          <tr>
                            <th className="py-2 px-4 text-left text-xs font-medium text-green-800">
                              Time Window
                            </th>
                            <th className="py-2 px-4 text-left text-xs font-medium text-green-800">
                              Nutrition Priority
                            </th>
                            <th className="py-2 px-4 text-left text-xs font-medium text-green-800">
                              Sample Protocol
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 text-xs">
                          <tr>
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Pre-Workout (1-2hr before)
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Hydration, glycogen priming
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              500ml water + 25g carbs + 5g EAA
                            </td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="py-3 px-4 font-medium text-gray-800">
                                                              Intra-Workout (&gt;60min sessions)
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Electrolytes, carb fueling
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              500ml electrolyte drink + 30g carbs/hour
                            </td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Post-Workout (0-30min)
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Protein synthesis, glycogen replenishment
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              30g whey + 50g high-GI carbs
                            </td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Evening (pre-sleep)
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Overnight muscle repair
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              40g casein + healthy fats
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Lifestyle Factors */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="font-semibold text-green-800 mb-3">
                        Non-Exercise Activity Thermogenesis (NEAT)
                      </h3>
                      <div className="space-y-4">
                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                          <h4 className="font-medium text-gray-800 mb-1">
                            Active Recovery Days
                          </h4>
                          <p className="text-xs text-gray-600">
                            Aim for 8,000-10,000 steps at leisurely pace to
                            enhance blood flow without additional stress
                          </p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                          <h4 className="font-medium text-gray-800 mb-1">
                            Workstation Movement
                          </h4>
                          <p className="text-xs text-gray-600">
                            Standing desk, walking meetings, and hourly mobility
                            breaks reduce stiffness
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-green-800 mb-3">
                        Environmental Optimization
                      </h3>
                      <div className="bg-green-50 rounded-lg p-4 h-full">
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
                              Morning sunlight exposure (10-30 min) regulates
                              circadian rhythm
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
                              Cold exposure (60°F/15°C showers) reduces DOMS by
                              20-30%
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
                              Red light therapy (5-10 min) reduces inflammation
                              and enhances mitochondrial function
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Recovery Tracking */}
                  <div className="bg-white border border-gray-200 rounded-lg p-5">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Recovery Tracking Metrics
                    </h3>
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-1">
                        <div className="flex items-start mb-2">
                          <span className="bg-green-100 text-green-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            1
                          </span>
                          <p className="text-sm text-gray-600">
                            <strong>HRV (Heart Rate Variability):</strong> Daily
                            morning reading (higher = better recovery)
                          </p>
                        </div>
                        <div className="flex items-start mb-2">
                          <span className="bg-green-100 text-green-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            2
                          </span>
                          <p className="text-sm text-gray-600">
                            <strong>Resting Heart Rate:</strong> Track trends
                            (elevated RHR indicates incomplete recovery)
                          </p>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start mb-2">
                          <span className="bg-green-100 text-green-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            3
                          </span>
                          <p className="text-sm text-gray-600">
                            <strong>Sleep Quality Score:</strong> Combine
                            duration, deep/REM sleep, and awakenings
                          </p>
                        </div>
                        <div className="flex items-start">
                          <span className="bg-green-100 text-green-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            4
                          </span>
                          <p className="text-sm text-gray-600">
                            <strong>Subjective Feelings:</strong> Energy,
                            motivation, soreness on 1-10 scale
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
                Recovery Implementation Plan
              </h2>

              <div className="bg-orange-50 p-5 rounded-lg mb-5">
                <h3 className="text-lg font-semibold text-orange-800 mb-3">
                  7-Day Recovery Protocol
                </h3>
                <ol className="space-y-3">
                  {[
                    "Day 1: Post-workout - 20min contrast shower (3x hot 2min/cold 30sec)",
                    "Day 2: Active recovery - 45min nature walk + mobility work",
                    "Day 3: Nutrition focus - Increase protein to 2g/kg bodyweight",
                    "Day 4: Sleep optimization - Implement 1-hour digital detox before bed",
                    "Day 5: Stress management - 10min guided meditation post-training",
                    "Day 6: Hydration check - Monitor urine color (aim for pale straw)",
                    "Day 7: Assessment - Review HRV/sleep data and adjust training load",
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
                  Long-Term Recovery Strategy
                </h3>
                <p className="text-sm text-gray-700 mb-3">
                  Sustainable fitness progress requires viewing recovery as an
                  active process, not just the absence of training. Implement
                  periodized recovery blocks every 4-6 weeks (50% volume
                  reduction), track biomarkers quarterly, and adjust protocols
                  based on lifestyle stressors. Remember that recovery needs
                  change with age, training status, and life circumstances—what
                  worked last year may need adjustment today.
                </p>
                <p className="text-sm text-gray-700">
                  The most successful athletes aren't those who train hardest,
                  but those who recover most effectively. By making recovery a
                  pillar of your fitness regimen equal to training itself,
                  you'll achieve better results with less injury risk and
                  greater longevity in your sport or activity.
                </p>
              </div>
            </section>
            <section className="bg-white rounded-xl shadow-md mb-8 overflow-hidden border border-gray-200">
              <div className="flex justify-between items-center bg-gradient-to-r from-teal-50 to-white p-5 cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-teal-100 p-2 rounded-lg mr-4">
                    <Clock className="w-5 h-5 text-teal-600" />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    Periodization & Recovery Cycling
                  </h2>
                </div>
                <ChevronDown className="w-5 h-5 text-gray-500" />
              </div>

              <div className="p-5 pt-0">
                {/* Timeline Visualization */}
                <div className="bg-teal-50 rounded-lg p-4 mb-6 border border-teal-100">
                  <h3 className="font-semibold text-teal-800 mb-3">
                    Macrocycle Recovery Planning
                  </h3>
                  <div className="relative pl-8 border-l-2 border-teal-200 space-y-6">
                    {[
                      {
                        phase: "Base Phase (4-6 weeks)",
                        bullets: [
                          "• Moderate intensity (70-80% 1RM)",
                          "• 1 full rest day/week",
                          "• Weekly recovery: 1 active recovery session",
                        ],
                      },
                      {
                        phase: "Build Phase (3-5 weeks)",
                        bullets: [
                          "• High intensity (85-95% 1RM)",
                          "• 2 full rest days/week",
                          "• Weekly recovery: 2 active sessions + 1 massage",
                        ],
                      },
                      {
                        phase: "Peak Phase (2-3 weeks)",
                        bullets: [
                          "• Maximum intensity (90-100% 1RM)",
                          "• 3 full rest days/week",
                          "• Weekly recovery: 3 active sessions + cryotherapy",
                        ],
                      },
                      {
                        phase: "Deload (1 week)",
                        bullets: [
                          "• 50% volume reduction",
                          "• Focus on mobility",
                          "• Daily recovery protocols",
                        ],
                      },
                    ].map((item, index) => (
                      <div key={index} className="relative">
                        <div className="absolute -left-9 w-6 h-6 rounded-full bg-teal-200 border-4 border-white flex items-center justify-center">
                          <span className="text-xs font-bold text-teal-800">
                            {index + 1}
                          </span>
                        </div>
                        <h4 className="font-medium text-gray-800 mb-1">
                          {item.phase}
                        </h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          {item.bullets.map((bullet, i) => (
                            <li key={i}>{bullet}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Microcycle Strategies */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-teal-800 mb-3">
                      Weekly Recovery Protocol
                    </h3>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start">
                        <span className="bg-teal-100 text-teal-800 rounded-full p-1 mr-2 flex-shrink-0">
                          <svg
                            className="w-3 h-3"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        <span>
                          Monday: Foam rolling + dynamic stretching post-workout
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-teal-100 text-teal-800 rounded-full p-1 mr-2 flex-shrink-0">
                          <svg
                            className="w-3 h-3"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        <span>Wednesday: 20min contrast bath therapy</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-teal-100 text-teal-800 rounded-full p-1 mr-2 flex-shrink-0">
                          <svg
                            className="w-3 h-3"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        <span>Friday: Yoga or mobility-focused session</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-teal-800 mb-3">
                      Signs You Need More Recovery
                    </h3>
                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="bg-red-100 text-red-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 flex-shrink-0 text-xs">
                            !
                          </span>
                          <span>Resting heart rate 5-10bpm above normal</span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-red-100 text-red-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 flex-shrink-0 text-xs">
                            !
                          </span>
                          <span>Persistent muscle soreness (48hrs)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-red-100 text-red-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 flex-shrink-0 text-xs">
                            !
                          </span>
                          <span>
                            Decreased workout performance (2+ sessions)
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-red-100 text-red-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 flex-shrink-0 text-xs">
                            !
                          </span>
                          <span>Irritability or mood disturbances</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="bg-white rounded-xl shadow-md mb-8 overflow-hidden border border-gray-200">
              <div className="flex justify-between items-center bg-gradient-to-r from-indigo-50 to-white p-5 cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-indigo-100 p-2 rounded-lg mr-4">
                    <Activity className="w-5 h-5 text-indigo-600" />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    Advanced Recovery Modalities
                  </h2>
                </div>
                <ChevronDown className="w-5 h-5 text-gray-500" />
              </div>

              <div className="p-5 pt-0">
                {/* Modality Grid */}
                <div className="mb-6">
                  <h3 className="font-semibold text-indigo-800 mb-3">
                    Evidence-Based Recovery Technologies
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      {
                        icon: <HeartPulse className="w-6 h-6 text-red-500" />,
                        title: "PEMF Therapy",
                        desc: "Pulsed electromagnetic fields reduce inflammation and accelerate healing",
                      },
                      {
                        icon: <Snowflake className="w-6 h-6 text-blue-500" />,
                        title: "Whole Body Cryo",
                        desc: "-130°C exposure reduces muscle soreness by 30-50%",
                      },
                      {
                        icon: <Zap className="w-6 h-6 text-yellow-500" />,
                        title: "Red Light Therapy",
                        desc: "660nm wavelength boosts mitochondrial function",
                      },
                      {
                        icon: <Waves className="w-6 h-6 text-teal-500" />,
                        title: "Float Tanks",
                        desc: "Sensory deprivation enhances parasympathetic recovery",
                      },
                      {
                        icon: <Droplet className="w-6 h-6 text-sky-500" />,
                        title: "IV Hydration",
                        desc: "Medical-grade electrolyte/nutrient delivery",
                      },
                      {
                        icon: <Activity className="w-6 h-6 text-purple-500" />,
                        title: "Hyperbaric Oxygen",
                        desc: "2.0 ATA sessions increase stem cell circulation",
                      },
                    ].map((modality, index) => (
                      <div
                        key={index}
                        className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col items-center text-center"
                      >
                        <div className="bg-indigo-50 p-2 rounded-full mb-2">
                          {modality.icon}
                        </div>
                        <h4 className="font-medium text-indigo-700 mb-1">
                          {modality.title}
                        </h4>
                        <p className="text-xs text-gray-600">{modality.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Implementation Guide */}
                <div className="bg-indigo-50 rounded-lg p-5">
                  <h3 className="font-semibold text-indigo-800 mb-3">
                    Protocol Implementation
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-indigo-700 mb-2">
                        For General Fitness
                      </h4>
                      <ul className="text-xs text-gray-700 space-y-1 pl-5 list-disc">
                        <li>Foam rolling 3x/week (10min sessions)</li>
                        <li>Monthly sports massage</li>
                        <li>Contrast showers post-intense workouts</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-indigo-700 mb-2">
                        For Competitive Athletes
                      </h4>
                      <ul className="text-xs text-gray-700 space-y-1 pl-5 list-disc">
                        <li>Bi-weekly cryotherapy or PEMF sessions</li>
                        <li>Weekly float tank or red light therapy</li>
                        <li>Quarterly blood work to guide IV therapy</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-indigo-700 mb-2">
                        For Injury Recovery
                      </h4>
                      <ul className="text-xs text-gray-700 space-y-1 pl-5 list-disc">
                        <li>Daily hyperbaric oxygen for acute phase</li>
                        <li>PEMF 3x/week until healed</li>
                        <li>Custom IV nutrient protocols</li>
                      </ul>
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
                  {/* <User className="w-8 h-8 text-gray-600" /> */}
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
                      Dr. James Wilson, Sports Physiologist
                    </a>
                  </p>

                  <p className="text-sm text-gray-600 mb-1">
                    — Written by{" "}
                    <a
                      href="#"
                      className="text-blue-600 hover:underline font-medium"
                    >
                      Emma Thompson
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
                  FITNESS SCIENCE NEWSLETTER
                </h3>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Get recovery optimization tips
                </h4>
                <p className="text-gray-700 text-sm">
                  Monthly research summaries on sleep, stress management, and
                  performance recovery.
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

            {/* Recovery Resources */}
            <div className="bg-white rounded-lg p-6 mb-8 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Recovery Tools
              </h3>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <h4 className="font-medium text-gray-800">HRV Trackers</h4>
                  <a
                    href="#"
                    className="text-blue-600 text-sm hover:underline block"
                  >
                    Whoop Strap 4.0
                  </a>
                  <a
                    href="#"
                    className="text-blue-600 text-sm hover:underline block"
                  >
                    Oura Ring Gen3
                  </a>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-medium text-gray-800">Sleep Aids</h4>
                  <a
                    href="#"
                    className="text-blue-600 text-sm hover:underline block"
                  >
                    Chilipad Sleep System
                  </a>
                  <a
                    href="#"
                    className="text-blue-600 text-sm hover:underline block"
                  >
                    Manta Sleep Mask
                  </a>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Recovery Tech</h4>
                  <a
                    href="#"
                    className="text-blue-600 text-sm hover:underline block"
                  >
                    Theragun Elite
                  </a>
                  <a
                    href="#"
                    className="text-blue-600 text-sm hover:underline block"
                  >
                    NormaTec Pulse 2.0
                  </a>
                </div>
              </div>
            </div>

            {/* Educational Resources */}
            <div className="bg-white rounded-lg p-6 mb-8 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Recovery Guides
              </h3>
              <div className="space-y-3">
                <div className="bg-orange-50 p-3 rounded-lg">
                  <h4 className="text-sm font-medium text-orange-700 mb-1">
                    Sleep Optimization
                  </h4>
                  <a
                    href="#"
                    className="text-xs text-orange-600 hover:underline block"
                  >
                    Complete Guide to Athlete Sleep
                  </a>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h4 className="text-sm font-medium text-blue-700 mb-1">
                    Stress Management
                  </h4>
                  <a
                    href="#"
                    className="text-xs text-blue-600 hover:underline block"
                  >
                    HRV Training for Athletes
                  </a>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <h4 className="text-sm font-medium text-green-700 mb-1">
                    Active Recovery
                  </h4>
                  <a
                    href="#"
                    className="text-xs text-green-600 hover:underline block"
                  >
                    Mobility Routines for Recovery
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
                      Recovery Checklist
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
                      Sleep Tracker Template
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
                      Recovery Meal Plans
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
                <h4 className="font-bold mb-2">Recovery Protocol Journal</h4>
                <p className="text-sm mb-4">
                  Track sleep, HRV, nutrition and training in one place
                </p>
                <button className="bg-white hover:bg-gray-100 text-orange-600 px-4 py-2 rounded text-sm font-medium transition-colors">
                  GET YOUR COPY
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
