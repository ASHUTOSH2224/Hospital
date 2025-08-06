"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, Heart, Moon, Sun, Droplet, Shield, AlertCircle, Star } from "lucide-react"

export default function BuildingYourSkincareRoutine() {
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

    const tabs = ["Basics", "Products", "Skin Types", "Common Mistakes"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                A Beginner's Guide to Building Your Skincare Routine
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
                                Starting a skincare routine is an excellent way to maintain healthy, glowing skin. Whether you're a complete beginner or looking to refine your regimen, this comprehensive guide will walk you through the essential steps, product recommendations, and expert tips to achieve your best skin yet.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=800&h=500&fit=crop"
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
                                    <li>Consistency is more important than product quantity</li>
                                    <li>A basic routine includes cleanser, moisturizer, and sunscreen</li>
                                    <li>Skin type determines product selection</li>
                                    <li>Introduce new products one at a time</li>
                                    <li>Morning and evening routines serve different purposes</li>
                                </ul>
                            </div>

                            {/* Why Skincare Matters */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Heart className="w-8 h-8 text-blue-600 mr-2" />
                                    Why Skincare Matters
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Your skin is the body's largest organ and serves as the first line of defense against environmental aggressors. According to a <a href="#" className="text-blue-600 hover:underline">2024 study in the Journal of Dermatological Science</a>, a consistent skincare routine can:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>Improve skin barrier function by up to 40%</li>
                                    <li>Reduce signs of aging when started early (23% fewer wrinkles by age 50)</li>
                                    <li>Decrease acne breakouts by 35-60% in prone individuals</li>
                                    <li>Lower skin cancer risk through proper sun protection</li>
                                </ul>

                                <div className="bg-purple-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Skin Barrier 101</h3>
                                    <p className="text-gray-700 mb-2">
                                        Your skin's moisture barrier is composed of lipids (ceramides, cholesterol, fatty acids) that protect against moisture loss and environmental damage.
                                    </p>
                                    <p className="text-gray-700">
                                        A compromised barrier leads to dryness, irritation, and sensitivity. Proper skincare helps maintain this protective layer.
                                    </p>
                                </div>
                            </section>

                            {/* The Basic Routine */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Check className="w-8 h-8 text-blue-600 mr-2" />
                                    The Basic 3-Step Routine
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Every effective skincare routine, no matter how simple or advanced, builds upon these three fundamental steps:
                                </p>

                                {/* Steps Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Step</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purpose</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">AM/PM</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product Types</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            {/* Row 1 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">1. Cleanse</td>
                                                <td className="px-4 py-3">Remove dirt, oil, impurities</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Both</td>
                                                <td className="px-4 py-3">Gel, cream, foam, oil cleansers</td>
                                            </tr>
                                            {/* Row 2 */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">2. Moisturize</td>
                                                <td className="px-4 py-3">Hydrate and protect skin barrier</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Both</td>
                                                <td className="px-4 py-3">Lotions, creams, gels, serums</td>
                                            </tr>
                                            {/* Row 3 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">3. Sun Protect</td>
                                                <td className="px-4 py-3">Prevent UV damage</td>
                                                <td className="px-4 py-3 whitespace-nowrap">AM only</td>
                                                <td className="px-4 py-3">Mineral, chemical, hybrid sunscreens</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="grid md:grid-cols-3 gap-6 mb-8">
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">1</span>
                                            Cleansing Basics
                                        </h3>
                                        <p className="text-gray-700">
                                            Choose a cleanser that removes impurities without stripping skin. Morning cleansing can be gentler than evening when you need to remove sunscreen and makeup.
                                        </p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">2</span>
                                            Moisturizing 101
                                        </h3>
                                        <p className="text-gray-700">
                                            Even oily skin needs hydration. Look for non-comedogenic formulas if prone to breakouts. Apply to damp skin for better absorption.
                                        </p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">3</span>
                                            Sun Protection
                                        </h3>
                                        <p className="text-gray-700">
                                            SPF 30+ is essential daily, even indoors or on cloudy days. Reapply every 2 hours of sun exposure. Mineral options are gentler for sensitive skin.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* AM vs PM Routine */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <div className="flex items-center">
                                        <Sun className="w-8 h-8 text-yellow-500 mr-2" />
                                        <Moon className="w-8 h-8 text-indigo-600 ml-2" />
                                    </div>
                                    <span className="ml-4">Morning vs Night Routine Differences</span>
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    While both routines share cleansing and moisturizing, their purposes differ significantly:
                                </p>

                                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                                                <Sun className="w-5 h-5 text-yellow-500 mr-2" />
                                                Morning Focus
                                            </h3>
                                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                                <li>Protection from environmental damage</li>
                                                <li>Antioxidants to combat free radicals</li>
                                                <li>Sunscreen as the non-negotiable final step</li>
                                                <li>Lightweight hydration under makeup</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                                                <Moon className="w-5 h-5 text-indigo-600 mr-2" />
                                                Night Focus
                                            </h3>
                                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                                <li>Repair and regeneration</li>
                                                <li>Active ingredients like retinol or AHAs</li>
                                                <li>Deeper hydration and nourishment</li>
                                                <li>Thorough cleansing to remove daily buildup</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Circadian Rhythm Connection</h3>
                                    <p className="text-gray-700">
                                        Your skin's cellular repair peaks at night, making nighttime the ideal window for active ingredients. Meanwhile, daytime stressors like pollution and UV require protective measures.
                                    </p>
                                </div>
                            </section>

                            {/* Skin Type Guide */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Identifying Your Skin Type</h2>

                                <p className="text-gray-700 mb-6">
                                    Choosing the right products starts with understanding your skin type. Here's how to determine yours:
                                </p>

                                {/* Skin Type Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Skin Type</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Characteristics</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cleanser</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Moisturizer</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 font-medium text-gray-900">Dry</td>
                                                <td className="px-4 py-3">Tight feeling, flakiness, dullness</td>
                                                <td className="px-4 py-3">Cream or oil-based</td>
                                                <td className="px-4 py-3">Rich creams with ceramides</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 font-medium text-gray-900">Oily</td>
                                                <td className="px-4 py-3">Shiny, enlarged pores, acne-prone</td>
                                                <td className="px-4 py-3">Gel or foam</td>
                                                <td className="px-4 py-3">Oil-free, water-based</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 font-medium text-gray-900">Combination</td>
                                                <td className="px-4 py-3">Oily T-zone, dry cheeks</td>
                                                <td className="px-4 py-3">Balanced gel-cream</td>
                                                <td className="px-4 py-3">Lightweight lotion</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 font-medium text-gray-900">Sensitive</td>
                                                <td className="px-4 py-3">Redness, stinging, reactive</td>
                                                <td className="px-4 py-3">Fragrance-free, soothing</td>
                                                <td className="px-4 py-3">Barrier-repair formulas</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 font-medium text-gray-900">Normal</td>
                                                <td className="px-4 py-3">Balanced, few concerns</td>
                                                <td className="px-4 py-3">Milky or gentle foam</td>
                                                <td className="px-4 py-3">Light to medium creams</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">The Bare-Face Test</h3>
                                    <p className="text-gray-700 mb-2">
                                        To accurately determine your skin type:
                                    </p>
                                    <ol className="list-decimal list-inside text-gray-700 space-y-1">
                                        <li>Wash face with a gentle cleanser</li>
                                        <li>Pat dry and apply no products</li>
                                        <li>Wait 1-2 hours then observe</li>
                                        <li>Check for oiliness, tightness, or shine</li>
                                    </ol>
                                </div>
                            </section>

                            {/* Product Ingredients Guide */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Droplet className="w-8 h-8 text-blue-600 mr-2" />
                                    Key Ingredients to Look For
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Understanding ingredients helps you choose effective products. Here are the most beneficial for each concern:
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Hydration Heroes</h3>
                                        </div>
                                        <div className="p-4">
                                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                                                <li><span className="font-medium">Hyaluronic Acid:</span> Holds 1000x its weight in water</li>
                                                <li><span className="font-medium">Glycerin:</span> Humectant that draws moisture to skin</li>
                                                <li><span className="font-medium">Ceramides:</span> Replenish skin's natural lipids</li>
                                                <li><span className="font-medium">Squalane:</span> Plant-derived moisture similar to skin's oils</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-purple-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Anti-Aging Powerhouses</h3>
                                        </div>
                                        <div className="p-4">
                                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                                                <li><span className="font-medium">Retinol:</span> Gold standard for collagen production</li>
                                                <li><span className="font-medium">Vitamin C:</span> Brightens and protects from free radicals</li>
                                                <li><span className="font-medium">Peptides:</span> Signal skin to produce more collagen</li>
                                                <li><span className="font-medium">Niacinamide:</span> Improves elasticity and texture</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-green-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Acne Fighters</h3>
                                        </div>
                                        <div className="p-4">
                                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                                                <li><span className="font-medium">Salicylic Acid:</span> Exfoliates inside pores</li>
                                                <li><span className="font-medium">Benzoyl Peroxide:</span> Kills acne bacteria</li>
                                                <li><span className="font-medium">Azelaic Acid:</span> Reduces inflammation and pigmentation</li>
                                                <li><span className="font-medium">Tea Tree Oil:</span> Natural antimicrobial (use diluted)</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-yellow-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Sensitive Skin Soothers</h3>
                                        </div>
                                        <div className="p-4">
                                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                                                <li><span className="font-medium">Centella Asiatica:</span> Calms redness and irritation</li>
                                                <li><span className="font-medium">Oat Extract:</span> Soothes itching and inflammation</li>
                                                <li><span className="font-medium">Aloe Vera:</span> Cooling and hydrating</li>
                                                <li><span className="font-medium">Allantoin:</span> Gentle skin protectant</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Common Mistakes */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <AlertCircle className="w-8 h-8 text-red-600 mr-2" />
                                    Common Beginner Mistakes to Avoid
                                </h2>

                                <div className="space-y-6">
                                    <div className="p-4 border border-red-200 rounded-lg bg-red-50">
                                        <h3 className="font-bold text-gray-900 mb-2">1. Over-Exfoliation</h3>
                                        <p className="text-gray-700">
                                            Using physical scrubs daily or combining multiple chemical exfoliants can damage your moisture barrier. <span className="font-medium">Solution:</span> Limit exfoliation to 2-3 times weekly and never combine AHAs/BHAs with retinol in the same routine.
                                        </p>
                                    </div>

                                    <div className="p-4 border border-red-200 rounded-lg bg-red-50">
                                        <h3 className="font-bold text-gray-900 mb-2">2. Skipping Sunscreen</h3>
                                        <p className="text-gray-700">
                                            UV damage accounts for 80% of visible aging. Even indoors, blue light from screens can cause pigmentation. <span className="font-medium">Solution:</span> Make SPF 30+ your non-negotiable final morning step, year-round.
                                        </p>
                                    </div>

                                    <div className="p-4 border border-red-200 rounded-lg bg-red-50">
                                        <h3 className="font-bold text-gray-900 mb-2">3. Using Too Many Actives</h3>
                                        <p className="text-gray-700">
                                            Stacking retinoids, vitamin C, and exfoliating acids can irritate skin. <span className="font-medium">Solution:</span> Introduce one active at a time, waiting 2-4 weeks between additions.
                                        </p>
                                    </div>

                                    <div className="p-4 border border-red-200 rounded-lg bg-red-50">
                                        <h3 className="font-bold text-gray-900 mb-2">4. Not Patch Testing</h3>
                                        <p className="text-gray-700">
                                            Applying new products directly to your face risks reactions. <span className="font-medium">Solution:</span> Test on your inner arm or behind the ear for 48 hours before facial use.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Sample Routines */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Sample Beginner Routines</h2>

                                <div className="space-y-8">
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Basic Budget Routine ($50 or less)</h3>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="border border-gray-200 rounded-lg p-4">
                                                <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                                                    <Sun className="w-5 h-5 text-yellow-500 mr-2" />
                                                    Morning
                                                </h4>
                                                <ol className="list-decimal list-inside text-gray-700 space-y-1 pl-2">
                                                    <li>CeraVe Hydrating Cleanser ($12)</li>
                                                    <li>The Ordinary Niacinamide 10% + Zinc 1% ($6)</li>
                                                    <li>CeraVe AM Facial Moisturizing Lotion SPF 30 ($15)</li>
                                                </ol>
                                            </div>
                                            <div className="border border-gray-200 rounded-lg p-4">
                                                <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                                                    <Moon className="w-5 h-5 text-indigo-600 mr-2" />
                                                    Evening
                                                </h4>
                                                <ol className="list-decimal list-inside text-gray-700 space-y-1 pl-2">
                                                    <li>Same cleanser as morning</li>
                                                    <li>The Ordinary Granactive Retinoid 2% Emulsion ($10)</li>
                                                    <li>CeraVe Moisturizing Cream ($16)</li>
                                                </ol>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Mid-Range Routine ($100-$150)</h3>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="border border-gray-200 rounded-lg p-4">
                                                <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                                                    <Sun className="w-5 h-5 text-yellow-500 mr-2" />
                                                    Morning
                                                </h4>
                                                <ol className="list-decimal list-inside text-gray-700 space-y-1 pl-2">
                                                    <li>La Roche-Posay Toleriane Hydrating Gentle Cleanser ($15)</li>
                                                    <li>Paula's Choice C15 Super Booster ($49)</li>
                                                    <li>Neutrogena Hydro Boost Water Gel ($20)</li>
                                                    <li>EltaMD UV Clear Broad-Spectrum SPF 46 ($37)</li>
                                                </ol>
                                            </div>
                                            <div className="border border-gray-200 rounded-lg p-4">
                                                <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                                                    <Moon className="w-5 h-5 text-indigo-600 mr-2" />
                                                    Evening
                                                </h4>
                                                <ol className="list-decimal list-inside text-gray-700 space-y-1 pl-2">
                                                    <li>Same cleanser as morning</li>
                                                    <li>Paula's Choice 2% BHA Liquid Exfoliant ($32)</li>
                                                    <li>CeraVe Skin Renewing Retinol Serum ($17)</li>
                                                    <li>First Aid Beauty Ultra Repair Cream ($36)</li>
                                                </ol>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* When to See a Dermatologist */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">When to See a Dermatologist</h2>

                                <p className="text-gray-700 mb-4">
                                    While over-the-counter products can address many concerns, professional help is recommended for:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>Persistent acne that doesn't improve after 8-12 weeks of consistent treatment</li>
                                    <li>Suspicious moles or skin growths that change in size, shape, or color</li>
                                    <li>Severe eczema or psoriasis that impacts daily life</li>
                                    <li>Unexplained rashes or skin reactions</li>
                                    <li>Desire for prescription-strength treatments (like tretinoin or hydroquinone)</li>
                                </ul>

                                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                                    <h3 className="font-bold text-gray-900 mb-2">Pro Tip:</h3>
                                    <p className="text-gray-700">
                                        Take photos of concerning skin issues to track changes over time. Many dermatologists now offer telehealth consultations for initial assessments.
                                    </p>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Building an effective skincare routine is a journey, not a destination. Start simple, be patient (products take 4-8 weeks to show full effects), and remember that healthy skin comes from consistency rather than complexity.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    Your skin is unique—what works for others may not work for you, and that's okay. Pay attention to how your skin responds and adjust accordingly. When in doubt, less is often more.
                                </p>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "Great skin doesn't happen by chance—it happens by appointment. Show up for your skin every day, and it will show up for you."
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
                                            Dr. Emily Park, Board-Certified Dermatologist
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600 mb-1">
                                        — Written by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            Jessica Lee
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
                                    Weekly routines, product recommendations, and dermatologist advice delivered to your inbox.
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
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Beginner-Friendly Products</h3>
                            <div className="space-y-4">
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=200&h=200&fit=crop" alt="CeraVe cleanser" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">CeraVe Hydrating Cleanser</h4>
                                            <p className="text-sm text-gray-600">4.7 ★ (2,456 reviews)</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=200&h=200&fit=crop" alt="The Ordinary serum" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">The Ordinary Niacinamide</h4>
                                            <p className="text-sm text-gray-600">4.5 ★ (3,102 reviews)</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?w=200&h=200&fit=crop" alt="EltaMD sunscreen" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">EltaMD UV Clear SPF 46</h4>
                                            <p className="text-sm text-gray-600">4.8 ★ (4,567 reviews)</p>
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
                                    <span className="font-medium">For Dryness:</span>
                                    <span className="text-blue-600">Hyaluronic Acid</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>For Acne:</span>
                                    <span className="text-blue-600">Salicylic Acid</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>For Aging:</span>
                                    <span className="text-blue-600">Retinol</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>For Redness:</span>
                                    <span className="text-blue-600">Centella Asiatica</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>For Dullness:</span>
                                    <span className="text-blue-600">Vitamin C</span>
                                </div>
                            </div>
                        </div>

                        {/* Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Further Reading</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">How to Layer Skincare Products</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">The Science Behind Retinoids</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Sunscreen Myths Debunked</a>
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