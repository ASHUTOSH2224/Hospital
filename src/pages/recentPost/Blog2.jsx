"use client"

import { useEffect, useState } from "react"
import { User, Calendar, AlertTriangle, CheckCircle, Leaf } from "lucide-react"

export default function FruitVegetableSafetyGuide() {
  const [email, setEmail] = useState("")
  const [activeTab, setActiveTab] = useState("Basics")

  const handleEmailSubmit = (e) => {
    e.preventDefault()
    console.log("Email submitted:", email)
    setEmail("")
  }

        useEffect(() => {
      // Scroll to top when the component mounts
      window.scrollTo(0, 0)
    }, [])

  const tabs = ["Basics", "Storage", "Washing", "Preparation", "Risks"]

  return (
    <div className="min-h-screen bg-white pt-20 md:pt-32">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header Section */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Fruit And Vegetables Safety: The Complete Guide to Safe Handling
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

              {/* Intro Text */}
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Eating fresh fruits and vegetables is essential for good health, but foodborne illness can occur if produce isn't properly handled. Learn how to select, store, prepare, and serve produce safely.
              </p>

              {/* Main Image */}
              <div className="mb-8">
                <img
                  src="/food-safety-fruits-vegetables_thumb-1-732x549.jpg"
                  alt="Assorted fresh fruits and vegetables arranged for food safety demonstration"
                  className="w-full h-auto rounded-lg shadow-lg"
                  width={732}
                  height={549}
                />
              </div>

              {/* Article Description */}
              <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-8">
                <p className="text-gray-700">
                  <span className="text-green-600 font-medium">Key Fact:</span> According to the CDC, nearly half of foodborne illnesses in the U.S. are caused by contaminated fresh produce. Proper handling can significantly reduce your risk.
                </p>
              </div>

              <p className="text-gray-700 mb-8">
                This comprehensive guide covers everything you need to know about fruit and vegetable safety, from supermarket selection to kitchen preparation.
              </p>
            </div>

            {/* Basics of Produce Safety Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Understanding Produce Safety Basics</h2>

              <p className="text-gray-700 mb-4">
                Fruits and vegetables can become contaminated at any point from farm to table. The main risks come from:
              </p>
              
              <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                <li className="font-medium">Harmful bacteria (E. coli, Salmonella, Listeria)</li>
                <li className="font-medium">Pesticide residues</li>
                <li className="font-medium">Parasites and viruses</li>
                <li className="font-medium">Environmental contaminants</li>
              </ul>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="w-5 h-5 text-red-500" />
                    <h3 className="font-bold text-gray-900">Risky Produce</h3>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Leafy greens, sprouts, melons, and berries have been associated with more foodborne outbreaks due to their growing and handling conditions.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <h3 className="font-bold text-gray-900">Safer Choices</h3>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Produce with thick, inedible peels (bananas, oranges) or those that are typically cooked (potatoes, squash) generally pose lower risks.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">How Contamination Occurs</h3>
              
              <div className="mb-6">
                <p className="text-gray-700 mb-4">
                  Contamination can happen through various pathways:
                </p>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-200 mb-6">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">Stage</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">Contamination Risks</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">Growing</td>
                        <td className="px-4 py-3 text-sm text-gray-700">Contaminated water, soil, animal intrusion, worker hygiene</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">Harvesting</td>
                        <td className="px-4 py-3 text-sm text-gray-700">Dirty equipment, worker hygiene, field containers</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">Processing</td>
                        <td className="px-4 py-3 text-sm text-gray-700">Wash water, cutting surfaces, worker hygiene</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">Transport</td>
                        <td className="px-4 py-3 text-sm text-gray-700">Temperature abuse, cross-contamination</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">Retail</td>
                        <td className="px-4 py-3 text-sm text-gray-700">Display conditions, handling by customers</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">Home</td>
                        <td className="px-4 py-3 text-sm text-gray-700">Improper storage, cross-contamination, inadequate washing</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Selecting Safe Produce Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Selecting Safe Fruits and Vegetables</h2>

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">At the Grocery Store</h3>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Do:</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2">
                      <li>Choose produce that isn't bruised or damaged</li>
                      <li>Select items that are refrigerated or on ice</li>
                      <li>Buy pre-cut items only if refrigerated</li>
                      <li>Keep raw meat separate in your cart</li>
                      <li>Check for recalls on packaged produce</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Don't:</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2">
                      <li>Buy produce with mold or obvious decay</li>
                      <li>Purchase items displayed near raw meat</li>
                      <li>Choose bruised or damaged fruits/vegetables</li>
                      <li>Buy packaged items with condensation inside</li>
                      <li>Purchase canned goods with dents or bulges</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Organic vs. Conventional</h4>
                  <p className="text-gray-700 mb-2">
                    While organic produce has lower pesticide residues, both organic and conventional produce can harbor harmful bacteria. Proper washing is essential regardless of growing method.
                  </p>
                  <p className="text-gray-700">
                    The Environmental Working Group's "Dirty Dozen" and "Clean Fifteen" lists can help prioritize which produce to buy organic if you're concerned about pesticides.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Farmer's Market Considerations</h3>
              
              <div className="mb-6">
                <p className="text-gray-700 mb-4">
                  Farmer's markets offer fresh, local produce but have different safety considerations:
                </p>
                
                <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2 mb-4">
                  <li>Ask vendors about their food safety practices</li>
                  <li>Look for stands that keep produce off the ground</li>
                  <li>Check that cut samples are protected from contamination</li>
                  <li>Ensure vendors have clean hands and use gloves when handling ready-to-eat items</li>
                  <li>Verify that temperature-sensitive items are properly chilled</li>
                </ul>
              </div>
            </section>

            {/* Proper Storage Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Proper Storage for Maximum Safety</h2>

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Refrigeration Guidelines</h3>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-200 mb-6">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">Produce Type</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">Storage Temperature</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">Storage Life</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">Special Notes</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">Leafy greens</td>
                        <td className="px-4 py-3 text-sm text-gray-700">32-36°F (0-2°C)</td>
                        <td className="px-4 py-3 text-sm text-gray-700">3-7 days</td>
                        <td className="px-4 py-3 text-sm text-gray-700">Store in crisper drawer with high humidity</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">Berries</td>
                        <td className="px-4 py-3 text-sm text-gray-700">32-36°F (0-2°C)</td>
                        <td className="px-4 py-3 text-sm text-gray-700">2-5 days</td>
                        <td className="px-4 py-3 text-sm text-gray-700">Don't wash until ready to eat</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">Melons</td>
                        <td className="px-4 py-3 text-sm text-gray-700">Whole: 50-60°F (10-15°C)<br/>Cut: 32-36°F (0-2°C)</td>
                        <td className="px-4 py-3 text-sm text-gray-700">Whole: 2-4 weeks<br/>Cut: 3-5 days</td>
                        <td className="px-4 py-3 text-sm text-gray-700">Refrigerate cut melons immediately</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">Tomatoes</td>
                        <td className="px-4 py-3 text-sm text-gray-700">55-70°F (13-21°C)</td>
                        <td className="px-4 py-3 text-sm text-gray-700">5-7 days</td>
                        <td className="px-4 py-3 text-sm text-gray-700">Refrigeration affects flavor/texture</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">Root vegetables</td>
                        <td className="px-4 py-3 text-sm text-gray-700">32-40°F (0-4°C)</td>
                        <td className="px-4 py-3 text-sm text-gray-700">2-4 weeks</td>
                        <td className="px-4 py-3 text-sm text-gray-700">Store in perforated bags</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Storage Safety Tips</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                  <h4 className="font-bold text-gray-900 mb-2">Cross-Contamination Prevention</h4>
                  <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1 text-sm">
                    <li>Store produce above raw meat in refrigerator</li>
                    <li>Use separate drawers for produce and meat</li>
                    <li>Keep unwashed produce separate from ready-to-eat foods</li>
                    <li>Clean refrigerator regularly (weekly recommended)</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                  <h4 className="font-bold text-gray-900 mb-2">Ethylene Gas Management</h4>
                  <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1 text-sm">
                    <li>Store ethylene-producing items (apples, bananas) separately</li>
                    <li>Use ethylene-absorbing products if storing mixed produce</li>
                    <li>Monitor ripening and separate overripe fruits</li>
                    <li>Use ventilation in storage areas</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Washing and Preparation Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Proper Washing and Preparation</h2>

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Effective Washing Techniques</h3>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">General Guidelines</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2">
                      <li>Wash hands for 20 seconds before handling</li>
                      <li>Use cool running water (no soap or bleach)</li>
                      <li>Scrub firm produce with clean brush</li>
                      <li>Dry with clean paper towel to remove bacteria</li>
                      <li>Remove outer leaves of lettuce/cabbage</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Special Cases</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2">
                      <li>Soak berries briefly in vinegar solution (1:3 ratio)</li>
                      <li>Use produce wash for waxy surfaces</li>
                      <li>Peel root vegetables after washing</li>
                      <li>Blanch tomatoes for easier peeling</li>
                      <li>Trim ends of leafy greens where dirt collects</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Washing Methods Comparison</h4>
                  
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">Method</th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">Effectiveness</th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">Best For</th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">Notes</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="px-4 py-3 text-sm font-medium text-gray-900">Running Water</td>
                          <td className="px-4 py-3 text-sm text-gray-700">Good</td>
                          <td className="px-4 py-3 text-sm text-gray-700">Most produce</td>
                          <td className="px-4 py-3 text-sm text-gray-700">FDA recommended method</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm font-medium text-gray-900">Vinegar Solution</td>
                          <td className="px-4 py-3 text-sm text-gray-700">Better</td>
                          <td className="px-4 py-3 text-sm text-gray-700">Berries, grapes</td>
                          <td className="px-4 py-3 text-sm text-gray-700">1 part vinegar to 3 parts water</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm font-medium text-gray-900">Produce Wash</td>
                          <td className="px-4 py-3 text-sm text-gray-700">Good</td>
                          <td className="px-4 py-3 text-sm text-gray-700">Waxy surfaces</td>
                          <td className="px-4 py-3 text-sm text-gray-700">Follow product instructions</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm font-medium text-gray-900">Baking Soda Soak</td>
                          <td className="px-4 py-3 text-sm text-gray-700">Best</td>
                          <td className="px-4 py-3 text-sm text-gray-700">Apples, firm produce</td>
                          <td className="px-4 py-3 text-sm text-gray-700">1 tsp per 2 cups water, soak 12-15 min</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cutting and Preparation Safety</h3>
              
              <div className="mb-6">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Safe Cutting Practices</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2">
                      <li>Use separate cutting boards for produce and meat</li>
                      <li>Sanitize surfaces before and after use</li>
                      <li>Wash knives between different types of produce</li>
                      <li>Cut away damaged or bruised areas</li>
                      <li>Keep cut produce refrigerated until serving</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Sanitizing Solutions</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2">
                      <li>Bleach solution (1 tbsp per gallon of water)</li>
                      <li>Commercial food-safe sanitizers</li>
                      <li>Vinegar solution (1:1 with water) for surfaces</li>
                      <li>Hydrogen peroxide (3% solution)</li>
                      <li>Hot soapy water for non-porous surfaces</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Special Considerations Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Special Considerations</h2>

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">High-Risk Groups</h3>
                
                <div className="bg-red-50 p-4 rounded-lg mb-6">
                  <p className="text-gray-700 mb-2">
                    Certain populations are more vulnerable to foodborne illness and should take extra precautions:
                  </p>
                  
                  <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                    <li className="font-medium">Pregnant women (risk to fetus)</li>
                    <li className="font-medium">Young children (under 5)</li>
                    <li className="font-medium">Older adults (over 65)</li>
                    <li className="font-medium">Immunocompromised individuals</li>
                    <li className="font-medium">People with chronic illnesses</li>
                  </ul>
                </div>

                <h4 className="text-lg font-semibold text-gray-900 mb-2">Recommendations for High-Risk Groups</h4>
                <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2 mb-6">
                  <li>Avoid raw sprouts (alfalfa, bean, etc.)</li>
                  <li>Cook all raw vegetables before eating</li>
                  <li>Peel all fruits and vegetables</li>
                  <li>Avoid pre-cut fruits and vegetables</li>
                  <li>Use pasteurized juices only</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Organic Gardening Safety</h3>
              
              <div className="mb-6">
                <p className="text-gray-700 mb-4">
                  Homegrown produce has its own safety considerations:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Soil Safety</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2">
                      <li>Test soil for contaminants</li>
                      <li>Avoid using fresh manure</li>
                      <li>Compost properly (130°F for several days)</li>
                      <li>Rotate crops to prevent pathogen buildup</li>
                      <li>Keep animals out of garden areas</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Water Safety</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2">
                      <li>Use potable water for irrigation</li>
                      <li>Avoid overhead watering close to harvest</li>
                      <li>Clean harvesting containers regularly</li>
                      <li>Wash hands before harvesting</li>
                      <li>Harvest in morning when cooler</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Final Takeaways Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Takeaways</h2>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <Leaf className="w-8 h-8 text-green-600" />
                    <h3 className="text-xl font-bold text-gray-900">Produce Safety Checklist</h3>
                  </div>
                  <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2">
                    <li>Select unblemished produce</li>
                    <li>Store at proper temperatures</li>
                    <li>Wash thoroughly before eating</li>
                    <li>Use clean cutting surfaces</li>
                    <li>Refrigerate cut produce promptly</li>
                    <li>When in doubt, throw it out</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <AlertTriangle className="w-8 h-8 text-blue-600" />
                    <h3 className="text-xl font-bold text-gray-900">When to Discard Produce</h3>
                  </div>
                  <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2">
                    <li>Visible mold (except hard cheeses and firm produce)</li>
                    <li>Slimy texture</li>
                    <li>Off odors</li>
                    <li>Discoloration</li>
                    <li>Produce left at room temperature too long</li>
                    <li>Past expiration date for pre-cut items</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Final Safety Reminders</h3>
                <p className="text-gray-700 mb-4">
                  While fresh fruits and vegetables are essential to a healthy diet, food safety should always be a priority. By following these guidelines, you can significantly reduce your risk of foodborne illness while enjoying nature's bounty.
                </p>
                <p className="text-gray-700">
                  Remember that food safety begins at the store or market and continues through storage, preparation, and serving. When in doubt about the safety of any produce item, it's better to err on the side of caution and discard it.
                </p>
              </div>
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
                    <a href="#" className="text-blue-600 hover:underline font-medium">
                      Dr. Sarah Johnson, Food Safety Specialist
                    </a>
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    — Written by{" "}
                    <a href="#" className="text-blue-600 hover:underline font-medium">
                      Michael Chen, Nutritionist
                    </a>
                  </p>
                  <p className="text-sm text-gray-600 flex items-center gap-1">
                    — <Calendar className="w-3 h-3" />
                    <a href="#" className="text-blue-600 hover:underline">
                      Updated on May 9, 2024
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-green-50 rounded-lg p-6 mb-8">
              <div className="mb-4">
                <h3 className="text-sm font-bold text-green-800 uppercase tracking-wide mb-2">FOOD SAFETY NEWSLETTER</h3>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Stay safe with our tips</h4>
                <p className="text-gray-700 text-sm">
                  Get monthly updates on food safety practices, recall alerts, and healthy eating tips.
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

            {/* Quick Facts Box */}
            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                </svg>
                Produce Safety Quick Facts
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Washing removes up to 99% of surface bacteria</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Bagged greens labeled "pre-washed" don't need rewashing</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Most foodborne bacteria double every 20 minutes at room temp</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  <span className="text-gray-700">Cut produce should be refrigerated within 2 hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Organic doesn't necessarily mean pesticide-free</span>
                </li>
              </ul>
            </div>

            {/* Related Resources */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Related Resources</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="group flex items-start gap-3">
                    <div className="w-16 h-16 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                      <img 
                        src="/washing-produce.jpg" 
                        alt="Washing produce" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 group-hover:text-green-600 transition-colors">Step-by-Step Guide to Washing Produce</h4>
                      <p className="text-xs text-gray-500">5 min read</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="group flex items-start gap-3">
                    <div className="w-16 h-16 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                      <img 
                        src="/storage-tips.jpg" 
                        alt="Produce storage" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 group-hover:text-green-600 transition-colors">Best Ways to Store Fruits and Vegetables</h4>
                      <p className="text-xs text-gray-500">7 min read</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="group flex items-start gap-3">
                    <div className="w-16 h-16 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                      <img 
                        src="/food-poisoning.jpg" 
                        alt="Food poisoning" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 group-hover:text-green-600 transition-colors">Recognizing Foodborne Illness Symptoms</h4>
                      <p className="text-xs text-gray-500">4 min read</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            {/* Downloadable Guide */}
            <div className="bg-purple-50 rounded-lg p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Download Our Free Guide</h3>
                  <p className="text-sm text-gray-700">Get our printable produce safety checklist for your kitchen.</p>
                </div>
              </div>
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200">
                DOWNLOAD NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}