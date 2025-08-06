"use client"

import { useEffect, useState } from "react"
import { User, Calendar, AlertCircle, HeartPulse, Clock, ChevronRight } from "lucide-react"

export default function BreastCancerScreeningGuide() {
    const [email, setEmail] = useState("")
    const [activeTab, setActiveTab] = useState("Overview")

    const handleEmailSubmit = (e) => {
        e.preventDefault()
        console.log("Email submitted:", email)
        setEmail("")
    }

      useEffect(() => {
        // Scroll to top when the component mounts
        window.scrollTo(0, 0)
      }, [])
      // Define the tabs for navigation

    const tabs = ["Overview", "Screening Methods", "Risk Factors", "Early Signs", "Prevention"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                The Importance of Breast Cancer Screening and Early Detection
                            </h1>

                            {/* Navigation Tabs */}
                            <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-200">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${activeTab === tab
                                                ? "border-pink-500 text-pink-600"
                                                : "border-transparent text-gray-600 hover:text-gray-900"
                                            }`}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>

                            {/* Intro Text */}
                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                Regular breast cancer screenings can detect breast cancer years before symptoms develop, significantly improving treatment outcomes and survival rates. Early detection through screening mammography has been shown to reduce breast cancer mortality by 20-40%.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop"
                                    alt="Doctor explaining mammogram results to patient"
                                    className="w-full h-auto rounded-lg shadow-lg"
                                />
                            </div>

                            {/* Key Fact Box */}
                            <div className="bg-pink-50 border-l-4 border-pink-400 p-4 mb-8">
                                <div className="flex items-start gap-3">
                                    <AlertCircle className="w-5 h-5 text-pink-600 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <p className="text-gray-700">
                                            <span className="text-pink-600 font-medium">Key Fact:</span> When breast cancer is detected early (localized stage), the 5-year relative survival rate is 99%. This drops to 86% for regional spread and 29% when cancer has metastasized to distant organs.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Overview Section */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Screening Matters</h2>

                                <p className="text-gray-700 mb-4">
                                    Breast cancer screening refers to testing apparently healthy women for breast cancer before any symptoms appear. The goal is to find cancer when it's small and hasn't spread, making it easier to treat successfully.
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div className="bg-blue-50 p-4 rounded-lg">
                                        <h3 className="text-xl font-bold text-blue-800 mb-3">Benefits of Early Detection</h3>
                                        <ul className="space-y-2">
                                            <li className="flex items-start gap-2">
                                                <ChevronRight className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                                <span>More treatment options available</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <ChevronRight className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                                <span>Less aggressive treatments may be effective</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <ChevronRight className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                                <span>Higher survival rates</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <ChevronRight className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                                <span>Lower treatment costs</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-green-50 p-4 rounded-lg">
                                        <h3 className="text-xl font-bold text-green-800 mb-3">Consequences of Late Detection</h3>
                                        <ul className="space-y-2">
                                            <li className="flex items-start gap-2">
                                                <ChevronRight className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                                <span>Limited treatment options</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <ChevronRight className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                                <span>More aggressive treatments required</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <ChevronRight className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                                <span>Lower survival rates</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <ChevronRight className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                                <span>Higher treatment costs</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <p className="text-gray-700 mb-6">
                                    According to the American Cancer Society, about 1 in 8 women in the U.S. (13%) will develop invasive breast cancer during their lifetime. In 2023, an estimated <span className="font-semibold">297,790 new cases of invasive breast cancer</span> were expected to be diagnosed in women in the U.S., along with <span className="font-semibold">55,720 new cases of non-invasive (in situ) breast cancer</span>.
                                </p>
                            </section>

                            {/* Screening Methods Section */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Breast Cancer Screening Methods</h2>

                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                        <HeartPulse className="w-6 h-6 text-pink-600" />
                                        1. Mammography
                                    </h3>
                                    <p className="text-gray-700 mb-4">
                                        Mammograms are low-dose X-rays of the breast that can detect tumors too small to feel. There are two main types:
                                    </p>

                                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <h4 className="font-bold text-gray-800 mb-2">Screening Mammogram</h4>
                                            <ul className="text-sm text-gray-700 space-y-1">
                                                <li>For women with no symptoms</li>
                                                <li>Typically two X-ray images per breast</li>
                                                <li>Detects calcifications or masses</li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <h4 className="font-bold text-gray-800 mb-2">Diagnostic Mammogram</h4>
                                            <ul className="text-sm text-gray-700 space-y-1">
                                                <li>For women with symptoms or abnormal screening</li>
                                                <li>More images from different angles</li>
                                                <li>May include magnification views</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <p className="text-gray-700 mb-4">
                                        <span className="font-semibold">3D Mammography (Tomosynthesis):</span> This newer technology takes multiple X-ray pictures of each breast from different angles, creating a 3D image. Studies show it detects about <span className="font-semibold">40% more invasive cancers</span> than traditional 2D mammography and reduces false positives.
                                    </p>
                                </div>

                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                        <HeartPulse className="w-6 h-6 text-pink-600" />
                                        2. Clinical Breast Exam (CBE)
                                    </h3>
                                    <p className="text-gray-700 mb-4">
                                        A physical examination of the breasts performed by a healthcare professional to check for lumps or other changes. While not a substitute for mammography, it can sometimes detect cancers missed by mammograms, especially in women with dense breast tissue.
                                    </p>
                                </div>

                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                        <HeartPulse className="w-6 h-6 text-pink-600" />
                                        3. Breast Self-Awareness
                                    </h3>
                                    <p className="text-gray-700 mb-4">
                                        Being familiar with how your breasts normally look and feel can help you notice any changes. While breast self-exams are no longer formally recommended as a screening tool, knowing your body is important.
                                    </p>
                                    <p className="text-gray-700 mb-4 font-semibold">Changes to report to your doctor:</p>
                                    <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-1">
                                        <li>New lump or mass</li>
                                        <li>Swelling, warmth, redness or darkening</li>
                                        <li>Change in size or shape</li>
                                        <li>Dimpling or puckering of skin</li>
                                        <li>Nipple retraction or discharge</li>
                                        <li>Persistent pain in one spot</li>
                                    </ul>
                                </div>

                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                        <HeartPulse className="w-6 h-6 text-pink-600" />
                                        4. Additional Screening for High-Risk Women
                                    </h3>
                                    <p className="text-gray-700 mb-4">
                                        Women at high risk may need additional screening methods:
                                    </p>
                                    <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-1">
                                        <li><span className="font-semibold">Breast MRI:</span> Uses magnets and radio waves to create detailed images</li>
                                        <li><span className="font-semibold">Ultrasound:</span> Uses sound waves to examine breast tissue</li>
                                        <li><span className="font-semibold">Genetic Testing:</span> For BRCA1/BRCA2 mutations or other genetic markers</li>
                                    </ul>
                                </div>

                                {/* Screening Guidelines Table */}
                                <div className="mb-8 overflow-x-auto">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Current Screening Guidelines</h3>
                                    <table className="min-w-full bg-white border border-gray-200">
                                        <thead className="bg-gray-100">
                                            <tr>
                                                <th className="py-2 px-4 border-b text-left">Organization</th>
                                                <th className="py-2 px-4 border-b text-left">Age to Start</th>
                                                <th className="py-2 px-4 border-b text-left">Frequency</th>
                                                <th className="py-2 px-4 border-b text-left">When to Stop</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="py-2 px-4 border-b">American Cancer Society</td>
                                                <td className="py-2 px-4 border-b">45 (optional at 40-44)</td>
                                                <td className="py-2 px-4 border-b">Yearly 45-54, then every 2 years</td>
                                                <td className="py-2 px-4 border-b">As long as healthy</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="py-2 px-4 border-b">U.S. Preventive Services Task Force</td>
                                                <td className="py-2 px-4 border-b">50 (40-49 individual decision)</td>
                                                <td className="py-2 px-4 border-b">Every 2 years</td>
                                                <td className="py-2 px-4 border-b">74 years</td>
                                            </tr>
                                            <tr>
                                                <td className="py-2 px-4 border-b">American College of Obstetricians and Gynecologists</td>
                                                <td className="py-2 px-4 border-b">40</td>
                                                <td className="py-2 px-4 border-b">Every 1-2 years</td>
                                                <td className="py-2 px-4 border-b">No upper limit</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <p className="text-sm text-gray-600 mt-2">* Guidelines may vary based on individual risk factors</p>
                                </div>
                            </section>

                            {/* Risk Factors Section */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Breast Cancer Risk Factors</h2>

                                <p className="text-gray-700 mb-6">
                                    Understanding your risk factors can help you and your doctor determine the most appropriate screening schedule. Risk factors fall into two categories:
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="border border-gray-200 rounded-lg p-4">
                                        <h3 className="text-xl font-bold text-gray-900 mb-4">Non-Modifiable Risk Factors</h3>
                                        <ul className="space-y-3">
                                            <li className="flex items-start gap-2">
                                                <ChevronRight className="w-4 h-4 text-pink-600 mt-0.5 flex-shrink-0" />
                                                <span><span className="font-semibold">Gender:</span> Women are 100 times more likely than men</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <ChevronRight className="w-4 h-4 text-pink-600 mt-0.5 flex-shrink-0" />
                                                <span><span className="font-semibold">Age:</span> Risk increases with age</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <ChevronRight className="w-4 h-4 text-pink-600 mt-0.5 flex-shrink-0" />
                                                <span><span className="font-semibold">Genetics:</span> BRCA1/BRCA2 mutations</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <ChevronRight className="w-4 h-4 text-pink-600 mt-0.5 flex-shrink-0" />
                                                <span><span className="font-semibold">Family history:</span> Especially first-degree relatives</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <ChevronRight className="w-4 h-4 text-pink-600 mt-0.5 flex-shrink-0" />
                                                <span><span className="font-semibold">Dense breast tissue:</span> 4-6 times higher risk</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <ChevronRight className="w-4 h-4 text-pink-600 mt-0.5 flex-shrink-0" />
                                                <span><span className="font-semibold">Early menstruation/late menopause:</span> More lifetime estrogen exposure</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg p-4">
                                        <h3 className="text-xl font-bold text-gray-900 mb-4">Modifiable Risk Factors</h3>
                                        <ul className="space-y-3">
                                            <li className="flex items-start gap-2">
                                                <ChevronRight className="w-4 h-4 text-pink-600 mt-0.5 flex-shrink-0" />
                                                <span><span className="font-semibold">Physical inactivity:</span> Exercise reduces risk by 10-20%</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <ChevronRight className="w-4 h-4 text-pink-600 mt-0.5 flex-shrink-0" />
                                                <span><span className="font-semibold">Alcohol consumption:</span> Each drink/day increases risk 7-10%</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <ChevronRight className="w-4 h-4 text-pink-600 mt-0.5 flex-shrink-0" />
                                                <span><span className="font-semibold">Postmenopausal weight:</span> Higher BMI increases risk</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <ChevronRight className="w-4 h-4 text-pink-600 mt-0.5 flex-shrink-0" />
                                                <span><span className="font-semibold">Hormone therapy:</span> Especially combined estrogen+progestin</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <ChevronRight className="w-4 h-4 text-pink-600 mt-0.5 flex-shrink-0" />
                                                <span><span className="font-semibold">Not breastfeeding:</span> Each year of breastfeeding reduces risk 4.3%</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <ChevronRight className="w-4 h-4 text-pink-600 mt-0.5 flex-shrink-0" />
                                                <span><span className="font-semibold">Smoking:</span> Especially if started young</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
                                    <div className="flex items-start gap-3">
                                        <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <p className="text-gray-700">
                                                <span className="text-yellow-600 font-medium">Important:</span> Having risk factors doesn't mean you'll get breast cancer, and many women with breast cancer have no known risk factors beyond being female and aging. About 85% of breast cancers occur in women with no family history.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Early Signs Section */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Early Signs and Symptoms</h2>

                                <p className="text-gray-700 mb-6">
                                    While screening aims to find cancer before symptoms appear, being aware of potential warning signs is crucial. Many breast cancers are still found when women notice changes in their breasts.
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-4">Common Symptoms</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                                            <li>A new lump or mass (often painless, hard, irregular edges)</li>
                                            <li>Swelling of all or part of the breast</li>
                                            <li>Skin irritation or dimpling (like an orange peel)</li>
                                            <li>Breast or nipple pain</li>
                                            <li>Nipple retraction (turning inward)</li>
                                            <li>Redness, scaliness, or thickening of nipple/breast skin</li>
                                            <li>Nipple discharge (other than breast milk)</li>
                                            <li>Lump in the underarm area</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-4">Less Common Symptoms</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                                            <li>Persistent breast pain not related to menstrual cycle</li>
                                            <li>Unexplained weight loss</li>
                                            <li>Swelling in the armpit or around the collarbone</li>
                                            <li>Visible veins on the breast</li>
                                            <li>Change in breast size or shape</li>
                                            <li>Itchy, sore, or scaling area on the nipple</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-8">
                                    <div className="flex items-start gap-3">
                                        <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <p className="text-gray-700">
                                                <span className="text-red-600 font-medium">Warning:</span> Inflammatory breast cancer (IBC) is a rare but aggressive form that often doesn't cause a lump. Symptoms may include redness, swelling, warmth, and an orange-peel texture to the skin. These symptoms can develop quickly and require immediate medical attention.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Prevention Section */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Prevention and Risk Reduction</h2>

                                <p className="text-gray-700 mb-6">
                                    While there's no sure way to prevent breast cancer, you can take steps to reduce your risk, especially if you have known risk factors.
                                </p>

                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Lifestyle Changes</h3>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-green-50 p-4 rounded-lg">
                                            <h4 className="font-bold text-green-800 mb-3">What to Increase</h4>
                                            <ul className="space-y-2">
                                                <li className="flex items-start gap-2">
                                                    <ChevronRight className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                                    <span><span className="font-semibold">Physical activity:</span> Aim for 150+ minutes/week</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <ChevronRight className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                                    <span><span className="font-semibold">Fruits/vegetables:</span> Especially cruciferous vegetables</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <ChevronRight className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                                    <span><span className="font-semibold">Breastfeeding:</span> If possible, for at least several months</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <ChevronRight className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                                    <span><span className="font-semibold">Healthy weight:</span> Especially after menopause</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="bg-red-50 p-4 rounded-lg">
                                            <h4 className="font-bold text-red-800 mb-3">What to Decrease</h4>
                                            <ul className="space-y-2">
                                                <li className="flex items-start gap-2">
                                                    <ChevronRight className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                                                    <span><span className="font-semibold">Alcohol:</span> Limit to 1 drink/day</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <ChevronRight className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                                                    <span><span className="font-semibold">Smoking:</span> Quit entirely</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <ChevronRight className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                                                    <span><span className="font-semibold">Hormone therapy:</span> Use lowest effective dose for shortest time</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <ChevronRight className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                                                    <span><span className="font-semibold">Night shift work:</span> May disrupt circadian rhythms</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Medical Prevention Options</h3>
                                    <p className="text-gray-700 mb-4">
                                        For women at high risk, doctors may recommend:
                                    </p>
                                    <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                        <li><span className="font-semibold">Chemoprevention:</span> Drugs like tamoxifen or raloxifene that block estrogen</li>
                                        <li><span className="font-semibold">Preventive surgery:</span> Prophylactic mastectomy for BRCA mutation carriers</li>
                                        <li><span className="font-semibold">Ovarian suppression:</span> For premenopausal high-risk women</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Conclusion Section */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Take Action for Your Breast Health</h2>

                                <p className="text-gray-700 mb-6">
                                    Breast cancer screening saves lives. While recommendations vary slightly between organizations, the consensus is clear: regular mammograms significantly reduce breast cancer mortality. The key is to:
                                </p>

                                <div className="grid md:grid-cols-3 gap-4 mb-8">
                                    <div className="bg-blue-50 p-4 rounded-lg text-center">
                                        <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                                        <h4 className="font-bold text-blue-800 mb-2">Know When to Start</h4>
                                        <p className="text-sm text-gray-700">Discuss with your doctor whether to begin at 40 or 45</p>
                                    </div>

                                    <div className="bg-purple-50 p-4 rounded-lg text-center">
                                        <Calendar className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                                        <h4 className="font-bold text-purple-800 mb-2">Stick to Schedule</h4>
                                        <p className="text-sm text-gray-700">Annual or biennial screenings based on your risk</p>
                                    </div>

                                    <div className="bg-pink-50 p-4 rounded-lg text-center">
                                        <AlertCircle className="w-8 h-8 text-pink-600 mx-auto mb-2" />
                                        <h4 className="font-bold text-pink-800 mb-2">Report Changes</h4>
                                        <p className="text-sm text-gray-700">Don't wait for your next screening if you notice symptoms</p>
                                    </div>
                                </div>

                                <div className="bg-gray-50 rounded-lg p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Next Steps</h3>
                                    <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-4">
                                        <li>Talk to your doctor about your personal breast cancer risk</li>
                                        <li>Develop a screening plan based on your age and risk factors</li>
                                        <li>Schedule your first (or next) mammogram</li>
                                        <li>Practice breast self-awareness</li>
                                        <li>Adopt healthy lifestyle habits to reduce risk</li>
                                    </ol>
                                </div>
                            </section>
                        </div>

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
                                                Dr. Sarah Johnson, MD, Oncologist
                                            </a>
                                        </p>
                                        <p className="text-sm text-gray-600 mb-1">
                                            — Written by{" "}
                                            <a href="#" className="text-blue-600 hover:underline font-medium">
                                                Emily Carter, Health Journalist
                                            </a>
                                        </p>
                                        <p className="text-sm text-gray-600 flex items-center gap-1">
                                            — <Calendar className="w-3 h-3" />
                                            <a href="#" className="text-blue-600 hover:underline">
                                                Updated on March 15, 2024
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Screening Reminder */}
                            <div className="bg-pink-50 rounded-lg p-6 mb-8">
                                <div className="flex items-center gap-3 mb-3">
                                    <AlertCircle className="w-6 h-6 text-pink-600" />
                                    <h3 className="text-lg font-bold text-gray-900">Screening Reminder</h3>
                                </div>
                                <p className="text-gray-700 text-sm mb-4">
                                    Use our tool to calculate when you should schedule your next mammogram based on your age and risk factors.
                                </p>
                                <button className="w-full bg-pink-600 hover:bg-pink-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                                    CALCULATE NEXT SCREENING
                                </button>
                            </div>

                            {/* Risk Assessment */}
                            <div className="bg-blue-50 rounded-lg p-6 mb-8">
                                <h3 className="text-lg font-bold text-gray-900 mb-3">Breast Cancer Risk Assessment</h3>
                                <p className="text-gray-700 text-sm mb-4">
                                    Take this quick assessment to understand your personal risk factors for breast cancer.
                                </p>
                                <div className="space-y-3 mb-4">
                                    <div className="flex items-center gap-2">
                                        <input type="checkbox" id="family-history" className="rounded text-blue-600" />
                                        <label htmlFor="family-history" className="text-sm text-gray-700">Family history of breast cancer</label>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <input type="checkbox" id="brca" className="rounded text-blue-600" />
                                        <label htmlFor="brca" className="text-sm text-gray-700">Known BRCA mutation</label>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <input type="checkbox" id="dense-breasts" className="rounded text-blue-600" />
                                        <label htmlFor="dense-breasts" className="text-sm text-gray-700">Dense breast tissue</label>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <input type="checkbox" id="alcohol" className="rounded text-blue-600" />
                                        <label htmlFor="alcohol" className="text-sm text-gray-700">Regular alcohol consumption</label>
                                    </div>
                                </div>
                                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                                    ASSESS MY RISK
                                </button>
                            </div>

                            {/* Resources */}
                            <div className="bg-gray-50 rounded-lg p-6 mb-8">
                                <h3 className="text-lg font-bold text-gray-900 mb-3">Helpful Resources</h3>
                                <ul className="space-y-3">
                                    <li>
                                        <a href="#" className="text-blue-600 hover:underline text-sm flex items-center gap-1">
                                            <ChevronRight className="w-4 h-4" />
                                            American Cancer Society Screening Guidelines
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-blue-600 hover:underline text-sm flex items-center gap-1">
                                            <ChevronRight className="w-4 h-4" />
                                            National Breast Cancer Foundation
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-blue-600 hover:underline text-sm flex items-center gap-1">
                                            <ChevronRight className="w-4 h-4" />
                                            Breast Cancer Research Foundation
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-blue-600 hover:underline text-sm flex items-center gap-1">
                                            <ChevronRight className="w-4 h-4" />
                                            Find a Mammogram Facility Near You
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* Newsletter Signup */}
                            <div className="bg-teal-50 rounded-lg p-6 mb-8">
                                <div className="mb-4">
                                    <h3 className="text-sm font-bold text-teal-800 uppercase tracking-wide mb-2">HEALTHLINE NEWSLETTER</h3>
                                    <h4 className="text-xl font-bold text-gray-900 mb-2">Breast Health Updates</h4>
                                    <p className="text-gray-700 text-sm">
                                        Get the latest on screening guidelines, prevention tips, and research breakthroughs delivered to your inbox.
                                    </p>
                                </div>

                                <form onSubmit={handleEmailSubmit} className="space-y-4">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200"
                                    >
                                        SUBSCRIBE
                                    </button>
                                </form>

                                <p className="text-xs text-gray-600 mt-3">
                                    Your{" "}
                                    <a href="#" className="text-pink-600 hover:underline">
                                        privacy
                                    </a>{" "}
                                    is important to us
                                </p>
                            </div>

                            {/* Support Resources */}
                            <div className="bg-blue-50 rounded-lg p-6 mb-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Support Resources</h3>
                                <ul className="space-y-3">
                                    <li>
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            American Cancer Society
                                        </a>
                                        <p className="text-gray-700 text-sm">800-227-2345</p>
                                    </li>
                                    <li>
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            BreastCancer.org
                                        </a>
                                        <p className="text-gray-700 text-sm">Online support community</p>
                                    </li>
                                    <li>
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            Living Beyond Breast Cancer
                                        </a>
                                        <p className="text-gray-700 text-sm">888-753-5222</p>
                                    </li>
                                    <li>
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            CancerCare
                                        </a>
                                        <p className="text-gray-700 text-sm">Free professional support services</p>
                                    </li>
                                </ul>
                            </div>

                            {/* Related Articles */}
                            <div className="bg-gray-50 rounded-lg p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Related Articles</h3>
                                <ul className="space-y-4">
                                    <li>
                                        <a href="#" className="text-gray-900 hover:text-blue-600 font-medium block">
                                            Neoadjuvant Therapy for Breast Cancer: What to Expect
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-900 hover:text-blue-600 font-medium block">
                                            Managing Side Effects of Breast Cancer Treatment
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-900 hover:text-blue-600 font-medium block">
                                            Life After Breast Cancer: Follow-Up Care Guidelines
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-900 hover:text-blue-600 font-medium block">
                                            Understanding Hormone Receptor Status in Breast Cancer
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-900 hover:text-blue-600 font-medium block">
                                            HER2-Positive Breast Cancer: Targeted Therapy Options
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