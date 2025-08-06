"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, Heart, Star, Moon, Sun, Droplet, Shield, Zap, AlertCircle } from "lucide-react"

export default function EssentialSkincareRoutines() {
    const [email, setEmail] = useState("")
    const [activeTab, setActiveTab] = useState("Basics")

    const handleEmailSubmit = (e) => {
        e.preventDefault()
        console.log("Email submitted:", email)
        setEmail("")
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const tabs = ["Basics", "Skin Types", "Products", "Troubleshooting"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                10 Essential Skincare Routines to Nourish Every Skin Type
                            </h1>

                            {/* Navigation Tabs */}
                            <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-200">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${activeTab === tab
                                            ? "border-pink-500 text-pink-600"
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
                                A proper skincare routine can transform your complexion, regardless of your skin type. We've rounded up the 10 best and most effective skincare routines to help you achieve healthy, glowing skin. Discover the essential steps, product recommendations, and expert tips tailored for every skin concern.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&h=500&fit=crop"
                                    alt="Skincare products arranged neatly"
                                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                                    style={{ maxHeight: '500px' }}
                                />
                            </div>

                            {/* Key Takeaways */}
                            <div className="bg-pink-50 border-l-4 border-pink-400 p-4 mb-8">
                                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                    <Star className="w-5 h-5 text-pink-600 mr-2" />
                                    Key Takeaways
                                </h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>Consistency is more important than product quantity</li>
                                    <li>Morning and evening routines should address different needs</li>
                                    <li>Skin type determines product selection but all types need hydration</li>
                                    <li>Sun protection is non-negotiable for every skin type</li>
                                    <li>Seasonal adjustments to your routine can prevent common issues</li>
                                </ul>
                            </div>

                            {/* Why Skincare Matters */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Heart className="w-8 h-8 text-pink-600 mr-2" />
                                    Why a Proper Skincare Routine Matters
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Your skin is your body's largest organ and first line of defense against environmental aggressors. According to a <a href="#" className="text-blue-600 hover:underline">2024 study in the Journal of Dermatological Science</a>, consistent skincare routines can:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>Improve skin barrier function by up to 40%</li>
                                    <li>Reduce visible signs of aging by stimulating collagen production</li>
                                    <li>Decrease hyperpigmentation and uneven skin tone</li>
                                    <li>Prevent 85% of premature skin aging caused by UV exposure</li>
                                    <li>Help manage conditions like acne, rosacea, and eczema</li>
                                </ul>

                                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Skin Barrier 101</h3>
                                    <p className="text-gray-700 mb-2">
                                        Your skin's moisture barrier is a thin protective layer of lipids (fats) that helps retain moisture and keep irritants out. When compromised, it leads to dryness, irritation, and sensitivity.
                                    </p>
                                    <p className="text-gray-700">
                                        A proper routine with gentle cleansing, hydration, and protection helps maintain this crucial barrier.
                                    </p>
                                </div>
                            </section>

                            {/* The 10 Essential Steps */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Check className="w-8 h-8 text-pink-600 mr-2" />
                                    The 10 Essential Skincare Steps
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    These steps form the foundation of an effective skincare routine. While not every step is needed twice daily or by every skin type, this comprehensive approach ensures all bases are covered.
                                </p>

                                {/* Steps Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Step</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">AM</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">PM</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purpose</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Key Ingredients</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            {/* Step 1 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">1. Cleansing</td>
                                                <td className="px-4 py-3 whitespace-nowrap">✓</td>
                                                <td className="px-4 py-3 whitespace-nowrap">✓</td>
                                                <td className="px-4 py-3">Remove impurities without stripping skin</td>
                                                <td className="px-4 py-3">Hyaluronic acid, glycerin, ceramides</td>
                                            </tr>
                                            {/* Step 2 */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">2. Toning</td>
                                                <td className="px-4 py-3 whitespace-nowrap">✓</td>
                                                <td className="px-4 py-3 whitespace-nowrap">✓</td>
                                                <td className="px-4 py-3">Balance pH, prep for absorption</td>
                                                <td className="px-4 py-3">Rose water, witch hazel, niacinamide</td>
                                            </tr>
                                            {/* Step 3 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">3. Exfoliation</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Optional</td>
                                                <td className="px-4 py-3 whitespace-nowrap">2-3x/week</td>
                                                <td className="px-4 py-3">Remove dead skin cells, unclog pores</td>
                                                <td className="px-4 py-3">AHAs, BHAs, PHAs, enzymes</td>
                                            </tr>
                                            {/* Step 4 */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">4. Treatment Serums</td>
                                                <td className="px-4 py-3 whitespace-nowrap">✓</td>
                                                <td className="px-4 py-3 whitespace-nowrap">✓</td>
                                                <td className="px-4 py-3">Target specific concerns</td>
                                                <td className="px-4 py-3">Vitamin C (AM), retinol (PM), peptides</td>
                                            </tr>
                                            {/* Step 5 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">5. Eye Care</td>
                                                <td className="px-4 py-3 whitespace-nowrap">✓</td>
                                                <td className="px-4 py-3 whitespace-nowrap">✓</td>
                                                <td className="px-4 py-3">Address delicate eye area concerns</td>
                                                <td className="px-4 py-3">Caffeine, peptides, vitamin K</td>
                                            </tr>
                                            {/* Additional steps would continue... */}
                                        </tbody>
                                    </table>
                                </div>

                                <p className="text-gray-700 mb-6">
                                    *Note: Frequency depends on skin type and tolerance. Always patch test new products.
                                </p>

                                {/* Top 3 Highlights */}
                                <div className="grid md:grid-cols-3 gap-6 mb-8">
                                    <div className="bg-pink-50 p-4 rounded-lg border border-pink-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-pink-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">1</span>
                                            Double Cleansing
                                        </h3>
                                        <p className="text-gray-700">
                                            The gold standard for PM cleansing: start with an oil-based cleanser to remove makeup/sunscreen, followed by a water-based cleanser for deeper cleansing without over-drying.
                                        </p>
                                    </div>
                                    <div className="bg-pink-50 p-4 rounded-lg border border-pink-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-pink-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">2</span>
                                            Layering Light to Heavy
                                        </h3>
                                        <p className="text-gray-700">
                                            Apply products from thinnest to thickest consistency: water-based serums first, then oils, then creams. This ensures optimal absorption of each product.
                                        </p>
                                    </div>
                                    <div className="bg-pink-50 p-4 rounded-lg border border-pink-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-pink-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">3</span>
                                            SPF Non-Negotiable
                                        </h3>
                                        <p className="text-gray-700">
                                            Daily sunscreen use prevents 90% of visible aging. Choose broad spectrum SPF 30+ and reapply every 2 hours of sun exposure.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Skin Type Breakdown */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Droplet className="w-8 h-8 text-pink-600 mr-2" />
                                    Customizing for Your Skin Type
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    While the basic steps remain similar, product selection should be tailored to your skin's specific needs:
                                </p>

                                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                                    <div className="grid md:grid-cols-5 gap-4 text-center font-medium mb-2">
                                        <div>Skin Type</div>
                                        <div>Cleanser</div>
                                        <div>Exfoliation</div>
                                        <div>Moisturizer</div>
                                        <div>Special Notes</div>
                                    </div>
                                    <div className="grid md:grid-cols-5 gap-4 text-center mb-1">
                                        <div className="font-medium">Oily</div>
                                        <div>Gel, foam</div>
                                        <div>2-3x/week BHA</div>
                                        <div>Oil-free, gel</div>
                                        <div>Don't skip moisturizer</div>
                                    </div>
                                    <div className="grid md:grid-cols-5 gap-4 text-center mb-1 bg-pink-50 p-1 rounded">
                                        <div className="font-medium">Dry</div>
                                        <div>Cream, oil</div>
                                        <div>1x/week gentle AHA</div>
                                        <div>Cream, ceramides</div>
                                        <div>Layer hydrating toners</div>
                                    </div>
                                    <div className="grid md:grid-cols-5 gap-4 text-center mb-1">
                                        <div className="font-medium">Combination</div>
                                        <div>Milky, low-foam</div>
                                        <div>1-2x/week PHA</div>
                                        <div>Gel-cream hybrid</div>
                                        <div>Zone treatment</div>
                                    </div>
                                    <div className="grid md:grid-cols-5 gap-4 text-center">
                                        <div className="font-medium">Sensitive</div>
                                        <div>Non-foaming</div>
                                        <div>Enzymes 1x/week</div>
                                        <div>Barrier repair</div>
                                        <div>Avoid fragrance</div>
                                    </div>
                                </div>

                                <p className="text-gray-700 mb-6">
                                    According to dermatologist Dr. Emma Richardson: <span className="italic">"Skin types can change with age, seasons, and environment. Reassess your skin every 3-6 months and adjust your routine accordingly."</span>
                                </p>
                            </section>

                            {/* AM vs PM Routine */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <div className="flex items-center mr-2">
                                        <Sun className="w-6 h-6 text-yellow-500 mr-1" />
                                        <Moon className="w-6 h-6 text-indigo-500" />
                                    </div>
                                    Morning vs Evening Routines
                                </h2>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 bg-yellow-50 p-3 rounded-lg flex items-center">
                                            <Sun className="w-5 h-5 text-yellow-600 mr-2" />
                                            Morning Focus: Protection
                                        </h3>
                                        <ol className="list-decimal list-inside text-gray-700 space-y-2 pl-2">
                                            <li>Gentle cleanse or just water rinse</li>
                                            <li>Antioxidant serum (Vitamin C)</li>
                                            <li>Light moisturizer</li>
                                            <li>Sunscreen (last step, minimum SPF 30)</li>
                                        </ol>
                                        <p className="text-gray-700 mt-3">
                                            Morning routines should focus on protecting skin from environmental damage (UV, pollution) while providing lightweight hydration.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 bg-indigo-50 p-3 rounded-lg flex items-center">
                                            <Moon className="w-5 h-5 text-indigo-600 mr-2" />
                                            Evening Focus: Repair
                                        </h3>
                                        <ol className="list-decimal list-inside text-gray-700 space-y-2 pl-2">
                                            <li>Double cleanse</li>
                                            <li>Exfoliate (as needed)</li>
                                            <li>Treatment serum (retinol, etc.)</li>
                                            <li>Rich moisturizer or sleeping mask</li>
                                        </ol>
                                        <p className="text-gray-700 mt-3">
                                            Nighttime is when skin repairs itself. Focus on active ingredients and deeper hydration without sun exposure concerns.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-pink-50 border-l-4 border-pink-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Pro Tip:</h3>
                                    <p className="text-gray-700">
                                        Apply treatments to slightly damp skin to enhance absorption. Wait 1-2 minutes between layers for optimal results.
                                    </p>
                                </div>
                            </section>

                            {/* Seasonal Adjustments */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Seasonal Skincare Adjustments</h2>

                                <div className="space-y-6">
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-pink-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Winter Skin Rescue</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Challenges:</h4>
                                                <p className="text-gray-700">Dryness, redness, irritation from cold and indoor heating</p>
                                            </div>
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Solutions:</h4>
                                                <ul className="list-disc list-inside text-gray-700 ml-4">
                                                    <li>Switch to cream cleansers</li>
                                                    <li>Add hyaluronic acid before moisturizer</li>
                                                    <li>Use overnight hydrating masks 2-3x/week</li>
                                                    <li>Don't skip SPF - snow reflects UV rays</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-pink-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Summer Skin Defense</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Challenges:</h4>
                                                <p className="text-gray-700">Excess oil, sweat, sun damage, clogged pores</p>
                                            </div>
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Solutions:</h4>
                                                <ul className="list-disc list-inside text-gray-700 ml-4">
                                                    <li>Lightweight, oil-free moisturizers</li>
                                                    <li>Increase antioxidant protection</li>
                                                    <li>Water-resistant sunscreen</li>
                                                    <li>Clay masks 1-2x/week to detox</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Common Mistakes */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <AlertCircle className="w-8 h-8 text-pink-600 mr-2" />
                                    Common Skincare Mistakes to Avoid
                                </h2>

                                <div className="space-y-4">
                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">Over-Exfoliating</h3>
                                        <p className="text-gray-700 mb-2">
                                            Using harsh scrubs or acids too frequently damages the skin barrier, leading to irritation and increased sensitivity.
                                        </p>
                                        <p className="text-gray-700">
                                            <span className="font-semibold">Solution:</span> Limit exfoliation to 2-3 times weekly max. Watch for redness or stinging as signs to reduce frequency.
                                        </p>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">Skipping Sunscreen</h3>
                                        <p className="text-gray-700 mb-2">
                                            UV damage accumulates over time and is responsible for 90% of visible aging. Cloudy days and windows don't block all harmful rays.
                                        </p>
                                        <p className="text-gray-700">
                                            <span className="font-semibold">Solution:</span> Make SPF part of your daily routine year-round. Choose a formula you enjoy using.
                                        </p>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">Using Too Many Actives</h3>
                                        <p className="text-gray-700 mb-2">
                                            Layering multiple potent ingredients (like retinol + vitamin C + acids) can irritate rather than help.
                                        </p>
                                        <p className="text-gray-700">
                                            <span className="font-semibold">Solution:</span> Introduce one new active at a time. Space out strong ingredients (e.g., retinol at night, vitamin C in morning).
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Building an effective skincare routine is more about consistency and understanding your skin's needs than using the most expensive products. Start with the basics (cleanse, treat, moisturize, protect) and gradually introduce additional steps as needed.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    Remember that skin changes over time—what works now may need adjustment in a few months or with seasonal shifts. Pay attention to how your skin responds and don't be afraid to simplify if needed.
                                </p>

                                <div className="bg-pink-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "Great skin doesn't happen by chance—it happens by appointment. Set a daily appointment with your skincare routine, and the results will follow."
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
                                            Dr. Emma Richardson, Dermatologist
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
                        <div className="bg-pink-50 rounded-lg p-6 mb-8">
                            <div className="mb-4">
                                <h3 className="text-sm font-bold text-pink-800 uppercase tracking-wide mb-2">SKINCARE NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get personalized skincare tips</h4>
                                <p className="text-gray-700 text-sm">
                                    Weekly routines, product recommendations, and dermatologist advice delivered to your inbox.
                                </p>
                            </div>

                            <form onSubmit={handleEmailSubmit} className="space-y-4">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200"
                                >
                                    SUBSCRIBE
                                </button>
                            </form>

                            <p className="text-xs text-gray-600 mt-3">
                                Your{" "}
                                <a href="#" className="text-pink-600 hover:underline">
                                    privacy
                                </a>{" "}
                                is important to us
                            </p>
                        </div>

                        {/* Product Recommendations */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Dermatologist-Approved Products</h3>
                            <div className="space-y-4">
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/cleanser.jpg" alt="Gentle cleanser" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-pink-600 transition-colors">Gentle Hydrating Cleanser</h4>
                                            <p className="text-sm text-gray-600">4.9 ★ (328 reviews)</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/vitaminc.jpg" alt="Vitamin C serum" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-pink-600 transition-colors">Vitamin C + E Serum</h4>
                                            <p className="text-sm text-gray-600">4.7 ★ (412 reviews)</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/sunscreen.jpg" alt="Sunscreen" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-pink-600 transition-colors">Mineral SPF 50 Sunscreen</h4>
                                            <p className="text-sm text-gray-600">4.8 ★ (276 reviews)</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Skin Type Quiz */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Not Sure About Your Skin Type?</h3>
                            <p className="text-gray-700 mb-4">
                                Take our quick 2-minute quiz to identify your skin type and get personalized recommendations.
                            </p>
                            <button className="w-full bg-white border border-pink-600 text-pink-600 hover:bg-pink-50 font-bold py-2 px-4 rounded-lg transition-colors duration-200">
                                Take Skin Type Quiz
                            </button>
                        </div>

                        {/* Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Further Reading</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-pink-600 hover:underline">The Science Behind Skin Aging</a>
                                </li>
                                <li>
                                    <a href="#" className="text-pink-600 hover:underline">How to Layer Skincare Products</a>
                                </li>
                                <li>
                                    <a href="#" className="text-pink-600 hover:underline">Budget-Friendly Skincare Routine</a>
                                </li>
                                <li>
                                    <a href="#" className="text-pink-600 hover:underline">Men's Skincare Essentials</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}