"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, Heart, MessageCircle, Shield, BookOpen, Star } from "lucide-react"

export default function ManagingSexualHealth() {
    const [email, setEmail] = useState("")
    const [activeTab, setActiveTab] = useState("Communication")

    const handleEmailSubmit = (e) => {
        e.preventDefault()
        console.log("Email submitted:", email)
        setEmail("")
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const tabs = ["Communication", "Testing", "Boundaries", "Resources"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Managing Sexual Health in Modern Relationships
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
                                Sexual health is a vital component of overall wellbeing in relationships. This comprehensive guide covers communication techniques, boundary setting, testing schedules, and healthcare coordination to help you maintain a healthy, fulfilling intimate life while protecting yourself and your partner(s).
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80"
                                    alt="Couple having a serious conversation"
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
                                    <li>Regular STI testing should be part of routine healthcare for sexually active individuals</li>
                                    <li>Consent and communication are ongoing processes, not one-time conversations</li>
                                    <li>Digital tools can help track testing dates and sexual health information</li>
                                    <li>Boundaries may evolve over time and should be regularly revisited</li>
                                    <li>Healthcare providers can be valuable resources for relationship health</li>
                                </ul>
                            </div>

                            {/* Why Sexual Health Matters */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Heart className="w-8 h-8 text-purple-600 mr-2" />
                                    Why Sexual Health Matters in Relationships
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Sexual health encompasses physical, emotional, mental, and social wellbeing in relation to sexuality. According to the <a href="#" className="text-blue-600 hover:underline">World Health Organization</a>, positive sexual health requires:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>A positive and respectful approach to sexuality and sexual relationships</li>
                                    <li>The possibility of having pleasurable and safe sexual experiences</li>
                                    <li>Freedom from coercion, discrimination, and violence</li>
                                    <li>Access to sexual health care and education</li>
                                </ul>

                                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Did You Know?</h3>
                                    <p className="text-gray-700">
                                        A 2023 study in the Journal of Sexual Medicine found that couples who discuss sexual health openly report 42% higher relationship satisfaction and are 3 times more likely to get regular STI testing when recommended.
                                    </p>
                                </div>
                            </section>

                            {/* Communication Techniques */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <MessageCircle className="w-8 h-8 text-purple-600 mr-2" />
                                    Communication Techniques for Sexual Health
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Discussing sexual health can feel awkward, but these strategies can help facilitate productive conversations:
                                </p>

                                {/* Communication Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Situation</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Approach</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Example Phrase</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Starting the conversation</td>
                                                <td className="px-4 py-3">Choose a comfortable setting, use "I" statements</td>
                                                <td className="px-4 py-3">"I've been thinking about how we can keep our sexual health protected, can we talk about this?"</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Discussing testing</td>
                                                <td className="px-4 py-3">Normalize it as routine healthcare</td>
                                                <td className="px-4 py-3">"I get tested every 6 months as part of my regular health checkups. What's your approach to testing?"</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Addressing concerns</td>
                                                <td className="px-4 py-3">Be specific but non-accusatory</td>
                                                <td className="px-4 py-3">"I noticed we haven't talked about protection lately. Can we revisit this topic?"</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Changing boundaries</td>
                                                <td className="px-4 py-3">Frame as personal needs, not criticism</td>
                                                <td className="px-4 py-3">"I've been thinking and I'd feel more comfortable if we..."</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">1</span>
                                            Timing Matters
                                        </h3>
                                        <p className="text-gray-700">
                                            Avoid initiating these conversations right before or after sex. Choose a neutral time when you're both relaxed and undistracted. Research shows mid-morning or early evening conversations tend to be most productive.
                                        </p>
                                    </div>
                                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">2</span>
                                            Use Technology
                                        </h3>
                                        <p className="text-gray-700">
                                            If face-to-face feels too intense, try starting the conversation via text or email. Some couples find it easier to share thoughts in writing first, then discuss in person. Apps like Coral and Qpid can facilitate these discussions.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* STI Testing Guide */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Shield className="w-8 h-8 text-purple-600 mr-2" />
                                    Comprehensive STI Testing Guide
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Regular STI testing is crucial for sexually active individuals. Below are recommended testing schedules based on relationship status and sexual behaviors:
                                </p>

                                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                                    <div className="grid grid-cols-4 gap-4 text-center font-medium mb-2">
                                        <div className="text-left">Situation</div>
                                        <div>Recommended Tests</div>
                                        <div>Frequency</div>
                                        <div>Notes</div>
                                    </div>
                                    <div className="grid grid-cols-4 gap-4 text-center mb-1 text-sm">
                                        <div className="text-left font-medium">Single, casually dating</div>
                                        <div>Full panel</div>
                                        <div>Every 3-6 months</div>
                                        <div className="text-left">Include HIV, syphilis, gonorrhea, chlamydia, hepatitis</div>
                                    </div>
                                    <div className="grid grid-cols-4 gap-4 text-center mb-1 text-sm bg-purple-50 p-1 rounded">
                                        <div className="text-left font-medium">New exclusive relationship</div>
                                        <div>Full panel + confirmatory</div>
                                        <div>At start, then 3 months</div>
                                        <div className="text-left">Both partners should test before stopping barriers</div>
                                    </div>
                                    <div className="grid grid-cols-4 gap-4 text-center mb-1 text-sm">
                                        <div className="text-left font-medium">Long-term monogamous</div>
                                        <div>Basic panel</div>
                                        <div>Annual</div>
                                        <div className="text-left">Unless symptoms or concerns arise</div>
                                    </div>
                                    <div className="grid grid-cols-4 gap-4 text-center text-sm">
                                        <div className="text-left font-medium">Non-monogamous</div>
                                        <div>Full panel + extras</div>
                                        <div>Every 3 months</div>
                                        <div className="text-left">Consider throat/rectal swabs based on practices</div>
                                    </div>
                                </div>

                                <p className="text-gray-700 mb-6">
                                    *Full panel typically includes: HIV, syphilis, hepatitis B & C, gonorrhea, chlamydia, trichomoniasis. Herpes testing is only recommended when symptoms are present.
                                </p>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Testing Pro Tips:</h3>
                                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                                        <li>Many clinics offer free or low-cost testing - search at gettested.cdc.gov</li>
                                        <li>At-home test kits are available for some STIs with lab certification</li>
                                        <li>Ask about extragenital testing (throat, rectal) if relevant to your practices</li>
                                        <li>Get vaccinated for HPV and hepatitis A/B if not already</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Boundary Setting */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Boundary Setting in Sexual Relationships</h2>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Types of Boundaries to Discuss</h3>
                                        <ol className="list-decimal list-inside text-gray-700 space-y-2">
                                            <li><strong>Physical:</strong> What sexual activities you're comfortable with</li>
                                            <li><strong>Emotional:</strong> How you handle attachment and expectations</li>
                                            <li><strong>Safety:</strong> Protection methods and testing expectations</li>
                                            <li><strong>Digital:</strong> Sexting, photo sharing, and online behavior</li>
                                            <li><strong>Social:</strong> How open you are about the relationship publicly</li>
                                        </ol>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Boundary Setting Framework</h3>
                                        <p className="text-gray-700 mb-2">
                                            Use the FRIES model for effective boundary communication:
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li><strong>Freely given</strong> - Without pressure or coercion</li>
                                            <li><strong>Reversible</strong> - Can change your mind anytime</li>
                                            <li><strong>Informed</strong> - With full understanding of what's involved</li>
                                            <li><strong>Enthusiastic</strong> - A clear "yes" not just absence of "no"</li>
                                            <li><strong>Specific</strong> - Clear about exactly what you're consenting to</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="p-4 border border-gray-200 rounded-lg mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Example Boundary Conversation</h3>
                                    <div className="bg-gray-50 p-3 rounded">
                                        <p className="text-gray-700 italic mb-1">"I want us both to feel comfortable and safe in our sexual relationship. For me, that means we both get tested before stopping condom use, and we agree to tell each other if either of us has sex with someone else, even if it's protected. How does that align with your needs?"</p>
                                    </div>
                                </div>
                            </section>

                            {/* Healthcare Coordination */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Healthcare Coordination for Couples</h2>

                                <p className="text-gray-700 mb-4">
                                    Managing healthcare as a couple can improve sexual health outcomes. Consider these strategies:
                                </p>

                                <div className="space-y-6">
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-purple-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Shared Healthcare Strategies</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Scheduling</h4>
                                                <p className="text-gray-700">Coordinate testing dates to make it a shared health priority</p>
                                            </div>
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Documentation</h4>
                                                <p className="text-gray-700">Keep test results in a shared secure digital folder (with personal identifiers removed)</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">Preventive Care</h4>
                                                <p className="text-gray-700">Get vaccinated together (HPV, hepatitis, etc.)</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-purple-600 px-4 py-2">
                                            <h3 className="font-bold text-white">When to Seek Professional Help</h3>
                                        </div>
                                        <div className="p-4">
                                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                                <li>Recurring STIs or sexual health concerns</li>
                                                <li>Difficulty communicating about sexual needs</li>
                                                <li>Mismatched libidos causing distress</li>
                                                <li>Pain during sex that persists</li>
                                                <li>Trust violations around sexual agreements</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Digital Tools */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Digital Tools for Sexual Health Management</h2>

                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tool</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purpose</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Platform</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cost</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Qpid</td>
                                                <td className="px-4 py-3">Sexual health conversation guide</td>
                                                <td className="px-4 py-3">iOS/Android</td>
                                                <td className="px-4 py-3">Free</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Healthvana</td>
                                                <td className="px-4 py-3">STI test result storage</td>
                                                <td className="px-4 py-3">iOS/Android</td>
                                                <td className="px-4 py-3">Free</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Coral</td>
                                                <td className="px-4 py-3">Relationship health tracker</td>
                                                <td className="px-4 py-3">Web/iOS</td>
                                                <td className="px-4 py-3">$9.99/month</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Nurx</td>
                                                <td className="px-4 py-3">At-home STI testing</td>
                                                <td className="px-4 py-3">Web/iOS/Android</td>
                                                <td className="px-4 py-3">$150+ per test</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Managing sexual health in relationships is an ongoing process that evolves as your relationship changes. What works at the beginning may need adjustment months or years later. The most important factors are open communication, mutual respect, and a commitment to shared wellbeing.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    Remember that sexual health isn't just about preventing disease - it's about creating fulfilling, pleasurable experiences that contribute to your overall relationship satisfaction.
                                </p>

                                <div className="bg-purple-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "Healthy sexual relationships aren't about perfection - they're about ongoing communication, mutual care, and the willingness to address challenges together."
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
                                            Dr. Elena Rodriguez
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
                                <h3 className="text-sm font-bold text-purple-800 uppercase tracking-wide mb-2">RELATIONSHIP NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get relationship health tips</h4>
                                <p className="text-gray-700 text-sm">
                                    Monthly guides on communication, intimacy, and health strategies for modern relationships.
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

                        {/* Conversation Starters */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Sexual Health Conversation Starters</h3>
                            <div className="space-y-3">
                                <div className="p-3 bg-gray-50 rounded">
                                    <p className="text-gray-700">"How do you typically approach STI testing in relationships?"</p>
                                </div>
                                <div className="p-3 bg-gray-50 rounded">
                                    <p className="text-gray-700">"What are your thoughts on protection methods for us?"</p>
                                </div>
                                <div className="p-3 bg-gray-50 rounded">
                                    <p className="text-gray-700">"Can we talk about our sexual health histories?"</p>
                                </div>
                                <div className="p-3 bg-gray-50 rounded">
                                    <p className="text-gray-700">"How would you want to handle it if one of us wanted to change our boundaries?"</p>
                                </div>
                            </div>
                        </div>

                        {/* Testing Locations */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Find Testing Near You</h3>
                            <div className="space-y-3">
                                <a href="#" className="block text-purple-600 hover:underline">Planned Parenthood Locator</a>
                                <a href="#" className="block text-purple-600 hover:underline">CDC Testing Site Finder</a>
                                <a href="#" className="block text-purple-600 hover:underline">Local Health Departments</a>
                                <a href="#" className="block text-purple-600 hover:underline">At-Home Test Options</a>
                            </div>
                        </div>

                        {/* Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Further Reading</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-purple-600 hover:underline">The Modern Guide to Safer Sex</a>
                                </li>
                                <li>
                                    <a href="#" className="text-purple-600 hover:underline">Consent in Digital Relationships</a>
                                </li>
                                <li>
                                    <a href="#" className="text-purple-600 hover:underline">Navigating Non-Monogamy Safely</a>
                                </li>
                                <li>
                                    <a href="#" className="text-purple-600 hover:underline">Sexual Health After 40</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}