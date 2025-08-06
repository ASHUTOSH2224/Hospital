"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, Eye, HeartPulse, ShieldAlert, ClipboardList, Star, Clock } from "lucide-react"

export default function EyeExaminationsGuide() {
    const [email, setEmail] = useState("")
    const [activeTab, setActiveTab] = useState("Benefits")

    const handleEmailSubmit = (e) => {
        e.preventDefault()
        console.log("Email submitted:", email)
        setEmail("")
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const tabs = ["Benefits", "Exam Types", "Conditions", "Prevention"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                The Critical Importance of Regular Eye Examinations
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
                                <span className="mx-2">•</span>
                                <Clock className="w-4 h-4 mr-1" />
                                <span className="text-sm">8 min read</span>
                            </div>

                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                Regular eye examinations are vital for maintaining good vision and overall health. Comprehensive eye exams can detect vision problems, eye diseases, and even systemic health issues before symptoms appear. Learn why eye exams should be an essential part of your healthcare routine.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80"
                                    alt="Eye examination being performed by an optometrist"
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
                                    <li>1 in 4 children has an undiagnosed vision problem affecting learning</li>
                                    <li>Comprehensive eye exams can detect early signs of diabetes and hypertension</li>
                                    <li>Adults should have exams every 1-2 years, seniors annually</li>
                                    <li>Many eye diseases show no symptoms until irreversible damage occurs</li>
                                    <li>Vision screenings are no substitute for comprehensive eye exams</li>
                                </ul>
                            </div>

                            {/* Why Eye Exams Matter */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Eye className="w-8 h-8 text-blue-600 mr-2" />
                                    Why Regular Eye Examinations Are Essential
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Many people mistakenly believe that if their vision seems fine, their eyes must be healthy. However, numerous sight-threatening conditions develop without noticeable symptoms. According to the <a href="#" className="text-blue-600 hover:underline">American Optometric Association</a>, comprehensive eye exams can reveal:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>Refractive errors (nearsightedness, farsightedness, astigmatism)</li>
                                    <li>Eye diseases (glaucoma, macular degeneration, cataracts)</li>
                                    <li>Systemic health conditions (diabetes, high blood pressure, autoimmune diseases)</li>
                                    <li>Neurological disorders (brain tumors, multiple sclerosis)</li>
                                </ul>

                                <div className="bg-blue-100 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Did You Know?</h3>
                                    <p className="text-gray-700">
                                        The eyes are the only place in the body where doctors can see blood vessels and nerves without surgery. This makes eye exams a powerful diagnostic tool for overall health assessment.
                                    </p>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Vision and Learning in Children</h3>
                                <p className="text-gray-700 mb-4">
                                    Approximately 80% of learning in children occurs visually. The <a href="#" className="text-blue-600 hover:underline">Vision Council of America</a> reports that:
                                </p>
                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-sm">
                                        <h4 className="font-bold text-lg text-gray-900 mb-2">25%</h4>
                                        <p className="text-gray-700">of school-aged children have vision problems</p>
                                    </div>
                                    <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-sm">
                                        <h4 className="font-bold text-lg text-gray-900 mb-2">60%</h4>
                                        <p className="text-gray-700">of "problem learners" have undiagnosed vision issues</p>
                                    </div>
                                </div>
                            </section>

                            {/* Types of Eye Examinations */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <ClipboardList className="w-8 h-8 text-blue-600 mr-2" />
                                    Types of Eye Examinations
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Not all eye checks are created equal. Understanding the difference between vision screenings and comprehensive eye exams can help you make informed decisions about your eye health.
                                </p>

                                {/* Exams Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Exam Type</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Performed By</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">What's Checked</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Limitations</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Vision Screening</td>
                                                <td className="px-4 py-3">School nurses, pediatricians</td>
                                                <td className="px-4 py-3">Basic visual acuity</td>
                                                <td className="px-4 py-3">Misses 75% of vision problems</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Comprehensive Eye Exam</td>
                                                <td className="px-4 py-3">Optometrist or ophthalmologist</td>
                                                <td className="px-4 py-3">20+ tests of vision and eye health</td>
                                                <td className="px-4 py-3">None - gold standard</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Diabetic Eye Exam</td>
                                                <td className="px-4 py-3">Eye care specialist</td>
                                                <td className="px-4 py-3">Retinal health, blood vessels</td>
                                                <td className="px-4 py-3">Requires pupil dilation</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4">What to Expect During a Comprehensive Exam</h3>
                                <p className="text-gray-700 mb-4">
                                    A complete eye examination typically includes these components:
                                </p>
                                <ol className="list-decimal list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>
                                        <strong>Patient history:</strong> Assessment of vision needs, health history, medications
                                    </li>
                                    <li>
                                        <strong>Visual acuity:</strong> Reading letters on a chart at various distances
                                    </li>
                                    <li>
                                        <strong>Preliminary tests:</strong> Depth perception, color vision, peripheral awareness
                                    </li>
                                    <li>
                                        <strong>Keratometry:</strong> Measurement of corneal curvature
                                    </li>
                                    <li>
                                        <strong>Refraction:</strong> Determination of lens prescription
                                    </li>
                                    <li>
                                        <strong>Eye focusing:</strong> Testing how well eyes focus, move, and work together
                                    </li>
                                    <li>
                                        <strong>Eye health evaluation:</strong> Examination of external and internal eye structures
                                    </li>
                                </ol>
                            </section>

                            {/* Conditions Detected */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <ShieldAlert className="w-8 h-8 text-blue-600 mr-2" />
                                    Conditions Detected Through Eye Exams
                                </h2>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Eye-Specific Conditions</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Glaucoma (the "silent thief of sight")</li>
                                            <li>Age-related macular degeneration (AMD)</li>
                                            <li>Cataracts</li>
                                            <li>Diabetic retinopathy</li>
                                            <li>Retinal detachment</li>
                                            <li>Dry eye syndrome</li>
                                        </ul>
                                    </div>
                                    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Systemic Health Conditions</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Diabetes (through retinal changes)</li>
                                            <li>Hypertension (via blood vessel abnormalities)</li>
                                            <li>High cholesterol (seen in corneal arcus)</li>
                                            <li>Autoimmune diseases (like rheumatoid arthritis)</li>
                                            <li>Thyroid disorders (Graves' disease)</li>
                                            <li>Brain tumors (through optic nerve changes)</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Early Detection Saves Sight</h3>
                                    <p className="text-gray-700 mb-2">
                                        The American Academy of Ophthalmology reports that early detection through regular eye exams can prevent:
                                    </p>
                                    <ul className="list-disc list-inside text-gray-700 ml-4">
                                        <li>90% of diabetes-related blindness</li>
                                        <li>95% of severe vision loss from glaucoma</li>
                                        <li>50% of AMD-related vision impairment</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Recommended Frequency */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Recommended Examination Frequency</h2>

                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age Group</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Frequency</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Special Considerations</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Infants (6-12 months)</td>
                                                <td className="px-4 py-3">First exam by 1 year</td>
                                                <td className="px-4 py-3">Critical for development</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Preschool (3-5 years)</td>
                                                <td className="px-4 py-3">At least once</td>
                                                <td className="px-4 py-3">Amblyopia detection window</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">School-age (6-18)</td>
                                                <td className="px-4 py-3">Every 2 years</td>
                                                <td className="px-4 py-3">More frequent if vision changes</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Adults (19-60)</td>
                                                <td className="px-4 py-3">Every 1-2 years</td>
                                                <td className="px-4 py-3">Annual if high risk</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Seniors (61+)</td>
                                                <td className="px-4 py-3">Annually</td>
                                                <td className="px-4 py-3">Increased disease risk</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">High-Risk Factors Requiring More Frequent Exams:</h3>
                                    <ul className="list-disc list-inside text-gray-700">
                                        <li>Diabetes or family history of eye disease</li>
                                        <li>African descent (higher glaucoma risk)</li>
                                        <li>Previous eye injuries or surgeries</li>
                                        <li>Occupational eye hazards</li>
                                        <li>Prolonged computer use</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Cost and Insurance */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Cost Considerations and Insurance Coverage</h2>

                                <p className="text-gray-700 mb-4">
                                    Many people avoid eye exams due to cost concerns, but preventive care often saves money long-term. Here's what you should know:
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Insurance Coverage</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Most health plans cover annual exams for children</li>
                                            <li>Medicare covers annual diabetic eye exams</li>
                                            <li>Vision insurance typically covers annual exams</li>
                                            <li>Medical insurance covers exams for medical conditions</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Average Costs Without Insurance</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Basic exam: $50-$100</li>
                                            <li>Comprehensive exam: $100-$200</li>
                                            <li>Contact lens exam: $150-$250</li>
                                            <li>Diabetic eye exam: $200-$300</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <h3 className="font-bold text-gray-900 mb-2">Cost-Saving Tips:</h3>
                                    <p className="text-gray-700">
                                        Many community health centers, universities with optometry schools, and nonprofit organizations offer low-cost or free eye exams. The <a href="#" className="text-blue-600 hover:underline">Prevent Blindness</a> organization provides resources for finding affordable eye care nationwide.
                                    </p>
                                </div>
                            </section>

                            {/* Preparing for Your Exam */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Preparing for Your Eye Examination</h2>

                                <p className="text-gray-700 mb-4">
                                    To get the most from your eye exam, follow these preparation guidelines:
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">What to Bring</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Current glasses and/or contact lenses</li>
                                            <li>List of medications and supplements</li>
                                            <li>Family eye health history</li>
                                            <li>Insurance information</li>
                                            <li>List of questions or concerns</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">What to Expect</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Pupil dilation may blur vision for hours</li>
                                            <li>Plan 1-2 hours for comprehensive exam</li>
                                            <li>Bring sunglasses if being dilated</li>
                                            <li>Consider arranging transportation</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Questions to Ask Your Eye Doctor</h3>
                                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                                        <li>What is my visual acuity measurement?</li>
                                        <li>Are there any signs of eye disease?</li>
                                        <li>How often should I have my eyes examined?</li>
                                        <li>Are there lifestyle changes that could benefit my eye health?</li>
                                        <li>What symptoms should prompt an immediate visit?</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Regular comprehensive eye examinations are one of the most important preventive health measures you can take for yourself and your family. Unlike many health screenings that begin in middle age, eye exams should start in infancy and continue throughout life.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    Vision is arguably our most precious sense, responsible for up to 80% of our perception of the world. Protecting your eye health through regular professional examinations ensures you'll continue to see life's beauty clearly at every stage.
                                </p>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "An eye exam is more than a vision check—it's a window to your overall health. Many patients first learn about serious systemic conditions through routine eye examinations, emphasizing their life-saving potential."
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
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Stay informed about eye health</h4>
                                <p className="text-gray-700 text-sm">
                                    Monthly updates on vision research, eye care tips, and prevention strategies.
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

                        {/* Eye Exam Checklist */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Eye Exam Preparation Checklist</h3>
                            <div className="space-y-3">
                                <div className="flex items-start">
                                    <input type="checkbox" id="check1" className="mt-1 mr-2" />
                                    <label htmlFor="check1" className="text-gray-700">Current glasses/contacts</label>
                                </div>
                                <div className="flex items-start">
                                    <input type="checkbox" id="check2" className="mt-1 mr-2" />
                                    <label htmlFor="check2" className="text-gray-700">Medication list</label>
                                </div>
                                <div className="flex items-start">
                                    <input type="checkbox" id="check3" className="mt-1 mr-2" />
                                    <label htmlFor="check3" className="text-gray-700">Family eye history</label>
                                </div>
                                <div className="flex items-start">
                                    <input type="checkbox" id="check4" className="mt-1 mr-2" />
                                    <label htmlFor="check4" className="text-gray-700">Insurance information</label>
                                </div>
                                <div className="flex items-start">
                                    <input type="checkbox" id="check5" className="mt-1 mr-2" />
                                    <label htmlFor="check5" className="text-gray-700">List of questions</label>
                                </div>
                                <div className="flex items-start">
                                    <input type="checkbox" id="check6" className="mt-1 mr-2" />
                                    <label htmlFor="check6" className="text-gray-700">Sunglasses (if dilation needed)</label>
                                </div>
                            </div>
                        </div>

                        {/* Emergency Symptoms */}
                        <div className="bg-red-50 border-l-4 border-red-400 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                <ShieldAlert className="w-5 h-5 text-red-500 mr-2" />
                                Seek Immediate Care For:
                            </h3>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li>Sudden vision loss</li>
                                <li>Flashes of light or floaters</li>
                                <li>Eye pain or redness</li>
                                <li>Double vision</li>
                                <li>Halos around lights</li>
                            </ul>
                        </div>

                        {/* Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Further Reading</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Children's Vision and Learning</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Digital Eye Strain Prevention</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Nutrition for Eye Health</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Finding Low-Cost Eye Care</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}