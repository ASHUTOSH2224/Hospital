"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, Eye, ClipboardList, HeartPulse, Glasses, AlertCircle, Clock, BookOpen, Mail } from "lucide-react"

export default function ComprehensiveEyeExamsGuide() {
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

    const tabs = ["Overview", "Tests", "Preparation", "Results"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Comprehensive Eye Exams: What to Expect During Your Routine Examination
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
                                A comprehensive eye exam is about much more than just determining your prescription for glasses or contacts. It's an essential evaluation of your overall eye health and can detect early signs of systemic diseases. This guide walks you through what to expect during a complete eye examination.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                                    alt="Optometrist performing an eye exam"
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
                                    <li>A comprehensive eye exam typically takes 30-60 minutes</li>
                                    <li>Adults should have exams every 1-2 years, more frequently if risk factors exist</li>
                                    <li>Eye exams can detect conditions like diabetes, high blood pressure, and neurological disorders</li>
                                    <li>Special tests evaluate eye health, vision quality, and how your eyes work together</li>
                                    <li>Preparation includes bringing current glasses, medications list, and insurance information</li>
                                </ul>
                            </div>

                            {/* Importance Section */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Eye className="w-8 h-8 text-blue-600 mr-2" />
                                    Why Comprehensive Eye Exams Matter
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Regular eye exams are crucial for maintaining good vision and overall health. According to the <a href="#" className="text-blue-600 hover:underline">American Optometric Association</a>, many eye diseases show no symptoms in early stages. Comprehensive exams can detect:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>Refractive errors (nearsightedness, farsightedness, astigmatism)</li>
                                    <li>Eye diseases like glaucoma, macular degeneration, and cataracts</li>
                                    <li>Systemic conditions including diabetes, high blood pressure, and autoimmune diseases</li>
                                    <li>Neurological problems like brain tumors or multiple sclerosis</li>
                                </ul>

                                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Recommended Exam Frequency</h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <h4 className="font-medium text-gray-900">Children</h4>
                                            <ul className="list-disc list-inside text-gray-700 ml-4">
                                                <li>First exam at 6 months</li>
                                                <li>Age 3 years</li>
                                                <li>Before first grade</li>
                                                <li>Every 2 years thereafter</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900">Adults</h4>
                                            <ul className="list-disc list-inside text-gray-700 ml-4">
                                                <li>Ages 18-60: Every 2 years</li>
                                                <li>Ages 61+: Annually</li>
                                                <li>More frequently if risk factors exist</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Exam Components Section */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <ClipboardList className="w-8 h-8 text-blue-600 mr-2" />
                                    Components of a Comprehensive Eye Exam
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    A complete eye examination includes multiple tests to evaluate different aspects of your vision and eye health. Here's what typically happens during your visit:
                                </p>

                                {/* Exam Steps Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Test</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purpose</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Discomfort</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            {/* Row 1 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Patient History</td>
                                                <td className="px-4 py-3">Review symptoms, medications, family history</td>
                                                <td className="px-4 py-3 whitespace-nowrap">5-10 min</td>
                                                <td className="px-4 py-3 whitespace-nowrap">None</td>
                                            </tr>
                                            {/* Row 2 */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Visual Acuity</td>
                                                <td className="px-4 py-3">Measure clarity of vision at various distances</td>
                                                <td className="px-4 py-3 whitespace-nowrap">3-5 min</td>
                                                <td className="px-4 py-3 whitespace-nowrap">None</td>
                                            </tr>
                                            {/* Row 3 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Refraction</td>
                                                <td className="px-4 py-3">Determine prescription for glasses/contacts</td>
                                                <td className="px-4 py-3 whitespace-nowrap">5-10 min</td>
                                                <td className="px-4 py-3 whitespace-nowrap">None</td>
                                            </tr>
                                            {/* Row 4 */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Slit Lamp Exam</td>
                                                <td className="px-4 py-3">Microscopic examination of eye structures</td>
                                                <td className="px-4 py-3 whitespace-nowrap">5-7 min</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Mild (bright light)</td>
                                            </tr>
                                            {/* Row 5 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Tonometry</td>
                                                <td className="px-4 py-3">Measure intraocular pressure (glaucoma test)</td>
                                                <td className="px-4 py-3 whitespace-nowrap">1-2 min per eye</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Mild (air puff or probe)</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <Eye className="w-6 h-6 text-blue-600 mr-2" />
                                            Visual Acuity Testing
                                        </h3>
                                        <p className="text-gray-700">
                                            This familiar "letter chart" test measures how well you see at various distances. You'll cover one eye and read letters that get progressively smaller. The results are recorded as fractions (20/20, 20/40, etc.) indicating what size letter you can see at 20 feet compared to someone with normal vision.
                                        </p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <HeartPulse className="w-6 h-6 text-blue-600 mr-2" />
                                            Retinal Examination
                                        </h3>
                                        <p className="text-gray-700">
                                            After dilating your pupils with eye drops, your doctor uses special lenses to examine the retina, optic nerve, and blood vessels at the back of your eye. This can reveal conditions like diabetes, high blood pressure, macular degeneration, and retinal detachments.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Special Tests Section */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Specialized Eye Tests</h2>

                                <p className="text-gray-700 mb-6">
                                    Depending on your age, risk factors, and initial findings, your eye doctor may perform additional tests:
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div className="border border-gray-200 rounded-lg p-4">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                                            <Glasses className="w-5 h-5 text-blue-600 mr-2" />
                                            Visual Field Test
                                        </h3>
                                        <p className="text-gray-700 mb-2">
                                            Measures your peripheral (side) vision to detect blind spots that could indicate glaucoma, neurological problems, or retinal conditions.
                                        </p>
                                        <p className="text-gray-700">
                                            <span className="font-semibold">Process:</span> You'll focus on a central target and indicate when you see lights appear in your peripheral vision.
                                        </p>
                                    </div>
                                    <div className="border border-gray-200 rounded-lg p-4">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                                            <AlertCircle className="w-5 h-5 text-blue-600 mr-2" />
                                            Corneal Topography
                                        </h3>
                                        <p className="text-gray-700 mb-2">
                                            Creates a detailed map of your cornea's surface, essential for contact lens fittings and detecting conditions like keratoconus.
                                        </p>
                                        <p className="text-gray-700">
                                            <span className="font-semibold">Process:</span> A special camera captures images of your cornea while you look at a target.
                                        </p>
                                    </div>
                                    <div className="border border-gray-200 rounded-lg p-4">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                                            <Clock className="w-5 h-5 text-blue-600 mr-2" />
                                            OCT Scan
                                        </h3>
                                        <p className="text-gray-700 mb-2">
                                            Optical Coherence Tomography provides cross-sectional images of the retina, allowing early detection of glaucoma and macular conditions.
                                        </p>
                                        <p className="text-gray-700">
                                            <span className="font-semibold">Process:</span> You'll place your chin on a rest while an infrared camera scans your eyes (non-contact).
                                        </p>
                                    </div>
                                    <div className="border border-gray-200 rounded-lg p-4">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                                            <Eye className="w-5 h-5 text-blue-600 mr-2" />
                                            Color Vision Testing
                                        </h3>
                                        <p className="text-gray-700 mb-2">
                                            Evaluates your ability to distinguish colors, important for certain occupations and detecting inherited color deficiencies.
                                        </p>
                                        <p className="text-gray-700">
                                            <span className="font-semibold">Process:</span> You'll identify numbers or patterns in colored dot tests (Ishihara plates).
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Preparation Section */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Prepare for Your Eye Exam</h2>

                                <p className="text-gray-700 mb-4">
                                    Proper preparation helps ensure your exam is thorough and efficient. Follow these guidelines:
                                </p>

                                <ol className="list-decimal list-inside text-gray-700 mb-6 ml-4 space-y-3">
                                    <li>
                                        <span className="font-semibold">Bring current eyewear:</span> Your glasses and/or contacts, including any reading glasses you use
                                    </li>
                                    <li>
                                        <span className="font-semibold">Prepare your medical history:</span> List of medications, allergies, and family eye health history
                                    </li>
                                    <li>
                                        <span className="font-semibold">Note symptoms:</span> Write down any vision problems, eye discomfort, or changes you've noticed
                                    </li>
                                    <li>
                                        <span className="font-semibold">Insurance information:</span> Bring your vision/medical insurance cards and photo ID
                                    </li>
                                    <li>
                                        <span className="font-semibold">Plan for dilation:</span> If you're having dilation, bring sunglasses and arrange for transportation if needed
                                    </li>
                                </ol>

                                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">What to Expect After Dilation</h3>
                                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                                        <li>Blurry near vision for 2-4 hours (reading may be difficult)</li>
                                        <li>Light sensitivity - sunglasses are essential</li>
                                        <li>Possible difficulty focusing between near and far objects</li>
                                        <li>Effects typically wear off within 4-6 hours</li>
                                        <li>No permanent changes to your vision</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Understanding Results */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Your Exam Results</h2>

                                <p className="text-gray-700 mb-6">
                                    Your eye doctor will explain all findings, but here's how to interpret common results:
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Prescription Terms</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li><span className="font-semibold">OD:</span> Right eye (oculus dexter)</li>
                                            <li><span className="font-semibold">OS:</span> Left eye (oculus sinister)</li>
                                            <li><span className="font-semibold">Sphere (SPH):</span> Nearsightedness (-) or farsightedness (+)</li>
                                            <li><span className="font-semibold">Cylinder (CYL):</span> Amount of astigmatism</li>
                                            <li><span className="font-semibold">Axis:</span> Orientation of astigmatism (0-180°)</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Common Findings</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li><span className="font-semibold">20/20 vision:</span> Normal distance vision</li>
                                            <li><span className="font-semibold">IOP 10-21 mmHg:</span> Normal eye pressure range</li>
                                            <li><span className="font-semibold">Healthy optic nerve:</span> No signs of glaucoma</li>
                                            <li><span className="font-semibold">Clear lens:</span> No significant cataract development</li>
                                            <li><span className="font-semibold">Dry eye signs:</span> May recommend artificial tears or other treatments</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Pro Tip:</h3>
                                    <p className="text-gray-700">
                                        Ask for a copy of your prescription after the exam. By law (in the U.S.), your eye doctor must provide it to you, even if you don't ask. This allows you to comparison shop for glasses or contacts.
                                    </p>
                                </div>
                            </section>

                            {/* Follow-Up Section */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Follow-Up and Next Steps</h2>

                                <p className="text-gray-700 mb-4">
                                    Depending on your exam results, your doctor may recommend:
                                </p>

                                <div className="space-y-4">
                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">Routine Monitoring</h3>
                                        <p className="text-gray-700">
                                            If your exam is normal, you'll simply schedule your next check-up in 1-2 years. Children and seniors typically need exams more frequently.
                                        </p>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">Treatment Plans</h3>
                                        <p className="text-gray-700">
                                            For conditions like dry eye, allergies, or minor refractive errors, your doctor may prescribe eye drops, glasses, or contact lenses.
                                        </p>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">Referrals</h3>
                                        <p className="text-gray-700">
                                            If serious conditions are detected (glaucoma, retinal issues, signs of systemic disease), you may be referred to a specialist or your primary care physician.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Comprehensive eye exams are a vital part of your healthcare routine, offering insights into both your ocular and overall health. Modern technology allows eye care professionals to detect problems earlier than ever before, often before symptoms develop.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    Remember that vision changes can be subtle and gradual. Regular exams ensure you maintain the best possible vision and catch any developing conditions at their most treatable stages.
                                </p>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "Your eyes are windows to both the world and your health. Regular comprehensive exams are the best way to keep that view clear and vibrant throughout your life."
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
                                            Dr. Jonathan Lee, OD
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
                                            Updated on June 20, 2024
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
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Eye Exam Quick Reference</h3>
                            <div className="space-y-4">
                                <div className="border-b border-gray-200 pb-4">
                                    <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                                        <Clock className="w-5 h-5 text-blue-600 mr-2" />
                                        Duration
                                    </h4>
                                    <p className="text-sm text-gray-600">30-60 minutes for comprehensive exam</p>
                                </div>
                                <div className="border-b border-gray-200 pb-4">
                                    <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                                        <AlertCircle className="w-5 h-5 text-blue-600 mr-2" />
                                        Dilation Effects
                                    </h4>
                                    <p className="text-sm text-gray-600">Lasts 4-6 hours, brings light sensitivity</p>
                                </div>
                                <div className="border-b border-gray-200 pb-4">
                                    <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                                        <Eye className="w-5 h-5 text-blue-600 mr-2" />
                                        Frequency
                                    </h4>
                                    <p className="text-sm text-gray-600">Every 2 years for adults, annually for seniors</p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                                        <ClipboardList className="w-5 h-5 text-blue-600 mr-2" />
                                        What to Bring
                                    </h4>
                                    <p className="text-sm text-gray-600">Current glasses, medications list, insurance info</p>
                                </div>
                            </div>
                        </div>

                        {/* Cost Estimates */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Average Eye Exam Costs</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span className="font-medium">Service</span>
                                    <span className="font-medium">Cost Range</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Basic Vision Exam</span>
                                    <span className="text-blue-600">$50-$100</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Comprehensive Exam</span>
                                    <span className="text-blue-600">$100-$200</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Contact Lens Fitting</span>
                                    <span className="text-blue-600">$75-$150</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Specialty Testing (OCT, etc.)</span>
                                    <span className="text-blue-600">$50-$200 extra</span>
                                </div>
                            </div>
                            <p className="text-xs text-gray-600 mt-3">*Prices vary by location and provider</p>
                        </div>

                        {/* Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Further Reading</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-center">
                                        <BookOpen className="w-4 h-4 mr-2" />
                                        Understanding Your Eyeglass Prescription
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
                                        How Eye Exams Detect Systemic Diseases
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