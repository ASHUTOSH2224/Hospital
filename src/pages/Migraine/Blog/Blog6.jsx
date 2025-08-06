"use client"
import { useEffect, useState } from "react"
import { User, Calendar, ClipboardList, Brain, HeartPulse, Eye, Clock, AlertCircle, ChevronRight } from "lucide-react"

export default function MigraineAssessmentGuide() {
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

  const tabs = ["Overview", "Tests", "Diagnosis", "Management", "Prevention"]

  return (
    <div className="min-h-screen bg-white pt-20 md:pt-32">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header Section */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Comprehensive Migraine Assessments: What to Expect During Your Neurological Examination
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
                Migraine assessments involve a detailed neurological examination to evaluate your symptoms, identify potential triggers, 
                and rule out other conditions. This comprehensive guide will walk you through what to expect during your evaluation.
              </p>
              
              {/* Main Image */}
              <div className="mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Neurologist examining a patient" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <p className="text-sm text-gray-500 mt-2">A neurologist performing a comprehensive migraine assessment</p>
              </div>
              
              {/* Article Description */}
              <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-8">
                <p className="text-gray-700">
                  <span className="text-purple-600 font-medium">Key Point:</span> A thorough migraine assessment typically includes 
                  medical history review, physical and neurological exams, and sometimes diagnostic tests to rule out other conditions.
                </p>
              </div>
              
              <p className="text-gray-700 mb-8">
                Migraines affect approximately 1 in 7 people globally, yet many go undiagnosed or undertreated. Understanding the 
                assessment process can help you prepare and get the most accurate diagnosis possible.
              </p>
            </div>
            
            {/* Overview Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-2">
                <ClipboardList className="w-6 h-6 text-purple-600" />
                The Migraine Assessment Process: An Overview
              </h2>
              
              <p className="text-gray-700 mb-6">
                A comprehensive migraine assessment typically involves several components designed to evaluate your symptoms, 
                identify potential triggers, and rule out other neurological conditions that might mimic migraines.
              </p>
              
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Standard Components of a Migraine Assessment</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <ChevronRight className="w-5 h-5 text-purple-600" />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-700 font-medium">Detailed medical history</p>
                      <p className="text-gray-600 text-sm">Including family history of migraines or other neurological conditions</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <ChevronRight className="w-5 h-5 text-purple-600" />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-700 font-medium">Symptom description</p>
                      <p className="text-gray-600 text-sm">Frequency, duration, intensity, and characteristics of your headaches</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <ChevronRight className="w-5 h-5 text-purple-600" />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-700 font-medium">Trigger identification</p>
                      <p className="text-gray-600 text-sm">Potential factors that precipitate your migraines</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <ChevronRight className="w-5 h-5 text-purple-600" />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-700 font-medium">Physical and neurological examination</p>
                      <p className="text-gray-600 text-sm">To rule out other potential causes of your symptoms</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <ChevronRight className="w-5 h-5 text-purple-600" />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-700 font-medium">Diagnostic tests (if needed)</p>
                      <p className="text-gray-600 text-sm">To exclude other neurological conditions</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <p className="text-gray-700 mb-6">
                The assessment typically begins with a detailed discussion of your symptoms. Your doctor will want to know about:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-purple-600" />
                    Timing and Duration
                  </h4>
                  <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                    <li>When your headaches started</li>
                    <li>How often they occur</li>
                    <li>How long they typically last</li>
                    <li>Time of day they usually begin</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-purple-600" />
                    Symptom Characteristics
                  </h4>
                  <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                    <li>Location of the pain</li>
                    <li>Type of pain (throbbing, stabbing, etc.)</li>
                    <li>Intensity (mild, moderate, severe)</li>
                    <li>Associated symptoms (nausea, aura, etc.)</li>
                  </ul>
                </div>
              </div>
            </section>
            
            {/* Medical History Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-2">
                <Brain className="w-6 h-6 text-purple-600" />
                Detailed Medical History Evaluation
              </h2>
              
              <p className="text-gray-700 mb-6">
                Your doctor will take a comprehensive medical history to understand your migraine patterns and identify potential 
                contributing factors. This typically includes:
              </p>
              
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Areas of Medical History</h3>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Personal Medical History</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>History of head injuries or concussions</li>
                    <li>Other neurological conditions</li>
                    <li>Chronic illnesses (hypertension, diabetes, etc.)</li>
                    <li>Medications (current and past)</li>
                    <li>Allergies</li>
                    <li>Sleep patterns and quality</li>
                    <li>Stress levels and mental health</li>
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Family Medical History</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Family members with migraine disorders</li>
                    <li>History of stroke or aneurysms in family</li>
                    <li>Other neurological conditions in family</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Lifestyle Factors</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Dietary habits and potential food triggers</li>
                    <li>Caffeine and alcohol consumption</li>
                    <li>Exercise routine</li>
                    <li>Work environment and stressors</li>
                    <li>Menstrual cycle patterns (for women)</li>
                  </ul>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6">
                Many patients find it helpful to keep a migraine diary before their appointment, tracking:
              </p>
              
              <div className="overflow-x-auto mb-8">
                <table className="min-w-full bg-white border border-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date/Time</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Intensity</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Symptoms</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Potential Triggers</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Medications Taken</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">June 15, 2:30 PM</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">4 hours</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">Severe</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Throbbing pain (left side), nausea, light sensitivity</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Missed lunch, bright lights</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">Sumatriptan 50mg</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">June 18, 6:00 AM</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">8 hours</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">Moderate</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Pressure pain (both sides), dizziness</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Stressful day before, red wine</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">Ibuprofen 400mg</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">June 22, 10:00 AM</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">6 hours</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">Severe</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Visual aura, throbbing pain (right side), vomiting</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Weather change, menstrual cycle</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">Rizatriptan 10mg</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            
            {/* Neurological Exam Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-2">
                <HeartPulse className="w-6 h-6 text-purple-600" />
                The Neurological Examination
              </h2>
              
              <p className="text-gray-700 mb-6">
                A thorough neurological exam helps rule out other conditions that might mimic migraines. While the exam may vary 
                depending on your specific symptoms, it typically includes:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Eye className="w-5 h-5 text-purple-600" />
                    Cranial Nerve Assessment
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Pupil response to light</li>
                    <li>Eye movements and coordination</li>
                    <li>Facial sensation and movement</li>
                    <li>Hearing tests (finger rub, tuning fork)</li>
                    <li>Tongue movement and gag reflex</li>
                  </ul>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Brain className="w-5 h-5 text-purple-600" />
                    Motor and Sensory Tests
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Muscle strength testing</li>
                    <li>Reflex testing (knee jerk, etc.)</li>
                    <li>Coordination tests (finger-to-nose, etc.)</li>
                    <li>Balance assessment (Romberg test)</li>
                    <li>Sensation to light touch and pinprick</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-8">
                <p className="text-gray-700">
                  <span className="text-purple-600 font-medium">Note:</span> A normal neurological exam doesn't mean your migraines 
                  aren't real or serious. Most migraine patients have normal exams between attacks, which helps distinguish migraines 
                  from other neurological conditions.
                </p>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Red Flags That May Require Further Testing</h3>
              
              <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
                <p className="text-gray-700">
                  <span className="text-red-600 font-medium">Warning Signs:</span> Certain symptoms may indicate a more serious 
                  condition and typically warrant additional testing:
                </p>
              </div>
              
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>First or worst headache of your life (especially if sudden onset)</li>
                <li>Headaches that worsen with coughing, sneezing, or exertion</li>
                <li>New headache pattern after age 50</li>
                <li>Headaches accompanied by fever, rash, or stiff neck</li>
                <li>Progressive worsening of headaches over weeks/months</li>
                <li>Neurological symptoms that persist between headaches</li>
                <li>History of cancer or immunosuppression</li>
                <li>Recent head trauma</li>
              </ul>
            </section>
            
            {/* Diagnostic Tests Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Diagnostic Tests for Migraine</h2>
              
              <p className="text-gray-700 mb-6">
                While most migraine diagnoses are based on clinical history and examination, your doctor may order tests to rule out 
                other conditions, especially if your symptoms are atypical or concerning.
              </p>
              
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Common Diagnostic Tests</h3>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Neuroimaging</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>
                      <strong>MRI (Magnetic Resonance Imaging):</strong> Provides detailed images of brain structures. Preferred for 
                      evaluating posterior fossa abnormalities and white matter lesions.
                    </li>
                    <li>
                      <strong>CT Scan (Computed Tomography):</strong> Quicker than MRI and better for detecting acute bleeding. 
                      Often used in emergency settings.
                    </li>
                    <li>
                      <strong>MRA/MRV (Magnetic Resonance Angiography/Venography):</strong> Specialized MRI techniques to evaluate 
                      blood vessels in the brain.
                    </li>
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Other Tests</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>
                      <strong>Blood Tests:</strong> May include complete blood count, metabolic panel, thyroid function tests, 
                      erythrocyte sedimentation rate (ESR), and C-reactive protein (CRP) to rule out systemic conditions.
                    </li>
                    <li>
                      <strong>Lumbar Puncture (Spinal Tap):</strong> Occasionally performed if meningitis or subarachnoid hemorrhage 
                      is suspected despite normal imaging.
                    </li>
                    <li>
                      <strong>EEG (Electroencephalogram):</strong> Rarely needed unless seizure activity is suspected.
                    </li>
                  </ul>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">When Are Tests Necessary?</h3>
              
              <div className="overflow-x-auto mb-8">
                <table className="min-w-full bg-white border border-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Clinical Scenario</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Recommended Test</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purpose</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-700">First severe headache</td>
                      <td className="px-4 py-3 text-sm text-gray-700">CT or MRI</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Rule out hemorrhage, mass, or other structural lesion</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-700">Progressive headache pattern</td>
                      <td className="px-4 py-3 text-sm text-gray-700">MRI with contrast</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Evaluate for tumor or other space-occupying lesion</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-700">Headache with fever and neck stiffness</td>
                      <td className="px-4 py-3 text-sm text-gray-700">CT followed by lumbar puncture</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Evaluate for meningitis or subarachnoid hemorrhage</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-700">Focal neurological deficits</td>
                      <td className="px-4 py-3 text-sm text-gray-700">MRI/MRA</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Assess for stroke, vascular malformation, or other focal lesion</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-700">Headache triggered by Valsalva</td>
                      <td className="px-4 py-3 text-sm text-gray-700">MRI brain with contrast</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Evaluate for Chiari malformation or other structural causes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            
            {/* Treatment and Management Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Treatment and Management Options</h2>
              
              <p className="text-gray-700 mb-6">
                Based on your assessment results, your doctor will develop a personalized treatment plan that may include:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Acute Treatments</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li><strong>NSAIDs:</strong> Ibuprofen, naproxen for mild-moderate attacks</li>
                    <li><strong>Triptans:</strong> Sumatriptan, rizatriptan for moderate-severe attacks</li>
                    <li><strong>Anti-nausea medications:</strong> Metoclopramide, prochlorperazine</li>
                    <li><strong>Gepants:</strong> Ubrogepant, rimegepant (newer CGRP antagonists)</li>
                    <li><strong>Dihydroergotamine:</strong> For prolonged attacks</li>
                  </ul>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Preventive Treatments</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li><strong>Beta-blockers:</strong> Propranolol, metoprolol</li>
                    <li><strong>Antidepressants:</strong> Amitriptyline, venlafaxine</li>
                    <li><strong>Antiepileptics:</strong> Topiramate, valproate</li>
                    <li><strong>CGRP monoclonal antibodies:</strong> Erenumab, fremanezumab (monthly injections)</li>
                    <li><strong>Botox injections:</strong> For chronic migraine</li>
                  </ul>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Non-Pharmacological Approaches</h3>
              
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 mb-8">
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li><strong>Lifestyle modifications:</strong> Regular sleep, hydration, meal schedule</li>
                  <li><strong>Trigger avoidance:</strong> Based on your identified triggers</li>
                  <li><strong>Stress management:</strong> Cognitive behavioral therapy, relaxation techniques</li>
                  <li><strong>Biofeedback:</strong> Teaches control over physiological responses</li>
                  <li><strong>Acupuncture:</strong> Some patients find benefit</li>
                  <li><strong>Physical therapy:</strong> For neck-related components</li>
                </ul>
              </div>
            </section>
            
            {/* Conclusion Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Conclusion</h2>
              
              <p className="text-gray-700 mb-6">
                A comprehensive migraine assessment is the critical first step toward effective management. By thoroughly evaluating 
                your symptoms, medical history, and neurological status, your healthcare provider can:
              </p>
              
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Confirm the migraine diagnosis</li>
                <li>Rule out other potentially serious conditions</li>
                <li>Identify your specific triggers and patterns</li>
                <li>Develop a personalized treatment plan</li>
                <li>Establish baseline measurements to track treatment efficacy</li>
              </ul>
              
              <div className="bg-purple-50 border-l-4 border-purple-400 p-4">
                <p className="text-gray-700">
                  <span className="text-purple-600 font-medium">Remember:</span> Migraine is a complex neurological disorder, not 
                  "just a headache." A proper assessment takes time but is essential for developing an effective management strategy. 
                  Don't hesitate to ask questions during your evaluation and be prepared to partner with your healthcare provider 
                  in managing your condition.
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
                    <a href="#" className="text-purple-600 hover:underline">Medically reviewed</a> by{" "}
                    <a href="#" className="text-purple-600 hover:underline font-medium">Dr. Sarah Johnson, MD, Neurologist</a>
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    — Written by{" "}
                    <a href="#" className="text-purple-600 hover:underline font-medium">Michael Chen</a>
                  </p>
                  <p className="text-sm text-gray-600 flex items-center gap-1">
                    — <Calendar className="w-3 h-3" />{" "}
                    <a href="#" className="text-purple-600 hover:underline">Updated on June 15, 2024</a>
                  </p>
                </div>
              </div>
            </div>
            
            {/* Newsletter Signup */}
            <div className="bg-purple-50 rounded-lg p-6 mb-8">
              <div className="mb-4">
                <h3 className="text-sm font-bold text-purple-800 uppercase tracking-wide mb-2">HEALTHLINE NEWSLETTER</h3>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Neurology & Migraine Updates</h4>
                <p className="text-gray-700 text-sm">
                  Get the latest research and treatment advances delivered to your inbox. Stay informed about migraine management.
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
                <a href="#" className="text-purple-600 hover:underline">privacy</a> is important to us
              </p>
            </div>
            
            {/* Common Triggers Box */}
            <div className="bg-white border border-purple-200 rounded-lg p-6 mb-8 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Common Migraine Triggers</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <ChevronRight className="w-4 h-4 text-purple-600" />
                  </div>
                  <div className="ml-2">
                    <p className="text-gray-700 text-sm">Hormonal changes (in women)</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <ChevronRight className="w-4 h-4 text-purple-600" />
                  </div>
                  <div className="ml-2">
                    <p className="text-gray-700 text-sm">Stress and anxiety</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <ChevronRight className="w-4 h-4 text-purple-600" />
                  </div>
                  <div className="ml-2">
                    <p className="text-gray-700 text-sm">Changes in sleep patterns</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <ChevronRight className="w-4 h-4 text-purple-600" />
                  </div>
                  <div className="ml-2">
                    <p className="text-gray-700 text-sm">Strong sensory stimuli (lights, smells)</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <ChevronRight className="w-4 h-4 text-purple-600" />
                  </div>
                  <div className="ml-2">
                    <p className="text-gray-700 text-sm">Certain foods and drinks</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <ChevronRight className="w-4 h-4 text-purple-600" />
                  </div>
                  <div className="ml-2">
                    <p className="text-gray-700 text-sm">Weather changes</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <ChevronRight className="w-4 h-4 text-purple-600" />
                  </div>
                  <div className="ml-2">
                    <p className="text-gray-700 text-sm">Medication overuse</p>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* Related Articles */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Related Articles</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="group flex items-start gap-3">
                    <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                        alt="Migraine treatment" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 group-hover:text-purple-600 transition-colors">
                        Modern Migraine Treatments: What's New in 2024
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">June 5, 2024</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="group flex items-start gap-3">
                    <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                        alt="Migraine diary" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 group-hover:text-purple-600 transition-colors">
                        How to Keep an Effective Migraine Diary
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">May 22, 2024</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="group flex items-start gap-3">
                    <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                        alt="Migraine diet" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 group-hover:text-purple-600 transition-colors">
                        The Migraine Diet: Foods to Embrace and Avoid
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">May 10, 2024</p>
                    </div>
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