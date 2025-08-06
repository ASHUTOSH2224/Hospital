"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Check, Brain, Activity, AlertTriangle, BookOpen, FlaskConical, Pill, Dna, HeartPulse } from "lucide-react"

export default function MigraineScienceGuide() {
    const [email, setEmail] = useState("")
    const [activeTab, setActiveTab] = useState("Overview")

    const handleEmailSubmit = (e) => {
        e.preventDefault()
        console.log("Email submitted:", email)
        setEmail("")
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const tabs = ["Overview", "Causes", "Treatments", "Research"]

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                The Science Behind Migraines: Understanding Brain Chemistry and Triggers
                            </h1>

                            {/* Navigation Tabs */}
                            <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-200">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${activeTab === tab
                                                ? "border-blue-500 text-blue-600"
                                                : "border-transparent text-gray-600 hover:text-gray-900"
                                            }`}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>

                            {/* Date and Intro */}
                            <div className="flex items-center text-gray-500 mb-4">
                                <Calendar className="w-4 h-4 mr-1" />
                                <span className="text-sm">Updated on June 15, 2024</span>
                            </div>

                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                Modern migraine research has revealed that migraines are complex neurological disorders involving multiple brain systems. This comprehensive guide explores the latest scientific understanding of migraine pathophysiology, including the role of CGRP, serotonin, cortical spreading depression, and genetic factors that contribute to this debilitating condition.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80"
                                    alt="Illustration of brain activity during migraine"
                                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                                    style={{ maxHeight: '500px' }}
                                />
                            </div>

                            {/* Key Takeaways */}
                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
                                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                    <BookOpen className="w-5 h-5 text-blue-600 mr-2" />
                                    Key Takeaways
                                </h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>Migraines are neurological disorders, not just "bad headaches"</li>
                                    <li>CGRP (calcitonin gene-related peptide) is a key player in migraine pathophysiology</li>
                                    <li>Cortical spreading depression may trigger migraine aura</li>
                                    <li>Over 40 genetic variants are associated with migraine susceptibility</li>
                                    <li>New CGRP-targeting medications are revolutionizing migraine treatment</li>
                                </ul>
                            </div>

                            {/* The Neurological Basis of Migraines */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Brain className="w-8 h-8 text-blue-600 mr-2" />
                                    The Neurological Basis of Migraines
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Migraines involve complex interactions between the nervous system, blood vessels, and brain chemicals. The trigeminal nerve system plays a crucial role, releasing inflammatory substances that cause blood vessel dilation and pain. This process is mediated by neurotransmitters and neuropeptides, particularly CGRP.
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Phases of a Migraine Attack</h3>
                                        <ol className="list-decimal list-inside text-gray-700 space-y-2">
                                            <li><span className="font-semibold">Prodrome:</span> Early warning signs (24-48 hours before)</li>
                                            <li><span className="font-semibold">Aura:</span> Neurological symptoms (visual, sensory, or language disturbances)</li>
                                            <li><span className="font-semibold">Headache:</span> Throbbing pain, typically unilateral</li>
                                            <li><span className="font-semibold">Postdrome:</span> "Migraine hangover" phase</li>
                                        </ol>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Key Brain Areas Involved</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Trigeminal nerve and ganglion</li>
                                            <li>Thalamus (pain processing center)</li>
                                            <li>Hypothalamus (may initiate attacks)</li>
                                            <li>Brainstem nuclei (pain modulation)</li>
                                            <li>Cortical regions (aura generation)</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Cortical Spreading Depression Explained</h3>
                                    <p className="text-gray-700 mb-2">
                                        Cortical spreading depression (CSD) is a wave of electrical activity followed by neuronal depression that spreads across the cerebral cortex at 2-6 mm per minute. This phenomenon is believed to:
                                    </p>
                                    <ul className="list-disc list-inside text-gray-700 ml-4">
                                        <li>Trigger migraine aura symptoms</li>
                                        <li>Activate the trigeminovascular system</li>
                                        <li>Release inflammatory mediators</li>
                                        <li>Sensitize pain pathways</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Neurochemistry of Migraines */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <FlaskConical className="w-8 h-8 text-blue-600 mr-2" />
                                    Neurochemistry of Migraines
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    The migraine brain shows distinct neurochemical abnormalities that contribute to attack susceptibility and symptoms. Key neurotransmitters and neuromodulators involved include:
                                </p>

                                {/* Neurochemicals Table */}
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Chemical</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role in Migraine</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Therapeutic Target</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">CGRP</td>
                                                <td className="px-4 py-3">Vasodilation, pain transmission, neurogenic inflammation</td>
                                                <td className="px-4 py-3">CGRP monoclonal antibodies, gepants</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Serotonin (5-HT)</td>
                                                <td className="px-4 py-3">Modulates pain pathways, vascular tone</td>
                                                <td className="px-4 py-3">Triptans, SSRIs, TCAs</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Glutamate</td>
                                                <td className="px-4 py-3">Neuronal hyperexcitability, CSD propagation</td>
                                                <td className="px-4 py-3">Memantine, topiramate</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Dopamine</td>
                                                <td className="px-4 py-3">Sensory modulation, nausea/vomiting</td>
                                                <td className="px-4 py-3">Dopamine antagonists</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">PACAP</td>
                                                <td className="px-4 py-3">Vasodilation, trigeminal activation</td>
                                                <td className="px-4 py-3">Emerging target</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                {/* CGRP Focus */}
                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">1</span>
                                            CGRP - The Migraine Peptide
                                        </h3>
                                        <p className="text-gray-700">
                                            Calcitonin gene-related peptide (CGRP) is a potent vasodilator and pain transmitter released from trigeminal nerve endings during migraines. It's found at elevated levels during attacks and contributes to:
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 mt-2 ml-4">
                                            <li>Blood vessel dilation</li>
                                            <li>Neurogenic inflammation</li>
                                            <li>Pain signal transmission</li>
                                            <li>Central sensitization</li>
                                        </ul>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">2</span>
                                            CGRP Blockers
                                        </h3>
                                        <p className="text-gray-700">
                                            New CGRP-targeting medications include:
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 mt-2 ml-4">
                                            <li><strong>Monoclonal antibodies:</strong> Erenumab, Fremanezumab, Galcanezumab, Eptinezumab</li>
                                            <li><strong>Gepants:</strong> Ubrogepant, Rimegepant</li>
                                        </ul>
                                        <p className="text-gray-700 mt-2">
                                            These reduce migraine frequency by 50% or more in many patients.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Genetic Factors */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Dna className="w-8 h-8 text-blue-600 mr-2" />
                                    Genetic Factors in Migraine
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Migraine has a strong genetic component, with heritability estimates of 40-60%. Genome-wide association studies have identified over 40 genetic loci associated with migraine risk. The genetic architecture differs between migraine with aura (MA) and migraine without aura (MO).
                                </p>

                                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                                    <div className="grid grid-cols-3 gap-4 text-center font-medium mb-2">
                                        <div>Gene</div>
                                        <div>Chromosome</div>
                                        <div>Associated Migraine Type</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 text-center mb-1">
                                        <div className="font-medium">TRPM8</div>
                                        <div>2q37.1</div>
                                        <div>MA and MO</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 text-center mb-1 bg-blue-50 p-1 rounded">
                                        <div className="font-medium">PRDM16</div>
                                        <div>1p36.32</div>
                                        <div>MA</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 text-center mb-1">
                                        <div className="font-medium">LRP1</div>
                                        <div>12q13.3</div>
                                        <div>MA</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 text-center">
                                        <div className="font-medium">CACNA1A</div>
                                        <div>19p13</div>
                                        <div>Familial hemiplegic migraine</div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">Familial Hemiplegic Migraine (FHM)</h3>
                                        <p className="text-gray-700 mb-2">
                                            This rare autosomal dominant form of migraine with aura is caused by mutations in:
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 ml-4">
                                            <li><strong>CACNA1A</strong> (FHM1) - Calcium channel</li>
                                            <li><strong>ATP1A2</strong> (FHM2) - Sodium-potassium pump</li>
                                            <li><strong>SCN1A</strong> (FHM3) - Sodium channel</li>
                                        </ul>
                                    </div>

                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-gray-900 mb-2">Polygenic Risk</h3>
                                        <p className="text-gray-700">
                                            Most migraines result from combinations of common genetic variants that each contribute small effects. These variants often involve genes related to:
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 ml-4 mt-2">
                                            <li>Vascular function</li>
                                            <li>Neuronal excitability</li>
                                            <li>Glutamatergic neurotransmission</li>
                                            <li>Metal ion transport</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Triggers and Comorbidities */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <AlertTriangle className="w-8 h-8 text-blue-600 mr-2" />
                                    Migraine Triggers and Comorbidities
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    Migraine attacks can be triggered by various internal and external factors. Additionally, migraines frequently co-occur with other neurological and psychiatric conditions, suggesting shared pathophysiological mechanisms.
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Common Triggers</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li><strong>Hormonal changes:</strong> Menstruation, ovulation, menopause</li>
                                            <li><strong>Stress:</strong> Both during and after stressful periods</li>
                                            <li><strong>Sleep disturbances:</strong> Both lack and excess of sleep</li>
                                            <li><strong>Dietary factors:</strong> Alcohol (especially red wine), aged cheeses, MSG, artificial sweeteners</li>
                                            <li><strong>Environmental:</strong> Bright lights, strong smells, weather changes</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Common Comorbidities</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Depression (2-4× increased risk)</li>
                                            <li>Anxiety disorders</li>
                                            <li>Epilepsy (2× increased risk)</li>
                                            <li>Stroke (especially MA with aura)</li>
                                            <li>Irritable bowel syndrome</li>
                                            <li>Fibromyalgia</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                    <h3 className="font-bold text-gray-900 mb-2">Important Note on Triggers:</h3>
                                    <p className="text-gray-700">
                                        Trigger sensitivity varies greatly between individuals. What triggers an attack in one person may be harmless to another. Keeping a detailed migraine diary can help identify personal triggers.
                                    </p>
                                </div>
                            </section>

                            {/* Current and Emerging Treatments */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Pill className="w-8 h-8 text-blue-600 mr-2" />
                                    Current and Emerging Treatments
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Migraine treatment has advanced significantly in recent years, moving from symptomatic relief to targeted preventive therapies. Treatment approaches should be individualized based on attack frequency, severity, comorbidities, and patient preferences.
                                </p>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Acute Treatments</h3>
                                <div className="overflow-x-auto mb-8">
                                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Class</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Examples</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mechanism</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Efficacy</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Triptans</td>
                                                <td className="px-4 py-3">Sumatriptan, Rizatriptan</td>
                                                <td className="px-4 py-3">5-HT1B/1D agonists</td>
                                                <td className="px-4 py-3">Pain-free at 2h: 18-50%</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Gepants</td>
                                                <td className="px-4 py-3">Ubrogepant, Rimegepant</td>
                                                <td className="px-4 py-3">CGRP receptor antagonists</td>
                                                <td className="px-4 py-3">Pain-free at 2h: 20-25%</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Ditans</td>
                                                <td className="px-4 py-3">Lasmiditan</td>
                                                <td className="px-4 py-3">5-HT1F agonist</td>
                                                <td className="px-4 py-3">Pain-free at 2h: 28-32%</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Preventive Treatments</h3>
                                <div className="space-y-6">
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">Traditional Preventives</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div>
                                                    <h4 className="font-medium text-gray-900 mb-2">Beta-blockers</h4>
                                                    <p className="text-gray-700">Propranolol, Metoprolol</p>
                                                    <p className="text-sm text-gray-600">~50% reduction in 50% of patients</p>
                                                </div>
                                                <div>
                                                    <h4 className="font-medium text-gray-900 mb-2">Antidepressants</h4>
                                                    <p className="text-gray-700">Amitriptyline, Venlafaxine</p>
                                                    <p className="text-sm text-gray-600">Particularly helpful with comorbid depression</p>
                                                </div>
                                                <div>
                                                    <h4 className="font-medium text-gray-900 mb-2">Antiepileptics</h4>
                                                    <p className="text-gray-700">Topiramate, Valproate</p>
                                                    <p className="text-sm text-gray-600">Topiramate reduces frequency by ~50%</p>
                                                </div>
                                                <div>
                                                    <h4 className="font-medium text-gray-900 mb-2">Calcium channel blockers</h4>
                                                    <p className="text-gray-700">Flunarizine, Verapamil</p>
                                                    <p className="text-sm text-gray-600">More effective in MA</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-600 px-4 py-2">
                                            <h3 className="font-bold text-white">CGRP-Targeted Therapies</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div>
                                                    <h4 className="font-medium text-gray-900 mb-2">Erenumab (Aimovig)</h4>
                                                    <p className="text-gray-700">Monthly subcutaneous injection</p>
                                                    <p className="text-sm text-gray-600">50-70% patients with ≥50% reduction</p>
                                                </div>
                                                <div>
                                                    <h4 className="font-medium text-gray-900 mb-2">Fremanezumab (Ajovy)</h4>
                                                    <p className="text-gray-700">Monthly or quarterly injection</p>
                                                    <p className="text-sm text-gray-600">41% reduction in monthly migraine days</p>
                                                </div>
                                                <div>
                                                    <h4 className="font-medium text-gray-900 mb-2">Galcanezumab (Emgality)</h4>
                                                    <p className="text-gray-700">Monthly subcutaneous injection</p>
                                                    <p className="text-sm text-gray-600">4.7 fewer migraine days/month</p>
                                                </div>
                                                <div>
                                                    <h4 className="font-medium text-gray-900 mb-2">Eptinezumab (Vyepti)</h4>
                                                    <p className="text-gray-700">Quarterly IV infusion</p>
                                                    <p className="text-sm text-gray-600">75% response rate in chronic migraine</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Future Research Directions */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Future Research Directions</h2>

                                <p className="text-gray-700 mb-6">
                                    Despite significant advances, many questions remain about migraine pathophysiology and treatment. Current research focuses on:
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Novel Therapeutic Targets</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>PACAP and its receptors</li>
                                            <li>Kappa opioid receptors</li>
                                            <li>Nitric oxide synthase inhibitors</li>
                                            <li>Glutamate modulators</li>
                                            <li>Purinergic receptors</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Advanced Treatment Approaches</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Gene therapy approaches</li>
                                            <li>Neuromodulation devices (e.g., vagus nerve stimulation)</li>
                                            <li>Personalized medicine based on genetic profiling</li>
                                            <li>Microbiome interventions</li>
                                            <li>Advanced drug delivery systems</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <h3 className="font-bold text-gray-900 mb-2">The Promise of Precision Medicine</h3>
                                    <p className="text-gray-700">
                                        Future migraine treatment may involve genetic testing to predict drug responses, biomarkers to guide therapy selection, and individually tailored combination therapies based on each patient's unique migraine biology.
                                    </p>
                                </div>
                            </section>

                            {/* Final Thoughts */}
                            <section className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>

                                <p className="text-gray-700 mb-4">
                                    The scientific understanding of migraines has advanced tremendously in recent decades, transforming it from a poorly understood condition to a well-characterized neurological disorder with increasingly targeted treatments.
                                </p>

                                <p className="text-gray-700 mb-4">
                                    While much progress has been made, significant challenges remain in fully understanding migraine pathophysiology, developing more effective treatments, and ensuring access to care for all patients.
                                </p>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700 font-medium">
                                        "The future of migraine treatment lies in continued research into its complex biology, development of more targeted therapies, and personalized approaches that consider each patient's unique genetic and physiological profile."
                                    </p>
                                </div>
                            </section>
                        </div>
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
                                            Dr. Emily Wilson, Neurologist
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600 mb-1">
                                        — Written by{" "}
                                        <a href="#" className="text-blue-600 hover:underline font-medium">
                                            David Thompson
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-600 flex items-center gap-1">
                                        — <Calendar className="w-3 h-3" />
                                        <a href="#" className="text-blue-600 hover:underline">
                                            Updated on June 15, 2024
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Newsletter Signup */}
                        <div className="bg-blue-50 rounded-lg p-6 mb-8">
                            <div className="mb-4">
                                <h3 className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-2">MIGRAINE RESEARCH UPDATES</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Stay informed about new treatments</h4>
                                <p className="text-gray-700 text-sm">
                                    Monthly updates on migraine research, new therapies, and management tips.
                                </p>
                            </div>

                            <form onSubmit={handleEmailSubmit} className="space-y-4">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200"
                                >
                                    SUBSCRIBE
                                </button>
                            </form>

                            <p className="text-xs text-gray-600 mt-3">
                                Your{" "}
                                <a href="#" className="text-blue-600 hover:underline">
                                    privacy
                                </a>{" "}
                                is important to us
                            </p>
                        </div>

                        {/* Common Triggers */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Common Migraine Triggers</h3>
                            <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900">Hormonal changes</h4>
                                        <p className="text-sm text-gray-600">Menstruation, ovulation, menopause</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900">Stress</h4>
                                        <p className="text-sm text-gray-600">Both during and after stressful periods</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900">Sleep disturbances</h4>
                                        <p className="text-sm text-gray-600">Irregular sleep patterns, poor quality sleep</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900">Dietary factors</h4>
                                        <p className="text-sm text-gray-600">Alcohol, aged cheeses, processed foods</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Treatment Comparison */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Treatment Comparison</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span className="font-medium">Traditional:</span>
                                    <span className="text-blue-600">Beta-blockers, TCAs</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Newer:</span>
                                    <span className="text-blue-600">CGRP monoclonal antibodies</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Acute:</span>
                                    <span className="text-blue-600">Triptans, gepants</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Non-pharmacologic:</span>
                                    <span className="text-blue-600">Neuromodulation devices</span>
                                </div>
                            </div>
                        </div>

                        {/* Resources */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Further Reading</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">The Complete Migraine Guide (2024 Edition)</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">CGRP Inhibitors: A Revolution in Migraine Treatment</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Migraine Genetics: What We Know</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">Non-Drug Approaches to Migraine Management</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline">When to See a Headache Specialist</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}