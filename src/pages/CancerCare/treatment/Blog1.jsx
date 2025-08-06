"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, HeartPulse, Slice, Radiation, Pill, Shield, BookOpen } from "lucide-react"

export default function CancerTreatmentOptionsGuide() {
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

    const tabs = ["Overview", "Treatment Types", "Side Effects", "Latest Research"]

    return (
        <div className="min-h-screen bg-white pt-16 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                                Understanding Cancer Treatment Options: Surgery, Chemo, and Beyond
                            </h1>

                            {/* Navigation Tabs - Made horizontally scrollable on mobile */}
                            <div className="mb-6 border-b border-gray-200 pb-1 overflow-x-auto">
                                <div className="flex flex-nowrap gap-2 w-max min-w-full">
                                    {tabs.map((tab) => (
                                        <button
                                            key={tab}
                                            onClick={() => setActiveTab(tab)}
                                            className={`px-3 py-2 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                                                activeTab === tab
                                                    ? "border-blue-500 text-blue-600"
                                                    : "border-transparent text-gray-600 hover:text-gray-900"
                                            }`}
                                        >
                                            {tab}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Date and Intro */}
                            <div className="flex items-center text-gray-500 mb-4">
                                <Calendar className="w-4 h-4 mr-1" />
                                <span className="text-sm">Updated on June 15, 2024</span>
                            </div>

                            <p className="text-base sm:text-lg text-gray-700 mb-8 leading-relaxed">
                                Modern cancer treatment has evolved into a sophisticated array of options tailored to individual needs. From traditional approaches like surgery and chemotherapy to cutting-edge immunotherapies, understanding these treatments empowers patients and families to make informed decisions about their care journey.
                            </p>

                            {/* Main Image - Responsive height */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&fit=crop"
                                    alt="Medical team discussing cancer treatment options"
                                    className="w-full h-auto rounded-lg shadow-lg object-cover max-h-[300px] sm:max-h-[400px] md:max-h-[500px]"
                                />
                            </div>

                            {/* Key Takeaways */}
                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
                                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                    <BookOpen className="w-5 h-5 text-blue-600 mr-2" />
                                    Key Takeaways
                                </h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>Treatment selection depends on cancer type, stage, and patient health</li>
                                    <li>Multidisciplinary teams often combine treatments for best outcomes</li>
                                    <li>New targeted therapies are revolutionizing cancer care</li>
                                    <li>Supportive care is crucial for managing treatment side effects</li>
                                    <li>Clinical trials provide access to emerging treatments</li>
                                </ul>
                            </div>

                            {/* Cancer Treatment Fundamentals */}
                            <section className="mb-12">
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <HeartPulse className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 mr-2" />
                                    Cancer Treatment Fundamentals
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Cancer treatment has advanced dramatically in the past two decades. According to the <a href="#" className="text-blue-600 hover:underline">American Cancer Society</a>, the 5-year relative survival rate for all cancers combined has increased from 49% in the mid-1970s to 68% today. This improvement stems from:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>Earlier detection through improved screening</li>
                                    <li>More precise surgical techniques</li>
                                    <li>Advanced radiation therapy delivery</li>
                                    <li>Development of targeted biological therapies</li>
                                    <li>Personalized treatment approaches</li>
                                </ul>

                                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Treatment Decision Factors</h3>
                                    <p className="text-gray-700">
                                        Oncologists consider multiple factors when recommending treatment plans:
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                                        <div>
                                            <h4 className="font-medium text-gray-900">Cancer Characteristics</h4>
                                            <ul className="list-disc list-inside text-gray-700 ml-4">
                                                <li>Type and location</li>
                                                <li>Stage and grade</li>
                                                <li>Molecular markers</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900">Patient Factors</h4>
                                            <ul className="list-disc list-inside text-gray-700 ml-4">
                                                <li>Age and overall health</li>
                                                <li>Genetic predispositions</li>
                                                <li>Personal preferences</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Major Treatment Modalities */}
                            <section className="mb-12">
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Slice className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 mr-2" />
                                    Major Treatment Modalities
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Modern oncology utilizes several primary treatment approaches, often in combination:
                                </p>

                                {/* Treatments Table - Made horizontally scrollable */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-3 py-2 sm:px-4 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Treatment</th>
                                                <th className="px-3 py-2 sm:px-4 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Best For</th>
                                                <th className="px-3 py-2 sm:px-4 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                                                <th className="px-3 py-2 sm:px-4 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Success Rates*</th>
                                                <th className="px-3 py-2 sm:px-4 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Key Advances</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            {/* Surgery Row */}
                                            <tr>
                                                <td className="px-3 py-2 sm:px-4 sm:py-3 whitespace-nowrap font-medium text-gray-900">Surgery</td>
                                                <td className="px-3 py-2 sm:px-4 sm:py-3">Solid tumors, early stage</td>
                                                <td className="px-3 py-2 sm:px-4 sm:py-3 whitespace-nowrap">1 day - 1 week</td>
                                                <td className="px-3 py-2 sm:px-4 sm:py-3 whitespace-nowrap">70-95% (stage I)</td>
                                                <td className="px-3 py-2 sm:px-4 sm:py-3">Robotic, laparoscopic techniques</td>
                                            </tr>
                                            {/* Chemotherapy Row */}
                                            <tr className="bg-gray-50">
                                                <td className="px-3 py-2 sm:px-4 sm:py-3 whitespace-nowrap font-medium text-gray-900">Chemotherapy</td>
                                                <td className="px-3 py-2 sm:px-4 sm:py-3">Systemic cancers, metastasis</td>
                                                <td className="px-3 py-2 sm:px-4 sm:py-3 whitespace-nowrap">3-6 months</td>
                                                <td className="px-3 py-2 sm:px-4 sm:py-3 whitespace-nowrap">30-80% (varies widely)</td>
                                                <td className="px-3 py-2 sm:px-4 sm:py-3">Liposomal delivery, combo therapies</td>
                                            </tr>
                                            {/* Radiation Row */}
                                            <tr>
                                                <td className="px-3 py-2 sm:px-4 sm:py-3 whitespace-nowrap font-medium text-gray-900">Radiation</td>
                                                <td className="px-3 py-2 sm:px-4 sm:py-3">Localized tumors</td>
                                                <td className="px-3 py-2 sm:px-4 sm:py-3 whitespace-nowrap">2-8 weeks</td>
                                                <td className="px-3 py-2 sm:px-4 sm:py-3 whitespace-nowrap">60-90% (local control)</td>
                                                <td className="px-3 py-2 sm:px-4 sm:py-3">Proton therapy, IMRT</td>
                                            </tr>
                                            {/* Immunotherapy Row */}
                                            <tr className="bg-gray-50">
                                                <td className="px-3 py-2 sm:px-4 sm:py-3 whitespace-nowrap font-medium text-gray-900">Immunotherapy</td>
                                                <td className="px-3 py-2 sm:px-4 sm:py-3">Melanoma, lung, some others</td>
                                                <td className="px-3 py-2 sm:px-4 sm:py-3 whitespace-nowrap">Up to 2 years</td>
                                                <td className="px-3 py-2 sm:px-4 sm:py-3 whitespace-nowrap">20-50% (durable responses)</td>
                                                <td className="px-3 py-2 sm:px-4 sm:py-3">Checkpoint inhibitors, CAR-T</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <p className="text-gray-500 text-sm mt-2">*5-year survival rates vary by cancer type and stage</p>
                                </div>

                                {/* Treatment Deep Dives */}
                                <div className="space-y-8">
                                    {/* Surgery */}
                                    <div className="border border-gray-200 rounded-lg p-4 sm:p-6">
                                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                            <Slice className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mr-2" />
                                            Surgical Options
                                        </h3>
                                        <p className="text-gray-700 mb-4">
                                            Surgery remains the cornerstone treatment for many solid tumors when detected early. Modern techniques have significantly reduced recovery times and improved outcomes.
                                        </p>
                                        
                                        <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Types of Cancer Surgery</h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4">
                                            <div>
                                                <h5 className="font-medium text-gray-900 mb-2">Curative Surgery</h5>
                                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                                    <li>Complete tumor removal</li>
                                                    <li>Often combined with other treatments</li>
                                                    <li>Examples: lumpectomy, prostatectomy</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h5 className="font-medium text-gray-900 mb-2">Minimally Invasive</h5>
                                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                                    <li>Laparoscopic procedures</li>
                                                    <li>Robotic-assisted surgery</li>
                                                    <li>Faster recovery, less scarring</li>
                                                </ul>
                                            </div>
                                        </div>
                                        
                                        <div className="bg-blue-50 p-4 rounded-lg">
                                            <h4 className="font-bold text-gray-900 mb-2">Recent Advancements</h4>
                                            <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                                                <li>Fluorescence-guided surgery to identify tumor margins</li>
                                                <li>Enhanced recovery after surgery (ERAS) protocols</li>
                                                <li>Single-port robotic surgery reducing incisions</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Chemotherapy */}
                                    <div className="border border-gray-200 rounded-lg p-4 sm:p-6">
                                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                            <Pill className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mr-2" />
                                            Chemotherapy Approaches
                                        </h3>
                                        <p className="text-gray-700 mb-4">
                                            Chemotherapy uses powerful drugs to kill rapidly dividing cells throughout the body. While challenging, modern supportive care has significantly improved quality of life during treatment.
                                        </p>
                                        
                                        <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Chemo Administration Methods</h4>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mb-4">
                                            <div className="bg-gray-50 p-3 rounded">
                                                <h5 className="font-medium text-gray-900">Intravenous (IV)</h5>
                                                <p className="text-gray-700 text-sm">Most common method, delivered through veins</p>
                                            </div>
                                            <div className="bg-gray-50 p-3 rounded">
                                                <h5 className="font-medium text-gray-900">Oral</h5>
                                                <p className="text-gray-700 text-sm">Pills taken at home for certain cancers</p>
                                            </div>
                                            <div className="bg-gray-50 p-3 rounded">
                                                <h5 className="font-medium text-gray-900">Regional</h5>
                                                <p className="text-gray-700 text-sm">Targeted delivery to specific areas</p>
                                            </div>
                                        </div>
                                        
                                        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
                                            <h4 className="font-bold text-gray-900 mb-2">Managing Side Effects</h4>
                                            <p className="text-gray-700 mb-2">Modern supportive therapies can help manage:</p>
                                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                                                <span className="bg-white px-2 py-1 rounded text-sm">Nausea</span>
                                                <span className="bg-white px-2 py-1 rounded text-sm">Fatigue</span>
                                                <span className="bg-white px-2 py-1 rounded text-sm">Neuropathy</span>
                                                <span className="bg-white px-2 py-1 rounded text-sm">Low blood counts</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Radiation Therapy */}
                                    <div className="border border-gray-200 rounded-lg p-4 sm:p-6">
                                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                            <Radiation className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mr-2" />
                                            Radiation Therapy Innovations
                                        </h3>
                                        <p className="text-gray-700 mb-4">
                                            Radiation therapy has become remarkably precise, allowing higher doses to tumors while sparing healthy tissue. About 60% of cancer patients receive radiation at some point in their treatment.
                                        </p>
                                        
                                        <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Radiation Types Comparison</h4>
                                        <div className="overflow-x-auto">
                                            <table className="min-w-full bg-white">
                                                <thead className="bg-gray-100">
                                                    <tr>
                                                        <th className="px-3 py-2 text-left text-xs">Type</th>
                                                        <th className="px-3 py-2 text-left text-xs">Depth</th>
                                                        <th className="px-3 py-2 text-left text-xs">Precision</th>
                                                        <th className="px-3 py-2 text-left text-xs">Sessions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="px-3 py-2">IMRT</td>
                                                        <td className="px-3 py-2">Moderate</td>
                                                        <td className="px-3 py-2">High</td>
                                                        <td className="px-3 py-2">25-35</td>
                                                    </tr>
                                                    <tr className="bg-gray-50">
                                                        <td className="px-3 py-2">SBRT</td>
                                                        <td className="px-3 py-2">Deep</td>
                                                        <td className="px-3 py-2">Very High</td>
                                                        <td className="px-3 py-2">1-5</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-3 py-2">Proton</td>
                                                        <td className="px-3 py-2">Deep</td>
                                                        <td className="px-3 py-2">Highest</td>
                                                        <td className="px-3 py-2">20-30</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    {/* Emerging Therapies */}
                                    <div className="border border-gray-200 rounded-lg p-4 sm:p-6 bg-blue-50">
                                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                            <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mr-2" />
                                            Emerging Treatment Frontiers
                                        </h3>
                                        <p className="text-gray-700 mb-4">
                                            The past decade has seen remarkable breakthroughs in cancer treatment approaches that are changing outcomes for previously untreatable cancers.
                                        </p>
                                        
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                                            <div>
                                                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Immunotherapy</h4>
                                                <ul className="list-disc list-inside text-gray-700 space-y-2">
                                                    <li>Checkpoint inhibitors (PD-1/PD-L1 blockers)</li>
                                                    <li>CAR-T cell therapy for blood cancers</li>
                                                    <li>Cancer vaccines in development</li>
                                                    <li>Combination approaches with radiation</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Targeted Therapy</h4>
                                                <ul className="list-disc list-inside text-gray-700 space-y-2">
                                                    <li>PARP inhibitors for BRCA mutations</li>
                                                    <li>TKIs for specific genetic alterations</li>
                                                    <li>Antibody-drug conjugates</li>
                                                    <li>Epigenetic modulators</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Treatment Decision Making */}
                            <section className="mb-12">
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Making Treatment Decisions</h2>
                                
                                <p className="text-gray-700 mb-6">
                                    Choosing cancer treatment is a complex process that should involve thorough discussions with your oncology team. Consider these key aspects:
                                </p>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8">
                                    <div className="border border-gray-200 rounded-lg p-4 sm:p-6">
                                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Questions to Ask Your Oncologist</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>What is the goal of this treatment (curative vs palliative)?</li>
                                            <li>What are the expected benefits and risks?</li>
                                            <li>How will this affect my quality of life?</li>
                                            <li>Are there clinical trials available for my cancer?</li>
                                            <li>What supportive care options are available?</li>
                                        </ul>
                                    </div>
                                    <div className="border border-gray-200 rounded-lg p-4 sm:p-6 bg-gray-50">
                                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Second Opinion Considerations</h3>
                                        <p className="text-gray-700 mb-3">
                                            Seeking a second opinion is common and encouraged in cancer care. It can:
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Confirm your diagnosis and staging</li>
                                            <li>Provide alternative treatment perspectives</li>
                                            <li>Offer access to newer treatment options</li>
                                            <li>Give you greater confidence in your plan</li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div className="bg-blue-50 p-4 sm:p-6 rounded-lg">
                                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Multidisciplinary Tumor Boards</h3>
                                    <p className="text-gray-700 mb-4">
                                        Many cancer centers use tumor boards - teams of specialists who review complex cases together. These typically include:
                                    </p>
                                    <div className="flex flex-wrap gap-2 sm:gap-3">
                                        <span className="bg-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">Medical Oncologists</span>
                                        <span className="bg-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">Radiation Oncologists</span>
                                        <span className="bg-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">Surgeons</span>
                                        <span className="bg-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">Pathologists</span>
                                        <span className="bg-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">Radiologists</span>
                                        <span className="bg-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">Genetic Counselors</span>
                                    </div>
                                </div>
                            </section>

                            {/* Supportive Care */}
                            <section className="mb-12">
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Integrative & Supportive Care</h2>
                                
                                <p className="text-gray-700 mb-6">
                                    Comprehensive cancer care extends beyond direct tumor treatment to address the whole person. Supportive therapies can significantly improve treatment tolerance and quality of life.
                                </p>
                                
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8">
                                    <div className="border border-gray-200 rounded-lg p-3 sm:p-4">
                                        <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3">Pain Management</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                                            <li>Medication protocols</li>
                                            <li>Nerve blocks</li>
                                            <li>Physical therapy</li>
                                            <li>Acupuncture</li>
                                        </ul>
                                    </div>
                                    <div className="border border-gray-200 rounded-lg p-3 sm:p-4">
                                        <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3">Nutrition Support</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                                            <li>Dietitian consultations</li>
                                            <li>Managing treatment side effects</li>
                                            <li>Maintaining healthy weight</li>
                                            <li>Supplement guidance</li>
                                        </ul>
                                    </div>
                                    <div className="border border-gray-200 rounded-lg p-3 sm:p-4">
                                        <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3">Emotional Support</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                                            <li>Counseling services</li>
                                            <li>Support groups</li>
                                            <li>Mindfulness training</li>
                                            <li>Art/music therapy</li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
                                    <h3 className="font-bold text-gray-900 mb-2">Evidence-Based Complementary Therapies</h3>
                                    <p className="text-gray-700">
                                        When used alongside conventional treatment, certain complementary approaches may help:
                                    </p>
                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mt-3">
                                        <div className="bg-white p-2 rounded text-center">
                                            <div className="font-medium text-sm mb-1">Yoga</div>
                                            <div className="text-xs text-gray-600">Reduces fatigue</div>
                                        </div>
                                        <div className="bg-white p-2 rounded text-center">
                                            <div className="font-medium text-sm mb-1">Meditation</div>
                                            <div className="text-xs text-gray-600">Decreases anxiety</div>
                                        </div>
                                        <div className="bg-white p-2 rounded text-center">
                                            <div className="font-medium text-sm mb-1">Massage</div>
                                            <div className="text-xs text-gray-600">Improves sleep</div>
                                        </div>
                                        <div className="bg-white p-2 rounded text-center">
                                            <div className="font-medium text-sm mb-1">Acupuncture</div>
                                            <div className="text-xs text-gray-600">Relieves nausea</div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Clinical Trials */}
                            <section className="mb-12">
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">The Role of Clinical Trials</h2>
                                
                                <p className="text-gray-700 mb-4">
                                    Clinical trials are essential for advancing cancer care, offering access to promising new treatments before they're widely available. About 5% of adult cancer patients participate in clinical trials.
                                </p>
                                
                                <div className="bg-blue-50 rounded-lg p-4 sm:p-6 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Clinical Trial Phases</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                                        <div className="bg-white p-2 sm:p-3 rounded-lg">
                                            <div className="font-bold text-blue-600 mb-1">Phase I</div>
                                            <p className="text-gray-700 text-xs sm:text-sm">Tests safety and dosage in small groups (15-30 patients)</p>
                                        </div>
                                        <div className="bg-white p-2 sm:p-3 rounded-lg">
                                            <div className="font-bold text-blue-600 mb-1">Phase II</div>
                                            <p className="text-gray-700 text-xs sm:text-sm">Evaluates effectiveness and side effects (100-300 patients)</p>
                                        </div>
                                        <div className="bg-white p-2 sm:p-3 rounded-lg">
                                            <div className="font-bold text-blue-600 mb-1">Phase III</div>
                                            <p className="text-gray-700 text-xs sm:text-sm">Compares to standard treatments (1,000-3,000 patients)</p>
                                        </div>
                                        <div className="bg-white p-2 sm:p-3 rounded-lg">
                                            <div className="font-bold text-blue-600 mb-1">Phase IV</div>
                                            <p className="text-gray-700 text-xs sm:text-sm">Post-approval monitoring (thousands of patients)</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                                    <div>
                                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Finding Appropriate Trials</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Ask your oncologist about trials at your center</li>
                                            <li>Search ClinicalTrials.gov database</li>
                                            <li>Contact cancer advocacy organizations</li>
                                            <li>Consider geographic flexibility for rare cancers</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Questions About Participation</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>What are the potential benefits and risks?</li>
                                            <li>How does this compare to standard treatment?</li>
                                            <li>What costs will be covered?</li>
                                            <li>What are my obligations as a participant?</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Looking to the Future</h2>
                                
                                <p className="text-gray-700 mb-4">
                                    Cancer treatment is evolving at an unprecedented pace. Emerging areas of research include:
                                </p>
                                
                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>Liquid biopsies for early detection and monitoring</li>
                                    <li>Artificial intelligence for treatment personalization</li>
                                    <li>Nanotechnology for targeted drug delivery</li>
                                    <li>Cancer prevention vaccines</li>
                                    <li>Microbiome manipulation to enhance immunotherapy</li>
                                </ul>
                                
                                <div className="bg-blue-50 p-4 sm:p-6 rounded-lg">
                                    <p className="text-gray-700 font-medium italic mb-4">
                                        "The future of cancer treatment lies in precision medicine - matching the right therapy to the right patient at the right time. We're moving from organ-based to molecular-based cancer classification."
                                    </p>
                                    <p className="text-gray-700">
                                        While challenges remain, the outlook for cancer patients continues to improve. Staying informed about treatment options and advocating for your care can make a meaningful difference in your journey.
                                    </p>
                                </div>
                            </section>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        {/* Author Info */}
                        <div className="bg-gray-50 rounded-lg p-4 sm:p-6 mb-8">
                            <div className="flex flex-col sm:flex-row items-start gap-4 mb-4">
                                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-300 rounded-full flex items-center justify-center">
                                    <User className="w-6 h-6 sm:w-8 sm:h-8 text-gray-600" />
                                </div>
                                <div>
                                    <p className="text-xs sm:text-sm text-gray-600 mb-1">
                                        <a href="#" className="text-blue-600 hover:underline">
                                            Medically reviewed
                                        </a>{" "}
                                        by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            Dr. Emily Rodriguez, MD
                                        </a>
                                    </p>
                                    <p className="text-xs sm:text-sm text-gray-600 mb-1">
                                        — Written by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            James Wilson
                                        </a>
                                    </p>
                                    <p className="text-xs sm:text-sm text-gray-600 flex items-center gap-1">
                                        — <Calendar className="w-3 h-3" />
                                        <a href="#" className="text-blue-600 hover:underline">
                                            Updated on June 15, 2024
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Newsletter Signup */}
                        <div className="bg-blue-50 rounded-lg p-4 sm:p-6 mb-8">
                            <div className="mb-4">
                                <h3 className="text-xs sm:text-sm font-bold text-blue-800 uppercase tracking-wide mb-2">CANCER RESOURCES</h3>
                                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Stay updated on treatment advances</h4>
                                <p className="text-gray-700 text-xs sm:text-sm">
                                    Monthly updates on new treatments, clinical trials, and supportive care strategies.
                                </p>
                            </div>

                            <form onSubmit={handleEmailSubmit} className="space-y-4">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 sm:py-3 px-4 rounded-lg transition-colors duration-200 text-sm sm:text-base"
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
                        <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 mb-8">
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Quick Cancer Resources</h3>
                            <ul className="space-y-2 sm:space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-start">
                                        <span className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center mr-2 flex-shrink-0 text-xs">1</span>
                                        <span className="text-sm sm:text-base">National Cancer Institute</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-start">
                                        <span className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center mr-2 flex-shrink-0 text-xs">2</span>
                                        <span className="text-sm sm:text-base">American Cancer Society</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-start">
                                        <span className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center mr-2 flex-shrink-0 text-xs">3</span>
                                        <span className="text-sm sm:text-base">ClinicalTrials.gov</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-start">
                                        <span className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center mr-2 flex-shrink-0 text-xs">4</span>
                                        <span className="text-sm sm:text-base">Cancer Support Communities</span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Treatment Comparison */}
                        <div className="bg-gray-50 rounded-lg p-4 sm:p-6 mb-8">
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Treatment Comparison Chart</h3>
                            <div className="space-y-3 sm:space-y-4">
                                <div>
                                    <h4 className="font-medium text-gray-900 mb-2">Surgery</h4>
                                    <div className="bg-white p-2 sm:p-3 rounded-lg">
                                        <p className="text-xs sm:text-sm text-gray-700"><span className="font-semibold">Pros:</span> Immediate tumor removal, often curative for early stage</p>
                                        <p className="text-xs sm:text-sm text-gray-700"><span className="font-semibold">Cons:</span> Invasive, recovery time, not for metastatic disease</p>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900 mb-2">Chemotherapy</h4>
                                    <div className="bg-white p-2 sm:p-3 rounded-lg">
                                        <p className="text-xs sm:text-sm text-gray-700"><span className="font-semibold">Pros:</span> Systemic, works throughout body</p>
                                        <p className="text-xs sm:text-sm text-gray-700"><span className="font-semibold">Cons:</span> Side effects, affects healthy cells</p>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900 mb-2">Immunotherapy</h4>
                                    <div className="bg-white p-2 sm:p-3 rounded-lg">
                                        <p className="text-xs sm:text-sm text-gray-700"><span className="font-semibold">Pros:</span> Can have durable responses, targeted</p>
                                        <p className="text-xs sm:text-sm text-gray-700"><span className="font-semibold">Cons:</span> Only works for some cancers/patients</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Support Organizations */}
                        <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6">
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Support Organizations</h3>
                            <ul className="space-y-2 sm:space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline text-sm sm:text-base">CancerCare</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline text-sm sm:text-base">Patient Advocate Foundation</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline text-sm sm:text-base">Cancer Support Community</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}