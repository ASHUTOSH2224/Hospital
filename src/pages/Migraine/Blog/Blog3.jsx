"use client"

import { useEffect, useState } from "react"
import { Zap, User, Calendar, AlertCircle, Clock, Droplet, Sun, Moon, Coffee, Pill, Activity } from "lucide-react"

export default function ManagingCommonMigraineTypes() {
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

  const tabs = ["Overview", "Types", "Triggers", "Treatments", "Prevention"]

  // Frequency data for table
  const frequencyData = [
    { type: "Episodic Migraine", frequency: "Less than 15 days/month", duration: "4-72 hours", intensity: "Moderate to severe" },
    { type: "Chronic Migraine", frequency: "15+ days/month for 3+ months", duration: "4+ hours", intensity: "Severe" },
    { type: "Tension-Type", frequency: "Varies (episodic or chronic)", duration: "30 min - 7 days", intensity: "Mild to moderate" },
    { type: "Cluster", frequency: "1-8/day during cluster periods", duration: "15 min - 3 hours", intensity: "Very severe" }
  ]

  return (
    <div className="min-h-screen bg-white pt-20 md:pt-32">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header Section */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Managing Common Migraine Types: Effective Strategies for Relief
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
                Migraines affect over 1 billion people worldwide, yet many sufferers don't have an effective management plan. 
                This comprehensive guide covers evidence-based strategies for different migraine types, helping you reduce 
                frequency, intensity, and impact on your daily life.
              </p>

              {/* Main Image */}
              <div className="mb-8">
                <img
                  src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Woman holding her head in pain from migraine"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>

              {/* Key Insight Box */}
              <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-8">
                <p className="text-gray-700">
                  <span className="text-purple-600 font-medium">Key Insight:</span> Migraine is not just a headache - 
                  it's a complex neurological disorder with distinct phases. Understanding your specific migraine type 
                  is the first step toward effective management.
                </p>
              </div>

              {/* Understanding Migraine Types Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Understanding Migraine Types</h2>
                
                <p className="text-gray-700 mb-6">
                  Migraines manifest differently in individuals. The International Classification of Headache Disorders 
                  recognizes several distinct types, each requiring slightly different management approaches.
                </p>

                {/* Migraine Frequency Table */}
                <div className="mb-8 overflow-x-auto">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Migraine Characteristics Comparison</h3>
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Frequency</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Intensity</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {frequencyData.map((row, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{row.type}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.frequency}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.duration}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.intensity}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* 1. Episodic Migraines */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-purple-600" /> 1. Episodic Migraines
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Episodic migraines occur less than 15 days per month. They typically progress through four phases:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                    <li>
                      <span className="font-semibold">Prodrome:</span> Subtle warnings like mood changes, food cravings, 
                      or increased thirst (occurs in 60% of sufferers)
                    </li>
                    <li>
                      <span className="font-semibold">Aura:</span> Sensory disturbances like flashing lights or tingling 
                      (affects 25% of migraineurs)
                    </li>
                    <li>
                      <span className="font-semibold">Attack:</span> Throbbing head pain with nausea, light/sound sensitivity
                    </li>
                    <li>
                      <span className="font-semibold">Postdrome:</span> "Migraine hangover" with fatigue and brain fog
                    </li>
                  </ul>
                  <p className="text-gray-700 mb-4">
                    <span className="font-semibold">Management Tip:</span> Track your episodes to identify patterns. The 
                    <a href="#" className="text-purple-600 hover:underline"> Migraine Buddy</a> app can help record 
                    duration, intensity, and potential triggers.
                  </p>
                </div>

                {/* 2. Chronic Migraines */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-red-600" /> 2. Chronic Migraines
                  </h3>
                  <p className="text-gray-700 mb-4">
                    When headaches occur 15+ days/month for over 3 months (with at least 8 being migrainous), they're 
                    classified as chronic. This affects about 2% of the population and often develops from episodic 
                    migraines through a process called transformation.
                  </p>
                  <p className="text-gray-700 mb-4 font-semibold">
                    Risk factors for chronification include:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-1">
                    <li>Overuse of acute medications (more than 10 days/month)</li>
                    <li>Obesity</li>
                    <li>Snoring/sleep apnea</li>
                    <li>High stress levels</li>
                    <li>Caffeine overuse</li>
                  </ul>
                  <p className="text-gray-700 mb-4">
                    <span className="font-semibold">Management Tip:</span> Preventive treatments are crucial. Options include 
                    <a href="#" className="text-purple-600 hover:underline"> topiramate</a>, 
                    <a href="#" className="text-purple-600 hover:underline"> propranolol</a>, 
                    <a href="#" className="text-purple-600 hover:underline"> CGRP monoclonal antibodies</a>, and 
                    <a href="#" className="text-purple-600 hover:underline"> Botox injections</a>.
                  </p>
                </div>

                {/* 3. Tension-Type Headaches */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-blue-600" /> 3. Tension-Type Headaches
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Often confused with migraines, tension-type headaches feature:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-4 ml-4 space-y-1">
                    <li>Band-like pressure (not throbbing)</li>
                    <li>Mild to moderate intensity</li>
                    <li>No nausea/vomiting</li>
                    <li>No worsening with activity</li>
                  </ul>
                  <p className="text-gray-700 mb-4">
                    <span className="font-semibold">Management Tip:</span> Stress reduction techniques like 
                    <a href="#" className="text-purple-600 hover:underline"> progressive muscle relaxation</a> and 
                    <a href="#" className="text-purple-600 hover:underline"> cognitive behavioral therapy</a> can be 
                    particularly effective. Over-the-counter pain relievers should be limited to 2-3 days/week.
                  </p>
                </div>

                {/* 4. Cluster Headaches */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Droplet className="w-5 h-5 text-orange-600" /> 4. Cluster Headaches
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Called "suicide headaches" due to their extreme pain, cluster headaches occur in cyclical patterns 
                    (cluster periods) with:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-4 ml-4 space-y-1">
                    <li>Excruciating unilateral pain (usually around one eye)</li>
                    <li>Restlessness or agitation (unlike migraine sufferers who lie still)</li>
                    <li>Autonomic symptoms like tearing, nasal congestion, or eyelid drooping</li>
                  </ul>
                  <p className="text-gray-700 mb-4">
                    <span className="font-semibold">Management Tip:</span> High-flow oxygen (100% at 12-15 L/min for 
                    15-20 minutes) and <a href="#" className="text-purple-600 hover:underline">triptan injections</a> 
                    are first-line acute treatments. Verapamil is commonly used for prevention.
                  </p>
                </div>
              </section>

              {/* Identifying Triggers Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Identifying and Managing Triggers</h2>
                
                <p className="text-gray-700 mb-6">
                  While triggers vary by individual, common migraine precipitants fall into several categories. 
                  Keeping a detailed headache diary for at least 3 months can help identify your personal triggers.
                </p>

                {/* Common Triggers */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {/* Environmental */}
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                      <Sun className="w-4 h-4" /> Environmental
                    </h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>Bright/flickering lights</li>
                      <li>Loud noises</li>
                      <li>Strong smells (perfume, smoke)</li>
                      <li>Weather changes</li>
                      <li>High altitude</li>
                    </ul>
                  </div>

                  {/* Lifestyle */}
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                      <Activity className="w-4 h-4" /> Lifestyle
                    </h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>Irregular sleep</li>
                      <li>Missed meals</li>
                      <li>Dehydration</li>
                      <li>Alcohol (especially red wine)</li>
                      <li>Physical overexertion</li>
                    </ul>
                  </div>

                  {/* Hormonal */}
                  <div className="bg-pink-50 p-4 rounded-lg">
                    <h4 className="font-bold text-pink-800 mb-3 flex items-center gap-2">
                      <Droplet className="w-4 h-4" /> Hormonal
                    </h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>Menstrual cycle changes</li>
                      <li>Oral contraceptives</li>
                      <li>Pregnancy</li>
                      <li>Menopause</li>
                    </ul>
                  </div>

                  {/* Dietary */}
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-bold text-yellow-800 mb-3 flex items-center gap-2">
                      <Coffee className="w-4 h-4" /> Dietary
                    </h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>Aged cheeses</li>
                      <li>Processed meats</li>
                      <li>MSG</li>
                      <li>Artificial sweeteners</li>
                      <li>Caffeine (withdrawal or excess)</li>
                    </ul>
                  </div>
                </div>

                {/* Trigger Management Strategy */}
                <div className="bg-purple-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-purple-800 mb-4">Trigger Management Strategy</h3>
                  <p className="text-gray-700 mb-4">
                    Rather than eliminating all potential triggers (which is impractical), focus on:
                  </p>
                  <ol className="list-decimal list-inside text-gray-700 mb-4 ml-4 space-y-2">
                    <li>
                      <span className="font-semibold">Identifying your top 2-3 triggers</span> through consistent tracking
                    </li>
                    <li>
                      <span className="font-semibold">Managing controllable triggers</span> (e.g., regular sleep, hydration)
                    </li>
                    <li>
                      <span className="font-semibold">Building resilience</span> to unavoidable triggers through preventive measures
                    </li>
                  </ol>
                  <p className="text-gray-700">
                    <span className="font-semibold">Example:</span> If weather changes trigger your migraines, you might 
                    use preventive medications during high-risk seasons rather than trying to control the weather.
                  </p>
                </div>
              </section>

              {/* Treatment Options Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Evidence-Based Treatment Options</h2>
                
                <p className="text-gray-700 mb-6">
                  Modern migraine treatment follows a stratified approach based on attack frequency and severity. 
                  The American Headache Society recommends developing an individualized plan with your healthcare provider.
                </p>

                {/* Acute Treatments */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Acute (Abortive) Treatments</h3>
                  <p className="text-gray-700 mb-4">
                    Used at headache onset to stop progression. Effectiveness depends on:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-1">
                    <li>Taking medication early in the attack</li>
                    <li>Using adequate doses</li>
                    <li>Avoiding medication overuse (2+ days/week)</li>
                  </ul>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Mild-Moderate Attacks */}
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-bold text-gray-900 mb-3">For Mild-Moderate Attacks</h4>
                      <ul className="text-gray-700 space-y-2">
                        <li className="flex items-start gap-2">
                          <Pill className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>NSAIDs (ibuprofen, naproxen)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Pill className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Acetaminophen (paracetamol)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Pill className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Caffeine combinations (Excedrin)</span>
                        </li>
                      </ul>
                    </div>

                    {/* Moderate-Severe Attacks */}
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-bold text-gray-900 mb-3">For Moderate-Severe Attacks</h4>
                      <ul className="text-gray-700 space-y-2">
                        <li className="flex items-start gap-2">
                          <Pill className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                          <span>Triptans (sumatriptan, rizatriptan)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Pill className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                          <span>Gepants (ubrogepant, rimegepant)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Pill className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                          <span>Dihydroergotamine (DHE)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Preventive Treatments */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Preventive Treatments</h3>
                  <p className="text-gray-700 mb-4">
                    Recommended when migraines significantly impact quality of life or occur frequently. It typically 
                    takes 2-3 months to see full effects.
                  </p>

                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    {/* Oral Medications */}
                    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                      <h4 className="font-bold text-gray-900 mb-3">Oral Medications</h4>
                      <ul className="text-gray-700 space-y-1 text-sm">
                        <li>Topiramate</li>
                        <li>Propranolol</li>
                        <li>Amitriptyline</li>
                        <li>Valproate</li>
                        <li>Candesartan</li>
                      </ul>
                    </div>

                    {/* Injectable/Biological */}
                    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                      <h4 className="font-bold text-gray-900 mb-3">Injectable/Biological</h4>
                      <ul className="text-gray-700 space-y-1 text-sm">
                        <li>CGRP mAbs (erenumab, fremanezumab)</li>
                        <li>OnabotulinumtoxinA (Botox)</li>
                        <li>Galcanezumab</li>
                      </ul>
                    </div>

                    {/* Devices */}
                    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                      <h4 className="font-bold text-gray-900 mb-3">Devices</h4>
                      <ul className="text-gray-700 space-y-1 text-sm">
                        <li>Cefaly (external trigeminal nerve stimulator)</li>
                        <li>Nerivio (remote electrical neuromodulator)</li>
                        <li>GammaCore (non-invasive vagus nerve stimulator)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Non-Pharmacological Approaches */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Non-Pharmacological Approaches</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Behavioral */}
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-bold text-gray-900 mb-3">Behavioral Therapies</h4>
                      <ul className="text-gray-700 space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="bg-purple-100 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">1</span>
                          <span>Cognitive Behavioral Therapy (CBT) for pain management</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="bg-purple-100 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">2</span>
                          <span>Biofeedback (thermal or EMG)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="bg-purple-100 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">3</span>
                          <span>Relaxation training</span>
                        </li>
                      </ul>
                    </div>

                    {/* Lifestyle */}
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-bold text-gray-900 mb-3">Lifestyle Modifications</h4>
                      <ul className="text-gray-700 space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">1</span>
                          <span>Regular sleep schedule (even on weekends)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">2</span>
                          <span>Aerobic exercise (30 min, 3x/week)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">3</span>
                          <span>Meal timing consistency</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Prevention Strategies Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Prevention Strategies</h2>
                
                <p className="text-gray-700 mb-6">
                  Effective migraine prevention requires a multi-modal approach. The most successful strategies combine 
                  medical treatments with lifestyle adjustments tailored to your specific migraine patterns.
                </p>

                {/* Prevention Pyramid */}
                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">The Migraine Prevention Pyramid</h3>
                  <div className="space-y-4">
                    {/* Level 1 */}
                    <div className="flex items-start gap-4">
                      <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5">1</div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Foundation: Lifestyle Basics</h4>
                        <p className="text-gray-700">
                          Sleep hygiene, hydration, regular meals, stress management, and moderate exercise form 
                          the essential base for all migraine prevention.
                        </p>
                      </div>
                    </div>

                    {/* Level 2 */}
                    <div className="flex items-start gap-4">
                      <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5">2</div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Trigger Management</h4>
                        <p className="text-gray-700">
                          Address your top 2-3 identified triggers through environmental modifications or behavioral 
                          changes.
                        </p>
                      </div>
                    </div>

                    {/* Level 3 */}
                    <div className="flex items-start gap-4">
                      <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5">3</div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Acute Treatment Optimization</h4>
                        <p className="text-gray-700">
                          Ensure you're using appropriate abortive medications correctly to prevent medication 
                          overuse headaches.
                        </p>
                      </div>
                    </div>

                    {/* Level 4 */}
                    <div className="flex items-start gap-4">
                      <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5">4</div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Preventive Medications</h4>
                        <p className="text-gray-700">
                          For frequent or severe migraines, add pharmacological prevention tailored to your 
                          comorbidities and preferences.
                        </p>
                      </div>
                    </div>

                    {/* Level 5 */}
                    <div className="flex items-start gap-4">
                      <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5">5</div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Advanced Interventions</h4>
                        <p className="text-gray-700">
                          Consider nerve blocks, neuromodulation devices, or specialty care for refractory cases.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* When to Seek Urgent Care */}
                <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-8">
                  <h3 className="text-xl font-bold text-red-800 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" /> When to Seek Urgent Medical Attention
                  </h3>
                  <p className="text-gray-700 mb-2">
                    While most migraines can be managed at home, certain "red flags" warrant immediate evaluation:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 ml-4">
                    <li>"Worst headache of your life" (thunderclap onset)</li>
                    <li>Headache with fever, neck stiffness, or rash</li>
                    <li>New neurological symptoms (weakness, vision loss, confusion)</li>
                    <li>Headache after head trauma</li>
                    <li>Headache in cancer or HIV patients</li>
                  </ul>
                </div>
              </section>

              {/* The Takeaway Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">The Takeaway</h2>
                <p className="text-gray-700 mb-4">
                  Managing migraines effectively requires understanding your specific migraine type, identifying personal 
                  triggers, and developing a multi-pronged treatment plan with your healthcare provider. While there's no 
                  cure yet, most migraine sufferers can achieve significant improvement through:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-1">
                  <li>Consistent lifestyle habits</li>
                  <li>Appropriate acute medications</li>
                  <li>Targeted preventive strategies</li>
                  <li>Regular follow-up and plan adjustments</li>
                </ul>
                <p className="text-gray-700">
                  With proper management, many people reduce their migraine frequency by 50% or more, regaining control 
                  over their lives. If current treatments aren't working, don't hesitate to ask for a referral to a 
                  <a href="#" className="text-purple-600 hover:underline"> headache specialist</a>.
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
                      Neurology Team
                    </a>
                  </p>
                  <p className="text-sm text-gray-600 flex items-center gap-1">
                    — <Calendar className="w-3 h-3" />
                    <a href="#" className="text-purple-600 hover:underline">
                      Updated on June 15, 2025
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
                  Get evidence-based tips, the latest treatment options, and personal stories delivered weekly.
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
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-purple-600 hover:underline flex items-center gap-2">
                    <Zap className="w-4 h-4" /> Migraine Emergency Kit Checklist
                  </a>
                </li>
                <li>
                  <a href="#" className="text-purple-600 hover:underline flex items-center gap-2">
                    <Moon className="w-4 h-4" /> Sleep Hygiene for Migraineurs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-purple-600 hover:underline flex items-center gap-2">
                    <Activity className="w-4 h-4" /> Migraine-Friendly Exercises
                  </a>
                </li>
                <li>
                  <a href="#" className="text-purple-600 hover:underline flex items-center gap-2">
                    <Pill className="w-4 h-4" /> Medication Overuse Headache Guide
                  </a>
                </li>
              </ul>
            </div>

            {/* Related Articles */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Related Articles</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <img 
                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                    alt="Headache relief" 
                    className="w-16 h-16 rounded object-cover"
                  />
                  <div>
                    <a href="#" className="text-purple-600 hover:underline font-medium">
                      Natural Remedies for Migraine Relief
                    </a>
                    <p className="text-gray-600 text-sm">Evidence-based complementary approaches</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <img 
                    src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                    alt="Healthy food" 
                    className="w-16 h-16 rounded object-cover"
                  />
                  <div>
                    <a href="#" className="text-purple-600 hover:underline font-medium">
                      Migraine Diet: What to Eat and Avoid
                    </a>
                    <p className="text-gray-600 text-sm">Food triggers and beneficial nutrients</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <img 
                    src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                    alt="Woman meditating" 
                    className="w-16 h-16 rounded object-cover"
                  />
                  <div>
                    <a href="#" className="text-purple-600 hover:underline font-medium">
                      Stress Management for Chronic Pain
                    </a>
                    <p className="text-gray-600 text-sm">Mind-body techniques that help</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}