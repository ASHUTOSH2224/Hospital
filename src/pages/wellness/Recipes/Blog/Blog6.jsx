"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, Heart, ClipboardList, BookOpen, Star, Clock, MessageSquare, ArrowRight } from "lucide-react"

export default function NutritionistQuestionsGuide() {
    const [email, setEmail] = useState("")
    const [activeTab, setActiveTab] = useState("Preparation")

    const handleEmailSubmit = (e) => {
        e.preventDefault()
        console.log("Email submitted:", email)
        setEmail("")
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const tabs = ["Preparation", "Dietary Needs", "Goals", "Follow-up"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Essential Questions to Ask Your Nutritionist
                            </h1>

                            {/* Navigation Tabs */}
                            <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-200">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${activeTab === tab
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
                                <span className="text-sm">8 min read</span>
                            </div>

                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                Meeting with a nutritionist can be transformative for your health, but you'll get the most value by asking the right questions. This comprehensive guide covers essential questions about meal planning, dietary restrictions, nutritional goals, and recipe customization to prepare you for a productive consultation.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80"
                                    alt="Nutritionist discussing meal plan with client"
                                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                                    style={{ maxHeight: '500px' }}
                                />
                            </div>

                            {/* Key Takeaways */}
                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
                                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                    <Star className="w-5 h-5 text-blue-600 mr-2" />
                                    Key Takeaways
                                </h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>Prepare questions in advance to maximize your session time</li>
                                    <li>Ask about evidence-based practices and personalized approaches</li>
                                    <li>Discuss measurable outcomes and timeline expectations</li>
                                    <li>Understand how your nutritionist handles dietary restrictions</li>
                                    <li>Clarify follow-up procedures and ongoing support options</li>
                                </ul>
                            </div>

                            {/* Why These Questions Matter */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Heart className="w-8 h-8 text-blue-600 mr-2" />
                                    Why These Questions Matter
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    According to a <a href="#" className="text-blue-600 hover:underline">2023 study in the Journal of Nutritional Science</a>, patients who came prepared with specific questions reported 42% higher satisfaction with their nutrition consultations and achieved better health outcomes. Asking the right questions helps:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>Establish clear, measurable goals</li>
                                    <li>Understand the scientific basis for recommendations</li>
                                    <li>Identify potential challenges and solutions</li>
                                    <li>Create accountability structures</li>
                                    <li>Develop a personalized rather than generic approach</li>
                                </ul>

                                <div className="bg-blue-100 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Professional Insight</h3>
                                    <p className="text-gray-700 mb-2 italic">
                                        "The most successful clients are those who engage actively in their nutritional planning. Come prepared with questions about your specific needs, lifestyle constraints, and desired outcomes."
                                    </p>
                                    <p className="text-gray-700 font-medium">
                                        — Dr. Emily Parker, Registered Dietitian Nutritionist
                                    </p>
                                </div>
                            </section>

                            {/* Preparation Questions */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <ClipboardList className="w-8 h-8 text-blue-600 mr-2" />
                                    Preparation Questions
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Before diving into specific dietary recommendations, these foundational questions will help you understand your nutritionist's approach and establish a productive working relationship.
                                </p>

                                {/* Questions Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Question</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purpose</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ideal Response</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 font-medium text-gray-900">What information should I bring to our first session?</td>
                                                <td className="px-4 py-3">Ensure you're prepared with necessary medical history and dietary records</td>
                                                <td className="px-4 py-3">Specific requests for food logs, blood tests, or medical records</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 font-medium text-gray-900">How do you personalize nutrition plans?</td>
                                                <td className="px-4 py-3">Understand their approach to customization</td>
                                                <td className="px-4 py-3">Mentions considering lifestyle, preferences, and health conditions</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 font-medium text-gray-900">What's your philosophy on supplements?</td>
                                                <td className="px-4 py-3">Gauge their stance on supplementation</td>
                                                <td className="px-4 py-3">Evidence-based approach with preference for food-first solutions</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 font-medium text-gray-900">How do you stay current with nutrition research?</td>
                                                <td className="px-4 py-3">Assess their commitment to ongoing education</td>
                                                <td className="px-4 py-3">Specific journals, conferences, or continuing education mentioned</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">1</span>
                                            Credentials Matter
                                        </h3>
                                        <p className="text-gray-700">
                                            Always verify your nutritionist's credentials. In the U.S., look for "RD" (Registered Dietitian) or "RDN" (Registered Dietitian Nutritionist) after their name, indicating they've completed:
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 mt-2 ml-4">
                                            <li>Bachelor's degree in nutrition</li>
                                            <li>Supervised practice program</li>
                                            <li>National examination</li>
                                            <li>Continuing education requirements</li>
                                        </ul>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">2</span>
                                            Red Flags to Watch For
                                        </h3>
                                        <p className="text-gray-700">
                                            Be cautious of practitioners who:
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 mt-2 ml-4">
                                            <li>Promote extreme or restrictive diets</li>
                                            <li>Sell their own supplements excessively</li>
                                            <li>Claim to "cure" diseases</li>
                                            <li>Don't ask about your medical history</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Dietary Restrictions Section */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <BookOpen className="w-8 h-8 text-blue-600 mr-2" />
                                    Dietary Restrictions & Special Needs
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Whether you have allergies, intolerances, or ethical dietary preferences, these questions will help ensure your nutrition plan accommodates your needs.
                                </p>

                                <div className="space-y-6">
                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">For Food Allergies</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                                            <li>"How do you modify meal plans for multiple food allergies?"</li>
                                            <li>"What alternative nutrient sources do you recommend for my specific allergies?"</li>
                                            <li>"How should I handle cross-contamination concerns?"</li>
                                        </ul>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">For Vegetarian/Vegan Diets</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                                            <li>"How will you ensure I get enough complete proteins?"</li>
                                            <li>"What plant-based sources do you recommend for iron and B12?"</li>
                                            <li>"How do you balance phytonutrients with potential anti-nutrients in plant foods?"</li>
                                        </ul>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">For Medical Conditions</h3>
                                        <div className="overflow-x-auto">
                                            <table className="min-w-full">
                                                <thead>
                                                    <tr className="border-b border-gray-200">
                                                        <th className="text-left py-2 pr-4">Condition</th>
                                                        <th className="text-left py-2">Key Questions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="border-b border-gray-200">
                                                        <td className="py-3 pr-4 font-medium">Diabetes</td>
                                                        <td className="py-3">"How do you calculate carb ratios?" "What glycemic monitoring tools do you recommend?"</td>
                                                    </tr>
                                                    <tr className="border-b border-gray-200">
                                                        <td className="py-3 pr-4 font-medium">Heart Disease</td>
                                                        <td className="py-3">"How do you balance fat intake with cholesterol goals?" "What sodium targets do you suggest?"</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="py-3 pr-4 font-medium">IBS</td>
                                                        <td className="py-3">"How do you approach FODMAP elimination and reintroduction?" "What gut-healing nutrients do you prioritize?"</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Goal Setting Section */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Goal Setting & Progress Tracking</h2>

                                <p className="text-gray-700 mb-6">
                                    Clear goals and measurable outcomes are essential for nutritional success. These questions will help establish realistic expectations and tracking methods.
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">SMART Goal Questions</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                                            <li>"How will we make my goals Specific, Measurable, Achievable, Relevant, and Time-bound?"</li>
                                            <li>"What are realistic timelines for [your goal] based on your experience?"</li>
                                            <li>"How do you balance short-term wins with long-term sustainability?"</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Progress Measurement</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                                            <li>"What metrics will we track beyond weight (e.g., energy levels, lab values)?"</li>
                                            <li>"How often should I expect to see changes in [specific health marker]?"</li>
                                            <li>"What's your process for adjusting plans when progress stalls?"</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Case Study: Weight Management</h3>
                                    <p className="text-gray-700 mb-2">
                                        A 2022 clinical trial showed patients who set specific behavioral goals (vs. just weight targets) with their nutritionists were 3.2x more likely to maintain weight loss at 12 months.
                                    </p>
                                    <p className="text-gray-700">
                                        <span className="font-semibold">Example:</span> "Instead of 'lose 20 pounds,' we'll focus on 'eat vegetables with lunch and dinner daily' and track that behavior."
                                    </p>
                                </div>
                            </section>

                            {/* Practical Implementation */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Practical Implementation Questions</h2>

                                <p className="text-gray-700 mb-6">
                                    Transitioning from theory to practice often presents challenges. These questions address real-world application of nutritional advice.
                                </p>

                                <div className="space-y-6">
                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Meal Planning & Prep</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                                            <li>"How do you adjust recommendations for different cooking skill levels?"</li>
                                            <li>"What are your go-to strategies for busy professionals/students/parents?"</li>
                                            <li>"How much time should I budget for meal prep based on my plan?"</li>
                                        </ul>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Budget Considerations</h3>
                                        <div className="grid grid-cols-3 gap-4 text-sm">
                                            <div className="font-medium">Budget Level</div>
                                            <div className="font-medium">Protein Suggestions</div>
                                            <div className="font-medium">Produce Suggestions</div>
                                            
                                            <div>Limited</div>
                                            <div>Eggs, canned fish, chicken thighs</div>
                                            <div>Seasonal, frozen vegetables, cabbage</div>
                                            
                                            <div className="bg-blue-50">Moderate</div>
                                            <div className="bg-blue-50">Chicken breast, ground turkey, cottage cheese</div>
                                            <div className="bg-blue-50">Fresh seasonal, bulk frozen berries</div>
                                            
                                            <div>Flexible</div>
                                            <div>Wild salmon, grass-fed beef, specialty cheeses</div>
                                            <div>Organic, exotic varieties, fresh berries</div>
                                        </div>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Dining Out & Social Situations</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                                            <li>"How do you recommend navigating restaurant menus?"</li>
                                            <li>"What are your strategies for holiday meals and parties?"</li>
                                            <li>"How strictly should I adhere to my plan in social settings?"</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Follow-up Questions */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Follow-up & Support Questions</h2>

                                <p className="text-gray-700 mb-6">
                                    Ongoing support is crucial for lasting change. Clarify these aspects to ensure continued progress after your initial consultation.
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Session Logistics</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                                            <li>"How often do you recommend follow-up sessions?"</li>
                                            <li>"What's your policy between-session questions?"</li>
                                            <li>"Do you offer different session formats (in-person, video, etc.)?"</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Resources & Tools</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                                            <li>"What apps or tracking tools do you recommend?"</li>
                                            <li>"Do you provide meal templates or recipes?"</li>
                                            <li>"Are there educational materials you suggest?"</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-blue-100 rounded-lg p-4">
                                    <h3 className="font-bold text-gray-900 mb-2">Insurance & Payment</h3>
                                    <p className="text-gray-700 mb-2">
                                        Important financial considerations to address:
                                    </p>
                                    <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                                        <li>"Do you accept insurance? If so, which providers?"</li>
                                        <li>"What are your package options and pricing?"</li>
                                        <li>"Do you offer sliding scale fees or payment plans?"</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Final Checklist */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Pre-Consultation Checklist</h2>

                                <div className="border border-gray-200 rounded-lg overflow-hidden">
                                    <div className="bg-blue-600 px-4 py-2">
                                        <h3 className="font-bold text-white">Bring These to Your First Appointment</h3>
                                    </div>
                                    <div className="p-4">
                                        <div className="space-y-3">
                                            <div className="flex items-start">
                                                <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                                                <span className="text-gray-700">3-day food log (including a weekend day)</span>
                                            </div>
                                            <div className="flex items-start">
                                                <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                                                <span className="text-gray-700">List of medications and supplements</span>
                                            </div>
                                            <div className="flex items-start">
                                                <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                                                <span className="text-gray-700">Recent lab results (if available)</span>
                                            </div>
                                            <div className="flex items-start">
                                                <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                                                <span className="text-gray-700">List of favorite/disliked foods</span>
                                            </div>
                                            <div className="flex items-start">
                                                <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                                                <span className="text-gray-700">Typical daily schedule (for meal timing)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Preparing questions for your nutritionist demonstrates commitment to your health journey and ensures you get maximum value from your sessions. Remember that nutritional counseling is a collaborative process—the more specific information you provide about your lifestyle, preferences, and challenges, the more tailored and effective your plan will be.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    Don't hesitate to ask for clarification if recommendations are unclear or seem impractical for your situation. A good nutritionist will welcome your questions and work with you to create sustainable changes.
                                </p>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "The quality of your questions determines the quality of your nutritional plan. Come prepared, be honest about your challenges, and view this as the start of an ongoing conversation about your health."
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
                                            Dr. Rachel Kim, RDN
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600 mb-1">
                                        — Written by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            Jessica Miller
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
                                <h3 className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-2">NUTRITION NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get expert nutrition tips</h4>
                                <p className="text-gray-700 text-sm">
                                    Weekly guides, meal planning templates, and evidence-based advice.
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
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
                                >
                                    SUBSCRIBE <ArrowRight className="w-4 h-4 ml-2" />
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

                        {/* Popular Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Popular Resources</h3>
                            <div className="space-y-4">
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/meal-plan.jpg" alt="Meal planning" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">7-Day Meal Plan Template</h4>
                                            <p className="text-sm text-gray-600">Customizable for any diet</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/grocery-guide.jpg" alt="Grocery store" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Healthy Grocery Shopping Guide</h4>
                                            <p className="text-sm text-gray-600">Budget-friendly options</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Quick Reference Chart */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Nutritionist Red Flags</h3>
                            <div className="space-y-3">
                                <div className="flex items-start">
                                    <MessageSquare className="w-5 h-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                                    <span>"This one diet works for everyone"</span>
                                </div>
                                <div className="flex items-start">
                                    <MessageSquare className="w-5 h-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                                    <span>"Supplements can replace a healthy diet"</span>
                                </div>
                                <div className="flex items-start">
                                    <MessageSquare className="w-5 h-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                                    <span>"You'll see results in just 3 days"</span>
                                </div>
                                <div className="flex items-start">
                                    <MessageSquare className="w-5 h-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                                    <span>"I don't believe in calories"</span>
                                </div>
                            </div>
                        </div>

                        {/* Related Articles */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Related Articles</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-start">
                                        <ArrowRight className="w-4 h-4 mt-0.5 mr-2 flex-shrink-0" />
                                        How to Read Nutrition Labels Like a Pro
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-start">
                                        <ArrowRight className="w-4 h-4 mt-0.5 mr-2 flex-shrink-0" />
                                        Meal Prepping for Beginners: A Step-by-Step Guide
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-start">
                                        <ArrowRight className="w-4 h-4 mt-0.5 mr-2 flex-shrink-0" />
                                        Understanding Macronutrients: Protein, Carbs & Fats
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-start">
                                        <ArrowRight className="w-4 h-4 mt-0.5 mr-2 flex-shrink-0" />
                                        The Gut-Brain Connection: How Diet Affects Mental Health
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