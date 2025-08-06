import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, ChevronUp, TrendingUp, Newspaper, Users, Clock, Globe, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const NewsFooter = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [hoveredStat, setHoveredStat] = useState(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [showSubscribeSuccess, setShowSubscribeSuccess] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  // scroll to top
  // useEffect(() => {
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // })

  const handleNewsletterSubmit = () => {
    if (newsletterEmail.trim()) {
      setShowSubscribeSuccess(true);
      setNewsletterEmail('');
      setTimeout(() => setShowSubscribeSuccess(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const stats = [
    { icon: TrendingUp, label: 'Daily Readers', value: '2.5M+', color: 'text-orange-600' },
    { icon: Newspaper, label: 'Articles Published', value: '15K+', color: 'text-pink-600' },
    { icon: Users, label: 'Newsletter Subscribers', value: '500K+', color: 'text-yellow-600' }
  ];

  const features = [
    { icon: Clock, title: 'Real-time Updates', description: '24/7 breaking news coverage' },
    { icon: Globe, title: 'Global Coverage', description: 'Stories from around the world' },
    { icon: Award, title: 'Award-winning', description: 'Trusted journalism since 2010' }
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-orange-50 to-pink-50"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-200/30 to-pink-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-yellow-200/30 to-orange-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-pink-200/20 to-yellow-200/20 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className={`relative z-10 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        {/* Stats Section */}
        <div className="border-b border-orange-200/50 py-8">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center group cursor-pointer"
                  onMouseEnter={() => setHoveredStat(index)}
                  onMouseLeave={() => setHoveredStat(null)}
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-lg mb-4 transition-all duration-300 ${hoveredStat === index ? 'scale-110 shadow-xl' : ''}`}>
                    <stat.icon className={`w-8 h-8 ${stat.color} transition-all duration-300 ${hoveredStat === index ? 'animate-bounce' : ''}`} />
                  </div>
                  <h3 className={`text-3xl font-bold mb-2 transition-all duration-300 ${hoveredStat === index ? 'scale-105' : ''} ${stat.color}`}>
                    {stat.value}
                  </h3>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>



        {/* Main Footer Content */}
        <div className="py-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              
              {/* About Section */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 relative">
                  US News Central
                  <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full"></div>
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Your trusted source for breaking news, in-depth analysis, and trending stories across America. Stay informed with real-time updates.
                </p>
                
                {/* Social Media */}
                {/* <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-gray-800">Follow Us</h4>
                  <div className="flex space-x-3">
                    {[
                      { Icon: Facebook, name: 'Facebook', color: 'hover:bg-blue-600' },
                      { Icon: Twitter, name: 'Twitter', color: 'hover:bg-sky-600' },
                      { Icon: Instagram, name: 'Instagram', color: 'hover:bg-pink-600' },
                      { Icon: Youtube, name: 'YouTube', color: 'hover:bg-red-600' }
                    ].map(({ Icon, name, color }, index) => (
                      <a
                        key={index}
                        href="#"
                        className={`w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 hover:-translate-y-1 group ${color} hover:text-white`}
                        title={name}
                      >
                        <Icon className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors duration-300" />
                      </a>
                    ))}
                  </div>
                </div> */}

                {/* Contact Info - Compact */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-gray-600 hover:text-orange-600 transition-colors duration-300">
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">contact@usnewscentral.com</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600 hover:text-orange-600 transition-colors duration-300">
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">+1 (555) 123-NEWS</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600 hover:text-orange-600 transition-colors duration-300">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">New York, NY</span>
                  </div>
                </div>
              </div>

              {/* Newsletter Section */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 relative">
                  Stay Updated
                  <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-yellow-500 to-pink-500 rounded-full"></div>
                </h3>
                
                {/* Newsletter Form */}
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-orange-100">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Newsletter Subscription</h4>
                  <p className="text-gray-600 mb-4 text-sm">Get the latest news delivered to your inbox.</p>
                  
                  <div className="relative">
                    <div className="space-y-3">
                      <input
                        type="email"
                        value={newsletterEmail}
                        onChange={(e) => setNewsletterEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="w-full px-4 py-3 rounded-lg border border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200/50 outline-none transition-all duration-300 mb-5"
                      />
                      <Link to={'/contact-page'} >
                      <button
                        onClick={handleNewsletterSubmit}
                        className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        Subscribe Now
                      </button>
                      </Link>
                    </div>
                    
                    {/* Success popup */}
                    {showSubscribeSuccess && (
                      <div className="absolute top-full left-0 right-0 mt-3 p-3 bg-green-500 text-white rounded-lg shadow-lg animate-pulse">
                        <p className="text-center text-sm font-medium">Successfully subscribed! 🎉</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-orange-200/50 py-6 bg-white/30 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
              <p className="text-gray-600 text-center md:text-left text-sm">
                ©️ 2025 US News Central. All rights reserved. | 
                <Link to="/privacy-policy">
                <span className="hover:text-orange-600 transition-colors duration-300 ml-1 font-medium">Privacy Policy</span>
                </Link> | 
                <Link to="/terms-of-service">
                <span className="hover:text-orange-600 transition-colors duration-300 ml-1 font-medium">Terms of Service</span>
                </Link>
              </p>
              <div className="flex items-center space-x-2 text-gray-600 text-sm">
                <span>Made with</span>
                <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                <span>for informed citizens</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 z-50 animate-bounce"
        >
          <ChevronUp className="w-7 h-7 mx-auto" />
        </button>
      )}
    </footer>
  );
};

export default NewsFooter;