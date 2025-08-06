"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, Eye, HeartHandshake, Users, Phone, Shield, BookOpen, Star } from "lucide-react"

export default function VisionCareSupportNetwork() {
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

    const tabs = ["Overview", "Family Support", "Professional Help", "Community Resources"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Building Your Vision Care Support Network
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
                                Discover how to create a strong support system with family, friends, healthcare providers, and community resources for vision impairment. A robust network can significantly improve quality of life, independence, and emotional well-being for those with visual challenges.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=500&q=80"
                                    alt="Supportive hands holding eyeglasses"
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
                                    <li>A strong support network can reduce depression risk by 40% in visually impaired individuals</li>
                                    <li>Combining family support with professional care leads to best outcomes</li>
                                    <li>Technology tools now make remote support more accessible than ever</li>
                                    <li>Community programs offer both practical help and social connection</li>
                                    <li>Self-advocacy skills are essential for building effective support</li>
                                </ul>
                            </div>

                            {/* Why Support Networks Matter */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <HeartHandshake className="w-8 h-8 text-blue-600 mr-2" />
                                    Why Vision Care Support Networks Matter
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Research from the <a href="#" className="text-blue-600 hover:underline">American Foundation for the Blind (2023)</a> shows that individuals with robust support systems experience:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>58% greater independence in daily activities</li>
                                    <li>40% lower rates of depression and anxiety</li>
                                    <li>72% higher adherence to treatment plans</li>
                                    <li>35% better outcomes in vision rehabilitation</li>
                                </ul>

                                <div className="bg-blue-100 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">The Four Pillars of Vision Support</h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="bg-white p-3 rounded-lg shadow-sm">
                                            <h4 className="font-bold text-gray-900 mb-1 flex items-center">
                                                <Users className="w-5 h-5 text-blue-600 mr-2" />
                                                Personal Network
                                            </h4>
                                            <p className="text-gray-700 text-sm">Family, friends, caregivers</p>
                                        </div>
                                        <div className="bg-white p-3 rounded-lg shadow-sm">
                                            <h4 className="font-bold text-gray-900 mb-1 flex items-center">
                                                <Shield className="w-5 h-5 text-blue-600 mr-2" />
                                                Professionals
                                            </h4>
                                            <p className="text-gray-700 text-sm">Doctors, therapists, counselors</p>
                                        </div>
                                        <div className="bg-white p-3 rounded-lg shadow-sm">
                                            <h4 className="font-bold text-gray-900 mb-1 flex items-center">
                                                <BookOpen className="w-5 h-5 text-blue-600 mr-2" />
                                                Community
                                            </h4>
                                            <p className="text-gray-700 text-sm">Support groups, nonprofits</p>
                                        </div>
                                        <div className="bg-white p-3 rounded-lg shadow-sm">
                                            <h4 className="font-bold text-gray-900 mb-1 flex items-center">
                                                <Phone className="w-5 h-5 text-blue-600 mr-2" />
                                                Technology
                                            </h4>
                                            <p className="text-gray-700 text-sm">Apps, devices, remote support</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Building Family Support */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Users className="w-8 h-8 text-blue-600 mr-2" />
                                    Building Family & Friend Support
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Your personal network forms the foundation of your support system. Here's how to cultivate understanding and practical help from those closest to you:
                                </p>

                                {/* Communication Strategies Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Challenge</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Communication Strategy</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Example</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Explaining your vision</td>
                                                <td className="px-4 py-3">Use descriptive comparisons</td>
                                                <td className="px-4 py-3">"It's like looking through foggy glasses that can't be cleaned"</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Asking for help</td>
                                                <td className="px-4 py-3">Be specific about needs</td>
                                                <td className="px-4 py-3">"Could you read me the directions on page 2?"</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Setting boundaries</td>
                                                <td className="px-4 py-3">Express appreciation then needs</td>
                                                <td className="px-4 py-3">"I appreciate your concern, but I'd like to try this myself first"</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                {/* Family Support Checklist */}
                                <div className="bg-blue-50 p-4 rounded-lg mb-8">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Family Support Checklist</h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-2">Essential Conversations</h4>
                                            <ul className="space-y-2">
                                                <li className="flex items-start">
                                                    <Check className="w-4 h-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                                                    <span>Discuss diagnosis and prognosis</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <Check className="w-4 h-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                                                    <span>Share emotional experiences</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <Check className="w-4 h-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                                                    <span>Identify practical needs</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-2">Practical Arrangements</h4>
                                            <ul className="space-y-2">
                                                <li className="flex items-start">
                                                    <Check className="w-4 h-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                                                    <span>Transportation schedules</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <Check className="w-4 h-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                                                    <span>Medication management</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <Check className="w-4 h-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                                                    <span>Home organization plan</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Family Support Tips */}
                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Educating Family Members</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Share reputable resources about your condition</li>
                                            <li>Invite family to doctor appointments</li>
                                            <li>Demonstrate assistive devices</li>
                                            <li>Explain vision-friendly home modifications</li>
                                        </ul>
                                    </div>
                                    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Maintaining Healthy Relationships</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Schedule regular check-ins</li>
                                            <li>Express appreciation often</li>
                                            <li>Balance help with independence</li>
                                            <li>Make time for non-vision related activities</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Professional Support Network */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Shield className="w-8 h-8 text-blue-600 mr-2" />
                                    Building Your Professional Support Team
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    A comprehensive professional team typically includes these specialists:
                                </p>

                                {/* Professional Team Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Specialist</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">When to Consult</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Ophthalmologist</td>
                                                <td className="px-4 py-3">Medical eye care, treatment</td>
                                                <td className="px-4 py-3">Diagnosis, treatment plans, surgeries</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Low Vision Specialist</td>
                                                <td className="px-4 py-3">Maximize remaining vision</td>
                                                <td className="px-4 py-3">When daily tasks become challenging</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Orientation & Mobility Specialist</td>
                                                <td className="px-4 py-3">Safe navigation training</td>
                                                <td className="px-4 py-3">When mobility becomes difficult</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Vision Rehabilitation Therapist</td>
                                                <td className="px-4 py-3">Daily living skills</td>
                                                <td className="px-4 py-3">For adapting to home and work tasks</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                {/* Finding Professionals */}
                                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Finding the Right Professionals</h3>
                                    <ol className="list-decimal list-inside text-gray-700 space-y-2">
                                        <li>Ask your primary eye doctor for referrals</li>
                                        <li>Contact local teaching hospitals with eye clinics</li>
                                        <li>Reach out to vision-related nonprofits for recommendations</li>
                                        <li>Check provider directories from professional associations</li>
                                        <li>Verify insurance coverage before scheduling</li>
                                    </ol>
                                </div>

                                {/* Working with Professionals */}
                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Preparing for Appointments</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Bring a list of medications</li>
                                            <li>Prepare questions in advance</li>
                                            <li>Bring a notebook or recorder</li>
                                            <li>Consider bringing a support person</li>
                                            <li>Have insurance information ready</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Communicating Effectively</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Be honest about symptoms and challenges</li>
                                            <li>Ask for explanations in simple terms</li>
                                            <li>Request written instructions</li>
                                            <li>Discuss follow-up plans clearly</li>
                                            <li>Share your personal goals</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Community Resources */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <BookOpen className="w-8 h-8 text-blue-600 mr-2" />
                                    Tapping Into Community Resources
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Community organizations provide invaluable services ranging from practical assistance to emotional support:
                                </p>

                                {/* Resource Comparison */}
                                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                                    <div className="grid md:grid-cols-4 gap-4 text-center font-medium mb-2 border-b pb-2">
                                        <div>Resource Type</div>
                                        <div>Services Offered</div>
                                        <div>Cost</div>
                                        <div>How to Access</div>
                                    </div>
                                    <div className="grid md:grid-cols-4 gap-4 text-center mb-1 border-b pb-2">
                                        <div className="font-medium">Nonprofit Organizations</div>
                                        <div>Support groups, education, advocacy</div>
                                        <div>Free or low-cost</div>
                                        <div>Website, phone, referral</div>
                                    </div>
                                    <div className="grid md:grid-cols-4 gap-4 text-center mb-1 border-b pb-2">
                                        <div className="font-medium">Government Programs</div>
                                        <div>Financial aid, vocational rehab</div>
                                        <div>Free (tax-funded)</div>
                                        <div>Application process</div>
                                    </div>
                                    <div className="grid md:grid-cols-4 gap-4 text-center">
                                        <div className="font-medium">Peer Support Groups</div>
                                        <div>Emotional support, shared experiences</div>
                                        <div>Free</div>
                                        <div>Local meetings, online forums</div>
                                    </div>
                                </div>

                                {/* Top National Resources */}
                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Top National Resources in the U.S.</h3>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="border border-gray-200 rounded-lg p-4">
                                            <h4 className="font-bold text-lg text-gray-900 mb-2">American Foundation for the Blind</h4>
                                            <p className="text-gray-700 mb-3">Provides resources, advocacy, and support for all ages</p>
                                            <a href="#" className="text-blue-600 hover:underline text-sm">www.afb.org</a>
                                        </div>
                                        <div className="border border-gray-200 rounded-lg p-4">
                                            <h4 className="font-bold text-lg text-gray-900 mb-2">National Federation of the Blind</h4>
                                            <p className="text-gray-700 mb-3">Offers peer support, scholarships, and advocacy</p>
                                            <a href="#" className="text-blue-600 hover:underline text-sm">www.nfb.org</a>
                                        </div>
                                        <div className="border border-gray-200 rounded-lg p-4">
                                            <h4 className="font-bold text-lg text-gray-900 mb-2">Lighthouse Guild</h4>
                                            <p className="text-gray-700 mb-3">Comprehensive vision rehabilitation services</p>
                                            <a href="#" className="text-blue-600 hover:underline text-sm">www.lighthouseguild.org</a>
                                        </div>
                                        <div className="border border-gray-200 rounded-lg p-4">
                                            <h4 className="font-bold text-lg text-gray-900 mb-2">Hadley</h4>
                                            <p className="text-gray-700 mb-3">Free education programs for blind and low vision</p>
                                            <a href="#" className="text-blue-600 hover:underline text-sm">www.hadley.edu</a>
                                        </div>
                                    </div>
                                </div>

                                {/* Finding Local Resources */}
                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Finding Local Resources</h3>
                                    <ol className="list-decimal list-inside text-gray-700 space-y-2">
                                        <li>Ask your eye care specialist for local recommendations</li>
                                        <li>Contact your state's vocational rehabilitation agency</li>
                                        <li>Search the VisionAware directory of local services</li>
                                        <li>Check with local hospitals for low vision clinics</li>
                                        <li>Visit your area agency on aging (even if you're not elderly)</li>
                                    </ol>
                                </div>
                            </section>

                            {/* Technology Support */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Phone className="w-8 h-8 text-blue-600 mr-2" />
                                    Leveraging Technology for Support
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Modern technology offers innovative ways to build and maintain your support network:
                                </p>

                                {/* Tech Tools */}
                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="border border-gray-200 rounded-lg p-4">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Remote Support Apps</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Be My Eyes - Connects to sighted volunteers via video</li>
                                            <li>Aira - Professional visual interpreters on demand</li>
                                            <li>Seeing AI - Microsoft's AI-powered scene description</li>
                                            <li>TapTapSee - Identifies objects through photos</li>
                                        </ul>
                                    </div>
                                    <div className="border border-gray-200 rounded-lg p-4">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Smart Home Devices</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Voice assistants (Alexa, Google Home, Siri)</li>
                                            <li>Smart doorbells with audio alerts</li>
                                            <li>Automated lighting systems</li>
                                            <li>Smart medication dispensers</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Online Communities */}
                                <div className="bg-blue-50 p-4 rounded-lg mb-8">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Online Support Communities</h3>
                                    <div className="grid md:grid-cols-3 gap-4">
                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-2">General Support</h4>
                                            <ul className="space-y-1">
                                                <li><a href="#" className="text-blue-600 hover:underline">r/Blind on Reddit</a></li>
                                                <li><a href="#" className="text-blue-600 hover:underline">VisionAware forums</a></li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-2">Condition-Specific</h4>
                                            <ul className="space-y-1">
                                                <li><a href="#" className="text-blue-600 hover:underline">Macular Degeneration Support</a></li>
                                                <li><a href="#" className="text-blue-600 hover:underline">Glaucoma Research Foundation</a></li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-2">Caregiver Support</h4>
                                            <ul className="space-y-1">
                                                <li><a href="#" className="text-blue-600 hover:underline">Family Caregiver Alliance</a></li>
                                                <li><a href="#" className="text-blue-600 hover:underline">Caregiver Action Network</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Building a comprehensive vision care support network takes time and effort, but the benefits to your independence, safety, and emotional well-being are immeasurable. Remember that needs change over time, so regularly reassess and adjust your support system.
                                </p>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "The most successful individuals with vision loss aren't those who go it alone, but those who learn to effectively engage and coordinate their support networks. Your ability to ask for and direct help is a strength, not a weakness."
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
                                            Dr. Emily Parker, OD
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600 mb-1">
                                        — Written by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            Sarah Johnson
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
                                <h3 className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-2">VISION SUPPORT NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get resources and support tips</h4>
                                <p className="text-gray-700 text-sm">
                                    Monthly updates on vision care resources, technology, and community programs.
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

                        {/* Quick Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Resources</h3>
                            <div className="space-y-4">
                                <a href="#" className="block group">
                                    <div className="flex items-center gap-3 p-2 hover:bg-blue-50 rounded transition-colors">
                                        <Eye className="w-5 h-5 text-blue-600" />
                                        <span className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">24/7 Crisis Support</span>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-center gap-3 p-2 hover:bg-blue-50 rounded transition-colors">
                                        <HeartHandshake className="w-5 h-5 text-blue-600" />
                                        <span className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Find Local Services</span>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-center gap-3 p-2 hover:bg-blue-50 rounded transition-colors">
                                        <BookOpen className="w-5 h-5 text-blue-600" />
                                        <span className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Vision Loss FAQs</span>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Emergency Contacts */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Emergency Contacts</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span className="font-medium">Vision Emergency:</span>
                                    <span className="text-blue-600">800-555-0101</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Emotional Support:</span>
                                    <span className="text-blue-600">800-555-0102</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Transportation Help:</span>
                                    <span className="text-blue-600">800-555-0103</span>
                                </div>
                            </div>
                        </div>

                        {/* Further Reading */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Further Reading</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Adapting Your Home for Vision Loss</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Navigating Insurance for Vision Care</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Assistive Technology Guide</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Communicating About Vision Loss</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}