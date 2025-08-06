"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, Eye, Carrot, Heart, Shield, BookOpen, Star, ArrowRight } from "lucide-react"

export default function EyeHealthNutritionGuide() {
    const [email, setEmail] = useState("")
    const [activeTab, setActiveTab] = useState("Nutrients")

    const handleEmailSubmit = (e) => {
        e.preventDefault()
        console.log("Email submitted:", email)
        setEmail("")
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const tabs = ["Nutrients", "Foods", "Recipes", "Research"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Nutrition for Optimal Eye Health: What You Need to Know
                            </h1>

                            {/* Navigation Tabs */}
                            <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-200">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                                            activeTab === tab
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
                                Essential nutrition guidelines, food recommendations, and dietary strategies to support your eye health and protect your vision for the long term. Discover how specific nutrients can prevent age-related macular degeneration, cataracts, and other vision problems.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80"
                                    alt="Assortment of eye-healthy foods including carrots, leafy greens, and fish"
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
                                    <li>Lutein and zeaxanthin can reduce the risk of chronic eye diseases by up to 43%</li>
                                    <li>Omega-3 fatty acids help prevent dry eye syndrome and support retinal health</li>
                                    <li>Vitamin C may lower cataract risk by 33% when consumed regularly</li>
                                    <li>Antioxidant-rich foods protect against blue light damage from screens</li>
                                    <li>A Mediterranean diet pattern shows the strongest evidence for eye health benefits</li>
                                </ul>
                            </div>

                            {/* Why Eye Nutrition Matters */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Eye className="w-8 h-8 text-blue-600 mr-2" />
                                    Why Nutrition Matters for Eye Health
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Your eyes are complex organs that require specific nutrients to function optimally and resist age-related damage. According to the <a href="#" className="text-blue-600 hover:underline">American Academy of Ophthalmology</a>, dietary factors may influence up to 40% of age-related eye diseases. A <a href="#" className="text-blue-600 hover:underline">2023 meta-analysis in Nutrients</a> found that:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>Proper nutrition can delay age-related macular degeneration (AMD) by 5-10 years</li>
                                    <li>Antioxidant-rich diets reduce cataract risk by 28-34%</li>
                                    <li>Omega-3 intake is associated with 17% lower risk of diabetic retinopathy</li>
                                    <li>Vitamin E may slow progression of existing AMD by 25%</li>
                                </ul>

                                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">How Nutrients Reach Your Eyes</h3>
                                    <p className="text-gray-700">
                                        The eye has one of the highest metabolic rates in the body and is particularly vulnerable to oxidative stress. Nutrients are transported to the eyes through the bloodstream and accumulate in ocular tissues, especially the macula (the central part of the retina responsible for detailed vision).
                                    </p>
                                </div>
                            </section>

                            {/* Essential Nutrients for Eye Health */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Check className="w-8 h-8 text-blue-600 mr-2" />
                                    Essential Nutrients for Eye Health
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    These are the most scientifically validated nutrients for maintaining and improving vision health, along with their optimal food sources and recommended daily intake for eye benefits.
                                </p>

                                {/* Nutrients Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nutrient</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Key Benefits</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Best Food Sources</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Daily Target</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            {/* Row 1 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Lutein & Zeaxanthin</td>
                                                <td className="px-4 py-3">Filters blue light, protects macula, reduces AMD risk</td>
                                                <td className="px-4 py-3">Kale, spinach, eggs, corn, orange peppers</td>
                                                <td className="px-4 py-3 whitespace-nowrap">10-20 mg combined</td>
                                            </tr>
                                            {/* Row 2 */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Omega-3 (DHA/EPA)</td>
                                                <td className="px-4 py-3">Retinal development, dry eye prevention, anti-inflammatory</td>
                                                <td className="px-4 py-3">Fatty fish, flaxseeds, walnuts, algae</td>
                                                <td className="px-4 py-3 whitespace-nowrap">500-1000 mg DHA+EPA</td>
                                            </tr>
                                            {/* Row 3 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Vitamin C</td>
                                                <td className="px-4 py-3">Collagen production, cataract prevention, antioxidant</td>
                                                <td className="px-4 py-3">Citrus fruits, bell peppers, broccoli, strawberries</td>
                                                <td className="px-4 py-3 whitespace-nowrap">250-500 mg</td>
                                            </tr>
                                            {/* Row 4 */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Vitamin E</td>
                                                <td className="px-4 py-3">Protects cell membranes, slows AMD progression</td>
                                                <td className="px-4 py-3">Almonds, sunflower seeds, avocado, wheat germ</td>
                                                <td className="px-4 py-3 whitespace-nowrap">15-30 mg</td>
                                            </tr>
                                            {/* Row 5 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Zinc</td>
                                                <td className="px-4 py-3">Vitamin A metabolism, night vision, immune support</td>
                                                <td className="px-4 py-3">Oysters, beef, pumpkin seeds, lentils</td>
                                                <td className="px-4 py-3 whitespace-nowrap">15-40 mg</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <p className="text-gray-700 mb-6">
                                    *Note: These values are for eye health maintenance. Therapeutic doses for existing conditions may be higher under medical supervision.
                                </p>

                                {/* Top 3 Nutrient Highlights */}
                                <div className="grid md:grid-cols-3 gap-6 mb-8">
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">1</span>
                                            Lutein & Zeaxanthin
                                        </h3>
                                        <p className="text-gray-700">
                                            These carotenoids form the macular pigment that filters harmful blue light. Studies show they can increase macular pigment optical density by 30-40% with consistent intake, reducing AMD risk by up to 43%.
                                        </p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">2</span>
                                            Omega-3 Fatty Acids
                                        </h3>
                                        <p className="text-gray-700">
                                            DHA makes up 30-60% of the retina's fatty acids. The AREDS2 study found omega-3s reduced progression to advanced AMD by 25% when combined with other nutrients.
                                        </p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">3</span>
                                            Vitamin C
                                        </h3>
                                        <p className="text-gray-700">
                                            The aqueous humor (eye fluid) contains vitamin C at 15x blood concentration. It protects lens proteins from glycation, a key factor in cataract formation.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Top Eye-Healthy Foods */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Carrot className="w-8 h-8 text-blue-600 mr-2" />
                                    Top 15 Eye-Healthy Foods
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Based on nutrient density and scientific evidence, these foods deliver the most vision-protecting compounds per serving:
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">1. Kale</h3>
                                        </div>
                                        <div className="p-4">
                                            <p className="text-gray-700 mb-2">
                                                <span className="font-semibold">Key Nutrients:</span> Lutein (23.8mg/cup), zeaxanthin, vitamin C, beta-carotene
                                            </p>
                                            <p className="text-gray-700">
                                                <span className="font-semibold">Benefit:</span> Highest lutein content of any food; increases macular pigment density
                                            </p>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">2. Wild Salmon</h3>
                                        </div>
                                        <div className="p-4">
                                            <p className="text-gray-700 mb-2">
                                                <span className="font-semibold">Key Nutrients:</span> DHA (1.5g/3oz), EPA, astaxanthin
                                            </p>
                                            <p className="text-gray-700">
                                                <span className="font-semibold">Benefit:</span> Supports retinal structure and reduces dry eye symptoms by 65%
                                            </p>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">3. Eggs (Pasture-Raised)</h3>
                                        </div>
                                        <div className="p-4">
                                            <p className="text-gray-700 mb-2">
                                                <span className="font-semibold">Key Nutrients:</span> Lutein (0.3mg/yolk), zeaxanthin, zinc, vitamin D
                                            </p>
                                            <p className="text-gray-700">
                                                <span className="font-semibold">Benefit:</span> Bioavailable carotenoids; 2 eggs/day increased macular pigment by 31% in 12 weeks
                                            </p>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">4. Blueberries</h3>
                                        </div>
                                        <div className="p-4">
                                            <p className="text-gray-700 mb-2">
                                                <span className="font-semibold">Key Nutrients:</span> Anthocyanins (163mg/100g), vitamin C, quercetin
                                            </p>
                                            <p className="text-gray-700">
                                                <span className="font-semibold">Benefit:</span> Improves night vision and retinal blood flow within 2 hours of consumption
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Complete Eye-Healthy Food List</h3>
                                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                                        <div className="flex items-center">
                                            <Check className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" />
                                            <span>Spinach</span>
                                        </div>
                                        <div className="flex items-center">
                                            <Check className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" />
                                            <span>Swiss Chard</span>
                                        </div>
                                        <div className="flex items-center">
                                            <Check className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" />
                                            <span>Collard Greens</span>
                                        </div>
                                        <div className="flex items-center">
                                            <Check className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" />
                                            <span>Sardines</span>
                                        </div>
                                        <div className="flex items-center">
                                            <Check className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" />
                                            <span>Almonds</span>
                                        </div>
                                        <div className="flex items-center">
                                            <Check className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" />
                                            <span>Orange Bell Peppers</span>
                                        </div>
                                        <div className="flex items-center">
                                            <Check className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" />
                                            <span>Sweet Potatoes</span>
                                        </div>
                                        <div className="flex items-center">
                                            <Check className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" />
                                            <span>Pumpkin Seeds</span>
                                        </div>
                                        <div className="flex items-center">
                                            <Check className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" />
                                            <span>Goji Berries</span>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Eye Health Meal Plan */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">7-Day Eye Health Meal Plan</h2>

                                <p className="text-gray-700 mb-6">
                                    This sample meal plan provides all key eye nutrients while keeping total carbs moderate. Each day averages 25-35mg lutein+zeaxanthin and 800-1200mg omega-3s.
                                </p>

                                <div className="space-y-6">
                                    {/* Day 1 */}
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Day 1 (Total Lutein: 28mg)</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Breakfast</h4>
                                                <p className="text-gray-700">Spinach and mushroom omelet with 1 cup sautéed kale, 1/2 avocado</p>
                                            </div>
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Lunch</h4>
                                                <p className="text-gray-700">Wild salmon salad with mixed greens, cherry tomatoes, walnuts, olive oil dressing</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">Dinner</h4>
                                                <p className="text-gray-700">Grilled chicken with roasted Brussels sprouts and sweet potato mash</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Day 2 */}
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Day 2 (Total Lutein: 32mg)</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Breakfast</h4>
                                                <p className="text-gray-700">Blueberry-spinach smoothie with flaxseeds and Greek yogurt</p>
                                            </div>
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Lunch</h4>
                                                <p className="text-gray-700">Kale Caesar salad with grilled shrimp and pumpkin seeds</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">Dinner</h4>
                                                <p className="text-gray-700">Baked cod with roasted red peppers and quinoa</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Research and Studies */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <BookOpen className="w-8 h-8 text-blue-600 mr-2" />
                                    Key Research Findings
                                </h2>

                                <div className="space-y-6">
                                    <div className="border-l-4 border-blue-500 pl-4">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">AREDS2 Study (2013)</h3>
                                        <p className="text-gray-700 mb-2">
                                            The Age-Related Eye Disease Study 2 found that the modified formula (adding lutein, zeaxanthin, and omega-3s while removing beta-carotene) reduced risk of progressing to advanced AMD by 18-25%.
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            <span className="font-semibold">Key Takeaway:</span> 10mg lutein + 2mg zeaxanthin daily showed most benefit for those with low dietary intake.
                                        </p>
                                    </div>

                                    <div className="border-l-4 border-blue-500 pl-4">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">Blue Mountains Eye Study</h3>
                                        <p className="text-gray-700 mb-2">
                                            This longitudinal study found participants eating 2-3 servings of leafy greens weekly had 55% lower incidence of AMD over 15 years compared to those eating less than 1 serving/month.
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            <span className="font-semibold">Key Takeaway:</span> Consistent, moderate intake provides long-term protection.
                                        </p>
                                    </div>

                                    <div className="border-l-4 border-blue-500 pl-4">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">Nurses' Health Study</h3>
                                        <p className="text-gray-700 mb-2">
                                            Analysis of 71,494 women found those with highest lutein/zeaxanthin intake had 23% lower cataract extraction risk and 37% lower nuclear cataract risk.
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            <span className="font-semibold">Key Takeaway:</span> Benefits appear dose-dependent, with optimal intake around 6-10mg lutein daily.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Lifestyle Factors */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Complementary Lifestyle Factors</h2>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                                            <Heart className="w-5 h-5 text-blue-600 mr-2" />
                                            Exercise & Blood Flow
                                        </h3>
                                        <p className="text-gray-700 mb-2">
                                            Regular aerobic exercise increases ocular blood flow by 20-30%, delivering more nutrients to retinal tissues. Aim for 150 minutes weekly of moderate activity.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                                            <Shield className="w-5 h-5 text-blue-600 mr-2" />
                                            Screen Time Protection
                                        </h3>
                                        <p className="text-gray-700">
                                            Follow the 20-20-20 rule (every 20 minutes, look at something 20 feet away for 20 seconds) and use blue light filters during evening screen use.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Pro Tip:</h3>
                                    <p className="text-gray-700">
                                        Pair fat-soluble eye nutrients (lutein, zeaxanthin, vitamin E) with healthy fats like olive oil or avocado to increase absorption by 3-4x compared to consuming without fat.
                                    </p>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Building an eye-healthy diet doesn't require exotic supplements or drastic changes. By consistently incorporating leafy greens, colorful vegetables, fatty fish, and nuts into your meals, you can significantly reduce your risk of vision problems as you age.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    Remember that nutrients work synergistically - the combination of lutein, zeaxanthin, omega-3s, and antioxidants provides greater protection than any single nutrient alone. Start with small changes like adding spinach to your morning eggs or snacking on carrots and hummus.
                                </p>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "Your eyes are what you eat. The average American gets only 1-2mg lutein daily, while research suggests 10-20mg may be optimal for prevention. Just one cup of cooked kale provides over 20mg."
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
                                            Dr. Emily Parker, Ophthalmologist
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600 mb-1">
                                        — Written by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            Nutritionist David Wilson
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
                                <h3 className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-2">EYE HEALTH NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get vision-protecting recipes</h4>
                                <p className="text-gray-700 text-sm">
                                    Weekly meal plans and science-backed nutrition tips for optimal eye health.
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
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
                                >
                                    SUBSCRIBE <ArrowRight className="w-4 h-4 ml-2" />
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

                        {/* Popular Recipes */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Top Eye-Healthy Recipes</h3>
                            <div className="space-y-4">
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img 
                                                src="https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80" 
                                                alt="Kale salad" 
                                                className="w-full h-full object-cover" 
                                            />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Kale & Quinoa Power Salad</h4>
                                            <p className="text-sm text-gray-600">12mg lutein per serving</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img 
                                                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80" 
                                                alt="Salmon dish" 
                                                className="w-full h-full object-cover" 
                                            />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Salmon with Spinach</h4>
                                            <p className="text-sm text-gray-600">1.2g omega-3s per serving</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img 
                                                src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80" 
                                                alt="Blueberry smoothie" 
                                                className="w-full h-full object-cover" 
                                            />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Blueberry Eye Health Smoothie</h4>
                                            <p className="text-sm text-gray-600">8mg lutein per serving</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Supplement Guide */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">When to Consider Supplements</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <Check className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>If you eat fewer than 3 servings of leafy greens weekly</span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>For existing AMD or family history of eye disease</span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>If following a vegan/vegetarian diet (for omega-3s)</span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>When diagnosed with nutrient deficiencies</span>
                                </li>
                            </ul>
                        </div>

                        {/* Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Further Reading</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-center">
                                        <BookOpen className="w-4 h-4 mr-2" />
                                        The AREDS2 Study Explained
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-center">
                                        <BookOpen className="w-4 h-4 mr-2" />
                                        Blue Light Protection Strategies
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-center">
                                        <BookOpen className="w-4 h-4 mr-2" />
                                        Cooking for Eye Health
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-center">
                                        <BookOpen className="w-4 h-4 mr-2" />
                                        Children's Eye Nutrition Guide
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