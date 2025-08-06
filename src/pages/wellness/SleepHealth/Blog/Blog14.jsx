"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Moon, Bed, Thermometer, Lightbulb, Volume2, Leaf, Shield, Star, Clock, Heart, RectangleEllipsis } from "lucide-react"

export default function SleepSafetyGuide() {
    const [email, setEmail] = useState("")
    const [activeTab, setActiveTab] = useState("Hygiene")

    const handleEmailSubmit = (e) => {
        e.preventDefault()
        console.log("Email submitted:", email)
        setEmail("")
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const tabs = ["Hygiene", "Environment", "Safety", "Routines"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Sleep Safety: Understanding Proper Sleep Hygiene and Environment
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
                                Quality sleep is foundational to health, yet many struggle with creating the optimal sleep environment and habits. This comprehensive guide covers sleep hygiene practices, bedroom setup, safety considerations, and evidence-based strategies to transform your sleep quality and safety.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80"
                                    alt="Peaceful bedroom setup for optimal sleep"
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
                                    <li>Ideal sleep temperature ranges between 60-67°F (15.6-19.4°C)</li>
                                    <li>Complete darkness can improve melatonin production by up to 50%</li>
                                    <li>Consistent sleep schedules reduce sleep onset time by an average of 37%</li>
                                    <li>Proper pillow support reduces neck pain complaints by 42%</li>
                                    <li>White noise machines can mask up to 70% of disruptive environmental sounds</li>
                                </ul>
                            </div>

                            {/* The Science of Sleep Hygiene */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Moon className="w-8 h-8 text-blue-600 mr-2" />
                                    The Science of Sleep Hygiene
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Sleep hygiene refers to behaviors and environmental factors that promote consistent, uninterrupted sleep. According to a <a href="#" className="text-blue-600 hover:underline">2023 meta-analysis in Sleep Medicine Reviews</a>, proper sleep hygiene is associated with:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>38% improvement in sleep efficiency (time asleep vs. time in bed)</li>
                                    <li>27% reduction in nighttime awakenings</li>
                                    <li>19% decrease in sleep onset latency (time to fall asleep)</li>
                                    <li>14% increase in deep sleep duration</li>
                                </ul>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                                            <Clock className="w-6 h-6 text-blue-500 mr-2" />
                                            Circadian Rhythm Alignment
                                        </h3>
                                        <p className="text-gray-700">
                                            Your body's internal clock thrives on consistency. Going to bed and waking at the same time daily (even weekends) strengthens circadian rhythms. Light exposure in the morning helps regulate melatonin production.
                                        </p>
                                    </div>
                                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                                            <Heart className="w-6 h-6 text-blue-500 mr-2" />
                                            Pre-Sleep Routine
                                        </h3>
                                        <p className="text-gray-700">
                                            A 30-60 minute wind-down routine signals your body to prepare for sleep. This might include reading, light stretching, meditation, or gentle music. Avoid stimulating activities like work or intense exercise.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-purple-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Sleep Hygiene Checklist</h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Limit caffeine after 2pm</li>
                                            <li>Avoid alcohol within 3 hours of bedtime</li>
                                            <li>Finish eating 2-3 hours before bed</li>
                                            <li>Establish a digital curfew (no screens 1 hour before sleep)</li>
                                        </ul>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Keep naps under 30 minutes</li>
                                            <li>Exercise regularly (but not right before bed)</li>
                                            <li>Manage stress through journaling or meditation</li>
                                            <li>Use bed only for sleep and intimacy</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Optimizing Your Sleep Environment */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Bed className="w-8 h-8 text-blue-600 mr-2" />
                                    Optimizing Your Sleep Environment
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Your bedroom should be a sanctuary for sleep. Research shows environmental factors account for approximately 40% of sleep quality variance. Below is a detailed breakdown of optimal sleep environment parameters:
                                </p>

                                {/* Sleep Environment Parameters Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Factor</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ideal Range</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Impact on Sleep</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Improvement Tips</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Temperature</td>
                                                <td className="px-4 py-3 whitespace-nowrap">60-67°F (15.6-19.4°C)</td>
                                                <td className="px-4 py-3">Core body temp drops during sleep; cooler rooms facilitate this</td>
                                                <td className="px-4 py-3">Use breathable bedding, consider a cooling mattress pad</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Light</td>
                                                <td className="px-4 py-3 whitespace-nowrap">0-50 lux (pitch dark ideal)</td>
                                                <td className="px-4 py-3">Light suppresses melatonin; even small amounts can disrupt sleep</td>
                                                <td className="px-4 py-3">Blackout curtains, eye mask, remove electronics with LEDs</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Noise</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Below 30 dB (quiet as library)</td>
                                                <td className="px-4 py-3">Unexpected noises cause micro-arousals disrupting sleep cycles</td>
                                                <td className="px-4 py-3">White noise machine, earplugs, soundproofing</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Humidity</td>
                                                <td className="px-4 py-3 whitespace-nowrap">40-60% RH</td>
                                                <td className="px-4 py-3">Prevents dry airways or excessive moisture that disrupts breathing</td>
                                                <td className="px-4 py-3">Humidifier/dehumidifier as needed, monitor with hygrometer</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Air Quality</td>
                                                <td className="px-4 py-3 whitespace-nowrap">CO₂ 1000 ppm</td>
                                                <td className="px-4 py-3">Poor air quality leads to headaches and restless sleep</td>
                                                <td className="px-4 py-3">Air purifier, open windows when possible, houseplants</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                {/* Bedding Selection Guide */}
                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                        <RectangleEllipsis className="w-6 h-6 text-blue-500 mr-2" />
                                        Bedding Selection Guide
                                    </h3>
                                    <div className="grid md:grid-cols-3 gap-4">
                                        <div className="border border-gray-200 rounded-lg p-4">
                                            <h4 className="font-bold text-gray-900 mb-2">Mattress</h4>
                                            <p className="text-gray-700 text-sm">
                                                Medium-firm (5-7 on firmness scale) provides best spinal alignment. Replace every 7-10 years.
                                            </p>
                                        </div>
                                        <div className="border border-gray-200 rounded-lg p-4">
                                            <h4 className="font-bold text-gray-900 mb-2">Pillows</h4>
                                            <p className="text-gray-700 text-sm">
                                                Side sleepers need thicker pillows, back sleepers medium, stomach sleepers thin. Replace every 1-2 years.
                                            </p>
                                        </div>
                                        <div className="border border-gray-200 rounded-lg p-4">
                                            <h4 className="font-bold text-gray-900 mb-2">Bedding Materials</h4>
                                            <p className="text-gray-700 text-sm">
                                                Natural fibers (cotton, linen, bamboo) regulate temperature better than synthetics.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Lighting Considerations */}
                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Lighting Pro Tip:</h3>
                                    <p className="text-gray-700">
                                        Install dimmable red or amber nightlights for bathroom trips. These wavelengths least affect melatonin compared to blue or white light.
                                    </p>
                                </div>
                            </section>

                            {/* Sleep Safety Protocols */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Shield className="w-8 h-8 text-blue-600 mr-2" />
                                    Sleep Safety Protocols
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    While optimizing for quality sleep, we must also consider safety. Each year, approximately 1,500 deaths occur from sleep-related injuries in the US alone. Follow these safety guidelines:
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Child & Infant Safety</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                                            <li>Firm mattress with tight-fitting sheet</li>
                                            <li>No pillows, blankets, or stuffed animals under 1 year</li>
                                            <li>Back-sleeping position reduces SIDS risk by 50%</li>
                                            <li>Room-sharing (but not bed-sharing) for first 6-12 months</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Adult & Elderly Safety</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                                            <li>Bed rails for those at risk of falling</li>
                                            <li>Non-slip rugs beside bed</li>
                                            <li>Clear path to bathroom with nightlights</li>
                                            <li>CPAP maintenance if prescribed for sleep apnea</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Fire Safety */}
                                <div className="border border-gray-200 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Fire Safety Considerations</h3>
                                    <div className="grid md:grid-cols-3 gap-4 text-center">
                                        <div>
                                            <h4 className="font-medium text-gray-900 mb-1">Smoke Alarms</h4>
                                            <p className="text-gray-700 text-sm">Test monthly, replace batteries yearly, replace units every 10 years</p>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 mb-1">Escape Plan</h4>
                                            <p className="text-gray-700 text-sm">Practice twice yearly, know two ways out of every room</p>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 mb-1">Hazard Check</h4>
                                            <p className="text-gray-700 text-sm">No space heaters near bedding, check electrical cords</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Sleep Disruptors and Solutions */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Sleep Disruptors and Solutions</h2>

                                <div className="space-y-6">
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Partner Disturbances</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Snoring</h4>
                                                <p className="text-gray-700">Encourage side sleeping, nasal strips, or medical evaluation for sleep apnea</p>
                                            </div>
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Movement</h4>
                                                <p className="text-gray-700">Larger bed, separate blankets, memory foam mattress to absorb motion</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">Different Schedules</h4>
                                                <p className="text-gray-700">Eye masks, white noise, consider temporary separate sleeping arrangements</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Environmental Challenges</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Noisy Neighborhood</h4>
                                                <p className="text-gray-700">Double-pane windows, heavy curtains, white noise machine (50-60 dB)</p>
                                            </div>
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Street Lights</h4>
                                                <p className="text-gray-700">Blackout curtains, sleep mask, window tinting</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">Small Children</h4>
                                                <p className="text-gray-700">Baby monitor with adjustable volume, establish sleep training routines</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Final Recommendations */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Recommendations</h2>

                                <p className="text-gray-700 mb-4">
                                    Transforming your sleep environment and habits requires attention to multiple factors, but the health benefits are substantial. The American Academy of Sleep Medicine recommends prioritizing these three foundational elements:
                                </p>

                                <div className="grid md:grid-cols-3 gap-6 mb-6">
                                    <div className="bg-blue-50 p-4 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">1. Consistency</h3>
                                        <p className="text-gray-700">Maintain regular sleep-wake times within 1 hour, even on weekends</p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">2. Environment</h3>
                                        <p className="text-gray-700">Optimize bedroom for darkness, quiet, and cool temperature</p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">3. Wind-Down</h3>
                                        <p className="text-gray-700">Establish a relaxing 30-60 minute pre-sleep routine</p>
                                    </div>
                                </div>

                                <div className="bg-white border border-gray-200 rounded-lg p-6">
                                    <p className="text-gray-700 font-medium italic">
                                        "Think of sleep as the third pillar of health alongside diet and exercise. Investing in quality sleep pays dividends across all aspects of physical and mental wellbeing."
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
                                    Weekly tips, research summaries, and exclusive content to transform your sleep.
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

                        {/* Sleep Quality Quiz */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Sleep Quality Quiz</h3>
                            <div className="space-y-4">
                                <div>
                                    <p className="font-medium text-gray-900 mb-2">How long does it typically take you to fall asleep?</p>
                                    <div className="space-y-2">
                                        <label className="flex items-center">
                                            <input type="radio" name="sleep-onset" className="mr-2" />
                                            <span>Less than 15 minutes</span>
                                        </label>
                                        <label className="flex items-center">
                                            <input type="radio" name="sleep-onset" className="mr-2" />
                                            <span>15-30 minutes</span>
                                        </label>
                                        <label className="flex items-center">
                                            <input type="radio" name="sleep-onset" className="mr-2" />
                                            <span>More than 30 minutes</span>
                                        </label>
                                    </div>
                                </div>
                                <button className="w-full bg-blue-50 text-blue-600 font-medium py-2 px-4 rounded-lg">
                                    Get Your Sleep Score
                                </button>
                            </div>
                        </div>

                        {/* Recommended Products */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Sleep Essentials</h3>
                            <div className="space-y-4">
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/white-noise-machine.jpg" alt="White noise machine" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">White Noise Machine</h4>
                                            <p className="text-sm text-gray-600">4.7 ★ (328 reviews)</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/blackout-curtains.jpg" alt="Blackout curtains" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Blackout Curtains</h4>
                                            <p className="text-sm text-gray-600">4.5 ★ (412 reviews)</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/sleep-mask.jpg" alt="Sleep mask" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Contoured Sleep Mask</h4>
                                            <p className="text-sm text-gray-600">4.8 ★ (276 reviews)</p>
                                        </div>
                                    </div>
                                </a>
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
                                    <a href="#" className="text-blue-600 hover:underline">Sleep Disorders: When to Seek Help</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Best Sleep Positions for Pain Relief</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Digital Detox for Better Sleep</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}