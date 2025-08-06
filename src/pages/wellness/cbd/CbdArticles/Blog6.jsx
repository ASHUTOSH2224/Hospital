"use client";

import { useState } from "react";
import { User, Calendar } from "lucide-react";

export default function CbdArticle6() {
  const [email, setEmail] = useState("");
  const [activeTab, setActiveTab] = useState("Benefits");

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  const tabs = [
    "Chronic pain relief",
    "Arthritis pain relief",
    "Cancer treatment relief",
    "Migraine pain relief",
    "Side effects",

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
                Using CBD Oil for Pain Management: Does It Work?
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

              {/* Main Image */}
              {/* <div className="mb-8">
                <img
                  src="/W.jpg"
                  alt="Woman doing yoga exercise in a bright room"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div> */}

              {/* Article Description */}
              <section className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  CBD for Pain Management: A Detailed Overview
                </h2>

                {/* Intro */}
                <p className="text-gray-700 mb-4">
                  Many people suffering from chronic pain are exploring{" "}
                  <strong>CBD-based products</strong>, especially CBD oil, as
                  part of their pain management routine. However, it’s important
                  to note that these products are not regulated by government
                  agencies like the FDA, so their safety, purity, and dosage may
                  vary.
                </p>

                {/* What is CBD */}
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  What Is CBD?
                </h3>
                <p className="text-gray-700 mb-4">
                  <strong>Cannabidiol (CBD)</strong> is a natural compound found
                  in cannabis plants, including both <strong>hemp</strong> and{" "}
                  <strong>marijuana</strong>. Unlike THC, CBD is{" "}
                  <strong>non-psychoactive</strong> — meaning it doesn’t cause
                  the “high” feeling. CBD interacts with the body’s
                  endocannabinoid system (ECS), which plays a role in regulating
                  pain, mood, and inflammation.
                </p>

                {/* Benefits */}
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  How CBD May Help With Pain
                </h3>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  <li>Reduces chronic pain and discomfort</li>
                  <li>May lower inflammation in conditions like arthritis</li>
                  <li>Could help alleviate nerve pain or migraines</li>
                  <li>
                    Potential alternative to opioids with fewer side effects
                  </li>
                </ul>

                {/* Research */}
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  What Does Research Say?
                </h3>
                <p className="text-gray-700 mb-4">
                  Research is promising but still in early stages. Some studies
                  highlight CBD’s anti-inflammatory properties, ability to help
                  with neuropathic pain, and potential as an alternative to
                  opioids. However,{" "}
                  <strong>more large-scale human trials are needed</strong> to
                  confirm its full effectiveness for pain relief.
                </p>

                {/* FDA Info */}
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md mb-4">
                  <h4 className="font-semibold text-gray-800 mb-1">
                    Is CBD FDA Approved?
                  </h4>
                  <p className="text-gray-700">
                    The <strong>only FDA-approved CBD product</strong> is{" "}
                    <strong>Epidiolex</strong>, used to treat epilepsy.
                    Nonprescription CBD products are{" "}
                    <strong>not FDA-approved</strong> and are not regulated for
                    purity or dosage.
                  </p>
                </div>

                {/* Considerations */}
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Should You Consider CBD for Pain?
                </h3>
                <p className="text-gray-700 mb-4">
                  If you’re thinking about trying CBD for pain, consult a
                  healthcare professional first, especially if you take
                  medications. Look for products with{" "}
                  <strong>third-party lab testing (COA)</strong> to ensure
                  purity and accurate labeling. Start with a low dose and adjust
                  as needed.
                </p>

                {/* Bottom Line */}
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-md">
                  <h4 className="font-semibold text-gray-800 mb-1">
                    The Bottom Line
                  </h4>
                  <p className="text-gray-700">
                    CBD may offer a natural option for managing chronic pain and
                    inflammation. While research is still ongoing, many users
                    report meaningful relief. Be sure to choose high-quality
                    products and consult with a medical professional before
                    starting any new treatment.
                  </p>
                </div>
              </section>
            </div>

            <section className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                CBD for Chronic Pain Relief
              </h2>

              {/* ECS Explanation */}
              <p className="text-gray-700 mb-4">
                Everyone has a natural cell-signaling network known as the{" "}
                <strong>Endocannabinoid System (ECS)</strong>. This system plays
                a crucial role in regulating various functions in the body,
                including pain, immune response, and mood.
              </p>

              <p className="text-gray-700 mb-4">
                Some researchers believe that{" "}
                <strong>CBD interacts with key components of the ECS</strong> —
                specifically the <strong>endocannabinoid receptors</strong>{" "}
                located in the brain and immune system.
              </p>

              {/* How CBD Works */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                How Does It Work?
              </h3>
              <p className="text-gray-700 mb-4">
                <strong>Receptors</strong> are tiny proteins attached to cells
                that receive signals from chemical messengers and help your
                cells respond appropriately.
              </p>
              <p className="text-gray-700 mb-4">
                This cellular response can trigger{" "}
                <strong>anti-inflammatory</strong> and{" "}
                <strong>pain-relieving effects</strong>. As a result, CBD oil
                and other CBD products may help manage chronic pain conditions
                such as <strong>chronic back pain</strong> or{" "}
                <strong>joint discomfort</strong>.
              </p>

              {/* Research Review */}
              <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-md mb-6">
                <h4 className="font-semibold text-gray-800 mb-2">
                  What Research Says
                </h4>
                <p className="text-gray-700 mb-2">
                  A comprehensive <strong>2018 review</strong> evaluated how
                  effective CBD is for relieving chronic pain. The review
                  analyzed studies conducted between 1975 and March 2018,
                  covering a wide range of pain-related conditions, including:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-2">
                  <li>
                    <strong>Cancer-related pain</strong>
                  </li>
                  <li>
                    <strong>Neuropathic pain</strong> (nerve pain)
                  </li>
                  <li>
                    <strong>Fibromyalgia</strong>
                  </li>
                </ul>
                <p className="text-gray-700">
                  The researchers concluded that CBD was generally effective in{" "}
                  <strong>overall pain management</strong> and was{" "}
                  <strong>
                    well tolerated without significant side effects
                  </strong>
                  .
                </p>
              </div>

              {/* Conclusion */}
              <p className="text-gray-700">
                While further studies are still needed, current evidence
                suggests that CBD may offer a valuable, natural approach to
                managing chronic pain without the risk of dependency associated
                with traditional pain medications.
              </p>
            </section>

            <section className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                CBD for Arthritis Pain Relief
              </h2>
              <p className="text-gray-700 mb-4">
                A <strong>2016 animal study</strong> explored the effects of CBD
                on rats with arthritis. Researchers applied CBD gel for four
                consecutive days in varying doses: 0.6 mg, 3.1 mg, 6.2 mg, and
                62.3 mg per day.
              </p>
              <p className="text-gray-700 mb-4">
                The study showed{" "}
                <strong>
                  significant reduction in inflammation and joint pain
                </strong>{" "}
                in the rats that received 6.2 mg or higher doses. Interestingly,
                increasing the dose beyond 6.2 mg didn’t lead to further pain
                relief.
              </p>
              <p className="text-gray-700 mb-4">
                These results suggest that CBD’s{" "}
                <strong>anti-inflammatory and pain-relieving properties</strong>{" "}
                could benefit individuals suffering from arthritis. However,{" "}
                <strong>human studies are still needed</strong> to confirm these
                findings.
              </p>
            </section>

            <section className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                CBD for Cancer Treatment Relief
              </h2>
              <p className="text-gray-700 mb-4">
                While some <strong>animal studies</strong> show that CBD might
                contribute to reducing cancerous tumors, most human research has
                focused on CBD’s role in{" "}
                <strong>managing pain and treatment side effects</strong>.
              </p>
              <p className="text-gray-700 mb-4">
                The <strong>National Cancer Institute (NCI)</strong> recognizes
                CBD’s potential in helping relieve symptoms related to cancer
                treatments, such as:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>Pain</li>
                <li>Vomiting</li>
                <li>Loss of appetite</li>
              </ul>
              <p className="text-gray-700 mb-4">
                A <strong>2010 study</strong> found that patients using an oral
                spray combining CBD and THC experienced{" "}
                <strong>better pain relief than opioids alone</strong>. This
                finding was supported by a <strong>2013 follow-up study</strong>
                .
              </p>
              <p className="text-gray-700">
                Despite promising outcomes,{" "}
                <strong>further research is required</strong> to fully
                understand CBD’s role in cancer-related symptom management.
              </p>
            </section>

            <section className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                CBD for Migraine Pain Relief
              </h2>
              <p className="text-gray-700 mb-4">
                Studies on <strong>CBD for migraines</strong> are limited, and
                most have examined its use in combination with THC rather than
                as a standalone treatment.
              </p>
              <p className="text-gray-700 mb-4">
                In a <strong>2017 two-phase study</strong>, participants who
                took a blend of 9% CBD (low THC) and 19% THC reported a{" "}
                <strong>55% reduction in acute pain</strong> when using doses of
                200 mg.
              </p>
              <p className="text-gray-700 mb-4">
                Phase II showed a{" "}
                <strong>40.4% reduction in migraine frequency</strong> when
                using the CBD-THC combination. Interestingly, it was slightly
                more effective than amitriptyline (a common migraine medication)
                which reduced attacks by 40.1%.
              </p>
              <p className="text-gray-700">
                Participants with cluster headaches only experienced relief if
                they had a <strong>childhood history of migraines</strong>,
                indicating potential but specific effectiveness.
              </p>
            </section>

            {/* Side Effects Section */}
            <section className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                CBD Side Effects
              </h2>
              <p className="text-gray-700 mb-4">
                While CBD is generally well tolerated, it may cause side effects
                in some individuals, including:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>Fatigue</li>
                <li>Diarrhea</li>
                <li>Changes in appetite</li>
                <li>Changes in weight</li>
              </ul>
              <p className="text-gray-700 mb-4">
                CBD may also interact with certain medications, especially those
                marked with a <strong>“grapefruit warning”</strong>. Both
                grapefruit and CBD interfere with enzymes that are essential for
                drug metabolism.
              </p>
              <p className="text-gray-700">
                A mouse study indicated that{" "}
                <strong>high doses of CBD could cause liver toxicity</strong>,
                but the doses used were exceptionally large and not
                representative of typical human consumption.
              </p>
            </section>

            <section className="max-w-5xl mx-auto bg-blue-50 rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Takeaway
              </h2>
              <p className="text-gray-700 mb-4">
                While conclusive evidence is still evolving, many studies
                suggest that <strong>CBD offers significant promise</strong> in
                pain management, including chronic conditions like arthritis,
                migraines, and cancer-related pain.
              </p>
              <p className="text-gray-700 mb-4">
                CBD provides a natural alternative for pain relief{" "}
                <strong>without the risks of intoxication or dependency</strong>{" "}
                seen in some pharmaceutical drugs.
              </p>
              <p className="text-gray-700">
                If you are considering CBD for chronic pain,{" "}
                <strong>consult your healthcare provider</strong>
                to determine the right dosage and ensure it’s safe alongside
                your current medications.
              </p>
            </section>

            <section className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Is CBD Legal?
              </h2>
              <p className="text-gray-700 mb-4">
                Under the <strong>2018 Farm Bill</strong>, hemp-derived CBD
                products with <strong>less than 0.3% THC</strong> are federally
                legal in the United States. However, CBD derived from marijuana,
                or products with higher THC concentrations, are still illegal
                federally but legal in some states.
              </p>
              <p className="text-gray-700 mb-4">
                Always check <strong>local state laws</strong> before purchasing
                or traveling with CBD. Remember,
                <strong>
                  nonprescription CBD products are not FDA-approved
                </strong>
                , which means product quality, labeling accuracy, and dosage can
                vary greatly.
              </p>
              <p className="text-gray-700">
                Make sure to purchase from reputable brands that provide{" "}
                <strong>third-party lab testing (COA)</strong> to ensure safety
                and accuracy.
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
                      Alan Carter, Pharm.D.
                    </a>
                  </p>

                  <p className="text-sm text-gray-600 mb-1">
                    — Written by{" "}
                    <a
                      href="#"
                      className="text-blue-600 hover:underline font-medium"
                    >
                      Kristeen Cherney
                    </a>
                  </p>

                  <p className="text-sm text-gray-600 flex items-center gap-1">
                    — <Calendar className="w-3 h-3" />
                    <a href="#" className="text-blue-600 hover:underline">
                      Updated on February 1, 2023
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
