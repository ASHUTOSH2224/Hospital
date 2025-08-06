"use client"

import { useEffect, useState } from "react"
import { User, Calendar, ClipboardList, AlertTriangle, HeartPulse, Pill, Radiation, Syringe, Scissors } from "lucide-react"

export default function AdjuvantTherapyGuide() {
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

  const tabs = ["Overview", "Types", "Benefits", "SideEffects", "FAQs"]

  return (
    <div className="min-h-screen bg-white pt-20 md:pt-32">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header Section */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Adjuvant Therapy for Breast Cancer: What to Know
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Your doctor may suggest adjuvant therapy as part of your breast cancer treatment plan to help prevent recurrence and improve survival rates.
              </p>

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

              {/* Main Image */}
              <div className="mb-8">
                <img
                  src="/breast-cancer-treatment.jpg"
                  alt="Doctor discussing treatment options with breast cancer patient"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>

              {/* Key Facts Box */}
              <div className="bg-pink-50 border-l-4 border-pink-400 p-6 mb-8 rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <ClipboardList className="w-5 h-5 text-pink-600" />
                  Key Facts About Adjuvant Therapy
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-pink-600 font-bold">•</span>
                    Given after primary treatment (surgery) to kill remaining cancer cells
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-600 font-bold">•</span>
                    Can reduce recurrence risk by 30-50% depending on cancer type
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-600 font-bold">•</span>
                    May include chemotherapy, radiation, hormone therapy, or targeted therapy
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-600 font-bold">•</span>
                    Treatment duration varies from weeks to years
                  </li>
                </ul>
              </div>

              {/* Overview Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Adjuvant Therapy?</h2>
                <p className="text-gray-700 mb-4">
                  Adjuvant therapy refers to additional cancer treatment given after the primary treatment (usually surgery) to lower the risk of the cancer returning. Even after successful surgery to remove a tumor, microscopic cancer cells may remain in the body that can grow and cause recurrence.
                </p>
                <p className="text-gray-700 mb-6">
                  The term "adjuvant" comes from the Latin word "adjuvare" meaning "to help." Adjuvant therapies help the primary treatment work better by targeting any remaining cancer cells that surgery might have missed or that have spread to other parts of the body but are too small to detect.
                </p>

                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-blue-600" />
                    Why It's Important
                  </h3>
                  <p className="text-gray-700">
                    Studies show that adjuvant therapy can significantly improve survival rates for breast cancer patients. For example, adjuvant chemotherapy can reduce the risk of death by up to <span className="font-bold">30-50%</span> in certain breast cancer subtypes, depending on individual factors.
                  </p>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">How Adjuvant Therapy Works</h3>
                <p className="text-gray-700 mb-4">
                  Adjuvant therapies work through different mechanisms depending on the type:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                  <li><span className="font-bold">Chemotherapy:</span> Kills rapidly dividing cells throughout the body</li>
                  <li><span className="font-bold">Radiation therapy:</span> Targets specific areas with high-energy beams</li>
                  <li><span className="font-bold">Hormone therapy:</span> Blocks hormones that fuel certain cancers</li>
                  <li><span className="font-bold">Targeted therapy:</span> Attacks specific cancer cell markers</li>
                </ul>
              </section>

              {/* Types Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of Adjuvant Therapy</h2>
                <p className="text-gray-700 mb-6">
                  The type of adjuvant therapy recommended depends on several factors including the cancer's stage, hormone receptor status, HER2 status, and your overall health. Here are the main types used for breast cancer:
                </p>

                {/* Chemotherapy */}
                <div className="mb-8 bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Pill className="w-5 h-5 text-pink-600" />
                    Chemotherapy
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Chemotherapy uses drugs to destroy cancer cells throughout the body. It's often recommended for:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-4 ml-4 space-y-2">
                                          <li>Larger tumors (typically &gt;2cm)</li>
                    <li>Cancer that has spread to lymph nodes</li>
                    <li>Triple-negative breast cancer</li>
                    <li>HER2-positive breast cancer (combined with targeted therapy)</li>
                  </ul>
                  <p className="text-gray-700 mb-4 font-bold">Common chemotherapy regimens for breast cancer:</p>
                  
                  <div className="overflow-x-auto mb-4">
                    <table className="min-w-full bg-white border border-gray-200">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="py-2 px-4 border-b text-left">Regimen</th>
                          <th className="py-2 px-4 border-b text-left">Drugs</th>
                          <th className="py-2 px-4 border-b text-left">Frequency</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="py-2 px-4 border-b">AC-T</td>
                          <td className="py-2 px-4 border-b">Doxorubicin, Cyclophosphamide, then Paclitaxel</td>
                          <td className="py-2 px-4 border-b">Every 2-3 weeks for 4-8 cycles</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 border-b">TC</td>
                          <td className="py-2 px-4 border-b">Docetaxel, Cyclophosphamide</td>
                          <td className="py-2 px-4 border-b">Every 3 weeks for 4-6 cycles</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 border-b">TCHP</td>
                          <td className="py-2 px-4 border-b">Docetaxel, Carboplatin, Trastuzumab, Pertuzumab</td>
                          <td className="py-2 px-4 border-b">Every 3 weeks for 6 cycles (HER2+)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Radiation Therapy */}
                <div className="mb-8 bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Radiation className="w-5 h-5 text-pink-600" />
                    Radiation Therapy
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Radiation uses high-energy beams to kill cancer cells in a specific area. It's typically recommended after breast-conserving surgery (lumpectomy) and sometimes after mastectomy if:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-4 ml-4 space-y-2">
                                          <li>Tumor was &gt;5cm</li>
                    <li>Cancer was found in 4+ lymph nodes</li>
                    <li>Positive surgical margins</li>
                  </ul>
                  <p className="text-gray-700 mb-4">
                    <span className="font-bold">Standard protocol:</span> 5 days per week for 3-6 weeks (15-30 treatments total)
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-bold text-gray-900 mb-2">Whole Breast Radiation</h4>
                      <p className="text-gray-700 text-sm">Targets the entire breast area, typically after lumpectomy</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-bold text-gray-900 mb-2">Partial Breast Radiation</h4>
                      <p className="text-gray-700 text-sm">Targets only the tumor area, for select early-stage cancers</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-bold text-gray-900 mb-2">Chest Wall Radiation</h4>
                      <p className="text-gray-700 text-sm">After mastectomy when risk of recurrence is high</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-bold text-gray-900 mb-2">Lymph Node Radiation</h4>
                      <p className="text-gray-700 text-sm">When cancer has spread to lymph nodes</p>
                    </div>
                  </div>
                </div>

                {/* Hormone Therapy */}
                <div className="mb-8 bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <HeartPulse className="w-5 h-5 text-pink-600" />
                    Hormone Therapy
                  </h3>
                  <p className="text-gray-700 mb-4">
                    For hormone receptor-positive (ER+ and/or PR+) breast cancers, which account for about 75% of cases. These therapies block estrogen or lower estrogen levels:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-bold text-gray-900 mb-2">Tamoxifen</h4>
                      <ul className="text-gray-700 text-sm list-disc list-inside space-y-1">
                        <li>For pre- and postmenopausal women</li>
                        <li>Blocks estrogen receptors</li>
                        <li>Taken for 5-10 years</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-bold text-gray-900 mb-2">Aromatase Inhibitors</h4>
                      <ul className="text-gray-700 text-sm list-disc list-inside space-y-1">
                        <li>For postmenopausal women only</li>
                        <li>Lowers estrogen production</li>
                        <li>Examples: Letrozole, Anastrozole, Exemestane</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    <span className="font-bold">Duration:</span> Typically 5-10 years of treatment, with some women continuing beyond 10 years based on recurrence risk.
                  </p>
                </div>

                {/* Targeted Therapy */}
                <div className="mb-8 bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Syringe className="w-5 h-5 text-pink-600" />
                    Targeted Therapy
                  </h3>
                  <p className="text-gray-700 mb-4">
                    These drugs specifically target HER2-positive breast cancer cells (about 20% of cases) or other specific markers:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-4 ml-4 space-y-2">
                    <li>
                      <span className="font-bold">Trastuzumab (Herceptin):</span> Given IV every 3 weeks for 1 year
                    </li>
                    <li>
                      <span className="font-bold">Pertuzumab (Perjeta):</span> Often combined with trastuzumab
                    </li>
                    <li>
                      <span className="font-bold">Ado-trastuzumab emtansine (Kadcyla):</span> For residual disease after neoadjuvant therapy
                    </li>
                    <li>
                      <span className="font-bold">CDK4/6 inhibitors:</span> For advanced hormone receptor-positive cancers (palbociclib, ribociclib, abemaciclib)
                    </li>
                  </ul>
                </div>
              </section>

              {/* Benefits Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of Adjuvant Therapy</h2>
                <p className="text-gray-700 mb-6">
                  Adjuvant therapy offers several important benefits for breast cancer patients, though the exact advantages depend on individual factors like cancer subtype and stage:
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-pink-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <Scissors className="w-5 h-5 text-pink-600" />
                      Reduced Recurrence
                    </h3>
                    <p className="text-gray-700">
                      Adjuvant therapy can reduce the risk of cancer returning by 30-50%. For example, chemotherapy reduces 10-year recurrence risk from about 35% to 20% in node-positive patients.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <HeartPulse className="w-5 h-5 text-blue-600" />
                      Improved Survival
                    </h3>
                    <p className="text-gray-700">
                      10-year survival rates improve by 10-15% with appropriate adjuvant therapy. For HER2+ cancers, adding trastuzumab improves survival by up to 37%.
                    </p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Statistics by Cancer Type</h3>
                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full bg-white border border-gray-200">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="py-2 px-4 border-b text-left">Cancer Type</th>
                        <th className="py-2 px-4 border-b text-left">Without Adjuvant</th>
                        <th className="py-2 px-4 border-b text-left">With Adjuvant</th>
                        <th className="py-2 px-4 border-b text-left">Risk Reduction</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-2 px-4 border-b">ER+, node-negative</td>
                        <td className="py-2 px-4 border-b">25% recurrence</td>
                        <td className="py-2 px-4 border-b">15% with hormone therapy</td>
                        <td className="py-2 px-4 border-b">40% reduction</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b">HER2+, node-positive</td>
                        <td className="py-2 px-4 border-b">50% recurrence</td>
                        <td className="py-2 px-4 border-b">30% with chemo + trastuzumab</td>
                        <td className="py-2 px-4 border-b">40% reduction</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b">Triple-negative, stage II</td>
                        <td className="py-2 px-4 border-b">45% recurrence</td>
                        <td className="py-2 px-4 border-b">30% with chemotherapy</td>
                        <td className="py-2 px-4 border-b">33% reduction</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Personalized Medicine Advances</h3>
                  <p className="text-gray-700 mb-2">
                    New genomic tests like Oncotype DX and MammaPrint help identify who will benefit most from chemotherapy:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                    <li>Low-risk scores may avoid unnecessary chemo</li>
                    <li>Intermediate scores benefit from chemo in some cases</li>
                    <li>High-risk scores show clear chemo benefit</li>
                  </ul>
                </div>
              </section>

              {/* Side Effects Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Potential Side Effects</h2>
                <p className="text-gray-700 mb-6">
                  While adjuvant therapies provide significant benefits, they can also cause side effects. Being prepared can help you manage them better:
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Chemotherapy</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Fatigue (very common)</li>
                      <li>Nausea/vomiting (usually well-controlled with modern meds)</li>
                      <li>Hair loss (temporary with most regimens)</li>
                      <li>Low blood counts (risk of infection)</li>
                      <li>Neuropathy (tingling in hands/feet)</li>
                      <li>Early menopause in premenopausal women</li>
                    </ul>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Radiation Therapy</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Skin irritation (like sunburn)</li>
                      <li>Breast swelling/heaviness</li>
                      <li>Fatigue (usually mild-moderate)</li>
                      <li>Long-term: slight hardening of breast tissue</li>
                      <li>Very rare: heart or lung effects (modern techniques minimize this)</li>
                    </ul>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Hormone Therapy</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Hot flashes/night sweats</li>
                      <li>Joint pain (especially with aromatase inhibitors)</li>
                      <li>Vaginal dryness</li>
                      <li>Increased risk of blood clots (tamoxifen)</li>
                      <li>Bone thinning (aromatase inhibitors)</li>
                      <li>Mood changes</li>
                    </ul>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Targeted Therapy</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Heart monitoring needed (HER2 drugs)</li>
                      <li>Diarrhea (especially with CDK4/6 inhibitors)</li>
                      <li>Infusion reactions</li>
                      <li>Fatigue</li>
                      <li>Nail changes</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Managing Side Effects</h3>
                  <p className="text-gray-700 mb-3">
                    Most side effects can be managed with medications, lifestyle changes, or supportive care:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                    <li>Anti-nausea medications are very effective</li>
                    <li>Cold caps may reduce hair loss</li>
                    <li>Exercise can combat fatigue and joint pain</li>
                    <li>Vaginal moisturizers help with dryness</li>
                    <li>Bone-strengthening medications if needed</li>
                    <li>Cardiac medications may protect heart function</li>
                  </ul>
                </div>
              </section>

              {/* FAQs Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>

                <div className="space-y-6">
                  <div className="border-b border-gray-200 pb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">How is adjuvant therapy different from neoadjuvant therapy?</h3>
                    <p className="text-gray-700">
                      Adjuvant therapy is given <span className="font-bold">after</span> primary treatment (usually surgery), while neoadjuvant therapy is given <span className="font-bold">before</span> surgery to shrink tumors. Both aim to eliminate microscopic disease, but neoadjuvant therapy also helps assess how well the cancer responds to treatment.
                    </p>
                  </div>

                  <div className="border-b border-gray-200 pb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Do all breast cancer patients need adjuvant therapy?</h3>
                    <p className="text-gray-700">
                      No, recommendations depend on individual factors. Some very early-stage, low-risk cancers may not require adjuvant therapy beyond surgery. Genomic tests help determine recurrence risk and whether chemotherapy would be beneficial.
                    </p>
                  </div>

                  <div className="border-b border-gray-200 pb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">How long does adjuvant therapy last?</h3>
                    <p className="text-gray-700">
                      Duration varies by treatment type:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 ml-4 mt-2 space-y-1">
                      <li>Chemotherapy: Typically 3-6 months</li>
                      <li>Radiation: 3-6 weeks (daily treatments)</li>
                      <li>Hormone therapy: 5-10 years</li>
                      <li>Targeted therapy: 1 year (for HER2+ cancers)</li>
                    </ul>
                  </div>

                  <div className="border-b border-gray-200 pb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Can I work during adjuvant therapy?</h3>
                    <p className="text-gray-700">
                      Many patients continue working, though you may need adjustments. Radiation usually allows normal activity. Chemotherapy may require taking days off after treatments. Discuss options with your employer about flexible schedules or remote work during treatment.
                    </p>
                  </div>

                  <div className="pb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Will adjuvant therapy affect my fertility?</h3>
                    <p className="text-gray-700">
                      Some treatments can impact fertility, especially chemotherapy in younger women. If you hope to have children, discuss fertility preservation options (egg/embryo freezing) with your oncologist before starting treatment. Hormone therapy also requires delaying pregnancy during treatment.
                    </p>
                  </div>
                </div>
              </section>

              {/* Conclusion */}
              <section className="mb-12 bg-gray-50 p-8 rounded-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">The Bottom Line</h2>
                <p className="text-gray-700 mb-4">
                  Adjuvant therapy has transformed breast cancer outcomes, significantly reducing recurrence risks and improving survival. While these treatments can be challenging, the benefits often outweigh the risks for most patients.
                </p>
                <p className="text-gray-700 mb-4">
                  Treatment decisions should be personalized based on your cancer's characteristics, overall health, and personal preferences. Advances in genomic testing now allow more tailored approaches to identify who benefits most from specific therapies.
                </p>
                <p className="text-gray-700">
                  If you're facing decisions about adjuvant therapy, have detailed discussions with your oncology team about the expected benefits versus potential side effects for your specific situation. Support from cancer centers, patient navigators, and survivor networks can help guide you through this phase of treatment.
                </p>
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
                      Dr. Sarah Johnson, MD, Oncologist
                    </a>
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    — Written by{" "}
                    <a href="#" className="text-blue-600 hover:underline font-medium">
                      Medical Editorial Team
                    </a>
                  </p>
                  <p className="text-sm text-gray-600 flex items-center gap-1">
                    — <Calendar className="w-3 h-3" />
                    <a href="#" className="text-blue-600 hover:underline">
                      Updated on June 5, 2025
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-pink-50 rounded-lg p-6 mb-8">
              <div className="mb-4">
                <h3 className="text-sm font-bold text-pink-800 uppercase tracking-wide mb-2">BREAST CANCER SUPPORT</h3>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Stay Informed About Treatment Advances</h4>
                <p className="text-gray-700 text-sm">
                  Get the latest information on breast cancer treatments, research, and support resources delivered to your inbox.
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