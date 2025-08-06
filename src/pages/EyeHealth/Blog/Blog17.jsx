"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, Eye, Sun, Monitor, BookOpen, Heart, Shield, AlertTriangle, Smartphone } from "lucide-react"

export default function EyeHealthGuide() {
    const [email, setEmail] = useState("")
    const [activeTab, setActiveTab] = useState("Risk Factors")

    const handleEmailSubmit = (e) => {
        e.preventDefault()
        console.log("Email submitted:", email)
        setEmail("")
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const tabs = ["Risk Factors", "Prevention", "Nutrition", "Exercises"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Understanding Eye Health: Risk Factors and Prevention Strategies
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
                                Your eyes are complex organs that require proper care and attention. This comprehensive guide explores the major risk factors affecting eye health, from lifestyle choices to genetic predispositions, and provides evidence-based prevention strategies to protect your vision throughout life.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1616329429191-c5c3f11a7e5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80"
                                    alt="Close-up of human eye showing detailed iris"
                                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                                    style={{ maxHeight: '500px' }}
                                />
                            </div>

                            {/* Key Takeaways */}
                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
                                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                    <BookOpen className="w-5 h-5 text-blue-600 mr-2" />
                                    Key Takeaways
                                </h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>80% of vision impairment is preventable or treatable with proper care</li>
                                    <li>Digital eye strain affects 50-90% of computer users</li>
                                    <li>UV protection can reduce cataract risk by up to 40%</li>
                                    <li>Regular eye exams can detect problems before symptoms appear</li>
                                    <li>Nutrition plays a crucial role in preventing age-related eye diseases</li>
                                </ul>
                            </div>

                            {/* Major Eye Health Risk Factors */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <AlertTriangle className="w-8 h-8 text-blue-600 mr-2" />
                                    Major Eye Health Risk Factors
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Understanding the risks to your eye health is the first step toward prevention. The World Health Organization estimates that at least <span className="font-semibold">2.2 billion people</span> worldwide have vision impairment, with at least 1 billion cases that could have been prevented.
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    {/* Environmental Factors Card */}
                                    <div className="border border-gray-200 rounded-lg p-6">
                                        <div className="flex items-center mb-3">
                                            <Sun className="w-6 h-6 text-blue-600 mr-2" />
                                            <h3 className="text-xl font-bold text-gray-900">Environmental Factors</h3>
                                        </div>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li><span className="font-semibold">UV radiation:</span> Cumulative exposure increases risk of cataracts and macular degeneration</li>
                                            <li><span className="font-semibold">Air pollution:</span> Linked to dry eye syndrome and inflammation</li>
                                            <li><span className="font-semibold">Indoor lighting:</span> Poor lighting causes eye strain and fatigue</li>
                                            <li><span className="font-semibold">Climate:</span> Dry climates increase dry eye risk</li>
                                        </ul>
                                    </div>

                                    {/* Lifestyle Factors Card */}
                                    <div className="border border-gray-200 rounded-lg p-6">
                                        <div className="flex items-center mb-3">
                                            <Heart className="w-6 h-6 text-blue-600 mr-2" />
                                            <h3 className="text-xl font-bold text-gray-900">Lifestyle Factors</h3>
                                        </div>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li><span className="font-semibold">Screen time:</span> Average adult spends 7+ hours daily on screens</li>
                                            <li><span className="font-semibold">Smoking:</span> Doubles risk of macular degeneration</li>
                                            <li><span className="font-semibold">Poor diet:</span> Deficiencies in vitamins A, C, E, zinc, and omega-3s</li>
                                            <li><span className="font-semibold">Lack of sleep:</span> Reduces tear production and eye repair</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Age-Related Risks Section */}
                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                        <User className="w-6 h-6 text-blue-600 mr-2" />
                                        Age-Related Risks
                                    </h3>
                                    <p className="text-gray-700 mb-4">
                                        The prevalence of eye diseases increases significantly with age. Here's how common eye conditions progress by decade:
                                    </p>

                                    <div className="overflow-x-auto">
                                        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age Group</th>
                                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Common Conditions</th>
                                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prevalence</th>
                                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prevention Tips</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200">
                                                <tr>
                                                    <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">20s-30s</td>
                                                    <td className="px-4 py-3">Dry eyes, digital strain</td>
                                                    <td className="px-4 py-3 whitespace-nowrap">25-35%</td>
                                                    <td className="px-4 py-3">20-20-20 rule, proper lighting</td>
                                                </tr>
                                                <tr className="bg-gray-50">
                                                    <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">40s-50s</td>
                                                    <td className="px-4 py-3">Presbyopia, glaucoma onset</td>
                                                    <td className="px-4 py-3 whitespace-nowrap">40-50%</td>
                                                    <td className="px-4 py-3">Annual exams, UV protection</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">60s+</td>
                                                    <td className="px-4 py-3">Cataracts, macular degeneration</td>
                                                    <td className="px-4 py-3 whitespace-nowrap">65-75%</td>
                                                    <td className="px-4 py-3">Nutrition, smoking cessation</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                {/* Digital Eye Strain Section */}
                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6 rounded-r-lg">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                                        <Monitor className="w-5 h-5 text-yellow-600 mr-2" />
                                        The Digital Eye Strain Epidemic
                                    </h3>
                                    <p className="text-gray-700">
                                        With the average person spending over <span className="font-semibold">11 hours per day</span> interacting with digital media, digital eye strain (also called computer vision syndrome) has become a major public health concern. Symptoms include headaches, blurred vision, dry eyes, and neck/shoulder pain.
                                    </p>
                                </div>
                            </section>

                            {/* Prevention Strategies */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Shield className="w-8 h-8 text-blue-600 mr-2" />
                                    Evidence-Based Prevention Strategies
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Protecting your vision requires a multi-faceted approach. The American Academy of Ophthalmology recommends these evidence-based strategies to maintain optimal eye health throughout your life.
                                </p>

                                {/* Protection Techniques */}
                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Protective Techniques</h3>
                                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                                        <div>
                                            <h4 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                                <Sun className="w-5 h-5 text-blue-500 mr-2" />
                                                UV Protection
                                            </h4>
                                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                                <li>Wear sunglasses that block 100% of UVA/UVB rays</li>
                                                <li>Choose wraparound styles for maximum coverage</li>
                                                <li>Wear them year-round, even on cloudy days</li>
                                                <li>Add a wide-brimmed hat for extra protection</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                                <Monitor className="w-5 h-5 text-blue-500 mr-2" />
                                                Digital Device Habits
                                            </h4>
                                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                                <li>Follow the 20-20-20 rule (every 20 minutes, look 20 feet away for 20 seconds)</li>
                                                <li>Position screens 20-26 inches from eyes</li>
                                                <li>Reduce blue light with filters or special glasses</li>
                                                <li>Blink consciously to prevent dry eyes</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Nutrition for Eye Health */}
                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Nutrition for Eye Health</h3>
                                    <p className="text-gray-700 mb-4">
                                        The Age-Related Eye Disease Study (AREDS) found that certain nutrients can reduce the risk of age-related eye diseases by up to 25%. Here are the most important nutrients and their food sources:
                                    </p>

                                    <div className="overflow-x-auto mb-4">
                                        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nutrient</th>
                                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Benefits</th>
                                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Best Food Sources</th>
                                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Daily Recommendation</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200">
                                                <tr>
                                                    <td className="px-4 py-3 font-medium text-gray-900">Lutein & Zeaxanthin</td>
                                                    <td className="px-4 py-3">Filters harmful blue light, protects macula</td>
                                                    <td className="px-4 py-3">Kale, spinach, eggs, corn</td>
                                                    <td className="px-4 py-3">10-20 mg combined</td>
                                                </tr>
                                                <tr className="bg-gray-50">
                                                    <td className="px-4 py-3 font-medium text-gray-900">Omega-3 Fatty Acids</td>
                                                    <td className="px-4 py-3">Reduces dry eyes, supports retinal health</td>
                                                    <td className="px-4 py-3">Fatty fish, flaxseeds, walnuts</td>
                                                    <td className="px-4 py-3">1000-2000 mg DHA+EPA</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3 font-medium text-gray-900">Vitamin C</td>
                                                    <td className="px-4 py-3">Reduces cataract risk, supports blood vessels</td>
                                                    <td className="px-4 py-3">Citrus fruits, bell peppers, broccoli</td>
                                                    <td className="px-4 py-3">75-90 mg</td>
                                                </tr>
                                                <tr className="bg-gray-50">
                                                    <td className="px-4 py-3 font-medium text-gray-900">Zinc</td>
                                                    <td className="px-4 py-3">Helps vitamin A create melanin (protective pigment)</td>
                                                    <td className="px-4 py-3">Oysters, beef, pumpkin seeds</td>
                                                    <td className="px-4 py-3">8-11 mg</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="bg-blue-50 rounded-lg p-4 mb-4">
                                        <h4 className="font-bold text-gray-900 mb-2">Sample Eye-Healthy Meal Plan</h4>
                                        <div className="grid md:grid-cols-3 gap-4 text-sm">
                                            <div>
                                                <p className="font-medium">Breakfast</p>
                                                <p>Spinach omelet with whole grain toast and orange juice</p>
                                            </div>
                                            <div>
                                                <p className="font-medium">Lunch</p>
                                                <p>Grilled salmon salad with kale, corn, and avocado</p>
                                            </div>
                                            <div>
                                                <p className="font-medium">Dinner</p>
                                                <p>Roasted chicken with sweet potatoes and sautéed broccoli</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Eye Exercises */}
                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Eye Exercises and Relaxation Techniques</h3>
                                    <p className="text-gray-700 mb-4">
                                        Regular eye exercises can help reduce fatigue, improve focusing ability, and stimulate blood circulation to the eyes. Try these simple exercises daily:
                                    </p>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="border border-gray-200 rounded-lg p-4">
                                            <h4 className="text-lg font-bold text-gray-900 mb-2">Palming</h4>
                                            <ol className="list-decimal list-inside text-gray-700 space-y-1">
                                                <li>Rub hands together to warm them</li>
                                                <li>Close eyes and cup palms over eyes without touching</li>
                                                <li>Breathe deeply for 1-2 minutes</li>
                                                <li>Repeat 3-5 times daily</li>
                                            </ol>
                                            <p className="text-gray-600 text-sm mt-2">Benefits: Reduces strain, relaxes eye muscles</p>
                                        </div>
                                        <div className="border border-gray-200 rounded-lg p-4">
                                            <h4 className="text-lg font-bold text-gray-900 mb-2">Focus Shifting</h4>
                                            <ol className="list-decimal list-inside text-gray-700 space-y-1">
                                                <li>Hold thumb 10 inches from face, focus on it</li>
                                                <li>Shift focus to an object 10-20 feet away</li>
                                                <li>Alternate focus between near and far objects</li>
                                                <li>Repeat 10 times, 3x daily</li>
                                            </ol>
                                            <p className="text-gray-600 text-sm mt-2">Benefits: Improves accommodation flexibility</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Professional Care */}
                                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">4. Professional Eye Care Recommendations</h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <h4 className="font-medium text-gray-900 mb-1">Eye Exam Schedule</h4>
                                            <ul className="list-disc list-inside text-gray-700">
                                                <li>Children: First exam at 6 months, then before 1st grade</li>
                                                <li>Adults 20-39: Every 5-10 years if healthy</li>
                                                <li>Adults 40-54: Every 2-4 years</li>
                                                <li>Adults 55+: Every 1-2 years</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 mb-1">When to Seek Immediate Care</h4>
                                            <ul className="list-disc list-inside text-gray-700">
                                                <li>Sudden vision loss or changes</li>
                                                <li>Persistent eye pain</li>
                                                <li>Flashes of light or new floaters</li>
                                                <li>Double vision or halos around lights</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Technology and Eye Health */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Smartphone className="w-8 h-8 text-blue-600 mr-2" />
                                    Technology and Eye Health
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Modern technology presents both challenges and solutions for eye health. Understanding how to navigate this landscape is crucial for protecting your vision in the digital age.
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Harmful Technologies</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li><span className="font-semibold">Blue light emission:</span> From LED screens, may disrupt sleep cycles</li>
                                            <li><span className="font-semibold">Small fonts:</span> Force constant focusing effort</li>
                                            <li><span className="font-semibold">Glare:</span> From screens in bright environments</li>
                                            <li><span className="font-semibold">Poor ergonomics:</span> Leads to neck strain affecting eyes</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Helpful Technologies</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li><span className="font-semibold">Blue light filters:</span> Built into devices or as screen protectors</li>
                                            <li><span className="font-semibold">E-ink displays:</span> Mimic paper with no backlight</li>
                                            <li><span className="font-semibold">Dark modes:</span> Reduce screen brightness</li>
                                            <li><span className="font-semibold">Accessibility features:</span> Text enlargement, high contrast</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">Optimal Device Settings</h3>
                                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                                        <div>
                                            <p className="font-medium">Brightness</p>
                                            <p>Match ambient light level (not brighter)</p>
                                        </div>
                                        <div>
                                            <p className="font-medium">Text Size</p>
                                            <p>Read at arm's length without squinting</p>
                                        </div>
                                        <div>
                                            <p className="font-medium">Color Temperature</p>
                                            <p>Warmer tones in evening (2700K-3000K)</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Protecting your vision requires consistent, lifelong attention to multiple factors. While genetics play a role, research shows that lifestyle choices have significant impact on long-term eye health outcomes.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    The most effective approach combines preventive measures (UV protection, proper nutrition), good visual habits (screen time management, eye exercises), and regular professional care. Small daily actions accumulate to create substantial protection against vision loss.
                                </p>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "Your eyes are the windows to your health and the world. Investing in their care is one of the most valuable health investments you can make, with benefits that extend far beyond vision alone."
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
                                            Dr. Emily Chen, OD
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600 mb-1">
                                        — Written by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            David Wilson
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
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get vision care tips</h4>
                                <p className="text-gray-700 text-sm">
                                    Monthly updates on eye health research, prevention strategies, and expert advice.
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

                        {/* Quick Eye Health Checklist */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Daily Eye Health Checklist</h3>
                            <div className="space-y-3">
                                <div className="flex items-start">
                                    <input type="checkbox" id="check1" className="mt-1 mr-2" />
                                    <label htmlFor="check1" className="text-gray-700">Followed 20-20-20 rule for screen breaks</label>
                                </div>
                                <div className="flex items-start">
                                    <input type="checkbox" id="check2" className="mt-1 mr-2" />
                                    <label htmlFor="check2" className="text-gray-700">Wore UV-protective eyewear outdoors</label>
                                </div>
                                <div className="flex items-start">
                                    <input type="checkbox" id="check3" className="mt-1 mr-2" />
                                    <label htmlFor="check3" className="text-gray-700">Consumed eye-healthy foods (leafy greens, fish)</label>
                                </div>
                                <div className="flex items-start">
                                    <input type="checkbox" id="check4" className="mt-1 mr-2" />
                                    <label htmlFor="check4" className="text-gray-700">Practiced eye relaxation exercises</label>
                                </div>
                                <div className="flex items-start">
                                    <input type="checkbox" id="check5" className="mt-1 mr-2" />
                                    <label htmlFor="check5" className="text-gray-700">Maintained proper hydration</label>
                                </div>
                            </div>
                        </div>

                        {/* Eye Emergency Guide */}
                        <div className="bg-red-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                <AlertTriangle className="w-5 h-5 text-red-600 mr-2" />
                                Eye Emergency Guide
                            </h3>
                            <div className="space-y-3 text-sm">
                                <div>
                                    <p className="font-medium text-gray-900">Chemical Exposure</p>
                                    <p className="text-gray-700">Flush with water for 15+ minutes, seek immediate care</p>
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900">Sudden Vision Loss</p>
                                    <p className="text-gray-700">Call emergency services immediately</p>
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900">Eye Trauma</p>
                                    <p className="text-gray-700">Don't rub eye, cover with shield, seek care</p>
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900">Flashes/Floaters</p>
                                    <p className="text-gray-700">Schedule urgent retinal exam</p>
                                </div>
                            </div>
                        </div>

                        {/* Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Further Reading</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">The Complete Guide to Digital Eye Strain</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Age-Related Macular Degeneration Prevention</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Children's Eye Health: What Parents Should Know</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Nutritional Supplements for Eye Health</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Choosing the Right Sunglasses</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}