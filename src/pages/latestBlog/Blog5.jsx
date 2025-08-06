import { useEffect, useState } from "react"
import { User, Calendar, Clock, Leaf, Zap, Soup, Milk, Pizza, Blend, Circle, Heart } from "lucide-react"

export default function BoostVeggieIntake() {
    const [email, setEmail] = useState("")
    // const [activeTab, useState] = useState("Tips")
    const [activeTab, setActiveTab] = useState("Tips")

    const handleEmailSubmit = (e) => {
        e.preventDefault()
        console.log("Email submitted:", email)
        setEmail("")
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const tabs = ["Tips", "Recipes", "Nutrition", "FAQs"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
                                Lifestyle
                            </span>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                10 Ways to Boost Your Veggie Intake Without Salads
                            </h1>

                            {/* Meta Information */}
                            <div className="flex flex-wrap items-center gap-4 text-gray-500 mb-6">
                                <div className="flex items-center">
                                    <User className="w-4 h-4 mr-1" />
                                    <span className="text-sm">By Nutrition Team</span>
                                </div>
                                <div className="flex items-center">
                                    <Calendar className="w-4 h-4 mr-1" />
                                    <span className="text-sm">May 10, 2024</span>
                                </div>
                                <div className="flex items-center">
                                    <Clock className="w-4 h-4 mr-1" />
                                    <span className="text-sm">7 min read</span>
                                </div>
                            </div>

                            {/* Featured Image */}
                            <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
                                <img
                                    src="/mature-female-holding-green-smoothie-732-549-feature-thumb.jpg"
                                    alt="Woman holding a green smoothie"
                                    className="w-full h-auto object-cover"
                                    style={{ maxHeight: '500px' }}
                                />
                            </div>

                            {/* Introduction */}
                            <div className="prose max-w-none mb-12">
                                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                    Eating more vegetables is one of the best things you can do for your health, but if you're tired of salads or simply don't enjoy them, you're not alone. The good news? There are countless creative, delicious ways to increase your vegetable consumption without ever touching a leafy green. From breakfast to dessert, we'll show you how to sneak more veggies into every meal.
                                </p>

                                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                        <Zap className="w-5 h-5 text-blue-600 mr-2" />
                                        Why This Matters
                                    </h3>
                                    <p className="text-gray-700">
                                        According to the CDC, only <strong>1 in 10 adults</strong> eat enough fruits and vegetables. Increasing your veggie intake can reduce chronic disease risk, improve gut health, boost energy levels, and even enhance mental clarity.
                                    </p>
                                </div>
                            </div>

                            {/* Main Content Sections */}
                            <div className="prose max-w-none">
                                {/* Section 1 */}
                                <section className="mb-12">
                                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                        <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">1</span>
                                        Blend Them Into Smoothies
                                    </h2>

                                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                                        <div>
                                            <p className="text-gray-700 mb-4">
                                                Green smoothies are an obvious choice, but you can add vegetables to virtually any smoothie without compromising taste. The sweetness of fruits masks the flavor of most veggies.
                                            </p>
                                            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                                                <li><strong>Spinach or kale</strong> - virtually tasteless when blended with fruits</li>
                                                <li><strong>Cooked cauliflower</strong> - adds creaminess</li>
                                                <li><strong>Zucchini</strong> - mild flavor and adds thickness</li>
                                                <li><strong>Cooked beets</strong> - beautiful color and natural sweetness</li>
                                                <li><strong>Avocado</strong> - creamy texture and healthy fats</li>
                                            </ul>
                                        </div>
                                        <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                                            <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center">
                                                <Milk className="w-5 h-5 text-green-600 mr-2" />
                                                Pro Smoothie Recipe
                                            </h3>
                                            <p className="text-gray-700 mb-2">
                                                <strong>Chocolate Zucchini Smoothie:</strong>
                                            </p>
                                            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                                                <li>1 frozen banana</li>
                                                <li>1/2 cup chopped raw zucchini</li>
                                                <li>1 tbsp cocoa powder</li>
                                                <li>1 tbsp almond butter</li>
                                                <li>1 cup almond milk</li>
                                                <li>Handful of spinach (optional)</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="overflow-x-auto mb-6">
                                        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vegetable</th>
                                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount per Smoothie</th>
                                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Best Flavor Pairings</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200">
                                                <tr>
                                                    <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Spinach</td>
                                                    <td className="px-4 py-3 whitespace-nowrap">1-2 cups</td>
                                                    <td className="px-4 py-3">Banana, mango, pineapple</td>
                                                </tr>
                                                <tr className="bg-gray-50">
                                                    <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Cauliflower (cooked)</td>
                                                    <td className="px-4 py-3 whitespace-nowrap">1/2 cup</td>
                                                    <td className="px-4 py-3">Vanilla, berries, peach</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Zucchini</td>
                                                    <td className="px-4 py-3 whitespace-nowrap">1/2 medium</td>
                                                    <td className="px-4 py-3">Chocolate, peanut butter, banana</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </section>

                                {/* Section 2 */}
                                <section className="mb-12">
                                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                        <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">2</span>
                                        Make Vegetable-Based Soups
                                    </h2>

                                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                                        <div>
                                            <p className="text-gray-700 mb-4">
                                                Soups are the ultimate vehicle for vegetables. Pureed soups especially can pack in multiple servings without you even noticing.
                                            </p>
                                            <p className="text-gray-700 mb-4">
                                                <strong>Creamy vegetable soups</strong> don't actually need cream. Blend cooked vegetables with broth and seasonings for luxurious texture.
                                            </p>
                                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                                                <p className="text-gray-700">
                                                    <strong>Tip:</strong> Roast vegetables before adding to soup for deeper flavor. This works especially well for cauliflower, carrots, and butternut squash.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="bg-orange-50 p-4 rounded-lg border border-orange-100">
                                            <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center">
                                                <Soup className="w-5 h-5 text-orange-600 mr-2" />
                                                Quick Soup Ideas
                                            </h3>
                                            <ul className="list-disc list-inside text-gray-700 text-sm space-y-2">
                                                <li><strong>Creamy cauliflower:</strong> Blend cooked cauliflower with garlic, vegetable broth, and nutritional yeast</li>
                                                <li><strong>Roasted red pepper:</strong> Blend roasted peppers with tomatoes and basil</li>
                                                <li><strong>Broccoli cheddar:</strong> Puree cooked broccoli with potato for thickness, then add shredded cheese</li>
                                            </ul>
                                        </div>
                                    </div>
                                </section>

                                {/* Section 3 */}
                                <section className="mb-12">
                                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                        <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">3</span>
                                        Veggie-ify Your Favorite Dishes
                                    </h2>

                                    <p className="text-gray-700 mb-6">
                                        Almost any dish can be modified to include more vegetables. Here's how to upgrade common meals:
                                    </p>

                                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                                        <div className="border border-gray-200 rounded-lg p-4">
                                            <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center">
                                                <Pizza className="w-5 h-5 text-red-500 mr-2" />
                                                Pizza
                                            </h3>
                                            <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                                                <li>Use cauliflower crust or add pureed cauliflower to the dough</li>
                                                <li>Top with roasted vegetables instead of just cheese</li>
                                                <li>Make a veggie-loaded sauce with pureed carrots or butternut squash</li>
                                            </ul>
                                        </div>
                                        <div className="border border-gray-200 rounded-lg p-4">
                                            <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center">
                                                <Blend className="w-5 h-5 text-blue-500 mr-2" />
                                                Pasta
                                            </h3>
                                            <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                                                <li>Use zucchini noodles or mix them with regular pasta</li>
                                                <li>Add pureed butternut squash to mac and cheese</li>
                                                <li>Mix finely chopped mushrooms into meat sauces</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="bg-green-50 p-4 rounded-lg mb-6">
                                        <h3 className="font-bold text-lg text-gray-900 mb-3">The 50/50 Rule</h3>
                                        <p className="text-gray-700">
                                            Make it a habit to ensure <strong>half your plate</strong> is vegetables at every meal. This doesn't mean salad - it could be roasted veggies, stir-fry, soup, or any other preparation you enjoy.
                                        </p>
                                    </div>
                                </section>

                                {/* Section 4 */}
                                <section className="mb-12">
                                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                        <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">4</span>
                                        Snack on Vegetables Without Even Trying
                                    </h2>

                                    <p className="text-gray-700 mb-4">
                                        Smart snacking can add several servings of vegetables to your day without effort:
                                    </p>

                                    <div className="grid md:grid-cols-3 gap-4 mb-6">
                                        <div className="border border-gray-200 rounded-lg p-4 text-center">
                                            <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                                                <Circle className="w-6 h-6 text-green-600" />
                                            </div>
                                            <h4 className="font-bold text-gray-900">Guacamole + Veggies</h4>
                                            <p className="text-gray-700 text-sm">Use jicama or cucumber slices instead of chips</p>
                                        </div>
                                        <div className="border border-gray-200 rounded-lg p-4 text-center">
                                            <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                                                <Soup className="w-6 h-6 text-orange-600" />
                                            </div>
                                            <h4 className="font-bold text-gray-900">Vegetable Soup</h4>
                                            <p className="text-gray-700 text-sm">Keep single servings in freezer for easy snacks</p>
                                        </div>
                                        <div className="border border-gray-200 rounded-lg p-4 text-center">
                                            <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                                                <Leaf className="w-6 h-6 text-purple-600" />
                                            </div>
                                            <h4 className="font-bold text-gray-900">Kale Chips</h4>
                                            <p className="text-gray-700 text-sm">Baked with olive oil and sea salt</p>
                                        </div>
                                    </div>
                                </section>

                                {/* Section 5-10 would continue similarly... */}

                                {/* Final Section */}
                                <section className="mb-12">
                                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Putting It All Together</h2>

                                    <p className="text-gray-700 mb-6">
                                        Increasing your vegetable intake doesn't require drastic changes. By implementing just a few of these strategies, you can easily double or triple your daily vegetable consumption without eating a single salad.
                                    </p>

                                    <div className="bg-green-50 p-6 rounded-lg">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                            <Heart className="w-8 h-8 text-green-600 mr-3" />
                                            7-Day Veggie Boost Challenge
                                        </h3>
                                        <p className="text-gray-700 mb-4">
                                            Try this simple plan to gradually increase your vegetable intake:
                                        </p>
                                        <div className="overflow-x-auto">
                                            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                                <thead className="bg-gray-50">
                                                    <tr>
                                                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Day</th>
                                                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Focus</th>
                                                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action Step</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200">
                                                    <tr>
                                                        <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">1</td>
                                                        <td className="px-4 py-3 whitespace-nowrap">Breakfast</td>
                                                        <td className="px-4 py-3">Add spinach to your morning smoothie or eggs</td>
                                                    </tr>
                                                    <tr className="bg-gray-50">
                                                        <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">2</td>
                                                        <td className="px-4 py-3 whitespace-nowrap">Snacks</td>
                                                        <td className="px-4 py-3">Replace one processed snack with veggie sticks and hummus</td>
                                                    </tr>
                                                    {/* More days... */}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </section>

                                {/* Conclusion */}
                                <section className="mb-12">
                                    <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Final Thoughts</h3>
                                        <p className="text-gray-700 mb-4">
                                            Remember that all vegetables count, and there's no "right" way to eat them. Whether you prefer them roasted, blended, or hidden in your favorite dishes, what matters most is that you're eating them regularly.
                                        </p>
                                        <p className="text-gray-700">
                                            Start with one or two strategies that appeal to you most, and gradually incorporate more as you get comfortable. Your taste buds will adapt over time, and you might just discover new favorite foods along the way.
                                        </p>
                                    </div>
                                </section>
                            </div>
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
                                            Dr. Sarah Johnson, RDN
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600 mb-1">
                                        — Written by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            Nutrition Team
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
                        <div className="bg-green-50 rounded-lg p-6 mb-8">
                            <div className="mb-4">
                                <h3 className="text-sm font-bold text-green-800 uppercase tracking-wide mb-2">HEALTH NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get more veggie-packed recipes</h4>
                                <p className="text-gray-700 text-sm">
                                    Weekly meal ideas and nutrition tips to help you eat more vegetables effortlessly.
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

                        {/* Popular Recipes */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Veggie-Packed Recipes</h3>
                            <div className="space-y-4">
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/smoothie.jpg" alt="Green smoothie" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-green-600 transition-colors">Hidden Veggie Smoothie</h4>
                                            <p className="text-sm text-gray-600">4.9 ★ (87 reviews)</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/soup.jpg" alt="Vegetable soup" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-green-600 transition-colors">Creamy Cauliflower Soup</h4>
                                            <p className="text-sm text-gray-600">4.7 ★ (64 reviews)</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Vegetable Conversion Chart */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Veggie Swap Guide</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span className="font-medium">Instead of:</span>
                                    <span className="font-medium">Try:</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Pasta</span>
                                    <span className="text-green-600">Zucchini noodles</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Rice</span>
                                    <span className="text-green-600">Riced cauliflower</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Mashed potatoes</span>
                                    <span className="text-green-600">Mashed cauliflower</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Chips</span>
                                    <span className="text-green-600">Kale chips</span>
                                </div>
                            </div>
                        </div>

                        {/* Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">More Resources</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-green-600 hover:underline">How to Make Vegetables Taste Amazing</a>
                                </li>
                                <li>
                                    <a href="#" className="text-green-600 hover:underline">The Science of Vegetable Nutrition</a>
                                </li>
                                <li>
                                    <a href="#" className="text-green-600 hover:underline">Meal Prep with Vegetables</a>
                                </li>
                                <li>
                                    <a href="#" className="text-green-600 hover:underline">Vegetable Storage Guide</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}