"use client"

import { useState } from "react"
import { User, Calendar, Star, Truck, Leaf, DollarSign } from "lucide-react"

export default function VeganMealDeliveryGuide() {
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
                Best Vegan and Plant-Based Meal Delivery Services for 2025: Complete Guide & Reviews
              </h1>

              {/* Navigation Tabs */}
              <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-200">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                      activeTab === tab
                        ? "border-green-500 text-green-600"
                        : "border-transparent text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Intro Text */}
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Discover the top-rated vegan and plant-based meal delivery services that make eating healthy, delicious,
                and sustainable meals easier than ever in 2025.
              </p>

              {/* Main Image */}
              <div className="mb-8">
                <img
                  src="/vegan.avif"
                  alt="Colorful vegan meal delivery boxes with fresh plant-based dishes"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>

              {/* Article Description */}
              <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-8">
                <p className="text-gray-700">
                  <span className="text-green-600 font-medium">P</span>lant-based eating has never been more convenient
                  or delicious. With the rise of innovative vegan meal delivery services, you can enjoy chef-crafted,
                  nutritious meals delivered right to your door.
                </p>
              </div>

              <p className="text-gray-700 mb-8">
                Keep reading to discover our top picks for 2025, detailed comparisons, and everything you need to know
                to choose the perfect vegan meal delivery service for your lifestyle.
              </p>
            </div>

            {/* Why Choose Vegan Meal Delivery Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Vegan Meal Delivery in 2025?</h2>

              <p className="text-gray-700 mb-6">
                The vegan meal delivery industry has exploded in recent years, offering unprecedented convenience,
                variety, and quality for plant-based eaters. Whether you're a longtime vegan, exploring plant-based
                eating, or simply looking to add more vegetables to your diet, these services offer compelling benefits.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
                <p className="text-gray-700">
                  <span className="font-semibold">Market Growth:</span> The plant-based meal delivery market is expected
                  to grow by 15% annually through 2025, driven by increasing health consciousness and environmental
                  awareness.
                </p>
              </div>
            </section>

            {/* Top 5 Vegan Meal Delivery Services Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Top 5 Vegan Meal Delivery Services for 2025</h2>

              {/* 1. Purple Carrot */}
              <div className="mb-8 border border-gray-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">1. Purple Carrot</h3>
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="ml-2 text-sm text-gray-600">4.8/5</span>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-700">$11.99-$13.99 per serving</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Truck className="w-4 h-4 text-blue-600" />
                    <span className="text-sm text-gray-700">Nationwide delivery</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Leaf className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-700">100% plant-based</span>
                  </div>
                </div>

                <p className="text-gray-700 mb-4">
                  Purple Carrot stands out as the pioneer in plant-based meal kits, offering creative, chef-designed
                  recipes that make vegan cooking exciting and accessible. Their meals focus on whole foods and bold
                  flavors.
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">What we love:</h4>
                  <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                    <li className="text-purple-600">Innovative, chef-crafted recipes</li>
                    <li className="text-purple-600">High-quality, organic ingredients</li>
                    <li className="text-purple-600">Detailed nutritional information</li>
                    <li className="text-purple-600">Excellent customer service</li>
                    <li className="text-purple-600">Flexible subscription options</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-gray-700 text-sm">
                    <span className="font-semibold">Best for:</span> Adventurous cooks who want to explore creative
                    plant-based cuisine and don't mind spending a bit more for premium quality.
                  </p>
                </div>
              </div>

              {/* 2. Sunbasket */}
              <div className="mb-8 border border-gray-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">2. Sunbasket</h3>
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
                    <span className="text-sm text-gray-700">$10.99-$16.99 per serving</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Truck className="w-4 h-4 text-blue-600" />
                    <span className="text-sm text-gray-700">Most US states</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Leaf className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-700">Vegetarian & vegan options</span>
                  </div>
                </div>

                <p className="text-gray-700 mb-4">
                  Sunbasket offers a robust selection of plant-based meals alongside other dietary options. Their focus
                  on organic, sustainably sourced ingredients and dietitian-approved recipes makes them a top choice for
                  health-conscious consumers.
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">What we love:</h4>
                  <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                    <li className="text-orange-600">Extensive organic ingredient selection</li>
                    <li className="text-orange-600">Dietitian-approved nutritional profiles</li>
                    <li className="text-orange-600">Ready-to-eat meal options available</li>
                    <li className="text-orange-600">Accommodates multiple dietary preferences</li>
                    <li className="text-orange-600">Sustainable packaging initiatives</li>
                  </ul>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="text-gray-700 text-sm">
                    <span className="font-semibold">Best for:</span> Health-focused individuals who want organic,
                    nutritionally balanced meals with the flexibility to include non-vegan family members.
                  </p>
                </div>
              </div>

              {/* 3. Green Chef */}
              <div className="mb-8 border border-gray-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">3. Green Chef</h3>
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
                    <span className="text-sm text-gray-700">$12.99-$14.99 per serving</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Truck className="w-4 h-4 text-blue-600" />
                    <span className="text-sm text-gray-700">48 states</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Leaf className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-700">USDA Certified Organic</span>
                  </div>
                </div>

                <p className="text-gray-700 mb-4">
                  Green Chef is the only USDA Certified Organic meal kit company, making it an excellent choice for
                  those who prioritize organic ingredients. Their plant-powered meal plans are designed by nutritionists
                  and focus on whole foods.
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">What we love:</h4>
                  <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                    <li className="text-green-600">USDA Certified Organic ingredients</li>
                    <li className="text-green-600">Nutritionist-designed meal plans</li>
                    <li className="text-green-600">Pre-prepped ingredients save time</li>
                    <li className="text-green-600">Keto and paleo plant-based options</li>
                    <li className="text-green-600">Recyclable packaging</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-gray-700 text-sm">
                    <span className="font-semibold">Best for:</span> Busy professionals who want certified organic,
                    nutritionist-approved meals with minimal prep time.
                  </p>
                </div>
              </div>

              {/* 4. Mosaic Foods */}
              <div className="mb-8 border border-gray-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">4. Mosaic Foods</h3>
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
                    <span className="text-sm text-gray-700">$8.99-$11.99 per serving</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Truck className="w-4 h-4 text-blue-600" />
                    <span className="text-sm text-gray-700">Northeast & California</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Leaf className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-700">Plant-forward frozen meals</span>
                  </div>
                </div>

                <p className="text-gray-700 mb-4">
                  Mosaic Foods specializes in frozen, plant-forward meals that are ready in minutes. Their focus on
                  vegetables as the star ingredient and affordable pricing makes healthy eating accessible to everyone.
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">What we love:</h4>
                  <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                    <li className="text-blue-600">Most affordable option</li>
                    <li className="text-blue-600">Ready in 3-5 minutes</li>
                    <li className="text-blue-600">Vegetables are the main ingredient</li>
                    <li className="text-blue-600">No subscription required</li>
                    <li className="text-blue-600">Portion-controlled for weight management</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-gray-700 text-sm">
                    <span className="font-semibold">Best for:</span> Budget-conscious consumers who want quick,
                    vegetable-rich meals without the commitment of a subscription.
                  </p>
                </div>
              </div>

              {/* 5. Veestro */}
              <div className="mb-8 border border-gray-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">5. Veestro</h3>
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <Star className="w-5 h-5 text-gray-300" />
                    <span className="ml-2 text-sm text-gray-600">4.3/5</span>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-700">$9.90-$13.95 per serving</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Truck className="w-4 h-4 text-blue-600" />
                    <span className="text-sm text-gray-700">Nationwide delivery</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Leaf className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-700">100% plant-based, chef-prepared</span>
                  </div>
                </div>

                <p className="text-gray-700 mb-4">
                  Veestro offers fully prepared, frozen vegan meals created by professional chefs. Their extensive menu
                  includes everything from comfort food classics to gourmet international cuisine, all 100% plant-based.
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">What we love:</h4>
                  <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                    <li className="text-indigo-600">Largest selection of ready-made vegan meals</li>
                    <li className="text-indigo-600">Chef-prepared gourmet quality</li>
                    <li className="text-indigo-600">A la carte ordering available</li>
                    <li className="text-indigo-600">Comfort food and international options</li>
                    <li className="text-indigo-600">Meal plans for specific goals (weight loss, muscle gain)</li>
                  </ul>
                </div>

                <div className="bg-indigo-50 p-4 rounded-lg">
                  <p className="text-gray-700 text-sm">
                    <span className="font-semibold">Best for:</span> Busy vegans who want restaurant-quality meals at
                    home with maximum convenience and variety.
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
                      <th className="border border-gray-300 p-3 text-left font-semibold">Service</th>
                      <th className="border border-gray-300 p-3 text-left font-semibold">Price Range</th>
                      <th className="border border-gray-300 p-3 text-left font-semibold">Meal Type</th>
                      <th className="border border-gray-300 p-3 text-left font-semibold">Best Feature</th>
                      <th className="border border-gray-300 p-3 text-left font-semibold">Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">Purple Carrot</td>
                      <td className="border border-gray-300 p-3">$11.99-$13.99</td>
                      <td className="border border-gray-300 p-3">Meal kits</td>
                      <td className="border border-gray-300 p-3">Creative recipes</td>
                      <td className="border border-gray-300 p-3">4.8/5</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3 font-medium">Sunbasket</td>
                      <td className="border border-gray-300 p-3">$10.99-$16.99</td>
                      <td className="border border-gray-300 p-3">Meal kits + ready meals</td>
                      <td className="border border-gray-300 p-3">Organic ingredients</td>
                      <td className="border border-gray-300 p-3">4.6/5</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">Green Chef</td>
                      <td className="border border-gray-300 p-3">$12.99-$14.99</td>
                      <td className="border border-gray-300 p-3">Meal kits</td>
                      <td className="border border-gray-300 p-3">USDA Organic certified</td>
                      <td className="border border-gray-300 p-3">4.5/5</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3 font-medium">Mosaic Foods</td>
                      <td className="border border-gray-300 p-3">$8.99-$11.99</td>
                      <td className="border border-gray-300 p-3">Frozen ready meals</td>
                      <td className="border border-gray-300 p-3">Most affordable</td>
                      <td className="border border-gray-300 p-3">4.4/5</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">Veestro</td>
                      <td className="border border-gray-300 p-3">$9.90-$13.95</td>
                      <td className="border border-gray-300 p-3">Frozen ready meals</td>
                      <td className="border border-gray-300 p-3">Largest vegan selection</td>
                      <td className="border border-gray-300 p-3">4.3/5</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* How to Choose Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                How to Choose the Right Vegan Meal Delivery Service
              </h2>

              <p className="text-gray-700 mb-6">
                With so many excellent options available, choosing the right vegan meal delivery service depends on your
                specific needs, preferences, and lifestyle. Consider these key factors when making your decision.
              </p>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Determine Your Meal Preferences</h3>
                <p className="text-gray-700 mb-4">
                  Do you enjoy cooking and want to learn new recipes, or do you prefer ready-to-eat convenience?
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4">
                  <li className="text-green-600">
                    <span className="font-semibold">Meal kits:</span> Purple Carrot, Sunbasket, Green Chef
                  </li>
                  <li className="text-green-600">
                    <span className="font-semibold">Ready meals:</span> Mosaic Foods, Veestro
                  </li>
                  <li className="text-green-600">
                    <span className="font-semibold">Both options:</span> Sunbasket
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Consider Your Budget</h3>
                <p className="text-gray-700 mb-4">
                  Vegan meal delivery services range from budget-friendly to premium pricing:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4">
                  <li className="text-blue-600">
                    <span className="font-semibold">Budget-friendly:</span> Mosaic Foods ($8.99-$11.99)
                  </li>
                  <li className="text-blue-600">
                    <span className="font-semibold">Mid-range:</span> Veestro, Sunbasket ($9.90-$16.99)
                  </li>
                  <li className="text-blue-600">
                    <span className="font-semibold">Premium:</span> Purple Carrot, Green Chef ($11.99-$14.99)
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Evaluate Dietary Requirements</h3>
                <p className="text-gray-700 mb-4">Consider any specific dietary needs or preferences:</p>
                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4">
                  <li className="text-purple-600">
                    <span className="font-semibold">Organic focus:</span> Green Chef (USDA certified), Sunbasket
                  </li>
                  <li className="text-purple-600">
                    <span className="font-semibold">Gluten-free options:</span> Most services offer GF meals
                  </li>
                  <li className="text-purple-600">
                    <span className="font-semibold">Low-calorie/weight management:</span> Mosaic Foods, Veestro
                  </li>
                  <li className="text-purple-600">
                    <span className="font-semibold">High-protein:</span> Veestro, Purple Carrot
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">4. Check Delivery Areas</h3>
                <p className="text-gray-700 mb-4">Make sure your chosen service delivers to your location:</p>
                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4">
                  <li className="text-orange-600">
                    <span className="font-semibold">Nationwide:</span> Purple Carrot, Veestro
                  </li>
                  <li className="text-orange-600">
                    <span className="font-semibold">Most states:</span> Sunbasket (most US), Green Chef (48 states)
                  </li>
                  <li className="text-orange-600">
                    <span className="font-semibold">Limited areas:</span> Mosaic Foods (Northeast & California)
                  </li>
                </ul>
              </div>
            </section>

            {/* Benefits of Vegan Meal Delivery */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefits of Vegan Meal Delivery Services</h2>
              <p className="text-gray-700 mb-4">
                Vegan meal delivery services offer numerous advantages beyond just convenience. They're transforming how
                people approach plant-based eating and making healthy, sustainable choices more accessible than ever.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Health Benefits</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Nutritionally balanced meals</li>
                    <li>• Portion-controlled servings</li>
                    <li>• Increased vegetable intake</li>
                    <li>• Reduced processed food consumption</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Environmental Impact</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Lower carbon footprint</li>
                    <li>• Reduced water usage</li>
                    <li>• Sustainable packaging options</li>
                    <li>• Support for eco-friendly farming</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* The Takeaway */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">The Bottom Line</h2>
              <p className="text-gray-700 mb-4">
                The best vegan meal delivery service for you depends on your lifestyle, budget, and food preferences.
                Whether you're looking for creative cooking experiences with Purple Carrot, organic convenience with
                Green Chef, or budget-friendly ready meals with Mosaic Foods, there's a service that fits your needs.
              </p>
              <p className="text-gray-700">
                Start with a trial week or smaller order to test the service before committing to a long-term
                subscription. Most services offer promotions for new customers, making it affordable to try multiple
                options and find your perfect match.
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
                      Reviewed
                    </a>{" "}
                    by{" "}
                    <a href="#" className="text-blue-600 hover:underline font-medium">
                      Chef Maria Rodriguez, RD
                    </a>
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    — Written by{" "}
                    <a href="#" className="text-blue-600 hover:underline font-medium">
                      David Kim, Food Writer
                    </a>
                  </p>
                  <p className="text-sm text-gray-600 flex items-center gap-1">
                    — <Calendar className="w-3 h-3" />
                    <a href="#" className="text-blue-600 hover:underline">
                      Updated on January 8, 2025
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-green-50 rounded-lg p-6 mb-8">
              <div className="mb-4">
                <h3 className="text-sm font-bold text-green-800 uppercase tracking-wide mb-2">VEGAN FOOD NEWSLETTER</h3>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Plant-based meal deals & reviews</h4>
                <p className="text-gray-700 text-sm">
                  Get the latest vegan meal delivery reviews, exclusive discount codes, and plant-based nutrition tips.
                </p>
              </div>

              <form onSubmit={handleEmailSubmit} className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200"
                >
                  GET DEALS
                </button>
              </form>

              <p className="text-xs text-gray-600 mt-3">
                Your{" "}
                <a href="#" className="text-green-600 hover:underline">
                  privacy
                </a>{" "}
                is important to us
              </p>
            </div>

            {/* Current Promotions */}
            <div className="bg-yellow-50 rounded-lg p-6 mb-8">
              <h4 className="text-lg font-bold text-gray-900 mb-3">🎉 Current Promotions</h4>
              <div className="space-y-3 text-sm">
                <div className="border-l-4 border-purple-400 pl-3">
                  <p className="font-semibold">Purple Carrot</p>
                  <p className="text-gray-600">$30 off first 3 boxes</p>
                </div>
                <div className="border-l-4 border-orange-400 pl-3">
                  <p className="font-semibold">Sunbasket</p>
                  <p className="text-gray-600">$90 off + free shipping</p>
                </div>
                <div className="border-l-4 border-green-400 pl-3">
                  <p className="font-semibold">Green Chef</p>
                  <p className="text-gray-600">60% off first box</p>
                </div>
              </div>
            </div>

            {/* Quick Tips */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="text-xl font-bold text-gray-900 mb-4">💡 Money-Saving Tips</h4>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Start with promotional offers</li>
                <li>• Skip weeks when traveling</li>
                <li>• Share family plans with roommates</li>
                <li>• Compare per-serving costs</li>
                <li>• Cancel before auto-renewal</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
