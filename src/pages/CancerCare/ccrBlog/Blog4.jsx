"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, HeartPulse, Stethoscope, Pill, Shield, Activity, BookOpen, LifeBuoy } from "lucide-react"

export default function ComprehensiveCancerCareGuide() {
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

    const tabs = ["Overview", "Treatment", "Side Effects", "Nutrition", "Support"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Comprehensive Cancer Care Guide
                            </h1>
                            <p className="text-xl text-gray-700 mb-6">
                                Your complete resource for navigating cancer treatment and care
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

                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                This comprehensive guide provides essential information about cancer care, from understanding your diagnosis through treatment planning and recovery. Learn about different treatment options including surgery, chemotherapy, radiation therapy, immunotherapy, and targeted therapies.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                    alt="Cancer care illustration"
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
                                    <li>Early detection significantly improves treatment outcomes</li>
                                    <li>Multidisciplinary care teams provide the most comprehensive treatment</li>
                                    <li>Personalized treatment plans are becoming the standard of care</li>
                                    <li>Supportive care improves quality of life during treatment</li>
                                    <li>Survivorship programs help with long-term recovery</li>
                                </ul>
                            </div>

                            {/* Understanding Cancer */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Activity className="w-8 h-8 text-blue-600 mr-2" />
                                    Understanding Cancer
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Cancer is a complex group of diseases characterized by uncontrolled cell growth. According to the <a href="#" className="text-blue-600 hover:underline">World Health Organization</a>, cancer is the second leading cause of death globally, responsible for an estimated 10 million deaths in 2020.
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">How Cancer Develops</h3>
                                        <p className="text-gray-700 mb-2">
                                            Normal cells become cancerous when genetic mutations disrupt the normal cell cycle:
                                        </p>
                                        <ol className="list-decimal list-inside text-gray-700 space-y-1">
                                            <li>DNA damage occurs and isn't repaired</li>
                                            <li>Mutated cells begin dividing uncontrollably</li>
                                            <li>Tumor forms and may invade nearby tissues</li>
                                            <li>Cancer cells may spread (metastasize) to other body parts</li>
                                        </ol>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">Common Cancer Types</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>Breast cancer</li>
                                            <li>Lung cancer</li>
                                            <li>Prostate cancer</li>
                                            <li>Colorectal cancer</li>
                                            <li>Skin cancer (melanoma)</li>
                                            <li>Leukemia</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Cancer Statistics Worldwide</h3>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cancer Type</th>
                                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">New Cases (2023)</th>
                                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Deaths (2023)</th>
                                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">5-Year Survival</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200">
                                                <tr>
                                                    <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Breast</td>
                                                    <td className="px-4 py-3 whitespace-nowrap">2.3 million</td>
                                                    <td className="px-4 py-3 whitespace-nowrap">685,000</td>
                                                    <td className="px-4 py-3 whitespace-nowrap">90% (localized)</td>
                                                </tr>
                                                <tr className="bg-gray-50">
                                                    <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Lung</td>
                                                    <td className="px-4 py-3 whitespace-nowrap">2.2 million</td>
                                                    <td className="px-4 py-3 whitespace-nowrap">1.8 million</td>
                                                    <td className="px-4 py-3 whitespace-nowrap">23% (all stages)</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Colorectal</td>
                                                    <td className="px-4 py-3 whitespace-nowrap">1.9 million</td>
                                                    <td className="px-4 py-3 whitespace-nowrap">935,000</td>
                                                    <td className="px-4 py-3 whitespace-nowrap">65% (all stages)</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </section>

                            {/* Diagnosis Process */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Stethoscope className="w-8 h-8 text-blue-600 mr-2" />
                                    Diagnosis Process
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Early and accurate diagnosis is crucial for effective cancer treatment. The diagnostic process typically involves several steps:
                                </p>

                                <div className="space-y-4 mb-6">
                                    <div className="p-4 border border-gray-200 rounded-lg bg-white">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">1. Initial Screening</h3>
                                        <p className="text-gray-700">
                                            Routine tests to detect cancer before symptoms appear. Common screenings include mammograms (breast), colonoscopies (colorectal), Pap tests (cervical), and PSA tests (prostate).
                                        </p>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg bg-white">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">2. Diagnostic Tests</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li><strong>Imaging tests:</strong> X-rays, CT scans, MRIs, PET scans, ultrasounds</li>
                                            <li><strong>Laboratory tests:</strong> Blood tests, urine tests, tumor markers</li>
                                            <li><strong>Biopsy:</strong> Removal of tissue for microscopic examination</li>
                                            <li><strong>Genetic testing:</strong> Identifies inherited cancer risks</li>
                                        </ul>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg bg-white">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">3. Staging</h3>
                                        <p className="text-gray-700 mb-2">
                                            Determining the extent of cancer spread using the TNM system:
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li><strong>Tumor (T):</strong> Size and extent of primary tumor</li>
                                            <li><strong>Node (N):</strong> Spread to nearby lymph nodes</li>
                                            <li><strong>Metastasis (M):</strong> Spread to distant organs</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                                    <h3 className="font-bold text-gray-900 mb-2">Important Note:</h3>
                                    <p className="text-gray-700">
                                        Not all lumps or abnormal test results mean cancer. Many benign conditions can mimic cancer symptoms. Always consult with an oncologist for proper diagnosis.
                                    </p>
                                </div>
                            </section>

                            {/* Treatment Options */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <HeartPulse className="w-8 h-8 text-blue-600 mr-2" />
                                    Treatment Options
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Modern cancer treatment involves a multidisciplinary approach tailored to each patient's specific cancer type, stage, and overall health. Treatment plans often combine several modalities for maximum effectiveness.
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    {/* Surgery */}
                                    <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Surgery</h3>
                                        </div>
                                        <div className="p-4">
                                            <p className="text-gray-700 mb-3">
                                                Physical removal of cancerous tissue. Often the first-line treatment for solid tumors.
                                            </p>
                                            <h4 className="font-medium text-gray-900 mb-1">Types:</h4>
                                            <ul className="list-disc list-inside text-gray-700 space-y-1 mb-3">
                                                <li>Curative (removes entire tumor)</li>
                                                <li>Debulking (removes part of tumor)</li>
                                                <li>Palliative (relieves symptoms)</li>
                                                <li>Preventive (removes precancerous tissue)</li>
                                            </ul>
                                            <h4 className="font-medium text-gray-900 mb-1">Recovery:</h4>
                                            <p className="text-gray-700">
                                                Varies from outpatient procedures to major operations requiring weeks of recovery.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Chemotherapy */}
                                    <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Chemotherapy</h3>
                                        </div>
                                        <div className="p-4">
                                            <p className="text-gray-700 mb-3">
                                                Uses drugs to kill rapidly dividing cells throughout the body.
                                            </p>
                                            <h4 className="font-medium text-gray-900 mb-1">Administration:</h4>
                                            <ul className="list-disc list-inside text-gray-700 space-y-1 mb-3">
                                                <li>IV infusion (most common)</li>
                                                <li>Oral medications</li>
                                                <li>Injections</li>
                                                <li>Topical creams</li>
                                            </ul>
                                            <h4 className="font-medium text-gray-900 mb-1">Common Side Effects:</h4>
                                            <p className="text-gray-700">
                                                Nausea, hair loss, fatigue, increased infection risk.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Radiation Therapy */}
                                    <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Radiation Therapy</h3>
                                        </div>
                                        <div className="p-4">
                                            <p className="text-gray-700 mb-3">
                                                Uses high-energy particles to damage cancer cell DNA.
                                            </p>
                                            <h4 className="font-medium text-gray-900 mb-1">Types:</h4>
                                            <ul className="list-disc list-inside text-gray-700 space-y-1 mb-3">
                                                <li>External beam (most common)</li>
                                                <li>Internal (brachytherapy)</li>
                                                <li>Systemic (radioactive substances)</li>
                                            </ul>
                                            <h4 className="font-medium text-gray-900 mb-1">Treatment Course:</h4>
                                            <p className="text-gray-700">
                                                Typically 5 days/week for several weeks.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Immunotherapy */}
                                    <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Immunotherapy</h3>
                                        </div>
                                        <div className="p-4">
                                            <p className="text-gray-700 mb-3">
                                                Boosts or harnesses the body's immune system to fight cancer.
                                            </p>
                                            <h4 className="font-medium text-gray-900 mb-1">Types:</h4>
                                            <ul className="list-disc list-inside text-gray-700 space-y-1 mb-3">
                                                <li>Checkpoint inhibitors</li>
                                                <li>CAR T-cell therapy</li>
                                                <li>Cancer vaccines</li>
                                                <li>Monoclonal antibodies</li>
                                            </ul>
                                            <h4 className="font-medium text-gray-900 mb-1">Effectiveness:</h4>
                                            <p className="text-gray-700">
                                                Works exceptionally well for some cancers, less for others.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Emerging Treatments */}
                                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Emerging Treatment Options</h3>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div>
                                            <h4 className="font-medium text-gray-900 mb-1">Targeted Therapy</h4>
                                            <p className="text-gray-700 text-sm">
                                                Drugs targeting specific molecules involved in cancer growth. Requires biomarker testing.
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 mb-1">Precision Medicine</h4>
                                            <p className="text-gray-700 text-sm">
                                                Treatment based on genetic profiling of patient's tumor.
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 mb-1">Proton Therapy</h4>
                                            <p className="text-gray-700 text-sm">
                                                Advanced radiation with less damage to surrounding tissue.
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 mb-1">Nanotechnology</h4>
                                            <p className="text-gray-700 text-sm">
                                                Microscopic particles delivering drugs directly to cancer cells.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Managing Side Effects */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Pill className="w-8 h-8 text-blue-600 mr-2" />
                                    Managing Treatment Side Effects
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Cancer treatments can cause various side effects. Proper management improves quality of life and helps patients complete treatment as planned.
                                </p>

                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Side Effect</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Management Strategies</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">When to Seek Help</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Fatigue</td>
                                                <td className="px-4 py-3">
                                                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                                                        <li>Prioritize activities</li>
                                                        <li>Short naps (≤30 min)</li>
                                                        <li>Gentle exercise</li>
                                                    </ul>
                                                </td>
                                                <td className="px-4 py-3">If unable to get out of bed</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Nausea/Vomiting</td>
                                                <td className="px-4 py-3">
                                                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                                                        <li>Anti-nausea medications</li>
                                                        <li>Small, frequent meals</li>
                                                        <li>Ginger tea</li>
                                                    </ul>
                                                </td>
                                                <td className="px-4 py-3">Vomiting &gt;24 hours</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Pain</td>
                                                <td className="px-4 py-3">
                                                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                                                        <li>Medications as prescribed</li>
                                                        <li>Heat/cold therapy</li>
                                                        <li>Relaxation techniques</li>
                                                    </ul>
                                                </td>
                                                <td className="px-4 py-3">Severe or sudden pain</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="bg-white p-4 rounded-lg border border-gray-200 mb-6">
                                    <h3 className="font-bold text-lg text-gray-900 mb-2">Integrative Therapies</h3>
                                    <p className="text-gray-700 mb-3">
                                        Complementary approaches that may help when used alongside conventional treatment:
                                    </p>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div>
                                            <h4 className="font-medium text-gray-900 mb-1">Mind-Body Therapies</h4>
                                            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                                                <li>Meditation</li>
                                                <li>Yoga</li>
                                                <li>Guided imagery</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 mb-1">Physical Therapies</h4>
                                            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                                                <li>Acupuncture</li>
                                                <li>Massage</li>
                                                <li>Physical therapy</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Nutrition During Treatment */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Nutrition During Cancer Treatment</h2>

                                <p className="text-gray-700 mb-6">
                                    Proper nutrition helps maintain strength, manage side effects, and support recovery. Needs vary by individual and treatment type.
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Foods to Focus On</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li><strong>High-protein foods:</strong> Lean meats, eggs, dairy, legumes</li>
                                            <li><strong>Healthy fats:</strong> Avocados, nuts, olive oil, fatty fish</li>
                                            <li><strong>Complex carbs:</strong> Whole grains, fruits, vegetables</li>
                                            <li><strong>Hydration:</strong> Water, herbal teas, broths</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Foods to Limit</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li><strong>Raw/undercooked foods:</strong> Increased infection risk</li>
                                            <li><strong>High-sugar foods:</strong> Can worsen nausea</li>
                                            <li><strong>Alcohol:</strong> Interacts with medications</li>
                                            <li><strong>Excess caffeine:</strong> May worsen dehydration</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                                    <h3 className="font-bold text-lg text-gray-900 mb-2">Special Nutritional Considerations</h3>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div>
                                            <h4 className="font-medium text-gray-900 mb-1">During Chemotherapy</h4>
                                            <p className="text-gray-700 text-sm">
                                                Eat small, frequent meals. Focus on bland foods if nauseated.
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 mb-1">After Surgery</h4>
                                            <p className="text-gray-700 text-sm">
                                                High-protein diet supports wound healing.
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 mb-1">Radiation Therapy</h4>
                                            <p className="text-gray-700 text-sm">
                                                May need soft or liquid foods if mouth sores develop.
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 mb-1">Immunotherapy</h4>
                                            <p className="text-gray-700 text-sm">
                                                Maintain balanced diet to support immune function.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Emotional Support */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <LifeBuoy className="w-8 h-8 text-blue-600 mr-2" />
                                    Emotional Support and Mental Health
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Cancer affects mental health as much as physical health. Up to 25% of cancer patients experience depression, and up to 45% experience anxiety.
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">Support Resources</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li><strong>Counseling:</strong> Individual or family therapy</li>
                                            <li><strong>Support groups:</strong> In-person or online communities</li>
                                            <li><strong>Palliative care teams:</strong> Address physical and emotional needs</li>
                                            <li><strong>Social workers:</strong> Help navigate practical challenges</li>
                                        </ul>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">Coping Strategies</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Practice mindfulness and relaxation techniques</li>
                                            <li>Maintain social connections</li>
                                            <li>Express feelings through journaling or art</li>
                                            <li>Set realistic goals and priorities</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <h3 className="font-bold text-lg text-gray-900 mb-2">For Caregivers</h3>
                                    <p className="text-gray-700 mb-2">
                                        Caring for someone with cancer can be emotionally taxing. Remember to:
                                    </p>
                                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                                        <li>Take breaks and practice self-care</li>
                                        <li>Ask for and accept help from others</li>
                                        <li>Join caregiver support groups</li>
                                        <li>Recognize signs of burnout</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Survivorship */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Life After Cancer: Survivorship</h2>

                                <p className="text-gray-700 mb-6">
                                    Completing treatment is a major milestone, but the journey continues. Survivorship care focuses on monitoring for recurrence, managing long-term effects, and maintaining overall health.
                                </p>

                                <div className="space-y-6">
                                    <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Follow-Up Care Plan</h3>
                                        </div>
                                        <div className="p-4">
                                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                                <li>Regular check-ups with your oncologist</li>
                                                <li>Monitoring tests and scans as recommended</li>
                                                <li>Management of lingering side effects</li>
                                                <li>Screening for new cancers</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Long-Term Health Considerations</h3>
                                        </div>
                                        <div className="p-4">
                                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                                <li>Heart health (some treatments can affect cardiovascular system)</li>
                                                <li>Bone health (risk of osteoporosis from certain therapies)</li>
                                                <li>Cognitive function ("chemo brain" may persist)</li>
                                                <li>Emotional well-being (adjusting to life after cancer)</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    A cancer diagnosis is life-changing, but with today's treatment options and support systems, many people live long, fulfilling lives after cancer. The key is to:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 ml-4">
                                    <li>Work closely with your healthcare team</li>
                                    <li>Follow your personalized treatment plan</li>
                                    <li>Take care of your physical and emotional needs</li>
                                    <li>Lean on your support network</li>
                                    <li>Stay informed about your condition and options</li>
                                </ul>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "Every cancer journey is unique. While statistics provide general information, they don't predict individual outcomes. Focus on your personal path and the aspects of care you can control."
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
                                            Dr. Emily Wilson, MD
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600 mb-1">
                                        — Written by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            Cancer Care Editorial Team
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

                        {/* Emergency Contacts */}
                        <div className="bg-red-50 rounded-lg p-6 mb-8 border-l-4 border-red-400">
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Emergency Contacts</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-red-600 hover:underline font-medium flex items-center">
                                        <Shield className="w-4 h-4 mr-2" />
                                        National Cancer Helpline
                                    </a>
                                    <p className="text-sm text-gray-700">1-800-4-CANCER (1-800-422-6237)</p>
                                </li>
                                <li>
                                    <a href="#" className="text-red-600 hover:underline font-medium flex items-center">
                                        <Shield className="w-4 h-4 mr-2" />
                                        Crisis Text Line
                                    </a>
                                    <p className="text-sm text-gray-700">Text HOME to 741741</p>
                                </li>
                                <li>
                                    <a href="#" className="text-red-600 hover:underline font-medium flex items-center">
                                        <Shield className="w-4 h-4 mr-2" />
                                        Suicide Prevention Lifeline
                                    </a>
                                    <p className="text-sm text-gray-700">988</p>
                                </li>
                            </ul>
                        </div>

                        {/* Newsletter Signup */}
                        <div className="bg-blue-50 rounded-lg p-6 mb-8">
                            <div className="mb-4">
                                <h3 className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-2">CANCER CARE NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get support and updates</h4>
                                <p className="text-gray-700 text-sm">
                                    Monthly resources, patient stories, and the latest research delivered to your inbox.
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

                        {/* Support Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Support Resources</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-start">
                                        <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                                            1
                                        </span>
                                        <span>American Cancer Society Programs</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-start">
                                        <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                                            2
                                        </span>
                                        <span>Cancer Support Community</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-start">
                                        <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                                            3
                                        </span>
                                        <span>Financial Assistance Programs</span>
                                    </a>
                                    </li>
                                    <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-start">
                                        <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                                            4
                                        </span>
                                        <span>Local Support Groups Directory</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-start">
                                        <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                                            5
                                        </span>
                                        <span>Online Patient Communities</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-start">
                                        <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                                            6
                                        </span>
                                        <span>Mental Health Services for Cancer Patients</span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Quick Links */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Links</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-center">
                                        <Check className="w-4 h-4 mr-2 text-blue-500" />
                                        Treatment Decision Guide
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-center">
                                        <Check className="w-4 h-4 mr-2 text-blue-500" />
                                        Questions to Ask Your Doctor
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-center">
                                        <Check className="w-4 h-4 mr-2 text-blue-500" />
                                        Clinical Trials Finder
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-center">
                                        <Check className="w-4 h-4 mr-2 text-blue-500" />
                                        Caregiver Resources
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-center">
                                        <Check className="w-4 h-4 mr-2 text-blue-500" />
                                        Survivorship Care Plans
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
                                   




