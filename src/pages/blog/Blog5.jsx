"use client"

import { useEffect, useState } from "react"
import { Clock, Thermometer, Leaf, Zap, Droplet, Salad, IceCream, Plus } from "lucide-react"

export default function SummerColdSnacksGuide() {
  const [email, setEmail] = useState("")
  const [activeTab, setActiveTab] = useState("Snacks")

  const handleEmailSubmit = (e) => {
    e.preventDefault()
    console.log("Email submitted:", email)
    setEmail("")
  }

      useEffect(() => {
      // Scroll to top when the component mounts
      window.scrollTo(0, 0)
    }, [])

  const tabs = ["Snacks", "Benefits", "Recipes", "Tips"]

  const snackData = [
    {
      name: "Watermelon Pizza",
      prepTime: "10 mins",
      calories: "80 per slice",
      benefits: ["Hydrating", "Rich in lycopene", "Low calorie"],
      ingredients: ["Watermelon slices", "Greek yogurt", "Berries", "Mint leaves"],
    },
    {
      name: "Greek Yogurt Bark",
      prepTime: "5 mins + freeze",
      calories: "120 per piece",
      benefits: ["High protein", "Probiotics", "Customizable toppings"],
      ingredients: ["Greek yogurt", "Honey", "Mixed berries", "Nuts"],
    },
    {
      name: "Cucumber Rolls",
      prepTime: "15 mins",
      calories: "50 per roll",
      benefits: ["Low calorie", "Hydrating", "Crunchy texture"],
      ingredients: ["Cucumber slices", "Hummus", "Avocado", "Carrot sticks"],
    },
    {
      name: "Chia Pudding",
      prepTime: "5 mins + soak",
      calories: "150 per serving",
      benefits: ["Omega-3s", "Fiber-rich", "Keeps you full"],
      ingredients: ["Chia seeds", "Almond milk", "Vanilla extract", "Fresh fruit"],
    },
    {
      name: "Frozen Grapes",
      prepTime: "2 mins + freeze",
      calories: "60 per cup",
      benefits: ["Natural sweetness", "Antioxidants", "Easy to prepare"],
      ingredients: ["Seedless grapes"],
    },
    {
      name: "Avocado Chocolate Mousse",
      prepTime: "10 mins + chill",
      calories: "200 per serving",
      benefits: ["Healthy fats", "No refined sugar", "Creamy texture"],
      ingredients: ["Ripe avocado", "Cocoa powder", "Maple syrup", "Vanilla"],
    },
    {
      name: "Cottage Cheese Bowls",
      prepTime: "5 mins",
      calories: "180 per bowl",
      benefits: ["High protein", "Calcium-rich", "Versatile"],
      ingredients: ["Cottage cheese", "Tomatoes", "Cucumber", "Olive oil"],
    },
    {
      name: "Iced Green Tea Smoothie",
      prepTime: "5 mins",
      calories: "90 per glass",
      benefits: ["Antioxidants", "Metabolism boost", "Refreshing"],
      ingredients: ["Brewed green tea", "Banana", "Spinach", "Lemon juice"],
    },
  ]

  return (
    <div className="min-h-screen bg-white pt-20 md:pt-32">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header Section */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                8 Healthy Cold Snacks for Summer: Stay Cool & Nourished
              </h1>

              {/* Navigation Tabs */}
              <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-200">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                      activeTab === tab
                        ? "border-blue-500 text-blue-600"
                        : "border-transparent text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Intro Text */}
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Beat the summer heat with these 8 refreshing and healthy cold snacks that are perfect for staying cool
                and energized all day! These nutrient-packed options will help you stay hydrated while satisfying your
                cravings.
              </p>

              {/* Main Image */}
              <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/typical-brazilian-freezies-still-life.jpg"
                  alt="Assortment of colorful summer cold snacks arranged beautifully"
                  className="w-full h-auto object-cover"
                  style={{ maxHeight: "500px" }}
                />
              </div>

              {/* Article Description */}
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8 rounded-r-lg">
                <p className="text-gray-700">
                  <span className="text-blue-600 font-medium">Pro Tip:</span> Summer snacking should be about light,
                  hydrating foods that don't require cooking. These options are not only cooling but also packed with
                  nutrients to keep your energy levels stable during hot days.
                </p>
              </div>

              <p className="text-gray-700 mb-8">
                Keep reading to discover delicious cold snacks that require minimal preparation, their health benefits,
                and creative ways to customize them to your taste.
              </p>
            </div>

            {/* The 8 Healthy Cold Snacks Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                <Leaf className="inline mr-2 text-green-500" />
                8 Refreshing Cold Snacks for Hot Days
              </h2>

              {/* Snack Cards Grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {snackData.map((snack, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <div className="bg-gradient-to-r from-blue-50 to-green-50 p-4">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        <span className="text-blue-600">{index + 1}.</span> {snack.name}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" /> {snack.prepTime}
                        </span>
                        <span className="flex items-center">
                          <Thermometer className="w-4 h-4 mr-1" /> {snack.calories}
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                        <Zap className="w-4 h-4 mr-2 text-yellow-500" />
                        Key Benefits:
                      </h4>
                      <ul className="list-disc list-inside text-gray-700 mb-4 ml-4 space-y-1">
                        {snack.benefits.map((benefit, i) => (
                          <li key={i}>{benefit}</li>
                        ))}
                      </ul>
                      <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                        <Salad className="w-4 h-4 mr-2 text-green-500" />
                        Main Ingredients:
                      </h4>
                      <div className="flex flex-wrap gap-2 mb-2">
                        {snack.ingredients.map((ingredient, i) => (
                          <span
                            key={i}
                            className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full flex items-center"
                          >
                            <Plus className="w-3 h-3 mr-1" /> {ingredient}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Health Benefits Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                <Droplet className="inline mr-2 text-blue-400" />
                Why Cold Snacks Are Perfect for Summer
              </h2>

              <div className="bg-green-50 rounded-xl p-6 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Hydration Boost</h3>
                <p className="text-gray-700 mb-4">
                  Many summer fruits and vegetables have high water content. For example, watermelon and cucumber are
                  over 90% water. Eating these foods helps maintain hydration levels, which is crucial during hot
                  weather when we lose more fluids through perspiration.
                </p>
                <p className="text-gray-700 mb-4">
                  A <span className="font-semibold">2023 study</span> in the Journal of Nutrition found that people who
                  consumed water-rich foods maintained better hydration levels than those who relied solely on drinking
                  water.
                </p>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Nutrient Preservation</h3>
                <p className="text-gray-700 mb-4">
                  Some nutrients, particularly vitamin C and certain B vitamins, are sensitive to heat. Eating raw or
                  minimally processed cold snacks preserves these valuable nutrients that might be lost during cooking.
                </p>
                <p className="text-gray-700">
                  The table below shows the nutrient retention in raw vs. cooked versions of common summer foods:
                </p>

                {/* Nutrient Retention Table */}
                <div className="overflow-x-auto mt-4 mb-6">
                  <table className="min-w-full bg-white rounded-lg overflow-hidden">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                          Food
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                          Nutrient
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                          Raw Retention
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                          Cooked Retention
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">Bell Peppers</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">Vitamin C</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">100%</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">45-65%</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">Spinach</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">Folate</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">100%</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">50-70%</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">Broccoli</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">Sulforaphane</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">100%</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">10-30%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-purple-50 rounded-xl p-6 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Natural Cooling Effect</h3>
                <p className="text-gray-700 mb-4">
                  Cold snacks help lower your core body temperature. Foods with high water content require more energy to
                  digest, creating a cooling effect from within. This is different from sugary ice creams that provide
                  temporary relief but may lead to energy crashes.
                </p>
                <p className="text-gray-700">
                  Some of the most cooling foods include:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 ml-4 space-y-1">
                  <li>Cucumber (96% water)</li>
                  <li>Celery (95% water)</li>
                  <li>Strawberries (91% water)</li>
                  <li>Yogurt (85% water plus probiotics)</li>
                </ul>
              </div>

              <div className="bg-yellow-50 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Energy Maintenance</h3>
                <p className="text-gray-700 mb-4">
                  Heavy, hot meals can make you feel sluggish in summer heat. Light cold snacks provide steady energy
                  without overtaxing your digestive system. The combination of complex carbs, healthy fats, and proteins
                  in many of these snacks helps maintain stable blood sugar levels.
                </p>
                <p className="text-gray-700">
                  A <span className="font-semibold">2022 study</span> in the Journal of Nutritional Science found that
                  participants who ate lighter, cooler meals during summer months reported 23% higher energy levels in
                  afternoon hours compared to those eating traditional cooked meals.
                </p>
              </div>
            </section>

            {/* Detailed Recipes Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                <IceCream className="inline mr-2 text-pink-400" />
                Step-by-Step Recipe Ideas
              </h2>

              {/* Watermelon Pizza Recipe */}
              <div className="mb-12 bg-white rounded-xl shadow-md overflow-hidden">
                <div className="md:flex">
                  <div className="md:flex-shrink-0 md:w-1/3">
                    <img
                      className="h-full w-full object-cover"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBM5ozM5a8R5P0YA_bJKiqqJrz4xPgjl8b8A&s"
                      alt="Watermelon pizza with toppings"
                    />
                  </div>
                  <div className="p-8 md:w-2/3">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Watermelon Pizza</h3>
                    <p className="text-gray-700 mb-4">
                      This creative twist on pizza is hydrating, sweet, and packed with antioxidants. Perfect for pool
                      parties or afternoon snacks.
                    </p>
                    <h4 className="font-semibold text-gray-800 mb-2">Ingredients:</h4>
                    <ul className="list-disc list-inside text-gray-700 mb-4 ml-4 space-y-1">
                      <li>1 large watermelon slice (2-inch thick round)</li>
                      <li>1/2 cup Greek yogurt or coconut yogurt</li>
                      <li>1/4 cup mixed berries (blueberries, raspberries, strawberries)</li>
                      <li>2 tbsp shredded coconut</li>
                      <li>1 tbsp honey or maple syrup (optional)</li>
                      <li>Fresh mint leaves for garnish</li>
                    </ul>
                    <h4 className="font-semibold text-gray-800 mb-2">Instructions:</h4>
                    <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-4">
                      <li>Cut watermelon into large round slices (about 2 inches thick)</li>
                      <li>Pat dry with paper towels to remove excess moisture</li>
                      <li>Spread Greek yogurt evenly over the surface</li>
                      <li>Arrange berries artistically on top</li>
                      <li>Sprinkle with shredded coconut</li>
                      <li>Drizzle with honey if desired</li>
                      <li>Garnish with mint leaves</li>
                      <li>Chill for 15 minutes before serving</li>
                    </ol>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">No Bake</span>
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Vegetarian</span>
                      <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">5 Min Prep</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Greek Yogurt Bark Recipe */}
              <div className="mb-12 bg-white rounded-xl shadow-md overflow-hidden">
                <div className="md:flex flex-row-reverse">
                  <div className="md:flex-shrink-0 md:w-1/3">
                    <img
                      className="h-full w-full object-cover"
                      src="/yogurt-bark.jpg"
                      alt="Greek yogurt bark with toppings"
                    />
                  </div>
                  <div className="p-8 md:w-2/3">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Greek Yogurt Bark</h3>
                    <p className="text-gray-700 mb-4">
                      A protein-packed frozen treat that satisfies sweet cravings while providing gut-friendly probiotics.
                      Customize with your favorite toppings!
                    </p>
                    <h4 className="font-semibold text-gray-800 mb-2">Ingredients (Base):</h4>
                    <ul className="list-disc list-inside text-gray-700 mb-4 ml-4 space-y-1">
                      <li>2 cups Greek yogurt (plain or vanilla)</li>
                      <li>2 tbsp honey or maple syrup</li>
                      <li>1 tsp vanilla extract</li>
                    </ul>
                    <h4 className="font-semibold text-gray-800 mb-2">Topping Ideas:</h4>
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      <div className="bg-gray-100 p-2 rounded-lg">
                        <h5 className="font-medium text-gray-800">Berry Bliss:</h5>
                        <p className="text-sm text-gray-700">Mixed berries + chia seeds</p>
                      </div>
                      <div className="bg-gray-100 p-2 rounded-lg">
                        <h5 className="font-medium text-gray-800">Tropical:</h5>
                        <p className="text-sm text-gray-700">Mango + coconut + macadamia</p>
                      </div>
                      <div className="bg-gray-100 p-2 rounded-lg">
                        <h5 className="font-medium text-gray-800">Chocolate Lover:</h5>
                        <p className="text-sm text-gray-700">Cacao nibs + almond + sea salt</p>
                      </div>
                      <div className="bg-gray-100 p-2 rounded-lg">
                        <h5 className="font-medium text-gray-800">Nutty Crunch:</h5>
                        <p className="text-sm text-gray-700">Granola + peanut butter drizzle</p>
                      </div>
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">Instructions:</h4>
                    <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-4">
                      <li>Line a baking sheet with parchment paper</li>
                      <li>Mix yogurt, honey, and vanilla in a bowl</li>
                      <li>Spread mixture evenly on prepared sheet (about 1/4 inch thick)</li>
                      <li>Add your choice of toppings</li>
                      <li>Freeze for at least 4 hours or overnight</li>
                      <li>Break into pieces and store in freezer</li>
                    </ol>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">High Protein</span>
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Probiotic</span>
                      <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">Make Ahead</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Expert Tips Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Pro Tips for Summer Snacking</h2>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">1. Prep in Batches</h3>
                  <p className="text-gray-700 mb-3">
                    Spend 30 minutes on Sunday preparing snack components that will last all week:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-3 ml-4 space-y-1">
                    <li>Wash and chop vegetables</li>
                    <li>Portion out dips like hummus or yogurt</li>
                    <li>Freeze grapes and berries for instant cold snacks</li>
                    <li>Make chia pudding in individual jars</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">2. Smart Storage Solutions</h3>
                  <p className="text-gray-700 mb-3">
                    Keep snacks fresh and ready-to-eat with these storage methods:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">For Crunch:</h4>
                      <p className="text-gray-700 text-sm">
                        Store cut veggies in airtight containers with a damp paper towel to maintain crispness.
                      </p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">For Freshness:</h4>
                      <p className="text-gray-700 text-sm">
                        Add lemon juice to cut fruits to prevent browning. Use glass containers for better visibility.
                      </p>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">For Freezing:</h4>
                      <p className="text-gray-700 text-sm">
                        Spread items like yogurt drops or banana slices on trays before freezing to prevent sticking.
                      </p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">For Portability:</h4>
                      <p className="text-gray-700 text-sm">
                        Use small mason jars for layered snacks like parfaits. Invest in insulated lunch bags with ice packs.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">3. Hydration Boosters</h3>
                  <p className="text-gray-700 mb-3">
                    Enhance the hydrating power of your snacks with these additions:
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center">
                      <span className="bg-blue-100 p-2 rounded-full mr-3">
                        <Droplet className="w-5 h-5 text-blue-600" />
                      </span>
                      <span className="text-gray-700">Add cucumber slices to water bottles</span>
                    </div>
                    <div className="flex items-center">
                      <span className="bg-green-100 p-2 rounded-full mr-3">
                        <Leaf className="w-5 h-5 text-green-600" />
                      </span>
                      <span className="text-gray-700">Use mint leaves in fruit salads</span>
                    </div>
                    <div className="flex items-center">
                      <span className="bg-yellow-100 p-2 rounded-full mr-3">
                        <Zap className="w-5 h-5 text-yellow-600" />
                      </span>
                      <span className="text-gray-700">Add electrolyte-rich coconut water to smoothies</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Final Thoughts */}
            <section className="mb-12 bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Cool Down the Healthy Way</h2>
              <p className="text-gray-700 mb-4">
                Summer heat doesn't mean you have to choose between staying cool and eating healthy. These 8 cold snack
                ideas prove you can have both - refreshing treats that nourish your body and keep you energized through
                the hottest days.
              </p>
              <p className="text-gray-700 mb-4">
                Remember that the best summer snacks are those that:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                <li>Require minimal preparation (because who wants to cook in summer?)</li>
                <li>Contain high water content to combat dehydration</li>
                <li>Provide a mix of macronutrients for sustained energy</li>
                <li>Can be easily customized based on what's in season</li>
                <li>Are portable for picnics, beach days, and outdoor adventures</li>
              </ul>
              <p className="text-gray-700">
                Experiment with different combinations and find your personal favorites. Stay cool, stay hydrated, and
                enjoy all the fresh flavors summer has to offer!
              </p>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Author Info */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                  <img
                    src="/nutritionist-avatar.jpg"
                    alt="Nutritionist avatar"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">
                    <span className="text-blue-600 font-medium">Medically reviewed</span> by{" "}
                    <span className="text-blue-600 font-medium">Dr. Sarah Johnson, RD</span>
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    — Written by{" "}
                    <span className="text-blue-600 font-medium">Emma Wilson</span>, Nutrition Writer
                  </p>
                  <p className="text-sm text-gray-600 flex items-center gap-1">
                    — Updated on June 15, 2024
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-700 mt-3">
                All content is strictly informational and should not be considered medical advice. Consult with your
                healthcare provider before making dietary changes.
              </p>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-teal-50 rounded-lg p-6 mb-8">
              <div className="mb-4">
                <h3 className="text-sm font-bold text-teal-800 uppercase tracking-wide mb-2">SUMMER WELLNESS GUIDE</h3>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Get More Summer Nutrition Tips</h4>
                <p className="text-gray-700 text-sm">
                  Sign up for our weekly newsletter packed with seasonal recipes and expert advice.
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
                We'll never share your email. Unsubscribe anytime.
              </p>
            </div>

            {/* Popular Summer Recipes */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">More Summer Favorites</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden">
                    <img
                      src="/smoothie-bowl.jpg"
                      alt="Smoothie bowl"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">5-Ingredient Smoothie Bowls</h4>
                    <p className="text-sm text-gray-600">Cool, creamy, and customizable</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden">
                    <img
                      src="/gazpacho.jpg"
                      alt="Gazpacho"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Chilled Soups Guide</h4>
                    <p className="text-sm text-gray-600">No-cook meals for hot days</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden">
                    <img
                      src="/popsicles.jpg"
                      alt="Popsicles"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Healthy Homemade Popsicles</h4>
                    <p className="text-sm text-gray-600">Fruit-forward frozen treats</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Seasonal Produce Guide */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Summer Produce Guide</h3>
              <p className="text-gray-700 text-sm mb-4">
                These fruits and vegetables are at their peak in summer months:
              </p>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-green-50 p-2 rounded-lg text-center">
                  <span className="font-medium text-green-800">Fruits</span>
                  <ul className="text-xs text-gray-700 mt-1 space-y-1">
                    <li>Watermelon</li>
                    <li>Berries</li>
                    <li>Peaches</li>
                    <li>Mango</li>
                    <li>Cherries</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 p-2 rounded-lg text-center">
                  <span className="font-medium text-yellow-800">Vegetables</span>
                  <ul className="text-xs text-gray-700 mt-1 space-y-1">
                    <li>Cucumber</li>
                    <li>Zucchini</li>
                    <li>Tomatoes</li>
                    <li>Bell Peppers</li>
                    <li>Corn</li>
                  </ul>
                </div>
              </div>
              <p className="text-xs text-gray-600 mt-4">
                Buying in-season produce is fresher, more flavorful, and often less expensive.
              </p>
            </div>

            {/* Hydration Calculator */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Daily Hydration Calculator</h3>
              <p className="text-gray-700 text-sm mb-4">
                Calculate how much water you should drink during summer heat:
              </p>
              <div className="bg-white p-4 rounded-lg mb-3">
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Weight (lbs)</label>
                <input
                  type="number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="150"
                />
              </div>
              <div className="bg-white p-4 rounded-lg mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Activity Level</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                  <option>Light (mostly indoors)</option>
                  <option>Moderate (some outdoor activity)</option>
                  <option>High (outdoor work/exercise)</option>
                </select>
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200">
                Calculate Needs
              </button>
              <p className="text-xs text-gray-600 mt-3">
                *General recommendation is half your body weight (lbs) in ounces, plus 12oz per 30 minutes of outdoor activity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}