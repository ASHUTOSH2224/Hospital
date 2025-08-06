"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Clock, HeartPulse, Scale, AlertCircle, BookOpen } from "lucide-react"

export default function HeartDiseaseGenderDifferences() {
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

    const tabs = ["Overview", "Research Findings", "Symptoms", "Treatment", "Prevention"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <span className="inline-block px-3 py-1 text-sm font-semibold text-red-600 bg-red-100 rounded-full mb-4">
                                Health
                            </span>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Heart Disease: Study Finds Women Get Different Medical Advice Than Men
                            </h1>

                            {/* Navigation Tabs */}
                            <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-200">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${activeTab === tab
                                                ? "border-red-500 text-red-600"
                                                : "border-transparent text-gray-600 hover:text-gray-900"
                                            }`}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>

                            {/* Date and Intro */}
                            <div className="flex items-center text-gray-500 mb-4 gap-4">
                                <div className="flex items-center">
                                    <Calendar className="w-4 h-4 mr-1" />
                                    <span className="text-sm">May 10, 2024</span>
                                </div>
                                <div className="flex items-center">
                                    <Clock className="w-4 h-4 mr-1" />
                                    <span className="text-sm">4 min read</span>
                                </div>
                            </div>

                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                A groundbreaking new study reveals significant gender disparities in how healthcare providers diagnose and treat heart disease. Women are 20% less likely to receive aggressive treatment recommendations and often experience delayed diagnoses compared to men with similar symptoms. This disparity contributes to worse outcomes for women with cardiovascular conditions.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="/red-heart-hands-woman.jpg"
                                    alt="Woman holding a red heart shape with her hands"
                                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                                    style={{ maxHeight: '500px' }}
                                />
                                <p className="text-sm text-gray-500 mt-2">Women often receive different medical advice for heart disease compared to men (Photo: Getty Images)</p>
                            </div>

                            {/* Key Takeaways */}
                            <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-8">
                                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                    <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
                                    Key Findings
                                </h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>Women are 50% more likely to be misdiagnosed following a heart attack</li>
                                    <li>Only 38% of women receive cholesterol-lowering drugs compared to 45% of men</li>
                                    <li>Cardiac rehabilitation is recommended to 15% fewer women than men</li>
                                    <li>Women wait an average of 37 minutes longer for treatment in emergency rooms</li>
                                    <li>Female-specific symptoms are often overlooked by medical professionals</li>
                                </ul>
                            </div>

                            {/* Study Overview */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <BookOpen className="w-8 h-8 text-red-600 mr-2" />
                                    The Landmark Study
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Published in the <span className="font-semibold">Journal of the American Medical Association (JAMA)</span>, the study analyzed over 2 million patient records across 650 hospitals in the United States and Europe. Researchers followed patients for five years to track diagnosis patterns, treatment recommendations, and health outcomes.
                                </p>

                                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Study Methodology</h3>
                                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                                        <li>Participants: 2.1 million patients (48% women, 52% men)</li>
                                        <li>Timeframe: 2018-2023</li>
                                        <li>Conditions: Coronary artery disease, heart failure, arrhythmias</li>
                                        <li>Data collected: Initial symptoms, time to diagnosis, treatment plans, 1-year outcomes</li>
                                    </ul>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Major Disparities Found</h3>

                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Metric</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Women</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Men</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Difference</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Average time to diagnosis</td>
                                                <td className="px-4 py-3 whitespace-nowrap">3.2 days</td>
                                                <td className="px-4 py-3 whitespace-nowrap">1.8 days</td>
                                                <td className="px-4 py-3 whitespace-nowrap text-red-600">+78% longer</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Cardiac catheterization recommended</td>
                                                <td className="px-4 py-3 whitespace-nowrap">42%</td>
                                                <td className="px-4 py-3 whitespace-nowrap">58%</td>
                                                <td className="px-4 py-3 whitespace-nowrap text-red-600">-16%</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Statin prescriptions</td>
                                                <td className="px-4 py-3 whitespace-nowrap">38%</td>
                                                <td className="px-4 py-3 whitespace-nowrap">45%</td>
                                                <td className="px-4 py-3 whitespace-nowrap text-red-600">-7%</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Rehab program referral</td>
                                                <td className="px-4 py-3 whitespace-nowrap">22%</td>
                                                <td className="px-4 py-3 whitespace-nowrap">37%</td>
                                                <td className="px-4 py-3 whitespace-nowrap text-red-600">-15%</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">1-year mortality rate</td>
                                                <td className="px-4 py-3 whitespace-nowrap">8.2%</td>
                                                <td className="px-4 py-3 whitespace-nowrap">6.7%</td>
                                                <td className="px-4 py-3 whitespace-nowrap text-red-600">+1.5%</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <p className="text-gray-700 mb-6">
                                    "These disparities aren't just statistics—they represent real women whose heart conditions were overlooked or undertreated," said Dr. Emily Sanchez, lead researcher of the study. "The gender gap in cardiovascular care is literally costing lives."
                                </p>
                            </section>

                            {/* Symptom Differences */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <HeartPulse className="w-8 h-8 text-red-600 mr-2" />
                                    Gender Differences in Symptoms
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    One key factor contributing to diagnostic delays is that women often present with different symptoms than the "classic" heart attack signs more commonly seen in men. While chest pain remains the most common symptom for both genders, women are more likely to experience:
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-red-50 p-4 rounded-lg">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Common in Women</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Shortness of breath without chest pain</li>
                                            <li>Nausea or vomiting</li>
                                            <li>Back or jaw pain</li>
                                            <li>Lightheadedness or dizziness</li>
                                            <li>Unusual fatigue lasting several days</li>
                                            <li>Indigestion or heartburn-like sensations</li>
                                        </ul>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Common in Men</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Crushing chest pain or pressure</li>
                                            <li>Pain radiating down the left arm</li>
                                            <li>Sudden cold sweat</li>
                                            <li>Sudden overwhelming fatigue</li>
                                            <li>Heaviness in the chest</li>
                                            <li>Classic "elephant on the chest" feeling</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Important Note:</h3>
                                    <p className="text-gray-700">
                                        Both men and women can experience any combination of these symptoms. The presence of "male-typical" symptoms in women or vice versa doesn't rule out heart disease. Any unusual symptoms lasting more than 5 minutes warrant emergency evaluation.
                                    </p>
                                </div>
                            </section>

                            {/* Biological Factors */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why These Differences Exist</h2>

                                <p className="text-gray-700 mb-4">
                                    The disparities in diagnosis and treatment stem from a combination of biological, social, and systemic factors:
                                </p>

                                <div className="space-y-4 mb-6">
                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">1. Biological Differences</h3>
                                        <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                                            <li>Women develop heart disease 7-10 years later than men on average</li>
                                            <li>Estrogen provides some cardiovascular protection before menopause</li>
                                            <li>Women's coronary arteries are smaller and more prone to microvascular disease</li>
                                            <li>Plaque distributes differently in women's arteries</li>
                                        </ul>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">2. Research Bias</h3>
                                        <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                                            <li>Until 1993, women were excluded from most heart disease clinical trials</li>
                                            <li>Only 38% of participants in current cardiovascular trials are women</li>
                                            <li>Most diagnostic tests were developed based on male physiology</li>
                                        </ul>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">3. Sociocultural Factors</h3>
                                        <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                                            <li>Women more often attribute symptoms to stress or anxiety</li>
                                            <li>Healthcare providers more likely to dismiss women's pain reports</li>
                                            <li>Cultural stereotypes about "male" vs "female" diseases persist</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* What Women Can Do */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Protecting Your Heart: Action Steps for Women</h2>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Before Symptoms Appear</h3>
                                        <ol className="list-decimal list-inside text-gray-700 space-y-2">
                                            <li>Know your numbers (blood pressure, cholesterol, blood sugar)</li>
                                            <li>Get regular cardiovascular screenings after age 40 (or earlier with risk factors)</li>
                                            <li>Understand your family history of heart disease</li>
                                            <li>Maintain a heart-healthy lifestyle regardless of current health status</li>
                                        </ol>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">When Seeking Medical Care</h3>
                                        <ol className="list-decimal list-inside text-gray-700 space-y-2">
                                            <li>Describe symptoms clearly and persistently</li>
                                            <li>Use the words "heart attack" if concerned - this triggers protocols</li>
                                            <li>Ask specifically about heart disease if symptoms are dismissed</li>
                                            <li>Request diagnostic tests if you feel they're warranted</li>
                                            <li>Bring an advocate to medical appointments if possible</li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="bg-red-50 p-6 rounded-lg">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Red Flags Women Should Never Ignore</h3>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div className="flex items-start">
                                            <div className="flex-shrink-0 mt-1">
                                                <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                                                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <p className="ml-3 text-gray-700">New onset fatigue that interferes with daily activities</p>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="flex-shrink-0 mt-1">
                                                <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                                                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <p className="ml-3 text-gray-700">Shortness of breath without exertion</p>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="flex-shrink-0 mt-1">
                                                <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                                                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <p className="ml-3 text-gray-700">Unexplained nausea or vomiting</p>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="flex-shrink-0 mt-1">
                                                <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                                                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <p className="ml-3 text-gray-700">Discomfort between shoulder blades</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* The Future of Care */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Changing the Future of Women's Heart Health</h2>

                                <p className="text-gray-700 mb-4">
                                    Medical organizations are implementing changes to address these disparities, but progress takes time. Promising developments include:
                                </p>

                                <div className="space-y-4 mb-6">
                                    <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                                        <h3 className="font-bold text-gray-900 mb-2">New Diagnostic Guidelines</h3>
                                        <p className="text-gray-700">
                                            The American Heart Association now recommends different evaluation protocols for women, including earlier use of advanced imaging for those with "atypical" symptoms.
                                        </p>
                                    </div>

                                    <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                                        <h3 className="font-bold text-gray-900 mb-2">Increased Research Focus</h3>
                                        <p className="text-gray-700">
                                            The NIH now requires clinical trials to include adequate female representation and analyze results by sex. Several women-specific heart studies are underway.
                                        </p>
                                    </div>

                                    <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                                        <h3 className="font-bold text-gray-900 mb-2">Physician Training Programs</h3>
                                        <p className="text-gray-700">
                                            Medical schools are implementing enhanced training on gender differences in disease presentation and unconscious bias recognition.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 italic">
                                        "While systemic change is essential, women shouldn't wait—being proactive about heart health saves lives. If something feels wrong, trust your instincts and persist until you get answers."
                                        <span className="block font-semibold mt-2 not-italic">— Dr. Lisa Martin, Women's Heart Health Specialist</span>
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
                                            Dr. Sarah Johnson, Cardiologist
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600 mb-1">
                                        — Written by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            Michael Chen
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600 flex items-center gap-1">
                                        — <Calendar className="w-3 h-3" />
                                        <a href="#" className="text-blue-600 hover:underline">
                                            Updated on May 10, 2024
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Newsletter Signup */}
                        <div className="bg-red-50 rounded-lg p-6 mb-8">
                            <div className="mb-4">
                                <h3 className="text-sm font-bold text-red-800 uppercase tracking-wide mb-2">HEART HEALTH NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get women's health updates</h4>
                                <p className="text-gray-700 text-sm">
                                    Monthly research summaries, prevention tips, and expert Q&A delivered to your inbox.
                                </p>
                            </div>

                            <form onSubmit={handleEmailSubmit} className="space-y-4">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200"
                                >
                                    SUBSCRIBE
                                </button>
                            </form>

                            <p className="text-xs text-gray-600 mt-3">
                                Your{" "}
                                <a href="#" className="text-red-600 hover:underline">
                                    privacy
                                </a>{" "}
                                is important to us
                            </p>
                        </div>

                        {/* Risk Factors */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Unique Risk Factors for Women</h3>
                            <div className="space-y-3">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-5 h-5 bg-red-500 rounded-full"></div>
                                    </div>
                                    <p className="ml-3 text-gray-700">Pregnancy complications (pre-eclampsia, gestational diabetes)</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-5 h-5 bg-red-500 rounded-full"></div>
                                    </div>
                                    <p className="ml-3 text-gray-700">Early menopause (before age 45)</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-5 h-5 bg-red-500 rounded-full"></div>
                                    </div>
                                    <p className="ml-3 text-gray-700">Autoimmune diseases (lupus, rheumatoid arthritis)</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-5 h-5 bg-red-500 rounded-full"></div>
                                    </div>
                                    <p className="ml-3 text-gray-700">Breast cancer treatment (radiation, certain chemotherapies)</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-5 h-5 bg-red-500 rounded-full"></div>
                                    </div>
                                    <p className="ml-3 text-gray-700">Polycystic ovary syndrome (PCOS)</p>
                                </div>
                            </div>
                        </div>

                        {/* Screening Recommendations */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Recommended Screenings</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-medium text-gray-900 mb-1">Starting at age 20:</h4>
                                    <p className="text-sm text-gray-700">Blood pressure every 2 years if normal</p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900 mb-1">Starting at age 40:</h4>
                                    <p className="text-sm text-gray-700">Annual cholesterol check (lipid panel)</p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900 mb-1">Starting at age 45:</h4>
                                    <p className="text-sm text-gray-700">Blood glucose testing every 3 years</p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900 mb-1">With risk factors:</h4>
                                    <p className="text-sm text-gray-700">Coronary calcium scan as recommended</p>
                                </div>
                            </div>
                        </div>

                        {/* Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Support & Resources</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-red-600 hover:underline flex items-start">
                                        <svg className="w-4 h-4 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                        <span>American Heart Association: Go Red for Women</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-red-600 hover:underline flex items-start">
                                        <svg className="w-4 h-4 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                        <span>WomenHeart: The National Coalition for Women with Heart Disease</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-red-600 hover:underline flex items-start">
                                        <svg className="w-4 h-4 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                        <span>Symptom Checker Tool</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-red-600 hover:underline flex items-start">
                                        <svg className="w-4 h-4 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                        <span>Find a Women's Heart Specialist</span>
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