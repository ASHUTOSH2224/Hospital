"use client";

import { useState } from "react";
import { User, Calendar, Moon, Sun, Activity, ChevronDown } from "lucide-react";

export default function CbdArticle10() {
  const [email, setEmail] = useState("");
  const [activeTab, setActiveTab] = useState("Stress Relief");
  const [expandedSections, setExpandedSections] = useState({
    stress: true,
    sleep: false,
    routines: false,
    mistakes: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  const tabs = [
    "Stress Relief",
    "Sleep Support",
    "Daily Routines",
    "Product Guide",
    "Dosing Strategies",
    "Common Mistakes",
    "Success Stories",
    "Takeaways"
  ];

  return (
    <div className="min-h-screen bg-white mt-40 lg:mt-40 pt-4 sm:pt-8 md:pt-12 lg:pt-16 xl:pt-20">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
        {/* Main grid container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Main Content - takes 2/3 width on large screens */}
          <div className="lg:col-span-2">
            {/* Header Section with Gradient */}
            <div className="mb-6 sm:mb-8 bg-gradient-to-r from-blue-800 to-teal-600 rounded-xl p-6 text-white">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight">
                Managing Stress and Sleep with CBD in Modern Life
              </h1>
              <p className="text-lg sm:text-xl text-blue-100 font-medium">
                Learn effective strategies for incorporating CBD into your wellness routine including timing, dosage, product selection, and lifestyle integration
              </p>
            </div>

            {/* Navigation Tabs with Pills */}
            <div className="relative mb-4 sm:mb-6">
              <div className="flex overflow-x-auto pb-2 mb-4 sm:mb-6 scrollbar-hide">
                <div className="flex space-x-2 min-w-max">
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full whitespace-nowrap transition-colors flex-shrink-0 ${
                        activeTab === tab
                          ? "bg-teal-600 text-white shadow-md"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Intro with Stats */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 mb-8">
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 leading-relaxed">
                In our fast-paced world, 77% of people report regular stress symptoms, while 1 in 3 adults don't get enough sleep. CBD has emerged as a natural ally for modern wellness challenges. This guide combines scientific insights with practical strategies to help you optimize CBD for stress relief and sleep support.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-blue-50 p-3 rounded-lg text-center">
                  <p className="text-2xl font-bold text-blue-700">30%</p>
                  <p className="text-xs text-blue-600">Reduction in stress markers</p>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg text-center">
                  <p className="text-2xl font-bold text-purple-700">42 min</p>
                  <p className="text-xs text-purple-600">Faster sleep onset</p>
                </div>
                <div className="bg-teal-50 p-3 rounded-lg text-center">
                  <p className="text-2xl font-bold text-teal-700">4:1</p>
                  <p className="text-xs text-teal-600">Optimal CBD:CBN ratio for sleep</p>
                </div>
                <div className="bg-amber-50 p-3 rounded-lg text-center">
                  <p className="text-2xl font-bold text-amber-700">76%</p>
                  <p className="text-xs text-amber-600">Users report improved sleep quality</p>
                </div>
              </div>
            </div>

            {/* Stress Management Section */}
            <section 
              className="bg-white rounded-xl shadow-md mb-8 overflow-hidden border border-gray-200"
              onClick={() => toggleSection('stress')}
            >
              <div className="flex justify-between items-center bg-gradient-to-r from-blue-50 to-white p-5 cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-lg mr-4">
                    <Activity className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    CBD for Stress Management
                  </h2>
                </div>
                <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${expandedSections.stress ? 'rotate-180' : ''}`} />
              </div>
              
              {expandedSections.stress && (
                <div className="p-5 pt-0">
                  <div className="grid md:grid-cols-2 gap-6 mt-4">
                    {/* Morning Stress Prevention */}
                    <div className="bg-white border border-gray-100 rounded-lg p-5 shadow-sm">
                      <div className="flex items-center mb-3">
                        <Sun className="w-5 h-5 text-amber-500 mr-2" />
                        <h3 className="font-semibold text-gray-800">Morning Routine</h3>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        Start your day with proactive stress defense:
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </span>
                          <span>10-15mg CBD with breakfast (oil or capsule)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </span>
                          <span>Combine with 5 minutes of deep breathing</span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </span>
                          <span>CBD-infused coffee for gradual absorption</span>
                        </li>
                      </ul>
                    </div>

                    {/* Acute Stress Relief */}
                    <div className="bg-white border border-gray-100 rounded-lg p-5 shadow-sm">
                      <div className="flex items-center mb-3">
                        <Activity className="w-5 h-5 text-red-500 mr-2" />
                        <h3 className="font-semibold text-gray-800">Acute Stress Response</h3>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        For sudden stressful moments:
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="bg-red-100 text-red-800 rounded-full p-1 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </span>
                          <span>5-10mg CBD sublingual tincture (fast-acting)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-red-100 text-red-800 rounded-full p-1 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </span>
                          <span>Pair with box breathing technique</span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-red-100 text-red-800 rounded-full p-1 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </span>
                          <span>Keep CBD vape pen for emergency situations</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Product Recommendations */}
                  <div className="mt-6 bg-blue-50 rounded-lg p-5">
                    <h3 className="font-semibold text-blue-800 mb-3">Best Products for Stress</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-white p-3 rounded-lg border border-blue-100">
                        <h4 className="text-sm font-medium text-blue-700 mb-1">Daily Maintenance</h4>
                        <p className="text-xs text-gray-600">Broad-spectrum capsules (15-25mg)</p>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-blue-100">
                        <h4 className="text-sm font-medium text-blue-700 mb-1">Fast-Acting Relief</h4>
                        <p className="text-xs text-gray-600">Nano-emulsified tinctures</p>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-blue-100">
                        <h4 className="text-sm font-medium text-blue-700 mb-1">Workplace Friendly</h4>
                        <p className="text-xs text-gray-600">CBD mints or gum (2-5mg per piece)</p>
                      </div>
                    </div>
                  </div>

                  {/* Scientific Insight */}
                  <div className="mt-6 bg-white border-l-4 border-blue-400 rounded-r-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">How CBD Helps with Stress</h3>
                    <p className="text-sm text-gray-600">
                      CBD interacts with the endocannabinoid system to modulate cortisol production and enhance serotonin signaling. Studies show it reduces activity in the amygdala (the brain's fear center) while increasing prefrontal cortex connectivity for better emotional regulation.
                    </p>
                  </div>
                </div>
              )}
            </section>

            {/* Sleep Support Section */}
            <section 
              className="bg-white rounded-xl shadow-md mb-8 overflow-hidden border border-gray-200"
              onClick={() => toggleSection('sleep')}
            >
              <div className="flex justify-between items-center bg-gradient-to-r from-purple-50 to-white p-5 cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-purple-100 p-2 rounded-lg mr-4">
                    <Moon className="w-5 h-5 text-purple-600" />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    CBD for Sleep Optimization
                  </h2>
                </div>
                <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${expandedSections.sleep ? 'rotate-180' : ''}`} />
              </div>
              
              {expandedSections.sleep && (
                <div className="p-5 pt-0">
                  {/* Sleep Timeline */}
                  <div className="relative mt-5 pl-8 border-l-2 border-purple-200">
                    <div className="absolute left-0 -ml-4 w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                      <span className="text-purple-600 text-sm font-bold">1</span>
                    </div>
                    <h3 className="text-md font-semibold text-gray-800 mb-2">Evening Wind-Down (7-9 PM)</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      10-20mg CBD with CBN (1:1 ratio) to initiate relaxation response. Combine with dim lighting and digital detox.
                    </p>

                    <div className="absolute left-0 -ml-4 w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mt-2">
                      <span className="text-purple-600 text-sm font-bold">2</span>
                    </div>
                    <h3 className="text-md font-semibold text-gray-800 mb-2">Pre-Bed Routine (30 min before sleep)</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      25-50mg CBD full-spectrum oil sublingually. Pair with magnesium supplement and light stretching.
                    </p>

                    <div className="absolute left-0 -ml-4 w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mt-2">
                      <span className="text-purple-600 text-sm font-bold">3</span>
                    </div>
                    <h3 className="text-md font-semibold text-gray-800 mb-2">Middle-of-Night Support</h3>
                    <p className="text-sm text-gray-600">
                      Keep CBD/CBN gummies (5mg each) bedside for occasional wake-ups. Dissolve under tongue for faster absorption.
                    </p>
                  </div>

                  {/* Sleep Stack Suggestions */}
                  <div className="mt-6 bg-purple-50 rounded-lg p-5">
                    <h3 className="font-semibold text-purple-800 mb-3">Advanced Sleep Stacks</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-lg border border-purple-100">
                        <h4 className="text-sm font-medium text-purple-700 mb-2">For Sleep Onset</h4>
                        <ul className="text-xs text-gray-600 space-y-1">
                          <li>• 25mg CBD</li>
                          <li>• 5mg CBN</li>
                          <li>• 3mg melatonin</li>
                          <li>• 200mg magnesium glycinate</li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-purple-100">
                        <h4 className="text-sm font-medium text-purple-700 mb-2">For Sleep Maintenance</h4>
                        <ul className="text-xs text-gray-600 space-y-1">
                          <li>• 15mg CBD</li>
                          <li>• 10mg CBN</li>
                          <li>• 100mg L-theanine</li>
                          <li>• 1mg time-release melatonin</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Product Comparison */}
                  <div className="mt-6">
                    <h3 className="font-semibold text-gray-800 mb-3">CBD Sleep Product Comparison</h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full bg-white rounded-lg overflow-hidden">
                        <thead className="bg-purple-100">
                          <tr>
                            <th className="py-2 px-4 text-left text-xs font-medium text-purple-800">Type</th>
                            <th className="py-2 px-4 text-left text-xs font-medium text-purple-800">Onset Time</th>
                            <th className="py-2 px-4 text-left text-xs font-medium text-purple-800">Duration</th>
                            <th className="py-2 px-4 text-left text-xs font-medium text-purple-800">Best For</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 text-xs">
                          <tr>
                            <td className="py-3 px-4 font-medium text-gray-800">Tinctures</td>
                            <td className="py-3 px-4 text-gray-700">30-45 min</td>
                            <td className="py-3 px-4 text-gray-700">4-6 hours</td>
                            <td className="py-3 px-4 text-gray-700">Sleep initiation</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 font-medium text-gray-800">Capsules</td>
                            <td className="py-3 px-4 text-gray-700">60-90 min</td>
                            <td className="py-3 px-4 text-gray-700">6-8 hours</td>
                            <td className="py-3 px-4 text-gray-700">Full night support</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 font-medium text-gray-800">Gummies</td>
                            <td className="py-3 px-4 text-gray-700">45-60 min</td>
                            <td className="py-3 px-4 text-gray-700">5-7 hours</td>
                            <td className="py-3 px-4 text-gray-700">Middle-of-night use</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 font-medium text-gray-800">Vapes</td>
                            <td className="py-3 px-4 text-gray-700">5-10 min</td>
                            <td className="py-3 px-4 text-gray-700">2-3 hours</td>
                            <td className="py-3 px-4 text-gray-700">Acute insomnia relief</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* Daily Routines Section */}
            <section 
              className="bg-white rounded-xl shadow-md mb-8 overflow-hidden border border-gray-200"
              onClick={() => toggleSection('routines')}
            >
              <div className="flex justify-between items-center bg-gradient-to-r from-teal-50 to-white p-5 cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-teal-100 p-2 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-teal-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    Daily Routine Integration
                  </h2>
                </div>
                <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${expandedSections.routines ? 'rotate-180' : ''}`} />
              </div>
              
              {expandedSections.routines && (
                <div className="p-5 pt-0">
                  {/* Workday Stress Management */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                      <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 text-sm">9-5</span>
                      Workday Stress Management
                    </h3>
                    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                      <div className="grid grid-cols-3 bg-gray-50 text-xs font-medium text-gray-600">
                        <div className="p-2">Time</div>
                        <div className="p-2">CBD Protocol</div>
                        <div className="p-2">Complementary Activity</div>
                      </div>
                      <div className="grid grid-cols-3 text-xs border-b border-gray-200">
                        <div className="p-2 font-medium">8:00 AM</div>
                        <div className="p-2">15mg CBD capsule with breakfast</div>
                        <div className="p-2">Morning meditation</div>
                      </div>
                      <div className="grid grid-cols-3 text-xs border-b border-gray-200 bg-gray-50">
                        <div className="p-2 font-medium">12:30 PM</div>
                        <div className="p-2">5mg CBD mint after lunch</div>
                        <div className="p-2">10-minute walk outside</div>
                      </div>
                      <div className="grid grid-cols-3 text-xs">
                        <div className="p-2 font-medium">3:30 PM</div>
                        <div className="p-2">Sublingual CBD oil (10mg) if stressed</div>
                        <div className="p-2">Stretching or breathing exercises</div>
                      </div>
                    </div>
                  </div>

                  {/* Weekend Recovery */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                      <span className="bg-purple-100 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 text-sm">W/E</span>
                      Weekend Recovery Routine
                    </h3>
                    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                      <div className="grid grid-cols-3 bg-gray-50 text-xs font-medium text-gray-600">
                        <div className="p-2">Time</div>
                        <div className="p-2">CBD Protocol</div>
                        <div className="p-2">Complementary Activity</div>
                      </div>
                      <div className="grid grid-cols-3 text-xs border-b border-gray-200">
                        <div className="p-2 font-medium">9:00 AM</div>
                        <div className="p-2">CBD-infused coffee (5mg)</div>
                        <div className="p-2">Yoga or light exercise</div>
                      </div>
                      <div className="grid grid-cols-3 text-xs border-b border-gray-200 bg-gray-50">
                        <div className="p-2 font-medium">4:00 PM</div>
                        <div className="p-2">CBD bath soak (25mg)</div>
                        <div className="p-2">Digital detox time</div>
                      </div>
                      <div className="grid grid-cols-3 text-xs">
                        <div className="p-2 font-medium">9:30 PM</div>
                        <div className="p-2">30mg CBD/CBN sleep tincture</div>
                        <div className="p-2">Reading or journaling</div>
                      </div>
                    </div>
                  </div>

                  {/* Travel Protocol */}
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                      <span className="bg-amber-100 text-amber-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 text-sm">✈️</span>
                      Travel Wellness Protocol
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-white border border-gray-200 rounded-lg p-3">
                        <h4 className="text-sm font-medium text-gray-800 mb-2">Before Flight</h4>
                        <p className="text-xs text-gray-600">10mg CBD + 5mg CBG capsule for travel anxiety</p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-3">
                        <h4 className="text-sm font-medium text-gray-800 mb-2">During Flight</h4>
                        <p className="text-xs text-gray-600">CBD gum (2mg per piece) as needed for stress</p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-3">
                        <h4 className="text-sm font-medium text-gray-800 mb-2">After Arrival</h4>
                        <p className="text-xs text-gray-600">25mg CBD + 3mg melatonin for jet lag</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* Common Mistakes Section */}
            <section 
              className="bg-white rounded-xl shadow-md mb-8 overflow-hidden border border-gray-200"
              onClick={() => toggleSection('mistakes')}
            >
              <div className="flex justify-between items-center bg-gradient-to-r from-amber-50 to-white p-5 cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-amber-100 p-2 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-amber-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    Common CBD Mistakes to Avoid
                  </h2>
                </div>
                <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${expandedSections.mistakes ? 'rotate-180' : ''}`} />
              </div>
              
              {expandedSections.mistakes && (
                <div className="p-5 pt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Mistake 1 */}
                    <div className="bg-white border border-amber-100 rounded-lg p-4 shadow-sm">
                      <div className="flex items-center mb-2">
                        <span className="bg-amber-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 font-bold">1</span>
                        <h3 className="font-semibold text-gray-800">Inconsistent Use</h3>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        Taking CBD sporadically and expecting immediate results. The endocannabinoid system responds best to consistent daily use.
                      </p>
                      <div className="bg-amber-50 p-2 rounded">
                        <p className="text-xs text-amber-800 font-medium">Solution: Commit to 2-4 weeks of regular use at consistent times before evaluating effects.</p>
                      </div>
                    </div>

                    {/* Mistake 2 */}
                    <div className="bg-white border border-amber-100 rounded-lg p-4 shadow-sm">
                      <div className="flex items-center mb-2">
                        <span className="bg-amber-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 font-bold">2</span>
                        <h3 className="font-semibold text-gray-800">Wrong Product Type</h3>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        Using slow-acting edibles for acute stress or fast-acting vapes for chronic sleep issues.
                      </p>
                      <div className="bg-amber-50 p-2 rounded">
                        <p className="text-xs text-amber-800 font-medium">Solution: Match product format to your needs - tinctures for sleep onset, gummies for maintenance, vapes for acute relief.</p>
                      </div>
                    </div>

                    {/* Mistake 3 */}
                    <div className="bg-white border border-amber-100 rounded-lg p-4 shadow-sm">
                      <div className="flex items-center mb-2">
                        <span className="bg-amber-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 font-bold">3</span>
                        <h3 className="font-semibold text-gray-800">Ignoring Lifestyle Factors</h3>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        Expecting CBD to compensate for poor sleep hygiene, chronic stress, or unhealthy habits.
                      </p>
                      <div className="bg-amber-50 p-2 rounded">
                        <p className="text-xs text-amber-800 font-medium">Solution: Combine CBD with proper sleep schedule, stress management techniques, and regular exercise.</p>
                      </div>
                    </div>

                    {/* Mistake 4 */}
                    <div className="bg-white border border-amber-100 rounded-lg p-4 shadow-sm">
                      <div className="flex items-center mb-2">
                        <span className="bg-amber-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 font-bold">4</span>
                        <h3 className="font-semibold text-gray-800">Dosing Blindly</h3>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        Not tracking doses or effects, making it impossible to optimize your regimen.
                      </p>
                      <div className="bg-amber-50 p-2 rounded">
                        <p className="text-xs text-amber-800 font-medium">Solution: Keep a CBD journal tracking time, dose, product, and effects for 2 weeks to identify patterns.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* Success Stories */}
            <section className="bg-white rounded-xl shadow-md mb-10 p-6">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                Real User Success Stories
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Story 1 */}
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-5 border border-blue-100">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center mr-3">
                      <User className="w-5 h-5 text-blue-700" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">Alex, 34</h3>
                      <p className="text-xs text-blue-600">Tech Executive</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 italic mb-3">
                    "After years of Ambien, I now use 40mg CBD + 10mg CBN tincture and sleep through the night naturally. My morning clarity has improved dramatically."
                  </p>
                  <div className="bg-white p-2 rounded">
                    <p className="text-xs text-blue-800 font-medium">Protocol: 1mL full-spectrum oil under tongue 30min before bed + sleep hygiene routine</p>
                  </div>
                </div>

                {/* Story 2 */}
                <div className="bg-gradient-to-br from-purple-50 to-white rounded-lg p-5 border border-purple-100">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-purple-200 rounded-full flex items-center justify-center mr-3">
                      <User className="w-5 h-5 text-purple-700" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">Priya, 29</h3>
                      <p className="text-xs text-purple-600">ER Nurse</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 italic mb-3">
                    "CBD gum during shifts helps me stay calm during emergencies. 5mg as needed keeps me focused without drowsiness."
                  </p>
                  <div className="bg-white p-2 rounded">
                    <p className="text-xs text-purple-800 font-medium">Protocol: 2-3 pieces of 5mg CBD gum during 12hr shifts + 25mg capsule after work</p>
                  </div>
                </div>

                {/* Story 3 */}
                <div className="bg-gradient-to-br from-teal-50 to-white rounded-lg p-5 border border-teal-100">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-teal-200 rounded-full flex items-center justify-center mr-3">
                      <User className="w-5 h-5 text-teal-700" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">Marcus, 52</h3>
                      <p className="text-xs text-teal-600">Retired Veteran</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 italic mb-3">
                    "From 5 prescription medications down to 1, plus CBD. My PTSD nightmares decreased by 80% with nightly CBD/CBN combo."
                  </p>
                  <div className="bg-white p-2 rounded">
                    <p className="text-xs text-teal-800 font-medium">Protocol: 50mg CBD + 15mg CBN edible 1hr before bed under doctor supervision</p>
                  </div>
                </div>

                {/* Story 4 */}
                <div className="bg-gradient-to-br from-amber-50 to-white rounded-lg p-5 border border-amber-100">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-amber-200 rounded-full flex items-center justify-center mr-3">
                      <User className="w-5 h-5 text-amber-700" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">Sophie, 41</h3>
                      <p className="text-xs text-amber-600">Single Mom</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 italic mb-3">
                    "10mg CBD in my morning coffee sets a calm tone for the day. I'm more patient with my kids and handle work stress better."
                  </p>
                  <div className="bg-white p-2 rounded">
                    <p className="text-xs text-amber-800 font-medium">Protocol: CBD-infused coffee + 5mg sublingual booster as needed</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Final Takeaways */}
            <section className="bg-white rounded-xl shadow-md mb-10 p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                Key Takeaways
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-white p-5 rounded-lg border border-blue-200">
                  <h3 className="font-semibold text-blue-800 mb-3">For Stress Management</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span>Morning doses prevent stress accumulation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span>Fast-acting formats help acute situations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span>Combine with mindfulness for best results</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-white p-5 rounded-lg border border-purple-200">
                  <h3 className="font-semibold text-purple-800 mb-3">For Sleep Optimization</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="bg-purple-100 text-purple-800 rounded-full p-1 mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span>CBN enhances CBD's sleep benefits</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-purple-100 text-purple-800 rounded-full p-1 mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span>Timing matters - take 30-60min before bed</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-purple-100 text-purple-800 rounded-full p-1 mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span>Create a consistent wind-down routine</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-gradient-to-r from-teal-50 to-white p-5 rounded-lg border border-teal-200">
                <h3 className="font-semibold text-teal-800 mb-3">Final Recommendations</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-medium text-teal-700 mb-1">Start Low, Go Slow</h4>
                    <p className="text-xs text-gray-600">Begin with 10-15mg daily, increase by 5mg every 3-5 days as needed</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-teal-700 mb-1">Track Your Progress</h4>
                    <p className="text-xs text-gray-600">Keep a journal of doses, timing, and effects for 2-4 weeks</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-teal-700 mb-1">Quality Matters</h4>
                    <p className="text-xs text-gray-600">Choose third-party tested products from reputable brands</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-teal-700 mb-1">Holistic Approach</h4>
                    <p className="text-xs text-gray-600">Combine CBD with stress-reduction techniques and good sleep hygiene</p>
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
                      Dominique Fontaine, BSN, RN, HNB-BC, HWNC-BC
                    </a>
                  </p>

                  <p className="text-sm text-gray-600 mb-1">
                    — Written by{" "}
                    <a
                      href="#"
                      className="text-blue-600 hover:underline font-medium"
                    >
                      Jessica Timmons
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
                  SLEEP & STRESS NEWSLETTER
                </h3>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Science-backed wellness strategies
                </h4>
                <p className="text-gray-700 text-sm">
                  Get monthly updates on optimizing sleep, managing stress, and CBD research.
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

            {/* Top Products */}
            <div className="bg-white rounded-lg p-6 mb-8 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Editor's Choice: Stress & Sleep Products
              </h3>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <h4 className="font-medium text-gray-800">Best for Daytime Stress</h4>
                  <p className="text-sm text-gray-600">Nuvita CBD Oil 1000mg</p>
                  <p className="text-xs text-gray-500 mt-1">Broad-spectrum with CBG</p>
                  <a href="#" className="text-blue-600 text-sm hover:underline">View product</a>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-medium text-gray-800">Best for Sleep Support</h4>
                  <p className="text-sm text-gray-600">Luna CBN Night Oil</p>
                  <p className="text-xs text-gray-500 mt-1">1:2 CBD:CBN ratio</p>
                  <a href="#" className="text-blue-600 text-sm hover:underline">View product</a>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-medium text-gray-800">Best for Acute Anxiety</h4>
                  <p className="text-sm text-gray-600">Airi CBD Mints</p>
                  <p className="text-xs text-gray-500 mt-1">5mg per mint, fast-acting</p>
                  <a href="#" className="text-blue-600 text-sm hover:underline">View product</a>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Best for Sleep Maintenance</h4>
                  <p className="text-sm text-gray-600">Dreamland Gummies</p>
                  <p className="text-xs text-gray-500 mt-1">10mg CBD + 3mg melatonin</p>
                  <a href="#" className="text-blue-600 text-sm hover:underline">View product</a>
                </div>
              </div>
            </div>

            {/* Quick Tips */}
            <div className="bg-white rounded-lg p-6 mb-8 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Quick Stress Relief Techniques
              </h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <p className="text-sm text-gray-700">4-7-8 Breathing: Inhale 4s, hold 7s, exhale 8s</p>
                </div>
                <div className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <p className="text-sm text-gray-700">5-minute hand massage with CBD lotion</p>
                </div>
                <div className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <p className="text-sm text-gray-700">Cold water face splash + 10mg CBD</p>
                </div>
                <div className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <p className="text-sm text-gray-700">Gratitude journaling with chamomile CBD tea</p>
                </div>
              </div>
            </div>

            {/* Sleep Checklist */}
            <div className="bg-white rounded-lg p-6 mb-8 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                7-Day Sleep Reset Challenge
              </h3>
              <div className="space-y-3">
                {[
                  "Day 1: Set consistent bedtime/wake time",
                  "Day 2: Add 15min wind-down routine with CBD",
                  "Day 3: Eliminate screens 1hr before bed",
                  "Day 4: Optimize bedroom temperature (65°F ideal)",
                  "Day 5: Try CBD/CBN sleep tincture",
                  "Day 6: Morning sunlight exposure",
                  "Day 7: Evaluate and adjust CBD dose"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <span className="bg-purple-100 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 text-xs font-medium">
                      {index + 1}
                    </span>
                    <p className="text-sm text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Advertisement Placeholder */}
            <div className="bg-gray-100 rounded-lg p-6 mb-8">
              <p className="text-center text-gray-500 text-sm mb-4">
                ADVERTISEMENT
              </p>
              <div className="bg-blue-600 rounded-lg p-6 text-white text-center">
                <h4 className="font-bold mb-2">Creating Your Avatar</h4>
                <p className="text-sm mb-4">
                  Hair Color, Eye Color, Skin Tone, Body Type
                </p>
                <button className="bg-teal-400 hover:bg-teal-500 text-white px-4 py-2 rounded text-sm font-medium transition-colors">
                  CONTINUE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>  
  );
}