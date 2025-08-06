"use client"

import { useState } from "react"
import { User, Calendar, Star, Shield, Zap, DollarSign } from "lucide-react"

export default function MensMultivitaminGuide() {
  const [email, setEmail] = useState("")
  const [activeTab, setActiveTab] = useState("Top Picks")

  const handleEmailSubmit = (e) => {
    e.preventDefault()
    console.log("Email submitted:", email)
    setEmail("")
  }

  const tabs = ["Top Picks", "Comparison", "How to Choose", "FAQ"]

  return (
    <div className="min-h-screen bg-white pt-20 md:pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header Section */}
            <div className="mb-6 sm:mb-8">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                Best Multivitamins for Men in 2025: Complete Guide & Expert Reviews
              </h1>

              {/* Navigation Tabs */}
              <div className="mb-4 sm:mb-6">
                <div className="border-b border-gray-200">
                  <div className="flex flex-wrap gap-1 sm:gap-2 -mb-px">
                    {tabs.map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-2 sm:px-4 py-2 text-xs sm:text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                          activeTab === tab
                            ? "border-blue-500 text-blue-600"
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
              <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
                Discover the top-rated multivitamins specifically formulated for men's unique nutritional needs,
                supporting energy, muscle health, heart function, and overall vitality.
              </p>

              {/* Main Image */}
              <div className="mb-6 sm:mb-8">
                <img
                  src="/M.png"
                  alt="Various men's multivitamin bottles and supplements with athletic equipment"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>

              {/* Article Description */}
              <div className="bg-blue-50 border-l-4 border-blue-400 p-3 sm:p-4 mb-6 sm:mb-8">
                <p className="text-sm sm:text-base text-gray-700">
                  <span className="text-blue-600 font-medium">M</span>en have distinct nutritional requirements that
                  differ from women, particularly regarding muscle support, cardiovascular health, and energy
                  metabolism. The right multivitamin can help optimize performance and long-term wellness.
                </p>
              </div>

              <p className="text-sm sm:text-base text-gray-700 mb-6 sm:mb-8">
                Keep reading to discover our top picks for 2025, detailed comparisons, and everything you need to know
                to choose the perfect multivitamin for your active lifestyle and health goals.
              </p>
            </div>

            {/* Why Men Need Specialized Multivitamins Section */}
            <section className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-8">
                Why Men Need Specialized Multivitamins
              </h2>

              <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">
                Men's nutritional needs are shaped by higher muscle mass, different hormonal profiles, and typically
                more active lifestyles. A quality men's multivitamin addresses these specific requirements while
                avoiding nutrients that men need less of, like iron.
              </p>

              <div className="bg-green-50 border-l-4 border-green-400 p-3 sm:p-4 mb-6 sm:mb-8">
                <p className="text-sm sm:text-base text-gray-700">
                  <span className="font-semibold">Key Insight:</span> Research shows that 75% of men don't meet the
                  recommended daily intake for at least three essential nutrients, making targeted supplementation
                  crucial for optimal health.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                <div className="bg-blue-50 p-3 sm:p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Essential Nutrients for Men</h4>
                  <ul className="text-xs sm:text-sm text-gray-700 space-y-1">
                    <li>• Zinc (for testosterone and immune support)</li>
                    <li>• Magnesium (for muscle and heart health)</li>
                    <li>• Vitamin D (for bone and hormone health)</li>
                    <li>• B-vitamins (for energy and metabolism)</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-3 sm:p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Men's Health Priorities</h4>
                  <ul className="text-xs sm:text-sm text-gray-700 space-y-1">
                    <li>• Heart health support</li>
                    <li>• Muscle function and recovery</li>
                    <li>• Energy and stamina</li>
                    <li>• Prostate health (40+ years)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Top 5 Men's Multivitamins Section */}
            <section className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                Top 5 Multivitamins for Men in 2025
              </h2>

              {/* 1. Optimum Nutrition Opti-Men */}
              <div className="mb-6 sm:mb-8 border border-gray-200 rounded-lg p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 sm:mb-4">
                  <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-0">
                    1. Optimum Nutrition Opti-Men
                  </h3>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                    <span className="ml-2 text-xs sm:text-sm text-gray-600">4.8/5</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 mb-3 sm:mb-4">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                    <span className="text-xs sm:text-sm text-gray-700">$25-35 per bottle</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                    <span className="text-xs sm:text-sm text-gray-700">Third-party tested</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-orange-600" />
                    <span className="text-xs sm:text-sm text-gray-700">High-potency formula</span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
                  Optimum Nutrition's Opti-Men stands out as our top pick for active men, featuring 75+ ingredients
                  including vitamins, minerals, amino acids, and botanical extracts. It's specifically designed to
                  support energy, muscle function, and overall male health.
                </p>

                <div className="mb-3 sm:mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">What we love:</h4>
                  <ul className="list-disc list-inside text-gray-700 ml-2 sm:ml-4 space-y-1 text-xs sm:text-sm">
                    <li className="text-blue-600">Comprehensive 75+ ingredient formula</li>
                    <li className="text-blue-600">High levels of B-vitamins for energy</li>
                    <li className="text-blue-600">Includes amino acids and antioxidants</li>
                    <li className="text-blue-600">Trusted brand in fitness community</li>
                    <li className="text-blue-600">Excellent value for comprehensive nutrition</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-3 sm:p-4 rounded-lg">
                  <p className="text-gray-700 text-xs sm:text-sm">
                    <span className="font-semibold">Best for:</span> Active men and athletes who want comprehensive
                    nutritional support with high-potency vitamins and performance-enhancing ingredients.
                  </p>
                </div>
              </div>

              {/* 2. Garden of Life Vitamin Code Men */}
              <div className="mb-6 sm:mb-8 border border-gray-200 rounded-lg p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 sm:mb-4">
                  <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-0">
                    2. Garden of Life Vitamin Code Men
                  </h3>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300" />
                    <span className="ml-2 text-xs sm:text-sm text-gray-600">4.7/5</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 mb-3 sm:mb-4">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                    <span className="text-xs sm:text-sm text-gray-700">$40-50 per bottle</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                    <span className="text-xs sm:text-sm text-gray-700">Raw whole food</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-orange-600" />
                    <span className="text-xs sm:text-sm text-gray-700">Heart & prostate support</span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
                  Garden of Life's Vitamin Code Men offers raw, whole food nutrition with targeted support for men's
                  heart and prostate health. The formula includes probiotics and enzymes for enhanced absorption and
                  digestive support.
                </p>

                <div className="mb-3 sm:mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">What we love:</h4>
                  <ul className="list-disc list-inside text-gray-700 ml-2 sm:ml-4 space-y-1 text-xs sm:text-sm">
                    <li className="text-green-600">Raw, whole food vitamins and minerals</li>
                    <li className="text-green-600">Includes probiotics and enzymes</li>
                    <li className="text-green-600">Targeted heart and prostate support</li>
                    <li className="text-green-600">No synthetic binders or fillers</li>
                    <li className="text-green-600">Vegetarian and gluten-free</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-3 sm:p-4 rounded-lg">
                  <p className="text-gray-700 text-xs sm:text-sm">
                    <span className="font-semibold">Best for:</span> Health-conscious men who prefer whole food-based
                    supplements with targeted support for heart and prostate health.
                  </p>
                </div>
              </div>

              {/* 3. Thorne Men's Multi 50+ */}
              <div className="mb-6 sm:mb-8 border border-gray-200 rounded-lg p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 sm:mb-4">
                  <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-0">
                    3. Thorne Men's Multi 50+
                  </h3>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300" />
                    <span className="ml-2 text-xs sm:text-sm text-gray-600">4.6/5</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 mb-3 sm:mb-4">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                    <span className="text-xs sm:text-sm text-gray-700">$50-60 per bottle</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                    <span className="text-xs sm:text-sm text-gray-700">NSF Certified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-orange-600" />
                    <span className="text-xs sm:text-sm text-gray-700">Age-specific formula</span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
                  Thorne's Men's Multi 50+ is specifically formulated for men over 50, addressing age-related
                  nutritional needs including prostate health, cardiovascular support, and cognitive function. It
                  features highly bioavailable forms of nutrients.
                </p>

                <div className="mb-3 sm:mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">What we love:</h4>
                  <ul className="list-disc list-inside text-gray-700 ml-2 sm:ml-4 space-y-1 text-xs sm:text-sm">
                    <li className="text-purple-600">Age-specific nutrient profile</li>
                    <li className="text-purple-600">Premium bioavailable forms</li>
                    <li className="text-purple-600">Prostate and heart health focus</li>
                    <li className="text-purple-600">NSF certified for sport</li>
                    <li className="text-purple-600">No unnecessary additives</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-3 sm:p-4 rounded-lg">
                  <p className="text-gray-700 text-xs sm:text-sm">
                    <span className="font-semibold">Best for:</span> Men over 50 who want premium, age-specific
                    nutritional support with emphasis on prostate and cardiovascular health.
                  </p>
                </div>
              </div>

              {/* 4. One A Day Men's Health Formula */}
              <div className="mb-6 sm:mb-8 border border-gray-200 rounded-lg p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 sm:mb-4">
                  <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-0">
                    4. One A Day Men's Health Formula
                  </h3>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300" />
                    <span className="ml-2 text-xs sm:text-sm text-gray-600">4.4/5</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 mb-3 sm:mb-4">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                    <span className="text-xs sm:text-sm text-gray-700">$10-15 per bottle</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                    <span className="text-xs sm:text-sm text-gray-700">Trusted brand</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-orange-600" />
                    <span className="text-xs sm:text-sm text-gray-700">One tablet daily</span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
                  One A Day Men's Health Formula offers excellent value with essential nutrients for men's health. This
                  budget-friendly option provides key vitamins and minerals in a convenient once-daily tablet that's
                  widely available.
                </p>

                <div className="mb-3 sm:mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">What we love:</h4>
                  <ul className="list-disc list-inside text-gray-700 ml-2 sm:ml-4 space-y-1 text-xs sm:text-sm">
                    <li className="text-orange-600">Excellent value for money</li>
                    <li className="text-orange-600">Convenient once-daily dosing</li>
                    <li className="text-orange-600">Widely available in stores</li>
                    <li className="text-orange-600">Trusted household brand</li>
                    <li className="text-orange-600">Heart health support</li>
                  </ul>
                </div>

                <div className="bg-orange-50 p-3 sm:p-4 rounded-lg">
                  <p className="text-gray-700 text-xs sm:text-sm">
                    <span className="font-semibold">Best for:</span> Budget-conscious men who want a reliable,
                    convenient multivitamin with essential nutrients from a trusted brand.
                  </p>
                </div>
              </div>

              {/* 5. Centrum Silver Men 50+ */}
              <div className="mb-6 sm:mb-8 border border-gray-200 rounded-lg p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 sm:mb-4">
                  <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-0">
                    5. Centrum Silver Men 50+
                  </h3>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300" />
                    <span className="ml-2 text-xs sm:text-sm text-gray-600">4.3/5</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 mb-3 sm:mb-4">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                    <span className="text-xs sm:text-sm text-gray-700">$12-18 per bottle</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                    <span className="text-xs sm:text-sm text-gray-700">Clinically studied</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-orange-600" />
                    <span className="text-xs sm:text-sm text-gray-700">Senior-specific</span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
                  Centrum Silver Men 50+ is specifically formulated for men over 50 with adjusted nutrient levels for
                  mature adults. It includes lycopene for prostate health and higher levels of vitamins D and B12 for
                  age-related needs.
                </p>

                <div className="mb-3 sm:mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">What we love:</h4>
                  <ul className="list-disc list-inside text-gray-700 ml-2 sm:ml-4 space-y-1 text-xs sm:text-sm">
                    <li className="text-indigo-600">Age-adjusted nutrient levels</li>
                    <li className="text-indigo-600">Includes lycopene for prostate health</li>
                    <li className="text-indigo-600">Clinically studied ingredients</li>
                    <li className="text-indigo-600">Affordable and accessible</li>
                    <li className="text-indigo-600">Doctor-recommended brand</li>
                  </ul>
                </div>

                <div className="bg-indigo-50 p-3 sm:p-4 rounded-lg">
                  <p className="text-gray-700 text-xs sm:text-sm">
                    <span className="font-semibold">Best for:</span> Men over 50 who want an affordable, clinically
                    studied multivitamin with age-appropriate nutrient levels.
                  </p>
                </div>
              </div>
            </section>

            {/* Comparison Table Section */}
            <section className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Quick Comparison Table</h2>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 p-2 sm:p-3 text-left font-semibold">Product</th>
                      <th className="border border-gray-300 p-2 sm:p-3 text-left font-semibold">Price Range</th>
                      <th className="border border-gray-300 p-2 sm:p-3 text-left font-semibold">Key Feature</th>
                      <th className="border border-gray-300 p-2 sm:p-3 text-left font-semibold">Best For</th>
                      <th className="border border-gray-300 p-2 sm:p-3 text-left font-semibold">Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-2 sm:p-3 font-medium">Optimum Nutrition Opti-Men</td>
                      <td className="border border-gray-300 p-2 sm:p-3">$25-35</td>
                      <td className="border border-gray-300 p-2 sm:p-3">75+ ingredients</td>
                      <td className="border border-gray-300 p-2 sm:p-3">Active men</td>
                      <td className="border border-gray-300 p-2 sm:p-3">4.8/5</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-2 sm:p-3 font-medium">Garden of Life Vitamin Code</td>
                      <td className="border border-gray-300 p-2 sm:p-3">$40-50</td>
                      <td className="border border-gray-300 p-2 sm:p-3">Whole food based</td>
                      <td className="border border-gray-300 p-2 sm:p-3">Natural nutrition</td>
                      <td className="border border-gray-300 p-2 sm:p-3">4.7/5</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2 sm:p-3 font-medium">Thorne Men's Multi 50+</td>
                      <td className="border border-gray-300 p-2 sm:p-3">$50-60</td>
                      <td className="border border-gray-300 p-2 sm:p-3">Premium quality</td>
                      <td className="border border-gray-300 p-2 sm:p-3">Men over 50</td>
                      <td className="border border-gray-300 p-2 sm:p-3">4.6/5</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-2 sm:p-3 font-medium">One A Day Men's</td>
                      <td className="border border-gray-300 p-2 sm:p-3">$10-15</td>
                      <td className="border border-gray-300 p-2 sm:p-3">Budget-friendly</td>
                      <td className="border border-gray-300 p-2 sm:p-3">Value seekers</td>
                      <td className="border border-gray-300 p-2 sm:p-3">4.4/5</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2 sm:p-3 font-medium">Centrum Silver Men 50+</td>
                      <td className="border border-gray-300 p-2 sm:p-3">$12-18</td>
                      <td className="border border-gray-300 p-2 sm:p-3">Age-specific</td>
                      <td className="border border-gray-300 p-2 sm:p-3">Seniors</td>
                      <td className="border border-gray-300 p-2 sm:p-3">4.3/5</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* How to Choose Section */}
            <section className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                How to Choose the Right Multivitamin for Men
              </h2>

              <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">
                Selecting the right multivitamin depends on your age, activity level, health goals, and specific
                nutritional needs. Consider these key factors when making your decision.
              </p>

              <div className="mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  1. Consider Your Age and Life Stage
                </h3>
                <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
                  Men's nutritional needs evolve with age:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 sm:mb-6 ml-2 sm:ml-4 text-xs sm:text-sm space-y-1">
                  <li className="text-blue-600">
                    <span className="font-semibold">18-39 years:</span> Focus on energy, muscle support, and general
                    health
                  </li>
                  <li className="text-blue-600">
                    <span className="font-semibold">40-49 years:</span> Add heart health and stress management support
                  </li>
                  <li className="text-blue-600">
                    <span className="font-semibold">50+ years:</span> Emphasize prostate health, bone support, and
                    cognitive function
                  </li>
                  <li className="text-blue-600">
                    <span className="font-semibold">65+ years:</span> Higher B12, vitamin D, and digestive support
                  </li>
                </ul>
              </div>

              <div className="mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  2. Evaluate Key Nutrients for Men
                </h3>
                <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
                  Look for these essential nutrients in men's multivitamins:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 sm:mb-6 ml-2 sm:ml-4 text-xs sm:text-sm space-y-1">
                  <li className="text-green-600">
                    <span className="font-semibold">Zinc:</span> 11mg for immune function and testosterone support
                  </li>
                  <li className="text-green-600">
                    <span className="font-semibold">Magnesium:</span> 400mg for muscle and heart health
                  </li>
                  <li className="text-green-600">
                    <span className="font-semibold">Vitamin D:</span> 1000-2000 IU for bone and hormone health
                  </li>
                  <li className="text-green-600">
                    <span className="font-semibold">B-vitamins:</span> For energy metabolism and nervous system support
                  </li>
                </ul>
              </div>
            </section>

            {/* The Takeaway */}
            <section className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">The Bottom Line</h2>
              <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
                The best multivitamin for men depends on your age, activity level, and health goals. Whether you choose
                a comprehensive formula like Optimum Nutrition Opti-Men, a whole food option like Garden of Life, or a
                budget-friendly choice like One A Day, consistency is key.
              </p>
              <p className="text-sm sm:text-base text-gray-700">
                Remember that multivitamins supplement, not replace, a healthy diet and lifestyle. Consult with your
                healthcare provider before starting any new supplement regimen, especially if you have health conditions
                or take medications.
              </p>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Author Info */}
            <div className="bg-gray-50 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8">
              <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="w-6 h-6 sm:w-8 sm:h-8 text-gray-600" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm text-gray-600 mb-1">
                    <a href="#" className="text-blue-600 hover:underline">
                      Medically reviewed
                    </a>{" "}
                    by{" "}
                    <a href="#" className="text-blue-600 hover:underline font-medium">
                      Dr. Michael Thompson, MD
                    </a>
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 mb-1">
                    — Written by{" "}
                    <a href="#" className="text-blue-600 hover:underline font-medium">
                      James Wilson, Sports Nutritionist
                    </a>
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 flex items-center gap-1">
                    — <Calendar className="w-3 h-3" />
                    <a href="#" className="text-blue-600 hover:underline">
                      Updated on January 12, 2025
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-blue-50 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8">
              <div className="mb-3 sm:mb-4">
                <h3 className="text-xs sm:text-sm font-bold text-blue-800 uppercase tracking-wide mb-2">
                  MEN'S HEALTH NEWSLETTER
                </h3>
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Fitness & nutrition insights</h4>
                <p className="text-gray-700 text-xs sm:text-sm">
                  Get the latest research on men's nutrition, supplement reviews, and fitness tips delivered weekly.
                </p>
              </div>

              <form onSubmit={handleEmailSubmit} className="space-y-3 sm:space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 sm:py-3 px-3 sm:px-4 rounded-lg transition-colors duration-200 text-sm sm:text-base"
                >
                  GET INSIGHTS
                </button>
              </form>

              <p className="text-xs text-gray-600 mt-2 sm:mt-3">
                Your{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  privacy
                </a>{" "}
                is important to us
              </p>
            </div>

            {/* Current Deals */}
            <div className="bg-yellow-50 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8">
              <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">💊 Current Deals</h4>
              <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                <div className="border-l-4 border-blue-400 pl-2 sm:pl-3">
                  <p className="font-semibold">Optimum Nutrition</p>
                  <p className="text-gray-600">20% off + free shipping</p>
                </div>
                <div className="border-l-4 border-green-400 pl-2 sm:pl-3">
                  <p className="font-semibold">Garden of Life</p>
                  <p className="text-gray-600">Buy 2, get 1 free</p>
                </div>
                <div className="border-l-4 border-purple-400 pl-2 sm:pl-3">
                  <p className="font-semibold">Thorne</p>
                  <p className="text-gray-600">15% off first order</p>
                </div>
              </div>
            </div>

            {/* Quick Tips */}
            <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
              <h4 className="text-base sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">💡 Supplement Tips</h4>
              <ul className="text-gray-600 text-xs sm:text-sm space-y-1 sm:space-y-2">
                <li>• Take with breakfast for best absorption</li>
                <li>• Choose iron-free formulas for men</li>
                <li>• Look for third-party testing</li>
                <li>• Check expiration dates regularly</li>
                <li>• Consult doctor if taking medications</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
