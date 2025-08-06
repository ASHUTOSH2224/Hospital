"use client"

import { useEffect, useState } from "react"
import { User, Calendar, HeartPulse, Moon, Sun, Clock, Activity } from "lucide-react"

export default function SleepHeartHealthArticle() {
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

  const tabs = ["Overview", "Research", "Sleep Stages", "Tips", "FAQ"]

  return (
    <div className="min-h-screen bg-white pt-20 md:pt-32">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content - now takes up remaining space */}
          <div className="lg:w-2/3">
            {/* Header Section */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Getting Too Much and Too Little Sleep Can Hurt Your Heart
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

              {/* Rest of your main content remains exactly the same */}
              {/* Intro Text */}
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Did you know that sleep can offset your risk of heart attack? New research reveals that both insufficient
                and excessive sleep may significantly impact cardiovascular health.
              </p>

              {/* Main Image */}
              <div className="mb-8">
                <img
                  src="/Female_Sleeping_732x549-thumbnail.jpg"
                  alt="Person sleeping peacefully with heart rate monitor"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>

              {/* Key Takeaways */}
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8 rounded-r-lg">
                <h3 className="text-lg font-bold text-blue-800 mb-2">Key Takeaways</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Adults should aim for 7-9 hours of sleep per night for optimal heart health</li>
                  <li>Chronic sleep deprivation increases risk of hypertension by 45%</li>
                  <li>Sleeping more than 9 hours regularly may indicate underlying health issues</li>
                  <li>Quality of sleep is just as important as quantity</li>
                  <li>Sleep apnea directly impacts cardiovascular function</li>
                </ul>
              </div>

              {/* Overview Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">The Sleep-Heart Connection</h2>
                <p className="text-gray-700 mb-4">
                  Sleep isn't just about rest—it's when your body performs critical maintenance on your cardiovascular
                  system. During sleep, your heart rate and blood pressure naturally dip, giving your heart a much-needed
                  break. This nightly "tune-up" helps regulate hormones, reduce inflammation, and repair blood vessels.
                </p>
                <p className="text-gray-700 mb-6">
                  When this process is disrupted—whether by too little or too much sleep—it can lead to a cascade of
                  cardiovascular problems. Research shows that people who consistently sleep less than 6 hours have a{' '}
                  <span className="font-semibold">20% higher risk</span> of heart attack, while those sleeping more than
                  9 hours have a <span className="font-semibold">34% increased risk</span>.
                </p>

                {/* Sleep Duration Impact Table */}
                <div className="mb-8 overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Sleep Duration
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Cardiovascular Risk
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Associated Conditions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          Less than 6 hours
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          20-32% increased risk
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          Hypertension, coronary artery disease, stroke
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          7-9 hours (optimal)
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          Lowest risk
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          Healthy cardiovascular function
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          More than 9 hours
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          34-45% increased risk
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          Inflammation, diabetes, obesity
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">How Sleep Affects Your Heart</h3>
                <p className="text-gray-700 mb-4">
                  The relationship between sleep and heart health works through several biological pathways:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 ml-4">
                  <li>
                    <span className="font-semibold">Blood pressure regulation:</span> During deep sleep, your blood
                    pressure drops by 10-20% (nocturnal dipping). Missing this dip keeps pressure elevated.
                  </li>
                  <li>
                    <span className="font-semibold">Inflammation control:</span> Poor sleep increases inflammatory
                    markers like C-reactive protein, which damages arteries.
                  </li>
                  <li>
                    <span className="font-semibold">Metabolic function:</span> Sleep loss disrupts glucose metabolism
                    and insulin sensitivity, risk factors for heart disease.
                  </li>
                  <li>
                    <span className="font-semibold">Autonomic nervous system:</span> Inadequate sleep keeps your body in
                    "fight or flight" mode, stressing the heart.
                  </li>
                </ul>
              </section>

              {/* Research Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">What the Research Shows</h2>
                <div className="mb-8 p-6 bg-gray-50 rounded-lg border-l-4 border-blue-400">
                  <div className="flex items-start">
                    <HeartPulse className="flex-shrink-0 h-6 w-6 text-blue-500 mr-3 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Landmark Sleep Studies</h3>
                      <p className="text-gray-700 mb-4">
                        A comprehensive 2021 meta-analysis in the <em>European Heart Journal</em> reviewed data from over
                        1 million participants across 43 studies found:
                      </p>
                      <ul className="list-disc list-inside text-gray-700 mb-4 ml-4 space-y-1">
                        <li>Short sleepers had 17% higher risk of coronary heart disease</li>
                        <li>Long sleepers had 23% higher risk</li>
                        <li>Optimal sleep duration showed lowest cardiovascular mortality</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Sleep Apnea and Heart Disease</h3>
                <p className="text-gray-700 mb-4">
                  Obstructive sleep apnea (OSA), where breathing repeatedly stops during sleep, has particularly strong
                  links to cardiovascular problems:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                  <li>People with untreated OSA are 2-4 times more likely to develop heart arrhythmias</li>
                  <li>OSA increases risk of heart failure by 140%</li>
                  <li>58% of patients with treatment-resistant hypertension have undiagnosed sleep apnea</li>
                  <li>CPAP therapy can reduce cardiovascular risk by 20-30% in OSA patients</li>
                </ul>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <div className="flex items-center mb-3">
                      <Moon className="h-5 w-5 text-blue-600 mr-2" />
                      <h4 className="text-lg font-bold text-gray-900">Short Sleep Effects</h4>
                    </div>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Increased blood pressure</li>
                      <li>Higher cortisol levels</li>
                      <li>Elevated sympathetic nervous activity</li>
                      <li>Impaired glucose tolerance</li>
                      <li>Increased arterial stiffness</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <div className="flex items-center mb-3">
                      <Sun className="h-5 w-5 text-purple-600 mr-2" />
                      <h4 className="text-lg font-bold text-gray-900">Long Sleep Effects</h4>
                    </div>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Increased inflammatory markers</li>
                      <li>Reduced physical activity</li>
                      <li>Potential indicator of underlying illness</li>
                      <li>Disrupted circadian rhythms</li>
                      <li>Poorer sleep quality overall</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Sleep Stages Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Sleep Stages</h2>
                <p className="text-gray-700 mb-4">
                  Not all sleep is created equal. Your sleep cycles through different stages, each playing a unique role
                  in heart health:
                </p>

                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">The Sleep Cycle Breakdown</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-3 rounded-full mr-4">
                        <Clock className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-1">NREM Stage 1 (Light Sleep)</h4>
                        <p className="text-gray-700">
                          Transition phase where heart rate begins to slow. Lasts 1-5 minutes per cycle.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-3 rounded-full mr-4">
                        <Clock className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-1">NREM Stage 2</h4>
                        <p className="text-gray-700">
                          Heart rate and body temperature drop further. Important for memory consolidation. Makes up
                          about 50% of total sleep.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-3 rounded-full mr-4">
                        <Clock className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-1">NREM Stage 3 (Deep Sleep)</h4>
                        <p className="text-gray-700">
                          Critical for physical restoration. Blood pressure drops significantly. Growth hormone is
                          released for tissue repair.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-3 rounded-full mr-4">
                        <Clock className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-1">REM Sleep</h4>
                        <p className="text-gray-700">
                          Brain activity increases, dreams occur. Heart rate and blood pressure become variable. Important
                          for emotional regulation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6 rounded-r-lg">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Why Deep Sleep Matters Most</h4>
                  <p className="text-gray-700">
                    Deep sleep (NREM Stage 3) is when the most cardiovascular restoration occurs. During this phase:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mt-2 ml-4 space-y-1">
                    <li>Blood pressure reaches its lowest point</li>
                    <li>Heart rate becomes slow and regular</li>
                    <li>The parasympathetic nervous system dominates (rest-and-digest mode)</li>
                    <li>Inflammatory cytokines are regulated</li>
                  </ul>
                </div>
              </section>

              {/* Tips Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Practical Tips for Heart-Healthy Sleep</h2>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                      <Moon className="h-5 w-5 text-blue-600 mr-2" />
                      Sleep Hygiene Essentials
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                      <li>Maintain consistent sleep/wake times (even weekends)</li>
                      <li>Keep bedroom temperature between 60-67°F (15-19°C)</li>
                      <li>Use blackout curtains and eliminate light pollution</li>
                      <li>Invest in a comfortable, supportive mattress</li>
                      <li>Reserve bed only for sleep and intimacy</li>
                    </ul>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                      <Activity className="h-5 w-5 text-green-600 mr-2" />
                      Daily Habits That Help
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                      <li>Get morning sunlight exposure to regulate circadian rhythm</li>
                      <li>Exercise regularly (but not within 3 hours of bedtime)</li>
                      <li>Limit caffeine after 2pm and alcohol within 3 hours of bed</li>
                      <li>Establish a relaxing pre-sleep routine</li>
                      <li>Manage stress through meditation or deep breathing</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">When to See a Doctor</h3>
                <p className="text-gray-700 mb-4">
                  Consult a healthcare provider if you experience any of these warning signs:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                  <li>Chronic difficulty falling or staying asleep</li>
                  <li>Loud snoring or gasping during sleep</li>
                  <li>Daytime fatigue despite adequate time in bed</li>
                  <li>Frequent morning headaches</li>
                  <li>Partner notices you stop breathing during sleep</li>
                  <li>Uncontrollable urge to move legs at night</li>
                </ul>
              </section>

              {/* FAQ Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Can I "catch up" on lost sleep during weekends?
                    </h3>
                    <p className="text-gray-700">
                      While sleeping in on weekends can help reduce some sleep debt, it doesn't completely reverse the
                      cardiovascular effects of chronic weekday sleep deprivation. The healthiest approach is consistent,
                      adequate sleep nightly.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Is napping good for heart health?
                    </h3>
                    <p className="text-gray-700">
                      Short naps (20-30 minutes) can be beneficial, especially if you're sleep deprived. However, long
                      or late-day naps may disrupt nighttime sleep. Those with insomnia should generally avoid napping.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      How does menopause affect sleep and heart health?
                    </h3>
                    <p className="text-gray-700">
                      Hormonal changes during menopause often disrupt sleep, and the resulting sleep problems
                      (particularly hot flashes at night) are associated with increased cardiovascular risk. Managing
                      menopausal symptoms can help protect both sleep quality and heart health.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Are sleep trackers accurate for monitoring heart health?
                    </h3>
                    <p className="text-gray-700">
                      Consumer sleep trackers can provide general trends but aren't as accurate as medical-grade devices.
                      They're useful for noticing patterns but shouldn't replace professional evaluation if you have
                      concerns.
                    </p>
                  </div>
                </div>
              </section>

              {/* Conclusion */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>
                <p className="text-gray-700 mb-4">
                  Sleep is emerging as one of the most important—and modifiable—risk factors for cardiovascular disease.
                  Unlike genetic predispositions or aging, sleep habits are largely within our control.
                </p>
                <p className="text-gray-700 mb-4">
                  The sweet spot for heart health appears to be 7-9 hours of quality sleep per night. Both insufficient
                  and excessive sleep can trigger physiological changes that stress the cardiovascular system over time.
                </p>
                <p className="text-gray-700">
                  If you're struggling with sleep duration or quality, small consistent changes can make a big difference.
                  Prioritizing sleep isn't just about feeling rested—it's one of the most powerful things you can do to
                  protect your heart for years to come.
                </p>
              </section>
            </div>
          </div>

          {/* Sidebar - now fixed to the right */}
          <div className="lg:w-1/3 lg:pl-8">
            {/* Author Info */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8 ">
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
                      Dr. Sarah Chen, Cardiologist
                    </a>
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    — Written by{" "}
                    <a href="#" className="text-blue-600 hover:underline font-medium">
                      Michael Thompson, Sleep Specialist
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

            {/* Key Statistics */}
            <div className="bg-blue-50 rounded-lg p-6 mb-8 ">
              <h3 className="text-lg font-bold text-blue-800 mb-4">Sleep & Heart Health By The Numbers</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <HeartPulse className="h-4 w-4 text-blue-600" />
                  </div>
                  <span className="text-sm text-gray-700">
                    <span className="font-bold">45%</span> higher risk of hypertension in short sleepers
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <HeartPulse className="h-4 w-4 text-blue-600" />
                  </div>
                  <span className="text-sm text-gray-700">
                    <span className="font-bold">34%</span> increased heart attack risk with long sleep duration
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <HeartPulse className="h-4 w-4 text-blue-600" />
                  </div>
                  <span className="text-sm text-gray-700">
                    <span className="font-bold">58%</span> of treatment-resistant hypertension cases involve sleep apnea
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <HeartPulse className="h-4 w-4 text-blue-600" />
                  </div>
                  <span className="text-sm text-gray-700">
                    <span className="font-bold">20%</span> reduction in cardiovascular events with proper sleep apnea treatment
                  </span>
                </li>
              </ul>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-teal-50 rounded-lg p-6 mb-8">
              <div className="mb-4">
                <h3 className="text-sm font-bold text-teal-800 uppercase tracking-wide mb-2">HEALTHLINE NEWSLETTER</h3>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Sleep & Wellness Updates</h4>
                <p className="text-gray-700 text-sm">
                  Get the latest research on sleep's impact on heart health delivered to your inbox.
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

            {/* Related Articles */}
            <div className="bg-gray-50 rounded-lg p-6 sticky">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Related Articles</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-blue-600 hover:underline font-medium">
                    The Best Sleep Positions for Heart Health
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline font-medium">
                    How to Create the Perfect Sleep Environment
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline font-medium">
                    Natural Remedies for Insomnia
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline font-medium">
                    The Connection Between Gut Health and Sleep
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline font-medium">
                    Sleep Supplements: What Works and What Doesn't
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