"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Heart, MessageSquare, Bookmark, Share2, Check, Star, ChevronRight } from "lucide-react"

export default function PatientSexualWellnessJourney() {
    const [email, setEmail] = useState("")
    const [activeTab, setActiveTab] = useState("Story")
    const [bookmarked, setBookmarked] = useState(false)

    const handleEmailSubmit = (e) => {
        e.preventDefault()
        console.log("Email submitted:", email)
        setEmail("")
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const tabs = ["Story", "Challenges", "Solutions", "Resources"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <div className="flex items-center text-sm text-gray-500 mb-4">
                                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium">Success Story</span>
                                <span className="mx-2">•</span>
                                <span>10 min read</span>
                            </div>

                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Real Health Journeys: A Patient's Experience with Sexual Wellness
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
                                <span className="text-sm">Updated on June 15, 2024</span>
                            </div>

                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                Sexual wellness is an often overlooked but critical component of overall health. In this intimate account, we follow Sarah's journey through challenges with intimacy, medical hurdles, and ultimately finding balance and confidence in her sexual health. Names have been changed to protect privacy, but the experiences are real.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80"
                                    alt="Couple holding hands in therapy session"
                                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                                    style={{ maxHeight: '500px' }}
                                />
                                <p className="text-sm text-gray-500 mt-2">Photo credit: Unsplash</p>
                            </div>

                            {/* Key Takeaways */}
                            <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-8">
                                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                    <Star className="w-5 h-5 text-purple-600 mr-2" />
                                    Key Takeaways
                                </h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>Over 40% of adults experience sexual health concerns at some point</li>
                                    <li>Communication is the foundation of sexual wellness in relationships</li>
                                    <li>Medical conditions and medications can significantly impact sexual health</li>
                                    <li>Professional help is available and often covered by insurance</li>
                                    <li>Small daily practices can dramatically improve intimacy and satisfaction</li>
                                </ul>
                            </div>

                            {/* The Beginning */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Heart className="w-8 h-8 text-purple-600 mr-2" />
                                    The Beginning: Recognizing the Problem
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Sarah, a 34-year-old marketing executive, first noticed changes in her sexual health after the birth of her second child. "At first I thought it was just normal postpartum changes," she recalls. "But when things hadn't improved after 18 months, I knew something was wrong."
                                </p>

                                <p className="text-gray-700 mb-6">
                                    Her symptoms included:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>Decreased libido (going from 3-4 times weekly to once monthly)</li>
                                    <li>Pain during intercourse (diagnosed later as vulvodynia)</li>
                                    <li>Difficulty achieving orgasm</li>
                                    <li>Emotional detachment during intimate moments</li>
                                </ul>

                                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Did You Know?</h3>
                                    <p className="text-gray-700">
                                        According to a 2023 study in the <em>Journal of Sexual Medicine</em>, 43% of women and 31% of men experience some form of sexual dysfunction, yet only 12% seek professional help due to embarrassment or lack of awareness about treatment options.
                                    </p>
                                </div>
                            </section>

                            {/* The Medical Journey */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                    The Medical Journey: Seeking Answers
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Sarah's path to diagnosis involved multiple specialists over nearly two years:
                                </p>

                                {/* Timeline */}
                                <div className="mb-8">
                                    <div className="relative">
                                        {/* Timeline line */}
                                        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-purple-200"></div>
                                        
                                        {/* Timeline items */}
                                        <div className="space-y-8">
                                            {/* Item 1 */}
                                            <div className="relative pl-12">
                                                <div className="absolute left-0 w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white">
                                                    1
                                                </div>
                                                <div className="bg-gray-50 p-4 rounded-lg">
                                                    <h3 className="font-bold text-gray-900 mb-1">Primary Care Visit</h3>
                                                    <p className="text-sm text-gray-600 mb-2">March 2022</p>
                                                    <p className="text-gray-700">
                                                        Initial dismissal of symptoms as "stress-related." Basic blood work showed normal hormone levels.
                                                    </p>
                                                </div>
                                            </div>
                                            
                                            {/* Item 2 */}
                                            <div className="relative pl-12">
                                                <div className="absolute left-0 w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white">
                                                    2
                                                </div>
                                                <div className="bg-gray-50 p-4 rounded-lg">
                                                    <h3 className="font-bold text-gray-900 mb-1">Gynecologist Consultation</h3>
                                                    <p className="text-sm text-gray-600 mb-2">June 2022</p>
                                                    <p className="text-gray-700">
                                                        Diagnosed with mild vaginal atrophy. Prescribed topical estrogen, which helped slightly but didn't resolve all symptoms.
                                                    </p>
                                                </div>
                                            </div>
                                            
                                            {/* Item 3 */}
                                            <div className="relative pl-12">
                                                <div className="absolute left-0 w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white">
                                                    3
                                                </div>
                                                <div className="bg-gray-50 p-4 rounded-lg">
                                                    <h3 className="font-bold text-gray-900 mb-1">Pelvic Floor Specialist</h3>
                                                    <p className="text-sm text-gray-600 mb-2">October 2022</p>
                                                    <p className="text-gray-700">
                                                        Discovered hypertonic pelvic floor muscles contributing to pain. Began physical therapy.
                                                    </p>
                                                </div>
                                            </div>
                                            
                                            {/* Item 4 */}
                                            <div className="relative pl-12">
                                                <div className="absolute left-0 w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white">
                                                    4
                                                </div>
                                                <div className="bg-gray-50 p-4 rounded-lg">
                                                    <h3 className="font-bold text-gray-900 mb-1">Sex Therapist</h3>
                                                    <p className="text-sm text-gray-600 mb-2">February 2023</p>
                                                    <p className="text-gray-700">
                                                        Addressed psychological components and relationship dynamics. Implemented sensate focus exercises.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-gray-700 mb-6">
                                    "The turning point was finding a provider who took all aspects seriously—physical, emotional, and relational," Sarah notes. "No single specialist had all the answers, but together we pieced it together."
                                </p>

                                {/* Treatment Effectiveness Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Treatment</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Effectiveness</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time to Notice Results</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Topical Estrogen</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Medical</td>
                                                <td className="px-4 py-3">Moderate for dryness</td>
                                                <td className="px-4 py-3">3-4 weeks</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Pelvic Floor PT</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Physical</td>
                                                <td className="px-4 py-3">High for pain relief</td>
                                                <td className="px-4 py-3">6-8 weeks</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Sensate Focus</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Behavioral</td>
                                                <td className="px-4 py-3">High for intimacy</td>
                                                <td className="px-4 py-3">Immediate benefits</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Communication Exercises</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Relational</td>
                                                <td className="px-4 py-3">Very High</td>
                                                <td className="px-4 py-3">2-4 weeks</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            {/* Relationship Impact */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                    The Relationship Impact: Navigating Together
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Sexual health challenges inevitably affect relationships. Sarah and her partner Mark attended couples counseling to address:
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">Communication Breakdowns</h3>
                                        <p className="text-gray-700">
                                            They learned "speaker-listener" techniques to discuss sensitive topics without blame. Key was scheduling regular check-ins about their sexual relationship.
                                        </p>
                                    </div>
                                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">Mismatched Expectations</h3>
                                        <p className="text-gray-700">
                                            Therapy helped them align on frequency, types of intimacy, and redefine what "success" looked like during this period.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Sarah's Advice:</h3>
                                    <p className="text-gray-700">
                                        "We made a rule: no sexual advances when either of us was exhausted, hungry, or stressed. It sounds simple, but eliminating those moments of rejection changed everything."
                                    </p>
                                </div>

                                {/* Intimacy Alternatives */}
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Non-Sexual Intimacy Practices They Discovered</h3>
                                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                                    <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                                            <Heart className="w-5 h-5 text-purple-600" />
                                        </div>
                                        <h4 className="font-medium">20-Second Hugs</h4>
                                        <p className="text-sm text-gray-600">Oxytocin-boosting daily ritual</p>
                                    </div>
                                    <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                                            <MessageSquare className="w-5 h-5 text-purple-600" />
                                        </div>
                                        <h4 className="font-medium">Appreciation Lists</h4>
                                        <p className="text-sm text-gray-600">Weekly exchange of 3 things they admire</p>
                                    </div>
                                    <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                                            <Bookmark className="w-5 h-5 text-purple-600" />
                                        </div>
                                        <h4 className="font-medium">Sensate Focus</h4>
                                        <p className="text-sm text-gray-600">Non-demand touching exercises</p>
                                    </div>
                                    <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                                            <User className="w-5 h-5 text-purple-600" />
                                        </div>
                                        <h4 className="font-medium">Parallel Relaxation</h4>
                                        <p className="text-sm text-gray-600">Lying together without expectations</p>
                                    </div>
                                </div>
                            </section>

                            {/* Practical Solutions */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                    Practical Solutions That Made a Difference
                                </h2>

                                <div className="mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Medical Interventions</h3>
                                    <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                                        <li><strong>Compounded testosterone cream:</strong> Added after blood tests showed low free testosterone</li>
                                        <li><strong>Pelvic wand:</strong> For at-home muscle release between PT sessions</li>
                                        <li><strong>Vaginal dilators:</strong> Graduated set to desensitize painful areas</li>
                                    </ul>
                                </div>

                                <div className="mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Lifestyle Adjustments</h3>
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <div className="grid grid-cols-3 gap-4 text-center font-medium mb-2 border-b pb-2">
                                            <div>Change</div>
                                            <div>Implementation</div>
                                            <div>Benefit Noticed</div>
                                        </div>
                                        <div className="grid grid-cols-3 gap-4 text-center mb-1 border-b pb-2">
                                            <div>Sleep hygiene</div>
                                            <div>Strict 10pm bedtime</div>
                                            <div>Increased desire in 3 weeks</div>
                                        </div>
                                        <div className="grid grid-cols-3 gap-4 text-center mb-1 border-b pb-2">
                                            <div>Stress reduction</div>
                                            <div>Daily 10-min meditation</div>
                                            <div>Less pelvic tension</div>
                                        </div>
                                        <div className="grid grid-cols-3 gap-4 text-center">
                                            <div>Shared activities</div>
                                            <div>Weekly dance classes</div>
                                            <div>Improved non-sexual touch</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-purple-50 rounded-lg p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Sarah's Current Routine</h3>
                                    <p className="text-gray-700 mb-4">
                                        After 18 months of consistent effort, Sarah maintains:
                                    </p>
                                    <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                                        <li>Monthly check-ins with her pelvic floor therapist</li>
                                        <li>Quarterly visits with her gynecologist specializing in sexual medicine</li>
                                        <li>Daily mindfulness practice (even 5 minutes)</li>
                                        <li>"Tech-free" bedroom policy after 9pm</li>
                                        <li>Regular "state of the union" conversations with her partner</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Resources Section */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                    Helpful Resources
                                </h2>

                                <div className="space-y-6">
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-purple-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Books</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">"Come As You Are" by Emily Nagoski</h4>
                                                <p className="text-gray-700">Groundbreaking book on women's sexual health</p>
                                            </div>
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">"The Sexual Healing Journey" by Wendy Maltz</h4>
                                                <p className="text-gray-700">For recovering from sexual difficulties</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">"Mating in Captivity" by Esther Perel</h4>
                                                <p className="text-gray-700">On maintaining desire in long-term relationships</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-purple-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Organizations</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">International Society for Sexual Medicine</h4>
                                                <p className="text-gray-700">Provider directory and educational materials</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">American Association of Sexuality Educators</h4>
                                                <p className="text-gray-700">Certified professionals and resources</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Reflections</h2>

                                <p className="text-gray-700 mb-4">
                                    "This journey taught me that sexual health is health. There's no shame in seeking help, and small consistent changes really do add up. I'm not 'cured'—I've learned to manage and understand my body better. Our sex life looks different now, but in many ways it's more fulfilling than before."
                                </p>

                                <div className="bg-purple-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "If I could tell my past self one thing, it would be: Don't wait. The sooner you address it, the sooner you can start feeling better. And you deserve to feel good in your body and relationships."
                                    </p>
                                </div>
                            </section>

                            {/* Comments and Sharing */}
                            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-gray-200 pt-6">
                                <button className="flex items-center text-purple-600 hover:text-purple-800">
                                    <MessageSquare className="w-5 h-5 mr-2" />
                                    <span>24 Comments</span>
                                </button>
                                <div className="flex items-center gap-4">
                                    <button 
                                        onClick={() => setBookmarked(!bookmarked)}
                                        className={`flex items-center ${bookmarked ? 'text-purple-600' : 'text-gray-600 hover:text-gray-900'}`}
                                    >
                                        <Bookmark className="w-5 h-5 mr-2" />
                                        <span>{bookmarked ? 'Bookmarked' : 'Bookmark'}</span>
                                    </button>
                                    <button className="flex items-center text-gray-600 hover:text-gray-900">
                                        <Share2 className="w-5 h-5 mr-2" />
                                        <span>Share</span>
                                    </button>
                                </div>
                            </div>
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
                                            Clinically reviewed
                                        </a>{" "}
                                        by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            Dr. James Wilson, Sexual Health Specialist
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600 mb-1">
                                        — Written by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            Emma Rodriguez
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
                        <div className="bg-purple-50 rounded-lg p-6 mb-8">
                            <div className="mb-4">
                                <h3 className="text-sm font-bold text-purple-800 uppercase tracking-wide mb-2">WELLNESS NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get intimate health insights</h4>
                                <p className="text-gray-700 text-sm">
                                    Monthly expert advice, patient stories, and research updates delivered discreetly.
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
                                is protected
                            </p>
                        </div>

                        {/* Related Articles */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Related Stories</h3>
                            <div className="space-y-4">
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80" alt="Couple cooking" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors">How Nutrition Affects Intimacy</h4>
                                            <p className="text-sm text-gray-600">8 min read</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80" alt="Woman at doctor's office" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors">Finding the Right Healthcare Provider</h4>
                                            <p className="text-sm text-gray-600">12 min read</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80" alt="Yoga pose" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors">Mind-Body Connection for Sexual Health</h4>
                                            <p className="text-sm text-gray-600">6 min read</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Quick Facts */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Sexual Health by the Numbers</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Women experiencing sexual pain</span>
                                    <span className="font-medium">30%</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Men with erectile concerns by age 40</span>
                                    <span className="font-medium">40%</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Couples who report improved communication after therapy</span>
                                    <span className="font-medium">78%</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Patients satisfied with treatment outcomes</span>
                                    <span className="font-medium">65%</span>
                                </div>
                            </div>
                        </div>

                        {/* Professional Help */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">When to Seek Help</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <Check className="w-5 h-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700">Symptoms persist beyond 3 months</span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="w-5 h-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700">Causing relationship distress</span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="w-5 h-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700">Associated with medical conditions</span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="w-5 h-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700">Following childbirth or surgery</span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="w-5 h-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700">When medications may be contributing</span>
                                </li>
                            </ul>
                            <button className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center">
                                Find a Specialist <ChevronRight className="w-4 h-4 ml-1" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}