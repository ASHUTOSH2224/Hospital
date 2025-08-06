"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, AlertTriangle, HeartPulse, Stethoscope, Pill, Utensils, Activity } from "lucide-react"

export default function DigestiveProblemGuide() {
    const [email, setEmail] = useState("")
    const [activeTab, setActiveTab] = useState("Symptoms")

    const handleEmailSubmit = (e) => {
        e.preventDefault()
        console.log("Email submitted:", email)
        setEmail("")
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const tabs = ["Symptoms", "Causes", "Diagnosis", "Treatment"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Recognizing Digestive Problem Warning Signs and Symptoms
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
                                <span className="text-sm">Updated on June 19, 2024</span>
                            </div>

                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                Digestive problems can range from mild discomfort to serious conditions requiring immediate medical attention. Learning to identify potential digestive issues and understanding when to seek help can prevent complications and improve your quality of life. This comprehensive guide covers warning signs, common symptoms, underlying causes, and when to consult a healthcare professional.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1535914254981-b5012eebbd15?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80"
                                    alt="Digestive system illustration"
                                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                                    style={{ maxHeight: '500px' }}
                                />
                            </div>

                            {/* Key Takeaways */}
                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
                                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                    <Activity className="w-5 h-5 text-blue-600 mr-2" />
                                    Key Takeaways
                                </h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>Persistent symptoms lasting more than two weeks warrant medical evaluation</li>
                                    <li>Blood in stool, unexplained weight loss, and severe pain are red flags</li>
                                    <li>Common digestive disorders affect 60-70 million Americans annually</li>
                                    <li>Early detection improves treatment outcomes significantly</li>
                                    <li>Lifestyle changes can prevent many digestive problems</li>
                                </ul>
                            </div>

                            {/* Common Warning Signs */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <AlertTriangle className="w-8 h-8 text-blue-600 mr-2" />
                                    Common Digestive Warning Signs
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Your digestive system communicates through symptoms. While occasional discomfort is normal, persistent or severe symptoms may indicate underlying issues. According to the <a href="#" className="text-blue-600 hover:underline">American Gastroenterological Association</a>, these are the most concerning warning signs:
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">!</span>
                                            Emergency Symptoms
                                        </h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                                            <li>Severe abdominal pain that worsens</li>
                                            <li>Vomiting blood or coffee-ground material</li>
                                            <li>Black, tarry stools (melena)</li>
                                            <li>Inability to pass stool with vomiting</li>
                                            <li>Sudden, intense rectal pain</li>
                                        </ul>
                                    </div>
                                    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">!</span>
                                            Concerning Symptoms
                                        </h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                                            <li>Unexplained weight loss (10+ lbs)</li>
                                            <li>Persistent heartburn or indigestion</li>
                                            <li>Difficulty swallowing</li>
                                            <li>Chronic diarrhea or constipation</li>
                                            <li>Jaundice (yellow skin/eyes)</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">When to Seek Immediate Care:</h3>
                                    <p className="text-gray-700">
                                        Symptoms accompanied by fever, dizziness, rapid heartbeat, or confusion require emergency evaluation. These may indicate severe infection, internal bleeding, or bowel obstruction.
                                    </p>
                                </div>
                            </section>

                            {/* Symptom Breakdown */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <HeartPulse className="w-8 h-8 text-blue-600 mr-2" />
                                    Detailed Symptom Breakdown
                                </h2>

                                {/* Abdominal Pain */}
                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Abdominal Pain</h3>
                                    <p className="text-gray-700 mb-4">
                                        Abdominal pain accounts for 5% of emergency room visits. The location, quality, and timing of pain provide important diagnostic clues:
                                    </p>

                                    <div className="overflow-x-auto mb-6">
                                        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Possible Conditions</th>
                                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Characteristics</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200">
                                                <tr>
                                                    <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Upper Right</td>
                                                    <td className="px-4 py-3">Gallstones, hepatitis</td>
                                                    <td className="px-4 py-3">Colicky, radiates to back</td>
                                                </tr>
                                                <tr className="bg-gray-50">
                                                    <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Upper Middle</td>
                                                    <td className="px-4 py-3">GERD, gastritis</td>
                                                    <td className="px-4 py-3">Burning, worsens after eating</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Lower Left</td>
                                                    <td className="px-4 py-3">Diverticulitis, IBS</td>
                                                    <td className="px-4 py-3">Cramping, bloating</td>
                                                </tr>
                                                <tr className="bg-gray-50">
                                                    <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Diffuse</td>
                                                    <td className="px-4 py-3">Food poisoning, IBD</td>
                                                    <td className="px-4 py-3">Constant, with diarrhea</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                {/* Bowel Changes */}
                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Changes in Bowel Habits</h3>
                                    <p className="text-gray-700 mb-4">
                                        The Bristol Stool Chart classifies stool into 7 types. Significant changes lasting more than 3 days may indicate problems:
                                    </p>

                                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-2">Diarrhea (Types 5-7)</h4>
                                            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                                                <li>Watery, loose stools 3+ times/day</li>
                                                <li>Acute: Often infection or food reaction</li>
                                                <li>Chronic: May indicate IBS, IBD, or malabsorption</li>
                                                <li>Danger signs: Blood, fever, dehydration</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-2">Constipation (Types 1-2)</h4>
                                            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                                                <li>Hard, lumpy stools</li>
                                                <li>Fewer than 3 bowel movements/week</li>
                                                <li>Common causes: Low fiber, dehydration, medications</li>
                                                <li>Concerning if new onset in older adults</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Other Symptoms */}
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Other Digestive Symptoms</h3>
                                    <div className="space-y-4">
                                        <div className="p-4 border border-gray-200 rounded-lg">
                                            <h4 className="font-bold text-gray-900 mb-2">Heartburn and Indigestion</h4>
                                            <p className="text-gray-700">
                                                Occasional heartburn is common, but frequent symptoms (2+ times/week) may indicate GERD. Nighttime symptoms increasing cancer risk.
                                            </p>
                                        </div>
                                        <div className="p-4 border border-gray-200 rounded-lg">
                                            <h4 className="font-bold text-gray-900 mb-2">Bloating and Gas</h4>
                                            <p className="text-gray-700">
                                                Normal after certain foods but persistent bloating with pain may suggest lactose intolerance, SIBO, or ovarian issues in women.
                                            </p>
                                        </div>
                                        <div className="p-4 border border-gray-200 rounded-lg">
                                            <h4 className="font-bold text-gray-900 mb-2">Nausea and Vomiting</h4>
                                            <p className="text-gray-700">
                                                Acute causes include food poisoning or viruses. Chronic nausea may indicate gastroparesis, ulcers, or pregnancy.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Common Digestive Disorders */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Stethoscope className="w-8 h-8 text-blue-600 mr-2" />
                                    Common Digestive Disorders
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Understanding common digestive disorders helps contextualize symptoms. Here are prevalence data and key features:
                                </p>

                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Condition</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prevalence</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Key Symptoms</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Risk Factors</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 font-medium text-gray-900">GERD</td>
                                                <td className="px-4 py-3">20% of adults</td>
                                                <td className="px-4 py-3">Heartburn, regurgitation</td>
                                                <td className="px-4 py-3">Obesity, smoking, hiatal hernia</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 font-medium text-gray-900">IBS</td>
                                                <td className="px-4 py-3">10-15% worldwide</td>
                                                <td className="px-4 py-3">Abdominal pain, altered bowel habits</td>
                                                <td className="px-4 py-3">Stress, food sensitivities</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 font-medium text-gray-900">IBD</td>
                                                <td className="px-4 py-3">3 million Americans</td>
                                                <td className="px-4 py-3">Diarrhea, weight loss, fatigue</td>
                                                <td className="px-4 py-3">Genetics, autoimmune factors</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 font-medium text-gray-900">Celiac Disease</td>
                                                <td className="px-4 py-3">1% population</td>
                                                <td className="px-4 py-3">Diarrhea, bloating, nutrient deficiencies</td>
                                                <td className="px-4 py-3">Genetic predisposition</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            {/* Diagnostic Process */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Diagnostic Process</h2>

                                <p className="text-gray-700 mb-4">
                                    When you present with digestive symptoms, doctors typically follow this diagnostic pathway:
                                </p>

                                <div className="space-y-4 mb-6">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 bg-blue-100 rounded-full p-2 mr-4">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center">1</span>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 mb-1">Medical History</h3>
                                            <p className="text-gray-700">
                                                Detailed questions about symptoms, duration, patterns, family history, medications, and lifestyle factors.
                                            </p>
                                        </div>
                                    </div>
                                    {/* More steps... */}
                                </div>

                                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Common Diagnostic Tests</h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>Blood tests (CBC, CRP, liver enzymes)</li>
                                            <li>Stool tests (culture, occult blood)</li>
                                            <li>Endoscopy/Colonoscopy</li>
                                        </ul>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>Imaging (CT, MRI, ultrasound)</li>
                                            <li>Breath tests (lactose, SIBO)</li>
                                            <li>Biopsy (celiac, IBD)</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Treatment Options */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Pill className="w-8 h-8 text-blue-600 mr-2" />
                                    Treatment Approaches
                                </h2>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Lifestyle Modifications</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                                            <li>Dietary changes (FODMAP, gluten-free)</li>
                                            <li>Stress reduction techniques</li>
                                            <li>Regular physical activity</li>
                                            <li>Adequate hydration</li>
                                            <li>Smoking cessation</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Medications</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                                            <li>Antacids and PPIs (for GERD)</li>
                                            <li>Antispasmodics (for IBS)</li>
                                            <li>Anti-inflammatories (for IBD)</li>
                                            <li>Antibiotics (for infections)</li>
                                            <li>Probiotics (for microbiome balance)</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                                    <h3 className="font-bold text-gray-900 mb-2">When Surgery May Be Needed:</h3>
                                    <p className="text-gray-700">
                                        Severe cases of gallstones, hernias, IBD complications, or cancers may require surgical intervention. New minimally invasive techniques reduce recovery time.
                                    </p>
                                </div>
                            </section>

                            {/* Prevention */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Prevention Strategies</h2>

                                <div className="space-y-6">
                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                                            <Utensils className="w-5 h-5 text-blue-600 mr-2" />
                                            Dietary Recommendations
                                        </h3>
                                        <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                                            <li>25-30g fiber daily from varied sources</li>
                                            <li>Limit processed foods and additives</li>
                                            <li>Stay hydrated (8 cups water/day)</li>
                                            <li>Eat fermented foods for gut health</li>
                                            <li>Practice mindful eating</li>
                                        </ul>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">Screening Guidelines</h3>
                                        <div className="overflow-x-auto">
                                            <table className="min-w-full bg-white">
                                                <thead className="bg-gray-50">
                                                    <tr>
                                                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Test</th>
                                                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age to Start</th>
                                                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Frequency</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200">
                                                    <tr>
                                                        <td className="px-4 py-2">Colonoscopy</td>
                                                        <td className="px-4 py-2">45 (average risk)</td>
                                                        <td className="px-4 py-2">Every 10 years</td>
                                                    </tr>
                                                    <tr className="bg-gray-50">
                                                        <td className="px-4 py-2">Celiac Screen</td>
                                                        <td className="px-4 py-2">Any age with symptoms</td>
                                                        <td className="px-4 py-2">As needed</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Digestive symptoms are common but shouldn't be ignored. While occasional discomfort is normal, persistent or severe symptoms warrant medical evaluation. Early detection of digestive disorders leads to better outcomes and can prevent complications.
                                </p>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "Listen to your gut—literally. Your digestive system's warning signs are valuable messages about your health. Don't dismiss persistent symptoms as 'just stress' or 'something I ate.' A proper evaluation can provide answers and relief."
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
                                            Dr. Emily Parker, MD
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600 mb-1">
                                        — Written by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            Sarah Johnson
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600 flex items-center gap-1">
                                        — <Calendar className="w-3 h-3" />
                                        <a href="#" className="text-blue-600 hover:underline">
                                            Updated on June 19, 2024
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Newsletter Signup */}
                        <div className="bg-blue-50 rounded-lg p-6 mb-8">
                            <div className="mb-4">
                                <h3 className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-2">HEALTH NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get digestive health tips</h4>
                                <p className="text-gray-700 text-sm">
                                    Weekly advice on gut health, symptom management, and prevention strategies.
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

                        {/* Symptom Checker */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Symptom Checker</h3>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <input type="checkbox" id="symptom1" className="rounded text-blue-600 focus:ring-blue-500" />
                                    <label htmlFor="symptom1" className="text-gray-700">Persistent abdominal pain</label>
                                </div>
                                {/* More symptoms... */}
                                <button className="w-full mt-4 bg-blue-50 text-blue-600 font-medium py-2 px-4 rounded-lg hover:bg-blue-100 transition-colors">
                                    Evaluate Symptoms
                                </button>
                            </div>
                        </div>

                        {/* Emergency Contacts */}
                        <div className="bg-red-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                <AlertTriangle className="w-5 h-5 text-red-600 mr-2" />
                                Emergency Contacts
                            </h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="text-red-600 hover:underline font-medium">National Poison Control</a>
                                    <p className="text-sm text-gray-600">1-800-222-1222</p>
                                </li>
                                <li>
                                    <a href="#" className="text-red-600 hover:underline font-medium">GI Emergency Hotline</a>
                                    <p className="text-sm text-gray-600">1-800-GI-HELP</p>
                                </li>
                            </ul>
                        </div>

                        {/* Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Further Reading</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">The Gut-Brain Connection</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Probiotics Guide</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Fiber-Rich Foods</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Stress and Digestion</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}