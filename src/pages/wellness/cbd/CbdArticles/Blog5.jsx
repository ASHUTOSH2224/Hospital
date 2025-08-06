"use client";

import { useState } from "react";
import { User, Calendar } from "lucide-react";

export default function CbdArticle5() {
  const [email, setEmail] = useState("");
  const [activeTab, setActiveTab] = useState("Benefits");

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  const tabs = [];

  return (
    <div className="min-h-screen bg-white lg:mt-40 sm:mt-20 md:mt-20 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header Section */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight ">
                Best CBD Oils for Anxiety in 2025
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
              <div className="bg-amber-50 rounded-lg p-6 shadow-sm">
                <h2 className="text-xl font-bold mb-4">Key Takeaways</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-pink-500 mt-1">•</span>
                    <p className="text-gray-800">
                      CBD may help manage anxiety for some people, but research
                      is still ongoing.
                    </p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-500 mt-1">•</span>
                    <p className="text-gray-800">
                      Our tester reviewed five top-rated CBD oils to assess
                      their effects on stress and relaxation.
                    </p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-500 mt-1">•</span>
                    <p className="text-gray-800">
                      If anxiety affects you at night, look for CBD with calming
                      herbs. For daytime stress, consider a low-dose, portable
                      CBD option you can take as needed.
                    </p>
                  </li>
                </ul>
                <div className="flex justify-end mt-4">
                  <span className="text-sm font-semibold text-gray-500">
                    healthline
                  </span>
                </div>
              </div>

              {/* Main Image */}
              {/* <div className="mb-8">
                <img
                  src="/W.jpg"
                  alt="Woman doing yoga exercise in a bright room"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div> */}

              {/* Article Description */}
              <section className="bg-blue-50 rounded-lg p-6 shadow-sm">
                <h2 className="text-xl font-bold mb-4">
                  Quick Look at the Best CBD Oils for Anxiety
                </h2>

                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-medium">
                      Editor’s pick:
                    </span>
                    <a
                      href="#aspen-green"
                      className="text-gray-800 hover:underline"
                    >
                      Aspen Green Organic Full Spectrum CBD Oil, Extra Strength
                    </a>
                    <span className="text-blue-600 ml-1">|</span>
                    <a
                      href="#aspen-green"
                      className="text-blue-600 hover:underline"
                    >
                      Skip to review
                    </a>
                  </li>

                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-medium">
                      Best for beginners:
                    </span>
                    <a
                      href="#medterra"
                      className="text-gray-800 hover:underline"
                    >
                      Medterra Daily Relief CBD Oil
                    </a>
                    <span className="text-blue-600 ml-1">|</span>
                    <a
                      href="#medterra"
                      className="text-blue-600 hover:underline"
                    >
                      Skip to review
                    </a>
                  </li>

                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-medium">
                      Highest potency:
                    </span>
                    <a
                      href="#lazarus-naturals"
                      className="text-gray-800 hover:underline"
                    >
                      Lazarus Naturals Full Spectrum CBD Tincture
                    </a>
                    <span className="text-blue-600 ml-1">|</span>
                    <a
                      href="#lazarus-naturals"
                      className="text-blue-600 hover:underline"
                    >
                      Skip to review
                    </a>
                  </li>

                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-medium">
                      Best flavorless option:
                    </span>
                    <a
                      href="#cbdistillery"
                      className="text-gray-800 hover:underline"
                    >
                      CBDistillery ahhh distilled THC-Free CBD Oil, 1,000 mg
                    </a>
                    <span className="text-blue-600 ml-1">|</span>
                    <a
                      href="#cbdistillery"
                      className="text-blue-600 hover:underline"
                    >
                      Skip to review
                    </a>
                  </li>

                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-medium">
                      Best for night:
                    </span>
                    <a
                      href="#cornbread"
                      className="text-gray-800 hover:underline"
                    >
                      Cornbread Hemp Whole Flower CBD Oil
                    </a>
                    <span className="text-blue-600 ml-1">|</span>
                    <a
                      href="#cornbread"
                      className="text-blue-600 hover:underline"
                    >
                      Skip to review
                    </a>
                  </li>

                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-medium">
                      Best for morning:
                    </span>
                    <a href="#sunmed" className="text-gray-800 hover:underline">
                      Sunmed Broad Spectrum Rise CBG Citrus Tincture
                    </a>
                    <span className="text-blue-600 ml-1">|</span>
                    <a href="#sunmed" className="text-blue-600 hover:underline">
                      Skip to review
                    </a>
                  </li>
                </ul>
              </section>
            </div>

            <section className="max-w-3xl mx-auto bg-white rounded-lg p-6 shadow-sm">
              <div className="space-y-5">
                <p className="text-gray-700">
                  Many people report that cannabidiol (CBD) helps them feel
                  calmer and more in control of their anxiety. Over recent
                  years, studies have explored CBD’s potential to support
                  various wellness concerns, including anxiety, chronic pain,
                  and sleep issues.
                </p>

                <p className="text-gray-700">
                  With so many CBD products on the market, finding the right one
                  can feel overwhelming. Our team carefully researched, tested,
                  and vetted a range of CBD oils to help you confidently choose
                  products that may support anxiety management.
                </p>

                <p className="text-gray-700">
                  Continue reading to learn what the latest research says about
                  CBD for anxiety and explore our expert-approved picks for the
                  best CBD oils designed to help manage stress and support
                  overall balance.
                </p>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md">
                  <p className="text-gray-700 text-sm">
                    <span className="font-semibold">Disclaimer:</span> Some CBD
                    products featured in this guide were provided by
                    manufacturers for review purposes. However, all opinions are
                    entirely our own. No company influenced, reviewed, or
                    approved our recommendations or content.
                  </p>
                </div>
              </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <h2 className="text-2xl font-bold mb-6">
                Comparing the Best CBD Oils for Anxiety
              </h2>

              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200 rounded-lg">
                  <thead className="bg-blue-100">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                        Product
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                        Price
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                        Type of CBD
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                        Flavors Available
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-200">
                    {/* Row 1 */}
                    <tr>
                      <td className="px-4 py-3 text-blue-700 font-medium">
                        Aspen Green Calm Full Spectrum CBD Oil
                      </td>
                      <td className="px-4 py-3">$99.99</td>
                      <td className="px-4 py-3">Full-spectrum</td>
                      <td className="px-4 py-3">Mint, Citrus, Natural</td>
                    </tr>

                    {/* Row 2 */}
                    <tr>
                      <td className="px-4 py-3 text-blue-700 font-medium">
                        Medterra Calm & Relax CBD Oil
                      </td>
                      <td className="px-4 py-3">$39.99</td>
                      <td className="px-4 py-3">Isolate</td>
                      <td className="px-4 py-3">Unflavored</td>
                    </tr>

                    {/* Row 3 */}
                    <tr>
                      <td className="px-4 py-3 text-blue-700 font-medium">
                        Lazarus Naturals Classic CBD Tincture
                      </td>
                      <td className="px-4 py-3">$40</td>
                      <td className="px-4 py-3">Full-spectrum</td>
                      <td className="px-4 py-3">
                        Classic, Vanilla Mocha, Strawberry Lemonade
                      </td>
                    </tr>

                    {/* Row 4 */}
                    <tr>
                      <td className="px-4 py-3 text-blue-700 font-medium">
                        CBDistillery Pure THC-Free CBD Oil
                      </td>
                      <td className="px-4 py-3">$65</td>
                      <td className="px-4 py-3">Isolate</td>
                      <td className="px-4 py-3">Unflavored</td>
                    </tr>

                    {/* Row 5 */}
                    <tr>
                      <td className="px-4 py-3 text-blue-700 font-medium">
                        Cornbread Hemp Nighttime CBD Oil
                      </td>
                      <td className="px-4 py-3">$39.99</td>
                      <td className="px-4 py-3">Full-spectrum</td>
                      <td className="px-4 py-3">Unflavored</td>
                    </tr>

                    {/* Row 6 */}
                    <tr>
                      <td className="px-4 py-3 text-blue-700 font-medium">
                        Sunmed Rise CBG + CBD Citrus Tincture
                      </td>
                      <td className="px-4 py-3">$90</td>
                      <td className="px-4 py-3">Broad-spectrum</td>
                      <td className="px-4 py-3">Citrus</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="max-w-4xl mx-auto bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-4">
                How We Chose the Best CBD Oils for Anxiety
              </h2>

              <p className="text-gray-700 mb-4">
                We selected these CBD oils based on strict criteria that reflect
                product safety, transparency, and overall quality.
              </p>

              <p className="text-gray-700 mb-4">
                As part of our evaluation process, we carefully considered:
              </p>

              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>
                  The product’s formulation, ingredients, and manufacturing
                  quality
                </li>
                <li>Verified third-party testing and certifications</li>
                <li>
                  Brand reputation, customer feedback, and ethical business
                  practices
                </li>
                <li>Availability of lab test results for potency and purity</li>
                <li>Accuracy of marketing claims versus product performance</li>
              </ul>

              <p className="text-gray-700">
                Additionally, all products have been personally tested by our
                team. Our testers evaluated how each oil impacted their anxiety
                levels. The feedback shared is entirely based on their own
                individual experiences.
              </p>
            </section>

            <section className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Can CBD Effectively Treat Anxiety?
              </h2>

              <div className="space-y-6 text-gray-700">
                <p>
                  Research into CBD’s effectiveness for anxiety is still
                  ongoing. While large-scale clinical trials are needed to
                  determine optimal dosages for specific conditions, current
                  findings suggest promising results.
                </p>

                <p>
                  A{" "}
                  <span className="font-medium text-blue-700">2020 review</span>{" "}
                  of available studies indicates that CBD shows potential in
                  supporting those with anxiety-related disorders, including:
                </p>

                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Post-Traumatic Stress Disorder (PTSD)</li>
                  <li>Generalized Anxiety Disorder (GAD)</li>
                  <li>Social Anxiety Disorder (SAD)</li>
                </ul>

                <p>
                  A{" "}
                  <span className="font-medium text-blue-700">
                    2023 research review
                  </span>{" "}
                  also found that doses between{" "}
                  <span className="font-semibold">300–600 mg</span> of CBD may
                  reduce symptoms of social anxiety.
                </p>

                <p>
                  However, a small{" "}
                  <span className="font-medium text-blue-700">
                    2023 clinical trial
                  </span>{" "}
                  noted that while a{" "}
                  <span className="font-semibold">300 mg dose</span> didn’t
                  significantly reduce mental symptoms of anxiety, it did
                  improve some physical symptoms with consistent use.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-md">
                  <p className="font-medium mb-2 text-gray-800">
                    Potential ways CBD may support anxiety management:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>
                      <span className="font-semibold">Better sleep:</span> CBD
                      may help improve sleep quality, reduce insomnia, and
                      lessen anxiety-driven nightmares, especially when paired
                      with THC.
                    </li>
                    <li>
                      <span className="font-semibold">Improved focus:</span>{" "}
                      Preliminary studies suggest CBD might support cognitive
                      functions like focus, memory, and processing—though much
                      of this is based on animal studies.
                    </li>
                    <li>
                      <span className="font-semibold">
                        Reduced physical symptoms:
                      </span>{" "}
                      CBD may alleviate physical manifestations of anxiety such
                      as digestive discomfort and pain.
                    </li>
                  </ul>
                </div>

                <p>
                  It’s important to note that while the existing research is
                  promising, results are not yet conclusive. Ongoing studies
                  continue to explore how CBD affects anxiety and overall
                  well-being.
                </p>

                <p className="font-medium text-gray-800">
                  If you're considering using CBD for anxiety, consult with a
                  healthcare professional to determine if it’s appropriate for
                  your situation.
                </p>
              </div>
            </section>

            <section className="max-w-4xl mx-auto bg-amber-50 rounded-xl p-6 shadow-md">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
                Pros and Cons of Using CBD Oil for Anxiety
              </h2>

              <div className="flex flex-col md:flex-row gap-10">
                {/* Pros */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-green-600 text-2xl">✔️</span>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Pros
                    </h3>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Evidence suggests CBD may help manage anxiety.</li>
                    <li>
                      Generally easy to use and incorporate into routines.
                    </li>
                    <li>May help relieve physical pain related to anxiety.</li>
                  </ul>
                </div>

                {/* Cons */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-red-600 text-2xl">❌</span>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Cons
                    </h3>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>
                      No CBD products are FDA-approved to specifically treat
                      anxiety.
                    </li>
                    <li>
                      Some CBD products contain THC, which may{" "}
                      <a
                        href="#"
                        className="text-blue-600 underline hover:text-blue-800"
                      >
                        increase anxiety
                      </a>{" "}
                      in some people.
                    </li>
                    <li>
                      Lack of FDA regulation means dosage and quality vary
                      between products.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-8 space-y-10">
              {/* Section 1: How to Use */}
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  How to Use CBD for Anxiety
                </h2>

                <p className="text-gray-700 mb-4">
                  Studies show CBD dosages ranging widely from{" "}
                  <span className="font-semibold">0.5 to 800 mg per day</span>.
                  Because CBD isn’t FDA-regulated, it’s important to follow the
                  dosage recommendations provided by the product manufacturer,
                  usually between{" "}
                  <span className="font-semibold">20 to 50 mg daily</span>.
                </p>

                <p className="text-gray-700 mb-4">
                  If you're new to CBD, start with a lower dose and gradually
                  increase if needed. Avoid exceeding the recommended dosage
                  unless advised by a healthcare professional.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-md mb-4">
                  <p className="text-gray-700">
                    <span className="font-semibold">Tip:</span> Most CBD oils
                    suggest placing the oil under your tongue, holding it for{" "}
                    <span className="font-medium">
                      20 seconds to a few minutes
                    </span>{" "}
                    before swallowing. Avoid touching the dropper directly to
                    your mouth or hands to maintain cleanliness.
                  </p>
                </div>

                <p className="text-gray-700">
                  The onset time varies. Some may feel calming effects, like
                  drowsiness, within{" "}
                  <span className="font-semibold">30 to 90 minutes</span>.
                  Long-term effects, like reduced anxiety, may take several
                  weeks of consistent use.
                </p>
              </div>

              {/* Section 2: How to Choose */}
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  How to Choose a CBD Oil for Anxiety
                </h2>

                <p className="text-gray-700 mb-4">
                  Choosing the right CBD product can feel overwhelming. Here are
                  some key factors to consider to ensure safety and
                  effectiveness:
                </p>

                <ul className="list-disc list-inside text-gray-700 space-y-3">
                  <li>
                    <span className="font-semibold">Third-party testing:</span>{" "}
                    Look for products tested by accredited labs. Check for
                    publicly available Certificates of Analysis (COAs) for
                    purity and potency.
                  </li>
                  <li>
                    <span className="font-semibold">Verify the label:</span>{" "}
                    Compare the COA with the product label to ensure the CBD and
                    THC levels match. Confirm there are no harmful contaminants
                    like heavy metals, molds, or pesticides.
                  </li>
                  <li>
                    <span className="font-semibold">Personal needs:</span> If
                    anxiety impacts your sleep, consider products with calming
                    ingredients. For daytime use, choose a low-potency option
                    that's easy to take on the go.
                  </li>
                  <li>
                    <span className="font-semibold">CBD type:</span>{" "}
                    Full-spectrum includes all plant compounds (including THC)
                    for the entourage effect. Broad-spectrum has all compounds
                    except THC. Isolate contains pure CBD without any additional
                    compounds.
                  </li>
                  <li>
                    <span className="font-semibold">Taste preference:</span> If
                    you dislike the natural hemp taste, opt for a flavored
                    option to make consumption more enjoyable.
                  </li>
                </ul>
              </div>
            </section>

            <section className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
                Why Trust Us
              </h2>

              <div className="bg-teal-600 rounded-t-md px-4 py-2">
                <h3 className="text-white font-semibold text-center">
                  WHY TRUST OUR REVIEW
                </h3>
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-gray-800">500+</p>
                  <p className="text-pink-600 border-t-2 border-pink-600 w-10 mx-auto mt-2"></p>
                  <p className="text-sm text-gray-600 mt-2">
                    CBD oils & tinctures evaluated
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-gray-800">90+</p>
                  <p className="text-pink-600 border-t-2 border-pink-600 w-10 mx-auto mt-2"></p>
                  <p className="text-sm text-gray-600 mt-2">
                    Brands thoroughly reviewed
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-gray-800">30</p>
                  <p className="text-pink-600 border-t-2 border-pink-600 w-10 mx-auto mt-2"></p>
                  <p className="text-sm text-gray-600 mt-2">
                    Products personally tested
                  </p>
                </div>
              </div>

              <hr className="border-gray-300 mb-6" />

              {/* Evaluation Description */}
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  How We Evaluate CBD Oils
                </h4>
                <p className="text-gray-700 mb-4">
                  Our research team thoroughly examines thousands of CBD
                  products. We evaluate lab results, check for contaminants,
                  verify ingredient quality, and assess brand reputation before
                  recommending any product.
                </p>
                <p className="text-gray-700">
                  Only products meeting our high standards for safety, potency,
                  and transparency are featured. Some are personally tested by
                  our team to ensure quality and effectiveness.{" "}
                  <a
                    href="#"
                    className="text-blue-600 underline hover:text-blue-800"
                  >
                    Learn more about how we test CBD products.
                  </a>
                </p>
              </div>
            </section>

            {/* FAQs Section */}
            <section className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Safety and Side Effects
              </h2>

              <p className="text-gray-700 mb-4">
                Before trying CBD drops for anxiety, it’s important to consult
                with a healthcare professional or a knowledgeable cannabis
                clinician — especially if you’re taking any prescription
                medications, over-the-counter drugs, vitamins, or supplements.
                CBD may interact with certain medications.
              </p>

              <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-md mb-4">
                <p className="text-red-700 font-semibold">
                  ⚠️ A 2019 study suggested that CBD could cause liver toxicity
                  or injury, but this was based on extremely high doses in mice.
                  Experts note that this isn’t a concern at typical human doses.
                </p>
              </div>

              <p className="text-gray-700 mb-4">
                Additionally, use caution when consuming CBD with high-fat
                meals. A <span className="font-medium">2020 study</span> found
                that fats can increase CBD blood concentrations, which may
                elevate the risk of side effects.
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md">
                <p className="text-yellow-800 font-semibold">
                  🚫 Do not use CBD if you are pregnant or breastfeeding.
                </p>
              </div>
            </section>

            <section className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Frequently Asked Questions About CBD for Anxiety
              </h2>

              {/* FAQ Items */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Which CBD oil is best for anxiety?
                  </h3>
                  <p className="text-gray-700">
                    The best CBD oil depends on your personal needs. Focus on
                    brands that offer transparency, have publicly available
                    Certificates of Analysis (COAs), clear ingredient labels,
                    and precise dosing information. Quality and safety are key
                    factors.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    How should I use CBD oil?
                  </h3>
                  <p className="text-gray-700 mb-2">
                    Use the provided dropper to measure your dose and place the
                    oil under your tongue. Hold it there for 20-30 seconds
                    before swallowing.
                  </p>
                  <p className="text-gray-700">
                    For example, a 30mL bottle containing 1,200mg of CBD
                    typically offers 40mg per 1mL dropper. If you’re new, start
                    with a smaller amount to see how it affects you.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Can you get ‘high’ from CBD oil?
                  </h3>
                  <p className="text-gray-700">
                    No, CBD itself is non-psychoactive and doesn’t cause a
                    “high.” The compound responsible for that feeling is THC.
                    While some full-spectrum CBD products contain trace amounts
                    of THC, it’s usually not enough to cause impairment. If you
                    want to completely avoid THC, choose a CBD isolate or
                    broad-spectrum product.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Is CBD oil safe?
                  </h3>
                  <p className="text-gray-700">
                    Generally, CBD is well tolerated. Some potential side
                    effects include fatigue, changes in appetite or weight, and
                    diarrhea. Always consult a healthcare provider before
                    starting.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    What level of CBD is good for anxiety?
                  </h3>
                  <p className="text-gray-700 mb-2">
                    There’s no universal dose for anxiety. In one 2018 study,
                    participants taking <strong>300mg</strong> of CBD 90 minutes
                    before a public speaking event reported significantly
                    reduced anxiety. However, more research is needed.
                  </p>
                  <p className="text-gray-700">
                    It’s best to start small and gradually adjust based on your
                    needs and how your body reacts.
                  </p>
                </div>
              </div>

              {/* Divider */}
              <hr className="my-8 border-gray-300" />

              {/* Takeaway Section */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Takeaway
                </h2>
                <p className="text-gray-700 mb-4">
                  Research into CBD’s effects on anxiety is ongoing. If you’re
                  considering trying CBD oil to help manage stress or anxiety,
                  consult with a healthcare professional — especially if you’re
                  taking other medications or supplements.
                </p>
                <p className="text-gray-700 mb-4">
                  Our vetted list aims to help you choose a reliable product.
                  Remember, this article is for informational purposes only and
                  not a substitute for professional medical advice.
                </p>
              </div>

              {/* Legal Section */}
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Is CBD Legal?
                </h3>
                <p className="text-gray-700">
                  The <strong>2018 Farm Bill</strong> made hemp-derived CBD
                  products with less than 0.3% THC legal at the federal level in
                  the U.S. However, CBD products containing more than 0.3% THC
                  are still considered marijuana and are federally illegal.
                  State laws may vary, so check your local regulations,
                  especially when traveling. Note that the FDA has not approved
                  most non-prescription CBD products.
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
                    <a
                      href="#"
                      className="text-blue-600 hover:underline font-medium"
                    >
                      Alex Nguyen, PharmD, RPh
                    </a>
                  </p>

                  <p className="text-sm text-gray-600 mb-1">
                    — Written by{" "}
                    <a
                      href="#"
                      className="text-blue-600 hover:underline font-medium"
                    >
                      Sian Ferguson
                    </a>
                  </p>

                  <p className="text-sm text-gray-600 flex items-center gap-1">
                    — <Calendar className="w-3 h-3" />
                    <a href="#" className="text-blue-600 hover:underline">
                      Updated on May 19, 2025
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
