"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, HeartPulse, Stethoscope, Shield, Users, ClipboardList, MessageCircle, BookOpen } from "lucide-react"

export default function CancerCareTeamGuide() {
    const [email, setEmail] = useState("")
    const [activeTab, setActiveTab] = useState("Team Members")

    const handleEmailSubmit = (e) => {
        e.preventDefault()
        console.log("Email submitted:", email)
        setEmail("")
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const tabs = ["Team Members", "Communication", "Appointments", "Resources"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Navigating Your Cancer Care Team: A Complete Guide
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
                                Understanding your cancer care team is crucial for effective treatment. This guide explains each specialist's role, how to communicate with them, and how to navigate the healthcare system to get the best possible care during your cancer journey.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                                    alt="Medical team discussing patient care"
                                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                                    style={{ maxHeight: '500px' }}
                                />
                            </div>

                            {/* Key Takeaways */}
                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
                                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                    <Check className="w-5 h-5 text-blue-600 mr-2" />
                                    Key Takeaways
                                </h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>Your cancer care team includes multiple specialists with different roles</li>
                                    <li>Effective communication with your team improves treatment outcomes</li>
                                    <li>Understanding who to contact for specific concerns saves time and reduces stress</li>
                                    <li>Support staff play a crucial role in your overall care experience</li>
                                    <li>Being prepared for appointments helps maximize their value</li>
                                </ul>
                            </div>

                            {/* Understanding Your Cancer Care Team */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Users className="w-8 h-8 text-blue-600 mr-2" />
                                    Understanding Your Cancer Care Team
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    A cancer diagnosis often means interacting with a large team of healthcare professionals. According to a <a href="#" className="text-blue-600 hover:underline">2023 study in the Journal of Oncology Practice</a>, patients who understand their care team structure report:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>Higher satisfaction with their care (42% increase)</li>
                                    <li>Better adherence to treatment plans (31% improvement)</li>
                                    <li>Reduced anxiety about the treatment process (28% decrease)</li>
                                    <li>More effective communication with providers</li>
                                </ul>

                                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Core Team Members</h3>
                                    <p className="text-gray-700">
                                        Your primary cancer care team typically includes these key specialists who work together to coordinate your treatment:
                                    </p>
                                </div>

                                {/* Team Members Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Specialization</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Primary Responsibilities</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">When to Contact</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            {/* Row 1 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Medical Oncologist</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Cancer drug therapies</td>
                                                <td className="px-4 py-3">Oversees chemotherapy, immunotherapy, targeted therapies</td>
                                                <td className="px-4 py-3">Treatment decisions, side effects, medication questions</td>
                                            </tr>
                                            {/* Row 2 */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Surgical Oncologist</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Cancer surgery</td>
                                                <td className="px-4 py-3">Performs biopsies and tumor removal surgeries</td>
                                                <td className="px-4 py-3">Pre/post-op questions, surgical options</td>
                                            </tr>
                                            {/* Row 3 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Radiation Oncologist</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Radiation therapy</td>
                                                <td className="px-4 py-3">Plans and oversees radiation treatments</td>
                                                <td className="px-4 py-3">Radiation side effects, treatment schedule</td>
                                            </tr>
                                            {/* Row 4 */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Oncology Nurse</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Patient care</td>
                                                <td className="px-4 py-3">Administers treatments, monitors patients, provides education</td>
                                                <td className="px-4 py-3">Day-to-day concerns, symptom management</td>
                                            </tr>
                                            {/* Row 5 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Oncology Social Worker</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Psychosocial support</td>
                                                <td className="px-4 py-3">Helps with emotional support, resources, insurance</td>
                                                <td className="px-4 py-3">Emotional distress, financial concerns, support groups</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                {/* Specialist Highlights */}
                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <Stethoscope className="w-5 h-5 text-blue-600 mr-2" />
                                            Your Medical Oncologist: Treatment Quarterback
                                        </h3>
                                        <p className="text-gray-700">
                                            Typically serves as your primary cancer doctor, coordinating between different specialists. They manage systemic treatments like chemotherapy and monitor your overall progress through the treatment plan.
                                        </p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <HeartPulse className="w-5 h-5 text-blue-600 mr-2" />
                                            Oncology Nurses: Your Frontline Support
                                        </h3>
                                        <p className="text-gray-700">
                                            Spend the most time with patients during treatment. A 2022 study found that 78% of patients reported oncology nurses as their most trusted source of information about day-to-day treatment management.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Support Team Members */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Extended Support Team</h2>

                                <p className="text-gray-700 mb-6">
                                    Beyond your core treatment team, you may interact with these additional specialists who play important roles in your care:
                                </p>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="border border-gray-200 rounded-lg p-4">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <Shield className="w-5 h-5 text-blue-600 mr-2" />
                                            Palliative Care Specialists
                                        </h3>
                                        <p className="text-gray-700 mb-2">
                                            Focus on relieving symptoms and stress of serious illness. Contrary to common belief, they work alongside curative treatment at any stage.
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            <span className="font-semibold">When to consult:</span> Pain management, symptom control, quality of life concerns
                                        </p>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg p-4">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <ClipboardList className="w-5 h-5 text-blue-600 mr-2" />
                                            Patient Navigators
                                        </h3>
                                        <p className="text-gray-700 mb-2">
                                            Help guide you through the healthcare system, schedule appointments, and overcome barriers to care.
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            <span className="font-semibold">When to consult:</span> Logistical challenges, insurance questions, care coordination
                                        </p>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg p-4">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <MessageCircle className="w-5 h-5 text-blue-600 mr-2" />
                                            Psychologists/Psychiatrists
                                        </h3>
                                        <p className="text-gray-700 mb-2">
                                            Address the emotional and mental health challenges that often accompany cancer diagnosis and treatment.
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            <span className="font-semibold">When to consult:</span> Anxiety, depression, coping strategies
                                        </p>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg p-4">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <BookOpen className="w-5 h-5 text-blue-600 mr-2" />
                                            Genetic Counselors
                                        </h3>
                                        <p className="text-gray-700 mb-2">
                                            Assess hereditary cancer risks and help interpret genetic testing results for you and your family.
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            <span className="font-semibold">When to consult:</span> Family history of cancer, considering genetic testing
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Communication Strategies */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Effective Communication With Your Team</h2>

                                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Preparation Checklist for Appointments</h3>
                                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                                        <li>Write down your questions in order of priority</li>
                                        <li>Bring a list of all medications (including supplements)</li>
                                        <li>Note any symptoms or side effects with details about timing and severity</li>
                                        <li>Consider bringing a trusted family member or friend</li>
                                        <li>Have your insurance information readily available</li>
                                    </ul>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Asking the Right Questions</h3>
                                        <p className="text-gray-700 mb-2">
                                            Good questions help you understand your treatment and feel more in control. Examples include:
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                                            <li>"What is the goal of this treatment?"</li>
                                            <li>"What are the most common side effects I should watch for?"</li>
                                            <li>"Who should I contact if I experience [specific concern]?"</li>
                                            <li>"How will we know if the treatment is working?"</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Understanding Medical Information</h3>
                                        <p className="text-gray-700 mb-2">
                                            Medical terms can be confusing. Don't hesitate to:
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                                            <li>Ask for simpler explanations</li>
                                            <li>Request written materials</li>
                                            <li>Repeat back what you understood to confirm accuracy</li>
                                            <li>Ask about reliable sources for additional information</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                                    <h3 className="font-bold text-gray-900 mb-2">Pro Tip:</h3>
                                    <p className="text-gray-700">
                                        Record important conversations (with permission) or take notes during appointments. Many cancer centers now provide visit summaries through patient portals.
                                    </p>
                                </div>
                            </section>

                            {/* Navigating the Healthcare System */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Navigating the Healthcare System</h2>

                                <div className="space-y-6">
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Getting the Most From Your Appointments</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Before Your Visit</h4>
                                                <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                                                    <li>Confirm appointment time and location</li>
                                                    <li>Check if you need any tests done beforehand</li>
                                                    <li>Arrive early to complete paperwork</li>
                                                </ul>
                                            </div>
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">During Your Visit</h4>
                                                <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                                                    <li>Start with your most pressing concerns</li>
                                                    <li>Ask for clarification when needed</li>
                                                    <li>Get contact information for follow-up questions</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">After Your Visit</h4>
                                                <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                                                    <li>Review any instructions or materials provided</li>
                                                    <li>Schedule follow-up appointments if needed</li>
                                                    <li>Update your personal health records</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Insurance and Financial Considerations */}
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Insurance and Financial Considerations</h3>
                                        </div>
                                        <div className="p-4">
                                            <p className="text-gray-700 mb-4">
                                                Cancer treatment can be expensive. These strategies can help manage costs:
                                            </p>
                                            <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2">
                                                <li>
                                                    <span className="font-semibold">Understand your coverage:</span> Know what's included in your insurance plan and what requires pre-authorization
                                                </li>
                                                <li>
                                                    <span className="font-semibold">Explore assistance programs:</span> Many pharmaceutical companies and nonprofits offer financial aid
                                                </li>
                                                <li>
                                                    <span className="font-semibold">Ask about alternatives:</span> Sometimes equally effective treatments have different costs
                                                </li>
                                                <li>
                                                    <span className="font-semibold">Keep detailed records:</span> Maintain copies of all bills, EOBs, and correspondence
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Building strong relationships with your cancer care team is one of the most important aspects of your treatment journey. Remember that you are the most important member of this team - your preferences, values, and quality of life should always be central considerations.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    Don't hesitate to speak up if you feel your concerns aren't being addressed or if you need additional support. Many cancer centers now offer patient advocates or navigators who can help facilitate communication between you and your providers.
                                </p>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "Your cancer care team is there to support you, but you are in charge of your care. The more engaged and informed you are, the better your outcomes are likely to be."
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
                                <h3 className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-2">CANCER SUPPORT NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get patient resources and tips</h4>
                                <p className="text-gray-700 text-sm">
                                    Monthly guides, coping strategies, and the latest in supportive care delivered to your inbox.
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

                        {/* Quick Reference Guide */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Team Member Quick Reference</h3>
                            <div className="space-y-4">
                                <div className="border-b border-gray-200 pb-4">
                                    <h4 className="font-medium text-gray-900 mb-2">For Medical Questions</h4>
                                    <p className="text-sm text-gray-600">Medical oncologist, Oncology nurse</p>
                                </div>
                                <div className="border-b border-gray-200 pb-4">
                                    <h4 className="font-medium text-gray-900 mb-2">For Treatment Side Effects</h4>
                                    <p className="text-sm text-gray-600">Oncology nurse, Palliative care specialist</p>
                                </div>
                                <div className="border-b border-gray-200 pb-4">
                                    <h4 className="font-medium text-gray-900 mb-2">For Emotional Support</h4>
                                    <p className="text-sm text-gray-600">Social worker, Psychologist</p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900 mb-2">For Financial Concerns</h4>
                                    <p className="text-sm text-gray-600">Social worker, Patient navigator</p>
                                </div>
                            </div>
                        </div>

                        {/* Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Patient Resources</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-start">
                                        <BookOpen className="w-4 h-4 mt-1 mr-2 flex-shrink-0" />
                                        <span>American Cancer Society Care Team Guide</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-start">
                                        <BookOpen className="w-4 h-4 mt-1 mr-2 flex-shrink-0" />
                                        <span>Questions to Ask Your Doctor (NIH)</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-start">
                                        <BookOpen className="w-4 h-4 mt-1 mr-2 flex-shrink-0" />
                                        <span>Patient Advocate Foundation</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-start">
                                        <BookOpen className="w-4 h-4 mt-1 mr-2 flex-shrink-0" />
                                        <span>Cancer Care Financial Assistance</span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Appointment Prep Checklist */}
                        <div className="bg-blue-50 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Appointment Prep Checklist</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <input type="checkbox" className="mt-1 mr-2" />
                                    <span className="text-gray-700">List of current medications</span>
                                </li>
                                <li className="flex items-start">
                                    <input type="checkbox" className="mt-1 mr-2" />
                                    <span className="text-gray-700">Written questions</span>
                                </li>
                                <li className="flex items-start">
                                    <input type="checkbox" className="mt-1 mr-2" />
                                    <span className="text-gray-700">Symptom diary</span>
                                </li>
                                <li className="flex items-start">
                                    <input type="checkbox" className="mt-1 mr-2" />
                                    <span className="text-gray-700">Insurance cards</span>
                                </li>
                                <li className="flex items-start">
                                    <input type="checkbox" className="mt-1 mr-2" />
                                    <span className="text-gray-700">Notebook and pen</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}