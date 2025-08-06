

// "use client";

// import { useState } from "react";
// import { User, Calendar, ChevronDown, ChevronUp } from "lucide-react";

// export default function CbdRetailerQuestions() {
//   const [email, setEmail] = useState("");
//   const [activeTab, setActiveTab] = useState("Sourcing");
//   const [expandedSections, setExpandedSections] = useState({
//     sourcing: true,
//     testing: false,
//     dosage: false,
//     quality: false,
//     safety: false
//   });

//   const toggleSection = (section) => {
//     setExpandedSections(prev => ({
//       ...prev,
//       [section]: !prev[section]
//     }));
//   };

//   const handleEmailSubmit = (e) => {
//     e.preventDefault();
//     console.log("Email submitted:", email);
//     setEmail("");
//   };

//   const tabs = [
//     "Sourcing",
//     "Testing",
//     "Dosage",
//     "Product Quality",
//     "Safety",
//     "Returns",
//     "FAQ",
//     "Takeaway"
//   ];

//   return (
//   <div className="min-h-screen bg-white mt-28 pt-4 sm:pt-8 md:pt-12 lg:pt-16 xl:pt-20">
//   <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
//     {/* This grid container should wrap BOTH main content and sidebar */}
//     <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
//           <div className="lg:col-span-2 ">
//             {/* Header Section */}
//             <div className="mb-6 sm:mb-8">
//               <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6 leading-tight">
//                 Essential Questions to Ask Your CBD Retailer
//               </h1>

//               {/* Navigation Tabs */}
//               <div className="relative mb-4 sm:mb-6">
//                 <div className="flex overflow-x-auto pb-2 mb-4 sm:mb-6 scrollbar-hide border-b border-gray-200">
//                   <div className="flex space-x-1 sm:space-x-2 min-w-max">
//                     {tabs.map((tab) => (
//                       <button
//                         key={tab}
//                         onClick={() => setActiveTab(tab)}
//                         className={`px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-medium border-b-2 whitespace-nowrap transition-colors flex-shrink-0 ${
//                           activeTab === tab
//                             ? "border-teal-500 text-teal-600"
//                             : "border-transparent text-gray-600 hover:text-gray-900"
//                         }`}
//                       >
//                         {tab}
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               {/* Intro Text */}
//               <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-4 sm:mb-6 md:mb-8 leading-relaxed">
//                 Prepare for your CBD shopping experience with this comprehensive list of important questions about sourcing, testing, dosage, and product quality.
//               </p>

//               {/* Main Image */}
//               <div className="mb-4 sm:mb-6 md:mb-8">
//                 <img
//                   src="https://images.unsplash.com/photo-1576086213369-97a306d3655b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80"
//                   alt="Customer talking with CBD retailer"
//                   className="w-full h-auto rounded-lg shadow-lg"
//                 />
//                 <p className="text-xs text-gray-500 mt-2">Having an informed conversation with your CBD retailer ensures you get quality products</p>
//               </div>

//               {/* Key Questions Overview */}
//               <div className="bg-blue-50 border-l-4 border-blue-400 p-4 sm:p-5 md:p-6 mb-6 sm:mb-8 rounded-r-lg">
//                 <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">
//                   Why These Questions Matter
//                 </h2>
//                 <p className="text-sm sm:text-base text-gray-700 mb-3">
//                   The CBD market is largely unregulated, making it crucial to vet retailers thoroughly. Asking these questions will help you:
//                 </p>
//                 <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm sm:text-base">
//                   <li className="flex items-start">
//                     <span className="mr-2">•</span>
//                     <span>Identify reputable brands that prioritize quality</span>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="mr-2">•</span>
//                     <span>Verify product safety and purity</span>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="mr-2">•</span>
//                     <span>Ensure proper CBD potency and dosing</span>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="mr-2">•</span>
//                     <span>Understand the product's origins and processing</span>
//                   </li>
//                 </ul>
//               </div>

//               {/* Sourcing Questions */}
//               <section 
//                 className="bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-sm mb-6 border border-gray-200 cursor-pointer"
//                 onClick={() => toggleSection('sourcing')}
//               >
//                 <div className="flex justify-between items-center">
//                   <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
//                     Sourcing & Production Questions
//                   </h2>
//                   {expandedSections.sourcing ? (
//                     <ChevronUp className="w-5 h-5 text-gray-500" />
//                   ) : (
//                     <ChevronDown className="w-5 h-5 text-gray-500" />
//                   )}
//                 </div>
                
//                 {expandedSections.sourcing && (
//                   <div className="mt-4 space-y-6">
//                     <div className="bg-gray-50 p-4 rounded-lg">
//                       <h3 className="font-semibold text-blue-700 mb-2">1. Where is your hemp grown?</h3>
//                       <p className="text-sm text-gray-700">
//                         <span className="font-medium">Why ask:</span> Hemp is a bioaccumulator that absorbs contaminants from soil. Domestic hemp (especially from Colorado, Oregon, or Kentucky) is typically grown under stricter regulations.
//                       </p>
//                       <p className="text-sm text-gray-700 mt-2">
//                         <span className="font-medium">Good answer:</span> "Our hemp is grown organically in Colorado under the state's hemp pilot program with strict agricultural standards."
//                       </p>
//                     </div>

//                     <div className="bg-gray-50 p-4 rounded-lg">
//                       <h3 className="font-semibold text-blue-700 mb-2">2. What extraction method do you use?</h3>
//                       <p className="text-sm text-gray-700">
//                         <span className="font-medium">Why ask:</span> Superior methods like CO2 extraction yield cleaner products without residual solvents.
//                       </p>
//                       <p className="text-sm text-gray-700 mt-2">
//                         <span className="font-medium">Good answer:</span> "We use supercritical CO2 extraction which preserves cannabinoids and terpenes without chemical solvents."
//                       </p>
//                     </div>

