"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Bookmark, AlertCircle, Clock, Activity, Droplet, Sun, Moon, Coffee, Pill } from "lucide-react"

export default function MigraineManagementGuide() {
  const [email, setEmail] = useState("")
  const [activeTab, setActiveTab] = useState("Overview")
  const [bookmarked, setBookmarked] = useState(false)

  const handleEmailSubmit = (e) => {
    e.preventDefault()
    console.log("Email submitted:", email)
    setEmail("")
  }

  const tabs = [
    "Overview", 
    "Types", 
    "Symptoms", 
    "Triggers", 
    "Treatment", 
    "Prevention",
    "Tracking",
    "Resources"
  ]

      useEffect(() => {
          window.scrollTo(0, 0)
      }, [])

  return (
    <div className="min-h-screen bg-white pt-20 md:pt-32">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header Section */}
            <div className="mb-8">
              <div className="flex justify-between items-start">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                  Comprehensive Migraine Management Guide
                </h1>
                <button 
                  onClick={() => setBookmarked(!bookmarked)}
                  className="p-2 rounded-full hover:bg-gray-100"
                  aria-label="Bookmark"
                >
                  <Bookmark 
                    className={`w-6 h-6 ${bookmarked ? "text-blue-500 fill-blue-500" : "text-gray-400"}`} 
                  />
                </button>
              </div>

              <p className="text-xl text-gray-600 mb-6">
                Your complete resource for understanding and managing migraines effectively.
              </p>

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

              {/* Main Image */}
              <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Woman holding her head during migraine attack"
                  className="w-full h-auto"
                />
              </div>

              {/* Key Info Box */}
              <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-8 rounded-r-lg">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700">
                      <span className="text-purple-600 font-medium">Key Fact:</span> Migraines affect about 1 in 7 people worldwide and are three times more common in women than men. They're not just bad headaches but a complex neurological condition that can significantly impact quality of life.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Overview Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Migraines</h2>
              
              <p className="text-gray-700 mb-4">
                Migraines are a complex neurological disorder characterized by recurrent episodes of moderate to severe headache pain, often accompanied by nausea, vomiting, and sensitivity to light and sound. Unlike regular tension headaches, migraines typically cause throbbing pain on one side of the head and can last from 4 to 72 hours if untreated.
              </p>
              
              <p className="text-gray-700 mb-6">
                This comprehensive guide provides essential information about migraine management, from understanding your headache patterns through treatment options and preventive care. You'll learn about different types of migraines, how to identify triggers, effective treatment strategies, and when to seek medical help.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-purple-600" />
                    Migraine Phases
                  </h3>
                  <ol className="list-decimal list-inside text-gray-700 space-y-2">
                    <li><span className="font-medium">Prodrome:</span> Subtle changes 1-2 days before</li>
                    <li><span className="font-medium">Aura:</span> Sensory disturbances (in some people)</li>
                    <li><span className="font-medium">Attack:</span> Headache phase</li>
                    <li><span className="font-medium">Postdrome:</span> "Hangover" period</li>
                  </ol>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Activity className="w-5 h-5 text-purple-600" />
                    Prevalence
                  </h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>2nd leading cause of disability worldwide</li>
                    <li>Affects 12% of the population</li>
                    <li>Peak prevalence ages 25-55</li>
                    <li>Family history in 60-80% of cases</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Types Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of Migraines</h2>
              
              <p className="text-gray-700 mb-6">
                There are several types of migraines, each with distinct characteristics. Understanding which type you experience can help guide treatment decisions.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="min-w-full bg-white rounded-lg overflow-hidden">
                  <thead className="bg-purple-600 text-white">
                    <tr>
                      <th className="py-3 px-4 text-left">Type</th>
                      <th className="py-3 px-4 text-left">Frequency</th>
                      <th className="py-3 px-4 text-left">Characteristics</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">Episodic Migraine</td>
                      <td className="py-3 px-4">0-14 headache days/month</td>
                      <td className="py-3 px-4">Recurrent attacks with pain-free intervals</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">Chronic Migraine</td>
                      <td className="py-3 px-4">≥15 headache days/month</td>
                      <td className="py-3 px-4">At least 8 migraine days per month for 3+ months</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">Migraine with Aura</td>
                      <td className="py-3 px-4">Varies</td>
                      <td className="py-3 px-4">Sensory disturbances before headache (visual, speech, motor)</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">Menstrual Migraine</td>
                      <td className="py-3 px-4">Perimenstrual</td>
                      <td className="py-3 px-4">Occurs 2 days before to 3 days after menstruation</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">Vestibular Migraine</td>
                      <td className="py-3 px-4">Varies</td>
                      <td className="py-3 px-4">Vertigo/dizziness prominent feature</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8 rounded-r-lg">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700">
                      <span className="text-yellow-600 font-medium">Important:</span> Chronic migraine develops from episodic migraine in about 2.5% of patients per year. Early and effective treatment may help prevent this progression.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Symptoms Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Migraine Symptoms</h2>
              
              <p className="text-gray-700 mb-4">
                Migraine symptoms vary by individual and even by attack, but typically progress through several phases:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Droplet className="w-5 h-5 text-purple-600" />
                    Prodrome Symptoms
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Mood changes (depression, irritability)</li>
                    <li>Food cravings</li>
                    <li>Neck stiffness</li>
                    <li>Increased yawning</li>
                    <li>Fluid retention</li>
                    <li>Constipation or diarrhea</li>
                  </ul>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Sun className="w-5 h-5 text-purple-600" />
                    Aura Symptoms
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Visual disturbances (flashing lights, zigzag patterns)</li>
                    <li>Tingling/numbness in face or hands</li>
                    <li>Speech/language difficulties</li>
                    <li>Vertigo or dizziness</li>
                    <li>Rarely, weakness on one side (hemiplegic migraine)</li>
                  </ul>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Moon className="w-5 h-5 text-purple-600" />
                    Attack Symptoms
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Throbbing/pulsating pain (usually one-sided)</li>
                    <li>Pain worsens with physical activity</li>
                    <li>Nausea/vomiting</li>
                    <li>Sensitivity to light, sound, smells</li>
                    <li>Blurred vision</li>
                    <li>Lightheadedness</li>
                  </ul>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Coffee className="w-5 h-5 text-purple-600" />
                    Postdrome Symptoms
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Fatigue, weakness</li>
                    <li>Difficulty concentrating</li>
                    <li>Neck pain</li>
                    <li>Mood changes (euphoria or depression)</li>
                    <li>Food cravings or lack of appetite</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Triggers Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Migraine Triggers</h2>
              
              <p className="text-gray-700 mb-6">
                Triggers vary widely between individuals. Identifying and managing your personal triggers can help reduce migraine frequency and severity.
              </p>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Most Common Triggers</h3>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    "Stress (let-down stress especially)",
                    "Hormonal changes in women",
                    "Bright or flashing lights",
                    "Loud noises",
                    "Strong smells",
                    "Sleep changes (too much or too little)",
                    "Weather changes",
                    "Certain foods (see below)",
                    "Dehydration",
                    "Alcohol (especially red wine)",
                    "Caffeine (withdrawal or excess)",
                    "Skipped meals"
                  ].map((trigger, index) => (
                    <div key={index} className="bg-gray-50 p-3 rounded-lg flex items-start gap-2">
                      <div className="bg-purple-100 p-1 rounded-full">
                        <Pill className="w-4 h-4 text-purple-600" />
                      </div>
                      <span className="text-gray-700">{trigger}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Food Triggers</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Common Culprits</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Aged cheeses (tyramine)</li>
                      <li>Processed meats (nitrates/nitrites)</li>
                      <li>Artificial sweeteners (aspartame)</li>
                      <li>Monosodium glutamate (MSG)</li>
                      <li>Chocolate (controversial)</li>
                      <li>Fermented/pickled foods</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Dietary Strategies</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Eat regular, balanced meals</li>
                      <li>Stay hydrated</li>
                      <li>Limit caffeine to 200mg per day</li>
                      <li>Consider elimination diet if suspect food triggers</li>
                      <li>Keep consistent meal times</li>
                      <li>Magnesium-rich foods may help (leafy greens, nuts)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Treatment Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Migraine Treatment Options</h2>
              
              <p className="text-gray-700 mb-6">
                Modern migraine treatment involves both acute (abortive) therapies to stop attacks and preventive medications to reduce attack frequency and severity.
              </p>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Acute Medications</h3>
                
                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full bg-white rounded-lg overflow-hidden">
                    <thead className="bg-purple-600 text-white">
                      <tr>
                        <th className="py-3 px-4 text-left">Medication Class</th>
                        <th className="py-3 px-4 text-left">Examples</th>
                        <th className="py-3 px-4 text-left">Notes</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium">NSAIDs</td>
                        <td className="py-3 px-4">Ibuprofen, Naproxen</td>
                        <td className="py-3 px-4">First-line for mild-moderate attacks</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium">Triptans</td>
                        <td className="py-3 px-4">Sumatriptan, Rizatriptan</td>
                        <td className="py-3 px-4">Gold standard for moderate-severe</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium">Gepants</td>
                        <td className="py-3 px-4">Ubrogepant, Rimegepant</td>
                        <td className="py-3 px-4">Newer, safer for cardiovascular risk</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium">Ditans</td>
                        <td className="py-3 px-4">Lasmiditan</td>
                        <td className="py-3 px-4">No vasoconstriction</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium">Anti-nausea</td>
                        <td className="py-3 px-4">Metoclopramide, Prochlorperazine</td>
                        <td className="py-3 px-4">Helpful adjunct for nausea</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6 rounded-r-lg">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700">
                        <span className="text-blue-600 font-medium">Treatment Tip:</span> Take acute medications as early as possible in the attack for best results. Overuse of acute medications (10 days/month) can lead to medication overuse headache.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Preventive Treatments</h3>
                <p className="text-gray-700 mb-4">
                  Preventive therapy should be considered if you have:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-1">
                  <li>≥4 headache days/month with disability</li>
                  <li>≥8 headache days/month</li>
                  <li>Failed acute treatments</li>
                  <li>Special circumstances (hemiplegic migraine, frequent aura)</li>
                </ul>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Oral Medications</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Beta-blockers (propranolol, metoprolol)</li>
                      <li>Antidepressants (amitriptyline, venlafaxine)</li>
                      <li>Anticonvulsants (topiramate, valproate)</li>
                      <li>Calcium channel blockers (verapamil)</li>
                      <li>CGRP antagonists (atogepant, rimegepant)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Other Options</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Botox injections (for chronic migraine)</li>
                      <li>CGRP monoclonal antibodies (erenumab, fremanezumab)</li>
                      <li>Nerve blocks (occipital, sphenopalatine)</li>
                      <li>Neuromodulation devices (Cefaly, gammaCore)</li>
                      <li>Supplements (magnesium, riboflavin, coenzyme Q10)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Prevention Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Lifestyle Prevention Strategies</h2>
              
              <p className="text-gray-700 mb-6">
                While medications are important, lifestyle modifications can significantly impact migraine frequency and severity.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Sleep Hygiene</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Maintain consistent sleep schedule (even weekends)</li>
                    <li>Aim for 7-8 hours nightly</li>
                    <li>Create relaxing bedtime routine</li>
                    <li>Keep bedroom cool, dark, and quiet</li>
                    <li>Avoid screens 1 hour before bed</li>
                    <li>Limit caffeine after 2pm</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Stress Management</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Practice relaxation techniques (deep breathing, meditation)</li>
                    <li>Regular moderate exercise (yoga, walking, swimming)</li>
                    <li>Cognitive behavioral therapy (CBT)</li>
                    <li>Biofeedback training</li>
                    <li>Set realistic goals and boundaries</li>
                    <li>Schedule "me time" regularly</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg mb-8">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700">
                      <span className="text-green-600 font-medium">Success Story:</span> A 2023 study showed that combining preventive medication with lifestyle modifications reduced migraine frequency by 50% in 68% of participants, compared to 42% with medication alone.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Tracking Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Tracking Your Migraines</h2>
              
              <p className="text-gray-700 mb-6">
                Keeping a detailed migraine diary can help identify patterns, triggers, and treatment effectiveness. Track these key elements:
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                {[
                  "Date and time of attack",
                  "Duration (hours)",
                  "Pain location and severity",
                  "Symptoms (nausea, aura, etc.)",
                  "Possible triggers",
                  "Medications taken",
                  "Effectiveness of treatment",
                  "Sleep patterns",
                  "Stress levels",
                  "Weather changes",
                  "Menstrual cycle (for women)",
                  "Food/drink consumed"
                ].map((item, index) => (
                  <div key={index} className="bg-gray-50 p-3 rounded-lg flex items-start gap-2">
                    <div className="bg-purple-100 p-1 rounded-full">
                      <Pill className="w-4 h-4 text-purple-600" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Migraine Tracking Apps</h3>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    {name: "Migraine Buddy", features: "Detailed tracking, weather correlation"},
                    {name: "N1-Headache", features: "FDA-cleared, treatment reminders"},
                    {name: "Curelator", features: "Identifies personal triggers"},
                    {name: "HeadApp", features: "Simple interface, export data"},
                    {name: "My Migraine", features: "Doctor reporting features"},
                    {name: "Migraine Monitor", features: "AI analysis, predictive insights"}
                  ].map((app, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-gray-900 mb-2">{app.name}</h4>
                      <p className="text-gray-600 text-sm">{app.features}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Resources Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Migraine Resources</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Organizations</h3>
                  <ul className="space-y-3">
                    {[
                      {name: "American Migraine Foundation", url: "americanmigrainefoundation.org"},
                      {name: "Migraine Research Foundation", url: "migraineresearchfoundation.org"},
                      {name: "National Headache Foundation", url: "headaches.org"},
                      {name: "World Headache Alliance", url: "worldheadachealliance.org"},
                      {name: "Chronic Migraine Awareness", url: "chronicmigraineawareness.org"}
                    ].map((org, index) => (
                      <li key={index}>
                        <a href={`https://${org.url}`} className="text-purple-600 hover:underline font-medium">
                          {org.name}
                        </a>
                        <span className="text-gray-500 text-sm block">{org.url}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Support Groups</h3>
                  <ul className="space-y-3">
                    {[
                      {name: "Migraine Support Group (Facebook)", members: "45k+ members"},
                      {name: "Migraine Warriors", members: "Online forum"},
                      {name: "Chronic Migraine Support", members: "Local chapters"},
                      {name: "Teens with Migraine", members: "Ages 13-19"},
                      {name: "Migraine Parents", members: "For parents with migraine"}
                    ].map((group, index) => (
                      <li key={index}>
                        <span className="text-gray-900 font-medium">{group.name}</span>
                        <span className="text-gray-500 text-sm block">{group.members}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Takeaways</h2>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <ul className="list-disc list-inside text-gray-700 space-y-3">
                  <li>Migraines are a complex neurological condition, not just "bad headaches"</li>
                  <li>Effective treatment requires both acute and preventive approaches</li>
                  <li>Identifying and managing triggers can significantly reduce attack frequency</li>
                  <li>Lifestyle modifications are crucial complements to medication</li>
                  <li>Keeping a detailed migraine diary helps identify patterns</li>
                  <li>New treatments (CGRP medications, neuromodulation) offer hope when traditional options fail</li>
                  <li>Don't hesitate to seek specialist care if migraines significantly impact your life</li>
                </ul>
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
                      Migraine Research Team
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

            {/* Emergency Warning */}
            <div className="bg-red-50 border-l-4 border-red-400 rounded-lg p-4 mb-8">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">When to Seek Emergency Care</h3>
                  <p className="text-gray-700 text-sm">
                    Seek immediate medical attention for:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 text-sm mt-1 ml-4 space-y-1">
                    <li>"Worst headache of your life"</li>
                    <li>Headache with fever, stiff neck, or rash</li>
                    <li>Headache after head injury</li>
                    <li>New neurological symptoms (weakness, vision loss)</li>
                    <li>First migraine after age 50</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-purple-50 rounded-lg p-6 mb-8">
              <div className="mb-4">
                <h3 className="text-sm font-bold text-purple-800 uppercase tracking-wide mb-2">MIGRAINE NEWSLETTER</h3>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Stay updated on migraine research</h4>
                <p className="text-gray-700 text-sm">
                  Get the latest treatment news, research updates, and lifestyle tips delivered to your inbox.
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
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Links</h3>
              <ul className="space-y-3">
                {[
                  {title: "Find a Headache Specialist", url: "#"},
                  {title: "Clinical Trials", url: "#"},
                  {title: "Migraine Disability Assessment", url: "#"},
                  {title: "Medication Cost Assistance", url: "#"},
                  {title: "Workplace Accommodations", url: "#"}
                ].map((link, index) => (
                  <li key={index}>
                    <a href={link.url} className="text-purple-600 hover:underline flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Related Articles */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Related Articles</h3>
              <div className="space-y-4">
                {[
                  {title: "The Link Between Gut Health and Migraine", date: "May 2024"},
                  {title: "New CGRP Medications: What You Should Know", date: "April 2024"},
                  {title: "Managing Menstrual Migraines", date: "March 2024"},
                  {title: "Migraine and Mental Health", date: "February 2024"}
                ].map((article, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                    <a href="#" className="text-purple-600 hover:underline font-medium">{article.title}</a>
                    <p className="text-gray-500 text-sm">{article.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}