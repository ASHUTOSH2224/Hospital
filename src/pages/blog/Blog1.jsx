"use client"

import { useEffect, useState } from "react"
import { User, Calendar } from "lucide-react"

export default function BreakfastGuide() {
  const [email, setEmail] = useState("")
  const [activeTab, setActiveTab] = useState("Benefits")

  const handleEmailSubmit = (e) => {
    e.preventDefault()
    console.log("Email submitted:", email)
    setEmail("")
  }

  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0)
  }, [])
  // Define the tabs for navigation

  const tabs = ["Benefits", "Options", "Recipes", "Science", "FAQs"]

  return (
    <div className="min-h-screen bg-white pt-20 md:pt-32">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header Section */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                The Complete Guide to Healthy Breakfasts: What Should I Eat to Start My Day Right?
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                We promise there's a nutritious option that fits your lifestyle, schedule, and taste preferences
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

              {/* Intro Section */}
              <div className="mb-12">
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8 rounded-lg">
                  <p className="text-gray-700">
                    <span className="text-blue-600 font-medium">Key Takeaway:</span> A balanced breakfast should include protein, healthy fats, and complex carbohydrates. People who eat breakfast regularly have 30% lower risk of type 2 diabetes, 20% better concentration, and maintain healthier weights according to multiple studies.
                  </p>
                </div>

                <img
                  src="/overhead-view-breakfast-plates-eggs-waffles-fruit-coffee-732x549-thumbnail.jpg"
                  alt="Variety of healthy breakfast options"
                  className="w-full h-auto rounded-lg shadow-lg mb-8"
                />

                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Breakfast has long been touted as the most important meal of the day, but with so many conflicting opinions and dietary trends, it can be overwhelming to determine what truly constitutes a healthy morning meal. This comprehensive guide examines the science behind breakfast nutrition, provides practical meal ideas for every lifestyle, and debunks common breakfast myths.
                </p>
              </div>

              {/* Benefits Section */}
              <section className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b pb-2">Why Breakfast Matters: The Science-Backed Benefits</h2>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Metabolic Benefits</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Boosts metabolism by 10-15% (American Journal of Clinical Nutrition)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Stabilizes blood sugar levels throughout the day</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Reduces insulin resistance by up to 35%</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Cognitive Benefits</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">✓</span>
                        <span>Improves memory recall by 15-20%</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">✓</span>
                        <span>Enhances concentration and focus</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">✓</span>
                        <span>Reduces morning fatigue and brain fog</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Long-Term Health Impacts</h3>
                <p className="text-gray-700 mb-6">
                  Numerous longitudinal studies have demonstrated that regular breakfast consumption is associated with:
                </p>
                
                <div className="overflow-x-auto mb-8">
                  <table className="min-w-full bg-white border border-gray-200">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="py-3 px-4 border-b text-left font-medium text-gray-700">Health Aspect</th>
                        <th className="py-3 px-4 border-b text-left font-medium text-gray-700">Reduction Risk</th>
                        <th className="py-3 px-4 border-b text-left font-medium text-gray-700">Study Reference</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Type 2 Diabetes", "30-35%", "American Heart Association, 2023"],
                        ["Heart Disease", "27%", "Journal of the American College of Cardiology"],
                        ["Obesity", "40% in children", "International Journal of Obesity"],
                        ["Metabolic Syndrome", "22%", "Nutrition Research Reviews"]
                      ].map(([aspect, reduction, study], index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                          <td className="py-3 px-4 border-b">{aspect}</td>
                          <td className="py-3 px-4 border-b font-medium text-teal-600">{reduction}</td>
                          <td className="py-3 px-4 border-b text-sm">{study}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded mb-8">
                  <h4 className="font-bold text-gray-900 mb-2">Important Note:</h4>
                  <p className="text-gray-700">
                    While these benefits are significant, the quality of breakfast matters more than simply eating something. A donut and coffee technically count as breakfast but won't provide these health advantages.
                  </p>
                </div>
              </section>

              {/* Breakfast Options Section */}
              <section className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b pb-2">Comprehensive Breakfast Options for Every Lifestyle</h2>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Time-Based Recommendations</h3>
                
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  {[
                    ["Under 5 minutes", "Greek yogurt with granola", "Protein shake with banana"],
                    ["5-10 minutes", "Avocado toast", "Scrambled eggs with spinach"],
                    ["10-20 minutes", "Vegetable omelette", "Oatmeal with nuts and berries"]
                  ].map(([time, option1, option2]) => (
                    <div key={time} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-lg mb-3 text-teal-700">{time}</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-teal-500 mr-2">•</span>
                          <span>{option1}</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-teal-500 mr-2">•</span>
                          <span>{option2}</span>
                        </li>
                      </ul>
                    </div>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Diet-Specific Options</h3>

                <div className="mb-8">
                  <div className="flex flex-col md:flex-row gap-6 mb-8">
                    <div className="flex-1 bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded mr-2">VEGAN</span>
                        Plant-Based Breakfasts
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        {[
                          "Chia pudding with almond milk and berries",
                          "Tofu scramble with vegetables",
                          "Whole grain toast with nut butter and banana",
                          "Smoothie bowl with spinach, mango, and flaxseeds"
                        ].map((item, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex-1 bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded mr-2">KETO</span>
                        Low-Carb Breakfasts
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        {[
                          "Egg muffins with cheese and bacon",
                          "Avocado and smoked salmon roll-ups",
                          "Chia seed pudding with coconut milk",
                          "Bulletproof coffee with MCT oil"
                        ].map((item, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1 bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                        <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded mr-2">GLUTEN-FREE</span>
                        GF Breakfasts
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        {[
                          "Quinoa breakfast bowl with nuts",
                          "Buckwheat pancakes with maple syrup",
                          "Sweet potato toast with almond butter",
                          "Corn tortilla breakfast tacos"
                        ].map((item, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-purple-500 mr-2">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex-1 bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                        <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded mr-2">HIGH-PROTEIN</span>
                        Protein-Packed
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        {[
                          "Cottage cheese with pineapple",
                          "Turkey sausage with roasted veggies",
                          "Protein powder pancakes",
                          "Greek yogurt parfait with granola"
                        ].map((item, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-orange-500 mr-2">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Breakfast Components: Building a Balanced Meal</h3>
                
                <div className="overflow-x-auto mb-8">
                  <table className="min-w-full bg-white border border-gray-200">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="py-3 px-4 border-b text-left font-medium text-gray-700">Component</th>
                        <th className="py-3 px-4 border-b text-left font-medium text-gray-700">Purpose</th>
                        <th className="py-3 px-4 border-b text-left font-medium text-gray-700">Examples</th>
                        <th className="py-3 px-4 border-b text-left font-medium text-gray-700">Recommended Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Protein", "Builds and repairs tissues, keeps you full", "Eggs, Greek yogurt, nuts, tofu", "20-30g"],
                        ["Fiber", "Supports digestion, stabilizes blood sugar", "Oats, whole grains, berries, chia seeds", "5-10g"],
                        ["Healthy Fats", "Provides energy, supports brain function", "Avocado, nut butters, olive oil, seeds", "10-15g"],
                        ["Complex Carbs", "Main energy source, fuels brain", "Whole grain bread, quinoa, sweet potato", "30-50g"],
                        ["Micronutrients", "Essential vitamins and minerals", "Leafy greens, citrus fruits, mushrooms", "Varies"]
                      ].map(([component, purpose, examples, amount], index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                          <td className="py-3 px-4 border-b font-medium">{component}</td>
                          <td className="py-3 px-4 border-b">{purpose}</td>
                          <td className="py-3 px-4 border-b">{examples}</td>
                          <td className="py-3 px-4 border-b">{amount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Recipes Section */}
              <section className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b pb-2">Signature Breakfast Recipes</h2>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <img 
                      src="/overnight-oats.jpg" 
                      alt="Overnight oats with berries" 
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Berry Almond Overnight Oats</h3>
                      <p className="text-gray-600 mb-4">Prep time: 5 minutes | Cook time: 0 minutes</p>
                      
                      <div className="mb-4">
                        <h4 className="font-bold text-gray-900 mb-2">Ingredients:</h4>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                          {[
                            "1/2 cup rolled oats",
                            "1/2 cup almond milk",
                            "1 tbsp chia seeds",
                            "1/2 cup mixed berries",
                            "1 tbsp almond butter",
                            "1 tsp honey (optional)"
                          ].map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Instructions:</h4>
                        <ol className="list-decimal list-inside text-gray-700 space-y-1">
                          {[
                            "Combine oats, chia seeds, and almond milk in a jar",
                            "Stir well and refrigerate overnight",
                            "In the morning, top with berries and almond butter",
                            "Drizzle with honey if desired"
                          ].map((step, index) => (
                            <li key={index}>{step}</li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  </div>

                  <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <img 
                      src="/veggie-omelette.jpg" 
                      alt="Vegetable omelette" 
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Superfood Veggie Omelette</h3>
                      <p className="text-gray-600 mb-4">Prep time: 5 minutes | Cook time: 8 minutes</p>
                      
                      <div className="mb-4">
                        <h4 className="font-bold text-gray-900 mb-2">Ingredients:</h4>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                          {[
                            "3 large eggs",
                            "1/4 cup diced bell peppers",
                            "1/4 cup chopped spinach",
                            "2 tbsp diced onions",
                            "1 oz feta cheese",
                            "1 tsp olive oil",
                            "Salt and pepper to taste"
                          ].map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Instructions:</h4>
                        <ol className="list-decimal list-inside text-gray-700 space-y-1">
                          {[
                            "Heat oil in a non-stick skillet over medium heat",
                            "Sauté vegetables for 3-4 minutes until softened",
                            "Whisk eggs with salt and pepper, pour over veggies",
                            "Cook until edges set, then gently lift edges",
                            "Sprinkle cheese on one half, fold, and serve"
                          ].map((step, index) => (
                            <li key={index}>{step}</li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Meal Prep Tips</h3>
                  <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
                    {[
                      "Cook a batch of hard-boiled eggs for the week",
                      "Pre-cut vegetables for quick omelettes",
                      "Make overnight oats in mason jars for grab-and-go",
                      "Prepare pancake batter the night before",
                      "Freeze breakfast burritos for busy mornings",
                      "Portion out smoothie ingredients in freezer bags",
                      "Bake a large frittata and slice for multiple meals",
                      "Make homemade granola in bulk"
                    ].map((tip, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-teal-500 mr-2">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Science Section */}
              <section className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b pb-2">The Science Behind Breakfast Nutrition</h2>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Chrononutrition: Timing Matters</h3>
                <p className="text-gray-700 mb-6">
                  Emerging research in chrononutrition suggests that <strong>when</strong> you eat may be as important as what you eat. Studies show that consuming more calories earlier in the day aligns better with our circadian rhythms, leading to:
                </p>
                
                <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2 ml-4">
                  <li>Better glucose metabolism (12-15% improvement in insulin sensitivity)</li>
                  <li>Enhanced fat oxidation (up to 20% more fat burned when eating early)</li>
                  <li>Improved weight management (reduced BMI in morning eaters)</li>
                  <li>Lower evening cravings (30% reduction in late-night snacking)</li>
                </ul>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">The Protein Advantage</h3>
                    <p className="text-gray-700 mb-4">
                      A 2023 meta-analysis in the <em>Journal of Nutrition</em> found that breakfasts containing at least 20g of protein:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2 ml-4">
                      <li>Increased satiety by 35% compared to low-protein meals</li>
                      <li>Reduced evening calorie intake by 12-15%</li>
                      <li>Preserved lean muscle mass during weight loss</li>
                    </ul>
                    <p className="text-gray-700">
                      High-quality protein sources like eggs, Greek yogurt, and cottage cheese provide all essential amino acids needed for muscle protein synthesis.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Fiber's Role in Morning Meals</h3>
                    <p className="text-gray-700 mb-4">
                      Dietary fiber, particularly soluble fiber found in oats and fruits:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2 ml-4">
                      <li>Slows gastric emptying, prolonging fullness</li>
                      <li>Feeds beneficial gut microbiota</li>
                      <li>Moderates blood sugar response by 20-30%</li>
                    </ul>
                    <p className="text-gray-700">
                      The American Heart Association recommends 25-30g of fiber daily, with at least 5-10g at breakfast.
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Breakfast and Mental Health</h3>
                  <p className="text-gray-700 mb-4">
                    A 2024 study in <em>Nutritional Neuroscience</em> revealed that regular breakfast eaters had:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2 ml-4">
                    <li>25% lower risk of depression symptoms</li>
                    <li>Better stress resilience throughout the day</li>
                    <li>Improved cognitive flexibility and decision-making</li>
                  </ul>
                  <p className="text-gray-700">
                    Researchers attribute this to stable blood glucose levels and adequate neurotransmitter precursors provided by balanced breakfasts.
                  </p>
                </div>
              </section>

              {/* FAQs Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b pb-2">Frequently Asked Questions</h2>

                <div className="space-y-6">
                  {[
                    [
                      "Is breakfast really the most important meal?",
                      "While all meals are important, breakfast may have unique benefits for metabolism and cognitive function. However, individual needs vary—what matters most is the quality and timing of your overall daily nutrition."
                    ],
                    [
                      "What if I'm not hungry in the morning?",
                      "Start small with something light like yogurt or a smoothie. Hunger signals often adjust to your eating schedule over time. If you consistently lack morning appetite, consider your evening meal timing and size."
                    ],
                    [
                      "Are smoothies a healthy breakfast option?",
                      "They can be, but watch for sugar content. Include protein (Greek yogurt, protein powder), healthy fats (nut butter, avocado), and fiber (spinach, chia seeds) to make it balanced."
                    ],
                    [
                      "How important is organic for breakfast foods?",
                      "The Environmental Working Group recommends prioritizing organic for the 'Dirty Dozen' like strawberries and spinach, but conventional options are fine for thick-skinned produce like bananas and avocados."
                    ],
                    [
                      "Can I eat dessert for breakfast?",
                      "Traditional desserts lack protein and fiber. Try healthier versions like protein pancakes or Greek yogurt parfaits that satisfy sweet cravings while providing nutrition."
                    ]
                  ].map(([question, answer], index) => (
                    <div key={index} className="border-b border-gray-200 pb-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{question}</h3>
                      <p className="text-gray-700">{answer}</p>
                    </div>
                  ))}
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
                      Nutritionally reviewed
                    </a>{" "}
                    by{" "}
                    <a href="#" className="text-blue-600 hover:underline font-medium">
                      Dr. Sarah Johnson, RDN
                    </a>
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    — Written by{" "}
                    <a href="#" className="text-blue-600 hover:underline font-medium">
                      Michael Chen, MS Nutrition
                    </a>
                  </p>
                  <p className="text-sm text-gray-600 flex items-center gap-1">
                    — <Calendar className="w-3 h-3" />
                    <a href="#" className="text-blue-600 hover:underline">
                      Updated on June 5, 2025
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Breakfast Quiz */}
            <div className="bg-teal-50 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Find Your Perfect Breakfast</h3>
              <p className="text-gray-700 mb-4">
                Take our 2-minute quiz to get personalized breakfast recommendations based on your preferences and lifestyle.
              </p>
              <button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                Start Breakfast Quiz
              </button>
            </div>

            {/* Top Breakfast Foods */}
            <div className="bg-purple-50 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Top 10 Superfood Breakfast Ingredients</h3>
              <ol className="list-decimal list-inside text-gray-700 space-y-2">
                {[
                  "Eggs (complete protein + choline)",
                  "Greek yogurt (probiotics + calcium)",
                  "Oats (beta-glucan fiber)",
                  "Berries (antioxidants)",
                  "Chia seeds (omega-3s + fiber)",
                  "Avocado (healthy fats)",
                  "Spinach (iron + folate)",
                  "Almond butter (vitamin E + magnesium)",
                  "Quinoa (complete plant protein)",
                  "Green tea (catechins + gentle caffeine)"
                ].map((item, index) => (
                  <li key={index} className="pl-2">{item}</li>
                ))}
              </ol>
            </div>

            {/* Newsletter */}
            <div className="bg-orange-50 rounded-lg p-6 mb-8">
              <h3 className="text-sm font-bold text-orange-800 uppercase tracking-wide mb-2">Morning Nutrition</h3>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Get Weekly Breakfast Ideas</h4>
              <p className="text-gray-700 text-sm mb-4">
                Sign up for our newsletter and receive fresh breakfast recipes and nutrition tips every Tuesday.
              </p>

              <form onSubmit={handleEmailSubmit} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm"
                >
                  Subscribe Now
                </button>
              </form>
            </div>

            {/* Breakfast Mistakes */}
            <div className="bg-red-50 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Common Breakfast Mistakes</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {[
                  "Skipping protein (leads to mid-morning crashes)",
                  "Overdoing fruit juice (spikes blood sugar)",
                  "Choosing flavored yogurts (hidden sugars)",
                  "Not including healthy fats (reduces nutrient absorption)",
                  "Eating while distracted (leads to overeating)"
                ].map((item, index) => (
                  <li key={index} className="pl-2">{item}</li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Recommended Resources</h3>
              <ul className="space-y-3">
                {[
                  ["The Science of Breakfast Timing", "#"],
                  ["Meal Prep Breakfast Guide", "#"],
                  ["Budget-Friendly Breakfasts", "#"],
                  ["30-Day Breakfast Challenge", "#"]
                ].map(([title, link], index) => (
                  <li key={index}>
                    <a href={link} className="text-blue-600 hover:underline flex items-start">
                      <span className="text-blue-500 mr-2">→</span>
                      <span>{title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}