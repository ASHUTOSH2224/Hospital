"use client"

import { useEffect, useState } from "react"
import { Moon, Sun, Clock, Zap, Activity, HeartPulse, AlarmClock, Bed, Brain, Shield } from "lucide-react"

export default function SleepLayeringGuide() {
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

    const tabs = ["Techniques", "Sleep Types", "Circadian Rhythm", "Optimization"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Sleep Layering Techniques: The Key to Effective Rest
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
                                <Clock className="w-4 h-4 mr-1" />
                                <span className="text-sm">Updated on June 15, 2024</span>
                            </div>

                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                Sleep layering combines multiple sleep optimization strategies tailored to your unique physiology, lifestyle, and goals. This comprehensive approach addresses sleep quality, duration, timing, and environment to create consistently restorative results. Discover how to customize your sleep layers for maximum recovery and daytime energy.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1520206183501-b80df61043c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80"
                                    alt="Peaceful sleeping person with layered bedding"
                                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                                    style={{ maxHeight: '500px' }}
                                />
                            </div>

                            {/* Key Takeaways */}
                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
                                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                    <Zap className="w-5 h-5 text-blue-600 mr-2" />
                                    Key Takeaways
                                </h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>Sleep layering combines 4-6 complementary sleep optimization strategies</li>
                                    <li>Your ideal layers depend on your chronotype (morning/night preference)</li>
                                    <li>Environmental factors account for 30-40% of sleep quality variance</li>
                                    <li>Strategic napping can boost performance by 34% when layered properly</li>
                                    <li>Sleep tracking data helps refine your personal layering approach</li>
                                </ul>
                            </div>

                            {/* Why Sleep Layering Matters */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Moon className="w-8 h-8 text-blue-600 mr-2" />
                                    The Science of Sleep Layering
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Sleep layering works because it addresses the multidimensional nature of sleep quality. A <a href="#" className="text-blue-600 hover:underline">2023 meta-analysis in Sleep Medicine Reviews</a> found that combining 3+ sleep optimization techniques led to:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>38% greater sleep efficiency improvement vs single interventions</li>
                                    <li>27% more slow wave (deep) sleep</li>
                                    <li>42% reduction in sleep onset latency</li>
                                    <li>19% lower nighttime awakenings</li>
                                </ul>

                                <div className="bg-purple-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">The 4 Pillars of Sleep Layering</h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="bg-white p-3 rounded-lg border border-gray-200">
                                            <h4 className="font-bold text-gray-900 mb-1 flex items-center">
                                                <Activity className="w-4 h-4 text-purple-600 mr-2" />
                                                Physiological
                                            </h4>
                                            <p className="text-gray-700 text-sm">Body temperature, breathing, muscle relaxation</p>
                                        </div>
                                        <div className="bg-white p-3 rounded-lg border border-gray-200">
                                            <h4 className="font-bold text-gray-900 mb-1 flex items-center">
                                                <HeartPulse className="w-4 h-4 text-purple-600 mr-2" />
                                                Environmental
                                            </h4>
                                            <p className="text-gray-700 text-sm">Light, sound, temperature, bedding</p>
                                        </div>
                                        <div className="bg-white p-3 rounded-lg border border-gray-200">
                                            <h4 className="font-bold text-gray-900 mb-1 flex items-center">
                                                <AlarmClock className="w-4 h-4 text-purple-600 mr-2" />
                                                Temporal
                                            </h4>
                                            <p className="text-gray-700 text-sm">Timing, duration, consistency</p>
                                        </div>
                                        <div className="bg-white p-3 rounded-lg border border-gray-200">
                                            <h4 className="font-bold text-gray-900 mb-1 flex items-center">
                                                <Brain className="w-4 h-4 text-purple-600 mr-2" />
                                                Cognitive
                                            </h4>
                                            <p className="text-gray-700 text-sm">Mindset, stress reduction, mental routines</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Sleep Type Assessment */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Bed className="w-8 h-8 text-blue-600 mr-2" />
                                    Identifying Your Sleep Type
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Your ideal sleep layers depend on your chronotype (natural sleep-wake preference). Complete this quick assessment to identify your primary sleep type:
                                </p>

                                {/* Sleep Type Quiz */}
                                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Sleep Type Assessment</h3>
                                    
                                    <div className="space-y-6">
                                        <div>
                                            <h4 className="font-medium text-gray-900 mb-2">1. Without an alarm, I naturally wake up:</h4>
                                            <div className="space-y-2 pl-4">
                                                <label className="flex items-center">
                                                    <input type="radio" name="wakeup" className="mr-2" />
                                                    Before 6:30 AM
                                                </label>
                                                <label className="flex items-center">
                                                    <input type="radio" name="wakeup" className="mr-2" />
                                                    6:30-8:30 AM
                                                </label>
                                                <label className="flex items-center">
                                                    <input type="radio" name="wakeup" className="mr-2" />
                                                    After 8:30 AM
                                                </label>
                                            </div>
                                        </div>
                                        
                                        <div>
                                            <h4 className="font-medium text-gray-900 mb-2">2. My peak productivity occurs:</h4>
                                            <div className="space-y-2 pl-4">
                                                <label className="flex items-center">
                                                    <input type="radio" name="productivity" className="mr-2" />
                                                    Early morning
                                                </label>
                                                <label className="flex items-center">
                                                    <input type="radio" name="productivity" className="mr-2" />
                                                    Late morning to afternoon
                                                </label>
                                                <label className="flex items-center">
                                                    <input type="radio" name="productivity" className="mr-2" />
                                                    Evening/night
                                                </label>
                                            </div>
                                        </div>
                                        
                                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                                            Determine My Sleep Type
                                        </button>
                                    </div>
                                </div>

                                {/* Sleep Types Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sleep Type</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">% Population</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Natural Sleep Window</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Recommended Layers</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Lion (Morning)</td>
                                                <td className="px-4 py-3 whitespace-nowrap">15-20%</td>
                                                <td className="px-4 py-3">9PM - 5AM</td>
                                                <td className="px-4 py-3">Early light exposure, afternoon energizing nap</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Bear (Standard)</td>
                                                <td className="px-4 py-3 whitespace-nowrap">50-55%</td>
                                                <td className="px-4 py-3">11PM - 7AM</td>
                                                <td className="px-4 py-3">Consistent bedtime, sleep environment optimization</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Wolf (Evening)</td>
                                                <td className="px-4 py-3 whitespace-nowrap">15-20%</td>
                                                <td className="px-4 py-3">1AM - 9AM</td>
                                                <td className="px-4 py-3">Evening relaxation routine, blackout curtains</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            {/* Core Layering Techniques */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Core Sleep Layering Techniques</h2>

                                <div className="space-y-8">
                                    {/* Technique 1 */}
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Layer 1: Temperature Regulation</h3>
                                        </div>
                                        <div className="p-4">
                                            <p className="text-gray-700 mb-4">
                                                Your core body temperature needs to drop 2-3°F to initiate sleep. Implement these temperature layers:
                                            </p>
                                            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4 space-y-2">
                                                <li>Bedroom temperature between 60-67°F (15-19°C)</li>
                                                <li>Warm bath 1-2 hours before bed (raises then drops temperature)</li>
                                                <li>Breathable, moisture-wicking bedding materials</li>
                                                <li>Cooling mattress pad if needed</li>
                                            </ul>
                                            <div className="bg-blue-50 p-3 rounded-lg">
                                                <p className="text-blue-800 text-sm">
                                                    <span className="font-bold">Research:</span> A 2022 study found optimal sleep occurs at 65°F, with each 5°F increase reducing sleep efficiency by 5-10%.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Technique 2 */}
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Layer 2: Light Exposure Management</h3>
                                        </div>
                                        <div className="p-4">
                                            <p className="text-gray-700 mb-4">
                                                Light is the primary regulator of your circadian rhythm. Implement these light layers:
                                            </p>
                                            <div className="grid md:grid-cols-2 gap-4 mb-4">
                                                <div>
                                                    <h4 className="font-medium text-gray-900 mb-2">Morning:</h4>
                                                    <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                                                        <li>10-30 minutes of sunlight within 30 mins of waking</li>
                                                        <li>Bright artificial light if sunrise is later</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4 className="font-medium text-gray-900 mb-2">Evening:</h4>
                                                    <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                                                        <li>Dim lights 2 hours before bed</li>
                                                        <li>Blue light blocking glasses/apps after sunset</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded-lg">
                                                <p className="text-yellow-800 text-sm">
                                                    <span className="font-bold">Tip:</span> Use red/orange night lights for bathroom trips - these wavelengths least disrupt melatonin.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Technique 3 */}
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Layer 3: Sleep-Wake Timing</h3>
                                        </div>
                                        <div className="p-4">
                                            <p className="text-gray-700 mb-4">
                                                Consistency strengthens your circadian rhythm. Implement these timing layers:
                                            </p>
                                            <div className="overflow-x-auto">
                                                <table className="min-w-full bg-white">
                                                    <thead className="bg-gray-100">
                                                        <tr>
                                                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Sleep Type</th>
                                                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Ideal Bedtime</th>
                                                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Ideal Wake Time</th>
                                                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Nap Window</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-gray-200">
                                                        <tr>
                                                            <td className="px-4 py-2">Lion</td>
                                                            <td className="px-4 py-2">9:00-10:00 PM</td>
                                                            <td className="px-4 py-2">5:00-6:00 AM</td>
                                                            <td className="px-4 py-2">1:00-2:00 PM</td>
                                                        </tr>
                                                        <tr className="bg-gray-50">
                                                            <td className="px-4 py-2">Bear</td>
                                                            <td className="px-4 py-2">10:30-11:30 PM</td>
                                                            <td className="px-4 py-2">6:30-7:30 AM</td>
                                                            <td className="px-4 py-2">2:30-3:30 PM</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="px-4 py-2">Wolf</td>
                                                            <td className="px-4 py-2">12:30-1:30 AM</td>
                                                            <td className="px-4 py-2">8:30-9:30 AM</td>
                                                            <td className="px-4 py-2">4:30-5:30 PM</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Advanced Optimization */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Advanced Sleep Optimization</h2>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                                            <Shield className="w-5 h-5 text-blue-600 mr-2" />
                                            Sleep Security Layers
                                        </h3>
                                        <p className="text-gray-700 mb-4">
                                            These backup layers help when your primary routine gets disrupted:
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2">
                                            <li>20-minute "emergency nap" protocol</li>
                                            <li>Travel sleep kit (eye mask, earplugs, portable white noise)</li>
                                            <li>Caffeine management strategy (half-life awareness)</li>
                                        </ul>
                                    </div>
                                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                                            <Activity className="w-5 h-5 text-blue-600 mr-2" />
                                            Performance Layers
                                        </h3>
                                        <p className="text-gray-700 mb-4">
                                            For athletes and high-performers needing optimized recovery:
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2">
                                            <li>Pre-sleep protein intake</li>
                                            <li>Compression garments for recovery</li>
                                            <li>Strategic sleep extension before competitions</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-blue-50 rounded-lg p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Sleep Layer Stacking Protocol</h3>
                                    <p className="text-gray-700 mb-4">
                                        Implement new layers gradually over 2-3 weeks:
                                    </p>
                                    <ol className="list-decimal list-inside text-gray-700 ml-4 space-y-2">
                                        <li>Week 1: Establish consistent sleep-wake times</li>
                                        <li>Week 2: Optimize sleep environment (light, temperature, noise)</li>
                                        <li>Week 3: Add pre-sleep relaxation routine</li>
                                        <li>Week 4: Introduce performance/recovery layers</li>
                                    </ol>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Sleep layering isn't about perfection—it's about creating multiple protective factors that work together. Even if one layer fails (travel, stress, schedule changes), the other layers maintain your sleep foundation.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    Track your sleep quality and daytime energy for 2-4 weeks after implementing new layers. Adjust based on what works for your unique biology and lifestyle.
                                </p>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "Think of sleep layers like an onion—each protective wrapper makes the whole system more resilient. The goal isn't more sleep, it's better sleep that serves your waking life."
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
                                            Dr. Emily Parker, Sleep Specialist
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600 mb-1">
                                        — Written by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            David Wilson
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600 flex items-center gap-1">
                                        — <Clock className="w-3 h-3" />
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
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get personalized sleep tips</h4>
                                <p className="text-gray-700 text-sm">
                                    Weekly sleep optimization strategies based on your chronotype and lifestyle.
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

                        {/* Sleep Tools */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Recommended Sleep Tools</h3>
                            <div className="space-y-4">
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/sleep-mask.jpg" alt="Sleep mask" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Blackout Sleep Mask</h4>
                                            <p className="text-sm text-gray-600">Blocks 100% of light for deeper sleep</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/white-noise.jpg" alt="White noise machine" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">White Noise Machine</h4>
                                            <p className="text-sm text-gray-600">10 soothing sound profiles</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Sleep Tracker Comparison */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Sleep Tracker Comparison</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span className="font-medium">Feature</span>
                                    <span className="font-medium">Best Option</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Accuracy</span>
                                    <span className="text-blue-600">Oura Ring</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Battery Life</span>
                                    <span className="text-blue-600">Fitbit</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Price</span>
                                    <span className="text-blue-600">Sleep Cycle App</span>
                                </div>
                            </div>
                        </div>

                        {/* Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Further Reading</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">The Circadian Code</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Sleep and Athletic Performance</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Managing Shift Work Sleep</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Sleep Tracking Devices Review</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}