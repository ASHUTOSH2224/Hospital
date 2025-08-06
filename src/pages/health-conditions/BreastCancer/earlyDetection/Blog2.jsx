"use client"

import { useEffect, useState } from "react"
import { User, Calendar, AlertCircle, HeartPulse, Stethoscope, ShieldCheck } from "lucide-react"

export default function BreastCancerGuide() {
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

  const tabs = ["Overview", "Screening", "Diagnostic", "Risk Factors", "Prevention"]

  return (
    <div className="min-h-screen bg-white pt-20 md:pt-32">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header Section */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Breast Cancer Tests: What You Need to Know About Your Breast Health
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
                Early detection of breast cancer through various screening and diagnostic tests can significantly improve 
                treatment outcomes. Understanding your options empowers you to make informed decisions about your breast health.
              </p>

              {/* Main Image */}
              <div className="mb-8">
                <img
                  src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&h=400&fit=crop"
                  alt="Woman consulting with doctor about breast health"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <p className="text-sm text-gray-500 mt-2">Regular breast cancer screening can save lives</p>
              </div>

              {/* Key Facts Box */}
              <div className="bg-pink-50 border-l-4 border-pink-400 p-4 mb-8">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-pink-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-pink-800 mb-2">Key Facts About Breast Cancer</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>1 in 8 women will develop breast cancer in their lifetime</li>
                      <li>Early detection increases 5-year survival rate to 99%</li>
                      <li>Mammograms can detect tumors up to 2 years before they can be felt</li>
                      <li>Men can also get breast cancer (about 1% of all cases)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Overview Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Breast Cancer Screening</h2>
                
                <p className="text-gray-700 mb-4">
                  Breast cancer screening involves checking a woman's breasts for cancer before there are signs or symptoms. 
                  The goal is to find cancer early, when it's easier to treat. Screening can't prevent breast cancer, but it 
                  can help find it early when it's most treatable.
                </p>
                
                <p className="text-gray-700 mb-6">
                  There are several types of breast cancer screening tests, each with different benefits and limitations. 
                  Your doctor can help you understand which tests are right for you based on your age, family history, 
                  and other risk factors.
                </p>

                {/* Screening Methods Table */}
                <div className="mb-8 overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead className="bg-pink-50">
                      <tr>
                        <th className="py-3 px-4 text-left font-semibold text-pink-700 border-b">Test</th>
                        <th className="py-3 px-4 text-left font-semibold text-pink-700 border-b">Purpose</th>
                        <th className="py-3 px-4 text-left font-semibold text-pink-700 border-b">Recommended Age/Frequency</th>
                        <th className="py-3 px-4 text-left font-semibold text-pink-700 border-b">Accuracy</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-gray-50">
                        <td className="py-3 px-4 border-b font-medium">Mammogram</td>
                        <td className="py-3 px-4 border-b">Detect tumors too small to feel</td>
                        <td className="py-3 px-4 border-b">40+ annually or biennially</td>
                        <td className="py-3 px-4 border-b">87% sensitive</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="py-3 px-4 border-b font-medium">Clinical Breast Exam</td>
                        <td className="py-3 px-4 border-b">Physical examination by doctor</td>
                        <td className="py-3 px-4 border-b">20+ every 1-3 years</td>
                        <td className="py-3 px-4 border-b">50-60% sensitive</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="py-3 px-4 border-b font-medium">Breast MRI</td>
                        <td className="py-3 px-4 border-b">High-risk screening</td>
                        <td className="py-3 px-4 border-b">High-risk women annually</td>
                        <td className="py-3 px-4 border-b">95% sensitive</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="py-3 px-4 border-b font-medium">Ultrasound</td>
                        <td className="py-3 px-4 border-b">Supplement to mammogram</td>
                        <td className="py-3 px-4 border-b">As needed</td>
                        <td className="py-3 px-4 border-b">83% sensitive</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                  <h3 className="text-xl font-bold text-blue-800 mb-3 flex items-center gap-2">
                    <HeartPulse className="w-5 h-5" />
                    Why Early Detection Matters
                  </h3>
                  <p className="text-gray-700 mb-3">
                    When breast cancer is detected early (localized stage), the 5-year relative survival rate is 99%. 
                    For regional spread (to nearby lymph nodes), the rate drops to 86%. With distant metastasis, it's 29%.
                  </p>
                  <p className="text-gray-700">
                    Screening mammograms can detect tumors when they're as small as 2-3 millimeters - long before they 
                    can be felt during a breast exam.
                  </p>
                </div>
              </section>

              {/* Screening Tests Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Detailed Look at Screening Tests</h2>

                {/* Mammography */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Stethoscope className="w-5 h-5 text-pink-600" />
                    1. Mammography
                  </h3>
                  <p className="text-gray-700 mb-4">
                    A mammogram is an X-ray picture of the breast used to look for early signs of breast cancer. 
                    Regular mammograms are the best tests doctors have to find breast cancer early, sometimes up to 
                    three years before it can be felt.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-bold text-gray-800 mb-2">Types of Mammograms</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li><strong>Screening mammogram:</strong> Routine check for women with no symptoms</li>
                        <li><strong>Diagnostic mammogram:</strong> More detailed images when symptoms exist</li>
                        <li><strong>3D mammogram (tomosynthesis):</strong> Creates multiple slices for better visualization</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-bold text-gray-800 mb-2">What to Expect</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Takes about 20 minutes total</li>
                        <li>Each breast compressed between two plates</li>
                        <li>Some discomfort is normal but should be brief</li>
                        <li>Results usually within 10 days</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                    <h4 className="font-bold text-yellow-800 mb-2">New Guidelines (2024)</h4>
                    <p className="text-gray-700">
                      The U.S. Preventive Services Task Force now recommends biennial screening mammography for women 
                      aged 40 to 74 years. Women with higher risk may need earlier or more frequent screening.
                    </p>
                  </div>
                </div>

                {/* Breast Ultrasound */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Stethoscope className="w-5 h-5 text-pink-600" />
                    2. Breast Ultrasound
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Ultrasound uses sound waves to produce images of structures deep within the body. It's often used 
                    as a follow-up test after an abnormal mammogram or to evaluate breast lumps in younger women (under 30).
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-4">
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Best For:</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Distinguishing solid masses from fluid-filled cysts</li>
                        <li>Evaluating dense breast tissue</li>
                        <li>Guiding needle biopsies</li>
                        <li>Examining younger women's breasts</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Limitations:</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Not a substitute for mammography</li>
                        <li>May miss small calcifications</li>
                        <li>Operator-dependent results</li>
                        <li>Higher false-positive rate than mammograms</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Breast MRI */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Stethoscope className="w-5 h-5 text-pink-600" />
                    3. Breast MRI (Magnetic Resonance Imaging)
                  </h3>
                  <p className="text-gray-700 mb-4">
                    MRI uses magnets and radio waves to create detailed images of the breast. It's more sensitive than 
                    mammograms but also has a higher false-positive rate. MRI is generally reserved for high-risk women.
                  </p>
                  
                  <div className="bg-purple-50 p-4 rounded-lg mb-4">
                    <h4 className="font-bold text-purple-800 mb-2">Who Should Consider Breast MRI?</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Women with BRCA1 or BRCA2 gene mutation</li>
                      <li>Women with 20-25% or greater lifetime risk of breast cancer</li>
                      <li>Women with strong family history but untested for BRCA</li>
                      <li>Evaluation of implant integrity</li>
                      <li>Pre-surgical planning for known cancer</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Diagnostic Tests Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Diagnostic Tests for Breast Cancer</h2>
                
                <p className="text-gray-700 mb-6">
                  When screening tests find something suspicious, or if you have symptoms like a lump or nipple discharge, 
                  your doctor will recommend diagnostic tests to determine if cancer is present.
                </p>

                {/* Biopsy */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Biopsy Procedures</h3>
                  <p className="text-gray-700 mb-4">
                    A biopsy removes cells or tissue from the suspicious area to be examined under a microscope. 
                    This is the only definitive way to diagnose breast cancer.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-bold text-gray-800 mb-2">Fine Needle Aspiration</h4>
                      <p className="text-gray-700 text-sm mb-2">Uses thin needle to withdraw fluid/cells</p>
                      <p className="text-gray-600 text-xs">Quick, minimal discomfort</p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-bold text-gray-800 mb-2">Core Needle Biopsy</h4>
                      <p className="text-gray-700 text-sm mb-2">Larger needle removes tissue samples</p>
                      <p className="text-gray-600 text-xs">More accurate than FNA</p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-bold text-gray-800 mb-2">Surgical Biopsy</h4>
                      <p className="text-gray-700 text-sm mb-2">Removes part or all of lump</p>
                      <p className="text-gray-600 text-xs">Done when other biopsies inconclusive</p>
                    </div>
                  </div>
                </div>

                {/* Genetic Testing */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Genetic Testing for Breast Cancer Risk</h3>
                  <p className="text-gray-700 mb-4">
                    About 5-10% of breast cancers are hereditary, caused by abnormal genes passed from parent to child. 
                    Genetic testing can identify mutations in genes like BRCA1 and BRCA2 that significantly increase risk.
                  </p>
                  
                  <div className="bg-green-50 p-4 rounded-lg mb-4">
                    <h4 className="font-bold text-green-800 mb-2">Who Should Consider Genetic Testing?</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Personal history of breast cancer at age ≤45</li>
                      <li>Triple-negative breast cancer at ≤60</li>
                      <li>Two or more breast cancers in same person</li>
                      <li>Ashkenazi Jewish ancestry with breast cancer</li>
                      <li>Family history of BRCA mutation</li>
                      <li>Male breast cancer in family</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Risk Factors Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Your Risk Factors</h2>
                
                <p className="text-gray-700 mb-6">
                  While all women are at risk for breast cancer, certain factors can increase your likelihood of developing it. 
                  Some risk factors you can't change, but others you can influence through lifestyle choices.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Unchangeable Risk Factors</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li><strong>Gender:</strong> 100 times more common in women</li>
                      <li><strong>Age:</strong> 2/3 of cases occur after age 55</li>
                      <li><strong>Genetics:</strong> BRCA1/BRCA2 mutations</li>
                      <li><strong>Family history:</strong> Especially mother, sister, daughter</li>
                      <li><strong>Personal history:</strong> Previous breast cancer</li>
                      <li><strong>Race:</strong> Higher rates in white women</li>
                      <li><strong>Dense breast tissue:</strong> 2-4 times higher risk</li>
                      <li><strong>Early menstruation:</strong> Before age 12</li>
                      <li><strong>Late menopause:</strong> After age 55</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Modifiable Risk Factors</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li><strong>Physical inactivity:</strong> Regular exercise reduces risk</li>
                      <li><strong>Being overweight:</strong> Especially after menopause</li>
                      <li><strong>Alcohol consumption:</strong> Risk increases with intake</li>
                      <li><strong>Hormone therapy:</strong> Long-term estrogen-progestin use</li>
                      <li><strong>Reproductive history:</strong> No children or late first pregnancy</li>
                      <li><strong>Not breastfeeding:</strong> Protective effect decreases risk</li>
                      <li><strong>Smoking:</strong> Especially long-term, heavy smoking</li>
                      <li><strong>Night shift work:</strong> Possible link to circadian disruption</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-pink-50 p-4 rounded-lg">
                  <h3 className="text-xl font-bold text-pink-800 mb-3">Calculating Your Risk</h3>
                  <p className="text-gray-700 mb-3">
                    Several tools can help estimate your breast cancer risk. The most widely used is the 
                    <a href="#" className="text-blue-600 hover:underline ml-1">Gail Model</a>, which considers:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 mb-3">
                    <li>Age</li>
                    <li>Reproductive history</li>
                    <li>Family history</li>
                    <li>Previous biopsy results</li>
                    <li>Race/ethnicity</li>
                  </ul>
                  <p className="text-gray-700">
                    For women with strong family histories, the <a href="#" className="text-blue-600 hover:underline">Tyrer-Cuzick model</a> 
                    may be more appropriate as it includes more detailed family history.
                  </p>
                </div>
              </section>

              {/* Prevention Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Reducing Your Breast Cancer Risk</h2>
                
                <p className="text-gray-700 mb-6">
                  While you can't change some risk factors like genetics or age, research shows lifestyle changes can 
                  significantly impact breast cancer risk. The American Cancer Society estimates that about 42% of cancer 
                  cases and 45% of cancer deaths in the U.S. are linked to modifiable risk factors.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-blue-50 p-5 rounded-lg">
                    <h3 className="text-xl font-bold text-blue-800 mb-3 flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5" />
                      Proven Prevention Strategies
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li><strong>Maintain healthy weight:</strong> Especially after menopause</li>
                      <li><strong>Exercise regularly:</strong> 150+ minutes moderate activity weekly</li>
                      <li><strong>Limit alcohol:</strong> No more than 1 drink per day</li>
                      <li><strong>Breastfeed if possible:</strong> Longer duration increases benefit</li>
                      <li><strong>Eat nutritious diet:</strong> Focus on plants and whole foods</li>
                      <li><strong>Avoid smoking:</strong> Direct link to breast cancer</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-5 rounded-lg">
                    <h3 className="text-xl font-bold text-green-800 mb-3 flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5" />
                      For High-Risk Women
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li><strong>Chemoprevention:</strong> Tamoxifen, raloxifene, aromatase inhibitors</li>
                      <li><strong>Preventive surgery:</strong> Prophylactic mastectomy (90% risk reduction)</li>
                      <li><strong>Increased surveillance:</strong> MRI + mammogram screening</li>
                      <li><strong>Genetic counseling:</strong> For inherited gene mutations</li>
                      <li><strong>Clinical trials:</strong> Emerging prevention options</li>
                    </ul>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Diet and Breast Cancer Prevention</h3>
                  <p className="text-gray-700 mb-4">
                    While no single food can prevent breast cancer, research suggests certain dietary patterns may help 
                    reduce risk:
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="border border-gray-200 rounded-lg p-4 text-center">
                      <div className="bg-pink-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-pink-600 font-bold">✓</span>
                      </div>
                      <h4 className="font-bold text-gray-800 mb-1">Foods to Emphasize</h4>
                      <ul className="text-gray-700 text-sm">
                        <li>Cruciferous vegetables</li>
                        <li>Berries</li>
                        <li>Fatty fish</li>
                        <li>Whole grains</li>
                        <li>Legumes</li>
                      </ul>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4 text-center">
                      <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-red-600 font-bold">✗</span>
                      </div>
                      <h4 className="font-bold text-gray-800 mb-1">Foods to Limit</h4>
                      <ul className="text-gray-700 text-sm">
                        <li>Processed meats</li>
                        <li>Refined carbs</li>
                        <li>Trans fats</li>
                        <li>Sugary drinks</li>
                        <li>Alcohol</li>
                      </ul>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4 text-center">
                      <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-blue-600 font-bold">?</span>
                      </div>
                      <h4 className="font-bold text-gray-800 mb-1">Unclear Evidence</h4>
                      <ul className="text-gray-700 text-sm">
                        <li>Soy foods</li>
                        <li>Dairy products</li>
                        <li>Coffee</li>
                        <li>Organic foods</li>
                        <li>Supplements</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Conclusion */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">The Bottom Line on Breast Health</h2>
                
                <p className="text-gray-700 mb-6">
                  Being proactive about your breast health involves understanding your personal risk factors, following 
                  recommended screening guidelines, and making lifestyle choices that may help reduce your risk. While 
                  breast cancer can't always be prevented, early detection through appropriate testing dramatically 
                  improves outcomes.
                </p>

                <div className="bg-pink-50 p-5 rounded-lg">
                  <h3 className="text-xl font-bold text-pink-800 mb-3">Your Breast Health Action Plan</h3>
                  <ol className="list-decimal list-inside text-gray-700 space-y-2">
                    <li><strong>Know your risk:</strong> Talk to your doctor about personal/family history</li>
                    <li><strong>Get screened:</strong> Follow guidelines for your age and risk level</li>
                    <li><strong>Be breast aware:</strong> Report any changes to your doctor promptly</li>
                    <li><strong>Make healthy choices:</strong> Exercise, maintain weight, limit alcohol</li>
                    <li><strong>Consider genetic counseling:</strong> If you have strong family history</li>
                    <li><strong>Discuss prevention options:</strong> If you're at high risk</li>
                  </ol>
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
                        Emily Chen, Health Writer
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

              {/* Screening Guidelines Card */}
              <div className="bg-pink-50 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-bold text-pink-800 uppercase tracking-wide mb-2">SCREENING GUIDELINES</h3>
                <h4 className="text-xl font-bold text-gray-900 mb-3">When to Get Screened</h4>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-pink-400 pl-4">
                    <h5 className="font-bold text-gray-800">Average Risk Women</h5>
                    <p className="text-gray-700 text-sm">Mammogram every 1-2 years starting at age 40</p>
                  </div>
                  <div className="border-l-4 border-pink-400 pl-4">
                    <h5 className="font-bold text-gray-800">Higher Risk Women</h5>
                    <p className="text-gray-700 text-sm">May start earlier with mammogram + MRI</p>
                  </div>
                  <div className="border-l-4 border-pink-400 pl-4">
                    <h5 className="font-bold text-gray-800">All Women</h5>
                    <p className="text-gray-700 text-sm">Monthly self-exams and clinical exams every 1-3 years</p>
                  </div>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-teal-50 rounded-lg p-6 mb-8">
                <div className="mb-4">
                  <h3 className="text-sm font-bold text-teal-800 uppercase tracking-wide mb-2">BREAST HEALTH NEWSLETTER</h3>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Stay informed about breast health</h4>
                  <p className="text-gray-700 text-sm">
                    Get the latest research, prevention tips, and screening reminders delivered to your inbox.
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
                    className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200"
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
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Breast Cancer Resources</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-blue-600 hover:underline flex items-start gap-2">
                      <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm">1</span>
                      <span>National Breast Cancer Foundation</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:underline flex items-start gap-2">
                      <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm">2</span>
                      <span>American Cancer Society Guidelines</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:underline flex items-start gap-2">
                      <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm">3</span>
                      <span>Breast Cancer Risk Assessment Tool</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:underline flex items-start gap-2">
                      <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm">4</span>
                      <span>Finding a Mammogram Facility</span>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Support Groups */}
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-purple-800 mb-3">Support & Community</h3>
                <p className="text-gray-700 text-sm mb-4">
                  Connect with others who understand what you're going through.
                </p>
                <button className="w-full bg-white border border-purple-300 text-purple-700 font-medium py-2 px-4 rounded-lg hover:bg-purple-100 transition-colors">
                  Find Support Groups
                </button>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}