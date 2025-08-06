"use client"

import { useState, useEffect } from "react"
import {
  Mail,
  ChevronRight,
  X,
  Star,
  Clock,
  Users,
  Shield,
  CheckCircle,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  FileText,
  Brain,
  Zap,
  Heart,
  Calendar,
} from "lucide-react"
import { Link } from "react-router-dom"

export default function ComprehensiveMigrainerNewsletterLayout() {
  const [email, setEmail] = useState("")
  const [footerEmail, setFooterEmail] = useState("")
  const [showPopup, setShowPopup] = useState(false)
  const [selectedArticle, setSelectedArticle] = useState(null)
  const [isAnimating, setIsAnimating] = useState(false)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  const handleSignUp = () => {
    if (!email.trim()) return
    setIsAnimating(true)
    setTimeout(() => {
      setShowSuccessMessage(true)
      setEmail("")
      setIsAnimating(false)
      setTimeout(() => setShowSuccessMessage(false), 3000)
    }, 1000)
  }

  const handleFooterSignUp = () => {
    if (!footerEmail.trim()) return
    setShowSuccessMessage(true)
    setFooterEmail("")
    setTimeout(() => setShowSuccessMessage(false), 3000)
  }

  const treatments = [
    {
      id: 1,
      title: "Complete Guide to Migraine Medications: Preventive vs. Acute Treatment",
      description:
        "Comprehensive overview of migraine medications including triptans, CGRP inhibitors, beta-blockers, anticonvulsants, and emerging treatments. Learn about effectiveness, side effects, and when to use each type of medication for optimal migraine management...",
      image:
        "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
      readTime: "12 min read",
      category: "Treatment Guide",
      fullContent:
        "Migraine medications fall into two main categories: preventive (prophylactic) and acute (abortive) treatments. Preventive medications are taken daily to reduce the frequency and severity of migraines, while acute treatments are used during a migraine attack to stop or reduce symptoms. Triptans like sumatriptan work by constricting blood vessels and blocking pain pathways. CGRP inhibitors such as erenumab represent a breakthrough in migraine prevention by targeting the calcitonin gene-related peptide pathway. Beta-blockers like propranolol and anticonvulsants such as topiramate are also effective preventive options. The choice of medication depends on migraine frequency, severity, comorbid conditions, and individual response patterns.",
        link: "/health-conditions/migraine/blogs/migraine-medications-guide"
    },
    {
      id: 2,
      title: "Identifying and Managing Your Personal Migraine Triggers",
      description:
        "Learn to recognize common migraine triggers including stress, hormonal changes, certain foods, weather patterns, sleep disruption, and environmental factors. Discover proven strategies for trigger avoidance and lifestyle modifications...",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
      readTime: "10 min read",
      category: "Trigger Management",
      fullContent:
        "Migraine triggers vary significantly between individuals, but common ones include stress, hormonal fluctuations (especially in women), certain foods like aged cheese and processed meats, weather changes, irregular sleep patterns, bright lights, and strong odors. Keeping a detailed migraine diary helps identify personal triggers. The 'threshold theory' suggests that multiple triggers may need to combine to precipitate a migraine. Stress management through relaxation techniques, regular sleep schedules, staying hydrated, and avoiding known dietary triggers are key prevention strategies. Weather-related triggers are harder to avoid but can be anticipated with weather tracking apps.",
        link: "/health-conditions/migraine/blogs/migraine-triggers"
    },
    {
      id: 3,
      title: "Living with Chronic Migraines: Patient Stories and Coping Strategies",
      description:
        "Real experiences from chronic migraine patients sharing their journey through diagnosis, treatment trials, workplace accommodations, family relationships, and finding effective management strategies that work...",
      image:
        "https://domf5oio6qrcr.cloudfront.net/medialibrary/11169/f1325894-063e-459e-b78d-b5138cd73d18.jpg",
      readTime: "15 min read",
      category: "Patient Stories",
      fullContent:
        "Chronic migraine, defined as 15 or more headache days per month with at least 8 being migraines, affects millions worldwide. Patients often describe the journey as challenging, involving multiple doctor visits, medication trials, and lifestyle adjustments. Sarah, a 34-year-old teacher, found success with a combination of CGRP inhibitors and stress management. Mark, a software developer, discovered that blue light filters and ergonomic workspace changes significantly reduced his attack frequency. Many patients emphasize the importance of family support, workplace understanding, and connecting with migraine communities for emotional support and practical advice.",
        link: "/health-conditions/migraine/blogs/chronic-migraine"
    },
    {
      id: 4,
      title: "The Science Behind Migraines: Understanding Brain Chemistry and Triggers",
      description:
        "Explore the latest research on migraine pathophysiology, including the role of CGRP, serotonin, cortical spreading depression, and genetic factors. Understand how this knowledge is leading to better treatments...",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
      readTime: "8 min read",
      category: "Medical Science",
      fullContent:
        "Modern migraine research has revealed that migraines are complex neurological disorders involving multiple brain systems. The trigeminal nerve system plays a crucial role, releasing inflammatory substances that cause blood vessel dilation and pain. CGRP (calcitonin gene-related peptide) is a key player in this process, which is why CGRP inhibitors are so effective. Cortical spreading depression, a wave of electrical activity across the brain, is thought to trigger the aura phase. Genetic factors contribute significantly, with over 40 genetic variants associated with migraine susceptibility. Serotonin imbalances also play a role, explaining why some antidepressants help prevent migraines.",
        link: "/health-conditions/migraine/blogs/migraine-science"
    },
    {
      id: 5,
      title: "Migraine-Friendly Nutrition: Foods That Help and Foods to Avoid",
      description:
        "Comprehensive guide to migraine nutrition including common food triggers like tyramine and MSG, beneficial foods rich in magnesium and riboflavin, hydration strategies, and meal timing for migraine prevention...",
      image:
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
      readTime: "11 min read",
      category: "Nutrition Guide",
      fullContent:
        "Diet plays a significant role in migraine management. Common food triggers include aged cheeses (high in tyramine), processed meats with nitrates, chocolate, alcohol (especially red wine), artificial sweeteners like aspartame, and MSG. However, triggers are highly individual. Beneficial foods include those rich in magnesium (leafy greens, nuts, seeds), riboflavin/B2 (dairy, eggs, lean meats), and omega-3 fatty acids (fatty fish, walnuts). Regular meal timing is crucial as skipping meals can trigger migraines. Staying well-hydrated is essential, as dehydration is a common trigger. The elimination diet approach can help identify personal food triggers systematically.",
        link: "/health-conditions/migraine/blogs/migraine-nutrition"
    },
    {
      id: 6,
      title: "Alternative and Complementary Migraine Therapies: What Works?",
      description:
        "Evidence-based review of non-pharmaceutical migraine treatments including acupuncture, biofeedback, cognitive behavioral therapy, supplements like magnesium and CoQ10, and mind-body techniques...",
      image:
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
      readTime: "9 min read",
      category: "Alternative Medicine",
      fullContent:
        "Several complementary therapies have strong evidence for migraine prevention. Acupuncture has been shown in multiple studies to reduce migraine frequency when performed by qualified practitioners. Biofeedback and relaxation training help patients control physiological responses to stress. Cognitive behavioral therapy (CBT) addresses the psychological aspects of chronic pain. Supplements with good evidence include magnesium (400-600mg daily), riboflavin (400mg daily), and Coenzyme Q10 (100-300mg daily). Butterbur extract was effective but safety concerns have limited its use. Regular aerobic exercise, yoga, and meditation also show benefits for migraine prevention.",
        link: "/health-conditions/migraine/blogs/migraine-therapies"
    },
  ]

  const preventionArticles = [
    {
      id: 7,
      title: "Early Warning Signs: Recognizing Migraine Prodrome and Aura",
      description:
        "Learn to identify the subtle early warning signs that occur hours or days before a migraine, including mood changes, food cravings, neck stiffness, and visual disturbances that can help with early intervention...",
      image:
        "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
      readTime: "7 min read",
      category: "Early Detection",
      fullContent:
        "Migraine attacks often begin with a prodrome phase that can occur 1-2 days before the headache. Symptoms include mood changes (irritability, depression, euphoria), food cravings (especially for chocolate or carbohydrates), increased urination, neck stiffness, and fatigue. About 25% of migraine sufferers experience aura, which typically occurs 20-60 minutes before the headache. Visual auras are most common, including zigzag lines, blind spots, or flashing lights. Some people experience sensory auras (tingling, numbness) or speech difficulties. Recognizing these early signs allows for prompt treatment with acute medications, which are most effective when taken early in the attack.",
        link: "/health-conditions/migraine/blogs/migraine-early-warning"
    },
    {
      id: 8,
      title: "Hormonal Migraines: Understanding the Menstrual Connection",
      description:
        "Comprehensive guide to hormonal migraines affecting women, including menstrual migraines, pregnancy considerations, menopause effects, and hormone replacement therapy impacts on migraine patterns...",
      image:
        "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
      readTime: "10 min read",
      category: "Women's Health",
      fullContent:
        "Hormonal fluctuations significantly impact migraine patterns in women. Menstrual migraines occur in the days before, during, or after menstruation due to estrogen withdrawal. These migraines are often more severe and longer-lasting than non-menstrual attacks. Treatment options include short-term prevention with triptans or NSAIDs around menstruation, or continuous hormonal contraception to minimize fluctuations. During pregnancy, many women experience improvement in migraines, especially in the second and third trimesters, but treatment options are limited. Menopause can initially worsen migraines due to erratic hormone levels, but they often improve post-menopause. Hormone replacement therapy effects vary and should be carefully monitored.",
        link: "/health-conditions/migraine/blogs/hormonal-migraines"
    },
    {
      id: 9,
      title: "Migraine in Children and Adolescents: Recognition and Management",
      description:
        "Understanding pediatric migraines, which often present differently than adult migraines, including shorter duration, bilateral pain, and prominent nausea. Learn about age-appropriate treatments and school accommodations...",
      image:
        "https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
      readTime: "8 min read",
      category: "Pediatric Care",
      fullContent:
        "Pediatric migraines often differ from adult presentations. Children's migraines are typically shorter (1-4 hours vs. 4-72 hours in adults), more likely to be bilateral, and often accompanied by prominent nausea and vomiting. Abdominal migraines are unique to children, presenting as recurrent abdominal pain without headache. Triggers in children commonly include stress, irregular sleep, skipped meals, and dehydration. Treatment focuses on lifestyle modifications first: regular sleep schedules, consistent meal times, stress management, and adequate hydration. Medications are used more cautiously, with ibuprofen and nasal sumatriptan approved for pediatric use. School accommodations may include quiet spaces for rest, flexible scheduling, and understanding from teachers about migraine-related absences.",
        link: "/health-conditions/migraine/blogs/pediatric-migraine-guide"
    },
    {
      id: 10,
      title: "Building Your Migraine Management Team: Specialists and Support",
      description:
        "Guide to assembling an effective healthcare team including neurologists, headache specialists, pain management doctors, mental health professionals, and support groups for comprehensive migraine care...",
      image:
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
      readTime: "6 min read",
      category: "Healthcare Team",
      fullContent:
        "Effective migraine management often requires a multidisciplinary approach. Primary care physicians can manage straightforward cases, but complex or frequent migraines benefit from specialist care. Neurologists and certified headache specialists have advanced training in migraine treatment and access to newer therapies. Pain management specialists can help with interventional procedures like nerve blocks. Mental health professionals address the psychological aspects of chronic pain, including depression and anxiety that commonly accompany migraines. Pharmacists can help optimize medication regimens and identify drug interactions. Support groups, both in-person and online, provide emotional support and practical advice from others who understand the migraine experience.",
        link: "/health-conditions/migraine/blogs/migraine-management-team"
    },
  ]

  const footerLinks = {
    company: [
      { name: "About Us", href: "#" },
      { name: "Contact Us", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Privacy Settings", href: "#" },
      { name: "Advertising Policy", href: "#" },
      { name: "Migraine Topics", href: "#" },
    ],
    resources: [
      { name: "Sitemap", href: "#" },
      { name: "Medical Affairs", href: "#" },
      { name: "Content Integrity", href: "#" },
      { name: "Newsletters", href: "#" },
    ],
  }

  return (
    <div className="min-h-screen relative overflow-hidden pt-20 md:pt-32">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-orange-50"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-200 rounded-full opacity-20 animate-pulse"></div>
        <div
          className="absolute top-40 right-20 w-16 h-16 bg-orange-200 rounded-full opacity-30 animate-bounce"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-40 left-20 w-12 h-12 bg-pink-200 rounded-full opacity-25 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 right-40 w-24 h-24 bg-purple-100 rounded-full opacity-20 animate-bounce"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute top-60 left-1/2 w-8 h-8 bg-orange-300 rounded-full opacity-40 animate-ping"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
        {/* Header Newsletter Section */}
        <div className="bg-gradient-to-r from-teal-600 to-teal-500 rounded-3xl p-8 mb-12 relative overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300">
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full transform translate-x-32 -translate-y-32 animate-pulse"></div>
            <div
              className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full transform -translate-x-20 translate-y-20 animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>

          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <div className="flex items-center mb-4 animate-fadeIn">
                <Brain className="w-8 h-8 mr-3 text-pink-300 animate-pulse" />
                <h1 className="text-4xl font-bold">Migraine Health Weekly</h1>
              </div>
              <p className="text-teal-100 mb-6 text-lg leading-relaxed">
                Join over 250K migraine sufferers receiving expert guidance on treatment breakthroughs, trigger
                management, prevention strategies, and the latest research in headache medicine. Get evidence-based
                information to take control of your migraine journey.
              </p>

              <div className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    placeholder="Enter your email for migraine insights"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-teal-300 transition-all duration-300 transform hover:scale-105"
                  />
                </div>
                <button
                  onClick={handleSignUp}
                  disabled={isAnimating}
                  className={`bg-teal-700 hover:bg-teal-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${isAnimating ? "animate-spin" : ""}`}
                >
                  {isAnimating ? (
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    "GET MIGRAINE INSIGHTS"
                  )}
                </button>
              </div>

              <p className="text-teal-200 text-sm mt-4 opacity-75">
                Evidence-based content • No spam • Unsubscribe anytime
              </p>
            </div>

            <div className="relative">
              <div className="relative z-10 animate-fadeIn" style={{ animationDelay: "0.5s" }}>
                <img
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80"
                  alt="Healthcare professional discussing migraine treatment with patient"
                  className="rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300"
                  onError={(e) => {
                    e.target.src = "/placeholder.svg?height=300&width=400"
                  }}
                />
                <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg animate-bounce">
                  <Zap className="w-6 h-6 text-teal-500" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full p-3 shadow-lg">
                  <Heart className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-12 animate-fadeIn" style={{ animationDelay: "0.8s" }}>
          {[
            { number: "1 in 7", label: "People worldwide have migraines", icon: Users },
            { number: "36M", label: "Americans suffer from migraines", icon: Brain },
            { number: "75%", label: "Of migraine sufferers are women", icon: Heart },
            { number: "90%", label: "Report functional disability", icon: Calendar },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1 + 0.8}s` }}
            >
              <div className="flex items-center justify-between mb-3">
                <stat.icon className="w-8 h-8 text-purple-600" />
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-800">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Section */}
        <div className="mb-16 animate-fadeIn" style={{ animationDelay: "1s" }}>
          <div className="flex items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mr-4">COMPREHENSIVE MIGRAINE CARE</h2>
            <div className="flex-1 h-1 bg-gradient-to-r from-purple-300 to-orange-300 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {treatments.map((treatment, index) => (
              <div
                key={treatment.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer overflow-hidden animate-slideUp"
                style={{ animationDelay: `${index * 0.2}s` }}
                onClick={() => setSelectedArticle(treatment)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={treatment.image || "/placeholder.svg"}
                    alt={treatment.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = "/placeholder.svg?height=200&width=300"
                    }}
                  />
                  <div className="absolute top-4 left-4 bg-white bg-opacity-90 px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                    {treatment.category}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {treatment.readTime}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-bold text-xl text-gray-800 mb-3 line-clamp-2 group-hover:text-teal-600 transition-colors duration-300">
                    {treatment.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">{treatment.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="w-4 h-4 mr-1" />
                      <span>
                        {Math.floor(Math.random() * 5 + 2)}.{Math.floor(Math.random() * 9)}k readers
                      </span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-teal-600 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Prevention & Management Section */}
        <div className="mb-12 animate-fadeIn" style={{ animationDelay: "1.5s" }}>
          <div className="flex items-center mb-8">
            <Shield className="w-8 h-8 text-purple-600 mr-4 animate-pulse" />
            <h2 className="text-3xl font-bold text-gray-800 mr-4">PREVENTION & SPECIALIZED CARE</h2>
            <div className="flex-1 h-1 bg-gradient-to-r from-purple-300 to-orange-300 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {preventionArticles.map((article, index) => (
              <div
                key={article.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer overflow-hidden animate-slideUp"
                style={{ animationDelay: `${index * 0.15 + 1.5}s` }}
                onClick={() => setSelectedArticle(article)}
              >
                <div className="md:flex">
                  <div className="md:w-40 md:flex-shrink-0 relative overflow-hidden">
                    <img
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      className="w-full h-40 md:h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        e.target.src = "/placeholder.svg?height=200&width=300"
                      }}
                    />
                    <div className="absolute top-3 left-3 bg-white bg-opacity-90 px-2 py-1 rounded-full text-xs font-medium text-gray-700">
                      {article.category}
                    </div>
                  </div>

                  <div className="p-6 flex-1">
                    <h3 className="font-bold text-lg text-gray-800 mb-3 line-clamp-2 group-hover:text-purple-600 transition-colors duration-300">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed text-sm">{article.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-xs text-gray-500">
                        <Clock className="w-3 h-3 mr-1" />
                        <span>{article.readTime}</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-purple-600 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Section */}
        <div
          className="bg-gradient-to-r from-orange-50 to-purple-50 rounded-3xl p-8 shadow-xl animate-fadeIn"
          style={{ animationDelay: "2s" }}
        >
          {/* Migraineline Logo and Social Icons */}
          <div className="flex flex-col md:flex-row justify-between items-start mb-8">
            <div className="mb-6 md:mb-0">
              <h1 className="text-3xl font-bold text-gray-800 mb-4 animate-slideIn">MigraineWise</h1>
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, color: "text-blue-600" },
                  { icon: Twitter, color: "text-blue-400" },
                  { icon: Instagram, color: "text-pink-600" },
                  { icon: Youtube, color: "text-red-600" },
                  { icon: FileText, color: "text-gray-600" },
                ].map(({ icon: Icon, color }, index) => (
                  <div
                    key={index}
                    className={`p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110 cursor-pointer animate-bounceIn ${color}`}
                    style={{ animationDelay: `${index * 0.1 + 2}s` }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Newsletter Signup */}
            <div className="md:col-span-1">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Mail className="w-5 h-5 mr-2 text-purple-600" />
                Weekly Migraine Insights
              </h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                Get evidence-based migraine management tips, treatment updates, and expert insights delivered to your
                inbox. Join thousands taking control of their migraine journey.
              </p>

              <div className="flex mb-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  value={footerEmail}
                  onChange={(e) => setFooterEmail(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-l-xl border-2 border-teal-200 focus:border-teal-400 focus:outline-none transition-colors duration-300"
                />
                <button
                  onClick={handleFooterSignUp}
                  className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-r-xl font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  SUBSCRIBE
                </button>
              </div>

              <p className="text-gray-500 text-xs">
                Your <span className="underline cursor-pointer hover:text-purple-600">privacy</span> is protected •
                Unsubscribe anytime
              </p>
            </div>

            {/* Footer Links */}
            <div className="md:col-span-2 grid md:grid-cols-2 gap-8">
              <div>
                <ul className="space-y-3">
                  {footerLinks.company.map((link, index) => (
                    <li key={index} className="animate-slideIn" style={{ animationDelay: `${index * 0.05 + 2.2}s` }}>
                      <a
                        href={link.href}
                        className="text-gray-600 hover:text-purple-600 transition-colors duration-300 text-sm hover:underline"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <ul className="space-y-3">
                  {footerLinks.resources.map((link, index) => (
                    <li
                      key={index}
                      className="animate-slideIn"
                      style={{ animationDelay: `${(index + 6) * 0.05 + 2.2}s` }}
                    >
                      <a
                        href={link.href}
                        className="text-gray-600 hover:text-purple-600 transition-colors duration-300 text-sm hover:underline"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-200 mt-8 pt-6 text-center">
            <p className="text-gray-500 text-xs leading-relaxed animate-fadeIn" style={{ animationDelay: "2.5s" }}>
              ©️ 2025 MigraineWise Media LLC. All rights reserved. MigraineWise is a trusted health information platform.
              Our content is for informational purposes only and does not replace professional medical advice,
              diagnosis, or treatment.
              <a href="#" className="underline hover:text-purple-600 transition-colors duration-300 ml-1">
                Medical Disclaimer
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Success Message */}
      {showSuccessMessage && (
        <div className="fixed top-6 right-6 bg-green-500 text-white rounded-2xl shadow-2xl p-4 flex items-center animate-slideIn z-50">
          <CheckCircle className="w-6 h-6 mr-3" />
          <span className="font-medium">Welcome to MigraineWise! Check your email for confirmation.</span>
        </div>
      )}

      {/* Pop-up Notification */}
      {showPopup && (
        <div className="fixed bottom-6 right-6 bg-white rounded-2xl shadow-2xl p-6 max-w-sm animate-slideIn z-50 border border-purple-100">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-purple-500 to-orange-500 rounded-full p-2 mr-3">
                <Star className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-bold text-gray-800">New Research Alert!</h4>
            </div>
            <button
              onClick={() => setShowPopup(false)}
              className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <p className="text-gray-600 text-sm mb-3">"CGRP Inhibitors: 5-Year Efficacy Study" just published!</p>
          <button className="bg-gradient-to-r from-purple-500 to-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            Read Study
          </button>
        </div>
      )}

      {/* Article Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-slideUp">
            <div className="relative">
              <img
                src={selectedArticle.image || "/placeholder.svg"}
                alt={selectedArticle.title}
                className="w-full h-64 object-cover rounded-t-3xl"
                onError={(e) => {
                  e.target.src = "/placeholder.svg?height=264&width=672"
                }}
              />
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 bg-white bg-opacity-90 rounded-full p-2 hover:bg-opacity-100 transition-all duration-200"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>
            <div className="p-8">
              <div className="flex items-center mb-4">
                <span className="bg-gradient-to-r from-purple-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium mr-3">
                  {selectedArticle.category}
                </span>
                <span className="text-gray-500 text-sm flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {selectedArticle.readTime}
                </span>
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">{selectedArticle.title}</h2>
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">{selectedArticle.description}</p>
              {selectedArticle.fullContent && (
                <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Insights:</h3>
                  <p className="text-gray-700 leading-relaxed">{selectedArticle.fullContent}</p>
                </div>
              )}
              <div className="border-t pt-6 flex justify-between items-center">
                <div className="flex items-center text-sm text-gray-500">
                  <Users className="w-4 h-4 mr-1" />
                  <span>Medically reviewed by headache specialists</span>
                </div>
                <Link to={selectedArticle.link || "#"}>
                <button className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  Read Full Article
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-slideUp {
          animation: slideUp 0.6s ease-out forwards;
        }

        .animate-slideIn {
          animation: slideIn 0.5s ease-out forwards;
        }

        .animate-bounceIn {
          animation: bounceIn 0.6s ease-out forwards;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  )
}
