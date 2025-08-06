"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, HeartPulse, Pill, Droplet, Moon, Brain, Shield } from "lucide-react"

export default function ManagingCancerTreatmentSideEffects() {
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

    const tabs = ["Overview", "Physical Effects", "Emotional Support", "Nutrition Guide"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Managing Cancer Treatment Side Effects: A Comprehensive Guide
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
                                Cancer treatments like chemotherapy, radiation, and immunotherapy can cause challenging side effects. This guide provides evidence-based strategies to manage physical symptoms and emotional distress, helping you maintain quality of life during treatment.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800&h=500&fit=crop"
                                    alt="Compassionate care for cancer patients"
                                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                                    style={{ maxHeight: '500px' }}
                                />
                            </div>

                            {/* Key Takeaways */}
                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
                                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                    <Shield className="w-5 h-5 text-blue-600 mr-2" />
                                    Key Takeaways
                                </h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>80% of patients experience at least one significant side effect during treatment</li>
                                    <li>Early symptom management leads to better treatment adherence</li>
                                    <li>Multidisciplinary approaches are most effective for complex symptoms</li>
                                    <li>Nutritional support can reduce severity of gastrointestinal issues</li>
                                    <li>Mind-body techniques help manage both physical and emotional symptoms</li>
                                </ul>
                            </div>

                            {/* Understanding Side Effects */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <HeartPulse className="w-8 h-8 text-blue-600 mr-2" />
                                    Understanding Treatment Side Effects
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Cancer treatments target rapidly dividing cells, which includes both cancer cells and some healthy cells. According to a <a href="#" className="text-blue-600 hover:underline">2024 meta-analysis in the Journal of Oncology Practice</a>, the most common side effects affect:
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div className="bg-white p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center">
                                            <Pill className="w-5 h-5 text-blue-500 mr-2" />
                                            Physical Symptoms
                                        </h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>Fatigue (reported by 90% of patients)</li>
                                            <li>Nausea and vomiting (70-80%)</li>
                                            <li>Pain (50-60%)</li>
                                            <li>Hair loss (65% with certain chemotherapies)</li>
                                            <li>Mouth sores (40%)</li>
                                        </ul>
                                    </div>
                                    <div className="bg-white p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center">
                                            <Brain className="w-5 h-5 text-blue-500 mr-2" />
                                            Emotional Effects
                                        </h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>Anxiety (45-50%)</li>
                                            <li>Depression (25-30%)</li>
                                            <li>Cognitive changes ("chemo brain") (35%)</li>
                                            <li>Sleep disturbances (60%)</li>
                                            <li>Body image concerns (40%)</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">When to Seek Immediate Help</h3>
                                    <p className="text-gray-700 mb-2">
                                        While most side effects are manageable at home, these symptoms require immediate medical attention:
                                    </p>
                                    <ul className="list-disc list-inside text-gray-700 ml-4">
                                        <li>Fever above 100.4°F (38°C)</li>
                                        <li>Severe diarrhea or vomiting preventing fluid intake</li>
                                        <li>Chest pain or difficulty breathing</li>
                                        <li>Neurological changes like confusion or severe headache</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Managing Physical Side Effects */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Pill className="w-8 h-8 text-blue-600 mr-2" />
                                    Managing Physical Side Effects
                                </h2>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Fatigue Management</h3>
                                <p className="text-gray-700 mb-4">
                                    Cancer-related fatigue affects up to 90% of patients and differs from regular tiredness. A <a href="#" className="text-blue-600 hover:underline">2023 study</a> found these strategies most effective:
                                </p>

                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Strategy</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Effectiveness</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Implementation</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 font-medium text-gray-900">Moderate Exercise</td>
                                                <td className="px-4 py-3">Reduces fatigue by 40-60%</td>
                                                <td className="px-4 py-3">20-30 min walking, yoga, or swimming 3-5x/week</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 font-medium text-gray-900">Energy Conservation</td>
                                                <td className="px-4 py-3">Improves daily function by 35%</td>
                                                <td className="px-4 py-3">Pacing activities, taking regular breaks</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 font-medium text-gray-900">Sleep Hygiene</td>
                                                <td className="px-4 py-3">Improves sleep quality by 50%</td>
                                                <td className="px-4 py-3">Consistent bedtime, cool dark room, limit screens</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Nausea and Vomiting</h3>
                                <p className="text-gray-700 mb-4">
                                    Modern antiemetics have reduced severe nausea, but many patients still experience mild to moderate symptoms. A layered approach works best:
                                </p>

                                <div className="grid md:grid-cols-3 gap-4 mb-6">
                                    <div className="bg-white p-4 border border-blue-100 rounded-lg">
                                        <h4 className="font-bold text-blue-700 mb-2">Prevention</h4>
                                        <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                                            <li>Take prescribed anti-nausea meds before treatment</li>
                                            <li>Eat small, bland meals every 2-3 hours</li>
                                            <li>Stay hydrated with small sips throughout day</li>
                                        </ul>
                                    </div>
                                    <div className="bg-white p-4 border border-blue-100 rounded-lg">
                                        <h4 className="font-bold text-blue-700 mb-2">During Nausea</h4>
                                        <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                                            <li>Ginger tea or candies (proven effective)</li>
                                            <li>Acupressure wrist bands</li>
                                            <li>Cool compress on forehead</li>
                                        </ul>
                                    </div>
                                    <div className="bg-white p-4 border border-blue-100 rounded-lg">
                                        <h4 className="font-bold text-blue-700 mb-2">After Vomiting</h4>
                                        <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                                            <li>Rinse mouth with baking soda solution</li>
                                            <li>Wait 30-60 min before eating/drinking</li>
                                            <li>Start with ice chips or clear liquids</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                                    <h4 className="font-bold text-gray-900 mb-2">Foods That Help With Nausea</h4>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
                                        <div className="bg-white p-2 rounded">
                                            <div className="text-blue-600 font-medium">Ginger</div>
                                            <div className="text-xs text-gray-600">Fresh or candied</div>
                                        </div>
                                        <div className="bg-white p-2 rounded">
                                            <div className="text-blue-600 font-medium">Bananas</div>
                                            <div className="text-xs text-gray-600">Easy to digest</div>
                                        </div>
                                        <div className="bg-white p-2 rounded">
                                            <div className="text-blue-600 font-medium">Crackers</div>
                                            <div className="text-xs text-gray-600">Plain, dry</div>
                                        </div>
                                        <div className="bg-white p-2 rounded">
                                            <div className="text-blue-600 font-medium">Mint</div>
                                            <div className="text-xs text-gray-600">Tea or leaves</div>
                                        </div>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Pain Management</h3>
                                <p className="text-gray-700 mb-4">
                                    Cancer pain can come from tumors, treatment, or both. The World Health Organization's pain ladder recommends:
                                </p>

                                <div className="flex flex-col md:flex-row gap-4 mb-6">
                                    <div className="flex-1 bg-white p-4 border border-gray-200 rounded-lg">
                                        <div className="flex items-center mb-2">
                                            <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-2">1</div>
                                            <h4 className="font-bold text-gray-900">Mild Pain</h4>
                                        </div>
                                        <p className="text-gray-700 text-sm">Non-opioids: Acetaminophen, NSAIDs + adjuvants</p>
                                    </div>
                                    <div className="flex-1 bg-white p-4 border border-gray-200 rounded-lg">
                                        <div className="flex items-center mb-2">
                                            <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-2">2</div>
                                            <h4 className="font-bold text-gray-900">Moderate Pain</h4>
                                        </div>
                                        <p className="text-gray-700 text-sm">Weak opioids: Codeine, tramadol + non-opioids</p>
                                    </div>
                                    <div className="flex-1 bg-white p-4 border border-gray-200 rounded-lg">
                                        <div className="flex items-center mb-2">
                                            <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-2">3</div>
                                            <h4 className="font-bold text-gray-900">Severe Pain</h4>
                                        </div>
                                        <p className="text-gray-700 text-sm">Strong opioids: Morphine, oxycodone + adjuvants</p>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                    <h4 className="font-bold text-gray-900 mb-2">Important Note:</h4>
                                    <p className="text-gray-700">
                                        Always take pain medication as prescribed. Don't wait until pain is severe to medicate - it's harder to control established pain.
                                    </p>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Mouth and Throat Sores</h3>
                                <p className="text-gray-700 mb-4">
                                    Mucositis affects up to 40% of chemotherapy patients. Prevention and early treatment are key:
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-2">Oral Care Routine</h4>
                                        <ul className="list-decimal list-inside text-gray-700 space-y-1">
                                            <li>Use soft-bristle toothbrush</li>
                                            <li>Rinse with saline/baking soda solution 4-6x/day</li>
                                            <li>Avoid alcohol-based mouthwashes</li>
                                            <li>Keep lips moist with petroleum-free balm</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-2">Eating With Sores</h4>
                                        <ul className="list-decimal list-inside text-gray-700 space-y-1">
                                            <li>Choose soft, bland foods at room temperature</li>
                                            <li>Use straws to bypass painful areas</li>
                                            <li>Try nutritional supplements if eating is too painful</li>
                                            <li>Avoid acidic, spicy, or rough-textured foods</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Emotional and Cognitive Support */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Brain className="w-8 h-8 text-blue-600 mr-2" />
                                    Emotional and Cognitive Support
                                </h2>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Managing Anxiety and Depression</h3>
                                <p className="text-gray-700 mb-4">
                                    Emotional distress is common but treatable. Research shows these approaches help:
                                </p>

                                <div className="grid md:grid-cols-3 gap-4 mb-6">
                                    <div className="bg-white p-4 border border-blue-100 rounded-lg">
                                        <h4 className="font-bold text-blue-700 mb-2">Psychotherapy</h4>
                                        <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                                            <li>Cognitive Behavioral Therapy (CBT) reduces distress by 50%</li>
                                            <li>Support groups decrease feelings of isolation</li>
                                            <li>Mindfulness techniques lower anxiety</li>
                                        </ul>
                                    </div>
                                    <div className="bg-white p-4 border border-blue-100 rounded-lg">
                                        <h4 className="font-bold text-blue-700 mb-2">Medication</h4>
                                        <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                                            <li>SSRIs for depression/anxiety</li>
                                            <li>Short-term anti-anxiety meds for acute distress</li>
                                            <li>Careful monitoring for interactions</li>
                                        </ul>
                                    </div>
                                    <div className="bg-white p-4 border border-blue-100 rounded-lg">
                                        <h4 className="font-bold text-blue-700 mb-2">Lifestyle</h4>
                                        <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                                            <li>Regular gentle exercise</li>
                                            <li>Maintaining social connections</li>
                                            <li>Creative expression (art, journaling)</li>
                                        </ul>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4">"Chemo Brain" - Cognitive Changes</h3>
                                <p className="text-gray-700 mb-4">
                                    Many patients report memory lapses, difficulty concentrating, and mental fog. While usually temporary, these strategies can help:
                                </p>

                                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-2">Compensation Strategies</h4>
                                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                                                <li>Use planners and reminder apps</li>
                                                <li>Keep important items in consistent places</li>
                                                <li>Break tasks into smaller steps</li>
                                                <li>Minimize distractions when possible</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-2">Brain Health</h4>
                                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                                                <li>Stay mentally active (puzzles, reading)</li>
                                                <li>Get adequate sleep</li>
                                                <li>Manage stress through relaxation</li>
                                                <li>Stay socially engaged</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Nutrition During Treatment */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Droplet className="w-8 h-8 text-blue-600 mr-2" />
                                    Nutrition During Treatment
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Proper nutrition helps maintain strength, manage side effects, and support recovery. Needs vary by treatment type and individual tolerance.
                                </p>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4">General Guidelines</h3>
                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-2">When Eating is Difficult</h4>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>Eat small, frequent meals (6-8x/day)</li>
                                            <li>Choose high-calorie, high-protein foods</li>
                                            <li>Drink nutritional supplements if needed</li>
                                            <li>Eat when you feel best (often mornings)</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-2">Food Safety</h4>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>Avoid raw or undercooked foods</li>
                                            <li>Wash fruits/vegetables thoroughly</li>
                                            <li>Use separate cutting boards for meats</li>
                                            <li>Check expiration dates carefully</li>
                                        </ul>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Sample Meal Plan</h3>
                                <div className="space-y-4 mb-6">
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Day 1 (High Protein)</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Breakfast</h4>
                                                <p className="text-gray-700">Scrambled eggs with cheese, oatmeal with banana</p>
                                            </div>
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Lunch</h4>
                                                <p className="text-gray-700">Chicken noodle soup, crackers, Greek yogurt</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">Dinner</h4>
                                                <p className="text-gray-700">Baked salmon, mashed sweet potatoes, steamed carrots</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Day 2 (Gentle on Stomach)</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Breakfast</h4>
                                                <p className="text-gray-700">Toast with peanut butter, applesauce, herbal tea</p>
                                            </div>
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Lunch</h4>
                                                <p className="text-gray-700">Rice with boiled chicken, steamed zucchini</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">Dinner</h4>
                                                <p className="text-gray-700">Baked potato with butter, scrambled eggs, banana</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <h3 className="font-bold text-gray-900 mb-2">Hydration Tips</h3>
                                    <div className="grid md:grid-cols-3 gap-3 text-center">
                                        <div className="bg-white p-2 rounded">
                                            <div className="text-blue-600 font-medium">Sip Frequently</div>
                                            <div className="text-xs text-gray-600">Small amounts all day</div>
                                        </div>
                                        <div className="bg-white p-2 rounded">
                                            <div className="text-blue-600 font-medium">Flavor Options</div>
                                            <div className="text-xs text-gray-600">Herbal tea, lemon water</div>
                                        </div>
                                        <div className="bg-white p-2 rounded">
                                            <div className="text-blue-600 font-medium">Hydrating Foods</div>
                                            <div className="text-xs text-gray-600">Soup, watermelon, cucumbers</div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Managing cancer treatment side effects requires patience and a proactive approach. Remember that most side effects are temporary and will improve after treatment ends. Keep open communication with your healthcare team about any symptoms you experience.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    Every patient's experience is unique - what works for one person may not work for another. Be gentle with yourself and celebrate small victories along the way.
                                </p>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "You are not just surviving cancer treatment - you are actively healing. Each day you manage symptoms is a day you're taking back control of your health."
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
                                            Dr. Emily Carter, Oncologist
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600 mb-1">
                                        — Written by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            Sarah Williams
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

                        {/* Emergency Contacts */}
                        <div className="bg-red-50 rounded-lg p-6 mb-8 border-l-4 border-red-500">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Emergency Contacts</h3>
                            <div className="space-y-3">
                                <div>
                                    <h4 className="font-medium text-gray-900">Your Oncologist</h4>
                                    <p className="text-sm text-gray-700">(555) 123-4567 (24/7 line)</p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900">Nearest Cancer Center</h4>
                                    <p className="text-sm text-gray-700">City Cancer Center: (555) 987-6543</p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900">National Support</h4>
                                    <p className="text-sm text-gray-700">Cancer Helpline: 1-800-4-CANCER</p>
                                </div>
                            </div>
                        </div>

                        {/* Symptom Tracker */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Symptom Tracker</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-medium text-gray-900 mb-2">Daily Checklist</h4>
                                    <div className="space-y-2">
                                        <label className="flex items-center">
                                            <input type="checkbox" className="rounded text-blue-600 mr-2" />
                                            <span className="text-sm">Fatigue level (1-10)</span>
                                        </label>
                                        <label className="flex items-center">
                                            <input type="checkbox" className="rounded text-blue-600 mr-2" />
                                            <span className="text-sm">Nausea episodes</span>
                                        </label>
                                        <label className="flex items-center">
                                            <input type="checkbox" className="rounded text-blue-600 mr-2" />
                                            <span className="text-sm">Pain locations</span>
                                        </label>
                                        <label className="flex items-center">
                                            <input type="checkbox" className="rounded text-blue-600 mr-2" />
                                            <span className="text-sm">Food/water intake</span>
                                        </label>
                                    </div>
                                </div>
                                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 text-sm">
                                    Download Full Tracker
                                </button>
                            </div>
                        </div>

                        {/* Support Resources */}
                        <div className="bg-blue-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Support Resources</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-start">
                                        <HeartPulse className="w-4 h-4 mt-1 mr-2 flex-shrink-0" />
                                        <span>Cancer Support Community</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-start">
                                        <Moon className="w-4 h-4 mt-1 mr-2 flex-shrink-0" />
                                        <span>Sleep Improvement Guide</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-start">
                                        <Droplet className="w-4 h-4 mt-1 mr-2 flex-shrink-0" />
                                        <span>Nutrition During Treatment</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-start">
                                        <Brain className="w-4 h-4 mt-1 mr-2 flex-shrink-0" />
                                        <span>Managing Chemo Brain</span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Newsletter Signup */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Get More Support</h3>
                            <p className="text-gray-700 text-sm mb-4">
                                Join our newsletter for weekly tips on managing treatment side effects.
                            </p>

                            <form onSubmit={handleEmailSubmit} className="space-y-3">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Your email address"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 text-sm"
                                >
                                    Subscribe
                                </button>
                            </form>

                            <p className="text-xs text-gray-600 mt-3">
                                We respect your privacy. Unsubscribe at any time.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}