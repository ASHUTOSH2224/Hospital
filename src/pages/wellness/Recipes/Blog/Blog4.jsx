"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Clock, Check, Utensils, BookOpen, ShoppingBasket, Thermometer, AlertTriangle, Heart, TrendingUp, Save, ChevronDown } from "lucide-react"

export default function MealPrepGuideBeginners() {
    const [email, setEmail] = useState("")
    const [activeTab, setActiveTab] = useState("Basics")
    const [expandedDay, setExpandedDay] = useState(null)

    const handleEmailSubmit = (e) => {
        e.preventDefault()
        console.log("Email submitted:", email)
        setEmail("")
    }

    const toggleDayExpand = (day) => {
        setExpandedDay(expandedDay === day ? null : day)
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const tabs = ["Basics", "Planning", "Recipes", "Storage"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                A Beginner's Guide to Meal Prep: Save Time & Eat Healthy
                            </h1>

                            {/* Navigation Tabs */}
                            <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-200">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${activeTab === tab
                                            ? "border-blue-500 text-blue-600"
                                            : "border-transparent text-gray-600 hover:text-gray-900"
                                            }`}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>

                            {/* Date and Intro */}
                            <div className="flex items-center text-gray-500 mb-4 gap-4">
                                <div className="flex items-center">
                                    <Calendar className="w-4 h-4 mr-1" />
                                    <span className="text-sm">Updated on June 15, 2024</span>
                                </div>
                                <div className="flex items-center">
                                    <Clock className="w-4 h-4 mr-1" />
                                    <span className="text-sm">12 min read</span>
                                </div>
                                <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">Beginner</span>
                            </div>

                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                Meal prepping is an excellent way to save time, reduce stress, and maintain healthy eating habits throughout your busy week. This comprehensive guide will walk you through everything from basic principles to advanced techniques, helping you create a meal prep routine that fits your lifestyle and nutritional needs.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&h=500&fit=crop"
                                    alt="Meal prep containers with healthy food"
                                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                                    style={{ maxHeight: '500px' }}
                                />
                            </div>

                            {/* Key Takeaways */}
                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
                                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                    <Check className="w-5 h-5 text-blue-600 mr-2" />
                                    Key Takeaways
                                </h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>Meal prepping can save 4+ hours per week and reduce food waste by up to 30%</li>
                                    <li>Start with just 1-2 prepped meals per week to build the habit</li>
                                    <li>Invest in quality containers that are microwave and dishwasher safe</li>
                                    <li>Proper food storage extends freshness and prevents foodborne illness</li>
                                    <li>Batch cooking and ingredient prep are two effective approaches</li>
                                </ul>
                            </div>

                            {/* Why Meal Prep Matters */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Utensils className="w-8 h-8 text-blue-600 mr-2" />
                                    Why Meal Prep Matters
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    According to a <a href="#" className="text-blue-600 hover:underline">2023 study published in the American Journal of Lifestyle Medicine</a>, individuals who meal prep consistently:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>Save an average of 4.2 hours per week on food preparation</li>
                                    <li>Consume 3.5 more servings of vegetables weekly</li>
                                    <li>Reduce food waste by 28-32%</li>
                                    <li>Spend 18% less on food overall</li>
                                    <li>Report higher diet satisfaction and less stress</li>
                                </ul>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                                            <TrendingUp className="w-6 h-6 text-blue-600 mr-2" />
                                            Time Savings
                                        </h3>
                                        <p className="text-gray-700">
                                            Preparing multiple meals at once eliminates daily cooking time. Just 2-3 hours of weekly prep can save you 30+ minutes each day.
                                        </p>
                                    </div>
                                    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                                            <Heart className="w-6 h-6 text-blue-600 mr-2" />
                                            Health Benefits
                                        </h3>
                                        <p className="text-gray-700">
                                            Having healthy meals ready reduces impulse eating and helps maintain balanced nutrition throughout your week.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Getting Started */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Getting Started with Meal Prep</h2>

                                <p className="text-gray-700 mb-6">
                                    Meal prep doesn't have to be overwhelming. Follow these steps to begin your journey:
                                </p>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex-shrink-0 flex items-center justify-center font-bold">1</div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">Choose Your Approach</h3>
                                            <p className="text-gray-700 mb-2">
                                                There are several meal prep methods to consider:
                                            </p>
                                            <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                                                <li><strong>Batch Cooking:</strong> Prepare complete meals in large quantities</li>
                                                <li><strong>Ingredient Prep:</strong> Wash, chop, and portion ingredients for quick assembly</li>
                                                <li><strong>Freezer Meals:</strong> Make meals designed to be frozen and reheated later</li>
                                                <li><strong>Portion Prep:</strong> Cook proteins and grains to mix and match through the week</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex-shrink-0 flex items-center justify-center font-bold">2</div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">Gather Essential Tools</h3>
                                            <p className="text-gray-700 mb-2">
                                                Having the right equipment makes meal prep easier:
                                            </p>
                                            <div className="grid sm:grid-cols-2 gap-4">
                                                <div className="bg-gray-50 p-3 rounded-lg">
                                                    <h4 className="font-bold text-gray-900 flex items-center">
                                                        <Check className="w-4 h-4 text-blue-600 mr-2" />
                                                        Containers
                                                    </h4>
                                                    <p className="text-gray-700 text-sm">Glass or BPA-free plastic in various sizes</p>
                                                </div>
                                                <div className="bg-gray-50 p-3 rounded-lg">
                                                    <h4 className="font-bold text-gray-900 flex items-center">
                                                        <Check className="w-4 h-4 text-blue-600 mr-2" />
                                                        Sharp Knives
                                                    </h4>
                                                    <p className="text-gray-700 text-sm">Chef's knife, paring knife, serrated knife</p>
                                                </div>
                                                <div className="bg-gray-50 p-3 rounded-lg">
                                                    <h4 className="font-bold text-gray-900 flex items-center">
                                                        <Check className="w-4 h-4 text-blue-600 mr-2" />
                                                        Cutting Boards
                                                    </h4>
                                                    <p className="text-gray-700 text-sm">At least two to prevent cross-contamination</p>
                                                </div>
                                                <div className="bg-gray-50 p-3 rounded-lg">
                                                    <h4 className="font-bold text-gray-900 flex items-center">
                                                        <Check className="w-4 h-4 text-blue-600 mr-2" />
                                                        Measuring Tools
                                                    </h4>
                                                    <p className="text-gray-700 text-sm">Cups, spoons, and kitchen scale</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex-shrink-0 flex items-center justify-center font-bold">3</div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">Plan Your First Week</h3>
                                            <p className="text-gray-700 mb-2">
                                                Start small with these beginner-friendly guidelines:
                                            </p>
                                            <div className="overflow-x-auto">
                                                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                                    <thead className="bg-gray-50">
                                                        <tr>
                                                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Day</th>
                                                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prep Level</th>
                                                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time Commitment</th>
                                                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Meal Ideas</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-gray-200">
                                                        <tr>
                                                            <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Monday</td>
                                                            <td className="px-4 py-3 whitespace-nowrap">Breakfast only</td>
                                                            <td className="px-4 py-3 whitespace-nowrap">30 minutes</td>
                                                            <td className="px-4 py-3">Overnight oats, egg muffins</td>
                                                        </tr>
                                                        <tr className="bg-gray-50">
                                                            <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Wednesday</td>
                                                            <td className="px-4 py-3 whitespace-nowrap">Breakfast + Lunch</td>
                                                            <td className="px-4 py-3 whitespace-nowrap">1 hour</td>
                                                            <td className="px-4 py-3">Smoothie packs, grain bowls</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Friday</td>
                                                            <td className="px-4 py-3 whitespace-nowrap">All meals</td>
                                                            <td className="px-4 py-3 whitespace-nowrap">2 hours</td>
                                                            <td className="px-4 py-3">Full meal prep day</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Sample Meal Plan */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">5-Day Beginner Meal Plan</h2>

                                <p className="text-gray-700 mb-6">
                                    This balanced plan includes simple recipes that store well and reheat easily. Each day provides approximately 1,800-2,000 calories with balanced macros.
                                </p>

                                <div className="space-y-4">
                                    {[1, 2, 3, 4, 5].map((day) => (
                                        <div key={day} className="border border-gray-200 rounded-lg overflow-hidden">
                                            <button
                                                onClick={() => toggleDayExpand(day)}
                                                className="w-full flex justify-between items-center bg-blue-600 px-4 py-3 text-white font-bold"
                                            >
                                                <span>Day {day} Meal Plan</span>
                                                <ChevronDown className={`w-5 h-5 transition-transform ${expandedDay === day ? 'transform rotate-180' : ''}`} />
                                            </button>
                                            {expandedDay === day && (
                                                <div className="p-4 bg-white">
                                                    <div className="mb-4">
                                                        <h4 className="font-medium text-gray-900 mb-2">Breakfast</h4>
                                                        <p className="text-gray-700">Greek yogurt parfait with granola and mixed berries (prep time: 5 minutes)</p>
                                                    </div>
                                                    <div className="mb-4">
                                                        <h4 className="font-medium text-gray-900 mb-2">Lunch</h4>
                                                        <p className="text-gray-700">Quinoa salad with chickpeas, cucumber, cherry tomatoes, and lemon-tahini dressing (prep time: 15 minutes)</p>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-medium text-gray-900 mb-2">Dinner</h4>
                                                        <p className="text-gray-700">Baked chicken thighs with roasted sweet potatoes and steamed broccoli (prep time: 25 minutes)</p>
                                                    </div>
                                                    <div className="mt-4 pt-4 border-t border-gray-200">
                                                        <h4 className="font-medium text-gray-900 mb-2">Prep Notes</h4>
                                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                                            <li>Cook quinoa and chicken in bulk for multiple days</li>
                                                            <li>Chop all vegetables at once and store in airtight containers</li>
                                                            <li>Assemble yogurt parfaits in mason jars for grab-and-go convenience</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Food Storage Guidelines */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Food Storage Guidelines</h2>

                                <p className="text-gray-700 mb-4">
                                    Proper storage is crucial for food safety and maintaining quality. Follow these guidelines to maximize freshness:
                                </p>

                                <div className="overflow-x-auto mb-6">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Food Type</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fridge (Days)</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Freezer (Months)</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Storage Tips</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 font-medium text-gray-900">Cooked Meat/Poultry</td>
                                                <td className="px-4 py-3">3-4</td>
                                                <td className="px-4 py-3">2-6</td>
                                                <td className="px-4 py-3">Store in airtight containers, separate from vegetables</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 font-medium text-gray-900">Cooked Grains</td>
                                                <td className="px-4 py-3">4-6</td>
                                                <td className="px-4 py-3">6</td>
                                                <td className="px-4 py-3">Cool completely before storing to prevent moisture</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 font-medium text-gray-900">Soups/Stews</td>
                                                <td className="px-4 py-3">3-4</td>
                                                <td className="px-4 py-3">2-3</td>
                                                <td className="px-4 py-3">Leave space at top of container for expansion</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 font-medium text-gray-900">Cut Vegetables</td>
                                                <td className="px-4 py-3">3-5</td>
                                                <td className="px-4 py-3">8-12</td>
                                                <td className="px-4 py-3">Blanch before freezing for best texture</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                                        <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2" />
                                        Food Safety Reminder
                                    </h3>
                                    <p className="text-gray-700">
                                        Always reheat food to an internal temperature of 165°F (74°C) and never leave prepared food at room temperature for more than 2 hours.
                                    </p>
                                </div>
                            </section>

                            {/* Common Mistakes */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Meal Prep Mistakes to Avoid</h2>

                                <div className="space-y-6">
                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">1. Overcomplicating Recipes</h3>
                                        <p className="text-gray-700 mb-2">
                                            Beginners often choose elaborate recipes that take too much time and create frustration.
                                        </p>
                                        <p className="text-gray-700">
                                            <span className="font-semibold">Solution:</span> Start with simple 5-ingredient meals and gradually increase complexity as you gain confidence.
                                        </p>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">2. Not Considering Texture Changes</h3>
                                        <p className="text-gray-700 mb-2">
                                            Some foods don't reheat well (like crispy foods or delicate greens).
                                        </p>
                                        <p className="text-gray-700">
                                            <span className="font-semibold">Solution:</span> Prep components separately and assemble before eating, or choose recipes known to reheat well.
                                        </p>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">3. Lack of Variety</h3>
                                        <p className="text-gray-700 mb-2">
                                            Eating the same meal multiple days in a row can lead to burnout.
                                        </p>
                                        <p className="text-gray-700">
                                            <span className="font-semibold">Solution:</span> Prepare base ingredients that can be mixed and matched with different sauces and sides.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Meal prepping is a skill that improves with practice. Don't be discouraged if your first attempts aren't perfect—each week you'll learn what works best for your schedule, preferences, and cooking style.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    Remember that meal prep should make your life easier, not more stressful. Even preparing just a few components in advance can significantly reduce your daily kitchen time.
                                </p>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "Consistency beats perfection when it comes to meal prep. Focus on progress, not perfection, and celebrate the small wins along your journey to healthier eating habits."
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
                                            Jessica Martinez
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
                        <div className="bg-blue-50 rounded-lg p-6 mb-8">
                            <div className="mb-4">
                                <h3 className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-2">MEAL PREP NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get weekly meal plans & recipes</h4>
                                <p className="text-gray-700 text-sm">
                                    Time-saving strategies, shopping lists, and nutrition tips delivered weekly.
                                </p>
                            </div>

                            <form onSubmit={handleEmailSubmit} className="space-y-4">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200"
                                >
                                    SUBSCRIBE
                                </button>
                            </form>

                            <p className="text-xs text-gray-600 mt-3">
                                Your{" "}
                                <a href="#" className="text-blue-600 hover:underline">
                                    privacy
                                </a>{" "}
                                is important to us
                            </p>
                        </div>

                        {/* Shopping List */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                <ShoppingBasket className="w-5 h-5 text-blue-600 mr-2" />
                                Basic Meal Prep Shopping List
                            </h3>
                            <div className="space-y-3">
                                <div>
                                    <h4 className="font-medium text-gray-900 mb-2">Proteins</h4>
                                    <ul className="text-gray-700 text-sm space-y-1">
                                        <li className="flex items-center">
                                            <Check className="w-3 h-3 text-green-500 mr-2" />
                                            Chicken breast/thighs
                                        </li>
                                        <li className="flex items-center">
                                            <Check className="w-3 h-3 text-green-500 mr-2" />
                                            Ground turkey or lean beef
                                        </li>
                                        <li className="flex items-center">
                                            <Check className="w-3 h-3 text-green-500 mr-2" />
                                            Eggs
                                        </li>
                                        <li className="flex items-center">
                                            <Check className="w-3 h-3 text-green-500 mr-2" />
                                            Greek yogurt
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900 mb-2">Vegetables</h4>
                                    <ul className="text-gray-700 text-sm space-y-1">
                                        <li className="flex items-center">
                                            <Check className="w-3 h-3 text-green-500 mr-2" />
                                            Broccoli
                                        </li>
                                        <li className="flex items-center">
                                            <Check className="w-3 h-3 text-green-500 mr-2" />
                                            Bell peppers
                                        </li>
                                        <li className="flex items-center">
                                            <Check className="w-3 h-3 text-green-500 mr-2" />
                                            Spinach/kale
                                        </li>
                                        <li className="flex items-center">
                                            <Check className="w-3 h-3 text-green-500 mr-2" />
                                            Carrots
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900 mb-2">Pantry Staples</h4>
                                    <ul className="text-gray-700 text-sm space-y-1">
                                        <li className="flex items-center">
                                            <Check className="w-3 h-3 text-green-500 mr-2" />
                                            Quinoa/brown rice
                                        </li>
                                        <li className="flex items-center">
                                            <Check className="w-3 h-3 text-green-500 mr-2" />
                                            Canned beans
                                        </li>
                                        <li className="flex items-center">
                                            <Check className="w-3 h-3 text-green-500 mr-2" />
                                            Olive oil
                                        </li>
                                        <li className="flex items-center">
                                            <Check className="w-3 h-3 text-green-500 mr-2" />
                                            Spices & herbs
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Time-Saving Tips */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                <Save className="w-5 h-5 text-blue-600 mr-2" />
                                Time-Saving Tips
                            </h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2">
                                    <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex-shrink-0 flex items-center justify-center">1</span>
                                    <span className="text-gray-700">Use frozen vegetables for quicker prep</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex-shrink-0 flex items-center justify-center">2</span>
                                    <span className="text-gray-700">Cook grains in large batches and freeze portions</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex-shrink-0 flex items-center justify-center">3</span>
                                    <span className="text-gray-700">Invest in a slow cooker or Instant Pot</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex-shrink-0 flex items-center justify-center">4</span>
                                    <span className="text-gray-700">Clean as you cook to minimize post-prep mess</span>
                                </li>
                            </ul>
                        </div>

                        {/* Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                <BookOpen className="w-5 h-5 text-blue-600 mr-2" />
                                Further Reading
                            </h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">The Science of Meal Timing</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Budget-Friendly Meal Prep</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Vegetarian Meal Prep Guide</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Meal Prep for Weight Loss</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}