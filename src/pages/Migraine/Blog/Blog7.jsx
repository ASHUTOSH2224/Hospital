"use client"

import { useEffect, useState } from "react"
import { User, Calendar, ClipboardList, Droplet, Pill, Activity, Shield } from "lucide-react"

export default function MigraineTreatmentOptions() {
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

  const tabs = ["Overview", "Preventive", "Acute", "Alternative", "Lifestyle"]

  return (
    <div className="min-h-screen bg-white pt-20 md:pt-32">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header Section */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Migraine Treatment Options: Exploring Preventive and Acute Therapies
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
                Migraines affect over 1 billion people worldwide, with treatment options ranging from acute symptom relief to preventive therapies. Understanding your options can help manage this debilitating neurological condition.
              </p>

              {/* Main Image */}
              <div className="mb-8">
                <img
                  src="https://images.unsplash.com/photo-1576671081837-49000212a370?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Woman holding her head in pain from migraine"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>

              {/* Key Facts Box */}
              <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-8">
                <h3 className="text-lg font-bold text-purple-800 mb-2">Key Facts About Migraine Treatment</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Migraines rank as the 2nd leading cause of disability worldwide</li>
                  <li>Only about 12% of migraine sufferers use preventive medications</li>
                  <li>Early treatment during the aura phase can reduce attack severity</li>
                  <li>Combination therapies often work better than single treatments</li>
                </ul>
              </div>

              {/* Overview Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Migraine Treatment Approaches</h2>
                <p className="text-gray-700 mb-4">
                  Migraine treatment typically falls into two categories: <strong>acute</strong> (abortive) treatments taken at the onset of symptoms to stop or reduce pain, and <strong>preventive</strong> (prophylactic) treatments taken regularly to reduce frequency and severity of attacks.
                </p>
                <p className="text-gray-700 mb-6">
                  The choice between these approaches depends on migraine frequency, severity, disability level, and patient response to previous treatments. Many patients benefit from a combination of both strategies.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <div className="flex items-center gap-3 mb-3">
                      <Shield className="w-6 h-6 text-purple-600" />
                      <h3 className="text-xl font-bold text-gray-900">Preventive Treatments</h3>
                    </div>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>For frequent migraines (4+ per month)</li>
                      <li>Reduce attack frequency by 50% or more</li>
                      <li>Taken daily or monthly</li>
                      <li>Include medications, supplements, and devices</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <div className="flex items-center gap-3 mb-3">
                      <Pill className="w-6 h-6 text-purple-600" />
                      <h3 className="text-xl font-bold text-gray-900">Acute Treatments</h3>
                    </div>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>For immediate symptom relief</li>
                      <li>Most effective when taken early</li>
                      <li>Include OTC and prescription options</li>
                      <li>Should be limited to 2-3 days per week</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Preventive Treatments Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Preventive Migraine Treatments</h2>
                <p className="text-gray-700 mb-4">
                  Preventive medications are recommended when migraines significantly impact quality of life, occur frequently (4+ headache days per month), or when acute medications are ineffective or overused.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">1. FDA-Approved Preventive Medications</h3>
                
                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full bg-white border border-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Medication Class</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Examples</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Effectiveness</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Side Effects</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-700">CGRP Monoclonal Antibodies</td>
                        <td className="px-4 py-3 text-sm text-gray-700">Erenumab (Aimovig), Fremanezumab (Ajovy), Galcanezumab (Emgality)</td>
                        <td className="px-4 py-3 text-sm text-gray-700">50-75% reduction in 40-50% of patients</td>
                        <td className="px-4 py-3 text-sm text-gray-700">Injection site reactions, constipation</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-700">Beta Blockers</td>
                        <td className="px-4 py-3 text-sm text-gray-700">Propranolol, Metoprolol, Timolol</td>
                        <td className="px-4 py-3 text-sm text-gray-700">50% reduction in 50-70% of patients</td>
                        <td className="px-4 py-3 text-sm text-gray-700">Fatigue, dizziness, depression</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-700">Antidepressants</td>
                        <td className="px-4 py-3 text-sm text-gray-700">Amitriptyline, Venlafaxine</td>
                        <td className="px-4 py-3 text-sm text-gray-700">40-60% reduction</td>
                        <td className="px-4 py-3 text-sm text-gray-700">Dry mouth, drowsiness, weight gain</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-700">Anticonvulsants</td>
                        <td className="px-4 py-3 text-sm text-gray-700">Topiramate, Valproate</td>
                        <td className="px-4 py-3 text-sm text-gray-700">50% reduction in 50% of patients</td>
                        <td className="px-4 py-3 text-sm text-gray-700">Cognitive effects, tingling, weight loss</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">2. Emerging Preventive Options</h3>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-bold text-lg text-gray-900 mb-2">CGRP Small Molecule Antagonists</h4>
                    <p className="text-gray-700 mb-2">Oral alternatives to injectable CGRP blockers:</p>
                    <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                      <li>Atogepant (Qulipta)</li>
                      <li>Rimegepant (Nurtec ODT)</li>
                      <li>Ubrogepant (Ubrelvy)</li>
                    </ul>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-bold text-lg text-gray-900 mb-2">Neuromodulation Devices</h4>
                    <p className="text-gray-700 mb-2">Non-drug options that modulate nerve activity:</p>
                    <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                      <li>Cefaly (supraorbital nerve stimulator)</li>
                      <li>GammaCore (vagus nerve stimulator)</li>
                      <li>Nerivio (remote electrical neuromodulation)</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">3. Natural Preventive Options</h3>
                <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-6">
                  <p className="text-gray-700">
                    <span className="font-bold">Note:</span> Always consult your doctor before starting supplements, as they can interact with medications.
                  </p>
                </div>
                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  <div className="border border-gray-200 rounded-lg p-4 text-center">
                    <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Activity className="w-6 h-6 text-purple-600" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-1">Magnesium</h4>
                    <p className="text-sm text-gray-700">400-600mg daily of magnesium glycinate or citrate may reduce frequency</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4 text-center">
                    <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Droplet className="w-6 h-6 text-purple-600" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-1">Riboflavin (B2)</h4>
                    <p className="text-sm text-gray-700">400mg daily shown to decrease migraine days by 50% in some studies</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4 text-center">
                    <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <ClipboardList className="w-6 h-6 text-purple-600" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-1">Coenzyme Q10</h4>
                    <p className="text-sm text-gray-700">100mg 3x daily may reduce migraine frequency by 30-50%</p>
                  </div>
                </div>
              </section>

              {/* Acute Treatments Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Acute Migraine Treatments</h2>
                <p className="text-gray-700 mb-4">
                  Acute treatments are taken at migraine onset to stop or reduce symptoms. Effectiveness depends on taking the medication early in the attack, using the appropriate dose, and avoiding medication overuse (which can cause rebound headaches).
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">1. First-Line Acute Medications</h3>
                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full bg-white border border-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Medication Class</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Examples</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Best For</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Considerations</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-700">NSAIDs</td>
                        <td className="px-4 py-3 text-sm text-gray-700">Ibuprofen, Naproxen, Diclofenac</td>
                        <td className="px-4 py-3 text-sm text-gray-700">Mild-moderate attacks</td>
                        <td className="px-4 py-3 text-sm text-gray-700">GI side effects with frequent use</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-700">Triptans</td>
                        <td className="px-4 py-3 text-sm text-gray-700">Sumatriptan, Rizatriptan, Eletriptan</td>
                        <td className="px-4 py-3 text-sm text-gray-700">Moderate-severe attacks</td>
                        <td className="px-4 py-3 text-sm text-gray-700">Not for patients with cardiovascular risk</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-700">Gepants</td>
                        <td className="px-4 py-3 text-sm text-gray-700">Ubrogepant, Rimegepant</td>
                        <td className="px-4 py-3 text-sm text-gray-700">Patients who can't take triptans</td>
                        <td className="px-4 py-3 text-sm text-gray-700">Fewer side effects than triptans</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-700">Ditans</td>
                        <td className="px-4 py-3 text-sm text-gray-700">Lasmiditan</td>
                        <td className="px-4 py-3 text-sm text-gray-700">Patients with cardiovascular concerns</td>
                        <td className="px-4 py-3 text-sm text-gray-700">May cause dizziness/sedation</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">2. Combination Therapies</h3>
                <p className="text-gray-700 mb-4">
                  Some patients benefit from combining medications with different mechanisms of action:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                  <li><strong>NSAID + Triptan:</strong> Faster pain relief than either alone (e.g., sumatriptan + naproxen)</li>
                  <li><strong>Anti-nausea + Pain reliever:</strong> Metoclopramide helps absorption of analgesics</li>
                  <li><strong>Caffeine-containing combos:</strong> Can enhance analgesia but may increase rebound risk</li>
                </ul>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
                  <h4 className="font-bold text-blue-800 mb-2">When to Seek Emergency Care</h4>
                  <p className="text-gray-700">
                    Go to the ER if you experience: "Thunderclap" headache (worst headache of your life), headache with fever/stiff neck, new neurological symptoms, or headache after head injury.
                  </p>
                </div>
              </section>

              {/* Alternative Therapies Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Alternative and Complementary Therapies</h2>
                <p className="text-gray-700 mb-4">
                  Many patients find relief through non-pharmacological approaches, either alone or combined with medications:
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Non-Invasive Therapies</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                      <li><strong>Acupuncture:</strong> Shown to reduce migraine frequency in clinical trials</li>
                      <li><strong>Biofeedback:</strong> Teaches control over physiological responses to stress</li>
                      <li><strong>Cognitive Behavioral Therapy:</strong> Helps manage pain perception and stress</li>
                      <li><strong>Physical Therapy:</strong> Addresses musculoskeletal triggers</li>
                    </ul>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Emerging Treatments</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                      <li><strong>Ketamine infusion:</strong> For refractory chronic migraine</li>
                      <li><strong>Psychedelics:</strong> Microdosing research showing promise</li>
                      <li><strong>Oxygen therapy:</strong> For cluster headache variants</li>
                      <li><strong>Stellate ganglion block:</strong> For certain refractory cases</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Lifestyle Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Lifestyle Modifications for Migraine Management</h2>
                <p className="text-gray-700 mb-4">
                  While medications are crucial for many patients, lifestyle factors significantly impact migraine frequency and severity. Consistent habits can reduce attack triggers:
                </p>

                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Sleep Hygiene</h3>
                    <ul className="list-disc list-inside text-gray-700 text-sm ml-4 space-y-1">
                      <li>Consistent sleep/wake times</li>
                      <li>7-8 hours nightly</li>
                      <li>Dark, cool bedroom</li>
                      <li>No screens before bed</li>
                    </ul>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Dietary Factors</h3>
                    <ul className="list-disc list-inside text-gray-700 text-sm ml-4 space-y-1">
                      <li>Regular meals (avoid skipping)</li>
                      <li>Hydration (2-3L water daily)</li>
                      <li>Limit alcohol (especially red wine)</li>
                      <li>Identify food triggers</li>
                    </ul>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Stress Management</h3>
                    <ul className="list-disc list-inside text-gray-700 text-sm ml-4 space-y-1">
                      <li>Daily relaxation practice</li>
                      <li>Regular exercise (not excessive)</li>
                      <li>Therapy for anxiety/depression</li>
                      <li>Pacing activities</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
                  <h4 className="font-bold text-green-800 mb-2">Tracking Your Migraines</h4>
                  <p className="text-gray-700">
                    Keeping a detailed headache diary can help identify patterns and triggers. Record: date/time, symptoms, duration, intensity, medications taken, potential triggers (food, stress, weather, etc.), and menstrual cycle if applicable.
                  </p>
                </div>
              </section>

              {/* Conclusion Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Finding Your Optimal Treatment Plan</h2>
                <p className="text-gray-700 mb-4">
                  Migraine treatment is highly individualized. What works for one person may not work for another, and effective treatments often change over time. Work closely with a headache specialist to:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                  <li>Establish clear treatment goals</li>
                  <li>Develop both acute and preventive strategies</li>
                  <li>Monitor medication effectiveness and side effects</li>
                  <li>Adjust approaches as needed</li>
                  <li>Address comorbidities like anxiety, depression, or sleep disorders</li>
                </ul>
                <p className="text-gray-700">
                  With the right combination of therapies, most migraine sufferers can achieve significant improvement in quality of life. New treatments continue to emerge, offering hope for even better management in the future.
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
                        Updated on March 15, 2025
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-purple-50 rounded-lg p-6 mb-8">
                <div className="mb-4">
                  <h3 className="text-sm font-bold text-purple-800 uppercase tracking-wide mb-2">MIGRAINE RESOURCES</h3>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Get our monthly migraine digest</h4>
                  <p className="text-gray-700 text-sm">
                    Stay updated on the latest treatments, research, and lifestyle tips for migraine management.
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

              {/* Common Triggers */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Common Migraine Triggers</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="bg-purple-100 p-1 rounded-full mt-0.5">
                      <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Hormonal changes (menstruation, ovulation)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-purple-100 p-1 rounded-full mt-0.5">
                      <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Stress and anxiety</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-purple-100 p-1 rounded-full mt-0.5">
                      <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Sleep disturbances</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-purple-100 p-1 rounded-full mt-0.5">
                      <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Weather changes (barometric pressure)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-purple-100 p-1 rounded-full mt-0.5">
                      <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Certain foods (aged cheese, processed meats)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-purple-100 p-1 rounded-full mt-0.5">
                      <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Bright lights and loud noises</span>
                  </li>
                </ul>
              </div>

              {/* Resources */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Migraine Resources</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-purple-600 hover:underline font-medium">American Migraine Foundation</a>
                  </li>
                  <li>
                    <a href="#" className="text-purple-600 hover:underline font-medium">Migraine Research Foundation</a>
                  </li>
                  <li>
                    <a href="#" className="text-purple-600 hover:underline font-medium">Headache Journal</a>
                  </li>
                  <li>
                    <a href="#" className="text-purple-600 hover:underline font-medium">Find a Headache Specialist</a>
                  </li>
                  <li>
                    <a href="#" className="text-purple-600 hover:underline font-medium">Clinical Trials</a>
                  </li>
                </ul>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}