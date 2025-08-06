"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Heart, MessageSquare, BookOpen, Clipboard, Share2, Star, Bookmark } from "lucide-react"

export default function PatientDigestiveJourney() {
    const [email, setEmail] = useState("")
    const [activeTab, setActiveTab] = useState("My Story")
    const [bookmarked, setBookmarked] = useState(false)

    const handleEmailSubmit = (e) => {
        e.preventDefault()
        console.log("Email submitted:", email)
        setEmail("")
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const tabs = ["My Story", "Diagnosis", "Treatments", "Daily Life", "Resources"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full mb-4">
                                        Patient Story
                                    </span>
                                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                        Navigating Digestive Conditions: A Patient's Perspective
                                    </h1>
                                </div>
                                <button 
                                    onClick={() => setBookmarked(!bookmarked)}
                                    className="p-2 rounded-full hover:bg-gray-100"
                                    aria-label={bookmarked ? "Remove bookmark" : "Bookmark this article"}
                                >
                                    <Bookmark className={`w-6 h-6 ${bookmarked ? "text-yellow-500 fill-yellow-500" : "text-gray-400"}`} />
                                </button>
                            </div>

                            {/* Navigation Tabs */}
                            <div className="flex overflow-x-auto pb-2 mb-6 border-b border-gray-200 scrollbar-hide">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`flex-shrink-0 px-4 py-2 text-sm font-medium border-b-2 transition-colors ${activeTab === tab
                                                ? "border-blue-500 text-blue-600"
                                                : "border-transparent text-gray-600 hover:text-gray-900"
                                            }`}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>

                            {/* Date and Intro */}
                            <div className="flex items-center justify-between text-gray-500 mb-4">
                                <div className="flex items-center">
                                    <Calendar className="w-4 h-4 mr-1" />
                                    <span className="text-sm">Published on June 20, 2024</span>
                                </div>
                                <span className="text-sm flex items-center">
                                    <MessageSquare className="w-4 h-4 mr-1" />
                                    24 Comments
                                </span>
                            </div>

                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                Living with digestive disorders can be isolating and challenging. In this deeply personal account, I share my 5-year journey with IBS and GERD—from initial symptoms to diagnosis, failed treatments, and finally finding a management plan that works. Along the way, I'll share hard-won insights about advocating for yourself, navigating healthcare systems, and maintaining quality of life.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1535914254981-b5012eebbd15?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                    alt="Person holding stomach in discomfort"
                                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                                    style={{ maxHeight: '500px' }}
                                />
                                <p className="text-sm text-gray-500 mt-2 italic">My journey began with unexplained abdominal pain that doctors initially dismissed as stress.</p>
                            </div>

                            {/* Key Takeaways */}
                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
                                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                    <Star className="w-5 h-5 text-blue-600 mr-2" />
                                    Key Takeaways From My Journey
                                </h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>It took 3 years and 7 doctors to get accurate diagnoses</li>
                                    <li>Diet changes helped more than any single medication</li>
                                    <li>Mental health is deeply connected to digestive health</li>
                                    <li>Finding the right specialist made all the difference</li>
                                    <li>Support groups provided invaluable practical advice</li>
                                </ul>
                            </div>

                            {/* My Story Section */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Heart className="w-8 h-8 text-blue-600 mr-2" />
                                    My Story: From First Symptoms to Diagnosis
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    It started subtly in my late 20s—occasional heartburn after meals, bloating that wouldn't subside, and unpredictable bowel movements. Like many, I initially dismissed these as temporary inconveniences. But by 2019, the symptoms became impossible to ignore:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>Waking up 3-4 nights weekly with acid reflux</li>
                                    <li>Alternating between constipation and diarrhea for weeks</li>
                                    <li>Abdominal pain so severe I missed work days</li>
                                    <li>Developing anxiety about eating in social situations</li>
                                </ul>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">What I Wish I Knew Earlier</h3>
                                    <p className="text-gray-700">
                                        "Digestive symptoms are valid medical concerns, not just 'stress' or 'in your head.' If a doctor dismisses your symptoms without proper testing, seek a second opinion."
                                    </p>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-8">The Diagnostic Odyssey</h3>
                                <div className="overflow-x-auto mb-6">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Year</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Doctor</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Diagnosis</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Outcome</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">2019</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Primary Care</td>
                                                <td className="px-4 py-3">Stress</td>
                                                <td className="px-4 py-3">Prescribed antacids, no improvement</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">2020</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Gastroenterologist #1</td>
                                                <td className="px-4 py-3">Possible lactose intolerance</td>
                                                <td className="px-4 py-3">Eliminated dairy, partial relief</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">2021</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Gastroenterologist #2</td>
                                                <td className="px-4 py-3">IBS-D</td>
                                                <td className="px-4 py-3">Low FODMAP diet helped 60%</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">2022</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Functional Medicine</td>
                                                <td className="px-4 py-3">GERD + SIBO</td>
                                                <td className="px-4 py-3">Comprehensive treatment plan</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <p className="text-gray-700 mb-4">
                                    The turning point came in 2022 when a functional medicine practitioner ordered a comprehensive stool analysis and SIBO breath test. These revealed:
                                </p>

                                <div className="grid md:grid-cols-2 gap-4 mb-6">
                                    <div className="border border-gray-200 rounded-lg p-4">
                                        <h4 className="font-bold text-gray-900 mb-2">Small Intestinal Bacterial Overgrowth (SIBO)</h4>
                                        <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                                            <li>Hydrogen-positive on lactulose test</li>
                                            <li>Explained bloating and alternating bowel habits</li>
                                            <li>Treated with rifaximin and prokinetics</li>
                                        </ul>
                                    </div>
                                    <div className="border border-gray-200 rounded-lg p-4">
                                        <h4 className="font-bold text-gray-900 mb-2">GERD with Esophageal Hypersensitivity</h4>
                                        <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                                            <li>Non-erosive reflux disease (NERD)</li>
                                            <li>Heightened visceral sensitivity</li>
                                            <li>Required neuromodulators</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Treatments Section */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Clipboard className="w-8 h-8 text-blue-600 mr-2" />
                                    What Actually Worked: My Treatment Journey
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    After years of trial and error, these are the interventions that made meaningful differences in my symptoms and quality of life:
                                </p>

                                <h3 className="text-2xl font-bold text-gray-900 mb-3">Medical Treatments</h3>
                                <div className="space-y-4 mb-6">
                                    <div className="p-4 bg-blue-50 rounded-lg">
                                        <h4 className="font-bold text-gray-900 mb-2">1. Rifaximin for SIBO</h4>
                                        <p className="text-gray-700 mb-2">
                                            This non-absorbed antibiotic reduced my bloating by about 70% after two 14-day courses spaced 4 weeks apart.
                                        </p>
                                        <p className="text-gray-700">
                                            <span className="font-semibold">Side effects:</span> Minimal—some initial nausea that subsided.
                                        </p>
                                    </div>

                                    <div className="p-4 bg-blue-50 rounded-lg">
                                        <h4 className="font-bold text-gray-900 mb-2">2. Low-Dose Amitriptyline</h4>
                                        <p className="text-gray-700 mb-2">
                                            10mg at bedtime reduced visceral hypersensitivity and improved my sleep quality dramatically.
                                        </p>
                                        <p className="text-gray-700">
                                            <span className="font-semibold">Note:</span> Took 6 weeks to see full benefits.
                                        </p>
                                    </div>

                                    <div className="p-4 bg-blue-50 rounded-lg">
                                        <h4 className="font-bold text-gray-900 mb-2">3. Intermittent PPI Use</h4>
                                        <p className="text-gray-700 mb-2">
                                            Taking PPIs for 8-week cycles with 12-week breaks prevents rebound acidity while controlling symptoms.
                                        </p>
                                        <p className="text-gray-700">
                                            <span className="font-semibold">Current protocol:</span> 20mg omeprazole twice daily during flares.
                                        </p>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-3">Dietary Approaches</h3>
                                <div className="grid md:grid-cols-2 gap-4 mb-6">
                                    <div className="border border-gray-200 rounded-lg p-4">
                                        <h4 className="font-bold text-gray-900 mb-2">Modified Low FODMAP</h4>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>Strict elimination for 6 weeks</li>
                                            <li>Careful reintroduction phase</li>
                                            <li>Identified trigger foods: garlic, onions, wheat</li>
                                            <li>Now follow "FODMAP gentle" approach</li>
                                        </ul>
                                    </div>
                                    <div className="border border-gray-200 rounded-lg p-4">
                                        <h4 className="font-bold text-gray-900 mb-2">Meal Timing & Composition</h4>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>Smaller, more frequent meals</li>
                                            <li>No liquids 30min before/after meals</li>
                                            <li>Protein-first eating</li>
                                            <li>Last meal 4+ hours before bedtime</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-blue-100 p-4 rounded-lg mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Unexpected Help: The Mind-Gut Connection</h3>
                                    <p className="text-gray-700">
                                        Cognitive Behavioral Therapy (CBT) specifically for IBS reduced my symptom severity by about 40%. Learning to manage anxiety about symptoms paradoxically made the symptoms themselves less severe.
                                    </p>
                                </div>
                            </section>

                            {/* Daily Life Section */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <BookOpen className="w-8 h-8 text-blue-600 mr-2" />
                                    Daily Life: Practical Adaptations
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Living with chronic digestive issues requires constant adaptation. Here are the strategies that help me maintain normalcy:
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">At Home</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Meal prep Sundays with FODMAP-friendly ingredients</li>
                                            <li>Elevated headboard for nighttime reflux</li>
                                            <li>Heating pad always ready for abdominal pain</li>
                                            <li>Stocked pantry with safe snacks</li>
                                            <li>Probiotics in the fridge</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">At Work/Social</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>"Emergency kit" with meds and peppermint oil</li>
                                            <li>Scouting restaurants ahead with safe options</li>
                                            <li>Discreet explanations for dietary needs</li>
                                            <li>Scheduling important meetings for symptom-free times</li>
                                            <li>No shame in canceling when flaring</li>
                                        </ul>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-3">My Symptom Tracking System</h3>
                                <div className="overflow-x-auto mb-6">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">What I Track</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Method</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Why It Helps</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Bowel Movements</td>
                                                <td className="px-4 py-3">Bristol Chart + frequency</td>
                                                <td className="px-4 py-3">Identifies IBS subtypes and triggers</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Food Intake</td>
                                                <td className="px-4 py-3">Photo journal + notes</td>
                                                <td className="px-4 py-3">Correlates foods with symptoms</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Stress Levels</td>
                                                <td className="px-4 py-3">1-10 scale + notes</td>
                                                <td className="px-4 py-3">Shows mind-gut connections</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Medications</td>
                                                <td className="px-4 py-3">Dosage + timing</td>
                                                <td className="px-4 py-3">Assesses treatment efficacy</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="bg-pink-50 border-l-4 border-pink-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Game Changer:</h3>
                                    <p className="text-gray-700">
                                        Using a dedicated symptom tracking app (I use <a href="#" className="text-blue-600 hover:underline">Cara Care</a>) instead of random notes made patterns much clearer to identify and share with my doctors.
                                    </p>
                                </div>
                            </section>

                            {/* Relationships and Mental Health */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">The Invisible Burden: Relationships and Mental Health</h2>

                                <p className="text-gray-700 mb-4">
                                    Perhaps the hardest part has been navigating relationships and emotional health amid unpredictable symptoms:
                                </p>

                                <div className="space-y-4 mb-6">
                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">With Partners</h3>
                                        <p className="text-gray-700 mb-2">
                                            My husband struggled to understand why I canceled plans last-minute or avoided certain restaurants. What helped:
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 ml-4">
                                            <li>Educating him about my conditions</li>
                                            <li>Planning "safe" date nights at home</li>
                                            <li>Being honest about my limitations</li>
                                        </ul>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">At Work</h3>
                                        <p className="text-gray-700 mb-2">
                                            I used sick days for "stomach flu" until I disclosed my diagnosis. Surprisingly, HR accommodated:
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 ml-4">
                                            <li>Flexible work-from-home options</li>
                                            <li>Later start times for morning symptoms</li>
                                            <li>Private restroom access</li>
                                        </ul>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">Emotional Toll</h3>
                                        <p className="text-gray-700 mb-2">
                                            The constant management led to anxiety and depression. Therapy helped me:
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 ml-4">
                                            <li>Reframe negative thoughts about my body</li>
                                            <li>Develop coping strategies for flares</li>
                                            <li>Prevent health anxiety from dominating my life</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Where I Am Now: Progress Not Perfection</h2>

                                <p className="text-gray-700 mb-4">
                                    After five years, I've reached a stable place—not symptom-free, but with tools to manage. My current status:
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div className="border border-gray-200 rounded-lg p-4">
                                        <h4 className="font-bold text-gray-900 mb-2">Wins</h4>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>75% reduction in severe symptom days</li>
                                            <li>Can enjoy modified social life</li>
                                            <li>No missed work in past 8 months</li>
                                            <li>Reduced medication dependence</li>
                                        </ul>
                                    </div>
                                    <div className="border border-gray-200 rounded-lg p-4">
                                        <h4 className="font-bold text-gray-900 mb-2">Ongoing Challenges</h4>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>Still avoid trigger foods</li>
                                            <li>Occasional breakthrough symptoms</li>
                                            <li>Require careful travel planning</li>
                                            <li>Annual SIBO retesting</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <h3 className="font-bold text-gray-900 mb-2">To Those Just Starting This Journey</h3>
                                    <p className="text-gray-700 mb-2">
                                        "You are not alone, and your symptoms are real. Progress may be slow, but small improvements compound. Advocate for yourself, experiment safely, and remember—your worth isn't defined by your digestive system."
                                    </p>
                                    <p className="text-gray-700">
                                        I share my story hoping others might find shortcuts to relief that took me years to discover. What questions do you have about my experience?
                                    </p>
                                </div>
                            </section>

                            {/* Comments Section */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Share Your Story</h2>
                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Leave a Comment</h3>
                                    <form className="space-y-4">
                                        <div>
                                            <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">Your Experience</label>
                                            <textarea 
                                                id="comment" 
                                                rows="4" 
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                placeholder="What's your digestive health journey been like?"
                                            ></textarea>
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                                <input 
                                                    type="text" 
                                                    id="name" 
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email (not published)</label>
                                                <input 
                                                    type="email" 
                                                    id="email" 
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                />
                                            </div>
                                        </div>
                                        <button
                                            type="submit"
                                            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors duration-200"
                                        >
                                            Post Comment
                                        </button>
                                    </form>
                                </div>
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
                                    <h3 className="font-bold text-gray-900 mb-1">Sarah Thompson</h3>
                                    <p className="text-sm text-gray-600 mb-2">Patient Advocate & Health Writer</p>
                                    <p className="text-sm text-gray-600">
                                        Diagnosed with IBS-D and GERD in 2021 after years of symptoms. Shares patient perspectives on digestive health through writing and support groups.
                                    </p>
                                </div>
                            </div>
                            <div className="flex space-x-4">
                                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                                    Follow
                                </button>
                                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center">
                                    <Share2 className="w-4 h-4 mr-1" /> Share
                                </button>
                            </div>
                        </div>

                        {/* Patient Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Patient-Recommended Resources</h3>
                            <div className="space-y-4">
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded flex items-center justify-center">
                                            <BookOpen className="w-6 h-6 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">The IBS Elimination Diet Cookbook</h4>
                                            <p className="text-sm text-gray-600">Practical meal plans for identifying triggers</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-green-100 rounded flex items-center justify-center">
                                            <MessageSquare className="w-6 h-6 text-green-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">IBS Patient Support Forum</h4>
                                            <p className="text-sm text-gray-600">25,000+ members sharing experiences</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-purple-100 rounded flex items-center justify-center">
                                            <Clipboard className="w-6 h-6 text-purple-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Symptom Tracker App</h4>
                                            <p className="text-sm text-gray-600">Customizable tracking for digestive issues</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Related Stories */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Related Patient Stories</h3>
                            <div className="space-y-4">
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/patient1.jpg" alt="Young man smiling" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Living Well With Crohn's</h4>
                                            <p className="text-sm text-gray-600">Mark's remission journey</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/patient2.jpg" alt="Woman cooking" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Celiac Diagnosis at 40</h4>
                                            <p className="text-sm text-gray-600">Lisa's gluten-free transition</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Newsletter */}
                        <div className="bg-blue-50 rounded-lg p-6 mb-8">
                            <div className="mb-4">
                                <h3 className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-2">DIGESTIVE HEALTH NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Patient Perspectives</h4>
                                <p className="text-gray-700 text-sm">
                                    Monthly stories, practical tips, and new research from fellow digestive health patients.
                                </p>
                            </div>

                            <form onSubmit={handleEmailSubmit} className="space-y-4">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200"
                                >
                                    SUBSCRIBE
                                </button>
                            </form>
                        </div>

                        {/* Emergency Resources */}
                        <div className="bg-red-50 border-l-4 border-red-400 rounded-lg p-4">
                            <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                                <Heart className="w-5 h-5 text-red-600 mr-2" />
                                Crisis Support
                            </h3>
                            <p className="text-gray-700 text-sm mb-2">
                                If you're experiencing severe distress related to chronic illness:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">National Suicide Prevention Lifeline</a>: 988
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Crisis Text Line</a>: Text HOME to 741741
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Chronic Illness Therapists Directory</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}