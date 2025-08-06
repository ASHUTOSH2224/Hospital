"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, Moon, Activity, Clock, Zap, AlertTriangle, HeartPulse, Brain, Battery, BookOpen } from "lucide-react"

export default function SleepScienceGuide() {
    const [email, setEmail] = useState("")
    const [activeTab, setActiveTab] = useState("Overview")

    const handleEmailSubmit = (e) => {
        e.preventDefault()
        console.log("Email submitted:", email)
        setEmail("")
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const tabs = ["Overview", "Stages", "Disorders", "Optimization"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Understanding Sleep Types: Deep Sleep, REM, Light Sleep, and Sleep Cycles
                            </h1>

                            {/* Navigation Tabs */}
                            <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-200">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                                            activeTab === tab
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
                                Explore comprehensive sleep science including sleep stages, circadian rhythms, sleep architecture, sleep disorders, and emerging sleep optimization methods for optimal rest and recovery. This guide covers everything from the neuroscience of sleep to practical tips for improving your sleep quality.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80"
                                    alt="Person sleeping peacefully"
                                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                                    style={{ maxHeight: '500px' }}
                                />
                            </div>

                            {/* Key Takeaways */}
                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
                                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                    <BookOpen className="w-5 h-5 text-blue-600 mr-2" />
                                    Key Takeaways
                                </h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>Adults cycle through 4-6 sleep cycles per night, each lasting about 90 minutes</li>
                                    <li>Deep sleep is crucial for physical restoration, while REM sleep supports memory and emotional processing</li>
                                    <li>Disruptions to sleep architecture can lead to cognitive impairment and health risks</li>
                                    <li>Modern lifestyle factors like blue light exposure significantly impact sleep quality</li>
                                    <li>Sleep tracking technology provides insights but has limitations in accuracy</li>
                                </ul>
                            </div>

                            {/* The Science of Sleep */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Moon className="w-8 h-8 text-blue-600 mr-2" />
                                    The Science of Sleep
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Sleep is a complex biological process essential for human health and functioning. Contrary to common belief, sleep is not a passive state but an active period of restoration and processing. The <a href="#" className="text-blue-600 hover:underline">National Sleep Foundation</a> identifies sleep as critical for:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>Memory consolidation and learning</li>
                                    <li>Physical growth and repair</li>
                                    <li>Immune system functioning</li>
                                    <li>Emotional regulation</li>
                                    <li>Metabolic health</li>
                                </ul>

                                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Sleep Architecture Explained</h3>
                                    <p className="text-gray-700 mb-2">
                                        Sleep architecture refers to the cyclical pattern of sleep stages that occur throughout the night. A complete sleep cycle lasts approximately 90 minutes and includes:
                                    </p>
                                    <p className="text-gray-700">
                                        NREM Stage 1 → NREM Stage 2 → NREM Stage 3 (Deep Sleep) → REM Sleep
                                    </p>
                                </div>
                            </section>

                            {/* Sleep Stages Deep Dive */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Activity className="w-8 h-8 text-blue-600 mr-2" />
                                    Sleep Stages Deep Dive
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Understanding each sleep stage is crucial for recognizing sleep quality and potential issues. Here's a comprehensive breakdown of the four primary sleep stages:
                                </p>

                                {/* Sleep Stages Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stage</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">% of Night</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Brain Waves</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Primary Functions</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Deprivation Effects</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            {/* Stage 1 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">N1 (Light Sleep)</td>
                                                <td className="px-4 py-3 whitespace-nowrap">5-10%</td>
                                                <td className="px-4 py-3">Theta waves</td>
                                                <td className="px-4 py-3">Transition to sleep, muscle relaxation</td>
                                                <td className="px-4 py-3">Increased sleep latency</td>
                                            </tr>
                                            {/* Stage 2 */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">N2 (True Sleep)</td>
                                                <td className="px-4 py-3 whitespace-nowrap">45-55%</td>
                                                <td className="px-4 py-3">Sleep spindles, K-complexes</td>
                                                <td className="px-4 py-3">Memory consolidation, body temperature regulation</td>
                                                <td className="px-4 py-3">Impaired learning, reduced alertness</td>
                                            </tr>
                                            {/* Stage 3 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">N3 (Deep Sleep)</td>
                                                <td className="px-4 py-3 whitespace-nowrap">15-25%</td>
                                                <td className="px-4 py-3">Delta waves</td>
                                                <td className="px-4 py-3">Physical restoration, growth hormone release</td>
                                                <td className="px-4 py-3">Fatigue, weakened immunity</td>
                                            </tr>
                                            {/* REM */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">REM Sleep</td>
                                                <td className="px-4 py-3 whitespace-nowrap">20-25%</td>
                                                <td className="px-4 py-3">Mixed frequency, similar to wakefulness</td>
                                                <td className="px-4 py-3">Emotional processing, memory integration</td>
                                                <td className="px-4 py-3">Mood disturbances, poor problem-solving</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">1</span>
                                            Deep Sleep - The Restorative Phase
                                        </h3>
                                        <p className="text-gray-700">
                                            Deep sleep (N3) is when the body undergoes significant physical repair. During this stage, human growth hormone is released, tissue growth and repair occur, and the immune system is strengthened. Children and adolescents spend more time in deep sleep, which explains why they need more sleep overall.
                                        </p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">2</span>
                                            REM Sleep - The Mental Reboot
                                        </h3>
                                        <p className="text-gray-700">
                                            REM sleep is when most dreaming occurs. The brain is highly active during this phase, processing emotions, consolidating memories, and making neural connections. Interestingly, the body experiences temporary paralysis during REM sleep (REM atonia) to prevent acting out dreams.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Circadian Rhythms */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Clock className="w-8 h-8 text-blue-600 mr-2" />
                                    Circadian Rhythms and Sleep Architecture
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    The human sleep-wake cycle is governed by circadian rhythms—24-hour biological cycles that regulate numerous physiological processes. These rhythms are controlled by the suprachiasmatic nucleus (SCN) in the hypothalamus and are influenced by environmental cues, primarily light.
                                </p>

                                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                                    <div className="grid grid-cols-3 gap-4 text-center font-medium mb-2">
                                        <div>Time</div>
                                        <div>Hormone</div>
                                        <div>Effect on Sleep</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 text-center mb-1">
                                        <div className="font-medium">Evening (8-10 PM)</div>
                                        <div>Melatonin rises</div>
                                        <div>Sleepiness begins</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 text-center mb-1 bg-blue-50 p-1 rounded">
                                        <div className="font-medium">Night (12-3 AM)</div>
                                        <div>Growth hormone peaks</div>
                                        <div>Deep sleep dominates</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 text-center mb-1">
                                        <div className="font-medium">Early Morning (4-6 AM)</div>
                                        <div>Cortisol rises</div>
                                        <div>REM sleep increases</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 text-center">
                                        <div className="font-medium">Morning (6-8 AM)</div>
                                        <div>Melatonin drops</div>
                                        <div>Wakefulness returns</div>
                                    </div>
                                </div>

                                <p className="text-gray-700 mb-6">
                                    Modern lifestyle factors that disrupt circadian rhythms include:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>Blue light exposure from screens in the evening</li>
                                    <li>Irregular sleep schedules</li>
                                    <li>Shift work and jet lag</li>
                                    <li>Caffeine consumption late in the day</li>
                                </ul>
                            </section>

                            {/* Sleep Disorders */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <AlertTriangle className="w-8 h-8 text-blue-600 mr-2" />
                                    Common Sleep Disorders
                                </h2>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Insomnia</h3>
                                        <p className="text-gray-700 mb-2">
                                            Characterized by difficulty falling or staying asleep, insomnia affects 10-30% of adults. Chronic insomnia can lead to:
                                        </p>
                                        <ol className="list-decimal list-inside text-gray-700 space-y-1">
                                            <li>Daytime fatigue</li>
                                            <li>Mood disturbances</li>
                                            <li>Impaired work performance</li>
                                            <li>Increased risk of depression</li>
                                        </ol>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Sleep Apnea</h3>
                                        <p className="text-gray-700 mb-2">
                                            A potentially serious disorder where breathing repeatedly stops and starts during sleep. Warning signs include:
                                        </p>
                                        <ol className="list-decimal list-inside text-gray-700 space-y-1">
                                            <li>Loud snoring</li>
                                            <li>Gasping for air during sleep</li>
                                            <li>Morning headaches</li>
                                            <li>Excessive daytime sleepiness</li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Did You Know?</h3>
                                    <p className="text-gray-700">
                                        Approximately 1 in 3 adults don't get enough sleep according to CDC recommendations. Chronic sleep deprivation is linked to increased risk of obesity, diabetes, cardiovascular disease, and even early mortality.
                                    </p>
                                </div>
                            </section>

                            {/* Sleep Optimization */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Sleep Optimization Techniques</h2>

                                <div className="space-y-6">
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Sleep Hygiene Fundamentals</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Environment</h4>
                                                <p className="text-gray-700">Keep bedroom cool (60-67°F), dark, and quiet. Consider blackout curtains and white noise machines.</p>
                                            </div>
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Routine</h4>
                                                <p className="text-gray-700">Establish a consistent sleep-wake schedule, even on weekends.</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">Pre-Sleep Rituals</h4>
                                                <p className="text-gray-700">Develop relaxing pre-sleep activities like reading or meditation.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Advanced Sleep Optimization</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Light Exposure</h4>
                                                <p className="text-gray-700">Get morning sunlight exposure and minimize blue light in the evening.</p>
                                            </div>
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Nutrition Timing</h4>
                                                <p className="text-gray-700">Avoid large meals, caffeine, and alcohol close to bedtime.</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">Exercise</h4>
                                                <p className="text-gray-700">Regular physical activity improves sleep quality, but avoid intense workouts close to bedtime.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Sleep Tracking Technology */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Zap className="w-8 h-8 text-blue-600 mr-2" />
                                    Sleep Tracking Technology
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Modern sleep tracking devices use various technologies to monitor sleep patterns:
                                </p>

                                <div className="grid md:grid-cols-3 gap-4 mb-6">
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <h4 className="font-bold text-gray-900 mb-2">Actigraphy</h4>
                                        <p className="text-gray-700">Measures movement to estimate sleep/wake patterns (used in most wearables)</p>
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <h4 className="font-bold text-gray-900 mb-2">HRV Monitoring</h4>
                                        <p className="text-gray-700">Tracks heart rate variability to assess sleep stages</p>
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <h4 className="font-bold text-gray-900 mb-2">EEG Headbands</h4>
                                        <p className="text-gray-700">Direct brain wave monitoring for most accurate sleep staging</p>
                                    </div>
                                </div>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "While sleep trackers provide valuable insights, they shouldn't cause sleep anxiety. The most important metric is how you feel during the day, not what your device says about your sleep."
                                    </p>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Understanding your sleep architecture is the first step toward improving sleep quality. By respecting your natural circadian rhythms and implementing evidence-based sleep hygiene practices, you can enhance both the quantity and quality of your sleep.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    Remember that sleep needs vary by individual. While 7-9 hours is recommended for most adults, some people may function optimally with slightly more or less. The key is to wake up feeling refreshed and maintain consistent energy throughout the day.
                                </p>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "Prioritizing sleep is one of the most impactful health decisions you can make. Quality sleep enhances every aspect of life—from cognitive performance and emotional well-being to physical health and longevity."
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
                                    Weekly insights on sleep optimization, circadian rhythms, and sleep disorder management.
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

                        {/* Sleep Benefits */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Benefits of Quality Sleep</h3>
                            <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                    <Brain className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-medium text-gray-900">Enhanced Cognition</h4>
                                        <p className="text-sm text-gray-600">Improved memory, focus, and problem-solving</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <HeartPulse className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-medium text-gray-900">Cardiovascular Health</h4>
                                        <p className="text-sm text-gray-600">Lower blood pressure and reduced heart disease risk</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Battery className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-medium text-gray-900">Energy Restoration</h4>
                                        <p className="text-sm text-gray-600">Cellular repair and metabolic regulation</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sleep Calculator */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Sleep Cycle Calculator</h3>
                            <p className="text-gray-700 text-sm mb-3">
                                Since sleep cycles last about 90 minutes, time your bedtime to wake up at the end of a cycle.
                            </p>
                            <div className="bg-white p-3 rounded border border-gray-200">
                                <p className="text-sm text-gray-600 mb-2">If you need to wake up at:</p>
                                <select className="w-full p-2 border border-gray-300 rounded mb-3">
                                    <option>6:00 AM</option>
                                    <option>6:30 AM</option>
                                    <option>7:00 AM</option>
                                    <option>7:30 AM</option>
                                    <option>8:00 AM</option>
                                </select>
                                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors duration-200">
                                    Calculate Optimal Bedtimes
                                </button>
                            </div>
                        </div>

                        {/* Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Further Reading</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">The Neuroscience of Sleep</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Sleep Disorders: Diagnosis and Treatment</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Chronotypes and Productivity</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Sleep Tracking Technology Comparison</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}