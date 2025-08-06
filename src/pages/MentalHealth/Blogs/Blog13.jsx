"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, HeartHandshake, Users, Phone, LifeBuoy, BookOpen, Star } from "lucide-react"

export default function MentalHealthSupportNetwork() {
    const [email, setEmail] = useState("")
    const [activeTab, setActiveTab] = useState("Types")

    const handleEmailSubmit = (e) => {
        e.preventDefault()
        console.log("Email submitted:", email)
        setEmail("")
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const tabs = ["Types", "Building Steps", "Maintenance", "Resources"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Building Your Mental Health Support Network: A Complete Guide
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
                                A strong mental health support network is crucial for emotional wellbeing, crisis prevention, and long-term resilience. This guide will help you identify, build, and maintain a diverse support system tailored to your needs.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80"
                                    alt="Group of diverse people supporting each other"
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
                                    <li>Effective networks include 4-8 people from different relationship circles</li>
                                    <li>Regular contact (weekly/monthly) maintains connection strength</li>
                                    <li>Diverse support types (emotional, practical, informational) provide comprehensive coverage</li>
                                    <li>Digital tools can supplement but shouldn't replace in-person connections</li>
                                    <li>Reciprocity strengthens relationships - be both giver and receiver of support</li>
                                </ul>
                            </div>

                            {/* Why Support Networks Matter */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <HeartHandshake className="w-8 h-8 text-blue-600 mr-2" />
                                    Why Mental Health Support Networks Matter
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Research consistently shows that individuals with strong social support experience better mental health outcomes. A <a href="#" className="text-blue-600 hover:underline">2023 meta-analysis in JAMA Psychiatry</a> found that social connectedness:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>Reduces depression risk by 50% compared to isolated individuals</li>
                                    <li>Decreases anxiety symptoms by 40-60%</li>
                                    <li>Improves treatment adherence by 35% for those in therapy</li>
                                    <li>Lowers suicide risk by 45%</li>
                                </ul>

                                <div className="bg-purple-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">The Support Paradox</h3>
                                    <p className="text-gray-700">
                                        While 85% of people acknowledge needing support, only 30% actively maintain their network. This gap often stems from misconceptions that seeking help is burdensome or a sign of weakness, when in reality, support-seeking demonstrates strength and self-awareness.
                                    </p>
                                </div>
                            </section>

                            {/* Types of Support */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Users className="w-8 h-8 text-blue-600 mr-2" />
                                    The 4 Pillars of a Complete Support Network
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    A robust network includes different types of support from various sources. Below is a breakdown of essential support types and who typically provides them:
                                </p>

                                {/* Support Types Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Support Type</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Provides</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Example Providers</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ideal Frequency</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            {/* Emotional Support */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Emotional</td>
                                                <td className="px-4 py-3">Empathy, validation, listening</td>
                                                <td className="px-4 py-3">Close friends, family, partners</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Weekly</td>
                                            </tr>
                                            {/* Practical Support */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Practical</td>
                                                <td className="px-4 py-3">Tangible help with daily tasks</td>
                                                <td className="px-4 py-3">Neighbors, colleagues, community</td>
                                                <td className="px-4 py-3 whitespace-nowrap">As needed</td>
                                            </tr>
                                            {/* Informational Support */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Informational</td>
                                                <td className="px-4 py-3">Advice, resources, guidance</td>
                                                <td className="px-4 py-3">Therapists, mentors, coaches</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Monthly</td>
                                            </tr>
                                            {/* Crisis Support */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Crisis</td>
                                                <td className="px-4 py-3">Immediate intervention</td>
                                                <td className="px-4 py-3">Hotlines, emergency contacts</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Rarely (but vital)</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                {/* Support Network Visualization */}
                                <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Visualizing Your Current Network</h3>
                                    <p className="text-gray-700 mb-4">
                                        Draw circles representing your current support system, placing closer relationships nearer the center:
                                    </p>
                                    <div className="flex justify-center">
                                        <div className="relative w-64 h-64">
                                            {/* Center - You */}
                                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center border-2 border-blue-300">
                                                <span className="text-sm font-medium">You</span>
                                            </div>
                                            {/* Inner Circle - Close Support */}
                                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-green-300 rounded-full opacity-50"></div>
                                            {/* Middle Circle - Regular Support */}
                                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-2 border-yellow-300 rounded-full opacity-50"></div>
                                            {/* Outer Circle - Occasional Support */}
                                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-red-300 rounded-full opacity-50"></div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 mt-6 text-center text-sm">
                                        <div className="bg-green-50 p-2 rounded">Inner: 3-5 closest supporters</div>
                                        <div className="bg-yellow-50 p-2 rounded">Middle: 5-10 regular contacts</div>
                                        <div className="bg-red-50 p-2 rounded">Outer: Community/resources</div>
                                    </div>
                                </div>
                            </section>

                            {/* Building Your Network */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Step-by-Step: Building Your Support Network</h2>

                                <div className="space-y-6">
                                    {/* Step 1 */}
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                            <span className="text-blue-800 font-bold">1</span>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">Inventory Existing Relationships</h3>
                                            <p className="text-gray-700 mb-2">
                                                List all current supportive relationships, noting their strengths and limitations. Use this template:
                                            </p>
                                            <ul className="list-disc list-inside text-gray-700 ml-4 mb-3">
                                                <li>Name/Relationship</li>
                                                <li>Support Type Provided</li>
                                                <li>Availability (Regular/As Needed)</li>
                                                <li>Communication Preferences</li>
                                            </ul>
                                            <div className="bg-gray-50 p-3 rounded text-sm italic">
                                                Example: "Maria (cousin) - Great listener for emotional support, available weekends by text or call"
                                            </div>
                                        </div>
                                    </div>

                                    {/* Step 2 */}
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                            <span className="text-blue-800 font-bold">2</span>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">Identify Gaps</h3>
                                            <p className="text-gray-700 mb-3">
                                                Compare your current network to the ideal support types. Common gaps include:
                                            </p>
                                            <div className="grid md:grid-cols-2 gap-4 mb-3">
                                                <div className="bg-red-50 p-3 rounded border-l-4 border-red-400">
                                                    <h4 className="font-bold text-gray-900 mb-1">Missing Support Types</h4>
                                                    <ul className="list-disc list-inside text-sm">
                                                        <li>No crisis contacts</li>
                                                        <li>Lack of professional support</li>
                                                        <li>Few practical helpers</li>
                                                    </ul>
                                                </div>
                                                <div className="bg-yellow-50 p-3 rounded border-l-4 border-yellow-400">
                                                    <h4 className="font-bold text-gray-900 mb-1">Diversity Issues</h4>
                                                    <ul className="list-disc list-inside text-sm">
                                                        <li>All supporters in one life area (e.g. only work)</li>
                                                        <li>Same communication style</li>
                                                        <li>Limited perspectives</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Step 3 */}
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                            <span className="text-blue-800 font-bold">3</span>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">Expand Strategically</h3>
                                            <p className="text-gray-700 mb-3">
                                                Build new connections through these channels:
                                            </p>
                                            <div className="grid md:grid-cols-3 gap-3 text-sm mb-3">
                                                <div className="bg-white border border-gray-200 p-3 rounded">
                                                    <h4 className="font-bold mb-1">Community</h4>
                                                    <ul className="list-disc list-inside pl-2">
                                                        <li>Support groups</li>
                                                        <li>Volunteering</li>
                                                        <li>Classes/clubs</li>
                                                    </ul>
                                                </div>
                                                <div className="bg-white border border-gray-200 p-3 rounded">
                                                    <h4 className="font-bold mb-1">Professional</h4>
                                                    <ul className="list-disc list-inside pl-2">
                                                        <li>Therapists</li>
                                                        <li>Coaches</li>
                                                        <li>Peer specialists</li>
                                                    </ul>
                                                </div>
                                                <div className="bg-white border border-gray-200 p-3 rounded">
                                                    <h4 className="font-bold mb-1">Digital</h4>
                                                    <ul className="list-disc list-inside pl-2">
                                                        <li>Online communities</li>
                                                        <li>Mental health apps</li>
                                                        <li>Telehealth services</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="bg-blue-50 p-3 rounded text-sm">
                                                <span className="font-bold">Tip:</span> Start with one new connection every 2-4 weeks to avoid overwhelm.
                                            </div>
                                        </div>
                                    </div>

                                    {/* Step 4 */}
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                            <span className="text-blue-800 font-bold">4</span>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">Establish Communication Routines</h3>
                                            <p className="text-gray-700 mb-3">
                                                Create sustainable contact rhythms:
                                            </p>
                                            <div className="overflow-x-auto">
                                                <table className="min-w-full bg-white border border-gray-200 rounded">
                                                    <thead className="bg-gray-50">
                                                        <tr>
                                                            <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Relationship</th>
                                                            <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Ideal Frequency</th>
                                                            <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Methods</th>
                                                            <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Boundaries</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-gray-200 text-sm">
                                                        <tr>
                                                            <td className="px-3 py-2">Close friends</td>
                                                            <td className="px-3 py-2">Weekly</td>
                                                            <td className="px-3 py-2">Text, calls, meetups</td>
                                                            <td className="px-3 py-2">After 9pm only for emergencies</td>
                                                        </tr>
                                                        <tr className="bg-gray-50">
                                                            <td className="px-3 py-2">Therapist</td>
                                                            <td className="px-3 py-2">Bi-weekly</td>
                                                            <td className="px-3 py-2">Scheduled sessions</td>
                                                            <td className="px-3 py-2">Office hours only</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="px-3 py-2">Support group</td>
                                                            <td className="px-3 py-2">Monthly</td>
                                                            <td className="px-3 py-2">In-person meetings</td>
                                                            <td className="px-3 py-2">Confidentiality agreement</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Maintaining Your Network */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Maintaining Your Support Network</h2>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Reciprocity Practices</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Practice active listening when others share</li>
                                            <li>Offer specific help ("Can I bring you dinner Tuesday?")</li>
                                            <li>Share resources you find helpful</li>
                                            <li>Express appreciation regularly</li>
                                            <li>Respect others' boundaries and capacities</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Troubleshooting Challenges</h3>
                                        <div className="space-y-3">
                                            <div className="p-3 bg-red-50 rounded border-l-4 border-red-400">
                                                <h4 className="font-bold">Feeling like a burden</h4>
                                                <p className="text-sm">Remember most people feel honored to help. Focus on being a good receiver.</p>
                                            </div>
                                            <div className="p-3 bg-yellow-50 rounded border-l-4 border-yellow-400">
                                                <h4 className="font-bold">Uneven support</h4>
                                                <p className="text-sm">Diversify your network so no one person carries too much.</p>
                                            </div>
                                            <div className="p-3 bg-green-50 rounded border-l-4 border-green-400">
                                                <h4 className="font-bold">Changing needs</h4>
                                                <p className="text-sm">Reassess your network quarterly and adjust as life circumstances change.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-purple-50 rounded-lg p-6 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">The Maintenance Checklist</h3>
                                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                                        <div className="flex items-start">
                                            <input type="checkbox" id="check1" className="mt-1 mr-2" />
                                            <label htmlFor="check1">Monthly 1:1 check-ins with key supporters</label>
                                        </div>
                                        <div className="flex items-start">
                                            <input type="checkbox" id="check2" className="mt-1 mr-2" />
                                            <label htmlFor="check2">Updated crisis contacts list</label>
                                        </div>
                                        <div className="flex items-start">
                                            <input type="checkbox" id="check3" className="mt-1 mr-2" />
                                            <label htmlFor="check3">Expressed gratitude to 2 supporters</label>
                                        </div>
                                        <div className="flex items-start">
                                            <input type="checkbox" id="check4" className="mt-1 mr-2" />
                                            <label htmlFor="check4">Tried one new support avenue</label>
                                        </div>
                                        <div className="flex items-start">
                                            <input type="checkbox" id="check5" className="mt-1 mr-2" />
                                            <label htmlFor="check5">Reviewed and adjusted boundaries</label>
                                        </div>
                                        <div className="flex items-start">
                                            <input type="checkbox" id="check6" className="mt-1 mr-2" />
                                            <label htmlFor="check6">Offered support to someone else</label>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Crisis Preparedness */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Crisis Preparedness Plan</h2>

                                <p className="text-gray-700 mb-4">
                                    Even with a strong daily support network, having crisis-specific resources is essential. Follow this preparation plan:
                                </p>

                                <div className="space-y-4">
                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">Step 1: Identify Crisis Signs</h3>
                                        <p className="text-gray-700 mb-2">
                                            List your personal warning signs that indicate you need immediate support:
                                        </p>
                                        <div className="bg-gray-50 p-3 rounded text-sm italic">
                                            Example: "When I skip meals for 2 days straight and can't get out of bed"
                                        </div>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">Step 2: Create Your Crisis Contact List</h3>
                                        <div className="overflow-x-auto">
                                            <table className="min-w-full bg-white border border-gray-200 rounded text-sm">
                                                <thead className="bg-gray-100">
                                                    <tr>
                                                        <th className="px-3 py-2 text-left">Contact</th>
                                                        <th className="px-3 py-2 text-left">Role</th>
                                                        <th className="px-3 py-2 text-left">Availability</th>
                                                        <th className="px-3 py-2 text-left">Contact Method</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200">
                                                    <tr>
                                                        <td className="px-3 py-2">Sarah (sister)</td>
                                                        <td className="px-3 py-2">Primary emotional support</td>
                                                        <td className="px-3 py-2">24/7 for emergencies</td>
                                                        <td className="px-3 py-2">Call → text if no answer</td>
                                                    </tr>
                                                    <tr className="bg-gray-50">
                                                        <td className="px-3 py-2">Dr. Chen (therapist)</td>
                                                        <td className="px-3 py-2">Professional support</td>
                                                        <td className="px-3 py-2">Office hours + emergency line</td>
                                                        <td className="px-3 py-2">Clinic phone → emergency pager</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-3 py-2">Crisis Text Line</td>
                                                        <td className="px-3 py-2">Anonymous support</td>
                                                        <td className="px-3 py-2">24/7</td>
                                                        <td className="px-3 py-2">Text HOME to 741741</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">Step 3: Prepare a Self-Care Kit</h3>
                                        <p className="text-gray-700 mb-2">
                                            Have these items readily available for crisis moments:
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-3">
                                            <div className="bg-blue-50 p-3 rounded">
                                                <h4 className="font-bold text-sm mb-1">Physical Items</h4>
                                                <ul className="list-disc list-inside text-xs">
                                                    <li>Comfort objects</li>
                                                    <li>Stress balls</li>
                                                    <li>Weighted blanket</li>
                                                    <li>Essential oils</li>
                                                </ul>
                                            </div>
                                            <div className="bg-green-50 p-3 rounded">
                                                <h4 className="font-bold text-sm mb-1">Digital Resources</h4>
                                                <ul className="list-disc list-inside text-xs">
                                                    <li>Calming playlist</li>
                                                    <li>Guided meditation app</li>
                                                    <li>Saved uplifting messages</li>
                                                    <li>Virtual support group links</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Building and maintaining a mental health support network is an ongoing process that evolves with your life circumstances. It requires intention and effort, but the payoff—emotional resilience, practical assistance, and meaningful connections—is invaluable.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    Remember that seeking support isn't a sign of weakness but rather a demonstration of self-awareness and commitment to your wellbeing. As you strengthen your network, you'll likely find yourself naturally becoming a source of support for others as well, creating a positive cycle of mutual care.
                                </p>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "Connection is why we're here; it's what gives purpose and meaning to our lives. The support of others is not a luxury for humans—it's a biological necessity." — Dr. Brené Brown
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
                                            Dr. James Peterson, PhD
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600 mb-1">
                                        — Written by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            Emma Rodriguez, LCSW
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

                        {/* Emergency Resources */}
                        <div className="bg-red-50 rounded-lg p-6 mb-8 border-l-4 border-red-500">
                            <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                                <LifeBuoy className="w-5 h-5 text-red-600 mr-2" />
                                Immediate Help Resources
                            </h3>
                            <ul className="space-y-3 text-sm">
                                <li>
                                    <span className="font-medium">Crisis Text Line:</span> Text HOME to 741741
                                </li>
                                <li>
                                    <span className="font-medium">National Suicide Prevention Lifeline:</span> 988
                                </li>
                                <li>
                                    <span className="font-medium">Veterans Crisis Line:</span> 988 then press 1
                                </li>
                                <li>
                                    <span className="font-medium">Trevor Project (LGBTQ+):</span> 1-866-488-7386
                                </li>
                                <li>
                                    <span className="font-medium">SAMHSA Helpline:</span> 1-800-662-HELP (4357)
                                </li>
                            </ul>
                        </div>

                        {/* Support Network Builder */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Support Network Builder</h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Support Type Needed:</label>
                                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm">
                                        <option>Emotional Support</option>
                                        <option>Practical Help</option>
                                        <option>Professional Guidance</option>
                                        <option>Crisis Support</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Current Contacts:</label>
                                    <textarea 
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm" 
                                        rows="3"
                                        placeholder="List people you can reach out to..."
                                    ></textarea>
                                </div>
                                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md text-sm transition-colors">
                                    Generate Action Plan
                                </button>
                            </div>
                        </div>

                        {/* Recommended Books */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                <BookOpen className="w-5 h-5 text-blue-600 mr-2" />
                                Recommended Reading
                            </h3>
                            <div className="space-y-4">
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/book1.jpg" alt="Book cover" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors text-sm">The Gifts of Imperfection</h4>
                                            <p className="text-xs text-gray-600">Brené Brown</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/book2.jpg" alt="Book cover" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors text-sm">Lost Connections</h4>
                                            <p className="text-xs text-gray-600">Johann Hari</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/book3.jpg" alt="Book cover" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors text-sm">Maybe You Should Talk to Someone</h4>
                                            <p className="text-xs text-gray-600">Lori Gottlieb</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Support Group Finder */}
                        <div className="bg-blue-50 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Find Local Support Groups</h3>
                            <div className="space-y-3">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Location:</label>
                                    <input 
                                        type="text" 
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm" 
                                        placeholder="City or ZIP code"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Group Focus:</label>
                                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm">
                                        <option>General Mental Health</option>
                                        <option>Anxiety/Depression</option>
                                        <option>Grief/Loss</option>
                                        <option>Addiction Recovery</option>
                                        <option>Trauma Support</option>
                                    </select>
                                </div>
                                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md text-sm transition-colors">
                                    Search Groups
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}