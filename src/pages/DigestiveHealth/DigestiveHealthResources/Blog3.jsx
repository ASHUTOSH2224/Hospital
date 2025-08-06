"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, Heart, LifeBuoy, Shield, Users, Phone, MapPin, BookOpen, HandHeart } from "lucide-react"

export default function DigestiveHealthSupportResources() {
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

    const tabs = ["Overview", "Support Groups", "Financial Aid", "Care Services", "Online Resources"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Digestive Health Support Resources: A Comprehensive Guide
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
                                Navigating digestive health challenges can feel overwhelming, but you're not alone. This guide provides comprehensive information about support groups, financial assistance programs, specialized care services, and community resources to help you manage digestive disorders and improve your quality of life.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                                    alt="Support group meeting for digestive health"
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
                                    <li>Over 70 million Americans are affected by digestive diseases annually</li>
                                    <li>Support groups can reduce feelings of isolation by 60% for chronic condition patients</li>
                                    <li>Financial assistance programs cover up to 100% of treatment costs for eligible patients</li>
                                    <li>Telehealth services have increased access to digestive care by 45% since 2020</li>
                                    <li>Patient advocacy organizations provide free educational materials and treatment guidance</li>
                                </ul>
                            </div>

                            {/* Why Support Matters */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <LifeBuoy className="w-8 h-8 text-blue-600 mr-2" />
                                    Why Digestive Health Support Matters
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Digestive disorders often require long-term management and can significantly impact quality of life. According to a <a href="#" className="text-blue-600 hover:underline">2024 study in the Journal of Gastroenterology</a>, patients who utilize support resources experience:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>38% better adherence to treatment plans</li>
                                    <li>45% reduction in anxiety and depression symptoms</li>
                                    <li>27% fewer hospital readmissions</li>
                                    <li>Higher satisfaction with care (4.2 vs 3.1 on 5-point scale)</li>
                                </ul>

                                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">The Emotional Impact</h3>
                                    <p className="text-gray-700">
                                        Digestive conditions often carry social stigma, with 62% of patients reporting embarrassment about their symptoms. Support resources help normalize these experiences and provide safe spaces to share concerns.
                                    </p>
                                </div>
                            </section>

                            {/* National Support Organizations */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Users className="w-8 h-8 text-blue-600 mr-2" />
                                    National Support Organizations
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    These reputable organizations offer comprehensive resources, helplines, and local chapter information:
                                </p>

                                {/* Organizations Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Organization</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Focus Area</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Helpline</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Key Services</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            {/* Row 1 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Crohn's & Colitis Foundation</td>
                                                <td className="px-4 py-3 whitespace-nowrap">IBD</td>
                                                <td className="px-4 py-3 whitespace-nowrap">1-888-694-8872</td>
                                                <td className="px-4 py-3">Local chapters, Camp Oasis for kids, research funding</td>
                                            </tr>
                                            {/* Row 2 */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">American Liver Foundation</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Liver diseases</td>
                                                <td className="px-4 py-3 whitespace-nowrap">1-800-465-4837</td>
                                                <td className="px-4 py-3">Screening programs, support groups, advocacy</td>
                                            </tr>
                                            {/* Row 3 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">IFFGD</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Functional GI disorders</td>
                                                <td className="px-4 py-3 whitespace-nowrap">1-414-964-1799</td>
                                                <td className="px-4 py-3">Educational materials, provider directory</td>
                                            </tr>
                                            {/* Row 4 */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">GIST Support International</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Gastrointestinal stromal tumors</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Email support</td>
                                                <td className="px-4 py-3">Patient mentoring, treatment updates</td>
                                            </tr>
                                            {/* Row 5 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">NASPGHAN</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Pediatric GI</td>
                                                <td className="px-4 py-3 whitespace-nowrap">1-215-641-9800</td>
                                                <td className="px-4 py-3">Provider referrals, family resources</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <Phone className="w-5 h-5 text-blue-600 mr-2" />
                                            What to Expect When Calling a Helpline
                                        </h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1 pl-2">
                                            <li>Trained specialists answer calls</li>
                                            <li>Confidential and compassionate support</li>
                                            <li>Help finding local resources</li>
                                            <li>Educational materials mailed free</li>
                                            <li>Referrals to specialists when needed</li>
                                        </ul>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                                            Finding Local Chapters
                                        </h3>
                                        <p className="text-gray-700 mb-2">
                                            Most national organizations have local chapters offering:
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1 pl-2">
                                            <li>Monthly support group meetings</li>
                                            <li>Annual education conferences</li>
                                            <li>Walk/run fundraising events</li>
                                            <li>Volunteer opportunities</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Financial Assistance Programs */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Shield className="w-8 h-8 text-blue-600 mr-2" />
                                    Financial Assistance Programs
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Digestive treatments can be expensive. These programs help with medication costs, procedures, and nutritional support:
                                </p>

                                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                                    <div className="grid grid-cols-3 gap-4 text-center font-medium mb-2">
                                        <div>Program</div>
                                        <div>Eligibility</div>
                                        <div>Coverage</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 text-center mb-1">
                                        <div className="font-medium">Patient Access Network</div>
                                        <div>Income ≤ 500% FPL</div>
                                        <div>Up to $15,000/year</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 text-center mb-1 bg-blue-50 p-1 rounded">
                                        <div className="font-medium">HealthWell Foundation</div>
                                        <div>Insurance + medical need</div>
                                        <div>Copays & premiums</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 text-center mb-1">
                                        <div className="font-medium">NeedyMeds</div>
                                        <div>Varies by drug</div>
                                        <div>Free/low-cost meds</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 text-center">
                                        <div className="font-medium">RxHope</div>
                                        <div>Prescription-specific</div>
                                        <div>Full medication cost</div>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-3">Application Process</h3>
                                <ol className="list-decimal list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>Gather documents (tax returns, pay stubs, medical bills)</li>
                                    <li>Complete application with physician signature</li>
                                    <li>Submit via online portal or mail</li>
                                    <li>Approval typically takes 2-4 weeks</li>
                                    <li>Funds sent directly to providers</li>
                                </ol>

                                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                                    <h3 className="font-bold text-gray-900 mb-2">Pro Tip:</h3>
                                    <p className="text-gray-700">
                                        Hospital social workers can help identify additional local assistance programs not listed here. Always ask about "charity care" programs at treatment facilities.
                                    </p>
                                </div>
                            </section>

                            {/* Specialized Care Services */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Specialized Care Services</h2>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Nutrition Counseling</h3>
                                        <p className="text-gray-700 mb-2">
                                            Registered dietitians specializing in digestive disorders can help with:
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                                            <li>IBD-specific meal planning</li>
                                            <li>Low-FODMAP diet implementation</li>
                                            <li>Nutritional deficiency management</li>
                                            <li>Tube feeding/TPN transitions</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Mental Health Support</h3>
                                        <p className="text-gray-700 mb-2">
                                            Therapists with GI experience address:
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                                            <li>Anxiety about symptoms/flares</li>
                                            <li>Body image concerns</li>
                                            <li>Coping with chronic pain</li>
                                            <li>Medical trauma therapy</li>
                                        </ul>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-3">Telehealth Options</h3>
                                <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
                                    <div className="flex flex-wrap gap-4">
                                        <div className="flex-1 min-w-[200px] border border-gray-200 rounded-lg p-3">
                                            <h4 className="font-bold text-gray-900 mb-2">GI OnDemand</h4>
                                            <p className="text-gray-700 text-sm">24/7 access to gastroenterologists</p>
                                        </div>
                                        <div className="flex-1 min-w-[200px] border border-gray-200 rounded-lg p-3">
                                            <h4 className="font-bold text-gray-900 mb-2">Rome Foundation</h4>
                                            <p className="text-gray-700 text-sm">Functional GI disorder specialists</p>
                                        </div>
                                        <div className="flex-1 min-w-[200px] border border-gray-200 rounded-lg p-3">
                                            <h4 className="font-bold text-gray-900 mb-2">Oshi Health</h4>
                                            <p className="text-gray-700 text-sm">Whole-person digestive care</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Online Communities */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Online Communities & Resources</h2>

                                <div className="space-y-6">
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Moderated Forums</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Inspire GI Communities</h4>
                                                <p className="text-gray-700">Disease-specific groups with 100,000+ members</p>
                                            </div>
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">PatientsLikeMe</h4>
                                                <p className="text-gray-700">Track symptoms and connect with similar patients</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Educational Platforms</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">GI Society</h4>
                                                <p className="text-gray-700">Webinars with leading gastroenterologists</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">IBD School</h4>
                                                <p className="text-gray-700">Free courses on managing inflammatory bowel disease</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Getting Started With Support</h2>

                                <p className="text-gray-700 mb-4">
                                    Taking the first step to seek support can feel daunting, but these actions make it easier:
                                </p>

                                <div className="grid md:grid-cols-3 gap-4 mb-6">
                                    <div className="bg-blue-50 p-4 rounded-lg">
                                        <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center mb-3">
                                            <span className="font-bold text-blue-800">1</span>
                                        </div>
                                        <h3 className="font-bold text-gray-900 mb-2">Identify Your Needs</h3>
                                        <p className="text-gray-700 text-sm">List your top 2-3 challenges (emotional, financial, medical)</p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg">
                                        <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center mb-3">
                                            <span className="font-bold text-blue-800">2</span>
                                        </div>
                                        <h3 className="font-bold text-gray-900 mb-2">Research Options</h3>
                                        <p className="text-gray-700 text-sm">Use this guide to find matching resources</p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg">
                                        <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center mb-3">
                                            <span className="font-bold text-blue-800">3</span>
                                        </div>
                                        <h3 className="font-bold text-gray-900 mb-2">Make First Contact</h3>
                                        <p className="text-gray-700 text-sm">Call one helpline or attend one online meeting</p>
                                    </div>
                                </div>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "You don't have to navigate digestive health challenges alone. Support resources exist to help with every aspect of your journey—from medical care to emotional wellbeing. Reach out today and discover how much easier this path can be when others walk with you."
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
                                            Dr. Emily Sanchez, MD
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

                        {/* Emergency Resources */}
                        <div className="bg-red-50 rounded-lg p-6 mb-8 border-l-4 border-red-400">
                            <div className="mb-4">
                                <h3 className="text-sm font-bold text-red-800 uppercase tracking-wide mb-2">CRISIS SUPPORT</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Immediate Help Available</h4>
                                <p className="text-gray-700 text-sm">
                                    If you're experiencing a medical emergency or severe emotional distress, contact:
                                </p>
                            </div>

                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-red-600 hover:underline font-medium flex items-center">
                                        <Phone className="w-4 h-4 mr-2" />
                                        911 or nearest ER
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-red-600 hover:underline font-medium flex items-center">
                                        <Phone className="w-4 h-4 mr-2" />
                                        National Suicide Prevention Lifeline: 988
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-red-600 hover:underline font-medium flex items-center">
                                        <Phone className="w-4 h-4 mr-2" />
                                        SAMHSA Helpline: 1-800-662-4357
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Newsletter Signup */}
                        <div className="bg-blue-50 rounded-lg p-6 mb-8">
                            <div className="mb-4">
                                <h3 className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-2">DIGESTIVE HEALTH NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get support resources and tips</h4>
                                <p className="text-gray-700 text-sm">
                                    Monthly updates on new programs, research findings, and community events.
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

                        {/* Upcoming Events */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Upcoming Events</h3>
                            <div className="space-y-4">
                                <div className="border-l-4 border-blue-500 pl-4">
                                    <h4 className="font-medium text-gray-900">June 25: Virtual IBD Support Group</h4>
                                    <p className="text-sm text-gray-600">7:00 PM EST • Zoom meeting</p>
                                </div>
                                <div className="border-l-4 border-blue-500 pl-4">
                                    <h4 className="font-medium text-gray-900">July 10: Gut Health Nutrition Webinar</h4>
                                    <p className="text-sm text-gray-600">2:00 PM EST • Free registration</p>
                                </div>
                                <div className="border-l-4 border-blue-500 pl-4">
                                    <h4 className="font-medium text-gray-900">August 5-7: Digestive Wellness Conference</h4>
                                    <p className="text-sm text-gray-600">Chicago, IL • Early bird pricing</p>
                                </div>
                            </div>
                        </div>

                        {/* Recommended Reading */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Recommended Books</h3>
                            <div className="space-y-4">
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/book1.jpg" alt="Book cover" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Living Well with IBD</h4>
                                            <p className="text-sm text-gray-600">A. Thompson, PhD</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/book2.jpg" alt="Book cover" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">The Gut-Brain Connection</h4>
                                            <p className="text-sm text-gray-600">M. Rodriguez, MD</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="bg-gray-50 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Links</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-center">
                                        <BookOpen className="w-4 h-4 mr-2" />
                                        Downloadable Symptom Tracker
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-center">
                                        <HandHeart className="w-4 h-4 mr-2" />
                                        Find Clinical Trials
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-center">
                                        <Users className="w-4 h-4 mr-2" />
                                        Caregiver Support Resources
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