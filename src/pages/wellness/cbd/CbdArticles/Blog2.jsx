"use client";

import { useState } from "react";
import { User, Calendar } from "lucide-react";

export default function CbdArticle2() {
  const [email, setEmail] = useState("");
  const [activeTab, setActiveTab] = useState("Benefits");

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  const tabs = [
    "Types of CBD",
    "Entourage effect",
    "Ways to take CBD",
    "Product picks",
    "Our criteria",
    "How to shop",
    "Safety and side effects",
    "FAQ",
    "Takeaway",
  ];

  return (
    <div className="min-h-screen bg-white  mt-28 pt-4 sm:pt-8 md:pt-12 lg:pt-16 xl:pt-20">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 ">
            {/* Header Section */}
            <div className="mb-6 sm:mb-8">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6 leading-tight">
                What to Know About Different Types of CBD
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
                Curious about CBD? You're in the right place. Learn about the
                three types of CBD and their different forms, and see some of
                our editors' favorite products.
              </p>

              {/* Main Image */}
              <div className="mb-4 sm:mb-6 md:mb-8">
                <img
                  src="https://media.post.rvohealth.io/wp-content/uploads/2024/07/3692910-What-to-Know-About-Different-Types-of-CBD-732x549-Feature.jpg"
                  alt="Woman doing yoga exercise in a bright room"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>

              {/* Article Description */}
              <div className="bg-blue-50 border-l-4 border-blue-400 p-3 sm:p-4 md:p-5 mb-4 sm:mb-6 md:mb-8 rounded-r-lg">
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  If you're new to cannabidiol (CBD) and are unsure what product
                  to use, read on. This guide will teach you the basics of CBD,
                  including the three types of CBD and the different forms they
                  take, and help you understand how to shop for CBD products.
                </p>
              </div>

              <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 md:mb-8">
                We've also share our favorite CBD gummies, oils, topicals, and
                capsules to get you started.
              </p>
            </div>

            {/* Types of CBD Explained */}
            <div className="bg-blue-50 border-l-4 border-blue-400 p-3 sm:p-4 md:p-5 rounded-r-lg mb-4 sm:mb-6 md:mb-8">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">
                Types of CBD Explained
              </h2>

              <div className="space-y-3 sm:space-y-4">
                <div>
                  <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">
                    1. Full-Spectrum CBD
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed">
                    Full-Spectrum CBD includes all natural compounds from the
                    hemp plant, such as cannabinoids (like CBG and CBN),
                    terpenes for aroma, and flavonoids with antioxidant
                    properties. It also contains a minimal amount of THC (below
                    0.3%). Together, these elements create what is called the{" "}
                    <span className="font-semibold">"Entourage Effect"</span>,
                    where the combined benefits are greater than individual
                    compounds alone.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">
                    2. Broad-Spectrum CBD
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed">
                    Broad-Spectrum CBD carries most of the beneficial compounds
                    like cannabinoids and terpenes, but typically has THC fully
                    removed or present only in undetectable traces. It provides
                    similar effects to Full-Spectrum without the concerns
                    related to THC consumption.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">
                    3. CBD Isolate
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed">
                    CBD Isolate is the purest form of CBD, containing only
                    cannabidiol without any other hemp-derived compounds. While
                    it's free from cannabinoids and terpenes, trace THC residues
                    might still be present depending on the production process,
                    which could occasionally show up in sensitive drug tests.
                  </p>
                </div>
              </div>
            </div>

            {/* Entourage Effect */}
            <div className="bg-green-50 border border-green-400 p-3 sm:p-4 md:p-5 rounded-xl shadow-md mb-4 sm:mb-6 md:mb-8">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-green-700">
                Understanding the Entourage Effect
              </h2>

              <div className="space-y-3 sm:space-y-4">
                <p className="text-sm sm:text-base leading-relaxed">
                  Studies suggest that the natural compounds in hemp — including
                  cannabinoids like CBD and THC, plus terpenes and flavonoids —
                  work better together than alone. This natural synergy is known
                  as the{" "}
                  <span className="font-semibold text-green-700">
                    Entourage Effect
                  </span>
                  , enhancing the potential wellness benefits when consumed
                  together.
                </p>

                <p className="text-sm sm:text-base leading-relaxed">
                  Keep in mind that higher doses of full-spectrum CBD could
                  result in slight THC exposure. While experiencing a high is
                  very unlikely, mild euphoric sensations could occur with
                  potent products.
                </p>

                <p className="text-sm sm:text-base leading-relaxed">
                  If you prefer to avoid any risk of psychoactive effects,
                  choosing{" "}
                  <span className="font-semibold">Broad-Spectrum CBD</span> or{" "}
                  <span className="font-semibold">CBD Isolate</span> is a safer
                  option. However, these types might not provide the full
                  amplified effects that the entourage effect offers.
                </p>
              </div>
            </div>

            {/* Comparison Table */}
            <section className="bg-white p-3 sm:p-4 md:p-6 rounded-xl shadow-sm mb-6 sm:mb-8 md:mb-10 border border-gray-200">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-gray-800">
                CBD Types Comparison Table
              </h2>

              <div className="overflow-x-auto -mx-3 sm:mx-0">
                <div className="min-w-full inline-block align-middle">
                  <table className="min-w-full table-auto border border-gray-300 text-xs sm:text-sm md:text-base">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2 text-left font-bold">
                          Type
                        </th>
                        <th className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2 text-left font-bold">
                          What's Inside
                        </th>
                        <th className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2 text-left font-bold">
                          How It May Affect You
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2 font-semibold">
                          Full-Spectrum CBD
                        </td>
                        <td className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2">
                          Includes all hemp compounds like THC (below 0.3%),
                          terpenes, cannabinoids (CBG, CBN), and flavonoids.
                        </td>
                        <td className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2">
                          Can trigger the{" "}
                          <span className="font-semibold">
                            Entourage Effect
                          </span>{" "}
                          (enhanced benefits).
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2 font-semibold">
                          Broad-Spectrum CBD
                        </td>
                        <td className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2">
                          Contains multiple cannabinoids and terpenes, but THC
                          is removed or present in tiny traces.
                        </td>
                        <td className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2">
                          Less likely to cause the{" "}
                          <span className="font-semibold">
                            Entourage Effect
                          </span>
                          .
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2 font-semibold">
                          CBD Isolate
                        </td>
                        <td className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2">
                          Pure CBD only, with no other plant compounds included.
                        </td>
                        <td className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2">
                          No{" "}
                          <span className="font-semibold">
                            Entourage Effect
                          </span>
                          ; delivers only CBD's benefits.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Forms of CBD Table */}
            <section className="bg-white p-3 sm:p-4 md:p-6 rounded-xl shadow-md mb-6 sm:mb-8 md:mb-10 border border-gray-200">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-gray-800">
                The Many Forms of CBD
              </h2>
              <p className="mb-4 sm:mb-6 text-sm sm:text-base text-gray-600">
                Beyond the three primary types of CBD, it is available in
                various forms that suit different lifestyles and needs.
              </p>

              <div className="overflow-x-auto -mx-3 sm:mx-0">
                <div className="min-w-full inline-block align-middle">
                  <table className="min-w-full table-auto border border-gray-300 text-xs sm:text-sm">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 font-bold min-w-[80px]">
                          {" "}
                        </th>
                        <th className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 font-bold min-w-[100px]">
                          Oils & Tinctures
                        </th>
                        <th className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 font-bold min-w-[100px]">
                          Edibles (Gummies)
                        </th>
                        <th className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 font-bold min-w-[100px]">
                          Capsules
                        </th>
                        <th className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 font-bold min-w-[100px]">
                          Topicals
                        </th>
                        <th className="border border-gray-300 px-2 py-2 sm:px-3 sm:py-3 font-bold min-w-[100px]">
                          Vape Juices
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-gray-50">
                        <td className="border px-2 py-2 sm:px-3 sm:py-3 font-semibold">
                          What they are
                        </td>
                        <td className="border px-2 py-2 sm:px-3 sm:py-3">
                          Liquid CBD (oil or alcohol-based)
                        </td>
                        <td className="border px-2 py-2 sm:px-3 sm:py-3">
                          CBD gummies, candies
                        </td>
                        <td className="border px-2 py-2 sm:px-3 sm:py-3">
                          CBD pills or softgels
                        </td>
                        <td className="border px-2 py-2 sm:px-3 sm:py-3">
                          Creams, balms, lotions, ointments
                        </td>
                        <td className="border px-2 py-2 sm:px-3 sm:py-3">
                          CBD-infused liquid for vaping
                        </td>
                      </tr>

                      <tr className="hover:bg-gray-50">
                        <td className="border px-2 py-2 sm:px-3 sm:py-3 font-semibold">
                          How to use
                        </td>
                        <td className="border px-2 py-2 sm:px-3 sm:py-3">
                          Placed under the tongue
                        </td>
                        <td className="border px-2 py-2 sm:px-3 sm:py-3">
                          Eaten
                        </td>
                        <td className="border px-2 py-2 sm:px-3 sm:py-3">
                          Swallowed
                        </td>
                        <td className="border px-2 py-2 sm:px-3 sm:py-3">
                          Applied on skin
                        </td>
                        <td className="border px-2 py-2 sm:px-3 sm:py-3">
                          Inhaled via vaporizer
                        </td>
                      </tr>

                      <tr className="hover:bg-gray-50">
                        <td className="border px-2 py-2 sm:px-3 sm:py-3 font-semibold">
                          Pros
                        </td>
                        <td className="border px-2 py-2 sm:px-3 sm:py-3">
                          Fast-acting, easy to dose, widely available
                        </td>
                        <td className="border px-2 py-2 sm:px-3 sm:py-3">
                          Discreet, easy to use
                        </td>
                        <td className="border px-2 py-2 sm:px-3 sm:py-3">
                          Precise dosage, convenient
                        </td>
                        <td className="border px-2 py-2 sm:px-3 sm:py-3">
                          Targets localized pain or skin issues
                        </td>
                        <td className="border px-2 py-2 sm:px-3 sm:py-3">
                          Fastest absorption, instant effects
                        </td>
                      </tr>

                      <tr className="hover:bg-gray-50">
                        <td className="border px-2 py-2 sm:px-3 sm:py-3 font-semibold">
                          Cons
                        </td>
                        <td className="border px-2 py-2 sm:px-3 sm:py-3">
                          Some dislike the taste
                        </td>
                        <td className="border px-2 py-2 sm:px-3 sm:py-3">
                          Takes longer to work, may melt
                        </td>
                        <td className="border px-2 py-2 sm:px-3 sm:py-3">
                          Slower onset, swallowing issues for some
                        </td>
                        <td className="border px-2 py-2 sm:px-3 sm:py-3">
                          Hard to measure dosage
                        </td>
                        <td className="border px-2 py-2 sm:px-3 sm:py-3">
                          Potential lung risks; generally not recommended
                        </td>
                      </tr>

                      <tr className="hover:bg-gray-50">
                        <td className="border px-2 py-2 sm:px-3 sm:py-3 font-semibold">
                          Recommendation
                        </td>
                        <td className="border px-2 py-2 sm:px-3 sm:py-3">
                          Best for fast relief and flexible dosing
                        </td>
                        <td className="border px-2 py-2 sm:px-3 sm:py-3">
                          Ideal for discreet and casual use
                        </td>
                        <td className="border px-2 py-2 sm:px-3 sm:py-3">
                          Great for routine daily users
                        </td>
                        <td className="border px-2 py-2 sm:px-3 sm:py-3">
                          Perfect for localized relief like pain or skin care
                        </td>
                        <td className="border px-2 py-2 sm:px-3 sm:py-3">
                          Not recommended due to health risks
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Product Recommendations */}
            <section className="bg-white p-3 sm:p-4 md:p-6 rounded-xl shadow-md mb-6 sm:mb-8 md:mb-10 border border-gray-200">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-gray-800">
                Top Recommended CBD Products
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                Our handpicked recommendations for the best CBD products across
                various categories:
              </p>

              <div className="space-y-2 sm:space-y-3">
                <div className="text-sm sm:text-base">
                  <span className="font-semibold">
                    Best Full-Spectrum CBD Oil:
                  </span>{" "}
                  Aspen Green Bliss Organic Full Spectrum CBD Oil{" "}
                  <span className="text-blue-600 cursor-pointer hover:underline">
                    | Skip to review
                  </span>
                </div>
                <div className="text-sm sm:text-base">
                  <span className="font-semibold">
                    Best Full-Spectrum CBD Capsules:
                  </span>{" "}
                  NuLeaf Naturals Full Spectrum CBD Capsules{" "}
                  <span className="text-blue-600 cursor-pointer hover:underline">
                    | Skip to review
                  </span>
                </div>
                <div className="text-sm sm:text-base">
                  <span className="font-semibold">
                    Best CBD Gummies with THC:
                  </span>{" "}
                  Cornbread Hemp Full-Spectrum CBD Gummies{" "}
                  <span className="text-blue-600 cursor-pointer hover:underline">
                    | Skip to review
                  </span>
                </div>
                <div className="text-sm sm:text-base">
                  <span className="font-semibold">Best CBD Massage Oil:</span>{" "}
                  Lazarus Naturals CBD Body + Massage Oil{" "}
                  <span className="text-blue-600 cursor-pointer hover:underline">
                    | Skip to review
                  </span>
                </div>
                <div className="text-sm sm:text-base">
                  <span className="font-semibold">
                    Best Broad-Spectrum CBD Oil:
                  </span>{" "}
                  FOCL Daily Calm Broad Spectrum CBD Drops{" "}
                  <span className="text-blue-600 cursor-pointer hover:underline">
                    | Skip to review
                  </span>
                </div>
                <div className="text-sm sm:text-base">
                  <span className="font-semibold">
                    Best Organic CBD Gummies:
                  </span>{" "}
                  Joy Organics CBD Gummies{" "}
                  <span className="text-blue-600 cursor-pointer hover:underline">
                    | Skip to review
                  </span>
                </div>
                <div className="text-sm sm:text-base">
                  <span className="font-semibold">Best Isolate CBD Oil:</span>{" "}
                  Medterra Daily Relief CBD Oil{" "}
                  <span className="text-blue-600 cursor-pointer hover:underline">
                    | Skip to review
                  </span>
                </div>
              </div>
            </section>

            {/* How We Chose These Products */}
            <section className="bg-white p-3 sm:p-4 md:p-6 rounded-xl shadow-md mb-6 sm:mb-8 md:mb-10 border border-gray-200">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-gray-800">
                How We Chose These CBD Products
              </h2>

              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                We selected these CBD products based on factors that indicate
                safety, quality, and transparency. Our team regularly tests CBD
                products to evaluate aspects like taste, texture, and overall
                effectiveness.
              </p>

              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                As part of our vetting process, we carefully assess:
              </p>

              <div className="space-y-2 text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base">
                <div className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    The product's ingredients, formulation, and overall quality
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Verified third-party certifications</span>
                </div>
                <div className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    The company's reputation and ethical business practices
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Availability and accuracy of lab test results</span>
                </div>
                <div className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Truthfulness of marketing claims</span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-blue-600 cursor-pointer hover:underline">
                Read more about how we vet products and brands.
              </p>
            </section>

            {/* Shopping Guide */}
            <section className="bg-white p-3 sm:p-4 md:p-6 rounded-xl shadow-md mb-6 sm:mb-8 md:mb-10 border border-gray-200">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-gray-800">
                As You're Shopping for CBD
              </h2>

              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                CBD products are widely available online and in stores. However,
                not all products come from trustworthy brands or meet safety and
                quality standards. Here's how to shop smart when choosing CBD.
              </p>

              <div className="space-y-4 sm:space-y-5">
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
                    ✔️ Check the COA (Certificate of Analysis)
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-2">
                    A valid and recent Certificate of Analysis (COA) shows that
                    the product has been third-party tested by an independent
                    lab. You can typically find the COA through a QR code on the
                    product label or the brand's website.
                  </p>
                  <p className="text-sm sm:text-base text-gray-600">
                    Always verify that the CBD and THC amounts match what's
                    advertised. Also review the report for results on
                    contaminants like pesticides, heavy metals, and mold.
                  </p>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
                    ✔️ Check for FDA Warning Letters or Lawsuits
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    Do a quick online search to see if the brand has received
                    any FDA warning letters or is involved in legal issues.
                    Legitimate CBD companies also display an FDA disclaimer
                    stating that their products are not intended to diagnose,
                    treat, cure, or prevent any disease.
                  </p>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
                    ✔️ Review Brand Reputation and Customer Feedback
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    Check what customers are saying both on the brand's website
                    and on third-party review platforms. Look for reviews from
                    users who share similar needs or goals to help guide your
                    decision.
                  </p>
                </div>
              </div>
            </section>

            {/* Warning Box */}
            <section className="bg-amber-50 p-3 sm:p-4 md:p-6 rounded-xl shadow-md mb-6 sm:mb-8 md:mb-10 relative border border-amber-200">
              <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                Don't Get Fooled
              </h2>

              <p className="text-base text-gray-700 mb-3">
                Keep in mind that CBD can be purchased online directly from
                verified CBD companies. But it’s{" "}
                <span className="italic">not</span> for sale on Amazon.
              </p>

              <p className="text-base text-gray-700 mb-3">
                Products labeled as “CBD” on Amazon are often made from hempseed
                oil, not actual CBD oil.{" "}
                <span className="text-blue-600 underline cursor-pointer hover:text-blue-800">
                  Hempseed oil and CBD oil
                </span>{" "}
                are not the same thing.
              </p>

              <div className="absolute bottom-4 right-4">
                <span className="text-sm font-semibold text-gray-700">
                  healthline
                </span>
              </div>
            </section>
            <section className="bg-white p-6 rounded-xl shadow-md mb-10">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                CBD Safety and Potential Side Effects
              </h2>

              <p className="text-base text-gray-600 mb-4">
                CBD is generally well-tolerated by most people. However, like
                any supplement, it can cause side effects in some users, based
                on findings from research published in 2017.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Possible Side Effects:
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>Tiredness or drowsiness</li>
                <li>Digestive discomfort, including diarrhea</li>
                <li>Changes in appetite or body weight</li>
              </ul>

              <p className="text-base text-gray-600 mb-4">
                It’s strongly recommended to consult with your healthcare
                provider before adding CBD to your routine, especially if you're
                taking medications. CBD can potentially interact with certain
                prescription drugs, over-the-counter medicines, or dietary
                supplements.
              </p>

              <p className="text-base text-gray-600">
                If you're using CBD topically, perform a patch test on a small
                area of skin first to ensure you don’t experience irritation or
                an allergic reaction before broader application.
              </p>
            </section>
            <section className="bg-white p-6 rounded-xl shadow-md mb-10">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6">
                {/* FAQ 1 */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    What is the right dose of CBD?
                  </h3>
                  <p className="text-base text-gray-600">
                    CBD potency varies between products, so finding the right
                    dose is essential. While most manufacturers provide general
                    dosing guidelines, your individual factors like body weight,
                    metabolism, and overall health also play a role.
                  </p>
                  <p className="text-base text-gray-600 mt-2">
                    The safest approach is to start with a low dose and
                    gradually increase it while observing how your body
                    responds.
                  </p>
                </div>

                {/* FAQ 2 */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    What type of CBD is FDA approved?
                  </h3>
                  <p className="text-base text-gray-600">
                    Currently, the FDA has only approved one prescription CBD
                    product called{" "}
                    <span className="font-medium">Epidiolex</span>, designed to
                    treat rare forms of epilepsy.
                  </p>
                  <p className="text-base text-gray-600 mt-2">
                    Over-the-counter (OTC) CBD products are not FDA-approved or
                    regulated in the same way as medications or dietary
                    supplements. The FDA does issue warning letters to companies
                    that make false medical claims, so it’s important for
                    consumers to research brands carefully before purchasing.
                  </p>
                </div>

                {/* FAQ 3 */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    What form of CBD is most effective?
                  </h3>
                  <p className="text-base text-gray-600">
                    Effectiveness can depend on individual needs and
                    preferences. However, many users believe that{" "}
                    <span className="font-medium">full-spectrum CBD</span> is
                    more effective due to the{" "}
                    <span className="italic">entourage effect</span>. This
                    theory suggests that CBD works better when combined with
                    other compounds found in the cannabis plant, such as THC,
                    terpenes, and flavonoids.
                  </p>
                </div>

                {/* FAQ 4 */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    What are the potency levels of CBD?
                  </h3>
                  <p className="text-base text-gray-600">
                    Potency varies greatly between products — typically ranging
                    from{" "}
                    <span className="font-medium">
                      10 mg to 100 mg per serving
                    </span>{" "}
                    or more. What’s considered high potency depends on your
                    experience with CBD and your body’s response.
                  </p>
                  <p className="text-base text-gray-600 mt-2">
                    If you're new to CBD, starting with a lower potency product
                    is generally recommended. Consulting with a healthcare
                    professional can help determine the right dosage for you.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-white p-6 rounded-xl shadow-md mb-10">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                Takeaway
              </h2>

              <p className="text-base text-gray-600 mb-4">
                Many people report positive experiences with CBD products, but
                it’s essential to do thorough research before purchasing.
              </p>

              <p className="text-base text-gray-600 mb-4">
                Be clear about your reasons for using CBD. This will help you
                narrow down the best products and brands suited to your personal
                needs.
              </p>

              <div className="bg-amber-50 p-4 rounded-lg mb-4">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Note:</span> Healthline
                  maintains full editorial control over this content. The
                  potential benefits mentioned are not health claims made by the
                  manufacturers. This information is general and should not
                  replace advice from a qualified healthcare provider. Always
                  consult with your healthcare professional when making
                  treatment decisions.
                </p>
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Is CBD legal?
              </h3>

              <p className="text-base text-gray-600 mb-4">
                The 2018 Farm Bill removed hemp from the legal definition of
                marijuana in the Controlled Substances Act, making certain
                hemp-derived CBD products (containing less than 0.3% THC) legal
                at the federal level.
              </p>

              <p className="text-base text-gray-600 mb-4">
                However, CBD products with more than 0.3% THC are still
                federally illegal as they fall under the marijuana category.
                Some states have legalized CBD beyond federal restrictions, so
                always check local laws, especially when traveling.
              </p>

              <p className="text-base text-gray-600">
                Additionally, note that the FDA has not approved nonprescription
                CBD products. Some products may also be inaccurately labeled, so
                it’s crucial to buy from reputable sources.
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
