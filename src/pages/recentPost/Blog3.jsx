"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Salad, Utensils, Leaf, Plus, Check } from "lucide-react"

export default function CreativeVegetableWays() {
  const [email, setEmail] = useState("")
  const [activeTab, setActiveTab] = useState("Overview")

  const handleEmailSubmit = (e) => {
    e.preventDefault()
    console.log("Email submitted:", email)
    setEmail("")
  }

          useEffect(() => {
      // Scroll to top when the component mounts
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
              <div className="flex items-center gap-2 text-sm text-green-600 mb-4">
                <Leaf className="w-4 h-4" />
                <span>NUTRITION & DIET</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                17 Creative Ways to Eat More Vegetables
              </h1>

              {/* Navigation Tabs */}
              <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-200">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                      activeTab === tab
                        ? "border-green-500 text-green-600"
                        : "border-transparent text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Author and Date */}
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span>By Nutrition Team</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>Updated on May 8, 2024</span>
                </div>
              </div>

              {/* Intro Text */}
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Eating more vegetables is one of the simplest yet most powerful things you can do for your health. 
                Vegetables are packed with essential vitamins, minerals, fiber, and antioxidants that can help reduce 
                your risk of chronic diseases. Yet most people don't eat enough. Here are 17 delicious, creative ways 
                to sneak more veggies into every meal.
              </p>

              {/* Main Image */}
              <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/soup-kitchen-cooking-732x549-thumbnail-732x549.jpg"
                  alt="Colorful assortment of fresh vegetables being prepared in a kitchen"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Key Takeaways */}
              <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-8 rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Check className="text-green-600 w-5 h-5" />
                  Key Takeaways
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Check className="text-green-500 w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Vegetables should make up half your plate at each meal according to dietary guidelines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-green-500 w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Creative preparation methods can make vegetables more appealing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-green-500 w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Different colored vegetables provide different nutrients</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-green-500 w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Adding vegetables to familiar dishes is an easy way to increase intake</span>
                  </li>
                </ul>
              </div>

              {/* Why Eat More Vegetables Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why You Should Eat More Vegetables</h2>
                <p className="text-gray-700 mb-4">
                  According to the <a href="#" className="text-blue-600 hover:underline">CDC</a>, only 1 in 10 adults 
                  eat enough fruits and vegetables. The recommended amount is 2-3 cups of vegetables per day for most 
                  adults, yet the average intake is just 1.4 cups.
                </p>
                <p className="text-gray-700 mb-6">
                  Vegetables are nutritional powerhouses that offer numerous health benefits:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-bold text-blue-800 mb-2">Nutrient Density</h3>
                    <p className="text-gray-700">
                      Vegetables provide essential vitamins (A, C, K), minerals (potassium, magnesium), and fiber 
                      with very few calories.
                    </p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h3 className="font-bold text-purple-800 mb-2">Disease Prevention</h3>
                    <p className="text-gray-700">
                      Regular vegetable consumption is linked to lower risks of heart disease, stroke, and certain 
                      cancers.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-bold text-green-800 mb-2">Gut Health</h3>
                    <p className="text-gray-700">
                      The fiber in vegetables feeds beneficial gut bacteria, supporting digestion and immunity.
                    </p>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h3 className="font-bold text-yellow-800 mb-2">Weight Management</h3>
                    <p className="text-gray-700">
                      High water and fiber content helps you feel full longer with fewer calories.
                    </p>
                  </div>
                </div>

                <div className="overflow-x-auto mb-8">
                  <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vegetable Color</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Key Nutrients</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Examples</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-3 whitespace-nowrap font-medium text-red-600">Red</td>
                        <td className="px-4 py-3">Lycopene, anthocyanins</td>
                        <td className="px-4 py-3">Tomatoes, red peppers, radishes</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3 whitespace-nowrap font-medium text-orange-600">Orange/Yellow</td>
                        <td className="px-4 py-3">Beta-carotene, vitamin C</td>
                        <td className="px-4 py-3">Carrots, sweet potatoes, squash</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 whitespace-nowrap font-medium text-green-600">Green</td>
                        <td className="px-4 py-3">Folate, vitamin K, lutein</td>
                        <td className="px-4 py-3">Spinach, broccoli, kale</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3 whitespace-nowrap font-medium text-purple-600">Blue/Purple</td>
                        <td className="px-4 py-3">Anthocyanins, resveratrol</td>
                        <td className="px-4 py-3">Eggplant, purple cabbage</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 whitespace-nowrap font-medium text-white bg-gray-800">White</td>
                        <td className="px-4 py-3">Allicin, quercetin</td>
                        <td className="px-4 py-3">Cauliflower, onions, mushrooms</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* 17 Creative Ways Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">17 Creative Ways to Eat More Vegetables</h2>
                
                {/* 1. Blend into Smoothies */}
                <div className="mb-8 p-6 bg-white border border-gray-100 rounded-xl shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 text-green-800 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Blend into Smoothies</h3>
                      <p className="text-gray-700 mb-4">
                        Add a handful of spinach or kale to your morning smoothie. The sweetness from fruits like 
                        bananas or berries masks the vegetable flavor while boosting nutrition. Other great options:
                      </p>
                      <ul className="list-disc list-inside text-gray-700 mb-4 ml-4 space-y-1">
                        <li>Cauliflower (adds creaminess)</li>
                        <li>Cooked sweet potato (for thickness)</li>
                        <li>Zucchini (mild flavor)</li>
                        <li>Beets (for color and sweetness)</li>
                      </ul>
                      <p className="text-gray-700">
                        <span className="font-semibold">Pro Tip:</span> Freeze chopped vegetables in portion sizes for 
                        easy smoothie additions.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2. Veggie-Packed Omelets */}
                <div className="mb-8 p-6 bg-white border border-gray-100 rounded-xl shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 text-green-800 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Veggie-Packed Omelets</h3>
                      <p className="text-gray-700 mb-4">
                        Start your day with an omelet loaded with vegetables. Some delicious combinations:
                      </p>
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div className="bg-yellow-50 p-3 rounded-lg">
                          <h4 className="font-bold text-yellow-800 mb-1">Mushroom & Spinach</h4>
                          <p className="text-sm text-gray-700">Sauté mushrooms with garlic, add fresh spinach at the end</p>
                        </div>
                        <div className="bg-red-50 p-3 rounded-lg">
                          <h4 className="font-bold text-red-800 mb-1">Tomato & Basil</h4>
                          <p className="text-sm text-gray-700">Cherry tomatoes with fresh basil and goat cheese</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg">
                          <h4 className="font-bold text-green-800 mb-1">Zucchini & Feta</h4>
                          <p className="text-sm text-gray-700">Grated zucchini with crumbled feta and dill</p>
                        </div>
                        <div className="bg-purple-50 p-3 rounded-lg">
                          <h4 className="font-bold text-purple-800 mb-1">Bell Pepper Medley</h4>
                          <p className="text-sm text-gray-700">Mixed bell peppers with onions and cheddar</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. Cauliflower Rice */}
                <div className="mb-8 p-6 bg-white border border-gray-100 rounded-xl shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 text-green-800 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Cauliflower Rice</h3>
                      <p className="text-gray-700 mb-4">
                        Riced cauliflower is a versatile substitute for grains that adds an extra serving of vegetables. 
                        Use it in:
                      </p>
                      <ul className="list-disc list-inside text-gray-700 mb-4 ml-4 space-y-1">
                        <li>Stir-fries instead of white rice</li>
                        <li>Fried "rice" dishes</li>
                        <li>As a base for grain bowls</li>
                        <li>In sushi rolls</li>
                      </ul>
                      <div className="bg-blue-50 p-4 rounded-lg mb-4">
                        <h4 className="font-bold text-blue-800 mb-2">Make Your Own:</h4>
                        <ol className="list-decimal list-inside text-gray-700 space-y-1">
                          <li>Cut cauliflower into florets</li>
                          <li>Pulse in food processor until rice-like texture</li>
                          <li>Sauté with a little oil for 5-7 minutes until tender</li>
                          <li>Season with salt, pepper, and herbs</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 4. Zucchini Noodles */}
                <div className="mb-8 p-6 bg-white border border-gray-100 rounded-xl shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 text-green-800 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold">4</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Zucchini Noodles (Zoodles)</h3>
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-1">
                          <p className="text-gray-700 mb-4">
                            Spiralized zucchini makes a great low-carb pasta alternative. Best preparation methods:
                          </p>
                          <ul className="list-disc list-inside text-gray-700 mb-4 ml-4 space-y-1">
                            <li><span className="font-semibold">Raw:</span> Great for cold noodle salads</li>
                            <li><span className="font-semibold">Sautéed:</span> 2-3 minutes for al dente texture</li>
                            <li><span className="font-semibold">Baked:</span> With sauce for a lasagna-like dish</li>
                          </ul>
                          <p className="text-gray-700">
                            Other vegetables that spiralize well: carrots, sweet potatoes, beets, and cucumbers.
                          </p>
                        </div>
                        <div className="bg-pink-50 p-4 rounded-lg flex-1">
                          <h4 className="font-bold text-pink-800 mb-2">Zoodle Serving Ideas</h4>
                          <ul className="text-gray-700 space-y-2">
                            <li className="flex items-start gap-2">
                              <Plus className="text-pink-500 w-4 h-4 mt-0.5 flex-shrink-0" />
                              <span>Pesto zoodles with cherry tomatoes</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Plus className="text-pink-500 w-4 h-4 mt-0.5 flex-shrink-0" />
                              <span>Pad Thai-style with peanut sauce</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Plus className="text-pink-500 w-4 h-4 mt-0.5 flex-shrink-0" />
                              <span>Garlic parmesan zoodles</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Plus className="text-pink-500 w-4 h-4 mt-0.5 flex-shrink-0" />
                              <span>With marinara and meatballs</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 5. Stuffed Vegetables */}
                <div className="mb-8 p-6 bg-white border border-gray-100 rounded-xl shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 text-green-800 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold">5</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Stuffed Vegetables</h3>
                      <p className="text-gray-700 mb-4">
                        Hollowed-out vegetables make perfect edible containers for delicious fillings. Try stuffing:
                      </p>
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div className="border border-gray-200 rounded-lg p-3">
                          <h4 className="font-bold text-gray-900 mb-1">Bell Peppers</h4>
                          <p className="text-sm text-gray-700">With quinoa, black beans, corn, and cheese</p>
                        </div>
                        <div className="border border-gray-200 rounded-lg p-3">
                          <h4 className="font-bold text-gray-900 mb-1">Portobello Mushrooms</h4>
                          <p className="text-sm text-gray-700">With spinach, breadcrumbs, and parmesan</p>
                        </div>
                        <div className="border border-gray-200 rounded-lg p-3">
                          <h4 className="font-bold text-gray-900 mb-1">Zucchini Boats</h4>
                          <p className="text-sm text-gray-700">With ground turkey, marinara, and mozzarella</p>
                        </div>
                        <div className="border border-gray-200 rounded-lg p-3">
                          <h4 className="font-bold text-gray-900 mb-1">Tomatoes</h4>
                          <p className="text-sm text-gray-700">With tuna salad or herbed ricotta</p>
                        </div>
                      </div>
                      <p className="text-gray-700">
                        <span className="font-semibold">Tip:</span> Bake stuffed vegetables at 375°F for 20-30 minutes 
                        until tender.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Remaining ways (6-17) would follow similar structure */}
                <div className="text-center py-6">
                  <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200">
                    Load More Ways (+12)
                  </button>
                </div>
              </section>

              {/* Meal Planning Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Vegetable-Focused Meal Planning</h2>
                <p className="text-gray-700 mb-6">
                  Planning meals around vegetables rather than treating them as an afterthought can significantly 
                  increase your daily intake. Here's a sample day of vegetable-rich eating:
                </p>
                
                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Sample Vegetable-Focused Day</h3>
                  <div className="space-y-4">
                    <div className="border-b border-gray-200 pb-4">
                      <h4 className="font-bold text-green-700 mb-2">Breakfast</h4>
                      <p className="text-gray-700">Spinach and mushroom omelet with avocado toast</p>
                      <p className="text-sm text-gray-500">~2 servings vegetables</p>
                    </div>
                    <div className="border-b border-gray-200 pb-4">
                      <h4 className="font-bold text-green-700 mb-2">Morning Snack</h4>
                      <p className="text-gray-700">Carrot and celery sticks with hummus</p>
                      <p className="text-sm text-gray-500">~1 serving vegetables</p>
                    </div>
                    <div className="border-b border-gray-200 pb-4">
                      <h4 className="font-bold text-green-700 mb-2">Lunch</h4>
                      <p className="text-gray-700">Big salad with mixed greens, cherry tomatoes, cucumber, bell pepper, and grilled chicken</p>
                      <p className="text-sm text-gray-500">~3 servings vegetables</p>
                    </div>
                    <div className="border-b border-gray-200 pb-4">
                      <h4 className="font-bold text-green-700 mb-2">Afternoon Snack</h4>
                      <p className="text-gray-700">Kale chips or roasted chickpeas</p>
                      <p className="text-sm text-gray-500">~0.5 serving vegetables</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-green-700 mb-2">Dinner</h4>
                      <p className="text-gray-700">Grilled salmon with roasted Brussels sprouts and cauliflower mash</p>
                      <p className="text-sm text-gray-500">~2 servings vegetables</p>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700">
                  This sample day provides approximately 8.5 servings of vegetables, well above the average intake 
                  and packed with diverse nutrients.
                </p>
              </section>

              {/* Conclusion */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>
                <p className="text-gray-700 mb-4">
                  Increasing your vegetable intake doesn't have to mean eating plain salads every day. By getting 
                  creative with preparation methods and incorporating vegetables into foods you already enjoy, you can 
                  significantly boost your daily consumption.
                </p>
                <p className="text-gray-700 mb-4">
                  Remember that all forms count - fresh, frozen, canned, and even dried vegetables contribute to your 
                  daily goals. Frozen vegetables are just as nutritious as fresh and often more convenient.
                </p>
                <p className="text-gray-700">
                  Start with one or two of these strategies that appeal to you most, and gradually incorporate more 
                  over time. Your taste buds will adapt, and you may find yourself craving vegetables more often!
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
                        Dr. Sarah Johnson, RD
                      </a>
                    </p>
                    <p className="text-sm text-gray-600 mb-1">
                      — Written by{" "}
                      <a href="#" className="text-blue-600 hover:underline font-medium">
                        Nutrition Editorial Team
                      </a>
                    </p>
                    <p className="text-sm text-gray-600 flex items-center gap-1">
                      — <Calendar className="w-3 h-3" />
                      <a href="#" className="text-blue-600 hover:underline">
                        Updated on May 8, 2024
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-green-50 rounded-lg p-6 mb-8">
                <div className="mb-4">
                  <h3 className="text-sm font-bold text-green-800 uppercase tracking-wide mb-2">HEALTHLINE NEWSLETTER</h3>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Get our nutrition newsletter</h4>
                  <p className="text-gray-700 text-sm">
                    Weekly tips and recipes for eating more vegetables and improving your diet.
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
                  Your{" "}
                  <a href="#" className="text-green-600 hover:underline">
                    privacy
                  </a>{" "}
                  is important to us
                </p>
              </div>

              {/* Popular Vegetable Recipes */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Popular Vegetable Recipes</h3>
                <div className="space-y-4">
                  <a href="#" className="group block">
                    <div className="flex items-start gap-3">
                      <div className="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                        <img src="/recipe1.jpg" alt="Roasted vegetable medley" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 group-hover:text-green-600 transition-colors">Roasted Vegetable Medley</h4>
                        <p className="text-sm text-gray-500">4.8 ★ (124 reviews)</p>
                      </div>
                    </div>
                  </a>
                  <a href="#" className="group block">
                    <div className="flex items-start gap-3">
                      <div className="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                        <img src="/recipe2.jpg" alt="Zucchini noodles" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 group-hover:text-green-600 transition-colors">Garlic Parmesan Zoodles</h4>
                        <p className="text-sm text-gray-500">4.6 ★ (89 reviews)</p>
                      </div>
                    </div>
                  </a>
                  <a href="#" className="group block">
                    <div className="flex items-start gap-3">
                      <div className="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                        <img src="/recipe3.jpg" alt="Vegetable soup" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 group-hover:text-green-600 transition-colors">Hearty Minestrone Soup</h4>
                        <p className="text-sm text-gray-500">4.9 ★ (156 reviews)</p>
                      </div>
                    </div>
                  </a>
                  <a href="#" className="group block">
                    <div className="flex items-start gap-3">
                      <div className="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                        <img src="/recipe4.jpg" alt="Stuffed peppers" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 group-hover:text-green-600 transition-colors">Quinoa Stuffed Bell Peppers</h4>
                        <p className="text-sm text-gray-500">4.7 ★ (102 reviews)</p>
                      </div>
                    </div>
                  </a>
                </div>
                <a href="#" className="inline-block mt-4 text-green-600 hover:text-green-800 font-medium text-sm">
                  View all recipes →
                </a>
              </div>

              {/* Seasonal Vegetables Guide */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Seasonal Vegetables Guide</h3>
                <p className="text-gray-700 mb-4 text-sm">
                  Eating seasonally ensures peak flavor and nutrition. Here's what's in season now:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Salad className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Spring Vegetables</h4>
                      <p className="text-sm text-gray-500">Asparagus, peas, artichokes, radishes</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Utensils className="w-4 h-4 text-yellow-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Coming into Season</h4>
                      <p className="text-sm text-gray-500">Zucchini, cucumbers, green beans</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Leaf className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Year-Round</h4>
                      <p className="text-sm text-gray-500">Carrots, onions, potatoes, mushrooms</p>
                    </div>
                  </div>
                </div>
                <a href="#" className="inline-block mt-4 text-green-600 hover:text-green-800 font-medium text-sm">
                  Full seasonal guide →
                </a>
              </div>

              {/* Vegetable Prep Tips */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Prep Tips</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="text-green-500 w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Wash and chop vegetables right after grocery shopping</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-green-500 w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Roast a big batch for easy additions to meals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-green-500 w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Keep pre-cut veggies at eye level in your fridge</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-green-500 w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Add frozen vegetables to soups and stews</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-green-500 w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Keep a vegetable-based dip like hummus on hand</span>
                  </li>
                </ul>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}