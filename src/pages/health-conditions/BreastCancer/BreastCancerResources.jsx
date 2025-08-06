



import React, { useState, useEffect } from 'react';
import { X, ArrowRight } from 'lucide-react';

const BreastCancerResources = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const resources = [
    {
      id: 1,
      title: "My Breast Cancer Diagnosis",
      description: "Author Ann Pietrangelo explains why her diagnosis experience felt like falling...",
      fullDescription: "A deeply personal account of the emotional journey through breast cancer diagnosis. Ann shares her initial fears, the overwhelming information, and how she found strength to move forward. This story provides comfort and understanding for those facing similar experiences.",
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      title: "Understanding the Stages of Breast Cancer",
      description: "The stage and grade of your breast cancer can help to determine treatment...",
      fullDescription: "A comprehensive guide to breast cancer staging and grading systems. Learn about TNM classification, stage 0-IV characteristics, and how staging influences treatment decisions. Essential knowledge for patients and families navigating treatment options.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      title: "How I Learned to Accept Help After My Breast Cancer Diagnosis",
      description: "It can be hard but necessary for independent people to accept help afte...",
      fullDescription: "An inspiring story about overcoming pride and learning to lean on others during treatment. Discover practical strategies for building your support network, communicating needs effectively, and finding balance between independence and accepting care.",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
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
            NEWLY DIAGNOSED
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
                   title: 'A Comprehensive Guide to Breast Cancer',
                   description: 'An end-to-end guide on breast cancer. Learn more here.',
                   fullDescription: 'This comprehensive guide covers everything you need to know about breast cancer, from initial diagnosis through treatment options and recovery. Learn about types of breast cancer, treatment approaches, side effects management, and support resources available to you and your family.',
                   image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
                 })}>
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Doctor consulting with patient"
                  className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
              </div>
              <div className="p-6">
                <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 group-hover:text-purple-700 transition-colors duration-300">
                  A Comprehensive Guide to Breast Cancer
                </h2>
                <p className="text-gray-600 text-sm md:text-base">
                  An end-to-end guide on breast cancer. Learn more here.
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
                  <span>Learn More</span>
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

export default BreastCancerResources;