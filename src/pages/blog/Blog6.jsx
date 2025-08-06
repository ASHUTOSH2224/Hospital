"use client"

import { useEffect, useState } from "react"
import { User, Calendar, AlertTriangle, Heart, Stethoscope, Flame, Droplet, Bell, Thermometer } from "lucide-react"

export default function LowerAbdominalPainGuide() {
  const [email, setEmail] = useState("")
  const [activeTab, setActiveTab] = useState("Causes")

  const handleEmailSubmit = (e) => {
    e.preventDefault()
    console.log("Email submitted:", email)
    setEmail("")
  }

      useEffect(() => {
      // Scroll to top when the component mounts
      window.scrollTo(0, 0)
    }, [])

  const tabs = ["Causes", "Symptoms", "Diagnosis", "Treatment", "Prevention"]

  return (
    <div className="min-h-screen bg-white pt-20 md:pt-32">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header Section */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Why Do I Feel Pain in My Lower Abdomen? Understanding the Causes and Solutions
              </h1>

              {/* Navigation Tabs */}
              <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-200">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                      activeTab === tab
                        ? "border-blue-500 text-blue-600"
                        : "border-transparent text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Intro Text */}
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Lower abdominal pain is a common complaint that can stem from various causes, ranging from mild digestive issues to serious medical conditions. Understanding the potential reasons behind your discomfort can help you determine when to seek medical attention.
              </p>

              {/* Main Image */}
              <div className="mb-8">
                <img
                  src="/woman-sitting-chair-with-abdominal-pain-pressing-her-hand-her-stomach.jpg"
                  alt="Woman sitting with abdominal pain pressing her stomach"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>

              {/* Key Facts Box */}
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8 rounded-r-lg">
                <h3 className="text-lg font-bold text-blue-800 mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" /> Key Facts About Lower Abdominal Pain
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Affects about 20% of adults at some point in their lives</li>
                  <li>More common in women than men</li>
                  <li>Can be acute (sudden) or chronic (lasting more than 3 months)</li>
                  <li>Location of pain often indicates the underlying cause</li>
                </ul>
              </div>

              <p className="text-gray-700 mb-8">
                This comprehensive guide explores the various causes of lower abdominal pain, associated symptoms, diagnostic approaches, treatment options, and preventive measures to help you better understand and manage your discomfort.
              </p>
            </div>

            {/* Common Causes Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Common Causes of Lower Abdominal Pain</h2>

              {/* Digestive System Causes */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Flame className="w-5 h-5 text-orange-500" /> Digestive System Causes
                </h3>
                <p className="text-gray-700 mb-4">
                  Many cases of lower abdominal pain originate from the digestive tract. Common gastrointestinal causes include:
                </p>
                
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">1. Irritable Bowel Syndrome (IBS)</h4>
                  <p className="text-gray-700 mb-2">
                    IBS affects 10-15% of the population and is characterized by:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-2 ml-4">
                    <li>Cramping pain relieved by bowel movements</li>
                    <li>Alternating diarrhea and constipation</li>
                    <li>Bloating and gas</li>
                  </ul>
                  <p className="text-gray-700">
                    <span className="font-semibold">Location:</span> Typically lower left quadrant
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">2. Constipation</h4>
                  <p className="text-gray-700 mb-2">
                    Hard, infrequent stools can cause significant lower abdominal discomfort. Symptoms include:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-2 ml-4">
                    <li>Straining during bowel movements</li>
                    <li>Feeling of incomplete evacuation</li>
                    <li>Fewer than 3 bowel movements per week</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">3. Diverticulitis</h4>
                  <p className="text-gray-700 mb-2">
                    Inflammation of small pouches in the colon wall, most common after age 40. Warning signs include:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-2 ml-4">
                    <li>Sudden, severe pain in lower left abdomen</li>
                    <li>Fever and chills</li>
                    <li>Nausea or vomiting</li>
                  </ul>
                  <p className="text-gray-700 text-sm italic">
                    * Requires immediate medical attention if severe
                  </p>
                </div>
              </div>

              {/* Reproductive System Causes */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-pink-500" /> Reproductive System Causes
                </h3>
                <p className="text-gray-700 mb-4">
                  In women, lower abdominal pain often relates to the reproductive organs. Common gynecological causes include:
                </p>
                
                <div className="bg-pink-50 rounded-lg p-4 mb-4">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">1. Menstrual Cramps (Dysmenorrhea)</h4>
                  <p className="text-gray-700 mb-2">
                    Painful menstruation affects 50-90% of women. Characteristics include:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-2 ml-4">
                    <li>Dull, throbbing pain in lower abdomen</li>
                    <li>Pain begins 1-2 days before period</li>
                    <li>Lasts 2-3 days</li>
                  </ul>
                </div>

                <div className="bg-pink-50 rounded-lg p-4 mb-4">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">2. Ovarian Cysts</h4>
                  <p className="text-gray-700 mb-2">
                    Fluid-filled sacs on ovaries that can cause pain when they rupture or twist. Symptoms may include:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-2 ml-4">
                    <li>Sudden, sharp pain on one side</li>
                    <li>Bloating or fullness</li>
                    <li>Pain during intercourse</li>
                  </ul>
                </div>

                <div className="bg-pink-50 rounded-lg p-4 mb-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">3. Endometriosis</h4>
                  <p className="text-gray-700 mb-2">
                    Tissue similar to uterine lining grows outside the uterus, affecting 10% of women. Key features:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-2 ml-4">
                    <li>Chronic pelvic pain</li>
                    <li>Painful periods (dysmenorrhea)</li>
                    <li>Pain during or after sex</li>
                    <li>Infertility in some cases</li>
                  </ul>
                </div>
              </div>

              {/* Urinary System Causes */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Droplet className="w-5 h-5 text-blue-500" /> Urinary System Causes
                </h3>
                
                <div className="bg-blue-50 rounded-lg p-4 mb-4">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">1. Urinary Tract Infection (UTI)</h4>
                  <p className="text-gray-700 mb-2">
                    Bacterial infection affecting 50-60% of women in their lifetime. Symptoms include:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-2 ml-4">
                    <li>Burning during urination</li>
                    <li>Frequent urge to urinate</li>
                    <li>Lower abdominal or pelvic discomfort</li>
                    <li>Cloudy or strong-smelling urine</li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">2. Kidney Stones</h4>
                  <p className="text-gray-700 mb-2">
                    Hard deposits that form in kidneys and can cause severe pain when passing. Warning signs:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-2 ml-4">
                    <li>Intense pain in side and back</li>
                    <li>Pain radiating to lower abdomen and groin</li>
                    <li>Pink, red, or brown urine</li>
                    <li>Nausea and vomiting</li>
                  </ul>
                </div>
              </div>

              {/* Emergency Conditions Table */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-500" /> When to Seek Emergency Care
                </h3>
                <p className="text-gray-700 mb-4">
                  Some causes of lower abdominal pain require immediate medical attention. Seek emergency care if you experience:
                </p>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Condition</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Symptoms</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="py-3 px-4 text-sm text-gray-700 font-medium">Appendicitis</td>
                        <td className="py-3 px-4 text-sm text-gray-700">
                          <ul className="list-disc list-inside">
                            <li>Pain starting near belly button moving to lower right</li>
                            <li>Fever</li>
                            <li>Nausea/vomiting</li>
                          </ul>
                        </td>
                        <td className="py-3 px-4 text-sm text-red-600 font-medium">Emergency surgery needed</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-sm text-gray-700 font-medium">Ectopic Pregnancy</td>
                        <td className="py-3 px-4 text-sm text-gray-700">
                          <ul className="list-disc list-inside">
                            <li>Sharp pelvic pain</li>
                            <li>Vaginal bleeding</li>
                            <li>Shoulder pain</li>
                          </ul>
                        </td>
                        <td className="py-3 px-4 text-sm text-red-600 font-medium">Immediate medical care</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-sm text-gray-700 font-medium">Bowel Obstruction</td>
                        <td className="py-3 px-4 text-sm text-gray-700">
                          <ul className="list-disc list-inside">
                            <li>Severe cramping</li>
                            <li>Inability to pass stool/gas</li>
                            <li>Abdominal swelling</li>
                          </ul>
                        </td>
                        <td className="py-3 px-4 text-sm text-red-600 font-medium">Emergency treatment required</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Diagnosis Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Diagnosing Lower Abdominal Pain</h2>
              
              <p className="text-gray-700 mb-6">
                To determine the cause of your lower abdominal pain, healthcare providers use a combination of approaches:
              </p>

              {/* Diagnosis Steps */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-purple-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Stethoscope className="w-5 h-5 text-purple-600" /> Medical History
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Description of pain (sharp, dull, crampy)</li>
                    <li>Location and radiation of pain</li>
                    <li>Duration and frequency</li>
                    <li>Associated symptoms</li>
                    <li>Medical and surgical history</li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Thermometer className="w-5 h-5 text-green-600" /> Physical Examination
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Abdominal palpation for tenderness</li>
                    <li>Checking for rebound tenderness</li>
                    <li>Pelvic exam for women</li>
                    <li>Rectal exam when appropriate</li>
                    <li>Listening to bowel sounds</li>
                  </ul>
                </div>
              </div>

              {/* Diagnostic Tests */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Diagnostic Tests</h3>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Laboratory Tests</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                        <li>Complete blood count (CBC)</li>
                        <li>Urinalysis</li>
                        <li>Pregnancy test</li>
                        <li>Stool tests</li>
                        <li>Inflammatory markers</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Imaging Studies</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                        <li>Ultrasound</li>
                        <li>CT scan</li>
                        <li>MRI</li>
                        <li>X-rays</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Special Procedures</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                        <li>Colonoscopy</li>
                        <li>Endoscopy</li>
                        <li>Laparoscopy</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Treatment Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Treatment Options</h2>
              
              <p className="text-gray-700 mb-6">
                Treatment for lower abdominal pain depends entirely on the underlying cause. Here are common approaches:
              </p>

              {/* Treatment Options */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Home Remedies</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Heat application with heating pad</li>
                    <li>Over-the-counter pain relievers (acetaminophen, ibuprofen)</li>
                    <li>Increased fluid intake</li>
                    <li>Dietary modifications (fiber for constipation, BRAT diet for diarrhea)</li>
                    <li>Gentle movement and stretching</li>
                  </ul>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Medical Treatments</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Antibiotics for infections</li>
                    <li>Prescription pain medications</li>
                    <li>Antispasmodics for IBS</li>
                    <li>Hormonal therapy for endometriosis</li>
                    <li>Surgery for conditions like appendicitis or ovarian torsion</li>
                  </ul>
                </div>
              </div>

              {/* Prevention Section */}
              <div className="bg-yellow-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Prevention Strategies</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Stay hydrated (8 glasses of water daily)</li>
                  <li>Eat a high-fiber diet (25-30g fiber per day)</li>
                  <li>Exercise regularly (150 minutes moderate activity weekly)</li>
                  <li>Practice safe sex to prevent STIs</li>
                  <li>Manage stress through meditation, yoga, or therapy</li>
                  <li>Get regular health screenings</li>
                </ul>
              </div>
            </section>

            {/* When to See a Doctor */}
            <section className="mb-12 bg-red-50 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Bell className="w-5 h-5 text-red-600" /> When to See a Doctor
              </h2>
              <p className="text-gray-700 mb-4">
                Schedule an appointment with your healthcare provider if you experience:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 ml-4 space-y-2">
                <li>Pain that persists for more than a few days</li>
                <li>Pain that worsens over time</li>
                <li>Unexplained weight loss</li>
                <li>Changes in bowel habits lasting more than 2 weeks</li>
                <li>Blood in stool or urine</li>
                <li>Pain that interferes with daily activities</li>
              </ul>
              <p className="text-gray-700 font-medium">
                Seek emergency care immediately for severe pain, high fever, vomiting blood, or inability to pass stool.
              </p>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Final Thoughts</h2>
              <p className="text-gray-700 mb-4">
                Lower abdominal pain is a common symptom with many potential causes, ranging from mild to serious. While occasional discomfort may resolve on its own, persistent or severe pain warrants medical evaluation.
              </p>
              <p className="text-gray-700 mb-4">
                Pay attention to accompanying symptoms, pain location, and duration to help your healthcare provider make an accurate diagnosis. With proper treatment, most causes of lower abdominal pain can be effectively managed.
              </p>
              <p className="text-gray-700">
                Remember that your health is important - don't hesitate to seek medical advice when needed. Early intervention often leads to better outcomes for many abdominal conditions.
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
                    <a href="#" className="text-blue-600 hover:underline font-medium">
                      Dr. Sarah Johnson, MD, Gastroenterologist
                    </a>
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    — Written by{" "}
                    <a href="#" className="text-blue-600 hover:underline font-medium">
                      Michael Chen, Health Writer
                    </a>
                  </p>
                  <p className="text-sm text-gray-600 flex items-center gap-1">
                    — <Calendar className="w-3 h-3" />
                    <a href="#" className="text-blue-600 hover:underline">
                      Updated on March 15, 2024
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Pain Location Guide */}
            <div className="bg-indigo-50 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-bold text-indigo-800 mb-4">Pain Location Guide</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="bg-indigo-100 p-2 rounded-full">
                    <div className="w-3 h-3 bg-indigo-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Lower Right</h4>
                    <p className="text-sm text-gray-600">Appendicitis, ovarian cyst, kidney stone</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-indigo-100 p-2 rounded-full">
                    <div className="w-3 h-3 bg-indigo-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Lower Left</h4>
                    <p className="text-sm text-gray-600">Diverticulitis, IBS, ovarian issues</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-indigo-100 p-2 rounded-full">
                    <div className="w-3 h-3 bg-indigo-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Central Lower</h4>
                    <p className="text-sm text-gray-600">UTI, menstrual cramps, bladder issues</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-teal-50 rounded-lg p-6 mb-8">
              <div className="mb-4">
                <h3 className="text-sm font-bold text-teal-800 uppercase tracking-wide mb-2">HEALTH NEWSLETTER</h3>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Digestive Health Insights</h4>
                <p className="text-gray-700 text-sm">
                  Get the latest information on abdominal health, nutrition tips, and when to see a doctor.
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

            {/* Related Articles */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Related Articles</h3>
              <div className="space-y-4">
                <a href="#" className="block group">
                  <h4 className="text-blue-600 group-hover:underline font-medium">Understanding IBS: Symptoms and Management</h4>
                  <p className="text-sm text-gray-600">Learn about irritable bowel syndrome and how to control symptoms</p>
                </a>
                <a href="#" className="block group">
                  <h4 className="text-blue-600 group-hover:underline font-medium">Endometriosis: A Hidden Cause of Pelvic Pain</h4>
                  <p className="text-sm text-gray-600">Recognizing and treating this common gynecological condition</p>
                </a>
                <a href="#" className="block group">
                  <h4 className="text-blue-600 group-hover:underline font-medium">UTI Prevention: What Really Works</h4>
                  <p className="text-sm text-gray-600">Evidence-based strategies to avoid urinary tract infections</p>
                </a>
              </div>
            </div>

            {/* Symptom Checker */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Symptom Checker</h3>
              <p className="text-sm text-gray-600 mb-4">
                Use our interactive tool to help identify potential causes of your symptoms.
              </p>
              <button className="w-full bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                START CHECKUP
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}