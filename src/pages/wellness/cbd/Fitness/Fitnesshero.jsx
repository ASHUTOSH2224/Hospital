import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart, BookOpen, Clock, X } from 'lucide-react';
import ContactPopup from '@/component/ContactPopup';

const HealthlineFitnessPage = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [likedArticles, setLikedArticles] = useState(new Set());
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);


  useEffect(() => {

    setIsVisible(true);

    const timer = setTimeout(() => setIsContactPopupOpen(true), 1000);
    return () => clearTimeout(timer);


  }, []);

  const closeContactPopup = () => {
    setIsContactPopupOpen(false);
  };


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
      title: '7 Exercises to Tone Every Inch of Your Body',
      description: 'We\'ve rounded up the 10 best and most powerful exercises...',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop',
      category: 'Full Body',
      readTime: '8 min read',
      difficulty: 'Intermediate',
      link: '/wellness/Fitness/top-10-exercises'
    },
    {
      id: 2,
      title: 'The Best Core Exercises for All Fitness Levels',
      description: 'Strengthening your core muscles helps stabilize your body...',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=250&fit=crop',
      category: 'Core Training',
      readTime: '6 min read',
      difficulty: 'All Levels',
      link: '/wellness/Fitness/The-Best-Core-Exercises-for-All-Fitness-Levels'
    },
    {
      id: 3,
      title: 'A Beginner\'s Guide to Weight Training',
      description: 'Weight training is an excellent way to build muscle...',
      image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=250&fit=crop',
      category: 'Weight Training',
      readTime: '12 min read',
      difficulty: 'Beginner',
      link: '/wellness/Fitness/A-Beginners-Guide-to-Weight-Training'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden pt-32 md:pt-32">
      {/* Background Circles Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-1/2 right-10 w-40 h-40 bg-purple-100 rounded-full opacity-30 animate-float"></div>
        <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-pink-100 rounded-full opacity-25 animate-float delay-1000"></div>
      </div>

      {/* Featured Section */}
      <section className="container mx-auto px-4 py-16">
        <div>
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-800">FEATURED</h2>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Main Featured Article */}
            <div
              className="group cursor-pointer"
              onClick={() =>
                setSelectedArticle({
                  id: 'main',
                  title: 'Welcome to Healthline Fitness: A Letter from the Editor',
                  description: "Fitness isn't about what you can lose. It's about what you can gain.",
                  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEdvBKOxKqNJQlXirE6xm1CJgSQMK-2X1iew&s',
                  category: 'Editorial',
                  readTime: '5 min read',
                  difficulty: 'All Levels',
                  link: '/wellness/Fitness/Welcome-to-Healthline-Fitness'
                })
              }
            >
              <div className="relative overflow-hidden rounded-2xl mb-6 transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEdvBKOxKqNJQlXirE6xm1CJgSQMK-2X1iew&s"
                  alt="Main"
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
              {articles.map((article) => (
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
                        <span className="text-xs text-gray-500">{article.readTime}</span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleLike(article.id);
                          }}
                          className={`p-2 rounded-full transition-all duration-300 ${
                            likedArticles.has(article.id)
                              ? 'bg-red-100 text-red-500'
                              : 'bg-gray-100 text-gray-400'
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
                <Link
                  to={selectedArticle.link}
                  className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2"
                >
                  <BookOpen size={18} />
                  Read Full Article
                </Link>
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

      {/* Custom Styles */}
      <style jsx="true">{`
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
<ContactPopup isOpen={isContactPopupOpen} onClose={closeContactPopup} />

    </div>
  );
};

export default HealthlineFitnessPage;
