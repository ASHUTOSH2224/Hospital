"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, HeartPulse, Shield, AlertTriangle, BookOpen, Stethoscope, Leaf, Scale, Star } from "lucide-react"

export default function DigestiveHealthGuide() {
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

    const tabs = ["Risk Factors", "Prevention", "Symptoms", "Treatments"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Understanding Digestive Health: Risk Factors and Prevention Strategies
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
                                Digestive health is fundamental to overall wellbeing, affecting everything from nutrient absorption to immune function. This comprehensive guide explores the key risk factors for digestive disorders, prevention strategies, and evidence-based approaches to maintaining optimal gut health throughout life.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80"
                                    alt="Healthy digestive system concept with fruits and vegetables"
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
                                    <li>60-70 million Americans are affected by digestive diseases annually</li>
                                    <li>Diet accounts for approximately 40% of modifiable digestive health risks</li>
                                    <li>Gut microbiome diversity decreases with age but can be maintained</li>
                                    <li>Chronic stress can impair digestion as much as poor dietary choices</li>
                                    <li>Early detection of digestive issues prevents 85% of serious complications</li>
                                </ul>
                            </div>

                            {/* Why Digestive Health Matters */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <HeartPulse className="w-8 h-8 text-blue-600 mr-2" />
                                    The Critical Role of Digestive Health
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    The digestive system does far more than process food—it's central to immune function (housing 70% of immune cells), neurotransmitter production (90% of serotonin is made in the gut), and metabolic regulation. According to a <a href="#" className="text-blue-600 hover:underline">2024 meta-analysis in Gut Microbes</a>, individuals with balanced gut microbiomes experience:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>23% lower incidence of chronic inflammatory conditions</li>
                                    <li>31% reduction in antibiotic-associated diarrhea</li>
                                    <li>18% better nutrient absorption efficiency</li>
                                    <li>27% lower risk of developing food intolerances</li>
                                </ul>

                                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">The Gut-Brain Axis</h3>
                                    <p className="text-gray-700">
                                        The bidirectional communication between the central nervous system and the enteric nervous system of the gut influences mood, cognition, and mental health. Disruptions in this axis are linked to anxiety, depression, and even neurodegenerative diseases.
                                    </p>
                                </div>
                            </section>

                            {/* Major Risk Factors */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <AlertTriangle className="w-8 h-8 text-blue-600 mr-2" />
                                    Major Risk Factors for Digestive Disorders
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Digestive health risks fall into three primary categories: lifestyle factors, genetic predispositions, and environmental exposures. Understanding these can help tailor prevention strategies.
                                </p>

                                {/* Risk Factors Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Specific Factors</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Associated Conditions</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Population Impact</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 font-medium text-gray-900">Dietary</td>
                                                <td className="px-4 py-3">
                                                    <ul className="list-disc list-inside">
                                                        <li>Low fiber intake</li>
                                                        <li>High processed foods</li>
                                                        <li>Artificial sweeteners</li>
                                                    </ul>
                                                </td>
                                                <td className="px-4 py-3">IBS, IBD, GERD</td>
                                                <td className="px-4 py-3">Affects ~45% of adults</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 font-medium text-gray-900">Lifestyle</td>
                                                <td className="px-4 py-3">
                                                    <ul className="list-disc list-inside">
                                                        <li>Sedentary behavior</li>
                                                        <li>Chronic stress</li>
                                                        <li>Poor sleep</li>
                                                    </ul>
                                                </td>
                                                <td className="px-4 py-3">Gastritis, ulcers</td>
                                                <td className="px-4 py-3">Affects ~60% of urban populations</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 font-medium text-gray-900">Genetic</td>
                                                <td className="px-4 py-3">
                                                    <ul className="list-disc list-inside">
                                                        <li>Family history of IBD</li>
                                                        <li>Lactose intolerance</li>
                                                        <li>Celiac disease genes</li>
                                                    </ul>
                                                </td>
                                                <td className="px-4 py-3">Crohn's, Celiac</td>
                                                <td className="px-4 py-3">5-15% depending on condition</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 font-medium text-gray-900">Environmental</td>
                                                <td className="px-4 py-3">
                                                    <ul className="list-disc list-inside">
                                                        <li>Antibiotic overuse</li>
                                                        <li>Chemical exposures</li>
                                                        <li>Food additives</li>
                                                    </ul>
                                                </td>
                                                <td className="px-4 py-3">Dysbiosis, leaky gut</td>
                                                <td className="px-4 py-3">Increasing prevalence</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">1</span>
                                            Most Significant Modifiable Risk: Diet
                                        </h3>
                                        <p className="text-gray-700">
                                            The Standard American Diet (high in processed foods, low in fiber) alters gut microbiota within 3-4 days, increasing inflammation markers by 27% according to NIH studies. Even short-term dietary changes can significantly impact microbial diversity.
                                        </p>
                                    </div>
                                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-yellow-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">2</span>
                                            Emerging Concern: Antibiotic Resistance
                                        </h3>
                                        <p className="text-gray-700">
                                            Overuse of antibiotics permanently alters gut flora, with some strains never recovering. A single course of antibiotics can reduce microbial diversity by 30% for up to 4 months, increasing susceptibility to C. difficile infections.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Prevention Strategies */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Shield className="w-8 h-8 text-blue-600 mr-2" />
                                    Evidence-Based Prevention Strategies
                                </h2>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Dietary Interventions</h3>
                                        <ol className="list-decimal list-inside text-gray-700 space-y-2">
                                            <li><strong>Increase fiber diversity:</strong> Aim for 30+ plant types weekly</li>
                                            <li><strong>Fermented foods:</strong> 2-3 servings daily (kefir, kimchi, etc.)</li>
                                            <li><strong>Polyphenol-rich foods:</strong> Berries, dark chocolate, green tea</li>
                                            <li><strong>Prebiotic foods:</strong> Garlic, onions, leeks, asparagus</li>
                                        </ol>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Lifestyle Modifications</h3>
                                        <ol className="list-decimal list-inside text-gray-700 space-y-2">
                                            <li><strong>Stress management:</strong> Daily meditation reduces gut inflammation</li>
                                            <li><strong>Exercise:</strong> 150 mins/week enhances microbial diversity</li>
                                            <li><strong>Sleep hygiene:</strong> 7-9 hours maintains circadian gut rhythms</li>
                                            <li><strong>Hydration:</strong> 2L water/day supports mucosal lining</li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Clinical Recommendation:</h3>
                                    <p className="text-gray-700">
                                        The American Gastroenterological Association now recommends routine microbiome testing for patients with persistent digestive symptoms, as personalized probiotics show 42% better outcomes than generic strains.
                                    </p>
                                </div>

                                {/* Supplement Guide */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Supplement</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Evidence Level</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Recommended For</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dosage</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 font-medium text-gray-900">L-Glutamine</td>
                                                <td className="px-4 py-3">Strong (15 RCTs)</td>
                                                <td className="px-4 py-3">Leaky gut, IBS</td>
                                                <td className="px-4 py-3">5g twice daily</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 font-medium text-gray-900">Saccharomyces boulardii</td>
                                                <td className="px-4 py-3">Moderate</td>
                                                <td className="px-4 py-3">Antibiotic recovery</td>
                                                <td className="px-4 py-3">10B CFU/day</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 font-medium text-gray-900">Zinc Carnosine</td>
                                                <td className="px-4 py-3">Strong (8 RCTs)</td>
                                                <td className="px-4 py-3">Gastritis, ulcers</td>
                                                <td className="px-4 py-3">75mg/day</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            {/* Age-Specific Recommendations */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Age-Specific Digestive Health Considerations</h2>

                                <div className="space-y-6">
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Children (0-12 years)</h3>
                                        </div>
                                        <div className="p-4">
                                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                                <li>Microbiome establishes by age 3—vaginal delivery and breastfeeding critical</li>
                                                <li>Early antibiotic use increases allergy risk by 40%</li>
                                                <li>Introduce diverse foods before age 1 to prevent picky eating</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Adults (20-50 years)</h3>
                                        </div>
                                        <div className="p-4">
                                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                                <li>Stress management prevents 60% of functional digestive disorders</li>
                                                <li>Alcohol moderation preserves gut lining integrity</li>
                                                <li>Regular screening for those with family history of GI cancers</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Seniors (60+ years)</h3>
                                        </div>
                                        <div className="p-4">
                                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                                <li>Stomach acid decreases by 60%—digestive enzymes often needed</li>
                                                <li>Fiber needs increase but tolerance may decrease</li>
                                                <li>Probiotic supplementation reduces medication side effects</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Warning Signs */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">When to Seek Medical Attention</h2>

                                <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Red Flag Symptoms</h3>
                                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                                        <li>Unexplained weight loss (5%+ in 6 months)</li>
                                        <li>Rectal bleeding or black stools</li>
                                        <li>Severe abdominal pain waking you at night</li>
                                        <li>Difficulty swallowing progressing over weeks</li>
                                        <li>Persistent vomiting or diarrhea lasting 7+ days</li>
                                    </ul>
                                </div>

                                <p className="text-gray-700">
                                    The American College of Gastroenterology recommends colon cancer screening starting at age 45 for average-risk individuals, or earlier for those with family history or persistent symptoms. New non-invasive tests like FIT (fecal immunochemical test) have 90% accuracy for detecting blood.
                                </p>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Integrative Approach to Digestive Wellness</h2>

                                <p className="text-gray-700 mb-4">
                                    Optimal digestive health requires a systems biology approach—considering diet, lifestyle, environment, and individual biochemistry. Emerging research on the gut-brain-skin axis reveals how digestive imbalances manifest throughout the body.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    Personalized nutrition based on microbiome analysis represents the future of digestive healthcare. A 2023 Stanford study showed customized dietary interventions resolved 68% of "treatment-resistant" IBS cases when traditional approaches failed.
                                </p>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "Your gut is not just a food processor—it's the control center for immunity, metabolism, and even emotions. Treat it with the same care you would your brain or heart."
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
                                            Dr. Emily Rodriguez, MD
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600 mb-1">
                                        — Written by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            David Thompson
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
                                <h3 className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-2">HEALTH NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get digestive health tips</h4>
                                <p className="text-gray-700 text-sm">
                                    Weekly science-backed advice on gut health, microbiome research, and prevention strategies.
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
                                            <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80" alt="Healthy food" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">The Gut-Healing Diet Protocol</h4>
                                            <p className="text-sm text-gray-600">5 min read</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80" alt="Probiotics" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Probiotics vs Prebiotics: What's the Difference?</h4>
                                            <p className="text-sm text-gray-600">7 min read</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Symptom Checker */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Common Symptoms Guide</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span className="font-medium">Symptom</span>
                                    <span className="font-medium">Possible Causes</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Chronic bloating</span>
                                    <span className="text-blue-600">SIBO, intolerances</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Heartburn</span>
                                    <span className="text-blue-600">GERD, low acid</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Alternating diarrhea/constipation</span>
                                    <span className="text-blue-600">IBS, dysbiosis</span>
                                </div>
                            </div>
                        </div>

                        {/* Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Trusted Resources</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-center">
                                        <BookOpen className="w-4 h-4 mr-2" />
                                        American Gastroenterological Association
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-center">
                                        <Stethoscope className="w-4 h-4 mr-2" />
                                        Gut Microbiota for Health
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-center">
                                        <Leaf className="w-4 h-4 mr-2" />
                                        International Foundation for GI Disorders
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