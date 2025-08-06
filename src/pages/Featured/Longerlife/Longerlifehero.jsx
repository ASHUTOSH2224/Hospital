"use client"

import { useState } from "react"
import { User, Calendar } from "lucide-react"

export default function LongevityArticleGuide() {
  const [email, setEmail] = useState("")
  const [activeTab, setActiveTab] = useState("Science")

  const handleEmailSubmit = (e) => {
    e.preventDefault()
    console.log("Email submitted:", email)
    setEmail("")
  }

  const tabs = ["Science", "Methods", "Implementation", "Takeaway"]

  return (
    <div className="min-h-screen bg-white pt-20 md:pt-32">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header Section */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                5 Science-Backed Ways to Live a Longer Life: Evidence-Based Strategies for Longevity
              </h1>

              {/* Navigation Tabs */}
              <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-200">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                      activeTab === tab
                        ? "border-teal-500 text-teal-600"
                        : "border-transparent text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Intro Text */}
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Discover the scientifically proven methods that can add years to your life and life to your years,
                backed by decades of research and blue zone studies.
              </p>

              {/* Main Image */}
              <div className="mb-8">
                <img
                  src="/longevity.avif"
                  alt="Elderly person exercising outdoors in a peaceful setting"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>

              {/* Article Description */}
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
                <p className="text-gray-700">
                  <span className="text-blue-600 font-medium">L</span>ongevity isn't just about genetics—research shows
                  that lifestyle choices account for up to 80% of how long and how well we live.
                </p>
              </div>

              <p className="text-gray-700 mb-8">
                Keep reading to discover the five evidence-based strategies that can significantly extend your lifespan
                and improve your quality of life.
              </p>
            </div>

            {/* The Science Behind Longevity Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">The Science Behind Longevity</h2>

              <p className="text-gray-700 mb-6">
                Research from the world's longest-living populations, known as{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Blue Zones
                </a>
                , has revealed consistent patterns that contribute to exceptional longevity. These findings, combined
                with modern scientific research, provide a roadmap for extending human lifespan.
              </p>

              <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-8">
                <p className="text-gray-700">
                  <span className="font-semibold">Key Finding:</span> Studies show that only 20-25% of longevity is
                  determined by genetics, while 75-80% is influenced by lifestyle factors we can control.
                </p>
              </div>
            </section>

            {/* 5 Science-Backed Ways Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">5 Science-Backed Ways to Live Longer</h2>

              {/* 1. Follow a Mediterranean-Style Diet */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Follow a Mediterranean-Style Diet</h3>
                <p className="text-gray-700 mb-4">
                  The{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Mediterranean diet
                  </a>{" "}
                  has been extensively studied and consistently linked to increased longevity. A landmark{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    2018 study
                  </a>{" "}
                  following over 25,000 women for 25 years found that those who closely followed a Mediterranean diet
                  had a 25% lower risk of death.
                </p>

                <p className="text-gray-700 mb-4">Key components include:</p>
                <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                  <li>High consumption of fruits, vegetables, and whole grains</li>
                  <li>Regular intake of fish and seafood</li>
                  <li>Moderate amounts of dairy and poultry</li>
                  <li>Limited red meat consumption</li>
                  <li>Extra virgin olive oil as the primary fat source</li>
                  <li>Moderate wine consumption with meals</li>
                </ul>

                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                  <p className="text-gray-700">
                    <span className="font-semibold">Research Highlight:</span> The PREDIMED study showed that people
                    following a Mediterranean diet supplemented with extra virgin olive oil or nuts had a 30% reduction
                    in major cardiovascular events.
                  </p>
                </div>
              </div>

              {/* 2. Engage in Regular Physical Activity */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Engage in Regular Physical Activity</h3>
                <p className="text-gray-700 mb-4">
                  Exercise is one of the most powerful longevity interventions available. Research published in{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    JAMA Internal Medicine
                  </a>{" "}
                  found that just 150 minutes of moderate exercise per week can add 3.4 years to your life.
                </p>

                <p className="text-gray-700 mb-4">The optimal exercise combination includes:</p>
                <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                  <li className="text-purple-600">Cardiovascular exercise (walking, swimming, cycling)</li>
                  <li className="text-purple-600">Strength training (resistance exercises, weight lifting)</li>
                  <li className="text-purple-600">Flexibility and balance work (yoga, tai chi)</li>
                  <li className="text-purple-600">High-intensity interval training (HIIT)</li>
                </ul>

                <div className="ml-4 mb-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">The Power of Daily Movement</h4>
                  <p className="text-gray-700 mb-4">
                    A{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      2020 study
                    </a>{" "}
                    of over 44,000 adults found that even 11 minutes of moderate-to-vigorous physical activity daily
                    significantly reduced mortality risk, even among those who were otherwise sedentary for most of the
                    day.
                  </p>
                  <p className="text-gray-700 mb-4">
                    The study revealed that increasing daily activity from 2 minutes to 11 minutes reduced death risk by
                    23%, while going from 11 to 35 minutes provided an additional 17% reduction.
                  </p>
                </div>

                <div className="ml-4 mb-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Strength Training for Longevity</h4>
                  <p className="text-gray-700 mb-4">
                    Research shows that{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      muscle mass preservation
                    </a>{" "}
                    is crucial for healthy aging. Adults lose 3-8% of muscle mass per decade after age 30, but
                    resistance training can prevent and reverse this decline.
                  </p>
                  <p className="text-gray-700 mb-6">
                    A comprehensive study found that adults who engaged in strength training had a 23% lower risk of
                    premature death and a 31% lower risk of cancer-related death.
                  </p>
                </div>
              </div>

              {/* 3. Maintain Strong Social Connections */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Maintain Strong Social Connections</h3>
                <p className="text-gray-700 mb-4">
                  Social isolation can be as harmful to health as smoking 15 cigarettes a day, according to research by{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Brigham Young University
                  </a>
                  . Strong social relationships can increase survival odds by 50%.
                </p>

                <p className="text-gray-700 mb-4">Key aspects of healthy social connections include:</p>
                <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                  <li className="text-green-600">Regular face-to-face interactions with family and friends</li>
                  <li className="text-green-600">Participation in community activities or volunteer work</li>
                  <li className="text-green-600">Maintaining meaningful relationships across different life stages</li>
                  <li className="text-green-600">Having a support network during times of stress</li>
                </ul>

                <div className="bg-green-50 p-4 rounded-lg mb-6">
                  <p className="text-gray-700">
                    <span className="font-semibold">Blue Zone Insight:</span> In Okinawa, Japan, people form
                    "moais"—social support groups that provide emotional and financial support throughout life. This
                    practice is linked to their exceptional longevity.
                  </p>
                </div>
              </div>

              {/* 4. Practice Stress Management and Mindfulness */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">4. Practice Stress Management and Mindfulness</h3>
                <p className="text-gray-700 mb-4">
                  Chronic stress accelerates cellular aging and increases the risk of age-related diseases. Research
                  published in{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Proceedings of the National Academy of Sciences
                  </a>{" "}
                  shows that stress management techniques can actually lengthen telomeres—the protective caps on
                  chromosomes that shorten with age.
                </p>

                <p className="text-gray-700 mb-4">Effective stress management techniques include:</p>
                <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                  <li className="text-indigo-600">Meditation and mindfulness practices</li>
                  <li className="text-indigo-600">Deep breathing exercises</li>
                  <li className="text-indigo-600">Regular sleep schedule (7-9 hours nightly)</li>
                  <li className="text-indigo-600">Time in nature</li>
                  <li className="text-indigo-600">Journaling and gratitude practices</li>
                </ul>

                <div className="ml-4 mb-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">The Science of Sleep and Longevity</h4>
                  <p className="text-gray-700 mb-4">
                    A{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      2019 study
                    </a>{" "}
                    following over 1.3 million people found that both too little sleep (less than 6 hours) and too much
                    sleep (more than 9 hours) were associated with increased mortality risk.
                  </p>
                  <p className="text-gray-700 mb-6">
                    The optimal sleep duration for longevity appears to be 7-8 hours per night, with consistent sleep
                    and wake times being equally important as duration.
                  </p>
                </div>
              </div>

              {/* 5. Avoid Harmful Substances and Limit Alcohol */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">5. Avoid Harmful Substances and Limit Alcohol</h3>
                <p className="text-gray-700 mb-4">
                  Avoiding smoking and limiting alcohol consumption are among the most impactful decisions for
                  longevity. The{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Nurses' Health Study
                  </a>{" "}
                  found that never smoking alone can add 10 years to life expectancy.
                </p>

                <div className="ml-4 mb-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">The Truth About Alcohol and Longevity</h4>
                  <p className="text-gray-700 mb-4">
                    Recent research has challenged the idea that moderate alcohol consumption is beneficial. A{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      2022 study in The Lancet
                    </a>{" "}
                    found that any amount of alcohol consumption increases health risks, particularly for younger
                    adults.
                  </p>
                  <p className="text-gray-700 mb-4">
                    However, some Blue Zone populations do consume small amounts of alcohol with meals. The key factors
                    appear to be:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-6 ml-4">
                    <li>Very moderate consumption (1 glass per day maximum)</li>
                    <li>Consumed with food and in social settings</li>
                    <li>Red wine preference due to antioxidant content</li>
                    <li>No binge drinking patterns</li>
                  </ul>
                </div>

                <div className="ml-4 mb-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Environmental Toxin Reduction</h4>
                  <p className="text-gray-700 mb-4">
                    Minimizing exposure to environmental toxins can also support longevity:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-6 ml-4">
                    <li>Choose organic produce when possible</li>
                    <li>Filter drinking water</li>
                    <li>Use natural cleaning and personal care products</li>
                    <li>Minimize processed food consumption</li>
                    <li>Ensure good indoor air quality</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Implementation Strategies Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Implement These Longevity Strategies</h2>

              <p className="text-gray-700 mb-6">
                The key to successfully adopting longevity practices is gradual implementation and consistency rather
                than perfection. Research shows that small, sustainable changes compound over time to create significant
                health benefits.
              </p>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Start with the 80/20 Rule</h3>
                <p className="text-gray-700 mb-4">
                  Focus on getting 80% of your habits right, 80% of the time. This approach, inspired by the Okinawan
                  principle of{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    "hara hachi bu"
                  </a>{" "}
                  (eating until 80% full), applies to all longevity practices.
                </p>

                <div className="bg-yellow-50 p-4 rounded-lg mb-6">
                  <p className="text-gray-700">
                    <span className="font-semibold">Weekly Goal:</span> Choose one longevity practice to focus on each
                    week. Master it before adding the next one.
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Create Your Longevity Environment</h3>
                <p className="text-gray-700 mb-4">
                  Environmental design is crucial for long-term success. Make healthy choices the easy choices:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4">
                  <li>Stock your kitchen with Mediterranean diet staples</li>
                  <li>Set up a dedicated exercise space or join a convenient gym</li>
                  <li>Schedule regular social activities in your calendar</li>
                  <li>Create a relaxing bedtime routine and environment</li>
                  <li>Remove or limit access to harmful substances</li>
                </ul>
              </div>
            </section>

            {/* The Compound Effect of Longevity Practices */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">The Compound Effect of Longevity Practices</h2>
              <p className="text-gray-700 mb-4">
                Research shows that combining multiple longevity practices creates a synergistic effect. The{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Harvard Study of Adult Development
                </a>
                , which has followed participants for over 80 years, found that people who practiced multiple healthy
                behaviors lived significantly longer and healthier lives.
              </p>
              <p className="text-gray-700 mb-4">
                A{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  2020 analysis
                </a>{" "}
                found that people who followed all five longevity practices could expect to live:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 ml-4">
                <li>14.2 years longer for women</li>
                <li>12.2 years longer for men</li>
                <li>With significantly reduced risk of chronic diseases</li>
                <li>With better quality of life in later years</li>
              </ul>
            </section>

            {/* The Takeaway */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">The Takeaway</h2>
              <p className="text-gray-700 mb-4">
                Longevity isn't about adding years to your life—it's about adding life to your years. The five
                science-backed strategies outlined here don't just extend lifespan; they improve healthspan, ensuring
                that your additional years are vibrant and fulfilling.
              </p>
              <p className="text-gray-700">
                Remember, it's never too late to start. Research shows that even people who begin healthy practices in
                their 60s and 70s can still experience significant benefits. The best time to start was yesterday; the
                second-best time is today.
              </p>
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
                      Dr. Sarah Chen, MD, PhD
                    </a>
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    — Written by{" "}
                    <a href="#" className="text-blue-600 hover:underline font-medium">
                      Michael Rodriguez, MS
                    </a>
                  </p>
                  <p className="text-sm text-gray-600 flex items-center gap-1">
                    — <Calendar className="w-3 h-3" />
                    <a href="#" className="text-blue-600 hover:underline">
                      Updated on January 5, 2025
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-teal-50 rounded-lg p-6 mb-8">
              <div className="mb-4">
                <h3 className="text-sm font-bold text-teal-800 uppercase tracking-wide mb-2">LONGEVITY NEWSLETTER</h3>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Science-backed longevity insights</h4>
                <p className="text-gray-700 text-sm">
                  Get the latest research on longevity, aging, and healthspan delivered to your inbox weekly.
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
                  JOIN NOW
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

            {/* Research Highlight */}
            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Research Highlight</h4>
              <p className="text-gray-700 text-sm mb-3">
                The Blue Zones Project has identified five regions where people live the longest, healthiest lives on
                Earth.
              </p>
              <div className="text-sm text-gray-600">
                <p className="mb-1">• Okinawa, Japan</p>
                <p className="mb-1">• Sardinia, Italy</p>
                <p className="mb-1">• Nicoya, Costa Rica</p>
                <p className="mb-1">• Ikaria, Greece</p>
                <p>• Loma Linda, California</p>
              </div>
            </div>

            {/* Additional Content */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Longevity Calculator</h4>
              <p className="text-gray-600 text-sm mb-4">
                Discover your potential lifespan based on current lifestyle factors and see how changes could add years
                to your life.
              </p>
              <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors">
                CALCULATE NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
