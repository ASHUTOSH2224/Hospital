"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Eye, ClipboardList, HeartPulse, ShieldQuestion, AlertCircle, ChevronRight } from "lucide-react"

export default function EyeCareQuestionsGuide() {
    const [email, setEmail] = useState("")
    const [activeTab, setActiveTab] = useState("General")

    const handleEmailSubmit = (e) => {
        e.preventDefault()
        console.log("Email submitted:", email)
        setEmail("")
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const tabs = ["General", "Conditions", "Treatment", "Prevention"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Essential Questions to Ask Your Eye Care Team
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
                                Prepare for appointments with your optometrist, ophthalmologist, and vision specialists with this comprehensive list of important questions. Being proactive about your eye health can help you get the most from your visits and ensure you understand your eye care needs.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80"
                                    alt="Patient talking with eye care professional"
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
                                    <li>Understand the difference between optometrists and ophthalmologists</li>
                                    <li>Ask about both immediate concerns and long-term eye health</li>
                                    <li>Don't hesitate to request explanations of medical terms</li>
                                    <li>Discuss lifestyle factors that affect your vision</li>
                                </ul>
                            </div>

                            {/* Why These Questions Matter */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Eye className="w-8 h-8 text-blue-600 mr-2" />
                                    Why These Questions Matter
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    According to a <a href="#" className="text-blue-600 hover:underline">2023 study in the Journal of Ophthalmology</a>, patients who asked more questions during eye exams had:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>37% better understanding of their eye conditions</li>
                                    <li>28% higher adherence to treatment plans</li>
                                    <li>42% greater satisfaction with their care</li>
                                    <li>19% fewer preventable vision complications</li>
                                </ul>

                                <div className="bg-blue-100 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Did You Know?</h3>
                                    <p className="text-gray-700">
                                        The average eye exam lasts just 15-20 minutes. Preparing questions ensures you cover all your concerns in this limited time.
                                    </p>
                                </div>
                            </section>

                            {/* General Eye Exam Questions */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <ClipboardList className="w-8 h-8 text-blue-600 mr-2" />
                                    General Eye Exam Questions
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    These fundamental questions help you understand your overall eye health and the exam process:
                                </p>

                                <div className="space-y-4 mb-8">
                                    <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">About the Exam</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                                            <li>What tests will be performed today?</li>
                                            <li>How often should I have a comprehensive eye exam?</li>
                                            <li>Are my vision changes normal for my age?</li>
                                            <li>What's the difference between a vision screening and a comprehensive exam?</li>
                                        </ul>
                                    </div>

                                    <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">About Your Vision</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                                            <li>How is my visual acuity compared to normal?</li>
                                            <li>Do I need prescription lenses for specific activities?</li>
                                            <li>What are my options if I'm not satisfied with my vision correction?</li>
                                            <li>How can I tell if my prescription has changed between visits?</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Eye Health Statistics */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age Group</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Recommended Exam Frequency</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Common Issues</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Children (0-18)</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Annually</td>
                                                <td className="px-4 py-3">Amblyopia, strabismus, refractive errors</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Adults (19-40)</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Every 2 years</td>
                                                <td className="px-4 py-3">Myopia, astigmatism, dry eye</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Middle Age (41-60)</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Every 1-2 years</td>
                                                <td className="px-4 py-3">Presbyopia, glaucoma risk, early cataracts</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Seniors (61+)</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Annually</td>
                                                <td className="px-4 py-3">Cataracts, macular degeneration, diabetic retinopathy</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            {/* Questions About Specific Conditions */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <HeartPulse className="w-8 h-8 text-blue-600 mr-2" />
                                    Questions About Specific Conditions
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    If you've been diagnosed with or are at risk for certain eye conditions, these questions can help you better understand and manage them:
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">1</span>
                                            For Glaucoma
                                        </h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                                            <li>What is my current intraocular pressure?</li>
                                            <li>How much optic nerve damage has occurred?</li>
                                            <li>What are the side effects of my glaucoma medications?</li>
                                            <li>At what point would we consider surgery?</li>
                                        </ul>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">2</span>
                                            For Cataracts
                                        </h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                                            <li>How advanced are my cataracts?</li>
                                            <li>What lifestyle adjustments can delay surgery?</li>
                                            <li>What types of intraocular lenses are available?</li>
                                            <li>What's the recovery process like after surgery?</li>
                                        </ul>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">3</span>
                                            For Macular Degeneration
                                        </h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                                            <li>Is my condition dry or wet AMD?</li>
                                            <li>What nutritional supplements do you recommend?</li>
                                            <li>How often should I monitor my vision at home?</li>
                                            <li>What symptoms indicate I need immediate attention?</li>
                                        </ul>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">4</span>
                                            For Diabetic Retinopathy
                                        </h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                                            <li>How does my blood sugar control affect my eyes?</li>
                                            <li>What stage is my retinopathy?</li>
                                            <li>When would laser treatment be necessary?</li>
                                            <li>How often should I have retinal screenings?</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Important:</h3>
                                    <p className="text-gray-700">
                                        Always ask for written information about any diagnosed condition, including diagrams of how it affects your eye anatomy.
                                    </p>
                                </div>
                            </section>

                            {/* Treatment and Medication Questions */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Treatment and Medication Questions</h2>

                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">About Prescriptions</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                                            <li>What are the benefits and risks of this treatment?</li>
                                            <li>Are there generic alternatives to prescribed medications?</li>
                                            <li>How will I know if the treatment is working?</li>
                                            <li>What should I do if I experience side effects?</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">About Procedures</h3>
                                        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                                            <div className="bg-blue-600 px-4 py-2">
                                                <h3 className="font-bold text-white">Common Eye Procedures</h3>
                                            </div>
                                            <div className="p-4">
                                                <div className="mb-3">
                                                    <h4 className="font-medium text-gray-900">LASIK/Refractive Surgery</h4>
                                                    <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                                                        <li>Am I a good candidate?</li>
                                                        <li>What results can I realistically expect?</li>
                                                        <li>What are the potential complications?</li>
                                                    </ul>
                                                </div>
                                                <div className="mb-3">
                                                    <h4 className="font-medium text-gray-900">Cataract Surgery</h4>
                                                    <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                                                        <li>What lens options are available?</li>
                                                        <li>Will I still need glasses after surgery?</li>
                                                        <li>How long is the recovery period?</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4 className="font-medium text-gray-900">Injections (for AMD or diabetic retinopathy)</h4>
                                                    <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                                                        <li>How often will I need injections?</li>
                                                        <li>What are the risks of repeated injections?</li>
                                                        <li>How do I prepare for each treatment?</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Prevention and Lifestyle Questions */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Prevention and Lifestyle Questions</h2>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Daily Habits</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                                            <li>What screen time habits are best for my eyes?</li>
                                            <li>Are my current lighting conditions adequate?</li>
                                            <li>What protective eyewear should I use for sports/work?</li>
                                            <li>How can I reduce eye strain at my job?</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Nutrition</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                                            <li>Which nutrients are most important for my eye health?</li>
                                            <li>Should I take eye health supplements?</li>
                                            <li>Are there foods I should avoid for my condition?</li>
                                            <li>How does hydration affect my eyes?</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <h3 className="font-bold text-gray-900 mb-2">Eye-Healthy Foods</h3>
                                    <div className="grid grid-cols-3 gap-4 text-center">
                                        <div>
                                            <div className="font-medium">Food</div>
                                            <div className="text-sm text-gray-600">Key Nutrients</div>
                                        </div>
                                        <div>
                                            <div className="font-medium">Leafy Greens</div>
                                            <div className="text-sm text-gray-600">Lutein, Zeaxanthin</div>
                                        </div>
                                        <div>
                                            <div className="font-medium">Fatty Fish</div>
                                            <div className="text-sm text-gray-600">Omega-3s</div>
                                        </div>
                                        <div>
                                            <div className="font-medium">Eggs</div>
                                            <div className="text-sm text-gray-600">Zinc, Vitamin A</div>
                                        </div>
                                        <div>
                                            <div className="font-medium">Citrus Fruits</div>
                                            <div className="text-sm text-gray-600">Vitamin C</div>
                                        </div>
                                        <div>
                                            <div className="font-medium">Nuts/Seeds</div>
                                            <div className="text-sm text-gray-600">Vitamin E</div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Emergency Situations */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <AlertCircle className="w-8 h-8 text-red-600 mr-2" />
                                    Emergency Situations: When to Seek Immediate Care
                                </h2>

                                <div className="space-y-4">
                                    <div className="p-4 border border-red-200 rounded-lg bg-red-50">
                                        <h3 className="font-bold text-red-800 mb-2">Red Flag Symptoms</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                                            <li>Sudden vision loss or blurring</li>
                                            <li>Seeing flashes of light or new floaters</li>
                                            <li>Severe eye pain or headache with nausea</li>
                                            <li>Double vision or distorted vision</li>
                                            <li>Eye trauma or chemical exposure</li>
                                        </ul>
                                    </div>

                                    <p className="text-gray-700">
                                        Ask your eye care team: <span className="font-medium">"What symptoms should prompt me to call your office immediately versus going to the ER?"</span> Get specific guidelines for your conditions.
                                    </p>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Being prepared with questions transforms you from a passive patient to an active participant in your eye health. Remember that no question is too simple when it comes to understanding your vision and preserving your sight.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    Consider bringing a notebook to appointments or using your phone to record answers (with your doctor's permission). Many clinics also offer patient portals where you can send follow-up questions after your visit.
                                </p>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "Your vision is priceless. Taking time to understand your eye health today can prevent vision loss tomorrow. Don't leave your appointment until all your questions are answered to your satisfaction."
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
                                            Dr. Emily Parker, OD
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

                        {/* Quick Links */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Navigation</h3>
                            <ul className="space-y-3">
                                {[
                                    { title: "General Questions", icon: ClipboardList },
                                    { title: "Condition-Specific", icon: HeartPulse },
                                    { title: "Treatment Options", icon: ShieldQuestion },
                                    { title: "Prevention Tips", icon: Eye }
                                ].map((item, index) => (
                                    <li key={index}>
                                        <a 
                                            href={`#${item.title.replace(/\s+/g, '-').toLowerCase()}`}
                                            className="flex items-center text-blue-600 hover:text-blue-800 hover:underline"
                                        >
                                            <item.icon className="w-4 h-4 mr-2" />
                                            {item.title}
                                            <ChevronRight className="w-4 h-4 ml-auto" />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Newsletter Signup */}
                        <div className="bg-blue-50 rounded-lg p-6 mb-8">
                            <div className="mb-4">
                                <h3 className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-2">EYE HEALTH NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Stay informed about vision health</h4>
                                <p className="text-gray-700 text-sm">
                                    Monthly tips, research updates, and expert Q&A delivered to your inbox.
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

                        {/* Common Eye Tests */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Common Eye Tests Explained</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-medium text-gray-900">Visual Acuity Test</h4>
                                    <p className="text-sm text-gray-600">Measures sharpness of vision using eye charts</p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900">Tonometry</h4>
                                    <p className="text-sm text-gray-600">Measures intraocular pressure for glaucoma</p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900">Retinal Imaging</h4>
                                    <p className="text-sm text-gray-600">Photographs the back of your eye</p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900">Visual Field Test</h4>
                                    <p className="text-sm text-gray-600">Checks peripheral vision</p>
                                </div>
                            </div>
                        </div>

                        {/* Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Further Reading</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">How to Read Your Eyeglass Prescription</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Choosing Between Glasses and Contacts</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Digital Eye Strain: Prevention Tips</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Age-Related Eye Changes to Expect</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}