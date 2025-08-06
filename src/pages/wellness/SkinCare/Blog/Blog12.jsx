"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, Leaf, Scale, Star, Shield, FlaskConical, AlertCircle, Droplet, Heart } from "lucide-react"

export default function SkincareProductGuide() {
    const [email, setEmail] = useState("")
    const [activeTab, setActiveTab] = useState("Quality")

    const handleEmailSubmit = (e) => {
        e.preventDefault()
        console.log("Email submitted:", email)
        setEmail("")
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const tabs = ["Quality", "Safety", "Selection", "Ingredients"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Understanding Skincare Products: Quality, Safety, and Selection
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
                                Navigating the world of skincare products can be overwhelming. This comprehensive guide explores product quality factors, safety certifications, proper usage, and industry standards to ensure you're getting effective, safe skincare products that deliver real results for your skin health.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80"
                                    alt="Assortment of skincare products on a table"
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
                                    <li>Quality skincare combines effective ingredients with stable formulations</li>
                                    <li>Safety certifications like EWG Verified and FDA approval indicate rigorous testing</li>
                                    <li>pH balance (4.5-5.5) is crucial for maintaining skin's acid mantle</li>
                                    <li>Active ingredient concentrations determine product efficacy</li>
                                    <li>Proper storage can extend product shelf life by up to 30%</li>
                                </ul>
                            </div>

                            {/* Why Skincare Quality Matters */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <FlaskConical className="w-8 h-8 text-blue-600 mr-2" />
                                    Why Skincare Product Quality Matters
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    High-quality skincare products make the difference between visible results and wasted money. According to a <a href="#" className="text-blue-600 hover:underline">2024 study in the Journal of Cosmetic Dermatology</a>, properly formulated skincare products can:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>Improve skin barrier function by up to 47%</li>
                                    <li>Reduce visible signs of aging by 32% over 12 weeks</li>
                                    <li>Decrease acne lesions by 58% in moderate cases</li>
                                    <li>Enhance hydration levels by 72% in dry skin types</li>
                                </ul>

                                <div className="bg-purple-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Indicators in Skincare</h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <h4 className="font-bold text-gray-800 mb-1">Formulation Factors</h4>
                                            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                                                <li>Stable active ingredients</li>
                                                <li>Appropriate pH balance (4.5-5.5 ideal)</li>
                                                <li>Minimal unnecessary fillers</li>
                                                <li>Scientific backing for claims</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-800 mb-1">Packaging Factors</h4>
                                            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                                                <li>Airless pumps for sensitive ingredients</li>
                                                <li>UV-protected containers</li>
                                                <li>Proper sealing mechanisms</li>
                                                <li>Clear expiration dating</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Skincare Safety Standards */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Shield className="w-8 h-8 text-blue-600 mr-2" />
                                    Skincare Safety Standards and Certifications
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Understanding safety certifications helps you make informed choices. Here are the key certifications to look for:
                                </p>

                                {/* Certifications Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Certification</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Organization</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Standards</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Coverage</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">EWG Verified</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Environmental Working Group</td>
                                                <td className="px-4 py-3">No ingredients of concern, full disclosure</td>
                                                <td className="px-4 py-3">US market</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">COSMOS</td>
                                                <td className="px-4 py-3 whitespace-nowrap">COSMOS-standard AISBL</td>
                                                <td className="px-4 py-3">Organic/natural ingredients, sustainable practices</td>
                                                <td className="px-4 py-3">International</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">FDA Approval</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Food and Drug Administration</td>
                                                <td className="px-4 py-3">Safety and efficacy for drug claims</td>
                                                <td className="px-4 py-3">US market</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Ecocert</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Ecocert Greenlife</td>
                                                <td className="px-4 py-3">Minimum 95% natural ingredients</td>
                                                <td className="px-4 py-3">European market</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                        <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
                                        Red Flags in Skincare Products
                                    </h3>
                                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                                        <li>No expiration date or batch number</li>
                                        <li>"Parfum" or "fragrance" without clarification</li>
                                        <li>Claims that sound too good to be true</li>
                                        <li>Products that change color or smell over time</li>
                                        <li>No manufacturer contact information</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Ingredient Selection Guide */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Droplet className="w-8 h-8 text-blue-600 mr-2" />
                                    Ingredient Selection Guide by Skin Concern
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Different skin concerns require different active ingredients at specific concentrations to be effective:
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">Aging Concerns</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li><strong>Retinol:</strong> 0.1-1% (start low)</li>
                                            <li><strong>Vitamin C:</strong> 10-20% L-ascorbic acid</li>
                                            <li><strong>Peptides:</strong> 2-10% depending on type</li>
                                            <li><strong>Niacinamide:</strong> 2-5% for brightening</li>
                                        </ul>
                                    </div>
                                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">Acne-Prone Skin</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li><strong>Salicylic Acid:</strong> 0.5-2%</li>
                                            <li><strong>Benzoyl Peroxide:</strong> 2.5-10%</li>
                                            <li><strong>Azelaic Acid:</strong> 10-20%</li>
                                            <li><strong>Tea Tree Oil:</strong> 5% maximum</li>
                                        </ul>
                                    </div>
                                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">Dry/Sensitive Skin</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li><strong>Ceramides:</strong> 0.5-2%</li>
                                            <li><strong>Hyaluronic Acid:</strong> 0.1-2%</li>
                                            <li><strong>Colloidal Oatmeal:</strong> 1-5%</li>
                                            <li><strong>Squalane:</strong> 5-100%</li>
                                        </ul>
                                    </div>
                                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">Hyperpigmentation</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li><strong>Vitamin C:</strong> 10-20%</li>
                                            <li><strong>Alpha Arbutin:</strong> 1-2%</li>
                                            <li><strong>Tranexamic Acid:</strong> 2-5%</li>
                                            <li><strong>Kojic Acid:</strong> 1-4%</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Pro Tip:</h3>
                                    <p className="text-gray-700">
                                        Look for products that list active ingredients near the top of the ingredient list (INCI names) and provide percentage concentrations. Products that don't disclose this information may not contain therapeutic amounts.
                                    </p>
                                </div>
                            </section>

                            {/* Product Selection Framework */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Skincare Product Selection Framework</h2>

                                <div className="space-y-6">
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Step 1: Identify Your Skin Type</h3>
                                        </div>
                                        <div className="p-4">
                                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                                <li><strong>Oily:</strong> Shine appears within 1-2 hours of cleansing</li>
                                                <li><strong>Dry:</strong> Tightness, flaking, rough texture</li>
                                                <li><strong>Combination:</strong> Oily T-zone, normal/dry cheeks</li>
                                                <li><strong>Sensitive:</strong> Reacts easily with redness or stinging</li>
                                                <li><strong>Normal:</strong> Balanced, few concerns</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Step 2: Determine Your Primary Concerns</h3>
                                        </div>
                                        <div className="p-4">
                                            <p className="text-gray-700 mb-3">Prioritize 1-2 main concerns to address first:</p>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                                    <li>Aging/wrinkles</li>
                                                    <li>Acne/breakouts</li>
                                                    <li>Dryness/dehydration</li>
                                                </ul>
                                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                                    <li>Hyperpigmentation</li>
                                                    <li>Redness/rosacea</li>
                                                    <li>Dullness</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Step 3: Build Your Routine</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Basic Routine (All Skin Types)</h4>
                                                <ol className="list-decimal list-inside text-gray-700 space-y-1">
                                                    <li>Gentle cleanser (AM/PM)</li>
                                                    <li>Moisturizer (AM/PM)</li>
                                                    <li>Sunscreen (AM)</li>
                                                </ol>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">Advanced Additions</h4>
                                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                                    <li>Treatment serums (target specific concerns)</li>
                                                    <li>Exfoliants (1-3x weekly)</li>
                                                    <li>Eye creams (if needed)</li>
                                                    <li>Face masks (as needed)</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Product Storage and Shelf Life */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Product Storage and Shelf Life Guidelines</h2>

                                <p className="text-gray-700 mb-6">
                                    Proper storage extends product effectiveness and prevents contamination. Here's how long common products last after opening (PAO symbol timeframe):
                                </p>

                                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                                    <div className="grid grid-cols-3 gap-4 text-center font-medium mb-2">
                                        <div>Product Type</div>
                                        <div>Shelf Life (Unopened)</div>
                                        <div>After Opening</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 text-center mb-1">
                                        <div className="font-medium">Cleansers</div>
                                        <div>2-3 years</div>
                                        <div>6-12 months</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 text-center mb-1 bg-blue-50 p-1 rounded">
                                        <div className="font-medium">Serums</div>
                                        <div>1-2 years</div>
                                        <div>3-6 months</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 text-center mb-1">
                                        <div className="font-medium">Moisturizers</div>
                                        <div>2-3 years</div>
                                        <div>6-12 months</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 text-center">
                                        <div className="font-medium">Vitamin C</div>
                                        <div>6-12 months</div>
                                        <div>1-3 months</div>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-3">Storage Tips</h3>
                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>Keep products away from direct sunlight and heat sources</li>
                                    <li>Store vitamin C and retinol in the refrigerator</li>
                                    <li>Always replace caps tightly to prevent oxidation</li>
                                    <li>Use clean hands or applicators to prevent contamination</li>
                                    <li>Don't store products in humid bathrooms if possible</li>
                                </ul>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Understanding skincare product quality, safety, and selection empowers you to make informed choices that truly benefit your skin. Remember that the most expensive product isn't necessarily the best—what matters is the formulation, ingredient quality, and how it addresses your specific skin needs.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    Consistency with a well-chosen routine will yield better results than constantly switching products. Introduce new products one at a time (with 2-4 weeks between additions) to properly assess their effects and identify any reactions.
                                </p>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "Quality skincare is an investment in your skin's future. Look beyond marketing claims to the ingredient list and formulation science—your skin will thank you in the years to come."
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
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get expert skincare advice</h4>
                                <p className="text-gray-700 text-sm">
                                    Monthly product reviews, ingredient spotlights, and dermatologist tips delivered to your inbox.
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
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Dermatologist-Approved Essentials</h3>
                            <div className="space-y-4">
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/skincare1.jpg" alt="Vitamin C serum" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Vitamin C Serum</h4>
                                            <p className="text-sm text-gray-600">4.7 ★ (89 reviews)</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/skincare2.jpg" alt="Gentle cleanser" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">pH-Balanced Cleanser</h4>
                                            <p className="text-sm text-gray-600">4.9 ★ (214 reviews)</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/skincare3.jpg" alt="Sunscreen" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Mineral Sunscreen SPF 30+</h4>
                                            <p className="text-sm text-gray-600">4.6 ★ (156 reviews)</p>
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
                                    <span className="font-medium">Benefits:</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Ceramides</span>
                                    <span className="text-blue-600">Barrier repair</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Niacinamide</span>
                                    <span className="text-blue-600">Redness reduction</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Hyaluronic Acid</span>
                                    <span className="text-blue-600">Hydration</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Zinc Oxide</span>
                                    <span className="text-blue-600">Sun protection</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Panthenol</span>
                                    <span className="text-blue-600">Soothing</span>
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
                                    <a href="#" className="text-blue-600 hover:underline">How to Read Skincare Labels</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Clinical Studies on Retinol Efficacy</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Sustainable Skincare Packaging Guide</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}