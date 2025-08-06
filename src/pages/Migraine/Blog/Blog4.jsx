"use client"

import { useEffect, useState } from "react"
import { Heart, User, Calendar, Link2, Phone, MapPin, Briefcase, Users, BookOpen } from "lucide-react"

export default function MigraineSupportResources() {
  const [email, setEmail] = useState("")
  const [activeTab, setActiveTab] = useState("Support Groups")

  const handleEmailSubmit = (e) => {
    e.preventDefault()
    console.log("Email submitted:", email)
    setEmail("")
  }
            useEffect(() => {
                window.scrollTo(0, 0)
            }, [])

  const tabs = ["Support Groups", "Clinical Resources", "Financial Aid", "Workplace", "Daily Life"]

  return (
    <div className="min-h-screen bg-white pt-20 md:pt-32">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header Section */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Migraine Support Resources: Finding Help and Community
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
                Living with migraines can feel isolating, but you're not alone. This comprehensive guide connects you with 
                support groups, clinical resources, financial assistance programs, and practical tools to help manage 
                migraine symptoms and improve your quality of life.
              </p>

              {/* Main Image */}
              <div className="mb-8">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Woman holding her head during migraine"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>

              {/* Article Description */}
              <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-8">
                <p className="text-gray-700">
                  <span className="text-purple-600 font-medium">Did you know?</span> Approximately 39 million Americans 
                  experience migraines, yet many suffer in silence. Connecting with support resources can significantly 
                  improve treatment outcomes and emotional wellbeing.
                </p>
              </div>

              <p className="text-gray-700 mb-8">
                This guide covers national and local resources, online communities, financial assistance options, and 
                strategies for managing migraines at work and in daily life.
              </p>
            </div>

            {/* Support Groups Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Migraine Support Groups and Communities</h2>

              <p className="text-gray-700 mb-6">
                Connecting with others who understand migraine struggles can provide emotional support, practical tips, 
                and reduce feelings of isolation. Here are several ways to find your migraine community:
              </p>

              {/* National Organizations */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Users className="w-6 h-6 text-purple-600" /> National Organizations
                </h3>
                
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden mb-6">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Organization</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Services</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="font-medium text-gray-900">Migraine Research Foundation</div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-gray-700">Research funding, educational resources, support group listings</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <a href="#" className="text-purple-600 hover:underline flex items-center gap-1">
                            <Link2 className="w-4 h-4" /> migrainehelp.org
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="font-medium text-gray-900">American Migraine Foundation</div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-gray-700">Find a doctor tool, patient guides, advocacy</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <a href="#" className="text-purple-600 hover:underline flex items-center gap-1">
                            <Link2 className="w-4 h-4" /> americanmigrainefoundation.org
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="font-medium text-gray-900">National Headache Foundation</div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-gray-700">Support groups, educational materials, provider directory</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <a href="#" className="text-purple-600 hover:underline flex items-center gap-1">
                            <Phone className="w-4 h-4" /> 1-888-NHF-5552
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Online Communities */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Online Communities and Forums</h3>
                <p className="text-gray-700 mb-4">
                  When in-person meetings aren't possible, these digital communities provide 24/7 support:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                  <li>
                    <span className="font-medium">Migraine.com Community</span> - Large active forum with sub-groups for 
                    specific migraine types and treatments
                  </li>
                  <li>
                    <span className="font-medium">r/migraine on Reddit</span> - 150k+ members sharing experiences and advice
                  </li>
                  <li>
                    <span className="font-medium">MyMigraineTeam</span> - Social network specifically for migraine patients
                  </li>
                  <li>
                    <span className="font-medium">Facebook Groups</span> - Search for "migraine support" to find private 
                    groups with thousands of members
                  </li>
                </ul>
              </div>

              {/* Finding Local Support */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-purple-600" /> Finding Local Support Groups
                </h3>
                <p className="text-gray-700 mb-4">
                  Many hospitals and neurology clinics host monthly migraine support groups. To find one near you:
                </p>
                <ol className="list-decimal list-inside text-gray-700 mb-6 ml-4 space-y-2">
                  <li>Contact local neurology departments or headache clinics</li>
                  <li>Check with your regional hospital's patient education department</li>
                  <li>Search Meetup.com for migraine groups in your area</li>
                  <li>Ask your neurologist or primary care provider for recommendations</li>
                  <li>Contact national organizations for local chapter information</li>
                </ol>
              </div>
            </section>

            {/* Clinical Resources Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Clinical Resources and Specialized Care</h2>

              <p className="text-gray-700 mb-6">
                Accessing specialized migraine care can significantly improve treatment outcomes. Here's how to find the 
                right clinical support:
              </p>

              {/* Headache Specialists */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Finding Headache Specialists</h3>
                <p className="text-gray-700 mb-4">
                  Board-certified headache specialists have advanced training in migraine treatment. Resources to find one:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h4 className="font-bold text-lg text-gray-900 mb-2">United Council for Neurologic Subspecialties (UCNS)</h4>
                    <p className="text-gray-700 mb-3">Search for UCNS-certified headache specialists by location</p>
                    <a href="#" className="text-purple-600 hover:underline inline-flex items-center gap-1">
                      <Link2 className="w-4 h-4" /> ucns.org
                    </a>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h4 className="font-bold text-lg text-gray-900 mb-2">American Headache Society</h4>
                    <p className="text-gray-700 mb-3">Find a member provider search tool</p>
                    <a href="#" className="text-purple-600 hover:underline inline-flex items-center gap-1">
                      <Link2 className="w-4 h-4" /> americanheadachesociety.org
                    </a>
                  </div>
                </div>
              </div>

              {/* Headache Clinics */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Headache and Migraine Clinics</h3>
                <p className="text-gray-700 mb-4">
                  Comprehensive headache clinics offer multidisciplinary care including:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                  <li>Neurology specialists</li>
                  <li>Pain management</li>
                  <li>Physical therapy</li>
                  <li>Behavioral health</li>
                  <li>Nutrition counseling</li>
                  <li>Alternative therapies (acupuncture, biofeedback)</li>
                </ul>
                
                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                  <h4 className="font-bold text-lg text-gray-900 mb-2">Notable Migraine Clinics in the U.S.</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <MapPin className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Johns Hopkins Headache Center</p>
                        <p className="text-sm text-gray-600">Baltimore, MD</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <MapPin className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Jefferson Headache Center</p>
                        <p className="text-sm text-gray-600">Philadelphia, PA</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <MapPin className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Diamond Headache Clinic</p>
                        <p className="text-sm text-gray-600">Chicago, IL</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Telemedicine Options */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Telemedicine Options</h3>
                <p className="text-gray-700 mb-4">
                  When travel is difficult during migraine episodes, these platforms connect you with headache specialists:
                </p>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="border p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Cove</h4>
                    <p className="text-sm text-gray-600 mb-3">Online migraine care with prescription delivery</p>
                    <a href="#" className="text-purple-600 text-sm hover:underline">withcove.com</a>
                  </div>
                  <div className="border p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Nurx</h4>
                    <p className="text-sm text-gray-600 mb-3">Migraine treatment online</p>
                    <a href="#" className="text-purple-600 text-sm hover:underline">nurx.com</a>
                  </div>
                  <div className="border p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Amwell</h4>
                    <p className="text-sm text-gray-600 mb-3">Neurology telemedicine visits</p>
                    <a href="#" className="text-purple-600 text-sm hover:underline">amwell.com</a>
                  </div>
                </div>
              </div>
            </section>

            {/* Financial Assistance Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Financial Assistance for Migraine Treatment</h2>

              <p className="text-gray-700 mb-6">
                Migraine treatments can be expensive, but numerous programs exist to help with costs:
              </p>

              {/* Medication Assistance */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Medication Assistance Programs</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-200">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="py-2 px-4 border-b text-left">Medication</th>
                        <th className="py-2 px-4 border-b text-left">Manufacturer Program</th>
                        <th className="py-2 px-4 border-b text-left">Savings</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-2 px-4 border-b">Aimovig</td>
                        <td className="py-2 px-4 border-b">Amgen First Step</td>
                        <td className="py-2 px-4 border-b">$0 copay for eligible patients</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b">Emgality</td>
                        <td className="py-2 px-4 border-b">Lilly Cares</td>
                        <td className="py-2 px-4 border-b">Free medication for qualifying patients</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b">Nurtec ODT</td>
                        <td className="py-2 px-4 border-b">Nurtec OneSource</td>
                        <td className="py-2 px-4 border-b">$0 copay cards available</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b">Ubrelvy</td>
                        <td className="py-2 px-4 border-b">Allergan Patient Assistance</td>
                        <td className="py-2 px-4 border-b">Free trial and savings program</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-gray-600 mt-3">
                  *Always check manufacturer websites for current program details and eligibility requirements
                </p>
              </div>

              {/* Insurance Navigation */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Insurance Navigation Help</h3>
                <p className="text-gray-700 mb-4">
                  These organizations can help with insurance appeals and prior authorization processes:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                  <li>
                    <span className="font-medium">Patient Advocate Foundation</span> - Free case managers help resolve 
                    insurance issues
                  </li>
                  <li>
                    <span className="font-medium">NeedyMeds</span> - Database of patient assistance programs
                  </li>
                  <li>
                    <span className="font-medium">RxHope</span> - Assistance with medication access
                  </li>
                </ul>
              </div>
            </section>

            {/* Workplace Accommodations Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-2">
                <Briefcase className="w-6 h-6 text-purple-600" /> Workplace Accommodations
              </h2>

              <p className="text-gray-700 mb-6">
                Migraines are recognized as a disability under the Americans with Disabilities Act (ADA). Reasonable 
                accommodations can help you maintain employment during migraine episodes.
              </p>

              {/* Common Accommodations */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Common Workplace Accommodations</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Environmental Adjustments</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                      <li>Reduced fluorescent lighting</li>
                      <li>Private workspace with controlled lighting</li>
                      <li>Permission to wear sunglasses indoors</li>
                      <li>Reduced noise environment</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Scheduling Flexibility</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                      <li>Modified work schedule</li>
                      <li>Flexible start/end times</li>
                      <li>Permission to take breaks when needed</li>
                      <li>Telework options</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Requesting Accommodations */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">How to Request Accommodations</h3>
                <ol className="list-decimal list-inside text-gray-700 mb-6 ml-4 space-y-2">
                  <li>Get documentation from your healthcare provider</li>
                  <li>Submit a written request to HR (sample templates available from Job Accommodation Network)</li>
                  <li>Work with employer to determine reasonable accommodations</li>
                  <li>Follow up in writing with any agreements</li>
                </ol>
              </div>
            </section>

            {/* Daily Life Management Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Daily Life Management Resources</h2>

              {/* Migraine Tracking Apps */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Migraine Tracking Apps</h3>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="border p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Migraine Buddy</h4>
                    <p className="text-sm text-gray-600 mb-3">Comprehensive tracking with weather and trigger analysis</p>
                    <div className="flex gap-2">
                      <span className="text-xs bg-gray-100 px-2 py-1 rounded">iOS</span>
                      <span className="text-xs bg-gray-100 px-2 py-1 rounded">Android</span>
                    </div>
                  </div>
                  <div className="border p-4 rounded-lg">
                    <h4 className="font-bold mb-2">N1-Headache</h4>
                    <p className="text-sm text-gray-600 mb-3">Developed by headache specialists</p>
                    <div className="flex gap-2">
                      <span className="text-xs bg-gray-100 px-2 py-1 rounded">iOS</span>
                      <span className="text-xs bg-gray-100 px-2 py-1 rounded">Android</span>
                    </div>
                  </div>
                  <div className="border p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Curelator Headache</h4>
                    <p className="text-sm text-gray-600 mb-3">Personalized trigger identification</p>
                    <div className="flex gap-2">
                      <span className="text-xs bg-gray-100 px-2 py-1 rounded">iOS</span>
                      <span className="text-xs bg-gray-100 px-2 py-1 rounded">Android</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Preparedness */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Emergency Preparedness Kit</h3>
                <p className="text-gray-700 mb-4">
                  Create a "migraine emergency kit" to keep at home, work, and in your car:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2 text-lg">Essentials</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                      <li>Prescription medications</li>
                      <li>Over-the-counter pain relievers</li>
                      <li>Anti-nausea medication</li>
                      <li>Eye mask</li>
                      <li>Ear plugs</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 text-lg">Comfort Items</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                      <li>Ice pack or cooling head wrap</li>
                      <li>Peppermint or lavender oil</li>
                      <li>Electrolyte packets</li>
                      <li>Bland snacks</li>
                      <li>Small towel</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">You're Not Alone</h2>
              <p className="text-gray-700 mb-4">
                Living with migraines presents daily challenges, but support is available. Connecting with others who 
                understand your experience can make all the difference in managing this condition.
              </p>
              <p className="text-gray-700 mb-4">
                Remember that seeking help is a sign of strength, not weakness. Whether through support groups, clinical 
                resources, workplace accommodations, or financial assistance programs, these resources exist to help you 
                live your fullest life despite migraines.
              </p>
              <p className="text-gray-700">
                The migraine community is strong, compassionate, and continually advocating for better treatments and 
                understanding. We encourage you to reach out and take advantage of the resources available to you.
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
                    <a href="#" className="text-purple-600 hover:underline">
                      Medically reviewed
                    </a>{" "}
                    by{" "}
                    <a href="#" className="text-purple-600 hover:underline font-medium">
                      Dr. Sarah Thompson, MD, FAHS
                    </a>
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    — Written by{" "}
                    <a href="#" className="text-purple-600 hover:underline font-medium">
                      Migraine Support Team
                    </a>
                  </p>
                  <p className="text-sm text-gray-600 flex items-center gap-1">
                    — <Calendar className="w-3 h-3" />
                    <a href="#" className="text-purple-600 hover:underline">
                      Updated on June 15, 2024
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Emergency Resources Box */}
            <div className="bg-red-50 border-l-4 border-red-400 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Emergency Resources</h3>
              <p className="text-sm text-gray-700 mb-4">
                If you're experiencing a sudden, severe headache unlike any you've had before, seek immediate medical attention.
              </p>
              <div className="space-y-2">
                <a href="#" className="flex items-center gap-2 text-red-600 hover:underline">
                  <Phone className="w-4 h-4" /> National Suicide Prevention Lifeline: 988
                </a>
                <a href="#" className="flex items-center gap-2 text-red-600 hover:underline">
                  <Phone className="w-4 h-4" /> Crisis Text Line: Text HOME to 741741
                </a>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-purple-50 rounded-lg p-6 mb-8">
              <div className="mb-4">
                <h3 className="text-sm font-bold text-purple-800 uppercase tracking-wide mb-2">Migraine Newsletter</h3>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Monthly Support & Tips</h4>
                <p className="text-gray-700 text-sm">
                  Get the latest migraine research, treatment updates, and community stories delivered monthly.
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

            {/* Recommended Books */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-purple-600" /> Recommended Reading
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-purple-600 hover:underline">"The Migraine Brain" by Carolyn Bernstein</a>
                </li>
                <li>
                  <a href="#" className="text-purple-600 hover:underline">"Heal Your Headache" by David Buchholz</a>
                </li>
                <li>
                  <a href="#" className="text-purple-600 hover:underline">"The Dizzy Cook" by Alicia Wolf</a>
                </li>
                <li>
                  <a href="#" className="text-purple-600 hover:underline">"Living Well with Migraine Disease" by Teri Robert</a>
                </li>
              </ul>
            </div>

            {/* Upcoming Events */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Upcoming Migraine Events</h3>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <p className="font-medium">Migraine World Summit</p>
                  <p className="text-sm text-gray-600">March 10-16, 2025 | Virtual Event</p>
                </div>
                <div className="border-b pb-4">
                  <p className="font-medium">Headache on the Hill</p>
                  <p className="text-sm text-gray-600">February 4-5, 2025 | Washington, DC</p>
                </div>
                <div>
                  <p className="font-medium">Migraine Awareness Month</p>
                  <p className="text-sm text-gray-600">June 2025 | Nationwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}