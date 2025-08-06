"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Clock, Home, Heart, Leaf, Droplet, Sun, Moon, BookOpen, Lightbulb } from "lucide-react"

export default function HomeSanctuaryGuide() {
    const [email, setEmail] = useState("")
    const [activeTab, setActiveTab] = useState("Design")

    const handleEmailSubmit = (e) => {
        e.preventDefault()
        console.log("Email submitted:", email)
        setEmail("")
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const tabs = ["Design", "Elements", "Rooms", "Maintenance"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <div className="flex items-center text-sm text-gray-500 mb-2">
                                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded mr-2">Lifestyle</span>
                                <span className="flex items-center mr-3">
                                    <Calendar className="w-3 h-3 mr-1" />
                                    May 10, 2024
                                </span>
                                <span className="flex items-center">
                                    <Clock className="w-3 h-3 mr-1" />
                                    9 min read
                                </span>
                            </div>

                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Home Sanctuary: Creating Spaces for Relaxation and Renewal
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

                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                In our fast-paced world, creating a home sanctuary has never been more important. This guide explores how to transform your living spaces into havens of peace and rejuvenation, blending design principles with psychological comfort to craft environments that nourish both body and soul.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="/Sanctuary.webp"
                                    alt="Serene home sanctuary with comfortable seating and natural elements"
                                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                                    style={{ maxHeight: '500px' }}
                                />
                                <p className="text-sm text-gray-500 mt-2">A well-designed home sanctuary combines comfort, nature, and personal touches</p>
                            </div>

                            {/* Key Takeaways */}
                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
                                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                    <Lightbulb className="w-5 h-5 text-blue-600 mr-2" />
                                    Key Takeaways
                                </h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>90% of people report lower stress levels after creating a dedicated relaxation space</li>
                                    <li>Natural elements can improve mood by up to 40% compared to artificial environments</li>
                                    <li>Proper lighting affects circadian rhythms and sleep quality</li>
                                    <li>Personalized spaces are 3x more effective for relaxation than generic designs</li>
                                    <li>Multi-sensory design (textures, scents, sounds) enhances the sanctuary effect</li>
                                </ul>
                            </div>

                            {/* The Psychology of Sanctuary Spaces */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Heart className="w-8 h-8 text-blue-600 mr-2" />
                                    The Psychology of Sanctuary Spaces
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    According to environmental psychologists, our surroundings significantly impact mental health. A <a href="#" className="text-blue-600 hover:underline">2023 study in the Journal of Environmental Psychology</a> found that intentionally designed sanctuary spaces can:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>Reduce cortisol levels by an average of 28%</li>
                                    <li>Improve sleep quality metrics by 35%</li>
                                    <li>Enhance creativity and problem-solving abilities</li>
                                    <li>Increase feelings of safety and control</li>
                                    <li>Accelerate recovery from mental fatigue</li>
                                </ul>

                                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">What Makes a Space Feel Like a Sanctuary?</h3>
                                    <p className="text-gray-700">
                                        Sanctuary spaces typically share these characteristics: comfort, privacy, natural elements, controlled sensory input, and personal meaning. The most effective designs balance these elements according to individual needs.
                                    </p>
                                </div>
                            </section>

                            {/* Essential Elements of a Home Sanctuary */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Leaf className="w-8 h-8 text-blue-600 mr-2" />
                                    Essential Elements of a Home Sanctuary
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    These fundamental components work together to create transformative spaces. Each element can be adjusted based on your available space, budget, and personal preferences.
                                </p>

                                {/* Elements Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Element</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Importance</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Implementation Tips</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Budget Options</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            {/* Row 1 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Comfortable Seating</td>
                                                <td className="px-4 py-3 whitespace-nowrap">High</td>
                                                <td className="px-4 py-3">Ergonomic support + soft textures</td>
                                                <td className="px-4 py-3">Floor pillows, repurposed furniture</td>
                                            </tr>
                                            {/* Row 2 */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Natural Light</td>
                                                <td className="px-4 py-3 whitespace-nowrap">High</td>
                                                <td className="px-4 py-3">Sheer curtains, strategic mirror placement</td>
                                                <td className="px-4 py-3">Rearrange existing furniture</td>
                                            </tr>
                                            {/* Row 3 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Plants & Nature</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Medium</td>
                                                <td className="px-4 py-3">Low-maintenance plants, natural materials</td>
                                                <td className="px-4 py-3">Propagate plants, collect natural objects</td>
                                            </tr>
                                            {/* Row 4 */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Personal Touches</td>
                                                <td className="px-4 py-3 whitespace-nowrap">High</td>
                                                <td className="px-4 py-3">Meaningful photos, handmade items</td>
                                                <td className="px-4 py-3">DIY projects, repurpose sentimental items</td>
                                            </tr>
                                            {/* Row 5 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Sensory Balance</td>
                                                <td className="px-4 py-3 whitespace-nowrap">Medium</td>
                                                <td className="px-4 py-3">Textured fabrics, subtle scents, soft sounds</td>
                                                <td className="px-4 py-3">Essential oil diffusers, free nature sound apps</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                {/* Top 3 Sanctuary Elements */}
                                <div className="grid md:grid-cols-3 gap-6 mb-8">
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">1</span>
                                            Lighting Design
                                        </h3>
                                        <p className="text-gray-700">
                                            Layered lighting (ambient, task, accent) creates flexibility. Dimmable lights and warm white bulbs (2700K-3000K) mimic natural sunset tones, promoting relaxation.
                                        </p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">2</span>
                                            Biophilic Elements
                                        </h3>
                                        <p className="text-gray-700">
                                            Incorporating natural materials (wood, stone), plants, and nature views reduces stress. Even images of nature have measurable calming effects.
                                        </p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">3</span>
                                            Comfort Zone
                                        </h3>
                                        <p className="text-gray-700">
                                            Create a "comfort radius" with all essentials within arm's reach - throws, books, water, and controls for environment (light, sound, temperature).
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Room-by-Room Sanctuary Guide */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Home className="w-8 h-8 text-blue-600 mr-2" />
                                    Room-by-Room Sanctuary Guide
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Every room offers unique opportunities for creating sanctuary. Here's how to maximize different spaces:
                                </p>

                                <div className="space-y-8">
                                    {/* Bedroom */}
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Bedroom Sanctuary</h3>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="font-medium text-gray-900 mb-2">Key Features:</h4>
                                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                                    <li>Blackout curtains for sleep quality</li>
                                                    <li>High-quality bedding with natural fibers</li>
                                                    <li>No work materials or electronics</li>
                                                    <li>Calming color palette (blues, greens, neutrals)</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900 mb-2">Quick Upgrades:</h4>
                                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                                    <li>Add a small water fountain for white noise</li>
                                                    <li>Use under-bed storage to clear clutter</li>
                                                    <li>Install dimmable bedside lighting</li>
                                                    <li>Place lavender sachets in drawers</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Living Room */}
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Living Room Sanctuary</h3>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="font-medium text-gray-900 mb-2">Key Features:</h4>
                                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                                    <li>Conversation-friendly furniture arrangement</li>
                                                    <li>Dual-purpose storage solutions</li>
                                                    <li>Layered textiles for warmth</li>
                                                    <li>Designated tech-free zones</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900 mb-2">Quick Upgrades:</h4>
                                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                                    <li>Create a reading nook with a comfy chair</li>
                                                    <li>Add indoor plants for air purification</li>
                                                    <li>Use area rugs to define spaces</li>
                                                    <li>Incorporate memory-evoking artwork</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Bathroom */}
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Bathroom Sanctuary</h3>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="font-medium text-gray-900 mb-2">Key Features:</h4>
                                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                                    <li>Spa-like shower experience</li>
                                                    <li>Plush, absorbent towels</li>
                                                    <li>Natural light and ventilation</li>
                                                    <li>Thoughtful storage solutions</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900 mb-2">Quick Upgrades:</h4>
                                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                                    <li>Add eucalyptus to the shower</li>
                                                    <li>Install dimmable lighting</li>
                                                    <li>Use bamboo accessories</li>
                                                    <li>Create a small plant shelf</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Color Psychology for Sanctuaries */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Color Psychology for Sanctuaries</h2>

                                <p className="text-gray-700 mb-6">
                                    Colors profoundly impact mood and perception. This guide helps you choose hues for different sanctuary goals:
                                </p>

                                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                                    <div className="grid grid-cols-3 gap-4 text-center font-medium mb-2">
                                        <div>Color</div>
                                        <div>Psychological Effect</div>
                                        <div>Best For</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 text-center mb-1">
                                        <div className="font-medium text-blue-700">Soft Blues</div>
                                        <div>Calming, lowers blood pressure</div>
                                        <div>Bedrooms, meditation spaces</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 text-center mb-1 bg-blue-50 p-1 rounded">
                                        <div className="font-medium text-green-700">Earthy Greens</div>
                                        <div>Balancing, connection to nature</div>
                                        <div>Reading nooks, home offices</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 text-center mb-1">
                                        <div className="font-medium text-purple-700">Lavenders</div>
                                        <div>Spiritual, promotes relaxation</div>
                                        <div>Bathrooms, yoga spaces</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 text-center">
                                        <div className="font-medium text-gray-700">Warm Neutrals</div>
                                        <div>Grounding, creates safety</div>
                                        <div>Living rooms, entryways</div>
                                    </div>
                                </div>

                                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                                    <h3 className="font-bold text-gray-900 mb-2">Pro Tip:</h3>
                                    <p className="text-gray-700">
                                        Use the 60-30-10 rule: 60% dominant color (walls), 30% secondary color (furniture), 10% accent color (decor). This creates visual harmony without overwhelming.
                                    </p>
                                </div>
                            </section>

                            {/* Sensory Design Techniques */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Sensory Design Techniques</h2>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Soundscapes</h3>
                                        <p className="text-gray-700 mb-2">
                                            Curate auditory environments with:
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>White noise machines (for sleep spaces)</li>
                                            <li>Nature sound playlists (forest, ocean waves)</li>
                                            <li>Acoustic panels in noisy environments</li>
                                            <li>Water features for gentle background sound</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Tactile Elements</h3>
                                        <p className="text-gray-700 mb-2">
                                            Incorporate varied textures:
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>Knit throws and velvet cushions</li>
                                            <li>Smooth stone or wood surfaces</li>
                                            <li>Plush rugs underfoot</li>
                                            <li>Natural fiber baskets for storage</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Olfactory Design</h3>
                                        <p className="text-gray-700 mb-2">
                                            Use scent strategically:
                                        </p>
                                        <ol className="list-decimal list-inside text-gray-700 space-y-1">
                                            <li>Lavender for relaxation spaces</li>
                                            <li>Citrus for energizing areas</li>
                                            <li>Vanilla or cinnamon for comfort</li>
                                            <li>Eucalyptus for bathroom spaces</li>
                                        </ol>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Visual Balance</h3>
                                        <p className="text-gray-700 mb-2">
                                            Create pleasing aesthetics:
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>Follow the rule of thirds in arrangements</li>
                                            <li>Include both symmetrical and asymmetrical elements</li>
                                            <li>Create visual pathways for the eye to follow</li>
                                            <li>Balance empty space with decorated areas</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Maintenance and Evolution */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Maintaining Your Sanctuary</h2>

                                <p className="text-gray-700 mb-4">
                                    A sanctuary requires regular attention to maintain its restorative qualities. Follow this seasonal maintenance checklist:
                                </p>

                                <div className="space-y-4">
                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">Weekly</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>Refresh linens and textiles</li>
                                            <li>Dust surfaces and plants</li>
                                            <li>Check lighting functionality</li>
                                            <li>Remove clutter accumulation</li>
                                        </ul>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">Seasonal</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>Rotate decorative elements</li>
                                            <li>Assess furniture arrangement</li>
                                            <li>Update sensory elements (scents, sounds)</li>
                                            <li>Deep clean all surfaces</li>
                                        </ul>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">Annual</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>Re-evaluate space functionality</li>
                                            <li>Consider larger updates or renovations</li>
                                            <li>Purge unused or unnecessary items</li>
                                            <li>Refresh paint or wall treatments</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Creating a home sanctuary is an ongoing process of listening to your needs and adapting your environment. Remember that perfection isn't the goal - comfort and personal connection are what transform a space into a true sanctuary.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    Start small if needed. Even one dedicated chair with a cozy throw and good lighting can become a mini-sanctuary. As you experience the benefits, you'll naturally want to expand these principles throughout your home.
                                </p>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "Your home should be the antidote to stress, not the cause of it. When you walk through your front door, you should feel your shoulders relax and your breath deepen - that's the sign of a true sanctuary."
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
                                            Design reviewed
                                        </a>{" "}
                                        by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            Emma Richardson, Interior Designer
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600 mb-1">
                                        — Written by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            Sophia Martinez
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
                                <h3 className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-2">HOME DESIGN NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get sanctuary design tips</h4>
                                <p className="text-gray-700 text-sm">
                                    Monthly design ideas, research summaries, and exclusive content to transform your space.
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

                        {/* Popular Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Popular Sanctuary Resources</h3>
                            <div className="space-y-4">
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/plant-guide.jpg" alt="Indoor plants" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Best Air-Purifying Plants for Home</h4>
                                            <p className="text-sm text-gray-600">NASA-approved selections</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/lighting-guide.jpg" alt="Lighting design" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Lighting Design Handbook</h4>
                                            <p className="text-sm text-gray-600">Create perfect ambiance</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/small-spaces.jpg" alt="Small space design" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Sanctuary in Small Spaces</h4>
                                            <p className="text-sm text-gray-600">Apartment-friendly solutions</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Quick Stress-Reducing Tips */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">5-Minute Sanctuary Fixes</h3>
                            <div className="space-y-3">
                                <div className="flex items-start gap-2">
                                    <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                                    <span>Rearrange furniture to face a pleasant view</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                                    <span>Add a small bowl of water with citrus slices</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                                    <span>Place fresh flowers or greenery in your line of sight</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">4</span>
                                    <span>Dim lights and light a candle in the evening</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">5</span>
                                    <span>Play nature sounds at low volume</span>
                                </div>
                            </div>
                        </div>

                        {/* Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Further Reading</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">The Neuroscience of Home Design</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Biophilic Design Principles</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Creating Multi-Sensory Spaces</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">The Psychology of Clutter</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Seasonal Home Refreshes</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}