"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, MessageSquare, Heart, Eye, Ear, Mic, BookOpen, Star, AlertCircle } from "lucide-react"

export default function CommunicationSkillsGuide() {
    const [email, setEmail] = useState("")
    const [activeTab, setActiveTab] = useState("Essentials")

    const handleEmailSubmit = (e) => {
        e.preventDefault()
        console.log("Email submitted:", email)
        setEmail("")
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const tabs = ["Essentials", "Techniques", "Barriers", "Exercises"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Communication Skills: The Key to Healthy Relationships
                            </h1>

                            {/* Navigation Tabs */}
                            <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-200">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                                            activeTab === tab
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
                                Effective communication forms the foundation of all healthy relationships. Whether romantic, familial, or professional, learning to express yourself clearly while understanding others leads to deeper connections and reduced conflict. This guide explores evidence-based techniques to transform your communication approach.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80"
                                    alt="Two people having a meaningful conversation"
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
                                    <li>Active listening improves relationship satisfaction by 34% (Gottman Institute)</li>
                                    <li>Couples who communicate effectively are 4 times more likely to stay together</li>
                                    <li>Nonverbal cues account for 55% of communication impact (Mehrabian's study)</li>
                                    <li>"I" statements reduce defensive responses by 62% in conflict situations</li>
                                    <li>Regular check-ins can prevent 80% of misunderstandings</li>
                                </ul>
                            </div>

                            {/* The Communication Pyramid */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <MessageSquare className="w-8 h-8 text-blue-600 mr-2" />
                                    The Communication Pyramid
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Healthy communication operates on multiple levels, each building upon the previous one. Research from the <a href="#" className="text-blue-600 hover:underline">Journal of Social and Personal Relationships</a> shows relationships with balanced communication across all levels report:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>87% higher satisfaction rates</li>
                                    <li>42% fewer conflicts</li>
                                    <li>3.5x faster conflict resolution</li>
                                    <li>76% greater emotional intimacy</li>
                                </ul>

                                <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                                    <div className="grid md:grid-cols-5 gap-4 text-center">
                                        {/* Level 5 */}
                                        <div className="md:col-span-5 bg-blue-100 p-4 rounded-lg border border-blue-200">
                                            <h3 className="font-bold text-blue-800 mb-1">Level 5: Shared Meaning</h3>
                                            <p className="text-sm text-blue-700">Creating joint narratives and traditions</p>
                                        </div>
                                        {/* Level 4 */}
                                        <div className="md:col-start-2 md:col-span-3 bg-blue-200 p-3 rounded-lg border border-blue-300">
                                            <h3 className="font-bold text-blue-800 mb-1">Level 4: Emotional Exchange</h3>
                                            <p className="text-sm text-blue-700">Expressing feelings and vulnerabilities</p>
                                        </div>
                                        {/* Level 3 */}
                                        <div className="md:col-start-2 md:col-span-3 bg-blue-300 p-3 rounded-lg border border-blue-400">
                                            <h3 className="font-bold text-blue-800 mb-1">Level 3: Opinion Sharing</h3>
                                            <p className="text-sm text-blue-700">Discussing thoughts and perspectives</p>
                                        </div>
                                        {/* Level 2 */}
                                        <div className="md:col-start-2 md:col-span-3 bg-blue-400 p-3 rounded-lg border border-blue-500">
                                            <h3 className="font-bold text-white mb-1">Level 2: Fact Exchange</h3>
                                            <p className="text-sm text-white">Sharing information and experiences</p>
                                        </div>
                                        {/* Level 1 */}
                                        <div className="md:col-span-5 bg-blue-600 p-4 rounded-lg border border-blue-700">
                                            <h3 className="font-bold text-white mb-1">Level 1: Basic Connection</h3>
                                            <p className="text-sm text-white">Establishing initial contact and rapport</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Communication Balance</h3>
                                    <p className="text-gray-700 mb-2">
                                        Healthy relationships maintain a balance across all levels. Too much focus on lower levels creates superficial connections, while over-emphasizing higher levels without foundation can feel overwhelming.
                                    </p>
                                </div>
                            </section>

                            {/* Active Listening Techniques */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Ear className="w-8 h-8 text-blue-600 mr-2" />
                                    Active Listening Techniques
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Active listening is the cornerstone of effective communication. A <a href="#" className="text-blue-600 hover:underline">2023 Harvard study</a> found that partners who feel heard report 58% higher relationship satisfaction. Here are evidence-based techniques:
                                </p>

                                {/* Techniques Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Technique</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">How To</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Impact</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            {/* Row 1 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Reflective Listening</td>
                                                <td className="px-4 py-3">Paraphrase what you heard and check for accuracy</td>
                                                <td className="px-4 py-3">Reduces misunderstandings by 72%</td>
                                            </tr>
                                            {/* Row 2 */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Emotional Labeling</td>
                                                <td className="px-4 py-3">Name the emotion you perceive ("You sound frustrated")</td>
                                                <td className="px-4 py-3">Increases feeling understood by 65%</td>
                                            </tr>
                                            {/* Row 3 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Minimal Encouragers</td>
                                                <td className="px-4 py-3">Use small verbal nods ("mmhmm", "I see")</td>
                                                <td className="px-4 py-3">Boosts speaker comfort by 41%</td>
                                            </tr>
                                            {/* Row 4 */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Open-Ended Questions</td>
                                                <td className="px-4 py-3">Ask questions that can't be answered with yes/no</td>
                                                <td className="px-4 py-3">Increases disclosure depth by 3.2x</td>
                                            </tr>
                                            {/* Row 5 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Nonverbal Mirroring</td>
                                                <td className="px-4 py-3">Subtly match body language and tone</td>
                                                <td className="px-4 py-3">Enhances connection by 53%</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">1</span>
                                            The 70/30 Rule
                                        </h3>
                                        <p className="text-gray-700">
                                            In deep conversations, aim to listen 70% of the time and speak 30%. This ratio creates space for mutual understanding while allowing both parties to feel heard.
                                        </p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">2</span>
                                            The 3-Second Pause
                                        </h3>
                                        <p className="text-gray-700">
                                            After someone finishes speaking, wait 3 seconds before responding. This prevents interrupting, shows respect, and often elicits additional meaningful content.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Conflict Resolution Strategies */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Heart className="w-8 h-8 text-blue-600 mr-2" />
                                    Conflict Resolution Strategies
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Disagreements are inevitable, but destructive conflict isn't. The <a href="#" className="text-blue-600 hover:underline">Gottman Institute</a> identifies four communication patterns ("The Four Horsemen") that predict relationship failure:
                                </p>

                                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="bg-white p-3 rounded border border-red-100">
                                            <h4 className="font-bold text-red-600 mb-1">Criticism</h4>
                                            <p className="text-gray-700 text-sm">Attacking character rather than addressing behavior</p>
                                        </div>
                                        <div className="bg-white p-3 rounded border border-red-100">
                                            <h4 className="font-bold text-red-600 mb-1">Contempt</h4>
                                            <p className="text-gray-700 text-sm">Sarcasm, mockery, or disrespectful language</p>
                                        </div>
                                        <div className="bg-white p-3 rounded border border-red-100">
                                            <h4 className="font-bold text-red-600 mb-1">Defensiveness</h4>
                                            <p className="text-gray-700 text-sm">Making excuses rather than taking responsibility</p>
                                        </div>
                                        <div className="bg-white p-3 rounded border border-red-100">
                                            <h4 className="font-bold text-red-600 mb-1">Stonewalling</h4>
                                            <p className="text-gray-700 text-sm">Withdrawing from interaction to avoid conflict</p>
                                        </div>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Antidotes to Destructive Patterns</h3>

                                <div className="space-y-4 mb-6">
                                    <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                        <h4 className="font-bold text-green-800 mb-2">Gentle Start-Up</h4>
                                        <p className="text-gray-700 mb-2">Instead of criticism, use this formula:</p>
                                        <p className="bg-white p-3 rounded font-mono text-sm">
                                            "I feel [emotion] about [specific situation]. I need [positive request]."
                                        </p>
                                    </div>

                                    <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                        <h4 className="font-bold text-green-800 mb-2">Appreciation Reminders</h4>
                                        <p className="text-gray-700">
                                            Counter contempt by regularly expressing gratitude and appreciation for your partner's positive qualities.
                                        </p>
                                    </div>

                                    <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                        <h4 className="font-bold text-green-800 mb-2">Responsibility Acceptance</h4>
                                        <p className="text-gray-700">
                                            Replace defensiveness by acknowledging your role in the situation, even if it's just how you reacted.
                                        </p>
                                    </div>

                                    <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                        <h4 className="font-bold text-green-800 mb-2">Self-Soothing</h4>
                                        <p className="text-gray-700">
                                            Prevent stonewalling by calling for a brief timeout (20-30 minutes) when flooded with emotion, then returning to the discussion.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Nonverbal Communication */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Eye className="w-8 h-8 text-blue-600 mr-2" />
                                    The Power of Nonverbal Communication
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Albert Mehrabian's research shows that only 7% of communication's emotional impact comes from words, while 38% comes from tone of voice and 55% from body language. Key nonverbal elements include:
                                </p>

                                <div className="grid md:grid-cols-3 gap-4 mb-6">
                                    <div className="border border-gray-200 rounded-lg p-4">
                                        <h3 className="font-bold text-gray-900 mb-2">Facial Expressions</h3>
                                        <p className="text-gray-700 text-sm">
                                            Smiling increases perceived warmth by 68%. Eyebrow flashes show recognition.
                                        </p>
                                    </div>
                                    <div className="border border-gray-200 rounded-lg p-4">
                                        <h3 className="font-bold text-gray-900 mb-2">Proximity</h3>
                                        <p className="text-gray-700 text-sm">
                                            Standing 3-4 feet apart is ideal for personal conversations in Western cultures.
                                        </p>
                                    </div>
                                    <div className="border border-gray-200 rounded-lg p-4">
                                        <h3 className="font-bold text-gray-900 mb-2">Touch</h3>
                                        <p className="text-gray-700 text-sm">
                                            Appropriate touch (hand on shoulder) increases connection when welcomed.
                                        </p>
                                    </div>
                                    <div className="border border-gray-200 rounded-lg p-4">
                                        <h3 className="font-bold text-gray-900 mb-2">Posture</h3>
                                        <p className="text-gray-700 text-sm">
                                            Leaning slightly forward shows engagement. Open postures increase approachability.
                                        </p>
                                    </div>
                                    <div className="border border-gray-200 rounded-lg p-4">
                                        <h3 className="font-bold text-gray-900 mb-2">Eye Contact</h3>
                                        <p className="text-gray-700 text-sm">
                                            60-70% of speaking time is ideal. Too little seems evasive, too much feels intense.
                                        </p>
                                    </div>
                                    <div className="border border-gray-200 rounded-lg p-4">
                                        <h3 className="font-bold text-gray-900 mb-2">Gestures</h3>
                                        <p className="text-gray-700 text-sm">
                                            Natural hand movements increase perceived authenticity by 42%.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Cultural Note:</h3>
                                    <p className="text-gray-700">
                                        Nonverbal norms vary significantly across cultures. For example, appropriate eye contact ranges from direct (Western Europe) to modest (East Asia). Always consider cultural context.
                                    </p>
                                </div>
                            </section>

                            {/* Digital Communication */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Digital Communication Best Practices</h2>

                                <p className="text-gray-700 mb-4">
                                    With 63% of couples texting daily (Pew Research), digital communication skills are essential. Follow these guidelines:
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Do's</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
                                            <li>Use emojis to convey tone (but not in serious conversations)</li>
                                            <li>Respond within a reasonable timeframe (establish expectations)</li>
                                            <li>Clarify ambiguous messages with follow-ups</li>
                                            <li>Use video calls for important conversations</li>
                                            <li>Send occasional positive messages without agenda</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Don'ts</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
                                            <li>Have arguments via text (wait for in-person or call)</li>
                                            <li>Overinterpret response times or punctuation</li>
                                            <li>Send important news without checking availability</li>
                                            <li>Use all caps or excessive punctuation!!!!</li>
                                            <li>Assume tone - when in doubt, ask for clarification</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                                    <h3 className="font-bold text-gray-900 mb-2">Pro Tip:</h3>
                                    <p className="text-gray-700">
                                        For sensitive topics, try the "Triple Send" method: 1) Write your message 2) Wait 30 minutes 3) Re-read before sending. This reduces regrettable messages by 78%.
                                    </p>
                                </div>
                            </section>

                            {/* Communication Exercises */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Practical Communication Exercises</h2>

                                <div className="space-y-6">
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Exercise 1: The Daily Check-In</h3>
                                        </div>
                                        <div className="p-4">
                                            <p className="text-gray-700 mb-3">
                                                <span className="font-semibold">Time:</span> 15-20 minutes daily
                                            </p>
                                            <p className="text-gray-700 mb-3">
                                                <span className="font-semibold">Steps:</span>
                                            </p>
                                            <ol className="list-decimal list-inside text-gray-700 space-y-1 pl-4">
                                                <li>Each person shares their emotional temperature (1-10)</li>
                                                <li>Take turns discussing one highlight and one challenge from your day</li>
                                                <li>Practice reflective listening ("What I hear you saying is...")</li>
                                                <li>End with appreciation for each other</li>
                                            </ol>
                                            <p className="text-gray-700 mt-3">
                                                <span className="font-semibold">Benefit:</span> Increases emotional connection and prevents small issues from accumulating.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Exercise 2: The Speaker-Listener Technique</h3>
                                        </div>
                                        <div className="p-4">
                                            <p className="text-gray-700 mb-3">
                                                <span className="font-semibold">Time:</span> 20-30 minutes as needed
                                            </p>
                                            <p className="text-gray-700 mb-3">
                                                <span className="font-semibold">Steps:</span>
                                            </p>
                                            <ol className="list-decimal list-inside text-gray-700 space-y-1 pl-4">
                                                <li>Choose a neutral object (like a book) as the "speaker's token"</li>
                                                <li>Only the person holding the token may speak</li>
                                                <li>Speaker shares thoughts without interruption</li>
                                                <li>Listener paraphrases what they heard before responding</li>
                                                <li>Switch roles by passing the token</li>
                                            </ol>
                                            <p className="text-gray-700 mt-3">
                                                <span className="font-semibold">Benefit:</span> Creates structured space for difficult conversations with reduced conflict.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Communication is a skill that improves with practice. While we're born with the ability to talk, effective communication requires conscious development. The most successful relationships view communication as an ongoing practice rather than an innate talent.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    Remember that even during misunderstandings, the goal isn't to win an argument but to understand each other better. As psychologist Carl Rogers said, "The major barrier to mutual interpersonal communication is our very natural tendency to judge, to evaluate, to approve or disapprove."
                                </p>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "Communication works for those who work at it. The single biggest problem in communication is the illusion that it has taken place." — John Powell
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
                                            Dr. Emily Parker, LMFT
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
                        <div className="bg-blue-50 rounded-lg p-6 mb-8">
                            <div className="mb-4">
                                <h3 className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-2">RELATIONSHIP NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get communication tips</h4>
                                <p className="text-gray-700 text-sm">
                                    Weekly exercises, research insights, and practical advice for healthier relationships.
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

                        {/* Popular Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Popular Resources</h3>
                            <div className="space-y-4">
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img 
                                                src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80" 
                                                alt="Active listening" 
                                                className="w-full h-full object-cover" 
                                            />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">The Active Listening Workbook</h4>
                                            <p className="text-sm text-gray-600">4.7 ★ (89 reviews)</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img 
                                                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80" 
                                                alt="Couples therapy" 
                                                className="w-full h-full object-cover" 
                                            />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Conflict Resolution Guide</h4>
                                            <p className="text-sm text-gray-600">4.9 ★ (142 reviews)</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Communication Styles Quiz */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">What's Your Communication Style?</h3>
                            <p className="text-gray-700 text-sm mb-4">
                                Take our 2-minute quiz to discover your primary communication style and how to adapt it for different relationships.
                            </p>
                            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                                Start Quiz
                            </button>
                        </div>

                        {/* Common Mistakes */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">5 Common Communication Mistakes</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <AlertCircle className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700">Assuming your partner knows what you need without expressing it</span>
                                </li>
                                <li className="flex items-start">
                                    <AlertCircle className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700">Bringing up past issues during current conflicts</span>
                                </li>
                                <li className="flex items-start">
                                    <AlertCircle className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700">Using absolute language ("You always...")</span>
                                </li>
                                <li className="flex items-start">
                                    <AlertCircle className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700">Focusing on being right rather than being understood</span>
                                </li>
                                <li className="flex items-start">
                                    <AlertCircle className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700">Neglecting to repair after misunderstandings</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}