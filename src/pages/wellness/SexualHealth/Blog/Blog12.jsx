"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, Shield, AlertCircle, HeartPulse, Package, ClipboardList, BadgeCheck } from "lucide-react"

export default function SexualHealthProductsGuide() {
    const [email, setEmail] = useState("")
    const [activeTab, setActiveTab] = useState("Safety")

    const handleEmailSubmit = (e) => {
        e.preventDefault()
        console.log("Email submitted:", email)
        setEmail("")
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const tabs = ["Safety", "Types", "Selection", "Usage"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Understanding Sexual Health Products: Safety, Efficacy, and Selection
                            </h1>

                            {/* Navigation Tabs */}
                            <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-200">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${activeTab === tab
                                                ? "border-purple-500 text-purple-600"
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
                                Sexual health products play a crucial role in maintaining well-being, preventing diseases, and enabling informed family planning. This comprehensive guide explores product safety factors, FDA approvals, proper usage, and industry standards to ensure you're getting effective, safe sexual health products and contraceptives.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80"
                                    alt="Assortment of sexual health products including condoms, pills, and informational materials"
                                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                                    style={{ maxHeight: '500px' }}
                                />
                            </div>

                            {/* Key Takeaways */}
                            <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-8">
                                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                    <ClipboardList className="w-5 h-5 text-purple-600 mr-2" />
                                    Key Takeaways
                                </h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>FDA approval is the gold standard for product safety in the US</li>
                                    <li>Condoms are 98% effective when used correctly but typical use is about 85%</li>
                                    <li>Hormonal contraceptives require medical consultation before use</li>
                                    <li>Expiration dates are critical for effectiveness of all products</li>
                                    <li>Proper storage conditions maintain product integrity</li>
                                </ul>
                            </div>

                            {/* Why Product Safety Matters */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Shield className="w-8 h-8 text-purple-600 mr-2" />
                                    Why Sexual Health Product Safety Matters
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    The global sexual wellness market is projected to reach $51.7 billion by 2026, according to a <a href="#" className="text-blue-600 hover:underline">2023 Grand View Research report</a>. With this growth comes increased responsibility for consumers to understand what makes these products safe and effective. Key considerations include:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li><strong>Material safety:</strong> Latex allergies affect 1-6% of the population, necessitating alternative materials</li>
                                    <li><strong>Effectiveness rates:</strong> Real-world use often differs from laboratory testing conditions</li>
                                    <li><strong>Side effects:</strong> Hormonal products may have systemic effects beyond contraception</li>
                                    <li><strong>Counterfeit risks:</strong> The WHO estimates 1 in 10 medical products in developing countries are substandard or falsified</li>
                                </ul>

                                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">FDA Approval Process Explained</h3>
                                    <p className="text-gray-700 mb-2">
                                        The FDA's rigorous approval process for sexual health products includes:
                                    </p>
                                    <ol className="list-decimal list-inside text-gray-700 space-y-1">
                                        <li>Preclinical testing (lab and animal studies)</li>
                                        <li>Investigational New Drug application</li>
                                        <li>Clinical trials (Phase 1-3 with human participants)</li>
                                        <li>Manufacturing facility inspection</li>
                                        <li>Post-market safety monitoring</li>
                                    </ol>
                                </div>
                            </section>

                            {/* Types of Sexual Health Products */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Package className="w-8 h-8 text-purple-600 mr-2" />
                                    Comprehensive Guide to Sexual Health Products
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Modern sexual health products fall into several categories, each with unique safety profiles, effectiveness rates, and usage considerations.
                                </p>

                                {/* Products Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product Type</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Effectiveness*</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Key Safety Considerations</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">FDA Approved</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Male Condoms</td>
                                                <td className="px-4 py-3 whitespace-nowrap">98% (85% typical)</td>
                                                <td className="px-4 py-3">Latex allergies, proper sizing, storage conditions</td>
                                                <td className="px-4 py-3 whitespace-nowrap"><BadgeCheck className="w-5 h-5 text-green-500" /></td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Oral Contraceptives</td>
                                                <td className="px-4 py-3 whitespace-nowrap">99% (91% typical)</td>
                                                <td className="px-4 py-3">Blood clot risk, drug interactions, consistent timing</td>
                                                <td className="px-4 py-3 whitespace-nowrap"><BadgeCheck className="w-5 h-5 text-green-500" /></td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">IUDs</td>
                                                <td className="px-4 py-3 whitespace-nowrap">99%+</td>
                                                <td className="px-4 py-3">Professional insertion, potential for expulsion, infection risk</td>
                                                <td className="px-4 py-3 whitespace-nowrap"><BadgeCheck className="w-5 h-5 text-green-500" /></td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Emergency Contraception</td>
                                                <td className="px-4 py-3 whitespace-nowrap">75-89%</td>
                                                <td className="px-4 py-3">Time-sensitive, not for regular use, potential side effects</td>
                                                <td className="px-4 py-3 whitespace-nowrap"><BadgeCheck className="w-5 h-5 text-green-500" /></td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Lubricants</td>
                                                <td className="px-4 py-3 whitespace-nowrap">N/A</td>
                                                <td className="px-4 py-3">pH balance, osmolality, ingredient safety</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Some</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <p className="text-gray-700 mb-6 text-sm">
                                    *Effectiveness rates shown are for perfect use. Typical use rates account for human error and are shown in parentheses where available.
                                </p>

                                {/* Product Highlights */}
                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">1</span>
                                            Condoms - Dual Protection
                                        </h3>
                                        <p className="text-gray-700">
                                            The only method that provides both pregnancy prevention (98% effective) and STI protection (highly effective against HIV and other viruses when used correctly). Modern condoms undergo rigorous testing including electronic testing for microholes and water leak tests.
                                        </p>
                                    </div>
                                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">2</span>
                                            Hormonal Options - Medical Considerations
                                        </h3>
                                        <p className="text-gray-700">
                                            Birth control pills, patches, and rings contain hormones that prevent ovulation. These require medical consultation due to potential side effects including increased blood clot risk (3-9 per 10,000 women per year), especially in smokers over 35.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Selection Criteria */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Check className="w-8 h-8 text-purple-600 mr-2" />
                                    How to Select Safe and Effective Products
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Choosing the right sexual health products involves more than just picking what's available. Consider these evidence-based selection criteria:
                                </p>

                                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center font-medium mb-2">
                                        <div>Factor</div>
                                        <div>What to Look For</div>
                                        <div>Red Flags</div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mb-1 border-b border-gray-200 pb-2">
                                        <div className="font-medium">Certifications</div>
                                        <div>FDA clearance, CE mark, ISO certification</div>
                                        <div className="text-red-500">No regulatory markings</div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mb-1 border-b border-gray-200 pb-2">
                                        <div className="font-medium">Packaging</div>
                                        <div>Intact, tamper-evident, expiration date</div>
                                        <div className="text-red-500">Damaged or repackaged</div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mb-1 border-b border-gray-200 pb-2">
                                        <div className="font-medium">Ingredients</div>
                                        <div>Medical-grade materials, non-toxic</div>
                                        <div className="text-red-500">"Novelty use only" labels</div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                                        <div className="font-medium">Brand Reputation</div>
                                        <div>Established manufacturers, healthcare provider recommendations</div>
                                        <div className="text-red-500">No verifiable company information</div>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Special Considerations for Different Groups</h3>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900 mb-3">For Teens and First-Time Users</h4>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Discreet packaging options</li>
                                            <li>Easy-to-understand instructions</li>
                                            <li>Non-intimidating product designs</li>
                                            <li>Access to educational resources</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900 mb-3">For People with Allergies/Sensitivities</h4>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Latex-free options (polyurethane, polyisoprene)</li>
                                            <li>Hypoallergenic lubricants</li>
                                            <li>Non-spermicidal alternatives</li>
                                            <li>Fragrance-free products</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Proper Usage Guidelines */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Proper Usage for Maximum Effectiveness</h2>

                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Condom Usage Best Practices</h3>
                                        <ol className="list-decimal list-inside text-gray-700 space-y-2 pl-4">
                                            <li>Check expiration date before use</li>
                                            <li>Store in cool, dry place away from direct sunlight</li>
                                            <li>Open package carefully to avoid tearing</li>
                                            <li>Pinch reservoir tip before unrolling</li>
                                            <li>Use adequate lubrication (water-based for latex)</li>
                                            <li>Hold base during withdrawal</li>
                                            <li>Dispose properly after single use</li>
                                        </ol>
                                        <p className="text-gray-700 mt-3">
                                            According to CDC data, proper condom use reduces STI transmission risk by approximately 80-95% for various infections.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Hormonal Method Compliance</h3>
                                        <div className="bg-purple-50 p-4 rounded-lg">
                                            <p className="text-gray-700 mb-3">
                                                Hormonal methods require strict adherence to timing for maximum effectiveness:
                                            </p>
                                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                                                <li><strong>Pills:</strong> Take at same time daily (3-hour window for progestin-only)</li>
                                                <li><strong>Patch:</strong> Change weekly (same day each week)</li>
                                                <li><strong>Ring:</strong> Replace monthly (exact 28-day cycle)</li>
                                                <li><strong>Injections:</strong> Administered every 12-13 weeks precisely</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
                                    <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                                        <AlertCircle className="w-5 h-5 text-yellow-600 mr-2" />
                                        Important Warning:
                                    </h3>
                                    <p className="text-gray-700">
                                        Never use oil-based lubricants (vaseline, baby oil, etc.) with latex condoms as they degrade the material within 60 seconds, increasing breakage risk by up to 300%.
                                    </p>
                                </div>
                            </section>

                            {/* Common Myths Debunked */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Sexual Health Product Myths Debunked</h2>

                                <div className="space-y-4">
                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">Myth: Two condoms are better than one</h3>
                                        <p className="text-gray-700">
                                            <span className="font-semibold">Fact:</span> Using two condoms actually increases friction and the likelihood of breakage. The CDC specifically warns against this practice.
                                        </p>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">Myth: Birth control pills cause significant weight gain</h3>
                                        <p className="text-gray-700">
                                            <span className="font-semibold">Fact:</span> Modern low-dose pills show no clinically significant weight gain in studies. Any minor fluctuations are typically water retention, not fat gain.
                                        </p>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">Myth: You can't get pregnant during your period</h3>
                                        <p className="text-gray-700">
                                            <span className="font-semibold">Fact:</span> Sperm can live up to 5 days in the reproductive tract, making pregnancy possible from intercourse during menstruation, especially for those with shorter cycles.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Emergency Situations */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <AlertCircle className="w-8 h-8 text-red-500 mr-2" />
                                    Emergency Situations and Problem Solving
                                </h2>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="border border-red-200 rounded-lg p-4 bg-red-50">
                                        <h3 className="font-bold text-gray-900 mb-2">Condom Breakage</h3>
                                        <ol className="list-decimal list-inside text-gray-700 space-y-1">
                                            <li>Stop intercourse immediately</li>
                                            <li>Consider emergency contraception if pregnancy prevention was goal</li>
                                            <li>Get STI testing if partner status is unknown</li>
                                            <li>Note brand/lot number for potential reporting</li>
                                        </ol>
                                    </div>

                                    <div className="border border-red-200 rounded-lg p-4 bg-red-50">
                                        <h3 className="font-bold text-gray-900 mb-2">Missed Birth Control Pill</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>Combination pill: Take as soon as remembered if 24hrs late</li>
                                            <li>Progestin-only: Use backup for 48hrs if 3hrs late</li>
                                            <li>Consult package insert for specific instructions</li>
                                            <li>When in doubt, use backup protection</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                                    <h3 className="font-bold text-gray-900 mb-2">When to Seek Medical Attention</h3>
                                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                                        <li>Severe allergic reactions (difficulty breathing, swelling)</li>
                                        <li>Persistent abnormal bleeding</li>
                                        <li>Signs of toxic shock syndrome (fever, rash, dizziness)</li>
                                        <li>Severe abdominal pain with IUD use</li>
                                        <li>Unusual discharge or sores after product use</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Sexual health products are powerful tools for maintaining well-being when selected and used correctly. By understanding safety standards, effectiveness rates, and proper usage techniques, you can make informed decisions that align with your health goals and lifestyle.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    Remember that sexual health is deeply personal—what works perfectly for one person may not be ideal for another. Regular check-ins with healthcare providers ensure your chosen methods continue to meet your needs as your circumstances change.
                                </p>

                                <div className="bg-purple-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "Investing time in understanding sexual health products pays dividends in peace of mind and physical well-being. Don't let embarrassment prevent you from asking important questions—healthcare professionals have heard it all and are there to help, not judge."
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
                                            Dr. Amanda Rodriguez, OB/GYN
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
                        <div className="bg-purple-50 rounded-lg p-6 mb-8">
                            <div className="mb-4">
                                <h3 className="text-sm font-bold text-purple-800 uppercase tracking-wide mb-2">SEXUAL HEALTH NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get expert advice and updates</h4>
                                <p className="text-gray-700 text-sm">
                                    Monthly guides, product reviews, and research summaries delivered confidentially to your inbox.
                                </p>
                            </div>

                            <form onSubmit={handleEmailSubmit} className="space-y-4">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200"
                                >
                                    SUBSCRIBE
                                </button>
                            </form>

                            <p className="text-xs text-gray-600 mt-3">
                                Your{" "}
                                <a href="#" className="text-purple-600 hover:underline">
                                    privacy
                                </a>{" "}
                                is our priority
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Access Resources</h3>
                            <div className="space-y-3">
                                <a href="#" className="flex items-center gap-2 text-purple-600 hover:underline">
                                    <HeartPulse className="w-4 h-4" />
                                    <span>Find a Sexual Health Clinic</span>
                                </a>
                                <a href="#" className="flex items-center gap-2 text-purple-600 hover:underline">
                                    <Shield className="w-4 h-4" />
                                    <span>FDA Product Approvals Database</span>
                                </a>
                                <a href="#" className="flex items-center gap-2 text-purple-600 hover:underline">
                                    <Package className="w-4 h-4" />
                                    <span>Product Recall Notices</span>
                                </a>
                            </div>
                        </div>

                        {/* Effectiveness Chart */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Contraceptive Effectiveness</h3>
                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-sm font-medium">IUDs/Implants</span>
                                        <span className="text-sm">99%+</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '99%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-sm font-medium">Sterilization</span>
                                        <span className="text-sm">99%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="bg-green-400 h-2 rounded-full" style={{ width: '99%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-sm font-medium">Pill/Patch/Ring</span>
                                        <span className="text-sm">91-99%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-sm font-medium">Condoms</span>
                                        <span className="text-sm">85-98%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="bg-orange-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* FAQs */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-medium text-gray-900">How often should I get tested for STIs?</h4>
                                    <p className="text-sm text-gray-600 mt-1">Annual testing is recommended for sexually active adults, with more frequent testing (3-6 months) for those with multiple partners or higher risk factors.</p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900">Can lubricants affect fertility?</h4>
                                    <p className="text-sm text-gray-600 mt-1">Some lubricants can impair sperm motility. For couples trying to conceive, look for "fertility-friendly" options or use mineral oil.</p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900">Are online pharmacies safe?</h4>
                                    <p className="text-sm text-gray-600 mt-1">Only use pharmacies verified through the VIPPS program or those requiring valid prescriptions. Avoid sites offering medications without prescriptions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}