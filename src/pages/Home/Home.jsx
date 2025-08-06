import React, { useRef } from 'react'
import HeroSection from './Components/Hero'
import PopularCategories from './Components/PopularCategories'
import TrendingBlogs from './Components/TrendingBlogs'
import LatestBlog from './Components/LatestBlog'
import FAQAccordion from './Components/FAQAccordion'


function Home() {

  const trendingRef = useRef(null);

  const scrollToTrending = () => {
    trendingRef.current?.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <div>
      <HeroSection onStartReadingClick={scrollToTrending}/>
      {/* <PopularCategories /> */}
      <div ref={trendingRef}>
        <TrendingBlogs />
      </div>
      <LatestBlog />
      <FAQAccordion />
    </div>
  )
}

export default Home