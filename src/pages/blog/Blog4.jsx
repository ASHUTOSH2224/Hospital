import { useEffect, useState } from "react"
import { Clock, Heart, ShoppingCart, Star, Leaf } from "lucide-react"

export default function HealthierMiniDesserts() {
  const [activeTab, setActiveTab] = useState("Recipes")
  const [savedRecipes, setSavedRecipes] = useState([])

  const toggleSaveRecipe = (recipeName) => {
    if (savedRecipes.includes(recipeName)) {
      setSavedRecipes(savedRecipes.filter(name => name !== recipeName))
    } else {
      setSavedRecipes([...savedRecipes, recipeName])
    }
  }

    useEffect(() => {
      // Scroll to top when the component mounts
      window.scrollTo(0, 0)
    }, [])

  const tabs = ["Recipes", "Nutrition", "Tips", "Alternatives"]

  return (
    <div className="min-h-screen bg-white pt-20 md:pt-32">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header Section */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                6 Healthier Mini Desserts to Satisfy Your Sweet Tooth
              </h1>
              <p className="text-xl text-gray-700 mb-6">
                These little treat crumbles, cookies, truffles and even a latte can satisfy cravings without derailing your healthy eating goals.
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

              {/* Intro Text */}
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8 rounded-r-lg">
                <p className="text-gray-700">
                  <span className="text-blue-600 font-medium">Mini desserts</span> allow you to enjoy the flavors you love while keeping portions in check. Research shows that smaller portions can satisfy cravings just as effectively as larger ones when eaten mindfully.
                </p>
              </div>

              {/* Main Image */}
              <div className="mb-8">
                <img
                  src="/4334234-6-Healthier-Mini-Desserts-thumbnail-732x549-1.jpg"
                  alt="Assortment of healthy mini desserts on a table"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <p className="text-sm text-gray-500 mt-2">A variety of mini desserts including energy balls, fruit crumbles, and dark chocolate treats</p>
              </div>

              <p className="text-gray-700 mb-8">
                Desserts don't have to be off-limits when you're eating healthy. The key is choosing nutrient-dense ingredients and keeping portions reasonable. These six mini dessert ideas provide the perfect balance of indulgence and nutrition.
              </p>
            </div>

            {/* 1. Berry Crumble Cups */}
            <section className="mb-12 bg-gray-50 p-6 rounded-lg">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-gray-900">1. Berry Crumble Cups</h2>
                <button 
                  onClick={() => toggleSaveRecipe("Berry Crumble Cups")}
                  className={`flex items-center gap-1 ${savedRecipes.includes("Berry Crumble Cups") ? 'text-teal-600' : 'text-gray-500'}`}
                >
                  <Heart className="w-5 h-5" />
                  <span className="text-sm">Save</span>
                </button>
              </div>
              
              <div className="mb-6">
                <img
                  src="/berry-crumble.jpg"
                  alt="Mini berry crumble cups"
                  className="w-full h-auto rounded-lg"
                />
              </div>

              <p className="text-gray-700 mb-4">
                These individual berry crumbles pack all the flavor of traditional fruit crisp but in perfect single-serving portions. Made with antioxidant-rich berries and a whole grain oat topping, they provide fiber and phytonutrients along with sweet satisfaction.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Ingredients (makes 6):</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>2 cups mixed berries (fresh or frozen)</li>
                    <li>1 tbsp maple syrup or honey</li>
                    <li>1 tsp lemon juice</li>
                    <li>1/2 tsp vanilla extract</li>
                    <li>1/2 cup rolled oats</li>
                    <li>2 tbsp almond flour</li>
                    <li>1 tbsp coconut oil, melted</li>
                    <li>1 tbsp chopped nuts (optional)</li>
                    <li>Pinch of cinnamon</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Instructions:</h3>
                  <ol className="list-decimal list-inside text-gray-700 space-y-1">
                    <li>Preheat oven to 350°F (175°C)</li>
                    <li>Mix berries with maple syrup, lemon juice and vanilla</li>
                    <li>Divide berry mixture among 6 ramekins or muffin cups</li>
                    <li>Combine oats, almond flour, coconut oil, nuts and cinnamon</li>
                    <li>Sprinkle topping over berries</li>
                    <li>Bake for 20-25 minutes until bubbling</li>
                    <li>Let cool slightly before serving</li>
                  </ol>
                </div>
              </div>

              <div className="bg-teal-50 p-4 rounded-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-teal-600" />
                  Nutrition Per Serving:
                </h3>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div className="bg-white p-2 rounded text-center">
                    <div className="font-bold">120</div>
                    <div className="text-gray-600">Calories</div>
                  </div>
                  <div className="bg-white p-2 rounded text-center">
                    <div className="font-bold">4g</div>
                    <div className="text-gray-600">Protein</div>
                  </div>
                  <div className="bg-white p-2 rounded text-center">
                    <div className="font-bold">18g</div>
                    <div className="text-gray-600">Carbs</div>
                  </div>
                  <div className="bg-white p-2 rounded text-center">
                    <div className="font-bold">5g</div>
                    <div className="text-gray-600">Fiber</div>
                  </div>
                  <div className="bg-white p-2 rounded text-center">
                    <div className="font-bold">5g</div>
                    <div className="text-gray-600">Fat</div>
                  </div>
                  <div className="bg-white p-2 rounded text-center">
                    <div className="font-bold">8g</div>
                    <div className="text-gray-600">Sugar</div>
                  </div>
                </div>
              </div>
            </section>

            {/* 2. Dark Chocolate Avocado Truffles */}
            <section className="mb-12 bg-gray-50 p-6 rounded-lg">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-gray-900">2. Dark Chocolate Avocado Truffles</h2>
                <button 
                  onClick={() => toggleSaveRecipe("Dark Chocolate Avocado Truffles")}
                  className={`flex items-center gap-1 ${savedRecipes.includes("Dark Chocolate Avocado Truffles") ? 'text-teal-600' : 'text-gray-500'}`}
                >
                  <Heart className="w-5 h-5" />
                  <span className="text-sm">Save</span>
                </button>
              </div>

              <div className="mb-6">
                <img
                  src="/chocolate-truffles.jpg"
                  alt="Dark chocolate avocado truffles"
                  className="w-full h-auto rounded-lg"
                />
              </div>

              <p className="text-gray-700 mb-4">
                Creamy avocado replaces heavy cream in these decadent yet nutritious chocolate truffles. Avocados provide heart-healthy monounsaturated fats and fiber, while dark chocolate delivers antioxidants.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Ingredients (makes 12):</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>1 ripe avocado</li>
                    <li>1/2 cup dark chocolate chips (70% or higher)</li>
                    <li>2 tbsp cocoa powder</li>
                    <li>2 tbsp maple syrup</li>
                    <li>1 tsp vanilla extract</li>
                    <li>Pinch of sea salt</li>
                    <li>Toppings: cocoa powder, crushed nuts, coconut flakes</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Instructions:</h3>
                  <ol className="list-decimal list-inside text-gray-700 space-y-1">
                    <li>Melt chocolate chips in double boiler or microwave</li>
                    <li>In food processor, blend avocado until smooth</li>
                    <li>Add melted chocolate, cocoa, maple syrup, vanilla and salt</li>
                    <li>Process until completely smooth</li>
                    <li>Chill mixture for 1 hour until firm</li>
                    <li>Roll into 1-inch balls</li>
                    <li>Coat with desired toppings</li>
                    <li>Chill another 30 minutes before serving</li>
                  </ol>
                </div>
              </div>

              <div className="bg-teal-50 p-4 rounded-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-teal-600" />
                  Nutrition Per Truffle:
                </h3>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div className="bg-white p-2 rounded text-center">
                    <div className="font-bold">85</div>
                    <div className="text-gray-600">Calories</div>
                  </div>
                  <div className="bg-white p-2 rounded text-center">
                    <div className="font-bold">1g</div>
                    <div className="text-gray-600">Protein</div>
                  </div>
                  <div className="bg-white p-2 rounded text-center">
                    <div className="font-bold">8g</div>
                    <div className="text-gray-600">Carbs</div>
                  </div>
                  <div className="bg-white p-2 rounded text-center">
                    <div className="font-bold">3g</div>
                    <div className="text-gray-600">Fiber</div>
                  </div>
                  <div className="bg-white p-2 rounded text-center">
                    <div className="font-bold">6g</div>
                    <div className="text-gray-600">Fat</div>
                  </div>
                  <div className="bg-white p-2 rounded text-center">
                    <div className="font-bold">5g</div>
                    <div className="text-gray-600">Sugar</div>
                  </div>
                </div>
              </div>
            </section>

            {/* 3. Protein Cookie Dough Bites */}
            <section className="mb-12 bg-gray-50 p-6 rounded-lg">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-gray-900">3. Protein Cookie Dough Bites</h2>
                <button 
                  onClick={() => toggleSaveRecipe("Protein Cookie Dough Bites")}
                  className={`flex items-center gap-1 ${savedRecipes.includes("Protein Cookie Dough Bites") ? 'text-teal-600' : 'text-gray-500'}`}
                >
                  <Heart className="w-5 h-5" />
                  <span className="text-sm">Save</span>
                </button>
              </div>

              <div className="mb-6">
                <img
                  src="/cookie-dough-bites.jpg"
                  alt="Protein cookie dough bites"
                  className="w-full h-auto rounded-lg"
                />
              </div>

              <p className="text-gray-700 mb-4">
                These edible cookie dough bites are packed with plant-based protein and fiber to keep you satisfied. Chickpeas provide a creamy base while adding nutrients rarely found in traditional desserts.
              </p>

              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Nutrition Comparison (per serving):</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white rounded-lg overflow-hidden">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="py-2 px-4 text-left">Nutrient</th>
                        <th className="py-2 px-4 text-left">Traditional Cookie Dough</th>
                        <th className="py-2 px-4 text-left">Protein Cookie Dough Bites</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="py-2 px-4">Calories</td>
                        <td className="py-2 px-4">180</td>
                        <td className="py-2 px-4">90</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4">Protein</td>
                        <td className="py-2 px-4">2g</td>
                        <td className="py-2 px-4">6g</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4">Fiber</td>
                        <td className="py-2 px-4">0.5g</td>
                        <td className="py-2 px-4">4g</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4">Added Sugar</td>
                        <td className="py-2 px-4">12g</td>
                        <td className="py-2 px-4">3g</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Ingredients (makes 15):</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>1 can (15 oz) chickpeas, rinsed and drained</li>
                    <li>1/4 cup almond butter</li>
                    <li>2 tbsp maple syrup</li>
                    <li>1 tsp vanilla extract</li>
                    <li>1/4 cup vanilla protein powder</li>
                    <li>2 tbsp mini chocolate chips</li>
                    <li>Pinch of salt</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Instructions:</h3>
                  <ol className="list-decimal list-inside text-gray-700 space-y-1">
                    <li>Blend chickpeas in food processor until smooth</li>
                    <li>Add almond butter, maple syrup and vanilla</li>
                    <li>Process until creamy</li>
                    <li>Add protein powder and pulse to combine</li>
                    <li>Stir in chocolate chips</li>
                    <li>Roll into 1-inch balls</li>
                    <li>Chill for 1 hour before serving</li>
                  </ol>
                </div>
              </div>
            </section>

            {/* 4. Frozen Yogurt Bark */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Frozen Yogurt Bark</h2>
              <p className="text-gray-700 mb-4">
                This customizable frozen treat is perfect for hot days when you want something cool and sweet. Greek yogurt provides protein and probiotics, while the toppings add texture and flavor.
              </p>

              <div className="bg-purple-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Topping Ideas:</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Fruits:</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>Berries</li>
                      <li>Banana slices</li>
                      <li>Mango chunks</li>
                      <li>Kiwi</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Crunchy:</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>Granola</li>
                      <li>Chopped nuts</li>
                      <li>Seeds</li>
                      <li>Coconut flakes</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Sweet:</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>Dark chocolate chips</li>
                      <li>Drizzled nut butter</li>
                      <li>Honey</li>
                      <li>Cinnamon</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Basic Recipe:</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>2 cups Greek yogurt</li>
                    <li>1-2 tbsp honey or maple syrup</li>
                    <li>1 tsp vanilla extract</li>
                    <li>1 cup assorted toppings</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Instructions:</h3>
                  <ol className="list-decimal list-inside text-gray-700 space-y-1">
                    <li>Line baking sheet with parchment paper</li>
                    <li>Mix yogurt with sweetener and vanilla</li>
                    <li>Spread evenly on prepared sheet (about 1/4" thick)</li>
                    <li>Sprinkle with toppings</li>
                    <li>Freeze for 3-4 hours until solid</li>
                    <li>Break into pieces and store in freezer</li>
                  </ol>
                </div>
              </div>
            </section>

            {/* 5. Chia Seed Pudding */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Chia Seed Pudding</h2>
              <p className="text-gray-700 mb-4">
                Chia seeds expand in liquid to create a pudding-like texture while providing omega-3 fatty acids, fiber, and protein. Make individual portions in small jars for perfect mini desserts.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Base Recipe (per serving):</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>3 tbsp chia seeds</li>
                    <li>1 cup milk (dairy or plant-based)</li>
                    <li>1 tsp vanilla extract</li>
                    <li>1-2 tsp sweetener of choice</li>
                    <li>Pinch of salt</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Flavor Variations:</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li><strong>Chocolate:</strong> Add 1 tbsp cocoa powder</li>
                    <li><strong>Matcha:</strong> Add 1 tsp matcha powder</li>
                    <li><strong>Berry:</strong> Layer with fresh berries</li>
                    <li><strong>Tropical:</strong> Add mango puree and coconut flakes</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-yellow-600" />
                  Meal Prep Tip:
                </h3>
                <p className="text-gray-700">
                  Make a batch of 4-5 chia puddings at the beginning of the week for ready-to-eat desserts. They'll keep in the refrigerator for up to 5 days.
                </p>
              </div>
            </section>

            {/* 6. Spiced Chai Latte */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Spiced Chai Latte</h2>
              <p className="text-gray-700 mb-4">
                Sometimes a warm, spiced drink can satisfy dessert cravings without any solid food. This version uses natural sweetness and anti-inflammatory spices.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Ingredients:</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>1 cup unsweetened almond milk</li>
                    <li>1 chai tea bag or 1 tsp loose leaf chai</li>
                    <li>1/2 tsp cinnamon</li>
                    <li>1/4 tsp ginger</li>
                    <li>Pinch of nutmeg</li>
                    <li>1 tsp honey or maple syrup (optional)</li>
                    <li>1/4 tsp vanilla extract</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Instructions:</h3>
                  <ol className="list-decimal list-inside text-gray-700 space-y-1">
                    <li>Heat milk in small saucepan until steaming</li>
                    <li>Add tea bag and spices, steep for 5 minutes</li>
                    <li>Remove tea bag, stir in sweetener if using</li>
                    <li>Froth with whisk or frother if desired</li>
                    <li>Pour into mug and enjoy warm</li>
                  </ol>
                </div>
              </div>
            </section>

            {/* Benefits Section */}
            <section className="mb-12 bg-teal-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Mini Desserts?</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Star className="w-5 h-5 text-teal-600" />
                    Portion Control
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Mini desserts naturally limit portion sizes, helping prevent overeating while still satisfying cravings. Research shows that people tend to eat less when food is served in smaller portions.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Leaf className="w-5 h-5 text-teal-600" />
                    Nutrient Density
                  </h3>
                  <p className="text-gray-700 mb-4">
                    These recipes incorporate nutrient-rich ingredients like fruits, nuts, seeds, and dark chocolate that provide vitamins, minerals, and antioxidants not found in traditional desserts.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Heart className="w-5 h-5 text-teal-600" />
                    Blood Sugar Balance
                  </h3>
                  <p className="text-gray-700 mb-4">
                    The fiber, protein, and healthy fats in these mini desserts help slow sugar absorption, preventing the blood sugar spikes and crashes associated with conventional sweets.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <ShoppingCart className="w-5 h-5 text-teal-600" />
                    Cost Effective
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Making mini desserts at home costs significantly less than buying specialty desserts at bakeries or cafes. Many ingredients like oats, nuts, and frozen fruit are pantry staples.
                  </p>
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Final Thoughts</h2>
              <p className="text-gray-700 mb-4">
                Healthy eating doesn't mean giving up desserts entirely. By focusing on nutrient-dense ingredients, proper portions, and mindful enjoyment, you can satisfy your sweet tooth while nourishing your body.
              </p>
              <p className="text-gray-700">
                These six mini dessert ideas prove that treats can be both delicious and nutritious. Experiment with different flavor combinations to find your favorites, and remember that balance is key to sustainable healthy eating.
              </p>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Author Info */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                  <img src="/nutritionist.jpg" alt="Nutritionist" className="w-full h-full rounded-full object-cover" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">
                    <span className="text-blue-600 font-medium">Recipe developed</span> by{" "}
                    <span className="text-blue-600 hover:underline font-medium">Sarah Johnson, RD</span>
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    Certified Nutrition Specialist and cookbook author
                  </p>
                  <p className="text-sm text-gray-600 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>Last updated: June 2024</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Popular Recipes */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">More Healthy Treats</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-blue-600 hover:underline flex items-center gap-2">
                    <span>3-Ingredient Banana Oat Cookies</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline flex items-center gap-2">
                    <span>Avocado Chocolate Mousse</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline flex items-center gap-2">
                    <span>Frozen Yogurt Covered Blueberries</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline flex items-center gap-2">
                    <span>Date-Sweetened Energy Balls</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Shopping List */}
            <div className="bg-teal-50 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <ShoppingCart className="w-5 h-5 text-teal-600" />
                Pantry Staples for Healthy Desserts
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                  <span>Rolled oats</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                  <span>Nut butters</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                  <span>Chia seeds</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                  <span>Dark chocolate (70%+)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                  <span>Frozen berries</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                  <span>Greek yogurt</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                  <span>Vanilla extract</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                  <span>Honey or maple syrup</span>
                </li>
              </ul>
            </div>

            {/* Save Recipes */}
            {savedRecipes.length > 0 && (
              <div className="bg-pink-50 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-pink-600" />
                  Your Saved Recipes
                </h3>
                <ul className="space-y-2">
                  {savedRecipes.map(recipe => (
                    <li key={recipe} className="flex justify-between items-center">
                      <span className="text-gray-700">{recipe}</span>
                      <button 
                        onClick={() => toggleSaveRecipe(recipe)}
                        className="text-pink-600 hover:text-pink-800"
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}