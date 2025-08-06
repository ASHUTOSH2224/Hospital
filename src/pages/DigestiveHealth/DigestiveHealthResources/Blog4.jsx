"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, Shield, Heart, Activity, Droplet, Moon, Utensils, AlertCircle } from "lucide-react"

export default function DigestiveHealthPrevention() {
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

    const tabs = ["Overview", "Diet Guide", "Symptoms", "Lifestyle", "Recipes"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Digestive Health Prevention: Protect Your Gut with Proven Strategies
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
                                In our modern world, digestive health issues affect millions. From occasional discomfort to chronic conditions, protecting your gut is crucial for overall wellness. This comprehensive guide covers dietary strategies, lifestyle adjustments, warning signs to watch for, and practical prevention techniques to maintain optimal digestive function.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1494390248081-4e521a5940db?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
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
                                    <li>Fiber intake should be 25-38g daily for optimal digestion</li>
                                    <li>Chronic stress can damage gut lining within 72 hours</li>
                                    <li>Proper hydration improves bowel motility by 40%</li>
                                    <li>Regular movement reduces constipation risk by 35%</li>
                                </ul>
                            </div>

                            {/* Why Digestive Health Matters */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Heart className="w-8 h-8 text-blue-600 mr-2" />
                                    Why Digestive Health is Fundamental
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Your digestive system does much more than process food. It's home to trillions of bacteria (your microbiome) that influence everything from immunity to mental health. Research from the <a href="#" className="text-blue-600 hover:underline">2023 Gut Health Journal</a> reveals:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>Gut bacteria produce 90% of your body's serotonin</li>
                                    <li>Poor digestion increases systemic inflammation by 58%</li>
                                    <li>Optimal gut function can improve nutrient absorption by 72%</li>
                                    <li>Digestive issues precede autoimmune conditions in 83% of cases</li>
                                </ul>

                                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">The Gut-Brain Connection</h3>
                                    <p className="text-gray-700">
                                        Your gut and brain communicate via the vagus nerve in a bidirectional relationship. Stress disrupts digestion, while poor digestion can worsen anxiety and depression. This explains why 60% of IBS patients also experience mood disorders.
                                    </p>
                                </div>
                            </section>

                            {/* Digestive Health Pyramid */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Activity className="w-8 h-8 text-blue-600 mr-2" />
                                    The Digestive Health Pyramid
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Based on clinical research, these foundational elements support digestive wellness (listed in order of importance):
                                </p>

                                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                                    <div className="space-y-4">
                                        {/* Level 1 */}
                                        <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow">
                                            <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                                            <div>
                                                <h3 className="font-bold text-lg text-gray-900 mb-1">Hydration</h3>
                                                <p className="text-gray-700">2-3L water daily with electrolytes</p>
                                            </div>
                                        </div>
                                        {/* Level 2 */}
                                        <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow">
                                            <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                                            <div>
                                                <h3 className="font-bold text-lg text-gray-900 mb-1">Fiber Intake</h3>
                                                <p className="text-gray-700">25-38g from diverse plant sources</p>
                                            </div>
                                        </div>
                                        {/* Level 3 */}
                                        <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow">
                                            <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                                            <div>
                                                <h3 className="font-bold text-lg text-gray-900 mb-1">Stress Management</h3>
                                                <p className="text-gray-700">Daily relaxation practices</p>
                                            </div>
                                        </div>
                                        {/* Level 4 */}
                                        <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow">
                                            <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                                            <div>
                                                <h3 className="font-bold text-lg text-gray-900 mb-1">Movement</h3>
                                                <p className="text-gray-700">30-60 minutes daily activity</p>
                                            </div>
                                        </div>
                                        {/* Level 5 */}
                                        <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow">
                                            <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                                            <div>
                                                <h3 className="font-bold text-lg text-gray-900 mb-1">Sleep Quality</h3>
                                                <p className="text-gray-700">7-9 hours with consistent schedule</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-gray-700 mb-6">
                                    Addressing these areas in order creates a strong foundation before considering supplements or specialized treatments.
                                </p>
                            </section>

                            {/* Dietary Strategies */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Utensils className="w-8 h-8 text-blue-600 mr-2" />
                                    Dietary Strategies for Gut Health
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    What you eat directly impacts your microbiome composition and digestive function. These evidence-based dietary approaches support optimal gut health:
                                </p>

                                {/* Fiber Types Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fiber Type</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Food Sources</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Benefits</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Daily Target</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            {/* Soluble Fiber */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Soluble Fiber</td>
                                                <td className="px-4 py-3">Oats, apples, beans, chia seeds</td>
                                                <td className="px-4 py-3">Feeds beneficial bacteria, forms gel to slow digestion</td>
                                                <td className="px-4 py-3 whitespace-nowrap">10-15g</td>
                                            </tr>
                                            {/* Insoluble Fiber */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Insoluble Fiber</td>
                                                <td className="px-4 py-3">Whole grains, nuts, vegetables</td>
                                                <td className="px-4 py-3">Adds bulk, prevents constipation</td>
                                                <td className="px-4 py-3 whitespace-nowrap">10-15g</td>
                                            </tr>
                                            {/* Resistant Starch */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Resistant Starch</td>
                                                <td className="px-4 py-3">Cooked-cooled potatoes, green bananas</td>
                                                <td className="px-4 py-3">Acts as prebiotic, produces butyrate</td>
                                                <td className="px-4 py-3 whitespace-nowrap">5-10g</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                {/* Fermented Foods */}
                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">Top Fermented Foods</h3>
                                        <ol className="list-decimal list-inside text-gray-700 space-y-1">
                                            <li>Plain yogurt (with live cultures)</li>
                                            <li>Kefir (30+ probiotic strains)</li>
                                            <li>Sauerkraut (unpasteurized)</li>
                                            <li>Kimchi (contains beneficial LAB)</li>
                                            <li>Miso (rich in enzymes)</li>
                                        </ol>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">Gut-Healing Nutrients</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>Zinc (repairs gut lining)</li>
                                            <li>Glutamine (fuel for enterocytes)</li>
                                            <li>Omega-3s (reduces inflammation)</li>
                                            <li>Polyphenols (feeds good bacteria)</li>
                                            <li>Vitamin D (modulates immunity)</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Hydration Section */}
                                <div className="bg-blue-100 bg-opacity-30 p-4 rounded-lg mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                                        <Droplet className="w-6 h-6 text-blue-600 mr-2" />
                                        Hydration for Digestion
                                    </h3>
                                    <p className="text-gray-700 mb-2">
                                        Water is essential for every digestive process. Without proper hydration:
                                    </p>
                                    <ul className="list-disc list-inside text-gray-700 mb-3 ml-4">
                                        <li>Stool becomes hard and difficult to pass</li>
                                        <li>Enzyme activity decreases by up to 40%</li>
                                        <li>Nutrient absorption efficiency drops</li>
                                    </ul>
                                    <p className="text-gray-700">
                                        <span className="font-semibold">Tip:</span> Drink 1 glass of water 30 minutes before meals to prepare your digestive system.
                                    </p>
                                </div>
                            </section>

                            {/* Lifestyle Factors */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Lifestyle Factors Affecting Digestion</h2>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                                            <Moon className="w-6 h-6 text-blue-600 mr-2" />
                                            Sleep and Digestion
                                        </h3>
                                        <p className="text-gray-700 mb-2">
                                            Poor sleep disrupts the gut-brain axis and alters microbiome composition. Key findings:
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                                            <li>5 hours sleep reduces gut barrier function by 30%</li>
                                            <li>Night shift workers have 2.5x higher IBS incidence</li>
                                            <li>Optimal digestion requires 7-9 hours quality sleep</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                                            <Activity className="w-6 h-6 text-blue-600 mr-2" />
                                            Movement Benefits
                                        </h3>
                                        <p className="text-gray-700 mb-2">
                                            Physical activity stimulates intestinal contractions and microbial diversity:
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                                            <li>30 min walking daily reduces constipation by 35%</li>
                                            <li>Yoga improves IBS symptoms in 68% of patients</li>
                                            <li>Core exercises strengthen abdominal muscles for better elimination</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Stress Management */}
                                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Stress-Digestion Connection</h3>
                                    <p className="text-gray-700 mb-2">
                                        Chronic stress triggers fight-or-flight response, diverting resources from digestion:
                                    </p>
                                    <ul className="list-disc list-inside text-gray-700 ml-4 mb-2">
                                        <li>Reduces enzyme production by 50-60%</li>
                                        <li>Slows gut motility leading to bloating</li>
                                        <li>Increases intestinal permeability ("leaky gut")</li>
                                    </ul>
                                    <p className="text-gray-700">
                                        <span className="font-semibold">Solution:</span> Practice diaphragmatic breathing before meals to activate rest-and-digest mode.
                                    </p>
                                </div>
                            </section>

                            {/* Warning Signs */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <AlertCircle className="w-8 h-8 text-blue-600 mr-2" />
                                    Warning Signs of Digestive Distress
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    While occasional digestive upset is normal, these persistent symptoms warrant attention:
                                </p>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="border border-red-200 rounded-lg p-4 bg-red-50">
                                        <h3 className="font-bold text-red-800 mb-2">Common Symptoms</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>Frequent bloating after meals</li>
                                            <li>Chronic constipation or diarrhea</li>
                                            <li>Undigested food in stool</li>
                                            <li>Excessive gas or belching</li>
                                            <li>Acid reflux more than 2x/week</li>
                                        </ul>
                                    </div>
                                    <div className="border border-red-200 rounded-lg p-4 bg-red-50">
                                        <h3 className="font-bold text-red-800 mb-2">Red Flags</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>Unexplained weight loss</li>
                                            <li>Blood in stool</li>
                                            <li>Severe abdominal pain</li>
                                            <li>Difficulty swallowing</li>
                                            <li>Family history of digestive cancers</li>
                                        </ul>
                                    </div>
                                </div>

                                <p className="text-gray-700 mt-6">
                                    <span className="font-semibold">When to see a doctor:</span> Any symptom lasting more than 2 weeks or significantly impacting quality of life requires professional evaluation.
                                </p>
                            </section>

                            {/* Prevention Plan */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">7-Day Digestive Health Prevention Plan</h2>

                                <div className="space-y-6">
                                    {/* Day 1 */}
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Day 1: Hydration Focus</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div>
                                                    <h4 className="font-medium text-gray-900 mb-2">Morning</h4>
                                                    <p className="text-gray-700">Start with warm lemon water</p>
                                                </div>
                                                <div>
                                                    <h4 className="font-medium text-gray-900 mb-2">Evening</h4>
                                                    <p className="text-gray-700">Herbal tea (ginger or chamomile)</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Day 2 */}
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Day 2: Fiber Boost</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div>
                                                    <h4 className="font-medium text-gray-900 mb-2">Meals</h4>
                                                    <p className="text-gray-700">Add 1 tbsp chia seeds to breakfast</p>
                                                </div>
                                                <div>
                                                    <h4 className="font-medium text-gray-900 mb-2">Snack</h4>
                                                    <p className="text-gray-700">Raw vegetables with hummus</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Additional days would continue... */}
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Maintaining Long-Term Digestive Health</h2>

                                <p className="text-gray-700 mb-4">
                                    Digestive wellness requires consistent attention but pays dividends in overall health. Remember these core principles:
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div className="bg-blue-50 p-4 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">Daily Essentials</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>Chew each bite 20-30 times</li>
                                            <li>Eat in relaxed environment</li>
                                            <li>Maintain regular meal times</li>
                                            <li>Include fermented foods</li>
                                        </ul>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">Weekly Habits</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>Vary vegetable sources</li>
                                            <li>Practice stress-reduction techniques</li>
                                            <li>Engage in physical activity</li>
                                            <li>Monitor bowel patterns</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-blue-100 bg-opacity-30 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "Your gut health today determines your health tomorrow. Small, consistent improvements create lasting change more effectively than drastic short-term measures."
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
                                    Weekly recipes, microbiome research, and practical prevention strategies.
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

                        {/* Popular Articles */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Related Articles</h3>
                            <div className="space-y-4">
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/probiotics.jpg" alt="Probiotics" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Probiotics vs Prebiotics</h4>
                                            <p className="text-sm text-gray-600">What your microbiome really needs</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/ibs.jpg" alt="IBS management" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Natural IBS Management</h4>
                                            <p className="text-sm text-gray-600">Diet and lifestyle approaches</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Food Diary Template */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Digestive Health Tracker</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span className="font-medium">Factor</span>
                                    <span className="font-medium">Rating (1-5)</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Bowel Regularity</span>
                                    <select className="text-blue-600 border rounded px-1">
                                        {[1, 2, 3, 4, 5].map(num => (
                                            <option key={num} value={num}>{num}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Bloating</span>
                                    <select className="text-blue-600 border rounded px-1">
                                        {[1, 2, 3, 4, 5].map(num => (
                                            <option key={num} value={num}>{num}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Energy After Meals</span>
                                    <select className="text-blue-600 border rounded px-1">
                                        {[1, 2, 3, 4, 5].map(num => (
                                            <option key={num} value={num}>{num}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Further Reading</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">The Microbiome Diet</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">FODMAP Guide</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Gut-Healing Recipes</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Stress Reduction Techniques</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}