"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, HeartPulse, ClipboardList, Stethoscope, Shield, AlertCircle, MessageSquareText } from "lucide-react"

export default function HealthcareQuestionsGuide() {
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

    const tabs = ["Preparation", "Testing", "Symptoms", "Treatment", "Prevention"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Essential Questions to Ask Your Healthcare Provider
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
                                Preparing for your sexual health appointments can feel overwhelming, but asking the right questions ensures you get the care you need. This comprehensive guide covers important questions about testing, contraception, symptoms, treatment options, and preventive care to empower your healthcare conversations.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80"
                                    alt="Doctor and patient having a conversation"
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
                                    <li>Prepare questions in advance to maximize your appointment time</li>
                                    <li>Ask about confidentiality policies if you're concerned about privacy</li>
                                    <li>Understand the purpose and process of recommended tests</li>
                                    <li>Discuss all treatment options, including potential side effects</li>
                                    <li>Clarify follow-up procedures and emergency contact information</li>
                                </ul>
                            </div>

                            {/* Why These Questions Matter */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <HeartPulse className="w-8 h-8 text-blue-600 mr-2" />
                                    Why These Questions Matter
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Effective communication with healthcare providers leads to better health outcomes. A <a href="#" className="text-blue-600 hover:underline">2023 study in the Journal of Patient Experience</a> found that patients who asked more questions during appointments reported:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>Higher satisfaction with care (89% vs 62%)</li>
                                    <li>Better adherence to treatment plans (76% vs 54%)</li>
                                    <li>Improved health outcomes (68% vs 45%)</li>
                                    <li>Reduced anxiety about their condition (82% vs 58%)</li>
                                </ul>

                                <div className="bg-purple-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Patient Rights Reminder</h3>
                                    <p className="text-gray-700">
                                        You have the right to ask questions and receive clear answers. If you don't understand something, ask for clarification. A good healthcare provider will welcome your questions and take time to address your concerns.
                                    </p>
                                </div>
                            </section>

                            {/* Preparation Questions */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Check className="w-8 h-8 text-blue-600 mr-2" />
                                    Preparation Questions
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Before your appointment, prepare these essential questions to ensure you cover all important aspects of your sexual health:
                                </p>

                                {/* Questions Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Questions to Ask</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Why It's Important</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Confidentiality</td>
                                                <td className="px-4 py-3">
                                                    <ul className="list-disc list-inside">
                                                        <li>How is my health information protected?</li>
                                                        <li>Who has access to my medical records?</li>
                                                    </ul>
                                                </td>
                                                <td className="px-4 py-3">Ensures privacy, especially for sensitive issues</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Medical History</td>
                                                <td className="px-4 py-3">
                                                    <ul className="list-disc list-inside">
                                                        <li>What parts of my history are most relevant?</li>
                                                        <li>Should I update my family medical history?</li>
                                                    </ul>
                                                </td>
                                                <td className="px-4 py-3">Helps provider assess risk factors</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Appointment</td>
                                                <td className="px-4 py-3">
                                                    <ul className="list-disc list-inside">
                                                        <li>What should I bring to my appointment?</li>
                                                        <li>Should I fast or prepare in any way?</li>
                                                    </ul>
                                                </td>
                                                <td className="px-4 py-3">Ensures proper preparation for tests/exams</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                {/* Preparation Tips */}
                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">1</span>
                                            Before Your Appointment
                                        </h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>Write down all your questions</li>
                                            <li>Note any symptoms with details (when they started, frequency, etc.)</li>
                                            <li>Bring a list of medications and supplements</li>
                                            <li>Consider bringing a trusted friend or family member</li>
                                        </ul>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">2</span>
                                            During Your Appointment
                                        </h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>Ask your most important questions first</li>
                                            <li>Take notes or ask if you can record the conversation</li>
                                            <li>Repeat back instructions to confirm understanding</li>
                                            <li>Ask for written materials if available</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Testing Questions */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Stethoscope className="w-8 h-8 text-blue-600 mr-2" />
                                    Testing Questions
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Understanding recommended tests helps you make informed decisions about your health. Ask these questions about any suggested tests:
                                </p>

                                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                                    <div className="grid grid-cols-3 gap-4 text-center font-medium mb-2">
                                        <div>Test Type</div>
                                        <div>Recommended Frequency</div>
                                        <div>Purpose</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 text-center mb-1">
                                        <div className="font-medium">STI Screening</div>
                                        <div>Annually or with new partners</div>
                                        <div>Detect infections early</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 text-center mb-1 bg-blue-50 p-1 rounded">
                                        <div className="font-medium">Pap Smear</div>
                                        <div>Every 3-5 years</div>
                                        <div>Cervical cancer screening</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 text-center mb-1">
                                        <div className="font-medium">HIV Test</div>
                                        <div>At least once, more if high risk</div>
                                        <div>Early detection and treatment</div>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-3">Essential Testing Questions</h3>
                                <ol className="list-decimal list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>
                                        <span className="font-semibold">What tests are you recommending and why?</span>
                                        <p className="text-gray-600 ml-6">Understand the purpose and necessity of each test</p>
                                    </li>
                                    <li>
                                        <span className="font-semibold">How accurate is this test?</span>
                                        <p className="text-gray-600 ml-6">Know the rate of false positives/negatives</p>
                                    </li>
                                    <li>
                                        <span className="font-semibold">What do I need to do to prepare?</span>
                                        <p className="text-gray-600 ml-6">Fasting, avoiding certain activities, etc.</p>
                                    </li>
                                    <li>
                                        <span className="font-semibold">When and how will I get results?</span>
                                        <p className="text-gray-600 ml-6">Clarify follow-up procedures</p>
                                    </li>
                                    <li>
                                        <span className="font-semibold">What do the results mean?</span>
                                        <p className="text-gray-600 ml-6">Ask for plain language explanations</p>
                                    </li>
                                </ol>
                            </section>

                            {/* Symptoms Questions */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <AlertCircle className="w-8 h-8 text-blue-600 mr-2" />
                                    Symptom-Related Questions
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    When discussing symptoms, these questions help ensure nothing gets overlooked and you understand the possible implications:
                                </p>

                                <div className="space-y-4">
                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">For New Symptoms</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>What could be causing these symptoms?</li>
                                            <li>Are they likely to resolve on their own?</li>
                                            <li>What warning signs should prompt immediate care?</li>
                                            <li>Could these symptoms indicate something serious?</li>
                                        </ul>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">For Chronic Symptoms</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>Why do these symptoms keep recurring?</li>
                                            <li>What lifestyle changes might help?</li>
                                            <li>Should I see a specialist?</li>
                                            <li>Are there long-term complications to watch for?</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Symptom Tracking Tip:</h3>
                                    <p className="text-gray-700">
                                        Before your appointment, keep a symptom diary noting frequency, severity, triggers, and anything that makes symptoms better or worse. This helps your provider make a more accurate assessment.
                                    </p>
                                </div>
                            </section>

                            {/* Treatment Questions */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <MessageSquareText className="w-8 h-8 text-blue-600 mr-2" />
                                    Treatment Questions
                                </h2>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Medication Questions</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>What are the benefits vs. risks of this treatment?</li>
                                            <li>How soon should I expect to see results?</li>
                                            <li>What are the potential side effects?</li>
                                            <li>Are there generic or lower-cost alternatives?</li>
                                            <li>How does this interact with my other medications?</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Procedure Questions</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>What exactly will happen during this procedure?</li>
                                            <li>What are the success rates?</li>
                                            <li>What are the risks and possible complications?</li>
                                            <li>What's the recovery process like?</li>
                                            <li>Are there alternatives to this procedure?</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-purple-50 p-4 rounded-lg">
                                    <h3 className="font-bold text-gray-900 mb-2">Informed Consent Reminder:</h3>
                                    <p className="text-gray-700">
                                        You have the right to understand all recommended treatments before consenting. Don't hesitate to ask for more information or time to consider your options if needed.
                                    </p>
                                </div>
                            </section>

                            {/* Prevention Questions */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Shield className="w-8 h-8 text-blue-600 mr-2" />
                                    Prevention Questions
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Preventive care is crucial for long-term sexual health. Discuss these aspects with your provider:
                                </p>

                                <div className="space-y-6">
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Contraception Options</h3>
                                        </div>
                                        <div className="p-4">
                                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                                <li>What method is most effective for my situation?</li>
                                                <li>What are the side effects of different options?</li>
                                                <li>How does this affect future fertility?</li>
                                                <li>Does this protect against STIs as well?</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Vaccinations</h3>
                                        </div>
                                        <div className="p-4">
                                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                                <li>Should I get the HPV vaccine?</li>
                                                <li>Are there other vaccines I should consider?</li>
                                                <li>What are the risks and benefits?</li>
                                                <li>Is there an ideal time to get vaccinated?</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Lifestyle Factors</h3>
                                        </div>
                                        <div className="p-4">
                                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                                <li>What diet/exercise changes could improve my sexual health?</li>
                                                <li>How does stress affect my condition?</li>
                                                <li>Should I limit alcohol or other substances?</li>
                                                <li>Are there supplements that might help?</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Remember that no question is too small or embarrassing when it comes to your health. Healthcare providers are trained to discuss sensitive topics professionally and without judgment.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    If you feel your concerns aren't being addressed adequately, it's completely appropriate to seek a second opinion. Your health is worth the extra effort to get clear, comprehensive answers.
                                </p>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "Being an active participant in your healthcare leads to better outcomes. Preparation and asking thoughtful questions demonstrates self-advocacy that providers respect and appreciate."
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
                                            Dr. Emily Rodriguez, MD
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
                                <h3 className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-2">HEALTH NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get personalized health guidance</h4>
                                <p className="text-gray-700 text-sm">
                                    Monthly health tips, appointment preparation guides, and expert Q&A delivered to your inbox.
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

                        {/* Common Tests Info */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Common Sexual Health Tests</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span className="font-medium">Test</span>
                                    <span className="font-medium">Frequency</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>STI Screening</span>
                                    <span className="text-blue-600">Annually</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Pap Smear</span>
                                    <span className="text-blue-600">Every 3-5 years</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>HIV Test</span>
                                    <span className="text-blue-600">1+ times</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>HPV Test</span>
                                    <span className="text-blue-600">With Pap after 30</span>
                                </div>
                            </div>
                        </div>

                        {/* Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Further Reading</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Understanding Your Patient Rights</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">How to Prepare for Medical Appointments</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Confidentiality in Adolescent Healthcare</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Questions to Ask About New Medications</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}