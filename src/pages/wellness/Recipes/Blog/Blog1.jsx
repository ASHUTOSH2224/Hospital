"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Clock, BookOpen, Heart, MessageSquare, Share2, ChevronRight, Star } from "lucide-react"

export default function WelcomeToHealthlineRecipes() {
    const [email, setEmail] = useState("")
    const [activeTab, setActiveTab] = useState("Letter")
    const [isShareOpen, setIsShareOpen] = useState(false)

    const handleEmailSubmit = (e) => {
        e.preventDefault()
        console.log("Email submitted:", email)
        setEmail("")
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const tabs = ["Letter", "Our Philosophy", "Recipe Features", "Community"]

    const toggleShare = () => {
        setIsShareOpen(!isShareOpen)
    }

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <div className="flex items-center text-sm text-gray-500 mb-4">
                                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">Editorial</span>
                                <span className="mx-2">•</span>
                                <span className="flex items-center">
                                    <Clock className="w-4 h-4 mr-1" />
                                    5 min read
                                </span>
                                <span className="mx-2">•</span>
                                <span>All Levels</span>
                            </div>

                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Welcome to Healthline Recipes: A Letter from the Editor
                            </h1>

                            {/* Navigation Tabs */}
                            <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-200">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${activeTab === tab
                                                ? "border-green-500 text-green-600"
                                                : "border-transparent text-gray-600 hover:text-gray-900"
                                            }`}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>

                            {/* Date and Author */}
                            <div className="flex items-center text-gray-500 mb-4">
                                <Calendar className="w-4 h-4 mr-1" />
                                <span className="text-sm mr-4">Updated on June 15, 2024</span>
                                <User className="w-4 h-4 mr-1" />
                                <span className="text-sm">By Dr. Emily Parker, Editor-in-Chief</span>
                            </div>

                            {/* Main Image */}
                            <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
                                <img
                                    src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=600&fit=crop"
                                    alt="Colorful healthy ingredients arranged beautifully"
                                    className="w-full h-auto object-cover"
                                    style={{ maxHeight: '500px' }}
                                />
                                <p className="text-xs text-gray-500 mt-1 italic">Photo credit: Unsplash / Healthy Ingredients</p>
                            </div>

                            {/* Key Takeaways */}
                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8 rounded-r-lg">
                                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                    <BookOpen className="w-5 h-5 text-blue-600 mr-2" />
                                    Key Takeaways
                                </h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>Cooking is about creativity and nourishment, not restriction</li>
                                    <li>Our recipes prioritize both health and flavor</li>
                                    <li>We accommodate diverse dietary needs without compromise</li>
                                    <li>Community feedback shapes our content direction</li>
                                    <li>Nutrition science informs every recipe we publish</li>
                                </ul>
                            </div>

                            {/* Editor's Letter */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                    A Personal Welcome
                                </h2>

                                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                    When I first joined Healthline as a nutrition editor seven years ago, I never imagined how much our recipe section would grow. What began as a small collection of healthy meal ideas has blossomed into one of the most trusted recipe resources on the web, visited by millions each month seeking delicious, nourishing meals.
                                </p>

                                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                                    <p className="text-gray-700 italic mb-2">
                                        "Cooking isn't about what you can't eat. It's about what delicious, nourishing meals you can create."
                                    </p>
                                    <p className="text-gray-600 text-sm">
                                        — Dr. Emily Parker, Editor-in-Chief
                                    </p>
                                </div>

                                <p className="text-gray-700 mb-6 leading-relaxed">
                                    This philosophy guides everything we do. Too often, healthy eating is framed in terms of deprivation—cutting out sugar, avoiding carbs, eliminating dairy. While these approaches may work for some, they can make cooking feel like a chore rather than a joy. At Healthline Recipes, we flip this narrative.
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div className="bg-green-50 p-4 rounded-lg">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">What We're Not</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>A restrictive diet platform</li>
                                            <li>Fad-chasing recipe collection</li>
                                            <li>One-size-fits-all approach</li>
                                            <li>Just another recipe site</li>
                                        </ul>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">What We Are</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>Science-backed nutrition</li>
                                            <li>Inclusive of all diets</li>
                                            <li>Focused on real-world cooking</li>
                                            <li>Community-driven content</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Our Philosophy */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                    Our Recipe Philosophy
                                </h2>

                                <p className="text-gray-700 mb-6 leading-relaxed">
                                    Every recipe in our collection meets rigorous standards developed by our team of registered dietitians and culinary experts. We evaluate based on:
                                </p>

                                {/* Evaluation Criteria Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Criteria</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Weight</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Nutritional Balance</td>
                                                <td className="px-4 py-3 whitespace-nowrap">30%</td>
                                                <td className="px-4 py-3">Macro and micronutrient profile aligned with dietary guidelines</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Flavor Profile</td>
                                                <td className="px-4 py-3 whitespace-nowrap">25%</td>
                                                <td className="px-4 py-3">Deliciousness verified by our test kitchen</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Accessibility</td>
                                                <td className="px-4 py-3 whitespace-nowrap">20%</td>
                                                <td className="px-4 py-3">Ingredients easily found in most supermarkets</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Dietary Flexibility</td>
                                                <td className="px-4 py-3 whitespace-nowrap">15%</td>
                                                <td className="px-4 py-3">Adaptable for common dietary needs</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Preparation Practicality</td>
                                                <td className="px-4 py-3 whitespace-nowrap">10%</td>
                                                <td className="px-4 py-3">Realistic for home cooks of various skill levels</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <p className="text-gray-700 mb-6 leading-relaxed">
                                    This balanced approach means you'll never find recipes that sacrifice taste for health, or vice versa. Our most popular recipes—like our Mediterranean Buddha Bowl or Protein-Packed Breakfast Cookies—excel in all categories.
                                </p>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6 rounded-r-lg">
                                    <h3 className="font-bold text-gray-900 mb-2">Did You Know?</h3>
                                    <p className="text-gray-700">
                                        78% of our recipes can be prepared in under 30 minutes, and 92% include adaptations for at least two dietary preferences (vegetarian, gluten-free, etc.).
                                    </p>
                                </div>
                            </section>

                            {/* Recipe Features */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                    What Makes Our Recipes Special
                                </h2>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="border border-gray-200 rounded-lg p-6">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                                            <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">1</span>
                                            Science-Backed
                                        </h3>
                                        <p className="text-gray-700">
                                            Each recipe includes nutrition facts analyzed by our dietitians, with explanations of key nutrients and their health benefits. We cite recent studies when specific ingredients offer proven advantages.
                                        </p>
                                    </div>
                                    <div className="border border-gray-200 rounded-lg p-6">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                                            <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">2</span>
                                            Dietary Tags
                                        </h3>
                                        <p className="text-gray-700">
                                            Filter recipes by 12 dietary preferences including keto, paleo, vegan, and low-FODMAP. Each recipe page clearly marks adaptations and substitutions.
                                        </p>
                                    </div>
                                    <div className="border border-gray-200 rounded-lg p-6">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                                            <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">3</span>
                                            Seasonal Highlights
                                        </h3>
                                        <p className="text-gray-700">
                                            Our seasonal collections feature produce at its peak for optimal flavor and nutrition, with storage tips and preparation guides for unfamiliar ingredients.
                                        </p>
                                    </div>
                                    <div className="border border-gray-200 rounded-lg p-6">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                                            <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">4</span>
                                            Family-Friendly
                                        </h3>
                                        <p className="text-gray-700">
                                            Tested by families with kids of various ages, these recipes include tips for introducing new flavors and accommodating picky eaters without separate meals.
                                        </p>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Recipe Development Process</h3>
                                <ol className="list-decimal list-inside text-gray-700 space-y-3 mb-6">
                                    <li>
                                        <span className="font-semibold">Concept Phase:</span> Identified based on nutritional gaps, seasonal availability, and reader requests
                                    </li>
                                    <li>
                                        <span className="font-semibold">Test Kitchen:</span> 3-5 iterations to perfect flavor and technique
                                    </li>
                                    <li>
                                        <span className="font-semibold">Nutrition Analysis:</span> Full breakdown by registered dietitians
                                    </li>
                                    <li>
                                        <span className="font-semibold">Accessibility Review:</span> Ingredient availability and cost evaluation
                                    </li>
                                    <li>
                                        <span className="font-semibold">Community Testing:</span> Feedback from 20+ home cooks of varying skill levels
                                    </li>
                                    <li>
                                        <span className="font-semibold">Final Approval:</span> Editorial board signs off before publication
                                    </li>
                                </ol>
                            </section>

                            {/* Community Section */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                    Join Our Cooking Community
                                </h2>

                                <p className="text-gray-700 mb-6 leading-relaxed">
                                    What truly sets Healthline Recipes apart is our vibrant community of home cooks. Each month, we feature:
                                </p>

                                <div className="grid md:grid-cols-3 gap-4 mb-8">
                                    <div className="bg-purple-50 p-4 rounded-lg text-center">
                                        <div className="text-3xl font-bold text-purple-700 mb-2">1,200+</div>
                                        <div className="text-gray-700">Recipe Ratings</div>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg text-center">
                                        <div className="text-3xl font-bold text-blue-700 mb-2">350+</div>
                                        <div className="text-gray-700">Community Photos</div>
                                    </div>
                                    <div className="bg-green-50 p-4 rounded-lg text-center">
                                        <div className="text-3xl font-bold text-green-700 mb-2">90+</div>
                                        <div className="text-gray-700">Adaptation Ideas</div>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4">How to Get Involved</h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                                    <li>Rate recipes you've tried (even anonymous ratings help others!)</li>
                                    <li>Submit your recipe adaptations and variations</li>
                                    <li>Share photos of your creations with #HealthlineRecipes</li>
                                    <li>Participate in our monthly cooking challenges</li>
                                    <li>Join our subscriber-only recipe testing panel</li>
                                </ul>

                                <div className="bg-pink-50 border-l-4 border-pink-400 p-4 rounded-r-lg">
                                    <h3 className="font-bold text-gray-900 mb-2">Success Story</h3>
                                    <p className="text-gray-700 mb-2">
                                        One community member's adaptation of our lentil soup for Instant Pot became so popular we added it as an official variation, and it's now one of our most-made recipes!
                                    </p>
                                    <p className="text-gray-600 text-sm">
                                        — Sarah K., Healthline Recipes community member since 2022
                                    </p>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                    Final Thoughts
                                </h2>

                                <p className="text-gray-700 mb-6 leading-relaxed">
                                    As we continue to grow and evolve, our commitment remains the same: to provide trustworthy, delicious recipes that make healthy eating joyful and accessible to all. Whether you're cooking for one or feeding a family, managing dietary restrictions or simply exploring new flavors, we're here to support your journey.
                                </p>

                                <p className="text-gray-700 mb-6 leading-relaxed">
                                    In the coming months, look for exciting new features including video tutorials, meal planning tools, and personalized recipe recommendations based on your preferences and cooking history.
                                </p>

                                <div className="bg-blue-50 p-6 rounded-lg">
                                    <p className="text-gray-700 font-medium mb-2">
                                        "Our door is always open—send your recipe ideas, feedback, and questions to recipes@healthline.com. Your input directly shapes what we create next."
                                    </p>
                                    <p className="text-gray-600">
                                        — The Healthline Recipes Team
                                    </p>
                                </div>
                            </section>

                            {/* Share and Comment */}
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
                                <div className="flex items-center space-x-4">
                                    <button 
                                        onClick={toggleShare}
                                        className="flex items-center text-gray-700 hover:text-green-600 transition-colors"
                                    >
                                        <Share2 className="w-5 h-5 mr-1" />
                                        Share
                                    </button>
                                    {isShareOpen && (
                                        <div className="flex space-x-2">
                                            <button className="p-2 bg-blue-100 rounded-full text-blue-600 hover:bg-blue-200">
                                                <span className="sr-only">Facebook</span>
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                                                </svg>
                                            </button>
                                            <button className="p-2 bg-blue-100 rounded-full text-blue-400 hover:bg-blue-200">
                                                <span className="sr-only">Twitter</span>
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                                </svg>
                                            </button>
                                            <button className="p-2 bg-red-100 rounded-full text-red-500 hover:bg-red-200">
                                                <span className="sr-only">Pinterest</span>
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                                                </svg>
                                            </button>
                                        </div>
                                    )}
                                </div>
                                <button className="flex items-center text-gray-700 hover:text-green-600 transition-colors">
                                    <MessageSquare className="w-5 h-5 mr-1" />
                                    Leave a Comment
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        {/* Author Info */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden">
                                    <img 
                                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop" 
                                        alt="Dr. Emily Parker"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">Dr. Emily Parker</h3>
                                    <p className="text-sm text-gray-600">Editor-in-Chief, Healthline Recipes</p>
                                </div>
                            </div>
                            <p className="text-gray-700 text-sm mb-4">
                                Registered dietitian and culinary nutrition expert with 15 years of experience developing healthy, delicious recipes for home cooks.
                            </p>
                            <button className="w-full bg-white border border-green-600 text-green-600 hover:bg-green-50 font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                                View Profile
                            </button>
                        </div>

                        {/* Popular Recipes */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Editor's Pick Recipes</h3>
                            <div className="space-y-4">
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=200&h=200&fit=crop" alt="Healthy bowl" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-green-600 transition-colors">Mediterranean Grain Bowl</h4>
                                            <p className="text-sm text-gray-600 flex items-center">
                                                <span className="flex items-center mr-2">
                                                    <Star className="w-3 h-3 text-yellow-500 mr-1" />
                                                    4.9
                                                </span>
                                                (248 reviews)
                                            </p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=200&h=200&fit=crop" alt="Salad" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-green-600 transition-colors">Superfood Salad</h4>
                                            <p className="text-sm text-gray-600 flex items-center">
                                                <span className="flex items-center mr-2">
                                                    <Star className="w-3 h-3 text-yellow-500 mr-1" />
                                                    4.7
                                                </span>
                                                (192 reviews)
                                            </p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=200&h=200&fit=crop" alt="Cookies" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-green-600 transition-colors">Protein Breakfast Cookies</h4>
                                            <p className="text-sm text-gray-600 flex items-center">
                                                <span className="flex items-center mr-2">
                                                    <Star className="w-3 h-3 text-yellow-500 mr-1" />
                                                    4.8
                                                </span>
                                                (315 reviews)
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <a href="#" className="mt-4 inline-flex items-center text-green-600 hover:text-green-800 font-medium text-sm">
                                View all editor's picks
                                <ChevronRight className="w-4 h-4 ml-1" />
                            </a>
                        </div>

                        {/* Newsletter Signup */}
                        <div className="bg-green-50 rounded-lg p-6 mb-8">
                            <div className="mb-4">
                                <h3 className="text-sm font-bold text-green-800 uppercase tracking-wide mb-2">RECIPE NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get our weekly favorites</h4>
                                <p className="text-gray-700 text-sm">
                                    Seasonal recipes, cooking tips, and nutrition insights delivered every Thursday.
                                </p>
                            </div>

                            <form onSubmit={handleEmailSubmit} className="space-y-4">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200"
                                >
                                    SUBSCRIBE
                                </button>
                            </form>

                            <p className="text-xs text-gray-600 mt-3">
                                We respect your privacy. Unsubscribe at any time.
                            </p>
                        </div>

                        {/* Recipe Collections */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Featured Collections</h3>
                            <div className="space-y-3">
                                <a href="#" className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
                                    <span className="font-medium text-gray-900">30-Minute Dinners</span>
                                    <ChevronRight className="w-4 h-4 text-gray-400" />
                                </a>
                                <a href="#" className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
                                    <span className="font-medium text-gray-900">Budget-Friendly Meals</span>
                                    <ChevronRight className="w-4 h-4 text-gray-400" />
                                </a>
                                <a href="#" className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
                                    <span className="font-medium text-gray-900">Diabetes-Friendly</span>
                                    <ChevronRight className="w-4 h-4 text-gray-400" />
                                </a>
                                <a href="#" className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
                                    <span className="font-medium text-gray-900">Plant-Based Proteins</span>
                                    <ChevronRight className="w-4 h-4 text-gray-400" />
                                </a>
                                <a href="#" className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
                                    <span className="font-medium text-gray-900">Kid-Approved</span>
                                    <ChevronRight className="w-4 h-4 text-gray-400" />
                                </a>
                            </div>
                        </div>

                        {/* Resources */}
                        <div className="bg-gray-50 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">More From Healthline</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-green-600 hover:underline flex items-start">
                                        <BookOpen className="w-4 h-4 mt-1 mr-2 flex-shrink-0" />
                                        <span>The Science of Mindful Eating</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-green-600 hover:underline flex items-start">
                                        <BookOpen className="w-4 h-4 mt-1 mr-2 flex-shrink-0" />
                                        <span>Meal Prep for Beginners Guide</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-green-600 hover:underline flex items-start">
                                        <BookOpen className="w-4 h-4 mt-1 mr-2 flex-shrink-0" />
                                        <span>Nutrition Myths Debunked</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-green-600 hover:underline flex items-start">
                                        <BookOpen className="w-4 h-4 mt-1 mr-2 flex-shrink-0" />
                                        <span>Healthy Pantry Staples Checklist</span>
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