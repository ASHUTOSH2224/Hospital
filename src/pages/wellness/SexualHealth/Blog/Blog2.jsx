"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, Heart, Shield, Activity, BookOpen, Star, Lock, AlertCircle, ThumbsUp, Moon, Droplet, Leaf, Scale } from "lucide-react"

export default function SexualWellnessGuide() {
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

    const tabs = ["Overview", "Communication", "Safety", "Health", "Resources"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                10 Essential Tips for Sexual Wellness and Health
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
                                Sexual wellness is a vital component of overall health and quality of life. We've rounded up the 10 most important aspects of sexual health to support your physical, emotional, and relational well-being. Discover evidence-based strategies for maintaining a fulfilling and safe sexual life.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=500&fit=crop"
                                    alt="Couple holding hands in bed"
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
                                    <li>Open communication reduces anxiety and improves satisfaction</li>
                                    <li>Regular STI testing is crucial for sexually active individuals</li>
                                    <li>Consent must be ongoing, enthusiastic, and reversible</li>
                                    <li>Physical health directly impacts sexual function and pleasure</li>
                                    <li>Mental health and sexual wellness are deeply interconnected</li>
                                </ul>
                            </div>

                            {/* Why Sexual Wellness Matters */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Heart className="w-8 h-8 text-purple-600 mr-2" />
                                    Why Sexual Wellness Matters
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Sexual health is more than just the absence of disease—it's a state of physical, emotional, mental, and social well-being in relation to sexuality. According to the <a href="#" className="text-blue-600 hover:underline">World Health Organization</a>, comprehensive sexual health requires:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>A positive and respectful approach to sexuality and sexual relationships</li>
                                    <li>The possibility of having pleasurable and safe sexual experiences</li>
                                    <li>Freedom from coercion, discrimination, and violence</li>
                                    <li>Access to sexual health care and education</li>
                                </ul>

                                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Sexual Health Statistics</h3>
                                    <p className="text-gray-700">
                                        A 2023 global study found that 43% of women and 31% of men experience some form of sexual dysfunction in their lifetime. However, 72% of those who sought professional help reported significant improvement in their sexual wellness.
                                    </p>
                                </div>
                            </section>

                            {/* The 10 Essential Tips */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Check className="w-8 h-8 text-purple-600 mr-2" />
                                    The 10 Essential Tips
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Based on current research and expert recommendations from sexual health professionals, these are the most crucial aspects of maintaining sexual wellness:
                                </p>

                                {/* Tips Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tip</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Importance</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action Steps</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            {/* Row 1 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">1. Prioritize Communication</td>
                                                <td className="px-4 py-3">Foundation of sexual health</td>
                                                <td className="px-4 py-3">Discuss boundaries, desires, and concerns openly</td>
                                            </tr>
                                            {/* Row 2 */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">2. Practice Safe Sex</td>
                                                <td className="px-4 py-3">Prevents STIs and unwanted pregnancy</td>
                                                <td className="px-4 py-3">Use protection, get tested regularly</td>
                                            </tr>
                                            {/* Row 3 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">3. Understand Consent</td>
                                                <td className="px-4 py-3">Ethical and legal requirement</td>
                                                <td className="px-4 py-3">Learn about enthusiastic consent</td>
                                            </tr>
                                            {/* Row 4 */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">4. Maintain Physical Health</td>
                                                <td className="px-4 py-3">Supports sexual function</td>
                                                <td className="px-4 py-3">Exercise, eat well, manage chronic conditions</td>
                                            </tr>
                                            {/* Row 5 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">5. Address Mental Health</td>
                                                <td className="px-4 py-3">Impacts desire and performance</td>
                                                <td className="px-4 py-3">Manage stress, anxiety, and depression</td>
                                            </tr>
                                            {/* Additional rows */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">6. Explore Your Body</td>
                                                <td className="px-4 py-3">Enhances self-awareness</td>
                                                <td className="px-4 py-3">Practice self-exploration</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">7. Educate Yourself</td>
                                                <td className="px-4 py-3">Prevents misinformation</td>
                                                <td className="px-4 py-3">Learn from reputable sources</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">8. Respect Differences</td>
                                                <td className="px-4 py-3">Promotes inclusivity</td>
                                                <td className="px-4 py-3">Understand diverse needs and identities</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">9. Manage Expectations</td>
                                                <td className="px-4 py-3">Reduces performance anxiety</td>
                                                <td className="px-4 py-3">Recognize normal variations</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">10. Seek Professional Help</td>
                                                <td className="px-4 py-3">Addresses complex issues</td>
                                                <td className="px-4 py-3">Consult doctors or therapists when needed</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <p className="text-gray-700 mb-6">
                                    *Note: These recommendations apply to all genders, orientations, and relationship statuses. Individual needs may vary.
                                </p>

                                {/* Top 3 Highlights */}
                                <div className="grid md:grid-cols-3 gap-6 mb-8">
                                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">1</span>
                                            Communication is Key
                                        </h3>
                                        <p className="text-gray-700">
                                            A 2022 study found couples who communicate openly about sex report 67% higher satisfaction. Start conversations with "I feel" statements and active listening.
                                        </p>
                                    </div>
                                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">2</span>
                                            Safe Sex Practices
                                        </h3>
                                        <p className="text-gray-700">
                                            Condoms are 98% effective against STIs when used correctly. Combine with regular testing (every 3-6 months if sexually active with new partners).
                                        </p>
                                    </div>
                                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">3</span>
                                            Consent Framework
                                        </h3>
                                        <p className="text-gray-700">
                                            Remember FRIES: Freely given, Reversible, Informed, Enthusiastic, Specific. Consent isn't just about "no means no" but "yes means yes."
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Communication Deep Dive */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <BookOpen className="w-8 h-8 text-purple-600 mr-2" />
                                    Communication: The Foundation of Sexual Wellness
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Effective communication about sexual needs, boundaries, and concerns is perhaps the most critical yet often overlooked aspect of sexual health. Many people feel awkward discussing sex, but overcoming this discomfort leads to:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>Increased sexual satisfaction (for both partners)</li>
                                    <li>Reduced performance anxiety</li>
                                    <li>Stronger emotional connection</li>
                                    <li>Better understanding of each other's needs</li>
                                    <li>Early identification of potential issues</li>
                                </ul>

                                <div className="bg-purple-50 p-4 rounded-lg mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">How to Start the Conversation</h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <h4 className="font-medium text-gray-900 mb-2">Do:</h4>
                                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                                                <li>Choose a relaxed, non-sexual setting</li>
                                                <li>Use "I" statements ("I feel...", "I enjoy...")</li>
                                                <li>Be specific about likes and dislikes</li>
                                                <li>Express appreciation for your partner</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 mb-2">Don't:</h4>
                                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                                                <li>Criticize or blame ("You always...")</li>
                                                <li>Bring up concerns during or right after sex</li>
                                                <li>Assume your partner knows what you want</li>
                                                <li>Compare to past partners or media portrayals</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Communication Exercises</h3>
                                <div className="space-y-4">
                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h4 className="font-bold text-gray-900 mb-2">1. The Yes/No/Maybe List</h4>
                                        <p className="text-gray-700 mb-2">
                                            Each partner independently lists sexual activities they:
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                                            <li>Would definitely enjoy (Yes)</li>
                                            <li>Wouldn't enjoy (No)</li>
                                            <li>Might be open to trying (Maybe)</li>
                                        </ul>
                                        <p className="text-gray-700 mt-2">
                                            Then compare lists to find common ground and areas for discussion.
                                        </p>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h4 className="font-bold text-gray-900 mb-2">2. Weekly Check-ins</h4>
                                        <p className="text-gray-700">
                                            Set aside 15 minutes each week to discuss:
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                                            <li>What you enjoyed sexually that week</li>
                                            <li>Any concerns or discomforts</li>
                                            <li>Ideas you'd like to explore</li>
                                            <li>Emotional connection needs</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Safety and Protection */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Shield className="w-8 h-8 text-purple-600 mr-2" />
                                    Safety and Protection Guidelines
                                </h2>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">STI Prevention</h3>
                                        <p className="text-gray-700 mb-2">
                                            The CDC recommends these protective measures:
                                        </p>
                                        <ol className="list-decimal list-inside text-gray-700 space-y-1">
                                            <li>Correct condom use for all penetrative sex</li>
                                            <li>Regular STI testing (frequency depends on activity)</li>
                                            <li>Open discussions about sexual history with partners</li>
                                            <li>Vaccination for HPV and Hepatitis B</li>
                                            <li>Pre-exposure prophylaxis (PrEP) for HIV prevention if high risk</li>
                                        </ol>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Testing Schedule</h3>
                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <div className="grid grid-cols-3 gap-4 text-center font-medium mb-2 border-b pb-2">
                                                <div>Activity Level</div>
                                                <div>Recommended Tests</div>
                                                <div>Frequency</div>
                                            </div>
                                            <div className="grid grid-cols-3 gap-4 text-center mb-1 border-b pb-2">
                                                <div>Single partner</div>
                                                <div>Full panel</div>
                                                <div>Annually</div>
                                            </div>
                                            <div className="grid grid-cols-3 gap-4 text-center mb-1 border-b pb-2 bg-purple-50">
                                                <div>New partners</div>
                                                <div>Full panel</div>
                                                <div>Before/after new partner</div>
                                            </div>
                                            <div className="grid grid-cols-3 gap-4 text-center mb-1 border-b pb-2">
                                                <div>Multiple partners</div>
                                                <div>Full panel</div>
                                                <div>Every 3-6 months</div>
                                            </div>
                                            <div className="grid grid-cols-3 gap-4 text-center">
                                                <div>High risk</div>
                                                <div>Full panel + extras</div>
                                                <div>Every 3 months</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                                        <AlertCircle className="w-5 h-5 text-yellow-600 mr-2" />
                                        Important Note:
                                    </h3>
                                    <p className="text-gray-700">
                                        Many STIs show no symptoms but can still cause long-term health problems if untreated. Don't rely on symptoms alone—get tested regularly if sexually active.
                                    </p>
                                </div>
                            </section>

                            {/* Physical Health Connection */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Activity className="w-8 h-8 text-purple-600 mr-2" />
                                    Physical Health and Sexual Function
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Your overall physical health significantly impacts sexual desire, performance, and satisfaction. Key connections include:
                                </p>

                                <div className="grid md:grid-cols-3 gap-4 mb-6">
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">Cardiovascular Health</h3>
                                        <p className="text-gray-700">
                                            Good blood flow is essential for arousal. Exercise improves circulation and stamina.
                                        </p>
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">Hormonal Balance</h3>
                                        <p className="text-gray-700">
                                            Testosterone, estrogen, and other hormones regulate libido and function.
                                        </p>
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">Neurological Health</h3>
                                        <p className="text-gray-700">
                                            Nerve sensitivity and brain chemistry affect pleasure and orgasm.
                                        </p>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Health Conditions That Affect Sexual Wellness</h3>
                                <div className="space-y-4">
                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h4 className="font-bold text-gray-900 mb-2">Diabetes</h4>
                                        <p className="text-gray-700">
                                            Can cause nerve damage (neuropathy) and reduced blood flow, leading to erectile dysfunction in men and decreased lubrication in women. Proper blood sugar management helps prevent these issues.
                                        </p>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h4 className="font-bold text-gray-900 mb-2">Hypertension</h4>
                                        <p className="text-gray-700">
                                            High blood pressure damages blood vessels, reducing genital blood flow. Some blood pressure medications can also affect sexual function—talk to your doctor about alternatives if needed.
                                        </p>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h4 className="font-bold text-gray-900 mb-2">Depression</h4>
                                        <p className="text-gray-700">
                                            Often decreases libido. Some antidepressants (especially SSRIs) can cause sexual side effects. Options include dose adjustment, medication switches, or adding medications like bupropion.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Sexual wellness is a lifelong journey that evolves with age, relationships, and life circumstances. By prioritizing open communication, safety, physical health, and emotional connection, you can maintain satisfying sexual health throughout your life.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    Remember that challenges are normal—most people experience sexual concerns at some point. The key is addressing them proactively through education, communication, and professional support when needed.
                                </p>

                                <div className="bg-purple-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "Sexual health isn't about performance or frequency—it's about connection, pleasure, and well-being. Approach it with curiosity, compassion, and care for yourself and your partners."
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
                                            Dr. Emily Carter, MD
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
                        <div className="bg-purple-50 rounded-lg p-6 mb-8">
                            <div className="mb-4">
                                <h3 className="text-sm font-bold text-purple-800 uppercase tracking-wide mb-2">WELLNESS NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get sexual health tips</h4>
                                <p className="text-gray-700 text-sm">
                                    Monthly guides, expert advice, and research updates delivered discreetly to your inbox.
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

                        {/* Quick Facts */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Sexual Health Quick Facts</h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <ThumbsUp className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-medium text-gray-900">Normal Frequency</h4>
                                        <p className="text-sm text-gray-600">There's no "normal"—ranges from daily to a few times a year are all healthy depending on individual needs.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Moon className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-medium text-gray-900">Libido Fluctuations</h4>
                                        <p className="text-sm text-gray-600">It's normal for desire to vary due to stress, hormones, age, and relationship dynamics.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Droplet className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-medium text-gray-900">Arousal Differences</h4>
                                        <p className="text-sm text-gray-600">Women typically need 10-30 minutes of stimulation to reach full arousal, compared to 3-5 minutes for men.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Resources */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Helpful Resources</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span className="font-medium">For Information:</span>
                                    <a href="#" className="text-purple-600 hover:underline">Planned Parenthood</a>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span className="font-medium">Testing Locator:</span>
                                    <a href="#" className="text-purple-600 hover:underline">GetTested</a>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span className="font-medium">Counseling:</span>
                                    <a href="#" className="text-purple-600 hover:underline">AASECT</a>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span className="font-medium">Crisis Support:</span>
                                    <a href="#" className="text-purple-600 hover:underline">RAINN</a>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-medium">Education:</span>
                                    <a href="#" className="text-purple-600 hover:underline">Scarleteen</a>
                                </div>
                            </div>
                        </div>

                        {/* Recommended Reading */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Recommended Reading</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-purple-600 hover:underline">"Come As You Are" by Emily Nagoski</a>
                                </li>
                                <li>
                                    <a href="#" className="text-purple-600 hover:underline">"The Guide to Getting It On" by Paul Joannides</a>
                                </li>
                                <li>
                                    <a href="#" className="text-purple-600 hover:underline">"Sex for One" by Betty Dodson</a>
                                </li>
                                <li>
                                    <a href="#" className="text-purple-600 hover:underline">"She Comes First" by Ian Kerner</a>
                                </li>
                                <li>
                                    <a href="#" className="text-purple-600 hover:underline">"Mating in Captivity" by Esther Perel</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}