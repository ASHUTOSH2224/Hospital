"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, HeartPulse, Brain, BookOpen, TestTube2, Star, Scale, Shield } from "lucide-react"

export default function SexualHealthScienceGuide() {
    const [email, setEmail] = useState("")
    const [activeTab, setActiveTab] = useState("Anatomy")

    const handleEmailSubmit = (e) => {
        e.preventDefault()
        console.log("Email submitted:", email)
        setEmail("")
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const tabs = ["Anatomy", "Hormones", "Response", "Health", "Research"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                The Science Behind Sexual Health: Understanding Your Body
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
                            </div>

                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                Sexual health is a vital aspect of overall well-being that encompasses physical, emotional, mental, and social dimensions. This comprehensive guide explores the scientific foundations of sexual health, from reproductive anatomy to hormonal cycles, sexual response mechanisms, and evidence-based health practices.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80"
                                    alt="Scientific illustration of human anatomy"
                                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                                    style={{ maxHeight: '500px' }}
                                />
                            </div>

                            {/* Key Takeaways */}
                            <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-8">
                                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                    <Star className="w-5 h-5 text-purple-600 mr-2" />
                                    Key Takeaways
                                </h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>The human sexual response involves complex interactions between multiple physiological systems</li>
                                    <li>Hormonal cycles significantly influence sexual desire and function in all genders</li>
                                    <li>Modern research has debunked many myths about sexual health and performance</li>
                                    <li>Evidence-based practices can enhance sexual well-being at any age</li>
                                    <li>Regular check-ups and open communication are essential for maintaining sexual health</li>
                                </ul>
                            </div>

                            {/* Reproductive Anatomy Section */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <BookOpen className="w-8 h-8 text-purple-600 mr-2" />
                                    Reproductive Anatomy: A Scientific Perspective
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Understanding sexual health begins with knowledge of reproductive anatomy. The human reproductive system is a marvel of biological engineering, with structures that have evolved for both reproduction and pleasure.
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Female Reproductive System</h3>
                                        <p className="text-gray-700 mb-2">
                                            The female reproductive system includes both external and internal structures:
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                                            <li><strong>Vulva:</strong> External genitalia including labia, clitoris, and vaginal opening</li>
                                            <li><strong>Vagina:</strong> Muscular canal connecting external and internal organs</li>
                                            <li><strong>Uterus:</strong> Womb where fetal development occurs</li>
                                            <li><strong>Ovaries:</strong> Produce eggs and sex hormones</li>
                                            <li><strong>Fallopian tubes:</strong> Pathways for egg transport</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Male Reproductive System</h3>
                                        <p className="text-gray-700 mb-2">
                                            The male reproductive system consists of:
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                                            <li><strong>Penis:</strong> External organ for sexual intercourse and urination</li>
                                            <li><strong>Testes:</strong> Produce sperm and testosterone</li>
                                            <li><strong>Epididymis:</strong> Sperm maturation and storage</li>
                                            <li><strong>Vas deferens:</strong> Transport tube for sperm</li>
                                            <li><strong>Prostate:</strong> Produces seminal fluid components</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Did You Know?</h3>
                                    <p className="text-gray-700">
                                        The clitoris has approximately 8,000 nerve endings—more than any other part of the human body—and its internal structure extends much deeper than the visible external portion.
                                    </p>
                                </div>
                            </section>

                            {/* Hormonal Cycles Section */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <TestTube2 className="w-8 h-8 text-purple-600 mr-2" />
                                    The Endocrine System and Sexual Health
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Hormones act as chemical messengers that regulate sexual development, desire, and function. The endocrine system's complex interplay affects everything from libido to reproductive capability.
                                </p>

                                {/* Hormones Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hormone</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Primary Source</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Key Functions</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Impact on Sexual Health</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Testosterone</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Testes (male), Ovaries (female)</td>
                                                <td className="px-4 py-3">Libido, muscle mass, bone density</td>
                                                <td className="px-4 py-3">Drives sexual desire in all genders, affects erectile function</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Estrogen</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Ovaries, Adipose tissue</td>
                                                <td className="px-4 py-3">Menstrual cycle, vaginal health</td>
                                                <td className="px-4 py-3">Maintains vaginal elasticity and lubrication</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Progesterone</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Ovaries, Placenta</td>
                                                <td className="px-4 py-3">Menstrual cycle, pregnancy</td>
                                                <td className="px-4 py-3">Can decrease libido in high concentrations</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Oxytocin</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Hypothalamus</td>
                                                <td className="px-4 py-3">Bonding, childbirth</td>
                                                <td className="px-4 py-3">"Love hormone" released during orgasm</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Prolactin</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Pituitary gland</td>
                                                <td className="px-4 py-3">Milk production</td>
                                                <td className="px-4 py-3">Can inhibit sexual arousal post-orgasm</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">Menstrual Cycle Phases</h3>
                                        <ol className="list-decimal list-inside text-gray-700 space-y-2">
                                            <li><strong>Follicular phase:</strong> Days 1-14, estrogen rises</li>
                                            <li><strong>Ovulation:</strong> Day 14, egg released</li>
                                            <li><strong>Luteal phase:</strong> Days 15-28, progesterone dominates</li>
                                            <li><strong>Menstruation:</strong> Shedding of uterine lining</li>
                                        </ol>
                                    </div>
                                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">Male Hormonal Patterns</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Testosterone follows a daily rhythm (highest in morning)</li>
                                            <li>Levels gradually decline after age 30</li>
                                            <li>Stress and obesity can significantly reduce levels</li>
                                            <li>No monthly cycle but may have seasonal variations</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Sexual Response Section */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <HeartPulse className="w-8 h-8 text-purple-600 mr-2" />
                                    The Science of Sexual Response
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    The human sexual response cycle involves complex physiological and psychological processes. While traditional models proposed linear progression, contemporary research reveals more nuanced patterns.
                                </p>

                                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-center font-medium mb-2">
                                        <div className="p-2 bg-purple-100 rounded">Desire</div>
                                        <div className="p-2 bg-purple-100 rounded">Arousal</div>
                                        <div className="p-2 bg-purple-100 rounded">Plateau</div>
                                        <div className="p-2 bg-purple-100 rounded">Orgasm</div>
                                        <div className="p-2 bg-purple-100 rounded">Resolution</div>
                                    </div>
                                    <div className="text-sm text-gray-700">
                                        <p className="mb-2">Modern understanding recognizes these phases often overlap or occur in different sequences, especially in women. A 2022 study in <em>The Journal of Sexual Medicine</em> found only 18% of women experience the traditional linear model.</p>
                                        <p>Neuroscience research shows distinct but overlapping brain activation patterns during different phases, with the prefrontal cortex (involved in judgment) deactivating during orgasm.</p>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Physiological Changes During Sexual Response</h3>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900 mb-3">Female Response</h4>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                                            <li>Vasocongestion (blood flow to genitals) causes clitoral erection and vaginal lubrication</li>
                                            <li>Uterus elevates and vaginal canal expands</li>
                                            <li>Orgasmic contractions occur at 0.8 second intervals</li>
                                            <li>Resolution phase may include multiple orgasms without refractory period</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900 mb-3">Male Response</h4>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                                            <li>Vasocongestion leads to penile erection</li>
                                            <li>Testes elevate and increase in size</li>
                                            <li>Ejaculation occurs in two phases: emission and expulsion</li>
                                            <li>Resolution includes refractory period (duration varies by age and individual)</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Research Insight:</h3>
                                    <p className="text-gray-700">
                                        fMRI studies reveal that during orgasm, brain activity resembles that of people taking heroin. The nucleus accumbens (reward center) shows particularly intense activation.
                                    </p>
                                </div>
                            </section>

                            {/* Sexual Health Section */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Shield className="w-8 h-8 text-purple-600 mr-2" />
                                    Evidence-Based Sexual Health Practices
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Maintaining sexual health requires a combination of preventive care, healthy habits, and evidence-based interventions when needed. Below are key recommendations supported by clinical research.
                                </p>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Essential Health Screenings</h3>

                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age Group</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Women</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Men</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">All Genders</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">18-25</td>
                                                <td className="px-4 py-3">Pap smear (begin at 21), STI testing</td>
                                                <td className="px-4 py-3">Testicular exam education, STI testing</td>
                                                <td className="px-4 py-3">HIV testing, sexual health counseling</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">26-45</td>
                                                <td className="px-4 py-3">HPV testing, breast exams</td>
                                                <td className="px-4 py-3">Testosterone screening if symptomatic</td>
                                                <td className="px-4 py-3">STI testing, fertility assessments</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">46-65</td>
                                                <td className="px-4 py-3">Mammograms, menopause management</td>
                                                <td className="px-4 py-3">Prostate screening discussion</td>
                                                <td className="px-4 py-3">Cardiovascular health assessment</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">65+</td>
                                                <td className="px-4 py-3">Bone density, vaginal health</td>
                                                <td className="px-4 py-3">Erectile function evaluation</td>
                                                <td className="px-4 py-3">Medication review for sexual side effects</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Lifestyle Factors Affecting Sexual Health</h3>

                                <div className="grid md:grid-cols-3 gap-4 mb-6">
                                    <div className="bg-purple-50 p-4 rounded-lg">
                                        <h4 className="font-bold text-gray-900 mb-2">Positive Factors</h4>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                                            <li>Regular exercise</li>
                                            <li>Balanced nutrition</li>
                                            <li>Quality sleep</li>
                                            <li>Stress management</li>
                                            <li>Healthy relationships</li>
                                        </ul>
                                    </div>
                                    <div className="bg-red-50 p-4 rounded-lg">
                                        <h4 className="font-bold text-gray-900 mb-2">Negative Factors</h4>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                                            <li>Smoking</li>
                                            <li>Excessive alcohol</li>
                                            <li>Obesity</li>
                                            <li>Chronic stress</li>
                                            <li>Sedentary lifestyle</li>
                                        </ul>
                                    </div>
                                    <div className="bg-green-50 p-4 rounded-lg">
                                        <h4 className="font-bold text-gray-900 mb-2">Improvement Strategies</h4>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                                            <li>Kegel exercises</li>
                                            <li>Mindfulness practices</li>
                                            <li>Open communication</li>
                                            <li>Sensate focus techniques</li>
                                            <li>Professional counseling</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Common Myths Debunked</h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <p className="font-medium text-gray-900">Myth: Sex drive naturally declines with age</p>
                                            <p className="text-gray-700">Reality: While hormonal changes occur, many older adults maintain active sex lives with proper health management</p>
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-900">Myth: Orgasms require penetration</p>
                                            <p className="text-gray-700">Reality: Most women require clitoral stimulation, and orgasms can occur through various means</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Understanding the science behind sexual health empowers individuals to make informed decisions about their bodies and relationships. Modern research continues to reveal the intricate connections between sexual health and overall well-being.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    Remember that sexual health is deeply personal, and what works for one person may not work for another. The most important factors are open communication with partners and healthcare providers, evidence-based information, and a commitment to overall wellness.
                                </p>

                                <div className="bg-purple-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "Sexual health is not just the absence of disease, but a state of physical, emotional, mental and social well-being in relation to sexuality." — World Health Organization
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
                                            Dr. Emily Rodriguez, MD
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600 mb-1">
                                        — Written by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            Dr. James Wilson
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
                                <h3 className="text-sm font-bold text-purple-800 uppercase tracking-wide mb-2">HEALTH NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get science-backed health tips</h4>
                                <p className="text-gray-700 text-sm">
                                    Weekly updates on sexual health, relationships, and evidence-based wellness advice.
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

                        {/* Popular Articles */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Related Articles</h3>
                            <div className="space-y-4">
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80" alt="Hormones" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors">Understanding Hormonal Imbalances</h4>
                                            <p className="text-sm text-gray-600">5 min read</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80" alt="Relationships" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors">The Science of Healthy Relationships</h4>
                                            <p className="text-sm text-gray-600">6 min read</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80" alt="Nutrition" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors">Nutrition for Hormonal Balance</h4>
                                            <p className="text-sm text-gray-600">4 min read</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Health Resources */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Trusted Health Resources</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span className="font-medium">Organization</span>
                                    <span className="font-medium">Focus Area</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>WHO Sexual Health</span>
                                    <span className="text-purple-600">Global</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>ASHA</span>
                                    <span className="text-purple-600">Education</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>ISSWSH</span>
                                    <span className="text-purple-600">Research</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Planned Parenthood</span>
                                    <span className="text-purple-600">Services</span>
                                </div>
                            </div>
                        </div>

                        {/* Emergency Contacts */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Important Contacts</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-purple-600 hover:underline flex items-start gap-2">
                                        <Shield className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                        <span>National Sexual Assault Hotline: 800-656-HOPE</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-purple-600 hover:underline flex items-start gap-2">
                                        <HeartPulse className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                        <span>STI Testing Centers Locator</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-purple-600 hover:underline flex items-start gap-2">
                                        <Brain className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                        <span>Mental Health Support: 988 Suicide & Crisis Lifeline</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-purple-600 hover:underline flex items-start gap-2">
                                        <Scale className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                        <span>Reproductive Rights Legal Help</span>
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