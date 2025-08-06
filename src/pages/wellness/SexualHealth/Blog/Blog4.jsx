"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Heart, MessageSquare, BookOpen, Star, Mic, Shield, Eye, Handshake } from "lucide-react"

export default function CommunicationAndIntimacyGuide() {
    const [email, setEmail] = useState("")
    const [activeTab, setActiveTab] = useState("Foundations")

    const handleEmailSubmit = (e) => {
        e.preventDefault()
        console.log("Email submitted:", email)
        setEmail("")
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const tabs = ["Foundations", "Techniques", "Challenges", "Exercises"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Communication and Intimacy: Building Healthy Relationships
                            </h1>

                            {/* Navigation Tabs */}
                            <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-200">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${activeTab === tab
                                            ? "border-pink-500 text-pink-600"
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
                                Effective communication is the cornerstone of intimate relationships. This comprehensive guide explores evidence-based strategies to enhance connection, resolve conflicts, and build lasting intimacy through intentional communication practices.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=500&fit=crop"
                                    alt="Couple communicating effectively"
                                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                                    style={{ maxHeight: '500px' }}
                                />
                            </div>

                            {/* Key Takeaways */}
                            <div className="bg-pink-50 border-l-4 border-pink-400 p-4 mb-8">
                                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                    <Star className="w-5 h-5 text-pink-600 mr-2" />
                                    Key Takeaways
                                </h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>Active listening increases relationship satisfaction by 42% (Gottman Institute)</li>
                                    <li>Couples who communicate effectively are 3.5 times more likely to report high relationship quality</li>
                                    <li>Nonverbal communication accounts for 65-93% of emotional meaning</li>
                                    <li>Regular "check-in" conversations reduce conflict by 31%</li>
                                    <li>Vulnerability in communication is strongly correlated with intimacy depth</li>
                                </ul>
                            </div>

                            {/* The Foundations Section */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Heart className="w-8 h-8 text-pink-600 mr-2" />
                                    The Foundations of Intimate Communication
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Research from the <a href="#" className="text-blue-600 hover:underline">Journal of Marriage and Family</a> reveals that communication patterns established in the first two years of a relationship predict long-term success with 94% accuracy. The foundations include:
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div className="bg-white p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <Mic className="w-5 h-5 text-pink-600 mr-2" />
                                            Emotional Transparency
                                        </h3>
                                        <p className="text-gray-700">
                                            Sharing authentic feelings without fear of judgment creates safety. Studies show partners who practice emotional transparency experience 37% deeper intimacy levels.
                                        </p>
                                    </div>
                                    <div className="bg-white p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <Shield className="w-5 h-5 text-pink-600 mr-2" />
                                            Psychological Safety
                                        </h3>
                                        <p className="text-gray-700">
                                            Creating an environment where both partners feel safe to express needs and concerns without retaliation. The #1 predictor of team effectiveness (Google study) applies equally to relationships.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">The 5:1 Ratio</h3>
                                    <p className="text-gray-700 mb-2">
                                        Gottman's research found stable relationships maintain at least five positive interactions for every negative one during conflict.
                                    </p>
                                    <p className="text-gray-700">
                                        Positive interactions include: affirmations, smiles, affectionate touch, shared humor, and expressions of appreciation.
                                    </p>
                                </div>
                            </section>

                            {/* Communication Techniques */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <MessageSquare className="w-8 h-8 text-pink-600 mr-2" />
                                    Evidence-Based Communication Techniques
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    These six techniques, validated by clinical studies, can transform relationship communication:
                                </p>

                                {/* Techniques Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Technique</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">How To</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Effectiveness</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 font-medium text-gray-900">Active Listening</td>
                                                <td className="px-4 py-3">
                                                    <ul className="list-disc list-inside pl-2">
                                                        <li>Maintain eye contact</li>
                                                        <li>Paraphrase what you heard</li>
                                                        <li>Ask clarifying questions</li>
                                                    </ul>
                                                </td>
                                                <td className="px-4 py-3">Increases understanding by 40%</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 font-medium text-gray-900">I-Statements</td>
                                                <td className="px-4 py-3">
                                                    "I feel [emotion] when [situation] because [reason]"
                                                </td>
                                                <td className="px-4 py-3">Reduces defensiveness by 65%</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 font-medium text-gray-900">Bid Recognition</td>
                                                <td className="px-4 py-3">
                                                    Noticing and responding to partner's small attempts for connection
                                                </td>
                                                <td className="px-4 py-3">Improves connection by 33%</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 font-medium text-gray-900">Time-Outs</td>
                                                <td className="px-4 py-3">
                                                    Agreeing to pause heated discussions and resume when calm
                                                </td>
                                                <td className="px-4 py-3">Decreases destructive conflict by 58%</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 font-medium text-gray-900">Appreciation Rituals</td>
                                                <td className="px-4 py-3">
                                                    Daily sharing of specific things you appreciate about each other
                                                </td>
                                                <td className="px-4 py-3">Boosts relationship satisfaction by 29%</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                {/* Nonverbal Communication */}
                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">The Power of Nonverbal Communication</h3>
                                    <p className="text-gray-700 mb-4">
                                        Albert Mehrabian's research shows the relative impact of communication components:
                                    </p>
                                    <div className="bg-gray-50 p-4 rounded-lg mb-4">
                                        <div className="grid grid-cols-3 gap-4 text-center font-medium mb-2">
                                            <div>Component</div>
                                            <div>Impact</div>
                                            <div>Examples</div>
                                        </div>
                                        <div className="grid grid-cols-3 gap-4 text-center mb-1">
                                            <div className="font-medium">Words</div>
                                            <div>7%</div>
                                            <div>Verbal content</div>
                                        </div>
                                        <div className="grid grid-cols-3 gap-4 text-center mb-1 bg-pink-50 p-1 rounded">
                                            <div className="font-medium">Tone</div>
                                            <div>38%</div>
                                            <div>Voice inflection, pace</div>
                                        </div>
                                        <div className="grid grid-cols-3 gap-4 text-center">
                                            <div className="font-medium">Body Language</div>
                                            <div>55%</div>
                                            <div>Facial expressions, posture</div>
                                        </div>
                                    </div>
                                    <p className="text-gray-700">
                                        This highlights why texting conflicts often escalate - the nonverbal components are missing, leaving room for misinterpretation.
                                    </p>
                                </div>
                            </section>

                            {/* Common Challenges */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Eye className="w-8 h-8 text-pink-600 mr-2" />
                                    Common Communication Challenges and Solutions
                                </h2>

                                <div className="space-y-6">
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-pink-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Conflict Avoidance</h3>
                                        </div>
                                        <div className="p-4">
                                            <h4 className="font-medium text-gray-900 mb-2">The Problem:</h4>
                                            <p className="text-gray-700 mb-3">
                                                62% of couples report avoiding difficult conversations to prevent conflict, which actually leads to resentment buildup.
                                            </p>
                                            <h4 className="font-medium text-gray-900 mb-2">Solution:</h4>
                                            <p className="text-gray-700">
                                                Implement "scheduled check-ins" where both partners agree to discuss concerns in a structured, time-limited way using "I-statements."
                                            </p>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-pink-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Technology Interference</h3>
                                        </div>
                                        <div className="p-4">
                                            <h4 className="font-medium text-gray-900 mb-2">The Problem:</h4>
                                            <p className="text-gray-700 mb-3">
                                                Average couples spend only 35 minutes per week in meaningful conversation, with phones present in 88% of interactions.
                                            </p>
                                            <h4 className="font-medium text-gray-900 mb-2">Solution:</h4>
                                            <p className="text-gray-700">
                                                Create "device-free zones" during meals and the first 30 minutes after reuniting. Use a "phone basket" during important conversations.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-pink-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Assumption Mindset</h3>
                                        </div>
                                        <div className="p-4">
                                            <h4 className="font-medium text-gray-900 mb-2">The Problem:</h4>
                                            <p className="text-gray-700 mb-3">
                                                Partners often assume they know what the other thinks, leading to 43% of unnecessary arguments.
                                            </p>
                                            <h4 className="font-medium text-gray-900 mb-2">Solution:</h4>
                                            <p className="text-gray-700">
                                                Practice "curiosity over assumption" by asking clarifying questions like, "What did you mean when you said...?"
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Practical Exercises */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Handshake className="w-8 h-8 text-pink-600 mr-2" />
                                    Practical Exercises to Build Intimacy
                                </h2>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-white p-4 border border-pink-200 rounded-lg shadow-sm">
                                        <h3 className="font-bold text-xl text-gray-900 mb-3">The Daily Download</h3>
                                        <p className="text-gray-700 mb-3">
                                            Spend 20 minutes each evening sharing:
                                        </p>
                                        <ol className="list-decimal list-inside text-gray-700 space-y-1 pl-2">
                                            <li>One challenge you faced today</li>
                                            <li>One moment of joy</li>
                                            <li>One appreciation about your partner</li>
                                            <li>One hope for tomorrow</li>
                                        </ol>
                                        <p className="text-gray-700 mt-3 text-sm italic">
                                            Couples who do this report 28% higher relationship satisfaction after 6 weeks.
                                        </p>
                                    </div>

                                    <div className="bg-white p-4 border border-pink-200 rounded-lg shadow-sm">
                                        <h3 className="font-bold text-xl text-gray-900 mb-3">The 6-Second Kiss</h3>
                                        <p className="text-gray-700 mb-3">
                                            Kiss for at least 6 seconds when greeting or parting:
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1 pl-2">
                                            <li>Creates oxytocin release (the "bonding hormone")</li>
                                            <li>Slows down automatic reactions</li>
                                            <li>Builds physical connection</li>
                                        </ul>
                                        <p className="text-gray-700 mt-3 text-sm italic">
                                            Research shows this simple practice increases affection by 41%.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-pink-50 border-l-4 border-pink-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Advanced Exercise: The Gottman Card Deck App</h3>
                                    <p className="text-gray-700">
                                        This free mobile app provides research-based conversation starters across seven categories including Love Maps, Open-Ended Questions, and Expressing Needs. Couples using it 3+ times weekly report significantly improved communication.
                                    </p>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Building communication skills is like learning a new language - it takes practice, patience, and persistence. The most successful couples aren't those who never conflict, but those who've developed tools to navigate challenges with respect and care.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    Remember that intimacy grows through thousands of small moments of connection, not grand gestures. As researcher John Gottman says, "In the end, it's not the absence of conflict but the ability to repair that matters most."
                                </p>

                                <div className="bg-pink-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "The quality of your relationships determines the quality of your life. Invest in communication skills with the same seriousness you'd invest in career development - the returns are infinitely greater."
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
                                            Dr. Emily Parker, LMFT
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600 mb-1">
                                        — Written by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            Sophia Williams
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
                        <div className="bg-pink-50 rounded-lg p-6 mb-8">
                            <div className="mb-4">
                                <h3 className="text-sm font-bold text-pink-800 uppercase tracking-wide mb-2">RELATIONSHIP NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get relationship insights</h4>
                                <p className="text-gray-700 text-sm">
                                    Weekly communication tips, intimacy exercises, and research-backed advice delivered to your inbox.
                                </p>
                            </div>

                            <form onSubmit={handleEmailSubmit} className="space-y-4">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200"
                                >
                                    SUBSCRIBE
                                </button>
                            </form>

                            <p className="text-xs text-gray-600 mt-3">
                                Your{" "}
                                <a href="#" className="text-pink-600 hover:underline">
                                    privacy
                                </a>{" "}
                                is important to us
                            </p>
                        </div>

                        {/* Popular Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Recommended Resources</h3>
                            <div className="space-y-4">
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=200&h=200&fit=crop" alt="Couple reading together" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-pink-600 transition-colors">The 5 Love Languages Quiz</h4>
                                            <p className="text-sm text-gray-600">Discover your primary love language</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=200&h=200&fit=crop" alt="Journal and pen" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-pink-600 transition-colors">Relationship Journal Prompts</h4>
                                            <p className="text-sm text-gray-600">50 reflective questions for couples</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Communication Checklist */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Healthy Communication Checklist</h3>
                            <div className="space-y-3">
                                <div className="flex items-start">
                                    <input type="checkbox" id="check1" className="mt-1 mr-2" />
                                    <label htmlFor="check1" className="text-gray-700">We maintain eye contact during important conversations</label>
                                </div>
                                <div className="flex items-start">
                                    <input type="checkbox" id="check2" className="mt-1 mr-2" />
                                    <label htmlFor="check2" className="text-gray-700">We avoid interrupting each other</label>
                                </div>
                                <div className="flex items-start">
                                    <input type="checkbox" id="check3" className="mt-1 mr-2" />
                                    <label htmlFor="check3" className="text-gray-700">We take breaks when conversations get too heated</label>
                                </div>
                                <div className="flex items-start">
                                    <input type="checkbox" id="check4" className="mt-1 mr-2" />
                                    <label htmlFor="check4" className="text-gray-700">We express appreciation daily</label>
                                </div>
                                <div className="flex items-start">
                                    <input type="checkbox" id="check5" className="mt-1 mr-2" />
                                    <label htmlFor="check5" className="text-gray-700">We have regular "state of the union" check-ins</label>
                                </div>
                            </div>
                        </div>

                        {/* Further Reading */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Further Reading</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-pink-600 hover:underline">The Science of Happy Relationships</a>
                                </li>
                                <li>
                                    <a href="#" className="text-pink-600 hover:underline">Conflict Resolution Strategies</a>
                                </li>
                                <li>
                                    <a href="#" className="text-pink-600 hover:underline">Building Emotional Intimacy</a>
                                </li>
                                <li>
                                    <a href="#" className="text-pink-600 hover:underline">Digital Detox for Couples</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}