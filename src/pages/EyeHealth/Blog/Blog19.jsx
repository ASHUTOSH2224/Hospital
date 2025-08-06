"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, Eye, Dna, ClipboardList, Stethoscope, BookOpen, ShieldAlert, HeartPulse, Bell } from "lucide-react"

export default function GeneticEyeConditionsGuide() {
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

    const tabs = ["Overview", "Conditions", "Testing", "Prevention"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Family History and Genetic Testing for Eye Conditions
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
                                Understanding hereditary eye disorders, genetic counseling, and testing options for those with family history of vision problems. Learn how your genes influence eye health and what proactive steps you can take to preserve your vision.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80"
                                    alt="Eye examination with modern equipment"
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
                                    <li>Over 350 eye conditions have genetic components</li>
                                    <li>Genetic testing can identify risks decades before symptoms appear</li>
                                    <li>Early detection through genetic screening can prevent up to 60% of hereditary vision loss</li>
                                    <li>New gene therapies are available for previously untreatable conditions</li>
                                    <li>Family history is the strongest predictor of genetic eye disease risk</li>
                                </ul>
                            </div>

                            {/* Why Genetic Eye Conditions Matter */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Eye className="w-8 h-8 text-blue-600 mr-2" />
                                    The Impact of Genetics on Eye Health
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Genetic factors play a significant role in many eye conditions, from common refractive errors to rare degenerative diseases. According to the <a href="#" className="text-blue-600 hover:underline">American Academy of Ophthalmology</a>, approximately 60% of childhood blindness results from genetic factors, while in adults, genetics contribute to:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>80% of retinitis pigmentosa cases</li>
                                    <li>50-60% of glaucoma cases</li>
                                    <li>40-50% of age-related macular degeneration (AMD) cases</li>
                                    <li>Nearly 100% of certain rare conditions like Leber congenital amaurosis</li>
                                </ul>

                                <div className="bg-purple-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Genetic Inheritance Patterns</h3>
                                    <p className="text-gray-700 mb-2">
                                        Eye conditions can be inherited through different patterns:
                                    </p>
                                    <ul className="list-disc list-inside text-gray-700 ml-4">
                                        <li><strong>Autosomal dominant</strong>: 50% chance of passing to offspring (e.g., some forms of glaucoma)</li>
                                        <li><strong>Autosomal recessive</strong>: 25% chance when both parents are carriers (e.g., retinitis pigmentosa)</li>
                                        <li><strong>X-linked</strong>: Primarily affects males (e.g., color blindness)</li>
                                        <li><strong>Mitochondrial</strong>: Inherited only from mother (e.g., Leber hereditary optic neuropathy)</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Common Hereditary Eye Conditions */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Stethoscope className="w-8 h-8 text-blue-600 mr-2" />
                                    Common Hereditary Eye Conditions
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    The following table outlines major genetic eye disorders, their inheritance patterns, typical onset age, and available treatments:
                                </p>

                                {/* Conditions Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Condition</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Inheritance</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Onset Age</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Key Symptoms</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Treatment Options</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            {/* Row 1 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Glaucoma (Primary Open Angle)</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Autosomal dominant</td>
                                                <td className="px-4 py-3 whitespace-nowrap">40+ years</td>
                                                <td className="px-4 py-3">Peripheral vision loss, optic nerve damage</td>
                                                <td className="px-4 py-3">Eye drops, laser therapy, surgery</td>
                                            </tr>
                                            {/* Row 2 */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Age-related Macular Degeneration</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Complex (multiple genes)</td>
                                                <td className="px-4 py-3 whitespace-nowrap">50+ years</td>
                                                <td className="px-4 py-3">Central vision loss, distorted vision</td>
                                                <td className="px-4 py-3">Anti-VEGF injections, supplements</td>
                                            </tr>
                                            {/* Row 3 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Retinitis Pigmentosa</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Multiple patterns</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Childhood to 30s</td>
                                                <td className="px-4 py-3">Night blindness, tunnel vision</td>
                                                <td className="px-4 py-3">Vitamin A, gene therapy (limited)</td>
                                            </tr>
                                            {/* Row 4 */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Leber Congenital Amaurosis</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Autosomal recessive</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Birth to 1 year</td>
                                                <td className="px-4 py-3">Severe vision impairment, nystagmus</td>
                                                <td className="px-4 py-3">FDA-approved gene therapy (Luxturna)</td>
                                            </tr>
                                            {/* Row 5 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Fuchs' Endothelial Dystrophy</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Autosomal dominant</td>
                                                <td className="px-4 py-3 whitespace-nowrap">30-50 years</td>
                                                <td className="px-4 py-3">Cloudy vision, glare sensitivity</td>
                                                <td className="px-4 py-3">Corneal transplant</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <p className="text-gray-700 mb-6">
                                    *Note: Many conditions have multiple genetic forms with varying inheritance patterns. Genetic testing can identify specific mutations.
                                </p>

                                {/* Top Conditions Highlights */}
                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">1</span>
                                            Glaucoma - The Silent Thief of Sight
                                        </h3>
                                        <p className="text-gray-700">
                                            With over 120 known genetic risk factors, glaucoma often shows no symptoms until significant vision is lost. First-degree relatives have a 10-fold increased risk. Early detection through genetic screening and regular eye pressure checks can prevent 95% of vision loss.
                                        </p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">2</span>
                                            Age-related Macular Degeneration (AMD)
                                        </h3>
                                        <p className="text-gray-700">
                                            The CFH and ARMS2 genes account for 50-60% of AMD risk. Those with both risk alleles have a 50-fold increased risk. Genetic testing can guide supplement recommendations (AREDS2 formula) and monitoring frequency.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Genetic Testing Options */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Dna className="w-8 h-8 text-blue-600 mr-2" />
                                    Genetic Testing Options for Eye Conditions
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Modern genetic testing can identify risks years before symptoms appear. The table below compares available testing approaches:
                                </p>

                                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                                    <div className="grid md:grid-cols-5 gap-4 text-center font-medium mb-2">
                                        <div>Test Type</div>
                                        <div>Genes Covered</div>
                                        <div>Cost Range</div>
                                        <div>Turnaround Time</div>
                                        <div>Best For</div>
                                    </div>
                                    <div className="grid md:grid-cols-5 gap-4 text-center mb-1">
                                        <div className="font-medium">Single Gene Test</div>
                                        <div>1 gene</div>
                                        <div>$300-$800</div>
                                        <div>2-4 weeks</div>
                                        <div>Confirmed family mutation</div>
                                    </div>
                                    <div className="grid md:grid-cols-5 gap-4 text-center mb-1 bg-blue-50 p-1 rounded">
                                        <div className="font-medium">Panel Test</div>
                                        <div>50-300 genes</div>
                                        <div>$1,000-$2,500</div>
                                        <div>3-6 weeks</div>
                                        <div>Undiagnosed conditions</div>
                                    </div>
                                    <div className="grid md:grid-cols-5 gap-4 text-center mb-1">
                                        <div className="font-medium">Whole Exome</div>
                                        <div>~20,000 genes</div>
                                        <div>$4,000-$6,000</div>
                                        <div>8-12 weeks</div>
                                        <div>Complex cases</div>
                                    </div>
                                    <div className="grid md:grid-cols-5 gap-4 text-center">
                                        <div className="font-medium">Direct-to-Consumer</div>
                                        <div>Limited markers</div>
                                        <div>$100-$300</div>
                                        <div>2-4 weeks</div>
                                        <div>Basic risk assessment</div>
                                    </div>
                                </div>

                                <p className="text-gray-700 mb-6">
                                    Insurance coverage varies significantly. Many insurers cover testing when medically necessary, especially for:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>Diagnostic confirmation in symptomatic patients</li>
                                    <li>Reproductive planning for high-risk families</li>
                                    <li>Guiding treatment decisions (e.g., gene therapy eligibility)</li>
                                    <li>Differentiating between similar conditions</li>
                                </ul>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Important Consideration:</h3>
                                    <p className="text-gray-700">
                                        Genetic testing results can have psychological, familial, and insurance implications. The American Society of Human Genetics recommends genetic counseling both before and after testing.
                                    </p>
                                </div>
                            </section>

                            {/* The Genetic Counseling Process */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">The Genetic Counseling Process</h2>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">What to Expect</h3>
                                        <ol className="list-decimal list-inside text-gray-700 space-y-2">
                                            <li><strong>Family history review</strong>: Detailed 3-generation pedigree</li>
                                            <li><strong>Risk assessment</strong>: Calculating personal and familial risks</li>
                                            <li><strong>Education</strong>: Explanation of inheritance patterns</li>
                                            <li><strong>Testing options</strong>: Discussing benefits/limitations</li>
                                            <li><strong>Result interpretation</strong>: Putting findings in context</li>
                                            <li><strong>Management plan</strong>: Surveillance and prevention strategies</li>
                                        </ol>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Finding a Specialist</h3>
                                        <p className="text-gray-700 mb-2">
                                            Look for counselors certified by the American Board of Genetic Counseling (ABGC) with experience in ocular genetics. Major eye institutes often have dedicated genetic counseling teams.
                                        </p>
                                        <p className="text-gray-700">
                                            The National Society of Genetic Counselors (<a href="#" className="text-blue-600 hover:underline">NSGC.org</a>) maintains a searchable directory.
                                        </p>
                                    </div>
                                </div>

                                {/* Case Study */}
                                <div className="border border-gray-200 rounded-lg overflow-hidden mb-6">
                                    <div className="bg-blue-600 px-4 py-2">
                                        <h3 className="font-bold text-white">Case Study: Early Intervention</h3>
                                    </div>
                                    <div className="p-4">
                                        <p className="text-gray-700 mb-3">
                                            A 28-year-old woman with a family history of early-onset glaucoma underwent genetic testing revealing a MYOC gene mutation. Despite normal eye exams, she began:
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 ml-4">
                                            <li>Annual comprehensive eye exams with optic nerve imaging</li>
                                            <li>Intraocular pressure monitoring every 6 months</li>
                                            <li>Prophylactic treatment when subtle changes first appeared at age 32</li>
                                        </ul>
                                        <p className="text-gray-700 mt-3">
                                            Now 45, she maintains 20/20 vision while her untreated relatives experienced significant vision loss by age 40.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Prevention and Monitoring Strategies */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Prevention and Monitoring Strategies</h2>

                                <div className="space-y-6">
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Based on Genetic Risk Level</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">High Risk (Known mutation)</h4>
                                                <ul className="list-disc list-inside text-gray-700 ml-4">
                                                    <li>Specialized exams every 6-12 months</li>
                                                    <li>Advanced imaging (OCT, visual fields)</li>
                                                    <li>Consider preventive therapies</li>
                                                    <li>Family testing recommended</li>
                                                </ul>
                                            </div>
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Moderate Risk (Family history)</h4>
                                                <ul className="list-disc list-inside text-gray-700 ml-4">
                                                    <li>Comprehensive annual exams</li>
                                                    <li>Baseline imaging by age 40</li>
                                                    <li>Lifestyle modifications</li>
                                                    <li>Consider genetic testing</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">General Population</h4>
                                                <ul className="list-disc list-inside text-gray-700 ml-4">
                                                    <li>Regular eye exams based on age</li>
                                                    <li>Be aware of family history</li>
                                                    <li>Protective lifestyle factors</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Lifestyle Factors */}
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Protective Lifestyle Factors</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div>
                                                    <h4 className="font-medium text-gray-900 mb-2">For Macular Degeneration</h4>
                                                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                                                        <li>AREDS2 supplements (if appropriate)</li>
                                                        <li>Leafy greens and colorful vegetables</li>
                                                        <li>UV protection with sunglasses</li>
                                                        <li>Smoking cessation</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4 className="font-medium text-gray-900 mb-2">For Glaucoma</h4>
                                                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                                                        <li>Regular aerobic exercise</li>
                                                        <li>Maintain healthy blood pressure</li>
                                                        <li>Avoid head-down positions</li>
                                                        <li>Manage caffeine intake</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Emerging Therapies */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Emerging Genetic Therapies</h2>

                                <p className="text-gray-700 mb-4">
                                    The field of ocular gene therapy has advanced dramatically in recent years. Here are some promising developments:
                                </p>

                                <div className="space-y-4">
                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">FDA-Approved Therapies</h3>
                                        <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                                            <li><strong>Luxturna (voretigene neparvovec)</strong>: For RPE65-mediated retinal dystrophy (2017)</li>
                                            <li><strong>Spark Therapeutics</strong>: Shows 90% efficacy in maintaining vision</li>
                                            <li><strong>One-time treatment</strong>: Delivered via subretinal injection</li>
                                        </ul>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">Clinical Trial Phase Therapies</h3>
                                        <div className="overflow-x-auto">
                                            <table className="min-w-full bg-white">
                                                <thead>
                                                    <tr className="border-b border-gray-200">
                                                        <th className="px-4 py-2 text-left">Condition</th>
                                                        <th className="px-4 py-2 text-left">Company</th>
                                                        <th className="px-4 py-2 text-left">Phase</th>
                                                        <th className="px-4 py-2 text-left">Mechanism</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="border-b border-gray-200">
                                                        <td className="px-4 py-2">X-linked retinitis pigmentosa</td>
                                                        <td className="px-4 py-2">MeiraGTx</td>
                                                        <td className="px-4 py-2">Phase 3</td>
                                                        <td className="px-4 py-2">RPGR gene replacement</td>
                                                    </tr>
                                                    <tr className="border-b border-gray-200">
                                                        <td className="px-4 py-2">Stargardt disease</td>
                                                        <td className="px-4 py-2">Ocugen</td>
                                                        <td className="px-4 py-2">Phase 1/2</td>
                                                        <td className="px-4 py-2">ABCA4 gene therapy</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-4 py-2">Leber hereditary optic neuropathy</td>
                                                        <td className="px-4 py-2">GenSight</td>
                                                        <td className="px-4 py-2">Phase 3</td>
                                                        <td className="px-4 py-2">ND4 gene transfer</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Ethical Considerations */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Ethical Considerations</h2>

                                <div className="space-y-4">
                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">Privacy Concerns</h3>
                                        <p className="text-gray-700 mb-2">
                                            Genetic information is particularly sensitive. The Genetic Information Nondiscrimination Act (GINA) of 2008 provides some protections:
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 ml-4">
                                            <li>Prohibits health insurance discrimination based on genetic information</li>
                                            <li>Limits employers' use of genetic data</li>
                                            <li>Does not cover life/disability/long-term care insurance</li>
                                        </ul>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">Family Implications</h3>
                                        <p className="text-gray-700">
                                            A positive test result may have implications for relatives who may not want to know their genetic status. Counselors help navigate these complex family dynamics.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Understanding your genetic risk for eye conditions empowers you to take proactive steps to preserve vision. While genetics load the gun, environment and lifestyle often pull the trigger. Regular monitoring and early intervention can dramatically alter disease trajectories.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    If you have a family history of eye disease, consider consulting a genetic counselor specializing in ophthalmology. The field is advancing rapidly—what was untreatable a decade ago may now have effective interventions.
                                </p>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "Genetic testing for eye conditions isn't about predicting an inevitable future—it's about illuminating paths to prevention and early intervention that can preserve vision and quality of life."
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
                                            Dr. Emily Chen, MD, PhD
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
                                <h3 className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-2">EYE HEALTH NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Stay informed about genetic advances</h4>
                                <p className="text-gray-700 text-sm">
                                    Monthly updates on new research, clinical trials, and prevention strategies.
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

                        {/* Risk Assessment */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                <ShieldAlert className="w-5 h-5 text-blue-600 mr-2" />
                                Genetic Risk Factors
                            </h3>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <span className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">1</span>
                                    <span>First-degree relative with early-onset eye disease (before age 50)</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">2</span>
                                    <span>Multiple affected family members</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">3</span>
                                    <span>Ethnicity (some mutations are more common in specific populations)</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">4</span>
                                    <span>Consanguinity (parents are blood relatives)</span>
                                </li>
                            </ul>
                        </div>

                        {/* Resources */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                <BookOpen className="w-5 h-5 text-blue-600 mr-2" />
                                Helpful Resources
                            </h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">National Eye Institute Genetic Studies</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Foundation Fighting Blindness</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Glaucoma Research Foundation</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Macular Degeneration Partnership</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Genetic Testing Registry (NIH)</a>
                                </li>
                            </ul>
                        </div>

                        {/* When to Seek Help */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                <Bell className="w-5 h-5 text-blue-600 mr-2" />
                                When to Seek Genetic Counseling
                            </h3>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start">
                                    <span className="text-blue-600 mr-2">•</span>
                                    <span>Unexplained vision loss in multiple family members</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-600 mr-2">•</span>
                                    <span>Diagnosis of a genetic eye condition</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-600 mr-2">•</span>
                                    <span>Planning pregnancy with family history</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-600 mr-2">•</span>
                                    <span>Considering genetic testing</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-600 mr-2">•</span>
                                    <span>Need help interpreting test results</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}