//                     <div className="bg-gray-50 p-4 rounded-lg">
//                       <h3 className="font-semibold text-blue-700 mb-2">3. Is your hemp grown organically?</h3>
//                       <p className="text-sm text-gray-700">
//                         <span className="font-medium">Why ask:</span> Certified organic hemp reduces exposure to pesticides and heavy metals.
//                       </p>
//                       <p className="text-sm text-gray-700 mt-2">
//                         <span className="font-medium">Good answer:</span> "Yes, our farms are USDA Organic certified and we can provide documentation."
//                       </p>
//                     </div>

//                     <div className="bg-gray-50 p-4 rounded-lg">
//                       <h3 className="font-semibold text-blue-700 mb-2">4. How do you ensure consistency between batches?</h3>
//                       <p className="text-sm text-gray-700">
//                         <span className="font-medium">Why ask:</span> Quality control measures prevent potency fluctuations in CBD products.
//                       </p>
//                       <p className="text-sm text-gray-700 mt-2">
//                         <span className="font-medium">Good answer:</span> "We conduct HPLC testing on every batch and adjust formulations to maintain consistent cannabinoid profiles."
//                       </p>
//                     </div>
//                   </div>
//                 )}
//               </section>

//               {/* Testing Questions */}
//               <section 
//                 className="bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-sm mb-6 border border-gray-200 cursor-pointer"
//                 onClick={() => toggleSection('testing')}
//               >
//                 <div className="flex justify-between items-center">
//                   <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
//                     Testing & Verification Questions
//                   </h2>
//                   {expandedSections.testing ? (
//                     <ChevronUp className="w-5 h-5 text-gray-500" />
//                   ) : (
//                     <ChevronDown className="w-5 h-5 text-gray-500" />
//                   )}
//                 </div>
                
//                 {expandedSections.testing && (
//                   <div className="mt-4 space-y-6">
//                     <div className="bg-gray-50 p-4 rounded-lg">
//                       <h3 className="font-semibold text-blue-700 mb-2">5. Can you provide third-party lab results (COAs)?</h3>
//                       <p className="text-sm text-gray-700">
//                         <span className="font-medium">Why ask:</span> Certificates of Analysis verify cannabinoid content and screen for contaminants.
//                       </p>
//                       <p className="text-sm text-gray-700 mt-2">
//                         <span className="font-medium">Good answer:</span> "Here's the COA for this batch that shows cannabinoid percentages and confirms absence of pesticides, heavy metals, and microbials."
//                       </p>
//                     </div>

//                     <div className="bg-gray-50 p-4 rounded-lg">
//                       <h3 className="font-semibold text-blue-700 mb-2">6. How recently was this product tested?</h3>
//                       <p className="text-sm text-gray-700">
//                         <span className="font-medium">Why ask:</span> CBD degrades over time - recent tests ensure current potency.
//                       </p>
//                       <p className="text-sm text-gray-700 mt-2">
//                         <span className="font-medium">Good answer:</span> "This batch was tested last month - we retest every 6 months or with new production runs."
//                       </p>
//                     </div>

//                     <div className="bg-gray-50 p-4 rounded-lg">
//                       <h3 className="font-semibold text-blue-700 mb-2">7. Does the COA include contaminant screening?</h3>
//                       <p className="text-sm text-gray-700">
//                         <span className="font-medium">Why ask:</span> Complete testing should cover pesticides, solvents, heavy metals, and microbes.
//                       </p>
//                       <p className="text-sm text-gray-700 mt-2">
//                         <span className="font-medium">Good answer:</span> "Yes, our full-panel tests include 60+ pesticides, 5 heavy metals, microbials, and residual solvents."
//                       </p>
//                     </div>

//                     <div className="bg-gray-50 p-4 rounded-lg">
//                       <h3 className="font-semibold text-blue-700 mb-2">8. Is your testing lab ISO 17025 accredited?</h3>
//                       <p className="text-sm text-gray-700">
//                         <span className="font-medium">Why ask:</span> This accreditation indicates rigorous lab standards.
//                       </p>
//                       <p className="text-sm text-gray-700 mt-2">
//                         <span className="font-medium">Good answer:</span> "We use two independent ISO 17025 accredited labs for redundancy and verification."
//                       </p>
//                     </div>
//                   </div>
//                 )}
//               </section>

//               {/* Dosage Questions */}
//               <section 
//                 className="bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-sm mb-6 border border-gray-200 cursor-pointer"
//                 onClick={() => toggleSection('dosage')}
//               >
//                 <div className="flex justify-between items-center">
//                   <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
//                     Dosage & Potency Questions
//                   </h2>
//                   {expandedSections.dosage ? (
//                     <ChevronUp className="w-5 h-5 text-gray-500" />
//                   ) : (
//                     <ChevronDown className="w-5 h-5 text-gray-500" />
//                   )}
//                 </div>
                
//                 {expandedSections.dosage && (
//                   <div className="mt-4 space-y-6">
//                     <div className="bg-gray-50 p-4 rounded-lg">
//                       <h3 className="font-semibold text-blue-700 mb-2">9. How much CBD is in each serving?</h3>
//                       <p className="text-sm text-gray-700">
//                         <span className="font-medium">Why ask:</span> Products vary widely - a gummy might contain 5mg while oils offer 50mg per mL.
//                       </p>
//                       <p className="text-sm text-gray-700 mt-2">
//                         <span className="font-medium">Good answer:</span> "This tincture provides 33mg of CBD per 1mL dropper, and here's how to measure partial doses."
//                       </p>
//                     </div>

