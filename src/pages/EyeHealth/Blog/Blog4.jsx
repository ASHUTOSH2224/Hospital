"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, Eye, Heart, Dot, Smartphone, BookOpen, Shield, Users, LifeBuoy, Mail } from "lucide-react"

export default function VisionHealthSupportResources() {
    const [email, setEmail] = useState("")
    const [activeTab, setActiveTab] = useState("Resources")

    const handleEmailSubmit = (e) => {
        e.preventDefault()
        console.log("Email submitted:", email)
        setEmail("")
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const tabs = ["Resources", "Technologies", "Financial Aid", "Community"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Vision Health Support Resources: A Comprehensive Guide
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
                                Navigating vision health challenges can be overwhelming, but you're not alone. This comprehensive guide provides essential information about community resources, assistive technologies, support services, and financial assistance programs to help you maintain independence and quality of life with vision impairment.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                                    alt="Person using assistive technology for vision impairment"
                                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                                    style={{ maxHeight: '500px' }}
                                />
                            </div>

                            {/* Key Takeaways */}
                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
                                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                    <Heart className="w-5 h-5 text-blue-600 mr-2" />
                                    Key Takeaways
                                </h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>Over 12 million Americans age 40+ have vision impairment</li>
                                    <li>Assistive technologies can dramatically improve quality of life</li>
                                    <li>Many financial assistance programs are underutilized</li>
                                    <li>Early intervention leads to better adaptation outcomes</li>
                                    <li>Peer support groups provide emotional and practical benefits</li>
                                </ul>
                            </div>

                            {/* Understanding Vision Health Support */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Eye className="w-8 h-8 text-blue-600 mr-2" />
                                    Understanding Vision Health Support
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Vision impairment affects millions worldwide, with varying degrees of severity. According to the <a href="#" className="text-blue-600 hover:underline">World Health Organization</a>, at least 2.2 billion people have a near or distance vision impairment. Of these cases, at least 1 billion could have been prevented or have yet to be addressed.
                                </p>

                                <p className="text-gray-700 mb-6">
                                    Support resources exist across several categories:
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <Dot className="w-5 h-5 text-blue-600 mr-2" />
                                            Assistive Technologies
                                        </h3>
                                        <p className="text-gray-700">
                                            Devices and software that help with daily tasks, navigation, and information access.
                                        </p>
                                    </div>
                                    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <Users className="w-5 h-5 text-blue-600 mr-2" />
                                            Community Services
                                        </h3>
                                        <p className="text-gray-700">
                                            Local organizations offering training, rehabilitation, and peer support.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Vision Impairment Statistics</h3>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                                        <div className="bg-white p-3 rounded shadow">
                                            <div className="text-2xl font-bold text-blue-600">12M</div>
                                            <div className="text-sm text-gray-600">Americans with vision impairment</div>
                                        </div>
                                        <div className="bg-white p-3 rounded shadow">
                                            <div className="text-2xl font-bold text-blue-600">1M</div>
                                            <div className="text-sm text-gray-600">Legally blind in the U.S.</div>
                                        </div>
                                        <div className="bg-white p-3 rounded shadow">
                                            <div className="text-2xl font-bold text-blue-600">93%</div>
                                            <div className="text-sm text-gray-600">Adults who don't use low-vision services</div>
                                        </div>
                                        <div className="bg-white p-3 rounded shadow">
                                            <div className="text-2xl font-bold text-blue-600">2.5x</div>
                                            <div className="text-sm text-gray-600">Higher depression risk without support</div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Assistive Technologies */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Smartphone className="w-8 h-8 text-blue-600 mr-2" />
                                    Assistive Technologies for Vision Impairment
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Modern technology offers remarkable tools to help individuals with vision challenges maintain independence. Here's a comprehensive overview of available options:
                                </p>

                                {/* Technologies Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Technology</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cost Range</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Best For</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Screen Readers (JAWS, NVDA)</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Software</td>
                                                <td className="px-4 py-3 whitespace-nowrap">$0-$1200</td>
                                                <td className="px-4 py-3">Computer access</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Electronic Magnifiers</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Hardware</td>
                                                <td className="px-4 py-3 whitespace-nowrap">$200-$3000</td>
                                                <td className="px-4 py-3">Low vision reading</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Smart Glasses (eSight)</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Wearable</td>
                                                <td className="px-4 py-3 whitespace-nowrap">$2000-$10000</td>
                                                <td className="px-4 py-3">Mobility & daily tasks</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Talking Devices (clocks, scales)</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Household</td>
                                                <td className="px-4 py-3 whitespace-nowrap">$20-$200</td>
                                                <td className="px-4 py-3">Independent living</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Navigation Apps (BlindSquare)</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Mobile</td>
                                                <td className="px-4 py-3 whitespace-nowrap">$10-$100</td>
                                                <td className="px-4 py-3">Outdoor mobility</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">1</span>
                                            Free & Low-Cost Options
                                        </h3>
                                        <p className="text-gray-700">
                                            Many smartphones now include built-in accessibility features like VoiceOver (iOS) and TalkBack (Android) at no additional cost. Free screen readers like NVDA provide robust computer access.
                                        </p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">2</span>
                                            Emerging Technologies
                                        </h3>
                                        <p className="text-gray-700">
                                            AI-powered apps can now describe scenes, identify currency, and read documents in real-time. Haptic feedback devices and brain-computer interfaces show promising future potential.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Community Resources */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <LifeBuoy className="w-8 h-8 text-blue-600 mr-2" />
                                    Community Resources & Support Services
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Local organizations provide critical services to help individuals adapt to vision loss. These services often include:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>Orientation and mobility training</li>
                                    <li>Independent living skills instruction</li>
                                    <li>Vocational rehabilitation</li>
                                    <li>Peer support groups</li>
                                    <li>Counseling services</li>
                                </ul>

                                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center font-medium mb-2">
                                        <div>Organization</div>
                                        <div>Services Offered</div>
                                        <div>Contact</div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mb-1 border-b border-gray-200 pb-2">
                                        <div className="font-medium">National Federation of the Blind</div>
                                        <div>Advocacy, scholarships, training</div>
                                        <div>1-410-659-9314</div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mb-1 border-b border-gray-200 pb-2 bg-blue-50">
                                        <div className="font-medium">American Council of the Blind</div>
                                        <div>Resources, conventions, advocacy</div>
                                        <div>1-800-424-8666</div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mb-1 border-b border-gray-200 pb-2">
                                        <div className="font-medium">Lighthouse Guild</div>
                                        <div>Low vision services, support groups</div>
                                        <div>1-800-284-4422</div>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Finding Local Services</h3>
                                <p className="text-gray-700 mb-4">
                                    Most states have vocational rehabilitation agencies that provide vision-related services. Contact your state's agency through:
                                </p>

                                <ol className="list-decimal list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>State government websites (search for "vocational rehabilitation")</li>
                                    <li>Your local Department of Social Services</li>
                                    <li>Referrals from ophthalmologists or low vision specialists</li>
                                    <li>Recommendations from local support groups</li>
                                </ol>
                            </section>

                            {/* Financial Assistance */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Shield className="w-8 h-8 text-blue-600 mr-2" />
                                    Financial Assistance Programs
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Several programs can help offset the costs of vision care, assistive devices, and rehabilitation services:
                                </p>

                                <div className="space-y-6">
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Medicare & Medicaid Coverage</h3>
                                        </div>
                                        <div className="p-4">
                                            <p className="text-gray-700 mb-2">
                                                Medicare Part B covers some vision services and low-vision devices when medically necessary. Medicaid coverage varies by state but often includes:
                                            </p>
                                            <ul className="list-disc list-inside text-gray-700 ml-4">
                                                <li>Annual eye exams for high-risk individuals</li>
                                                <li>Treatment for eye diseases</li>
                                                <li>Some low-vision devices</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Non-Profit Assistance Programs</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Lions Clubs International</h4>
                                                <p className="text-gray-700">Provides financial assistance for eye care and glasses through local chapters</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">Vision USA</h4>
                                                <p className="text-gray-700">Offers free eye exams to low-income, uninsured individuals</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Tax Benefits</h3>
                                        </div>
                                        <div className="p-4">
                                            <p className="text-gray-700">
                                                The IRS allows deductions for vision-related expenses including:
                                            </p>
                                            <ul className="list-disc list-inside text-gray-700 ml-4 mt-2">
                                                <li>Medical expenses exceeding 7.5% of AGI</li>
                                                <li>Costs of guide dogs and their care</li>
                                                <li>Home modifications for vision impairment</li>
                                                <li>Assistive technology purchases</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Maintaining Independence */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Maintaining Independence with Vision Challenges</h2>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Home Adaptations</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Use high-contrast colors for switches and handles</li>
                                            <li>Install motion-activated lighting</li>
                                            <li>Organize with tactile markers</li>
                                            <li>Keep walking paths clear</li>
                                            <li>Use talking appliances</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Daily Living Tips</h3>
                                        <ol className="list-decimal list-inside text-gray-700 space-y-2">
                                            <li>Develop consistent organization systems</li>
                                            <li>Use smartphone apps for medication management</li>
                                            <li>Learn braille or audio labeling techniques</li>
                                            <li>Request accessible formats for bills and statements</li>
                                            <li>Practice routes to familiar locations</li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Success Story:</h3>
                                    <p className="text-gray-700">
                                        "After losing most of my vision to diabetic retinopathy, I thought I'd never cook again. My local vision rehab center taught me adaptive techniques and introduced me to talking kitchen tools. Now I prepare meals for my family independently!" — Maria T., age 62
                                    </p>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Vision impairment presents challenges, but with the right resources and support, individuals can lead fulfilling, independent lives. Early intervention and utilization of available services make a significant difference in adaptation outcomes.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    Remember that vision rehabilitation is a process, not a single event. Be patient with yourself as you learn new skills and technologies. Connect with others who understand your journey through peer support groups and community organizations.
                                </p>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "The only thing worse than losing your sight is losing your vision." — Helen Keller
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
                                            Dr. Emily Carter, OD
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
                        <div className="bg-blue-50 rounded-lg p-6 mb-8">
                            <div className="mb-4">
                                <h3 className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-2">VISION HEALTH NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get resources and support tips</h4>
                                <p className="text-gray-700 text-sm">
                                    Monthly updates on assistive technologies, community programs, and financial aid opportunities.
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
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Resource Links</h3>
                            <div className="space-y-3">
                                <a href="#" className="block text-blue-600 hover:underline flex items-center">
                                    <BookOpen className="w-4 h-4 mr-2" />
                                    National Eye Institute Resources
                                </a>
                                <a href="#" className="block text-blue-600 hover:underline flex items-center">
                                    <Smartphone className="w-4 h-4 mr-2" />
                                    App Directory for Vision Impairment
                                </a>
                                <a href="#" className="block text-blue-600 hover:underline flex items-center">
                                    <Users className="w-4 h-4 mr-2" />
                                    Find Local Support Groups
                                </a>
                                <a href="#" className="block text-blue-600 hover:underline flex items-center">
                                    <Shield className="w-4 h-4 mr-2" />
                                    Financial Aid Applications
                                </a>
                            </div>
                        </div>

                        {/* Emergency Contacts */}
                        <div className="bg-red-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Emergency Contacts</h3>
                            <div className="space-y-3">
                                <div>
                                    <h4 className="font-medium text-gray-900">Vision Crisis Hotline</h4>
                                    <p className="text-gray-700">1-800-555-HELP (4357)</p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900">24/7 Peer Support</h4>
                                    <p className="text-gray-700">1-888-555-VISION (847466)</p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900">Immediate Counseling</h4>
                                    <p className="text-gray-700">Text "VISION" to 741741</p>
                                </div>
                            </div>
                        </div>

                        {/* Upcoming Events */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Upcoming Events</h3>
                            <div className="space-y-4">
                                <div className="border-b border-gray-200 pb-3">
                                    <h4 className="font-medium text-gray-900">Low Vision Technology Expo</h4>
                                    <p className="text-sm text-gray-600">July 12, 2024 | Virtual</p>
                                </div>
                                <div className="border-b border-gray-200 pb-3">
                                    <h4 className="font-medium text-gray-900">Adaptive Cooking Class</h4>
                                    <p className="text-sm text-gray-600">August 5, 2024 | Local Centers</p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900">Annual Vision Walk</h4>
                                    <p className="text-sm text-gray-600">September 15, 2024 | Nationwide</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}