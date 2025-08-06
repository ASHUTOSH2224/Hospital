"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Heart, Shield, Thermometer, Droplet, Activity, AlertTriangle, Smile } from "lucide-react"

export default function ChemoGuide() {
  const [email, setEmail] = useState("")
  const [activeTab, setActiveTab] = useState("Preparation")

  const handleEmailSubmit = (e) => {
    e.preventDefault()
    console.log("Email submitted:", email)
    setEmail("")
  }

    useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0)
  }, [])
  // Define the tabs for navigation

  const tabs = ["Preparation", "During Treatment", "Side Effects", "Recovery", "Emotional Support"]

  return (
    <div className="min-h-screen bg-white pt-20 md:pt-32">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header Section */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Starting Chemo? What to Expect from Someone Who's Been There
              </h1>
              
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Chemotherapy can be a tough journey with ups and downs. Read our tips on what to expect from someone who's experienced it firsthand.
              </p>

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

              {/* Main Image */}
              <div className="mb-8">
                <img
                  src="/chemo-patient.jpg"
                  alt="Patient receiving chemotherapy with a positive attitude"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <p className="text-sm text-gray-500 mt-2">A patient receiving chemotherapy treatment</p>
              </div>

              {/* Introduction */}
              <div className="mb-12">
                <p className="text-gray-700 mb-4">
                  When I was first diagnosed with cancer, the word "chemotherapy" filled me with dread. The unknown was terrifying. Now, having gone through it myself, I want to share what I wish someone had told me before starting treatment.
                </p>
                <p className="text-gray-700 mb-4">
                  Chemotherapy affects everyone differently, but there are common experiences that can help you prepare. This guide covers everything from preparing for your first session to managing side effects and emotional challenges.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                  <p className="text-gray-700">
                    <span className="text-blue-600 font-medium">Remember:</span> You're stronger than you think. The road may be tough, but millions have walked it before you - and you're not alone.
                  </p>
                </div>
              </div>

              {/* Preparation Section */}
              <section className="mb-12" id="preparation">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                  <Shield className="w-8 h-8 mr-2 text-blue-600" />
                  Preparing for Chemotherapy
                </h2>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">1. What to Bring to Your First Session</h3>
                <p className="text-gray-700 mb-4">
                  Your first chemo session can last several hours. Being prepared will make you more comfortable. Here's what I found helpful:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900 mb-2">Essential Items</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Insurance cards and ID</li>
                      <li>Comfortable, loose-fitting clothing</li>
                      <li>Warm socks or slippers (treatment rooms can be cold)</li>
                      <li>Phone and charger (long battery life recommended)</li>
                      <li>Water bottle (stay hydrated!)</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900 mb-2">Comfort Items</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Favorite blanket or shawl</li>
                      <li>Entertainment (books, tablet, headphones)</li>
                      <li>Snacks (ginger candies help with nausea)</li>
                      <li>Journal or notebook</li>
                      <li>Lip balm and lotion (skin gets dry)</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Medical Preparations</h3>
                <p className="text-gray-700 mb-4">
                  Before starting chemo, you'll need some medical preparations:
                </p>
                
                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full bg-white border border-gray-200">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="py-2 px-4 border-b text-left">Preparation</th>
                        <th className="py-2 px-4 border-b text-left">Purpose</th>
                        <th className="py-2 px-4 border-b text-left">Timing</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-2 px-4 border-b">Dental checkup</td>
                        <td className="py-2 px-4 border-b">Prevent infections during immune suppression</td>
                        <td className="py-2 px-4 border-b">2-4 weeks before chemo</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b">Fertility preservation</td>
                        <td className="py-2 px-4 border-b">Some chemo can affect fertility</td>
                        <td className="py-2 px-4 border-b">Before starting treatment</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b">Port placement</td>
                        <td className="py-2 px-4 border-b">Easier IV access for frequent treatments</td>
                        <td className="py-2 px-4 border-b">1-2 weeks before chemo</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b">Vaccinations</td>
                        <td className="py-2 px-4 border-b">Some vaccines can't be given during chemo</td>
                        <td className="py-2 px-4 border-b">As recommended by doctor</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Home Preparations</h3>
                <p className="text-gray-700 mb-4">
                  Getting your home ready can make recovery between treatments easier:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                  <li><strong>Stock up on easy meals:</strong> Prepare freezer meals or stock up on healthy, easy-to-prepare foods for days when cooking feels overwhelming.</li>
                  <li><strong>Create a comfortable recovery space:</strong> Set up a cozy area with blankets, pillows, entertainment, and medications within reach.</li>
                  <li><strong>Organize medications:</strong> Get a pill organizer and keep a medication schedule.</li>
                  <li><strong>Arrange help:</strong> Line up friends/family to help with chores, meals, or transportation.</li>
                  <li><strong>Prepare for hair loss:</strong> Consider getting a shorter haircut beforehand and shopping for head coverings if you think you'll want them.</li>
                </ul>
              </section>

              {/* During Treatment Section */}
              <section className="mb-12" id="during-treatment">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                  <Droplet className="w-8 h-8 mr-2 text-blue-600" />
                  What to Expect During Treatment
                </h2>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">The Chemo Session Experience</h3>
                <p className="text-gray-700 mb-4">
                  Here's a typical timeline of what happens during a chemotherapy session:
                </p>
                
                <div className="border-l-4 border-blue-200 pl-6 mb-6">
                  <div className="relative pb-8">
                    {[
                      { time: "0-30 min", title: "Check-in and vitals", desc: "Nurses check your weight, blood pressure, and temperature" },
                      { time: "30-60 min", title: "Pre-medications", desc: "You may receive anti-nausea drugs or steroids through IV" },
                      { time: "60-180 min", title: "Chemo infusion", desc: "The actual chemotherapy drugs are administered" },
                      { time: "180-210 min", title: "Flush and monitoring", desc: "IV line is flushed and you're monitored for reactions" },
                    ].map((step, index) => (
                      <div key={index} className="relative mb-8">
                        <div className="absolute -left-9 flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full text-white text-sm font-bold">
                          {index + 1}
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-gray-900">{step.title} <span className="text-blue-600 ml-2">{step.time}</span></h4>
                          <p className="text-gray-700 mt-1">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Common Immediate Reactions</h3>
                <p className="text-gray-700 mb-4">
                  During the infusion itself, you might experience:
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {[
                    { icon: <Thermometer className="w-5 h-5" />, title: "Temperature changes", desc: "Feeling hot or cold flashes" },
                    { icon: <Activity className="w-5 h-5" />, title: "Metallic taste", desc: "Sudden strange taste in mouth" },
                    { icon: <AlertTriangle className="w-5 h-5" />, title: "Allergic reactions", desc: "Rare but possible - nurses monitor closely" },
                    { icon: <Smile className="w-5 h-5" />, title: "Emotional response", desc: "Some people feel anxious or unexpectedly emotional" },
                  ].map((item, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg flex items-start gap-3">
                      <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">{item.title}</h4>
                        <p className="text-gray-700 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
                  <p className="text-gray-700">
                    <span className="font-medium">Important:</span> The nurses are your best resource during treatment. Tell them immediately if you feel anything unusual - they've seen it all and can help adjust your medications or infusion rate.
                  </p>
                </div>
              </section>

              {/* Side Effects Section */}
              <section className="mb-12" id="side-effects">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                  <AlertTriangle className="w-8 h-8 mr-2 text-blue-600" />
                  Managing Common Side Effects
                </h2>

                <p className="text-gray-700 mb-6">
                  Side effects vary depending on your specific drugs, dosage, and how your body reacts. Here's a comprehensive guide to the most common ones and how to manage them:
                </p>

                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Fatigue</h3>
                  <p className="text-gray-700 mb-2">
                    <span className="font-bold">What to expect:</span> The most common side effect, often hitting 2-3 days after treatment and lasting several days.
                  </p>
                  <p className="text-gray-700 mb-4">
                    <span className="font-bold">Management strategies:</span>
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-4 ml-4 space-y-2">
                    <li><strong>Pace yourself:</strong> Listen to your body and rest when needed</li>
                    <li><strong>Light exercise:</strong> Short walks can actually help combat fatigue</li>
                    <li><strong>Delegate tasks:</strong> Don't hesitate to ask for help with chores</li>
                    <li><strong>Sleep hygiene:</strong> Keep a regular sleep schedule even if napping</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Nausea and Vomiting</h3>
                  <p className="text-gray-700 mb-2">
                    <span className="font-bold">What to expect:</span> Modern anti-nausea medications have greatly improved this, but some nausea may still occur.
                  </p>
                  <p className="text-gray-700 mb-4">
                    <span className="font-bold">Management strategies:</span>
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mb-4">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Food Strategies</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                        <li>Eat small, frequent meals</li>
                        <li>Try ginger (tea, candies, capsules)</li>
                        <li>Avoid strong smells</li>
                        <li>Eat bland foods when nauseous</li>
                        <li>Stay hydrated with small sips</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Medication Tips</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                        <li>Take anti-nausea meds as prescribed</li>
                        <li>Don't wait until nausea is severe</li>
                        <li>Ask about rotating medications</li>
                        <li>Consider acupressure bands</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Hair Loss</h3>
                  <p className="text-gray-700 mb-2">
                    <span className="font-bold">What to expect:</span> Not all chemo causes hair loss, but if yours does, it typically begins 2-4 weeks after first treatment.
                  </p>
                  <p className="text-gray-700 mb-4">
                    <span className="font-bold">Coping strategies:</span>
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <h4 className="font-bold text-gray-900 mb-2">Before Hair Loss</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Consider cutting hair short first</li>
                      <li>Look into cold cap therapy if available</li>
                      <li>Purchase head coverings in advance</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900 mb-2">After Hair Loss</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Protect scalp from sun with hats/scarves</li>
                      <li>Use mild, fragrance-free hair products</li>
                      <li>Consider donating your hair before treatment</li>
                      <li>Remember it's temporary - hair grows back</li>
                    </ul>
                  </div>
                </div>

                <div className="overflow-x-auto mb-8">
                  <table className="min-w-full bg-white border border-gray-200">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="py-2 px-4 border-b text-left">Side Effect</th>
                        <th className="py-2 px-4 border-b text-left">Timing</th>
                        <th className="py-2 px-4 border-b text-left">Management Tips</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-2 px-4 border-b">Mouth sores</td>
                        <td className="py-2 px-4 border-b">5-10 days after treatment</td>
                        <td className="py-2 px-4 border-b">Salt water rinses, soft toothbrush, avoid acidic foods</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b">Neuropathy</td>
                        <td className="py-2 px-4 border-b">May develop over time</td>
                        <td className="py-2 px-4 border-b">Warm gloves/socks, gentle massage, report symptoms early</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b">Constipation/Diarrhea</td>
                        <td className="py-2 px-4 border-b">Varies by medication</td>
                        <td className="py-2 px-4 border-b">Stay hydrated, adjust fiber intake, ask about medications</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b">Skin changes</td>
                        <td className="py-2 px-4 border-b">May develop over time</td>
                        <td className="py-2 px-4 border-b">Fragrance-free moisturizers, gentle cleansers, sun protection</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Recovery Section */}
              <section className="mb-12" id="recovery">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                  <Heart className="w-8 h-8 mr-2 text-blue-600" />
                  Between Treatments: Recovery and Self-Care
                </h2>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">The Chemo Cycle</h3>
                <p className="text-gray-700 mb-4">
                  Chemotherapy typically follows a cycle (e.g., treatment every 2-3 weeks) to allow your body time to recover. Here's what to expect in the days following treatment:
                </p>
                
                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  {[
                    { day: "Days 1-3", title: "Immediate Aftermath", desc: "May feel okay due to steroids from pre-meds" },
                    { day: "Days 3-7", title: "Side Effect Peak", desc: "When most side effects appear" },
                    { day: "Days 7-14", title: "Recovery Window", desc: "Gradual improvement before next cycle" },
                  ].map((item, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <div className="bg-blue-100 text-blue-800 font-bold py-1 px-3 rounded-full text-sm w-fit mb-2">
                        {item.day}
                      </div>
                      <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-700 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Nutrition During Recovery</h3>
                <p className="text-gray-700 mb-4">
                  Eating well can help your body recover between treatments. Focus on:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">When You Can Eat Normally</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>High-protein foods for cell repair</li>
                      <li>Colorful fruits and vegetables</li>
                      <li>Whole grains for energy</li>
                      <li>Healthy fats like avocados, nuts</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">When Eating is Difficult</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Nutrition shakes/smoothies</li>
                      <li>Broth-based soups</li>
                      <li>Soft, bland foods</li>
                      <li>Small frequent meals</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
                  <p className="text-gray-700">
                    <span className="text-blue-600 font-medium">Tip:</span> Don't stress about "perfect" eating. During chemo, getting calories is more important than eating "clean." If all you can manage is toast or ice cream some days, that's okay.
                  </p>
                </div>
              </section>

              {/* Emotional Support Section */}
              <section className="mb-12" id="emotional-support">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                  <Smile className="w-8 h-8 mr-2 text-blue-600" />
                  Emotional and Mental Health Support
                </h2>

                <p className="text-gray-700 mb-6">
                  The emotional toll of chemotherapy can be just as challenging as the physical side effects. Here's how to care for your mental health:
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Common Emotional Responses</h3>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {[
                    { title: "Anxiety", desc: "Worry about treatment, outcomes, or the unknown" },
                    { title: "Mood Swings", desc: "From steroids, stress, or the physical toll" },
                    { title: "Isolation", desc: "Feeling disconnected from others' normal lives" },
                    { title: "Grief", desc: "For lost health, hair, or aspects of your identity" },
                  ].map((item, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-bold text-gray-900">{item.title}</h4>
                      <p className="text-gray-700 mt-1">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Coping Strategies</h3>
                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                  <li><strong>Join a support group:</strong> Connecting with others going through similar experiences can be invaluable.</li>
                  <li><strong>Consider therapy:</strong> A counselor specializing in cancer can provide tools to manage emotions.</li>
                  <li><strong>Practice mindfulness:</strong> Meditation, deep breathing, or gentle yoga can help manage stress.</li>
                  <li><strong>Journal:</strong> Writing down thoughts and feelings can be therapeutic.</li>
                  <li><strong>Set small goals:</strong> Celebrate small victories to maintain a sense of accomplishment.</li>
                  <li><strong>Limit social media:</strong> Comparing your journey to others' highlight reels can be discouraging.</li>
                </ul>

                <div className="bg-pink-50 border-l-4 border-pink-400 p-4 mb-8">
                  <p className="text-gray-700">
                    <span className="font-medium">Remember:</span> It's okay to not be okay sometimes. Chemo is hard. Allow yourself to feel whatever emotions come up without judgment.
                  </p>
                </div>
              </section>

              {/* Final Thoughts */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>
                <p className="text-gray-700 mb-4">
                  Going through chemotherapy is one of the most challenging experiences a person can face, but it's also a testament to human resilience. While the road may be difficult, remember:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                  <li>This is temporary - treatment won't last forever</li>
                  <li>Your medical team wants to help - communicate openly with them</li>
                  <li>It's okay to ask for and accept help from others</li>
                  <li>Your worth isn't defined by your productivity during treatment</li>
                  <li>Millions have walked this path before you - you're not alone</li>
                </ul>
                <p className="text-gray-700">
                  As someone who's been through it, my strongest advice is to take it one day at a time. Some days will be hard, but others will surprise you with their normalcy. Be gentle with yourself, celebrate small victories, and remember - you're stronger than you think.
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
                        Dr. Sarah Chen, Oncologist
                      </a>
                    </p>
                    <p className="text-sm text-gray-600 mb-1">
                      — Written by{" "}
                      <a href="#" className="text-blue-600 hover:underline font-medium">
                        Jessica Thompson
                      </a>{" "}
                      (Cancer survivor)
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

              {/* Resources Box */}
              <div className="bg-blue-50 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Helpful Resources</h3>
                <ul className="space-y-3">
                  {[
                    { name: "American Cancer Society", url: "#" },
                    { name: "Chemo Care Tips", url: "#" },
                    { name: "Cancer Support Communities", url: "#" },
                    { name: "Managing Side Effects Guide", url: "#" },
                  ].map((resource, index) => (
                    <li key={index}>
                      <a href={resource.url} className="text-blue-600 hover:underline flex items-start gap-2">
                        <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                        </svg>
                        {resource.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-teal-50 rounded-lg p-6 mb-8">
                <div className="mb-4">
                  <h3 className="text-sm font-bold text-teal-800 uppercase tracking-wide mb-2">CANCER SUPPORT NEWSLETTER</h3>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Practical tips from survivors</h4>
                  <p className="text-gray-700 text-sm">
                    Get real advice from people who've been through treatment, delivered weekly.
                  </p>
                </div>

                <form onSubmit={handleEmailSubmit} className="space-y-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200"
                  >
                    SUBSCRIBE
                  </button>
                </form>

                <p className="text-xs text-gray-600 mt-3">
                  Your{" "}
                  <a href="#" className="text-teal-600 hover:underline">
                    privacy
                  </a>{" "}
                  is important to us
                </p>
              </div>

              {/* Quick Tips Box */}
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Tips from Survivors</h3>
                <div className="space-y-4">
                  {[
                    "Suck on ice chips during infusions to help with mouth sores",
                    "Bring a comforting scent (like lavender) to mask hospital smells",
                    "Take photos to document your journey - you'll want them later",
                    "Create a chemo playlist of uplifting songs",
                    "Pack a 'chemo bag' the night before so you're not rushed",
                  ].map((tip, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="bg-blue-100 p-1 rounded-full text-blue-600 mt-0.5">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-gray-700 text-sm">{tip}</p>
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