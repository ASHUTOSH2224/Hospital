"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, AlertCircle, HeartPulse, Pill, Moon, Sun, Activity, BookOpen } from "lucide-react"

export default function HormonalMigrainesGuide() {
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

    const tabs = ["Overview", "Symptoms", "Treatments", "Prevention"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Hormonal Migraines: Understanding the Menstrual Connection
                            </h1>

                            {/* Navigation Tabs */}
                            <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-200">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                                            activeTab === tab
                                                ? "border-purple-500 text-purple-600"
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
                                Hormonal fluctuations significantly impact migraine patterns in women. Menstrual migraines occur in the days before, during, or after menstruation due to estrogen withdrawal. This comprehensive guide covers menstrual migraines, pregnancy considerations, menopause effects, and hormone replacement therapy impacts on migraine patterns.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80"
                                    alt="Woman experiencing migraine pain"
                                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                                    style={{ maxHeight: '500px' }}
                                />
                            </div>

                            {/* Key Takeaways */}
                            <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-8">
                                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                    <Activity className="w-5 h-5 text-purple-600 mr-2" />
                                    Key Takeaways
                                </h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>Menstrual migraines affect up to 60% of female migraine sufferers</li>
                                    <li>Estrogen withdrawal is the primary trigger for menstrual migraines</li>
                                    <li>Pregnancy often improves migraines but options are limited</li>
                                    <li>Menopause transition can worsen migraines before improvement</li>
                                    <li>Hormone therapy requires careful migraine-specific consideration</li>
                                </ul>
                            </div>

                            {/* Understanding Hormonal Migraines */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <HeartPulse className="w-8 h-8 text-purple-600 mr-2" />
                                    Understanding Hormonal Migraines
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Hormonal migraines are headaches that occur in relation to a woman's menstrual cycle. According to the <a href="#" className="text-blue-600 hover:underline">American Migraine Foundation</a>, about 60% of women with migraines experience menstrual migraines. These attacks are typically more severe, last longer, and are more resistant to treatment than non-menstrual migraines.
                                </p>

                                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">The Estrogen Connection</h3>
                                    <p className="text-gray-700">
                                        Estrogen levels drop sharply just before menstruation begins. This estrogen withdrawal appears to trigger migraines by:
                                    </p>
                                    <ul className="list-disc list-inside text-gray-700 mt-2 ml-4 space-y-1">
                                        <li>Affecting serotonin levels in the brain</li>
                                        <li>Increasing sensitivity to pain</li>
                                        <li>Altering blood vessel function</li>
                                        <li>Changing inflammatory responses</li>
                                    </ul>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <Moon className="w-5 h-5 text-purple-600 mr-2" />
                                            Pure Menstrual Migraine
                                        </h3>
                                        <p className="text-gray-700">
                                            Occurs exclusively during the menstrual window (day -2 to +3 of cycle) and at no other time. Affects about 10-14% of women with migraines.
                                        </p>
                                    </div>
                                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <Sun className="w-5 h-5 text-purple-600 mr-2" />
                                            Menstrually-Related Migraine
                                        </h3>
                                        <p className="text-gray-700">
                                            Occurs during the menstrual window but also at other times of the month. Affects about 35-51% of women with migraines.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Symptoms and Patterns */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <AlertCircle className="w-8 h-8 text-purple-600 mr-2" />
                                    Symptoms and Patterns
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Menstrual migraines often differ from regular migraines in several ways:
                                </p>

                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Feature</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Menstrual Migraine</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Non-Menstrual Migraine</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Duration</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Longer (often 72+ hours)</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Typically 4-72 hours</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Severity</td>
                                                <td className="px-4 py-3 whitespace-nowrap">More severe</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Variable</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Aura</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Less common</td>
                                                <td className="px-4 py-3 whitespace-nowrap">More common</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Response to Treatment</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Less responsive</td>
                                                <td className="px-4 py-3 whitespace-nowrap">More responsive</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Common Associated Symptoms:</h3>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                                        <span className="bg-white px-3 py-1 rounded-full text-sm">Nausea</span>
                                        <span className="bg-white px-3 py-1 rounded-full text-sm">Vomiting</span>
                                        <span className="bg-white px-3 py-1 rounded-full text-sm">Light sensitivity</span>
                                        <span className="bg-white px-3 py-1 rounded-full text-sm">Sound sensitivity</span>
                                        <span className="bg-white px-3 py-1 rounded-full text-sm">Dizziness</span>
                                        <span className="bg-white px-3 py-1 rounded-full text-sm">Fatigue</span>
                                        <span className="bg-white px-3 py-1 rounded-full text-sm">Mood changes</span>
                                        <span className="bg-white px-3 py-1 rounded-full text-sm">Food cravings</span>
                                    </div>
                                </div>
                            </section>

                            {/* Treatment Options */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Pill className="w-8 h-8 text-purple-600 mr-2" />
                                    Treatment Options
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Treatment strategies for hormonal migraines fall into three main categories: acute treatment, short-term prevention, and continuous prevention.
                                </p>

                                <div className="grid md:grid-cols-3 gap-6 mb-8">
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-purple-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Acute Treatment</h3>
                                        </div>
                                        <div className="p-4">
                                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                                <li>NSAIDs (ibuprofen, naproxen)</li>
                                                <li>Triptans (sumatriptan, rizatriptan)</li>
                                                <li>Gepants (ubrogepant, rimegepant)</li>
                                                <li>Dihydroergotamine (DHE)</li>
                                            </ul>
                                            <p className="text-sm text-gray-600 mt-3">
                                                Most effective when taken at migraine onset
                                            </p>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-purple-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Short-Term Prevention</h3>
                                        </div>
                                        <div className="p-4">
                                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                                <li>NSAIDs (2-3 days before expected migraine)</li>
                                                <li>Triptans (5-7 day mini-prophylaxis)</li>
                                                <li>Estrogen patches/gels (perimenstrual)</li>
                                                <li>Magnesium supplementation</li>
                                            </ul>
                                            <p className="text-sm text-gray-600 mt-3">
                                                For predictable menstrual migraines
                                            </p>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-purple-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Continuous Prevention</h3>
                                        </div>
                                        <div className="p-4">
                                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                                <li>Hormonal contraceptives (continuous)</li>
                                                <li>Traditional preventives (topiramate, etc.)</li>
                                                <li>CGRP monoclonal antibodies</li>
                                                <li>Lifestyle modifications</li>
                                            </ul>
                                            <p className="text-sm text-gray-600 mt-3">
                                                For frequent or severe migraines
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Important Consideration:</h3>
                                    <p className="text-gray-700">
                                        Women with aura should avoid estrogen-containing contraceptives due to increased stroke risk. Progestin-only options are safer alternatives.
                                    </p>
                                </div>
                            </section>

                            {/* Life Stages and Migraines */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Hormonal Migraines Across Life Stages</h2>

                                <div className="space-y-8">
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center">
                                            <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">1</span>
                                            Puberty and Adolescence
                                        </h3>
                                        <p className="text-gray-700 mb-2">
                                            Migraines often begin with menarche (first period). Girls who start menstruating earlier have higher migraine risk. Early education about tracking and management is crucial.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center">
                                            <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">2</span>
                                            Reproductive Years
                                        </h3>
                                        <p className="text-gray-700 mb-2">
                                            Migraine patterns often stabilize but may worsen with hormonal contraceptives, pregnancy, or perimenopause. Treatment must balance efficacy with reproductive considerations.
                                        </p>
                                        <div className="bg-gray-50 p-4 rounded-lg mt-3">
                                            <h4 className="font-bold text-gray-900 mb-2">Pregnancy Considerations:</h4>
                                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                                                <li>60-70% of women improve, especially in 2nd/3rd trimesters</li>
                                                <li>Acetaminophen is first-line for acute treatment</li>
                                                <li>Preventive options limited (magnesium, riboflavin may help)</li>
                                                <li>Avoid NSAIDs after 20 weeks, triptans category C</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center">
                                            <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">3</span>
                                            Perimenopause and Menopause
                                        </h3>
                                        <p className="text-gray-700 mb-2">
                                            The menopausal transition often brings worsening migraines due to erratic hormone fluctuations. Post-menopause, migraines typically improve unless on hormone therapy.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-4 mt-3">
                                            <div className="bg-white border border-gray-200 rounded-lg p-4">
                                                <h4 className="font-bold text-gray-900 mb-2">Natural Menopause</h4>
                                                <p className="text-gray-700">
                                                    67% of women report improvement in migraines after menopause completes
                                                </p>
                                            </div>
                                            <div className="bg-white border border-gray-200 rounded-lg p-4">
                                                <h4 className="font-bold text-gray-900 mb-2">Surgical Menopause</h4>
                                                <p className="text-gray-700">
                                                    Sudden estrogen drop can trigger severe migraines requiring careful management
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Hormone Therapy and Migraines */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Hormone Therapy and Migraines</h2>

                                <p className="text-gray-700 mb-4">
                                    Hormone replacement therapy (HRT) effects on migraines vary based on formulation, dose, and administration method:
                                </p>

                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Therapy Type</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Migraine Impact</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Considerations</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 font-medium text-gray-900">Oral Estrogen</td>
                                                <td className="px-4 py-3">Often worsens migraines</td>
                                                <td className="px-4 py-3">Peak-trough effects problematic</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 font-medium text-gray-900">Transdermal Estrogen</td>
                                                <td className="px-4 py-3">More stable, may improve</td>
                                                <td className="px-4 py-3">Preferred delivery method</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 font-medium text-gray-900">Progestin-Only</td>
                                                <td className="px-4 py-3">Neutral or slight improvement</td>
                                                <td className="px-4 py-3">Good for women with aura</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 font-medium text-gray-900">Bioidentical HRT</td>
                                                <td className="px-4 py-3">Variable effects</td>
                                                <td className="px-4 py-3">Not necessarily better</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="bg-purple-50 p-4 rounded-lg">
                                    <h3 className="font-bold text-gray-900 mb-2">HRT Best Practices for Migraine Patients:</h3>
                                    <ol className="list-decimal list-inside text-gray-700 space-y-2">
                                        <li>Use the lowest effective estrogen dose</li>
                                        <li>Prefer transdermal over oral administration</li>
                                        <li>Consider continuous rather than cyclic regimens</li>
                                        <li>Add progestin only when needed for endometrial protection</li>
                                        <li>Monitor response carefully and adjust as needed</li>
                                    </ol>
                                </div>
                            </section>

                            {/* Lifestyle and Alternative Approaches */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Lifestyle and Alternative Approaches</h2>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Dietary Strategies</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Maintain stable blood sugar (regular meals/snacks)</li>
                                            <li>Increase magnesium-rich foods (leafy greens, nuts, seeds)</li>
                                            <li>Consider riboflavin (B2) supplementation</li>
                                            <li>Stay well-hydrated</li>
                                            <li>Limit known triggers (alcohol, aged cheeses, MSG)</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Stress and Sleep Management</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Practice regular relaxation techniques</li>
                                            <li>Maintain consistent sleep schedule</li>
                                            <li>Consider cognitive behavioral therapy</li>
                                            <li>Regular moderate exercise (but avoid overexertion)</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-3">Evidence-Based Supplements</h3>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        <div className="text-center">
                                            <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                                                <span className="text-purple-800 font-bold">Mg</span>
                                            </div>
                                            <p className="text-sm font-medium">Magnesium</p>
                                            <p className="text-xs text-gray-600">400-600mg/day</p>
                                        </div>
                                        <div className="text-center">
                                            <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                                                <span className="text-purple-800 font-bold">B2</span>
                                            </div>
                                            <p className="text-sm font-medium">Riboflavin</p>
                                            <p className="text-xs text-gray-600">400mg/day</p>
                                        </div>
                                        <div className="text-center">
                                            <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                                                <span className="text-purple-800 font-bold">CoQ10</span>
                                            </div>
                                            <p className="text-sm font-medium">Coenzyme Q10</p>
                                            <p className="text-xs text-gray-600">100-300mg/day</p>
                                        </div>
                                        <div className="text-center">
                                            <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                                                <span className="text-purple-800 font-bold">ω-3</span>
                                            </div>
                                            <p className="text-sm font-medium">Omega-3s</p>
                                            <p className="text-xs text-gray-600">1000-2000mg EPA/DHA</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Tracking and Management */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Tracking and Management Strategies</h2>

                                <p className="text-gray-700 mb-4">
                                    Effective migraine management requires understanding your personal patterns and triggers. Tracking for at least 3 months can reveal important insights.
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">What to Track</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Migraine start/end times and severity</li>
                                            <li>Menstrual cycle days</li>
                                            <li>Medications taken and response</li>
                                            <li>Potential triggers (stress, sleep, diet)</li>
                                            <li>Associated symptoms</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Tracking Methods</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Paper diaries</li>
                                            <li>Mobile apps (Migraine Buddy, Clue)</li>
                                            <li>Calendar markings</li>
                                            <li>Spreadsheets</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-white border border-gray-200 rounded-lg p-4">
                                    <h3 className="font-bold text-gray-900 mb-3">When to See a Specialist</h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="bg-red-50 p-3 rounded-lg">
                                            <h4 className="font-bold text-red-800 mb-1">Red Flags</h4>
                                            <ul className="list-disc list-inside text-red-700 text-sm space-y-1">
                                                <li>First or worst headache ever</li>
                                                <li>Headache with fever/stiff neck</li>
                                                <li>New neurological symptoms</li>
                                                <li>Headache after head trauma</li>
                                            </ul>
                                        </div>
                                        <div className="bg-purple-50 p-3 rounded-lg">
                                            <h4 className="font-bold text-purple-800 mb-1">Referral Indicators</h4>
                                            <ul className="list-disc list-inside text-purple-700 text-sm space-y-1">
                                                <li>≥4 headache days/month</li>
                                                <li>Acute meds used ≥2x/week</li>
                                                <li>Migraines interfering with life</li>
                                                <li>Current treatment ineffective</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Hormonal migraines present unique challenges throughout a woman's life, but understanding the underlying mechanisms and available treatment options can lead to significant improvement in quality of life. While menstrual migraines are often more severe and treatment-resistant, targeted approaches can be highly effective.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    The key is personalized care that considers your migraine patterns, reproductive status, and overall health. With proper management, most women can achieve good control of their hormonal migraines.
                                </p>

                                <div className="bg-purple-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "Successful hormonal migraine management requires partnership between patient and provider. Tracking your patterns and being proactive about treatment adjustments makes all the difference." — Dr. Sarah Johnson, Neurologist
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
                                            Dr. Sarah Johnson, Neurologist
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600 mb-1">
                                        — Written by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            Emily Parker
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
                        <div className="bg-purple-50 rounded-lg p-6 mb-8">
                            <div className="mb-4">
                                <h3 className="text-sm font-bold text-purple-800 uppercase tracking-wide mb-2">MIGRAINE NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get hormonal migraine tips</h4>
                                <p className="text-gray-700 text-sm">
                                    Monthly updates on treatments, research, and management strategies delivered to your inbox.
                                </p>
                            </div>

                            <form onSubmit={handleEmailSubmit} className="space-y-4">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200"
                                >
                                    SUBSCRIBE
                                </button>
                            </form>

                            <p className="text-xs text-gray-600 mt-3">
                                Your{" "}
                                <a href="#" className="text-purple-600 hover:underline">
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
                                            <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80" alt="Migraine treatment" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors">New Migraine Treatments in 2024</h4>
                                            <p className="text-sm text-gray-600">8 min read</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80" alt="Menopause" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors">Migraines and Menopause</h4>
                                            <p className="text-sm text-gray-600">6 min read</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80" alt="Diet" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors">Migraine-Friendly Diet Guide</h4>
                                            <p className="text-sm text-gray-600">7 min read</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Quick Reference */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Hormonal Migraine Quick Reference</h3>
                            <div className="space-y-3">
                                <div className="border-b border-gray-200 pb-3">
                                    <h4 className="font-medium text-gray-900 mb-1">Most Common Timing</h4>
                                    <p className="text-sm text-gray-700">Day -2 to +3 of menstrual cycle</p>
                                </div>
                                <div className="border-b border-gray-200 pb-3">
                                    <h4 className="font-medium text-gray-900 mb-1">First-Line Acute Treatment</h4>
                                    <p className="text-sm text-gray-700">NSAIDs or triptans at symptom onset</p>
                                </div>
                                <div className="border-b border-gray-200 pb-3">
                                    <h4 className="font-medium text-gray-900 mb-1">Best Preventive Strategy</h4>
                                    <p className="text-sm text-gray-700">Mini-prophylaxis with NSAIDs/triptans</p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900 mb-1">Pregnancy Safety</h4>
                                    <p className="text-sm text-gray-700">Acetaminophen first-line, avoid NSAIDs late</p>
                                </div>
                            </div>
                        </div>

                        {/* Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Helpful Resources</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-purple-600 hover:underline flex items-start gap-2">
                                        <BookOpen className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                        <span>American Migraine Foundation</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-purple-600 hover:underline flex items-start gap-2">
                                        <BookOpen className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                        <span>Migraine Tracking Apps</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-purple-600 hover:underline flex items-start gap-2">
                                        <BookOpen className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                        <span>Find a Headache Specialist</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-purple-600 hover:underline flex items-start gap-2">
                                        <BookOpen className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                        <span>Support Groups</span>
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