"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, Pill, Utensils, Dot, Leaf, HeartPulse, Star, AlertCircle } from "lucide-react"

export default function DigestiveTreatmentOptions() {
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

    const tabs = ["Overview", "Medications", "Diet", "Procedures", "Alternative"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Understanding Digestive Treatment Options: Medications, Diet, and Procedures
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
                                <span className="text-sm">Updated on June 20, 2024</span>
                            </div>

                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                Digestive disorders require comprehensive treatment approaches tailored to each condition. This guide explores evidence-based medical treatments, dietary interventions, surgical options, and complementary therapies for gastrointestinal health. Learn how to navigate treatment decisions and work with your healthcare team to find the most effective solutions for your digestive concerns.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80"
                                    alt="Digestive health treatment options"
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
                                    <li>Treatment plans should be personalized based on diagnosis and symptom severity</li>
                                    <li>Dietary modifications can significantly impact digestive health outcomes</li>
                                    <li>Newer biologic medications have revolutionized IBD treatment</li>
                                    <li>Minimally invasive procedures now replace many traditional surgeries</li>
                                    <li>Multidisciplinary approaches yield the best long-term results</li>
                                </ul>
                            </div>

                            {/* Comprehensive Treatment Overview */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <HeartPulse className="w-8 h-8 text-blue-600 mr-2" />
                                    Comprehensive Treatment Overview
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Modern gastroenterology offers a spectrum of treatment options for digestive disorders. According to the <a href="#" className="text-blue-600 hover:underline">American Gastroenterological Association</a>, effective treatment combines:
                                </p>

                                <div className="grid md:grid-cols-3 gap-4 mb-6">
                                    <div className="bg-white border border-blue-200 rounded-lg p-4 text-center">
                                        <Pill className="w-10 h-10 mx-auto text-blue-600 mb-2" />
                                        <h3 className="font-bold">Medications</h3>
                                        <p className="text-sm text-gray-600">Targeted pharmaceutical therapies</p>
                                    </div>
                                    <div className="bg-white border border-green-200 rounded-lg p-4 text-center">
                                        <Utensils className="w-10 h-10 mx-auto text-green-600 mb-2" />
                                        <h3 className="font-bold">Dietary Therapy</h3>
                                        <p className="text-sm text-gray-600">Nutritional interventions</p>
                                    </div>
                                    <div className="bg-white border border-purple-200 rounded-lg p-4 text-center">
                                        <Dot className="w-10 h-10 mx-auto text-purple-600 mb-2" />
                                        <h3 className="font-bold">Procedures</h3>
                                        <p className="text-sm text-gray-600">Endoscopic & surgical options</p>
                                    </div>
                                </div>

                                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Treatment Selection Factors</h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>Specific diagnosis</li>
                                            <li>Disease severity</li>
                                            <li>Patient age and comorbidities</li>
                                        </ul>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>Treatment goals</li>
                                            <li>Patient preferences</li>
                                            <li>Cost and accessibility</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Pharmaceutical Treatments */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Pill className="w-8 h-8 text-blue-600 mr-2" />
                                    Pharmaceutical Treatments
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Medications play a crucial role in managing digestive disorders, from symptom relief to disease modification. The following table outlines common medication classes and their applications:
                                </p>

                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Medication Class</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Examples</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Conditions Treated</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Key Considerations</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 font-medium text-gray-900">Proton Pump Inhibitors</td>
                                                <td className="px-4 py-3">Omeprazole, Esomeprazole</td>
                                                <td className="px-4 py-3">GERD, ulcers</td>
                                                <td className="px-4 py-3">Long-term use requires monitoring</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 font-medium text-gray-900">5-ASAs</td>
                                                <td className="px-4 py-3">Mesalamine, Sulfasalazine</td>
                                                <td className="px-4 py-3">Ulcerative colitis</td>
                                                <td className="px-4 py-3">First-line for mild-moderate UC</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 font-medium text-gray-900">Biologics</td>
                                                <td className="px-4 py-3">Infliximab, Adalimumab</td>
                                                <td className="px-4 py-3">IBD, refractory cases</td>
                                                <td className="px-4 py-3">Require regular infusion/injection</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 font-medium text-gray-900">Antispasmodics</td>
                                                <td className="px-4 py-3">Hyoscyamine, Dicyclomine</td>
                                                <td className="px-4 py-3">IBS</td>
                                                <td className="px-4 py-3">Help with cramping and pain</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Important Safety Note:</h3>
                                    <p className="text-gray-700">
                                        Always consult with a gastroenterologist before starting or stopping any digestive medications. Some medications require gradual tapering and have significant withdrawal effects.
                                    </p>
                                </div>
                            </section>

                            {/* Dietary Interventions */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Utensils className="w-8 h-8 text-blue-600 mr-2" />
                                    Dietary Interventions
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Nutritional therapy is foundational for digestive health. Research shows dietary modifications can be as effective as medications for certain conditions:
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Therapeutic Diets</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>
                                                <span className="font-semibold">Low FODMAP:</span> Reduces fermentable carbs for IBS
                                            </li>
                                            <li>
                                                <span className="font-semibold">Gluten-free:</span> Essential for celiac disease
                                            </li>
                                            <li>
                                                <span className="font-semibold">Specific Carbohydrate Diet (SCD):</span> For IBD management
                                            </li>
                                            <li>
                                                <span className="font-semibold">GERD diet:</span> Avoids triggers like caffeine and citrus
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Key Nutritional Supplements</h3>
                                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                                            <div className="grid grid-cols-3 gap-2 text-sm font-medium mb-2 pb-2 border-b">
                                                <div>Supplement</div>
                                                <div>Benefit</div>
                                                <div>Dosage*</div>
                                            </div>
                                            <div className="grid grid-cols-3 gap-2 text-sm mb-1">
                                                <div>Probiotics</div>
                                                <div>Gut microbiome support</div>
                                                <div>1-10B CFU/day</div>
                                            </div>
                                            <div className="grid grid-cols-3 gap-2 text-sm mb-1 bg-gray-50 p-1">
                                                <div>L-Glutamine</div>
                                                <div>Gut lining repair</div>
                                                <div>5-15g/day</div>
                                            </div>
                                            <div className="grid grid-cols-3 gap-2 text-sm mb-1">
                                                <div>Peppermint oil</div>
                                                <div>IBS symptom relief</div>
                                                <div>0.2-0.4ml TID</div>
                                            </div>
                                            <div className="text-xs text-gray-500 mt-2">*Consult your doctor for personalized recommendations</div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Procedural Options */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Dot className="w-8 h-8 text-blue-600 mr-2" />
                                    Procedural & Surgical Options
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Advances in gastroenterology have led to minimally invasive procedures with faster recovery times:
                                </p>

                                <div className="space-y-6">
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Endoscopic Procedures</h3>
                                        </div>
                                        <div className="p-4">
                                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                                <li>
                                                    <span className="font-semibold">Colonoscopy:</span> Screening and polyp removal
                                                </li>
                                                <li>
                                                    <span className="font-semibold">ERCP:</span> Diagnose/treat bile/pancreatic duct issues
                                                </li>
                                                <li>
                                                    <span className="font-semibold">Capsule endoscopy:</span> Small bowel imaging
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Surgical Interventions</h3>
                                        </div>
                                        <div className="p-4">
                                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                                <li>
                                                    <span className="font-semibold">Laparoscopic cholecystectomy:</span> Gallbladder removal
                                                </li>
                                                <li>
                                                    <span className="font-semibold">Colectomy:</span> For severe IBD or cancer
                                                </li>
                                                <li>
                                                    <span className="font-semibold">Fundoplication:</span> For refractory GERD
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-blue-50 p-4 rounded-lg mt-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Recovery Timeline After Common Procedures</h3>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full">
                                            <thead>
                                                <tr className="bg-blue-100">
                                                    <th className="px-4 py-2 text-left">Procedure</th>
                                                    <th className="px-4 py-2 text-left">Hospital Stay</th>
                                                    <th className="px-4 py-2 text-left">Return to Work</th>
                                                    <th className="px-4 py-2 text-left">Full Recovery</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200">
                                                <tr>
                                                    <td className="px-4 py-2">Colonoscopy</td>
                                                    <td className="px-4 py-2">Same day</td>
                                                    <td className="px-4 py-2">Next day</td>
                                                    <td className="px-4 py-2">1-2 days</td>
                                                </tr>
                                                <tr className="bg-gray-50">
                                                    <td className="px-4 py-2">Laparoscopic Appendectomy</td>
                                                    <td className="px-4 py-2">1 day</td>
                                                    <td className="px-4 py-2">1-2 weeks</td>
                                                    <td className="px-4 py-2">2-4 weeks</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-2">Open Colectomy</td>
                                                    <td className="px-4 py-2">5-7 days</td>
                                                    <td className="px-4 py-2">4-6 weeks</td>
                                                    <td className="px-4 py-2">2-3 months</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </section>

                            {/* Complementary Therapies */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Complementary & Alternative Therapies</h2>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div className="border border-gray-200 rounded-lg p-4">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Mind-Body Approaches</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>Cognitive Behavioral Therapy (CBT) for IBS</li>
                                            <li>Gut-directed hypnotherapy</li>
                                            <li>Meditation and stress reduction</li>
                                            <li>Biofeedback for pelvic floor disorders</li>
                                        </ul>
                                    </div>
                                    <div className="border border-gray-200 rounded-lg p-4">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Herbal & Natural Remedies</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>Peppermint oil capsules (IBS)</li>
                                            <li>Aloe vera juice (GERD)</li>
                                            <li>Turmeric/curcumin (IBD inflammation)</li>
                                            <li>Slippery elm (gut lining support)</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-purple-50 border-l-4 border-purple-400 p-4">
                                    <h3 className="font-bold text-gray-900 mb-2">Important Consideration:</h3>
                                    <p className="text-gray-700">
                                        Always inform your gastroenterologist about any complementary therapies you're using, as some may interact with conventional treatments or affect diagnostic tests.
                                    </p>
                                </div>
                            </section>

                            {/* Creating a Treatment Plan */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Creating Your Personalized Treatment Plan</h2>

                                <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Step-by-Step Process</h3>
                                    <ol className="list-decimal list-inside text-gray-700 space-y-3">
                                        <li>
                                            <span className="font-semibold">Accurate Diagnosis:</span> Work with a gastroenterologist to identify the root cause of symptoms
                                        </li>
                                        <li>
                                            <span className="font-semibold">Set Treatment Goals:</span> Symptom relief, disease remission, improved quality of life
                                        </li>
                                        <li>
                                            <span className="font-semibold">Evaluate Options:</span> Consider efficacy, side effects, cost, and lifestyle fit
                                        </li>
                                        <li>
                                            <span className="font-semibold">Implement & Monitor:</span> Track progress and adjust as needed
                                        </li>
                                        <li>
                                            <span className="font-semibold">Long-term Management:</span> Prevention of flares and complications
                                        </li>
                                    </ol>
                                </div>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Questions to Ask Your Doctor</h3>
                                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                                        <li>What are the expected benefits of this treatment?</li>
                                        <li>What are the potential side effects or risks?</li>
                                        <li>How will we measure treatment success?</li>
                                        <li>Are there alternatives we should consider?</li>
                                        <li>How might this affect my other health conditions?</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Digestive health treatment has advanced significantly in recent years, offering more personalized and effective options than ever before. While medications remain crucial for many conditions, the integration of dietary therapies, procedural interventions, and lifestyle modifications provides a comprehensive approach to gastrointestinal wellness.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    Remember that treatment is not one-size-fits-all. What works exceptionally well for one person may not be the best choice for another. Regular follow-ups with your healthcare team and open communication about your treatment experience are key to finding the optimal approach for your digestive health.
                                </p>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "The future of digestive treatment lies in precision medicine - tailoring therapies to individual patients based on their unique genetic, microbiome, and lifestyle factors."
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
                                            Dr. James Wilson, MD
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600 mb-1">
                                        — Written by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            Emily Thompson
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600 flex items-center gap-1">
                                        — <Calendar className="w-3 h-3" />
                                        <a href="#" className="text-blue-600 hover:underline">
                                            Updated on June 20, 2024
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Newsletter Signup */}
                        <div className="bg-blue-50 rounded-lg p-6 mb-8">
                            <div className="mb-4">
                                <h3 className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-2">DIGESTIVE HEALTH NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get expert digestive health advice</h4>
                                <p className="text-gray-700 text-sm">
                                    Monthly updates on treatment options, research breakthroughs, and expert tips.
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

                        {/* Treatment Checklist */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Treatment Decision Checklist</h3>
                            <div className="space-y-3">
                                <div className="flex items-start">
                                    <input type="checkbox" className="mt-1 mr-2" />
                                    <span className="text-gray-700">Understand the diagnosis</span>
                                </div>
                                <div className="flex items-start">
                                    <input type="checkbox" className="mt-1 mr-2" />
                                    <span className="text-gray-700">Know all treatment options</span>
                                </div>
                                <div className="flex items-start">
                                    <input type="checkbox" className="mt-1 mr-2" />
                                    <span className="text-gray-700">Consider side effects</span>
                                </div>
                                <div className="flex items-start">
                                    <input type="checkbox" className="mt-1 mr-2" />
                                    <span className="text-gray-700">Evaluate cost/insurance</span>
                                </div>
                                <div className="flex items-start">
                                    <input type="checkbox" className="mt-1 mr-2" />
                                    <span className="text-gray-700">Discuss with healthcare team</span>
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
                                        AGA Treatment Guidelines
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-start">
                                        <span className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 text-xs">2</span>
                                        Dietary Therapy Handbook
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-start">
                                        <span className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 text-xs">3</span>
                                        Procedure Preparation Guides
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-start">
                                        <span className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 text-xs">4</span>
                                        Medication Side Effect Database
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Emergency Info */}
                        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
                                When to Seek Immediate Care
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
                                    Blood in vomit or stool
                                </li>
                                <li className="flex items-start">
                                    <span className="text-red-500 mr-2">•</span>
                                    High fever with digestive symptoms
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}