"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Heart, Leaf, Carrot, Apple, Salad } from "lucide-react"

export default function VegetableHeartHealthGuide() {
  const [email, setEmail] = useState("")
  const [activeTab, setActiveTab] = useState("Benefits")

  const handleEmailSubmit = (e) => {
    e.preventDefault()
    console.log("Email submitted:", email)
    setEmail("")
  }

    useEffect(() => {
      // Scroll to top when the component mounts
      window.scrollTo(0, 0)
    }, [])

  const tabs = ["Benefits", "Vegetable Types", "Recipes", "Meal Planning"]

  return (
    <div className="min-h-screen bg-white pt-20 md:pt-32">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header Section */}
            <div className="mb-8">
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <Heart className="w-4 h-4 mr-1 text-red-500" />
                <span>Cardiovascular Health</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                How to Eat More Vegetables for a Healthy Heart
              </h1>

              {/* Navigation Tabs */}
              <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-200">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                      activeTab === tab
                        ? "border-green-600 text-green-700"
                        : "border-transparent text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Intro Text */}
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Increasing your vegetable intake is one of the most effective ways to improve heart health. Vegetables are packed with fiber, antioxidants, and heart-healthy nutrients that can lower blood pressure, reduce cholesterol, and decrease inflammation.
              </p>

              {/* Main Image */}
              <div className="mb-8">
                <img
                  src="/man-tossing-salad-lettuce-spinach-green-vegetables-732x549-thumbnail (1).jpg"
                  alt="Man preparing a fresh vegetable salad with leafy greens"
                  className="w-full h-auto rounded-lg shadow-lg object-cover"
                  style={{ maxHeight: '500px' }}
                />
                <p className="text-sm text-gray-500 mt-2">Fresh vegetables are the cornerstone of heart-healthy eating</p>
              </div>

              {/* Article Description */}
              <div className="bg-green-50 border-l-4 border-green-600 p-4 mb-8">
                <p className="text-gray-700">
                  <span className="text-green-600 font-medium">Key Fact:</span> Studies show that people who eat at least 5 servings of vegetables daily have a <strong>20% lower risk</strong> of heart disease compared to those who eat fewer than 2 servings.
                </p>
              </div>

              <p className="text-gray-700 mb-8">
                This comprehensive guide will explore the science behind vegetables and heart health, provide practical tips for increasing your intake, and share delicious recipes to make vegetables the star of your meals.
              </p>
            </div>

            {/* Cardiovascular Benefits Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <Heart className="w-8 h-8 text-red-500 mr-2" />
                Cardiovascular Benefits of Vegetables
              </h2>

              {/* 1. Lower Blood Pressure */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Naturally Lower Blood Pressure</h3>
                <p className="text-gray-700 mb-4">
                  Vegetables are rich in potassium, magnesium, and fiber—three nutrients that play a crucial role in regulating blood pressure. A <a href="#" className="text-blue-600 hover:underline">2023 meta-analysis</a> found that:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                  <li>Each additional serving of leafy greens per day was associated with a <strong>2.5 mmHg reduction</strong> in systolic blood pressure</li>
                  <li>People consuming 4+ servings of cruciferous vegetables weekly had <strong>15% lower risk</strong> of hypertension</li>
                </ul>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <h4 className="font-bold text-gray-800 mb-2">Best Vegetables for Blood Pressure:</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm flex items-center">
                      <Leaf className="w-3 h-3 mr-1" /> Spinach
                    </span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm flex items-center">
                      <Carrot className="w-3 h-3 mr-1" /> Carrots
                    </span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm flex items-center">
                      <Salad className="w-3 h-3 mr-1" /> Kale
                    </span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm flex items-center">
                      <Apple className="w-3 h-3 mr-1" /> Beets
                    </span>
                  </div>
                </div>
              </div>

              {/* 2. Reduce Cholesterol */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Help Reduce Cholesterol Levels</h3>
                <p className="text-gray-700 mb-4">
                  The soluble fiber in vegetables binds to cholesterol in the digestive system, helping to remove it from the body. Research shows:
                </p>
                <div className="overflow-x-auto mb-4">
                  <table className="min-w-full bg-white border border-gray-200">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="py-2 px-4 border-b text-left">Vegetable Type</th>
                        <th className="py-2 px-4 border-b text-left">Fiber Content (per cup)</th>
                        <th className="py-2 px-4 border-b text-left">LDL Reduction Potential</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-2 px-4 border-b">Brussels Sprouts</td>
                        <td className="py-2 px-4 border-b">4.1g</td>
                        <td className="py-2 px-4 border-b">5-8%</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="py-2 px-4 border-b">Okra</td>
                        <td className="py-2 px-4 border-b">3.2g</td>
                        <td className="py-2 px-4 border-b">4-7%</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b">Eggplant</td>
                        <td className="py-2 px-4 border-b">2.5g</td>
                        <td className="py-2 px-4 border-b">3-5%</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="py-2 px-4 border-b">Carrots</td>
                        <td className="py-2 px-4 border-b">3.6g</td>
                        <td className="py-2 px-4 border-b">4-6%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-gray-700">
                  A <a href="#" className="text-blue-600 hover:underline">study published in Nutrition Reviews</a> found that increasing vegetable fiber intake by just 10g per day could lower LDL ("bad") cholesterol by approximately 5%.
                </p>
              </div>

              {/* 3. Anti-Inflammatory Effects */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Powerful Anti-Inflammatory Effects</h3>
                <p className="text-gray-700 mb-4">
                  Chronic inflammation is a key driver of heart disease. Vegetables contain antioxidants and phytochemicals that combat inflammation:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-bold text-purple-800 mb-2">Anthocyanins</h4>
                    <p className="text-gray-700 text-sm">Found in purple cabbage, eggplant, and red onions. Can reduce inflammatory markers like CRP by up to 25%.</p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-bold text-orange-800 mb-2">Carotenoids</h4>
                    <p className="text-gray-700 text-sm">Abundant in carrots, sweet potatoes, and bell peppers. Associated with 18% lower risk of coronary artery disease.</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  A <a href="#" className="text-blue-600 hover:underline">2024 study in the Journal of the American College of Cardiology</a> found that participants with the highest intake of colorful vegetables had significantly lower levels of inflammatory markers associated with heart disease.
                </p>
              </div>
            </section>

            {/* Vegetable Types Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <Leaf className="w-8 h-8 text-green-600 mr-2" />
                Heart-Healthy Vegetable Types
              </h2>

              {/* Leafy Greens */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Leafy Greens: The Heart's Best Friend</h3>
                <p className="text-gray-700 mb-4">
                  Dark leafy greens are nutritional powerhouses for cardiovascular health. They're particularly rich in:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                  <li><strong>Vitamin K</strong> - Helps prevent arterial calcification</li>
                  <li><strong>Nitrates</strong> - Convert to nitric oxide which improves blood flow</li>
                  <li><strong>Folate</strong> - Helps lower homocysteine levels linked to heart disease</li>
                </ul>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <h4 className="font-bold text-gray-800 mb-2">Leafy Green Comparison (per 100g raw)</h4>
                  <div className="overflow-x-auto">
                    <table className="min-w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-2 px-4">Vegetable</th>
                          <th className="text-left py-2 px-4">Vitamin K (mcg)</th>
                          <th className="text-left py-2 px-4">Nitrates (mg)</th>
                          <th className="text-left py-2 px-4">Folate (mcg)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="py-2 px-4">Kale</td>
                          <td className="py-2 px-4">817</td>
                          <td className="py-2 px-4">284</td>
                          <td className="py-2 px-4">62</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 px-4">Spinach</td>
                          <td className="py-2 px-4">483</td>
                          <td className="py-2 px-4">387</td>
                          <td className="py-2 px-4">194</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 px-4">Swiss Chard</td>
                          <td className="py-2 px-4">830</td>
                          <td className="py-2 px-4">151</td>
                          <td className="py-2 px-4">14</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4">Arugula</td>
                          <td className="py-2 px-4">109</td>
                          <td className="py-2 px-4">480</td>
                          <td className="py-2 px-4">97</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <p className="text-gray-700">
                  <strong>Tip:</strong> Massage kale with a bit of olive oil before eating to break down tough fibers and increase nutrient absorption.
                </p>
              </div>

              {/* Cruciferous Vegetables */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Cruciferous Vegetables: Detox Powerhouses</h3>
                <p className="text-gray-700 mb-4">
                  Broccoli, cauliflower, Brussels sprouts, and cabbage contain sulforaphane, a compound that:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                  <li>Activates antioxidant pathways in the body</li>
                  <li>Helps detoxify harmful compounds that can damage arteries</li>
                  <li>May reduce arterial stiffness by up to 15% when consumed regularly</li>
                </ul>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div className="text-center">
                    <div className="bg-green-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                      <Salad className="w-8 h-8 text-green-700" />
                    </div>
                    <p className="text-sm font-medium">Broccoli</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-green-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                      <Salad className="w-8 h-8 text-green-700" />
                    </div>
                    <p className="text-sm font-medium">Cauliflower</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-green-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                      <Salad className="w-8 h-8 text-green-700" />
                    </div>
                    <p className="text-sm font-medium">Brussels Sprouts</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-green-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                      <Salad className="w-8 h-8 text-green-700" />
                    </div>
                    <p className="text-sm font-medium">Bok Choy</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  <strong>Cooking Tip:</strong> Chop cruciferous vegetables and let them sit for 5-10 minutes before cooking to enhance sulforaphane formation.
                </p>
              </div>
            </section>

            {/* Practical Tips Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Practical Tips to Eat More Vegetables</h2>

              {/* 1. Start Your Day with Vegetables */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Start Your Day with Vegetables</h3>
                <p className="text-gray-700 mb-4">
                  Most people reserve vegetables for lunch and dinner, but adding them to breakfast is an easy way to increase your intake:
                </p>
                <div className="bg-blue-50 p-4 rounded-lg mb-4">
                  <h4 className="font-bold text-blue-800 mb-2">Breakfast Vegetable Ideas</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-medium text-gray-800">Savory Oatmeal</p>
                      <p className="text-sm text-gray-600">Top with sautéed mushrooms, spinach, and a poached egg</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Green Smoothie</p>
                      <p className="text-sm text-gray-600">Blend kale, cucumber, celery with banana and almond milk</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Veggie Scramble</p>
                      <p className="text-sm text-gray-600">Eggs with peppers, onions, tomatoes, and zucchini</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Avocado Toast Upgrade</p>
                      <p className="text-sm text-gray-600">Add radish slices, microgreens, and roasted tomatoes</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. Make Vegetables Convenient */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Make Vegetables Convenient</h3>
                <p className="text-gray-700 mb-4">
                  Convenience is key to consistent vegetable consumption. Try these strategies:
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                      <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center mr-2">1</span>
                      Pre-cut Vegetables
                    </h4>
                    <p className="text-gray-700 text-sm">Wash and chop vegetables right after grocery shopping so they're ready to eat or cook.</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                      <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center mr-2">2</span>
                      Frozen Vegetables
                    </h4>
                    <p className="text-gray-700 text-sm">Keep frozen vegetables on hand for quick additions to meals without prep time.</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                      <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center mr-2">3</span>
                      Visible Storage
                    </h4>
                    <p className="text-gray-700 text-sm">Store prepped vegetables at eye level in clear containers in your fridge.</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                      <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center mr-2">4</span>
                      Ready-to-Eat Snacks
                    </h4>
                    <p className="text-gray-700 text-sm">Keep cherry tomatoes, baby carrots, and sugar snap peas washed and ready.</p>
                  </div>
                </div>
              </div>

              {/* 3. Sneak Vegetables into Meals */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Sneak Vegetables into Favorite Dishes</h3>
                <p className="text-gray-700 mb-4">
                  You can significantly boost vegetable intake by incorporating them into dishes you already enjoy:
                </p>
                <div className="bg-purple-50 p-4 rounded-lg mb-4">
                  <h4 className="font-bold text-purple-800 mb-2">Vegetable Incorporation Ideas</h4>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium text-gray-800">Pasta Dishes</p>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>Add pureed cauliflower to alfredo sauce</li>
                        <li>Mix spiralized zucchini with regular pasta</li>
                        <li>Add mushrooms, peppers, and spinach to marinara</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Casseroles</p>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>Replace half the meat with diced mushrooms</li>
                        <li>Add grated carrots and zucchini to meat mixtures</li>
                        <li>Top with roasted vegetables instead of breadcrumbs</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Soups & Stews</p>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>Puree cooked vegetables to thicken instead of cream</li>
                        <li>Add extra vegetables beyond what the recipe calls for</li>
                        <li>Use vegetable broth as the base</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-12 bg-green-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">The Heart-Healthy Vegetable Challenge</h2>
              <p className="text-gray-700 mb-4">
                Commit to increasing your vegetable intake with this 7-day challenge:
              </p>
              <ol className="list-decimal list-inside text-gray-700 mb-4 ml-4 space-y-2">
                <li><strong>Day 1:</strong> Add one serving of leafy greens to your day</li>
                <li><strong>Day 2:</strong> Replace one refined grain with a vegetable (e.g., zucchini noodles instead of pasta)</li>
                <li><strong>Day 3:</strong> Try a new vegetable you've never eaten before</li>
                <li><strong>Day 4:</strong> Make vegetables the main component of one meal</li>
                <li><strong>Day 5:</strong> Prepare a vegetable-based snack (like roasted chickpeas or kale chips)</li>
                <li><strong>Day 6:</strong> Eat a rainbow of vegetable colors</li>
                <li><strong>Day 7:</strong> Plan next week's meals with vegetables as the focus</li>
              </ol>
              <p className="text-gray-700">
                By gradually increasing your vegetable intake and experimenting with different types and preparation methods, you'll discover that eating for heart health can be delicious, satisfying, and sustainable for life.
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
                      Dr. Sarah Johnson, Cardiologist
                    </a>
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    — Written by{" "}
                    <a href="#" className="text-blue-600 hover:underline font-medium">
                      Michael Chen, Nutritionist
                    </a>
                  </p>
                  <p className="text-sm text-gray-600 flex items-center gap-1">
                    — <Calendar className="w-3 h-3" />
                    <a href="#" className="text-blue-600 hover:underline">
                      Updated on May 7, 2024
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Daily Vegetable Goal Calculator */}
            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Daily Vegetable Goal Calculator</h3>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-2">Your Age</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                  <option>18-30 years</option>
                  <option>31-50 years</option>
                  <option>51-70 years</option>
                  <option>70+ years</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-2">Activity Level</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                  <option>Sedentary</option>
                  <option>Moderately Active</option>
                  <option>Very Active</option>
                </select>
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
                Calculate My Goal
              </button>
              <div className="mt-4 p-3 bg-white rounded-md text-center">
                <p className="text-sm text-gray-600">Recommended daily intake:</p>
                <p className="text-2xl font-bold text-green-600">5-7 servings</p>
              </div>
            </div>

            {/* Seasonal Vegetables */}
            <div className="bg-green-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Leaf className="w-5 h-5 text-green-600 mr-2" />
                Seasonal Vegetables (Spring)
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  <span>Asparagus</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  <span>Artichokes</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  <span>Peas</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  <span>Radishes</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  <span>Spring Greens</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  <span>Rhubarb</span>
                </li>
              </ul>
              <a href="#" className="inline-block mt-4 text-sm text-blue-600 hover:underline">
                View full seasonal guide →
              </a>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-teal-50 rounded-lg p-6 mb-8">
              <div className="mb-4">
                <h3 className="text-sm font-bold text-teal-800 uppercase tracking-wide mb-2">HEART HEALTH NEWSLETTER</h3>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Get heart-smart tips</h4>
                <p className="text-gray-700 text-sm">
                  Receive monthly recipes, research updates, and lifestyle advice for optimal cardiovascular health.
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
                Your <a href="#" className="text-teal-600 hover:underline">privacy</a> is important to us
              </p>
            </div>

            {/* Popular Recipes */}
            <div className="rounded-lg overflow-hidden shadow-sm mb-8">
              <div className="bg-green-600 px-4 py-3">
                <h3 className="text-lg font-bold text-white">Popular Heart-Healthy Recipes</h3>
              </div>
              <div className="bg-white p-4">
                <div className="space-y-4">
                  <a href="#" className="group block">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-3">
                        <img className="w-16 h-16 rounded object-cover" src="/salad-thumb.jpg" alt="Mediterranean salad" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 group-hover:text-green-600">Mediterranean Chickpea Salad</h4>
                        <p className="text-xs text-gray-500">15 min · 320 calories</p>
                      </div>
                    </div>
                  </a>
                  <a href="#" className="group block">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-3">
                        <img className="w-16 h-16 rounded object-cover" src="/soup-thumb.jpg" alt="Vegetable soup" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 group-hover:text-green-600">Hearty Vegetable Minestrone</h4>
                        <p className="text-xs text-gray-500">35 min · 280 calories</p>
                      </div>
                    </div>
                  </a>
                  <a href="#" className="group block">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-3">
                        <img className="w-16 h-16 rounded object-cover" src="/stirfry-thumb.jpg" alt="Vegetable stir fry" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 group-hover:text-green-600">Asian Vegetable Stir-Fry</h4>
                        <p className="text-xs text-gray-500">20 min · 350 calories</p>
                      </div>
                    </div>
                  </a>
                </div>
                <a href="#" className="inline-block mt-4 text-sm text-green-600 hover:underline font-medium">
                  View all recipes →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}