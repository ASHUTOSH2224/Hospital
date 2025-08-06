"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, Shield, AlertTriangle, Droplets, Sun, Moon, Thermometer, Layers, Clock, Heart } from "lucide-react"

export default function SkinSafetyGuide() {
    const [email, setEmail] = useState("")
    const [activeTab, setActiveTab] = useState("Application")

    const handleEmailSubmit = (e) => {
        e.preventDefault()
        console.log("Email submitted:", email)
        setEmail("")
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const tabs = ["Application", "Storage", "Safety", "Ingredients"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Skin Safety: Understanding Proper Application and Storage
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
                                Proper skincare application and storage are crucial for maintaining product efficacy and preventing skin irritation. This comprehensive guide covers essential techniques, storage protocols, and safety considerations to optimize your skincare routine while minimizing risks.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80"
                                    alt="Skincare products arranged neatly"
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
                                    <li>Proper application sequence can increase product absorption by up to 70%</li>
                                    <li>Incorrect storage can reduce product efficacy by 50% within 3 months</li>
                                    <li>Temperature fluctuations degrade active ingredients 3x faster</li>
                                    <li>Cross-contamination causes 35% of skincare-related infections</li>
                                    <li>Expired products may harbor harmful bacteria and lose effectiveness</li>
                                </ul>
                            </div>

                            {/* Why Proper Application Matters */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Droplets className="w-8 h-8 text-blue-600 mr-2" />
                                    The Science of Skin Product Application
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Correct application techniques significantly impact how your skin absorbs and benefits from products. A <a href="#" className="text-blue-600 hover:underline">2023 dermatological study</a> found that proper application methods can:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>Increase active ingredient absorption by 45-70%</li>
                                    <li>Reduce product waste by up to 30%</li>
                                    <li>Minimize skin irritation by maintaining proper pH balance</li>
                                    <li>Enhance product efficacy through optimal layering</li>
                                </ul>

                                <div className="bg-purple-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">The Golden Rule of Skincare Application</h3>
                                    <p className="text-gray-700 mb-2">
                                        <span className="font-semibold">Thinnest to thickest consistency:</span> Always apply products from lightest texture to heaviest.
                                    </p>
                                    <p className="text-gray-700">
                                        This allows each product to properly absorb without creating a barrier that blocks subsequent layers.
                                    </p>
                                </div>
                            </section>

                            {/* Proper Application Techniques */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Check className="w-8 h-8 text-blue-600 mr-2" />
                                    Step-by-Step Application Guide
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Follow this dermatologist-approved sequence for optimal product absorption and skin health:
                                </p>

                                {/* Application Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Step</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product Type</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Application Tips</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Wait Time</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            {/* Row 1 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">1</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Cleanser</td>
                                                <td className="px-4 py-3">Use lukewarm water, gentle circular motions, pat dry</td>
                                                <td className="px-4 py-3 whitespace-nowrap">None</td>
                                            </tr>
                                            {/* Row 2 */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">2</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Toner/Essence</td>
                                                <td className="px-4 py-3">Press into skin, don't rub. Use cotton pad only for exfoliating toners</td>
                                                <td className="px-4 py-3 whitespace-nowrap">30 sec</td>
                                            </tr>
                                            {/* Row 3 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">3</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Serums</td>
                                                <td className="px-4 py-3">3-5 drops, press between palms then press onto face</td>
                                                <td className="px-4 py-3 whitespace-nowrap">1 min</td>
                                            </tr>
                                            {/* Row 4 */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">4</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Moisturizer</td>
                                                <td className="px-4 py-3">Warm between fingers, press then smooth outward</td>
                                                <td className="px-4 py-3 whitespace-nowrap">2 min</td>
                                            </tr>
                                            {/* Row 5 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">5</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Sunscreen (AM)</td>
                                                <td className="px-4 py-3">1/4 tsp for face, dot and pat (no rubbing)</td>
                                                <td className="px-4 py-3 whitespace-nowrap">15 min before sun</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">!</span>
                                            Pro Tip: The 13-Point Method
                                        </h3>
                                        <p className="text-gray-700">
                                            For even serum application: dot product on 13 points (forehead, cheeks, nose, chin, neck) then gently press in. This ensures uniform coverage without over-rubbing.
                                        </p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">!</span>
                                            Finger vs Dropper Application
                                        </h3>
                                        <p className="text-gray-700">
                                            Use droppers for water-based serums to prevent contamination. For thicker creams, use clean spatulas or freshly washed hands to avoid introducing bacteria.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Product Storage Guidelines */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Thermometer className="w-8 h-8 text-blue-600 mr-2" />
                                    Optimal Storage Conditions by Product Type
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Proper storage extends product shelf life and maintains active ingredient potency. Different formulations require specific conditions:
                                </p>

                                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                                    <div className="grid grid-cols-4 gap-4 text-center font-medium mb-2">
                                        <div className="text-left">Product Category</div>
                                        <div>Temperature</div>
                                        <div>Light Exposure</div>
                                        <div>Shelf Life</div>
                                    </div>
                                    <div className="grid grid-cols-4 gap-4 text-center mb-1">
                                        <div className="text-left font-medium">Vitamin C Serums</div>
                                        <div>Refrigerated</div>
                                        <div>Dark container</div>
                                        <div>3 months</div>
                                    </div>
                                    <div className="grid grid-cols-4 gap-4 text-center mb-1 bg-blue-50 p-1 rounded">
                                        <div className="text-left font-medium">Retinoids</div>
                                        <div>Cool (15-20°C)</div>
                                        <div>Opaque packaging</div>
                                        <div>6-12 months</div>
                                    </div>
                                    <div className="grid grid-cols-4 gap-4 text-center mb-1">
                                        <div className="text-left font-medium">Oil-based products</div>
                                        <div>Room temp</div>
                                        <div>Any</div>
                                        <div>12 months</div>
                                    </div>
                                    <div className="grid grid-cols-4 gap-4 text-center">
                                        <div className="text-left font-medium">Water-based creams</div>
                                        <div>Below 25°C</div>
                                        <div>Limited</div>
                                        <div>6 months</div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">Bathroom Storage Risks</h3>
                                        <p className="text-gray-700 mb-2">
                                            The average bathroom experiences temperature fluctuations of 10-15°C and humidity levels above 70% - the worst environment for most skincare products.
                                        </p>
                                        <p className="text-gray-700">
                                            <span className="font-semibold">Solution:</span> Store products in a bedroom drawer or dedicated skincare fridge. Keep only daily-use items in the bathroom.
                                        </p>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">Travel Considerations</h3>
                                        <p className="text-gray-700 mb-2">
                                            Air pressure changes and extreme temperatures during travel can destabilize formulations, especially those containing antioxidants or probiotics.
                                        </p>
                                        <p className="text-gray-700">
                                            <span className="font-semibold">Solution:</span> Use travel-sized containers and insulated bags. Never check temperature-sensitive products.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Safety Considerations */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Shield className="w-8 h-8 text-blue-600 mr-2" />
                                    Critical Safety Guidelines
                                </h2>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Hygiene Practices</h3>
                                        <ol className="list-decimal list-inside text-gray-700 space-y-2">
                                            <li>Wash hands before application (reduces bacterial transfer by 80%)</li>
                                            <li>Use clean applicators instead of fingers for jar packaging</li>
                                            <li>Never share products that contact skin directly</li>
                                            <li>Clean product exteriors monthly with alcohol wipes</li>
                                        </ol>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Expiration Indicators</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Color changes (especially yellowing of clear products)</li>
                                            <li>Separation that doesn't resolve with shaking</li>
                                            <li>Unusual odors (particularly "off" or rancid smells)</li>
                                            <li>Texture changes (unexpected thickening or thinning)</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                                        <AlertTriangle className="w-5 h-5 text-red-600 mr-2" />
                                        Warning Signs Requiring Immediate Disposal
                                    </h3>
                                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                                        <li>Mold growth (visible fuzzy spots or discoloration)</li>
                                        <li>Burning or stinging upon application (not to be confused with normal retinoid irritation)</li>
                                        <li>Product appears contaminated with foreign particles</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Ingredient Stability */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Ingredient Stability Guide</h2>

                                <p className="text-gray-700 mb-4">
                                    Different active ingredients have varying stability profiles that impact storage requirements:
                                </p>

                                <div className="space-y-6">
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Vitamin C (L-ascorbic acid)</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Stability</h4>
                                                <p className="text-gray-700">Highly unstable - oxidizes when exposed to light, air, or heat</p>
                                            </div>
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Optimal Storage</h4>
                                                <p className="text-gray-700">Refrigerated in airtight, opaque packaging</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">Degradation Signs</h4>
                                                <p className="text-gray-700">Yellow/orange coloration, metallic smell</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Retinol</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Stability</h4>
                                                <p className="text-gray-700">Moderate - degrades with UV exposure and high temperatures</p>
                                            </div>
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Optimal Storage</h4>
                                                <p className="text-gray-700">Cool, dark place (15-20°C) in original packaging</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">Degradation Signs</h4>
                                                <p className="text-gray-700">Color change to yellow/brown, reduced efficacy</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Hyaluronic Acid</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Stability</h4>
                                                <p className="text-gray-700">High - remains stable under most conditions</p>
                                            </div>
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Optimal Storage</h4>
                                                <p className="text-gray-700">Room temperature, avoid extreme heat</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">Degradation Signs</h4>
                                                <p className="text-gray-700">Texture changes, microbial growth</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Final Recommendations */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Professional Recommendations</h2>

                                <p className="text-gray-700 mb-4">
                                    Dermatologists recommend these best practices for maintaining skincare safety and efficacy:
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                                            <Clock className="w-5 h-5 text-blue-600 mr-2" />
                                            Product Rotation System
                                        </h3>
                                        <p className="text-gray-700 mb-2">
                                            Implement a first-in, first-out system:
                                        </p>
                                        <ol className="list-decimal list-inside text-gray-700 space-y-1">
                                            <li>Label purchase dates on all products</li>
                                            <li>Arrange by expiration date</li>
                                            <li>Use oldest products first</li>
                                            <li>Quarterly inventory checks</li>
                                        </ol>
                                    </div>
                                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                                            <Layers className="w-5 h-5 text-blue-600 mr-2" />
                                            Seasonal Adjustments
                                        </h3>
                                        <p className="text-gray-700 mb-2">
                                            Adapt storage based on climate:
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>Summer: Move temperature-sensitive products to coolest room</li>
                                            <li>Winter: Keep away from heaters and radiators</li>
                                            <li>Humid climates: Add silica gel packets to storage areas</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "Treat your skincare like perishable food - with attention to freshness, storage conditions, and hygiene. This mindset shift can prevent 90% of product-related skin issues."
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
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get expert skincare tips</h4>
                                <p className="text-gray-700 text-sm">
                                    Monthly guides on product safety, application techniques, and dermatologist recommendations.
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

                        {/* Quick Reference Guide */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Storage Quick Reference</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span className="font-medium">Refrigerate:</span>
                                    <span className="text-blue-600">Vitamin C, Probiotics</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Cool & Dark:</span>
                                    <span className="text-blue-600">Retinoids, Peptides</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Room Temp:</span>
                                    <span className="text-blue-600">Most Moisturizers</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Avoid Humidity:</span>
                                    <span className="text-blue-600">Powder Products</span>
                                </div>
                            </div>
                        </div>

                        {/* Common Mistakes */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Common Storage Mistakes</h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 mt-1">
                                        <AlertTriangle className="w-5 h-5 text-red-500" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900">Medicine Cabinets</h4>
                                        <p className="text-sm text-gray-600">Heat from showers degrades actives</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 mt-1">
                                        <AlertTriangle className="w-5 h-5 text-red-500" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900">Windowsills</h4>
                                        <p className="text-sm text-gray-600">UV exposure breaks down ingredients</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 mt-1">
                                        <AlertTriangle className="w-5 h-5 text-red-500" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900">Car Storage</h4>
                                        <p className="text-sm text-gray-600">Temperature extremes cause separation</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Further Reading</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">The Chemistry of Skincare Preservation</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Dermatologist-Approved Application Techniques</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Understanding Cosmetic Expiration Dates</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Travel Skincare Safety Guide</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}