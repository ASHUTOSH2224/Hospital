"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, HeartPulse, Pill, School, Moon, Droplet, Apple, AlertTriangle } from "lucide-react"

export default function PediatricMigraineGuide() {
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

    const tabs = ["Overview", "Symptoms", "Treatment", "School Tips"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Migraine in Children and Adolescents: Recognition and Management
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
                                Pediatric migraines often present differently than adult migraines, with shorter duration, bilateral pain, and prominent nausea. This comprehensive guide covers recognition, age-appropriate treatments, school accommodations, and lifestyle modifications to help children and adolescents manage migraine symptoms effectively.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80"
                                    alt="Child holding head in pain from migraine"
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
                                    <li>Pediatric migraines typically last 1-4 hours (vs. 4-72 hours in adults)</li>
                                    <li>60% of children experience bilateral headache pain (vs. unilateral in adults)</li>
                                    <li>Abdominal migraines (pain without headache) are unique to children</li>
                                    <li>Common triggers include stress, irregular sleep, and dehydration</li>
                                    <li>First-line treatment focuses on lifestyle modifications before medication</li>
                                </ul>
                            </div>

                            {/* Understanding Pediatric Migraines */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <HeartPulse className="w-8 h-8 text-blue-600 mr-2" />
                                    Understanding Pediatric Migraines
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Migraines affect approximately 10% of school-aged children and up to 28% of adolescents between 15-19 years old. Unlike adult migraines, pediatric cases present unique challenges in recognition and management due to developmental differences in symptom expression.
                                </p>

                                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Diagnostic Criteria for Pediatric Migraine (ICHD-3)</h3>
                                    <p className="text-gray-700 mb-2">
                                        At least 5 attacks fulfilling these criteria:
                                    </p>
                                    <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                                        <li>Headache attacks lasting 1-72 hours (often 1-4 hours in children)</li>
                                        <li>At least two of: bilateral or unilateral location, pulsating quality, moderate-severe intensity, aggravated by routine activity</li>
                                        <li>At least one of: nausea/vomiting, photophobia and phonophobia (may be inferred from behavior)</li>
                                    </ul>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Unique Pediatric Features</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li><strong>Shorter duration:</strong> Attacks often resolve within 1-4 hours</li>
                                            <li><strong>Bilateral pain:</strong> 60% of children vs. 40% of adults</li>
                                            <li><strong>Abdominal migraines:</strong> Recurrent episodes of midline abdominal pain lasting 2-72 hours</li>
                                            <li><strong>Prominent nausea/vomiting:</strong> More severe than in adults</li>
                                            <li><strong>Visual phenomena:</strong> May describe "zigzag" lines or "sparkles"</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Common Triggers in Children</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li><strong>Stress:</strong> School pressure, family conflicts</li>
                                            <li><strong>Sleep disturbances:</strong> Both insufficient and excessive sleep</li>
                                            <li><strong>Dietary factors:</strong> Skipped meals, dehydration, caffeine</li>
                                            <li><strong>Environmental:</strong> Bright lights, loud noises, strong odors</li>
                                            <li><strong>Hormonal changes:</strong> Especially in adolescent girls</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Symptoms and Diagnosis */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <AlertTriangle className="w-8 h-8 text-blue-600 mr-2" />
                                    Symptoms and Diagnosis
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Recognizing migraines in children requires attention to both verbal descriptions and behavioral changes. Younger children may lack the vocabulary to describe their symptoms clearly, often expressing pain through behavior changes or mood disturbances.
                                </p>

                                {/* Symptoms Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age Group</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Common Symptoms</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Behavioral Signs</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">3-7 years</td>
                                                <td className="px-4 py-3">
                                                    <ul className="list-disc list-inside">
                                                        <li>Pale skin</li>
                                                        <li>Abdominal pain</li>
                                                        <li>Vomiting</li>
                                                    </ul>
                                                </td>
                                                <td className="px-4 py-3">
                                                    <ul className="list-disc list-inside">
                                                        <li>Irritability</li>
                                                        <li>Clutching head</li>
                                                        <li>Seeking dark rooms</li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">8-12 years</td>
                                                <td className="px-4 py-3">
                                                    <ul className="list-disc list-inside">
                                                        <li>Throbbing pain</li>
                                                        <li>Light/sound sensitivity</li>
                                                        <li>Visual disturbances</li>
                                                    </ul>
                                                </td>
                                                <td className="px-4 py-3">
                                                    <ul className="list-disc list-inside">
                                                        <li>Withdrawal from activities</li>
                                                        <li>Decline in school performance</li>
                                                        <li>Sleep disturbances</li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">13-18 years</td>
                                                <td className="px-4 py-3">
                                                    <ul className="list-disc list-inside">
                                                        <li>Unilateral pain (more adult-like)</li>
                                                        <li>Aura symptoms</li>
                                                        <li>Nausea without vomiting</li>
                                                    </ul>
                                                </td>
                                                <td className="px-4 py-3">
                                                    <ul className="list-disc list-inside">
                                                        <li>Social withdrawal</li>
                                                        <li>Increased sleep</li>
                                                        <li>Medication seeking</li>
                                                    </ul>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Red Flags Requiring Immediate Evaluation</h3>
                                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                                        <li>Headache waking child from sleep or present upon waking</li>
                                        <li>Recent onset of severe headache</li>
                                        <li>Headache worsening over days/weeks</li>
                                        <li>Neurological symptoms (weakness, balance problems, vision changes)</li>
                                        <li>Headache following head trauma</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Treatment Approaches */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Pill className="w-8 h-8 text-blue-600 mr-2" />
                                    Treatment Approaches
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Treatment of pediatric migraines follows a stepped approach beginning with lifestyle modifications, progressing to acute treatments, and finally considering preventive therapies for frequent or severe cases.
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Non-Pharmacological Treatments</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li><strong>Sleep hygiene:</strong> Consistent bedtime/wake time, 8-10 hours nightly</li>
                                            <li><strong>Hydration:</strong> At least 1.5L water daily for adolescents</li>
                                            <li><strong>Regular meals:</strong> No skipped meals, balanced macros</li>
                                            <li><strong>Stress management:</strong> CBT, relaxation techniques, biofeedback</li>
                                            <li><strong>Exercise:</strong> Regular moderate activity (avoid overexertion)</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Acute Medications</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li><strong>Ibuprofen:</strong> 10mg/kg every 6-8 hours (max 40mg/kg/day)</li>
                                            <li><strong>Acetaminophen:</strong> 15mg/kg every 4-6 hours (max 75mg/kg/day)</li>
                                            <li><strong>Nasal sumatriptan:</strong> Approved for ≥12 years (5-20mg dose)</li>
                                            <li><strong>Anti-emetics:</strong> Ondansetron for nausea/vomiting</li>
                                            <li><strong>Combination therapy:</strong> NSAID + triptan for severe attacks</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Preventive Medications */}
                                <div className="mb-6">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Preventive Medications (≥4 headache days/month)</h3>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Medication</th>
                                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age Group</th>
                                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dosing</th>
                                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Evidence Level</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200">
                                                <tr>
                                                    <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Amitriptyline</td>
                                                    <td className="px-4 py-3 whitespace-nowrap">≥6 years</td>
                                                    <td className="px-4 py-3">0.1-1 mg/kg at bedtime</td>
                                                    <td className="px-4 py-3">Level B</td>
                                                </tr>
                                                <tr className="bg-gray-50">
                                                    <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Topiramate</td>
                                                    <td className="px-4 py-3 whitespace-nowrap">≥12 years</td>
                                                    <td className="px-4 py-3">1-3 mg/kg/day divided BID</td>
                                                    <td className="px-4 py-3">Level A</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Propranolol</td>
                                                    <td className="px-4 py-3 whitespace-nowrap">≥6 years</td>
                                                    <td className="px-4 py-3">1-2 mg/kg/day divided BID-TID</td>
                                                    <td className="px-4 py-3">Level B</td>
                                                </tr>
                                                <tr className="bg-gray-50">
                                                    <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Cyproheptadine</td>
                                                    <td className="px-4 py-3 whitespace-nowrap">≥2 years</td>
                                                    <td className="px-4 py-3">0.25-0.5 mg/kg at bedtime</td>
                                                    <td className="px-4 py-3">Level C</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <p className="text-sm text-gray-600 mt-2">Evidence levels: A=strong, B=moderate, C=weak evidence</p>
                                </div>
                            </section>

                            {/* School Accommodations */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <School className="w-8 h-8 text-blue-600 mr-2" />
                                    School Accommodations
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Migraines significantly impact school attendance and performance. A 2023 study in <em>Pediatrics</em> found that adolescents with migraines miss an average of 8.4 school days per year due to headache. Implementing appropriate accommodations can help minimize academic disruption.
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Formal Accommodations (504 Plan)</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Flexible attendance policies</li>
                                            <li>Permission to leave class for medication</li>
                                            <li>Access to quiet, dark space during attacks</li>
                                            <li>Extended time for tests/assignments</li>
                                            <li>Permission to wear sunglasses indoors</li>
                                            <li>Access to water bottle at all times</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Classroom Strategies</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Seating away from bright windows</li>
                                            <li>Permission to use noise-canceling headphones</li>
                                            <li>Reduced screen time when symptomatic</li>
                                            <li>Alternative assignments for missed work</li>
                                            <li>Pre-approval for nurse visits</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Sample 504 Plan Accommodations</h3>
                                    <div className="grid gap-4">
                                        <div>
                                            <h4 className="font-medium text-gray-900">Attendance</h4>
                                            <p className="text-gray-700">Student will not be penalized for migraine-related absences exceeding standard limits. Parents will provide doctor's note after 3 consecutive absences.</p>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900">Environment</h4>
                                            <p className="text-gray-700">Student may access nurse's office or designated quiet space during attacks. May wear sunglasses and hat in brightly lit areas.</p>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900">Academic</h4>
                                            <p className="text-gray-700">Student will have 48-hour extension on assignments during/post migraine. Tests may be rescheduled or taken in reduced-stimulus environment.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Lifestyle Management */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Apple className="w-8 h-8 text-blue-600 mr-2" />
                                    Lifestyle Management
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Comprehensive migraine management requires addressing lifestyle factors that influence headache frequency and severity. The HEADSSS assessment (Home, Education, Activities, Drugs, Sleep, Sexuality, Safety) provides a framework for evaluating adolescent lifestyle factors.
                                </p>

                                <div className="grid md:grid-cols-3 gap-4 mb-6">
                                    <div className="bg-blue-50 p-4 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                                            <Moon className="w-5 h-5 text-blue-600 mr-2" />
                                            Sleep
                                        </h3>
                                        <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                                            <li>Consistent bedtime/wake time (±1 hour)</li>
                                            <li>8-10 hours nightly for teens</li>
                                            <li>No screens 1 hour before bed</li>
                                            <li>Cool, dark, quiet bedroom</li>
                                        </ul>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                                            <Droplet className="w-5 h-5 text-blue-600 mr-2" />
                                            Hydration
                                        </h3>
                                        <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                                            <li>1.5-2L water daily</li>
                                            <li>Avoid sugary/caffeinated drinks</li>
                                            <li>Carry water bottle at school</li>
                                            <li>Monitor urine color (pale yellow ideal)</li>
                                        </ul>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                                            <HeartPulse className="w-5 h-5 text-blue-600 mr-2" />
                                            Exercise
                                        </h3>
                                        <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                                            <li>30-60 minutes daily activity</li>
                                            <li>Avoid overexertion in heat</li>
                                            <li>Include stretching/yoga</li>
                                            <li>Swimming often well-tolerated</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                                    <h3 className="font-bold text-gray-900 mb-2">Tracking Progress</h3>
                                    <p className="text-gray-700 mb-2">
                                        Encourage use of headache diaries or apps to track:
                                    </p>
                                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                                        <li>Frequency, duration, intensity of headaches</li>
                                        <li>Potential triggers (sleep, stress, foods)</li>
                                        <li>Medication use and effectiveness</li>
                                        <li>School days missed</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Pediatric migraines require a developmentally-sensitive approach that considers the child's age, school demands, and family dynamics. While medications have a role, lifestyle modifications and school accommodations often provide the greatest long-term benefit.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    Early intervention is crucial - children with untreated migraines are 3.5 times more likely to develop chronic migraines in adulthood. With proper management, most children can achieve good headache control and maintain full participation in school and activities.
                                </p>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "The goal isn't just headache reduction, but preserving childhood experiences. A child who can attend soccer practice or a school dance despite migraines is a treatment success."
                                        <span className="block mt-2 text-right">- Dr. Emily Sanchez, Pediatric Neurologist</span>
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
                                            Dr. Emily Sanchez, Pediatric Neurologist
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600 mb-1">
                                        — Written by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            Dr. James Wilson
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
                                <h3 className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-2">PEDIATRIC HEALTH NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get expert child health advice</h4>
                                <p className="text-gray-700 text-sm">
                                    Monthly updates on childhood conditions, parenting strategies, and school health.
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

                        {/* Emergency Info */}
                        <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-8">
                            <h3 className="font-bold text-gray-900 mb-2">When to Seek Emergency Care</h3>
                            <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                                <li>Worst headache of child's life</li>
                                <li>Headache with fever and stiff neck</li>
                                <li>Headache after head injury with confusion</li>
                                <li>New neurological symptoms (weakness, vision loss)</li>
                                <li>Persistent vomiting with headache</li>
                            </ul>
                        </div>

                        {/* Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Helpful Resources</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-start">
                                        <span className="bg-blue-100 text-blue-800 rounded px-2 py-1 text-xs mr-2">PDF</span>
                                        <span>School Accommodation Request Template</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-start">
                                        <span className="bg-blue-100 text-blue-800 rounded px-2 py-1 text-xs mr-2">App</span>
                                        <span>Migraine Buddy (Headache Tracking)</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-start">
                                        <span className="bg-blue-100 text-blue-800 rounded px-2 py-1 text-xs mr-2">Video</span>
                                        <span>Relaxation Techniques for Kids</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-start">
                                        <span className="bg-blue-100 text-blue-800 rounded px-2 py-1 text-xs mr-2">Book</span>
                                        <span>Managing Your Child's Chronic Pain</span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Related Articles */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Related Articles</h3>
                            <div className="space-y-4">
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80" alt="Child sleeping" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Sleep Disorders in Children</h4>
                                            <p className="text-sm text-gray-600">6 min read</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80" alt="Teenager stressed" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Managing School Stress</h4>
                                            <p className="text-sm text-gray-600">5 min read</p>
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