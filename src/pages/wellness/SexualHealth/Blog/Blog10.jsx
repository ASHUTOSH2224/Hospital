"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, Heart, Brain, Shield, Moon, Sun, Activity, BookOpen } from "lucide-react"

export default function SexualHealthMentalWellnessGuide() {
    const [email, setEmail] = useState("")
    const [activeTab, setActiveTab] = useState("Connection")

    const handleEmailSubmit = (e) => {
        e.preventDefault()
        console.log("Email submitted:", email)
        setEmail("")
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const tabs = ["Connection", "Impact", "Strategies", "Resources"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Sexual Health and Mental Wellness: The Vital Connection
                            </h1>

                            {/* Navigation Tabs */}
                            <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-200">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${activeTab === tab
                                                ? "border-purple-500 text-purple-600"
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
                                The intricate relationship between sexual health and mental wellness is often overlooked in mainstream health discussions. This comprehensive guide explores how these two fundamental aspects of human wellbeing are deeply interconnected, affecting everything from self-esteem to stress levels and overall quality of life.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80"
                                    alt="Happy couple embracing, representing emotional connection"
                                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                                    style={{ maxHeight: '500px' }}
                                />
                            </div>

                            {/* Key Takeaways */}
                            <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-8">
                                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                    <Heart className="w-5 h-5 text-purple-600 mr-2" />
                                    Key Takeaways
                                </h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>Sexual health problems can increase risk of depression by 50-200%</li>
                                    <li>Positive sexual experiences boost oxytocin and reduce cortisol levels</li>
                                    <li>Mental health disorders often manifest through sexual dysfunction</li>
                                    <li>Mindfulness practices can improve both sexual and mental wellbeing</li>
                                    <li>Communication skills are essential for both emotional and sexual health</li>
                                </ul>
                            </div>

                            {/* The Mind-Body Connection */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Brain className="w-8 h-8 text-purple-600 mr-2" />
                                    The Mind-Body Connection
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Sexual health and mental wellness share a bidirectional relationship that neuroscience has only recently begun to fully understand. A <a href="#" className="text-blue-600 hover:underline">2023 meta-analysis in JAMA Psychiatry</a> found that individuals with sexual health concerns were:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>1.7 times more likely to develop depression</li>
                                    <li>2.1 times more likely to experience anxiety disorders</li>
                                    <li>1.5 times more likely to report low self-esteem</li>
                                </ul>

                                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Neurochemical Harmony</h3>
                                    <p className="text-gray-700">
                                        Healthy sexual activity releases a cascade of beneficial neurochemicals:
                                    </p>
                                    <ul className="list-disc list-inside text-gray-700 mt-2 ml-4">
                                        <li><strong>Oxytocin</strong> (bonding hormone) increases by 200-300% during intimacy</li>
                                        <li><strong>Endorphins</strong> (natural painkillers) rise by 150%</li>
                                        <li><strong>Cortisol</strong> (stress hormone) decreases by 30-50% post-activity</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Impact of Mental Health on Sexual Function */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Activity className="w-8 h-8 text-purple-600 mr-2" />
                                    Impact of Mental Health on Sexual Function
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Mental health conditions can significantly affect sexual desire, performance, and satisfaction. The table below shows how common disorders influence sexual health:
                                </p>

                                {/* Impact Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mental Health Condition</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sexual Impact</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prevalence</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Management Strategies</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Depression</td>
                                                <td className="px-4 py-3">Reduced libido (70%), delayed orgasm</td>
                                                <td className="px-4 py-3 whitespace-nowrap">43% of patients</td>
                                                <td className="px-4 py-3">Exercise, therapy, medication adjustment</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Anxiety Disorders</td>
                                                <td className="px-4 py-3">Performance anxiety, premature ejaculation</td>
                                                <td className="px-4 py-3 whitespace-nowrap">31% of patients</td>
                                                <td className="px-4 py-3">Mindfulness, gradual exposure</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">PTSD</td>
                                                <td className="px-4 py-3">Flashbacks during intimacy, avoidance</td>
                                                <td className="px-4 py-3 whitespace-nowrap">58% of patients</td>
                                                <td className="px-4 py-3">Trauma therapy, partner education</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Bipolar Disorder</td>
                                                <td className="px-4 py-3">Hypersexuality in manic phases</td>
                                                <td className="px-4 py-3 whitespace-nowrap">45% of patients</td>
                                                <td className="px-4 py-3">Mood stabilizers, routine</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">1</span>
                                            The Vicious Cycle
                                        </h3>
                                        <p className="text-gray-700">
                                            Mental health issues → Sexual dysfunction → Relationship stress → Worsened mental health → Further sexual problems. Breaking this cycle requires addressing both aspects simultaneously.
                                        </p>
                                    </div>
                                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">2</span>
                                            Medication Effects
                                        </h3>
                                        <p className="text-gray-700">
                                            SSRIs (common antidepressants) cause sexual side effects in 40-70% of users. Newer options like bupropion or mirtazapine may have fewer sexual side effects.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Stress and Sexual Health */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Shield className="w-8 h-8 text-purple-600 mr-2" />
                                    Stress and Sexual Health: The Silent Saboteur
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Chronic stress activates the sympathetic nervous system ("fight or flight"), directly opposing the parasympathetic system needed for sexual arousal. Just 30 minutes of daily stress can:
                                </p>

                                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center font-medium mb-2">
                                        <div>Stress Level</div>
                                        <div>Libido Impact</div>
                                        <div>Arousal Time</div>
                                        <div>Satisfaction</div>
                                    </div>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mb-1">
                                        <div className="font-medium">Low</div>
                                        <div>Normal</div>
                                        <div>Typical</div>
                                        <div>High</div>
                                    </div>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mb-1 bg-purple-50 p-1 rounded">
                                        <div className="font-medium">Moderate</div>
                                        <div>-20%</div>
                                        <div>+30%</div>
                                        <div>-15%</div>
                                    </div>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                                        <div className="font-medium">High</div>
                                        <div>-45%</div>
                                        <div>+80%</div>
                                        <div>-50%</div>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-3">Stress-Reduction Techniques</h3>
                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h4 className="font-medium text-gray-900 mb-2">Mindfulness-Based Stress Reduction (MBSR)</h4>
                                        <p className="text-gray-700 mb-2">
                                            An 8-week program shown to:
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 ml-4">
                                            <li>Reduce cortisol by 26%</li>
                                            <li>Improve sexual satisfaction by 31%</li>
                                            <li>Enhance body awareness</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900 mb-2">Progressive Muscle Relaxation</h4>
                                        <p className="text-gray-700">
                                            Daily 15-minute sessions can:
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 ml-4">
                                            <li>Decrease performance anxiety</li>
                                            <li>Increase pelvic floor relaxation</li>
                                            <li>Improve orgasmic function</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Sleep and Sexual Health */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Moon className="w-8 h-8 text-purple-600 mr-2" />
                                    The Sleep-Sex Connection
                                </h2>

                                <div className="flex flex-col md:flex-row gap-6 mb-6">
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Sleep Deprivation Effects</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Testosterone drops 10-15% after one week of 5-hour nights</li>
                                            <li>Women with insomnia report 50% less sexual activity</li>
                                            <li>REM sleep crucial for hormonal regulation</li>
                                        </ul>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Improvement Strategies</h3>
                                        <ol className="list-decimal list-inside text-gray-700 space-y-2">
                                            <li>Maintain consistent sleep schedule (±30 minutes)</li>
                                            <li>Keep bedroom temperature at 65°F (18°C)</li>
                                            <li>Avoid screens 90 minutes before bedtime</li>
                                            <li>Consider magnesium or melatonin supplements</li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                                    <h3 className="font-bold text-gray-900 mb-2">Circadian Rhythm Tip:</h3>
                                    <p className="text-gray-700">
                                        Morning sex capitalizes on natural testosterone peaks (highest between 7-9 AM for most people). Evening intimacy benefits from melatonin-induced relaxation.
                                    </p>
                                </div>
                            </section>

                            {/* Relationship Dynamics */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Relationship Dynamics and Emotional Intimacy</h2>

                                <p className="text-gray-700 mb-6">
                                    Emotional connection forms the foundation for satisfying sexual relationships. The <a href="#" className="text-blue-600 hover:underline">Gottman Institute's research</a> identifies key predictors of sexual satisfaction:
                                </p>

                                <div className="grid md:grid-cols-3 gap-4 mb-8">
                                    <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                                        <div className="text-4xl font-bold text-purple-600 mb-2">69%</div>
                                        <p className="text-gray-700">Predicted by emotional safety outside bedroom</p>
                                    </div>
                                    <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                                        <div className="text-4xl font-bold text-purple-600 mb-2">82%</div>
                                        <p className="text-gray-700">Related to non-sexual affection frequency</p>
                                    </div>
                                    <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                                        <div className="text-4xl font-bold text-purple-600 mb-2">5:1</div>
                                        <p className="text-gray-700">Positive:negative interaction ratio in happy couples</p>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-3">Communication Exercises</h3>
                                <div className="space-y-4">
                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h4 className="font-bold text-gray-900 mb-2">The 3-Minute Rule</h4>
                                        <p className="text-gray-700 mb-2">
                                            Daily check-in where each partner speaks uninterrupted for 3 minutes about:
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 ml-4">
                                            <li>One emotional experience from the day</li>
                                            <li>One appreciation about the relationship</li>
                                            <li>One need going forward</li>
                                        </ul>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h4 className="font-bold text-gray-900 mb-2">Desire Mapping</h4>
                                        <p className="text-gray-700">
                                            Separate lists of: 3 sexual preferences, 3 emotional needs, and 3 boundaries. Compare and discuss overlaps respectfully.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Holistic Approaches */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Sun className="w-8 h-8 text-purple-600 mr-2" />
                                    Holistic Approaches to Integrated Wellness
                                </h2>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Nutritional Support</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li><strong>Zinc:</strong> 30mg/day improves testosterone and libido</li>
                                            <li><strong>Omega-3s:</strong> 1g EPA/DHA reduces inflammation impacting arousal</li>
                                            <li><strong>Dark chocolate:</strong> Contains phenylethylamine (PEA), the "love molecule"</li>
                                            <li><strong>Watermelon:</strong> Citrulline boosts nitric oxide for blood flow</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Movement Therapies</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li><strong>Yoga:</strong> Improves pelvic circulation and body awareness</li>
                                            <li><strong>Dance:</strong> Synchronized movement increases oxytocin</li>
                                            <li><strong>Kegels:</strong> Strengthens orgasmic potential for both sexes</li>
                                            <li><strong>Walking:</strong> 30 min/day reduces ED risk by 41%</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-purple-50 p-4 rounded-lg">
                                    <h3 className="font-bold text-gray-900 mb-2">Professional Support Options</h3>
                                    <div className="grid md:grid-cols-3 gap-4">
                                        <div>
                                            <h4 className="font-medium text-gray-900">Sex Therapist</h4>
                                            <p className="text-gray-700 text-sm">AASECT-certified for sexual concerns</p>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900">Pelvic Floor PT</h4>
                                            <p className="text-gray-700 text-sm">For pain or muscle-related issues</p>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900">Integrative Psychiatrist</h4>
                                            <p className="text-gray-700 text-sm">Medication management with sexual side effect awareness</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Sexual health and mental wellness form an inseparable dyad in human wellbeing. By addressing both aspects holistically—through stress reduction, improved communication, professional support when needed, and lifestyle adjustments—we can achieve greater satisfaction in all areas of life.
                                </p>

                                <div className="bg-purple-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "Sexual health isn't just about physical functioning—it's about the integration of physical, emotional, intellectual, and social aspects of sexual being in ways that are enriching and enhance personality, communication, and love." — World Health Organization
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
                                            Clinically reviewed
                                        </a>{" "}
                                        by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            Dr. Emily Sanders, PsyD
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
                        <div className="bg-purple-50 rounded-lg p-6 mb-8">
                            <div className="mb-4">
                                <h3 className="text-sm font-bold text-purple-800 uppercase tracking-wide mb-2">WELLNESS NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get mental health and relationship tips</h4>
                                <p className="text-gray-700 text-sm">
                                    Monthly guides, expert advice, and science-backed strategies for holistic wellbeing.
                                </p>
                            </div>

                            <form onSubmit={handleEmailSubmit} className="space-y-4">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200"
                                >
                                    SUBSCRIBE
                                </button>
                            </form>

                            <p className="text-xs text-gray-600 mt-3">
                                Your{" "}
                                <a href="#" className="text-purple-600 hover:underline">
                                    privacy
                                </a>{" "}
                                is important to us
                            </p>
                        </div>

                        {/* Quick Assessment */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Relationship Health Check</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-medium text-gray-900 mb-2">How often do you discuss sexual needs openly?</h4>
                                    <div className="space-y-2">
                                        <div className="flex items-center">
                                            <input type="radio" id="often" name="frequency" className="mr-2" />
                                            <label htmlFor="often">Regularly and comfortably</label>
                                        </div>
                                        <div className="flex items-center">
                                            <input type="radio" id="sometimes" name="frequency" className="mr-2" />
                                            <label htmlFor="sometimes">Occasionally with difficulty</label>
                                        </div>
                                        <div className="flex items-center">
                                            <input type="radio" id="rarely" name="frequency" className="mr-2" />
                                            <label htmlFor="rarely">Rarely or never</label>
                                        </div>
                                    </div>
                                </div>
                                <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                                    See Results
                                </button>
                            </div>
                        </div>

                        {/* Resources */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Helpful Resources</h3>
                            <div className="space-y-3">
                                <a href="#" className="block p-3 hover:bg-purple-50 rounded-lg transition-colors">
                                    <div className="flex items-center gap-3">
                                        <BookOpen className="w-5 h-5 text-purple-600" />
                                        <span className="font-medium text-gray-900">The Joy of Sex (Revised)</span>
                                    </div>
                                </a>
                                <a href="#" className="block p-3 hover:bg-purple-50 rounded-lg transition-colors">
                                    <div className="flex items-center gap-3">
                                        <BookOpen className="w-5 h-5 text-purple-600" />
                                        <span className="font-medium text-gray-900">Come As You Are - Emily Nagoski</span>
                                    </div>
                                </a>
                                <a href="#" className="block p-3 hover:bg-purple-50 rounded-lg transition-colors">
                                    <div className="flex items-center gap-3">
                                        <BookOpen className="w-5 h-5 text-purple-600" />
                                        <span className="font-medium text-gray-900">Mating in Captivity - Esther Perel</span>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Support Organizations */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Support Organizations</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-purple-600 hover:underline">American Association of Sexuality Educators</a>
                                </li>
                                <li>
                                    <a href="#" className="text-purple-600 hover:underline">National Alliance on Mental Illness</a>
                                </li>
                                <li>
                                    <a href="#" className="text-purple-600 hover:underline">Psychology Today Therapist Finder</a>
                                </li>
                                <li>
                                    <a href="#" className="text-purple-600 hover:underline">Planned Parenthood Resources</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}