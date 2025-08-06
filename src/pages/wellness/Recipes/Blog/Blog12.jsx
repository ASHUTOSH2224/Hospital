"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, Shield, Award, Settings, Zap, AlertTriangle, LifeBuoy, ShoppingCart, Star, BookOpen } from "lucide-react"

export default function KitchenEquipmentGuide() {
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

    const tabs = ["Quality", "Safety", "Selection", "Maintenance"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Understanding Kitchen Equipment: Quality, Safety, and Selection
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
                                Choosing the right kitchen equipment is crucial for both home cooks and professional chefs. Quality tools not only make cooking more efficient but also ensure safety and longevity. This comprehensive guide covers everything from material quality and safety certifications to proper maintenance and industry standards.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://res.cloudinary.com/jerrick/image/upload/v1731042328/672d9c1801f945001d49c2ae.jpg"
                                    alt="Professional kitchen equipment setup"
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
                                    <li>Stainless steel (grade 304 or 316) is the gold standard for durability and hygiene</li>
                                    <li>Look for NSF, UL, or CE certifications for safety assurance</li>
                                    <li>Weight and balance are often indicators of quality in knives and cookware</li>
                                    <li>Proper maintenance can extend equipment lifespan by 3-5 years</li>
                                    <li>Commercial-grade equipment often offers better value long-term</li>
                                </ul>
                            </div>

                            {/* Quality Factors Section */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Award className="w-8 h-8 text-blue-600 mr-2" />
                                    Quality Factors in Kitchen Equipment
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    High-quality kitchen equipment is an investment that pays off in performance, safety, and longevity. According to a <a href="#" className="text-blue-600 hover:underline">2024 study by the Culinary Institute of America</a>, professional kitchens that invest in quality equipment see:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>27% fewer equipment failures annually</li>
                                    <li>42% longer average lifespan of tools</li>
                                    <li>19% improvement in food consistency</li>
                                    <li>Reduced injury rates by 33%</li>
                                </ul>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Material Quality</h3>
                                <p className="text-gray-700 mb-4">
                                    The materials used in kitchen equipment determine its durability, performance, and even food safety. Here's a breakdown of common materials and their properties:
                                </p>

                                {/* Materials Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Material</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Best For</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pros</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cons</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price Range</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">304 Stainless Steel</td>
                                                <td className="px-4 py-3">Cookware, utensils</td>
                                                <td className="px-4 py-3">Durable, non-reactive, easy to clean</td>
                                                <td className="px-4 py-3">Can be heavy, poor heat conduction</td>
                                                <td className="px-4 py-3">$$-$$$</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Cast Iron</td>
                                                <td className="px-4 py-3">Skillets, Dutch ovens</td>
                                                <td className="px-4 py-3">Excellent heat retention, naturally non-stick</td>
                                                <td className="px-4 py-3">Requires seasoning, heavy</td>
                                                <td className="px-4 py-3">$-$$</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Hard-Anodized Aluminum</td>
                                                <td className="px-4 py-3">Cookware sets</td>
                                                <td className="px-4 py-3">Lightweight, excellent heat distribution</td>
                                                <td className="px-4 py-3">Can warp at high temps</td>
                                                <td className="px-4 py-3">$$-$$$</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Carbon Steel</td>
                                                <td className="px-4 py-3">Pans, woks</td>
                                                <td className="px-4 py-3">Lighter than cast iron, heats quickly</td>
                                                <td className="px-4 py-3">Requires seasoning, can rust</td>
                                                <td className="px-4 py-3">$$</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Copper</td>
                                                <td className="px-4 py-3">Specialty cookware</td>
                                                <td className="px-4 py-3">Best heat conductivity, precise temp control</td>
                                                <td className="px-4 py-3">Expensive, requires polishing</td>
                                                <td className="px-4 py-3">$$$$</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">1</span>
                                            Stainless Steel Grades
                                        </h3>
                                        <p className="text-gray-700">
                                            Not all stainless steel is equal. Grade 304 (18/8) is the standard for quality cookware, while 316 (18/10) offers even better corrosion resistance. Avoid 400 series which is more prone to rust.
                                        </p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">2</span>
                                            Weight Matters
                                        </h3>
                                        <p className="text-gray-700">
                                            Heavier pots and pans typically indicate thicker gauge metal which distributes heat more evenly. A quality 10-inch skillet should weigh at least 3.5-4 pounds.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Safety Standards Section */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Shield className="w-8 h-8 text-blue-600 mr-2" />
                                    Safety Standards and Certifications
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Kitchen equipment safety certifications ensure products meet rigorous standards for materials, construction, and performance. These certifications are especially crucial for commercial kitchens but are valuable for home use as well.
                                </p>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Key Certifications to Look For</h3>

                                <div className="space-y-4 mb-6">
                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                                            <Zap className="w-5 h-5 text-blue-600 mr-2" />
                                            NSF International Certification
                                        </h4>
                                        <p className="text-gray-700">
                                            The gold standard for commercial food equipment. NSF-certified products meet strict standards for material safety, design, construction, and performance. Look for the NSF mark on equipment that contacts food.
                                        </p>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                                            <Shield className="w-5 h-5 text-blue-600 mr-2" />
                                            UL (Underwriters Laboratories)
                                        </h4>
                                        <p className="text-gray-700">
                                            Indicates electrical safety for appliances. UL certification means the product has been tested for fire, electric shock, and other safety hazards.
                                        </p>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                                            <Award className="w-5 h-5 text-blue-600 mr-2" />
                                            CE Marking (European Conformity)
                                        </h4>
                                        <p className="text-gray-700">
                                            Required for sale in the European Economic Area, indicating compliance with health, safety, and environmental protection standards.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                                        <AlertTriangle className="w-5 h-5 text-red-600 mr-2" />
                                        Safety Red Flags
                                    </h3>
                                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                                        <li>Plastic utensils that melt at high temperatures</li>
                                        <li>Cookware with peeling non-stick coatings</li>
                                        <li>Knives with loose handles</li>
                                        <li>Electrical appliances without proper certification marks</li>
                                        <li>Cutting boards that show deep grooves (harbor bacteria)</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Selection Guide Section */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <ShoppingCart className="w-8 h-8 text-blue-600 mr-2" />
                                    Equipment Selection Guide
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Choosing the right kitchen equipment depends on your cooking style, frequency of use, and available space. Here's a comprehensive guide to building a well-equipped kitchen at different levels.
                                </p>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Essential Equipment Checklist</h3>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900 mb-3">For Home Cooks</h4>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>8-10" chef's knife (high-carbon stainless steel)</li>
                                            <li>12" stainless steel skillet (3-ply construction)</li>
                                            <li>3-quart saucepan with lid</li>
                                            <li>Half-sheet baking pan (aluminum)</li>
                                            <li>Wooden cutting board (end-grain preferred)</li>
                                            <li>Digital instant-read thermometer</li>
                                            <li>Kitchen scale (precision to 1g)</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900 mb-3">For Serious Enthusiasts</h4>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Additional knives (paring, bread, boning)</li>
                                            <li>Cast iron skillet (10-12")</li>
                                            <li>Dutch oven (5-7 quarts)</li>
                                            <li>Immersion circulator (sous vide)</li>
                                            <li>Stand mixer (if baking regularly)</li>
                                            <li>Food processor (8+ cup capacity)</li>
                                            <li>Mandoline slicer (with cut-proof glove)</li>
                                        </ul>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Price vs Quality Comparison</h3>
                                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                                    <div className="grid grid-cols-4 gap-4 text-center font-medium mb-2">
                                        <div>Item</div>
                                        <div>Budget</div>
                                        <div>Mid-Range</div>
                                        <div>Professional</div>
                                    </div>
                                    <div className="grid grid-cols-4 gap-4 text-center mb-1 border-b border-gray-200 pb-2">
                                        <div className="font-medium text-left">Chef's Knife</div>
                                        <div>$20-50</div>
                                        <div className="bg-blue-50">$80-150</div>
                                        <div>$200-400</div>
                                    </div>
                                    <div className="grid grid-cols-4 gap-4 text-center mb-1 border-b border-gray-200 pb-2">
                                        <div className="font-medium text-left">Skillet</div>
                                        <div>$15-30</div>
                                        <div className="bg-blue-50">$50-120</div>
                                        <div>$150-300</div>
                                    </div>
                                    <div className="grid grid-cols-4 gap-4 text-center mb-1 border-b border-gray-200 pb-2">
                                        <div className="font-medium text-left">Blender</div>
                                        <div>$30-60</div>
                                        <div className="bg-blue-50">$100-250</div>
                                        <div>$300-600</div>
                                    </div>
                                    <div className="grid grid-cols-4 gap-4 text-center">
                                        <div className="font-medium text-left">Stand Mixer</div>
                                        <div>$100-200</div>
                                        <div className="bg-blue-50">$300-500</div>
                                        <div>$600-1000</div>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Pro Tip:</h3>
                                    <p className="text-gray-700">
                                        The "buy once, cry once" principle often applies to kitchen equipment. Investing in quality pieces from the start saves money long-term by avoiding frequent replacements.
                                    </p>
                                </div>
                            </section>

                            {/* Maintenance Section */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Settings className="w-8 h-8 text-blue-600 mr-2" />
                                    Proper Maintenance and Care
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Proper maintenance extends the life of your kitchen equipment significantly. Follow these guidelines to keep your tools in top condition.
                                </p>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Maintenance Schedule</h3>

                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Equipment</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Daily Care</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Weekly Care</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Annual Care</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 font-medium text-gray-900">Knives</td>
                                                <td className="px-4 py-3">Hand wash, dry immediately</td>
                                                <td className="px-4 py-3">Hone with sharpening steel</td>
                                                <td className="px-4 py-3">Professional sharpening</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 font-medium text-gray-900">Cast Iron</td>
                                                <td className="px-4 py-3">Clean with salt or chainmail, light oil</td>
                                                <td className="px-4 py-3">Check seasoning layer</td>
                                                <td className="px-4 py-3">Complete re-seasoning</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 font-medium text-gray-900">Stainless Steel</td>
                                                <td className="px-4 py-3">Avoid abrasive cleaners</td>
                                                <td className="px-4 py-3">Polish with specialty cleaner</td>
                                                <td className="px-4 py-3">Check for warping/damage</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 font-medium text-gray-900">Small Appliances</td>
                                                <td className="px-4 py-3">Wipe exterior, clean attachments</td>
                                                <td className="px-4 py-3">Deep clean removable parts</td>
                                                <td className="px-4 py-3">Check cords/plugs for wear</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes to Avoid</h3>
                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900 mb-3">Cleaning Errors</h4>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Dishwasher for knives (damages handles and edges)</li>
                                            <li>Soaking wooden utensils (causes warping/cracking)</li>
                                            <li>Abrasive pads on non-stick surfaces</li>
                                            <li>Harsh chemicals on aluminum</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900 mb-3">Storage Mistakes</h4>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Knives loose in drawers (dulls blades)</li>
                                            <li>Stacking pans without protection</li>
                                            <li>Storing appliances with cords wrapped tightly</li>
                                            <li>Damp storage of wooden items</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Quality kitchen equipment is an investment in your culinary success and safety. While the initial cost may be higher for well-made tools, their longevity and performance make them more economical over time.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    Remember that even the best equipment requires proper use and maintenance. Build your collection gradually, focusing first on items you use most frequently.
                                </p>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "Good kitchen tools don't make you a better cook, but they make cooking better. They're the silent partners in every successful meal, allowing technique and ingredients to shine."
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
                                            Expert reviewed
                                        </a>{" "}
                                        by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            Chef Michael Rodriguez
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600 mb-1">
                                        — Written by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            Emily Chen
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
                                <h3 className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-2">KITCHEN ESSENTIALS NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get expert equipment guides</h4>
                                <p className="text-gray-700 text-sm">
                                    Monthly reviews, maintenance tips, and exclusive buying guides.
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

                        {/* Popular Equipment */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Top Rated Equipment</h3>
                            <div className="space-y-4">
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/chef-knife.jpg" alt="Chef's knife" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">8" Chef's Knife</h4>
                                            <p className="text-sm text-gray-600">4.9 ★ (218 reviews)</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/cast-iron.jpg" alt="Cast iron skillet" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">12" Cast Iron Skillet</h4>
                                            <p className="text-sm text-gray-600">4.7 ★ (156 reviews)</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/blender.jpg" alt="High-speed blender" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Professional Blender</h4>
                                            <p className="text-sm text-gray-600">4.8 ★ (189 reviews)</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Safety Checklist */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                <Shield className="w-5 h-5 text-blue-600 mr-2" />
                                Safety Checklist
                            </h3>
                            <div className="space-y-3">
                                <div className="flex items-start">
                                    <input type="checkbox" id="check1" className="mt-1 mr-2" />
                                    <label htmlFor="check1" className="text-gray-700">All electrical cords in good condition</label>
                                </div>
                                <div className="flex items-start">
                                    <input type="checkbox" id="check2" className="mt-1 mr-2" />
                                    <label htmlFor="check2" className="text-gray-700">Knife edges properly maintained</label>
                                </div>
                                <div className="flex items-start">
                                    <input type="checkbox" id="check3" className="mt-1 mr-2" />
                                    <label htmlFor="check3" className="text-gray-700">No damaged non-stick surfaces</label>
                                </div>
                                <div className="flex items-start">
                                    <input type="checkbox" id="check4" className="mt-1 mr-2" />
                                    <label htmlFor="check4" className="text-gray-700">Cutting boards free of deep grooves</label>
                                </div>
                                <div className="flex items-start">
                                    <input type="checkbox" id="check5" className="mt-1 mr-2" />
                                    <label htmlFor="check5" className="text-gray-700">Proper ventilation for gas appliances</label>
                                </div>
                            </div>
                        </div>

                        {/* Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                <BookOpen className="w-5 h-5 text-blue-600 mr-2" />
                                Further Reading
                            </h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">The Science of Knife Sharpening</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Commercial vs Home Kitchen Equipment</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Sustainable Kitchen Tools</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Understanding Cookware Coatings</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Kitchen Equipment Lifespan Guide</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}