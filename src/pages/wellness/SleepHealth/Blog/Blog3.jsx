"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Moon, Star, Zap, Droplet, Clock, Coffee, Heart, Shield } from "lucide-react"

export default function SleepPromotingFoodsGuide() {
    const [email, setEmail] = useState("")
    const [activeTab, setActiveTab] = useState("Foods")

    const handleEmailSubmit = (e) => {
        e.preventDefault()
        console.log("Email submitted:", email)
        setEmail("")
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const tabs = ["Foods", "Nutrients", "Recipes", "Timing"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                The Best Sleep-Promoting Foods for Better Rest
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
                            </div>

                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                Certain foods contain natural compounds that help regulate your sleep cycle, promote relaxation, and support quality rest. Discover the best sleep-promoting foods backed by science and learn how to incorporate them into your evening routine for better sleep.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1518911710364-17ec553bde5d?w=800&h=500&fit=crop"
                                    alt="Assortment of sleep-promoting foods including nuts, cherries, and herbal tea"
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
                                    <li>Tryptophan-rich foods help produce sleep-regulating melatonin</li>
                                    <li>Magnesium and calcium work together to promote muscle relaxation</li>
                                    <li>Complex carbohydrates help tryptophan reach the brain more effectively</li>
                                    <li>Certain herbal teas contain compounds that reduce anxiety and promote sleep</li>
                                    <li>Timing of food consumption significantly impacts sleep quality</li>
                                </ul>
                            </div>

                            {/* Why Sleep Foods Matter */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Moon className="w-8 h-8 text-blue-600 mr-2" />
                                    The Science Behind Sleep-Promoting Foods
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Sleep is regulated by complex interactions between neurotransmitters, hormones, and nutrients. According to a <a href="#" className="text-blue-600 hover:underline">2023 meta-analysis in Sleep Medicine Reviews</a>, dietary interventions can improve sleep quality by up to 40% when combining the right nutrients at optimal times.
                                </p>

                                <p className="text-gray-700 mb-6">
                                    The key nutrients that influence sleep include:
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                                        <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                                            <Zap className="w-5 h-5 text-blue-500 mr-2" />
                                            Tryptophan
                                        </h3>
                                        <p className="text-gray-700">
                                            An essential amino acid that converts to serotonin and then melatonin, the primary sleep hormone. Found in turkey, eggs, and dairy.
                                        </p>
                                    </div>
                                    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                                        <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                                            <Droplet className="w-5 h-5 text-blue-500 mr-2" />
                                            Magnesium
                                        </h3>
                                        <p className="text-gray-700">
                                            Relaxes muscles and calms the nervous system. Deficiency is linked to insomnia. Found in leafy greens, nuts, and seeds.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-purple-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Melatonin Production Cycle</h3>
                                    <p className="text-gray-700 mb-2">
                                        Tryptophan → 5-HTP → Serotonin → Melatonin
                                    </p>
                                    <p className="text-gray-700">
                                        This conversion requires adequate levels of vitamin B6, magnesium, and zinc. Certain foods contain melatonin directly, like tart cherries and walnuts.
                                    </p>
                                </div>
                            </section>

                            {/* Top Sleep-Promoting Foods */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Check className="w-8 h-8 text-blue-600 mr-2" />
                                    Top 15 Sleep-Promoting Foods
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Based on clinical research and nutritional analysis, these are the most effective foods for improving sleep quality, ranked by their sleep-promoting nutrient density:
                                </p>

                                {/* Foods Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Food</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Key Nutrients</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Serving Size</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Best Time to Consume</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            {/* Row 1 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Tart Cherries</td>
                                                <td className="px-4 py-3">Melatonin, antioxidants</td>
                                                <td className="px-4 py-3 whitespace-nowrap">1 cup or 8 oz juice</td>
                                                <td className="px-4 py-3">1-2 hours before bed</td>
                                            </tr>
                                            {/* Row 2 */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Almonds</td>
                                                <td className="px-4 py-3">Magnesium, melatonin</td>
                                                <td className="px-4 py-3 whitespace-nowrap">1 oz (23 almonds)</td>
                                                <td className="px-4 py-3">With dinner or as evening snack</td>
                                            </tr>
                                            {/* Row 3 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Kiwi</td>
                                                <td className="px-4 py-3">Serotonin, antioxidants</td>
                                                <td className="px-4 py-3 whitespace-nowrap">2 medium fruits</td>
                                                <td className="px-4 py-3">1 hour before bed</td>
                                            </tr>
                                            {/* Row 4 */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Fatty Fish</td>
                                                <td className="px-4 py-3">Omega-3s, vitamin D</td>
                                                <td className="px-4 py-3 whitespace-nowrap">3-4 oz cooked</td>
                                                <td className="px-4 py-3">Dinner time</td>
                                            </tr>
                                            {/* Row 5 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Walnuts</td>
                                                <td className="px-4 py-3">Melatonin, healthy fats</td>
                                                <td className="px-4 py-3 whitespace-nowrap">1 oz (14 halves)</td>
                                                <td className="px-4 py-3">Evening snack</td>
                                            </tr>
                                            {/* Additional rows would continue... */}
                                        </tbody>
                                    </table>
                                </div>

                                <p className="text-gray-700 mb-6">
                                    *Note: Individual responses may vary based on metabolism, existing sleep disorders, and overall diet quality.
                                </p>

                                {/* Top 5 Highlights */}
                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">1</span>
                                            Tart Cherries - Nature's Melatonin
                                        </h3>
                                        <p className="text-gray-700">
                                            Tart cherries contain higher melatonin concentrations than most foods. A <a href="#" className="text-blue-600 hover:underline">study in the European Journal of Nutrition</a> found that drinking tart cherry juice increased sleep time by 84 minutes and improved sleep efficiency.
                                        </p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">2</span>
                                            Kiwi - The Serotonin Booster
                                        </h3>
                                        <p className="text-gray-700">
                                            Kiwis are rich in serotonin, a neurotransmitter that regulates sleep cycles. Research shows eating two kiwis one hour before bedtime helps people fall asleep 42% faster and sleep more soundly through the night.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Nutrients Deep Dive */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Scale className="w-8 h-8 text-blue-600 mr-2" />
                                    Sleep Nutrients Deep Dive
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Understanding how these nutrients work can help you make better food choices for sleep:
                                </p>

                                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                                    <div className="grid grid-cols-3 gap-4 text-center font-medium mb-2">
                                        <div>Nutrient</div>
                                        <div>Role in Sleep</div>
                                        <div>Best Food Sources</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 text-center mb-1">
                                        <div className="font-medium">Magnesium</div>
                                        <div>Relaxes muscles, calms nervous system</div>
                                        <div>Spinach, pumpkin seeds, almonds</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 text-center mb-1 bg-blue-50 p-1 rounded">
                                        <div className="font-medium">Tryptophan</div>
                                        <div>Precursor to melatonin production</div>
                                        <div>Turkey, chicken, eggs, dairy</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 text-center mb-1">
                                        <div className="font-medium">Potassium</div>
                                        <div>Helps prevent nighttime leg cramps</div>
                                        <div>Bananas, sweet potatoes, avocados</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 text-center">
                                        <div className="font-medium">Calcium</div>
                                        <div>Helps brain use tryptophan</div>
                                        <div>Yogurt, milk, cheese, leafy greens</div>
                                    </div>
                                </div>

                                <p className="text-gray-700 mb-6">
                                    The combination of these nutrients is particularly powerful. For example:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>Magnesium + calcium work synergistically for muscle relaxation</li>
                                    <li>Complex carbs help tryptophan cross the blood-brain barrier</li>
                                    <li>Vitamin B6 is essential for converting tryptophan to serotonin</li>
                                    <li>Antioxidants reduce inflammation that can disrupt sleep</li>
                                </ul>
                            </section>

                            {/* Timing and Combinations */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Optimal Timing and Food Combinations</h2>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                                            <Clock className="w-5 h-5 text-blue-500 mr-2" />
                                            When to Eat
                                        </h3>
                                        <p className="text-gray-700 mb-2">
                                            The timing of food consumption significantly impacts sleep quality:
                                        </p>
                                        <ol className="list-decimal list-inside text-gray-700 space-y-1">
                                            <li>Dinner: 3-4 hours before bedtime (allows digestion)</li>
                                            <li>Light snack: 30-60 minutes before bed if needed</li>
                                            <li>Fluids: Reduce 2 hours before sleep to minimize disruptions</li>
                                        </ol>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                                            <Heart className="w-5 h-5 text-blue-500 mr-2" />
                                            Powerful Combinations
                                        </h3>
                                        <p className="text-gray-700 mb-2">
                                            These food pairings enhance sleep-promoting effects:
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>Whole grain toast + almond butter (carbs + tryptophan)</li>
                                            <li>Banana + walnuts (potassium + melatonin)</li>
                                            <li>Chamomile tea + honey (relaxation + glucose)</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Pro Tip:</h3>
                                    <p className="text-gray-700">
                                        Combine sleep-promoting foods with a consistent bedtime routine (dim lights, no screens) for maximum effect. The 30 minutes before bed are crucial for signaling your body to prepare for sleep.
                                    </p>
                                </div>
                            </section>

                            {/* Sample Evening Routine */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">7-Day Sleep-Enhancing Evening Routine</h2>

                                <div className="space-y-6">
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Day 1 (Total Prep Time: 45 min)</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Dinner (6:30 PM)</h4>
                                                <p className="text-gray-700">Grilled salmon with roasted sweet potatoes and sautéed spinach</p>
                                            </div>
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Evening Routine (9:00 PM)</h4>
                                                <p className="text-gray-700">Warm bath with Epsom salts (magnesium absorption)</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">Bedtime Snack (9:30 PM)</h4>
                                                <p className="text-gray-700">1 cup tart cherry juice + 1 oz almonds</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Day 2 */}
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Day 2 (Total Prep Time: 30 min)</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Dinner (6:45 PM)</h4>
                                                <p className="text-gray-700">Turkey meatballs with whole wheat pasta and steamed broccoli</p>
                                            </div>
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Evening Routine (9:15 PM)</h4>
                                                <p className="text-gray-700">Gentle yoga/stretching (15 min)</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">Bedtime Snack (9:45 PM)</h4>
                                                <p className="text-gray-700">1 kiwi fruit + chamomile tea</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Foods to Avoid */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Foods and Substances That Disrupt Sleep</h2>

                                <div className="space-y-4">
                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                                            <Coffee className="w-5 h-5 text-red-500 mr-2" />
                                            Caffeine
                                        </h3>
                                        <p className="text-gray-700 mb-2">
                                            Caffeine has a half-life of 5-6 hours, meaning half the caffeine from a 3 PM coffee is still in your system at 9 PM. It blocks adenosine receptors that promote sleepiness.
                                        </p>
                                        <p className="text-gray-700">
                                            <span className="font-semibold">Solution:</span> Limit caffeine after 2 PM or switch to decaf. Be aware of hidden sources (chocolate, medications).
                                        </p>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                                            <Shield className="w-5 h-5 text-red-500 mr-2" />
                                            Alcohol
                                        </h3>
                                        <p className="text-gray-700 mb-2">
                                            While alcohol may help you fall asleep faster, it reduces REM sleep (the restorative phase) and causes nighttime awakenings as it metabolizes.
                                        </p>
                                        <p className="text-gray-700">
                                            <span className="font-semibold">Solution:</span> Avoid alcohol within 3 hours of bedtime. If consuming, have with food and alternate with water.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Incorporating sleep-promoting foods into your evening routine can significantly improve both sleep quality and duration. These foods work by providing the raw materials your body needs to produce sleep-regulating hormones and neurotransmitters.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    Remember that consistency is key - it takes about 3 weeks of regular consumption to see maximum benefits. Combine these dietary changes with other sleep hygiene practices for best results.
                                </p>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "Think of your evening meal as preparation for sleep, not just nutrition. The right foods at the right time can be as powerful as any sleep aid, without the side effects."
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
                                            Dr. Emily Carter, Sleep Specialist
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600 mb-1">
                                        — Written by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            Jessica Williams
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
                                <h3 className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-2">SLEEP NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get better sleep naturally</h4>
                                <p className="text-gray-700 text-sm">
                                    Weekly sleep tips, relaxation techniques, and science-backed advice delivered to your inbox.
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

                        {/* Popular Sleep Recipes */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Popular Sleep Recipes</h3>
                            <div className="space-y-4">
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/sleep-tea.jpg" alt="Sleep tea" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Golden Milk Sleep Elixir</h4>
                                            <p className="text-sm text-gray-600">4.9 ★ (87 reviews)</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/banana-oat.jpg" alt="Banana oat" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Banana-Oat Sleep Cookies</h4>
                                            <p className="text-sm text-gray-600">4.7 ★ (64 reviews)</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Sleep Score Quiz */}
                        <div className="bg-purple-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">What's Your Sleep Score?</h3>
                            <p className="text-gray-700 text-sm mb-4">
                                Take our 2-minute quiz to assess your sleep quality and get personalized recommendations.
                            </p>
                            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200">
                                Start Quiz
                            </button>
                        </div>

                        {/* Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Further Reading</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">The Circadian Rhythm Diet</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Sleep Hygiene Checklist</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Natural Remedies for Insomnia</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">The Gut-Sleep Connection</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}