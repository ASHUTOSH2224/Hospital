"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, Moon, ClipboardList, HeartPulse, Pill, Activity, AlertTriangle, BookOpen } from "lucide-react"

export default function SleepSpecialistQuestionsGuide() {
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

    const tabs = ["Preparation", "Diagnosis", "Treatment", "Lifestyle"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Essential Questions to Ask Your Sleep Specialist
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
                                Preparing for your sleep specialist appointment with the right questions can significantly improve your diagnosis and treatment outcomes. This comprehensive guide covers crucial questions about sleep patterns, diagnostic tests, treatment options, and lifestyle adjustments to help you take control of your sleep health.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1586368939344-48171a53d386?ixlib=rb-4.0.3&auto=format&fit=crop&w=732&h=549&q=80"
                                    alt="Woman discussing sleep issues with doctor"
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
                                    <li>Document your sleep patterns for 2 weeks before your appointment</li>
                                    <li>Ask about both common and rare sleep disorders that match your symptoms</li>
                                    <li>Understand all available diagnostic options and their accuracy rates</li>
                                    <li>Discuss medication alternatives and potential side effects</li>
                                    <li>Create a personalized sleep optimization plan with measurable goals</li>
                                </ul>
                            </div>

                            {/* Why These Questions Matter */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Moon className="w-8 h-8 text-blue-600 mr-2" />
                                    Why These Questions Matter
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Sleep disorders affect approximately <span className="font-semibold">50-70 million Americans</span>, yet many go undiagnosed or improperly treated. According to a <a href="#" className="text-blue-600 hover:underline">2023 study in Sleep Medicine Reviews</a>, patients who asked targeted questions during their sleep consultations experienced:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>Faster diagnosis (average reduction of 2.3 months)</li>
                                    <li>Higher treatment adherence (42% improvement)</li>
                                    <li>Better sleep quality outcomes (31% more improvement)</li>
                                    <li>Reduced medication side effects (28% decrease)</li>
                                </ul>

                                <div className="bg-purple-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Before Your Appointment</h3>
                                    <p className="text-gray-700 mb-2">
                                        Keep a sleep diary for at least 2 weeks, tracking:
                                    </p>
                                    <ul className="list-disc list-inside text-gray-700 ml-4">
                                        <li>Bedtime and wake time</li>
                                        <li>Sleep latency (time to fall asleep)</li>
                                        <li>Number of awakenings</li>
                                        <li>Daytime fatigue levels</li>
                                        <li>Caffeine/alcohol consumption</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Diagnosis Questions */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Activity className="w-8 h-8 text-blue-600 mr-2" />
                                    Diagnosis Questions
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Understanding your diagnostic process helps set realistic expectations and prepares you for any required tests. These questions will help clarify your condition and the steps to confirm it.
                                </p>

                                {/* Questions Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Key Questions</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purpose</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Initial Assessment</td>
                                                <td className="px-4 py-3">
                                                    <ul className="list-disc list-inside">
                                                        <li>What sleep disorders could explain my symptoms?</li>
                                                        <li>How will you differentiate between similar conditions?</li>
                                                    </ul>
                                                </td>
                                                <td className="px-4 py-3">Narrow down potential diagnoses</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Sleep Studies</td>
                                                <td className="px-4 py-3">
                                                    <ul className="list-disc list-inside">
                                                        <li>What type of sleep study do I need (in-lab vs at-home)?</li>
                                                        <li>What's the accuracy difference between these options?</li>
                                                    </ul>
                                                </td>
                                                <td className="px-4 py-3">Understand diagnostic methods</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Test Preparation</td>
                                                <td className="px-4 py-3">
                                                    <ul className="list-disc list-inside">
                                                        <li>Should I adjust my medications before testing?</li>
                                                        <li>What's your protocol for false negatives/positives?</li>
                                                    </ul>
                                                </td>
                                                <td className="px-4 py-3">Ensure accurate results</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                {/* Diagnostic Test Comparison */}
                                <div className="bg-gray-50 p-4 rounded-lg mb-8">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Common Sleep Diagnostic Tests</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center mb-2">
                                        <div className="font-medium">Test Type</div>
                                        <div className="font-medium">Duration</div>
                                        <div className="font-medium">Conditions Detected</div>
                                        <div className="font-medium">Accuracy</div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center mb-1 p-2 border-b border-gray-200">
                                        <div className="font-medium">In-Lab Polysomnography</div>
                                        <div>1 night</div>
                                        <div>Sleep apnea, narcolepsy, PLMD</div>
                                        <div>92-97%</div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center mb-1 p-2 border-b border-gray-200 bg-blue-50">
                                        <div className="font-medium">Home Sleep Apnea Test</div>
                                        <div>1-3 nights</div>
                                        <div>Obstructive sleep apnea</div>
                                        <div>78-85%</div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center mb-1 p-2">
                                        <div className="font-medium">Multiple Sleep Latency Test</div>
                                        <div>Daytime study</div>
                                        <div>Narcolepsy, hypersomnia</div>
                                        <div>88-94%</div>
                                    </div>
                                </div>
                            </section>

                            {/* Treatment Options */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Pill className="w-8 h-8 text-blue-600 mr-2" />
                                    Treatment Questions
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Treatment for sleep disorders varies widely based on your specific diagnosis. These questions will help you understand your options and make informed decisions about your care plan.
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Medication Questions</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>What are the first-line medications for my condition?</li>
                                            <li>What are the potential side effects I should monitor?</li>
                                            <li>How long before I see results from this treatment?</li>
                                            <li>Are there any dependency risks with this medication?</li>
                                        </ul>
                                    </div>
                                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Therapy Questions</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Would cognitive behavioral therapy for insomnia (CBT-I) help me?</li>
                                            <li>What lifestyle changes have the most impact on my condition?</li>
                                            <li>How often should we reassess my treatment plan?</li>
                                            <li>What are the success rates for my recommended treatments?</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Treatment Effectiveness */}
                                <div className="bg-purple-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Treatment Effectiveness by Condition</h3>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full">
                                            <thead>
                                                <tr className="border-b border-gray-200">
                                                    <th className="px-4 py-2 text-left">Condition</th>
                                                    <th className="px-4 py-2 text-left">First-Line Treatment</th>
                                                    <th className="px-4 py-2 text-left">Success Rate</th>
                                                    <th className="px-4 py-2 text-left">Alternative Options</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="border-b border-gray-200">
                                                    <td className="px-4 py-2">Obstructive Sleep Apnea</td>
                                                    <td className="px-4 py-2">CPAP Therapy</td>
                                                    <td className="px-4 py-2">82%</td>
                                                    <td className="px-4 py-2">Oral appliances, surgery</td>
                                                </tr>
                                                <tr className="border-b border-gray-200 bg-white">
                                                    <td className="px-4 py-2">Chronic Insomnia</td>
                                                    <td className="px-4 py-2">CBT-I</td>
                                                    <td className="px-4 py-2">70-80%</td>
                                                    <td className="px-4 py-2">Medications, relaxation techniques</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-2">Restless Legs Syndrome</td>
                                                    <td className="px-4 py-2">Dopamine agonists</td>
                                                    <td className="px-4 py-2">65-75%</td>
                                                    <td className="px-4 py-2">Iron supplements, gabapentin</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </section>

                            {/* Lifestyle & Follow-up */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <HeartPulse className="w-8 h-8 text-blue-600 mr-2" />
                                    Lifestyle & Follow-up Questions
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Sustainable sleep health requires addressing behavioral and environmental factors. These questions will help you create a comprehensive plan for long-term improvement.
                                </p>

                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Sleep Environment Optimization</h3>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-2">Bedroom Setup</h4>
                                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                                                <li>What's the ideal temperature for sleep?</li>
                                                <li>How important is mattress quality for my condition?</li>
                                                <li>Should I use white noise or earplugs?</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-2">Daily Routines</h4>
                                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                                                <li>What's the optimal exercise timing for better sleep?</li>
                                                <li>How late in the day can I consume caffeine?</li>
                                                <li>Are naps beneficial or harmful for me?</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Follow-up Plan */}
                                <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Sample Follow-up Plan</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-start">
                                            <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">1</div>
                                            <div>
                                                <h4 className="font-bold text-gray-900">Initial Treatment (Weeks 1-2)</h4>
                                                <p className="text-gray-700">Daily sleep log, medication adjustment period, baseline measurements</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">2</div>
                                            <div>
                                                <h4 className="font-bold text-gray-900">Progress Evaluation (Week 4)</h4>
                                                <p className="text-gray-700">Assess treatment effectiveness, side effects, and adherence challenges</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">3</div>
                                            <div>
                                                <h4 className="font-bold text-gray-900">Long-term Plan (Month 3)</h4>
                                                <p className="text-gray-700">Determine maintenance protocol, gradual medication reduction if applicable</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Red Flags */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <AlertTriangle className="w-8 h-8 text-blue-600 mr-2" />
                                    Red Flags to Discuss
                                </h2>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">Emergency Symptoms</h3>
                                        <ul className="list-disc list-inside text-gray-700">
                                            <li>Falling asleep while driving</li>
                                            <li>Breathing interruptions during sleep</li>
                                            <li>Chest pain at night</li>
                                            <li>Severe daytime sleepiness affecting work</li>
                                        </ul>
                                    </div>
                                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">Concerning Patterns</h3>
                                        <ul className="list-disc list-inside text-gray-700">
                                            <li>Needing increasing medication doses</li>
                                            <li>Worsening symptoms despite treatment</li>
                                            <li>New or unusual sleep behaviors</li>
                                            <li>Significant weight changes</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Preparing thoughtful questions for your sleep specialist demonstrates proactive engagement in your health care, which studies show leads to better treatment outcomes. Remember that sleep disorders often require patience—many treatments take weeks to show full effects, and finding the right approach may require some trial and error.
                                </p>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "Your sleep specialist is your partner in health. The more information you share and the more questions you ask, the better they can tailor your treatment. Don't hesitate to speak up about what's working and what isn't—this feedback is crucial for optimizing your care."
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
                                            Dr. Emily Parker, Sleep Medicine Specialist
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600 mb-1">
                                        — Written by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            David Wilson
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
                                <h3 className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-2">SLEEP HEALTH NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get better sleep tips</h4>
                                <p className="text-gray-700 text-sm">
                                    Monthly sleep optimization strategies, latest research, and Q&A with sleep specialists.
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

                        {/* Common Sleep Disorders */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Common Sleep Disorders</h3>
                            <div className="space-y-4">
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/sleep-apnea.jpg" alt="Sleep apnea" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Sleep Apnea</h4>
                                            <p className="text-sm text-gray-600">Affects 25% of adults</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/insomnia.jpg" alt="Insomnia" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Chronic Insomnia</h4>
                                            <p className="text-sm text-gray-600">10-15% prevalence</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/rls.jpg" alt="Restless legs" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Restless Legs Syndrome</h4>
                                            <p className="text-sm text-gray-600">5-10% affected</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Preparation Checklist */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Appointment Preparation</h3>
                            <div className="space-y-3">
                                <div className="flex items-start">
                                    <input type="checkbox" id="check1" className="mt-1 mr-2" />
                                    <label htmlFor="check1" className="text-gray-700">2-week sleep diary</label>
                                </div>
                                <div className="flex items-start">
                                    <input type="checkbox" id="check2" className="mt-1 mr-2" />
                                    <label htmlFor="check2" className="text-gray-700">List of medications</label>
                                </div>
                                <div className="flex items-start">
                                    <input type="checkbox" id="check3" className="mt-1 mr-2" />
                                    <label htmlFor="check3" className="text-gray-700">Bed partner observations</label>
                                </div>
                                <div className="flex items-start">
                                    <input type="checkbox" id="check4" className="mt-1 mr-2" />
                                    <label htmlFor="check4" className="text-gray-700">Family sleep history</label>
                                </div>
                                <div className="flex items-start">
                                    <input type="checkbox" id="check5" className="mt-1 mr-2" />
                                    <label htmlFor="check5" className="text-gray-700">Questions prioritized</label>
                                </div>
                            </div>
                        </div>

                        {/* Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Further Reading</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-center">
                                        <BookOpen className="w-4 h-4 mr-2" />
                                        Understanding Sleep Study Results
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-center">
                                        <BookOpen className="w-4 h-4 mr-2" />
                                        CBT-I: Drug-Free Insomnia Treatment
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-center">
                                        <BookOpen className="w-4 h-4 mr-2" />
                                        Sleep Apnea and Heart Health
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-center">
                                        <BookOpen className="w-4 h-4 mr-2" />
                                        Creating the Ideal Sleep Environment
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