"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Clock, AlertTriangle, Eye, HeartPulse, Brain, Bell, Activity, ListChecks } from "lucide-react"

export default function MigraineEarlyWarningGuide() {
    const [email, setEmail] = useState("")
    const [activeTab, setActiveTab] = useState("Prodrome")

    const handleEmailSubmit = (e) => {
        e.preventDefault()
        console.log("Email submitted:", email)
        setEmail("")
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const tabs = ["Prodrome", "Aura", "Triggers", "Management"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Early Warning Signs: Recognizing Migraine Prodrome and Aura
                            </h1>

                            {/* Navigation Tabs */}
                            <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-200">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${activeTab === tab
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
                                <span className="mx-2">•</span>
                                <Clock className="w-4 h-4 mr-1" />
                                <span className="text-sm">7 min read</span>
                            </div>

                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                Migraine attacks often begin with subtle warning signs that occur hours or even days before the headache. Recognizing these early symptoms—including mood changes, food cravings, neck stiffness, and visual disturbances—can help with early intervention and potentially reduce attack severity.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=732&h=549&q=80"
                                    alt="Woman experiencing migraine symptoms"
                                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                                    style={{ maxHeight: '500px' }}
                                />
                            </div>

                            {/* Key Takeaways */}
                            <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-8">
                                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                    <AlertTriangle className="w-5 h-5 text-purple-600 mr-2" />
                                    Key Takeaways
                                </h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>40-60% of migraine sufferers experience prodrome symptoms 1-2 days before headache</li>
                                    <li>Prodrome symptoms include mood changes, food cravings, and fatigue</li>
                                    <li>25% experience aura - visual, sensory, or speech disturbances</li>
                                    <li>Early treatment during prodrome may prevent or reduce attack severity</li>
                                    <li>Keeping a symptom diary helps identify personal warning signs</li>
                                </ul>
                            </div>

                            {/* Understanding Migraine Phases */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Activity className="w-8 h-8 text-purple-600 mr-2" />
                                    Understanding Migraine Phases
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Migraine is more than just a headache—it's a complex neurological event with distinct phases. According to the <a href="#" className="text-blue-600 hover:underline">American Migraine Foundation</a>, a typical migraine attack progresses through four potential phases:
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">1</span>
                                            Prodrome (Pre-Headache)
                                        </h3>
                                        <p className="text-gray-700">
                                            Occurs 1-2 days before migraine in 40-60% of sufferers. Subtle changes in mood, energy, and bodily functions signal the coming attack.
                                        </p>
                                    </div>
                                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">2</span>
                                            Aura
                                        </h3>
                                        <p className="text-gray-700">
                                            Affects 25% of migraineurs. Temporary neurological symptoms (visual, sensory, speech) lasting 20-60 minutes before headache.
                                        </p>
                                    </div>
                                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">3</span>
                                            Headache
                                        </h3>
                                        <p className="text-gray-700">
                                            Moderate to severe throbbing pain, typically one-sided, lasting 4-72 hours. Often accompanied by nausea and light/sound sensitivity.
                                        </p>
                                    </div>
                                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">4</span>
                                            Postdrome
                                        </h3>
                                        <p className="text-gray-700">
                                            "Migraine hangover" lasting up to 48 hours after pain subsides. Symptoms include fatigue, cognitive difficulties, and mood changes.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Why Early Recognition Matters</h3>
                                    <p className="text-gray-700 mb-2">
                                        A <a href="#" className="text-blue-600 hover:underline">2023 study in Neurology</a> found that taking migraine medication during the prodrome phase reduced headache intensity by 42% compared to waiting until pain onset.
                                    </p>
                                    <p className="text-gray-700">
                                        Early intervention may prevent progression to full-blown migraine or reduce its duration and severity.
                                    </p>
                                </div>
                            </section>

                            {/* Prodrome Symptoms */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Bell className="w-8 h-8 text-purple-600 mr-2" />
                                    Prodrome Symptoms: The Early Warning System
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Prodrome symptoms vary widely but often follow predictable patterns for each individual. The most common symptoms reported in a <a href="#" className="text-blue-600 hover:underline">2022 meta-analysis</a> of 5,000 migraine patients:
                                </p>

                                {/* Symptoms Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Symptom Category</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Specific Symptoms</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">% of Patients</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time Before Headache</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Mood Changes</td>
                                                <td className="px-4 py-3">Irritability, depression, euphoria, restlessness</td>
                                                <td className="px-4 py-3 whitespace-nowrap">72%</td>
                                                <td className="px-4 py-3 whitespace-nowrap">6-48 hours</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Food Cravings</td>
                                                <td className="px-4 py-3">Chocolate, carbohydrates, salty foods</td>
                                                <td className="px-4 py-3 whitespace-nowrap">68%</td>
                                                <td className="px-4 py-3 whitespace-nowrap">12-36 hours</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Neck Symptoms</td>
                                                <td className="px-4 py-3">Stiffness, pain, difficulty moving neck</td>
                                                <td className="px-4 py-3 whitespace-nowrap">63%</td>
                                                <td className="px-4 py-3 whitespace-nowrap">24-48 hours</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Fatigue/Yawning</td>
                                                <td className="px-4 py-3">Excessive yawning, sleepiness, low energy</td>
                                                <td className="px-4 py-3 whitespace-nowrap">58%</td>
                                                <td className="px-4 py-3 whitespace-nowrap">12-24 hours</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Sensory Sensitivity</td>
                                                <td className="px-4 py-3">Light, sound, or smell sensitivity</td>
                                                <td className="px-4 py-3 whitespace-nowrap">45%</td>
                                                <td className="px-4 py-3 whitespace-nowrap">6-24 hours</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">!</span>
                                            Most Overlooked Prodrome Signs
                                        </h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>Increased thirst and urination</li>
                                            <li>Difficulty concentrating ("brain fog")</li>
                                            <li>Frequent yawning (more than 10x/hour)</li>
                                            <li>Food cravings (especially chocolate)</li>
                                            <li>Stiff neck (often mistaken for tension)</li>
                                        </ul>
                                    </div>
                                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">✓</span>
                                            Tracking Your Prodrome
                                        </h3>
                                        <p className="text-gray-700">
                                            Keep a migraine diary for at least 3 months to identify your personal prodrome patterns. Note:
                                        </p>
                                        <ol className="list-decimal list-inside text-gray-700 mt-2 space-y-1">
                                            <li>Time of first symptoms</li>
                                            <li>Specific symptoms and their order</li>
                                            <li>Duration before headache begins</li>
                                            <li>Effectiveness of early interventions</li>
                                        </ol>
                                    </div>
                                </div>
                            </section>

                            {/* Aura Symptoms */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Eye className="w-8 h-8 text-purple-600 mr-2" />
                                    Migraine Aura: Neurological Warning Signs
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Migraine aura consists of temporary neurological symptoms that typically develop gradually over 5-20 minutes and last less than 60 minutes. While visual disturbances are most common, aura can affect other senses and functions.
                                </p>

                                {/* Aura Types */}
                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Types of Migraine Aura</h3>
                                    <div className="space-y-4">
                                        <div className="p-4 border border-gray-200 rounded-lg">
                                            <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                                                <span className="text-purple-600 mr-2">●</span>
                                                Visual Aura (Most Common - 90% of cases)
                                            </h4>
                                            <ul className="list-disc list-inside text-gray-700 ml-6 space-y-1">
                                                <li>Flickering lights, spots, or zigzag lines</li>
                                                <li>Temporary blind spots (scotomas)</li>
                                                <li>Tunnel vision or kaleidoscope vision</li>
                                                <li>Visual snow (static-like dots across visual field)</li>
                                            </ul>
                                        </div>
                                        <div className="p-4 border border-gray-200 rounded-lg">
                                            <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                                                <span className="text-purple-600 mr-2">●</span>
                                                Sensory Aura (30% of cases)
                                            </h4>
                                            <ul className="list-disc list-inside text-gray-700 ml-6 space-y-1">
                                                <li>Tingling or "pins and needles" sensation</li>
                                                <li>Numbness that spreads gradually (cheiro-oral pattern)</li>
                                                <li>Altered sense of touch or temperature perception</li>
                                            </ul>
                                        </div>
                                        <div className="p-4 border border-gray-200 rounded-lg">
                                            <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                                                <span className="text-purple-600 mr-2">●</span>
                                                Language Aura (20% of cases)
                                            </h4>
                                            <ul className="list-disc list-inside text-gray-700 ml-6 space-y-1">
                                                <li>Difficulty finding words (aphasia)</li>
                                                <li>Slurred or impaired speech</li>
                                                <li>Trouble understanding language</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Aura Timeline */}
                                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Typical Aura Timeline</h3>
                                    <div className="relative pt-6">
                                        {/* Timeline */}
                                        <div className="flex items-start mb-4">
                                            <div className="flex-shrink-0 bg-purple-600 rounded-full w-4 h-4 mt-1 mr-3"></div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">0-5 minutes</h4>
                                                <p className="text-gray-700">Small visual disturbance appears (often as a tiny dot or flicker)</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start mb-4">
                                            <div className="flex-shrink-0 bg-purple-600 rounded-full w-4 h-4 mt-1 mr-3"></div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">5-20 minutes</h4>
                                                <p className="text-gray-700">Symptoms expand and intensify (zigzag lines grow, tingling spreads)</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start mb-4">
                                            <div className="flex-shrink-0 bg-purple-600 rounded-full w-4 h-4 mt-1 mr-3"></div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">20-40 minutes</h4>
                                                <p className="text-gray-700">Peak symptoms (maximum visual/sensory disturbance)</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="flex-shrink-0 bg-purple-600 rounded-full w-4 h-4 mt-1 mr-3"></div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">40-60 minutes</h4>
                                                <p className="text-gray-700">Gradual resolution of symptoms, often followed by headache</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                                    <h3 className="font-bold text-gray-900 mb-2">Warning:</h3>
                                    <p className="text-gray-700">
                                                                                  New onset aura after age 40, aura lasting &gt;60 minutes, or motor weakness should be evaluated by a doctor to rule out stroke or other neurological conditions.
                                    </p>
                                </div>
                            </section>

                            {/* Management Strategies */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <HeartPulse className="w-8 h-8 text-purple-600 mr-2" />
                                    Early Intervention Strategies
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Recognizing your prodrome or aura symptoms allows for early intervention, which can potentially prevent the headache phase or reduce its severity. Approaches vary based on symptom type and individual response.
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Medication Options</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>
                                                <span className="font-semibold">NSAIDs:</span> Ibuprofen or naproxen taken at first sign may prevent headache development
                                            </li>
                                            <li>
                                                <span className="font-semibold">Triptans:</span> Most effective when taken during aura before pain begins (consult your doctor)
                                            </li>
                                            <li>
                                                <span className="font-semibold">Anti-nausea meds:</span> Can help if prodrome includes nausea or digestive symptoms
                                            </li>
                                            <li>
                                                <span className="font-semibold">CGRP inhibitors:</span> Newer preventive medications that may stop migraine progression
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Non-Drug Approaches</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>
                                                <span className="font-semibold">Hydration:</span> Drink 16-32oz of water with electrolytes at first symptoms
                                            </li>
                                            <li>
                                                <span className="font-semibold">Caffeine:</span> Small amount (50-100mg) may help if not overused
                                            </li>
                                            <li>
                                                <span className="font-semibold">Cold therapy:</span> Apply ice pack to neck or forehead during prodrome
                                            </li>
                                            <li>
                                                <span className="font-semibold">Rest:</span> 20 minutes in a dark, quiet room may abort impending attack
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* 3-Day Prevention Plan */}
                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">3-Day Prevention Plan When Prodrome Begins</h3>
                                    <div className="space-y-4">
                                        <div className="border border-gray-200 rounded-lg overflow-hidden">
                                            <div className="bg-purple-600 px-4 py-2">
                                                <h4 className="font-bold text-white">Day 1 (Prodrome Day)</h4>
                                            </div>
                                            <div className="p-4">
                                                <ul className="list-disc list-inside text-gray-700 space-y-2">
                                                    <li>Take prescribed early intervention medication</li>
                                                    <li>Increase water intake by 50%</li>
                                                    <li>Avoid known triggers (bright lights, strong smells)</li>
                                                    <li>Gentle neck stretches and relaxation exercises</li>
                                                    <li>Early bedtime with sleep mask if light sensitive</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="border border-gray-200 rounded-lg overflow-hidden">
                                            <div className="bg-purple-600 px-4 py-2">
                                                <h4 className="font-bold text-white">Day 2 (Potential Headache Day)</h4>
                                            </div>
                                            <div className="p-4">
                                                <ul className="list-disc list-inside text-gray-700 space-y-2">
                                                    <li>Continue hydration and electrolyte balance</li>
                                                    <li>Use sunglasses indoors if light sensitive</li>
                                                    <li>Eat small, frequent meals with protein</li>
                                                    <li>Apply peppermint oil to temples if nauseous</li>
                                                    <li>Consider canceling non-essential activities</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="border border-gray-200 rounded-lg overflow-hidden">
                                            <div className="bg-purple-600 px-4 py-2">
                                                <h4 className="font-bold text-white">Day 3 (Recovery Day)</h4>
                                            </div>
                                            <div className="p-4">
                                                <ul className="list-disc list-inside text-gray-700 space-y-2">
                                                    <li>Gradually return to normal activities</li>
                                                    <li>Light exercise like walking if tolerated</li>
                                                    <li>Continue hydration and regular meals</li>
                                                    <li>Reflect in migraine diary about what helped</li>
                                                    <li>Schedule relaxation time to prevent rebound</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* When to See a Doctor */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <AlertTriangle className="w-8 h-8 text-purple-600 mr-2" />
                                    When to See a Doctor
                                </h2>

                                <div className="space-y-4">
                                    <div className="p-4 border border-red-200 rounded-lg bg-red-50">
                                        <h3 className="font-bold text-red-800 mb-2">Seek Immediate Medical Attention If You Experience:</h3>
                                        <ul className="list-disc list-inside text-red-800 space-y-1">
                                            <li>"Thunderclap" headache (instant severe pain)</li>
                                                                                          <li>Aura symptoms lasting &gt;60 minutes</li>
                                            <li>First migraine after age 50</li>
                                            <li>Weakness on one side of body</li>
                                            <li>Fever, stiff neck, or rash with headache</li>
                                        </ul>
                                    </div>

                                    <div className="p-4 border border-purple-200 rounded-lg bg-purple-50">
                                        <h3 className="font-bold text-purple-800 mb-2">Schedule a Neurology Consultation If:</h3>
                                        <ul className="list-disc list-inside text-purple-800 space-y-1">
                                            <li>Your warning signs change significantly</li>
                                                                                          <li>Headache frequency increases to &gt;4/month</li>
                                            <li>Over-the-counter meds stop working</li>
                                            <li>Migraines significantly impact your quality of life</li>
                                            <li>You experience new neurological symptoms</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Learning to recognize your personal migraine warning signs is one of the most powerful tools for managing this condition. By paying attention to subtle changes in your body and mind 1-2 days before headache onset, you gain a critical window for early intervention.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    Keep in mind that migraine symptoms evolve over time. What served as a reliable prodrome symptom in your 20s may change in your 40s. Regular updates to your migraine diary will help you stay attuned to these changes.
                                </p>

                                <div className="bg-purple-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "The migraine brain is like a canary in the coal mine—it often senses trouble before the rest of the body does. Learning its warning signals transforms you from victim to empowered manager of your neurological health."
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
                                            Dr. Emily Parker, Neurologist
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600 mb-1">
                                        — Written by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            Jessica Williams
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
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get science-backed migraine tips</h4>
                                <p className="text-gray-700 text-sm">
                                    Weekly strategies, research updates, and expert advice delivered to your inbox.
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

                        {/* Symptom Tracker */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                <ListChecks className="w-5 h-5 text-purple-600 mr-2" />
                                Migraine Symptom Checklist
                            </h3>
                            <div className="space-y-3">
                                <div className="flex items-start">
                                    <input type="checkbox" id="mood" className="mt-1 mr-2" />
                                    <label htmlFor="mood" className="text-gray-700">Mood changes (irritability, depression)</label>
                                </div>
                                <div className="flex items-start">
                                    <input type="checkbox" id="cravings" className="mt-1 mr-2" />
                                    <label htmlFor="cravings" className="text-gray-700">Food cravings (especially sweets)</label>
                                </div>
                                <div className="flex items-start">
                                    <input type="checkbox" id="neck" className="mt-1 mr-2" />
                                    <label htmlFor="neck" className="text-gray-700">Neck stiffness or pain</label>
                                </div>
                                <div className="flex items-start">
                                    <input type="checkbox" id="yawning" className="mt-1 mr-2" />
                                    <label htmlFor="yawning" className="text-gray-700">Excessive yawning</label>
                                </div>
                                <div className="flex items-start">
                                    <input type="checkbox" id="vision" className="mt-1 mr-2" />
                                    <label htmlFor="vision" className="text-gray-700">Visual disturbances</label>
                                </div>
                                <div className="flex items-start">
                                    <input type="checkbox" id="tingling" className="mt-1 mr-2" />
                                    <label htmlFor="tingling" className="text-gray-700">Tingling or numbness</label>
                                </div>
                                <button className="w-full mt-4 bg-purple-50 text-purple-600 font-medium py-2 px-4 rounded-lg border border-purple-200 hover:bg-purple-100 transition-colors">
                                    Download Full Checklist
                                </button>
                            </div>
                        </div>

                        {/* Common Triggers */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Top Migraine Triggers</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span className="font-medium">Trigger</span>
                                    <span className="font-medium">% of Patients</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Stress</span>
                                    <span className="text-purple-600">78%</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Hormonal changes</span>
                                    <span className="text-purple-600">65%</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Sleep changes</span>
                                    <span className="text-purple-600">50%</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Weather changes</span>
                                    <span className="text-purple-600">45%</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Bright/flashing lights</span>
                                    <span className="text-purple-600">38%</span>
                                </div>
                            </div>
                        </div>

                        {/* Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Further Reading</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-purple-600 hover:underline">The Complete Migraine Prevention Guide</a>
                                </li>
                                <li>
                                    <a href="#" className="text-purple-600 hover:underline">Understanding Migraine Medications</a>
                                </li>
                                <li>
                                    <a href="#" className="text-purple-600 hover:underline">Migraine and Mental Health</a>
                                </li>
                                <li>
                                    <a href="#" className="text-purple-600 hover:underline">When to Go to the ER for Headache</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}