"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, Smartphone, Brain, Shield, Zap, Clock, Star, BookOpen, Heart, Monitor, Moon } from "lucide-react"

export default function ManagingDigitalMentalHealth() {
    const [email, setEmail] = useState("")
    const [activeTab, setActiveTab] = useState("Apps")

    const handleEmailSubmit = (e) => {
        e.preventDefault()
        console.log("Email submitted:", email)
        setEmail("")
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const tabs = ["Apps", "Online Therapy", "Tech Habits", "Research"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Managing Digital Mental Health: Apps, Online Therapy, and Tech Wellness
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
                                In our hyper-connected world, digital tools offer unprecedented access to mental health support while also presenting new challenges. This comprehensive guide explores how to effectively use mental health apps, access online therapy, set digital boundaries, and maintain healthy tech habits for optimal psychological well-being.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80"
                                    alt="Person using smartphone with mental health app"
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
                                    <li>Mental health apps can supplement care but shouldn't replace professional treatment</li>
                                    <li>Online therapy is 30-40% more affordable than traditional therapy with comparable outcomes</li>
                                    <li>Digital detox practices can reduce anxiety and improve sleep quality by 58%</li>
                                    <li>Blue light exposure after 8pm can delay melatonin production by 3 hours</li>
                                    <li>Mindful tech use correlates with 23% lower stress levels</li>
                                </ul>
                            </div>

                            {/* The Digital Mental Health Landscape */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Smartphone className="w-8 h-8 text-blue-600 mr-2" />
                                    The Digital Mental Health Landscape
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    The global digital mental health market is projected to reach $17.5 billion by 2027, growing at 24.3% annually. This explosion of digital mental health solutions offers both opportunities and challenges:
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-sm">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <Check className="w-5 h-5 text-green-500 mr-2" />
                                            Benefits
                                        </h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1 pl-2">
                                            <li>24/7 access to support tools</li>
                                            <li>Reduced stigma of seeking help</li>
                                            <li>Lower cost than traditional therapy</li>
                                            <li>Personalized self-help resources</li>
                                            <li>Anonymity for sensitive issues</li>
                                        </ul>
                                    </div>
                                    <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-sm">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <Shield className="w-5 h-5 text-red-500 mr-2" />
                                            Risks
                                        </h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1 pl-2">
                                            <li>Variable quality and evidence base</li>
                                            <li>Privacy and data security concerns</li>
                                            <li>Over-reliance on self-diagnosis</li>
                                            <li>Potential for digital addiction</li>
                                            <li>Lack of human connection</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-purple-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Digital Mental Health Adoption Statistics (2024)</h3>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                                        <div className="bg-white p-3 rounded shadow-sm">
                                            <p className="text-2xl font-bold text-purple-600">42%</p>
                                            <p className="text-sm">Adults using mental health apps</p>
                                        </div>
                                        <div className="bg-white p-3 rounded shadow-sm">
                                            <p className="text-2xl font-bold text-purple-600">67%</p>
                                            <p className="text-sm">Therapists offering online sessions</p>
                                        </div>
                                        <div className="bg-white p-3 rounded shadow-sm">
                                            <p className="text-2xl font-bold text-purple-600">58%</p>
                                            <p className="text-sm">Users report improved symptoms</p>
                                        </div>
                                        <div className="bg-white p-3 rounded shadow-sm">
                                            <p className="text-2xl font-bold text-purple-600">29%</p>
                                            <p className="text-sm">Concerned about data privacy</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Mental Health Apps */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Smartphone className="w-8 h-8 text-blue-600 mr-2" />
                                    Mental Health Apps: A Comprehensive Guide
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    With over 20,000 mental health apps available, choosing effective, evidence-based options is crucial. Below is our curated list of top-rated apps across key categories:
                                </p>

                                {/* Apps Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Top App</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cost</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Evidence Base</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Best For</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Meditation</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Headspace</td>
                                                <td className="px-4 py-3 whitespace-nowrap">$12.99/mo</td>
                                                <td className="px-4 py-3">14 peer-reviewed studies</td>
                                                <td className="px-4 py-3">Beginners, stress reduction</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">CBT Therapy</td>
                                                <td className="px-4 py-3 whitespace-nowrap">MoodTools</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Free</td>
                                                <td className="px-4 py-3">CBT principles</td>
                                                <td className="px-4 py-3">Depression management</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Anxiety</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Sanvello</td>
                                                <td className="px-4 py-3 whitespace-nowrap">$8.99/mo</td>
                                                <td className="px-4 py-3">Clinically validated</td>
                                                <td className="px-4 py-3">Anxiety & stress</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Sleep</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Sleep Cycle</td>
                                                <td className="px-4 py-3 whitespace-nowrap">$29.99/yr</td>
                                                <td className="px-4 py-3">Sleep science-based</td>
                                                <td className="px-4 py-3">Sleep tracking</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Crisis</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Calm Harm</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Free</td>
                                                <td className="px-4 py-3">DBT techniques</td>
                                                <td className="px-4 py-3">Self-harm urges</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">App Selection Criteria</h3>
                                    <p className="text-gray-700">
                                        When evaluating mental health apps, look for: transparency about developers, clear privacy policy, scientific advisory board, peer-reviewed research, and regular updates. Avoid apps making unrealistic claims or offering diagnosis without professional input.
                                    </p>
                                </div>

                                {/* App Effectiveness */}
                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">1</span>
                                            Most Effective App Features
                                        </h3>
                                        <ol className="list-decimal list-inside text-gray-700 space-y-1 pl-2">
                                            <li>Cognitive Behavioral Therapy exercises</li>
                                            <li>Mood tracking with analytics</li>
                                            <li>Personalized recommendations</li>
                                            <li>Guided meditation/relaxation</li>
                                            <li>Progress visualization</li>
                                        </ol>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">2</span>
                                            Privacy Red Flags
                                        </h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1 pl-2">
                                            <li>Vague data usage policies</li>
                                            <li>Sharing data with third parties</li>
                                            <li>No option to delete data</li>
                                            <li>Mandatory social media login</li>
                                            <li>Location tracking without need</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Online Therapy */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Monitor className="w-8 h-8 text-blue-600 mr-2" />
                                    Online Therapy: What You Need to Know
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Teletherapy has grown by 650% since 2020, with 83% of patients reporting satisfaction comparable to in-person sessions. Key platforms include:
                                </p>

                                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden mb-6">
                                    <div className="grid grid-cols-4 bg-gray-100 p-3 font-medium">
                                        <div>Platform</div>
                                        <div>Price Range</div>
                                        <div>Specialties</div>
                                        <div>Insurance</div>
                                    </div>
                                    <div className="grid grid-cols-4 p-3 border-b border-gray-200">
                                        <div className="font-medium">BetterHelp</div>
                                        <div>$60-$90/wk</div>
                                        <div>General, couples</div>
                                        <div>No</div>
                                    </div>
                                    <div className="grid grid-cols-4 p-3 border-b border-gray-200 bg-gray-50">
                                        <div className="font-medium">Talkspace</div>
                                        <div>$65-$99/wk</div>
                                        <div>Psychiatry, teens</div>
                                        <div>Yes</div>
                                    </div>
                                    <div className="grid grid-cols-4 p-3">
                                        <div className="font-medium">Amwell</div>
                                        <div>$109-$129/session</div>
                                        <div>Clinical, urgent</div>
                                        <div>Yes</div>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Pros of Online Therapy</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2 pl-2">
                                            <li><strong>Accessibility:</strong> 24/7 access from anywhere</li>
                                            <li><strong>Affordability:</strong> 30-40% cheaper than in-office</li>
                                            <li><strong>Variety:</strong> Larger therapist selection</li>
                                            <li><strong>Comfort:</strong> Receive care in your own space</li>
                                            <li><strong>Continuity:</strong> Maintain care while traveling</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Cons of Online Therapy</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2 pl-2">
                                            <li><strong>Tech issues:</strong> Connectivity problems</li>
                                            <li><strong>Limitations:</strong> Not ideal for crises</li>
                                            <li><strong>Non-verbal cues:</strong> Harder to read body language</li>
                                            <li><strong>Regulation:</strong> Licensing across states</li>
                                            <li><strong>Privacy:</strong> Home environment challenges</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-green-50 p-4 rounded-lg mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Choosing an Online Therapist</h3>
                                    <ol className="list-decimal list-inside text-gray-700 space-y-1 pl-2">
                                        <li>Verify licenses and credentials</li>
                                        <li>Check platform security (HIPAA compliance)</li>
                                        <li>Review therapist specialties and approaches</li>
                                        <li>Schedule a consultation before committing</li>
                                        <li>Ensure backup plans for tech failures</li>
                                    </ol>
                                </div>
                            </section>

                            {/* Digital Wellness Strategies */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Zap className="w-8 h-8 text-blue-600 mr-2" />
                                    Digital Wellness Strategies
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Healthy tech habits can significantly impact mental health. Implement these evidence-based strategies:
                                </p>

                                <div className="space-y-6">
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Screen Time Management</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">1. Use Built-in Tracking</h4>
                                                <p className="text-gray-700">Enable iOS Screen Time or Android Digital Wellbeing to monitor usage patterns.</p>
                                            </div>
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">2. Set App Limits</h4>
                                                <p className="text-gray-700">Restrict social media to 30-60 minutes daily.</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">3. Schedule Offline Time</h4>
                                                <p className="text-gray-700">Designate tech-free hours, especially before bedtime.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Notification Hygiene</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">1. Turn Off Non-Essential Alerts</h4>
                                                <p className="text-gray-700">Only allow priority notifications.</p>
                                            </div>
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">2. Schedule Do Not Disturb</h4>
                                                <p className="text-gray-700">Set quiet hours for focused work and relaxation.</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">3. Batch Check Messages</h4>
                                                <p className="text-gray-700">Process communications 3-4 times daily instead of constantly.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Sleep Optimization</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">1. Blue Light Filtering</h4>
                                                <p className="text-gray-700">Use Night Shift or f.lux after sunset.</p>
                                            </div>
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">2. Device-Free Bedroom</h4>
                                                <p className="text-gray-700">Charge phones outside sleeping area.</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">3. Wind-Down Routine</h4>
                                                <p className="text-gray-700">Replace screen time with reading or meditation before bed.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Digital mental health tools represent a powerful complement to traditional care when used intentionally. The key is mindful engagement—leveraging technology's benefits while maintaining healthy boundaries.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    Remember that digital solutions work best as part of a holistic approach including professional care, social connection, physical activity, and proper sleep. Technology should serve your mental health, not undermine it.
                                </p>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "The goal isn't digital abstinence, but conscious curation of our tech habits to support rather than sabotage mental well-being."
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
                                            Dr. Emily Zhang, PsyD
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600 mb-1">
                                        — Written by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            David Kim
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
                                <h3 className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-2">MENTAL HEALTH NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get digital wellness tips</h4>
                                <p className="text-gray-700 text-sm">
                                    Weekly strategies for balancing technology and mental well-being.
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
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Recommended Digital Tools</h3>
                            <div className="space-y-4">
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80" alt="Meditation app" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Mindful Tech Use Guide</h4>
                                            <p className="text-sm text-gray-600">4.7 ★ (89 reviews)</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80" alt="Therapy session" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Online Therapy Comparison</h4>
                                            <p className="text-sm text-gray-600">2024 Edition</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Quick Tips */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Digital Detox Challenge</h3>
                            <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 mt-1">
                                        <Clock className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900">Morning Routine</h4>
                                        <p className="text-sm text-gray-700">First 30 minutes phone-free</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 mt-1">
                                        <Moon className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900">Evening Routine</h4>
                                        <p className="text-sm text-gray-700">No screens 1 hour before bed</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 mt-1">
                                        <Heart className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900">Weekly Habit</h4>
                                        <p className="text-sm text-gray-700">One full tech-free day</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Further Reading</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">The Science of Digital Addiction</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Privacy Protection Guide</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Blue Light Research</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Mindfulness & Technology</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}