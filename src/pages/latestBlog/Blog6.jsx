"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Clock, HeartPulse, Dumbbell, Footprints, Scale, BookOpen, Star } from "lucide-react"

export default function HeartHealthyExercisesGuide() {
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

    const tabs = ["Overview", "Exercises", "Routines", "Precautions"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Best Exercises For Heart Health: A Complete Guide
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
                            <div className="flex items-center text-gray-500 mb-4 gap-4">
                                <div className="flex items-center">
                                    <Calendar className="w-4 h-4 mr-1" />
                                    <span className="text-sm">May 10, 2024</span>
                                </div>
                                <div className="flex items-center">
                                    <Clock className="w-4 h-4 mr-1" />
                                    <span className="text-sm">10 min read</span>
                                </div>
                            </div>

                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                Regular exercise is one of the most effective ways to strengthen your heart, improve circulation, and reduce cardiovascular risks. This comprehensive guide covers the best exercises for heart health, tailored routines for different fitness levels, and important precautions for those with existing heart conditions.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="/GettyImages-961271834-thumbnail-732x549.jpg"
                                    alt="Senior man exercising outdoors for heart health"
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
                                    <li>Aerobic exercises improve cardiovascular endurance and lower blood pressure</li>
                                    <li>Strength training helps maintain healthy body weight and reduces cardiac workload</li>
                                    <li>Consistency is more important than intensity for long-term heart health</li>
                                    <li>Even 30 minutes of daily moderate exercise can reduce heart disease risk by 30-40%</li>
                                    <li>Always consult your cardiologist before starting a new exercise program</li>
                                </ul>
                            </div>

                            {/* Why Exercise Matters for Heart Health */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <HeartPulse className="w-8 h-8 text-blue-600 mr-2" />
                                    Why Exercise Matters for Heart Health
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Regular physical activity strengthens the heart muscle, improves circulation, and helps maintain healthy blood pressure and cholesterol levels. According to the <a href="#" className="text-blue-600 hover:underline">American Heart Association</a>, adults who engage in at least 150 minutes of moderate exercise per week have:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>50% lower risk of developing coronary artery disease</li>
                                    <li>35% reduced risk of hypertension</li>
                                    <li>30% lower chance of experiencing a stroke</li>
                                    <li>Improved survival rates after heart attacks (45% higher)</li>
                                </ul>

                                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">How Exercise Benefits Your Heart</h3>
                                    <p className="text-gray-700 mb-2">
                                        Physical activity helps your cardiovascular system in multiple ways:
                                    </p>
                                    <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                                        <li>Lowers resting heart rate by strengthening the heart muscle</li>
                                        <li>Improves cholesterol profile by increasing HDL (good cholesterol)</li>
                                        <li>Enhances blood vessel elasticity and reduces arterial stiffness</li>
                                        <li>Helps regulate blood sugar levels and insulin sensitivity</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Top Exercises for Heart Health */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Dumbbell className="w-8 h-8 text-blue-600 mr-2" />
                                    Top 10 Exercises for Heart Health
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Based on recommendations from cardiologists and exercise physiologists, these are the most effective exercises for improving cardiovascular health:
                                </p>

                                {/* Exercises Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Exercise</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Intensity</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Calories Burned*</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Heart Benefits</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Beginner Friendly</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            {/* Row 1 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Brisk Walking</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Low-Moderate</td>
                                                <td className="px-4 py-3 whitespace-nowrap">180-240</td>
                                                <td className="px-4 py-3">Improves circulation, lowers BP</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Yes</td>
                                            </tr>
                                            {/* Row 2 */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Swimming</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Moderate</td>
                                                <td className="px-4 py-3 whitespace-nowrap">400-500</td>
                                                <td className="px-4 py-3">Full-body, low-impact cardio</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Yes</td>
                                            </tr>
                                            {/* Row 3 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Cycling</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Moderate-High</td>
                                                <td className="px-4 py-3 whitespace-nowrap">400-600</td>
                                                <td className="px-4 py-3">Strengthens legs, improves endurance</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Yes</td>
                                            </tr>
                                            {/* Row 4 */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Elliptical Training</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Moderate</td>
                                                <td className="px-4 py-3 whitespace-nowrap">300-450</td>
                                                <td className="px-4 py-3">Low-impact full-body workout</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Yes</td>
                                            </tr>
                                            {/* Row 5 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Rowing</td>
                                                <td className="px-4 py-3 whitespace-nowrap">High</td>
                                                <td className="px-4 py-3 whitespace-nowrap">500-700</td>
                                                <td className="px-4 py-3">Excellent cardiovascular challenge</td>
                                                <td className="px-4 py-3 whitespace-nowrap">With guidance</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <p className="text-gray-700 mb-6">
                                    *Calories burned estimates are for a 155-pound adult during 30 minutes of activity. Actual values vary based on weight, intensity, and fitness level.
                                </p>

                                {/* Top 3 Highlights */}
                                <div className="grid md:grid-cols-3 gap-6 mb-8">
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">1</span>
                                            Walking - The Underrated Champion
                                        </h3>
                                        <p className="text-gray-700">
                                            A <a href="#" className="text-blue-600 hover:underline">Harvard study</a> found that walking just 30 minutes daily can reduce coronary heart disease risk by 19%. Start with 10-minute sessions and gradually increase duration.
                                        </p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">2</span>
                                            Swimming - Gentle Yet Powerful
                                        </h3>
                                        <p className="text-gray-700">
                                            The buoyancy of water reduces stress on joints while providing excellent cardiovascular benefits. Ideal for those with arthritis or mobility issues.
                                        </p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">3</span>
                                            Strength Training - Not Just for Muscles
                                        </h3>
                                        <p className="text-gray-700">
                                            Research shows combining strength training with cardio reduces heart disease risk by 40-70% more than cardio alone. Focus on lighter weights with higher repetitions.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Exercise Intensity Guidelines */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Scale className="w-8 h-8 text-blue-600 mr-2" />
                                    Exercise Intensity Guidelines
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Understanding exercise intensity is crucial for heart health, especially if you have existing cardiovascular conditions:
                                </p>

                                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                                    <div className="grid grid-cols-4 gap-4 text-center font-medium mb-2">
                                        <div>Intensity Level</div>
                                        <div>Heart Rate (% of max)</div>
                                        <div>Perceived Exertion</div>
                                        <div>Talk Test</div>
                                    </div>
                                    <div className="grid grid-cols-4 gap-4 text-center mb-1 border-b border-gray-200 pb-2">
                                        <div className="font-medium text-blue-600">Light</div>
                                        <div>50-63%</div>
                                        <div>Very easy</div>
                                        <div>Can sing</div>
                                    </div>
                                    <div className="grid grid-cols-4 gap-4 text-center mb-1 border-b border-gray-200 pb-2 bg-blue-50">
                                        <div className="font-medium text-blue-700">Moderate</div>
                                        <div>64-76%</div>
                                        <div>Can continue</div>
                                        <div>Can talk easily</div>
                                    </div>
                                    <div className="grid grid-cols-4 gap-4 text-center mb-1 border-b border-gray-200 pb-2">
                                        <div className="font-medium text-blue-800">Vigorous</div>
                                        <div>77-93%</div>
                                        <div>Challenging</div>
                                        <div>Short sentences</div>
                                    </div>
                                    <div className="grid grid-cols-4 gap-4 text-center">
                                        <div className="font-medium text-blue-900">Maximum</div>
                                        <div>94-100%</div>
                                        <div>Exhausting</div>
                                        <div>Can't talk</div>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Important Note:</h3>
                                    <p className="text-gray-700">
                                        Those with heart conditions should generally stay in the light to moderate intensity range unless cleared by their cardiologist for higher intensities.
                                    </p>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-3">Calculating Your Target Heart Rate</h3>
                                <p className="text-gray-700 mb-4">
                                    To find your approximate maximum heart rate and target zones:
                                </p>
                                <ol className="list-decimal list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>Estimate maximum heart rate: 220 - your age</li>
                                    <li>For moderate intensity: Aim for 50-70% of your max</li>
                                    <li>For vigorous intensity: Aim for 70-85% of your max</li>
                                    <li>Example for a 60-year-old: Max HR = 160, Moderate zone = 80-112 bpm</li>
                                </ol>
                            </section>

                            {/* Sample Exercise Routines */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">4-Week Progressive Exercise Plan</h2>

                                <p className="text-gray-700 mb-6">
                                    This gradual plan helps safely build cardiovascular endurance. Always warm up for 5-10 minutes and cool down with stretching afterward.
                                </p>

                                <div className="space-y-6">
                                    {/* Week 1 */}
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Week 1 (Total: 100 minutes)</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Monday/Wednesday/Friday (20 min)</h4>
                                                <p className="text-gray-700">Brisk walking at moderate pace (RPE 3-4)</p>
                                            </div>
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Tuesday/Thursday (20 min)</h4>
                                                <p className="text-gray-700">Gentle stretching and light resistance bands</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Week 2 */}
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Week 2 (Total: 125 minutes)</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Monday/Wednesday/Friday (25 min)</h4>
                                                <p className="text-gray-700">Brisk walking with 1-min faster intervals every 5 min</p>
                                            </div>
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Tuesday/Thursday (25 min)</h4>
                                                <p className="text-gray-700">Bodyweight exercises (chair squats, wall push-ups)</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Week 3 */}
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Week 3 (Total: 150 minutes)</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Monday/Wednesday/Friday (30 min)</h4>
                                                <p className="text-gray-700">Alternate walking with cycling or swimming</p>
                                            </div>
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Tuesday/Thursday (30 min)</h4>
                                                <p className="text-gray-700">Light dumbbell exercises (1-3 lbs) with high reps</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Week 4 */}
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Week 4 (Total: 175 minutes)</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Monday/Wednesday/Friday (35 min)</h4>
                                                <p className="text-gray-700">Combination cardio (walking + cycling + swimming)</p>
                                            </div>
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Tuesday/Thursday (35 min)</h4>
                                                <p className="text-gray-700">Circuit training with bodyweight and light weights</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Precautions and Warning Signs */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Exercise Precautions for Heart Patients</h2>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">When to Stop Exercising</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Chest pain or discomfort</li>
                                            <li>Severe shortness of breath</li>
                                            <li>Dizziness or lightheadedness</li>
                                            <li>Irregular heartbeat</li>
                                            <li>Excessive fatigue lasting hours after exercise</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Safety Tips</h3>
                                        <ol className="list-decimal list-inside text-gray-700 space-y-2">
                                            <li>Always warm up and cool down</li>
                                            <li>Stay hydrated but avoid excessive fluids</li>
                                            <li>Exercise at consistent times (mornings often best)</li>
                                            <li>Avoid extreme temperatures</li>
                                            <li>Wear a heart rate monitor if prescribed</li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                                    <h3 className="font-bold text-gray-900 mb-2">Emergency Warning Signs</h3>
                                    <p className="text-gray-700 mb-2">
                                        Seek immediate medical attention if you experience:
                                    </p>
                                    <ul className="list-disc list-inside text-gray-700 ml-4">
                                        <li>Crushing chest pressure or pain radiating to arm/jaw</li>
                                        <li>Sudden severe headache or vision changes</li>
                                        <li>Inability to catch your breath at rest</li>
                                        <li>Fainting or near-fainting episode</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Final Recommendations */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Recommendations</h2>

                                <p className="text-gray-700 mb-4">
                                    Regular physical activity is one of the best prescriptions for heart health. The key is to find activities you enjoy and can maintain consistently over time. Even small amounts of movement provide benefits - the important thing is to start where you are and progress gradually.
                                </p>

                                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Cardiologist-Approved Tips</h3>
                                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                                        <li>Focus on duration before intensity - build up to 150+ minutes weekly</li>
                                        <li>Include both aerobic and resistance training</li>
                                        <li>Listen to your body and adjust as needed</li>
                                        <li>Track your progress with simple metrics (distance, time, perceived exertion)</li>
                                        <li>Make it social - exercise with a partner for motivation and safety</li>
                                    </ul>
                                </div>

                                <p className="text-gray-700">
                                    Remember that any movement is better than none. If you're new to exercise or have heart concerns, consult with your healthcare provider to develop a personalized plan that's safe and effective for your specific condition.
                                </p>
                            </section>
                        </div>

                        {/* Sidebar */}
                    </div>
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
                                            Dr. James Wilson, Cardiologist
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600 mb-1">
                                        — Written by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            Sarah Thompson
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600 flex items-center gap-1">
                                        — <Calendar className="w-3 h-3" />
                                        <a href="#" className="text-blue-600 hover:underline">
                                            Updated on May 10, 2024
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Newsletter Signup */}
                        <div className="bg-blue-50 rounded-lg p-6 mb-8">
                            <div className="mb-4">
                                <h3 className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-2">HEART HEALTH NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get heart-healthy exercise tips</h4>
                                <p className="text-gray-700 text-sm">
                                    Weekly workout plans, nutrition advice, and cardiovascular research updates.
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

                        {/* Popular Workouts */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Recommended Workouts</h3>
                            <div className="space-y-4">
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/walking-workout.jpg" alt="Walking workout" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">30-Minute Heart-Healthy Walk</h4>
                                            <p className="text-sm text-gray-600">Beginner • Low impact</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/chair-exercises.jpg" alt="Chair exercises" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Seated Cardio Routine</h4>
                                            <p className="text-sm text-gray-600">All levels • No equipment</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/pool-workout.jpg" alt="Pool workout" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Aquatic Therapy Exercises</h4>
                                            <p className="text-sm text-gray-600">Joint-friendly • Rehabilitation</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Heart Rate Zones */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Heart Rate Zones by Age</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span className="font-medium">Age</span>
                                    <span className="font-medium">Target HR Zone</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>50-55</span>
                                    <span className="text-blue-600">83-140 bpm</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>56-60</span>
                                    <span className="text-blue-600">80-136 bpm</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>61-65</span>
                                    <span className="text-blue-600">78-132 bpm</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>66-70</span>
                                    <span className="text-blue-600">75-128 bpm</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>71+</span>
                                    <span className="text-blue-600">73-124 bpm</span>
                                </div>
                            </div>
                            <p className="text-xs text-gray-600 mt-3">*Based on 50-85% of estimated maximum heart rate</p>
                        </div>

                        {/* Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Further Reading</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">American Heart Association Guidelines</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Exercises After Heart Surgery</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Managing Blood Pressure Through Exercise</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Yoga for Heart Health</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}