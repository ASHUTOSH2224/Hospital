"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, Moon, HeartPulse, Users, MessageSquare, BookOpen, Star, Shield } from "lucide-react"

export default function SleepHealthSupportNetwork() {
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

    const tabs = ["Professionals", "Community", "Resources", "Tools"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Building Your Sleep Health Support Network
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
                                A strong support network is crucial for improving sleep health. Discover how to create a comprehensive system with sleep specialists, coaches, fellow sleep enthusiasts, and community resources to optimize your sleep journey and overcome challenges effectively.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80"
                                    alt="Person sleeping peacefully with support network concept"
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
                                    <li>Sleep specialists can diagnose and treat over 80 sleep disorders</li>
                                    <li>Peer support groups improve sleep outcomes by 40% compared to going alone</li>
                                    <li>Digital sleep communities provide 24/7 access to advice and encouragement</li>
                                    <li>Combining professional and peer support leads to best long-term results</li>
                                    <li>Sleep tracking apps help identify patterns to discuss with your support team</li>
                                </ul>
                            </div>

                            {/* Why Sleep Support Matters */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Moon className="w-8 h-8 text-blue-600 mr-2" />
                                    The Critical Role of Sleep Support Networks
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Sleep health is often overlooked as an individual challenge, but research shows that social support significantly impacts sleep quality. A <a href="#" className="text-blue-600 hover:underline">2023 study in Sleep Medicine</a> found that individuals with strong sleep support networks:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>Fell asleep 28% faster than those without support</li>
                                    <li>Experienced 35% fewer nighttime awakenings</li>
                                    <li>Reported higher sleep satisfaction (4.2 vs 2.8 on 5-point scale)</li>
                                    <li>Were more consistent with sleep hygiene practices</li>
                                </ul>

                                <div className="bg-purple-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">The 4 Pillars of Sleep Support</h3>
                                    <p className="text-gray-700 mb-2">
                                        Comprehensive sleep health requires multiple support types working together:
                                    </p>
                                    <ol className="list-decimal list-inside text-gray-700 space-y-1">
                                        <li><strong>Medical Professionals</strong> - For diagnosis and treatment</li>
                                        <li><strong>Coaches & Educators</strong> - For behavior change</li>
                                        <li><strong>Peer Communities</strong> - For shared experiences</li>
                                        <li><strong>Digital Tools</strong> - For tracking and reminders</li>
                                    </ol>
                                </div>
                            </section>

                            {/* Professional Support Options */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <HeartPulse className="w-8 h-8 text-blue-600 mr-2" />
                                    Professional Sleep Support Options
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Medical sleep professionals play a vital role in identifying and treating sleep disorders. Here's a comprehensive guide to building your professional support team:
                                </p>

                                {/* Professionals Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Specialist Type</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">When to Consult</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Services Provided</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Average Cost</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            {/* Row 1 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Sleep Physician</td>
                                                <td className="px-4 py-3">Chronic insomnia, sleep apnea, restless legs</td>
                                                <td className="px-4 py-3">Diagnosis, medical treatment, sleep studies</td>
                                                <td className="px-4 py-3 whitespace-nowrap">$200-$500/visit</td>
                                            </tr>
                                            {/* Row 2 */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Sleep Psychologist</td>
                                                <td className="px-4 py-3">Anxiety-related insomnia, circadian disorders</td>
                                                <td className="px-4 py-3">CBT for insomnia, behavior modification</td>
                                                <td className="px-4 py-3 whitespace-nowrap">$100-$250/session</td>
                                            </tr>
                                            {/* Row 3 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Sleep Coach</td>
                                                <td className="px-4 py-3">Mild sleep issues, habit formation</td>
                                                <td className="px-4 py-3">Personalized sleep plans, accountability</td>
                                                <td className="px-4 py-3 whitespace-nowrap">$50-$150/session</td>
                                            </tr>
                                            {/* Row 4 */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Dental Sleep Specialist</td>
                                                <td className="px-4 py-3">Sleep apnea, snoring</td>
                                                <td className="px-4 py-3">Oral appliances, airway evaluation</td>
                                                <td className="px-4 py-3 whitespace-nowrap">$300-$2000</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">1</span>
                                            Finding the Right Specialist
                                        </h3>
                                        <p className="text-gray-700">
                                            Look for board certification in sleep medicine (ABSM) or behavioral sleep medicine (BSM). The American Academy of Sleep Medicine maintains a <a href="#" className="text-blue-600 hover:underline">directory of accredited sleep centers</a>.
                                        </p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">2</span>
                                            Insurance Considerations
                                        </h3>
                                        <p className="text-gray-700">
                                            Most insurance plans cover sleep studies and consultations for diagnosed disorders. CBT-I is increasingly covered—check with your provider. Many coaches offer sliding scale fees.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Community Support */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Users className="w-8 h-8 text-blue-600 mr-2" />
                                    Building Your Sleep Community
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Peer support complements professional care by providing ongoing encouragement and practical tips. Studies show community support improves sleep program adherence by 65%.
                                </p>

                                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center font-medium mb-2">
                                        <div>Community Type</div>
                                        <div>Best For</div>
                                        <div>Where to Find</div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mb-1 border-b border-gray-200 pb-2">
                                        <div className="font-medium">Local Support Groups</div>
                                        <div>In-person connection, accountability</div>
                                        <div>Hospitals, community centers, Meetup.com</div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mb-1 border-b border-gray-200 pb-2 bg-blue-50 p-1 rounded">
                                        <div className="font-medium">Online Forums</div>
                                        <div>24/7 access, diverse experiences</div>
                                        <div>Reddit (r/sleep), SleepFoundation.org</div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mb-1 border-b border-gray-200 pb-2">
                                        <div className="font-medium">App-Based Communities</div>
                                        <div>Integrated with tracking tools</div>
                                        <div>SleepCycle, Rise, SleepTown</div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                                        <div className="font-medium">Condition-Specific</div>
                                        <div>Targeted advice</div>
                                        <div>Apnea forums, insomnia networks</div>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Creating Effective Sleep Partnerships</h3>
                                    <p className="text-gray-700 mb-4">
                                        Partner with others who share your sleep goals for mutual accountability:
                                    </p>
                                    <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-4">
                                        <li><strong>Sleep buddy system:</strong> Check in daily with goals and challenges</li>
                                        <li><strong>Bedtime challenges:</strong> Compete to maintain consistent bedtimes</li>
                                        <li><strong>Wind-down groups:</strong> Virtual gatherings before bedtime</li>
                                        <li><strong>Progress sharing:</strong> Celebrate milestones together</li>
                                    </ol>
                                </div>
                            </section>

                            {/* Digital Tools and Resources */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <MessageSquare className="w-8 h-8 text-blue-600 mr-2" />
                                    Digital Tools and Resources
                                </h2>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Sleep Tracking Apps</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li><strong>Sleep Cycle:</strong> Analyzes sleep patterns with smart alarms</li>
                                            <li><strong>Pillow:</strong> Detailed sleep stage tracking</li>
                                            <li><strong>SleepScore:</strong> Uses sonar technology (no wearables needed)</li>
                                            <li><strong>Oura Ring:</strong> Wearable with temperature and HRV tracking</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Educational Resources</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li><strong>SleepFoundation.org:</strong> Comprehensive guides</li>
                                            <li><strong>CBT-I Coach:</strong> Official app from VA for insomnia</li>
                                            <li><strong>Headspace Sleep:</strong> Meditations for sleep</li>
                                            <li><strong>Sleepio:</strong> Digital sleep improvement program</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Pro Tip:</h3>
                                    <p className="text-gray-700">
                                        Combine 2-3 digital tools that complement each other (e.g., tracker + education + community) for maximum benefit. Share data with your support team to spot patterns.
                                    </p>
                                </div>
                            </section>

                            {/* Creating Your Personalized Support Plan */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Creating Your Personalized Support Plan</h2>

                                <div className="space-y-6">
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Step 1: Assessment</h3>
                                        </div>
                                        <div className="p-4">
                                            <p className="text-gray-700 mb-2">
                                                Identify your specific sleep challenges and goals. Consider:
                                            </p>
                                            <ul className="list-disc list-inside text-gray-700 ml-4">
                                                <li>Sleep disorder diagnosis needs</li>
                                                <li>Behavioral change requirements</li>
                                                <li>Preferred support style (group vs individual)</li>
                                                <li>Budget and insurance coverage</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Step 2: Professional Consultation</h3>
                                        </div>
                                        <div className="p-4">
                                            <p className="text-gray-700 mb-2">
                                                Start with at least one professional evaluation:
                                            </p>
                                            <ol className="list-decimal list-inside text-gray-700 ml-4">
                                                <li>Primary care physician for initial screening</li>
                                                <li>Sleep specialist if red flags present</li>
                                                <li>Behavioral sleep specialist for insomnia</li>
                                            </ol>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Step 3: Build Your Network</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div>
                                                    <h4 className="font-medium text-gray-900 mb-2">Essential Contacts</h4>
                                                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                                                        <li>Sleep doctor contact</li>
                                                        <li>Sleep coach/therapist</li>
                                                        <li>Accountability partner</li>
                                                        <li>Emergency contact for bad nights</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4 className="font-medium text-gray-900 mb-2">Support Schedule</h4>
                                                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                                                        <li>Monthly check-ins with professionals</li>
                                                        <li>Weekly community participation</li>
                                                        <li>Daily tracking and reflection</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Overcoming Common Challenges */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Overcoming Support Network Challenges</h2>

                                <div className="space-y-4">
                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">Limited Access to Specialists</h3>
                                        <p className="text-gray-700 mb-2">
                                            Many areas have few sleep specialists, leading to long wait times.
                                        </p>
                                        <p className="text-gray-700">
                                            <span className="font-semibold">Solution:</span> Explore telemedicine options—many sleep doctors now offer virtual visits. The VA's CBT-I Coach app provides free insomnia treatment.
                                        </p>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">Cost Barriers</h3>
                                        <p className="text-gray-700 mb-2">
                                            Professional sleep help can be expensive without insurance coverage.
                                        </p>
                                        <p className="text-gray-700">
                                            <span className="font-semibold">Solution:</span> Look for university sleep clinics with sliding scale fees. Many sleep coaches offer group programs at lower costs.
                                        </p>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">Maintaining Motivation</h3>
                                        <p className="text-gray-700 mb-2">
                                            Sleep improvements take time, and it's easy to get discouraged.
                                        </p>
                                        <p className="text-gray-700">
                                            <span className="font-semibold">Solution:</span> Create a "sleep victory jar" to note small wins. Schedule regular check-ins with your support team to stay accountable.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Building a comprehensive sleep support network is one of the most effective things you can do for your sleep health. Remember that quality sleep is a team effort—combining professional expertise, peer support, and smart tools creates the foundation for lasting improvement.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    Start small if needed—even adding one supportive element can make a difference. The key is consistency and being willing to adjust your network as your needs change.
                                </p>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "Think of your sleep support network like a symphony—each element plays a different but essential part in creating the harmony of restful nights and energized days."
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
                                            Dr. James Wilson, Sleep Neurologist
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600 mb-1">
                                        — Written by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            Sarah Thompson
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
                                <h3 className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-2">SLEEP NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get better sleep tips</h4>
                                <p className="text-gray-700 text-sm">
                                    Weekly sleep strategies, expert Q&As, and community support delivered to your inbox.
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
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Top Sleep Support Resources</h3>
                            <div className="space-y-4">
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80" alt="Sleep tracker app" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">SleepTracker Pro App</h4>
                                            <p className="text-sm text-gray-600">4.7 ★ (2,341 reviews)</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80" alt="Sleep book" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">"Why We Sleep" Book Club</h4>
                                            <p className="text-sm text-gray-600">5,200+ members</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Quick Sleep Tips */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Sleep Support Tips</h3>
                            <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                    <p className="text-gray-700">Keep a sleep log to share with your support team</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                    <p className="text-gray-700">Prepare questions before professional consultations</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                    <p className="text-gray-700">Set boundaries with those who disrupt your sleep schedule</p>
                                </div>
                            </div>
                        </div>

                        {/* Emergency Contacts */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Sleep Crisis Resources</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-start gap-2">
                                        <Shield className="w-5 h-5 flex-shrink-0" />
                                        <span>National Sleep Helpline: 1-800-SLEEP</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-start gap-2">
                                        <BookOpen className="w-5 h-5 flex-shrink-0" />
                                        <span>Emergency CBT-I Techniques PDF</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-start gap-2">
                                        <Users className="w-5 h-5 flex-shrink-0" />
                                        <span>24/7 Insomnia Support Chat</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}