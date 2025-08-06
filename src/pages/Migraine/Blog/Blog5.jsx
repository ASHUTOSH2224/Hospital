"use client"
import { useEffect, useState } from "react"
import { Shield, Monitor, Sun, Moon, Clock, Eye, Headphones, Coffee, User, Calendar } from "lucide-react"

export default function DigitalMigrainePrevention() {
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

  const tabs = ["Triggers", "Prevention", "Workspace", "Treatment", "Takeaway"]

  return (
    <div className="min-h-screen bg-white pt-20 md:pt-32">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header Section */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Digital Migraine Prevention: Protecting Yourself from Screen-Triggered Headaches
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
                In our increasingly digital world, screen-related migraine triggers have become a significant health concern. 
                Learn how to identify digital triggers and implement effective prevention strategies to reduce 
                screen-induced headaches and migraines.
              </p>
              
              {/* Main Image */}
              <div className="mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Woman experiencing digital eye strain while working on computer" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              
              {/* Article Description */}
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
                <p className="text-gray-700">
                  <span className="text-blue-600 font-medium">Key Fact:</span> Studies show that up to 70% of migraine 
                  sufferers report light sensitivity (photophobia), with digital screens being a common trigger source.
                </p>
              </div>
              
              <p className="text-gray-700 mb-8">
                This comprehensive guide covers everything from blue light sensitivity to creating a migraine-friendly 
                digital workspace. Keep reading to learn practical strategies for reducing digital eye strain and 
                preventing screen-triggered migraines.
              </p>
            </div>
            
            {/* Understanding Digital Migraine Triggers Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Understanding Digital Migraine Triggers</h2>
              
              {/* 1. Blue Light Exposure */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Monitor className="w-6 h-6 text-blue-600" /> 1. Blue Light Exposure
                </h3>
                <p className="text-gray-700 mb-4">
                  Digital screens emit significant amounts of blue light—high-energy visible (HEV) light with 
                  wavelengths between 400-500 nanometers. This type of light has been shown in numerous studies to:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 ml-4 space-y-1">
                  <li>Disrupt melatonin production, affecting sleep patterns</li>
                  <li>Increase eye strain and fatigue</li>
                  <li>Trigger photophobic responses in migraine sufferers</li>
                  <li>Potentially exacerbate cortical spreading depression (the neurological phenomenon behind migraines)</li>
                </ul>
                <p className="text-gray-700 mb-4">
                  A <a href="#" className="text-blue-600 hover:underline">2022 study in Cephalalgia</a> found that blue light exposure increased migraine pain intensity by 20% compared to 
                  warm light exposure in photophobic migraine patients.
                </p>
              </div>
              
              {/* 2. Screen Flicker and Refresh Rates */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Screen Flicker and Refresh Rates</h3>
                <p className="text-gray-700 mb-4">
                  Many digital displays use pulse-width modulation (PWM) to control brightness, which creates an 
                  imperceptible flicker that can trigger migraines in sensitive individuals:
                </p>
                
                <div className="overflow-x-auto mb-4">
                  <table className="min-w-full bg-white border border-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Screen Type</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Typical Refresh Rate</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Migraine Risk</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-2 text-sm text-gray-700">Older LCD monitors</td>
                        <td className="px-4 py-2 text-sm text-gray-700">60Hz</td>
                        <td className="px-4 py-2 text-sm text-gray-700">High</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-sm text-gray-700">Modern LED monitors</td>
                        <td className="px-4 py-2 text-sm text-gray-700">120-144Hz</td>
                        <td className="px-4 py-2 text-sm text-gray-700">Moderate</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-sm text-gray-700">High-end gaming monitors</td>
                        <td className="px-4 py-2 text-sm text-gray-700">240Hz+</td>
                        <td className="px-4 py-2 text-sm text-gray-700">Low</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-sm text-gray-700">E-ink displays</td>
                        <td className="px-4 py-2 text-sm text-gray-700">No flicker</td>
                        <td className="px-4 py-2 text-sm text-gray-700">Very Low</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <p className="text-gray-700 mb-4">
                  <span className="font-semibold">Pro Tip:</span> If you must use older screens, increasing brightness 
                  can sometimes reduce perceived flicker as the duty cycle changes.
                </p>
              </div>
              
              {/* 3. Screen Positioning and Ergonomics */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Screen Positioning and Ergonomics</h3>
                <p className="text-gray-700 mb-4">
                  Poor screen positioning can lead to neck strain and abnormal head positions that may trigger 
                  cervicogenic headaches (headaches originating from neck issues) which can then develop into migraines.
                </p>
                
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Optimal Screen Positioning:</h4>
                  <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                    <li>Top of screen at or slightly below eye level</li>
                    <li>20-30 inches (arm's length) from your face</li>
                    <li>Slightly tilted backward (10-20 degrees)</li>
                    <li>Directly in front of you to avoid neck rotation</li>
                  </ul>
                </div>
                
                <p className="text-gray-700 mb-4">
                  A <a href="#" className="text-blue-600 hover:underline">2021 study in the Journal of Occupational Health</a> found that office workers who used monitor arms to 
                  adjust their screen position reported 32% fewer headache days per month.
                </p>
              </div>
            </section>
            
            {/* Prevention Strategies Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Proven Digital Migraine Prevention Strategies</h2>
              
              {/* 1. Blue Light Reduction */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Sun className="w-6 h-6 text-yellow-500" /> 1. Blue Light Reduction Techniques
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6 mb-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900 mb-2">Software Solutions</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                      <li>Use night mode/blue light filters (f.lux, Night Shift, Twilight)</li>
                      <li>Enable dark mode in applications</li>
                      <li>Reduce screen brightness to match ambient light</li>
                      <li>Use color temperature adjustment (warmer tones)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900 mb-2">Hardware Solutions</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                      <li>Blue light blocking glasses (FL-41 tint is clinically proven)</li>
                      <li>Anti-glare screen protectors</li>
                      <li>E-ink displays for reading</li>
                      <li>OLED screens with true black backgrounds</li>
                    </ul>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">
                  <span className="font-semibold">Clinical Evidence:</span> A <a href="#" className="text-blue-600 hover:underline">2020 randomized controlled trial</a> found that FL-41 tinted glasses 
                  reduced migraine frequency by 74% in chronic migraine sufferers with light sensitivity.
                </p>
              </div>
              
              {/* 2. The 20-20-20 Rule */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Clock className="w-6 h-6 text-blue-500" /> 2. The 20-20-20 Rule and Beyond
                </h3>
                
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                  <p className="text-gray-700">
                    <span className="text-blue-600 font-medium">Standard 20-20-20 Rule:</span> Every 20 minutes, look at something 20 feet away for 20 seconds.
                  </p>
                </div>
                
                <p className="text-gray-700 mb-4">
                  For migraine prevention, consider these enhanced techniques:
                </p>
                
                <ul className="list-decimal list-inside text-gray-700 mb-4 ml-4 space-y-2">
                  <li>
                    <span className="font-semibold">20-20-20-20:</span> Add 20 seconds of eyes closed to the standard rule
                  </li>
                  <li>
                    <span className="font-semibold">Microbreaks:</span> 1-2 minute breaks every 30 minutes to stretch and hydrate
                  </li>
                  <li>
                    <span className="font-semibold">Pomodoro Technique:</span> 25 minutes focused work, 5 minute complete screen break
                  </li>
                  <li>
                    <span className="font-semibold">Blinking Exercises:</span> Conscious blinking to prevent dry eyes (10 full blinks every 20 minutes)
                  </li>
                </ul>
                
                <p className="text-gray-700 mb-4">
                  <span className="font-semibold">Effectiveness:</span> A <a href="#" className="text-blue-600 hover:underline">2023 study in Headache</a> showed that patients who practiced 
                  enhanced break routines reduced screen-triggered migraine frequency by 58%.
                </p>
              </div>
              
              {/* 3. Lighting and Environment */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Eye className="w-6 h-6 text-green-500" /> 3. Optimal Lighting and Environmental Controls
                </h3>
                
                <p className="text-gray-700 mb-4">
                  Ambient lighting significantly impacts digital eye strain and migraine risk. Follow these guidelines:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Lighting Recommendations</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                      <li>Indirect, diffused lighting is best</li>
                      <li>Avoid fluorescent lighting (use LED with high CRI instead)</li>
                      <li>Match screen brightness to ambient light</li>
                      <li>Use bias lighting behind monitors (6500K recommended)</li>
                      <li>Position light sources perpendicular to screens</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Environmental Factors</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                      <li>Maintain 40-60% humidity to prevent dry eyes</li>
                      <li>Keep room temperature between 68-72°F (20-22°C)</li>
                      <li>Reduce glare from windows with adjustable blinds</li>
                      <li>Use matte surfaces to minimize reflections</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Creating a Migraine-Friendly Workspace Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Creating a Migraine-Friendly Digital Workspace</h2>
              
              {/* 1. Hardware Selection */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Migraine-Friendly Hardware Selection</h3>
                
                <div className="overflow-x-auto mb-4">
                  <table className="min-w-full bg-white border border-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Device</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Migraine-Friendly Features</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Recommended Specs</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-2 text-sm text-gray-700">Monitor</td>
                        <td className="px-4 py-2 text-sm text-gray-700">
                          <ul className="list-disc list-inside ml-4">
                            <li>High refresh rate (120Hz+)</li>
                            <li>Flicker-free technology</li>
                            <li>Blue light reduction mode</li>
                          </ul>
                        </td>
                        <td className="px-4 py-2 text-sm text-gray-700">
                          <ul className="list-disc list-inside ml-4">
                            <li>27" 4K IPS panel</li>
                            <li>144Hz refresh rate</li>
                            <li>DC dimming</li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-sm text-gray-700">Keyboard</td>
                        <td className="px-4 py-2 text-sm text-gray-700">
                          <ul className="list-disc list-inside ml-4">
                            <li>Low-profile keys</li>
                            <li>Adjustable backlighting</li>
                            <li>Quiet operation</li>
                          </ul>
                        </td>
                        <td className="px-4 py-2 text-sm text-gray-700">
                          <ul className="list-disc list-inside ml-4">
                            <li>Mechanical (silent red switches)</li>
                            <li>RGB with warm color options</li>
                            <li>Wrist rest</li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-sm text-gray-700">Lighting</td>
                        <td className="px-4 py-2 text-sm text-gray-700">
                          <ul className="list-disc list-inside ml-4">
                            <li>Adjustable color temperature</li>
                            <li>Dimmable</li>
                            <li>Directional control</li>
                          </ul>
                        </td>
                        <td className="px-4 py-2 text-sm text-gray-700">
                          <ul className="list-disc list-inside ml-4">
                            <li>LED desk lamp (2700K-6500K)</li>
                            <li>Bias lighting strip</li>
                            <li>Smart bulb system</li>
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              {/* 2. Software Configuration */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Optimal Software Configuration</h3>
                
                <div className="grid md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Display Settings</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                      <li>Night light/warm color temperature (2700K-3000K)</li>
                      <li>Dark mode for all applications</li>
                      <li>Increased font size (minimum 12pt)</li>
                      <li>High contrast mode when needed</li>
                      <li>Reduce motion/animations</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Productivity Tools</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                      <li>TimeOut (macOS) or Workrave (Windows) for breaks</li>
                      <li>f.lux or Iris for blue light reduction</li>
                      <li>Dark Reader browser extension</li>
                      <li>Text-to-speech software for reading breaks</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <h4 className="font-bold text-gray-900 mb-2">Recommended Browser Extensions</h4>
                  <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                    <li><span className="font-semibold">Dark Reader:</span> Inverts brightness of websites</li>
                    <li><span className="font-semibold">Mercury Reader:</span> Removes clutter for clean reading</li>
                    <li><span className="font-semibold">Deluminate:</span> Adjusts page brightness</li>
                    <li><span className="font-semibold">Beeline Reader:</span> Color gradient for easier reading</li>
                  </ul>
                </div>
              </div>
            </section>
            
            {/* When Digital Migraines Strike Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">When Digital Migraines Strike: Treatment Approaches</h2>
              
              {/* 1. Immediate Relief Strategies */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Immediate Relief Strategies</h3>
                
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <Moon className="w-5 h-5 text-green-600" /> Dark Therapy
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Complete darkness for 20-30 minutes can help abort an impending migraine. Use an eye mask in a quiet room.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <Headphones className="w-5 h-5 text-blue-600" /> Audio Therapy
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Brown noise or binaural beats at 7-9Hz may help reduce migraine pain intensity.
                    </p>
                  </div>
                  
                  <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <Coffee className="w-5 h-5 text-yellow-600" /> Caffeine Protocol
                    </h4>
                    <p className="text-gray-700 text-sm">
                      100mg caffeine + 500mg aspirin at onset can help for some sufferers (consult doctor first).
                    </p>
                  </div>
                </div>
              </div>
              
              {/* 2. Long-Term Management */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Long-Term Management Approaches</h3>
                
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <h4 className="font-bold text-gray-900 mb-2">Behavioral Therapies</h4>
                  <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                    <li><span className="font-semibold">Cognitive Behavioral Therapy (CBT):</span> Helps modify pain responses</li>
                    <li><span className="font-semibold">Biofeedback:</span> Teaches control over physiological responses</li>
                    <li><span className="font-semibold">Relaxation Training:</span> Progressive muscle relaxation techniques</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                  <p className="text-gray-700">
                    <span className="text-blue-600 font-medium">Clinical Note:</span> A <a href="#" className="text-blue-600 hover:underline">2021 meta-analysis</a> found that behavioral therapies reduced migraine frequency by 35-45% 
                    in chronic sufferers, with effects lasting at least 12 months post-treatment.
                  </p>
                </div>
              </div>
            </section>
            
            {/* The Takeaway Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">The Takeaway</h2>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  Digital screens have become unavoidable in modern life, but they don't have to trigger debilitating migraines. 
                  By understanding your triggers and implementing these evidence-based strategies, you can significantly reduce 
                  screen-related migraine frequency and intensity.
                </p>
                
                <p className="text-gray-700 mb-4">
                  Remember that prevention is multifaceted—combining proper hardware selection, environmental adjustments, 
                  behavioral techniques, and medical interventions when necessary. Start with small changes and gradually 
                  build your migraine-resistant digital lifestyle.
                </p>
                
                <p className="text-gray-700">
                  If digital migraines persist despite these measures, consult with a headache specialist who can help 
                  develop a personalized treatment plan that may include preventive medications, neuromodulation devices, 
                  or specialized therapies.
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
                    <a href="#" className="text-blue-600 hover:underline">Medically reviewed</a> by{" "}
                    <a href="#" className="text-blue-600 hover:underline font-medium">Dr. Sarah Chen, Neurologist</a>
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    — Written by{" "}
                    <a href="#" className="text-blue-600 hover:underline font-medium">Michael Zhang</a>
                  </p>
                  <p className="text-sm text-gray-600 flex items-center gap-1">
                    — <Calendar className="w-3 h-3" />{" "}
                    <a href="#" className="text-blue-600 hover:underline">Updated on June 15, 2024</a>
                  </p>
                </div>
              </div>
            </div>
            
            {/* Newsletter Signup */}
            <div className="bg-blue-50 rounded-lg p-6 mb-8 border border-blue-100">
              <div className="mb-4">
                <h3 className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-2">MIGRAINE NEWSLETTER</h3>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Living Well with Migraines</h4>
                <p className="text-gray-700 text-sm">
                  Get the latest research-backed strategies for preventing and managing migraines delivered to your inbox.
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
                  SUBSCRIBE
                </button>
              </form>
              <p className="text-xs text-gray-600 mt-3">
                Your{" "}
                <a href="#" className="text-blue-600 hover:underline">privacy</a> is important to us
              </p>
            </div>
            
            {/* Quick Tips Widget */}
            <div className="bg-purple-50 rounded-lg p-6 mb-8 border border-purple-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-purple-600" /> Quick Digital Migraine Tips
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="bg-purple-100 text-purple-800 rounded-full p-1">
                    <Monitor className="w-4 h-4" />
                  </span>
                  <span className="text-gray-700 text-sm">Use matte screen protectors to reduce glare</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-purple-100 text-purple-800 rounded-full p-1">
                    <Sun className="w-4 h-4" />
                  </span>
                  <span className="text-gray-700 text-sm">Position monitors perpendicular to windows</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-purple-100 text-purple-800 rounded-full p-1">
                    <Clock className="w-4 h-4" />
                  </span>
                  <span className="text-gray-700 text-sm">Set reminders for regular screen breaks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-purple-100 text-purple-800 rounded-full p-1">
                    <Eye className="w-4 h-4" />
                  </span>
                  <span className="text-gray-700 text-sm">Blink consciously every 5-10 seconds</span>
                </li>
              </ul>
            </div>
            
            {/* Resources Widget */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Helpful Resources</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-blue-600 hover:underline text-sm flex items-center gap-2">
                    <span className="bg-blue-100 text-blue-800 rounded-full p-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 11a9 9 0 0 1 9 9"></path>
                        <path d="M4 4a16 16 0 0 1 16 16"></path>
                        <circle cx="5" cy="19" r="1"></circle>
                      </svg>
                    </span>
                    Migraine Action's Digital Wellness Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline text-sm flex items-center gap-2">
                    <span className="bg-blue-100 text-blue-800 rounded-full p-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                      </svg>
                    </span>
                    Headache Specialist Finder
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline text-sm flex items-center gap-2">
                    <span className="bg-blue-100 text-blue-800 rounded-full p-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                        <line x1="8" y1="21" x2="16" y2="21"></line>
                        <line x1="12" y1="17" x2="12" y2="21"></line>
                      </svg>
                    </span>
                    FL-41 Lens Comparison Tool
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline text-sm flex items-center gap-2">
                    <span className="bg-blue-100 text-blue-800 rounded-full p-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="12"></line>
                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                      </svg>
                    </span>
                    Migraine Trigger Tracker App
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