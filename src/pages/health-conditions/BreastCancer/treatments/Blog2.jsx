"use client"

import { useEffect, useState } from "react"
import { User, Calendar, ClipboardList, HeartPulse, AlertCircle, ChevronRight } from "lucide-react"

export default function OncologistQuestionsGuide() {
  const [email, setEmail] = useState("")
  const [activeTab, setActiveTab] = useState("Before Treatment")

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

  const tabs = ["Before Treatment", "During Treatment", "After Treatment", "Support"]

  return (
    <div className="min-h-screen bg-white pt-20 md:pt-32">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header Section */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Questions to Ask Your Oncologist Before, During, and After Treatment
              </h1>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                This list of questions and tips can help you feel more prepared the next time you speak with your cancer care team.
              </p>

              {/* Navigation Tabs */}
              <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-200">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                      activeTab === tab
                        ? "border-blue-500 text-blue-600"
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
                  src="/doctor-patient-discussion.jpg"
                  alt="Doctor and patient having a discussion about treatment options"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>

              {/* Key Takeaways */}
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <ClipboardList className="w-5 h-5 text-blue-600" />
                  Key Takeaways
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Prepare questions in advance and bring someone to appointments</li>
                  <li>Understand your diagnosis, treatment options, and potential side effects</li>
                  <li>Keep track of symptoms and questions between visits</li>
                  <li>Discuss follow-up care and long-term monitoring after treatment</li>
                  <li>Ask about support services for you and your family</li>
                </ul>
              </div>

              {/* Introduction */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why These Questions Matter</h2>
                <p className="text-gray-700 mb-4">
                  A cancer diagnosis can feel overwhelming, and it's common to forget important questions during medical appointments. Being prepared with specific questions can help you:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                  <li>Better understand your diagnosis and treatment options</li>
                  <li>Actively participate in decisions about your care</li>
                  <li>Manage side effects and symptoms more effectively</li>
                  <li>Plan for life during and after treatment</li>
                  <li>Reduce anxiety by knowing what to expect</li>
                </ul>
                <p className="text-gray-700 mb-6">
                  Consider bringing a notebook or using your phone to record answers during appointments. Many patients find it helpful to bring a family member or friend to important visits.
                </p>
              </section>

              {/* Before Treatment Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <HeartPulse className="w-6 h-6 text-blue-600" />
                  Before Treatment Begins
                </h2>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Understanding Your Diagnosis</h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">What type of cancer do I have?</p>
                      <p className="text-gray-700">Where is it located? Has it spread?</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">What is the stage of my cancer?</p>
                      <p className="text-gray-700">What does this mean for my prognosis?</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">What biomarkers or genetic tests are recommended?</p>
                      <p className="text-gray-700">How will these results affect my treatment options?</p>
                    </div>
                  </li>
                </ul>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Treatment Options</h3>
                <div className="overflow-x-auto mb-8">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Question</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Follow-up</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">What are all my treatment options?</td>
                        <td className="px-4 py-4 text-sm text-gray-700">Including standard treatments and clinical trials</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Which do you recommend and why?</td>
                        <td className="px-4 py-4 text-sm text-gray-700">What are the success rates for my specific case?</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">What is the goal of treatment?</td>
                        <td className="px-4 py-4 text-sm text-gray-700">Cure, control, or symptom relief?</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Preparing for Treatment</h3>
                <div className="bg-gray-50 rounded-lg p-6 mb-8">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">How should I prepare physically and emotionally for treatment?</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Will I need to make lifestyle changes before starting treatment?</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Should I consider fertility preservation options?</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">What financial considerations should I be aware of?</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* During Treatment Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <AlertCircle className="w-6 h-6 text-orange-500" />
                  During Treatment
                </h2>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Managing Treatment</h3>
                <ul className="grid md:grid-cols-2 gap-4 mb-8">
                  <li className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-2">Treatment Schedule</h4>
                    <p className="text-gray-700">How often will I receive treatment? How long will each session last?</p>
                  </li>
                  <li className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-2">Side Effects</h4>
                    <p className="text-gray-700">What are the most common side effects? Which ones require immediate medical attention?</p>
                  </li>
                  <li className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-2">Monitoring Progress</h4>
                    <p className="text-gray-700">How will we know if the treatment is working? What tests will be done?</p>
                  </li>
                  <li className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-2">Daily Life</h4>
                    <p className="text-gray-700">Can I work during treatment? What about exercise and other activities?</p>
                  </li>
                </ul>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Emergency Situations</h3>
                <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-8">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">What symptoms should prompt me to call your office immediately?</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Who should I contact after hours or on weekends?</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">When should I go to the emergency room versus calling your office?</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* After Treatment Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">After Treatment Completes</h2>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Follow-up Care</h3>
                <div className="mb-8">
                  <p className="text-gray-700 mb-4">
                    After completing treatment, you'll enter a survivorship phase that requires ongoing monitoring. Important questions include:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-4 ml-4 space-y-2">
                    <li>How often will I need follow-up appointments and what will they involve?</li>
                    <li>What tests will be done to check for recurrence?</li>
                    <li>What long-term side effects might I experience?</li>
                    <li>How will we monitor for secondary cancers or other late effects?</li>
                  </ul>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Survivorship Care Plan</h3>
                <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-8">
                  <p className="text-gray-700 mb-3">
                    Ask your oncologist for a survivorship care plan that includes:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">A summary of your treatments</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Recommended follow-up schedule</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Signs of recurrence to watch for</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Recommendations for healthy living</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Support Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Support Services</h2>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-purple-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Emotional Support</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <ChevronRight className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Do you recommend any support groups or counseling services?</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Are there resources for my family members?</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Practical Support</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <ChevronRight className="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Are there social workers who can help with insurance or financial concerns?</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">What resources are available for transportation or lodging during treatment?</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Nutrition and Wellness</h3>
                <p className="text-gray-700 mb-4">
                  Many cancer centers offer integrative medicine services. Consider asking about:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                  <li>Nutrition counseling specific to your treatment and side effects</li>
                  <li>Oncology rehabilitation programs</li>
                  <li>Mind-body therapies like meditation or yoga</li>
                  <li>Acupuncture for symptom management</li>
                </ul>
              </section>

              {/* Final Thoughts */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>
                <p className="text-gray-700 mb-4">
                  Remember that no question is too small when it comes to your health. If you think of questions between appointments, keep a running list to bring to your next visit.
                </p>
                <p className="text-gray-700 mb-4">
                  Many oncology practices offer patient portals where you can send non-urgent questions to your care team. Don't hesitate to use this resource.
                </p>
                <p className="text-gray-700">
                  Your relationship with your oncologist is a partnership. Open communication will help ensure you receive the best possible care throughout your cancer journey.
                </p>
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
                        Dr. Sarah Johnson, MD, Oncology Specialist
                      </a>
                    </p>
                    <p className="text-sm text-gray-600 mb-1">
                      — Written by{" "}
                      <a href="#" className="text-blue-600 hover:underline font-medium">
                        Michael Chen, Patient Advocate
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

              {/* Downloadable Question List */}
              <div className="bg-blue-50 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <ClipboardList className="w-5 h-5 text-blue-600" />
                  Printable Question Checklist
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  Download our comprehensive list of questions to bring to your next oncology appointment.
                </p>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                  DOWNLOAD PDF
                </button>
              </div>

              {/* Support Resources */}
              <div className="bg-purple-50 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Support Resources</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-purple-600 hover:underline font-medium">American Cancer Society</a>
                    <p className="text-gray-700 text-sm">24/7 Cancer Helpline: 1-800-227-2345</p>
                  </li>
                  <li>
                    <a href="#" className="text-purple-600 hover:underline font-medium">CancerCare</a>
                    <p className="text-gray-700 text-sm">Free professional support services</p>
                  </li>
                  <li>
                    <a href="#" className="text-purple-600 hover:underline font-medium">Patient Advocate Foundation</a>
                    <p className="text-gray-700 text-sm">Help with insurance and financial issues</p>
                  </li>
                </ul>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-teal-50 rounded-lg p-6 mb-8">
                <div className="mb-4">
                  <h3 className="text-sm font-bold text-teal-800 uppercase tracking-wide mb-2">CANCER SUPPORT NEWSLETTER</h3>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Stay informed on your journey</h4>
                  <p className="text-gray-700 text-sm">
                    Get the latest information on treatments, side effect management, and survivorship.
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

              {/* Related Articles */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Related Articles</h3>
                <ul className="space-y-4">
                  <li>
                    <a href="#" className="text-blue-600 hover:underline font-medium">Managing Chemotherapy Side Effects</a>
                    <p className="text-gray-700 text-sm">Practical tips for common challenges</p>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:underline font-medium">Understanding Cancer Staging</a>
                    <p className="text-gray-700 text-sm">What the numbers and letters mean</p>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:underline font-medium">Navigating Insurance for Cancer Care</a>
                    <p className="text-gray-700 text-sm">Maximizing your coverage</p>
                  </li>
                </ul>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}