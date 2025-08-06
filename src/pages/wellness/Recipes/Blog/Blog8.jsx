"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Clock, Check, List, Bookmark, Clock4, Layers, Zap, Thermometer, Box, ClipboardCheck, Star } from "lucide-react"

export default function MealPrepGuide() {
    const [email, setEmail] = useState("")
    const [activeTab, setActiveTab] = useState("Strategies")

    const handleEmailSubmit = (e) => {
        e.preventDefault()
        console.log("Email submitted:", email)
        setEmail("")
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const tabs = ["Strategies", "Tools", "Recipes", "Storage"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Managing Time and Meal Prep in Modern Cooking
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
                            <div className="flex items-center text-gray-500 mb-4">
                                <Calendar className="w-4 h-4 mr-1" />
                                <span className="text-sm">Updated on June 15, 2024</span>
                                <span className="mx-2">•</span>
                                <Clock className="w-4 h-4 mr-1" />
                                <span className="text-sm">7 min read</span>
                            </div>

                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                In today's fast-paced world, meal preparation has become an essential skill for maintaining a healthy diet while managing busy schedules. This comprehensive guide covers effective strategies for incorporating meal prep into your routine, including batch cooking techniques, ingredient preparation, smart storage solutions, and kitchen organization to save you time and reduce stress.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80"
                                    alt="Organized meal prep containers with healthy food"
                                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                                    style={{ maxHeight: '500px' }}
                                />
                            </div>

                            {/* Key Takeaways */}
                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
                                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                    <Star className="w-5 h-5 text-blue-600 mr-2" />
                                    Key Takeaways
                                </h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>Meal prep can save 5-7 hours per week on cooking and cleaning</li>
                                    <li>Proper planning reduces food waste by up to 30%</li>
                                    <li>Investing in quality storage containers extends food freshness</li>
                                    <li>Multi-component prep is more efficient than single-meal prep</li>
                                    <li>Strategic freezing can preserve meals for 1-3 months</li>
                                </ul>
                            </div>

                            {/* Why Meal Prep Matters */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Check className="w-8 h-8 text-blue-600 mr-2" />
                                    The Benefits of Meal Preparation
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    According to a <a href="#" className="text-blue-600 hover:underline">2024 study in the Journal of Nutrition and Health</a>, individuals who practice regular meal preparation experience:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>23% more vegetable consumption compared to non-planners</li>
                                    <li>Average savings of $120 per month on food costs</li>
                                    <li>Reduced likelihood of fast food consumption by 40%</li>
                                    <li>Lower stress levels around mealtimes</li>
                                    <li>Better portion control and nutritional balance</li>
                                </ul>

                                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Time Savings Breakdown</h3>
                                    <p className="text-gray-700">
                                        Research shows that dedicating 2-3 hours to meal prep on weekends can save:
                                    </p>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-3 text-center">
                                        <div className="bg-white p-3 rounded-lg shadow">
                                            <div className="text-blue-600 font-bold">45 min/day</div>
                                            <div className="text-sm text-gray-600">Cooking time</div>
                                        </div>
                                        <div className="bg-white p-3 rounded-lg shadow">
                                            <div className="text-blue-600 font-bold">30 min/day</div>
                                            <div className="text-sm text-gray-600">Cleaning time</div>
                                        </div>
                                        <div className="bg-white p-3 rounded-lg shadow">
                                            <div className="text-blue-600 font-bold">15 min/day</div>
                                            <div className="text-sm text-gray-600">Decision fatigue</div>
                                        </div>
                                        <div className="bg-white p-3 rounded-lg shadow">
                                            <div className="text-blue-600 font-bold">5.25 hrs/week</div>
                                            <div className="text-sm text-gray-600">Total savings</div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Meal Prep Strategies */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <List className="w-8 h-8 text-blue-600 mr-2" />
                                    Core Meal Prep Strategies
                                </h2>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4">1. The Batch Cooking Method</h3>
                                <p className="text-gray-700 mb-4">
                                    Batch cooking involves preparing large quantities of staple foods that can be mixed and matched throughout the week. This is different from preparing complete meals in advance, offering more flexibility.
                                </p>

                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Food Category</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Batch Prep Ideas</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Storage Duration</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Proteins</td>
                                                <td className="px-4 py-3">Grilled chicken, hard-boiled eggs, roasted turkey, baked tofu</td>
                                                <td className="px-4 py-3 whitespace-nowrap">3-4 days (freeze for longer)</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Grains</td>
                                                <td className="px-4 py-3">Quinoa, brown rice, farro, whole wheat pasta</td>
                                                <td className="px-4 py-3 whitespace-nowrap">5 days (freezes well)</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Vegetables</td>
                                                <td className="px-4 py-3">Roasted veggies, spiralized zucchini, chopped salad greens</td>
                                                <td className="px-4 py-3 whitespace-nowrap">2-5 days (varies by type)</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Sauces/Dressings</td>
                                                <td className="px-4 py-3">Pesto, vinaigrettes, marinara, curry paste</td>
                                                <td className="px-4 py-3 whitespace-nowrap">1-2 weeks</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4">2. The Component Prep System</h3>
                                <p className="text-gray-700 mb-4">
                                    Instead of prepping complete meals, prepare individual components that can be combined in different ways. This prevents flavor fatigue and allows for more creativity during the week.
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h4 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">1</span>
                                            Protein Components
                                        </h4>
                                        <p className="text-gray-700">
                                            Grill or bake 2-3 protein options (chicken, fish, tofu). Portion into containers with space for sides. Marinate some, leave others plain for versatility.
                                        </p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h4 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">2</span>
                                            Vegetable Prep
                                        </h4>
                                        <p className="text-gray-700">
                                            Wash, chop, and store vegetables at different readiness levels - some raw for salads, some pre-roasted, others blanched for quick cooking.
                                        </p>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4">3. The Two-Hour Weekly Power Prep</h3>
                                <p className="text-gray-700 mb-4">
                                    For those with limited time, this focused approach maximizes efficiency with minimal time investment:
                                </p>

                                <div className="border border-gray-200 rounded-lg overflow-hidden mb-6">
                                    <div className="bg-blue-600 px-4 py-2">
                                        <h4 className="font-bold text-white">Two-Hour Power Prep Schedule</h4>
                                    </div>
                                    <div className="p-4">
                                        <div className="grid grid-cols-5 gap-2 text-center font-medium mb-2 border-b pb-2">
                                            <div>Time</div>
                                            <div className="col-span-4">Activity</div>
                                        </div>
                                        <div className="grid grid-cols-5 gap-2 text-center mb-1">
                                            <div className="font-medium">0:00-0:15</div>
                                            <div className="col-span-4 text-left">Preheat oven, wash produce, gather containers</div>
                                        </div>
                                        <div className="grid grid-cols-5 gap-2 text-center mb-1 bg-blue-50 p-1 rounded">
                                            <div className="font-medium">0:15-0:30</div>
                                            <div className="col-span-4 text-left">Chop vegetables, start grains in rice cooker</div>
                                        </div>
                                        <div className="grid grid-cols-5 gap-2 text-center mb-1">
                                            <div className="font-medium">0:30-0:50</div>
                                            <div className="col-span-4 text-left">Roast vegetables and proteins in oven</div>
                                        </div>
                                        <div className="grid grid-cols-5 gap-2 text-center mb-1 bg-blue-50 p-1 rounded">
                                            <div className="font-medium">0:50-1:20</div>
                                            <div className="col-span-4 text-left">Prepare sauces, dressings, and snacks</div>
                                        </div>
                                        <div className="grid grid-cols-5 gap-2 text-center">
                                            <div className="font-medium">1:20-2:00</div>
                                            <div className="col-span-4 text-left">Portion into containers, clean kitchen</div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Essential Tools */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Layers className="w-8 h-8 text-blue-600 mr-2" />
                                    Essential Meal Prep Tools
                                </h2>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Storage Solutions</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li><strong>Glass containers</strong> (various sizes) - Microwave safe and don't retain odors</li>
                                            <li><strong>Mason jars</strong> - Perfect for salads and layered meals</li>
                                            <li><strong>Freezer bags</strong> - Space-saving for proteins and bulk items</li>
                                            <li><strong>Silicone molds</strong> - For portioning sauces and dressings</li>
                                            <li><strong>Vacuum sealer</strong> - Extends freshness for expensive ingredients</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Time-Saving Appliances</h3>
                                        <ol className="list-decimal list-inside text-gray-700 space-y-2">
                                            <li><strong>Instant Pot</strong> - Cooks beans from dry in 45 minutes</li>
                                            <li><strong>Air fryer</strong> - Crisps food faster than conventional oven</li>
                                            <li><strong>Food processor</strong> - Chops vegetables in seconds</li>
                                            <li><strong>Immersion blender</strong> - Makes quick soups and sauces</li>
                                            <li><strong>Slow cooker</strong> - Cook while you work</li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Pro Tip:</h3>
                                    <p className="text-gray-700">
                                        Invest in a label maker or use masking tape and marker to date everything. This prevents "mystery container syndrome" and reduces food waste.
                                    </p>
                                </div>
                            </section>

                            {/* Sample Meal Plan */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">5-Day Meal Prep Blueprint</h2>

                                <div className="space-y-6">
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Prep Day (Sunday)</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Proteins</h4>
                                                <p className="text-gray-700">- 4 chicken breasts (2 plain, 2 with lemon-herb marinade)<br />
                                                    - 1 lb ground turkey cooked with taco seasoning<br />
                                                    - 12 hard-boiled eggs</p>
                                            </div>
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Grains/Carbs</h4>
                                                <p className="text-gray-700">- 3 cups cooked quinoa<br />
                                                    - 2 cups brown rice<br />
                                                    - 1 lb roasted sweet potatoes</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">Vegetables</h4>
                                                <p className="text-gray-700">- 2 heads romaine washed and chopped<br />
                                                    - 2 lbs mixed roasted vegetables (bell peppers, zucchini, eggplant)<br />
                                                    - 1 lb blanched broccoli florets</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Assembly Guide</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                                                <div className="border-r border-gray-200 pr-2">
                                                    <h4 className="font-medium text-gray-900 text-center">Monday</h4>
                                                    <p className="text-sm text-gray-700">Quinoa bowl with chicken, roasted veggies, tahini dressing</p>
                                                </div>
                                                <div className="border-r border-gray-200 pr-2">
                                                    <h4 className="font-medium text-gray-900 text-center">Tuesday</h4>
                                                    <p className="text-sm text-gray-700">Taco salad with ground turkey, romaine, avocado</p>
                                                </div>
                                                <div className="border-r border-gray-200 pr-2">
                                                    <h4 className="font-medium text-gray-900 text-center">Wednesday</h4>
                                                    <p className="text-sm text-gray-700">Stir-fry with broccoli, chicken, rice (add fresh ginger)</p>
                                                </div>
                                                <div className="border-r border-gray-200 pr-2">
                                                    <h4 className="font-medium text-gray-900 text-center">Thursday</h4>
                                                    <p className="text-sm text-gray-700">Grain bowl with sweet potatoes, eggs, greens</p>
                                                </div>
                                                <div>
                                                    <h4 className="font-medium text-gray-900 text-center">Friday</h4>
                                                    <p className="text-sm text-gray-700">Leftover buffet - combine remaining components</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Storage Guidelines */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Thermometer className="w-8 h-8 text-blue-600 mr-2" />
                                    Food Storage Guidelines
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Proper storage is crucial for food safety and maximizing freshness. Follow these evidence-based guidelines:
                                </p>

                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Food Category</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fridge (Days)</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Freezer (Months)</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Best Storage Method</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 font-medium text-gray-900">Cooked meats</td>
                                                <td className="px-4 py-3">3-4</td>
                                                <td className="px-4 py-3">2-3</td>
                                                <td className="px-4 py-3">Airtight container with juices</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 font-medium text-gray-900">Cooked grains</td>
                                                <td className="px-4 py-3">5</td>
                                                <td className="px-4 py-3">3</td>
                                                <td className="px-4 py-3">Portion in freezer bags, flatten</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 font-medium text-gray-900">Roasted vegetables</td>
                                                <td className="px-4 py-3">4-5</td>
                                                <td className="px-4 py-3">1-2</td>
                                                <td className="px-4 py-3">Parchment between layers</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 font-medium text-gray-900">Soups/stews</td>
                                                <td className="px-4 py-3">3-4</td>
                                                <td className="px-4 py-3">4-6</td>
                                                <td className="px-4 py-3">Leave 1" headspace in containers</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Freezing Tips</h3>
                                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                                        <li>Cool foods completely before freezing to prevent ice crystals</li>
                                        <li>Use the "first in, first out" system - date all items</li>
                                        <li>Freeze in flat layers for faster thawing</li>
                                        <li>Leave appropriate headspace for liquids to expand</li>
                                        <li>Thaw overnight in refrigerator, not at room temperature</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Overcoming Challenges */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Overcoming Common Meal Prep Challenges</h2>

                                <div className="space-y-4">
                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">Lack of Time</h3>
                                        <p className="text-gray-700 mb-2">
                                            Many people abandon meal prep because they try to do too much at once.
                                        </p>
                                        <p className="text-gray-700">
                                            <span className="font-semibold">Solution:</span> Start with just 1 hour of prep focusing on 2-3 components. Use passive cooking methods (slow cooker, oven roasting) while doing other tasks.
                                        </p>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">Food Fatigue</h3>
                                        <p className="text-gray-700 mb-2">
                                            Eating the same meals repeatedly leads to boredom and abandonment of the system.
                                        </p>
                                        <p className="text-gray-700">
                                            <span className="font-semibold">Solution:</span> Prepare versatile bases (like plain grains and proteins) and add different sauces/seasonings each day. Keep a "flavor boosters" drawer with nuts, seeds, and dried fruit.
                                        </p>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">Storage Space Issues</h3>
                                        <p className="text-gray-700 mb-2">
                                            Small kitchens or shared refrigerators can limit meal prep capacity.
                                        </p>
                                        <p className="text-gray-700">
                                            <span className="font-semibold">Solution:</span> Use stackable containers, under-shelf baskets, and door organizers. Consider shelf-stable prep (overnight oats, mason jar salads) that don't require fridge space.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Making Meal Prep Sustainable</h2>

                                <p className="text-gray-700 mb-4">
                                    The key to successful meal preparation is developing a system that works for your lifestyle. Start small, focus on just a few meals per week, and gradually build your repertoire. Remember that some prep is better than none - even preparing just breakfasts or lunches can make a significant difference in your weekly routine.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    Track your successes and challenges for the first month. Note which meals held up best, which containers worked well, and how much time you actually saved. Use this data to refine your approach.
                                </p>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "Meal prep isn't about perfection - it's about progress. Even saving 15 minutes on busy weeknights can reduce stress and make healthy eating more accessible."
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
                                            Expert reviewed
                                        </a>{" "}
                                        by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            Chef Maria Rodriguez
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600 mb-1">
                                        — Written by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            David Thompson
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
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get weekly meal plans + prep tips</h4>
                                <p className="text-gray-700 text-sm">
                                    Time-saving strategies, seasonal guides, and kitchen efficiency hacks.
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
                                We respect your{" "}
                                <a href="#" className="text-blue-600 hover:underline">
                                    privacy
                                </a>
                            </p>
                        </div>

                        {/* Prep Time Chart */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Prep Time Cheat Sheet</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span className="font-medium">Task</span>
                                    <span className="font-medium">Time Saved</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Pre-chopping veggies</span>
                                    <span className="text-blue-600">10 min/day</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Batch cooking grains</span>
                                    <span className="text-blue-600">20 min/use</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Pre-marinating proteins</span>
                                    <span className="text-blue-600">15 min/meal</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Portioned snacks</span>
                                    <span className="text-blue-600">5 min/snack</span>
                                </div>
                            </div>
                        </div>

                        {/* Popular Guides */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Related Guides</h3>
                            <div className="space-y-4">
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80" alt="Kitchen organization" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Kitchen Organization for Efficiency</h4>
                                            <p className="text-sm text-gray-600">5 min read</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80" alt="Healthy salads" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Salad Jars That Last All Week</h4>
                                            <p className="text-sm text-gray-600">8 min read</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Freezer Inventory */}
                        <div className="bg-gray-50 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                <Box className="w-5 h-5 mr-2 text-blue-600" />
                                Freezer Inventory Template
                            </h3>
                            <p className="text-gray-700 text-sm mb-3">
                                Track frozen meals with this simple system:
                            </p>
                            <div className="bg-white p-3 rounded border border-gray-200">
                                <div className="grid grid-cols-3 gap-2 text-center text-xs font-medium mb-1">
                                    <div>Item</div>
                                    <div>Date</div>
                                    <div>Qty</div>
                                </div>
                                <div className="grid grid-cols-3 gap-2 text-center text-xs mb-1">
                                    <div>Chili</div>
                                    <div>6/10</div>
                                    <div>3</div>
                                </div>
                                <div className="grid grid-cols-3 gap-2 text-center text-xs mb-1">
                                    <div>Soup</div>
                                    <div>6/5</div>
                                    <div>2</div>
                                </div>
                                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                                    <div>Muffins</div>
                                    <div>5/28</div>
                                    <div>6</div>
                                </div>
                            </div>
                            <button className="mt-3 w-full bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-2 px-4 rounded-lg transition-colors duration-200 text-sm">
                                Download Printable Template
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}