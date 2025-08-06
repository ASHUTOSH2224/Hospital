"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Eye, AlertTriangle, Sun, Bookmark, Heart, Share2, MonitorSmartphone, Headset, BookOpen } from "lucide-react"

export default function EyeProblemWarningSigns() {
    const [email, setEmail] = useState("")
    const [activeTab, setActiveTab] = useState("Symptoms")
    const [saved, setSaved] = useState(false)

    const handleEmailSubmit = (e) => {
        e.preventDefault()
        console.log("Email submitted:", email)
        setEmail("")
    }

    const toggleSave = () => {
        setSaved(!saved)
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const tabs = ["Symptoms", "Conditions", "Prevention", "Treatment"]

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
                                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                                        Health Awareness
                                    </span>
                                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                        Recognizing Eye Problem Warning Signs and Symptoms
                                    </h1>
                                </div>
                                <div className="flex gap-2">
                                    <button 
                                        onClick={toggleSave}
                                        className={`p-2 rounded-full ${saved ? 'text-red-500' : 'text-gray-400 hover:text-gray-600'}`}
                                    >
                                        <Heart className={`w-5 h-5 ${saved ? 'fill-current' : ''}`} />
                                    </button>
                                    <button className="p-2 rounded-full text-gray-400 hover:text-gray-600">
                                        <Share2 className="w-5 h-5" />
                                    </button>
                                    <button className="p-2 rounded-full text-gray-400 hover:text-gray-600">
                                        <Bookmark className="w-5 h-5" />
                                    </button>
                                </div>
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
                                Your eyes are vital sensory organs, and changes in your vision or eye comfort can signal serious health issues. Learn to identify potential vision problems and understand when to seek medical attention for concerning changes in your eye health. Early detection of eye problems can prevent vision loss and help diagnose systemic diseases.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1551601651-09ebecb44d8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80"
                                    alt="Close-up of human eye showing detailed iris"
                                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                                    style={{ maxHeight: '500px' }}
                                />
                            </div>

                            {/* Key Takeaways */}
                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
                                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                    <Eye className="w-5 h-5 text-blue-600 mr-2" />
                                    Key Takeaways
                                </h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>Sudden vision changes require immediate medical attention</li>
                                    <li>Regular eye exams can detect problems before symptoms appear</li>
                                    <li>Many eye conditions are treatable if caught early</li>
                                    <li>Eye symptoms can indicate broader health issues like diabetes or hypertension</li>
                                    <li>Digital eye strain is increasingly common but preventable</li>
                                </ul>
                            </div>

                            {/* Common Warning Signs */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <AlertTriangle className="w-8 h-8 text-blue-600 mr-2" />
                                    Common Warning Signs of Eye Problems
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    The eyes often provide early warning signs of both ocular and systemic health issues. According to the <a href="#" className="text-blue-600 hover:underline">American Academy of Ophthalmology</a>, these are the most common symptoms that warrant professional evaluation:
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">Vision Changes</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>Sudden blurred or distorted vision</li>
                                            <li>Double vision (diplopia)</li>
                                            <li>Loss of peripheral vision</li>
                                            <li>New floaters or flashes of light</li>
                                        </ul>
                                    </div>
                                    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">Physical Symptoms</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>Persistent eye pain or discomfort</li>
                                            <li>Redness that doesn't resolve</li>
                                            <li>Unusual pupil size or shape</li>
                                            <li>Bulging of one or both eyes</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Emergency Symptoms</h3>
                                    <p className="text-gray-700 mb-2 font-medium">
                                        These symptoms require <span className="text-red-600">immediate medical attention</span>:
                                    </p>
                                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                                        <li>Sudden vision loss (partial or complete)</li>
                                        <li>Seeing halos around lights with eye pain</li>
                                        <li>Severe eye trauma or chemical exposure</li>
                                        <li>Sudden onset of many new floaters with flashes</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Age-Related Eye Conditions */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Age-Related Eye Conditions</h2>

                                <p className="text-gray-700 mb-6">
                                    Many eye problems become more common with age. The table below outlines major age-related eye conditions, their symptoms, and typical onset:
                                </p>

                                {/* Conditions Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Condition</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Common Age</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Key Symptoms</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Risk Factors</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Cataracts</td>
                                                <td className="px-4 py-3 whitespace-nowrap">40+</td>
                                                <td className="px-4 py-3">Cloudy vision, glare sensitivity, faded colors</td>
                                                <td className="px-4 py-3">Aging, UV exposure, smoking, diabetes</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Glaucoma</td>
                                                <td className="px-4 py-3 whitespace-nowrap">60+</td>
                                                <td className="px-4 py-3">Often asymptomatic until late stages, peripheral vision loss</td>
                                                <td className="px-4 py-3">Family history, high eye pressure, thin corneas</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">AMD (Age-related Macular Degeneration)</td>
                                                <td className="px-4 py-3 whitespace-nowrap">50+</td>
                                                <td className="px-4 py-3">Central vision distortion, dark spots</td>
                                                <td className="px-4 py-3">Smoking, family history, light iris color</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Diabetic Retinopathy</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Any age with diabetes</td>
                                                <td className="px-4 py-3">Fluctuating vision, dark spots, vision loss</td>
                                                <td className="px-4 py-3">Diabetes duration, poor blood sugar control</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">1</span>
                                            Cataracts - The Leading Cause of Vision Loss
                                        </h3>
                                        <p className="text-gray-700">
                                            By age 80, more than half of all Americans either have a cataract or have had cataract surgery. Symptoms develop gradually and may not be noticeable at first. Modern cataract surgery is highly successful, with a 98% success rate in healthy eyes.
                                        </p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">2</span>
                                            Glaucoma - The Silent Thief of Sight
                                        </h3>
                                        <p className="text-gray-700">
                                            Often called the "silent thief of sight," glaucoma can cause irreversible damage before symptoms appear. Regular eye pressure checks are crucial, especially for African Americans over 40 and everyone over 60.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Digital Eye Strain */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <MonitorSmartphone className="w-8 h-8 text-blue-600 mr-2" />
                                    Digital Eye Strain in the Modern World
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    With the average American spending over 7 hours a day on digital devices, digital eye strain (also called computer vision syndrome) has become increasingly common. Symptoms include:
                                </p>

                                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                                        <div className="p-2">
                                            <div className="font-medium text-gray-900">Eyestrain</div>
                                            <div className="text-sm text-gray-600">82% of users</div>
                                        </div>
                                        <div className="p-2 bg-blue-50 rounded">
                                            <div className="font-medium text-gray-900">Dry eyes</div>
                                            <div className="text-sm text-gray-600">75% of users</div>
                                        </div>
                                        <div className="p-2">
                                            <div className="font-medium text-gray-900">Headaches</div>
                                            <div className="text-sm text-gray-600">54% of users</div>
                                        </div>
                                        <div className="p-2 bg-blue-50 rounded">
                                            <div className="font-medium text-gray-900">Blurred vision</div>
                                            <div className="text-sm text-gray-600">47% of users</div>
                                        </div>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-3">The 20-20-20 Rule</h3>
                                <p className="text-gray-700 mb-4">
                                    To reduce digital eye strain, follow the 20-20-20 rule: Every 20 minutes, look at something 20 feet away for 20 seconds. Additional recommendations:
                                </p>

                                <ol className="list-decimal list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>Position your screen slightly below eye level</li>
                                    <li>Use proper lighting to minimize glare</li>
                                    <li>Increase text size for comfortable reading</li>
                                    <li>Consider blue light filtering glasses if symptoms persist</li>
                                    <li>Use artificial tears if experiencing dryness</li>
                                </ol>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Pro Tip:</h3>
                                    <p className="text-gray-700">
                                        Adjust your device's night light setting to reduce blue light exposure in the evenings, which can improve sleep quality and reduce eye strain.
                                    </p>
                                </div>
                            </section>

                            {/* Prevention Strategies */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Eye Health Prevention Strategies</h2>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Nutrition for Eye Health</h3>
                                        <p className="text-gray-700 mb-2">
                                            Certain nutrients are particularly important for maintaining eye health:
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>Lutein & Zeaxanthin (leafy greens, eggs)</li>
                                            <li>Omega-3 fatty acids (fatty fish)</li>
                                            <li>Vitamin C (citrus fruits, bell peppers)</li>
                                            <li>Vitamin E (nuts, seeds)</li>
                                            <li>Zinc (beans, shellfish, meat)</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Protective Measures</h3>
                                        <ol className="list-decimal list-inside text-gray-700 space-y-1">
                                            <li>Wear UV-blocking sunglasses outdoors</li>
                                            <li>Use protective eyewear for sports and hazardous activities</li>
                                            <li>Maintain proper contact lens hygiene</li>
                                            <li>Control chronic conditions like diabetes and hypertension</li>
                                            <li>Don't smoke - smoking increases risk of AMD and cataracts</li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Recommended Eye Exam Schedule</h3>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full">
                                            <thead>
                                                <tr className="border-b border-gray-200">
                                                    <th className="px-4 py-2 text-left">Age Group</th>
                                                    <th className="px-4 py-2 text-left">Frequency</th>
                                                    <th className="px-4 py-2 text-left">Special Considerations</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="border-b border-gray-200">
                                                    <td className="px-4 py-2">Birth to 24 months</td>
                                                    <td className="px-4 py-2">At 6-12 months</td>
                                                    <td className="px-4 py-2">For high-risk infants</td>
                                                </tr>
                                                <tr className="border-b border-gray-200 bg-gray-50">
                                                    <td className="px-4 py-2">2-5 years</td>
                                                    <td className="px-4 py-2">At 3 years</td>
                                                    <td className="px-4 py-2">Vision screening</td>
                                                </tr>
                                                <tr className="border-b border-gray-200">
                                                    <td className="px-4 py-2">6-18 years</td>
                                                    <td className="px-4 py-2">Before 1st grade, then every 2 years</td>
                                                    <td className="px-4 py-2">More frequent if vision problems</td>
                                                </tr>
                                                <tr className="border-b border-gray-200 bg-gray-50">
                                                    <td className="px-4 py-2">18-60 years</td>
                                                    <td className="px-4 py-2">Every 2 years</td>
                                                    <td className="px-4 py-2">Annual for contact lens wearers</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-2">60+ years</td>
                                                    <td className="px-4 py-2">Annual</td>
                                                    <td className="px-4 py-2">Screen for age-related conditions</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </section>

                            {/* When to See an Eye Doctor */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">When to See an Eye Doctor</h2>

                                <div className="space-y-4">
                                    <div className="p-4 border border-gray-200 rounded-lg shadow-sm">
                                        <h3 className="font-bold text-gray-900 mb-2">Routine Visits</h3>
                                        <p className="text-gray-700 mb-2">
                                            Even without symptoms, regular comprehensive eye exams are important because:
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 ml-4">
                                            <li>Many eye diseases have no early symptoms</li>
                                            <li>Your eye doctor can detect signs of systemic diseases</li>
                                            <li>Vision changes can be gradual and go unnoticed</li>
                                        </ul>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg shadow-sm">
                                        <h3 className="font-bold text-gray-900 mb-2">Warning Signs Needing Prompt Attention</h3>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                                                <li>Sudden vision changes</li>
                                                <li>Eye pain or discomfort</li>
                                                <li>Double vision</li>
                                            </ul>
                                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                                                <li>Seeing flashes or floaters</li>
                                                <li>Redness with pain or vision changes</li>
                                                <li>Physical injury to the eye</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Your eyesight is precious, and being aware of potential warning signs can help preserve your vision. Many serious eye conditions are treatable when caught early, but can cause irreversible damage if ignored.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    Remember that eye health is connected to overall health. Conditions like diabetes, high blood pressure, and autoimmune diseases often manifest eye symptoms before other signs become apparent.
                                </p>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "The eyes are the window to your health. Regular eye exams aren't just about vision correction - they're an important part of preventive healthcare at every age."
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

                        {/* Newsletter Signup */}
                        <div className="bg-blue-50 rounded-lg p-6 mb-8">
                            <div className="mb-4">
                                <h3 className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-2">EYE HEALTH NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get vision care tips</h4>
                                <p className="text-gray-700 text-sm">
                                    Monthly updates on eye health, vision protection, and the latest treatments.
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

                        {/* Quick Symptom Checker */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Symptom Quick Reference</h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-4 h-4 rounded-full bg-red-500"></div>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900">Emergency</h4>
                                        <p className="text-sm text-gray-600">Sudden vision loss, severe pain, trauma</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900">Urgent</h4>
                                        <p className="text-sm text-gray-600">Flashes/floaters, moderate pain, redness</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-4 h-4 rounded-full bg-green-500"></div>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900">Routine</h4>
                                        <p className="text-sm text-gray-600">Mild irritation, gradual vision changes</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Eye Health Resources */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Eye Health Resources</h3>
                            <div className="space-y-3">
                                <a href="#" className="flex items-center gap-2 text-blue-600 hover:underline">
                                    <BookOpen className="w-4 h-4" />
                                    <span>Guide to Eye Exams</span>
                                </a>
                                <a href="#" className="flex items-center gap-2 text-blue-600 hover:underline">
                                    <Sun className="w-4 h-4" />
                                    <span>Sunglasses Buying Guide</span>
                                </a>
                                <a href="#" className="flex items-center gap-2 text-blue-600 hover:underline">
                                    <Headset className="w-4 h-4" />
                                    <span>Low Vision Support</span>
                                </a>
                            </div>
                        </div>

                        {/* Related Articles */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Related Articles</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">How to Choose the Right Eyeglasses for Your Face Shape</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">The Truth About Blue Light and Eye Strain</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Contact Lens Care: Dos and Don'ts</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Nutrition for Optimal Eye Health</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}