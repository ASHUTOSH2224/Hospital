"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, HeartPulse, Brain, Shield, BookOpen, Star, AlertTriangle, LifeBuoy } from "lucide-react"

export default function MentalHealthGuide() {
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

    const tabs = ["Overview", "Conditions", "Treatments", "Self-Care", "Resources"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Comprehensive Mental Health Guide
                            </h1>
                            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                Your complete resource for maintaining optimal mental wellness and emotional health.
                            </p>

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

                            {/* Date and Author */}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-gray-500 mb-6">
                                <div className="flex items-center">
                                    <Calendar className="w-4 h-4 mr-1" />
                                    <span className="text-sm">Updated on June 15, 2024</span>
                                </div>
                                <div className="flex items-center">
                                    <User className="w-4 h-4 mr-1" />
                                    <span className="text-sm">Written by Dr. Emily Parker, Psychologist</span>
                                </div>
                            </div>

                            {/* Main Image */}
                            <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
                                <img
                                    src="https://images.unsplash.com/photo-1493836512294-502baa1986e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                    alt="Mental health concept"
                                    className="w-full h-auto object-cover"
                                    style={{ maxHeight: '500px' }}
                                />
                            </div>

                            {/* Key Takeaways */}
                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8 rounded-r-lg">
                                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                    <Star className="w-5 h-5 text-blue-600 mr-2" />
                                    Key Takeaways
                                </h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>1 in 5 adults experiences mental illness each year</li>
                                    <li>Early intervention improves treatment outcomes significantly</li>
                                    <li>Multiple effective treatment options exist for all conditions</li>
                                    <li>Self-care strategies can prevent 30-50% of mental health episodes</li>
                                    <li>Digital tools now make mental health support more accessible</li>
                                </ul>
                            </div>

                            {/* Introduction */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Brain className="w-8 h-8 text-blue-600 mr-2" />
                                    Understanding Mental Health
                                </h2>

                                <p className="text-gray-700 mb-4 leading-relaxed">
                                    Mental health encompasses our emotional, psychological, and social well-being. It affects how we think, feel, and act as we cope with life. According to the <a href="#" className="text-blue-600 hover:underline">World Health Organization</a>, mental health is "a state of well-being in which the individual realizes his or her own abilities, can cope with the normal stresses of life, can work productively and fruitfully, and is able to make a contribution to his or her community."
                                </p>

                                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Mental Health vs Mental Illness</h3>
                                    <p className="text-gray-700 mb-2">
                                        <strong>Mental health</strong> refers to cognitive, behavioral, and emotional well-being. <strong>Mental illness</strong> refers to diagnosable disorders that affect thinking, feeling, mood, and behavior.
                                    </p>
                                    <p className="text-gray-700">
                                        Everyone has mental health, just like everyone has physical health, but not everyone has a mental illness.
                                    </p>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4">The Mental Health Spectrum</h3>
                                <p className="text-gray-700 mb-6 leading-relaxed">
                                    Mental health exists on a spectrum from thriving to crisis. Most people move back and forth along this spectrum throughout their lives based on circumstances, stressors, and coping resources.
                                </p>

                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Level</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Characteristics</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Recommended Action</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Thriving</td>
                                                <td className="px-4 py-3">High life satisfaction, effective coping, strong relationships</td>
                                                <td className="px-4 py-3">Maintain healthy habits, continue prevention strategies</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Managing</td>
                                                <td className="px-4 py-3">Some stress but generally coping well, occasional difficulties</td>
                                                <td className="px-4 py-3">Practice self-care, monitor for changes</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Struggling</td>
                                                <td className="px-4 py-3">Frequent distress, reduced functioning, noticeable symptoms</td>
                                                <td className="px-4 py-3">Seek professional evaluation, implement support strategies</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Crisis</td>
                                                <td className="px-4 py-3">Severe impairment, possible danger to self/others</td>
                                                <td className="px-4 py-3">Immediate professional help, possible hospitalization</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            {/* Common Mental Health Conditions */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <AlertTriangle className="w-8 h-8 text-blue-600 mr-2" />
                                    Common Mental Health Conditions
                                </h2>

                                <p className="text-gray-700 mb-6 leading-relaxed">
                                    Mental health conditions are medical disorders that affect thinking, mood, and behavior. They range from mild to severe and can be temporary or chronic. Below are the most prevalent conditions affecting adults globally:
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="border border-gray-200 rounded-lg p-4">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                                            <HeartPulse className="w-5 h-5 text-blue-600 mr-2" />
                                            Anxiety Disorders
                                        </h3>
                                        <p className="text-gray-700 mb-2">
                                            <strong>Prevalence:</strong> 19% of adults annually
                                        </p>
                                        <p className="text-gray-700 mb-3">
                                            Includes generalized anxiety, panic disorder, social anxiety, phobias, and OCD. Characterized by excessive fear and worry that interferes with daily activities.
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                                            <li>Physical symptoms: rapid heartbeat, sweating, trembling</li>
                                            <li>Psychological symptoms: dread, catastrophic thinking</li>
                                            <li>Effective treatments: CBT, medication, mindfulness</li>
                                        </ul>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg p-4">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                                            <HeartPulse className="w-5 h-5 text-blue-600 mr-2" />
                                            Depression
                                        </h3>
                                        <p className="text-gray-700 mb-2">
                                            <strong>Prevalence:</strong> 8% of adults annually
                                        </p>
                                        <p className="text-gray-700 mb-3">
                                            Persistent sadness, hopelessness, and loss of interest lasting at least two weeks. Ranges from mild to severe (major depressive disorder).
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                                            <li>Physical symptoms: fatigue, appetite changes, sleep disturbances</li>
                                            <li>Psychological symptoms: guilt, worthlessness, suicidal thoughts</li>
                                            <li>Effective treatments: therapy, antidepressants, lifestyle changes</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-3 gap-4 mb-8">
                                    <div className="border border-gray-200 rounded-lg p-4">
                                        <h4 className="font-bold text-gray-900 mb-2">Bipolar Disorder</h4>
                                        <p className="text-gray-700 text-sm">2.8% of adults, characterized by alternating depressive and manic episodes</p>
                                    </div>
                                    <div className="border border-gray-200 rounded-lg p-4">
                                        <h4 className="font-bold text-gray-900 mb-2">PTSD</h4>
                                        <p className="text-gray-700 text-sm">3.6% of adults, develops after traumatic events with flashbacks and hypervigilance</p>
                                    </div>
                                    <div className="border border-gray-200 rounded-lg p-4">
                                        <h4 className="font-bold text-gray-900 mb-2">Schizophrenia</h4>
                                        <p className="text-gray-700 text-sm">1% of population, involves hallucinations, delusions, and cognitive difficulties</p>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Early Warning Signs</h3>
                                    <p className="text-gray-700">
                                        Recognizing early symptoms can lead to quicker intervention: withdrawal from social activities, drop in functioning at work/school, problems with concentration, increased sensitivity, unusual behavior, sleep/appetite changes, and apathy.
                                    </p>
                                </div>
                            </section>

                            {/* Treatment Options */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <HeartPulse className="w-8 h-8 text-blue-600 mr-2" />
                                    Treatment Options
                                </h2>

                                <p className="text-gray-700 mb-6 leading-relaxed">
                                    Modern mental health care offers a range of effective treatments tailored to individual needs. Most people benefit from a combination of approaches:
                                </p>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Psychotherapy Approaches</h3>
                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900 mb-2">Cognitive Behavioral Therapy (CBT)</h4>
                                        <p className="text-gray-700 mb-3">
                                            Focuses on identifying and changing negative thought patterns and behaviors. Effective for anxiety, depression, and many other conditions.
                                        </p>
                                        <p className="text-gray-700 text-sm font-medium">
                                            Success Rate: 50-75% for depression and anxiety disorders
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900 mb-2">Dialectical Behavior Therapy (DBT)</h4>
                                        <p className="text-gray-700 mb-3">
                                            Teaches mindfulness, distress tolerance, emotion regulation, and interpersonal effectiveness. Originally developed for borderline personality disorder.
                                        </p>
                                        <p className="text-gray-700 text-sm font-medium">
                                            Reduces self-harm behaviors by 60-80%
                                        </p>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Medication Options</h3>
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Medication Class</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Common Uses</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Examples</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Effectiveness</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">SSRIs</td>
                                                <td className="px-4 py-3">Depression, anxiety, OCD</td>
                                                <td className="px-4 py-3">Fluoxetine, Sertraline</td>
                                                <td className="px-4 py-3">40-60% response rate</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">SNRIs</td>
                                                <td className="px-4 py-3">Depression, chronic pain</td>
                                                <td className="px-4 py-3">Venlafaxine, Duloxetine</td>
                                                <td className="px-4 py-3">50-65% response rate</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Atypical Antipsychotics</td>
                                                <td className="px-4 py-3">Bipolar, schizophrenia</td>
                                                <td className="px-4 py-3">Aripiprazole, Quetiapine</td>
                                                <td className="px-4 py-3">Reduces relapse by 50%</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Emerging Treatments</h3>
                                <div className="space-y-4 mb-6">
                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h4 className="font-bold text-gray-900 mb-2">Ketamine Therapy</h4>
                                        <p className="text-gray-700">
                                            Shows rapid antidepressant effects (within hours) for treatment-resistant depression. Administered under medical supervision.
                                        </p>
                                    </div>
                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h4 className="font-bold text-gray-900 mb-2">Transcranial Magnetic Stimulation (TMS)</h4>
                                        <p className="text-gray-700">
                                            Non-invasive brain stimulation for depression when medications fail. 50-60% response rate after 4-6 weeks.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Self-Care Strategies */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Shield className="w-8 h-8 text-blue-600 mr-2" />
                                    Self-Care Strategies
                                </h2>

                                <p className="text-gray-700 mb-6 leading-relaxed">
                                    While professional treatment is essential for mental health conditions, daily self-care practices can significantly improve symptoms and prevent relapse:
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Physical Health Connection</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li><strong>Exercise:</strong> 30 minutes daily can reduce depression symptoms by 30-50%</li>
                                            <li><strong>Sleep hygiene:</strong> 7-9 hours with consistent schedule improves mood regulation</li>
                                            <li><strong>Nutrition:</strong> Mediterranean diet linked to 33% lower depression risk</li>
                                            <li><strong>Sunlight exposure:</strong> 15-30 minutes daily helps regulate circadian rhythms</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Mindfulness Practices</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li><strong>Meditation:</strong> 10-20 minutes daily reduces anxiety and improves focus</li>
                                            <li><strong>Deep breathing:</strong> Activates parasympathetic nervous system to reduce stress</li>
                                            <li><strong>Gratitude journaling:</strong> Writing 3 positive things daily enhances wellbeing</li>
                                            <li><strong>Digital detox:</strong> Scheduled screen-free time improves sleep and relationships</li>
                                        </ul>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Building Resilience</h3>
                                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                    <p className="text-gray-700 mb-2">
                                        Resilience is the ability to adapt to adversity and bounce back from difficulties. Research shows resilience can be developed through:
                                    </p>
                                    <ol className="list-decimal list-inside text-gray-700 space-y-1">
                                        <li>Maintaining positive relationships</li>
                                        <li>Developing problem-solving skills</li>
                                        <li>Practicing self-compassion</li>
                                        <li>Cultivating optimism (realistic positive thinking)</li>
                                        <li>Finding purpose and meaning</li>
                                    </ol>
                                </div>
                            </section>

                            {/* Crisis Resources */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <LifeBuoy className="w-8 h-8 text-blue-600 mr-2" />
                                    Crisis Resources
                                </h2>

                                <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6 rounded-r-lg">
                                    <h3 className="font-bold text-gray-900 mb-2">Immediate Help</h3>
                                    <p className="text-gray-700 mb-2">
                                        If you or someone you know is in crisis:
                                    </p>
                                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                                        <li>Call 911 for life-threatening emergencies</li>
                                        <li>National Suicide Prevention Lifeline: 988 (US)</li>
                                        <li>Crisis Text Line: Text HOME to 741741 (US)</li>
                                        <li>Your local emergency room</li>
                                    </ul>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Finding Professional Help</h3>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="border border-gray-200 rounded-lg p-4">
                                        <h4 className="font-bold text-gray-900 mb-2">Therapist Directories</h4>
                                        <ul className="space-y-2">
                                            <li><a href="#" className="text-blue-600 hover:underline">Psychology Today</a> - Search by location and specialty</li>
                                            <li><a href="#" className="text-blue-600 hover:underline">GoodTherapy</a> - Vetted mental health professionals</li>
                                            <li><a href="#" className="text-blue-600 hover:underline">ADAA</a> - Anxiety and depression specialists</li>
                                        </ul>
                                    </div>
                                    <div className="border border-gray-200 rounded-lg p-4">
                                        <h4 className="font-bold text-gray-900 mb-2">Online Therapy Options</h4>
                                        <ul className="space-y-2">
                                            <li><a href="#" className="text-blue-600 hover:underline">BetterHelp</a> - Text/video therapy</li>
                                            <li><a href="#" className="text-blue-600 hover:underline">Talkspace</a> - Psychiatry and therapy</li>
                                            <li><a href="#" className="text-blue-600 hover:underline">7 Cups</a> - Free listener support</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4 leading-relaxed">
                                    Mental health is just as important as physical health, and seeking help is a sign of strength, not weakness. With proper treatment and support, most people with mental health conditions can manage their symptoms and lead fulfilling lives.
                                </p>

                                <p className="text-gray-700 mb-4 leading-relaxed">
                                    Remember that recovery is often a journey with ups and downs. Be patient with yourself or your loved one, celebrate small victories, and don't hesitate to adjust treatment approaches as needed.
                                </p>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "Mental health needs a great deal of attention. It's the final taboo and it needs to be faced and dealt with." — Adam Ant
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
                                            Dr. Emily Parker
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        Clinical psychologist with 15 years experience specializing in cognitive behavioral therapy and trauma recovery.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Mental Health Checklist */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Mental Health Check-In</h3>
                            <p className="text-gray-700 text-sm mb-4">
                                Use this brief checklist to assess your current mental wellbeing:
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <input type="checkbox" id="check1" className="mt-1 mr-2" />
                                    <label htmlFor="check1" className="text-gray-700 text-sm">
                                        I've been sleeping well and feel rested
                                    </label>
                                </li>
                                <li className="flex items-start">
                                    <input type="checkbox" id="check2" className="mt-1 mr-2" />
                                    <label htmlFor="check2" className="text-gray-700 text-sm">
                                        I can concentrate on tasks without unusual difficulty
                                    </label>
                                </li>
                                <li className="flex items-start">
                                    <input type="checkbox" id="check3" className="mt-1 mr-2" />
                                    <label htmlFor="check3" className="text-gray-700 text-sm">
                                        I feel connected to others and can maintain relationships
                                    </label>
                                </li>
                                <li className="flex items-start">
                                    <input type="checkbox" id="check4" className="mt-1 mr-2" />
                                    <label htmlFor="check4" className="text-gray-700 text-sm">
                                        My appetite and eating patterns are normal
                                    </label>
                                </li>
                                <li className="flex items-start">
                                    <input type="checkbox" id="check5" className="mt-1 mr-2" />
                                    <label htmlFor="check5" className="text-gray-700 text-sm">
                                        I can manage daily stressors without feeling overwhelmed
                                    </label>
                                </li>
                            </ul>
                            <p className="text-xs text-gray-600 mt-3">
                                If you checked fewer than 3 items, consider reaching out to a mental health professional.
                            </p>
                        </div>

                        {/* Newsletter Signup */}
                        <div className="bg-blue-50 rounded-lg p-6 mb-8">
                            <div className="mb-4">
                                <h3 className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-2">MENTAL HEALTH NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get wellness tips and resources</h4>
                                <p className="text-gray-700 text-sm">
                                    Monthly mental health strategies, research updates, and community stories.
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
                                We respect your privacy. Unsubscribe at any time.
                            </p>
                        </div>

                        {/* Crisis Resources */}
                        <div className="bg-red-50 border border-red-100 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                <LifeBuoy className="w-5 h-5 text-red-600 mr-2" />
                                Immediate Help
                            </h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-red-600 hover:underline font-medium">National Suicide Prevention Lifeline</a>
                                    <p className="text-gray-700 text-sm">Call or text 988 (US)</p>
                                </li>
                                <li>
                                    <a href="#" className="text-red-600 hover:underline font-medium">Crisis Text Line</a>
                                    <p className="text-gray-700 text-sm">Text HOME to 741741 (US)</p>
                                </li>
                                <li>
                                    <a href="#" className="text-red-600 hover:underline font-medium">Trevor Project (LGBTQ+)</a>
                                    <p className="text-gray-700 text-sm">Call 1-866-488-7386</p>
                                </li>
                                <li>
                                    <a href="#" className="text-red-600 hover:underline font-medium">Veterans Crisis Line</a>
                                    <p className="text-gray-700 text-sm">Call 988 then press 1</p>
                                </li>
                            </ul>
                        </div>

                        {/* Recommended Books */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                <BookOpen className="w-5 h-5 text-blue-600 mr-2" />
                                Recommended Reading
                            </h3>
                            <ul className="space-y-4">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline font-medium">The Body Keeps the Score</a>
                                    <p className="text-gray-700 text-sm">Bessel van der Kolk - Trauma healing</p>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline font-medium">Feeling Good</a>
                                    <p className="text-gray-700 text-sm">David Burns - CBT techniques</p>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline font-medium">The Happiness Trap</a>
                                    <p className="text-gray-700 text-sm">Russ Harris - ACT approach</p>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline font-medium">An Unquiet Mind</a>
                                    <p className="text-gray-700 text-sm">Kay Redfield Jamison - Memoir on bipolar</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}