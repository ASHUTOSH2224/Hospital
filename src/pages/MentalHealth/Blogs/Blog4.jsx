"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, Heart, Phone, MapPin, Shield, LifeBuoy, BookOpen, Users, CreditCard, Info } from "lucide-react"

export default function MentalHealthSupportResources() {
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

    const tabs = ["Overview", "Support Groups", "Crisis Help", "Financial Aid", "Self-Care"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Mental Health Support Resources: A Comprehensive Guide
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
                                Accessing mental health support can be challenging, but you're not alone. This comprehensive guide provides information about support groups, crisis services, community mental health centers, insurance coverage, financial assistance programs, and resources for maintaining independence while managing mental health challenges.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                                    alt="Supportive hands forming a heart shape"
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
                                    <li>Multiple free and low-cost mental health resources are available nationwide</li>
                                    <li>Support groups exist for nearly every mental health condition and life circumstance</li>
                                    <li>Many insurance plans now provide mental health parity coverage</li>
                                    <li>Immediate help is available 24/7 through crisis hotlines and text services</li>
                                    <li>Community health centers offer sliding scale fees based on income</li>
                                </ul>
                            </div>

                            {/* Why Mental Health Support Matters */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Heart className="w-8 h-8 text-blue-600 mr-2" />
                                    Why Mental Health Support Matters
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Mental health is just as important as physical health, yet many people struggle to access appropriate care. According to the <a href="#" className="text-blue-600 hover:underline">National Alliance on Mental Illness (NAMI)</a>, 1 in 5 U.S. adults experience mental illness each year, but only 45% receive treatment. Barriers include cost, stigma, and not knowing where to find help.
                                </p>

                                <p className="text-gray-700 mb-6">
                                    Seeking support can lead to:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>Earlier intervention and better outcomes</li>
                                    <li>Reduced feelings of isolation</li>
                                    <li>Improved coping strategies</li>
                                    <li>Better understanding of your condition</li>
                                    <li>Access to professional guidance</li>
                                </ul>

                                <div className="bg-blue-100 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Mental Health Statistics</h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <p className="text-gray-700 mb-2">
                                                <span className="font-bold">56%</span> of Americans seek or want to seek mental health services
                                            </p>
                                            <p className="text-gray-700 mb-2">
                                                <span className="font-bold">11.4%</span> of youth report suffering from at least one major depressive episode
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-gray-700 mb-2">
                                                <span className="font-bold">60%</span> of counties in the U.S. don't have a single psychiatrist
                                            </p>
                                            <p className="text-gray-700">
                                                <span className="font-bold">70-90%</span> of people see improvement with appropriate treatment
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Types of Support Available */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Users className="w-8 h-8 text-blue-600 mr-2" />
                                    Types of Mental Health Support Available
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Mental health support comes in many forms to meet different needs:
                                </p>

                                {/* Support Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Resource Type</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Best For</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cost Range</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Accessibility</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            {/* Row 1 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Support Groups</td>
                                                <td className="px-4 py-3">Peer connection, shared experiences</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Free - $50/session</td>
                                                <td className="px-4 py-3">Widely available in-person and online</td>
                                            </tr>
                                            {/* Row 2 */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Therapy/Counseling</td>
                                                <td className="px-4 py-3">Individualized treatment plans</td>
                                                <td className="px-4 py-3 whitespace-nowrap">$50-$250/session</td>
                                                <td className="px-4 py-3">Varies by location, often waitlists</td>
                                            </tr>
                                            {/* Row 3 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Crisis Services</td>
                                                <td className="px-4 py-3">Immediate help in emergencies</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Free</td>
                                                <td className="px-4 py-3">24/7 availability nationwide</td>
                                            </tr>
                                            {/* Row 4 */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Community Clinics</td>
                                                <td className="px-4 py-3">Low-cost professional care</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Sliding scale $0-$50</td>
                                                <td className="px-4 py-3">Urban areas more accessible</td>
                                            </tr>
                                            {/* Row 5 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Online Therapy</td>
                                                <td className="px-4 py-3">Convenience, privacy</td>
                                                <td className="px-4 py-3 whitespace-nowrap">$60-$100/week</td>
                                                <td className="px-4 py-3">Requires internet access</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">1</span>
                                            Support Groups - Community Connection
                                        </h3>
                                        <p className="text-gray-700">
                                            Peer-led groups provide understanding and shared experiences. NAMI offers free support groups nationwide for individuals and family members. Specialized groups exist for depression, anxiety, PTSD, bipolar disorder, and more.
                                        </p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">2</span>
                                            Teletherapy - Access From Home
                                        </h3>
                                        <p className="text-gray-700">
                                            Platforms like BetterHelp and Talkspace connect users with licensed therapists via video, phone, or messaging. Many insurance plans now cover teletherapy, and some employers offer it as a benefit.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Crisis Support Resources */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <LifeBuoy className="w-8 h-8 text-blue-600 mr-2" />
                                    Immediate Crisis Support Resources
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    If you or someone you know is in crisis, these resources provide immediate help:
                                </p>

                                <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Emergency Contacts</h3>
                                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                                        <li>
                                            <strong>988 Suicide & Crisis Lifeline:</strong> Call or text 988 (24/7)
                                        </li>
                                        <li>
                                            <strong>Crisis Text Line:</strong> Text HOME to 741741 (24/7)
                                        </li>
                                        <li>
                                            <strong>Veterans Crisis Line:</strong> Dial 988 then press 1 or text 838255
                                        </li>
                                        <li>
                                            <strong>Disaster Distress Helpline:</strong> 1-800-985-5990
                                        </li>
                                    </ul>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">What to Expect When Calling</h3>
                                        <ol className="list-decimal list-inside text-gray-700 space-y-2">
                                            <li>You'll be connected to a trained counselor</li>
                                            <li>They'll listen without judgment</li>
                                            <li>You can remain anonymous</li>
                                            <li>They can help de-escalate the situation</li>
                                            <li>They may suggest next steps or resources</li>
                                        </ol>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Warning Signs of Crisis</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Talking about wanting to die or kill oneself</li>
                                            <li>Looking for ways to kill oneself</li>
                                            <li>Talking about feeling hopeless or having no reason to live</li>
                                            <li>Extreme mood swings</li>
                                            <li>Increased substance use</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Financial Assistance */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <CreditCard className="w-8 h-8 text-blue-600 mr-2" />
                                    Financial Assistance for Mental Health Care
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Cost shouldn't prevent anyone from getting help. These programs can make treatment more affordable:
                                </p>

                                <div className="space-y-6">
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Sliding Scale Clinics</h3>
                                        </div>
                                        <div className="p-4">
                                            <p className="text-gray-700 mb-2">
                                                Federally Qualified Health Centers (FQHCs) provide mental health services on a sliding fee scale based on income. Fees can be as low as $0-$30 per session.
                                            </p>
                                            <p className="text-gray-700">
                                                <a href="#" className="text-blue-600 hover:underline">Find an FQHC near you</a>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Insurance Coverage</h3>
                                        </div>
                                        <div className="p-4">
                                            <p className="text-gray-700 mb-2">
                                                The Mental Health Parity Act requires most insurance plans to cover mental health services similarly to physical health services. Check your plan for:
                                            </p>
                                            <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                                                <li>In-network providers</li>
                                                <li>Copay amounts</li>
                                                <li>Session limits</li>
                                                <li>Pre-authorization requirements</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Nonprofit Assistance Programs</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Open Path Collective</h4>
                                                <p className="text-gray-700">Connects people with affordable therapy ($30-$60/session)</p>
                                            </div>
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Loveland Foundation</h4>
                                                <p className="text-gray-700">Provides therapy funding for Black women and girls</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">Treatment Scholarship Programs</h4>
                                                <p className="text-gray-700">Many organizations offer scholarships for treatment programs</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Self-Care Strategies */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Self-Care Strategies Between Sessions</h2>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Daily Practices</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Mindfulness meditation (try apps like Headspace or Insight Timer)</li>
                                            <li>Regular physical activity, even short walks</li>
                                            <li>Maintaining a consistent sleep schedule</li>
                                            <li>Journaling thoughts and feelings</li>
                                            <li>Setting healthy boundaries</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Digital Tools</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Mood tracking apps (Daylio, Moodfit)</li>
                                            <li>CBT-based apps (Woebot, Sanvello)</li>
                                            <li>Online support communities (7 Cups, The Mighty)</li>
                                            <li>Guided relaxation videos (YouTube channels like The Honest Guys)</li>
                                            <li>Virtual support groups (through organizations like NAMI and DBSA)</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Pro Tip:</h3>
                                    <p className="text-gray-700">
                                        Create a "mental health first aid kit" with items that comfort you - favorite photos, soothing music playlist, stress ball, inspirational quotes, or a list of people to call when struggling.
                                    </p>
                                </div>
                            </section>

                            {/* Finding Local Resources */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <MapPin className="w-8 h-8 text-blue-600 mr-2" />
                                    Finding Local Mental Health Resources
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    These databases can help you find services in your area:
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                                            <Shield className="w-5 h-5 text-blue-600 mr-2" />
                                            SAMHSA Treatment Locator
                                        </h3>
                                        <p className="text-gray-700 mb-4">
                                            Substance Abuse and Mental Health Services Administration's comprehensive database of treatment facilities.
                                        </p>
                                        <a href="#" className="text-blue-600 hover:underline font-medium">Search SAMHSA database →</a>
                                    </div>
                                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                                            <Heart className="w-5 h-5 text-blue-600 mr-2" />
                                            NAMI Resource Finder
                                        </h3>
                                        <p className="text-gray-700 mb-4">
                                            National Alliance on Mental Illness's directory of local support groups, education programs, and resources.
                                        </p>
                                        <a href="#" className="text-blue-600 hover:underline font-medium">Find NAMI resources →</a>
                                    </div>
                                </div>

                                <p className="text-gray-700 mb-4">
                                    Other places to inquire about local services:
                                </p>
                                <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2">
                                    <li>Your primary care physician's office</li>
                                    <li>Local hospitals (many have outpatient mental health programs)</li>
                                    <li>University psychology departments (may offer low-cost clinics)</li>
                                    <li>Community centers and places of worship</li>
                                    <li>211 helpline (dial 211 or visit 211.org)</li>
                                </ul>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Seeking help for mental health challenges is a sign of strength, not weakness. While the system isn't perfect and barriers exist, more resources are available today than ever before. Remember that recovery isn't linear - it's okay to need different types of support at different times.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    If you're supporting someone with mental health challenges, educate yourself about their condition, listen without judgment, and encourage professional help when needed. Take care of your own mental health too - you can't pour from an empty cup.
                                </p>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "Healing takes time, and asking for help is a courageous step. There is no health without mental health - your struggles are valid, and support is available."
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
                                            Dr. Emily Parker, LCSW
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

                        {/* Emergency Help Card */}
                        <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                                <LifeBuoy className="w-5 h-5 text-red-600 mr-2" />
                                Need Immediate Help?
                            </h3>
                            <p className="text-gray-700 mb-4">
                                If you're in crisis or having thoughts of suicide:
                            </p>
                            <div className="space-y-2">
                                <a href="#" className="block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg text-center transition-colors duration-200">
                                    Call 988 Suicide & Crisis Lifeline
                                </a>
                                <a href="#" className="block bg-white hover:bg-gray-50 text-red-600 font-bold py-3 px-4 rounded-lg border border-red-300 text-center transition-colors duration-200">
                                    Text HOME to 741741
                                </a>
                            </div>
                        </div>

                        {/* Newsletter Signup */}
                        <div className="bg-blue-50 rounded-lg p-6 mb-8">
                            <div className="mb-4">
                                <h3 className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-2">MENTAL HEALTH NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get support resources and tips</h4>
                                <p className="text-gray-700 text-sm">
                                    Weekly mental health strategies, local resource updates, and self-care ideas delivered to your inbox.
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

                        {/* Popular Support Groups */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Popular Support Groups</h3>
                            <div className="space-y-4">
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                                            <Users className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">NAMI Connection Recovery</h4>
                                            <p className="text-sm text-gray-600">Free peer-led groups nationwide</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                                            <Users className="w-5 h-5 text-purple-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">DBSA Depression/Bipolar</h4>
                                            <p className="text-sm text-gray-600">In-person and online options</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                                            <Users className="w-5 h-5 text-green-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Anxiety and Depression Association</h4>
                                            <p className="text-sm text-gray-600">Specialized anxiety support</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Quick Resource Links */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Resource Links</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-center">
                                        <Info className="w-4 h-4 mr-2" />
                                        Mental Health America Screening Tools
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-center">
                                        <BookOpen className="w-4 h-4 mr-2" />
                                        Free Mental Health Workbooks
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-center">
                                        <Phone className="w-4 h-4 mr-2" />
                                        Therapist Directories
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-center">
                                        <Heart className="w-4 h-4 mr-2" />
                                        LGBTQ+ Mental Health Resources
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-center">
                                        <Shield className="w-4 h-4 mr-2" />
                                        Trauma Recovery Resources
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