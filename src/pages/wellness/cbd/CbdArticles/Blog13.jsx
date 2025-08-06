"use client";

import { useState } from "react";
import { User, Calendar } from "lucide-react";

export default function CbdArticle13() {
  const [email, setEmail] = useState("");
  const [activeTab, setActiveTab] = useState("Nutrition Basics");

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  const tabs = [
    "Nutrition Basics",
    "CBD & Diet Synergy",
    "Timing Strategies",
    "Supplement Stacking",
    "Recipes & Meal Plans",
    "Lifestyle Integration",
    "Common Mistakes",
    "FAQ",
    "Takeaway",
  ];

  return (
    <div className="min-h-screen bg-white mt-28 pt-4 sm:pt-8 md:pt-12 lg:pt-16 xl:pt-20">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header Section */}
            <div className="mb-6 sm:mb-8">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6 leading-tight">
                CBD and Nutrition: Maximizing Your Wellness Routine
              </h1>

              {/* Navigation Tabs */}
              <div className="relative mb-4 sm:mb-6">
                <div className="flex overflow-x-auto pb-2 mb-4 sm:mb-6 scrollbar-hide border-b border-gray-200">
                  <div className="flex space-x-1 sm:space-x-2 min-w-max">
                    {tabs.map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-medium border-b-2 whitespace-nowrap transition-colors flex-shrink-0 ${
                          activeTab === tab
                            ? "border-teal-500 text-teal-600"
                            : "border-transparent text-gray-600 hover:text-gray-900"
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Intro Text */}
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-4 sm:mb-6 md:mb-8 leading-relaxed">
                Essential nutrition guidelines, timing recommendations, and dietary strategies 
                to optimize your CBD experience and support overall wellness through 
                synergistic food combinations and lifestyle practices.
              </p>

              {/* Main Image */}
              <div className="mb-4 sm:mb-6 md:mb-8">
                <img
                  src="https://media.post.rvohealth.io/wp-content/uploads/2024/07/CBD-Nutrition-732x549-Feature.jpg"
                  alt="Healthy foods and CBD products arranged together"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>

              {/* Article Description */}
              <div className="bg-blue-50 border-l-4 border-blue-400 p-3 sm:p-4 md:p-5 mb-4 sm:mb-6 md:mb-8 rounded-r-lg">
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Combining CBD with proper nutrition creates a powerful synergy that enhances 
                  bioavailability, prolongs effects, and supports your endocannabinoid system. 
                  This guide explores how to integrate CBD into your diet strategically, 
                  optimize absorption with specific foods, and avoid common nutritional pitfalls.
                </p>
              </div>

              <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 md:mb-8">
                We'll provide science-backed recommendations for meal timing, supplement 
                combinations, and dietary patterns that work harmoniously with CBD to 
                maximize your wellness results.
              </p>
            </div>

            {/* Nutrition Fundamentals */}
            <div className="bg-blue-50 border-l-4 border-blue-400 p-3 sm:p-4 md:p-5 rounded-r-lg mb-4 sm:mb-6 md:mb-8">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">
                Nutritional Foundations for CBD Users
              </h2>

              <div className="space-y-3 sm:space-y-4">
                <div>
                  <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">
                    1. Essential Fatty Acids
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed">
                    CBD is fat-soluble, meaning it dissolves in fats rather than water. 
                    Consuming healthy fats (avocados, nuts, olive oil) with CBD enhances 
                    absorption by up to 300%. Omega-3 fatty acids (found in fatty fish, 
                    flaxseeds, walnuts) are particularly beneficial as they support 
                    endocannabinoid system function.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">
                    2. Micronutrient Support
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed">
                    Certain vitamins and minerals work synergistically with CBD. Magnesium 
                    (leafy greens, pumpkin seeds) helps regulate CB1 receptors, while 
                    vitamin D (fatty fish, eggs) supports endocannabinoid production. 
                    Zinc (oysters, legumes) is crucial for enzyme function in cannabinoid 
                    metabolism.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">
                    3. Gut Health Optimization
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed">
                    A healthy gut microbiome enhances CBD absorption and metabolism. 
                    Incorporate probiotic foods (yogurt, kefir, sauerkraut) and prebiotic 
                    fibers (garlic, onions, bananas) to support the gut-endocannabinoid 
                    axis, which influences CBD's effectiveness.
                  </p>
                </div>
              </div>
            </div>

            {/* CBD & Diet Synergy */}
            <div className="bg-green-50 border border-green-400 p-3 sm:p-4 md:p-5 rounded-xl shadow-md mb-4 sm:mb-6 md:mb-8">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-green-700">
                Strategic Food Pairings with CBD
              </h2>

              <div className="space-y-3 sm:space-y-4">
                <p className="text-sm sm:text-base leading-relaxed">
                  Certain foods can dramatically enhance or inhibit CBD's effects. 
                  These research-backed combinations optimize bioavailability and 
                  therapeutic potential:
                </p>

                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-2">For Morning CBD:</h4>
                  <p className="text-sm">
                    Pair with a healthy fat source (avocado toast, chia pudding) and 
                    black pepper (contains piperine which may enhance absorption by 
                    up to 200%). Avoid grapefruit as it can interfere with CBD metabolism.
                  </p>
                </div>

                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-2">For Evening CBD:</h4>
                  <p className="text-sm">
                    Combine with tart cherries (natural melatonin source) and magnesium-rich 
                    foods (pumpkin seeds, spinach) to enhance relaxation and sleep quality.
                  </p>
                </div>

                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-2">For Exercise Recovery:</h4>
                  <p className="text-sm">
                    Mix CBD with pineapple (bromelain enzyme reduces inflammation) and 
                    turmeric (curcumin boosts CBD's anti-inflammatory effects) in post-workout 
                    smoothies.
                  </p>
                </div>

                <p className="text-sm sm:text-base leading-relaxed">
                  The Mediterranean diet pattern—rich in olive oil, fish, nuts, and 
                  vegetables—provides an ideal nutritional foundation for CBD users, 
                  offering complementary anti-inflammatory benefits.
                </p>
              </div>
            </div>

            {/* Timing Strategies */}
            <section className="bg-white p-3 sm:p-4 md:p-6 rounded-xl shadow-sm mb-6 sm:mb-8 md:mb-10 border border-gray-200">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-gray-800">
                Optimal CBD Timing with Meals
              </h2>

              <div className="overflow-x-auto -mx-3 sm:mx-0">
                <div className="min-w-full inline-block align-middle">
                  <table className="min-w-full table-auto border border-gray-300 text-xs sm:text-sm md:text-base">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2 text-left font-bold">
                          Goal
                        </th>
                        <th className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2 text-left font-bold">
                          Best Timing
                        </th>
                        <th className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2 text-left font-bold">
                          Food Pairings
                        </th>
                        <th className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2 text-left font-bold">
                          Notes
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2 font-semibold">
                          Maximum Absorption
                        </td>
                        <td className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2">
                          With meals containing 10-15g healthy fats
                        </td>
                        <td className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2">
                          Avocado, nuts, olive oil, coconut
                        </td>
                        <td className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2">
                          Increases bioavailability 3-5x vs empty stomach
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2 font-semibold">
                          Sustained Release
                        </td>
                        <td className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2">
                          30 min before high-fiber meals
                        </td>
                        <td className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2">
                          Whole grains, legumes, vegetables
                        </td>
                        <td className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2">
                          Slows absorption for prolonged effects
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2 font-semibold">
                          Sleep Support
                        </td>
                        <td className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2">
                          With light evening snack
                        </td>
                        <td className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2">
                          Almonds, kiwi, chamomile tea
                        </td>
                        <td className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2">
                          Avoid heavy meals which may disrupt sleep
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2 font-semibold">
                          Exercise Performance
                        </td>
                        <td className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2">
                          60-90 min pre-workout with carbs
                        </td>
                        <td className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2">
                          Banana, oats, honey
                        </td>
                        <td className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2">
                          May enhance focus and reduce exercise-induced inflammation
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Supplement Stacking */}
            <section className="bg-white p-3 sm:p-4 md:p-6 rounded-xl shadow-md mb-6 sm:mb-8 md:mb-10 border border-gray-200">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-gray-800">
                Science-Backed Supplement Combinations
              </h2>
              <p className="mb-4 sm:mb-6 text-sm sm:text-base text-gray-600">
                These evidence-based supplement stacks work synergistically with CBD 
                to enhance specific wellness outcomes:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Stress & Anxiety Support</h3>
                  <ul className="text-sm space-y-1">
                    <li>• CBD + L-theanine (200mg)</li>
                    <li>• CBD + Ashwagandha (500mg)</li>
                    <li>• CBD + Magnesium Glycinate (200mg)</li>
                  </ul>
                  <p className="text-xs mt-2 text-gray-600">
                    Take with morning smoothie containing banana and almond butter
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Inflammation & Recovery</h3>
                  <ul className="text-sm space-y-1">
                    <li>• CBD + Turmeric (500mg with black pepper)</li>
                    <li>• CBD + Omega-3s (1000mg EPA/DHA)</li>
                    <li>• CBD + Bromelain (500mg)</li>
                  </ul>
                  <p className="text-xs mt-2 text-gray-600">
                    Best taken post-workout with pineapple and chia seeds
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Sleep Enhancement</h3>
                  <ul className="text-sm space-y-1">
                    <li>• CBD + Magnesium Threonate (145mg)</li>
                    <li>• CBD + Apigenin (50mg)</li>
                    <li>• CBD + Glycine (3g)</li>
                  </ul>
                  <p className="text-xs mt-2 text-gray-600">
                    Combine with tart cherry juice 30 min before bed
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Cognitive Performance</h3>
                  <ul className="text-sm space-y-1">
                    <li>• CBD + Lion's Mane (500mg)</li>
                    <li>• CBD + Bacopa Monnieri (300mg)</li>
                    <li>• CBD + Rhodiola Rosea (400mg)</li>
                  </ul>
                  <p className="text-xs mt-2 text-gray-600">
                    Take with MCT oil and dark chocolate for enhanced focus
                  </p>
                </div>
              </div>
            </section>

            {/* Recipes & Meal Plans */}
            <section className="bg-white p-3 sm:p-4 md:p-6 rounded-xl shadow-md mb-6 sm:mb-8 md:mb-10 border border-gray-200">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-gray-800">
                CBD-Enhanced Recipes for Daily Wellness
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                These simple, nutritious recipes incorporate CBD seamlessly into your 
                daily routine while optimizing absorption and benefits:
              </p>

              <div className="space-y-4">
                <div className="border-b pb-4">
                  <h3 className="text-lg font-semibold mb-2">Morning Boost Elixir</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium">Ingredients:</h4>
                      <ul className="text-sm mt-1 list-disc pl-5 space-y-1">
                        <li>1 cup almond milk</li>
                        <li>1 tsp MCT oil</li>
                        <li>1/2 banana</li>
                        <li>1 tsp almond butter</li>
                        <li>Pinch of cinnamon</li>
                        <li>25mg CBD oil</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium">Instructions:</h4>
                      <p className="text-sm mt-1">
                        Blend all ingredients except CBD until smooth. Add CBD oil last 
                        and pulse briefly. Drink immediately for sustained morning energy 
                        and focus.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-b pb-4">
                  <h3 className="text-lg font-semibold mb-2">Anti-Inflammatory Lunch Bowl</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium">Ingredients:</h4>
                      <ul className="text-sm mt-1 list-disc pl-5 space-y-1">
                        <li>2 cups mixed greens</li>
                        <li>1/2 avocado</li>
                        <li>3oz wild salmon</li>
                        <li>1/4 cup walnuts</li>
                        <li>1 tbsp olive oil + lemon</li>
                        <li>15mg CBD oil (added to dressing)</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium">Benefits:</h4>
                      <p className="text-sm mt-1">
                        Omega-3s from salmon and walnuts enhance CBD absorption while 
                        providing complementary anti-inflammatory effects. Perfect 
                        post-workout recovery meal.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Evening Relaxation Tea</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium">Ingredients:</h4>
                      <ul className="text-sm mt-1 list-disc pl-5 space-y-1">
                        <li>1 cup chamomile tea</li>
                        <li>1 tsp coconut oil</li>
                        <li>Pinch of black pepper</li>
                        <li>1 tsp honey (optional)</li>
                        <li>25mg CBD oil</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium">Science Behind It:</h4>
                      <p className="text-sm mt-1">
                        Chamomile contains apigenin which works synergistically with CBD 
                        for relaxation. Coconut oil enhances absorption, while black 
                        pepper's piperine may increase bioavailability by 200%.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Lifestyle Integration */}
            <section className="bg-white p-3 sm:p-4 md:p-6 rounded-xl shadow-md mb-6 sm:mb-8 md:mb-10 border border-gray-200">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-gray-800">
                Holistic Lifestyle Practices to Enhance CBD Effects
              </h2>

              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                Beyond nutrition, these lifestyle factors significantly impact how 
                your body utilizes and responds to CBD:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 sm:mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Exercise Considerations</h3>
                  <ul className="text-sm space-y-1">
                    <li>• Moderate exercise increases CB1 receptor sensitivity</li>
                    <li>• Yoga enhances endocannabinoid tone</li>
                    <li>• Time CBD intake 60-90min before workouts</li>
                    <li>• Post-workout CBD reduces inflammation</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Sleep Optimization</h3>
                  <ul className="text-sm space-y-1">
                    <li>• CBD works best with consistent sleep schedule</li>
                    <li>• Blue light reduction enhances CBD's sleep benefits</li>
                    <li>• Cool bedroom temperature improves metabolism</li>
                    <li>• 7-9 hours sleep maximizes endocannabinoid production</li>
                  </ul>
                </div>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Stress Management</h3>
                <ul className="text-sm space-y-1">
                  <li>• Meditation upregulates CB1 receptors</li>
                  <li>• Deep breathing enhances CBD absorption</li>
                  <li>• Nature exposure boosts endocannabinoid levels</li>
                  <li>• Chronic stress depletes endogenous cannabinoids</li>
                </ul>
              </div>
            </section>

            {/* Common Mistakes */}
            <section className="bg-amber-50 p-3 sm:p-4 md:p-6 rounded-xl shadow-md mb-6 sm:mb-8 md:mb-10 relative border border-amber-200">
              <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                Common Nutritional Mistakes with CBD
              </h2>

              <p className="text-base text-gray-700 mb-3">
                Avoid these frequent errors that can undermine CBD effectiveness:
              </p>

              <ul className="list-disc list-inside pl-5 mb-3 space-y-1">
                <li>Taking CBD on empty stomach (reduces absorption by 60-70%)</li>
                <li>Combining with grapefruit or grapefruit juice (interferes with metabolism)</li>
                <li>Excessive alcohol consumption (alters cannabinoid processing)</li>
                <li>High-sugar diets (reduce endocannabinoid system sensitivity)</li>
                <li>Chronic dehydration (impairs cannabinoid distribution)</li>
              </ul>

              <div className="absolute bottom-4 right-4">
                <span className="text-sm font-semibold text-gray-700">
                  healthline
                </span>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-white p-6 rounded-xl shadow-md mb-10">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Should I take CBD with food or on an empty stomach?
                  </h3>
                  <p className="text-base text-gray-600">
                    CBD should generally be taken with food containing healthy fats 
                    (avocado, nuts, olive oil) to enhance absorption. Taking CBD on 
                    an empty stomach may result in as much as 60-70% less absorption. 
                    The exception would be if you're using CBD specifically for nausea 
                    relief, where small amounts on an empty stomach may be preferable.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Are there any foods that interfere with CBD?
                  </h3>
                  <p className="text-base text-gray-600">
                    Grapefruit and grapefruit juice contain compounds that inhibit 
                    cytochrome P450 enzymes responsible for metabolizing CBD, 
                    potentially leading to higher blood concentrations. High-sugar 
                    foods may reduce endocannabinoid system sensitivity over time. 
                    Excessive alcohol can also interfere with CBD metabolism and 
                    amplify sedative effects.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    How does diet affect CBD tolerance?
                  </h3>
                  <p className="text-base text-gray-600">
                    A diet rich in omega-3 fatty acids may help maintain CB1 receptor 
                    sensitivity, potentially reducing tolerance development. Conversely, 
                    high-sugar and high-saturated fat diets are associated with 
                    endocannabinoid system dysregulation. Staying properly hydrated 
                    and consuming adequate magnesium also supports optimal cannabinoid 
                    receptor function.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Can I cook with CBD oil?
                  </h3>
                  <p className="text-base text-gray-600">
                    Yes, but with important caveats. CBD begins to degrade around 
                    320°F (160°C), so it's best added to finished dishes or used 
                    in no-bake recipes. When cooking, combine CBD with fats (like 
                    olive oil or butter) and avoid direct high heat. Baking should 
                    be done at lower temperatures (under 300°F) for shorter durations 
                    to preserve CBD content.
                  </p>
                </div>
              </div>
            </section>

            {/* Takeaway */}
            <section className="bg-white p-6 rounded-xl shadow-md mb-10">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                Key Takeaways
              </h2>

              <p className="text-base text-gray-600 mb-4">
                Optimizing your nutrition and lifestyle habits can significantly 
                enhance CBD's effectiveness. Strategic food pairings, proper timing, 
                and complementary supplements create a synergistic approach that 
                maximizes the benefits of your CBD regimen while supporting overall 
                endocannabinoid system health.
              </p>

              <p className="text-base text-gray-600 mb-4">
                Remember that individual responses vary—what works perfectly for one 
                person may need adjustment for another. Keep a wellness journal to 
                track how different dietary approaches affect your CBD experience, 
                and consider working with a nutritionist or healthcare provider 
                knowledgeable about cannabinoids for personalized guidance.
              </p>

              <div className="bg-amber-50 p-4 rounded-lg mb-4">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Important Note:</span> The 
                  information in this article is intended for educational purposes 
                  only and should not be considered medical advice. Always consult 
                  with a qualified healthcare professional before making changes to 
                  your supplement regimen, especially if you have underlying health 
                  conditions or take medications.
                </p>
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                The Future of CBD Nutrition Science
              </h3>

              <p className="text-base text-gray-600">
                Emerging research continues to uncover fascinating connections between 
                nutrition, the microbiome, and the endocannabinoid system. Future 
                developments may include personalized CBD-nutrition protocols based 
                on genetic testing, advanced delivery systems that optimize 
                bioavailability, and clinically validated dietary programs designed 
                specifically to support cannabinoid therapy.
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
                      Medically reviewed
                    </a>{" "}
                    by{" "}
                    <a
                      href="#"
                      className="text-blue-600 hover:underline font-medium"
                    >
                      Dominique Fontaine, BSN, RN, HNB-BC, HWNC-BC
                    </a>
                  </p>

                  <p className="text-sm text-gray-600 mb-1">
                    — Written by{" "}
                    <a
                      href="#"
                      className="text-blue-600 hover:underline font-medium"
                    >
                      Jessica Timmons
                    </a>
                  </p>

                  <p className="text-sm text-gray-600 flex items-center gap-1">
                    — <Calendar className="w-3 h-3" />
                    <a href="#" className="text-blue-600 hover:underline">
                      Updated on June 30, 2024
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-teal-50 rounded-lg p-6 mb-8">
              <div className="mb-4">
                <h3 className="text-sm font-bold text-teal-800 uppercase tracking-wide mb-2">
                  HEALTHLINE NEWSLETTER
                </h3>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  The best of health and wellness
                </h4>
                <p className="text-gray-700 text-sm">
                  We do the research so you don't have to. Stay in the know with
                  the latest in health and wellness.
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
                  JOIN NOW
                </button>
              </form>

              <p className="text-xs text-gray-600 mt-3">
                Your{" "}
                <a href="#" className="text-teal-600 hover:underline">
                  privacy
                </a>{" "}
                is important to us
              </p>
            </div>

            {/* Advertisement Placeholder */}
            <div className="bg-gray-100 rounded-lg p-6 mb-8">
              <p className="text-center text-gray-500 text-sm mb-4">
                ADVERTISEMENT
              </p>
              <div className="bg-blue-600 rounded-lg p-6 text-white text-center">
                <h4 className="font-bold mb-2">Creating Your Avatar</h4>
                <p className="text-sm mb-4">
                  Hair Color, Eye Color, Skin Tone, Body Type
                </p>
                <button className="bg-teal-400 hover:bg-teal-500 text-white px-4 py-2 rounded text-sm font-medium transition-colors">
                  CONTINUE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}