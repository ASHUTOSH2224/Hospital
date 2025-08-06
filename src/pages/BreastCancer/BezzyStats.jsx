import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const BezzyStats = () => {
  const [isVisible, setIsVisible] = useState(false);

  const stats = [
    {
      number: 254,
      suffix: 'k',
      label: 'Friendships Made',
      delay: 0.2
    },
    {
      number: 146,
      suffix: 'k',
      label: 'Questions\nAnswered',
      delay: 0.4
    },
    {
      number: 600,
      suffix: '+',
      label: 'Conversations\nSparked',
      delay: 0.6
    },
    {
      number: 100,
      suffix: '+',
      label: 'Discover Articles',
      delay: 0.8
    }
  ];

  // Counter animation hook
  const useCounter = (end, duration = 2000, delay = 0) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      const timer = setTimeout(() => {
        let startTime;
        const animate = (timestamp) => {
          if (!startTime) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / duration, 1);
          
          const easeOutQuart = 1 - Math.pow(1 - progress, 4);
          setCount(Math.floor(easeOutQuart * end));

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };
        requestAnimationFrame(animate);
      }, delay);

      return () => clearTimeout(timer);
    }, [end, duration, delay, isVisible]);

    return count;
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16">
          {stats.map((stat, index) => {
            const count = useCounter(stat.number, 2000, stat.delay * 1000);
            
            return (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: stat.delay }}
              >
                <motion.div 
                  className="text-4xl lg:text-5xl xl:text-4xl font-bold text-gray-900 mb-2"
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: stat.delay + 0.2 }}
                >
                  {count}{stat.suffix}
                </motion.div>
                <div className="text-gray-600 text-sm lg:text-base font-medium leading-tight whitespace-pre-line">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bezzy Logo */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <div className="inline-flex items-center">
            <span className="text-3xl lg:text-4xl font-bold text-gray-900">bezzy</span>
            <span className="text-2xl lg:text-3xl font-bold text-pink-600 ml-1">BC</span>
          </div>
        </motion.div>

        {/* Decorative Line */}
        <motion.div 
          className="w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 via-blue-500 via-green-500 to-pink-500 mt-8 rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 1.4 }}
        />
      </div>
    </div>
  );
};

// Alternative version with more emphasis on the rainbow line
const BezzyStatsWithRainbow = () => {
  const [isVisible, setIsVisible] = useState(false);

  const stats = [
    {
      number: 254,
      suffix: 'k',
      label: 'Friendships Made',
      delay: 0.2
    },
    {
      number: 146,
      suffix: 'k',
      label: 'Questions\nAnswered',
      delay: 0.4
    },
    {
      number: 600,
      suffix: '+',
      label: 'Conversations\nSparked',
      delay: 0.6
    },
    {
      number: 100,
      suffix: '+',
      label: 'Discover Articles',
      delay: 0.8
    }
  ];

  const useCounter = (end, duration = 2000, delay = 0) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      const timer = setTimeout(() => {
        let startTime;
        const animate = (timestamp) => {
          if (!startTime) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / duration, 1);
          
          const easeOutQuart = 1 - Math.pow(1 - progress, 4);
          setCount(Math.floor(easeOutQuart * end));

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };
        requestAnimationFrame(animate);
      }, delay);

      return () => clearTimeout(timer);
    }, [end, duration, delay, isVisible]);

    return count;
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="bg-white py-20">
      {/* Rainbow stripe at top */}
      <motion.div 
        className="w-full h-2 bg-gradient-to-r from-pink-500 via-purple-500 via-blue-500 via-green-500 to-orange-500 mb-16"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
      />
      
      <div className="max-w-6xl mx-auto px-4">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16">
          {stats.map((stat, index) => {
            const count = useCounter(stat.number, 2500, stat.delay * 1000);
            
            return (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: stat.delay }}
              >
                <motion.div 
                  className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors duration-300"
                  initial={{ scale: 0.3 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: stat.delay + 0.3,
                    type: "spring",
                    stiffness: 100
                  }}
                >
                  {count}{stat.suffix}
                </motion.div>
                <motion.div 
                  className="text-gray-600 text-sm lg:text-base font-medium leading-tight whitespace-pre-line"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: stat.delay + 0.8 }}
                >
                  {stat.label}
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Bezzy Logo */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          <div className="inline-flex items-center hover:scale-105 transition-transform duration-300">
            <span className="text-3xl lg:text-4xl font-bold text-gray-900">bezzy</span>
            <span className="text-2xl lg:text-3xl font-bold text-pink-600 ml-1">BC</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BezzyStats;