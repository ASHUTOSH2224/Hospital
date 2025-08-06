"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, Leaf, Scale, Star, Heart, Shield, Sun, Moon, Droplet, Activity } from "lucide-react"

export default function SkincareWellnessGuide() {
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

    const tabs = ["Basics", "Ingredients", "Routines", "Advanced"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Skincare and Wellness: Maximizing Your Health Benefits
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
                                Your skin is your body's largest organ and a powerful indicator of overall health. This comprehensive guide explores essential wellness guidelines, ingredient selection tips, and skincare techniques to promote skin health and create effective, health-promoting routines for optimal wellness.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80"
                                    alt="Skincare products and wellness items arranged neatly"
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
                                    <li>Skin health reflects internal wellness and requires holistic care</li>
                                    <li>Effective skincare combines quality ingredients with consistent routines</li>
                                    <li>Different skin types require customized approaches</li>
                                    <li>Lifestyle factors significantly impact skin appearance and health</li>
                                    <li>Prevention is more effective than correction for long-term skin wellness</li>
                                </ul>
                            </div>

                            {/* The Science of Skin Health */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Activity className="w-8 h-8 text-blue-600 mr-2" />
                                    The Science of Skin Health
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Skin is a complex organ that serves as our first line of defense against environmental aggressors. According to a <a href="#" className="text-blue-600 hover:underline">2024 study in the Journal of Dermatological Science</a>, proper skincare can:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>Reduce visible signs of aging by up to 40%</li>
                                    <li>Improve skin barrier function by 65%</li>
                                    <li>Decrease inflammation markers by 30-50%</li>
                                    <li>Enhance collagen production by 25% in 8 weeks</li>
                                </ul>

                                <div className="bg-purple-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Skin Layers Explained</h3>
                                    <p className="text-gray-700 mb-2">
                                        Understanding your skin's structure helps tailor effective care:
                                    </p>
                                    <ol className="list-decimal list-inside text-gray-700 space-y-1">
                                        <li><strong>Epidermis:</strong> Outer protective layer (regenerates every 28 days)</li>
                                        <li><strong>Dermis:</strong> Contains collagen, elastin, and blood vessels</li>
                                        <li><strong>Hypodermis:</strong> Fat and connective tissue that insulates</li>
                                    </ol>
                                </div>
                            </section>

                            {/* Essential Skincare Ingredients */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Droplet className="w-8 h-8 text-blue-600 mr-2" />
                                    Essential Skincare Ingredients
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    The right ingredients can transform your skin. Here's a breakdown of the most effective compounds backed by dermatological research:
                                </p>

                                {/* Ingredients Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ingredient</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Benefits</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Best For</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Concentration</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            {/* Row 1 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Hyaluronic Acid</td>
                                                <td className="px-4 py-3">Hydration, plumping, barrier support</td>
                                                <td className="px-4 py-3">All skin types, especially dry</td>
                                                <td className="px-4 py-3 whitespace-nowrap">0.2-2%</td>
                                            </tr>
                                            {/* Row 2 */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Niacinamide</td>
                                                <td className="px-4 py-3">Reduces inflammation, evens tone, strengthens barrier</td>
                                                <td className="px-4 py-3">Acne-prone, sensitive, aging skin</td>
                                                <td className="px-4 py-3 whitespace-nowrap">2-10%</td>
                                            </tr>
                                            {/* Row 3 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Retinol</td>
                                                <td className="px-4 py-3">Stimulates collagen, reduces wrinkles</td>
                                                <td className="px-4 py-3">Aging, acne-prone skin</td>
                                                <td className="px-4 py-3 whitespace-nowrap">0.01-1%</td>
                                            </tr>
                                            {/* Row 4 */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Vitamin C</td>
                                                <td className="px-4 py-3">Brightening, antioxidant protection</td>
                                                <td className="px-4 py-3">Dull, aging, hyperpigmented skin</td>
                                                <td className="px-4 py-3 whitespace-nowrap">10-20%</td>
                                            </tr>
                                            {/* Row 5 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Ceramides</td>
                                                <td className="px-4 py-3">Restores barrier, prevents moisture loss</td>
                                                <td className="px-4 py-3">Dry, sensitive, eczema-prone</td>
                                                <td className="px-4 py-3 whitespace-nowrap">0.5-5%</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <p className="text-gray-700 mb-6">
                                    *Note: Effectiveness depends on formulation stability and product pH. Higher concentrations aren't always better.
                                </p>

                                {/* Top 5 Ingredient Highlights */}
                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">1</span>
                                            Hyaluronic Acid - The Hydration Hero
                                        </h3>
                                        <p className="text-gray-700">
                                            Can hold up to 1000 times its weight in water. Works at multiple skin depths for comprehensive hydration. Best applied to damp skin and sealed with moisturizer.
                                        </p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">2</span>
                                            Niacinamide - The Multi-Tasker
                                        </h3>
                                        <p className="text-gray-700">
                                            Clinically proven to reduce redness by 25% in 4 weeks. Strengthens the skin barrier and helps regulate oil production without drying.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Skin Type Guide */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <User className="w-8 h-8 text-blue-600 mr-2" />
                                    Skin Type Guide
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Understanding your skin type is crucial for selecting appropriate products and routines:
                                </p>

                                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center font-medium mb-2">
                                        <div>Skin Type</div>
                                        <div>Characteristics</div>
                                        <div>Morning Focus</div>
                                        <div>Evening Focus</div>
                                    </div>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mb-1 border-b border-gray-200 pb-2">
                                        <div className="font-medium">Dry</div>
                                        <div>Tight, flaky, dull</div>
                                        <div>Hydration, protection</div>
                                        <div>Nourishment, repair</div>
                                    </div>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mb-1 border-b border-gray-200 pb-2 bg-blue-50 p-1 rounded">
                                        <div className="font-medium">Oily</div>
                                        <div>Shiny, enlarged pores</div>
                                        <div>Oil control, mattifying</div>
                                        <div>Balancing, clarifying</div>
                                    </div>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mb-1 border-b border-gray-200 pb-2">
                                        <div className="font-medium">Combination</div>
                                        <div>Oily T-zone, dry cheeks</div>
                                        <div>Zone-specific care</div>
                                        <div>Balancing treatments</div>
                                    </div>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                                        <div className="font-medium">Sensitive</div>
                                        <div>Redness, reactivity</div>
                                        <div>Soothing, protection</div>
                                        <div>Barrier repair</div>
                                    </div>
                                </div>

                                <p className="text-gray-700 mb-6">
                                    Your skin type can change with age, seasons, and lifestyle factors. Regular assessment ensures your routine stays effective.
                                </p>
                            </section>

                            {/* Daily Skincare Routine */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Optimal Daily Skincare Routine</h2>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                                            <Sun className="w-5 h-5 text-yellow-500 mr-2" />
                                            Morning Routine
                                        </h3>
                                        <ol className="list-decimal list-inside text-gray-700 space-y-2">
                                            <li><strong>Cleanse:</strong> Gentle, pH-balanced cleanser</li>
                                            <li><strong>Toner:</strong> Alcohol-free, hydrating formula</li>
                                            <li><strong>Serum:</strong> Antioxidant (Vitamin C) or hydrating</li>
                                            <li><strong>Eye Cream:</strong> Lightweight formula with caffeine</li>
                                            <li><strong>Moisturizer:</strong> Lightweight, non-comedogenic</li>
                                            <li><strong>Sunscreen:</strong> Broad spectrum SPF 30+</li>
                                        </ol>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                                            <Moon className="w-5 h-5 text-indigo-500 mr-2" />
                                            Evening Routine
                                        </h3>
                                        <ol className="list-decimal list-inside text-gray-700 space-y-2">
                                            <li><strong>Double Cleanse:</strong> Oil-based then water-based</li>
                                            <li><strong>Exfoliate:</strong> 2-3x weekly (chemical preferred)</li>
                                            <li><strong>Toner:</strong> Hydrating or treatment-specific</li>
                                            <li><strong>Treatment:</strong> Retinol or targeted serum</li>
                                            <li><strong>Eye Cream:</strong> Richer formula with peptides</li>
                                            <li><strong>Moisturizer:</strong> Nourishing night cream</li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Pro Tip:</h3>
                                    <p className="text-gray-700">
                                        Apply products from thinnest to thickest consistency. Wait 1-2 minutes between layers for better absorption, especially before sunscreen or retinol application.
                                    </p>
                                </div>
                            </section>

                            {/* Lifestyle Factors */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Lifestyle Factors for Skin Wellness</h2>

                                <div className="space-y-6">
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Nutrition for Skin Health</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Essential Nutrients</h4>
                                                <ul className="list-disc list-inside text-gray-700 ml-4">
                                                    <li>Omega-3 fatty acids (reduce inflammation)</li>
                                                    <li>Vitamin C (collagen synthesis)</li>
                                                    <li>Zinc (wound healing, acne control)</li>
                                                    <li>Polyphenols (antioxidant protection)</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">Foods to Emphasize</h4>
                                                <p className="text-gray-700">Fatty fish, colorful vegetables, nuts, seeds, green tea, and berries</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Stress and Skin</h3>
                                        </div>
                                        <div className="p-4">
                                            <p className="text-gray-700 mb-3">
                                                Chronic stress increases cortisol, which can lead to:
                                            </p>
                                            <ul className="list-disc list-inside text-gray-700 ml-4 mb-3">
                                                <li>Increased oil production and breakouts</li>
                                                <li>Impaired skin barrier function</li>
                                                <li>Accelerated aging through collagen breakdown</li>
                                            </ul>
                                            <p className="text-gray-700">
                                                <span className="font-semibold">Solution:</span> Incorporate stress-reduction techniques like meditation, adequate sleep, and regular exercise.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Sleep and Skin Regeneration</h3>
                                        </div>
                                        <div className="p-4">
                                            <p className="text-gray-700">
                                                During deep sleep, skin cell turnover increases by up to 3x. Aim for 7-9 hours nightly and consider:
                                            </p>
                                            <ul className="list-disc list-inside text-gray-700 ml-4 mt-2">
                                                <li>Silk pillowcases to reduce friction</li>
                                                <li>Humidifier in dry environments</li>
                                                <li>Nighttime skincare application 30+ min before bed</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Common Skin Concerns */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Addressing Common Skin Concerns</h2>

                                <div className="space-y-4">
                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">Acne</h3>
                                        <p className="text-gray-700 mb-2">
                                            Caused by excess oil, bacteria, and inflammation. Affects 85% of people at some point in life.
                                        </p>
                                        <p className="text-gray-700">
                                            <span className="font-semibold">Solution:</span> Salicylic acid (2%), benzoyl peroxide (2.5-5%), and niacinamide. Avoid over-drying which can worsen oil production.
                                        </p>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">Aging</h3>
                                        <p className="text-gray-700 mb-2">
                                            Intrinsic (genetic) and extrinsic (environmental) factors contribute to wrinkles and loss of elasticity.
                                        </p>
                                        <p className="text-gray-700">
                                            <span className="font-semibold">Solution:</span> Daily SPF, retinoids (start low), peptides, and antioxidants. Professional treatments like laser can boost results.
                                        </p>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">Hyperpigmentation</h3>
                                        <p className="text-gray-700 mb-2">
                                            Uneven skin tone from sun damage, acne scars, or hormonal changes.
                                        </p>
                                        <p className="text-gray-700">
                                            <span className="font-semibold">Solution:</span> Vitamin C, niacinamide, alpha arbutin, and consistent SPF. Professional peels may help stubborn cases.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Holistic Skin Wellness</h2>

                                <p className="text-gray-700 mb-4">
                                    True skin health comes from combining effective topical care with internal wellness. Your skin reflects your overall health, and treating it with this understanding yields the best long-term results.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    Remember that consistency matters more than perfection. A simple routine done regularly outperforms an elaborate routine done sporadically. Introduce new products gradually and give them 4-6 weeks to show effects.
                                </p>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "Think of skincare as self-care. The minutes you spend caring for your skin daily are an investment in your long-term health and confidence."
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
                                            Dr. Emily Chen, Dermatologist
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600 mb-1">
                                        — Written by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            Sophia Williams
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
                                <h3 className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-2">WELLNESS NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get skincare tips and routines</h4>
                                <p className="text-gray-700 text-sm">
                                    Weekly guides, product recommendations, and science-backed advice for healthy skin.
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
                                            <img src="/product1.jpg" alt="Vitamin C serum" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Vitamin C + E Ferulic Serum</h4>
                                            <p className="text-sm text-gray-600">4.9 ★ (328 reviews)</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/product2.jpg" alt="Ceramide moisturizer" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Ceramide Repair Moisturizer</h4>
                                            <p className="text-sm text-gray-600">4.7 ★ (241 reviews)</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/product3.jpg" alt="Retinol treatment" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Gentle Retinol Night Treatment</h4>
                                            <p className="text-sm text-gray-600">4.5 ★ (187 reviews)</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Skin Type Quiz */}
                        <div className="bg-purple-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Discover Your Skin Type</h3>
                            <p className="text-gray-700 text-sm mb-4">
                                Take our 2-minute quiz to get personalized product recommendations.
                            </p>
                            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200">
                                Start Quiz
                            </button>
                        </div>

                        {/* Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Further Reading</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">The Gut-Skin Connection</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Anti-Aging Ingredients That Work</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Natural vs Synthetic Skincare</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Seasonal Skincare Adjustments</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}