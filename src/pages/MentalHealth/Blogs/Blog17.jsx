"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, Dna, HeartPulse, BookOpen, Shield, Star, ClipboardList, ChevronRight } from "lucide-react"

export default function FamilyHistoryGeneticMentalHealth() {
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

    const tabs = ["Overview", "Genetic Risks", "Testing", "Prevention"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Family History and Genetic Factors in Mental Health
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
                                Mental health conditions often run in families, suggesting significant genetic components. Understanding your family history and genetic predispositions can help with early intervention, personalized treatment, and preventive strategies. This comprehensive guide explores the complex relationship between genetics and mental health.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80"
                                    alt="DNA strand and family tree representing genetic connections"
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
                                    <li>Mental health conditions have 30-70% heritability rates</li>
                                    <li>First-degree relatives have 2-3x higher risk for similar conditions</li>
                                    <li>Over 100 genetic markers linked to mental health disorders</li>
                                    <li>Gene-environment interactions are crucial in manifestation</li>
                                    <li>Genetic counseling can help interpret family history risks</li>
                                </ul>
                            </div>

                            {/* The Genetic Connection */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Dna className="w-8 h-8 text-blue-600 mr-2" />
                                    The Genetic Connection to Mental Health
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Research indicates that most mental health disorders have significant genetic components, though they rarely follow simple inheritance patterns. A <a href="#" className="text-blue-600 hover:underline">2022 study in Nature Genetics</a> analyzed over 1 million individuals and found:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>Schizophrenia: 79% heritability estimate</li>
                                    <li>Bipolar disorder: 70% heritability</li>
                                    <li>Major depression: 37% heritability</li>
                                    <li>Anxiety disorders: 30-40% heritability</li>
                                </ul>

                                <div className="bg-purple-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Polygenic Risk Scores Explained</h3>
                                    <p className="text-gray-700 mb-2">
                                        Modern genetic testing uses polygenic risk scores (PRS) that combine the effects of hundreds or thousands of genetic variants to estimate an individual's genetic predisposition to specific conditions.
                                    </p>
                                    <p className="text-gray-700">
                                        These scores don't predict certainty of developing a condition, but rather relative risk compared to the general population.
                                    </p>
                                </div>
                            </section>

                            {/* Common Mental Health Conditions with Genetic Links */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <HeartPulse className="w-8 h-8 text-blue-600 mr-2" />
                                    Common Mental Health Conditions with Genetic Links
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    The following table shows the increased risk for first-degree relatives (parents, siblings, children) of individuals with these conditions:
                                </p>

                                {/* Conditions Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Condition</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">General Population Risk</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">First-Degree Relative Risk</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Key Genetic Markers</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Schizophrenia</td>
                                                <td className="px-4 py-3 whitespace-nowrap">1%</td>
                                                <td className="px-4 py-3 whitespace-nowrap">10%</td>
                                                <td className="px-4 py-3">DRD2, COMT, DISC1</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Bipolar Disorder</td>
                                                <td className="px-4 py-3 whitespace-nowrap">2%</td>
                                                <td className="px-4 py-3 whitespace-nowrap">15%</td>
                                                <td className="px-4 py-3">CACNA1C, ANK3, ODZ4</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Major Depression</td>
                                                <td className="px-4 py-3 whitespace-nowrap">15%</td>
                                                <td className="px-4 py-3 whitespace-nowrap">30%</td>
                                                <td className="px-4 py-3">5-HTTLPR, BDNF, FKBP5</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Autism Spectrum</td>
                                                <td className="px-4 py-3 whitespace-nowrap">1.5%</td>
                                                <td className="px-4 py-3 whitespace-nowrap">20%</td>
                                                <td className="px-4 py-3">SHANK3, NLGN4, MECP2</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">ADHD</td>
                                                <td className="px-4 py-3 whitespace-nowrap">5%</td>
                                                <td className="px-4 py-3 whitespace-nowrap">25%</td>
                                                <td className="px-4 py-3">DRD4, DAT1, DRD5</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Important Note:</h3>
                                    <p className="text-gray-700">
                                        These risks represent probabilities, not certainties. Having a family history doesn't guarantee you'll develop the condition, and lacking family history doesn't make you immune. Environmental factors and epigenetics play crucial roles.
                                    </p>
                                </div>
                            </section>

                            {/* Genetic Testing Options */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <ClipboardList className="w-8 h-8 text-blue-600 mr-2" />
                                    Genetic Testing Options for Mental Health
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Several types of genetic tests can provide insights into mental health risks. Here's a comparison of available options:
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">1</span>
                                            Direct-to-Consumer Tests
                                        </h3>
                                        <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                                            <li>Companies: 23andMe, AncestryDNA</li>
                                            <li>Cost: $99-$199</li>
                                            <li>Tests for: Limited mental health markers</li>
                                            <li>Best for: General ancestry + health overview</li>
                                        </ul>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">2</span>
                                            Clinical Genetic Panels
                                        </h3>
                                        <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                                            <li>Providers: GeneSight, Genomind</li>
                                            <li>Cost: $300-$2000 (often insurance covered)</li>
                                            <li>Tests for: Medication metabolism genes</li>
                                            <li>Best for: Treatment personalization</li>
                                        </ul>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">3</span>
                                            Whole Genome Sequencing
                                        </h3>
                                        <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                                            <li>Providers: Clinical genetics centers</li>
                                            <li>Cost: $1000-$5000</li>
                                            <li>Tests for: All known genetic variants</li>
                                            <li>Best for: Comprehensive risk assessment</li>
                                        </ul>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">4</span>
                                            Polygenic Risk Scores
                                        </h3>
                                        <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                                            <li>Providers: Research institutions</li>
                                            <li>Cost: Varies (often research-based)</li>
                                            <li>Tests for: Aggregate risk across many genes</li>
                                            <li>Best for: Research and clinical trials</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Ethical Considerations:</h3>
                                    <p className="text-gray-700">
                                        Genetic testing for mental health conditions raises important ethical questions about privacy, discrimination, and psychological impact. The Genetic Information Nondiscrimination Act (GINA) protects against health insurance and employment discrimination but has limitations.
                                    </p>
                                </div>
                            </section>

                            {/* Creating a Family Health History */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Creating a Family Health History</h2>

                                <p className="text-gray-700 mb-4">
                                    Documenting your family's mental health history can be invaluable for prevention and early intervention. Follow these steps:
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Information to Collect</h3>
                                        <ol className="list-decimal list-inside text-gray-700 space-y-2">
                                            <li>Mental health diagnoses (depression, anxiety, etc.)</li>
                                            <li>Age at diagnosis and symptom onset</li>
                                            <li>Treatment responses and medications</li>
                                            <li>Substance use patterns</li>
                                            <li>Suicide attempts or completions</li>
                                            <li>Neurological conditions (epilepsy, dementia)</li>
                                        </ol>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Interviewing Relatives</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Approach with sensitivity and empathy</li>
                                            <li>Explain your purpose (improving family health)</li>
                                            <li>Respect boundaries if they're uncomfortable</li>
                                            <li>Consider generational differences in openness</li>
                                            <li>Use family gatherings as opportunities</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Digital Tools:</h3>
                                    <p className="text-gray-700">
                                        The Surgeon General's <a href="#" className="text-green-600 hover:underline">My Family Health Portrait</a> tool helps organize and share family health information securely. Other options include genetic health apps like Promethease or Genetic Genie for analyzing raw DNA data.
                                    </p>
                                </div>
                            </section>

                            {/* Preventive Strategies */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Preventive Strategies for High-Risk Individuals</h2>

                                <div className="space-y-6">
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Lifestyle Interventions</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Sleep Hygiene</h4>
                                                <p className="text-gray-700">Regular sleep patterns can reduce risk of mood disorders by 30-40% in genetically predisposed individuals.</p>
                                            </div>
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Exercise</h4>
                                                <p className="text-gray-700">150 minutes/week of moderate exercise lowers depression risk equivalent to some medications.</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">Nutrition</h4>
                                                <p className="text-gray-700">Mediterranean diet patterns correlate with 33% lower depression rates in high-risk groups.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Psychological Approaches</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Mindfulness Training</h4>
                                                <p className="text-gray-700">Reduces stress reactivity in those with genetic vulnerability to anxiety disorders.</p>
                                            </div>
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Cognitive Behavioral Therapy</h4>
                                                <p className="text-gray-700">Preventive CBT cuts first depressive episode risk by 50% in high-risk youth.</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">Social Connection</h4>
                                                <p className="text-gray-700">Strong social networks buffer genetic risk for schizophrenia spectrum disorders.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Medical Monitoring</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Regular Check-ups</h4>
                                                <p className="text-gray-700">Annual mental health screenings starting in adolescence for high-risk families.</p>
                                            </div>
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Early Intervention</h4>
                                                <p className="text-gray-700">Prodromal programs can delay or prevent psychosis onset in ultra-high-risk youth.</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">Pharmacogenomics</h4>
                                                <p className="text-gray-700">Gene-guided medication selection improves first-treatment success rates.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    While genetics load the gun, environment pulls the trigger when it comes to mental health conditions. Understanding your family history empowers you to modify environmental risk factors through lifestyle choices, stress management, and early intervention strategies.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    If you have significant family history of mental health conditions, consider consulting a genetic counselor specializing in psychiatric genetics. They can help interpret your risks, discuss testing options, and develop personalized prevention plans.
                                </p>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "Genetic risk isn't destiny—it's information. With today's understanding of gene-environment interactions, we have unprecedented opportunities to rewrite our mental health narratives even with challenging family histories."
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
                                            Dr. Emily Zhang, PhD
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600 mb-1">
                                        — Written by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            James Wilson
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
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get science-backed mental health insights</h4>
                                <p className="text-gray-700 text-sm">
                                    Monthly updates on genetic research, prevention strategies, and expert interviews.
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

                        {/* Quick Links */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Navigation</h3>
                            <div className="space-y-3">
                                <a href="#" className="flex items-center justify-between group">
                                    <span className="text-blue-600 group-hover:text-blue-800 transition-colors">Genetic Testing Options</span>
                                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                                </a>
                                <a href="#" className="flex items-center justify-between group">
                                    <span className="text-blue-600 group-hover:text-blue-800 transition-colors">Family History Guide</span>
                                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                                </a>
                                <a href="#" className="flex items-center justify-between group">
                                    <span className="text-blue-600 group-hover:text-blue-800 transition-colors">Prevention Strategies</span>
                                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                                </a>
                                <a href="#" className="flex items-center justify-between group">
                                    <span className="text-blue-600 group-hover:text-blue-800 transition-colors">Find a Genetic Counselor</span>
                                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                                </a>
                            </div>
                        </div>

                        {/* Risk Calculator */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Family Risk Calculator</h3>
                            <p className="text-gray-700 text-sm mb-4">
                                Estimate your risk based on family history (for educational purposes only):
                            </p>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Condition in family</label>
                                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                                        <option>Depression</option>
                                        <option>Bipolar Disorder</option>
                                        <option>Schizophrenia</option>
                                        <option>Anxiety Disorder</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Relation</label>
                                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                                        <option>Parent</option>
                                        <option>Sibling</option>
                                        <option>Grandparent</option>
                                        <option>Aunt/Uncle</option>
                                    </select>
                                </div>
                                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200">
                                    Calculate Risk
                                </button>
                            </div>
                        </div>

                        {/* Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Further Reading</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">The Genetics of Mental Illness - NIH Guide</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Finding a Genetic Counselor</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Understanding Polygenic Risk Scores</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Gene-Environment Interactions in Psychiatry</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Genetic Testing Rights and Laws</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}