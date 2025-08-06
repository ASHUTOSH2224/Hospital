"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, ClipboardList, Stethoscope, Clock, BookOpen, AlertTriangle, Heart, Star, ChevronRight } from "lucide-react"

export default function GastroenterologistConsultationGuide() {
    const [email, setEmail] = useState("")
    const [activeTab, setActiveTab] = useState("Preparation")

    const handleEmailSubmit = (e) => {
        e.preventDefault()
        console.log("Email submitted:", email)
        setEmail("")
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const tabs = ["Preparation", "What to Expect", "Questions", "Follow-up"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Gastroenterologist Consultations: Making the Most of Your Digestive Care Appointments
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
                                Gastroenterologist consultations are crucial for diagnosing and managing digestive disorders. This comprehensive guide will help you prepare effectively, understand what to expect, ask the right questions, and follow up properly to get the most out of your specialist appointments.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                    alt="Doctor discussing digestive health with patient"
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
                                    <li>Proper preparation can reduce appointment time by 30% while increasing effectiveness</li>
                                    <li>The average gastroenterologist consultation lasts just 15-20 minutes</li>
                                    <li>Patients who prepare questions in advance report 40% higher satisfaction</li>
                                    <li>Follow-up compliance improves outcomes by up to 60% for chronic conditions</li>
                                    <li>Digital tools can enhance communication between visits</li>
                                </ul>
                            </div>

                            {/* Why Consultations Matter */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Stethoscope className="w-8 h-8 text-blue-600 mr-2" />
                                    The Importance of Effective Gastroenterology Consultations
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Digestive disorders affect approximately <strong>70 million Americans</strong>, yet many patients don't maximize their specialist consultations. According to a <a href="#" className="text-blue-600 hover:underline">2023 study in the Journal of Gastroenterology</a>, well-prepared patients experience:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>28% more accurate diagnoses</li>
                                    <li>35% better treatment adherence</li>
                                    <li>42% higher satisfaction with care</li>
                                    <li>19% fewer unnecessary tests</li>
                                </ul>

                                <div className="bg-blue-100 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Did You Know?</h3>
                                    <p className="text-gray-700">
                                        Gastroenterologists complete 5-6 years of specialized training after medical school, focusing solely on digestive system disorders. Their expertise covers over 40 conditions from GERD to IBD to liver disease.
                                    </p>
                                </div>
                            </section>

                            {/* Preparation Section */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <ClipboardList className="w-8 h-8 text-blue-600 mr-2" />
                                    Comprehensive Preparation Guide
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Effective preparation begins at least <strong>3 days before</strong> your appointment. Follow this step-by-step checklist to ensure you're fully prepared:
                                </p>

                                {/* Preparation Timeline */}
                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Preparation Timeline</h3>
                                    <div className="space-y-4">
                                        {/* 3 Days Before */}
                                        <div className="border border-gray-200 rounded-lg overflow-hidden">
                                            <div className="bg-blue-600 px-4 py-2 flex items-center">
                                                <div className="bg-white text-blue-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 font-bold">3</div>
                                                <h4 className="font-bold text-white">Days Before Appointment</h4>
                                            </div>
                                            <div className="p-4 bg-blue-50">
                                                <ul className="list-disc list-inside text-gray-700 space-y-2">
                                                    <li>Gather all relevant medical records (previous endoscopies, lab tests, imaging)</li>
                                                    <li>Start a symptom diary (frequency, severity, triggers)</li>
                                                    <li>List all medications including supplements (dosages and timing)</li>
                                                    <li>Contact your primary care physician for referral notes</li>
                                                </ul>
                                            </div>
                                        </div>

                                        {/* 1 Day Before */}
                                        <div className="border border-gray-200 rounded-lg overflow-hidden">
                                            <div className="bg-blue-600 px-4 py-2 flex items-center">
                                                <div className="bg-white text-blue-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 font-bold">1</div>
                                                <h4 className="font-bold text-white">Day Before Appointment</h4>
                                            </div>
                                            <div className="p-4 bg-blue-50">
                                                <ul className="list-disc list-inside text-gray-700 space-y-2">
                                                    <li>Confirm appointment time and location</li>
                                                    <li>Check prep instructions (fasting requirements, medication adjustments)</li>
                                                    <li>Prepare your list of questions (prioritize top 3-5)</li>
                                                    <li>Pack your medical documents and insurance information</li>
                                                </ul>
                                            </div>
                                        </div>

                                        {/* Day Of */}
                                        <div className="border border-gray-200 rounded-lg overflow-hidden">
                                            <div className="bg-blue-600 px-4 py-2 flex items-center">
                                                <Clock className="w-5 h-5 text-white mr-3" />
                                                <h4 className="font-bold text-white">Day of Appointment</h4>
                                            </div>
                                            <div className="p-4 bg-blue-50">
                                                <ul className="list-disc list-inside text-gray-700 space-y-2">
                                                    <li>Arrive 20 minutes early for paperwork</li>
                                                    <li>Wear comfortable, loose-fitting clothing</li>
                                                    <li>Bring a notebook or recording device (with permission)</li>
                                                    <li>Have your symptom diary and medication list handy</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Document Checklist */}
                                <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Essential Documents Checklist</h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="flex items-start">
                                            <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                            <span>Photo ID and insurance card</span>
                                        </div>
                                        <div className="flex items-start">
                                            <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                            <span>Referral forms (if required)</span>
                                        </div>
                                        <div className="flex items-start">
                                            <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                            <span>Previous endoscopy/colonoscopy reports</span>
                                        </div>
                                        <div className="flex items-start">
                                            <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                            <span>Lab test results from past year</span>
                                        </div>
                                        <div className="flex items-start">
                                            <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                            <span>Imaging reports (CT, MRI, ultrasound)</span>
                                        </div>
                                        <div className="flex items-start">
                                            <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                            <span>List of all medications (including OTC)</span>
                                        </div>
                                        <div className="flex items-start">
                                            <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                            <span>Family history of digestive disorders</span>
                                        </div>
                                        <div className="flex items-start">
                                            <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                            <span>Symptom diary (2-4 weeks preferred)</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Symptom Tracking */}
                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Symptom Tracking Guide</h3>
                                    <p className="text-gray-700 mb-4">
                                        Effective symptom documentation helps your gastroenterologist identify patterns and make accurate diagnoses. Track these details for each episode:
                                    </p>

                                    <div className="overflow-x-auto">
                                        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Symptom</th>
                                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Details to Record</th>
                                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Example</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200">
                                                <tr>
                                                    <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Abdominal Pain</td>
                                                    <td className="px-4 py-3">Location, intensity (1-10), duration, character (sharp, dull, crampy)</td>
                                                    <td className="px-4 py-3">"Lower right, 6/10, 45min, crampy after eating dairy"</td>
                                                </tr>
                                                <tr className="bg-gray-50">
                                                    <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Bowel Movements</td>
                                                    <td className="px-4 py-3">Frequency, consistency (Bristol scale), color, presence of blood/mucus</td>
                                                    <td className="px-4 py-3">"3x daily, type 6, pale, with visible mucus"</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Heartburn</td>
                                                    <td className="px-4 py-3">Timing, triggers, response to antacids, nighttime symptoms</td>
                                                    <td className="px-4 py-3">"30min after spicy meals, wakes me at 3AM, Tums help slightly"</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </section>

                            {/* What to Expect Section */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <BookOpen className="w-8 h-8 text-blue-600 mr-2" />
                                    What to Expect During Your Consultation
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    A typical new patient gastroenterology consultation follows this structure. Understanding the flow can help you prepare mentally and make the most of each segment.
                                </p>

                                {/* Consultation Timeline */}
                                <div className="mb-8">
                                    <div className="space-y-6">
                                        {/* Check-in */}
                                        <div className="flex items-start gap-4">
                                            <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mt-1">
                                                <span className="font-bold text-blue-800">1</span>
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-2">Check-in Process (10-15 min)</h3>
                                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                                    <li>Paperwork completion (new patients average 6 forms)</li>
                                                    <li>Insurance verification and copay collection</li>
                                                    <li>Vital signs measurement (weight, blood pressure)</li>
                                                    <li>Medication list review with nurse</li>
                                                </ul>
                                            </div>
                                        </div>

                                        {/* Initial Assessment */}
                                        <div className="flex items-start gap-4">
                                            <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mt-1">
                                                <span className="font-bold text-blue-800">2</span>
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-2">Initial Assessment (5-10 min)</h3>
                                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                                    <li>Medical assistant reviews chief complaint</li>
                                                    <li>Preliminary questions about symptoms</li>
                                                    <li>Preparation for physical exam</li>
                                                </ul>
                                            </div>
                                        </div>

                                        {/* Doctor Consultation */}
                                        <div className="flex items-start gap-4">
                                            <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mt-1">
                                                <span className="font-bold text-blue-800">3</span>
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-2">Doctor Consultation (15-20 min)</h3>
                                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                                    <li>Detailed medical history review</li>
                                                    <li>Physical examination (abdominal palpation, etc.)</li>
                                                    <li>Discussion of potential diagnoses</li>
                                                    <li>Review of diagnostic options</li>
                                                    <li>Initial treatment recommendations</li>
                                                </ul>
                                            </div>
                                        </div>

                                        {/* Wrap-up */}
                                        <div className="flex items-start gap-4">
                                            <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mt-1">
                                                <span className="font-bold text-blue-800">4</span>
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-2">Wrap-up (5-10 min)</h3>
                                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                                    <li>Scheduling of follow-up or procedures</li>
                                                    <li>Prescription instructions</li>
                                                    <li>Educational materials provided</li>
                                                    <li>Q&A time</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Physical Exam Details */}
                                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Physical Examination Components</h3>
                                    <p className="text-gray-700 mb-2">
                                        Gastroenterologists typically perform these assessments during your consultation:
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-4 mt-3">
                                        <div className="flex items-start">
                                            <ChevronRight className="w-4 h-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                                            <span>Abdominal palpation (checking for tenderness, masses)</span>
                                        </div>
                                        <div className="flex items-start">
                                            <ChevronRight className="w-4 h-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                                            <span>Percussion (assessing organ size and fluid)</span>
                                        </div>
                                        <div className="flex items-start">
                                            <ChevronRight className="w-4 h-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                                            <span>Auscultation (listening to bowel sounds)</span>
                                        </div>
                                        <div className="flex items-start">
                                            <ChevronRight className="w-4 h-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                                            <span>Digital rectal exam (when appropriate)</span>
                                        </div>
                                        <div className="flex items-start">
                                            <ChevronRight className="w-4 h-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                                            <span>Skin and eye examination (for signs of jaundice)</span>
                                        </div>
                                        <div className="flex items-start">
                                            <ChevronRight className="w-4 h-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                                            <span>Nutritional status assessment</span>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Questions Section */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <ClipboardList className="w-8 h-8 text-blue-600 mr-2" />
                                    Essential Questions to Ask Your Gastroenterologist
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Asking informed questions improves your understanding and engagement in care decisions. These questions are categorized by concern type:
                                </p>

                                {/* Questions by Category */}
                                <div className="space-y-6">
                                    {/* Diagnosis */}
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Diagnosis Questions</h3>
                                        </div>
                                        <div className="p-4">
                                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                                <li>What are the possible causes of my symptoms?</li>
                                                <li>How did you arrive at this diagnosis?</li>
                                                <li>Are there other conditions with similar symptoms we should rule out?</li>
                                                <li>What diagnostic tests will I need, and why?</li>
                                                <li>How accurate are these tests, and are there risks?</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Treatment */}
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Treatment Questions</h3>
                                        </div>
                                        <div className="p-4">
                                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                                <li>What are my treatment options, including pros/cons of each?</li>
                                                <li>What are the expected outcomes of this treatment?</li>
                                                <li>How soon should I expect improvement?</li>
                                                <li>What side effects should I watch for?</li>
                                                <li>Are there lifestyle changes that could complement treatment?</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Procedure */}
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Procedure Questions (if recommended)</h3>
                                        </div>
                                        <div className="p-4">
                                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                                <li>Why is this procedure being recommended?</li>
                                                <li>What exactly will happen during the procedure?</li>
                                                <li>How should I prepare, and what's the recovery like?</li>
                                                <li>What are the risks and potential complications?</li>
                                                <li>When will I get results, and how will they be communicated?</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Communication Tips */}
                                <div className="bg-white border border-gray-200 rounded-lg p-6 mt-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Effective Communication Strategies</h3>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                                                <Check className="w-5 h-5 text-green-500 mr-2" />
                                                Do's
                                            </h4>
                                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                                                <li>Be concise but thorough with symptom descriptions</li>
                                                <li>Ask for clarification if medical terms confuse you</li>
                                                <li>Repeat back instructions to confirm understanding</li>
                                                <li>Request written materials or reputable online resources</li>
                                                <li>Express your concerns and preferences openly</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                                                <AlertTriangle className="w-5 h-5 text-yellow-500 mr-2" />
                                                Don'ts
                                            </h4>
                                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                                                <li>Don't withhold embarrassing symptoms (they've heard it all)</li>
                                                <li>Avoid self-diagnosing from internet research</li>
                                                <li>Don't interrupt the doctor's questions</li>
                                                <li>Avoid vague descriptions like "stomach hurts sometimes"</li>
                                                <li>Don't leave without understanding next steps</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Follow-up Section */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Heart className="w-8 h-8 text-blue-600 mr-2" />
                                    Maximizing Follow-up Care
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Effective follow-up ensures continuity of care and better health outcomes. Studies show patients who follow up appropriately experience 40% better symptom control.
                                </p>

                                {/* Follow-up Checklist */}
                                <div className="bg-blue-50 p-6 rounded-lg mb-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Post-Consultation Checklist</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-start">
                                            <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-bold text-gray-900">Immediately After</h4>
                                                <p className="text-gray-700">Review and organize all instructions, prescriptions, and referrals</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-bold text-gray-900">Within 24 Hours</h4>
                                                <p className="text-gray-700">Schedule recommended tests/procedures and follow-up appointments</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-bold text-gray-900">First Week</h4>
                                                <p className="text-gray-700">Begin treatment plan, note any reactions or side effects</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-bold text-gray-900">Ongoing</h4>
                                                <p className="text-gray-700">Continue symptom tracking, attend all scheduled follow-ups</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Digital Tools */}
                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Digital Tools for Better Follow-up</h3>
                                    <div className="grid md:grid-cols-3 gap-4">
                                        <div className="border border-gray-200 rounded-lg p-4">
                                            <h4 className="font-bold text-gray-900 mb-2">Patient Portals</h4>
                                            <p className="text-gray-700 text-sm">Secure messaging, test results, appointment requests</p>
                                        </div>
                                        <div className="border border-gray-200 rounded-lg p-4">
                                            <h4 className="font-bold text-gray-900 mb-2">Symptom Trackers</h4>
                                            <p className="text-gray-700 text-sm">Apps like Bowelle, GI Monitor, or custom spreadsheets</p>
                                        </div>
                                        <div className="border border-gray-200 rounded-lg p-4">
                                            <h4 className="font-bold text-gray-900 mb-2">Medication Reminders</h4>
                                            <p className="text-gray-700 text-sm">Apps with alerts and refill management</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Effective gastroenterologist consultations require preparation before, engagement during, and follow-through after your appointment. By taking an active role in your digestive health care, you significantly improve diagnostic accuracy, treatment effectiveness, and long-term outcomes.
                                </p>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "The most successful patients come prepared with organized information, clear questions, and realistic expectations. This collaborative approach leads to better digestive health outcomes for everyone." — Dr. Sarah Johnson, Gastroenterologist
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
                                            Dr. Sarah Johnson, MD
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
                                <h3 className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-2">DIGESTIVE HEALTH NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get expert GI health tips</h4>
                                <p className="text-gray-700 text-sm">
                                    Monthly insights on managing digestive conditions, latest treatments, and nutrition advice.
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

                        {/* Common Procedures */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Common GI Procedures</h3>
                            <div className="space-y-3">
                                <a href="#" className="block group">
                                    <div className="flex items-center gap-3 p-2 rounded hover:bg-blue-50 transition-colors">
                                        <ChevronRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
                                        <span className="font-medium">Upper Endoscopy (EGD)</span>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-center gap-3 p-2 rounded hover:bg-blue-50 transition-colors">
                                        <ChevronRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
                                        <span className="font-medium">Colonoscopy</span>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-center gap-3 p-2 rounded hover:bg-blue-50 transition-colors">
                                        <ChevronRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
                                        <span className="font-medium">Capsule Endoscopy</span>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-center gap-3 p-2 rounded hover:bg-blue-50 transition-colors">
                                        <ChevronRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
                                        <span className="font-medium">ERCP</span>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-center gap-3 p-2 rounded hover:bg-blue-50 transition-colors">
                                        <ChevronRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
                                        <span className="font-medium">Flexible Sigmoidoscopy</span>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Emergency Signs */}
                        <div className="bg-red-50 border-l-4 border-red-400 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                                <AlertTriangle className="w-5 h-5 text-red-600 mr-2" />
                                When to Seek Immediate Care
                            </h3>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li>Severe, unrelenting abdominal pain</li>
                                <li>Vomiting blood or black material</li>
                                <li>Black, tarry stools</li>
                                <li>High fever with abdominal symptoms</li>
                                <li>Sudden inability to pass stool with vomiting</li>
                                <li>Jaundice (yellow skin/eyes) with pain</li>
                            </ul>
                        </div>

                        {/* Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Trusted Resources</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">American Gastroenterological Association</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Crohn's & Colitis Foundation</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">American Liver Foundation</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">International Foundation for GI Disorders</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}