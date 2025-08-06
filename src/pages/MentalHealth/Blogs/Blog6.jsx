"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, Brain, ClipboardList, HeartPulse, Shield, BookOpen, Star, Mail } from "lucide-react"

export default function MentalHealthAssessmentsGuide() {
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

    const tabs = ["Overview", "Types", "Preparation", "Results"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Comprehensive Mental Health Assessments: What to Expect During Your Evaluation
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
                                Mental health assessments are comprehensive evaluations that help professionals understand your psychological well-being. These assessments can identify mental health conditions, determine appropriate treatments, and track progress over time. This guide explains the different types of evaluations, what to expect during the process, and how to prepare.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                    alt="Mental health assessment being conducted"
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
                                    <li>Mental health assessments typically last 1-2 hours but can vary</li>
                                    <li>Over 90% of mental health diagnoses can be made through comprehensive assessment</li>
                                    <li>Assessments may include interviews, questionnaires, and psychological testing</li>
                                    <li>Preparation can help you feel more comfortable and provide accurate information</li>
                                    <li>Results are confidential and used to create personalized treatment plans</li>
                                </ul>
                            </div>

                            {/* Why Mental Health Assessments Matter */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Brain className="w-8 h-8 text-blue-600 mr-2" />
                                    The Importance of Mental Health Assessments
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Mental health assessments serve as the foundation for understanding psychological well-being. According to the <a href="#" className="text-blue-600 hover:underline">World Health Organization</a>, nearly 1 in 4 people will experience a mental health condition in their lifetime, yet only about 60% receive proper diagnosis and treatment.
                                </p>

                                <p className="text-gray-700 mb-6">
                                    Comprehensive assessments help clinicians:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>Identify specific mental health conditions (depression, anxiety, bipolar disorder, etc.)</li>
                                    <li>Rule out physical health conditions that may mimic mental health symptoms</li>
                                    <li>Determine appropriate treatment approaches (therapy, medication, or combination)</li>
                                    <li>Establish baseline measurements to track treatment progress</li>
                                    <li>Identify strengths and coping mechanisms to build upon</li>
                                </ul>

                                <div className="bg-blue-100 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Did You Know?</h3>
                                    <p className="text-gray-700">
                                        The average delay between onset of mental health symptoms and treatment is <span className="font-bold">11 years</span>. Early assessment and intervention can significantly improve outcomes.
                                    </p>
                                </div>
                            </section>

                            {/* Types of Mental Health Assessments */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <ClipboardList className="w-8 h-8 text-blue-600 mr-2" />
                                    Types of Mental Health Assessments
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Mental health professionals use various assessment tools depending on the presenting concerns. Here are the most common types:
                                </p>

                                {/* Assessments Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assessment Type</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purpose</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Commonly Used For</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            {/* Row 1 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Clinical Interview</td>
                                                <td className="px-4 py-3 whitespace-nowrap">30-90 min</td>
                                                <td className="px-4 py-3">Gather comprehensive history and current symptoms</td>
                                                <td className="px-4 py-3">Initial evaluations, diagnostic clarification</td>
                                            </tr>
                                            {/* Row 2 */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Psychological Testing</td>
                                                <td className="px-4 py-3 whitespace-nowrap">1-3 hours</td>
                                                <td className="px-4 py-3">Measure cognitive, emotional, and behavioral functioning</td>
                                                <td className="px-4 py-3">Learning disabilities, personality assessment</td>
                                            </tr>
                                            {/* Row 3 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Self-Report Questionnaires</td>
                                                <td className="px-4 py-3 whitespace-nowrap">10-30 min</td>
                                                <td className="px-4 py-3">Assess specific symptoms and severity</td>
                                                <td className="px-4 py-3">Depression, anxiety, PTSD screening</td>
                                            </tr>
                                            {/* Row 4 */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Neuropsychological Testing</td>
                                                <td className="px-4 py-3 whitespace-nowrap">2-6 hours</td>
                                                <td className="px-4 py-3">Evaluate brain function and cognitive abilities</td>
                                                <td className="px-4 py-3">Dementia, TBI, ADHD assessment</td>
                                            </tr>
                                            {/* Row 5 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Behavioral Observation</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Varies</td>
                                                <td className="px-4 py-3">Assess behavior in natural or structured settings</td>
                                                <td className="px-4 py-3">Child assessments, developmental disorders</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">1</span>
                                            Clinical Interviews - The Foundation
                                        </h3>
                                        <p className="text-gray-700">
                                            The clinical interview is the cornerstone of mental health assessment. During this structured conversation, your clinician will ask about your symptoms, medical history, family background, and current life circumstances. This helps establish context for your concerns.
                                        </p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">2</span>
                                            Psychological Testing - Objective Measures
                                        </h3>
                                        <p className="text-gray-700">
                                            Standardized tests like the MMPI-2 or Beck Depression Inventory provide quantifiable data about your psychological functioning. These tests have been validated on large populations, offering reliable comparisons to normative groups.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* What to Expect During Assessment */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <HeartPulse className="w-8 h-8 text-blue-600 mr-2" />
                                    The Assessment Process: Step-by-Step
                                </h2>

                                <div className="mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">1. Initial Contact and Paperwork</h3>
                                    <p className="text-gray-700 mb-4">
                                        Before your first appointment, you'll typically complete intake forms covering:
                                    </p>
                                    <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                                        <li>Demographic information</li>
                                        <li>Medical and psychiatric history</li>
                                        <li>Current medications</li>
                                        <li>Family mental health history</li>
                                        <li>Consent for treatment and privacy policies</li>
                                    </ul>
                                </div>

                                <div className="mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">2. The Evaluation Session(s)</h3>
                                    <p className="text-gray-700 mb-4">
                                        A typical assessment might include:
                                    </p>
                                    <ol className="list-decimal list-inside text-gray-700 ml-4 space-y-2">
                                        <li>
                                            <span className="font-semibold">Opening discussion:</span> The clinician will explain the process and answer your questions
                                        </li>
                                        <li>
                                            <span className="font-semibold">Symptom exploration:</span> Detailed questions about your concerns, including duration, severity, and impact
                                        </li>
                                        <li>
                                            <span className="font-semibold">Background assessment:</span> Questions about your development, education, relationships, and work history
                                        </li>
                                        <li>
                                            <span className="font-semibold">Standardized measures:</span> Completion of rating scales or tests if applicable
                                        </li>
                                        <li>
                                            <span className="font-semibold">Closing summary:</span> The clinician will review next steps and timeline for results
                                        </li>
                                    </ol>
                                </div>

                                <div className="bg-blue-100 rounded-lg p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">What Clinicians Look For</h3>
                                    <p className="text-gray-700">
                                        Professionals evaluate multiple domains including mood, thought processes, cognition, behavior, and functioning. They assess both current symptoms and long-term patterns to distinguish between temporary difficulties and chronic conditions.
                                    </p>
                                </div>
                            </section>

                            {/* Preparing for Your Assessment */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Prepare for Your Mental Health Assessment</h2>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Before the Appointment</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Gather relevant medical records and previous mental health evaluations</li>
                                            <li>Make a list of current medications and supplements</li>
                                            <li>Note your symptoms, including when they started and what makes them better/worse</li>
                                            <li>Prepare questions you want to ask the clinician</li>
                                            <li>Get adequate sleep the night before to ensure clear thinking</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">During the Assessment</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Be as honest and open as possible - there are no "right" or "wrong" answers</li>
                                            <li>Ask for clarification if you don't understand a question</li>
                                            <li>Take breaks if needed - assessments can be emotionally intense</li>
                                            <li>Bring a notebook to jot down important points or recommendations</li>
                                            <li>Consider bringing a trusted friend or family member for support if appropriate</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Important Note:</h3>
                                    <p className="text-gray-700">
                                        You cannot "fail" a mental health assessment. The purpose is to understand your unique needs, not to judge you. Being truthful leads to more accurate results and better treatment recommendations.
                                    </p>
                                </div>
                            </section>

                            {/* Understanding Your Results */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Shield className="w-8 h-8 text-blue-600 mr-2" />
                                    Understanding Your Assessment Results
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    After completing the assessment, your clinician will review the findings with you. This typically includes:
                                </p>

                                <div className="space-y-6">
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Diagnostic Impressions</h3>
                                        </div>
                                        <div className="p-4">
                                            <p className="text-gray-700">
                                                If applicable, the clinician may share diagnostic impressions based on criteria from the Diagnostic and Statistical Manual (DSM-5). Common diagnoses include:
                                            </p>
                                            <ul className="list-disc list-inside text-gray-700 mt-2 ml-4 space-y-1">
                                                <li>Depressive disorders</li>
                                                <li>Anxiety disorders</li>
                                                <li>Bipolar disorder</li>
                                                <li>Post-traumatic stress disorder (PTSD)</li>
                                                <li>Attention-deficit/hyperactivity disorder (ADHD)</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Treatment Recommendations</h3>
                                        </div>
                                        <div className="p-4">
                                            <p className="text-gray-700">
                                                Based on the assessment results, your clinician will suggest appropriate treatment options which may include:
                                            </p>
                                            <div className="grid md:grid-cols-2 gap-4 mt-3">
                                                <div>
                                                    <h4 className="font-medium text-gray-900">Therapeutic Approaches</h4>
                                                    <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                                                        <li>Cognitive Behavioral Therapy (CBT)</li>
                                                        <li>Dialectical Behavior Therapy (DBT)</li>
                                                        <li>Psychodynamic therapy</li>
                                                        <li>Family or couples counseling</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4 className="font-medium text-gray-900">Other Interventions</h4>
                                                    <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                                                        <li>Medication evaluation</li>
                                                        <li>Lifestyle modifications</li>
                                                        <li>Support groups</li>
                                                        <li>Referrals to specialists</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Follow-Up Plan</h3>
                                        </div>
                                        <div className="p-4">
                                            <p className="text-gray-700">
                                                Your clinician will discuss next steps, which may include:
                                            </p>
                                            <ul className="list-disc list-inside text-gray-700 mt-2 ml-4 space-y-1">
                                                <li>Scheduling regular therapy sessions</li>
                                                <li>Periodic reassessment to track progress</li>
                                                <li>Referrals to other professionals if needed</li>
                                                <li>Crisis planning if safety concerns exist</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Common Questions */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>

                                <div className="space-y-4">
                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">How long does it take to get results?</h3>
                                        <p className="text-gray-700">
                                            Simple screenings may provide immediate feedback, while comprehensive evaluations can take 1-2 weeks for the clinician to score tests, review records, and prepare a formal report. Emergency situations are prioritized.
                                        </p>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">Will my assessment be confidential?</h3>
                                        <p className="text-gray-700">
                                            Mental health assessments are protected by strict confidentiality laws. Information is only shared with others with your written permission, except in specific situations where safety is a concern (harm to self or others, child/elder abuse).
                                        </p>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">What if I disagree with the results?</h3>
                                        <p className="text-gray-700">
                                            You have the right to seek a second opinion. Share your concerns with your clinician—sometimes additional information can clarify discrepancies. Different professionals may have varying perspectives based on their training and experience.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Mental health assessments are powerful tools for understanding psychological well-being and creating effective treatment plans. While the process may feel intimidating, remember that the goal is to help you, not judge you. Comprehensive evaluations provide clarity and direction for your mental health journey.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    If you're considering a mental health assessment but feel hesitant, start by discussing your concerns with your primary care physician or a mental health professional. They can help you understand what type of evaluation would be most beneficial for your specific situation.
                                </p>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "Seeking help is a sign of strength, not weakness. A mental health assessment is the first step toward understanding yourself better and accessing the support you deserve."
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
                                            Dr. Emily Parker, PsyD
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600 mb-1">
                                        — Written by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            Sarah Thompson, LMHC
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
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get mental health tips and resources</h4>
                                <p className="text-gray-700 text-sm">
                                    Monthly insights, self-care strategies, and professional advice delivered to your inbox.
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

                        {/* Common Assessment Tools */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Common Assessment Tools</h3>
                            <div className="space-y-4">
                                <div className="border-b border-gray-200 pb-3">
                                    <h4 className="font-medium text-gray-900">PHQ-9</h4>
                                    <p className="text-sm text-gray-600">Depression screening</p>
                                </div>
                                <div className="border-b border-gray-200 pb-3">
                                    <h4 className="font-medium text-gray-900">GAD-7</h4>
                                    <p className="text-sm text-gray-600">Anxiety assessment</p>
                                </div>
                                <div className="border-b border-gray-200 pb-3">
                                    <h4 className="font-medium text-gray-900">MMPI-2</h4>
                                    <p className="text-sm text-gray-600">Personality evaluation</p>
                                </div>
                                <div className="border-b border-gray-200 pb-3">
                                    <h4 className="font-medium text-gray-900">WAIS-IV</h4>
                                    <p className="text-sm text-gray-600">Cognitive assessment</p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900">ACE Questionnaire</h4>
                                    <p className="text-sm text-gray-600">Childhood trauma screening</p>
                                </div>
                            </div>
                        </div>

                        {/* Warning Signs */}
                        <div className="bg-red-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                                When to Seek Immediate Help
                            </h3>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li>Thoughts of harming yourself or others</li>
                                <li>Inability to care for basic needs</li>
                                <li>Severe confusion or disorientation</li>
                                <li>Psychotic symptoms (hallucinations/delusions)</li>
                                <li>Recent traumatic event with ongoing distress</li>
                            </ul>
                            <p className="text-sm text-gray-600 mt-3">
                                Call 911 or your local crisis line if experiencing emergency symptoms.
                            </p>
                        </div>

                        {/* Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Further Reading</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-start">
                                        <BookOpen className="w-4 h-4 mt-1 mr-2 flex-shrink-0" />
                                        <span>Understanding Mental Health Diagnoses</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-start">
                                        <BookOpen className="w-4 h-4 mt-1 mr-2 flex-shrink-0" />
                                        <span>What to Expect in Therapy</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-start">
                                        <BookOpen className="w-4 h-4 mt-1 mr-2 flex-shrink-0" />
                                        <span>Self-Care Strategies While Waiting for Assessment</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-start">
                                        <BookOpen className="w-4 h-4 mt-1 mr-2 flex-shrink-0" />
                                        <span>How to Support a Loved One Through Assessment</span>
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