"use client";

import { useState } from "react";
import {
  Dumbbell,
  ShieldCheck,
  Settings,
  Award,
  ChevronDown,
  User,
  Calendar,
} from "lucide-react";

export default function FitnessArticle12() {
  const [email, setEmail] = useState("");
  const [activeTab, setActiveTab] = useState("Quality");
  const [expandedSections, setExpandedSections] = useState({
    quality: true,
    safety: false,
    selection: false,
    maintenance: false,
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
    "Quality",
    "Safety",
    "Selection",
    "Maintenance",
    "Standards",
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
            <div className="mb-6 sm:mb-8 bg-gradient-to-r from-orange-50 to-white rounded-xl p-6 text-black border border-orange-100">
              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-lg mr-4">
                  <Dumbbell className="w-8 h-8 text-orange-600" />
                </div>
                <div>
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight">
                    Understanding Fitness Equipment: Quality, Safety, and
                    Selection
                  </h1>
                  <p className="text-lg sm:text-xl text-gray-700 font-medium">
                    Explore equipment quality factors, safety certifications,
                    proper maintenance, and industry standards that ensure
                    you're getting effective, safe fitness gear
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
                      {tab === "Quality" && <Award className="w-4 h-4 mr-1" />}
                      {tab === "Safety" && (
                        <ShieldCheck className="w-4 h-4 mr-1" />
                      )}
                      {tab === "Selection" && (
                        <Dumbbell className="w-4 h-4 mr-1" />
                      )}
                      {tab === "Maintenance" && (
                        <Settings className="w-4 h-4 mr-1" />
                      )}
                      {tab}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Intro with Bullet Points */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 mb-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-2/3">
                  <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-4 leading-relaxed">
                    Choosing the right fitness equipment requires understanding
                    key quality indicators, safety standards, and proper
                    selection criteria. This guide breaks down everything you
                    need to know to make informed decisions about gym equipment
                    for home or commercial use.
                  </p>
                  <div className="space-y-3">
                    {[
                      "The global fitness equipment market is projected to reach $15.2 billion by 2028 (CAGR 4.6%)",
                      "Equipment-related injuries account for approximately 25% of all gym injuries annually",
                      "High-quality equipment lasts 3-5 times longer than budget alternatives with proper maintenance",
                      "Certified equipment reduces injury risk by up to 70% compared to uncertified alternatives",
                    ].map((item, index) => (
                      <div key={index} className="flex items-start">
                        <span className="bg-orange-100 text-orange-600 rounded-full p-1 mr-3 flex-shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
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
                        <span className="text-sm text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="md:w-1/3 bg-gradient-to-br from-orange-50 to-white rounded-lg p-4 flex flex-col items-center justify-center border border-orange-100">
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div className="bg-white p-3 rounded-lg shadow-xs border border-gray-100 flex flex-col items-center">
                      <Award className="w-6 h-6 text-orange-600 mb-1" />
                      <span className="text-xs text-center">Quality Marks</span>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-xs border border-gray-100 flex flex-col items-center">
                      <ShieldCheck className="w-6 h-6 text-blue-600 mb-1" />
                      <span className="text-xs text-center">Safety Certs</span>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-xs border border-gray-100 flex flex-col items-center">
                      <Settings className="w-6 h-6 text-teal-600 mb-1" />
                      <span className="text-xs text-center">Maintenance</span>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-xs border border-gray-100 flex flex-col items-center">
                      <Dumbbell className="w-6 h-6 text-amber-600 mb-1" />
                      <span className="text-xs text-center">Durability</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 text-center">
                    Key aspects of quality fitness equipment
                  </p>
                </div>
              </div>
            </div>

            {/* Quality Section */}
            <section
              className="bg-white rounded-xl shadow-md mb-8 overflow-hidden border border-gray-200"
              onClick={() => toggleSection("quality")}
            >
              <div className="flex justify-between items-center bg-gradient-to-r from-orange-50 to-white p-5 cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-orange-100 p-2 rounded-lg mr-4">
                    <Award className="w-5 h-5 text-orange-600" />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    Equipment Quality Factors
                  </h2>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    expandedSections.quality ? "rotate-180" : ""
                  }`}
                />
              </div>

              {expandedSections.quality && (
                <div className="p-5 pt-0">
                  {/* Quality Basics */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      What Makes Quality Fitness Equipment?
                    </h3>
                    <div className="space-y-4">
                      <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-400">
                        <p className="text-sm text-orange-800 font-medium">
                          "High-quality fitness equipment should withstand 3-5
                          times the expected user weight and maintain
                          functionality after thousands of repetitions." -
                          International Fitness Standards Association
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium text-gray-800 mb-2">
                            Material Quality Indicators
                          </h4>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-start">
                              <span className="bg-orange-100 text-orange-800 rounded-full p-0.5 mr-2 mt-0.5">
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
                                Steel thickness: 11-14 gauge for frames, 7-9mm
                                for weight plates
                              </span>
                            </li>
                            <li className="flex items-start">
                              <span className="bg-orange-100 text-orange-800 rounded-full p-0.5 mr-2 mt-0.5">
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
                                Commercial-grade bearings in moving parts
                              </span>
                            </li>
                            <li className="flex items-start">
                              <span className="bg-orange-100 text-orange-800 rounded-full p-0.5 mr-2 mt-0.5">
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
                                High-density rubber or polyurethane coatings
                              </span>
                            </li>
                            <li className="flex items-start">
                              <span className="bg-orange-100 text-orange-800 rounded-full p-0.5 mr-2 mt-0.5">
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
                                Powder-coated or chrome-plated finishes
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800 mb-2">
                            Construction Quality Indicators
                          </h4>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-start">
                              <span className="bg-orange-100 text-orange-800 rounded-full p-0.5 mr-2 mt-0.5">
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
                                Welded joints (not bolted) in high-stress areas
                              </span>
                            </li>
                            <li className="flex items-start">
                              <span className="bg-orange-100 text-orange-800 rounded-full p-0.5 mr-2 mt-0.5">
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
                                Reinforced stress points with gussets or extra
                                plating
                              </span>
                            </li>
                            <li className="flex items-start">
                              <span className="bg-orange-100 text-orange-800 rounded-full p-0.5 mr-2 mt-0.5">
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
                                Precision-machined pulleys and guide rods
                              </span>
                            </li>
                            <li className="flex items-start">
                              <span className="bg-orange-100 text-orange-800 rounded-full p-0.5 mr-2 mt-0.5">
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
                              <span>Minimum 1-year commercial warranty</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quality Comparison */}
                  <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Equipment Quality Levels Comparison
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full bg-white rounded-lg overflow-hidden">
                        <thead className="bg-orange-100">
                          <tr>
                            <th className="py-2 px-4 text-left text-xs font-medium text-orange-800">
                              Feature
                            </th>
                            <th className="py-2 px-4 text-left text-xs font-medium text-orange-800">
                              Budget
                            </th>
                            <th className="py-2 px-4 text-left text-xs font-medium text-orange-800">
                              Mid-Range
                            </th>
                            <th className="py-2 px-4 text-left text-xs font-medium text-orange-800">
                              Commercial
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 text-xs">
                          <tr>
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Frame Material
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              14-16 gauge steel
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              12-14 gauge steel
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              11-12 gauge steel
                            </td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Weight Capacity
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              200-300 lbs
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              300-500 lbs
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              500-1000+ lbs
                            </td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Warranty
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              90 days - 1 year
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              1-3 years
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              3-10 years
                            </td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Expected Lifespan
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              1-3 years
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              3-5 years
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              7-15+ years
                            </td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Safety Certs
                            </td>
                            <td className="py-3 px-4 text-gray-700">Basic</td>
                            <td className="py-3 px-4 text-gray-700">
                              Most standards
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              All major certifications
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Brand Quality */}
                  <div className="bg-orange-50 rounded-lg p-5">
                    <h3 className="font-semibold text-orange-800 mb-3">
                      Recognizing Quality Brands
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-medium text-orange-700 mb-2">
                          Commercial-Grade Brands
                        </h4>
                        <ul className="text-xs text-gray-700 space-y-1">
                          <li>• Life Fitness</li>
                          <li>• Technogym</li>
                          <li>• Precor</li>
                          <li>• Hammer Strength</li>
                          <li>• Cybex</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-orange-700 mb-2">
                          Quality Home Equipment
                        </h4>
                        <ul className="text-xs text-gray-700 space-y-1">
                          <li>• Rogue Fitness</li>
                          <li>• Rep Fitness</li>
                          <li>• Sole Fitness</li>
                          <li>• NordicTrack (select models)</li>
                          <li>• Bowflex (select models)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* Safety Section */}
            <section
              className="bg-white rounded-xl shadow-md mb-8 overflow-hidden border border-gray-200"
              onClick={() => toggleSection("safety")}
            >
              <div className="flex justify-between items-center bg-gradient-to-r from-blue-50 to-white p-5 cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-lg mr-4">
                    <ShieldCheck className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    Safety Standards & Certifications
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
                  {/* Safety Basics */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Essential Safety Certifications
                    </h3>
                    <div className="space-y-4">
                      <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-400">
                        <p className="text-sm text-blue-800 font-medium">
                          "Equipment meeting international safety standards
                          reduces injury risk by 62% compared to uncertified
                          alternatives." - Global Fitness Safety Council
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium text-gray-800 mb-2">
                            International Standards
                          </h4>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-start">
                              <span className="bg-blue-100 text-blue-800 rounded-full p-0.5 mr-2 mt-0.5">
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
                              <span>EN 957 (European Standard)</span>
                            </li>
                            <li className="flex items-start">
                              <span className="bg-blue-100 text-blue-800 rounded-full p-0.5 mr-2 mt-0.5">
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
                              <span>ASTM F2276 (US Standard)</span>
                            </li>
                            <li className="flex items-start">
                              <span className="bg-blue-100 text-blue-800 rounded-full p-0.5 mr-2 mt-0.5">
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
                              <span>ISO 20957 (International)</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800 mb-2">
                            Safety Features to Verify
                          </h4>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-start">
                              <span className="bg-blue-100 text-blue-800 rounded-full p-0.5 mr-2 mt-0.5">
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
                              <span>Emergency stop mechanisms</span>
                            </li>
                            <li className="flex items-start">
                              <span className="bg-blue-100 text-blue-800 rounded-full p-0.5 mr-2 mt-0.5">
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
                              <span>Pinch point protection</span>
                            </li>
                            <li className="flex items-start">
                              <span className="bg-blue-100 text-blue-800 rounded-full p-0.5 mr-2 mt-0.5">
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
                              <span>Weight stack enclosures</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Safety Checklist */}
                  <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Equipment Safety Checklist
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="text-sm font-medium text-blue-700 mb-2">
                          Before Purchase
                        </h4>
                        <ul className="text-xs text-gray-700 space-y-2">
                          <li className="flex items-start">
                            <span className="bg-blue-100 text-blue-800 rounded-full p-0.5 mr-2 flex-shrink-0">
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
                              Verify safety certifications (look for
                              labels/stamps)
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-blue-100 text-blue-800 rounded-full p-0.5 mr-2 flex-shrink-0">
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
                              Check weight capacity exceeds your needs
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-blue-100 text-blue-800 rounded-full p-0.5 mr-2 flex-shrink-0">
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
                              Test emergency stop functions if applicable
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="text-sm font-medium text-blue-700 mb-2">
                          Regular Maintenance
                        </h4>
                        <ul className="text-xs text-gray-700 space-y-2">
                          <li className="flex items-start">
                            <span className="bg-blue-100 text-blue-800 rounded-full p-0.5 mr-2 flex-shrink-0">
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
                            <span>Monthly bolt tightness checks</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-blue-100 text-blue-800 rounded-full p-0.5 mr-2 flex-shrink-0">
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
                            <span>Lubricate moving parts quarterly</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-blue-100 text-blue-800 rounded-full p-0.5 mr-2 flex-shrink-0">
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
                            <span>Inspect cables/pulleys every 6 months</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Injury Prevention */}
                  <div className="bg-blue-100 rounded-lg p-5">
                    <h3 className="font-semibold text-blue-800 mb-3">
                      Common Equipment-Related Injuries & Prevention
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full bg-white rounded-lg overflow-hidden">
                        <thead className="bg-blue-600 text-white">
                          <tr>
                            <th className="py-2 px-4 text-left text-xs font-medium">
                              Injury Type
                            </th>
                            <th className="py-2 px-4 text-left text-xs font-medium">
                              Common Causes
                            </th>
                            <th className="py-2 px-4 text-left text-xs font-medium">
                              Prevention
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 text-xs">
                          <tr>
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Pinch/Crush Injuries
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Unguarded moving parts, weight stacks
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Choose equipment with safety guards, maintain
                              proper clearance
                            </td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Overuse Injuries
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Poor ergonomics, incorrect settings
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Adjust equipment to body dimensions, vary workouts
                            </td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Impact Injuries
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Falling weights, unstable equipment
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Secure all weights, use spotter arms, check
                              stability
                            </td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Electrical Hazards
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Frayed cords, improper grounding
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Regular cord inspections, UL/ETL certification
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* Selection Section */}
            <section
              className="bg-white rounded-xl shadow-md mb-8 overflow-hidden border border-gray-200"
              onClick={() => toggleSection("selection")}
            >
              <div className="flex justify-between items-center bg-gradient-to-r from-teal-50 to-white p-5 cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-teal-100 p-2 rounded-lg mr-4">
                    <Dumbbell className="w-5 h-5 text-teal-600" />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    Equipment Selection Guide
                  </h2>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    expandedSections.selection ? "rotate-180" : ""
                  }`}
                />
              </div>

              {expandedSections.selection && (
                <div className="p-5 pt-0">
                  {/* Selection Basics */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Choosing the Right Equipment
                    </h3>
                    <div className="space-y-4">
                      <div className="bg-teal-50 rounded-lg p-4 border-l-4 border-teal-400">
                        <p className="text-sm text-teal-800 font-medium">
                          "The most expensive equipment isn't always the best -
                          match the gear to your specific fitness goals, space,
                          and budget for optimal results." - American Council on
                          Exercise
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                          <h4 className="font-medium text-teal-700 mb-2">
                            By Fitness Goal
                          </h4>
                          <ul className="text-xs text-gray-700 space-y-2">
                            <li className="flex items-start">
                              <span className="bg-teal-100 text-teal-800 rounded-full p-0.5 mr-2 flex-shrink-0">
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
                                Strength: Power rack, Olympic barbell, bumper
                                plates
                              </span>
                            </li>
                            <li className="flex items-start">
                              <span className="bg-teal-100 text-teal-800 rounded-full p-0.5 mr-2 flex-shrink-0">
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
                                Cardio: Treadmill, rower, assault bike
                              </span>
                            </li>
                            <li className="flex items-start">
                              <span className="bg-teal-100 text-teal-800 rounded-full p-0.5 mr-2 flex-shrink-0">
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
                                HIIT: Kettlebells, battle ropes, plyo boxes
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                          <h4 className="font-medium text-teal-700 mb-2">
                            By Space Available
                          </h4>
                          <ul className="text-xs text-gray-700 space-y-2">
                            <li className="flex items-start">
                              <span className="bg-teal-100 text-teal-800 rounded-full p-0.5 mr-2 flex-shrink-0">
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
                                Small: Adjustable dumbbells, resistance bands
                              </span>
                            </li>
                            <li className="flex items-start">
                              <span className="bg-teal-100 text-teal-800 rounded-full p-0.5 mr-2 flex-shrink-0">
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
                                Medium: Foldable bench, wall-mounted rack
                              </span>
                            </li>
                            <li className="flex items-start">
                              <span className="bg-teal-100 text-teal-800 rounded-full p-0.5 mr-2 flex-shrink-0">
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
                                Large: Full rack, dedicated cardio machines
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                          <h4 className="font-medium text-teal-700 mb-2">
                            By Budget Range
                          </h4>
                          <ul className="text-xs text-gray-700 space-y-2">
                            <li className="flex items-start">
                              <span className="bg-teal-100 text-teal-800 rounded-full p-0.5 mr-2 flex-shrink-0">
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
                              <span>$500-1000: Basic home gym essentials</span>
                            </li>
                            <li className="flex items-start">
                              <span className="bg-teal-100 text-teal-800 rounded-full p-0.5 mr-2 flex-shrink-0">
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
                                $1000-3000: Mid-range commercial hybrids
                              </span>
                            </li>
                            <li className="flex items-start">
                              <span className="bg-teal-100 text-teal-800 rounded-full p-0.5 mr-2 flex-shrink-0">
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
                              <span>$3000+: Full commercial-grade setup</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Equipment Comparison */}
                  <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Popular Equipment Types Comparison
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full bg-white rounded-lg overflow-hidden">
                        <thead className="bg-teal-100">
                          <tr>
                            <th className="py-2 px-4 text-left text-xs font-medium text-teal-800">
                              Equipment
                            </th>
                            <th className="py-2 px-4 text-left text-xs font-medium text-teal-800">
                              Best For
                            </th>
                            <th className="py-2 px-4 text-left text-xs font-medium text-teal-800">
                              Space Needed
                            </th>
                            <th className="py-2 px-4 text-left text-xs font-medium text-teal-800">
                              Price Range
                            </th>
                            <th className="py-2 px-4 text-left text-xs font-medium text-teal-800">
                              Lifespan
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 text-xs">
                          <tr>
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Adjustable Dumbbells
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Strength, limited space
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              2-4 sq ft
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              $300-$1000
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              5-10 years
                            </td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Power Rack
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Full-body strength
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              16-25 sq ft
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              $500-$3000
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              10-20 years
                            </td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Treadmill
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Cardio, running
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              12-20 sq ft
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              $600-$5000
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              5-15 years
                            </td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Rowing Machine
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Full-body cardio
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              8-12 sq ft (stored)
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              $500-$3000
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              10-15 years
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Buying Guide */}
                  <div className="bg-teal-50 rounded-lg p-5">
                    <h3 className="font-semibold text-teal-800 mb-3">
                      5-Step Buying Guide
                    </h3>
                    <div className="space-y-4">
                      {[
                        {
                          step: "1",
                          title: "Assess Your Needs",
                          content:
                            "Define your fitness goals, available space, and budget. Consider who will use the equipment and how often.",
                        },
                        {
                          step: "2",
                          title: "Research Options",
                          content:
                            "Compare 3-5 reputable brands. Read professional and user reviews. Check warranty terms.",
                        },
                        {
                          step: "3",
                          title: "Test Before Buying",
                          content:
                            "Visit showrooms to test equipment when possible. Check adjustability, comfort, and noise levels.",
                        },
                        {
                          step: "4",
                          title: "Verify Specifications",
                          content:
                            "Confirm weight capacities, dimensions, and electrical requirements match your space and needs.",
                        },
                        {
                          step: "5",
                          title: "Plan Delivery/Setup",
                          content:
                            "Measure doorways and plan for professional assembly if needed. Ensure proper flooring/protection.",
                        },
                      ].map((item) => (
                        <div key={item.step} className="flex items-start">
                          <span className="bg-teal-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 text-xs font-bold">
                            {item.step}
                          </span>
                          <div>
                            <h4 className="font-medium text-teal-800 mb-1">
                              {item.title}
                            </h4>
                            <p className="text-sm text-gray-700">
                              {item.content}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* Maintenance Section */}
            <section
              className="bg-white rounded-xl shadow-md mb-8 overflow-hidden border border-gray-200"
              onClick={() => toggleSection("maintenance")}
            >
              <div className="flex justify-between items-center bg-gradient-to-r from-purple-50 to-white p-5 cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-purple-100 p-2 rounded-lg mr-4">
                    <Settings className="w-5 h-5 text-purple-600" />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    Maintenance & Care
                  </h2>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    expandedSections.maintenance ? "rotate-180" : ""
                  }`}
                />
              </div>

              {expandedSections.maintenance && (
                <div className="p-5 pt-0">
                  {/* Maintenance Basics */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Proper Equipment Maintenance
                    </h3>
                    <div className="space-y-4">
                      <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-400">
                        <p className="text-sm text-purple-800 font-medium">
                          "Regular maintenance can extend equipment lifespan by
                          40-60% and reduce repair costs by up to 75% compared
                          to neglected equipment." - Fitness Equipment
                          Maintenance Association
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium text-gray-800 mb-2">
                            Maintenance Schedule
                          </h4>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-start">
                              <span className="bg-purple-100 text-purple-800 rounded-full p-0.5 mr-2 mt-0.5">
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
                                Daily: Wipe down surfaces, check for loose parts
                              </span>
                            </li>
                            <li className="flex items-start">
                              <span className="bg-purple-100 text-purple-800 rounded-full p-0.5 mr-2 mt-0.5">
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
                                Weekly: Lubricate chains/cables, inspect belts
                              </span>
                            </li>
                            <li className="flex items-start">
                              <span className="bg-purple-100 text-purple-800 rounded-full p-0.5 mr-2 mt-0.5">
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
                                Monthly: Tighten all bolts, check alignment
                              </span>
                            </li>
                            <li className="flex items-start">
                              <span className="bg-purple-100 text-purple-800 rounded-full p-0.5 mr-2 mt-0.5">
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
                                Annually: Professional inspection, deep cleaning
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800 mb-2">
                            Cleaning Guidelines
                          </h4>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-start">
                              <span className="bg-purple-100 text-purple-800 rounded-full p-0.5 mr-2 mt-0.5">
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
                                Upholstery: Mild soap + water, avoid harsh
                                chemicals
                              </span>
                            </li>
                            <li className="flex items-start">
                              <span className="bg-purple-100 text-purple-800 rounded-full p-0.5 mr-2 mt-0.5">
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
                                Metal: Wipe with dry cloth, use metal polish
                                sparingly
                              </span>
                            </li>
                            <li className="flex items-start">
                              <span className="bg-purple-100 text-purple-800 rounded-full p-0.5 mr-2 mt-0.5">
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
                                Electronics: Damp cloth only, never spray
                                directly
                              </span>
                            </li>
                            <li className="flex items-start">
                              <span className="bg-purple-100 text-purple-800 rounded-full p-0.5 mr-2 mt-0.5">
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
                                Rubber: Use rubber protectant to prevent drying
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Maintenance Checklist */}
                  <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Equipment Maintenance Checklist
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="text-sm font-medium text-purple-700 mb-2">
                          Strength Equipment
                        </h4>
                        <ul className="text-xs text-gray-700 space-y-2">
                          <li className="flex items-start">
                            <span className="bg-purple-100 text-purple-800 rounded-full p-0.5 mr-2 flex-shrink-0">
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
                              Check barbell sleeves for smooth rotation
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-purple-100 text-purple-800 rounded-full p-0.5 mr-2 flex-shrink-0">
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
                              Inspect cable/pulley systems for fraying
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-purple-100 text-purple-800 rounded-full p-0.5 mr-2 flex-shrink-0">
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
                            <span>Lubricate weight stack guide rods</span>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="text-sm font-medium text-purple-700 mb-2">
                          Cardio Equipment
                        </h4>
                        <ul className="text-xs text-gray-700 space-y-2">
                          <li className="flex items-start">
                            <span className="bg-purple-100 text-purple-800 rounded-full p-0.5 mr-2 flex-shrink-0">
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
                            <span>Vacuum under treadmills regularly</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-purple-100 text-purple-800 rounded-full p-0.5 mr-2 flex-shrink-0">
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
                            <span>Check belt tension and alignment</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-purple-100 text-purple-800 rounded-full p-0.5 mr-2 flex-shrink-0">
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
                            <span>Lubricate moving parts per manufacturer</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Troubleshooting */}
                  <div className="bg-purple-100 rounded-lg p-5">
                    <h3 className="font-semibold text-purple-800 mb-3">
                      Common Issues & Solutions
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full bg-white rounded-lg overflow-hidden">
                        <thead className="bg-purple-600 text-white">
                          <tr>
                            <th className="py-2 px-4 text-left text-xs font-medium">
                              Problem
                            </th>
                            <th className="py-2 px-4 text-left text-xs font-medium">
                              Likely Cause
                            </th>
                            <th className="py-2 px-4 text-left text-xs font-medium">
                              Solution
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 text-xs">
                          <tr>
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Squeaking noises
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Lack of lubrication, loose parts
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Lubricate joints, tighten bolts
                            </td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Uneven belt movement
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Misalignment, worn belt
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Realign belt, replace if worn
                            </td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Resistance fluctuations
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Dirty sensors, electrical issues
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Clean contacts, check wiring
                            </td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="py-3 px-4 font-medium text-gray-800">
                              Sticking mechanisms
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Dirt buildup, lack of lubrication
                            </td>
                            <td className="py-3 px-4 text-gray-700">
                              Clean and lubricate moving parts
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* Industry Standards Section */}
            <section className="bg-white rounded-xl shadow-md mb-10 p-6">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                Fitness Equipment Industry Standards
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Certification Bodies */}
                <div className="bg-gradient-to-br from-orange-50 to-white rounded-lg p-5 border border-orange-100">
                  <h3 className="font-semibold text-orange-800 mb-3">
                    Major Certification Organizations
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
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
                      <span className="text-sm text-gray-700">
                        TÜV SÜD: German safety certification for commercial
                        equipment
                      </span>
                    </div>
                    <div className="flex items-start">
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
                      <span className="text-sm text-gray-700">
                        UL/ETL: Electrical safety standards for motorized
                        equipment
                      </span>
                    </div>
                    <div className="flex items-start">
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
                      <span className="text-sm text-gray-700">
                        EN 957: European standard for stationary training
                        equipment
                      </span>
                    </div>
                    <div className="flex items-start">
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
                      <span className="text-sm text-gray-700">
                        ASTM F2276: US standard for fitness equipment
                      </span>
                    </div>
                  </div>
                </div>

                {/* Testing Procedures */}
                <div className="bg-gradient-to-br from-teal-50 to-white rounded-lg p-5 border border-teal-100">
                  <h3 className="font-semibold text-teal-800 mb-3">
                    Standard Testing Procedures
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
                        Fatigue testing: 100,000+ cycles at max load
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
                        Static load testing: 2-3x rated capacity
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
                        Impact testing: Simulates accidental drops
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
                        Ergonomics testing: Comfort and usability
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-gradient-to-r from-blue-50 to-white p-5 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-blue-800 mb-3">
                  Warranty Considerations
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="text-sm font-medium text-blue-700 mb-1">
                      Frame
                    </h4>
                    <p className="text-xs text-gray-600">
                      Commercial: 10+ years, Home: 2-5 years
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-blue-700 mb-1">
                      Parts
                    </h4>
                    <p className="text-xs text-gray-600">
                      Commercial: 2-5 years, Home: 1-3 years
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-blue-700 mb-1">
                      Labor
                    </h4>
                    <p className="text-xs text-gray-600">
                      Commercial: 1-3 years, Home: 90 days-1 year
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Final Takeaways */}
            <section className="bg-white rounded-xl shadow-md mb-10 p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                Key Equipment Selection Takeaways
              </h2>

              <div className="bg-orange-50 p-5 rounded-lg mb-5">
                <h3 className="text-lg font-semibold text-orange-800 mb-3">
                  Essential Considerations
                </h3>
                <ol className="space-y-3">
                  {[
                    "Prioritize equipment with recognized safety certifications (EN 957, ASTM F2276)",
                    "Match equipment to your specific fitness goals, space, and budget",
                    "Commercial-grade equipment offers better durability but costs more upfront",
                    "Proper maintenance can extend equipment lifespan by 40-60%",
                    "Warranty terms indicate manufacturer confidence in product quality",
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
                  Future of Fitness Equipment
                </h3>
                <p className="text-sm text-gray-700 mb-3">
                  The fitness equipment industry continues to evolve with smart
                  technology integration, improved ergonomics, and more
                  sustainable materials. Emerging trends include AI-powered form
                  correction, virtual reality integration, and equipment made
                  from recycled materials. As home gyms become more popular,
                  expect to see more space-efficient designs and hybrid
                  equipment that serves multiple functions.
                </p>
                <p className="text-sm text-gray-700">
                  Regardless of technological advances, the fundamentals of
                  quality construction, proper maintenance, and safe usage will
                  remain essential for getting the most value from your fitness
                  equipment investments.
                </p>
              </div>
            </section>
            <section className="bg-white rounded-xl shadow-md mb-8 p-6 border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="bg-amber-100 p-2 rounded-lg mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-amber-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                  Ergonomics & User Experience
                </h2>
              </div>

              <div className="relative pl-8 border-l-2 border-amber-200 space-y-8">
                {[
                  {
                    title: "Adjustability Ranges",
                    content: [
                      'Seat height: Should accommodate 5th to 95th percentile users (typically 16-22" range)',
                      "Handle positions: Minimum 3 adjustment points for arms/legs",
                      "Resistance increments: 5-10% increases for progressive overload",
                    ],
                  },
                  {
                    title: "Comfort Features",
                    content: [
                      'Padded surfaces: Minimum 1.5" high-density foam for benches',
                      'Contoured grips: Diameter between 1-1.5" for proper grip',
                      "Breathable materials: Mesh fabrics for cardio equipment",
                    ],
                  },
                  {
                    title: "User Interface Design",
                    content: [
                      "Display visibility: 30+ degree viewing angle from all positions",
                      "Control placement: Within easy reach during exercise",
                      "Feedback systems: Immediate response to input changes",
                    ],
                  },
                ].map((item, index) => (
                  <div key={index} className="relative">
                    <div className="absolute -left-9 top-1 flex items-center justify-center w-6 h-6 rounded-full bg-amber-100 border-2 border-amber-300">
                      <span className="text-xs font-bold text-amber-800">
                        {index + 1}
                      </span>
                    </div>
                    <div className="bg-amber-50 rounded-lg p-4 shadow-sm">
                      <h3 className="font-semibold text-amber-800 mb-2">
                        {item.title}
                      </h3>
                      <ul className="space-y-1 text-sm text-gray-700">
                        {item.content.map((point, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-amber-500 mr-2">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-amber-50 rounded-lg p-4 border border-amber-100">
                <h3 className="font-medium text-amber-800 mb-2">
                  Ergonomic Testing Standards
                </h3>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="bg-white p-2 rounded">ISO 20957-1</div>
                  <div className="bg-white p-2 rounded">EN 957-8</div>
                  <div className="bg-white p-2 rounded">ASTM F3021</div>
                  <div className="bg-white p-2 rounded">ANSI/AFEA 001</div>
                </div>
              </div>
            </section>
            <section className="bg-white rounded-xl shadow-md mb-8 p-6 border border-gray-200">
              <div className="flex items-center mb-6">
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
                <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                  Technology Integration
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {[
                  {
                    icon: "📲",
                    title: "Smart Connectivity",
                    features: [
                      "Bluetooth 5.0+ for device pairing",
                      "ANT+ compatibility for fitness trackers",
                      "Wi-Fi enabled for streaming",
                    ],
                  },
                  {
                    icon: "📊",
                    title: "Performance Tracking",
                    features: [
                      "Rep counting accuracy ≥98%",
                      "Force plate integration",
                      "3D motion capture compatibility",
                    ],
                  },
                  {
                    icon: "🖥️",
                    title: "Display Systems",
                    features: [
                      'Minimum 7" touchscreens',
                      "200+ nits brightness",
                      "Glare-resistant coatings",
                    ],
                  },
                  {
                    icon: "🔋",
                    title: "Power Management",
                    features: [
                      "Energy-saving modes",
                      "Self-powered options",
                      "Battery backup systems",
                    ],
                  },
                ].map((tech, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="text-2xl mb-2">{tech.icon}</div>
                    <h3 className="font-semibold text-indigo-700 mb-2">
                      {tech.title}
                    </h3>
                    <ul className="space-y-1 text-sm text-gray-700">
                      {tech.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-indigo-400 mr-2">-</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="bg-indigo-50 rounded-lg p-4">
                <h3 className="font-medium text-indigo-800 mb-2">
                  Emerging Tech Trends
                </h3>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="bg-white px-3 py-1 rounded-full border border-indigo-100">
                    AI Form Coaching
                  </span>
                  <span className="bg-white px-3 py-1 rounded-full border border-indigo-100">
                    VR Integration
                  </span>
                  <span className="bg-white px-3 py-1 rounded-full border border-indigo-100">
                    Haptic Feedback
                  </span>
                  <span className="bg-white px-3 py-1 rounded-full border border-indigo-100">
                    Biometric Auth
                  </span>
                </div>
              </div>
            </section>
            <section className="bg-white rounded-xl shadow-md mb-8 overflow-hidden border border-gray-200">
              <div className="flex items-center bg-gradient-to-r from-green-50 to-white p-5">
                <div className="bg-green-100 p-2 rounded-lg mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-green-600"
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
                <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                  Sustainability & Eco-Design
                </h2>
              </div>

              <div className="divide-y divide-gray-100">
                {[
                  {
                    title: "Material Selection",
                    content: [
                      "Recycled steel content ≥30%",
                      "Bamboo/rubber composite parts",
                      "Water-based powder coatings",
                    ],
                    stats: "Reduces carbon footprint by 40% vs conventional",
                  },
                  {
                    title: "Energy Efficiency",
                    content: [
                      "ENERGY STAR certified motors",
                      "Auto-shutoff after 15 mins idle",
                      "Regenerative braking systems",
                    ],
                    stats: "Saves 200+ kWh annually per machine",
                  },
                  {
                    title: "End-of-Life Planning",
                    content: [
                      "85%+ recyclable components",
                      "Take-back programs",
                      "Modular design for repairs",
                    ],
                    stats: "Extends lifespan by 3-5 years",
                  },
                ].map((item, index) => (
                  <details
                    key={index}
                    className="group p-4 hover:bg-green-50 transition-colors"
                  >
                    <summary className="flex justify-between items-center cursor-pointer">
                      <h3 className="font-medium text-green-800">
                        {item.title}
                      </h3>
                      <svg
                        className="w-5 h-5 text-green-500 transform group-open:rotate-180 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </summary>
                    <div className="mt-3 space-y-2">
                      <ul className="space-y-1 text-sm text-gray-700 pl-5">
                        {item.content.map((point, i) => (
                          <li
                            key={i}
                            className="relative before:absolute before:-left-3 before:content-['✓'] before:text-green-500"
                          >
                            {point}
                          </li>
                        ))}
                      </ul>
                      <div className="bg-green-100 text-green-800 text-xs p-2 rounded mt-2">
                        {item.stats}
                      </div>
                    </div>
                  </details>
                ))}
              </div>

              <div className="p-5 bg-green-50">
                <h3 className="font-medium text-green-800 mb-2">
                  Certifications to Look For
                </h3>
                <div className="grid grid-cols-3 gap-2 text-xs text-center">
                  <div className="bg-white p-2 rounded border border-green-200">
                    GREENGUARD
                  </div>
                  <div className="bg-white p-2 rounded border border-green-200">
                    EPEAT
                  </div>
                  <div className="bg-white p-2 rounded border border-green-200">
                    FSC
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
                      James Wilson, CSCS
                    </a>
                  </p>

                  <p className="text-sm text-gray-600 mb-1">
                    — Written by{" "}
                    <a
                      href="#"
                      className="text-blue-600 hover:underline font-medium"
                    >
                      Fitness Equipment Guide Team
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
            <div className="bg-orange-50 rounded-lg p-6 mb-8">
              <div className="mb-4">
                <h3 className="text-sm font-bold text-orange-800 uppercase tracking-wide mb-2">
                  FITNESS EQUIPMENT DIGEST
                </h3>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Get expert equipment guides
                </h4>
                <p className="text-gray-700 text-sm">
                  Monthly updates on new equipment reviews, maintenance tips,
                  and home gym setup advice.
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

            {/* Equipment Resources */}
            <div className="bg-white rounded-lg p-6 mb-8 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Equipment Resources
              </h3>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <h4 className="font-medium text-gray-800">
                    Safety Standards
                  </h4>
                  <a
                    href="#"
                    className="text-blue-600 text-sm hover:underline block"
                  >
                    ASTM Fitness Equipment Standards
                  </a>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-medium text-gray-800">Buying Guides</h4>
                  <a
                    href="#"
                    className="text-blue-600 text-sm hover:underline block"
                  >
                    Consumer Reports Fitness Equipment
                  </a>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-medium text-gray-800">Maintenance</h4>
                  <a
                    href="#"
                    className="text-blue-600 text-sm hover:underline block"
                  >
                    IFMA Maintenance Guidelines
                  </a>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Reviews</h4>
                  <a
                    href="#"
                    className="text-blue-600 text-sm hover:underline block"
                  >
                    Commercial Equipment Comparisons
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
                      Home Gym Planner
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
                      Maintenance Checklist
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
                      Safety Standards Guide
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
                <h4 className="font-bold mb-2">Equipment Maintenance Course</h4>
                <p className="text-sm mb-4">
                  Learn professional maintenance techniques to extend your
                  equipment's life
                </p>
                <button className="bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded text-sm font-medium transition-colors">
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
