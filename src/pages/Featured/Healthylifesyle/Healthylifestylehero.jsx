"use client"

import { useState } from "react"
import { User, Calendar } from "lucide-react"

export default function HealthArticleGuide() {
  const [email, setEmail] = useState("")
  const [activeTab, setActiveTab] = useState("Benefits")

  const handleEmailSubmit = (e) => {
    e.preventDefault()
    console.log("Email submitted:", email)
    setEmail("")
  }

  const tabs = ["Benefits", "How to start", "Moderation", "Takeaway"]

  return (
    <div className="min-h-screen bg-white pt-20 md:pt-32">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header Section */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Healthy Lifestyle Benefits: 5 Tips for Living Your Strongest, Healthiest Life Yet
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
                Starting a healthy lifestyle can involve eating nutritious foods, engaging in regular physical activity,
                and prioritizing your mental health.
              </p>

              {/* Main Image */}
              <div className="mb-8">
                <img
                  src="/W.jpg"
                  alt="Woman doing yoga exercise in a bright room"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>

              {/* Article Description */}
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
                <p className="text-gray-700">
                  <span className="text-blue-600 font-medium">A</span> healthy lifestyle simply means doing things that
                  make you happy and feel good. You get to decide what your healthy lifestyle looks like.
                </p>
              </div>

              <p className="text-gray-700 mb-8">
                Keep reading to learn more about the benefits of a healthy lifestyle, as well as things you can do to
                start.
              </p>
            </div>

            {/* How is it beneficial Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">How is it beneficial?</h2>

              {/* 1. Prevents disease */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Prevents disease</h3>
                <p className="text-gray-700 mb-4">
                  In a{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    2020 study
                  </a>
                  , adults who followed a diet rich in{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    fruits
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    vegetables
                  </a>{" "}
                  for 8 weeks had a reduced risk of{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    cardiovascular disease
                  </a>
                  .
                </p>
                <p className="text-gray-700 mb-4">
                  Another{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    2020 study
                  </a>{" "}
                  found that every 66-gram increase in daily fruit and vegetable intake was associated with a 25% lower
                  risk of developing{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    type 2 diabetes
                  </a>
                  .
                </p>
                <p className="text-gray-700 mb-4">
                  In an observational{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    study
                  </a>{" "}
                  of almost 200,000 adults, those who{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    ate the most whole grains
                  </a>{" "}
                  had a 29% lower rate of type 2 diabetes than those who ate the least.
                </p>
                <p className="text-gray-700 mb-4">
                  In a{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    2020 study
                  </a>{" "}
                  of 44,000 adults, researchers found that those who got 11 minutes of moderate-to-vigorous{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    physical activity
                  </a>{" "}
                  each day had a lower risk of death compared to those who only exercised at that intensity for 2
                  minutes.
                </p>
                <p className="text-gray-700 mb-6">
                  This comparison held true even if people{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    sat
                  </a>{" "}
                  for 8.5 hours every day.
                </p>
              </div>

              {/* 2. Saves money */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Saves money</h3>
                <p className="text-gray-700 mb-4">
                  You{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    should always see your primary care physician
                  </a>{" "}
                  for an annual physical exam.
                </p>
                <p className="text-gray-700 mb-4">
                  Even if you think you do not need to see a doctor,{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    some health conditions can be "silent."
                  </a>{" "}
                  This means they do not present with any symptoms.
                </p>
                <p className="text-gray-700 mb-4">
                  Seeing a doctor regularly increases your chances of catching it early, which can lead to improved
                  outcomes.
                </p>
                <p className="text-gray-700 mb-4">
                  The healthier you are, the less often you will have to see a doctor. This could save money by
                  reducing:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4">
                  <li>co-pays</li>
                  <li>prescriptions</li>
                  <li>other treatments</li>
                </ul>
              </div>

              {/* 3. Lengthens lifespan */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Lengthens lifespan</h3>
                <p className="text-gray-700 mb-4">Basic healthy habits are connected with living a longer life.</p>
                <p className="text-gray-700 mb-4">
                  At age 50, you could live up to{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    14 years
                  </a>{" "}
                  longer if you have:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4">
                  <li>
                    never{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      smoked
                    </a>
                  </li>
                  <li>maintain a healthy weight</li>
                  <li>are regularly active (over 30 minutes per day of moderate or vigorous activities)</li>
                  <li>
                    follow a{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      healthy diet
                    </a>
                  </li>
                  <li>
                    keep{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      alcohol
                    </a>{" "}
                    to a moderate consumption (5 to 15 g per day for women and 5 to 30 g per day for men)
                  </li>
                </ul>
              </div>

              {/* 4. Environment Section */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">4. It can be good for the environment</h3>
                <p className="text-gray-700 mb-4">
                  <a href="#" className="text-blue-600 hover:underline">
                    Ultra-processed foods
                  </a>{" "}
                  are those that contain refined grains and additives to change the texture, taste, or color. More than{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    70 percent of foods in U.S. supermarkets are ultra-processed
                  </a>
                  .
                </p>
                <p className="text-gray-700 mb-4">
                  The making of{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    ultra-processed foods
                  </a>{" "}
                  contributes to:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                  <li>greenhouse gas emissions</li>
                  <li>water scarcity</li>
                  <li>decreased biodiversity</li>
                  <li>plastic waste</li>
                  <li>deforestation</li>
                </ul>
                <p className="text-gray-700 mb-8">
                  Replacing short car rides with{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    biking
                  </a>{" "}
                  can also cut back on the amount of carbon dioxide released into the atmosphere.
                </p>
              </div>
            </section>

            {/* What is the easiest way to start Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What is the easiest way to start?</h2>
              <p className="text-gray-700 mb-4">
                Your journey toward a healthier lifestyle starts with small changes that you feel confident you can
                achieve. Consider making "SMART" goals. SMART stands for:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                <li>specific</li>
                <li>measurable</li>
                <li>attainable</li>
                <li>relevant</li>
                <li>time-bound (met by a deadline and done in a certain amount of time)</li>
              </ul>
              <p className="text-gray-700 mb-4">
                By{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  focusing on SMART goals, you may find more success
                </a>
                . And one initial "win" will propel you to set new, bigger goals.
              </p>
              <p className="text-gray-700 mb-8">
                Consider the following tips for beginning to improve your overall health.
              </p>

              {/* 1. Eat more vegetables */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Eat more vegetables</h3>
                <p className="text-gray-700 mb-4">
                  A{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    2020 review of studies
                  </a>{" "}
                  suggests consuming an adequate amount of fruit and vegetables is associated with lower risk of:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                  <li>heart disease</li>
                  <li>stroke</li>
                  <li>cancer</li>
                  <li>premature death</li>
                </ul>
                <p className="text-gray-700 mb-6">
                  You don't have to go from eating minimal produce to having nine servings a day. You can start slow by
                  eating one serving of vegetables at dinner. If you already do that, consider eating one vegetable or
                  fruit at every meal.
                </p>
              </div>

              {/* 2. Swap in whole grains - FROM HEALTH GUIDE */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Swap in whole grains</h3>
                <p className="text-gray-700 mb-4">
                  Research from{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    2020
                  </a>{" "}
                  links consuming more whole grains with reduced risk of:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-1">
                  <li className="text-pink-600">diabetes</li>
                  <li className="text-pink-600">obesity</li>
                  <li className="text-pink-600">cardiovascular disease</li>
                  <li className="text-pink-600">cancer</li>
                </ul>
                <p className="text-gray-700 mb-4">
                  Start small by replacing one refined grain each day with a whole grain. For example, if you normally
                  have cereal for breakfast, you may replace it with{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    oatmeal
                  </a>
                  .
                </p>
                <p className="text-gray-700 mb-4">
                  Whole grains{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    include
                  </a>
                  :
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-1">
                  <li className="text-pink-600">plain oats</li>
                  <li className="text-pink-600">whole grain bread and pasta</li>
                  <li className="text-pink-600">brown and wild rice</li>
                  <li className="text-pink-600">buckwheat</li>
                  <li className="text-pink-600">bulgur wheat</li>
                  <li className="text-pink-600">millet</li>
                  <li className="text-pink-600">barley</li>
                  <li className="text-pink-600">spelt</li>
                  <li className="text-pink-600">quinoa</li>
                  <li className="text-pink-600">farro</li>
                </ul>
                <p className="text-gray-700 mb-4">Refined grains include:</p>
                <ul className="list-disc list-inside text-gray-700 mb-8 ml-4 space-y-1">
                  <li className="text-pink-600">white bread and pasta</li>
                  <li className="text-pink-600">white rice</li>
                  <li className="text-pink-600">most breakfast cereals</li>
                  <li className="text-pink-600">chips</li>
                  <li className="text-pink-600">pretzel</li>
                  <li className="text-pink-600">crackers</li>
                </ul>
              </div>

              {/* 3. Be more active - FROM HEALTH GUIDE */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Be more active</h3>
                <p className="text-gray-700 mb-4">
                  When it comes to exercise, it is important to choose an activity you enjoy. This will increase the
                  chances that you'll stick with it.
                </p>
                <p className="text-gray-700 mb-4">Some types of exercise you may enjoy can include:</p>
                <ul className="list-disc list-inside text-gray-700 mb-8 ml-4 space-y-1">
                  <li className="text-pink-600">walking</li>
                  <li className="text-pink-600">Pilates</li>
                  <li className="text-pink-600">cycling</li>
                  <li className="text-pink-600">dancing</li>
                </ul>

                {/* Exercise for you, no one else subsection */}
                <div className="ml-4 mb-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Exercise for you, no one else</h4>
                  <p className="text-gray-700 mb-4">
                    When you're choosing to exercise, question who you're doing it for. Are you exercising because you
                    want to move and it makes you feel good? Or are you doing it to alter your body to fit beauty
                    standards, compete with your gym buddy friends, or "make up" for something you ate?
                  </p>
                  <p className="text-gray-700 mb-4">
                    If it's for any of the latter, it's a good idea to step back and reevaluate the purpose exercise is
                    serving in your life.{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      Fitness should be a personal experience; never try to attempt to look like another person or meet
                      unreasonable or unsafe expectations
                    </a>
                    .
                  </p>
                  <p className="text-gray-700 mb-4">
                    A key aspect of this recovery process is recognizing and understanding your triggers, so if you feel
                    compelled to exercise for the wrong reasons, you may want to work with a professional therapist to
                    better know yourself and where the feeling comes from.
                  </p>
                  <p className="text-gray-700 mb-6">
                    You'll then get better at interrupting your unhealthy urge to exercise and develop better coping
                    techniques for your emotions. Ultimately, exercising doesn't make those deeper issues disappear. It
                    only buries them and acts as a superficial coping strategy for complex life issues.
                  </p>
                </div>

                {/* Start small and increase gradually subsection */}
                <div className="ml-4 mb-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Start small and increase gradually</h4>
                  <p className="text-gray-700 mb-4">
                    This one is especially crucial if a healthcare professional has advised you to stop exercising
                    altogether for a while.
                  </p>
                  <p className="text-gray-700 mb-4">
                    When you embark on the journey of healing your relationship with exercise and you feel truly ready
                    to start moving again, it's best not to dive in headfirst.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Start small with what makes you feel comfortable rather than heading for high intensity{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      workouts every day of the week
                    </a>
                    . The point of overcoming exercise addiction is learning that exercise can benefit you in several
                    ways and serve many purposes; it isn't always about going to extremes.
                  </p>
                  <p className="text-gray-700 mb-4">
                    This is not only important for allowing yourself to get back into the swing of things, but it can
                    also prevent damage to your physical health. Compulsive exercising can cause severe damage to your
                    mental well-being by creating stress and interfering with social activities.
                  </p>
                  <p className="text-gray-700 mb-6">
                    It can also damage your physical health by affecting your organs, joints, and muscle mass, make you
                    prone to injury, and cause menstrual complications. It's vital that you listen to your healthcare
                    provider's advice.
                  </p>
                </div>

                {/* Release the pressure subsection */}
                <div className="ml-4 mb-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Release the pressure you've put on yourself</h4>
                  <p className="text-gray-700 mb-4">
                    If your relationship with exercise has been toxic for a long time, you'll likely feel guilty or
                    unsettled when your routine is interrupted. Particularly following long periods without exercise,
                    your desire to work out could be even stronger than before.
                  </p>
                  <p className="text-gray-700 mb-4">
                    However, it's OK to go multiple days without a workout! That's allowed, promise. Developing
                    self-control is an important part of overcoming exercise addiction, and recognizing when it's time
                    to slow down is crucial.{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      Rest days
                    </a>{" "}
                    are just as important, if not more so, than days spent exercising.
                  </p>
                  <p className="text-gray-700 mb-6">
                    Try not to pressure yourself into working out, especially if you aren't feeling up to it. Workouts
                    are never compulsory, and one special thing you can learn in this healing process is that you always
                    have the freedom to choose when you exercise.
                  </p>
                </div>
              </div>

              {/* 4. Maintain friendships - FROM HEALTH GUIDE */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">4. Maintain friendships</h3>
                <p className="text-gray-700 mb-4">
                  Strong{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    relationships and staying in communication
                  </a>{" "}
                  with friends and loved ones can support mental health.
                </p>
                <p className="text-gray-700 mb-6">
                  Even if you cannot get together with friends or family in person, schedule a time to{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    catch up
                  </a>{" "}
                  over a phone or video call once a week.
                </p>
              </div>

              {/* 5. Control stress - FROM HEALTH GUIDE */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">5. Control stress</h3>
                <p className="text-gray-700 mb-4">
                  Exercise can help reduce{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    stress
                  </a>{" "}
                  by releasing pent-up energy and boosting the release of mood-lifting hormones called{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    endorphins
                  </a>
                  .
                </p>
                <p className="text-gray-700 mb-4">Other mindfulness practices include:</p>
                <ul className="list-disc list-inside text-gray-700 mb-4 ml-4 space-y-1">
                  <li className="text-pink-600">meditation</li>
                  <li className="text-pink-600">deep breathing</li>
                  <li className="text-pink-600">journaling</li>
                  <li className="text-pink-600">spending time in nature</li>
                  <li className="text-pink-600">talking to friends</li>
                </ul>
                <p className="text-gray-700 mb-4">
                  If you would like more support relieving stress, you may consider{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    therapy
                  </a>
                  .
                </p>
                <p className="text-gray-700 mb-6">
                  Working with a trained{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    psychologist
                  </a>
                  ,{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    psychiatrist
                  </a>
                  , or{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    therapist
                  </a>{" "}
                  can help you work through challenges life throws your way, and it can help you learn new skills to
                  manage stress.
                </p>
              </div>
            </section>

            {/* Remember the importance of moderation - FROM HEALTH GUIDE */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Remember the importance of moderation</h2>
              <p className="text-gray-700 mb-4">
                It is perfectly possible to balance healthy living with eating ice cream, taking a day off from your
                workout, or having{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  wine
                </a>{" "}
                with dinner.
              </p>
              <p className="text-gray-700 mb-4">
                An all-or-nothing mindset where you can <span className="font-semibold">only</span> eat "good" foods and
                never eat "bad" ones often backfires. Having the flexibility to eat that bowl of ice cream — and savor
                every bite — can be part of being{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  healthy
                </a>
                , too.
              </p>
              <p className="text-gray-700 mb-6">
                Rest days are also important for physical and mental health. Doing too much exercise can increase{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  the risk of injuries
                </a>
                , and it may cause you to{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  burn out
                </a>{" "}
                and give up exercise altogether.
              </p>
            </section>

            {/* The takeaway - FROM HEALTH GUIDE */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">The takeaway</h2>
              <p className="text-gray-700">
                A healthy lifestyle can not only help you feel better, but it can also reduce the risk of some diseases,
                lengthen your lifespan, save you money, and benefit{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  the environment
                </a>
                .
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
                      Jared Meacham, PhD., RD, CSCS
                    </a>
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    — Written by{" "}
                    <a href="#" className="text-blue-600 hover:underline font-medium">
                      Brittany Risher
                    </a>
                  </p>
                  <p className="text-sm text-gray-600 flex items-center gap-1">
                    — <Calendar className="w-3 h-3" />
                    <a href="#" className="text-blue-600 hover:underline">
                      Updated on January 2, 2025
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-teal-50 rounded-lg p-6 mb-8">
              <div className="mb-4">
                <h3 className="text-sm font-bold text-teal-800 uppercase tracking-wide mb-2">HEALTHLINE NEWSLETTER</h3>
                <h4 className="text-xl font-bold text-gray-900 mb-2">The best of health and wellness</h4>
                <p className="text-gray-700 text-sm">
                  We do the research so you don't have to. Stay in the know with the latest in health and wellness.
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
              <p className="text-center text-gray-500 text-sm mb-4">ADVERTISEMENT</p>
              <div className="bg-blue-600 rounded-lg p-6 text-white text-center">
                <h4 className="font-bold mb-2">Creating Your Avatar</h4>
                <p className="text-sm mb-4">Hair Color, Eye Color, Skin Tone, Body Type</p>
                <button className="bg-teal-400 hover:bg-teal-500 text-white px-4 py-2 rounded text-sm font-medium transition-colors">
                  CONTINUE
                </button>
              </div>
            </div>

            {/* Additional Content */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Create Your Own Avatar in SL</h4>
              <p className="text-gray-600 text-sm">It's more than just a virtual reality – it's</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
