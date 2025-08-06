"use client"

import { useState } from "react"
import { User, Calendar, Star, Shield, Heart, DollarSign } from "lucide-react"

export default function WomensMultivitaminGuide() {
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
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header Section */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Best Multivitamins for Women in 2025: Complete Guide & Expert Reviews
              </h1>

              {/* Navigation Tabs */}
              <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-200">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                      activeTab === tab
                        ? "border-pink-500 text-pink-600"
                        : "border-transparent text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Intro Text */}
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Discover the top-rated multivitamins specifically formulated for women's unique nutritional needs,
                backed by scientific research and expert recommendations for optimal health and wellness.
              </p>

              {/* Main Image */}
              <div className="mb-8">
                <img
                  src="/Best-Multivitamin-for-Women.webp"
                  alt="Various women's multivitamin bottles and supplements arranged with fresh fruits and vegetables"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>

              {/* Article Description */}
              <div className="bg-pink-50 border-l-4 border-pink-400 p-4 mb-8">
                <p className="text-gray-700">
                  <span className="text-pink-600 font-medium">W</span>omen have unique nutritional needs that change
                  throughout different life stages. The right multivitamin can help bridge nutritional gaps and support
                  overall health, energy, and well-being.
                </p>
              </div>

              <p className="text-gray-700 mb-8">
                Keep reading to discover our top picks for 2025, detailed comparisons, and everything you need to know
                to choose the perfect multivitamin for your specific needs and life stage.
              </p>
            </div>

            {/* Why Women Need Multivitamins Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Women Need Specialized Multivitamins</h2>

              <p className="text-gray-700 mb-6">
                Women's nutritional needs differ significantly from men's due to hormonal fluctuations, menstruation,
                pregnancy, breastfeeding, and menopause. A quality women's multivitamin addresses these specific
                requirements with targeted nutrient profiles.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
                <p className="text-gray-700">
                  <span className="font-semibold">Key Fact:</span> Studies show that 90% of women don't get enough of at
                  least one essential nutrient from diet alone, making supplementation crucial for optimal health.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-pink-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Essential Nutrients for Women</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Iron (for menstruation and energy)</li>
                    <li>• Folate (for reproductive health)</li>
                    <li>• Calcium & Vitamin D (for bone health)</li>
                    <li>• B-vitamins (for energy and mood)</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Life Stage Considerations</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Reproductive years: Iron, folate</li>
                    <li>• Pregnancy: Prenatal formulations</li>
                    <li>• Menopause: Calcium, vitamin D</li>
                    <li>• 50+: B12, bone support nutrients</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Top 5 Women's Multivitamins Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Top 5 Multivitamins for Women in 2025</h2>

              {/* 1. Garden of Life Vitamin Code Women */}
              <div className="mb-8 border border-gray-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">1. Garden of Life Vitamin Code Women</h3>
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="ml-2 text-sm text-gray-600">4.9/5</span>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-700">$35-45 per bottle</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-blue-600" />
                    <span className="text-sm text-gray-700">Third-party tested</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-pink-600" />
                    <span className="text-sm text-gray-700">Whole food based</span>
                  </div>
                </div>

                <p className="text-gray-700 mb-4">
                  Garden of Life's Vitamin Code Women stands out as our top pick for its whole food-based formula that
                  includes raw vitamins and minerals. It's specifically designed to support women's unique nutritional
                  needs with targeted nutrients for energy, metabolism, and reproductive health.
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">What we love:</h4>
                  <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                    <li className="text-purple-600">Raw, whole food vitamins and minerals</li>
                    <li className="text-purple-600">Includes probiotics and enzymes</li>
                    <li className="text-purple-600">Iron from whole food sources</li>
                    <li className="text-purple-600">No synthetic binders or fillers</li>
                    <li className="text-purple-600">Vegetarian and gluten-free</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-gray-700 text-sm">
                    <span className="font-semibold">Best for:</span> Women seeking a premium, whole food-based
                    multivitamin with comprehensive nutritional support and digestive benefits.
                  </p>
                </div>
              </div>

              {/* 2. Ritual Essential for Women */}
              <div className="mb-8 border border-gray-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">2. Ritual Essential for Women</h3>
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <Star className="w-5 h-5 text-gray-300" />
                    <span className="ml-2 text-sm text-gray-600">4.7/5</span>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-700">$33 per month</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-blue-600" />
                    <span className="text-sm text-gray-700">Traceable ingredients</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-pink-600" />
                    <span className="text-sm text-gray-700">Subscription service</span>
                  </div>
                </div>

                <p className="text-gray-700 mb-4">
                  Ritual takes a minimalist approach with just 9 essential nutrients that women commonly lack. Their
                  transparent sourcing and delayed-release capsules ensure optimal absorption while reducing stomach
                  upset.
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">What we love:</h4>
                  <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                    <li className="text-orange-600">Transparent ingredient sourcing</li>
                    <li className="text-orange-600">Delayed-release capsules</li>
                    <li className="text-orange-600">No artificial colors or synthetic fillers</li>
                    <li className="text-orange-600">Convenient subscription model</li>
                    <li className="text-orange-600">Minty essence to reduce nausea</li>
                  </ul>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="text-gray-700 text-sm">
                    <span className="font-semibold">Best for:</span> Women who prefer a simplified, science-backed
                    approach with transparent sourcing and convenient delivery.
                  </p>
                </div>
              </div>

              {/* 3. New Chapter Every Woman's One Daily */}
              <div className="mb-8 border border-gray-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">3. New Chapter Every Woman's One Daily</h3>
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <Star className="w-5 h-5 text-gray-300" />
                    <span className="ml-2 text-sm text-gray-600">4.6/5</span>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-700">$25-35 per bottle</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-blue-600" />
                    <span className="text-sm text-gray-700">Organic & Non-GMO</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-pink-600" />
                    <span className="text-sm text-gray-700">One tablet daily</span>
                  </div>
                </div>

                <p className="text-gray-700 mb-4">
                  New Chapter's fermented multivitamin is gentle on the stomach and can be taken on an empty stomach.
                  The fermentation process enhances nutrient absorption and includes beneficial herbs for women's
                  wellness.
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">What we love:</h4>
                  <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                    <li className="text-green-600">Fermented for better absorption</li>
                    <li className="text-green-600">Can be taken on empty stomach</li>
                    <li className="text-green-600">Includes organic herbs and superfoods</li>
                    <li className="text-green-600">One tablet convenience</li>
                    <li className="text-green-600">Certified organic and non-GMO</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-gray-700 text-sm">
                    <span className="font-semibold">Best for:</span> Women with sensitive stomachs who want organic,
                    fermented nutrients with the convenience of once-daily dosing.
                  </p>
                </div>
              </div>

              {/* 4. Nature Made Multi for Her */}
              <div className="mb-8 border border-gray-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">4. Nature Made Multi for Her</h3>
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <Star className="w-5 h-5 text-gray-300" />
                    <span className="ml-2 text-sm text-gray-600">4.5/5</span>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-700">$12-18 per bottle</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-blue-600" />
                    <span className="text-sm text-gray-700">USP Verified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-pink-600" />
                    <span className="text-sm text-gray-700">Budget-friendly</span>
                  </div>
                </div>

                <p className="text-gray-700 mb-4">
                  Nature Made offers excellent value with USP verification, ensuring purity and potency. This
                  budget-friendly option provides essential nutrients without breaking the bank, making it accessible
                  for daily use.
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">What we love:</h4>
                  <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                    <li className="text-blue-600">USP verified for quality assurance</li>
                    <li className="text-blue-600">Excellent value for money</li>
                    <li className="text-blue-600">Widely available in stores</li>
                    <li className="text-blue-600">No artificial flavors or preservatives</li>
                    <li className="text-blue-600">Gluten-free formulation</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-gray-700 text-sm">
                    <span className="font-semibold">Best for:</span> Budget-conscious women who want a reliable,
                    third-party verified multivitamin with proven quality standards.
                  </p>
                </div>
              </div>

              {/* 5. Thorne Women's Multi 50+ */}
              <div className="mb-8 border border-gray-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">5. Thorne Women's Multi 50+</h3>
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <Star className="w-5 h-5 text-gray-300" />
                    <span className="ml-2 text-sm text-gray-600">4.4/5</span>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-700">$45-55 per bottle</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-blue-600" />
                    <span className="text-sm text-gray-700">NSF Certified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-pink-600" />
                    <span className="text-sm text-gray-700">Age-specific formula</span>
                  </div>
                </div>

                <p className="text-gray-700 mb-4">
                  Thorne's Women's Multi 50+ is specifically formulated for women over 50, addressing the unique
                  nutritional needs of menopause and beyond. It includes higher levels of vitamin D, B12, and bone
                  support nutrients.
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">What we love:</h4>
                  <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                    <li className="text-indigo-600">Age-specific nutrient profile</li>
                    <li className="text-indigo-600">Higher vitamin D and B12 levels</li>
                    <li className="text-indigo-600">Bone health support</li>
                    <li className="text-indigo-600">NSF certified for sport</li>
                    <li className="text-indigo-600">No unnecessary additives</li>
                  </ul>
                </div>

                <div className="bg-indigo-50 p-4 rounded-lg">
                  <p className="text-gray-700 text-sm">
                    <span className="font-semibold">Best for:</span> Women over 50 who need targeted nutritional support
                    for menopause, bone health, and age-related nutritional changes.
                  </p>
                </div>
              </div>
            </section>

            {/* Comparison Table Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Quick Comparison Table</h2>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 p-3 text-left font-semibold">Product</th>
                      <th className="border border-gray-300 p-3 text-left font-semibold">Price Range</th>
                      <th className="border border-gray-300 p-3 text-left font-semibold">Key Feature</th>
                      <th className="border border-gray-300 p-3 text-left font-semibold">Best For</th>
                      <th className="border border-gray-300 p-3 text-left font-semibold">Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">Garden of Life Vitamin Code</td>
                      <td className="border border-gray-300 p-3">$35-45</td>
                      <td className="border border-gray-300 p-3">Whole food based</td>
                      <td className="border border-gray-300 p-3">Premium nutrition</td>
                      <td className="border border-gray-300 p-3">4.9/5</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3 font-medium">Ritual Essential</td>
                      <td className="border border-gray-300 p-3">$33/month</td>
                      <td className="border border-gray-300 p-3">Transparent sourcing</td>
                      <td className="border border-gray-300 p-3">Minimalist approach</td>
                      <td className="border border-gray-300 p-3">4.7/5</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">New Chapter One Daily</td>
                      <td className="border border-gray-300 p-3">$25-35</td>
                      <td className="border border-gray-300 p-3">Fermented nutrients</td>
                      <td className="border border-gray-300 p-3">Sensitive stomachs</td>
                      <td className="border border-gray-300 p-3">4.6/5</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3 font-medium">Nature Made Multi</td>
                      <td className="border border-gray-300 p-3">$12-18</td>
                      <td className="border border-gray-300 p-3">USP verified</td>
                      <td className="border border-gray-300 p-3">Budget-friendly</td>
                      <td className="border border-gray-300 p-3">4.5/5</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">Thorne Women's 50+</td>
                      <td className="border border-gray-300 p-3">$45-55</td>
                      <td className="border border-gray-300 p-3">Age-specific</td>
                      <td className="border border-gray-300 p-3">Women over 50</td>
                      <td className="border border-gray-300 p-3">4.4/5</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* How to Choose Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Choose the Right Multivitamin for Women</h2>

              <p className="text-gray-700 mb-6">
                Selecting the right multivitamin depends on your age, health goals, dietary restrictions, and specific
                nutritional needs. Consider these key factors when making your decision.
              </p>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Consider Your Life Stage</h3>
                <p className="text-gray-700 mb-4">Women's nutritional needs change throughout different life stages:</p>
                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4">
                  <li className="text-pink-600">
                    <span className="font-semibold">Reproductive years (18-40):</span> Focus on iron, folate, and B
                    vitamins
                  </li>
                  <li className="text-pink-600">
                    <span className="font-semibold">Pregnancy/Breastfeeding:</span> Switch to prenatal vitamins
                  </li>
                  <li className="text-pink-600">
                    <span className="font-semibold">Perimenopause/Menopause (40-55):</span> Emphasize calcium, vitamin D
                  </li>
                  <li className="text-pink-600">
                    <span className="font-semibold">50+ years:</span> Higher B12, vitamin D, and bone support nutrients
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Evaluate Key Nutrients</h3>
                <p className="text-gray-700 mb-4">Look for these essential nutrients in women's multivitamins:</p>
                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4">
                  <li className="text-blue-600">
                    <span className="font-semibold">Iron:</span> 18mg for premenopausal women (8mg for postmenopausal)
                  </li>
                  <li className="text-blue-600">
                    <span className="font-semibold">Folate:</span> 400-800mcg for reproductive health
                  </li>
                  <li className="text-blue-600">
                    <span className="font-semibold">Calcium:</span> 1000-1200mg for bone health
                  </li>
                  <li className="text-blue-600">
                    <span className="font-semibold">Vitamin D:</span> 600-800 IU for calcium absorption
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Check for Quality Certifications</h3>
                <p className="text-gray-700 mb-4">Look for third-party testing and certifications:</p>
                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4">
                  <li className="text-purple-600">
                    <span className="font-semibold">USP Verified:</span> Ensures purity, potency, and quality
                  </li>
                  <li className="text-purple-600">
                    <span className="font-semibold">NSF Certified:</span> Independent testing for safety and quality
                  </li>
                  <li className="text-purple-600">
                    <span className="font-semibold">Non-GMO Project:</span> Verified non-genetically modified
                  </li>
                  <li className="text-purple-600">
                    <span className="font-semibold">Organic certification:</span> USDA organic standards
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">4. Consider Your Budget</h3>
                <p className="text-gray-700 mb-4">Multivitamins range from budget-friendly to premium options:</p>
                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4">
                  <li className="text-orange-600">
                    <span className="font-semibold">Budget ($10-20):</span> Nature Made, One A Day
                  </li>
                  <li className="text-orange-600">
                    <span className="font-semibold">Mid-range ($25-40):</span> New Chapter, Rainbow Light
                  </li>
                  <li className="text-orange-600">
                    <span className="font-semibold">Premium ($40+):</span> Garden of Life, Thorne, Ritual
                  </li>
                </ul>
              </div>
            </section>

            {/* Benefits of Women's Multivitamins */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefits of Women's Multivitamins</h2>
              <p className="text-gray-700 mb-4">
                Quality women's multivitamins can help bridge nutritional gaps and support overall health when combined
                with a balanced diet and healthy lifestyle.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-pink-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Physical Health Benefits</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Supports energy metabolism</li>
                    <li>• Promotes bone health</li>
                    <li>• Supports immune function</li>
                    <li>• Aids in red blood cell formation</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Women-Specific Support</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Reproductive health support</li>
                    <li>• Hormonal balance assistance</li>
                    <li>• Prenatal nutrition preparation</li>
                    <li>• Menopause symptom support</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* The Takeaway */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">The Bottom Line</h2>
              <p className="text-gray-700 mb-4">
                The best multivitamin for women depends on your individual needs, life stage, and health goals. Whether
                you choose a premium whole food option like Garden of Life, a transparent subscription service like
                Ritual, or a budget-friendly verified option like Nature Made, consistency is key.
              </p>
              <p className="text-gray-700">
                Remember that multivitamins supplement, not replace, a healthy diet. Consult with your healthcare
                provider before starting any new supplement regimen, especially if you have health conditions or take
                medications.
              </p>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
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
                    <a href="#" className="text-blue-600 hover:underline font-medium">
                      Dr. Sarah Johnson, MD, RD
                    </a>
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    — Written by{" "}
                    <a href="#" className="text-blue-600 hover:underline font-medium">
                      Lisa Chen, Nutrition Writer
                    </a>
                  </p>
                  <p className="text-sm text-gray-600 flex items-center gap-1">
                    — <Calendar className="w-3 h-3" />
                    <a href="#" className="text-blue-600 hover:underline">
                      Updated on January 10, 2025
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-pink-50 rounded-lg p-6 mb-8">
              <div className="mb-4">
                <h3 className="text-sm font-bold text-pink-800 uppercase tracking-wide mb-2">
                  WOMEN'S HEALTH NEWSLETTER
                </h3>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Expert nutrition & wellness tips</h4>
                <p className="text-gray-700 text-sm">
                  Get the latest research on women's nutrition, supplement reviews, and health tips delivered weekly.
                </p>
              </div>

              <form onSubmit={handleEmailSubmit} className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200"
                >
                  GET TIPS
                </button>
              </form>

              <p className="text-xs text-gray-600 mt-3">
                Your{" "}
                <a href="#" className="text-pink-600 hover:underline">
                  privacy
                </a>{" "}
                is important to us
              </p>
            </div>

            {/* Current Deals */}
            <div className="bg-yellow-50 rounded-lg p-6 mb-8">
              <h4 className="text-lg font-bold text-gray-900 mb-3">💊 Current Deals</h4>
              <div className="space-y-3 text-sm">
                <div className="border-l-4 border-purple-400 pl-3">
                  <p className="font-semibold">Garden of Life</p>
                  <p className="text-gray-600">25% off first order</p>
                </div>
                <div className="border-l-4 border-orange-400 pl-3">
                  <p className="font-semibold">Ritual</p>
                  <p className="text-gray-600">First month for $5</p>
                </div>
                <div className="border-l-4 border-green-400 pl-3">
                  <p className="font-semibold">New Chapter</p>
                  <p className="text-gray-600">Buy 2, get 1 free</p>
                </div>
              </div>
            </div>

            {/* Quick Tips */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="text-xl font-bold text-gray-900 mb-4">💡 Supplement Tips</h4>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Take with food to reduce nausea</li>
                <li>• Don't exceed recommended dosages</li>
                <li>• Store in cool, dry place</li>
                <li>• Check expiration dates regularly</li>
                <li>• Consult doctor before starting</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
