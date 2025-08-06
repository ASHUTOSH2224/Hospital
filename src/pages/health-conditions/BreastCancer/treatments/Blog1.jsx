"use client"

import { useEffect, useState } from "react"
import { User, Calendar, ArrowRight, Check, HeartPulse } from "lucide-react"

export default function BreastCancerTreatmentsGuide() {
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
  
  const tabs = ["Overview", "Chemotherapy", "Radiation", "Surgery", "Other", "Support"]

  return (
    <div className="min-h-screen bg-white pt-20 md:pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header Section */}
            <div className="mb-8">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                Your Guide to Treatments for Breast Cancer: Chemo, Radiation & More
              </h1>

              {/* Navigation Tabs */}
              <div className="flex overflow-x-auto pb-2 mb-6 -mx-4 sm:mx-0 px-4 sm:px-0 border-b border-gray-200 hide-scrollbar">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 py-2 text-sm font-medium whitespace-nowrap border-b-2 transition-colors flex-shrink-0 ${
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
              <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
                There are several breast cancer treatment options. Often, people receive a combination of treatments including surgery, chemotherapy, radiation, hormone therapy, and targeted therapies.
              </p>

              {/* Main Image */}
              <div className="mb-6 sm:mb-8">
                <div className="aspect-w-16 aspect-h-9 sm:aspect-h-7 rounded-lg overflow-hidden bg-gray-100">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 sm:h-80" />
                </div>
              </div>

              {/* Quick Facts Box */}
              <div className="bg-pink-50 border-l-4 border-pink-400 p-4 mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl font-bold text-pink-800 mb-3">Key Facts About Breast Cancer Treatment</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-pink-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Treatment depends on cancer type, stage, and individual factors</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-pink-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Most patients receive a combination of treatments</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-pink-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">New targeted therapies are improving outcomes</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-pink-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Side effects can be managed with proper care</span>
                  </li>
                </ul>
              </div>

              {/* Overview Section */}
              <section className="mb-10 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Understanding Breast Cancer Treatment Options</h2>
                <p className="text-gray-700 mb-4">
                  Breast cancer treatment has advanced significantly in recent years, offering patients more options than ever before. The approach your medical team recommends will depend on several factors:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 sm:mb-6 ml-4 space-y-2">
                  <li>The type of breast cancer (ductal, lobular, inflammatory, etc.)</li>
                  <li>The stage of cancer (size and extent of spread)</li>
                  <li>Hormone receptor status (ER/PR positive or negative)</li>
                  <li>HER2 status (positive or negative)</li>
                  <li>Your overall health and personal preferences</li>
                </ul>
                
                <div className="bg-blue-50 p-4 rounded-lg mb-4 sm:mb-6">
                  <h3 className="text-lg sm:text-xl font-bold text-blue-800 mb-3">Treatment Decision Timeline</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white text-sm">
                      <thead className="bg-blue-100">
                        <tr>
                          <th className="py-2 px-3 sm:px-4 border-b border-blue-200 text-left">Timeframe</th>
                          <th className="py-2 px-3 sm:px-4 border-b border-blue-200 text-left">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="py-2 px-3 sm:px-4 border-b border-blue-100">Diagnosis</td>
                          <td className="py-2 px-3 sm:px-4 border-b border-blue-100">Biopsy confirms cancer, determines type</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-3 sm:px-4 border-b border-blue-100">1-2 weeks after</td>
                          <td className="py-2 px-3 sm:px-4 border-b border-blue-100">Additional tests (imaging, genetic tests)</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-3 sm:px-4 border-b border-blue-100">2-3 weeks after</td>
                          <td className="py-2 px-3 sm:px-4 border-b border-blue-100">Meet with surgical oncologist</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-3 sm:px-4 border-b border-blue-100">3-4 weeks after</td>
                          <td className="py-2 px-3 sm:px-4 border-b border-blue-100">Treatment plan finalized</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-3 sm:px-4 border-b border-blue-100">4-6 weeks after</td>
                          <td className="py-2 px-3 sm:px-4 border-b border-blue-100">Treatment typically begins</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* Chemotherapy Section */}
              <section className="mb-10 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Chemotherapy for Breast Cancer</h2>
                <p className="text-gray-700 mb-4">
                  Chemotherapy uses powerful drugs to kill cancer cells or stop them from growing. It can be given before surgery (neoadjuvant) to shrink tumors or after surgery (adjuvant) to kill remaining cancer cells.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
                  <div className="bg-pink-50 p-4 rounded-lg">
                    <h3 className="text-lg sm:text-xl font-bold text-pink-800 mb-3">Common Chemo Drugs</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <ArrowRight className="w-4 h-4 text-pink-600 mt-0.5 mr-2 flex-shrink-0" />
                        <span>Anthracyclines (Doxorubicin, Epirubicin)</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="w-4 h-4 text-pink-600 mt-0.5 mr-2 flex-shrink-0" />
                        <span>Taxanes (Paclitaxel, Docetaxel)</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="w-4 h-4 text-pink-600 mt-0.5 mr-2 flex-shrink-0" />
                        <span>Cyclophosphamide</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="w-4 h-4 text-pink-600 mt-0.5 mr-2 flex-shrink-0" />
                        <span>Carboplatin</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="w-4 h-4 text-pink-600 mt-0.5 mr-2 flex-shrink-0" />
                        <span>Capecitabine</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="text-lg sm:text-xl font-bold text-blue-800 mb-3">Managing Side Effects</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <HeartPulse className="w-4 h-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                        <span>Nausea/vomiting: Anti-nausea medications</span>
                      </li>
                      <li className="flex items-start">
                        <HeartPulse className="w-4 h-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                        <span>Fatigue: Light exercise, energy conservation</span>
                      </li>
                      <li className="flex items-start">
                        <HeartPulse className="w-4 h-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                        <span>Hair loss: Cooling caps, wigs</span>
                      </li>
                      <li className="flex items-start">
                        <HeartPulse className="w-4 h-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                        <span>Infection risk: Hand hygiene, avoid crowds</span>
                      </li>
                      <li className="flex items-start">
                        <HeartPulse className="w-4 h-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                        <span>Neuropathy: Physical therapy, medications</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">Chemotherapy Treatment Cycles</h3>
                  <p className="text-gray-700 mb-4">
                    Chemo is typically given in cycles, with treatment periods followed by recovery periods. A common regimen might be:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-4 ml-4 space-y-2">
                    <li>4-6 cycles total (each cycle lasts 2-3 weeks)</li>
                    <li>Treatment days 1-3 (varies by regimen)</li>
                    <li>Recovery period of 18-21 days between cycles</li>
                    <li>Total treatment duration of 3-6 months</li>
                  </ul>
                  <p className="text-gray-700">
                    Your oncologist will determine the exact regimen based on your cancer characteristics and overall health.
                  </p>
                </div>
              </section>

              {/* Radiation Therapy Section */}
              <section className="mb-10 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Radiation Therapy for Breast Cancer</h2>
                <p className="text-gray-700 mb-4">
                  Radiation therapy uses high-energy beams to kill cancer cells. It's often used after lumpectomy (breast-conserving surgery) and sometimes after mastectomy if there's a high risk of recurrence.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">Types of Radiation</h3>
                    <ul className="space-y-3">
                      <li className="bg-pink-50 p-3 rounded-lg">
                        <h4 className="font-bold text-pink-800 mb-1">External Beam Radiation</h4>
                        <p className="text-gray-700 text-sm">Most common type. Delivered from a machine outside the body over several weeks.</p>
                      </li>
                      <li className="bg-blue-50 p-3 rounded-lg">
                        <h4 className="font-bold text-blue-800 mb-1">Brachytherapy</h4>
                        <p className="text-gray-700 text-sm">Internal radiation where radioactive seeds are placed near the tumor site for a shorter duration.</p>
                      </li>
                      <li className="bg-purple-50 p-3 rounded-lg">
                        <h4 className="font-bold text-purple-800 mb-1">Intraoperative Radiation</h4>
                        <p className="text-gray-700 text-sm">Single dose given during surgery immediately after tumor removal.</p>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">Typical Radiation Schedule</h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between text-sm font-medium text-gray-600 mb-2">
                        <span>Whole Breast</span>
                        <span>5 days/week × 5-6 weeks</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
                        <div className="bg-pink-600 h-4 rounded-full" style={{width: '100%'}}></div>
                      </div>
                      
                      <div className="flex justify-between text-sm font-medium text-gray-600 mb-2">
                        <span>Partial Breast</span>
                        <span>5 days/week × 3 weeks</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
                        <div className="bg-blue-600 h-4 rounded-full" style={{width: '60%'}}></div>
                      </div>
                      
                      <div className="flex justify-between text-sm font-medium text-gray-600 mb-2">
                        <span>Accelerated</span>
                        <span>5 days/week × 1-3 weeks</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-4">
                        <div className="bg-purple-600 h-4 rounded-full" style={{width: '30%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                  <h3 className="text-lg sm:text-xl font-bold text-yellow-800 mb-2">Skin Care During Radiation</h3>
                  <p className="text-gray-700 mb-3">Radiation can cause skin irritation similar to sunburn. Care tips include:</p>
                  <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                    <li>Use mild, fragrance-free soap</li>
                    <li>Avoid extreme temperatures on treated skin</li>
                    <li>Wear loose, soft clothing</li>
                    <li>Don't shave treated area with a razor</li>
                    <li>Use only approved moisturizers</li>
                    <li>Protect skin from sun with clothing/hats</li>
                  </ul>
                </div>
              </section>

              {/* Surgical Options Section */}
              <section className="mb-10 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Surgical Options for Breast Cancer</h2>
                <p className="text-gray-700 mb-4">
                  Surgery is often the first treatment for breast cancer. The two main types are breast-conserving surgery (lumpectomy) and mastectomy. The choice depends on tumor size, location, and patient preference.
                </p>
                
                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full bg-white border border-gray-200 text-sm">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="py-2 px-3 border-b text-left">Procedure</th>
                        <th className="py-2 px-3 border-b text-left">Description</th>
                        <th className="py-2 px-3 border-b text-left">Hospital Stay</th>
                        <th className="py-2 px-3 border-b text-left">Recovery Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-2 px-3 border-b font-medium">Lumpectomy</td>
                        <td className="py-2 px-3 border-b">Removes tumor + margin of healthy tissue</td>
                        <td className="py-2 px-3 border-b">Outpatient or 1 day</td>
                        <td className="py-2 px-3 border-b">1-2 weeks</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 border-b font-medium">Mastectomy</td>
                        <td className="py-2 px-3 border-b">Removes entire breast tissue</td>
                        <td className="py-2 px-3 border-b">1-2 days</td>
                        <td className="py-2 px-3 border-b">3-6 weeks</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 border-b font-medium">Sentinel Node Biopsy</td>
                        <td className="py-2 px-3 border-b">Removes first lymph nodes draining the breast</td>
                        <td className="py-2 px-3 border-b">Outpatient</td>
                        <td className="py-2 px-3 border-b">1-2 weeks</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 border-b font-medium">Axillary Dissection</td>
                        <td className="py-2 px-3 border-b">Removes multiple lymph nodes from armpit</td>
                        <td className="py-2 px-3 border-b">1-2 days</td>
                        <td className="py-2 px-3 border-b">2-4 weeks</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
                  <div className="bg-pink-50 p-4 rounded-lg">
                    <h3 className="text-lg sm:text-xl font-bold text-pink-800 mb-3">Reconstruction Options</h3>
                    <ul className="space-y-3">
                      <li>
                        <h4 className="font-bold">Implants</h4>
                        <p className="text-gray-700 text-sm">Silicone or saline implants placed under chest muscle</p>
                      </li>
                      <li>
                        <h4 className="font-bold">Flap Procedures</h4>
                        <p className="text-gray-700 text-sm">Uses tissue from abdomen, back, or buttocks</p>
                      </li>
                      <li>
                        <h4 className="font-bold">Nipple Reconstruction</h4>
                        <p className="text-gray-700 text-sm">Can be done months after initial reconstruction</p>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="text-lg sm:text-xl font-bold text-blue-800 mb-3">Recovery Tips</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <ArrowRight className="w-4 h-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                        <span>Follow all post-op care instructions</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="w-4 h-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                        <span>Attend all follow-up appointments</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="w-4 h-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                        <span>Gradually increase arm movement</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="w-4 h-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                        <span>Watch for signs of infection</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="w-4 h-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                        <span>Consider physical therapy if needed</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Other Treatments Section */}
              <section className="mb-10 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Other Breast Cancer Treatment Options</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h3 className="text-lg sm:text-xl font-bold text-purple-800 mb-3">Hormone Therapy</h3>
                    <p className="text-gray-700 mb-3">For hormone receptor-positive cancers (ER+ or PR+)</p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <ArrowRight className="w-4 h-4 text-purple-600 mt-0.5 mr-2 flex-shrink-0" />
                        <span><strong>Tamoxifen:</strong> Blocks estrogen receptors (pre- and post-menopausal)</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="w-4 h-4 text-purple-600 mt-0.5 mr-2 flex-shrink-0" />
                        <span><strong>Aromatase inhibitors:</strong> Letrozole, Anastrozole, Exemestane (post-menopausal)</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="w-4 h-4 text-purple-600 mt-0.5 mr-2 flex-shrink-0" />
                        <span><strong>Ovarian suppression:</strong> For premenopausal women</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="text-lg sm:text-xl font-bold text-green-800 mb-3">Targeted Therapy</h3>
                    <p className="text-gray-700 mb-3">For cancers with specific characteristics like HER2+</p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <ArrowRight className="w-4 h-4 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                        <span><strong>Trastuzumab (Herceptin):</strong> Targets HER2 protein</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="w-4 h-4 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                        <span><strong>Pertuzumab:</strong> Often combined with trastuzumab</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="w-4 h-4 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                        <span><strong>CDK4/6 inhibitors:</strong> Palbociclib, Ribociclib, Abemaciclib</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">Immunotherapy</h3>
                  <p className="text-gray-700 mb-3">
                    Immunotherapy helps your immune system recognize and attack cancer cells. For breast cancer, it's primarily used for:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                    <li>Triple-negative breast cancer (PD-L1 positive)</li>
                    <li>Metastatic breast cancer with specific biomarkers</li>
                    <li>Cancers with high microsatellite instability (MSI-H)</li>
                  </ul>
                </div>
              </section>

              {/* Support Section */}
              <section className="mb-10 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Support During Treatment</h2>
                <p className="text-gray-700 mb-4 sm:mb-6">
                  Facing breast cancer treatment can be overwhelming. Building a strong support network and accessing available resources can make the journey easier.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6">
                  <div className="bg-pink-50 p-3 sm:p-4 rounded-lg text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                      <HeartPulse className="w-5 h-5 sm:w-6 sm:h-6 text-pink-600" />
                    </div>
                    <h3 className="font-bold text-pink-800 mb-1 sm:mb-2 text-sm sm:text-base">Medical Team</h3>
                    <p className="text-gray-700 text-xs sm:text-sm">Oncologist, surgeon, nurses, social workers</p>
                  </div>
                  
                  <div className="bg-blue-50 p-3 sm:p-4 rounded-lg text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                      <User className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                    </div>
                    <h3 className="font-bold text-blue-800 mb-1 sm:mb-2 text-sm sm:text-base">Support Groups</h3>
                    <p className="text-gray-700 text-xs sm:text-sm">In-person or online communities</p>
                  </div>
                  
                  <div className="bg-purple-50 p-3 sm:p-4 rounded-lg text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                      <HeartPulse className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                    </div>
                    <h3 className="font-bold text-purple-800 mb-1 sm:mb-2 text-sm sm:text-base">Counseling</h3>
                    <p className="text-gray-700 text-xs sm:text-sm">Individual or family therapy</p>
                  </div>
                </div>
                
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                  <h3 className="text-lg sm:text-xl font-bold text-yellow-800 mb-3">Practical Support Resources</h3>
                  <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                    <li>Meal delivery services (Meals on Wheels, local organizations)</li>
                    <li>Transportation assistance (American Cancer Society Road to Recovery)</li>
                    <li>Financial aid programs (CancerCare, Patient Advocate Foundation)</li>
                    <li>Wig and prosthesis programs (Look Good Feel Better)</li>
                    <li>Childcare assistance during treatment</li>
                  </ul>
                </div>
              </section>

              {/* Conclusion Section */}
              <section className="mb-10 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">The Path Forward</h2>
                <p className="text-gray-700 mb-4">
                  Breast cancer treatment has evolved significantly, with more personalized approaches than ever before. While the journey can be challenging, understanding your options and working closely with your medical team can help you make informed decisions.
                </p>
                <p className="text-gray-700 mb-4">
                  Remember that treatment plans are highly individualized. What works for one person may not be right for another. The most important thing is to:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 sm:mb-6 ml-4 space-y-2">
                  <li>Ask questions and understand your options</li>
                  <li>Consider second opinions if you have doubts</li>
                  <li>Communicate openly with your care team</li>
                  <li>Take care of your emotional health as well as physical</li>
                  <li>Lean on your support network</li>
                </ul>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-800 font-medium">
                    With advances in treatment and supportive care, many people with breast cancer go on to live long, fulfilling lives after treatment.
                  </p>
                </div>
              </section>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Author Info */}
            <div className="bg-gray-50 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8">
              <div className="flex flex-col sm:flex-row items-start gap-4 mb-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="w-6 h-6 sm:w-8 sm:h-8 text-gray-600" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-600 mb-1">
                    <a href="#" className="text-blue-600 hover:underline">
                      Medically reviewed
                    </a>{" "}
                    by{" "}
                    <a href="#" className="text-blue-600 hover:underline font-medium">
                      Dr. Sarah Johnson, MD, Oncologist
                    </a>
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 mb-1">
                    — Written by{" "}
                    <a href="#" className="text-blue-600 hover:underline font-medium">
                      Emily Carter, Health Writer
                    </a>
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 flex items-center gap-1">
                    — <Calendar className="w-3 h-3" />
                    <a href="#" className="text-blue-600 hover:underline">
                      Updated on March 15, 2025
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-pink-50 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8">
              <div className="mb-4">
                <h3 className="text-xs sm:text-sm font-bold text-pink-800 uppercase tracking-wide mb-2">BREAST CANCER SUPPORT</h3>
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Stay Informed About Treatment Advances</h4>
                <p className="text-gray-700 text-xs sm:text-sm">
                  Get the latest information on breast cancer treatments, research, and support resources delivered to your inbox.
                </p>
              </div>

              <form onSubmit={handleEmailSubmit} className="space-y-3 sm:space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm sm:text-base"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-pink-600 hover:bg-pink-700 text-white font-medium py-2 sm:py-3 px-4 rounded-lg transition-colors duration-200 text-sm sm:text-base"
                >
                  SUBSCRIBE
                </button>
              </form>

              <p className="text-xs text-gray-600 mt-2 sm:mt-3">
                Your{" "}
                <a href="#" className="text-pink-600 hover:underline">
                  privacy
                </a>{" "}
                is important to us
              </p>
            </div>

            {/* Related Articles */}
            <div className="bg-gray-50 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Related Articles</h3>
              <ul className="space-y-3 sm:space-y-4">
                <li>
                  <a href="#" className="group flex items-start gap-3">
                    <div className="w-14 h-14 bg-gray-200 rounded-md overflow-hidden flex-shrink-0">
                      <div className="bg-gray-300 border-2 border-dashed rounded-xl w-full h-full" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 group-hover:text-pink-600 transition-colors text-sm sm:text-base">Understanding Breast Cancer Stages</h4>
                      <p className="text-gray-600 text-xs sm:text-sm">Learn how staging impacts treatment</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="group flex items-start gap-3">
                    <div className="w-14 h-14 bg-gray-200 rounded-md overflow-hidden flex-shrink-0">
                      <div className="bg-gray-300 border-2 border-dashed rounded-xl w-full h-full" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 group-hover:text-pink-600 transition-colors text-sm sm:text-base">Managing Chemo Side Effects</h4>
                      <p className="text-gray-600 text-xs sm:text-sm">Practical tips for getting through treatment</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="group flex items-start gap-3">
                    <div className="w-14 h-14 bg-gray-200 rounded-md overflow-hidden flex-shrink-0">
                      <div className="bg-gray-300 border-2 border-dashed rounded-xl w-full h-full" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 group-hover:text-pink-600 transition-colors text-sm sm:text-base">Emotional Support Resources</h4>
                      <p className="text-gray-600 text-xs sm:text-sm">Finding help for mental health during treatment</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="bg-blue-50 rounded-lg p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-3 sm:mb-4">Quick Links to Resources</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <a href="#" className="text-blue-700 hover:text-blue-900 font-medium flex items-center gap-2 text-sm sm:text-base">
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                    American Cancer Society
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-700 hover:text-blue-900 font-medium flex items-center gap-2 text-sm sm:text-base">
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                    National Breast Cancer Foundation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-700 hover:text-blue-900 font-medium flex items-center gap-2 text-sm sm:text-base">
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                    BreastCancer.org
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-700 hover:text-blue-900 font-medium flex items-center gap-2 text-sm sm:text-base">
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                    Susan G. Komen
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-700 hover:text-blue-900 font-medium flex items-center gap-2 text-sm sm:text-base">
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                    Clinical Trials Search
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}