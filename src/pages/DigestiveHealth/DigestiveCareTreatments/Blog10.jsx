"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Clock, Dna, Stethoscope, ClipboardList, ShieldAlert, BookOpen, HeartPulse, Activity, ChevronDown } from "lucide-react"

export default function GeneticDigestiveDisorders() {
    const [email, setEmail] = useState("")
    const [activeTab, setActiveTab] = useState("Overview")
    const [expandedSections, setExpandedSections] = useState({})

    const handleEmailSubmit = (e) => {
        e.preventDefault()
        console.log("Email submitted:", email)
        setEmail("")
    }

    const toggleSection = (section) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }))
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const tabs = ["Overview", "Common Disorders", "Genetic Testing", "Management"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-4">
                                Genetic Health
                            </span>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Family History and Genetic Factors in Digestive Disorders
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

                            {/* Date and Read Time */}
                            <div className="flex items-center gap-4 text-gray-500 mb-4">
                                <div className="flex items-center">
                                    <Calendar className="w-4 h-4 mr-1" />
                                    <span className="text-sm">June 15, 2025</span>
                                </div>
                                <div className="flex items-center">
                                    <Clock className="w-4 h-4 mr-1" />
                                    <span className="text-sm">9 min read</span>
                                </div>
                            </div>

                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                Digestive disorders often run in families, with genetic factors playing a significant role in conditions ranging from irritable bowel syndrome to colorectal cancer. Understanding your family history and genetic risks can lead to earlier detection, better management, and potentially life-saving interventions.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1628771065518-0d82f1938462?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80"
                                    alt="DNA strand and digestive system illustration"
                                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                                    style={{ maxHeight: '500px' }}
                                />
                                <p className="text-sm text-gray-500 mt-2">Genetic research is uncovering new links between DNA variations and digestive health (Photo: Science Photo Library)</p>
                            </div>

                            {/* Key Takeaways */}
                            <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-8">
                                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                    <ShieldAlert className="w-5 h-5 text-purple-600 mr-2" />
                                    Key Takeaways
                                </h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>Over 30 digestive disorders have known genetic components</li>
                                    <li>First-degree relatives of affected individuals may have 2-5x higher risk</li>
                                    <li>Genetic testing can guide personalized screening schedules</li>
                                    <li>Lifestyle modifications may offset some genetic risks</li>
                                    <li>New therapies target specific genetic mutations</li>
                                </ul>
                            </div>

                            {/* The Genetic Connection */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Dna className="w-8 h-8 text-purple-600 mr-2" />
                                    The Genetic Connection to Digestive Health
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Research has identified hundreds of genetic variants associated with digestive disorders. These variations can affect:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>Enzyme production and function</li>
                                    <li>Gut microbiome composition</li>
                                    <li>Intestinal barrier integrity</li>
                                    <li>Immune system regulation in the gut</li>
                                    <li>Motility and nerve signaling</li>
                                </ul>

                                <div className="bg-purple-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Heritability Estimates for Common Digestive Disorders</h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <p className="text-3xl font-bold text-purple-600">35-45%</p>
                                            <p className="text-gray-700">Inflammatory Bowel Disease</p>
                                        </div>
                                        <div>
                                            <p className="text-3xl font-bold text-purple-600">20-30%</p>
                                            <p className="text-gray-700">Irritable Bowel Syndrome</p>
                                        </div>
                                        <div>
                                            <p className="text-3xl font-bold text-purple-600">25-35%</p>
                                            <p className="text-gray-700">Celiac Disease</p>
                                        </div>
                                        <div>
                                            <p className="text-3xl font-bold text-purple-600">10-15%</p>
                                            <p className="text-gray-700">Gastroesophageal Reflux</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Common Genetic Digestive Disorders */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Stethoscope className="w-8 h-8 text-purple-600 mr-2" />
                                    Common Genetic Digestive Disorders
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    The following table outlines major digestive disorders with significant genetic components, their associated genes, and inheritance patterns:
                                </p>

                                {/* Disorders Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Disorder</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Key Genes</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Inheritance</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lifetime Risk with Family History</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Crohn's Disease</td>
                                                <td className="px-4 py-3">NOD2, ATG16L1, IL23R</td>
                                                <td className="px-4 py-3">Complex</td>
                                                <td className="px-4 py-3">5-8% (vs 0.3% general)</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Hereditary Colorectal Cancer</td>
                                                <td className="px-4 py-3">APC, MLH1, MSH2</td>
                                                <td className="px-4 py-3">Autosomal Dominant</td>
                                                <td className="px-4 py-3">80-90% (Lynch syndrome)</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Celiac Disease</td>
                                                <td className="px-4 py-3">HLA-DQ2, HLA-DQ8</td>
                                                <td className="px-4 py-3">Complex</td>
                                                <td className="px-4 py-3">10% (vs 1% general)</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Familial Pancreatitis</td>
                                                <td className="px-4 py-3">PRSS1, SPINK1</td>
                                                <td className="px-4 py-3">Autosomal Dominant</td>
                                                <td className="px-4 py-3">40-50%</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">1</span>
                                            Inflammatory Bowel Disease
                                        </h3>
                                        <p className="text-gray-700">
                                            With over 200 identified risk loci, IBD demonstrates strong familial patterns. Monozygotic twins show 30-35% concordance for Crohn's disease compared to 3-5% in dizygotic twins.
                                        </p>
                                    </div>
                                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">2</span>
                                            Hereditary Cancer Syndromes
                                        </h3>
                                        <p className="text-gray-700">
                                            Lynch syndrome (HNPCC) accounts for 2-4% of colorectal cancers. Carriers have up to 80% lifetime risk of colorectal cancer and increased risk of other malignancies.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Family History Assessment */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <ClipboardList className="w-8 h-8 text-purple-600 mr-2" />
                                    Assessing Your Family History
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    A thorough family history should document:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>All first-degree relatives (parents, siblings, children)</li>
                                    <li>Second-degree relatives when possible (grandparents, aunts/uncles)</li>
                                    <li>Age at diagnosis for affected relatives</li>
                                    <li>Specific diagnoses and complications</li>
                                    <li>Ethnic background (some mutations are population-specific)</li>
                                </ul>

                                <div className="bg-purple-50 p-4 rounded-lg mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Red Flags for Genetic Counseling Referral</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-start">
                                            <div className="flex-shrink-0 mt-1">
                                                <div className="w-4 h-4 bg-purple-600 rounded-full"></div>
                                            </div>
                                            <p className="ml-3 text-gray-700">Multiple affected relatives on same side of family</p>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="flex-shrink-0 mt-1">
                                                <div className="w-4 h-4 bg-purple-600 rounded-full"></div>
                                            </div>
                                            <p className="ml-3 text-gray-700">Diagnoses at younger than average ages</p>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="flex-shrink-0 mt-1">
                                                <div className="w-4 h-4 bg-purple-600 rounded-full"></div>
                                            </div>
                                            <p className="ml-3 text-gray-700">Rare or unusual cancer combinations</p>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="flex-shrink-0 mt-1">
                                                <div className="w-4 h-4 bg-purple-600 rounded-full"></div>
                                            </div>
                                            <p className="ml-3 text-gray-700">Known genetic mutations in family</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Genetic Testing Options */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Activity className="w-8 h-8 text-purple-600 mr-2" />
                                    Genetic Testing Options
                                </h2>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Types of Tests</h3>
                                        <ol className="list-decimal list-inside text-gray-700 space-y-2">
                                            <li>Diagnostic testing (for symptomatic individuals)</li>
                                            <li>Predictive testing (for at-risk asymptomatic relatives)</li>
                                            <li>Carrier testing (for reproductive planning)</li>
                                            <li>Pharmacogenetic testing (for medication guidance)</li>
                                        </ol>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Testing Methods</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Single-gene testing</li>
                                            <li>Multi-gene panels</li>
                                            <li>Whole exome sequencing</li>
                                            <li>Chromosomal microarray</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Genetic Counselor Insight:</h3>
                                    <p className="text-gray-700">
                                        "We recommend genetic counseling before and after testing to help interpret results in context of family history. A negative result doesn't eliminate all risk, and a positive result doesn't guarantee disease development."
                                    </p>
                                </div>
                            </section>

                            {/* Risk Management Strategies */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Risk Management Strategies</h2>

                                <div className="space-y-6">
                                    <div 
                                        className="border border-gray-200 rounded-lg overflow-hidden cursor-pointer"
                                        onClick={() => toggleSection('screening')}
                                    >
                                        <div className="bg-purple-600 px-4 py-2 flex justify-between items-center">
                                            <h3 className="font-bold text-white">Enhanced Screening Protocols</h3>
                                            <ChevronDown className={`w-5 h-5 text-white transition-transform ${expandedSections['screening'] ? 'transform rotate-180' : ''}`} />
                                        </div>
                                        {expandedSections['screening'] && (
                                            <div className="p-4">
                                                <div className="mb-3">
                                                    <h4 className="font-medium text-gray-900">Colorectal Cancer</h4>
                                                    <p className="text-gray-700">Colonoscopy every 1-2 years starting at age 20-25 or 10 years younger than earliest family diagnosis</p>
                                                </div>
                                                <div className="mb-3">
                                                    <h4 className="font-medium text-gray-900">Pancreatic Cancer</h4>
                                                    <p className="text-gray-700">Annual MRI/MRCP or EUS starting at age 50 (or 10 years younger than earliest case)</p>
                                                </div>
                                                <div>
                                                    <h4 className="font-medium text-gray-900">Gastric Cancer</h4>
                                                    <p className="text-gray-700">Upper endoscopy every 1-3 years for CDH1 mutation carriers starting at age 20</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    <div 
                                        className="border border-gray-200 rounded-lg overflow-hidden cursor-pointer"
                                        onClick={() => toggleSection('prevention')}
                                    >
                                        <div className="bg-purple-600 px-4 py-2 flex justify-between items-center">
                                            <h3 className="font-bold text-white">Prevention Approaches</h3>
                                            <ChevronDown className={`w-5 h-5 text-white transition-transform ${expandedSections['prevention'] ? 'transform rotate-180' : ''}`} />
                                        </div>
                                        {expandedSections['prevention'] && (
                                            <div className="p-4">
                                                <div className="mb-3">
                                                    <h4 className="font-medium text-gray-900">Chemoprevention</h4>
                                                    <p className="text-gray-700">Aspirin may reduce colorectal cancer risk in Lynch syndrome by 50-60%</p>
                                                </div>
                                                <div className="mb-3">
                                                    <h4 className="font-medium text-gray-900">Prophylactic Surgery</h4>
                                                    <p className="text-gray-700">Total gastrectomy recommended for CDH1 mutation carriers due to 70-80% gastric cancer risk</p>
                                                </div>
                                                <div>
                                                    <h4 className="font-medium text-gray-900">Lifestyle Modifications</h4>
                                                    <p className="text-gray-700">Mediterranean diet associated with 42% lower IBD risk in high-risk individuals</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </section>

                            {/* Emerging Research */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Emerging Research and Therapies</h2>

                                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Promising Areas of Investigation</h3>
                                    <div className="grid grid-cols-3 gap-4 text-center font-medium mb-2 border-b pb-2">
                                        <div>Area</div>
                                        <div>Potential Impact</div>
                                        <div>Development Stage</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 text-center mb-1">
                                        <div className="font-medium">CRISPR Therapies</div>
                                        <div>Correct specific mutations</div>
                                        <div>Preclinical</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 text-center mb-1 bg-purple-50 p-1 rounded">
                                        <div className="font-medium">Microbiome Modulation</div>
                                        <div>Offset genetic risks</div>
                                        <div>Phase 2 Trials</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 text-center mb-1">
                                        <div className="font-medium">Gene-Environment Studies</div>
                                        <div>Personalized prevention</div>
                                        <div>Ongoing Research</div>
                                    </div>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    While genetic factors play a significant role in digestive disorders, they represent only part of the equation. The emerging field of epigenetics demonstrates how lifestyle and environmental factors can influence whether and how genes are expressed.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    Key steps for those with family history:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>Document and share detailed family medical history with providers</li>
                                    <li>Discuss genetic counseling options</li>
                                    <li>Follow recommended screening guidelines</li>
                                    <li>Adopt gut-healthy lifestyle practices</li>
                                    <li>Stay informed about new research</li>
                                </ul>

                                <div className="bg-purple-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "Knowledge of genetic risk empowers rather than dooms. With proper surveillance and prevention, many genetically predisposed individuals can avoid the conditions that affected their relatives or catch them at earliest, most treatable stages."
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
                                            Dr. Sarah Johnson, Geneticist
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
                                            Updated on June 15, 2025
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Newsletter Signup */}
                        <div className="bg-purple-50 rounded-lg p-6 mb-8">
                            <div className="mb-4">
                                <h3 className="text-sm font-bold text-purple-800 uppercase tracking-wide mb-2">HEALTH NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Stay updated on genetic health</h4>
                                <p className="text-gray-700 text-sm">
                                    Monthly research updates, prevention tips, and expert Q&A delivered to your inbox.
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

                        {/* Related Articles */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Related Articles</h3>
                            <div className="space-y-4">
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/related1.jpg" alt="DNA test" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors">Understanding Direct-to-Consumer Genetic Tests</h4>
                                            <p className="text-sm text-gray-600">May 28, 2025</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/related2.jpg" alt="Microbiome" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors">Gut Microbiome and Genetic Interactions</h4>
                                            <p className="text-sm text-gray-600">April 15, 2025</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/related3.jpg" alt="Family tree" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors">Creating a Family Health Tree</h4>
                                            <p className="text-sm text-gray-600">March 5, 2025</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Quick Facts */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Genetic Digestive Disorders Quick Facts</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span className="font-medium">Conditions</span>
                                    <span>30+ with known genetic links</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Genetic Counselors</span>
                                    <span>5,000+ in US</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Testing Cost</span>
                                    <span>$100-$2,000</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Insurance Coverage</span>
                                    <span>75% of medically indicated tests</span>
                                </div>
                            </div>
                        </div>

                        {/* Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Resources</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-purple-600 hover:underline flex items-center">
                                        <BookOpen className="w-4 h-4 mr-2" />
                                        Genetic Counseling Directory
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-purple-600 hover:underline flex items-center">
                                        <HeartPulse className="w-4 h-4 mr-2" />
                                        Patient Support Organizations
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-purple-600 hover:underline flex items-center">
                                        <ClipboardList className="w-4 h-4 mr-2" />
                                        Family History Tools
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-purple-600 hover:underline flex items-center">
                                        <Activity className="w-4 h-4 mr-2" />
                                        Clinical Trial Finder
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