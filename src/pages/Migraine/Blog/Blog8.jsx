"use client"

import { useEffect, useState } from "react"
import { User, Calendar, ClipboardList, Clock, AlertCircle, CheckCircle, ChevronRight } from "lucide-react"

export default function NeurologistConsultationGuide() {
  const [email, setEmail] = useState("")
  const [activeTab, setActiveTab] = useState("Preparation")

  const handleEmailSubmit = (e) => {
    e.preventDefault()
    console.log("Email submitted:", email)
    setEmail("")
  }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

  const tabs = ["Preparation", "During Visit", "Follow-up", "Specialists"]

  return (
    <div className="min-h-screen bg-white pt-20 md:pt-32">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header Section */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Neurologist Consultations: Making the Most of Your Headache Specialist Appointments
              </h1>

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

              {/* Intro Text */}
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Consulting a neurologist for chronic headaches or migraines can be daunting. This guide will help you prepare effectively,
                communicate your symptoms clearly, and get the most value from your specialist appointments.
              </p>

              {/* Main Image */}
              <div className="mb-8">
                <img
                  src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Neurologist consulting with patient about headaches"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>

              {/* Article Description */}
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
                <p className="text-gray-700">
                  <span className="text-blue-600 font-medium">Key Insight:</span> Patients who come prepared to neurology appointments 
                  receive more accurate diagnoses and more effective treatment plans 73% faster than those who don't prepare.
                </p>
              </div>

              <p className="text-gray-700 mb-8">
                This comprehensive guide covers everything from pre-appointment preparation to follow-up care, helping you navigate 
                the complex world of headache disorders with confidence.
              </p>
            </div>

            {/* Preparation Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Preparing for Your Neurologist Visit</h2>

              {/* 1. Track Your Symptoms */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Track Your Symptoms Systematically</h3>
                <p className="text-gray-700 mb-4">
                  Neurologists rely heavily on patient-reported symptoms to diagnose headache disorders. Maintain a detailed headache diary for at least 
                  <span className="font-semibold"> 2-4 weeks </span> before your appointment. Record:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 ml-4 space-y-2">
                  <li><span className="font-semibold">Frequency:</span> How many headache days per month</li>
                  <li><span className="font-semibold">Duration:</span> How long each headache lasts</li>
                  <li><span className="font-semibold">Intensity:</span> Pain scale (1-10)</li>
                  <li><span className="font-semibold">Location:</span> Where the pain occurs (one side, both, front, back)</li>
                  <li><span className="font-semibold">Characteristics:</span> Throbbing, stabbing, pressure, etc.</li>
                  <li><span className="font-semibold">Triggers:</span> Stress, foods, weather changes, hormones</li>
                  <li><span className="font-semibold">Associated symptoms:</span> Nausea, light/sound sensitivity, aura</li>
                  <li><span className="font-semibold">Medication response:</span> What helps and how much</li>
                </ul>
                
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <ClipboardList className="w-5 h-5 text-blue-600" />
                    Sample Headache Diary Entry
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="py-2 px-4 border-b text-left">Date</th>
                          <th className="py-2 px-4 border-b text-left">Time</th>
                          <th className="py-2 px-4 border-b text-left">Pain Level</th>
                          <th className="py-2 px-4 border-b text-left">Duration</th>
                          <th className="py-2 px-4 border-b text-left">Medication Taken</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="py-2 px-4 border-b">06/15/2025</td>
                          <td className="py-2 px-4 border-b">2:30 PM</td>
                          <td className="py-2 px-4 border-b">7/10</td>
                          <td className="py-2 px-4 border-b">4 hours</td>
                          <td className="py-2 px-4 border-b">Sumatriptan 50mg (partial relief)</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="py-2 px-4 border-b">06/18/2025</td>
                          <td className="py-2 px-4 border-b">9:00 AM</td>
                          <td className="py-2 px-4 border-b">5/10</td>
                          <td className="py-2 px-4 border-b">8 hours</td>
                          <td className="py-2 px-4 border-b">Ibuprofen 400mg (no relief)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* 2. Medical History */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Organize Your Medical History</h3>
                <p className="text-gray-700 mb-4">
                  Compile a comprehensive medical history to bring to your appointment. This should include:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-gray-900">Personal Medical History</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Previous diagnoses</li>
                      <li>Hospitalizations</li>
                      <li>Surgeries</li>
                      <li>Allergies</li>
                      <li>Other chronic conditions</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-gray-900">Family Medical History</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Headaches/migraines in family</li>
                      <li>Neurological disorders</li>
                      <li>Stroke history</li>
                      <li>Mental health conditions</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 3. Medication List */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Create a Detailed Medication List</h3>
                <p className="text-gray-700 mb-4">
                  Include all current and past medications you've tried for headaches, with dosages and effectiveness. 
                  Don't forget to list:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 ml-4 space-y-1">
                  <li>Prescription medications</li>
                  <li>Over-the-counter drugs</li>
                  <li>Supplements and vitamins</li>
                  <li>Herbal remedies</li>
                  <li>Alternative treatments</li>
                </ul>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                  <div className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">
                      <span className="font-semibold">Important:</span> Include any medications that caused side effects or didn't work. 
                      This information is as valuable as knowing what did work.
                    </p>
                  </div>
                </div>
              </div>

              {/* 4. Prepare Questions */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">4. Prepare Your Questions</h3>
                <p className="text-gray-700 mb-4">
                  Neurologist appointments can be brief, so prioritize your most important questions. Consider these common concerns:
                </p>
                <div className="bg-blue-50 p-4 rounded-lg mb-4">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <ChevronRight className="w-4 h-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                      <span>What type of headache disorder do I likely have? (Migraine, tension, cluster, etc.)</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-4 h-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                      <span>What diagnostic tests might I need and why?</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-4 h-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                      <span>What are the treatment options and their pros/cons?</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-4 h-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                      <span>Are there lifestyle changes that could help?</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-4 h-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                      <span>When should I seek emergency care for headaches?</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* During Visit Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">During Your Neurologist Visit</h2>

              {/* 1. Communication Tips */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Effective Communication Strategies</h3>
                <p className="text-gray-700 mb-4">
                  Neurologists are trained to ask specific questions about your symptoms. Be prepared to describe:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-purple-800">Pain Description</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>"The pain feels like..." (throbbing, stabbing, pressure)</li>
                      <li>"It typically starts..." (location and progression)</li>
                      <li>"The intensity peaks at..." (timeframe and severity)</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-purple-800">Impact Assessment</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>"I have to stop working/studying when..."</li>
                      <li>"I miss about X days per month due to headaches"</li>
                      <li>"My sleep is affected by..."</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">
                      <span className="font-semibold">Pro Tip:</span> Use concrete examples rather than generalizations. 
                      Instead of "I get headaches often," say "I have 15 headache days per month, with 8 being severe."
                    </p>
                  </div>
                </div>
              </div>

              {/* 2. Physical Exam */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">2. What to Expect During the Physical Exam</h3>
                <p className="text-gray-700 mb-4">
                  A neurological exam typically includes assessments of:
                </p>
                <div className="overflow-x-auto mb-4">
                  <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="py-2 px-4 border-b text-left">Exam Component</th>
                        <th className="py-2 px-4 border-b text-left">Purpose</th>
                        <th className="py-2 px-4 border-b text-left">What to Expect</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-2 px-4 border-b">Cranial Nerve Testing</td>
                        <td className="py-2 px-4 border-b">Check brain function</td>
                        <td className="py-2 px-4 border-b">Following objects with eyes, facial movements</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="py-2 px-4 border-b">Reflex Testing</td>
                        <td className="py-2 px-4 border-b">Assess nervous system</td>
                        <td className="py-2 px-4 border-b">Knee/elbow reflex taps with hammer</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b">Sensory Exam</td>
                        <td className="py-2 px-4 border-b">Check nerve sensitivity</td>
                        <td className="py-2 px-4 border-b">Light touch, vibration, pinprick tests</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="py-2 px-4 border-b">Coordination Tests</td>
                        <td className="py-2 px-4 border-b">Evaluate cerebellum</td>
                        <td className="py-2 px-4 border-b">Finger-to-nose, heel-to-shin movements</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 3. Diagnostic Tests */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Understanding Potential Diagnostic Tests</h3>
                <p className="text-gray-700 mb-4">
                  While most headache diagnoses are based on history, your neurologist may order:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-bold text-lg text-gray-900 mb-2">Imaging Tests</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">MRI</span>
                        <span>Detailed brain images (no radiation)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">CT Scan</span>
                        <span>Quick brain images (uses radiation)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">MRA/CTA</span>
                        <span>Blood vessel imaging</span>
                      </li>
                    </ul>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-bold text-lg text-gray-900 mb-2">Other Tests</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">EEG</span>
                        <span>Brain wave activity (for seizure evaluation)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">Blood Tests</span>
                        <span>Check for underlying conditions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">Lumbar Puncture</span>
                        <span>Spinal fluid analysis (rare for headaches)</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  <span className="font-semibold">Note:</span> Most primary headaches (migraine, tension-type) don't require imaging unless you have:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 ml-4 space-y-1">
                  <li>Sudden severe "thunderclap" headache</li>
                  <li>Abnormal neurological exam</li>
                  <li>Headaches that worsen with Valsalva (coughing/sneezing)</li>
                  <li>New headaches after age 50</li>
                </ul>
              </div>
            </section>

            {/* Follow-up Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">After Your Appointment: Follow-up Care</h2>

              {/* 1. Treatment Plan */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Implementing Your Treatment Plan</h3>
                <p className="text-gray-700 mb-4">
                  Your neurologist will likely recommend a combination of approaches:
                </p>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-white border border-gray-200 rounded-lg shadow p-4">
                    <h4 className="font-bold text-lg text-gray-900 mb-2">Acute Treatments</h4>
                    <p className="text-gray-600 text-sm">For stopping attacks</p>
                    <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1 ml-4 text-sm">
                      <li>Triptans</li>
                      <li>NSAIDs</li>
                      <li>Anti-nausea meds</li>
                      <li>Neuromodulation devices</li>
                    </ul>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg shadow p-4">
                    <h4 className="font-bold text-lg text-gray-900 mb-2">Preventive Treatments</h4>
                    <p className="text-gray-600 text-sm">For reducing frequency</p>
                    <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1 ml-4 text-sm">
                      <li>Blood pressure meds</li>
                      <li>Antidepressants</li>
                      <li>Anti-seizure drugs</li>
                      <li>CGRP inhibitors</li>
                    </ul>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg shadow p-4">
                    <h4 className="font-bold text-lg text-gray-900 mb-2">Lifestyle Approaches</h4>
                    <p className="text-gray-600 text-sm">Complementary strategies</p>
                    <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1 ml-4 text-sm">
                      <li>Sleep hygiene</li>
                      <li>Stress management</li>
                      <li>Diet modifications</li>
                      <li>Physical therapy</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-pink-50 border-l-4 border-pink-400 p-4 mb-4">
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-pink-600 mr-2 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">
                      <span className="font-semibold">Patience Required:</span> Preventive medications often take 
                      <span className="font-semibold"> 6-8 weeks </span> to show full effect. Track your response before deciding if a treatment isn't working.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2. Medication Management */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Managing Medications Effectively</h3>
                <p className="text-gray-700 mb-4">
                  To avoid medication overuse headaches (rebound headaches), follow these guidelines:
                </p>
                <div className="overflow-x-auto mb-4">
                  <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="py-2 px-4 border-b text-left">Medication Type</th>
                        <th className="py-2 px-4 border-b text-left">Max Days/Month</th>
                        <th className="py-2 px-4 border-b text-left">Risk Level</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-2 px-4 border-b">Triptans/Ergots</td>
                        <td className="py-2 px-4 border-b">9 days</td>
                        <td className="py-2 px-4 border-b">High risk</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="py-2 px-4 border-b">NSAIDs (ibuprofen, naproxen)</td>
                        <td className="py-2 px-4 border-b">15 days</td>
                        <td className="py-2 px-4 border-b">Moderate risk</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b">Acetaminophen</td>
                        <td className="py-2 px-4 border-b">15 days</td>
                        <td className="py-2 px-4 border-b">Low risk</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="py-2 px-4 border-b">Opioids/Butalbital</td>
                        <td className="py-2 px-4 border-b">Avoid regular use</td>
                        <td className="py-2 px-4 border-b">Very high risk</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 3. Tracking Progress */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Tracking Your Progress</h3>
                <p className="text-gray-700 mb-4">
                  Continue your headache diary after starting treatment to monitor:
                </p>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-blue-800">Effectiveness Metrics</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 text-sm">
                      <li>Headache frequency reduction</li>
                      <li>Pain intensity changes</li>
                      <li>Duration of attacks</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-blue-800">Medication Response</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 text-sm">
                      <li>Time to pain relief</li>
                      <li>Side effects experienced</li>
                      <li>Doses needed per attack</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-blue-800">Functional Impact</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 text-sm">
                      <li>Work/school days missed</li>
                      <li>Social activities affected</li>
                      <li>Quality of life changes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Specialists Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">When to Consider a Headache Specialist</h2>

              <p className="text-gray-700 mb-4">
                While general neurologists can treat headaches, consider seeking a headache specialist if:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                <li>Your headaches aren't responding to standard treatments</li>
                <li>You're experiencing medication overuse headaches</li>
                <li>You have chronic migraine (15+ headache days/month)</li>
                <li>Your diagnosis is unclear or complex</li>
                <li>You need access to newer treatments (CGRP inhibitors, neuromodulation devices)</li>
              </ul>

              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Finding a Headache Specialist</h4>
                <p className="text-gray-700 mb-2">
                  Look for neurologists with additional certification in headache medicine through:
                </p>
                <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                  <li>United Council for Neurologic Subspecialties (UCNS)</li>
                  <li>American Headache Society member listing</li>
                  <li>Academic headache centers</li>
                </ul>
              </div>

              <div className="bg-green-50 border-l-4 border-green-400 p-4">
                <p className="text-gray-700">
                  <span className="font-semibold">Remember:</span> Effective headache management is often a partnership between you and your healthcare team. 
                  Being an informed, prepared patient leads to better outcomes and more productive consultations.
                </p>
              </div>
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
                      Updated on June 15, 2025
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <div className="mb-4">
                <h3 className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-2">HEADACHE RESOURCES</h3>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Get Our Free Headache Management Guide</h4>
                <p className="text-gray-700 text-sm">
                  Download our comprehensive guide to tracking and managing chronic headaches.
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
                  GET THE GUIDE
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

            {/* Quick Links */}
            <div className="bg-white border border-gray-200 rounded-lg shadow p-6 mb-8">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-blue-600 hover:underline flex items-center">
                    <ChevronRight className="w-4 h-4 mr-2" />
                    Migraine vs. Tension Headache Chart
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline flex items-center">
                    <ChevronRight className="w-4 h-4 mr-2" />
                    Headache Trigger Tracker
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline flex items-center">
                    <ChevronRight className="w-4 h-4 mr-2" />
                    Medication Overuse Warning Signs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline flex items-center">
                    <ChevronRight className="w-4 h-4 mr-2" />
                    When to Go to the ER for Headaches
                  </a>
                </li>
              </ul>
            </div>

            {/* Emergency Warning */}
            <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-lg mb-8">
              <h4 className="text-lg font-bold text-red-800 mb-2">Seek Immediate Care If You Experience:</h4>
              <ul className="list-disc list-inside text-red-700 space-y-1 ml-4">
                <li>Sudden, severe "worst headache of your life"</li>
                <li>Headache with fever, stiff neck, or rash</li>
                <li>Headache after head injury</li>
                <li>Neurological symptoms (weakness, vision loss, confusion)</li>
              </ul>
            </div>

            {/* Support Groups */}
            <div className="bg-purple-50 rounded-lg p-6">
              <h4 className="text-lg font-bold text-purple-800 mb-2">Headache Support Groups</h4>
              <p className="text-gray-700 text-sm mb-3">
                Connect with others managing chronic headache disorders:
              </p>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-purple-600 hover:underline">American Migraine Foundation</a>
                </li>
                <li>
                  <a href="#" className="text-purple-600 hover:underline">Migraine Again Community</a>
                </li>
                <li>
                  <a href="#" className="text-purple-600 hover:underline">Cluster Headache Support Group</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}