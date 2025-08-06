"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, Leaf, Scale, Star, Clock, Heart, Shield, BookOpen, ChefHat, Droplet, Flame } from "lucide-react"

export default function CookingNutritionGuide() {
    const [email, setEmail] = useState("")
    const [activeTab, setActiveTab] = useState("Techniques")

    const handleEmailSubmit = (e) => {
        e.preventDefault()
        console.log("Email submitted:", email)
        setEmail("")
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const tabs = ["Techniques", "Ingredients", "Nutrients", "Recipes"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Cooking and Nutrition: Maximizing Your Health Benefits
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

                            {/* Date and Intro */}
                            <div className="flex items-center text-gray-500 mb-4">
                                <Calendar className="w-4 h-4 mr-1" />
                                <span className="text-sm">Updated on June 15, 2024</span>
                                <span className="mx-2">•</span>
                                <Clock className="w-4 h-4 mr-1" />
                                <span className="text-sm">9 min read</span>
                            </div>

                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                Discover how proper cooking methods and ingredient selection can dramatically enhance the nutritional value of your meals. This comprehensive guide covers essential techniques, nutrient preservation strategies, and science-backed approaches to transform your cooking into a powerful health-promoting practice.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80"
                                    alt="Healthy cooking ingredients and utensils"
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
                                    <li>Cooking methods can increase or decrease nutrient bioavailability by up to 90%</li>
                                    <li>Proper food combinations enhance nutrient absorption (like vitamin C with iron)</li>
                                    <li>Water-soluble vitamins are most vulnerable to cooking losses</li>
                                    <li>Fermentation and sprouting can multiply nutrient content</li>
                                    <li>Herbs and spices not only add flavor but significant antioxidants</li>
                                </ul>
                            </div>

                            {/* The Science of Nutrient Preservation */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <BookOpen className="w-8 h-8 text-green-600 mr-2" />
                                    The Science of Nutrient Preservation
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Nutritional science reveals that how we prepare food significantly impacts its health benefits. A <a href="#" className="text-blue-600 hover:underline">2023 meta-analysis in the American Journal of Clinical Nutrition</a> found cooking methods can alter nutrient availability by:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>Increasing lycopene bioavailability in tomatoes by 35-164% when cooked</li>
                                    <li>Reducing vitamin C content in broccoli by 15-55% depending on method</li>
                                    <li>Enhancing calcium absorption from greens by 20-30% with proper preparation</li>
                                    <li>Destroying up to 90% of folate in prolonged boiling</li>
                                </ul>

                                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Nutrient Bioavailability Explained</h3>
                                    <p className="text-gray-700 mb-2">
                                        Bioavailability = The proportion of a nutrient that is absorbed and utilized by the body
                                    </p>
                                    <p className="text-gray-700">
                                        Many factors affect bioavailability including cooking method, food combinations, and individual digestive health. For example, adding fat increases absorption of fat-soluble vitamins (A, D, E, K) by 3-4 times.
                                    </p>
                                </div>
                            </section>

                            {/* Cooking Methods Comparison */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <ChefHat className="w-8 h-8 text-green-600 mr-2" />
                                    Cooking Methods: Nutrient Impact Comparison
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    The table below compares how different cooking methods affect key nutrients in vegetables, based on USDA data and peer-reviewed studies. Values represent approximate nutrient retention percentages.
                                </p>

                                {/* Cooking Methods Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Method</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vitamin C</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Folate</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Carotenoids</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Polyphenols</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Raw</td>
                                                <td className="px-4 py-3 whitespace-nowrap">100%</td>
                                                <td className="px-4 py-3 whitespace-nowrap">100%</td>
                                                <td className="px-4 py-3">5-15%</td>
                                                <td className="px-4 py-3">100%</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Steaming</td>
                                                <td className="px-4 py-3 whitespace-nowrap">75-90%</td>
                                                <td className="px-4 py-3 whitespace-nowrap">80-95%</td>
                                                <td className="px-4 py-3">25-35%</td>
                                                <td className="px-4 py-3">85-95%</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Sautéing</td>
                                                <td className="px-4 py-3 whitespace-nowrap">60-75%</td>
                                                <td className="px-4 py-3 whitespace-nowrap">70-85%</td>
                                                <td className="px-4 py-3">45-65%</td>
                                                <td className="px-4 py-3">75-90%</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Boiling</td>
                                                <td className="px-4 py-3 whitespace-nowrap">40-60%</td>
                                                <td className="px-4 py-3 whitespace-nowrap">30-50%</td>
                                                <td className="px-4 py-3">15-25%</td>
                                                <td className="px-4 py-3">50-70%</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Microwaving</td>
                                                <td className="px-4 py-3 whitespace-nowrap">80-95%</td>
                                                <td className="px-4 py-3 whitespace-nowrap">85-95%</td>
                                                <td className="px-4 py-3">30-45%</td>
                                                <td className="px-4 py-3">90-98%</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <p className="text-gray-700 mb-6">
                                    *Note: Values are averages across multiple vegetable types. Actual retention varies by specific vegetable and cooking duration.
                                </p>

                                {/* Cooking Method Highlights */}
                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">1</span>
                                            Steaming - The Gold Standard
                                        </h3>
                                        <p className="text-gray-700">
                                            Preserves the most water-soluble vitamins while making some nutrients more bioavailable. Broccoli retains 90% of its vitamin C when steamed for 5 minutes versus 66% when boiled.
                                        </p>
                                    </div>
                                    <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">2</span>
                                            Fermentation - Nutrient Multiplier
                                        </h3>
                                        <p className="text-gray-700">
                                            Fermented foods like sauerkraut can have 10-100x more bioavailable nutrients than raw. The fermentation process creates new nutrients like vitamin K2 and breaks down anti-nutrients.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Ingredient Selection Guide */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Leaf className="w-8 h-8 text-green-600 mr-2" />
                                    Smart Ingredient Selection
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Choosing the right ingredients is the foundation of nutritious cooking. Follow these evidence-based guidelines:
                                </p>

                                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                                    <div className="grid grid-cols-3 gap-4 text-center font-medium mb-2">
                                        <div>Ingredient</div>
                                        <div>Nutrition Peak</div>
                                        <div>Selection Tips</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 text-center mb-1 border-b border-gray-200 pb-2">
                                        <div className="font-medium">Leafy Greens</div>
                                        <div>1-3 days post-harvest</div>
                                        <div>Look for crisp, vibrant leaves without yellowing</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 text-center mb-1 border-b border-gray-200 pb-2 bg-green-50 p-1 rounded">
                                        <div className="font-medium">Tomatoes</div>
                                        <div>Vine-ripened</div>
                                        <div>Choose heavy for size with fragrant smell</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 text-center mb-1 border-b border-gray-200 pb-2">
                                        <div className="font-medium">Cruciferous Veg</div>
                                        <div>Fresh cut</div>
                                        <div>Tight florets, no yellowing or strong odor</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 text-center">
                                        <div className="font-medium">Berries</div>
                                        <div>Peak season</div>
                                        <div>Plump, uniform color, attached hulls</div>
                                    </div>
                                </div>

                                <p className="text-gray-700 mb-6">
                                    Research shows that proper selection can increase nutrient content by:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>30-50% for vitamin C in properly stored produce</li>
                                    <li>2-3x more polyphenols in organic vs conventional (in some studies)</li>
                                    <li>20-40% more omega-3s in pasture-raised eggs</li>
                                    <li>Higher antioxidant levels in local, seasonal produce</li>
                                </ul>
                            </section>

                            {/* Nutrient Pairing Strategies */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Scale className="w-8 h-8 text-green-600 mr-2" />
                                    Powerful Nutrient Pairings
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Certain food combinations dramatically increase nutrient absorption through synergistic effects:
                                </p>

                                <div className="space-y-4">
                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">Iron + Vitamin C</h3>
                                        <p className="text-gray-700 mb-2">
                                            Vitamin C can increase non-heme iron absorption by up to 300%. This is especially important for plant-based diets.
                                        </p>
                                        <p className="text-gray-700">
                                            <span className="font-semibold">Example:</span> Spinach salad with lemon juice dressing or bell peppers with lentils.
                                        </p>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">Fat + Fat-Soluble Vitamins</h3>
                                        <p className="text-gray-700 mb-2">
                                            Healthy fats increase absorption of vitamins A, D, E, and K by 3-4 times.
                                        </p>
                                        <p className="text-gray-700">
                                            <span className="font-semibold">Example:</span> Roasted carrots with olive oil or avocado in a kale salad.
                                        </p>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">Turmeric + Black Pepper</h3>
                                        <p className="text-gray-700 mb-2">
                                            Piperine in black pepper increases curcumin absorption by 2000%.
                                        </p>
                                        <p className="text-gray-700">
                                            <span className="font-semibold">Example:</span> Golden milk with a pinch of black pepper or curry dishes.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Cooking Equipment Impact */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Cooking Equipment and Nutrient Retention</h2>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Best Materials for Nutrient Preservation</h3>
                                        <ol className="list-decimal list-inside text-gray-700 space-y-1">
                                            <li><strong>Stainless steel:</strong> Neutral, doesn't react with foods</li>
                                            <li><strong>Cast iron:</strong> Can increase iron content (especially with acidic foods)</li>
                                            <li><strong>Glass:</strong> Inert, excellent for storage</li>
                                            <li><strong>Ceramic:</strong> Non-reactive cooking surface</li>
                                        </ol>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Materials to Avoid</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>Non-stick with scratches (can release toxins)</li>
                                            <li>Aluminum with acidic foods (can leach into food)</li>
                                            <li>Plastic containers for hot foods (endocrine disruptors)</li>
                                            <li>Copper without lining (can cause toxicity)</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Pro Tip:</h3>
                                    <p className="text-gray-700">
                                        Use wooden or silicone utensils to prevent scratching cookware surfaces. Scratches create grooves where bacteria can grow and may release unwanted particles into food.
                                    </p>
                                </div>
                            </section>

                            {/* Sample Meal Plan */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">3-Day Nutrient-Optimized Meal Plan</h2>

                                <div className="space-y-6">
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-green-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Day 1 (Maximized Nutrient Absorption)</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Breakfast</h4>
                                                <p className="text-gray-700">Steel-cut oats with walnuts, flaxseeds, and blueberries (fiber + omega-3 + antioxidants)</p>
                                            </div>
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Lunch</h4>
                                                <p className="text-gray-700">Spinach salad with chickpeas, red bell peppers, lemon-tahini dressing (iron + vitamin C + healthy fats)</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">Dinner</h4>
                                                <p className="text-gray-700">Grilled salmon with steamed broccoli and sweet potato (omega-3 + sulforaphane + vitamin A)</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-green-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Day 2 (Gut Health Focus)</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Breakfast</h4>
                                                <p className="text-gray-700">Kefir smoothie with banana, almond butter, and chia seeds (probiotics + prebiotics)</p>
                                            </div>
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Lunch</h4>
                                                <p className="text-gray-700">Kimchi fried rice with eggs and mixed vegetables (fermented foods + complete protein)</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">Dinner</h4>
                                                <p className="text-gray-700">Grass-fed beef stir-fry with asparagus and shiitake mushrooms (zinc + inulin + beta-glucans)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Transforming your cooking into a health-promoting practice doesn't require complicated techniques or expensive equipment. Small, informed changes in how you select, prepare, and combine ingredients can yield significant nutritional benefits.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    Remember that variety is crucial—no single cooking method is perfect for all foods. A mix of raw, lightly cooked, and fermented foods will provide the broadest spectrum of nutrients.
                                </p>

                                <div className="bg-green-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "Think of your kitchen as your personal wellness laboratory. Each meal is an opportunity to nourish your body at the cellular level. With knowledge and practice, you can turn everyday cooking into powerful preventative medicine."
                                    </p>
                                </div>
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
                                            Medically reviewed
                                        </a>{" "}
                                        by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            Dr. Emily Chen, RD
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600 mb-1">
                                        — Written by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            Chef Michael Rodriguez
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
                                <h3 className="text-sm font-bold text-green-800 uppercase tracking-wide mb-2">COOKING NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get nutrition-optimized recipes</h4>
                                <p className="text-gray-700 text-sm">
                                    Weekly meal plans, cooking techniques, and science-backed nutrition tips delivered to your inbox.
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

                        {/* Nutrient Retention Chart */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Nutrient Retention Guide</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span className="font-medium">Nutrient</span>
                                    <span className="font-medium">Best Preservation</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Vitamin C</span>
                                    <span className="text-green-600">Raw/Steamed</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Lycopene</span>
                                    <span className="text-green-600">Cooked</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>B Vitamins</span>
                                    <span className="text-green-600">Steamed</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Omega-3s</span>
                                    <span className="text-green-600">Raw/Low heat</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Polyphenols</span>
                                    <span className="text-green-600">Varied</span>
                                </div>
                            </div>
                        </div>

                        {/* Must-Have Kitchen Tools */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Essential Nutrition Tools</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Steamer basket (stainless steel)</span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>High-speed blender</span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Cast iron skillet</span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Glass storage containers</span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Digital food thermometer</span>
                                </li>
                            </ul>
                        </div>

                        {/* Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Further Reading</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-green-600 hover:underline">The Science of Nutrient Bioavailability</a>
                                </li>
                                <li>
                                    <a href="#" className="text-green-600 hover:underline">Seasonal Produce Guide</a>
                                </li>
                                <li>
                                    <a href="#" className="text-green-600 hover:underline">Fermentation at Home</a>
                                </li>
                                <li>
                                    <a href="#" className="text-green-600 hover:underline">Anti-Inflammatory Cooking</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}