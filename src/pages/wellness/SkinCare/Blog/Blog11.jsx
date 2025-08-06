"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, FlaskConical, Leaf, Scale, Star, Droplets, Shield, Activity, HeartPulse } from "lucide-react"

export default function SkincareScienceGuide() {
    const [email, setEmail] = useState("")
    const [activeTab, setActiveTab] = useState("Ingredients")

    const handleEmailSubmit = (e) => {
        e.preventDefault()
        console.log("Email submitted:", email)
        setEmail("")
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const tabs = ["Ingredients", "Skin Layers", "Clinical Studies", "Routines"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                The Science Behind Skincare: How Ingredients Transform Your Skin
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
                                Modern skincare is grounded in dermatological science, with active ingredients working at cellular levels to transform skin health. This comprehensive guide explores how scientifically-proven compounds interact with skin biology to address concerns from acne to aging, hydration to hyperpigmentation.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80"
                                    alt="Scientific skincare ingredients and laboratory equipment"
                                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                                    style={{ maxHeight: '500px' }}
                                />
                            </div>

                            {/* Key Takeaways */}
                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
                                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                    <Star className="w-5 h-5 text-blue-600 mr-2" />
                                    Key Scientific Insights
                                </h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>The skin's acid mantle has a pH of 4.5-5.5 - products outside this range can disrupt barrier function</li>
                                    <li>Retinoids increase epidermal thickness by up to 35% through fibroblast stimulation</li>
                                    <li>Niacinamide can reduce transepidermal water loss by 24% when used consistently</li>
                                    <li>Vitamin C increases collagen synthesis by up to 8-fold in dermal fibroblasts</li>
                                    <li>Ceramides make up 50% of the stratum corneum and are essential for barrier repair</li>
                                </ul>
                            </div>

                            {/* Skin Biology Basics */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <FlaskConical className="w-8 h-8 text-blue-600 mr-2" />
                                    Skin Biology 101: The Foundation
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Human skin consists of three primary layers, each with distinct cellular structures and functions that determine how skincare ingredients work:
                                </p>

                                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Skin Layer Composition</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                                        <div className="bg-white p-3 rounded border">
                                            <h4 className="font-bold">Epidermis</h4>
                                            <p className="text-sm">0.1mm thick</p>
                                            <p className="text-sm">5 sublayers</p>
                                            <p className="text-sm">Turnover: 28-40 days</p>
                                        </div>
                                        <div className="bg-white p-3 rounded border">
                                            <h4 className="font-bold">Dermis</h4>
                                            <p className="text-sm">2-4mm thick</p>
                                            <p className="text-sm">Collagen/elastin</p>
                                            <p className="text-sm">Fibroblasts</p>
                                        </div>
                                        <div className="bg-white p-3 rounded border">
                                            <h4 className="font-bold">Hypodermis</h4>
                                            <p className="text-sm">Adipose tissue</p>
                                            <p className="text-sm">1-20mm thick</p>
                                            <p className="text-sm">Thermal regulation</p>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-gray-700 mb-6">
                                    A 2023 study in the <span className="font-semibold">Journal of Investigative Dermatology</span> demonstrated that properly formulated skincare products can influence gene expression in keratinocytes, with:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>Antioxidants upregulating NRF2 pathway genes by 42%</li>
                                    <li>Retinoids increasing collagen gene expression by 67%</li>
                                    <li>Peptides enhancing filaggrin production by 38%</li>
                                </ul>
                            </section>

                            {/* Active Ingredients Breakdown */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Droplets className="w-8 h-8 text-blue-600 mr-2" />
                                    Active Ingredients: Molecular Mechanisms
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    The most clinically-studied skincare ingredients and their scientifically-proven effects on skin biology:
                                </p>

                                {/* Ingredients Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ingredient</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Concentration</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mechanism</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Clinical Benefit</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Retinol</td>
                                                <td className="px-4 py-3 whitespace-nowrap">0.025-1%</td>
                                                <td className="px-4 py-3">Binds nuclear receptors, increases collagen I/III production</td>
                                                <td className="px-4 py-3">Reduces wrinkles by 23% in 12 weeks</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Vitamin C (L-AA)</td>
                                                <td className="px-4 py-3 whitespace-nowrap">10-20%</td>
                                                <td className="px-4 py-3">Electron donor for collagen synthesis enzymes</td>
                                                <td className="px-4 py-3">Increases skin brightness by 41%</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Niacinamide</td>
                                                <td className="px-4 py-3 whitespace-nowrap">2-5%</td>
                                                <td className="px-4 py-3">Boosts NAD+ levels, inhibits melanosome transfer</td>
                                                <td className="px-4 py-3">Reduces hyperpigmentation by 35%</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Hyaluronic Acid</td>
                                                <td className="px-4 py-3 whitespace-nowrap">0.1-2%</td>
                                                <td className="px-4 py-3">Binds 1000x its weight in water, volumizes ECM</td>
                                                <td className="px-4 py-3">Improves hydration by 96% in 1 hour</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Peptides</td>
                                                <td className="px-4 py-3 whitespace-nowrap">1-10ppm</td>
                                                <td className="px-4 py-3">Signal collagen production via MMP inhibition</td>
                                                <td className="px-4 py-3">Reduces wrinkle depth by 17% in 8 weeks</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">1</span>
                                            Retinoids: The Gold Standard
                                        </h3>
                                        <p className="text-gray-700">
                                            Retinoids work by binding to nuclear receptors in keratinocytes and fibroblasts. A 2022 meta-analysis showed 0.1% tretinoin increases epidermal thickness by 35% and collagen density by 80% over 6 months.
                                        </p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">2</span>
                                            Vitamin C: Antioxidant Powerhouse
                                        </h3>
                                        <p className="text-gray-700">
                                            15% L-ascorbic acid at pH 3.2 provides optimal skin penetration. It donates electrons to neutralize ROS while regenerating vitamin E. Studies show it increases collagen synthesis 8-fold in fibroblasts.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Skin Barrier Science */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Shield className="w-8 h-8 text-blue-600 mr-2" />
                                    The Acid Mantle & Barrier Function
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    The skin's barrier consists of corneocytes embedded in a lipid matrix (ceramides 50%, cholesterol 25%, free fatty acids 15%). This "brick and mortar" structure:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>Prevents transepidermal water loss (TEWL)</li>
                                    <li>Maintains pH of 4.5-5.5 (critical for enzyme function)</li>
                                    <li>Blocks pathogen penetration</li>
                                    <li>Filters UV radiation</li>
                                </ul>

                                <div className="bg-purple-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Barrier Repair Ingredients</h3>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
                                        <div className="bg-white p-2 rounded border">
                                            <p className="font-medium">Ceramides</p>
                                            <p className="text-sm">NP, AP, EOP types</p>
                                        </div>
                                        <div className="bg-white p-2 rounded border">
                                            <p className="font-medium">Cholesterol</p>
                                            <p className="text-sm">3:1:1 ratio with ceramides</p>
                                        </div>
                                        <div className="bg-white p-2 rounded border">
                                            <p className="font-medium">Niacinamide</p>
                                            <p className="text-sm">2-5% concentration</p>
                                        </div>
                                        <div className="bg-white p-2 rounded border">
                                            <p className="font-medium">Panthenol</p>
                                            <p className="text-sm">Pro-vitamin B5</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Clinical Studies */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Activity className="w-8 h-8 text-blue-600 mr-2" />
                                    Evidence-Based Results
                                </h2>

                                <div className="space-y-6">
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Retinoids in Photoaging (2023 Meta-Analysis)</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="grid grid-cols-3 gap-4 text-center mb-3">
                                                <div>
                                                    <p className="font-medium">Study Duration</p>
                                                    <p className="text-gray-700">6-12 months</p>
                                                </div>
                                                <div>
                                                    <p className="font-medium">Participants</p>
                                                    <p className="text-gray-700">n=1,842</p>
                                                </div>
                                                <div>
                                                    <p className="font-medium">Concentration</p>
                                                    <p className="text-gray-700">0.025-0.1%</p>
                                                </div>
                                            </div>
                                            <div className="bg-blue-50 p-3 rounded">
                                                <p className="text-gray-700 font-medium">
                                                    Results: 62% improvement in fine lines, 45% reduction in hyperpigmentation, 35% increase in epidermal thickness
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Vitamin C Serum Study (JCD, 2022)</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mb-3">
                                                <div>
                                                    <p className="font-medium">Concentration</p>
                                                    <p className="text-gray-700">15% L-AA</p>
                                                </div>
                                                <div>
                                                    <p className="font-medium">pH</p>
                                                    <p className="text-gray-700">3.2</p>
                                                </div>
                                                <div>
                                                    <p className="font-medium">Duration</p>
                                                    <p className="text-gray-700">12 weeks</p>
                                                </div>
                                                <div>
                                                    <p className="font-medium">Participants</p>
                                                    <p className="text-gray-700">n=60</p>
                                                </div>
                                            </div>
                                            <div className="bg-blue-50 p-3 rounded">
                                                <p className="text-gray-700 font-medium">
                                                    Results: 41% improvement in skin brightness, 33% reduction in UV spots, 19% increase in collagen density
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Skin Type Recommendations */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Skin Type-Specific Formulations</h2>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Dry/Sensitive Skin</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>pH-balanced cleansers (5.5-7)</li>
                                            <li>Ceramide-rich moisturizers</li>
                                            <li>5% niacinamide for barrier repair</li>
                                            <li>0.01% retinol (encapsulated)</li>
                                            <li>Squalane instead of hyaluronic acid in dry climates</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Oily/Acne-Prone Skin</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>2% salicylic acid (BHA) for pore penetration</li>
                                            <li>4% niacinamide for sebum regulation</li>
                                            <li>Zinc PCA for microbial control</li>
                                            <li>Lightweight, non-comedogenic hydrators</li>
                                            <li>Retinoids at 0.025-0.05% to normalize keratinization</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Dermatologist Tip:</h3>
                                    <p className="text-gray-700">
                                        "Apply active ingredients to slightly damp skin to enhance penetration, but always follow with moisturizer to prevent transepidermal water loss. This is especially important for water-soluble actives like vitamin C."
                                    </p>
                                </div>
                            </section>

                            {/* Future Innovations */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Emerging Skincare Technologies</h2>

                                <div className="space-y-4">
                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">Microbiome Modulators</h3>
                                        <p className="text-gray-700 mb-2">
                                            Prebiotics (fructooligosaccharides) and postbiotics (lactobacillus ferment) show promise in clinical trials for reducing inflammation and strengthening skin immunity.
                                        </p>
                                        <p className="text-gray-700">
                                            <span className="font-semibold">Clinical Data:</span> 37% reduction in eczema flares with topical microbiome creams (2023 study)
                                        </p>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">Exosome Therapy</h3>
                                        <p className="text-gray-700 mb-2">
                                            Plant-derived exosomes containing mRNA growth factors can stimulate collagen without irritation. Early studies show 29% improvement in wrinkle depth at 8 weeks.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Scientific Skincare Principles</h2>

                                <p className="text-gray-700 mb-4">
                                    Modern dermatology emphasizes evidence-based formulations with measurable biological effects. The most effective skincare:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>Targets specific skin concerns at cellular level</li>
                                    <li>Uses ingredients with peer-reviewed clinical data</li>
                                    <li>Respects skin's natural pH and barrier function</li>
                                    <li>Combines actives synergistically (like vitamin C + E + ferulic acid)</li>
                                    <li>Adapts to individual genetic and environmental factors</li>
                                </ul>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "The future of skincare lies in personalized formulations based on genetic testing and microbiome analysis. We're moving beyond one-size-fits-all to truly precision dermatology."
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
                                            Dr. Emily Chen, MD
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
                                <h3 className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-2">SKINCARE SCIENCE NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get evidence-based skincare tips</h4>
                                <p className="text-gray-700 text-sm">
                                    Monthly research summaries, ingredient breakdowns, and dermatologist-approved routines.
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

                        {/* Ingredient Cheat Sheet */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Ingredient Cheat Sheet</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span className="font-medium">For Wrinkles:</span>
                                    <span className="text-blue-600">Retinol, Matrixyl, Argireline</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>For Dark Spots:</span>
                                    <span className="text-blue-600">Niacinamide, Tranexamic Acid, Alpha Arbutin</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>For Redness:</span>
                                    <span className="text-blue-600">Centella Asiatica, Azelaic Acid, Licorice Root</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>For Acne:</span>
                                    <span className="text-blue-600">Salicylic Acid, Zinc, Tea Tree Oil</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>For Dryness:</span>
                                    <span className="text-blue-600">Ceramides, Squalane, Cholesterol</span>
                                </div>
                            </div>
                        </div>

                        {/* Clinical Strength Products */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Dermatologist-Recommended</h3>
                            <div className="space-y-4">
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80" alt="Vitamin C serum" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">15% Vitamin C + E Ferulic</h4>
                                            <p className="text-sm text-gray-600">pH 3.2, airless packaging</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80" alt="Retinol cream" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">0.1% Encapsulated Retinol</h4>
                                            <p className="text-sm text-gray-600">Time-released, irritation-minimized</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Scientific References</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Journal of Investigative Dermatology (2023)</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">British Journal of Dermatology (2022)</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Clinical Cosmetic Dermatology (2024)</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">NIH Skin Biology Reports</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}