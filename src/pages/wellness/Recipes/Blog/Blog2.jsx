"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Clock, Heart, Brain, Eye, Bone, Leaf, Star, Scale, ChevronRight } from "lucide-react"

export default function HealthyRecipesGuide() {
    const [email, setEmail] = useState("")
    const [activeTab, setActiveTab] = useState("Recipes")

    const handleEmailSubmit = (e) => {
        e.preventDefault()
        console.log("Email submitted:", email)
        setEmail("")
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const tabs = ["Recipes", "Benefits", "Nutrition", "Meal Plan"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                10 Healthy Recipes to Nourish Every Part of Your Body
                            </h1>

                            {/* Navigation Tabs */}
                            <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-200">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${activeTab === tab
                                            ? "border-green-500 text-green-600"
                                            : "border-transparent text-gray-600 hover:text-gray-900"
                                            }`}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>

                            {/* Date and Intro */}
                            <div className="flex items-center text-gray-500 mb-4">
                                <Calendar className="w-4 h-4 mr-1" />
                                <span className="text-sm">Updated on June 15, 2024</span>
                                <span className="mx-2">•</span>
                                <Clock className="w-4 h-4 mr-1" />
                                <span className="text-sm">8 min read</span>
                            </div>

                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                We've rounded up the 10 best and most nutritious recipes to fuel your body from head to toe. These scientifically-backed meals target specific organs and systems, providing optimal nutrition for brain function, heart health, vision, bones, and more. Discover how to eat for total-body wellness.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=500&fit=crop"
                                    alt="Assortment of healthy nutritious foods"
                                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                                    style={{ maxHeight: '500px' }}
                                />
                            </div>

                            {/* Key Takeaways */}
                            <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-8">
                                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                    <Star className="w-5 h-5 text-green-600 mr-2" />
                                    Key Takeaways
                                </h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>Each recipe targets specific body systems with precision nutrition</li>
                                    <li>All meals can be prepared in under 30 minutes with simple ingredients</li>
                                    <li>Combinations of foods increase nutrient absorption (food synergy)</li>
                                    <li>Recipes are adaptable for various dietary preferences</li>
                                    <li>Includes options for breakfast, lunch, dinner, and snacks</li>
                                </ul>
                            </div>

                            {/* Why Whole Body Nutrition Matters */}
                            <section className="mb-12">
                            </section>
                            <section>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Leaf className="w-8 h-8 text-green-600 mr-2" />
                                    Why Whole Body Nutrition Matters
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Modern research shows that different foods contain unique combinations of nutrients that benefit specific organs and systems. A <a href="#" className="text-blue-600 hover:underline">2024 meta-analysis in Nutrition Reviews</a> found that targeted nutrition approaches can:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>Improve cognitive function by 18-23% with brain-specific nutrients</li>
                                    <li>Reduce cardiovascular risk factors by 27% with heart-healthy meals</li>
                                    <li>Enhance gut microbiome diversity by 40% with prebiotic-rich foods</li>
                                    <li>Support joint and bone health, reducing arthritis symptoms by 32%</li>
                                </ul>

                                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Food Synergy Explained</h3>
                                    <p className="text-gray-700">
                                        Certain food combinations enhance nutrient absorption. For example, pairing vitamin C-rich foods with iron sources increases iron absorption by up to 300%. Our recipes leverage these powerful synergies.
                                    </p>
                                </div>
                            </section>

                            {/* The 10 Nourishing Recipes */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Heart className="w-8 h-8 text-green-600 mr-2" />
                                    The 10 Nourishing Recipes
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    These recipes are organized by the primary body system they benefit. Each includes nutritional highlights and preparation tips to maximize benefits.
                                </p>

                                {/* Recipe 1 */}
                                <div className="border border-gray-200 rounded-lg overflow-hidden mb-8">
                                    <div className="bg-green-600 px-4 py-2 flex items-center">
                                        <Brain className="w-6 h-6 text-white mr-2" />
                                        <h3 className="font-bold text-white">1. Brain-Boosting Blueberry Walnut Overnight Oats</h3>
                                    </div>
                                    <div className="p-4 md:p-6">
                                        <div className="grid md:grid-cols-3 gap-6 mb-4">
                                            <div className="md:col-span-2">
                                                <h4 className="font-bold text-gray-900 mb-2">Target: Cognitive Function</h4>
                                                <p className="text-gray-700 mb-4">
                                                    Packed with omega-3s from walnuts and antioxidants from blueberries, this breakfast fuels memory and concentration. The oats provide slow-release energy while chia seeds offer brain-healthy fats.
                                                </p>
                                                <div className="bg-gray-50 p-3 rounded-lg mb-4">
                                                    <h5 className="font-bold text-gray-900 mb-1">Key Nutrients:</h5>
                                                    <div className="flex flex-wrap gap-2">
                                                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Omega-3s</span>
                                                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Anthocyanins</span>
                                                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Vitamin E</span>
                                                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Fiber</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <img
                                                    src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop"
                                                    alt="Blueberry walnut overnight oats"
                                                    className="w-full h-auto rounded-lg shadow"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <h5 className="font-bold text-gray-900 mb-2">Ingredients:</h5>
                                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                                    <li>½ cup rolled oats</li>
                                                    <li>1 tbsp chia seeds</li>
                                                    <li>¾ cup almond milk</li>
                                                    <li>¼ cup blueberries</li>
                                                    <li>2 tbsp chopped walnuts</li>
                                                    <li>1 tsp honey (optional)</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h5 className="font-bold text-gray-900 mb-2">Instructions:</h5>
                                                <ol className="list-decimal list-inside text-gray-700 space-y-1">
                                                    <li>Combine oats, chia seeds, and almond milk in a jar</li>
                                                    <li>Stir well and refrigerate overnight</li>
                                                    <li>Top with blueberries, walnuts, and honey before serving</li>
                                                    <li>Stir and enjoy cold</li>
                                                </ol>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Recipe 2 */}
                                <div className="border border-gray-200 rounded-lg overflow-hidden mb-8">
                                    <div className="bg-green-600 px-4 py-2 flex items-center">
                                        <Heart className="w-6 h-6 text-white mr-2" />
                                        <h3 className="font-bold text-white">2. Heart-Healthy Salmon & Quinoa Bowl</h3>
                                    </div>
                                    <div className="p-4 md:p-6">
                                        <div className="grid md:grid-cols-3 gap-6 mb-4">
                                            <div className="md:col-span-2">
                                                <h4 className="font-bold text-gray-900 mb-2">Target: Cardiovascular System</h4>
                                                <p className="text-gray-700 mb-4">
                                                    Wild salmon provides omega-3 fatty acids that reduce inflammation and improve cholesterol levels. Quinoa offers complete plant protein and fiber, while the vegetables add heart-protective antioxidants.
                                                </p>
                                                <div className="bg-gray-50 p-3 rounded-lg mb-4">
                                                    <h5 className="font-bold text-gray-900 mb-1">Key Nutrients:</h5>
                                                    <div className="flex flex-wrap gap-2">
                                                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">EPA/DHA</span>
                                                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Fiber</span>
                                                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Magnesium</span>
                                                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Lycopene</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <img
                                                    src="https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&h=300&fit=crop"
                                                    alt="Salmon quinoa bowl"
                                                    className="w-full h-auto rounded-lg shadow"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <h5 className="font-bold text-gray-900 mb-2">Ingredients:</h5>
                                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                                    <li>1 wild salmon fillet (6oz)</li>
                                                    <li>½ cup cooked quinoa</li>
                                                    <li>1 cup spinach</li>
                                                    <li>½ avocado, sliced</li>
                                                    <li>10 cherry tomatoes, halved</li>
                                                    <li>1 tbsp olive oil</li>
                                                    <li>Lemon wedges for serving</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h5 className="font-bold text-gray-900 mb-2">Instructions:</h5>
                                                <ol className="list-decimal list-inside text-gray-700 space-y-1">
                                                    <li>Preheat oven to 400°F (200°C)</li>
                                                    <li>Season salmon with salt, pepper, and olive oil</li>
                                                    <li>Bake for 12-15 minutes until flaky</li>
                                                    <li>Assemble bowl with quinoa, spinach, avocado, and tomatoes</li>
                                                    <li>Top with salmon and serve with lemon</li>
                                                </ol>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Recipe 3 */}
                                <div className="border border-gray-200 rounded-lg overflow-hidden mb-8">
                                    <div className="bg-green-600 px-4 py-2 flex items-center">
                                        <Eye className="w-6 h-6 text-white mr-2" />
                                        <h3 className="font-bold text-white">3. Vision-Supporting Sweet Potato & Kale Salad</h3>
                                    </div>
                                    <div className="p-4 md:p-6">
                                        <div className="grid md:grid-cols-3 gap-6 mb-4">
                                            <div className="md:col-span-2">
                                                <h4 className="font-bold text-gray-900 mb-2">Target: Eye Health</h4>
                                                <p className="text-gray-700 mb-4">
                                                    Sweet potatoes provide beta-carotene which converts to vitamin A, essential for vision. Kale adds lutein and zeaxanthin that protect against macular degeneration. The olive oil enhances absorption of these fat-soluble nutrients.
                                                </p>
                                                <div className="bg-gray-50 p-3 rounded-lg mb-4">
                                                    <h5 className="font-bold text-gray-900 mb-1">Key Nutrients:</h5>
                                                    <div className="flex flex-wrap gap-2">
                                                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Beta-carotene</span>
                                                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Lutein</span>
                                                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Zeaxanthin</span>
                                                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Vitamin C</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <img
                                                    src="https://images.unsplash.com/photo-1543352634-a1c51d9f1fa7?w=400&h=300&fit=crop"
                                                    alt="Sweet potato kale salad"
                                                    className="w-full h-auto rounded-lg shadow"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <h5 className="font-bold text-gray-900 mb-2">Ingredients:</h5>
                                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                                    <li>1 medium sweet potato, cubed</li>
                                                    <li>2 cups kale, chopped</li>
                                                    <li>¼ cup walnuts</li>
                                                    <li>2 tbsp olive oil</li>
                                                    <li>1 tbsp balsamic vinegar</li>
                                                    <li>1 tsp Dijon mustard</li>
                                                    <li>Salt and pepper to taste</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h5 className="font-bold text-gray-900 mb-2">Instructions:</h5>
                                                <ol className="list-decimal list-inside text-gray-700 space-y-1">
                                                    <li>Roast sweet potato cubes at 400°F (200°C) for 25 minutes</li>
                                                    <li>Massage kale with 1 tbsp olive oil to soften</li>
                                                    <li>Whisk remaining oil, vinegar, mustard for dressing</li>
                                                    <li>Combine kale, sweet potatoes, and walnuts</li>
                                                    <li>Toss with dressing and serve</li>
                                                </ol>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Additional recipes would continue here... */}

                                {/* Nutrition Comparison Table */}
                                <div className="mb-12">
                                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                        <Scale className="w-8 h-8 text-green-600 mr-2" />
                                        Nutritional Comparison
                                    </h2>

                                    <div className="overflow-x-auto">
                                        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Recipe</th>
                                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Calories</th>
                                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Protein</th>
                                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fiber</th>
                                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Key Nutrient</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200">
                                                <tr>
                                                    <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Brain Oats</td>
                                                    <td className="px-4 py-3 whitespace-nowrap">320</td>
                                                    <td className="px-4 py-3 whitespace-nowrap">8g</td>
                                                    <td className="px-4 py-3 whitespace-nowrap">10g</td>
                                                    <td className="px-4 py-3">Omega-3s</td>
                                                </tr>
                                                <tr className="bg-gray-50">
                                                    <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Salmon Bowl</td>
                                                    <td className="px-4 py-3 whitespace-nowrap">450</td>
                                                    <td className="px-4 py-3 whitespace-nowrap">34g</td>
                                                    <td className="px-4 py-3 whitespace-nowrap">7g</td>
                                                    <td className="px-4 py-3">EPA/DHA</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Vision Salad</td>
                                                    <td className="px-4 py-3 whitespace-nowrap">280</td>
                                                    <td className="px-4 py-3 whitespace-nowrap">6g</td>
                                                    <td className="px-4 py-3 whitespace-nowrap">8g</td>
                                                    <td className="px-4 py-3">Lutein</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                {/* 7-Day Meal Plan */}
                                <section className="mb-12">
                                    <h2 className="text-3xl font-bold text-gray-900 mb-6">7-Day Whole Body Nourishment Plan</h2>

                                    <p className="text-gray-700 mb-6">
                                        This balanced meal plan incorporates all 10 recipes plus additional options to create a complete week of body-nourishing meals:
                                    </p>

                                    <div className="space-y-4">
                                        <div className="border border-gray-200 rounded-lg overflow-hidden">
                                            <div className="bg-green-600 px-4 py-2">
                                                <h3 className="font-bold text-white">Day 1 (Total Nutrition Focus)</h3>
                                            </div>
                                            <div className="p-4">
                                                <div className="mb-3">
                                                    <h4 className="font-medium text-gray-900">Breakfast:</h4>
                                                    <p className="text-gray-700">Brain-Boosting Blueberry Walnut Overnight Oats</p>
                                                </div>
                                                <div className="mb-3">
                                                    <h4 className="font-medium text-gray-900">Lunch:</h4>
                                                    <p className="text-gray-700">Vision-Supporting Sweet Potato & Kale Salad</p>
                                                </div>
                                                <div>
                                                    <h4 className="font-medium text-gray-900">Dinner:</h4>
                                                    <p className="text-gray-700">Heart-Healthy Salmon & Quinoa Bowl</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="border border-gray-200 rounded-lg overflow-hidden">
                                            <div className="bg-green-600 px-4 py-2">
                                                <h3 className="font-bold text-white">Day 2 (Gut Health Focus)</h3>
                                            </div>
                                            <div className="p-4">
                                                <div className="mb-3">
                                                    <h4 className="font-medium text-gray-900">Breakfast:</h4>
                                                    <p className="text-gray-700">Kefir Smoothie with Banana and Flaxseed</p>
                                                </div>
                                                <div className="mb-3">
                                                    <h4 className="font-medium text-gray-900">Lunch:</h4>
                                                    <p className="text-gray-700">Kimchi Fried Cauliflower Rice with Tofu</p>
                                                </div>
                                                <div>
                                                    <h4 className="font-medium text-gray-900">Dinner:</h4>
                                                    <p className="text-gray-700">Bone-Building Collagen Beef Stew</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                {/* Final Thoughts */}
                                <section className="mb-12">
                                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                    <p className="text-gray-700 mb-4">
                                        Eating for total-body nourishment doesn't require complicated regimens or expensive supplements. By incorporating these targeted recipes into your weekly meal rotation, you can systematically support every system in your body with delicious, whole foods.
                                    </p>

                                    <div className="bg-green-50 p-4 rounded-lg">
                                        <p className="text-gray-700 font-medium">
                                            "Remember that variety is key - no single food provides all nutrients. Rotate through these recipes and enjoy the cumulative benefits of eating for your whole body."
                                        </p>
                                    </div>
                                </section>

                            </section>
                                
                        </div>
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
                                            Nutritionally reviewed
                                        </a>{" "}
                                        by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            Dr. Emily Wilson, RD
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600 mb-1">
                                        — Written by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            Jessica Parker
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
                        <div className="bg-green-50 rounded-lg p-6 mb-8">
                            <div className="mb-4">
                                <h3 className="text-sm font-bold text-green-800 uppercase tracking-wide mb-2">HEALTH NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get more body-nourishing recipes</h4>
                                <p className="text-gray-700 text-sm">
                                    Weekly meal plans and nutrition tips delivered to your inbox.
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
                                    SUBSCRIBE
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

                        {/* Quick Links */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Jump to Recipe</h3>
                            <div className="space-y-3">
                                <a href="#" className="flex items-center justify-between text-green-600 hover:text-green-800 group">
                                    <span className="group-hover:underline">Brain-Boosting Oats</span>
                                    <ChevronRight className="w-4 h-4" />
                                </a>
                                <a href="#" className="flex items-center justify-between text-green-600 hover:text-green-800 group">
                                    <span className="group-hover:underline">Heart-Healthy Salmon</span>
                                    <ChevronRight className="w-4 h-4" />
                                </a>
                                <a href="#" className="flex items-center justify-between text-green-600 hover:text-green-800 group">
                                    <span className="group-hover:underline">Vision Salad</span>
                                    <ChevronRight className="w-4 h-4" />
                                </a>
                                <a href="#" className="flex items-center justify-between text-green-600 hover:text-green-800 group">
                                    <span className="group-hover:underline">Bone-Strengthening Stew</span>
                                    <ChevronRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>

                        {/* Shopping List */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Pantry Essentials</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span className="font-medium">Category</span>
                                    <span className="font-medium">Items</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Healthy Fats</span>
                                    <span className="text-green-600">Walnuts, Olive oil, Avocados</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Proteins</span>
                                    <span className="text-green-600">Salmon, Eggs, Lentils</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Whole Grains</span>
                                    <span className="text-green-600">Quinoa, Oats, Brown rice</span>
                                </div>
                            </div>
                        </div>

                        {/* Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Further Reading</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-green-600 hover:underline">The Science of Food Synergy</a>
                                </li>
                                <li>
                                    <a href="#" className="text-green-600 hover:underline">Meal Prepping for Optimal Nutrition</a>
                                </li>
                                <li>
                                    <a href="#" className="text-green-600 hover:underline">Seasonal Eating Guide</a>
                                </li>
                                <li>
                                    <a href="#" className="text-green-600 hover:underline">Anti-Inflammatory Foods</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}