//                     <div className="bg-gray-50 p-4 rounded-lg">
//                       <h3 className="font-semibold text-blue-700 mb-2">10. What's your recommended starting dose?</h3>
//                       <p className="text-sm text-gray-700">
//                         <span className="font-medium">Why ask:</span> Proper dosing guidance prevents taking too much or too little initially.
//                       </p>
//                       <p className="text-sm text-gray-700 mt-2">
//                         <span className="font-medium">Good answer:</span> "For beginners, we suggest 10-25mg daily, increasing by 5mg every 3-4 days as needed."
//                       </p>
//                     </div>

//                     <div className="bg-gray-50 p-4 rounded-lg">
//                       <h3 className="font-semibold text-blue-700 mb-2">11. How should I adjust dosage for different effects?</h3>
//                       <p className="text-sm text-gray-700">
//                         <span className="font-medium">Why ask:</span> Lower doses may be stimulating while higher doses tend to be more relaxing.
//                       </p>
//                       <p className="text-sm text-gray-700 mt-2">
//                         <span className="font-medium">Good answer:</span> "For daytime focus try 10-15mg, for relaxation 25-50mg, and for sleep support 50-100mg taken 30 minutes before bed."
//                       </p>
//                     </div>

//                     <div className="bg-gray-50 p-4 rounded-lg">
//                       <h3 className="font-semibold text-blue-700 mb-2">12. How long until I should expect effects?</h3>
//                       <p className="text-sm text-gray-700">
//                         <span className="font-medium">Why ask:</span> Onset time varies by product type - managing expectations prevents overconsumption.
//                       </p>
//                       <p className="text-sm text-gray-700 mt-2">
//                         <span className="font-medium">Good answer:</span> "Tinctures take 15-45 minutes, edibles 45-90 minutes, and effects typically last 4-6 hours."
//                       </p>
//                     </div>
//                   </div>
//                 )}
//               </section>

//               {/* Product Quality Questions */}
//               <section 
//                 className="bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-sm mb-6 border border-gray-200 cursor-pointer"
//                 onClick={() => toggleSection('quality')}
//               >
//                 <div className="flex justify-between items-center">
//                   <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
//                     Product Quality Questions
//                   </h2>
//                   {expandedSections.quality ? (
//                     <ChevronUp className="w-5 h-5 text-gray-500" />
//                   ) : (
//                     <ChevronDown className="w-5 h-5 text-gray-500" />
//                   )}
//                 </div>
                
//                 {expandedSections.quality && (
//                   <div className="mt-4 space-y-6">
//                     <div className="bg-gray-50 p-4 rounded-lg">
//                       <h3 className="font-semibold text-blue-700 mb-2">13. Is this full-spectrum, broad-spectrum, or isolate?</h3>
//                       <p className="text-sm text-gray-700">
//                         <span className="font-medium">Why ask:</span> These types have different effects and legal implications (full-spectrum contains THC).
//                       </p>
//                       <p className="text-sm text-gray-700 mt-2">
//                         <span className="font-medium">Good answer:</span> "This is broad-spectrum with all cannabinoids except THC, shown here on the COA."
//                       </p>
//                     </div>

//                     <div className="bg-gray-50 p-4 rounded-lg">
//                       <h3 className="font-semibold text-blue-700 mb-2">14. What other ingredients are included?</h3>
//                       <p className="text-sm text-gray-700">
//                         <span className="font-medium">Why ask:</span> Some additives may cause allergies or interact with medications.
//                       </p>
//                       <p className="text-sm text-gray-700 mt-2">
//                         <span className="font-medium">Good answer:</span> "Just organic MCT oil and natural flavors - no artificial additives or common allergens."
//                       </p>
//                     </div>

//                     <div className="bg-gray-50 p-4 rounded-lg">
//                       <h3 className="font-semibold text-blue-700 mb-2">15. How should I store this product?</h3>
//                       <p className="text-sm text-gray-700">
//                         <span className="font-medium">Why ask:</span> Proper storage preserves potency and prevents spoilage.
//                       </p>
//                       <p className="text-sm text-gray-700 mt-2">
//                         <span className="font-medium">Good answer:</span> "Keep in a cool, dark place away from sunlight. Refrigeration can extend shelf life but isn't required."
//                       </p>
//                     </div>

//                     <div className="bg-gray-50 p-4 rounded-lg">
//                       <h3 className="font-semibold text-blue-700 mb-2">16. What's the expiration date?</h3>
//                       <p className="text-sm text-gray-700">
//                         <span className="font-medium">Why ask:</span> CBD degrades over time - fresher products maintain potency.
//                       </p>
//                       <p className="text-sm text-gray-700 mt-2">
//                         <span className="font-medium">Good answer:</span> "This batch expires in 14 months - we recommend use within 1 year for optimal freshness."
//                       </p>
//                     </div>
//                   </div>
//                 )}
//               </section>

//               {/* Safety Questions */}
//               <section 
//                 className="bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-sm mb-6 border border-gray-200 cursor-pointer"
//                 onClick={() => toggleSection('safety')}
//               >
//                 <div className="flex justify-between items-center">
//                   <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
//                     Safety & Legal Questions
//                   </h2>
//                   {expandedSections.safety ? (
//                     <ChevronUp className="w-5 h-5 text-gray-500" />
//                   ) : (
//                     <ChevronDown className="w-5 h-5 text-gray-500" />
//                   )}
//                 </div>
                
//                 {expandedSections.safety && (
//                   <div className="mt-4 space-y-6">
//                     <div className="bg-gray-50 p-4 rounded-lg">
//                       <h3 className="font-semibold text-blue-700 mb-2">17. Could this product cause me to fail a drug test?</h3>
//                       <p className="text-sm text-gray-700">
//                         <span className="font-medium">Why ask:</span> Even trace THC in full-spectrum products may accumulate.
//                       </p>
//                       <p className="text-sm text-gray-700 mt-2">
//                         <span className="font-medium">Good answer:</span> "Our broad-spectrum products contain undetectable THC, but we can't guarantee all tests will be negative."
//                       </p>
//                     </div>

