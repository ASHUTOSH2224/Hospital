"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, AlertTriangle, HeartPulse, Brain, ShieldAlert, BookOpen, Star, Mail } from "lucide-react"

export default function MentalHealthWarningSignsGuide() {
    const [email, setEmail] = useState("")
    const [activeTab, setActiveTab] = useState("Symptoms")

    const handleEmailSubmit = (e) => {
        e.preventDefault()
        console.log("Email submitted:", email)
        setEmail("")
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const tabs = ["Symptoms", "By Age Group", "Action Steps", "Resources"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Recognizing Mental Health Warning Signs and Symptoms
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
                                Mental health is just as important as physical health, yet warning signs are often overlooked or misunderstood. This comprehensive guide helps you identify potential mental health concerns in yourself and loved ones, understand when to seek help, and provides actionable steps for support and recovery.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80"
                                    alt="Person looking concerned with hands on head"
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
                                    <li>Mental health symptoms often appear gradually and may be mistaken for personality quirks</li>
                                    <li>Early intervention leads to better outcomes - don't wait for crisis to seek help</li>
                                    <li>Different age groups show different warning signs</li>
                                    <li>Physical symptoms can indicate mental health issues</li>
                                    <li>Workplace and academic performance changes often signal underlying problems</li>
                                </ul>
                            </div>

                            {/* Why Recognition Matters */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <AlertTriangle className="w-8 h-8 text-blue-600 mr-2" />
                                    Why Recognizing Warning Signs Matters
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Mental health disorders affect 1 in 5 adults in the U.S. each year, yet nearly 60% don't receive treatment according to the <a href="#" className="text-blue-600 hover:underline">National Alliance on Mental Illness (NAMI)</a>. Early recognition can:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>Reduce severity of symptoms by up to 50% with early intervention</li>
                                    <li>Shorten duration of episodes by an average of 6 months</li>
                                    <li>Improve treatment effectiveness by 30-40%</li>
                                    <li>Decrease risk of secondary issues like substance abuse</li>
                                </ul>

                                <div className="bg-purple-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">The 3-Week Rule</h3>
                                    <p className="text-gray-700">
                                        Mental health professionals generally recommend seeking evaluation when symptoms persist for <span className="font-semibold">3 weeks or more</span> and interfere with daily functioning. However, don't wait this long if symptoms are severe or include suicidal thoughts.
                                    </p>
                                </div>
                            </section>

                            {/* Common Warning Signs */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <ShieldAlert className="w-8 h-8 text-blue-600 mr-2" />
                                    Common Mental Health Warning Signs
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    These symptoms may appear alone or in combination. Severity and duration determine whether they indicate a clinical condition requiring professional attention.
                                </p>

                                {/* Symptoms Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Symptoms</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Possible Conditions</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            {/* Row 1 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Emotional</td>
                                                <td className="px-4 py-3">
                                                    Persistent sadness, extreme mood swings, excessive fear/worry, anger outbursts
                                                </td>
                                                <td className="px-4 py-3">Depression, anxiety disorders, bipolar disorder</td>
                                            </tr>
                                            {/* Row 2 */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Cognitive</td>
                                                <td className="px-4 py-3">
                                                    Confusion, difficulty concentrating, memory problems, intrusive thoughts
                                                </td>
                                                <td className="px-4 py-3">ADHD, dementia, OCD, PTSD</td>
                                            </tr>
                                            {/* Row 3 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Behavioral</td>
                                                <td className="px-4 py-3">
                                                    Withdrawal from activities, changes in sleep/eating, substance abuse, risky behaviors
                                                </td>
                                                <td className="px-4 py-3">Depression, addiction, personality disorders</td>
                                            </tr>
                                            {/* Row 4 */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Physical</td>
                                                <td className="px-4 py-3">
                                                    Unexplained aches, digestive issues, extreme fatigue, changes in energy levels
                                                </td>
                                                <td className="px-4 py-3">Somatic symptom disorder, depression, anxiety</td>
                                            </tr>
                                            {/* Row 5 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Social</td>
                                                <td className="px-4 py-3">
                                                    Relationship conflicts, social isolation, work/school problems, neglect of responsibilities
                                                </td>
                                                <td className="px-4 py-3">Various mental health conditions</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">!</span>
                                            Red Flag Symptoms
                                        </h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                                            <li>Thoughts of self-harm or suicide</li>
                                            <li>Psychotic symptoms (hallucinations/delusions)</li>
                                            <li>Inability to care for basic needs</li>
                                            <li>Severe impairment in functioning</li>
                                        </ul>
                                        <p className="text-gray-700 mt-2 font-medium">
                                            These require <span className="text-red-600">immediate professional attention</span>.
                                        </p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">i</span>
                                            Less Recognized Signs
                                        </h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                                            <li>Perfectionism that interferes with completion</li>
                                            <li>Excessive focus on appearance/body image</li>
                                            <li>Compulsive shopping/gambling</li>
                                            <li>Emotional numbness</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Age-Specific Warning Signs */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <HeartPulse className="w-8 h-8 text-blue-600 mr-2" />
                                    Age-Specific Warning Signs
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Mental health symptoms manifest differently across age groups. Here's what to watch for:
                                </p>

                                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                                    <div className="grid md:grid-cols-4 gap-4 text-center font-medium mb-2">
                                        <div>Age Group</div>
                                        <div>Common Signs</div>
                                        <div>Risk Factors</div>
                                        <div>Recommended Action</div>
                                    </div>
                                    <div className="grid md:grid-cols-4 gap-4 text-center mb-1 border-b border-gray-200 pb-2">
                                        <div className="font-medium">Children (5-12)</div>
                                        <div>Frequent stomachaches, school refusal, regression</div>
                                        <div>Family history, trauma, bullying</div>
                                        <div>Pediatrician evaluation</div>
                                    </div>
                                    <div className="grid md:grid-cols-4 gap-4 text-center mb-1 border-b border-gray-200 pb-2 bg-blue-50">
                                        <div className="font-medium">Teens (13-19)</div>
                                        <div>Withdrawal, risk-taking, self-harm</div>
                                        <div>Social media, academic pressure</div>
                                        <div>School counselor referral</div>
                                    </div>
                                    <div className="grid md:grid-cols-4 gap-4 text-center mb-1 border-b border-gray-200 pb-2">
                                        <div className="font-medium">Adults (20-64)</div>
                                        <div>Work problems, relationship issues</div>
                                        <div>Financial stress, workplace culture</div>
                                        <div>Employee assistance programs</div>
                                    </div>
                                    <div className="grid md:grid-cols-4 gap-4 text-center">
                                        <div className="font-medium">Seniors (65+)</div>
                                        <div>Memory complaints, neglect of self-care</div>
                                        <div>Isolation, physical health decline</div>
                                        <div>Geriatric assessment</div>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">In Children</h3>
                                        <p className="text-gray-700 mb-2">
                                            Children often express distress through physical complaints or behavior changes rather than verbalizing emotions. Watch for:
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                                            <li>Frequent headaches or stomachaches with no medical cause</li>
                                            <li>Regression to earlier developmental stages (bedwetting, baby talk)</li>
                                            <li>Excessive clinginess or separation anxiety</li>
                                            <li>Decline in school performance not explained by learning issues</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">In Adolescents</h3>
                                        <p className="text-gray-700 mb-2">
                                            Teen mental health crises have risen dramatically in recent years. Concerning signs include:
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                                            <li>Extreme sensitivity to rejection or failure</li>
                                            <li>Sudden changes in friend groups</li>
                                            <li>Preoccupation with death in writing or art</li>
                                            <li>Drastic changes in personal hygiene</li>
                                            <li>Secretive online behavior</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Physical Health Connection */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Brain className="w-8 h-8 text-blue-600 mr-2" />
                                    The Mind-Body Connection
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Many physical symptoms can indicate underlying mental health concerns. Research shows that patients with certain chronic physical symptoms are 3-5 times more likely to have a mental health condition.
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Common Physical Manifestations</h3>
                                        <ol className="list-decimal list-inside text-gray-700 space-y-1">
                                            <li>Chronic pain without clear cause</li>
                                            <li>Digestive issues (IBS symptoms)</li>
                                            <li>Frequent illnesses due to weakened immunity</li>
                                            <li>Unexplained weight changes (±10% in 6 months)</li>
                                            <li>Skin conditions that flare with stress</li>
                                        </ol>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">When to Suspect Mental Health Roots</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>Symptoms worsen during periods of stress</li>
                                            <li>Medical tests come back normal</li>
                                            <li>Multiple vague symptoms across body systems</li>
                                            <li>Family history of mental health conditions</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Important Note:</h3>
                                    <p className="text-gray-700">
                                        Always rule out physical causes first. Mental health diagnoses should only be made after medical causes are excluded by a healthcare professional.
                                    </p>
                                </div>
                            </section>

                            {/* Action Steps */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">What to Do If You Notice Warning Signs</h2>

                                <div className="space-y-6">
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Step 1: Assess Severity</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">For Non-Crisis Situations</h4>
                                                <ul className="list-disc list-inside text-gray-700 ml-4">
                                                    <li>Document symptoms for 2-3 weeks</li>
                                                    <li>Note triggers and patterns</li>
                                                    <li>Gather family mental health history</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">For Crisis Situations</h4>
                                                <ul className="list-disc list-inside text-gray-700 ml-4">
                                                    <li>Call emergency services if danger is immediate</li>
                                                    <li>Contact crisis hotlines (988 in U.S.)</li>
                                                    <li>Don't leave the person alone if suicidal</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Step 2: Start the Conversation</h3>
                                        </div>
                                        <div className="p-4">
                                            <p className="text-gray-700 mb-3">
                                                Approach with compassion and without judgment. Effective phrases include:
                                            </p>
                                            <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                                                <li>"I've noticed you haven't been yourself lately - want to talk about it?"</li>
                                                <li>"You seem really (sad/stressed/overwhelmed) - how can I help?"</li>
                                                <li>"I care about you and want to support you"</li>
                                            </ul>
                                            <p className="text-gray-700 mt-3">
                                                Avoid: "Snap out of it" or "It's all in your head"
                                            </p>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Step 3: Seek Professional Help</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Finding the Right Provider</h4>
                                                <p className="text-gray-700">
                                                    Start with primary care physician for initial evaluation. They may refer to:
                                                </p>
                                                <ul className="list-disc list-inside text-gray-700 ml-4 mt-1">
                                                    <li>Psychiatrists (for medication evaluation)</li>
                                                    <li>Psychologists/therapists (for counseling)</li>
                                                    <li>Specialty clinics (for eating disorders, addiction, etc.)</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">Preparing for the First Appointment</h4>
                                                <ul className="list-disc list-inside text-gray-700 ml-4">
                                                    <li>Bring symptom timeline</li>
                                                    <li>List current medications</li>
                                                    <li>Note family history of mental illness</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Prevention and Maintenance */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Mental Health Maintenance</h2>

                                <p className="text-gray-700 mb-4">
                                    Proactive mental health care can reduce risk of developing serious conditions. The <a href="#" className="text-blue-600 hover:underline">World Health Organization</a> recommends these evidence-based practices:
                                </p>

                                <div className="grid md:grid-cols-3 gap-4 mb-6">
                                    <div className="bg-green-50 p-4 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">Physical Health</h3>
                                        <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                                            <li>7-9 hours sleep nightly</li>
                                            <li>150 mins exercise weekly</li>
                                            <li>Balanced nutrition</li>
                                        </ul>
                                    </div>
                                    <div className="bg-green-50 p-4 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">Social Connection</h3>
                                        <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                                            <li>Regular social interaction</li>
                                            <li>Community involvement</li>
                                            <li>Healthy relationships</li>
                                        </ul>
                                    </div>
                                    <div className="bg-green-50 p-4 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">Stress Management</h3>
                                        <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                                            <li>Mindfulness/meditation</li>
                                            <li>Work-life balance</li>
                                            <li>Leisure activities</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-purple-50 p-4 rounded-lg">
                                    <h3 className="font-bold text-gray-900 mb-2">Mental Health Check-In Questions</h3>
                                    <p className="text-gray-700 mb-2">
                                        Ask yourself these monthly:
                                    </p>
                                    <ol className="list-decimal list-inside text-gray-700 ml-4 space-y-1">
                                        <li>How have I been sleeping?</li>
                                        <li>Am I enjoying activities I usually like?</li>
                                        <li>How's my energy level compared to normal?</li>
                                        <li>Am I more irritable/sad/anxious than usual?</li>
                                        <li>Are my relationships satisfying?</li>
                                    </ol>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Recognizing mental health warning signs is the first step toward getting appropriate help. While this guide provides comprehensive information, it's not a substitute for professional evaluation.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    Mental health conditions are treatable, and early intervention leads to better outcomes. If you're unsure whether symptoms warrant concern, err on the side of consulting a professional.
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
                                            Medically reviewed
                                        </a>{" "}
                                        by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            Dr. Emily Parker, Psychiatrist
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

                        {/* Emergency Info */}
                        <div className="bg-red-50 border-l-4 border-red-400 rounded-lg p-6 mb-8">
                            <h3 className="text-lg font-bold text-gray-900 mb-2">In Crisis?</h3>
                            <p className="text-gray-700 mb-3">
                                If you or someone you know is in immediate danger:
                            </p>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="text-red-600 hover:underline font-medium">
                                        Call 911 (U.S.) or your local emergency number
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-red-600 hover:underline font-medium">
                                        Text HOME to 741741 (Crisis Text Line)
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-red-600 hover:underline font-medium">
                                        Call 988 (U.S. Suicide & Crisis Lifeline)
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Newsletter Signup */}
                        <div className="bg-blue-50 rounded-lg p-6 mb-8">
                            <div className="mb-4">
                                <h3 className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-2">MENTAL HEALTH NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get mental health resources</h4>
                                <p className="text-gray-700 text-sm">
                                    Monthly updates on mental health awareness, coping strategies, and community resources.
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
                                We respect your{" "}
                                <a href="#" className="text-blue-600 hover:underline">
                                    privacy
                                </a>
                            </p>
                        </div>

                        {/* Self-Assessment */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Self-Check</h3>
                            <p className="text-gray-700 mb-3">
                                Over the past 2 weeks, how often have you been bothered by:
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <input type="checkbox" id="check1" className="mt-1 mr-2" />
                                    <label htmlFor="check1" className="text-gray-700">Little interest in activities</label>
                                </li>
                                <li className="flex items-start">
                                    <input type="checkbox" id="check2" className="mt-1 mr-2" />
                                    <label htmlFor="check2" className="text-gray-700">Feeling down/hopeless</label>
                                </li>
                                <li className="flex items-start">
                                    <input type="checkbox" id="check3" className="mt-1 mr-2" />
                                    <label htmlFor="check3" className="text-gray-700">Sleep/appetite changes</label>
                                </li>
                                <li className="flex items-start">
                                    <input type="checkbox" id="check4" className="mt-1 mr-2" />
                                    <label htmlFor="check4" className="text-gray-700">Trouble concentrating</label>
                                </li>
                            </ul>
                            <p className="text-gray-700 text-sm mt-3">
                                Checking several items suggests consultation with a professional may be helpful.
                            </p>
                        </div>

                        {/* Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Helpful Resources</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-start">
                                        <BookOpen className="w-4 h-4 mt-1 mr-2 flex-shrink-0" />
                                        <span>NAMI Helpline: 1-800-950-NAMI</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-start">
                                        <BookOpen className="w-4 h-4 mt-1 mr-2 flex-shrink-0" />
                                        <span>Find a Therapist (Psychology Today)</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-start">
                                        <BookOpen className="w-4 h-4 mt-1 mr-2 flex-shrink-0" />
                                        <span>Mental Health America Screening Tools</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-start">
                                        <BookOpen className="w-4 h-4 mt-1 mr-2 flex-shrink-0" />
                                        <span>Crisis Text Line International Numbers</span>
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