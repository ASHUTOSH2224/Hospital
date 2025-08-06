"use client"
import { useEffect, useState } from "react"
import { User, Calendar, Check, Pill, Syringe, HeartPulse, Brain, AlertCircle, ClipboardList, BookOpen, Scale } from "lucide-react"

export default function MigraineMedicationsGuide() {
  const [email, setEmail] = useState("")
  const [activeTab, setActiveTab] = useState("Overview")
  const [isMobile, setIsMobile] = useState(false)

  const handleEmailSubmit = (e) => {
    e.preventDefault()
    console.log("Email submitted:", email)
    setEmail("")
  }

  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0)
    
    // Check if mobile view
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const tabs = ["Overview", "Preventive", "Acute", "Comparison", "Side Effects"]

  return (
    <div className="min-h-screen bg-white pt-20 md:pt-32">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header Section */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Complete Guide to Migraine Medications: Preventive vs. Acute Treatment
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
              
              {/* Date and Intro */}
              <div className="flex items-center text-gray-500 mb-4">
                <Calendar className="w-4 h-4 mr-1" />
                <span className="text-sm">Updated on June 15, 2024</span>
              </div>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Migraine medications are categorized into preventive (prophylactic) and acute (abortive) treatments. 
                This comprehensive guide covers all medication classes including triptans, CGRP inhibitors, beta-blockers, 
                anticonvulsants, and emerging therapies. Learn about effectiveness, side effects, and personalized 
                treatment approaches for optimal migraine management.
              </p>
              
              {/* Main Image */}
              <div className="mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80" 
                  alt="Migraine medications and treatment options"
                  className="w-full h-auto rounded-lg shadow-lg object-cover"
                  style={{ maxHeight: '500px' }}
                />
              </div>
              
              {/* Key Takeaways */}
              <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                  <ClipboardList className="w-5 h-5 text-purple-600 mr-2" />
                  Key Takeaways
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Preventive medications reduce attack frequency by 50% or more in about 40-50% of patients</li>
                  <li>Triptans are effective for 60-70% of migraine sufferers when taken early in an attack</li>
                  <li>CGRP inhibitors represent the first class of drugs specifically developed for migraine prevention</li>
                  <li>Medication choice depends on attack frequency, severity, comorbidities, and patient preferences</li>
                  <li>Combination therapy (preventive + acute) is often needed for optimal migraine control</li>
                </ul>
              </div>
              
              {/* Overview Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <BookOpen className="w-8 h-8 text-purple-600 mr-2" />
                  Understanding Migraine Medications
                </h2>
                
                <p className="text-gray-700 mb-4">
                  Migraine is a complex neurological disorder affecting approximately 12% of the population. 
                  According to the <a href="#" className="text-blue-600 hover:underline">American Migraine Foundation</a>, 
                  proper medication management can reduce disability by up to 75% in chronic migraine sufferers.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                      <Pill className="w-5 h-5 text-blue-600 mr-2" />
                      Preventive Medications
                    </h3>
                    <p className="text-gray-700">
                      Taken daily to reduce the frequency, severity, and duration of migraine attacks. 
                      Typically recommended for patients experiencing:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mt-2 ml-4 space-y-1">
                      <li>4+ migraine days per month</li>
                      <li>Disabling attacks despite acute treatment</li>
                      <li>Contraindications to acute medications</li>
                      <li>Patient preference for fewer attacks</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                      <Syringe className="w-5 h-5 text-green-600 mr-2" />
                      Acute Medications
                    </h3>
                    <p className="text-gray-700">
                      Used during a migraine attack to stop or reduce symptoms. Most effective when taken:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mt-2 ml-4 space-y-1">
                      <li>Early in the attack (within 1 hour of onset)</li>
                      <li>Before central sensitization occurs</li>
                      <li>At adequate doses (avoid underdosing)</li>
                      <li>No more than 2-3 days per week to prevent MOH</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-purple-50 rounded-lg p-4 mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">The Migraine Pathophysiology</h3>
                  <p className="text-gray-700 mb-2">
                    Modern migraine medications target specific pathways in the migraine cascade:
                  </p>
                  <ol className="list-decimal list-inside text-gray-700 ml-4 space-y-1">
                    <li>Cortical spreading depression (aura phase)</li>
                    <li>Trigeminal nerve activation (pain phase)</li>
                    <li>Neurogenic inflammation (sustained pain)</li>
                    <li>Central sensitization (chronic transformation)</li>
                  </ol>
                </div>
              </section>
              
              {/* Preventive Medications Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <HeartPulse className="w-8 h-8 text-purple-600 mr-2" />
                  Preventive Migraine Medications
                </h2>
                
                <p className="text-gray-700 mb-6">
                  Preventive medications are categorized by their primary mechanism of action. 
                  The following table compares the major classes of preventive medications:
                </p>
                
                {/* Preventive Medications Table */}
                <div className="overflow-x-auto mb-8">
                  <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Class</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Examples</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Efficacy</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dosing</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mechanism</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {/* CGRP Inhibitors */}
                      <tr>
                        <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">CGRP Inhibitors</td>
                        <td className="px-4 py-3">Erenumab, Fremanezumab, Galcanezumab, Eptinezumab</td>
                        <td className="px-4 py-3">50% reduction in 40-50% of patients</td>
                        <td className="px-4 py-3">Monthly or quarterly injections</td>
                        <td className="px-4 py-3">Blocks CGRP receptor or ligand</td>
                      </tr>
                      
                      {/* Beta-Blockers */}
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Beta-Blockers</td>
                        <td className="px-4 py-3">Propranolol, Metoprolol, Timolol</td>
                        <td className="px-4 py-3">50% reduction in 40% of patients</td>
                        <td className="px-4 py-3">Daily oral (e.g., propranolol 80-240mg)</td>
                        <td className="px-4 py-3">Reduces sympathetic tone</td>
                      </tr>
                      
                      {/* Anticonvulsants */}
                      <tr>
                        <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Anticonvulsants</td>
                        <td className="px-4 py-3">Topiramate, Valproate</td>
                        <td className="px-4 py-3">50% reduction in 30-40% of patients</td>
                        <td className="px-4 py-3">Daily oral (e.g., topiramate 50-100mg)</td>
                        <td className="px-4 py-3">Modulates neuronal excitability</td>
                      </tr>
                      
                      {/* Antidepressants */}
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Antidepressants</td>
                        <td className="px-4 py-3">Amitriptyline, Venlafaxine</td>
                        <td className="px-4 py-3">50% reduction in 30-35% of patients</td>
                        <td className="px-4 py-3">Daily oral (e.g., amitriptyline 10-75mg)</td>
                        <td className="px-4 py-3">Modulates serotonin/norepinephrine</td>
                      </tr>
                      
                      {/* Botox */}
                      <tr>
                        <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">OnabotulinumtoxinA</td>
                        <td className="px-4 py-3">Botox</td>
                        <td className="px-4 py-3">Reduces headache days by 8-9/month</td>
                        <td className="px-4 py-3">31 injections every 12 weeks</td>
                        <td className="px-4 py-3">Blocks neurotransmitter release</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <p className="text-gray-700 mb-6">
                  *Efficacy data from randomized controlled trials. Individual responses may vary.
                </p>
                
                {/* CGRP Inhibitors Deep Dive */}
                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">CGRP Inhibitors: A Breakthrough in Migraine Prevention</h3>
                  <p className="text-gray-700 mb-3">
                    Calcitonin gene-related peptide (CGRP) inhibitors represent the first class of drugs specifically developed for migraine prevention. 
                    These monoclonal antibodies target either the CGRP ligand or receptor, interrupting a key pathway in migraine pathophysiology.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-3">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Advantages:</h4>
                      <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                        <li>Few systemic side effects (no weight gain, cognitive effects)</li>
                        <li>Monthly or quarterly dosing improves adherence</li>
                        <li>Effective in medication-overuse headache patients</li>
                        <li>No required titration (start at full dose)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Considerations:</h4>
                      <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                        <li>High cost (often requires prior authorization)</li>
                        <li>Injection-site reactions in 10-15% of patients</li>
                        <li>Long-term safety data still emerging</li>
                        <li>Not recommended during pregnancy</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Preventive Medication Selection */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Choosing the Right Preventive Medication</h3>
                  <p className="text-gray-700 mb-3">
                    Medication selection should be individualized based on:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                        <Check className="w-5 h-5 text-green-600 mr-2" />
                        Patient Factors
                      </h4>
                      <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                        <li>Comorbid conditions (choose medications that treat both)</li>
                        <li>Contraindications (e.g., asthma and beta-blockers)</li>
                        <li>Reproductive status (avoid valproate in pregnancy)</li>
                        <li>Medication preferences (oral vs injection)</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                        <AlertCircle className="w-5 h-5 text-yellow-600 mr-2" />
                        Migraine Characteristics
                      </h4>
                      <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                        <li>Frequency (chronic vs episodic)</li>
                        <li>Presence of aura (caution with estrogen-containing meds)</li>
                        <li>Associated symptoms (nausea, photophobia)</li>
                        <li>Previous treatment response</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
              
              {/* Acute Medications Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Pill className="w-8 h-8 text-purple-600 mr-2" />
                  Acute Migraine Medications
                </h2>
                
                <p className="text-gray-700 mb-6">
                  Acute medications should be selected based on attack severity, associated symptoms, 
                  and previous treatment response. The following are the main classes of acute migraine medications:
                </p>
                
                {/* Acute Medications Table */}
                <div className="overflow-x-auto mb-8">
                  <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Class</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Examples</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Onset</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Max Dose/Week</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Notes</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {/* Triptans */}
                      <tr>
                        <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Triptans</td>
                        <td className="px-4 py-3">Sumatriptan, Rizatriptan, Eletriptan</td>
                        <td className="px-4 py-3">30-120 min</td>
                        <td className="px-4 py-3">9-10 doses</td>
                        <td className="px-4 py-3">Contraindicated in CVD</td>
                      </tr>
                      
                      {/* NSAIDs */}
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">NSAIDs</td>
                        <td className="px-4 py-3">Ibuprofen, Naproxen</td>
                        <td className="px-4 py-3">60-120 min</td>
                        <td className="px-4 py-3">15 doses</td>
                        <td className="px-4 py-3">GI/renal precautions</td>
                      </tr>
                      
                      {/* Gepants */}
                      <tr>
                        <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Gepants</td>
                        <td className="px-4 py-3">Ubrogepant, Rimegepant</td>
                        <td className="px-4 py-3">60-120 min</td>
                        <td className="px-4 py-3">No max (but expensive)</td>
                        <td className="px-4 py-3">No vasoconstriction</td>
                      </tr>
                      
                      {/* Ditans */}
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Ditans</td>
                        <td className="px-4 py-3">Lasmiditan</td>
                        <td className="px-4 py-3">60-120 min</td>
                        <td className="px-4 py-3">No max (but sedating)</td>
                        <td className="px-4 py-3">No vasoconstriction</td>
                      </tr>
                      
                      {/* Combination */}
                      <tr>
                        <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Combination</td>
                        <td className="px-4 py-3">Sumatriptan/Naproxen</td>
                        <td className="px-4 py-3">30-60 min</td>
                        <td className="px-4 py-3">5 doses</td>
                        <td className="px-4 py-3">More effective than either alone</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                {/* Triptans Deep Dive */}
                <div className="bg-purple-50 p-4 rounded-lg mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Triptans: The Gold Standard for Acute Treatment</h3>
                  <p className="text-gray-700 mb-3">
                    Triptans (serotonin 5-HT1B/1D receptor agonists) remain the most effective acute migraine medications, 
                    with about 60-70% of patients achieving pain freedom at 2 hours when taken early in an attack.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-3">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Available Formulations:</h4>
                      <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                        <li>Oral tablets (most common)</li>
                        <li>Nasal sprays (faster absorption)</li>
                        <li>Subcutaneous injections (fastest onset)</li>
                        <li>Orally dissolving tablets (helpful with nausea)</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Clinical Pearls:</h4>
                      <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                        <li>Early intervention improves efficacy</li>
                        <li>Combine with NSAID when possible</li>
                        <li>Consider non-oral route for vomiting</li>
                        <li>Allow 2-hour window before redosing</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Acute Treatment Strategy */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Stepped vs Stratified Care Approach</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-4">
                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                      <h4 className="font-bold text-gray-900 mb-2 text-center">Stepped Care</h4>
                      <ol className="list-decimal list-inside text-gray-700 ml-4 space-y-1">
                        <li>Start with simple analgesics (NSAIDs)</li>
                        <li>If ineffective after 2-3 attacks, step up to triptans</li>
                        <li>Reserve stronger options for refractory cases</li>
                      </ol>
                      <p className="text-gray-700 mt-2 text-sm">
                        <span className="font-semibold">Pros:</span> Cost-effective, minimizes side effects<br />
                        <span className="font-semibold">Cons:</span> Delays effective treatment
                      </p>
                    </div>
                    
                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                      <h4 className="font-bold text-gray-900 mb-2 text-center">Stratified Care</h4>
                      <ol className="list-decimal list-inside text-gray-700 ml-4 space-y-1">
                        <li>Assess attack severity and disability</li>
                        <li>Mild attacks: NSAIDs or combination analgesics</li>
                        <li>Moderate-severe: Start with triptans</li>
                      </ol>
                      <p className="text-gray-700 mt-2 text-sm">
                        <span className="font-semibold">Pros:</span> More effective, better outcomes<br />
                        <span className="font-semibold">Cons:</span> Higher initial cost
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700">
                    Current guidelines recommend <span className="font-semibold">stratified care</span> as it leads to better 
                    outcomes and reduced overall healthcare utilization despite higher initial medication costs.
                  </p>
                </div>
              </section>
              
              {/* Medication Comparison Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Scale className="w-8 h-8 text-purple-600 mr-2" />
                  Preventive vs Acute Medications: Key Differences
                </h2>
                
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <div className="grid grid-cols-3 gap-4 text-center font-medium mb-2">
                    <div>Feature</div>
                    <div>Preventive</div>
                    <div>Acute</div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center mb-1 border-b border-gray-200 pb-2">
                    <div className="font-medium text-left">Purpose</div>
                    <div>Reduce attack frequency/severity</div>
                    <div>Stop individual attacks</div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center mb-1 border-b border-gray-200 pb-2">
                    <div className="font-medium text-left">Dosing</div>
                    <div>Daily (or periodic for injections)</div>
                    <div>As needed during attacks</div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center mb-1 border-b border-gray-200 pb-2">
                    <div className="font-medium text-left">Time to Effect</div>
                    <div>Weeks to months</div>
                    <div>Minutes to hours</div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center mb-1 border-b border-gray-200 pb-2">
                    <div className="font-medium text-left">Ideal For</div>
                    <div>Frequent or disabling migraines</div>
                    <div>Occasional migraines</div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="font-medium text-left">Cost Consideration</div>
                    <div>Ongoing expense</div>
                    <div>Variable based on attack frequency</div>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6">
                  Many patients benefit from <span className="font-semibold">combination therapy</span> - using preventive 
                  medications to reduce overall attack frequency while having acute medications available 
                  for breakthrough attacks.
                </p>
                
                {/* When to Consider Preventive Therapy */}
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">When to Consider Preventive Therapy</h3>
                  <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                    <li>4+ migraine days per month</li>
                    <li>Attacks significantly impair quality of life</li>
                    <li>Acute medications ineffective or contraindicated</li>
                    <li>Acute medication overuse (≥10 days/month)</li>
                    <li>Special migraine subtypes (hemiplegic, brainstem aura)</li>
                  </ul>
                </div>
              </section>
              
              {/* Side Effects Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <AlertCircle className="w-8 h-8 text-purple-600 mr-2" />
                  Managing Medication Side Effects
                </h2>
                
                <p className="text-gray-700 mb-6">
                  All migraine medications carry potential side effects. Understanding these can help with 
                  medication selection and patient counseling:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Common Preventive Medication Side Effects</h3>
                    <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2">
                      <li>
                        <span className="font-semibold">Beta-blockers:</span> Fatigue, dizziness, bradycardia, 
                        exercise intolerance (avoid in athletes)
                      </li>
                      <li>
                        <span className="font-semibold">Topiramate:</span> Paresthesias, cognitive slowing, 
                        word-finding difficulty, weight loss
                      </li>
                      <li>
                        <span className="font-semibold">Amitriptyline:</span> Sedation, dry mouth, weight gain, 
                        constipation (start low, go slow)
                      </li>
                      <li>
                        <span className="font-semibold">CGRP inhibitors:</span> Injection-site reactions, 
                        constipation (generally well-tolerated)
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Common Acute Medication Side Effects</h3>
                    <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2">
                      <li>
                        <span className="font-semibold">Triptans:</span> Chest tightness, neck/jaw discomfort, 
                        paresthesias, fatigue (vasoconstriction)
                      </li>
                      <li>
                        <span className="font-semibold">NSAIDs:</span> GI irritation, renal impairment, 
                        increased bleeding risk (take with food)
                      </li>
                      <li>
                        <span className="font-semibold">Gepants:</span> Nausea, dry mouth, sleepiness 
                        (minimal systemic effects)
                      </li>
                      <li>
                        <span className="font-semibold">Lasmiditan:</span> Dizziness, sedation, paresthesias 
                        (avoid driving for 8 hours)
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* Minimizing Side Effects */}
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Strategies to Minimize Side Effects</h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">For Preventive Medications:</h4>
                      <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                        <li>Start low, go slow with dose titration</li>
                        <li>Take sedating medications at bedtime</li>
                        <li>Combine with lifestyle modifications</li>
                        <li>Allow 8-12 weeks for full effect</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">For Acute Medications:</h4>
                      <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                        <li>Use the lowest effective dose</li>
                        <li>Combine with anti-nausea medication if needed</li>
                        <li>Alternate medication classes to prevent MOH</li>
                        <li>Consider non-oral routes for severe nausea</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
              
              {/* Emerging Treatments */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Brain className="w-8 h-8 text-purple-600 mr-2" />
                  Emerging Treatments and Future Directions
                </h2>
                
                <p className="text-gray-700 mb-4">
                  Migraine treatment continues to evolve with several promising developments:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-4">
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">New CGRP Agents</h3>
                    <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                      <li>Oral CGRP inhibitors (atogepant, rimegepant for prevention)</li>
                      <li>Combination CGRP/5-HT1F receptor agonists</li>
                      <li>Longer-acting formulations (6-month injections)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Neuromodulation Devices</h3>
                    <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                      <li>Non-invasive vagus nerve stimulators (nVNS)</li>
                      <li>Transcranial magnetic stimulation (TMS)</li>
                      <li>Remote electrical neuromodulation (REN)</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Personalized Medicine Approaches</h3>
                  <p className="text-gray-700 mb-2">
                    Future directions include biomarker development to predict treatment response:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                    <li>Genetic testing for drug metabolism</li>
                    <li>Imaging biomarkers (functional MRI patterns)</li>
                    <li>Serum CGRP levels as predictor</li>
                    <li>AI algorithms for treatment matching</li>
                  </ul>
                </div>
              </section>
              
              {/* Final Thoughts */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>
                
                <p className="text-gray-700 mb-4">
                  Migraine management requires an individualized approach that considers attack frequency, 
                  severity, comorbidities, and patient preferences. The expanding arsenal of migraine-specific 
                  therapies (CGRP inhibitors, gepants, ditans) has revolutionized treatment options.
                </p>
                
                <p className="text-gray-700 mb-4">
                  Key principles for success include:
                </p>
                
                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                  <li>Set realistic expectations (50% reduction is success)</li>
                  <li>Combine pharmacological and non-pharmacological approaches</li>
                  <li>Address medication overuse headache risk</li>
                  <li>Regularly reassess and adjust treatment plans</li>
                  <li>Engage patients in shared decision-making</li>
                </ul>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-gray-700 font-medium italic">
                    "The best migraine treatment is the one that fits the patient's life, not the one that 
                    fits the provider's preferences. Success requires partnership and persistence."
                  </p>
                </div>
              </section>
            </div>
            
          </div>
            {/* Sidebar - Only show on desktop */}
            {!isMobile && (
              <div className="lg:col-span-1">
                {/* Author Info */}
                <div className="bg-gray-50 rounded-lg p-6 mb-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                      <User className="w-8 h-8 text-gray-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">
                        <a href="#" className="text-blue-600 hover:underline">Medically reviewed</a> by{" "}
                        <a href="#" className="text-blue-600 hover:underline font-medium">Dr. Sarah Johnson, MD</a>
                      </p>
                      <p className="text-sm text-gray-600 mb-1">
                        — Written by{" "}
                        <a href="#" className="text-blue-600 hover:underline font-medium">Michael Chen</a>
                      </p>
                      <p className="text-sm text-gray-600 flex items-center gap-1">
                        — <Calendar className="w-3 h-3" />{" "}
                        <a href="#" className="text-blue-600 hover:underline">Updated on June 15, 2024</a>
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Newsletter Signup */}
                <div className="bg-purple-50 rounded-lg p-6 mb-8">
                  <div className="mb-4">
                    <h3 className="text-sm font-bold text-purple-800 uppercase tracking-wide mb-2">
                      MIGRAINE NEWSLETTER
                    </h3>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      Get the latest treatment updates
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Monthly research summaries, new treatment alerts, and practical management tips.
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
                
                {/* Popular Articles */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    <a href="#" className="block group">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                          <img
                            src="https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80"
                            alt="Migraine triggers"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors">
                            Top 10 Migraine Triggers and How to Avoid Them
                          </h4>
                          <p className="text-sm text-gray-600">8 min read</p>
                        </div>
                      </div>
                    </a>
                    
                    <a href="#" className="block group">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                          <img
                            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80"
                            alt="Natural remedies"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors">
                            Evidence-Based Natural Remedies for Migraine
                          </h4>
                          <p className="text-sm text-gray-600">10 min read</p>
                        </div>
                      </div>
                    </a>
                    
                    <a href="#" className="block group">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                          <img
                            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80"
                            alt="Chronic migraine"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors">
                            Managing Chronic Migraine: A Comprehensive Guide
                          </h4>
                          <p className="text-sm text-gray-600">15 min read</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                
                {/* Quick Reference Chart */}
                <div className="bg-gray-50 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Medication Quick Reference</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="font-medium">For Prevention:</span>
                      <span className="text-purple-600">Take daily</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <span>For Acute Attacks:</span>
                      <span className="text-purple-600">Take at onset</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <span>Max Triptan Use:</span>
                      <span className="text-purple-600">9-10 doses/month</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <span>Preventive Effect:</span>
                      <span className="text-purple-600">8-12 weeks</span>
                    </div>
                    <div className="flex justify-between">
                      <span>MOH Risk:</span>
                      <span className="text-purple-600">≥10 days/month</span>
                    </div>
                  </div>
                </div>
                
                {/* Resources */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Patient Resources</h3>
                  <ul className="space-y-3">
                    <li>
                      <a href="#" className="text-purple-600 hover:underline">
                        Migraine Tracking App Recommendations
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-purple-600 hover:underline">
                        Financial Assistance Programs
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-purple-600 hover:underline">
                        Finding a Headache Specialist
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-purple-600 hover:underline">
                        Support Groups and Communities
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            )}
        </div>
      </div>
    </div>
  )
}