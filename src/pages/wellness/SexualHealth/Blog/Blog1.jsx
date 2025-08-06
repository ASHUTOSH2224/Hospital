"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, Heart, Scale, Star, BookOpen, Shield, MessageSquare, Bookmark } from "lucide-react"

export default function SexualHealthEditorLetter() {
    const [email, setEmail] = useState("")
    const [activeTab, setActiveTab] = useState("Overview")
    const [isBookmarked, setIsBookmarked] = useState(false)

    const handleEmailSubmit = (e) => {
        e.preventDefault()
        console.log("Email submitted:", email)
        setEmail("")
    }

    const toggleBookmark = () => {
        setIsBookmarked(!isBookmarked)
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const tabs = ["Overview", "Relationships", "Wellness", "Resources"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <div className="flex justify-between items-start">
                                <div>
                                    <span className="inline-block px-3 py-1 text-sm font-semibold text-green-700 bg-green-100 rounded-full mb-4">
                                        Editorial
                                    </span>
                                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                        Welcome to Healthline Sexual Health: A Letter from the Editor
                                    </h1>
                                </div>
                                <button 
                                    onClick={toggleBookmark}
                                    className={`p-2 rounded-full ${isBookmarked ? 'text-yellow-500' : 'text-gray-400 hover:text-gray-600'}`}
                                >
                                    <Bookmark className="w-6 h-6" fill={isBookmarked ? "currentColor" : "none"} />
                                </button>
                            </div>

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
                                <span className="mx-2">•</span>
                                <span className="text-sm">5 min read</span>
                                <span className="mx-2">•</span>
                                <span className="text-sm">All Levels</span>
                            </div>

                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                Sexual health isn't just about avoiding problems. It's about understanding your body, building healthy relationships, and maintaining overall wellness throughout your life. As your guide through this journey, I want to share what makes sexual health so vital to your wellbeing.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=500&fit=crop"
                                    alt="Happy couple talking and holding hands"
                                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                                    style={{ maxHeight: '500px' }}
                                />
                                <p className="text-sm text-gray-500 mt-2">Photo credit: Unsplash</p>
                            </div>

                            {/* Key Takeaways */}
                            <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-8">
                                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                    <Star className="w-5 h-5 text-purple-600 mr-2" />
                                    Key Takeaways
                                </h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>Sexual health encompasses physical, emotional, and social wellbeing</li>
                                    <li>Open communication is the foundation of healthy sexual relationships</li>
                                    <li>Regular check-ups and safe practices prevent long-term health issues</li>
                                    <li>Education reduces stigma and empowers individuals</li>
                                    <li>Sexual wellbeing changes throughout life and requires ongoing attention</li>
                                </ul>
                            </div>

                            {/* Why Sexual Health Matters */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Heart className="w-8 h-8 text-purple-600 mr-2" />
                                    Why Sexual Health Matters More Than You Think
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Sexual health is a fundamental aspect of human life that affects our physical health, mental wellbeing, relationships, and even our social connections. According to the <a href="#" className="text-blue-600 hover:underline">World Health Organization</a>, sexual health requires:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>A positive and respectful approach to sexuality and sexual relationships</li>
                                    <li>The possibility of having pleasurable and safe sexual experiences</li>
                                    <li>Freedom from coercion, discrimination, and violence</li>
                                    <li>Access to comprehensive sexual health care and education</li>
                                </ul>

                                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">By The Numbers: Sexual Health Statistics</h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <p className="text-3xl font-bold text-purple-600 mb-1">45%</p>
                                            <p className="text-gray-700">of adults report that sexual health significantly impacts their overall quality of life</p>
                                        </div>
                                        <div>
                                            <p className="text-3xl font-bold text-purple-600 mb-1">1 in 3</p>
                                            <p className="text-gray-700">women and 1 in 5 men experience sexual health issues they're uncomfortable discussing</p>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-gray-700 mb-4">
                                    The benefits of good sexual health extend far beyond the bedroom. Research shows that individuals with positive sexual wellbeing:
                                </p>

                                <div className="grid md:grid-cols-3 gap-4 mb-6">
                                    <div className="bg-purple-50 p-4 rounded-lg">
                                        <h4 className="font-bold text-gray-900 mb-1">Physical Health</h4>
                                        <p className="text-gray-700 text-sm">Lower blood pressure, reduced pain, stronger immunity</p>
                                    </div>
                                    <div className="bg-purple-50 p-4 rounded-lg">
                                        <h4 className="font-bold text-gray-900 mb-1">Mental Health</h4>
                                        <p className="text-gray-700 text-sm">Reduced stress, better sleep, improved self-esteem</p>
                                    </div>
                                    <div className="bg-purple-50 p-4 rounded-lg">
                                        <h4 className="font-bold text-gray-900 mb-1">Relationships</h4>
                                        <p className="text-gray-700 text-sm">Stronger emotional bonds, better communication, increased satisfaction</p>
                                    </div>
                                </div>
                            </section>

                            {/* Breaking Down Barriers */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Breaking Down Barriers to Sexual Health</h2>

                                <p className="text-gray-700 mb-6">
                                    Despite its importance, sexual health remains one of the most stigmatized and misunderstood aspects of healthcare. Many people struggle to discuss it openly or seek help when needed. Let's examine the most common barriers:
                                </p>

                                {/* Barriers Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Barrier</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prevalence</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Solutions</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 font-medium text-gray-900">Cultural/Religious Taboos</td>
                                                <td className="px-4 py-3">62% report discomfort discussing</td>
                                                <td className="px-4 py-3">Community education, faith-based dialogues</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 font-medium text-gray-900">Lack of Education</td>
                                                <td className="px-4 py-3">Only 38% receive comprehensive sex ed</td>
                                                <td className="px-4 py-3">School programs, online resources</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 font-medium text-gray-900">Healthcare Access</td>
                                                <td className="px-4 py-3">1 in 4 lack access to sexual healthcare</td>
                                                <td className="px-4 py-3">Telemedicine, community clinics</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 font-medium text-gray-900">Shame/Embarrassment</td>
                                                <td className="px-4 py-3">57% avoid discussing concerns</td>
                                                <td className="px-4 py-3">Normalization campaigns, anonymous services</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Editor's Note:</h3>
                                    <p className="text-gray-700">
                                        "I've seen firsthand how breaking these barriers transforms lives. One patient waited 10 years to discuss painful intercourse because she thought it was 'normal.' After treatment, she told me, 'I didn't realize how much this was affecting my marriage and self-worth until it was gone.'"
                                    </p>
                                </div>
                            </section>

                            {/* Life Stages Section */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Sexual Health Through Life Stages</h2>

                                <p className="text-gray-700 mb-6">
                                    Your sexual health needs evolve throughout your life. Here's what to focus on at different stages:
                                </p>

                                <div className="space-y-6">
                                    {/* Adolescence */}
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-purple-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Adolescence (13-19)</h3>
                                        </div>
                                        <div className="p-4">
                                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                                <li>Understanding bodily changes and puberty</li>
                                                <li>Developing healthy attitudes about sexuality</li>
                                                <li>Learning about consent and boundaries</li>
                                                <li>Preventing STIs and unplanned pregnancy</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Young Adulthood */}
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-purple-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Young Adulthood (20-39)</h3>
                                        </div>
                                        <div className="p-4">
                                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                                <li>Establishing healthy sexual relationships</li>
                                                <li>Family planning and reproductive choices</li>
                                                <li>Balancing sexual health with overall wellness</li>
                                                <li>Navigating communication with partners</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Middle Age */}
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-purple-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Middle Age (40-64)</h3>
                                        </div>
                                        <div className="p-4">
                                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                                <li>Managing hormonal changes (menopause/andropause)</li>
                                                <li>Addressing age-related sexual function changes</li>
                                                <li>Maintaining intimacy in long-term relationships</li>
                                                <li>Preventing sexual health complications</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Older Adults */}
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-purple-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Older Adults (65+)</h3>
                                        </div>
                                        <div className="p-4">
                                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                                <li>Adapting to physical limitations</li>
                                                <li>Understanding medication impacts</li>
                                                <li>Navigating new relationships later in life</li>
                                                <li>Maintaining emotional intimacy</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Communication Guide */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">The Communication Guide for Healthy Relationships</h2>

                                <p className="text-gray-700 mb-4">
                                    Open, honest communication is the cornerstone of sexual health. Whether with partners or healthcare providers, these strategies can help:
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">With Partners</h3>
                                        <ol className="list-decimal list-inside text-gray-700 space-y-2">
                                            <li>Choose comfortable, private settings for discussions</li>
                                            <li>Use "I" statements ("I feel...", "I need...")</li>
                                            <li>Discuss boundaries, desires, and concerns openly</li>
                                            <li>Practice active listening without judgment</li>
                                            <li>Schedule regular check-ins about your sexual relationship</li>
                                        </ol>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">With Healthcare Providers</h3>
                                        <ol className="list-decimal list-inside text-gray-700 space-y-2">
                                            <li>Prepare questions in advance</li>
                                            <li>Be honest about your history and concerns</li>
                                            <li>Ask for clarification if you don't understand</li>
                                            <li>Request privacy/confidentiality assurances</li>
                                            <li>Don't hesitate to seek a second opinion</li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="bg-purple-50 p-4 rounded-lg mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Conversation Starters</h3>
                                    <p className="text-gray-700 mb-2">
                                        If you're unsure how to begin a difficult conversation, try these:
                                    </p>
                                    <ul className="list-disc list-inside text-gray-700 ml-4">
                                        <li>"I've been reading about ______ and wanted to get your thoughts..."</li>
                                        <li>"I'm not entirely comfortable discussing this, but it's important to me..."</li>
                                        <li>"Can we set aside time to talk about our sexual relationship?"</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts from the Editor</h2>

                                <p className="text-gray-700 mb-4">
                                    Sexual health is a journey, not a destination. It's normal to have questions, concerns, and evolving needs throughout your life. What matters most is that you have access to accurate information, compassionate care, and supportive relationships.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    In this section of Healthline, we're committed to providing evidence-based, inclusive, and judgment-free information. Whether you're looking for answers about sexual function, relationships, reproductive health, or anything in between - we're here for you.
                                </p>

                                <div className="bg-purple-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium italic">
                                        "Remember: Your sexual health is an important part of your overall wellbeing. You deserve information, care, and relationships that support your health and happiness at every stage of life."
                                    </p>
                                </div>
                            </section>

                            {/* Comments/Engagement */}
                            <section className="mb-12">
                                <div className="flex items-center justify-between mb-4">
                                    <h2 className="text-2xl font-bold text-gray-900">Join the Conversation</h2>
                                    <button className="flex items-center text-purple-600 hover:text-purple-800">
                                        <MessageSquare className="w-5 h-5 mr-1" />
                                        <span>24 Comments</span>
                                    </button>
                                </div>
                                <textarea 
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent mb-2"
                                    placeholder="Share your thoughts..."
                                    rows="3"
                                ></textarea>
                                <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200">
                                    Post Comment
                                </button>
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
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">Dr. Emily Sanders</h3>
                                    <p className="text-sm text-gray-600 mb-1">Sexual Health Specialist</p>
                                    <p className="text-sm text-gray-600">15+ years of clinical experience</p>
                                </div>
                            </div>
                            <p className="text-sm text-gray-700">
                                Dr. Sanders is board-certified in obstetrics and gynecology with additional training in sexual medicine. She serves as Healthline's Sexual Health Editor-in-Chief.
                            </p>
                        </div>

                        {/* Newsletter Signup */}
                        <div className="bg-purple-50 rounded-lg p-6 mb-8">
                            <div className="mb-4">
                                <h3 className="text-sm font-bold text-purple-800 uppercase tracking-wide mb-2">HEALTHLINE NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get our sexual wellness newsletter</h4>
                                <p className="text-gray-700 text-sm">
                                    Expert advice, personal stories, and reliable information delivered weekly.
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

                        {/* Popular Articles */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                <BookOpen className="w-5 h-5 text-purple-600 mr-2" />
                                Popular Articles
                            </h3>
                            <div className="space-y-4">
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="https://images.unsplash.com/photo-1517185508443-8a6c4a6a30b7?w=200&h=200&fit=crop" alt="Couple talking" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors">How to Talk About Sexual Health With Your Partner</h4>
                                            <p className="text-sm text-gray-600">8 min read</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="https://images.unsplash.com/photo-1573497491765-dccce02b29df?w=200&h=200&fit=crop" alt="Doctor with patient" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors">What to Expect at Your First Sexual Health Exam</h4>
                                            <p className="text-sm text-gray-600">6 min read</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=200&h=200&fit=crop" alt="Senior couple" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors">Maintaining Intimacy as You Age</h4>
                                            <p className="text-sm text-gray-600">7 min read</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Quick Resources */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                <Shield className="w-5 h-5 text-purple-600 mr-2" />
                                Quick Resources
                            </h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-purple-600 hover:underline flex items-center">
                                        <span className="bg-purple-100 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center mr-2">1</span>
                                        National Sexual Health Hotline
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-purple-600 hover:underline flex items-center">
                                        <span className="bg-purple-100 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center mr-2">2</span>
                                        Find a Certified Provider
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-purple-600 hover:underline flex items-center">
                                        <span className="bg-purple-100 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center mr-2">3</span>
                                        Sexual Health FAQs
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-purple-600 hover:underline flex items-center">
                                        <span className="bg-purple-100 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center mr-2">4</span>
                                        Relationship Counseling Services
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Fact Check */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Fact Check</h3>
                            <p className="text-sm text-gray-700 mb-4">
                                This article was reviewed by our medical review board for accuracy. All information is based on current scientific evidence and clinical practice guidelines.
                            </p>
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                                    <User className="w-5 h-5 text-gray-600" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-900">Reviewed by:</p>
                                    <p className="text-sm text-gray-600">Dr. Michael Chen, MD</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}