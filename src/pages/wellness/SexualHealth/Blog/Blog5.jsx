"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, Heart, Shield, AlertCircle, BookOpen, Lock, TestTube2, Pill, Baby, CircleDashed, Circle, Activity } from "lucide-react"

export default function UnderstandingSexualHealth() {
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

    const tabs = ["Overview", "STI Prevention", "Contraception", "Reproductive Health", "Emerging Trends"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Understanding Sexual Health: Comprehensive Care, Prevention, and Wellness
                            </h1>

                            {/* Navigation Tabs */}
                            <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-200">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                                            activeTab === tab
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
                                Sexual health is a vital aspect of overall well-being that encompasses physical, emotional, mental, and social dimensions. This comprehensive guide explores preventive care, STI testing, contraception methods, reproductive health services, and emerging healthcare approaches for optimal sexual wellness throughout all life stages.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=732&h=549&q=80"
                                    alt="Sexual health concept with medical symbols"
                                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                                    style={{ maxHeight: '500px' }}
                                />
                            </div>

                            {/* Key Takeaways */}
                            <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-8">
                                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                    <BookOpen className="w-5 h-5 text-purple-600 mr-2" />
                                    Key Takeaways
                                </h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>Regular STI testing can detect 95% of infections when performed correctly</li>
                                    <li>Modern contraceptive methods are 91-99% effective with perfect use</li>
                                    <li>Comprehensive sex education reduces risky behaviors by 40-70%</li>
                                    <li>Annual sexual health checkups are recommended for all sexually active individuals</li>
                                    <li>Mental health and sexual wellness are deeply interconnected</li>
                                </ul>
                            </div>

                            {/* Why Sexual Health Matters */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Heart className="w-8 h-8 text-purple-600 mr-2" />
                                    Why Sexual Health Matters
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Sexual health is fundamental to overall health and quality of life. The World Health Organization defines sexual health as "a state of physical, emotional, mental and social well-being in relation to sexuality." According to a <a href="#" className="text-blue-600 hover:underline">2023 global health report</a>, comprehensive sexual healthcare leads to:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>Reduced STI transmission rates (up to 60% decrease in communities with access)</li>
                                    <li>Lower unintended pregnancy rates (75% reduction with proper contraceptive use)</li>
                                    <li>Improved relationship satisfaction (reported by 68% of surveyed individuals)</li>
                                    <li>Better mental health outcomes (40% lower depression rates in sexually healthy populations)</li>
                                    <li>Increased life expectancy (particularly when STIs are detected early)</li>
                                </ul>

                                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Sexual Health Statistics</h3>
                                    <p className="text-gray-700 mb-2">
                                        1 in 2 sexually active persons will contract an STI by age 25, yet 80% of infected individuals show no symptoms.
                                    </p>
                                    <p className="text-gray-700">
                                        The CDC recommends annual STI testing for all sexually active adults under 25 and those with multiple partners.
                                    </p>
                                </div>
                            </section>

                            {/* STI Prevention and Testing */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Shield className="w-8 h-8 text-purple-600 mr-2" />
                                    STI Prevention and Testing
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Sexually transmitted infections affect millions worldwide, but proper prevention and regular testing can dramatically reduce risks. Below is a comprehensive guide to common STIs, their symptoms, and testing recommendations.
                                </p>

                                {/* STI Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">STI</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prevalence</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Symptoms</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Testing Frequency</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Treatment</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            {/* Row 1 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Chlamydia</td>
                                                <td className="px-4 py-3 whitespace-nowrap">1 in 20 young adults</td>
                                                <td className="px-4 py-3">Often none, discharge, pain</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Annual if sexually active</td>
                                                <td className="px-4 py-3">Antibiotics (curable)</td>
                                            </tr>
                                            {/* Row 2 */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Gonorrhea</td>
                                                <td className="px-4 py-3 whitespace-nowrap">1.14 million US cases/year</td>
                                                <td className="px-4 py-3">Burning, discharge, asymptomatic</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Annual if sexually active</td>
                                                <td className="px-4 py-3">Antibiotics (curable)</td>
                                            </tr>
                                            {/* Row 3 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">HIV</td>
                                                <td className="px-4 py-3 whitespace-nowrap">1.2 million US cases</td>
                                                <td className="px-4 py-3">Flu-like early, then asymptomatic</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Every 3-6 months if high risk</td>
                                                <td className="px-4 py-3">Antiretroviral therapy</td>
                                            </tr>
                                            {/* Row 4 */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">HPV</td>
                                                <td className="px-4 py-3 whitespace-nowrap">80% of adults</td>
                                                <td className="px-4 py-3">Often none, warts, cell changes</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Pap smear every 3-5 years</td>
                                                <td className="px-4 py-3">Vaccine, monitoring</td>
                                            </tr>
                                            {/* Row 5 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Herpes (HSV-2)</td>
                                                <td className="px-4 py-3 whitespace-nowrap">12% adults 14-49</td>
                                                <td className="px-4 py-3">Blisters, sores, often none</td>
                                                <td className="px-4 py-3 whitespace-nowrap">When symptoms appear</td>
                                                <td className="px-4 py-3">Antivirals (manageable)</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <p className="text-gray-700 mb-6">
                                    *Prevalence data from CDC 2023 Surveillance Report. Testing recommendations vary based on individual risk factors.
                                </p>

                                {/* Prevention Strategies */}
                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">1</span>
                                            Barrier Methods - First Line of Defense
                                        </h3>
                                        <p className="text-gray-700">
                                            Correct and consistent use of condoms reduces STI transmission risk by 80-95%. Internal condoms and dental dams provide additional protection options. Modern polyurethane condoms are just as effective as latex.
                                        </p>
                                    </div>
                                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">2</span>
                                            Vaccinations - Preventative Medicine
                                        </h3>
                                        <p className="text-gray-700">
                                            The HPV vaccine (Gardasil-9) prevents 90% of HPV-related cancers. Hepatitis B vaccine is 98% effective. Both are recommended for adolescents and young adults, with catch-up vaccines available.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Contraception Methods */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Lock className="w-8 h-8 text-purple-600 mr-2" />
                                    Modern Contraception Methods
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Choosing the right contraceptive method depends on effectiveness, convenience, health considerations, and personal preferences. Below is a comparison of major contraceptive options:
                                </p>

                                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                                    <div className="grid grid-cols-4 gap-4 text-center font-medium mb-2">
                                        <div>Method</div>
                                        <div>Perfect Use</div>
                                        <div>Typical Use</div>
                                        <div>STI Protection</div>
                                    </div>
                                    <div className="grid grid-cols-4 gap-4 text-center mb-1">
                                        <div className="font-medium">Implant</div>
                                        <div>99%</div>
                                        <div>99%</div>
                                        <div>No</div>
                                    </div>
                                    <div className="grid grid-cols-4 gap-4 text-center mb-1 bg-purple-50 p-1 rounded">
                                        <div className="font-medium">IUD</div>
                                        <div>99%</div>
                                        <div>99%</div>
                                        <div>No</div>
                                    </div>
                                    <div className="grid grid-cols-4 gap-4 text-center mb-1">
                                        <div className="font-medium">Pill</div>
                                        <div>99%</div>
                                        <div>91%</div>
                                        <div>No</div>
                                    </div>
                                    <div className="grid grid-cols-4 gap-4 text-center">
                                        <div className="font-medium">Condoms</div>
                                        <div>98%</div>
                                        <div>85%</div>
                                        <div>Yes</div>
                                    </div>
                                </div>

                                <p className="text-gray-700 mb-6">
                                    Long-acting reversible contraceptives (LARCs) like IUDs and implants are the most effective options, with less than 1 pregnancy per 100 women per year. They require minimal user action after insertion.
                                </p>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Important Consideration:</h3>
                                    <p className="text-gray-700">
                                        Emergency contraception (morning-after pill) is 75-89% effective when taken within 72 hours of unprotected sex. Copper IUDs can also be inserted up to 5 days after as emergency contraception with 99% effectiveness.
                                    </p>
                                </div>
                            </section>

                            {/* Reproductive Health Services */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Baby className="w-8 h-8 text-purple-600 mr-2" />
                                    Reproductive Health Services
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Comprehensive reproductive healthcare includes fertility services, pregnancy care, and family planning options. Key services include:
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Fertility Services</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Fertility assessments and testing</li>
                                            <li>Ovulation tracking and timing</li>
                                            <li>Assisted reproductive technologies (IUI, IVF)</li>
                                            <li>Fertility preservation (egg/sperm freezing)</li>
                                            <li>Genetic counseling and testing</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Pregnancy Care</h3>
                                        <ol className="list-decimal list-inside text-gray-700 space-y-2">
                                            <li>Prenatal vitamins and nutrition counseling</li>
                                            <li>Ultrasound and genetic screening</li>
                                            <li>High-risk pregnancy management</li>
                                            <li>Childbirth education classes</li>
                                            <li>Postpartum care and support</li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="bg-purple-50 p-4 rounded-lg mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Family Planning Timeline</h3>
                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="font-medium text-gray-900">Preconception (3-12 months before)</h4>
                                            <p className="text-gray-700">Health optimization, genetic screening, vaccinations</p>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900">Pregnancy (40 weeks)</h4>
                                            <p className="text-gray-700">Regular checkups, monitoring, preparation</p>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900">Postpartum (6 weeks - 1 year)</h4>
                                            <p className="text-gray-700">Recovery, newborn care, contraception planning</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Gender-Specific Considerations */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Gender-Specific Considerations</h2>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-pink-600 px-4 py-2 flex items-center">
                                            <CircleDashed className="w-5 h-5 text-white mr-2" />
                                            <h3 className="font-bold text-white">Female Sexual Health</h3>
                                        </div>
                                        <div className="p-4">
                                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                                <li>Annual well-woman exams (pelvic, breast, Pap smear)</li>
                                                <li>Menstrual health management</li>
                                                <li>Menopause transition support</li>
                                                <li>Polycystic ovary syndrome (PCOS) care</li>
                                                <li>Endometriosis and fibroid management</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2 flex items-center">
                                            <Circle className="w-5 h-5 text-white mr-2" />
                                            <h3 className="font-bold text-white">Male Sexual Health</h3>
                                        </div>
                                        <div className="p-4">
                                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                                <li>Testicular self-exams and cancer screening</li>
                                                <li>Prostate health monitoring</li>
                                                <li>Erectile dysfunction evaluation</li>
                                                <li>Low testosterone assessment</li>
                                                <li>Male fertility testing</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Emerging Trends */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Activity className="w-8 h-8 text-purple-600 mr-2" />
                                    Emerging Trends in Sexual Healthcare
                                </h2>

                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Telemedicine and Digital Health</h3>
                                        <p className="text-gray-700 mb-4">
                                            Virtual consultations for sexual health have increased by 300% since 2020. Digital platforms now offer:
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2">
                                            <li>Online STI test ordering and results</li>
                                            <li>Discreet contraceptive prescriptions</li>
                                            <li>Mental health support for sexual concerns</li>
                                            <li>Digital therapeutics for erectile dysfunction</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Personalized Medicine</h3>
                                        <p className="text-gray-700">
                                            Advances in genomics and microbiome research are leading to tailored treatments for sexual dysfunction, fertility issues, and STI susceptibility based on individual biology.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Comprehensive sexual healthcare is essential for individuals of all ages, genders, and orientations. Regular checkups, open communication with healthcare providers, and staying informed about prevention methods can significantly enhance quality of life and reduce health risks.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    Remember that sexual health encompasses physical, emotional, and social well-being. Seeking care should be a positive, empowering experience free from stigma or judgment.
                                </p>

                                <div className="bg-purple-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "Sexual health is not just the absence of disease - it's the presence of respectful, pleasurable, and safe sexual experiences. Prioritizing your sexual wellness is an investment in your overall health and happiness."
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
                                            Dr. Emily Rodriguez, OB/GYN
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
                                <h3 className="text-sm font-bold text-purple-800 uppercase tracking-wide mb-2">HEALTH NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get sexual wellness tips</h4>
                                <p className="text-gray-700 text-sm">
                                    Monthly updates on reproductive health, relationships, and evidence-based advice.
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

                        {/* Quick Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Resources</h3>
                            <div className="space-y-4">
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/sti-testing.jpg" alt="STI testing" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors">Find Local STI Testing</h4>
                                            <p className="text-sm text-gray-600">Free and confidential testing centers</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/contraception.jpg" alt="Contraception options" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors">Contraception Cost Guide</h4>
                                            <p className="text-sm text-gray-600">Affordable options and insurance coverage</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Emergency Contacts */}
                        <div className="bg-red-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
                                Emergency Contacts
                            </h3>
                            <ul className="space-y-3">
                                <li>
                                    <p className="font-medium">National Sexual Assault Hotline</p>
                                    <p className="text-sm text-gray-700">1-800-656-HOPE (4673)</p>
                                </li>
                                <li>
                                    <p className="font-medium">Suicide & Crisis Lifeline</p>
                                    <p className="text-sm text-gray-700">988</p>
                                </li>
                                <li>
                                    <p className="font-medium">Trevor Project (LGBTQ+)</p>
                                    <p className="text-sm text-gray-700">1-866-488-7386</p>
                                </li>
                                <li>
                                    <p className="font-medium">Poison Control</p>
                                    <p className="text-sm text-gray-700">1-800-222-1222</p>
                                </li>
                            </ul>
                        </div>

                        {/* Further Reading */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Further Reading</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-purple-600 hover:underline flex items-start">
                                        <TestTube2 className="w-4 h-4 mt-1 mr-2 flex-shrink-0" />
                                        <span>Understanding Your STI Test Results</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-purple-600 hover:underline flex items-start">
                                        <Pill className="w-4 h-4 mt-1 mr-2 flex-shrink-0" />
                                        <span>Birth Control Options Comparison</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-purple-600 hover:underline flex items-start">
                                        <Heart className="w-4 h-4 mt-1 mr-2 flex-shrink-0" />
                                        <span>Healthy Relationships Guide</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-purple-600 hover:underline flex items-start">
                                        <Venus className="w-4 h-4 mt-1 mr-2 flex-shrink-0" />
                                        <span>Menstrual Health Resources</span>
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