"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, HeartPulse, AlertTriangle, Droplet, Clock, Zap, Pill, Leaf } from "lucide-react"

export default function MigraineNutritionGuide() {
    const [email, setEmail] = useState("")
    const [activeTab, setActiveTab] = useState("Triggers")

    const handleEmailSubmit = (e) => {
        e.preventDefault()
        console.log("Email submitted:", email)
        setEmail("")
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const tabs = ["Triggers", "Beneficial Foods", "Hydration", "Meal Plans"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Migraine-Friendly Nutrition: Foods That Help and Foods to Avoid
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
                                Diet plays a significant role in migraine management. This comprehensive guide covers common food triggers, beneficial nutrients, hydration strategies, and meal timing to help prevent migraines through nutrition. Learn how to identify your personal triggers and build a migraine-friendly eating pattern.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80"
                                    alt="Healthy foods for migraine prevention"
                                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                                    style={{ maxHeight: '500px' }}
                                />
                            </div>

                            {/* Key Takeaways */}
                            <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-8">
                                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                    <Zap className="w-5 h-5 text-purple-600 mr-2" />
                                    Key Takeaways
                                </h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>Common triggers include aged cheeses, processed meats, alcohol, and artificial sweeteners</li>
                                    <li>Magnesium, riboflavin (B2), and omega-3 fatty acids may help prevent migraines</li>
                                    <li>Dehydration is one of the most common migraine triggers</li>
                                    <li>Meal skipping and irregular eating patterns can trigger attacks</li>
                                    <li>An elimination diet can help identify personal food triggers</li>
                                </ul>
                            </div>

                            {/* Common Migraine Triggers */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <AlertTriangle className="w-8 h-8 text-purple-600 mr-2" />
                                    Common Migraine Food Triggers
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Certain foods and additives are known to trigger migraines in susceptible individuals. According to a <a href="#" className="text-blue-600 hover:underline">2023 review in The Journal of Headache and Pain</a>, dietary triggers affect approximately 20-50% of migraine sufferers. The most common culprits include:
                                </p>

                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Food Category</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trigger Compounds</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Examples</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prevalence</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Aged cheeses</td>
                                                <td className="px-4 py-3">Tyramine, histamine</td>
                                                <td className="px-4 py-3">Blue cheese, cheddar, feta, parmesan</td>
                                                <td className="px-4 py-3 whitespace-nowrap">27% of sufferers</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Processed meats</td>
                                                <td className="px-4 py-3">Nitrates, nitrites</td>
                                                <td className="px-4 py-3">Hot dogs, bacon, deli meats, pepperoni</td>
                                                <td className="px-4 py-3 whitespace-nowrap">22% of sufferers</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Alcohol</td>
                                                <td className="px-4 py-3">Histamine, sulfites, tyramine</td>
                                                <td className="px-4 py-3">Red wine, beer, champagne</td>
                                                <td className="px-4 py-3 whitespace-nowrap">35% of sufferers</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Artificial sweeteners</td>
                                                <td className="px-4 py-3">Aspartame</td>
                                                <td className="px-4 py-3">Diet sodas, sugar-free products</td>
                                                <td className="px-4 py-3 whitespace-nowrap">15% of sufferers</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">MSG</td>
                                                <td className="px-4 py-3">Monosodium glutamate</td>
                                                <td className="px-4 py-3">Chinese food, processed snacks</td>
                                                <td className="px-4 py-3 whitespace-nowrap">12% of sufferers</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Important Note About Triggers</h3>
                                    <p className="text-gray-700">
                                        Food triggers are highly individual. Not everyone will react to all these foods, and some may have unique triggers not listed here. The only way to know your personal triggers is through careful tracking and elimination diets under professional guidance.
                                    </p>
                                </div>
                            </section>

                            {/* Beneficial Foods */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <HeartPulse className="w-8 h-8 text-purple-600 mr-2" />
                                    Beneficial Foods for Migraine Prevention
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Certain nutrients have shown promise in migraine prevention. A <a href="#" className="text-blue-600 hover:underline">2022 meta-analysis in Nutrients</a> found that increasing intake of these compounds reduced migraine frequency by 30-50% in clinical trials:
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">1</span>
                                            Magnesium-Rich Foods
                                        </h3>
                                        <p className="text-gray-700 mb-2">
                                            Magnesium deficiency is common in migraine sufferers. Studies show 400-600mg daily may reduce frequency.
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 ml-4">
                                            <li>Spinach (157mg per cup cooked)</li>
                                            <li>Almonds (80mg per ounce)</li>
                                            <li>Black beans (120mg per cup)</li>
                                            <li>Avocado (58mg per medium)</li>
                                        </ul>
                                    </div>
                                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">2</span>
                                            Riboflavin (B2) Sources
                                        </h3>
                                        <p className="text-gray-700 mb-2">
                                            Clinical trials show 400mg/day of B2 reduces migraine frequency by about 50%.
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 ml-4">
                                            <li>Beef liver (3oz provides 2.9mg)</li>
                                            <li>Yogurt (0.6mg per cup)</li>
                                            <li>Mushrooms (0.5mg per cup)</li>
                                            <li>Eggs (0.2mg per large egg)</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-3 gap-4 mb-6">
                                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                                        <h4 className="font-bold text-gray-900 mb-2">Omega-3 Fatty Acids</h4>
                                        <p className="text-gray-700 text-sm">Anti-inflammatory effects may reduce migraine frequency and severity</p>
                                    </div>
                                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                                        <h4 className="font-bold text-gray-900 mb-2">Coenzyme Q10</h4>
                                        <p className="text-gray-700 text-sm">Found in fatty fish, organ meats; may decrease migraine days</p>
                                    </div>
                                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                                        <h4 className="font-bold text-gray-900 mb-2">Ginger</h4>
                                        <p className="text-gray-700 text-sm">May help abort migraines; similar mechanism to triptans</p>
                                    </div>
                                </div>
                            </section>

                            {/* Hydration Strategies */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Droplet className="w-8 h-8 text-purple-600 mr-2" />
                                    Hydration Strategies for Migraine Prevention
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Dehydration is one of the most common and easily preventable migraine triggers. A <a href="#" className="text-blue-600 hover:underline">2021 study</a> found that increasing water intake by 1.5L daily reduced headache hours by 21 hours per month.
                                </p>

                                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Hydration Guidelines</h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <h4 className="font-medium text-gray-900 mb-2">Daily Water Needs</h4>
                                            <ul className="list-disc list-inside text-gray-700">
                                                <li>Women: 2.7L (91oz) total fluids</li>
                                                <li>Men: 3.7L (125oz) total fluids</li>
                                                <li>20% comes from food</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 mb-2">Electrolyte Balance</h4>
                                            <p className="text-gray-700">
                                                Include sodium, potassium, and magnesium in your fluids for better hydration. Coconut water or electrolyte tablets can help.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Best Hydrating Foods</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>Cucumber (96% water)</li>
                                            <li>Celery (95% water)</li>
                                            <li>Watermelon (92% water)</li>
                                            <li>Strawberries (91% water)</li>
                                            <li>Plain yogurt (88% water)</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Dehydrating Substances to Limit</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>Alcohol (diuretic effect)</li>
                                            <li>Caffeine (mild diuretic in excess)</li>
                                            <li>High-sodium processed foods</li>
                                            <li>Sugary drinks</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Meal Timing and Patterns */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Clock className="w-8 h-8 text-purple-600 mr-2" />
                                    Meal Timing and Eating Patterns
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Irregular meal patterns and fasting are well-established migraine triggers. A <a href="#" className="text-blue-600 hover:underline">2020 study</a> showed that skipping meals increased migraine risk by 40% compared to regular eating patterns.
                                </p>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Blood Sugar Stability Tips</h3>
                                    <ol className="list-decimal list-inside text-gray-700 space-y-1">
                                        <li>Eat within 1 hour of waking</li>
                                        <li>Have meals/snacks every 3-4 hours</li>
                                        <li>Include protein with each meal</li>
                                        <li>Choose complex carbs over simple sugars</li>
                                    </ol>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Sample 3-Day Migraine-Prevention Meal Plan</h3>

                                <div className="space-y-6">
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-purple-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Day 1 (Balanced Macronutrients)</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Breakfast</h4>
                                                <p className="text-gray-700">Spinach and mushroom omelet with whole grain toast + almond butter</p>
                                            </div>
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Mid-Morning Snack</h4>
                                                <p className="text-gray-700">Greek yogurt with walnuts and blueberries</p>
                                            </div>
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Lunch</h4>
                                                <p className="text-gray-700">Grilled salmon salad with mixed greens, cucumber, olive oil dressing</p>
                                            </div>
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Afternoon Snack</h4>
                                                <p className="text-gray-700">Celery sticks with hummus</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">Dinner</h4>
                                                <p className="text-gray-700">Grilled chicken with quinoa and steamed broccoli</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-purple-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Day 2 (High Magnesium Focus)</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Breakfast</h4>
                                                <p className="text-gray-700">Oatmeal with almond butter, flaxseeds, and banana</p>
                                            </div>
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Mid-Morning Snack</h4>
                                                <p className="text-gray-700">Handful of almonds and pumpkin seeds</p>
                                            </div>
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Lunch</h4>
                                                <p className="text-gray-700">Black bean and spinach quesadilla on whole grain tortilla</p>
                                            </div>
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Afternoon Snack</h4>
                                                <p className="text-gray-700">Avocado on rice cakes</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">Dinner</h4>
                                                <p className="text-gray-700">Baked halibut with roasted Brussels sprouts and brown rice</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Elimination Diet Guide */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Implementing an Elimination Diet</h2>

                                <p className="text-gray-700 mb-4">
                                    The gold standard for identifying food triggers is a structured elimination diet followed by careful reintroduction. Here's how to do it safely:
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Phase 1: Elimination (4 weeks)</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>Remove all common trigger foods</li>
                                            <li>Focus on whole, unprocessed foods</li>
                                            <li>Keep detailed migraine and food diary</li>
                                            <li>Note improvements in frequency/severity</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Phase 2: Reintroduction</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>Add one food group every 3 days</li>
                                            <li>Monitor for migraine symptoms</li>
                                            <li>If reaction occurs, remove again</li>
                                            <li>Continue until all foods tested</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-purple-50 p-4 rounded-lg mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Professional Guidance Recommended</h3>
                                    <p className="text-gray-700">
                                        Elimination diets can be nutritionally restrictive. Work with a registered dietitian to ensure you're meeting all nutrient needs while identifying your triggers.
                                    </p>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    While there's no universal "migraine diet," understanding your personal food triggers and incorporating beneficial nutrients can significantly reduce migraine frequency and severity for many sufferers. Remember that dietary changes work best as part of a comprehensive migraine management plan that may include stress reduction, sleep hygiene, and medical treatments.
                                </p>

                                <div className="bg-purple-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "Start with hydration and regular meal timing—these simple changes help many migraineurs. Then systematically identify your food triggers rather than eliminating foods unnecessarily. Nutrition is a powerful tool in migraine prevention when personalized."
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
                                            Dr. Emily Parker, Neurologist
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600 mb-1">
                                        — Written by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            Nutritionist Lisa Chen
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
                                <h3 className="text-sm font-bold text-purple-800 uppercase tracking-wide mb-2">MIGRAINE NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get migraine-friendly recipes</h4>
                                <p className="text-gray-700 text-sm">
                                    Weekly meal plans, nutrition tips, and migraine prevention strategies delivered to your inbox.
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
                                is important to us
                            </p>
                        </div>

                        {/* Common Triggers List */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Top 10 Migraine Food Triggers</h3>
                            <div className="space-y-3">
                                <div className="flex items-start">
                                    <span className="bg-red-100 text-red-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">1</span>
                                    <span className="font-medium">Aged cheeses (tyramine)</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="bg-red-100 text-red-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">2</span>
                                    <span className="font-medium">Processed meats (nitrates)</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="bg-red-100 text-red-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">3</span>
                                    <span className="font-medium">Alcohol (especially red wine)</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="bg-red-100 text-red-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">4</span>
                                    <span className="font-medium">Chocolate (phenylethylamine)</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="bg-red-100 text-red-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">5</span>
                                    <span className="font-medium">Artificial sweeteners</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="bg-red-100 text-red-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">6</span>
                                    <span className="font-medium">MSG</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="bg-red-100 text-red-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">7</span>
                                    <span className="font-medium">Citrus fruits (histamine)</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="bg-red-100 text-red-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">8</span>
                                    <span className="font-medium">Caffeine (withdrawal)</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="bg-red-100 text-red-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">9</span>
                                    <span className="font-medium">Fermented foods</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="bg-red-100 text-red-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">10</span>
                                    <span className="font-medium">Ice cream (cold stimulus)</span>
                                </div>
                            </div>
                        </div>

                        {/* Migraine Prevention Foods */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Top 10 Migraine Prevention Foods</h3>
                            <div className="space-y-3">
                                <div className="flex items-start">
                                    <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">1</span>
                                    <span className="font-medium">Spinach (magnesium)</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">2</span>
                                    <span className="font-medium">Salmon (omega-3s)</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">3</span>
                                    <span className="font-medium">Almonds (magnesium)</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">4</span>
                                    <span className="font-medium">Eggs (riboflavin)</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">5</span>
                                    <span className="font-medium">Ginger (anti-inflammatory)</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">6</span>
                                    <span className="font-medium">Quinoa (magnesium)</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">7</span>
                                    <span className="font-medium">Sweet potatoes (potassium)</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">8</span>
                                    <span className="font-medium">Coconut water (electrolytes)</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">9</span>
                                    <span className="font-medium">Dark leafy greens (magnesium)</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">10</span>
                                    <span className="font-medium">Watermelon (hydration)</span>
                                </div>
                            </div>
                        </div>

                        {/* Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Further Reading</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-purple-600 hover:underline">The Migraine-Stress Connection</a>
                                </li>
                                <li>
                                    <a href="#" className="text-purple-600 hover:underline">Sleep Hygiene for Migraine Prevention</a>
                                </li>
                                <li>
                                    <a href="#" className="text-purple-600 hover:underline">Supplements for Migraine Relief</a>
                                </li>
                                <li>
                                    <a href="#" className="text-purple-600 hover:underline">Tracking Your Migraine Triggers</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}