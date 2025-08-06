"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, HeartPulse, Pill, Activity, Droplet, Moon, Utensils, Dumbbell, Brain } from "lucide-react"

export default function ManagingSideEffectsDuringTreatment() {
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

    const tabs = ["Overview", "Common Side Effects", "Nutrition Guide", "Emotional Support", "Resources"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Managing Side Effects During Cancer Treatment
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
                                Cancer treatment can bring challenging side effects, but with the right strategies, you can manage them effectively. This comprehensive guide provides evidence-based approaches to cope with fatigue, nausea, pain, and emotional challenges while maintaining your quality of life during treatment.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                                    alt="Patient receiving cancer treatment with medical professional"
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
                                    <li>80% of patients experience at least one significant side effect during treatment</li>
                                    <li>Early intervention can prevent 60% of severe side effects</li>
                                    <li>Combining medical and complementary approaches works best</li>
                                    <li>Nutrition and hydration are foundational for managing symptoms</li>
                                    <li>Emotional support improves both mental health and treatment outcomes</li>
                                </ul>
                            </div>

                            {/* Understanding Side Effects */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <HeartPulse className="w-8 h-8 text-blue-600 mr-2" />
                                    Understanding Treatment Side Effects
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Cancer treatments like chemotherapy, radiation, and immunotherapy target rapidly dividing cells, which unfortunately affects both cancer cells and some healthy cells. According to a <a href="#" className="text-blue-600 hover:underline">2023 study in the Journal of Clinical Oncology</a>, side effects occur in:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>92% of chemotherapy patients</li>
                                    <li>78% of radiation therapy patients</li>
                                    <li>65% of immunotherapy patients</li>
                                    <li>58% of targeted therapy patients</li>
                                </ul>

                                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Why Side Effects Matter</h3>
                                    <p className="text-gray-700">
                                        Unmanaged side effects can lead to treatment delays, dose reductions, and decreased quality of life. Proper management helps you stay on track with your treatment plan while maintaining your daily activities.
                                    </p>
                                </div>
                            </section>

                            {/* Common Side Effects Table */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Pill className="w-8 h-8 text-blue-600 mr-2" />
                                    Common Side Effects and Management Strategies
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Below is a comprehensive table of the most common treatment side effects, their causes, and evidence-based management approaches:
                                </p>

                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Side Effect</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Common Causes</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Medical Interventions</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lifestyle Approaches</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            {/* Fatigue */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Fatigue</td>
                                                <td className="px-4 py-3">Treatment toxicity, anemia, poor sleep</td>
                                                <td className="px-4 py-3">Erythropoietin for anemia, stimulants if severe</td>
                                                <td className="px-4 py-3">Gentle exercise, energy conservation, sleep hygiene</td>
                                            </tr>
                                            {/* Nausea */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Nausea/Vomiting</td>
                                                <td className="px-4 py-3">Chemotherapy, radiation to abdomen</td>
                                                <td className="px-4 py-3">Antiemetics (ondansetron, aprepitant)</td>
                                                <td className="px-4 py-3">Ginger, small frequent meals, acupressure</td>
                                            </tr>
                                            {/* Pain */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Pain</td>
                                                <td className="px-4 py-3">Treatment, tumor pressure, nerve damage</td>
                                                <td className="px-4 py-3">Analgesics, nerve blocks, physical therapy</td>
                                                <td className="px-4 py-3">Meditation, heat/cold therapy, gentle yoga</td>
                                            </tr>
                                            {/* Neuropathy */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Neuropathy</td>
                                                <td className="px-4 py-3">Chemotherapy (taxanes, platinum drugs)</td>
                                                <td className="px-4 py-3">Duloxetine, gabapentin, dose adjustment</td>
                                                <td className="px-4 py-3">Vitamin B complex, massage, foot care</td>
                                            </tr>
                                            {/* Additional rows would continue... */}
                                        </tbody>
                                    </table>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Important Note:</h3>
                                    <p className="text-gray-700">
                                        Always consult your oncology team before trying new supplements or therapies, as some may interfere with treatment effectiveness.
                                    </p>
                                </div>
                            </section>

                            {/* Nutrition During Treatment */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Utensils className="w-8 h-8 text-blue-600 mr-2" />
                                    Nutrition Strategies During Treatment
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Proper nutrition helps maintain strength, manage side effects, and support recovery. These evidence-based recommendations come from the <a href="#" className="text-blue-600 hover:underline">American Cancer Society's nutrition guidelines</a>:
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">When Nausea is Present</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Eat small, frequent meals (6-8 per day)</li>
                                            <li>Choose bland, easy-to-digest foods (BRAT diet)</li>
                                            <li>Avoid strong odors - eat cold or room temperature foods</li>
                                            <li>Sip ginger tea or chew crystallized ginger</li>
                                            <li>Try acupressure wrist bands</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">For Mouth Sores</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Use a blender to soften foods</li>
                                            <li>Avoid acidic, spicy, or rough-textured foods</li>
                                            <li>Try nutritional shakes or smoothies</li>
                                            <li>Rinse with baking soda solution (1 tsp in 1 cup water)</li>
                                            <li>Use a straw to bypass sore areas</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Nutrition Comparison */}
                                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">High-Nutrient Foods to Prioritize</h3>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                                        <div>
                                            <div className="font-medium mb-1">Protein</div>
                                            <div className="text-sm text-gray-700">Eggs, Greek yogurt, lean meats, lentils</div>
                                        </div>
                                        <div>
                                            <div className="font-medium mb-1">Healthy Fats</div>
                                            <div className="text-sm text-gray-700">Avocados, nuts, olive oil, fatty fish</div>
                                        </div>
                                        <div>
                                            <div className="font-medium mb-1">Easy Carbs</div>
                                            <div className="text-sm text-gray-700">Bananas, white rice, oatmeal, potatoes</div>
                                        </div>
                                        <div>
                                            <div className="font-medium mb-1">Hydration</div>
                                            <div className="text-sm text-gray-700">Water, herbal tea, broth, electrolyte drinks</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">Sample Meal Plan (Low Nausea)</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li><strong>Breakfast:</strong> Oatmeal with banana and almond butter</li>
                                            <li><strong>Snack:</strong> Greek yogurt with honey</li>
                                            <li><strong>Lunch:</strong> Chicken noodle soup with crackers</li>
                                            <li><strong>Snack:</strong> Applesauce with protein powder</li>
                                            <li><strong>Dinner:</strong> Baked salmon with mashed potatoes</li>
                                        </ul>
                                    </div>
                                    <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">Foods to Avoid</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>Raw or undercooked foods (risk of infection)</li>
                                            <li>Very spicy or acidic foods</li>
                                            <li>Carbonated drinks (can worsen nausea)</li>
                                            <li>High-fiber foods during diarrhea</li>
                                            <li>Alcohol (interacts with medications)</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Hydration Strategies */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Droplet className="w-8 h-8 text-blue-600 mr-2" />
                                    Hydration Strategies
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Staying hydrated is crucial during treatment, especially if experiencing vomiting or diarrhea. Dehydration can worsen fatigue and other side effects.
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Hydration Tips</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Aim for 8-10 cups of fluid daily (more if losing fluids)</li>
                                            <li>Set reminders to drink throughout the day</li>
                                            <li>Try flavored waters or herbal teas if plain water is unappealing</li>
                                            <li>Include hydrating foods (soups, watermelon, cucumbers)</li>
                                            <li>Monitor urine color (pale yellow is ideal)</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Oral Rehydration Solution</h3>
                                        <p className="text-gray-700 mb-2">
                                            For significant fluid loss (diarrhea/vomiting), try this homemade solution:
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700">
                                            <li>1 liter clean water</li>
                                            <li>6 teaspoons sugar</li>
                                            <li>1/2 teaspoon salt</li>
                                            <li>Optional: splash of juice for flavor</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Physical Activity */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Dumbbell className="w-8 h-8 text-blue-600 mr-2" />
                                    Physical Activity During Treatment
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    While rest is important, appropriate physical activity can actually reduce fatigue, improve mood, and maintain muscle strength. A <a href="#" className="text-blue-600 hover:underline">2022 meta-analysis</a> found that exercise during treatment:
                                </p>

                                <div className="grid md:grid-cols-3 gap-4 mb-6">
                                    <div className="bg-blue-50 p-4 rounded-lg text-center">
                                        <div className="text-2xl font-bold text-blue-700 mb-1">40%</div>
                                        <div className="text-gray-700">Reduction in fatigue severity</div>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg text-center">
                                        <div className="text-2xl font-bold text-blue-700 mb-1">35%</div>
                                        <div className="text-gray-700">Improvement in sleep quality</div>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg text-center">
                                        <div className="text-2xl font-bold text-blue-700 mb-1">28%</div>
                                        <div className="text-gray-700">Better treatment completion rates</div>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-3">Recommended Activities</h3>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="font-medium text-gray-900 mb-2">For Low Energy Days</h4>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>5-10 minute gentle stretching</li>
                                            <li>Short walks (even around the house)</li>
                                            <li>Chair exercises</li>
                                            <li>Deep breathing exercises</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900 mb-2">For Higher Energy Days</h4>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>20-30 minute walks</li>
                                            <li>Light resistance training (bands/weights)</li>
                                            <li>Tai chi or gentle yoga</li>
                                            <li>Swimming or water aerobics</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Safety First:</h3>
                                    <p className="text-gray-700">
                                        Always consult your doctor before starting any exercise program. Stop immediately if you experience pain, dizziness, or shortness of breath.
                                    </p>
                                </div>
                            </section>

                            {/* Emotional Wellbeing */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Brain className="w-8 h-8 text-blue-600 mr-2" />
                                    Emotional Wellbeing During Treatment
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    The emotional impact of cancer treatment is significant but often overlooked. Approximately <a href="#" className="text-blue-600 hover:underline">30-40% of patients</a> experience clinically significant anxiety or depression during treatment.
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Common Emotional Challenges</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Anxiety about treatment outcomes</li>
                                            <li>Depression from illness burden</li>
                                            <li>Body image concerns</li>
                                            <li>Fear of recurrence</li>
                                            <li>Social isolation</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Coping Strategies</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Join a support group (in-person or online)</li>
                                            <li>Practice mindfulness or meditation</li>
                                            <li>Keep a journal to process emotions</li>
                                            <li>Set small, achievable daily goals</li>
                                            <li>Consider professional counseling</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Signs You May Need Professional Help</h3>
                                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                                        <li>Persistent sadness or hopelessness</li>
                                        <li>Loss of interest in all activities</li>
                                        <li>Inability to sleep or sleeping too much</li>
                                        <li>Thoughts of self-harm</li>
                                        <li>Inability to care for basic needs</li>
                                    </ul>
                                </div>

                                <p className="text-gray-700">
                                    Many cancer centers have psychologists or psychiatrists on staff who specialize in helping patients through treatment. Don't hesitate to ask your care team for a referral.
                                </p>
                            </section>

                            {/* Sleep Management */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Moon className="w-8 h-8 text-blue-600 mr-2" />
                                    Managing Sleep Disturbances
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Treatment-related sleep problems affect up to 75% of patients. Poor sleep can worsen pain, fatigue, and emotional distress.
                                </p>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Sleep Hygiene Tips</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Maintain a consistent sleep schedule</li>
                                            <li>Create a cool, dark, quiet sleep environment</li>
                                            <li>Limit screen time before bed</li>
                                            <li>Avoid caffeine after noon</li>
                                            <li>Use the bed only for sleep (not resting during day)</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">For Treatment-Related Insomnia</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Ask about sleep medications if needed</li>
                                            <li>Try relaxation techniques before bed</li>
                                            <li>Consider cognitive behavioral therapy for insomnia (CBT-I)</li>
                                            <li>Manage pain and nausea that may disrupt sleep</li>
                                            <li>Limit daytime napping to 30 minutes</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Managing side effects is a crucial part of cancer treatment. While some discomfort is expected, severe symptoms should always be reported to your medical team. Remember that most side effects are temporary and will improve after treatment ends.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    Be patient with yourself - cancer treatment is challenging both physically and emotionally. Celebrate small victories and don't hesitate to ask for help when needed.
                                </p>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "You are not just surviving cancer treatment - you are actively healing. Every day you get through treatment is a day closer to recovery."
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
                                            Dr. Emily Rodriguez, MD
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600 mb-1">
                                        — Written by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            Sarah Thompson
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
                        <div className="bg-red-50 rounded-lg p-6 mb-8 border border-red-200">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Emergency Contacts</h3>
                            <div className="space-y-3">
                                <div>
                                    <h4 className="font-medium text-gray-900 mb-1">Oncology Team</h4>
                                    <p className="text-gray-700 text-sm">(555) 123-4567 (24/7)</p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900 mb-1">After Hours Nurse Line</h4>
                                    <p className="text-gray-700 text-sm">(555) 987-6543</p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900 mb-1">Crisis Support</h4>
                                    <p className="text-gray-700 text-sm">988 (Suicide & Crisis Lifeline)</p>
                                </div>
                            </div>
                        </div>

                        {/* Symptom Tracker */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Symptom Tracker</h3>
                            <p className="text-gray-700 text-sm mb-4">
                                Track these symptoms daily and report significant changes to your doctor:
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-center">
                                    <input type="checkbox" id="fatigue" className="mr-2" />
                                    <label htmlFor="fatigue" className="text-gray-700">Fatigue level (1-10)</label>
                                </div>
                                <div className="flex items-center">
                                    <input type="checkbox" id="nausea" className="mr-2" />
                                    <label htmlFor="nausea" className="text-gray-700">Nausea episodes</label>
                                </div>
                                <div className="flex items-center">
                                    <input type="checkbox" id="pain" className="mr-2" />
                                    <label htmlFor="pain" className="text-gray-700">Pain location/severity</label>
                                </div>
                                <div className="flex items-center">
                                    <input type="checkbox" id="temp" className="mr-2" />
                                    <label htmlFor="temp" className="text-gray-700">Temperature</label>
                                </div>
                                <div className="flex items-center">
                                    <input type="checkbox" id="mood" className="mr-2" />
                                    <label htmlFor="mood" className="text-gray-700">Mood changes</label>
                                </div>
                            </div>
                            <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors">
                                Download Tracker PDF
                            </button>
                        </div>

                        {/* Support Resources */}
                        <div className="bg-blue-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Support Resources</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-center">
                                        <Activity className="w-4 h-4 mr-2" />
                                        American Cancer Society
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-center">
                                        <HeartPulse className="w-4 h-4 mr-2" />
                                        Cancer Care Support Groups
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-center">
                                        <Utensils className="w-4 h-4 mr-2" />
                                        Oncology Nutrition Resources
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-center">
                                        <Brain className="w-4 h-4 mr-2" />
                                        Mental Health Support
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Newsletter Signup */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Get More Support</h3>
                            <p className="text-gray-700 text-sm mb-4">
                                Join our newsletter for weekly tips on managing treatment side effects.
                            </p>

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
                                We respect your privacy. Unsubscribe at any time.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}