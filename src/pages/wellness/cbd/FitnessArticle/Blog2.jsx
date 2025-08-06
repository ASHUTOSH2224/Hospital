"use client";

import { useState } from "react";
import {
  Heart,
  Dumbbell,
  Clock,
  ChevronDown,
  User,
  Calendar,
  ArrowRight,
} from "lucide-react";

export default function FitnessArticle2() {
  const [email, setEmail] = useState("");
  const [activeTab, setActiveTab] = useState("Overview");
  const [expandedExercises, setExpandedExercises] = useState({
    squats: true,
    pushups: false,
    // ... initialize others as false
  });

  const toggleExercise = (exercise) => {
    setExpandedExercises((prev) => ({
      ...prev,
      [exercise]: !prev[exercise],
    }));
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  const tabs = [
    "Overview",
    "Beginner Tips",
    "Equipment Guide",
    "Nutrition",
    "Progress Tracking",
    "FAQ",
    "Success Stories",
  ];

  return (
    <div className="min-h-screen bg-white mt-36 lg:mt-32 pt-4 sm:pt-8 md:pt-12 lg:pt-16 xl:pt-20">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header Section */}
            <div className="mb-6 sm:mb-8 bg-gradient-to-r from-blue-100 to-purple-50 rounded-xl p-6 text-black">
              <div className="flex items-start">
                <div className="bg-white bg-opacity-20 p-3 rounded-lg mr-4">
                  <Dumbbell className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight">
                    7 Exercises to Tone Every Inch of Your Body
                  </h1>
                  <p className="text-lg sm:text-xl text-gray-800 font-medium">
                    We've rounded up the 10 best and most powerful exercises to
                    target all major muscle groups for a complete
                    transformation.
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="relative mb-4 sm:mb-6">
              <div className="flex overflow-x-auto pb-2 mb-4 sm:mb-6 scrollbar-hide">
                <div className="flex space-x-2 min-w-max">
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`flex items-center px-4 py-2 text-xs sm:text-sm font-medium rounded-full whitespace-nowrap transition-colors flex-shrink-0 ${
                        activeTab === tab
                          ? "bg-blue-600 text-white shadow-md"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Introduction */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 mb-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-2/3">
                  <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-4 leading-relaxed">
                    This comprehensive full-body workout targets all major
                    muscle groups with just 10 essential exercises. Each
                    movement has been carefully selected for maximum efficiency,
                    combining strength training and metabolic conditioning to
                    help you build lean muscle while burning fat.
                  </p>
                  <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-400">
                    <p className="text-sm text-blue-800 font-medium">
                      "Consistency with these compound movements will yield
                      better results than dozens of isolation exercises."
                      <span className="block mt-1 text-xs">
                        — Dr. Emily Sanders, Certified Strength and Conditioning
                        Specialist
                      </span>
                    </p>
                  </div>
                </div>
                <div className="md:w-1/3 bg-gradient-to-br from-purple-50 to-white rounded-lg p-4 flex flex-col items-center justify-center border border-purple-100">
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div className="bg-white p-3 rounded-lg shadow-xs border border-gray-100 flex flex-col items-center">
                      <Dumbbell className="w-6 h-6 text-blue-600 mb-1" />
                      <span className="text-xs text-center">Full Body</span>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-xs border border-gray-100 flex flex-col items-center">
                      <Clock className="w-6 h-6 text-purple-600 mb-1" />
                      <span className="text-xs text-center">30-45 min</span>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-xs border border-gray-100 flex flex-col items-center">
                      <Heart className="w-6 h-6 text-red-600 mb-1" />
                      <span className="text-xs text-center">All Levels</span>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-xs border border-gray-100 flex flex-col items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-green-600 mb-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                      <span className="text-xs text-center">
                        High Efficiency
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 text-center">
                    Workout specifications
                  </p>
                </div>
              </div>
            </div>

            {/* Exercise 1: Squats */}
            <section className="bg-white rounded-xl shadow-md mb-8 overflow-hidden border border-gray-200">
              <div
                className="flex justify-between items-center bg-gradient-to-r from-blue-50 to-white p-5 cursor-pointer"
                onClick={() => toggleExercise("squats")}
              >
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-lg mr-4">
                    <span className="text-blue-800 font-bold">1</span>
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    Squats: The Ultimate Lower Body Exercise
                  </h2>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    expandedExercises.squats ? "rotate-180" : ""
                  }`}
                />
              </div>

              {expandedExercises.squats && (
                <div className="p-5 pt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-3">
                        How To Perform
                      </h3>
                      <ol className="space-y-3 text-sm text-gray-700">
                        <li className="flex items-start">
                          <span className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            1
                          </span>
                          <span>
                            Stand with feet shoulder-width apart, toes slightly
                            turned out
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            2
                          </span>
                          <span>
                            Engage core and keep chest up as you push hips back
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            3
                          </span>
                          <span>
                            Lower until thighs are parallel to floor (or as low
                            as comfortable)
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            4
                          </span>
                          <span>
                            Drive through heels to return to standing position
                          </span>
                        </li>
                      </ol>

                      <h3 className="font-semibold text-gray-800 mt-6 mb-3">
                        Common Mistakes
                      </h3>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">✗</span>
                          <span>
                            Knees caving inward (focus on pushing knees out)
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">✗</span>
                          <span>
                            Rounding the lower back (maintain neutral spine)
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">✗</span>
                          <span>
                            Heels lifting off ground (distribute weight through
                            entire foot)
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-800 mb-3">
                        Muscles Worked
                      </h3>
                      <div className="bg-blue-50 rounded-lg p-4 mb-4">
                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-white p-2 rounded border border-blue-100">
                            <h4 className="text-xs font-medium text-blue-700 mb-1">
                              Primary
                            </h4>
                            <p className="text-xs text-gray-700">Quadriceps</p>
                            <p className="text-xs text-gray-700">Glutes</p>
                            <p className="text-xs text-gray-700">Hamstrings</p>
                          </div>
                          <div className="bg-white p-2 rounded border border-blue-100">
                            <h4 className="text-xs font-medium text-blue-700 mb-1">
                              Secondary
                            </h4>
                            <p className="text-xs text-gray-700">Core</p>
                            <p className="text-xs text-gray-700">Calves</p>
                            <p className="text-xs text-gray-700">Lower Back</p>
                          </div>
                        </div>
                      </div>

                      <h3 className="font-semibold text-gray-800 mb-3">
                        Progressions
                      </h3>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between bg-white border border-gray-200 rounded-lg p-3">
                          <span className="text-sm font-medium">Beginner</span>
                          <span className="text-sm text-gray-600">
                            Bodyweight squats
                          </span>
                          <ArrowRight className="w-4 h-4 text-gray-500" />
                        </div>
                        <div className="flex items-center justify-between bg-white border border-gray-200 rounded-lg p-3">
                          <span className="text-sm font-medium">
                            Intermediate
                          </span>
                          <span className="text-sm text-gray-600">
                            Goblet squats
                          </span>
                          <ArrowRight className="w-4 h-4 text-gray-500" />
                        </div>
                        <div className="flex items-center justify-between bg-white border border-gray-200 rounded-lg p-3">
                          <span className="text-sm font-medium">Advanced</span>
                          <span className="text-sm text-gray-600">
                            Barbell back squats
                          </span>
                          <ArrowRight className="w-4 h-4 text-gray-500" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-5">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Expert Tips
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="text-sm font-medium text-blue-700 mb-2">
                          Breathing Technique
                        </h4>
                        <p className="text-xs text-gray-700">
                          Inhale on the way down, exhale forcefully on the way
                          up to engage core stability.
                        </p>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="text-sm font-medium text-blue-700 mb-2">
                          Depth Considerations
                        </h4>
                        <p className="text-xs text-gray-700">
                          Only go as low as you can maintain proper form. Depth
                          will improve with mobility work.
                        </p>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="text-sm font-medium text-blue-700 mb-2">
                          Tempo Variations
                        </h4>
                        <p className="text-xs text-gray-700">
                          Try 3-second descent, pause at bottom, explosive up
                          for strength gains.
                        </p>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="text-sm font-medium text-blue-700 mb-2">
                          Foot Positioning
                        </h4>
                        <p className="text-xs text-gray-700">
                          Experiment with stance width to target different
                          muscle groups.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* Exercise 2: Pushups */}
            <section className="bg-white rounded-xl shadow-md mb-8 overflow-hidden border border-gray-200">
              <div
                className="flex justify-between items-center bg-gradient-to-r from-orange-50 to-white p-5 cursor-pointer"
                onClick={() => toggleExercise("pushups")}
              >
                <div className="flex items-center">
                  <div className="bg-orange-100 p-2 rounded-lg mr-4">
                    <span className="text-orange-800 font-bold">2</span>
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    Pushups: Total Upper Body Engagement
                  </h2>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    expandedExercises.pushups ? "rotate-180" : ""
                  }`}
                />
              </div>

              {expandedExercises.pushups && (
                <div className="p-5 pt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-3">
                        Execution
                      </h3>
                      <ol className="space-y-3 text-sm text-gray-700">
                        <li className="flex items-start">
                          <span className="bg-orange-100 text-orange-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            1
                          </span>
                          <span>
                            Start in plank position with hands slightly wider
                            than shoulders
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-orange-100 text-orange-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            2
                          </span>
                          <span>
                            Maintain straight line from head to heels throughout
                            movement
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-orange-100 text-orange-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            3
                          </span>
                          <span>
                            Lower chest toward floor by bending elbows at
                            45-degree angle
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-orange-100 text-orange-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            4
                          </span>
                          <span>
                            Push back up to starting position without sagging
                            hips
                          </span>
                        </li>
                      </ol>

                      <h3 className="font-semibold text-gray-800 mt-6 mb-3">
                        Form Errors
                      </h3>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">✗</span>
                          <span>
                            Hips sagging or piking up (engage core to maintain
                            plank)
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">✗</span>
                          <span>
                            Partial range of motion (chest should nearly touch
                            floor)
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">✗</span>
                          <span>
                            Flaring elbows out (keep at 45-degree angle to
                            protect shoulders)
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-800 mb-3">
                        Targeted Muscles
                      </h3>
                      <div className="bg-orange-50 rounded-lg p-4 mb-4">
                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-white p-2 rounded border border-orange-100">
                            <h4 className="text-xs font-medium text-orange-700 mb-1">
                              Primary
                            </h4>
                            <p className="text-xs text-gray-700">Pectorals</p>
                            <p className="text-xs text-gray-700">Triceps</p>
                            <p className="text-xs text-gray-700">Front Delts</p>
                          </div>
                          <div className="bg-white p-2 rounded border border-orange-100">
                            <h4 className="text-xs font-medium text-orange-700 mb-1">
                              Stabilizers
                            </h4>
                            <p className="text-xs text-gray-700">Core</p>
                            <p className="text-xs text-gray-700">Scapular</p>
                            <p className="text-xs text-gray-700">Glutes</p>
                          </div>
                        </div>
                      </div>

                      <h3 className="font-semibold text-gray-800 mb-3">
                        Variations
                      </h3>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between bg-white border border-gray-200 rounded-lg p-3">
                          <span className="text-sm font-medium">Easier</span>
                          <span className="text-sm text-gray-600">
                            Incline pushups
                          </span>
                          <ArrowRight className="w-4 h-4 text-gray-500" />
                        </div>
                        <div className="flex items-center justify-between bg-white border border-gray-200 rounded-lg p-3">
                          <span className="text-sm font-medium">Standard</span>
                          <span className="text-sm text-gray-600">
                            Regular pushups
                          </span>
                          <ArrowRight className="w-4 h-4 text-gray-500" />
                        </div>
                        <div className="flex items-center justify-between bg-white border border-gray-200 rounded-lg p-3">
                          <span className="text-sm font-medium">Harder</span>
                          <span className="text-sm text-gray-600">
                            Diamond pushups
                          </span>
                          <ArrowRight className="w-4 h-4 text-gray-500" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-5">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Training Insights
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-orange-50 p-4 rounded-lg">
                        <h4 className="text-sm font-medium text-orange-700 mb-2">
                          Scapular Movement
                        </h4>
                        <p className="text-xs text-gray-700">
                          Allow shoulder blades to protract at top and retract
                          at bottom for full range.
                        </p>
                      </div>
                      <div className="bg-orange-50 p-4 rounded-lg">
                        <h4 className="text-sm font-medium text-orange-700 mb-2">
                          Hand Positioning
                        </h4>
                        <p className="text-xs text-gray-700">
                          Wider hands emphasize chest, closer hands target
                          triceps more.
                        </p>
                      </div>
                      <div className="bg-orange-50 p-4 rounded-lg">
                        <h4 className="text-sm font-medium text-orange-700 mb-2">
                          Tempo Training
                        </h4>
                        <p className="text-xs text-gray-700">
                          Slow eccentrics (3-5 seconds down) build control and
                          strength.
                        </p>
                      </div>
                      <div className="bg-orange-50 p-4 rounded-lg">
                        <h4 className="text-sm font-medium text-orange-700 mb-2">
                          Core Integration
                        </h4>
                        <p className="text-xs text-gray-700">
                          Imagine pulling belly button toward spine to maintain
                          plank position.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </section>

            <section className="bg-white rounded-xl shadow-md mb-8 overflow-hidden border border-gray-200">
              <div
                className="flex justify-between items-center bg-gradient-to-r from-purple-50 to-white p-5 cursor-pointer"
                onClick={() => toggleExercise("lunges")}
              >
                <div className="flex items-center">
                  <div className="bg-purple-100 p-2 rounded-lg mr-4">
                    <span className="text-purple-800 font-bold">3</span>
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    Lunges: Unilateral Leg Power
                  </h2>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    expandedExercises.lunges ? "rotate-180" : ""
                  }`}
                />
              </div>

              {expandedExercises.lunges && (
                <div className="p-5 pt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-3">
                        Proper Form
                      </h3>
                      <ol className="space-y-3 text-sm text-gray-700">
                        <li className="flex items-start">
                          <span className="bg-purple-100 text-purple-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            1
                          </span>
                          <span>
                            Stand tall with feet hip-width apart, hands on hips
                            or holding weights
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-purple-100 text-purple-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            2
                          </span>
                          <span>
                            Step forward with right leg, lowering hips until
                            both knees form 90-degree angles
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-purple-100 text-purple-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            3
                          </span>
                          <span>
                            Keep front knee aligned with ankle, not pushing past
                            toes
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-purple-100 text-purple-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            4
                          </span>
                          <span>
                            Push through front heel to return to starting
                            position
                          </span>
                        </li>
                      </ol>

                      <h3 className="font-semibold text-gray-800 mt-6 mb-3">
                        Common Errors
                      </h3>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">✗</span>
                          <span>
                            Leaning torso forward (keep chest up throughout)
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">✗</span>
                          <span>
                            Short steps (ensure proper knee alignment)
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">✗</span>
                          <span>
                            Letting back knee touch ground (control descent)
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-800 mb-3">
                        Muscle Activation
                      </h3>
                      <div className="bg-purple-50 rounded-lg p-4 mb-4">
                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-white p-2 rounded border border-purple-100">
                            <h4 className="text-xs font-medium text-purple-700 mb-1">
                              Primary
                            </h4>
                            <p className="text-xs text-gray-700">Quadriceps</p>
                            <p className="text-xs text-gray-700">Glutes</p>
                            <p className="text-xs text-gray-700">Hamstrings</p>
                          </div>
                          <div className="bg-white p-2 rounded border border-purple-100">
                            <h4 className="text-xs font-medium text-purple-700 mb-1">
                              Stabilizers
                            </h4>
                            <p className="text-xs text-gray-700">Core</p>
                            <p className="text-xs text-gray-700">Hip Flexors</p>
                            <p className="text-xs text-gray-700">Calves</p>
                          </div>
                        </div>
                      </div>

                      <h3 className="font-semibold text-gray-800 mb-3">
                        Variation Options
                      </h3>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between bg-white border border-gray-200 rounded-lg p-3">
                          <span className="text-sm font-medium">Beginner</span>
                          <span className="text-sm text-gray-600">
                            Static lunges
                          </span>
                          <ArrowRight className="w-4 h-4 text-gray-500" />
                        </div>
                        <div className="flex items-center justify-between bg-white border border-gray-200 rounded-lg p-3">
                          <span className="text-sm font-medium">Standard</span>
                          <span className="text-sm text-gray-600">
                            Walking lunges
                          </span>
                          <ArrowRight className="w-4 h-4 text-gray-500" />
                        </div>
                        <div className="flex items-center justify-between bg-white border border-gray-200 rounded-lg p-3">
                          <span className="text-sm font-medium">Advanced</span>
                          <span className="text-sm text-gray-600">
                            Jumping lunges
                          </span>
                          <ArrowRight className="w-4 h-4 text-gray-500" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-5">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Training Insights
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="text-sm font-medium text-purple-700 mb-2">
                          Balance Focus
                        </h4>
                        <p className="text-xs text-gray-700">
                          Perform near a wall for support if needed while
                          building stability.
                        </p>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="text-sm font-medium text-purple-700 mb-2">
                          Tempo Variations
                        </h4>
                        <p className="text-xs text-gray-700">
                          3-second descent with 1-second pause at bottom builds
                          control.
                        </p>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="text-sm font-medium text-purple-700 mb-2">
                          Step Length
                        </h4>
                        <p className="text-xs text-gray-700">
                          Longer steps emphasize glutes, shorter steps target
                          quads.
                        </p>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="text-sm font-medium text-purple-700 mb-2">
                          Weight Placement
                        </h4>
                        <p className="text-xs text-gray-700">
                          Dumbbells at sides or front rack position changes core
                          demand.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </section>

            <section className="bg-white rounded-xl shadow-md mb-8 overflow-hidden border border-gray-200">
              <div
                className="flex justify-between items-center bg-gradient-to-r from-amber-50 to-white p-5 cursor-pointer"
                onClick={() => toggleExercise("plank")}
              >
                <div className="flex items-center">
                  <div className="bg-amber-100 p-2 rounded-lg mr-4">
                    <span className="text-amber-800 font-bold">4</span>
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    Plank: Core Strength Foundation
                  </h2>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    expandedExercises.plank ? "rotate-180" : ""
                  }`}
                />
              </div>

              {expandedExercises.plank && (
                <div className="p-5 pt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-3">
                        Execution
                      </h3>
                      <ol className="space-y-3 text-sm text-gray-700">
                        <li className="flex items-start">
                          <span className="bg-amber-100 text-amber-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            1
                          </span>
                          <span>
                            Start face down with forearms on floor, elbows under
                            shoulders
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-amber-100 text-amber-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            2
                          </span>
                          <span>
                            Engage core and lift body off floor, forming
                            straight line from head to heels
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-amber-100 text-amber-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            3
                          </span>
                          <span>
                            Keep neck neutral by looking at spot on floor about
                            12" in front of hands
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-amber-100 text-amber-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            4
                          </span>
                          <span>
                            Hold position without letting hips sag or pike up
                          </span>
                        </li>
                      </ol>

                      <h3 className="font-semibold text-gray-800 mt-6 mb-3">
                        Form Pitfalls
                      </h3>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">✗</span>
                          <span>Hips sagging (engage glutes and core)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">✗</span>
                          <span>
                            Holding breath (maintain steady breathing)
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">✗</span>
                          <span>
                            Shoulders creeping toward ears (keep shoulders down)
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-800 mb-3">
                        Muscles Engaged
                      </h3>
                      <div className="bg-amber-50 rounded-lg p-4 mb-4">
                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-white p-2 rounded border border-amber-100">
                            <h4 className="text-xs font-medium text-amber-700 mb-1">
                              Primary
                            </h4>
                            <p className="text-xs text-gray-700">
                              Rectus Abdominis
                            </p>
                            <p className="text-xs text-gray-700">
                              Transverse Abdominis
                            </p>
                            <p className="text-xs text-gray-700">Obliques</p>
                          </div>
                          <div className="bg-white p-2 rounded border border-amber-100">
                            <h4 className="text-xs font-medium text-amber-700 mb-1">
                              Secondary
                            </h4>
                            <p className="text-xs text-gray-700">Shoulders</p>
                            <p className="text-xs text-gray-700">Glutes</p>
                            <p className="text-xs text-gray-700">
                              Back Muscles
                            </p>
                          </div>
                        </div>
                      </div>

                      <h3 className="font-semibold text-gray-800 mb-3">
                        Progression Path
                      </h3>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between bg-white border border-gray-200 rounded-lg p-3">
                          <span className="text-sm font-medium">Beginner</span>
                          <span className="text-sm text-gray-600">
                            Knee plank (20-30 sec)
                          </span>
                          <ArrowRight className="w-4 h-4 text-gray-500" />
                        </div>
                        <div className="flex items-center justify-between bg-white border border-gray-200 rounded-lg p-3">
                          <span className="text-sm font-medium">Standard</span>
                          <span className="text-sm text-gray-600">
                            Forearm plank (60 sec)
                          </span>
                          <ArrowRight className="w-4 h-4 text-gray-500" />
                        </div>
                        <div className="flex items-center justify-between bg-white border border-gray-200 rounded-lg p-3">
                          <span className="text-sm font-medium">Advanced</span>
                          <span className="text-sm text-gray-600">
                            Weighted plank (90+ sec)
                          </span>
                          <ArrowRight className="w-4 h-4 text-gray-500" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-5">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Expert Techniques
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-amber-50 p-4 rounded-lg">
                        <h4 className="text-sm font-medium text-amber-700 mb-2">
                          Core Engagement
                        </h4>
                        <p className="text-xs text-gray-700">
                          Imagine pulling belly button toward spine without
                          holding breath.
                        </p>
                      </div>
                      <div className="bg-amber-50 p-4 rounded-lg">
                        <h4 className="text-sm font-medium text-amber-700 mb-2">
                          Body Alignment
                        </h4>
                        <p className="text-xs text-gray-700">
                          Use mirror or have partner check your straight line
                          form.
                        </p>
                      </div>
                      <div className="bg-amber-50 p-4 rounded-lg">
                        <h4 className="text-sm font-medium text-amber-700 mb-2">
                          Time vs Quality
                        </h4>
                        <p className="text-xs text-gray-700">
                          Better to hold perfect form for 20s than poor form for
                          60s.
                        </p>
                      </div>
                      <div className="bg-amber-50 p-4 rounded-lg">
                        <h4 className="text-sm font-medium text-amber-700 mb-2">
                          Variation Ideas
                        </h4>
                        <p className="text-xs text-gray-700">
                          Try side planks, plank jacks, or shoulder taps for
                          variety.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </section>
            <section className="bg-white rounded-xl shadow-md mb-8 overflow-hidden border border-gray-200">
              <div
                className="flex justify-between items-center bg-gradient-to-r from-teal-50 to-white p-5 cursor-pointer"
                onClick={() => toggleExercise("rows")}
              >
                <div className="flex items-center">
                  <div className="bg-teal-100 p-2 rounded-lg mr-4">
                    <span className="text-teal-800 font-bold">5</span>
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    Bent-Over Rows: Back Builder
                  </h2>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    expandedExercises.rows ? "rotate-180" : ""
                  }`}
                />
              </div>

              {expandedExercises.rows && (
                <div className="p-5 pt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-3">
                        Technique
                      </h3>
                      <ol className="space-y-3 text-sm text-gray-700">
                        <li className="flex items-start">
                          <span className="bg-teal-100 text-teal-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            1
                          </span>
                          <span>
                            Stand with feet shoulder-width apart, knees slightly
                            bent
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-teal-100 text-teal-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            2
                          </span>
                          <span>
                            Hinge at hips to lower torso until nearly parallel
                            to floor
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-teal-100 text-teal-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            3
                          </span>
                          <span>
                            Hold weights with palms facing each other, arms
                            straight
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-teal-100 text-teal-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            4
                          </span>
                          <span>
                            Pull weights toward ribcage, squeezing shoulder
                            blades
                          </span>
                        </li>
                      </ol>

                      <h3 className="font-semibold text-gray-800 mt-6 mb-3">
                        Common Issues
                      </h3>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">✗</span>
                          <span>
                            Rounding the back (maintain neutral spine)
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">✗</span>
                          <span>
                            Using momentum (control movement with muscles)
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">✗</span>
                          <span>Shrugging shoulders (keep shoulders down)</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-800 mb-3">
                        Muscle Focus
                      </h3>
                      <div className="bg-teal-50 rounded-lg p-4 mb-4">
                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-white p-2 rounded border border-teal-100">
                            <h4 className="text-xs font-medium text-teal-700 mb-1">
                              Primary
                            </h4>
                            <p className="text-xs text-gray-700">
                              Latissimus Dorsi
                            </p>
                            <p className="text-xs text-gray-700">Rhomboids</p>
                            <p className="text-xs text-gray-700">Trapezius</p>
                          </div>
                          <div className="bg-white p-2 rounded border border-teal-100">
                            <h4 className="text-xs font-medium text-teal-700 mb-1">
                              Secondary
                            </h4>
                            <p className="text-xs text-gray-700">Biceps</p>
                            <p className="text-xs text-gray-700">Rear Delts</p>
                            <p className="text-xs text-gray-700">
                              Erector Spinae
                            </p>
                          </div>
                        </div>
                      </div>

                      <h3 className="font-semibold text-gray-800 mb-3">
                        Variation Spectrum
                      </h3>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between bg-white border border-gray-200 rounded-lg p-3">
                          <span className="text-sm font-medium">Beginner</span>
                          <span className="text-sm text-gray-600">
                            Seated cable rows
                          </span>
                          <ArrowRight className="w-4 h-4 text-gray-500" />
                        </div>
                        <div className="flex items-center justify-between bg-white border border-gray-200 rounded-lg p-3">
                          <span className="text-sm font-medium">Standard</span>
                          <span className="text-sm text-gray-600">
                            Dumbbell rows
                          </span>
                          <ArrowRight className="w-4 h-4 text-gray-500" />
                        </div>
                        <div className="flex items-center justify-between bg-white border border-gray-200 rounded-lg p-3">
                          <span className="text-sm font-medium">Advanced</span>
                          <span className="text-sm text-gray-600">
                            Barbell rows
                          </span>
                          <ArrowRight className="w-4 h-4 text-gray-500" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-5">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Training Wisdom
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-teal-50 p-4 rounded-lg">
                        <h4 className="text-sm font-medium text-teal-700 mb-2">
                          Grip Variations
                        </h4>
                        <p className="text-xs text-gray-700">
                          Overhand grip emphasizes upper back, underhand targets
                          lats more.
                        </p>
                      </div>
                      <div className="bg-teal-50 p-4 rounded-lg">
                        <h4 className="text-sm font-medium text-teal-700 mb-2">
                          Torso Angle
                        </h4>
                        <p className="text-xs text-gray-700">
                          More upright hits upper back, more horizontal targets
                          lats.
                        </p>
                      </div>
                      <div className="bg-teal-50 p-4 rounded-lg">
                        <h4 className="text-sm font-medium text-teal-700 mb-2">
                          Elbow Path
                        </h4>
                        <p className="text-xs text-gray-700">
                          Elbows at 45° for balanced development, wider for
                          upper back focus.
                        </p>
                      </div>
                      <div className="bg-teal-50 p-4 rounded-lg">
                        <h4 className="text-sm font-medium text-teal-700 mb-2">
                          Mind-Muscle
                        </h4>
                        <p className="text-xs text-gray-700">
                          Visualize squeezing a pencil between shoulder blades
                          at top.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </section>

            <section className="bg-white rounded-xl shadow-md mb-8 overflow-hidden border border-gray-200">
              <div
                className="flex justify-between items-center bg-gradient-to-r from-gray-50 to-white p-5 cursor-pointer"
                onClick={() => toggleExercise("deadlifts")}
              >
                <div className="flex items-center">
                  <div className="bg-gray-100 p-2 rounded-lg mr-4">
                    <span className="text-gray-800 font-bold">6</span>
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    Deadlifts: Total Body Strength
                  </h2>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    expandedExercises.deadlifts ? "rotate-180" : ""
                  }`}
                />
              </div>

              {expandedExercises.deadlifts && (
                <div className="p-5 pt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-3">
                        Form Breakdown
                      </h3>
                      <ol className="space-y-3 text-sm text-gray-700">
                        <li className="flex items-start">
                          <span className="bg-gray-100 text-gray-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            1
                          </span>
                          <span>
                            Stand with feet hip-width apart, barbell over
                            mid-foot
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-gray-100 text-gray-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            2
                          </span>
                          <span>
                            Hinge at hips and bend knees to grip bar just
                            outside legs
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-gray-100 text-gray-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            3
                          </span>
                          <span>
                            Keep chest up, back flat as you drive through heels
                            to stand
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-gray-100 text-gray-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            4
                          </span>
                          <span>
                            Reverse motion with control, keeping bar close to
                            body
                          </span>
                        </li>
                      </ol>

                      <h3 className="font-semibold text-gray-800 mt-6 mb-3">
                        Critical Errors
                      </h3>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">✗</span>
                          <span>
                            Rounding the back (maintain neutral spine
                            throughout)
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">✗</span>
                          <span>
                            Hyperextending at top (stand tall without leaning
                            back)
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">✗</span>
                          <span>
                            Bar drifting forward (keep bar path vertical)
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-800 mb-3">
                        Muscles Targeted
                      </h3>
                      <div className="bg-gray-50 rounded-lg p-4 mb-4">
                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-white p-2 rounded border border-gray-100">
                            <h4 className="text-xs font-medium text-gray-700 mb-1">
                              Primary
                            </h4>
                            <p className="text-xs text-gray-700">Hamstrings</p>
                            <p className="text-xs text-gray-700">Glutes</p>
                            <p className="text-xs text-gray-700">
                              Erector Spinae
                            </p>
                          </div>
                          <div className="bg-white p-2 rounded border border-gray-100">
                            <h4 className="text-xs font-medium text-gray-700 mb-1">
                              Secondary
                            </h4>
                            <p className="text-xs text-gray-700">Quadriceps</p>
                            <p className="text-xs text-gray-700">Lats</p>
                            <p className="text-xs text-gray-700">Core</p>
                          </div>
                        </div>
                      </div>

                      <h3 className="font-semibold text-gray-800 mb-3">
                        Progression Ladder
                      </h3>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between bg-white border border-gray-200 rounded-lg p-3">
                          <span className="text-sm font-medium">Beginner</span>
                          <span className="text-sm text-gray-600">
                            Trap bar deadlift
                          </span>
                          <ArrowRight className="w-4 h-4 text-gray-500" />
                        </div>
                        <div className="flex items-center justify-between bg-white border border-gray-200 rounded-lg p-3">
                          <span className="text-sm font-medium">Standard</span>
                          <span className="text-sm text-gray-600">
                            Conventional deadlift
                          </span>
                          <ArrowRight className="w-4 h-4 text-gray-500" />
                        </div>
                        <div className="flex items-center justify-between bg-white border border-gray-200 rounded-lg p-3">
                          <span className="text-sm font-medium">Advanced</span>
                          <span className="text-sm text-gray-600">
                            Sumo deadlift
                          </span>
                          <ArrowRight className="w-4 h-4 text-gray-500" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-5">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Expert Techniques
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="text-sm font-medium text-gray-700 mb-2">
                          Bracing
                        </h4>
                        <p className="text-xs text-gray-700">
                          Take deep breath into belly and brace core before
                          lifting.
                        </p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="text-sm font-medium text-gray-700 mb-2">
                          Setup
                        </h4>
                        <p className="text-xs text-gray-700">
                          Pull slack out of bar before initiating movement.
                        </p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="text-sm font-medium text-gray-700 mb-2">
                          Grip
                        </h4>
                        <p className="text-xs text-gray-700">
                          Use mixed grip or hook grip for heavier weights.
                        </p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="text-sm font-medium text-gray-700 mb-2">
                          Tempo
                        </h4>
                        <p className="text-xs text-gray-700">
                          Control eccentric (lowering) phase for muscle growth.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </section>
            <section className="bg-white rounded-xl shadow-md mb-8 overflow-hidden border border-gray-200">
              <div
                className="flex justify-between items-center bg-gradient-to-r from-red-50 to-white p-5 cursor-pointer"
                onClick={() => toggleExercise("shoulderPress")}
              >
                <div className="flex items-center">
                  <div className="bg-red-100 p-2 rounded-lg mr-4">
                    <span className="text-red-800 font-bold">7</span>
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    Shoulder Press: Overhead Power
                  </h2>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    expandedExercises.shoulderPress ? "rotate-180" : ""
                  }`}
                />
              </div>

              {expandedExercises.shoulderPress && (
                <div className="p-5 pt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-3">
                        Proper Execution
                      </h3>
                      <ol className="space-y-3 text-sm text-gray-700">
                        <li className="flex items-start">
                          <span className="bg-red-100 text-red-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            1
                          </span>
                          <span>
                            Stand with feet shoulder-width apart, core engaged
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-red-100 text-red-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            2
                          </span>
                          <span>
                            Hold dumbbells at shoulder height with palms facing
                            forward
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-red-100 text-red-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            3
                          </span>
                          <span>
                            Press weights overhead until arms are fully extended
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-red-100 text-red-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            4
                          </span>
                          <span>
                            Lower with control back to starting position
                          </span>
                        </li>
                      </ol>

                      <h3 className="font-semibold text-gray-800 mt-6 mb-3">
                        Form Mistakes
                      </h3>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">✗</span>
                          <span>Arching lower back (keep ribs down)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">✗</span>
                          <span>
                            Partial range of motion (full extension overhead)
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">✗</span>
                          <span>Shrugging shoulders (keep shoulders down)</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-800 mb-3">
                        Muscle Development
                      </h3>
                      <div className="bg-red-50 rounded-lg p-4 mb-4">
                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-white p-2 rounded border border-red-100">
                            <h4 className="text-xs font-medium text-red-700 mb-1">
                              Primary
                            </h4>
                            <p className="text-xs text-gray-700">
                              Anterior Delts
                            </p>
                            <p className="text-xs text-gray-700">
                              Lateral Delts
                            </p>
                            <p className="text-xs text-gray-700">Triceps</p>
                          </div>
                          <div className="bg-white p-2 rounded border border-red-100">
                            <h4 className="text-xs font-medium text-red-700 mb-1">
                              Stabilizers
                            </h4>
                            <p className="text-xs text-gray-700">Upper Traps</p>
                            <p className="text-xs text-gray-700">Core</p>
                            <p className="text-xs text-gray-700">
                              Rotator Cuff
                            </p>
                          </div>
                        </div>
                      </div>

                      <h3 className="font-semibold text-gray-800 mb-3">
                        Variation Options
                      </h3>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between bg-white border border-gray-200 rounded-lg p-3">
                          <span className="text-sm font-medium">Beginner</span>
                          <span className="text-sm text-gray-600">
                            Seated dumbbell press
                          </span>
                          <ArrowRight className="w-4 h-4 text-gray-500" />
                        </div>
                        <div className="flex items-center justify-between bg-white border border-gray-200 rounded-lg p-3">
                          <span className="text-sm font-medium">Standard</span>
                          <span className="text-sm text-gray-600">
                            Standing barbell press
                          </span>
                          <ArrowRight className="w-4 h-4 text-gray-500" />
                        </div>
                        <div className="flex items-center justify-between bg-white border border-gray-200 rounded-lg p-3">
                          <span className="text-sm font-medium">Advanced</span>
                          <span className="text-sm text-gray-600">
                            Push press
                          </span>
                          <ArrowRight className="w-4 h-4 text-gray-500" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-5">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Training Insights
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-red-50 p-4 rounded-lg">
                        <h4 className="text-sm font-medium text-red-700 mb-2">
                          Grip Width
                        </h4>
                        <p className="text-xs text-gray-700">
                          Wider grip emphasizes delts, narrower targets triceps
                          more.
                        </p>
                      </div>
                      <div className="bg-red-50 p-4 rounded-lg">
                        <h4 className="text-sm font-medium text-red-700 mb-2">
                          Head Position
                        </h4>
                        <p className="text-xs text-gray-700">
                          Move head slightly forward as bar passes face to avoid
                          hitting chin.
                        </p>
                      </div>
                      <div className="bg-red-50 p-4 rounded-lg">
                        <h4 className="text-sm font-medium text-red-700 mb-2">
                          Tempo Training
                        </h4>
                        <p className="text-xs text-gray-700">
                          Slow eccentric (3-5s lowering) builds muscle control.
                        </p>
                      </div>
                      <div className="bg-red-50 p-4 rounded-lg">
                        <h4 className="text-sm font-medium text-red-700 mb-2">
                          Core Integration
                        </h4>
                        <p className="text-xs text-gray-700">
                          Brace core as if preparing for a punch to stabilize
                          torso.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </section>
            <section className="bg-white rounded-xl shadow-md mb-8 overflow-hidden border border-gray-200">
              <div
                className="flex justify-between items-center bg-gradient-to-r from-green-50 to-white p-5 cursor-pointer"
                onClick={() => toggleExercise("pullups")}
              >
                <div className="flex items-center">
                  <div className="bg-green-100 p-2 rounded-lg mr-4">
                    <span className="text-green-800 font-bold">8</span>
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    Pull-Ups: Ultimate Back Builder
                  </h2>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    expandedExercises.pullups ? "rotate-180" : ""
                  }`}
                />
              </div>

              {expandedExercises.pullups && (
                <div className="p-5 pt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-3">
                        Technique Guide
                      </h3>
                      <ol className="space-y-3 text-sm text-gray-700">
                        <li className="flex items-start">
                          <span className="bg-green-100 text-green-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            1
                          </span>
                          <span>
                            Grab bar with overhand grip slightly wider than
                            shoulder-width
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-green-100 text-green-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            2
                          </span>
                          <span>
                            Hang with arms fully extended, shoulders engaged
                            (not shrugged)
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-green-100 text-green-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            3
                          </span>
                          <span>
                            Pull elbows down and back until chin clears bar
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-green-100 text-green-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            4
                          </span>
                          <span>Lower with control to full extension</span>
                        </li>
                      </ol>

                      <h3 className="font-semibold text-gray-800 mt-6 mb-3">
                        Common Flaws
                      </h3>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">✗</span>
                          <span>
                            Kipping or using momentum (strict form for strength)
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">✗</span>
                          <span>Partial range (full extension at bottom)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">✗</span>
                          <span>
                            Shoulder shrugging (depress shoulders at bottom)
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-800 mb-3">
                        Muscles Worked
                      </h3>
                      <div className="bg-green-50 rounded-lg p-4 mb-4">
                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-white p-2 rounded border border-green-100">
                            <h4 className="text-xs font-medium text-green-700 mb-1">
                              Primary
                            </h4>
                            <p className="text-xs text-gray-700">
                              Latissimus Dorsi
                            </p>
                            <p className="text-xs text-gray-700">Biceps</p>
                            <p className="text-xs text-gray-700">Rhomboids</p>
                          </div>
                          <div className="bg-white p-2 rounded border border-green-100">
                            <h4 className="text-xs font-medium text-green-700 mb-1">
                              Secondary
                            </h4>
                            <p className="text-xs text-gray-700">Rear Delts</p>
                            <p className="text-xs text-gray-700">Forearms</p>
                            <p className="text-xs text-gray-700">Core</p>
                          </div>
                        </div>
                      </div>

                      <h3 className="font-semibold text-gray-800 mb-3">
                        Progression Path
                      </h3>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between bg-white border border-gray-200 rounded-lg p-3">
                          <span className="text-sm font-medium">Beginner</span>
                          <span className="text-sm text-gray-600">
                            Assisted pull-ups
                          </span>
                          <ArrowRight className="w-4 h-4 text-gray-500" />
                        </div>
                        <div className="flex items-center justify-between bg-white border border-gray-200 rounded-lg p-3">
                          <span className="text-sm font-medium">Standard</span>
                          <span className="text-sm text-gray-600">
                            Bodyweight pull-ups
                          </span>
                          <ArrowRight className="w-4 h-4 text-gray-500" />
                        </div>
                        <div className="flex items-center justify-between bg-white border border-gray-200 rounded-lg p-3">
                          <span className="text-sm font-medium">Advanced</span>
                          <span className="text-sm text-gray-600">
                            Weighted pull-ups
                          </span>
                          <ArrowRight className="w-4 h-4 text-gray-500" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-5">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Expert Techniques
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="text-sm font-medium text-green-700 mb-2">
                          Grip Variations
                        </h4>
                        <p className="text-xs text-gray-700">
                          Underhand grip (chin-ups) emphasizes biceps more.
                        </p>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="text-sm font-medium text-green-700 mb-2">
                          Scapular Activation
                        </h4>
                        <p className="text-xs text-gray-700">
                          Initiate movement by depressing shoulder blades first.
                        </p>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="text-sm font-medium text-green-700 mb-2">
                          Tempo Training
                        </h4>
                        <p className="text-xs text-gray-700">
                          2-second pull, 1-second hold, 3-second lower for
                          strength.
                        </p>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="text-sm font-medium text-green-700 mb-2">
                          Mind-Muscle
                        </h4>
                        <p className="text-xs text-gray-700">
                          Visualize pulling elbows down to hips, not just
                          lifting body.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </section>
            <section className="bg-white rounded-xl shadow-md mb-8 overflow-hidden border border-gray-200">
              <div
                className="flex justify-between items-center bg-gradient-to-r from-pink-50 to-white p-5 cursor-pointer"
                onClick={() => toggleExercise("gluteBridges")}
              >
                <div className="flex items-center">
                  <div className="bg-pink-100 p-2 rounded-lg mr-4">
                    <span className="text-pink-800 font-bold">9</span>
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    Glute Bridges: Posterior Power
                  </h2>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    expandedExercises.gluteBridges ? "rotate-180" : ""
                  }`}
                />
              </div>

              {expandedExercises.gluteBridges && (
                <div className="p-5 pt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-3">
                        Proper Form
                      </h3>
                      <ol className="space-y-3 text-sm text-gray-700">
                        <li className="flex items-start">
                          <span className="bg-pink-100 text-pink-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            1
                          </span>
                          <span>
                            Lie on back with knees bent, feet flat on floor
                            hip-width apart
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-pink-100 text-pink-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            2
                          </span>
                          <span>
                            Engage core and squeeze glutes to lift hips toward
                            ceiling
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-pink-100 text-pink-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            3
                          </span>
                          <span>
                            Form straight line from shoulders to knees at top
                            position
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-pink-100 text-pink-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            4
                          </span>
                          <span>
                            Lower hips with control, maintaining tension in
                            glutes
                          </span>
                        </li>
                      </ol>

                      <h3 className="font-semibold text-gray-800 mt-6 mb-3">
                        Common Errors
                      </h3>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">✗</span>
                          <span>
                            Overarching lower back (focus on glute contraction)
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">✗</span>
                          <span>
                            Feet too far forward (knees should be at 90° at top)
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">✗</span>
                          <span>
                            Rushing movement (control both lifting and lowering)
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-800 mb-3">
                        Muscle Activation
                      </h3>
                      <div className="bg-pink-50 rounded-lg p-4 mb-4">
                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-white p-2 rounded border border-pink-100">
                            <h4 className="text-xs font-medium text-pink-700 mb-1">
                              Primary
                            </h4>
                            <p className="text-xs text-gray-700">
                              Gluteus Maximus
                            </p>
                            <p className="text-xs text-gray-700">Hamstrings</p>
                            <p className="text-xs text-gray-700">Core</p>
                          </div>
                          <div className="bg-white p-2 rounded border border-pink-100">
                            <h4 className="text-xs font-medium text-pink-700 mb-1">
                              Secondary
                            </h4>
                            <p className="text-xs text-gray-700">
                              Erector Spinae
                            </p>
                            <p className="text-xs text-gray-700">Adductors</p>
                            <p className="text-xs text-gray-700">Calves</p>
                          </div>
                        </div>
                      </div>

                      <h3 className="font-semibold text-gray-800 mb-3">
                        Progression Options
                      </h3>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between bg-white border border-gray-200 rounded-lg p-3">
                          <span className="text-sm font-medium">Beginner</span>
                          <span className="text-sm text-gray-600">
                            Bodyweight bridges
                          </span>
                          <ArrowRight className="w-4 h-4 text-gray-500" />
                        </div>
                        <div className="flex items-center justify-between bg-white border border-gray-200 rounded-lg p-3">
                          <span className="text-sm font-medium">Standard</span>
                          <span className="text-sm text-gray-600">
                            Single-leg bridges
                          </span>
                          <ArrowRight className="w-4 h-4 text-gray-500" />
                        </div>
                        <div className="flex items-center justify-between bg-white border border-gray-200 rounded-lg p-3">
                          <span className="text-sm font-medium">Advanced</span>
                          <span className="text-sm text-gray-600">
                            Barbell hip thrusts
                          </span>
                          <ArrowRight className="w-4 h-4 text-gray-500" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-5">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Training Tips
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-pink-50 p-4 rounded-lg">
                        <h4 className="text-sm font-medium text-pink-700 mb-2">
                          Peak Contraction
                        </h4>
                        <p className="text-xs text-gray-700">
                          Squeeze glutes hard at top position for 1-2 seconds.
                        </p>
                      </div>
                      <div className="bg-pink-50 p-4 rounded-lg">
                        <h4 className="text-sm font-medium text-pink-700 mb-2">
                          Foot Position
                        </h4>
                        <p className="text-xs text-gray-700">
                          Heels closer to glutes increases hamstring activation.
                        </p>
                      </div>
                      <div className="bg-pink-50 p-4 rounded-lg">
                        <h4 className="text-sm font-medium text-pink-700 mb-2">
                          Tempo Variations
                        </h4>
                        <p className="text-xs text-gray-700">
                          Slow eccentrics (3-5s lowering) build control.
                        </p>
                      </div>
                      <div className="bg-pink-50 p-4 rounded-lg">
                        <h4 className="text-sm font-medium text-pink-700 mb-2">
                          Shoulder Placement
                        </h4>
                        <p className="text-xs text-gray-700">
                          Elevate shoulders on bench for greater range.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </section>
            <section className="bg-white rounded-xl shadow-md mb-8 overflow-hidden border border-gray-200">
              <div
                className="flex justify-between items-center bg-gradient-to-r from-indigo-50 to-white p-5 cursor-pointer"
                onClick={() => toggleExercise("russianTwists")}
              >
                <div className="flex items-center">
                  <div className="bg-indigo-100 p-2 rounded-lg mr-4">
                    <span className="text-indigo-800 font-bold">10</span>
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    Russian Twists: Core Oblique Crusher
                  </h2>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    expandedExercises.russianTwists ? "rotate-180" : ""
                  }`}
                />
              </div>

              {expandedExercises.russianTwists && (
                <div className="p-5 pt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-3">
                        Execution
                      </h3>
                      <ol className="space-y-3 text-sm text-gray-700">
                        <li className="flex items-start">
                          <span className="bg-indigo-100 text-indigo-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            1
                          </span>
                          <span>
                            Sit on floor with knees bent, heels about 12" from
                            glutes
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-indigo-100 text-indigo-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            2
                          </span>
                          <span>
                            Lean back until torso is at 45° angle, maintaining
                            straight back
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-indigo-100 text-indigo-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            3
                          </span>
                          <span>
                            Hold weight with both hands and rotate torso to
                            touch weight to floor
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-indigo-100 text-indigo-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                            4
                          </span>
                          <span>
                            Return to center and repeat to opposite side
                          </span>
                        </li>
                      </ol>

                      <h3 className="font-semibold text-gray-800 mt-6 mb-3">
                        Form Mistakes
                      </h3>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">✗</span>
                          <span>
                            Rounding the back (maintain proud chest position)
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">✗</span>
                          <span>
                            Using arms instead of core (initiate movement from
                            torso)
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">✗</span>
                          <span>
                            Moving too fast (control rotation for maximum
                            benefit)
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-800 mb-3">
                        Muscles Targeted
                      </h3>
                      <div className="bg-indigo-50 rounded-lg p-4 mb-4">
                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-white p-2 rounded border border-indigo-100">
                            <h4 className="text-xs font-medium text-indigo-700 mb-1">
                              Primary
                            </h4>
                            <p className="text-xs text-gray-700">Obliques</p>
                            <p className="text-xs text-gray-700">
                              Rectus Abdominis
                            </p>
                            <p className="text-xs text-gray-700">
                              Transverse Abdominis
                            </p>
                          </div>
                          <div className="bg-white p-2 rounded border border-indigo-100">
                            <h4 className="text-xs font-medium text-indigo-700 mb-1">
                              Secondary
                            </h4>
                            <p className="text-xs text-gray-700">Hip Flexors</p>
                            <p className="text-xs text-gray-700">
                              Erector Spinae
                            </p>
                            <p className="text-xs text-gray-700">Shoulders</p>
                          </div>
                        </div>
                      </div>

                      <h3 className="font-semibold text-gray-800 mb-3">
                        Variation Spectrum
                      </h3>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between bg-white border border-gray-200 rounded-lg p-3">
                          <span className="text-sm font-medium">Beginner</span>
                          <span className="text-sm text-gray-600">
                            Feet on floor
                          </span>
                          <ArrowRight className="w-4 h-4 text-gray-500" />
                        </div>
                        <div className="flex items-center justify-between bg-white border border-gray-200 rounded-lg p-3">
                          <span className="text-sm font-medium">Standard</span>
                          <span className="text-sm text-gray-600">
                            Feet elevated
                          </span>
                          <ArrowRight className="w-4 h-4 text-gray-500" />
                        </div>
                        <div className="flex items-center justify-between bg-white border border-gray-200 rounded-lg p-3">
                          <span className="text-sm font-medium">Advanced</span>
                          <span className="text-sm text-gray-600">
                            Weighted twists
                          </span>
                          <ArrowRight className="w-4 h-4 text-gray-500" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-5">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Expert Advice
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-indigo-50 p-4 rounded-lg">
                        <h4 className="text-sm font-medium text-indigo-700 mb-2">
                          Breathing
                        </h4>
                        <p className="text-xs text-gray-700">
                          Exhale as you twist, inhale as you return to center.
                        </p>
                      </div>
                      <div className="bg-indigo-50 p-4 rounded-lg">
                        <h4 className="text-sm font-medium text-indigo-700 mb-2">
                          Range of Motion
                        </h4>
                        <p className="text-xs text-gray-700">
                          Quality over quantity - better to do fewer perfect
                          reps.
                        </p>
                      </div>
                      <div className="bg-indigo-50 p-4 rounded-lg">
                        <h4 className="text-sm font-medium text-indigo-700 mb-2">
                          Weight Selection
                        </h4>
                        <p className="text-xs text-gray-700">
                          Start light to master form before increasing
                          resistance.
                        </p>
                      </div>
                      <div className="bg-indigo-50 p-4 rounded-lg">
                        <h4 className="text-sm font-medium text-indigo-700 mb-2">
                          Tempo
                        </h4>
                        <p className="text-xs text-gray-700">
                          2-second twist, 1-second hold, 2-second return.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </section>
            {/* Continue with 8 more exercises following the same detailed pattern */}
            {/* Each would have: 
                - Proper technique instructions
                - Muscles worked breakdown
                - Common mistakes
                - Progressions/regressions
                - Expert tips
                - Visual elements
            */}

            {/* Final CTA */}
            <section className="bg-white rounded-xl shadow-md mb-10 p-6 text-center">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                Ready to Transform Your Body?
              </h2>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                Combine these 10 powerhouse exercises into a complete workout
                routine 3-4 times per week, pair with proper nutrition, and
                watch your body composition transform.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center">
                Download Full Workout Plan
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 lg:sticky lg:top-28 lg:self-start">
            {/* Author Info */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-gray-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">
                    <a href="#" className="text-blue-600 hover:underline">
                      Certified by
                    </a>{" "}
                    <a
                      href="#"
                      className="text-blue-600 hover:underline font-medium"
                    >
                      NASM & ACE
                    </a>
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    — Written by{" "}
                    <a
                      href="#"
                      className="text-blue-600 hover:underline font-medium"
                    >
                      Sarah Johnson
                    </a>
                  </p>
                  <p className="text-sm text-gray-600 flex items-center gap-1">
                    — <Calendar className="w-3 h-3" />
                    <a href="#" className="text-blue-600 hover:underline">
                      Updated July 2024
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Workout Essentials */}
            <div className="bg-white rounded-lg p-6 mb-8 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Workout Essentials
              </h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                  </span>
                  <div>
                    <h4 className="text-sm font-medium text-gray-800">
                      Full Workout Plan
                    </h4>
                    <a
                      href="#"
                      className="text-xs text-blue-600 hover:underline"
                    >
                      Download PDF Schedule
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </span>
                  <div>
                    <h4 className="text-sm font-medium text-gray-800">
                      6-Week Program
                    </h4>
                    <a
                      href="#"
                      className="text-xs text-blue-600 hover:underline"
                    >
                      Progressive Overload Plan
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-purple-100 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </span>
                  <div>
                    <h4 className="text-sm font-medium text-gray-800">
                      Progress Tracker
                    </h4>
                    <a
                      href="#"
                      className="text-xs text-blue-600 hover:underline"
                    >
                      Printable Template
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Exercise Demonstrations */}
            <div className="bg-white rounded-lg p-6 mb-8 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Exercise Demonstrations
              </h3>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <h4 className="font-medium text-gray-800 mb-2">
                    Squat Variations
                  </h4>
                  <a
                    href="#"
                    className="text-blue-600 text-sm hover:underline block"
                  >
                    Watch Tutorial
                  </a>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-medium text-gray-800 mb-2">
                    Pushup Progressions
                  </h4>
                  <a
                    href="#"
                    className="text-blue-600 text-sm hover:underline block"
                  >
                    Form Breakdown
                  </a>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">
                    All 10 Exercises
                  </h4>
                  <a
                    href="#"
                    className="text-blue-600 text-sm hover:underline block"
                  >
                    Complete Video Guide
                  </a>
                </div>
              </div>
            </div>

            {/* Recommended Equipment */}
            <div className="bg-white rounded-lg p-6 mb-8 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Recommended Equipment
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                  <span className="text-sm font-medium">Resistance Bands</span>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    Beginner
                  </span>
                </div>
                <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                  <span className="text-sm font-medium">
                    Adjustable Dumbbells
                  </span>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                    Versatile
                  </span>
                </div>
                <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                  <span className="text-sm font-medium">Yoga Mat</span>
                  <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">
                    Essential
                  </span>
                </div>
                <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                  <span className="text-sm font-medium">Pull-Up Bar</span>
                  <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">
                    Advanced
                  </span>
                </div>
              </div>
            </div>

            {/* Success Stories */}
            <div className="bg-white rounded-lg p-6 mb-8 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Success Stories
              </h3>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700 italic mb-2">
                    "This routine completely transformed my body in 12 weeks.
                    I've never been stronger!"
                  </p>
                  <p className="text-xs text-gray-600">— Michael T., 34</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700 italic mb-2">
                    "Finally a workout I can do at home that actually delivers
                    results. Lost 18lbs!"
                  </p>
                  <p className="text-xs text-gray-600">— Sarah K., 28</p>
                </div>
                <a
                  href="#"
                  className="text-sm text-blue-600 hover:underline inline-block mt-2"
                >
                  Read more testimonials →
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-purple-50 rounded-lg p-6 mb-8">
              <div className="mb-4">
                <h3 className="text-sm font-bold text-purple-800 uppercase tracking-wide mb-2">
                  FITNESS NEWSLETTER
                </h3>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Get More Workouts
                </h4>
                <p className="text-gray-700 text-sm">
                  Weekly exercise routines, form tips, and motivation delivered
                  to your inbox.
                </p>
              </div>
              <form onSubmit={handleEmailSubmit} className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200"
                >
                  GET WORKOUTS
                </button>
              </form>
              <p className="text-xs text-gray-600 mt-3">
                Unsubscribe anytime. We respect your privacy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
