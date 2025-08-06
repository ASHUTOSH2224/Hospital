"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, Users, HeartPulse, MessageSquare, BookOpen, Shield, Star, ClipboardList, Phone, Mail, MapPin } from "lucide-react"

export default function MentalHealthTeamGuide() {
    const [email, setEmail] = useState("")
    const [activeTab, setActiveTab] = useState("Roles")

    const handleEmailSubmit = (e) => {
        e.preventDefault()
        console.log("Email submitted:", email)
        setEmail("")
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const tabs = ["Roles", "Choosing", "Communication", "Resources"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Understanding Your Mental Health Team: A Complete Guide
                            </h1>

                            {/* Navigation Tabs */}
                            <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-200">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                                            activeTab === tab
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
                                Navigating mental health care can be complex with various specialists involved in your treatment. This comprehensive guide explains the roles of psychiatrists, psychologists, and other mental health professionals, how they work together, and how you can effectively collaborate with your care team for optimal mental wellness.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                                    alt="Mental health professionals discussing treatment"
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
                                    <li>Psychiatrists are medical doctors who can prescribe medication</li>
                                    <li>Psychologists focus on therapy and psychological testing</li>
                                    <li>Therapists and counselors provide talk therapy and coping strategies</li>
                                    <li>Social workers connect patients with community resources</li>
                                    <li>Effective communication with your team improves treatment outcomes</li>
                                    <li>Integrated care teams provide the most comprehensive treatment</li>
                                </ul>
                            </div>

                            {/* Why Your Mental Health Team Matters */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Users className="w-8 h-8 text-blue-600 mr-2" />
                                    Why Your Mental Health Team Matters
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Mental health care often involves multiple professionals working together to address different aspects of your wellbeing. According to the <a href="#" className="text-blue-600 hover:underline">World Health Organization</a>, integrated mental health care teams can improve treatment outcomes by 40-60% compared to single-provider approaches.
                                </p>

                                <p className="text-gray-700 mb-6">
                                    A 2023 study in the <em>Journal of Clinical Psychiatry</em> found that patients who understood their care team's roles reported:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>Higher treatment satisfaction (78% vs 52%)</li>
                                    <li>Better medication adherence (65% vs 41%)</li>
                                    <li>Improved symptom management (62% vs 38%)</li>
                                    <li>Stronger therapeutic alliances with providers</li>
                                </ul>

                                <div className="bg-blue-100 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Integrated Care Model</h3>
                                    <p className="text-gray-700">
                                        Modern mental health care emphasizes team-based approaches where professionals collaborate to address biological, psychological, and social aspects of mental health. This holistic model recognizes that comprehensive care often requires multiple specialties working together.
                                    </p>
                                </div>
                            </section>

                            {/* The Mental Health Professionals */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Check className="w-8 h-8 text-blue-600 mr-2" />
                                    The Mental Health Professionals on Your Team
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Your mental health team may include several types of professionals, each with distinct training and roles. Understanding these differences helps you know what to expect from each provider and how they can support your mental wellness journey.
                                </p>

                                {/* Professionals Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Professional</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Education</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Can Prescribe?</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Primary Focus</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            {/* Psychiatrist */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Psychiatrist</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Medical Doctor (MD/DO)</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Yes</td>
                                                <td className="px-4 py-3">Medication management, diagnosis</td>
                                            </tr>
                                            {/* Psychologist */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Psychologist</td>
                                                <td className="px-4 py-3 whitespace-nowrap">PhD/PsyD</td>
                                                <td className="px-4 py-3 whitespace-nowrap">No*</td>
                                                <td className="px-4 py-3">Therapy, psychological testing</td>
                                            </tr>
                                            {/* Therapist */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Licensed Therapist</td>
                                                <td className="px-4 py-3 whitespace-nowrap">MA/MS + License</td>
                                                <td className="px-4 py-3 whitespace-nowrap">No</td>
                                                <td className="px-4 py-3">Talk therapy, coping strategies</td>
                                            </tr>
                                            {/* Social Worker */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Clinical Social Worker</td>
                                                <td className="px-4 py-3 whitespace-nowrap">MSW + License</td>
                                                <td className="px-4 py-3 whitespace-nowrap">No</td>
                                                <td className="px-4 py-3">Therapy, community resources</td>
                                            </tr>
                                            {/* Psychiatric Nurse */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Psychiatric Nurse Practitioner</td>
                                                <td className="px-4 py-3 whitespace-nowrap">MSN/DNP</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Yes</td>
                                                <td className="px-4 py-3">Medication management, therapy</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <p className="text-gray-700 mb-6">
                                    *In some states, psychologists with additional training can prescribe medications. Check your local regulations.
                                </p>

                                {/* Detailed Professional Sections */}
                                <div className="space-y-8">
                                    {/* Psychiatrist */}
                                    <div className="border border-gray-200 rounded-lg p-6">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center">
                                            <HeartPulse className="w-6 h-6 text-blue-600 mr-2" />
                                            Psychiatrists: The Medical Experts
                                        </h3>
                                        <p className="text-gray-700 mb-4">
                                            Psychiatrists are medical doctors (MD or DO) who specialize in mental health. They complete 4 years of medical school followed by 4 years of psychiatric residency training. Some pursue additional fellowship training in specialties like child psychiatry or addiction medicine.
                                        </p>
                                        <div className="bg-blue-50 p-4 rounded-lg mb-4">
                                            <h4 className="font-bold text-gray-900 mb-2">When to See a Psychiatrist:</h4>
                                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                                                <li>You need medication evaluation or management</li>
                                                <li>You have complex or severe symptoms</li>
                                                <li>Your primary care provider recommends psychiatric evaluation</li>
                                                <li>You're experiencing medication side effects</li>
                                                <li>You need diagnostic clarification</li>
                                            </ul>
                                        </div>
                                        <p className="text-gray-700">
                                            Psychiatrists typically see patients for 15-30 minute medication management appointments every 1-3 months, while therapy is usually provided by other team members.
                                        </p>
                                    </div>

                                    {/* Psychologist */}
                                    <div className="border border-gray-200 rounded-lg p-6">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center">
                                            <MessageSquare className="w-6 h-6 text-blue-600 mr-2" />
                                            Psychologists: The Therapy Specialists
                                        </h3>
                                        <p className="text-gray-700 mb-4">
                                            Psychologists hold doctoral degrees (PhD, PsyD, or EdD) in psychology and complete supervised clinical internships. They specialize in psychological testing, diagnosis, and evidence-based therapies like CBT, DBT, and psychodynamic therapy.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                                            <div>
                                                <h4 className="font-bold text-gray-900 mb-2">Psychological Testing:</h4>
                                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                                    <li>ADHD evaluations</li>
                                                    <li>Learning disability assessments</li>
                                                    <li>Personality testing</li>
                                                    <li>Neuropsychological testing</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900 mb-2">Therapy Approaches:</h4>
                                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                                    <li>Cognitive Behavioral Therapy (CBT)</li>
                                                    <li>Dialectical Behavior Therapy (DBT)</li>
                                                    <li>Psychodynamic therapy</li>
                                                    <li>Humanistic therapy</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Choosing Your Team */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Choose the Right Mental Health Professionals</h2>

                                <p className="text-gray-700 mb-6">
                                    Building an effective mental health team requires careful consideration of your needs, preferences, and available resources. Here's a step-by-step guide to assembling your ideal care team:
                                </p>

                                <div className="space-y-6 mb-8">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-blue-100 rounded-full w-8 h-8 flex-shrink-0 flex items-center justify-center mt-1">
                                            <span className="font-bold text-blue-800">1</span>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">Assess Your Needs</h3>
                                            <p className="text-gray-700">
                                                Consider whether you primarily need medication management, therapy, diagnostic clarification, or community support. Many people benefit from both psychiatric care for medications and therapeutic support from a psychologist or therapist.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="bg-blue-100 rounded-full w-8 h-8 flex-shrink-0 flex items-center justify-center mt-1">
                                            <span className="font-bold text-blue-800">2</span>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">Check Credentials</h3>
                                            <p className="text-gray-700">
                                                Verify licenses and specialties through your state's licensing board. Look for board certification in psychiatry or psychology specialties that match your needs (e.g., addiction, trauma, eating disorders).
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="bg-blue-100 rounded-full w-8 h-8 flex-shrink-0 flex items-center justify-center mt-1">
                                            <span className="font-bold text-blue-800">3</span>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">Consider Logistics</h3>
                                            <p className="text-gray-700">
                                                Evaluate location, availability, insurance coverage, and whether you prefer in-person or telehealth services. Many providers now offer hybrid options for greater flexibility.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Questions to Ask Potential Providers</h3>
                                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                                        <li>What is your experience treating my specific concerns?</li>
                                        <li>What treatment approaches do you typically use?</li>
                                        <li>How do you coordinate care with other providers?</li>
                                        <li>What is your availability for urgent concerns?</li>
                                        <li>How do you handle medication management if needed?</li>
                                        <li>What are your fees and insurance policies?</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Communication Strategies */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Effective Communication With Your Mental Health Team</h2>

                                <p className="text-gray-700 mb-6">
                                    Clear communication with your mental health providers enhances treatment effectiveness. These strategies can help you get the most from your appointments:
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Before Appointments</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Track symptoms, moods, and medication effects</li>
                                            <li>Prepare a list of questions and concerns</li>
                                            <li>Bring relevant medical records or test results</li>
                                            <li>Note any changes since your last visit</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">During Appointments</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Be honest about symptoms and challenges</li>
                                            <li>Ask for clarification if you don't understand</li>
                                            <li>Discuss treatment preferences and goals</li>
                                            <li>Take notes or ask for written instructions</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Pro Tip:</h3>
                                    <p className="text-gray-700">
                                        Use the "Ask-Tell-Ask" method: Ask about a concern, tell your perspective, then ask if your understanding is correct. This creates collaborative dialogue with your providers.
                                    </p>
                                </div>
                            </section>

                            {/* Team Coordination */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Coordinating Your Care Team</h2>

                                <p className="text-gray-700 mb-6">
                                    Effective coordination between your providers ensures comprehensive care. These strategies help your team work together optimally:
                                </p>

                                <div className="space-y-4 mb-6">
                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">Release of Information</h3>
                                        <p className="text-gray-700">
                                            Sign release forms allowing providers to communicate. Specify what information can be shared and with whom. This facilitates collaboration while maintaining your privacy.
                                        </p>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">Care Coordination Meetings</h3>
                                        <p className="text-gray-700">
                                            Some practices offer team meetings where providers discuss your case. You may request to participate in these meetings or receive summaries of the discussions.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Team Communication Checklist</h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <h4 className="font-medium text-gray-900 mb-2">Information to Share:</h4>
                                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                                                <li>Current medications and doses</li>
                                                <li>Therapy goals and progress</li>
                                                <li>Recent symptom changes</li>
                                                <li>Life events impacting mental health</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 mb-2">Questions to Ask:</h4>
                                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                                                <li>How often will you communicate?</li>
                                                <li>Who is my primary contact?</li>
                                                <li>How are emergencies handled?</li>
                                                <li>What's the plan if treatment isn't working?</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Understanding your mental health team empowers you to actively participate in your care. Remember that you're the most important member of the team - your insights, preferences, and commitment significantly influence treatment success.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    Don't hesitate to ask questions, voice concerns, or request changes if something isn't working. Effective mental health care is collaborative, with you at the center of decision-making.
                                </p>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "Your mental health journey is unique. A well-coordinated care team can provide the comprehensive support you deserve. Be patient with the process and celebrate each step forward."
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
                                            Dr. Emily Carter, MD
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600 mb-1">
                                        — Written by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            Sarah Thompson, MSW
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
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get mental wellness tips</h4>
                                <p className="text-gray-700 text-sm">
                                    Monthly resources, self-care strategies, and mental health insights delivered to your inbox.
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

                        {/* Quick Reference */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Mental Health Professional Quick Reference</h3>
                            <div className="space-y-4">
                                <div className="border-b border-gray-200 pb-4">
                                    <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                                        <HeartPulse className="w-4 h-4 text-blue-600 mr-2" />
                                        Psychiatrist
                                    </h4>
                                    <p className="text-sm text-gray-600">MD/DO, prescribes medication</p>
                                </div>
                                <div className="border-b border-gray-200 pb-4">
                                    <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                                        <MessageSquare className="w-4 h-4 text-blue-600 mr-2" />
                                        Psychologist
                                    </h4>
                                    <p className="text-sm text-gray-600">PhD/PsyD, provides therapy and testing</p>
                                </div>
                                <div className="border-b border-gray-200 pb-4">
                                    <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                                        <Users className="w-4 h-4 text-blue-600 mr-2" />
                                        Therapist
                                    </h4>
                                    <p className="text-sm text-gray-600">MA/MS, provides counseling</p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                                        <Shield className="w-4 h-4 text-blue-600 mr-2" />
                                        Social Worker
                                    </h4>
                                    <p className="text-sm text-gray-600">MSW, connects to resources</p>
                                </div>
                            </div>
                        </div>

                        {/* Crisis Resources */}
                        <div className="bg-red-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Crisis Resources</h3>
                            <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                    <Phone className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-medium text-gray-900">988 Suicide & Crisis Lifeline</h4>
                                        <p className="text-sm text-gray-600">Call or text 988 for 24/7 support</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Mail className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-medium text-gray-900">Crisis Text Line</h4>
                                        <p className="text-sm text-gray-600">Text HOME to 741741</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <MapPin className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-medium text-gray-900">Local Emergency Services</h4>
                                        <p className="text-sm text-gray-600">Call 911 or go to nearest ER</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Further Reading */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Further Reading</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-start gap-2">
                                        <BookOpen className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                        <span>Finding the Right Therapist</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-start gap-2">
                                        <BookOpen className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                        <span>Medication Questions to Ask</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-start gap-2">
                                        <BookOpen className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                        <span>Mental Health Advocacy Guide</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-start gap-2">
                                        <BookOpen className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                        <span>Insurance and Mental Health</span>
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