"use client";

import { useState } from "react";
import { User, Calendar } from "lucide-react";

export default function CbdArticle4() {
  const [email, setEmail] = useState("");
  const [activeTab, setActiveTab] = useState("Benefits");

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  const tabs = [
    "Factors",
    "Onset",
    "Re-dosing",
    "Duration",
    "First-time tips",
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
                How Much CBD Should I Take the First Time?
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
                Wondering how much CBD to take for the first time? This guide
                breaks down the factors that affect your ideal dose, helping you
                find the right amount to start with for maximum benefits and
                minimal side effects.
              </p>

              {/* Main Image */}
              {/* <div className="mb-4 sm:mb-6 md:mb-8">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEiJsozQMegyXb_TLFl6XofyMDn_B_DvDqNhR82OJF8HKH_Z7NIl97YdM&s"
                  alt="Woman doing yoga exercise in a bright room"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div> */}

              {/* Article Description */}
            </div>

            {/* Types of CBD Explained */}
            {/* Introduction */}
            <section>
              <h1 className="text-3xl font-bold mb-4">
                CBD Dosage Guide: How Much Should You Take?
              </h1>
              <p>
                Figuring out how much CBD, or cannabidiol, to take is more
                complex than it sounds. While cannabis has been around for a
                long time, CBD products are relatively new. As a result, there
                aren’t any evidence-based dosing guidelines yet.
              </p>
              <p>
                Most experts agree that if it’s your first time using CBD,
                starting with the lowest dose and gradually working your way up
                is the best way to go.
              </p>
              <p>
                Here’s a look at what you should know before trying CBD for the
                first time.
              </p>
            </section>

            {/* Factors Affecting Dosage */}
            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-3">
                It Depends on a Few Things
              </h2>
              <p>
                Your body weight and individual body chemistry affect how you
                tolerate CBD.
              </p>
              <p>
                Here are some other factors that play into how much CBD you
                should use:
              </p>
            </section>

            {/* How You Take It */}
            <section>
              <h3 className="text-xl font-semibold mt-6 mb-2">
                1. How You Take It
              </h3>
              <p>
                The form of CBD matters when it comes to dosage, absorption, and
                onset time. Common forms include:
              </p>
              <ul className="list-disc pl-6">
                <li>Oils and tinctures</li>
                <li>Gummies</li>
                <li>Capsules</li>
                <li>Creams and lotions</li>
              </ul>
              <p>
                Doses vary among forms. For instance, a standard dose in CBD
                gummies is around 5 mg per gummy, while tinctures and oils
                contain about 1 mg per drop.
              </p>
              <p>
                Capsules and gummies may take longer to kick in than an oil or
                tincture.
              </p>
            </section>

            {/* Purpose of Use */}
            <section>
              <h3 className="text-xl font-semibold mt-6 mb-2">
                2. What You’re Using It For
              </h3>
              <p>
                People use CBD to treat everything from nausea to arthritis
                pain. Your intended use influences how much to take.
              </p>
              <p>
                For example, the Arthritis Foundation recommends starting with a
                few milligrams of a sublingual form twice daily and increasing
                gradually if needed.
              </p>
            </section>

            {/* Other Medications */}
            <section>
              <h3 className="text-xl font-semibold mt-6 mb-2">
                3. Other Medications
              </h3>
              <p>
                If you’re on any other medications, consult your doctor before
                using CBD. While CBD is generally well tolerated, it may
                interact with how certain drugs are metabolized.
              </p>
            </section>

            {/* Onset Time */}
            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-3">
                When Should It Start Working?
              </h2>
              <p>It depends on the form you use:</p>
              <ul className="list-disc pl-6">
                <li>
                  <b>Gummies:</b> Up to 2 hours
                </li>
                <li>
                  <b>Oils/Tinctures:</b> 15 to 45 minutes
                </li>
                <li>
                  <b>Topicals:</b> 45 to 60 minutes
                </li>
              </ul>
              <p>
                Gummies pass through your digestive system, delaying absorption.
                Oils taken sublingually are absorbed directly into the
                bloodstream for faster effects.
              </p>
            </section>

            {/* Should You Take More */}
            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-3">
                Should I Take More?
              </h2>
              <p>
                Not so fast! Re-dosing too quickly can lead to unwanted effects.
                Although CBD is generally safe, taking too much can cause:
              </p>
              <ul className="list-disc pl-6">
                <li>Diarrhea</li>
                <li>Fatigue</li>
                <li>Appetite changes</li>
              </ul>
              <p>
                Start low and slow. The general rule is to maintain a low dose
                for about a week before increasing it.
              </p>
            </section>

            {/* How Long Does It Last */}
            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-3">
                How Long Will It Last?
              </h2>
              <p>
                CBD effects generally last 2 to 6 hours depending on the method,
                dose, and your personal tolerance.
              </p>
              <p>Track your experience by noting:</p>
              <ul className="list-disc pl-6">
                <li>The amount and form you took</li>
                <li>When the effects started</li>
                <li>How strong the effects were</li>
                <li>How long the effects lasted</li>
              </ul>
            </section>

            {/* Newbie Tips */}
            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-3">Newbie Tips</h2>
              <ul className="list-disc pl-6">
                <li>
                  <b>Shop smart:</b> Choose trusted, licensed brands to avoid
                  mislabeling and poor quality.
                </li>
                <li>
                  <b>Ask a professional:</b> Consult a healthcare professional
                  who understands your medical history.
                </li>
                <li>
                  <b>Use before bedtime:</b> CBD can cause drowsiness; use it
                  when you can relax.
                </li>
                <li>
                  <b>Avoid vaping:</b> Vaping is linked to lung infections;
                  avoid it until more research is available.
                </li>
              </ul>
            </section>

            {/* Takeaway */}
            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-3">The Takeaway</h2>
              <p>
                CBD is typically safe and well tolerated, but it isn’t a
                one-size-fits-all solution. Factors like your health condition,
                the form of CBD, and any medications you take all influence the
                right dosage.
              </p>
              <p>
                Always consult with a healthcare professional for guidance,
                especially if you’re using CBD for a specific condition.
              </p>
            </section>

            {/* Legality */}
            <section className="border-l-4 border-yellow-400 bg-yellow-50 p-4 mt-8">
              <h3 className="text-xl font-semibold mb-2">Is CBD Legal?</h3>
              <p>
                The 2018 Farm Bill removed hemp from the legal definition of
                marijuana, making hemp-derived CBD (with less than 0.3% THC)
                legal at the federal level. However, CBD with more than 0.3% THC
                is still federally illegal.
              </p>
              <p>
                Some states have legalized CBD, so check local laws, especially
                when traveling. Also note that the FDA has not approved
                nonprescription CBD products, and some may be inaccurately
                labeled.
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
                      Alex Nguyen, PharmD, RPh
                    </a>
                  </p>

                  <p className="text-sm text-gray-600 mb-1">
                    — Written by{" "}
                    <a
                      href="#"
                      className="text-blue-600 hover:underline font-medium"
                    >
                      Adrienne Santos-Longhurst
                    </a>
                  </p>

                  <p className="text-sm text-gray-600 flex items-center gap-1">
                    — <Calendar className="w-3 h-3" />
                    <span>Updated on April 9, 2025</span>
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
