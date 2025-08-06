"use client"

import { useEffect, useState } from "react";
import { User, Calendar, Check, Heart, Shield, BookOpen, Star, AlertTriangle, Lock, Activity, Plus } from "lucide-react";

export default function SexualHealthGuide() {
    const [email, setEmail] = useState("");
    const [activeTab, setActiveTab] = useState("Overview");

    const handleEmailSubmit = (e) => {
        e.preventDefault();
        console.log("Email submitted:", email);
        setEmail("");
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const tabs = ["Overview", "STIs", "Consent", "Resources"];

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Understanding Sexual Health: A Comprehensive Guide
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
                                Sexual health is a fundamental aspect of overall well-being that encompasses physical, emotional, mental, and social aspects of sexuality. This comprehensive guide covers everything from anatomy and physiology to relationships, consent, and disease prevention, providing you with the knowledge to make informed decisions about your sexual health.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=500&fit=crop"
                                    alt="Abstract representation of sexual health and wellness"
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
                                    <li>Sexual health is more than just the absence of disease—it's about positive and respectful relationships</li>
                                    <li>Regular STI testing is crucial for sexually active individuals</li>
                                    <li>Consent must be informed, enthusiastic, and ongoing</li>
                                    <li>Communication is the foundation of healthy sexual relationships</li>
                                    <li>Mental health and sexual health are deeply interconnected</li>
                                </ul>
                            </div>

                            {/* What is Sexual Health? */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Heart className="w-8 h-8 text-blue-600 mr-2" />
                                    What is Sexual Health?
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    The World Health Organization defines sexual health as "a state of physical, emotional, mental, and social well-being in relation to sexuality; it is not merely the absence of disease, dysfunction, or infirmity." According to a <a href="#" className="text-blue-600 hover:underline">2023 study in the Journal of Sexual Medicine</a>, individuals with positive sexual health report:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>Higher life satisfaction (47% increase compared to those with sexual health concerns)</li>
                                    <li>Better relationship quality (62% improvement in relationship satisfaction)</li>
                                    <li>Improved mental health (39% reduction in anxiety and depression symptoms)</li>
                                    <li>Enhanced physical health (28% fewer general health complaints)</li>
                                </ul>

                                <div className="bg-purple-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Components of Sexual Health</h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                                                <Check className="w-4 h-4 text-purple-600 mr-2" />
                                                Physical
                                            </h4>
                                            <p className="text-gray-700 text-sm">
                                                Understanding anatomy, preventing STIs, managing reproductive health, and addressing sexual dysfunction
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                                                <Check className="w-4 h-4 text-purple-600 mr-2" />
                                                Emotional
                                            </h4>
                                            <p className="text-gray-700 text-sm">
                                                Developing positive attitudes about sexuality, managing feelings, and building self-esteem
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                                                <Check className="w-4 h-4 text-purple-600 mr-2" />
                                                Mental
                                            </h4>
                                            <p className="text-gray-700 text-sm">
                                                Understanding sexual orientation, gender identity, and the psychological aspects of sexuality
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                                                <Check className="w-4 h-4 text-purple-600 mr-2" />
                                                Social
                                            </h4>
                                            <p className="text-gray-700 text-sm">
                                                Navigating relationships, understanding cultural influences, and practicing consent
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Sexual Anatomy and Physiology */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Activity className="w-8 h-8 text-blue-600 mr-2" />
                                    Sexual Anatomy and Physiology
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Understanding your body is the first step toward sexual health. While many people receive basic anatomy education, sexual anatomy is often overlooked or misrepresented.
                                </p>

                                {/* Anatomy Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Body Part</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Function</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Health Considerations</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Penis</td>
                                                <td className="px-4 py-3">Urination, sexual intercourse, pleasure</td>
                                                <td className="px-4 py-3">Regular checks for abnormalities, safe hygiene practices</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Vagina</td>
                                                <td className="px-4 py-3">Menstruation, sexual intercourse, childbirth</td>
                                                <td className="px-4 py-3">pH balance maintenance, recognizing infections</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Clitoris</td>
                                                <td className="px-4 py-3">Primary pleasure center</td>
                                                <td className="px-4 py-3">Understanding sensitivity, pleasure anatomy</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Prostate</td>
                                                <td className="px-4 py-3">Produces seminal fluid, pleasure center</td>
                                                <td className="px-4 py-3">Cancer screening after age 50</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Uterus</td>
                                                <td className="px-4 py-3">Menstruation, pregnancy</td>
                                                <td className="px-4 py-3">Monitoring menstrual health, cancer screening</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Did You Know?</h3>
                                    <p className="text-gray-700">
                                        The clitoris has approximately 8,000 nerve endings—double the number in the penis—making it the most sensitive part of the human body for sexual pleasure.
                                    </p>
                                </div>
                            </section>

                            {/* STIs and Prevention */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Shield className="w-8 h-8 text-blue-600 mr-2" />
                                    STIs and Prevention
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Sexually transmitted infections affect millions of people worldwide. The CDC estimates that <a href="#" className="text-blue-600 hover:underline">1 in 5 people in the U.S. have an STI</a>, with many cases going undiagnosed. Understanding prevention and treatment is crucial for sexual health.
                                </p>

                                {/* Common STIs */}
                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Common STIs and Their Characteristics</h3>
                                    <div className="space-y-4">
                                        <div className="border border-gray-200 rounded-lg overflow-hidden">
                                            <div className="bg-blue-600 px-4 py-2">
                                                <h4 className="font-bold text-white">Human Papillomavirus (HPV)</h4>
                                            </div>
                                            <div className="p-4">
                                                <div className="grid md:grid-cols-3 gap-4">
                                                    <div>
                                                        <h5 className="font-medium text-gray-900 mb-1">Prevalence</h5>
                                                        <p className="text-gray-700">Most common STI (79 million Americans infected)</p>
                                                    </div>
                                                    <div>
                                                        <h5 className="font-medium text-gray-900 mb-1">Symptoms</h5>
                                                        <p className="text-gray-700">Often asymptomatic, can cause genital warts</p>
                                                    </div>
                                                    <div>
                                                        <h5 className="font-medium text-gray-900 mb-1">Prevention</h5>
                                                        <p className="text-gray-700">Vaccine (Gardasil 9), condoms</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="border border-gray-200 rounded-lg overflow-hidden">
                                            <div className="bg-blue-600 px-4 py-2">
                                                <h4 className="font-bold text-white">Chlamydia</h4>
                                            </div>
                                            <div className="p-4">
                                                <div className="grid md:grid-cols-3 gap-4">
                                                    <div>
                                                        <h5 className="font-medium text-gray-900 mb-1">Prevalence</h5>
                                                        <p className="text-gray-700">1.7 million US cases annually</p>
                                                    </div>
                                                    <div>
                                                        <h5 className="font-medium text-gray-900 mb-1">Symptoms</h5>
                                                        <p className="text-gray-700">Often none; discharge, pain when urinating</p>
                                                    </div>
                                                    <div>
                                                        <h5 className="font-medium text-gray-900 mb-1">Prevention</h5>
                                                        <p className="text-gray-700">Condoms, regular testing</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Prevention Methods */}
                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Effective Prevention Methods</h3>
                                        <ol className="list-decimal list-inside text-gray-700 space-y-2">
                                            <li><strong>Condoms:</strong> Reduce STI risk by 80-95% when used correctly</li>
                                            <li><strong>Regular testing:</strong> Annual screening for sexually active individuals</li>
                                            <li><strong>Vaccination:</strong> Available for HPV and Hepatitis B</li>
                                            <li><strong>PrEP:</strong> Daily medication that reduces HIV risk by 99%</li>
                                            <li><strong>Communication:</strong> Discussing STI status with partners</li>
                                        </ol>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Testing Recommendations</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li><strong>Ages 13-64:</strong> HIV test at least once</li>
                                            <li><strong>Sexually active women under 25:</strong> Annual chlamydia and gonorrhea tests</li>
                                            <li><strong>Men who have sex with men:</strong> 3-6 month testing for HIV, syphilis, chlamydia, gonorrhea</li>
                                            <li><strong>Pregnant people:</strong> HIV, syphilis, hepatitis B, and chlamydia tests</li>
                                            <li><strong>New partners:</strong> Mutual testing before unprotected sex</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Consent and Communication */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Lock className="w-8 h-8 text-blue-600 mr-2" />
                                    Consent and Communication
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Consent is the foundation of healthy sexual relationships. It must be informed, voluntary, enthusiastic, and ongoing. A <a href="#" className="text-blue-600 hover:underline">2022 study in the Journal of Interpersonal Violence</a> found that comprehensive consent education reduces sexual coercion by 63%.
                                </p>

                                <div className="bg-pink-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">FRIES Model of Consent</h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <h4 className="font-medium text-gray-900 mb-1 flex items-center">
                                                <Plus className="w-4 h-4 text-pink-600 mr-2" />
                                                Freely Given
                                            </h4>
                                            <p className="text-gray-700 text-sm">
                                                Not coerced or pressured; given without manipulation
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 mb-1 flex items-center">
                                                <Plus className="w-4 h-4 text-pink-600 mr-2" />
                                                Reversible
                                            </h4>
                                            <p className="text-gray-700 text-sm">
                                                Can be withdrawn at any time, even during sexual activity
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 mb-1 flex items-center">
                                                <Plus className="w-4 h-4 text-pink-600 mr-2" />
                                                Informed
                                            </h4>
                                            <p className="text-gray-700 text-sm">
                                                All parties understand what they're consenting to
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 mb-1 flex items-center">
                                                <Plus className="w-4 h-4 text-pink-600 mr-2" />
                                                Enthusiastic
                                            </h4>
                                            <p className="text-gray-700 text-sm">
                                                Active participation, not just lack of refusal
                                            </p>
                                        </div>
                                        <div className="md:col-span-2">
                                            <h4 className="font-medium text-gray-900 mb-1 flex items-center">
                                                <Plus className="w-4 h-4 text-pink-600 mr-2" />
                                                Specific
                                            </h4>
                                            <p className="text-gray-700 text-sm">
                                                Consent to one activity doesn't imply consent to others
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Communication Tips */}
                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Communication Tips for Healthy Relationships</h3>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="border border-gray-200 rounded-lg p-4">
                                            <h4 className="font-bold text-gray-900 mb-2">Before Intimacy</h4>
                                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                                                <li>Discuss boundaries and expectations</li>
                                                <li>Share STI status and testing history</li>
                                                <li>Talk about contraception preferences</li>
                                                <li>Establish safe words if needed</li>
                                            </ul>
                                        </div>
                                        <div className="border border-gray-200 rounded-lg p-4">
                                            <h4 className="font-bold text-gray-900 mb-2">During Intimacy</h4>
                                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                                                <li>Check in regularly with verbal cues</li>
                                                <li>Pay attention to non-verbal signals</li>
                                                <li>Respect all requests to slow down or stop</li>
                                                <li>Maintain open communication about comfort</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Mental Health Connection */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Sexual Health and Mental Well-being</h2>

                                <p className="text-gray-700 mb-6">
                                    Sexual health and mental health are deeply interconnected. Sexual difficulties can lead to mental health challenges, and mental health conditions can affect sexual function. A <a href="#" className="text-blue-600 hover:underline">2021 meta-analysis in the Journal of Affective Disorders</a> found that:
                                </p>

                                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                                        <div className="p-2">
                                            <div className="text-2xl font-bold text-blue-600">63%</div>
                                            <div className="text-sm text-gray-700">of people with depression report sexual dysfunction</div>
                                        </div>
                                        <div className="p-2">
                                            <div className="text-2xl font-bold text-blue-600">47%</div>
                                            <div className="text-sm text-gray-700">of anxiety sufferers experience sexual performance issues</div>
                                        </div>
                                        <div className="p-2">
                                            <div className="text-2xl font-bold text-blue-600">72%</div>
                                            <div className="text-sm text-gray-700">improvement in sexual satisfaction with mental health treatment</div>
                                        </div>
                                        <div className="p-2">
                                            <div className="text-2xl font-bold text-blue-600">58%</div>
                                            <div className="text-sm text-gray-700">of those with sexual health concerns develop mood disorders</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Common Challenges</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Body image concerns affecting intimacy</li>
                                            <li>Performance anxiety</li>
                                            <li>Past trauma impacting current relationships</li>
                                            <li>Medication side effects on sexual function</li>
                                            <li>Stress-related decreased libido</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Positive Strategies</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Therapy (individual or couples)</li>
                                            <li>Mindfulness and stress reduction techniques</li>
                                            <li>Open communication with partners</li>
                                            <li>Medical consultation for physical issues</li>
                                            <li>Self-exploration and education</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Resources and Support */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Resources and Support</h2>

                                <p className="text-gray-700 mb-6">
                                    Access to accurate information and supportive services is crucial for maintaining sexual health. Below are reputable resources for various needs:
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="border border-gray-200 rounded-lg p-4">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">National Organizations</h3>
                                        <ul className="space-y-3">
                                            <li>
                                                <a href="#" className="text-blue-600 hover:underline font-medium">Planned Parenthood</a>
                                                <p className="text-gray-700 text-sm">Comprehensive sexual health services and education</p>
                                            </li>
                                            <li>
                                                <a href="#" className="text-blue-600 hover:underline font-medium">The Trevor Project</a>
                                                <p className="text-gray-700 text-sm">LGBTQ+ crisis intervention and suicide prevention</p>
                                            </li>
                                            <li>
                                                <a href="#" className="text-blue-600 hover:underline font-medium">RAINN</a>
                                                <p className="text-gray-700 text-sm">Sexual assault support and resources</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="border border-gray-200 rounded-lg p-4">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Educational Websites</h3>
                                        <ul className="space-y-3">
                                            <li>
                                                <a href="#" className="text-blue-600 hover:underline font-medium">Scarleteen</a>
                                                <p className="text-gray-700 text-sm">Inclusive sex education for young people</p>
                                            </li>
                                            <li>
                                                <a href="#" className="text-blue-600 hover:underline font-medium">Bedsider</a>
                                                <p className="text-gray-700 text-sm">Birth control information and support</p>
                                            </li>
                                            <li>
                                                <a href="#" className="text-blue-600 hover:underline font-medium">American Sexual Health Association</a>
                                                <p className="text-gray-700 text-sm">Science-based sexual health information</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Sexual health is a lifelong journey that evolves with our changing bodies, relationships, and life circumstances. By prioritizing education, communication, and regular healthcare, we can all cultivate positive sexual well-being.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    Remember that there's no "normal" when it comes to sexuality—what matters most is that your experiences are consensual, pleasurable, and healthy for you and your partners.
                                </p>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "Sexual health requires a positive and respectful approach to sexuality and sexual relationships, as well as the possibility of having pleasurable and safe sexual experiences, free of coercion, discrimination, and violence." — World Health Organization
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
                                            Dr. Jamal Williams, MD
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600 mb-1">
                                        — Written by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            Dr. Emily Sanders, PhD
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
                                <h3 className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-2">HEALTH NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get sexual health resources</h4>
                                <p className="text-gray-700 text-sm">
                                    Monthly updates on sexual health research, tips, and community resources.
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

                        {/* Quick Facts */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Sexual Health Fast Facts</h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                        <BookOpen className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900">Education Impact</h4>
                                        <p className="text-sm text-gray-600">Comprehensive sex ed reduces STI rates by 50% in teens</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                        <AlertTriangle className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900">Testing Gap</h4>
                                        <p className="text-sm text-gray-600">60% of people with HIV don't know they're infected</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                        <Heart className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900">Relationship Quality</h4>
                                        <p className="text-sm text-gray-600">Good sexual communication increases relationship satisfaction by 73%</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Testing Guide */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">STI Testing Guide</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span className="font-medium">STI</span>
                                    <span className="font-medium">Test Type</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>HIV</span>
                                    <span className="text-blue-600">Blood test</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Chlamydia</span>
                                    <span className="text-blue-600">Urine/swab</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Gonorrhea</span>
                                    <span className="text-blue-600">Urine/swab</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Syphilis</span>
                                    <span className="text-blue-600">Blood test</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>HPV</span>
                                    <span className="text-blue-600">Pap smear (women)</span>
                                </div>
                            </div>
                        </div>

                        {/* Emergency Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Emergency Resources</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline font-medium">National Sexual Assault Hotline</a>
                                    <p className="text-sm text-gray-600">1-800-656-HOPE (4673)</p>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline font-medium">TrevorLifeline (LGBTQ+)</a>
                                    <p className="text-sm text-gray-600">1-866-488-7386</p>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline font-medium">PEP Locator</a>
                                    <p className="text-sm text-gray-600">Find HIV emergency prevention</p>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline font-medium">Planned Parenthood Chat</a>
                                    <p className="text-sm text-gray-600">24/7 confidential advice</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}