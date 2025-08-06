"use client";

import { useState } from "react";
import { User, Calendar, ChevronDown, ChevronUp } from "lucide-react";

export default function CbdArticle9() {
  const [email, setEmail] = useState("");
  const [activeTab, setActiveTab] = useState("Introduction");
  const [expandedSections, setExpandedSections] = useState({
    beginners: true,
    chronic: false,
    seniors: false,
    athletes: false
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
    "Introduction",
    "Beginner Stories",
    "Chronic Conditions",
    "Senior Experiences",
    "Athlete Insights",
    "Product Guide",
    "FAQ",
    "Key Takeaways"
  ];

  return (
    <div className="min-h-screen bg-white mt-40 lg:mt-40 pt-4 sm:pt-8 md:pt-12 lg:pt-16 xl:pt-20">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
        {/* Main grid container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Main Content - takes 2/3 width on large screens */}
          <div className="lg:col-span-2">
            {/* Header Section */}
            <div className="mb-6 sm:mb-8">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6 leading-tight">
                Real CBD Experiences: A User's Journey
              </h1>
              <p className="text-lg sm:text-xl text-teal-700 font-medium mb-4">
                Real experiences and practical advice from CBD users on managing wellness routines, finding the right products, and maintaining quality of life with natural solutions
              </p>

              {/* Navigation Tabs */}
              <div className="relative mb-4 sm:mb-6">
                <div className="flex overflow-x-auto pb-2 mb-4 sm:mb-6 scrollbar-hide border-b border-gray-200">
                  <div className="flex space-x-1 sm:space-x-2 min-w-max">
                    {tabs.map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-medium border-b-2 whitespace-nowrap transition-colors flex-shrink-0 ${
                          activeTab === tab
                            ? "border-teal-500 text-teal-600"
                            : "border-transparent text-gray-600 hover:text-gray-900"
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Intro Text */}
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-4 sm:mb-6 md:mb-8 leading-relaxed">
                In this collection of personal CBD journeys, we explore how real people from different walks of life have incorporated CBD into their wellness routines. These unfiltered stories reveal the challenges, discoveries, and triumphs of finding the right CBD approach for individual needs.
              </p>

              {/* Main Image */}
              <div className="mb-4 sm:mb-6 md:mb-8">
                <img
                  src="https://images.unsplash.com/photo-1602488283247-29bf144bf302?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Diverse group of CBD users sharing experiences"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <p className="text-xs text-gray-500 mt-2">Real people, real stories - CBD users share their personal wellness journeys</p>
              </div>

              {/* Why Stories Matter */}
              <div className="bg-purple-50 border-l-4 border-purple-400 p-4 sm:p-5 md:p-6 mb-6 sm:mb-8 rounded-r-lg">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">
                  Why Personal CBD Stories Matter
                </h2>
                <p className="text-sm sm:text-base text-gray-700 mb-3">
                  While clinical research continues, personal experiences offer invaluable insights into CBD's real-world applications:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm sm:text-base">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Reveal how different people respond to CBD</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Highlight practical dosing strategies that work</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Showcase diverse product preferences</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Demonstrate integration with lifestyle routines</span>
                  </li>
                </ul>
              </div>

              {/* Beginners Journey */}
              <section 
                className="bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-sm mb-6 border border-gray-200 cursor-pointer"
                onClick={() => toggleSection('beginners')}
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    The Beginner's Journey: Sarah's Story
                  </h2>
                  {expandedSections.beginners ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </div>
                
                {expandedSections.beginners && (
                  <div className="mt-4 space-y-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-start mb-3">
                        <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <User className="w-6 h-6 text-purple-700" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800">Sarah K., 32 • Marketing Manager • CBD user for 8 months</h3>
                          <p className="text-xs text-gray-500">"I was skeptical but desperate for better sleep and stress relief"</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div className="bg-white p-3 rounded-lg border border-gray-100">
                          <h4 className="font-medium text-blue-700 mb-1">Initial Concerns</h4>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Fear of psychoactive effects</li>
                            <li>• Overwhelmed by product choices</li>
                            <li>• Worried about workplace drug tests</li>
                          </ul>
                        </div>
                        <div className="bg-white p-3 rounded-lg border border-gray-100">
                          <h4 className="font-medium text-green-700 mb-1">Breakthrough Moments</h4>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Discovered broad-spectrum for THC-free option</li>
                            <li>• Found 25mg dose worked best for evening relaxation</li>
                            <li>• Created consistent bedtime routine with CBD</li>
                          </ul>
                        </div>
                      </div>

                      <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                        <h4 className="font-medium text-blue-800 mb-2">Sarah's Current Routine</h4>
                        <div className="flex items-center text-sm text-gray-700 mb-2">
                          <span className="font-medium w-24">Morning:</span>
                          <span>10mg CBD isolate tincture with coffee</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-700 mb-2">
                          <span className="font-medium w-24">Evening:</span>
                          <span>25mg broad-spectrum oil + 5mg CBN gummy before bed</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-700">
                          <span className="font-medium w-24">As Needed:</span>
                          <span>CBD topical for tension headaches</span>
                        </div>
                      </div>

                      <div className="mt-4">
                        <h4 className="font-medium text-gray-800 mb-2">Advice for Beginners</h4>
                        <p className="text-sm text-gray-700 italic">"Start low, go slow. I wasted money jumping straight to high-potency products when my sweet spot turned out to be moderate doses. Keep a journal to track effects - I didn't realize how much it helped my daytime anxiety until I looked back at my notes."</p>
                      </div>
                    </div>
                  </div>
                )}
              </section>

              {/* Chronic Condition Journey */}
              <section 
                className="bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-sm mb-6 border border-gray-200 cursor-pointer"
                onClick={() => toggleSection('chronic')}
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    Managing Chronic Pain: Michael's Experience
                  </h2>
                  {expandedSections.chronic ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </div>
                
                {expandedSections.chronic && (
                  <div className="mt-4 space-y-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-start mb-3">
                        <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <User className="w-6 h-6 text-amber-700" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800">Michael T., 47 • Construction Foreman • CBD user for 3 years</h3>
                          <p className="text-xs text-gray-500">"CBD gave me my life back after a back injury and opioid dependence"</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div className="bg-white p-3 rounded-lg border border-gray-100">
                          <h4 className="font-medium text-blue-700 mb-1">Initial Challenges</h4>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Needed pain relief without intoxication</li>
                            <li>• Finding products strong enough for severe pain</li>
                            <li>• Cost concerns for regular use</li>
                          </ul>
                        </div>
                        <div className="bg-white p-3 rounded-lg border border-gray-100">
                          <h4 className="font-medium text-green-700 mb-1">Successful Strategies</h4>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Combining full-spectrum oil with topical creams</li>
                            <li>• Using CBG in morning for inflammation</li>
                            <li>• Purchasing bulk isolate for cost savings</li>
                          </ul>
                        </div>
                      </div>

                      <div className="mt-4 p-3 bg-amber-50 rounded-lg">
                        <h4 className="font-medium text-amber-800 mb-2">Michael's Pain Management Protocol</h4>
                        <div className="flex items-center text-sm text-gray-700 mb-2">
                          <span className="font-medium w-32">Morning:</span>
                          <span>50mg full-spectrum oil + CBG capsule</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-700 mb-2">
                          <span className="font-medium w-32">After Work:</span>
                          <span>CBD/THC 4:1 balm on affected areas</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-700">
                          <span className="font-medium w-32">Night:</span>
                          <span>100mg CBD + 2mg THC capsule for sleep</span>
                        </div>
                      </div>

                      <div className="mt-4">
                        <h4 className="font-medium text-gray-800 mb-2">Words of Wisdom</h4>
                        <p className="text-sm text-gray-700 italic">"Don't expect miracles overnight. It took me six weeks of consistent use to fully transition off pharmaceuticals. Work with a doctor - mine helped me taper safely while introducing CBD. Now I'm back at work with clearer thinking and no more withdrawal cycles."</p>
                      </div>
                    </div>
                  </div>
                )}
              </section>

              {/* Seniors Journey */}
              <section 
                className="bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-sm mb-6 border border-gray-200 cursor-pointer"
                onClick={() => toggleSection('seniors')}
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    Golden Years Renewed: Eleanor's Discovery
                  </h2>
                  {expandedSections.seniors ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </div>
                
                {expandedSections.seniors && (
                  <div className="mt-4 space-y-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-start mb-3">
                        <div className="w-12 h-12 bg-teal-200 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <User className="w-6 h-6 text-teal-700" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800">Eleanor P., 72 • Retired Teacher • CBD user for 2 years</h3>
                          <p className="text-xs text-gray-500">"At my age, I was taking too many pills. CBD simplified everything"</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div className="bg-white p-3 rounded-lg border border-gray-100">
                          <h4 className="font-medium text-blue-700 mb-1">Initial Hesitations</h4>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Concerned about interactions with medications</li>
                            <li>• Intimidated by new technology (online ordering)</li>
                            <li>• Skeptical of "trendy" wellness products</li>
                          </ul>
                        </div>
                        <div className="bg-white p-3 rounded-lg border border-gray-100">
                          <h4 className="font-medium text-green-700 mb-1">Unexpected Benefits</h4>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Reduced arthritis pain without stomach issues</li>
                            <li>• Improved sleep quality after decades of insomnia</li>
                            <li>• More energy for gardening and grandchildren</li>
                          </ul>
                        </div>
                      </div>

                      <div className="mt-4 p-3 bg-teal-50 rounded-lg">
                        <h4 className="font-medium text-teal-800 mb-2">Eleanor's Senior-Friendly Approach</h4>
                        <div className="flex items-center text-sm text-gray-700 mb-2">
                          <span className="font-medium w-32">Morning:</span>
                          <span>15mg CBD softgel with breakfast</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-700 mb-2">
                          <span className="font-medium w-32">Afternoon:</span>
                          <span>CBD-infused tea with friends</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-700">
                          <span className="font-medium w-32">Night:</span>
                          <span>1:1 CBD:CBN tincture under tongue</span>
                        </div>
                      </div>

                      <div className="mt-4">
                        <h4 className="font-medium text-gray-800 mb-2">Advice for Fellow Seniors</h4>
                        <p className="text-sm text-gray-700 italic">"Start with simple products - I found capsules easiest at first. Ask your pharmacist about medication interactions. My daughter helped me find a reputable online store with senior discounts. Now my bridge club all asks me for CBD advice!"</p>
                      </div>
                    </div>
                  </div>
                )}
              </section>

              {/* Athletes Journey */}
              <section 
                className="bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-sm mb-6 border border-gray-200 cursor-pointer"
                onClick={() => toggleSection('athletes')}
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    Peak Performance: Jamal's Athletic Edge
                  </h2>
                  {expandedSections.athletes ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </div>
                
                {expandedSections.athletes && (
                  <div className="mt-4 space-y-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-start mb-3">
                        <div className="w-12 h-12 bg-red-200 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <User className="w-6 h-6 text-red-700" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800">Jamal R., 28 • Professional Cyclist • CBD user for 18 months</h3>
                          <p className="text-xs text-gray-500">"Recovery is where champions are made - CBD is my secret weapon"</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div className="bg-white p-3 rounded-lg border border-gray-100">
                          <h4 className="font-medium text-blue-700 mb-1">Performance Challenges</h4>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Need for rapid post-training recovery</li>
                            <li>• Managing inflammation without NSAIDs</li>
                            <li>• Staying competition-legal with drug testing</li>
                          </ul>
                        </div>
                        <div className="bg-white p-3 rounded-lg border border-gray-100">
                          <h4 className="font-medium text-green-700 mb-1">Training Advantages</h4>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Faster muscle recovery between sessions</li>
                            <li>• Improved sleep quality during heavy training</li>
                            <li>• Mental clarity for race strategy sessions</li>
                          </ul>
                        </div>
                      </div>

                      <div className="mt-4 p-3 bg-red-50 rounded-lg">
                        <h4 className="font-medium text-red-800 mb-2">Jamal's Athletic Protocol</h4>
                        <div className="flex items-center text-sm text-gray-700 mb-2">
                          <span className="font-medium w-40">Pre-Training:</span>
                          <span>CBD energy chew with caffeine</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-700 mb-2">
                          <span className="font-medium w-40">Post-Training:</span>
                          <span>50mg CBD protein shake + topical cream</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-700">
                          <span className="font-medium w-40">Travel Days:</span>
                          <span>CBD gummies for jet lag and stiffness</span>
                        </div>
                      </div>

                      <div className="mt-4">
                        <h4 className="font-medium text-gray-800 mb-2">Advice for Athletes</h4>
                        <p className="text-sm text-gray-700 italic">"Third-party testing is non-negotiable - I need to trust what's in my products. I work with a sports nutritionist to time my CBD doses around training. For competition, I stop full-spectrum products 3 weeks out and switch to isolate to avoid any THC risks."</p>
                      </div>
                    </div>
                  </div>
                )}
              </section>

              {/* Product Selection Guide */}
              <section className="bg-white p-6 rounded-xl shadow-md mb-10">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">
                  Product Selection Guide from Real Users
                </h2>

                <div className="space-y-6">
                  <div className="bg-blue-50 p-5 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-800 mb-3">Most Recommended Products by Experience Level</h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full bg-white rounded-lg overflow-hidden">
                        <thead className="bg-blue-100">
                          <tr>
                            <th className="py-2 px-4 text-left text-sm font-medium text-blue-800">User Type</th>
                            <th className="py-2 px-4 text-left text-sm font-medium text-blue-800">Top Tincture</th>
                            <th className="py-2 px-4 text-left text-sm font-medium text-blue-800">Top Topical</th>
                            <th className="py-2 px-4 text-left text-sm font-medium text-blue-800">Top Edible</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          <tr>
                            <td className="py-3 px-4 text-sm font-medium text-gray-800">Beginners</td>
                            <td className="py-3 px-4 text-sm text-gray-700">Broad-spectrum 500mg</td>
                            <td className="py-3 px-4 text-sm text-gray-700">Cooling roll-on</td>
                            <td className="py-3 px-4 text-sm text-gray-700">10mg CBD gummies</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 text-sm font-medium text-gray-800">Chronic Conditions</td>
                            <td className="py-3 px-4 text-sm text-gray-700">Full-spectrum 1000mg</td>
                            <td className="py-3 px-4 text-sm text-gray-700">CBD+Arnica cream</td>
                            <td className="py-3 px-4 text-sm text-gray-700">1:1 CBD:THC capsules</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 text-sm font-medium text-gray-800">Seniors</td>
                            <td className="py-3 px-4 text-sm text-gray-700">Water-soluble 300mg</td>
                            <td className="py-3 px-4 text-sm text-gray-700">Hand & joint cream</td>
                            <td className="py-3 px-4 text-sm text-gray-700">CBD/CBN sleep gummies</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 text-sm font-medium text-gray-800">Athletes</td>
                            <td className="py-3 px-4 text-sm text-gray-700">CBD+CBG tincture</td>
                            <td className="py-3 px-4 text-sm text-gray-700">Post-workout balm</td>
                            <td className="py-3 px-4 text-sm text-gray-700">CBD recovery drink mix</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="bg-purple-50 p-5 rounded-lg">
                    <h3 className="text-lg font-semibold text-purple-800 mb-3">Unexpected Product Discoveries</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-medium text-purple-700 mb-2">CBD Bath Soaks</h4>
                        <p className="text-sm text-gray-700">"I never thought I'd love CBD in the bath until I tried it after marathon training. The muscle relief is incredible." - Jamal</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-medium text-purple-700 mb-2">CBD Pet Products</h4>
                        <p className="text-sm text-gray-700">"My anxious rescue dog benefits as much as I do from CBD. We both take our tinctures together now." - Sarah</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-medium text-purple-700 mb-2">CBD Coffee</h4>
                        <p className="text-sm text-gray-700">"The perfect way to start my day - energizing but without jitters." - Eleanor</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-medium text-purple-700 mb-2">Transdermal Patches</h4>
                        <p className="text-sm text-gray-700">"Game changer for all-day pain relief without remembering doses." - Michael</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* FAQ Section */}
              <section className="bg-white p-6 rounded-xl shadow-md mb-10">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">
                  Frequently Asked Questions from Real Users
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      How long until I feel effects from CBD?
                    </h3>
                    <p className="text-base text-gray-600">
                      <span className="font-medium">Sarah says:</span> "Tinctures worked within 30 minutes for me, but it took 2 weeks of consistent use to notice the full effects on my anxiety."
                      <br />
                      <span className="font-medium">Michael adds:</span> "For chronic pain, some relief came quickly but maximum benefits took about a month of regular dosing."
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      How do I choose between full-spectrum, broad-spectrum, and isolate?
                    </h3>
                    <p className="text-base text-gray-600">
                      <span className="font-medium">Jamal explains:</span> "As an athlete subject to testing, I use isolate during competition seasons but prefer full-spectrum in off-season for better recovery."
                      <br />
                      <span className="font-medium">Eleanor notes:</span> "I started with isolate to avoid THC but found broad-spectrum works better for my arthritis without drug interaction concerns."
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      What's the biggest mistake you made with CBD?
                    </h3>
                    <p className="text-base text-gray-600">
                      <span className="font-medium">Sarah admits:</span> "Buying the cheapest products at first - they were ineffective and a waste of money."
                      <br />
                      <span className="font-medium">Michael shares:</span> "Taking too much too soon and getting discouraged before finding my optimal dose."
                      <br />
                      <span className="font-medium">Jamal adds:</span> "Not checking for third-party testing and failing a doping test from contaminated product early in my career."
                    </p>
                  </div>
                </div>
              </section>

              {/* Takeaway Section */}
              <section className="bg-white p-6 rounded-xl shadow-md mb-10">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">
                  Key Takeaways from Real CBD Journeys
                </h2>

                <div className="bg-teal-50 p-5 rounded-lg mb-5">
                  <h3 className="text-lg font-semibold text-teal-800 mb-3">Universal Lessons from All Users</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="bg-teal-100 text-teal-800 rounded-full p-1 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span>Consistency is key - effects often build over weeks</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-teal-100 text-teal-800 rounded-full p-1 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span>Quality matters - third-party testing is non-negotiable</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-teal-100 text-teal-800 rounded-full p-1 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span>Dosing is personal - what works for others may not work for you</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-teal-100 text-teal-800 rounded-full p-1 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span>Combination approaches often work best (tinctures + topicals, etc.)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">Final Thoughts from Our Users</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <p className="text-sm text-gray-700 italic">"CBD isn't magic, but it's been transformative for my quality of life when used correctly and consistently." - Michael</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <p className="text-sm text-gray-700 italic">"The learning curve was steep but worth it - I wish I'd found CBD years earlier." - Eleanor</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <p className="text-sm text-gray-700 italic">"Don't give up if the first product doesn't work - formulation and dosing make all the difference." - Sarah</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <p className="text-sm text-gray-700 italic">"CBD works best as part of a holistic wellness approach, not as a standalone solution." - Jamal</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
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
                  HEALTHLINE NEWSLETTER
                </h3>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  The best of health and wellness
                </h4>
                <p className="text-gray-700 text-sm">
                  We do the research so you don't have to. Stay in the know with
                  the latest in health and wellness.
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
                  JOIN NOW
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

            {/* Top CBD Products */}
            <div className="bg-white rounded-lg p-6 mb-8 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                User-Tested CBD Products
              </h3>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <h4 className="font-medium text-gray-800">Best for Beginners</h4>
                  <p className="text-sm text-gray-600">Joy Organics Broad-Spectrum Tincture</p>
                  <p className="text-xs text-gray-500 mt-1">"Perfect gentle introduction" - Sarah</p>
                  <a href="#" className="text-blue-600 text-sm hover:underline">View product</a>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-medium text-gray-800">Best for Pain Relief</h4>
                  <p className="text-sm text-gray-600">Lazarus Naturals High Potency CBD</p>
                  <p className="text-xs text-gray-500 mt-1">"My daily essential" - Michael</p>
                  <a href="#" className="text-blue-600 text-sm hover:underline">View product</a>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Best for Active Lifestyles</h4>
                  <p className="text-sm text-gray-600">CBDistillery Sport Cream</p>
                  <p className="text-xs text-gray-500 mt-1">"Game changer for recovery" - Jamal</p>
                  <a href="#" className="text-blue-600 text-sm hover:underline">View product</a>
                </div>
              </div>
            </div>

            {/* User Tips */}
            <div className="bg-white rounded-lg p-6 mb-8 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Quick Tips from Real Users
              </h3>
              <div className="space-y-4">
                <div className="bg-amber-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700 italic">"Store oils in a cool, dark place - I keep mine in the fridge door for easy access." - Eleanor</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700 italic">"Take CBD with fatty foods like avocado or nuts for better absorption." - Sarah</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700 italic">"Rotate products every few months to prevent building tolerance." - Michael</p>
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