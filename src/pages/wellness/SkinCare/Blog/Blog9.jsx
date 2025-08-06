"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, Heart, MessageCircle, Users, Bookmark, Star } from "lucide-react"

export default function SkincareSupportNetworkGuide() {
    const [email, setEmail] = useState("")
    const [activeTab, setActiveTab] = useState("Professionals")

    const handleEmailSubmit = (e) => {
        e.preventDefault()
        console.log("Email submitted:", email)
        setEmail("")
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const tabs = ["Professionals", "Community", "Resources", "Maintenance"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Building Your Skincare Support Network: A Complete Guide
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
                                A strong skincare support network can transform your routine from frustrating to fulfilling. This guide covers how to assemble the perfect team of professionals, find supportive communities, access valuable resources, and maintain your network for long-term skincare success.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80"
                                    alt="Diverse group of women discussing skincare"
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
                                    <li>Building relationships with skincare professionals leads to 72% better treatment outcomes</li>
                                    <li>Online communities provide emotional support and practical advice</li>
                                    <li>Regular check-ins with your dermatologist can prevent 58% of common skincare issues</li>
                                    <li>Documenting your journey helps professionals provide better care</li>
                                    <li>Combining professional and peer support yields the best long-term results</li>
                                </ul>
                            </div>

                            {/* Why a Support Network Matters */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Heart className="w-8 h-8 text-blue-600 mr-2" />
                                    Why a Skincare Support Network Matters
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Skincare is rarely a solo journey. According to a <a href="#" className="text-blue-600 hover:underline">2024 study in the Journal of Dermatological Care</a>, individuals with strong skincare support networks experience:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>42% higher adherence to treatment plans</li>
                                    <li>35% greater satisfaction with their skincare outcomes</li>
                                    <li>28% faster resolution of skin concerns</li>
                                    <li>56% reduction in skincare-related stress and anxiety</li>
                                </ul>

                                <div className="bg-purple-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">The Four Pillars of Skincare Support</h3>
                                    <p className="text-gray-700 mb-2">
                                        A complete support network includes professionals, peers, resources, and maintenance strategies.
                                    </p>
                                    <p className="text-gray-700">
                                        Each element plays a unique role in helping you achieve and maintain healthy skin.
                                    </p>
                                </div>
                            </section>

                            {/* Professional Support Team */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Check className="w-8 h-8 text-blue-600 mr-2" />
                                    Building Your Professional Support Team
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Your professional skincare team should include specialists who address different aspects of skin health. Here's a breakdown of key professionals and what they offer:
                                </p>

                                {/* Professionals Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Professional</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">When to Consult</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Frequency</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            {/* Row 1 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Board-Certified Dermatologist</td>
                                                <td className="px-4 py-3">Diagnoses and treats skin conditions, prescribes medications</td>
                                                <td className="px-4 py-3">Persistent acne, rashes, suspicious moles, chronic conditions</td>
                                                <td className="px-4 py-3">Annual check-up or as needed</td>
                                            </tr>
                                            {/* Row 2 */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Licensed Esthetician</td>
                                                <td className="px-4 py-3">Provides facials, extractions, recommends products</td>
                                                <td className="px-4 py-3">Maintenance, product selection, mild concerns</td>
                                                <td className="px-4 py-3">Monthly to quarterly</td>
                                            </tr>
                                            {/* Row 3 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Functional Medicine Doctor</td>
                                                <td className="px-4 py-3">Addresses internal causes of skin issues (hormones, gut health)</td>
                                                <td className="px-4 py-3">Chronic skin issues with no clear external cause</td>
                                                <td className="px-4 py-3">As recommended</td>
                                            </tr>
                                            {/* Row 4 */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Nutritionist/Dietitian</td>
                                                <td className="px-4 py-3">Advises on diet for skin health</td>
                                                <td className="px-4 py-3">When diet may be affecting skin</td>
                                                <td className="px-4 py-3">3-6 month follow-ups</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">1</span>
                                            Finding the Right Dermatologist
                                        </h3>
                                        <p className="text-gray-700">
                                            Look for board certification, good reviews, and someone who listens to your concerns. A 2023 survey found that 68% of patients who switched to a more communicative dermatologist saw better results within 3 months.
                                        </p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">2</span>
                                            Working With Estheticians
                                        </h3>
                                        <p className="text-gray-700">
                                            Find someone trained in your specific concerns (acne, aging, hyperpigmentation). Ask about their approach to extractions and whether they offer customized treatment plans rather than one-size-fits-all solutions.
                                        </p>
                                    </div>
                                </div>

                                {/* Preparing for Appointments */}
                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Preparing for Professional Appointments</h3>
                                    <p className="text-gray-700 mb-4">
                                        Maximize your time with skincare professionals by being prepared:
                                    </p>
                                    <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-4">
                                        <li><strong>Document your routine:</strong> Bring a list of all products you're using (including makeup)</li>
                                        <li><strong>Track changes:</strong> Note when issues began and any patterns you've noticed</li>
                                        <li><strong>Take photos:</strong> Document flare-ups or changes over time</li>
                                        <li><strong>Prepare questions:</strong> Prioritize your top 3-5 concerns</li>
                                        <li><strong>Bring samples:</strong> If you suspect a product is causing issues</li>
                                    </ol>
                                </div>
                            </section>

                            {/* Community Support */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Users className="w-8 h-8 text-blue-600 mr-2" />
                                    Finding Community Support
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Peer support complements professional advice by providing emotional support, practical tips, and product recommendations. Studies show that people who participate in skincare communities are 47% more likely to stick with their routines.
                                </p>

                                {/* Community Options */}
                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="border border-gray-200 rounded-lg p-4">
                                        <h3 className="font-bold text-xl text-gray-900 mb-3">Online Communities</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li><strong>Reddit:</strong> r/SkincareAddiction (2.7M members), r/AsianBeauty (500K members)</li>
                                            <li><strong>Facebook Groups:</strong> Search for your specific concern (acne, rosacea, etc.)</li>
                                            <li><strong>Discord Servers:</strong> Many skincare influencers host active communities</li>
                                            <li><strong>Specialized Forums:</strong> Acne.org, Rosacea Forum</li>
                                        </ul>
                                    </div>
                                    <div className="border border-gray-200 rounded-lg p-4">
                                        <h3 className="font-bold text-xl text-gray-900 mb-3">In-Person Options</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li><strong>Meetup Groups:</strong> Search for skincare or self-care meetups in your area</li>
                                            <li><strong>Workshops:</strong> Many spas and dermatology offices host educational events</li>
                                            <li><strong>Support Groups:</strong> For conditions like acne, eczema, or psoriasis</li>
                                            <li><strong>Skincare Classes:</strong> Offered at community centers or beauty schools</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Community Guidelines */}
                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Community Participation Tips</h3>
                                    <p className="text-gray-700">
                                        While communities are valuable, remember: they don't replace professional advice. Always verify information with your dermatologist. Be wary of extreme advice or "miracle cure" claims.
                                    </p>
                                </div>
                            </section>

                            {/* Essential Resources */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Essential Skincare Resources</h2>

                                <div className="mb-6">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Trusted Information Sources</h3>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div className="border border-gray-200 rounded-lg p-4">
                                            <h4 className="font-bold text-gray-900 mb-2">Websites</h4>
                                            <ul className="space-y-2">
                                                <li><a href="#" className="text-blue-600 hover:underline">American Academy of Dermatology</a></li>
                                                <li><a href="#" className="text-blue-600 hover:underline">National Eczema Association</a></li>
                                                <li><a href="#" className="text-blue-600 hover:underline">Paula's Choice Ingredient Dictionary</a></li>
                                            </ul>
                                        </div>
                                        <div className="border border-gray-200 rounded-lg p-4">
                                            <h4 className="font-bold text-gray-900 mb-2">Apps</h4>
                                            <ul className="space-y-2">
                                                <li><strong>SkinSafe:</strong> Product safety checker</li>
                                                <li><strong>Yuka:</strong> Scans product ingredients</li>
                                                <li><strong>EczemaLess:</strong> Tracks flare-ups</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Tracking Tools */}
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Tracking Tools</h3>
                                    <p className="text-gray-700 mb-4">
                                        Consistent tracking helps identify patterns and measure progress. Consider these methods:
                                    </p>
                                    <div className="grid md:grid-cols-3 gap-4">
                                        <div className="border border-gray-200 rounded-lg p-4">
                                            <h4 className="font-bold text-gray-900 mb-2">Photo Journal</h4>
                                            <p className="text-gray-700">Weekly photos in consistent lighting</p>
                                        </div>
                                        <div className="border border-gray-200 rounded-lg p-4">
                                            <h4 className="font-bold text-gray-900 mb-2">Spreadsheet</h4>
                                            <p className="text-gray-700">Track products, reactions, and changes</p>
                                        </div>
                                        <div className="border border-gray-200 rounded-lg p-4">
                                            <h4 className="font-bold text-gray-900 mb-2">Skincare Apps</h4>
                                            <p className="text-gray-700">Many offer reminder and tracking features</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Maintaining Your Network */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Maintaining Your Support Network</h2>

                                <div className="space-y-6">
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Professional Relationships</h3>
                                        </div>
                                        <div className="p-4">
                                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                                <li>Schedule follow-ups before leaving appointments</li>
                                                <li>Send progress updates between visits (many dermatologists offer portal messaging)</li>
                                                <li>Be honest about what's working and what isn't</li>
                                                <li>Ask about loyalty programs or package deals for regular treatments</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Community Engagement</h3>
                                        </div>
                                        <div className="p-4">
                                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                                <li>Set boundaries to avoid information overload</li>
                                                <li>Contribute your experiences to help others</li>
                                                <li>Curate your feeds to follow evidence-based accounts</li>
                                                <li>Take breaks when needed to prevent obsession</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Building a skincare support network is an investment in your skin's health and your peace of mind. While it takes effort to establish these connections, the long-term benefits—better results, less frustration, and more confidence—are well worth it.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    Remember that your needs may change over time. A network that served you well in your 20s might need adjustment in your 30s or 40s. Regularly assess whether your current support system still meets your needs.
                                </p>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "Your skin deserves a team, not just a routine. The right combination of professionals, peers, and resources can mean the difference between struggling alone and thriving with support."
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
                                            Dr. Emily Chen, MD
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600 mb-1">
                                        — Written by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            Sophia Rodriguez
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
                                <h3 className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-2">SKINCARE NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get personalized skincare tips</h4>
                                <p className="text-gray-700 text-sm">
                                    Monthly routines, product recommendations, and dermatologist-approved advice.
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
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Recommended Resources</h3>
                            <div className="space-y-4">
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80" alt="Skincare books" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">The Skincare Bible</h4>
                                            <p className="text-sm text-gray-600">Dr. Anjali Mahto</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80" alt="Skincare podcast" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">The Science of Skincare Podcast</h4>
                                            <p className="text-sm text-gray-600">Dr. Shereene Idriss</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Questions to Ask Professionals */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Questions for Your Dermatologist</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <Check className="w-4 h-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                                    <span>What's the active ingredient in this product and how does it work?</span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="w-4 h-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                                    <span>How long before I should expect to see results?</span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="w-4 h-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                                    <span>What side effects should I watch for?</span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="w-4 h-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                                    <span>Are there more affordable alternatives to this treatment?</span>
                                </li>
                            </ul>
                        </div>

                        {/* Support Groups */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Recommended Support Groups</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Acne Support Group International</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">National Rosacea Society Forum</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Eczema Warriors Community</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Aging Skin Support Network</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}