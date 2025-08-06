"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, HeartPulse, ClipboardList, Clock, BookOpen, Star, MessageSquare, Shield, ChevronRight } from "lucide-react"

export default function MentalHealthConsultationsGuide() {
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

    const tabs = ["Preparation", "During Session", "Aftercare", "Finding Help"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Mental Health Professional Consultations: Making the Most of Your Therapy and Psychiatric Appointments
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
                                Seeking professional help for mental health is a courageous step toward wellness. This comprehensive guide will help you prepare for, participate in, and follow up after mental health consultations to maximize their effectiveness. Whether you're seeing a therapist, psychologist, or psychiatrist, these evidence-based strategies will enhance your therapeutic experience.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                    alt="Therapist talking with client in office"
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
                                    <li>Proper preparation can increase session effectiveness by up to 40%</li>
                                    <li>The therapeutic alliance accounts for 30% of treatment success</li>
                                    <li>Regular note-taking between sessions enhances progress tracking</li>
                                    <li>Combining therapy with psychiatric care often yields best results</li>
                                    <li>Cultural competence in providers improves outcomes for diverse clients</li>
                                </ul>
                            </div>

                            {/* Why Consultations Matter */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <HeartPulse className="w-8 h-8 text-blue-600 mr-2" />
                                    The Importance of Effective Mental Health Consultations
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Mental health consultations serve as the foundation for diagnosis, treatment planning, and therapeutic progress. According to a <a href="#" className="text-blue-600 hover:underline">2023 meta-analysis in JAMA Psychiatry</a>, patients who actively engage in their mental health care experience:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>30-50% greater symptom reduction</li>
                                    <li>Higher treatment adherence rates (72% vs 53%)</li>
                                    <li>Faster achievement of therapeutic goals</li>
                                    <li>Lower dropout rates from treatment programs</li>
                                </ul>

                                <div className="bg-purple-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Therapeutic Alliance: The Key to Success</h3>
                                    <p className="text-gray-700">
                                        Research shows the quality of the client-therapist relationship (therapeutic alliance) accounts for more treatment success than the specific therapeutic approach used. Building trust, mutual respect, and collaboration with your provider significantly impacts outcomes.
                                    </p>
                                </div>
                            </section>

                            {/* Preparing for Your Appointment */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <ClipboardList className="w-8 h-8 text-blue-600 mr-2" />
                                    Preparing for Your Appointment
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Thoughtful preparation helps you make the most of limited session time. Follow this comprehensive preparation checklist:
                                </p>

                                {/* Preparation Timeline */}
                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">1-2 Weeks Before Your Appointment</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-start">
                                            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                                                <span className="text-blue-800 font-bold">1</span>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900">Gather Historical Information</h4>
                                                <p className="text-gray-700">
                                                    Compile previous mental health records, medication history, and any relevant medical reports. This saves valuable session time for discussion rather than information gathering.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                                                <span className="text-blue-800 font-bold">2</span>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900">Identify Your Goals</h4>
                                                <p className="text-gray-700">
                                                    What do you hope to achieve? Be specific: "Reduce anxiety attacks from 3/week to 1/week" is more actionable than "Feel better."
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* 24-48 Hours Before */}
                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">24-48 Hours Before Your Appointment</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-start">
                                            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                                                <span className="text-blue-800 font-bold">3</span>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900">Track Your Symptoms</h4>
                                                <p className="text-gray-700">
                                                    Use a mood tracker app or journal to record patterns, triggers, and symptom severity. The more concrete data you provide, the better your provider can help.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                                                <span className="text-blue-800 font-bold">4</span>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900">Prepare Questions</h4>
                                                <p className="text-gray-700">
                                                    Write down all questions and concerns to ensure nothing gets forgotten during the session. Prioritize them in case time runs short.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Day Of Appointment */}
                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Day Of Your Appointment</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-start">
                                            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                                                <span className="text-blue-800 font-bold">5</span>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900">Arrive Early</h4>
                                                <p className="text-gray-700">
                                                    Plan to arrive 10-15 minutes early to complete paperwork and settle in. Rushing increases stress and reduces session effectiveness.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                                                <span className="text-blue-800 font-bold">6</span>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900">Mindset Preparation</h4>
                                                <p className="text-gray-700">
                                                    Practice deep breathing or mindfulness exercises before your session to be mentally present and open.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Preparation Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Timeframe</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Preparation Task</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Benefit</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">1-2 Weeks Before</td>
                                                <td className="px-4 py-3">Medical history compilation</td>
                                                <td className="px-4 py-3">Provides context for accurate diagnosis</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">3-5 Days Before</td>
                                                <td className="px-4 py-3">Symptom tracking begins</td>
                                                <td className="px-4 py-3">Identifies patterns and triggers</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">24 Hours Before</td>
                                                <td className="px-4 py-3">Question list preparation</td>
                                                <td className="px-4 py-3">Ensures all concerns are addressed</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Day Of</td>
                                                <td className="px-4 py-3">Mindfulness practice</td>
                                                <td className="px-4 py-3">Enhances session engagement</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            {/* During the Session */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Clock className="w-8 h-8 text-blue-600 mr-2" />
                                    Maximizing Your Session Time
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Therapy sessions typically last 45-60 minutes, while psychiatric consultations may be shorter (15-30 minutes). These strategies will help you make every minute count:
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">1</span>
                                            The First 5 Minutes: Setting the Agenda
                                        </h3>
                                        <p className="text-gray-700">
                                            Clearly state your most pressing concerns first. Example: "Today I really need to discuss the anxiety I've been feeling at work" helps your provider prioritize.
                                        </p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">2</span>
                                            Middle Phase: Deep Exploration
                                        </h3>
                                        <p className="text-gray-700">
                                            Be open to exploring uncomfortable emotions. Resistance is natural but working through it leads to breakthroughs. Use "I feel" statements rather than "You make me feel."
                                        </p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">3</span>
                                            Last 10 Minutes: Summarizing
                                        </h3>
                                        <p className="text-gray-700">
                                            Recap key points and confirm action items. Ask: "Can we summarize what we've agreed I'll work on before next time?" This improves follow-through.
                                        </p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">4</span>
                                            Medication Consultations
                                        </h3>
                                        <p className="text-gray-700">
                                            For psychiatric visits, ask about: expected timeline for effects, potential side effects, interactions with other medications, and non-medication alternatives.
                                        </p>
                                    </div>
                                </div>

                                {/* Communication Tips */}
                                <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Effective Communication Techniques</h3>
                                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                                        <li><strong>Be specific:</strong> "I had three panic attacks this week" vs "I've been anxious"</li>
                                        <li><strong>Describe behaviors:</strong> "I've been staying in bed until noon" vs "I'm depressed"</li>
                                        <li><strong>Note changes:</strong> "My sleep has worsened from 7 to 4 hours nightly"</li>
                                        <li><strong>Ask for clarification:</strong> "Can you explain that treatment approach again?"</li>
                                    </ul>
                                </div>
                            </section>

                            {/* After the Session */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <BookOpen className="w-8 h-8 text-blue-600 mr-2" />
                                    Post-Session Strategies
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    What you do after your appointment significantly impacts treatment effectiveness. Implement these evidence-based aftercare practices:
                                </p>

                                <div className="space-y-6">
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Immediately After Session</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Journaling (Within 1 Hour)</h4>
                                                <p className="text-gray-700">
                                                    Write down key insights, action items, and emotional reactions while fresh. Note what resonated and what you want to revisit next time.
                                                </p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">Self-Care</h4>
                                                <p className="text-gray-700">
                                                    Therapy can be emotionally draining. Schedule light activities afterward—a walk in nature, listening to music, or meeting a supportive friend.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">24-48 Hours After</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Review Notes</h4>
                                                <p className="text-gray-700">
                                                    Revisit your session summary to reinforce learning. Highlight one concrete action to practice before next appointment.
                                                </p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">Implement Strategies</h4>
                                                <p className="text-gray-700">
                                                    Actively practice coping skills or behavioral changes discussed. Progress happens between sessions, not just during them.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Ongoing Between Sessions</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Symptom Tracking</h4>
                                                <p className="text-gray-700">
                                                    Continue monitoring mood, behaviors, and medication effects. Apps like Daylio or Moodfit can help visualize patterns.
                                                </p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">Prepare for Next Session</h4>
                                                <p className="text-gray-700">
                                                    Note what's working, what isn't, and new issues that arise. This creates continuity between appointments.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Finding the Right Provider */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Shield className="w-8 h-8 text-blue-600 mr-2" />
                                    Finding the Right Mental Health Professional
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    The quality of your therapeutic relationship significantly impacts outcomes. Use this guide to find a provider who meets your needs:
                                </p>

                                {/* Provider Comparison */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Provider Type</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Education</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Can Prescribe</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Best For</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Psychiatrist</td>
                                                <td className="px-4 py-3">Medical Doctor (MD/DO)</td>
                                                <td className="px-4 py-3">Yes</td>
                                                <td className="px-4 py-3">Medication management, complex cases</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Psychologist</td>
                                                <td className="px-4 py-3">PhD/PsyD</td>
                                                <td className="px-4 py-3">No*</td>
                                                <td className="px-4 py-3">Testing, diagnosis, therapy</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Licensed Therapist</td>
                                                <td className="px-4 py-3">MA/MS + licensure</td>
                                                <td className="px-4 py-3">No</td>
                                                <td className="px-4 py-3">Talk therapy, coping strategies</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <p className="text-gray-500 text-sm mt-2">*In some states, psychologists with additional training can prescribe</p>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-blue-50 p-4 rounded-lg">
                                        <h3 className="font-bold text-lg text-gray-900 mb-3">Questions to Ask Potential Providers</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>What's your experience treating [your specific concern]?</li>
                                            <li>What therapeutic approaches do you use?</li>
                                            <li>How do you measure treatment progress?</li>
                                            <li>What's your availability between sessions for emergencies?</li>
                                            <li>Do you offer telehealth options?</li>
                                            <li>How do you handle cultural differences in treatment?</li>
                                        </ul>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg">
                                        <h3 className="font-bold text-lg text-gray-900 mb-3">Red Flags to Watch For</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Dismissing your concerns or experiences</li>
                                            <li>Pushing one treatment approach without discussion</li>
                                            <li>Lack of clear treatment plan or goals</li>
                                            <li>Boundary violations (excessive self-disclosure, dual relationships)</li>
                                            <li>Not allowing you to ask questions about their approach</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Effective mental health consultations require active participation from both provider and client. By preparing thoroughly, engaging authentically during sessions, and implementing strategies consistently between visits, you maximize your treatment outcomes.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    Remember that finding the right provider may take time—it's perfectly acceptable to have initial consultations with several professionals before choosing who feels right for you. The therapeutic relationship is deeply personal, and you deserve a provider who respects your unique needs and goals.
                                </p>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "Mental health is not a destination, but a process. It's about how you drive, not where you're going." — Noam Shpancer, PhD
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
                                            Clinically reviewed
                                        </a>{" "}
                                        by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            Dr. Rebecca Miller, PsyD
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600 mb-1">
                                        — Written by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            Jessica Williams, LMHC
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
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get therapist-approved tips</h4>
                                <p className="text-gray-700 text-sm">
                                    Weekly mental health strategies, mindfulness exercises, and self-care techniques.
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

                        {/* Popular Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Recommended Mental Health Apps</h3>
                            <div className="space-y-4">
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/app1.jpg" alt="Mood tracking app" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">MoodTools - Depression Aid</h4>
                                            <p className="text-sm text-gray-600">4.7 ★ (8,420 reviews)</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/app2.jpg" alt="Meditation app" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Headspace: Meditation & Sleep</h4>
                                            <p className="text-sm text-gray-600">4.9 ★ (1.2M reviews)</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/app3.jpg" alt="Therapy app" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Sanvello: Anxiety & Depression</h4>
                                            <p className="text-sm text-gray-600">4.8 ★ (45,000 reviews)</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Crisis Resources */}
                        <div className="bg-red-50 border-l-4 border-red-400 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Immediate Help Resources</h3>
                            <p className="text-gray-700 mb-4 text-sm">
                                If you're in crisis or experiencing suicidal thoughts, these resources provide 24/7 support:
                            </p>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-red-600 hover:underline font-medium flex items-center">
                                        <ChevronRight className="w-4 h-4 mr-1" />
                                        988 Suicide & Crisis Lifeline
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-red-600 hover:underline font-medium flex items-center">
                                        <ChevronRight className="w-4 h-4 mr-1" />
                                        Crisis Text Line (Text HOME to 741741)
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-red-600 hover:underline font-medium flex items-center">
                                        <ChevronRight className="w-4 h-4 mr-1" />
                                        Veterans Crisis Line
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Further Reading */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Related Articles</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-center">
                                        <ChevronRight className="w-4 h-4 mr-1" />
                                        How to Choose Between Therapy and Medication
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-center">
                                        <ChevronRight className="w-4 h-4 mr-1" />
                                        Understanding Different Therapy Approaches
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-center">
                                        <ChevronRight className="w-4 h-4 mr-1" />
                                        Self-Care Strategies for Mental Wellness
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-center">
                                        <ChevronRight className="w-4 h-4 mr-1" />
                                        Navigating Mental Health Insurance Coverage
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