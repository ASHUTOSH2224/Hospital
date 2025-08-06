"use client"

import { useEffect, useState } from "react"
import { User, Calendar, HeartPulse, Shield, Activity, Thermometer, Pill } from "lucide-react"

export default function BreastCancerTherapyGuide() {
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

  const tabs = ["Overview", "Therapies", "Side Effects", "Decision Factors", "FAQ"]

  return (
    <div className="min-h-screen bg-white pt-20 md:pt-32">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header Section */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Which First-Line Breast Cancer Therapy Is Right for Me?
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
                Treatment needs for advanced breast cancer vary significantly based on cancer type, stage, biomarkers, and individual health factors. Understanding your options can help you make informed decisions with your oncology team.
              </p>

              {/* Main Image */}
              <div className="mb-8">
                <img
                  src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=400&fit=crop"
                  alt="Doctor discussing treatment options with breast cancer patient"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <p className="text-sm text-gray-500 mt-2">Understanding your treatment options is the first step in developing a personalized care plan.</p>
              </div>

              {/* Key Facts Box */}
              <div className="bg-pink-50 border-l-4 border-pink-400 p-4 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <HeartPulse className="text-pink-600" /> Key Facts About First-Line Breast Cancer Therapy
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>First-line therapy is the initial treatment recommended for your cancer type and stage</li>
                  <li>Selection depends on hormone receptor status, HER2 status, and other biomarkers</li>
                  <li>Treatment may include surgery, radiation, chemotherapy, hormone therapy, or targeted therapy</li>
                  <li>About 70-80% of early-stage breast cancer patients receive systemic therapy as part of treatment</li>
                </ul>
              </div>

            </div>

            {/* Overview Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Shield className="text-pink-600" /> Understanding First-Line Therapy Options
              </h2>
              
              <p className="text-gray-700 mb-4">
                First-line therapy refers to the initial treatment recommended for your specific type and stage of breast cancer. The choice depends on multiple factors including:
              </p>
              
              <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                <li className="font-medium">Cancer characteristics (size, grade, lymph node involvement)</li>
                <li className="font-medium">Biomarker status (ER/PR, HER2)</li>
                <li className="font-medium">Your overall health and preferences</li>
                <li className="font-medium">Genetic test results (like Oncotype DX or MammaPrint when applicable)</li>
              </ul>

              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Breast Cancer Subtypes and Typical First-Line Approaches</h3>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white rounded-lg overflow-hidden">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="py-3 px-4 text-left text-gray-700 font-semibold">Subtype</th>
                        <th className="py-3 px-4 text-left text-gray-700 font-semibold">Characteristics</th>
                        <th className="py-3 px-4 text-left text-gray-700 font-semibold">Common First-Line Therapies</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="py-3 px-4">HR+/HER2-</td>
                        <td className="py-3 px-4">Hormone receptor positive, HER2 negative</td>
                        <td className="py-3 px-4">Hormone therapy ± chemotherapy</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="py-3 px-4">HER2+</td>
                        <td className="py-3 px-4">HER2 positive (any HR status)</td>
                        <td className="py-3 px-4">Anti-HER2 therapy + chemotherapy</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">Triple Negative</td>
                        <td className="py-3 px-4">ER-, PR-, HER2-</td>
                        <td className="py-3 px-4">Chemotherapy ± immunotherapy</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <p className="text-gray-700 mb-6">
                Your oncologist will recommend the most appropriate first-line therapy based on your specific situation. In some cases, neoadjuvant therapy (treatment before surgery) may be recommended to shrink tumors and assess response.
              </p>
            </section>

            {/* Detailed Therapy Options Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Activity className="text-pink-600" /> Detailed Therapy Options
              </h2>

              {/* Hormone Therapy */}
              <div className="mb-8 bg-pink-50 p-4 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Hormone Therapy (Endocrine Therapy)</h3>
                <p className="text-gray-700 mb-4">
                  For hormone receptor-positive (ER+ and/or PR+) breast cancers, which account for about 75% of cases, hormone therapy is often the foundation of treatment.
                </p>
                
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Common Hormone Therapy Options:</h4>
                <ul className="list-disc list-inside text-gray-700 mb-4 ml-4 space-y-2">
                  <li>
                    <span className="font-medium">Tamoxifen:</span> Blocks estrogen receptors (used in pre- and postmenopausal women)
                  </li>
                  <li>
                    <span className="font-medium">Aromatase inhibitors (AIs):</span> Anastrozole, letrozole, exemestane (primarily for postmenopausal women)
                  </li>
                  <li>
                    <span className="font-medium">Ovarian suppression:</span> For premenopausal women, often combined with other hormone therapies
                  </li>
                </ul>

                <div className="bg-white p-4 rounded border border-gray-200 mb-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Duration of Therapy</h4>
                  <p className="text-gray-700">
                    Current guidelines recommend 5-10 years of hormone therapy, depending on risk factors. Recent studies show extended therapy (beyond 5 years) may further reduce recurrence risk.
                  </p>
                </div>
              </div>

              {/* Targeted Therapy */}
              <div className="mb-8 bg-blue-50 p-4 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Targeted Therapy</h3>
                <p className="text-gray-700 mb-4">
                  These drugs specifically target cancer cell characteristics. The most common in breast cancer are HER2-targeted therapies for HER2-positive cancers.
                </p>
                
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Common Targeted Therapies:</h4>
                <ul className="list-disc list-inside text-gray-700 mb-4 ml-4 space-y-2">
                  <li>
                    <span className="font-medium">Trastuzumab (Herceptin):</span> First-line for HER2+ cancers, often combined with chemotherapy
                  </li>
                  <li>
                    <span className="font-medium">Pertuzumab (Perjeta):</span> Used with trastuzumab in advanced or neoadjuvant settings
                  </li>
                  <li>
                    <span className="font-medium">CDK4/6 inhibitors:</span> Palbociclib, ribociclib, abemaciclib for HR+/HER2- metastatic cancer
                  </li>
                  <li>
                    <span className="font-medium">PARP inhibitors:</span> Olaparib, talazoparib for BRCA mutation carriers
                  </li>
                </ul>

                <div className="bg-white p-4 rounded border border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Treatment Duration</h4>
                  <p className="text-gray-700">
                    HER2-targeted therapy typically continues for 1 year in early-stage cancer. For metastatic disease, treatment continues as long as it remains effective.
                  </p>
                </div>
              </div>

              {/* Chemotherapy */}
              <div className="mb-8 bg-purple-50 p-4 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Chemotherapy</h3>
                <p className="text-gray-700 mb-4">
                  Chemotherapy uses drugs to kill rapidly dividing cells. It may be recommended based on tumor characteristics, stage, and risk of recurrence.
                </p>
                
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Common Chemotherapy Regimens:</h4>
                <div className="overflow-x-auto mb-4">
                  <table className="min-w-full bg-white rounded-lg overflow-hidden">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="py-3 px-4 text-left text-gray-700 font-semibold">Regimen</th>
                        <th className="py-3 px-4 text-left text-gray-700 font-semibold">Drugs Included</th>
                        <th className="py-3 px-4 text-left text-gray-700 font-semibold">Common Uses</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="py-3 px-4">AC-T</td>
                        <td className="py-3 px-4">Doxorubicin, cyclophosphamide, then paclitaxel</td>
                        <td className="py-3 px-4">High-risk early-stage, triple negative</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="py-3 px-4">TC</td>
                        <td className="py-3 px-4">Docetaxel, cyclophosphamide</td>
                        <td className="py-3 px-4">Lower-risk early-stage</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">TCHP</td>
                        <td className="py-3 px-4">Docetaxel, carboplatin, trastuzumab, pertuzumab</td>
                        <td className="py-3 px-4">HER2-positive cancers</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700">
                  Chemotherapy is typically given in cycles over 3-6 months. The specific regimen and duration depend on cancer characteristics and your overall health.
                </p>
              </div>

              {/* Immunotherapy */}
              <div className="mb-8 bg-green-50 p-4 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">4. Immunotherapy</h3>
                <p className="text-gray-700 mb-4">
                  Immunotherapy helps your immune system recognize and attack cancer cells. For breast cancer, it's primarily used in triple-negative breast cancer (TNBC).
                </p>
                
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Current Options:</h4>
                <ul className="list-disc list-inside text-gray-700 mb-4 ml-4 space-y-2">
                  <li>
                    <span className="font-medium">Pembrolizumab (Keytruda):</span> Approved for high-risk early-stage TNBC and metastatic TNBC with PD-L1 expression
                  </li>
                  <li>
                    <span className="font-medium">Atezolizumab (Tecentriq):</span> Previously approved for PD-L1+ metastatic TNBC (currently limited availability)
                  </li>
                </ul>

                <div className="bg-white p-4 rounded border border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Biomarker Testing</h4>
                  <p className="text-gray-700">
                    PD-L1 testing is required before immunotherapy for metastatic TNBC. Tumor mutational burden and microsatellite instability may also be assessed.
                  </p>
                </div>
              </div>
            </section>

            {/* Side Effects Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Thermometer className="text-pink-600" /> Managing Treatment Side Effects
              </h2>

              <p className="text-gray-700 mb-6">
                Each treatment option comes with potential side effects. Understanding these can help you prepare and work with your care team to manage them effectively.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Hormone Therapy Side Effects */}
                <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Hormone Therapy Side Effects</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Hot flashes/night sweats</li>
                    <li>Joint pain (especially with AIs)</li>
                    <li>Vaginal dryness</li>
                    <li>Increased risk of blood clots (tamoxifen)</li>
                    <li>Bone density loss (AIs)</li>
                  </ul>
                </div>

                {/* Chemotherapy Side Effects */}
                <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Chemotherapy Side Effects</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Fatigue</li>
                    <li>Hair loss (varies by regimen)</li>
                    <li>Nausea/vomiting</li>
                    <li>Increased infection risk</li>
                    <li>Peripheral neuropathy</li>
                  </ul>
                </div>

                {/* Targeted Therapy Side Effects */}
                <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Targeted Therapy Side Effects</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Heart function changes (HER2 therapies)</li>
                    <li>Diarrhea (CDK4/6 inhibitors)</li>
                    <li>Low blood counts</li>
                    <li>Skin/nail changes</li>
                  </ul>
                </div>

                {/* Immunotherapy Side Effects */}
                <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Immunotherapy Side Effects</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Fatigue</li>
                    <li>Skin rash</li>
                    <li>Diarrhea/colitis</li>
                    <li>Thyroid dysfunction</li>
                    <li>Rare but serious immune-related reactions</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-2">When to Contact Your Doctor</h3>
                <p className="text-gray-700 mb-2">
                  Contact your oncology team immediately if you experience:
                </p>
                <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                  <li>Fever over 100.4°F (38°C)</li>
                  <li>Shortness of breath or chest pain</li>
                  <li>Severe diarrhea or abdominal pain</li>
                  <li>New neurological symptoms</li>
                  <li>Signs of infection</li>
                </ul>
              </div>
            </section>

            {/* Decision Factors Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Factors in Choosing First-Line Therapy</h2>

              <p className="text-gray-700 mb-6">
                Your oncologist will consider multiple factors when recommending first-line therapy. Understanding these can help you participate in shared decision-making.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Cancer Characteristics */}
                <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Cancer Characteristics</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Stage (size and spread of cancer)</li>
                    <li>Grade (how abnormal cells look)</li>
                    <li>Hormone receptor status (ER/PR)</li>
                    <li>HER2 status</li>
                    <li>Ki-67 (proliferation rate)</li>
                    <li>Genetic test results (if performed)</li>
                  </ul>
                </div>

                {/* Patient Factors */}
                <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Patient Factors</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Age and menopausal status</li>
                    <li>Overall health and comorbidities</li>
                    <li>Family history/genetic risk factors</li>
                    <li>Personal preferences and values</li>
                    <li>Treatment goals (cure vs. control)</li>
                    <li>Access to care and support system</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow border border-gray-200 mt-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Questions to Ask Your Oncologist</h3>
                <ol className="list-decimal list-inside text-gray-700 space-y-3 ml-4">
                  <li>What is the goal of this treatment (cure, control, symptom relief)?</li>
                  <li>What are the expected benefits for my specific situation?</li>
                  <li>What are the potential short- and long-term side effects?</li>
                  <li>How will this treatment affect my daily life and activities?</li>
                  <li>Are there clinical trials appropriate for my cancer type?</li>
                  <li>What are the alternatives to this treatment plan?</li>
                  <li>How will we know if the treatment is working?</li>
                </ol>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>

              <div className="space-y-6">
                {/* FAQ Item 1 */}
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">How is first-line therapy different from other treatments?</h3>
                  <p className="text-gray-700">
                    First-line therapy is the initial treatment recommended based on your cancer characteristics and overall health. If the first treatment doesn't work or stops working, you may move to second-line or subsequent therapies with different mechanisms of action.
                  </p>
                </div>

                {/* FAQ Item 2 */}
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Can I change treatments if the side effects are too severe?</h3>
                  <p className="text-gray-700">
                    Yes, your oncology team can often adjust doses or switch to alternative treatments if side effects become unmanageable. Always report side effects promptly—many can be effectively managed with supportive medications or dose modifications.
                  </p>
                </div>

                {/* FAQ Item 3 */}
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">How do I know if my treatment is working?</h3>
                  <p className="text-gray-700">
                    For early-stage cancer, effectiveness is often assessed through pathological response (if treated before surgery) or long-term recurrence rates. For metastatic cancer, regular imaging and tumor marker tests help monitor response. Your oncologist will explain how your response will be evaluated.
                  </p>
                </div>

                {/* FAQ Item 4 */}
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Are there alternatives to chemotherapy for early-stage breast cancer?</h3>
                  <p className="text-gray-700">
                    For some hormone receptor-positive cancers, genomic tests (like Oncotype DX) can help determine if chemotherapy benefits are likely to outweigh risks. In these cases, hormone therapy alone may be sufficient. However, for triple-negative or HER2-positive cancers, chemotherapy remains standard.
                  </p>
                </div>

                {/* FAQ Item 5 */}
                <div className="pb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">How important are clinical trials for first-line treatment?</h3>
                  <p className="text-gray-700">
                    Clinical trials often provide access to promising new therapies. Many current standards of care were established through such trials. Ask your oncologist if there are appropriate trials for your situation—participation contributes to medical knowledge and may offer innovative treatment options.
                  </p>
                </div>
              </div>
            </section>

            {/* Final Takeaways */}
            <section className="mb-12 bg-pink-50 p-6 rounded-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Takeaways</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-3 ml-4">
                <li>First-line therapy is personalized based on your cancer's biology and your individual health factors</li>
                <li>Treatment decisions should involve shared decision-making with your oncology team</li>
                <li>Side effect management is an important part of treatment planning</li>
                <li>Ongoing monitoring helps assess treatment effectiveness</li>
                <li>New therapies continue to emerge through clinical research</li>
              </ul>
              <p className="text-gray-700 mt-4 font-medium">
                Remember: Your treatment plan should be as unique as you are. Work closely with your care team to understand your options and make informed decisions about your care.
              </p>
            </section>
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
                    <a href="#" className="text-pink-600 hover:underline">
                      Medically reviewed
                    </a>{" "}
                    by{" "}
                    <a href="#" className="text-pink-600 hover:underline font-medium">
                      Dr. Sarah Johnson, MD, Oncologist
                    </a>
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    — Written by{" "}
                    <a href="#" className="text-pink-600 hover:underline font-medium">
                      Medical Review Board
                    </a>
                  </p>
                  <p className="text-sm text-gray-600 flex items-center gap-1">
                    — <Calendar className="w-3 h-3" />
                    <a href="#" className="text-pink-600 hover:underline">
                      Updated on June 15, 2025
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Resource Links */}
            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Helpful Resources</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-blue-600 hover:underline flex items-center gap-2">
                    <Pill className="w-4 h-4" /> National Cancer Institute Breast Cancer Information
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline flex items-center gap-2">
                    <HeartPulse className="w-4 h-4" /> American Cancer Society Support Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline flex items-center gap-2">
                    <Shield className="w-4 h-4" /> Breast Cancer Treatment Guidelines
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline flex items-center gap-2">
                    <Activity className="w-4 h-4" /> Clinical Trials Search Tool
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-pink-50 rounded-lg p-6 mb-8">
              <div className="mb-4">
                <h3 className="text-sm font-bold text-pink-800 uppercase tracking-wide mb-2">BREAST CANCER UPDATES</h3>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Stay Informed About Treatment Advances</h4>
                <p className="text-gray-700 text-sm">
                  Get the latest research updates, treatment options, and support resources delivered to your inbox.
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

            {/* Support Groups */}
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Find Support</h3>
              <p className="text-gray-700 mb-4">
                Connecting with others who understand your experience can be invaluable during treatment.
              </p>
              <button className="w-full bg-white border border-pink-600 text-pink-600 hover:bg-pink-50 font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                Find Local Support Groups
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}