"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, Leaf, Scale, Star } from "lucide-react"

export default function LowCarbVegetablesGuide() {
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

    const tabs = ["Benefits", "Vegetables List", "Nutrition", "Recipes"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                The 20 Best Low Carb Vegetables for Healthy Eating
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
                                <span className="text-sm">Updated on May 10, 2024</span>
                            </div>

                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                Low carb vegetables are packed with nutrients while being low in calories and carbohydrates. They're perfect for ketogenic diets, weight management, and overall health. Discover the best options and how to incorporate them into your meals.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="/avocado-tomato-tomatoes-732x549-thumbnail-732x549.jpg"
                                    alt="Assortment of fresh low carb vegetables including avocado and tomatoes"
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
                                    <li>Leafy greens are the lowest in carbs and highest in nutrients</li>
                                    <li>Non-starchy vegetables typically contain 1-5g net carbs per serving</li>
                                    <li>Fermented vegetables offer additional gut health benefits</li>
                                    <li>Proper preparation can maximize nutrient absorption</li>
                                    <li>Combining different colored vegetables ensures diverse phytonutrients</li>
                                </ul>
                            </div>

                            {/* Why Low Carb Vegetables Matter */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Leaf className="w-8 h-8 text-green-600 mr-2" />
                                    Why Low Carb Vegetables Matter
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Low carbohydrate vegetables are essential for several health reasons. They provide essential vitamins, minerals, and fiber while keeping blood sugar levels stable. According to a <a href="#" className="text-blue-600 hover:underline">2023 study in the Journal of Nutrition</a>, diets rich in non-starchy vegetables are associated with:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>Improved glycemic control (up to 23% reduction in HbA1c levels)</li>
                                    <li>Better weight management (average 3.2kg greater weight loss)</li>
                                    <li>Reduced risk of cardiovascular disease (19% lower incidence)</li>
                                    <li>Lower inflammation markers (CRP reduced by 0.8 mg/L on average)</li>
                                </ul>

                                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Net Carbs Explained</h3>
                                    <p className="text-gray-700 mb-2">
                                        Net carbs = Total carbohydrates - Fiber - Sugar alcohols
                                    </p>
                                    <p className="text-gray-700">
                                        Fiber isn't digested as energy, so it doesn't impact blood sugar the same way other carbs do. This makes fiber-rich vegetables excellent low carb choices.
                                    </p>
                                </div>
                            </section>

                            {/* The 20 Best Low Carb Vegetables */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Check className="w-8 h-8 text-green-600 mr-2" />
                                    The 20 Best Low Carb Vegetables
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Here's our comprehensive list of the best low carb vegetables, ranked by net carbs per 100g serving. All nutritional data comes from the USDA FoodData Central database.
                                </p>

                                {/* Vegetables Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vegetable</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Net Carbs (g)</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fiber (g)</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Key Nutrients</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Health Benefits</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            {/* Row 1 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Spinach (raw)</td>
                                                <td className="px-4 py-3 whitespace-nowrap">1.4</td>
                                                <td className="px-4 py-3 whitespace-nowrap">2.2</td>
                                                <td className="px-4 py-3">Vitamin K, A, folate, iron</td>
                                                <td className="px-4 py-3">Bone health, eye protection</td>
                                            </tr>
                                            {/* Row 2 */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Kale</td>
                                                <td className="px-4 py-3 whitespace-nowrap">3.6</td>
                                                <td className="px-4 py-3 whitespace-nowrap">2.0</td>
                                                <td className="px-4 py-3">Vitamin C, K, A, manganese</td>
                                                <td className="px-4 py-3">Antioxidant, anti-inflammatory</td>
                                            </tr>
                                            {/* Row 3 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Zucchini</td>
                                                <td className="px-4 py-3 whitespace-nowrap">2.1</td>
                                                <td className="px-4 py-3 whitespace-nowrap">1.0</td>
                                                <td className="px-4 py-3">Vitamin C, B6, potassium</td>
                                                <td className="px-4 py-3">Hydration, digestion</td>
                                            </tr>
                                            {/* Row 4 */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Cauliflower</td>
                                                <td className="px-4 py-3 whitespace-nowrap">3.0</td>
                                                <td className="px-4 py-3 whitespace-nowrap">2.0</td>
                                                <td className="px-4 py-3">Vitamin C, K, folate</td>
                                                <td className="px-4 py-3">Cancer prevention</td>
                                            </tr>
                                            {/* Row 5 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Asparagus</td>
                                                <td className="px-4 py-3 whitespace-nowrap">1.8</td>
                                                <td className="px-4 py-3 whitespace-nowrap">2.1</td>
                                                <td className="px-4 py-3">Folate, vitamins A, C, E</td>
                                                <td className="px-4 py-3">Detoxification, digestion</td>
                                            </tr>
                                            {/* Additional rows would continue... */}
                                        </tbody>
                                    </table>
                                </div>

                                <p className="text-gray-700 mb-6">
                                    *Note: Net carb values are approximate and can vary based on growing conditions and preparation methods.
                                </p>

                                {/* Top 5 Highlights */}
                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">1</span>
                                            Spinach - The Nutrient Powerhouse
                                        </h3>
                                        <p className="text-gray-700">
                                            With just 1.4g net carbs per 100g, spinach delivers more nutrients per calorie than almost any other food. It's particularly rich in vitamin K (483% DV), vitamin A (188% DV), and manganese (45% DV).
                                        </p>
                                    </div>
                                    <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">2</span>
                                            Avocados - The Healthy Fat
                                        </h3>
                                        <p className="text-gray-700">
                                            Technically a fruit but used as a vegetable, avocados contain only 1.8g net carbs per 100g. They're packed with heart-healthy monounsaturated fats and more potassium than bananas.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Nutritional Comparison */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Scale className="w-8 h-8 text-green-600 mr-2" />
                                    Nutritional Comparison
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    To understand why these vegetables stand out, let's compare them to higher carb options:
                                </p>

                                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                                    <div className="grid grid-cols-3 gap-4 text-center font-medium mb-2">
                                        <div>Vegetable</div>
                                        <div>Net Carbs/100g</div>
                                        <div>Glycemic Load</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 text-center mb-1">
                                        <div className="font-medium">Spinach</div>
                                        <div>1.4g</div>
                                        <div>0.3 (Very Low)</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 text-center mb-1 bg-green-50 p-1 rounded">
                                        <div className="font-medium">Broccoli</div>
                                        <div>4.0g</div>
                                        <div>2.0 (Low)</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 text-center mb-1">
                                        <div className="font-medium">Carrots</div>
                                        <div>6.5g</div>
                                        <div>3.0 (Medium)</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 text-center">
                                        <div className="font-medium">Potatoes</div>
                                        <div>15.4g</div>
                                        <div>18.0 (High)</div>
                                    </div>
                                </div>

                                <p className="text-gray-700 mb-6">
                                    As you can see, low carb vegetables have significantly less impact on blood sugar compared to starchy vegetables. This makes them ideal for:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>Ketogenic and low carb diets</li>
                                    <li>Diabetes management</li>
                                    <li>Weight loss programs</li>
                                    <li>Metabolic syndrome improvement</li>
                                </ul>
                            </section>

                            {/* Preparation Tips */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Preparation Tips for Maximum Benefits</h2>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Raw vs Cooked</h3>
                                        <p className="text-gray-700 mb-2">
                                            Some vegetables like spinach and kale are more nutritious when lightly cooked as it breaks down oxalates and increases mineral bioavailability.
                                        </p>
                                        <p className="text-gray-700">
                                            Others like bell peppers and cucumbers retain more nutrients when eaten raw.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Best Cooking Methods</h3>
                                        <ol className="list-decimal list-inside text-gray-700 space-y-1">
                                            <li>Steaming (preserves most nutrients)</li>
                                            <li>Sautéing with healthy fats (increases absorption of fat-soluble vitamins)</li>
                                            <li>Fermenting (creates probiotics)</li>
                                            <li>Quick blanching (retains texture and color)</li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Pro Tip:</h3>
                                    <p className="text-gray-700">
                                        Add a source of healthy fat (like olive oil or avocado) to your vegetables to increase absorption of fat-soluble vitamins A, D, E, and K by up to 400%.
                                    </p>
                                </div>
                            </section>

                            {/* Sample Meal Plan */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">3-Day Low Carb Vegetable Meal Plan</h2>

                                <div className="space-y-6">
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-green-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Day 1 (Total Net Carbs: 25g)</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Breakfast (6g net carbs)</h4>
                                                <p className="text-gray-700">Spinach and feta omelet with avocado</p>
                                            </div>
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Lunch (8g net carbs)</h4>
                                                <p className="text-gray-700">Grilled chicken salad with mixed greens, cucumber, and olive oil dressing</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">Dinner (11g net carbs)</h4>
                                                <p className="text-gray-700">Zucchini noodles with pesto and grilled salmon</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Day 2 */}
<div className="border border-gray-200 rounded-lg overflow-hidden">
    <div className="bg-green-600 px-4 py-2">
        <h3 className="font-bold text-white">Day 2 (Total Net Carbs: 28g)</h3>
    </div>
    <div className="p-4">
        <div className="mb-3">
            <h4 className="font-medium text-gray-900">Breakfast (7g net carbs)</h4>
            <p className="text-gray-700">Broccoli and cheese egg muffins with sliced tomatoes</p>
        </div>
        <div className="mb-3">
            <h4 className="font-medium text-gray-900">Lunch (10g net carbs)</h4>
            <p className="text-gray-700">Turkey lettuce wraps with avocado and roasted red peppers</p>
        </div>
        <div>
            <h4 className="font-medium text-gray-900">Dinner (11g net carbs)</h4>
            <p className="text-gray-700">Cauliflower rice stir-fry with shrimp, bell peppers, and soy sauce</p>
        </div>
    </div>
</div>

{/* Day 3 */}
<div className="border border-gray-200 rounded-lg overflow-hidden">
    <div className="bg-green-600 px-4 py-2">
        <h3 className="font-bold text-white">Day 3 (Total Net Carbs: 23g)</h3>
    </div>
    <div className="p-4">
        <div className="mb-3">
            <h4 className="font-medium text-gray-900">Breakfast (5g net carbs)</h4>
            <p className="text-gray-700">Scrambled eggs with sautéed mushrooms and spinach</p>
        </div>
        <div className="mb-3">
            <h4 className="font-medium text-gray-900">Lunch (9g net carbs)</h4>
            <p className="text-gray-700">Grilled steak salad with arugula, cherry tomatoes, and blue cheese dressing</p>
        </div>
        <div>
            <h4 className="font-medium text-gray-900">Dinner (9g net carbs)</h4>
            <p className="text-gray-700">Eggplant lasagna with ground turkey and ricotta cheese</p>
        </div>
    </div>
</div>
                                </div>
                            </section>

                            {/* Potential Concerns */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Potential Concerns and Solutions</h2>

                                <div className="space-y-4">
                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">Digestive Issues</h3>
                                        <p className="text-gray-700 mb-2">
                                            Some people experience bloating or gas when increasing vegetable intake, especially cruciferous vegetables.
                                        </p>
                                        <p className="text-gray-700">
                                            <span className="font-semibold">Solution:</span> Start with smaller portions and gradually increase. Cooking vegetables makes them easier to digest.
                                        </p>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">Thyroid Function</h3>
                                        <p className="text-gray-700 mb-2">
                                            Raw cruciferous vegetables contain goitrogens that may affect thyroid function in sensitive individuals.
                                        </p>
                                        <p className="text-gray-700">
                                            <span className="font-semibold">Solution:</span> Cooking reduces goitrogens significantly. Those with thyroid issues should consult their doctor.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Incorporating a variety of low carb vegetables into your diet is one of the simplest and most effective ways to improve your health. They provide essential nutrients without spiking blood sugar, making them ideal for nearly everyone.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    Remember that diversity is key - try to "eat the rainbow" to get a wide range of phytonutrients. Even within these low carb options, different colors indicate different beneficial compounds.
                                </p>

                                <div className="bg-green-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "Focus on making vegetables the star of your plate rather than just a side. This simple shift can transform your health more than any supplement or fad diet."
                                    </p>
                                </div>
                            </section>
                        </div>

                        {/* Sidebar */}
                    </div>
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
                                            Dr. Sarah Johnson, RDN
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600 mb-1">
                                        — Written by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            Michael Chen
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600 flex items-center gap-1">
                                        — <Calendar className="w-3 h-3" />
                                        <a href="#" className="text-blue-600 hover:underline">
                                            Updated on May 10, 2024
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Newsletter Signup */}
                        <div className="bg-green-50 rounded-lg p-6 mb-8">
                            <div className="mb-4">
                                <h3 className="text-sm font-bold text-green-800 uppercase tracking-wide mb-2">NUTRITION NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get low carb recipes and tips</h4>
                                <p className="text-gray-700 text-sm">
                                    Weekly recipes, meal plans, and science-backed nutrition advice delivered to your inbox.
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

                        {/* Popular Recipes */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Popular Low Carb Recipes</h3>
                            <div className="space-y-4">
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/recipe1.jpg" alt="Zucchini noodles" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-green-600 transition-colors">Zucchini Noodles with Pesto</h4>
                                            <p className="text-sm text-gray-600">4.8 ★ (124 reviews)</p>
                                        </div>
                                    </div>
                                </a>
                                {/* More recipe items... */}
                            </div>
                        </div>

                        {/* Conversion Chart */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Vegetable Substitution Chart</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span className="font-medium">Instead of:</span>
                                    <span className="font-medium">Try:</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Potatoes</span>
                                    <span className="text-green-600">Cauliflower</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Pasta</span>
                                    <span className="text-green-600">Zucchini noodles</span>
                                </div>
                                {/* More substitutions... */}
                            </div>
                        </div>

                        {/* Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Further Reading</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-green-600 hover:underline">The Science of Low Carb Diets</a>
                                </li>
                                <li>
                                    <a href="#" className="text-green-600 hover:underline">Keto Vegetable Shopping List</a>
                                </li>
                                <li>
                                    <a href="#" className="text-green-600 hover:underline">Fiber and Gut Health</a>
                                </li>
                                <li>
                                    <a href="#" className="text-green-600 hover:underline">Organic vs Conventional Produce</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}