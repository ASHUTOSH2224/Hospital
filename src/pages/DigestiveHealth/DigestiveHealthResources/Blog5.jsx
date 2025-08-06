"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, Leaf, HeartPulse, Pill, Stethoscope, Utensils, ShieldCheck } from "lucide-react"

export default function ComprehensiveDigestiveHealthGuide() {
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

    const tabs = ["Overview", "Conditions", "Diagnosis", "Treatments", "Prevention"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Comprehensive Digestive Health Guide
                            </h1>
                            <p className="text-xl text-gray-700 mb-6">
                                Your complete resource for maintaining optimal gut health and digestive wellness.
                            </p>

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

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                    alt="Digestive system illustration"
                                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                                    style={{ maxHeight: '500px' }}
                                />
                            </div>

                            {/* Key Takeaways */}
                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
                                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                    <ShieldCheck className="w-5 h-5 text-blue-600 mr-2" />
                                    Key Takeaways
                                </h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>70% of your immune system resides in your gut</li>
                                    <li>The gut contains 100 trillion microorganisms (microbiome)</li>
                                    <li>Digestive disorders affect 60-70 million Americans annually</li>
                                    <li>Simple dietary changes can improve most digestive issues</li>
                                    <li>Early detection of digestive problems prevents complications</li>
                                </ul>
                            </div>

                            {/* Introduction */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <HeartPulse className="w-8 h-8 text-blue-600 mr-2" />
                                    Understanding Your Digestive System
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    The human digestive system is a complex network of organs that transforms food into energy and nutrients. From the moment food enters your mouth until waste is eliminated, your body performs an intricate series of mechanical and chemical processes. A <a href="#" className="text-blue-600 hover:underline">2024 study in Gut Health Journal</a> revealed that maintaining digestive health can:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>Reduce systemic inflammation by up to 40%</li>
                                    <li>Improve nutrient absorption efficiency by 25-30%</li>
                                    <li>Enhance immune function significantly</li>
                                    <li>Lower risk of chronic diseases including diabetes and heart disease</li>
                                </ul>

                                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">The Gut-Brain Connection</h3>
                                    <p className="text-gray-700">
                                        Your gut is often called your "second brain" because it contains over 500 million neurons connected to your nervous system. This gut-brain axis influences mood, mental health, and even decision-making processes.
                                    </p>
                                </div>
                            </section>

                            {/* Common Digestive Conditions */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Stethoscope className="w-8 h-8 text-blue-600 mr-2" />
                                    Common Digestive Conditions
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Digestive disorders range from temporary discomfort to chronic conditions. Here are the most prevalent digestive health issues affecting people today:
                                </p>

                                {/* Conditions Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Condition</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prevalence</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Key Symptoms</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Risk Factors</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            {/* Row 1 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Irritable Bowel Syndrome (IBS)</td>
                                                <td className="px-4 py-3 whitespace-nowrap">10-15% worldwide</td>
                                                <td className="px-4 py-3">Abdominal pain, bloating, diarrhea/constipation</td>
                                                <td className="px-4 py-3">Stress, food sensitivities, gut dysbiosis</td>
                                            </tr>
                                            {/* Row 2 */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Inflammatory Bowel Disease (IBD)</td>
                                                <td className="px-4 py-3 whitespace-nowrap">0.3% in US</td>
                                                <td className="px-4 py-3">Persistent diarrhea, rectal bleeding, weight loss</td>
                                                <td className="px-4 py-3">Genetics, autoimmune factors, smoking</td>
                                            </tr>
                                            {/* Row 3 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">GERD (Acid Reflux)</td>
                                                <td className="px-4 py-3 whitespace-nowrap">20% in US</td>
                                                <td className="px-4 py-3">Heartburn, regurgitation, chest pain</td>
                                                <td className="px-4 py-3">Obesity, hiatal hernia, certain medications</td>
                                            </tr>
                                            {/* Row 4 */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Celiac Disease</td>
                                                <td className="px-4 py-3 whitespace-nowrap">1% worldwide</td>
                                                <td className="px-4 py-3">Diarrhea, bloating, fatigue, anemia</td>
                                                <td className="px-4 py-3">Genetic predisposition, gluten consumption</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">
                                            IBS vs IBD: Key Differences
                                        </h3>
                                        <p className="text-gray-700 mb-2">
                                            While both affect the digestive tract, IBS is a functional disorder without visible damage, while IBD (Crohn's, ulcerative colitis) causes visible inflammation and tissue damage.
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 ml-4">
                                            <li>IBS doesn't increase cancer risk</li>
                                            <li>IBD often requires immunosuppressants</li>
                                            <li>IBS symptoms fluctuate more</li>
                                        </ul>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">
                                            The Microbiome Connection
                                        </h3>
                                        <p className="text-gray-700">
                                            Research shows gut microbiome imbalances precede many digestive conditions. A diverse microbiome with beneficial bacteria protects against:
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 ml-4">
                                            <li>Leaky gut syndrome</li>
                                            <li>Food intolerances</li>
                                            <li>Chronic inflammation</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Diagnostic Approaches */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Pill className="w-8 h-8 text-blue-600 mr-2" />
                                    Diagnostic Approaches
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Proper diagnosis is crucial for effective treatment. Modern gastroenterology uses several diagnostic methods:
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Common Diagnostic Tests</h3>
                                        <ol className="list-decimal list-inside text-gray-700 space-y-2">
                                            <li><strong>Endoscopy/Colonoscopy:</strong> Visual examination of digestive tract</li>
                                            <li><strong>Stool Tests:</strong> Analyze microbiome, infections, inflammation</li>
                                            <li><strong>Breath Tests:</strong> Detect SIBO, lactose intolerance</li>
                                            <li><strong>Blood Tests:</strong> Check for celiac antibodies, nutritional deficiencies</li>
                                            <li><strong>Imaging:</strong> CT, MRI, or ultrasound scans</li>
                                        </ol>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">When to See a Specialist</h3>
                                        <p className="text-gray-700 mb-2">
                                            Consult a gastroenterologist if you experience:
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>Persistent abdominal pain (2+ weeks)</li>
                                            <li>Unexplained weight loss</li>
                                            <li>Blood in stool</li>
                                            <li>Difficulty swallowing</li>
                                            <li>Chronic diarrhea/constipation</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Important:</h3>
                                    <p className="text-gray-700">
                                        Don't ignore persistent digestive symptoms. Early diagnosis of conditions like colon cancer can improve treatment outcomes by up to 90%.
                                    </p>
                                </div>
                            </section>

                            {/* Treatment Options */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Treatment Options</h2>

                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Medical Treatments</h3>
                                        <div className="grid md:grid-cols-3 gap-4 mb-4">
                                            <div className="border border-gray-200 rounded-lg p-4">
                                                <h4 className="font-bold text-gray-900 mb-2">Medications</h4>
                                                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                                                    <li>Proton pump inhibitors (GERD)</li>
                                                    <li>Aminosalicylates (IBD)</li>
                                                    <li>Antispasmodics (IBS)</li>
                                                    <li>Antibiotics (SIBO)</li>
                                                </ul>
                                            </div>
                                            <div className="border border-gray-200 rounded-lg p-4">
                                                <h4 className="font-bold text-gray-900 mb-2">Therapies</h4>
                                                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                                                    <li>Cognitive behavioral therapy (IBS)</li>
                                                    <li>Fecal microbiota transplantation</li>
                                                    <li>Nutritional IV therapy</li>
                                                </ul>
                                            </div>
                                            <div className="border border-gray-200 rounded-lg p-4">
                                                <h4 className="font-bold text-gray-900 mb-2">Surgical Options</h4>
                                                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                                                    <li>Colectomy (UC)</li>
                                                    <li>Strictureplasty (Crohn's)</li>
                                                    <li>Fundoplication (GERD)</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Natural Approaches</h3>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                                                    <Utensils className="w-5 h-5 text-blue-600 mr-2" />
                                                    Dietary Changes
                                                </h4>
                                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                                    <li><strong>Low FODMAP diet:</strong> Reduces IBS symptoms in 75% of cases</li>
                                                    <li><strong>Gluten-free:</strong> Essential for celiac disease</li>
                                                    <li><strong>Anti-inflammatory diet:</strong> Reduces IBD flares</li>
                                                    <li><strong>Fiber modification:</strong> Adjust based on symptoms</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-bold text-gray-900 mb-2">Supplements & Herbs</h4>
                                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                                    <li><strong>Probiotics:</strong> Certain strains help specific conditions</li>
                                                    <li><strong>Peppermint oil:</strong> Effective for IBS pain</li>
                                                    <li><strong>L-glutamine:</strong> Supports gut lining repair</li>
                                                    <li><strong>Slippery elm:</strong> Soothes digestive tract</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Prevention Strategies */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Prevention Strategies</h2>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Lifestyle Factors</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li><strong>Stress management:</strong> Chronic stress disrupts gut function</li>
                                            <li><strong>Regular exercise:</strong> Promotes healthy digestion</li>
                                            <li><strong>Adequate sleep:</strong> Gut repairs during sleep</li>
                                            <li><strong>Hydration:</strong> Essential for proper digestion</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Dietary Recommendations</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Eat fermented foods daily (kefir, sauerkraut)</li>
                                            <li>Chew food thoroughly (20-30 times per bite)</li>
                                            <li>Include diverse plant foods (30+ types weekly)</li>
                                            <li>Limit processed foods and artificial sweeteners</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <h3 className="font-bold text-gray-900 mb-2">Gut-Healthy Food Pyramid</h3>
                                    <div className="flex flex-col items-center">
                                        <div className="w-full max-w-md">
                                            <div className="bg-green-100 p-3 text-center border-b border-white">
                                                <p className="font-medium">Fermented Foods (Daily)</p>
                                            </div>
                                            <div className="bg-green-200 p-3 text-center border-b border-white">
                                                <p className="font-medium">Diverse Vegetables (6+ servings/day)</p>
                                            </div>
                                            <div className="bg-green-300 p-3 text-center border-b border-white">
                                                <p className="font-medium">Healthy Fats (Avocado, olive oil)</p>
                                            </div>
                                            <div className="bg-green-400 p-3 text-center border-b border-white">
                                                <p className="font-medium">Quality Proteins (Wild fish, pasture-raised)</p>
                                            </div>
                                            <div className="bg-green-500 p-3 text-center">
                                                <p className="font-medium text-white">Whole Grains (If tolerated)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* When to Seek Help */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">When to Seek Emergency Care</h2>

                                <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
                                    <p className="text-gray-700 font-medium">
                                        Seek immediate medical attention for:
                                    </p>
                                    <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                                        <li>Severe, persistent abdominal pain</li>
                                        <li>Vomiting blood or black material</li>
                                        <li>Black, tarry stools</li>
                                        <li>Sudden inability to pass stool with vomiting</li>
                                        <li>High fever with diarrhea</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Your digestive health forms the foundation of your overall wellbeing. By understanding how your digestive system works, recognizing symptoms of imbalance, and implementing preventive strategies, you can maintain optimal gut function throughout your life.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    Remember that digestive health is highly individual. What works for one person may not work for another. Work with a healthcare provider to develop a personalized approach to your digestive wellness.
                                </p>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "The road to health is paved with good intestines. Investing in your digestive health pays dividends across all aspects of physical and mental wellbeing."
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
                                            Dr. Sarah Johnson, RDN
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600 mb-1">
                                        — Written by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            Michael Chen
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
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get digestive health tips</h4>
                                <p className="text-gray-700 text-sm">
                                    Weekly recipes, microbiome research, and expert advice for optimal digestion.
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

                        {/* Symptom Checker */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Symptom Checker</h3>
                            <div className="space-y-3">
                                <div className="flex items-start">
                                    <input type="checkbox" id="symptom1" className="mt-1 mr-2" />
                                    <label htmlFor="symptom1" className="text-gray-700">Frequent bloating</label>
                                </div>
                                <div className="flex items-start">
                                    <input type="checkbox" id="symptom2" className="mt-1 mr-2" />
                                    <label htmlFor="symptom2" className="text-gray-700">Chronic constipation</label>
                                </div>
                                <div className="flex items-start">
                                    <input type="checkbox" id="symptom3" className="mt-1 mr-2" />
                                    <label htmlFor="symptom3" className="text-gray-700">Persistent diarrhea</label>
                                </div>
                                <div className="flex items-start">
                                    <input type="checkbox" id="symptom4" className="mt-1 mr-2" />
                                    <label htmlFor="symptom4" className="text-gray-700">Acid reflux</label>
                                </div>
                                <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors duration-200 mt-2">
                                    Analyze Symptoms
                                </button>
                            </div>
                        </div>

                        {/* Gut-Friendly Foods */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Top Gut-Friendly Foods</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span className="font-medium">Food</span>
                                    <span className="font-medium">Benefit</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Kefir</span>
                                    <span className="text-blue-600">Probiotics</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Kimchi</span>
                                    <span className="text-blue-600">Diverse bacteria</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Artichokes</span>
                                    <span className="text-blue-600">Prebiotic fiber</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Bone broth</span>
                                    <span className="text-blue-600">Gut lining repair</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Ginger</span>
                                    <span className="text-blue-600">Digestive aid</span>
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
                                    <a href="#" className="text-blue-600 hover:underline">IBS Management Guide</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Understanding Food Intolerances</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Probiotics: A Complete Guide</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}