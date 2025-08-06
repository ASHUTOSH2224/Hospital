"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, Brain, Leaf, Heart, BookOpen, Star, Shield } from "lucide-react"

export default function NutritionMentalHealthGuide() {
    const [email, setEmail] = useState("")
    const [activeTab, setActiveTab] = useState("Foods")

    const handleEmailSubmit = (e) => {
        e.preventDefault()
        console.log("Email submitted:", email)
        setEmail("")
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const tabs = ["Foods", "Nutrients", "Meal Plan", "Research"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Nutrition and Mental Health: Foods That Support Your Mind
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
                                Emerging research reveals that what we eat significantly impacts our mental health, affecting mood, cognition, and emotional wellbeing. This guide explores the essential nutrients, foods, and dietary patterns that support brain function and may help prevent or manage mental health conditions.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80"
                                    alt="Healthy foods for mental health including fruits, vegetables, nuts and fish"
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
                                    <li>Omega-3 fatty acids can reduce symptoms of depression by up to 30%</li>
                                    <li>Gut microbiome health directly influences neurotransmitter production</li>
                                    <li>Mediterranean diet is associated with 33% lower risk of depression</li>
                                    <li>Blood sugar stability is crucial for mood regulation</li>
                                    <li>Deficiencies in B vitamins, zinc, and magnesium are linked to anxiety</li>
                                </ul>
                            </div>

                            {/* The Gut-Brain Connection */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Brain className="w-8 h-8 text-blue-600 mr-2" />
                                    The Gut-Brain Connection
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    The gut-brain axis represents the bidirectional communication between our digestive system and central nervous system. Approximately <span className="font-semibold">90% of serotonin</span> (the "feel-good" neurotransmitter) is produced in the gut, influenced by our gut microbiota.
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div className="bg-white p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">How Gut Health Affects Mood</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>Microbes produce neurotransmitters like GABA, serotonin, and dopamine</li>
                                            <li>Influence inflammation levels throughout the body</li>
                                            <li>Affect stress response via the HPA axis</li>
                                            <li>Modulate the blood-brain barrier permeability</li>
                                        </ul>
                                    </div>
                                    <div className="bg-white p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">Signs of Gut-Brain Imbalance</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>Mood swings and irritability</li>
                                            <li>Brain fog and poor concentration</li>
                                            <li>Increased anxiety or depressive symptoms</li>
                                            <li>Food cravings (especially sugar and carbs)</li>
                                            <li>Digestive issues (bloating, constipation, etc.)</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-purple-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Clinical Evidence</h3>
                                    <p className="text-gray-700 mb-2">
                                        A <span className="font-semibold">2023 meta-analysis</span> in <em>Nutritional Neuroscience</em> found that probiotic supplementation reduced symptoms of depression by 34% and anxiety by 25% compared to placebo.
                                    </p>
                                    <p className="text-gray-700">
                                        Participants who consumed fermented foods daily showed <span className="font-semibold">40% lower</span> likelihood of developing depressive symptoms over 10 years.
                                    </p>
                                </div>
                            </section>

                            {/* Essential Nutrients for Mental Health */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Leaf className="w-8 h-8 text-blue-600 mr-2" />
                                    Essential Nutrients for Mental Health
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Certain nutrients play critical roles in neurotransmitter synthesis, neuroprotection, and reducing neuroinflammation. Deficiencies in these nutrients are strongly correlated with mental health disorders.
                                </p>

                                {/* Nutrients Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nutrient</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Best Food Sources</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mental Health Benefits</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Daily Target*</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 font-medium text-gray-900">Omega-3 (EPA/DHA)</td>
                                                <td className="px-4 py-3">Fatty fish, walnuts, chia seeds</td>
                                                <td className="px-4 py-3">Reduces depression, supports brain structure</td>
                                                <td className="px-4 py-3">1000-2000mg EPA+DHA</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 font-medium text-gray-900">Magnesium</td>
                                                <td className="px-4 py-3">Leafy greens, nuts, dark chocolate</td>
                                                <td className="px-4 py-3">Calms nervous system, reduces anxiety</td>
                                                <td className="px-4 py-3">300-400mg</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 font-medium text-gray-900">Zinc</td>
                                                <td className="px-4 py-3">Oysters, beef, pumpkin seeds</td>
                                                <td className="px-4 py-3">Mood regulation, neuroprotection</td>
                                                <td className="px-4 py-3">8-11mg</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 font-medium text-gray-900">B Vitamins</td>
                                                <td className="px-4 py-3">Eggs, legumes, nutritional yeast</td>
                                                <td className="px-4 py-3">Neurotransmitter production, stress resilience</td>
                                                <td className="px-4 py-3">Varies by type</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 font-medium text-gray-900">Probiotics</td>
                                                <td className="px-4 py-3">Yogurt, kefir, sauerkraut</td>
                                                <td className="px-4 py-3">Gut-brain axis communication</td>
                                                <td className="px-4 py-3">1-10 billion CFU</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <p className="text-gray-600 text-sm mt-2">*Recommended daily amounts may vary based on individual needs</p>
                                </div>

                                {/* Nutrient Deficiency Symptoms */}
                                <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Warning Signs of Nutrient Deficiencies</h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>Persistent fatigue despite adequate sleep</li>
                                            <li>Difficulty concentrating or "brain fog"</li>
                                            <li>Increased irritability or mood swings</li>
                                        </ul>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>Unusual food cravings (especially carbs/sweets)</li>
                                            <li>Slow recovery from stress</li>
                                            <li>Worsening anxiety or depressive symptoms</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Top 10 Brain-Boosting Foods */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Check className="w-8 h-8 text-blue-600 mr-2" />
                                    Top 10 Brain-Boosting Foods
                                </h2>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-sm">
                                        <div className="flex items-start mb-3">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                                            <div>
                                                <h3 className="font-bold text-lg text-gray-900">Fatty Fish (Salmon, Sardines)</h3>
                                                <p className="text-gray-700">Rich in omega-3s EPA and DHA which are essential for brain structure and function. Studies show regular consumption reduces depression risk by 20%.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-sm">
                                        <div className="flex items-start mb-3">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                                            <div>
                                                <h3 className="font-bold text-lg text-gray-900">Leafy Greens (Kale, Spinach)</h3>
                                                <p className="text-gray-700">Packed with folate, magnesium, and vitamin K which support neurotransmitter production and protect against cognitive decline.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-sm">
                                        <div className="flex items-start mb-3">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                                            <div>
                                                <h3 className="font-bold text-lg text-gray-900">Blueberries</h3>
                                                <p className="text-gray-700">High in flavonoids that enhance memory and delay brain aging. May improve mood regulation within 2 hours of consumption.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-sm">
                                        <div className="flex items-start mb-3">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">4</span>
                                            <div>
                                                <h3 className="font-bold text-lg text-gray-900">Fermented Foods (Kimchi, Kefir)</h3>
                                                <p className="text-gray-700">Probiotics support gut health which directly impacts neurotransmitter production and stress response systems.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-sm">
                                        <div className="flex items-start mb-3">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">5</span>
                                            <div>
                                                <h3 className="font-bold text-lg text-gray-900">Eggs</h3>
                                                <p className="text-gray-700">Excellent source of choline (for acetylcholine production) and B vitamins crucial for brain energy metabolism.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-sm">
                                        <div className="flex items-start mb-3">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">6</span>
                                            <div>
                                                                                                  <h3 className="font-bold text-lg text-gray-900">Dark Chocolate (&gt;70% cocoa)</h3>
                                                <p className="text-gray-700">Contains flavonoids, caffeine, and theobromine that enhance focus and boost serotonin and endorphin levels.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Foods to Avoid */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Shield className="w-8 h-8 text-blue-600 mr-2" />
                                    Foods That May Harm Mental Health
                                </h2>

                                <div className="bg-red-50 rounded-lg p-6 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">The Dietary Culprits</h3>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-2">1. Refined Sugars</h4>
                                            <p className="text-gray-700 mb-4">
                                                Cause blood sugar spikes and crashes leading to mood swings, irritability, and increased inflammation. Chronic high sugar intake is linked to 23% higher depression risk.
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-2">2. Processed Foods</h4>
                                            <p className="text-gray-700 mb-4">
                                                Often contain harmful additives, trans fats, and excessive salt that disrupt gut microbiota and increase neuroinflammation.
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-2">3. Artificial Sweeteners</h4>
                                            <p className="text-gray-700 mb-4">
                                                Aspartame and sucralose may alter neurotransmitter balance and gut bacteria composition, potentially worsening anxiety symptoms.
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-2">4. Industrial Seed Oils</h4>
                                            <p className="text-gray-700 mb-4">
                                                High in omega-6 fatty acids that promote inflammation when not balanced with omega-3s, potentially affecting mood regulation.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* 7-Day Mental Health Meal Plan */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">7-Day Mental Health Meal Plan</h2>

                                <div className="space-y-6">
                                    {/* Day 1 */}
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Day 1 (Focus: Omega-3s & Antioxidants)</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Breakfast</h4>
                                                <p className="text-gray-700">Smoked salmon avocado toast on whole grain with spinach</p>
                                            </div>
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Lunch</h4>
                                                <p className="text-gray-700">Kale salad with walnuts, blueberries, and grilled chicken</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">Dinner</h4>
                                                <p className="text-gray-700">Baked trout with roasted Brussels sprouts and quinoa</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Day 2 */}
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Day 2 (Focus: Gut Health)</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Breakfast</h4>
                                                <p className="text-gray-700">Greek yogurt parfait with kefir, chia seeds, and mixed berries</p>
                                            </div>
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Lunch</h4>
                                                <p className="text-gray-700">Kimchi fried rice with eggs and mixed vegetables</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">Dinner</h4>
                                                <p className="text-gray-700">Grass-fed beef stir-fry with sauerkraut and sweet potatoes</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Lifestyle Factors */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Complementary Lifestyle Factors</h2>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div className="bg-white p-4 border border-gray-200 rounded-lg">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">1. Sleep Quality</h3>
                                        <p className="text-gray-700 mb-2">
                                            Poor sleep disrupts hunger hormones, increases inflammation, and impairs emotional regulation. Aim for 7-9 hours nightly.
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>Magnesium-rich foods before bed may help</li>
                                            <li>Avoid screens 1 hour before bedtime</li>
                                            <li>Maintain consistent sleep schedule</li>
                                        </ul>
                                    </div>
                                    <div className="bg-white p-4 border border-gray-200 rounded-lg">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">2. Stress Management</h3>
                                        <p className="text-gray-700 mb-2">
                                            Chronic stress depletes nutrients like magnesium and B vitamins while increasing inflammation.
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>Practice daily mindfulness or meditation</li>
                                            <li>Engage in regular physical activity</li>
                                            <li>Consider adaptogenic herbs like ashwagandha</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    The connection between nutrition and mental health is undeniable. While food isn't a replacement for professional mental health treatment, dietary changes can serve as a powerful complementary approach.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    Start with small, sustainable changes like adding one serving of fatty fish per week or swapping processed snacks for nuts and berries. Over time, these changes can significantly impact your mood, cognition, and overall mental wellbeing.
                                </p>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "Think of feeding your brain like tending a garden. The right nutrients are the sunshine and water that allow your mental health to flourish, while harmful foods are the weeds that can choke out your wellbeing."
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
                                            Dr. Emily Parker, PhD Nutrition
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
                                <h3 className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-2">MENTAL HEALTH NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get science-backed nutrition tips</h4>
                                <p className="text-gray-700 text-sm">
                                    Weekly mental health nutrition advice, recipes, and research updates.
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

                        {/* Quick Brain-Boosting Snacks */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Brain-Boosting Snacks</h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mt-1">
                                        1
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900">Almond Butter + Celery</h4>
                                        <p className="text-sm text-gray-600">Protein + fiber combo stabilizes blood sugar</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mt-1">
                                        2
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900">Hard-Boiled Egg + Avocado</h4>
                                        <p className="text-sm text-gray-600">Choline + healthy fats for neurotransmitter production</p>
                                    </div>
                                </div>
                                {/* More snack items... */}
                            </div>
                        </div>

                        {/* Mental Health Food Diary */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Mental Health Food Diary</h3>
                            <p className="text-gray-700 mb-4">
                                Track how different foods affect your mood and energy levels:
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center">
                                    <Check className="w-4 h-4 text-blue-600 mr-2" />
                                    <span>Note foods that boost focus</span>
                                </li>
                                <li className="flex items-center">
                                    <Check className="w-4 h-4 text-blue-600 mr-2" />
                                    <span>Identify mood-dampening foods</span>
                                </li>
                                <li className="flex items-center">
                                    <Check className="w-4 h-4 text-blue-600 mr-2" />
                                    <span>Track energy crashes</span>
                                </li>
                            </ul>
                            <button className="mt-4 w-full bg-white border border-blue-600 text-blue-600 font-medium py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors">
                                Download Template
                            </button>
                        </div>

                        {/* Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Further Reading</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-start">
                                        <BookOpen className="w-4 h-4 mt-1 mr-2 flex-shrink-0" />
                                        <span>The Gut-Brain Connection: Clinical Research</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-start">
                                        <BookOpen className="w-4 h-4 mt-1 mr-2 flex-shrink-0" />
                                        <span>Mediterranean Diet for Depression</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-start">
                                        <BookOpen className="w-4 h-4 mt-1 mr-2 flex-shrink-0" />
                                        <span>Nutrient Deficiencies in Anxiety Disorders</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}