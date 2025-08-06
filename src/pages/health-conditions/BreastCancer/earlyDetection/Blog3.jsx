"use client"

import { useEffect, useState } from "react"
import { User, Calendar, AlertCircle, CheckCircle, ChevronRight } from "lucide-react"

export default function BreastSelfExamGuide() {
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

  const tabs = ["Overview", "Step-by-Step", "When to Do It", "Limitations", "FAQ"]

  return (
    <div className="min-h-screen bg-white pt-20 md:pt-32">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header Section */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                How to Perform a Breast Self-Exam: A Complete Guide
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
                A breast self-exam is a screening technique you can do at home to check for breast lumps, changes, or abnormalities. 
                While not a substitute for clinical exams or mammograms, it helps you become familiar with your breast tissue.
              </p>

              {/* Main Image */}
              <div className="mb-8">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=400&fit=crop"
                  alt="Woman performing breast self-exam"
                  className="w-full h-auto rounded-lg shadow-lg object-cover"
                />
              </div>

              {/* Key Facts Box */}
              <div className="bg-pink-50 border-l-4 border-pink-400 p-4 mb-8 rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-pink-600" />
                  Key Facts About Breast Self-Exams
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-pink-600 mt-0.5 flex-shrink-0" />
                    <span>About 40% of diagnosed breast cancers are detected by women who feel a lump</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-pink-600 mt-0.5 flex-shrink-0" />
                    <span>Best performed 3-5 days after your period ends when breasts are least likely to be swollen or tender</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-pink-600 mt-0.5 flex-shrink-0" />
                    <span>Should be done monthly in combination with regular clinical exams</span>
                  </li>
                </ul>
              </div>

              {/* Overview Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Breast Self-Exams Matter</h2>
                <p className="text-gray-700 mb-4">
                  Breast self-exams (BSE) are an important way to detect early signs of breast cancer. When performed 
                  regularly, they help you become familiar with how your breasts normally look and feel so you can more 
                  easily notice any changes.
                </p>
                <p className="text-gray-700 mb-4">
                  According to the <a href="#" className="text-blue-600 hover:underline">American Cancer Society</a>, 
                  women should be familiar with how their breasts normally look and feel and report any changes to their 
                  healthcare provider right away.
                </p>
                
                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">What You're Looking For</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>New lumps or hard knots in the breast or underarm area</li>
                    <li>Unusual swelling, warmth, redness, or darkening</li>
                    <li>Change in breast size or shape</li>
                    <li>Dimpling, puckering, or bulging of the skin</li>
                    <li>Nipple changes (inversion, pain, rash, discharge)</li>
                    <li>Persistent pain in one spot</li>
                  </ul>
                </div>

                <p className="text-gray-700 mb-6">
                  Remember that most breast lumps (about 80%) are benign (non-cancerous), but any new or unusual finding 
                  should be evaluated by a healthcare professional.
                </p>
              </section>

              {/* Step-by-Step Guide */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Step-by-Step Breast Self-Exam Guide</h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {/* Visual Inspection */}
                  <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <span className="bg-pink-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">1</span>
                      Visual Inspection
                    </h3>
                    <ol className="list-decimal list-inside text-gray-700 space-y-2 pl-1">
                      <li>Stand topless in front of a mirror with shoulders straight and arms on hips</li>
                      <li>Look for changes in size, shape, color, or visible distortion</li>
                      <li>Check for any skin changes like dimpling, puckering, or redness</li>
                      <li>Raise arms overhead and look for the same changes</li>
                      <li>Examine nipples for any discharge, scaling, or inversion</li>
                    </ol>
                  </div>

                  {/* Manual Inspection */}
                  <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <span className="bg-pink-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">2</span>
                      Manual Inspection (Standing)
                    </h3>
                    <ol className="list-decimal list-inside text-gray-700 space-y-2 pl-1">
                      <li>Use the pads (not tips) of your middle three fingers</li>
                      <li>With light, medium, and firm pressure, examine entire breast</li>
                      <li>Move in circular motions about the size of a quarter</li>
                      <li>Follow a pattern (vertical strips, circles, or wedges)</li>
                      <li>Don't forget underarm and collarbone areas</li>
                    </ol>
                  </div>
                </div>

                {/* Lying Down Section */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="bg-pink-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">3</span>
                    Manual Inspection (Lying Down)
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Breast tissue spreads evenly when lying down, making it easier to feel for abnormalities:
                  </p>
                  <ol className="list-decimal list-inside text-gray-700 space-y-2 pl-1">
                    <li>Lie down on your back with a pillow under right shoulder</li>
                    <li>Place right arm behind your head</li>
                    <li>Use left hand to examine right breast using same circular motions</li>
                    <li>Repeat on opposite side</li>
                    <li>Check nipples for discharge by gently squeezing</li>
                  </ol>
                </div>

                {/* Pressure Guide Table */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Understanding Pressure Levels</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pressure Level</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Depth Reached</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">What You Feel</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Light</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Just beneath skin</td>
                          <td className="px-6 py-4 text-sm text-gray-500">Skin and superficial tissue</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Medium</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Mid-breast tissue</td>
                          <td className="px-6 py-4 text-sm text-gray-500">Most of the breast tissue</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Firm</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Deep tissue</td>
                          <td className="px-6 py-4 text-sm text-gray-500">Tissue near chest wall</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Common Findings */}
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Common Normal Findings</h3>
                  <p className="text-gray-700 mb-3">
                    Many women have naturally lumpy or uneven breast tissue (called fibrocystic breasts). 
                    These normal lumps often:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Feel rubbery and moveable</li>
                    <li>Change with menstrual cycle</li>
                    <li>Are tender or painful</li>
                    <li>Appear in both breasts</li>
                  </ul>
                </div>
              </section>

              {/* When to Perform Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">When to Perform Breast Self-Exams</h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {/* Timing */}
                  <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">For Menstruating Women</h3>
                    <p className="text-gray-700 mb-4">
                      The best time is 3-5 days after your period ends when breasts are least likely to be swollen or tender.
                    </p>
                    <p className="text-gray-700">
                      If your cycles are irregular, choose the same day each month (e.g., the 1st of every month).
                    </p>
                  </div>

                  {/* Post-Menopausal */}
                  <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">For Post-Menopausal Women</h3>
                    <p className="text-gray-700 mb-4">
                      Choose the same date each month (e.g., the 15th of every month) since you no longer have menstrual cycles.
                    </p>
                    <p className="text-gray-700">
                      Consider setting a monthly reminder on your phone or calendar.
                    </p>
                  </div>
                </div>

                {/* Frequency Recommendations */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Recommended Frequency</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age Group</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Self-Exam</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Clinical Exam</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mammogram</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">20s-30s</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Monthly</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Every 3 years</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Not routine</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">40+</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Monthly</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Yearly</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Yearly or as recommended</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">High Risk*</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Monthly</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Every 6-12 months</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">As recommended (may include MRI)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    *High risk includes family history, genetic mutations (BRCA), previous breast cancer, etc.
                  </p>
                </div>
              </section>

              {/* Limitations Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding the Limitations</h2>
                
                <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Important Considerations</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Self-exams cannot detect all breast cancers</li>
                    <li>They are not a substitute for clinical exams or mammograms</li>
                    <li>Many breast cancers are found through imaging before they can be felt</li>
                    <li>False positives may lead to unnecessary anxiety and testing</li>
                  </ul>
                </div>

                <p className="text-gray-700 mb-4">
                  According to the <a href="#" className="text-blue-600 hover:underline">National Breast Cancer Foundation</a>, 
                  breast self-exams should be part of a three-part approach:
                </p>
                <ol className="list-decimal list-inside text-gray-700 space-y-2 mb-6 ml-4">
                  <li>Monthly self-exams</li>
                  <li>Regular clinical breast exams by a healthcare provider</li>
                  <li>Mammograms as recommended based on age and risk factors</li>
                </ol>
              </section>

              {/* FAQ Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                
                <div className="space-y-4">
                  {/* FAQ Item 1 */}
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <button className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-50">
                      <h3 className="text-lg font-medium text-gray-900">What if I find a lump?</h3>
                      <ChevronRight className="w-5 h-5 text-gray-500 transform transition-transform" />
                    </button>
                    <div className="p-4 pt-0 text-gray-700 border-t border-gray-200">
                      <p>
                        Don't panic—most lumps are benign. However, you should contact your healthcare provider 
                        to evaluate any new lump that doesn't go away after your next menstrual cycle (if you're 
                        still menstruating) or any persistent change you notice.
                      </p>
                    </div>
                  </div>

                  {/* FAQ Item 2 */}
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <button className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-50">
                      <h3 className="text-lg font-medium text-gray-900">Do men need to do breast self-exams?</h3>
                      <ChevronRight className="w-5 h-5 text-gray-500 transform transition-transform" />
                    </button>
                    <div className="p-4 pt-0 text-gray-700 border-t border-gray-200">
                      <p>
                        Yes, men can get breast cancer too (though it's much rarer). Men with a family history 
                        of breast cancer or other risk factors should be aware of changes in their breast tissue 
                        and discuss any concerns with their doctor.
                      </p>
                    </div>
                  </div>

                  {/* FAQ Item 3 */}
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <button className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-50">
                      <h3 className="text-lg font-medium text-gray-900">What if my breasts are always lumpy?</h3>
                      <ChevronRight className="w-5 h-5 text-gray-500 transform transition-transform" />
                    </button>
                    <div className="p-4 pt-0 text-gray-700 border-t border-gray-200">
                      <p>
                        Many women have fibrocystic breasts that are naturally lumpy. The key is to learn what's 
                        normal for you so you can detect new changes. If you're unsure what you're feeling, ask 
                        your healthcare provider to help you understand your breast tissue during your next exam.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Final Takeaways */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Takeaways</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Do's */}
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      Do's
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Perform monthly exams at the same time in your cycle</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Use a systematic approach to cover all breast tissue</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Note any changes and report them promptly</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Combine with regular clinical exams and mammograms</span>
                      </li>
                    </ul>
                  </div>

                  {/* Don'ts */}
                  <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 text-red-600" />
                      Don'ts
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>Don't panic if you find a lump—most are benign</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>Don't rely solely on self-exams for cancer detection</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>Don't examine during your period when breasts may be tender</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>Don't ignore persistent changes hoping they'll go away</span>
                      </li>
                    </ul>
                  </div>
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
                        Dr. Sarah Johnson, MD, OB-GYN
                      </a>
                    </p>
                    <p className="text-sm text-gray-600 mb-1">
                      — Written by{" "}
                      <a href="#" className="text-blue-600 hover:underline font-medium">
                        Emily Carter, Women's Health Specialist
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

              {/* Downloadable Guide */}
              <div className="bg-pink-50 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Downloadable Self-Exam Guide</h3>
                <p className="text-gray-700 text-sm mb-4">
                  Get our free step-by-step visual guide to performing breast self-exams correctly.
                </p>
                <button className="w-full bg-pink-600 hover:bg-pink-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                  DOWNLOAD GUIDE
                </button>
              </div>

              {/* Reminder Signup */}
              <div className="bg-blue-50 rounded-lg p-6 mb-8">
                <div className="mb-4">
                  <h3 className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-2">MONTHLY REMINDER</h3>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Never Forget Your Self-Exam</h4>
                  <p className="text-gray-700 text-sm">
                    Sign up for our free monthly reminder service to help establish your self-exam routine.
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
                    SIGN UP FOR REMINDERS
                  </button>
                </form>

                <p className="text-xs text-gray-600 mt-3">
                  We'll never share your email. Unsubscribe anytime.
                </p>
              </div>

              {/* Related Resources */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Related Resources</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ChevronRight className="w-4 h-4" />
                      Understanding Mammogram Results
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ChevronRight className="w-4 h-4" />
                      Breast Cancer Risk Factors
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ChevronRight className="w-4 h-4" />
                      Genetic Testing for Breast Cancer
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ChevronRight className="w-4 h-4" />
                      Healthy Lifestyle for Breast Health
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