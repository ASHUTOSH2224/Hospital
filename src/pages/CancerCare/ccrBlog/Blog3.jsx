"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, Heart, Users, Phone, MessageSquare, Shield, HandHeart, LifeBuoy } from "lucide-react"

export default function BuildingSupportNetwork() {
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

    const tabs = ["Overview", "Types of Support", "Finding Resources", "Communication Tips"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Building Your Support Network During Cancer Treatment
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
                                A strong support network is crucial for navigating the challenges of cancer treatment. This comprehensive guide will help you identify different types of support, connect with valuable resources, and communicate effectively with your loved ones and healthcare team.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                                    alt="Group of diverse people holding hands in support"
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
                                    <li>Multiple types of support (emotional, practical, informational) are needed</li>
                                    <li>Support groups can reduce feelings of isolation by up to 60%</li>
                                    <li>Clear communication about your needs is essential</li>
                                    <li>Professional counseling benefits 85% of cancer patients</li>
                                    <li>Online communities provide 24/7 access to peer support</li>
                                </ul>
                            </div>

                            {/* Why Support Networks Matter */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Users className="w-8 h-8 text-blue-600 mr-2" />
                                    Why a Strong Support Network Matters
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Research from the American Cancer Society shows that patients with strong support systems experience better treatment outcomes, including:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>25% higher treatment adherence rates</li>
                                    <li>30% reduction in depression symptoms</li>
                                    <li>20% improvement in quality of life scores</li>
                                    <li>15% lower reported pain levels</li>
                                </ul>

                                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">The Support Paradox</h3>
                                    <p className="text-gray-700">
                                        While 92% of cancer patients say support is crucial, only 58% actively seek it. Many hesitate due to fear of burdening others or not knowing where to find help.
                                    </p>
                                </div>
                            </section>

                            {/* Types of Support Networks */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Check className="w-8 h-8 text-blue-600 mr-2" />
                                    Types of Support Networks
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Different situations call for different types of support. Here's a breakdown of the main categories and their benefits:
                                </p>

                                {/* Support Types Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Examples</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Best For</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">When to Access</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            {/* Row 1 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Emotional Support</td>
                                                <td className="px-4 py-3">Family, friends, support groups, therapists</td>
                                                <td className="px-4 py-3">Processing feelings, reducing isolation</td>
                                                <td className="px-4 py-3">Throughout treatment, especially during difficult news</td>
                                            </tr>
                                            {/* Row 2 */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Practical Support</td>
                                                <td className="px-4 py-3">Meal trains, transportation help, childcare</td>
                                                <td className="px-4 py-3">Managing daily tasks when energy is low</td>
                                                <td className="px-4 py-3">During treatment weeks, recovery periods</td>
                                            </tr>
                                            {/* Row 3 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Informational Support</td>
                                                <td className="px-4 py-3">Oncologists, nurses, patient navigators</td>
                                                <td className="px-4 py-3">Understanding treatment options, side effects</td>
                                                <td className="px-4 py-3">Before appointments, when making decisions</td>
                                            </tr>
                                            {/* Row 4 */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Spiritual Support</td>
                                                <td className="px-4 py-3">Chaplains, faith communities, meditation groups</td>
                                                <td className="px-4 py-3">Finding meaning, coping with mortality</td>
                                                <td className="px-4 py-3">During existential questions, end-of-life care</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                {/* Support Network Diagram */}
                                <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Your Support Network Ecosystem</h3>
                                    <div className="flex flex-wrap justify-center gap-4">
                                        {/* Inner Circle */}
                                        <div className="bg-blue-50 p-4 rounded-full w-32 h-32 flex flex-col items-center justify-center border-2 border-blue-200">
                                            <Users className="w-6 h-6 text-blue-600 mb-2" />
                                            <span className="text-sm font-medium text-center">Immediate Family</span>
                                        </div>
                                        {/* Middle Circle */}
                                        <div className="bg-purple-50 p-4 rounded-full w-40 h-40 flex flex-col items-center justify-center border-2 border-purple-200 -mt-4">
                                            <Heart className="w-6 h-6 text-purple-600 mb-2" />
                                            <span className="text-sm font-medium text-center">Close Friends</span>
                                        </div>
                                        {/* Outer Circle */}
                                        <div className="bg-green-50 p-4 rounded-full w-48 h-48 flex flex-col items-center justify-center border-2 border-green-200 -mt-8">
                                            <MessageSquare className="w-6 h-6 text-green-600 mb-2" />
                                            <span className="text-sm font-medium text-center">Support Groups</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap justify-center gap-4 mt-4">
                                        <div className="bg-yellow-50 p-3 rounded-lg flex items-center">
                                            <Phone className="w-5 h-5 text-yellow-600 mr-2" />
                                            <span className="text-sm">Healthcare Team</span>
                                        </div>
                                        <div className="bg-red-50 p-3 rounded-lg flex items-center">
                                            <Shield className="w-5 h-5 text-red-600 mr-2" />
                                            <span className="text-sm">Online Communities</span>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Finding Support Resources */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <LifeBuoy className="w-8 h-8 text-blue-600 mr-2" />
                                    Finding Support Resources
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Quality support is available through multiple channels. Here are the most effective ways to connect with the help you need:
                                </p>

                                {/* Resource Cards */}
                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-xl text-gray-900 mb-3 flex items-center">
                                            <HandHeart className="w-6 h-6 text-blue-600 mr-2" />
                                            Hospital-Based Programs
                                        </h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                                            <li>Patient navigators (available at 78% of cancer centers)</li>
                                            <li>On-site support groups (both general and cancer-specific)</li>
                                            <li>Social workers for practical assistance</li>
                                            <li>Integrative therapy programs (art, music, yoga)</li>
                                        </ul>
                                        <div className="mt-4 p-3 bg-white rounded-lg">
                                            <p className="text-sm font-medium text-gray-700">
                                                <span className="font-bold">Tip:</span> Ask your oncologist for a "psychosocial assessment" - this is a covered benefit under most insurance plans.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
                                        <h3 className="font-bold text-xl text-gray-900 mb-3 flex items-center">
                                            <Users className="w-6 h-6 text-purple-600 mr-2" />
                                            Community Organizations
                                        </h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                                            <li>American Cancer Society (800-227-2345)</li>
                                            <li>CancerCare (800-813-4673)</li>
                                            <li>Local chapters of national organizations</li>
                                            <li>Faith-based support networks</li>
                                        </ul>
                                        <div className="mt-4 p-3 bg-white rounded-lg">
                                            <p className="text-sm font-medium text-gray-700">
                                                <span className="font-bold">Did You Know?</span> Many organizations offer free transportation to treatment and financial assistance.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Online Resources */}
                                <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Online Support Options</h3>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full">
                                            <thead>
                                                <tr className="border-b border-gray-200">
                                                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Platform</th>
                                                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Features</th>
                                                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Best For</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200">
                                                <tr>
                                                    <td className="px-4 py-3 font-medium">Inspire.com</td>
                                                    <td className="px-4 py-3">Disease-specific communities, verified members</td>
                                                    <td className="px-4 py-3">Connecting with similar patients</td>
                                                </tr>
                                                <tr className="bg-gray-50">
                                                    <td className="px-4 py-3 font-medium">CancerForums.net</td>
                                                    <td className="px-4 py-3">Anonymous discussions, wide range of topics</td>
                                                    <td className="px-4 py-3">Sensitive questions</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3 font-medium">MyLifeLine.org</td>
                                                    <td className="px-4 py-3">Care coordination, updates for loved ones</td>
                                                    <td className="px-4 py-3">Reducing update fatigue</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </section>

                            {/* Communication Strategies */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Effective Communication Strategies</h2>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Asking for Help</h3>
                                        <p className="text-gray-700 mb-4">
                                            Many patients struggle with asking for assistance. Try these approaches:
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                                            <li>Be specific ("Could you drive me to chemo on Tuesday?")</li>
                                            <li>Assign a coordinator (often a friend or relative)</li>
                                            <li>Use tools like MealTrain.com for scheduling meals</li>
                                            <li>Remember that helping makes supporters feel useful</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Setting Boundaries</h3>
                                        <p className="text-gray-700 mb-4">
                                            Protect your energy with these techniques:
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                                            <li>Create visiting hours for your home</li>
                                            <li>Designate a communication point person</li>
                                            <li>Prepare polite exit phrases ("I need to rest now")</li>
                                            <li>It's okay to say no to well-meaning but draining visitors</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Conversation Starters */}
                                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Helpful Phrases</h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <p className="text-gray-700 font-medium mb-1">When you need space:</p>
                                            <p className="text-gray-600 text-sm">"I appreciate your concern, but I need some quiet time right now."</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-700 font-medium mb-1">When you need help:</p>
                                            <p className="text-gray-600 text-sm">"Would you be available to pick up my prescriptions this week?"</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Building Long-Term Support */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Building Long-Term Support</h2>

                                <div className="space-y-6">
                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-xl text-gray-900 mb-3">1. Create a Support Plan</h3>
                                        <p className="text-gray-700 mb-2">
                                            Just like your treatment plan, your support needs will evolve. Consider:
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                                            <li>Current needs vs. anticipated future needs</li>
                                            <li>Backup supporters for when primary helpers aren't available</li>
                                            <li>Professional support options for specialized needs</li>
                                        </ul>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-xl text-gray-900 mb-3">2. Nurture Your Relationships</h3>
                                        <p className="text-gray-700 mb-2">
                                            Support networks work both ways. When possible:
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                                            <li>Express gratitude to your supporters</li>
                                            <li>Share good moments along with the hard ones</li>
                                            <li>Find small ways to reciprocate (a note, a smile)</li>
                                        </ul>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-xl text-gray-900 mb-3">3. Transitioning After Treatment</h3>
                                        <p className="text-gray-700">
                                            Many patients experience a "support cliff" when active treatment ends. Plan for:
                                        </p>
                                        <div className="bg-white p-3 rounded-lg mt-3">
                                            <p className="text-sm text-gray-700 font-medium">
                                                "Join a survivorship program - 64% of cancer centers now offer transition support for life after treatment."
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Building your support network isn't a sign of weakness—it's a strategic part of your treatment. The patients who fare best are those who recognize that cancer is not a journey to take alone.
                                </p>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "Your support team is like a mosaic—each person brings different strengths. Some will make you laugh, others will research treatments, some will sit quietly with you. All are valuable."
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
                                            Dr. Emily Parker, Oncology Social Worker
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600 mb-1">
                                        — Written by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            Sarah Johnson
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

                        {/* Crisis Resources */}
                        <div className="bg-red-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                <LifeBuoy className="w-5 h-5 text-red-600 mr-2" />
                                Immediate Help Resources
                            </h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-red-600 hover:underline font-medium flex items-center">
                                        <Phone className="w-4 h-4 mr-2" />
                                        National Suicide Prevention Lifeline: 988
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-red-600 hover:underline font-medium flex items-center">
                                        <Phone className="w-4 h-4 mr-2" />
                                        Cancer Support Helpline: 888-793-9355
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-red-600 hover:underline font-medium flex items-center">
                                        <Phone className="w-4 h-4 mr-2" />
                                        Crisis Text Line: Text HOME to 741741
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Newsletter Signup */}
                        <div className="bg-blue-50 rounded-lg p-6 mb-8">
                            <div className="mb-4">
                                <h3 className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-2">SUPPORT NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get cancer support resources</h4>
                                <p className="text-gray-700 text-sm">
                                    Monthly updates on support groups, coping strategies, and caregiver resources.
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

                        {/* Support Group Finder */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Find Local Support Groups</h3>
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="zipcode" className="block text-sm font-medium text-gray-700 mb-1">Zip Code</label>
                                    <input
                                        type="text"
                                        id="zipcode"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                                        placeholder="Enter your zip code"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="cancer-type" className="block text-sm font-medium text-gray-700 mb-1">Cancer Type</label>
                                    <select id="cancer-type" className="w-full px-4 py-2 border border-gray-300 rounded-lg">
                                        <option>Any</option>
                                        <option>Breast Cancer</option>
                                        <option>Prostate Cancer</option>
                                        <option>Lung Cancer</option>
                                        <option>Colorectal Cancer</option>
                                        <option>Leukemia</option>
                                    </select>
                                </div>
                                <button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg">
                                    Search Groups
                                </button>
                            </div>
                        </div>

                        {/* Recommended Books */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Recommended Books</h3>
                            <div className="space-y-4">
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/book1.jpg" alt="Book cover" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">The Cancer Support Network Handbook</h4>
                                            <p className="text-sm text-gray-600">by Dr. Lisa Thompson</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/book2.jpg" alt="Book cover" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Communicating Through Cancer</h4>
                                            <p className="text-sm text-gray-600">by Michael Harris</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}