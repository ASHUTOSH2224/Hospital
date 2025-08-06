"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, HeartPulse, Brain, Scale, Star, BookOpen, Shield, Layers, Activity, HandHeart } from "lucide-react"

export default function TherapyApproachesGuide() {
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

    const tabs = ["Overview", "Approaches", "Effectiveness", "Choosing"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Therapy Approaches & Modalities: A Comprehensive Guide
                            </h1>

                            {/* Navigation Tabs */}
                            <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-200">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                                            activeTab === tab
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
                                Modern psychotherapy offers diverse approaches to mental health treatment, each with unique theories and techniques. This guide explores the major therapeutic modalities, their effectiveness for different conditions, and how to choose the right approach for your needs.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                    alt="Therapist talking with client"
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
                                    <li>Over 50 recognized therapeutic approaches exist today</li>
                                    <li>Cognitive Behavioral Therapy (CBT) has the strongest evidence base</li>
                                    <li>Approaches can be combined for better outcomes</li>
                                    <li>The therapeutic relationship matters more than specific technique</li>
                                    <li>Cultural factors influence treatment effectiveness</li>
                                </ul>
                            </div>

                            {/* Why Therapy Approaches Matter */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <HeartPulse className="w-8 h-8 text-blue-600 mr-2" />
                                    The Importance of Therapeutic Diversity
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Different mental health conditions and personality types respond better to specific therapeutic approaches. A 2023 meta-analysis in the <a href="#" className="text-blue-600 hover:underline">Journal of Clinical Psychology</a> found that matching therapy type to client needs improved outcomes by 38% compared to mismatched treatments.
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div className="bg-white p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <Brain className="w-5 h-5 text-blue-600 mr-2" />
                                            Neuroscience Findings
                                        </h3>
                                        <p className="text-gray-700">
                                            Brain imaging studies show different therapies create distinct neural changes. Psychodynamic therapy enhances emotional regulation areas, while CBT strengthens cognitive control networks.
                                        </p>
                                    </div>
                                    <div className="bg-white p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <Shield className="w-5 h-5 text-blue-600 mr-2" />
                                            Personalized Medicine
                                        </h3>
                                        <p className="text-gray-700">
                                            The future of therapy involves genetic testing and biomarkers to predict which approaches will work best for individuals, reducing trial-and-error in treatment selection.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Common Factors Across Therapies</h3>
                                    <p className="text-gray-700 mb-2">
                                        Research identifies several universal factors that contribute to therapeutic success:
                                    </p>
                                    <ul className="list-disc list-inside text-gray-700 ml-4">
                                        <li>Empathic, trusting therapist-client relationship</li>
                                        <li>Client's expectation of improvement</li>
                                        <li>Opportunity for emotional catharsis</li>
                                        <li>Acquisition of new coping skills</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Major Therapeutic Approaches */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Layers className="w-8 h-8 text-blue-600 mr-2" />
                                    Major Therapeutic Approaches
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    The American Psychological Association recognizes five broad categories of psychotherapy, each containing numerous specific modalities:
                                </p>

                                {/* Approaches Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Approach</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Focus</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Key Techniques</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Best For</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            {/* CBT */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Cognitive Behavioral (CBT)</td>
                                                <td className="px-4 py-3">Thoughts/behaviors</td>
                                                <td className="px-4 py-3">Cognitive restructuring, exposure, behavioral activation</td>
                                                <td className="px-4 py-3">Anxiety, depression, OCD</td>
                                            </tr>
                                            {/* Psychodynamic */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Psychodynamic</td>
                                                <td className="px-4 py-3">Unconscious processes</td>
                                                <td className="px-4 py-3">Free association, transference analysis, dream work</td>
                                                <td className="px-4 py-3">Personality disorders, relationship issues</td>
                                            </tr>
                                            {/* Humanistic */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Humanistic</td>
                                                <td className="px-4 py-3">Self-actualization</td>
                                                <td className="px-4 py-3">Active listening, unconditional positive regard</td>
                                                <td className="px-4 py-3">Self-esteem, life transitions</td>
                                            </tr>
                                            {/* Integrative */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Integrative</td>
                                                <td className="px-4 py-3">Holistic</td>
                                                <td className="px-4 py-3">Combines techniques from multiple approaches</td>
                                                <td className="px-4 py-3">Complex cases, treatment-resistant issues</td>
                                            </tr>
                                            {/* Systemic */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Systemic</td>
                                                <td className="px-4 py-3">Relationships/systems</td>
                                                <td className="px-4 py-3">Family sculpting, genograms, circular questioning</td>
                                                <td className="px-4 py-3">Family/marital problems</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                {/* Top Approaches Highlights */}
                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">1</span>
                                            CBT - The Gold Standard
                                        </h3>
                                        <p className="text-gray-700">
                                            With over 2,000 studies supporting its efficacy, CBT helps clients identify and change distorted thought patterns. Shown to be effective for anxiety (70-80% improvement rate) and depression (50-60% remission).
                                        </p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">2</span>
                                            EMDR - Trauma Innovation
                                        </h3>
                                        <p className="text-gray-700">
                                            Eye Movement Desensitization and Reprocessing uses bilateral stimulation to process traumatic memories. Studies show 84-90% of single-trauma victims no longer have PTSD after just 3 sessions.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Effectiveness Comparison */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Scale className="w-8 h-8 text-blue-600 mr-2" />
                                    Effectiveness Comparison
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Therapy outcomes vary by condition and approach. Data from the National Institute of Mental Health shows:
                                </p>

                                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                                    <div className="grid grid-cols-3 gap-4 text-center font-medium mb-2">
                                        <div>Condition</div>
                                        <div>Most Effective Approach</div>
                                        <div>Success Rate</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 text-center mb-1">
                                        <div className="font-medium">Major Depression</div>
                                        <div>CBT + Medication</div>
                                        <div>65-75%</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 text-center mb-1 bg-blue-50 p-1 rounded">
                                        <div className="font-medium">PTSD</div>
                                        <div>EMDR/Trauma-focused CBT</div>
                                        <div>70-80%</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 text-center mb-1">
                                        <div className="font-medium">OCD</div>
                                        <div>Exposure and Response Prevention</div>
                                        <div>60-70%</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 text-center">
                                        <div className="font-medium">Borderline PD</div>
                                        <div>Dialectical Behavior Therapy</div>
                                        <div>50-60%</div>
                                    </div>
                                </div>

                                <p className="text-gray-700 mb-6">
                                    Note: "Success" typically means clinically significant symptom reduction maintained for at least 6 months post-treatment.
                                </p>
                            </section>

                            {/* Emerging Modalities */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Emerging & Niche Modalities</h2>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Technology-Enhanced Therapies</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li><strong>Virtual Reality Exposure Therapy:</strong> Particularly effective for phobias and PTSD</li>
                                            <li><strong>AI-Assisted Therapy:</strong> Chatbots providing CBT techniques between sessions</li>
                                            <li><strong>App-Based Interventions:</strong> Mood tracking and skill-building exercises</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Body-Centered Approaches</h3>
                                        <ol className="list-decimal list-inside text-gray-700 space-y-2">
                                            <li><strong>Somatic Experiencing:</strong> Focuses on bodily sensations to release trauma</li>
                                            <li><strong>Biofeedback:</strong> Teaches control over physiological processes</li>
                                            <li><strong>Yoga Therapy:</strong> Combines postures, breathing, and meditation</li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Innovation Spotlight:</h3>
                                    <p className="text-gray-700">
                                        <strong>Psychedelic-Assisted Therapy:</strong> MDMA for PTSD and psilocybin for depression show remarkable results in clinical trials, with FDA approval expected by 2025.
                                    </p>
                                </div>
                            </section>

                            {/* Choosing the Right Approach */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Choosing the Right Approach</h2>

                                <div className="space-y-6">
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Step 1: Identify Primary Concerns</h3>
                                        </div>
                                        <div className="p-4">
                                            <p className="text-gray-700">
                                                Different approaches excel at treating specific issues. Anxiety disorders typically respond well to CBT, while complex trauma may require EMDR or somatic approaches.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Step 2: Consider Personal Factors</h3>
                                        </div>
                                        <div className="p-4">
                                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                                <li><strong>Learning style:</strong> Visual learners may benefit from art therapy</li>
                                                <li><strong>Cultural background:</strong> Some approaches align better with certain cultural values</li>
                                                <li><strong>Time commitment:</strong> Brief therapies vs. long-term depth work</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Step 3: Therapist Matching</h3>
                                        </div>
                                        <div className="p-4">
                                            <p className="text-gray-700">
                                                Research shows the therapist-client relationship accounts for 30% of therapeutic success. Consider:
                                            </p>
                                            <div className="grid md:grid-cols-2 gap-4 mt-2">
                                                <div className="bg-white p-3 rounded border border-gray-200">
                                                    <h4 className="font-medium text-gray-900 mb-1">Therapist Qualities</h4>
                                                    <ul className="text-sm text-gray-700 list-disc list-inside">
                                                        <li>Empathy</li>
                                                        <li>Cultural competence</li>
                                                        <li>Experience with your issues</li>
                                                    </ul>
                                                </div>
                                                <div className="bg-white p-3 rounded border border-gray-200">
                                                    <h4 className="font-medium text-gray-900 mb-1">Practical Factors</h4>
                                                    <ul className="text-sm text-gray-700 list-disc list-inside">
                                                        <li>Location/availability</li>
                                                        <li>Cost/insurance coverage</li>
                                                        <li>Virtual vs in-person</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Potential Misconceptions */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Misconceptions</h2>

                                <div className="space-y-4">
                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">"One Size Fits All"</h3>
                                        <p className="text-gray-700 mb-2">
                                            No single approach works for everyone. Effective therapy requires personalization based on individual needs, preferences, and response to treatment.
                                        </p>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">"Evidence-Based Means Perfect"</h3>
                                        <p className="text-gray-700 mb-2">
                                            While evidence-based therapies have scientific support, they're not 100% effective. About 5-10% of clients may worsen during treatment, highlighting the need for careful monitoring.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    The diversity of therapeutic approaches reflects the complexity of human psychology. While research continues to identify the most effective treatments for specific conditions, the healing power of a strong therapeutic relationship remains the common denominator across all modalities.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    As the field evolves, we're seeing exciting integrations of neuroscience, technology, and traditional healing practices that promise to make mental health care more accessible and effective than ever before.
                                </p>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "The best therapy is the one that resonates with you and leads to meaningful change. Don't hesitate to discuss different approaches with potential therapists to find the right fit."
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
                                            Dr. Emily Parker, PhD
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600 mb-1">
                                        — Written by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            David Thompson, LMHC
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
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get therapy insights and tips</h4>
                                <p className="text-gray-700 text-sm">
                                    Monthly articles, research summaries, and self-care strategies delivered to your inbox.
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

                        {/* Quick Reference */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                <BookOpen className="w-5 h-5 text-blue-600 mr-2" />
                                Therapy Quick Reference
                            </h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-medium text-gray-900 mb-1">CBT Techniques</h4>
                                    <ul className="text-sm text-gray-700 list-disc list-inside ml-2 space-y-1">
                                        <li>Thought records</li>
                                        <li>Behavioral experiments</li>
                                        <li>Exposure hierarchy</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900 mb-1">Psychodynamic Terms</h4>
                                    <ul className="text-sm text-gray-700 list-disc list-inside ml-2 space-y-1">
                                        <li>Transference</li>
                                        <li>Defense mechanisms</li>
                                        <li>Free association</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Effectiveness Chart */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Therapy Effectiveness Timeline</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between border-b border-gray-200 pb-2 text-sm">
                                    <span className="font-medium">Approach</span>
                                    <span className="font-medium">Typical Duration</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2 text-sm">
                                    <span>Solution-Focused</span>
                                    <span className="text-blue-600">4-8 sessions</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2 text-sm">
                                    <span>CBT</span>
                                    <span className="text-blue-600">12-20 sessions</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2 text-sm">
                                    <span>Psychodynamic</span>
                                    <span className="text-blue-600">6 months+</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span>DBT</span>
                                    <span className="text-blue-600">1 year</span>
                                </div>
                            </div>
                        </div>

                        {/* Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                <Activity className="w-5 h-5 text-blue-600 mr-2" />
                                Additional Resources
                            </h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-start">
                                        <HandHeart className="w-4 h-4 mt-1 mr-2 flex-shrink-0" />
                                        <span>Finding Affordable Therapy Options</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-start">
                                        <HandHeart className="w-4 h-4 mt-1 mr-2 flex-shrink-0" />
                                        <span>Questions to Ask a Potential Therapist</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-start">
                                        <HandHeart className="w-4 h-4 mt-1 mr-2 flex-shrink-0" />
                                        <span>Self-Help Books Based on Therapy Approaches</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-start">
                                        <HandHeart className="w-4 h-4 mt-1 mr-2 flex-shrink-0" />
                                        <span>Online Therapy Platforms Comparison</span>
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