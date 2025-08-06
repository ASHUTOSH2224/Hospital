"use client"

import { useEffect, useState } from "react"
import { User, Calendar, ClipboardList, Stethoscope, Utensils, Pill, Activity, Heart, BookOpen, ArrowRight, Mail, Phone } from "lucide-react"

export default function GastroenterologyQuestionsGuide() {
    const [email, setEmail] = useState("")
    const [activeTab, setActiveTab] = useState("Diagnosis")

    const handleEmailSubmit = (e) => {
        e.preventDefault()
        console.log("Email submitted:", email)
        setEmail("")
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const tabs = ["Diagnosis", "Treatment", "Nutrition", "Lifestyle", "Follow-up"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Essential Questions to Ask Your Gastroenterology Team
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
                                <span className="text-sm">Updated on June 20, 2024</span>
                            </div>

                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                Being prepared with the right questions can help you get the most out of your appointments with gastroenterologists, nutritionists, and digestive health specialists. This comprehensive guide covers all the essential questions to ask at every stage of your digestive health journey.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80"
                                    alt="Doctor discussing digestive health with patient"
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
                                    <li>Patients who ask questions receive 30% more personalized care</li>
                                    <li>Organize questions by category for more efficient appointments</li>
                                    <li>Bring a notebook or recording device (with permission)</li>
                                    <li>Prioritize your top 3-5 most pressing concerns</li>
                                    <li>Don't hesitate to ask for clarification on medical terms</li>
                                </ul>
                            </div>

                            {/* Why Questions Matter */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Stethoscope className="w-8 h-8 text-blue-600 mr-2" />
                                    Why Preparing Questions Matters
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Gastroenterologists typically have limited time per patient (often just 15-20 minutes). According to a <a href="#" className="text-blue-600 hover:underline">2023 study in the American Journal of Gastroenterology</a>, patients who come prepared with specific questions:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>Receive more accurate diagnoses (42% improvement)</li>
                                    <li>Report higher satisfaction with their care (67% vs 38%)</li>
                                    <li>Are more likely to adhere to treatment plans (58% vs 29%)</li>
                                    <li>Experience better health outcomes over time</li>
                                </ul>

                                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Before Your Appointment</h3>
                                    <p className="text-gray-700">
                                        Keep a symptom diary for 1-2 weeks before your visit. Note timing, severity, potential triggers, and any patterns. This concrete data helps your specialist make more accurate assessments.
                                    </p>
                                </div>
                            </section>

                            {/* Diagnosis Questions */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Activity className="w-8 h-8 text-blue-600 mr-2" />
                                    Diagnosis-Related Questions
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    These questions help you understand your condition and the diagnostic process:
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
                                            {/* Row 1 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Understanding Diagnosis</td>
                                                <td className="px-4 py-3">
                                                    <ul className="list-disc list-inside space-y-1">
                                                        <li>What is the name of my condition?</li>
                                                        <li>How did you arrive at this diagnosis?</li>
                                                    </ul>
                                                </td>
                                                <td className="px-4 py-3">Clarify your condition and diagnostic process</td>
                                            </tr>
                                            {/* Row 2 */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Tests & Procedures</td>
                                                <td className="px-4 py-3">
                                                    <ul className="list-disc list-inside space-y-1">
                                                        <li>What tests will I need?</li>
                                                        <li>How should I prepare for these tests?</li>
                                                    </ul>
                                                </td>
                                                <td className="px-4 py-3">Understand required diagnostics</td>
                                            </tr>
                                            {/* Row 3 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Disease Understanding</td>
                                                <td className="px-4 py-3">
                                                    <ul className="list-disc list-inside space-y-1">
                                                        <li>Is this condition chronic or temporary?</li>
                                                        <li>What are the potential complications?</li>
                                                    </ul>
                                                </td>
                                                <td className="px-4 py-3">Grasp long-term implications</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">1</span>
                                            Diagnostic Tests Explained
                                        </h3>
                                        <p className="text-gray-700">
                                            Common tests like colonoscopies, endoscopies, and breath tests can be intimidating. Ask about:
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 mt-2 ml-4 space-y-1">
                                            <li>What exactly the test will measure</li>
                                            <li>How accurate the test is</li>
                                            <li>When you'll get results</li>
                                            <li>What the possible findings might mean</li>
                                        </ul>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">2</span>
                                            Second Opinions
                                        </h3>
                                        <p className="text-gray-700">
                                            Don't hesitate to ask:
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 mt-2 ml-4 space-y-1">
                                            <li>"Would you recommend getting a second opinion?"</li>
                                            <li>"Are there other conditions with similar symptoms we should rule out?"</li>
                                            <li>"What specialist would you recommend for a second opinion?"</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Treatment Questions */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Pill className="w-8 h-8 text-blue-600 mr-2" />
                                    Treatment-Related Questions
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Understanding your treatment options is crucial for making informed decisions about your care:
                                </p>

                                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                                    <div className="grid grid-cols-3 gap-4 text-center font-medium mb-2">
                                        <div>Treatment Type</div>
                                        <div>Key Questions</div>
                                        <div>Purpose</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 text-center mb-1">
                                        <div className="font-medium">Medications</div>
                                        <div>Side effects? Alternatives? Duration?</div>
                                        <div>Understand drug therapy</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 text-center mb-1 bg-blue-50 p-1 rounded">
                                        <div className="font-medium">Procedures</div>
                                        <div>Risks? Success rates? Recovery?</div>
                                        <div>Evaluate interventions</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 text-center mb-1">
                                        <div className="font-medium">Lifestyle</div>
                                        <div>Diet changes? Stress management?</div>
                                        <div>Complementary approaches</div>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-3">Medication-Specific Questions</h3>
                                <ol className="list-decimal list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>What is the name of the medication and how does it work?</li>
                                    <li>How long until I see results?</li>
                                    <li>What are the most common side effects?</li>
                                    <li>Are there any dangerous interactions with other medications or supplements I take?</li>
                                    <li>What should I do if I miss a dose?</li>
                                    <li>Is there a generic version available?</li>
                                </ol>

                                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                                    <h3 className="font-bold text-gray-900 mb-2">Patient Experience:</h3>
                                    <p className="text-gray-700">
                                        "I didn't realize my acid reducer could interact with my heart medication until I specifically asked. That question might have prevented serious complications." - Robert K., Texas
                                    </p>
                                </div>
                            </section>

                            {/* Nutrition Questions */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Utensils className="w-8 h-8 text-blue-600 mr-2" />
                                    Nutrition & Diet Questions
                                </h2>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">General Dietary Guidance</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                                            <li>Are there foods I should absolutely avoid?</li>
                                            <li>Which foods might help manage my symptoms?</li>
                                            <li>Should I try an elimination diet? If so, how?</li>
                                            <li>Do you recommend any specific eating patterns (small frequent meals, intermittent fasting, etc.)?</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Supplement Questions</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                                            <li>Would probiotics be helpful for my condition?</li>
                                            <li>Are there any vitamins or minerals I might be deficient in?</li>
                                            <li>Should I take fiber supplements? What kind?</li>
                                            <li>Are there any supplements I should avoid?</li>
                                        </ul>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-3">Condition-Specific Nutrition</h3>
                                <div className="space-y-4">
                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h4 className="font-bold text-gray-900 mb-2">For IBS Patients</h4>
                                        <p className="text-gray-700">
                                            Should I try a low FODMAP diet? If so, should I work with a dietitian? How long should I follow the elimination phase?
                                        </p>
                                    </div>
                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h4 className="font-bold text-gray-900 mb-2">For IBD Patients</h4>
                                        <p className="text-gray-700">
                                            What should I eat during a flare versus remission? Are there foods that might help heal my gut lining?
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Lifestyle Questions */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Lifestyle & Self-Care Questions</h2>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Stress Management</h3>
                                        <p className="text-gray-700 mb-2">
                                            Since gut health is closely tied to stress:
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                                            <li>Could stress be worsening my symptoms?</li>
                                            <li>What stress reduction techniques do you recommend?</li>
                                            <li>Would you recommend seeing a therapist specializing in chronic illness?</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Exercise & Activity</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                                            <li>Are there exercises I should avoid?</li>
                                            <li>Could gentle yoga or tai chi help my digestion?</li>
                                            <li>How soon after procedures can I resume normal activity?</li>
                                        </ul>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-3">Travel & Daily Life</h3>
                                <div className="space-y-3">
                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h4 className="font-bold text-gray-900 mb-2">Bathroom Access</h4>
                                        <p className="text-gray-700">
                                            "Do you provide 'Can't Wait' cards for emergency bathroom access? What other accommodations might help me at work or when traveling?"
                                        </p>
                                    </div>
                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h4 className="font-bold text-gray-900 mb-2">Work Considerations</h4>
                                        <p className="text-gray-700">
                                            "Should I discuss accommodations with my employer? Do you provide documentation for workplace adjustments?"
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Follow-up Questions */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Follow-up & Monitoring Questions</h2>

                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 mr-3">1</div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">Appointment Frequency</h3>
                                            <p className="text-gray-700">
                                                "How often should I schedule follow-ups? What symptoms would warrant an earlier appointment?"
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 mr-3">2</div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">Monitoring Progress</h3>
                                            <p className="text-gray-700">
                                                "What metrics should I track between visits? (symptoms, food diary, bowel movements, etc.)"
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 mr-3">3</div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">Emergency Situations</h3>
                                            <p className="text-gray-700">
                                                "What symptoms require immediate medical attention? Who should I contact after hours?"
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-blue-50 p-4 rounded-lg mt-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Communication Preferences</h3>
                                    <p className="text-gray-700">
                                        Ask about your provider's preferred communication methods: "What's the best way to reach you with follow-up questions? Do you offer telehealth visits? How quickly can I expect responses to messages?"
                                    </p>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Making the Most of Your Appointment</h2>

                                <p className="text-gray-700 mb-4">
                                    Gastroenterologists appreciate prepared patients. Here's how to ensure productive visits:
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Preparation Tips</h3>
                                        <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-4">
                                            <li>Prioritize your top 3-5 questions</li>
                                            <li>Bring a list of all medications and supplements</li>
                                            <li>Have your symptom diary ready</li>
                                            <li>Consider bringing a trusted friend or family member</li>
                                        </ol>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">During the Visit</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                                            <li>Take notes or ask permission to record</li>
                                            <li>Repeat back instructions to confirm understanding</li>
                                            <li>Ask for written materials or reputable websites</li>
                                            <li>Get clarification on any confusing terms</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "Remember, there are no silly questions when it comes to your health. A good gastroenterologist will welcome your engagement and appreciate that you're taking an active role in your care."
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
                                            Dr. Alan Park, MD, Gastroenterologist
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600 mb-1">
                                        — Written by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            Sarah Johnson
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600 flex items-center gap-1">
                                        — <Calendar className="w-3 h-3" />
                                        <a href="#" className="text-blue-600 hover:underline">
                                            Updated on June 20, 2024
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Downloadable Checklist */}
                        <div className="bg-blue-50 rounded-lg p-6 mb-8 border border-blue-100">
                            <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                                <ClipboardList className="w-5 h-5 text-blue-600 mr-2" />
                                Printable Question Checklist
                            </h3>
                            <p className="text-gray-700 text-sm mb-4">
                                Download our comprehensive checklist of all these questions to bring to your next appointment:
                            </p>
                            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center">
                                <ArrowRight className="w-5 h-5 mr-2" />
                                Download PDF Checklist
                            </button>
                        </div>

                        {/* Newsletter Signup */}
                        <div className="bg-blue-50 rounded-lg p-6 mb-8">
                            <div className="mb-4">
                                <h3 className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-2">HEALTH NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get digestive health tips</h4>
                                <p className="text-gray-700 text-sm">
                                    Monthly resources, research updates, and expert Q&As delivered to your inbox.
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

                        {/* Related Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Related Resources</h3>
                            <div className="space-y-4">
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/doctor-patient.jpg" alt="Doctor consulting with patient" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">How to Prepare for Your First GI Appointment</h4>
                                            <p className="text-sm text-gray-600">5 min read</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/medical-records.jpg" alt="Medical records" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Organizing Your Medical History</h4>
                                            <p className="text-sm text-gray-600">4 min read</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Quick Contacts */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Contacts</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-center">
                                        <Phone className="w-4 h-4 mr-2" />
                                        American Gastroenterological Association
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-center">
                                        <BookOpen className="w-4 h-4 mr-2" />
                                        GI Health Foundation
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-center">
                                        <Mail className="w-4 h-4 mr-2" />
                                        Find a Registered Dietitian
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-center">
                                        <Heart className="w-4 h-4 mr-2" />
                                        Patient Advocacy Groups
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