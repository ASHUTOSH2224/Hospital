"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, Eye, Shield, Sun, Monitor, Clock, Zap, BookOpen, Smartphone, ArrowRight } from "lucide-react"

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

    const tabs = ["Symptoms", "Prevention", "Exercises", "Technology"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Digital Eye Strain Prevention: Protect Your Vision in the Screen Age
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
                                <span className="text-sm">Updated on June 10, 2024</span>
                            </div>

                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                In our digital world, the average person spends over 7 hours daily looking at screens. Digital eye strain affects 50-90% of computer users. Learn how to protect your eyes with science-backed strategies, proper screen habits, and effective exercises to maintain long-term eye health.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1511715282680-fbf93a50e721?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                                    alt="Woman experiencing digital eye strain while working on laptop"
                                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                                    style={{ maxHeight: '500px' }}
                                />
                            </div>

                            {/* Key Takeaways */}
                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
                                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                    <Shield className="w-5 h-5 text-blue-600 mr-2" />
                                    Key Takeaways
                                </h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>The 20-20-20 rule reduces eye strain by 40% when followed consistently</li>
                                    <li>Blue light exposure after sunset disrupts melatonin production by 23%</li>
                                    <li>Optimal screen position is 20-28 inches from eyes at 15-20 degrees below eye level</li>
                                    <li>Anti-reflective coatings can reduce glare-related strain by up to 50%</li>
                                    <li>Regular eye exercises improve focusing ability and reduce fatigue symptoms</li>
                                </ul>
                            </div>

                            {/* Understanding Digital Eye Strain */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Eye className="w-8 h-8 text-blue-600 mr-2" />
                                    Understanding Digital Eye Strain
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Digital eye strain (also called computer vision syndrome) encompasses a range of ocular and visual symptoms that result from prolonged screen use. According to a <a href="#" className="text-blue-600 hover:underline">2024 study in the Journal of Ophthalmology</a>, these symptoms affect:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>65% of office workers who use computers 6+ hours daily</li>
                                    <li>58% of teenagers who exceed 5 hours of screen time</li>
                                    <li>73% of people who use multiple devices simultaneously</li>
                                </ul>

                                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Common Symptoms</h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <h4 className="font-medium text-gray-900 mb-2">Physical Symptoms</h4>
                                            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                                                <li>Eye fatigue and dryness</li>
                                                <li>Blurred or double vision</li>
                                                <li>Headaches and migraines</li>
                                                <li>Neck and shoulder pain</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 mb-2">Visual Symptoms</h4>
                                            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                                                <li>Difficulty focusing</li>
                                                <li>Light sensitivity</li>
                                                <li>Color perception changes</li>
                                                <li>Afterimages when looking away</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* The Science Behind Eye Strain */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Zap className="w-8 h-8 text-blue-600 mr-2" />
                                    The Science Behind Eye Strain
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Digital screens challenge our eyes in ways print materials don't. The combination of glare, blue light, poor contrast, and reduced blink rate creates the perfect storm for eye strain. Here's what happens physiologically:
                                </p>

                                {/* Eye Strain Factors Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Factor</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Impact</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Solution</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Blue Light</td>
                                                <td className="px-4 py-3">Disrupts circadian rhythm, causes retinal stress</td>
                                                <td className="px-4 py-3">Night mode filters, blue light glasses</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Reduced Blinking</td>
                                                <td className="px-4 py-3">Blink rate drops from 15 to 5/min, causing dryness</td>
                                                <td className="px-4 py-3">Conscious blinking, artificial tears</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Glare/Reflections</td>
                                                <td className="px-4 py-3">Causes squinting and pupil constriction</td>
                                                <td className="px-4 py-3">Anti-glare screens, proper lighting</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Screen Distance</td>
                                                <td className="px-4 py-3">Improper focus demands strain ciliary muscles</td>
                                                <td className="px-4 py-3">Arm's length distance, larger fonts</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">1</span>
                                            Blue Light Effects
                                        </h3>
                                        <p className="text-gray-700">
                                            High-energy visible (HEV) blue light from screens penetrates deeper into the eye than other wavelengths. Chronic exposure may increase risk of macular degeneration. Studies show 2+ hours of evening screen use delays melatonin onset by 1.5 hours.
                                        </p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">2</span>
                                            Accommodation Spasm
                                        </h3>
                                        <p className="text-gray-700">
                                            The eye's focusing system can "lock up" after prolonged near work, causing temporary blurred distance vision. This pseudomyopia affects 45% of heavy device users and may last 30+ minutes after screen use.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Prevention Strategies */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Shield className="w-8 h-8 text-blue-600 mr-2" />
                                    Prevention Strategies
                                </h2>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                    <Clock className="w-6 h-6 text-blue-500 mr-2" />
                                    The 20-20-20 Rule
                                </h3>
                                <p className="text-gray-700 mb-4">
                                    This simple technique reduces eye strain by 40% when practiced consistently. Every 20 minutes, look at something 20 feet away for 20 seconds. This gives your focusing muscles a break and stimulates blinking.
                                </p>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Pro Tip:</h3>
                                    <p className="text-gray-700">
                                        Set a recurring timer or use apps like <span className="font-semibold">EyeCare</span> or <span className="font-semibold">Time Out</span> to remind you to take these vision breaks.
                                    </p>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                    <Monitor className="w-6 h-6 text-blue-500 mr-2" />
                                    Optimal Screen Setup
                                </h3>
                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900 mb-3">Positioning</h4>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                                            <li>Screen top at or slightly below eye level</li>
                                            <li>20-28 inches from your eyes (arm's length)</li>
                                            <li>Center of screen 15-20 degrees below horizontal</li>
                                            <li>No glare from windows or lights</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900 mb-3">Display Settings</h4>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                                            <li>Brightness matching surroundings</li>
                                            <li>Text size 2-3x smallest readable</li>
                                            <li>Color temperature warmer at night</li>
                                            <li>High refresh rate (120Hz+) reduces flicker</li>
                                        </ul>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                    <Sun className="w-6 h-6 text-blue-500 mr-2" />
                                    Lighting Environment
                                </h3>
                                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                    <div className="grid grid-cols-3 gap-4 text-center font-medium mb-2">
                                        <div>Light Source</div>
                                        <div>Recommended Position</div>
                                        <div>Lux Level</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 text-center mb-1">
                                        <div className="font-medium">Ambient</div>
                                        <div>Indirect, behind screen</div>
                                        <div>300-500 lux</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 text-center mb-1 bg-blue-50 p-1 rounded">
                                        <div className="font-medium">Task</div>
                                        <div>Adjacent, not reflecting</div>
                                        <div>500-700 lux</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 text-center">
                                        <div className="font-medium">Natural</div>
                                        <div>Perpendicular to windows</div>
                                        <div>Diffused with blinds</div>
                                    </div>
                                </div>
                            </section>

                            {/* Eye Exercises */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <ArrowRight className="w-8 h-8 text-blue-600 mr-2" />
                                    Eye Exercises to Reduce Strain
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    These exercises strengthen eye muscles and improve focusing ability. Perform them 2-3 times daily for best results, especially during long screen sessions.
                                </p>

                                <div className="space-y-6">
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Palming (3 minutes)</h3>
                                        </div>
                                        <div className="p-4">
                                            <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-4">
                                                <li>Rub hands together to warm them</li>
                                                <li>Cup palms over closed eyes without pressing</li>
                                                <li>Breathe deeply and visualize darkness</li>
                                                <li>Feel warmth and relaxation in eye muscles</li>
                                            </ol>
                                            <p className="text-gray-700 mt-2"><span className="font-semibold">Benefits:</span> Reduces fatigue, resets light adaptation</p>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Figure Eight (2 minutes)</h3>
                                        </div>
                                        <div className="p-4">
                                            <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-4">
                                                <li>Imagine a large figure eight 10 feet away</li>
                                                <li>Trace it slowly with your eyes</li>
                                                <li>Reverse direction after 30 seconds</li>
                                                <li>Keep head still, only move eyes</li>
                                            </ol>
                                            <p className="text-gray-700 mt-2"><span className="font-semibold">Benefits:</span> Improves eye coordination and tracking</p>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Focus Shifting (3 minutes)</h3>
                                        </div>
                                        <div className="p-4">
                                            <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-4">
                                                <li>Hold thumb 10 inches away, focus on it</li>
                                                <li>Shift focus to something 10+ feet away</li>
                                                <li>Alternate every 5 seconds</li>
                                                <li>Gradually increase shift distance</li>
                                            </ol>
                                            <p className="text-gray-700 mt-2"><span className="font-semibold">Benefits:</span> Strengthens ciliary muscles, prevents accommodation spasm</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Technology Solutions */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Smartphone className="w-8 h-8 text-blue-600 mr-2" />
                                    Technology Solutions
                                </h2>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Blue Light Filters</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                                            <li><span className="font-semibold">Night Shift (iOS):</span> Warms colors after sunset</li>
                                            <li><span className="font-semibold">Night Light (Android/Windows):</span> Reduces blue emission</li>
                                            <li><span className="font-semibold">f.lux:</span> Advanced automatic adjustment</li>
                                            <li><span className="font-semibold">Blue Light Glasses:</span> Block 30-90% of HEV light</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Screen Protectors</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                                            <li><span className="font-semibold">Matte Anti-Glare:</span> Diffuses reflections</li>
                                            <li><span className="font-semibold">Blue Light Filtering:</span> Built-in HEV protection</li>
                                            <li><span className="font-semibold">Privacy Filters:</span> Reduce brightness while working</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Monitor Recommendations</h3>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full bg-white">
                                            <thead>
                                                <tr>
                                                    <th className="px-4 py-2 text-left">Feature</th>
                                                    <th className="px-4 py-2 text-left">Benefit</th>
                                                    <th className="px-4 py-2 text-left">Ideal Spec</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200">
                                                <tr>
                                                    <td className="px-4 py-2">Size</td>
                                                    <td className="px-4 py-2">Reduces squinting</td>
                                                    <td className="px-4 py-2">24-27 inches</td>
                                                </tr>
                                                <tr className="bg-gray-50">
                                                    <td className="px-4 py-2">Resolution</td>
                                                    <td className="px-4 py-2">Sharper text</td>
                                                    <td className="px-4 py-2">1440p or 4K</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-2">Refresh Rate</td>
                                                    <td className="px-4 py-2">Smoother motion</td>
                                                    <td className="px-4 py-2">120Hz+</td>
                                                </tr>
                                                <tr className="bg-gray-50">
                                                    <td className="px-4 py-2">Panel Type</td>
                                                    <td className="px-4 py-2">Better viewing angles</td>
                                                    <td className="px-4 py-2">IPS or OLED</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Digital eye strain is preventable with proper habits and workspace setup. By implementing these strategies, you can significantly reduce discomfort and protect your long-term eye health while maintaining productivity.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    Remember that children are particularly vulnerable to digital eye strain. The American Academy of Ophthalmology recommends no more than 2 hours of recreational screen time daily for kids, with frequent breaks.
                                </p>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "Your eyes weren't designed for 8+ hours of close-up screen work. Like any muscle, they need rest and exercise. Small changes today can prevent big problems tomorrow."
                                    </p>
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
                                    <p className="text-sm text-gray-600 mb-1">
                                        <a href="#" className="text-blue-600 hover:underline">
                                            Medically reviewed
                                        </a>{" "}
                                        by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            Dr. Emily Chen, OD
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600 mb-1">
                                        — Written by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            James Wilson
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600 flex items-center gap-1">
                                        — <Calendar className="w-3 h-3" />
                                        <a href="#" className="text-blue-600 hover:underline">
                                            Updated on June 10, 2024
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Newsletter Signup */}
                        <div className="bg-blue-50 rounded-lg p-6 mb-8">
                            <div className="mb-4">
                                <h3 className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-2">EYE HEALTH NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get eye care tips straight to your inbox</h4>
                                <p className="text-gray-700 text-sm">
                                    Weekly vision exercises, tech recommendations, and science-backed strategies to protect your eyes.
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
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Eye Strain Relief</h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                        <span className="text-blue-600 font-bold">1</span>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900">Warm Compress</h4>
                                        <p className="text-sm text-gray-600">Apply for 5 minutes to relax eye muscles</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                        <span className="text-blue-600 font-bold">2</span>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900">Artificial Tears</h4>
                                        <p className="text-sm text-gray-600">Use preservative-free drops as needed</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                        <span className="text-blue-600 font-bold">3</span>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900">Distance Viewing</h4>
                                        <p className="text-sm text-gray-600">Look out a window for 2 minutes every hour</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* App Recommendations */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Recommended Apps</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span className="font-medium">EyeCare</span>
                                    <span className="text-blue-600">20-20-20 reminders</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>f.lux</span>
                                    <span className="text-blue-600">Blue light control</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Blink Detector</span>
                                    <span className="text-blue-600">Blink rate monitor</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>PauseAlly</span>
                                    <span className="text-blue-600">Break scheduling</span>
                                </div>
                            </div>
                        </div>

                        {/* Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Further Reading</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-center">
                                        <BookOpen className="w-4 h-4 mr-2" />
                                        The Blue Light Effect on Sleep
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-center">
                                        <BookOpen className="w-4 h-4 mr-2" />
                                        Ergonomic Workspace Setup Guide
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-center">
                                        <BookOpen className="w-4 h-4 mr-2" />
                                        Best Computer Glasses of 2024
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-center">
                                        <BookOpen className="w-4 h-4 mr-2" />
                                        Dry Eye Syndrome Prevention
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