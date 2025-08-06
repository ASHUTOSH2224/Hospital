"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Eye, Sun, Monitor, Clock, Zap, BookOpen, Smartphone, Glasses, Coffee } from "lucide-react"

export default function DigitalEyeStrainGuide() {
    const [email, setEmail] = useState("")
    const [activeTab, setActiveTab] = useState("Symptoms")

    const handleEmailSubmit = (e) => {
        e.preventDefault()
        console.log("Email submitted:", email)
        setEmail("")
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const tabs = ["Symptoms", "Prevention", "Tech Solutions", "Exercises"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Managing Digital Eye Strain in the Modern World
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
                            </div>

                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                Digital eye strain affects nearly 65% of American adults according to recent studies. With the average person spending over 7 hours daily on digital devices, learning effective strategies to cope with digital eye strain including the 20-20-20 rule, proper lighting, ergonomic setups, and blue light protection is essential for long-term eye health.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1511715282680-fbf93a50e721?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80"
                                    alt="Woman experiencing digital eye strain while working on laptop"
                                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                                    style={{ maxHeight: '500px' }}
                                />
                            </div>

                            {/* Key Takeaways */}
                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
                                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                    <Zap className="w-5 h-5 text-blue-600 mr-2" />
                                    Key Takeaways
                                </h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>The 20-20-20 rule can reduce eye strain by 50% when followed consistently</li>
                                    <li>Blue light exposure from screens can disrupt sleep patterns and cause fatigue</li>
                                    <li>Proper monitor positioning (20-30 inches away, slightly below eye level) reduces strain</li>
                                    <li>Anti-reflective screen coatings can decrease glare by up to 75%</li>
                                    <li>Regular eye exercises improve focusing ability and reduce discomfort</li>
                                </ul>
                            </div>

                            {/* Understanding Digital Eye Strain */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Eye className="w-8 h-8 text-blue-600 mr-2" />
                                    Understanding Digital Eye Strain
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Digital eye strain, also known as computer vision syndrome, encompasses a range of ocular and visual symptoms experienced during or after prolonged digital device use. A <a href="#" className="text-blue-600 hover:underline">2023 study in the Journal of Ophthalmology</a> found that 58% of office workers experience significant symptoms after just 2 hours of continuous screen time.
                                </p>

                                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">How Digital Screens Affect Our Eyes</h3>
                                    <p className="text-gray-700">
                                        Unlike printed materials, digital screens add several strain-inducing factors:
                                    </p>
                                    <ul className="list-disc list-inside text-gray-700 mt-2 ml-4 space-y-1">
                                        <li>Reduced contrast and glare from ambient lighting</li>
                                        <li>Higher demand on focusing systems due to pixelated images</li>
                                        <li>Increased exposure to blue light wavelengths</li>
                                        <li>Decreased blink rate (from 15/min to 5-7/min during screen use)</li>
                                    </ul>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Common Symptoms</h3>
                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                                        <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-2">1</span>
                                            Visual Symptoms
                                        </h4>
                                        <ul className="list-disc list-inside text-gray-700 ml-6 space-y-1">
                                            <li>Eye fatigue</li>
                                            <li>Dry, irritated eyes</li>
                                            <li>Blurred vision</li>
                                            <li>Difficulty focusing</li>
                                            <li>Increased light sensitivity</li>
                                        </ul>
                                    </div>
                                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                                        <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-2">2</span>
                                            Physical Symptoms
                                        </h4>
                                        <ul className="list-disc list-inside text-gray-700 ml-6 space-y-1">
                                            <li>Headaches</li>
                                            <li>Neck and shoulder pain</li>
                                            <li>Back pain</li>
                                            <li>General fatigue</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* The Science Behind Eye Strain */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">The Science Behind Eye Strain</h2>

                                <p className="text-gray-700 mb-6">
                                    When we focus on digital screens, our eyes must continuously adjust to maintain clear vision. This process, called accommodation, requires precise coordination between the ciliary muscles inside the eye and the extraocular muscles surrounding it. Prolonged focusing leads to muscle fatigue, similar to how other muscles tire after sustained use.
                                </p>

                                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Blue Light Effects</h3>
                                    <p className="text-gray-700 mb-4">
                                        Digital devices emit high-energy visible (HEV) blue light in the 400-490nm wavelength range. While not as harmful as UV light, chronic exposure can:
                                    </p>
                                    <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2">
                                        <li>Disrupt circadian rhythms by suppressing melatonin production</li>
                                        <li>Increase oxidative stress in retinal cells</li>
                                        <li>Contribute to digital eye strain symptoms</li>
                                    </ul>
                                </div>

                                {/* Eye Strain Statistics Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age Group</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Avg. Screen Time</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">% Reporting Symptoms</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Most Common Symptom</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">18-29</td>
                                                <td className="px-4 py-3 whitespace-nowrap">8.2 hours</td>
                                                <td className="px-4 py-3 whitespace-nowrap">72%</td>
                                                <td className="px-4 py-3">Eye fatigue</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">30-45</td>
                                                <td className="px-4 py-3 whitespace-nowrap">7.5 hours</td>
                                                <td className="px-4 py-3 whitespace-nowrap">68%</td>
                                                <td className="px-4 py-3">Dry eyes</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">46-60</td>
                                                <td className="px-4 py-3 whitespace-nowrap">6.8 hours</td>
                                                <td className="px-4 py-3 whitespace-nowrap">61%</td>
                                                <td className="px-4 py-3">Blurred vision</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">60+</td>
                                                <td className="px-4 py-3 whitespace-nowrap">4.3 hours</td>
                                                <td className="px-4 py-3 whitespace-nowrap">53%</td>
                                                <td className="px-4 py-3">Headaches</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            {/* Prevention Strategies */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Sun className="w-8 h-8 text-blue-600 mr-2" />
                                    Prevention Strategies
                                </h2>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4">The 20-20-20 Rule</h3>
                                <p className="text-gray-700 mb-6">
                                    The American Optometric Association recommends the 20-20-20 rule: every 20 minutes, look at something 20 feet away for 20 seconds. This simple practice:
                                </p>
                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>Reduces focusing fatigue by 40-50%</li>
                                    <li>Encourages natural blinking to moisten eyes</li>
                                    <li>Gives ocular muscles brief periods of relaxation</li>
                                </ul>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">1</span>
                                            Optimal Workspace Setup
                                        </h3>
                                        <ul className="list-disc list-inside text-gray-700 ml-6 space-y-1">
                                            <li>Position monitor 20-30 inches from eyes</li>
                                            <li>Top of screen slightly below eye level (15-20° angle)</li>
                                            <li>Reduce glare with matte screen filters</li>
                                            <li>Ensure ambient lighting is 50% brighter than screen</li>
                                        </ul>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">2</span>
                                            Display Settings
                                        </h3>
                                        <ul className="list-disc list-inside text-gray-700 ml-6 space-y-1">
                                            <li>Increase text size for comfortable reading</li>
                                            <li>Adjust brightness to match surroundings</li>
                                            <li>Use night mode or reduce blue light emission</li>
                                            <li>Maintain high refresh rate (120Hz+) when possible</li>
                                        </ul>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Environmental Factors</h3>
                                <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
                                    <div className="grid grid-cols-3 gap-4 text-center font-medium mb-2">
                                        <div>Factor</div>
                                        <div>Ideal Setting</div>
                                        <div>Benefit</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 text-center mb-1">
                                        <div className="font-medium">Lighting</div>
                                        <div>500 lux</div>
                                        <div>Reduces contrast strain</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 text-center mb-1 bg-blue-50 p-1 rounded">
                                        <div className="font-medium">Humidity</div>
                                        <div>40-60% RH</div>
                                        <div>Prevents dry eyes</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 text-center mb-1">
                                        <div className="font-medium">Temperature</div>
                                        <div>68-72°F</div>
                                        <div>Comfortable environment</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 text-center">
                                        <div className="font-medium">Airflow</div>
                                        <div>Gentle circulation</div>
                                        <div>Reduces airborne irritants</div>
                                    </div>
                                </div>
                            </section>

                            {/* Technological Solutions */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Monitor className="w-8 h-8 text-blue-600 mr-2" />
                                    Technological Solutions
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Modern technology offers several solutions to mitigate digital eye strain. While no single solution is perfect, combining multiple approaches can significantly reduce symptoms.
                                </p>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Blue Light Filtering Options</h3>
                                <div className="space-y-4 mb-8">
                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h4 className="font-bold text-gray-900 mb-2">1. Software Solutions</h4>
                                        <p className="text-gray-700 mb-2">
                                            Applications like f.lux or built-in night modes adjust color temperature based on time of day. They're effective but can affect color accuracy.
                                        </p>
                                        <p className="text-gray-700">
                                            <span className="font-semibold">Effectiveness:</span> Reduces blue light by 30-70% depending on settings
                                        </p>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h4 className="font-bold text-gray-900 mb-2">2. Screen Protectors</h4>
                                        <p className="text-gray-700 mb-2">
                                            Physical filters that attach to screens can block up to 90% of blue light without affecting color display as dramatically as software solutions.
                                        </p>
                                        <p className="text-gray-700">
                                            <span className="font-semibold">Effectiveness:</span> Blocks 60-90% of blue light
                                        </p>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h4 className="font-bold text-gray-900 mb-2">3. Blue Light Glasses</h4>
                                        <p className="text-gray-700 mb-2">
                                            Special lenses with coatings that filter blue light. Quality varies significantly between products.
                                        </p>
                                        <p className="text-gray-700">
                                            <span className="font-semibold">Effectiveness:</span> Blocks 10-40% of blue light (higher percentages may distort color perception)
                                        </p>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Display Technologies Compared</h3>
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Display Type</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Blue Light Emission</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Refresh Rate</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Eye Strain Rating</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Standard LCD</td>
                                                <td className="px-4 py-3 whitespace-nowrap">High</td>
                                                <td className="px-4 py-3 whitespace-nowrap">60Hz</td>
                                                <td className="px-4 py-3">Poor</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">LED Backlit LCD</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Very High</td>
                                                <td className="px-4 py-3 whitespace-nowrap">60-144Hz</td>
                                                <td className="px-4 py-3">Fair</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">OLED</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Medium</td>
                                                <td className="px-4 py-3 whitespace-nowrap">60-120Hz</td>
                                                <td className="px-4 py-3">Good</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">E-Ink</td>
                                                <td className="px-4 py-3 whitespace-nowrap">None</td>
                                                <td className="px-4 py-3 whitespace-nowrap">1-10Hz</td>
                                                <td className="px-4 py-3">Excellent</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            {/* Eye Exercises */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Clock className="w-8 h-8 text-blue-600 mr-2" />
                                    Eye Exercises and Breaks
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Regular eye exercises can strengthen ocular muscles and improve focusing ability. Try these simple routines throughout your workday:
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Focus Changing</h3>
                                        </div>
                                        <div className="p-4">
                                            <ol className="list-decimal list-inside text-gray-700 space-y-2">
                                                <li>Hold a pen at arm's length, focus on it</li>
                                                <li>Slowly bring it closer until 6 inches from nose</li>
                                                <li>Hold focus for 5 seconds</li>
                                                <li>Slowly return to starting position</li>
                                                <li>Repeat 5-10 times</li>
                                            </ol>
                                            <p className="text-gray-700 mt-2 text-sm">
                                                <span className="font-semibold">Benefit:</span> Strengthens accommodation system
                                            </p>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Figure Eight Tracing</h3>
                                        </div>
                                        <div className="p-4">
                                            <ol className="list-decimal list-inside text-gray-700 space-y-2">
                                                <li>Imagine a large figure eight 10 feet away</li>
                                                <li>Slowly trace the shape with your eyes</li>
                                                <li>Do 5 repetitions clockwise</li>
                                                <li>Do 5 repetitions counter-clockwise</li>
                                            </ol>
                                            <p className="text-gray-700 mt-2 text-sm">
                                                <span className="font-semibold">Benefit:</span> Improves eye coordination
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4">The Pomodoro Technique for Eye Health</h3>
                                <p className="text-gray-700 mb-4">
                                    Combine productivity with eye care using this modified Pomodoro approach:
                                </p>
                                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                                    <div className="grid grid-cols-5 gap-2 text-center font-medium mb-2">
                                        <div className="col-span-1">Segment</div>
                                        <div className="col-span-1">Duration</div>
                                        <div className="col-span-3">Activity</div>
                                    </div>
                                    <div className="grid grid-cols-5 gap-2 text-center mb-1">
                                        <div className="font-medium col-span-1">Work</div>
                                        <div className="col-span-1">25 min</div>
                                        <div className="col-span-3">Focused screen time</div>
                                    </div>
                                    <div className="grid grid-cols-5 gap-2 text-center mb-1 bg-blue-100 p-1 rounded">
                                        <div className="font-medium col-span-1">Micro-break</div>
                                        <div className="col-span-1">2 min</div>
                                        <div className="col-span-3">20-20-20 rule + blink exercises</div>
                                    </div>
                                    <div className="grid grid-cols-5 gap-2 text-center mb-1">
                                        <div className="font-medium col-span-1">Work</div>
                                        <div className="col-span-1">25 min</div>
                                        <div className="col-span-3">Focused screen time</div>
                                    </div>
                                    <div className="grid grid-cols-5 gap-2 text-center">
                                        <div className="font-medium col-span-1">Long break</div>
                                        <div className="col-span-1">15 min</div>
                                        <div className="col-span-3">Screen-free time with eye exercises</div>
                                    </div>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    In our increasingly digital world, managing eye strain is essential for both productivity and long-term ocular health. While complete avoidance of screens isn't practical for most people, implementing these strategies can significantly reduce discomfort and potential long-term effects.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    Remember that individual needs vary - what works for one person may not work as well for another. Consider scheduling regular comprehensive eye exams to monitor your eye health and discuss personalized solutions with an eye care professional.
                                </p>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "The best approach to digital eye strain is a holistic one - combining proper ergonomics, smart technology use, regular breaks, and eye-friendly habits throughout your day."
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
                                            Dr. Emily Carter, OD
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600 mb-1">
                                        — Written by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            David Mitchell
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
                                <h3 className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-2">EYE HEALTH NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get eye care tips and updates</h4>
                                <p className="text-gray-700 text-sm">
                                    Monthly insights on managing digital eye strain and maintaining optimal vision health.
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

                        {/* Quick Tips */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                <Zap className="w-5 h-5 text-blue-600 mr-2" />
                                Quick Tips
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 mt-1">
                                        <Smartphone className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900">Device Distance</h4>
                                        <p className="text-sm text-gray-600">Hold phones at least 16 inches from your eyes</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 mt-1">
                                        <Glasses className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900">Computer Glasses</h4>
                                        <p className="text-sm text-gray-600">Consider lenses optimized for intermediate distance</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 mt-1">
                                        <Coffee className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900">Hydration</h4>
                                        <p className="text-sm text-gray-600">Drink water regularly to maintain tear production</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Recommended Products */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Recommended Products</h3>
                            <div className="space-y-3">
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/blue-light-glasses.jpg" alt="Blue light glasses" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Blue Light Glasses</h4>
                                            <p className="text-sm text-gray-600">Blocks 40% of HEV light</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/eye-drops.jpg" alt="Artificial tears" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Preservative-Free Tears</h4>
                                            <p className="text-sm text-gray-600">For dry eye relief</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Further Reading</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-start gap-2">
                                        <BookOpen className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                        <span>The Complete Guide to Computer Vision Syndrome</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-start gap-2">
                                        <BookOpen className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                        <span>Blue Light Research: Latest Findings</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-start gap-2">
                                        <BookOpen className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                        <span>Ergonomic Workspace Design</span>
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