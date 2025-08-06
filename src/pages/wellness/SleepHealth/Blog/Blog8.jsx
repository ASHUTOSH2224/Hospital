"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Clock, Moon, Sun, AlarmClock, Bed, Coffee, BookOpen, Lightbulb, HeartPulse, Shield, Smartphone } from "lucide-react"

export default function SleepRoutineGuide() {
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

    const tabs = ["Strategies", "Sleep Science", "Routine Builder", "Tools"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Managing Time and Sleep Routines in Modern Life
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
                                In our fast-paced digital world, maintaining healthy sleep routines while managing time effectively has become increasingly challenging. This comprehensive guide explores science-backed strategies to optimize your sleep hygiene, create effective bedtime rituals, and balance productivity with rest in modern life.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80"
                                    alt="Person sleeping peacefully in a well-organized bedroom"
                                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                                    style={{ maxHeight: '500px' }}
                                />
                            </div>

                            {/* Key Takeaways */}
                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
                                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                    <Lightbulb className="w-5 h-5 text-blue-600 mr-2" />
                                    Key Takeaways
                                </h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>Consistent sleep schedules improve productivity by up to 30%</li>
                                    <li>Optimal sleep environment temperature is between 60-67°F (15-19°C)</li>
                                    <li>Blue light exposure before bed delays melatonin production by 90 minutes</li>
                                    <li>Strategic napping can boost cognitive performance without disrupting nighttime sleep</li>
                                    <li>Wind-down routines should begin 60-90 minutes before bedtime</li>
                                </ul>
                            </div>

                            {/* Why Sleep Routines Matter */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Moon className="w-8 h-8 text-blue-600 mr-2" />
                                    The Science of Sleep in Modern Life
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Sleep is not merely downtime between productive periods—it's an active state essential for memory consolidation, emotional regulation, and physical restoration. According to a <a href="#" className="text-blue-600 hover:underline">2024 study in Sleep Medicine Reviews</a>, consistent sleep routines are associated with:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>28% improvement in cognitive performance</li>
                                    <li>42% reduction in stress hormone levels</li>
                                    <li>19% faster metabolic recovery</li>
                                    <li>35% better emotional resilience</li>
                                </ul>

                                <div className="bg-purple-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">The Circadian Rhythm Explained</h3>
                                    <p className="text-gray-700 mb-2">
                                        Your internal body clock regulates sleep-wake cycles over a 24-hour period, influenced by light exposure, meal timing, and activity patterns.
                                    </p>
                                    <p className="text-gray-700">
                                        Modern life disrupts these natural rhythms through artificial lighting, screen time, and irregular schedules—making intentional routines essential.
                                    </p>
                                </div>
                            </section>

                            {/* The 5 Pillars of Sleep Hygiene */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Shield className="w-8 h-8 text-blue-600 mr-2" />
                                    The 5 Pillars of Sleep Hygiene
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Based on research from the National Sleep Foundation, these fundamental elements form the foundation of effective sleep routines:
                                </p>

                                {/* Pillars Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pillar</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Key Components</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Impact</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Consistency</td>
                                                <td className="px-4 py-3">Fixed wake-up time, bedtime routine, weekend variance 1hr</td>
                                                <td className="px-4 py-3">Stabilizes circadian rhythm, improves sleep quality</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Environment</td>
                                                <td className="px-4 py-3">Darkness, cool temperature (60-67°F), quiet, comfortable bedding</td>
                                                <td className="px-4 py-3">Faster sleep onset, fewer awakenings</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Pre-Sleep Routine</td>
                                                <td className="px-4 py-3">90-min wind down, digital detox, relaxation techniques</td>
                                                <td className="px-4 py-3">Reduces cortisol, increases melatonin</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Daytime Habits</td>
                                                <td className="px-4 py-3">Morning light, exercise timing, caffeine cutoff</td>
                                                <td className="px-4 py-3">Strengthens sleep drive, aligns biological clock</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Mindset</td>
                                                <td className="px-4 py-3">Sleep-positive beliefs, stress management, cognitive reframing</td>
                                                <td className="px-4 py-3">Reduces sleep anxiety, improves sleep efficiency</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                {/* Top 3 Highlights */}
                                <div className="grid md:grid-cols-3 gap-6 mb-8">
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">1</span>
                                            The 90-Minute Rule
                                        </h3>
                                        <p className="text-gray-700">
                                            Begin winding down 90 minutes before bed—this allows natural melatonin production to rise and cortisol levels to fall, preparing your body for sleep.
                                        </p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">2</span>
                                            Light Exposure Balance
                                        </h3>
                                        <p className="text-gray-700">
                                            Get bright light within 30 minutes of waking, and reduce blue light exposure after sunset. This simple practice can improve sleep quality by 58%.
                                        </p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">3</span>
                                            The 20-Minute Reset
                                        </h3>
                                        <p className="text-gray-700">
                                            If unable to sleep after 20 minutes, get up and do a quiet activity until sleepy. This prevents associating bed with wakefulness.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Digital Life and Sleep */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Smartphone className="w-8 h-8 text-blue-600 mr-2" />
                                    Managing Technology for Better Sleep
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Electronic devices present one of the greatest challenges to modern sleep hygiene. The blue light emitted suppresses melatonin production while engaging content stimulates cognitive arousal.
                                </p>

                                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                                    <div className="grid grid-cols-3 gap-4 text-center font-medium mb-2">
                                        <div>Device</div>
                                        <div>Melatonin Suppression</div>
                                        <div>Recommended Cutoff</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 text-center mb-1">
                                        <div className="font-medium">Smartphones</div>
                                        <div>Up to 58%</div>
                                        <div>90 min before bed</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 text-center mb-1 bg-blue-50 p-1 rounded">
                                        <div className="font-medium">Tablets</div>
                                        <div>Up to 67%</div>
                                        <div>2 hours before bed</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 text-center mb-1">
                                        <div className="font-medium">LED TVs</div>
                                        <div>Up to 42%</div>
                                        <div>60 min before bed</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 text-center">
                                        <div className="font-medium">E-readers</div>
                                        <div>Up to 23%</div>
                                        <div>30 min before bed (warm light)</div>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-3">Digital Sunset Routine</h3>
                                <ol className="list-decimal list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>Enable night mode 3 hours before bedtime</li>
                                    <li>Switch to amber lighting after sunset</li>
                                    <li>Use app blockers to limit social media use in evenings</li>
                                    <li>Charge devices outside the bedroom</li>
                                    <li>Replace scrolling with audiobooks or podcasts if needed</li>
                                </ol>
                            </section>

                            {/* Sample Evening Routine */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Optimized Evening Routine</h2>

                                <div className="space-y-6">
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Wind Down Phase (90-60 min before bed)</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Digital Detox</h4>
                                                <p className="text-gray-700">Put phones on silent, dim smart home lights to 30%, switch to reading or gentle music</p>
                                            </div>
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Environment Preparation</h4>
                                                <p className="text-gray-700">Set thermostat to 65°F, draw blackout curtains, prepare next day's essentials</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">Relaxation</h4>
                                                <p className="text-gray-700">Gentle stretching, meditation, or gratitude journaling</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Pre-Sleep Phase (60-30 min before bed)</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Personal Care</h4>
                                                <p className="text-gray-700">Warm shower (not hot), skincare routine, brush teeth</p>
                                            </div>
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Mental Transition</h4>
                                                <p className="text-gray-700">Read fiction (paper book or e-ink reader with warm light)</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">Final Checks</h4>
                                                <p className="text-gray-700">Alarm set, white noise machine on, last bathroom visit</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Sleep Phase (Bedtime)</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Positioning</h4>
                                                <p className="text-gray-700">Adopt comfortable position, focus on breathing rhythm</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">Mindset</h4>
                                                <p className="text-gray-700">Practice acceptance if not falling asleep immediately</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Morning Routine */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">The Perfect Morning Routine</h2>

                                <p className="text-gray-700 mb-6">
                                    How you wake up sets the tone for your entire day and influences your ability to sleep well that night. Research shows consistent morning routines improve nighttime sleep quality by 38%.
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Within 5 Minutes of Waking</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Drink a glass of water (rehydrates after 7-9 hours without fluids)</li>
                                            <li>Get bright light exposure (open curtains or use light therapy lamp)</li>
                                            <li>Move your body (stretching or brief exercise)</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">First 60 Minutes</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Avoid checking emails/social media for first 30 minutes</li>
                                            <li>Eat protein-rich breakfast (stabilizes blood sugar)</li>
                                            <li>Review daily priorities and schedule</li>
                                            <li>Engage in mindfulness practice</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Pro Tip:</h3>
                                    <p className="text-gray-700">
                                        Keep your wake-up time consistent (±30 minutes) even on weekends. This regularity strengthens your circadian rhythm more than any other single factor.
                                    </p>
                                </div>
                            </section>

                            {/* Napping Strategies */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Strategic Napping for Modern Life</h2>

                                <p className="text-gray-700 mb-6">
                                    When properly timed, naps can enhance productivity without compromising nighttime sleep. Follow these evidence-based guidelines:
                                </p>

                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nap Type</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Best Time</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Benefits</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Power Nap</td>
                                                <td className="px-4 py-3 whitespace-nowrap">10-20 min</td>
                                                <td className="px-4 py-3 whitespace-nowrap">1-3 PM</td>
                                                <td className="px-4 py-3">Quick energy boost, no grogginess</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Cognitive Nap</td>
                                                <td className="px-4 py-3 whitespace-nowrap">30 min</td>
                                                <td className="px-4 py-3 whitespace-nowrap">2 PM</td>
                                                <td className="px-4 py-3">Memory consolidation, creativity</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Recovery Nap</td>
                                                <td className="px-4 py-3 whitespace-nowrap">90 min</td>
                                                <td className="px-4 py-3 whitespace-nowrap">When sleep deprived</td>
                                                <td className="px-4 py-3">Complete sleep cycle restoration</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <h3 className="font-bold text-gray-900 mb-2">Nap Precautions:</h3>
                                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                                        <li>Avoid napping after 4 PM as it may delay bedtime</li>
                                        <li>Limit naps to 30 minutes unless severely sleep deprived</li>
                                        <li>Use naps strategically rather than routinely</li>
                                        <li>Combine with caffeine (coffee nap) for enhanced alertness</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Creating and maintaining healthy sleep routines in modern life requires intentionality but pays dividends in improved productivity, emotional well-being, and physical health. Remember that consistency matters more than perfection—small, sustainable changes compound over time.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    Your sleep environment and habits should evolve with your lifestyle needs. Regularly assess what's working and make adjustments as your schedule, responsibilities, or health status change.
                                </p>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "Quality sleep isn't a luxury—it's the foundation upon which effective time management and daily performance are built. Prioritize your sleep routine with the same seriousness you approach important work projects."
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
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get science-backed sleep tips</h4>
                                <p className="text-gray-700 text-sm">
                                    Weekly routines, research summaries, and expert advice for better sleep.
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

                        {/* Sleep Tracker Comparison */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Top Sleep Trackers</h3>
                            <div className="space-y-4">
                                <div className="border-b border-gray-200 pb-4">
                                    <h4 className="font-medium text-gray-900">Wearable Trackers</h4>
                                    <ul className="list-disc list-inside text-gray-700 text-sm mt-2 space-y-1">
                                        <li>Oura Ring (most accurate)</li>
                                        <li>Fitbit Sense (best value)</li>
                                        <li>Apple Watch (best integration)</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900">Non-Wearable Options</h4>
                                    <ul className="list-disc list-inside text-gray-700 text-sm mt-2 space-y-1">
                                        <li>Withings Sleep Mat (under mattress)</li>
                                        <li>Eight Sleep Pod (smart mattress)</li>
                                        <li>SleepScore Max (bedside device)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Sleep Aids */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Evidence-Based Sleep Aids</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span className="font-medium">Supplement</span>
                                    <span className="font-medium">Effectiveness</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Melatonin</span>
                                    <span className="text-blue-600">High for jet lag</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Magnesium Glycinate</span>
                                    <span className="text-blue-600">Moderate for relaxation</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>L-Theanine</span>
                                    <span className="text-blue-600">Mild for stress reduction</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Valerian Root</span>
                                    <span className="text-blue-600">Mixed evidence</span>
                                </div>
                            </div>
                        </div>

                        {/* Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Further Reading</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">The Circadian Code (Book)</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Sleep Foundation Guidelines</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Blue Light Filter Apps</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Meditation for Sleep</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}