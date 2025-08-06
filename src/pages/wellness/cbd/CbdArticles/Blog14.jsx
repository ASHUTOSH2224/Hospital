"use client";

import { useState } from "react";
import { BookOpen, FlaskConical, Brain, Scale, ChevronDown, User, Calendar, Leaf, ShieldCheck, TestTube2, Factory, BadgeCheck } from "lucide-react";

export default function CbdArticle14() {
  const [email, setEmail] = useState("");
  const [activeTab, setActiveTab] = useState("Quality");
  const [expandedSections, setExpandedSections] = useState({
    quality: true,
    testing: false,
    sourcing: false,
    standards: false
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
    "Quality",
    "Testing",
    "Sourcing",
    "Standards",
    "Extraction",
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
            <div className="mb-6 sm:mb-8 bg-gradient-to-r from-green-50 to-white rounded-xl p-6 text-black">
              <div className="flex items-start">
                <div className="bg-white bg-opacity-20 p-3 rounded-lg mr-4">
                  <ShieldCheck className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight">
                    Understanding CBD Quality: Testing, Sourcing, and Standards
                  </h1>
                  <p className="text-lg sm:text-xl text-black font-medium">
                    Explore quality factors, third-party testing, organic sourcing, and industry standards that ensure you're getting safe, effective CBD products
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
                          ? "bg-green-600 text-white shadow-md"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {tab === "Quality" && <BadgeCheck className="w-4 h-4 mr-1" />}
                      {tab === "Testing" && <TestTube2 className="w-4 h-4 mr-1" />}
                      {tab === "Sourcing" && <Leaf className="w-4 h-4 mr-1" />}
                      {tab === "Standards" && <ShieldCheck className="w-4 h-4 mr-1" />}
                      {tab === "Extraction" && <Factory className="w-4 h-4 mr-1" />}
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
                    With the CBD market projected to reach $47 billion by 2028, product quality varies dramatically. Premium CBD requires careful cultivation, proper extraction methods, rigorous testing, and transparent labeling. This guide breaks down how to identify high-quality CBD products that deliver therapeutic benefits without harmful contaminants.
                  </p>
                  <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-400">
                    <p className="text-sm text-green-800 font-medium">
                      "Only 31% of CBD products tested contained the labeled amount of CBD, with 21% containing THC despite claims of being THC-free." - 2023 Journal of the American Medical Association
                    </p>
                  </div>
                </div>
                <div className="md:w-1/3 bg-gradient-to-br from-green-50 to-white rounded-lg p-4 flex flex-col items-center justify-center border border-green-100">
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div className="bg-white p-3 rounded-lg shadow-xs border border-gray-100 flex flex-col items-center">
                      <TestTube2 className="w-6 h-6 text-green-600 mb-1" />
                      <span className="text-xs text-center">Lab Testing</span>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-xs border border-gray-100 flex flex-col items-center">
                      <Leaf className="w-6 h-6 text-green-600 mb-1" />
                      <span className="text-xs text-center">Organic Farming</span>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-xs border border-gray-100 flex flex-col items-center">
                      <ShieldCheck className="w-6 h-6 text-green-600 mb-1" />
                      <span className="text-xs text-center">Certifications</span>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-xs border border-gray-100 flex flex-col items-center">
                      <Factory className="w-6 h-6 text-green-600 mb-1" />
                      <span className="text-xs text-center">Clean Extraction</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 text-center">Four pillars of premium CBD quality</p>
                </div>
              </div>
            </div>

            {/* Quality Factors Section */}
            <section 
              className="bg-white rounded-xl shadow-md mb-8 overflow-hidden border border-gray-200"
              onClick={() => toggleSection('quality')}
            >
              <div className="flex justify-between items-center bg-gradient-to-r from-green-50 to-white p-5 cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-green-100 p-2 rounded-lg mr-4">
                    <BadgeCheck className="w-5 h-5 text-green-600" />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    CBD Quality Factors
                  </h2>
                </div>
                <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${expandedSections.quality ? 'rotate-180' : ''}`} />
              </div>
              
              {expandedSections.quality && (
                <div className="p-5 pt-0">
                  {/* Quality Basics */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">What Makes a High-Quality CBD Product?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <div className="bg-green-100 p-1 rounded-full mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <h4 className="font-medium text-gray-800">Potency Accuracy</h4>
                        </div>
                        <p className="text-sm text-gray-600">
                          The product should contain the exact amount of CBD advertised (±10%), with proper ratios of minor cannabinoids like CBG, CBC, and CBN when full-spectrum.
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <div className="bg-teal-100 p-1 rounded-full mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-teal-600" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                            </svg>
                          </div>
                          <h4 className="font-medium text-gray-800">Contaminant-Free</h4>
                        </div>
                        <p className="text-sm text-gray-600">
                          Must test below limits for pesticides (≤0.1ppm), heavy metals (≤10ppm lead), microbials, residual solvents (≤5000ppm), and mycotoxins.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Quality Checklist */}
                  <div className="bg-green-50 rounded-lg p-5 mb-4">
                    <h3 className="font-semibold text-green-800 mb-3">Quality Checklist</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-white p-3 rounded-lg border border-green-100">
                        <h4 className="text-sm font-medium text-green-700 mb-1">Current COA</h4>
                        <p className="text-xs text-gray-700">Certificate of Analysis from independent lab (within last year)</p>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-green-100">
                        <h4 className="text-sm font-medium text-green-700 mb-1">Extraction Method</h4>
                        <p className="text-xs text-gray-700">CO2 or ethanol extraction (no butane or propane residues)</p>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-green-100">
                        <h4 className="text-sm font-medium text-green-700 mb-1">Source Transparency</h4>
                        <p className="text-xs text-gray-700">Farm location and cultivation practices disclosed</p>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-green-100">
                        <h4 className="text-sm font-medium text-green-700 mb-1">Proper Labeling</h4>
                        <p className="text-xs text-gray-700">CBD mg per serving, batch number, ingredients list</p>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-green-100">
                        <h4 className="text-sm font-medium text-green-700 mb-1">Third-Party Verified</h4>
                        <p className="text-xs text-gray-700">USDA Organic, U.S. Hemp Authority, or similar certification</p>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-green-100">
                        <h4 className="text-sm font-medium text-green-700 mb-1">Freshness</h4>
                        <p className="text-xs text-gray-700">Manufacture date within last 12 months</p>
                      </div>
                    </div>
                  </div>

                  {/* Product Types */}
                  <div className="bg-white border border-gray-200 rounded-lg p-5">
                    <h3 className="font-semibold text-gray-800 mb-3">Quality Variations by Product Type</h3>
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-1">
                        <div className="flex items-start mb-2">
                          <span className="bg-green-100 text-green-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">1</span>
                          <p className="text-sm text-gray-600"><strong>Oils/Tinctures:</strong> Should use MCT or hemp seed oil as carrier. Avoid products with artificial colors or flavors.</p>
                        </div>
                        <div className="flex items-start mb-2">
                          <span className="bg-green-100 text-green-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">2</span>
                          <p className="text-sm text-gray-600"><strong>Edibles:</strong> Look for organic ingredients and accurate dosing per piece (10-25mg ideal for beginners).</p>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start mb-2">
                          <span className="bg-green-100 text-green-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">3</span>
                          <p className="text-sm text-gray-600"><strong>Topicals:</strong> Should contain penetration enhancers like menthol or essential oils for better absorption.</p>
                        </div>
                        <div className="flex items-start">
                          <span className="bg-green-100 text-green-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">4</span>
                          <p className="text-sm text-gray-600"><strong>Isolates:</strong> 99%+ purity with no residual solvents. Full-spectrum preferred for entourage effect.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* Testing Section */}
            <section 
              className="bg-white rounded-xl shadow-md mb-8 overflow-hidden border border-gray-200"
              onClick={() => toggleSection('testing')}
            >
              <div className="flex justify-between items-center bg-gradient-to-r from-blue-50 to-white p-5 cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-lg mr-4">
                    <TestTube2 className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    Third-Party Testing Explained
                  </h2>
                </div>
                <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${expandedSections.testing ? 'rotate-180' : ''}`} />
              </div>
              
              {expandedSections.testing && (
                <div className="p-5 pt-0">
                  {/* Testing Types */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">Understanding Certificates of Analysis (COAs)</h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full bg-white rounded-lg overflow-hidden">
                        <thead className="bg-blue-100">
                          <tr>
                            <th className="py-2 px-4 text-left text-xs font-medium text-blue-800">Test Type</th>
                            <th className="py-2 px-4 text-left text-xs font-medium text-blue-800">What It Measures</th>
                            <th className="py-2 px-4 text-left text-xs font-medium text-blue-800">Why It Matters</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 text-xs">
                          <tr>
                            <td className="py-3 px-4 font-medium text-gray-800">Potency Analysis</td>
                            <td className="py-3 px-4 text-gray-700">CBD, THC, minor cannabinoid percentages</td>
                            <td className="py-3 px-4 text-gray-700">Ensures accurate dosing and legal THC levels (0.3%)</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="py-3 px-4 font-medium text-gray-800">Pesticide Screening</td>
                            <td className="py-3 px-4 text-gray-700">60+ common agricultural chemicals</td>
                            <td className="py-3 px-4 text-gray-700">Hemp is a bioaccumulator that absorbs soil toxins</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 font-medium text-gray-800">Heavy Metals</td>
                            <td className="py-3 px-4 text-gray-700">Lead, arsenic, cadmium, mercury</td>
                            <td className="py-3 px-4 text-gray-700">Chronic exposure risks even at low levels</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="py-3 px-4 font-medium text-gray-800">Microbial</td>
                            <td className="py-3 px-4 text-gray-700">Yeast, mold, E. coli, Salmonella</td>
                            <td className="py-3 px-4 text-gray-700">Especially important for immune-compromised users</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 font-medium text-gray-800">Residual Solvents</td>
                            <td className="py-3 px-4 text-gray-700">Butane, propane, ethanol, etc.</td>
                            <td className="py-3 px-4 text-gray-700">Byproducts of extraction processes</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="py-3 px-4 font-medium text-gray-800">Terpene Profile</td>
                            <td className="py-3 px-4 text-gray-700">Aromatic compounds (limonene, myrcene, etc.)</td>
                            <td className="py-3 px-4 text-gray-700">Indicates full-spectrum integrity and strain characteristics</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Testing Process */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="font-semibold text-blue-800 mb-3">How to Read a COA</h3>
                      <div className="space-y-4">
                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                          <h4 className="font-medium text-gray-800 mb-1">Lab Accreditation</h4>
                          <p className="text-xs text-gray-600">
                            Look for ISO 17025 accreditation - the gold standard for testing labs. State-licensed cannabis labs are most reliable.
                          </p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                          <h4 className="font-medium text-gray-800 mb-1">Batch Matching</h4>
                          <p className="text-xs text-gray-600">
                            Verify the batch number on the COA matches your product's batch number (usually on label).
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-800 mb-3">Red Flags in Testing</h3>
                      <div className="bg-blue-50 rounded-lg p-4 h-full">
                        <ul className="space-y-3 text-sm">
                          <li className="flex items-start">
                            <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                              </svg>
                            </span>
                            <span>No detectable cannabinoids (fake product)</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                              </svg>
                            </span>
                            <span>THC above 0.3% (illegal in most states)</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                              </svg>
                            </span>
                            <span>Pesticides above action limits</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                              </svg>
                            </span>
                            <span>Undisclosed synthetic cannabinoids (e.g., 4-CCB, 5F-ADB)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Testing Visualization */}
                  <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">CBD Testing Process Flow</h3>
                    <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-6">
                      <div className="flex flex-col md:flex-row justify-between items-center mb-4 text-center text-xs">
                        <div className="bg-white p-2 rounded border border-blue-100 mb-2 md:mb-0 w-full md:w-auto">
                          <div className="bg-blue-100 rounded-full w-8 h-8 mx-auto mb-1 flex items-center justify-center">
                            <span>1</span>
                          </div>
                          <p>Product Sampled</p>
                        </div>
                        <div className="hidden md:block mx-2 text-gray-400">→</div>
                        <div className="bg-white p-2 rounded border border-blue-100 mb-2 md:mb-0 w-full md:w-auto">
                          <div className="bg-blue-100 rounded-full w-8 h-8 mx-auto mb-1 flex items-center justify-center">
                            <span>2</span>
                          </div>
                          <p>Lab Testing</p>
                        </div>
                        <div className="hidden md:block mx-2 text-gray-400">→</div>
                        <div className="bg-white p-2 rounded border border-blue-100 mb-2 md:mb-0 w-full md:w-auto">
                          <div className="bg-blue-100 rounded-full w-8 h-8 mx-auto mb-1 flex items-center justify-center">
                            <span>3</span>
                          </div>
                          <p>Analysis</p>
                        </div>
                        <div className="hidden md:block mx-2 text-gray-400">→</div>
                        <div className="bg-white p-2 rounded border border-blue-100 w-full md:w-auto">
                          <div className="bg-blue-100 rounded-full w-8 h-8 mx-auto mb-1 flex items-center justify-center">
                            <span>4</span>
                          </div>
                          <p>COA Issued</p>
                        </div>
                      </div>
                      <p className="text-xs text-gray-600 text-center">Reputable companies test every batch and make COAs publicly available via QR codes or website</p>
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* Sourcing Section */}
            <section 
              className="bg-white rounded-xl shadow-md mb-8 overflow-hidden border border-gray-200"
              onClick={() => toggleSection('sourcing')}
            >
              <div className="flex justify-between items-center bg-gradient-to-r from-amber-50 to-white p-5 cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-amber-100 p-2 rounded-lg mr-4">
                    <Leaf className="w-5 h-5 text-amber-600" />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    Hemp Sourcing & Cultivation
                  </h2>
                </div>
                <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${expandedSections.sourcing ? 'rotate-180' : ''}`} />
              </div>
              
              {expandedSections.sourcing && (
                <div className="p-5 pt-0">
                  {/* Sourcing Basics */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">What Makes Premium Hemp?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-amber-700 mb-2">Organic Certification</h4>
                        <p className="text-xs text-gray-600">
                          USDA Organic or EU-certified farms avoid synthetic pesticides and GMOs that can concentrate in final products.
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-amber-700 mb-2">Soil Quality</h4>
                        <p className="text-xs text-gray-600">
                          Regenerative farming practices and regular soil testing prevent heavy metal accumulation.
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-amber-700 mb-2">Climate</h4>
                        <p className="text-xs text-gray-600">
                          Ideal conditions: Colorado's high altitude, Oregon's clean air, or Europe's strict agricultural standards.
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-amber-700 mb-2">Genetics</h4>
                        <p className="text-xs text-gray-600">
                          High-CBD cultivars like Cherry Wine, BaOx, or Wife have optimal cannabinoid and terpene profiles.
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-amber-700 mb-2">Harvest Timing</h4>
                        <p className="text-xs text-gray-600">
                          Flowers harvested at peak trichome maturity (cloudy/amber) for maximum therapeutic compounds.
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-amber-700 mb-2">Processing</h4>
                        <p className="text-xs text-gray-600">
                          Slow-dried (7-10 days) and cured properly to preserve terpenes and prevent mold.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Global Sourcing */}
                  <div className="bg-amber-50 rounded-lg p-5 mb-6">
                    <h3 className="font-semibold text-amber-800 mb-3">Global Hemp Sourcing Comparison</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-medium text-amber-700 mb-1">United States</h4>
                        <ul className="text-xs text-gray-700 space-y-1">
                          <li>• Strict 0.3% THC limit</li>
                          <li>• USDA Organic certification available</li>
                          <li>• Some states have superior growing conditions (CO, OR, KY)</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-amber-700 mb-1">Europe</h4>
                        <ul className="text-xs text-gray-700 space-y-1">
                          <li>• 0.2% THC limit in most countries</li>
                          <li>• Strong organic certification programs</li>
                          <li>• Switzerland allows 1% THC for full-spectrum products</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Sourcing Red Flags */}
                  <div className="bg-white border border-gray-200 rounded-lg p-5">
                    <h3 className="font-semibold text-gray-800 mb-3">Sourcing Red Flags</h3>
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-1">
                        <div className="flex items-start mb-2">
                          <span className="bg-amber-100 text-amber-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">1</span>
                          <p className="text-sm text-gray-600">No farm disclosure ("Proprietary blend" with no details)</p>
                        </div>
                        <div className="flex items-start mb-2">
                          <span className="bg-amber-100 text-amber-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">2</span>
                          <p className="text-sm text-gray-600">Chinese or Indian hemp (higher heavy metal risk)</p>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start mb-2">
                          <span className="bg-amber-100 text-amber-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">3</span>
                          <p className="text-sm text-gray-600">"Industrial hemp" not bred for CBD content</p>
                        </div>
                        <div className="flex items-start">
                          <span className="bg-amber-100 text-amber-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">4</span>
                          <p className="text-sm text-gray-600">No information on extraction facility (GMP certification?)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* Industry Standards Section */}
            <section 
              className="bg-white rounded-xl shadow-md mb-8 overflow-hidden border border-gray-200"
              onClick={() => toggleSection('standards')}
            >
              <div className="flex justify-between items-center bg-gradient-to-r from-purple-50 to-white p-5 cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-purple-100 p-2 rounded-lg mr-4">
                    <ShieldCheck className="w-5 h-5 text-purple-600" />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    Industry Standards & Certifications
                  </h2>
                </div>
                <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${expandedSections.standards ? 'rotate-180' : ''}`} />
              </div>
              
              {expandedSections.standards && (
                <div className="p-5 pt-0">
                  {/* Certification Types */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">Key CBD Certifications</h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full bg-white rounded-lg overflow-hidden">
                        <thead className="bg-purple-100">
                          <tr>
                            <th className="py-2 px-4 text-left text-xs font-medium text-purple-800">Certification</th>
                            <th className="py-2 px-4 text-left text-xs font-medium text-purple-800">Requirements</th>
                            <th className="py-2 px-4 text-left text-xs font-medium text-purple-800">What It Means</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 text-xs">
                          <tr>
                            <td className="py-3 px-4 font-medium text-gray-800">USDA Organic</td>
                            <td className="py-3 px-4 text-gray-700">No synthetic pesticides, GMOs, or chemical fertilizers</td>
                            <td className="py-3 px-4 text-gray-700">Gold standard for clean farming practices</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="py-3 px-4 font-medium text-gray-800">U.S. Hemp Authority</td>
                            <td className="py-3 px-4 text-gray-700">Compliance with FDA, FTC, USDA regulations</td>
                            <td className="py-3 px-4 text-gray-700">Comprehensive standards for safety and labeling</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 font-medium text-gray-800">cGMP</td>
                            <td className="py-3 px-4 text-gray-700">FDA current Good Manufacturing Practices</td>
                            <td className="py-3 px-4 text-gray-700">Pharmaceutical-grade production facilities</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="py-3 px-4 font-medium text-gray-800">ISO 9001</td>
                            <td className="py-3 px-4 text-gray-700">Quality management system standards</td>
                            <td className="py-3 px-4 text-gray-700">Consistent product quality and improvement</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 font-medium text-gray-800">Non-GMO Project</td>
                            <td className="py-3 px-4 text-gray-700">Verification of non-GMO ingredients</td>
                            <td className="py-3 px-4 text-gray-700">Important for carrier oils and additives</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="py-3 px-4 font-medium text-gray-800">Vegan/Gluten-Free</td>
                            <td className="py-3 px-4 text-gray-700">No animal products or gluten</td>
                            <td className="py-3 px-4 text-gray-700">Important for consumers with dietary restrictions</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Standards Comparison */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="font-semibold text-purple-800 mb-3">Regulatory Landscape</h3>
                      <div className="space-y-4">
                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                          <h4 className="font-medium text-gray-800 mb-1">United States</h4>
                          <p className="text-xs text-gray-600 mb-2">2018 Farm Bill legalized hemp but FDA hasn't established CBD regulations. State laws vary widely.</p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                          <h4 className="font-medium text-gray-800 mb-1">European Union</h4>
                          <p className="text-xs text-gray-600 mb-2">Novel Food authorization required. Most countries allow 0.2% THC.</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-purple-800 mb-3">Industry Best Practices</h3>
                      <div className="bg-purple-50 rounded-lg p-4 h-full">
                        <ul className="space-y-3 text-sm">
                          <li className="flex items-start">
                            <span className="bg-purple-100 text-purple-800 rounded-full p-1 mr-2">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </span>
                            <span>Batch-specific COAs from ISO 17025 accredited labs</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-purple-100 text-purple-800 rounded-full p-1 mr-2">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </span>
                            <span>Seed-to-sale tracking with blockchain technology</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-purple-100 text-purple-800 rounded-full p-1 mr-2">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </span>
                            <span>GMP-certified manufacturing facilities</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-purple-100 text-purple-800 rounded-full p-1 mr-2">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </span>
                            <span>Transparent ingredient lists with allergen disclosure</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Standards Visualization */}
                  <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">Quality Assurance Pyramid</h3>
                    <div className="bg-gradient-to-br from-purple-50 to-white rounded-lg p-6 text-center">
                      <div className="flex flex-col items-center">
                        <div className="bg-white p-3 rounded border border-purple-100 mb-2 w-3/4">
                          <div className="bg-purple-100 rounded w-full h-8 mx-auto mb-1 flex items-center justify-center">
                            <span className="text-xs font-medium">Regulatory Compliance</span>
                          </div>
                        </div>
                        <div className="bg-white p-3 rounded border border-purple-100 mb-2 w-2/3">
                          <div className="bg-purple-100 rounded w-full h-8 mx-auto mb-1 flex items-center justify-center">
                            <span className="text-xs font-medium">Third-Party Certifications</span>
                          </div>
                        </div>
                        <div className="bg-white p-3 rounded border border-purple-100 mb-2 w-1/2">
                          <div className="bg-purple-100 rounded w-full h-8 mx-auto mb-1 flex items-center justify-center">
                            <span className="text-xs font-medium">Comprehensive Testing</span>
                          </div>
                        </div>
                        <div className="bg-white p-3 rounded border border-purple-100 w-1/3">
                          <div className="bg-purple-100 rounded w-full h-8 mx-auto mb-1 flex items-center justify-center">
                            <span className="text-xs font-medium">Premium Sourcing</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-xs text-gray-600 mt-3">High-quality CBD products meet standards at all levels</p>
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* Extraction Methods Section */}
            <section className="bg-white rounded-xl shadow-md mb-10 p-6">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                CBD Extraction Methods Compared
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* CO2 Extraction */}
                <div className="bg-gradient-to-br from-green-50 to-white rounded-lg p-5 border border-green-100">
                  <h3 className="font-semibold text-green-800 mb-3">CO₂ Extraction (Gold Standard)</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <span className="bg-green-100 text-green-800 rounded-full p-1 mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-sm text-gray-700">Uses pressurized carbon dioxide to isolate cannabinoids</span>
                    </div>
                    <div className="flex items-start">
                      <span className="bg-green-100 text-green-800 rounded-full p-1 mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-sm text-gray-700">Leaves no toxic residues</span>
                    </div>
                    <div className="flex items-start">
                      <span className="bg-green-100 text-green-800 rounded-full p-1 mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-sm text-gray-700">Preserves full spectrum of compounds</span>
                    </div>
                    <div className="flex items-start">
                      <span className="bg-green-100 text-green-800 rounded-full p-1 mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-sm text-gray-700">Expensive equipment ($100k+) keeps quality high</span>
                    </div>
                  </div>
                </div>

                {/* Other Methods */}
                <div className="bg-gradient-to-br from-amber-50 to-white rounded-lg p-5 border border-amber-100">
                  <h3 className="font-semibold text-amber-800 mb-3">Other Extraction Methods</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <span className="bg-amber-100 text-amber-800 rounded-full p-1 mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-sm text-gray-700"><strong>Ethanol:</strong> Efficient but can extract chlorophyll (bitter taste)</span>
                    </div>
                    <div className="flex items-start">
                      <span className="bg-amber-100 text-amber-800 rounded-full p-1 mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-sm text-gray-700"><strong>Hydrocarbon (Butane/Propane):</strong> Risk of solvent residues unless properly purged</span>
                    </div>
                    <div className="flex items-start">
                      <span className="bg-amber-100 text-amber-800 rounded-full p-1 mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-sm text-gray-700"><strong>Olive Oil:</strong> Safe for home extraction but perishable and low potency</span>
                    </div>
                    <div className="flex items-start">
                      <span className="bg-amber-100 text-amber-800 rounded-full p-1 mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-sm text-gray-700"><strong>Isolate:</strong> 99% pure CBD but lacks entourage effect of full-spectrum</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-gradient-to-r from-teal-50 to-white p-5 rounded-lg border border-teal-200">
                <h3 className="font-semibold text-teal-800 mb-3">Post-Extraction Processing</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="text-sm font-medium text-teal-700 mb-1">Winterization</h4>
                    <p className="text-xs text-gray-600">Removes fats/waxes using cold ethanol filtration</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-teal-700 mb-1">Decarboxylation</h4>
                    <p className="text-xs text-gray-600">Activates cannabinoids through controlled heating</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-teal-700 mb-1">Distillation</h4>
                    <p className="text-xs text-gray-600">Further purifies and separates compounds by boiling point</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Final Takeaways */}
            <section className="bg-white rounded-xl shadow-md mb-10 p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                Key Quality Takeaways
              </h2>

              <div className="bg-green-50 p-5 rounded-lg mb-5">
                <h3 className="text-lg font-semibold text-green-800 mb-3">Identifying Premium CBD</h3>
                <ol className="space-y-3">
                  {[
                    "Always verify third-party lab results (COA) for potency and contaminants",
                    "Choose USDA Organic or similarly certified products when possible",
                    "Full-spectrum products generally offer better therapeutic effects than isolates",
                    "Proper extraction methods (CO2) preserve beneficial compounds",
                    "Transparent companies disclose sourcing, extraction methods, and testing"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="bg-green-100 text-green-800 rounded-full p-1 mr-3">
                        <span className="w-5 h-5 flex items-center justify-center text-sm font-medium">{index + 1}</span>
                      </span>
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="bg-purple-50 p-5 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-800 mb-3">The Future of CBD Quality</h3>
                <p className="text-sm text-gray-700 mb-3">
                  As the CBD industry matures, quality standards are rapidly evolving. Emerging technologies like blockchain for supply chain transparency, advanced testing methods for minor cannabinoids, and FDA regulations (when established) will further differentiate premium products from low-quality imitations. Consumers are increasingly educated and demanding better quality control from manufacturers.
                </p>
                <p className="text-sm text-gray-700">
                  The best CBD companies go beyond basic compliance, implementing pharmaceutical-grade quality systems, sustainable farming practices, and rigorous testing protocols. While quality comes at a higher price, the therapeutic benefits and safety assurances make it a worthwhile investment for regular CBD users.
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
                      Expert reviewed
                    </a>{" "}
                    by{" "}
                    <a
                      href="#"
                      className="text-blue-600 hover:underline font-medium"
                    >
                      Dr. James Wilson, PhD Analytical Chemistry
                    </a>
                  </p>

                  <p className="text-sm text-gray-600 mb-1">
                    — Written by{" "}
                    <a
                      href="#"
                      className="text-blue-600 hover:underline font-medium"
                    >
                      Sarah Thompson
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
            <div className="bg-teal-50 rounded-lg p-6 mb-8">
              <div className="mb-4">
                <h3 className="text-sm font-bold text-teal-800 uppercase tracking-wide mb-2">
                  QUALITY GUIDE NEWSLETTER
                </h3>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Stay updated on CBD standards
                </h4>
                <p className="text-gray-700 text-sm">
                  Get monthly updates on testing methodologies, regulatory changes, and how to identify premium CBD products.
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

            {/* Testing Resources */}
            <div className="bg-white rounded-lg p-6 mb-8 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Testing Resources
              </h3>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <h4 className="font-medium text-gray-800">Lab Verification</h4>
                  <a href="#" className="text-blue-600 text-sm hover:underline block">Verify a COA's Authenticity</a>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-medium text-gray-800">Lab Databases</h4>
                  <a href="#" className="text-blue-600 text-sm hover:underline block">Find ISO 17025 Accredited Labs</a>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-medium text-gray-800">Testing Explained</h4>
                  <a href="#" className="text-blue-600 text-sm hover:underline block">How to Read CBD Lab Results</a>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Product Reports</h4>
                  <a href="#" className="text-blue-600 text-sm hover:underline block">Independent Brand Testing Results</a>
                </div>
              </div>
            </div>

            {/* Certification Resources */}
            <div className="bg-white rounded-lg p-6 mb-8 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Certification Guides
              </h3>
              <div className="space-y-3">
                <div className="bg-green-50 p-3 rounded-lg">
                  <h4 className="text-sm font-medium text-green-700 mb-1">USDA Organic</h4>
                  <a href="#" className="text-xs text-green-600 hover:underline block">CBD Certification Process</a>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h4 className="text-sm font-medium text-blue-700 mb-1">U.S. Hemp Authority</h4>
                  <a href="#" className="text-xs text-blue-600 hover:underline block">Standards Documentation</a>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <h4 className="text-sm font-medium text-purple-700 mb-1">GMP Certification</h4>
                  <a href="#" className="text-xs text-purple-600 hover:underline block">Requirements for CBD</a>
                </div>
                <div className="bg-amber-50 p-3 rounded-lg">
                  <h4 className="text-sm font-medium text-amber-700 mb-1">International Standards</h4>
                  <a href="#" className="text-xs text-amber-600 hover:underline block">EU Novel Food Regulations</a>
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
                    <h4 className="text-sm font-medium text-gray-800">CBD Quality Checklist</h4>
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
                    <h4 className="text-sm font-medium text-gray-800">COA Interpretation Guide</h4>
                    <a href="#" className="text-xs text-blue-600 hover:underline">Download PDF</a>
                  </div>
                </div>
               </div>
               </div>
               </div>
               </div>
               </div>
               </div>
  );
}