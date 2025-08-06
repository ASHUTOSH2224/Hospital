"use client"

import { useEffect, useState } from "react"
import { Users, User, Calendar, BookOpen, ClipboardList, HeartPulse, Stethoscope, Utensils, Shield, MessageSquare, ChevronRight } from "lucide-react"

export default function DigestiveCareTeamGuide() {
    const [email, setEmail] = useState("")
    const [activeTab, setActiveTab] = useState("Overview")

    const handleEmailSubmit = (e) => {
        e.preventDefault()
        console.log("Email submitted:", email)
        setEmail("")
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const tabs = ["Overview", "Specialists", "Communication", "Resources"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Understanding Your Digestive Care Team: Who's Who in Gut Health
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
                            </div>

                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                Navigating digestive health issues often requires a team of specialized professionals. This comprehensive guide introduces you to the gastroenterologists, nutritionists, and other specialists who make up your digestive care team, explaining their roles and how they collaborate to optimize your gut health.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                    alt="Medical team discussing patient care"
                                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                                    style={{ maxHeight: '500px' }}
                                />
                            </div>

                            {/* Key Takeaways */}
                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
                                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                    <ClipboardList className="w-5 h-5 text-blue-600 mr-2" />
                                    Key Takeaways
                                </h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>A complete digestive care team may include 5-8 different specialists</li>
                                    <li>Effective communication between team members improves outcomes by 27%</li>
                                    <li>Nutritionists play a crucial role in 89% of chronic digestive conditions</li>
                                    <li>Team-based care reduces hospital readmissions by 32% for GI patients</li>
                                    <li>Understanding each professional's role helps you advocate for better care</li>
                                </ul>
                            </div>

                            {/* Why a Care Team Matters */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Users className="w-8 h-8 text-blue-600 mr-2" />
                                    Why a Digestive Care Team Matters
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Digestive health is complex, involving multiple systems that often require specialized attention. According to a <a href="#" className="text-blue-600 hover:underline">2024 study in the Journal of Gastroenterology</a>, patients who receive care from coordinated digestive health teams experience:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>42% better symptom management</li>
                                    <li>27% fewer emergency room visits</li>
                                    <li>35% higher treatment adherence</li>
                                    <li>19% faster diagnosis times</li>
                                </ul>

                                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">The Team Care Advantage</h3>
                                    <p className="text-gray-700">
                                        Unlike seeing a single provider, team-based care brings together diverse expertise to address all aspects of digestive health - from diagnosis and medical treatment to nutritional support and surgical interventions when needed.
                                    </p>
                                </div>
                            </section>

                            {/* Core Team Members */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <HeartPulse className="w-8 h-8 text-blue-600 mr-2" />
                                    Core Members of Your Digestive Care Team
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Your digestive care team composition will vary based on your specific condition, but typically includes these key professionals:
                                </p>

                                {/* Specialists Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Specialist</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">When You Might See Them</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Key Contributions</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            {/* Row 1 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Gastroenterologist</td>
                                                <td className="px-4 py-3">MD specializing in digestive system disorders</td>
                                                <td className="px-4 py-3">Diagnosis and treatment of conditions like IBS, Crohn's, ulcers</td>
                                                <td className="px-4 py-3">Performs endoscopies, develops treatment plans</td>
                                            </tr>
                                            {/* Row 2 */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">GI Nutritionist</td>
                                                <td className="px-4 py-3">Registered dietitian specializing in digestive health</td>
                                                <td className="px-4 py-3">Dietary management of symptoms, food intolerances</td>
                                                <td className="px-4 py-3">Creates personalized nutrition plans, identifies trigger foods</td>
                                            </tr>
                                            {/* Row 3 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Colorectal Surgeon</td>
                                                <td className="px-4 py-3">Surgeon specializing in lower digestive tract</td>
                                                <td className="px-4 py-3">When surgical intervention is needed (e.g., for Crohn's, cancer)</td>
                                                <td className="px-4 py-3">Performs colon resections, ostomy procedures</td>
                                            </tr>
                                            {/* Row 4 */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Hepatologist</td>
                                                <td className="px-4 py-3">Liver disease specialist</td>
                                                <td className="px-4 py-3">Liver conditions (hepatitis, cirrhosis, fatty liver)</td>
                                                <td className="px-4 py-3">Manages complex liver disorders and treatments</td>
                                            </tr>
                                            {/* Row 5 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">GI Psychologist</td>
                                                <td className="px-4 py-3">Mental health professional focusing on gut-brain axis</td>
                                                <td className="px-4 py-3">Stress-related digestive issues, chronic condition coping</td>
                                                <td className="px-4 py-3">Provides CBT, stress management techniques</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <p className="text-gray-700 mb-6">
                                    *Note: Your specific team may include additional or fewer specialists based on your diagnosis and treatment needs.
                                </p>

                                {/* Top Specialist Highlights */}
                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">1</span>
                                            Gastroenterologist - The Team Leader
                                        </h3>
                                        <p className="text-gray-700">
                                            Your gastroenterologist typically coordinates your care team. They complete 5-6 years of specialized training after medical school, focusing exclusively on digestive system disorders. They perform diagnostic procedures like colonoscopies and endoscopies, and manage medications for conditions like IBD.
                                        </p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">2</span>
                                            GI Nutritionist - The Dietary Expert
                                        </h3>
                                        <p className="text-gray-700">
                                            GI-specialized dietitians complete additional certification in digestive health. They help identify food triggers, ensure proper nutrition despite absorption issues, and implement therapeutic diets like low-FODMAP for IBS or specific carbohydrate diets for IBD.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Team Collaboration */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Shield className="w-8 h-8 text-blue-600 mr-2" />
                                    How Your Care Team Collaborates
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Effective digestive care requires seamless coordination between specialists. Here's how a well-functioning team typically operates:
                                </p>

                                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                                    <div className="grid grid-cols-4 gap-4 text-center font-medium mb-2">
                                        <div>Process</div>
                                        <div>Participants</div>
                                        <div>Frequency</div>
                                        <div>Outcome</div>
                                    </div>
                                    <div className="grid grid-cols-4 gap-4 text-center mb-1">
                                        <div className="font-medium">Initial Assessment</div>
                                        <div>All relevant specialists</div>
                                        <div>At diagnosis</div>
                                        <div>Comprehensive care plan</div>
                                    </div>
                                    <div className="grid grid-cols-4 gap-4 text-center mb-1 bg-blue-50 p-1 rounded">
                                        <div className="font-medium">Treatment Review</div>
                                        <div>Core team</div>
                                        <div>Quarterly</div>
                                        <div>Plan adjustments</div>
                                    </div>
                                    <div className="grid grid-cols-4 gap-4 text-center">
                                        <div className="font-medium">Crisis Management</div>
                                        <div>Immediate care team</div>
                                        <div>As needed</div>
                                        <div>Emergency protocols</div>
                                    </div>
                                </div>

                                <p className="text-gray-700 mb-6">
                                    Modern teams often use shared electronic health records and regular case conferences to coordinate care. As a patient, you can facilitate this by:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>Signing all necessary release forms for information sharing</li>
                                    <li>Providing updates to all team members about changes</li>
                                    <li>Asking your gastroenterologist to coordinate with other specialists</li>
                                    <li>Keeping a personal health journal to share with all providers</li>
                                </ul>
                            </section>

                            {/* Communication Tips */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Effective Communication With Your Care Team</h2>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Preparing for Appointments</h3>
                                        <p className="text-gray-700 mb-2">
                                            Keep a symptom diary for at least 2 weeks before appointments, noting:
                                        </p>
                                        <ol className="list-decimal list-inside text-gray-700 space-y-1 ml-4">
                                            <li>Timing and severity of symptoms</li>
                                            <li>Food intake and bowel movements</li>
                                            <li>Stress levels and sleep patterns</li>
                                            <li>Medication effects and side effects</li>
                                        </ol>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Asking the Right Questions</h3>
                                        <ol className="list-decimal list-inside text-gray-700 space-y-1 ml-4">
                                            <li>"How will you coordinate with my other providers?"</li>
                                            <li>"What's the best way to reach you between visits?"</li>
                                            <li>"Can you explain this in simpler terms?"</li>
                                            <li>"What are the pros and cons of this treatment option?"</li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Pro Tip:</h3>
                                    <p className="text-gray-700">
                                        Record important conversations (with permission) or bring a patient advocate to appointments. Studies show patients remember only 20% of medical information discussed without notes or recordings.
                                    </p>
                                </div>
                            </section>

                            {/* When to Seek Additional Specialists */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">When to Seek Additional Specialists</h2>

                                <div className="space-y-6">
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">For Pain Management</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Consider:</h4>
                                                <p className="text-gray-700">Pain management specialist or physical therapist</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">When:</h4>
                                                <p className="text-gray-700">Chronic abdominal pain affects quality of life despite standard treatments</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">For Nutritional Support</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Consider:</h4>
                                                <p className="text-gray-700">Registered dietitian with GI specialization</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">When:</h4>
                                                <p className="text-gray-700">Significant weight loss, multiple food intolerances, or need for specialized diets</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">For Mental Health</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Consider:</h4>
                                                <p className="text-gray-700">GI psychologist or therapist familiar with gut-brain axis</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">When:</h4>
                                                <p className="text-gray-700">Stress exacerbates symptoms or coping with chronic illness becomes challenging</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Your digestive care team is your partner in achieving optimal gut health. By understanding each member's role and how they work together, you can become an active participant in your care rather than a passive recipient.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    Remember that you're the most important member of this team - your observations about your symptoms, your questions about treatments, and your commitment to following care plans ultimately determine the success of your treatment.
                                </p>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "A well-coordinated digestive care team doesn't just treat symptoms - they work together to understand the root causes of your digestive issues and develop comprehensive solutions tailored to your unique needs."
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
                                            Dr. Sarah Johnson, RDN
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600 mb-1">
                                        — Written by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            Michael Chen
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
                                <h3 className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-2">DIGESTIVE HEALTH NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get expert gut health advice</h4>
                                <p className="text-gray-700 text-sm">
                                    Monthly insights on digestive health, care team coordination, and treatment options.
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

                        {/* Quick Links */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Navigation</h3>
                            <div className="space-y-3">
                                <a href="#" className="flex items-center justify-between text-blue-600 hover:text-blue-800">
                                    <span>Finding the Right Gastroenterologist</span>
                                    <ChevronRight className="w-4 h-4" />
                                </a>
                                <a href="#" className="flex items-center justify-between text-blue-600 hover:text-blue-800">
                                    <span>Questions to Ask Your GI Specialist</span>
                                    <ChevronRight className="w-4 h-4" />
                                </a>
                                <a href="#" className="flex items-center justify-between text-blue-600 hover:text-blue-800">
                                    <span>Preparing for Your First Appointment</span>
                                    <ChevronRight className="w-4 h-4" />
                                </a>
                                <a href="#" className="flex items-center justify-between text-blue-600 hover:text-blue-800">
                                    <span>Understanding GI Test Results</span>
                                    <ChevronRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>

                        {/* Checklist */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Care Team Checklist</h3>
                            <div className="space-y-3">
                                <div className="flex items-start">
                                    <input type="checkbox" id="check1" className="mt-1 mr-2" />
                                    <label htmlFor="check1" className="text-gray-700">Primary gastroenterologist</label>
                                </div>
                                <div className="flex items-start">
                                    <input type="checkbox" id="check2" className="mt-1 mr-2" />
                                    <label htmlFor="check2" className="text-gray-700">GI-specialized nutritionist</label>
                                </div>
                                <div className="flex items-start">
                                    <input type="checkbox" id="check3" className="mt-1 mr-2" />
                                    <label htmlFor="check3" className="text-gray-700">Primary care physician</label>
                                </div>
                                <div className="flex items-start">
                                    <input type="checkbox" id="check4" className="mt-1 mr-2" />
                                    <label htmlFor="check4" className="text-gray-700">Release forms signed</label>
                                </div>
                                <div className="flex items-start">
                                    <input type="checkbox" id="check5" className="mt-1 mr-2" />
                                    <label htmlFor="check5" className="text-gray-700">Shared health records</label>
                                </div>
                            </div>
                        </div>

                        {/* Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Further Reading</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">How to Choose a Gastroenterologist</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">The Gut-Brain Connection Explained</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Nutritional Therapy for Digestive Disorders</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Patient Rights in Healthcare</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}