"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Moon, Sun, Clock, Heart, Bookmark, Share2, ArrowUp, Check, Zap, Battery, Activity } from "lucide-react"

export default function SleepTransformationJourney() {
    const [email, setEmail] = useState("")
    const [activeTab, setActiveTab] = useState("Journey")
    const [showScrollButton, setShowScrollButton] = useState(false)

    const handleEmailSubmit = (e) => {
        e.preventDefault()
        console.log("Email submitted:", email)
        setEmail("")
    }

    useEffect(() => {
        // Scroll to top when the component mounts
        window.scrollTo(0, 0)

        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowScrollButton(true)
            } else {
                setShowScrollButton(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    const tabs = ["Journey", "Techniques", "Results", "Resources"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Real Sleep Transformations: A Sleep Enthusiast's Journey
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
                                Discover real experiences and practical advice from sleep optimization enthusiasts on building sustainable sleep routines, mastering new techniques, and maintaining motivation throughout their sleep health journey. This comprehensive guide shares transformative stories, data-backed methods, and actionable steps to revolutionize your sleep quality.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1520206183501-b80df61043c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80"
                                    alt="Peaceful sleeping person"
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
                                    <li>Consistent sleep schedules can improve sleep quality by up to 40%</li>
                                    <li>Light exposure management is crucial for circadian rhythm alignment</li>
                                    <li>Sleep tracking reveals personalized patterns and improvement opportunities</li>
                                    <li>Mindfulness practices reduce sleep onset time by an average of 15 minutes</li>
                                    <li>Temperature optimization (60-67°F) significantly enhances deep sleep</li>
                                </ul>
                            </div>

                            {/* The Transformation Journey */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Moon className="w-8 h-8 text-blue-600 mr-2" />
                                    The Transformation Journey
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    My sleep transformation began after years of struggling with inconsistent sleep patterns, frequent awakenings, and morning fatigue. Like many, I underestimated sleep's impact until experiencing its profound effects firsthand. The journey wasn't linear—it involved experimentation, setbacks, and ultimately, breakthroughs that changed my relationship with sleep.
                                </p>

                                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Before the Transformation</h3>
                                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                                        <li>Average sleep duration: 5-6 hours (inconsistent)</li>
                                        <li>Sleep onset: 45-60 minutes</li>
                                        <li>3-4 nighttime awakenings</li>
                                        <li>Morning fatigue rating: 7/10</li>
                                        <li>Reliance on caffeine to function</li>
                                    </ul>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">The Turning Point</h3>
                                <p className="text-gray-700 mb-4">
                                    The wake-up call came during a routine health checkup where my doctor noted elevated cortisol levels and borderline hypertension. Research revealed strong connections between poor sleep and these markers. This began my dedicated journey toward sleep optimization.
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">1</span>
                                            Phase 1: Awareness & Tracking
                                        </h3>
                                        <p className="text-gray-700">
                                            For two weeks, I meticulously tracked sleep patterns using a wearable device and journal. This revealed:
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 mt-2 ml-4">
                                            <li>Inconsistent bedtime (varying by 2+ hours)</li>
                                            <li>Late-day caffeine consumption</li>
                                            <li>Screen use until bedtime</li>
                                        </ul>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">2</span>
                                            Phase 2: Gradual Adjustments
                                        </h3>
                                        <p className="text-gray-700">
                                            Implemented changes in 2-week increments:
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 mt-2 ml-4">
                                            <li>Fixed wake-up time (±15 minutes)</li>
                                            <li>Caffeine cutoff by 2 PM</li>
                                            <li>Blue light filters after sunset</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Sleep Optimization Techniques */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Check className="w-8 h-8 text-blue-600 mr-2" />
                                    Proven Sleep Optimization Techniques
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Through extensive research and experimentation, these techniques delivered the most significant improvements:
                                </p>

                                {/* Techniques Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Technique</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Implementation</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Impact</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Difficulty</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Circadian Alignment</td>
                                                <td className="px-4 py-3">Morning sunlight, consistent schedule</td>
                                                <td className="px-4 py-3">High (sleep quality +35%)</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Medium</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Temperature Optimization</td>
                                                <td className="px-4 py-3">Bedroom at 65°F, cooling mattress pad</td>
                                                <td className="px-4 py-3">High (deep sleep +28%)</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Low</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Digital Sunset</td>
                                                <td className="px-4 py-3">No screens 90 min before bed</td>
                                                <td className="px-4 py-3">Medium (sleep onset -22 min)</td>
                                                <td className="px-4 py-3 whitespace-nowrap">High</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Nutrition Timing</td>
                                                <td className="px-4 py-3">Last meal 3h before bed, magnesium-rich foods</td>
                                                <td className="px-4 py-3">Medium (awakenings -40%)</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Medium</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Light Exposure Management</h3>
                                <p className="text-gray-700 mb-4">
                                    Light is the most powerful circadian cue. Implementing these light strategies transformed my sleep:
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-2">Morning Routine</h4>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>15 min outdoor light within 30 min of waking</li>
                                            <li>Bright artificial light if sunrise is late</li>
                                            <li>No sunglasses for first hour (except safety)</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-2">Evening Routine</h4>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>Amber lighting after sunset</li>
                                            <li>Blue light filters on all devices</li>
                                            <li>Dim house lights progressively</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Pro Tip:</h3>
                                    <p className="text-gray-700">
                                        Use a lux meter app to measure light intensity. Aim for 10,000+ lux in morning and 10 lux at eye level during sleep preparation.
                                    </p>
                                </div>
                            </section>

                            {/* Measurable Results */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Activity className="w-8 h-8 text-blue-600 mr-2" />
                                    Measurable Results After 6 Months
                                </h2>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Sleep Metrics</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Sleep Duration</h4>
                                                <p className="text-gray-700">5.5h → 7.25h (consistent)</p>
                                            </div>
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Sleep Efficiency</h4>
                                                <p className="text-gray-700">78% → 92%</p>
                                            </div>
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Sleep Onset</h4>
                                                <p className="text-gray-700">45min → 12min</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">Awakenings</h4>
                                                <p className="text-gray-700">3.4/night → 0.7/night</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Daytime Metrics</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Morning Alertness</h4>
                                                <p className="text-gray-700">4/10 → 8/10</p>
                                            </div>
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Productivity</h4>
                                                <p className="text-gray-700">+32% (measured by output)</p>
                                            </div>
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Caffeine Use</h4>
                                                <p className="text-gray-700">3 cups → 1 cup</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">Mood Stability</h4>
                                                <p className="text-gray-700">Significantly improved</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Long-Term Benefits</h3>
                                <p className="text-gray-700 mb-4">
                                    Beyond immediate sleep improvements, these changes created compounding benefits:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>Resting heart rate decreased by 8 bpm</li>
                                    <li>Blood pressure normalized (120/80 from 135/85)</li>
                                    <li>Recovery from workouts accelerated</li>
                                    <li>Decision-making and creativity noticeably improved</li>
                                </ul>
                            </section>

                            {/* Maintenance Strategies */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Maintaining Sleep Gains</h2>

                                <p className="text-gray-700 mb-6">
                                    The true challenge isn't achieving good sleep, but sustaining it long-term. These strategies helped maintain my sleep transformation:
                                </p>

                                <div className="space-y-6">
                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">The 90% Rule</h3>
                                        <p className="text-gray-700 mb-2">
                                            Instead of perfection, aim for 90% adherence. This allows for life's unpredictability while maintaining progress.
                                        </p>
                                        <p className="text-gray-700">
                                            <span className="font-semibold">Example:</span> Strict bedtime 9 nights/week, with 1 flexible night for social events.
                                        </p>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">Recovery Protocols</h3>
                                        <p className="text-gray-700 mb-2">
                                            For inevitable sleep disruptions (travel, illness), these recovery methods help reset quickly:
                                        </p>
                                        <ol className="list-decimal list-inside text-gray-700 space-y-1 ml-4">
                                            <li>Next-day fasting until local breakfast time</li>
                                            <li>Extra morning light exposure</li>
                                            <li>Strategic caffeine timing (only before noon)</li>
                                            <li>20-minute afternoon nap if needed</li>
                                        </ol>
                                    </div>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Reflections</h2>

                                <p className="text-gray-700 mb-4">
                                    This sleep transformation journey taught me that quality sleep isn't a luxury—it's the foundation of health, performance, and wellbeing. The investment in sleep optimization has paid dividends across all areas of life.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    Most importantly, I learned that sleep improvement is highly personal. While science provides guidelines, each person must experiment to discover what works best for their unique physiology and lifestyle.
                                </p>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "Sleep optimization isn't about rigid rules—it's about developing an intuitive understanding of your body's needs and creating an environment where great sleep comes naturally."
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
                                            Dr. Alan Thompson, Sleep Specialist
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600 mb-1">
                                        — Written by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            James Wilson
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
                                    Weekly sleep tips, research summaries, and exclusive content to transform your rest.
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

                        {/* Popular Tools */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Recommended Sleep Tools</h3>
                            <div className="space-y-4">
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/sleep-tracker.jpg" alt="Sleep tracker" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Oura Ring Gen3</h4>
                                            <p className="text-sm text-gray-600">4.9 ★ (2,417 reviews)</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/light-therapy.jpg" alt="Light therapy lamp" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Circadian Light Therapy Lamp</h4>
                                            <p className="text-sm text-gray-600">4.7 ★ (893 reviews)</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Sleep Stages Chart */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Ideal Sleep Cycle</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span className="font-medium">Stage</span>
                                    <span className="font-medium">% of Night</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Light Sleep</span>
                                    <span className="text-blue-600">50-60%</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Deep Sleep</span>
                                    <span className="text-blue-600">15-25%</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>REM Sleep</span>
                                    <span className="text-blue-600">20-25%</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Awake</span>
                                    <span className="text-blue-600">5%</span>
                                </div>
                            </div>
                        </div>

                        {/* Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Further Reading</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">The Science of Circadian Rhythms</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Sleep Tracking Device Comparison</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Nutrition for Better Sleep</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Managing Shift Work Sleep Disorder</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Scroll to Top Button */}
            {showScrollButton && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-200 z-50"
                    aria-label="Scroll to top"
                >
                    <ArrowUp className="w-5 h-5" />
                </button>
            )}
        </div>
    )
}