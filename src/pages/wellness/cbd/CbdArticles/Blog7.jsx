"use client";

import { useState } from "react";
import { User, Calendar } from "lucide-react";

export default function CbdArticle7() {
  const [email, setEmail] = useState("");
  const [activeTab, setActiveTab] = useState("Benefits");

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  const tabs = [
    "Types of Products",
    "Choosing the Right Form",
    "Delivery Methods",
    "Product Recommendations",
    "Selection Criteria",
    "Shopping Guide",
    "Safety Information",
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
                Understanding CBD Products: Oils, Edibles, Topicals, and More
              </h1>

              {/* Navigation Tabs - Horizontal scroll for mobile */}
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
                Explore comprehensive CBD product options including tinctures, capsules, 
                gummies, topical creams, and emerging delivery methods for optimal wellness benefits.
              </p>

              {/* Main Image */}
              <div className="mb-4 sm:mb-6 md:mb-8">
                <img
                  src="https://media.post.rvohealth.io/wp-content/uploads/2024/07/3692910-What-to-Know-About-Different-Types-of-CBD-732x549-Feature.jpg"
                  alt="Various CBD products displayed on a table"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>

              {/* Article Description */}
              <div className="bg-blue-50 border-l-4 border-blue-400 p-3 sm:p-4 md:p-5 mb-4 sm:mb-6 md:mb-8 rounded-r-lg">
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  The CBD market offers an array of product formats, each with unique 
                  characteristics and benefits. This guide will help you navigate the 
                  different forms of CBD available, their optimal uses, and how to 
                  select products that align with your wellness goals.
                </p>
              </div>

              <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 md:mb-8">
                We'll also share our top-rated CBD product recommendations across 
                various categories to help you make informed choices.
              </p>
            </div>

            {/* CBD Product Categories */}
            <div className="bg-blue-50 border-l-4 border-blue-400 p-3 sm:p-4 md:p-5 rounded-r-lg mb-4 sm:mb-6 md:mb-8">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">
                Major CBD Product Categories
              </h2>

              <div className="space-y-3 sm:space-y-4">
                <div>
                  <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">
                    1. Oral CBD Products
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed">
                    Oral CBD includes tinctures, oils, capsules, and edibles like 
                    gummies. These products are absorbed through the digestive system, 
                    offering longer-lasting effects (4-6 hours) with a slower onset 
                    (30-90 minutes). Ideal for sustained relief and easy dosing.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">
                    2. Sublingual CBD Products
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed">
                    Tinctures and sprays designed for absorption under the tongue 
                    bypass the digestive system, entering the bloodstream directly 
                    through mucous membranes. Faster onset (15-30 minutes) with 
                    effects lasting 2-4 hours. Preferred for quick relief and 
                    precise dosing.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">
                    3. Topical CBD Products
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed">
                    Creams, balms, lotions, and salves infused with CBD are applied 
                    directly to the skin. These products interact with local 
                    cannabinoid receptors without entering the bloodstream, making 
                    them ideal for targeted relief of sore muscles or joints.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">
                    4. Inhalable CBD Products
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed">
                    Vape oils and smokable hemp flowers provide the fastest absorption 
                    (effects felt within minutes) but shortest duration (1-3 hours). 
                    Note that inhalation methods may pose respiratory risks and are 
                    generally not recommended by health professionals.
                  </p>
                </div>
              </div>
            </div>

            {/* Choosing the Right Form */}
            <div className="bg-green-50 border border-green-400 p-3 sm:p-4 md:p-5 rounded-xl shadow-md mb-4 sm:mb-6 md:mb-8">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-green-700">
                Matching CBD Products to Your Needs
              </h2>

              <div className="space-y-3 sm:space-y-4">
                <p className="text-sm sm:text-base leading-relaxed">
                  The effectiveness of CBD depends largely on choosing the right 
                  delivery method for your specific needs. Consider these factors 
                  when selecting CBD products:
                </p>

                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-2">For Systemic Effects:</h4>
                  <p className="text-sm">
                    Oral and sublingual products are best for whole-body benefits 
                    like stress relief, sleep support, or general wellness. The 
                    liver metabolizes these forms, distributing CBD throughout 
                    your system.
                  </p>
                </div>

                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-2">For Targeted Relief:</h4>
                  <p className="text-sm">
                    Topicals excel at addressing localized discomfort in muscles 
                    or joints. The CBD interacts with cannabinoid receptors in 
                    the skin without entering the bloodstream.
                  </p>
                </div>

                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-2">For Fast Action:</h4>
                  <p className="text-sm">
                    Sublingual tinctures and (less recommended) inhalables offer 
                    quicker onset than oral products. Helpful when you need 
                    relatively immediate effects.
                  </p>
                </div>

                <p className="text-sm sm:text-base leading-relaxed">
                  Your lifestyle and preferences also matter. Those who dislike 
                  CBD's natural taste might prefer capsules or gummies, while 
                  people seeking precise dosing may favor tinctures with droppers.
                </p>
              </div>
            </div>

            {/* Bioavailability Comparison */}
            <section className="bg-white p-3 sm:p-4 md:p-6 rounded-xl shadow-sm mb-6 sm:mb-8 md:mb-10 border border-gray-200">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-gray-800">
                CBD Absorption Rates by Delivery Method
              </h2>

              <div className="overflow-x-auto -mx-3 sm:mx-0">
                <div className="min-w-full inline-block align-middle">
                  <table className="min-w-full table-auto border border-gray-300 text-xs sm:text-sm md:text-base">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2 text-left font-bold">
                          Delivery Method
                        </th>
                        <th className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2 text-left font-bold">
                          Bioavailability
                        </th>
                        <th className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2 text-left font-bold">
                          Onset Time
                        </th>
                        <th className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2 text-left font-bold">
                          Duration
                        </th>
                        <th className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2 text-left font-bold">
                          Best For
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2 font-semibold">
                          Sublingual Tinctures
                        </td>
                        <td className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2">
                          20-30%
                        </td>
                        <td className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2">
                          15-30 minutes
                        </td>
                        <td className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2">
                          4-6 hours
                        </td>
                        <td className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2">
                          Fast, efficient dosing
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2 font-semibold">
                          Oral (Edibles/Capsules)
                        </td>
                        <td className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2">
                          5-15%
                        </td>
                        <td className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2">
                          30-90 minutes
                        </td>
                        <td className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2">
                          6-8 hours
                        </td>
                        <td className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2">
                          Long-lasting effects
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2 font-semibold">
                          Topicals
                        </td>
                        <td className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2">
                          Minimal systemic absorption
                        </td>
                        <td className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2">
                          15-45 minutes
                        </td>
                        <td className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2">
                          2-5 hours
                        </td>
                        <td className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2">
                          Localized relief
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2 font-semibold">
                          Inhalation
                        </td>
                        <td className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2">
                          30-50%
                        </td>
                        <td className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2">
                          2-5 minutes
                        </td>
                        <td className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2">
                          1-3 hours
                        </td>
                        <td className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2">
                          Immediate effects (not recommended)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Emerging Delivery Methods */}
            <section className="bg-white p-3 sm:p-4 md:p-6 rounded-xl shadow-md mb-6 sm:mb-8 md:mb-10 border border-gray-200">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-gray-800">
                Innovative CBD Delivery Methods
              </h2>
              <p className="mb-4 sm:mb-6 text-sm sm:text-base text-gray-600">
                The CBD industry continues to evolve with new delivery technologies 
                that enhance absorption and user experience:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Nanoemulsion CBD</h3>
                  <p className="text-sm">
                    Uses nanotechnology to break CBD into tiny particles that are 
                    more easily absorbed by the body. Can increase bioavailability 
                    up to 5 times compared to standard oils.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Water-Soluble CBD</h3>
                  <p className="text-sm">
                    Specially processed CBD that dissolves in water, making it ideal 
                    for beverages and faster-acting sublingual products. Offers more 
                    consistent dosing than oil-based products.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Transdermal Patches</h3>
                  <p className="text-sm">
                    Provide steady CBD release through the skin into the bloodstream 
                    over 12-24 hours. Avoids first-pass liver metabolism for more 
                    efficient delivery than oral methods.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">CBD Inhalers</h3>
                  <p className="text-sm">
                    Metered-dose inhalers deliver precise amounts of CBD to the lungs 
                    without combustion byproducts. A potentially safer alternative to 
                    vaping (research ongoing).
                  </p>
                </div>
              </div>
            </section>

            {/* Product Recommendations */}
            <section className="bg-white p-3 sm:p-4 md:p-6 rounded-xl shadow-md mb-6 sm:mb-8 md:mb-10 border border-gray-200">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-gray-800">
                Editor's Choice: Top CBD Products by Category
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                Our team has tested and evaluated hundreds of CBD products to 
                identify these standout options:
              </p>

              <div className="space-y-4">
                <div className="border-b pb-4">
                  <h3 className="text-lg font-semibold mb-2">Best Sublingual Tinctures</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium">Full-Spectrum: Charlotte's Web CBD Oil</h4>
                      <p className="text-sm mt-1">17mg CBD/mL with supporting cannabinoids and terpenes</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium">Broad-Spectrum: CBDistillery Nighttime Formula</h4>
                      <p className="text-sm mt-1">With melatonin and botanicals for sleep support</p>
                    </div>
                  </div>
                </div>

                <div className="border-b pb-4">
                  <h3 className="text-lg font-semibold mb-2">Best Edibles</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium">Gummies: Joy Organics CBD Gummies</h4>
                      <p className="text-sm mt-1">Broad-spectrum, 10mg per gummy, multiple flavors</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium">Softgels: Medterra CBD + CBG Capsules</h4>
                      <p className="text-sm mt-1">25mg CBD + 25mg CBG per capsule for enhanced effects</p>
                    </div>
                  </div>
                </div>

                <div className="border-b pb-4">
                  <h3 className="text-lg font-semibold mb-2">Best Topicals</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium">Pain Relief: Lazarus Naturals Balm</h4>
                      <p className="text-sm mt-1">1,000mg full-spectrum CBD with menthol and arnica</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium">Skincare: Lord Jones CBD Lotion</h4>
                      <p className="text-sm mt-1">Lightweight formula with 50mg CBD per pump</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Best Innovative Products</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium">Water-Soluble: Ojai Energetics Tonic</h4>
                      <p className="text-sm mt-1">Fast-acting nanoemulsion formula with adaptogens</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium">Transdermal: Mary's Nutritionals Patch</h4>
                      <p className="text-sm mt-1">10mg CBD/hour for 12 hours of steady delivery</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Selection Criteria */}
            <section className="bg-white p-3 sm:p-4 md:p-6 rounded-xl shadow-md mb-6 sm:mb-8 md:mb-10 border border-gray-200">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-gray-800">
                Our CBD Product Evaluation Framework
              </h2>

              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                We evaluate CBD products using a rigorous 25-point assessment that 
                examines quality, safety, and transparency:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 sm:mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Quality Indicators</h3>
                  <ul className="text-sm space-y-1">
                    <li>• Organic hemp sourcing</li>
                    <li>• Extraction method (CO2 preferred)</li>
                    <li>• Cannabinoid and terpene profile</li>
                    <li>• Product formulation</li>
                    <li>• Manufacturing standards</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Safety Factors</h3>
                  <ul className="text-sm space-y-1">
                    <li>• Third-party lab testing</li>
                    <li>• Contaminant screening</li>
                    <li>• Ingredient transparency</li>
                    <li>• Appropriate labeling</li>
                    <li>• FDA compliance</li>
                  </ul>
                </div>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">User Experience</h3>
                <ul className="text-sm space-y-1">
                  <li>• Taste/texture/applicability</li>
                  <li>• Ease of use and dosing</li>
                  <li>• Effectiveness for intended use</li>
                  <li>• Value for price</li>
                  <li>• Customer service and policies</li>
                </ul>
              </div>
            </section>

            {/* Shopping Guide */}
            <section className="bg-white p-3 sm:p-4 md:p-6 rounded-xl shadow-md mb-6 sm:mb-8 md:mb-10 border border-gray-200">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-gray-800">
                Smart Shopping for CBD Products
              </h2>

              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                With thousands of CBD products on the market, these tips will help 
                you identify quality options and avoid subpar products:
              </p>

              <div className="space-y-4 sm:space-y-5">
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
                    Verify Third-Party Testing
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    Reputable companies provide Certificates of Analysis (COAs) from 
                    independent labs. Check that:
                  </p>
                  <ul className="list-disc list-inside pl-4 mt-2 text-sm">
                    <li>CBD/THC amounts match label claims</li>
                    <li>Tests screen for pesticides, heavy metals, and microbes</li>
                    <li>Results are recent (within last 12 months)</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
                    Understand Product Labeling
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    CBD product labels should clearly indicate:
                  </p>
                  <ul className="list-disc list-inside pl-4 mt-2 text-sm">
                    <li>Total CBD content (in mg)</li>
                    <li>Serving size and suggested use</li>
                    <li>Full ingredient list</li>
                    <li>Type of CBD (full/broad-spectrum or isolate)</li>
                    <li>Batch number linking to COA</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
                    Assess Company Reputation
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    Research brands before purchasing:
                  </p>
                  <ul className="list-disc list-inside pl-4 mt-2 text-sm">
                    <li>Check for FDA warning letters</li>
                    <li>Read third-party reviews (not just testimonials)</li>
                    <li>Look for industry certifications (USDA Organic, U.S. Hemp Authority)</li>
                    <li>Evaluate customer service responsiveness</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Warning Box */}
            <section className="bg-amber-50 p-3 sm:p-4 md:p-6 rounded-xl shadow-md mb-6 sm:mb-8 md:mb-10 relative border border-amber-200">
              <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                CBD Shopping Red Flags
              </h2>

              <p className="text-base text-gray-700 mb-3">
                Be wary of products that:
              </p>

              <ul className="list-disc list-inside pl-5 mb-3 space-y-1">
                <li>Make unsubstantiated health claims (treats, cures, prevents diseases)</li>
                <li>Don't provide third-party test results</li>
                <li>Have prices significantly lower than market average</li>
                <li>Use vague terms like "pure CBD" without specifications</li>
                <li>Are sold on marketplaces that prohibit CBD (like Amazon)</li>
              </ul>

              <div className="absolute bottom-4 right-4">
                <span className="text-sm font-semibold text-gray-700">
                  healthline
                </span>
              </div>
            </section>

            {/* Safety Information */}
            <section className="bg-white p-6 rounded-xl shadow-md mb-10">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                CBD Safety and Usage Guidelines
              </h2>

              <p className="text-base text-gray-600 mb-4">
                While CBD is generally well-tolerated, responsible use involves 
                understanding potential considerations:
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Potential Side Effects:
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>Dry mouth</li>
                <li>Drowsiness (especially at higher doses)</li>
                <li>Changes in appetite</li>
                <li>Digestive discomfort</li>
                <li>Possible interactions with medications</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Usage Recommendations:
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>Start with low doses (10-25mg) and gradually increase</li>
                <li>Consult your healthcare provider if taking medications</li>
                <li>Allow 1-2 weeks of consistent use to assess effects</li>
                <li>Store products properly (cool, dark place for oils)</li>
                <li>Discontinue use if adverse reactions occur</li>
              </ul>

              <p className="text-base text-gray-600">
                Note: Pregnant/nursing individuals and those with liver conditions 
                should exercise particular caution with CBD products.
              </p>
            </section>

            {/* FAQ Section */}
            <section className="bg-white p-6 rounded-xl shadow-md mb-10">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    How do I choose between full-spectrum, broad-spectrum, and isolate CBD?
                  </h3>
                  <p className="text-base text-gray-600">
                    Full-spectrum provides the complete range of hemp compounds 
                    (including up to 0.3% THC) and may offer enhanced effects 
                    through the entourage effect. Broad-spectrum removes THC while 
                    keeping other beneficial compounds. Isolate is pure CBD with 
                    no other cannabinoids or terpenes - best for those who want 
                    to avoid all THC or prefer flavorless options.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    What's the difference between hemp oil and CBD oil?
                  </h3>
                  <p className="text-base text-gray-600">
                    Hemp oil (often called hemp seed oil) comes from pressed hemp 
                    seeds and contains little to no CBD. CBD oil is extracted from 
                    hemp flowers and leaves, containing meaningful amounts of 
                    cannabidiol. Always check product labels to ensure you're 
                    getting actual CBD oil if that's your intention.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    How long does CBD stay in your system?
                  </h3>
                  <p className="text-base text-gray-600">
                    CBD typically remains detectable for 2-5 days after last use, 
                    though this varies based on dosage frequency, metabolism, body 
                    fat percentage, and product type. Chronic heavy users may test 
                    positive for longer. While most workplace drug tests screen for 
                    THC rather than CBD, full-spectrum products could theoretically 
                    trigger positive results in sensitive tests.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Can you build a tolerance to CBD?
                  </h3>
                  <p className="text-base text-gray-600">
                    Some regular users report needing slightly higher doses over 
                    time to achieve the same effects, though tolerance appears 
                    to develop more slowly with CBD than with THC. Taking periodic 
                    breaks (1-2 days per week) may help maintain sensitivity. 
                    Interestingly, some users experience "reverse tolerance" - 
                    needing less CBD over time as their endocannabinoid system 
                    becomes more responsive.
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
                CBD products come in various forms, each with distinct 
                characteristics that make them suitable for different needs 
                and preferences. The optimal product depends on your desired 
                effects, lifestyle, and personal comfort with different 
                delivery methods.
              </p>

              <p className="text-base text-gray-600 mb-4">
                Quality matters when choosing CBD products. Prioritize 
                companies that provide transparent third-party testing, 
                use quality ingredients, and have positive customer 
                feedback. Remember that CBD affects everyone differently - 
                what works for one person may not work the same for another.
              </p>

              <div className="bg-amber-50 p-4 rounded-lg mb-4">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Important Note:</span> This 
                  content is for informational purposes only and should not 
                  be considered medical advice. Always consult with a 
                  healthcare professional before starting any new supplement 
                  regimen, especially if you have underlying health 
                  conditions or take medications.
                </p>
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                The Future of CBD Products
              </h3>

              <p className="text-base text-gray-600">
                As research continues and regulations evolve, we can expect 
                to see more sophisticated CBD formulations with enhanced 
                bioavailability and targeted effects. Emerging delivery 
                methods and combination products (like CBD with other 
                botanicals or nutrients) are expanding the possibilities 
                for personalized wellness approaches.
              </p>
            </section>
          </div>

          {/* Sidebar - Remains unchanged from original */}
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