//                     <div className="bg-gray-50 p-4 rounded-lg">
//                       <h3 className="font-semibold text-blue-700 mb-2">18. Are there any known medication interactions?</h3>
//                       <p className="text-sm text-gray-700">
//                         <span className="font-medium">Why ask:</span> CBD can affect metabolism of some drugs.
//                       </p>
//                       <p className="text-sm text-gray-700 mt-2">
//                         <span className="font-medium">Good answer:</span> "CBD may interact with blood thinners, antidepressants, and some seizure medications - consult your doctor."
//                       </p>
//                     </div>

//                     <div className="bg-gray-50 p-4 rounded-lg">
//                       <h3 className="font-semibold text-blue-700 mb-2">19. Is this product legal in my state?</h3>
//                       <p className="text-sm text-gray-700">
//                         <span className="font-medium">Why ask:</span> CBD laws vary by state, especially for products with THC.
//                       </p>
//                       <p className="text-sm text-gray-700 mt-2">
//                         <span className="font-medium">Good answer:</span> "Our hemp-derived CBD is federally legal, but we recommend checking your local regulations regarding THC content."
//                       </p>
//                     </div>

//                     <div className="bg-gray-50 p-4 rounded-lg">
//                       <h3 className="font-semibold text-blue-700 mb-2">20. Do you have documentation of FDA compliance?</h3>
//                       <p className="text-sm text-gray-700">
//                         <span className="font-medium">Why ask:</span> Reputable companies follow FDA guidelines for labeling and claims.
//                       </p>
//                       <p className="text-sm text-gray-700 mt-2">
//                         <span className="font-medium">Good answer:</span> "We adhere to all FDA regulations for dietary supplements and can provide our product registration."
//                       </p>
//                     </div>
//                   </div>
//                 )}
//               </section>

//               {/* Red Flags Section */}
//               <section className="bg-amber-50 border-l-4 border-amber-400 p-5 sm:p-6 rounded-r-lg mb-8">
//                 <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3">
//                   Warning Signs in Retailer Responses
//                 </h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div className="bg-white p-4 rounded-lg shadow-sm">
//                     <h3 className="font-semibold text-amber-700 mb-2">🚩 Vague or Evasive Answers</h3>
//                     <p className="text-sm text-gray-700">
//                       Reputable retailers welcome questions and provide specific details about their products.
//                     </p>
//                   </div>
//                   <div className="bg-white p-4 rounded-lg shadow-sm">
//                     <h3 className="font-semibold text-amber-700 mb-2">🚩 No Third-Party Testing</h3>
//                     <p className="text-sm text-gray-700">
//                       Without independent lab results, you can't verify what's actually in the product.
//                     </p>
//                   </div>
//                   <div className="bg-white p-4 rounded-lg shadow-sm">
//                     <h3 className="font-semibold text-amber-700 mb-2">🚩 Medical Claims</h3>
//                     <p className="text-sm text-gray-700">
//                       Legitimate sellers won't claim CBD treats or cures diseases - this violates FDA regulations.
//                     </p>
//                   </div>
//                   <div className="bg-white p-4 rounded-lg shadow-sm">
//                     <h3 className="font-semibold text-amber-700 mb-2">🚩 Pressure to Buy</h3>
//                     <p className="text-sm text-gray-700">
//                       Ethical retailers give you space to consider your purchase without high-pressure tactics.
//                     </p>
//                   </div>
//                 </div>
//               </section>

//               {/* FAQ Section */}
//               <section className="bg-white p-6 rounded-xl shadow-md mb-10">
//                 <h2 className="text-2xl font-bold mb-6 text-gray-800">
//                   Frequently Asked Questions
//                 </h2>

//                 <div className="space-y-6">
//                   <div>
//                     <h3 className="text-lg font-semibold text-gray-800 mb-2">
//                       Should I buy CBD from a dispensary or specialty retailer?
//                     </h3>
//                     <p className="text-base text-gray-600">
//                       Dispensaries typically carry cannabis-derived CBD (which may contain higher THC levels), while specialty CBD stores sell hemp-derived products (under 0.3% THC). Choose based on your needs and local laws. Specialty retailers often have more CBD-specific expertise.
//                     </p>
//                   </div>

//                   <div>
//                     <h3 className="text-lg font-semibold text-gray-800 mb-2">
//                       How can I verify a Certificate of Analysis is legitimate?
//                     </h3>
//                     <p className="text-base text-gray-600">
//                       Check that the COA comes from an accredited lab (look for ISO 17025 certification), matches the product batch number, and shows testing for both cannabinoids and contaminants. You can often verify results by contacting the lab directly.
//                     </p>
//                   </div>

//                   <div>
//                     <h3 className="text-lg font-semibold text-gray-800 mb-2">
//                       What's more important - price or quality with CBD?
//                     </h3>
//                     <p className="text-base text-gray-600">
//                       Quality should be your primary concern. Cheap CBD products often use inferior ingredients, lack proper testing, or contain less CBD than advertised. That said, the most expensive option isn't always the best - focus on transparency and testing rather than price alone.
//                     </p>
//                   </div>
//                 </div>
//               </section>

//               {/* Takeaway Section */}
//               <section className="bg-white p-6 rounded-xl shadow-md mb-10">
//                 <h2 className="text-2xl font-bold mb-4 text-gray-800">
//                   Key Takeaways
//                 </h2>

