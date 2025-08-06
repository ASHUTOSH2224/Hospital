"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Moon, Sun, Activity, Heart, Clock, Coffee, BookOpen, Shield } from "lucide-react"

export default function SleepAndWellnessGuide() {
    const [email, setEmail] = useState("")
    const [activeTab, setActiveTab] = useState("Benefits")

    const handleEmailSubmit = (e) => {
        e.preventDefault()
        console.log("Email submitted:", email)
        setEmail("")
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const tabs = ["Benefits", "Sleep Stages", "Optimization", "Routines"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Sleep and Wellness: Maximizing Your Health Benefits
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
                                Quality sleep is the foundation of optimal health, affecting everything from cognitive function to immune response. This comprehensive guide explores sleep science, practical optimization strategies, and wellness routines to help you achieve restorative sleep and maximize its health benefits.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1518911710364-17ec553bde5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80"
                                    alt="Peaceful sleeping woman in comfortable bed"
                                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                                    style={{ maxHeight: '500px' }}
                                />
                            </div>

                            {/* Key Takeaways */}
                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
                                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                    <Shield className="w-5 h-5 text-blue-600 mr-2" />
                                    Key Takeaways
                                </h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>Adults need 7-9 hours of sleep, but quality matters more than quantity</li>
                                    <li>Deep sleep boosts immune function by 40% compared to sleep deprivation</li>
                                    <li>Optimal bedroom temperature is between 60-67°F (15-19°C)</li>
                                    <li>Blue light exposure before bed can delay melatonin release by up to 3 hours</li>
                                    <li>Consistent sleep schedules improve metabolic health markers</li>
                                </ul>
                            </div>

                            {/* Why Sleep Matters */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Moon className="w-8 h-8 text-blue-600 mr-2" />
                                    The Science of Sleep and Wellness
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Sleep is not merely downtime between waking hours—it's an active state essential for physical repair, memory consolidation, and metabolic regulation. According to a <a href="#" className="text-blue-600 hover:underline">2024 meta-analysis in Sleep Medicine Reviews</a>, consistent quality sleep is associated with:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>29% lower risk of cardiovascular disease</li>
                                    <li>Improved cognitive performance (equivalent to 15 IQ points difference)</li>
                                    <li>Enhanced emotional regulation and stress resilience</li>
                                    <li>Optimal hormone balance, including leptin and ghrelin for appetite control</li>
                                    <li>Strengthened immune response (2.5x more antibodies after vaccination)</li>
                                </ul>

                                <div className="bg-purple-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Sleep Deprivation vs. Optimal Sleep</h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <h4 className="font-bold text-red-600 mb-2">With Sleep Deprivation (≤6 hours):</h4>
                                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                                                <li>43% higher risk of developing depression</li>
                                                <li>31% reduction in insulin sensitivity</li>
                                                <li>Increased inflammation markers (CRP +48%)</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-green-600 mb-2">With Optimal Sleep (7-9 hours):</h4>
                                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                                                <li>Improved memory consolidation (+25%)</li>
                                                <li>Enhanced muscle recovery</li>
                                                <li>Better emotional regulation</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Sleep Stages */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Activity className="w-8 h-8 text-blue-600 mr-2" />
                                    Understanding Sleep Stages
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Sleep consists of cyclical stages that each serve distinct physiological functions. A complete sleep cycle lasts about 90 minutes, and adults typically experience 4-6 cycles per night.
                                </p>

                                {/* Sleep Stages Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stage</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Brain Waves</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Functions</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">NREM Stage 1</td>
                                                <td className="px-4 py-3 whitespace-nowrap">1-5 min</td>
                                                <td className="px-4 py-3">Theta</td>
                                                <td className="px-4 py-3">Transition from wakefulness</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">NREM Stage 2</td>
                                                <td className="px-4 py-3 whitespace-nowrap">10-25 min</td>
                                                <td className="px-4 py-3">Theta with sleep spindles</td>
                                                <td className="px-4 py-3">Body temperature drops, heart rate slows</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">NREM Stage 3</td>
                                                <td className="px-4 py-3 whitespace-nowrap">20-40 min</td>
                                                <td className="px-4 py-3">Delta</td>
                                                <td className="px-4 py-3">Deep sleep, physical restoration</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">REM Sleep</td>
                                                <td className="px-4 py-3 whitespace-nowrap">10-60 min</td>
                                                <td className="px-4 py-3">Mixed frequency</td>
                                                <td className="px-4 py-3">Dreaming, memory consolidation</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">1</span>
                                            Deep Sleep - The Physical Restorer
                                        </h3>
                                        <p className="text-gray-700">
                                            Occurring mostly in the first half of the night, deep sleep (NREM Stage 3) is when growth hormone is released, tissues repair, and immune function strengthens. Adults typically spend 13-23% of sleep in this vital stage.
                                        </p>
                                    </div>
                                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">2</span>
                                            REM Sleep - The Mental Enhancer
                                        </h3>
                                        <p className="text-gray-700">
                                            REM sleep duration increases throughout the night, peaking in the final sleep cycles. This stage enhances creativity, emotional processing, and memory integration. Missing REM sleep can impair problem-solving by up to 30%.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Sleep Optimization */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Sun className="w-8 h-8 text-blue-600 mr-2" />
                                    Sleep Optimization Techniques
                                </h2>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Creating the Ideal Sleep Environment</h3>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900 mb-3">Light Optimization</h4>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Use blackout curtains or sleep mask</li>
                                            <li>Install dim red night lights (least disruptive wavelength)</li>
                                            <li>Eliminate LED indicators from electronics</li>
                                            <li>Use blue light filters after sunset (apps or physical filters)</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900 mb-3">Temperature Control</h4>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Set thermostat to 65°F (18°C)</li>
                                            <li>Use breathable bedding (cotton, bamboo, or moisture-wicking fabrics)</li>
                                            <li>Consider a cooling mattress pad if needed</li>
                                            <li>Warm bath 1-2 hours before bed (helps core temperature drop)</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Pro Tip:</h3>
                                    <p className="text-gray-700">
                                        The 10-3-2-1-0 sleep formula: 10 hours before bed - no caffeine, 3 hours - no food/alcohol, 2 hours - no work, 1 hour - no screens, 0 - times you hit snooze.
                                    </p>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Daily Habits for Better Sleep</h3>

                                <div className="space-y-6">
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h4 className="font-bold text-white">Morning Routine</h4>
                                        </div>
                                        <div className="p-4">
                                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                                <li>View sunlight within 30 minutes of waking (regulates circadian rhythm)</li>
                                                <li>Exercise early (but avoid within 4 hours of bedtime)</li>
                                                <li>Consistent wake time (±30 minutes, even weekends)</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h4 className="font-bold text-white">Evening Routine</h4>
                                        </div>
                                        <div className="p-4">
                                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                                <li>Digital sunset (reduce screen brightness gradually)</li>
                                                <li>Relaxation practices (reading, meditation, gentle stretching)</li>
                                                <li>Dim lights after dinner</li>
                                                <li>Journaling to process thoughts</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Sleep Tracking */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Sleep Tracking and Analysis</h2>

                                <p className="text-gray-700 mb-4">
                                    Modern sleep tracking technology can provide valuable insights, though accuracy varies by method:
                                </p>

                                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                                    <div className="grid grid-cols-4 gap-4 text-center font-medium mb-2">
                                        <div>Method</div>
                                        <div>Accuracy</div>
                                        <div>Best For</div>
                                        <div>Limitations</div>
                                    </div>
                                    <div className="grid grid-cols-4 gap-4 text-center mb-1 text-sm">
                                        <div className="font-medium">Polysomnography</div>
                                        <div>★★★★★</div>
                                        <div>Clinical diagnosis</div>
                                        <div>Expensive, lab setting</div>
                                    </div>
                                    <div className="grid grid-cols-4 gap-4 text-center mb-1 text-sm bg-blue-50 p-1 rounded">
                                        <div className="font-medium">EEG Headbands</div>
                                        <div>★★★★☆</div>
                                        <div>Home sleep staging</div>
                                        <div>Can be uncomfortable</div>
                                    </div>
                                    <div className="grid grid-cols-4 gap-4 text-center mb-1 text-sm">
                                        <div className="font-medium">Wearables</div>
                                        <div>★★★☆☆</div>
                                        <div>Trends over time</div>
                                        <div>Overestimates sleep</div>
                                    </div>
                                    <div className="grid grid-cols-4 gap-4 text-center text-sm">
                                        <div className="font-medium">Smartphone Apps</div>
                                        <div>★★☆☆☆</div>
                                        <div>Basic sleep timing</div>
                                        <div>No sleep staging</div>
                                    </div>
                                </div>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Interpreting Sleep Data</h3>
                                    <p className="text-gray-700 mb-2">
                                        Focus on trends rather than nightly variations. Look for:
                                    </p>
                                    <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                                        <li>Consistent bedtime/waketime (within 30 minutes)</li>
                                        <li>Gradual improvement in sleep efficiency (time asleep/time in bed)</li>
                                        <li>Increased deep sleep after exercise days</li>
                                        <li>Correlations between habits and sleep quality</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Wellness Routines */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Wellness Routines for Better Sleep</h2>

                                <div className="space-y-6">
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Morning (6-8 AM)</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Upon Waking</h4>
                                                <p className="text-gray-700">Hydrate with 16oz water, 5 minutes of sunlight exposure</p>
                                            </div>
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Exercise</h4>
                                                <p className="text-gray-700">20-30 minutes aerobic activity or yoga</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">Breakfast</h4>
                                                <p className="text-gray-700">Protein-rich meal with complex carbs</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Evening (8-10 PM)</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Wind Down</h4>
                                                <p className="text-gray-700">Dim lights, digital detox, relaxation techniques</p>
                                            </div>
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Environment Prep</h4>
                                                <p className="text-gray-700">Cool room, comfortable bedding, white noise if needed</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">Sleep Cue</h4>
                                                <p className="text-gray-700">Consistent pre-sleep routine (reading, meditation)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Quality sleep is the most underrated performance enhancer and health protector available. Small, consistent improvements to sleep hygiene can yield significant benefits across all aspects of life—physical health, mental clarity, emotional balance, and productivity.
                                </p>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "Think of sleep not as lost time but as an investment in every waking hour. The 7-9 hours you 'lose' each night are repaid with interest through enhanced performance, health, and quality of life during your 15-17 waking hours."
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
                                            Dr. Emily Carter, Sleep Specialist
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600 mb-1">
                                        — Written by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            David Wilson
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
                                <h3 className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-2">WELLNESS NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get sleep optimization tips</h4>
                                <p className="text-gray-700 text-sm">
                                    Weekly science-backed strategies for better sleep and wellness delivered to your inbox.
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

                        {/* Sleep Calculator */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Sleep Cycle Calculator</h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">When do you want to wake up?</label>
                                    <input
                                        type="time"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        defaultValue="07:00"
                                    />
                                </div>
                                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200">
                                    Calculate Optimal Bedtimes
                                </button>
                                <div className="bg-gray-50 p-3 rounded-lg">
                                    <p className="text-sm text-gray-700">
                                        For 7.5 hours sleep with 5 complete cycles, aim for:
                                    </p>
                                    <p className="font-medium mt-1">11:30 PM or 1:00 AM</p>
                                </div>
                            </div>
                        </div>

                        {/* Sleep Aids Comparison */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Natural Sleep Aids Comparison</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span className="font-medium">Aid</span>
                                    <span className="font-medium">Effectiveness</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Magnesium</span>
                                    <span className="text-blue-600">★★★☆☆</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Melatonin</span>
                                    <span className="text-blue-600">★★★★☆</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Valerian Root</span>
                                    <span className="text-blue-600">★★☆☆☆</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Chamomile Tea</span>
                                    <span className="text-blue-600">★★★☆☆</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>L-Theanine</span>
                                    <span className="text-blue-600">★★★☆☆</span>
                                </div>
                            </div>
                        </div>

                        {/* Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Further Reading</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">The Circadian Rhythm Reset Guide</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Sleep Tracking Devices Reviewed</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Meditation for Sleep</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Nutrition for Better Sleep</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}