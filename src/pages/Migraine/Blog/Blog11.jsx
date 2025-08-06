"use client"

import { useState, useEffect } from "react"
import { User, Calendar, Clock, HeartPulse, Pill, Laptop, Users, Moon, Sun, Activity, BookOpen, LifeBuoy } from "lucide-react"

export default function ChronicMigraineGuide() {
    const [email, setEmail] = useState("")
    const [activeTab, setActiveTab] = useState("Stories")

    const handleEmailSubmit = (e) => {
        e.preventDefault()
        console.log("Email submitted:", email)
        setEmail("")
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const tabs = ["Stories", "Treatments", "Lifestyle", "Resources"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Living with Chronic Migraines: Patient Stories and Coping Strategies
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
                                <span className="mx-2">•</span>
                                <Clock className="w-4 h-4 mr-1" />
                                <span className="text-sm">15 min read</span>
                            </div>

                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                Chronic migraine, defined as 15 or more headache days per month with at least 8 being migraines, affects millions worldwide. This article shares real patient experiences, treatment journeys, and practical coping strategies that have made a difference in managing this debilitating condition.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://domf5oio6qrcr.cloudfront.net/medialibrary/11169/f1325894-063e-459e-b78d-b5138cd73d18.jpg"
                                    alt="Woman experiencing migraine pain"
                                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                                    style={{ maxHeight: '500px' }}
                                />
                            </div>

                            {/* Key Takeaways */}
                            <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-8">
                                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                    <HeartPulse className="w-5 h-5 text-purple-600 mr-2" />
                                    Key Takeaways
                                </h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>Chronic migraine affects 1-2% of the global population</li>
                                    <li>Average diagnosis delay is 5-7 years after symptom onset</li>
                                    <li>Combination therapies often work better than single treatments</li>
                                    <li>Workplace accommodations can reduce migraine triggers</li>
                                    <li>Support networks significantly improve quality of life</li>
                                </ul>
                            </div>

                            {/* Patient Stories Section */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Users className="w-8 h-8 text-purple-600 mr-2" />
                                    Patient Stories: Journeys Through Diagnosis and Treatment
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    The path to managing chronic migraines is deeply personal. Here are three stories that highlight different aspects of living with this condition.
                                </p>

                                {/* Sarah's Story */}
                                <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8 shadow-sm">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Sarah's Story: The Teacher Who Almost Quit</h3>
                                    <div className="flex items-center text-gray-500 mb-4 text-sm">
                                        <span>Age 34 • Elementary Teacher • Migraine History: 8 years</span>
                                    </div>
                                    
                                    <p className="text-gray-700 mb-4">
                                        "My migraines started in my mid-20s. At first, they were occasional - maybe once a month. But by year three, I was having 18-20 headache days monthly. The fluorescent lights in my classroom felt like knives, and the children's voices became unbearable."
                                    </p>
                                    
                                    <p className="text-gray-700 mb-4">
                                        Sarah tried numerous medications before finding a combination that worked:
                                    </p>
                                    
                                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                                        <div className="bg-gray-50 p-3 rounded-lg">
                                            <h4 className="font-bold text-gray-900 mb-1">Failed Treatments</h4>
                                            <ul className="list-disc list-inside text-gray-700 text-sm pl-2 space-y-1">
                                                <li>Beta blockers (caused fatigue)</li>
                                                <li>Topiramate (cognitive side effects)</li>
                                                <li>Traditional NSAIDs (stomach issues)</li>
                                            </ul>
                                        </div>
                                        <div className="bg-purple-50 p-3 rounded-lg">
                                            <h4 className="font-bold text-gray-900 mb-1">Successful Regimen</h4>
                                            <ul className="list-disc list-inside text-gray-700 text-sm pl-2 space-y-1">
                                                <li>CGRP inhibitor (monthly injections)</li>
                                                <li>Cognitive behavioral therapy</li>
                                                <li>Blue light filtering glasses</li>
                                                <li>Strict sleep schedule</li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    <p className="text-gray-700">
                                        "It took 5 neurologists before I found one who really listened. Now I'm down to 4-6 migraine days a month. I still have tough weeks, but I can do my job and enjoy life again."
                                    </p>
                                </div>

                                {/* Mark's Story */}
                                <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8 shadow-sm">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Mark's Journey: Tech Worker Finds Balance</h3>
                                    <div className="flex items-center text-gray-500 mb-4 text-sm">
                                        <span>Age 42 • Software Developer • Migraine History: 12 years</span>
                                    </div>
                                    
                                    <p className="text-gray-700 mb-4">
                                        "As a developer, I assumed my headaches were just eye strain. When they became daily, my doctor diagnosed chronic migraine. The turning point was realizing my workspace was a major trigger."
                                    </p>
                                    
                                    <div className="mb-4">
                                        <h4 className="font-bold text-gray-900 mb-2">Workspace Changes That Helped:</h4>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="bg-gray-100 p-3 rounded-lg">
                                                <div className="flex items-center mb-1">
                                                    <Laptop className="w-4 h-4 mr-2 text-purple-600" />
                                                    <span className="font-medium">Before</span>
                                                </div>
                                                <ul className="text-gray-700 text-sm space-y-1">
                                                    <li>Standard office fluorescent lighting</li>
                                                    <li>60Hz monitor refresh rate</li>
                                                    <li>No natural light exposure</li>
                                                    <li>Irregular breaks</li>
                                                </ul>
                                            </div>
                                            <div className="bg-purple-50 p-3 rounded-lg">
                                                <div className="flex items-center mb-1">
                                                    <Laptop className="w-4 h-4 mr-2 text-purple-600" />
                                                    <span className="font-medium">After</span>
                                                </div>
                                                <ul className="text-gray-700 text-sm space-y-1">
                                                    <li>LED lighting with dimmer controls</li>
                                                    <li>144Hz monitor with blue light filter</li>
                                                    <li>Near window with adjustable blinds</li>
                                                    <li>Pomodoro technique (25m work/5m break)</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <p className="text-gray-700">
                                        "Combined with preventive medication, these changes reduced my migraines from 15 to 6 days per month. My company was surprisingly supportive once I explained the business case - I'm now 40% more productive."
                                    </p>
                                </div>

                                {/* Maria's Story */}
                                <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8 shadow-sm">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Maria's Experience: The Power of Community</h3>
                                    <div className="flex items-center text-gray-500 mb-4 text-sm">
                                        <span>Age 29 • Freelance Writer • Migraine History: 6 years</span>
                                    </div>
                                    
                                    <p className="text-gray-700 mb-4">
                                        "I felt so alone until I found online migraine communities. The practical tips were helpful, but the emotional support was life-changing. Here's what I learned from others:"
                                    </p>
                                    
                                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                                        <div className="bg-purple-50 p-4 rounded-lg">
                                            <h4 className="font-bold text-gray-900 mb-2">Most Valuable Community Tips</h4>
                                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                                <li>Freezer packs specifically designed for head/neck</li>
                                                <li>"Migraine buddy" system for bad days</li>
                                                <li>Pre-prepared "migraine kits" with essentials</li>
                                                <li>How to navigate insurance approvals</li>
                                            </ul>
                                        </div>
                                        <div className="bg-white border border-purple-100 p-4 rounded-lg">
                                            <h4 className="font-bold text-gray-900 mb-2">Unexpected Benefits</h4>
                                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                                <li>Reduced feelings of isolation</li>
                                                <li>Shared doctor recommendations</li>
                                                <li>Treatment trial experiences</li>
                                                <li>Emotional coping strategies</li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    <p className="text-gray-700">
                                        "We even organized a local meetup group. It's incredible how much better I feel knowing I'm not alone in this. My migraines haven't disappeared, but my ability to cope has improved dramatically."
                                    </p>
                                </div>
                            </section>

                            {/* Treatment Options Section */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Pill className="w-8 h-8 text-purple-600 mr-2" />
                                    Treatment Options: What's Working Now
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Modern migraine treatment has evolved significantly. Here's a breakdown of current approaches with effectiveness ratings from a 2024 patient survey (n=1,200 chronic migraine patients):
                                </p>

                                {/* Treatments Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Treatment Type</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Example</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">% Reporting Improvement</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Avg. Reduction in Days</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Notes</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            {/* Row 1 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">CGRP Inhibitors</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Erenumab (Aimovig)</td>
                                                <td className="px-4 py-3 whitespace-nowrap">68%</td>
                                                <td className="px-4 py-3 whitespace-nowrap">6.2 days/month</td>
                                                <td className="px-4 py-3">Monthly injections, expensive but often covered</td>
                                            </tr>
                                            {/* Row 2 */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Botox</td>
                                                <td className="px-4 py-3 whitespace-nowrap">OnabotulinumtoxinA</td>
                                                <td className="px-4 py-3 whitespace-nowrap">54%</td>
                                                <td className="px-4 py-3 whitespace-nowrap">4.8 days/month</td>
                                                <td className="px-4 py-3">Every 12 weeks, requires specialist</td>
                                            </tr>
                                            {/* Row 3 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Neuromodulation</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Cefaly device</td>
                                                <td className="px-4 py-3 whitespace-nowrap">47%</td>
                                                <td className="px-4 py-3 whitespace-nowrap">3.5 days/month</td>
                                                <td className="px-4 py-3">Non-medication option, good for medication overuse</td>
                                            </tr>
                                            {/* Row 4 */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Lifestyle Changes</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Sleep regulation</td>
                                                <td className="px-4 py-3 whitespace-nowrap">62%</td>
                                                <td className="px-4 py-3 whitespace-nowrap">3.1 days/month</td>
                                                <td className="px-4 py-3">Most effective when combined with other treatments</td>
                                            </tr>
                                            {/* Row 5 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Behavioral Therapy</td>
                                                <td className="px-4 py-3 whitespace-nowrap">CBT for pain</td>
                                                <td className="px-4 py-3 whitespace-nowrap">51%</td>
                                                <td className="px-4 py-3 whitespace-nowrap">2.8 days/month</td>
                                                <td className="px-4 py-3">Improves coping even when migraine frequency unchanged</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Important Treatment Note</h3>
                                    <p className="text-gray-700">
                                        Most patients (82%) reported that combination therapy worked better than any single treatment. The most common effective combinations were CGRP inhibitors + lifestyle changes (34%) and Botox + behavioral therapy (28%).
                                    </p>
                                </div>
                            </section>

                            {/* Lifestyle Adjustments Section */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Activity className="w-8 h-8 text-purple-600 mr-2" />
                                    Lifestyle Adjustments That Make a Difference
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Beyond medications, patients report these lifestyle modifications significantly impact migraine frequency and severity:
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    {/* Sleep */}
                                    <div className="border border-gray-200 rounded-lg p-4">
                                        <div className="flex items-center mb-3">
                                            <Moon className="w-5 h-5 text-purple-600 mr-2" />
                                            <h3 className="text-xl font-bold text-gray-900">Sleep Hygiene</h3>
                                        </div>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Consistent bedtime/wake time (±30 min)</li>
                                            <li>Blue light filters on devices after 8pm</li>
                                            <li>Cool, completely dark bedroom</li>
                                            <li>No caffeine after 2pm</li>
                                        </ul>
                                        <div className="mt-3 p-2 bg-purple-50 rounded">
                                            <p className="text-sm text-gray-700">
                                                <span className="font-semibold">Patient tip:</span> "I use a sunrise alarm clock - the gradual light helps prevent morning migraines."
                                            </p>
                                        </div>
                                    </div>

                                    {/* Diet */}
                                    <div className="border border-gray-200 rounded-lg p-4">
                                        <div className="flex items-center mb-3">
                                            <Sun className="w-5 h-5 text-purple-600 mr-2" />
                                            <h3 className="text-xl font-bold text-gray-900">Diet & Hydration</h3>
                                        </div>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Regular meals (avoid blood sugar drops)</li>
                                            <li>Identify food triggers (common: aged cheese, MSG, artificial sweeteners)</li>
                                            <li>Electrolyte-enhanced water (many find plain water insufficient)</li>
                                            <li>Magnesium-rich foods (spinach, almonds, avocado)</li>
                                        </ul>
                                        <div className="mt-3 p-2 bg-purple-50 rounded">
                                            <p className="text-sm text-gray-700">
                                                <span className="font-semibold">Patient tip:</span> "I carry 'migraine-safe' snacks everywhere to avoid being caught without food."
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Workplace Strategies */}
                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Workplace Accommodations That Help</h3>
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <div className="grid md:grid-cols-3 gap-4">
                                            <div>
                                                <h4 className="font-bold text-gray-900 mb-2">Environmental</h4>
                                                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                                                    <li>Fluorescent light filters</li>
                                                    <li>Private workspace</li>
                                                    <li>Air purifier</li>
                                                    <li>Ergonomic assessment</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900 mb-2">Scheduling</h4>
                                                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                                                    <li>Flexible start times</li>
                                                    <li>Breaks as needed</li>
                                                    <li>Work-from-home options</li>
                                                    <li>Task rotation</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900 mb-2">Technological</h4>
                                                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                                                    <li>Blue light software</li>
                                                    <li>Noise-cancelling headphones</li>
                                                    <li>Voice-to-text software</li>
                                                    <li>Dimmable monitors</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 mt-3">
                                        <span className="font-semibold">Note:</span> In many countries, chronic migraine qualifies as a disability, requiring employers to provide reasonable accommodations under laws like the ADA (US) or Equality Act (UK).
                                    </p>
                                </div>
                            </section>

                            {/* Resources Section */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <LifeBuoy className="w-8 h-8 text-purple-600 mr-2" />
                                    Helpful Resources
                                </h2>

                                <div className="grid md:grid-cols-2 gap-6">
                                    {/* Support Organizations */}
                                    <div className="border border-purple-100 rounded-lg p-4 bg-purple-50">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Support Organizations</h3>
                                        <ul className="space-y-3">
                                            <li>
                                                <a href="#" className="text-purple-600 hover:underline font-medium">Migraine Research Foundation</a>
                                                <p className="text-gray-700 text-sm">Funds research and provides education</p>
                                            </li>
                                            <li>
                                                <a href="#" className="text-purple-600 hover:underline font-medium">American Migraine Foundation</a>
                                                <p className="text-gray-700 text-sm">Doctor finder and treatment guides</p>
                                            </li>
                                            <li>
                                                <a href="#" className="text-purple-600 hover:underline font-medium">Migraine Trust (UK)</a>
                                                <p className="text-gray-700 text-sm">Excellent informational resources</p>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Apps & Tools */}
                                    <div className="border border-gray-200 rounded-lg p-4 bg-white">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Apps & Tracking Tools</h3>
                                        <ul className="space-y-3">
                                            <li>
                                                <a href="#" className="text-purple-600 hover:underline font-medium">Migraine Buddy</a>
                                                <p className="text-gray-700 text-sm">Comprehensive tracking with reports</p>
                                            </li>
                                            <li>
                                                <a href="#" className="text-purple-600 hover:underline font-medium">N1-Headache</a>
                                                <p className="text-gray-700 text-sm">Neurologist-developed tracking</p>
                                            </li>
                                            <li>
                                                <a href="#" className="text-purple-600 hover:underline font-medium">Curable</a>
                                                <p className="text-gray-700 text-sm">Mind-body approach to chronic pain</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Living with chronic migraines is challenging, but as these stories show, improvement is possible. The journey often involves:
                                </p>

                                <ol className="list-decimal list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>Finding the right healthcare partners</li>
                                    <li>Patient persistence through treatment trials</li>
                                    <li>Comprehensive lifestyle adjustments</li>
                                    <li>Building a support network</li>
                                    <li>Advocating for accommodations</li>
                                </ol>

                                <div className="bg-purple-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "While there's no cure yet for chronic migraine, the array of treatment options today is better than ever. Don't lose hope if the first few attempts don't work - the right combination for you is out there."
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
                                            Dr. Elena Rodriguez, MD
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
                        <div className="bg-purple-50 rounded-lg p-6 mb-8">
                            <div className="mb-4">
                                <h3 className="text-sm font-bold text-purple-800 uppercase tracking-wide mb-2">MIGRAINE NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Living Well With Migraine</h4>
                                <p className="text-gray-700 text-sm">
                                    Get the latest treatment updates, coping strategies, and community stories delivered monthly.
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

                        {/* Common Triggers */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Common Migraine Triggers</h3>
                            <div className="space-y-3">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 h-5 w-5 text-purple-500 mt-0.5">•</div>
                                    <p className="text-gray-700 ml-2">Hormonal changes (in women)</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 h-5 w-5 text-purple-500 mt-0.5">•</div>
                                    <p className="text-gray-700 ml-2">Stress and anxiety</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 h-5 w-5 text-purple-500 mt-0.5">•</div>
                                    <p className="text-gray-700 ml-2">Bright or flashing lights</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 h-5 w-5 text-purple-500 mt-0.5">•</div>
                                    <p className="text-gray-700 ml-2">Loud noises</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 h-5 w-5 text-purple-500 mt-0.5">•</div>
                                    <p className="text-gray-700 ml-2">Strong smells</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 h-5 w-5 text-purple-500 mt-0.5">•</div>
                                    <p className="text-gray-700 ml-2">Sleep changes</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 h-5 w-5 text-purple-500 mt-0.5">•</div>
                                    <p className="text-gray-700 ml-2">Weather changes</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 h-5 w-5 text-purple-500 mt-0.5">•</div>
                                    <p className="text-gray-700 ml-2">Certain foods/additives</p>
                                </div>
                            </div>
                        </div>

                        {/* Emergency Kit */}
                        <div className="bg-purple-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                <BookOpen className="w-5 h-5 text-purple-600 mr-2" />
                                Migraine Emergency Kit
                            </h3>
                            <p className="text-gray-700 mb-3 text-sm">
                                Patients recommend keeping these items readily available:
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start">
                                    <span className="text-purple-600 mr-2">•</span>
                                    <span>Ice packs/head wraps</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-purple-600 mr-2">•</span>
                                    <span>Prescription abortives</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-purple-600 mr-2">•</span>
                                    <span>Electrolyte packets</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-purple-600 mr-2">•</span>
                                    <span>Earplugs/eye mask</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-purple-600 mr-2">•</span>
                                    <span>Ginger chews (for nausea)</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-purple-600 mr-2">•</span>
                                    <span>List of emergency contacts</span>
                                </li>
                            </ul>
                        </div>

                        {/* Related Articles */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Related Articles</h3>
                            <div className="space-y-4">
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/related1.jpg" alt="Woman with headache" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors">Understanding Migraine Auras</h4>
                                            <p className="text-sm text-gray-600">8 min read</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/related2.jpg" alt="Medication" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors">New Migraine Treatments 2024</h4>
                                            <p className="text-sm text-gray-600">12 min read</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/related3.jpg" alt="Workplace" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors">Workplace Rights for Chronic Pain</h4>
                                            <p className="text-sm text-gray-600">10 min read</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}