//                 <div className="bg-teal-50 p-5 rounded-lg mb-5">
//                   <h3 className="text-lg font-semibold text-teal-800 mb-3">Empowered Shopping Checklist</h3>
//                   <ul className="space-y-3">
//                     <li className="flex items-start">
//                       <span className="bg-teal-100 text-teal-800 rounded-full p-1 mr-3">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                           <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                         </svg>
//                       </span>
//                       <span>Come prepared with specific questions about sourcing and testing</span>
//                     </li>
//                     <li className="flex items-start">
//                       <span className="bg-teal-100 text-teal-800 rounded-full p-1 mr-3">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                           <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                         </svg>
//                       </span>
//                       <span>Review lab reports before purchasing</span>
//                     </li>
//                     <li className="flex items-start">
//                       <span className="bg-teal-100 text-teal-800 rounded-full p-1 mr-3">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                           <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                         </svg>
//                       </span>
//                       <span>Understand proper dosing for your needs</span>
//                     </li>
//                     <li className="flex items-start">
//                       <span className="bg-teal-100 text-teal-800 rounded-full p-1 mr-3">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                           <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                         </svg>
//                       </span>
//                       <span>Trust retailers who educate rather than pressure</span>
//                     </li>
//                   </ul>
//                 </div>

//                 <div className="bg-blue-50 p-5 rounded-lg">
//                   <h3 className="text-lg font-semibold text-blue-800 mb-3">Final Advice</h3>
//                   <p className="text-base text-gray-700 mb-3">
//                     A quality CBD retailer will welcome your questions and provide thorough, transparent answers. Don't hesitate to walk away from any seller who can't or won't provide satisfactory information about their products.
//                   </p>
//                   <p className="text-base text-gray-700">
//                     Remember that while CBD shows promise for various wellness applications, it's not a miracle cure. Manage your expectations, start with low doses, and consult your healthcare provider—especially if you take medications or have underlying health conditions.
//                   </p>
//                 </div>
//               </section>
//             </div>

//             {/* Sidebar - Matching previous structure */}
//             <div className="lg:col-span-1">
//               {/* Author Info */}
//               <div className="bg-gray-50 rounded-lg p-6 mb-8">
//                 <div className="flex items-start gap-4 mb-4">
//                   <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
//                     <User className="w-8 h-8 text-gray-600" />
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-600 mb-1">
//                       <a href="#" className="text-blue-600 hover:underline">
//                         Medically reviewed
//                       </a>{" "}
//                       by{" "}
//                       <a
//                         href="#"
//                         className="text-blue-600 hover:underline font-medium"
//                       >
//                         Dominique Fontaine, BSN, RN, HNB-BC, HWNC-BC
//                       </a>
//                     </p>

//                     <p className="text-sm text-gray-600 mb-1">
//                       — Written by{" "}
//                       <a
//                         href="#"
//                         className="text-blue-600 hover:underline font-medium"
//                       >
//                         Jessica Timmons
//                       </a>
//                     </p>

//                     <p className="text-sm text-gray-600 flex items-center gap-1">
//                       — <Calendar className="w-3 h-3" />
//                       <a href="#" className="text-blue-600 hover:underline">
//                         Updated on June 30, 2024
//                       </a>
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* Newsletter Signup */}
//               <div className="bg-teal-50 rounded-lg p-6 mb-8">
//                 <div className="mb-4">
//                   <h3 className="text-sm font-bold text-teal-800 uppercase tracking-wide mb-2">
//                     HEALTHLINE NEWSLETTER
//                   </h3>
//                   <h4 className="text-xl font-bold text-gray-900 mb-2">
//                     The best of health and wellness
//                   </h4>
//                   <p className="text-gray-700 text-sm">
//                     We do the research so you don't have to. Stay in the know with
//                     the latest in health and wellness.
//                   </p>
//                 </div>

//                 <form onSubmit={handleEmailSubmit} className="space-y-4">
//                   <input
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     placeholder="Enter your email"
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
//                     required
//                   />
//                   <button
//                     type="submit"
//                     className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200"
//                   >
//                     JOIN NOW
//                   </button>
//                 </form>

//                 <p className="text-xs text-gray-600 mt-3">
//                   Your{" "}
//                   <a href="#" className="text-teal-600 hover:underline">
//                     privacy
//                   </a>{" "}
//                   is important to us
//                 </p>
//               </div>

//               {/* Top CBD Products */}
//               <div className="bg-white rounded-lg p-6 mb-8 border border-gray-200 shadow-sm">
//                 <h3 className="text-lg font-bold text-gray-800 mb-4">
//                   Recommended CBD Products
//                 </h3>
//                 <div className="space-y-4">
//                   <div className="border-b pb-4">
//                     <h4 className="font-medium text-gray-800">Best Full-Spectrum</h4>
//                     <p className="text-sm text-gray-600">Charlotte's Web CBD Oil</p>
//                     <a href="#" className="text-blue-600 text-sm hover:underline">View product</a>
//                   </div>
//                   <div className="border-b pb-4">
//                     <h4 className="font-medium text-gray-800">Best Broad-Spectrum</h4>
//                     <p className="text-sm text-gray-600">CBDistillery Nighttime Formula</p>
//                     <a href="#" className="text-blue-600 text-sm hover:underline">View product</a>
//                   </div>
//                   <div>
//                     <h4 className="font-medium text-gray-800">Best Isolate</h4>
//                     <p className="text-sm text-gray-600">Medterra CBD Oil</p>
//                     <a href="#" className="text-blue-600 text-sm hover:underline">View product</a>
//                   </div>
//                 </div>
//               </div>

//               {/* Advertisement Placeholder */}
//               <div className="bg-gray-100 rounded-lg p-6 mb-8">
//                 <p className="text-center text-gray-500 text-sm mb-4">
//                   ADVERTISEMENT
//                 </p>
//                 <div className="bg-blue-600 rounded-lg p-6 text-white text-center">
//                   <h4 className="font-bold mb-2">Creating Your Avatar</h4>
//                   <p className="text-sm mb-4">
//                     Hair Color, Eye Color, Skin Tone, Body Type
//                   </p>
//                   <button className="bg-teal-400 hover:bg-teal-500 text-white px-4 py-2 rounded text-sm font-medium transition-colors">
//                     CONTINUE
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




"use client";

import { useState } from "react";
import { User, Calendar, ChevronDown, ChevronUp } from "lucide-react";

