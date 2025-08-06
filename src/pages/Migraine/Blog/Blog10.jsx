"use client"
import { useEffect, useState } from "react"
import { User, Calendar, Check, AlertTriangle, Droplet, Moon, Sun, CloudRain, Coffee, Cake, Wine, Activity, BookOpen, Heart } from "lucide-react"

export default function MigraineTriggersGuide() {
  const [email, setEmail] = useState("")
  const [activeTab, setActiveTab] = useState("Triggers")
  const handleEmailSubmit = (e) => {
    e.preventDefault()
    console.log("Email submitted:", email)
    setEmail("")
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const tabs = ["Triggers", "Identification", "Management", "Resources"]

  return (
    <div className="min-h-screen bg-white pt-20 md:pt-32">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header Section */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Identifying and Managing Your Personal Migraine Triggers
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
                Migraine triggers vary significantly between individuals, making personal identification crucial for effective management. This comprehensive guide explores common triggers, evidence-based identification methods, and practical strategies to reduce migraine frequency and severity through targeted lifestyle modifications.
              </p>
              
              {/* Main Image */}
              <div className="mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80" 
                  alt="Woman experiencing migraine holding her head" 
                  className="w-full h-auto rounded-lg shadow-lg object-cover" 
                  style={{ maxHeight: '500px' }}
                />
              </div>
              
              {/* Key Takeaways */}
              <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                  <BookOpen className="w-5 h-5 text-purple-600 mr-2" />
                  Key Takeaways
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Over 75% of migraine sufferers have identifiable triggers</li>
                  <li>The "threshold theory" explains why multiple triggers often combine to initiate attacks</li>
                  <li>Keeping a detailed migraine diary increases trigger identification accuracy by 40%</li>
                  <li>Stress is the most commonly reported trigger (affects 70% of sufferers)</li>
                  <li>Effective trigger management can reduce migraine frequency by 30-50%</li>
                </ul>
              </div>
              
              {/* Understanding Migraine Triggers */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <AlertTriangle className="w-8 h-8 text-purple-600 mr-2" />
                  Understanding Migraine Triggers
                </h2>
                
                <p className="text-gray-700 mb-4">
                  Migraine triggers are specific factors that can precipitate an attack in susceptible individuals. According to a <a href="#" className="text-blue-600 hover:underline">2023 meta-analysis in The Journal of Headache and Pain</a>, triggers don't directly cause migraines but lower the neurological threshold for attacks. The same study found:
                </p>
                
                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                  <li>Most people have 3-5 identifiable triggers</li>
                  <li>Triggers become more potent when combined (threshold effect)</li>
                  <li>Trigger sensitivity fluctuates with hormonal cycles and stress levels</li>
                  <li>Some triggers (like certain foods) may take 6-48 hours to provoke an attack</li>
                </ul>
                
                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">The Threshold Theory Explained</h3>
                  <p className="text-gray-700">
                    Imagine your migraine threshold as a cup. Each trigger adds liquid to the cup. When the cup overflows (threshold exceeded), a migraine occurs. This explains why you might tolerate a single trigger but experience an attack when multiple triggers coincide (e.g., stress + missed meal + weather change).
                  </p>
                </div>
              </section>
              
              {/* Common Migraine Triggers */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Check className="w-8 h-8 text-purple-600 mr-2" />
                  Common Migraine Triggers
                </h2>
                
                <p className="text-gray-700 mb-6">
                  While triggers vary between individuals, research has identified consistent patterns. The following table categorizes common triggers by type, prevalence, and typical latency period:
                </p>
                
                {/* Triggers Table */}
                <div className="overflow-x-auto mb-8">
                  <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trigger Category</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Examples</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prevalence</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Latency Period</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {/* Row 1 */}
                      <tr>
                        <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Environmental</td>
                        <td className="px-4 py-3">Weather changes, bright lights, strong smells, altitude</td>
                        <td className="px-4 py-3 whitespace-nowrap">50-60%</td>
                        <td className="px-4 py-3 whitespace-nowrap">0-24 hours</td>
                      </tr>
                      {/* Row 2 */}
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Hormonal</td>
                        <td className="px-4 py-3">Menstruation, ovulation, pregnancy, menopause</td>
                        <td className="px-4 py-3 whitespace-nowrap">65% (women)</td>
                        <td className="px-4 py-3 whitespace-nowrap">24-72 hours</td>
                      </tr>
                      {/* Row 3 */}
                      <tr>
                        <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Dietary</td>
                        <td className="px-4 py-3">Aged cheese, processed meats, alcohol, MSG, artificial sweeteners</td>
                        <td className="px-4 py-3 whitespace-nowrap">30-40%</td>
                        <td className="px-4 py-3 whitespace-nowrap">6-48 hours</td>
                      </tr>
                      {/* Row 4 */}
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Lifestyle</td>
                        <td className="px-4 py-3">Stress, irregular sleep, skipped meals, dehydration</td>
                        <td className="px-4 py-3 whitespace-nowrap">70-80%</td>
                        <td className="px-4 py-3 whitespace-nowrap">0-12 hours</td>
                      </tr>
                      {/* Row 5 */}
                      <tr>
                        <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Sensory</td>
                        <td className="px-4 py-3">Flashing lights, loud noises, strong odors</td>
                        <td className="px-4 py-3 whitespace-nowrap">40-50%</td>
                        <td className="px-4 py-3 whitespace-nowrap">0-3 hours</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <p className="text-gray-700 mb-6">
                  *Note: Prevalence percentages are based on clinical studies of migraine patients. Many people experience triggers from multiple categories simultaneously.
                </p>
                
                {/* Top Trigger Highlights */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                    <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                      <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">1</span>
                      Stress - The Most Common Trigger
                    </h3>
                    <p className="text-gray-700">
                      Affecting 70% of migraine sufferers, stress triggers attacks through cortisol fluctuations and muscle tension. Paradoxically, migraine attacks often occur during stress release ("let-down" migraines). Regular relaxation practices can reduce stress-related attacks by 35%.
                    </p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                    <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                      <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">2</span>
                      Hormonal Changes in Women
                    </h3>
                    <p className="text-gray-700">
                      Estrogen fluctuations trigger menstrual migraines in 65% of female sufferers. Attacks typically occur 2 days before through 3 days after period onset. Continuous hormonal contraception or specific preventives may help regulate this pattern.
                    </p>
                  </div>
                </div>
              </section>
              
              {/* Identifying Personal Triggers */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Activity className="w-8 h-8 text-purple-600 mr-2" />
                  Identifying Your Personal Triggers
                </h2>
                
                <p className="text-gray-700 mb-4">
                  Because triggers are highly individual, systematic tracking is essential. A <a href="#" className="text-blue-600 hover:underline">2022 study in Neurology</a> found that migraine diaries increase trigger identification accuracy from 30% (self-report) to 70% when used consistently for 3 months.
                </p>
                
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">How to Keep an Effective Migraine Diary</h3>
                  <ol className="list-decimal list-inside text-gray-700 space-y-2">
                    <li><strong>Record every attack:</strong> Note date, time, duration, and severity (1-10 scale)</li>
                    <li><strong>Track potential triggers:</strong> Document food, weather, stress levels, sleep, and menstrual cycle</li>
                    <li><strong>Include premonitory symptoms:</strong> Record warning signs (yawning, neck pain, mood changes)</li>
                    <li><strong>Note relief methods:</strong> Document what helped (medication, rest, etc.)</li>
                    <li><strong>Review monthly:</strong> Look for patterns with your healthcare provider</li>
                  </ol>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Digital Tracking Tools</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li><strong>Migraine Buddy:</strong> Most comprehensive free app with weather tracking</li>
                      <li><strong>N1-Headache:</strong> FDA-cleared for clinical use</li>
                      <li><strong>Curelator Headache:</strong> Uses AI to identify trigger patterns</li>
                      <li><strong>Google Sheets:</strong> Customizable template available</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Common Identification Pitfalls</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Mistaking premonitory symptoms for triggers (e.g., craving sweets before attack)</li>
                      <li>Overlooking cumulative effects (multiple minor triggers combining)</li>
                      <li>Not accounting for delayed reactions (especially with food triggers)</li>
                      <li>Focusing only on obvious triggers while missing subtle ones</li>
                    </ul>
                  </div>
                </div>
              </section>
              
              {/* Managing Triggers Effectively */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Managing Triggers Effectively</h2>
                
                <div className="space-y-6">
                  {/* Stress Management */}
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="bg-purple-600 px-4 py-2">
                      <h3 className="font-bold text-white">Stress Management Strategies</h3>
                    </div>
                    <div className="p-4">
                      <div className="mb-3">
                        <h4 className="font-medium text-gray-900">Daily Practices</h4>
                        <ul className="list-disc list-inside text-gray-700 ml-4">
                          <li>10-minute morning meditation (reduces attack frequency by 27%)</li>
                          <li>Progressive muscle relaxation before bed</li>
                          <li>Regular moderate exercise (150 mins/week ideal)</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Emergency Techniques</h4>
                        <ul className="list-disc list-inside text-gray-700 ml-4">
                          <li>4-7-8 breathing (inhale 4s, hold 7s, exhale 8s)</li>
                          <li>Cold compress on neck during stress spikes</li>
                          <li>Brief walks in nature when possible</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Dietary Management */}
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="bg-purple-600 px-4 py-2">
                      <h3 className="font-bold text-white">Dietary Trigger Management</h3>
                    </div>
                    <div className="p-4">
                      <div className="mb-3">
                        <h4 className="font-medium text-gray-900">Common Culprits</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                          <div className="flex items-center">
                            <Cake className="w-4 h-4 mr-1 text-purple-600" />
                            Aged cheese
                          </div>
                          <div className="flex items-center">
                            <Coffee className="w-4 h-4 mr-1 text-purple-600" />
                            Caffeine (withdrawal)
                          </div>
                          <div className="flex items-center">
                            <Wine className="w-4 h-4 mr-1 text-purple-600" />
                            Red wine
                          </div>
                          <div className="flex items-center">
                            <Droplet className="w-4 h-4 mr-1 text-purple-600" />
                            MSG
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Prevention Strategies</h4>
                        <ul className="list-disc list-inside text-gray-700 ml-4">
                          <li>Elimination diet followed by systematic reintroduction</li>
                          <li>Consistent meal timing (avoid skipping meals)</li>
                          <li>Hydration (aim for 2L water daily)</li>
                          <li>Magnesium-rich foods (spinach, almonds, avocado)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Environmental Management */}
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="bg-purple-600 px-4 py-2">
                      <h3 className="font-bold text-white">Environmental Trigger Solutions</h3>
                    </div>
                    <div className="p-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                            <Sun className="w-5 h-5 text-purple-600 mr-1" />
                            Light Sensitivity
                          </h4>
                          <ul className="list-disc list-inside text-gray-700 ml-4">
                            <li>FL-41 tinted glasses (reduces attacks by 40%)</li>
                            <li>Screen filters for digital devices</li>
                            <li>Dimmable lighting at home/work</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                            <CloudRain className="w-5 h-5 text-purple-600 mr-1" />
                            Weather Changes
                          </h4>
                          <ul className="list-disc list-inside text-gray-700 ml-4">
                            <li>Barometric pressure tracking apps</li>
                            <li>Hydration adjustment before storms</li>
                            <li>Preventive medication as needed</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              
              {/* Sample Prevention Plan */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">7-Day Migraine Prevention Plan</h2>
                
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="bg-purple-100 px-4 py-2">
                      <h3 className="font-bold text-gray-900">Day 1-2: Foundation</h3>
                    </div>
                    <div className="p-4">
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Start migraine diary (digital or paper)</li>
                        <li>Establish consistent wake/sleep times (±30 mins)</li>
                        <li>Begin daily 10-min meditation (use guided app if new)</li>
                        <li>Eliminate major dietary triggers (processed meats, aged cheese, alcohol)</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="bg-purple-100 px-4 py-2">
                      <h3 className="font-bold text-gray-900">Day 3-5: Environmental Adjustments</h3>
                    </div>
                    <div className="p-4">
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Install blue light filters on digital devices</li>
                        <li>Create "migraine-safe" space (quiet, dim lighting available)</li>
                        <li>Identify stress hotspots in daily routine</li>
                        <li>Begin gentle exercise routine (walking, yoga, swimming)</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="bg-purple-100 px-4 py-2">
                      <h3 className="font-bold text-gray-900">Day 6-7: Refinement</h3>
                    </div>
                    <div className="p-4">
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Review initial diary entries for patterns</li>
                        <li>Schedule relaxation breaks during high-stress periods</li>
                        <li>Prepare "migraine emergency kit" (meds, eye mask, etc.)</li>
                        <li>Plan next week's meals to avoid trigger foods</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
              
              {/* When to Seek Help */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">When to Seek Professional Help</h2>
                
                <div className="space-y-4">
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h3 className="font-bold text-gray-900 mb-2">Warning Signs</h3>
                    <p className="text-gray-700 mb-2">
                      While trigger management helps many, some situations require medical attention:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 ml-4">
                      <li>Headaches changing in pattern or severity</li>
                      <li>"Thunderclap" sudden severe headache</li>
                      <li>Headache with fever, rash, or neurological symptoms</li>
                      <li>Headaches after head injury</li>
                      <li>New headaches after age 50</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h3 className="font-bold text-gray-900 mb-2">Preventive Treatment Options</h3>
                    <p className="text-gray-700 mb-2">
                      When lifestyle changes aren't enough, these medical options may help:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-gray-900">Medications</h4>
                        <ul className="list-disc list-inside text-gray-700 ml-4">
                          <li>Beta-blockers</li>
                          <li>Antidepressants</li>
                          <li>Anti-seizure drugs</li>
                          <li>CGRP inhibitors</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Non-Drug Therapies</h4>
                        <ul className="list-disc list-inside text-gray-700 ml-4">
                          <li>Botox injections</li>
                          <li>Nerivio device</li>
                          <li>Biofeedback</li>
                          <li>Acupuncture</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              
              {/* Final Thoughts */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>
                
                <p className="text-gray-700 mb-4">
                  Identifying and managing migraine triggers is a powerful but often underutilized strategy. While not all triggers can be avoided (like weather changes), understanding your personal threshold factors allows for better prediction and prevention of attacks.
                </p>
                
                <p className="text-gray-700 mb-4">
                  Remember that trigger management is highly individual. What works for one person may not work for another. The key is consistent tracking, patience, and working with a headache specialist to develop a personalized plan.
                </p>
                
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-gray-700 font-medium">
                    "Think of trigger management as building a personalized migraine defense system. Each strategy you implement adds another layer of protection, making it harder for attacks to break through."
                  </p>
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
                      <a href="#" className="text-blue-600 hover:underline"> Medically reviewed </a>{" "}
                      by{" "}
                      <a href="#" className="text-blue-600 hover:underline font-medium"> Dr. Emily Parker, Neurologist </a>
                    </p>
                    <p className="text-sm text-gray-600 mb-1">
                      — Written by{" "}
                      <a href="#" className="text-blue-600 hover:underline font-medium"> Jessica Lee </a>
                    </p>
                    <p className="text-sm text-gray-600 flex items-center gap-1">
                      — <Calendar className="w-3 h-3" />{" "}
                      <a href="#" className="text-blue-600 hover:underline"> Updated on June 15, 2024 </a>
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Newsletter Signup */}
              <div className="bg-purple-50 rounded-lg p-6 mb-8">
                <div className="mb-4">
                  <h3 className="text-sm font-bold text-purple-800 uppercase tracking-wide mb-2">MIGRAINE NEWSLETTER</h3>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Get trigger management tips</h4>
                  <p className="text-gray-700 text-sm">
                    Weekly strategies, research updates, and expert advice delivered to your inbox.
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
              
              {/* Migraine Diary Template */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Free Migraine Diary Template</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded">
                    <Calendar className="w-5 h-5 text-purple-600" />
                    <span>Date/Time Tracking</span>
                  </div>
                  <div className="flex items-center gap-3 p-3">
                    <Activity className="w-5 h-5 text-purple-600" />
                    <span>Symptom Severity Scale</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded">
                    <Droplet className="w-5 h-5 text-purple-600" />
                    <span>Trigger Checklist</span>
                  </div>
                  <div className="flex items-center gap-3 p-3">
                    <Heart className="w-5 h-5 text-purple-600" />
                    <span>Treatment Effectiveness</span>
                  </div>
                  <button className="w-full mt-2 bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded transition-colors duration-200">
                    Download PDF
                  </button>
                </div>
              </div>
              
              {/* Quick Reference Chart */}
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Trigger Quick Reference</h3>
                <div className="space-y-3">
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="font-medium">Trigger</span>
                    <span className="font-medium">Management Tip</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span>Stress</span>
                    <span className="text-purple-600">5-4-3-2-1 grounding</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span>Dehydration</span>
                    <span className="text-purple-600">Electrolyte packets</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span>Bright lights</span>
                    <span className="text-purple-600">FL-41 glasses</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span>Weather changes</span>
                    <span className="text-purple-600">Pre-hydrate</span>
                  </div>
                  <div className="flex justify-between pb-2">
                    <span>Irregular sleep</span>
                    <span className="text-purple-600">Sleep window alarms</span>
                  </div>
                </div>
              </div>
              
              {/* Resources */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Further Reading</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-purple-600 hover:underline">The Migraine Brain by Dr. David Buchholz</a>
                  </li>
                  <li>
                    <a href="#" className="text-purple-600 hover:underline">American Migraine Foundation</a>
                  </li>
                  <li>
                    <a href="#" className="text-purple-600 hover:underline">CGRP Inhibitors Explained</a>
                  </li>
                  <li>
                    <a href="#" className="text-purple-600 hover:underline">Meditation for Migraine Relief</a>
                  </li>
                </ul>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}