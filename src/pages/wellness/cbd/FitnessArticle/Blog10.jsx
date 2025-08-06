"use client";

import { useState } from "react";
import { Dumbbell, Clock, Salad, HeartPulse,Calendar, ChevronDown, Flame, Zap, Moon, Sun, Activity } from "lucide-react";

export default function FitnessArticle10() {
  const [email, setEmail] = useState("");
  const [activeTab, setActiveTab] = useState("Nutrition");
  const [expandedSections, setExpandedSections] = useState({
    nutrition: true,
    timing: false,
    supplements: false,
    recovery: false
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
    "Nutrition",
    "Meal Timing",
    "Supplementation",
    "Hydration",
    "Recovery",
    "Workout Fuel",
    "FAQs"
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
                  <Dumbbell className="w-8 h-8 text-orange-600" />
                </div>
                <div>
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight">
                    Fitness and Nutrition: Maximizing Your Performance
                  </h1>
                  <p className="text-lg sm:text-xl text-gray-800 font-medium">
                    Essential nutrition guidelines, meal timing recommendations, and dietary strategies to fuel your workouts and support recovery for optimal fitness results
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
                      {tab === "Nutrition" && <Salad className="w-4 h-4 mr-1" />}
                      {tab === "Meal Timing" && <Clock className="w-4 h-4 mr-1" />}
                      {tab === "Supplementation" && <Flame className="w-4 h-4 mr-1" />}
                      {tab === "Recovery" && <Moon className="w-4 h-4 mr-1" />}
                      {tab === "Workout Fuel" && <Zap className="w-4 h-4 mr-1" />}
                      {tab}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Performance Pyramid */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <Activity className="w-6 h-6 mr-2 text-orange-600" />
                The Performance Pyramid
              </h2>
              <p className="text-gray-700 mb-6">
                Optimal fitness results are built on a foundation of proper nutrition, strategic timing, and recovery. This pyramid illustrates how these elements work together to maximize your performance.
              </p>
              
              <div className="space-y-4">
                {/* Level 1 */}
                <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                  <div className="flex items-center mb-2">
                    <div className="bg-orange-100 text-orange-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 font-bold">1</div>
                    <h3 className="font-bold text-gray-800">Base: Nutrition Fundamentals</h3>
                  </div>
                  <ul className="list-disc pl-8 text-sm text-gray-700 space-y-1">
                    <li>Macronutrient balance (proteins, carbs, fats)</li>
                    <li>Micronutrient density (vitamins & minerals)</li>
                    <li>Hydration and electrolyte balance</li>
                  </ul>
                </div>
                
                {/* Level 2 */}
                <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500 ml-6">
                  <div className="flex items-center mb-2">
                    <div className="bg-amber-100 text-amber-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 font-bold">2</div>
                    <h3 className="font-bold text-gray-800">Middle: Meal Timing & Periodization</h3>
                  </div>
                  <ul className="list-disc pl-8 text-sm text-gray-700 space-y-1">
                    <li>Pre/post workout nutrition</li>
                    <li>Nutrient timing for specific goals</li>
                    <li>Training-nutrition synchronization</li>
                  </ul>
                </div>
                
                {/* Level 3 */}
                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500 ml-12">
                  <div className="flex items-center mb-2">
                    <div className="bg-yellow-100 text-yellow-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 font-bold">3</div>
                    <h3 className="font-bold text-gray-800">Peak: Performance Optimization</h3>
                  </div>
                  <ul className="list-disc pl-8 text-sm text-gray-700 space-y-1">
                    <li>Supplementation strategies</li>
                    <li>Advanced recovery protocols</li>
                    <li>Individualized nutrition programming</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Nutrition Section */}
            <section 
              className="bg-white rounded-xl shadow-md mb-8 overflow-hidden border border-gray-200"
              onClick={() => toggleSection('nutrition')}
            >
              <div className="flex justify-between items-center bg-gradient-to-r from-green-50 to-white p-5 cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-green-100 p-2 rounded-lg mr-4">
                    <Salad className="w-5 h-5 text-green-600" />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    Foundational Nutrition
                  </h2>
                </div>
                <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${expandedSections.nutrition ? 'rotate-180' : ''}`} />
              </div>
              
              {expandedSections.nutrition && (
                <div className="p-5 pt-0">
                  {/* Macronutrient Guide */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-4">Macronutrient Breakdown</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-white border border-green-100 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <div className="bg-green-100 p-1 rounded-full mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <h4 className="font-medium text-gray-800">Protein</h4>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">
                          <span className="font-bold">1.6-2.2g/kg body weight</span> for muscle growth
                        </p>
                        <p className="text-xs text-gray-500">
                          Best sources: Chicken, fish, eggs, lean beef, whey, plant proteins
                        </p>
                      </div>
                      <div className="bg-white border border-blue-100 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <div className="bg-blue-100 p-1 rounded-full mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <h4 className="font-medium text-gray-800">Carbohydrates</h4>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">
                          <span className="font-bold">3-7g/kg body weight</span> depending on activity level
                        </p>
                        <p className="text-xs text-gray-500">
                          Best sources: Rice, oats, potatoes, fruits, whole grains
                        </p>
                      </div>
                      <div className="bg-white border border-amber-100 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <div className="bg-amber-100 p-1 rounded-full mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-amber-600" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <h4 className="font-medium text-gray-800">Fats</h4>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">
                          <span className="font-bold">0.5-1.5g/kg body weight</span> for hormone health
                        </p>
                        <p className="text-xs text-gray-500">
                          Best sources: Avocados, nuts, olive oil, fatty fish, seeds
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Micronutrient Focus */}
                  <div className="bg-green-50 rounded-lg p-5 mb-6">
                    <h3 className="font-semibold text-green-800 mb-3">Critical Micronutrients for Athletes</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {[
                        {name: "Iron", role: "Oxygen transport", sources: "Red meat, spinach"},
                        {name: "Calcium", role: "Bone health", sources: "Dairy, leafy greens"},
                        {name: "Vitamin D", role: "Immune function", sources: "Sunlight, fatty fish"},
                        {name: "Magnesium", role: "Muscle relaxation", sources: "Nuts, dark chocolate"},
                        {name: "Zinc", role: "Recovery", sources: "Oysters, beef"},
                        {name: "B Vitamins", role: "Energy production", sources: "Whole grains, eggs"},
                        {name: "Electrolytes", role: "Hydration", sources: "Bananas, coconut water"},
                        {name: "Antioxidants", role: "Recovery", sources: "Berries, dark greens"}
                      ].map((nutrient, index) => (
                        <div key={index} className="bg-white p-3 rounded-lg border border-green-100">
                          <h4 className="text-sm font-medium text-green-700 mb-1">{nutrient.name}</h4>
                          <p className="text-xs text-gray-600 mb-1">{nutrient.role}</p>
                          <p className="text-xs text-gray-500 font-medium">{nutrient.sources}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Nutrition Strategies */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-3">Nutrition for Different Goals</h3>
                      <div className="space-y-3">
                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                          <h4 className="font-medium text-gray-800 mb-1">Muscle Gain</h4>
                          <p className="text-xs text-gray-600">
                            • 300-500 calorie surplus • 2.2g/kg protein • Carb-heavy around workouts
                          </p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                          <h4 className="font-medium text-gray-800 mb-1">Fat Loss</h4>
                          <p className="text-xs text-gray-600">
                            • 300-500 calorie deficit • Higher protein • Strategic carb timing
                          </p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                          <h4 className="font-medium text-gray-800 mb-1">Endurance</h4>
                          <p className="text-xs text-gray-600">
                            • Higher carb intake • Electrolyte focus • 6-8g/kg carbs on event days
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-3">Sample Meal Plan</h3>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <div className="flex justify-between text-xs font-medium text-gray-500 mb-2">
                          <span>Meal</span>
                          <span>Timing</span>
                        </div>
                        {[
                          {meal: "Oatmeal + Eggs + Berries", timing: "Pre-Workout (1-2hr before)"},
                          {meal: "Protein Shake + Banana", timing: "Post-Workout"},
                          {meal: "Chicken + Rice + Veggies", timing: "Lunch"},
                          {meal: "Greek Yogurt + Nuts", timing: "Snack"},
                          {meal: "Salmon + Sweet Potato", timing: "Dinner"},
                          {meal: "Cottage Cheese", timing: "Before Bed"}
                        ].map((item, index) => (
                          <div key={index} className="flex justify-between py-2 border-b border-gray-100 last:border-0">
                            <span className="text-sm">{item.meal}</span>
                            <span className="text-xs text-gray-500">{item.timing}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* Meal Timing Section */}
            <section 
              className="bg-white rounded-xl shadow-md mb-8 overflow-hidden border border-gray-200"
              onClick={() => toggleSection('timing')}
            >
              <div className="flex justify-between items-center bg-gradient-to-r from-blue-50 to-white p-5 cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-lg mr-4">
                    <Clock className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    Strategic Meal Timing
                  </h2>
                </div>
                <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${expandedSections.timing ? 'rotate-180' : ''}`} />
              </div>
              
              {expandedSections.timing && (
                <div className="p-5 pt-0">
                  {/* Pre-Workout */}
                  <div className="mb-6 bg-blue-50 rounded-lg p-5">
                    <h3 className="font-semibold text-blue-800 mb-3">Pre-Workout Nutrition</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-medium text-blue-700 mb-2">2-3 Hours Before</h4>
                        <ul className="text-xs text-gray-700 space-y-1 list-disc pl-5">
                          <li>Balanced meal with carbs, protein, fats</li>
                          <li>Example: Chicken + rice + vegetables</li>
                          <li>Hydrate with 500ml water</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-blue-700 mb-2">30-60 Minutes Before</h4>
                        <ul className="text-xs text-gray-700 space-y-1 list-disc pl-5">
                          <li>Easily digestible carbs + protein</li>
                          <li>Example: Banana + protein shake</li>
                          <li>200-300ml water</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Post-Workout */}
                  <div className="mb-6 bg-purple-50 rounded-lg p-5">
                    <h3 className="font-semibold text-purple-800 mb-3">Post-Workout Recovery</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-medium text-purple-700 mb-2">Immediately After (0-30min)</h4>
                        <ul className="text-xs text-gray-700 space-y-1 list-disc pl-5">
                          <li>Fast-digesting protein (20-40g)</li>
                          <li>High GI carbs (0.8g/kg body weight)</li>
                          <li>Electrolytes + hydration</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-purple-700 mb-2">1-2 Hours After</h4>
                        <ul className="text-xs text-gray-700 space-y-1 list-disc pl-5">
                          <li>Whole food balanced meal</li>
                          <li>3:1 carb to protein ratio</li>
                          <li>Healthy fats for nutrient absorption</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Timing Strategies */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-3">Nutrient Timing Strategies</h3>
                      <div className="space-y-3">
                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                          <h4 className="font-medium text-gray-800 mb-1">Carb Backloading</h4>
                          <p className="text-xs text-gray-600">
                            Lower carbs earlier, higher carbs post-workout and evening
                          </p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                          <h4 className="font-medium text-gray-800 mb-1">Intermittent Fasting</h4>
                          <p className="text-xs text-gray-600">
                            Train fasted or align eating window with training
                          </p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                          <h4 className="font-medium text-gray-800 mb-1">Intra-Workout Nutrition</h4>
                          <p className="text-xs text-gray-600">
                            Essential for endurance (30-60g carbs/hour)
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-3">Training Day vs Rest Day</h3>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <div className="flex justify-between text-xs font-medium text-gray-500 mb-2">
                          <span>Nutrient</span>
                          <span>Training Day</span>
                          <span>Rest Day</span>
                        </div>
                        {[
                          {nutrient: "Carbs", training: "Higher (focus around workout)", rest: "Lower (focus on fiber)"},
                          {nutrient: "Protein", training: "Same", rest: "Same"},
                          {nutrient: "Fats", training: "Lower around workout", rest: "Higher"},
                          {nutrient: "Calories", training: "Higher", rest: "Lower"},
                          {nutrient: "Hydration", training: "Increased", rest: "Normal"}
                        ].map((item, index) => (
                          <div key={index} className="flex justify-between py-2 border-b border-gray-100 last:border-0 text-sm">
                            <span className="w-1/3">{item.nutrient}</span>
                            <span className="w-1/3 text-center">{item.training}</span>
                            <span className="w-1/3 text-right">{item.rest}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* Supplementation Section */}
            <section 
              className="bg-white rounded-xl shadow-md mb-8 overflow-hidden border border-gray-200"
              onClick={() => toggleSection('supplements')}
            >
              <div className="flex justify-between items-center bg-gradient-to-r from-orange-50 to-white p-5 cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-orange-100 p-2 rounded-lg mr-4">
                    <Flame className="w-5 h-5 text-orange-600" />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    Evidence-Based Supplementation
                  </h2>
                </div>
                <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${expandedSections.supplements ? 'rotate-180' : ''}`} />
              </div>
              
              {expandedSections.supplements && (
                <div className="p-5 pt-0">
                  {/* Supplement Tiers */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">Supplement Effectiveness Tiers</h3>
                    <div className="space-y-4">
                      {/* Tier 1 */}
                      <div className="bg-white border border-green-100 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <div className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 font-bold">1</div>
                          <h4 className="font-medium text-gray-800">Well-Researched, High Impact</h4>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
                          <span className="bg-green-50 text-green-800 p-1 rounded">Whey Protein</span>
                          <span className="bg-green-50 text-green-800 p-1 rounded">Creatine</span>
                          <span className="bg-green-50 text-green-800 p-1 rounded">Caffeine</span>
                          <span className="bg-green-50 text-green-800 p-1 rounded">Beta-Alanine</span>
                        </div>
                      </div>
                      
                      {/* Tier 2 */}
                      <div className="bg-white border border-blue-100 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 font-bold">2</div>
                          <h4 className="font-medium text-gray-800">Moderate Evidence</h4>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
                          <span className="bg-blue-50 text-blue-800 p-1 rounded">Omega-3s</span>
                          <span className="bg-blue-50 text-blue-800 p-1 rounded">Vitamin D</span>
                          <span className="bg-blue-50 text-blue-800 p-1 rounded">Citrulline</span>
                          <span className="bg-blue-50 text-blue-800 p-1 rounded">Electrolytes</span>
                        </div>
                      </div>
                      
                      {/* Tier 3 */}
                      <div className="bg-white border border-gray-100 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <div className="bg-gray-100 text-gray-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 font-bold">3</div>
                          <h4 className="font-medium text-gray-800">Limited Evidence</h4>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
                          <span className="bg-gray-50 text-gray-800 p-1 rounded">BCAAs</span>
                          <span className="bg-gray-50 text-gray-800 p-1 rounded">Glutamine</span>
                          <span className="bg-gray-50 text-gray-800 p-1 rounded">Test Boosters</span>
                          <span className="bg-gray-50 text-gray-800 p-1 rounded">Fat Burners</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Supplement Guide */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-3">Top Performance Supplements</h3>
                      <div className="space-y-3">
                        {[
                          {name: "Creatine", dose: "5g/day", benefit: "Strength + power output", timing: "Anytime"},
                          {name: "Caffeine", dose: "3-6mg/kg", benefit: "Endurance + focus", timing: "Pre-workout"},
                          {name: "Beta-Alanine", dose: "3-6g/day", benefit: "Delay fatigue", timing: "Split doses"},
                          {name: "Citrulline", dose: "6-8g", benefit: "Pump + endurance", timing: "Pre-workout"}
                        ].map((supp, index) => (
                          <div key={index} className="bg-white border border-gray-200 rounded-lg p-3">
                            <div className="flex justify-between items-start">
                              <h4 className="font-medium text-gray-800">{supp.name}</h4>
                              <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">{supp.dose}</span>
                            </div>
                            <p className="text-xs text-gray-600 mt-1">{supp.benefit}</p>
                            <p className="text-xs text-gray-500 mt-1">Timing: {supp.timing}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-3">Recovery Supplements</h3>
                      <div className="space-y-3">
                        {[
                          {name: "Whey Protein", dose: "20-40g", benefit: "Muscle repair", timing: "Post-workout"},
                          {name: "Omega-3s", dose: "1-3g EPA/DHA", benefit: "Reduce inflammation", timing: "With meals"},
                          {name: "Tart Cherry", dose: "480mg", benefit: "Reduce soreness", timing: "Post-workout"},
                          {name: "ZMA", dose: "30mg Zinc", benefit: "Sleep quality", timing: "Before bed"}
                        ].map((supp, index) => (
                          <div key={index} className="bg-white border border-gray-200 rounded-lg p-3">
                            <div className="flex justify-between items-start">
                              <h4 className="font-medium text-gray-800">{supp.name}</h4>
                              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">{supp.dose}</span>
                            </div>
                            <p className="text-xs text-gray-600 mt-1">{supp.benefit}</p>
                            <p className="text-xs text-gray-500 mt-1">Timing: {supp.timing}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Supplement Stack Example */}
                  <div className="bg-orange-50 rounded-lg p-5">
                    <h3 className="font-semibold text-orange-800 mb-3">Sample Pre-Workout Stack</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
                      {[
                        {name: "Caffeine", amount: "200mg", icon: "☕"},
                        {name: "Citrulline", amount: "6g", icon: "💪"},
                        {name: "Beta-Alanine", amount: "3g", icon: "⚡"},
                        {name: "Electrolytes", amount: "500mg", icon: "💧"}
                      ].map((item, index) => (
                        <div key={index} className="bg-white p-3 rounded-lg border border-orange-100">
                          <div className="text-2xl mb-1">{item.icon}</div>
                          <h4 className="text-sm font-medium">{item.name}</h4>
                          <p className="text-xs text-gray-600">{item.amount}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* Recovery Section */}
            <section 
              className="bg-white rounded-xl shadow-md mb-8 overflow-hidden border border-gray-200"
              onClick={() => toggleSection('recovery')}
            >
              <div className="flex justify-between items-center bg-gradient-to-r from-purple-50 to-white p-5 cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-purple-100 p-2 rounded-lg mr-4">
                    <Moon className="w-5 h-5 text-purple-600" />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    Recovery Optimization
                  </h2>
                </div>
                <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${expandedSections.recovery ? 'rotate-180' : ''}`} />
              </div>
              
              {expandedSections.recovery && (
                <div className="p-5 pt-0">
                  {/* Sleep */}
                  <div className="mb-6 bg-purple-50 rounded-lg p-5">
                    <h3 className="font-semibold text-purple-800 mb-3">Sleep for Recovery</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-white p-3 rounded-lg border border-purple-100">
                        <h4 className="text-sm font-medium text-purple-700 mb-1">Duration</h4>
                        <p className="text-xs text-gray-600">7-9 hours for athletes</p>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-purple-100">
                        <h4 className="text-sm font-medium text-purple-700 mb-1">Quality</h4>
                        <p className="text-xs text-gray-600">Deep sleep phases critical</p>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-purple-100">
                        <h4 className="text-sm font-medium text-purple-700 mb-1">Nutrition</h4>
                        <p className="text-xs text-gray-600">Casein protein before bed</p>
                      </div>
                    </div>
                  </div>

                  {/* Active Recovery */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">Active Recovery Strategies</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {[
                        {name: "Foam Rolling", benefit: "Myofascial release", duration: "10-15min"},
                        {name: "Yoga", benefit: "Mobility + relaxation", duration: "20-30min"},
                        {name: "Walking", benefit: "Blood flow", duration: "30-60min"},
                        {name: "Swimming", benefit: "Low-impact movement", duration: "20-30min"}
                      ].map((item, index) => (
                        <div key={index} className="bg-white border border-gray-200 rounded-lg p-3">
                          <h4 className="font-medium text-gray-800 text-sm">{item.name}</h4>
                          <p className="text-xs text-gray-600">{item.benefit}</p>
                          <p className="text-xs text-gray-500 mt-1">{item.duration}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Recovery Timeline */}
                  <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">Post-Workout Recovery Timeline</h3>
                    <div className="space-y-4">
                      {[
                        {time: "0-30min", action: "Hydration + electrolytes", focus: "Replenish fluids"},
                        {time: "0-2hr", action: "Protein + carbs", focus: "Muscle glycogen + repair"},
                        {time: "2-6hr", action: "Balanced meal", focus: "Continued nutrient delivery"},
                        {time: "6-24hr", action: "Sleep + active recovery", focus: "Hormonal balance"},
                        {time: "24-48hr", action: "Next workout prep", focus: "Adaptation"}
                      ].map((item, index) => (
                        <div key={index} className="flex items-start">
                          <div className="bg-purple-100 text-purple-800 rounded-lg p-2 mr-3 flex-shrink-0">
                            <span className="font-medium text-xs">{item.time}</span>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-gray-800">{item.action}</h4>
                            <p className="text-xs text-gray-600">{item.focus}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Recovery Metrics */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-3">Recovery Indicators</h3>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <ul className="space-y-3 text-sm">
                          {[
                            "Morning heart rate variability (HRV)",
                            "Resting heart rate",
                            "Sleep quality/duration",
                            "Muscle soreness levels",
                            "Training motivation",
                            "Appetite patterns"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start">
                              <span className="bg-green-100 text-green-800 rounded-full p-1 mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                              </span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-3">When to Deload</h3>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <ul className="space-y-3 text-sm">
                          {[
                            "Consistent performance plateau",
                            "Elevated resting heart rate",
                            "Persistent muscle soreness",
                            "Frequent illness/injury",
                            "Sleep disturbances",
                            "Decreased HRV trends"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start">
                              <span className="bg-red-100 text-red-800 rounded-full p-1 mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                              </span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* Final Takeaways */}
            <section className="bg-white rounded-xl shadow-md mb-10 p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                Performance Nutrition Checklist
              </h2>

              <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-5 rounded-lg mb-5 border border-orange-200">
                <h3 className="text-lg font-semibold text-orange-800 mb-3">Daily Fundamentals</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-sm">
                    {[
                      "✓ Meet protein targets (1.6-2.2g/kg)",
                      "✓ Consume 5+ servings vegetables",
                      "✓ Hydrate (35ml/kg body weight)",
                      "✓ Time carbs around workouts"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2 text-green-600">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <ul className="space-y-2 text-sm">
                    {[
                      "✓ Prioritize sleep (7-9 hours)",
                      "✓ Manage stress levels",
                      "✓ Include healthy fats",
                      "✓ Adjust for activity level"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2 text-green-600">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-5 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Long-Term Success Strategies</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 rounded-full p-1 mr-3 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-700">
                      Consistency beats perfection - aim for 80-90% adherence to allow flexibility while making progress.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 rounded-full p-1 mr-3 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-700">
                      Periodize your nutrition just like your training - different phases require different approaches.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 rounded-full p-1 mr-3 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-700">
                      Track performance metrics alongside dietary changes to identify what works best for your body.
                    </p>
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
                      Expert reviewed
                    </a>{" "}
                    by{" "}
                    <a
                      href="#"
                      className="text-blue-600 hover:underline font-medium"
                    >
                      Dr. James Wilson, Sports Nutritionist
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
            <div className="bg-orange-50 rounded-lg p-6 mb-8">
              <div className="mb-4">
                <h3 className="text-sm font-bold text-orange-800 uppercase tracking-wide mb-2">
                  FITNESS NUTRITION NEWSLETTER
                </h3>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Get performance nutrition tips
                </h4>
                <p className="text-gray-700 text-sm">
                  Weekly insights on meal planning, supplement research, and evidence-based strategies to enhance your training.
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

            {/* Fitness Calculators */}
            <div className="bg-white rounded-lg p-6 mb-8 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Fitness Calculators
              </h3>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <h4 className="font-medium text-gray-800">Macro Calculator</h4>
                  <a href="#" className="text-blue-600 text-sm hover:underline block">Personalized macronutrient targets</a>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-medium text-gray-800">TDEE Calculator</h4>
                  <a href="#" className="text-blue-600 text-sm hover:underline block">Estimate your daily calorie needs</a>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-medium text-gray-800">Hydration Calculator</h4>
                  <a href="#" className="text-blue-600 text-sm hover:underline block">Custom fluid intake recommendations</a>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Supplement Stack Builder</h4>
                  <a href="#" className="text-blue-600 text-sm hover:underline block">Create your ideal supplement regimen</a>
                </div>
              </div>
            </div>

            {/* Meal Planning Resources */}
            <div className="bg-white rounded-lg p-6 mb-8 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Meal Planning Tools
              </h3>
              <div className="space-y-3">
                <div className="bg-green-50 p-3 rounded-lg">
                  <h4 className="text-sm font-medium text-green-700 mb-1">7-Day Meal Plans</h4>
                  <a href="#" className="text-xs text-green-600 hover:underline block">Download for different goals</a>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h4 className="text-sm font-medium text-blue-700 mb-1">Grocery List Generator</h4>
                  <a href="#" className="text-xs text-blue-600 hover:underline block">Custom shopping lists</a>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <h4 className="text-sm font-medium text-purple-700 mb-1">Meal Prep Guide</h4>
                  <a href="#" className="text-xs text-purple-600 hover:underline block">Batch cooking strategies</a>
                </div>
                <div className="bg-amber-50 p-3 rounded-lg">
                  <h4 className="text-sm font-medium text-amber-700 mb-1">Recipe Database</h4>
                  <a href="#" className="text-xs text-amber-600 hover:underline block">300+ athlete-approved recipes</a>
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
                    <h4 className="text-sm font-medium text-gray-800">Macro Cheat Sheet</h4>
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
                    <h4 className="text-sm font-medium text-gray-800">Supplement Guide</h4>
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
                    <h4 className="text-sm font-medium text-gray-800">Recovery Checklist</h4>
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
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-6 text-white text-center">
                <h4 className="font-bold mb-2">Performance Nutrition Journal</h4>
                <p className="text-sm mb-4">
                  Track your meals, workouts, and progress with our science-based template
                </p>
                <button className="bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded text-sm font-medium transition-colors">
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