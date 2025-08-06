"use client";

import { useState } from "react";
import { User, Calendar, HeartHandshake, Users, MessageSquare, ClipboardList, ChevronDown } from "lucide-react";

export default function CbdArticle11() {
  const [email, setEmail] = useState("");
  const [activeTab, setActiveTab] = useState("Providers");
  const [expandedSections, setExpandedSections] = useState({
    providers: true,
    retailers: false,
    community: false,
    online: false
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
    "Providers",
    "Retailers",
    "Community",
    "Online Resources",
    "Documentation",
    "Advocacy",
    "FAQs",
    "Takeaways"
  ];

  return (
    <div className="min-h-screen bg-white mt-40 lg:mt-40 pt-4 sm:pt-8 md:pt-12 lg:pt-16 xl:pt-20">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
        {/* Main grid container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Main Content - takes 2/3 width on large screens */}
          <div className="lg:col-span-2">
            {/* Header Section with Icon */}
            <div className="mb-6 sm:mb-8 bg-gradient-to-r from-indigo-700 to-purple-600 rounded-xl p-6 text-white">
              <div className="flex items-start">
                <div className="bg-white bg-opacity-20 p-3 rounded-lg mr-4">
                  <HeartHandshake className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight">
                    Building Your CBD Support Network
                  </h1>
                  <p className="text-lg sm:text-xl text-indigo-100 font-medium">
                    Discover how to create a strong support system with healthcare providers, knowledgeable retailers, and community resources for your CBD journey
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
                          ? "bg-purple-600 text-white shadow-md"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {tab === "Providers" && <User className="w-4 h-4 mr-1" />}
                      {tab === "Retailers" && <ClipboardList className="w-4 h-4 mr-1" />}
                      {tab === "Community" && <Users className="w-4 h-4 mr-1" />}
                      {tab === "Online Resources" && <MessageSquare className="w-4 h-4 mr-1" />}
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
                    Navigating CBD wellness can be complex, but you don't have to do it alone. A robust support network provides guidance, prevents misinformation, and helps tailor CBD use to your unique needs. This guide will help you assemble your personal dream team for CBD success.
                  </p>
                  <div className="bg-indigo-50 rounded-lg p-4 border-l-4 border-indigo-400">
                    <p className="text-sm text-indigo-800 font-medium">
                      "Patients with a CBD support network report 3x greater satisfaction with their results compared to those navigating alone." - 2024 Wellness Survey
                    </p>
                  </div>
                </div>
                <div className="md:w-1/3 bg-gradient-to-br from-purple-50 to-white rounded-lg p-4 flex flex-col items-center justify-center border border-purple-100">
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div className="bg-white p-3 rounded-lg shadow-xs border border-gray-100 flex flex-col items-center">
                      <User className="w-6 h-6 text-purple-600 mb-1" />
                      <span className="text-xs text-center">Healthcare Providers</span>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-xs border border-gray-100 flex flex-col items-center">
                      <ClipboardList className="w-6 h-6 text-blue-600 mb-1" />
                      <span className="text-xs text-center">Knowledgeable Retailers</span>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-xs border border-gray-100 flex flex-col items-center">
                      <Users className="w-6 h-6 text-teal-600 mb-1" />
                      <span className="text-xs text-center">Support Groups</span>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-xs border border-gray-100 flex flex-col items-center">
                      <MessageSquare className="w-6 h-6 text-amber-600 mb-1" />
                      <span className="text-xs text-center">Online Communities</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 text-center">Your ideal CBD support network includes these key players</p>
                </div>
              </div>
            </div>

            {/* Healthcare Providers Section */}
            <section 
              className="bg-white rounded-xl shadow-md mb-8 overflow-hidden border border-gray-200"
              onClick={() => toggleSection('providers')}
            >
              <div className="flex justify-between items-center bg-gradient-to-r from-blue-50 to-white p-5 cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-lg mr-4">
                    <User className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    Healthcare Provider Network
                  </h2>
                </div>
                <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${expandedSections.providers ? 'rotate-180' : ''}`} />
              </div>
              
              {expandedSections.providers && (
                <div className="p-5 pt-0">
                  {/* Provider Types */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">Essential CBD-Knowledgeable Providers</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <div className="bg-blue-100 p-1 rounded-full mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <h4 className="font-medium text-gray-800">Integrative Physicians</h4>
                        </div>
                        <p className="text-sm text-gray-600">
                          MDs or DOs trained in both conventional medicine and cannabinoid therapy. Can help with dosing strategies and medication interactions.
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <div className="bg-teal-100 p-1 rounded-full mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-teal-600" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                            </svg>
                          </div>
                          <h4 className="font-medium text-gray-800">Naturopathic Doctors</h4>
                        </div>
                        <p className="text-sm text-gray-600">
                          NDs often have extensive training in plant medicine and can recommend full-spectrum approaches combining CBD with other botanicals.
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <div className="bg-purple-100 p-1 rounded-full mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <h4 className="font-medium text-gray-800">Cannabis Pharmacists</h4>
                        </div>
                        <p className="text-sm text-gray-600">
                          Specially trained in cannabinoid interactions and product selection. Often found in medical cannabis dispensaries.
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <div className="bg-amber-100 p-1 rounded-full mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-amber-600" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          </div>
                          <h4 className="font-medium text-gray-800">Holistic Nurses</h4>
                        </div>
                        <p className="text-sm text-gray-600">
                          RNs with additional training in cannabinoid therapy who can provide day-to-day management advice and monitor progress.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Finding Providers */}
                  <div className="bg-blue-50 rounded-lg p-5 mb-4">
                    <h3 className="font-semibold text-blue-800 mb-3">How to Find CBD-Friendly Providers</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-medium text-blue-700 mb-1">Professional Directories</h4>
                        <ul className="text-xs text-gray-700 space-y-1">
                          <li>• Society of Cannabis Clinicians</li>
                          <li>• American Cannabis Nurses Association</li>
                          <li>• Integrative Medicine Consortium</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-blue-700 mb-1">Interview Questions</h4>
                        <ul className="text-xs text-gray-700 space-y-1">
                          <li>• "What's your experience with CBD dosing?"</li>
                          <li>• "How do you monitor CBD's effectiveness?"</li>
                          <li>• "Can we create a titration plan together?"</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Provider Collaboration */}
                  <div className="bg-white border border-gray-200 rounded-lg p-5">
                    <h3 className="font-semibold text-gray-800 mb-3">Maximizing Provider Relationships</h3>
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-1">
                        <div className="flex items-start mb-2">
                          <span className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">1</span>
                          <p className="text-sm text-gray-600">Bring product labels and COAs to appointments</p>
                        </div>
                        <div className="flex items-start mb-2">
                          <span className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">2</span>
                          <p className="text-sm text-gray-600">Keep a symptom and dosing journal to share</p>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start mb-2">
                          <span className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">3</span>
                          <p className="text-sm text-gray-600">Ask about monitoring labs (liver enzymes, etc.)</p>
                        </div>
                        <div className="flex items-start">
                          <span className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">4</span>
                          <p className="text-sm text-gray-600">Request coordinated care with other providers</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* Knowledgeable Retailers Section */}
            <section 
              className="bg-white rounded-xl shadow-md mb-8 overflow-hidden border border-gray-200"
              onClick={() => toggleSection('retailers')}
            >
              <div className="flex justify-between items-center bg-gradient-to-r from-teal-50 to-white p-5 cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-teal-100 p-2 rounded-lg mr-4">
                    <ClipboardList className="w-5 h-5 text-teal-600" />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    Finding Knowledgeable Retailers
                  </h2>
                </div>
                <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${expandedSections.retailers ? 'rotate-180' : ''}`} />
              </div>
              
              {expandedSections.retailers && (
                <div className="p-5 pt-0">
                  {/* Retailer Evaluation */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">Spotting Quality CBD Retailers</h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full bg-white rounded-lg overflow-hidden">
                        <thead className="bg-teal-100">
                          <tr>
                            <th className="py-2 px-4 text-left text-xs font-medium text-teal-800">Feature</th>
                            <th className="py-2 px-4 text-left text-xs font-medium text-teal-800">Reputable Retailer</th>
                            <th className="py-2 px-4 text-left text-xs font-medium text-teal-800">Red Flags</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 text-xs">
                          <tr>
                            <td className="py-3 px-4 font-medium text-gray-800">Product Knowledge</td>
                            <td className="py-3 px-4 text-gray-700">Can explain extraction methods, spectrum types, and sourcing</td>
                            <td className="py-3 px-4 text-gray-700">Vague answers or pushes most expensive products</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="py-3 px-4 font-medium text-gray-800">Testing Transparency</td>
                            <td className="py-3 px-4 text-gray-700">Provides COAs before purchase and explains results</td>
                            <td className="py-3 px-4 text-gray-700">Makes excuses about unavailable test results</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 font-medium text-gray-800">Dosing Guidance</td>
                            <td className="py-3 px-4 text-gray-700">Offers starter protocols and titration advice</td>
                            <td className="py-3 px-4 text-gray-700">Claims "one size fits all" dosing</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="py-3 px-4 font-medium text-gray-800">Return Policy</td>
                            <td className="py-3 px-4 text-gray-700">Reasonable trial period (30+ days) and money-back guarantee</td>
                            <td className="py-3 px-4 text-gray-700">No returns allowed on opened products</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Retailer Types */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                      <h4 className="font-medium text-teal-700 mb-2 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                        </svg>
                        Specialty CBD Stores
                      </h4>
                      <p className="text-xs text-gray-600">
                        Pros: Deep product knowledge, wide selection
                        <br />
                        Cons: May be brand-loyal, varying quality
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                      <h4 className="font-medium text-teal-700 mb-2 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        Health Food Stores
                      </h4>
                      <p className="text-xs text-gray-600">
                        Pros: Convenient, wellness-focused
                        <br />
                        Cons: Staff may lack CBD expertise
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                      <h4 className="font-medium text-teal-700 mb-2 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v1h8v-1zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-1a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v1h-3zM4.75 12.094A5.973 5.973 0 004 15v1H1v-1a3 3 0 013.75-2.906z" />
                        </svg>
                        Online Retailers
                      </h4>
                      <p className="text-xs text-gray-600">
                        Pros: Competitive pricing, direct access to brands
                        <br />
                        Cons: Can't inspect products before purchase
                      </p>
                    </div>
                  </div>

                  {/* Questions to Ask Retailers */}
                  <div className="bg-teal-50 rounded-lg p-5">
                    <h3 className="font-semibold text-teal-800 mb-3">Essential Questions for CBD Retailers</h3>
                    <div className="space-y-3">
                      {[
                        "Can you explain the difference between your isolate, broad-spectrum, and full-spectrum products?",
                        "How often do you receive new COAs for product batches?",
                        "What's your return policy if the product doesn't work for me?",
                        "Which local practitioners do you recommend for CBD guidance?",
                        "Do you offer any beginner samplers or trial sizes?"
                      ].map((question, index) => (
                        <div key={index} className="flex items-start bg-white p-3 rounded-lg border border-teal-100">
                          <span className="bg-teal-100 text-teal-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 text-xs font-medium">
                            {index + 1}
                          </span>
                          <p className="text-sm text-gray-700">{question}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* Community Support Section */}
            <section 
              className="bg-white rounded-xl shadow-md mb-8 overflow-hidden border border-gray-200"
              onClick={() => toggleSection('community')}
            >
              <div className="flex justify-between items-center bg-gradient-to-r from-purple-50 to-white p-5 cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-purple-100 p-2 rounded-lg mr-4">
                    <Users className="w-5 h-5 text-purple-600" />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    Community Support Resources
                  </h2>
                </div>
                <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${expandedSections.community ? 'rotate-180' : ''}`} />
              </div>
              
              {expandedSections.community && (
                <div className="p-5 pt-0">
                  {/* Support Group Types */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="font-semibold text-purple-800 mb-3">In-Person Support Groups</h3>
                      <div className="space-y-4">
                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                          <h4 className="font-medium text-gray-800 mb-1">Condition-Specific Groups</h4>
                          <p className="text-xs text-gray-600">
                            Many chronic illness support groups now include CBD education (e.g., pain management, epilepsy, MS groups)
                          </p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                          <h4 className="font-medium text-gray-800 mb-1">Senior Center Programs</h4>
                          <p className="text-xs text-gray-600">
                            Increasingly offering CBD education sessions and user groups for arthritis, sleep, and anxiety
                          </p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                          <h4 className="font-medium text-gray-800 mb-1">Wellness Meetups</h4>
                          <p className="text-xs text-gray-600">
                            Check Meetup.com for CBD-focused groups in your area
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-purple-800 mb-3">Finding Local Support</h3>
                      <div className="bg-purple-50 rounded-lg p-4 h-full">
                        <ul className="space-y-3 text-sm">
                          <li className="flex items-start">
                            <span className="bg-purple-100 text-purple-800 rounded-full p-1 mr-2">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </span>
                            <span>Ask at local dispensaries (even if you don't use THC products)</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-purple-100 text-purple-800 rounded-full p-1 mr-2">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </span>
                            <span>Check bulletin boards at health food stores and yoga studios</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-purple-100 text-purple-800 rounded-full p-1 mr-2">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </span>
                            <span>Contact your local NORML chapter for recommendations</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-purple-100 text-purple-800 rounded-full p-1 mr-2">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </span>
                            <span>Look for CBD education events at community centers</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Starting Your Own Group */}
                  <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">Starting a CBD Support Group</h3>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs">
                      <div className="bg-purple-50 p-3 rounded-lg">
                        <h4 className="font-medium text-purple-800 mb-1">1. Define Focus</h4>
                        <p>General wellness, specific condition, or demographic (e.g., seniors)</p>
                      </div>
                      <div className="bg-purple-50 p-3 rounded-lg">
                        <h4 className="font-medium text-purple-800 mb-1">2. Find Venue</h4>
                        <p>Libraries, community centers, or wellness spaces often offer free rooms</p>
                      </div>
                      <div className="bg-purple-50 p-3 rounded-lg">
                        <h4 className="font-medium text-purple-800 mb-1">3. Set Guidelines</h4>
                        <p>No medical advice, share experiences only, respect all approaches</p>
                      </div>
                      <div className="bg-purple-50 p-3 rounded-lg">
                        <h4 className="font-medium text-purple-800 mb-1">4. Promote</h4>
                        <p>Local FB groups, Nextdoor, and community calendars</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* Online Resources Section */}
            <section 
              className="bg-white rounded-xl shadow-md mb-8 overflow-hidden border border-gray-200"
              onClick={() => toggleSection('online')}
            >
              <div className="flex justify-between items-center bg-gradient-to-r from-indigo-50 to-white p-5 cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-indigo-100 p-2 rounded-lg mr-4">
                    <MessageSquare className="w-5 h-5 text-indigo-600" />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    Online Resources & Communities
                  </h2>
                </div>
                <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${expandedSections.online ? 'rotate-180' : ''}`} />
              </div>
              
              {expandedSections.online && (
                <div className="p-5 pt-0">
                  {/* Resource Categories */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="font-semibold text-indigo-800 mb-3">Reputable Information Sources</h3>
                      <div className="space-y-3">
                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                          <h4 className="font-medium text-gray-800 mb-1">Project CBD</h4>
                          <p className="text-xs text-gray-600 mb-2">Research-based cannabinoid science and medicine</p>
                          <a href="#" className="text-xs text-indigo-600 hover:underline">projectcbd.org</a>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                          <h4 className="font-medium text-gray-800 mb-1">Americans for Safe Access</h4>
                          <p className="text-xs text-gray-600 mb-2">Patient-focused advocacy and education</p>
                          <a href="#" className="text-xs text-indigo-600 hover:underline">safeaccessnow.org</a>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                          <h4 className="font-medium text-gray-800 mb-1">International Cannabinoid Research Society</h4>
                          <p className="text-xs text-gray-600 mb-2">Scientific studies and conference proceedings</p>
                          <a href="#" className="text-xs text-indigo-600 hover:underline">icrs.co</a>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-indigo-800 mb-3">Online Communities</h3>
                      <div className="space-y-3">
                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                          <h4 className="font-medium text-gray-800 mb-1">Reddit CBD Groups</h4>
                          <p className="text-xs text-gray-600 mb-2">/r/CBD (general), /r/CBDscience (research)</p>
                          <a href="#" className="text-xs text-indigo-600 hover:underline">reddit.com</a>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                          <h4 className="font-medium text-gray-800 mb-1">Facebook Groups</h4>
                          <p className="text-xs text-gray-600 mb-2">"CBD Oil Users Group" (280K+ members)</p>
                          <a href="#" className="text-xs text-indigo-600 hover:underline">facebook.com</a>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                          <h4 className="font-medium text-gray-800 mb-1">Discord Channels</h4>
                          <p className="text-xs text-gray-600 mb-2">Real-time chat with experienced users</p>
                          <a href="#" className="text-xs text-indigo-600 hover:underline">discord.gg/cbd</a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Evaluating Online Info */}
                  <div className="bg-indigo-50 rounded-lg p-5 mb-6">
                    <h3 className="font-semibold text-indigo-800 mb-3">Evaluating Online CBD Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-medium text-indigo-700 mb-1">Trustworthy Sources</h4>
                        <ul className="text-xs text-gray-700 space-y-1">
                          <li>• Cites peer-reviewed studies</li>
                          <li>• Discloses conflicts of interest</li>
                          <li>• Provides references</li>
                          <li>• Avoids miracle cure claims</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-indigo-700 mb-1">Questionable Sources</h4>
                        <ul className="text-xs text-gray-700 space-y-1">
                          <li>• Promotes single brand exclusively</li>
                          <li>• Makes unsubstantiated health claims</li>
                          <li>• Lacks author credentials</li>
                          <li>• Uses excessive marketing language</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Online Engagement Tips */}
                  <div className="bg-white border border-gray-200 rounded-lg p-5">
                    <h3 className="font-semibold text-gray-800 mb-3">Getting the Most from Online Communities</h3>
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-1">
                        <div className="flex items-start mb-2">
                          <span className="bg-indigo-100 text-indigo-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">1</span>
                          <p className="text-sm text-gray-600">Search before asking - many questions already answered</p>
                        </div>
                        <div className="flex items-start mb-2">
                          <span className="bg-indigo-100 text-indigo-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">2</span>
                          <p className="text-sm text-gray-600">Be specific about your goals and products used</p>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start mb-2">
                          <span className="bg-indigo-100 text-indigo-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">3</span>
                          <p className="text-sm text-gray-600">Take notes on suggestions to discuss with your doctor</p>
                        </div>
                        <div className="flex items-start">
                          <span className="bg-indigo-100 text-indigo-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">4</span>
                          <p className="text-sm text-gray-600">Remember everyone responds differently to CBD</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* Documentation Section */}
            <section className="bg-white rounded-xl shadow-md mb-10 p-6">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                Building Your CBD Documentation
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Personal Journal */}
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-5 border border-blue-100">
                  <h3 className="font-semibold text-blue-800 mb-3">Personal CBD Journal</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-sm text-gray-700">Daily dosage and timing</span>
                    </div>
                    <div className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-sm text-gray-700">Product details and batch numbers</span>
                    </div>
                    <div className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-sm text-gray-700">Symptom changes and side effects</span>
                    </div>
                    <div className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-sm text-gray-700">Lifestyle factors (sleep, stress, diet)</span>
                    </div>
                  </div>
                </div>

                {/* Medical Binder */}
                <div className="bg-gradient-to-br from-purple-50 to-white rounded-lg p-5 border border-purple-100">
                  <h3 className="font-semibold text-purple-800 mb-3">Medical Binder Essentials</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <span className="bg-purple-100 text-purple-800 rounded-full p-1 mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-sm text-gray-700">COAs for all products used</span>
                    </div>
                    <div className="flex items-start">
                      <span className="bg-purple-100 text-purple-800 rounded-full p-1 mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-sm text-gray-700">Provider notes and recommendations</span>
                    </div>
                    <div className="flex items-start">
                      <span className="bg-purple-100 text-purple-800 rounded-full p-1 mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-sm text-gray-700">Lab results (before/after starting CBD)</span>
                    </div>
                    <div className="flex items-start">
                      <span className="bg-purple-100 text-purple-800 rounded-full p-1 mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-sm text-gray-700">Medication/supplement list with timing</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-gradient-to-r from-teal-50 to-white p-5 rounded-lg border border-teal-200">
                <h3 className="font-semibold text-teal-800 mb-3">Digital Tools for Tracking</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="text-sm font-medium text-teal-700 mb-1">CBD Journal Apps</h4>
                    <p className="text-xs text-gray-600">Dose-specific tracking with reminders</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-teal-700 mb-1">Spreadsheets</h4>
                    <p className="text-xs text-gray-600">Customizable for detailed tracking</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-teal-700 mb-1">Note-taking Apps</h4>
                    <p className="text-xs text-gray-600">Evernote, Notion, or OneNote for organization</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Final Takeaways */}
            <section className="bg-white rounded-xl shadow-md mb-10 p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                Building Your Support Network: Key Steps
              </h2>

              <div className="bg-blue-50 p-5 rounded-lg mb-5">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Action Plan</h3>
                <ol className="space-y-3">
                  {[
                    "Identify 1-2 CBD-knowledgeable healthcare providers",
                    "Establish relationship with a trusted retailer",
                    "Join at least one support community (in-person or online)",
                    "Set up your documentation system",
                    "Schedule regular check-ins with your support team"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-3">
                        <span className="w-5 h-5 flex items-center justify-center text-sm font-medium">{index + 1}</span>
                      </span>
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="bg-purple-50 p-5 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-800 mb-3">Final Thoughts</h3>
                <p className="text-sm text-gray-700 mb-3">
                  Building a CBD support network is an ongoing process. As your needs change, so too might your ideal support team. Regular evaluation ensures you always have the right resources and relationships to make informed decisions about your CBD journey.
                </p>
                <p className="text-sm text-gray-700">
                  Remember that the most effective networks combine professional guidance with peer support and personal documentation. With these elements in place, you'll be empowered to use CBD safely and effectively as part of your wellness strategy.
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
                      Benzamin linkin , SRA-SAN
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
                  WELLNESS NETWORK NEWSLETTER
                </h3>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Build your support system
                </h4>
                <p className="text-gray-700 text-sm">
                  Get monthly resources for finding providers, connecting with communities, and wellness advocacy.
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

            {/* Provider Directory */}
            <div className="bg-white rounded-lg p-6 mb-8 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Find CBD Providers
              </h3>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <h4 className="font-medium text-gray-800">Integrative Doctors</h4>
                  <a href="#" className="text-blue-600 text-sm hover:underline block">Institute for Functional Medicine</a>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-medium text-gray-800">Cannabis Nurses</h4>
                  <a href="#" className="text-blue-600 text-sm hover:underline block">American Cannabis Nurses Association</a>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-medium text-gray-800">Naturopaths</h4>
                  <a href="#" className="text-blue-600 text-sm hover:underline block">American Association of Naturopathic Physicians</a>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Pharmacists</h4>
                  <a href="#" className="text-blue-600 text-sm hover:underline block">American Pharmacists Association</a>
                </div>
              </div>
            </div>

            {/* Community Resources */}
            <div className="bg-white rounded-lg p-6 mb-8 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Community Resources
              </h3>
              <div className="space-y-3">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h4 className="text-sm font-medium text-blue-700 mb-1">Local Support Groups</h4>
                  <a href="#" className="text-xs text-blue-600 hover:underline block">Meetup.com CBD Groups</a>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <h4 className="text-sm font-medium text-purple-700 mb-1">Online Forums</h4>
                  <a href="#" className="text-xs text-purple-600 hover:underline block">Reddit r/CBD</a>
                </div>
                <div className="bg-teal-50 p-3 rounded-lg">
                  <h4 className="text-sm font-medium text-teal-700 mb-1">Advocacy Organizations</h4>
                  <a href="#" className="text-xs text-teal-600 hover:underline block">Americans for Safe Access</a>
                </div>
                <div className="bg-amber-50 p-3 rounded-lg">
                  <h4 className="text-sm font-medium text-amber-700 mb-1">Educational Events</h4>
                  <a href="#" className="text-xs text-amber-600 hover:underline block">CBD Expo Tour</a>
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
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <div>
                    <h4 className="text-sm font-medium text-gray-800">CBD Journal Template</h4>
                    <a href="#" className="text-xs text-blue-600 hover:underline">Download PDF</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-gray-100 p-1 rounded mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <div>
                    <h4 className="text-sm font-medium text-gray-800">Provider Discussion Guide</h4>
                    <a href="#" className="text-xs text-blue-600 hover:underline">Download PDF</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-gray-100 p-1 rounded mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <div>
                    <h4 className="text-sm font-medium text-gray-800">Retailer Evaluation Checklist</h4>
                    <a href="#" className="text-xs text-blue-600 hover:underline">Download PDF</a>
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