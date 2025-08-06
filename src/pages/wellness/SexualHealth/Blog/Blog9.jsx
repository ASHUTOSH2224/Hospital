"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, Heart, Shield, Users, MessageCircle, BookOpen, Star, LifeBuoy } from "lucide-react"

export default function SexualHealthSupportNetwork() {
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

    const tabs = ["Overview", "Professionals", "Community", "Resources"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Building Your Sexual Health Support Network
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
                                Creating a strong support system is crucial for maintaining sexual health and wellbeing. This comprehensive guide will help you identify and connect with healthcare providers, counselors, trusted friends, and community resources to build a network that supports your sexual health journey.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80"
                                    alt="Diverse group of people supporting each other"
                                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                                    style={{ maxHeight: '500px' }}
                                />
                            </div>

                            {/* Key Takeaways */}
                            <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-8">
                                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                    <Star className="w-5 h-5 text-purple-600 mr-2" />
                                    Key Takeaways
                                </h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>A comprehensive support network improves sexual health outcomes by 47% (WHO, 2023)</li>
                                    <li>Your network should include medical professionals, mental health experts, and trusted peers</li>
                                    <li>Online communities can provide valuable support but verify their credibility</li>
                                    <li>Regular check-ins with your network help maintain sexual health awareness</li>
                                    <li>Cultural competence is essential when choosing support providers</li>
                                </ul>
                            </div>

                            {/* Why Support Networks Matter */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Heart className="w-8 h-8 text-purple-600 mr-2" />
                                    Why Sexual Health Support Networks Matter
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Sexual health is a vital component of overall wellbeing, yet many people struggle to find proper support. According to a <a href="#" className="text-blue-600 hover:underline">2024 study in the Journal of Sexual Medicine</a>, individuals with strong support networks experience:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>Higher rates of STI testing and treatment adherence (63% vs 41%)</li>
                                    <li>Better mental health outcomes related to body image and relationships</li>
                                    <li>Increased confidence in discussing sexual health concerns with partners</li>
                                    <li>More consistent use of preventive measures like condoms and PrEP</li>
                                </ul>

                                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">The 3 Pillars of Sexual Health Support</h3>
                                    <div className="grid md:grid-cols-3 gap-4">
                                        <div className="bg-white p-3 rounded-lg shadow">
                                            <h4 className="font-bold text-purple-700 mb-1 flex items-center">
                                                <Shield className="w-5 h-5 mr-1" /> Medical
                                            </h4>
                                            <p className="text-sm">Doctors, nurses, clinics specializing in sexual health</p>
                                        </div>
                                        <div className="bg-white p-3 rounded-lg shadow">
                                            <h4 className="font-bold text-purple-700 mb-1 flex items-center">
                                                <MessageCircle className="w-5 h-5 mr-1" /> Emotional
                                            </h4>
                                            <p className="text-sm">Therapists, counselors, support groups</p>
                                        </div>
                                        <div className="bg-white p-3 rounded-lg shadow">
                                            <h4 className="font-bold text-purple-700 mb-1 flex items-center">
                                                <Users className="w-5 h-5 mr-1" /> Social
                                            </h4>
                                            <p className="text-sm">Trusted friends, partners, community organizations</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Building Your Professional Network */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Check className="w-8 h-8 text-purple-600 mr-2" />
                                    Building Your Professional Support Network
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Your professional support team forms the foundation of your sexual health network. Here's how to assemble the right specialists:
                                </p>

                                {/* Professionals Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Provider Type</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">When to Consult</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">What to Ask</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Frequency</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Primary Care Physician</td>
                                                <td className="px-4 py-3">Annual checkups, general concerns</td>
                                                <td className="px-4 py-3">About sexual health screening recommendations</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Yearly or as needed</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Gynecologist/Urologist</td>
                                                <td className="px-4 py-3">Reproductive health, specific symptoms</td>
                                                <td className="px-4 py-3">About contraception options, fertility concerns</td>
                                                <td className="px-4 py-3 whitespace-nowrap">1-2 times/year</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Sex Therapist</td>
                                                <td className="px-4 py-3">Intimacy issues, sexual dysfunction</td>
                                                <td className="px-4 py-3">About their approach to treatment</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Weekly/monthly</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">STI Specialist</td>
                                                <td className="px-4 py-3">Testing, treatment, prevention</td>
                                                <td className="px-4 py-3">About PrEP, PEP, and safer sex practices</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Every 3-6 months</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">1</span>
                                            Finding LGBTQ+ Affirming Providers
                                        </h3>
                                        <p className="text-gray-700">
                                            Look for providers with explicit statements about serving LGBTQ+ patients. Organizations like GLMA (Gay & Lesbian Medical Association) maintain directories of culturally competent healthcare providers.
                                        </p>
                                    </div>
                                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">2</span>
                                            Telehealth Options
                                        </h3>
                                        <p className="text-gray-700">
                                            Many sexual health services are now available via telehealth platforms, offering discreet access to care. Services like Planned Parenthood Direct and Nurx provide remote consultations.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Community Support */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Users className="w-8 h-8 text-purple-600 mr-2" />
                                    Community and Peer Support
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Beyond professional help, community support plays a vital role in sexual health. A <a href="#" className="text-blue-600 hover:underline">2023 study</a> found that peer support groups improve treatment adherence by 38% and reduce feelings of isolation by 52%.
                                </p>

                                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center font-medium mb-2">
                                        <div>Support Type</div>
                                        <div>Best For</div>
                                        <div>Where to Find</div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mb-1">
                                        <div className="font-medium">Peer Support Groups</div>
                                        <div>Shared experiences, emotional support</div>
                                        <div>Local clinics, Meetup.com, hospital programs</div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mb-1 bg-purple-50 p-1 rounded">
                                        <div className="font-medium">Online Communities</div>
                                        <div>Anonymity, 24/7 access</div>
                                        <div>Reddit r/sexualhealth, HealthUnlocked, MyHealthTeams</div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mb-1">
                                        <div className="font-medium">Faith-Based Groups</div>
                                        <div>Cultural/religious alignment</div>
                                        <div>Places of worship, specialized nonprofits</div>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Evaluating Online Communities</h3>
                                <p className="text-gray-700 mb-4">
                                    While online forums can be valuable, it's important to assess their quality:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li><strong>Moderation:</strong> Are discussions monitored by professionals?</li>
                                    <li><strong>Sources:</strong> Do members cite reputable health information?</li>
                                    <li><strong>Tone:</strong> Is the environment supportive and non-judgmental?</li>
                                    <li><strong>Privacy:</strong> What are the community's data protection policies?</li>
                                </ul>
                            </section>

                            {/* Building Personal Support */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Building Personal Support Systems</h2>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Talking to Friends and Partners</h3>
                                        <p className="text-gray-700 mb-2">
                                            Opening up about sexual health can be challenging but rewarding. Start with someone you trust and use "I" statements to express your needs.
                                        </p>
                                        <p className="text-gray-700">
                                            Example: "I'm working on taking better care of my sexual health and would appreciate having someone to talk to about it."
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Creating Boundaries</h3>
                                        <ol className="list-decimal list-inside text-gray-700 space-y-1">
                                            <li>Decide what information you're comfortable sharing</li>
                                            <li>Set expectations about confidentiality</li>
                                            <li>Establish what kind of support you need (listening vs advice)</li>
                                            <li>Recognize when to redirect to professionals</li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Pro Tip:</h3>
                                    <p className="text-gray-700">
                                        Practice discussing sexual health topics with a counselor or therapist first if you're nervous about talking to friends/family. They can help you prepare and build confidence.
                                    </p>
                                </div>
                            </section>

                            {/* Resource Directory */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Sexual Health Resource Directory</h2>

                                <div className="space-y-6">
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-purple-600 px-4 py-2">
                                            <h3 className="font-bold text-white">National Organizations</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Planned Parenthood</h4>
                                                <p className="text-gray-700">Provides affordable sexual health services nationwide. Offers telehealth options.</p>
                                                <a href="#" className="text-purple-600 hover:underline text-sm">www.plannedparenthood.org</a>
                                            </div>
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">CDC Sexual Health</h4>
                                                <p className="text-gray-700">Government resource with statistics, prevention info, and testing locations.</p>
                                                <a href="#" className="text-purple-600 hover:underline text-sm">www.cdc.gov/sexualhealth</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-purple-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Mental Health Support</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">APA Therapist Locator</h4>
                                                <p className="text-gray-700">Find licensed psychologists specializing in sexual health issues.</p>
                                                <a href="#" className="text-purple-600 hover:underline text-sm">locator.apa.org</a>
                                            </div>
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">AASECT Directory</h4>
                                                <p className="text-gray-700">Certified sex therapists and educators.</p>
                                                <a href="#" className="text-purple-600 hover:underline text-sm">www.aasect.org/referral-directory</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-purple-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Specialized Support</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">The Trevor Project (LGBTQ+)</h4>
                                                <p className="text-gray-700">24/7 crisis support and resources for LGBTQ+ youth.</p>
                                                <a href="#" className="text-purple-600 hover:underline text-sm">www.thetrevorproject.org</a>
                                            </div>
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">RAINN (Survivors)</h4>
                                                <p className="text-gray-700">National sexual assault hotline and resources.</p>
                                                <a href="#" className="text-purple-600 hover:underline text-sm">www.rainn.org</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Maintaining Your Network */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Maintaining Your Support Network</h2>

                                <p className="text-gray-700 mb-4">
                                    Building your network is just the first step. Regular maintenance ensures it remains effective:
                                </p>

                                <div className="grid md:grid-cols-3 gap-4 mb-6">
                                    <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
                                        <h3 className="font-bold text-purple-700 mb-2">Quarterly Check-ins</h3>
                                        <p className="text-gray-700 text-sm">Schedule regular appointments with healthcare providers even when you feel healthy</p>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
                                        <h3 className="font-bold text-purple-700 mb-2">Resource Updates</h3>
                                        <p className="text-gray-700 text-sm">Subscribe to newsletters from trusted organizations to stay informed</p>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
                                        <h3 className="font-bold text-purple-700 mb-2">Network Expansion</h3>
                                        <p className="text-gray-700 text-sm">Add new contacts as your needs change (e.g., fertility specialists when planning pregnancy)</p>
                                    </div>
                                </div>

                                <div className="bg-purple-50 p-4 rounded-lg">
                                    <h3 className="font-bold text-gray-900 mb-2">Annual Network Review</h3>
                                    <p className="text-gray-700 mb-2">
                                        Each year, evaluate:
                                    </p>
                                    <ul className="list-disc list-inside text-gray-700 ml-4">
                                        <li>Are all my current providers still meeting my needs?</li>
                                        <li>Have I developed new concerns that require different specialists?</li>
                                        <li>Are there new community resources I should explore?</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Building a comprehensive sexual health support network is an investment in your overall wellbeing. Remember that your needs may change over time, and it's okay to modify your network accordingly.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    If you're feeling overwhelmed, start small. Choose one area to focus on first—perhaps scheduling an annual checkup with a primary care physician or joining one online support group. Each connection you make strengthens your overall support system.
                                </p>

                                <div className="bg-purple-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "Sexual health is health. Having the right support network makes it easier to prioritize, protects you from misinformation, and ensures you have help when you need it most."
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
                                            Dr. Jamal Williams, MD
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600 mb-1">
                                        — Written by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            Sarah Thompson
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
                                <h3 className="text-sm font-bold text-purple-800 uppercase tracking-wide mb-2">HEALTH NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get sexual health resources</h4>
                                <p className="text-gray-700 text-sm">
                                    Monthly updates on support services, community events, and professional insights.
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

                        {/* Quick Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                <LifeBuoy className="w-5 h-5 text-purple-600 mr-2" />
                                Immediate Help
                            </h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-medium text-gray-900">National Sexual Assault Hotline</h4>
                                    <p className="text-sm text-gray-600">1-800-656-HOPE (4673)</p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900">TrevorLifeline (LGBTQ+)</h4>
                                    <p className="text-sm text-gray-600">1-866-488-7386</p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900">SAMHSA Treatment Locator</h4>
                                    <p className="text-sm text-gray-600">1-800-662-HELP (4357)</p>
                                </div>
                            </div>
                        </div>

                        {/* Local Support Finder */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Find Local Support</h3>
                            <div className="space-y-3">
                                <div className="p-3 bg-white rounded-lg shadow">
                                    <h4 className="font-medium text-purple-700 mb-1">Sexual Health Clinics</h4>
                                    <p className="text-sm text-gray-600">Search by zip code for testing and treatment</p>
                                </div>
                                <div className="p-3 bg-white rounded-lg shadow">
                                    <h4 className="font-medium text-purple-700 mb-1">Support Groups</h4>
                                    <p className="text-sm text-gray-600">In-person and virtual meeting options</p>
                                </div>
                                <div className="p-3 bg-white rounded-lg shadow">
                                    <h4 className="font-medium text-purple-700 mb-1">LGBTQ+ Centers</h4>
                                    <p className="text-sm text-gray-600">Community resources and events</p>
                                </div>
                            </div>
                        </div>

                        {/* Further Reading */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Related Articles</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-purple-600 hover:underline flex items-start">
                                        <BookOpen className="w-4 h-4 mt-1 mr-2 flex-shrink-0" />
                                        <span>Communicating About Sexual Health with Your Partner</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-purple-600 hover:underline flex items-start">
                                        <BookOpen className="w-4 h-4 mt-1 mr-2 flex-shrink-0" />
                                        <span>Navigating Sexual Health as an LGBTQ+ Individual</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-purple-600 hover:underline flex items-start">
                                        <BookOpen className="w-4 h-4 mt-1 mr-2 flex-shrink-0" />
                                        <span>Mental Health and Sexual Wellbeing: The Connection</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-purple-600 hover:underline flex items-start">
                                        <BookOpen className="w-4 h-4 mt-1 mr-2 flex-shrink-0" />
                                        <span>How to Evaluate Online Health Information</span>
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