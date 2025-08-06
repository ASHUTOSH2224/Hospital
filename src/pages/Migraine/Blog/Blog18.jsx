"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, Stethoscope, Brain, HeartPulse, Users, Pill, MessageSquare } from "lucide-react"

export default function MigraineManagementTeamGuide() {
    const [email, setEmail] = useState("")
    const [activeTab, setActiveTab] = useState("Specialists")

    const handleEmailSubmit = (e) => {
        e.preventDefault()
        console.log("Email submitted:", email)
        setEmail("")
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const tabs = ["Specialists", "Treatment", "Support", "Resources"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Building Your Migraine Management Team: Specialists and Support
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
                                Effective migraine management often requires a multidisciplinary approach. This guide will help you assemble the right healthcare team including neurologists, headache specialists, mental health professionals, and support groups for comprehensive migraine care tailored to your specific needs.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80"
                                    alt="Medical team discussing patient care"
                                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                                    style={{ maxHeight: '500px' }}
                                />
                            </div>

                            {/* Key Takeaways */}
                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
                                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                    <Check className="w-5 h-5 text-blue-600 mr-2" />
                                    Key Takeaways
                                </h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>A comprehensive team approach improves migraine outcomes by 40-60% compared to single-provider care</li>
                                    <li>Specialists like neurologists and headache specialists have access to advanced treatments</li>
                                    <li>Mental health support is crucial as depression occurs in 30-50% of chronic migraine patients</li>
                                    <li>Support groups provide emotional benefits and practical coping strategies</li>
                                    <li>Team coordination prevents medication conflicts and treatment gaps</li>
                                </ul>
                            </div>

                            {/* Core Team Members */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Users className="w-8 h-8 text-blue-600 mr-2" />
                                    Core Members of Your Migraine Team
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Building an effective migraine management team requires understanding the roles of different healthcare professionals. Research shows that patients who assemble a coordinated care team experience <span className="font-semibold">30-50% fewer migraine days</span> and better quality of life compared to those relying on a single provider.
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                                        <div className="flex items-center mb-3">
                                            <div className="bg-blue-100 p-2 rounded-full mr-3">
                                                <Stethoscope className="w-5 h-5 text-blue-600" />
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900">Primary Care Physician (PCP)</h3>
                                        </div>
                                        <p className="text-gray-700 mb-3">
                                            Your first point of contact who can:
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                                            <li>Provide initial diagnosis and basic treatment</li>
                                            <li>Coordinate referrals to specialists</li>
                                            <li>Manage overall health and comorbidities</li>
                                            <li>Prescribe preventive and acute medications</li>
                                        </ul>
                                    </div>

                                    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                                        <div className="flex items-center mb-3">
                                            <div className="bg-blue-100 p-2 rounded-full mr-3">
                                                <Brain className="w-5 h-5 text-blue-600" />
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900">Neurologist</h3>
                                        </div>
                                        <p className="text-gray-700 mb-3">
                                            Specialists in nervous system disorders who:
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                                            <li>Diagnose complex migraine cases</li>
                                            <li>Provide access to newer treatments (CGRP inhibitors, Botox)</li>
                                            <li>Rule out other neurological conditions</li>
                                            <li>Manage medication-overuse headaches</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Additional Team Members */}
                                <div className="grid md:grid-cols-3 gap-4 mb-6">
                                    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                                        <div className="flex items-center mb-2">
                                            <div className="bg-blue-100 p-2 rounded-full mr-2">
                                                <HeartPulse className="w-4 h-4 text-blue-600" />
                                            </div>
                                            <h4 className="font-bold text-gray-900">Headache Specialist</h4>
                                        </div>
                                        <p className="text-sm text-gray-700">
                                            Neurologists with additional certification in headache medicine offering the most advanced care.
                                        </p>
                                    </div>
                                    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                                        <div className="flex items-center mb-2">
                                            <div className="bg-blue-100 p-2 rounded-full mr-2">
                                                <Pill className="w-4 h-4 text-blue-600" />
                                            </div>
                                            <h4 className="font-bold text-gray-900">Pain Management</h4>
                                        </div>
                                        <p className="text-sm text-gray-700">
                                            For nerve blocks, trigger point injections, and interventional procedures.
                                        </p>
                                    </div>
                                    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                                        <div className="flex items-center mb-2">
                                            <div className="bg-blue-100 p-2 rounded-full mr-2">
                                                <MessageSquare className="w-4 h-4 text-blue-600" />
                                            </div>
                                            <h4 className="font-bold text-gray-900">Mental Health</h4>
                                        </div>
                                        <p className="text-sm text-gray-700">
                                            Psychologists or psychiatrists to address anxiety, depression, and stress management.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">When to Seek Specialist Care</h3>
                                    <p className="text-gray-700 mb-2">
                                        Consider referral to a neurologist or headache specialist if:
                                    </p>
                                    <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                                        <li>You experience 4+ migraine days per month</li>
                                        <li>Acute medications fail to provide relief</li>
                                        <li>Your migraines significantly impact work/school</li>
                                        <li>You experience unusual symptoms like prolonged aura or neurological deficits</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Treatment Options Table */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Treatment Options by Specialist</h2>

                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Provider</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Preventive Options</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acute Treatments</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Specialized Therapies</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Primary Care</td>
                                                <td className="px-4 py-3">Beta-blockers, TCAs, anticonvulsants</td>
                                                <td className="px-4 py-3">NSAIDs, triptans, combination analgesics</td>
                                                <td className="px-4 py-3">Basic lifestyle counseling</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Neurologist</td>
                                                <td className="px-4 py-3">CGRP mAbs, Botox, newer anticonvulsants</td>
                                                <td className="px-4 py-3">DHE, stronger triptans, antiemetics</td>
                                                <td className="px-4 py-3">Neurostimulation devices</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Headache Specialist</td>
                                                <td className="px-4 py-3">All preventive options plus clinical trials</td>
                                                <td className="px-4 py-3">All acute options including IV therapies</td>
                                                <td className="px-4 py-3">Nerve blocks, SPG blocks, advanced devices</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Pain Management</td>
                                                <td className="px-4 py-3">Occipital nerve stimulation</td>
                                                <td className="px-4 py-3">Nerve blocks, trigger point injections</td>
                                                <td className="px-4 py-3">Radiofrequency ablation, neuromodulation</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <p className="text-gray-700 mb-6">
                                    <span className="font-semibold">Note:</span> Treatment options may vary based on individual patient factors, insurance coverage, and regional availability. Always consult with your healthcare provider about the best options for your specific situation.
                                </p>
                            </section>

                            {/* Mental Health Section */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">The Critical Role of Mental Health Support</h2>

                                <p className="text-gray-700 mb-4">
                                    Chronic migraine sufferers have a <span className="font-semibold">3-5 times higher risk</span> of developing depression and anxiety compared to the general population. The relationship is bidirectional - mental health issues can worsen migraines, and frequent migraines can lead to mood disorders.
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Psychological Therapies</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                                            <li>
                                                <span className="font-semibold">Cognitive Behavioral Therapy (CBT):</span> Helps modify pain responses and develop coping strategies (reduces migraine impact by 30-45%)
                                            </li>
                                            <li>
                                                <span className="font-semibold">Biofeedback:</span> Teaches control over physiological responses to stress and pain
                                            </li>
                                            <li>
                                                <span className="font-semibold">Mindfulness-Based Stress Reduction (MBSR):</span> Reduces headache frequency and improves pain tolerance
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Medication Considerations</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                                            <li>Some antidepressants (like amitriptyline) serve dual purposes for migraine prevention and mood regulation</li>
                                            <li>Anxiety medications must be carefully selected as some benzodiazepines can worsen headaches</li>
                                            <li>Newer options like SNRIs may be preferable for patients with both migraines and depression</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Success Story:</h3>
                                    <p className="text-gray-700">
                                        "After adding a psychologist to my care team, I learned techniques to manage migraine-related anxiety. In 6 months, my migraine frequency decreased from 15 to 8 days per month, and I could function better during attacks." - Sarah, 34
                                    </p>
                                </div>
                            </section>

                            {/* Support Networks */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Building Your Support Network</h2>

                                <div className="space-y-6">
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">In-Person Support Groups</h3>
                                        </div>
                                        <div className="p-4">
                                            <p className="text-gray-700 mb-3">
                                                Local chapters of organizations like the <span className="font-semibold">Migraine Research Foundation</span> or <span className="font-semibold">American Migraine Foundation</span> often host regular meetings.
                                            </p>
                                            <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                                                <li>Share coping strategies with others who understand</li>
                                                <li>Learn about local treatment resources</li>
                                                <li>Reduce feelings of isolation</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Online Communities</h3>
                                        </div>
                                        <div className="p-4">
                                            <p className="text-gray-700 mb-3">
                                                Digital platforms provide 24/7 access to support:
                                            </p>
                                            <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                                                <li>Migraine.com forums (over 100,000 members)</li>
                                                <li>Facebook groups (e.g., The Migraine Support Group with 50k+ members)</li>
                                                <li>Subreddits like r/migraine</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Family/Friend Education</h3>
                                        </div>
                                        <div className="p-4">
                                            <p className="text-gray-700 mb-3">
                                                Help your personal network understand migraines through:
                                            </p>
                                            <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                                                <li>Sharing educational materials from trusted sources</li>
                                                <li>Creating a "migraine action plan" they can follow</li>
                                                <li>Setting realistic expectations about your capabilities</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Coordination Tips */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Coordinating Your Care Team</h2>

                                <p className="text-gray-700 mb-4">
                                    Effective communication between team members is crucial. A <span className="font-semibold">2023 study</span> found that coordinated care reduces duplicate testing by 25% and medication conflicts by 40%.
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Essential Coordination Tools</h3>
                                        <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-4">
                                            <li>Shared electronic health records (ask about provider access)</li>
                                            <li>Centralized medication list updated after each visit</li>
                                            <li>Designated care coordinator (often your PCP or neurologist)</li>
                                            <li>Regular team meetings (consider virtual options)</li>
                                        </ol>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Patient Responsibilities</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                                            <li>Maintain a headache diary to share with all providers</li>
                                            <li>Inform each specialist about other treatments you're receiving</li>
                                            <li>Request records be shared between providers when needed</li>
                                            <li>Schedule follow-ups to assess team effectiveness</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Pro Tip:</h3>
                                    <p className="text-gray-700">
                                        Create a one-page "Migraine Care Summary" that includes your diagnosis, current treatments, medications, and key contacts. Update it monthly and bring copies to every appointment.
                                    </p>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Assembling the right migraine management team can transform your experience with this complex neurological condition. While it requires effort to coordinate multiple providers, the benefits—fewer headache days, better symptom control, and improved quality of life—make it worthwhile.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    Remember that your team may evolve over time as your needs change. Don't hesitate to seek second opinions or add specialists if your current regimen isn't providing adequate relief.
                                </p>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "You are the CEO of your migraine care team. While each specialist brings expertise, you must direct the overall strategy and ensure communication flows between all members."
                                    </p>
                                </div>
                            </section>
                        </div>

                        {/* Sidebar */}
                    </div>
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
                                            Dr. Emily Parker, MD
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
                        <div className="bg-blue-50 rounded-lg p-6 mb-8">
                            <div className="mb-4">
                                <h3 className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-2">MIGRAINE NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get expert migraine management tips</h4>
                                <p className="text-gray-700 text-sm">
                                    Monthly updates on new treatments, research, and coping strategies delivered to your inbox.
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

                        {/* Finding Specialists */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Finding Migraine Specialists</h3>
                            <div className="space-y-3">
                                <a href="#" className="block group">
                                    <div className="flex items-center gap-3 p-2 rounded hover:bg-gray-50">
                                        <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                            <Stethoscope className="w-4 h-4 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">American Migraine Foundation Provider Finder</h4>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-center gap-3 p-2 rounded hover:bg-gray-50">
                                        <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                            <Brain className="w-4 h-4 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">National Headache Foundation Directory</h4>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-center gap-3 p-2 rounded hover:bg-gray-50">
                                        <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                            <Users className="w-4 h-4 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Local Support Group Listings</h4>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Questions to Ask */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Questions to Ask Potential Providers</h3>
                            <div className="space-y-3">
                                <div className="p-3 bg-white rounded border border-gray-200">
                                    <p className="font-medium text-gray-900">"What percentage of your practice focuses on headache medicine?"</p>
                                </div>
                                <div className="p-3 bg-white rounded border border-gray-200">
                                    <p className="font-medium text-gray-900">"How do you coordinate care with other specialists?"</p>
                                </div>
                                <div className="p-3 bg-white rounded border border-gray-200">
                                    <p className="font-medium text-gray-900">"What treatment options do you offer beyond medications?"</p>
                                </div>
                                <div className="p-3 bg-white rounded border border-gray-200">
                                    <p className="font-medium text-gray-900">"How do you track patient outcomes and adjust treatment?"</p>
                                </div>
                            </div>
                        </div>

                        {/* Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Further Reading</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">How to Prepare for Your First Neurologist Visit</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Understanding Migraine Treatment Guidelines</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">The Role of Mental Health in Chronic Pain</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Navigating Insurance for Migraine Care</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}