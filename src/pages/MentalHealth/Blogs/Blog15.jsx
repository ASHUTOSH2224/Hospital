"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, HeartPulse, Brain, Stethoscope, ShieldAlert, BookOpen, Star, ClipboardList } from "lucide-react"

export default function MentalHealthCheckupsGuide() {
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

    const tabs = ["Overview", "Screening Types", "Benefits", "Self-Assessment"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                The Importance of Regular Mental Health Check-ups
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
                                Mental health check-ups are as crucial as physical exams, yet often overlooked. Regular screenings can detect early signs of psychological distress, prevent crises, and significantly improve treatment outcomes. This comprehensive guide explores why mental health assessments should be part of your routine healthcare.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=732&h=549&q=80"
                                    alt="Mental health concept with person holding brain model"
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
                                    <li>1 in 5 adults experiences mental illness each year, yet many go undiagnosed</li>
                                    <li>Early detection through screenings can improve treatment success by 70%</li>
                                    <li>Mental health check-ups can prevent 40% of workplace productivity loss</li>
                                    <li>Annual mental health assessments are now covered by most insurance plans</li>
                                    <li>Digital screening tools make mental health checks more accessible than ever</li>
                                </ul>
                            </div>

                            {/* Why Mental Health Check-ups Matter */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Brain className="w-8 h-8 text-blue-600 mr-2" />
                                    Why Mental Health Check-ups Matter
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Mental health screenings are preventive measures that identify potential psychological issues before they become severe. According to the <a href="#" className="text-blue-600 hover:underline">World Health Organization</a>, mental disorders account for 30% of global non-fatal disease burden, with depression being the leading cause worldwide.
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-sm">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                                            <HeartPulse className="w-6 h-6 text-blue-500 mr-2" />
                                            Physical-Mental Connection
                                        </h3>
                                        <p className="text-gray-700">
                                            Chronic physical conditions like diabetes and heart disease are strongly linked to mental health. Patients with depression have a 40% higher risk of developing cardiovascular diseases.
                                        </p>
                                    </div>
                                    <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-sm">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                                            <ShieldAlert className="w-6 h-6 text-blue-500 mr-2" />
                                            Early Intervention
                                        </h3>
                                        <p className="text-gray-700">
                                            The average delay between symptom onset and treatment is 11 years. Regular screenings can reduce this gap, with early treatment improving outcomes by 2-3 times.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">The Screening Gap</h3>
                                    <p className="text-gray-700 mb-2">
                                        While 76% of adults receive annual physical exams, only 23% undergo routine mental health assessments, despite mental health conditions being equally prevalent as physical ones.
                                    </p>
                                    <p className="text-gray-700">
                                        This disparity persists even though mental health screenings take just 5-10 minutes and can be conducted by primary care physicians.
                                    </p>
                                </div>
                            </section>

                            {/* Types of Mental Health Screenings */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <ClipboardList className="w-8 h-8 text-blue-600 mr-2" />
                                    Types of Mental Health Screenings
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Mental health assessments range from brief questionnaires to comprehensive evaluations. Here are the most common types used by healthcare professionals:
                                </p>

                                {/* Screenings Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Screening</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Conditions Detected</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Accuracy</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 font-medium text-gray-900">PHQ-9</td>
                                                <td className="px-4 py-3">3 min</td>
                                                <td className="px-4 py-3">Depression</td>
                                                <td className="px-4 py-3">88%</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 font-medium text-gray-900">GAD-7</td>
                                                <td className="px-4 py-3">2 min</td>
                                                <td className="px-4 py-3">Anxiety</td>
                                                <td className="px-4 py-3">82%</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 font-medium text-gray-900">MMSE</td>
                                                <td className="px-4 py-3">10 min</td>
                                                <td className="px-4 py-3">Cognitive Impairment</td>
                                                <td className="px-4 py-3">91%</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 font-medium text-gray-900">AUDIT</td>
                                                <td className="px-4 py-3">5 min</td>
                                                <td className="px-4 py-3">Alcohol Use Disorder</td>
                                                <td className="px-4 py-3">79%</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">1</span>
                                            PHQ-9 - Depression Screening
                                        </h3>
                                        <p className="text-gray-700">
                                            The Patient Health Questionnaire-9 is the gold standard for depression screening. It assesses symptoms over the past 2 weeks with 9 simple questions. Scores ≥10 indicate probable depression with 88% sensitivity.
                                        </p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">2</span>
                                            GAD-7 - Anxiety Screening
                                        </h3>
                                        <p className="text-gray-700">
                                            The Generalized Anxiety Disorder-7 scale identifies anxiety disorders with 89% specificity. It's particularly effective for detecting panic disorder, social anxiety, and PTSD when used with follow-up questions.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Benefits of Regular Check-ups */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Check className="w-8 h-8 text-blue-600 mr-2" />
                                    Benefits of Regular Mental Health Check-ups
                                </h2>

                                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center font-medium mb-2">
                                        <div>Benefit</div>
                                        <div>Impact</div>
                                        <div>Timeframe</div>
                                        <div>Evidence Level</div>
                                    </div>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mb-1 border-b border-gray-200 pb-2">
                                        <div className="font-medium">Early Detection</div>
                                        <div>3-5x better outcomes</div>
                                        <div>First 6 months</div>
                                        <div>Strong (A)</div>
                                    </div>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mb-1 border-b border-gray-200 pb-2">
                                        <div className="font-medium">Work Productivity</div>
                                        <div>40% improvement</div>
                                        <div>3-12 months</div>
                                        <div>Moderate (B)</div>
                                    </div>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mb-1 border-b border-gray-200 pb-2">
                                        <div className="font-medium">Healthcare Costs</div>
                                        <div>23% reduction</div>
                                        <div>1-2 years</div>
                                        <div>Strong (A)</div>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Workplace Impact</h3>
                                <p className="text-gray-700 mb-4">
                                    Mental health issues cost the global economy $1 trillion annually in lost productivity. Companies implementing regular mental health screenings report:
                                </p>
                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>30% reduction in absenteeism</li>
                                    <li>25% decrease in turnover rates</li>
                                    <li>40% improvement in presenteeism (working while ill)</li>
                                    <li>3:1 return on investment for mental health programs</li>
                                </ul>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Case Study:</h3>
                                    <p className="text-gray-700">
                                        A Fortune 500 company implemented mandatory mental health screenings for all employees. Within 18 months, disability claims dropped by 32%, and healthcare costs decreased by $2.4 million annually.
                                    </p>
                                </div>
                            </section>

                            {/* When to Get Screened */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">When to Get Screened</h2>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Recommended Frequency</h3>
                                        <ol className="list-decimal list-inside text-gray-700 space-y-2">
                                            <li><strong>Annual screening:</strong> All adults (like physical exams)</li>
                                            <li><strong>Quarterly screening:</strong> Those with risk factors (family history, chronic illness)</li>
                                            <li><strong>Event-based screening:</strong> After major life changes (job loss, bereavement)</li>
                                            <li><strong>As needed:</strong> When experiencing symptoms lasting 2+ weeks</li>
                                        </ol>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Warning Signs</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Persistent sadness or irritability (2+ weeks)</li>
                                            <li>Difficulty concentrating or making decisions</li>
                                            <li>Significant changes in sleep or appetite</li>
                                            <li>Withdrawal from social activities</li>
                                            <li>Unexplained physical pains</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <h3 className="font-bold text-gray-900 mb-2">Special Populations</h3>
                                    <p className="text-gray-700">
                                        Adolescents, new mothers, seniors, and chronic illness patients should consider more frequent screenings (every 6 months). Postpartum depression affects 1 in 7 women, while 20% of seniors experience depression often mistaken for normal aging.
                                    </p>
                                </div>
                            </section>

                            {/* Self-Assessment Tools */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Self-Assessment Tools</h2>

                                <p className="text-gray-700 mb-4">
                                    While professional screenings are ideal, validated self-assessment tools can provide initial insights. These are not diagnostic but can indicate when to seek professional help.
                                </p>

                                <div className="space-y-6">
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">PHQ-9 (Depression)</h3>
                                        </div>
                                        <div className="p-4">
                                            <p className="text-gray-700 mb-3">Over the last 2 weeks, how often have you been bothered by:</p>
                                            <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
                                                <li>Little interest or pleasure in doing things</li>
                                                <li>Feeling down, depressed, or hopeless</li>
                                                <li>Trouble falling/staying asleep, or sleeping too much</li>
                                            </ul>
                                            <p className="text-sm text-gray-600">Scoring: 0-4 (None), 5-9 (Mild), 10-14 (Moderate), 15-19 (Moderately Severe), 20-27 (Severe)</p>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">GAD-7 (Anxiety)</h3>
                                        </div>
                                        <div className="p-4">
                                            <p className="text-gray-700 mb-3">Over the last 2 weeks, how often have you been bothered by:</p>
                                            <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
                                                <li>Feeling nervous, anxious, or on edge</li>
                                                <li>Not being able to stop or control worrying</li>
                                                <li>Becoming easily annoyed or irritable</li>
                                            </ul>
                                            <p className="text-sm text-gray-600">Scoring: 0-4 (None), 5-9 (Mild), 10-14 (Moderate), 15-21 (Severe)</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Overcoming Barriers */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Overcoming Common Barriers</h2>

                                <div className="space-y-4">
                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">Stigma Concerns</h3>
                                        <p className="text-gray-700 mb-2">
                                            Many avoid screenings due to fear of judgment. However, mental health check-ups are confidential and protected by HIPAA laws.
                                        </p>
                                        <p className="text-gray-700">
                                            <span className="font-semibold">Solution:</span> Start with anonymous online screenings to build comfort.
                                        </p>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">Time Constraints</h3>
                                        <p className="text-gray-700 mb-2">
                                            The average primary care visit lasts 15 minutes, leaving little time for mental health discussions.
                                        </p>
                                        <p className="text-gray-700">
                                            <span className="font-semibold">Solution:</span> Complete screening questionnaires before appointments or use digital tools.
                                        </p>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">Cost Concerns</h3>
                                        <p className="text-gray-700 mb-2">
                                            Many assume mental health services are unaffordable.
                                        </p>
                                        <p className="text-gray-700">
                                            <span className="font-semibold">Solution:</span> The Affordable Care Act requires most insurance plans to cover mental health screenings without copays.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Regular mental health check-ups should be as routine as dental cleanings or vision tests. They provide objective data about your psychological well-being, help track changes over time, and most importantly, can connect you with support before challenges become crises.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    Mental health exists on a spectrum, and screenings help identify where you fall at any given time. Just as blood pressure fluctuates, so does mental health - regular monitoring ensures you stay in your optimal range.
                                </p>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "Mental health is not a destination, but a process. It's about how you drive, not where you're going." - Noam Shpancer, PhD
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
                                            Dr. Emily Carter, PsyD
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

                        {/* Quick Self-Assessment */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Self-Assessment</h3>
                            <div className="space-y-3">
                                <div className="flex items-start">
                                    <input type="checkbox" id="assessment1" className="mt-1 mr-2" />
                                    <label htmlFor="assessment1" className="text-gray-700">Difficulty concentrating</label>
                                </div>
                                <div className="flex items-start">
                                    <input type="checkbox" id="assessment2" className="mt-1 mr-2" />
                                    <label htmlFor="assessment2" className="text-gray-700">Sleep disturbances</label>
                                </div>
                                <div className="flex items-start">
                                    <input type="checkbox" id="assessment3" className="mt-1 mr-2" />
                                    <label htmlFor="assessment3" className="text-gray-700">Loss of interest in activities</label>
                                </div>
                                <div className="flex items-start">
                                    <input type="checkbox" id="assessment4" className="mt-1 mr-2" />
                                    <label htmlFor="assessment4" className="text-gray-700">Persistent worry</label>
                                </div>
                                <button className="w-full mt-3 bg-blue-50 text-blue-600 font-medium py-2 px-4 rounded-lg hover:bg-blue-100 transition-colors">
                                    Evaluate Responses
                                </button>
                            </div>
                        </div>

                        {/* Crisis Resources */}
                        <div className="bg-red-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Crisis Resources</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-red-600 hover:underline font-medium">National Suicide Prevention Lifeline</a>
                                    <p className="text-sm text-gray-600">Call 988 (US)</p>
                                </li>
                                <li>
                                    <a href="#" className="text-red-600 hover:underline font-medium">Crisis Text Line</a>
                                    <p className="text-sm text-gray-600">Text HOME to 741741 (US)</p>
                                </li>
                                <li>
                                    <a href="#" className="text-red-600 hover:underline font-medium">International Association for Suicide Prevention</a>
                                    <p className="text-sm text-gray-600">Global resources</p>
                                </li>
                            </ul>
                        </div>

                        {/* Further Reading */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Further Reading</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">The Complete Guide to Mental Health Screening</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Digital Mental Health Tools Review</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Workplace Mental Health Programs</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Mental Health First Aid Training</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}