export default function CbdArticle8() {
  const [email, setEmail] = useState("");
  const [activeTab, setActiveTab] = useState("Sourcing");
  const [expandedSections, setExpandedSections] = useState({
    sourcing: true,
    testing: false,
    dosage: false,
    quality: false,
    safety: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  const tabs = [
    "Sourcing",
    "Testing",
    "Dosage",
    "Product Quality",
    "Safety",
    "Returns",
    "FAQ",
    "Takeaway"
  ];

  return (
    <div className="min-h-screen bg-white mt-40 lg:mt-40 pt-4 sm:pt-8 md:pt-12 lg:pt-16 xl:pt-20">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
        {/* Main grid container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Main Content - takes 2/3 width on large screens */}
          <div className="lg:col-span-2">
            {/* Header Section */}
            <div className="mb-6 sm:mb-8">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6 leading-tight">
                Essential Questions to Ask Your CBD Retailer
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
                Prepare for your CBD shopping experience with this comprehensive list of important questions about sourcing, testing, dosage, and product quality.
              </p>

              {/* Main Image */}
              <div className="mb-4 sm:mb-6 md:mb-8">
                <img
                  src="https://images.unsplash.com/photo-1576086213369-97a306d3655b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80"
                  alt="Customer talking with CBD retailer"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <p className="text-xs text-gray-500 mt-2">Having an informed conversation with your CBD retailer ensures you get quality products</p>
              </div>

              {/* Key Questions Overview */}
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 sm:p-5 md:p-6 mb-6 sm:mb-8 rounded-r-lg">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">
                  Why These Questions Matter
                </h2>
                <p className="text-sm sm:text-base text-gray-700 mb-3">
                  The CBD market is largely unregulated, making it crucial to vet retailers thoroughly. Asking these questions will help you:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm sm:text-base">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Identify reputable brands that prioritize quality</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Verify product safety and purity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Ensure proper CBD potency and dosing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Understand the product's origins and processing</span>
                  </li>
                </ul>
              </div>

              {/* Sourcing Questions */}
              <section 
                className="bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-sm mb-6 border border-gray-200 cursor-pointer"
                onClick={() => toggleSection('sourcing')}
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    Sourcing & Production Questions
                  </h2>
                  {expandedSections.sourcing ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </div>
                
                {expandedSections.sourcing && (
                  <div className="mt-4 space-y-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-blue-700 mb-2">1. Where is your hemp grown?</h3>
                      <p className="text-sm text-gray-700">
                        <span className="font-medium">Why ask:</span> Hemp is a bioaccumulator that absorbs contaminants from soil. Domestic hemp (especially from Colorado, Oregon, or Kentucky) is typically grown under stricter regulations.
                      </p>
                      <p className="text-sm text-gray-700 mt-2">
                        <span className="font-medium">Good answer:</span> "Our hemp is grown organically in Colorado under the state's hemp pilot program with strict agricultural standards."
                      </p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-blue-700 mb-2">2. What extraction method do you use?</h3>
                      <p className="text-sm text-gray-700">
                        <span className="font-medium">Why ask:</span> Superior methods like CO2 extraction yield cleaner products without residual solvents.
                      </p>
                      <p className="text-sm text-gray-700 mt-2">
                        <span className="font-medium">Good answer:</span> "We use supercritical CO2 extraction which preserves cannabinoids and terpenes without chemical solvents."
                      </p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-blue-700 mb-2">3. Is your hemp grown organically?</h3>
                      <p className="text-sm text-gray-700">
                        <span className="font-medium">Why ask:</span> Certified organic hemp reduces exposure to pesticides and heavy metals.
                      </p>
                      <p className="text-sm text-gray-700 mt-2">
                        <span className="font-medium">Good answer:</span> "Yes, our farms are USDA Organic certified and we can provide documentation."
                      </p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-blue-700 mb-2">4. How do you ensure consistency between batches?</h3>
                      <p className="text-sm text-gray-700">
                        <span className="font-medium">Why ask:</span> Quality control measures prevent potency fluctuations in CBD products.
                      </p>
                      <p className="text-sm text-gray-700 mt-2">
                        <span className="font-medium">Good answer:</span> "We conduct HPLC testing on every batch and adjust formulations to maintain consistent cannabinoid profiles."
                      </p>
                    </div>
                  </div>
                )}
              </section>

              {/* Testing Questions */}
              <section 
                className="bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-sm mb-6 border border-gray-200 cursor-pointer"
                onClick={() => toggleSection('testing')}
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    Testing & Verification Questions
                  </h2>
                  {expandedSections.testing ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </div>
                
                {expandedSections.testing && (
                  <div className="mt-4 space-y-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-blue-700 mb-2">5. Can you provide third-party lab results (COAs)?</h3>
                      <p className="text-sm text-gray-700">
                        <span className="font-medium">Why ask:</span> Certificates of Analysis verify cannabinoid content and screen for contaminants.
                      </p>
                      <p className="text-sm text-gray-700 mt-2">
                        <span className="font-medium">Good answer:</span> "Here's the COA for this batch that shows cannabinoid percentages and confirms absence of pesticides, heavy metals, and microbials."
                      </p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-blue-700 mb-2">6. How recently was this product tested?</h3>
                      <p className="text-sm text-gray-700">
                        <span className="font-medium">Why ask:</span> CBD degrades over time - recent tests ensure current potency.
                      </p>
                      <p className="text-sm text-gray-700 mt-2">
                        <span className="font-medium">Good answer:</span> "This batch was tested last month - we retest every 6 months or with new production runs."
                      </p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-blue-700 mb-2">7. Does the COA include contaminant screening?</h3>
                      <p className="text-sm text-gray-700">
                        <span className="font-medium">Why ask:</span> Complete testing should cover pesticides, solvents, heavy metals, and microbes.
                      </p>
                      <p className="text-sm text-gray-700 mt-2">
                        <span className="font-medium">Good answer:</span> "Yes, our full-panel tests include 60+ pesticides, 5 heavy metals, microbials, and residual solvents."
                      </p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-blue-700 mb-2">8. Is your testing lab ISO 17025 accredited?</h3>
                      <p className="text-sm text-gray-700">
                        <span className="font-medium">Why ask:</span> This accreditation indicates rigorous lab standards.
                      </p>
                      <p className="text-sm text-gray-700 mt-2">
                        <span className="font-medium">Good answer:</span> "We use two independent ISO 17025 accredited labs for redundancy and verification."
                      </p>
                    </div>
                  </div>
                )}
              </section>

              {/* Dosage Questions */}
              <section 
                className="bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-sm mb-6 border border-gray-200 cursor-pointer"
                onClick={() => toggleSection('dosage')}
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    Dosage & Potency Questions
                  </h2>
                  {expandedSections.dosage ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </div>
                
                {expandedSections.dosage && (
                  <div className="mt-4 space-y-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-blue-700 mb-2">9. How much CBD is in each serving?</h3>
                      <p className="text-sm text-gray-700">
                        <span className="font-medium">Why ask:</span> Products vary widely - a gummy might contain 5mg while oils offer 50mg per mL.
                      </p>
                      <p className="text-sm text-gray-700 mt-2">
                        <span className="font-medium">Good answer:</span> "This tincture provides 33mg of CBD per 1mL dropper, and here's how to measure partial doses."
                      </p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-blue-700 mb-2">10. What's your recommended starting dose?</h3>
                      <p className="text-sm text-gray-700">
                        <span className="font-medium">Why ask:</span> Proper dosing guidance prevents taking too much or too little initially.
                      </p>
                      <p className="text-sm text-gray-700 mt-2">
                        <span className="font-medium">Good answer:</span> "For beginners, we suggest 10-25mg daily, increasing by 5mg every 3-4 days as needed."
                      </p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-blue-700 mb-2">11. How should I adjust dosage for different effects?</h3>
                      <p className="text-sm text-gray-700">
                        <span className="font-medium">Why ask:</span> Lower doses may be stimulating while higher doses tend to be more relaxing.
                      </p>
                      <p className="text-sm text-gray-700 mt-2">
                        <span className="font-medium">Good answer:</span> "For daytime focus try 10-15mg, for relaxation 25-50mg, and for sleep support 50-100mg taken 30 minutes before bed."
                      </p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-blue-700 mb-2">12. How long until I should expect effects?</h3>
                      <p className="text-sm text-gray-700">
                        <span className="font-medium">Why ask:</span> Onset time varies by product type - managing expectations prevents overconsumption.
                      </p>
                      <p className="text-sm text-gray-700 mt-2">
                        <span className="font-medium">Good answer:</span> "Tinctures take 15-45 minutes, edibles 45-90 minutes, and effects typically last 4-6 hours."
                      </p>
                    </div>
                  </div>
                )}
              </section>

              {/* Product Quality Questions */}
              <section 
                className="bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-sm mb-6 border border-gray-200 cursor-pointer"
                onClick={() => toggleSection('quality')}
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    Product Quality Questions
                  </h2>
                  {expandedSections.quality ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </div>
                
                {expandedSections.quality && (
                  <div className="mt-4 space-y-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-blue-700 mb-2">13. Is this full-spectrum, broad-spectrum, or isolate?</h3>
                      <p className="text-sm text-gray-700">
                        <span className="font-medium">Why ask:</span> These types have different effects and legal implications (full-spectrum contains THC).
                      </p>
                      <p className="text-sm text-gray-700 mt-2">
                        <span className="font-medium">Good answer:</span> "This is broad-spectrum with all cannabinoids except THC, shown here on the COA."
                      </p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-blue-700 mb-2">14. What other ingredients are included?</h3>
                      <p className="text-sm text-gray-700">
                        <span className="font-medium">Why ask:</span> Some additives may cause allergies or interact with medications.
                      </p>
                      <p className="text-sm text-gray-700 mt-2">
                        <span className="font-medium">Good answer:</span> "Just organic MCT oil and natural flavors - no artificial additives or common allergens."
                      </p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-blue-700 mb-2">15. How should I store this product?</h3>
                      <p className="text-sm text-gray-700">
                        <span className="font-medium">Why ask:</span> Proper storage preserves potency and prevents spoilage.
                      </p>
                      <p className="text-sm text-gray-700 mt-2">
                        <span className="font-medium">Good answer:</span> "Keep in a cool, dark place away from sunlight. Refrigeration can extend shelf life but isn't required."
                      </p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-blue-700 mb-2">16. What's the expiration date?</h3>
                      <p className="text-sm text-gray-700">
                        <span className="font-medium">Why ask:</span> CBD degrades over time - fresher products maintain potency.
                      </p>
                      <p className="text-sm text-gray-700 mt-2">
                        <span className="font-medium">Good answer:</span> "This batch expires in 14 months - we recommend use within 1 year for optimal freshness."
                      </p>
                    </div>
                  </div>
                )}
              </section>

              {/* Safety Questions */}
              <section 
                className="bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-sm mb-6 border border-gray-200 cursor-pointer"
                onClick={() => toggleSection('safety')}
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    Safety & Legal Questions
                  </h2>
                  {expandedSections.safety ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </div>
                
                {expandedSections.safety && (
                  <div className="mt-4 space-y-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-blue-700 mb-2">17. Could this product cause me to fail a drug test?</h3>
                      <p className="text-sm text-gray-700">
                        <span className="font-medium">Why ask:</span> Even trace THC in full-spectrum products may accumulate.
                      </p>
                      <p className="text-sm text-gray-700 mt-2">
                        <span className="font-medium">Good answer:</span> "Our broad-spectrum products contain undetectable THC, but we can't guarantee all tests will be negative."
                      </p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-blue-700 mb-2">18. Are there any known medication interactions?</h3>
                      <p className="text-sm text-gray-700">
                        <span className="font-medium">Why ask:</span> CBD can affect metabolism of some drugs.
                      </p>
                      <p className="text-sm text-gray-700 mt-2">
                        <span className="font-medium">Good answer:</span> "CBD may interact with blood thinners, antidepressants, and some seizure medications - consult your doctor."
                      </p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-blue-700 mb-2">19. Is this product legal in my state?</h3>
                      <p className="text-sm text-gray-700">
                        <span className="font-medium">Why ask:</span> CBD laws vary by state, especially for products with THC.
                      </p>
                      <p className="text-sm text-gray-700 mt-2">
                        <span className="font-medium">Good answer:</span> "Our hemp-derived CBD is federally legal, but we recommend checking your local regulations regarding THC content."
                      </p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-blue-700 mb-2">20. Do you have documentation of FDA compliance?</h3>
                      <p className="text-sm text-gray-700">
                        <span className="font-medium">Why ask:</span> Reputable companies follow FDA guidelines for labeling and claims.
                      </p>
                      <p className="text-sm text-gray-700 mt-2">
                        <span className="font-medium">Good answer:</span> "We adhere to all FDA regulations for dietary supplements and can provide our product registration."
                      </p>
                    </div>
                  </div>
                )}
              </section>

              {/* Red Flags Section */}
              <section className="bg-amber-50 border-l-4 border-amber-400 p-5 sm:p-6 rounded-r-lg mb-8">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3">
                  Warning Signs in Retailer Responses
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="font-semibold text-amber-700 mb-2">🚩 Vague or Evasive Answers</h3>
                    <p className="text-sm text-gray-700">
                      Reputable retailers welcome questions and provide specific details about their products.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="font-semibold text-amber-700 mb-2">🚩 No Third-Party Testing</h3>
                    <p className="text-sm text-gray-700">
                      Without independent lab results, you can't verify what's actually in the product.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="font-semibold text-amber-700 mb-2">🚩 Medical Claims</h3>
                    <p className="text-sm text-gray-700">
                      Legitimate sellers won't claim CBD treats or cures diseases - this violates FDA regulations.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="font-semibold text-amber-700 mb-2">🚩 Pressure to Buy</h3>
                    <p className="text-sm text-gray-700">
                      Ethical retailers give you space to consider your purchase without high-pressure tactics.
                    </p>
                  </div>
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
                      Should I buy CBD from a dispensary or specialty retailer?
                    </h3>
                    <p className="text-base text-gray-600">
                      Dispensaries typically carry cannabis-derived CBD (which may contain higher THC levels), while specialty CBD stores sell hemp-derived products (under 0.3% THC). Choose based on your needs and local laws. Specialty retailers often have more CBD-specific expertise.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      How can I verify a Certificate of Analysis is legitimate?
                    </h3>
                    <p className="text-base text-gray-600">
                      Check that the COA comes from an accredited lab (look for ISO 17025 certification), matches the product batch number, and shows testing for both cannabinoids and contaminants. You can often verify results by contacting the lab directly.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      What's more important - price or quality with CBD?
                    </h3>
                    <p className="text-base text-gray-600">
                      Quality should be your primary concern. Cheap CBD products often use inferior ingredients, lack proper testing, or contain less CBD than advertised. That said, the most expensive option isn't always the best - focus on transparency and testing rather than price alone.
                    </p>
                  </div>
                </div>
              </section>

              {/* Takeaway Section */}
              <section className="bg-white p-6 rounded-xl shadow-md mb-10">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">
                  Key Takeaways
                </h2>

                <div className="bg-teal-50 p-5 rounded-lg mb-5">
                  <h3 className="text-lg font-semibold text-teal-800 mb-3">Empowered Shopping Checklist</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="bg-teal-100 text-teal-800 rounded-full p-1 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span>Come prepared with specific questions about sourcing and testing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-teal-100 text-teal-800 rounded-full p-1 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span>Review lab reports before purchasing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-teal-100 text-teal-800 rounded-full p-1 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span>Understand proper dosing for your needs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-teal-100 text-teal-800 rounded-full p-1 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span>Trust retailers who educate rather than pressure</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">Final Advice</h3>
                  <p className="text-base text-gray-700 mb-3">
                    A quality CBD retailer will welcome your questions and provide thorough, transparent answers. Don't hesitate to walk away from any seller who can't or won't provide satisfactory information about their products.
                  </p>
                  <p className="text-base text-gray-700">
                    Remember that while CBD shows promise for various wellness applications, it's not a miracle cure. Manage your expectations, start with low doses, and consult your healthcare provider—especially if you take medications or have underlying health conditions.
                  </p>
                </div>
              </section>
            </div>
          </div>

          {/* Sidebar - takes 1/3 width on large screens */}
          <div className="lg:col-span-1 lg:sticky lg:top-28 lg:self-start">
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

            {/* Top CBD Products */}
            <div className="bg-white rounded-lg p-6 mb-8 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Recommended CBD Products
              </h3>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <h4 className="font-medium text-gray-800">Best Full-Spectrum</h4>
                  <p className="text-sm text-gray-600">Charlotte's Web CBD Oil</p>
                  <a href="#" className="text-blue-600 text-sm hover:underline">View product</a>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-medium text-gray-800">Best Broad-Spectrum</h4>
                  <p className="text-sm text-gray-600">CBDistillery Nighttime Formula</p>
                  <a href="#" className="text-blue-600 text-sm hover:underline">View product</a>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Best Isolate</h4>
                  <p className="text-sm text-gray-600">Medterra CBD Oil</p>
                  <a href="#" className="text-blue-600 text-sm hover:underline">View product</a>
                </div>
              </div>
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