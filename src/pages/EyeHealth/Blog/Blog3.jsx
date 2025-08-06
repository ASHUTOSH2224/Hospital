"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, Eye, Droplet, Sun, Shield, BookOpen, Heart, AlertTriangle } from "lucide-react"

export default function EyeConditionsGuide() {
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

    const tabs = ["Overview", "Conditions", "Treatments", "Prevention"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Managing Common Eye Conditions: A Complete Guide
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
                                Eye health is crucial for maintaining quality of life, yet many people struggle with common conditions like dry eyes, glaucoma, and cataracts. This comprehensive guide provides evidence-based strategies for managing these conditions, preserving your vision, and knowing when to seek professional help.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsMgzclV7eGVCwVCQejh1aq_9Y-rQv6pws7A&s"
                                    alt="Close-up of human eye showing detailed iris"
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
                                    <li>Over 12 million Americans aged 40+ have vision impairment</li>
                                    <li>Early detection can prevent 50% of vision loss cases</li>
                                    <li>Nutrition plays a crucial role in eye health</li>
                                    <li>Digital eye strain affects 65% of adults regularly</li>
                                    <li>Annual eye exams are recommended after age 40</li>
                                </ul>
                            </div>

                            {/* Understanding Eye Health */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Eye className="w-8 h-8 text-blue-600 mr-2" />
                                    Understanding Eye Health Fundamentals
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    The human eye is a complex organ that requires proper care and maintenance. According to the <a href="#" className="text-blue-600 hover:underline">American Academy of Ophthalmology</a>, regular eye exams are essential because many eye diseases show no early symptoms. The most common vision problems include:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li><strong>Refractive errors</strong> (nearsightedness, farsightedness, astigmatism)</li>
                                    <li><strong>Age-related conditions</strong> (cataracts, macular degeneration)</li>
                                    <li><strong>Chronic conditions</strong> (glaucoma, diabetic retinopathy)</li>
                                    <li><strong>Environmental factors</strong> (dry eye syndrome, digital eye strain)</li>
                                </ul>

                                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Vision Statistics You Should Know</h3>
                                    <p className="text-gray-700">
                                        The <a href="#" className="text-blue-600 hover:underline">CDC reports</a> that vision disability is one of the top 10 disabilities among adults. By age 65, 1 in 3 Americans will have some form of vision-reducing eye disease. However, 80% of vision impairment is preventable or treatable with early detection.
                                    </p>
                                </div>
                            </section>

                            {/* Common Eye Conditions */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Check className="w-8 h-8 text-blue-600 mr-2" />
                                    Common Eye Conditions and Their Management
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Below is a detailed breakdown of the most prevalent eye conditions, their symptoms, risk factors, and management strategies:
                                </p>

                                {/* Conditions Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Condition</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Symptoms</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Risk Factors</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Management</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            {/* Dry Eye Syndrome */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Dry Eye Syndrome</td>
                                                <td className="px-4 py-3">
                                                    <ul className="list-disc list-inside">
                                                        <li>Burning sensation</li>
                                                        <li>Redness</li>
                                                        <li>Blurred vision</li>
                                                    </ul>
                                                </td>
                                                <td className="px-4 py-3">
                                                    <ul className="list-disc list-inside">
                                                        <li>Aging</li>
                                                        <li>Screen time</li>
                                                        <li>Dry environments</li>
                                                    </ul>
                                                </td>
                                                <td className="px-4 py-3">
                                                    <ul className="list-disc list-inside">
                                                        <li>Artificial tears</li>
                                                        <li>Humidifiers</li>
                                                        <li>Omega-3 supplements</li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            
                                            {/* Glaucoma */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Glaucoma</td>
                                                <td className="px-4 py-3">
                                                    <ul className="list-disc list-inside">
                                                        <li>Peripheral vision loss</li>
                                                        <li>Eye pain (acute)</li>
                                                        <li>Halos around lights</li>
                                                    </ul>
                                                </td>
                                                <td className="px-4 py-3">
                                                    <ul className="list-disc list-inside">
                                                        <li>High eye pressure</li>
                                                        <li>Family history</li>
                                                        <li>Age over 60</li>
                                                    </ul>
                                                </td>
                                                <td className="px-4 py-3">
                                                    <ul className="list-disc list-inside">
                                                        <li>Prescription eye drops</li>
                                                        <li>Laser treatment</li>
                                                        <li>Surgery (in severe cases)</li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            
                                            {/* Cataracts */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Cataracts</td>
                                                <td className="px-4 py-3">
                                                    <ul className="list-disc list-inside">
                                                        <li>Cloudy vision</li>
                                                        <li>Difficulty seeing at night</li>
                                                        <li>Fading colors</li>
                                                    </ul>
                                                </td>
                                                <td className="px-4 py-3">
                                                    <ul className="list-disc list-inside">
                                                        <li>Aging</li>
                                                        <li>Diabetes</li>
                                                        <li>UV exposure</li>
                                                    </ul>
                                                </td>
                                                <td className="px-4 py-3">
                                                    <ul className="list-disc list-inside">
                                                        <li>Brighter lighting</li>
                                                        <li>Anti-glare sunglasses</li>
                                                        <li>Surgery when needed</li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            
                                            {/* Macular Degeneration */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Macular Degeneration</td>
                                                <td className="px-4 py-3">
                                                    <ul className="list-disc list-inside">
                                                        <li>Distorted vision</li>
                                                        <li>Dark areas in vision</li>
                                                        <li>Difficulty recognizing faces</li>
                                                    </ul>
                                                </td>
                                                <td className="px-4 py-3">
                                                    <ul className="list-disc list-inside">
                                                        <li>Age over 50</li>
                                                        <li>Smoking</li>
                                                        <li>Family history</li>
                                                    </ul>
                                                </td>
                                                <td className="px-4 py-3">
                                                    <ul className="list-disc list-inside">
                                                        <li>AREDS2 supplements</li>
                                                        <li>Anti-VEGF injections</li>
                                                        <li>Low vision aids</li>
                                                    </ul>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <Droplet className="w-5 h-5 text-blue-600 mr-2" />
                                            Dry Eye Relief Strategies
                                        </h3>
                                        <p className="text-gray-700">
                                            For chronic dry eyes, consider:
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                                            <li>Warm compresses twice daily</li>
                                            <li>Blinking exercises (20-20-20 rule)</li>
                                            <li>Preservative-free artificial tears</li>
                                            <li>Punctal plugs for severe cases</li>
                                        </ul>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <AlertTriangle className="w-5 h-5 text-blue-600 mr-2" />
                                            When to Seek Immediate Care
                                        </h3>
                                        <p className="text-gray-700">
                                            Emergency symptoms include:
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                                            <li>Sudden vision loss</li>
                                            <li>Severe eye pain</li>
                                            <li>Seeing flashes/floaters</li>
                                            <li>Double vision</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Treatment Options */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Heart className="w-8 h-8 text-blue-600 mr-2" />
                                    Modern Treatment Options
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Advancements in ophthalmology have revolutionized eye care. Here's a comparison of current treatment modalities:
                                </p>

                                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                                    <div className="grid grid-cols-4 gap-4 text-center font-medium mb-2">
                                        <div>Condition</div>
                                        <div>First-Line Treatment</div>
                                        <div>Advanced Options</div>
                                        <div>Success Rate</div>
                                    </div>
                                    <div className="grid grid-cols-4 gap-4 text-center mb-1">
                                        <div className="font-medium">Dry Eyes</div>
                                        <div>Artificial tears</div>
                                        <div>Lipiflow, Serum tears</div>
                                        <div>70-85%</div>
                                    </div>
                                    <div className="grid grid-cols-4 gap-4 text-center mb-1 bg-blue-50 p-1 rounded">
                                        <div className="font-medium">Glaucoma</div>
                                        <div>Prostaglandin drops</div>
                                        <div>SLT laser, MIGS</div>
                                        <div>80-90%</div>
                                    </div>
                                    <div className="grid grid-cols-4 gap-4 text-center mb-1">
                                        <div className="font-medium">Cataracts</div>
                                        <div>Glasses adjustment</div>
                                        <div>Phacoemulsification</div>
                                        <div>95%</div>
                                    </div>
                                    <div className="grid grid-cols-4 gap-4 text-center">
                                        <div className="font-medium">AMD</div>
                                        <div>AREDS2 vitamins</div>
                                        <div>Anti-VEGF injections</div>
                                        <div>60-70%</div>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Emerging Therapies</h3>
                                <p className="text-gray-700 mb-4">
                                    Exciting developments in eye care include:
                                </p>
                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li><strong>Gene therapy</strong> for inherited retinal diseases (FDA-approved Luxturna)</li>
                                    <li><strong>Bionic eyes</strong> (Argus II retinal prosthesis)</li>
                                    <li><strong>Stem cell treatments</strong> for corneal and retinal regeneration</li>
                                    <li><strong>Extended-release drug implants</strong> reducing injection frequency</li>
                                </ul>
                            </section>

                            {/* Prevention Strategies */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Shield className="w-8 h-8 text-blue-600 mr-2" />
                                    Prevention and Daily Eye Care
                                </h2>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Nutrition for Eye Health</h3>
                                        <p className="text-gray-700 mb-2">
                                            The <a href="#" className="text-blue-600 hover:underline">Age-Related Eye Disease Study (AREDS)</a> found these nutrients particularly beneficial:
                                        </p>
                                        <ol className="list-decimal list-inside text-gray-700 space-y-1">
                                            <li>Lutein & Zeaxanthin (leafy greens, eggs)</li>
                                            <li>Omega-3 fatty acids (fatty fish, flaxseeds)</li>
                                            <li>Vitamin C (citrus fruits, bell peppers)</li>
                                            <li>Vitamin E (nuts, seeds)</li>
                                            <li>Zinc (oysters, beef)</li>
                                        </ol>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Lifestyle Modifications</h3>
                                        <p className="text-gray-700 mb-2">
                                            Simple changes can significantly impact eye health:
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>Wear UV-protective sunglasses year-round</li>
                                            <li>Follow the 20-20-20 rule for digital screens</li>
                                            <li>Maintain healthy blood pressure and sugar levels</li>
                                            <li>Quit smoking (doubles risk of AMD)</li>
                                            <li>Use proper lighting when reading</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Pro Tip:</h3>
                                    <p className="text-gray-700">
                                        Keep artificial tears in the refrigerator - the cool temperature provides extra relief for dry, irritated eyes.
                                    </p>
                                </div>
                            </section>

                            {/* Eye Exam Guide */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Eye Exam Frequency Guide</h2>

                                <div className="space-y-6">
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Children & Teens</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Birth to 24 months</h4>
                                                <p className="text-gray-700">First screening at 6 months (or as recommended)</p>
                                            </div>
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">2-5 years</h4>
                                                <p className="text-gray-700">At least once between ages 3-5</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">6-18 years</h4>
                                                <p className="text-gray-700">Before first grade, then every 2 years</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Adults</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">20-39 years</h4>
                                                <p className="text-gray-700">Every 5-10 years if healthy</p>
                                            </div>
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">40-54 years</h4>
                                                <p className="text-gray-700">Every 2-4 years</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">55+ years</h4>
                                                <p className="text-gray-700">Every 1-2 years (annual after 65)</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">High-Risk Groups</h3>
                                        </div>
                                        <div className="p-4">
                                            <p className="text-gray-700">
                                                Those with diabetes, family history of eye disease, or previous eye injuries should have annual exams regardless of age. African Americans should begin glaucoma screenings by age 40.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Myths vs Facts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Eye Health Myths Debunked</h2>

                                <div className="space-y-4">
                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">Myth: Reading in dim light ruins your eyesight</h3>
                                        <p className="text-gray-700">
                                            <span className="font-semibold">Fact:</span> While it may cause temporary eye strain, it doesn't cause permanent damage. However, proper lighting makes reading more comfortable.
                                        </p>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">Myth: Carrots are the best food for eyes</h3>
                                        <p className="text-gray-700">
                                            <span className="font-semibold">Fact:</span> While carrots (rich in beta-carotene) are good, leafy greens (with lutein/zeaxanthin) and omega-3 rich foods are equally or more important for eye health.
                                        </p>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">Myth: If you don't need glasses, your eyes are healthy</h3>
                                        <p className="text-gray-700">
                                            <span className="font-semibold">Fact:</span> Many serious eye diseases like glaucoma have no early symptoms. Regular comprehensive exams are crucial regardless of vision clarity.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Your vision is a precious gift that deserves proactive care. While aging inevitably brings some changes to our eyes, modern medicine offers remarkable solutions to preserve and protect our sight. The key is early detection through regular exams and adopting healthy lifestyle habits.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    Remember that eye health is connected to overall health. Conditions like diabetes and hypertension can significantly impact your vision, so comprehensive wellness is the best approach to maintaining good eyesight throughout your life.
                                </p>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "An ounce of prevention is worth a pound of cure when it comes to eye health. Don't wait for symptoms - schedule that eye exam today."
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
                                            Dr. Emily Parker, Ophthalmologist
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
                                <h3 className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-2">EYE HEALTH NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get vision care tips</h4>
                                <p className="text-gray-700 text-sm">
                                    Monthly updates on eye health, new treatments, and preventive care strategies.
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

                        {/* Popular Articles */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Related Articles</h3>
                            <div className="space-y-4">
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Digital eye strain" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Combating Digital Eye Strain</h4>
                                            <p className="text-sm text-gray-600">5 min read</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Nutrition for eyes" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Top Foods for Eye Health</h4>
                                            <p className="text-sm text-gray-600">7 min read</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="https://images.unsplash.com/photo-1573497491765-dccce02b29df?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Senior eye care" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Aging and Vision Changes</h4>
                                            <p className="text-sm text-gray-600">6 min read</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Eye Emergency Guide */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">When to Seek Emergency Care</h3>
                            <div className="space-y-3">
                                <div className="flex items-start gap-2">
                                    <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                    <span>Sudden vision loss in one or both eyes</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                    <span>Severe eye pain or injury</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                    <span>Sudden increase in floaters/flashes</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                    <span>Halos around lights with headache</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                    <span>Double vision or curtain-like vision loss</span>
                                </div>
                            </div>
                        </div>

                        {/* Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Trusted Resources</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-start gap-2">
                                        <BookOpen className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                        American Academy of Ophthalmology
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-start gap-2">
                                        <BookOpen className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                        National Eye Institute
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-start gap-2">
                                        <BookOpen className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                        Prevent Blindness America
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-start gap-2">
                                        <BookOpen className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                        Glaucoma Research Foundation
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