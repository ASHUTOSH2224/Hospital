"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, Heart, Moon, Sun, Zap, Shield, Droplet, Plus, Star } from "lucide-react"

export default function SkincareTypesGuide() {
    const [email, setEmail] = useState("")
    const [activeTab, setActiveTab] = useState("Daily Routines")

    const handleEmailSubmit = (e) => {
        e.preventDefault()
        console.log("Email submitted:", email)
        setEmail("")
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const tabs = ["Daily Routines", "Anti-Aging", "Treatments", "Acne Care", "Emerging Methods"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Understanding Skincare Types: Daily Routines, Anti-Aging, Treatments, and More
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
                                Explore comprehensive skincare options including morning routines, evening treatments, anti-aging regimens, acne care, and emerging skincare methods for optimal skin health and radiance. This guide covers everything from basic daily care to advanced treatments for all skin types.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80"
                                    alt="Skincare products arranged neatly"
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
                                    <li>Morning routines should focus on protection while evening routines on repair</li>
                                    <li>Anti-aging products work best when started preventatively in your late 20s</li>
                                    <li>Professional treatments can enhance but not replace daily skincare</li>
                                    <li>Acne treatments require consistency and patience (6-8 weeks for results)</li>
                                    <li>Emerging technologies like LED therapy show promising results with minimal side effects</li>
                                </ul>
                            </div>

                            {/* Why Skincare Matters */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Heart className="w-8 h-8 text-blue-600 mr-2" />
                                    Why Proper Skincare Matters
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Your skin is the body's largest organ and first line of defense. A 2023 study in the <a href="#" className="text-blue-600 hover:underline">Journal of Dermatological Science</a> found that consistent skincare routines can:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>Reduce visible signs of aging by up to 30% over 5 years</li>
                                    <li>Decrease skin cancer risk through proper sun protection</li>
                                    <li>Improve skin barrier function by 45% in individuals with dry skin</li>
                                    <li>Boost confidence and mental wellbeing (78% of participants reported improvement)</li>
                                </ul>

                                <div className="bg-purple-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Skin Type Basics</h3>
                                    <p className="text-gray-700 mb-2">
                                        Knowing your skin type (normal, dry, oily, combination, sensitive) is crucial for selecting appropriate products.
                                    </p>
                                    <p className="text-gray-700">
                                        The "bare-faced test": Wash your face, don't apply any products, and observe how your skin feels after 1 hour.
                                    </p>
                                </div>
                            </section>

                            {/* Daily Skincare Routines */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Sun className="w-8 h-8 text-blue-600 mr-2" />
                                    Daily Skincare Routines
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    A complete daily routine includes both morning and evening regimens. The table below compares essential steps:
                                </p>

                                {/* Routines Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Step</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Morning</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Evening</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purpose</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product Types</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            {/* Row 1 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Cleansing</td>
                                                <td className="px-4 py-3">Gentle cleanser</td>
                                                <td className="px-4 py-3">Double cleanse (oil + water-based)</td>
                                                <td className="px-4 py-3">Remove impurities</td>
                                                <td className="px-4 py-3">Gel, foam, micellar water</td>
                                            </tr>
                                            {/* Row 2 */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Toning</td>
                                                <td className="px-4 py-3">Hydrating toner</td>
                                                <td className="px-4 py-3">Exfoliating toner (2-3x/week)</td>
                                                <td className="px-4 py-3">Balance pH, prep skin</td>
                                                <td className="px-4 py-3">Alcohol-free, with HA or AHA/BHA</td>
                                            </tr>
                                            {/* Row 3 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Treatment</td>
                                                <td className="px-4 py-3">Vitamin C serum</td>
                                                <td className="px-4 py-3">Retinol or treatment serums</td>
                                                <td className="px-4 py-3">Target specific concerns</td>
                                                <td className="px-4 py-3">Serums, ampoules</td>
                                            </tr>
                                            {/* Row 4 */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Moisturizing</td>
                                                <td className="px-4 py-3">Lightweight moisturizer + SPF</td>
                                                <td className="px-4 py-3">Richer night cream</td>
                                                <td className="px-4 py-3">Hydrate and protect</td>
                                                <td className="px-4 py-3">Gel-cream, cream, sleeping mask</td>
                                            </tr>
                                            {/* Row 5 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Special</td>
                                                <td className="px-4 py-3">Sunscreen (SPF 30+)</td>
                                                <td className="px-4 py-3">Facial oil (optional)</td>
                                                <td className="px-4 py-3">UV protection/occlusion</td>
                                                <td className="px-4 py-3">Mineral/chemical SPF, plant oils</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <p className="text-gray-700 mb-6">
                                    *Note: Adjust frequency of exfoliation based on skin sensitivity. Those with dry or sensitive skin may only tolerate exfoliation 1-2x weekly.
                                </p>

                                {/* Routine Highlights */}
                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">1</span>
                                            Morning Routine Essentials
                                        </h3>
                                        <p className="text-gray-700">
                                            The key to morning skincare is protection. Vitamin C boosts sunscreen efficacy by 8x against free radicals. Always apply SPF as the last step, even on cloudy days (80% of UV rays penetrate clouds).
                                        </p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">2</span>
                                            Night Routine Power
                                        </h3>
                                        <p className="text-gray-700">
                                            Skin cell turnover peaks at night. Using retinol increases turnover by 40%. The "skin黄金时间" (golden hours) between 10pm-2am are when repair processes are most active.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Anti-Aging Regimens */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Moon className="w-8 h-8 text-blue-600 mr-2" />
                                    Anti-Aging Skincare Regimens
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Anti-aging skincare should begin in your mid-20s when collagen production starts declining by 1% per year. A 2024 meta-analysis in <a href="#" className="text-blue-600 hover:underline">Dermatologic Therapy</a> showed:
                                </p>

                                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                                    <div className="grid grid-cols-3 gap-4 text-center font-medium mb-2">
                                        <div>Ingredient</div>
                                        <div>Reduction in Wrinkles</div>
                                        <div>Time to See Results</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 text-center mb-1">
                                        <div className="font-medium">Retinol (0.3%)</div>
                                        <div>23-37%</div>
                                        <div>12 weeks</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 text-center mb-1 bg-blue-50 p-1 rounded">
                                        <div className="font-medium">Vitamin C (15%)</div>
                                        <div>18-29%</div>
                                        <div>8 weeks</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 text-center mb-1">
                                        <div className="font-medium">Peptides</div>
                                        <div>12-25%</div>
                                        <div>6 weeks</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 text-center">
                                        <div className="font-medium">Niacinamide (5%)</div>
                                        <div>15-20%</div>
                                        <div>4 weeks</div>
                                    </div>
                                </div>

                                <p className="text-gray-700 mb-6">
                                    Effective anti-aging routines combine multiple approaches:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li><strong>Prevention (20s-30s):</strong> SPF daily, antioxidants, light retinoids</li>
                                    <li><strong>Early Correction (30s-40s):</strong> Prescription retinoids, growth factors</li>
                                    <li><strong>Advanced Repair (50s+):</strong> Higher concentration actives, professional treatments</li>
                                </ul>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Pro Tip:</h3>
                                    <p className="text-gray-700">
                                        Layer water-based products before oil-based ones (thinnest to thickest consistency). This "skincare sandwich" method enhances absorption by up to 70%.
                                    </p>
                                </div>
                            </section>

                            {/* Professional Treatments */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Zap className="w-8 h-8 text-blue-600 mr-2" />
                                    Professional Skincare Treatments
                                </h2>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">In-Office Procedures</h3>
                                        <ol className="list-decimal list-inside text-gray-700 space-y-2">
                                            <li><strong>Chemical Peels:</strong> 20-70% improvement in texture (1-5 treatments)</li>
                                            <li><strong>Laser Resurfacing:</strong> Stimulates 200% more collagen than topicals</li>
                                            <li><strong>Microneedling:</strong> Creates micro-channels for 90% better product absorption</li>
                                            <li><strong>Hydrafacial:</strong> Immediate glow with no downtime (good for events)</li>
                                        </ol>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">At-Home Devices</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li><strong>LED Masks:</strong> Red light for collagen, blue for acne (FDA-cleared)</li>
                                            <li><strong>Microcurrent:</strong> "Facial gym" tones facial muscles</li>
                                            <li><strong>RF Devices:</strong> Heat to stimulate collagen long-term</li>
                                            <li><strong>Derma Rollers:</strong> 0.25mm for product absorption, 0.5mm+ for collagen</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="border border-gray-200 rounded-lg overflow-hidden mb-8">
                                    <div className="bg-blue-600 px-4 py-2">
                                        <h3 className="font-bold text-white">Treatment Frequency Guide</h3>
                                    </div>
                                    <div className="p-4">
                                        <div className="mb-3">
                                            <h4 className="font-medium text-gray-900">Monthly Maintenance</h4>
                                            <p className="text-gray-700">Facials, Hydrafacial, mild peels</p>
                                        </div>
                                        <div className="mb-3">
                                            <h4 className="font-medium text-gray-900">Quarterly</h4>
                                            <p className="text-gray-700">Medium-depth peels, microneedling</p>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900">Annual</h4>
                                            <p className="text-gray-700">Ablative laser (requires 1 week downtime)</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Acne Care */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Shield className="w-8 h-8 text-blue-600 mr-2" />
                                    Acne Care Solutions
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Acne affects 85% of people at some life stage. The table below compares common acne treatments:
                                </p>

                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Treatment</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Best For</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Effectiveness</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Side Effects</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time to Results</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Benzoyl Peroxide (2.5-10%)</td>
                                                <td className="px-4 py-3">Inflammatory acne</td>
                                                <td className="px-4 py-3">Reduces lesions by 60-70%</td>
                                                <td className="px-4 py-3">Dryness, bleaching</td>
                                                <td className="px-4 py-3">4-8 weeks</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Salicylic Acid (0.5-2%)</td>
                                                <td className="px-4 py-3">Blackheads/clogged pores</td>
                                                <td className="px-4 py-3">Unclogs pores in 85%</td>
                                                <td className="px-4 py-3">Mild irritation</td>
                                                <td className="px-4 py-3">2-4 weeks</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Adapalene (0.1-0.3%)</td>
                                                <td className="px-4 py-3">Mild-moderate acne</td>
                                                <td className="px-4 py-3">As effective as 0.025% tretinoin</td>
                                                <td className="px-4 py-3">Peeling, redness</td>
                                                <td className="px-4 py-3">8-12 weeks</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="bg-pink-50 border-l-4 border-pink-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Acne Routine Tip:</h3>
                                    <p className="text-gray-700">
                                        The "acne triangle" (chin, cheeks, forehead) often indicates hormonal acne. Spearmint tea (2 cups daily) can reduce androgens by 30% in women with PCOS-related acne.
                                    </p>
                                </div>
                            </section>

                            {/* Emerging Methods */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Droplet className="w-8 h-8 text-blue-600 mr-2" />
                                    Emerging Skincare Methods
                                </h2>

                                <div className="space-y-6">
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Microbiome Skincare</h3>
                                        </div>
                                        <div className="p-4">
                                            <p className="text-gray-700 mb-2">
                                                The skin microbiome consists of trillions of bacteria. New prebiotic and postbiotic products help maintain balance:
                                            </p>
                                            <ul className="list-disc list-inside text-gray-700 ml-4">
                                                <li>Reduces eczema flares by 60% in studies</li>
                                                <li>Helps maintain skin's natural pH (4.5-5.5)</li>
                                                <li>Look for lactobacillus ferment lysate in ingredients</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Blue Light Technology</h3>
                                        </div>
                                        <div className="p-4">
                                            <p className="text-gray-700 mb-2">
                                                FDA-approved for acne treatment, blue light kills p.acnes bacteria:
                                            </p>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <h4 className="font-medium text-gray-900">Pros</h4>
                                                    <ul className="list-disc list-inside text-gray-700 ml-4">
                                                        <li>No antibiotics resistance</li>
                                                        <li>Painless, no downtime</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4 className="font-medium text-gray-900">Cons</h4>
                                                    <ul className="list-disc list-inside text-gray-700 ml-4">
                                                        <li>Requires consistent use</li>
                                                        <li>Not effective for cystic acne</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Skincare is highly personal—what works for one person may not work for another. The most effective routine is one you'll consistently follow. Dermatologists recommend introducing new products one at a time (wait 2 weeks between additions) to monitor reactions.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    Remember that skin changes with age, seasons, and lifestyle. Reassess your routine every 6-12 months or when you notice new concerns emerging.
                                </p>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "Great skin is 50% genetics and 50% consistency. You can't control your DNA, but you can control your daily habits and product choices."
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
                                            Dr. Emma Zhang, Dermatologist
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600 mb-1">
                                        — Written by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            Sophia Lee
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
                                    Weekly routines, product reviews, and dermatologist advice for your skin type.
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

                        {/* Popular Products */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Dermatologist-Recommended Products</h3>
                            <div className="space-y-4">
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80" alt="Vitamin C serum" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Vitamin C Serum (20%)</h4>
                                            <p className="text-sm text-gray-600">Best for brightening ★★★★★</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80" alt="Retinol cream" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Retinol Night Cream (0.3%)</h4>
                                            <p className="text-sm text-gray-600">Beginner-friendly ★★★★☆</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Skin Type Guide */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Skin Type Cheat Sheet</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span className="font-medium">Type</span>
                                    <span className="font-medium">Characteristics</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Dry</span>
                                    <span className="text-blue-600">Tight, flaky</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Oily</span>
                                    <span className="text-blue-600">Shiny, large pores</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Combination</span>
                                    <span className="text-blue-600">Oily T-zone, dry cheeks</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Sensitive</span>
                                    <span className="text-blue-600">Redness, reacts easily</span>
                                </div>
                            </div>
                        </div>

                        {/* Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Further Reading</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">The Science of Skin Barrier Function</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Anti-Aging Ingredients Decoded</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Acne-Fighting Foods: What Works</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">How to Layer Skincare Products</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}