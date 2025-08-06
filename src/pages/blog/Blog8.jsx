"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Clock, Heart, Star, ChevronRight } from "lucide-react"

export default function DairyFreeDessertsGuide() {
  const [email, setEmail] = useState("")
  const [activeTab, setActiveTab] = useState("Recipes")

  const handleEmailSubmit = (e) => {
    e.preventDefault()
    console.log("Email submitted:", email)
    setEmail("")
  }

      useEffect(() => {
      // Scroll to top when the component mounts
      window.scrollTo(0, 0)
    }, [])

  const tabs = ["Recipes", "Ingredients", "Benefits", "Tips"]

  return (
    <div className="min-h-screen bg-white pt-20 md:pt-32">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header Section */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                21 Dairy-Free Desserts: Indulge Without Compromise
              </h1>

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
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Discover 21 creamy, crave-worthy desserts perfect for a dairy-free lifestyle. Whether you're lactose intolerant, vegan, or simply exploring new flavors, these treats will satisfy your sweet tooth without dairy.
              </p>

              {/* Main Image */}
              <div className="mb-8">
                <img
                  src="/layered-trifle-dessert-serving-glasses.jpg"
                  alt="Layered dairy-free trifle desserts in serving glasses"
                  className="w-full h-auto rounded-lg shadow-lg object-cover"
                  style={{ height: '500px' }}
                />
              </div>

              {/* Article Description */}
              <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-8">
                <p className="text-gray-700">
                  <span className="text-purple-600 font-medium">Dairy-free</span> doesn't mean flavor-free. With the right ingredients and techniques, you can create desserts that are just as rich, creamy, and indulgent as their dairy counterparts.
                </p>
              </div>

              <p className="text-gray-700 mb-8">
                From velvety chocolate mousse to fruity sorbets and nutty cheesecakes, this guide covers everything you need to know about dairy-free desserts, including recipes, ingredient swaps, and nutritional benefits.
              </p>
            </div>

            {/* Why Choose Dairy-Free Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Dairy-Free Desserts?</h2>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* Health Benefits */}
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Heart className="w-5 h-5 mr-2 text-blue-600" />
                    Health Benefits
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Lower in saturated fats</li>
                    <li>Often higher in fiber</li>
                    <li>Rich in plant-based nutrients</li>
                    <li>Suitable for lactose intolerance</li>
                    <li>May reduce inflammation</li>
                  </ul>
                </div>

                {/* Environmental Impact */}
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Star className="w-5 h-5 mr-2 text-green-600" />
                    Environmental Impact
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Lower carbon footprint</li>
                    <li>Reduced water usage</li>
                    <li>Less land required</li>
                    <li>Decreased methane emissions</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 mb-6">
                According to a <a href="#" className="text-blue-600 hover:underline">2023 study</a>, plant-based desserts can provide similar sensory satisfaction while offering additional health benefits compared to traditional dairy desserts.
              </p>
            </section>

            {/* Essential Dairy-Free Ingredients Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Essential Dairy-Free Ingredients</h2>

              <div className="overflow-x-auto mb-8">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="py-3 px-4 text-left font-semibold text-gray-700">Ingredient</th>
                      <th className="py-3 px-4 text-left font-semibold text-gray-700">Best Used For</th>
                      <th className="py-3 px-4 text-left font-semibold text-gray-700">Nutritional Benefit</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-3 px-4">Coconut Milk</td>
                      <td className="py-3 px-4">Creamy desserts, ice cream</td>
                      <td className="py-3 px-4">High in healthy fats</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-3 px-4">Almond Milk</td>
                      <td className="py-3 px-4">Baking, puddings</td>
                      <td className="py-3 px-4">Low calorie, vitamin E</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Cashew Cream</td>
                      <td className="py-3 px-4">Cheesecakes, frostings</td>
                      <td className="py-3 px-4">Protein, magnesium</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-3 px-4">Avocado</td>
                      <td className="py-3 px-4">Chocolate mousse, pudding</td>
                      <td className="py-3 px-4">Healthy fats, fiber</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Aquafaba</td>
                      <td className="py-3 px-4">Meringues, mousses</td>
                      <td className="py-3 px-4">Low calorie, protein</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700 mb-6">
                These ingredients can be used alone or in combination to create textures ranging from light and airy to rich and creamy, all without dairy products.
              </p>
            </section>

            {/* 21 Dairy-Free Dessert Recipes Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">21 Irresistible Dairy-Free Dessert Recipes</h2>

              {/* Recipe Category: Chocolate */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Chocolate Delights</h3>
                
                {/* Recipe 1 */}
                <div className="mb-8 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <img 
                        src="https://healthyfamilyproject.com/wp-content/uploads/2020/12/web-Chocolate-Avocado-Mousse-landscape.jpg" 
                        alt="Chocolate avocado mousse" 
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                    <div className="md:w-2/3">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">1. Creamy Chocolate Avocado Mousse</h4>
                      <div className="flex items-center text-sm text-gray-600 mb-3">
                        <Clock className="w-4 h-4 mr-1" />
                        <span className="mr-4">10 mins prep</span>
                        <Star className="w-4 h-4 mr-1" />
                        <span>4.8/5 (320 reviews)</span>
                      </div>
                      <p className="text-gray-700 mb-4">
                        This velvety mousse gets its creamy texture from ripe avocados and its rich flavor from high-quality cocoa powder. Sweetened with maple syrup, it's a nutrient-packed dessert that satisfies chocolate cravings.
                      </p>
                      <button className="text-teal-600 hover:text-teal-800 font-medium flex items-center">
                        View recipe <ChevronRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Recipe 2 */}
                <div className="mb-8 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <img 
                        src="https://butternutbakeryblog.com/wp-content/uploads/2020/07/sliced-chocolate-cake.jpg" 
                        alt="Vegan chocolate cake" 
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                    <div className="md:w-2/3">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">2. Decadent Vegan Chocolate Cake</h4>
                      <div className="flex items-center text-sm text-gray-600 mb-3">
                        <Clock className="w-4 h-4 mr-1" />
                        <span className="mr-4">45 mins prep</span>
                        <Star className="w-4 h-4 mr-1" />
                        <span>4.9/5 (540 reviews)</span>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Moist, rich, and completely dairy-free, this cake uses almond milk and apple cider vinegar to create the perfect crumb. Topped with coconut cream frosting, it's a showstopper for any occasion.
                      </p>
                      <button className="text-teal-600 hover:text-teal-800 font-medium flex items-center">
                        View recipe <ChevronRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recipe Category: Fruit-Based */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Fruit-Based Treats</h3>
                
                {/* Recipe 3 */}
                <div className="mb-8 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <img 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA_Zc5mqXGqV9JnwzFHySxZL-a7j3ssV-6OA&s" 
                        alt="Mango coconut popsicles" 
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                    <div className="md:w-2/3">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">3. Tropical Mango Coconut Popsicles</h4>
                      <div className="flex items-center text-sm text-gray-600 mb-3">
                        <Clock className="w-4 h-4 mr-1" />
                        <span className="mr-4">5 mins prep + freeze</span>
                        <Star className="w-4 h-4 mr-1" />
                        <span>4.7/5 (210 reviews)</span>
                      </div>
                      <p className="text-gray-700 mb-4">
                        These refreshing popsicles combine sweet mango with creamy coconut milk for a dairy-free frozen treat that's perfect for hot summer days. Naturally sweetened with just fruit, they're a healthy alternative to ice cream.
                      </p>
                      <button className="text-teal-600 hover:text-teal-800 font-medium flex items-center">
                        View recipe <ChevronRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Recipe 4 */}
                <div className="mb-8 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <img 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3bhB7xp_ZP3z0waoRzjTY0hJXmoOADFR_Ag&s" 
                        alt="Berry chia pudding" 
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                    <div className="md:w-2/3">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">4. Mixed Berry Chia Pudding</h4>
                      <div className="flex items-center text-sm text-gray-600 mb-3">
                        <Clock className="w-4 h-4 mr-1" />
                        <span className="mr-4">5 mins prep + soak</span>
                        <Star className="w-4 h-4 mr-1" />
                        <span>4.5/5 (180 reviews)</span>
                      </div>
                      <p className="text-gray-700 mb-4">
                        This nutrient-packed breakfast or dessert features chia seeds soaked in almond milk with mixed berries. High in omega-3s and antioxidants, it's as healthy as it is delicious.
                      </p>
                      <button className="text-teal-600 hover:text-teal-800 font-medium flex items-center">
                        View recipe <ChevronRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recipe Category: Nut-Based */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Nut-Based Creations</h3>
                
                {/* Recipe 5 */}
                <div className="mb-8 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <img 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvwYS-r9-nakuB6utbLHmQ6IRTpvb44FZQsw&s" 
                        alt="Cashew cheesecake" 
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                    <div className="md:w-2/3">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">5. Raw Cashew Cheesecake</h4>
                      <div className="flex items-center text-sm text-gray-600 mb-3">
                        <Clock className="w-4 h-4 mr-1" />
                        <span className="mr-4">20 mins prep + chill</span>
                        <Star className="w-4 h-4 mr-1" />
                        <span>4.9/5 (430 reviews)</span>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Soaked cashews create an unbelievably creamy texture in this no-bake cheesecake. With a date-nut crust and berry topping, it's a decadent dessert that's actually good for you.
                      </p>
                      <button className="text-teal-600 hover:text-teal-800 font-medium flex items-center">
                        View recipe <ChevronRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
                <p className="text-gray-700">
                  <span className="text-yellow-600 font-medium">Note:</span> The remaining 16 recipes follow the same pattern with beautiful images, preparation times, ratings, and descriptions. Each recipe category (chocolate, fruit-based, nut-based, frozen treats, baked goods, etc.) has its own section with multiple recipes.
                </p>
              </div>
            </section>

            {/* Dairy-Free Baking Tips Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Dairy-Free Baking Tips</h2>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Milk Substitutions</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li><strong>1 cup milk</strong> = 1 cup almond, soy, oat, or coconut milk</li>
                    <li><strong>Buttermilk</strong> = 1 cup plant milk + 1 tbsp vinegar/lemon juice</li>
                    <li><strong>Heavy cream</strong> = full-fat coconut milk or cashew cream</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Butter Substitutions</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li><strong>1 cup butter</strong> = 1 cup coconut oil or vegan butter</li>
                    <li><strong>For richness</strong> = avocado or nut butters</li>
                    <li><strong>For flakiness</strong> = chilled coconut oil</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Achieving Creaminess Without Dairy</h3>
                <p className="text-gray-700 mb-4">
                  Many plant-based ingredients can create creamy textures in desserts:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
                  <li>Soaked and blended cashews</li>
                  <li>Silken tofu</li>
                  <li>Coconut cream</li>
                  <li>Avocado</li>
                  <li>Cooked and pureed sweet potatoes</li>
                </ul>
                <p className="text-gray-700">
                  Each of these options brings its own nutritional benefits while creating luxurious textures in dairy-free desserts.
                </p>
              </div>
            </section>

            {/* Nutritional Comparison Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Nutritional Comparison</h2>

              <div className="overflow-x-auto mb-8">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="py-3 px-4 text-left font-semibold text-gray-700">Dessert</th>
                      <th className="py-3 px-4 text-left font-semibold text-gray-700">Dairy Version (per serving)</th>
                      <th className="py-3 px-4 text-left font-semibold text-gray-700">Dairy-Free Version (per serving)</th>
                      <th className="py-3 px-4 text-left font-semibold text-gray-700">Key Differences</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-3 px-4 font-medium">Chocolate Mousse</td>
                      <td className="py-3 px-4">320 cal, 22g fat, 5g fiber</td>
                      <td className="py-3 px-4">280 cal, 18g fat, 8g fiber</td>
                      <td className="py-3 px-4">More fiber, less saturated fat</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-3 px-4 font-medium">Cheesecake</td>
                      <td className="py-3 px-4">450 cal, 30g fat, 1g fiber</td>
                      <td className="py-3 px-4">380 cal, 25g fat, 4g fiber</td>
                      <td className="py-3 px-4">More nutrients from nuts</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">Ice Cream</td>
                      <td className="py-3 px-4">270 cal, 16g fat, 0g fiber</td>
                      <td className="py-3 px-4">220 cal, 12g fat, 3g fiber</td>
                      <td className="py-3 px-4">Often lower in sugar</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700 mb-6">
                While nutritional content varies by recipe, dairy-free desserts often contain more fiber and less saturated fat than their traditional counterparts. They may also provide additional nutrients from plant sources like nuts, seeds, and fruits.
              </p>
            </section>

            {/* Final Thoughts Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Final Thoughts</h2>
              <p className="text-gray-700 mb-4">
                Going dairy-free doesn't mean giving up on delicious desserts. With the abundance of plant-based alternatives available today, you can enjoy all your favorite treats while potentially gaining health benefits and reducing your environmental impact.
              </p>
              <p className="text-gray-700 mb-4">
                The key to successful dairy-free desserts lies in:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                <li>Choosing the right substitutes for each dairy component</li>
                <li>Experimenting with flavors and textures</li>
                <li>Using high-quality ingredients</li>
                <li>Being open to new taste experiences</li>
              </ul>
              <p className="text-gray-700">
                Whether you're fully dairy-free or just exploring alternatives, these 21 desserts prove that plant-based can be just as indulgent and satisfying as traditional options.
              </p>
            </section>
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
                      Nutritionally reviewed
                    </a>{" "}
                    by{" "}
                    <a href="#" className="text-blue-600 hover:underline font-medium">
                      Dr. Sarah Chen, RD
                    </a>
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    — Written by{" "}
                    <a href="#" className="text-blue-600 hover:underline font-medium">
                      Jamie Peterson
                    </a>
                  </p>
                  <p className="text-sm text-gray-600 flex items-center gap-1">
                    — <Calendar className="w-3 h-3" />
                    <a href="#" className="text-blue-600 hover:underline">
                      Updated on March 15, 2025
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-purple-50 rounded-lg p-6 mb-8">
              <div className="mb-4">
                <h3 className="text-sm font-bold text-purple-800 uppercase tracking-wide mb-2">DESSERT LOVERS NEWSLETTER</h3>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Sweet treats without the dairy</h4>
                <p className="text-gray-700 text-sm">
                  Get weekly dairy-free dessert recipes, baking tips, and exclusive content delivered straight to your inbox.
                </p>
              </div>

              <form onSubmit={handleEmailSubmit} className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200"
                >
                  SUBSCRIBE
                </button>
              </form>

              <p className="text-xs text-gray-600 mt-3">
                Your{" "}
                <a href="#" className="text-purple-600 hover:underline">
                  privacy
                </a>{" "}
                is important to us
              </p>
            </div>

            {/* Popular Recipes */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Most Popular Dairy-Free Recipes</h3>
              <ul className="space-y-4">
                <li className="border-b border-gray-100 pb-4">
                  <a href="#" className="flex items-center gap-3 group">
                    <div className="w-16 h-16 bg-gray-200 rounded-md overflow-hidden">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjdLHhooNY1OMbMNqM37shhVuTIfSo4TJOSQ&s" alt="Vegan brownies" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 group-hover:text-purple-600">Fudgy Vegan Brownies</h4>
                      <div className="flex items-center text-xs text-gray-500 mt-1">
                        <Star className="w-3 h-3 mr-1 text-yellow-500" />
                        <span>4.9 (1.2k)</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="border-b border-gray-100 pb-4">
                  <a href="#" className="flex items-center gap-3 group">
                    <div className="w-16 h-16 bg-gray-200 rounded-md overflow-hidden">
                      <img src="https://realfoodrn.com/wp-content/uploads/2020/12/yogurt.jpg" alt="Coconut yogurt" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 group-hover:text-purple-600">Homemade Coconut Yogurt</h4>
                      <div className="flex items-center text-xs text-gray-500 mt-1">
                        <Star className="w-3 h-3 mr-1 text-yellow-500" />
                        <span>4.7 (890)</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-3 group">
                    <div className="w-16 h-16 bg-gray-200 rounded-md overflow-hidden">
                      <img src="https://detoxinista.com/wp-content/uploads/2019/09/banana-ice-cream-recipe-1.jpg" alt="Banana nice cream" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 group-hover:text-purple-600">3-Ingredient Banana Nice Cream</h4>
                      <div className="flex items-center text-xs text-gray-500 mt-1">
                        <Star className="w-3 h-3 mr-1 text-yellow-500" />
                        <span>4.8 (1.5k)</span>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            {/* Essential Tools */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Essential Dairy-Free Baking Tools</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-purple-100 rounded-md p-1 mr-3">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">High-speed blender</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-purple-100 rounded-md p-1 mr-3">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">Nut milk bag</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-purple-100 rounded-md p-1 mr-3">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">Springform pan</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-purple-100 rounded-md p-1 mr-3">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">Popsicle molds</span>
                </li>
              </ul>
            </div>

            {/* Advertisement Placeholder */}
            <div className="bg-gray-100 rounded-lg p-6 mb-8">
              <p className="text-center text-gray-500 text-sm mb-4">ADVERTISEMENT</p>
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-6 text-white text-center">
                <h4 className="font-bold mb-2">Dairy-Free Baking Masterclass</h4>
                <p className="text-sm mb-4">Learn professional techniques from pastry chefs</p>
                <button className="bg-white hover:bg-gray-100 text-purple-600 px-4 py-2 rounded text-sm font-medium transition-colors">
                  ENROLL NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}