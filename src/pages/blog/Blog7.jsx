"use client"

import { useEffect, useState } from "react"
import { Clock, Heart, Share2, Bookmark, User, Calendar, Star, Clock4 } from "lucide-react"

export default function PaleoDessertRecipes() {
  const [activeTab, setActiveTab] = useState("Recipes")
  const [savedRecipes, setSavedRecipes] = useState([])
  const [email, setEmail] = useState("")

  const handleSaveRecipe = (recipeName) => {
    if (savedRecipes.includes(recipeName)) {
      setSavedRecipes(savedRecipes.filter(name => name !== recipeName))
    } else {
      setSavedRecipes([...savedRecipes, recipeName])
    }
  }

  const handleEmailSubmit = (e) => {
    e.preventDefault()
    console.log("Email submitted:", email)
    setEmail("")
  }

  const tabs = ["Recipes", "Ingredients", "Tips", "Nutrition"]

  const recipes = [
    {
      name: "Chocolate Avocado Mousse",
      time: "15 mins",
      difficulty: "Easy",
      rating: 4.8,
      ingredients: [
        "2 ripe avocados",
        "1/4 cup cocoa powder",
        "1/4 cup honey or maple syrup",
        "1 tsp vanilla extract",
        "Pinch of sea salt",
        "2 tbsp almond milk"
      ],
      instructions: [
        "Scoop avocado flesh into a food processor",
        "Add cocoa powder, sweetener, vanilla, and salt",
        "Blend until smooth, adding almond milk as needed",
        "Chill for 1 hour before serving"
      ],
      nutrition: {
        calories: 210,
        fat: "15g",
        carbs: "20g",
        protein: "3g"
      }
    },
    {
      name: "Coconut Flour Banana Bread",
      time: "50 mins",
      difficulty: "Medium",
      rating: 4.6,
      ingredients: [
        "3 ripe bananas",
        "4 eggs",
        "1/4 cup coconut oil, melted",
        "1/4 cup honey",
        "1 tsp vanilla extract",
        "1/2 cup coconut flour",
        "1 tsp baking soda",
        "1/2 tsp cinnamon",
        "Pinch of salt"
      ],
      instructions: [
        "Preheat oven to 350°F (175°C)",
        "Mash bananas in a large bowl",
        "Whisk in eggs, coconut oil, honey, and vanilla",
        "In another bowl, mix dry ingredients",
        "Combine wet and dry ingredients",
        "Pour into greased loaf pan and bake for 45 minutes"
      ],
      nutrition: {
        calories: 180,
        fat: "8g",
        carbs: "22g",
        protein: "4g"
      }
    },
    {
      name: "Berry Chia Pudding",
      time: "10 mins + chilling",
      difficulty: "Easy",
      rating: 4.7,
      ingredients: [
        "1/4 cup chia seeds",
        "1 cup coconut milk",
        "1 tbsp honey",
        "1/2 tsp vanilla extract",
        "1/2 cup mixed berries",
        "1 tbsp shredded coconut"
      ],
      instructions: [
        "Whisk together chia seeds, coconut milk, honey and vanilla",
        "Let sit for 5 minutes, then whisk again",
        "Cover and refrigerate overnight or at least 4 hours",
        "Top with berries and coconut before serving"
      ],
      nutrition: {
        calories: 240,
        fat: "15g",
        carbs: "22g",
        protein: "5g"
      }
    }
  ]

      useEffect(() => {
      // Scroll to top when the component mounts
      window.scrollTo(0, 0)
    }, [])

  return (
    <div className="min-h-screen bg-white pt-20 md:pt-32">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header Section */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                20 Paleo Dessert Recipes to Satisfy Your Sweet Tooth
              </h1>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Discover delicious and guilt-free Paleo dessert recipes that satisfy your cravings while keeping it clean and grain-free. 
                These treats are free from refined sugars, dairy, and gluten but full of flavor!
              </p>

              {/* Navigation Tabs */}
              <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-200">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                      activeTab === tab
                        ? "border-teal-500 text-teal-600"
                        : "border-transparent text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Featured Image */}
              <div className="mb-8 relative rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/high-angle-delicious-food-concept (1).jpg"
                  alt="Assortment of Paleo desserts including chocolate mousse, fruit tarts, and cookies"
                  className="w-full h-auto object-cover"
                  style={{ height: '400px' }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <p className="text-white text-sm font-medium">Photo: Paleo dessert collection</p>
                </div>
              </div>

              {/* Introduction */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Paleo Desserts?</h2>
                <p className="text-gray-700 mb-4">
                  The Paleo diet focuses on whole, unprocessed foods that our hunter-gatherer ancestors would have eaten. 
                  While desserts weren't part of the original Paleolithic menu, modern Paleo baking has created delicious 
                  alternatives using nutrient-dense ingredients like almond flour, coconut oil, and natural sweeteners.
                </p>
                <p className="text-gray-700 mb-4">
                  These desserts avoid refined sugars, grains, and dairy while still delivering satisfying sweetness and 
                  texture. They're perfect for those with dietary restrictions or anyone looking for healthier treat options.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                  <p className="text-gray-700">
                    <span className="text-blue-600 font-medium">Pro Tip:</span> Most Paleo desserts freeze well, so you 
                    can make batches ahead of time for quick treats throughout the week.
                  </p>
                </div>
              </div>

              {/* Recipe Section */}
              {activeTab === "Recipes" && (
                <section className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Paleo Dessert Recipes</h2>
                  
                  {recipes.map((recipe, index) => (
                    <div key={index} className="mb-12 border-b border-gray-200 pb-8 last:border-0">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-2xl font-bold text-gray-900">{recipe.name}</h3>
                        <button 
                          onClick={() => handleSaveRecipe(recipe.name)}
                          className="text-gray-500 hover:text-red-500 transition-colors"
                        >
                          <Heart 
                            className={`w-5 h-5 ${savedRecipes.includes(recipe.name) ? 'fill-red-500 text-red-500' : ''}`}
                          />
                        </button>
                      </div>
                      
                      <div className="flex flex-wrap gap-4 mb-6">
                        <div className="flex items-center text-gray-700">
                          <Clock className="w-4 h-4 mr-1 text-teal-600" />
                          <span className="text-sm">{recipe.time}</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                          <Star className="w-4 h-4 mr-1 text-teal-600" />
                          <span className="text-sm">{recipe.difficulty}</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                          <Star className="w-4 h-4 mr-1 text-yellow-500" />
                          <span className="text-sm">{recipe.rating} (125)</span>
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-8 mb-6">
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 mb-4">Ingredients</h4>
                          <ul className="list-disc list-inside text-gray-700 space-y-2">
                            {recipe.ingredients.map((ingredient, i) => (
                              <li key={i}>{ingredient}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 mb-4">Instructions</h4>
                          <ol className="list-decimal list-inside text-gray-700 space-y-2">
                            {recipe.instructions.map((step, i) => (
                              <li key={i}>{step}</li>
                            ))}
                          </ol>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="text-lg font-bold text-gray-900 mb-2">Nutrition Facts (per serving)</h4>
                        <div className="grid grid-cols-4 gap-2 text-center">
                          <div>
                            <p className="text-sm text-gray-600">Calories</p>
                            <p className="font-bold">{recipe.nutrition.calories}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Fat</p>
                            <p className="font-bold">{recipe.nutrition.fat}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Carbs</p>
                            <p className="font-bold">{recipe.nutrition.carbs}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Protein</p>
                            <p className="font-bold">{recipe.nutrition.protein}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">More Paleo Dessert Ideas</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
                        Almond Butter Cookies
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
                        Pumpkin Spice Muffins
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
                        Chocolate Zucchini Brownies
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
                        Coconut Macaroons
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
                        Lemon Bars with Almond Crust
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
                        Carrot Cake Bites
                      </li>
                    </ul>
                  </div>
                </section>
              )}

              {/* Ingredients Tab */}
              {activeTab === "Ingredients" && (
                <section className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Essential Paleo Baking Ingredients</h2>
                  
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Flour Alternatives</h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full bg-white border border-gray-200">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="py-2 px-4 border-b text-left">Ingredient</th>
                            <th className="py-2 px-4 border-b text-left">Best Used For</th>
                            <th className="py-2 px-4 border-b text-left">Notes</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="py-2 px-4 border-b">Almond flour</td>
                            <td className="py-2 px-4 border-b">Cookies, cakes, crusts</td>
                            <td className="py-2 px-4 border-b">High in protein, mild flavor</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="py-2 px-4 border-b">Coconut flour</td>
                            <td className="py-2 px-4 border-b">Muffins, breads</td>
                            <td className="py-2 px-4 border-b">Very absorbent, use less</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-4 border-b">Tigernut flour</td>
                            <td className="py-2 px-4 border-b">Pie crusts, cookies</td>
                            <td className="py-2 px-4 border-b">Nut-free, slightly sweet</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="py-2 px-4 border-b">Cassava flour</td>
                            <td className="py-2 px-4 border-b">Tortillas, flatbreads</td>
                            <td className="py-2 px-4 border-b">Most similar to wheat flour</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Natural Sweeteners</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-bold text-gray-900 mb-2">Raw Honey</h4>
                        <p className="text-gray-700 text-sm">
                          Contains antioxidants and enzymes. Use about 3/4 cup honey for every 1 cup sugar in recipes.
                        </p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-bold text-gray-900 mb-2">Maple Syrup</h4>
                        <p className="text-gray-700 text-sm">
                          Rich in minerals. Grade B has stronger flavor and more nutrients than Grade A.
                        </p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-bold text-gray-900 mb-2">Coconut Sugar</h4>
                        <p className="text-gray-700 text-sm">
                          Low glycemic index. Has caramel-like flavor, can substitute 1:1 for white sugar.
                        </p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-bold text-gray-900 mb-2">Dates</h4>
                        <p className="text-gray-700 text-sm">
                          Blend into paste for natural sweetness. Great in energy balls and bars.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              )}

              {/* Tips Tab */}
              {activeTab === "Tips" && (
                <section className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Paleo Baking Tips & Tricks</h2>
                  
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Mastering Texture</h3>
                    <p className="text-gray-700 mb-4">
                      Paleo baking requires different techniques than traditional baking. Here's how to achieve the best results:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                      <li>
                        <strong>Don't overmix:</strong> Paleo flours (especially almond) can become dense if overmixed
                      </li>
                      <li>
                        <strong>Let batters rest:</strong> 5-10 minutes allows flours to absorb moisture
                      </li>
                      <li>
                        <strong>Use eggs at room temperature:</strong> Helps with leavening and texture
                      </li>
                      <li>
                        <strong>Add moisture:</strong> Many Paleo recipes benefit from extra applesauce, pumpkin, or mashed banana
                      </li>
                    </ul>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Common Substitutions</h3>
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                      <p className="text-gray-700">
                        <span className="text-yellow-600 font-medium">Note:</span> Substitutions may change texture and baking time. 
                        Experiment to find what works best for you.
                      </p>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="min-w-full bg-white border border-gray-200">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="py-2 px-4 border-b text-left">Traditional</th>
                            <th className="py-2 px-4 border-b text-left">Paleo Alternative</th>
                            <th className="py-2 px-4 border-b text-left">Ratio</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="py-2 px-4 border-b">Wheat flour</td>
                            <td className="py-2 px-4 border-b">Almond flour + coconut flour</td>
                            <td className="py-2 px-4 border-b">3:1 almond to coconut</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="py-2 px-4 border-b">Butter</td>
                            <td className="py-2 px-4 border-b">Coconut oil or ghee</td>
                            <td className="py-2 px-4 border-b">1:1</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-4 border-b">Sugar</td>
                            <td className="py-2 px-4 border-b">Coconut sugar or maple syrup</td>
                            <td className="py-2 px-4 border-b">1:1 for coconut sugar, reduce liquids for syrup</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="py-2 px-4 border-b">Milk</td>
                            <td className="py-2 px-4 border-b">Almond, coconut or cashew milk</td>
                            <td className="py-2 px-4 border-b">1:1</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>
              )}

              {/* Nutrition Tab */}
              {activeTab === "Nutrition" && (
                <section className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Nutritional Benefits of Paleo Desserts</h2>
                  
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Healthier Ingredients</h3>
                    <p className="text-gray-700 mb-4">
                      Unlike traditional desserts loaded with refined sugars and processed ingredients, Paleo desserts 
                      provide actual nutritional value:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                      <li>
                        <strong>Healthy fats:</strong> From nuts, coconut, and avocado that support brain function
                      </li>
                      <li>
                        <strong>Fiber:</strong> From almond flour, coconut, and fruits that aid digestion
                      </li>
                      <li>
                        <strong>Antioxidants:</strong> From dark chocolate, berries, and spices like cinnamon
                      </li>
                      <li>
                        <strong>Protein:</strong> From eggs and nut flours that help stabilize blood sugar
                      </li>
                    </ul>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Blood Sugar Impact</h3>
                    <p className="text-gray-700 mb-4">
                      A comparison of how different desserts affect blood sugar levels:
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg mb-6">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">Traditional Chocolate Cake</span>
                        <span className="text-sm font-bold text-red-600">High GI (70+)</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-red-500 h-2.5 rounded-full" style={{ width: "90%" }}></div>
                      </div>
                      
                      <div className="flex justify-between mb-2 mt-4">
                        <span className="text-sm font-medium">Paleo Almond Flour Brownie</span>
                        <span className="text-sm font-bold text-yellow-600">Medium GI (40-55)</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: "50%" }}></div>
                      </div>
                      
                      <div className="flex justify-between mb-2 mt-4">
                        <span className="text-sm font-medium">Date-Sweetened Energy Balls</span>
                        <span className="text-sm font-bold text-green-600">Low GI (30-40)</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "35%" }}></div>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm">
                      GI = Glycemic Index, measures how quickly foods raise blood sugar levels
                    </p>
                  </div>
                </section>
              )}

              {/* Final Thoughts */}
              <div className="bg-teal-50 p-6 rounded-lg mb-12">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Final Thoughts</h3>
                <p className="text-gray-700 mb-4">
                  Transitioning to Paleo desserts doesn't mean sacrificing flavor or satisfaction. With the right 
                  ingredients and techniques, you can create treats that nourish your body while satisfying your 
                  sweet tooth.
                </p>
                <p className="text-gray-700">
                  Remember that even Paleo desserts should be enjoyed in moderation as part of a balanced diet. 
                  Listen to your body and find the recipes that work best for your taste and health goals.
                </p>
              </div>
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
                      Recipe developed
                    </a>{" "}
                    by{" "}
                    <a href="#" className="text-blue-600 hover:underline font-medium">
                      Sarah Johnson, Paleo Chef
                    </a>
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    — Nutrition review by{" "}
                    <a href="#" className="text-blue-600 hover:underline font-medium">
                      Dr. Michael Chen, RD
                    </a>
                  </p>
                  <p className="text-sm text-gray-600 flex items-center gap-1">
                    — <Calendar className="w-3 h-3" />
                    <a href="#" className="text-blue-600 hover:underline">
                      Updated on June 15, 2023
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Save Recipes */}
            <div className="bg-pink-50 rounded-lg p-6 mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Bookmark className="w-5 h-5 text-pink-600" />
                <h3 className="text-lg font-bold text-gray-900">Your Saved Recipes</h3>
              </div>
              {savedRecipes.length > 0 ? (
                <ul className="space-y-2">
                  {savedRecipes.map((recipe, index) => (
                    <li key={index} className="flex justify-between items-center text-gray-700">
                      <span>{recipe}</span>
                      <button 
                        onClick={() => handleSaveRecipe(recipe)}
                        className="text-pink-600 hover:text-pink-800"
                      >
                        <Heart className="w-4 h-4 fill-pink-600" />
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600 text-sm">You haven't saved any recipes yet. Click the heart icon on recipes to save them.</p>
              )}
            </div>

            {/* Newsletter Signup */}
            <div className="bg-teal-50 rounded-lg p-6 mb-8">
              <div className="mb-4">
                <h3 className="text-sm font-bold text-teal-800 uppercase tracking-wide mb-2">PALEO NEWSLETTER</h3>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Get More Paleo Recipes</h4>
                <p className="text-gray-700 text-sm">
                  Join our weekly newsletter for exclusive recipes, tips, and special offers.
                </p>
              </div>

              <form onSubmit={handleEmailSubmit} className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200"
                >
                  SUBSCRIBE
                </button>
              </form>

              <p className="text-xs text-gray-600 mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>

            {/* Popular Recipes */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Most Popular Paleo Recipes</h3>
              <ul className="space-y-4">
                <li className="border-b border-gray-200 pb-4 last:border-0">
                  <a href="#" className="flex gap-3 group">
                    <div className="w-16 h-16 bg-gray-300 rounded-lg overflow-hidden flex-shrink-0">
                      <img 
                        src="/placeholder-recipe1.jpg" 
                        alt="Chocolate chip cookies"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 group-hover:text-teal-600">Paleo Chocolate Chip Cookies</h4>
                      <div className="flex items-center text-sm text-gray-600 mt-1">
                        <Star className="w-3 h-3 text-yellow-500 mr-1" />
                        <span>4.9 (243)</span>
                        <Clock4 className="w-3 h-3 text-gray-400 ml-3 mr-1" />
                        <span>25 mins</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="border-b border-gray-200 pb-4 last:border-0">
                  <a href="#" className="flex gap-3 group">
                    <div className="w-16 h-16 bg-gray-300 rounded-lg overflow-hidden flex-shrink-0">
                      <img 
                        src="/placeholder-recipe2.jpg" 
                        alt="Banana bread"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 group-hover:text-teal-600">Nut-Free Banana Bread</h4>
                      <div className="flex items-center text-sm text-gray-600 mt-1">
                        <Star className="w-3 h-3 text-yellow-500 mr-1" />
                        <span>4.7 (189)</span>
                        <Clock4 className="w-3 h-3 text-gray-400 ml-3 mr-1" />
                        <span>55 mins</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="border-b border-gray-200 pb-4 last:border-0">
                  <a href="#" className="flex gap-3 group">
                    <div className="w-16 h-16 bg-gray-300 rounded-lg overflow-hidden flex-shrink-0">
                      <img 
                        src="/placeholder-recipe3.jpg" 
                        alt="Berry crumble"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 group-hover:text-teal-600">Mixed Berry Crumble</h4>
                      <div className="flex items-center text-sm text-gray-600 mt-1">
                        <Star className="w-3 h-3 text-yellow-500 mr-1" />
                        <span>4.8 (167)</span>
                        <Clock4 className="w-3 h-3 text-gray-400 ml-3 mr-1" />
                        <span>40 mins</span>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            {/* Conversion Chart */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Paleo Conversion Chart</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="font-medium">1 cup wheat flour</span>
                  <span>→</span>
                  <span className="text-teal-600 font-medium">3/4 cup almond flour</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="font-medium">1 cup sugar</span>
                  <span>→</span>
                  <span className="text-teal-600 font-medium">3/4 cup honey</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="font-medium">1 tbsp cornstarch</span>
                  <span>→</span>
                  <span className="text-teal-600 font-medium">1 tbsp arrowroot</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="font-medium">1 cup milk</span>
                  <span>→</span>
                  <span className="text-teal-600 font-medium">1 cup almond milk</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">1 cup butter</span>
                  <span>→</span>
                  <span className="text-teal-600 font-medium">3/4 cup coconut oil</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}