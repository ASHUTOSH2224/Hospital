"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Clock, Heart, Star, Check, ChevronDown, ChevronUp, MessageSquare, Share2 } from "lucide-react"

export default function SkincareJourney() {
    const [email, setEmail] = useState("")
    const [activeTab, setActiveTab] = useState("Journey")
    const [expandedTestimonial, setExpandedTestimonial] = useState(null)

    const handleEmailSubmit = (e) => {
        e.preventDefault()
        console.log("Email submitted:", email)
        setEmail("")
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const tabs = ["Journey", "Routine", "Products", "Tips"]
    const testimonials = [
        {
            id: 1,
            name: "Sarah K.",
            age: 28,
            duration: "8 months",
            before: "Severe acne, hyperpigmentation",
            after: "Clear complexion, even tone",
            story: "After struggling with acne for years, I finally found a routine that works. The key was consistency and understanding my skin type. I learned that over-cleansing was actually making my acne worse. Now I use a gentle cleanser, vitamin C serum, and a good moisturizer. The transformation didn't happen overnight, but after 3 months I started seeing real changes.",
            image: "/skin-testimonial-1.jpg"
        },
        {
            id: 2,
            name: "Michael T.",
            age: 35,
            duration: "1 year",
            before: "Rosacea, sensitivity",
            after: "Calm, resilient skin",
            story: "My rosacea made me avoid social situations for years. I tried countless products that just irritated my skin more. The breakthrough came when I focused on repairing my skin barrier with ceramides and stopped using harsh exfoliants. Now I can finally enjoy outdoor activities without worrying about flare-ups.",
            image: "/skin-testimonial-2.jpg"
        }
    ]

    const toggleTestimonial = (id) => {
        setExpandedTestimonial(expandedTestimonial === id ? null : id)
    }

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Real Skin Transformations: A Skincare Enthusiast's Journey
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
                                <span className="text-sm mr-4">Updated on June 15, 2024</span>
                                <Clock className="w-4 h-4 mr-1" />
                                <span className="text-sm">10 min read</span>
                            </div>

                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                Discover real experiences and practical advice from skincare enthusiasts on building sustainable routines, mastering new techniques, and maintaining motivation throughout their skincare journey. These transformations prove that with the right knowledge and consistency, anyone can achieve healthy, glowing skin.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1596755389378-c31d21fd1273?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80"
                                    alt="Before and after skincare transformation"
                                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                                    style={{ maxHeight: '500px' }}
                                />
                                <p className="text-sm text-gray-500 mt-2">Real skincare transformation over 6 months</p>
                            </div>

                            {/* Key Takeaways */}
                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
                                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                    <Star className="w-5 h-5 text-blue-600 mr-2" />
                                    Key Takeaways
                                </h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>Consistency is more important than expensive products</li>
                                    <li>Most transformations take 3-6 months of dedicated care</li>
                                    <li>Understanding your skin type is crucial for success</li>
                                    <li>Simple routines often work better than complex regimens</li>
                                    <li>Lifestyle factors (diet, sleep, stress) significantly impact results</li>
                                </ul>
                            </div>

                            {/* The Transformation Journey */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Heart className="w-8 h-8 text-blue-600 mr-2" />
                                    The Transformation Journey
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Skin transformations don't happen overnight. According to dermatologists, skin cells take about <span className="font-semibold">28 days to renew</span>, but visible improvements typically require 3-6 months of consistent care. The journey often follows this timeline:
                                </p>

                                {/* Transformation Timeline */}
                                <div className="mb-6">
                                    <div className="relative">
                                        {/* Timeline line */}
                                        <div className="absolute left-4 h-full w-0.5 bg-blue-200"></div>
                                        
                                        {/* Timeline items */}
                                        <div className="space-y-8">
                                            {/* Month 1 */}
                                            <div className="relative pl-12">
                                                <div className="absolute left-0 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">1</div>
                                                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                                                    <h3 className="font-bold text-lg text-gray-900 mb-2">Month 1: Adjustment Period</h3>
                                                    <p className="text-gray-700">
                                                        Skin may purge (especially with retinoids or acids). Focus on hydration and sun protection. Many give up during this phase, but persistence is key.
                                                    </p>
                                                </div>
                                            </div>
                                            
                                            {/* Month 2-3 */}
                                            <div className="relative pl-12">
                                                <div className="absolute left-0 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">2-3</div>
                                                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                                                    <h3 className="font-bold text-lg text-gray-900 mb-2">Months 2-3: First Visible Changes</h3>
                                                    <p className="text-gray-700">
                                                        Texture improves, breakouts reduce. Hyperpigmentation may start fading. This is when most people begin noticing the changes.
                                                    </p>
                                                </div>
                                            </div>
                                            
                                            {/* Month 4-6 */}
                                            <div className="relative pl-12">
                                                <div className="absolute left-0 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">4-6</div>
                                                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                                                    <h3 className="font-bold text-lg text-gray-900 mb-2">Months 4-6: Significant Improvement</h3>
                                                    <p className="text-gray-700">
                                                        Skin barrier strengthens. Most concerns are noticeably improved. Fine lines may diminish. This is the maintenance phase where you refine your routine.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-gray-700 mb-6">
                                    A <a href="#" className="text-blue-600 hover:underline">2024 clinical study</a> found that 78% of participants who followed a consistent skincare regimen for 6 months saw at least a 50% improvement in their primary skin concern, compared to just 12% in the control group.
                                </p>
                            </section>

                            {/* Real People, Real Results */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Real People, Real Results</h2>

                                <p className="text-gray-700 mb-6">
                                    These testimonials from real skincare enthusiasts show what's possible with dedication and the right approach:
                                </p>

                                {/* Testimonials */}
                                <div className="space-y-6">
                                    {testimonials.map((testimonial) => (
                                        <div key={testimonial.id} className="border border-gray-200 rounded-lg overflow-hidden">
                                            <div className="bg-blue-600 px-4 py-3 flex justify-between items-center">
                                                <div>
                                                    <h3 className="font-bold text-white">{testimonial.name}, {testimonial.age}</h3>
                                                    <p className="text-blue-100 text-sm">{testimonial.duration} into skincare journey</p>
                                                </div>
                                                <button 
                                                    onClick={() => toggleTestimonial(testimonial.id)}
                                                    className="text-white"
                                                >
                                                    {expandedTestimonial === testimonial.id ? <ChevronUp /> : <ChevronDown />}
                                                </button>
                                            </div>
                                            <div className={`p-4 ${expandedTestimonial === testimonial.id ? 'block' : 'hidden md:block'}`}>
                                                <div className="grid md:grid-cols-3 gap-6 mb-4">
                                                    <div>
                                                        <h4 className="font-medium text-gray-900 mb-2">Before</h4>
                                                        <p className="text-gray-700">{testimonial.before}</p>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-medium text-gray-900 mb-2">After</h4>
                                                        <p className="text-gray-700">{testimonial.after}</p>
                                                    </div>
                                                    <div className="md:flex md:justify-center">
                                                        <div className="w-24 h-24 bg-gray-200 rounded-full overflow-hidden">
                                                            <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className="text-gray-700">{testimonial.story}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* The Science Behind Skin Renewal */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">The Science Behind Skin Renewal</h2>

                                <p className="text-gray-700 mb-4">
                                    Understanding how skin functions can help set realistic expectations for your transformation:
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div className="bg-white p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-lg text-gray-900 mb-3">Skin Cell Turnover</h3>
                                        <p className="text-gray-700 mb-2">
                                            Younger skin (teens-20s) turns over every 14-21 days. By age 30-40, this slows to 28-42 days. Products like retinoids can help maintain youthful turnover rates.
                                        </p>
                                    </div>
                                    <div className="bg-white p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-lg text-gray-900 mb-3">Collagen Production</h3>
                                        <p className="text-gray-700 mb-2">
                                            We lose about 1% collagen per year after 20. Ingredients like vitamin C, retinol, and peptides can stimulate collagen synthesis.
                                        </p>
                                    </div>
                                </div>

                                {/* Skin Layers Diagram */}
                                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                                    <h3 className="font-bold text-xl text-gray-900 mb-4 text-center">How Skincare Products Penetrate Skin Layers</h3>
                                    <div className="flex flex-col items-center">
                                        <div className="w-full max-w-md">
                                            {/* Diagram would be an SVG or image in real implementation */}
                                            <div className="h-48 bg-gradient-to-b from-blue-50 to-blue-100 rounded-lg flex flex-col justify-between p-4 mb-4">
                                                <div className="text-center font-medium">Stratum Corneum (10-20μm)</div>
                                                <div className="text-center font-medium">Epidermis (50-100μm)</div>
                                                <div className="text-center font-medium">Dermis (1-2mm)</div>
                                            </div>
                                        </div>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>Most products only penetrate the stratum corneum</li>
                                            <li>Only certain molecules (like retinol) reach deeper layers</li>
                                            <li>Penetration enhancers (like hyaluronic acid) can improve delivery</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Common Mistakes to Avoid */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Mistakes to Avoid</h2>

                                <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">What Not to Do</h3>
                                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                                        <li>Changing products too frequently (give at least 6-8 weeks)</li>
                                        <li>Over-exfoliating (more than 2-3 times per week)</li>
                                        <li>Using too many active ingredients at once</li>
                                        <li>Skipping sunscreen (even indoors)</li>
                                        <li>Not patch testing new products</li>
                                    </ul>
                                </div>

                                <p className="text-gray-700 mb-4">
                                    A survey of 1,000 skincare enthusiasts revealed these top regretful behaviors:
                                </p>

                                {/* Regrets Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mistake</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">% Who Regret</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Damage Duration</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Over-exfoliation</td>
                                                <td className="px-4 py-3 whitespace-nowrap">63%</td>
                                                <td className="px-4 py-3">2-6 weeks recovery</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Not wearing sunscreen</td>
                                                <td className="px-4 py-3 whitespace-nowrap">58%</td>
                                                <td className="px-4 py-3">Permanent damage</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Using expired products</td>
                                                <td className="px-4 py-3 whitespace-nowrap">42%</td>
                                                <td className="px-4 py-3">Varies</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">DIY treatments</td>
                                                <td className="px-4 py-3 whitespace-nowrap">37%</td>
                                                <td className="px-4 py-3">1-3 months</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            {/* Building Your Routine */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Building Your Routine</h2>

                                <p className="text-gray-700 mb-6">
                                    A basic skincare routine should include these essential steps, customized for your skin type:
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="border border-gray-200 rounded-lg p-4">
                                        <h3 className="font-bold text-xl text-gray-900 mb-3">Morning</h3>
                                        <ol className="list-decimal list-inside text-gray-700 space-y-2">
                                            <li>Gentle cleanser or water rinse</li>
                                            <li>Antioxidant serum (vitamin C)</li>
                                            <li>Moisturizer</li>
                                            <li>Sunscreen (SPF 30+)</li>
                                        </ol>
                                    </div>
                                    <div className="border border-gray-200 rounded-lg p-4">
                                        <h3 className="font-bold text-xl text-gray-900 mb-3">Evening</h3>
                                        <ol className="list-decimal list-inside text-gray-700 space-y-2">
                                            <li>Oil cleanser (if wearing makeup/sunscreen)</li>
                                            <li>Water-based cleanser</li>
                                            <li>Treatment product (retinol, acids)</li>
                                            <li>Moisturizer or facial oil</li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Pro Tip:</h3>
                                    <p className="text-gray-700">
                                        Introduce new products one at a time, waiting 2 weeks between additions. This helps identify what works and what causes irritation.
                                    </p>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Skin transformation is a marathon, not a sprint. The most successful skincare enthusiasts are those who view their routine as self-care rather than a chore. Remember that your skin's needs will change with seasons, age, and lifestyle factors.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    As dermatologist Dr. Lisa Chen notes: <span className="italic">"The best skincare routine is the one you'll actually do consistently. Perfect is the enemy of good when it comes to daily care."</span>
                                </p>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "Your skin is your lifelong companion—treat it with kindness, patience, and consistency. The results will follow."
                                    </p>
                                </div>
                            </section>

                            {/* Comments and Sharing */}
                            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-12">
                                <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                                    <MessageSquare className="w-5 h-5" />
                                    <span>24 Comments</span>
                                </button>
                                <div className="flex items-center gap-4">
                                    <span className="text-gray-700">Share:</span>
                                    <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full">
                                        <Share2 className="w-5 h-5" />
                                    </button>
                                    {/* Social icons would go here */}
                                </div>
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
                                            Dermatologist reviewed
                                        </a>{" "}
                                        by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            Dr. Lisa Chen
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600 mb-1">
                                        — Written by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            Emma Rodriguez
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
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get transformation tips</h4>
                                <p className="text-gray-700 text-sm">
                                    Weekly routines, product reviews, and dermatologist advice delivered to your inbox.
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

                        {/* Must-Have Products */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Transformation Essentials</h3>
                            <div className="space-y-4">
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/product-1.jpg" alt="Vitamin C serum" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Vitamin C Serum</h4>
                                            <p className="text-sm text-gray-600">Brightening, antioxidant protection</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/product-2.jpg" alt="Retinol cream" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Retinol Night Cream</h4>
                                            <p className="text-sm text-gray-600">Anti-aging, texture improvement</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/product-3.jpg" alt="Sunscreen" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Mineral Sunscreen SPF 50</h4>
                                            <p className="text-sm text-gray-600">UV protection, non-comedogenic</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Skin Type Guide */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Skin Type Cheat Sheet</h3>
                            <div className="space-y-3">
                                <div className="p-3 bg-white rounded-lg border border-gray-200">
                                    <h4 className="font-bold text-gray-900 mb-1">Oily</h4>
                                    <p className="text-sm text-gray-700">Look for: Gel cleansers, niacinamide, clay masks</p>
                                </div>
                                <div className="p-3 bg-white rounded-lg border border-gray-200">
                                    <h4 className="font-bold text-gray-900 mb-1">Dry</h4>
                                    <p className="text-sm text-gray-700">Look for: Cream cleansers, hyaluronic acid, ceramides</p>
                                </div>
                                <div className="p-3 bg-white rounded-lg border border-gray-200">
                                    <h4 className="font-bold text-gray-900 mb-1">Combination</h4>
                                    <p className="text-sm text-gray-700">Look for: Balanced formulas, zone treatments</p>
                                </div>
                                <div className="p-3 bg-white rounded-lg border border-gray-200">
                                    <h4 className="font-bold text-gray-900 mb-1">Sensitive</h4>
                                    <p className="text-sm text-gray-700">Look for: Fragrance-free, minimal ingredient lists</p>
                                </div>
                            </div>
                        </div>

                        {/* Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Further Reading</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">The Science of Skin Renewal</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">How to Read Skincare Labels</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Budget vs Luxury: What's Worth It?</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">When to See a Dermatologist</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}