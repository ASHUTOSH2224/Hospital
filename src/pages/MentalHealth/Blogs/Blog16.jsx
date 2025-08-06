"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, HeartPulse, Shield, Brain, Activity, BookOpen, Star, AlertTriangle } from "lucide-react"

export default function MentalHealthRiskFactorsGuide() {
    const [email, setEmail] = useState("")
    const [activeTab, setActiveTab] = useState("Risk Factors")

    const handleEmailSubmit = (e) => {
        e.preventDefault()
        console.log("Email submitted:", email)
        setEmail("")
    }

    useEffect(() => {
        // Scroll to top when the component mounts
        window.scrollTo(0, 0)
    }, [])

    const tabs = ["Risk Factors", "Prevention", "Statistics", "Resources"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Understanding Mental Health Risk Factors and Prevention Strategies
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
                                Mental health is influenced by a complex interplay of biological, psychological, and social factors. Understanding these risk factors and implementing evidence-based prevention strategies can significantly improve mental wellbeing and reduce the incidence of mental health disorders.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80"
                                    alt="Person holding a brain model while looking thoughtful"
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
                                    <li>40-50% of mental health conditions have genetic components</li>
                                    <li>Chronic stress increases depression risk by 2-3 times</li>
                                    <li>Early intervention can reduce mental illness severity by 50%</li>
                                    <li>Regular physical activity decreases anxiety symptoms by 26%</li>
                                    <li>Strong social connections reduce suicide risk by 36%</li>
                                </ul>
                            </div>

                            {/* Why Mental Health Matters */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Brain className="w-8 h-8 text-blue-600 mr-2" />
                                    The Growing Importance of Mental Health
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Mental health disorders affect nearly 1 billion people globally, with depression being the leading cause of disability worldwide according to the <a href="#" className="text-blue-600 hover:underline">World Health Organization</a>. The economic impact is staggering, with mental health conditions costing the global economy approximately $2.5 trillion annually, a figure projected to rise to $6 trillion by 2030.
                                </p>

                                <p className="text-gray-700 mb-6">
                                    Research from the <a href="#" className="text-blue-600 hover:underline">National Institute of Mental Health</a> shows that 50% of all lifetime mental illness begins by age 14, and 75% by age 24, highlighting the critical importance of early identification and intervention.
                                </p>

                                <div className="bg-purple-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Mental Health Continuum</h3>
                                    <p className="text-gray-700 mb-2">
                                        Mental health exists on a spectrum from thriving to crisis. Most people fluctuate along this continuum throughout their lives based on risk and protective factors.
                                    </p>
                                    <p className="text-gray-700">
                                        Prevention strategies aim to keep individuals in the healthy range and provide early support when symptoms emerge.
                                    </p>
                                </div>
                            </section>

                            {/* Major Risk Factors */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <AlertTriangle className="w-8 h-8 text-blue-600 mr-2" />
                                    Major Mental Health Risk Factors
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Mental health disorders result from complex interactions between multiple risk factors. These can be categorized into biological, psychological, and social/environmental factors:
                                </p>

                                {/* Risk Factors Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Risk Factors</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Impact Level</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Modifiable</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            {/* Biological */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Biological</td>
                                                <td className="px-4 py-3">
                                                    <ul className="list-disc list-inside">
                                                        <li>Genetic predisposition</li>
                                                        <li>Brain chemistry imbalances</li>
                                                        <li>Prenatal exposure to toxins</li>
                                                    </ul>
                                                </td>
                                                <td className="px-4 py-3 whitespace-nowrap">High</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Partially</td>
                                            </tr>
                                            {/* Psychological */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Psychological</td>
                                                <td className="px-4 py-3">
                                                    <ul className="list-disc list-inside">
                                                        <li>Chronic stress</li>
                                                        <li>Trauma or abuse history</li>
                                                        <li>Negative thought patterns</li>
                                                    </ul>
                                                </td>
                                                <td className="px-4 py-3 whitespace-nowrap">Very High</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Yes</td>
                                            </tr>
                                            {/* Social/Environmental */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Social/Environmental</td>
                                                <td className="px-4 py-3">
                                                    <ul className="list-disc list-inside">
                                                        <li>Social isolation</li>
                                                        <li>Economic disadvantage</li>
                                                        <li>Discrimination</li>
                                                    </ul>
                                                </td>
                                                <td className="px-4 py-3 whitespace-nowrap">Moderate-High</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Partially</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">1</span>
                                            Genetic Factors
                                        </h3>
                                        <p className="text-gray-700">
                                            Family studies show that having a first-degree relative with mental illness increases risk by 2-3 times. Specific genes have been identified for conditions like schizophrenia (DISC1 gene) and bipolar disorder (CACNA1C gene).
                                        </p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">2</span>
                                            Childhood Trauma
                                        </h3>
                                        <p className="text-gray-700">
                                            Adverse Childhood Experiences (ACEs) increase adult depression risk by 4-12 times. Each additional ACE raises suicide attempt risk by 30-50%. Early intervention can mitigate these effects.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Prevention Strategies */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Shield className="w-8 h-8 text-blue-600 mr-2" />
                                    Evidence-Based Prevention Strategies
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Prevention operates at three levels: universal (for everyone), selective (for at-risk groups), and indicated (for early symptoms). Effective strategies include:
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Individual Level</h3>
                                        <ol className="list-decimal list-inside text-gray-700 space-y-2">
                                            <li><strong>Mindfulness practices:</strong> Reduces stress and anxiety by 31%</li>
                                            <li><strong>Regular exercise:</strong> 30 minutes daily decreases depression risk by 26%</li>
                                            <li><strong>Sleep hygiene:</strong> Proper sleep reduces mood disorder relapses by 40%</li>
                                            <li><strong>Cognitive Behavioral Therapy (CBT):</strong> Prevents depression recurrence by 50%</li>
                                        </ol>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Community Level</h3>
                                        <ol className="list-decimal list-inside text-gray-700 space-y-2">
                                            <li><strong>Anti-bullying programs:</strong> Reduce adolescent depression by 20-30%</li>
                                            <li><strong>Workplace mental health initiatives:</strong> Decrease burnout by 35%</li>
                                            <li><strong>Social connection programs:</strong> Lower suicide rates by 25%</li>
                                            <li><strong>Early childhood education:</strong> Improves resilience by 40%</li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Success Story:</h3>
                                    <p className="text-gray-700">
                                        Finland's national mental health program reduced depression rates by 30% over 10 years through school-based interventions, workplace reforms, and community awareness campaigns.
                                    </p>
                                </div>
                            </section>

                            {/* Statistics and Trends */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Activity className="w-8 h-8 text-blue-600 mr-2" />
                                    Mental Health Statistics and Trends
                                </h2>

                                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center font-medium mb-2">
                                        <div>Condition</div>
                                        <div>Global Prevalence</div>
                                        <div>Increase Since 2000</div>
                                        <div>Treatment Gap</div>
                                    </div>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mb-1">
                                        <div className="font-medium">Depression</div>
                                        <div>4.4%</div>
                                        <div>+18%</div>
                                        <div>56%</div>
                                    </div>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mb-1 bg-blue-50 p-1 rounded">
                                        <div className="font-medium">Anxiety</div>
                                        <div>3.6%</div>
                                        <div>+25%</div>
                                        <div>58%</div>
                                    </div>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mb-1">
                                        <div className="font-medium">Bipolar</div>
                                        <div>0.6%</div>
                                        <div>+12%</div>
                                        <div>45%</div>
                                    </div>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                                        <div className="font-medium">Schizophrenia</div>
                                        <div>0.3%</div>
                                        <div>+5%</div>
                                        <div>32%</div>
                                    </div>
                                </div>

                                <p className="text-gray-700 mb-6">
                                    The COVID-19 pandemic accelerated mental health challenges globally, with anxiety and depression rates increasing by 25% according to WHO data. However, awareness and treatment options have also expanded significantly in the past decade.
                                </p>
                            </section>

                            {/* Special Populations */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">At-Risk Populations</h2>

                                <div className="space-y-6">
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Adolescents and Young Adults</h3>
                                        </div>
                                        <div className="p-4">
                                            <p className="text-gray-700 mb-2">
                                                75% of mental health disorders emerge before age 25. Social media use correlates with a 13-66% increased depression risk depending on usage patterns.
                                            </p>
                                            <p className="text-gray-700">
                                                <strong>Protective factors:</strong> Strong family relationships (+40% resilience), school connectedness (+35%), regular physical activity (+30%)
                                            </p>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Healthcare Workers</h3>
                                        </div>
                                        <div className="p-4">
                                            <p className="text-gray-700 mb-2">
                                                Experience depression at 2-3 times the general population rate. 40% report burnout symptoms, which correlate with 50% higher medical error rates.
                                            </p>
                                            <p className="text-gray-700">
                                                <strong>Effective interventions:</strong> Peer support programs (-28% stress), mindfulness training (-25% burnout), workload management (-35% turnover)
                                            </p>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Marginalized Communities</h3>
                                        </div>
                                        <div className="p-4">
                                            <p className="text-gray-700 mb-2">
                                                Experience 20-40% higher mental health disorder rates due to discrimination, economic stress, and healthcare access barriers.
                                            </p>
                                            <p className="text-gray-700">
                                                <strong>Community solutions:</strong> Culturally competent care (+50% treatment adherence), community health workers (+35% engagement), anti-discrimination policies
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Technology and Innovation */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Emerging Technologies in Prevention</h2>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Digital Mental Health Tools</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li><strong>Therapy apps:</strong> Show 60-80% effectiveness for mild-moderate conditions</li>
                                            <li><strong>AI chatbots:</strong> Reduce crisis calls by 25% in pilot programs</li>
                                            <li><strong>Wearable sensors:</strong> Can predict mood episodes with 80% accuracy</li>
                                        </ul>
                                    </div>
                                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Precision Prevention</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Genetic testing identifying high-risk individuals</li>
                                            <li>Biomarker-based early intervention protocols</li>
                                            <li>Personalized digital therapeutics</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-purple-50 border-l-4 border-purple-400 p-4">
                                    <h3 className="font-bold text-gray-900 mb-2">Ethical Considerations:</h3>
                                    <p className="text-gray-700">
                                        While technology expands access, concerns remain about data privacy (only 30% of apps meet security standards) and algorithmic bias (underrepresentation in training data). Regulatory frameworks are evolving to address these challenges.
                                    </p>
                                </div>
                            </section>

                            {/* Call to Action */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Taking Action for Mental Health</h2>

                                <p className="text-gray-700 mb-4">
                                    Everyone has a role in promoting mental health. Here's how you can contribute:
                                </p>

                                <div className="grid md:grid-cols-3 gap-4 mb-6">
                                    <div className="bg-blue-50 p-4 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">For Individuals</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                                            <li>Practice daily self-care</li>
                                            <li>Learn stress management techniques</li>
                                            <li>Seek help early when needed</li>
                                        </ul>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">For Families</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                                            <li>Create open communication</li>
                                            <li>Model healthy coping</li>
                                            <li>Educate about mental health</li>
                                        </ul>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">For Communities</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                                            <li>Reduce stigma through education</li>
                                            <li>Support mental health policies</li>
                                            <li>Create inclusive environments</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-blue-100 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "Mental health is not a destination, but a process. It's about how you drive, not where you're going." — Noam Shpancer, PhD
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
                                            Dr. Emily Parker, Psychiatrist
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
                                <h3 className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-2">MENTAL HEALTH NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get mental wellness tips</h4>
                                <p className="text-gray-700 text-sm">
                                    Monthly insights, coping strategies, and research updates delivered to your inbox.
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

                        {/* Crisis Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Crisis Resources</h3>
                            <div className="space-y-3">
                                <a href="#" className="block text-blue-600 hover:underline">
                                    National Suicide Prevention Lifeline: 988
                                </a>
                                <a href="#" className="block text-blue-600 hover:underline">
                                    Crisis Text Line: Text HOME to 741741
                                </a>
                                <a href="#" className="block text-blue-600 hover:underline">
                                    SAMHSA Treatment Locator
                                </a>
                                <a href="#" className="block text-blue-600 hover:underline">
                                    Find a Therapist (Psychology Today)
                                </a>
                            </div>
                        </div>

                        {/* Self-Assessment */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Mental Health Check-In</h3>
                            <p className="text-gray-700 text-sm mb-3">
                                Rate these areas over the past 2 weeks (1 = Poor, 5 = Excellent):
                            </p>
                            <div className="space-y-3">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Mood Stability</label>
                                    <div className="flex justify-between">
                                        {[1, 2, 3, 4, 5].map((num) => (
                                            <button key={num} className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-blue-50">
                                                {num}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Sleep Quality</label>
                                    <div className="flex justify-between">
                                        {[1, 2, 3, 4, 5].map((num) => (
                                            <button key={num} className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-blue-50">
                                                {num}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Stress Levels</label>
                                    <div className="flex justify-between">
                                        {[1, 2, 3, 4, 5].map((num) => (
                                            <button key={num} className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-blue-50">
                                                {num}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 text-sm">
                                SUBMIT CHECK-IN
                            </button>
                        </div>

                        {/* Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Further Reading</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-start">
                                        <BookOpen className="w-4 h-4 mt-1 mr-2 flex-shrink-0" />
                                        <span>The Body Keeps the Score: Brain, Mind, and Body in the Healing of Trauma</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-start">
                                        <BookOpen className="w-4 h-4 mt-1 mr-2 flex-shrink-0" />
                                        <span>Lost Connections: Uncovering the Real Causes of Depression</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-start">
                                        <BookOpen className="w-4 h-4 mt-1 mr-2 flex-shrink-0" />
                                        <span>Mental Health America Screening Tools</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-start">
                                        <BookOpen className="w-4 h-4 mt-1 mr-2 flex-shrink-0" />
                                        <span>CDC Mental Health Resources</span>
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