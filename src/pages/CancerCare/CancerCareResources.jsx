import React, { useState, useEffect } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CancerCareResources = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const resources = [
    {
      id: 1,
      title: "Navigating Your Cancer Care Team",
      description: "Understanding the roles of oncologists, nurses, and support staff in your care...",
      fullDescription: "A comprehensive guide to understanding your cancer care team. Learn about the different specialists involved in your treatment including medical oncologists, radiation oncologists, surgical oncologists, nurses, social workers, and support staff. Discover how to communicate effectively with your team and advocate for your needs throughout your treatment journey.",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      link: "/health-conditions/cancer-care/cancer-care-resources/cancer-care-team-guide"
    },
    {
      id: 2,
      title: "Managing Side Effects During Treatment",
      description: "Learn effective strategies to cope with treatment side effects and improve quality of life...",
      fullDescription: "Practical guidance on managing common cancer treatment side effects including fatigue, nausea, pain, and emotional challenges. Discover evidence-based strategies, complementary therapies, and lifestyle modifications that can help you maintain your quality of life during treatment. Includes tips for nutrition, exercise, and emotional well-being.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      link: "/health-conditions/cancer-care/cancer-care-resources/managing-side-effects-during-treatment"
    },
    {
      id: 3,
      title: "Building Your Support Network",
      description: "Creating a strong support system with family, friends, and community resources...",
      fullDescription: "Learn how to build and maintain a strong support network during your cancer journey. Discover resources for connecting with other cancer patients, finding support groups, and accessing community services. Includes guidance on communicating your needs to loved ones and finding professional counseling services when needed.",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      link: "/health-conditions/cancer-care/cancer-care-resources/building-support-network"
    }
  ];

  const openPopup = (resource) => {
    setSelectedCard(resource);
  };

  const closePopup = () => {
    setSelectedCard(null);
  };

  return (
    <div className="min-h-screen relative">
      {/* Background with your specified gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-orange-50">
        {/* Subtle animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-16 h-16 bg-purple-200 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-12 h-12 bg-orange-200 rounded-full animate-bounce"></div>
          <div className="absolute bottom-32 left-1/4 w-10 h-10 bg-purple-300 rounded-full animate-pulse delay-1000"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header - Exact as shown */}
        <div className={`mb-8 transform transition-all duration-800 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 tracking-wide">
            CANCER CARE RESOURCES
          </h1>
          <hr className="border-t-2 border-gray-300 w-full" />
        </div>

        {/* Main Grid Layout - Exactly as image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Large Guide Card */}
          <div className={`lg:col-span-1 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group"
                 onClick={() => openPopup({
                   id: 'main',
                   title: 'Comprehensive Cancer Care Guide',
                   description: 'Your complete resource for navigating cancer treatment and care.',
                   fullDescription: 'This comprehensive guide provides essential information about cancer care, from understanding your diagnosis through treatment planning and recovery. Learn about different treatment options including surgery, chemotherapy, radiation therapy, immunotherapy, and targeted therapies. Discover how to work with your healthcare team, manage treatment side effects, maintain nutrition and wellness, and access support resources for you and your family.',
                   image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
                   link: "/health-conditions/cancer-care/cancer-care-resources/comprehensive-cancer-care-guide"
                 })}>
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Healthcare team providing cancer care"
                  className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
              </div>
              <div className="p-6">
                <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 group-hover:text-purple-700 transition-colors duration-300">
                  Comprehensive Cancer Care Guide
                </h2>
                <p className="text-gray-600 text-sm md:text-base">
                  Your complete resource for navigating cancer treatment and care.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Resource Cards exactly as image layout */}
          <div className={`lg:col-span-1 space-y-6 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
            {resources.map((resource, index) => (
              <div 
                key={resource.id}
                className="flex bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group"
                onClick={() => openPopup(resource)}
                style={{
                  animationDelay: `${index * 150}ms`
                }}
              >
                {/* Image - Square format as in original */}
                <div className="relative w-32 h-24 flex-shrink-0 overflow-hidden">
                  <img 
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-orange-500/0 group-hover:from-purple-500/20 group-hover:to-orange-500/20 transition-all duration-300"></div>
                </div>
                
                {/* Text Content */}
                <div className="p-4 flex-1">
                  <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-purple-700 transition-colors duration-300">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {resource.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {selectedCard && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform animate-slideUp">
            {/* Popup Header with Image */}
            <div className="relative h-64 overflow-hidden">
              <img 
                src={selectedCard.image}
                alt={selectedCard.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/80 to-orange-500/80"></div>
              <button
                onClick={closePopup}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="absolute bottom-4 left-6 right-6">
                <h2 className="text-2xl font-bold text-white mb-2">
                  {selectedCard.title}
                </h2>
              </div>
            </div>
            
            {/* Popup Content */}
            <div className="p-6">
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                {selectedCard.fullDescription}
              </p>
              <div className="flex justify-end space-x-3">
                <button
                  onClick={closePopup}
                  className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors duration-200"
                >
                  Close
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-orange-500 text-white rounded-lg hover:from-purple-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                  <Link to={selectedCard.link}>
                  <span>Learn More</span>
                  </Link>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to { 
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-slideUp {
          animation: slideUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
      `}</style>
    </div>
  );
};

export default CancerCareResources;