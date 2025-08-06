"use client";

import { useState } from "react";
import { User, Calendar } from "lucide-react";

export default function CbdArticle16() {
  const [email, setEmail] = useState("");
  const [activeTab, setActiveTab] = useState("Federal Laws");

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  const tabs = [
    "Federal Laws",
    "State Variations",
    "International",
    "Compliance",
    "Industry Standards",
    "Future Outlook",
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
                Legal Landscape: Understanding CBD Laws and Regulations
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
                            ? "border-blue-500 text-blue-600"
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
                Navigate the complex legal environment surrounding CBD including federal regulations, 
                state laws, and compliance considerations for consumers and businesses in this 
                rapidly evolving industry.
              </p>

              {/* Main Image */}
              <div className="mb-4 sm:mb-6 md:mb-8">
                <img
                  src="https://images.unsplash.com/photo-1584483766114-2cea6facdf57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Legal documents and gavel with CBD products"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>

              {/* Article Description */}
              <div className="bg-blue-50 border-l-4 border-blue-400 p-3 sm:p-4 md:p-5 mb-4 sm:mb-6 md:mb-8 rounded-r-lg">
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  The legal status of CBD remains complex and varies significantly by jurisdiction. 
                  This guide provides a comprehensive overview of current CBD laws, regulatory 
                  challenges, and compliance requirements to help consumers and businesses navigate 
                  this evolving landscape safely and legally.
                </p>
              </div>

              <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 md:mb-8">
                We'll examine the patchwork of federal and state regulations, international 
                considerations, quality control standards, and what future legal developments 
                may mean for CBD accessibility and commerce.
              </p>
            </div>

            {/* Federal Laws Section */}
            <div className="bg-blue-50 border-l-4 border-blue-400 p-3 sm:p-4 md:p-5 rounded-r-lg mb-4 sm:mb-6 md:mb-8">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">
                Federal CBD Regulations in the United States
              </h2>

              <div className="space-y-3 sm:space-y-4">
                <div>
                  <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">
                    1. The 2018 Farm Bill
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed">
                    The Agriculture Improvement Act of 2018 (Farm Bill) federally legalized hemp 
                    and hemp-derived products containing less than 0.3% THC by dry weight. 
                    However, the FDA maintains regulatory authority over CBD in food, drugs, 
                    and cosmetics, creating ongoing legal ambiguity.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">
                    2. FDA Regulation of CBD
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed">
                    The FDA has approved only one CBD product (Epidiolex) as a prescription 
                    medication. The agency prohibits adding CBD to food or marketing it as 
                    a dietary supplement, though enforcement has been inconsistent. In January 
                    2023, the FDA announced it would work with Congress to develop new regulatory 
                    pathways for CBD products.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">
                    3. DEA Scheduling
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed">
                    CBD derived from hemp (containing 0.3% THC) is not a controlled substance. 
                    However, CBD extracted from marijuana remains a Schedule I substance under 
                    federal law. The DEA has clarified that FDA-approved drugs containing CBD 
                    derived from cannabis (like Epidiolex) are Schedule V.
                  </p>
                </div>
              </div>
            </div>

            {/* State Variations */}
            <div className="bg-white border border-gray-200 p-3 sm:p-4 md:p-5 rounded-xl shadow-md mb-4 sm:mb-6 md:mb-8">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-gray-800">
                State-by-State Legal Variations
              </h2>

              <div className="space-y-3 sm:space-y-4">
                <p className="text-sm sm:text-base leading-relaxed">
                  While hemp-derived CBD is federally legal, states have established their own 
                  regulations creating a complex patchwork of laws:
                </p>

                <div className="overflow-x-auto -mx-3 sm:mx-0">
                  <div className="min-w-full inline-block align-middle">
                    <table className="min-w-full table-auto border border-gray-300 text-xs sm:text-sm md:text-base">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2 text-left font-bold">
                            State Category
                          </th>
                          <th className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2 text-left font-bold">
                            Description
                          </th>
                          <th className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2 text-left font-bold">
                            Example States
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="hover:bg-gray-50">
                          <td className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2 font-semibold">
                            Fully Legal
                          </td>
                          <td className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2">
                            No restrictions beyond federal law
                          </td>
                          <td className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2">
                            Colorado, Oregon, Illinois
                          </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2 font-semibold">
                            Restricted
                          </td>
                          <td className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2">
                            Additional labeling/testing requirements
                          </td>
                          <td className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2">
                            Florida, Texas, Virginia
                          </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2 font-semibold">
                            Medical Only
                          </td>
                          <td className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2">
                            CBD only legal with medical authorization
                          </td>
                          <td className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2">
                            Alabama, Georgia, Iowa
                          </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2 font-semibold">
                            Gray Area
                          </td>
                          <td className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2">
                            No explicit laws addressing CBD
                          </td>
                          <td className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2">
                            South Dakota, Idaho*
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <p className="text-xs text-gray-600 mt-2">
                  *Idaho has particularly strict laws allowing only CBD products with 0% THC
                </p>

                <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200">
                  <h4 className="font-semibold mb-2">Key Considerations:</h4>
                  <ul className="text-sm space-y-1 list-disc pl-5">
                    <li>Some states prohibit smokable hemp products</li>
                    <li>Many states have age restrictions (typically 18+ or 21+)</li>
                    <li>Several states require special licensing for CBD retailers</li>
                    <li>Local municipalities may have additional restrictions</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* International Laws */}
            <section className="bg-white p-3 sm:p-4 md:p-6 rounded-xl shadow-md mb-6 sm:mb-8 md:mb-10 border border-gray-200">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-gray-800">
                International CBD Legal Status
              </h2>
              <p className="mb-4 sm:mb-6 text-sm sm:text-base text-gray-600">
                CBD laws vary dramatically worldwide, creating challenges for travelers 
                and international commerce:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h3 className="font-semibold mb-2">Fully Legal (with regulations)</h3>
                  <ul className="text-sm space-y-1">
                    <li>• Canada - Legal under Cannabis Act</li>
                    <li>• UK - Legal as medicine, not food supplement</li>
                    <li>• Switzerland - Legal with 1% THC</li>
                    <li>• Germany - Prescription medical product</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <h3 className="font-semibold mb-2">Restricted or Illegal</h3>
                  <ul className="text-sm space-y-1">
                    <li>• China - Illegal despite hemp production</li>
                    <li>• Russia - All cannabinoids prohibited</li>
                    <li>• Japan - Zero THC tolerance</li>
                    <li>• UAE - Strict drug laws apply</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h3 className="font-semibold mb-2">Medical Use Only</h3>
                  <ul className="text-sm space-y-1">
                    <li>• Australia - Schedule 4 prescription drug</li>
                    <li>• Brazil - Medical use approved</li>
                    <li>• South Korea - Medical exceptions</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <h3 className="font-semibold mb-2">Gray Areas</h3>
                  <ul className="text-sm space-y-1">
                    <li>• Mexico - Decriminalized but unregulated</li>
                    <li>• Thailand - Recently legalized cannabis</li>
                    <li>• South Africa - Personal use allowed</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg mt-4 border border-blue-200">
                <h3 className="font-semibold mb-2">Travel Considerations</h3>
                <p className="text-sm">
                  Transporting CBD across international borders remains risky even when legal 
                  in both countries. Many nations prohibit any cannabis-derived products, 
                  and airport security may not distinguish between legal CBD and illegal 
                  cannabis products. Always research destination laws thoroughly.
                </p>
              </div>
            </section>

            {/* Compliance Section */}
            <section className="bg-white p-3 sm:p-4 md:p-6 rounded-xl shadow-md mb-6 sm:mb-8 md:mb-10 border border-gray-200">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-gray-800">
                Business Compliance Considerations
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-base sm:text-lg mb-2">Licensing Requirements</h3>
                  <p className="text-sm sm:text-base mb-3">
                    CBD businesses must navigate multiple regulatory frameworks:
                  </p>
                  <ul className="text-sm space-y-1 list-disc pl-5">
                    <li>State hemp cultivation and processing licenses</li>
                    <li>Local business operation permits</li>
                    <li>FDA facility registration for manufacturers</li>
                    <li>Special retail licenses in some jurisdictions</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-base sm:text-lg mb-2">Labeling & Testing Standards</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <h4 className="font-medium mb-1">Required Label Elements</h4>
                      <ul className="text-xs sm:text-sm space-y-1">
                        <li>• CBD/THC content (mg per serving and per container)</li>
                        <li>• Batch/lot number for traceability</li>
                        <li>• Third-party lab testing results</li>
                        <li>• Ingredients list and allergen information</li>
                        <li>• Manufacturer/distributor contact info</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <h4 className="font-medium mb-1">Common Testing Requirements</h4>
                      <ul className="text-xs sm:text-sm space-y-1">
                        <li>• Potency (CBD/THC levels)</li>
                        <li>• Heavy metals screening</li>
                        <li>• Pesticide residue analysis</li>
                        <li>• Microbial contamination</li>
                        <li>• Residual solvents (for extracted products)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <h3 className="font-semibold text-base sm:text-lg mb-2">Marketing Restrictions</h3>
                  <p className="text-sm sm:text-base mb-2">
                    The FDA closely monitors CBD marketing claims. Prohibited practices include:
                  </p>
                  <ul className="text-sm space-y-1 list-disc pl-5">
                    <li>Making unapproved drug claims (treating/curing diseases)</li>
                    <li>Marketing as a dietary supplement</li>
                    <li>Adding to conventional foods or making health claims</li>
                    <li>Targeting children or making false efficacy claims</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Industry Standards */}
            <section className="bg-white p-3 sm:p-4 md:p-6 rounded-xl shadow-md mb-6 sm:mb-8 md:mb-10 border border-gray-200">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-gray-800">
                Industry Best Practices & Quality Standards
              </h2>

              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h3 className="font-semibold mb-2">Current Industry Standards</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                    <div>
                      <h4 className="font-medium">US Hemp Authority</h4>
                      <p>Certification program for hemp producers</p>
                    </div>
                    <div>
                      <h4 className="font-medium">ISO 17025</h4>
                      <p>Laboratory competence standard</p>
                    </div>
                    <div>
                      <h4 className="font-medium">cGMP</h4>
                      <p>Current Good Manufacturing Practices</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-base sm:text-lg mb-2">How to Identify Reputable Brands</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-3 rounded-lg border border-gray-200">
                      <h4 className="font-medium mb-1">Positive Indicators</h4>
                      <ul className="text-xs sm:text-sm space-y-1 list-disc pl-5">
                        <li>Comprehensive third-party lab reports</li>
                        <li>Transparent sourcing information</li>
                        <li>USDA organic certification (when applicable)</li>
                        <li>Active in industry associations</li>
                        <li>Clear batch tracking systems</li>
                      </ul>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-gray-200">
                      <h4 className="font-medium mb-1">Red Flags</h4>
                      <ul className="text-xs sm:text-sm space-y-1 list-disc pl-5">
                        <li>No certificate of analysis available</li>
                        <li>Unrealistic health claims</li>
                        <li>Prices significantly below market average</li>
                        <li>Vague or missing ingredient lists</li>
                        <li>No contact information provided</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h3 className="font-semibold mb-2">Consumer Protection Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                    <div>
                      <h4 className="font-medium">FDA Warning Letters</h4>
                      <p>Database of non-compliant companies</p>
                    </div>
                    <div>
                      <h4 className="font-medium">NASC</h4>
                      <p>National Animal Supplement Council (for pet products)</p>
                    </div>
                    <div>
                      <h4 className="font-medium">BBB</h4>
                      <p>Better Business Bureau complaints</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Future Outlook */}
            <section className="bg-white p-3 sm:p-4 md:p-6 rounded-xl shadow-md mb-6 sm:mb-8 md:mb-10 border border-gray-200">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-gray-800">
                The Future of CBD Regulation
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-base sm:text-lg mb-2">Pending Legislation</h3>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <ul className="text-sm space-y-2">
                      <li>
                        <span className="font-medium">CBD Product Safety and Standardization Act</span> - 
                        Would establish federal CBD framework with FDA oversight
                      </li>
                      <li>
                        <span className="font-medium">Hemp Advancement Act</span> - 
                        Proposes raising THC limit to 1% and other industry reforms
                      </li>
                      <li>
                        <span className="font-medium">States Reform Act</span> - 
                        Would deschedule cannabis at federal level
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-base sm:text-lg mb-2">Emerging Regulatory Trends</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-3 rounded-lg border border-gray-200">
                      <h4 className="font-medium mb-1">Standardization</h4>
                      <p className="text-sm">
                        Movement toward uniform testing methods, labeling requirements, 
                        and quality standards across states
                      </p>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-gray-200">
                      <h4 className="font-medium mb-1">Banking Reform</h4>
                      <p className="text-sm">
                        Potential changes to allow financial services for legal CBD businesses
                      </p>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-gray-200">
                      <h4 className="font-medium mb-1">International Harmonization</h4>
                      <p className="text-sm">
                        Efforts to align CBD regulations between trading partners
                      </p>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-gray-200">
                      <h4 className="font-medium mb-1">Synthetic CBD</h4>
                      <p className="text-sm">
                        Emerging regulatory frameworks for lab-created cannabinoids
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <h3 className="font-semibold mb-2">Potential Challenges</h3>
                  <ul className="text-sm space-y-1 list-disc pl-5">
                    <li>Possible FDA pre-market approval requirements</li>
                    <li>Increasing state-level taxation of CBD products</li>
                    <li>Patent disputes over extraction methods and formulations</li>
                    <li>Potential scheduling of minor cannabinoids</li>
                  </ul>
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
                    Is CBD legal in all 50 states?
                  </h3>
                  <p className="text-base text-gray-600">
                    While hemp-derived CBD (containing 0.3% THC) is federally legal, some states 
                    have additional restrictions. Idaho, for example, only allows CBD with 0% THC. 
                    Several states require CBD products to come from state-licensed producers. 
                    Always check your state's specific laws before purchasing or transporting CBD.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Can I travel with CBD products?
                  </h3>
                  <p className="text-base text-gray-600">
                    Domestic air travel with hemp-derived CBD is permitted by TSA guidelines, 
                    but international travel remains risky. Many countries prohibit all cannabis-derived 
                    products, and airport security may not distinguish between legal CBD and illegal 
                    cannabis. For international travel, it's safest to avoid carrying CBD altogether.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Why does the FDA restrict CBD in food and supplements?
                  </h3>
                  <p className="text-base text-gray-600">
                    The FDA maintains that CBD cannot be marketed as a dietary supplement or added 
                    to food because it was first approved as an active ingredient in an approved 
                    drug (Epidiolex). The agency cites safety concerns including potential liver 
                    toxicity, drug interactions, and cumulative effects that require further study.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    How can I verify if a CBD product is legal?
                  </h3>
                  <p className="text-base text-gray-600">
                    Look for: 1) Certificate of Analysis showing 0.3% THC, 2) GMP certification, 
                    3) US-grown hemp source, 4) Transparent labeling with batch numbers, and 
                    5) No unapproved health claims. Reputable companies provide third-party lab 
                    results verifying cannabinoid content and absence of contaminants.
                  </p>
                </div>
              </div>
            </section>

            {/* Takeaway */}
            <section className="bg-white p-6 rounded-xl shadow-md mb-10">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                Key Takeaways
              </h2>

              <div className="space-y-4">
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>
                    <span className="font-semibold">Federal vs. state laws:</span> While the 2018 Farm Bill legalized hemp-derived CBD federally, 
                    state laws vary significantly and the FDA maintains regulatory authority over CBD in food, 
                    drugs, and cosmetics.
                  </li>
                  <li>
                    <span className="font-semibold">International complexity:</span> CBD's legal status differs dramatically by country, with some 
                    nations prohibiting all cannabis-derived products regardless of THC content.
                  </li>
                  <li>
                    <span className="font-semibold">Business compliance:</span> CBD companies must navigate a maze of licensing requirements, 
                    labeling regulations, and marketing restrictions that vary by jurisdiction.
                  </li>
                  <li>
                    <span className="font-semibold">Consumer protection:</span> Lack of federal oversight means consumers must be vigilant about 
                    product quality, seeking third-party tested products from reputable manufacturers.
                  </li>
                  <li>
                    <span className="font-semibold">Evolving landscape:</span> Ongoing legislative efforts may establish clearer federal CBD 
                    regulations, but significant changes will likely take years to implement.
                  </li>
                </ul>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">Important Note:</span> This article provides general information about CBD laws but does not 
                    constitute legal advice. Regulations change frequently and interpretations may vary. 
                    Always consult with an attorney familiar with cannabis laws in your jurisdiction 
                    for specific legal guidance regarding CBD products.
                  </p>
                </div>

                <h3 className="text-lg font-semibold text-gray-800">
                  Staying Informed
                </h3>
                <p className="text-base text-gray-600">
                  To keep up with changing CBD regulations, follow updates from:
                </p>
                <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                  <li>FDA CBD Regulation Updates</li>
                  <li>USDA Hemp Program</li>
                  <li>National Conference of State Legislatures (NCSL) hemp policy tracking</li>
                  <li>Industry groups like the U.S. Hemp Roundtable or Hemp Industries Association</li>
                </ul>
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
                      Legally reviewed
                    </a>{" "}
                    by{" "}
                    <a
                      href="#"
                      className="text-blue-600 hover:underline font-medium"
                    >
                      Michael Johnson, JD
                    </a>
                  </p>

                  <p className="text-sm text-gray-600 mb-1">
                    — Written by{" "}
                    <a
                      href="#"
                      className="text-blue-600 hover:underline font-medium"
                    >
                      Sarah Williams
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
                  LEGAL UPDATES NEWSLETTER
                </h3>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Stay current on CBD laws
                </h4>
                <p className="text-gray-700 text-sm">
                  Get monthly updates on regulatory changes, compliance requirements, 
                  and legislative developments in the CBD industry.
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
                Your{" "}
                <a href="#" className="text-teal-600 hover:underline">
                  privacy
                </a>{" "}
                is important to us
              </p>
            </div>

            {/* State Law Finder */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8 shadow-sm">
              <h3 className="text-lg font-bold mb-4 text-gray-800">
                CBD Laws By State
              </h3>
              <div className="space-y-3">
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm">
                  <option>Select your state</option>
                  <option>Alabama</option>
                  <option>Alaska</option>
                  {/* Add all states */}
                </select>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 text-sm">
                  CHECK LAWS
                </button>
              </div>
              <p className="text-xs text-gray-600 mt-3">
                Note: Laws change frequently. Verify with local authorities.
              </p>
            </div>

            {/* Legal Resources */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-bold mb-4 text-gray-800">
                Legal Resources
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="text-blue-600 hover:underline flex items-start">
                    <span className="inline-block mr-2">•</span>
                    <span>FDA CBD Regulation Page</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline flex items-start">
                    <span className="inline-block mr-2">•</span>
                    <span>USDA Hemp Program</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline flex items-start">
                    <span className="inline-block mr-2">•</span>
                    <span>NCSL State Hemp Laws</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline flex items-start">
                    <span className="inline-block mr-2">•</span>
                    <span>DEA Cannabis Scheduling</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline flex items-start">
                    <span className="inline-block mr-2">•</span>
                    <span>NORML State Laws</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}