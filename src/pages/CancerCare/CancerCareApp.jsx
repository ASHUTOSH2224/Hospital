import ContactPopup from '@/component/ContactPopup';
import React, { useState, useEffect } from 'react';

const CancerCareApp = () => {
  const [currentView, setCurrentView] = useState('main');
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);
  const [showResourceModal, setShowResourceModal] = useState(null);
  const [floatingElements, setFloatingElements] = useState([]);
    const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);
  

  // Generate floating background elements
  useEffect(() => {
    const elements = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      size: Math.random() * 100 + 50,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 5
    }));
    setFloatingElements(elements);
    
    // Open contact popup in 1 seconds on initial load
    const timer = setTimeout(() => setIsContactPopupOpen(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const closeContactPopup = () => {
    setIsContactPopupOpen(false);
  };

  // const WelcomeModal = () => (
  //   <div className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-all duration-500 ${showWelcomeModal ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
  //     <div className={`bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl transform transition-all duration-700 ${showWelcomeModal ? 'scale-100 translate-y-0' : 'scale-75 translate-y-8'}`}>
  //       <div className="text-center">
  //         <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
  //           <span className="text-2xl text-white">💖</span>
  //         </div>
  //         <h3 className="text-2xl font-bold text-gray-800 mb-3">Welcome to Your Support Journey</h3>
  //         <p className="text-gray-600 mb-6 leading-relaxed">
  //           We're here to support you every step of the way. Find resources, guidance, and hope for your cancer care journey.
  //         </p>
  //         <button
  //           onClick={() => setShowWelcomeModal(false)}
  //           className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-pink-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
  //         >
  //           Begin Your Journey
  //         </button>
  //       </div>
  //     </div>
  //   </div>
  // );

  const ResourceModal = ({ resource, isOpen, onClose }) => (
    <div className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-all duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className={`bg-white rounded-2xl p-8 max-w-lg w-full shadow-2xl transform transition-all duration-700 ${isOpen ? 'scale-100 translate-y-0' : 'scale-75 translate-y-8'}`}>
        <div className="flex justify-between items-start mb-6">
          <div className={`w-12 h-12 ${resource?.bgColor} rounded-lg flex items-center justify-center text-xl`}>
            {resource?.icon}
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-2xl leading-none transition-colors duration-200"
          >
            ×
          </button>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-4">{resource?.title}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">{resource?.fullDescription}</p>
        <div className="flex gap-3">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
            Read More
          </button>
          <button 
            onClick={onClose}
            className="bg-gray-100 text-gray-700 px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition-all duration-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );

  const FloatingElements = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {floatingElements.map((element) => (
        <div
          key={element.id}
          className="absolute rounded-full opacity-20 animate-float"
          style={{
            width: `${element.size}px`,
            height: `${element.size}px`,
            left: `${element.x}%`,
            top: `${element.y}%`,
            background: `linear-gradient(45deg, 
              ${element.id % 3 === 0 ? '#fbbf24, #f59e0b' : 
                element.id % 3 === 1 ? '#ec4899, #be185d' : 
                '#8b5cf6, #7c3aed'})`,
            animationDuration: `${element.duration}s`,
            animationDelay: `${element.delay}s`
          }}
        />
      ))}
    </div>
  );

  const MainPage = () => (
    <div className="min-h-screen relative overflow-hidden pt-20 md:pt-32">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-orange-50"></div>
      <FloatingElements />
      
      <div className="relative z-10 flex flex-col justify-center items-center px-4 py-8 min-h-screen">
        <div className="max-w-6xl w-full text-center">
          {/* Animated Title */}
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-orange-500 bg-clip-text text-transparent mb-6 drop-shadow-lg animate-pulse-slow">
              Cancer Care
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up-delay">
              Comprehensive support and resources for all types of cancer care and treatment journeys
            </p>
          </div>
          
          {/* Category Cards with Staggered Animation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 mb-12">
            {[
              { title: 'Initial Diagnosis', key: 'diagnosis', gradient: 'from-blue-400 to-cyan-400', delay: '0s' },
              { title: 'Treatment Options', key: 'treatments', gradient: 'from-green-400 to-emerald-400', delay: '0.1s' },
              { title: 'Care Management', key: 'care-management', gradient: 'from-purple-400 to-violet-400', delay: '0.2s' },
              { title: 'Support Services', key: 'support', gradient: 'from-teal-400 to-cyan-400', delay: '0.3s' },
              { title: 'Recovery & Wellness', key: 'wellness', gradient: 'from-orange-400 to-amber-400', delay: '0.4s' }
            ].map((category, index) => (
              <div
                key={category.key}
                onClick={() => category.key === 'diagnosis' && setCurrentView('diagnosis')}
                className={`group bg-white/80 backdrop-blur-lg p-6 md:p-8 rounded-2xl shadow-xl border border-white/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 hover:rotate-1 ${
                  category.key === 'diagnosis' ? 'cursor-pointer' : ''
                } animate-slide-in-up`}
                style={{ animationDelay: category.delay }}
              >
                <div className={`w-full h-2 bg-gradient-to-r ${category.gradient} rounded-full mb-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                <h3 className="text-base md:text-lg font-semibold text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-300">
                  {category.title}
                </h3>
              </div>
            ))}
          </div>
          
          {/* Animated CTA Button */}
          <button className="bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 text-white font-medium text-sm md:text-base uppercase tracking-wide px-8 py-4 rounded-full transition-all duration-500 hover:scale-110 hover:shadow-2xl flex items-center gap-3 mx-auto group animate-bounce-slow">
            EXPLORE ALL RESOURCES
            <span className="text-lg transition-transform duration-500 group-hover:rotate-180 group-hover:scale-125">✨</span>
          </button>
        </div>
      </div>
    </div>
  );

  const DiagnosisPage = () => {
    const resources = [
      {
        title: 'Understanding Your Cancer Diagnosis',
        description: 'A comprehensive guide to help you understand your diagnosis and what comes next...',
        fullDescription: 'Receiving a cancer diagnosis can be overwhelming. This resource walks you through understanding your diagnosis, the types of tests you may need, how staging works, and what questions to ask your healthcare team. Learn about different cancer types, treatment planning, and how to process this life-changing information.',
        icon: '🔬',
        bgColor: 'bg-gradient-to-br from-blue-400 to-cyan-500'
      },
      {
        title: 'Building Your Healthcare Team',
        description: 'Learn about the different specialists who will be part of your cancer care journey...',
        fullDescription: 'Cancer care involves a multidisciplinary team of specialists. Discover the roles of oncologists, surgeons, radiologists, nurses, social workers, and other healthcare professionals. Understand how to communicate effectively with your team and coordinate your care across different specialists.',
        icon: '👥',
        bgColor: 'bg-gradient-to-br from-teal-400 to-green-500'
      },
      {
        title: 'Navigating Treatment Decisions',
        description: 'Making informed decisions about your treatment options and care plan...',
        fullDescription: 'Learn how to evaluate different treatment options, understand the benefits and risks of various therapies, and make informed decisions about your care. This guide covers how to research treatments, seek second opinions, and participate actively in treatment planning discussions.',
        icon: '⚖️',
        bgColor: 'bg-gradient-to-br from-purple-400 to-indigo-500'
      }
    ];

    return (
      <div className="min-h-screen relative overflow-hidden pt-20 md:pt-32">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-orange-50"></div>
        <FloatingElements />
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-8 md:py-12">
          {/* Back Button with Animation */}
          <button
            onClick={() => setCurrentView('main')}
            className="mb-6 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full text-purple-600 hover:text-purple-800 flex items-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-lg border border-white/30 animate-fade-in-left"
          >
            <span className="text-xl">←</span> Back to Main
          </button>
          
          {/* Section Header with Animation */}
          <div className="border-b-2 border-gradient-to-r from-purple-200 to-orange-200 pb-4 mb-8 md:mb-12 animate-fade-in-up">
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent uppercase tracking-wide">
              Initial Diagnosis
            </h1>
          </div>
          
          {/* Content Grid with Staggered Animation */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Main Feature Card */}
            <div className="group bg-white/80 backdrop-blur-lg rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:rotate-1 border border-white/30 animate-slide-in-left">
              {/* Animated Feature Image */}
              <div className="h-48 md:h-72 bg-gradient-to-br from-violet-500 via-purple-500 to-pink-500 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent animate-shimmer"></div>
                <div className="w-4/5 h-4/5 bg-white/20 rounded-xl flex items-center justify-center relative backdrop-blur-sm border border-white/30 group-hover:scale-105 transition-transform duration-500">
                  {/* Animated Medical Icons */}
                  <div className="absolute left-6 w-12 h-16 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full rounded-b-sm animate-pulse shadow-lg"></div>
                  <div className="absolute right-6 w-12 h-16 bg-white rounded-full rounded-b-sm flex items-end justify-center shadow-lg animate-pulse" style={{ animationDelay: '0.5s' }}>
                    <div className="w-0.5 h-6 bg-gray-800 mb-1"></div>
                  </div>
                  <div className="absolute bottom-8 w-20 h-2 bg-white/40 rounded-full"></div>
                </div>
              </div>
              
              <div className="p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-300">
                  Complete Cancer Care Guide
                </h2>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  Your comprehensive resource for understanding cancer diagnosis, treatment options, and care coordination.
                </p>
              </div>
            </div>
            
            {/* Resources Column */}
            <div className="space-y-6 md:space-y-8">
              {resources.map((resource, index) => (
                <div
                  key={index}
                  onClick={() => setShowResourceModal(resource)}
                  className="group bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer border border-white/30 animate-slide-in-right"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="grid grid-cols-[100px_1fr] md:grid-cols-[120px_1fr] gap-4 md:gap-6 p-5 md:p-6 items-center">
                    <div className={`w-20 h-16 md:w-24 md:h-20 ${resource.bgColor} rounded-xl flex items-center justify-center text-white text-xl md:text-2xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      {resource.icon}
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-300">
                        {resource.title}
                      </h3>
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                        {resource.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="font-sans">
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(120deg); }
          66% { transform: translateY(-10px) rotate(240deg); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-in-up {
          0% { opacity: 0; transform: translateY(50px) scale(0.9); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        
        @keyframes slide-in-left {
          0% { opacity: 0; transform: translateX(-50px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slide-in-right {
          0% { opacity: 0; transform: translateX(50px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes fade-in-left {
          0% { opacity: 0; transform: translateX(-30px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        
        .animate-float { animation: float ease-in-out infinite; }
        .animate-shimmer { animation: shimmer 2s ease-in-out infinite; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out; }
        .animate-fade-in-up-delay { animation: fade-in-up 0.8s ease-out 0.3s both; }
        .animate-slide-in-up { animation: slide-in-up 0.6s ease-out; }
        .animate-slide-in-left { animation: slide-in-left 0.6s ease-out; }
        .animate-slide-in-right { animation: slide-in-right 0.6s ease-out; }
        .animate-fade-in-left { animation: fade-in-left 0.6s ease-out; }
        .animate-pulse-slow { animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        .animate-bounce-slow { animation: bounce 3s infinite; }
      `}</style>
      
      {currentView === 'main' ? <MainPage /> : <DiagnosisPage />}
      
      <ContactPopup isOpen={isContactPopupOpen} onClose={closeContactPopup} />
      <ResourceModal 
        resource={showResourceModal} 
        isOpen={!!showResourceModal} 
        onClose={() => setShowResourceModal(null)} 
      />
    </div>
  );
};

export default CancerCareApp;