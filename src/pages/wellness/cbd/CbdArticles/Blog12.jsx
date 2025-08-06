"use client";

import { useState } from "react";
import { BookOpen, FlaskConical, Brain,  Scale, ChevronDown ,User , Calendar } from "lucide-react";

export default function CbdArticle12() {
  const [email, setEmail] = useState("");
  const [activeTab, setActiveTab] = useState("ECS");
  const [expandedSections, setExpandedSections] = useState({
    ecs: true,
    receptors: false,
    mechanisms: false,
    research: false
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
    "ECS",

    "Mechanisms",
    "Clinical Research",
    "Pharmacology",
    "Safety",
    "FAQs",
    "Key Takeaways"
  ];

  return (
    <div className="min-h-screen bg-white mt-36 lg:mt-32 pt-4 sm:pt-8 md:pt-12 lg:pt-16 xl:pt-20">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
        {/* Main grid container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Main Content - takes 2/3 width on large screens */}
          <div className="lg:col-span-2">
            {/* Header Section with Icon */}
            <div className="mb-6 sm:mb-8 bg-gradient-to-r  rounded-xl p-6 text-black">
              <div className="flex items-start">
                <div className="bg-white bg-opacity-20 p-3 rounded-lg mr-4">
                  <FlaskConical className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight">
                    The Science Behind CBD: How It Works in Your Body
                  </h1>
                  <p className="text-lg sm:text-xl text-black font-medium">
                    Learn about the endocannabinoid system, CBD's interaction with receptors, and how scientific research supports CBD's potential wellness benefits
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
                          ? "bg-indigo-600 text-white shadow-md"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {tab === "ECS" && <Brain className="w-4 h-4 mr-1" />}
                    
                      {tab === "Mechanisms" && <BookOpen className="w-4 h-4 mr-1" />}
                      {tab === "Clinical Research" && <FlaskConical className="w-4 h-4 mr-1" />}
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
                    Cannabidiol (CBD) has captured scientific and public interest for its potential therapeutic effects without intoxicating properties. Unlike THC, CBD works through complex biochemical interactions with our body's endocannabinoid system and other molecular pathways. This article explores the peer-reviewed science behind how CBD interacts with your physiology.
                  </p>
                  <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-400">
                    <p className="text-sm text-blue-800 font-medium">
                      "CBD exhibits multimodal pharmacological activity, targeting over 65 molecular pathways in the body." - 2023 review in Frontiers in Pharmacology
                    </p>
                  </div>
                </div>
                <div className="md:w-1/3 bg-gradient-to-br from-blue-50 to-white rounded-lg p-4 flex flex-col items-center justify-center border border-blue-100">
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div className="bg-white p-3 rounded-lg shadow-xs border border-gray-100 flex flex-col items-center">
                      <Brain className="w-6 h-6 text-blue-600 mb-1" />
                      <span className="text-xs text-center">ECS Modulation</span>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-xs border border-gray-100 flex flex-col items-center">
                      {/* <Receptor className="w-6 h-6 text-indigo-600 mb-1" /> */}
                      <span className="text-xs text-center">Receptor Interactions</span>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-xs border border-gray-100 flex flex-col items-center">
                      <Scale className="w-6 h-6 text-teal-600 mb-1" />
                      <span className="text-xs text-center">Homeostasis</span>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-xs border border-gray-100 flex flex-col items-center">
                      <FlaskConical className="w-6 h-6 text-amber-600 mb-1" />
                      <span className="text-xs text-center">Neuroprotection</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 text-center">CBD's multifaceted mechanisms of action in the body</p>
                </div>
              </div>
            </div>

            {/* ECS Section */}
            <section 
              className="bg-white rounded-xl shadow-md mb-8 overflow-hidden border border-gray-200"
              onClick={() => toggleSection('ecs')}
            >
              <div className="flex justify-between items-center bg-gradient-to-r from-blue-50 to-white p-5 cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-lg mr-4">
                    <Brain className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    The Endocannabinoid System (ECS)
                  </h2>
                </div>
                <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${expandedSections.ecs ? 'rotate-180' : ''}`} />
              </div>
              
              {expandedSections.ecs && (
                <div className="p-5 pt-0">
                  {/* ECS Basics */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">Your Body's Master Regulatory Network</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <div className="bg-blue-100 p-1 rounded-full mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <h4 className="font-medium text-gray-800">Discovery</h4>
                        </div>
                        <p className="text-sm text-gray-600">
                          First identified in the 1990s while studying THC, the ECS is now recognized as one of the most important physiologic systems for maintaining homeostasis.
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <div className="bg-teal-100 p-1 rounded-full mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-teal-600" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                            </svg>
                          </div>
                          <h4 className="font-medium text-gray-800">Components</h4>
                        </div>
                        <p className="text-sm text-gray-600">
                          The ECS comprises endocannabinoids (anandamide and 2-AG), receptors (CB1 and CB2), and metabolic enzymes that synthesize and degrade endocannabinoids.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* ECS Functions */}
                  <div className="bg-blue-50 rounded-lg p-5 mb-4">
                    <h3 className="font-semibold text-blue-800 mb-3">Key Functions of the ECS</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-white p-3 rounded-lg border border-blue-100">
                        <h4 className="text-sm font-medium text-blue-700 mb-1">Homeostasis</h4>
                        <p className="text-xs text-gray-700">Maintains stable internal environment despite external changes</p>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-blue-100">
                        <h4 className="text-sm font-medium text-blue-700 mb-1">Neuroprotection</h4>
                        <p className="text-xs text-gray-700">Protects neurons from damage and promotes neurogenesis</p>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-blue-100">
                        <h4 className="text-sm font-medium text-blue-700 mb-1">Immune Regulation</h4>
                        <p className="text-xs text-gray-700">Modulates immune responses and inflammation</p>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-blue-100">
                        <h4 className="text-sm font-medium text-blue-700 mb-1">Stress Adaptation</h4>
                        <p className="text-xs text-gray-700">Helps body adapt to physical and emotional stress</p>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-blue-100">
                        <h4 className="text-sm font-medium text-blue-700 mb-1">Pain Modulation</h4>
                        <p className="text-xs text-gray-700">Regulates pain perception pathways</p>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-blue-100">
                        <h4 className="text-sm font-medium text-blue-700 mb-1">Memory & Learning</h4>
                        <p className="text-xs text-gray-700">Influences memory consolidation and extinction</p>
                      </div>
                    </div>
                  </div>

                  {/* CBD and ECS */}
                  <div className="bg-white border border-gray-200 rounded-lg p-5">
                    <h3 className="font-semibold text-gray-800 mb-3">How CBD Interacts With the ECS</h3>
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-1">
                        <div className="flex items-start mb-2">
                          <span className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">1</span>
                          <p className="text-sm text-gray-600">Inhibits FAAH enzyme, increasing anandamide ("bliss molecule") levels</p>
                        </div>
                        <div className="flex items-start mb-2">
                          <span className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">2</span>
                          <p className="text-sm text-gray-600">Allosteric modulator of CB1 receptors (doesn't bind directly)</p>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start mb-2">
                          <span className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">3</span>
                          <p className="text-sm text-gray-600">Binds weakly to CB2 receptors, influencing immune responses</p>
                        </div>
                        <div className="flex items-start">
                          <span className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">4</span>
                          <p className="text-sm text-gray-600">Enhances endocannabinoid tone without intoxicating effects</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* Receptor Interactions Section */}
            <section 
              className="bg-white rounded-xl shadow-md mb-8 overflow-hidden border border-gray-200"
              onClick={() => toggleSection('receptors')}
            >
              <div className="flex justify-between items-center bg-gradient-to-r from-indigo-50 to-white p-5 cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-indigo-100 p-2 rounded-lg mr-4">
                    {/* <Receptor className="w-5 h-5 text-indigo-600" /> */}
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    CBD's Receptor Interactions
                  </h2>
                </div>
                <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${expandedSections.receptors ? 'rotate-180' : ''}`} />
              </div>
              
              {expandedSections.receptors && (
                <div className="p-5 pt-0">
                  {/* Receptor Types */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">CBD's Molecular Targets</h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full bg-white rounded-lg overflow-hidden">
                        <thead className="bg-indigo-100">
                          <tr>
                            <th className="py-2 px-4 text-left text-xs font-medium text-indigo-800">Receptor/Channel</th>
                            <th className="py-2 px-4 text-left text-xs font-medium text-indigo-800">Interaction</th>
                            <th className="py-2 px-4 text-left text-xs font-medium text-indigo-800">Potential Effects</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 text-xs">
                          <tr>
                            <td className="py-3 px-4 font-medium text-gray-800">CB1 (Cannabinoid)</td>
                            <td className="py-3 px-4 text-gray-700">Negative allosteric modulator</td>
                            <td className="py-3 px-4 text-gray-700">Reduces THC psychoactivity, modulates neurotransmitter release</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="py-3 px-4 font-medium text-gray-800">CB2 (Cannabinoid)</td>
                            <td className="py-3 px-4 text-gray-700">Weak partial agonist</td>
                            <td className="py-3 px-4 text-gray-700">Immunomodulation, anti-inflammatory effects</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 font-medium text-gray-800">TRPV1 (Vanilloid)</td>
                            <td className="py-3 px-4 text-gray-700">Agonist</td>
                            <td className="py-3 px-4 text-gray-700">Pain relief, thermoregulation, anti-inflammatory</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="py-3 px-4 font-medium text-gray-800">5-HT1A (Serotonin)</td>
                            <td className="py-3 px-4 text-gray-700">Agonist</td>
                            <td className="py-3 px-4 text-gray-700">Anxiolytic, antidepressant, neuroprotective effects</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 font-medium text-gray-800">GPR55 (Orphan)</td>
                            <td className="py-3 px-4 text-gray-700">Antagonist</td>
                            <td className="py-3 px-4 text-gray-700">Possible anti-cancer effects, bone density regulation</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="py-3 px-4 font-medium text-gray-800">PPARγ (Nuclear)</td>
                            <td className="py-3 px-4 text-gray-700">Agonist</td>
                            <td className="py-3 px-4 text-gray-700">Anti-inflammatory, insulin sensitization, neuroprotection</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Receptor Mechanisms */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="font-semibold text-indigo-800 mb-3">Key Receptor Mechanisms</h3>
                      <div className="space-y-4">
                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                          <h4 className="font-medium text-gray-800 mb-1">Allosteric Modulation</h4>
                          <p className="text-xs text-gray-600">
                            CBD changes CB1 receptor shape, reducing THC binding without blocking it completely - explaining CBD's ability to moderate THC effects.
                          </p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                          <h4 className="font-medium text-gray-800 mb-1">Entourage Effect</h4>
                          <p className="text-xs text-gray-600">
                            Full-spectrum CBD works better than isolate due to synergistic interactions between cannabinoids, terpenes, and flavonoids at multiple receptor sites.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-indigo-800 mb-3">Receptor Distribution & Effects</h3>
                      <div className="bg-indigo-50 rounded-lg p-4 h-full">
                        <ul className="space-y-3 text-sm">
                          <li className="flex items-start">
                            <span className="bg-indigo-100 text-indigo-800 rounded-full p-1 mr-2">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </span>
                            <span>CB1 receptors are abundant in the central nervous system (brain, spinal cord)</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-indigo-100 text-indigo-800 rounded-full p-1 mr-2">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </span>
                            <span>CB2 receptors are primarily found in immune cells and peripheral tissues</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-indigo-100 text-indigo-800 rounded-full p-1 mr-2">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </span>
                            <span>5-HT1A activation contributes to CBD's anti-anxiety and antidepressant effects</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-indigo-100 text-indigo-800 rounded-full p-1 mr-2">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </span>
                            <span>TRPV1 activation may underlie CBD's analgesic (pain-relieving) properties</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Receptor Visualization */}
                  <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">CBD's Multi-Target Effects</h3>
                    <div className="bg-gradient-to-br from-indigo-50 to-white rounded-lg p-6 text-center">
                      <div className="grid grid-cols-3 gap-4 text-xs mb-4">
                        <div className="bg-white p-2 rounded border border-indigo-100">
                          <div className="bg-indigo-100 rounded-full w-8 h-8 mx-auto mb-1 flex items-center justify-center">
                            <Brain className="w-4 h-4 text-indigo-600" />
                          </div>
                          <p>Neuroprotection</p>
                        </div>
                        <div className="bg-white p-2 rounded border border-indigo-100">
                          <div className="bg-indigo-100 rounded-full w-8 h-8 mx-auto mb-1 flex items-center justify-center">
                            <Scale className="w-4 h-4 text-indigo-600" />
                          </div>
                          <p>Anti-inflammatory</p>
                        </div>
                        <div className="bg-white p-2 rounded border border-indigo-100">
                          <div className="bg-indigo-100 rounded-full w-8 h-8 mx-auto mb-1 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <p>Anxiolytic</p>
                        </div>
                      </div>
                      <p className="text-xs text-gray-600">CBD's therapeutic potential emerges from its combined effects across multiple receptor systems</p>
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* Mechanisms of Action Section */}
            <section 
              className="bg-white rounded-xl shadow-md mb-8 overflow-hidden border border-gray-200"
              onClick={() => toggleSection('mechanisms')}
            >
              <div className="flex justify-between items-center bg-gradient-to-r from-purple-50 to-white p-5 cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-purple-100 p-2 rounded-lg mr-4">
                    <BookOpen className="w-5 h-5 text-purple-600" />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    CBD's Mechanisms of Action
                  </h2>
                </div>
                <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${expandedSections.mechanisms ? 'rotate-180' : ''}`} />
              </div>
              
              {expandedSections.mechanisms && (
                <div className="p-5 pt-0">
                  {/* Pharmacological Actions */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">Key Pharmacological Effects</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-purple-700 mb-2">Anti-inflammatory</h4>
                        <p className="text-xs text-gray-600">
                          Reduces pro-inflammatory cytokines (TNF-α, IL-6) while increasing anti-inflammatory cytokines (IL-10)
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-purple-700 mb-2">Antioxidant</h4>
                        <p className="text-xs text-gray-600">
                          More potent than vitamins C and E in neutralizing free radicals and reducing oxidative stress
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-purple-700 mb-2">Neuroprotective</h4>
                        <p className="text-xs text-gray-600">
                          Stimulates neurogenesis, reduces excitotoxicity, and clears beta-amyloid plaques
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-purple-700 mb-2">Anxiolytic</h4>
                        <p className="text-xs text-gray-600">
                          Modulates serotonin receptors and hippocampal neurogenesis to reduce anxiety behaviors
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-purple-700 mb-2">Analgesic</h4>
                        <p className="text-xs text-gray-600">
                          Reduces pain perception through multiple pathways including glycine receptor potentiation
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-purple-700 mb-2">Anti-epileptic</h4>
                        <p className="text-xs text-gray-600">
                          Stabilizes neuronal excitability through multiple mechanisms including GABA modulation
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Molecular Pathways */}
                  <div className="bg-purple-50 rounded-lg p-5 mb-6">
                    <h3 className="font-semibold text-purple-800 mb-3">Molecular Pathways Influenced by CBD</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-medium text-purple-700 mb-1">Endocannabinoid System</h4>
                        <ul className="text-xs text-gray-700 space-y-1">
                          <li>• Inhibits FAAH → ↑ anandamide</li>
                          <li>• Allosteric CB1 modulation</li>
                          <li>• CB2 receptor activation</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-purple-700 mb-1">Other Systems</h4>
                        <ul className="text-xs text-gray-700 space-y-1">
                          <li>• 5-HT1A serotonin receptor agonism</li>
                          <li>• TRPV1 vanilloid receptor activation</li>
                          <li>• PPARγ nuclear receptor activation</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Time Course of Effects */}
                  <div className="bg-white border border-gray-200 rounded-lg p-5">
                    <h3 className="font-semibold text-gray-800 mb-3">Time Course of CBD's Effects</h3>
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-1">
                        <div className="flex items-start mb-2">
                          <span className="bg-purple-100 text-purple-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">1</span>
                          <p className="text-sm text-gray-600">Immediate effects (minutes): Ion channel modulation (e.g., TRPV1)</p>
                        </div>
                        <div className="flex items-start mb-2">
                          <span className="bg-purple-100 text-purple-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">2</span>
                          <p className="text-sm text-gray-600">Short-term (hours): Receptor-mediated signaling changes</p>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start mb-2">
                          <span className="bg-purple-100 text-purple-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">3</span>
                          <p className="text-sm text-gray-600">Medium-term (days): Gene expression changes via nuclear receptors</p>
                        </div>
                        <div className="flex items-start">
                          <span className="bg-purple-100 text-purple-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">4</span>
                          <p className="text-sm text-gray-600">Long-term (weeks): Neuroplastic changes and neurogenesis</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* Clinical Research Section */}
            <section 
              className="bg-white rounded-xl shadow-md mb-8 overflow-hidden border border-gray-200"
              onClick={() => toggleSection('research')}
            >
              <div className="flex justify-between items-center bg-gradient-to-r from-teal-50 to-white p-5 cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-teal-100 p-2 rounded-lg mr-4">
                    <FlaskConical className="w-5 h-5 text-teal-600" />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    Clinical Research on CBD
                  </h2>
                </div>
                <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${expandedSections.research ? 'rotate-180' : ''}`} />
              </div>
              
              {expandedSections.research && (
                <div className="p-5 pt-0">
                  {/* Research Areas */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">Evidence-Based Applications</h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full bg-white rounded-lg overflow-hidden">
                        <thead className="bg-teal-100">
                          <tr>
                            <th className="py-2 px-4 text-left text-xs font-medium text-teal-800">Condition</th>
                            <th className="py-2 px-4 text-left text-xs font-medium text-teal-800">Evidence Level</th>
                            <th className="py-2 px-4 text-left text-xs font-medium text-teal-800">Key Findings</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 text-xs">
                          <tr>
                            <td className="py-3 px-4 font-medium text-gray-800">Epilepsy (Dravet/Lennox-Gastaut)</td>
                            <td className="py-3 px-4 text-gray-700">FDA-approved (Epidiolex)</td>
                            <td className="py-3 px-4 text-gray-700">39-46% median reduction in seizures vs placebo in clinical trials</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="py-3 px-4 font-medium text-gray-800">Anxiety Disorders</td>
                            <td className="py-3 px-4 text-gray-700">Strong preclinical, emerging clinical</td>
                            <td className="py-3 px-4 text-gray-700">Reduces anxiety in simulated public speaking test at 300mg dose</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 font-medium text-gray-800">Chronic Pain</td>
                            <td className="py-3 px-4 text-gray-700">Moderate (combined with THC)</td>
                            <td className="py-3 px-4 text-gray-700">NNT of 3 for neuropathic pain in meta-analyses</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="py-3 px-4 font-medium text-gray-800">Inflammation</td>
                            <td className="py-3 px-4 text-gray-700">Strong preclinical, limited clinical</td>
                            <td className="py-3 px-4 text-gray-700">Reduces TNF-α, IL-6 in animal models and some human studies</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 font-medium text-gray-800">Psychosis</td>
                            <td className="py-3 px-4 text-gray-700">Promising early clinical</td>
                            <td className="py-3 px-4 text-gray-700">600mg dose improved symptoms in schizophrenia patients</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Research Highlights */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="font-semibold text-teal-800 mb-3">Landmark Clinical Studies</h3>
                      <div className="space-y-4">
                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                          <h4 className="font-medium text-gray-800 mb-1">NEJM 2017 (Epilepsy)</h4>
                          <p className="text-xs text-gray-600 mb-2">43% of Dravet patients had ≥50% seizure reduction vs 27% on placebo</p>
                          <a href="#" className="text-xs text-teal-600 hover:underline">View Study</a>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                          <h4 className="font-medium text-gray-800 mb-1">Neuropsychopharmacology 2019 (Anxiety)</h4>
                          <p className="text-xs text-gray-600 mb-2">CBD significantly reduced anxiety in sleep-deprived healthy volunteers</p>
                          <a href="#" className="text-xs text-teal-600 hover:underline">View Study</a>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-teal-800 mb-3">Ongoing Research Areas</h3>
                      <div className="bg-teal-50 rounded-lg p-4 h-full">
                        <ul className="space-y-3 text-sm">
                          <li className="flex items-start">
                            <span className="bg-teal-100 text-teal-800 rounded-full p-1 mr-2">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </span>
                            <span>Autism spectrum disorder (Phase 3 trials underway)</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-teal-100 text-teal-800 rounded-full p-1 mr-2">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </span>
                            <span>Substance use disorders (alcohol, opioids)</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-teal-100 text-teal-800 rounded-full p-1 mr-2">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </span>
                            <span>Neurodegenerative diseases (Alzheimer's, Parkinson's)</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-teal-100 text-teal-800 rounded-full p-1 mr-2">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </span>
                            <span>Autoimmune conditions (MS, rheumatoid arthritis)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Research Limitations */}
                  <div className="bg-white border border-gray-200 rounded-lg p-5">
                    <h3 className="font-semibold text-gray-800 mb-3">Current Research Limitations</h3>
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-1">
                        <div className="flex items-start mb-2">
                          <span className="bg-teal-100 text-teal-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">1</span>
                          <p className="text-sm text-gray-600">Most human studies use pharmaceutical-grade CBD, not commercial products</p>
                        </div>
                        <div className="flex items-start mb-2">
                          <span className="bg-teal-100 text-teal-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">2</span>
                          <p className="text-sm text-gray-600">Optimal dosing not established for most conditions</p>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start mb-2">
                          <span className="bg-teal-100 text-teal-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">3</span>
                          <p className="text-sm text-gray-600">Long-term safety data still being collected</p>
                        </div>
                        <div className="flex items-start">
                          <span className="bg-teal-100 text-teal-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">4</span>
                          <p className="text-sm text-gray-600">Limited studies on full-spectrum vs isolate effects</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* Pharmacokinetics Section */}
            <section className="bg-white rounded-xl shadow-md mb-10 p-6">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                CBD Pharmacokinetics: Absorption & Metabolism
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Absorption */}
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-5 border border-blue-100">
                  <h3 className="font-semibold text-blue-800 mb-3">Absorption Factors</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-sm text-gray-700">Oral bioavailability: 6-19% due to first-pass metabolism</span>
                    </div>
                    <div className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-sm text-gray-700">Sublingual avoids first-pass, bioavailability ~35%</span>
                    </div>
                    <div className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-sm text-gray-700">High-fat meals can increase absorption 4-5x</span>
                    </div>
                    <div className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-sm text-gray-700">Inhalation bioavailability ~31% (rapid onset)</span>
                    </div>
                  </div>
                </div>

                {/* Metabolism */}
                <div className="bg-gradient-to-br from-purple-50 to-white rounded-lg p-5 border border-purple-100">
                  <h3 className="font-semibold text-purple-800 mb-3">Metabolism & Elimination</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <span className="bg-purple-100 text-purple-800 rounded-full p-1 mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-sm text-gray-700">Primarily metabolized by CYP3A4 and CYP2C19 enzymes</span>
                    </div>
                    <div className="flex items-start">
                      <span className="bg-purple-100 text-purple-800 rounded-full p-1 mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-sm text-gray-700">Half-life: 18-32 hours after oral administration</span>
                    </div>
                    <div className="flex items-start">
                      <span className="bg-purple-100 text-purple-800 rounded-full p-1 mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-sm text-gray-700">Excreted 33% in feces, 16% in urine</span>
                    </div>
                    <div className="flex items-start">
                      <span className="bg-purple-100 text-purple-800 rounded-full p-1 mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-sm text-gray-700">Drug interactions possible with CYP450 inhibitors/inducers</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-gradient-to-r from-teal-50 to-white p-5 rounded-lg border border-teal-200">
                <h3 className="font-semibold text-teal-800 mb-3">Dosing Considerations</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="text-sm font-medium text-teal-700 mb-1">Low Dose (10-50mg)</h4>
                    <p className="text-xs text-gray-600">Anxiolytic, neuroprotective effects</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-teal-700 mb-1">Medium Dose (50-150mg)</h4>
                    <p className="text-xs text-gray-600">Anti-inflammatory, analgesic effects</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-teal-700 mb-1">High Dose (150mg+)</h4>
                    <p className="text-xs text-gray-600">Anticonvulsant, antipsychotic effects</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Final Takeaways */}
            <section className="bg-white rounded-xl shadow-md mb-10 p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                Key Scientific Takeaways
              </h2>

              <div className="bg-blue-50 p-5 rounded-lg mb-5">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Core Mechanisms</h3>
                <ol className="space-y-3">
                  {[
                    "CBD enhances endocannabinoid tone primarily by inhibiting FAAH, increasing anandamide",
                    "Acts as a multi-target modulator rather than direct agonist/antagonist at most sites",
                    "Produces 'entourage effects' when combined with other cannabis compounds",
                    "Exerts biphasic effects (low vs high dose can have opposite impacts)",
                    "Effects emerge from combined actions across multiple receptor systems"
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
                <h3 className="text-lg font-semibold text-purple-800 mb-3">Future Research Directions</h3>
                <p className="text-sm text-gray-700 mb-3">
                  While CBD's mechanisms are increasingly understood, much remains to be discovered about optimal formulations, dosing protocols, and long-term effects. Current research is exploring CBD's potential in neuroprotection, addiction treatment, and as an adjunct in cancer therapy. The coming decade will likely see significant advances in our understanding of CBD's full therapeutic potential.
                </p>
                <p className="text-sm text-gray-700">
                  What's clear is that CBD represents a fascinating example of how plant compounds can interact with our innate biological systems. Its complex pharmacology underscores the importance of quality research and individualized approaches when considering CBD for health and wellness.
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
                      Dr. Sarah Chen, PhD Neuroscience
                    </a>
                  </p>

                  <p className="text-sm text-gray-600 mb-1">
                    — Written by{" "}
                    <a
                      href="#"
                      className="text-blue-600 hover:underline font-medium"
                    >
                      Michael Rodriguez
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
                  SCIENCE DIGEST NEWSLETTER
                </h3>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Stay updated on CBD research
                </h4>
                <p className="text-gray-700 text-sm">
                  Get monthly summaries of new cannabinoid research, mechanism breakdowns, and clinical trial updates.
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

            {/* Research Resources */}
            <div className="bg-white rounded-lg p-6 mb-8 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Research Databases
              </h3>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <h4 className="font-medium text-gray-800">Clinical Trials</h4>
                  <a href="#" className="text-blue-600 text-sm hover:underline block">ClinicalTrials.gov CBD Studies</a>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-medium text-gray-800">Scientific Literature</h4>
                  <a href="#" className="text-blue-600 text-sm hover:underline block">PubMed CBD Research</a>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-medium text-gray-800">Mechanism Studies</h4>
                  <a href="#" className="text-blue-600 text-sm hover:underline block">International Cannabinoid Research Society</a>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Review Papers</h4>
                  <a href="#" className="text-blue-600 text-sm hover:underline block">Project CBD Research Archives</a>
                </div>
              </div>
            </div>

            {/* Educational Resources */}
            <div className="bg-white rounded-lg p-6 mb-8 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Educational Resources
              </h3>
              <div className="space-y-3">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h4 className="text-sm font-medium text-blue-700 mb-1">ECS Video Course</h4>
                  <a href="#" className="text-xs text-blue-600 hover:underline block">Endocannabinoid System Explained</a>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <h4 className="text-sm font-medium text-purple-700 mb-1">CBD Mechanism Guide</h4>
                  <a href="#" className="text-xs text-purple-600 hover:underline block">How CBD Works (PDF)</a>
                </div>
                <div className="bg-teal-50 p-3 rounded-lg">
                  <h4 className="text-sm font-medium text-teal-700 mb-1">Research Webinars</h4>
                  <a href="#" className="text-xs text-teal-600 hover:underline block">Monthly Science Updates</a>
                </div>
                <div className="bg-amber-50 p-3 rounded-lg">
                  <h4 className="text-sm font-medium text-amber-700 mb-1">Dosing Calculator</h4>
                  <a href="#" className="text-xs text-amber-600 hover:underline block">Personalized CBD Protocol Tool</a>
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
                    <h4 className="text-sm font-medium text-gray-800">ECS Diagram</h4>
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
                    <h4 className="text-sm font-medium text-gray-800">CBD Research Timeline</h4>
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
                    <h4 className="text-sm font-medium text-gray-800">Receptor Interactions Chart</h4>
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
              <div className="bg-indigo-600 rounded-lg p-6 text-white text-center">
                <h4 className="font-bold mb-2">CBD Research Journal</h4>
                <p className="text-sm mb-4">
                  Track your experiences with detailed science-based logging
                </p>
                <button className="bg-teal-400 hover:bg-teal-500 text-white px-4 py-2 rounded text-sm font-medium transition-colors">
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