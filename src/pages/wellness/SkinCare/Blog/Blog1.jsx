"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, Leaf, Scale, Star, Heart, Shield, Sun, Moon, Droplet, Smile } from "lucide-react"

export default function SkincareEditorial() {
    const [email, setEmail] = useState("")
    const [activeTab, setActiveTab] = useState("Overview")

    const handleEmailSubmit = (e) => {
        e.preventDefault()
        console.log("Email submitted:", email)
        setEmail("")
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const tabs = ["Overview", "Routines", "Ingredients", "Myths", "Resources"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Welcome to Healthline Skincare: A Letter from the Editor
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

                            {/* Meta Info */}
                            <div className="flex flex-wrap items-center gap-4 text-gray-500 mb-4">
                                <div className="flex items-center">
                                    <Calendar className="w-4 h-4 mr-1" />
                                    <span className="text-sm">Published on June 15, 2024</span>
                                </div>
                                <div className="flex items-center">
                                    <User className="w-4 h-4 mr-1" />
                                    <span className="text-sm">By Dr. Emily Parker</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-sm">5 min read</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-sm">All Levels</span>
                                </div>
                            </div>

                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                Skincare isn't about perfection. It's about creating nourishing, effective routines for your unique skin. As your editor, I want to share not just products, but a philosophy of skin health that celebrates individuality while grounded in dermatological science.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1200&h=600&fit=crop"
                                    alt="Woman applying skincare product"
                                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                                    style={{ maxHeight: '500px' }}
                                />
                                <p className="text-sm text-gray-500 mt-2 text-center">Photo credit: Unsplash</p>
                            </div>

                            {/* Key Takeaways */}
                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
                                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                    <Star className="w-5 h-5 text-blue-600 mr-2" />
                                    Key Takeaways
                                </h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>Skin health is deeply personal—what works for one may not work for another</li>
                                    <li>Consistency matters more than expensive products</li>
                                    <li>The skin barrier is your first line of defense—nourish it</li>
                                    <li>Sun protection is non-negotiable at any age</li>
                                    <li>Skincare is self-care, not a chore</li>
                                </ul>
                            </div>

                            {/* Introduction */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Heart className="w-8 h-8 text-blue-600 mr-2" />
                                    Why Skincare Matters Beyond Beauty
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Your skin is your body's largest organ, weighing approximately 8 pounds and covering about 22 square feet. It's not just about appearance—it's a vital protective barrier that:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>Regulates body temperature</li>
                                    <li>Prevents water loss</li>
                                    <li>Protects against pathogens</li>
                                    <li>Synthesizes vitamin D</li>
                                    <li>Provides sensory information</li>
                                </ul>

                                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Did You Know?</h3>
                                    <p className="text-gray-700">
                                        The skin renews itself approximately every 28 days. This means that with consistent care, you can see improvements in skin health within a month of starting a proper routine.
                                    </p>
                                </div>
                            </section>

                            {/* The Skin Science */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Shield className="w-8 h-8 text-blue-600 mr-2" />
                                    Understanding Your Skin Barrier
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    The stratum corneum, your skin's outermost layer, is like the brick wall of a fortress. The "bricks" are corneocytes (dead skin cells), and the "mortar" is a lipid matrix containing:
                                </p>

                                {/* Skin Components Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Component</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Percentage</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Function</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">How to Support</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Ceramides</td>
                                                <td className="px-4 py-3 whitespace-nowrap">40-50%</td>
                                                <td className="px-4 py-3">Maintain barrier integrity, prevent moisture loss</td>
                                                <td className="px-4 py-3">Use ceramide-containing moisturizers</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Cholesterol</td>
                                                <td className="px-4 py-3 whitespace-nowrap">25%</td>
                                                <td className="px-4 py-3">Stabilizes cell membranes, supports healing</td>
                                                <td className="px-4 py-3">Balanced diet with healthy fats</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Fatty Acids</td>
                                                <td className="px-4 py-3 whitespace-nowrap">25%</td>
                                                <td className="px-4 py-3">Maintain flexibility, antimicrobial properties</td>
                                                <td className="px-4 py-3">Omega-3 supplements, topical applications</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <p className="text-gray-700 mb-6">
                                    When this barrier is compromised—by over-washing, harsh products, or environmental stressors—you may experience dryness, irritation, or increased sensitivity.
                                </p>

                                {/* Warning Section */}
                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Signs of a Damaged Skin Barrier:</h3>
                                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                                        <li>Persistent dryness or flaking</li>
                                        <li>Redness or irritation</li>
                                        <li>Increased sensitivity to products</li>
                                        <li>Breakouts that won't clear</li>
                                        <li>Stinging when applying products</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Daily Routines */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Sun className="w-8 h-8 text-blue-600 mr-2" />
                                    Morning vs. Night: Crafting Your Ideal Routine
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Your skin has different needs at different times of day. Here's how to structure your routine for optimal results:
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    {/* Morning Routine */}
                                    <div className="border border-blue-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Morning Routine (Protection Focus)</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">1. Gentle Cleanser</h4>
                                                <p className="text-gray-700">Water-based, pH-balanced formula</p>
                                            </div>
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">2. Antioxidant Serum</h4>
                                                <p className="text-gray-700">Vitamin C, E, or ferulic acid</p>
                                            </div>
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">3. Moisturizer</h4>
                                                <p className="text-gray-700">Lightweight, non-comedogenic</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">4. Sunscreen</h4>
                                                <p className="text-gray-700">SPF 30+ broad spectrum (reapply every 2 hours)</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Evening Routine */}
                                    <div className="border border-blue-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-800 px-4 py-2">
                                            <h3 className="font-bold text-white">Evening Routine (Repair Focus)</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">1. Double Cleanse</h4>
                                                <p className="text-gray-700">Oil-based first, then water-based</p>
                                            </div>
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">2. Treatment Step</h4>
                                                <p className="text-gray-700">Retinoids, exfoliants, or targeted treatments</p>
                                            </div>
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">3. Hydrating Serum</h4>
                                                <p className="text-gray-700">Hyaluronic acid or niacinamide</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">4. Night Cream</h4>
                                                <p className="text-gray-700">Richer formula with ceramides</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Pro Tip: The 60 Second Rule</h3>
                                    <p className="text-gray-700">
                                        After cleansing, wait 60 seconds before applying your next product. This allows your skin's pH to rebalance (it rises temporarily after washing) and prevents irritation from active ingredients.
                                    </p>
                                </div>
                            </section>

                            {/* Skin Types */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Droplet className="w-8 h-8 text-blue-600 mr-2" />
                                    Tailoring to Your Skin Type
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    While professional analysis is best, here's a quick guide to identifying and caring for different skin types:
                                </p>

                                {/* Skin Types Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Skin Type</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Characteristics</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Morning Focus</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Evening Focus</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Dry</td>
                                                <td className="px-4 py-3">Tight feeling, visible flaking, dullness</td>
                                                <td className="px-4 py-3">Cream cleansers, hydrating serums, rich moisturizers</td>
                                                <td className="px-4 py-3">Facial oils, overnight masks, humidifier</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Oily</td>
                                                <td className="px-4 py-3">Shine within hours, enlarged pores, acne-prone</td>
                                                <td className="px-4 py-3">Gel cleansers, oil-free moisturizers, mattifying SPF</td>
                                                <td className="px-4 py-3">Salicylic acid, clay masks, lightweight hydration</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Combination</td>
                                                <td className="px-4 py-3">Oily T-zone, dry cheeks, variable pores</td>
                                                <td className="px-4 py-3">Balancing cleansers, zone-specific products</td>
                                                <td className="px-4 py-3">Multi-masking, layered hydration</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Sensitive</td>
                                                <td className="px-4 py-3">Redness, stinging, reactive to products</td>
                                                <td className="px-4 py-3">Fragrance-free, minimal steps, physical SPF</td>
                                                <td className="px-4 py-3">Barrier repair ingredients, calming treatments</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Important Note:</h3>
                                    <p className="text-gray-700">
                                        Your skin type can change with age, seasons, hormones, and environment. Reassess every 6-12 months or when you notice significant changes in how your skin behaves.
                                    </p>
                                </div>
                            </section>

                            {/* Common Mistakes */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Moon className="w-8 h-8 text-blue-600 mr-2" />
                                    Common Skincare Mistakes to Avoid
                                </h2>

                                <div className="space-y-4">
                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">Over-Exfoliation</h3>
                                        <p className="text-gray-700 mb-2">
                                            Using physical or chemical exfoliants too frequently can strip your skin barrier. Signs include redness, increased sensitivity, and paradoxical oiliness.
                                        </p>
                                        <p className="text-gray-700">
                                            <span className="font-semibold">Solution:</span> Limit exfoliation to 1-3 times weekly based on skin tolerance. Alternate between different types (AHAs vs BHAs).
                                        </p>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">Skipping Sunscreen</h3>
                                        <p className="text-gray-700 mb-2">
                                            UV damage is cumulative and responsible for 90% of visible aging. Even on cloudy days or indoors, UVA rays penetrate windows.
                                        </p>
                                        <p className="text-gray-700">
                                            <span className="font-semibold">Solution:</span> Make SPF part of your morning routine year-round. Choose broad spectrum protection with at least SPF 30.
                                        </p>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">Product Overload</h3>
                                        <p className="text-gray-700 mb-2">
                                            Layering too many active ingredients (like vitamin C, retinol, and acids) can cause irritation without added benefits.
                                        </p>
                                        <p className="text-gray-700">
                                            <span className="font-semibold">Solution:</span> Follow the "less is more" approach. Introduce new products one at a time, waiting 2-4 weeks between additions.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Smile className="w-8 h-8 text-blue-600 mr-2" />
                                    Final Thoughts: Skincare as Self-Care
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    In our fast-paced world, your skincare routine can become a mindful practice rather than just another task. Those few minutes morning and night are an opportunity to:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>Check in with yourself and your wellbeing</li>
                                    <li>Practice gratitude for your body's resilience</li>
                                    <li>Create a ritual that grounds your day</li>
                                </ul>

                                <p className="text-gray-700 mb-4">
                                    Remember that visible results take time—typically 4-6 weeks for hydration improvements and 3-6 months for collagen-related changes. Consistency and patience are key.
                                </p>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium italic">
                                        "True skincare isn't about chasing perfection or trends—it's about nurturing your skin's health so you can forget about it and live your life. That's the ultimate glow."
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
                                            Dr. Emily Parker, MD
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600 mb-1">
                                        — Board-certified dermatologist
                                    </p>
                                    <p className="text-sm text-gray-600 mb-1">
                                        — 15 years clinical experience
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
                                    Monthly routines, ingredient spotlights, and dermatologist tips delivered to your inbox.
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
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Editor's Product Picks</h3>
                            <div className="space-y-4">
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=200&h=200&fit=crop" alt="Vitamin C serum" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Vitamin C Serum</h4>
                                            <p className="text-sm text-gray-600">Brightening & antioxidant protection</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=200&h=200&fit=crop" alt="Ceramide moisturizer" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Ceramide Moisturizer</h4>
                                            <p className="text-sm text-gray-600">Barrier repair & hydration</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?w=200&h=200&fit=crop" alt="Mineral sunscreen" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Mineral Sunscreen</h4>
                                            <p className="text-sm text-gray-600">SPF 50, non-comedogenic</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Skin Type Quiz */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Unsure of Your Skin Type?</h3>
                            <p className="text-gray-700 mb-4">
                                Take our 2-minute quiz to get personalized recommendations.
                            </p>
                            <button className="w-full bg-white border border-blue-600 text-blue-600 font-bold py-3 px-4 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                                Start Skin Quiz
                            </button>
                        </div>

                        {/* Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Further Reading</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">The Science of Skin Barrier Function</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">How to Read Skincare Labels</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Budget vs Luxury: What's Worth It?</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Seasonal Skincare Adjustments</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Skincare for Different Life Stages</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}