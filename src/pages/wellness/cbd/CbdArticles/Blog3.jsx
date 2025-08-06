"use client";

import { useState } from "react";
import { User, Calendar } from "lucide-react";

export default function CbdArticle3() {
  const [email, setEmail] = useState("");
  const [activeTab, setActiveTab] = useState("Benefits");

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  const tabs = [
    "Pain relief",
    "Mental health",
    "Cancer symptom relief",
    "Neuroprotection",
    "Heart health",
    "More",
    "Considerations",
    "FAQ",
    "Bottom line",
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
                6 Health Benefits of CBD Oil — and a Look at Side Effects
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
                Cannabidiol oil, or CBD oil derived from cannabis, is a popular
                natural remedy for many ailments. CBD oil benefits include pain
                relief and relaxation without any mind-altering effects.
              </p>

              {/* Main Image */}
              <div className="mb-4 sm:mb-6 md:mb-8">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEiJsozQMegyXb_TLFl6XofyMDn_B_DvDqNhR82OJF8HKH_Z7NIl97YdM&s"
                  alt="Woman doing yoga exercise in a bright room"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>

              {/* Article Description */}
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-md">
                <h2 className="text-lg font-semibold text-blue-800 mb-2">
                  What is CBD Oil?
                </h2>
                <p className="text-gray-700 mb-3">
                  CBD oil is made by extracting cannabidiol (CBD) from the
                  cannabis plant and blending it with a carrier oil like coconut
                  oil or hemp seed oil. CBD is one of over 100 naturally
                  occurring compounds, known as cannabinoids, found in the{" "}
                  <em>Cannabis sativa</em> plant.
                </p>
                <p className="text-gray-700 mb-3">
                  Unlike tetrahydrocannabinol (THC) — the primary psychoactive
                  compound responsible for the "high" sensation — CBD is
                  non-psychoactive and does not produce intoxicating effects.
                </p>
                <p className="text-gray-700 mb-3">
                  Today, CBD is widely available in various forms, including
                  dietary supplements, bath soaks, beverages, and food products.
                </p>
                <p className="text-gray-700">
                  This article, in collaboration with{" "}
                  <span className="font-medium">Medterra</span>, explores six
                  research-backed health benefits of CBD.
                </p>
              </div>
            </div>

            {/* Types of CBD Explained */}
            {/* Section 1: May Relieve Pain */}
            <section className="bg-white border-l-4 border-green-500 p-5 rounded-md">
              <h2 className="text-2xl font-bold text-green-700 mb-3">
                1. May Relieve Pain
              </h2>
              <p className="text-gray-700 mb-3">
                CBD has been linked to pain relief since ancient times, dating
                back to 2900 B.C. It works by interacting with the body's{" "}
                <strong>endocannabinoid system (ECS)</strong>, which regulates
                functions like pain, sleep, and immune response.
              </p>
              <p className="text-gray-700 mb-3">
                The body produces natural compounds called endocannabinoids,
                which bind to cannabinoid receptors to help manage pain. Studies
                suggest that CBD can influence this system by reducing
                inflammation, modulating receptor activity, and interacting with
                neurotransmitters.
              </p>
              <p className="text-gray-700 mb-3">
                Research also points to CBD’s potential for helping with chronic
                conditions like{" "}
                <strong>
                  fibromyalgia, arthritis, and multiple rheumatic diseases
                </strong>
                .
              </p>
              <p className="font-medium text-gray-800">
                <strong>Summary:</strong> CBD may help reduce chronic pain, but
                further research is needed to fully understand its role in pain
                management.
              </p>
            </section>

            {/* Section 2: Could Reduce Mental Health Symptoms */}
            <section className="bg-white border-l-4 border-blue-500 p-5 rounded-md">
              <h2 className="text-2xl font-bold text-blue-700 mb-3">
                2. Could Reduce Mental Health Symptoms
              </h2>
              <p className="text-gray-700 mb-3">
                CBD has shown potential as a natural option for managing mental
                health conditions like{" "}
                <strong>anxiety, depression, PTSD, and psychosis</strong>. It
                may help calm the nervous system by interacting with serotonin
                receptors in the brain.
              </p>
              <p className="text-gray-700 mb-3">
                Several small studies suggest that CBD can reduce symptoms of
                stress, improve mood, and even help decrease the severity of
                nightmares in PTSD patients.
              </p>
              <p className="text-gray-700 mb-3">
                While promising, more research is needed before CBD can be
                widely recommended as a treatment for mental health disorders.
              </p>
              <p className="font-medium text-gray-800">
                <strong>Summary:</strong> CBD may offer relief for anxiety,
                depression, and PTSD, but additional clinical studies are
                required.
              </p>
            </section>

            {/* Section 3: May Help with Cancer-Related Symptoms */}
            <section className="bg-white border-l-4 border-purple-500 p-5 rounded-md">
              <h2 className="text-2xl font-bold text-purple-700 mb-3">
                3. May Help with Cancer-Related Symptoms
              </h2>
              <p className="text-gray-700 mb-3">
                CBD may assist in managing certain{" "}
                <strong>cancer-related symptoms</strong> such as nausea,
                vomiting, and pain, especially those caused by chemotherapy.
              </p>
              <p className="text-gray-700 mb-3">
                While early research is encouraging, findings are mixed, and
                more robust human trials are necessary to confirm the benefits.
              </p>
              <p className="font-medium text-gray-800">
                <strong>Summary:</strong> CBD might help alleviate some
                cancer-related side effects, but further research is needed to
                validate its effectiveness.
              </p>
            </section>

            {/* Section 4: May Have Neuroprotective Properties */}
            <section className="bg-white border-l-4 border-yellow-500 p-5 rounded-md">
              <h2 className="text-2xl font-bold text-yellow-700 mb-3">
                4. May Have Neuroprotective Properties
              </h2>
              <p className="text-gray-700 mb-3">
                CBD has shown promise for supporting neurological health. The
                FDA-approved CBD medication <strong>Epidiolex</strong> is used
                to treat seizures related to{" "}
                <strong>
                  Dravet syndrome, Lennox-Gastaut syndrome, and tuberous
                  sclerosis complex
                </strong>
                .
              </p>
              <p className="text-gray-700 mb-3">
                Research also indicates that CBD may help manage symptoms
                related to{" "}
                <strong>
                  multiple sclerosis (MS), Parkinson’s disease, Huntington’s
                  disease, autism spectrum disorder (ASD)
                </strong>
                , and <strong>motor disorders like cerebral palsy</strong>.
              </p>
              <p className="font-medium text-gray-800">
                <strong>Summary:</strong> CBD may support neurological health,
                particularly in seizure disorders and neurodegenerative
                conditions.
              </p>
            </section>

            {/* Section 5: May Support Heart Health */}
            <section className="bg-white border-l-4 border-red-500 p-5 rounded-md">
              <h2 className="text-2xl font-bold text-red-700 mb-3">
                5. May Support Heart Health
              </h2>
              <p className="text-gray-700 mb-3">
                High blood pressure is a major risk factor for conditions like{" "}
                <strong>heart attacks, strokes, and metabolic disorders</strong>
                . Studies suggest that CBD may support heart health by helping
                to <strong>lower blood pressure</strong> and improve
                circulation.
              </p>
              <p className="text-gray-700 mb-3">
                A 2020 study found that taking 600mg of CBD for one week reduced
                blood pressure in healthy men, although the effect diminished
                after 7 days.
              </p>
              <p className="text-gray-700 mb-3">
                CBD’s ability to relax blood vessels and reduce stress-induced
                cardiovascular strain may benefit heart health, but more
                long-term research is needed.
              </p>
              <p className="font-medium text-gray-800">
                <strong>Summary:</strong> CBD may help lower blood pressure and
                improve artery function, but more human studies are necessary.
              </p>
            </section>

            {/* Section 6: Other Potential Benefits */}
            <section className="bg-white border-l-4 border-indigo-500 p-5 rounded-md">
              <h2 className="text-2xl font-bold text-indigo-700 mb-3">
                6. Other Potential Benefits
              </h2>
              <p className="text-gray-700 mb-3">
                Beyond the conditions listed above, CBD has been studied for
                several other potential benefits:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-3">
                <li>
                  <strong>Substance misuse treatment:</strong> May help reduce
                  anxiety and cravings for individuals recovering from drug
                  addiction.
                </li>
                <li>
                  <strong>Glioblastoma:</strong> Some research suggests a
                  combination of CBD and THC may help extend the lifespan of
                  people with aggressive brain cancers.
                </li>
                <li>
                  <strong>Sleep support:</strong> CBD may assist people
                  suffering from insomnia or other sleep disorders.
                </li>
              </ul>
              <p className="font-medium text-gray-800">
                <strong>Summary:</strong> CBD could aid in sleep improvement,
                addiction recovery, and possibly extend life in certain cancers,
                but more extensive human research is needed.
              </p>
            </section>

            <section className="max-w-4xl mx-auto p-6 bg-white border-l-4 border-cyan-500 rounded-md">
              <h2 className="text-2xl font-bold text-cyan-700 mb-5">
                Frequently Asked Questions
              </h2>

              {/* Question 1 */}
              <div className="mb-5">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Is CBD good for joint pain?
                </h3>
                <p className="text-gray-700">
                  According to preclinical studies, CBD may help reduce pain and
                  inflammation associated with arthritis and joint conditions.
                  However, more human-based clinical trials are needed to
                  confirm its effectiveness specifically for joint pain.
                </p>
              </div>

              {/* Question 2 */}
              <div className="mb-5">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  What is the best CBD oil?
                </h3>
                <p className="text-gray-700">
                  Finding the best CBD oil can be challenging as it depends on
                  quality, potency, third-party lab testing, and ingredients.
                  You can check Healthline’s list of the{" "}
                  <span className="font-medium text-cyan-700">
                    11 best CBD oils of 2023
                  </span>
                  , which are thoroughly vetted based on safety, quality, and
                  transparency.
                </p>
              </div>

              {/* Question 3 */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Is CBD legal?
                </h3>
                <p className="text-gray-700 mb-2">
                  <strong>Hemp-derived CBD products</strong> (containing less
                  than <strong>0.3% THC</strong>) are federally legal in the
                  United States but may be restricted under some state laws.
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Cannabis-derived CBD products</strong> are federally
                  illegal but legal in certain states.
                </p>
                <p className="text-gray-700">
                  ⚠️ Always check your state’s laws and those in any place you
                  plan to travel. Additionally, remember that{" "}
                  <strong>
                    nonprescription CBD products are not FDA-approved
                  </strong>{" "}
                  and may be mislabeled or inaccurately represented.
                </p>
              </div>
            </section>

            <section className="max-w-4xl mx-auto p-6 bg-gradient-to-r from-blue-50 via-white to-blue-50 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">
                The Bottom Line
              </h2>
              <p className="text-gray-800 mb-3">
                CBD oil may help relieve symptoms related to{" "}
                <span className="font-semibold">
                  anxiety, neurological disorders, heart health, and certain
                  types of pain
                </span>
                , among other conditions.
              </p>
              <p className="text-gray-800 mb-3">
                However, while early research is promising, more studies are
                needed to fully understand its effects and potential risks. Some
                research is still ongoing.
              </p>
              <p className="text-gray-800">
                Since the full range of CBD’s uses is not yet completely
                understood, it’s wise to consult with a{" "}
                <span className="font-semibold text-blue-700">
                  qualified healthcare professional
                </span>{" "}
                before starting any CBD products.
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
                      Jillian Kubala, MS, RD
                    </a>
                  </p>

                  <p className="text-sm text-gray-600 flex items-center gap-1">
                    — <Calendar className="w-3 h-3" />
                    <span>Updated on June 30, 2023</span>
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
