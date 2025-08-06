import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// Import required modules
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

const PortfolioShowcase = () => {
  const portfolioItems = [
    {
      id: 1,
      image: '/api/placeholder/800/500',
      title: 'Healthcare Platform',
      description: 'A unified platform connecting patients, doctors and diagnostic labs'
    },
    {
      id: 2,
      image: '/api/placeholder/800/500',
      title: 'Urgent Taxis',
      description: 'Taxi booking service with self-drive car options'
    },
    {
      id: 3,
      image: '/api/placeholder/800/500',
      title: 'Resume Writing Service',
      description: 'Professional resume writing platform'
    },
    {
      id: 4,
      image: '/api/placeholder/800/500',
      title: 'E-commerce Solution',
      description: 'Full-featured online shopping platform'
    },
    {
      id: 5,
      image: '/api/placeholder/800/500',
      title: 'Education Portal',
      description: 'Learning management system for schools'
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center py-20">
      {/* Portfolio Header */}
      <div className="text-center mb-16 px-4">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-lime-400 text-xl">✦</span>
          <h2 className="uppercase font-bold tracking-wider">PORTFOLIO</h2>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-5xl mx-auto">
          Crafting Success Stories with <span className="text-lime-400">Digital Solutions</span> & 
          <span className="text-lime-400 block md:inline"> Stunning Designs</span>
        </h1>
      </div>
      
      {/* Hero Image */}
      <div className="relative w-full mb-12">
        <img 
          src="/api/placeholder/400/500" 
          alt="Futuristic character" 
          className="mx-auto h-64 md:h-80 object-contain"
        />
      </div>
      
      {/* Portfolio Slider */}
      <div className="w-full max-w-6xl px-4">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 10,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="mySwiper"
        >
          {portfolioItems.map((item) => (
            <SwiperSlide key={item.id} className="max-w-lg">
              <div className="relative bg-white rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 shadow-xl">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="text-sm text-gray-200">{item.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      {/* Scroll to top button (matching the one in your image) */}
      <div className="fixed bottom-8 right-8">
        <button className="w-12 h-12 rounded-full bg-transparent border-2 border-lime-400 text-lime-400 flex items-center justify-center hover:bg-lime-400/20 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PortfolioShowcase;