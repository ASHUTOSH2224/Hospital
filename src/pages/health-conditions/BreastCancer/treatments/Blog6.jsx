import { useEffect, useState } from "react"
import { User, Calendar, Shield, Heart, Clock, AlertCircle, Pill, HeartPulse, Activity } from "lucide-react"

export default function BreastReconstructionGuide() {
  const [email, setEmail] = useState("")
  const [activeTab, setActiveTab] = useState("Overview")

  const handleEmailSubmit = (e) => {
    e.preventDefault()
    console.log("Email submitted:", email)
    setEmail("")
  }

    useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0)
  }, [])
  // Define the tabs for navigation

  const tabs = ["Overview", "Types", "Timing", "Recovery", "Risks"]

  return (
    <div className="min-h-screen bg-white pt-20 md:pt-32">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header Section */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Breast Reconstruction Surgery: What Are the Options?
              </h1>

              {/* Navigation Tabs */}
              <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-200">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                      activeTab === tab
                        ? "border-pink-500 text-pink-600"
                        : "border-transparent text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Intro Text */}
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                If you need surgery due to breast cancer, you may be considering reconstruction. We'll explore the different options available, what to expect during recovery, and how to make the best decision for your body and lifestyle.
              </p>

              {/* Main Image */}
              <div className="mb-8">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=400&fit=crop"
                  alt="Woman consulting with doctor about breast reconstruction options"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>

              {/* Article Description */}
              <div className="bg-pink-50 border-l-4 border-pink-400 p-4 mb-8">
                <p className="text-gray-700">
                  <span className="text-pink-600 font-medium">Key Point:</span> Breast reconstruction is a highly personal decision that can be performed at the time of mastectomy (immediate) or months/years later (delayed). There are implant-based and autologous (using your own tissue) options available.
                </p>
              </div>

              <p className="text-gray-700 mb-8">
                Breast reconstruction can help restore shape, symmetry, and confidence after mastectomy or lumpectomy. This comprehensive guide covers everything from surgical techniques to recovery timelines and potential risks.
              </p>
            </div>

            {/* Overview Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Understanding Breast Reconstruction</h2>

              <p className="text-gray-700 mb-4">
                Breast reconstruction is a surgical procedure that recreates a breast mound after mastectomy (complete breast removal) or lumpectomy (partial breast removal). The goal is to create a natural-looking breast contour that matches your remaining breast as closely as possible.
              </p>

              <p className="text-gray-700 mb-4">
                According to the <a href="#" className="text-blue-600 hover:underline">American Society of Plastic Surgeons</a>, about 137,000 breast reconstruction procedures were performed in 2022 in the United States alone.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Shield className="text-blue-600" /> Important Considerations
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Reconstruction doesn't restore normal breast sensation</li>
                  <li>Multiple procedures may be needed for optimal results</li>
                  <li>Results are permanent but may change with weight fluctuations and aging</li>
                  <li>Insurance companies are required to cover reconstruction after mastectomy</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Who Is a Candidate?</h3>
              <p className="text-gray-700 mb-4">
                Most women who undergo mastectomy are candidates for reconstruction, but factors that might affect your options include:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Shield className="text-pink-600 w-5 h-5" /> Medical Factors
                  </h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Overall health</li>
                    <li>Cancer treatment plan (radiation, chemotherapy)</li>
                    <li>Body type and available donor tissue</li>
                    <li>Smoking status (smokers may have higher complication risks)</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Heart className="text-pink-600 w-5 h-5" /> Personal Factors
                  </h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Desired breast size</li>
                    <li>Willingness to undergo multiple surgeries</li>
                    <li>Activity level and lifestyle</li>
                    <li>Personal preferences about foreign materials in the body</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Types of Reconstruction Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Types of Breast Reconstruction</h2>
              
              <p className="text-gray-700 mb-6">
                There are two main categories of breast reconstruction: implant-based and autologous (flap) reconstruction. Each has several variations that your plastic surgeon can discuss with you.
              </p>

              {/* Implant-Based Reconstruction */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Implant-Based Reconstruction</h3>
                <p className="text-gray-700 mb-4">
                  This approach uses silicone or saline implants to recreate the breast mound. It's the most common type of reconstruction in the U.S. and typically involves two stages:
                </p>
                
                <div className="bg-pink-50 p-6 rounded-lg mb-4">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Stages of Implant Reconstruction</h4>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-pink-700">Stage 1: Tissue Expander Placement</p>
                      <p className="text-gray-700">A temporary expander is placed under the chest muscle and gradually filled with saline to stretch the skin.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-pink-700">Stage 2: Permanent Implant Placement</p>
                      <p className="text-gray-700">After several weeks/months, the expander is replaced with a permanent implant.</p>
                    </div>
                  </div>
                </div>

                <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6">Implant Options</h4>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="py-3 px-4 border-b text-left">Type</th>
                        <th className="py-3 px-4 border-b text-left">Description</th>
                        <th className="py-3 px-4 border-b text-left">Pros</th>
                        <th className="py-3 px-4 border-b text-left">Cons</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-3 px-4 border-b font-medium">Silicone</td>
                        <td className="py-3 px-4 border-b">Filled with cohesive silicone gel</td>
                        <td className="py-3 px-4 border-b">More natural look and feel</td>
                        <td className="py-3 px-4 border-b">Requires MRI monitoring</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="py-3 px-4 border-b font-medium">Saline</td>
                        <td className="py-3 px-4 border-b">Filled with sterile salt water</td>
                        <td className="py-3 px-4 border-b">Adjustable size, safer if ruptured</td>
                        <td className="py-3 px-4 border-b">Can feel less natural</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 border-b font-medium">Gummy Bear</td>
                        <td className="py-3 px-4 border-b">Form-stable silicone implants</td>
                        <td className="py-3 px-4 border-b">Maintain shape even if shell breaks</td>
                        <td className="py-3 px-4 border-b">Firmer feel, more expensive</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="text-yellow-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">
                      <span className="font-bold">Note:</span> Implants are not lifetime devices. Most women will need additional surgeries to replace or remove them at some point, typically every 10-15 years.
                    </p>
                  </div>
                </div>
              </div>

              {/* Autologous Tissue Reconstruction */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Autologous (Flap) Reconstruction</h3>
                <p className="text-gray-700 mb-4">
                  This technique uses your own tissue (skin, fat, and sometimes muscle) from another part of your body to create a new breast mound. The tissue is either left connected to its original blood supply (pedicled flap) or reattached to blood vessels in the chest (free flap).
                </p>

                <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6">Common Flap Procedures</h4>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h5 className="font-bold text-lg text-gray-900 mb-2">DIEP Flap</h5>
                    <p className="text-gray-700 mb-2">Uses abdominal skin and fat without muscle</p>
                    <p className="text-sm text-gray-600"><span className="font-semibold">Recovery:</span> 6-8 weeks</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h5 className="font-bold text-lg text-gray-900 mb-2">TRAM Flap</h5>
                    <p className="text-gray-700 mb-2">Uses abdominal skin, fat, and muscle</p>
                    <p className="text-sm text-gray-600"><span className="font-semibold">Recovery:</span> 8-10 weeks</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h5 className="font-bold text-lg text-gray-900 mb-2">Latissimus Dorsi Flap</h5>
                    <p className="text-gray-700 mb-2">Uses back muscle and skin</p>
                    <p className="text-sm text-gray-600"><span className="font-semibold">Recovery:</span> 4-6 weeks</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h5 className="font-bold text-lg text-gray-900 mb-2">PAP Flap</h5>
                    <p className="text-gray-700 mb-2">Uses inner thigh tissue</p>
                    <p className="text-sm text-gray-600"><span className="font-semibold">Recovery:</span> 6-8 weeks</p>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Comparing Flap Procedures</h4>
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="py-3 px-4 border-b text-left">Flap Type</th>
                          <th className="py-3 px-4 border-b text-left">Tissue Source</th>
                          <th className="py-3 px-4 border-b text-left">Best For</th>
                          <th className="py-3 px-4 border-b text-left">Considerations</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="py-3 px-4 border-b font-medium">DIEP</td>
                          <td className="py-3 px-4 border-b">Abdomen (no muscle)</td>
                          <td className="py-3 px-4 border-b">Women with excess abdominal tissue</td>
                          <td className="py-3 px-4 border-b">Longest surgery, preserves abdominal strength</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="py-3 px-4 border-b font-medium">TRAM</td>
                          <td className="py-3 px-4 border-b">Abdomen (with muscle)</td>
                          <td className="py-3 px-4 border-b">Women who want natural results</td>
                          <td className="py-3 px-4 border-b">May weaken abdominal wall</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 border-b font-medium">Latissimus</td>
                          <td className="py-3 px-4 border-b">Back</td>
                          <td className="py-3 px-4 border-b">Thinner women or those with radiation</td>
                          <td className="py-3 px-4 border-b">Often combined with implant</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="py-3 px-4 border-b font-medium">PAP</td>
                          <td className="py-3 px-4 border-b">Inner thigh</td>
                          <td className="py-3 px-4 border-b">Smaller breast sizes</td>
                          <td className="py-3 px-4 border-b">Less common, smaller volume</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Nipple Reconstruction */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Nipple and Areola Reconstruction</h3>
                <p className="text-gray-700 mb-4">
                  This is typically the final stage of breast reconstruction, performed after the new breast mound has healed and settled into its final position (usually 3-6 months after initial reconstruction).
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Surgical Options</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                      <li><span className="font-semibold">Local tissue flaps:</span> Using nearby skin to create projection</li>
                      <li><span className="font-semibold">Skin grafts:</span> Taking skin from another area</li>
                      <li><span className="font-semibold">Tattooing:</span> Medical tattooing to create areola color</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Non-Surgical Options</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                      <li><span className="font-semibold">3D tattooing:</span> Hyper-realistic nipple tattoo</li>
                      <li><span className="font-semibold">Prosthetic nipples:</span> Custom silicone prosthetics</li>
                      <li><span className="font-semibold">Going without:</span> Some women choose not to reconstruct the nipple</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Timing of Reconstruction Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Timing of Reconstruction</h2>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Clock className="text-pink-600" /> Immediate Reconstruction
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Performed during the same surgery as the mastectomy. The breast surgeon removes the breast tissue, and the plastic surgeon begins reconstruction immediately.
                  </p>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Advantages</h4>
                  <ul className="list-disc list-inside text-gray-700 mb-4 ml-4 space-y-1">
                    <li>Wake up with a breast mound</li>
                    <li>May have better cosmetic results</li>
                    <li>One less surgery</li>
                    <li>Psychological benefits</li>
                  </ul>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Considerations</h4>
                  <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                    <li>Not suitable if radiation is needed</li>
                    <li>Longer initial surgery</li>
                    <li>Higher complication risk if complex reconstruction</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Clock className="text-pink-600" /> Delayed Reconstruction
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Performed months or years after mastectomy. This may be recommended if you need radiation therapy or want time to consider your options.
                  </p>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Advantages</h4>
                  <ul className="list-disc list-inside text-gray-700 mb-4 ml-4 space-y-1">
                    <li>Allows completion of cancer treatments first</li>
                    <li>More time to research options</li>
                    <li>May have lower complication rates</li>
                  </ul>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Considerations</h4>
                  <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                    <li>Requires living without a breast for a period</li>
                    <li>May require tissue expander first</li>
                    <li>Skin may be tighter, limiting options</li>
                  </ul>
                </div>
              </div>

              <div className="bg-pink-50 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Delayed-Immediate Reconstruction</h3>
                <p className="text-gray-700 mb-4">
                  A two-stage approach where a tissue expander is placed at the time of mastectomy to preserve the breast skin envelope, then replaced with permanent reconstruction after cancer treatments are complete.
                </p>
                <p className="text-gray-700">
                  This option is often recommended for women who may need radiation but want to preserve their skin for better cosmetic results later.
                </p>
              </div>
            </section>

            {/* Recovery Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Recovery Process</h2>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Hospital Stay</h3>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="border border-gray-200 rounded-lg p-4">
                  <p className="text-sm text-gray-500 mb-1">Implant Reconstruction</p>
                  <p className="font-bold">1-2 days</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <p className="text-sm text-gray-500 mb-1">Flap Reconstruction</p>
                  <p className="font-bold">3-5 days</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <p className="text-sm text-gray-500 mb-1">DIEP Flap</p>
                  <p className="font-bold">4-6 days</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Recovery Timeline</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="py-3 px-4 border-b text-left">Time After Surgery</th>
                      <th className="py-3 px-4 border-b text-left">What to Expect</th>
                      <th className="py-3 px-4 border-b text-left">Activity Level</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-3 px-4 border-b font-medium">First Week</td>
                      <td className="py-3 px-4 border-b">Pain, swelling, drains in place, limited arm movement</td>
                      <td className="py-3 px-4 border-b">Resting, short walks only</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-3 px-4 border-b font-medium">2-4 Weeks</td>
                      <td className="py-3 px-4 border-b">Drains removed, swelling decreases, incisions heal</td>
                      <td className="py-3 px-4 border-b">Light activities, no lifting</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 border-b font-medium">4-6 Weeks</td>
                      <td className="py-3 px-4 border-b">Most discomfort resolves, scars begin to fade</td>
                      <td className="py-3 px-4 border-b">Return to most daily activities</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-3 px-4 border-b font-medium">6-8 Weeks</td>
                      <td className="py-3 px-4 border-b">Final results become apparent</td>
                      <td className="py-3 px-4 border-b">Return to exercise and work</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 border-b font-medium">3-6 Months</td>
                      <td className="py-3 px-4 border-b">Swelling fully resolves, scars mature</td>
                      <td className="py-3 px-4 border-b">Full activity, nipple reconstruction possible</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Recovery Tips</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Physical Recovery</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Sleep propped up to reduce swelling</li>
                    <li>Wear surgical bras as directed</li>
                    <li>Empty and measure drain output regularly</li>
                    <li>Gently massage scars once healed</li>
                    <li>Attend all follow-up appointments</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Emotional Recovery</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Join a support group</li>
                    <li>Consider counseling if needed</li>
                    <li>Be patient with your healing process</li>
                    <li>Celebrate small milestones</li>
                    <li>Communicate openly with loved ones</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Risks and Complications Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Potential Risks and Complications</h2>

              <p className="text-gray-700 mb-6">
                As with any major surgery, breast reconstruction carries risks. Your specific risks will depend on your overall health, the type of reconstruction, and whether you've had or will need radiation therapy.
              </p>

              <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">General Surgical Risks</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Bleeding or hematoma</li>
                  <li>Infection</li>
                  <li>Poor wound healing</li>
                  <li>Anesthesia risks</li>
                  <li>Blood clots</li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-pink-50 p-4 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Implant-Specific Risks</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li><span className="font-semibold">Capsular contracture:</span> Scar tissue tightens around implant</li>
                    <li><span className="font-semibold">Implant rupture or leakage:</span> Requires replacement</li>
                    <li><span className="font-semibold">Implant malposition:</span> Shifting or rotation</li>
                    <li><span className="font-semibold">Animation deformity:</span> Implant moves with chest muscle</li>
                    <li><span className="font-semibold">BIA-ALCL:</span> Rare lymphoma associated with textured implants</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Flap-Specific Risks</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li><span className="font-semibold">Flap failure:</span> Loss of blood supply to transferred tissue</li>
                    <li><span className="font-semibold">Fat necrosis:</span> Death of fat cells in the flap</li>
                    <li><span className="font-semibold">Donor site complications:</span> Weakness, hernia, or contour changes</li>
                    <li><span className="font-semibold">Partial flap loss:</span> Requires revision surgery</li>
                    <li><span className="font-semibold">Asymmetry:</span> Changes over time may require adjustments</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <div className="flex items-start gap-2">
                  <AlertCircle className="text-yellow-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    <span className="font-bold">Important:</span> Radiation therapy can significantly increase the risk of complications with any type of reconstruction, particularly implants. If you know you'll need radiation, discuss this thoroughly with your surgical team.
                  </p>
                </div>
              </div>
            </section>

            {/* Final Thoughts Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Making Your Decision</h2>
              <p className="text-gray-700 mb-4">
                Choosing whether and how to reconstruct your breasts is a deeply personal decision with no "right" answer. What's perfect for one woman may not be right for another. Consider:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Questions to Ask Your Surgeon</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Which options are best for my body type and health status?</li>
                    <li>How many of these procedures have you performed?</li>
                    <li>What are your complication rates?</li>
                    <li>Can I see before/after photos of similar patients?</li>
                    <li>What will my scars look like?</li>
                    <li>How will reconstruction affect my cancer surveillance?</li>
                  </ul>
                </div>
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Factors to Consider</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Your cancer treatment plan</li>
                    <li>Your overall health and lifestyle</li>
                    <li>How many surgeries you're willing to have</li>
                    <li>Your desired breast size and shape</li>
                    <li>Your tolerance for risk and complications</li>
                    <li>Your emotional needs and body image goals</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Remember</h3>
                <p className="text-gray-700 mb-2">
                  There's no deadline for reconstruction. Even if you initially choose not to reconstruct, you can change your mind years later. Some women choose to never reconstruct and are perfectly happy with that decision.
                </p>
                <p className="text-gray-700">
                  Whatever you decide, make sure it feels right for <span className="font-semibold">you</span> - not your partner, family, or anyone else.
                </p>
              </div>
            </section>

            {/* Resources Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Additional Resources</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Support Organizations</h3>
                  <ul className="space-y-3">
                    <li>
                      <a href="#" className="text-blue-600 hover:underline font-medium">American Cancer Society</a>
                      <p className="text-gray-600 text-sm">Resources and support groups</p>
                    </li>
                    <li>
                      <a href="#" className="text-blue-600 hover:underline font-medium">FORCE</a>
                      <p className="text-gray-600 text-sm">Facing hereditary breast and ovarian cancer</p>
                    </li>
                    <li>
                      <a href="#" className="text-blue-600 hover:underline font-medium">Breastcancer.org</a>
                      <p className="text-gray-600 text-sm">Discussion forums and expert Q&A</p>
                    </li>
                    <li>
                      <a href="#" className="text-blue-600 hover:underline font-medium">The Breasties</a>
                      <p className="text-gray-600 text-sm">Community for young women affected by breast cancer</p>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Financial Assistance</h3>
                  <ul className="space-y-3">
                    <li>
                      <a href="#" className="text-blue-600 hover:underline font-medium">Patient Advocate Foundation</a>
                      <p className="text-gray-600 text-sm">Help with insurance appeals</p>
                    </li>
                    <li>
                      <a href="#" className="text-blue-600 hover:underline font-medium">CancerCare</a>
                      <p className="text-gray-600 text-sm">Financial assistance programs</p>
                    </li>
                    <li>
                      <a href="#" className="text-blue-600 hover:underline font-medium">The Pink Fund</a>
                      <p className="text-gray-600 text-sm">Help with non-medical expenses</p>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Final Takeaway */}
            <section className="mb-12 bg-pink-50 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The Takeaway</h2>
              <p className="text-gray-700 mb-4">
                Breast reconstruction after mastectomy or lumpectomy is a highly individualized journey with many options available. Whether you choose implants, your own tissue, or no reconstruction at all, the decision should align with your personal values, lifestyle, and medical needs.
              </p>
              <p className="text-gray-700 mb-4">
                Modern techniques can create natural-looking results, but reconstruction is a process that requires patience and realistic expectations. Working with an experienced plastic surgeon who specializes in breast reconstruction will help ensure you get the best possible outcome.
              </p>
              <p className="text-gray-700">
                Remember that reconstruction is about restoring your sense of self after cancer treatment. There's no "right" way to approach it - only what feels right for you.
              </p>
            </section>
          </div>
          <div className="lg:col-span-1">
            {/* Author Info */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-gray-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">
                    <a href="#" className="text-pink-600 hover:underline">
                      Medically reviewed
                    </a>{" "}
                    by{" "}
                    <a href="#" className="text-pink-600 hover:underline font-medium">
                      Dr. Sarah Johnson, MD, Oncologist
                    </a>
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    — Written by{" "}
                    <a href="#" className="text-pink-600 hover:underline font-medium">
                      Medical Review Board
                    </a>
                  </p>
                  <p className="text-sm text-gray-600 flex items-center gap-1">
                    — <Calendar className="w-3 h-3" />
                    <a href="#" className="text-pink-600 hover:underline">
                      Updated on June 15, 2025
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Resource Links */}
            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Helpful Resources</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-blue-600 hover:underline flex items-center gap-2">
                    <Pill className="w-4 h-4" /> National Cancer Institute Breast Cancer Information
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline flex items-center gap-2">
                    <HeartPulse className="w-4 h-4" /> American Cancer Society Support Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline flex items-center gap-2">
                    <Shield className="w-4 h-4" /> Breast Cancer Treatment Guidelines
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline flex items-center gap-2">
                    <Activity className="w-4 h-4" /> Clinical Trials Search Tool
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-pink-50 rounded-lg p-6 mb-8">
              <div className="mb-4">
                <h3 className="text-sm font-bold text-pink-800 uppercase tracking-wide mb-2">BREAST CANCER UPDATES</h3>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Stay Informed About Treatment Advances</h4>
                <p className="text-gray-700 text-sm">
                  Get the latest research updates, treatment options, and support resources delivered to your inbox.
                </p>
              </div>

              <form onSubmit={handleEmailSubmit} className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200"
                >
                  SUBSCRIBE
                </button>
              </form>

              <p className="text-xs text-gray-600 mt-3">
                Your{" "}
                <a href="#" className="text-pink-600 hover:underline">
                  privacy
                </a>{" "}
                is important to us
              </p>
            </div>

            {/* Support Groups */}
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Find Support</h3>
              <p className="text-gray-700 mb-4">
                Connecting with others who understand your experience can be invaluable during treatment.
              </p>
              <button className="w-full bg-white border border-pink-600 text-pink-600 hover:bg-pink-50 font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                Find Local Support Groups
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}