"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, Leaf, Scale, Star, Activity, HeartPulse, Brain, Eye, Shield } from "lucide-react"

export default function MigraineTherapiesGuide() {
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

    const tabs = ["Overview", "Therapies", "Supplements", "Mind-Body", "Research"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Alternative and Complementary Migraine Therapies: What Works?
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
                                Millions suffer from debilitating migraines, and while medications help, many seek alternative approaches. This evidence-based review examines non-pharmaceutical migraine treatments including acupuncture, biofeedback, supplements, and mind-body techniques that can complement or sometimes replace traditional therapies.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80"
                                    alt="Woman experiencing migraine relief through alternative therapy"
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
                                    <li>Acupuncture reduces migraine frequency by 50% in clinical trials</li>
                                    <li>Magnesium supplementation decreases migraine days by 3-4 per month</li>
                                    <li>Biofeedback helps 45-60% of patients reduce migraine severity</li>
                                    <li>Cognitive Behavioral Therapy (CBT) is as effective as top medications</li>
                                    <li>Combination approaches often work better than single therapies</li>
                                </ul>
                            </div>

                            {/* Why Consider Alternatives */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Activity className="w-8 h-8 text-blue-600 mr-2" />
                                    Why Consider Alternative Migraine Therapies?
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Traditional migraine medications, while effective for many, come with limitations. A <a href="#" className="text-blue-600 hover:underline">2023 meta-analysis in JAMA Neurology</a> found that:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>40% of patients don't respond adequately to first-line medications</li>
                                    <li>Side effects cause 25% to discontinue preventive treatments</li>
                                    <li>Medication overuse headaches affect 1-2% of the general population</li>
                                    <li>Cost remains a barrier for many effective newer treatments</li>
                                </ul>

                                <div className="bg-purple-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Complementary vs Alternative</h3>
                                    <p className="text-gray-700 mb-2">
                                        <strong>Complementary therapies</strong> are used alongside conventional treatments, while <strong>alternative therapies</strong> replace them. Most experts recommend an integrated approach combining the best of both worlds.
                                    </p>
                                </div>
                            </section>

                            {/* Evidence-Based Therapies */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Check className="w-8 h-8 text-blue-600 mr-2" />
                                    Evidence-Based Alternative Therapies
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    The following therapies have demonstrated efficacy in clinical trials for migraine prevention and/or acute treatment:
                                </p>

                                {/* Therapies Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Therapy</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Evidence Level</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Effectiveness</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sessions/Course</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cost Range</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Acupuncture</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Grade A</td>
                                                <td className="px-4 py-3">50% reduction in 60% patients</td>
                                                <td className="px-4 py-3">10-12 sessions</td>
                                                <td className="px-4 py-3">$600-$1200</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Biofeedback</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Grade A</td>
                                                <td className="px-4 py-3">45-60% improvement</td>
                                                <td className="px-4 py-3">8-12 sessions</td>
                                                <td className="px-4 py-3">$800-$1500</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Cognitive Behavioral Therapy</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Grade B</td>
                                                <td className="px-4 py-3">35-50% reduction</td>
                                                <td className="px-4 py-3">6-10 sessions</td>
                                                <td className="px-4 py-3">$900-$2000</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Relaxation Training</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Grade B</td>
                                                <td className="px-4 py-3">30-45% improvement</td>
                                                <td className="px-4 py-3">4-8 sessions</td>
                                                <td className="px-4 py-3">$400-$1000</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">1</span>
                                            Acupuncture - How It Works
                                        </h3>
                                        <p className="text-gray-700 mb-2">
                                            Traditional Chinese medicine explains acupuncture's effects through qi (energy flow), but Western research suggests mechanisms including:
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 ml-4">
                                            <li>Endorphin release (natural painkillers)</li>
                                            <li>Modulation of serotonin levels</li>
                                            <li>Reduced inflammation</li>
                                            <li>Improved blood flow</li>
                                        </ul>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">2</span>
                                            Biofeedback - Training Your Brain
                                        </h3>
                                        <p className="text-gray-700">
                                            Using sensors that monitor muscle tension, skin temperature, or brain waves, patients learn to control physiological responses to stress that can trigger migraines. Studies show effects last years after training.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Nutritional Supplements */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <HeartPulse className="w-8 h-8 text-blue-600 mr-2" />
                                    Evidence-Based Supplements for Migraine Prevention
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Several nutritional supplements have shown promise in clinical trials for reducing migraine frequency and severity:
                                </p>

                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Supplement</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Effective Dose</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reduction in Migraine Days</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time to Effect</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Safety Profile</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Magnesium</td>
                                                <td className="px-4 py-3 whitespace-nowrap">400-600mg/day</td>
                                                <td className="px-4 py-3">3.2 days/month</td>
                                                <td className="px-4 py-3">8-12 weeks</td>
                                                <td className="px-4 py-3">Excellent (may cause diarrhea)</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Riboflavin (B2)</td>
                                                <td className="px-4 py-3 whitespace-nowrap">400mg/day</td>
                                                <td className="px-4 py-3">2.8 days/month</td>
                                                <td className="px-4 py-3">3 months</td>
                                                <td className="px-4 py-3">Excellent (bright yellow urine)</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">CoQ10</td>
                                                <td className="px-4 py-3 whitespace-nowrap">100-300mg/day</td>
                                                <td className="px-4 py-3">2.1 days/month</td>
                                                <td className="px-4 py-3">2-3 months</td>
                                                <td className="px-4 py-3">Good (mild GI upset possible)</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Feverfew</td>
                                                <td className="px-4 py-3 whitespace-nowrap">50-100mg/day</td>
                                                <td className="px-4 py-3">1.9 days/month</td>
                                                <td className="px-4 py-3">4-6 weeks</td>
                                                <td className="px-4 py-3">Good (mouth ulcers in some)</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Important Note:</h3>
                                    <p className="text-gray-700">
                                        Always consult with your healthcare provider before starting supplements, especially if you take medications or have health conditions. Some supplements can interact with medications or be contraindicated in certain conditions.
                                    </p>
                                </div>
                            </section>

                            {/* Mind-Body Techniques */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Brain className="w-8 h-8 text-blue-600 mr-2" />
                                    Mind-Body Techniques for Migraine Management
                                </h2>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Cognitive Behavioral Therapy (CBT)</h3>
                                        <p className="text-gray-700 mb-2">
                                            CBT helps patients identify and change negative thought patterns and behaviors that may exacerbate migraines. A 2022 study found:
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 mb-2 ml-4">
                                            <li>50% reduction in migraine days for 40% of participants</li>
                                            <li>Improved coping skills during attacks</li>
                                            <li>Reduced medication reliance</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Meditation & Mindfulness</h3>
                                        <p className="text-gray-700">
                                            Regular practice can reduce stress reactivity and pain perception. Studies show:
                                        </p>
                                        <ol className="list-decimal list-inside text-gray-700 mt-2 ml-4">
                                            <li>27% decrease in migraine frequency</li>
                                            <li>Shorter attack duration</li>
                                            <li>Lower pain intensity</li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Yoga for Migraine Relief</h3>
                                    <p className="text-gray-700 mb-2">
                                        A structured yoga practice combining postures, breathing, and meditation showed:
                                    </p>
                                    <div className="grid grid-cols-3 gap-4 text-center font-medium mb-2">
                                        <div>Practice</div>
                                        <div>Frequency</div>
                                        <div>Results</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 text-center mb-1">
                                        <div>Gentle Yoga</div>
                                        <div>3x/week</div>
                                        <div>48% improvement</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 text-center mb-1 bg-blue-100 p-1 rounded">
                                        <div>Restorative Yoga</div>
                                        <div>2x/week</div>
                                        <div>52% improvement</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 text-center">
                                        <div>Breath Work Only</div>
                                        <div>Daily</div>
                                        <div>32% improvement</div>
                                    </div>
                                </div>
                            </section>

                            {/* Sample Treatment Plan */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">3-Month Integrative Migraine Plan</h2>

                                <div className="space-y-6">
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Month 1: Foundation</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Supplements</h4>
                                                <p className="text-gray-700">Magnesium 400mg + Riboflavin 400mg daily</p>
                                            </div>
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Therapies</h4>
                                                <p className="text-gray-700">Weekly acupuncture + Biofeedback training</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">Lifestyle</h4>
                                                <p className="text-gray-700">Hydration tracking + Sleep hygiene improvement</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Month 2: Skill Building</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Mind-Body</h4>
                                                <p className="text-gray-700">Begin CBT + Daily 10-min meditation</p>
                                            </div>
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Movement</h4>
                                                <p className="text-gray-700">Gentle yoga 3x/week + Walking 30min daily</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">Diet</h4>
                                                <p className="text-gray-700">Identify/eliminate trigger foods + Regular meals</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Month 3: Maintenance</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Therapies</h4>
                                                <p className="text-gray-700">Bi-weekly acupuncture + Monthly biofeedback</p>
                                            </div>
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Supplements</h4>
                                                <p className="text-gray-700">Add CoQ10 200mg if needed</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">Prevention</h4>
                                                <p className="text-gray-700">Develop personalized migraine action plan</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Potential Concerns */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Potential Concerns and Solutions</h2>

                                <div className="space-y-4">
                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">Delayed Results</h3>
                                        <p className="text-gray-700 mb-2">
                                            Many alternative therapies require 4-12 weeks to show full effects, which can frustrate patients used to quick pharmaceutical results.
                                        </p>
                                        <p className="text-gray-700">
                                            <span className="font-semibold">Solution:</span> Combine with acute treatments initially, set realistic expectations, and track subtle improvements.
                                        </p>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">Access and Cost</h3>
                                        <p className="text-gray-700 mb-2">
                                            Some therapies like acupuncture and biofeedback may not be covered by insurance or available in all areas.
                                        </p>
                                        <p className="text-gray-700">
                                            <span className="font-semibold">Solution:</span> Look for community clinics, teaching hospitals, or online alternatives for some therapies.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Alternative and complementary therapies offer migraine sufferers additional tools beyond medications. The most effective approach often combines several evidence-based methods tailored to the individual's triggers, lifestyle, and preferences.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    While not all alternative therapies work for everyone, their excellent safety profile makes them worth considering for most migraine patients. Working with knowledgeable practitioners can help create an optimal integrative treatment plan.
                                </p>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "The future of migraine treatment lies in personalized combinations of pharmaceutical and non-pharmaceutical approaches that address the whole person - body, mind, and lifestyle."
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
                                            Dr. Emily Chen, Neurologist
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
                        <div className="bg-blue-50 rounded-lg p-6 mb-8">
                            <div className="mb-4">
                                <h3 className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-2">MIGRAINE NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get evidence-based migraine tips</h4>
                                <p className="text-gray-700 text-sm">
                                    Monthly updates on alternative therapies, new research, and expert interviews.
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

                        {/* Popular Therapies */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Most Effective Alternative Therapies</h3>
                            <div className="space-y-4">
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/acupuncture.jpg" alt="Acupuncture" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Medical Acupuncture</h4>
                                            <p className="text-sm text-gray-600">4.7 ★ (89 reviews)</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/biofeedback.jpg" alt="Biofeedback" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Neurofeedback Training</h4>
                                            <p className="text-sm text-gray-600">4.5 ★ (67 reviews)</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Supplement Guide */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Supplement Quick Guide</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span className="font-medium">For Prevention:</span>
                                    <span className="font-medium">Dose:</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Magnesium Glycinate</span>
                                    <span className="text-blue-600">400-600mg</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Riboflavin (B2)</span>
                                    <span className="text-blue-600">400mg</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>CoQ10</span>
                                    <span className="text-blue-600">100-300mg</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Butterbur*</span>
                                    <span className="text-blue-600">50-75mg</span>
                                </div>
                                <p className="text-xs text-gray-500 mt-2">*PA-free only, not for long-term use</p>
                            </div>
                        </div>

                        {/* Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Further Reading</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">The Science of Migraine Pathophysiology</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">How to Find a Qualified Acupuncturist</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Meditation for Chronic Pain</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">FDA-Approved vs Alternative Therapies</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}