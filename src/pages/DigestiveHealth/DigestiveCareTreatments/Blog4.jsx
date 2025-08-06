"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, Leaf, HeartPulse, Utensils, Droplet, Moon, Activity, Shield } from "lucide-react"

export default function DigestiveHealthGuide() {
    const [email, setEmail] = useState("")
    const [activeTab, setActiveTab] = useState("Overview")

    const handleEmailSubmit = (e) => {
        e.preventDefault()
        console.log("Email submitted:", email)
        setEmail("")
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const tabs = ["Overview", "Causes", "Solutions", "Diet Plan", "Recipes"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Managing Digestive Health in the Modern World
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
                                In our fast-paced modern world, digestive issues have become increasingly common. From bloating and indigestion to more serious conditions like IBS, our gut health is under constant assault from stress, poor diet, and environmental toxins. This comprehensive guide explores effective strategies to restore and maintain optimal digestive health.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80"
                                    alt="Healthy digestive system concept"
                                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                                    style={{ maxHeight: '500px' }}
                                />
                            </div>

                            {/* Key Takeaways */}
                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
                                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                    <Shield className="w-5 h-5 text-blue-600 mr-2" />
                                    Key Takeaways
                                </h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>70% of your immune system resides in your gut</li>
                                    <li>The gut-brain axis significantly impacts mental health</li>
                                    <li>Fiber diversity is crucial for microbiome health</li>
                                    <li>Chronic stress can damage gut lining</li>
                                    <li>Proper hydration improves digestion by 40%</li>
                                </ul>
                            </div>

                            {/* Why Digestive Health Matters */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <HeartPulse className="w-8 h-8 text-blue-600 mr-2" />
                                    Why Digestive Health is Fundamental
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Your digestive system does much more than process food. It's home to trillions of microorganisms that influence everything from immunity to mood. Research from the <a href="#" className="text-blue-600 hover:underline">Journal of Gastroenterology</a> shows that gut health impacts:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>Immune function (70% of immune cells reside in the gut)</li>
                                    <li>Mental health via the gut-brain axis</li>
                                    <li>Hormone regulation and metabolism</li>
                                    <li>Inflammation levels throughout the body</li>
                                    <li>Nutrient absorption and energy production</li>
                                </ul>

                                <div className="bg-blue-100 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">The Gut Microbiome</h3>
                                    <p className="text-gray-700 mb-2">
                                        Your gut contains about 100 trillion microorganisms from 500-1000 different species. This microbiome weighs approximately 2kg - more than the average human brain.
                                    </p>
                                    <p className="text-gray-700">
                                        A healthy microbiome diversity is associated with better digestion, stronger immunity, and even improved mental health.
                                    </p>
                                </div>
                            </section>

                            {/* Common Digestive Issues */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Activity className="w-8 h-8 text-blue-600 mr-2" />
                                    Common Modern Digestive Issues
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    The modern lifestyle has led to an epidemic of digestive disorders. Here are the most prevalent issues and their symptoms:
                                </p>

                                {/* Issues Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Condition</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prevalence</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Symptoms</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Primary Causes</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            {/* Row 1 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Irritable Bowel Syndrome (IBS)</td>
                                                <td className="px-4 py-3 whitespace-nowrap">10-15% globally</td>
                                                <td className="px-4 py-3">Bloating, cramps, diarrhea/constipation</td>
                                                <td className="px-4 py-3">Gut-brain axis dysfunction, microbiome imbalance</td>
                                            </tr>
                                            {/* Row 2 */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">GERD/Acid Reflux</td>
                                                <td className="px-4 py-3 whitespace-nowrap">20% weekly in US</td>
                                                <td className="px-4 py-3">Heartburn, regurgitation, chest pain</td>
                                                <td className="px-4 py-3">Low stomach acid, hiatal hernia, obesity</td>
                                            </tr>
                                            {/* Row 3 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Leaky Gut Syndrome</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Increasing</td>
                                                <td className="px-4 py-3">Food sensitivities, fatigue, joint pain</td>
                                                <td className="px-4 py-3">Chronic inflammation, poor diet, stress</td>
                                            </tr>
                                            {/* Row 4 */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">SIBO</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Up to 80% of IBS cases</td>
                                                <td className="px-4 py-3">Bloating, diarrhea, malabsorption</td>
                                                <td className="px-4 py-3">Impaired gut motility, low stomach acid</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">Modern Lifestyle Factors</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>Chronic stress increases intestinal permeability</li>
                                            <li>Processed foods disrupt microbiome balance</li>
                                            <li>Antibiotics and medications harm beneficial bacteria</li>
                                            <li>Sedentary lifestyle slows digestion</li>
                                            <li>Environmental toxins damage gut lining</li>
                                        </ul>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">Warning Signs</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>Frequent bloating or gas</li>
                                            <li>Food intolerances developing</li>
                                            <li>Irregular bowel movements</li>
                                            <li>Unexplained fatigue or brain fog</li>
                                            <li>Skin issues like eczema or acne</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Comprehensive Solutions */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Check className="w-8 h-8 text-blue-600 mr-2" />
                                    Comprehensive Solutions for Better Digestion
                                </h2>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8 flex items-center">
                                    <Utensils className="w-6 h-6 text-blue-500 mr-2" />
                                    Dietary Strategies
                                </h3>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900 mb-3">Foods to Include</h4>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li><strong>Fermented foods:</strong> Sauerkraut, kimchi, kefir (rich in probiotics)</li>
                                            <li><strong>Bone broth:</strong> Heals gut lining with collagen and amino acids</li>
                                            <li><strong>Fiber diversity:</strong> 30+ plant types weekly for microbiome diversity</li>
                                            <li><strong>Polyphenol-rich foods:</strong> Berries, dark chocolate, green tea</li>
                                            <li><strong>Omega-3s:</strong> Wild salmon, sardines, flaxseeds (reduce inflammation)</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900 mb-3">Foods to Avoid</h4>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li><strong>Processed foods:</strong> Contain emulsifiers that damage gut lining</li>
                                            <li><strong>Industrial seed oils:</strong> High in inflammatory omega-6 fats</li>
                                            <li><strong>Refined sugars:</strong> Feed harmful bacteria and yeast</li>
                                            <li><strong>Gluten/Dairy:</strong> Common triggers for sensitive individuals</li>
                                            <li><strong>Artificial sweeteners:</strong> Alter microbiome composition</li>
                                        </ul>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8 flex items-center">
                                    <Droplet className="w-6 h-6 text-blue-500 mr-2" />
                                    Hydration Protocol
                                </h3>

                                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                                        <div>
                                            <div className="font-bold text-lg text-blue-600">2</div>
                                            <div className="text-sm text-gray-700">Liters of water daily (minimum)</div>
                                        </div>
                                        <div>
                                            <div className="font-bold text-lg text-blue-600">30</div>
                                            <div className="text-sm text-gray-700">Minutes before meals (optimal drinking time)</div>
                                        </div>
                                        <div>
                                            <div className="font-bold text-lg text-blue-600">1/2</div>
                                            <div className="text-sm text-gray-700">Your body weight in oz (personalized calculation)</div>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-gray-700 mb-6">
                                    Proper hydration is essential for digestive enzyme production and bowel regularity. Add electrolytes (like sea salt or magnesium) to your water for better absorption, especially if you experience diarrhea or excessive sweating.
                                </p>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8 flex items-center">
                                    <Moon className="w-6 h-6 text-blue-500 mr-2" />
                                    Lifestyle Modifications
                                </h3>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900 mb-3">Stress Reduction</h4>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li><strong>Diaphragmatic breathing:</strong> 5 minutes before meals activates parasympathetic state</li>
                                            <li><strong>Mindful eating:</strong> Chew each bite 20-30 times</li>
                                            <li><strong>Digital detox:</strong> Avoid screens during meals</li>
                                            <li><strong>Gratitude practice:</strong> Shown to improve digestion</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900 mb-3">Movement & Sleep</h4>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li><strong>Post-meal walks:</strong> 10-15 minutes improves gastric emptying</li>
                                            <li><strong>Yoga twists:</strong> Stimulate digestive organs</li>
                                            <li><strong>Sleep hygiene:</strong> 7-9 hours for gut repair</li>
                                            <li><strong>Circadian rhythm:</strong> Align eating with daylight hours</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* 7-Day Gut Healing Protocol */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">7-Day Gut Healing Protocol</h2>

                                <div className="space-y-6">
                                    {/* Day 1 */}
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Day 1: Elimination & Hydration</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Morning</h4>
                                                <p className="text-gray-700">Warm lemon water + 15min meditation</p>
                                            </div>
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Meals</h4>
                                                <p className="text-gray-700">Bone broth with ginger + steamed vegetables + wild salmon</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">Evening</h4>
                                                <p className="text-gray-700">Chamomile tea + 10min gentle yoga</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Day 2 */}
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Day 2: Fiber Introduction</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Morning</h4>
                                                <p className="text-gray-700">Chia seed pudding with almond milk</p>
                                            </div>
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Meals</h4>
                                                <p className="text-gray-700">Fermented foods + diverse plant foods</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">Evening</h4>
                                                <p className="text-gray-700">Digestive bitters before dinner</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Additional days would continue... */}
                                </div>

                                <div className="mt-8 bg-blue-50 border-l-4 border-blue-400 p-4">
                                    <h3 className="font-bold text-gray-900 mb-2">Pro Tip:</h3>
                                    <p className="text-gray-700">
                                        Keep a food and symptom journal throughout the protocol to identify personal triggers and improvements.
                                    </p>
                                </div>
                            </section>

                            {/* Supplement Guide */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Targeted Supplement Guide</h2>

                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Supplement</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dosage</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Benefits</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Best Time</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 font-medium text-gray-900">Probiotics</td>
                                                <td className="px-4 py-3">10-50 billion CFU</td>
                                                <td className="px-4 py-3">Restores microbiome balance</td>
                                                <td className="px-4 py-3">Morning empty stomach</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 font-medium text-gray-900">L-Glutamine</td>
                                                <td className="px-4 py-3">5-10g daily</td>
                                                <td className="px-4 py-3">Repairs gut lining</td>
                                                <td className="px-4 py-3">Between meals</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 font-medium text-gray-900">Digestive Enzymes</td>
                                                <td className="px-4 py-3">With meals</td>
                                                <td className="px-4 py-3">Aids food breakdown</td>
                                                <td className="px-4 py-3">Start of meals</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                                        <h3 className="font-bold text-gray-900 mb-3">Herbal Support</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li><strong>Slippery Elm:</strong> Soothes intestinal lining</li>
                                            <li><strong>Marshmallow Root:</strong> Forms protective layer</li>
                                            <li><strong>Peppermint Oil:</strong> Relieves IBS symptoms</li>
                                            <li><strong>Ginger:</strong> Improves gastric emptying</li>
                                        </ul>
                                    </div>
                                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                                        <h3 className="font-bold text-gray-900 mb-3">Testing Options</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li><strong>Comprehensive Stool Test:</strong> Assesses microbiome</li>
                                            <li><strong>SIBO Breath Test:</strong> Checks for bacterial overgrowth</li>
                                            <li><strong>Food Sensitivity Testing:</strong> Identifies triggers</li>
                                            <li><strong>Zonulin Test:</strong> Measures gut permeability</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Long-Term Maintenance */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Long-Term Maintenance Plan</h2>

                                <div className="grid md:grid-cols-3 gap-6 mb-8">
                                    <div className="border border-gray-200 rounded-lg p-4">
                                        <h3 className="font-bold text-gray-900 mb-3 text-center">Daily</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>20+ plant foods weekly</li>
                                            <li>Mindful eating practices</li>
                                            <li>Proper hydration</li>
                                            <li>Stress management</li>
                                        </ul>
                                    </div>
                                    <div className="border border-gray-200 rounded-lg p-4">
                                        <h3 className="font-bold text-gray-900 mb-3 text-center">Weekly</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Fermented food intake</li>
                                            <li>Movement variety</li>
                                            <li>Digital detox periods</li>
                                            <li>Meal planning</li>
                                        </ul>
                                    </div>
                                    <div className="border border-gray-200 rounded-lg p-4">
                                        <h3 className="font-bold text-gray-900 mb-3 text-center">Seasonal</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Microbiome testing</li>
                                            <li>Diet rotation</li>
                                            <li>Supplement adjustment</li>
                                            <li>Detox protocols</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "Healing your gut is not a one-time event but a lifelong practice. Consistency with foundational habits creates resilience against modern digestive challenges."
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
                                            Dr. Emily Parker, Gastroenterologist
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600 mb-1">
                                        — Written by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            Sarah Mitchell
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
                                <h3 className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-2">GUT HEALTH NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get digestive wellness tips</h4>
                                <p className="text-gray-700 text-sm">
                                    Weekly protocols, gut-friendly recipes, and microbiome science delivered to your inbox.
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

                        {/* Quick Relief Remedies */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Relief Remedies</h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                            <span className="text-blue-600 font-bold">1</span>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900">Ginger Tea</h4>
                                        <p className="text-sm text-gray-600">Fresh ginger steeped in hot water relieves nausea and bloating</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                            <span className="text-blue-600 font-bold">2</span>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900">Abdominal Massage</h4>
                                        <p className="text-sm text-gray-600">Clockwise massage stimulates bowel movement</p>
                                    </div>
                                </div>
                                {/* More remedies... */}
                            </div>
                        </div>

                        {/* Gut-Friendly Foods */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Top 10 Gut-Healing Foods</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                                    <span className="font-medium">1. Bone Broth</span>
                                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Healing</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                                    <span className="font-medium">2. Sauerkraut</span>
                                    <span className="text-xs bg-blue px-2 py-1 rounded"></span>
                                </div>
                                {/* More foods... */}
                                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                                    <span className="font-medium">3. Kimchi</span>
                                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Probiotic</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                                    <span className="font-medium">4. Kefir</span>
                                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Probiotic</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                                    <span className="font-medium">5. Leafy Greens</span>
                                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Fiber</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                                    <span className="font-medium">6. Berries</span>
                                    <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">Antioxidant</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                                    <span className="font-medium">7. Wild Salmon</span>
                                    <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">Omega-3</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                                    <span className="font-medium">8. Flaxseeds</span>
                                    <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Fiber</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                                    <span className="font-medium">9. Green Tea</span>
                                    <span className="text-xs bg-teal-100 text-teal-800 px-2 py-1 rounded">Polyphenol</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="font-medium">10. Dark Chocolate</span>
                                    <span className="text-xs bg-brown-100 text-brown-800 px-2 py-1 rounded">Polyphenol</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}