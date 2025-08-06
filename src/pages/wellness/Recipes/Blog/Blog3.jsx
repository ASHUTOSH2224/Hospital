"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Clock, Flame, Heart, Shield, Star, ChefHat, Salad, Soup } from "lucide-react"

export default function AntiInflammatoryRecipesGuide() {
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

    const tabs = ["Overview", "Breakfast", "Lunch", "Dinner", "Snacks"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                The Best Anti-Inflammatory Recipes for All Skill Levels
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
                                <span className="text-sm mr-4">Updated on June 15, 2024</span>
                                <Clock className="w-4 h-4 mr-1" />
                                <span className="text-sm">6 min read</span>
                            </div>

                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                These anti-inflammatory recipes help reduce chronic inflammation and support your immune system. Chronic inflammation is linked to numerous health conditions including heart disease, diabetes, and arthritis. The right diet can be a powerful tool in managing inflammation naturally.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=500&fit=crop"
                                    alt="Colorful anti-inflammatory foods including vegetables and fruits"
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
                                    <li>Anti-inflammatory diets emphasize whole, unprocessed foods</li>
                                    <li>Omega-3 fatty acids and antioxidants are particularly beneficial</li>
                                    <li>Simple recipe modifications can make any meal anti-inflammatory</li>
                                    <li>Herbs and spices like turmeric and ginger have potent effects</li>
                                    <li>Meal planning helps maintain an anti-inflammatory eating pattern</li>
                                </ul>
                            </div>

                            {/* Why Anti-Inflammatory Eating Matters */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Flame className="w-8 h-8 text-blue-600 mr-2" />
                                    The Science Behind Anti-Inflammatory Eating
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Inflammation is your body's natural response to injury or infection, but chronic inflammation can damage healthy cells. According to a <a href="#" className="text-blue-600 hover:underline">2023 meta-analysis in the Journal of Nutritional Science</a>, dietary patterns significantly influence inflammatory markers:
                                </p>

                                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                                    <li>CRP (C-reactive protein) reduced by 0.5-3.0 mg/L with anti-inflammatory diets</li>
                                    <li>IL-6 (interleukin-6) decreased by 15-30% in clinical trials</li>
                                    <li>TNF-alpha (tumor necrosis factor) lowered by 10-25%</li>
                                </ul>

                                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">What Makes a Food Anti-Inflammatory?</h3>
                                    <p className="text-gray-700">
                                        Anti-inflammatory foods are typically rich in antioxidants, polyphenols, and omega-3 fatty acids. They help neutralize free radicals and reduce oxidative stress in the body. Processing and cooking methods can significantly impact these beneficial compounds.
                                    </p>
                                </div>
                            </section>

                            {/* Top Anti-Inflammatory Ingredients */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Heart className="w-8 h-8 text-blue-600 mr-2" />
                                    Top 15 Anti-Inflammatory Ingredients
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    These powerhouse ingredients form the foundation of anti-inflammatory cooking. Incorporate them regularly into your meals for maximum benefits.
                                </p>

                                {/* Ingredients Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ingredient</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Key Compounds</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Inflammation Rating*</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Best Uses</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            {/* Row 1 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Turmeric</td>
                                                <td className="px-4 py-3">Curcumin, turmerones</td>
                                                <td className="px-4 py-3 whitespace-nowrap">★★★★★</td>
                                                <td className="px-4 py-3">Curries, golden milk, dressings</td>
                                            </tr>
                                            {/* Row 2 */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Fatty Fish</td>
                                                <td className="px-4 py-3">Omega-3s, EPA/DHA</td>
                                                <td className="px-4 py-3 whitespace-nowrap">★★★★★</td>
                                                <td className="px-4 py-3">Grilling, baking, salads</td>
                                            </tr>
                                            {/* Row 3 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Berries</td>
                                                <td className="px-4 py-3">Anthocyanins, quercetin</td>
                                                <td className="px-4 py-3 whitespace-nowrap">★★★★☆</td>
                                                <td className="px-4 py-3">Smoothies, desserts, toppings</td>
                                            </tr>
                                            {/* Row 4 */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Leafy Greens</td>
                                                <td className="px-4 py-3">Vitamin K, lutein</td>
                                                <td className="px-4 py-3 whitespace-nowrap">★★★★☆</td>
                                                <td className="px-4 py-3">Salads, sautéed, soups</td>
                                            </tr>
                                            {/* Row 5 */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Extra Virgin Olive Oil</td>
                                                <td className="px-4 py-3">Oleocanthal, polyphenols</td>
                                                <td className="px-4 py-3 whitespace-nowrap">★★★★★</td>
                                                <td className="px-4 py-3">Dressings, low-heat cooking</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <p className="text-gray-700 mb-6 text-sm">
                                    *Inflammation Rating: Based on clinical evidence of anti-inflammatory effects (★ = mild, ★★★★★ = strong)
                                </p>

                                {/* Top 3 Highlights */}
                                <div className="grid md:grid-cols-3 gap-6 mb-8">
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">1</span>
                                            Turmeric - The Golden Healer
                                        </h3>
                                        <p className="text-gray-700">
                                            Curcumin in turmeric has been shown in studies to be as effective as some anti-inflammatory drugs for reducing arthritis pain, without the side effects. Combine with black pepper to enhance absorption by 2000%.
                                        </p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">2</span>
                                            Wild-Caught Salmon
                                        </h3>
                                        <p className="text-gray-700">
                                            Rich in omega-3 fatty acids EPA and DHA, which reduce inflammatory eicosanoids and cytokines. Aim for 2-3 servings per week. Wild salmon has higher omega-3 content than farmed.
                                        </p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">3</span>
                                            Extra Virgin Olive Oil
                                        </h3>
                                        <p className="text-gray-700">
                                            Contains oleocanthal with similar anti-inflammatory properties to ibuprofen. Use cold-pressed, unfiltered varieties for maximum polyphenol content. Store in dark bottles away from heat.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Breakfast Recipes */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <ChefHat className="w-8 h-8 text-blue-600 mr-2" />
                                    Anti-Inflammatory Breakfast Recipes
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Start your day with these nutrient-packed breakfast options that fight inflammation while providing sustained energy.
                                </p>

                                {/* Recipe 1 */}
                                <div className="border border-gray-200 rounded-lg overflow-hidden mb-8">
                                    <div className="bg-blue-600 px-4 py-2">
                                        <h3 className="font-bold text-white">Turmeric Golden Milk Overnight Oats</h3>
                                    </div>
                                    <div className="p-4">
                                        <div className="mb-4">
                                            <div className="flex items-center text-sm text-gray-600 mb-2">
                                                <Clock className="w-4 h-4 mr-1" />
                                                <span className="mr-4">Prep: 5 min | Cook: 0 min</span>
                                                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Easy</span>
                                            </div>
                                            <div className="flex flex-wrap gap-2 mb-3">
                                                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Vegetarian</span>
                                                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Gluten-Free</span>
                                                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Dairy-Free Option</span>
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-3 gap-6">
                                            <div className="md:col-span-1">
                                                <h4 className="font-medium text-gray-900 mb-2">Ingredients:</h4>
                                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                                    <li>½ cup rolled oats</li>
                                                    <li>1 tsp turmeric powder</li>
                                                    <li>¼ tsp black pepper</li>
                                                    <li>1 tsp cinnamon</li>
                                                    <li>1 cup almond milk</li>
                                                    <li>1 tbsp chia seeds</li>
                                                    <li>1 tsp honey (optional)</li>
                                                </ul>
                                            </div>
                                            <div className="md:col-span-2">
                                                <h4 className="font-medium text-gray-900 mb-2">Instructions:</h4>
                                                <ol className="list-decimal list-inside text-gray-700 space-y-2">
                                                    <li>Combine all ingredients in a jar or container with a lid</li>
                                                    <li>Stir well to combine</li>
                                                    <li>Refrigerate overnight (or at least 4 hours)</li>
                                                    <li>Stir before serving, add toppings if desired</li>
                                                    <li>Enjoy cold or gently warmed</li>
                                                </ol>
                                                <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-400 p-3">
                                                    <p className="text-gray-700 text-sm">
                                                        <strong>Tip:</strong> For extra anti-inflammatory benefits, top with walnuts and blueberries before serving.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Recipe 2 */}
                                <div className="border border-gray-200 rounded-lg overflow-hidden mb-8">
                                    <div className="bg-blue-600 px-4 py-2">
                                        <h3 className="font-bold text-white">Anti-Inflammatory Smoothie Bowl</h3>
                                    </div>
                                    <div className="p-4">
                                        <div className="mb-4">
                                            <div className="flex items-center text-sm text-gray-600 mb-2">
                                                <Clock className="w-4 h-4 mr-1" />
                                                <span className="mr-4">Prep: 10 min | Cook: 0 min</span>
                                                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Easy</span>
                                            </div>
                                            <div className="flex flex-wrap gap-2 mb-3">
                                                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Vegan</span>
                                                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Gluten-Free</span>
                                                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Dairy-Free</span>
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-3 gap-6">
                                            <div className="md:col-span-1">
                                                <h4 className="font-medium text-gray-900 mb-2">Ingredients:</h4>
                                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                                    <li>1 cup frozen mixed berries</li>
                                                    <li>½ banana</li>
                                                    <li>1 tbsp flaxseeds</li>
                                                    <li>1 tsp ginger, grated</li>
                                                    <li>½ cup spinach</li>
                                                    <li>¾ cup almond milk</li>
                                                    <li>Toppings: walnuts, coconut, chia seeds</li>
                                                </ul>
                                            </div>
                                            <div className="md:col-span-2">
                                                <h4 className="font-medium text-gray-900 mb-2">Instructions:</h4>
                                                <ol className="list-decimal list-inside text-gray-700 space-y-2">
                                                    <li>Add all ingredients except toppings to blender</li>
                                                    <li>Blend until smooth and creamy</li>
                                                    <li>Pour into bowl and add toppings</li>
                                                    <li>Enjoy immediately</li>
                                                </ol>
                                                <div className="mt-4 bg-blue-50 border-l-4 border-blue-400 p-3">
                                                    <p className="text-gray-700 text-sm">
                                                        <strong>Nutrition Note:</strong> This bowl provides 8g fiber, 150% DV vitamin C, and 3g omega-3s.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Lunch Recipes */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Salad className="w-8 h-8 text-blue-600 mr-2" />
                                    Anti-Inflammatory Lunch Recipes
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    These lunch options are packed with inflammation-fighting ingredients while being satisfying and delicious.
                                </p>

                                {/* Recipe 1 */}
                                <div className="border border-gray-200 rounded-lg overflow-hidden mb-8">
                                    <div className="bg-blue-600 px-4 py-2">
                                        <h3 className="font-bold text-white">Quinoa & Roasted Vegetable Power Bowl</h3>
                                    </div>
                                    <div className="p-4">
                                        <div className="mb-4">
                                            <div className="flex items-center text-sm text-gray-600 mb-2">
                                                <Clock className="w-4 h-4 mr-1" />
                                                <span className="mr-4">Prep: 15 min | Cook: 25 min</span>
                                                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Moderate</span>
                                            </div>
                                            <div className="flex flex-wrap gap-2 mb-3">
                                                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Vegan</span>
                                                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Gluten-Free</span>
                                                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">High Fiber</span>
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-3 gap-6">
                                            <div className="md:col-span-1">
                                                <h4 className="font-medium text-gray-900 mb-2">Ingredients:</h4>
                                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                                    <li>1 cup quinoa, rinsed</li>
                                                    <li>2 cups mixed vegetables (sweet potato, broccoli, red onion)</li>
                                                    <li>2 tbsp olive oil</li>
                                                    <li>1 tsp turmeric</li>
                                                    <li>½ tsp cumin</li>
                                                    <li>2 cups baby spinach</li>
                                                    <li>¼ cup tahini dressing</li>
                                                    <li>2 tbsp pumpkin seeds</li>
                                                </ul>
                                            </div>
                                            <div className="md:col-span-2">
                                                <h4 className="font-medium text-gray-900 mb-2">Instructions:</h4>
                                                <ol className="list-decimal list-inside text-gray-700 space-y-2">
                                                    <li>Preheat oven to 400°F (200°C)</li>
                                                    <li>Cook quinoa according to package instructions</li>
                                                    <li>Toss vegetables with olive oil and spices, roast for 20-25 minutes</li>
                                                    <li>Assemble bowls with quinoa, spinach, roasted vegetables</li>
                                                    <li>Drizzle with tahini dressing and sprinkle with seeds</li>
                                                </ol>
                                                <div className="mt-4 bg-green-50 border-l-4 border-green-400 p-3">
                                                    <p className="text-gray-700 text-sm">
                                                        <strong>Meal Prep Tip:</strong> Make a double batch of quinoa and roasted vegetables for easy lunches throughout the week.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Dinner Recipes */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Soup className="w-8 h-8 text-blue-600 mr-2" />
                                    Anti-Inflammatory Dinner Recipes
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    End your day with these comforting yet health-promoting dinner recipes designed to reduce inflammation.
                                </p>

                                {/* Recipe 1 */}
                                <div className="border border-gray-200 rounded-lg overflow-hidden mb-8">
                                    <div className="bg-blue-600 px-4 py-2">
                                        <h3 className="font-bold text-white">Salmon with Turmeric Coconut Sauce</h3>
                                    </div>
                                    <div className="p-4">
                                        <div className="mb-4">
                                            <div className="flex items-center text-sm text-gray-600 mb-2">
                                                <Clock className="w-4 h-4 mr-1" />
                                                <span className="mr-4">Prep: 10 min | Cook: 15 min</span>
                                                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Easy</span>
                                            </div>
                                            <div className="flex flex-wrap gap-2 mb-3">
                                                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">High Protein</span>
                                                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Dairy-Free</span>
                                                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Rich in Omega-3s</span>
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-3 gap-6">
                                            <div className="md:col-span-1">
                                                <h4 className="font-medium text-gray-900 mb-2">Ingredients:</h4>
                                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                                    <li>2 salmon fillets (6oz each)</li>
                                                    <li>1 tbsp olive oil</li>
                                                    <li>1 shallot, minced</li>
                                                    <li>2 garlic cloves, minced</li>
                                                    <li>1 tbsp fresh ginger, grated</li>
                                                    <li>1 tbsp turmeric powder</li>
                                                    <li>1 can (13.5oz) coconut milk</li>
                                                    <li>1 cup spinach</li>
                                                    <li>1 lime, juiced</li>
                                                </ul>
                                            </div>
                                            <div className="md:col-span-2">
                                                <h4 className="font-medium text-gray-900 mb-2">Instructions:</h4>
                                                <ol className="list-decimal list-inside text-gray-700 space-y-2">
                                                    <li>Heat oil in large skillet over medium heat</li>
                                                    <li>Season salmon with salt and sear 3-4 minutes per side, then remove</li>
                                                    <li>In same skillet, sauté shallot, garlic, and ginger until fragrant</li>
                                                    <li>Add turmeric and cook 30 seconds</li>
                                                    <li>Pour in coconut milk, bring to simmer</li>
                                                    <li>Return salmon to skillet, cook 5 minutes</li>
                                                    <li>Stir in spinach until wilted</li>
                                                    <li>Finish with lime juice, serve over cauliflower rice</li>
                                                </ol>
                                                <div className="mt-4 bg-blue-50 border-l-4 border-blue-400 p-3">
                                                    <p className="text-gray-700 text-sm">
                                                        <strong>Serving Suggestion:</strong> Pair with roasted Brussels sprouts for added anti-inflammatory benefits.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Meal Planning Section */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">7-Day Anti-Inflammatory Meal Plan</h2>

                                <p className="text-gray-700 mb-6">
                                    This sample meal plan incorporates a variety of anti-inflammatory foods to maximize benefits. Adjust portions based on your individual needs.
                                </p>

                                <div className="overflow-x-auto">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Day</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Breakfast</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lunch</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dinner</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            {/* Monday */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Monday</td>
                                                <td className="px-4 py-3">Turmeric oatmeal with walnuts</td>
                                                <td className="px-4 py-3">Quinoa salad with roasted vegetables</td>
                                                <td className="px-4 py-3">Baked salmon with steamed greens</td>
                                            </tr>
                                            {/* Tuesday */}
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Tuesday</td>
                                                <td className="px-4 py-3">Berry smoothie with flaxseeds</td>
                                                <td className="px-4 py-3">Lentil soup with kale</td>
                                                <td className="px-4 py-3">Chicken curry with cauliflower rice</td>
                                            </tr>
                                            {/* Wednesday */}
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Wednesday</td>
                                                <td className="px-4 py-3">Chia pudding with almonds</td>
                                                <td className="px-4 py-3">Tuna salad with mixed greens</td>
                                                <td className="px-4 py-3">Stir-fried tofu with broccoli</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    Adopting an anti-inflammatory diet doesn't require drastic changes overnight. Start by incorporating one or two of these recipes each week and gradually build your repertoire. Notice how your body responds—many people report reduced joint pain, improved digestion, and increased energy within weeks.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    Remember that consistency matters more than perfection. Even small dietary changes can lead to significant reductions in inflammatory markers over time.
                                </p>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "Food should be your first medicine. What you eat every day has a more profound impact on your health than any pill you could take."
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
                                            Dr. Emily Wilson, RD
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600 mb-1">
                                        — Written by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            Jessica Martinez
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
                                <h3 className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-2">HEALTH NEWSLETTER</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Get anti-inflammatory recipes</h4>
                                <p className="text-gray-700 text-sm">
                                    Weekly meal plans, shopping lists, and nutrition tips to reduce inflammation.
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

                        {/* Popular Recipes */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">More Anti-Inflammatory Recipes</h3>
                            <div className="space-y-4">
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=200&h=200&fit=crop" alt="Healthy bowl" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Turmeric Lentil Soup</h4>
                                            <p className="text-sm text-gray-600">4.7 ★ (98 reviews)</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=200&h=200&fit=crop" alt="Healthy bowl" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Anti-Inflammatory Buddha Bowl</h4>
                                            <p className="text-sm text-gray-600">4.9 ★ (142 reviews)</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Conversion Chart */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Inflammatory vs Anti-Inflammatory</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span className="font-medium text-red-600">Avoid:</span>
                                    <span className="font-medium text-green-600">Choose Instead:</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span className="text-red-600">White bread</span>
                                    <span className="text-green-600">Sprouted grain bread</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span className="text-red-600">Soda</span>
                                    <span className="text-green-600">Herbal tea</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span className="text-red-600">Processed meats</span>
                                    <span className="text-green-600">Wild-caught fish</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-red-600">Vegetable oils</span>
                                    <span className="text-green-600">Extra virgin olive oil</span>
                                </div>
                            </div>
                        </div>

                        {/* Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Further Reading</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">The Science of Anti-Inflammatory Diets</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Top 10 Spices for Inflammation</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Gut Health and Inflammation</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Meal Prep Guide for Beginners</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}