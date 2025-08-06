"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, Brain, HeartPulse, Scale, Star, BookOpen, Shield, Clock, Layers } from "lucide-react"

export default function TherapyOptionsGuide() {
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

    const tabs = ["Overview", "CBT", "DBT", "Psychodynamic", "Comparison", "FAQs"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Understanding Therapy Options: CBT, DBT, and Psychodynamic Approaches
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
                                <span className="mx-2">•</span>
                                <Clock className="w-4 h-4 mr-1" />
                                <span className="text-sm">8 min read</span>
                            </div>

                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                Explore comprehensive therapy modalities including cognitive behavioral therapy, dialectical behavior therapy, psychodynamic therapy, and emerging treatment approaches. This guide compares techniques, effectiveness, and ideal applications for various mental health conditions.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80"
                                    alt="Therapist talking with client in counseling session"
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
                                    <li>CBT is most effective for anxiety, depression, and phobias (50-75% success rate)</li>
                                    <li>DBT shows 60-80% reduction in self-harm behaviors for borderline personality disorder</li>
                                    <li>Psychodynamic therapy has lasting effects, with benefits continuing after treatment ends</li>
                                    <li>Combined approaches often yield better results than single-modality treatments</li>
                                    <li>Therapist-client relationship quality predicts outcomes more than specific modality</li>
                                </ul>
                            </div>

                            {/* Overview Section */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <BookOpen className="w-8 h-8 text-blue-600 mr-2" />
                                    Therapy Modalities Overview
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Modern psychotherapy offers multiple evidence-based approaches to mental health treatment. According to a <a href="#" className="text-blue-600 hover:underline">2023 meta-analysis in JAMA Psychiatry</a>, approximately <strong>75% of people</strong> experience significant improvement with psychotherapy, compared to 30-40% with placebo treatments.
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                                            <Brain className="w-6 h-6 text-blue-600 mr-2" />
                                            Cognitive Behavioral Therapy (CBT)
                                        </h3>
                                        <p className="text-gray-700 mb-2">
                                            Focuses on identifying and changing negative thought patterns and behaviors. Developed in the 1960s by Aaron Beck, it's the most researched psychotherapy with over 2,000 studies supporting its efficacy.
                                        </p>
                                    </div>
                                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                                            <HeartPulse className="w-6 h-6 text-blue-600 mr-2" />
                                            Dialectical Behavior Therapy (DBT)
                                        </h3>
                                        <p className="text-gray-700 mb-2">
                                            Developed by Marsha Linehan for borderline personality disorder, combines CBT with mindfulness and distress tolerance skills. Shows particular effectiveness for emotional regulation and self-harm behaviors.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Therapy Effectiveness Timeline</h3>
                                    <p className="text-gray-700 mb-2">
                                        Different therapies show results at different paces:
                                    </p>
                                    <div className="grid grid-cols-4 gap-2 text-center font-medium mb-1 bg-blue-100 p-2 rounded">
                                        <div>Therapy Type</div>
                                        <div>Initial Benefits</div>
                                        <div>Peak Effect</div>
                                        <div>Duration</div>
                                    </div>
                                    <div className="grid grid-cols-4 gap-2 text-center mb-1 border-b border-blue-200 pb-2">
                                        <div className="font-medium">CBT</div>
                                        <div>4-6 weeks</div>
                                        <div>12-16 weeks</div>
                                        <div>Short-term (12-20 sessions)</div>
                                    </div>
                                    <div className="grid grid-cols-4 gap-2 text-center mb-1 border-b border-blue-200 pb-2">
                                        <div className="font-medium">DBT</div>
                                        <div>8-12 weeks</div>
                                        <div>6-12 months</div>
                                        <div>6 months-1 year</div>
                                    </div>
                                    <div className="grid grid-cols-4 gap-2 text-center">
                                        <div className="font-medium">Psychodynamic</div>
                                        <div>12-16 weeks</div>
                                        <div>1-2 years</div>
                                        <div>Long-term (1-3 years)</div>
                                    </div>
                                </div>
                            </section>

                            {/* CBT Section */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Check className="w-8 h-8 text-blue-600 mr-2" />
                                    Cognitive Behavioral Therapy (CBT)
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    CBT is based on the concept that thoughts, feelings, and behaviors are interconnected. By changing negative thought patterns, individuals can change how they feel and behave. The <a href="#" className="text-blue-600 hover:underline">American Psychological Association</a> recognizes CBT as having the strongest evidence base of any psychotherapy.
                                </p>

                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Technique</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Effectiveness</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Conditions</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Cognitive Restructuring</td>
                                                <td className="px-4 py-3">Identifying and challenging irrational thoughts</td>
                                                <td className="px-4 py-3 whitespace-nowrap">72% reduction in anxiety symptoms</td>
                                                <td className="px-4 py-3">Anxiety, Depression</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Exposure Therapy</td>
                                                <td className="px-4 py-3">Gradual exposure to feared situations</td>
                                                <td className="px-4 py-3 whitespace-nowrap">80% efficacy for phobias</td>
                                                <td className="px-4 py-3">Phobias, PTSD</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Behavioral Activation</td>
                                                <td className="px-4 py-3">Increasing engagement in positive activities</td>
                                                <td className="px-4 py-3 whitespace-nowrap">60% improvement in depression</td>
                                                <td className="px-4 py-3">Depression</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4">CBT Success Rates by Condition</h3>
                                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                                    <div className="space-y-3">
                                        <div>
                                            <div className="flex justify-between mb-1">
                                                <span className="font-medium">Generalized Anxiety Disorder</span>
                                                <span className="font-medium">78%</span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "78%" }}></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between mb-1">
                                                <span className="font-medium">Major Depressive Disorder</span>
                                                <span className="font-medium">67%</span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "67%" }}></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between mb-1">
                                                <span className="font-medium">Panic Disorder</span>
                                                <span className="font-medium">80%</span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "80%" }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">Pros of CBT</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>Structured and goal-oriented</li>
                                            <li>Relatively short-term (12-20 sessions)</li>
                                            <li>Strong empirical support</li>
                                            <li>Teaches practical coping skills</li>
                                            <li>Can be adapted for group settings</li>
                                        </ul>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">Cons of CBT</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>May not address deeper emotional issues</li>
                                            <li>Requires active participation</li>
                                            <li>Less effective for complex trauma</li>
                                            <li>Focus on present may overlook past causes</li>
                                            <li>Homework can be challenging for some</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* DBT Section */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Layers className="w-8 h-8 text-blue-600 mr-2" />
                                    Dialectical Behavior Therapy (DBT)
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    DBT combines cognitive-behavioral techniques with concepts from Buddhist mindfulness practice. Originally developed for borderline personality disorder (BPD), it's now used for various conditions involving emotional dysregulation. A <a href="#" className="text-blue-600 hover:underline">2022 study</a> showed DBT reduces suicide attempts by 50% compared to other therapies.
                                </p>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4">The Four Modules of DBT</h3>
                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div className="border border-blue-200 rounded-lg p-4">
                                        <h4 className="font-bold text-lg text-blue-700 mb-2">1. Mindfulness</h4>
                                        <p className="text-gray-700">
                                            Developing awareness of the present moment without judgment. Includes meditation and observation exercises.
                                        </p>
                                    </div>
                                    <div className="border border-blue-200 rounded-lg p-4">
                                        <h4 className="font-bold text-lg text-blue-700 mb-2">2. Distress Tolerance</h4>
                                        <p className="text-gray-700">
                                            Learning to tolerate pain in difficult situations without making things worse. Uses crisis survival strategies.
                                        </p>
                                    </div>
                                    <div className="border border-blue-200 rounded-lg p-4">
                                        <h4 className="font-bold text-lg text-blue-700 mb-2">3. Emotion Regulation</h4>
                                        <p className="text-gray-700">
                                            Identifying and managing intense emotions that cause problems in daily life. Includes mood tracking techniques.
                                        </p>
                                    </div>
                                    <div className="border border-blue-200 rounded-lg p-4">
                                        <h4 className="font-bold text-lg text-blue-700 mb-2">4. Interpersonal Effectiveness</h4>
                                        <p className="text-gray-700">
                                            Asking for what you need while maintaining self-respect and relationships. Focuses on communication skills.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">DBT Treatment Components</h3>
                                    <p className="text-gray-700 mb-4">
                                        Comprehensive DBT includes four essential components that work together:
                                    </p>
                                    <ol className="list-decimal list-inside text-gray-700 space-y-2">
                                        <li><strong>Individual Therapy:</strong> Weekly one-on-one sessions focusing on motivation and skill application</li>
                                        <li><strong>Skills Training Group:</strong> Weekly 2-2.5 hour classes teaching the four modules</li>
                                        <li><strong>Phone Coaching:</strong> Brief phone consultations for crisis situations between sessions</li>
                                        <li><strong>Therapist Consultation Team:</strong> Support for therapists to maintain treatment fidelity</li>
                                    </ol>
                                </div>
                            </section>

                            {/* Psychodynamic Section */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Shield className="w-8 h-8 text-blue-600 mr-2" />
                                    Psychodynamic Therapy
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Rooted in Freudian psychoanalysis but more focused and shorter-term, psychodynamic therapy explores how unconscious processes affect current behavior. Modern research shows it's particularly effective for personality disorders and chronic relationship problems, with benefits that continue growing after treatment ends.
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Key Concepts</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li><strong>Unconscious processes:</strong> How hidden motivations influence behavior</li>
                                            <li><strong>Transference:</strong> Projecting feelings about important figures onto the therapist</li>
                                            <li><strong>Defense mechanisms:</strong> Psychological strategies to avoid anxiety</li>
                                            <li><strong>Early experiences:</strong> How childhood shapes adult personality</li>
                                            <li><strong>Therapeutic alliance:</strong> Using the therapist-client relationship as a tool</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Effectiveness Data</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>60% remission rate for depression (vs 52% for CBT in long-term follow-up)</li>
                                            <li>55-65% improvement in personality disorders</li>
                                            <li>70% of patients continue improving after treatment ends</li>
                                            <li>Particularly effective for chronic interpersonal problems</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Modern Psychodynamic Approaches</h3>
                                    <div className="grid md:grid-cols-3 gap-4">
                                        <div className="border border-blue-200 rounded-lg p-3">
                                            <h4 className="font-bold text-blue-700 mb-1">Brief Psychodynamic</h4>
                                            <p className="text-gray-700 text-sm">12-20 sessions focused on specific issues</p>
                                        </div>
                                        <div className="border border-blue-200 rounded-lg p-3">
                                            <h4 className="font-bold text-blue-700 mb-1">Relational</h4>
                                            <p className="text-gray-700 text-sm">Focuses on current relationships and patterns</p>
                                        </div>
                                        <div className="border border-blue-200 rounded-lg p-3">
                                            <h4 className="font-bold text-blue-700 mb-1">Mentalization-Based</h4>
                                            <p className="text-gray-700 text-sm">Develops ability to understand mental states</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Comparison Section */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Therapy Modality Comparison</h2>

                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Feature</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CBT</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">DBT</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Psychodynamic</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 font-medium text-gray-900">Primary Focus</td>
                                                <td className="px-4 py-3">Thoughts and behaviors</td>
                                                <td className="px-4 py-3">Emotion regulation</td>
                                                <td className="px-4 py-3">Unconscious processes</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 font-medium text-gray-900">Duration</td>
                                                <td className="px-4 py-3">Short-term (12-20 sessions)</td>
                                                <td className="px-4 py-3">6 months-1 year</td>
                                                <td className="px-4 py-3">Long-term (1-3 years)</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 font-medium text-gray-900">Best For</td>
                                                <td className="px-4 py-3">Anxiety, depression, phobias</td>
                                                <td className="px-4 py-3">BPD, self-harm, eating disorders</td>
                                                <td className="px-4 py-3">Personality disorders, relationship issues</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 font-medium text-gray-900">Homework</td>
                                                <td className="px-4 py-3">Extensive</td>
                                                <td className="px-4 py-3">Moderate</td>
                                                <td className="px-4 py-3">Minimal</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 font-medium text-gray-900">Evidence Base</td>
                                                <td className="px-4 py-3">Extensive</td>
                                                <td className="px-4 py-3">Strong for BPD</td>
                                                <td className="px-4 py-3">Growing</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Choosing the Right Therapy</h3>
                                    <p className="text-gray-700">
                                        Consider these factors when selecting a therapy approach: symptom severity, diagnosis, personal preferences, time commitment, and cost. Many therapists integrate techniques from multiple modalities. The therapeutic relationship quality often matters more than the specific approach.
                                    </p>
                                </div>
                            </section>

                            {/* FAQs Section */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>

                                <div className="space-y-4">
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <button className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 font-medium">
                                            How do I know which therapy is right for me?
                                        </button>
                                        <div className="p-4 border-t border-gray-200">
                                            <p className="text-gray-700">
                                                The best approach depends on your specific concerns, personality, and goals. For immediate symptom relief, CBT may be preferable. For emotional regulation issues, consider DBT. For deep-seated patterns, psychodynamic might help. A mental health professional can assess your needs and recommend the most suitable option.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <button className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 font-medium">
                                            Can therapies be combined?
                                        </button>
                                        <div className="p-4 border-t border-gray-200">
                                            <p className="text-gray-700">
                                                Yes, many therapists integrate techniques. For example, a therapist might use CBT techniques within a psychodynamic framework, or incorporate mindfulness from DBT into CBT. Research shows that eclectic approaches can be effective when tailored to the individual.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <button className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 font-medium">
                                            How long until I see results?
                                        </button>
                                        <div className="p-4 border-t border-gray-200">
                                            <p className="text-gray-700">
                                                CBT often shows benefits within 4-6 weeks, DBT within 8-12 weeks, while psychodynamic therapy may take longer (12-16 weeks) but has more enduring effects. Most therapies require at least 12 sessions for meaningful change, with complex issues needing longer treatment.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    All three major therapy approaches—CBT, DBT, and psychodynamic—have strong evidence supporting their effectiveness for different conditions and personalities. The "best" therapy depends on individual needs, with many patients benefiting from integrated approaches.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    Research consistently shows that the quality of the therapeutic relationship predicts outcomes better than any specific technique. Finding a therapist you connect with may be more important than the particular modality they practice.
                                </p>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "Therapy is not about 'fixing' people but about providing the conditions where healing and growth can occur. Different approaches offer different paths to the same destination of improved mental health and wellbeing."
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
                                            James Wilson
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
                                    Monthly mental health resources, research updates, and self-care strategies.
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

                        {/* Popular Articles */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Related Articles</h3>
                            <div className="space-y-4">
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="https://images.unsplash.com/photo-1593814681464-eef5af2b0628?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80" alt="Mindfulness" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Mindfulness-Based Therapies Explained</h4>
                                            <p className="text-sm text-gray-600">5 min read</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80" alt="Finding therapist" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">How to Find the Right Therapist</h4>
                                            <p className="text-sm text-gray-600">6 min read</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80" alt="Mental health" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Emerging Therapies in Mental Health</h4>
                                            <p className="text-sm text-gray-600">7 min read</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Helpful Resources</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-center">
                                        <BookOpen className="w-4 h-4 mr-2" />
                                        National Institute of Mental Health
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-center">
                                        <HeartPulse className="w-4 h-4 mr-2" />
                                        American Psychological Association
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-center">
                                        <Shield className="w-4 h-4 mr-2" />
                                        Psychology Today Therapist Finder
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-center">
                                        <Brain className="w-4 h-4 mr-2" />
                                        Crisis Text Line
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