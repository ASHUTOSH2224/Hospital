"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Clock, BookOpen, ChefHat, Layers, FlaskConical, Scale, Star, Leaf } from "lucide-react"

export default function FlavorBuildingGuide() {
    const [email, setEmail] = useState("")
    const [activeTab, setActiveTab] = useState("Fundamentals")

    const handleEmailSubmit = (e) => {
        e.preventDefault()
        console.log("Email submitted:", email)
        setEmail("")
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const tabs = ["Fundamentals", "Techniques", "Ingredients", "Recipes"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Flavor Building: The Key to Delicious Cooking
                            </h1>

                            {/* Navigation Tabs */}
                            <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-200">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${activeTab === tab
                                                ? "border-orange-500 text-orange-600"
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
                                <span className="text-sm mr-4">Updated on June 15, 2024</span>
                                <Clock className="w-4 h-4 mr-1" />
                                <span className="text-sm">6 min read</span>
                            </div>

                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                Mastering flavor building transforms ordinary dishes into extraordinary culinary experiences. This comprehensive guide explores how to layer flavors based on your taste preferences, cooking goals, ingredient types, and cultural techniques for consistently delicious results.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                                    alt="Chef preparing food with various spices"
                                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                                    style={{ maxHeight: '500px' }}
                                />
                            </div>

                            {/* Key Takeaways */}
                            <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-8">
                                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                    <Star className="w-5 h-5 text-orange-600 mr-2" />
                                    Key Takeaways
                                </h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>Flavor building involves five basic tastes: sweet, salty, sour, bitter, and umami</li>
                                    <li>Proper layering can enhance flavor complexity by up to 300%</li>
                                    <li>Cooking techniques affect flavor development at molecular levels</li>
                                    <li>Cultural traditions offer unique approaches to flavor combinations</li>
                                    <li>Balancing flavors reduces the need for excessive salt, sugar, or fat</li>
                                </ul>
                            </div>

                            {/* The Science of Flavor */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <FlaskConical className="w-8 h-8 text-orange-600 mr-2" />
                                    The Science of Flavor
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Flavor perception is a complex interaction between our taste buds, olfactory system, and even visual cues. According to a <a href="#" className="text-blue-600 hover:underline">2023 study in the Journal of Food Science</a>, properly layered flavors can increase perceived deliciousness by 47% compared to single-note dishes.
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">The Five Basic Tastes</h3>
                                        <ol className="list-decimal list-inside text-gray-700 space-y-2">
                                            <li><span className="font-medium">Sweet</span> - Signals energy-rich foods</li>
                                            <li><span className="font-medium">Salty</span> - Essential for electrolyte balance</li>
                                            <li><span className="font-medium">Sour</span> - Indicates acidity and fermentation</li>
                                            <li><span className="font-medium">Bitter</span> - Often signals beneficial phytochemicals</li>
                                            <li><span className="font-medium">Umami</span> - The savory taste of amino acids</li>
                                        </ol>
                                    </div>
                                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Flavor Perception Factors</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Temperature affects volatility of aroma compounds</li>
                                            <li>Texture influences flavor release rate</li>
                                            <li>Color creates expectations that alter perception</li>
                                            <li>Sound (like crunchiness) enhances flavor experience</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">The Maillard Reaction</h3>
                                    <p className="text-gray-700 mb-2">
                                        This chemical reaction between amino acids and reducing sugars creates hundreds of flavor compounds when cooking at high temperatures (140-165°C/284-329°F).
                                    </p>
                                    <p className="text-gray-700">
                                        It's responsible for the complex flavors in seared meats, roasted coffee, toasted bread, and fried onions.
                                    </p>
                                </div>
                            </section>

                            {/* Flavor Building Techniques */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Layers className="w-8 h-8 text-orange-600 mr-2" />
                                    Flavor Building Techniques
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Professional chefs use these layered techniques to create depth in every dish. The order of operations matters significantly in flavor development.
                                </p>

                                {/* Techniques Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Technique</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purpose</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Best For</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Example</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Searing</td>
                                                <td className="px-4 py-3">Creates Maillard reaction flavors</td>
                                                <td className="px-4 py-3">Meats, vegetables</td>
                                                <td className="px-4 py-3">Steak crust, roasted mushrooms</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Sweating</td>
                                                <td className="px-4 py-3">Softens without browning</td>
                                                <td className="px-4 py-3">Aromatics</td>
                                                <td className="px-4 py-3">Onions for soups</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Deglazing</td>
                                                <td className="px-4 py-3">Incorporates fond flavors</td>
                                                <td className="px-4 py-3">Pan sauces</td>
                                                <td className="px-4 py-3">Wine reduction sauces</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Reduction</td>
                                                <td className="px-4 py-3">Concentrates flavors</td>
                                                <td className="px-4 py-3">Sauces, stocks</td>
                                                <td className="px-4 py-3">Balsamic glaze</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Infusing</td>
                                                <td className="px-4 py-3">Extracts flavors gently</td>
                                                <td className="px-4 py-3">Oils, liquids</td>
                                                <td className="px-4 py-3">Herb-infused oils</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                {/* Flavor Building Process */}
                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">The Flavor Building Process</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-start">
                                            <div className="flex-shrink-0 bg-orange-100 text-orange-800 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 font-bold">1</div>
                                            <div>
                                                <h4 className="font-bold text-gray-900 mb-1">Base Layer</h4>
                                                <p className="text-gray-700">Create a flavor foundation with aromatics (onions, garlic, celery) cooked in fat. This establishes the primary flavor profile.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="flex-shrink-0 bg-orange-100 text-orange-800 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 font-bold">2</div>
                                            <div>
                                                <h4 className="font-bold text-gray-900 mb-1">Primary Ingredients</h4>
                                                <p className="text-gray-700">Add main components (meats, vegetables) and develop their flavors through proper cooking techniques.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="flex-shrink-0 bg-orange-100 text-orange-800 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 font-bold">3</div>
                                            <div>
                                                <h4 className="font-bold text-gray-900 mb-1">Liquid Component</h4>
                                                <p className="text-gray-700">Introduce stocks, wines, or other liquids to deglaze and create a unified flavor base.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="flex-shrink-0 bg-orange-100 text-orange-800 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 font-bold">4</div>
                                            <div>
                                                <h4 className="font-bold text-gray-900 mb-1">Seasoning Adjustment</h4>
                                                <p className="text-gray-700">Add herbs, spices, and seasoning in stages to build complexity without overwhelming any single note.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="flex-shrink-0 bg-orange-100 text-orange-800 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 font-bold">5</div>
                                            <div>
                                                <h4 className="font-bold text-gray-900 mb-1">Finishing Elements</h4>
                                                <p className="text-gray-700">Incorporate fresh herbs, citrus, or specialty oils just before serving for bright top notes.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Cultural Flavor Profiles */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Cultural Flavor Profiles</h2>

                                <p className="text-gray-700 mb-6">
                                    Different cuisines have developed unique approaches to flavor building. Understanding these can expand your culinary repertoire.
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-orange-600 px-4 py-2">
                                            <h3 className="font-bold text-white">French Cuisine</h3>
                                        </div>
                                        <div className="p-4">
                                            <p className="text-gray-700 mb-2"><span className="font-semibold">Base:</span> Mirepoix (onions, carrots, celery)</p>
                                            <p className="text-gray-700 mb-2"><span className="font-semibold">Technique:</span> Layered reductions</p>
                                            <p className="text-gray-700 mb-2"><span className="font-semibold">Signature:</span> Wine-based pan sauces</p>
                                            <p className="text-gray-700"><span className="font-semibold">Example:</span> Coq au vin's layered flavors from bacon, mushrooms, chicken, and red wine</p>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-orange-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Thai Cuisine</h3>
                                        </div>
                                        <div className="p-4">
                                            <p className="text-gray-700 mb-2"><span className="font-semibold">Base:</span> Lemongrass, galangal, kaffir lime</p>
                                            <p className="text-gray-700 mb-2"><span className="font-semibold">Technique:</span> Simultaneous balancing of sweet, sour, salty, spicy</p>
                                            <p className="text-gray-700 mb-2"><span className="font-semibold">Signature:</span> Coconut milk as flavor carrier</p>
                                            <p className="text-gray-700"><span className="font-semibold">Example:</span> Tom kha gai's harmony of spicy, sour, and creamy</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Pro Tip:</h3>
                                    <p className="text-gray-700">
                                        When experimenting with new flavor profiles, start with small batches and adjust gradually. The human palate can detect flavor differences as small as 0.5% in salt concentration and 1% in sugar concentration.
                                    </p>
                                </div>
                            </section>

                            {/* Flavor Pairing Science */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">The Science of Flavor Pairing</h2>

                                <p className="text-gray-700 mb-4">
                                    Modern gastronomy has identified several scientific approaches to successful flavor combinations:
                                </p>

                                <div className="mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">1. Complementary Pairing</h3>
                                    <p className="text-gray-700 mb-2">
                                        Combining ingredients that share key flavor compounds. This creates harmony and depth.
                                    </p>
                                    <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4">
                                        <h4 className="font-medium text-gray-900 mb-2">Examples:</h4>
                                        <ul className="grid grid-cols-2 gap-2">
                                            <li className="flex items-center">
                                                <span className="bg-orange-100 text-orange-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 text-xs">✓</span>
                                                Tomato + Basil
                                            </li>
                                            <li className="flex items-center">
                                                <span className="bg-orange-100 text-orange-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 text-xs">✓</span>
                                                Chocolate + Coffee
                                            </li>
                                            <li className="flex items-center">
                                                <span className="bg-orange-100 text-orange-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 text-xs">✓</span>
                                                Pork + Apples
                                            </li>
                                            <li className="flex items-center">
                                                <span className="bg-orange-100 text-orange-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 text-xs">✓</span>
                                                Beef + Mushrooms
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">2. Contrast Pairing</h3>
                                    <p className="text-gray-700 mb-2">
                                        Pairing opposite flavors to create balance and excitement on the palate.
                                    </p>
                                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                                        <h4 className="font-medium text-gray-900 mb-2">Examples:</h4>
                                        <ul className="grid grid-cols-2 gap-2">
                                            <li className="flex items-center">
                                                <span className="bg-orange-100 text-orange-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 text-xs">✓</span>
                                                Sweet + Salty
                                            </li>
                                            <li className="flex items-center">
                                                <span className="bg-orange-100 text-orange-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 text-xs">✓</span>
                                                Spicy + Cool
                                            </li>
                                            <li className="flex items-center">
                                                <span className="bg-orange-100 text-orange-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 text-xs">✓</span>
                                                Crispy + Creamy
                                            </li>
                                            <li className="flex items-center">
                                                <span className="bg-orange-100 text-orange-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 text-xs">✓</span>
                                                Tart + Rich
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Practical Applications */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Practical Applications</h2>

                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Building a Simple Pan Sauce</h3>
                                        <ol className="list-decimal list-inside text-gray-700 space-y-2 pl-4">
                                            <li>After cooking meat, pour off excess fat, leaving about 1 tablespoon</li>
                                            <li>Add minced shallots, cook until softened (1-2 minutes)</li>
                                            <li>Deglaze with 1/2 cup wine or stock, scraping browned bits</li>
                                            <li>Reduce by half, then add 1 cup stock</li>
                                            <li>Simmer until slightly thickened (5-7 minutes)</li>
                                            <li>Finish with 2 tablespoons cold butter, whisking until emulsified</li>
                                            <li>Season with salt, pepper, and fresh herbs</li>
                                        </ol>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Flavor Building Ratios</h3>
                                        <div className="overflow-x-auto">
                                            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                                <thead className="bg-gray-50">
                                                    <tr>
                                                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Component</th>
                                                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ratio</th>
                                                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purpose</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200">
                                                    <tr>
                                                        <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Aromatics</td>
                                                        <td className="px-4 py-3 whitespace-nowrap">1 part</td>
                                                        <td className="px-4 py-3">Flavor base</td>
                                                    </tr>
                                                    <tr className="bg-gray-50">
                                                        <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Main Protein</td>
                                                        <td className="px-4 py-3 whitespace-nowrap">2 parts</td>
                                                        <td className="px-4 py-3">Primary substance</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Vegetables</td>
                                                        <td className="px-4 py-3 whitespace-nowrap">1.5 parts</td>
                                                        <td className="px-4 py-3">Texture and nutrition</td>
                                                    </tr>
                                                    <tr className="bg-gray-50">
                                                        <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Liquid</td>
                                                        <td className="px-4 py-3 whitespace-nowrap">To cover</td>
                                                        <td className="px-4 py-3">Flavor integration</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Seasoning</td>
                                                        <td className="px-4 py-3 whitespace-nowrap">To taste</td>
                                                        <td className="px-4 py-3">Balance and accent</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Mastering flavor building is what separates good cooks from great ones. By understanding how different components interact and learning to layer them intentionally, you can transform simple ingredients into extraordinary dishes.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    Remember that flavor development is both a science and an art. While the chemical principles remain constant, your personal taste preferences and creativity should guide how you apply these techniques.
                                </p>

                                <div className="bg-orange-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "The difference between a meal and an experience often comes down to thoughtful flavor building. Take the time to develop each layer, and your cooking will reach new heights."
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
                                            Chef Marco Russo
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600 mb-1">
                                        — Written by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            Emily Carter
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
                        <div className="bg-orange-50 rounded-lg p-6 mb-8">
                            <div className="mb-4">
                                <h3 className="text-sm font-bold text-orange-800 uppercase tracking-wide mb-2">COOKING NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get chef-approved techniques</h4>
                                <p className="text-gray-700 text-sm">
                                    Weekly flavor tips, recipe ideas, and cooking science delivered to your inbox.
                                </p>
                            </div>

                            <form onSubmit={handleEmailSubmit} className="space-y-4">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200"
                                >
                                    SUBSCRIBE
                                </button>
                            </form>

                            <p className="text-xs text-gray-600 mt-3">
                                Your{" "}
                                <a href="#" className="text-orange-600 hover:underline">
                                    privacy
                                </a>{" "}
                                is important to us
                            </p>
                        </div>

                        {/* Popular Techniques */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Essential Flavor Techniques</h3>
                            <div className="space-y-4">
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="Deglazing pan" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-orange-600 transition-colors">Mastering Deglazing</h4>
                                            <p className="text-sm text-gray-600">Transform pan drippings into sauces</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Herb bouquet" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-orange-600 transition-colors">Herb Pairing Guide</h4>
                                            <p className="text-sm text-gray-600">Which herbs work best with which foods</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" alt="Spices" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-orange-600 transition-colors">Spice Blooming</h4>
                                            <p className="text-sm text-gray-600">Unlocking full flavor potential</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Flavor Pairing Chart */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Classic Flavor Pairings</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span className="font-medium">Ingredient:</span>
                                    <span className="font-medium">Best Pairings:</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Chicken</span>
                                    <span className="text-orange-600">Lemon, thyme, garlic</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Beef</span>
                                    <span className="text-orange-600">Rosemary, mushrooms, red wine</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Pork</span>
                                    <span className="text-orange-600">Apples, sage, fennel</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Fish</span>
                                    <span className="text-orange-600">Dill, lemon, capers</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Tomatoes</span>
                                    <span className="text-orange-600">Basil, mozzarella, olive oil</span>
                                </div>
                            </div>
                        </div>

                        {/* Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Further Reading</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-orange-600 hover:underline">The Flavor Bible: The Essential Guide</a>
                                </li>
                                <li>
                                    <a href="#" className="text-orange-600 hover:underline">Salt, Fat, Acid, Heat: Mastering the Elements</a>
                                </li>
                                <li>
                                    <a href="#" className="text-orange-600 hover:underline">The Science of Cooking: Understanding Flavor</a>
                                </li>
                                <li>
                                    <a href="#" className="text-orange-600 hover:underline">Global Flavor Profiles: A Cultural Guide</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}