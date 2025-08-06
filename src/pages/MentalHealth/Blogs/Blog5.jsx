"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, Shield, Smartphone, HeartPulse, Lock, Star, MessageSquare, MonitorSmartphone, Brain, Zap } from "lucide-react"

export default function DigitalMentalHealthGuide() {
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

    const tabs = ["Overview", "Apps", "Therapy", "Communities", "Safety"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Digital Mental Health Tools: The Complete Guide to Online Wellness Support
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
                                In our digital age, mental health support has transformed with innovative online tools. This comprehensive guide explores teletherapy options, mental health apps, online communities, and digital wellness resources to help you navigate the expanding world of digital mental health care.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                                    alt="Woman using mental health app on smartphone"
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
                                    <li>Teletherapy is as effective as in-person therapy for most common mental health conditions</li>
                                    <li>Mental health apps can increase treatment adherence by 40-60%</li>
                                    <li>Online peer support communities reduce feelings of isolation by 72%</li>
                                    <li>Digital phenotyping may predict mental health episodes before they occur</li>
                                    <li>Privacy protections vary significantly between platforms</li>
                                </ul>
                            </div>

                            {/* Why Digital Mental Health Matters */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Shield className="w-8 h-8 text-blue-600 mr-2" />
                                    The Digital Mental Health Revolution
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    The global digital mental health market is projected to reach $26 billion by 2027, reflecting growing acceptance and demand. A 2023 <a href="#" className="text-blue-600 hover:underline">WHO report</a> found that digital mental health tools can:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>Increase access to care by 300% in underserved areas</li>
                                    <li>Reduce treatment costs by 40-60% compared to traditional therapy</li>
                                    <li>Provide immediate support during crises through AI chatbots</li>
                                    <li>Offer anonymity that encourages help-seeking among stigmatized groups</li>
                                </ul>

                                <div className="bg-purple-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Digital Therapeutic Impact</h3>
                                    <p className="text-gray-700">
                                        FDA-approved digital therapeutics (like reSET for substance abuse) demonstrate clinical outcomes comparable to medication for specific conditions, with the advantage of being accessible anytime, anywhere.
                                    </p>
                                </div>
                            </section>

                            {/* Types of Digital Mental Health Tools */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Smartphone className="w-8 h-8 text-blue-600 mr-2" />
                                    Types of Digital Mental Health Tools
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Digital mental health encompasses various technologies with different strengths and appropriate use cases:
                                </p>

                                {/* Tools Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tool Type</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Best For</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Effectiveness</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cost Range</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Teletherapy Platforms</td>
                                                <td className="px-4 py-3">Diagnosed conditions, trauma, complex issues</td>
                                                <td className="px-4 py-3">★★★★★</td>
                                                <td className="px-4 py-3">$60-$200/session</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Mental Health Apps</td>
                                                <td className="px-4 py-3">Mild-moderate symptoms, maintenance, tracking</td>
                                                <td className="px-4 py-3">★★★☆☆</td>
                                                <td className="px-4 py-3">Free-$20/month</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Online Support Groups</td>
                                                <td className="px-4 py-3">Peer support, shared experiences</td>
                                                <td className="px-4 py-3">★★★☆☆</td>
                                                <td className="px-4 py-3">Free-$50/month</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">AI Chatbots</td>
                                                <td className="px-4 py-3">Immediate support, crisis intervention</td>
                                                <td className="px-4 py-3">★★☆☆☆</td>
                                                <td className="px-4 py-3">Free</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Wearable Tech</td>
                                                <td className="px-4 py-3">Early detection, physiological monitoring</td>
                                                <td className="px-4 py-3">★★★☆☆</td>
                                                <td className="px-4 py-3">$100-$300 device</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">1</span>
                                            Teletherapy - The Gold Standard
                                        </h3>
                                        <p className="text-gray-700">
                                            Platforms like BetterHelp and Talkspace connect users with licensed therapists via video, phone, or messaging. Research shows 75% effectiveness rate for depression and anxiety, comparable to in-person therapy.
                                        </p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">2</span>
                                            CBT Apps - Portable Therapy
                                        </h3>
                                        <p className="text-gray-700">
                                            Cognitive Behavioral Therapy apps like Woebot and Sanvello teach evidence-based techniques. Studies show regular use can reduce anxiety symptoms by 30-40% in 8-12 weeks.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Evaluating Mental Health Apps */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Check className="w-8 h-8 text-blue-600 mr-2" />
                                    Evaluating Mental Health Apps
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    With over 20,000 mental health apps available, choosing quality tools requires careful evaluation. Look for these evidence-based indicators:
                                </p>

                                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                                    <div className="grid grid-cols-3 gap-4 text-center font-medium mb-2">
                                        <div>Evaluation Criteria</div>
                                        <div>Good Indicator</div>
                                        <div>Red Flag</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 text-center mb-1">
                                        <div className="font-medium text-left">Evidence Base</div>
                                        <div>Published clinical trials</div>
                                        <div>"Based on science" without citations</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 text-center mb-1 bg-blue-50 p-1 rounded">
                                        <div className="font-medium text-left">Privacy Policy</div>
                                        <div>HIPAA compliant</div>
                                        <div>Vague or shares data with advertisers</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 text-center mb-1">
                                        <div className="font-medium text-left">Credentialing</div>
                                        <div>Licensed professionals involved</div>
                                        <div>No professional oversight</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 text-center">
                                        <div className="font-medium text-left">Transparency</div>
                                        <div>Clear about limitations</div>
                                        <div>Promises "cures" or quick fixes</div>
                                    </div>
                                </div>

                                <p className="text-gray-700 mb-6">
                                    Trusted app evaluation resources include:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li><a href="#" className="text-blue-600 hover:underline">APA's App Evaluation Model</a></li>
                                    <li><a href="#" className="text-blue-600 hover:underline">ORCHA's Health App Library</a></li>
                                    <li><a href="#" className="text-blue-600 hover:underline">One Mind PsyberGuide</a></li>
                                </ul>
                            </section>

                            {/* Privacy and Security */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Lock className="w-8 h-8 text-blue-600 mr-2" />
                                    Privacy and Security Considerations
                                </h2>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Data Protection</h3>
                                        <p className="text-gray-700 mb-2">
                                            Mental health data is particularly sensitive. Ensure platforms use:
                                        </p>
                                        <ol className="list-decimal list-inside text-gray-700 space-y-1">
                                            <li>End-to-end encryption</li>
                                            <li>HIPAA or GDPR compliance</li>
                                            <li>Clear data retention policies</li>
                                            <li>Minimum necessary data collection</li>
                                        </ol>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Warning Signs</h3>
                                        <p className="text-gray-700 mb-2">
                                            Avoid services that:
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>Don't have a privacy policy</li>
                                            <li>Sell or share data with third parties</li>
                                            <li>Store session notes unencrypted</li>
                                            <li>Require unnecessary permissions</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Pro Tip:</h3>
                                    <p className="text-gray-700">
                                        Use a dedicated email address for mental health services and consider using a VPN for additional privacy during teletherapy sessions.
                                    </p>
                                </div>
                            </section>

                            {/* Integration Strategies */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Integrating Digital Tools with Traditional Care</h2>

                                <div className="space-y-6">
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Blended Care Model</h3>
                                        </div>
                                        <div className="p-4">
                                            <p className="text-gray-700 mb-3">
                                                The most effective approach combines digital tools with professional care:
                                            </p>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div>
                                                    <h4 className="font-medium text-gray-900">Digital Components</h4>
                                                    <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                                                        <li>Symptom tracking between sessions</li>
                                                        <li>Skill-building exercises</li>
                                                        <li>Emergency coping tools</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4 className="font-medium text-gray-900">Therapist Components</h4>
                                                    <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                                                        <li>Diagnosis and treatment planning</li>
                                                        <li>Processing deep emotional work</li>
                                                        <li>Medication management</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Implementation Timeline</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Week 1-2: Assessment Phase</h4>
                                                <p className="text-gray-700">Track moods/symptoms with app, establish baseline</p>
                                            </div>
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Week 3-4: Skill Building</h4>
                                                <p className="text-gray-700">Incorporate CBT exercises, begin teletherapy</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">Week 5+: Maintenance</h4>
                                                <p className="text-gray-700">Use tools preventatively, join support community</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Emerging Technologies */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Zap className="w-8 h-8 text-blue-600 mr-2" />
                                    Emerging Technologies in Digital Mental Health
                                </h2>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="border border-gray-200 rounded-lg p-4">
                                        <h3 className="font-bold text-gray-900 mb-2">VR Exposure Therapy</h3>
                                        <p className="text-gray-700 mb-2">
                                            Virtual reality is revolutionizing treatment for PTSD and phobias, with success rates of 66-90% for specific fears.
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            Example: Oxford VR for social anxiety
                                        </p>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg p-4">
                                        <h3 className="font-bold text-gray-900 mb-2">Digital Phenotyping</h3>
                                        <p className="text-gray-700 mb-2">
                                            Analyzing smartphone usage patterns (typing speed, social media use) can predict depressive episodes with 87% accuracy.
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            Example: Mindstrong Health
                                        </p>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg p-4">
                                        <h3 className="font-bold text-gray-900 mb-2">AI Therapy Assistants</h3>
                                        <p className="text-gray-700 mb-2">
                                            Natural language processing provides real-time therapy feedback, improving consistency in care delivery.
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            Example: Lyssn.io for quality assurance
                                        </p>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg p-4">
                                        <h3 className="font-bold text-gray-900 mb-2">Gamified Interventions</h3>
                                        <p className="text-gray-700 mb-2">
                                            Game-based CBT increases engagement in younger populations by 40% compared to traditional formats.
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            Example: SPARX for adolescent depression
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Digital mental health tools have democratized access to support while maintaining clinical effectiveness for many conditions. The key is thoughtful integration—using technology to enhance, not replace, human connection and professional care when needed.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    As the field evolves, we can expect more personalized, predictive, and preventative solutions. However, the foundation remains combining technological convenience with evidence-based practices and ethical standards.
                                </p>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "Digital tools work best when they're part of a holistic approach—technology can open doors to care, but human understanding walks you through them."
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
                                            Dr. Emily Chen, PsyD
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600 mb-1">
                                        — Written by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            David Park
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
                                <h3 className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-2">MENTAL HEALTH NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get digital wellness tips</h4>
                                <p className="text-gray-700 text-sm">
                                    Weekly app reviews, teletherapy guides, and mental health tech updates.
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

                        {/* Top Rated Apps */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Top Rated Mental Health Apps</h3>
                            <div className="space-y-4">
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/woebot.jpg" alt="Woebot app" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Woebot</h4>
                                            <p className="text-sm text-gray-600">CBT-based AI chatbot ★★★★☆ (4.5/5)</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/headspace.jpg" alt="Headspace app" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Headspace</h4>
                                            <p className="text-sm text-gray-600">Meditation & mindfulness ★★★★☆ (4.7/5)</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/sanvello.jpg" alt="Sanvello app" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Sanvello</h4>
                                            <p className="text-sm text-gray-600">Anxiety & depression ★★★★☆ (4.3/5)</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Crisis Resources */}
                        <div className="bg-red-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Immediate Help Resources</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-red-600 hover:underline font-medium">National Suicide Prevention Lifeline</a>
                                    <p className="text-sm text-gray-600">Call 988 (US)</p>
                                </li>
                                <li>
                                    <a href="#" className="text-red-600 hover:underline font-medium">Crisis Text Line</a>
                                    <p className="text-sm text-gray-600">Text HOME to 741741 (US)</p>
                                </li>
                                <li>
                                    <a href="#" className="text-red-600 hover:underline font-medium">IMAlive</a>
                                    <p className="text-sm text-gray-600">Online crisis chat</p>
                                </li>
                                <li>
                                    <a href="#" className="text-red-600 hover:underline font-medium">Find a Helpline</a>
                                    <p className="text-sm text-gray-600">International resources</p>
                                </li>
                            </ul>
                        </div>

                        {/* Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Further Reading</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Choosing a Teletherapy Provider</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">App Privacy Comparison Tool</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Insurance Coverage for Digital Health</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Digital Detox Strategies</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}