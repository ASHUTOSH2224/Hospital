"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Moon, Sun, Clock, Activity, Heart, Brain, Shield, Battery, Check, Star } from "lucide-react"

export default function SleepHabitsGuide() {
    const [email, setEmail] = useState("")
    const [activeTab, setActiveTab] = useState("Habits")

    const handleEmailSubmit = (e) => {
        e.preventDefault()
        console.log("Email submitted:", email)
        setEmail("")
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const tabs = ["Habits", "Science", "Routine", "Tools"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                10 Sleep Habits to Improve Every Aspect of Your Health
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
                                <span className="text-sm">8 min read</span>
                            </div>

                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                Quality sleep is the foundation of optimal health. We've rounded up the 10 best and most effective sleep habits to enhance your physical, mental, and emotional well-being. Discover science-backed strategies that can transform your nights and supercharge your days.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=800&h=500&fit=crop"
                                    alt="Person sleeping peacefully"
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
                                    <li>Consistent sleep schedule regulates your circadian rhythm</li>
                                    <li>Blue light reduction in evenings boosts melatonin production</li>
                                    <li>Optimal bedroom temperature (60-67°F) promotes deeper sleep</li>
                                    <li>Daytime habits (exercise, sunlight) significantly impact sleep quality</li>
                                    <li>Wind-down routine signals your body it's time to sleep</li>
                                </ul>
                            </div>

                            {/* Why Sleep Matters */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Moon className="w-8 h-8 text-blue-600 mr-2" />
                                    The Profound Impact of Quality Sleep
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Sleep isn't just downtime—it's when your body performs essential maintenance and restoration. According to a <a href="#" className="text-blue-600 hover:underline">2024 meta-analysis in Sleep Medicine Reviews</a>, consistent quality sleep is associated with:
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                                        <div className="flex items-center mb-2">
                                            <Heart className="w-5 h-5 text-red-500 mr-2" />
                                            <h3 className="font-bold text-gray-900">Physical Health</h3>
                                        </div>
                                        <ul className="list-disc list-inside text-gray-700 ml-6 space-y-1">
                                            <li>29% lower risk of cardiovascular disease</li>
                                            <li>Improved immune function (2x antibody response)</li>
                                            <li>Better weight management (regulates leptin/ghrelin)</li>
                                        </ul>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                                        <div className="flex items-center mb-2">
                                            <Brain className="w-5 h-5 text-purple-500 mr-2" />
                                            <h3 className="font-bold text-gray-900">Mental Health</h3>
                                        </div>
                                        <ul className="list-disc list-inside text-gray-700 ml-6 space-y-1">
                                            <li>40% lower risk of depression</li>
                                            <li>Enhanced memory consolidation</li>
                                            <li>Better emotional regulation</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Sleep Stages Explained</h3>
                                    <p className="text-gray-700 mb-2">
                                        A complete sleep cycle lasts about 90 minutes and includes:
                                    </p>
                                    <ol className="list-decimal list-inside text-gray-700 space-y-1 ml-4">
                                        <li>NREM Stage 1 (Light sleep - 5%)</li>
                                        <li>NREM Stage 2 (Memory processing - 45%)</li>
                                        <li>NREM Stage 3 (Deep sleep - 25%)</li>
                                        <li>REM Sleep (Dreaming - 25%)</li>
                                    </ol>
                                </div>
                            </section>

                            {/* The 10 Sleep Habits */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Check className="w-8 h-8 text-blue-600 mr-2" />
                                    The 10 Essential Sleep Habits
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Based on clinical research from the National Sleep Foundation and Harvard Medical School, these habits form the foundation of optimal sleep hygiene:
                                </p>

                                {/* Habits Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Habit</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Implementation</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Impact</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            {/* Habit 1 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">1. Consistent Schedule</td>
                                                <td className="px-4 py-3">Same bedtime/wake time (±30 min) even weekends</td>
                                                <td className="px-4 py-3">Circadian rhythm regulation</td>
                                            </tr>
                                            {/* Habit 2 */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">2. Light Management</td>
                                                <td className="px-4 py-3">Dim lights after sunset, blue blockers 2h before bed</td>
                                                <td className="px-4 py-3">55% more melatonin production</td>
                                            </tr>
                                            {/* Habit 3 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">3. Optimal Environment</td>
                                                <td className="px-4 py-3">60-67°F, blackout, quiet (or white noise)</td>
                                                <td className="px-4 py-3">Deeper, less interrupted sleep</td>
                                            </tr>
                                            {/* Habit 4 */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">4. Caffeine Cutoff</td>
                                                <td className="px-4 py-3">No caffeine after 2pm (10h half-life)</td>
                                                <td className="px-4 py-3">Faster sleep onset</td>
                                            </tr>
                                            {/* Habit 5 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">5. Wind-Down Routine</td>
                                                <td className="px-4 py-3">30-60min of reading, meditation, light stretching</td>
                                                <td className="px-4 py-3">Activates parasympathetic nervous system</td>
                                            </tr>
                                            {/* Additional habits... */}
                                        </tbody>
                                    </table>
                                </div>

                                {/* Top 3 Highlights */}
                                <div className="grid md:grid-cols-3 gap-6 mb-8">
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">1</span>
                                            Morning Sunlight
                                        </h3>
                                        <p className="text-gray-700">
                                            View sunlight within 30-60 minutes of waking for 5-10 minutes (cloudy days 15-20 min). This resets your circadian clock by suppressing melatonin and increasing cortisol at the optimal time.
                                        </p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">2</span>
                                            4-7-8 Breathing
                                        </h3>
                                        <p className="text-gray-700">
                                            Practice this before sleep: Inhale 4s, hold 7s, exhale 8s (repeat 4x). Activates the vagus nerve, slowing heart rate by up to 10 bpm within minutes.
                                        </p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">3</span>
                                            Temperature Drop
                                        </h3>
                                        <p className="text-gray-700">
                                            Take a warm bath 1-2h before bed. The subsequent cooling mimics natural circadian temperature drop, reducing sleep onset time by ~15 minutes.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Sleep Science */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Activity className="w-8 h-8 text-blue-600 mr-2" />
                                    The Science Behind Sleep Optimization
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Understanding sleep physiology helps explain why these habits work:
                                </p>

                                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                                    <div className="grid grid-cols-3 gap-4 text-center font-medium mb-2">
                                        <div>Factor</div>
                                        <div>Optimal Range</div>
                                        <div>Impact on Sleep</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 text-center mb-1">
                                        <div className="font-medium">Core Temperature</div>
                                        <div>1°F drop</div>
                                        <div>Triggers sleep onset</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 text-center mb-1 bg-blue-50 p-1 rounded">
                                        <div className="font-medium">Melatonin</div>
                                        <div>Peaks ~2-4AM</div>
                                        <div>Regulates sleep-wake cycle</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 text-center mb-1">
                                        <div className="font-medium">Cortisol</div>
                                        <div>Low at night</div>
                                        <div>High levels disrupt sleep</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 text-center">
                                        <div className="font-medium">Heart Rate</div>
                                        <div>↓ 10-30 bpm</div>
                                        <div>Indicates relaxation</div>
                                    </div>
                                </div>

                                <p className="text-gray-700 mb-6">
                                    These biological markers explain why certain habits are particularly effective:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li><strong>Morning light exposure</strong> sets your circadian rhythm by suppressing melatonin early in the day</li>
                                    <li><strong>Evening darkness</strong> allows natural melatonin rise (blue light can suppress it by 50%)</li>
                                    <li><strong>Cool environment</strong> facilitates the 1°F core temperature drop needed for sleep onset</li>
                                    <li><strong>Regular exercise</strong> (but not within 3h of bedtime) increases deep sleep duration</li>
                                </ul>
                            </section>

                            {/* Sample Sleep Routine */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">2-Week Sleep Transformation Plan</h2>

                                <div className="space-y-6">
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Week 1: Foundation</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Days 1-3</h4>
                                                <ul className="list-disc list-inside text-gray-700 ml-4">
                                                    <li>Establish consistent wake time (even weekends)</li>
                                                    <li>Get 10min morning sunlight</li>
                                                    <li>Implement digital sunset (no screens 1h before bed)</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">Days 4-7</h4>
                                                <ul className="list-disc list-inside text-gray-700 ml-4">
                                                    <li>Optimize bedroom environment (cool, dark, quiet)</li>
                                                    <li>Start wind-down routine (reading, meditation)</li>
                                                    <li>Limit caffeine after 2pm</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Week 2: Enhancement</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Days 8-10</h4>
                                                <ul className="list-disc list-inside text-gray-700 ml-4">
                                                    <li>Add 4-7-8 breathing before sleep</li>
                                                    <li>Experiment with warm bath 90min before bed</li>
                                                    <li>Keep sleep diary (track quality/duration)</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">Days 11-14</h4>
                                                <ul className="list-disc list-inside text-gray-700 ml-4">
                                                    <li>Fine-tune bedtime based on sleep diary</li>
                                                    <li>Implement "power-down hour" before bed</li>
                                                    <li>Evaluate and adjust room temperature</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Sleep Trackers */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Sleep Tracking Technology</h2>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Wearable Devices</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                                            <li><strong>Oura Ring</strong> - Tracks temperature, HRV, and movement</li>
                                            <li><strong>Whoop Strap</strong> - Focuses on recovery metrics</li>
                                            <li><strong>Apple Watch</strong> - Now with advanced sleep stages</li>
                                            <li><strong>Fitbit</strong> - Affordable option with good sleep tracking</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Non-Wearable Options</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                                            <li><strong>Withings Sleep Mat</strong> - Goes under mattress</li>
                                            <li><strong>Eight Sleep Pod</strong> - Smart mattress cover</li>
                                            <li><strong>SleepScore Max</strong> - Uses sonar technology</li>
                                            <li><strong>Smart Nora</strong> - Adjusts pillow for snoring</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Pro Tip:</h3>
                                    <p className="text-gray-700">
                                        While trackers provide useful data, don't become obsessed with perfect scores. Use them to identify trends over weeks/months rather than daily fluctuations.
                                    </p>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Improving your sleep is one of the highest-leverage health interventions available. Unlike expensive supplements or extreme diets, better sleep habits are free and provide compounding benefits across all areas of life.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    Remember that sleep improvement is a gradual process. Implement 1-2 habits at a time rather than trying to overhaul everything overnight. Within 2-4 weeks, you'll likely notice:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>Easier mornings with natural energy</li>
                                    <li>Improved focus and productivity</li>
                                    <li>Better mood regulation</li>
                                    <li>Enhanced physical recovery</li>
                                </ul>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "Sleep is the golden chain that ties health and our bodies together." — Thomas Dekker
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
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get better sleep starting tonight</h4>
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

                        {/* Popular Articles */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Related Sleep Articles</h3>
                            <div className="space-y-4">
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=200&h=200&fit=crop" alt="Sleeping person" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">The Science of Sleep Stages</h4>
                                            <p className="text-sm text-gray-600">5 min read</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=200&h=200&fit=crop" alt="Alarm clock" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Best Wake-Up Routines</h4>
                                            <p className="text-sm text-gray-600">6 min read</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Sleep Calculator */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Sleep Calculator</h3>
                            <p className="text-gray-700 text-sm mb-4">
                                Find your ideal bedtime based on wake-up time and sleep cycles (90min each):
                            </p>
                            <div className="space-y-3">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Wake-up time</label>
                                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                                        {Array.from({ length: 24 }, (_, i) => {
                                            const hour = i % 12 || 12
                                            const ampm = i < 12 ? 'AM' : 'PM'
                                            return (
                                                <option key={i} value={i}>{`${hour}:00 ${ampm}`}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Sleep cycles</label>
                                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                                        <option>5 cycles (7.5 hours)</option>
                                        <option>6 cycles (9 hours)</option>
                                        <option>4 cycles (6 hours)</option>
                                    </select>
                                </div>
                                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200">
                                    Calculate Bedtime
                                </button>
                            </div>
                        </div>

                        {/* Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Further Reading</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Why We Sleep by Matthew Walker</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Sleep Foundation Research</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Circadian Rhythm Science</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Sleep Tracking Devices Compared</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}