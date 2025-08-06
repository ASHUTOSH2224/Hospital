"use client"

import { useEffect, useState } from "react"
import { User, Calendar, AlertCircle, HeartPulse, Dna, Scale, Clock, ChevronDown } from "lucide-react"

export default function BreastCancerRiskFactors() {
  const [email, setEmail] = useState("")
  const [activeTab, setActiveTab] = useState("Risk Factors")
  const [expandedSections, setExpandedSections] = useState({
    genetic: true,
    hormonal: false,
    lifestyle: false,
    environmental: false
  })

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

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const tabs = ["Risk Factors", "Prevention", "Screening", "Resources"]

  return (
    <div className="min-h-screen bg-white pt-20 md:pt-32">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header Section */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                What Are Your Possible Risk Factors for Breast Cancer?
              </h1>

              {/* Navigation Tabs */}
              <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-200">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                      activeTab === tab
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
                Most women have one or more risk factors for breast cancer. Knowing your risk factors can help you and your healthcare provider make informed decisions about screening and prevention strategies.
              </p>

              {/* Main Image */}
              <div className="mb-8">
                <img
                  src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800&h=400&fit=crop"
                  alt="Woman getting mammogram screening"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <p className="text-sm text-gray-500 mt-2">Regular screenings can help detect breast cancer early when it's most treatable.</p>
              </div>

              {/* Key Facts Box */}
              <div className="bg-pink-50 border-l-4 border-pink-400 p-4 mb-8">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-pink-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Key Facts About Breast Cancer Risk</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>About 1 in 8 women will develop invasive breast cancer</li>
                      <li>Risk increases with age - most cases occur after age 50</li>
                      <li>Having risk factors doesn't mean you'll get breast cancer</li>
                      <li>Many women with breast cancer have no known risk factors</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Understanding Risk Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Breast Cancer Risk Factors</h2>
                <p className="text-gray-700 mb-6">
                  Breast cancer risk factors are anything that increases your chance of developing the disease. Some factors like age and genetics can't be changed, while others like physical activity and alcohol use can be modified. Risk factors don't tell the whole story - many women with several risk factors never develop breast cancer, while others with no known risk factors do.
                </p>

                {/* Risk Categories Accordion */}
                <div className="space-y-4 mb-8">
                  {/* Genetic Factors */}
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleSection('genetic')}
                      className="w-full flex justify-between items-center p-4 bg-pink-50 hover:bg-pink-100 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <Dna className="w-5 h-5 text-pink-600" />
                        <h3 className="text-xl font-bold text-gray-900">Genetic & Family History Factors</h3>
                      </div>
                      <ChevronDown className={`w-5 h-5 text-gray-600 transition-transform ${expandedSections.genetic ? 'rotate-180' : ''}`} />
                    </button>
                    {expandedSections.genetic && (
                      <div className="p-4 bg-white">
                        <p className="text-gray-700 mb-4">
                          Inherited genetic mutations account for about 5-10% of all breast cancers. The most well-known are BRCA1 and BRCA2 gene mutations, which significantly increase risk.
                        </p>
                        <ul className="list-disc list-inside text-gray-700 mb-4 ml-4 space-y-2">
                          <li>
                            <strong>BRCA1/BRCA2 mutations:</strong> Women with these mutations have up to a 72% lifetime risk of breast cancer
                          </li>
                          <li>
                            <strong>Family history:</strong> Having a first-degree relative (mother, sister, daughter) with breast cancer nearly doubles risk
                          </li>
                          <li>
                            <strong>Multiple affected relatives:</strong> Risk increases with more relatives diagnosed, especially if diagnosed before age 50
                          </li>
                          <li>
                            <strong>Inherited syndromes:</strong> Other genetic conditions like Li-Fraumeni syndrome, Cowden syndrome, and Lynch syndrome increase risk
                          </li>
                          <li>
                            <strong>Dense breast tissue:</strong> Women with dense breasts have 1.5-2 times higher risk than women with average density
                          </li>
                        </ul>
                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                          <h4 className="font-bold text-gray-900 mb-2">Who Should Consider Genetic Testing?</h4>
                          <p className="text-gray-700 text-sm">
                            Genetic counseling may be recommended if you have: a personal history of breast cancer before 45, triple-negative breast cancer, male breast cancer in your family, multiple relatives with breast/ovarian cancer, or known BRCA mutation in your family.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Hormonal Factors */}
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleSection('hormonal')}
                      className="w-full flex justify-between items-center p-4 bg-pink-50 hover:bg-pink-100 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <Scale className="w-5 h-5 text-pink-600" />
                        <h3 className="text-xl font-bold text-gray-900">Hormonal & Reproductive Factors</h3>
                      </div>
                      <ChevronDown className={`w-5 h-5 text-gray-600 transition-transform ${expandedSections.hormonal ? 'rotate-180' : ''}`} />
                    </button>
                    {expandedSections.hormonal && (
                      <div className="p-4 bg-white">
                        <p className="text-gray-700 mb-4">
                          Estrogen exposure over time influences breast cancer risk. Factors that increase lifetime estrogen exposure generally increase risk.
                        </p>
                        <div className="overflow-x-auto mb-4">
                          <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                              <tr>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Factor</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Effect on Risk</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Notes</th>
                              </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                              <tr>
                                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">Early menstruation (before 12)</td>
                                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">Increased</td>
                                <td className="px-4 py-3 text-sm text-gray-700">Longer lifetime estrogen exposure</td>
                              </tr>
                              <tr className="bg-gray-50">
                                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">Late menopause (after 55)</td>
                                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">Increased</td>
                                <td className="px-4 py-3 text-sm text-gray-700">More menstrual cycles overall</td>
                              </tr>
                              <tr>
                                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">First pregnancy after 30</td>
                                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">Increased</td>
                                <td className="px-4 py-3 text-sm text-gray-700">Pregnancy causes protective changes in breast cells</td>
                              </tr>
                              <tr className="bg-gray-50">
                                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">Never pregnant</td>
                                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">Increased</td>
                                <td className="px-4 py-3 text-sm text-gray-700">No pregnancy-related protection</td>
                              </tr>
                              <tr>
                                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">Hormone therapy (estrogen + progestin)</td>
                                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">Increased</td>
                                <td className="px-4 py-3 text-sm text-gray-700">Risk increases with longer use</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <p className="text-gray-700">
                          <strong>Note:</strong> Breastfeeding for 1+ years modestly reduces risk, likely due to reduced estrogen exposure during this time.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Lifestyle Factors */}
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleSection('lifestyle')}
                      className="w-full flex justify-between items-center p-4 bg-pink-50 hover:bg-pink-100 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <HeartPulse className="w-5 h-5 text-pink-600" />
                        <h3 className="text-xl font-bold text-gray-900">Lifestyle & Environmental Factors</h3>
                      </div>
                      <ChevronDown className={`w-5 h-5 text-gray-600 transition-transform ${expandedSections.lifestyle ? 'rotate-180' : ''}`} />
                    </button>
                    {expandedSections.lifestyle && (
                      <div className="p-4 bg-white">
                        <h4 className="font-bold text-gray-900 mb-3">Modifiable Risk Factors</h4>
                        <div className="grid md:grid-cols-2 gap-4 mb-6">
                          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                            <h5 className="font-bold text-gray-900 mb-2">Alcohol Consumption</h5>
                            <p className="text-gray-700 text-sm">
                              Women who have 2-3 alcoholic drinks per day have about 20% higher risk than non-drinkers. Alcohol increases estrogen levels and damages DNA.
                            </p>
                          </div>
                          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                            <h5 className="font-bold text-gray-900 mb-2">Physical Inactivity</h5>
                            <p className="text-gray-700 text-sm">
                              Regular exercise (4-7 hours per week of moderate activity) may lower risk by 10-20%. Activity helps regulate hormones and immune function.
                            </p>
                          </div>
                          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                            <h5 className="font-bold text-gray-900 mb-2">Postmenopausal Weight</h5>
                            <p className="text-gray-700 text-sm">
                              Women who are overweight or obese after menopause have 20-60% higher risk. Fat tissue produces estrogen after menopause.
                            </p>
                          </div>
                          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                            <h5 className="font-bold text-gray-900 mb-2">Radiation Exposure</h5>
                            <p className="text-gray-700 text-sm">
                              Radiation to chest area (especially during puberty) increases risk. This includes treatment for Hodgkin's lymphoma.
                            </p>
                          </div>
                        </div>

                        <h4 className="font-bold text-gray-900 mb-3">Controversial or Uncertain Factors</h4>
                        <ul className="list-disc list-inside text-gray-700 mb-4 ml-4 space-y-2">
                          <li>
                            <strong>Birth control pills:</strong> Slight increase in current users that disappears after stopping
                          </li>
                          <li>
                            <strong>Night shift work:</strong> Possible link due to melatonin disruption (WHO classifies as probable carcinogen)
                          </li>
                          <li>
                            <strong>Diet:</strong> No clear evidence on specific foods, but Mediterranean diet may lower risk
                          </li>
                          <li>
                            <strong>Stress:</strong> No conclusive evidence that stress directly increases breast cancer risk
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* Risk Assessment Section */}
                <div className="bg-blue-50 p-6 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Assessing Your Personal Risk</h3>
                  <p className="text-gray-700 mb-4">
                    Several tools can help estimate your breast cancer risk. The most commonly used is the <strong>Gail Model</strong>, which considers:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-4 ml-4 space-y-1">
                    <li>Current age</li>
                    <li>Age at first period</li>
                    <li>Age at first live birth</li>
                    <li>Number of first-degree relatives with breast cancer</li>
                    <li>Number of previous breast biopsies</li>
                    <li>Race/ethnicity</li>
                  </ul>
                  <p className="text-gray-700 mb-4">
                    Women with a 5-year risk ≥1.67% are generally considered at increased risk. However, these models have limitations - they don't account for all risk factors and may underestimate risk for women with strong family histories.
                  </p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                    Calculate Your Risk with the Gail Model
                  </button>
                </div>

                {/* Risk Reduction Strategies */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Reducing Your Risk</h3>
                  <p className="text-gray-700 mb-4">
                    While you can't change some risk factors, these evidence-based strategies may help lower your risk:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="border border-gray-200 rounded-lg p-5">
                      <h4 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
                        <HeartPulse className="w-5 h-5 text-pink-600" />
                        Lifestyle Changes
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="bg-pink-100 text-pink-800 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">1</span>
                          <span>Limit alcohol to ≤1 drink/day</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="bg-pink-100 text-pink-800 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">2</span>
                          <span>Maintain healthy weight (BMI 18.5-24.9)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="bg-pink-100 text-pink-800 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">3</span>
                          <span>Exercise ≥150 minutes/week</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="bg-pink-100 text-pink-800 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">4</span>
                          <span>Breastfeed if possible</span>
                        </li>
                      </ul>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-5">
                      <h4 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
                        <Dna className="w-5 h-5 text-pink-600" />
                        Medical Options
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="bg-pink-100 text-pink-800 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">1</span>
                          <span>Discuss risk-reducing medications (tamoxifen, raloxifene) if high risk</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="bg-pink-100 text-pink-800 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">2</span>
                          <span>Consider genetic testing if strong family history</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="bg-pink-100 text-pink-800 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">3</span>
                          <span>Follow recommended screening guidelines</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="bg-pink-100 text-pink-800 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">4</span>
                          <span>Limit postmenopausal hormone use</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Screening Recommendations */}
                <div className="bg-green-50 p-6 rounded-lg mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Screening Recommendations</h3>
                  <p className="text-gray-700 mb-4">
                    Early detection through screening can find breast cancer when it's most treatable. Guidelines vary by organization:
                  </p>
                  
                  <div className="overflow-x-auto mb-4">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-green-100">
                        <tr>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Organization</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Average Risk Women</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">High Risk Women</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">American Cancer Society</td>
                          <td className="px-4 py-3 text-sm text-gray-700">
                            <p>• 40-44: Option to start annual mammograms</p>
                            <p>• 45-54: Annual mammograms</p>
                            <p>• 55+: Mammograms every 2 years or continue annually</p>
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-700">
                            <p>• Annual MRI + mammogram starting at age 30</p>
                            <p>• Consider risk-reducing medications/surgery</p>
                          </td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">U.S. Preventive Services Task Force</td>
                          <td className="px-4 py-3 text-sm text-gray-700">
                            <p>• 50-74: Mammograms every 2 years</p>
                            <p>• 40-49: Individual decision based on risk/benefit</p>
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-700">
                            <p>• No specific recommendation - consult specialist</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-gray-700 text-sm">
                    <strong>Note:</strong> High risk includes BRCA mutation carriers, those with ≥20% lifetime risk, or history of chest radiation. Discuss with your doctor what's right for you.
                  </p>
                </div>
              </section>

              {/* Conclusion */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Takeaways</h2>
                <p className="text-gray-700 mb-4">
                  Understanding your personal risk factors for breast cancer empowers you to make informed decisions about your health. While some factors like genetics and age can't be changed, lifestyle modifications and appropriate screening can help reduce your risk and detect cancer early when treatment is most effective.
                </p>
                <div className="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-400">
                  <h3 className="font-bold text-gray-900 mb-2">When to See Your Doctor</h3>
                  <p className="text-gray-700 mb-2">
                    Schedule a consultation if you notice any of these potential warning signs:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                    <li>New lump in breast or underarm</li>
                    <li>Changes in breast size, shape, or appearance</li>
                    <li>Nipple discharge (especially bloody)</li>
                    <li>Skin changes (redness, dimpling, puckering)</li>
                    <li>Nipple inversion or pain</li>
                  </ul>
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
                        Dr. Sarah Johnson, MD, Oncologist
                      </a>
                    </p>
                    <p className="text-sm text-gray-600 mb-1">
                      — Written by{" "}
                      <a href="#" className="text-blue-600 hover:underline font-medium">
                        Emily Chen
                      </a>
                    </p>
                    <p className="text-sm text-gray-600 flex items-center gap-1">
                      — <Calendar className="w-3 h-3" />
                      <a href="#" className="text-blue-600 hover:underline">
                        Updated on March 15, 2025
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Risk Factors Summary */}
              <div className="bg-pink-50 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-pink-600" />
                  Major Risk Factors Summary
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="bg-pink-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">1</span>
                    <span><strong>Being female:</strong> Women are 100 times more likely than men to develop breast cancer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-pink-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">2</span>
                    <span><strong>Aging:</strong> Risk increases with age - median age at diagnosis is 62</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-pink-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">3</span>
                    <span><strong>Family history:</strong> Especially mother, sister or daughter with breast cancer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-pink-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">4</span>
                    <span><strong>Genetic mutations:</strong> BRCA1, BRCA2, PALB2, etc.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-pink-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">5</span>
                    <span><strong>Dense breast tissue:</strong> Makes mammograms harder to read and increases risk</span>
                  </li>
                </ul>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-teal-50 rounded-lg p-6 mb-8">
                <div className="mb-4">
                  <h3 className="text-sm font-bold text-teal-800 uppercase tracking-wide mb-2">BREAST HEALTH NEWSLETTER</h3>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Stay informed about breast cancer prevention</h4>
                  <p className="text-gray-700 text-sm">
                    Get monthly updates on screening guidelines, risk reduction strategies, and the latest research.
                  </p>
                </div>

                <form onSubmit={handleEmailSubmit} className="space-y-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200"
                  >
                    SUBSCRIBE
                  </button>
                </form>

                <p className="text-xs text-gray-600 mt-3">
                  Your{" "}
                  <a href="#" className="text-teal-600 hover:underline">
                    privacy
                  </a>{" "}
                  is important to us
                </p>
              </div>

              {/* Resources */}
              <div className="bg-blue-50 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <HeartPulse className="w-5 h-5 text-blue-600" />
                  Helpful Resources
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-blue-600 hover:underline flex items-start gap-2">
                      <span className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">1</span>
                      <span>National Breast Cancer Foundation</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:underline flex items-start gap-2">
                      <span className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">2</span>
                      <span>Susan G. Komen Breast Cancer Risk Tool</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:underline flex items-start gap-2">
                      <span className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">3</span>
                      <span>American Cancer Society Screening Guidelines</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:underline flex items-start gap-2">
                      <span className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">4</span>
                      <span>National Cancer Institute Risk Assessment</span>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Advertisement Placeholder */}
              <div className="bg-gray-100 rounded-lg p-6">
                <p className="text-center text-gray-500 text-sm mb-4">ADVERTISEMENT</p>
                <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
                  <h4 className="font-bold mb-2">Breast Cancer Awareness</h4>
                  <p className="text-sm mb-4">Support research and education initiatives</p>
                  <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded text-sm font-medium transition-colors">
                    LEARN MORE
                  </button>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}