"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, Eye, Glasses, Monitor, BookOpen, Star, ClipboardList } from "lucide-react"

export default function VisionTherapyGuide() {
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

    const tabs = ["Overview", "Conditions", "Exercises", "Success Rates"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Vision Therapy Options: Specialized Treatments for Vision Problems
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
                                Vision therapy is a customized program of visual activities designed to correct vision problems and improve visual skills. Unlike glasses or contacts that compensate for vision problems, vision therapy aims to teach the visual system to correct itself. This comprehensive guide explores various vision therapy options, their benefits, and how they can help with different visual conditions.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1551884831-bbf3cdc6469e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                    alt="Vision therapy session with specialized equipment"
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
                                    <li>Vision therapy can treat conditions like lazy eye, crossed eyes, and focusing problems</li>
                                    <li>A typical program consists of 12-24 weekly sessions with home exercises</li>
                                    <li>Success rates range from 75-90% for properly diagnosed cases</li>
                                    <li>Combination of in-office and at-home exercises yields best results</li>
                                    <li>Digital vision therapy apps are emerging as effective supplemental tools</li>
                                </ul>
                            </div>

                            {/* What is Vision Therapy */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Eye className="w-8 h-8 text-blue-600 mr-2" />
                                    What is Vision Therapy?
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Vision therapy, also known as visual training or orthoptics, is a structured program of visual activities prescribed to improve visual abilities. It trains the eyes and brain to work together more effectively. According to the <a href="#" className="text-blue-600 hover:underline">American Optometric Association</a>, vision therapy can help with:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>Eye alignment problems (strabismus)</li>
                                    <li>Eye teaming problems (convergence insufficiency)</li>
                                    <li>Focusing disorders (accommodative dysfunction)</li>
                                    <li>Eye movement disorders</li>
                                    <li>Visual processing problems</li>
                                    <li>Sports vision enhancement</li>
                                </ul>

                                <div className="bg-blue-100 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">How Vision Therapy Differs from Traditional Correction</h3>
                                    <p className="text-gray-700 mb-2">
                                        While glasses and contact lenses compensate for vision problems, vision therapy aims to improve how the eyes function. It's like physical therapy for the visual system, addressing the root causes of vision problems rather than just the symptoms.
                                    </p>
                                </div>
                            </section>

                            {/* Common Conditions Treated */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <ClipboardList className="w-8 h-8 text-blue-600 mr-2" />
                                    Common Conditions Treated with Vision Therapy
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Vision therapy can effectively treat various visual disorders. Here's a comprehensive list of conditions and how vision therapy helps:
                                </p>

                                {/* Conditions Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Condition</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Symptoms</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Therapy Approach</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Success Rate</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            {/* Row 1 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Amblyopia (Lazy Eye)</td>
                                                <td className="px-4 py-3">Reduced vision in one eye, poor depth perception</td>
                                                <td className="px-4 py-3">Patching, visual stimulation, binocular activities</td>
                                                <td className="px-4 py-3 whitespace-nowrap">75-85%</td>
                                            </tr>
                                            {/* Row 2 */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Strabismus (Crossed Eyes)</td>
                                                <td className="px-4 py-3">Eyes not aligned, double vision</td>
                                                <td className="px-4 py-3">Prism lenses, fusion exercises, vergence training</td>
                                                <td className="px-4 py-3 whitespace-nowrap">70-80%</td>
                                            </tr>
                                            {/* Row 3 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Convergence Insufficiency</td>
                                                <td className="px-4 py-3">Eye strain, blurred vision, headaches when reading</td>
                                                <td className="px-4 py-3">Pencil push-ups, brock string, computer-based training</td>
                                                <td className="px-4 py-3 whitespace-nowrap">85-90%</td>
                                            </tr>
                                            {/* Row 4 */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Accommodative Dysfunction</td>
                                                <td className="px-4 py-3">Difficulty focusing between near and far, fatigue</td>
                                                <td className="px-4 py-3">Lens flippers, focusing charts, distance shifting</td>
                                                <td className="px-4 py-3 whitespace-nowrap">80-90%</td>
                                            </tr>
                                            {/* Row 5 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Visual Processing Disorder</td>
                                                <td className="px-4 py-3">Difficulty interpreting visual information</td>
                                                <td className="px-4 py-3">Tracking exercises, visual memory games, sequencing tasks</td>
                                                <td className="px-4 py-3 whitespace-nowrap">65-75%</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <p className="text-gray-700 mb-6">
                                    *Success rates based on clinical studies when patients complete recommended therapy programs.
                                </p>

                                {/* Condition Highlights */}
                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">1</span>
                                            Convergence Insufficiency - The Most Treatable
                                        </h3>
                                        <p className="text-gray-700">
                                            This common condition affecting 5-13% of school-aged children responds exceptionally well to vision therapy. The Convergence Insufficiency Treatment Trial showed 75% of patients achieved normal or significantly improved convergence ability after 12 weeks of office-based therapy.
                                        </p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">2</span>
                                            Amblyopia - Beyond Patching
                                        </h3>
                                        <p className="text-gray-700">
                                            Modern vision therapy for lazy eye now includes dichoptic training (presenting different images to each eye), video games, and virtual reality, achieving better outcomes than patching alone. Studies show binocular treatment can improve vision even in older children and adults.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Types of Vision Therapy */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Glasses className="w-8 h-8 text-blue-600 mr-2" />
                                    Types of Vision Therapy
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Vision therapy programs are tailored to individual needs but generally fall into several categories:
                                </p>

                                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <h3 className="font-bold text-lg text-gray-900 mb-3">1. Orthoptic Therapy</h3>
                                            <p className="text-gray-700 mb-2">
                                                Traditional exercises using tools like:
                                            </p>
                                            <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                                                <li>Brock strings</li>
                                                <li>Prism lenses</li>
                                                <li>Cheiroscopes</li>
                                                <li>Stereo viewers</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg text-gray-900 mb-3">2. Behavioral/Optometric Vision Therapy</h3>
                                            <p className="text-gray-700 mb-2">
                                                Focuses on improving visual perception and processing:
                                            </p>
                                            <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                                                <li>Visual memory exercises</li>
                                                <li>Tracking drills</li>
                                                <li>Visual-motor integration</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg text-gray-900 mb-3">3. Syntonic Phototherapy</h3>
                                            <p className="text-gray-700">
                                                Uses colored light to stimulate visual pathways and improve function.
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg text-gray-900 mb-3">4. Computer-Assisted Vision Therapy</h3>
                                            <p className="text-gray-700">
                                                Digital programs like VTS4, HTS, and home-based apps provide interactive training with progress tracking.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Emerging Trend:</h3>
                                    <p className="text-gray-700">
                                        Virtual reality vision therapy is showing promising results, particularly for amblyopia and binocular vision disorders. VR headsets can deliver precisely controlled visual stimuli to each eye independently.
                                    </p>
                                </div>
                            </section>

                            {/* Sample Therapy Exercises */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Vision Therapy Exercises</h2>

                                <div className="space-y-6">
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Brock String Exercise</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Purpose:</h4>
                                                <p className="text-gray-700">Improves eye teaming and convergence ability</p>
                                            </div>
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">How to Do It:</h4>
                                                <ol className="list-decimal list-inside text-gray-700 ml-4 space-y-1">
                                                    <li>String 3-5 beads on a 10-12 foot string</li>
                                                    <li>Attach one end to a fixed point at eye level</li>
                                                    <li>Hold the other end at your nose</li>
                                                    <li>Focus on each bead, seeing it single with two strings forming an X</li>
                                                </ol>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">Frequency:</h4>
                                                <p className="text-gray-700">5-10 minutes daily</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Pencil Push-ups</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Purpose:</h4>
                                                <p className="text-gray-700">Strengthens convergence ability</p>
                                            </div>
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">How to Do It:</h4>
                                                <ol className="list-decimal list-inside text-gray-700 ml-4 space-y-1">
                                                    <li>Hold a pencil vertically at arm's length</li>
                                                    <li>Slowly bring it toward your nose while maintaining single vision</li>
                                                    <li>Stop when you see double or can't maintain focus</li>
                                                    <li>Hold for 5 seconds at closest point</li>
                                                </ol>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">Frequency:</h4>
                                                <p className="text-gray-700">10 repetitions, 2-3 times daily</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Computer-Based Vergence Therapy</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">Purpose:</h4>
                                                <p className="text-gray-700">Improves eye coordination and depth perception</p>
                                            </div>
                                            <div className="mb-3">
                                                <h4 className="font-medium text-gray-900">How It Works:</h4>
                                                <p className="text-gray-700 mb-2">
                                                    Special software presents different images to each eye, requiring the brain to fuse them. Difficulty increases as skills improve.
                                                </p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">Frequency:</h4>
                                                <p className="text-gray-700">15-20 minutes, 3-5 times weekly</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* What to Expect in Therapy */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">What to Expect in Vision Therapy</h2>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Initial Evaluation</h3>
                                        <p className="text-gray-700 mb-2">
                                            A comprehensive eye exam assesses:
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                                            <li>Visual acuity</li>
                                            <li>Eye teaming and tracking</li>
                                            <li>Focusing ability</li>
                                            <li>Depth perception</li>
                                            <li>Visual processing skills</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Typical Therapy Program</h3>
                                        <ol className="list-decimal list-inside text-gray-700 space-y-1">
                                            <li>12-24 weekly in-office sessions (30-60 minutes each)</li>
                                            <li>Daily 15-20 minute home exercises</li>
                                            <li>Progress evaluations every 4-6 weeks</li>
                                            <li>Gradual reduction in frequency as skills improve</li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Important Note:</h3>
                                    <p className="text-gray-700">
                                        Vision therapy requires active participation and consistency. Like learning a musical instrument, regular practice is essential for success. Most patients begin noticing improvements within 6-8 weeks.
                                    </p>
                                </div>
                            </section>

                            {/* Success Rates and Research */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Success Rates and Scientific Research</h2>

                                <p className="text-gray-700 mb-4">
                                    Numerous clinical studies support the effectiveness of vision therapy for specific conditions:
                                </p>

                                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <h3 className="font-bold text-lg text-gray-900 mb-2">Convergence Insufficiency Treatment Trial (CITT)</h3>
                                            <p className="text-gray-700">
                                                75% of children achieved normal or significantly improved convergence after office-based therapy. Home-based therapy was less effective (33% success rate).
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg text-gray-900 mb-2">PEDIG Amblyopia Studies</h3>
                                            <p className="text-gray-700">
                                                Binocular treatment combined with patching improved visual acuity in amblyopic eyes by 2 lines or more in 62% of cases.
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg text-gray-900 mb-2">Strabismus Research</h3>
                                            <p className="text-gray-700">
                                                70-80% of intermittent exotropia cases showed improved control with vision therapy, reducing need for surgery.
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg text-gray-900 mb-2">Reading Improvement</h3>
                                            <p className="text-gray-700">
                                                Children with convergence insufficiency who completed therapy showed 50% greater reading comprehension gains compared to controls.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-gray-700 mb-6">
                                    While individual results vary, most studies show vision therapy is significantly more effective than placebo or passive approaches for properly diagnosed conditions.
                                </p>
                            </section>

                            {/* Finding a Vision Therapist */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Finding a Qualified Vision Therapist</h2>

                                <p className="text-gray-700 mb-4">
                                    Not all eye care professionals provide vision therapy. Look for:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>
                                        <strong>Optometrists with COVD certification</strong> - Fellows of the College of Optometrists in Vision Development (FCOVD) have advanced training
                                    </li>
                                    <li>
                                        <strong>Orthoptists</strong> - Medical professionals specializing in eye movement disorders
                                    </li>
                                    <li>
                                        <strong>Behavioral optometrists</strong> - Focus on functional vision and visual processing
                                    </li>
                                </ul>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <h3 className="font-bold text-lg text-gray-900 mb-2">Questions to Ask a Potential Therapist:</h3>
                                    <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                                        <li>What percentage of your practice is dedicated to vision therapy?</li>
                                        <li>What's your experience with my specific condition?</li>
                                        <li>What's your typical success rate?</li>
                                        <li>What equipment and techniques do you use?</li>
                                        <li>Do you provide home exercise instructions?</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Vision therapy offers a drug-free, non-surgical approach to treating many common visual disorders. While it requires commitment and consistent effort, the potential benefits—improved vision, comfort, and quality of life—make it a valuable option for children and adults alike.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    If you or your child experience persistent eye strain, headaches, reading difficulties, or other vision-related challenges despite normal eye exams, consider consulting a vision therapy specialist for a comprehensive evaluation.
                                </p>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "Vision therapy isn't about strengthening eye muscles—it's about training the brain to use the eyes more effectively. When properly prescribed and diligently followed, it can produce life-changing improvements in visual function."
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
                                            Dr. Emily Parker, FCOVD
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600 mb-1">
                                        — Written by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            David Wilson
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
                                <h3 className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-2">VISION HEALTH NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get eye care tips and updates</h4>
                                <p className="text-gray-700 text-sm">
                                    Monthly insights on vision therapy, eye health, and the latest research.
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

                        {/* Common Symptoms Checklist */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Vision Problems Checklist</h3>
                            <div className="space-y-3">
                                <div className="flex items-start">
                                    <input type="checkbox" id="symptom1" className="mt-1 mr-2" />
                                    <label htmlFor="symptom1" className="text-gray-700">Frequent headaches</label>
                                </div>
                                <div className="flex items-start">
                                    <input type="checkbox" id="symptom2" className="mt-1 mr-2" />
                                    <label htmlFor="symptom2" className="text-gray-700">Eye strain or fatigue</label>
                                </div>
                                <div className="flex items-start">
                                    <input type="checkbox" id="symptom3" className="mt-1 mr-2" />
                                    <label htmlFor="symptom3" className="text-gray-700">Double vision</label>
                                </div>
                                <div className="flex items-start">
                                    <input type="checkbox" id="symptom4" className="mt-1 mr-2" />
                                    <label htmlFor="symptom4" className="text-gray-700">Difficulty concentrating</label>
                                </div>
                                <div className="flex items-start">
                                    <input type="checkbox" id="symptom5" className="mt-1 mr-2" />
                                    <label htmlFor="symptom5" className="text-gray-700">Poor reading comprehension</label>
                                </div>
                                <button className="w-full bg-blue-50 text-blue-600 font-medium py-2 px-4 rounded-lg mt-2">
                                    Evaluate My Symptoms
                                </button>
                            </div>
                        </div>

                        {/* Therapy Tools */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Common Vision Therapy Tools</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Brock String</span>
                                    <span className="text-blue-600">$12-25</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Prism Glasses</span>
                                    <span className="text-blue-600">$50-150</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Computer Software</span>
                                    <span className="text-blue-600">$100-300</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Lens Flippers</span>
                                    <span className="text-blue-600">$30-60</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>VR Therapy System</span>
                                    <span className="text-blue-600">$500+</span>
                                </div>
                            </div>
                        </div>

                        {/* Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Further Reading</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">The Science Behind Vision Therapy</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Vision Therapy for Children</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Digital Eye Strain Solutions</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Success Stories</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Find a Vision Therapist</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}