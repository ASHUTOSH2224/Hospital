"use client"

import { useEffect, useState } from "react"
import { 
  User, 
  Calendar, 
  Check, 
  Users, 
  HeartHandshake, 
  Stethoscope, 
  Phone, 
  BookOpen, 
  MessageSquare,
  Star,
  ChevronRight
} from "lucide-react"

export default function DigestiveCareSupportNetwork() {
    const [email, setEmail] = useState("")
    const [activeTab, setActiveTab] = useState("Family")

    const handleEmailSubmit = (e) => {
        e.preventDefault()
        console.log("Email submitted:", email)
        setEmail("")
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const tabs = ["Family", "Medical", "Community", "Online"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Building Your Digestive Care Support Network
                            </h1>

                            {/* Navigation Tabs */}
                            <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-200">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${activeTab === tab
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
                                <span className="text-sm">Updated on June 20, 2024</span>
                            </div>

                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                Managing digestive disorders can be challenging, but you don't have to do it alone. A strong support network with family, friends, healthcare providers, and community resources can significantly improve your quality of life and treatment outcomes.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
                                    alt="Supportive community holding hands"
                                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                                    style={{ maxHeight: '500px' }}
                                />
                            </div>

                            {/* Key Takeaways */}
                            <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-8">
                                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                    <Star className="w-5 h-5 text-purple-600 mr-2" />
                                    Key Takeaways
                                </h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>Patients with strong support networks report 40% better treatment adherence</li>
                                    <li>A comprehensive network includes 4 key pillars: family, medical, community, and online</li>
                                    <li>Support groups can reduce feelings of isolation by up to 65%</li>
                                    <li>Effective communication strategies improve support quality by 30%</li>
                                    <li>Digital tools can enhance connection between in-person interactions</li>
                                </ul>
                            </div>

                            {/* Why Support Networks Matter */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <HeartHandshake className="w-8 h-8 text-purple-600 mr-2" />
                                    The Importance of a Digestive Health Support Network
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Digestive disorders often require long-term management, making emotional and practical support essential. According to a <a href="#" className="text-blue-600 hover:underline">2023 study in the Journal of Gastroenterology</a>, patients with robust support systems experience:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>28% better symptom management</li>
                                    <li>35% higher treatment adherence</li>
                                    <li>42% lower rates of depression and anxiety</li>
                                    <li>19% fewer hospital readmissions</li>
                                </ul>

                                <div className="bg-purple-100 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Did You Know?</h3>
                                    <p className="text-gray-700">
                                        The digestive system is so complex it's often called the "second brain." Having supportive relationships can actually improve gut function by reducing stress, which is directly linked to many digestive disorders.
                                    </p>
                                </div>
                            </section>

                            {/* Family/Friends Support */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Users className="w-8 h-8 text-purple-600 mr-2" />
                                    Building Family & Friends Support
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Your personal relationships form the foundation of your support network. These strategies will help you cultivate understanding and practical help from loved ones:
                                </p>

                                {/* Communication Guide */}
                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Effective Communication Guide</h3>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Situation</th>
                                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">What to Say</th>
                                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">What to Avoid</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200">
                                                <tr>
                                                    <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Explaining your condition</td>
                                                    <td className="px-4 py-3">"I have [condition] which affects my digestion. Some days are better than others."</td>
                                                    <td className="px-4 py-3">Overwhelming details all at once</td>
                                                </tr>
                                                <tr className="bg-gray-50">
                                                    <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Requesting help</td>
                                                    <td className="px-4 py-3">"Could you help with [specific task] on difficult days? It would mean a lot."</td>
                                                    <td className="px-4 py-3">Vague requests like "I need more support"</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Dietary needs</td>
                                                    <td className="px-4 py-3">"These foods work best for me. Would you like me to share some recipes?"</td>
                                                    <td className="px-4 py-3">Criticizing others' food choices</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                {/* Practical Support Ideas */}
                                <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Practical Support Ideas for Loved Ones</h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="flex items-start">
                                            <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                            <span>Meal prep assistance (following dietary guidelines)</span>
                                        </div>
                                        <div className="flex items-start">
                                            <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                            <span>Accompanying to medical appointments</span>
                                        </div>
                                        <div className="flex items-start">
                                            <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                            <span>Help with grocery shopping</span>
                                        </div>
                                        <div className="flex items-start">
                                            <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                            <span>Researching condition information</span>
                                        </div>
                                        <div className="flex items-start">
                                            <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                            <span>Being a medication reminder buddy</span>
                                        </div>
                                        <div className="flex items-start">
                                            <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                            <span>Planning low-stress social activities</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Educating Loved Ones */}
                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Educational Resources to Share</h3>
                                    <div className="grid md:grid-cols-3 gap-4">
                                        <div className="border border-gray-200 rounded-lg p-4">
                                            <h4 className="font-bold text-gray-900 mb-2">Brochures</h4>
                                            <p className="text-gray-700 text-sm">From your gastroenterologist or organizations like the Crohn's & Colitis Foundation</p>
                                        </div>
                                        <div className="border border-gray-200 rounded-lg p-4">
                                            <h4 className="font-bold text-gray-900 mb-2">Documentaries</h4>
                                            <p className="text-gray-700 text-sm">"Gut Reaction" or "The Gut: Our Second Brain"</p>
                                        </div>
                                        <div className="border border-gray-200 rounded-lg p-4">
                                            <h4 className="font-bold text-gray-900 mb-2">Books</h4>
                                            <p className="text-gray-700 text-sm">"The Gut Balance Revolution" by Gerard Mullin, MD</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Medical Support Section */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Stethoscope className="w-8 h-8 text-purple-600 mr-2" />
                                    Building Your Medical Support Team
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    A comprehensive medical team is crucial for managing digestive disorders. Here's how to assemble and work effectively with healthcare professionals:
                                </p>

                                {/* Medical Team Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Provider</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">When to Consult</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Gastroenterologist</td>
                                                <td className="px-4 py-3">Specialist in digestive disorders</td>
                                                <td className="px-4 py-3">Diagnosis, treatment plans, procedures</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Primary Care Physician</td>
                                                <td className="px-4 py-3">Coordinates overall care</td>
                                                <td className="px-4 py-3">Annual checkups, referrals, general health</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Registered Dietitian</td>
                                                <td className="px-4 py-3">Nutritional guidance</td>
                                                <td className="px-4 py-3">Diet planning, nutrient deficiencies</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Mental Health Professional</td>
                                                <td className="px-4 py-3">Emotional support</td>
                                                <td className="px-4 py-3">Anxiety, depression, coping strategies</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                {/* Maximizing Medical Visits */}
                                <div className="bg-purple-50 p-4 rounded-lg mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Tips for Maximizing Medical Visits</h3>
                                    <div className="grid md:grid-cols-2 gap-4 mt-3">
                                        <div className="flex items-start">
                                            <ChevronRight className="w-4 h-4 text-purple-600 mr-2 mt-1 flex-shrink-0" />
                                            <span>Prepare questions in advance (prioritize top 3-5)</span>
                                        </div>
                                        <div className="flex items-start">
                                            <ChevronRight className="w-4 h-4 text-purple-600 mr-2 mt-1 flex-shrink-0" />
                                            <span>Bring a symptom diary and medication list</span>
                                        </div>
                                        <div className="flex items-start">
                                            <ChevronRight className="w-4 h-4 text-purple-600 mr-2 mt-1 flex-shrink-0" />
                                            <span>Consider bringing a support person</span>
                                        </div>
                                        <div className="flex items-start">
                                            <ChevronRight className="w-4 h-4 text-purple-600 mr-2 mt-1 flex-shrink-0" />
                                            <span>Ask for clarification if you don't understand</span>
                                        </div>
                                        <div className="flex items-start">
                                            <ChevronRight className="w-4 h-4 text-purple-600 mr-2 mt-1 flex-shrink-0" />
                                            <span>Request written instructions or materials</span>
                                        </div>
                                        <div className="flex items-start">
                                            <ChevronRight className="w-4 h-4 text-purple-600 mr-2 mt-1 flex-shrink-0" />
                                            <span>Follow up if symptoms change or questions arise</span>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Community Support Section */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Users className="w-8 h-8 text-purple-600 mr-2" />
                                    Finding Community Support
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Connecting with others facing similar challenges can provide unique understanding and practical advice. Community support comes in many forms:
                                </p>

                                {/* Support Group Options */}
                                <div className="space-y-6">
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-purple-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Local In-Person Groups</h3>
                                        </div>
                                        <div className="p-4">
                                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                                <li>Hospital-sponsored support groups (check gastroenterology departments)</li>
                                                <li>Disease-specific organizations (Crohn's & Colitis Foundation chapters)</li>
                                                <li>Community center wellness programs</li>
                                                <li>Meetup.com groups for digestive health</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-purple-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Specialized Programs</h3>
                                        </div>
                                        <div className="p-4">
                                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                                <li>IBD mentor programs (experienced patients guiding newcomers)</li>
                                                <li>Cooking classes for digestive-friendly diets</li>
                                                <li>Yoga/therapy groups for gut-brain connection</li>
                                                <li>Retreats for people with chronic digestive conditions</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Finding Local Resources */}
                                <div className="bg-white border border-gray-200 rounded-lg p-6 mt-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">How to Find Local Resources</h3>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                                                <Check className="w-5 h-5 text-green-500 mr-2" />
                                                Do's
                                            </h4>
                                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                                                <li>Ask your gastroenterologist for recommendations</li>
                                                <li>Check hospital community education calendars</li>
                                                <li>Search national organization websites for local chapters</li>
                                                <li>Visit your local library's health resource center</li>
                                                <li>Inquire at senior centers (many welcome all ages)</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                                                <Check className="w-5 h-5 text-green-500 mr-2" />
                                                Don'ts
                                            </h4>
                                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                                                <li>Don't share personal medical details in public forums</li>
                                                <li>Avoid groups that promote unproven treatments</li>
                                                <li>Be cautious with groups that charge high fees</li>
                                                <li>Don't feel obligated to stay if a group isn't the right fit</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Online Support Section */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <MessageSquare className="w-8 h-8 text-purple-600 mr-2" />
                                    Online Support Resources
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Digital platforms provide 24/7 access to support, especially valuable for those with mobility issues or rare conditions. These resources can complement in-person connections:
                                </p>

                                {/* Online Resources */}
                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">Reputable Online Communities</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>PatientsLikeMe (condition-specific forums)</li>
                                            <li>MyCrohnsAndColitisTeam (social network for IBD)</li>
                                            <li>American Gastroenterological Association forums</li>
                                            <li>Subreddits like r/IBD or r/Gastroparesis (verify moderation)</li>
                                        </ul>
                                    </div>
                                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">Educational Platforms</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>IBD School (free courses from the Crohn's & Colitis Foundation)</li>
                                            <li>Guts UK patient webinars</li>
                                            <li>YouTube channels by board-certified gastroenterologists</li>
                                            <li>Podcasts like "The Gut Health Podcast"</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Digital Tools */}
                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Digital Support Tools</h3>
                                    <div className="grid md:grid-cols-3 gap-4">
                                        <div className="border border-gray-200 rounded-lg p-4">
                                            <h4 className="font-bold text-gray-900 mb-2">Symptom Trackers</h4>
                                            <p className="text-gray-700 text-sm">Apps like Bowelle, GI Monitor, or custom spreadsheets</p>
                                        </div>
                                        <div className="border border-gray-200 rounded-lg p-4">
                                            <h4 className="font-bold text-gray-900 mb-2">Medication Managers</h4>
                                            <p className="text-gray-700 text-sm">Apps with reminders, refill alerts, and interaction checks</p>
                                        </div>
                                        <div className="border border-gray-200 rounded-lg p-4">
                                            <h4 className="font-bold text-gray-900 mb-2">Telehealth Platforms</h4>
                                            <p className="text-gray-700 text-sm">For remote consultations with specialists</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Building a comprehensive digestive care support network takes time and effort, but the benefits to your physical and emotional health are invaluable. Remember that needs may change over time—regularly assess what's working and where you might need additional support.
                                </p>

                                <div className="bg-purple-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "You are not alone in your journey. There is an entire community ready to support you—sometimes you just need to reach out and let them in." — Sarah Johnson, IBD Patient Advocate
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
                                            Dr. Michael Chen, MD
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600 mb-1">
                                        — Written by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            Sarah Johnson
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600 flex items-center gap-1">
                                        — <Calendar className="w-3 h-3" />
                                        <a href="#" className="text-blue-600 hover:underline">
                                            Updated on June 20, 2024
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Newsletter Signup */}
                        <div className="bg-purple-50 rounded-lg p-6 mb-8">
                            <div className="mb-4">
                                <h3 className="text-sm font-bold text-purple-800 uppercase tracking-wide mb-2">SUPPORT NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get digestive health support tips</h4>
                                <p className="text-gray-700 text-sm">
                                    Monthly resources for building your care network and managing digestive conditions.
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

                        {/* National Organizations */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">National Organizations</h3>
                            <div className="space-y-3">
                                <a href="#" className="block group">
                                    <div className="flex items-center gap-3 p-2 rounded hover:bg-purple-50 transition-colors">
                                        <ChevronRight className="w-4 h-4 text-purple-600 group-hover:translate-x-1 transition-transform" />
                                        <span className="font-medium">Crohn's & Colitis Foundation</span>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-center gap-3 p-2 rounded hover:bg-purple-50 transition-colors">
                                        <ChevronRight className="w-4 h-4 text-purple-600 group-hover:translate-x-1 transition-transform" />
                                        <span className="font-medium">American Gastroenterological Association</span>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-center gap-3 p-2 rounded hover:bg-purple-50 transition-colors">
                                        <ChevronRight className="w-4 h-4 text-purple-600 group-hover:translate-x-1 transition-transform" />
                                        <span className="font-medium">International Foundation for GI Disorders</span>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-center gap-3 p-2 rounded hover:bg-purple-50 transition-colors">
                                        <ChevronRight className="w-4 h-4 text-purple-600 group-hover:translate-x-1 transition-transform" />
                                        <span className="font-medium">Guts UK</span>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Emergency Support */}
                        <div className="bg-red-50 border-l-4 border-red-400 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                                <Phone className="w-5 h-5 text-red-600 mr-2" />
                                Crisis Support Resources
                            </h3>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li>National Suicide Prevention Lifeline: 988</li>
                                <li>Crisis Text Line: Text HOME to 741741</li>
                                <li>NAMI Helpline: 1-800-950-NAMI</li>
                                <li>Your local hospital's psychiatric emergency services</li>
                            </ul>
                        </div>

                        {/* Recommended Reading */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Recommended Reading</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-purple-600 hover:underline">"The Gut-Brain Connection" by Emeran Mayer</a>
                                </li>
                                <li>
                                    <a href="#" className="text-purple-600 hover:underline">"Living with Crohn's & Colitis" by Jessica Black</a>
                                </li>
                                <li>
                                    <a href="#" className="text-purple-600 hover:underline">"The Chronic Illness Workbook" by Patricia Fennell</a>
                                </li>
                                <li>
                                    <a href="#" className="text-purple-600 hover:underline">"How to Be Sick" by Toni Bernhard</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}