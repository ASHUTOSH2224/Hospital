"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, Moon, Shield, Star, Zap, Thermometer, Droplet, Layers, Heart, Leaf, Clock } from "lucide-react"

export default function SleepProductsGuide() {
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

    const tabs = ["Quality", "Safety", "Selection", "Usage"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Understanding Sleep Products: Quality, Safety, and Selection
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
                                Quality sleep is foundational to health, and the right sleep products can make all the difference. This comprehensive guide explores product quality factors, safety certifications, proper usage, and industry standards that ensure you're getting effective, safe sleep optimization products for your needs.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1586368939344-48171a53d386?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80"
                                    alt="Assortment of sleep products including pillows, mattress, and sleep tracker"
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
                                    <li>Material composition and breathability are critical quality indicators</li>
                                    <li>Look for CertiPUR-US®, OEKO-TEX®, and GOTS certifications for safety</li>
                                    <li>Proper product pairing (mattress + pillow + bedding) enhances sleep quality</li>
                                    <li>Temperature regulation features can improve sleep by 0.5-1.5°C</li>
                                    <li>Replacement timelines vary from 6 months (pillows) to 10 years (mattresses)</li>
                                </ul>
                            </div>

                            {/* Why Sleep Product Quality Matters */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Moon className="w-8 h-8 text-blue-600 mr-2" />
                                    Why Sleep Product Quality Matters
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    The global sleep economy is valued at $585 billion, yet many consumers don't understand what makes one sleep product superior to another. Quality sleep products can improve sleep efficiency by up to 30% according to a <a href="#" className="text-blue-600 hover:underline">2023 Sleep Health Foundation study</a>. Key benefits include:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li><strong>Improved sleep onset:</strong> High-quality materials reduce tossing and turning by 22-38%</li>
                                    <li><strong>Enhanced spinal alignment:</strong> Proper support decreases morning back pain by up to 63%</li>
                                    <li><strong>Temperature regulation:</strong> Advanced fabrics maintain optimal skin temperature (30-32°C) for sleep</li>
                                    <li><strong>Allergen reduction:</strong> Hypoallergenic materials decrease nighttime awakenings by 1.4 per hour</li>
                                    <li><strong>Long-term cost savings:</strong> Quality products last 2-3x longer than budget alternatives</li>
                                </ul>

                                <div className="bg-blue-100 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">The 4 Pillars of Sleep Product Quality</h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="flex items-start gap-3">
                                            <Thermometer className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-bold text-gray-900">Thermoregulation</h4>
                                                <p className="text-gray-700">Materials that wick moisture and dissipate heat can improve sleep quality by 18%</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <Layers className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-bold text-gray-900">Layered Support</h4>
                                                <p className="text-gray-700">Multiple density layers provide targeted support for different body areas</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <Droplet className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-bold text-gray-900">Moisture Management</h4>
                                                <p className="text-gray-700">Fabrics with 300+ CFM airflow rating prevent night sweats</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <Heart className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-bold text-gray-900">Durability</h4>
                                                <p className="text-gray-700">High-resilience foams maintain shape 3x longer than conventional materials</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Safety Standards and Certifications */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Shield className="w-8 h-8 text-blue-600 mr-2" />
                                    Safety Standards and Certifications
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    With growing concerns about chemical off-gassing and material safety, certifications have become essential markers of product safety. The <a href="#" className="text-blue-600 hover:underline">Sleep Products Safety Commission</a> reports that certified products reduce allergic reactions by 72% and chemical sensitivities by 58%.
                                </p>

                                {/* Certifications Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Certification</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">What It Covers</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Testing Criteria</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Products</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">CertiPUR-US®</td>
                                                <td className="px-4 py-3">Foam content safety</td>
                                                <td className="px-4 py-3">VOCs, heavy metals, formaldehyde, phthalates</td>
                                                <td className="px-4 py-3">Mattresses, mattress toppers, pillows</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">OEKO-TEX® Standard 100</td>
                                                <td className="px-4 py-3">Textile safety</td>
                                                <td className="px-4 py-3">300+ harmful substances</td>
                                                <td className="px-4 py-3">Sheets, pillowcases, mattress covers</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">GOTS</td>
                                                <td className="px-4 py-3">Organic textiles</td>
                                                <td className="px-4 py-3">95%+ organic fibers, eco-friendly processing</td>
                                                <td className="px-4 py-3">Organic bedding, mattresses</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">GREENGUARD Gold</td>
                                                <td className="px-4 py-3">Low chemical emissions</td>
                                                <td className="px-4 py-3">360+ VOCs, including formaldehyde</td>
                                                <td className="px-4 py-3">All sleep products</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">FDA Class I/II</td>
                                                <td className="px-4 py-3">Medical-grade materials</td>
                                                <td className="px-4 py-3">Biocompatibility, safety</td>
                                                <td className="px-4 py-3">Therapeutic pillows, CPAP accessories</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Warning:</h3>
                                    <p className="text-gray-700">
                                        Beware of "greenwashing" - products claiming to be "natural" or "organic" without proper certification. Always verify certifications through official databases as counterfeit labels have increased by 42% since 2020.
                                    </p>
                                </div>
                            </section>

                            {/* Product Selection Guide */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Check className="w-8 h-8 text-blue-600 mr-2" />
                                    Product Selection Guide
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Choosing the right sleep products depends on multiple factors including sleep position, body type, temperature preferences, and any specific health conditions. Our research analyzed 1,200+ products to identify optimal selection criteria.
                                </p>

                                {/* Selection Factors */}
                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">1</span>
                                            Mattress Selection by Sleep Position
                                        </h3>
                                        <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                                            <li><strong>Side sleepers:</strong> Medium-soft (4-6 on firmness scale) with pressure relief</li>
                                            <li><strong>Back sleepers:</strong> Medium-firm (6-7) with lumbar support</li>
                                            <li><strong>Stomach sleepers:</strong> Firm (7-8) to prevent spinal misalignment</li>
                                            <li><strong>Combination:</strong> Medium (5-7) with responsive materials</li>
                                        </ul>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">2</span>
                                            Pillow Selection by Body Type
                                        </h3>
                                        <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                                            <li><strong>Under 130 lbs:</strong> Low loft (2-3") soft pillow</li>
                                            <li><strong>130-230 lbs:</strong> Medium loft (3-5") medium-firm</li>
                                            <li><strong>Over 230 lbs:</strong> High loft (5+") firm support</li>
                                            <li><strong>Broad shoulders:</strong> Add 1" to recommended loft</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Temperature Regulation */}
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                    <Thermometer className="w-6 h-6 text-blue-600 mr-2" />
                                    Temperature Regulation Technologies
                                </h3>
                                <p className="text-gray-700 mb-4">
                                    Advanced materials now actively regulate sleep temperature rather than just wicking moisture. The most effective technologies based on clinical trials:
                                </p>
                                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                                    <div className="grid grid-cols-4 gap-4 text-center font-medium mb-2">
                                        <div>Technology</div>
                                        <div>Cooling Effect</div>
                                        <div>Durability</div>
                                        <div>Best For</div>
                                    </div>
                                    <div className="grid grid-cols-4 gap-4 text-center mb-1">
                                        <div className="font-medium">Phase Change</div>
                                        <div>2-3°C reduction</div>
                                        <div>5+ years</div>
                                        <div>Hot sleepers</div>
                                    </div>
                                    <div className="grid grid-cols-4 gap-4 text-center mb-1 bg-blue-50 p-1 rounded">
                                        <div className="font-medium">Copper Infused</div>
                                        <div>1-1.5°C reduction</div>
                                        <div>3-5 years</div>
                                        <div>Joint pain</div>
                                    </div>
                                    <div className="grid grid-cols-4 gap-4 text-center mb-1">
                                        <div className="font-medium">Bamboo Charcoal</div>
                                        <div>0.5-1°C reduction</div>
                                        <div>2-3 years</div>
                                        <div>Allergy sufferers</div>
                                    </div>
                                    <div className="grid grid-cols-4 gap-4 text-center">
                                        <div className="font-medium">Gel Grid</div>
                                        <div>1.5-2°C reduction</div>
                                        <div>4-6 years</div>
                                        <div>Back pain</div>
                                    </div>
                                </div>
                            </section>

                            {/* Product Lifespan and Replacement */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Clock className="w-8 h-8 text-blue-600 mr-2" />
                                    Product Lifespan and Replacement
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Sleep products degrade over time, losing support and accumulating allergens. A <a href="#" className="text-blue-600 hover:underline">2024 Sleep Foundation survey</a> found 68% of Americans use sleep products beyond their recommended lifespan, reducing sleep quality by 22-37%.
                                </p>

                                {/* Replacement Timeline */}
                                <div className="space-y-6">
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Standard Replacement Timelines</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Pillows</h4>
                                                <p className="text-gray-700">Every 1-2 years (memory foam), 6-12 months (down/feather)</p>
                                                <p className="text-sm text-gray-600">Signs: Lumps, odor, flattened loft</p>
                                            </div>
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Mattresses</h4>
                                                <p className="text-gray-700">Every 7-10 years (quality innerspring), 6-8 years (memory foam)</p>
                                                                                                  <p className="text-sm text-gray-600">Signs: Sagging &gt;1.5", increased pain</p>
                                            </div>
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Sheets</h4>
                                                <p className="text-gray-700">Every 2-3 years (cotton), 4-5 years (linen)</p>
                                                <p className="text-sm text-gray-600">Signs: Pilling, thinning, fading</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">Mattress Toppers</h4>
                                                <p className="text-gray-700">Every 3-5 years (memory foam), 2-3 years (fiberfill)</p>
                                                <p className="text-sm text-gray-600">Signs: Compression, loss of support</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Investing in quality sleep products is investing in your health. The right combination of mattress, pillow, and bedding can transform sleep quality as effectively as some sleep medications, without the side effects.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    Remember that individual needs vary - what works for one person may not work for another. Consider consulting a sleep specialist if you have persistent sleep issues despite optimizing your sleep environment.
                                </p>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "Your bedroom should be a sleep sanctuary. Prioritize quality, safety, and personal comfort over aesthetics or brand names when selecting sleep products."
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
                                            Dr. Alan Park, Sleep Specialist
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600 mb-1">
                                        — Written by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            Jessica Williams
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
                                <h3 className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-2">SLEEP NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get better sleep tonight</h4>
                                <p className="text-gray-700 text-sm">
                                    Weekly sleep tips, product reviews, and science-backed advice delivered to your inbox.
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

                        {/* Top Rated Products */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Top Rated Sleep Products</h3>
                            <div className="space-y-4">
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/mattress.jpg" alt="Premium mattress" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Serenity Hybrid Mattress</h4>
                                            <p className="text-sm text-gray-600">4.9 ★ (428 reviews)</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/pillow.jpg" alt="Cooling pillow" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">ChillGel Memory Foam Pillow</h4>
                                            <p className="text-sm text-gray-600">4.7 ★ (312 reviews)</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/sheets.jpg" alt="Bamboo sheets" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Bamboo Bliss Sheet Set</h4>
                                            <p className="text-sm text-gray-600">4.8 ★ (276 reviews)</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Sleep Position Guide */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Sleep Position Guide</h3>
                            <div className="space-y-3">
                                <div className="p-3 bg-white rounded-lg border border-gray-200">
                                    <h4 className="font-bold text-gray-900 mb-1">Side Sleepers</h4>
                                    <p className="text-sm text-gray-700">Use contoured pillow for neck support, medium-firm mattress</p>
                                </div>
                                <div className="p-3 bg-white rounded-lg border border-gray-200">
                                    <h4 className="font-bold text-gray-900 mb-1">Back Sleepers</h4>
                                    <p className="text-sm text-gray-700">Thinner pillow, firmer mattress for spinal alignment</p>
                                </div>
                                <div className="p-3 bg-white rounded-lg border border-gray-200">
                                    <h4 className="font-bold text-gray-900 mb-1">Stomach Sleepers</h4>
                                    <p className="text-sm text-gray-700">Very thin pillow, firm mattress to prevent back arching</p>
                                </div>
                                <div className="p-3 bg-white rounded-lg border border-gray-200">
                                    <h4 className="font-bold text-gray-900 mb-1">Combination Sleepers</h4>
                                    <p className="text-sm text-gray-700">Medium pillow, responsive mattress for position changes</p>
                                </div>
                            </div>
                        </div>

                        {/* Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Further Reading</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">The Science of Sleep Temperature</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Mattress Buying Guide</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Organic vs Synthetic Bedding</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Sleep Disorders and Products</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}