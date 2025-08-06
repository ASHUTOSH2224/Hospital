"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Clock, HeartPulse, Activity, Scale, Plus, Minus } from "lucide-react"

export default function BloodPressureFAQs() {
    const [email, setEmail] = useState("")
    const [activeTab, setActiveTab] = useState("Basics")
    const [expandedQuestions, setExpandedQuestions] = useState({})

    const handleEmailSubmit = (e) => {
        e.preventDefault()
        console.log("Email submitted:", email)
        setEmail("")
    }

    

    const toggleQuestion = (id) => {
        setExpandedQuestions(prev => ({
            ...prev,
            [id]: !prev[id]
        }))
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const tabs = ["Basics", "Measurement", "Management", "Complications"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Frequently Asked Questions About Blood Pressure and Heart Health
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
                                    <span className="text-sm">6 min read</span>
                                </div>
                            </div>

                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                Blood pressure is a vital indicator of cardiovascular health, yet many people have questions about what it means, how it's measured, and how to maintain healthy levels. This comprehensive guide answers the most common questions about blood pressure, backed by the latest medical research and expert recommendations.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="/Doctor-measuring-a-patients-blood-pressure-thumbnail.jpg"
                                    alt="Doctor measuring a patient's blood pressure"
                                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                                    style={{ maxHeight: '500px' }}
                                />
                                <p className="text-sm text-gray-500 mt-2 text-center">Proper blood pressure measurement technique is crucial for accurate readings</p>
                            </div>

                            {/* Key Takeaways */}
                            <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-8">
                                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                    <HeartPulse className="w-5 h-5 text-red-600 mr-2" />
                                    Key Takeaways
                                </h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>Normal blood pressure is below 120/80 mmHg</li>
                                    <li>Hypertension often has no symptoms but causes serious damage</li>
                                    <li>Lifestyle changes can significantly lower blood pressure</li>
                                    <li>Home monitoring provides more accurate data than occasional clinic readings</li>
                                    <li>Blood pressure fluctuates throughout the day and in response to various factors</li>
                                </ul>
                            </div>

                            {/* Blood Pressure Basics */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Activity className="w-8 h-8 text-red-600 mr-2" />
                                    Understanding Blood Pressure Basics
                                </h2>

                                <div className="space-y-6">
                                    {/* FAQ Item */}
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <button 
                                            onClick={() => toggleQuestion('q1')}
                                            className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                                        >
                                            <h3 className="text-lg font-medium text-left text-gray-900">
                                                What exactly is blood pressure?
                                            </h3>
                                            {expandedQuestions['q1'] ? (
                                                <Minus className="w-5 h-5 text-red-600" />
                                            ) : (
                                                <Plus className="w-5 h-5 text-red-600" />
                                            )}
                                        </button>
                                        {expandedQuestions['q1'] && (
                                            <div className="p-4 bg-white">
                                                <p className="text-gray-700 mb-4">
                                                    Blood pressure is the force exerted by circulating blood against the walls of the body's arteries, the major blood vessels in the body. It's measured in millimeters of mercury (mmHg) and recorded as two numbers:
                                                </p>
                                                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                                                    <li>
                                                        <strong>Systolic pressure</strong> (the top number) - measures the pressure in your arteries when your heart beats
                                                    </li>
                                                    <li>
                                                        <strong>Diastolic pressure</strong> (the bottom number) - measures the pressure in your arteries when your heart rests between beats
                                                    </li>
                                                </ul>
                                                <p className="text-gray-700">
                                                    According to the American Heart Association, a normal blood pressure reading is below 120/80 mmHg. Readings consistently at or above 130/80 mmHg are considered high blood pressure (hypertension).
                                                </p>
                                            </div>
                                        )}
                                    </div>

                                    {/* FAQ Item */}
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <button 
                                            onClick={() => toggleQuestion('q2')}
                                            className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                                        >
                                            <h3 className="text-lg font-medium text-left text-gray-900">
                                                Why is maintaining healthy blood pressure important?
                                            </h3>
                                            {expandedQuestions['q2'] ? (
                                                <Minus className="w-5 h-5 text-red-600" />
                                            ) : (
                                                <Plus className="w-5 h-5 text-red-600" />
                                            )}
                                        </button>
                                        {expandedQuestions['q2'] && (
                                            <div className="p-4 bg-white">
                                                <p className="text-gray-700 mb-4">
                                                    Healthy blood pressure is crucial because high blood pressure (hypertension) forces your heart to work harder to pump blood to your body. Over time, this can lead to:
                                                </p>
                                                <div className="grid md:grid-cols-2 gap-4 mb-4">
                                                    <div className="bg-red-50 p-3 rounded-lg">
                                                        <h4 className="font-bold text-gray-900 mb-2">Immediate Risks</h4>
                                                        <ul className="list-disc list-inside text-gray-700 space-y-1 pl-2">
                                                            <li>Increased strain on heart muscles</li>
                                                            <li>Reduced blood flow to organs</li>
                                                            <li>Potential for hypertensive crisis</li>
                                                        </ul>
                                                    </div>
                                                    <div className="bg-red-50 p-3 rounded-lg">
                                                        <h4 className="font-bold text-gray-900 mb-2">Long-term Damage</h4>
                                                        <ul className="list-disc list-inside text-gray-700 space-y-1 pl-2">
                                                            <li>Heart disease and heart failure</li>
                                                            <li>Stroke and aneurysm</li>
                                                            <li>Kidney damage and vision loss</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <p className="text-gray-700">
                                                    The <a href="#" className="text-blue-600 hover:underline">CDC reports</a> that nearly half of American adults have hypertension, but only about 1 in 4 have it under control. Proper management can reduce the risk of heart disease and stroke by up to 40%.
                                                </p>
                                            </div>
                                        )}
                                    </div>

                                    {/* FAQ Item */}
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <button 
                                            onClick={() => toggleQuestion('q3')}
                                            className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                                        >
                                            <h3 className="text-lg font-medium text-left text-gray-900">
                                                What are the different blood pressure categories?
                                            </h3>
                                            {expandedQuestions['q3'] ? (
                                                <Minus className="w-5 h-5 text-red-600" />
                                            ) : (
                                                <Plus className="w-5 h-5 text-red-600" />
                                            )}
                                        </button>
                                        {expandedQuestions['q3'] && (
                                            <div className="p-4 bg-white">
                                                <p className="text-gray-700 mb-4">
                                                    The American College of Cardiology and American Heart Association classify blood pressure into these categories:
                                                </p>
                                                <div className="overflow-x-auto">
                                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                                        <thead className="bg-gray-50">
                                                            <tr>
                                                                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Category</th>
                                                                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Systolic (mmHg)</th>
                                                                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Diastolic (mmHg)</th>
                                                                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Action Recommended</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="divide-y divide-gray-200">
                                                            <tr className="bg-green-50">
                                                                <td className="px-4 py-3 font-medium text-gray-900">Normal</td>
                                                                <td className="px-4 py-3">&lt;120</td>
                                                                <td className="px-4 py-3">&lt;80</td>
                                                                <td className="px-4 py-3">Maintain healthy lifestyle</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="px-4 py-3 font-medium text-gray-900">Elevated</td>
                                                                <td className="px-4 py-3">120-129</td>
                                                                <td className="px-4 py-3">&lt;80</td>
                                                                <td className="px-4 py-3">Lifestyle changes</td>
                                                            </tr>
                                                            <tr className="bg-yellow-50">
                                                                <td className="px-4 py-3 font-medium text-gray-900">Hypertension Stage 1</td>
                                                                <td className="px-4 py-3">130-139</td>
                                                                <td className="px-4 py-3">80-89</td>
                                                                <td className="px-4 py-3">Lifestyle changes + possible medication</td>
                                                            </tr>
                                                            <tr className="bg-red-50">
                                                                <td className="px-4 py-3 font-medium text-gray-900">Hypertension Stage 2</td>
                                                                <td className="px-4 py-3">≥140</td>
                                                                <td className="px-4 py-3">≥90</td>
                                                                <td className="px-4 py-3">Lifestyle changes + medication</td>
                                                            </tr>
                                                            <tr className="bg-red-100">
                                                                <td className="px-4 py-3 font-medium text-gray-900">Hypertensive Crisis</td>
                                                                <td className="px-4 py-3">180</td>
                                                                <td className="px-4 py-3">120</td>
                                                                <td className="px-4 py-3">Seek immediate medical attention</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <p className="text-gray-700 mt-4 text-sm">
                                                    *These classifications are for adults not taking blood pressure medications and without acute illness.
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </section>

                            {/* Measurement FAQs */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Scale className="w-8 h-8 text-red-600 mr-2" />
                                    Blood Pressure Measurement FAQs
                                </h2>

                                <div className="space-y-6">
                                    {/* FAQ Item */}
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <button 
                                            onClick={() => toggleQuestion('q4')}
                                            className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                                        >
                                            <h3 className="text-lg font-medium text-left text-gray-900">
                                                How can I get the most accurate blood pressure reading?
                                            </h3>
                                            {expandedQuestions['q4'] ? (
                                                <Minus className="w-5 h-5 text-red-600" />
                                            ) : (
                                                <Plus className="w-5 h-5 text-red-600" />
                                            )}
                                        </button>
                                        {expandedQuestions['q4'] && (
                                            <div className="p-4 bg-white">
                                                <p className="text-gray-700 mb-4">
                                                    For the most accurate blood pressure measurement, follow these steps recommended by cardiologists:
                                                </p>
                                                <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-2 pl-2">
                                                    <li>
                                                        <strong>Prepare properly:</strong> Avoid caffeine, exercise, and smoking for at least 30 minutes before measurement
                                                    </li>
                                                    <li>
                                                        <strong>Rest first:</strong> Sit quietly for 5 minutes with your back supported and feet flat on the floor
                                                    </li>
                                                    <li>
                                                        <strong>Position correctly:</strong> Keep your arm at heart level on a flat surface
                                                    </li>
                                                    <li>
                                                        <strong>Use proper cuff size:</strong> A too-small cuff can give falsely high readings
                                                    </li>
                                                    <li>
                                                        <strong>Measure at consistent times:</strong> Blood pressure varies throughout the day
                                                    </li>
                                                    <li>
                                                        <strong>Take multiple readings:</strong> Wait 1-2 minutes between measurements
                                                    </li>
                                                    <li>
                                                        <strong>Record properly:</strong> Note the time, date, and any relevant circumstances
                                                    </li>
                                                </ol>
                                                <p className="text-gray-700">
                                                    The American Heart Association recommends taking readings at the same time each day, typically morning and evening, for at least 3-4 days to get a reliable average.
                                                </p>
                                            </div>
                                        )}
                                    </div>

                                    {/* FAQ Item */}
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <button 
                                            onClick={() => toggleQuestion('q5')}
                                            className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                                        >
                                            <h3 className="text-lg font-medium text-left text-gray-900">
                                                Why is my blood pressure reading different at home versus at the doctor's office?
                                            </h3>
                                            {expandedQuestions['q5'] ? (
                                                <Minus className="w-5 h-5 text-red-600" />
                                            ) : (
                                                <Plus className="w-5 h-5 text-red-600" />
                                            )}
                                        </button>
                                        {expandedQuestions['q5'] && (
                                            <div className="p-4 bg-white">
                                                <p className="text-gray-700 mb-4">
                                                    This phenomenon is common and has several possible explanations:
                                                </p>
                                                <div className="grid md:grid-cols-2 gap-4 mb-4">
                                                    <div className="bg-blue-50 p-3 rounded-lg">
                                                        <h4 className="font-bold text-gray-900 mb-2">White Coat Hypertension</h4>
                                                        <p className="text-gray-700">
                                                            Blood pressure is higher at the doctor's office due to anxiety or stress about the medical environment.
                                                        </p>
                                                    </div>
                                                    <div className="bg-blue-50 p-3 rounded-lg">
                                                        <h4 className="font-bold text-gray-900 mb-2">Masked Hypertension</h4>
                                                        <p className="text-gray-700">
                                                            Blood pressure is normal at the doctor's but high at home, often due to different measurement conditions.
                                                        </p>
                                                    </div>
                                                </div>
                                                <p className="text-gray-700 mb-2">
                                                    Other factors that can cause variations:
                                                </p>
                                                <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4 pl-2">
                                                    <li>Different measurement devices (mercury vs. digital)</li>
                                                    <li>Recent physical activity or food consumption</li>
                                                    <li>Time of day (BP is typically higher in the morning)</li>
                                                    <li>Body position during measurement</li>
                                                    <li>Cuff placement and size differences</li>
                                                </ul>
                                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                                                    <p className="text-gray-700">
                                                        <strong>Important:</strong> If you consistently notice large differences (15 mmHg) between home and clinical readings, discuss this with your doctor. They may recommend ambulatory blood pressure monitoring (ABPM) for more accurate assessment.
                                                    </p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </section>

                            {/* Management FAQs */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <HeartPulse className="w-8 h-8 text-red-600 mr-2" />
                                    Blood Pressure Management FAQs
                                </h2>

                                <div className="space-y-6">
                                    {/* FAQ Item */}
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <button 
                                            onClick={() => toggleQuestion('q6')}
                                            className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                                        >
                                            <h3 className="text-lg font-medium text-left text-gray-900">
                                                What lifestyle changes can effectively lower blood pressure?
                                            </h3>
                                            {expandedQuestions['q6'] ? (
                                                <Minus className="w-5 h-5 text-red-600" />
                                            ) : (
                                                <Plus className="w-5 h-5 text-red-600" />
                                            )}
                                        </button>
                                        {expandedQuestions['q6'] && (
                                            <div className="p-4 bg-white">
                                                <p className="text-gray-700 mb-4">
                                                    Research shows these lifestyle modifications can significantly reduce blood pressure, sometimes as effectively as medication:
                                                </p>
                                                <div className="grid md:grid-cols-2 gap-4 mb-4">
                                                    <div className="bg-green-50 p-4 rounded-lg">
                                                        <h4 className="font-bold text-gray-900 mb-2">Dietary Approaches</h4>
                                                        <ul className="list-disc list-inside text-gray-700 space-y-1 pl-2">
                                                            <li>Follow the DASH diet (Dietary Approaches to Stop Hypertension)</li>
                                                            <li>Reduce sodium intake to 1,500-2,300 mg/day</li>
                                                            <li>Increase potassium-rich foods (bananas, spinach, avocados)</li>
                                                            <li>Limit alcohol to ≤1 drink/day for women, ≤2 for men</li>
                                                        </ul>
                                                    </div>
                                                    <div className="bg-green-50 p-4 rounded-lg">
                                                        <h4 className="font-bold text-gray-900 mb-2">Physical Activity</h4>
                                                        <ul className="list-disc list-inside text-gray-700 space-y-1 pl-2">
                                                            <li>150 minutes/week moderate exercise (brisk walking, cycling)</li>
                                                            <li>Strength training 2-3 times/week</li>
                                                            <li>Incorporate movement throughout the day</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="grid md:grid-cols-2 gap-4">
                                                    <div className="bg-green-50 p-4 rounded-lg">
                                                        <h4 className="font-bold text-gray-900 mb-2">Weight Management</h4>
                                                        <ul className="list-disc list-inside text-gray-700 space-y-1 pl-2">
                                                            <li>Lose 5-10% of body weight if overweight</li>
                                                            <li>Focus on waist circumference (40" men, 35" women)</li>
                                                        </ul>
                                                    </div>
                                                    <div className="bg-green-50 p-4 rounded-lg">
                                                        <h4 className="font-bold text-gray-900 mb-2">Stress Reduction</h4>
                                                        <ul className="list-disc list-inside text-gray-700 space-y-1 pl-2">
                                                            <li>Practice mindfulness or meditation</li>
                                                            <li>Get 7-9 hours quality sleep nightly</li>
                                                            <li>Try deep breathing exercises</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <p className="text-gray-700 mt-4">
                                                    A <a href="#" className="text-blue-600 hover:underline">2023 meta-analysis</a> found that combining these approaches can reduce systolic BP by 10-20 mmHg, comparable to many antihypertensive medications.
                                                </p>
                                            </div>
                                        )}
                                    </div>

                                    {/* FAQ Item */}
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <button 
                                            onClick={() => toggleQuestion('q7')}
                                            className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                                        >
                                            <h3 className="text-lg font-medium text-left text-gray-900">
                                                When is medication necessary for high blood pressure?
                                            </h3>
                                            {expandedQuestions['q7'] ? (
                                                <Minus className="w-5 h-5 text-red-600" />
                                            ) : (
                                                <Plus className="w-5 h-5 text-red-600" />
                                            )}
                                        </button>
                                        {expandedQuestions['q7'] && (
                                            <div className="p-4 bg-white">
                                                <p className="text-gray-700 mb-4">
                                                    According to current guidelines, medication may be recommended when:
                                                </p>
                                                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2 pl-2">
                                                    <li>Blood pressure remains ≥130/80 mmHg despite 3-6 months of lifestyle changes</li>
                                                    <li>There's evidence of organ damage (heart, kidneys, eyes)</li>
                                                    <li>The patient has diabetes or chronic kidney disease with BP ≥130/80</li>
                                                    <li>There's a history of cardiovascular disease with elevated BP</li>
                                                    <li>Stage 2 hypertension (≥140/90 mmHg) is present</li>
                                                </ul>
                                                <div className="bg-red-50 p-4 rounded-lg mb-4">
                                                    <h4 className="font-bold text-gray-900 mb-2">Common Blood Pressure Medications</h4>
                                                    <div className="overflow-x-auto">
                                                        <table className="min-w-full bg-white">
                                                            <thead>
                                                                <tr>
                                                                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Type</th>
                                                                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Examples</th>
                                                                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">How They Work</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody className="divide-y divide-gray-200">
                                                                <tr>
                                                                    <td className="px-4 py-2">ACE inhibitors</td>
                                                                    <td className="px-4 py-2">Lisinopril, Enalapril</td>
                                                                    <td className="px-4 py-2">Relax blood vessels by blocking hormone formation</td>
                                                                </tr>
                                                                <tr className="bg-gray-50">
                                                                    <td className="px-4 py-2">ARBs</td>
                                                                    <td className="px-4 py-2">Losartan, Valsartan</td>
                                                                    <td className="px-4 py-2">Block hormone action to relax vessels</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="px-4 py-2">Calcium channel blockers</td>
                                                                    <td className="px-4 py-2">Amlodipine, Diltiazem</td>
                                                                    <td className="px-4 py-2">Prevent calcium from entering heart and vessel cells</td>
                                                                </tr>
                                                                <tr className="bg-gray-50">
                                                                    <td className="px-4 py-2">Diuretics</td>
                                                                    <td className="px-4 py-2">Hydrochlorothiazide, Chlorthalidone</td>
                                                                    <td className="px-4 py-2">Help kidneys remove sodium and water</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                                <p className="text-gray-700">
                                                    <strong>Note:</strong> Medication decisions should always be made in consultation with a healthcare provider, considering individual risk factors and potential side effects.
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts on Blood Pressure Management</h2>

                                <p className="text-gray-700 mb-4">
                                    Understanding and managing your blood pressure is one of the most important things you can do for your long-term health. While these FAQs cover the basics, remember that individual needs vary based on your unique health profile.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    The most crucial steps are:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 pl-2">
                                    <li>Get your blood pressure checked regularly (at least annually)</li>
                                    <li>Know your numbers and what they mean</li>
                                    <li>Work with your healthcare provider to develop a personalized plan</li>
                                    <li>Make sustainable lifestyle changes rather than quick fixes</li>
                                    <li>Be patient - blood pressure management is a lifelong commitment</li>
                                </ul>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "Small, consistent changes in daily habits often lead to bigger improvements in blood pressure than occasional drastic measures. Focus on progress, not perfection."
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
                                            Dr. Emily Carter, Cardiologist
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
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get blood pressure tips and updates</h4>
                                <p className="text-gray-700 text-sm">
                                    Weekly insights, research updates, and practical advice for maintaining healthy blood pressure.
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

                        {/* Blood Pressure Chart */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Blood Pressure Chart</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center bg-green-50 p-2 rounded">
                                    <span className="font-medium">Normal</span>
                                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">&lt;120/80</span>
                                </div>
                                <div className="flex justify-between items-center bg-yellow-50 p-2 rounded">
                                    <span className="font-medium">Elevated</span>
                                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm font-medium">120-129/&lt;80</span>
                                </div>
                                <div className="flex justify-between items-center bg-orange-50 p-2 rounded">
                                    <span className="font-medium">Stage 1 Hypertension</span>
                                    <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm font-medium">130-139/80-89</span>
                                </div>
                                <div className="flex justify-between items-center bg-red-50 p-2 rounded">
                                    <span className="font-medium">Stage 2 Hypertension</span>
                                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-medium">≥140/90</span>
                                </div>
                                <div className="flex justify-between items-center bg-red-100 p-2 rounded">
                                    <span className="font-medium">Hypertensive Crisis</span>
                                    <span className="bg-red-200 text-red-900 px-2 py-1 rounded text-sm font-medium">180/120</span>
                                </div>
                            </div>
                            <p className="text-xs text-gray-500 mt-3">
                                *Based on American Heart Association guidelines
                            </p>
                        </div>

                        {/* Top BP-Lowering Foods */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Top 10 Blood Pressure-Lowering Foods</h3>
                            <ol className="list-decimal list-inside text-gray-700 space-y-2 pl-2">
                                <li className="font-medium">Leafy greens (spinach, kale)</li>
                                <li>Berries (blueberries, strawberries)</li>
                                <li>Beets and beet juice</li>
                                <li>Oats and whole grains</li>
                                <li>Bananas and other potassium-rich fruits</li>
                                <li>Fatty fish (salmon, mackerel)</li>
                                <li>Garlic and herbs</li>
                                <li>Dark chocolate (70% cocoa)</li>
                                <li>Pistachios and other nuts</li>
                                <li>Olive oil</li>
                            </ol>
                        </div>

                        {/* Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Further Reading</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-red-600 hover:underline flex items-start">
                                        <span className="mr-2">📘</span>
                                        <span>The DASH Diet Eating Plan</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-red-600 hover:underline flex items-start">
                                        <span className="mr-2">📊</span>
                                        <span>How to Choose a Home Blood Pressure Monitor</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-red-600 hover:underline flex items-start">
                                        <span className="mr-2">🧘</span>
                                        <span>Stress Reduction Techniques for Heart Health</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-red-600 hover:underline flex items-start">
                                        <span className="mr-2">💊</span>
                                        <span>Understanding Blood Pressure Medications</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-red-600 hover:underline flex items-start">
                                        <span className="mr-2">📱</span>
                                        <span>Best Apps for Tracking Blood Pressure</span>
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