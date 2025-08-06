"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Eye, EyeOff, Glasses, Sun, Moon, Activity, BookOpen, Heart, Shield } from "lucide-react"

export default function EyeConditionsGuide() {
    const [email, setEmail] = useState("")
    const [activeTab, setActiveTab] = useState("Experiences")

    const handleEmailSubmit = (e) => {
        e.preventDefault()
        console.log("Email submitted:", email)
        setEmail("")
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const tabs = ["Experiences", "Conditions", "Treatments", "Resources"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Navigating Eye Conditions: A Patient's Perspective
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
                                Real experiences and practical advice from patients on managing common eye conditions, treatment experiences, and maintaining quality of life with vision changes. This guide combines medical information with personal stories to help you navigate your eye health journey.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80"
                                    alt="Person wearing glasses looking into distance"
                                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                                    style={{ maxHeight: '500px' }}
                                />
                            </div>

                            {/* Key Takeaways */}
                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
                                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                    <BookOpen className="w-5 h-5 text-blue-600 mr-2" />
                                    Key Takeaways
                                </h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>Early symptoms often go unnoticed - regular checkups are crucial</li>
                                    <li>Adaptation strategies can significantly improve quality of life</li>
                                    <li>Treatment experiences vary widely - patience is key</li>
                                    <li>Emotional support is as important as medical treatment</li>
                                    <li>Technology and tools can help maintain independence</li>
                                </ul>
                            </div>

                            {/* Patient Stories */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <User className="w-8 h-8 text-blue-600 mr-2" />
                                    Patient Stories: Real Experiences
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Hearing from others who have navigated similar challenges can provide comfort and practical advice. Here are anonymized accounts from patients with various eye conditions:
                                </p>

                                <div className="space-y-6">
                                    {/* Story 1 */}
                                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">Sarah's Glaucoma Journey</h3>
                                        <p className="text-gray-700 mb-4 italic">
                                            "I was diagnosed with glaucoma at 42 during a routine eye exam. I had no symptoms at all, which was the scariest part. The drops were annoying at first, but now they're just part of my routine. My advice? Don't skip appointments - early detection saved my vision."
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Diagnosed at 42</span>
                                            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">10 years stable</span>
                                            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Medication managed</span>
                                        </div>
                                    </div>

                                    {/* Story 2 */}
                                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">Miguel's Retinal Detachment</h3>
                                        <p className="text-gray-700 mb-4 italic">
                                            "The flashing lights and floaters came out of nowhere. I almost ignored them, but my wife insisted I go to the ER. Emergency surgery saved 80% of my vision in that eye. The recovery was tough - face-down for two weeks - but worth it. Now I tell everyone: sudden vision changes are an emergency!"
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Emergency surgery</span>
                                            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Partial vision recovery</span>
                                            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Advocate for awareness</span>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Common Eye Conditions */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Eye className="w-8 h-8 text-blue-600 mr-2" />
                                    Understanding Common Eye Conditions
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Below is a comprehensive overview of common eye conditions, their symptoms, and typical treatment approaches based on patient experiences and medical guidelines:
                                </p>

                                {/* Conditions Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Condition</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Early Symptoms</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Risk Factors</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Treatment Options</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            {/* Row 1 */}
                                            <tr>
                                                <td className="px-4 py-3 font-medium text-gray-900">Age-related Macular Degeneration (AMD)</td>
                                                <td className="px-4 py-3">Blurred central vision, straight lines appearing wavy</td>
                                                <td className="px-4 py-3">Age, smoking, family history, light iris color</td>
                                                <td className="px-4 py-3">Anti-VEGF injections, laser therapy, AREDS2 supplements</td>
                                            </tr>
                                            {/* Row 2 */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 font-medium text-gray-900">Diabetic Retinopathy</td>
                                                <td className="px-4 py-3">Fluctuating vision, dark spots, impaired color vision</td>
                                                <td className="px-4 py-3">Diabetes duration, poor blood sugar control, high blood pressure</td>
                                                <td className="px-4 py-3">Laser treatment, injections, vitrectomy in advanced cases</td>
                                            </tr>
                                            {/* Row 3 */}
                                            <tr>
                                                <td className="px-4 py-3 font-medium text-gray-900">Glaucoma</td>
                                                <td className="px-4 py-3">Often none, later peripheral vision loss</td>
                                                <td className="px-4 py-3">High eye pressure, age, family history, thin corneas</td>
                                                <td className="px-4 py-3">Eye drops, laser treatment, surgery</td>
                                            </tr>
                                            {/* Row 4 */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 font-medium text-gray-900">Cataracts</td>
                                                <td className="px-4 py-3">Cloudy vision, glare, frequent prescription changes</td>
                                                <td className="px-4 py-3">Age, UV exposure, diabetes, smoking</td>
                                                <td className="px-4 py-3">Surgery when vision affects daily activities</td>
                                            </tr>
                                            {/* Row 5 */}
                                            <tr>
                                                <td className="px-4 py-3 font-medium text-gray-900">Dry Eye Syndrome</td>
                                                <td className="px-4 py-3">Burning, gritty sensation, redness, watery eyes</td>
                                                <td className="px-4 py-3">Screen use, aging, medications, environmental factors</td>
                                                <td className="px-4 py-3">Artificial tears, prescription drops, lifestyle changes</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Patient Tip:</h3>
                                    <p className="text-gray-700">
                                        "Keep a symptom diary before your appointment. Note when symptoms occur, what makes them better/worse, and how they affect your daily life. This helps your doctor understand your condition better." - Anonymous patient
                                    </p>
                                </div>
                            </section>

                            {/* Treatment Experiences */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Activity className="w-8 h-8 text-blue-600 mr-2" />
                                    Treatment Experiences and Adaptations
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Patients share their experiences with various treatments and the adaptations they've made to maintain their quality of life:
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">Injections for AMD</h3>
                                        <p className="text-gray-700 mb-2">
                                            "The first anti-VEGF injection was scary, but now it's just routine. The eye is numbed so you don't feel pain, just pressure. I schedule them for Fridays so I have the weekend to recover."
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            - 68-year-old female, 3 years of treatment
                                        </p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">Glaucoma Drops</h3>
                                        <p className="text-gray-700 mb-2">
                                            "Setting phone reminders was a game-changer. I also keep drops in my purse, car, and office. The preservative-free versions reduced my redness and irritation significantly."
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            - 55-year-old male, 8 years of treatment
                                        </p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">Cataract Surgery</h3>
                                        <p className="text-gray-700 mb-2">
                                            "The surgery itself was quick and painless. The hardest part was the recovery restrictions - no bending or lifting. Prepare your home beforehand with essentials at waist level."
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            - 72-year-old female, bilateral surgery
                                        </p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">Low Vision Aids</h3>
                                        <p className="text-gray-700 mb-2">
                                            "My tablet with large text and voice commands changed everything. Audiobooks, voice assistants, and smart home devices help me maintain independence despite poor central vision."
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            - 60-year-old male with advanced AMD
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Daily Living Tips */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Practical Tips for Daily Living</h2>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Home Adaptations</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Use contrasting colors (dark switch plates on light walls)</li>
                                            <li>Install motion-activated night lights in hallways</li>
                                            <li>Organize with tactile markers (rubber bands, raised dots)</li>
                                            <li>Keep walking paths clear of clutter</li>
                                            <li>Use high-wattage bulbs in task lighting</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Technology Solutions</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Smartphone magnification apps</li>
                                            <li>Voice-controlled assistants (Alexa, Siri)</li>
                                            <li>Audiobooks and screen readers</li>
                                            <li>High-contrast display settings</li>
                                            <li>Video magnifiers for reading mail</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Creative Solution:</h3>
                                    <p className="text-gray-700">
                                        "I use different shaped containers in my fridge - round for milk, square for juice. And I put rubber bands around cleaning products to distinguish them from food items." - Patient with peripheral vision loss
                                    </p>
                                </div>
                            </section>

                            {/* Emotional Impact */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Emotional Impact and Coping Strategies</h2>

                                <p className="text-gray-700 mb-4">
                                    Vision changes can be emotionally challenging. Patients share their experiences with the psychological aspects and what helped them cope:
                                </p>

                                <div className="space-y-4">
                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">Grief and Acceptance</h3>
                                        <p className="text-gray-700 mb-2">
                                            "I went through stages similar to grief - denial, anger, depression. Counseling helped me reach acceptance. Now I focus on what I can do rather than what I can't."
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            - 58-year-old female with retinitis pigmentosa
                                        </p>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">Support Systems</h3>
                                        <p className="text-gray-700 mb-2">
                                            "Joining a support group was transformative. Online forums let me connect with others worldwide who understand exactly what I'm experiencing. We share tips and encouragement."
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            - 45-year-old male with uveitis
                                        </p>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">Maintaining Independence</h3>
                                        <p className="text-gray-700 mb-2">
                                            "Learning to ask for help was hard but necessary. I specify exactly what I need - 'Guide me with your elbow' rather than just 'Help me'. This maintains my dignity while getting support."
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            - 67-year-old female with glaucoma
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Resources and Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Resources and Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    While every eye condition and personal experience is unique, several universal lessons emerge from patient stories:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>Early detection through regular exams is crucial</li>
                                    <li>Treatment adherence makes a significant difference in outcomes</li>
                                    <li>Adaptation takes time - be patient with yourself</li>
                                    <li>Emotional health is as important as physical treatment</li>
                                    <li>New technologies and strategies emerge constantly - stay informed</li>
                                </ul>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "Vision loss is a journey, not a destination. With the right tools, support, and mindset, most people can continue to live fulfilling, independent lives despite visual challenges." - Low vision specialist
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
                                            Dr. Emily Chen, Ophthalmologist
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600 mb-1">
                                        — Compiled by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            Vision Health Network
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
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get patient perspectives and tips</h4>
                                <p className="text-gray-700 text-sm">
                                    Monthly stories, adaptation strategies, and the latest in vision technology.
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

                        {/* Quick Tips */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Vision Tips</h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 mt-1">
                                        <Sun className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900">UV Protection</h4>
                                        <p className="text-sm text-gray-600">Wear sunglasses year-round to prevent cataract formation</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 mt-1">
                                        <Glasses className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900">Screen Breaks</h4>
                                        <p className="text-sm text-gray-600">20-20-20 rule: Every 20 minutes, look 20 feet away for 20 seconds</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 mt-1">
                                        <Heart className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900">Diet</h4>
                                        <p className="text-sm text-gray-600">Leafy greens and omega-3s support retinal health</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Emergency Signs */}
                        <div className="bg-red-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                <Shield className="w-5 h-5 text-red-600 mr-2" />
                                Seek Immediate Care For:
                            </h3>
                            <ul className="list-disc list-inside text-gray-700 space-y-2 pl-2">
                                <li>Sudden vision loss</li>
                                <li>Flashes of light or new floaters</li>
                                <li>Curtain-like shadow in vision</li>
                                <li>Severe eye pain with nausea</li>
                                <li>Double vision (new onset)</li>
                            </ul>
                        </div>

                        {/* Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Patient Resources</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">American Academy of Ophthalmology</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">National Eye Institute</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Low Vision Support Groups</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Assistive Technology Guide</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Financial Assistance Programs</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}