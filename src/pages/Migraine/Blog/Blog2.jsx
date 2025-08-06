"use client"

import { useEffect, useState } from "react"
import { Users, User, Calendar, BookOpen, ClipboardList, HeartPulse, MessageSquare, Plus } from "lucide-react"

export default function MigraineCareTeamGuide() {
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

  const tabs = ["Overview", "Specialists", "Communication", "Treatment", "Resources"]

  return (
    <div className="min-h-screen bg-white pt-20 md:pt-32">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header Section */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-5 h-5 text-purple-600" />
                <span className="text-sm font-medium text-purple-600">Care Team</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Understanding Your Migraine Care Team: Who's Who in Your Treatment Journey
              </h1>

              {/* Navigation Tabs */}
              <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-200">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                      activeTab === tab
                        ? "border-purple-500 text-purple-600"
                        : "border-transparent text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Intro Text */}
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Building the right migraine care team is crucial for effective treatment. This guide helps you understand 
                the different specialists involved in migraine management and how they can work together to provide 
                comprehensive care tailored to your specific needs.
              </p>

              {/* Main Image */}
              <div className="mb-8">
                <img
                  src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Medical team discussing patient care"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <p className="text-sm text-gray-500 mt-2">A multidisciplinary team approach often yields the best results for migraine management</p>
              </div>

              {/* Key Insight Box */}
              <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-8">
                <p className="text-gray-700">
                  <span className="text-purple-600 font-medium">Did you know?</span> Patients who work with a dedicated 
                  headache specialist report 50% fewer migraine days compared to those receiving only general care.
                </p>
              </div>
            </div>

            {/* Overview Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Why a Specialized Care Team Matters</h2>
              
              <p className="text-gray-700 mb-4">
                Migraines are complex neurological disorders that often require a team approach for optimal management. 
                Unlike general healthcare, specialized migraine care addresses the multifaceted nature of the condition, 
                including:
              </p>
              
              <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                <li>Neurological aspects (brain function and pain pathways)</li>
                <li>Triggers and lifestyle factors</li>
                <li>Medication management and prevention</li>
                <li>Mental health components (stress, anxiety, depression)</li>
                <li>Comorbid conditions (sleep disorders, digestive issues)</li>
              </ul>
              
              <p className="text-gray-700 mb-6">
                The average migraine patient sees <span className="font-semibold">3-5 different specialists</span> before 
                finding an effective treatment plan. Understanding each professional's role can help you navigate this 
                process more efficiently.
              </p>
              
              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Plus className="w-5 h-5 text-blue-600" />
                  The Migraine Care Team Advantage
                </h3>
                <p className="text-gray-700 mb-4">
                  Research shows that patients working with coordinated migraine care teams experience:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <li className="flex items-start gap-2">
                    <span className="bg-blue-100 text-blue-800 rounded-full p-1">
                      <HeartPulse className="w-4 h-4" />
                    </span>
                    <span>40% reduction in migraine frequency</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-blue-100 text-blue-800 rounded-full p-1">
                      <ClipboardList className="w-4 h-4" />
                    </span>
                    <span>Better medication management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-blue-100 text-blue-800 rounded-full p-1">
                      <MessageSquare className="w-4 h-4" />
                    </span>
                    <span>Improved communication about symptoms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-blue-100 text-blue-800 rounded-full p-1">
                      <BookOpen className="w-4 h-4" />
                    </span>
                    <span>More comprehensive treatment options</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Specialists Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Your Migraine Care Team: Roles and Responsibilities</h2>
              
              <div className="space-y-8">
                {/* Neurologist */}
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-purple-100 px-6 py-4">
                    <h3 className="text-xl font-bold text-gray-900">Neurologist</h3>
                    <p className="text-purple-800">Primary specialist for migraine diagnosis and treatment</p>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-4">
                      Neurologists are physicians specialized in disorders of the nervous system. For migraine care, they:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mb-4 ml-4 space-y-2">
                      <li>Confirm migraine diagnosis and rule out other conditions</li>
                      <li>Prescribe preventive and abortive medications</li>
                      <li>Monitor treatment effectiveness and adjust as needed</li>
                      <li>Order and interpret diagnostic tests (MRI, CT scans)</li>
                      <li>Provide referrals to other specialists when needed</li>
                    </ul>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm font-medium text-gray-700 mb-2">
                        When to see a neurologist:
                      </p>
                      <ul className="list-disc list-inside text-sm text-gray-600 ml-4 space-y-1">
                        <li>If you have 4+ migraine days per month</li>
                        <li>When over-the-counter medications stop working</li>
                        <li>If you experience unusual symptoms (aura, vision changes)</li>
                        <li>When migraines significantly impact your quality of life</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Headache Specialist */}
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-purple-100 px-6 py-4">
                    <h3 className="text-xl font-bold text-gray-900">Headache Specialist</h3>
                    <p className="text-purple-800">Advanced expertise in migraine and headache disorders</p>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-4">
                      Headache specialists are neurologists with additional training in headache medicine. They offer:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mb-4 ml-4 space-y-2">
                      <li>Expertise in complex or treatment-resistant cases</li>
                      <li>Access to newer treatments and clinical trials</li>
                      <li>Specialized procedures (nerve blocks, Botox injections)</li>
                      <li>Comprehensive headache management plans</li>
                    </ul>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm font-medium text-gray-700 mb-2">
                          Consider seeing a headache specialist if:
                        </p>
                        <ul className="list-disc list-inside text-sm text-gray-600 ml-4 space-y-1">
                          <li>You've tried 3+ preventive medications without success</li>
                          <li>You have chronic migraines (15+ headache days/month)</li>
                          <li>Your migraines have become more frequent/severe</li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm font-medium text-gray-700 mb-2">
                          Certification bodies:
                        </p>
                        <ul className="list-disc list-inside text-sm text-gray-600 ml-4 space-y-1">
                          <li>United Council for Neurologic Subspecialties (UCNS)</li>
                          <li>American Headache Society (AHS)</li>
                          <li>National Headache Foundation (NHF)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Other Specialists Table */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Additional Team Members</h3>
                  <p className="text-gray-700 mb-4">
                    Depending on your specific needs, your care team may include these professionals:
                  </p>
                  
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Specialist</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">When Needed</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Pain Management Doctor</td>
                          <td className="px-6 py-4 text-sm text-gray-500">Manages chronic pain, performs nerve blocks</td>
                          <td className="px-6 py-4 text-sm text-gray-500">For medication-resistant pain or medication overuse</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Psychiatrist/Psychologist</td>
                          <td className="px-6 py-4 text-sm text-gray-500">Addresses mental health aspects, stress management</td>
                          <td className="px-6 py-4 text-sm text-gray-500">For anxiety, depression, or stress-related triggers</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Physical Therapist</td>
                          <td className="px-6 py-4 text-sm text-gray-500">Addresses neck/back issues, posture correction</td>
                          <td className="px-6 py-4 text-sm text-gray-500">For cervicogenic headaches or muscle tension</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Dietitian</td>
                          <td className="px-6 py-4 text-sm text-gray-500">Identifies food triggers, ensures proper nutrition</td>
                          <td className="px-6 py-4 text-sm text-gray-500">For suspected food triggers or deficiencies</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Sleep Specialist</td>
                          <td className="px-6 py-4 text-sm text-gray-500">Addresses sleep disorders affecting migraines</td>
                          <td className="px-6 py-4 text-sm text-gray-500">For insomnia, sleep apnea, or irregular sleep patterns</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>

            {/* Communication Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Effective Communication With Your Care Team</h2>
              
              <p className="text-gray-700 mb-6">
                Clear communication is essential for getting the most from your migraine care. Follow these strategies:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-purple-600" />
                    Before Your Appointment
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Keep a detailed migraine diary for 1-2 months</li>
                    <li>Note frequency, duration, intensity, and triggers</li>
                    <li>List all medications (including supplements)</li>
                    <li>Prepare specific questions in order of priority</li>
                    <li>Bring previous test results or imaging</li>
                  </ul>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <ClipboardList className="w-5 h-5 text-purple-600" />
                    During Your Appointment
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Be honest about symptoms and lifestyle</li>
                    <li>Ask for clarification if you don't understand</li>
                    <li>Take notes or bring someone to help remember</li>
                    <li>Discuss treatment goals and expectations</li>
                    <li>Request written instructions for complex plans</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Questions to Ask Your Migraine Specialist</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">About Diagnosis:</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                      <li>What type of migraine do I have?</li>
                      <li>Are there any tests I should consider?</li>
                      <li>Could another condition be causing my symptoms?</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">About Treatment:</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                      <li>What are the benefits/risks of this treatment?</li>
                      <li>How long before I see results?</li>
                      <li>What side effects should I watch for?</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">About Prevention:</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                      <li>What lifestyle changes would help most?</li>
                      <li>Should I consider preventive medications?</li>
                      <li>Are there complementary therapies to try?</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Treatment Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Coordinating Your Treatment Plan</h2>
              
              <p className="text-gray-700 mb-6">
                With multiple specialists involved, coordination is key. Follow these steps to ensure seamless care:
              </p>
              
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0 bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center text-purple-600 font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Designate a Primary Migraine Doctor</h3>
                    <p className="text-gray-700">
                      Typically your neurologist or headache specialist should oversee your overall treatment plan. 
                      Ensure all other providers send reports to this doctor to maintain comprehensive records.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0 bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center text-purple-600 font-bold text-xl">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Create a Shared Medical Record</h3>
                    <p className="text-gray-700 mb-2">
                      Options include:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                      <li>Paper copies of important test results and treatment plans</li>
                      <li>Electronic health record access through patient portals</li>
                      <li>Personal health apps that consolidate information</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0 bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center text-purple-600 font-bold text-xl">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Schedule Team Communication</h3>
                    <p className="text-gray-700">
                      For complex cases, request care team meetings (in-person or virtual) where all providers can 
                      discuss your case together. Some clinics offer multidisciplinary headache programs with 
                      built-in coordination.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Treatment Plan Checklist</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-2">
                    <input type="checkbox" className="mt-1" />
                    <span className="text-gray-700">Clear diagnosis documented</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <input type="checkbox" className="mt-1" />
                    <span className="text-gray-700">Acute treatment plan for attacks</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <input type="checkbox" className="mt-1" />
                    <span className="text-gray-700">Preventive strategy if needed</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <input type="checkbox" className="mt-1" />
                    <span className="text-gray-700">Lifestyle modification guidance</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <input type="checkbox" className="mt-1" />
                    <span className="text-gray-700">Follow-up schedule established</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <input type="checkbox" className="mt-1" />
                    <span className="text-gray-700">Emergency plan for severe attacks</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Resources Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Additional Resources</h2>
              
              <div className="space-y-6">
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-gray-100 px-6 py-4">
                    <h3 className="text-xl font-bold text-gray-900">Finding Qualified Providers</h3>
                  </div>
                  <div className="p-6">
                    <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                      <li>
                        <a href="#" className="text-blue-600 hover:underline">American Migraine Foundation Provider Finder</a>
                      </li>
                      <li>
                        <a href="#" className="text-blue-600 hover:underline">National Headache Foundation Directory</a>
                      </li>
                      <li>
                        <a href="#" className="text-blue-600 hover:underline">UCNS Certified Headache Specialists</a>
                      </li>
                      <li>
                        University hospital headache clinics often have multidisciplinary teams
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-gray-100 px-6 py-4">
                    <h3 className="text-xl font-bold text-gray-900">Patient Support Organizations</h3>
                  </div>
                  <div className="p-6">
                    <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                      <li>
                        <a href="#" className="text-blue-600 hover:underline">American Migraine Foundation</a> - Education and research
                      </li>
                      <li>
                        <a href="#" className="text-blue-600 hover:underline">Migraine Research Foundation</a> - Funding research
                      </li>
                      <li>
                        <a href="#" className="text-blue-600 hover:underline">Chronic Migraine Awareness</a> - Support groups
                      </li>
                      <li>
                        <a href="#" className="text-blue-600 hover:underline">Alliance for Headache Disorders Advocacy</a> - Policy work
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-gray-100 px-6 py-4">
                    <h3 className="text-xl font-bold text-gray-900">Recommended Reading</h3>
                  </div>
                  <div className="p-6">
                    <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                      <li>"The Migraine Brain" by David Buchholz</li>
                      <li>"Heal Your Headache" by David Buchholz</li>
                      <li>"Migraine" by Oliver Sacks</li>
                      <li>"The End of Migraines" by Alexander Mauskop</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Final Thoughts</h2>
              <p className="text-gray-700 mb-4">
                Building the right migraine care team is one of the most important steps toward effective management. 
                Remember that you are the central member of this team - your observations, experiences, and preferences 
                should guide all treatment decisions.
              </p>
              <p className="text-gray-700 mb-4">
                Don't hesitate to seek second opinions if your current treatment isn't working. The field of headache 
                medicine evolves rapidly, and new treatments become available regularly. A good care team will welcome 
                your questions and collaborate with you to find the best solutions.
              </p>
              <p className="text-gray-700">
                With the right specialists supporting you and clear communication between all parties, you can develop 
                a comprehensive approach to reduce migraine frequency, severity, and impact on your life.
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
                    <a href="#" className="text-blue-600 hover:underline">
                      Medically reviewed
                    </a>{" "}
                    by{" "}
                    <a href="#" className="text-blue-600 hover:underline font-medium">
                      Dr. Sarah Thompson, MD, FAHS
                    </a>
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    — Written by{" "}
                    <a href="#" className="text-blue-600 hover:underline font-medium">
                      Michael Chen
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
            <div className="bg-purple-50 rounded-lg p-6 mb-8">
              <div className="mb-4">
                <h3 className="text-sm font-bold text-purple-800 uppercase tracking-wide mb-2">MIGRAINE NEWSLETTER</h3>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Living Well With Migraine</h4>
                <p className="text-gray-700 text-sm">
                  Get the latest treatment options, lifestyle tips, and community support delivered to your inbox.
                </p>
              </div>

              <form onSubmit={handleEmailSubmit} className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200"
                >
                  SUBSCRIBE
                </button>
              </form>

              <p className="text-xs text-gray-600 mt-3">
                Your{" "}
                <a href="#" className="text-purple-600 hover:underline">
                  privacy
                </a>{" "}
                is important to us
              </p>
            </div>

            {/* Quick Links */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-blue-600 hover:underline flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    Migraine Tracking Apps
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline flex items-center gap-2">
                    <ClipboardList className="w-4 h-4" />
                    Treatment Guidelines
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline flex items-center gap-2">
                    <HeartPulse className="w-4 h-4" />
                    Clinical Trials
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Support Groups
                  </a>
                </li>
              </ul>
            </div>

            {/* Related Articles */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Related Articles</h3>
              <div className="space-y-4">
                <div>
                  <a href="#" className="font-medium text-gray-900 hover:text-purple-600">
                    Navigating Insurance for Migraine Care
                  </a>
                  <p className="text-sm text-gray-600">Understanding coverage for specialists and treatments</p>
                </div>
                <div>
                  <a href="#" className="font-medium text-gray-900 hover:text-purple-600">
                    Emerging Migraine Treatments
                  </a>
                  <p className="text-sm text-gray-600">What's new in migraine therapy options</p>
                </div>
                <div>
                  <a href="#" className="font-medium text-gray-900 hover:text-purple-600">
                    Creating Your Migraine Emergency Plan
                  </a>
                  <p className="text-sm text-gray-600">When and where to seek urgent care</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}