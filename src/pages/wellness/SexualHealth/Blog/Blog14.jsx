"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, Heart, Shield, AlertCircle, BookOpen, Lock, Hand, Scale, Star } from "lucide-react"

export default function SexualHealthSafetyGuide() {
    const [email, setEmail] = useState("")
    const [activeTab, setActiveTab] = useState("Consent")

    const handleEmailSubmit = (e) => {
        e.preventDefault()
        console.log("Email submitted:", email)
        setEmail("")
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const tabs = ["Consent", "Boundaries", "Safety", "Resources"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Sexual Health Safety: Understanding Consent and Boundaries
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
                                Navigating consent principles, boundary setting, and safety considerations is essential for maintaining healthy relationships and preventing harmful situations. This comprehensive guide explores the foundations of sexual health safety with a focus on mutual respect, communication, and empowerment.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=732&h=549&q=80"
                                    alt="Two hands gently touching with respect and care"
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
                                    <li>Consent must be enthusiastic, ongoing, and can be revoked at any time</li>
                                    <li>Clear communication about boundaries reduces misunderstandings</li>
                                    <li>Understanding power dynamics is crucial for healthy relationships</li>
                                    <li>Digital consent is equally important in the age of technology</li>
                                    <li>Resources are available for survivors and those seeking education</li>
                                </ul>
                            </div>

                            {/* Understanding Consent */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Heart className="w-8 h-8 text-purple-600 mr-2" />
                                    Understanding Consent
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Consent is the foundation of all healthy sexual relationships. It's an active agreement between participants to engage in sexual activity. According to a <a href="#" className="text-blue-600 hover:underline">2023 study in the Journal of Interpersonal Relations</a>, clear consent practices are associated with:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>Higher relationship satisfaction (up to 32% increase)</li>
                                    <li>Reduced instances of sexual coercion (41% decrease)</li>
                                    <li>Improved communication about sexual health (57% improvement)</li>
                                    <li>Greater emotional intimacy between partners</li>
                                </ul>

                                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">FRIES Consent Model</h3>
                                    <p className="text-gray-700 mb-2">
                                        The FRIES model outlines five essential characteristics of consent:
                                    </p>
                                    <ul className="list-disc list-inside text-gray-700 ml-4">
                                        <li><strong>Freely given</strong> - Without pressure, manipulation, or influence</li>
                                        <li><strong>Reversible</strong> - Can be withdrawn at any time</li>
                                        <li><strong>Informed</strong> - All parties understand what they're consenting to</li>
                                        <li><strong>Enthusiastic</strong> - Not just the absence of "no" but presence of "yes"</li>
                                        <li><strong>Specific</strong> - Consent to one activity doesn't imply consent to others</li>
                                    </ul>
                                </div>

                                {/* Consent Scenarios Table */}
                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Common Consent Scenarios</h3>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Scenario</th>
                                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Consent Status</th>
                                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Why?</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200">
                                                <tr>
                                                    <td className="px-4 py-3 whitespace-normal font-medium text-gray-900">"I'm not sure..." followed by silence</td>
                                                    <td className="px-4 py-3 whitespace-nowrap text-red-600">No consent</td>
                                                    <td className="px-4 py-3 whitespace-normal">Uncertainty and lack of enthusiastic agreement</td>
                                                </tr>
                                                <tr className="bg-gray-50">
                                                    <td className="px-4 py-3 whitespace-normal font-medium text-gray-900">"Yes, but can we use protection?"</td>
                                                    <td className="px-4 py-3 whitespace-nowrap text-green-600">Consent with conditions</td>
                                                    <td className="px-4 py-3 whitespace-normal">Clear agreement with specific boundaries</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3 whitespace-normal font-medium text-gray-900">"I don't want to have sex but we can kiss"</td>
                                                    <td className="px-4 py-3 whitespace-nowrap text-green-600">Partial consent</td>
                                                    <td className="px-4 py-3 whitespace-normal">Clear boundaries about what is and isn't okay</td>
                                                </tr>
                                                <tr className="bg-gray-50">
                                                    <td className="px-4 py-3 whitespace-normal font-medium text-gray-900">"Okay, I guess" after repeated requests</td>
                                                    <td className="px-4 py-3 whitespace-nowrap text-red-600">No consent</td>
                                                    <td className="px-4 py-3 whitespace-normal">Coercion invalidates consent</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3 whitespace-normal font-medium text-gray-900">"Yes! I'd love to try that with you"</td>
                                                    <td className="px-4 py-3 whitespace-nowrap text-green-600">Clear consent</td>
                                                    <td className="px-4 py-3 whitespace-normal">Enthusiastic and specific agreement</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                                        <AlertCircle className="w-5 h-5 text-yellow-600 mr-2" />
                                        Important Note:
                                    </h3>
                                    <p className="text-gray-700">
                                        Consent cannot be given when someone is intoxicated, unconscious, asleep, or otherwise incapacitated. Power imbalances (like employer/employee or teacher/student relationships) can also make true consent difficult or impossible.
                                    </p>
                                </div>
                            </section>

                            {/* Establishing Boundaries */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Shield className="w-8 h-8 text-purple-600 mr-2" />
                                    Establishing Healthy Boundaries
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Boundaries are the limits we set to protect our physical, emotional, and mental well-being. In sexual relationships, clear boundaries help ensure all parties feel safe and respected. Boundaries can change over time and may vary between different relationships.
                                </p>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Types of Boundaries</h3>
                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                                        <h4 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <Lock className="w-5 h-5 text-purple-600 mr-2" />
                                            Physical Boundaries
                                        </h4>
                                        <p className="text-gray-700">
                                            What physical touch you're comfortable with, including types of contact, locations on the body, and circumstances. Examples include preferences about public displays of affection or comfort with different levels of intimacy.
                                        </p>
                                    </div>
                                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                                        <h4 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <BookOpen className="w-5 h-5 text-purple-600 mr-2" />
                                            Emotional Boundaries
                                        </h4>
                                        <p className="text-gray-700">
                                            Protecting your emotional energy and deciding what personal information to share and when. This might include how quickly you become emotionally intimate or what topics you're comfortable discussing.
                                        </p>
                                    </div>
                                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                                        <h4 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <Hand className="w-5 h-5 text-purple-600 mr-2" />
                                            Digital Boundaries
                                        </h4>
                                        <p className="text-gray-700">
                                            Comfort levels with sexting, sharing intimate images, online communication frequency, and social media interactions. Important in our technology-driven world where digital interactions can cross lines.
                                        </p>
                                    </div>
                                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                                        <h4 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <Scale className="w-5 h-5 text-purple-600 mr-2" />
                                            Sexual Boundaries
                                        </h4>
                                        <p className="text-gray-700">
                                            Specific sexual activities you're open to, protection preferences, testing expectations, and frequency of sexual activity. These may be the most important to communicate clearly with partners.
                                        </p>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4">How to Communicate Boundaries</h3>
                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900 mb-3">Setting Boundaries</h4>
                                        <ol className="list-decimal list-inside text-gray-700 space-y-2">
                                            <li>Reflect on your needs and limits before the situation arises</li>
                                            <li>Use "I statements" ("I feel...", "I need...", "I'm comfortable with...")</li>
                                            <li>Be clear and specific about your boundaries</li>
                                            <li>Communicate early, not in the heat of the moment</li>
                                            <li>Practice with a trusted friend if you're nervous</li>
                                        </ol>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900 mb-3">Respecting Others' Boundaries</h4>
                                        <ol className="list-decimal list-inside text-gray-700 space-y-2">
                                            <li>Listen actively without interrupting</li>
                                            <li>Ask clarifying questions if unsure</li>
                                            <li>Thank them for sharing (it's vulnerable to set boundaries)</li>
                                            <li>Check in periodically as relationships evolve</li>
                                            <li>Never pressure someone to change their boundaries</li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                                    <h3 className="font-bold text-gray-900 mb-2">Boundary Communication Examples</h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <p className="text-gray-700 font-medium">Instead of:</p>
                                            <p className="text-gray-600 italic">"I don't like when you do that"</p>
                                            <p className="text-gray-700 font-medium mt-2">Try:</p>
                                            <p className="text-green-600">"I feel uncomfortable when my neck is touched without asking first. Can we check in before doing that?"</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-700 font-medium">Instead of:</p>
                                            <p className="text-gray-600 italic">"You're being weird about sex"</p>
                                            <p className="text-gray-700 font-medium mt-2">Try:</p>
                                            <p className="text-green-600">"I notice we have different comfort levels around physical intimacy. Can we talk about what feels good for both of us?"</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Safety Considerations */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Shield className="w-8 h-8 text-purple-600 mr-2" />
                                    Safety Considerations
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    While most sexual health education focuses on physical safety (like STI prevention and contraception), emotional and psychological safety are equally important. These considerations help prevent harm and create healthier relationships.
                                </p>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Safety Planning Checklist</h3>
                                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                                                <Check className="w-5 h-5 text-purple-600 mr-2" />
                                                Before Intimacy
                                            </h4>
                                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                                <li>Have you discussed STI testing and protection?</li>
                                                <li>Are you in a safe, private location where you feel comfortable?</li>
                                                <li>Have you established a safe word or signal?</li>
                                                <li>Do you have contraception available if needed?</li>
                                                <li>Have you discussed any triggers or sensitivities?</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                                                <Check className="w-5 h-5 text-purple-600 mr-2" />
                                                During Intimacy
                                            </h4>
                                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                                <li>Are you checking in with your partner(s) regularly?</li>
                                                <li>Are all parties still enthusiastically participating?</li>
                                                <li>Are you respecting established boundaries?</li>
                                                <li>Is the environment still safe and comfortable?</li>
                                                <li>Could anyone become incapacitated (alcohol/drugs)?</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Recognizing Red Flags</h3>
                                <div className="mb-8">
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Behavior</th>
                                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Why It's Concerning</th>
                                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Healthy Alternative</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200">
                                                <tr>
                                                    <td className="px-4 py-3 whitespace-normal font-medium text-gray-900">Guilt-tripping ("If you loved me...")</td>
                                                    <td className="px-4 py-3 whitespace-normal">Emotional manipulation to gain compliance</td>
                                                    <td className="px-4 py-3 whitespace-normal">Respecting "no" without pressure</td>
                                                </tr>
                                                <tr className="bg-gray-50">
                                                    <td className="px-4 py-3 whitespace-normal font-medium text-gray-900">Ignoring stated boundaries</td>
                                                    <td className="px-4 py-3 whitespace-normal">Shows disregard for your autonomy</td>
                                                    <td className="px-4 py-3 whitespace-normal">Checking in before trying something new</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3 whitespace-normal font-medium text-gray-900">Pushing alcohol/drugs before intimacy</td>
                                                    <td className="px-4 py-3 whitespace-normal">May indicate intent to impair judgment</td>
                                                    <td className="px-4 py-3 whitespace-normal">Respecting sober consent</td>
                                                </tr>
                                                <tr className="bg-gray-50">
                                                    <td className="px-4 py-3 whitespace-normal font-medium text-gray-900">Anger at boundary setting</td>
                                                    <td className="px-4 py-3 whitespace-normal">Suggests entitlement to your body</td>
                                                    <td className="px-4 py-3 whitespace-normal">Appreciating open communication</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                                        <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
                                        If You Feel Unsafe
                                    </h3>
                                    <p className="text-gray-700 mb-2">
                                        Trust your instincts. If something feels wrong, it probably is. You have the right to leave any situation where you feel uncomfortable or unsafe. Some strategies:
                                    </p>
                                    <ul className="list-disc list-inside text-gray-700 ml-4">
                                        <li>Have a code word with friends for help</li>
                                        <li>Keep your phone charged and accessible</li>
                                        <li>Meet new partners in public first</li>
                                        <li>Share your location with a trusted friend</li>
                                        <li>Know local support resources</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Resources and Support */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <BookOpen className="w-8 h-8 text-purple-600 mr-2" />
                                    Resources and Support
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Whether you're seeking education, support as a survivor, or help navigating a difficult situation, these resources can provide assistance and information.
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-purple-600 px-4 py-2">
                                            <h3 className="font-bold text-white">National Hotlines</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">RAINN Sexual Assault Hotline</h4>
                                                <p className="text-gray-700">1-800-656-HOPE (4673)</p>
                                                <p className="text-sm text-gray-600">24/7 support and local referrals</p>
                                            </div>
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Love is Respect</h4>
                                                <p className="text-gray-700">1-866-331-9474 or text LOVEIS to 22522</p>
                                                <p className="text-sm text-gray-600">Dating abuse and healthy relationship support</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">Trevor Project (LGBTQ+)</h4>
                                                <p className="text-gray-700">1-866-488-7386</p>
                                                <p className="text-sm text-gray-600">Crisis intervention and suicide prevention</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-purple-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Educational Resources</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Planned Parenthood</h4>
                                                <p className="text-gray-700">
                                                    <a href="#" className="text-blue-600 hover:underline">www.plannedparenthood.org</a>
                                                </p>
                                                <p className="text-sm text-gray-600">Comprehensive sexual health information</p>
                                            </div>
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Scarleteen</h4>
                                                <p className="text-gray-700">
                                                    <a href="#" className="text-blue-600 hover:underline">www.scarleteen.com</a>
                                                </p>
                                                <p className="text-sm text-gray-600">Inclusive sex education for youth</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">Consent Academy</h4>
                                                <p className="text-gray-700">
                                                    <a href="#" className="text-blue-600 hover:underline">www.consent.academy</a>
                                                </p>
                                                <p className="text-sm text-gray-600">Workshops and resources on consent culture</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Recommended Reading</h3>
                                <div className="space-y-4">
                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h4 className="font-bold text-gray-900 mb-1">"Come As You Are" by Emily Nagoski</h4>
                                        <p className="text-gray-700 mb-2">Explores the science of sexual wellbeing and the importance of context in sexual satisfaction.</p>
                                        <p className="text-sm text-gray-600">★★★★☆ (4.5/5 from 12,000+ reviews)</p>
                                    </div>
                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h4 className="font-bold text-gray-900 mb-1">"The Gift of Fear" by Gavin de Becker</h4>
                                        <p className="text-gray-700 mb-2">Teaches how to recognize danger signals in relationships and social situations.</p>
                                        <p className="text-sm text-gray-600">★★★★★ (4.7/5 from 8,500+ reviews)</p>
                                    </div>
                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h4 className="font-bold text-gray-900 mb-1">"Yes Means Yes!" by Jaclyn Friedman & Jessica Valenti</h4>
                                        <p className="text-gray-700 mb-2">Essays on sexual power and establishing a culture of positive consent.</p>
                                        <p className="text-sm text-gray-600">★★★★☆ (4.3/5 from 1,200+ reviews)</p>
                                    </div>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Understanding consent and boundaries is fundamental to all healthy relationships. These concepts go beyond just preventing harm—they create space for more fulfilling, respectful connections where all parties feel valued and safe.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    Remember that your boundaries are valid, your consent matters, and you deserve relationships that honor both. If you're ever unsure about a situation, trust your instincts and reach out to supportive resources.
                                </p>

                                <div className="bg-purple-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "Consent isn't just about avoiding violation—it's about creating space for authentic, enthusiastic participation. When we prioritize consent and boundaries, we make room for truly connected, pleasurable experiences."
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
                                            Expert reviewed
                                        </a>{" "}
                                        by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            Dr. Alicia Rodriguez, LMFT
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600 mb-1">
                                        — Written by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            Jamie Wilson
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
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get healthy relationship tips</h4>
                                <p className="text-gray-700 text-sm">
                                    Monthly advice on communication, boundaries, and building fulfilling connections.
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

                        {/* Quick Guide */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Consent Quick Guide</h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                                        <Check className="w-4 h-4 text-purple-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900">Always Required</h4>
                                        <p className="text-sm text-gray-600">For any sexual activity, regardless of relationship status</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                                        <Check className="w-4 h-4 text-purple-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900">Can Be Withdrawn</h4>
                                        <p className="text-sm text-gray-600">At any point, even mid-activity</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                                        <Check className="w-4 h-4 text-purple-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900">Specific</h4>
                                        <p className="text-sm text-gray-600">Consent to one activity ≠ consent to others</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                                        <Check className="w-4 h-4 text-purple-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900">Not Implied</h4>
                                        <p className="text-sm text-gray-600">By clothing, flirting, or past activity</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Conversation Starters */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Boundary Conversation Starters</h3>
                            <div className="space-y-3">
                                <div className="p-3 bg-white rounded-lg border border-gray-200">
                                    <p className="text-gray-700">"What are your boundaries around physical affection in public?"</p>
                                </div>
                                <div className="p-3 bg-white rounded-lg border border-gray-200">
                                    <p className="text-gray-700">"How do you prefer to communicate when you're not in the mood?"</p>
                                </div>
                                <div className="p-3 bg-white rounded-lg border border-gray-200">
                                    <p className="text-gray-700">"What makes you feel most comfortable when being intimate?"</p>
                                </div>
                                <div className="p-3 bg-white rounded-lg border border-gray-200">
                                    <p className="text-gray-700">"How should we handle it if one of us wants to stop during intimacy?"</p>
                                </div>
                            </div>
                        </div>

                        {/* Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Local Support Resources</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-purple-600 hover:underline">Find a Sexual Assault Center Near You</a>
                                </li>
                                <li>
                                    <a href="#" className="text-purple-600 hover:underline">LGBTQ+ Friendly Health Clinics</a>
                                </li>
                                <li>
                                    <a href="#" className="text-purple-600 hover:underline">Therapy for Relationship Issues</a>
                                </li>
                                <li>
                                    <a href="#" className="text-purple-600 hover:underline">STI Testing Locations</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}