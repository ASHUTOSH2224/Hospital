"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, ShieldAlert, Thermometer, Clock, Droplets, Snowflake, Recycle, AlertTriangle, BookOpen } from "lucide-react"

export default function FoodSafetyGuide() {
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

    const tabs = ["Basics", "Storage", "Handling", "Temperatures", "Resources"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Food Safety: Understanding Proper Handling and Storage
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
                                Proper food handling and storage are critical to preventing foodborne illnesses and maintaining nutritional quality. This comprehensive guide covers essential safety practices, temperature guidelines, storage techniques, and common mistakes to avoid in your kitchen.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://safetyculture.com/_next/image/?url=https%3A%2F%2Fwp-website.safetyculture.com%2Fwp-content%2Fuploads%2Fsites%2F3%2F2021%2F06%2Ffood-handling-practices.png&w=1920&q=75"
                                    alt="Proper food handling practices"
                                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                                    style={{ maxHeight: '500px' }}
                                />
                            </div>

                            {/* Key Takeaways */}
                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
                                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                    <ShieldAlert className="w-5 h-5 text-blue-600 mr-2" />
                                    Key Takeaways
                                </h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>The danger zone for bacterial growth is between 40°F and 140°F (4°C and 60°C)</li>
                                    <li>Proper refrigeration can reduce food waste by up to 25%</li>
                                    <li>Cross-contamination causes approximately 30% of foodborne illnesses</li>
                                    <li>Different food categories have specific storage requirements</li>
                                    <li>Food preservation methods can extend shelf life significantly</li>
                                </ul>
                            </div>

                            {/* Why Food Safety Matters */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <ShieldAlert className="w-8 h-8 text-blue-600 mr-2" />
                                    Why Food Safety Matters
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    According to the World Health Organization, unsafe food causes 600 million cases of foodborne diseases annually worldwide. In the United States alone, the CDC estimates 48 million people get sick, 128,000 are hospitalized, and 3,000 die from foodborne diseases each year.
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div className="bg-white p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">Health Impacts</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>Nausea, vomiting, diarrhea (common symptoms)</li>
                                            <li>Long-term health consequences (kidney failure, chronic arthritis)</li>
                                            <li>Vulnerable populations at higher risk (elderly, pregnant, immunocompromised)</li>
                                        </ul>
                                    </div>
                                    <div className="bg-white p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">Economic Impacts</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>Medical costs exceeding $15 billion annually in the U.S.</li>
                                            <li>Product recalls damaging brand reputation</li>
                                            <li>Food waste from improper storage</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Common Foodborne Pathogens</h3>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full bg-white">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Pathogen</th>
                                                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Common Sources</th>
                                                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Symptoms</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200">
                                                <tr>
                                                    <td className="px-4 py-2 whitespace-nowrap">Salmonella</td>
                                                    <td className="px-4 py-2">Poultry, eggs, raw produce</td>
                                                    <td className="px-4 py-2">Diarrhea, fever, abdominal cramps</td>
                                                </tr>
                                                <tr className="bg-gray-50">
                                                    <td className="px-4 py-2 whitespace-nowrap">E. coli</td>
                                                    <td className="px-4 py-2">Undercooked beef, raw milk</td>
                                                    <td className="px-4 py-2">Severe stomach cramps, bloody diarrhea</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-2 whitespace-nowrap">Listeria</td>
                                                    <td className="px-4 py-2">Deli meats, soft cheeses</td>
                                                    <td className="px-4 py-2">Fever, muscle aches, nausea</td>
                                                </tr>
                                                <tr className="bg-gray-50">
                                                    <td className="px-4 py-2 whitespace-nowrap">Norovirus</td>
                                                    <td className="px-4 py-2">Contaminated surfaces, ready-to-eat foods</td>
                                                    <td className="px-4 py-2">Vomiting, diarrhea, stomach pain</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </section>

                            {/* Temperature Guidelines */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Thermometer className="w-8 h-8 text-blue-600 mr-2" />
                                    Temperature Guidelines
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Temperature control is the most critical factor in food safety. Bacteria multiply rapidly between 40°F and 140°F (4°C and 60°C), known as the "danger zone." Proper temperature management can prevent most foodborne illnesses.
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Safe Cooking Temperatures</h3>
                                        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                                            <div className="grid grid-cols-2 bg-gray-50">
                                                <div className="px-4 py-2 font-medium">Food Type</div>
                                                <div className="px-4 py-2 font-medium">Internal Temp (°F)</div>
                                            </div>
                                            <div className="grid grid-cols-2 border-b border-gray-200">
                                                <div className="px-4 py-2">Poultry (whole, ground)</div>
                                                <div className="px-4 py-2 font-medium">165°F</div>
                                            </div>
                                            <div className="grid grid-cols-2 border-b border-gray-200 bg-gray-50">
                                                <div className="px-4 py-2">Ground meats (beef, pork)</div>
                                                <div className="px-4 py-2 font-medium">160°F</div>
                                            </div>
                                            <div className="grid grid-cols-2 border-b border-gray-200">
                                                <div className="px-4 py-2">Fresh beef, veal, lamb</div>
                                                <div className="px-4 py-2 font-medium">145°F</div>
                                            </div>
                                            <div className="grid grid-cols-2 bg-gray-50">
                                                <div className="px-4 py-2">Pork, ham</div>
                                                <div className="px-4 py-2 font-medium">145°F</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Storage Temperatures</h3>
                                        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                                            <div className="grid grid-cols-2 bg-gray-50">
                                                <div className="px-4 py-2 font-medium">Storage Type</div>
                                                <div className="px-4 py-2 font-medium">Temperature</div>
                                            </div>
                                            <div className="grid grid-cols-2 border-b border-gray-200">
                                                <div className="px-4 py-2">Refrigerator</div>
                                                <div className="px-4 py-2 font-medium">≤ 40°F (4°C)</div>
                                            </div>
                                            <div className="grid grid-cols-2 border-b border-gray-200 bg-gray-50">
                                                <div className="px-4 py-2">Freezer</div>
                                                <div className="px-4 py-2 font-medium">0°F (-18°C)</div>
                                            </div>
                                            <div className="grid grid-cols-2 border-b border-gray-200">
                                                <div className="px-4 py-2">Hot holding</div>
                                                <div className="px-4 py-2 font-medium">≥ 140°F (60°C)</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Pro Tip:</h3>
                                    <p className="text-gray-700">
                                        Use a calibrated food thermometer to check temperatures. Don't rely on appearance or time estimates. Digital thermometers provide the most accurate readings.
                                    </p>
                                </div>
                            </section>

                            {/* Proper Food Storage */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Snowflake className="w-8 h-8 text-blue-600 mr-2" />
                                    Proper Food Storage
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Correct food storage extends shelf life, maintains quality, and prevents contamination. Follow these guidelines to optimize your refrigerator and pantry organization.
                                </p>

                                <div className="mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Refrigerator Organization</h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="bg-white p-4 border border-gray-200 rounded-lg">
                                            <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                                                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">1</span>
                                                Upper Shelves
                                            </h4>
                                            <p className="text-gray-700">
                                                Ready-to-eat foods (dairy, leftovers, drinks). Store cooked foods above raw to prevent cross-contamination.
                                            </p>
                                        </div>
                                        <div className="bg-white p-4 border border-gray-200 rounded-lg">
                                            <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                                                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">2</span>
                                                Lower Shelves
                                            </h4>
                                            <p className="text-gray-700">
                                                Raw meat, poultry, seafood (in sealed containers). Coldest part of fridge prevents dripping.
                                            </p>
                                        </div>
                                        <div className="bg-white p-4 border border-gray-200 rounded-lg">
                                            <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                                                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">3</span>
                                                Door Shelves
                                            </h4>
                                            <p className="text-gray-700">
                                                Condiments, juices (least temperature-sensitive items). Warmest area with most fluctuation.
                                            </p>
                                        </div>
                                        <div className="bg-white p-4 border border-gray-200 rounded-lg">
                                            <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                                                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">4</span>
                                                Crisper Drawers
                                            </h4>
                                            <p className="text-gray-700">
                                                Fruits and vegetables (adjust humidity settings). High humidity for leafy greens, low for fruits.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Food Storage Times</h3>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Food Item</th>
                                                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Refrigerator</th>
                                                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Freezer</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200">
                                                <tr>
                                                    <td className="px-4 py-2 whitespace-nowrap">Raw poultry</td>
                                                    <td className="px-4 py-2">1-2 days</td>
                                                    <td className="px-4 py-2">9-12 months</td>
                                                </tr>
                                                <tr className="bg-gray-50">
                                                    <td className="px-4 py-2 whitespace-nowrap">Ground meats</td>
                                                    <td className="px-4 py-2">1-2 days</td>
                                                    <td className="px-4 py-2">3-4 months</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-2 whitespace-nowrap">Fresh fish</td>
                                                    <td className="px-4 py-2">1-2 days</td>
                                                    <td className="px-4 py-2">6 months</td>
                                                </tr>
                                                <tr className="bg-gray-50">
                                                    <td className="px-4 py-2 whitespace-nowrap">Eggs (in shell)</td>
                                                    <td className="px-4 py-2">3-5 weeks</td>
                                                    <td className="px-4 py-2">Not recommended</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-2 whitespace-nowrap">Leftovers</td>
                                                    <td className="px-4 py-2">3-4 days</td>
                                                    <td className="px-4 py-2">2-3 months</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                                    <h3 className="font-bold text-gray-900 mb-2">Important:</h3>
                                    <p className="text-gray-700">
                                        These times are for quality only. Frozen food remains safe indefinitely but quality deteriorates over time. Always check for spoilage signs before consumption.
                                    </p>
                                </div>
                            </section>

                            {/* Safe Handling Practices */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Droplets className="w-8 h-8 text-blue-600 mr-2" />
                                    Safe Handling Practices
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Proper food handling prevents cross-contamination and reduces the risk of foodborne illness. Follow these evidence-based practices in your kitchen.
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Hand Washing Protocol</h3>
                                        <ol className="list-decimal list-inside text-gray-700 space-y-2">
                                            <li>Wet hands with clean, running water</li>
                                            <li>Apply soap and lather all surfaces (20 seconds minimum)</li>
                                            <li>Scrub between fingers, under nails, and backs of hands</li>
                                            <li>Rinse thoroughly under running water</li>
                                            <li>Dry with clean towel or air dry</li>
                                        </ol>
                                        <p className="text-gray-700 mt-3">
                                            <span className="font-semibold">When to wash:</span> Before handling food, after touching raw meat, after using bathroom, after touching pets.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Cutting Board Safety</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Use separate boards for raw meat and produce</li>
                                            <li>Choose non-porous materials (plastic, glass, hardwood)</li>
                                            <li>Sanitize after each use (1 tbsp bleach per gallon of water)</li>
                                            <li>Replace when excessively worn or grooved</li>
                                        </ul>
                                        <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                                            <p className="text-gray-700">
                                                <span className="font-semibold">Color-coding system:</span> Red for raw meat, blue for seafood, green for produce, yellow for poultry.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Thawing Methods</h3>
                                    <div className="grid md:grid-cols-3 gap-4">
                                        <div className="bg-white p-4 border border-gray-200 rounded-lg">
                                            <h4 className="font-bold text-gray-900 mb-2">Refrigerator Thawing</h4>
                                            <p className="text-gray-700 mb-2">Safest method. Allow approximately 24 hours for every 5 pounds.</p>
                                            <p className="text-sm text-gray-600">Food can be refrozen without cooking</p>
                                        </div>
                                        <div className="bg-white p-4 border border-gray-200 rounded-lg">
                                            <h4 className="font-bold text-gray-900 mb-2">Cold Water Thawing</h4>
                                            <p className="text-gray-700 mb-2">Submerge in leak-proof bag, changing water every 30 minutes.</p>
                                            <p className="text-sm text-gray-600">Cook immediately after thawing</p>
                                        </div>
                                        <div className="bg-white p-4 border border-gray-200 rounded-lg">
                                            <h4 className="font-bold text-gray-900 mb-2">Microwave Thawing</h4>
                                            <p className="text-gray-700 mb-2">Use "defrost" setting and cook immediately after.</p>
                                            <p className="text-sm text-gray-600">May partially cook some areas</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                                    <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                                        <AlertTriangle className="w-5 h-5 text-red-600 mr-2" />
                                        Never Do This:
                                    </h3>
                                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                                        <li>Thaw food on the counter at room temperature</li>
                                        <li>Rinse raw poultry (spreads bacteria in sink)</li>
                                        <li>Taste food to check if it's still good</li>
                                        <li>Use the same plate for raw and cooked meat</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Special Considerations */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Special Considerations</h2>

                                <div className="mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">High-Risk Foods</h3>
                                    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="grid md:grid-cols-2">
                                            <div className="p-4 border-b md:border-b-0 md:border-r border-gray-200">
                                                <h4 className="font-bold text-gray-900 mb-2">Potentially Hazardous Foods</h4>
                                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                                    <li>Raw sprouts (alfalfa, bean, etc.)</li>
                                                    <li>Unpasteurized milk and juices</li>
                                                    <li>Soft cheeses (brie, feta, blue-veined)</li>
                                                    <li>Raw shellfish</li>
                                                    <li>Undercooked eggs</li>
                                                </ul>
                                            </div>
                                            <div className="p-4">
                                                <h4 className="font-bold text-gray-900 mb-2">Safe Alternatives</h4>
                                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                                    <li>Cooked sprouts</li>
                                                    <li>Pasteurized dairy products</li>
                                                    <li>Hard cheeses (cheddar, Swiss)</li>
                                                    <li>Cooked shellfish</li>
                                                    <li>Pasteurized egg products</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Food Preservation Methods</h3>
                                    <div className="grid md:grid-cols-3 gap-4">
                                        <div className="bg-white p-4 border border-gray-200 rounded-lg">
                                            <h4 className="font-bold text-gray-900 mb-2">Canning</h4>
                                            <p className="text-gray-700 mb-2">High-acid foods (pH ≤4.6): boiling water bath. Low-acid: pressure canning.</p>
                                            <p className="text-sm text-gray-600">Follow USDA guidelines precisely</p>
                                        </div>
                                        <div className="bg-white p-4 border border-gray-200 rounded-lg">
                                            <h4 className="font-bold text-gray-900 mb-2">Freezing</h4>
                                            <p className="text-gray-700 mb-2">Blanch vegetables before freezing to preserve quality.</p>
                                            <p className="text-sm text-gray-600">Use freezer-safe containers</p>
                                        </div>
                                        <div className="bg-white p-4 border border-gray-200 rounded-lg">
                                            <h4 className="font-bold text-gray-900 mb-2">Drying</h4>
                                            <p className="text-gray-700 mb-2">Herbs, fruits, jerky. Use food dehydrator or low oven temp.</p>
                                            <p className="text-sm text-gray-600">Ensure proper moisture removal</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Final Recommendations */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Recommendations</h2>

                                <p className="text-gray-700 mb-4">
                                    Implementing these food safety practices will significantly reduce your risk of foodborne illness and help maintain food quality. Remember that food safety is a continuous process requiring attention at every step from purchase to consumption.
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div className="bg-blue-50 p-4 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">Essential Tools</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>Digital food thermometer</li>
                                            <li>Cutting board set (color-coded)</li>
                                            <li>Clean, calibrated refrigerator thermometer</li>
                                            <li>Disposable gloves</li>
                                            <li>Sanitizing solution (bleach or commercial)</li>
                                        </ul>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">Training Resources</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>ServSafe certification courses</li>
                                            <li>FDA Food Code guidelines</li>
                                            <li>USDA Food Safety Education</li>
                                            <li>Local extension office workshops</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-white border border-gray-200 rounded-lg p-4">
                                    <p className="text-gray-700 font-medium">
                                        "Food safety is not an option—it's a necessity. By following these guidelines, you protect not just yourself but everyone who eats the food you prepare. When in doubt, throw it out!"
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
                                            Dr. Emily Parker, Food Safety Specialist
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600 mb-1">
                                        — Written by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            James Wilson
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
                                <h3 className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-2">FOOD SAFETY NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get safety tips and recalls</h4>
                                <p className="text-gray-700 text-sm">
                                    Monthly updates on food safety practices, recall alerts, and storage tips.
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

                        {/* Quick Reference */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                <BookOpen className="w-5 h-5 text-blue-600 mr-2" />
                                Quick Reference
                            </h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-medium text-gray-900 mb-2">Danger Zone Timeline</h4>
                                    <div className="bg-gray-50 p-3 rounded-lg">
                                        <div className="flex justify-between text-sm mb-1">
                                            <span>0-2 hours</span>
                                            <span className="text-green-600">Safe</span>
                                        </div>
                                        <div className="flex justify-between text-sm mb-1">
                                            <span>2-4 hours</span>
                                            <span className="text-yellow-600">Use immediately</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span>4+ hours</span>
                                            <span className="text-red-600">Discard</span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900 mb-2">Emergency Contacts</h4>
                                    <ul className="text-sm space-y-2">
                                        <li>
                                            <a href="#" className="text-blue-600 hover:underline">FDA Food Safety Hotline: 1-888-SAFEFOOD</a>
                                        </li>
                                        <li>
                                            <a href="#" className="text-blue-600 hover:underline">USDA Meat and Poultry Hotline: 1-888-MPHotline</a>
                                        </li>
                                        <li>
                                            <a href="#" className="text-blue-600 hover:underline">Poison Control: 1-800-222-1222</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Food Storage Chart */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Refrigerator Storage Chart</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span className="font-medium">Zone</span>
                                    <span className="font-medium">Temperature</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Upper shelves</span>
                                    <span className="text-blue-600">38-40°F</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Lower shelves</span>
                                    <span className="text-blue-600">34-36°F</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Door</span>
                                    <span className="text-blue-600">40-43°F</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Crisper drawers</span>
                                    <span className="text-blue-600">36-38°F</span>
                                </div>
                            </div>
                        </div>

                        {/* Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Further Reading</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">FDA Food Code 2022</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">USDA FoodKeeper App</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">CDC Food Safety Guidelines</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Food Allergy Safety</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}