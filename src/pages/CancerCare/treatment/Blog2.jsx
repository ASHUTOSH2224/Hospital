"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, HeartPulse, ClipboardList, Stethoscope, Pill, AlertTriangle, BookOpen } from "lucide-react"

export default function CancerCareQuestionsGuide() {
    const [email, setEmail] = useState("")
    const [activeTab, setActiveTab] = useState("Diagnosis")

    const handleEmailSubmit = (e) => {
        e.preventDefault()
        console.log("Email submitted:", email)
        setEmail("")
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const tabs = ["Diagnosis", "Treatment", "Side Effects", "Support"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Essential Questions to Ask Your Cancer Care Team
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
                                Being diagnosed with cancer can be overwhelming, and communicating effectively with your healthcare team is crucial. This comprehensive guide provides essential questions to ask at every stage of your cancer journey, helping you make informed decisions about your care.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&h=500&fit=crop"
                                    alt="Doctor and patient having a conversation"
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
                                    <li>Prepare questions in advance and bring someone to appointments</li>
                                    <li>Understand your diagnosis and treatment options thoroughly</li>
                                    <li>Ask about potential side effects and management strategies</li>
                                    <li>Discuss financial considerations and support services</li>
                                    <li>Maintain open communication throughout your treatment journey</li>
                                </ul>
                            </div>

                            {/* Why Questions Matter */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <HeartPulse className="w-8 h-8 text-blue-600 mr-2" />
                                    Why Asking Questions Matters
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Studies show that patients who actively participate in their care decisions have better outcomes. According to <a href="#" className="text-blue-600 hover:underline">research published in the Journal of Clinical Oncology</a>, patients who asked more questions:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>Experienced 23% less anxiety about their treatment</li>
                                    <li>Were 18% more likely to adhere to their treatment plan</li>
                                    <li>Reported higher satisfaction with their care (87% vs 64%)</li>
                                    <li>Had better understanding of potential side effects</li>
                                </ul>

                                <div className="bg-blue-100 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Tips for Effective Communication</h3>
                                    <ol className="list-decimal list-inside text-gray-700 space-y-2">
                                        <li>Bring a notebook or record conversations (with permission)</li>
                                        <li>Don't hesitate to ask for clarification of medical terms</li>
                                        <li>Repeat back what you heard to confirm understanding</li>
                                        <li>Request written materials about your condition</li>
                                        <li>Ask "what would you do if this were your family member?"</li>
                                    </ol>
                                </div>
                            </section>

                            {/* Diagnosis Questions */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Stethoscope className="w-8 h-8 text-blue-600 mr-2" />
                                    Questions About Your Diagnosis
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Understanding your specific diagnosis is the foundation for all treatment decisions. These questions will help you get clear information about your cancer.
                                </p>

                                {/* Diagnosis Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Essential Questions</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purpose</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            {/* Row 1 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Type and Stage</td>
                                                <td className="px-4 py-3">
                                                    <ul className="list-disc list-inside space-y-1">
                                                        <li>What type of cancer do I have?</li>
                                                        <li>What is the stage and what does that mean?</li>
                                                    </ul>
                                                </td>
                                                <td className="px-4 py-3">Understand the nature and extent of your cancer</td>
                                            </tr>
                                            {/* Row 2 */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Prognosis</td>
                                                <td className="px-4 py-3">
                                                    <ul className="list-disc list-inside space-y-1">
                                                        <li>What is the expected progression without treatment?</li>
                                                        <li>What are the survival rates for my specific situation?</li>
                                                    </ul>
                                                </td>
                                                <td className="px-4 py-3">Gain realistic expectations about outcomes</td>
                                            </tr>
                                            {/* Row 3 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Testing</td>
                                                <td className="px-4 py-3">
                                                    <ul className="list-disc list-inside space-y-1">
                                                        <li>What additional tests will I need?</li>
                                                        <li>How will these tests affect treatment decisions?</li>
                                                    </ul>
                                                </td>
                                                <td className="px-4 py-3">Prepare for diagnostic procedures</td>
                                            </tr>
                                            {/* Row 4 */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Second Opinion</td>
                                                <td className="px-4 py-3">
                                                    <ul className="list-disc list-inside space-y-1">
                                                        <li>Do you recommend getting a second opinion?</li>
                                                        <li>Can you recommend specialists for a second opinion?</li>
                                                    </ul>
                                                </td>
                                                <td className="px-4 py-3">Ensure confidence in diagnosis</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Understanding Your Pathology Report</h3>
                                    <p className="text-gray-700 mb-2">
                                        Your pathology report contains critical information about your cancer. Ask your doctor to explain:
                                    </p>
                                    <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                                        <li>Tumor grade and what it indicates about aggressiveness</li>
                                        <li>Biomarker results that may affect treatment options</li>
                                        <li>Margin status after surgery</li>
                                        <li>Any genetic mutations found</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Treatment Questions */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Pill className="w-8 h-8 text-blue-600 mr-2" />
                                    Treatment Option Questions
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Understanding your treatment options empowers you to participate actively in your care decisions. These questions cover various treatment modalities.
                                </p>

                                {/* Treatment Options */}
                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="border border-gray-200 rounded-lg p-4">
                                        <h3 className="font-bold text-lg text-gray-900 mb-3">Standard Treatments</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>What are the standard treatment options for my cancer?</li>
                                            <li>What treatment do you recommend and why?</li>
                                            <li>Are there clinical trials available for my situation?</li>
                                            <li>What is the goal of treatment (cure, control, palliation)?</li>
                                        </ul>
                                    </div>
                                    <div className="border border-gray-200 rounded-lg p-4">
                                        <h3 className="font-bold text-lg text-gray-900 mb-3">Treatment Details</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>How soon should treatment begin?</li>
                                            <li>Where will I receive treatment and how often?</li>
                                            <li>How will we know if the treatment is working?</li>
                                            <li>What happens if this treatment doesn't work?</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Treatment Comparison */}
                                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Comparing Treatment Options</h3>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full">
                                            <thead>
                                                <tr className="border-b border-gray-200">
                                                    <th className="px-4 py-2 text-left">Treatment</th>
                                                    <th className="px-4 py-2 text-left">Pros</th>
                                                    <th className="px-4 py-2 text-left">Cons</th>
                                                    <th className="px-4 py-2 text-left">Success Rate</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="border-b border-gray-200">
                                                    <td className="px-4 py-2">Surgery</td>
                                                    <td className="px-4 py-2">Potential for complete removal, immediate results</td>
                                                    <td className="px-4 py-2">Invasive, recovery time, risks of complications</td>
                                                    <td className="px-4 py-2">Varies by stage (70-95% for early stages)</td>
                                                </tr>
                                                <tr className="border-b border-gray-200 bg-white">
                                                    <td className="px-4 py-2">Chemotherapy</td>
                                                    <td className="px-4 py-2">Systemic treatment, can reach cancer cells throughout body</td>
                                                    <td className="px-4 py-2">Side effects, affects healthy cells</td>
                                                    <td className="px-4 py-2">30-60% response rate depending on type</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-2">Radiation</td>
                                                    <td className="px-4 py-2">Targeted, preserves organ function</td>
                                                    <td className="px-4 py-2">Local side effects, multiple sessions required</td>
                                                    <td className="px-4 py-2">50-90% depending on cancer type and stage</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                                    <h3 className="font-bold text-gray-900 mb-2">Important Consideration:</h3>
                                    <p className="text-gray-700">
                                        Ask about treatment sequencing options. Sometimes the order of treatments (surgery before or after chemo) can significantly impact outcomes.
                                    </p>
                                </div>
                            </section>

                            {/* Side Effects Questions */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <AlertTriangle className="w-8 h-8 text-blue-600 mr-2" />
                                    Side Effects and Quality of Life
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Understanding potential side effects helps you prepare and manage them effectively. These questions address both short-term and long-term effects.
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Immediate Side Effects</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>What are the most common side effects of this treatment?</li>
                                            <li>Which side effects require immediate medical attention?</li>
                                            <li>How can I prevent or minimize these side effects?</li>
                                            <li>Will I need medications to manage side effects?</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Long-Term Effects</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>What long-term effects might I experience?</li>
                                            <li>How might this treatment affect my fertility?</li>
                                            <li>Are there risks of secondary cancers?</li>
                                            <li>How will treatment affect my daily activities?</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Side Effects Severity Chart */}
                                <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Common Side Effects by Treatment Type</h3>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full">
                                            <thead>
                                                <tr className="border-b border-gray-200">
                                                    <th className="px-4 py-2 text-left">Side Effect</th>
                                                    <th className="px-4 py-2 text-left">Chemotherapy</th>
                                                    <th className="px-4 py-2 text-left">Radiation</th>
                                                    <th className="px-4 py-2 text-left">Immunotherapy</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="border-b border-gray-200">
                                                    <td className="px-4 py-2">Fatigue</td>
                                                    <td className="px-4 py-2">Very Common (80%)</td>
                                                    <td className="px-4 py-2">Common (60%)</td>
                                                    <td className="px-4 py-2">Common (50%)</td>
                                                </tr>
                                                <tr className="border-b border-gray-200 bg-gray-50">
                                                    <td className="px-4 py-2">Nausea</td>
                                                    <td className="px-4 py-2">Very Common (70%)</td>
                                                    <td className="px-4 py-2">Less Common (30%)</td>
                                                    <td className="px-4 py-2">Rare (10%)</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-2">Skin Reactions</td>
                                                    <td className="px-4 py-2">Occasional (20%)</td>
                                                    <td className="px-4 py-2">Very Common (90%)</td>
                                                    <td className="px-4 py-2">Common (40%)</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </section>

                            {/* Support and Logistics */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Support Services and Practical Concerns</h2>

                                <div className="space-y-6">
                                    <div className="border border-gray-200 rounded-lg p-4">
                                        <h3 className="font-bold text-lg text-gray-900 mb-3">Financial and Insurance</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>What will my insurance likely cover?</li>
                                            <li>Are there financial assistance programs available?</li>
                                            <li>What are the estimated out-of-pocket costs?</li>
                                            <li>How can I manage work during treatment?</li>
                                        </ul>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg p-4">
                                        <h3 className="font-bold text-lg text-gray-900 mb-3">Support Services</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Do you have oncology social workers or patient navigators?</li>
                                            <li>What support groups do you recommend?</li>
                                            <li>Are there dietitians specializing in cancer care?</li>
                                            <li>What mental health resources are available?</li>
                                        </ul>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg p-4">
                                        <h3 className="font-bold text-lg text-gray-900 mb-3">Caregiver Questions</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>What will my caregiver need to do?</li>
                                            <li>Are there training resources for caregivers?</li>
                                            <li>How can caregivers protect their own health?</li>
                                            <li>What respite care options exist?</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Preparing for Appointments */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Preparing for Medical Appointments</h2>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Before the Appointment</h3>
                                        <ol className="list-decimal list-inside text-gray-700 space-y-2">
                                            <li>Write down your questions in order of priority</li>
                                            <li>Bring a list of all medications and supplements</li>
                                            <li>Prepare a brief health history summary</li>
                                            <li>Gather relevant medical records and scans</li>
                                        </ol>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">During the Appointment</h3>
                                        <ol className="list-decimal list-inside text-gray-700 space-y-2">
                                            <li>Bring a trusted family member or friend</li>
                                            <li>Take notes or record the conversation</li>
                                            <li>Ask for clarification when needed</li>
                                            <li>Request written summaries of discussions</li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Appointment Checklist</h3>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div className="flex items-start">
                                            <input type="checkbox" className="mt-1 mr-2" />
                                            <span>List of current medications</span>
                                        </div>
                                        <div className="flex items-start">
                                            <input type="checkbox" className="mt-1 mr-2" />
                                            <span>Insurance information</span>
                                        </div>
                                        <div className="flex items-start">
                                            <input type="checkbox" className="mt-1 mr-2" />
                                            <span>Notebook and pen</span>
                                        </div>
                                        <div className="flex items-start">
                                            <input type="checkbox" className="mt-1 mr-2" />
                                            <span>Water and snacks</span>
                                        </div>
                                        <div className="flex items-start">
                                            <input type="checkbox" className="mt-1 mr-2" />
                                            <span>List of questions</span>
                                        </div>
                                        <div className="flex items-start">
                                            <input type="checkbox" className="mt-1 mr-2" />
                                            <span>Comfortable clothing</span>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Remember that there are no "wrong" questions when it comes to your health. Your medical team expects and welcomes your questions—they're a sign that you're engaged in your care.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    If you feel rushed during appointments, ask about scheduling a separate consultation time to go over your questions in detail. Many cancer centers offer dedicated education sessions for newly diagnosed patients.
                                </p>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "The most important questions are the ones that help you understand your options and feel confident in your decisions. Don't hesitate to ask the same question multiple times until you're comfortable with the answer."
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
                                            Dr. Emily Rodriguez, MD
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

                        {/* Downloadable Question List */}
                        <div className="bg-blue-50 rounded-lg p-6 mb-8">
                            <div className="mb-4">
                                <h3 className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-2">PATIENT RESOURCE</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Printable Question Checklist</h4>
                                <p className="text-gray-700 text-sm">
                                    Download our comprehensive list of questions to bring to your next appointment.
                                </p>
                            </div>

                            <button
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                            >
                                <BookOpen className="w-5 h-5" />
                                DOWNLOAD CHECKLIST
                            </button>

                            <p className="text-xs text-gray-600 mt-3">
                                PDF format | 2 pages | 120KB
                            </p>
                        </div>

                        {/* Support Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Cancer Support Organizations</h3>
                            <div className="space-y-4">
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/support1.jpg" alt="American Cancer Society" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">American Cancer Society</h4>
                                            <p className="text-sm text-gray-600">24/7 helpline: 1-800-227-2345</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/support2.jpg" alt="CancerCare" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">CancerCare</h4>
                                            <p className="text-sm text-gray-600">Free professional support services</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/support3.jpg" alt="Patient Advocate Foundation" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Patient Advocate Foundation</h4>
                                            <p className="text-sm text-gray-600">Financial and insurance assistance</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Glossary */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Common Cancer Terms</h3>
                            <div className="space-y-3">
                                <div className="border-b border-gray-200 pb-2">
                                    <h4 className="font-medium text-gray-900">Remission</h4>
                                    <p className="text-sm text-gray-600">When signs and symptoms of cancer are reduced or undetectable</p>
                                </div>
                                <div className="border-b border-gray-200 pb-2">
                                    <h4 className="font-medium text-gray-900">Metastasis</h4>
                                    <p className="text-sm text-gray-600">When cancer spreads to other parts of the body</p>
                                </div>
                                <div className="border-b border-gray-200 pb-2">
                                    <h4 className="font-medium text-gray-900">Palliative Care</h4>
                                    <p className="text-sm text-gray-600">Specialized medical care focused on relieving symptoms</p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900">Clinical Trial</h4>
                                    <p className="text-sm text-gray-600">Research study testing new treatments</p>
                                </div>
                            </div>
                        </div>

                        {/* Related Articles */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Related Articles</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Navigating Insurance for Cancer Treatment</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Coping with Chemotherapy Side Effects</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Nutrition During Cancer Treatment</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Questions to Ask Before Joining a Clinical Trial</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}