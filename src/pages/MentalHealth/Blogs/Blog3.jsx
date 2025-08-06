"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, Brain, HeartPulse, Moon,Star, Sun, Activity, Shield, BookOpen, LifeBuoy } from "lucide-react"

export default function ManagingCommonMentalHealth() {
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

    const tabs = ["Overview", "Conditions", "Treatments", "Self-Help"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Managing Common Mental Health Conditions: A Comprehensive Guide
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
                                Mental health conditions affect millions worldwide, yet many struggle to find effective strategies for management. This guide provides evidence-based approaches to cope with anxiety, depression, and other common mental health challenges. Discover practical tools, treatment options, and lifestyle modifications to support your mental wellbeing.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                    alt="Person holding lightbulb with brain illustration"
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
                                    <li>1 in 5 adults experiences mental illness each year</li>
                                    <li>Early intervention leads to better outcomes</li>
                                    <li>Combination of therapy and lifestyle changes often most effective</li>
                                    <li>Self-care is not selfish—it's essential</li>
                                    <li>Recovery is possible with proper support and treatment</li>
                                </ul>
                            </div>

                            {/* Understanding Mental Health */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Brain className="w-8 h-8 text-blue-600 mr-2" />
                                    Understanding Mental Health
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Mental health encompasses our emotional, psychological, and social well-being. It affects how we think, feel, and act. According to the <a href="#" className="text-blue-600 hover:underline">World Health Organization</a>, mental health conditions are among the leading causes of disability worldwide, with depression being the single largest contributor to global disability.
                                </p>

                                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Mental Health Continuum</h3>
                                    <p className="text-gray-700 mb-2">
                                        Mental health exists on a spectrum from thriving to crisis. Most people move along this continuum throughout their lives.
                                    </p>
                                    <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
                                        <div className="bg-gradient-to-r from-green-400 via-yellow-400 to-red-500 h-4 rounded-full" style={{ width: '100%' }}></div>
                                    </div>
                                    <div className="flex justify-between text-xs text-gray-600">
                                        <span>Thriving</span>
                                        <span>Struggling</span>
                                        <span>In Crisis</span>
                                    </div>
                                </div>

                                <p className="text-gray-700 mb-6">
                                    Common signs that may indicate a mental health condition include:
                                </p>

                                <div className="grid md:grid-cols-2 gap-4 mb-6">
                                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                                        <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                                            <Moon className="w-5 h-5 text-blue-500 mr-2" />
                                            Emotional Changes
                                        </h4>
                                        <ul className="list-disc list-inside text-gray-700 pl-2 space-y-1">
                                            <li>Persistent sadness or irritability</li>
                                            <li>Extreme mood swings</li>
                                            <li>Excessive fears or worries</li>
                                        </ul>
                                    </div>
                                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                                        <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                                            <Activity className="w-5 h-5 text-blue-500 mr-2" />
                                            Behavioral Changes
                                        </h4>
                                        <ul className="list-disc list-inside text-gray-700 pl-2 space-y-1">
                                            <li>Withdrawal from social activities</li>
                                            <li>Changes in sleep or appetite</li>
                                            <li>Difficulty concentrating</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Common Conditions */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <HeartPulse className="w-8 h-8 text-blue-600 mr-2" />
                                    Common Mental Health Conditions
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Below is an overview of prevalent mental health disorders, their symptoms, and prevalence rates based on data from the National Institute of Mental Health.
                                </p>

                                {/* Conditions Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Condition</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prevalence</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Key Symptoms</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Typical Age of Onset</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Anxiety Disorders</td>
                                                <td className="px-4 py-3 whitespace-nowrap">19.1% of U.S. adults</td>
                                                <td className="px-4 py-3">Excessive worry, panic attacks, avoidance</td>
                                                <td className="px-4 py-3 whitespace-nowrap">11-30 years</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Major Depression</td>
                                                <td className="px-4 py-3 whitespace-nowrap">8.4% of U.S. adults</td>
                                                <td className="px-4 py-3">Persistent sadness, loss of interest</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Late teens to mid-20s</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Bipolar Disorder</td>
                                                <td className="px-4 py-3 whitespace-nowrap">2.8% of U.S. adults</td>
                                                <td className="px-4 py-3">Mood episodes (mania/depression)</td>
                                                <td className="px-4 py-3 whitespace-nowrap">15-25 years</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">PTSD</td>
                                                <td className="px-4 py-3 whitespace-nowrap">3.6% of U.S. adults</td>
                                                <td className="px-4 py-3">Flashbacks, hypervigilance</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Any age after trauma</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">OCD</td>
                                                <td className="px-4 py-3 whitespace-nowrap">1.2% of U.S. adults</td>
                                                <td className="px-4 py-3">Obsessions and compulsions</td>
                                                <td className="px-4 py-3 whitespace-nowrap">19-20 years</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                {/* Condition Highlights */}
                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">1</span>
                                            Anxiety Disorders
                                        </h3>
                                        <p className="text-gray-700 mb-2">
                                            Characterized by excessive fear and anxiety that affects daily functioning. Includes generalized anxiety disorder, panic disorder, and phobias.
                                        </p>
                                        <p className="text-gray-700 font-medium">
                                            Effective treatments: CBT, exposure therapy, mindfulness
                                        </p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">2</span>
                                            Depression
                                        </h3>
                                        <p className="text-gray-700 mb-2">
                                            More than just sadness—a persistent condition affecting mood, cognition, and physical health. Can lead to significant impairment.
                                        </p>
                                        <p className="text-gray-700 font-medium">
                                            Effective treatments: Therapy, medication, exercise
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Treatment Options */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Shield className="w-8 h-8 text-blue-600 mr-2" />
                                    Evidence-Based Treatment Options
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Modern mental health care offers multiple effective treatment modalities. The most successful approaches often combine several methods tailored to individual needs.
                                </p>

                                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center font-medium mb-2">
                                        <div>Treatment Type</div>
                                        <div>Effectiveness Rate</div>
                                        <div>Best For</div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mb-1 border-b pb-2">
                                        <div className="font-medium">Cognitive Behavioral Therapy</div>
                                        <div>60-80%</div>
                                        <div>Anxiety, depression, PTSD</div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mb-1 border-b pb-2 bg-blue-50 p-1 rounded">
                                        <div className="font-medium">Medication</div>
                                        <div>40-60%</div>
                                        <div>Moderate-severe symptoms</div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mb-1 border-b pb-2">
                                        <div className="font-medium">Lifestyle Changes</div>
                                        <div>30-50%</div>
                                        <div>Mild conditions, maintenance</div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                                        <div className="font-medium">Combination Therapy</div>
                                        <div>70-90%</div>
                                        <div>Most conditions</div>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Psychotherapy Approaches</h3>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900 mb-3">Cognitive Behavioral Therapy (CBT)</h4>
                                        <p className="text-gray-700 mb-2">
                                            Focuses on identifying and changing negative thought patterns and behaviors. Typically involves:
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                                            <li>Identifying cognitive distortions</li>
                                            <li>Behavioral activation</li>
                                            <li>Exposure techniques</li>
                                            <li>Skill-building exercises</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900 mb-3">Other Effective Therapies</h4>
                                        <ol className="list-decimal list-inside text-gray-700 space-y-1">
                                            <li>Dialectical Behavior Therapy (DBT) - emotional regulation</li>
                                            <li>Acceptance and Commitment Therapy (ACT) - mindfulness</li>
                                            <li>Psychodynamic Therapy - exploring past experiences</li>
                                            <li>Interpersonal Therapy - relationship-focused</li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Important Note:</h3>
                                    <p className="text-gray-700">
                                        Treatment effectiveness varies by individual. What works for one person may not work for another. It often takes trying different approaches to find the right combination.
                                    </p>
                                </div>
                            </section>

                            {/* Self-Help Strategies */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Practical Self-Help Strategies</h2>

                                <p className="text-gray-700 mb-6">
                                    While professional help is crucial for many conditions, these evidence-based self-help strategies can complement treatment or help manage mild symptoms.
                                </p>

                                <div className="space-y-6">
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Daily Mental Health Practices</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Morning Routine (5-10 minutes)</h4>
                                                <p className="text-gray-700">Gratitude journaling, intention setting, sunlight exposure</p>
                                            </div>
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Throughout the Day</h4>
                                                <p className="text-gray-700">Mindful breathing breaks, movement every 90 minutes</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">Evening Wind Down (15-30 minutes)</h4>
                                                <p className="text-gray-700">Digital detox, relaxation techniques, reflection</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Coping Skills Toolbox</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                                <div className="bg-white p-3 rounded shadow-sm text-center">
                                                    <Sun className="w-6 h-6 mx-auto text-blue-500 mb-1" />
                                                    <p className="text-sm font-medium">Grounding Techniques</p>
                                                </div>
                                                <div className="bg-white p-3 rounded shadow-sm text-center">
                                                    <BookOpen className="w-6 h-6 mx-auto text-blue-500 mb-1" />
                                                    <p className="text-sm font-medium">Journaling</p>
                                                </div>
                                                <div className="bg-white p-3 rounded shadow-sm text-center">
                                                    <Activity className="w-6 h-6 mx-auto text-blue-500 mb-1" />
                                                    <p className="text-sm font-medium">Exercise</p>
                                                </div>
                                                <div className="bg-white p-3 rounded shadow-sm text-center">
                                                    <LifeBuoy className="w-6 h-6 mx-auto text-blue-500 mb-1" />
                                                    <p className="text-sm font-medium">Support Network</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* When to Seek Help */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">When to Seek Professional Help</h2>

                                <p className="text-gray-700 mb-4">
                                    While self-help strategies are valuable, professional support is crucial when:
                                </p>

                                <div className="space-y-4">
                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">Duration and Severity</h3>
                                        <p className="text-gray-700 mb-2">
                                            Symptoms persist for more than two weeks or significantly impair daily functioning.
                                        </p>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">Safety Concerns</h3>
                                        <p className="text-gray-700 mb-2">
                                            Experiencing thoughts of self-harm or suicide requires immediate professional intervention.
                                        </p>
                                        <p className="text-gray-700 font-medium">
                                            National Suicide Prevention Lifeline: 988 (U.S.)
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Mental health conditions are common but treatable. With proper care and support, recovery and management are possible. Remember that seeking help is a sign of strength, not weakness.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    Your mental health journey is unique—progress isn't always linear, and setbacks don't mean failure. Small, consistent steps lead to meaningful change over time.
                                </p>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "Healing doesn't mean the damage never existed. It means the damage no longer controls our lives." — Akshay Dubey
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
                                            Dr. Emily Carter, PsyD
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600 mb-1">
                                        — Written by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            Sarah Williams
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

                        {/* Crisis Resources */}
                        <div className="bg-red-50 rounded-lg p-6 mb-8 border-l-4 border-red-400">
                            <div className="mb-4">
                                <h3 className="text-sm font-bold text-red-800 uppercase tracking-wide mb-2">CRISIS RESOURCES</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Immediate Help Available</h4>
                                <p className="text-gray-700 text-sm">
                                    If you or someone you know is struggling, these resources provide 24/7 support.
                                </p>
                            </div>

                            <div className="space-y-3">
                                <div className="p-3 bg-white rounded-lg border border-gray-200">
                                    <p className="font-medium">National Suicide Prevention Lifeline</p>
                                    <p className="text-red-600 font-bold">988</p>
                                </div>
                                <div className="p-3 bg-white rounded-lg border border-gray-200">
                                    <p className="font-medium">Crisis Text Line</p>
                                    <p className="text-red-600 font-bold">Text HOME to 741741</p>
                                </div>
                                <div className="p-3 bg-white rounded-lg border border-gray-200">
                                    <p className="font-medium">SAMHSA Helpline</p>
                                    <p className="text-red-600 font-bold">1-800-662-HELP (4357)</p>
                                </div>
                            </div>
                        </div>

                        {/* Newsletter Signup */}
                        <div className="bg-blue-50 rounded-lg p-6 mb-8">
                            <div className="mb-4">
                                <h3 className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-2">MENTAL HEALTH NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get wellness tips and resources</h4>
                                <p className="text-gray-700 text-sm">
                                    Weekly mental health strategies, research updates, and self-care ideas.
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

                        {/* Recommended Apps */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Recommended Mental Health Apps</h3>
                            <div className="space-y-4">
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                                            <Brain className="w-6 h-6 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Headspace</h4>
                                            <p className="text-sm text-gray-600">Meditation & mindfulness</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center">
                                            <BookOpen className="w-6 h-6 text-green-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">MoodTools</h4>
                                            <p className="text-sm text-gray-600">Depression aid</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center">
                                            <Activity className="w-6 h-6 text-purple-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Sanvello</h4>
                                            <p className="text-sm text-gray-600">Anxiety & stress relief</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Self-Assessment */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Self-Assessment</h3>
                            <p className="text-gray-700 mb-4 text-sm">
                                Over the past 2 weeks, how often have you been bothered by:
                            </p>
                            <div className="space-y-3">
                                <div>
                                    <p className="text-sm font-medium mb-1">Little interest or pleasure in doing things?</p>
                                    <div className="flex justify-between text-xs text-gray-500">
                                        <span>Not at all</span>
                                        <span>Several days</span>
                                        <span>Nearly every day</span>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm font-medium mb-1">Feeling down, depressed, or hopeless?</p>
                                    <div className="flex justify-between text-xs text-gray-500">
                                        <span>Not at all</span>
                                        <span>Several days</span>
                                        <span>Nearly every day</span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-xs text-gray-600 mt-3">
                                This is not a diagnostic tool. If concerned, consult a professional.
                            </p>
                        </div>

                        {/* Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Further Reading</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-start">
                                        <BookOpen className="w-4 h-4 mt-1 mr-2 flex-shrink-0" />
                                        <span>The Body Keeps the Score - Bessel van der Kolk</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-start">
                                        <BookOpen className="w-4 h-4 mt-1 mr-2 flex-shrink-0" />
                                        <span>Feeling Good - David D. Burns</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-start">
                                        <BookOpen className="w-4 h-4 mt-1 mr-2 flex-shrink-0" />
                                        <span>NAMI Mental Health Resources</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-start">
                                        <BookOpen className="w-4 h-4 mt-1 mr-2 flex-shrink-0" />
                                        <span>ADAA Anxiety Management Tools</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}