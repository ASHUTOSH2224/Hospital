"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, Users, Eye, HeartPulse, Glasses, ClipboardList, Shield, BookOpen, Mail } from "lucide-react"

export default function EyeCareTeamGuide() {
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

    const tabs = ["Roles", "Specialties", "Choosing", "Communication"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Understanding Your Eye Care Team: Who's Who in Vision Health
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
                                Your vision health is managed by a team of professionals, each with specialized training and roles. Understanding who does what in your eye care team helps you receive the best possible care and know who to turn to for specific vision concerns.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                                    alt="Eye care professionals working together"
                                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                                    style={{ maxHeight: '500px' }}
                                />
                            </div>

                            {/* Key Takeaways */}
                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
                                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                    <Check className="w-5 h-5 text-blue-600 mr-2" />
                                    Key Takeaways
                                </h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>Optometrists are your primary eye care providers for routine exams and vision correction</li>
                                    <li>Ophthalmologists are medical doctors who can perform eye surgeries and treat complex conditions</li>
                                    <li>Opticians specialize in fitting and dispensing glasses and contact lenses</li>
                                    <li>Other specialists like retinal specialists or pediatric ophthalmologists handle specific conditions</li>
                                    <li>Effective communication with your team ensures you receive personalized care</li>
                                </ul>
                            </div>

                            {/* Core Members Section */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Users className="w-8 h-8 text-blue-600 mr-2" />
                                    Core Members of Your Eye Care Team
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    A complete eye care team typically includes several professionals working together to maintain and improve your vision. According to the <a href="#" className="text-blue-600 hover:underline">American Academy of Ophthalmology</a>, coordinated care between these professionals leads to better outcomes for patients.
                                </p>

                                {/* Professionals Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Professional</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Education</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Primary Role</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Can Prescribe</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Can Perform Surgery</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            {/* Optometrist */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Optometrist (OD)</td>
                                                <td className="px-4 py-3 whitespace-nowrap">4-year doctoral program</td>
                                                <td className="px-4 py-3">Primary eye care, vision tests, detect eye abnormalities</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Yes (glasses, contacts, some medications)</td>
                                                <td className="px-4 py-3 whitespace-nowrap">No (in most states)</td>
                                            </tr>
                                            {/* Ophthalmologist */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Ophthalmologist (MD/DO)</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Medical school + residency (4+ years)</td>
                                                <td className="px-4 py-3">Medical and surgical eye care, treat complex conditions</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Yes (all medications)</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Yes</td>
                                            </tr>
                                            {/* Optician */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Optician</td>
                                                <td className="px-4 py-3 whitespace-nowrap">1-2 year program (varies)</td>
                                                <td className="px-4 py-3">Fit and dispense glasses/contacts</td>
                                                <td className="px-4 py-3 whitespace-nowrap">No</td>
                                                <td className="px-4 py-3 whitespace-nowrap">No</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <Eye className="w-6 h-6 text-blue-600 mr-2" />
                                            Optometrist - Your Primary Eye Doctor
                                        </h3>
                                        <p className="text-gray-700">
                                            Optometrists complete a Doctor of Optometry (OD) degree after college. They perform comprehensive eye exams, prescribe corrective lenses, detect eye diseases, and manage certain eye conditions with medications. Most people see their optometrist annually for routine check-ups.
                                        </p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <HeartPulse className="w-6 h-6 text-blue-600 mr-2" />
                                            Ophthalmologist - The Medical Specialist
                                        </h3>
                                        <p className="text-gray-700">
                                            Ophthalmologists are medical doctors (MD or DO) who complete medical school plus a residency in ophthalmology. They can perform eye surgeries, treat complex eye diseases, and manage systemic conditions affecting vision like diabetes. Many specialize further in areas like retina, glaucoma, or pediatrics.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Specialized Team Members */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Specialized Team Members</h2>

                                <p className="text-gray-700 mb-6">
                                    Beyond the core team, you might encounter these specialists depending on your needs:
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div className="border border-gray-200 rounded-lg p-4">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                                            <Shield className="w-5 h-5 text-blue-600 mr-2" />
                                            Pediatric Ophthalmologist
                                        </h3>
                                        <p className="text-gray-700 mb-2">
                                            Specializes in children's eye care, treating conditions like strabismus (crossed eyes), amblyopia (lazy eye), and congenital eye disorders.
                                        </p>
                                        <p className="text-gray-700">
                                            <span className="font-semibold">When to see one:</span> If your child fails vision screening, has misaligned eyes, or shows developmental delays in vision.
                                        </p>
                                    </div>
                                    <div className="border border-gray-200 rounded-lg p-4">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                                            <Eye className="w-5 h-5 text-blue-600 mr-2" />
                                            Retina Specialist
                                        </h3>
                                        <p className="text-gray-700 mb-2">
                                            Focuses on diseases of the retina and vitreous, including diabetic retinopathy, macular degeneration, and retinal detachments.
                                        </p>
                                        <p className="text-gray-700">
                                            <span className="font-semibold">When to see one:</span> For conditions affecting the back of the eye, especially if you have diabetes or notice sudden vision changes.
                                        </p>
                                    </div>
                                    <div className="border border-gray-200 rounded-lg p-4">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                                            <Glasses className="w-5 h-5 text-blue-600 mr-2" />
                                            Low Vision Specialist
                                        </h3>
                                        <p className="text-gray-700 mb-2">
                                            Helps patients with significant vision loss maximize their remaining vision through special devices and training.
                                        </p>
                                        <p className="text-gray-700">
                                            <span className="font-semibold">When to see one:</span> If standard glasses or contacts don't provide adequate vision for daily activities.
                                        </p>
                                    </div>
                                    <div className="border border-gray-200 rounded-lg p-4">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                                            <ClipboardList className="w-5 h-5 text-blue-600 mr-2" />
                                            Orthoptist
                                        </h3>
                                        <p className="text-gray-700 mb-2">
                                            Specializes in diagnosing and managing disorders of eye movements and binocular vision, often working with pediatric patients.
                                        </p>
                                        <p className="text-gray-700">
                                            <span className="font-semibold">When to see one:</span> For evaluation and non-surgical treatment of eye alignment disorders.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Choosing Your Team */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Choose the Right Eye Care Professionals</h2>

                                <p className="text-gray-700 mb-4">
                                    Building the right eye care team depends on your individual needs. Here's a step-by-step guide:
                                </p>

                                <ol className="list-decimal list-inside text-gray-700 mb-6 ml-4 space-y-3">
                                    <li>
                                        <span className="font-semibold">Start with a comprehensive optometrist:</span> For most people, a general optometrist should be your first point of contact for routine care.
                                    </li>
                                    <li>
                                        <span className="font-semibold">Consider your specific needs:</span> If you have diabetes, a family history of glaucoma, or other risk factors, you may need specialists on your team.
                                    </li>
                                    <li>
                                        <span className="font-semibold">Check credentials:</span> Verify licenses and board certifications through your state's medical board website.
                                    </li>
                                    <li>
                                        <span className="font-semibold">Evaluate communication style:</span> You should feel comfortable asking questions and understand the explanations provided.
                                    </li>
                                    <li>
                                        <span className="font-semibold">Consider logistics:</span> Location, office hours, insurance acceptance, and emergency coverage availability.
                                    </li>
                                </ol>

                                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Red Flags to Watch For</h3>
                                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                                        <li>Pressure to purchase unnecessary eyewear or treatments</li>
                                        <li>Difficulty getting answers to your questions</li>
                                        <li>Outdated equipment in the office</li>
                                        <li>No discussion of your medical history or medications</li>
                                        <li>Rushed examinations that don't address your concerns</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Communication Tips */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Communicating Effectively With Your Eye Care Team</h2>

                                <p className="text-gray-700 mb-6">
                                    Good communication ensures you get the most from your eye care visits. Follow these evidence-based strategies:
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Before Your Appointment</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Prepare a list of current medications and supplements</li>
                                            <li>Note any vision changes or eye problems you've experienced</li>
                                            <li>Write down specific questions you want answered</li>
                                            <li>Bring your current glasses/contacts and prescription</li>
                                            <li>Know your family's eye health history</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">During Your Appointment</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Describe symptoms clearly (when they started, frequency, severity)</li>
                                            <li>Ask for clarification if you don't understand medical terms</li>
                                            <li>Repeat back instructions to confirm understanding</li>
                                            <li>Request written instructions for complex treatments</li>
                                            <li>Discuss costs and insurance coverage before procedures</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Pro Tip:</h3>
                                    <p className="text-gray-700">
                                        Bring a trusted friend or family member to important appointments. They can take notes, ask questions you might forget, and help you remember recommendations later.
                                    </p>
                                </div>
                            </section>

                            {/* Team Coordination */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Coordinating Care Between Team Members</h2>

                                <p className="text-gray-700 mb-4">
                                    When multiple specialists are involved in your care, coordination becomes crucial. Here's how to facilitate smooth communication between your providers:
                                </p>

                                <div className="space-y-4">
                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">Request Records Sharing</h3>
                                        <p className="text-gray-700">
                                            Sign release forms allowing your providers to share test results and treatment plans with each other. This prevents duplicate tests and ensures everyone has complete information.
                                        </p>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">Maintain a Personal Health Record</h3>
                                        <p className="text-gray-700">
                                            Keep copies of important eye test results, prescriptions, and treatment summaries in a folder or digital app to share with new providers.
                                        </p>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">Designate a Quarterback</h3>
                                        <p className="text-gray-700">
                                            Identify one provider (usually your optometrist or primary ophthalmologist) to oversee your overall eye care and coordinate with specialists.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Your eye care team plays a vital role in maintaining your vision health throughout life. By understanding each member's expertise and how they work together, you can become an active participant in your eye care.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    Remember that vision needs change over time. Children require different specialists than adults with age-related conditions. Regular comprehensive eye exams help detect when it's time to add new members to your team.
                                </p>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "Your vision is priceless. Investing time to build relationships with qualified eye care professionals pays dividends in lifelong eye health and quality of life."
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
                                            Dr. Emily Carter, MD
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600 mb-1">
                                        — Written by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            Vision Health Editors
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
                                <h3 className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-2">VISION HEALTH NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get eye care tips and updates</h4>
                                <p className="text-gray-700 text-sm">
                                    Monthly vision health advice, research updates, and specialist insights delivered to your inbox.
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

                        {/* Quick Reference Guide */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Eye Care Professional Quick Reference</h3>
                            <div className="space-y-4">
                                <div className="border-b border-gray-200 pb-4">
                                    <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                                        <Eye className="w-5 h-5 text-blue-600 mr-2" />
                                        Optometrist
                                    </h4>
                                    <p className="text-sm text-gray-600">See for: Routine exams, glasses/contacts, mild eye infections</p>
                                </div>
                                <div className="border-b border-gray-200 pb-4">
                                    <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                                        <HeartPulse className="w-5 h-5 text-blue-600 mr-2" />
                                        Ophthalmologist
                                    </h4>
                                    <p className="text-sm text-gray-600">See for: Eye diseases, surgical needs, complex conditions</p>
                                </div>
                                <div className="border-b border-gray-200 pb-4">
                                    <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                                        <Glasses className="w-5 h-5 text-blue-600 mr-2" />
                                        Optician
                                    </h4>
                                    <p className="text-sm text-gray-600">See for: Glasses/contact lens fitting and adjustments</p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                                        <Shield className="w-5 h-5 text-blue-600 mr-2" />
                                        Pediatric Specialist
                                    </h4>
                                    <p className="text-sm text-gray-600">See for: Children's eye health and development</p>
                                </div>
                            </div>
                        </div>

                        {/* Recommended Schedule */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Recommended Eye Exam Schedule</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span className="font-medium">Age Group</span>
                                    <span className="font-medium">Frequency</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Birth-24 months</span>
                                    <span className="text-blue-600">At 6-12 months</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>2-5 years</span>
                                    <span className="text-blue-600">At 3 years, then before 1st grade</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>6-18 years</span>
                                    <span className="text-blue-600">Every 2 years</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>19-40 years</span>
                                    <span className="text-blue-600">Every 2-3 years</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>41-60 years</span>
                                    <span className="text-blue-600">Every 2 years</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>61+ years</span>
                                    <span className="text-blue-600">Annually</span>
                                </div>
                            </div>
                            <p className="text-xs text-gray-600 mt-3">*More frequent exams may be needed for those with risk factors</p>
                        </div>

                        {/* Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Further Reading</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-center">
                                        <BookOpen className="w-4 h-4 mr-2" />
                                        How to Read Your Eyeglass Prescription
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-center">
                                        <Eye className="w-4 h-4 mr-2" />
                                        Common Eye Conditions and Treatments
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-center">
                                        <HeartPulse className="w-4 h-4 mr-2" />
                                        Diabetes and Eye Health
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-center">
                                        <Mail className="w-4 h-4 mr-2" />
                                        Questions to Ask Your Eye Doctor
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