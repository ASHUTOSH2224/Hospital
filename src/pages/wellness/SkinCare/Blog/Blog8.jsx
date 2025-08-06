"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Clock, Sun, Moon, Check, Heart, AlertTriangle, List, Grid, Droplet, Watch } from "lucide-react"

export default function SkincareRoutineGuide() {
    const [email, setEmail] = useState("")
    const [activeTab, setActiveTab] = useState("Morning")

    const handleEmailSubmit = (e) => {
        e.preventDefault()
        console.log("Email submitted:", email)
        setEmail("")
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const tabs = ["Morning", "Evening", "Weekly", "Organization"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Managing Time and Skincare Routines in Modern Life
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
                                <span className="mx-2">•</span>
                                <Clock className="w-4 h-4 mr-1" />
                                <span className="text-sm">7 min read</span>
                            </div>

                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                In today's fast-paced world, maintaining a consistent skincare routine can feel overwhelming. This comprehensive guide provides practical strategies for incorporating effective skincare into your daily life, with time-saving tips, product organization ideas, and routines tailored for different lifestyles.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80"
                                    alt="Skincare products organized on bathroom shelf"
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
                                    <li>Morning routines should focus on protection (SPF) and take 5-7 minutes</li>
                                    <li>Evening routines prioritize repair and can be done in 8-10 minutes</li>
                                    <li>Multi-tasking products can save up to 40% of your skincare time</li>
                                    <li>Proper organization reduces decision fatigue and saves 2-3 minutes daily</li>
                                    <li>Weekly treatments should be scheduled like important appointments</li>
                                </ul>
                            </div>

                            {/* The Modern Skincare Challenge */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <AlertTriangle className="w-8 h-8 text-blue-600 mr-2" />
                                    The Modern Skincare Challenge
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    A 2023 study published in the Journal of Dermatological Science found that 68% of adults skip skincare steps due to time constraints, while 42% reported feeling overwhelmed by product choices. This leads to inconsistent routines that undermine skin health.
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div className="bg-white p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">Common Time Wasters</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>Product searching (avg. 1.5 min/day)</li>
                                            <li>Decision fatigue between steps</li>
                                            <li>Waiting times between product layers</li>
                                            <li>Overcomplicated routines</li>
                                        </ul>
                                    </div>
                                    <div className="bg-white p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">Impact of Inconsistency</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>Reduced product effectiveness by 30-60%</li>
                                            <li>Increased skin sensitivity</li>
                                            <li>Delayed visible results</li>
                                            <li>Higher likelihood of abandoning routine</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-purple-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">The 80/20 Rule of Skincare</h3>
                                    <p className="text-gray-700 mb-2">
                                        80% of your results come from 20% of your routine. Focus on these key steps:
                                    </p>
                                    <ol className="list-decimal list-inside text-gray-700">
                                        <li>Cleansing</li>
                                        <li>Moisturizing</li>
                                        <li>Sun protection (AM)</li>
                                        <li>Active treatment (PM)</li>
                                    </ol>
                                </div>
                            </section>

                            {/* Morning Routine */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Sun className="w-8 h-8 text-blue-600 mr-2" />
                                    The Efficient Morning Routine (5-7 minutes)
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Morning skincare should focus on protection and preparation for the day. This streamlined routine takes less time than brewing your coffee:
                                </p>

                                {/* Morning Routine Timeline */}
                                <div className="mb-8">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">5-Minute Morning Timeline</h3>
                                    <div className="space-y-3">
                                        <div className="flex items-start">
                                            <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                                                1
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">Cleanse (60 sec)</h4>
                                                <p className="text-gray-700 text-sm">Use a gentle, non-foaming cleanser to maintain skin barrier</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                                                2
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">Treat (90 sec)</h4>
                                                <p className="text-gray-700 text-sm">Apply vitamin C serum (let absorb while brushing teeth)</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                                                3
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">Moisturize (60 sec)</h4>
                                                <p className="text-gray-700 text-sm">Lightweight moisturizer with SPF 30+ (multi-tasking product)</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                                                4
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">Protect (30 sec)</h4>
                                                <p className="text-gray-700 text-sm">Apply sunscreen if moisturizer doesn't contain adequate SPF</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Morning Routine Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Step</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product Type</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Multi-tasking Tip</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Cleanse</td>
                                                <td className="px-4 py-3">Micellar water or milk cleanser</td>
                                                <td className="px-4 py-3 whitespace-nowrap">60 sec</td>
                                                <td className="px-4 py-3">Use while showering to save time</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Treat</td>
                                                <td className="px-4 py-3">Antioxidant serum</td>
                                                <td className="px-4 py-3 whitespace-nowrap">90 sec</td>
                                                <td className="px-4 py-3">Apply before brushing teeth to utilize absorption time</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Moisturize</td>
                                                <td className="px-4 py-3">SPF moisturizer combo</td>
                                                <td className="px-4 py-3 whitespace-nowrap">60 sec</td>
                                                <td className="px-4 py-3">Choose tinted versions to skip foundation</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Pro Tip:</h3>
                                    <p className="text-gray-700">
                                        Keep your morning products in a separate, easily accessible area or container. This small organization hack can save you 1-2 minutes every morning.
                                    </p>
                                </div>
                            </section>

                            {/* Evening Routine */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Moon className="w-8 h-8 text-blue-600 mr-2" />
                                    The Effective Evening Routine (8-10 minutes)
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Evening skincare focuses on repair and rejuvenation. This slightly longer routine works while your skin undergoes its natural renewal process:
                                </p>

                                {/* Evening Routine Steps */}
                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Double Cleanse (3 min)</h3>
                                        <p className="text-gray-700 mb-2">
                                            Start with an oil-based cleanser to remove sunscreen/makeup (1 min), followed by a water-based cleanser (1 min). Use the remaining minute to gently pat dry.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Active Treatment (3 min)</h3>
                                        <p className="text-gray-700 mb-2">
                                            Apply retinol or treatment serum. While it absorbs (2 min), you can:
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>Floss and mouthwash (dental care)</li>
                                            <li>Prepare next day's outfit</li>
                                            <li>Set up morning coffee</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Moisturize (2 min)</h3>
                                        <p className="text-gray-700">
                                            Apply night cream or sleeping mask. The richer formula works while you sleep, requiring no additional time.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Weekly Treatments</h3>
                                        <p className="text-gray-700">
                                            Schedule exfoliation (1-2x/week) and masks (1x/week) on less busy evenings. Set calendar reminders until it becomes habit.
                                        </p>
                                    </div>
                                </div>

                                {/* Evening Routine Visual */}
                                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                                    <div className="grid grid-cols-4 gap-4 text-center font-medium mb-2">
                                        <div>Step</div>
                                        <div>Core</div>
                                        <div>Optional</div>
                                        <div>Weekly</div>
                                    </div>
                                    <div className="grid grid-cols-4 gap-4 text-center mb-1">
                                        <div className="font-medium">Cleanse</div>
                                        <div className="text-blue-600">✓</div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                    <div className="grid grid-cols-4 gap-4 text-center mb-1">
                                        <div className="font-medium">Treat</div>
                                        <div className="text-blue-600">✓</div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                    <div className="grid grid-cols-4 gap-4 text-center mb-1 bg-blue-50 p-1 rounded">
                                        <div className="font-medium">Exfoliate</div>
                                        <div></div>
                                        <div></div>
                                        <div className="text-blue-600">✓ (1-2x)</div>
                                    </div>
                                    <div className="grid grid-cols-4 gap-4 text-center">
                                        <div className="font-medium">Mask</div>
                                        <div></div>
                                        <div></div>
                                        <div className="text-blue-600">✓ (1x)</div>
                                    </div>
                                </div>
                            </section>

                            {/* Product Organization */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Grid className="w-8 h-8 text-blue-600 mr-2" />
                                    Product Organization Strategies
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    A 2024 Home Organization Study found that proper skincare product organization can save the average person 12.5 hours per year. Here's how to optimize your space:
                                </p>

                                <div className="space-y-6">
                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">1. The Zone System</h3>
                                        <p className="text-gray-700 mb-2">
                                            Divide your products into three zones based on frequency of use:
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                                            <li><span className="font-medium">Prime Zone</span> (daily reach): Eye-level, front of cabinet</li>
                                            <li><span className="font-medium">Secondary Zone</span> (2-3x/week): Middle shelves</li>
                                            <li><span className="font-medium">Tertiary Zone</span> (weekly/monthly): Higher/lower storage</li>
                                        </ul>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">2. Time-Saving Storage Solutions</h3>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <h4 className="font-medium text-gray-900 mb-1">Lazy Susans</h4>
                                                <p className="text-gray-700 text-sm">360° access to products without moving bottles</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900 mb-1">Acrylic Drawers</h4>
                                                <p className="text-gray-700 text-sm">See-through organization with quick access</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900 mb-1">Magnetic Strips</h4>
                                                <p className="text-gray-700 text-sm">For metal tools and tweezers</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900 mb-1">Travel Kits</h4>
                                                <p className="text-gray-700 text-sm">Pre-packed for business trips or gym bags</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">3. Digital Inventory</h3>
                                        <p className="text-gray-700">
                                            Use apps like Sortly or Google Keep to track:
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                                            <li>Purchase dates</li>
                                            <li>Expiration dates</li>
                                            <li>Repurchase reminders</li>
                                            <li>Product combinations that work well together</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Weekly Routine */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <List className="w-8 h-8 text-blue-600 mr-2" />
                                    Weekly Treatment Schedule
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Weekly treatments provide deeper benefits but require more time. Schedule them like important appointments:
                                </p>

                                {/* Weekly Schedule */}
                                <div className="space-y-4 mb-8">
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Sunday Evening (Self-Care Night)</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Exfoliation (10 min)</h4>
                                                <p className="text-gray-700">Chemical exfoliant (AHAs/BHAs) to remove dead skin cells</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">Hydrating Mask (15 min)</h4>
                                                <p className="text-gray-700">Sheet mask or cream mask while relaxing</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Wednesday Evening (Midweek Refresh)</h3>
                                        </div>
                                        <div className="p-4">
                                            <div>
                                                <h4 className="font-medium text-gray-900">Clay Mask (8 min)</h4>
                                                <p className="text-gray-700">Detoxifying treatment while preparing next day's lunch</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Treatment Rotation System</h3>
                                    <p className="text-gray-700">
                                        Alternate active ingredients weekly to prevent irritation and target different concerns:
                                    </p>
                                    <ul className="list-disc list-inside text-gray-700 ml-4 mt-2 space-y-1">
                                        <li><span className="font-medium">Week 1:</span> Glycolic acid for brightening</li>
                                        <li><span className="font-medium">Week 2:</span> Salicylic acid for pores</li>
                                        <li><span className="font-medium">Week 3:</span> Enzyme exfoliation for sensitive skin</li>
                                        <li><span className="font-medium">Week 4:</span> Physical exfoliation (if tolerated)</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Consistency beats complexity in skincare. A simple routine done regularly yields better results than an elaborate routine done sporadically. Remember:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>Your routine should fit your lifestyle, not the other way around</li>
                                    <li>Multitask when possible (apply products during other activities)</li>
                                    <li>Keep frequently used products visible and accessible</li>
                                    <li>Schedule weekly treatments like important appointments</li>
                                </ul>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "Skincare is self-care. The few minutes you invest daily in your routine pay dividends in confidence and skin health for years to come."
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
                                            Dr. Emily Chen, Dermatologist
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
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get routine tips and product reviews</h4>
                                <p className="text-gray-700 text-sm">
                                    Weekly skincare advice, time-saving hacks, and science-backed recommendations.
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

                        {/* Quick Routine Cards */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Routine Cards</h3>
                            <div className="space-y-4">
                                <div className="border border-gray-200 rounded-lg p-4">
                                    <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                                        <Watch className="w-4 h-4 mr-2" />
                                        3-Minute Emergency Routine
                                    </h4>
                                    <ol className="list-decimal list-inside text-sm text-gray-700 space-y-1">
                                        <li>Micellar water cleanse</li>
                                        <li>Moisturizer with SPF</li>
                                        <li>Tinted sunscreen stick</li>
                                    </ol>
                                </div>
                                <div className="border border-gray-200 rounded-lg p-4">
                                    <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                                        <Droplet className="w-4 h-4 mr-2" />
                                        Post-Workout Refresh
                                    </h4>
                                    <ol className="list-decimal list-inside text-sm text-gray-700 space-y-1">
                                        <li>Quick rinse with water</li>
                                        <li>Hydrating mist</li>
                                        <li>Light moisturizer</li>
                                    </ol>
                                </div>
                            </div>
                        </div>

                        {/* Product Shelf Life Guide */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Product Shelf Life Guide</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span className="font-medium">Product Type</span>
                                    <span className="font-medium">Duration</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Cleansers</span>
                                    <span className="text-blue-600">1 year</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Serums</span>
                                    <span className="text-blue-600">6-12 months</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Moisturizers</span>
                                    <span className="text-blue-600">1 year</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Sunscreens</span>
                                    <span className="text-blue-600">6 months</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Retinol</span>
                                    <span className="text-blue-600">3-6 months</span>
                                </div>
                            </div>
                        </div>

                        {/* Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Further Reading</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">The Science of Skin Circadian Rhythm</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Minimalist Skincare Approaches</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Travel-Sized Routine Guide</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Budget-Friendly Product Alternatives</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}