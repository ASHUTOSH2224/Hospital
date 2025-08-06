"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Moon, Sun, Clock, Droplet, EyeOff, Thermometer, BookOpen, Coffee, Smartphone, AlarmClock, Leaf } from "lucide-react"

export default function SleepHygieneGuide() {
    const [email, setEmail] = useState("")
    const [activeTab, setActiveTab] = useState("Basics")

    const handleEmailSubmit = (e) => {
        e.preventDefault()
        console.log("Email submitted:", email)
        setEmail("")
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const tabs = ["Basics", "Environment", "Routine", "Troubleshooting"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                A Beginner's Guide to Sleep Hygiene: Transform Your Sleep Quality
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
                                Sleep hygiene refers to the habits and practices that are conducive to sleeping well on a regular basis. Establishing good sleep hygiene is one of the most effective ways to improve sleep quality, boost daytime energy, and enhance overall health. This comprehensive guide covers everything beginners need to know to optimize their sleep environment and routines.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1586368939344-48171a53d386?w=800&fit=crop"
                                    alt="Person sleeping peacefully in bed"
                                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                                    style={{ maxHeight: '500px' }}
                                />
                            </div>

                            {/* Key Takeaways */}
                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
                                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                    <Leaf className="w-5 h-5 text-blue-600 mr-2" />
                                    Key Takeaways
                                </h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>Consistent sleep schedule is more important than sleep duration</li>
                                    <li>Light exposure controls your circadian rhythm more than any other factor</li>
                                    <li>Bedroom temperature should be between 60-67°F (15-19°C) for optimal sleep</li>
                                    <li>30 minutes of morning sunlight can improve sleep quality by 50%</li>
                                    <li>Alcohol disrupts REM sleep even if it helps you fall asleep faster</li>
                                </ul>
                            </div>

                            {/* Why Sleep Hygiene Matters */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Moon className="w-8 h-8 text-blue-600 mr-2" />
                                    Why Sleep Hygiene Matters
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    According to the <a href="#" className="text-blue-600 hover:underline">National Sleep Foundation</a>, approximately 35% of adults report getting less than the recommended 7 hours of sleep per night. Poor sleep hygiene contributes to:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>Increased risk of chronic conditions (obesity, diabetes, cardiovascular disease)</li>
                                    <li>Impaired cognitive function and memory consolidation</li>
                                    <li>Weakened immune system function</li>
                                    <li>Higher levels of stress and emotional instability</li>
                                    <li>Reduced life expectancy by up to 5 years in severe cases</li>
                                </ul>

                                <div className="bg-purple-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">The Sleep Cycle Explained</h3>
                                    <p className="text-gray-700 mb-2">
                                        A complete sleep cycle lasts about 90 minutes and includes both REM (rapid eye movement) and non-REM sleep stages. Adults typically need 4-6 complete cycles per night.
                                    </p>
                                    <p className="text-gray-700">
                                        Non-REM sleep dominates the first half of the night while REM sleep increases in duration during the second half.
                                    </p>
                                </div>
                            </section>

                            {/* The Fundamentals of Sleep Hygiene */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Check className="w-8 h-8 text-blue-600 mr-2" />
                                    The Fundamentals of Sleep Hygiene
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    These evidence-based practices form the foundation of good sleep hygiene. Implement them consistently for at least 3 weeks to see significant improvements in sleep quality.
                                </p>

                                {/* Sleep Hygiene Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Practice</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Importance</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Implementation</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Impact</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            {/* Row 1 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Consistent Schedule</td>
                                                <td className="px-4 py-3 whitespace-nowrap">High</td>
                                                <td className="px-4 py-3">Same bedtime/waketime ±30min</td>
                                                <td className="px-4 py-3">Regulates circadian rhythm</td>
                                            </tr>
                                            {/* Row 2 */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Light Exposure</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Critical</td>
                                                <td className="px-4 py-3">Morning sun, limit evening blue light</td>
                                                <td className="px-4 py-3">Controls melatonin production</td>
                                            </tr>
                                            {/* Row 3 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Caffeine Timing</td>
                                                <td className="px-4 py-3 whitespace-nowrap">High</td>
                                                <td className="px-4 py-3">None after 2pm</td>
                                                <td className="px-4 py-3">Prevents adenosine blockage</td>
                                            </tr>
                                            {/* Row 4 */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Bedroom Environment</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Moderate-High</td>
                                                <td className="px-4 py-3">Cool, dark, quiet</td>
                                                <td className="px-4 py-3">Facilitates sleep onset</td>
                                            </tr>
                                            {/* Row 5 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Wind Down Routine</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Moderate</td>
                                                <td className="px-4 py-3">30-60min pre-bed relaxation</td>
                                                <td className="px-4 py-3">Reduces sleep latency</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <p className="text-gray-700 mb-6">
                                    *Note: Individual responses may vary based on chronotype (natural sleep-wake preference) and genetics.
                                </p>

                                {/* Top 3 Highlights */}
                                <div className="grid md:grid-cols-3 gap-6 mb-8">
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">1</span>
                                            Light Is Everything
                                        </h3>
                                        <p className="text-gray-700">
                                            Your eyes contain specialized cells that detect light and directly communicate with your brain's sleep center. Just 5 lux of light (equivalent to a dim lamp) can suppress melatonin by 15%.
                                        </p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">2</span>
                                            Consistency Over Duration
                                        </h3>
                                        <p className="text-gray-700">
                                            Going to bed at the same time every night is more important than getting 8 hours. A regular schedule trains your body to expect sleep at certain times, making falling asleep easier.
                                        </p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">3</span>
                                            Temperature Matters
                                        </h3>
                                        <p className="text-gray-700">
                                            Core body temperature needs to drop by about 1°C to initiate sleep. A bedroom temperature of 65°F (18°C) is ideal for most people to facilitate this natural temperature decline.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Optimizing Your Sleep Environment */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Thermometer className="w-8 h-8 text-blue-600 mr-2" />
                                    Optimizing Your Sleep Environment
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Your bedroom should be a sanctuary for sleep. Follow this checklist to create the ideal sleep environment:
                                </p>

                                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center">
                                                <EyeOff className="w-5 h-5 text-blue-600 mr-2" />
                                                Light Control
                                            </h3>
                                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                                <li>Blackout curtains or sleep mask</li>
                                                <li>Remove or cover all LED lights</li>
                                                <li>Use dim red bulbs for night lights</li>
                                                <li>Install smart bulbs that automatically dim at sunset</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center">
                                                <Droplet className="w-5 h-5 text-blue-600 mr-2" />
                                                Temperature & Air Quality
                                            </h3>
                                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                                <li>Maintain 60-67°F (15-19°C)</li>
                                                <li>Use breathable cotton sheets</li>
                                                <li>Consider a cooling mattress pad if needed</li>
                                                <li>Air purifier for allergen reduction</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-gray-700 mb-6">
                                    The ideal sleep environment addresses all five senses:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li><strong>Sight:</strong> Complete darkness or very dim red light</li>
                                    <li><strong>Sound:</strong> Quiet or consistent white noise (40-50 dB ideal)</li>
                                    <li><strong>Touch:</strong> Comfortable mattress and temperature-regulated bedding</li>
                                    <li><strong>Smell:</strong> Neutral or lightly lavender-scented</li>
                                    <li><strong>Taste:</strong> No eating right before bed (except possibly tart cherry juice)</li>
                                </ul>
                            </section>

                            {/* Creating a Sleep Routine */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Creating a Sleep Routine That Works</h2>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Evening Wind Down</h3>
                                        <p className="text-gray-700 mb-2">
                                            The last 60-90 minutes before bed should be a gradual transition to sleep mode:
                                        </p>
                                        <ol className="list-decimal list-inside text-gray-700 space-y-1">
                                            <li>Dim lights throughout house (use lamps instead of overhead)</li>
                                            <li>Disconnect from screens or use blue light filters</li>
                                            <li>Engage in relaxing activities (reading, light stretching)</li>
                                            <li>Practice gratitude journaling or meditation</li>
                                            <li>Take warm bath or shower 1-2 hours before bed</li>
                                        </ol>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Morning Routine</h3>
                                        <p className="text-gray-700 mb-2">
                                            How you start your day affects how you end it:
                                        </p>
                                        <ol className="list-decimal list-inside text-gray-700 space-y-1">
                                            <li>Get sunlight within 30 minutes of waking</li>
                                            <li>Hydrate with water (not coffee first)</li>
                                            <li>Move your body (walk, stretch, exercise)</li>
                                            <li>Eat a protein-rich breakfast</li>
                                            <li>Avoid checking email/social media immediately</li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Pro Tip:</h3>
                                    <p className="text-gray-700">
                                        If you can't fall asleep within 20 minutes, get out of bed and do something relaxing in dim light until you feel sleepy. This prevents your brain from associating the bed with wakefulness.
                                    </p>
                                </div>
                            </section>

                            {/* Common Sleep Disruptors */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Sleep Disruptors and Solutions</h2>

                                <div className="space-y-6">
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Technology</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Problem:</h4>
                                                <p className="text-gray-700">Blue light from screens suppresses melatonin production by up to 50%</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">Solutions:</h4>
                                                <ul className="list-disc list-inside text-gray-700 ml-4">
                                                    <li>Implement a digital sunset 1-2 hours before bed</li>
                                                    <li>Use blue light filters on all devices</li>
                                                    <li>Charge phones outside the bedroom</li>
                                                    <li>Switch to e-ink readers for bedtime reading</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Food & Drink</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Problem:</h4>
                                                <p className="text-gray-700">Certain substances disrupt sleep architecture and quality</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">Solutions:</h4>
                                                <ul className="list-disc list-inside text-gray-700 ml-4">
                                                    <li>Avoid caffeine after 2pm (half-life of 5-6 hours)</li>
                                                    <li>Limit alcohol within 3 hours of bedtime</li>
                                                    <li>Finish eating 2-3 hours before sleep</li>
                                                    <li>Consider small protein snack if hungry</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Stress & Anxiety</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Problem:</h4>
                                                <p className="text-gray-700">Racing thoughts activate the sympathetic nervous system</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">Solutions:</h4>
                                                <ul className="list-disc list-inside text-gray-700 ml-4">
                                                    <li>Practice progressive muscle relaxation</li>
                                                    <li>Use 4-7-8 breathing technique</li>
                                                    <li>Keep a "worry journal" earlier in evening</li>
                                                    <li>Try guided sleep meditations</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Sample Sleep Schedule */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Sample Sleep Schedule for Different Chronotypes</h2>

                                <div className="overflow-x-auto">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Chronotype</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bedtime</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Wake Time</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Peak Productivity</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tips</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Lion (Morning)</td>
                                                <td className="px-4 py-3 whitespace-nowrap">9:30-10:30pm</td>
                                                <td className="px-4 py-3 whitespace-nowrap">5:30-6:30am</td>
                                                <td className="px-4 py-3">6am-12pm</td>
                                                <td className="px-4 py-3">Exercise early, limit evening socializing</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Bear (Day)</td>
                                                <td className="px-4 py-3 whitespace-nowrap">10:30-11:30pm</td>
                                                <td className="px-4 py-3 whitespace-nowrap">6:30-7:30am</td>
                                                <td className="px-4 py-3">9am-2pm</td>
                                                <td className="px-4 py-3">Align work hours with natural rhythm</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Wolf (Evening)</td>
                                                <td className="px-4 py-3 whitespace-nowrap">12-1am</td>
                                                <td className="px-4 py-3 whitespace-nowrap">8-9am</td>
                                                <td className="px-4 py-3">4-9pm</td>
                                                <td className="px-4 py-3">Morning light therapy, gradual adjustments</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Improving sleep hygiene is a process, not an overnight fix. Start with one or two changes from this guide and gradually incorporate more as those become habits. Remember that perfection isn't necessary—consistency matters more than occasional ideal nights.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    Track your progress with a sleep journal or app to identify what works best for your unique biology and lifestyle. Small, sustainable changes compound over time to create significant improvements in sleep quality and daytime energy.
                                </p>

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
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get better sleep starting tonight</h4>
                                <p className="text-gray-700 text-sm">
                                    Weekly tips, sleep trackers, and science-backed advice for your best sleep ever.
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
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Popular Sleep Articles</h3>
                            <div className="space-y-4">
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/sleep-article1.jpg" alt="Sleeping person" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">The Science of Sleep Cycles</h4>
                                            <p className="text-sm text-gray-600">4.9 ★ (87 reviews)</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/sleep-article2.jpg" alt="Alarm clock" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Best Wake-Up Light Alarm Clocks</h4>
                                            <p className="text-sm text-gray-600">4.7 ★ (56 reviews)</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/sleep-article3.jpg" alt="Meditation" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Bedtime Meditation Techniques</h4>
                                            <p className="text-sm text-gray-600">4.8 ★ (92 reviews)</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Sleep Tracker */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Sleep Tracker Checklist</h3>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <input type="checkbox" id="schedule" className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                                    <label htmlFor="schedule" className="text-gray-700">Consistent bedtime/waketime</label>
                                </div>
                                <div className="flex items-center gap-3">
                                    <input type="checkbox" id="light" className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                                    <label htmlFor="light" className="text-gray-700">Morning sunlight exposure</label>
                                </div>
                                <div className="flex items-center gap-3">
                                    <input type="checkbox" id="caffeine" className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                                    <label htmlFor="caffeine" className="text-gray-700">No caffeine after 2pm</label>
                                </div>
                                <div className="flex items-center gap-3">
                                    <input type="checkbox" id="screen" className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                                    <label htmlFor="screen" className="text-gray-700">Screen-free 1 hour before bed</label>
                                </div>
                                <div className="flex items-center gap-3">
                                    <input type="checkbox" id="environment" className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                                    <label htmlFor="environment" className="text-gray-700">Cool, dark, quiet bedroom</label>
                                </div>
                            </div>
                        </div>

                        {/* Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Further Reading</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Sleep Tracking Devices Compared</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Best Foods for Better Sleep</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Managing Shift Work Sleep Disorder</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Sleep Supplements: What Works?</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">The Connection Between Sleep and Weight Loss</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}