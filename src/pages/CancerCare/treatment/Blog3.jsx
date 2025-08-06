"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, HeartPulse, Pill, Shield, Bookmark, MessageSquare, Share2 } from "lucide-react"

export default function CancerTreatmentGuide() {
    const [email, setEmail] = useState("")
    const [activeTab, setActiveTab] = useState("Treatment")
    const [bookmarked, setBookmarked] = useState(false)

    const handleEmailSubmit = (e) => {
        e.preventDefault()
        console.log("Email submitted:", email)
        setEmail("")
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const tabs = ["Treatment", "Side Effects", "Emotional", "Resources"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Navigating Cancer Treatment: A Patient's Perspective
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
                                Cancer treatment is a journey filled with challenges, uncertainties, and moments of resilience. As someone who has walked this path, I want to share practical advice and emotional support to help others navigate their treatment with more confidence and less fear.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=500&fit=crop"
                                    alt="Cancer patient holding hands with caregiver"
                                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                                    style={{ maxHeight: '500px' }}
                                />
                            </div>

                            {/* Key Takeaways */}
                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
                                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                    <HeartPulse className="w-5 h-5 text-blue-600 mr-2" />
                                    Key Takeaways
                                </h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>Treatment schedules can be overwhelming - organization is key</li>
                                    <li>Side effects vary widely - track them to help your care team adjust</li>
                                    <li>Emotional health is as important as physical health during treatment</li>
                                    <li>Building a support network makes the journey more manageable</li>
                                    <li>Every patient's experience is unique - what works for one may not work for another</li>
                                </ul>
                            </div>

                            {/* Understanding Treatment Options */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Pill className="w-8 h-8 text-blue-600 mr-2" />
                                    Understanding Treatment Options
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    When I was first diagnosed, the array of treatment options felt overwhelming. Through my journey and conversations with other survivors, I've learned that understanding these options is the first step toward feeling empowered in your care.
                                </p>

                                <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Common Cancer Treatments</h3>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th className="px-4 py-2 text-left">Treatment</th>
                                                    <th className="px-4 py-2 text-left">Purpose</th>
                                                    <th className="px-4 py-2 text-left">Typical Duration</th>
                                                    <th className="px-4 py-2 text-left">What to Expect</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200">
                                                <tr>
                                                    <td className="px-4 py-2 font-medium">Chemotherapy</td>
                                                    <td className="px-4 py-2">Kill cancer cells</td>
                                                    <td className="px-4 py-2">3-6 months (varies)</td>
                                                    <td className="px-4 py-2">Cycles with recovery periods</td>
                                                </tr>
                                                <tr className="bg-gray-50">
                                                    <td className="px-4 py-2 font-medium">Radiation</td>
                                                    <td className="px-4 py-2">Target specific areas</td>
                                                    <td className="px-4 py-2">2-8 weeks</td>
                                                    <td className="px-4 py-2">Daily sessions (Mon-Fri)</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-2 font-medium">Immunotherapy</td>
                                                    <td className="px-4 py-2">Boost immune system</td>
                                                    <td className="px-4 py-2">Varies widely</td>
                                                    <td className="px-4 py-2">IV infusions every 2-4 weeks</td>
                                                </tr>
                                                <tr className="bg-gray-50">
                                                    <td className="px-4 py-2 font-medium">Surgery</td>
                                                    <td className="px-4 py-2">Remove tumors</td>
                                                    <td className="px-4 py-2">Single procedure</td>
                                                    <td className="px-4 py-2">Recovery time needed</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <p className="text-gray-700 mb-6">
                                    In my case, I underwent a combination of chemotherapy and radiation. The first round of chemo was the hardest—I didn't know what to expect and felt completely unprepared for the side effects. By the second round, I had developed coping strategies that made the process more manageable.
                                </p>

                                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Questions to Ask Your Oncologist</h3>
                                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                                        <li>What is the goal of this treatment? (Cure, control, or comfort)</li>
                                        <li>What are the most common side effects and how are they managed?</li>
                                        <li>How will we know if the treatment is working?</li>
                                        <li>What are the alternative treatment options?</li>
                                        <li>How will this treatment affect my daily life and work?</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Managing Treatment Schedules */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Managing Treatment Schedules</h2>

                                <p className="text-gray-700 mb-4">
                                    Cancer treatment often involves a complex schedule of appointments, medications, and tests. Staying organized became crucial for maintaining my sanity during this chaotic time.
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Tools That Helped Me</h3>
                                        <ol className="list-decimal list-inside text-gray-700 space-y-2">
                                            <li><strong>Dedicated calendar:</strong> Color-coded for different types of appointments</li>
                                            <li><strong>Medication tracker:</strong> Spreadsheet with times, doses, and side effects</li>
                                            <li><strong>Treatment journal:</strong> Notes about how I felt each day</li>
                                            <li><strong>Phone reminders:</strong> For medications and hydration</li>
                                        </ol>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Sample Weekly Schedule</h3>
                                        <div className="bg-white border border-gray-200 rounded-lg p-3">
                                            <div className="grid grid-cols-7 gap-1 text-xs text-center mb-1 font-medium">
                                                <div className="p-1">Mon</div>
                                                <div className="p-1">Tue</div>
                                                <div className="p-1">Wed</div>
                                                <div className="p-1">Thu</div>
                                                <div className="p-1">Fri</div>
                                                <div className="p-1">Sat</div>
                                                <div className="p-1">Sun</div>
                                            </div>
                                            <div className="grid grid-cols-7 gap-1 text-xs text-center">
                                                <div className="bg-blue-100 p-2 rounded">Chemo</div>
                                                <div className="bg-red-100 p-2 rounded">Rest</div>
                                                <div className="bg-yellow-100 p-2 rounded">Labs</div>
                                                <div className="bg-green-100 p-2 rounded">PT</div>
                                                <div className="bg-blue-100 p-2 rounded">Radiation</div>
                                                <div className="bg-purple-100 p-2 rounded">Support Group</div>
                                                <div className="bg-gray-100 p-2 rounded">Family Day</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Pro Tip:</h3>
                                    <p className="text-gray-700">
                                        Designate one person (a partner, friend, or family member) as your "schedule coordinator" to help manage appointments and reminders. This reduces mental load during treatment when cognitive function may be affected.
                                    </p>
                                </div>
                            </section>

                            {/* Side Effects Management */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Shield className="w-8 h-8 text-blue-600 mr-2" />
                                    Side Effects Management
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Side effects can range from mild to severe and vary dramatically between patients. Below is a comprehensive guide to common side effects and strategies that helped me and other survivors I've connected with.
                                </p>

                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left">Side Effect</th>
                                                <th className="px-4 py-3 text-left">Prevention</th>
                                                <th className="px-4 py-3 text-left">Management</th>
                                                <th className="px-4 py-3 text-left">When to Call Doctor</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 font-medium">Nausea</td>
                                                <td className="px-4 py-3">Anti-nausea meds before treatment</td>
                                                <td className="px-4 py-3">Ginger tea, small frequent meals</td>
                                                <td className="px-4 py-3">Can't keep liquids down</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 font-medium">Fatigue</td>
                                                <td className="px-4 py-3">Light exercise when possible</td>
                                                <td className="px-4 py-3">Short naps, energy conservation</td>
                                                <td className="px-4 py-3">Difficulty breathing</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 font-medium">Neuropathy</td>
                                                <td className="px-4 py-3">Compression gloves/socks</td>
                                                <td className="px-4 py-3">Warm compresses, massage</td>
                                                <td className="px-4 py-3">Loss of mobility</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Unexpected Side Effects</h3>
                                        <p className="text-gray-700 mb-2">
                                            Some side effects surprised me, like changes in taste (metallic taste was common) and "chemo brain" - cognitive fog that made simple tasks difficult.
                                        </p>
                                        <p className="text-gray-700">
                                            For taste changes, I found that using plastic utensils instead of metal helped, and experimenting with different temperatures and textures of food made eating more manageable.
                                        </p>
                                    </div>
                                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Emotional Side Effects</h3>
                                        <p className="text-gray-700 mb-2">
                                            Anxiety and depression are common but often overlooked. I benefited greatly from joining a support group specifically for patients undergoing similar treatments.
                                        </p>
                                        <p className="text-gray-700">
                                            Many cancer centers offer free counseling services - don't hesitate to ask about mental health support.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Emotional Well-being */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Emotional Well-being During Treatment</h2>

                                <p className="text-gray-700 mb-6">
                                    The emotional rollercoaster of cancer treatment is often as challenging as the physical aspects. Here's what I learned about maintaining mental health during this difficult time.
                                </p>

                                <div className="space-y-6">
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Coping Strategies That Worked</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900 mb-2">1. Mindfulness and Meditation</h4>
                                                <p className="text-gray-700">
                                                    Even 5 minutes of guided meditation helped calm my anxiety before treatments. Many cancer centers offer free meditation classes.
                                                </p>
                                            </div>
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900 mb-2">2. Creative Expression</h4>
                                                <p className="text-gray-700">
                                                    Journaling, art therapy, or music provided emotional outlets when words failed me.
                                                </p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900 mb-2">3. Setting Small Goals</h4>
                                                <p className="text-gray-700">
                                                    On tough days, my goal might simply be to shower or walk to the mailbox. Celebrating these small victories helped maintain motivation.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">What Not to Say to Cancer Patients</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900 mb-2">Instead of:</h4>
                                                <p className="text-gray-700 italic mb-1">
                                                    "Everything happens for a reason."
                                                </p>
                                                <h4 className="font-medium text-gray-900 mb-2">Try:</h4>
                                                <p className="text-gray-700">
                                                    "I'm here for you no matter what."
                                                </p>
                                            </div>
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900 mb-2">Instead of:</h4>
                                                <p className="text-gray-700 italic mb-1">
                                                    "You're so brave/strong."
                                                </p>
                                                <h4 className="font-medium text-gray-900 mb-2">Try:</h4>
                                                <p className="text-gray-700">
                                                    "It's okay to not feel strong."
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Building Your Support System */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Building Your Support System</h2>

                                <p className="text-gray-700 mb-4">
                                    No one should go through cancer treatment alone. Building a strong support network made all the difference in my journey.
                                </p>

                                <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Types of Support to Consider</h3>
                                    <div className="grid md:grid-cols-3 gap-4">
                                        <div className="bg-blue-50 p-3 rounded">
                                            <h4 className="font-bold text-gray-900 mb-1">Medical Team</h4>
                                            <p className="text-gray-700 text-sm">Oncologists, nurses, social workers</p>
                                        </div>
                                        <div className="bg-blue-50 p-3 rounded">
                                            <h4 className="font-bold text-gray-900 mb-1">Personal Network</h4>
                                            <p className="text-gray-700 text-sm">Family, friends, coworkers</p>
                                        </div>
                                        <div className="bg-blue-50 p-3 rounded">
                                            <h4 className="font-bold text-gray-900 mb-1">Peer Support</h4>
                                            <p className="text-gray-700 text-sm">Support groups, survivor mentors</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">Practical Help People Can Offer</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Meal trains or grocery delivery</li>
                                            <li>Rides to appointments</li>
                                            <li>Childcare or pet care</li>
                                            <li>Help with insurance paperwork</li>
                                            <li>House cleaning or laundry</li>
                                        </ul>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">Online Support Communities</h3>
                                        <p className="text-gray-700 mb-2">
                                            When I couldn't attend in-person groups, these online communities were invaluable:
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>CancerCare Connect</li>
                                            <li>American Cancer Society Cancer Survivors Network</li>
                                            <li>Disease-specific Facebook groups (moderated by professionals)</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Looking back on my cancer journey, the most important lesson I learned was to be patient and compassionate with myself. Treatment is not linear—there will be good days and bad days, and that's completely normal.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    Remember that you are more than your diagnosis. Cancer may be a chapter in your life, but it doesn't define your whole story. The resilience you discover in yourself during this time may surprise you.
                                </p>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "Take it one day at a time, one treatment at a time. Celebrate small victories, allow yourself to feel all the emotions, and know that even on the hardest days, you're still moving forward."
                                    </p>
                                </div>
                            </section>

                            {/* Action Buttons */}
                            <div className="flex flex-wrap gap-4 mb-12">
                                <button 
                                    onClick={() => setBookmarked(!bookmarked)}
                                    className={`flex items-center px-4 py-2 rounded-lg ${bookmarked ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-700'}`}
                                >
                                    <Bookmark className="w-5 h-5 mr-2" />
                                    {bookmarked ? 'Bookmarked' : 'Bookmark'}
                                </button>
                                <button className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg">
                                    <MessageSquare className="w-5 h-5 mr-2" />
                                    Leave Comment
                                </button>
                                <button className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg">
                                    <Share2 className="w-5 h-5 mr-2" />
                                    Share
                                </button>
                            </div>
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
                                            Patient perspective
                                        </a>{" "}
                                        by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            Sarah Thompson
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600 mb-1">
                                        — Breast cancer survivor (diagnosed 2021)
                                    </p>
                                    <p className="text-sm text-gray-600 flex items-center gap-1">
                                        — <Calendar className="w-3 h-3" />
                                        <a href="#" className="text-blue-600 hover:underline">
                                            Updated on June 15, 2024
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <p className="text-sm text-gray-700">
                                Sarah is a patient advocate who shares her cancer journey to help others navigate treatment with more confidence and less fear.
                            </p>
                        </div>

                        {/* Newsletter Signup */}
                        <div className="bg-blue-50 rounded-lg p-6 mb-8">
                            <div className="mb-4">
                                <h3 className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-2">CARE NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get cancer support resources</h4>
                                <p className="text-gray-700 text-sm">
                                    Weekly coping strategies, survivor stories, and practical advice for patients and caregivers.
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

                        {/* Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Essential Resources</h3>
                            <div className="space-y-4">
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/resource1.jpg" alt="Support group" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Finding Local Support Groups</h4>
                                            <p className="text-sm text-gray-600">American Cancer Society</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/resource2.jpg" alt="Financial help" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Financial Assistance Programs</h4>
                                            <p className="text-sm text-gray-600">Cancer Financial Aid Coalition</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Links</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-center">
                                        <HeartPulse className="w-4 h-4 mr-2" />
                                        Managing Treatment Side Effects
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-center">
                                        <Shield className="w-4 h-4 mr-2" />
                                        Questions to Ask Your Oncologist
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-center">
                                        <User className="w-4 h-4 mr-2" />
                                        Caregiver Support Resources
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Emergency Contacts */}
                        <div className="bg-white border border-red-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Emergency Contacts</h3>
                            <ul className="space-y-3">
                                <li>
                                    <p className="font-medium">National Cancer Institute</p>
                                    <p className="text-sm text-gray-600">1-800-4-CANCER</p>
                                </li>
                                <li>
                                    <p className="font-medium">Crisis Text Line</p>
                                    <p className="text-sm text-gray-600">Text HOME to 741741</p>
                                </li>
                                <li>
                                    <p className="font-medium">Poison Control</p>
                                    <p className="text-sm text-gray-600">1-800-222-1222</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}