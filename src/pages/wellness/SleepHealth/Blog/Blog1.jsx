"use client"

import { useState, useEffect } from 'react';
import { User, Calendar, Clock, Moon, BookOpen, Heart, Shield, Coffee, Sun, MoonStar, Bed, RectangleEllipsis, AlarmClock } from 'lucide-react';

export default function SleepHealthEditorial() {
  const [email, setEmail] = useState("");
  const [activeTab, setActiveTab] = useState("Overview");

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tabs = ["Overview", "Science", "Tips", "Resources"];

  return (
    <div className="min-h-screen bg-white pt-20 md:pt-32">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header Section */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Welcome to Healthline Sleep: A Letter from the Editor
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

              {/* Date and Intro */}
              <div className="flex items-center text-gray-500 mb-4">
                <Calendar className="w-4 h-4 mr-1" />
                <span className="text-sm">Updated on June 15, 2024</span>
                <span className="mx-2">•</span>
                <Clock className="w-4 h-4 mr-1" />
                <span className="text-sm">5 min read</span>
              </div>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Sleep health isn't about what you can't do. It's about what restorative, quality rest you can achieve. 
                As your guide through the world of sleep science and wellness, I want to share why quality sleep 
                should be your top priority and how we can help you achieve it.
              </p>

              {/* Main Image */}
              <div className="mb-8">
                <img
                  src="https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=600&h=400&fit=crop"
                  alt="Peaceful sleeping woman"
                  className="w-full h-auto rounded-lg shadow-lg object-cover"
                  style={{ maxHeight: '500px' }}
                />
              </div>

              {/* Key Takeaways */}
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                  <BookOpen className="w-5 h-5 text-blue-600 mr-2" />
                  Key Takeaways
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Quality sleep is the foundation of physical health, mental clarity, and emotional balance</li>
                  <li>Adults need 7-9 hours of sleep, but quality matters more than quantity</li>
                  <li>Sleep affects every system in your body from immunity to metabolism</li>
                  <li>Simple changes to your routine can dramatically improve sleep quality</li>
                  <li>Our mission is to provide science-backed, practical sleep advice</li>
                </ul>
              </div>

              {/* Why Sleep Matters */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Moon className="w-8 h-8 text-blue-600 mr-2" />
                  Why Sleep Matters More Than You Think
                </h2>

                <p className="text-gray-700 mb-4">
                  Sleep isn't just downtime between your waking hours. It's an active state where your body repairs tissues, 
                  consolidates memories, and regulates hormones. According to a <a href="#" className="text-blue-600 hover:underline">2024 study in Sleep Medicine Reviews</a>, 
                  consistent quality sleep is associated with:
                </p>

                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                  <li>28% lower risk of cardiovascular disease</li>
                  <li>Improved cognitive function equivalent to 5 IQ points</li>
                  <li>40% reduction in depression symptoms</li>
                  <li>Enhanced immune function (2.5x more antibodies after flu vaccine)</li>
                </ul>

                <div className="bg-blue-100 rounded-lg p-4 mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Editor's Personal Journey</h3>
                  <p className="text-gray-700">
                    "After years of treating sleep as an afterthought, I developed insomnia that affected every aspect of my life. 
                    My turning point came when I discovered chronobiology—the science of biological rhythms. 
                    Implementing what I learned not only restored my sleep but transformed my health."
                  </p>
                </div>
              </section>

              {/* The Sleep Crisis */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <AlarmClock className="w-8 h-8 text-blue-600 mr-2" />
                  The Modern Sleep Crisis
                </h2>

                <p className="text-gray-700 mb-6">
                  We're in the midst of a global sleep deprivation epidemic. The CDC declares insufficient sleep 
                  a public health problem, with 1 in 3 adults not getting enough sleep. Here's how this plays out:
                </p>

                {/* Sleep Statistics Table */}
                <div className="overflow-x-auto mb-8">
                  <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Population</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sleep Issues</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Health Impact</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Economic Cost</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Adults (18-60)</td>
                        <td className="px-4 py-3 whitespace-nowrap">35% get 7 hours</td>
                        <td className="px-4 py-3">Higher obesity, diabetes risk</td>
                        <td className="px-4 py-3">$411B/year (US)</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Teenagers</td>
                        <td className="px-4 py-3 whitespace-nowrap">73% sleep deficient</td>
                        <td className="px-4 py-3">Poor academic performance</td>
                        <td className="px-4 py-3">Lower lifetime earnings</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Shift Workers</td>
                        <td className="px-4 py-3 whitespace-nowrap">40% have insomnia</td>
                        <td className="px-4 py-3">Higher cancer rates</td>
                        <td className="px-4 py-3">More sick days</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                      <Heart className="w-5 h-5 text-blue-600 mr-2" />
                      Physical Health
                    </h3>
                    <p className="text-gray-700">
                      During deep sleep, your body releases growth hormone for tissue repair, 
                      clears brain toxins, and regulates appetite hormones. Poor sleep disrupts 
                      these processes, increasing disease risk.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                      <Shield className="w-5 h-5 text-blue-600 mr-2" />
                      Mental Health
                    </h3>
                    <p className="text-gray-700">
                      REM sleep processes emotional experiences. Sleep deprivation amplifies 
                      negative emotions by 60% and reduces positive ones by 50%, according to 
                      neuroscience research.
                    </p>
                  </div>
                </div>
              </section>

              {/* Sleep Architecture */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Sleep Architecture</h2>

                <p className="text-gray-700 mb-4">
                  Quality sleep means progressing properly through the sleep cycles multiple times each night:
                </p>

                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <div className="grid grid-cols-5 gap-4 text-center font-medium mb-2">
                    <div>Stage</div>
                    <div>Duration</div>
                    <div>Brain Waves</div>
                    <div>Function</div>
                    <div>Disruption Effects</div>
                  </div>
                  <div className="grid grid-cols-5 gap-4 text-center mb-1 border-b pb-2">
                    <div className="font-medium">N1 (Light)</div>
                    <div>1-5 min</div>
                    <div>Theta</div>
                    <div>Transition</div>
                    <div>Daytime drowsiness</div>
                  </div>
                  <div className="grid grid-cols-5 gap-4 text-center mb-1 border-b pb-2 bg-blue-50">
                    <div className="font-medium">N2</div>
                    <div>10-25 min</div>
                    <div>Sleep spindles</div>
                    <div>Memory consolidation</div>
                    <div>Learning difficulties</div>
                  </div>
                  <div className="grid grid-cols-5 gap-4 text-center mb-1 border-b pb-2">
                    <div className="font-medium">N3 (Deep)</div>
                    <div>20-40 min</div>
                    <div>Delta</div>
                    <div>Physical repair</div>
                    <div>Weakened immunity</div>
                  </div>
                  <div className="grid grid-cols-5 gap-4 text-center bg-blue-50 p-2 rounded">
                    <div className="font-medium">REM</div>
                    <div>10-60 min</div>
                    <div>Mixed frequency</div>
                    <div>Emotional processing</div>
                    <div>Mood disorders</div>
                  </div>
                </div>

                <p className="text-gray-700 mb-6">
                  A complete sleep cycle lasts about 90 minutes. Healthy adults typically experience 4-6 cycles per night, 
                  with REM periods lengthening toward morning.
                </p>
              </section>

              {/* Sleep Hygiene Guide */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Bed className="w-8 h-8 text-blue-600 mr-2" />
                  The Healthline Sleep Hygiene Guide
                </h2>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Daily Habits</h3>
                    <ol className="list-decimal list-inside text-gray-700 space-y-2">
                      <li>Morning sunlight exposure within 30 minutes of waking</li>
                      <li>Consistent wake time (±30 min) even on weekends</li>
                      <li>Limit caffeine after 2pm (half-life is 5-6 hours)</li>
                      <li>Evening "worry journal" to clear your mind</li>
                      <li>Digital sunset 1 hour before bed</li>
                    </ol>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Bedroom Environment</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Temperature: 60-67°F (15-19°C)</li>
                      <li>Complete darkness (use blackout curtains)</li>
                      <li>White noise or pink noise machine</li>
                      <li>Comfortable, supportive mattress</li>
                      <li>Dedicated for sleep (no work in bed)</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-100 border-l-4 border-blue-400 p-4 mb-6">
                  <h3 className="font-bold text-gray-900 mb-2">Editor's Top Tip:</h3>
                  <p className="text-gray-700">
                    "The 10-3-2-1-0 rule transformed my sleep: No caffeine 10 hours before bed, 
                    no meals 3 hours before, no work 2 hours before, no screens 1 hour before, 
                    and 0 snooze hits in the morning."
                  </p>
                </div>
              </section>

              {/* Common Sleep Disorders */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Recognizing Common Sleep Disorders</h2>

                <div className="space-y-4">
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h3 className="font-bold text-gray-900 mb-2">Insomnia</h3>
                    <p className="text-gray-700 mb-2">
                      Difficulty falling or staying asleep despite adequate opportunity, occurring ≥3 nights/week for ≥3 months.
                    </p>
                    <p className="text-gray-700">
                      <span className="font-semibold">Solution:</span> Cognitive Behavioral Therapy for Insomnia (CBT-I) is the gold standard treatment.
                    </p>
                  </div>

                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h3 className="font-bold text-gray-900 mb-2">Sleep Apnea</h3>
                    <p className="text-gray-700 mb-2">
                      Breathing interruptions during sleep, often with snoring and daytime fatigue. Affects 1 in 5 adults.
                    </p>
                    <p className="text-gray-700">
                      <span className="font-semibold">Solution:</span> CPAP therapy, oral appliances, or positional therapy.
                    </p>
                  </div>

                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h3 className="font-bold text-gray-900 mb-2">Restless Legs Syndrome</h3>
                    <p className="text-gray-700 mb-2">
                      Uncomfortable sensations with urge to move legs, worsening at night.
                    </p>
                    <p className="text-gray-700">
                      <span className="font-semibold">Solution:</span> Iron supplementation if levels are low, medications, or compression.
                    </p>
                  </div>
                </div>
              </section>

              {/* Sleep Tracking Technology */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Sleep Tracking Technology</h2>

                <p className="text-gray-700 mb-4">
                  Modern devices can provide insights into your sleep patterns, but they have limitations:
                </p>

                <div className="overflow-x-auto mb-8">
                  <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Device Type</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Accuracy</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Best For</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Limitations</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Wearables (Fitbit, Apple Watch)</td>
                        <td className="px-4 py-3 whitespace-nowrap">70-80% sleep stage accuracy</td>
                        <td className="px-4 py-3">Tracking trends over time</td>
                        <td className="px-4 py-3">Overestimates light sleep</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">EEG Headbands (Dreem, Muse)</td>
                        <td className="px-4 py-3 whitespace-nowrap">90%+ accuracy</td>
                        <td className="px-4 py-3">Detailed sleep architecture</td>
                        <td className="px-4 py-3">Expensive, less comfortable</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Smart Mattresses (Eight Sleep)</td>
                        <td className="px-4 py-3 whitespace-nowrap">85% accuracy</td>
                        <td className="px-4 py-3">Temperature regulation</td>
                        <td className="px-4 py-3">Limited movement tracking</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-gray-700 font-medium">
                    "Don't become obsessed with sleep data. Use trackers to identify patterns, 
                    but listen to your body first. If you feel rested, you probably slept well—regardless of what the app says."
                  </p>
                </div>
              </section>

              {/* Final Thoughts */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Sleep Philosophy</h2>

                <p className="text-gray-700 mb-4">
                  At Healthline Sleep, we believe sleep health is personal. What works for one person might not work for another. 
                  Our approach combines:
                </p>

                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                  <li><strong>Science:</strong> Evidence-based recommendations from sleep researchers</li>
                  <li><strong>Practicality:</strong> Realistic strategies for modern life</li>
                  <li><strong>Compassion:</strong> Understanding that sleep struggles are human</li>
                  <li><strong>Holism:</strong> Addressing sleep through lifestyle, not just bedtime</li>
                </ul>

                <p className="text-gray-700 mb-4">
                  We're committed to helping you discover your unique path to better sleep—one that fits your biology, 
                  lifestyle, and personal challenges.
                </p>

                <div className="bg-blue-100 p-4 rounded-lg">
                  <p className="text-gray-700 font-medium">
                    "Sleep isn't a luxury—it's the foundation upon which we build our health, relationships, and productivity. 
                    By prioritizing sleep, you're not missing out on life; you're ensuring you can fully show up for it."
                  </p>
                </div>
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
                    <a href="#" className="text-blue-600 hover:underline">
                      Medically reviewed
                    </a>{" "}
                    by{" "}
                    <a href="#" className="text-blue-600 hover:underline font-medium">
                      Dr. Rebecca Moore, Sleep Specialist
                    </a>
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    — Written by{" "}
                    <a href="#" className="text-blue-600 hover:underline font-medium">
                      Editor-in-Chief, Healthline Sleep
                    </a>
                  </p>
                  <p className="text-sm text-gray-600 flex items-center gap-1">
                    — <Calendar className="w-3 h-3" />
                    <a href="#" className="text-blue-600 hover:underline">
                      Updated on June 15, 2024
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <div className="mb-4">
                <h3 className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-2">SLEEP NEWSLETTER</h3>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Get science-backed sleep tips</h4>
                <p className="text-gray-700 text-sm">
                  Weekly insights, research updates, and practical advice for better sleep.
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
                <a href="#" className="text-blue-600 hover:underline">
                  privacy
                </a>{" "}
                is important to us
              </p>
            </div>

            {/* Popular Articles */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Popular Sleep Articles</h3>
              <div className="space-y-4">
                <a href="#" className="block group">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=200&h=200&fit=crop" 
                        alt="Sleeping woman" 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                        The 10-3-2-1-0 Sleep Rule Explained
                      </h4>
                      <p className="text-sm text-gray-600">4.9 ★ (218 reviews)</p>
                    </div>
                  </div>
                </a>
                <a href="#" className="block group">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1548600916-dc8492f8e845?w=200&h=200&fit=crop" 
                        alt="Alarm clock" 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                        How to Fix Your Sleep Schedule
                      </h4>
                      <p className="text-sm text-gray-600">4.7 ★ (156 reviews)</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Sleep Calculator */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sleep Calculator</h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">When do you want to wake up?</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                    <option>6:00 AM</option>
                    <option>6:30 AM</option>
                    <option>7:00 AM</option>
                    <option>7:30 AM</option>
                    <option>8:00 AM</option>
                  </select>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200">
                  Calculate Bedtimes
                </button>
                <p className="text-xs text-gray-600 mt-2">
                  Based on 90-minute sleep cycles and 15-minute fall-asleep time
                </p>
              </div>
            </div>

            {/* Resources */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sleep Resources</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-blue-600 hover:underline flex items-center">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Sleep Diary Template
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline flex items-center">
                    <MoonStar className="w-4 h-4 mr-2" />
                    CBT-I Exercises
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline flex items-center">
                    <RectangleEllipsis className="w-4 h-4 mr-2" />
                    Sleep Product Reviews
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline flex items-center">
                    <Coffee className="w-4 h-4 mr-2" />
                    Caffeine Calculator
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}