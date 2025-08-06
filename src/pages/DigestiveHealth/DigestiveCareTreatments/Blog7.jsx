"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, HeartPulse, Stethoscope, Shield, AlertCircle, ClipboardList, Clock, BookOpen } from "lucide-react"

export default function DigestiveCheckupsGuide() {
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

    const tabs = ["Overview", "Screenings", "Conditions", "Prevention"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                The Importance of Regular Digestive Check-ups
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
                                <span className="text-sm">7 min read</span>
                            </div>

                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                Comprehensive digestive evaluations and screenings can detect gastrointestinal conditions early, significantly improving treatment outcomes. Learn why regular check-ups are crucial for maintaining digestive health and preventing serious conditions like colorectal cancer, IBD, and liver disease.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80"
                                    alt="Doctor performing digestive health examination"
                                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                                    style={{ maxHeight: '500px' }}
                                />
                            </div>

                            {/* Key Takeaways */}
                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
                                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                    <ClipboardList className="w-5 h-5 text-blue-600 mr-2" />
                                    Key Takeaways
                                </h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>Early detection of GI conditions improves treatment success by 70-90%</li>
                                    <li>Colonoscopies can prevent up to 80% of colorectal cancers when done regularly</li>
                                    <li>Adults should begin regular screenings at age 45, earlier if risk factors exist</li>
                                    <li>New non-invasive tests are making screenings more accessible</li>
                                    <li>Digestive health impacts overall wellness including immune function and mental health</li>
                                </ul>
                            </div>

                            {/* Why Digestive Check-ups Matter */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <HeartPulse className="w-8 h-8 text-blue-600 mr-2" />
                                    Why Digestive Check-ups Matter
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    The digestive system is fundamental to overall health, responsible for nutrient absorption, immune function, and waste elimination. According to the <a href="#" className="text-blue-600 hover:underline">American Gastroenterological Association</a>, regular digestive screenings can:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>Reduce colorectal cancer mortality by 50-70% with regular colonoscopies</li>
                                    <li>Detect precancerous polyps before they become malignant</li>
                                    <li>Identify inflammatory bowel disease (IBD) in early stages when treatment is most effective</li>
                                    <li>Prevent 80% of esophageal cancers through early Barrett's esophagus detection</li>
                                </ul>

                                <div className="bg-blue-100 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">The Silent Nature of Digestive Disorders</h3>
                                    <p className="text-gray-700">
                                        Many serious digestive conditions develop silently without noticeable symptoms until advanced stages. For example, colorectal cancer often shows no symptoms until it reaches stage III or IV. Regular screenings are the only way to detect these conditions early when treatment is most effective.
                                    </p>
                                </div>
                            </section>

                            {/* Recommended Screenings */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Stethoscope className="w-8 h-8 text-blue-600 mr-2" />
                                    Recommended Digestive Screenings
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    The following table outlines essential digestive health screenings, recommended frequencies, and the conditions they help detect or prevent:
                                </p>

                                {/* Screenings Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Screening</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Recommended Age/Frequency</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Conditions Detected</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Effectiveness</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            {/* Row 1 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Colonoscopy</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Every 10 years starting at 45</td>
                                                <td className="px-4 py-3">Colorectal cancer, polyps, IBD</td>
                                                <td className="px-4 py-3 whitespace-nowrap">90% effective at cancer prevention</td>
                                            </tr>
                                            {/* Row 2 */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Upper Endoscopy</td>
                                                <td className="px-4 py-3 whitespace-nowrap">As needed based on symptoms</td>
                                                <td className="px-4 py-3">GERD, Barrett's esophagus, ulcers</td>
                                                <td className="px-4 py-3 whitespace-nowrap">85% diagnostic accuracy</td>
                                            </tr>
                                            {/* Row 3 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Stool Tests (FIT)</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Annually starting at 45</td>
                                                <td className="px-4 py-3">Colorectal cancer, bleeding</td>
                                                <td className="px-4 py-3 whitespace-nowrap">79% sensitive for cancer</td>
                                            </tr>
                                            {/* Row 4 */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Liver Function Tests</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Every 3-5 years for adults</td>
                                                <td className="px-4 py-3">Liver disease, hepatitis</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Detects 85% of liver issues</td>
                                            </tr>
                                            {/* Row 5 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Capsule Endoscopy</td>
                                                <td className="px-4 py-3 whitespace-nowrap">As needed for small bowel issues</td>
                                                <td className="px-4 py-3">Crohn's disease, bleeding</td>
                                                <td className="px-4 py-3 whitespace-nowrap">89% diagnostic yield</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <p className="text-gray-700 mb-6">
                                    *Note: Screening recommendations may vary based on individual risk factors like family history, symptoms, or pre-existing conditions.
                                </p>

                                {/* Screening Highlights */}
                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">1</span>
                                            Colonoscopy - The Gold Standard
                                        </h3>
                                        <p className="text-gray-700">
                                            Considered the most effective screening for colorectal cancer, colonoscopies allow both detection and removal of precancerous polyps during the same procedure. The prep has improved significantly in recent years, with newer low-volume options available.
                                        </p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">2</span>
                                            Non-Invasive Stool Tests
                                        </h3>
                                        <p className="text-gray-700">
                                            Fecal immunochemical tests (FIT) and multi-target stool DNA tests (Cologuard) offer convenient at-home options with good detection rates. While not as comprehensive as colonoscopy, they're valuable for increasing screening participation.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Conditions Detected */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Shield className="w-8 h-8 text-blue-600 mr-2" />
                                    Conditions Detected Through Regular Check-ups
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Regular digestive evaluations can identify numerous conditions at treatable stages. Here's how early detection impacts outcomes:
                                </p>

                                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center font-medium mb-2">
                                        <div>Condition</div>
                                        <div>5-Year Survival Rate</div>
                                        <div>When Detected Early</div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mb-1">
                                        <div className="font-medium">Colorectal Cancer</div>
                                        <div>14%</div>
                                        <div className="text-blue-600 font-semibold">90%</div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mb-1 bg-blue-50 p-1 rounded">
                                        <div className="font-medium">Esophageal Cancer</div>
                                        <div>20%</div>
                                        <div className="text-blue-600 font-semibold">47%</div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mb-1">
                                        <div className="font-medium">Liver Cancer</div>
                                        <div>18%</div>
                                        <div className="text-blue-600 font-semibold">31%</div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                                        <div className="font-medium">Pancreatic Cancer</div>
                                        <div>10%</div>
                                        <div className="text-blue-600 font-semibold">39%</div>
                                    </div>
                                </div>

                                <p className="text-gray-700 mb-6">
                                    Beyond cancer, regular check-ups can detect and monitor:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>Inflammatory Bowel Disease (Crohn's & Ulcerative Colitis)</li>
                                    <li>Celiac Disease and food intolerances</li>
                                    <li>GERD and Barrett's Esophagus</li>
                                    <li>Gallstones and biliary tract disorders</li>
                                    <li>Helicobacter pylori infections (leading cause of ulcers)</li>
                                </ul>
                            </section>

                            {/* Risk Factors */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Who Needs More Frequent Screenings?</h2>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">High-Risk Factors</h3>
                                        <p className="text-gray-700 mb-2">
                                            Certain individuals should begin screenings earlier and have them more frequently:
                                        </p>
                                        <ol className="list-decimal list-inside text-gray-700 space-y-1">
                                            <li>Family history of digestive cancers</li>
                                            <li>Personal history of polyps or inflammatory bowel disease</li>
                                            <li>Chronic GERD or Barrett's esophagus</li>
                                            <li>Obesity or metabolic syndrome</li>
                                            <li>Heavy alcohol use or smoking history</li>
                                        </ol>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Ethnic Considerations</h3>
                                        <p className="text-gray-700 mb-2">
                                            Some ethnic groups have higher risks:
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>African Americans have highest colorectal cancer incidence</li>
                                            <li>Ashkenazi Jews have higher risk of IBD and certain cancers</li>
                                            <li>Asian populations have rising rates of gastric cancer</li>
                                            <li>Hispanics have increasing rates of fatty liver disease</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                                        <AlertCircle className="w-5 h-5 text-yellow-600 mr-2" />
                                        Important:
                                    </h3>
                                    <p className="text-gray-700">
                                        If you experience persistent digestive symptoms like blood in stool, unexplained weight loss, chronic heartburn, or changes in bowel habits, consult a gastroenterologist regardless of your age or screening schedule.
                                    </p>
                                </div>
                            </section>

                            {/* Preparation Guide */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Preparing for Your Digestive Check-up</h2>

                                <div className="space-y-6">
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Before Your Appointment</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">1 Week Before</h4>
                                                <p className="text-gray-700">List all medications/supplements (some may need adjustment)</p>
                                            </div>
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">3 Days Before</h4>
                                                <p className="text-gray-700">Avoid seeds, nuts, corn, and high-fiber foods if preparing for colonoscopy</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">Day Before</h4>
                                                <p className="text-gray-700">Follow clear liquid diet and bowel prep instructions exactly</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">What to Bring</h3>
                                        </div>
                                        <div className="p-4">
                                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                                                <li>Photo ID and insurance card</li>
                                                <li>List of current medications</li>
                                                <li>Family medical history details</li>
                                                <li>List of questions for your doctor</li>
                                                <li>Comfortable clothing for procedures</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Overcoming Fears */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Overcoming Common Fears</h2>

                                <div className="space-y-4">
                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">"The Prep Will Be Terrible"</h3>
                                        <p className="text-gray-700 mb-2">
                                            Modern prep solutions are more tolerable, and splitting the dose makes it easier. New low-volume options are available.
                                        </p>
                                        <p className="text-gray-700">
                                            <span className="font-semibold">Tip:</span> Use a straw to drink prep solution and chase with clear ginger ale.
                                        </p>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">"The Procedure Will Be Painful"</h3>
                                        <p className="text-gray-700 mb-2">
                                            Most patients report no pain during procedures due to sedation. Discomfort is typically minimal.
                                        </p>
                                        <p className="text-gray-700">
                                            <span className="font-semibold">Tip:</span> Discuss sedation options with your doctor beforehand.
                                        </p>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">"I'm Embarrassed"</h3>
                                        <p className="text-gray-700 mb-2">
                                            Gastroenterologists perform these procedures daily and maintain complete professionalism.
                                        </p>
                                        <p className="text-gray-700">
                                            <span className="font-semibold">Tip:</span> Remember that early detection could save your life - that's what matters most.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Regular digestive check-ups are one of the most powerful preventive health measures available. While no one looks forward to screenings, the peace of mind and potential life-saving benefits far outweigh any temporary discomfort.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    New technologies are making screenings easier and more accurate than ever. From improved colonoscopy prep to capsule endoscopies and advanced imaging techniques, gastroenterology has seen remarkable advances in recent years.
                                </p>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "Your digestive health is the foundation of your overall wellbeing. Regular check-ups aren't just about finding problems - they're about maintaining optimal function and quality of life as you age."
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
                                            Dr. Emily Parker, MD
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
                                <h3 className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-2">HEALTH NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get digestive health tips</h4>
                                <p className="text-gray-700 text-sm">
                                    Monthly updates on preventive care, new screening options, and wellness advice.
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

                        {/* Screening Guidelines */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Screening Guidelines by Age</h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center font-bold">20+</div>
                                    <div>
                                        <h4 className="font-medium text-gray-900">Baseline Evaluation</h4>
                                        <p className="text-sm text-gray-600">Discuss family history, lifestyle factors</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center font-bold">45+</div>
                                    <div>
                                        <h4 className="font-medium text-gray-900">Colorectal Screening</h4>
                                        <p className="text-sm text-gray-600">Colonoscopy or stool tests begin</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center font-bold">50+</div>
                                    <div>
                                        <h4 className="font-medium text-gray-900">Pancreatic/Liver</h4>
                                        <p className="text-sm text-gray-600">Consider ultrasound for high-risk</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Symptoms Checklist */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">When to See a Specialist</h3>
                            <div className="space-y-3">
                                <div className="flex items-start">
                                    <Check className="w-4 h-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                                                                          <span>Persistent heartburn (&gt;2x/week)</span>
                                </div>
                                <div className="flex items-start">
                                    <Check className="w-4 h-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                                                                          <span>Unexplained weight loss (&gt;10 lbs)</span>
                                </div>
                                <div className="flex items-start">
                                    <Check className="w-4 h-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                                    <span>Blood in stool or black stools</span>
                                </div>
                                <div className="flex items-start">
                                    <Check className="w-4 h-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                                    <span>Chronic diarrhea or constipation</span>
                                </div>
                                <div className="flex items-start">
                                    <Check className="w-4 h-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                                    <span>Severe abdominal pain</span>
                                </div>
                            </div>
                        </div>

                        {/* Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Further Reading</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-start">
                                        <BookOpen className="w-4 h-4 mt-1 mr-2 flex-shrink-0" />
                                        Understanding Your Colonoscopy Results
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-start">
                                        <BookOpen className="w-4 h-4 mt-1 mr-2 flex-shrink-0" />
                                        The Gut-Brain Connection
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-start">
                                        <BookOpen className="w-4 h-4 mt-1 mr-2 flex-shrink-0" />
                                        Dietary Changes for Digestive Health
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-start">
                                        <BookOpen className="w-4 h-4 mt-1 mr-2 flex-shrink-0" />
                                        New Advances in GI Screening
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