"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, ClipboardList, HeartPulse, Stethoscope, TestTube2, Pill, ArrowRight } from "lucide-react"

export default function ComprehensiveDigestiveEvaluations() {
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

    const tabs = ["Overview", "Tests", "Preparation", "Results"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Comprehensive Digestive Evaluations: What to Expect During Your Assessment
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
                                Digestive health evaluations are comprehensive assessments designed to identify the root causes of gastrointestinal symptoms. These evaluations combine advanced diagnostic tests with detailed clinical assessments to provide a complete picture of your digestive function. This guide will walk you through what to expect during your digestive health assessment.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                                    alt="Doctor discussing digestive health with patient"
                                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                                    style={{ maxHeight: '500px' }}
                                />
                            </div>

                            {/* Key Takeaways */}
                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
                                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                    <ClipboardList className="w-5 h-5 text-blue-600 mr-2" />
                                    Key Takeaways
                                </h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>Comprehensive evaluations typically include 5-7 different diagnostic tests</li>
                                    <li>Preparation often requires dietary changes 3-5 days before testing</li>
                                    <li>New microbiome analysis can reveal gut bacteria imbalances</li>
                                    <li>Functional testing assesses how well your digestive system works</li>
                                    <li>Results are typically available within 7-10 business days</li>
                                </ul>
                            </div>

                            {/* Why Digestive Evaluations Matter */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <HeartPulse className="w-8 h-8 text-blue-600 mr-2" />
                                    Why Comprehensive Digestive Evaluations Matter
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Digestive issues affect approximately 70 million Americans, with many cases going undiagnosed or improperly treated. A <a href="#" className="text-blue-600 hover:underline">2023 study in Gastroenterology</a> found that comprehensive evaluations led to:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>More accurate diagnoses (up to 89% accuracy vs 62% with standard testing)</li>
                                    <li>Better treatment outcomes (73% symptom improvement vs 45% with standard care)</li>
                                    <li>Reduced need for invasive procedures (38% fewer colonoscopies)</li>
                                    <li>Earlier detection of serious conditions (like celiac disease and IBD)</li>
                                </ul>

                                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">When to Consider a Comprehensive Evaluation</h3>
                                    <p className="text-gray-700">
                                        You may benefit from a full digestive assessment if you experience persistent symptoms like bloating, diarrhea, constipation, abdominal pain, or unexplained weight changes that haven't improved with basic treatments.
                                    </p>
                                </div>
                            </section>

                            {/* Components of Digestive Evaluation */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Stethoscope className="w-8 h-8 text-blue-600 mr-2" />
                                    Components of a Comprehensive Digestive Evaluation
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    A complete digestive health assessment typically includes these components:
                                </p>

                                {/* Evaluation Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Component</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purpose</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">What It Reveals</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            {/* Row 1 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Comprehensive Health History</td>
                                                <td className="px-4 py-3">Identify patterns and risk factors</td>
                                                <td className="px-4 py-3 whitespace-nowrap">45-60 min</td>
                                                <td className="px-4 py-3">Family history, symptom patterns, lifestyle factors</td>
                                            </tr>
                                            {/* Row 2 */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Physical Examination</td>
                                                <td className="px-4 py-3">Assess abdominal health</td>
                                                <td className="px-4 py-3 whitespace-nowrap">15-20 min</td>
                                                <td className="px-4 py-3">Tenderness, organ enlargement, abnormal sounds</td>
                                            </tr>
                                            {/* Row 3 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Comprehensive Stool Analysis</td>
                                                <td className="px-4 py-3">Evaluate gut microbiome and digestion</td>
                                                <td className="px-4 py-3 whitespace-nowrap">N/A (lab test)</td>
                                                <td className="px-4 py-3">Digestive enzymes, gut bacteria, inflammation markers</td>
                                            </tr>
                                            {/* Row 4 */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Food Sensitivity Testing</td>
                                                <td className="px-4 py-3">Identify immune reactions to foods</td>
                                                <td className="px-4 py-3 whitespace-nowrap">N/A (blood test)</td>
                                                <td className="px-4 py-3">IgG and IgA reactions to 96+ foods</td>
                                            </tr>
                                            {/* Row 5 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Breath Testing</td>
                                                <td className="px-4 py-3">Detect bacterial overgrowth</td>
                                                <td className="px-4 py-3 whitespace-nowrap">2-3 hours</td>
                                                <td className="px-4 py-3">SIBO (small intestinal bacterial overgrowth)</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                {/* Diagnostic Highlights */}
                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">1</span>
                                            Advanced Stool Testing
                                        </h3>
                                        <p className="text-gray-700">
                                            Modern stool tests can analyze over 50 biomarkers including digestive enzymes, inflammatory markers, and the complete gut microbiome profile with identification of 500+ bacterial species.
                                        </p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">2</span>
                                            Hydrogen/Methane Breath Testing
                                        </h3>
                                        <p className="text-gray-700">
                                            This non-invasive test helps diagnose SIBO (small intestinal bacterial overgrowth) and carbohydrate malabsorption by measuring gases produced by gut bacteria after consuming a test solution.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Preparation Guide */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Preparation Guide for Digestive Testing</h2>

                                <p className="text-gray-700 mb-4">
                                    Proper preparation ensures accurate test results. Follow these guidelines in the days before your evaluation:
                                </p>

                                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                                    <div className="grid grid-cols-4 gap-4 text-center font-medium mb-2">
                                        <div>Days Before</div>
                                        <div>Dietary Changes</div>
                                        <div>Medication</div>
                                        <div>Other Instructions</div>
                                    </div>
                                    <div className="grid grid-cols-4 gap-4 text-center mb-1 text-sm">
                                        <div className="font-medium">5-7 days</div>
                                        <div>Reduce high-fiber foods</div>
                                        <div>Continue most meds</div>
                                        <div>Note all symptoms</div>
                                    </div>
                                    <div className="grid grid-cols-4 gap-4 text-center mb-1 text-sm bg-blue-50 p-1 rounded">
                                        <div className="font-medium">3 days</div>
                                        <div>Avoid probiotics</div>
                                        <div>Stop laxatives/antacids</div>
                                        <div>Collect supplies</div>
                                    </div>
                                    <div className="grid grid-cols-4 gap-4 text-center mb-1 text-sm">
                                        <div className="font-medium">24 hours</div>
                                        <div>Clear liquids only</div>
                                        <div>As directed</div>
                                        <div>Fasting required</div>
                                    </div>
                                    <div className="grid grid-cols-4 gap-4 text-center text-sm">
                                        <div className="font-medium">Test day</div>
                                        <div>Water only</div>
                                        <div>Approved meds only</div>
                                        <div>Arrive 30 min early</div>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Important Note:</h3>
                                    <p className="text-gray-700">
                                        Preparation requirements vary by test. Always follow the specific instructions provided by your healthcare provider. Some tests may require antibiotic or probiotic discontinuation 4-6 weeks beforehand.
                                    </p>
                                </div>
                            </section>

                            {/* What to Expect During Testing */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">What to Expect During Testing</h2>

                                <div className="space-y-6">
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Initial Consultation (60-90 minutes)</h3>
                                        </div>
                                        <div className="p-4">
                                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                                <li>Detailed review of medical history and symptoms</li>
                                                <li>Discussion of dietary habits and lifestyle factors</li>
                                                <li>Physical examination focusing on abdominal assessment</li>
                                                <li>Development of personalized testing plan</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Diagnostic Testing (Varies by test)</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-4">
                                                <h4 className="font-medium text-gray-900 mb-2">Blood Tests</h4>
                                                <p className="text-gray-700">Typically takes 5-10 minutes for sample collection. May test for celiac disease, food antibodies, nutritional deficiencies, and inflammation markers.</p>
                                            </div>
                                            <div className="mb-4">
                                                <h4 className="font-medium text-gray-900 mb-2">Breath Testing</h4>
                                                <p className="text-gray-700">2-3 hour procedure where you drink a sugar solution and provide breath samples every 15 minutes to detect bacterial overgrowth.</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900 mb-2">Stool Collection</h4>
                                                <p className="text-gray-700">Done at home with provided collection kit. Requires proper handling and timely delivery to lab (usually within 24 hours of collection).</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Understanding Your Results */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Your Test Results</h2>

                                <p className="text-gray-700 mb-6">
                                    Digestive evaluation results typically include several components that together create a complete picture of your gastrointestinal health:
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Common Findings</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Microbiome imbalances (dysbiosis)</li>
                                            <li>Digestive enzyme deficiencies</li>
                                            <li>Food sensitivities or intolerances</li>
                                            <li>Intestinal permeability ("leaky gut")</li>
                                            <li>Inflammation markers</li>
                                            <li>Pathogen overgrowth (bacteria, yeast, parasites)</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Result Timeframes</h3>
                                        <ol className="list-decimal list-inside text-gray-700 space-y-2">
                                            <li>Blood tests: 3-5 business days</li>
                                            <li>Stool analysis: 7-10 business days</li>
                                            <li>Breath tests: 5-7 business days</li>
                                            <li>Genetic testing: 2-3 weeks</li>
                                            <li>Comprehensive report: 10-14 days after all tests complete</li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Sample Results Interpretation</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-start">
                                            <div className="bg-blue-100 p-2 rounded-full mr-3">
                                                <TestTube2 className="w-5 h-5 text-blue-600" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900">Elevated Calprotectin (Stool Test)</h4>
                                                                                                  <p className="text-gray-700">Indicates intestinal inflammation. Values &gt;50 μg/g suggest inflammatory bowel disease may need to be ruled out.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="bg-blue-100 p-2 rounded-full mr-3">
                                                <Pill className="w-5 h-5 text-blue-600" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900">Low Pancreatic Elastase (Stool Test)</h4>
                                                <p className="text-gray-700">Suggests pancreatic insufficiency. Values 200 μg/g may indicate need for digestive enzyme supplementation.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Next Steps After Diagnosis */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Next Steps After Your Diagnosis</h2>

                                <div className="space-y-6">
                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2 text-xl">1. Personalized Treatment Plan</h3>
                                        <p className="text-gray-700 mb-4">
                                            Based on your results, your healthcare provider will develop a customized plan that may include:
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2">
                                            <li>Targeted dietary modifications (elimination diet, low FODMAP, etc.)</li>
                                            <li>Supplement protocols (probiotics, enzymes, nutrients)</li>
                                            <li>Lifestyle recommendations (stress management, sleep optimization)</li>
                                            <li>Medications if needed (antibiotics, anti-inflammatories)</li>
                                        </ul>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2 text-xl">2. Follow-up Testing</h3>
                                        <p className="text-gray-700">
                                            Most treatment plans include follow-up testing to monitor progress, typically 3-6 months after implementing changes. This helps assess treatment effectiveness and make necessary adjustments.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Comprehensive digestive evaluations represent a significant advancement in gastrointestinal medicine. By combining multiple diagnostic approaches, these assessments can identify root causes of digestive issues that might be missed by conventional testing.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    Remember that digestive health is deeply connected to overall wellness. Issues identified through these evaluations often have implications for immune function, mental health, metabolic health, and more.
                                </p>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "The gut is not just about digestion—it's the foundation of overall health. A thorough digestive evaluation can be the first step toward resolving not just gastrointestinal symptoms, but also fatigue, skin issues, mood disorders, and immune problems that originate in the gut."
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
                                            Dr. Emily Parker, MD, Gastroenterologist
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
                                <h3 className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-2">DIGESTIVE HEALTH NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get gut health tips and updates</h4>
                                <p className="text-gray-700 text-sm">
                                    Monthly research summaries, diet guides, and treatment insights delivered to your inbox.
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

                        {/* Common Conditions Diagnosed */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Conditions Often Diagnosed</h3>
                            <div className="space-y-3">
                                <div className="flex items-center">
                                    <ArrowRight className="w-4 h-4 text-blue-500 mr-2" />
                                    <span>Small Intestinal Bacterial Overgrowth (SIBO)</span>
                                </div>
                                <div className="flex items-center">
                                    <ArrowRight className="w-4 h-4 text-blue-500 mr-2" />
                                    <span>Leaky Gut Syndrome</span>
                                </div>
                                <div className="flex items-center">
                                    <ArrowRight className="w-4 h-4 text-blue-500 mr-2" />
                                    <span>Food Sensitivities</span>
                                </div>
                                <div className="flex items-center">
                                    <ArrowRight className="w-4 h-4 text-blue-500 mr-2" />
                                    <span>Parasitic Infections</span>
                                </div>
                                <div className="flex items-center">
                                    <ArrowRight className="w-4 h-4 text-blue-500 mr-2" />
                                    <span>Candida Overgrowth</span>
                                </div>
                                <div className="flex items-center">
                                    <ArrowRight className="w-4 h-4 text-blue-500 mr-2" />
                                    <span>Inflammatory Bowel Disease</span>
                                </div>
                            </div>
                        </div>

                        {/* Cost Breakdown */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Typical Cost Range</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between">
                                    <span>Initial Consultation</span>
                                    <span className="font-medium">$200-$400</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Comprehensive Stool Test</span>
                                    <span className="font-medium">$300-$600</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>SIBO Breath Test</span>
                                    <span className="font-medium">$250-$450</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Food Sensitivity Panel</span>
                                    <span className="font-medium">$200-$400</span>
                                </div>
                                <div className="flex justify-between border-t border-gray-200 pt-2">
                                    <span className="font-medium">Total Estimate</span>
                                    <span className="font-medium">$950-$1850</span>
                                </div>
                            </div>
                            <p className="text-xs text-gray-600 mt-3">
                                *Many insurance plans cover portions of diagnostic testing with proper documentation of medical necessity.
                            </p>
                        </div>

                        {/* Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Further Reading</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-center">
                                        <ArrowRight className="w-4 h-4 mr-1" />
                                        The Gut-Brain Connection
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-center">
                                        <ArrowRight className="w-4 h-4 mr-1" />
                                        Healing Leaky Gut Syndrome
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-center">
                                        <ArrowRight className="w-4 h-4 mr-1" />
                                        Low FODMAP Diet Guide
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-center">
                                        <ArrowRight className="w-4 h-4 mr-1" />
                                        Probiotics: Choosing the Right Strains
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