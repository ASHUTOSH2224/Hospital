"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, Eye, Glasses, Contact, Dot, Shield, Star, Scale } from "lucide-react"

export default function VisionCorrectionGuide() {
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

    const tabs = ["Overview", "Glasses", "Contacts", "LASIK", "Comparison"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Understanding Vision Correction Options: Glasses, Contacts, and LASIK
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
                                Explore comprehensive vision correction approaches including prescription eyeglasses, contact lenses, refractive surgery options like LASIK, and emerging technologies. This guide compares effectiveness, costs, risks, and suitability for different lifestyles and vision conditions.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1574258495973-f010dfbb5371?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80"
                                    alt="Various vision correction options including glasses, contacts and LASIK surgery"
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
                                    <li>Glasses remain the safest option with no infection risk and fashion versatility</li>
                                    <li>Modern contact lenses offer oxygen permeability up to 10x higher than a decade ago</li>
                                    <li>LASIK achieves 20/20 vision or better in 96% of patients with mild prescriptions</li>
                                    <li>New SMILE laser surgery reduces dry eye complications by 40% compared to LASIK</li>
                                    <li>Hybrid approaches (glasses + contacts) optimize vision for different activities</li>
                                </ul>
                            </div>

                            {/* Vision Problems Overview */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Eye className="w-8 h-8 text-blue-600 mr-2" />
                                    Common Vision Problems Requiring Correction
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Refractive errors affect approximately 75% of adults worldwide according to the <a href="#" className="text-blue-600 hover:underline">World Health Organization</a>. The four primary types are:
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">Myopia (Nearsightedness)</h3>
                                        <p className="text-gray-700 mb-2">
                                            Difficulty seeing distant objects clearly. Affects 30-40% of Western populations and up to 80% in some Asian countries.
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            <span className="font-semibold">Correction:</span> Concave lenses (minus power)
                                        </p>
                                    </div>
                                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">Hyperopia (Farsightedness)</h3>
                                        <p className="text-gray-700 mb-2">
                                            Difficulty focusing on nearby objects. Present in about 10-15% of the population.
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            <span className="font-semibold">Correction:</span> Convex lenses (plus power)
                                        </p>
                                    </div>
                                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">Astigmatism</h3>
                                        <p className="text-gray-700 mb-2">
                                            Blurred vision at all distances due to irregular cornea shape. Affects about 33% of people.
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            <span className="font-semibold">Correction:</span> Cylindrical lenses
                                        </p>
                                    </div>
                                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">Presbyopia</h3>
                                        <p className="text-gray-700 mb-2">
                                            Age-related loss of near focusing ability. Begins around age 40 and affects everyone eventually.
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            <span className="font-semibold">Correction:</span> Reading glasses, bifocals, or progressive lenses
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Visual Acuity Scale</h3>
                                    <p className="text-gray-700 mb-2">
                                        20/20 vision is considered normal, meaning you can see at 20 feet what should normally be seen at that distance. 20/40 vision means you must be at 20 feet to see what a person with normal vision can see at 40 feet.
                                    </p>
                                    <p className="text-gray-700">
                                        Legal blindness is defined as 20/200 vision or worse in the better eye with correction.
                                    </p>
                                </div>
                            </section>

                            {/* Eyeglasses Section */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Glasses className="w-8 h-8 text-blue-600 mr-2" />
                                    Prescription Eyeglasses: Timeless Vision Correction
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Eyeglasses remain the most common vision correction method worldwide, with over 4 billion people using them. Modern glasses combine precise optics with fashion and functionality.
                                </p>

                                {/* Glasses Types Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Best For</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pros</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cons</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Avg. Cost</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 font-medium text-gray-900">Single Vision</td>
                                                <td className="px-4 py-3">Myopia, hyperopia, astigmatism</td>
                                                <td className="px-4 py-3">Full field of view, least expensive</td>
                                                <td className="px-4 py-3">Only corrects one distance</td>
                                                <td className="px-4 py-3">$100-$400</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 font-medium text-gray-900">Bifocals</td>
                                                <td className="px-4 py-3">Presbyopia + other refractive errors</td>
                                                <td className="px-4 py-3">Two prescriptions in one lens</td>
                                                <td className="px-4 py-3">Visible line, image jump</td>
                                                <td className="px-4 py-3">$150-$500</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 font-medium text-gray-900">Progressives</td>
                                                <td className="px-4 py-3">Presbyopia needing seamless transition</td>
                                                <td className="px-4 py-3">No visible lines, gradual power change</td>
                                                <td className="px-4 py-3">Adaptation period, peripheral distortion</td>
                                                <td className="px-4 py-3">$200-$600</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 font-medium text-gray-900">Computer Glasses</td>
                                                <td className="px-4 py-3">Digital eye strain</td>
                                                <td className="px-4 py-3">Reduces blue light, optimized for screen distance</td>
                                                <td className="px-4 py-3">Not for general use</td>
                                                <td className="px-4 py-3">$80-$300</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">1</span>
                                            Lens Material Innovations
                                        </h3>
                                        <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                                            <li>High-index plastics (thinner lenses for strong prescriptions)</li>
                                            <li>Polycarbonate (impact-resistant for sports/safety)</li>
                                            <li>Trivex (lighter with better optics than polycarbonate)</li>
                                            <li>Photochromic (transitions between light/dark environments)</li>
                                        </ul>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">2</span>
                                            Frame Selection Guide
                                        </h3>
                                        <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                                            <li>Face shape matching (oval, round, square, heart)</li>
                                            <li>Material choices (acetate, metal, titanium, flexible polymers)</li>
                                            <li>Bridge fit (critical for comfort and proper optical alignment)</li>
                                            <li>Temple length (varies by head size and personal preference)</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Pro Tip:</h3>
                                    <p className="text-gray-700">
                                        For children or active adults, consider spring hinges and flexible frame materials that can withstand rough handling and accidental drops.
                                    </p>
                                </div>
                            </section>

                            {/* Contact Lenses Section */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Contact className="w-8 h-8 text-blue-600 mr-2" />
                                    Contact Lenses: Invisible Vision Correction
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Approximately 45 million Americans wear contact lenses. Modern materials offer unprecedented comfort and oxygen transmission while correcting vision discreetly.
                                </p>

                                {/* Contact Lens Comparison */}
                                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                                    <div className="grid grid-cols-4 gap-4 text-center font-medium mb-2">
                                        <div>Type</div>
                                        <div>Wear Schedule</div>
                                        <div>Oxygen Permeability (Dk/t)</div>
                                        <div>Water Content</div>
                                    </div>
                                    <div className="grid grid-cols-4 gap-4 text-center mb-1">
                                        <div className="font-medium">Daily Disposable</div>
                                        <div>1 day</div>
                                        <div>25-35</div>
                                        <div>55-60%</div>
                                    </div>
                                    <div className="grid grid-cols-4 gap-4 text-center mb-1 bg-blue-50 p-1 rounded">
                                        <div className="font-medium">Bi-Weekly</div>
                                        <div>14 days</div>
                                        <div>30-40</div>
                                        <div>45-55%</div>
                                    </div>
                                    <div className="grid grid-cols-4 gap-4 text-center mb-1">
                                        <div className="font-medium">Monthly</div>
                                        <div>30 days</div>
                                        <div>40-60</div>
                                        <div>35-45%</div>
                                    </div>
                                    <div className="grid grid-cols-4 gap-4 text-center">
                                        <div className="font-medium">Rigid Gas Permeable</div>
                                        <div>1-2 years</div>
                                        <div>80-150</div>
                                        <div>0%</div>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Specialty Contact Lenses</h3>
                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900 mb-3">Toric Lenses</h4>
                                        <p className="text-gray-700 mb-2">
                                            Correct astigmatism with precise orientation. Modern designs maintain position despite eye movement.
                                        </p>
                                        <p className="text-gray-700">
                                            <span className="font-semibold">Success Rate:</span> 85-90% achieve 20/30 vision or better
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900 mb-3">Multifocal Lenses</h4>
                                        <p className="text-gray-700 mb-2">
                                            Simultaneous vision design corrects presbyopia. Available in soft and RGP materials.
                                        </p>
                                        <p className="text-gray-700">
                                            <span className="font-semibold">Adaptation:</span> 2-4 weeks typically needed
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900 mb-3">Scleral Lenses</h4>
                                        <p className="text-gray-700 mb-2">
                                            Large-diameter lenses that vault over irregular corneas (keratoconus, post-surgical).
                                        </p>
                                        <p className="text-gray-700">
                                            <span className="font-semibold">Comfort:</span> Often better than standard RGP lenses
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900 mb-3">Ortho-K Lenses</h4>
                                        <p className="text-gray-700 mb-2">
                                            Overnight wear temporarily reshapes cornea to reduce myopia. Effects last 1-2 days.
                                        </p>
                                        <p className="text-gray-700">
                                            <span className="font-semibold">Myopia Control:</span> Can slow childhood myopia progression by 30-60%
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Contact Lens Safety:</h3>
                                    <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                                        <li>Never sleep in lenses not approved for overnight wear</li>
                                        <li>Replace lenses as prescribed (don't extend wear)</li>
                                        <li>Use fresh solution daily (no "topping off")</li>
                                        <li>Annual eye exams are mandatory for contact lens wearers</li>
                                        <li>Remove immediately if experiencing pain, redness, or vision changes</li>
                                    </ul>
                                </div>
                            </section>

                            {/* LASIK and Refractive Surgery */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Dot className="w-8 h-8 text-blue-600 mr-2" />
                                    LASIK and Refractive Surgery Options
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Approximately 700,000 LASIK procedures are performed annually in the U.S. with a 96% patient satisfaction rate according to recent studies.
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3">LASIK (Laser-Assisted In Situ Keratomileusis)</h3>
                                        <p className="text-gray-700 mb-2">
                                            Creates a corneal flap then reshapes underlying tissue with excimer laser. Most common refractive surgery.
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                                            <li><span className="font-semibold">Recovery:</span> 1-2 days for basic function, 1-3 months for full stabilization</li>
                                            <li><span className="font-semibold">Success Rate:</span> 96% achieve 20/20 or better with mild prescriptions</li>
                                            <li><span className="font-semibold">Best Candidates:</span> Stable prescription for 1+ years, adequate corneal thickness</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3">PRK (Photorefractive Keratectomy)</h3>
                                        <p className="text-gray-700 mb-2">
                                            Removes corneal epithelium entirely before reshaping. Longer recovery but no flap complications.
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                                            <li><span className="font-semibold">Recovery:</span> 3-5 days for epithelial healing, several weeks for vision stabilization</li>
                                            <li><span className="font-semibold">Advantage:</span> Better for thin corneas or high-risk occupations (martial arts, military)</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3">SMILE (Small Incision Lenticule Extraction)</h3>
                                        <p className="text-gray-700 mb-2">
                                            Newer flapless procedure using femtosecond laser to create lenticule within cornea.
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                                            <li><span className="font-semibold">Benefits:</span> 40% less dry eye than LASIK, preserves corneal strength</li>
                                            <li><span className="font-semibold">Limitations:</span> Currently only FDA-approved for myopia and myopic astigmatism</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3">ICL (Implantable Collamer Lens)</h3>
                                        <p className="text-gray-700 mb-2">
                                            Phakic intraocular lens implanted behind iris without removing natural lens.
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                                            <li><span className="font-semibold">Advantage:</span> Corrects extreme myopia (-3D to -20D) not treatable with LASIK</li>
                                            <li><span className="font-semibold">Consideration:</span> Requires annual monitoring for endothelial cell count</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">LASIK Candidacy Checklist</h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-2">Good Candidates</h4>
                                            <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                                                <li>Stable prescription for ≥1 year</li>
                                                <li>Corneal thickness ≥500 microns</li>
                                                <li>Moderate refractive error (-1D to -8D myopia)</li>
                                                <li>Healthy eyes with no diseases</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-2">Poor Candidates</h4>
                                            <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                                                <li>Uncontrolled autoimmune diseases</li>
                                                <li>Severe dry eye syndrome</li>
                                                <li>Keratoconus or corneal thinning disorders</li>
                                                <li>Pregnant or nursing women</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Surgical Outcomes by Procedure</h3>
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Procedure</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">20/20 or Better</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Enhancement Rate</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dry Eye Incidence</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Night Vision Issues</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 font-medium text-gray-900">LASIK</td>
                                                <td className="px-4 py-3">96%</td>
                                                <td className="px-4 py-3">5-10%</td>
                                                <td className="px-4 py-3">15-20%</td>
                                                <td className="px-4 py-3">10-15% temporary</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 font-medium text-gray-900">PRK</td>
                                                <td className="px-4 py-3">94%</td>
                                                <td className="px-4 py-3">5-8%</td>
                                                <td className="px-4 py-3">10-15%</td>
                                                <td className="px-4 py-3">5-10% temporary</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 font-medium text-gray-900">SMILE</td>
                                                <td className="px-4 py-3">95%</td>
                                                <td className="px-4 py-3">3-5%</td>
                                                <td className="px-4 py-3">5-10%</td>
                                                <td className="px-4 py-3">5% temporary</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 font-medium text-gray-900">ICL</td>
                                                <td className="px-4 py-3">98%</td>
                                                <td className="px-4 py-3">1-2%</td>
                                                <td className="px-4 py-3">5%</td>
                                                <td className="px-4 py-3">10-20% (halos at night)</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            {/* Comparison Section */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Scale className="w-8 h-8 text-blue-600 mr-2" />
                                    Comprehensive Comparison of Vision Correction Options
                                </h2>

                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Factor</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Glasses</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contacts</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">LASIK</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 font-medium text-gray-900">Initial Cost</td>
                                                <td className="px-4 py-3">$100-$600</td>
                                                <td className="px-4 py-3">$200-$500/year</td>
                                                <td className="px-4 py-3">$2,000-$4,000 per eye</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 font-medium text-gray-900">Long-term Cost (10 yrs)</td>
                                                <td className="px-4 py-3">$1,000-$3,000</td>
                                                <td className="px-4 py-3">$2,000-$5,000</td>
                                                <td className="px-4 py-3">$2,000-$4,000</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 font-medium text-gray-900">Maintenance</td>
                                                <td className="px-4 py-3">Minimal (cleaning)</td>
                                                <td className="px-4 py-3">Daily cleaning/storage</td>
                                                <td className="px-4 py-3">None</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 font-medium text-gray-900">Infection Risk</td>
                                                <td className="px-4 py-3">None</td>
                                                <td className="px-4 py-3">1 in 500 (annual)</td>
                                                <td className="px-4 py-3">1 in 5,000</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 font-medium text-gray-900">Visual Acuity</td>
                                                <td className="px-4 py-3">Excellent</td>
                                                <td className="px-4 py-3">Excellent</td>
                                                <td className="px-4 py-3">Excellent (after healing)</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 font-medium text-gray-900">Peripheral Vision</td>
                                                <td className="px-4 py-3">Limited by frame</td>
                                                <td className="px-4 py-3">Unobstructed</td>
                                                <td className="px-4 py-3">Unobstructed</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 font-medium text-gray-900">Sports Compatibility</td>
                                                <td className="px-4 py-3">Fair (can fog/fall)</td>
                                                <td className="px-4 py-3">Good (may dry out)</td>
                                                <td className="px-4 py-3">Excellent</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Cost-Benefit Analysis Over 10 Years</h3>
                                    <p className="text-gray-700 mb-2">
                                        While LASIK has higher upfront costs, it often becomes cost-effective compared to glasses or contacts within 5-7 years for most patients.
                                    </p>
                                    <p className="text-gray-700">
                                        Consider both financial costs and quality-of-life improvements when choosing vision correction methods.
                                    </p>
                                </div>
                            </section>

                            {/* Emerging Technologies */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Emerging Vision Correction Technologies</h2>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div className="border border-gray-200 rounded-lg p-4">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Light-Adjustable Lenses</h3>
                                        <p className="text-gray-700 mb-2">
                                            UV-activated lenses that can be adjusted post-implantation for perfect vision. Currently in FDA trials.
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            <span className="font-semibold">Potential:</span> Could eliminate enhancement surgeries
                                        </p>
                                    </div>
                                    <div className="border border-gray-200 rounded-lg p-4">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Corneal Inlays</h3>
                                        <p className="text-gray-700 mb-2">
                                            Tiny implants that change corneal curvature. Some FDA-approved for presbyopia.
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            <span className="font-semibold">Advantage:</span> Reversible procedure
                                        </p>
                                    </div>
                                    <div className="border border-gray-200 rounded-lg p-4">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Gene Therapy</h3>
                                        <p className="text-gray-700 mb-2">
                                            Experimental treatments targeting genetic causes of refractive errors.
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            <span className="font-semibold">Status:</span> Early animal trials show promise
                                        </p>
                                    </div>
                                    <div className="border border-gray-200 rounded-lg p-4">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Smart Contact Lenses</h3>
                                        <p className="text-gray-700 mb-2">
                                            Lenses with embedded electronics for vision correction, health monitoring, and augmented reality.
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            <span className="font-semibold">Development:</span> Several major tech companies have prototypes
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Recommendations</h2>

                                <p className="text-gray-700 mb-4">
                                    The best vision correction method depends on your prescription, lifestyle, budget, and personal preferences. Consider these general guidelines:
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Choose Glasses If:</h3>
                                        <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                                            <li>You want the safest option with no infection risk</li>
                                            <li>Your prescription changes frequently</li>
                                            <li>You enjoy changing your look with different frames</li>
                                            <li>You have dry eyes or other conditions preventing contacts/LASIK</li>
                                        </ul>
                                    </div>
                                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Choose Contacts If:</h3>
                                        <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                                            <li>You play sports or are physically active</li>
                                            <li>You dislike how you look in glasses</li>
                                            <li>You need unobstructed peripheral vision</li>
                                            <li>You're willing to follow proper hygiene routines</li>
                                        </ul>
                                    </div>
                                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Consider LASIK If:</h3>
                                        <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                                            <li>Your prescription has been stable for 1+ years</li>
                                            <li>You're tired of glasses/contacts maintenance</li>
                                            <li>Your lifestyle would benefit from glasses-free vision</li>
                                            <li>You're a good candidate based on thorough evaluation</li>
                                        </ul>
                                    </div>
                                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Alternative Options:</h3>
                                        <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                                            <li>Ortho-K for children with progressing myopia</li>
                                            <li>ICL for extreme prescriptions outside LASIK range</li>
                                            <li>Hybrid approach (glasses + contacts for different situations)</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "Schedule a comprehensive eye exam with an optometrist or ophthalmologist to discuss your specific needs. Vision correction is highly personal - what works perfectly for one person may not be ideal for another."
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
                                <h3 className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-2">VISION NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get eye care tips and updates</h4>
                                <p className="text-gray-700 text-sm">
                                    Monthly vision health advice, technology updates, and expert recommendations.
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
                                            <img src="https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80" alt="Digital eye strain" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Digital Eye Strain: Prevention and Relief</h4>
                                            <p className="text-sm text-gray-600">5 min read</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80" alt="Child eye exam" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Children's Vision: When to Get First Eye Exam</h4>
                                            <p className="text-sm text-gray-600">6 min read</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80" alt="Eye nutrition" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Nutrition for Eye Health: Top 10 Foods</h4>
                                            <p className="text-sm text-gray-600">7 min read</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Cost Comparison */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Average Costs by Method</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span className="font-medium">Method</span>
                                    <span className="font-medium">Cost Range</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Basic Glasses</span>
                                    <span className="text-blue-600">$100-$300</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Premium Glasses</span>
                                    <span className="text-blue-600">$300-$600</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Daily Contacts</span>
                                    <span className="text-blue-600">$500-$800/year</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Monthly Contacts</span>
                                    <span className="text-blue-600">$200-$400/year</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>LASIK Surgery</span>
                                    <span className="text-blue-600">$2,000-$4,000/eye</span>
                                </div>
                            </div>
                        </div>

                        {/* Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Helpful Resources</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Find an Eye Doctor (AAO Locator)</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">LASIK Patient Guide (FDA)</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Contact Lens Safety (CDC)</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Children's Vision Statistics</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}