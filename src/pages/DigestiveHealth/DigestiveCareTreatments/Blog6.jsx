"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, Leaf, HeartPulse, FlaskConical, Scale, Star, Salad, FerrisWheel, Wheat, Clock, AlertTriangle, BookOpen, Target, TrendingUp, Users } from "lucide-react"

export default function GutHealthNutritionGuide() {
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

    const tabs = ["Overview", "Foods", "Meal Plans", "Supplements"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Nutrition for Optimal Gut Health: What You Need to Know
                            </h1>

                            {/* Navigation Tabs */}
                            <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-200">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${activeTab === tab
                                                ? "border-green-500 text-green-600"
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
                                <span className="text-sm">Updated on June 20, 2024</span>
                                <span className="mx-2">•</span>
                                <span className="text-sm">9 min read</span>
                            </div>

                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                Your gut health influences everything from digestion to immunity, mental health, and chronic disease risk. This comprehensive guide covers essential nutrition strategies, scientifically-backed food recommendations, and practical dietary approaches to nourish your gut microbiome and support long-term digestive wellness.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
                                    alt="Colorful assortment of gut-healthy foods"
                                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                                    style={{ maxHeight: '500px' }}
                                />
                            </div>

                            {/* Key Takeaways */}
                            <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-8">
                                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                    <Star className="w-5 h-5 text-green-600 mr-2" />
                                    Key Takeaways
                                </h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>Diversity is key - aim for 30+ different plant foods weekly</li>
                                    <li>Fermented foods provide live probiotics for microbiome support</li>
                                    <li>Prebiotic fibers feed beneficial gut bacteria</li>
                                    <li>Polyphenol-rich foods reduce gut inflammation</li>
                                    <li>Proper food combining enhances nutrient absorption</li>
                                </ul>
                            </div>

                            {/* Why Gut Health Matters */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <HeartPulse className="w-8 h-8 text-green-600 mr-2" />
                                    The Gut-Health Connection
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Your gastrointestinal tract houses approximately 70% of your immune system and contains trillions of microorganisms collectively known as the gut microbiome. A 2023 meta-analysis in <a href="#" className="text-blue-600 hover:underline">Nature Microbiology</a> found that individuals with diverse gut microbiomes had:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>42% lower risk of inflammatory bowel diseases</li>
                                    <li>37% reduced incidence of metabolic disorders</li>
                                    <li>29% lower rates of depression and anxiety</li>
                                    <li>Stronger immune responses to vaccines and infections</li>
                                </ul>

                                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">The Gut-Brain Axis</h3>
                                    <p className="text-gray-700">
                                        Your gut and brain communicate via the vagus nerve, with gut microbes producing neurotransmitters like serotonin (90% of which is made in the gut). This explains why digestive issues often correlate with mood disorders and cognitive function.
                                    </p>
                                </div>
                            </section>

                            {/* Core Nutritional Strategies */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Salad className="w-8 h-8 text-green-600 mr-2" />
                                    Core Nutritional Strategies
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    These evidence-based approaches form the foundation of a gut-healthy diet:
                                </p>

                                {/* Strategies Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Strategy</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">How It Helps</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Implementation</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Examples</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 font-medium text-gray-900">Increase Fiber Diversity</td>
                                                <td className="px-4 py-3">Feeds different beneficial bacteria strains</td>
                                                <td className="px-4 py-3">Aim for 30g+ daily from varied sources</td>
                                                <td className="px-4 py-3">Whole grains, legumes, vegetables, fruits</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 font-medium text-gray-900">Consume Fermented Foods</td>
                                                <td className="px-4 py-3">Introduces beneficial live cultures</td>
                                                <td className="px-4 py-3">1-2 servings daily</td>
                                                <td className="px-4 py-3">Yogurt, kefir, sauerkraut, kimchi</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 font-medium text-gray-900">Prioritize Polyphenols</td>
                                                <td className="px-4 py-3">Reduces inflammation, feeds good bacteria</td>
                                                <td className="px-4 py-3">Include at every meal</td>
                                                <td className="px-4 py-3">Berries, dark chocolate, green tea</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 font-medium text-gray-900">Healthy Fats</td>
                                                <td className="px-4 py-3">Supports gut lining integrity</td>
                                                <td className="px-4 py-3">Balance omega-3 and omega-6</td>
                                                <td className="px-4 py-3">Avocados, olive oil, fatty fish</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 font-medium text-gray-900">Hydration</td>
                                                <td className="px-4 py-3">Maintains mucosal lining, prevents constipation</td>
                                                <td className="px-4 py-3">30-35ml per kg body weight</td>
                                                <td className="px-4 py-3">Water, herbal teas, broths</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                {/* Top Food Highlights */}
                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">1</span>
                                            Prebiotic Foods
                                        </h3>
                                        <p className="text-gray-700">
                                            These non-digestible fibers feed beneficial bacteria. Top sources include garlic (17.5g prebiotics/100g), onions (8.6g), leeks (6.5g), asparagus (2.5g), and bananas (1g in slightly green bananas).
                                        </p>
                                    </div>
                                    <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">2</span>
                                            Fermented Foods
                                        </h3>
                                        <p className="text-gray-700">
                                            Contain live active cultures. Best options: plain yogurt (10+ strains), kefir (30-50 strains), raw sauerkraut (15+ strains), kimchi (lactobacillus dominant), and kombucha (yeast/bacteria symbiosis).
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Gut-Healthy Foods */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Leaf className="w-8 h-8 text-green-600 mr-2" />
                                    The Ultimate Gut-Healthy Foods List
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Incorporate these foods regularly to support microbial diversity and digestive function:
                                </p>

                                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                                    <div className="grid md:grid-cols-3 gap-4 text-center font-medium mb-2">
                                        <div>Food Category</div>
                                        <div>Top 3 Choices</div>
                                        <div>Key Benefits</div>
                                    </div>
                                    <div className="grid md:grid-cols-3 gap-4 text-center mb-1 p-2 border-b border-gray-200">
                                        <div className="font-medium">Vegetables</div>
                                        <div>Artichokes, leeks, asparagus</div>
                                        <div>High in inulin (prebiotic fiber)</div>
                                    </div>
                                    <div className="grid md:grid-cols-3 gap-4 text-center mb-1 p-2 border-b border-gray-200 bg-green-50">
                                        <div className="font-medium">Fruits</div>
                                        <div>Blueberries, apples, bananas</div>
                                        <div>Polyphenols & resistant starch</div>
                                    </div>
                                    <div className="grid md:grid-cols-3 gap-4 text-center mb-1 p-2 border-b border-gray-200">
                                        <div className="font-medium">Grains</div>
                                        <div>Oats, barley, quinoa</div>
                                        <div>Beta-glucans & soluble fiber</div>
                                    </div>
                                    <div className="grid md:grid-cols-3 gap-4 text-center p-2">
                                        <div className="font-medium">Proteins</div>
                                        <div>Lentils, chickpeas, salmon</div>
                                        <div>Fiber + omega-3 combination</div>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Foods to Limit or Avoid</h3>
                                <p className="text-gray-700 mb-4">
                                    These can disrupt microbial balance and gut lining integrity:
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900 mb-3">Common Disruptors</h4>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Artificial sweeteners (aspartame, sucralose)</li>
                                            <li>Processed meats with nitrates/nitrites</li>
                                            <li>Refined vegetable/seed oils</li>
                                                                                          <li>Excessive alcohol (&gt;1 drink/day)</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900 mb-3">For Sensitive Individuals</h4>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Gluten (for those with sensitivity)</li>
                                            <li>High-FODMAP foods during flares</li>
                                                                                          <li>Excess caffeine (&gt;400mg daily)</li>
                                            <li>Very spicy foods if inflamed</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Important Note:</h3>
                                    <p className="text-gray-700">
                                        Individual tolerances vary greatly. Elimination diets should only be temporary under professional guidance to identify triggers while maintaining nutritional adequacy.
                                    </p>
                                </div>
                            </section>

                            {/* Sample Meal Plan */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <FerrisWheel className="w-8 h-8 text-green-600 mr-2" />
                                    7-Day Gut-Healthy Meal Plan
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    This balanced plan incorporates diversity while providing approximately 35g fiber daily:
                                </p>

                                <div className="space-y-6">
                                    {/* Day 1 */}
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-green-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Day 1 (Fiber: 36g)</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Breakfast</h4>
                                                <p className="text-gray-700">Overnight oats with chia seeds, blueberries, and almond butter</p>
                                            </div>
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Lunch</h4>
                                                <p className="text-gray-700">Quinoa salad with roasted vegetables, chickpeas, and tahini dressing</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">Dinner</h4>
                                                <p className="text-gray-700">Baked salmon with steamed asparagus and roasted sweet potatoes</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Day 2 */}
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-green-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Day 2 (Fiber: 38g)</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Breakfast</h4>
                                                <p className="text-gray-700">Greek yogurt parfait with mixed berries, walnuts, and flaxseeds</p>
                                            </div>
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Lunch</h4>
                                                <p className="text-gray-700">Lentil soup with a side of kimchi and whole grain bread</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">Dinner</h4>
                                                <p className="text-gray-700">Grilled chicken with roasted Brussels sprouts and wild rice</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Day 3 */}
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-green-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Day 3 (Fiber: 34g)</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Breakfast</h4>
                                                <p className="text-gray-700">Avocado toast on sourdough with hemp seeds and sauerkraut</p>
                                            </div>
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Lunch</h4>
                                                <p className="text-gray-700">Black bean and vegetable wrap with fermented salsa</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">Dinner</h4>
                                                <p className="text-gray-700">Miso-glazed cod with stir-fried bok choy and brown rice</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Supplements */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <FlaskConical className="w-8 h-8 text-green-600 mr-2" />
                                    Targeted Supplements for Gut Health
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    While food should come first, these supplements can provide additional support:
                                </p>

                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Supplement</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dosage</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Evidence Level</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Best For</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 font-medium text-gray-900">Probiotics</td>
                                                <td className="px-4 py-3">5-50 billion CFU daily</td>
                                                <td className="px-4 py-3">Strong</td>
                                                <td className="px-4 py-3">Antibiotic recovery, IBS</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 font-medium text-gray-900">L-Glutamine</td>
                                                <td className="px-4 py-3">5-15g daily</td>
                                                <td className="px-4 py-3">Moderate</td>
                                                <td className="px-4 py-3">Leaky gut support</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 font-medium text-gray-900">Zinc Carnosine</td>
                                                <td className="px-4 py-3">75-150mg daily</td>
                                                <td className="px-4 py-3">Emerging</td>
                                                <td className="px-4 py-3">Gastric lining repair</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="bg-blue-100 rounded-lg p-4">
                                    <h3 className="font-bold text-gray-900 mb-2">Supplement Quality Matters</h3>
                                    <p className="text-gray-700 mb-2">
                                        Look for third-party tested products with:
                                    </p>
                                    <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                                        <li>Strain specificity (for probiotics)</li>
                                        <li>Delayed-release capsules when needed</li>
                                        <li>No unnecessary fillers or additives</li>
                                        <li>Transparent labeling of CFUs/mg</li>
                                    </ul>
                                </div>
                            </section>

                            {/* NEW SECTION: Timing and Food Combining */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Clock className="w-8 h-8 text-green-600 mr-2" />
                                    Timing and Food Combining for Optimal Digestion
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    When and how you eat can be as important as what you eat for gut health:
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div className="bg-blue-50 p-4 rounded-lg">
                                        <h3 className="font-bold text-lg text-gray-900 mb-3">Meal Timing Tips</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Eat your largest meal when digestive fire is strongest (noon-2pm)</li>
                                            <li>Allow 12-16 hours between dinner and breakfast</li>
                                            <li>Stop eating 3 hours before bedtime</li>
                                            <li>Consider time-restricted eating (8-10 hour window)</li>
                                        </ul>
                                    </div>
                                    <div className="bg-purple-50 p-4 rounded-lg">
                                        <h3 className="font-bold text-lg text-gray-900 mb-3">Food Combining Principles</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Eat fruits alone or 30 minutes before meals</li>
                                            <li>Combine healthy fats with vegetables for nutrient absorption</li>
                                            <li>Pair iron-rich foods with vitamin C sources</li>
                                            <li>Take probiotics on an empty stomach when possible</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h3 className="font-bold text-gray-900 mb-2">Digestive Rest Periods</h3>
                                    <p className="text-gray-700">
                                        Your gut needs downtime to repair and reset. The migrating motor complex (MMC) - waves of electrical activity that sweep through the intestines - only occurs during fasting periods, helping clear debris and maintain gut health.
                                    </p>
                                </div>
                            </section>

                            {/* NEW SECTION: Common Gut Health Conditions */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <AlertTriangle className="w-8 h-8 text-green-600 mr-2" />
                                    Addressing Common Gut Health Conditions
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Specific nutritional approaches can help manage various digestive issues:
                                </p>

                                <div className="space-y-6">
                                    <div className="border border-gray-200 rounded-lg p-4">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Irritable Bowel Syndrome (IBS)</h3>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <h4 className="font-medium text-gray-900 mb-2">Helpful Foods:</h4>
                                                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                                                    <li>Low-FODMAP options during flares</li>
                                                    <li>Soluble fiber (oats, psyllium)</li>
                                                    <li>Peppermint tea</li>
                                                    <li>Bone broth</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900 mb-2">Foods to Limit:</h4>
                                                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                                                    <li>High-FODMAP foods (garlic, onions, beans)</li>
                                                    <li>Caffeine and alcohol</li>
                                                    <li>Artificial sweeteners</li>
                                                    <li>Spicy or very fatty foods</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg p-4">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Small Intestinal Bacterial Overgrowth (SIBO)</h3>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <h4 className="font-medium text-gray-900 mb-2">Supportive Approach:</h4>
                                                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                                                    <li>Probiotics</li>
                                                    <li>Prebiotics</li>
                                                    <li>Supplements</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900 mb-2">Prevention Measures:</h4>
                                                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                                                    <li>Reduce stress</li>
                                                    <li>Exercise</li>
                                                    <li>Probiotics</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="">
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h3 className="font-bold text-lg text-gray-900 mb-3">Digestive Care Support Network</h3>
                                <p className="text-gray-700">
                                    Connect with a network of healthcare professionals who are dedicated to supporting your digestive health.
                                </p>
                                <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                                    Join Now
                                </button>
                            </div>
                        </div>

                        <div className="mt-8">
                            <div className="bg-white p-4 rounded-lg shadow">
                                <h3 className="font-bold text-lg text-gray-900 mb-3">Subscribe for Updates</h3>
                                <form onSubmit={handleEmailSubmit} className="flex flex-col">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email"
                                        className="border border-gray-300 rounded px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                        required
                                    />
                                    <button type="submit" className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">
                                        Subscribe
                                    </button>
                                </form>
                            </div>
                        </div>

                        <div className="mt-8">
                            <div className="bg-white p-4 rounded-lg shadow">
                                <h3 className="font-bold text-lg text-gray-900 mb-3">Related Articles</h3>
                                <ul className="space-y-2">
                                    <li>
                                        <a href="#" className="text-blue-600 hover:underline">Understanding the Gut-Brain Connection</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-blue-600 hover:underline">Top 10 Foods for Gut Health</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-blue-600 hover:underline">How to Balance Your Gut Microbiome Naturally</a>
                                    </li>
                                </ul>
                            </div>
                            </div>
                    </div>

                </div>
            </div>
        </div>
    )
}