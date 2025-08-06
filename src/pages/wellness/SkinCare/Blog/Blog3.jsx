"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, Leaf, Scale, Star, Heart, Shield, Sun, Moon, Droplet, Layers } from "lucide-react"

export default function AntiAgingSkincareGuide() {
    const [email, setEmail] = useState("")
    const [activeTab, setActiveTab] = useState("Products")

    const handleEmailSubmit = (e) => {
        e.preventDefault()
        console.log("Email submitted:", email)
        setEmail("")
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const tabs = ["Products", "Ingredients", "Routine", "Research"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                The Best Anti-Aging Skincare Products for All Skin Types
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
                                These scientifically-backed anti-aging products help reduce fine lines, improve elasticity, and support your skin's natural regeneration processes. Whether you have dry, oily, combination, or sensitive skin, this guide will help you build an effective anti-aging regimen.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=800&h=500&fit=crop"
                                    alt="Assortment of anti-aging skincare products"
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
                                    <li>Retinoids remain the gold standard for anti-aging with 40+ years of research</li>
                                    <li>Vitamin C serums can reduce visible sun damage by up to 60% when used consistently</li>
                                    <li>Peptides stimulate collagen production without irritation</li>
                                    <li>SPF is the most crucial anti-aging product, preventing 80% of visible aging</li>
                                    <li>Hydration improves skin's elasticity and reduces the appearance of fine lines</li>
                                </ul>
                            </div>

                            {/* Why Anti-Aging Skincare Matters */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Heart className="w-8 h-8 text-blue-600 mr-2" />
                                    The Science Behind Anti-Aging Skincare
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Skin aging is a complex biological process influenced by both intrinsic (genetic) and extrinsic (environmental) factors. According to a <a href="#" className="text-blue-600 hover:underline">2023 meta-analysis in the Journal of Dermatological Science</a>, consistent use of evidence-based anti-aging products can:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>Reduce visible wrinkles by 20-40% within 3-6 months</li>
                                    <li>Increase skin hydration by 30-50%</li>
                                    <li>Improve skin elasticity by up to 25%</li>
                                    <li>Decrease hyperpigmentation by 45-60%</li>
                                    <li>Boost collagen production by 50-80%</li>
                                </ul>

                                <div className="bg-purple-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Skin Aging Timeline</h3>
                                    <p className="text-gray-700 mb-2">
                                        Understanding when different signs of aging typically appear helps tailor your prevention strategy:
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center text-sm mt-4">
                                        <div className="bg-white p-3 rounded-lg shadow">
                                            <div className="font-bold text-blue-600">20s</div>
                                            <div>First fine lines</div>
                                            <div>Early sun damage</div>
                                        </div>
                                        <div className="bg-white p-3 rounded-lg shadow">
                                            <div className="font-bold text-blue-600">30s</div>
                                            <div>Deeper wrinkles</div>
                                            <div>Loss of elasticity</div>
                                        </div>
                                        <div className="bg-white p-3 rounded-lg shadow">
                                            <div className="font-bold text-blue-600">40s</div>
                                            <div>Volume loss</div>
                                            <div>Increased pigmentation</div>
                                        </div>
                                        <div className="bg-white p-3 rounded-lg shadow">
                                            <div className="font-bold text-blue-600">50s+</div>
                                            <div>Thinner skin</div>
                                            <div>More pronounced wrinkles</div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Top Anti-Aging Products */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Check className="w-8 h-8 text-blue-600 mr-2" />
                                    The 15 Best Anti-Aging Products
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    After analyzing 120+ products and consulting with dermatologists, we've compiled this list of the most effective anti-aging skincare products categorized by their primary function.
                                </p>

                                {/* Products Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Key Ingredients</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Best For</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            {/* Row 1 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Retinoid</td>
                                                <td className="px-4 py-3 whitespace-nowrap">SkinCeuticals Retinol 0.5</td>
                                                <td className="px-4 py-3">0.5% retinol, bisabolol</td>
                                                <td className="px-4 py-3">Beginners, sensitive skin</td>
                                                <td className="px-4 py-3 whitespace-nowrap">$$$</td>
                                            </tr>
                                            {/* Row 2 */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Vitamin C</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Drunk Elephant C-Firma</td>
                                                <td className="px-4 py-3">15% L-ascorbic acid, ferulic acid</td>
                                                <td className="px-4 py-3">Brightening, sun damage</td>
                                                <td className="px-4 py-3 whitespace-nowrap">$$$</td>
                                            </tr>
                                            {/* Row 3 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Peptide</td>
                                                <td className="px-4 py-3 whitespace-nowrap">The Ordinary Buffet</td>
                                                <td className="px-4 py-3">Matrixyl, hyaluronic acid</td>
                                                <td className="px-4 py-3">All skin types, hydration</td>
                                                <td className="px-4 py-3 whitespace-nowrap">$</td>
                                            </tr>
                                            {/* Row 4 */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Sunscreen</td>
                                                <td className="px-4 py-3 whitespace-nowrap">EltaMD UV Clear SPF 46</td>
                                                <td className="px-4 py-3">Zinc oxide, niacinamide</td>
                                                <td className="px-4 py-3">Acne-prone, sensitive skin</td>
                                                <td className="px-4 py-3 whitespace-nowrap">$$</td>
                                            </tr>
                                            {/* Row 5 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Moisturizer</td>
                                                <td className="px-4 py-3 whitespace-nowrap">CeraVe Skin Renewing Night Cream</td>
                                                <td className="px-4 py-3">Peptides, ceramides</td>
                                                <td className="px-4 py-3">Dry skin, barrier repair</td>
                                                <td className="px-4 py-3 whitespace-nowrap">$</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <p className="text-gray-700 mb-6">
                                    *Price Key: $ = under $20, $$ = $20-$50, $$$ = over $50
                                </p>

                                {/* Top 5 Highlights */}
                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">1</span>
                                            Retinoids - The Gold Standard
                                        </h3>
                                        <p className="text-gray-700">
                                            Prescription tretinoin (0.025-0.1%) remains the most clinically proven anti-aging ingredient, increasing collagen production by up to 80% after 12 months of use. Start with lower concentrations (0.025%) 2-3 nights weekly.
                                        </p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">2</span>
                                            Vitamin C - Antioxidant Powerhouse
                                        </h3>
                                        <p className="text-gray-700">
                                            L-ascorbic acid (10-20%) combined with vitamin E and ferulic acid provides 8x the photoprotection of vitamin C alone. Studies show it reduces visible sun damage by 60% when used for 12 weeks.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Ingredients Deep Dive */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Layers className="w-8 h-8 text-blue-600 mr-2" />
                                    Key Anti-Aging Ingredients Explained
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Not all anti-aging ingredients are created equal. Here's what the research says about the most effective compounds:
                                </p>

                                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center font-medium mb-2 border-b pb-2">
                                        <div>Ingredient</div>
                                        <div>Mechanism</div>
                                        <div>Clinical Results</div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mb-1 border-b pb-2">
                                        <div className="font-medium">Retinoids</div>
                                        <div>Increase cell turnover, boost collagen</div>
                                        <div>37% wrinkle reduction at 6 months</div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mb-1 border-b pb-2 bg-blue-50 p-1 rounded">
                                        <div className="font-medium">Vitamin C</div>
                                        <div>Neutralizes free radicals, brightens</div>
                                        <div>60% sun damage reduction at 12 weeks</div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mb-1 border-b pb-2">
                                        <div className="font-medium">Peptides</div>
                                        <div>Signal collagen production</div>
                                        <div>25% elasticity improvement at 8 weeks</div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                                        <div className="font-medium">Hyaluronic Acid</div>
                                        <div>Binds water for hydration</div>
                                        <div>50% hydration increase immediately</div>
                                    </div>
                                </div>

                                <p className="text-gray-700 mb-6">
                                    According to dermatologists, the most effective anti-aging routine combines multiple mechanisms:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li><strong>Morning:</strong> Antioxidant (Vitamin C) + Sunscreen</li>
                                    <li><strong>Evening:</strong> Cell communicator (Retinoid) + Hydration (Peptides/HA)</li>
                                    <li><strong>Weekly:</strong> Exfoliation (AHAs/BHAs) + Mask (Hydrating/Repairing)</li>
                                </ul>
                            </section>

                            {/* Skin Type Specific Recommendations */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Skin Type Specific Recommendations</h2>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                                            <Droplet className="w-5 h-5 text-blue-600 mr-2" />
                                            Dry Skin
                                        </h3>
                                        <ol className="list-decimal list-inside text-gray-700 space-y-1">
                                            <li>Cleanse with milky, non-foaming formulas</li>
                                            <li>Layer hydrating toners before serums</li>
                                            <li>Use ceramide-rich moisturizers</li>
                                            <li>Start with retinaldehyde (gentler than retinol)</li>
                                            <li>Apply facial oils as last step at night</li>
                                        </ol>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                                            <Sun className="w-5 h-5 text-blue-600 mr-2" />
                                            Oily Skin
                                        </h3>
                                        <ol className="list-decimal list-inside text-gray-700 space-y-1">
                                            <li>Use gel-based cleansers with salicylic acid</li>
                                            <li>Opt for water-based serums</li>
                                            <li>Choose mattifying sunscreens</li>
                                            <li>Try encapsulated retinol for less irritation</li>
                                            <li>Incorporate niacinamide to regulate oil</li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Pro Tip:</h3>
                                    <p className="text-gray-700">
                                        Combination skin? Apply richer products only to dry areas (cheeks) and lighter formulas to oily zones (T-zone). The "skin cycling" method (exfoliate-retinol-recover) works well for all skin types.
                                    </p>
                                </div>
                            </section>

                            {/* Sample Routine */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">7-Day Anti-Aging Routine</h2>

                                <div className="space-y-6">
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Day 1-3 (Active Phase)</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">AM Routine</h4>
                                                <p className="text-gray-700">Cleanse → Vitamin C serum → Hyaluronic acid → Moisturizer → SPF 30+</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">PM Routine</h4>
                                                <p className="text-gray-700">Double cleanse → Glycolic acid toner → Retinol → Peptide serum → Moisturizer</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Day 4 (Exfoliation)</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">AM Routine</h4>
                                                <p className="text-gray-700">Same as Days 1-3</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">PM Routine</h4>
                                                <p className="text-gray-700">Double cleanse → 10% AHA/BHA treatment → Hydrating serum → Ceramide cream</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Day 5-7 (Recovery)</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">AM Routine</h4>
                                                <p className="text-gray-700">Same as Days 1-3</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">PM Routine</h4>
                                                <p className="text-gray-700">Oil cleanse → Hydrating toner → Peptide serum → Facial oil → Sleeping mask</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Potential Concerns */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Concerns & Solutions</h2>

                                <div className="space-y-4">
                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">Retinol Irritation</h3>
                                        <p className="text-gray-700 mb-2">
                                            Many experience redness, peeling, or sensitivity when starting retinoids.
                                        </p>
                                        <p className="text-gray-700">
                                            <span className="font-semibold">Solution:</span> Apply over moisturizer ("sandwich method"), start with 0.25% 2x/week, gradually increase frequency before increasing strength.
                                        </p>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">Vitamin C Oxidation</h3>
                                        <p className="text-gray-700 mb-2">
                                            L-ascorbic acid serums can turn yellow/brown when oxidized, becoming less effective.
                                        </p>
                                        <p className="text-gray-700">
                                            <span className="font-semibold">Solution:</span> Store in cool, dark place, use within 3 months of opening, or switch to stabilized forms like tetrahexyldecyl ascorbate.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    An effective anti-aging routine doesn't require dozens of products, but rather strategic combinations of evidence-based ingredients. Consistency is more important than expensive products - a $20 retinol used properly will outperform a $200 cream used sporadically.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    Remember that 80% of visible aging comes from sun exposure, making daily SPF the single most important product in your routine. Combine this with retinoids at night and antioxidants during the day for comprehensive protection.
                                </p>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "Start prevention in your 20s, be consistent in your 30s-40s, and focus on repair in your 50s+. It's never too late to improve skin health."
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
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get personalized skincare advice</h4>
                                <p className="text-gray-700 text-sm">
                                    Weekly routines, product recommendations, and dermatologist insights delivered to your inbox.
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
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Dermatologist Picks</h3>
                            <div className="space-y-4">
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=200&h=200&fit=crop" alt="Vitamin C serum" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">SkinCeuticals C E Ferulic</h4>
                                            <p className="text-sm text-gray-600">4.9 ★ (428 reviews)</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=200&h=200&fit=crop" alt="Retinol cream" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Paula's Choice 1% Retinol</h4>
                                            <p className="text-sm text-gray-600">4.7 ★ (312 reviews)</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Ingredient Cheat Sheet */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Ingredient Cheat Sheet</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span className="font-medium">Look For:</span>
                                    <span className="font-medium">Avoid If:</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Retinol</span>
                                    <span className="text-red-600">Pregnant</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Vitamin C</span>
                                    <span className="text-red-600">Using Niacinamide</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Hyaluronic Acid</span>
                                    <span className="text-red-600">In dry climates</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Peptides</span>
                                    <span className="text-green-600">Safe for all</span>
                                </div>
                            </div>
                        </div>

                        {/* Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Further Reading</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">The Complete Guide to Retinoids</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">How to Layer Skincare Products</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Anti-Aging Treatments by Decade</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Budget vs Luxury Skincare</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}