import React, { useState, useEffect } from 'react';
import { Play, Heart, Share2, BookOpen, Clock, User, X, ChevronRight, Star, Zap, Target, Dumbbell } from 'lucide-react';

const HealthlineFitnessPage = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showSharePopup, setShowSharePopup] = useState(false);
  const [likedArticles, setLikedArticles] = useState(new Set());

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleLike = (articleId) => {
    const newLiked = new Set(likedArticles);
    if (newLiked.has(articleId)) {
      newLiked.delete(articleId);
    } else {
      newLiked.add(articleId);
    }
    setLikedArticles(newLiked);
  };

  const articles = [
    {
      id: 1,
      title: "10 Exercises to Tone Every Inch of Your Body",
      description: "We've rounded up the 10 best and most powerful exercises to do every single...",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
      category: "Full Body",
      readTime: "8 min read",
      difficulty: "Intermediate"
    },
    {
      id: 2,
      title: "The Best Core Exercises for All Fitness Levels",
      description: "Strengthening your core muscles helps stabilize your body and support your...",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=250&fit=crop",
      category: "Core Training",
      readTime: "6 min read",
      difficulty: "All Levels"
    },
    {
      id: 3,
      title: "A Beginner's Guide to Weight Training",
      description: "Weight training is an excellent way to build muscle mass and tone your body...",
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=250&fit=crop",
      category: "Weight Training",
      readTime: "12 min read",
      difficulty: "Beginner"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 right-10 w-40 h-40 bg-purple-100 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-pink-100 rounded-full opacity-25 animate-pulse delay-1000"></div>
      </div>

      {/* Hero Section */}
      <section className={`relative bg-gradient-to-r from-amber-200 via-orange-200 to-yellow-200 overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container mx-auto px-4 py-8 lg:py-16">
          <div className="flex flex-wrap items-center justify-between relative">
            {/* People Images - Left Side */}
            <div className={`flex items-center space-x-4 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              {/* Two people stretching */}
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=120&h=120&fit=crop&crop=face" 
                  alt="Person stretching" 
                  className="w-20 h-20 lg:w-24 lg:h-24 rounded-full object-cover border-4 border-white shadow-lg"
                />
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=120&h=120&fit=crop&crop=face" 
                  alt="Person exercising" 
                  className="w-20 h-20 lg:w-24 lg:h-24 rounded-full object-cover border-4 border-white shadow-lg"
                />
              </div>
              
              {/* Person pointing */}
              <div className="relative ml-8">
                <img 
                  src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=150&h=150&fit=crop&crop=face" 
                  alt="Fitness instructor" 
                  className="w-24 h-24 lg:w-32 lg:h-32 rounded-full object-cover border-4 border-white shadow-lg"
                />
              </div>
            </div>

            {/* Center Content - Teal Circle with Text */}
            <div className={`flex-1 flex justify-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
              <div className="bg-teal-500 rounded-full w-64 h-64 lg:w-80 lg:h-80 flex flex-col items-center justify-center text-white relative">
                <div className="text-center">
                  <div className="text-sm lg:text-base font-medium mb-2">healthline</div>
                  <div className="text-4xl lg:text-6xl font-bold mb-2">Fitness</div>
                  <div className="text-lg lg:text-xl">The fitness that fits you</div>
                </div>
              </div>
            </div>

            {/* People Images - Right Side */}
            <div className={`flex items-center space-x-4 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              {/* Person with wheelchair */}
              <div className="relative mr-8">
                <img 
                  src="https://images.unsplash.com/photo-1594736797933-d0301ba6fe65?w=150&h=150&fit=crop&crop=face" 
                  alt="Adaptive fitness" 
                  className="w-24 h-24 lg:w-32 lg:h-32 rounded-full object-cover border-4 border-white shadow-lg"
                />
              </div>
              
              {/* Person with weights */}
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=120&h=120&fit=crop&crop=face" 
                  alt="Weight training" 
                  className="w-20 h-20 lg:w-24 lg:h-24 rounded-full object-cover border-4 border-white shadow-lg"
                />
              </div>
              
              {/* Person cycling */}
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=120&h=120&fit=crop&crop=face" 
                  alt="Cycling" 
                  className="w-20 h-20 lg:w-24 lg:h-24 rounded-full object-cover border-4 border-white shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="container mx-auto px-4 py-16">
        <div className={`transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-800">FEATURED</h2>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Main Featured Article */}
            <div className="group cursor-pointer" onClick={() => setSelectedArticle({
              id: 'main',
              title: 'Welcome to Healthline Fitness: A Letter from the Editor',
              description: 'Fitness isn\'t about what you can lose. It\'s about what you can gain.',
              image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
              category: 'Editorial',
              readTime: '5 min read',
              difficulty: 'All Levels'
            })}>
              <div className="relative overflow-hidden rounded-2xl mb-6 transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop" 
                  alt="Woman doing deadlifts in gym"
                  className="w-full aspect-video object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleLike('main');
                    }}
                    className={`p-2 rounded-full transition-all duration-300 ${
                      likedArticles.has('main') ? 'bg-red-500 text-white' : 'bg-white text-gray-600'
                    }`}
                  >
                    <Heart size={20} fill={likedArticles.has('main') ? 'white' : 'none'} />
                  </button>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-teal-600 transition-colors">
                Welcome to Healthline Fitness: A Letter from the Editor
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Fitness isn't about what you can lose. It's about what you can gain.
              </p>
            </div>

            {/* Article List */}
            <div className="space-y-6">
              {articles.map((article, index) => (
                <div
                  key={article.id}
                  className="group cursor-pointer bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  onClick={() => setSelectedArticle(article)}
                >
                  <div className="flex gap-4">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-teal-600 transition-colors">
                        {article.title}
                      </h4>
                      <p className="text-gray-600 text-sm mb-3">{article.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-gray-500">{article.readTime}</span>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleLike(article.id);
                          }}
                          className={`p-2 rounded-full transition-all duration-300 ${
                            likedArticles.has(article.id) ? 'bg-red-100 text-red-500' : 'bg-gray-100 text-gray-400'
                          }`}
                        >
                          <Heart size={16} fill={likedArticles.has(article.id) ? 'currentColor' : 'none'} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Article Detail Popup */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transform animate-scale-in shadow-2xl">
            <div className="relative">
              <img 
                src={selectedArticle.image} 
                alt={selectedArticle.title}
                className="w-full aspect-video object-cover"
              />
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-teal-100 text-teal-700 px-3 py-2 rounded-full text-sm font-medium">
                  {selectedArticle.category}
                </span>
                <span className="text-gray-500 text-sm flex items-center gap-1">
                  <Clock size={14} />
                  {selectedArticle.readTime}
                </span>
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">{selectedArticle.title}</h2>
              <p className="text-gray-600 leading-relaxed mb-6">{selectedArticle.description}</p>
              <div className="flex gap-4">
                <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2">
                  <BookOpen size={18} />
                  Read Full Article
                </button>
                <button
                  onClick={() => toggleLike(selectedArticle.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
                    likedArticles.has(selectedArticle.id)
                      ? 'bg-red-100 text-red-600 hover:bg-red-200'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <Heart size={18} fill={likedArticles.has(selectedArticle.id) ? 'currentColor' : 'none'} />
                  {likedArticles.has(selectedArticle.id) ? 'Liked' : 'Like'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Share Popup */}
      {showSharePopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-8 max-w-md w-full transform animate-scale-in shadow-2xl">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Share2 className="text-teal-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Share Healthline Fitness</h3>
              <p className="text-gray-600 mb-6">
                Help others discover fitness content that fits their lifestyle!
              </p>
              <div className="flex gap-3 justify-center mb-6">
                <button className="bg-blue-400 hover:bg-blue-500 text-white p-3 rounded-lg transition-colors">
                  <Share2 size={20} />
                </button>
                <button className="bg-green-400 hover:bg-green-500 text-white p-3 rounded-lg transition-colors">
                  <Share2 size={20} />
                </button>
                <button className="bg-pink-400 hover:bg-pink-500 text-white p-3 rounded-lg transition-colors">
                  <Share2 size={20} />
                </button>
              </div>
              <button
                onClick={() => setShowSharePopup(false)}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-lg transition-colors duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default HealthlineFitnessPage;