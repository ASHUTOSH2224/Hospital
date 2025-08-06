"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Moon, Brain, HeartPulse, Clock, Activity, BookOpen, Shield } from "lucide-react"

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

    const tabs = ["Overview", "Stages", "Hormones", "Disorders", "Tips"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                The Science Behind Sleep: How Rest Transforms Your Health
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
                                Sleep is not merely downtime between our waking hours—it's an active state essential for brain function, emotional well-being, and physical health. This comprehensive guide explores the neuroscience of sleep, its vital biological functions, and evidence-based strategies to optimize your rest for peak performance and longevity.
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
                                    <li>Sleep consists of 90-minute cycles containing distinct stages with unique functions</li>
                                    <li>Melatonin and adenosine regulate our sleep-wake patterns through complex biochemistry</li>
                                    <li>Deep sleep facilitates physical restoration while REM sleep enhances memory and learning</li>
                                    <li>Chronic sleep deprivation increases risks for Alzheimer's, heart disease, and diabetes</li>
                                    <li>Strategic light exposure and temperature control can significantly improve sleep quality</li>
                                </ul>
                            </div>

                            {/* Why Sleep Matters */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Moon className="w-8 h-8 text-blue-600 mr-2" />
                                    The Vital Functions of Sleep
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Neuroscientific research reveals sleep serves several critical biological functions. A <a href="#" className="text-blue-600 hover:underline">2023 study in Nature Neuroscience</a> demonstrated that during sleep, the brain undergoes essential maintenance processes that:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>Clear metabolic waste through the glymphatic system (reducing Alzheimer's risk)</li>
                                    <li>Consolidate memories with 40-50% greater efficiency than waking rest</li>
                                    <li>Regulate emotional centers, decreasing amygdala reactivity by 60%</li>
                                    <li>Restore immune function, with just one night of poor sleep reducing NK cell activity by 70%</li>
                                </ul>

                                <div className="bg-purple-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">The Sleep-Deprivation Epidemic</h3>
                                    <p className="text-gray-700">
                                        The CDC reports that 1 in 3 adults don't get enough sleep. Chronic sleep deprivation (less than 6 hours nightly) increases mortality risk by 13% and costs the US economy $411 billion annually in lost productivity.
                                    </p>
                                </div>
                            </section>

                            {/* Sleep Architecture */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Activity className="w-8 h-8 text-blue-600 mr-2" />
                                    Sleep Architecture: Understanding the 90-Minute Cycle
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Healthy sleep progresses through predictable stages multiple times each night. Each complete cycle lasts approximately 90 minutes, with the composition changing across the night:
                                </p>

                                {/* Sleep Stages Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stage</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Brain Waves</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Key Functions</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">N1 (Light Sleep)</td>
                                                <td className="px-4 py-3">Theta waves (4-7 Hz)</td>
                                                <td className="px-4 py-3">1-5 minutes</td>
                                                <td className="px-4 py-3">Transition from wakefulness, muscle relaxation</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">N2 (True Sleep)</td>
                                                <td className="px-4 py-3">Sleep spindles, K-complexes</td>
                                                <td className="px-4 py-3">10-25 minutes</td>
                                                <td className="px-4 py-3">Memory consolidation, sensory disconnection</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">N3 (Deep Sleep)</td>
                                                <td className="px-4 py-3">Delta waves (0.5-2 Hz)</td>
                                                <td className="px-4 py-3">20-40 minutes</td>
                                                <td className="px-4 py-3">Physical restoration, growth hormone release</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">REM Sleep</td>
                                                <td className="px-4 py-3">Mixed frequency (similar to wakefulness)</td>
                                                <td className="px-4 py-3">10-60 minutes</td>
                                                <td className="px-4 py-3">Emotional processing, creative problem-solving</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">1</span>
                                            Early Night Sleep Dominance
                                        </h3>
                                        <p className="text-gray-700">
                                            The first half of the night contains more deep N3 sleep, crucial for physical recovery. Growth hormone secretion peaks during this phase, stimulating tissue repair and muscle growth.
                                        </p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">2</span>
                                            Late Night REM Importance
                                        </h3>
                                        <p className="text-gray-700">
                                            Morning hours feature prolonged REM periods essential for emotional regulation. REM deprivation for just 3 nights increases emotional reactivity by 300% in brain imaging studies.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Sleep Hormones */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Brain className="w-8 h-8 text-blue-600 mr-2" />
                                    The Neurochemistry of Sleep
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Sleep regulation involves complex interactions between several key neurotransmitters and hormones:
                                </p>

                                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                                    <div className="grid grid-cols-4 gap-4 text-center font-medium mb-2">
                                        <div>Hormone</div>
                                        <div>Produced By</div>
                                        <div>Primary Function</div>
                                        <div>Optimal Timing</div>
                                    </div>
                                    <div className="grid grid-cols-4 gap-4 text-center mb-1">
                                        <div className="font-medium">Melatonin</div>
                                        <div>Pineal gland</div>
                                        <div>Sleep initiation</div>
                                        <div>9PM-12AM peak</div>
                                    </div>
                                    <div className="grid grid-cols-4 gap-4 text-center mb-1 bg-blue-50 p-1 rounded">
                                        <div className="font-medium">Adenosine</div>
                                        <div>Brain metabolism</div>
                                        <div>Sleep pressure</div>
                                        <div>Builds over 16h</div>
                                    </div>
                                    <div className="grid grid-cols-4 gap-4 text-center mb-1">
                                        <div className="font-medium">Cortisol</div>
                                        <div>Adrenal glands</div>
                                        <div>Wakefulness</div>
                                        <div>6-8AM peak</div>
                                    </div>
                                    <div className="grid grid-cols-4 gap-4 text-center">
                                        <div className="font-medium">GABA</div>
                                        <div>Hypothalamus</div>
                                        <div>Neural quieting</div>
                                        <div>Active in NREM</div>
                                    </div>
                                </div>

                                <div className="p-4 border border-gray-200 rounded-lg mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">The Two-Process Model</h3>
                                    <p className="text-gray-700 mb-2">
                                        Sleep regulation follows two biological processes:
                                    </p>
                                    <ol className="list-decimal list-inside text-gray-700 ml-4 space-y-1">
                                        <li><strong>Process S (Sleep Homeostasis):</strong> Adenosine accumulation creates sleep pressure that dissipates during sleep</li>
                                        <li><strong>Process C (Circadian Rhythm):</strong> The suprachiasmatic nucleus (SCN) coordinates melatonin release with light cues</li>
                                    </ol>
                                </div>
                            </section>

                            {/* Health Impacts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <HeartPulse className="w-8 h-8 text-blue-600 mr-2" />
                                    Sleep and Long-Term Health
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Chronic sleep deprivation creates systemic inflammation and metabolic dysregulation. A longitudinal <a href="#" className="text-blue-600 hover:underline">Harvard study</a> tracking 50,000 participants found:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>Consistent 5-hour sleepers had 45% higher cardiovascular mortality</li>
                                    <li>Diabetes risk increased 40% with poor sleep, independent of diet</li>
                                    <li>Alzheimer's biomarkers (amyloid plaques) increased 2-fold with sleep disruption</li>
                                    <li>Cancer-fighting NK cells decreased by 70% after one night of 4 hours sleep</li>
                                </ul>

                                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                                    <h3 className="font-bold text-gray-900 mb-2">Critical Finding:</h3>
                                    <p className="text-gray-700">
                                        Sleeping less than 6 hours nightly for one week alters 711 genes—including those regulating stress, immunity, and metabolism. These changes persist even after "recovery" sleep.
                                    </p>
                                </div>
                            </section>

                            {/* Sleep Optimization */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Evidence-Based Sleep Optimization</h2>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Light Exposure Strategies</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>10,000 lux morning light for 30 minutes (resets circadian clock)</li>
                                            <li>Blue light blocking glasses 2 hours before bed (reduces melatonin suppression by 58%)</li>
                                            <li>Dim red night lights (least disruptive to circadian rhythms)</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Temperature Regulation</h3>
                                        <ol className="list-decimal list-inside text-gray-700 space-y-1">
                                            <li>Cool bedroom (65°F/18°C optimal for sleep onset)</li>
                                            <li>Warm bath 1-2 hours before bed (promotes heat dissipation)</li>
                                            <li>Wool bedding (superior temperature regulation)</li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Pro Tip:</h3>
                                    <p className="text-gray-700">
                                        The 10-3-2-1-0 sleep formula: 10h before bed - no caffeine, 3h - no food/alcohol, 2h - no work, 1h - no screens, 0 - times you hit snooze.
                                    </p>
                                </div>
                            </section>

                            {/* Sleep Disorders */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Sleep Disorders</h2>

                                <div className="space-y-4">
                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">Insomnia</h3>
                                        <p className="text-gray-700 mb-2">
                                            Affects 30% of adults, characterized by difficulty falling/staying asleep despite adequate opportunity.
                                        </p>
                                        <p className="text-gray-700">
                                            <span className="font-semibold">Solution:</span> Cognitive Behavioral Therapy for Insomnia (CBT-I) has 80% efficacy rate—more effective than sleep medications long-term.
                                        </p>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">Sleep Apnea</h3>
                                        <p className="text-gray-700 mb-2">
                                            25% of middle-aged adults have some form, with breathing interruptions disrupting sleep architecture.
                                        </p>
                                        <p className="text-gray-700">
                                            <span className="font-semibold">Solution:</span> CPAP therapy reduces cardiovascular risks by 35% and improves daytime alertness by 70%.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Sleep is the foundation upon which all other health behaviors are built. No amount of exercise, nutrition, or supplementation can compensate for chronic sleep deprivation. The latest neuroscience reveals sleep as our brain's maintenance mode—a non-negotiable biological requirement for cognitive function, emotional resilience, and physical health.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    By aligning our habits with sleep science—respecting our circadian rhythms, optimizing our sleep environment, and prioritizing sufficient duration—we unlock our full potential for creativity, productivity, and longevity.
                                </p>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "Sleep is the single most effective thing we can do to reset our brain and body health each day—it's the most underrated performance enhancer and longevity 'drug' available to us."
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
                                            Dr. Alan Foster, Neuroscientist
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600 mb-1">
                                        — Written by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            Jessica Reynolds
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
                                <h3 className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-2">SLEEP SCIENCE NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get sleep optimization tips</h4>
                                <p className="text-gray-700 text-sm">
                                    Weekly research summaries, practical strategies, and circadian insights delivered to your inbox.
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
                                    <label className="block text-sm font-medium text-gray-700 mb-1">When do you need to wake up?</label>
                                    <input 
                                        type="time" 
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        defaultValue="07:00"
                                    />
                                </div>
                                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md">
                                    Calculate Optimal Bedtimes
                                </button>
                                <div className="bg-gray-50 p-3 rounded-md">
                                    <p className="text-sm text-gray-700">For 7:00 AM wake time, aim to fall asleep at:</p>
                                    <ul className="mt-2 space-y-1">
                                        <li className="flex items-center">
                                            <Clock className="w-4 h-4 text-blue-600 mr-2" />
                                            <span className="font-medium">9:45 PM (6 full cycles)</span>
                                        </li>
                                        <li className="flex items-center">
                                            <Clock className="w-4 h-4 text-blue-600 mr-2" />
                                            <span>11:15 PM (5 cycles)</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Sleep Aids Comparison */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Sleep Aid Effectiveness</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span className="font-medium">Intervention</span>
                                    <span className="font-medium">Sleep Improvement</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Morning sunlight</span>
                                    <span className="text-blue-600">62%</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Cool bedroom</span>
                                    <span className="text-blue-600">58%</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>White noise</span>
                                    <span className="text-blue-600">38%</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Sleep medications</span>
                                    <span className="text-blue-600">29%</span>
                                </div>
                            </div>
                        </div>

                        {/* Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Further Reading</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Circadian Rhythm Optimization</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Sleep Tracking Technology Guide</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">The Gut-Brain-Sleep Connection</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Sleep and Athletic Performance</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}