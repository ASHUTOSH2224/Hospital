"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, Eye, Glasses, Sun, ClipboardList, Clock, AlertTriangle, HeartPulse } from "lucide-react"

export default function OptometristConsultationsGuide() {
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

    const tabs = ["Preparation", "During Visit", "Follow-up", "Conditions"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Optometrist Consultations: Making the Most of Your Eye Care Appointments
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
                                Regular optometrist consultations are crucial for maintaining optimal eye health and detecting potential vision problems early. This comprehensive guide will help you prepare for your appointment, understand what to expect during your visit, and maximize the benefits of professional eye care.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1580121441575-41bcb5c6b47c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                    alt="Optometrist performing an eye examination"
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
                                    <li>Adults should have comprehensive eye exams every 1-2 years</li>
                                    <li>Bring your current glasses, contact lenses, and medical history</li>
                                    <li>Be prepared to discuss any vision changes or eye discomfort</li>
                                    <li>Common tests include visual acuity, eye pressure, and retinal imaging</li>
                                    <li>Ask questions about your eye health and treatment options</li>
                                </ul>
                            </div>

                            {/* Importance of Regular Eye Exams */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Eye className="w-8 h-8 text-blue-600 mr-2" />
                                    Why Regular Optometrist Visits Matter
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Comprehensive eye exams do more than determine your prescription for glasses or contacts. They are essential for detecting eye diseases early when they're most treatable. According to the <a href="#" className="text-blue-600 hover:underline">American Optometric Association</a>, many serious eye conditions show no early symptoms.
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-sm">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <Check className="w-5 h-5 text-blue-600 mr-2" />
                                            Early Detection Benefits
                                        </h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                                            <li>Glaucoma can be detected before vision loss occurs</li>
                                            <li>Diabetic retinopathy can be managed more effectively</li>
                                            <li>Macular degeneration can be slowed with early intervention</li>
                                        </ul>
                                    </div>
                                    <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-sm">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <AlertTriangle className="w-5 h-5 text-blue-600 mr-2" />
                                            Silent Eye Conditions
                                        </h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                                            <li>40% of glaucoma cases are undiagnosed</li>
                                            <li>25% of people with diabetes have some retinopathy</li>
                                            <li>Age-related macular degeneration often has no early symptoms</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Recommended Exam Frequency</h3>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 uppercase">Age Group</th>
                                                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 uppercase">Frequency</th>
                                                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 uppercase">Special Considerations</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200">
                                                <tr>
                                                    <td className="px-4 py-2 whitespace-nowrap">Children (0-5)</td>
                                                    <td className="px-4 py-2 whitespace-nowrap">At 6mo, 3y, before 1st grade</td>
                                                    <td className="px-4 py-2">Screen for amblyopia, strabismus</td>
                                                </tr>
                                                <tr className="bg-gray-50">
                                                    <td className="px-4 py-2 whitespace-nowrap">School Age (6-18)</td>
                                                    <td className="px-4 py-2 whitespace-nowrap">Every 2 years</td>
                                                    <td className="px-4 py-2">Monitor myopia progression</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-2 whitespace-nowrap">Adults (19-64)</td>
                                                    <td className="px-4 py-2 whitespace-nowrap">Every 1-2 years</td>
                                                    <td className="px-4 py-2">More frequent if risk factors exist</td>
                                                </tr>
                                                <tr className="bg-gray-50">
                                                    <td className="px-4 py-2 whitespace-nowrap">Seniors (65+)</td>
                                                    <td className="px-4 py-2 whitespace-nowrap">Annually</td>
                                                    <td className="px-4 py-2">Screen for cataracts, AMD, glaucoma</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </section>

                            {/* Preparing for Your Appointment */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <ClipboardList className="w-8 h-8 text-blue-600 mr-2" />
                                    Preparing for Your Optometrist Consultation
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Proper preparation ensures your optometrist has all the information needed for an accurate assessment of your eye health. Follow this checklist to make the most of your appointment:
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">What to Bring</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                                            <li>Current eyeglasses and/or contact lenses</li>
                                            <li>List of medications (including dosages)</li>
                                            <li>Family history of eye diseases</li>
                                            <li>Insurance information and ID</li>
                                            <li>Sunglasses (your pupils may be dilated)</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Questions to Prepare</h3>
                                        <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-4">
                                            <li>What is my current vision prescription?</li>
                                            <li>Are there any signs of eye disease?</li>
                                            <li>How often should I have my eyes checked?</li>
                                            <li>What symptoms should prompt an immediate visit?</li>
                                            <li>Are there lifestyle changes to protect my vision?</li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Pro Tip:</h3>
                                    <p className="text-gray-700">
                                        Keep a "vision journal" for 1-2 weeks before your appointment noting any symptoms (headaches, eye strain, blurry vision) and when they occur. This helps your optometrist identify patterns.
                                    </p>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Common Tests and What They Measure</h3>
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 uppercase">Test Name</th>
                                                <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 uppercase">Purpose</th>
                                                <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 uppercase">Duration</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-2 whitespace-nowrap font-medium">Visual Acuity</td>
                                                <td className="px-4 py-2">Measures clarity of vision at various distances</td>
                                                <td className="px-4 py-2 whitespace-nowrap">2-3 minutes</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-2 whitespace-nowrap font-medium">Tonometry</td>
                                                <td className="px-4 py-2">Measures intraocular pressure (glaucoma test)</td>
                                                <td className="px-4 py-2 whitespace-nowrap">1-2 minutes</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-2 whitespace-nowrap font-medium">Retinal Imaging</td>
                                                <td className="px-4 py-2">Photographs back of eye to check for disease</td>
                                                <td className="px-4 py-2 whitespace-nowrap">5-7 minutes</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-2 whitespace-nowrap font-medium">Slit Lamp Exam</td>
                                                <td className="px-4 py-2">Microscopic examination of eye structures</td>
                                                <td className="px-4 py-2 whitespace-nowrap">3-5 minutes</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-2 whitespace-nowrap font-medium">Visual Field</td>
                                                <td className="px-4 py-2">Checks peripheral vision</td>
                                                <td className="px-4 py-2 whitespace-nowrap">5-10 minutes</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            {/* During Your Visit */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Clock className="w-8 h-8 text-blue-600 mr-2" />
                                    What to Expect During Your Visit
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    A comprehensive eye exam typically lasts 45-90 minutes. Here's a breakdown of what happens during each stage:
                                </p>

                                <div className="space-y-6">
                                    {/* Step 1 */}
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center font-bold mt-1">1</div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">Medical History Review</h3>
                                            <p className="text-gray-700 mb-2">
                                                Your optometrist will ask about:
                                            </p>
                                            <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                                                <li>Current vision problems or symptoms</li>
                                                <li>Family history of eye disease</li>
                                                <li>General health conditions (diabetes, hypertension)</li>
                                                <li>Medications that might affect vision</li>
                                                <li>Occupational and lifestyle visual demands</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Step 2 */}
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center font-bold mt-1">2</div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">Preliminary Tests</h3>
                                            <p className="text-gray-700 mb-2">
                                                A technician may perform initial measurements:
                                            </p>
                                            <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                                                <li>Autorefraction (estimates prescription)</li>
                                                <li>Non-contact tonometry (eye pressure)</li>
                                                <li>Pupillary response assessment</li>
                                                <li>Color vision screening</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Step 3 */}
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center font-bold mt-1">3</div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">Comprehensive Examination</h3>
                                            <p className="text-gray-700 mb-2">
                                                The optometrist will conduct:
                                            </p>
                                            <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                                                <li>Refraction test to determine exact prescription</li>
                                                <li>Binocular vision assessment (eye teaming)</li>
                                                <li>Ocular health evaluation with slit lamp</li>
                                                <li>Retinal examination (often after dilation)</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Step 4 */}
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center font-bold mt-1">4</div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">Discussion of Findings</h3>
                                            <p className="text-gray-700 mb-2">
                                                Your optometrist will explain:
                                            </p>
                                            <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                                                <li>Current vision status and any changes</li>
                                                <li>Eye health findings and concerns</li>
                                                <li>Recommended treatment options</li>
                                                <li>Follow-up schedule if needed</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Important:</h3>
                                    <p className="text-gray-700">
                                        Pupil dilation lasts 4-6 hours and may cause light sensitivity and blurred near vision. Bring sunglasses and consider arranging transportation if you're sensitive to these effects.
                                    </p>
                                </div>
                            </section>

                            {/* Common Eye Conditions */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <HeartPulse className="w-8 h-8 text-blue-600 mr-2" />
                                    Common Eye Conditions Detected During Consultations
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Optometrists screen for numerous eye conditions. Here are the most common ones, their symptoms, and typical treatments:
                                </p>

                                <div className="space-y-6">
                                    {/* Condition 1 */}
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Myopia (Nearsightedness)</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="grid md:grid-cols-3 gap-4">
                                                <div>
                                                    <h4 className="font-medium text-gray-900 mb-1">Symptoms</h4>
                                                    <ul className="list-disc list-inside text-gray-700 text-sm ml-2">
                                                        <li>Blurry distance vision</li>
                                                        <li>Squinting</li>
                                                        <li>Eye strain</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4 className="font-medium text-gray-900 mb-1">Detection</h4>
                                                    <ul className="list-disc list-inside text-gray-700 text-sm ml-2">
                                                        <li>Refraction test</li>
                                                        <li>Retinoscopy</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4 className="font-medium text-gray-900 mb-1">Treatment</h4>
                                                    <ul className="list-disc list-inside text-gray-700 text-sm ml-2">
                                                        <li>Corrective lenses</li>
                                                        <li>Orthokeratology</li>
                                                        <li>Refractive surgery</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Condition 2 */}
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Glaucoma</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="grid md:grid-cols-3 gap-4">
                                                <div>
                                                    <h4 className="font-medium text-gray-900 mb-1">Symptoms</h4>
                                                    <ul className="list-disc list-inside text-gray-700 text-sm ml-2">
                                                        <li>Often asymptomatic early</li>
                                                        <li>Peripheral vision loss</li>
                                                        <li>Tunnel vision (late stage)</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4 className="font-medium text-gray-900 mb-1">Detection</h4>
                                                    <ul className="list-disc list-inside text-gray-700 text-sm ml-2">
                                                        <li>Tonometry</li>
                                                        <li>Optic nerve exam</li>
                                                        <li>Visual field test</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4 className="font-medium text-gray-900 mb-1">Treatment</h4>
                                                    <ul className="list-disc list-inside text-gray-700 text-sm ml-2">
                                                        <li>Prescription eye drops</li>
                                                        <li>Laser therapy</li>
                                                        <li>Surgical options</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Condition 3 */}
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Dry Eye Syndrome</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="grid md:grid-cols-3 gap-4">
                                                <div>
                                                    <h4 className="font-medium text-gray-900 mb-1">Symptoms</h4>
                                                    <ul className="list-disc list-inside text-gray-700 text-sm ml-2">
                                                        <li>Burning/stinging</li>
                                                        <li>Redness</li>
                                                        <li>Blurry vision</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4 className="font-medium text-gray-900 mb-1">Detection</h4>
                                                    <ul className="list-disc list-inside text-gray-700 text-sm ml-2">
                                                        <li>Tear film assessment</li>
                                                        <li>Corneal staining</li>
                                                        <li>Schirmer's test</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4 className="font-medium text-gray-900 mb-1">Treatment</h4>
                                                    <ul className="list-disc list-inside text-gray-700 text-sm ml-2">
                                                        <li>Artificial tears</li>
                                                        <li>Prescription drops</li>
                                                        <li>Lid hygiene</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* After Your Visit */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Check className="w-8 h-8 text-blue-600 mr-2" />
                                    After Your Consultation: Next Steps
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Your optometrist will provide specific recommendations based on your exam results. Here's what you might expect:
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-sm">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <Glasses className="w-5 h-5 text-blue-600 mr-2" />
                                            If You Need Vision Correction
                                        </h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                                            <li>Get your updated prescription</li>
                                            <li>Discuss lens options (anti-glare, transitions, etc.)</li>
                                            <li>Ask about contact lens fitting if interested</li>
                                            <li>Understand when to expect vision stability</li>
                                        </ul>
                                    </div>
                                    <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-sm">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <AlertTriangle className="w-5 h-5 text-blue-600 mr-2" />
                                            If Eye Disease is Detected
                                        </h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                                            <li>Get clear explanation of condition</li>
                                            <li>Understand treatment plan and timeline</li>
                                            <li>Ask about warning signs requiring urgent care</li>
                                            <li>Schedule follow-up appointments</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                                    <h3 className="font-bold text-gray-900 mb-2">Follow-up Timeline Guide</h3>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 uppercase">Condition</th>
                                                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 uppercase">First Follow-up</th>
                                                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 uppercase">Monitoring Frequency</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200">
                                                <tr>
                                                    <td className="px-4 py-2 whitespace-nowrap">Glaucoma suspect</td>
                                                    <td className="px-4 py-2 whitespace-nowrap">3-6 months</td>
                                                    <td className="px-4 py-2">Every 6-12 months</td>
                                                </tr>
                                                <tr className="bg-gray-50">
                                                    <td className="px-4 py-2 whitespace-nowrap">Diabetic retinopathy</td>
                                                    <td className="px-4 py-2 whitespace-nowrap">3-6 months</td>
                                                    <td className="px-4 py-2">3-12 months based on severity</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-2 whitespace-nowrap">Dry eye syndrome</td>
                                                    <td className="px-4 py-2 whitespace-nowrap">4-8 weeks</td>
                                                    <td className="px-4 py-2">Every 6-12 months</td>
                                                </tr>
                                                <tr className="bg-gray-50">
                                                    <td className="px-4 py-2 whitespace-nowrap">Cataract monitoring</td>
                                                    <td className="px-4 py-2 whitespace-nowrap">6-12 months</td>
                                                    <td className="px-4 py-2">Annually until surgery needed</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Regular optometrist consultations are a vital part of maintaining not just your vision, but your overall health. Many systemic conditions like diabetes and hypertension can first be detected through eye exams.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    By being prepared, asking the right questions, and following through with recommended care, you're taking proactive steps to preserve your vision for years to come.
                                </p>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "Your eyes are the window to both the world around you and your internal health. Regular comprehensive eye exams are one of the best investments you can make in your long-term wellbeing." - Dr. Sarah Johnson, OD
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
                                            Dr. Sarah Johnson, OD
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
                                <h3 className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-2">EYE HEALTH NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get eye care tips and updates</h4>
                                <p className="text-gray-700 text-sm">
                                    Monthly vision health advice, research updates, and appointment reminders.
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
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Eye Exam Preparation Checklist</h3>
                            <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                    <input type="checkbox" id="check1" className="mt-1" />
                                    <label htmlFor="check1" className="text-gray-700">Current glasses/contacts</label>
                                </div>
                                <div className="flex items-start gap-3">
                                    <input type="checkbox" id="check2" className="mt-1" />
                                    <label htmlFor="check2" className="text-gray-700">Medication list</label>
                                </div>
                                <div className="flex items-start gap-3">
                                    <input type="checkbox" id="check3" className="mt-1" />
                                    <label htmlFor="check3" className="text-gray-700">Insurance information</label>
                                </div>
                                <div className="flex items-start gap-3">
                                    <input type="checkbox" id="check4" className="mt-1" />
                                    <label htmlFor="check4" className="text-gray-700">Sunglasses</label>
                                </div>
                                <div className="flex items-start gap-3">
                                    <input type="checkbox" id="check5" className="mt-1" />
                                    <label htmlFor="check5" className="text-gray-700">List of questions</label>
                                </div>
                            </div>
                        </div>

                        {/* Emergency Symptoms */}
                        <div className="bg-red-50 border-l-4 border-red-400 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                <AlertTriangle className="w-5 h-5 text-red-600 mr-2" />
                                When to Seek Immediate Care
                            </h3>
                            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                                <li>Sudden vision loss</li>
                                <li>Severe eye pain</li>
                                <li>Flashes of light or new floaters</li>
                                <li>Double vision</li>
                                <li>Eye injury</li>
                            </ul>
                        </div>

                        {/* Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Further Reading</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Understanding Your Prescription</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Digital Eye Strain Prevention</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Children's Vision Screening Guide</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Nutrition for Eye Health</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}