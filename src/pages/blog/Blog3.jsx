"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Quote } from "lucide-react"

export default function CarnieWilsonDepressionArticle() {
  const [email, setEmail] = useState("")
  const [activeTab, setActiveTab] = useState("Overview")

  const handleEmailSubmit = (e) => {
    e.preventDefault()
    console.log("Email submitted:", email)
    setEmail("")
  }

    useEffect(() => {
      // Scroll to top when the component mounts
      window.scrollTo(0, 0)
    }, [])

  const tabs = ["Overview", "Symptoms", "Coping", "Treatment", "Resources"]

  return (
    <div className="min-h-screen bg-white pt-20 md:pt-32">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header Section */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Carnie Wilson on Living with Depression: "It Ebbs and Flows, and That's OK"
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
                Carnie Wilson, Grammy-nominated singer and member of Wilson Phillips, has been open about her lifelong
                struggle with depression. Her journey offers hope and perspective for millions dealing with mental health
                challenges.
              </p>

              {/* Main Image */}
              <div className="mb-8">
                <img
                  src="/carnie-wilson-732x549-thumbnail.jpg"
                  alt="Carnie Wilson smiling during an interview"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <p className="text-sm text-gray-500 mt-2">Carnie Wilson performing in 2022 (Photo: Getty Images)</p>
              </div>

              {/* Highlight Quote */}
              <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-8">
                <Quote className="w-6 h-6 text-purple-600 mb-2" />
                <p className="text-gray-700 italic">
                  "Depression isn't something you just 'get over.' For me, it's been a lifelong companion that comes and
                  goes. The point is that it ebbs and flows, and that's OK. What matters is learning how to ride those
                  waves."
                </p>
                <p className="text-purple-600 font-medium mt-2">— Carnie Wilson, People Magazine Interview (2023)</p>
              </div>

              <p className="text-gray-700 mb-8">
                In this in-depth article, we'll explore Carnie Wilson's journey with depression, the symptoms she's
                experienced, coping mechanisms that have helped her, and resources for those facing similar challenges.
              </p>
            </div>

            {/* Carnie's Journey Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Carnie Wilson's Journey with Depression</h2>

              {/* Early Years */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Early Signs and Family History</h3>
                <p className="text-gray-700 mb-4">
                  Carnie Wilson first experienced symptoms of depression in her teenage years, though she didn't
                  recognize them as such at the time. Coming from a musical family (her father is Beach Boys legend Brian
                  Wilson), mental health challenges were familiar but not always discussed openly.
                </p>
                <p className="text-gray-700 mb-4">
                  In interviews, Carnie has spoken about how her father's well-documented struggles with mental illness
                  created both awareness and fear about her own mental health:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                  <li>Genetic predisposition to depression and anxiety</li>
                  <li>Witnessing mental health crises in childhood</li>
                  <li>Pressure of growing up in the public eye</li>
                  <li>Using food as emotional comfort from an early age</li>
                </ul>
                <p className="text-gray-700 mb-6">
                  Carnie's experience highlights how mental health challenges often have both biological and
                  environmental components.
                </p>
              </div>

              {/* Career Success vs Inner Struggle */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Career Success vs. Inner Struggle</h3>
                <p className="text-gray-700 mb-4">
                  While Wilson Phillips achieved massive success in the early 1990s with hits like "Hold On" and
                  "Release Me," Carnie was privately battling depression and weight issues. This contrast between public
                  success and private pain is common among those with mental health conditions.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <h4 className="font-bold text-gray-800 mb-2">Key Milestones in Carnie's Mental Health Journey:</h4>
                    <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-2">Year</th>
                        <th className="text-left py-2">Event</th>
                        <th className="text-left py-2">Mental Health Impact</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-2">1990</td>
                        <td className="py-2">Wilson Phillips debut album success</td>
                        <td className="py-2">Public pressure exacerbated anxiety</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-2">1999</td>
                        <td className="py-2">Underwent gastric bypass surgery</td>
                        <td className="py-2">Improved physical health but depression persisted</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-2">2007</td>
                        <td className="py-2">Began speaking openly about depression</td>
                        <td className="py-2">Found purpose in mental health advocacy</td>
                      </tr>
                      <tr>
                        <td className="py-2">2020</td>
                        <td className="py-2">Pandemic isolation</td>
                        <td className="py-2">Depression returned; sought new treatment</td>
                      </tr>
                    </tbody>
                  </table>
                    </div>
                </div>
                <p className="text-gray-700 mb-6">
                  Carnie's willingness to discuss these challenges publicly has helped destigmatize mental health issues,
                  particularly for women in the entertainment industry.
                </p>
              </div>

              {/* Current Perspective */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Current Perspective and Advocacy</h3>
                <p className="text-gray-700 mb-4">
                  Today, Carnie approaches her mental health with hard-won wisdom. She emphasizes that depression isn't
                  a personal failing but a medical condition that requires ongoing management.
                </p>
                <p className="text-gray-700 mb-4">
                  Her key messages about living with depression include:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                  <li>Acceptance is more productive than resistance</li>
                  <li>Progress isn't linear - setbacks are normal</li>
                  <li>Medication can be life-changing when properly managed</li>
                  <li>Creative expression remains vital to her wellbeing</li>
                </ul>
                <p className="text-gray-700 mb-6">
                  Carnie now serves on the board of several mental health organizations and frequently speaks at events
                  about depression awareness.
                </p>
              </div>
            </section>

            {/* Recognizing Depression Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Recognizing Depression: Carnie's Symptoms</h2>

              {/* Emotional Symptoms */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Emotional Symptoms Carnie Has Experienced</h3>
                <p className="text-gray-700 mb-4">
                  In various interviews and her memoir, Carnie has described the emotional landscape of her depression:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-bold text-purple-800 mb-2">Persistent Sadness</h4>
                    <p className="text-gray-700">
                      "It's like wearing gray-colored glasses - everything seems bleak even when logically I know it's not."
                    </p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-bold text-purple-800 mb-2">Emotional Numbness</h4>
                    <p className="text-gray-700">
                      "Sometimes I don't feel sad - I don't feel anything at all. That emptiness can be scarier than sadness."
                    </p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-bold text-purple-800 mb-2">Guilt and Shame</h4>
                    <p className="text-gray-700">
                      "I'd look at my beautiful daughters and feel guilty for not being happier. That guilt fed the depression."
                    </p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-bold text-purple-800 mb-2">Hopelessness</h4>
                    <p className="text-gray-700">
                      "During bad episodes, I truly believed the darkness would never lift, even though it always had before."
                    </p>
                  </div>
                </div>
              </div>

              {/* Physical Symptoms */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Physical Manifestations</h3>
                <p className="text-gray-700 mb-4">
                  Carnie has been particularly open about how depression affects her physically:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                  <li><strong>Fatigue:</strong> "Some days, getting out of bed felt like running a marathon."</li>
                  <li><strong>Appetite changes:</strong> "I'd either eat constantly or have no interest in food."</li>
                  <li><strong>Sleep disturbances:</strong> "I'd sleep 12 hours and still feel exhausted, or lie awake all night."</li>
                  <li><strong>Physical pain:</strong> "My body ached in ways doctors couldn't explain."</li>
                </ul>
                <p className="text-gray-700 mb-6">
                  These physical symptoms often made it harder to recognize her struggles as depression rather than just
                  physical health issues.
                </p>
              </div>

              {/* Creative Impact */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Impact on Creativity</h3>
                <p className="text-gray-700 mb-4">
                  As an artist, Carnie has described how depression affects her creative process:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <h4 className="font-bold text-gray-800 mb-2">Creative Process Changes During Depression</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold text-purple-700">Normal State</h5>
                      <ul className="list-disc list-inside text-gray-700 ml-4">
                        <li>Excitement about new projects</li>
                        <li>Energy for rehearsals</li>
                        <li>Joy in performing</li>
                        <li>Creative flow state accessible</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-purple-700">Depressive Episode</h5>
                      <ul className="list-disc list-inside text-gray-700 ml-4">
                        <li>Music feels pointless</li>
                        <li>Rehearsals feel exhausting</li>
                        <li>Stage fright intensifies</li>
                        <li>Creative blocks occur</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mb-6">
                  Carnie notes that learning to separate her self-worth from her creative output has been crucial to
                  managing these fluctuations.
                </p>
              </div>
            </section>

            {/* Coping Strategies Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Carnie's Coping Strategies</h2>

              {/* Professional Help */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Support System</h3>
                <p className="text-gray-700 mb-4">
                  Carnie has emphasized that professional help forms the foundation of her mental health management:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                  <li><strong>Therapy:</strong> Regular sessions with a psychologist she trusts</li>
                  <li><strong>Medication:</strong> Careful psychiatric management of antidepressants</li>
                  <li><strong>Medical team:</strong> Coordination between her therapist, psychiatrist, and primary care doctor</li>
                  <li><strong>Nutritionist:</strong> Helps manage emotional eating patterns</li>
                </ul>
                <p className="text-gray-700 mb-6">
                  "It took years to find the right combination of professionals," Carnie admits. "But now I see my mental
                  health team as essential as my bandmates - we're all working together."
                </p>
              </div>

              {/* Daily Practices */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Daily Mental Health Practices</h3>
                <p className="text-gray-700 mb-4">
                  Carnie's non-negotiable daily practices to maintain stability:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-bold text-gray-800 mb-2">Morning Routine</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-4">
                      <li>Meditation (10-20 minutes)</li>
                      <li>Protein-rich breakfast</li>
                      <li>Gratitude journaling</li>
                      <li>Sunlight exposure</li>
                    </ul>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-bold text-gray-800 mb-2">Evening Routine</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-4">
                      <li>Digital detox 1 hour before bed</li>
                      <li>Herbal tea ritual</li>
                      <li>Light stretching</li>
                      <li>Sleep hygiene practices</li>
                    </ul>
                  </div>
                </div>
                <p className="text-gray-700 mb-6">
                  "These routines aren't glamorous," Carnie says, "but they create guardrails that keep me from falling
                  too far into the darkness."
                </p>
              </div>

              {/* Creative Outlets */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Creative and Spiritual Outlets</h3>
                <p className="text-gray-700 mb-4">
                  Carnie has found several practices particularly helpful for emotional regulation:
                </p>
                <div className="bg-purple-50 p-4 rounded-lg mb-6">
                  <h4 className="font-bold text-purple-800 mb-2">Carnie's Top Therapeutic Activities</h4>
                  <div className="grid md:grid-cols-3 gap-4 text-center">
                    <div className="p-3">
                      <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                        <span className="text-purple-600 text-2xl">🎵</span>
                      </div>
                      <p className="font-medium">Singing</p>
                    </div>
                    <div className="p-3">
                      <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                        <span className="text-purple-600 text-2xl">✍️</span>
                      </div>
                      <p className="font-medium">Journaling</p>
                    </div>
                    <div className="p-3">
                      <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                        <span className="text-purple-600 text-2xl">🚶‍♀️</span>
                      </div>
                      <p className="font-medium">Nature Walks</p>
                    </div>
                    <div className="p-3">
                      <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                        <span className="text-purple-600 text-2xl">🧘‍♀️</span>
                      </div>
                      <p className="font-medium">Yoga</p>
                    </div>
                    <div className="p-3">
                      <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                        <span className="text-purple-600 text-2xl">👨‍👩‍👧</span>
                      </div>
                      <p className="font-medium">Family Time</p>
                    </div>
                    <div className="p-3">
                      <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                        <span className="text-purple-600 text-2xl">🙏</span>
                      </div>
                      <p className="font-medium">Prayer</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Treatment Insights Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Treatment Insights from Carnie's Experience</h2>

              {/* Medication Journey */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">The Medication Journey</h3>
                <p className="text-gray-700 mb-4">
                  Carnie has been transparent about her complex relationship with antidepressants:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                  <li>Tried 4 different medications before finding effective ones</li>
                  <li>Experienced side effects that required adjustments</li>
                  <li>Works closely with psychiatrist to monitor effectiveness</li>
                  <li>Periodically reevaluates need for medication</li>
                </ul>
                <p className="text-gray-700 mb-6">
                  "Medication isn't a magic cure," Carnie explains, "but for me, it's like insulin for a diabetic - my
                  brain needs it to function properly."
                </p>
              </div>

              {/* Therapy Approaches */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Therapeutic Approaches That Helped</h3>
                <p className="text-gray-700 mb-4">
                  Over the years, Carnie has benefited from various therapeutic modalities:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <h4 className="font-bold text-gray-800 mb-2">Effectiveness of Different Therapies for Carnie</h4>
                    <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-2">Therapy Type</th>
                        <th className="text-left py-2">Duration</th>
                        <th className="text-left py-2">Benefits</th>
                        <th className="text-left py-2">Limitations</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-2">CBT</td>
                        <td className="py-2">2 years</td>
                        <td className="py-2">Helped change negative thought patterns</td>
                        <td className="py-2">Less effective for deep emotional wounds</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-2">Psychodynamic</td>
                        <td className="py-2">5 years</td>
                        <td className="py-2">Addressed childhood roots of depression</td>
                        <td className="py-2">Progress was slower</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-2">Group Therapy</td>
                        <td className="py-2">1 year</td>
                        <td className="py-2">Reduced feelings of isolation</td>
                        <td className="py-2">Less personal attention</td>
                      </tr>
                      <tr>
                        <td className="py-2">Mindfulness-Based</td>
                        <td className="py-2">3 years ongoing</td>
                        <td className="py-2">Improved present-moment awareness</td>
                        <td className="py-2">Requires daily practice</td>
                      </tr>
                    </tbody>
                  </table>
                    </div>
                </div>
              </div>

              {/* Hospitalization */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">The Role of Hospitalization</h3>
                <p className="text-gray-700 mb-4">
                  In her darkest periods, Carnie has twice checked herself into psychiatric facilities:
                </p>
                <div className="border-l-4 border-purple-400 pl-4 mb-4">
                  <p className="text-gray-700 italic">
                    "Admitting I needed inpatient care was terrifying but ultimately life-saving. There's no shame in
                    needing that level of support - just as you'd go to the hospital for a physical crisis."
                  </p>
                </div>
                <p className="text-gray-700 mb-6">
                  She advocates for removing stigma around psychiatric hospitalization and emphasizes it's sometimes
                  necessary for safety and stabilization.
                </p>
              </div>
            </section>

            {/* Resources Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Resources and Hope</h2>

              {/* Carnie's Recommended Resources */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Carnie's Recommended Resources</h3>
                <p className="text-gray-700 mb-4">
                  Based on her journey, Carnie suggests these resources for others struggling with depression:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-bold text-purple-800 mb-2">Books</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-4">
                      <li>"The Noonday Demon" by Andrew Solomon</li>
                      <li>"Darkness Visible" by William Styron</li>
                      <li>"First, We Make the Beast Beautiful" by Sarah Wilson</li>
                      <li>"This Is Depression" by Diane McIntosh</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-bold text-purple-800 mb-2">Organizations</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-4">
                      <li>National Alliance on Mental Illness (NAMI)</li>
                      <li>Depression and Bipolar Support Alliance</li>
                      <li>Anxiety and Depression Association of America</li>
                      <li>Mental Health America</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Final Message */}
              <div className="bg-purple-100 p-6 rounded-lg mb-8">
                <h3 className="text-2xl font-bold text-purple-900 mb-4">Carnie's Message of Hope</h3>
                <p className="text-gray-700 mb-4">
                  "If you're in the thick of depression right now, please know this: The fact that you're still here,
                  still breathing, still trying - that's incredible. You are so much stronger than your depression wants
                  you to believe.
                </p>
                <p className="text-gray-700 mb-4">
                  My depression still visits, but now I know it's not a permanent resident. The ebbs and flows are part
                  of my story, but they don't define me. Yours don't define you either.
                </p>
                <p className="text-gray-700">
                  Reach out. Get help. Be stubborn about your healing. You're worth it."
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
                      Dr. Samantha Lewis, MD, Psychiatrist
                    </a>
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    — Written by{" "}
                    <a href="#" className="text-blue-600 hover:underline font-medium">
                      Michael Chen, Mental Health Journalist
                    </a>
                  </p>
                  <p className="text-sm text-gray-600 flex items-center gap-1">
                    — <Calendar className="w-3 h-3" />
                    <a href="#" className="text-blue-600 hover:underline">
                      Updated on March 15, 2024
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-purple-50 rounded-lg p-6 mb-8">
              <div className="mb-4">
                <h3 className="text-sm font-bold text-purple-800 uppercase tracking-wide mb-2">MENTAL HEALTH NEWSLETTER</h3>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Stories of Hope and Recovery</h4>
                <p className="text-gray-700 text-sm">
                  Get inspiring stories and practical mental health advice delivered to your inbox weekly.
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

            {/* Depression Symptoms Checklist */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Depression Symptoms Checklist</h3>
              <p className="text-sm text-gray-600 mb-4">
                Based on Carnie's experiences and clinical depression criteria
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <input type="checkbox" id="symptom1" className="mt-1 mr-2" />
                  <label htmlFor="symptom1" className="text-gray-700 text-sm">
                    Persistent sad, anxious, or "empty" mood
                  </label>
                </div>
                <div className="flex items-start">
                  <input type="checkbox" id="symptom2" className="mt-1 mr-2" />
                  <label htmlFor="symptom2" className="text-gray-700 text-sm">
                    Loss of interest in activities once enjoyed
                  </label>
                </div>
                <div className="flex items-start">
                  <input type="checkbox" id="symptom3" className="mt-1 mr-2" />
                  <label htmlFor="symptom3" className="text-gray-700 text-sm">
                    Significant weight changes
                  </label>
                </div>
                <div className="flex items-start">
                  <input type="checkbox" id="symptom4" className="mt-1 mr-2" />
                  <label htmlFor="symptom4" className="text-gray-700 text-sm">
                    Sleep disturbances (insomnia or oversleeping)
                  </label>
                </div>
                <div className="flex items-start">
                  <input type="checkbox" id="symptom5" className="mt-1 mr-2" />
                  <label htmlFor="symptom5" className="text-gray-700 text-sm">
                    Fatigue or loss of energy
                  </label>
                </div>
                <div className="flex items-start">
                  <input type="checkbox" id="symptom6" className="mt-1 mr-2" />
                  <label htmlFor="symptom6" className="text-gray-700 text-sm">
                    Feelings of worthlessness or guilt
                  </label>
                </div>
              </div>
              <div className="mt-4 text-center">
                <button className="text-purple-600 text-sm font-medium hover:underline">
                  Download Full Checklist (PDF)
                </button>
              </div>
            </div>

            {/* Crisis Resources */}
            <div className="bg-red-50 border-l-4 border-red-400 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">In Crisis?</h3>
              <p className="text-sm text-gray-700 mb-4">
                If you or someone you know is struggling or in crisis, help is available.
              </p>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-red-600 hover:underline font-medium">
                    Call or text 988 (U.S. Suicide & Crisis Lifeline)
                  </a>
                </li>
                <li>
                  <a href="#" className="text-red-600 hover:underline font-medium">
                    Crisis Text Line: Text HOME to 741741
                  </a>
                </li>
                <li>
                  <a href="#" className="text-red-600 hover:underline font-medium">
                    Find a therapist (Psychology Today)
                  </a>
                </li>
                <li>
                  <a href="#" className="text-red-600 hover:underline font-medium">
                    Emergency room or 911 for immediate danger
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