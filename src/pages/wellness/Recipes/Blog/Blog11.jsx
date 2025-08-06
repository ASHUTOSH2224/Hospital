"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Clock, Flame, Droplet, Atom, Zap, Thermometer, BookOpen, FlaskConical } from "lucide-react"

export default function CookingScienceGuide() {
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

    const tabs = ["Basics", "Reactions", "Techniques", "Recipes"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                The Science Behind Cooking: How Heat Transforms Your Food
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
                                <span className="mx-2">•</span>
                                <Clock className="w-4 h-4 mr-1" />
                                <span className="text-sm">7 min read</span>
                            </div>

                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                Cooking is essentially applied chemistry and physics. When you understand the scientific principles behind heat transfer, protein denaturation, and chemical reactions like Maillard browning, you gain the power to transform ingredients in predictable, delicious ways. This guide explores how heat alters food at the molecular level.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                                    alt="Scientific cooking techniques in a modern kitchen"
                                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                                    style={{ maxHeight: '500px' }}
                                />
                            </div>

                            {/* Key Takeaways */}
                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
                                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                    <FlaskConical className="w-5 h-5 text-blue-600 mr-2" />
                                    Key Takeaways
                                </h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>Heat causes proteins to denature and coagulate between 140-180°F (60-80°C)</li>
                                    <li>The Maillard reaction creates complex flavors at temperatures above 285°F (140°C)</li>
                                    <li>Caramelization occurs when sugars break down between 230-360°F (110-180°C)</li>
                                    <li>Different cooking methods transfer heat through conduction, convection, or radiation</li>
                                    <li>Precision temperature control can dramatically improve cooking results</li>
                                </ul>
                            </div>

                            {/* Heat Transfer Fundamentals */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Thermometer className="w-8 h-8 text-blue-600 mr-2" />
                                    Heat Transfer Fundamentals
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Cooking relies on three primary methods of heat transfer, each affecting food differently:
                                </p>

                                <div className="grid md:grid-cols-3 gap-6 mb-6">
                                    <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <Zap className="w-5 h-5 text-blue-500 mr-2" />
                                            Conduction
                                        </h3>
                                        <p className="text-gray-700">
                                            Direct contact heat transfer (e.g., searing meat in a pan). Metals conduct heat efficiently, while materials like wood are poor conductors.
                                        </p>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <Droplet className="w-5 h-5 text-blue-500 mr-2" />
                                            Convection
                                        </h3>
                                        <p className="text-gray-700">
                                            Heat transfer through fluids (air, water, oil). Natural convection relies on density differences, while forced convection uses fans or stirring.
                                        </p>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <Flame className="w-5 h-5 text-blue-500 mr-2" />
                                            Radiation
                                        </h3>
                                        <p className="text-gray-700">
                                            Infrared energy transfer without medium (grilling, broiling). Intense radiation can create significant temperature gradients.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Heat Transfer Comparison</h3>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                            <thead className="bg-gray-100">
                                                <tr>
                                                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Method</th>
                                                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Efficiency</th>
                                                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Temperature Range</th>
                                                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Common Uses</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200">
                                                <tr>
                                                    <td className="px-4 py-2">Conduction</td>
                                                    <td className="px-4 py-2">High (direct contact)</td>
                                                    <td className="px-4 py-2">Up to pan material limits</td>
                                                    <td className="px-4 py-2">Searing, sautéing</td>
                                                </tr>
                                                <tr className="bg-gray-50">
                                                    <td className="px-4 py-2">Convection (air)</td>
                                                    <td className="px-4 py-2">Medium</td>
                                                    <td className="px-4 py-2">200-500°F (93-260°C)</td>
                                                    <td className="px-4 py-2">Baking, roasting</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-2">Convection (liquid)</td>
                                                    <td className="px-4 py-2">Very High</td>
                                                    <td className="px-4 py-2">160-375°F (71-190°C)</td>
                                                    <td className="px-4 py-2">Poaching, frying</td>
                                                </tr>
                                                <tr className="bg-gray-50">
                                                    <td className="px-4 py-2">Radiation</td>
                                                    <td className="px-4 py-2">Variable</td>
                                                    <td className="px-4 py-2">300-700°F (149-371°C)</td>
                                                    <td className="px-4 py-2">Grilling, broiling</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </section>

                            {/* Protein Denaturation */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Atom className="w-8 h-8 text-blue-600 mr-2" />
                                    Protein Denaturation and Coagulation
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Proteins are complex molecules that unfold (denature) when heated, changing their structure and properties. This process occurs in distinct stages:
                                </p>

                                <div className="mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Protein Transformation Stages</h3>
                                    <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-4">
                                        <li>
                                            <span className="font-semibold">Denaturation (104-122°F/40-50°C):</span> Protein molecules unfold, losing their tertiary structure
                                        </li>
                                        <li>
                                            <span className="font-semibold">Aggregation (140-158°F/60-70°C):</span> Unfolded proteins begin bonding with each other
                                        </li>
                                        <li>
                                            <span className="font-semibold">Coagulation (158-176°F/70-80°C):</span> Proteins form a solid network, changing texture
                                        </li>
                                        <li>
                                            <span className="font-semibold">Shrinkage (Above 176°F/80°C):</span> Excessive heat squeezes out moisture, toughening proteins
                                        </li>
                                    </ol>
                                </div>

                                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Protein Temperature Guide</h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <h4 className="font-bold text-gray-800 mb-2">Animal Proteins</h4>
                                            <ul className="space-y-1">
                                                <li className="flex justify-between">
                                                    <span>Egg whites</span>
                                                    <span className="font-medium">144-149°F (62-65°C)</span>
                                                </li>
                                                <li className="flex justify-between">
                                                    <span>Fish</span>
                                                    <span className="font-medium">120-140°F (49-60°C)</span>
                                                </li>
                                                <li className="flex justify-between">
                                                    <span>Chicken breast</span>
                                                    <span className="font-medium">150-155°F (65-68°C)</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-800 mb-2">Plant Proteins</h4>
                                            <ul className="space-y-1">
                                                <li className="flex justify-between">
                                                    <span>Tofu</span>
                                                    <span className="font-medium">160-180°F (71-82°C)</span>
                                                </li>
                                                <li className="flex justify-between">
                                                    <span>Seitan</span>
                                                    <span className="font-medium">180-200°F (82-93°C)</span>
                                                </li>
                                                <li className="flex justify-between">
                                                    <span>Legumes</span>
                                                    <span className="font-medium">200-212°F (93-100°C)</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Sous Vide: Precision Protein Cooking</h3>
                                    <p className="text-gray-700 mb-3">
                                        Sous vide (French for "under vacuum") demonstrates protein science perfectly. By cooking food in precisely controlled water baths:
                                    </p>
                                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                                        <li>Proteins denature at exact optimal temperatures</li>
                                        <li>Moisture loss is minimized (typically 5-10% vs 30%+ with traditional methods)</li>
                                        <li>Enzymatic activity can be carefully controlled</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Maillard Reaction */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Flame className="w-8 h-8 text-blue-600 mr-2" />
                                    The Maillard Reaction: Flavor Alchemy
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Discovered by Louis-Camille Maillard in 1912, this complex reaction between amino acids and reducing sugars creates hundreds of flavor compounds. It's responsible for the appealing brown crust on seared meats, baked goods, and roasted coffee.
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Maillard Reaction Requirements</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                                            <li>Temperature between 285-350°F (140-177°C)</li>
                                            <li>Low moisture environment (surface must be dry)</li>
                                            <li>Alkaline pH accelerates the reaction</li>
                                            <li>Presence of both amino acids and reducing sugars</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Common Maillard Products</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                                            <li>2-Acetyl-1-pyrroline (popcorn aroma)</li>
                                            <li>Furaneol (caramel-like flavor)</li>
                                            <li>Pyrazines (nutty, roasted notes)</li>
                                            <li>Maltol (sweet, cookie-like scent)</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Maillard vs Caramelization</h3>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                            <thead className="bg-gray-100">
                                                <tr>
                                                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Characteristic</th>
                                                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Maillard Reaction</th>
                                                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Caramelization</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200">
                                                <tr>
                                                    <td className="px-4 py-2">Reactants</td>
                                                    <td className="px-4 py-2">Amino acids + reducing sugars</td>
                                                    <td className="px-4 py-2">Sugars only</td>
                                                </tr>
                                                <tr className="bg-gray-50">
                                                    <td className="px-4 py-2">Temperature Range</td>
                                                    <td className="px-4 py-2">285-350°F (140-177°C)</td>
                                                    <td className="px-4 py-2">230-360°F (110-180°C)</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-2">Flavor Profile</td>
                                                    <td className="px-4 py-2">Meaty, savory, complex</td>
                                                    <td className="px-4 py-2">Sweet, buttery</td>
                                                </tr>
                                                <tr className="bg-gray-50">
                                                    <td className="px-4 py-2">Color Produced</td>
                                                    <td className="px-4 py-2">Golden to dark brown</td>
                                                    <td className="px-4 py-2">Light yellow to dark brown</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </section>

                            {/* Advanced Techniques */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Advanced Scientific Cooking Techniques</h2>

                                <div className="space-y-6">
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">1. Reverse Searing</h3>
                                        </div>
                                        <div className="p-4">
                                            <p className="text-gray-700 mb-3">
                                                Cooking meat at low temperature first (200-275°F/93-135°C) then finishing with a high-heat sear creates:
                                            </p>
                                            <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                                                <li>More even doneness throughout</li>
                                                <li>Better moisture retention</li>
                                                <li>Perfect Maillard crust without overcooking</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">2. Enzymatic Tenderization</h3>
                                        </div>
                                        <div className="p-4">
                                            <p className="text-gray-700 mb-3">
                                                Using natural enzymes (from pineapple, papaya, kiwi, or ginger) to break down tough proteins before cooking:
                                            </p>
                                            <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                                                <li>Bromelain (pineapple) works at room temperature</li>
                                                <li>Papain (papaya) activates at 140-170°F (60-77°C)</li>
                                                <li>Over-marinating can create mushy texture</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">3. Spherification</h3>
                                        </div>
                                        <div className="p-4">
                                            <p className="text-gray-700 mb-3">
                                                Using sodium alginate and calcium salts to create edible spheres with liquid centers (popularized by molecular gastronomy):
                                            </p>
                                            <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                                                <li>Basic spherification: External gelification</li>
                                                <li>Reverse spherification: Internal gelification</li>
                                                <li>Requires precise 0.5-1.0% alginate solutions</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Understanding food science transforms cooking from guesswork to precision. When you know why ingredients behave as they do under heat, you can:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>Adjust techniques to achieve perfect textures</li>
                                    <li>Maximize flavor development</li>
                                    <li>Troubleshoot cooking problems systematically</li>
                                    <li>Innovate with confidence</li>
                                </ul>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "The difference between a good cook and a great cook is understanding the why, not just the how. Science provides the framework for culinary artistry."
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
                                            Scientifically reviewed
                                        </a>{" "}
                                        by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            Dr. Emily Chen, Food Chemist
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600 mb-1">
                                        — Written by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            Chef Michael Rodriguez
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
                                <h3 className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-2">COOKING SCIENCE NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get weekly science-backed cooking tips</h4>
                                <p className="text-gray-700 text-sm">
                                    Recipes, techniques, and food science insights delivered to your inbox.
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

                        {/* Temperature Guide */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Essential Cooking Temperatures</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-medium text-gray-900 mb-2">Meat Doneness</h4>
                                    <ul className="space-y-1 text-sm">
                                        <li className="flex justify-between">
                                            <span>Rare Beef</span>
                                            <span className="font-medium">120-125°F (49-52°C)</span>
                                        </li>
                                        <li className="flex justify-between">
                                            <span>Medium Beef</span>
                                            <span className="font-medium">130-140°F (54-60°C)</span>
                                        </li>
                                        <li className="flex justify-between">
                                            <span>Well Done Beef</span>
                                            <span className="font-medium">160°F+ (71°C+)</span>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900 mb-2">Key Reactions</h4>
                                    <ul className="space-y-1 text-sm">
                                        <li className="flex justify-between">
                                            <span>Maillard Begins</span>
                                            <span className="font-medium">285°F (140°C)</span>
                                        </li>
                                        <li className="flex justify-between">
                                            <span>Caramelization</span>
                                            <span className="font-medium">230°F (110°C)</span>
                                        </li>
                                        <li className="flex justify-between">
                                            <span>Water Boils</span>
                                            <span className="font-medium">212°F (100°C)</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Resources */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Further Reading</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">On Food and Cooking by Harold McGee</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Modernist Cuisine (6-volume set)</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">The Food Lab by J. Kenji López-Alt</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Molecular Gastronomy by Hervé This</a>
                                </li>
                            </ul>
                        </div>

                        {/* Conversion Chart */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Kitchen Conversions</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span className="font-medium">1 tablespoon</span>
                                    <span>3 teaspoons</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span className="font-medium">1 fluid ounce</span>
                                    <span>2 tablespoons</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span className="font-medium">1 cup</span>
                                    <span>8 fluid ounces</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span className="font-medium">1 pint</span>
                                    <span>2 cups</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-medium">1 quart</span>
                                    <span>4 cups</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}