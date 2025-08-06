"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, Layers, Droplet, Moon, Sun, Shield, AlertTriangle, Heart } from "lucide-react"

export default function SkincareLayeringGuide() {
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

    const tabs = ["Basics", "Skin Types", "Ingredients", "Routines"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Layering Techniques: The Key to Effective Skincare
                            </h1>

                            {/* Navigation Tabs */}
                            <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-200">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                                            activeTab === tab
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
                                Mastering the art of product layering can transform your skincare routine from ineffective to extraordinary. This comprehensive guide covers the science of layering, product compatibility, and customized approaches for different skin types to help you achieve optimal results.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1596755389378-c31d21fd1273?ixlib=rb-4.0.3&auto=format&fit=crop&w=732&h=549&q=80"
                                    alt="Skincare products arranged in order of application"
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
                                    <li>Apply products from thinnest to thickest consistency</li>
                                    <li>Wait 30-60 seconds between layers for optimal absorption</li>
                                    <li>Water-based products before oil-based products</li>
                                    <li>Active ingredients should be applied to clean skin for maximum efficacy</li>
                                    <li>Morning and evening routines require different approaches</li>
                                </ul>
                            </div>

                            {/* The Science of Layering */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Layers className="w-8 h-8 text-blue-600 mr-2" />
                                    The Science Behind Skincare Layering
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Proper layering isn't just about order—it's about understanding how products interact with your skin and each other. The stratum corneum (skin's outermost layer) acts as both a barrier and a pathway for product absorption. A <a href="#" className="text-blue-600 hover:underline">2023 study in the Journal of Dermatological Science</a> found that correct layering can:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>Increase active ingredient absorption by up to 70%</li>
                                    <li>Reduce product pilling by 85%</li>
                                    <li>Enhance hydration retention throughout the day</li>
                                    <li>Minimize irritation from potent actives</li>
                                </ul>

                                <div className="bg-purple-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">The 3-Phase Absorption Theory</h3>
                                    <p className="text-gray-700 mb-2">
                                        Skincare products are absorbed in three distinct phases:
                                    </p>
                                    <ol className="list-decimal list-inside text-gray-700 space-y-1">
                                        <li><strong>Penetration Phase:</strong> Products with small molecules (toners, essences) that prepare skin</li>
                                        <li><strong>Treatment Phase:</strong> Active ingredients (serums, treatments) that address specific concerns</li>
                                        <li><strong>Occlusive Phase:</strong> Barrier products (creams, oils) that seal everything in</li>
                                    </ol>
                                </div>
                            </section>

                            {/* The Golden Rules of Layering */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Check className="w-8 h-8 text-blue-600 mr-2" />
                                    The Golden Rules of Skincare Layering
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    These fundamental principles apply to all skin types and routines. Following them will ensure your products work synergistically rather than against each other.
                                </p>

                                {/* Layering Rules Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rule</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Why It Matters</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Example</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 font-medium text-gray-900">Thinnest to thickest</td>
                                                <td className="px-4 py-3">Thinner products can't penetrate through thicker ones</td>
                                                <td className="px-4 py-3">Toner → Serum → Moisturizer</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 font-medium text-gray-900">Lowest to highest pH</td>
                                                <td className="px-4 py-3">Some actives require specific pH levels to work</td>
                                                <td className="px-4 py-3">Vitamin C (pH 3.5) → Niacinamide (pH 5.5)</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 font-medium text-gray-900">Water before oil</td>
                                                <td className="px-4 py-3">Water-based products can't penetrate oil barriers</td>
                                                <td className="px-4 py-3">Hyaluronic acid → Face oil</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 font-medium text-gray-900">Actives before hydrators</td>
                                                <td className="px-4 py-3">Treatment products need direct skin contact</td>
                                                <td className="px-4 py-3">Retinol → Hyaluronic acid</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 font-medium text-gray-900">Wait times matter</td>
                                                <td className="px-4 py-3">Prevents pilling and ensures absorption</td>
                                                <td className="px-4 py-3">30 sec between layers, 5 min after actives</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">1</span>
                                            The 5-Minute Rule
                                        </h3>
                                        <p className="text-gray-700">
                                            After applying active ingredients like vitamin C or retinol, wait 5 minutes before applying the next product. This allows the active to properly absorb and reduces irritation from product interactions.
                                        </p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">2</span>
                                            The Sandwich Method
                                        </h3>
                                        <p className="text-gray-700">
                                            For sensitive skin, "sandwich" potent actives between layers of hydration: Moisturizer → Retinol → Moisturizer. This buffers the active while maintaining efficacy.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Skin Type Specific Guides */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Droplet className="w-8 h-8 text-blue-600 mr-2" />
                                    Customized Layering for Different Skin Types
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    While the basic principles remain constant, different skin types benefit from adjustments in product selection and layering techniques.
                                </p>

                                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center font-medium mb-2">
                                        <div>Skin Type</div>
                                        <div>Key Concern</div>
                                        <div>Layering Focus</div>
                                        <div>Product Count</div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center mb-1 border-b border-gray-200 pb-2">
                                        <div className="font-medium">Oily/Acne-Prone</div>
                                        <div>Clogged pores, shine</div>
                                        <div>Light layers, non-comedogenic</div>
                                        <div>4-6 products</div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center mb-1 border-b border-gray-200 pb-2 bg-blue-50">
                                        <div className="font-medium">Dry</div>
                                        <div>Dehydration, flaking</div>
                                        <div>Hydration sealing</div>
                                        <div>5-7 products</div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center mb-1 border-b border-gray-200 pb-2">
                                        <div className="font-medium">Combination</div>
                                        <div>Zone-specific needs</div>
                                        <div>Targeted application</div>
                                        <div>5-6 products</div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                                        <div className="font-medium">Sensitive</div>
                                        <div>Redness, irritation</div>
                                        <div>Barrier support</div>
                                        <div>3-5 products</div>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    {/* Oily Skin */}
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Oily/Acne-Prone Skin Routine</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Cleansing Phase</h4>
                                                <p className="text-gray-700">Oil cleanser → Foam cleanser with salicylic acid</p>
                                            </div>
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Treatment Phase</h4>
                                                <p className="text-gray-700">Toner with niacinamide → Lightweight serum with zinc</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">Protection Phase</h4>
                                                <p className="text-gray-700">Oil-free moisturizer → Matte sunscreen</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Dry Skin */}
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Dry Skin Routine</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Cleansing Phase</h4>
                                                <p className="text-gray-700">Cream cleanser → Hydrating toner with hyaluronic acid</p>
                                            </div>
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Treatment Phase</h4>
                                                <p className="text-gray-700">Essence → Hydrating serum → Face oil</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">Protection Phase</h4>
                                                <p className="text-gray-700">Rich cream → Occlusive balm on dry patches</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* AM vs PM Routines */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Sun className="w-8 h-8 text-yellow-500 mr-2" />
                                    <Moon className="w-8 h-8 text-indigo-600 mr-2" />
                                    Morning vs. Evening Layering Strategies
                                </h2>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Morning Routine Focus</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li><strong>Protection:</strong> Antioxidants (vitamin C) to combat daytime damage</li>
                                            <li><strong>Hydration:</strong> Hyaluronic acid to plump skin before makeup</li>
                                            <li><strong>Barrier:</strong> Sunscreen as the non-negotiable final step</li>
                                            <li><strong>Lightweight:</strong> Fewer layers to prevent midday shine</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Evening Routine Focus</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li><strong>Repair:</strong> Retinoids and peptides to work overnight</li>
                                            <li><strong>Exfoliation:</strong> AHAs/BHAs when skin is in renewal mode</li>
                                            <li><strong>Recovery:</strong> Ceramides and oils to support barrier repair</li>
                                            <li><strong>Deep Treatment:</strong> More layers and occlusives allowed</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Pro Tip:</h3>
                                    <p className="text-gray-700">
                                        Your evening routine should have 1-2 more products than your morning routine. Nighttime is when skin repairs itself, so this is when you should use your most potent treatments.
                                    </p>
                                </div>
                            </section>

                            {/* Ingredient Compatibility */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Shield className="w-8 h-8 text-blue-600 mr-2" />
                                    Ingredient Compatibility Guide
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Some ingredients work synergistically while others can cancel each other out or cause irritation when combined. Here's what you need to know:
                                </p>

                                <div className="space-y-4">
                                    <div className="p-4 border border-gray-200 rounded-lg bg-green-50">
                                        <h3 className="font-bold text-gray-900 mb-2">Power Pairings</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li><strong>Vitamin C + Vitamin E:</strong> Increases antioxidant protection by 400%</li>
                                            <li><strong>Hyaluronic Acid + Ceramides:</strong> Hydration that lasts 12+ hours</li>
                                            <li><strong>Niacinamide + Zinc:</strong> Reduces inflammation and oil production</li>
                                        </ul>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg bg-red-50">
                                        <h3 className="font-bold text-gray-900 mb-2">Combinations to Avoid</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li><strong>Vitamin C + Retinol:</strong> Can cause irritation and reduce efficacy</li>
                                            <li><strong>Benzoyl Peroxide + Retinol:</strong> Deactivates both ingredients</li>
                                            <li><strong>AHAs/BHAs + Physical Exfoliants:</strong> Leads to over-exfoliation</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Common Mistakes */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <AlertTriangle className="w-8 h-8 text-yellow-500 mr-2" />
                                    Common Layering Mistakes
                                </h2>

                                <div className="space-y-4">
                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">Mixing Water and Oil-Based Products Incorrectly</h3>
                                        <p className="text-gray-700">
                                            Applying an oil-based product before a water-based one prevents the latter from absorbing. Always check product bases - water-based products will list "aqua" as the first ingredient.
                                        </p>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">Overloading Active Ingredients</h3>
                                        <p className="text-gray-700">
                                            Using multiple potent actives (like retinol + vitamin C + exfoliants) in one routine can compromise your skin barrier. Spread them across different routines or days.
                                        </p>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">Ignoring pH Levels</h3>
                                        <p className="text-gray-700">
                                            Acidic products (pH 3-4) like vitamin C should be applied before neutral products (pH 5-7). Applying a higher pH product first raises skin's pH, making acidic products less effective.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Mastering skincare layering is both an art and a science. While these guidelines provide a strong foundation, remember that your skin is unique. Pay attention to how it responds and adjust accordingly.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    The most expensive products won't work if applied incorrectly, while modest products applied in the right order can deliver exceptional results. Consistency and patience are key—it takes 4-6 weeks to see most skincare benefits.
                                </p>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "Think of your skincare routine as building a house. You need a solid foundation (cleansing), strong walls (treatment), and a good roof (protection). Skip steps or build in the wrong order, and the whole structure suffers."
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
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get personalized routine advice</h4>
                                <p className="text-gray-700 text-sm">
                                    Weekly tips, ingredient spotlights, and dermatologist-approved advice.
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

                        {/* Popular Routines */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Popular Routine Templates</h3>
                            <div className="space-y-4">
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/routine1.jpg" alt="Morning skincare routine" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">5-Minute Morning Routine</h4>
                                            <p className="text-sm text-gray-600">4.7 ★ (89 reviews)</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/routine2.jpg" alt="Nighttime skincare routine" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Anti-Aging Night Routine</h4>
                                            <p className="text-sm text-gray-600">4.9 ★ (142 reviews)</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Ingredient Cheat Sheet */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Ingredient Layering Cheat Sheet</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span className="font-medium">Ingredient</span>
                                    <span className="font-medium">Layer Position</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Vitamin C</span>
                                    <span className="text-blue-600">After cleansing, before moisturizer</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Retinol</span>
                                    <span className="text-blue-600">After toner, before moisturizer</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Hyaluronic Acid</span>
                                    <span className="text-blue-600">On damp skin, before oils</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Niacinamide</span>
                                    <span className="text-blue-600">After water-based, before oil-based</span>
                                </div>
                            </div>
                        </div>

                        {/* Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Further Reading</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">The Complete Guide to Skincare pH Levels</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">How to Build a Minimalist Routine</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Dermatologist-Approved Product Combinations</a>
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