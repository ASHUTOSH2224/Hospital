"use client"

import { useEffect, useState } from "react"
import { User, Calendar, Clock, Heart, Check, X, Award, ChevronRight, BarChart2, ClipboardCheck } from "lucide-react"

export default function HeartHealthyFoodsQuiz() {
    const [email, setEmail] = useState("")
    const [activeTab, setActiveTab] = useState("Quiz")
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [showResult, setShowResult] = useState(false)
    const [answers, setAnswers] = useState([])

    const handleEmailSubmit = (e) => {
        e.preventDefault()
        console.log("Email submitted:", email)
        setEmail("")
    }

        useEffect(() => {
            window.scrollTo(0, 0)
        }, [])
    const tabs = ["Quiz", "Food Guide", "Nutrition", "Recipes"]

    const questions = [
        {
            question: "Which of these fats is considered most heart-healthy?",
            options: [
                "Saturated fat from butter",
                "Monounsaturated fat from olive oil",
                "Trans fat from processed foods",
                "All fats are equally healthy"
            ],
            correctAnswer: 1,
            explanation: "Monounsaturated fats, like those found in olive oil, avocados, and nuts, help reduce bad cholesterol levels and lower risk of heart disease."
        },
        {
            question: "Which fish is highest in omega-3 fatty acids?",
            options: [
                "Tilapia",
                "Salmon",
                "Shrimp",
                "Catfish"
            ],
            correctAnswer: 1,
            explanation: "Fatty fish like salmon, mackerel, and sardines are rich in omega-3s which reduce inflammation and lower triglycerides."
        },
        {
            question: "True or False: All plant-based milks are equally heart-healthy.",
            options: [
                "True",
                "False"
            ],
            correctAnswer: 1,
            explanation: "False. Unsweetened almond and soy milk are good choices, but some plant milks contain added sugars and lack protein."
        },
        {
            question: "Which breakfast option is best for heart health?",
            options: [
                "White toast with jam",
                "Bacon and eggs",
                "Oatmeal with walnuts and berries",
                "Sugary cereal with milk"
            ],
            correctAnswer: 2,
            explanation: "Oatmeal provides soluble fiber that lowers cholesterol, while walnuts add healthy fats and berries provide antioxidants."
        },
        {
            question: "How many servings of vegetables per day does the American Heart Association recommend?",
            options: [
                "1-2 servings",
                "3-4 servings",
                "5 or more servings",
                "Vegetables aren't specifically recommended"
            ],
            correctAnswer: 2,
            explanation: "The AHA recommends at least 4-5 servings each of fruits and vegetables daily for optimal heart health."
        }
    ]

    const handleAnswer = (selectedOption) => {
        const isCorrect = selectedOption === questions[currentQuestion].correctAnswer
        if (isCorrect) {
            setScore(score + 1)
        }
        
        setAnswers([...answers, {
            question: questions[currentQuestion].question,
            selected: selectedOption,
            correct: questions[currentQuestion].correctAnswer,
            isCorrect
        }])
        
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
        } else {
            setShowResult(true)
        }
    }

    const resetQuiz = () => {
        setCurrentQuestion(0)
        setScore(0)
        setShowResult(false)
        setAnswers([])
    }

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Quiz: Do You Know Your Heart-Healthy Foods?
                            </h1>

                            {/* Navigation Tabs */}
                            <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-200">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                                            activeTab === tab
                                                ? "border-red-500 text-red-600"
                                                : "border-transparent text-gray-600 hover:text-gray-900"
                                        }`}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>

                            {/* Date and Intro */}
                            <div className="flex items-center text-gray-500 mb-4 gap-4">
                                <div className="flex items-center">
                                    <Calendar className="w-4 h-4 mr-1" />
                                    <span className="text-sm">May 10, 2024</span>
                                </div>
                                <div className="flex items-center">
                                    <Clock className="w-4 h-4 mr-1" />
                                    <span className="text-sm">12 min read</span>
                                </div>
                            </div>

                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                Heart disease remains the leading cause of death worldwide, but did you know that simple dietary changes can reduce your risk by up to 80%? Take this quiz to test your knowledge of heart-healthy foods and discover which superfoods can keep your cardiovascular system in top shape.
                            </p>

                            {/* Main Image */}
                            <div className="mb-8">
                                <img
                                    src="/cleaning-friedge-732x549-thumbnail.jpg"
                                    alt="Assortment of heart-healthy foods"
                                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                                    style={{ maxHeight: '500px' }}
                                />
                            </div>

                            {/* Key Takeaways */}
                            <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-8">
                                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                    <Heart className="w-5 h-5 text-red-600 mr-2" />
                                    Key Takeaways
                                </h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>Certain foods can lower blood pressure and reduce inflammation</li>
                                    <li>Omega-3 fatty acids are crucial for heart health</li>
                                    <li>Fiber-rich foods help remove cholesterol from your body</li>
                                    <li>Antioxidants in colorful fruits/vegetables protect blood vessels</li>
                                    <li>Small dietary changes can have significant long-term benefits</li>
                                </ul>
                            </div>

                            {/* Quiz Section */}
                            {activeTab === "Quiz" && (
                                <section className="mb-12">
                                    {!showResult ? (
                                        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                                            <div className="flex justify-between items-center mb-6">
                                                <span className="text-sm font-medium text-gray-500">
                                                    Question {currentQuestion + 1} of {questions.length}
                                                </span>
                                                <span className="text-sm font-medium text-gray-500">
                                                    Score: {score}/{currentQuestion}
                                                </span>
                                            </div>
                                            
                                            <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                                {questions[currentQuestion].question}
                                            </h2>
                                            
                                            <div className="space-y-3">
                                                {questions[currentQuestion].options.map((option, index) => (
                                                    <button
                                                        key={index}
                                                        onClick={() => handleAnswer(index)}
                                                        className="w-full text-left p-4 border border-gray-200 rounded-lg hover:bg-red-50 hover:border-red-200 transition-colors"
                                                    >
                                                        {option}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                                            <div className="text-center mb-8">
                                                <h2 className="text-3xl font-bold text-gray-900 mb-2">Quiz Results</h2>
                                                <p className="text-lg text-gray-700 mb-4">
                                                    You scored {score} out of {questions.length}
                                                </p>
                                                
                                                <div className="w-full bg-gray-200 rounded-full h-4 mb-6">
                                                    <div 
                                                        className="bg-red-600 h-4 rounded-full" 
                                                        style={{ width: `${(score/questions.length)*100}%` }}
                                                    ></div>
                                                </div>
                                                
                                                {score === questions.length ? (
                                                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                                                        <div className="flex items-center justify-center gap-2">
                                                            <Award className="w-6 h-6 text-red-600" />
                                                            <span className="text-lg font-bold text-gray-900">Perfect Score! You're a heart-healthy food expert!</span>
                                                        </div>
                                                    </div>
                                                ) : score >= questions.length/2 ? (
                                                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                                                        <div className="flex items-center justify-center gap-2">
                                                            <Check className="w-6 h-6 text-yellow-600" />
                                                            <span className="text-lg font-bold text-gray-900">Good job! You know quite a bit about heart-healthy foods.</span>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                                                        <div className="flex items-center justify-center gap-2">
                                                            <Heart className="w-6 h-6 text-blue-600" />
                                                            <span className="text-lg font-bold text-gray-900">Keep learning! Your heart will thank you for improving your nutrition knowledge.</span>
                                                        </div>
                                                    </div>
                                                )}
                                                
                                                <button
                                                    onClick={resetQuiz}
                                                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg transition-colors"
                                                >
                                                    Take Quiz Again
                                                </button>
                                            </div>
                                            
                                            <div className="space-y-8">
                                                <h3 className="text-xl font-bold text-gray-900 border-b pb-2">Question Review</h3>
                                                
                                                {answers.map((answer, index) => (
                                                    <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                                                        <div className="flex items-start gap-2 mb-3">
                                                            {answer.isCorrect ? (
                                                                <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                                            ) : (
                                                                <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                                            )}
                                                            <h4 className="text-lg font-medium text-gray-900">{answer.question}</h4>
                                                        </div>
                                                        
                                                        <div className="ml-7 space-y-2">
                                                            <p className="text-gray-700">
                                                                <span className="font-semibold">Your answer:</span> {questions[index].options[answer.selected]}
                                                            </p>
                                                            
                                                            {!answer.isCorrect && (
                                                                <p className="text-gray-700">
                                                                    <span className="font-semibold">Correct answer:</span> {questions[index].options[answer.correct]}
                                                                </p>
                                                            )}
                                                            
                                                            <p className="text-gray-700">
                                                                <span className="font-semibold">Explanation:</span> {questions[index].explanation}
                                                            </p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </section>
                            )}

                            {/* Food Guide Section */}
                            {activeTab === "Food Guide" && (
                                <section className="mb-12">
                                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                        <Heart className="w-8 h-8 text-red-600 mr-2" />
                                        Heart-Healthy Food Guide
                                    </h2>

                                    <p className="text-gray-700 mb-6">
                                        The American Heart Association recommends a diet rich in fruits, vegetables, whole grains, lean proteins, and healthy fats. Below is a comprehensive guide to the most beneficial foods for cardiovascular health.
                                    </p>

                                    {/* Top Heart-Healthy Foods */}
                                    <div className="mb-8">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Top 10 Heart-Healthy Foods</h3>
                                        
                                        <div className="grid md:grid-cols-2 gap-4 mb-6">
                                            <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                                                <h4 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                                    <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">1</span>
                                                    Fatty Fish
                                                </h4>
                                                <p className="text-gray-700">
                                                    Salmon, mackerel, sardines, and tuna are rich in omega-3 fatty acids that reduce inflammation and lower triglycerides. Aim for 2 servings per week.
                                                </p>
                                            </div>
                                            <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                                                <h4 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                                    <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">2</span>
                                                    Leafy Greens
                                                </h4>
                                                <p className="text-gray-700">
                                                    Spinach, kale, and collard greens are packed with vitamin K, nitrates, and antioxidants that help protect arteries and regulate blood pressure.
                                                </p>
                                            </div>
                                            <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                                                <h4 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                                    <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">3</span>
                                                    Whole Grains
                                                </h4>
                                                <p className="text-gray-700">
                                                    Oats, quinoa, brown rice, and whole wheat contain soluble fiber that helps lower LDL cholesterol and reduce heart disease risk by 20-30%.
                                                </p>
                                            </div>
                                            <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                                                <h4 className="font-bold text-lg text-gray-900 mb-2 flex items-center">
                                                    <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">4</span>
                                                    Berries
                                                </h4>
                                                <p className="text-gray-700">
                                                    Strawberries, blueberries, raspberries, and blackberries are rich in anthocyanins that reduce oxidative stress and inflammation.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Nutrition Comparison Table */}
                                    <div className="mb-8">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Nutritional Comparison of Heart-Healthy Fats</h3>
                                        
                                        <div className="overflow-x-auto">
                                            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                                <thead className="bg-gray-50">
                                                    <tr>
                                                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fat Source</th>
                                                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type of Fat</th>
                                                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Benefits</th>
                                                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Best Uses</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200">
                                                    <tr>
                                                        <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Olive Oil</td>
                                                        <td className="px-4 py-3 whitespace-nowrap">Monounsaturated</td>
                                                        <td className="px-4 py-3">Lowers LDL, raises HDL, reduces inflammation</td>
                                                        <td className="px-4 py-3">Salads, low-heat cooking</td>
                                                    </tr>
                                                    <tr className="bg-gray-50">
                                                        <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Avocados</td>
                                                        <td className="px-4 py-3 whitespace-nowrap">Monounsaturated</td>
                                                        <td className="px-4 py-3">Rich in potassium, fiber, lowers cholesterol</td>
                                                        <td className="px-4 py-3">Sandwiches, dips, salads</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Walnuts</td>
                                                        <td className="px-4 py-3 whitespace-nowrap">Polyunsaturated (Omega-3)</td>
                                                        <td className="px-4 py-3">Improves artery function, reduces plaque</td>
                                                        <td className="px-4 py-3">Snacks, baking, salads</td>
                                                    </tr>
                                                    <tr className="bg-gray-50">
                                                        <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Flaxseeds</td>
                                                        <td className="px-4 py-3 whitespace-nowrap">Polyunsaturated (ALA)</td>
                                                        <td className="px-4 py-3">Lowers blood pressure, anti-inflammatory</td>
                                                        <td className="px-4 py-3">Smoothies, oatmeal, baking</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    {/* Foods to Avoid */}
                                    <div className="mb-8 bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Foods to Limit for Heart Health</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li><span className="font-semibold">Processed meats:</span> Bacon, sausage, and deli meats contain high sodium and preservatives linked to heart disease</li>
                                            <li><span className="font-semibold">Trans fats:</span> Found in fried foods and baked goods, these raise LDL and lower HDL cholesterol</li>
                                            <li><span className="font-semibold">Added sugars:</span> Sugary drinks and sweets contribute to obesity and metabolic syndrome</li>
                                            <li><span className="font-semibold">Excess alcohol:</span> More than 1 drink/day for women or 2 for men can raise blood pressure</li>
                                            <li><span className="font-semibold">Refined carbs:</span> White bread, pasta, and rice can spike blood sugar and triglycerides</li>
                                        </ul>
                                    </div>

                                    {/* Shopping List */}
                                    <div className="mb-8">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Heart-Healthy Shopping List</h3>
                                        
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="text-lg font-bold text-gray-900 mb-3 border-b pb-2">Produce Section</h4>
                                                <ul className="space-y-2">
                                                    <li className="flex items-center">
                                                        <ChevronRight className="w-4 h-4 text-red-600 mr-2" />
                                                        Leafy greens (spinach, kale, Swiss chard)
                                                    </li>
                                                    <li className="flex items-center">
                                                        <ChevronRight className="w-4 h-4 text-red-600 mr-2" />
                                                        Berries (blueberries, strawberries, raspberries)
                                                    </li>
                                                    <li className="flex items-center">
                                                        <ChevronRight className="w-4 h-4 text-red-600 mr-2" />
                                                        Cruciferous vegetables (broccoli, Brussels sprouts)
                                                    </li>
                                                    <li className="flex items-center">
                                                        <ChevronRight className="w-4 h-4 text-red-600 mr-2" />
                                                        Avocados
                                                    </li>
                                                    <li className="flex items-center">
                                                        <ChevronRight className="w-4 h-4 text-red-600 mr-2" />
                                                        Tomatoes
                                                    </li>
                                                </ul>
                                            </div>
                                            
                                            <div>
                                                <h4 className="text-lg font-bold text-gray-900 mb-3 border-b pb-2">Other Aisles</h4>
                                                <ul className="space-y-2">
                                                    <li className="flex items-center">
                                                        <ChevronRight className="w-4 h-4 text-red-600 mr-2" />
                                                        Oats and whole grains
                                                    </li>
                                                    <li className="flex items-center">
                                                        <ChevronRight className="w-4 h-4 text-red-600 mr-2" />
                                                        Canned salmon or sardines (in water)
                                                    </li>
                                                    <li className="flex items-center">
                                                        <ChevronRight className="w-4 h-4 text-red-600 mr-2" />
                                                        Unsalted nuts and seeds
                                                    </li>
                                                    <li className="flex items-center">
                                                        <ChevronRight className="w-4 h-4 text-red-600 mr-2" />
                                                        Extra virgin olive oil
                                                    </li>
                                                    <li className="flex items-center">
                                                        <ChevronRight className="w-4 h-4 text-red-600 mr-2" />
                                                        Dark chocolate (70% cocoa or higher)
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            )}

                            {/* Nutrition Section */}
                            {activeTab === "Nutrition" && (
                                <section className="mb-12">
                                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                        <BarChart2 className="w-8 h-8 text-red-600 mr-2" />
                                        Heart Health Nutrition Science
                                    </h2>

                                    <p className="text-gray-700 mb-6">
                                        Understanding the science behind heart-healthy eating can help you make better dietary choices. Here's what research tells us about nutrition and cardiovascular health.
                                    </p>

                                    {/* Key Nutrients */}
                                    <div className="mb-8">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Nutrients for Heart Health</h3>
                                        
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                                                <h4 className="font-bold text-lg text-gray-900 mb-2">Omega-3 Fatty Acids</h4>
                                                <p className="text-gray-700 mb-3">
                                                    EPA and DHA from fish reduce triglycerides by 15-30%, lower blood pressure, and may prevent plaque buildup in arteries.
                                                </p>
                                                <p className="text-sm text-gray-600">
                                                    <span className="font-semibold">Sources:</span> Fatty fish, walnuts, flaxseeds, chia seeds
                                                </p>
                                            </div>
                                            <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                                                <h4 className="font-bold text-lg text-gray-900 mb-2">Soluble Fiber</h4>
                                                <p className="text-gray-700 mb-3">
                                                    Binds to cholesterol in the digestive system and removes it from the body, lowering LDL by 5-10%.
                                                </p>
                                                <p className="text-sm text-gray-600">
                                                    <span className="font-semibold">Sources:</span> Oats, beans, lentils, apples, citrus fruits
                                                </p>
                                            </div>
                                            <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                                                <h4 className="font-bold text-lg text-gray-900 mb-2">Antioxidants</h4>
                                                <p className="text-gray-700 mb-3">
                                                    Combat oxidative stress that contributes to atherosclerosis. Polyphenols in berries can improve endothelial function.
                                                </p>
                                                <p className="text-sm text-gray-600">
                                                    <span className="font-semibold">Sources:</span> Berries, dark chocolate, green tea, colorful vegetables
                                                </p>
                                            </div>
                                            <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                                                <h4 className="font-bold text-lg text-gray-900 mb-2">Potassium</h4>
                                                <p className="text-gray-700 mb-3">
                                                    Counters effects of sodium and helps relax blood vessel walls, reducing blood pressure.
                                                </p>
                                                <p className="text-sm text-gray-600">
                                                    <span className="font-semibold">Sources:</span> Bananas, sweet potatoes, spinach, avocados
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Research Findings */}
                                    <div className="mb-8 bg-blue-50 rounded-lg p-6">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Recent Research Findings</h3>
                                        
                                        <div className="space-y-4">
                                            <div>
                                                <h4 className="font-bold text-lg text-gray-900 mb-2">Mediterranean Diet Study (2023)</h4>
                                                <p className="text-gray-700">
                                                    A 5-year study of 7,447 participants found those following a Mediterranean diet (rich in olive oil, nuts, fish, and vegetables) had a 30% lower risk of major cardiovascular events compared to a low-fat diet group.
                                                </p>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg text-gray-900 mb-2">DASH Diet Impact</h4>
                                                <p className="text-gray-700">
                                                    The Dietary Approaches to Stop Hypertension (DASH) diet has been shown to lower systolic blood pressure by 8-14 mmHg, comparable to some medications, through its emphasis on fruits, vegetables, and low-fat dairy.
                                                </p>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg text-gray-900 mb-2">Plant-Based Diet Meta-Analysis</h4>
                                                <p className="text-gray-700">
                                                    A review of 86 studies found that plant-based diets were associated with 16% lower risk of cardiovascular disease and 31% lower risk of death from cardiovascular causes.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Daily Recommendations */}
                                    <div className="mb-8">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Daily Heart-Healthy Eating Goals</h3>
                                        
                                        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                                            <div className="grid grid-cols-3 bg-gray-50">
                                                <div className="p-3 font-medium">Nutrient/Food</div>
                                                <div className="p-3 font-medium">Recommended Amount</div>
                                                <div className="p-3 font-medium">Equivalent To</div>
                                            </div>
                                            <div className="grid grid-cols-3 border-b border-gray-200">
                                                <div className="p-3">Fruits & Vegetables</div>
                                                <div className="p-3">≥5 servings</div>
                                                <div className="p-3">2 cups fruit + 2.5 cups vegetables</div>
                                            </div>
                                            <div className="grid grid-cols-3 border-b border-gray-200 bg-gray-50">
                                                <div className="p-3">Whole Grains</div>
                                                <div className="p-3">≥3 servings</div>
                                                <div className="p-3">1 slice bread + ½ cup oatmeal + ½ cup brown rice</div>
                                            </div>
                                            <div className="grid grid-cols-3 border-b border-gray-200">
                                                <div className="p-3">Omega-3s</div>
                                                <div className="p-3">250-500mg EPA+DHA</div>
                                                <div className="p-3">2 servings fatty fish per week</div>
                                            </div>
                                            <div className="grid grid-cols-3 bg-gray-50">
                                                <div className="p-3">Sodium</div>
                                                <div className="p-3">2300mg (ideal 1500mg)</div>
                                                <div className="p-3">About 1 teaspoon salt</div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            )}

                            {/* Recipes Section */}
                            {activeTab === "Recipes" && (
                                <section className="mb-12">
                                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                        <ClipboardCheck className="w-8 h-8 text-red-600 mr-2" />
                                        Heart-Healthy Recipes
                                    </h2>

                                    <p className="text-gray-700 mb-6">
                                        These delicious, easy-to-make recipes are packed with nutrients that support cardiovascular health. Each meal is balanced with lean proteins, healthy fats, and fiber-rich ingredients.
                                    </p>

                                    {/* Breakfast Recipe */}
                                    <div className="mb-10 bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                                        <div className="md:flex">
                                            <div className="md:w-1/3">
                                                <img 
                                                    src="/oatmeal-breakfast.jpg" 
                                                    alt="Berry oatmeal breakfast" 
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div className="p-6 md:w-2/3">
                                                <h3 className="text-2xl font-bold text-gray-900 mb-3">Superfood Oatmeal</h3>
                                                <p className="text-gray-700 mb-4">
                                                    Packed with soluble fiber, antioxidants, and omega-3s to start your day heart-strong.
                                                </p>
                                                
                                                <div className="grid md:grid-cols-2 gap-4 mb-4">
                                                    <div>
                                                        <h4 className="font-bold text-gray-900 mb-2">Ingredients</h4>
                                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                                            <li>½ cup rolled oats</li>
                                                            <li>1 cup unsweetened almond milk</li>
                                                            <li>1 tbsp chia seeds</li>
                                                            <li>½ cup mixed berries</li>
                                                            <li>1 tbsp walnuts, chopped</li>
                                                            <li>½ tsp cinnamon</li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-gray-900 mb-2">Nutrition (per serving)</h4>
                                                        <ul className="text-gray-700 space-y-1">
                                                            <li>Calories: 280</li>
                                                            <li>Fiber: 8g</li>
                                                            <li>Omega-3: 2.5g</li>
                                                            <li>Sugar: 6g (natural)</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                
                                                <h4 className="font-bold text-gray-900 mb-2">Instructions</h4>
                                                <ol className="list-decimal list-inside text-gray-700 space-y-1">
                                                    <li>Combine oats and almond milk in saucepan, bring to simmer</li>
                                                    <li>Stir in chia seeds and cinnamon, cook for 5 minutes</li>
                                                    <li>Top with berries and walnuts before serving</li>
                                                </ol>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Lunch Recipe */}
                                    <div className="mb-10 bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                                        <div className="md:flex flex-row-reverse">
                                            <div className="md:w-1/3">
                                                <img 
                                                    src="/salmon-salad.jpg" 
                                                    alt="Salmon salad" 
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div className="p-6 md:w-2/3">
                                                <h3 className="text-2xl font-bold text-gray-900 mb-3">Mediterranean Salmon Salad</h3>
                                                <p className="text-gray-700 mb-4">
                                                    A perfect balance of omega-3s, antioxidants, and monounsaturated fats.
                                                </p>
                                                
                                                <div className="grid md:grid-cols-2 gap-4 mb-4">
                                                    <div>
                                                        <h4 className="font-bold text-gray-900 mb-2">Ingredients</h4>
                                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                                            <li>4 oz wild salmon fillet</li>
                                                            <li>2 cups mixed greens</li>
                                                            <li>½ avocado, sliced</li>
                                                            <li>¼ cup cherry tomatoes</li>
                                                            <li>2 tbsp olive oil dressing</li>
                                                            <li>1 tbsp sliced almonds</li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-gray-900 mb-2">Nutrition (per serving)</h4>
                                                        <ul className="text-gray-700 space-y-1">
                                                            <li>Calories: 420</li>
                                                            <li>Protein: 25g</li>
                                                            <li>Healthy fats: 32g</li>
                                                            <li>Net carbs: 8g</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                
                                                <h4 className="font-bold text-gray-900 mb-2">Instructions</h4>
                                                <ol className="list-decimal list-inside text-gray-700 space-y-1">
                                                    <li>Season salmon with lemon and herbs, bake at 375°F for 12-15 minutes</li>
                                                    <li>Arrange greens, avocado, and tomatoes in bowl</li>
                                                    <li>Top with cooked salmon and almonds</li>
                                                    <li>Drizzle with olive oil dressing</li>
                                                </ol>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Dinner Recipe */}
                                    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                                        <div className="md:flex">
                                            <div className="md:w-1/3">
                                                <img 
                                                    src="/stir-fry.jpg" 
                                                    alt="Vegetable stir fry" 
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div className="p-6 md:w-2/3">
                                                <h3 className="text-2xl font-bold text-gray-900 mb-3">Rainbow Vegetable Stir-Fry</h3>
                                                <p className="text-gray-700 mb-4">
                                                    Packed with colorful vegetables and heart-healthy oils for optimal nutrition.
                                                </p>
                                                
                                                <div className="grid md:grid-cols-2 gap-4 mb-4">
                                                    <div>
                                                        <h4 className="font-bold text-gray-900 mb-2">Ingredients</h4>
                                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                                            <li>1 tbsp sesame oil</li>
                                                            <li>1 cup broccoli florets</li>
                                                            <li>1 bell pepper, sliced</li>
                                                            <li>½ cup snap peas</li>
                                                            <li>1 carrot, julienned</li>
                                                            <li>2 cloves garlic, minced</li>
                                                            <li>1 tbsp low-sodium soy sauce</li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-gray-900 mb-2">Nutrition (per serving)</h4>
                                                        <ul className="text-gray-700 space-y-1">
                                                            <li>Calories: 180</li>
                                                            <li>Fiber: 6g</li>
                                                            <li>Vitamin C: 210% DV</li>
                                                            <li>Sodium: 320mg</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                
                                                <h4 className="font-bold text-gray-900 mb-2">Instructions</h4>
                                                <ol className="list-decimal list-inside text-gray-700 space-y-1">
                                                <li>Heat sesame oil in wok or large skillet over medium-high heat</li>
                                                <li>Add garlic and stir for 30 seconds until fragrant</li>
                                                <li>Add vegetables, starting with hardest (carrots) first</li>
                                                <li>Stir-fry for 5-7 minutes until crisp-tender</li>
                                                <li>Add soy sauce and toss to combine</li>
                                                <li>Serve over ½ cup cooked brown rice if desired</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>

                                {/* Snack Recipe */}
                                <div className="mt-10 bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                                    <div className="md:flex flex-row-reverse">
                                        <div className="md:w-1/3">
                                            <img 
                                                src="/avocado-toast.jpg" 
                                                alt="Avocado toast snack" 
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="p-6 md:w-2/3">
                                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Avocado & Egg Toast</h3>
                                            <p className="text-gray-700 mb-4">
                                                A satisfying snack with healthy fats, fiber, and protein to keep you full between meals.
                                            </p>
                                            
                                            <div className="grid md:grid-cols-2 gap-4 mb-4">
                                                <div>
                                                    <h4 className="font-bold text-gray-900 mb-2">Ingredients</h4>
                                                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                                                        <li>1 slice whole grain bread</li>
                                                        <li>½ ripe avocado</li>
                                                        <li>1 poached egg</li>
                                                        <li>Pinch of red pepper flakes</li>
                                                        <li>1 tsp olive oil</li>
                                                        <li>Black pepper to taste</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-gray-900 mb-2">Nutrition (per serving)</h4>
                                                    <ul className="text-gray-700 space-y-1">
                                                        <li>Calories: 280</li>
                                                        <li>Fiber: 7g</li>
                                                        <li>Protein: 10g</li>
                                                        <li>Healthy fats: 18g</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            
                                            <h4 className="font-bold text-gray-900 mb-2">Instructions</h4>
                                            <ol className="list-decimal list-inside text-gray-700 space-y-1">
                                                <li>Toast whole grain bread until crisp</li>
                                                <li>Mash avocado with olive oil and spread on toast</li>
                                                <li>Top with poached egg and seasonings</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        )}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-gray-50 rounded-lg p-6 sticky top-4">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Related Articles</h3>
                            
                            <div className="space-y-4">
                                <div className="flex gap-3">
                                    <div className="flex-shrink-0">
                                        <img 
                                            src="/exercise-heart.jpg" 
                                            alt="Exercise for heart health" 
                                            className="w-20 h-20 rounded-lg object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">The Best Exercises for Heart Health</h4>
                                        <p className="text-sm text-gray-600">How to combine cardio and strength training for optimal results</p>
                                    </div>
                                </div>
                                
                                <div className="flex gap-3">
                                    <div className="flex-shrink-0">
                                        <img 
                                            src="/stress-management.jpg" 
                                            alt="Stress management" 
                                            className="w-20 h-20 rounded-lg object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Stress & Heart Disease: The Connection</h4>
                                        <p className="text-sm text-gray-600">Science-backed ways to reduce stress for better cardiovascular health</p>
                                    </div>
                                </div>
                                
                                <div className="flex gap-3">
                                    <div className="flex-shrink-0">
                                        <img 
                                            src="/sleep-heart.jpg" 
                                            alt="Sleep and heart health" 
                                            className="w-20 h-20 rounded-lg object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">How Sleep Affects Your Heart</h4>
                                        <p className="text-sm text-gray-600">The surprising link between sleep quality and cardiovascular risk</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="mt-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Heart Health Resources</h3>
                                <ul className="space-y-3">
                                    <li>
                                        <a href="#" className="flex items-center text-red-600 hover:text-red-800">
                                            <ChevronRight className="w-4 h-4 mr-2" />
                                            American Heart Association Guidelines
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center text-red-600 hover:text-red-800">
                                            <ChevronRight className="w-4 h-4 mr-2" />
                                            Heart-Healthy Meal Planner
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center text-red-600 hover:text-red-800">
                                            <ChevronRight className="w-4 h-4 mr-2" />
                                            Cholesterol & Blood Pressure Tracker
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center text-red-600 hover:text-red-800">
                                            <ChevronRight className="w-4 h-4 mr-2" />
                                            Find a Cardiologist Near You
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}