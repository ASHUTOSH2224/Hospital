"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, Eye, Glasses, Sun, Monitor, HeartPulse, BookOpen, Shield, Star } from "lucide-react"

export default function ComprehensiveEyeHealthGuide() {
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

    const tabs = ["Overview", "Conditions", "Prevention", "Treatment", "Resources"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Comprehensive Eye Health Guide
                            </h1>
                            <p className="text-lg text-gray-700 mb-2">
                                Your complete resource for maintaining optimal vision and eye health
                            </p>

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
                                This comprehensive guide provides essential information about eye health, from understanding your vision assessment through treatment options and preventive care. Learn about different eye conditions and how to maintain healthy vision throughout your life.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1577401239170-897942555fb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                    alt="Eye examination with modern equipment"
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
                                    <li>Regular eye exams can detect problems before symptoms appear</li>
                                    <li>80% of vision impairment is preventable or treatable</li>
                                    <li>Digital eye strain affects nearly 60% of adults</li>
                                    <li>UV protection is crucial for preventing long-term eye damage</li>
                                    <li>Diet and lifestyle significantly impact eye health</li>
                                </ul>
                            </div>

                            {/* Understanding Eye Anatomy */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Eye className="w-8 h-8 text-blue-600 mr-2" />
                                    Understanding Eye Anatomy
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    The human eye is a complex organ with many components working together to provide vision. Understanding basic eye anatomy helps in recognizing symptoms and understanding treatments.
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Major Eye Structures</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li><strong>Cornea:</strong> Clear front surface that bends light</li>
                                            <li><strong>Pupil:</strong> Black center that adjusts to light</li>
                                            <li><strong>Iris:</strong> Colored part controlling pupil size</li>
                                            <li><strong>Lens:</strong> Focuses light onto retina</li>
                                            <li><strong>Retina:</strong> Light-sensitive tissue at the back</li>
                                            <li><strong>Optic Nerve:</strong> Transmits visual information to brain</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">How Vision Works</h3>
                                        <ol className="list-decimal list-inside text-gray-700 space-y-2">
                                            <li>Light enters through the cornea</li>
                                            <li>Pupil adjusts to control light amount</li>
                                            <li>Lens focuses light onto retina</li>
                                            <li>Retina converts light to electrical signals</li>
                                            <li>Optic nerve carries signals to brain</li>
                                            <li>Brain interprets signals as images</li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Did You Know?</h3>
                                    <p className="text-gray-700">
                                        The eye can distinguish about 10 million different colors and process images in as little as 13 milliseconds. Your eyes contain over 2 million working parts and are the second most complex organ after the brain.
                                    </p>
                                </div>
                            </section>

                            {/* Common Eye Conditions */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Glasses className="w-8 h-8 text-blue-600 mr-2" />
                                    Common Eye Conditions
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Eye conditions range from minor irritations to serious diseases that can lead to permanent vision loss. Early detection and treatment are crucial for preserving vision.
                                </p>

                                {/* Conditions Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Condition</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prevalence</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Symptoms</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Risk Factors</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 font-medium text-gray-900">Refractive Errors</td>
                                                <td className="px-4 py-3">150M+ Americans</td>
                                                <td className="px-4 py-3">Blurry vision, headaches, eye strain</td>
                                                <td className="px-4 py-3">Genetics, age, diabetes</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 font-medium text-gray-900">Cataracts</td>
                                                <td className="px-4 py-3">24.4M Americans 40+</td>
                                                <td className="px-4 py-3">Cloudy vision, glare, faded colors</td>
                                                <td className="px-4 py-3">Aging, UV exposure, smoking</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 font-medium text-gray-900">Glaucoma</td>
                                                <td className="px-4 py-3">3M Americans</td>
                                                <td className="px-4 py-3">Peripheral vision loss (late symptoms)</td>
                                                <td className="px-4 py-3">High eye pressure, family history</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 font-medium text-gray-900">Macular Degeneration</td>
                                                <td className="px-4 py-3">11M Americans</td>
                                                <td className="px-4 py-3">Central vision loss, distorted lines</td>
                                                <td className="px-4 py-3">Aging, smoking, genetics</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 font-medium text-gray-900">Diabetic Retinopathy</td>
                                                <td className="px-4 py-3">7.7M Americans</td>
                                                <td className="px-4 py-3">Fluctuating vision, floaters</td>
                                                <td className="px-4 py-3">Diabetes duration, poor control</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">1</span>
                                            Most Common: Refractive Errors
                                        </h3>
                                        <p className="text-gray-700">
                                            Nearsightedness, farsightedness, and astigmatism affect over 150 million Americans. These conditions are easily corrected with glasses, contacts, or refractive surgery like LASIK.
                                        </p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">2</span>
                                            Most Preventable: UV Damage
                                        </h3>
                                        <p className="text-gray-700">
                                            Cumulative UV exposure contributes to cataracts and macular degeneration. Wearing 100% UV-blocking sunglasses can prevent much of this damage.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Eye Health Prevention */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Shield className="w-8 h-8 text-blue-600 mr-2" />
                                    Eye Health Prevention
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Protecting your vision starts with daily habits and regular checkups. Follow these evidence-based recommendations to maintain healthy eyes throughout your life.
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Daily Eye Protection</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Wear sunglasses blocking 100% of UVA/UVB rays</li>
                                            <li>Use protective eyewear during sports and home projects</li>
                                            <li>Follow the 20-20-20 rule for digital screens</li>
                                            <li>Maintain proper lighting when reading or working</li>
                                            <li>Keep contacts clean and follow replacement schedule</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Nutrition for Eye Health</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Eat leafy greens (kale, spinach) for lutein</li>
                                            <li>Consume fatty fish for omega-3s</li>
                                            <li>Include colorful fruits/vegetables for antioxidants</li>
                                            <li>Choose whole grains over refined carbohydrates</li>
                                            <li>Stay hydrated to maintain tear production</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Digital Eye Strain Prevention</h3>
                                    <p className="text-gray-700">
                                        With average screen time exceeding 7 hours daily, digital eye strain affects 59% of adults. Reduce strain by positioning screens 20-28 inches away, slightly below eye level, and using matte screen filters to reduce glare.
                                    </p>
                                </div>

                                {/* Recommended Exam Schedule */}
                                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Recommended Eye Exam Schedule</h3>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full bg-blue-50">
                                            <thead>
                                                <tr>
                                                    <th className="px-4 py-2 text-left">Age Group</th>
                                                    <th className="px-4 py-2 text-left">Frequency</th>
                                                    <th className="px-4 py-2 text-left">Special Considerations</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="px-4 py-2">Birth-24 months</td>
                                                    <td className="px-4 py-2">At 6-12 months</td>
                                                    <td className="px-4 py-2">Premature infants need earlier screening</td>
                                                </tr>
                                                <tr className="bg-blue-100">
                                                    <td className="px-4 py-2">2-5 years</td>
                                                    <td className="px-4 py-2">At 3 years</td>
                                                    <td className="px-4 py-2">Check for amblyopia risk factors</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-2">6-18 years</td>
                                                    <td className="px-4 py-2">Before 1st grade, then every 2 years</td>
                                                    <td className="px-4 py-2">More frequent if wearing correction</td>
                                                </tr>
                                                <tr className="bg-blue-100">
                                                    <td className="px-4 py-2">19-40 years</td>
                                                    <td className="px-4 py-2">Every 5-10 years</td>
                                                    <td className="px-4 py-2">Every 2-4 years if higher risk</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-2">41-60 years</td>
                                                    <td className="px-4 py-2">Every 2-4 years</td>
                                                    <td className="px-4 py-2">Annual after 55 or with conditions</td>
                                                </tr>
                                                <tr className="bg-blue-100">
                                                    <td className="px-4 py-2">61+ years</td>
                                                    <td className="px-4 py-2">Every 1-2 years</td>
                                                    <td className="px-4 py-2">Monitor for age-related conditions</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </section>

                            {/* Treatment Options */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <HeartPulse className="w-8 h-8 text-blue-600 mr-2" />
                                    Treatment Options
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Modern ophthalmology offers a range of treatments from simple corrective lenses to advanced surgical procedures. The appropriate treatment depends on your specific condition and overall eye health.
                                </p>

                                <div className="space-y-6">
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Corrective Lenses</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Eyeglasses</h4>
                                                <p className="text-gray-700">Most common solution for refractive errors. Modern lenses include photochromic, blue-light filtering, and progressive options.</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">Contact Lenses</h4>
                                                <p className="text-gray-700">Available in daily disposable, extended wear, toric (astigmatism), and multifocal designs. Proper hygiene is essential.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Refractive Surgery</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">LASIK</h4>
                                                <p className="text-gray-700">Laser reshapes cornea to correct vision. 96% satisfaction rate. Recovery typically 1-2 days.</p>
                                            </div>
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">PRK</h4>
                                                <p className="text-gray-700">Alternative for thin corneas. Longer recovery but similar long-term results.</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">SMILE</h4>
                                                <p className="text-gray-700">Newer minimally invasive procedure with quick recovery.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Medical Treatments</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Glaucoma</h4>
                                                <p className="text-gray-700">Eye drops, laser treatments (SLT), and surgical options to reduce intraocular pressure.</p>
                                            </div>
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">AMD</h4>
                                                <p className="text-gray-700">Anti-VEGF injections for wet AMD, AREDS2 supplements for dry AMD.</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">Cataract</h4>
                                                <p className="text-gray-700">Outpatient surgery with intraocular lens implants. Over 4 million performed annually in US.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Children's Eye Health */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Children's Eye Health</h2>

                                <p className="text-gray-700 mb-6">
                                    80% of learning is visual, yet 1 in 4 children has an undiagnosed vision problem. Early detection is crucial as the visual system develops most rapidly before age 7.
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Warning Signs in Children</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Sitting too close to TV or holding books close</li>
                                            <li>Squinting or tilting head to see better</li>
                                            <li>Rubbing eyes excessively</li>
                                            <li>Sensitivity to light or excessive tearing</li>
                                            <li>Avoiding reading or other close activities</li>
                                            <li>Short attention span for visual tasks</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Developmental Milestones</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li><strong>Birth-4 months:</strong> Begins tracking moving objects</li>
                                            <li><strong>5-8 months:</strong> Develops depth perception</li>
                                            <li><strong>9-12 months:</strong> Grasps objects accurately</li>
                                            <li><strong>1-2 years:</strong> Recognizes pictures in books</li>
                                            <li><strong>3-5 years:</strong> Copies shapes, recognizes letters</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-blue-50 rounded-lg p-4">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">School-Age Vision Needs</h3>
                                    <p className="text-gray-700 mb-2">
                                        The American Optometric Association recommends comprehensive eye exams:
                                    </p>
                                    <ul className="list-disc list-inside text-gray-700 mb-2">
                                        <li>Before first grade</li>
                                        <li>Every 2 years if no vision correction needed</li>
                                        <li>Annually if wearing glasses/contacts</li>
                                    </ul>
                                    <p className="text-gray-700">
                                        Many vision problems are misdiagnosed as learning disabilities. A comprehensive eye exam can rule out visual causes of learning difficulties.
                                    </p>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Your eyesight is one of your most precious senses, yet many people take it for granted until problems arise. By understanding common eye conditions, practicing preventive care, and getting regular professional evaluations, you can significantly improve your chances of maintaining good vision throughout your life.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    Remember that many serious eye diseases develop without noticeable symptoms in their early stages. Don't wait for vision problems to schedule an eye exam—proactive care is the best strategy for preserving your sight.
                                </p>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "Vision is the art of seeing what is invisible to others." — Jonathan Swift
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
                                            Dr. Emily Chen, OD
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600 mb-1">
                                        — Written by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            Vision Health Team
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
                                    Monthly vision health updates, prevention tips, and news about treatments delivered to your inbox.
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

                        {/* Quick Links */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Eye Health Links</h3>
                            <div className="space-y-3">
                                <a href="#" className="block p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors flex items-center">
                                    <Eye className="w-5 h-5 text-blue-600 mr-2" />
                                    <span>Find an Eye Doctor Near You</span>
                                </a>
                                <a href="#" className="block p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors flex items-center">
                                    <BookOpen className="w-5 h-5 text-blue-600 mr-2" />
                                    <span>Children's Vision Checklist</span>
                                </a>
                                <a href="#" className="block p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors flex items-center">
                                    <Sun className="w-5 h-5 text-blue-600 mr-2" />
                                    <span>Sunglasses Buying Guide</span>
                                </a>
                                <a href="#" className="block p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors flex items-center">
                                    <Monitor className="w-5 h-5 text-blue-600 mr-2" />
                                    <span>Digital Eye Strain Test</span>
                                </a>
                            </div>
                        </div>

                        {/* Emergency Symptoms */}
                        <div className="bg-red-50 border-l-4 border-red-400 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                                Seek Immediate Care For:
                            </h3>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li>Sudden vision loss (partial or complete)</li>
                                <li>Severe eye pain or injury</li>
                                <li>Flashes of light or sudden floaters</li>
                                <li>Double vision or distorted vision</li>
                                <li>Red eye with headache/nausea</li>
                            </ul>
                        </div>

                        {/* Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Trusted Resources</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        American Academy of Ophthalmology
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        National Eye Institute
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        Prevent Blindness
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        American Optometric Association
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