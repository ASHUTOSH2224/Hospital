"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, HeartPulse, Utensils, Pill, Leaf, Scale, Star, AlertCircle } from "lucide-react"

export default function ManagingDigestiveConditions() {
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

    const tabs = ["Overview", "IBS", "GERD", "IBD", "Celiac", "Prevention"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Managing Common Digestive Conditions: IBS, GERD, IBD & Celiac Disease
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
                                Digestive disorders affect millions worldwide, impacting quality of life and overall health. This comprehensive guide covers evidence-based strategies for managing irritable bowel syndrome (IBS), gastroesophageal reflux disease (GERD), inflammatory bowel disease (IBD), and celiac disease. Learn about symptoms, treatments, dietary approaches, and lifestyle modifications that can help you regain control of your digestive health.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1535914254981-b5012eebbd15?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                                    alt="Digestive system health concept"
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
                                    <li>Up to 70% of IBS patients see improvement with dietary changes like low FODMAP</li>
                                    <li>GERD symptoms can often be managed with lifestyle modifications alone</li>
                                    <li>IBD requires medical treatment but diet plays a crucial supporting role</li>
                                    <li>Strict gluten avoidance is the only treatment for celiac disease</li>
                                    <li>Probiotics show promise for several digestive conditions</li>
                                </ul>
                            </div>

                            {/* Understanding Digestive Conditions */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <HeartPulse className="w-8 h-8 text-blue-600 mr-2" />
                                    Understanding Digestive Conditions
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Digestive disorders range from functional conditions like IBS to autoimmune diseases like celiac. According to the <a href="#" className="text-blue-600 hover:underline">World Gastroenterology Organisation</a>, digestive diseases affect 40% of the global population, with prevalence increasing in developed nations.
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <AlertCircle className="w-5 h-5 text-blue-500 mr-2" />
                                            Functional Disorders
                                        </h3>
                                        <p className="text-gray-700">
                                            Conditions like IBS and functional dyspepsia involve digestive system malfunctions without structural abnormalities. They're diagnosed based on symptom patterns.
                                        </p>
                                    </div>
                                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
                                            Structural Disorders
                                        </h3>
                                        <p className="text-gray-700">
                                            Conditions like GERD, IBD, and celiac involve physical changes to the digestive tract. These often require medical imaging or biopsies for diagnosis.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Prevalence of Common Digestive Conditions</h3>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full">
                                            <thead>
                                                <tr className="bg-blue-100">
                                                    <th className="px-4 py-2 text-left">Condition</th>
                                                    <th className="px-4 py-2 text-left">Global Prevalence</th>
                                                    <th className="px-4 py-2 text-left">Onset Age</th>
                                                    <th className="px-4 py-2 text-left">Gender Bias</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200">
                                                <tr>
                                                    <td className="px-4 py-2">IBS</td>
                                                    <td className="px-4 py-2">10-15%</td>
                                                    <td className="px-4 py-2">Under 50</td>
                                                    <td className="px-4 py-2">Female 2:1</td>
                                                </tr>
                                                <tr className="bg-gray-50">
                                                    <td className="px-4 py-2">GERD</td>
                                                    <td className="px-4 py-2">20% (weekly)</td>
                                                    <td className="px-4 py-2">Any age</td>
                                                    <td className="px-4 py-2">Equal</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-2">IBD</td>
                                                    <td className="px-4 py-2">0.3%</td>
                                                    <td className="px-4 py-2">15-35</td>
                                                    <td className="px-4 py-2">Slight female</td>
                                                </tr>
                                                <tr className="bg-gray-50">
                                                    <td className="px-4 py-2">Celiac</td>
                                                    <td className="px-4 py-2">1%</td>
                                                    <td className="px-4 py-2">Any age</td>
                                                    <td className="px-4 py-2">Female 2:1</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </section>

                            {/* IBS Management */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Utensils className="w-8 h-8 text-blue-600 mr-2" />
                                    Irritable Bowel Syndrome (IBS)
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    IBS is a functional gastrointestinal disorder characterized by abdominal pain and altered bowel habits. While the exact cause is unknown, potential factors include:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>Altered gut motility</li>
                                    <li>Visceral hypersensitivity</li>
                                    <li>Gut-brain axis dysfunction</li>
                                    <li>Microbiome imbalances</li>
                                    <li>Food sensitivities</li>
                                </ul>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Dietary Approaches for IBS</h3>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div className="border border-gray-200 rounded-lg p-4">
                                        <h4 className="font-bold text-lg text-gray-900 mb-2">Low FODMAP Diet</h4>
                                        <p className="text-gray-700 mb-2">
                                            Eliminates fermentable carbohydrates that can trigger symptoms. Shown to help 70% of IBS patients:
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                                            <li>2-6 week elimination phase</li>
                                            <li>Systematic reintroduction</li>
                                            <li>Personalization phase</li>
                                        </ul>
                                    </div>
                                    <div className="border border-gray-200 rounded-lg p-4">
                                        <h4 className="font-bold text-lg text-gray-900 mb-2">Other Dietary Strategies</h4>
                                        <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                                            <li>Small, frequent meals</li>
                                            <li>Adequate fiber (soluble preferred)</li>
                                            <li>Peppermint oil capsules</li>
                                            <li>Probiotics (especially Bifidobacteria)</li>
                                            <li>Reduction of caffeine/alcohol</li>
                                        </ul>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Medical Treatments</h3>

                                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                                        <div className="p-2">
                                            <div className="font-bold text-blue-600">Antispasmodics</div>
                                            <div className="text-sm">(e.g., hyoscine)</div>
                                        </div>
                                        <div className="p-2">
                                            <div className="font-bold text-blue-600">Antidiarrheals</div>
                                            <div className="text-sm">(e.g., loperamide)</div>
                                        </div>
                                        <div className="p-2">
                                            <div className="font-bold text-blue-600">Laxatives</div>
                                            <div className="text-sm">(e.g., PEG)</div>
                                        </div>
                                        <div className="p-2">
                                            <div className="font-bold text-blue-600">Antidepressants</div>
                                            <div className="text-sm">(low-dose TCAs)</div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* GERD Management */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Pill className="w-8 h-8 text-blue-600 mr-2" />
                                    Gastroesophageal Reflux Disease (GERD)
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    GERD occurs when stomach acid frequently flows back into the esophagus. Chronic untreated GERD can lead to complications like Barrett's esophagus.
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Lifestyle Modifications</h3>
                                        <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2">
                                            <li>Elevate head of bed 6-8 inches</li>
                                            <li>Avoid lying down within 3 hours of eating</li>
                                            <li>Lose weight if overweight</li>
                                            <li>Quit smoking</li>
                                            <li>Identify and avoid trigger foods</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Common Trigger Foods</h3>
                                        <div className="grid grid-cols-2 gap-2">
                                            <div className="bg-red-50 p-2 rounded">Tomatoes</div>
                                            <div className="bg-red-50 p-2 rounded">Citrus</div>
                                            <div className="bg-red-50 p-2 rounded">Chocolate</div>
                                            <div className="bg-red-50 p-2 rounded">Mint</div>
                                            <div className="bg-red-50 p-2 rounded">Caffeine</div>
                                            <div className="bg-red-50 p-2 rounded">Alcohol</div>
                                            <div className="bg-red-50 p-2 rounded">Fatty foods</div>
                                            <div className="bg-red-50 p-2 rounded">Spicy foods</div>
                                        </div>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Treatment Options</h3>

                                <div className="space-y-4">
                                    <div className="border-l-4 border-blue-400 pl-4">
                                        <h4 className="font-bold text-lg text-gray-900">Antacids</h4>
                                        <p className="text-gray-700">Quick relief (Tums, Maalox)</p>
                                    </div>
                                    <div className="border-l-4 border-blue-400 pl-4">
                                        <h4 className="font-bold text-lg text-gray-900">H2 Blockers</h4>
                                        <p className="text-gray-700">Reduce acid production (Famotidine)</p>
                                    </div>
                                    <div className="border-l-4 border-blue-400 pl-4">
                                        <h4 className="font-bold text-lg text-gray-900">PPIs</h4>
                                        <p className="text-gray-700">Strong acid suppression (Omeprazole)</p>
                                    </div>
                                    <div className="border-l-4 border-blue-400 pl-4">
                                        <h4 className="font-bold text-lg text-gray-900">Surgery</h4>
                                        <p className="text-gray-700">For severe cases (Fundoplication)</p>
                                    </div>
                                </div>
                            </section>

                            {/* IBD Management */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Leaf className="w-8 h-8 text-blue-600 mr-2" />
                                    Inflammatory Bowel Disease (IBD)
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    IBD includes Crohn's disease and ulcerative colitis - chronic inflammatory conditions of the GI tract. While diet doesn't cause IBD, it plays a crucial role in management.
                                </p>

                                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Crohn's vs Ulcerative Colitis</h3>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full">
                                            <thead>
                                                <tr className="bg-blue-100">
                                                    <th className="px-4 py-2 text-left">Feature</th>
                                                    <th className="px-4 py-2 text-left">Crohn's Disease</th>
                                                    <th className="px-4 py-2 text-left">Ulcerative Colitis</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200">
                                                <tr>
                                                    <td className="px-4 py-2">Location</td>
                                                    <td className="px-4 py-2">Any part of GI tract</td>
                                                    <td className="px-4 py-2">Colon only</td>
                                                </tr>
                                                <tr className="bg-gray-50">
                                                    <td className="px-4 py-2">Inflammation</td>
                                                    <td className="px-4 py-2">Transmural</td>
                                                    <td className="px-4 py-2">Mucosal only</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-2">Common Symptoms</td>
                                                    <td className="px-4 py-2">Diarrhea, pain, weight loss</td>
                                                    <td className="px-4 py-2">Bloody diarrhea, urgency</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Nutritional Considerations</h3>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h4 className="font-bold text-lg text-gray-900 mb-2">During Flares</h4>
                                        <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                                            <li>Low residue/fiber diet</li>
                                            <li>Avoid dairy if lactose intolerant</li>
                                            <li>Small, frequent meals</li>
                                            <li>Oral nutrition supplements if needed</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-gray-900 mb-2">Remission</h4>
                                        <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                                            <li>Balanced, varied diet</li>
                                            <li>Adequate protein</li>
                                            <li>Monitor for deficiencies (B12, D, iron)</li>
                                            <li>Consider probiotics</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Celiac Disease */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Scale className="w-8 h-8 text-blue-600 mr-2" />
                                    Celiac Disease Management
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Celiac disease is an autoimmune disorder triggered by gluten ingestion. Strict, lifelong gluten avoidance is the only treatment.
                                </p>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Gluten-Free Diet Essentials</h3>
                                    <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                                        <li>Avoid wheat, barley, rye</li>
                                        <li>Choose certified gluten-free oats</li>
                                        <li>Watch for hidden gluten (sauces, medications)</li>
                                        <li>Prevent cross-contamination</li>
                                        <li>Read all labels carefully</li>
                                    </ul>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Gluten-Free Alternatives</h3>

                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                                    <div className="bg-white p-3 rounded-lg border border-gray-200 text-center">
                                        <div className="font-bold">Rice</div>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg border border-gray-200 text-center">
                                        <div className="font-bold">Quinoa</div>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg border border-gray-200 text-center">
                                        <div className="font-bold">Buckwheat</div>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg border border-gray-200 text-center">
                                        <div className="font-bold">Millet</div>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg border border-gray-200 text-center">
                                        <div className="font-bold">Corn</div>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg border border-gray-200 text-center">
                                        <div className="font-bold">Amaranth</div>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg border border-gray-200 text-center">
                                        <div className="font-bold">Sorghum</div>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg border border-gray-200 text-center">
                                        <div className="font-bold">Teff</div>
                                    </div>
                                </div>
                            </section>

                            {/* Prevention Strategies */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Prevention Strategies</h2>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div className="bg-green-50 p-4 rounded-lg">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">Gut-Healthy Lifestyle</h3>
                                        <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                                            <li>Manage stress (mindfulness, yoga)</li>
                                            <li>Regular physical activity</li>
                                            <li>Adequate sleep (7-9 hours)</li>
                                            <li>Stay hydrated</li>
                                            <li>Don't smoke</li>
                                        </ul>
                                    </div>
                                    <div className="bg-green-50 p-4 rounded-lg">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">Dietary Prevention</h3>
                                        <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                                            <li>High fiber intake</li>
                                            <li>Diverse plant foods</li>
                                            <li>Fermented foods</li>
                                            <li>Omega-3 fatty acids</li>
                                            <li>Polyphenol-rich foods</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* When to See a Doctor */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">When to Seek Medical Attention</h2>

                                <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Red Flag Symptoms</h3>
                                    <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                                        <li>Unexplained weight loss</li>
                                        <li>Rectal bleeding</li>
                                        <li>Persistent vomiting</li>
                                        <li>Difficulty swallowing</li>
                                        <li>Nocturnal diarrhea</li>
                                        <li>Family history of digestive cancers</li>
                                    </ul>
                                </div>

                                <p className="text-gray-700">
                                    Early diagnosis and treatment can prevent complications. Don't hesitate to consult a gastroenterologist if you experience persistent or severe digestive symptoms.
                                </p>
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
                                            Dr. Emily Wilson, MD
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600 mb-1">
                                        — Written by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            Sarah Thompson
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
                                <h3 className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-2">DIGESTIVE HEALTH NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get expert digestive health tips</h4>
                                <p className="text-gray-700 text-sm">
                                    Monthly updates on managing digestive conditions, recipes, and the latest research.
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
                                    <div className="flex-shrink-0 h-5 w-5 text-blue-500 mt-0.5">
                                        <Check className="h-5 w-5" />
                                    </div>
                                    <p className="ml-2 text-sm text-gray-700">Bloating + diarrhea = Consider IBS</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 h-5 w-5 text-blue-500 mt-0.5">
                                        <Check className="h-5 w-5" />
                                    </div>
                                    <p className="ml-2 text-sm text-gray-700">Heartburn after meals = Possible GERD</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 h-5 w-5 text-blue-500 mt-0.5">
                                        <Check className="h-5 w-5" />
                                    </div>
                                    <p className="ml-2 text-sm text-gray-700">Blood in stool = Needs evaluation</p>
                                </div>
                            </div>
                        </div>

                        {/* Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Helpful Resources</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-start">
                                        <span className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 text-xs">1</span>
                                        Low FODMAP Food List
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-start">
                                        <span className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 text-xs">2</span>
                                        GERD-Friendly Recipes
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-start">
                                        <span className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 text-xs">3</span>
                                        IBD Flare Tracking App
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-start">
                                        <span className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 text-xs">4</span>
                                        Celiac Disease Foundation
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Emergency Info */}
                        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
                                Emergency Symptoms
                            </h3>
                            <ul className="space-y-2 text-sm text-gray-700">
                                <li className="flex items-start">
                                    <span className="text-red-500 mr-2">•</span>
                                    Severe abdominal pain
                                </li>
                                <li className="flex items-start">
                                    <span className="text-red-500 mr-2">•</span>
                                    Inability to keep liquids down
                                </li>
                                <li className="flex items-start">
                                    <span className="text-red-500 mr-2">•</span>
                                    Black/tarry stools
                                </li>
                                <li className="flex items-start">
                                    <span className="text-red-500 mr-2">•</span>
                                    High fever with diarrhea
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}