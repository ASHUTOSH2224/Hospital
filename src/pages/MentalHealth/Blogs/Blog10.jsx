"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, MessageSquare, Heart, ClipboardList, Bookmark, Star, ChevronRight } from "lucide-react"

export default function MentalHealthQuestionsGuide() {
    const [email, setEmail] = useState("")
    const [activeTab, setActiveTab] = useState("Psychiatrist")
    const [bookmarked, setBookmarked] = useState(false)

    const handleEmailSubmit = (e) => {
        e.preventDefault()
        console.log("Email submitted:", email)
        setEmail("")
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const tabs = ["Psychiatrist", "Psychologist", "Therapist", "Support Groups"]

    const toggleBookmark = () => {
        setBookmarked(!bookmarked)
    }

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                        Essential Questions to Ask Your Mental Health Team
                                    </h1>
                                    <p className="text-lg text-gray-600 mb-2">
                                        Prepare for appointments with your psychiatrist, psychologist, and therapists with this comprehensive guide
                                    </p>
                                </div>
                                <button 
                                    onClick={toggleBookmark}
                                    className={`p-2 rounded-full ${bookmarked ? 'text-yellow-500' : 'text-gray-400 hover:text-gray-600'}`}
                                >
                                    <Bookmark className="w-6 h-6" fill={bookmarked ? "currentColor" : "none"} />
                                </button>
                            </div>

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
                                <span className="mx-2">•</span>
                                <span className="text-sm">6 min read</span>
                            </div>

                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                Being prepared with the right questions can significantly improve your mental health care experience. This guide provides essential questions to ask your psychiatrist, psychologist, therapist, and support groups to ensure you get the most out of your treatment. Effective communication with your mental health team is crucial for proper diagnosis, treatment planning, and ongoing care.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80"
                                    alt="Therapist talking with patient"
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
                                    <li>Asking questions helps you become an active participant in your care</li>
                                    <li>Different professionals (psychiatrists, psychologists, therapists) require different questions</li>
                                    <li>Document your questions and their answers for future reference</li>
                                    <li>Don't hesitate to ask for clarification if you don't understand something</li>
                                    <li>Prepare questions before each appointment to maximize your time</li>
                                </ul>
                            </div>

                            {/* Why Questions Matter */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <MessageSquare className="w-8 h-8 text-blue-600 mr-2" />
                                    Why Asking Questions Matters
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Research shows that patients who actively participate in their mental health care have better outcomes. A <a href="#" className="text-blue-600 hover:underline">2022 study in the Journal of Clinical Psychiatry</a> found that patients who asked questions during appointments:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>Were 42% more likely to adhere to treatment plans</li>
                                    <li>Reported 35% higher satisfaction with their care</li>
                                    <li>Experienced faster symptom improvement (average of 2 weeks sooner)</li>
                                    <li>Had better long-term management of their conditions</li>
                                </ul>

                                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Preparing for Your Appointment</h3>
                                    <p className="text-gray-700 mb-2">
                                        Before your appointment, take time to:
                                    </p>
                                    <ol className="list-decimal list-inside text-gray-700 space-y-1 ml-4">
                                        <li>Write down your most pressing concerns</li>
                                        <li>Note any changes in symptoms since your last visit</li>
                                        <li>Prepare 3-5 priority questions</li>
                                        <li>Bring a notebook or use your phone to record answers</li>
                                    </ol>
                                </div>
                            </section>

                            {/* Questions for Psychiatrist */}
                            <section className="mb-12" id="psychiatrist">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <User className="w-8 h-8 text-blue-600 mr-2" />
                                    Questions for Your Psychiatrist
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Psychiatrists are medical doctors who specialize in mental health and can prescribe medication. These questions will help you understand your diagnosis and treatment plan.
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
                                            {/* Diagnosis */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Diagnosis</td>
                                                <td className="px-4 py-3">
                                                    <ul className="list-disc list-inside space-y-1">
                                                        <li>What is my exact diagnosis?</li>
                                                        <li>How did you arrive at this conclusion?</li>
                                                        <li>Are there any tests that could confirm this?</li>
                                                    </ul>
                                                </td>
                                                <td className="px-4 py-3">Ensures you understand your condition and the diagnostic process</td>
                                            </tr>
                                            {/* Medication */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Medication</td>
                                                <td className="px-4 py-3">
                                                    <ul className="list-disc list-inside space-y-1">
                                                        <li>What are the expected benefits of this medication?</li>
                                                        <li>What are the potential side effects?</li>
                                                        <li>How long before I see results?</li>
                                                    </ul>
                                                </td>
                                                <td className="px-4 py-3">Helps you make informed decisions about medication</td>
                                            </tr>
                                            {/* Treatment Plan */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Treatment Plan</td>
                                                <td className="px-4 py-3">
                                                    <ul className="list-disc list-inside space-y-1">
                                                        <li>What are our treatment goals?</li>
                                                        <li>How will we measure progress?</li>
                                                        <li>What are the alternatives if this doesn't work?</li>
                                                    </ul>
                                                </td>
                                                <td className="px-4 py-3">Provides clarity on expectations and next steps</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                {/* Important Notes */}
                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">!</span>
                                            Medication Questions
                                        </h3>
                                        <p className="text-gray-700">
                                            Always ask about potential interactions with other medications, supplements, or foods. Request written information about any prescribed medications.
                                        </p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">!</span>
                                            Emergency Situations
                                        </h3>
                                        <p className="text-gray-700">
                                            Ask: "What should I do if I experience severe side effects?" and "Who should I contact after hours in case of emergency?"
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Questions for Psychologist */}
                            <section className="mb-12" id="psychologist">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <ClipboardList className="w-8 h-8 text-blue-600 mr-2" />
                                    Questions for Your Psychologist
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Psychologists focus on psychotherapy and psychological testing. These questions will help you get the most from your therapy sessions.
                                </p>

                                {/* Therapy Questions */}
                                <div className="space-y-6">
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Therapy Approach</h3>
                                        </div>
                                        <div className="p-4">
                                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                                <li>What type of therapy do you practice? (CBT, DBT, psychodynamic, etc.)</li>
                                                <li>How does this approach help with my specific issues?</li>
                                                <li>What will a typical session look like?</li>
                                                <li>How do you measure progress in therapy?</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Practical Considerations</h3>
                                        </div>
                                        <div className="p-4">
                                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                                <li>How often should we meet?</li>
                                                <li>How long does treatment typically last for someone with my condition?</li>
                                                <li>What should I do between sessions to support my progress?</li>
                                                <li>How do you handle crises between sessions?</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Therapy Expectations */}
                                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Therapy Expectations</h3>
                                    <p className="text-gray-700">
                                        It's completely normal to feel worse before feeling better when starting therapy. Ask your psychologist: "What are common reactions to this type of therapy?" and "How will we know if therapy isn't working?"
                                    </p>
                                </div>
                            </section>

                            {/* Questions for Therapists */}
                            <section className="mb-12" id="therapist">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Heart className="w-8 h-8 text-blue-600 mr-2" />
                                    Questions for Your Therapist
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Therapists (LCSWs, LMFTs, etc.) provide counseling and psychotherapy. These questions will help establish a strong therapeutic relationship.
                                </p>

                                {/* Therapist Comparison */}
                                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                                    <div className="grid md:grid-cols-3 gap-4 text-center font-medium mb-2">
                                        <div>Topic</div>
                                        <div>Early Therapy</div>
                                        <div>Ongoing Therapy</div>
                                    </div>
                                    <div className="grid md:grid-cols-3 gap-4 text-center mb-1 border-b border-gray-200 pb-2">
                                        <div className="font-medium text-left">Focus</div>
                                        <div className="text-left">History, diagnosis, treatment plan</div>
                                        <div className="text-left">Progress, challenges, adjustments</div>
                                    </div>
                                    <div className="grid md:grid-cols-3 gap-4 text-center mb-1 border-b border-gray-200 pb-2">
                                        <div className="font-medium text-left">Questions</div>
                                        <div className="text-left">"What can I expect from therapy?"</div>
                                        <div className="text-left">"How do you think I'm progressing?"</div>
                                    </div>
                                    <div className="grid md:grid-cols-3 gap-4 text-center mb-1 border-b border-gray-200 pb-2">
                                        <div className="font-medium text-left">Frequency</div>
                                        <div className="text-left">Weekly or bi-weekly</div>
                                        <div className="text-left">Monthly or as needed</div>
                                    </div>
                                </div>

                                {/* Important Therapy Questions */}
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Essential Therapy Questions</h3>
                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900 mb-3">About the Therapist</h4>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>What is your experience treating my specific issues?</li>
                                            <li>What is your approach to confidentiality?</li>
                                            <li>How do you handle cultural differences in therapy?</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900 mb-3">About Your Treatment</h4>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>What are realistic goals for my therapy?</li>
                                            <li>How will we know when therapy is complete?</li>
                                            <li>What should I do if I feel we're not a good fit?</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Support Group Questions */}
                            <section className="mb-12" id="support-groups">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Questions for Mental Health Support Groups</h2>

                                <p className="text-gray-700 mb-6">
                                    Support groups can be valuable additions to professional treatment. These questions will help you find the right group and participate effectively.
                                </p>

                                {/* Support Group Checklist */}
                                <div className="border border-gray-200 rounded-lg p-6 mb-8">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Evaluating a Support Group</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-start">
                                            <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-medium text-gray-900">Group Focus</h4>
                                                <p className="text-gray-700">Is the group focused on a specific condition or is it more general?</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-medium text-gray-900">Facilitation</h4>
                                                <p className="text-gray-700">Is the group peer-led or professionally facilitated?</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-medium text-gray-900">Confidentiality</h4>
                                                <p className="text-gray-700">What are the group's rules about confidentiality?</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-medium text-gray-900">Participation</h4>
                                                <p className="text-gray-700">Am I expected to share, or can I just listen?</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Support Group Benefits */}
                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Benefits of Support Groups</h3>
                                    <p className="text-gray-700 mb-3">
                                        Research shows that participation in support groups can lead to:
                                    </p>
                                    <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                                        <li>Reduced feelings of isolation (58% of participants report this benefit)</li>
                                        <li>Improved coping skills (42% report better coping mechanisms)</li>
                                        <li>Increased treatment adherence (when combined with professional care)</li>
                                        <li>Enhanced understanding of one's condition</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Remember that your mental health team works for you. Don't hesitate to ask questions until you fully understand your condition and treatment options. Good mental health professionals will welcome your questions and appreciate your engagement in the process.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    Keep a dedicated notebook or digital document for your mental health questions and the answers you receive. This will help you track your progress and have important information readily available.
                                </p>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "The single most important question you can ask is: 'What can I do to help myself between sessions?' This shows your commitment to recovery and often yields the most practical advice."
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

                        {/* Quick Navigation */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Navigation</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#psychiatrist" className="text-blue-600 hover:underline flex items-center">
                                        <ChevronRight className="w-4 h-4 mr-1" />
                                        Psychiatrist Questions
                                    </a>
                                </li>
                                <li>
                                    <a href="#psychologist" className="text-blue-600 hover:underline flex items-center">
                                        <ChevronRight className="w-4 h-4 mr-1" />
                                        Psychologist Questions
                                    </a>
                                </li>
                                <li>
                                    <a href="#therapist" className="text-blue-600 hover:underline flex items-center">
                                        <ChevronRight className="w-4 h-4 mr-1" />
                                        Therapist Questions
                                    </a>
                                </li>
                                <li>
                                    <a href="#support-groups" className="text-blue-600 hover:underline flex items-center">
                                        <ChevronRight className="w-4 h-4 mr-1" />
                                        Support Group Questions
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Newsletter Signup */}
                        <div className="bg-blue-50 rounded-lg p-6 mb-8">
                            <div className="mb-4">
                                <h3 className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-2">MENTAL HEALTH NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get mental health tips and resources</h4>
                                <p className="text-gray-700 text-sm">
                                    Monthly guides, therapist-approved strategies, and community support delivered to your inbox.
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
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Helpful Resources</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Finding Affordable Mental Health Care</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Understanding Your Insurance Coverage</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Mental Health Crisis Hotlines</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Therapist Directory</a>
                                </li>
                            </ul>
                        </div>

                        {/* Related Articles */}
                        <div className="bg-gray-50 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Related Articles</h3>
                            <div className="space-y-4">
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80" alt="Mental health" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">How to Prepare for Your First Therapy Session</h4>
                                            <p className="text-sm text-gray-600">5 min read</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80" alt="Medication" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Understanding Psychiatric Medications</h4>
                                            <p className="text-sm text-gray-600">8 min read</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}