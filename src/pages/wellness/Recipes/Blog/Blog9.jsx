"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, Users, BookOpen, MessageSquare, Heart, Star, ChevronRight } from "lucide-react"

export default function CulinarySupportNetworkGuide() {
    const [email, setEmail] = useState("")
    const [activeTab, setActiveTab] = useState("Mentors")

    const handleEmailSubmit = (e) => {
        e.preventDefault()
        console.log("Email submitted:", email)
        setEmail("")
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const tabs = ["Mentors", "Communities", "Resources", "Events"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Building Your Culinary Support Network: The Complete Guide
                            </h1>

                            {/* Navigation Tabs */}
                            <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-200">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${activeTab === tab
                                            ? "border-orange-500 text-orange-600"
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
                                <span className="text-sm">Updated on July 15, 2024</span>
                            </div>

                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                A strong culinary support network can transform your cooking journey from solitary struggle to collaborative success. Whether you're a home cook or aspiring chef, building relationships with mentors, peers, and professionals accelerates learning, provides motivation, and opens doors to new opportunities.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://krghospitality.com/wp-content/uploads/2024/07/MicrosoftDesigner_AIGeneratedImage_ChefLeadingATeamMeeting.jpeg"
                                    alt="Chef leading a team meeting in a professional kitchen"
                                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                                    style={{ maxHeight: '500px' }}
                                />
                            </div>

                            {/* Key Takeaways */}
                            <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-8">
                                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                    <Star className="w-5 h-5 text-orange-600 mr-2" />
                                    Key Takeaways
                                </h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>Professional mentors can reduce learning time by 40% compared to self-study</li>
                                    <li>Community participation increases long-term cooking consistency by 3x</li>
                                    <li>Nutritionists help align cooking with health goals for 89% of home cooks</li>
                                    <li>Local cooking classes build skills 2.5x faster than online-only learning</li>
                                    <li>Diverse networks expose you to 5x more culinary techniques and cuisines</li>
                                </ul>
                            </div>

                            {/* Why a Support Network Matters */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Users className="w-8 h-8 text-orange-600 mr-2" />
                                    Why a Culinary Support Network Matters
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Cooking is often viewed as a solitary activity, but research shows that social support significantly impacts culinary skill development. A <a href="#" className="text-blue-600 hover:underline">2023 study in the Journal of Culinary Education</a> found that cooks with strong support networks:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>Mastered techniques 37% faster than isolated learners</li>
                                    <li>Were 2.8x more likely to overcome cooking frustrations</li>
                                    <li>Expanded their recipe repertoire by 4x within a year</li>
                                    <li>Maintained cooking habits long-term (83% vs 29% for solo learners)</li>
                                </ul>

                                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">The 4 Pillars of Culinary Support</h3>
                                    <p className="text-gray-700 mb-2">
                                        <span className="font-semibold">1. Mentors</span> - Professional guidance for skill development
                                    </p>
                                    <p className="text-gray-700 mb-2">
                                        <span className="font-semibold">2. Peers</span> - Community for motivation and idea exchange
                                    </p>
                                    <p className="text-gray-700 mb-2">
                                        <span className="font-semibold">3. Resources</span> - Reliable information sources and tools
                                    </p>
                                    <p className="text-gray-700">
                                        <span className="font-semibold">4. Events</span> - Hands-on learning and networking opportunities
                                    </p>
                                </div>
                            </section>

                            {/* Finding Culinary Mentors */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Check className="w-8 h-8 text-orange-600 mr-2" />
                                    Finding and Working With Culinary Mentors
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Mentors provide personalized feedback, accelerate your learning curve, and help navigate culinary challenges. Here's how to find and collaborate with them effectively:
                                </p>

                                {/* Mentors Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mentor Type</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Where to Find</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Benefits</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Commitment</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Professional Chef</td>
                                                <td className="px-4 py-3">Cooking schools, restaurants, culinary events</td>
                                                <td className="px-4 py-3">Industry insights, advanced techniques</td>
                                                <td className="px-4 py-3">Weekly/monthly sessions</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Nutritionist</td>
                                                <td className="px-4 py-3">Health clinics, wellness centers, online platforms</td>
                                                <td className="px-4 py-3">Meal planning, dietary adjustments</td>
                                                <td className="px-4 py-3">Monthly consultations</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Experienced Home Cook</td>
                                                <td className="px-4 py-3">Cooking clubs, community centers, social media</td>
                                                <td className="px-4 py-3">Practical tips, recipe sharing</td>
                                                <td className="px-4 py-3">Casual, as-needed</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Specialty Instructor</td>
                                                <td className="px-4 py-3">Workshops, cultural organizations, online courses</td>
                                                <td className="px-4 py-3">Cuisine-specific expertise</td>
                                                <td className="px-4 py-3">Short-term programs</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-orange-50 p-4 rounded-lg border border-orange-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-orange-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">1</span>
                                            How to Approach Potential Mentors
                                        </h3>
                                        <ol className="list-decimal list-inside text-gray-700 space-y-1">
                                            <li>Start with specific questions (not "teach me everything")</li>
                                            <li>Offer value in return (assistant work, social media promotion)</li>
                                            <li>Respect their time - propose clear, limited engagements first</li>
                                            <li>Follow up with gratitude and progress updates</li>
                                        </ol>
                                    </div>
                                    <div className="bg-orange-50 p-4 rounded-lg border border-orange-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-orange-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">2</span>
                                            Maximizing Mentor Relationships
                                        </h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>Prepare specific questions before each meeting</li>
                                            <li>Record sessions (with permission) for review</li>
                                            <li>Implement feedback and report back on results</li>
                                            <li>Gradually increase complexity of your questions</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Building Your Peer Community */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Users className="w-8 h-8 text-orange-600 mr-2" />
                                    Building Your Peer Community
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Fellow cooking enthusiasts provide motivation, recipe ideas, and constructive feedback. Here are the most effective types of culinary communities:
                                </p>

                                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                                    <div className="grid md:grid-cols-3 gap-4 text-center font-medium mb-2">
                                        <div>Community Type</div>
                                        <div>Best For</div>
                                        <div>Activity Level</div>
                                    </div>
                                    <div className="grid md:grid-cols-3 gap-4 text-center mb-1">
                                        <div className="font-medium">Local Cooking Clubs</div>
                                        <div>Hands-on practice, in-person networking</div>
                                        <div>Monthly meetings</div>
                                    </div>
                                    <div className="grid md:grid-cols-3 gap-4 text-center mb-1 bg-orange-50 p-1 rounded">
                                        <div className="font-medium">Online Forums</div>
                                        <div>24/7 access, global perspectives</div>
                                        <div>Daily interactions</div>
                                    </div>
                                    <div className="grid md:grid-cols-3 gap-4 text-center mb-1">
                                        <div className="font-medium">Social Media Groups</div>
                                        <div>Visual inspiration, quick tips</div>
                                        <div>Weekly engagement</div>
                                    </div>
                                    <div className="grid md:grid-cols-3 gap-4 text-center">
                                        <div className="font-medium">Workplace Groups</div>
                                        <div>Lunch swaps, potlucks</div>
                                        <div>Bi-weekly activities</div>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Starting Your Own Cooking Group</h3>
                                <p className="text-gray-700 mb-4">
                                    Can't find the right community? Create your own with these steps:
                                </p>

                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 mt-1 mr-3 bg-orange-100 rounded-full p-1">
                                            <ChevronRight className="w-4 h-4 text-orange-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900">Define Your Focus</h4>
                                            <p className="text-gray-700">
                                                Choose a specific niche (budget cooking, vegan baking, international cuisines) to attract like-minded members.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 mt-1 mr-3 bg-orange-100 rounded-full p-1">
                                            <ChevronRight className="w-4 h-4 text-orange-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900">Set Clear Expectations</h4>
                                            <p className="text-gray-700">
                                                Establish frequency, format (in-person/online), and participation requirements upfront.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 mt-1 mr-3 bg-orange-100 rounded-full p-1">
                                            <ChevronRight className="w-4 h-4 text-orange-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900">Create Value</h4>
                                            <p className="text-gray-700">
                                                Offer exclusive content (recipes, vendor discounts) to maintain engagement.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 mt-1 mr-3 bg-orange-100 rounded-full p-1">
                                            <ChevronRight className="w-4 h-4 text-orange-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900">Delegate Responsibilities</h4>
                                            <p className="text-gray-700">
                                                Share leadership roles to prevent burnout and increase investment from members.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Essential Resources */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <BookOpen className="w-8 h-8 text-orange-600 mr-2" />
                                    Essential Resources for Your Network
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Curate these resources to support your culinary journey and share with your network:
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-orange-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Learning Platforms</h3>
                                        </div>
                                        <div className="p-4">
                                            <ul className="space-y-3">
                                                <li className="flex items-start">
                                                    <Check className="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                                                    <span className="text-gray-700">MasterClass (celebrity chef courses)</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <Check className="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                                                    <span className="text-gray-700">Coursera (food science programs)</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <Check className="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                                                    <span className="text-gray-700">YouTube channels (free technique videos)</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-orange-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Reference Materials</h3>
                                        </div>
                                        <div className="p-4">
                                            <ul className="space-y-3">
                                                <li className="flex items-start">
                                                    <Check className="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                                                    <span className="text-gray-700">The Flavor Bible (ingredient pairing guide)</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <Check className="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                                                    <span className="text-gray-700">On Food and Cooking (science reference)</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <Check className="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                                                    <span className="text-gray-700">Local library cooking section</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Pro Tip:</h3>
                                    <p className="text-gray-700">
                                        Create a shared Google Drive or Notion page with your cooking group to collect recipes, technique notes, and supplier recommendations. Rotate curation duties monthly.
                                    </p>
                                </div>
                            </section>

                            {/* Networking Events */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Culinary Networking Events</h2>

                                <p className="text-gray-700 mb-6">
                                    Attend these events to expand your network and skills simultaneously:
                                </p>

                                <div className="space-y-6">
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-orange-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Local Events</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Farmers Market Cooking Demos</h4>
                                                <p className="text-gray-700">Meet chefs and producers while learning seasonal cooking</p>
                                            </div>
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Restaurant Industry Nights</h4>
                                                <p className="text-gray-700">Networking with professionals during off-hours</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">Library Cooking Workshops</h4>
                                                <p className="text-gray-700">Free/low-cost skill-building sessions</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-orange-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Major Conferences</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">International Association of Culinary Professionals</h4>
                                                <p className="text-gray-700">Annual conference with workshops and networking</p>
                                            </div>
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Food Bloggers Conferences</h4>
                                                <p className="text-gray-700">For those building online culinary presence</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">Specialty Food Fairs</h4>
                                                <p className="text-gray-700">Discover new ingredients and connect with producers</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Building a culinary support network transforms cooking from a chore to a joyful, social experience. The connections you make will not only improve your skills but also deepen your appreciation for food as a means of connection and creativity.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    Remember that networks grow organically - start small with one mentor or group, then expand as your interests develop. The culinary world thrives on shared knowledge, and your unique perspective has value to contribute.
                                </p>

                                <div className="bg-orange-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "The best meals are those shared with others, and the same is true of culinary knowledge. Your network will become your most valuable kitchen tool."
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
                                            Chef Marcus Wellings
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600 mb-1">
                                        — Written by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            Emily Carter
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600 flex items-center gap-1">
                                        — <Calendar className="w-3 h-3" />
                                        <a href="#" className="text-blue-600 hover:underline">
                                            Updated on July 15, 2024
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Newsletter Signup */}
                        <div className="bg-orange-50 rounded-lg p-6 mb-8">
                            <div className="mb-4">
                                <h3 className="text-sm font-bold text-orange-800 uppercase tracking-wide mb-2">CULINARY NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get cooking community tips</h4>
                                <p className="text-gray-700 text-sm">
                                    Monthly guides to finding mentors, building skills, and connecting with fellow food enthusiasts.
                                </p>
                            </div>

                            <form onSubmit={handleEmailSubmit} className="space-y-4">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200"
                                >
                                    SUBSCRIBE
                                </button>
                            </form>

                            <p className="text-xs text-gray-600 mt-3">
                                Your{" "}
                                <a href="#" className="text-orange-600 hover:underline">
                                    privacy
                                </a>{" "}
                                is important to us
                            </p>
                        </div>

                        {/* Popular Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Recommended Culinary Communities</h3>
                            <div className="space-y-4">
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/community1.jpg" alt="Chef teaching class" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-orange-600 transition-colors">Culinary Mentors Collective</h4>
                                            <p className="text-sm text-gray-600">4.9 ★ (86 reviews)</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/community2.jpg" alt="Online cooking group" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-orange-600 transition-colors">Global Home Cooks Network</h4>
                                            <p className="text-sm text-gray-600">12,000+ members</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Find Support Near You</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span className="font-medium">Mentors:</span>
                                    <a href="#" className="text-orange-600 hover:underline">Local chef directories</a>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Classes:</span>
                                    <a href="#" className="text-orange-600 hover:underline">Community education listings</a>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Suppliers:</span>
                                    <a href="#" className="text-orange-600 hover:underline">Farmers market schedules</a>
                                </div>
                                <div className="flex justify-between">
                                    <span>Events:</span>
                                    <a href="#" className="text-orange-600 hover:underline">Culinary event calendars</a>
                                </div>
                            </div>
                        </div>

                        {/* Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Further Reading</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-orange-600 hover:underline">The Science of Effective Mentorship</a>
                                </li>
                                <li>
                                    <a href="#" className="text-orange-600 hover:underline">Building Online Communities</a>
                                </li>
                                <li>
                                    <a href="#" className="text-orange-600 hover:underline">Nutritionist vs Dietitian: Who to Consult</a>
                                </li>
                                <li>
                                    <a href="#" className="text-orange-600 hover:underline">Hosting Successful Cooking Gatherings</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}