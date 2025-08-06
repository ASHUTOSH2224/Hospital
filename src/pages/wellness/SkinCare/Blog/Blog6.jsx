"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, HeartPulse, ClipboardList, Shield, AlertCircle, MessageSquare, Star, ChevronRight } from "lucide-react"

export default function DermatologistQuestionsGuide() {
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

    const tabs = ["Preparation", "During Visit", "Treatment", "Follow-up"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Essential Questions to Ask Your Dermatologist
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
                                Preparing for your dermatology appointment with the right questions can make all the difference in your skin health journey. This comprehensive guide covers essential questions about skin type analysis, treatment options, product recommendations, and personalized skincare goals to help you get the most from your visit.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=732&h=549&q=80"
                                    alt="Patient consulting with dermatologist"
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
                                    <li>Prepare questions in advance to maximize your limited appointment time</li>
                                    <li>Ask about both immediate concerns and long-term skin health strategies</li>
                                    <li>Understand potential side effects of recommended treatments</li>
                                    <li>Get clarification on skincare product ingredients to avoid</li>
                                    <li>Establish clear follow-up expectations and warning signs to watch for</li>
                                </ul>
                            </div>

                            {/* Why These Questions Matter */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <HeartPulse className="w-8 h-8 text-blue-600 mr-2" />
                                    Why These Questions Matter
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Dermatology appointments are often brief but packed with important information. A <a href="#" className="text-blue-600 hover:underline">2023 study in the Journal of Dermatological Treatment</a> found that patients who came prepared with questions:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>Were 42% more likely to adhere to treatment plans</li>
                                    <li>Reported 35% higher satisfaction with their care</li>
                                    <li>Experienced better treatment outcomes (28% improvement)</li>
                                    <li>Felt more confident managing their skin conditions</li>
                                </ul>

                                <div className="bg-purple-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Appointment Time Reality</h3>
                                    <p className="text-gray-700">
                                        The average dermatology appointment lasts just 10-15 minutes. Having your questions prioritized and written down ensures you cover what matters most to you within this limited time.
                                    </p>
                                </div>
                            </section>

                            {/* Preparation Questions */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <ClipboardList className="w-8 h-8 text-blue-600 mr-2" />
                                    Preparation Questions (Before Your Appointment)
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    These questions will help you prepare effectively for your dermatology visit and ensure you gather all necessary information beforehand.
                                </p>

                                {/* Questions Table */}
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
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Medical History</td>
                                                <td className="px-4 py-3">
                                                    <ul className="list-disc list-inside space-y-1">
                                                        <li>What medical records should I bring?</li>
                                                        <li>Should I prepare a list of current medications?</li>
                                                    </ul>
                                                </td>
                                                <td className="px-4 py-3">Ensure complete health picture for accurate diagnosis</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Skin Documentation</td>
                                                <td className="px-4 py-3">
                                                    <ul className="list-disc list-inside space-y-1">
                                                        <li>Should I photograph my skin concerns?</li>
                                                        <li>How far back should I track changes?</li>
                                                    </ul>
                                                </td>
                                                <td className="px-4 py-3">Provide visual evidence of changes over time</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Insurance</td>
                                                <td className="px-4 py-3">
                                                    <ul className="list-disc list-inside space-y-1">
                                                        <li>What will my insurance likely cover?</li>
                                                        <li>Are pre-authorizations needed?</li>
                                                    </ul>
                                                </td>
                                                <td className="px-4 py-3">Avoid unexpected costs and coverage issues</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                {/* Preparation Checklist */}
                                <div className="bg-blue-50 p-4 rounded-lg mb-8">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Pre-Appointment Checklist</h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                                                <Check className="w-5 h-5 text-blue-600 mr-2" />
                                                What to Bring
                                            </h4>
                                            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-6">
                                                <li>List of current medications</li>
                                                <li>Photos of skin changes</li>
                                                <li>Insurance information</li>
                                                <li>List of current skincare products</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                                                <Check className="w-5 h-5 text-blue-600 mr-2" />
                                                What to Prepare
                                            </h4>
                                            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-6">
                                                <li>Timeline of symptoms</li>
                                                <li>Family history of skin conditions</li>
                                                <li>Your top 3 concerns to discuss</li>
                                                <li>Questions about treatments/products</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* During Visit Questions */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <MessageSquare className="w-8 h-8 text-blue-600 mr-2" />
                                    Questions to Ask During Your Visit
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    These critical questions will help you understand your diagnosis, treatment options, and skincare recommendations during your appointment.
                                </p>

                                {/* Diagnosis Questions */}
                                <div className="border-l-4 border-blue-400 pl-4 mb-6">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">About Your Diagnosis</h3>
                                    <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                                        <li>What is my exact diagnosis? (Ask for the medical name)</li>
                                        <li>What causes this condition?</li>
                                        <li>Is this condition chronic or temporary?</li>
                                        <li>Could this be related to other health issues?</li>
                                        <li>Are there any tests needed to confirm?</li>
                                    </ul>
                                </div>

                                {/* Treatment Questions */}
                                <div className="border-l-4 border-purple-400 pl-4 mb-6">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">About Treatment Options</h3>
                                    <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                                        <li>What are all my treatment options?</li>
                                        <li>What do you recommend and why?</li>
                                        <li>What are the success rates for each option?</li>
                                        <li>How soon should I expect results?</li>
                                        <li>What are the potential side effects?</li>
                                    </ul>
                                </div>

                                {/* Treatment Comparison */}
                                <div className="bg-gray-50 p-4 rounded-lg mb-8">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Common Treatment Comparison</h3>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full">
                                            <thead>
                                                <tr className="border-b border-gray-200">
                                                    <th className="px-4 py-2 text-left">Treatment</th>
                                                    <th className="px-4 py-2 text-left">Best For</th>
                                                    <th className="px-4 py-2 text-left">Sessions Needed</th>
                                                    <th className="px-4 py-2 text-left">Downtime</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="border-b border-gray-200">
                                                    <td className="px-4 py-2">Topical Retinoids</td>
                                                    <td className="px-4 py-2">Acne, aging</td>
                                                    <td className="px-4 py-2">Ongoing</td>
                                                    <td className="px-4 py-2">None</td>
                                                </tr>
                                                <tr className="border-b border-gray-200 bg-gray-100">
                                                    <td className="px-4 py-2">Chemical Peels</td>
                                                    <td className="px-4 py-2">Hyperpigmentation</td>
                                                    <td className="px-4 py-2">3-6</td>
                                                    <td className="px-4 py-2">3-7 days</td>
                                                </tr>
                                                <tr className="border-b border-gray-200">
                                                    <td className="px-4 py-2">Laser Therapy</td>
                                                    <td className="px-4 py-2">Rosacea, scars</td>
                                                    <td className="px-4 py-2">1-3</td>
                                                    <td className="px-4 py-2">1-2 weeks</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </section>

                            {/* Product & Routine Questions */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Skincare Product & Routine Questions</h2>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">About Products</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Which ingredients should I absolutely avoid?</li>
                                            <li>Are fragrance-free products necessary for me?</li>
                                            <li>Should I use physical or chemical sunscreen?</li>
                                            <li>What's your opinion on "clean" beauty products?</li>
                                            <li>Are prescription products better than OTC for my case?</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">About Routine</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>What's the ideal order of application?</li>
                                            <li>How long should I wait between products?</li>
                                            <li>Should my AM/PM routines differ?</li>
                                            <li>How can I simplify my current routine?</li>
                                            <li>What's the minimum effective routine?</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Sample Routine */}
                                <div className="bg-purple-50 p-4 rounded-lg mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Sample Basic Routine</h3>
                                    <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-4">
                                        <li>
                                            <span className="font-medium">Cleanser:</span> Gentle, pH-balanced formula
                                        </li>
                                        <li>
                                            <span className="font-medium">Treatment:</span> As prescribed (apply to dry skin)
                                        </li>
                                        <li>
                                            <span className="font-medium">Moisturizer:</span> Fragrance-free, ceramide-based
                                        </li>
                                        <li>
                                            <span className="font-medium">Sunscreen:</span> Broad spectrum SPF 30+ (AM only)
                                        </li>
                                    </ol>
                                </div>
                            </section>

                            {/* Follow-up & Warning Signs */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <AlertCircle className="w-8 h-8 text-blue-600 mr-2" />
                                    Follow-up & Warning Signs
                                </h2>

                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Follow-up Questions</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                                            <li>When should I schedule my next appointment?</li>
                                            <li>What changes should prompt an earlier visit?</li>
                                            <li>How will we measure treatment success?</li>
                                            <li>Who should I contact if I have questions between visits?</li>
                                            <li>What's the long-term management plan?</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Red Flags to Watch For</h3>
                                        <div className="bg-red-50 border-l-4 border-red-400 p-4">
                                            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                                                <li>Increasing pain, swelling, or redness at treatment site</li>
                                                <li>Pus or foul-smelling discharge</li>
                                                <li>Fever accompanying skin changes</li>
                                                <li>Rash spreading rapidly</li>
                                                <li>New moles changing in size/color</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Special Considerations */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Special Considerations</h2>

                                <div className="space-y-6">
                                    {/* For Different Age Groups */}
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Age-Specific Questions</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Teens/20s</h4>
                                                <p className="text-gray-700">"How can I prevent acne scarring?" "When should I start anti-aging products?"</p>
                                            </div>
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">30s/40s</h4>
                                                <p className="text-gray-700">"What early signs of aging should I address?" "How can I manage hormonal breakouts?"</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">50s+</h4>
                                                <p className="text-gray-700">"How should my routine change with menopause?" "What skin cancer screenings do I need?"</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* For Different Skin Types */}
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Skin Type Specific Questions</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Dry Skin</h4>
                                                <p className="text-gray-700">"How can I repair my moisture barrier?" "What ingredients help with flakiness?"</p>
                                            </div>
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Oily Skin</h4>
                                                <p className="text-gray-700">"How can I control shine without over-drying?" "Are oil-free products always better?"</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">Sensitive Skin</h4>
                                                <p className="text-gray-700">"How can I tell if I'm having a reaction?" "What's the gentlest way to exfoliate?"</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Remember that no question is too small when it comes to your skin health. Dermatologists are there to help you understand and care for your skin at every stage of life. Don't hesitate to ask for clarification if medical terms are confusing or if instructions seem unclear.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    Consider bringing a notebook or using your phone to take notes during your appointment. Many dermatologists don't mind if you record the conversation for later reference (just be sure to ask permission first).
                                </p>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "Your skin is your body's largest organ and deserves the same careful attention you'd give to any other health concern. Being an informed, engaged patient leads to better outcomes and greater satisfaction with your care."
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
                                            Dr. Emily Sanders, MD
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600 mb-1">
                                        — Written by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            Jessica Williams
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
                                <h3 className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-2">SKINCARE NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get dermatologist-approved tips</h4>
                                <p className="text-gray-700 text-sm">
                                    Monthly skincare advice, product recommendations, and dermatology insights.
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
                            <ul className="space-y-3">
                                {[
                                    "Preparation Questions",
                                    "Diagnosis Questions",
                                    "Treatment Options",
                                    "Product Recommendations",
                                    "Follow-up Plan"
                                ].map((item) => (
                                    <li key={item}>
                                        <a href={`#${item.replace(/\s+/g, '-').toLowerCase()}`} className="text-blue-600 hover:underline flex items-center">
                                            <ChevronRight className="w-4 h-4 mr-2" />
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Common Conditions */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Common Dermatology Conditions</h3>
                            <div className="space-y-3">
                                {[
                                    { name: "Acne", prevalence: "85% of teens" },
                                    { name: "Eczema", prevalence: "10% of adults" },
                                    { name: "Rosacea", prevalence: "5% of adults" },
                                    { name: "Psoriasis", prevalence: "2-3% worldwide" },
                                    { name: "Skin Cancer", prevalence: "1 in 5 Americans" }
                                ].map((condition) => (
                                    <div key={condition.name} className="flex justify-between border-b border-gray-200 pb-2">
                                        <span>{condition.name}</span>
                                        <span className="text-gray-600 text-sm">{condition.prevalence}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Further Reading</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Understanding Your Skin Type</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Decoding Skincare Ingredients</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">When to See a Dermatologist</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Skin Cancer Prevention Guide</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}