"use client"

import { useState } from "react"
import { User, Calendar } from "lucide-react"

export default function LifestyleArticleGuide() {
  const [email, setEmail] = useState("")
  const [activeTab, setActiveTab] = useState("Wellness")

  const handleEmailSubmit = (e) => {
    e.preventDefault()
    console.log("Email submitted:", email)
    setEmail("")
  }

  const tabs = ["Wellness", "Habits", "Balance", "Growth"]

  return (
    <div className="min-h-screen bg-white pt-20 md:pt-32">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header Section */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Transform Your Lifestyle: 5 Essential Pillars for a Fulfilling and Balanced Life
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
                Discover how to create a lifestyle that aligns with your values, enhances your well-being, and brings
                joy to your everyday experiences.
              </p>

              {/* Main Image */}
              <div className="mb-8">
                <img
                  src="/lifestyle.webp"
                  alt="Person enjoying a balanced lifestyle with nature, exercise, and relaxation"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>

              {/* Article Description */}
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
                <p className="text-gray-700">
                  <span className="text-blue-600 font-medium">Y</span>our lifestyle is the foundation of your happiness
                  and success. It's not about perfection—it's about creating sustainable habits that support your
                  physical, mental, and emotional well-being.
                </p>
              </div>

              <p className="text-gray-700 mb-8">
                Keep reading to explore the five essential pillars that can transform your daily life and help you build
                a lifestyle you truly love.
              </p>
            </div>

            {/* The Foundation of a Great Lifestyle Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">The Foundation of a Great Lifestyle</h2>

              <p className="text-gray-700 mb-6">
                A fulfilling lifestyle isn't about following someone else's blueprint—it's about understanding what
                matters most to you and building daily practices that support those values. Research shows that people
                who live intentionally report higher levels of{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  life satisfaction
                </a>{" "}
                and overall well-being.
              </p>

              <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-8">
                <p className="text-gray-700">
                  <span className="font-semibold">Key Insight:</span> Studies indicate that people who actively design
                  their lifestyle around their core values experience 40% less stress and report feeling more fulfilled
                  in their daily lives.
                </p>
              </div>
            </section>

            {/* 5 Essential Lifestyle Pillars Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">5 Essential Pillars for a Fulfilling Lifestyle</h2>

              {/* 1. Mindful Nutrition and Eating Habits */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Mindful Nutrition and Eating Habits</h3>
                <p className="text-gray-700 mb-4">
                  Your relationship with food significantly impacts your energy, mood, and overall quality of life.
                  Mindful eating isn't about strict diets—it's about developing a healthy, sustainable approach to
                  nourishing your body.
                </p>

                <p className="text-gray-700 mb-4">Key principles of mindful nutrition include:</p>
                <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                  <li>Eating when hungry and stopping when satisfied</li>
                  <li>Choosing whole, unprocessed foods most of the time</li>
                  <li>Staying hydrated throughout the day</li>
                  <li>Enjoying meals without distractions</li>
                  <li>Listening to your body's nutritional needs</li>
                  <li>Allowing flexibility for social occasions and treats</li>
                </ul>

                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                  <p className="text-gray-700">
                    <span className="font-semibold">Lifestyle Tip:</span> Start your day with a nutritious breakfast
                    that includes protein, healthy fats, and complex carbohydrates to maintain steady energy levels
                    throughout the morning.
                  </p>
                </div>

                <div className="ml-4 mb-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Building a Sustainable Food Routine</h4>
                  <p className="text-gray-700 mb-4">
                    Create meal patterns that work with your schedule and preferences. This might include:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                    <li className="text-orange-600">Meal prepping on weekends for busy weekdays</li>
                    <li className="text-orange-600">Keeping healthy snacks readily available</li>
                    <li className="text-orange-600">Learning simple, nutritious recipes you enjoy</li>
                    <li className="text-orange-600">Planning meals around your social calendar</li>
                  </ul>
                </div>
              </div>

              {/* 2. Movement and Physical Vitality */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Movement and Physical Vitality</h3>
                <p className="text-gray-700 mb-4">
                  Regular movement is essential for both physical and mental well-being. The goal isn't to become a
                  fitness enthusiast overnight, but to find ways to incorporate movement that you genuinely enjoy into
                  your daily routine.
                </p>

                <p className="text-gray-700 mb-4">Effective approaches to staying active include:</p>
                <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                  <li className="text-purple-600">Finding activities you genuinely enjoy</li>
                  <li className="text-purple-600">Starting with small, achievable goals</li>
                  <li className="text-purple-600">Incorporating movement into daily tasks</li>
                  <li className="text-purple-600">Varying your activities to prevent boredom</li>
                  <li className="text-purple-600">Focusing on how movement makes you feel</li>
                </ul>

                <div className="ml-4 mb-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Making Movement a Natural Part of Life</h4>
                  <p className="text-gray-700 mb-4">
                    Instead of viewing exercise as a chore, integrate movement naturally into your lifestyle:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                    <li>Take walking meetings when possible</li>
                    <li>Use stairs instead of elevators</li>
                    <li>Dance while cooking or cleaning</li>
                    <li>Park farther away or get off transit one stop early</li>
                    <li>Try active hobbies like gardening or hiking</li>
                  </ul>
                </div>

                <div className="ml-4 mb-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">The Mind-Body Connection</h4>
                  <p className="text-gray-700 mb-4">
                    Regular movement doesn't just benefit your physical health—it's one of the most effective ways to
                    manage stress, improve mood, and boost mental clarity.
                  </p>
                  <p className="text-gray-700 mb-6">
                    Even 10-15 minutes of daily movement can significantly impact your energy levels and overall sense
                    of well-being.
                  </p>
                </div>
              </div>

              {/* 3. Meaningful Relationships and Social Connection */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  3. Meaningful Relationships and Social Connection
                </h3>
                <p className="text-gray-700 mb-4">
                  Human connection is fundamental to a fulfilling lifestyle. Quality relationships provide support, joy,
                  and a sense of belonging that enriches every aspect of life.
                </p>

                <p className="text-gray-700 mb-4">Building and maintaining meaningful relationships involves:</p>
                <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                  <li className="text-green-600">Prioritizing quality time with loved ones</li>
                  <li className="text-green-600">Being present and engaged in conversations</li>
                  <li className="text-green-600">Showing appreciation and gratitude regularly</li>
                  <li className="text-green-600">Setting healthy boundaries</li>
                  <li className="text-green-600">Being vulnerable and authentic</li>
                  <li className="text-green-600">Supporting others through challenges</li>
                </ul>

                <div className="bg-green-50 p-4 rounded-lg mb-6">
                  <p className="text-gray-700">
                    <span className="font-semibold">Connection Insight:</span> Research shows that people with strong
                    social connections report 50% higher life satisfaction and experience less stress during difficult
                    times.
                  </p>
                </div>

                <div className="ml-4 mb-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Nurturing Different Types of Relationships</h4>
                  <p className="text-gray-700 mb-4">
                    A well-rounded social life includes various types of connections:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-6 ml-4">
                    <li>Deep, intimate relationships with family and close friends</li>
                    <li>Casual friendships and acquaintances</li>
                    <li>Professional relationships and mentorships</li>
                    <li>Community connections and shared interest groups</li>
                  </ul>
                </div>
              </div>

              {/* 4. Personal Growth and Learning */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">4. Personal Growth and Continuous Learning</h3>
                <p className="text-gray-700 mb-4">
                  A fulfilling lifestyle includes ongoing personal development and the pursuit of new knowledge and
                  skills. This doesn't mean constant self-improvement pressure, but rather maintaining curiosity and
                  openness to growth.
                </p>

                <p className="text-gray-700 mb-4">Ways to incorporate growth into your lifestyle:</p>
                <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                  <li className="text-indigo-600">Reading books or listening to podcasts</li>
                  <li className="text-indigo-600">Learning new skills or hobbies</li>
                  <li className="text-indigo-600">Reflecting on experiences and lessons learned</li>
                  <li className="text-indigo-600">Setting meaningful goals and challenges</li>
                  <li className="text-indigo-600">Seeking feedback and different perspectives</li>
                  <li className="text-indigo-600">Practicing mindfulness and self-awareness</li>
                </ul>

                <div className="ml-4 mb-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Creating a Growth Mindset</h4>
                  <p className="text-gray-700 mb-4">
                    Embrace challenges as opportunities to learn rather than threats to your self-image. This mindset
                    shift can transform how you approach setbacks and new experiences.
                  </p>
                  <p className="text-gray-700 mb-6">
                    Remember that growth isn't always linear—celebrate small progress and be patient with yourself
                    during the learning process.
                  </p>
                </div>

                <div className="ml-4 mb-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">The Power of Reflection</h4>
                  <p className="text-gray-700 mb-4">
                    Regular reflection helps you understand what's working in your life and what might need adjustment.
                    Consider:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-6 ml-4">
                    <li>Weekly or monthly check-ins with yourself</li>
                    <li>Journaling about experiences and insights</li>
                    <li>Discussing your growth with trusted friends or mentors</li>
                    <li>Celebrating progress and acknowledging challenges</li>
                  </ul>
                </div>
              </div>

              {/* 5. Rest, Recovery, and Mental Well-being */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">5. Rest, Recovery, and Mental Well-being</h3>
                <p className="text-gray-700 mb-4">
                  In our busy world, rest and mental well-being often take a backseat to productivity. However,
                  prioritizing your mental health and recovery time is essential for sustainable happiness and success.
                </p>

                <div className="ml-4 mb-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Quality Sleep and Rest</h4>
                  <p className="text-gray-700 mb-4">
                    Good sleep is the foundation of mental and physical well-being. Create a sleep environment and
                    routine that supports restorative rest:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-6 ml-4">
                    <li>Maintain consistent sleep and wake times</li>
                    <li>Create a calming bedtime routine</li>
                    <li>Limit screen time before bed</li>
                    <li>Keep your bedroom cool, dark, and quiet</li>
                    <li>Avoid caffeine late in the day</li>
                  </ul>
                </div>

                <div className="ml-4 mb-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Stress Management and Emotional Health</h4>
                  <p className="text-gray-700 mb-4">
                    Develop healthy coping strategies for life's inevitable stresses:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                    <li>Practice deep breathing or meditation</li>
                    <li>Spend time in nature</li>
                    <li>Engage in creative activities</li>
                    <li>Talk to friends, family, or a therapist</li>
                    <li>Set boundaries to protect your energy</li>
                    <li>Practice gratitude and positive thinking</li>
                  </ul>
                  <p className="text-gray-700 mb-6">
                    Remember that seeking professional help for mental health is a sign of strength, not weakness.
                    Therapy can provide valuable tools for managing stress and improving overall well-being.
                  </p>
                </div>

                <div className="ml-4 mb-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">The Art of Saying No</h4>
                  <p className="text-gray-700 mb-4">
                    Protecting your time and energy is crucial for maintaining balance. Learn to:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-6 ml-4">
                    <li>Identify your priorities and values</li>
                    <li>Politely decline commitments that don't align with your goals</li>
                    <li>Schedule downtime just as you would any important appointment</li>
                    <li>Recognize signs of burnout and take action early</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Creating Your Personal Lifestyle Blueprint */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Creating Your Personal Lifestyle Blueprint</h2>

              <p className="text-gray-700 mb-6">
                The key to sustainable lifestyle change is personalization. What works for others might not work for
                you, and that's perfectly okay. The goal is to create a lifestyle that feels authentic and sustainable
                for your unique circumstances.
              </p>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Start Small and Build Gradually</h3>
                <p className="text-gray-700 mb-4">
                  Rather than overhauling your entire life at once, focus on making small, consistent changes that
                  compound over time. This approach is more sustainable and less overwhelming.
                </p>

                <div className="bg-yellow-50 p-4 rounded-lg mb-6">
                  <p className="text-gray-700">
                    <span className="font-semibold">Weekly Focus:</span> Choose one area to improve each week. Master
                    that change before adding something new to avoid overwhelming yourself.
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Design Your Environment for Success</h3>
                <p className="text-gray-700 mb-4">
                  Your environment significantly influences your behavior. Make positive choices easier by:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4">
                  <li>Organizing your space to support your goals</li>
                  <li>Removing temptations and obstacles</li>
                  <li>Surrounding yourself with supportive people</li>
                  <li>Creating visual reminders of your intentions</li>
                  <li>Establishing routines that automate good choices</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Embrace Flexibility and Self-Compassion</h3>
                <p className="text-gray-700 mb-4">
                  Life is unpredictable, and your lifestyle should be flexible enough to adapt to changing
                  circumstances. Practice self-compassion when things don't go according to plan.
                </p>
                <p className="text-gray-700 mb-6">
                  Remember that progress isn't always linear. Some days will be better than others, and that's part of
                  the human experience. Focus on overall trends rather than daily perfection.
                </p>
              </div>
            </section>

            {/* The Ripple Effect of Lifestyle Changes */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">The Ripple Effect of Lifestyle Changes</h2>
              <p className="text-gray-700 mb-4">
                When you invest in creating a fulfilling lifestyle, the benefits extend far beyond your personal
                well-being. Positive changes often inspire those around you and contribute to a more positive
                environment for everyone.
              </p>
              <p className="text-gray-700 mb-4">
                Research shows that people who prioritize their well-being are more likely to:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 ml-4">
                <li>Have better relationships with family and friends</li>
                <li>Perform better at work and feel more satisfied with their careers</li>
                <li>Handle stress and challenges more effectively</li>
                <li>Inspire positive changes in their communities</li>
                <li>Experience greater overall life satisfaction</li>
              </ul>
            </section>

            {/* The Takeaway */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">The Takeaway</h2>
              <p className="text-gray-700 mb-4">
                Creating a fulfilling lifestyle isn't about achieving perfection—it's about making intentional choices
                that align with your values and support your well-being. The five pillars outlined here provide a
                framework, but your unique lifestyle will be shaped by your personal preferences, circumstances, and
                goals.
              </p>
              <p className="text-gray-700">
                Remember that lifestyle design is an ongoing process, not a destination. Be patient with yourself,
                celebrate small wins, and stay open to adjusting your approach as you learn and grow. Your future self
                will thank you for the positive changes you make today.
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
                      Reviewed
                    </a>{" "}
                    by{" "}
                    <a href="#" className="text-blue-600 hover:underline font-medium">
                      Dr. Emma Thompson, PhD
                    </a>
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    — Written by{" "}
                    <a href="#" className="text-blue-600 hover:underline font-medium">
                      Alex Johnson, MS
                    </a>
                  </p>
                  <p className="text-sm text-gray-600 flex items-center gap-1">
                    — <Calendar className="w-3 h-3" />
                    <a href="#" className="text-blue-600 hover:underline">
                      Updated on January 6, 2025
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-teal-50 rounded-lg p-6 mb-8">
              <div className="mb-4">
                <h3 className="text-sm font-bold text-teal-800 uppercase tracking-wide mb-2">LIFESTYLE NEWSLETTER</h3>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Transform your daily life</h4>
                <p className="text-gray-700 text-sm">
                  Get practical tips, inspiration, and insights for creating a more fulfilling lifestyle delivered
                  weekly.
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

            {/* Lifestyle Tip */}
            <div className="bg-purple-50 rounded-lg p-6 mb-8">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Daily Lifestyle Tip</h4>
              <p className="text-gray-700 text-sm mb-3">
                Start each morning by setting one small intention for the day. This simple practice can help you stay
                focused on what matters most.
              </p>
              <div className="text-sm text-gray-600">
                <p className="mb-1">💡 Choose one area to focus on</p>
                <p className="mb-1">🎯 Set a specific, achievable goal</p>
                <p className="mb-1">✨ Celebrate when you accomplish it</p>
                <p>🔄 Reflect and adjust for tomorrow</p>
              </div>
            </div>

            {/* Additional Content */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Lifestyle Assessment</h4>
              <p className="text-gray-600 text-sm mb-4">
                Take our quick assessment to identify which areas of your lifestyle could benefit from attention and get
                personalized recommendations.
              </p>
              <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors">
                START ASSESSMENT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
