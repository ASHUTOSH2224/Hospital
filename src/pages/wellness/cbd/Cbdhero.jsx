import { useState, useEffect } from "react";
import {
  X,
  ChevronRight,
  Info,
  Star,
  ShoppingCart,
  Clock,
  User,
  BookOpen,
} from "lucide-react";
import { Link } from "react-router-dom";
import ContactPopup from "@/component/ContactPopup";

const CBDLayout = () => {
  const [selectedPopup, setSelectedPopup] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredArticle, setHoveredArticle] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);


  useEffect(() => {

    const timer = setTimeout(() => setIsContactPopupOpen(true), 1000);
    return () => clearTimeout(timer);

    setIsVisible(true);
  }, []);

  const closeContactPopup = () => {
    setIsContactPopupOpen(false);
  };

  const topCategories = [
    {
      id: 1,
      title: "Best CBD Gummies",
      image:
        "https://images.unsplash.com/photo-1582736704606-860ddb5c3320?w=300&h=200&fit=crop",
      colorFrom: "#3b82f6",
      colorTo: "#1e40af",
    },
    {
      id: 2,
      title: "Best CBD Gummies for Anxiety",
      image:
        "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=300&h=200&fit=crop",
      colorFrom: "#60a5fa",
      colorTo: "#2563eb",
    },
    {
      id: 3,
      title: "Best CBD Oils",
      image:
        "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=300&h=200&fit=crop",
      colorFrom: "#1d4ed8",
      colorTo: "#1e3a8a",
    },
    {
      id: 4,
      title: "Best CBD Creams",
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=200&fit=crop",
      colorFrom: "#2563eb",
      colorTo: "#1e40af",
    },
    {
      id: 5,
      title: "Best CBD Gummies for Pain",
      image:
        "https://images.unsplash.com/photo-1584362917165-526a968579e8?w=300&h=200&fit=crop",
      colorFrom: "#1e40af",
      colorTo: "#1e3a8a",
      //  link: "/article/cbd-what-we-know",
    },
  ];

  const articles = [
    {
      id: 1,
      title: "Cannabidiol (CBD): What We Know and What We Don't",
      description:
        "CBD is a cannabinoid substance in the cannabis plant along with THC. Both cannabinoids have therapeutic properties, but research is still ongoing to understand their full potential.",
      image:
        "https://media.post.rvohealth.io/wp-content/uploads/2023/04/close-up-woman-mouth-open-CBD-cannabis-oil-eye-dropper-732x549-thumbnail-732x549.jpg",
      category: "Research",
      readTime: "5 min read",
       link: "/wellness/cbd/learn-more-about-cbd/Cannabidiol-(CBD):-What-We-Know-and-What-We-Don't",
      author: "Dr. Sarah Johnson",
    },
    {
      id: 2,
      title: "What to Know About Different Types of CBD",
      description:
        "There are three types of CBD that come in many different forms and products. Here's what you need to know about full-spectrum, broad-spectrum, and isolate CBD products.",
      image:
        "https://media.post.rvohealth.io/wp-content/uploads/2024/07/3692910-What-to-Know-About-Different-Types-of-CBD-732x549-Feature.jpg",
      category: "Guide",
      readTime: "3 min read",
      author: "Michael Chen",
       link: "/wellness/cbd/learn-more-about-cbd/What-do-you-know-about-different-types-of-CBD",
    },
    {
      id: 3,
      title: "6 Health Benefits of CBD Oil — and a Look at Side Effects",
      description:
        "Cannabidiol, or CBD, is a chemical compound in cannabis with a variety of uses. Here are 6 potential health benefits backed by scientific research.",
      image:
        "https://th.bing.com/th/id/OIP.rCx6abFg8PnyEEc4jj3QzQHaEo?w=250&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      category: "Health",
      readTime: "7 min read",
      author: "Dr. Emily Rodriguez",
       link: "/wellness/cbd/learn-more-about-cbd/cbd-oil-benefits",
    },
    {
      id: 4,
      title: "How Much CBD Should I Take the First Time?",
      description:
        "New to CBD? Figuring out your most effective dose usually takes some trial and error. Here's a beginner's guide to finding your optimal CBD dosage.",
      image:
        "https://th.bing.com/th/id/OIP.UVkaX9qqUkw44n81Ixd41QHaHi?w=116&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      category: "Beginner",
      readTime: "4 min read",
      author: "Jessica Wilson",
       link: "/wellness/cbd/how-much-cbd-should-i-take-the-first-time",
    },
    {
      id: 5,
      title: "Using CBD Oil for Anxiety: Does It Work?",
      description:
        "Find out what the research says about CBD oil and anxiety. Also get the facts on how it might help with stress management and relaxation.",
      image:
        "https://th.bing.com/th/id/OIP.MF1ABCZwOMYtL4WXIlefLwHaHa?w=167&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      category: "Mental Health",
      readTime: "6 min read",
      author: "Dr. Mark Thompson",
       link: "/wellness/cbd/best-cbd-oil-for-anxiety",
    },
    {
      id: 6,
      title: "Using CBD Oil for Pain Management: Does It Work?",
      description:
        "Cannabidiol (CBD) oil, made from cannabis, is sometimes used for chronic pain. We'll explore what current research tells us about its effectiveness.",
      image:
        "https://th.bing.com/th/id/OIP.DpkTsbpIZranHZN9IKNb3QHaHa?w=61&h=61&c=1&rs=1&qlt=70&r=0&o=7&dpr=1.3&pid=InlineBlock&rm=3",
      category: "Pain Relief",
      readTime: "8 min read",
      author: "Dr. Lisa Park",
       link: "/wellness/cbd/cbd-oil-for-pain",
    },
  ];

  const popupContent = {
    1: {
      title: "Best CBD Gummies 2024",
      content:
        "Discover our top-rated CBD gummies for relaxation and wellness. Made with premium hemp extract and natural flavors for the perfect daily dose.",
      features: [
        "Third-party lab tested",
        "Full spectrum CBD",
        "Organic ingredients",
        "Vegan & gluten-free",
      ],
      price: "$29.99",
      rating: 4.8,
      reviews: 1247,
    },
    2: {
      title: "CBD Gummies for Anxiety",
      content:
        "Specially formulated CBD gummies designed to help manage daily stress and promote calm feelings throughout your day.",
      features: [
        "25mg CBD per gummy",
        "L-theanine added",
        "Fast-acting formula",
        "Non-drowsy formula",
      ],
      price: "$34.99",
      rating: 4.9,
      reviews: 892,
    },
    3: {
      title: "Premium CBD Oils",
      content:
        "High-quality CBD oil tinctures for precise dosing and maximum bioavailability. Perfect for those who prefer liquid CBD.",
      features: [
        "Multiple strengths available",
        "MCT oil base",
        "Easy dropper bottle",
        "Natural mint flavor",
      ],
      price: "$49.99",
      rating: 4.7,
      reviews: 2156,
    },
    4: {
      title: "CBD Topical Creams",
      content:
        "Targeted relief with our CBD-infused creams and balms for localized comfort and skin nourishment.",
      features: [
        "1000mg CBD per jar",
        "Cooling menthol",
        "Fast absorption",
        "No greasy residue",
      ],
      price: "$39.99",
      rating: 4.6,
      reviews: 743,
    },
    5: {
      title: "CBD Gummies for Pain",
      content:
        "Powerful CBD gummies enhanced with natural pain-fighting ingredients for targeted comfort support.",
      features: [
        "Extra strength formula",
        "Turmeric & ginger",
        "Long-lasting relief",
        "Delicious berry flavor",
      ],
      price: "$44.99",
      rating: 4.8,
      reviews: 1089,
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 ">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-60 right-40 w-24 h-24 bg-gradient-to-r from-blue-200 to-teal-200 rounded-full opacity-40 animate-bounce"></div>
        <div className="absolute bottom-40 left-60 w-40 h-40 bg-gradient-to-r from-green-200 to-blue-200 rounded-full opacity-20 animate-pulse"></div>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-100 via-purple-50 to-pink-100 py-12 sm:py-16 md:py-20 pt-32 md:pt-36">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-200/20 to-purple-200/20"></div>
        <div
          className={`relative max-w-6xl mx-auto px-4 sm:px-6 text-center transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent mb-4 sm:mb-6 leading-tight">
            Best CBD Gummies of 2024 &
            <br />
            Other CBD Tips
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto px-4">
            Everything you need to know about CBD types, safety, efficacy, and
            products
          </p>
        </div>
      </div>

      {/* Top Categories */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 -mt-6 sm:-mt-8 md:-mt-10 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
          {topCategories.map((category, index) => (
            <div
              key={category.id}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-700 hover:scale-105 hover:shadow-2xl ${
                hoveredCard === category.id
                  ? "shadow-2xl scale-105"
                  : "shadow-lg"
              }`}
              style={{
                background: `linear-gradient(135deg, ${category.colorFrom}, ${category.colorTo})`,
                animationDelay: `${index * 200}ms`,
              }}
              onMouseEnter={() => setHoveredCard(category.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => setSelectedPopup(category.id)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 group-hover:from-white/20 group-hover:to-white/10 transition-all duration-500"></div>

              {/* Image */}
              <div className="relative z-10 h-32 sm:h-36 md:h-40 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent group-hover:from-black/30 transition-all duration-500"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-4 sm:p-6">
                <h3 className="text-white font-bold text-sm sm:text-base md:text-lg leading-tight group-hover:text-yellow-100 transition-colors duration-300">
                  {category.title}
                </h3>
                <div
                  className={`mt-3 sm:mt-4 flex items-center justify-between transform transition-all duration-500 ${
                    hoveredCard === category.id
                      ? "translate-y-0 opacity-100"
                      : "translate-y-2 opacity-0"
                  }`}
                >
                  <span className="text-white/80 text-xs sm:text-sm">
                    Learn More
                  </span>
                  <ChevronRight className="text-white" size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Learn More Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
            LEARN MORE ABOUT CBD
          </h2>
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {articles.map((article, index) => (
            <div
              key={article.id}
              className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-700 border border-gray-100 ${
                hoveredArticle === article.id ? "ring-2 ring-blue-200" : ""
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredArticle(article.id)}
              onMouseLeave={() => setHoveredArticle(null)}
            >
              <div className="flex flex-col sm:flex-row">
                {/* Image */}
                <div className="flex-shrink-0 w-full sm:w-32 h-48 sm:h-32 sm:m-4 overflow-hidden sm:rounded-xl">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-xs font-semibold rounded-full">
                      {article.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-xs">
                      <Clock size={12} className="mr-1" />
                      {article.readTime}
                    </div>
                  </div>

                  <h3 className="font-bold text-base sm:text-lg mb-2 text-gray-800 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-3 line-clamp-3">
                    {article.description}
                  </p>

                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center text-gray-500 text-xs">
                      <User size={12} className="mr-1" />
                      <span className="hidden sm:inline">{article.author}</span>
                      <span className="sm:hidden">
                        {article.author.split(" ")[0]}
                      </span>
                    </div>
                    <Link
                      to={article.link || '#'}
                      className="flex items-center text-blue-600 font-semibold hover:text-purple-600 transition-colors duration-300 text-sm"
                    >
                      <BookOpen size={14} className="mr-1" />
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Popup Modal */}
      {selectedPopup && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-white rounded-3xl max-w-sm sm:max-w-md lg:max-w-lg w-full max-h-[90vh] overflow-y-auto transform animate-scale-in shadow-2xl">
            {/* Header with gradient */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-700 p-4 sm:p-6 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
              <div className="relative z-10 flex justify-between items-start">
                <div className="flex-1 pr-4">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 leading-tight">
                    {popupContent[selectedPopup]?.title}
                  </h3>
                  <div className="flex items-center flex-wrap">
                    <div className="flex items-center mr-3 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`${
                            i < Math.floor(popupContent[selectedPopup]?.rating)
                              ? "text-yellow-300 fill-current"
                              : "text-gray-300"
                          }`}
                          size={14}
                        />
                      ))}
                    </div>
                    <span className="text-sm">
                      {popupContent[selectedPopup]?.rating}/5 (
                      {popupContent[selectedPopup]?.reviews} reviews)
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedPopup(null)}
                  className="text-white/80 hover:text-white p-2 hover:bg-white/20 rounded-full transition-all duration-300 flex-shrink-0"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 sm:p-6">
              <p className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base">
                {popupContent[selectedPopup]?.content}
              </p>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center text-sm sm:text-base">
                  <Info size={16} className="mr-2 text-blue-500" />
                  Key Features:
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  {popupContent[selectedPopup]?.features.map(
                    (feature, index) => (
                      <div
                        key={index}
                        className="flex items-center p-2 sm:p-3 bg-gray-50 rounded-lg"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    )
                  )}
                </div>
              </div>

              <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-4 rounded-xl">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                      {popupContent[selectedPopup]?.price}
                    </span>
                    <div className="text-xs sm:text-sm text-gray-500">
                      Free shipping on orders $50+
                    </div>
                  </div>
                  <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 flex items-center shadow-lg text-sm sm:text-base">
                    <ShoppingCart size={16} className="mr-2" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
        .animate-scale-in {
          animation: scale-in 0.4s ease-out;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>

<ContactPopup isOpen={isContactPopupOpen} onClose={closeContactPopup} />

    </div>
  );
};

export default CBDLayout;
