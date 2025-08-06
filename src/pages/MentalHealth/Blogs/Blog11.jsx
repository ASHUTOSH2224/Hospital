"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Clock, HeartPulse, Brain, Activity, Shield, BookOpen, MessageSquare, Star } from "lucide-react"

export default function MentalHealthJourney() {
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

    const tabs = ["Overview", "Conditions", "Therapies", "Resources"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Navigating Mental Health Conditions: A Patient's Journey
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
                                <span className="text-sm mr-4">Updated on June 15, 2024</span>
                                <Clock className="w-4 h-4 mr-1" />
                                <span className="text-sm">12 min read</span>
                            </div>

                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                Mental health conditions affect millions worldwide, yet each journey is profoundly personal. This article shares real patient experiences combined with expert insights on managing anxiety, depression, and other conditions while maintaining quality of life. Discover practical strategies, treatment options, and hope from those who've walked this path.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80"
                                    alt="Person sitting alone looking out window"
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
                                    <li>Mental health recovery is non-linear - progress comes with ups and downs</li>
                                    <li>Combining therapy, medication, and lifestyle changes shows the best outcomes</li>
                                    <li>Building a support system is crucial for long-term management</li>
                                    <li>Self-compassion is as important as treatment adherence</li>
                                    <li>Small daily practices create significant cumulative benefits</li>
                                </ul>
                            </div>

                            {/* Patient Stories */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <User className="w-8 h-8 text-blue-600 mr-2" />
                                    Real Patient Experiences
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    We interviewed seven individuals managing various mental health conditions. Their stories reveal common struggles and unique coping mechanisms that may resonate with your own experience.
                                </p>

                                <div className="space-y-6">
                                    {/* Story 1 */}
                                    <div className="border border-gray-200 rounded-lg p-6">
                                        <div className="flex items-center mb-4">
                                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                                                <User className="w-6 h-6 text-blue-600" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-900">Sarah's Battle with Depression</h3>
                                                <p className="text-sm text-gray-600">Age 34 | Managing for 8 years</p>
                                            </div>
                                        </div>
                                        <p className="text-gray-700 mb-4">
                                            "My depression felt like carrying a lead blanket everywhere. Getting out of bed required monumental effort. What finally helped was combining CBT with a small daily walk - even just to the mailbox. Progress was painfully slow, but those tiny wins added up."
                                        </p>
                                        <div className="bg-blue-50 p-3 rounded">
                                            <h4 className="font-bold text-gray-900 mb-2">Sarah's Toolkit:</h4>
                                            <ul className="list-disc list-inside text-gray-700 space-y-1 pl-4">
                                                <li>Cognitive Behavioral Therapy (weekly)</li>
                                                <li>SSRI medication (sertraline)</li>
                                                <li>10-minute daily outdoor walk</li>
                                                <li>Mood tracking journal</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Story 2 */}
                                    <div className="border border-gray-200 rounded-lg p-6">
                                        <div className="flex items-center mb-4">
                                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                                                <User className="w-6 h-6 text-blue-600" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-900">James' Anxiety Management</h3>
                                                <p className="text-sm text-gray-600">Age 28 | Managing for 5 years</p>
                                            </div>
                                        </div>
                                        <p className="text-gray-700 mb-4">
                                            "Panic attacks made me avoid public places. Exposure therapy was terrifying but life-changing. My therapist had me start with just sitting in my parked car at the mall. Now I can grocery shop alone - something I couldn't imagine two years ago."
                                        </p>
                                        <div className="bg-blue-50 p-3 rounded">
                                            <h4 className="font-bold text-gray-900 mb-2">James' Breakthroughs:</h4>
                                            <ul className="list-disc list-inside text-gray-700 space-y-1 pl-4">
                                                <li>Gradual exposure therapy</li>
                                                <li>Breathing techniques (4-7-8 method)</li>
                                                <li>Reduced caffeine intake</li>
                                                <li>Support group meetings</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Common Conditions */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Brain className="w-8 h-8 text-blue-600 mr-2" />
                                    Understanding Common Conditions
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Mental health conditions manifest differently in each individual, but recognizing common patterns can help in seeking appropriate care. Below are five prevalent conditions with their key characteristics.
                                </p>

                                {/* Conditions Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Condition</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prevalence</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Key Symptoms</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">First-line Treatments</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 font-medium text-gray-900">Major Depressive Disorder</td>
                                                <td className="px-4 py-3">7% of adults</td>
                                                <td className="px-4 py-3">Persistent sadness, loss of interest, fatigue</td>
                                                <td className="px-4 py-3">SSRIs, CBT, exercise</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 font-medium text-gray-900">Generalized Anxiety</td>
                                                <td className="px-4 py-3">3% of adults</td>
                                                <td className="px-4 py-3">Excessive worry, restlessness, sleep issues</td>
                                                <td className="px-4 py-3">CBT, relaxation techniques</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 font-medium text-gray-900">Bipolar Disorder</td>
                                                <td className="px-4 py-3">2.8% of adults</td>
                                                <td className="px-4 py-3">Cycling between depression and mania</td>
                                                <td className="px-4 py-3">Mood stabilizers, therapy</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 font-medium text-gray-900">PTSD</td>
                                                <td className="px-4 py-3">3.6% of adults</td>
                                                <td className="px-4 py-3">Flashbacks, hypervigilance, avoidance</td>
                                                <td className="px-4 py-3">EMDR, trauma-focused therapy</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 font-medium text-gray-900">OCD</td>
                                                <td className="px-4 py-3">1.2% of adults</td>
                                                <td className="px-4 py-3">Intrusive thoughts, compulsive behaviors</td>
                                                <td className="px-4 py-3">ERP, SSRIs</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Important Note</h3>
                                    <p className="text-gray-700">
                                        These statistics represent general populations. Symptoms vary widely, and only qualified professionals can diagnose mental health conditions. If you suspect you have any of these conditions, please consult a healthcare provider.
                                    </p>
                                </div>
                            </section>

                            {/* Treatment Options */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <HeartPulse className="w-8 h-8 text-blue-600 mr-2" />
                                    Comprehensive Treatment Approaches
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Effective mental health management typically combines multiple approaches. Below we examine evidence-based treatments and their success rates based on clinical studies.
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="border border-gray-200 rounded-lg p-4">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                                            <Activity className="w-5 h-5 text-blue-600 mr-2" />
                                            Psychotherapy Options
                                        </h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li><strong>Cognitive Behavioral Therapy (CBT):</strong> 50-75% effectiveness for anxiety/depression</li>
                                            <li><strong>Dialectical Behavior Therapy (DBT):</strong> Particularly effective for borderline personality</li>
                                            <li><strong>Acceptance and Commitment Therapy (ACT):</strong> Focuses on psychological flexibility</li>
                                            <li><strong>Interpersonal Therapy (IPT):</strong> Addresses relationship patterns</li>
                                        </ul>
                                    </div>
                                    <div className="border border-gray-200 rounded-lg p-4">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                                            <Shield className="w-5 h-5 text-blue-600 mr-2" />
                                            Medication Overview
                                        </h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li><strong>SSRIs (e.g., Prozac, Zoloft):</strong> First-line for depression/anxiety</li>
                                            <li><strong>SNRIs (e.g., Effexor, Cymbalta):</strong> For treatment-resistant cases</li>
                                            <li><strong>Mood Stabilizers (e.g., Lithium):</strong> For bipolar disorder</li>
                                            <li><strong>Atypical Antipsychotics:</strong> Sometimes used off-label</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-blue-100 border-l-4 border-blue-500 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Patient Tip:</h3>
                                    <p className="text-gray-700">
                                        "Finding the right medication can take time - I tried three before finding one that worked with minimal side effects. Tracking symptoms daily helped my psychiatrist make adjustments." - Maria, 41
                                    </p>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Lifestyle Interventions</h3>
                                <p className="text-gray-700 mb-4">
                                    While not replacements for professional treatment, these practices significantly support mental health:
                                </p>
                                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                                    <div className="bg-blue-50 p-3 rounded-lg">
                                        <h4 className="font-bold text-gray-900 mb-1">Sleep Hygiene</h4>
                                        <p className="text-gray-700 text-sm">Consistent schedule, cool dark room, no screens before bed</p>
                                    </div>
                                    <div className="bg-blue-50 p-3 rounded-lg">
                                        <h4 className="font-bold text-gray-900 mb-1">Physical Activity</h4>
                                        <p className="text-gray-700 text-sm">30 min daily, even light walking shows benefits</p>
                                    </div>
                                    <div className="bg-blue-50 p-3 rounded-lg">
                                        <h4 className="font-bold text-gray-900 mb-1">Nutrition</h4>
                                        <p className="text-gray-700 text-sm">Omega-3s, whole foods, limit processed sugars</p>
                                    </div>
                                    <div className="bg-blue-50 p-3 rounded-lg">
                                        <h4 className="font-bold text-gray-900 mb-1">Social Connection</h4>
                                        <p className="text-gray-700 text-sm">Quality relationships reduce isolation risks</p>
                                    </div>
                                </div>
                            </section>

                            {/* Crisis Management */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">When Crisis Strikes: Emergency Preparedness</h2>

                                <p className="text-gray-700 mb-6">
                                    Mental health crises require immediate attention. Having a plan before crisis occurs can make difficult moments more manageable.
                                </p>

                                <div className="border border-red-200 bg-red-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Emergency Contacts (US)</h3>
                                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                                        <li><strong>988 Suicide & Crisis Lifeline:</strong> Call or text 988</li>
                                        <li><strong>Crisis Text Line:</strong> Text HOME to 741741</li>
                                        <li><strong>Local emergency services:</strong> 911 (specify mental health emergency)</li>
                                    </ul>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Creating a Safety Plan</h3>
                                <ol className="list-decimal list-inside text-gray-700 space-y-3 ml-4">
                                    <li><strong>Warning signs:</strong> List your personal early crisis indicators</li>
                                    <li><strong>Coping strategies:</strong> What usually helps (music, calling a friend, etc.)</li>
                                    <li><strong>Social supports:</strong> Who you can contact (keep numbers accessible)</li>
                                    <li><strong>Professional contacts:</strong> Therapists, psychiatrists, hotlines</li>
                                    <li><strong>Environment safety:</strong> Remove potential means of self-harm if needed</li>
                                </ol>
                            </section>

                            {/* Long-Term Management */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Sustaining Wellness: Long-Term Strategies</h2>

                                <p className="text-gray-700 mb-6">
                                    Managing mental health is an ongoing process. These strategies from long-term survivors offer practical wisdom for maintaining stability.
                                </p>

                                <div className="space-y-6">
                                    <div className="border border-gray-200 rounded-lg p-6">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Building Your Toolkit</h3>
                                        <p className="text-gray-700 mb-4">
                                            Different situations call for different strategies. Having multiple tools prepares you for various challenges:
                                        </p>
                                        <div className="grid sm:grid-cols-3 gap-3">
                                            <div className="bg-white border border-blue-100 p-2 rounded text-center">
                                                <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2">
                                                    <BookOpen className="w-5 h-5 text-blue-600" />
                                                </div>
                                                <p className="text-sm font-medium">Journaling prompts</p>
                                            </div>
                                            <div className="bg-white border border-blue-100 p-2 rounded text-center">
                                                <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2">
                                                    <MessageSquare className="w-5 h-5 text-blue-600" />
                                                </div>
                                                <p className="text-sm font-medium">Support contacts</p>
                                            </div>
                                            <div className="bg-white border border-blue-100 p-2 rounded text-center">
                                                <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2">
                                                    <Activity className="w-5 h-5 text-blue-600" />
                                                </div>
                                                <p className="text-sm font-medium">Grounding exercises</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg p-6">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Navigating Setbacks</h3>
                                        <p className="text-gray-700 mb-4">
                                            Relapses or worsening symptoms don't mean failure. Here's how patients successfully navigate setbacks:
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                                            <li><strong>Normalize fluctuations:</strong> "I expect ups and downs now instead of panicking about them"</li>
                                            <li><strong>Early intervention:</strong> Contact providers at first signs of trouble</li>
                                            <li><strong>Adjust expectations:</strong> Temporarily scale back obligations if needed</li>
                                            <li><strong>Review basics:</strong> Sleep, nutrition, medication adherence</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Words of Hope</h2>

                                <p className="text-gray-700 mb-6">
                                    Mental health journeys are challenging but full of potential for growth and resilience. We'll leave you with these encouraging words from patients who've found stability:
                                </p>

                                <div className="bg-blue-50 p-6 rounded-lg">
                                    <blockquote className="text-gray-700 italic mb-4">
                                        "Five years ago I couldn't leave my house. Today I lead a support group. Recovery isn't about never struggling - it's about building skills to handle the struggles better each time."
                                    </blockquote>
                                    <p className="text-gray-900 font-medium">- David, anxiety disorder survivor</p>
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
                                            Clinically reviewed
                                        </a>{" "}
                                        by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            Dr. Emily Chen, Psychiatrist
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

                        {/* Emergency Help */}
                        <div className="bg-red-50 border-l-4 border-red-400 rounded-lg p-6 mb-8">
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Need Immediate Help?</h3>
                            <p className="text-gray-700 mb-4 text-sm">
                                If you're in crisis or experiencing suicidal thoughts, please reach out now:
                            </p>
                            <ul className="space-y-2">
                                <li>
                                    <a href="tel:988" className="text-red-600 hover:underline font-medium flex items-center">
                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                        </svg>
                                        Call 988 (US Suicide & Crisis Lifeline)
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.crisistextline.org" className="text-red-600 hover:underline font-medium flex items-center">
                                        <MessageSquare className="w-4 h-4 mr-2" />
                                        Crisis Text Line (Text HOME to 741741)
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Newsletter Signup */}
                        <div className="bg-blue-50 rounded-lg p-6 mb-8">
                            <div className="mb-4">
                                <h3 className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-2">MENTAL HEALTH NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get coping strategies and resources</h4>
                                <p className="text-gray-700 text-sm">
                                    Monthly insights, patient stories, and expert advice delivered to your inbox.
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

                        {/* Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Recommended Resources</h3>
                            <div className="space-y-4">
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded flex items-center justify-center">
                                            <BookOpen className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">NAMI Helpline</h4>
                                            <p className="text-sm text-gray-600">National Alliance on Mental Illness support</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded flex items-center justify-center">
                                            <BookOpen className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">DBT Skills Workbook</h4>
                                            <p className="text-sm text-gray-600">Practical exercises for emotional regulation</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded flex items-center justify-center">
                                            <BookOpen className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Mental Health America</h4>
                                            <p className="text-sm text-gray-600">Screening tools and educational materials</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Support Groups */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Finding Support Groups</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Anxiety and Depression Association of America</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">DBSA (Depression/Bipolar Support)</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">NAMI Connection Recovery</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Psychology Today Therapist Finder</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}