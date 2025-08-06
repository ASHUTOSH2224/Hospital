"use client";

import { useState } from "react";
import { User, Calendar } from "lucide-react";

export default function CbdArticle1() {
  const [email, setEmail] = useState("");
  const [activeTab, setActiveTab] = useState("Benefits");

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  const tabs = [
    "What it is",
    "How it works",
    "Benefits",
    "Side effects",
    "Methods",
    "Dosage",
    "FAQ",
    "Takeaway",
  ];

  return (
    <div className="min-h-screen bg-white lg:mt-40 sm:mt-20 md:mt-20 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header Section */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight ">
                Cannabidiol (CBD): What We Know and What We Don’t
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
                CBD, present in cannabis along with THC, doesn’t cause a high.
                It may help manage certain health conditions, improve mood, and
                reduce pain. Side effects and drug interactions are possible. Go
                slow and start low when it comes to dosage.
              </p>

              {/* Main Image */}
              {/* <div className="mb-8">
                <img
                  src="/W.jpg"
                  alt="Woman doing yoga exercise in a bright room"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div> */}

              {/* Article Description */}
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
                <p className="text-gray-700">
                  <span className="text-blue-600 font-medium"></span> By now,
                  you may’ve heard someone mention CBD, especially if you live
                  with a chronic condition like pain or anxiety.
                </p>
              </div>

              <p className="text-gray-700 mb-8">
                In fact, according to a 2023 Healthline survey, 25% of adults in
                the United States have tried or are interested in trying CBD
                products.
              </p>
              <p className="text-gray-700 mb-8">
                If you’re curious but unsure where to start, this guide can help
                answer your questions and clarify some common misconceptions
                surrounding CBD and its uses.
              </p>
            </div>

            {/* How is it beneficial Section */}
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
              <p className="text-gray-700">
                <span className="text-blue-600 font-medium">
                  Curious About CBD?
                </span>{" "}
                CBD is gaining massive attention for its potential health
                benefits. Whether you deal with chronic pain, anxiety, or other
                wellness concerns, CBD might have something to offer.
              </p>
            </div>

            <p className="text-gray-700 mb-8">
              According to a 2023 Healthline survey, 25% of adults in the United
              States have tried or are interested in trying CBD products.
            </p>
            <p className="text-gray-700 mb-8">
              If you’re curious but unsure where to start, this guide will
              answer key questions and clarify common misconceptions about CBD
              and its uses.
            </p>

            {/* What is CBD Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                What is CBD?
              </h2>
              <p className="text-gray-700 mb-4">
                CBD (Cannabidiol) is one of the many active compounds found in
                the cannabis plant. Unlike THC (Tetrahydrocannabinol), CBD is
                non-psychoactive, meaning it doesn’t cause a “high.”
              </p>
              <p className="text-gray-700 mb-4">
                CBD derived from cannabis may be more effective than hemp-based
                CBD, but industrial hemp-derived CBD still offers many health
                benefits.
              </p>
              <p className="text-gray-700 mb-4">
                If your state hasn’t legalized medical cannabis, you can still
                access industrial hemp-derived CBD products.
              </p>
              <p className="text-gray-700">
                Tip: Always check your state’s regulations before purchasing or
                using CBD.
              </p>
            </section>

            {/* How Does CBD Work Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                How Does CBD Work?
              </h2>
              <p className="text-gray-700 mb-4">
                While research is still ongoing, CBD is believed to influence
                the endocannabinoid system (ECS), which regulates sleep, mood,
                appetite, and pain.
              </p>
              <p className="text-gray-700 mb-4">
                It interacts with cannabinoid receptors CB1 and CB2, and may
                also affect serotonin and opioid receptors, helping balance mood
                and reduce inflammation.
              </p>
              <p className="text-gray-700">
                CBD may also impact processes like hormone secretion, muscle
                contraction, and cell growth by influencing peroxisome
                proliferator-activated receptors (PPARs).
              </p>
            </section>

            {/* Potential Benefits Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Potential Benefits of CBD
              </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-4 ml-4">
                <li>May help manage chronic pain and inflammation.</li>
                <li>Supports anxiety and stress relief.</li>
                <li>May assist with sleep disorders like insomnia.</li>
                <li>
                  Shows promise in treating epilepsy and seizure disorders.
                </li>
                <li>
                  Could help alleviate cancer treatment side effects like
                  nausea.
                </li>
                <li>
                  Emerging research suggests potential anticancer properties.
                </li>
              </ul>
              <p className="text-gray-700 mt-4">
                Note: While promising, more research is needed to confirm many
                of these benefits.
              </p>
            </section>

            {/* Side Effects Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Possible Side Effects & Risks
              </h2>
              <p className="text-gray-700 mb-4">
                CBD is generally well-tolerated, but some users may experience
                mild side effects like:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Dry mouth</li>
                <li>Fatigue</li>
                <li>Drowsiness</li>
                <li>Diarrhea</li>
                <li>Reduced appetite</li>
              </ul>
              <p className="text-gray-700 mt-4">
                CBD can interact with medications, especially blood thinners.
                Always consult a healthcare provider before starting CBD.
              </p>
              <p className="text-gray-700">
                Choose lab-tested products with Certificates of Analysis (COA)
                to ensure purity and correct dosing.
              </p>
            </section>

            {/* Types of CBD Products */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Types of CBD Products
              </h2>

              {/* Topical */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  1. Topical & Transdermal
                </h3>
                <p className="text-gray-700 mb-2">
                  Applied directly to the skin. Common products include:
                </p>
                <ul className="list-disc list-inside text-gray-700 ml-4">
                  <li>Lotions</li>
                  <li>Balms</li>
                  <li>Ointments</li>
                  <li>Patches (Transdermal)</li>
                </ul>
                <p className="text-gray-700 mt-2">
                  Topicals provide localized relief, while transdermal patches
                  can deliver CBD into the bloodstream.
                </p>
              </div>

              {/* Sublingual */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  2. Sublingual
                </h3>
                <p className="text-gray-700">
                  Oils and tinctures placed under the tongue for fast absorption
                  through capillaries.
                </p>
              </div>

              {/* Oral */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  3. Oral
                </h3>
                <p className="text-gray-700 mb-2">
                  Ingested through the digestive system. Includes:
                </p>
                <ul className="list-disc list-inside text-gray-700 ml-4">
                  <li>Gummies</li>
                  <li>Capsules</li>
                  <li>Chocolates</li>
                  <li>Drinks (like tea, coffee, seltzers)</li>
                </ul>
                <p className="text-gray-700 mt-2">
                  Effects take longer to kick in but last longer.
                </p>
              </div>

              {/* Inhalation */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  4. Inhalation
                </h3>
                <p className="text-gray-700 mb-2">
                  Smoking CBD-dominant strains or vaping CBD oil offers the
                  fastest effects.
                </p>
                <p className="text-gray-700">
                  Note: Inhalation carries lung health risks and isn’t
                  recommended for everyone.
                </p>
              </div>
            </section>

            {/* Dosage Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                How Much CBD Should You Take?
              </h2>
              <p className="text-gray-700 mb-4">
                A 2020 review suggests that doses up to 3,500 mg per day are
                generally well-tolerated, but everyone responds differently.
              </p>
              <p className="text-gray-700 mb-4">
                Start low and go slow. Follow the product’s recommended dosage
                unless advised otherwise by your doctor.
              </p>
              <p className="text-gray-700">
                People with liver conditions or on medications should consult
                their healthcare provider for safer dosing.
              </p>
            </section>

            {/* FAQs Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                CBD FAQs
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Is CBD the same as cannabis?
                  </h3>
                  <p className="text-gray-700">
                    No. CBD and THC are both cannabinoids from cannabis but CBD
                    doesn’t cause a high, unlike THC.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Is CBD considered a drug?
                  </h3>
                  <p className="text-gray-700">
                    CBD is not considered a controlled substance but is a
                    component of the FDA-approved drug Epidiolex, used to treat
                    seizure disorders.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Is CBD bad for you?
                  </h3>
                  <p className="text-gray-700">
                    Generally safe, but risks come from poor-quality,
                    unregulated products. Always buy from reputable, lab-tested
                    sources.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    What’s the difference between hemp CBD and cannabis CBD?
                  </h3>
                  <p className="text-gray-700">
                    Hemp-derived CBD has less than 0.3% THC, making it legal
                    federally in many places, while cannabis-derived CBD may
                    have higher THC levels.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    How is CBD different from CBN?
                  </h3>
                  <p className="text-gray-700">
                    CBN (Cannabinol) forms when THC ages and degrades. Like CBD,
                    it’s non-psychoactive but has slightly different effects,
                    like stronger sedative properties.
                  </p>
                </div>
              </div>
            </section>

            {/* Legal Info Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Is CBD Legal?
              </h2>
              <p className="text-gray-700">
                The 2018 Farm Bill legalized hemp-derived CBD with less than
                0.3% THC at the federal level. However, state laws vary widely.
                Always check local laws, especially when traveling.
              </p>
              <p className="text-gray-700">
                The FDA has not approved most nonprescription CBD products, and
                some may be mislabeled or inaccurate in CBD/THC content.
              </p>
            </section>

            {/* Takeaway */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                The Takeaway
              </h2>
              <p className="text-gray-700">
                CBD has the potential to offer relief from pain, anxiety, and
                other health concerns without the psychoactive effects of THC.
                However, it’s crucial to choose high-quality products and
                consult your doctor, especially if you're on medications. Stay
                informed, start low, and monitor how your body responds.
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
                     Alyssa Peckham, PharmD,
                    </a>
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    — Written by{" "}
                    <a
                      href="#"
                      className="text-blue-600 hover:underline font-medium"
                    >
                      Kristi Pahr and Alina Sharon and Tess Catlett 
                    </a>
                  </p>
                  <p className="text-sm text-gray-600 flex items-center gap-1">
                    — <Calendar className="w-3 h-3" />
                    <a href="#" className="text-blue-600 hover:underline">
                    Updated on July 27, 2024
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
