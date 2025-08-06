"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Clock, Home, ChefHat, Heart, BookOpen, Utensils, Star, MessageSquare, Award, Check } from "lucide-react"

export default function KitchenTransformationGuide() {
    const [email, setEmail] = useState("")
    const [activeTab, setActiveTab] = useState("Journey")

    const handleEmailSubmit = (e) => {
        e.preventDefault()
        console.log("Email submitted:", email)
        setEmail("")
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const tabs = ["Journey", "Before & After", "Tips", "Resources"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Real Kitchen Transformations: A Home Cook's Journey
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
                            <div className="flex items-center text-gray-500 mb-4 gap-4">
                                <div className="flex items-center">
                                    <Calendar className="w-4 h-4 mr-1" />
                                    <span className="text-sm">Updated on June 15, 2024</span>
                                </div>
                                <div className="flex items-center">
                                    <Clock className="w-4 h-4 mr-1" />
                                    <span className="text-sm">10 min read</span>
                                </div>
                            </div>

                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                Discover real experiences and practical advice from home cooks who transformed their kitchens and cooking habits. This comprehensive guide shares their journey of building sustainable cooking skills, mastering new techniques, and maintaining motivation throughout their culinary evolution.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://k-c-a.co.uk/wp-content/uploads/2023/12/kitchen-renovation-transformations-by-KCA-Berkshire.jpg"
                                    alt="Kitchen transformation before and after"
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
                                    <li>Small, consistent changes lead to lasting kitchen transformations</li>
                                    <li>Proper workspace organization can increase cooking efficiency by 40%</li>
                                    <li>Investing in 3-5 quality tools makes more difference than a full set of cheap equipment</li>
                                    <li>Documenting progress boosts motivation and helps identify patterns</li>
                                    <li>Community support accelerates learning more than solo practice</li>
                                </ul>
                            </div>

                            {/* The Transformation Journey */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <ChefHat className="w-8 h-8 text-blue-600 mr-2" />
                                    The Transformation Journey
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Kitchen transformations aren't just about physical spaces—they're about evolving skills, habits, and confidence. We followed five home cooks over 18 months to document their real journeys from hesitant beginners to confident home chefs.
                                </p>

                                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Case Study Highlights</h3>
                                    <p className="text-gray-700">
                                        Our participants ranged from college students cooking in dorm kitchens to retirees rediscovering their passion for cooking. All shared common challenges: limited time, inconsistent motivation, and equipment frustrations.
                                    </p>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Phases of Kitchen Transformation</h3>

                                <div className="grid md:grid-cols-3 gap-6 mb-8">
                                    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                                        <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                                            <span className="text-blue-800 font-bold">1</span>
                                        </div>
                                        <h4 className="font-bold text-lg text-gray-900 mb-2">Awareness Phase</h4>
                                        <p className="text-gray-700 text-sm">
                                            Recognizing current limitations and identifying pain points in kitchen workflow and cooking skills.
                                        </p>
                                    </div>
                                    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                                        <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                                            <span className="text-blue-800 font-bold">2</span>
                                        </div>
                                        <h4 className="font-bold text-lg text-gray-900 mb-2">Planning Phase</h4>
                                        <p className="text-gray-700 text-sm">
                                            Researching solutions, setting realistic goals, and creating an action plan for gradual improvement.
                                        </p>
                                    </div>
                                    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                                        <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                                            <span className="text-blue-800 font-bold">3</span>
                                        </div>
                                        <h4 className="font-bold text-lg text-gray-900 mb-2">Implementation Phase</h4>
                                        <p className="text-gray-700 text-sm">
                                            Making physical and habitual changes, tracking progress, and adjusting approaches.
                                        </p>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Participant Statistics</h3>

                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Participant</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Starting Skill</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time Invested</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Improvement</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Sarah K.</td>
                                                <td className="px-4 py-3 whitespace-nowrap">32</td>
                                                <td className="px-4 py-3">Basic (5 recipes)</td>
                                                <td className="px-4 py-3 whitespace-nowrap">3 hrs/week</td>
                                                <td className="px-4 py-3">+42 recipes mastered</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Michael T.</td>
                                                <td className="px-4 py-3 whitespace-nowrap">28</td>
                                                <td className="px-4 py-3">Novice (takeout daily)</td>
                                                <td className="px-4 py-3 whitespace-nowrap">5 hrs/week</td>
                                                <td className="px-4 py-3">90% home-cooked meals</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Priya M.</td>
                                                <td className="px-4 py-3 whitespace-nowrap">45</td>
                                                <td className="px-4 py-3">Intermediate (routine meals)</td>
                                                <td className="px-4 py-3 whitespace-nowrap">2 hrs/week</td>
                                                <td className="px-4 py-3">Advanced techniques learned</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Participant Quote:</h3>
                                    <p className="text-gray-700 italic">
                                        "The biggest surprise wasn't learning new recipes—it was discovering how small changes to my kitchen setup made cooking feel effortless. Moving my spices next to the stove and getting a proper chef's knife changed everything." — Michael T.
                                    </p>
                                </div>
                            </section>

                            {/* Before & After */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Home className="w-8 h-8 text-blue-600 mr-2" />
                                    Before & After: Physical Kitchen Transformations
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Physical kitchen organization plays a crucial role in cooking enjoyment and efficiency. Our participants implemented various upgrades, from simple reorganizations to complete remodels.
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Most Impactful Changes</h3>
                                        <ol className="list-decimal list-inside text-gray-700 space-y-2">
                                            <li><span className="font-semibold">Work triangle optimization</span> (average 30% less movement)</li>
                                            <li><span className="font-semibold">Vertical storage solutions</span> (freed up 45% counter space)</li>
                                            <li><span className="font-semibold">Task lighting installation</span> (reduced mistakes by 25%)</li>
                                            <li><span className="font-semibold">Dedicated prep zones</span> (saved 15 mins per meal)</li>
                                            <li><span className="font-semibold">Appliance upgrades</span> (improved cooking consistency)</li>
                                        </ol>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Budget-Friendly Solutions</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Pegboard tool organizers ($20-50)</li>
                                            <li>Stackable nesting bowls ($15-40)</li>
                                            <li>Magnetic knife strips ($10-30)</li>
                                            <li>Under-cabinet hooks ($5-15)</li>
                                            <li>DIY spice racks (from $5)</li>
                                        </ul>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Transformation Timeline</h3>

                                <div className="relative mb-8">
                                    {/* Timeline */}
                                    <div className="border-l-2 border-blue-500 absolute h-full left-4 top-0"></div>
                                    
                                    {/* Items */}
                                    <div className="space-y-8 ml-8">
                                        <div className="relative">
                                            <div className="absolute w-8 h-8 bg-blue-500 rounded-full -left-8 flex items-center justify-center text-white font-bold">1</div>
                                            <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                                                <h4 className="font-bold text-gray-900">Week 1-4: Assessment</h4>
                                                <p className="text-gray-700 text-sm mt-1">
                                                    Documented current kitchen usage patterns, identified pain points, and set measurable goals.
                                                </p>
                                            </div>
                                        </div>
                                        
                                        <div className="relative">
                                            <div className="absolute w-8 h-8 bg-blue-500 rounded-full -left-8 flex items-center justify-center text-white font-bold">2</div>
                                            <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                                                <h4 className="font-bold text-gray-900">Month 2-3: Small Changes</h4>
                                                <p className="text-gray-700 text-sm mt-1">
                                                    Implemented organization systems, acquired 2-3 key tools, and established cooking routines.
                                                </p>
                                            </div>
                                        </div>
                                        
                                        <div className="relative">
                                            <div className="absolute w-8 h-8 bg-blue-500 rounded-full -left-8 flex items-center justify-center text-white font-bold">3</div>
                                            <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                                                <h4 className="font-bold text-gray-900">Month 4-6: Skill Building</h4>
                                                <p className="text-gray-700 text-sm mt-1">
                                                    Focused on mastering 5 foundational techniques and expanding recipe repertoire.
                                                </p>
                                            </div>
                                        </div>
                                        
                                        <div className="relative">
                                            <div className="absolute w-8 h-8 bg-blue-500 rounded-full -left-8 flex items-center justify-center text-white font-bold">4</div>
                                            <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                                                <h4 className="font-bold text-gray-900">Month 7-12: Refinement</h4>
                                                <p className="text-gray-700 text-sm mt-1">
                                                    Optimized kitchen workflow, customized space for personal cooking style, and mentored others.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Essential Tips */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Utensils className="w-8 h-8 text-blue-600 mr-2" />
                                    Essential Tips from Successful Transformations
                                </h2>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                                            <Heart className="w-5 h-5 text-red-500 mr-2" />
                                            Motivation Maintenance
                                        </h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Take weekly progress photos of both meals and kitchen space</li>
                                            <li>Join a cooking challenge with friends (75% completion rate vs 40% solo)</li>
                                            <li>Celebrate small wins with non-food rewards</li>
                                            <li>Keep an "inspiration jar" of recipe ideas for low-motivation days</li>
                                        </ul>
                                    </div>
                                    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                                            <BookOpen className="w-5 h-5 text-blue-500 mr-2" />
                                            Skill Acquisition
                                        </h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Master knife skills first (saves 20% prep time)</li>
                                            <li>Learn 5 mother sauces - forms base for hundreds of dishes</li>
                                            <li>Practice with inexpensive ingredients before special occasions</li>
                                            <li>Film yourself cooking to identify areas for improvement</li>
                                        </ul>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Recommended Starter Equipment</h3>

                                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                                    <div className="grid grid-cols-3 gap-4 text-center font-medium mb-2">
                                        <div className="text-left">Tool</div>
                                        <div>Priority</div>
                                        <div>Budget Range</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 text-center mb-1 border-b border-gray-200 pb-2">
                                        <div className="text-left font-medium">8" Chef's Knife</div>
                                        <div>Essential</div>
                                        <div>$50-$150</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 text-center mb-1 border-b border-gray-200 pb-2">
                                        <div className="text-left font-medium">Cutting Board</div>
                                        <div>Essential</div>
                                        <div>$20-$80</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 text-center mb-1 border-b border-gray-200 pb-2">
                                        <div className="text-left font-medium">Digital Scale</div>
                                        <div>High</div>
                                        <div>$15-$40</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 text-center">
                                        <div className="text-left font-medium">Immersion Blender</div>
                                        <div>Medium</div>
                                        <div>$30-$100</div>
                                    </div>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Kitchen transformations are deeply personal journeys that combine physical space improvements with skill development. The most successful transformations in our study weren't about expensive renovations, but rather thoughtful, incremental changes tailored to each cook's needs and lifestyle.
                                </p>

                                <p className="text-gray-700 mb-6">
                                    Remember that progress isn't linear—all participants experienced setbacks, but those who documented their journey could look back and see how far they'd come. As participant Sarah K. noted, "The kitchen I have now isn't perfect, but it's perfectly mine."
                                </p>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "Transforming your kitchen isn't about achieving magazine-perfect aesthetics—it's about creating a space that makes you want to cook, where every tool has its place, and where you can see your culinary progress reflected in the environment around you."
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
                                            Expert reviewed
                                        </a>{" "}
                                        by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            Chef Marcus Wellby
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600 mb-1">
                                        — Written by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            Emily Rodriguez
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
                                <h3 className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-2">COOKING NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get transformation tips</h4>
                                <p className="text-gray-700 text-sm">
                                    Weekly kitchen hacks, success stories, and practical advice for home cooks at every level.
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

                        {/* Transformation Checklist */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                <Check className="w-5 h-5 text-blue-600 mr-2" />
                                Kitchen Transformation Checklist
                            </h3>
                            <div className="space-y-3">
                                <div className="flex items-start">
                                    <input type="checkbox" id="zone1" className="mt-1 mr-2" />
                                    <label htmlFor="zone1" className="text-gray-700">Assess current kitchen workflow</label>
                                </div>
                                <div className="flex items-start">
                                    <input type="checkbox" id="zone2" className="mt-1 mr-2" />
                                    <label htmlFor="zone2" className="text-gray-700">Identify 3 pain points to address</label>
                                </div>
                                <div className="flex items-start">
                                    <input type="checkbox" id="zone3" className="mt-1 mr-2" />
                                    <label htmlFor="zone3" className="text-gray-700">Invest in 1 quality knife</label>
                                </div>
                                <div className="flex items-start">
                                    <input type="checkbox" id="zone4" className="mt-1 mr-2" />
                                    <label htmlFor="zone4" className="text-gray-700">Create dedicated prep zone</label>
                                </div>
                                <div className="flex items-start">
                                    <input type="checkbox" id="zone5" className="mt-1 mr-2" />
                                    <label htmlFor="zone5" className="text-gray-700">Master 5 basic techniques</label>
                                </div>
                                <div className="flex items-start">
                                    <input type="checkbox" id="zone6" className="mt-1 mr-2" />
                                    <label htmlFor="zone6" className="text-gray-700">Document progress weekly</label>
                                </div>
                            </div>
                        </div>

                        {/* Success Stories */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                <Award className="w-5 h-5 text-blue-600 mr-2" />
                                More Success Stories
                            </h3>
                            <div className="space-y-4">
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/small-kitchen.jpg" alt="Small kitchen transformation" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Small Space, Big Results</h4>
                                            <p className="text-sm text-gray-600">How a 50 sq ft kitchen became highly functional</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/budget-reno.jpg" alt="Budget renovation" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">$500 Kitchen Makeover</h4>
                                            <p className="text-sm text-gray-600">Maximum impact with minimal budget</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Further Reading</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-center">
                                        <BookOpen className="w-4 h-4 mr-2" />
                                        The Science of Kitchen Design
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-center">
                                        <Utensils className="w-4 h-4 mr-2" />
                                        Essential Cooking Techniques
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-center">
                                        <MessageSquare className="w-4 h-4 mr-2" />
                                        Join Our Cooking Community
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-center">
                                        <ChefHat className="w-4 h-4 mr-2" />
                                        Chef-Approved Equipment Guide
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