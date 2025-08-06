import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    title: "Heart Disease: Study Finds Women Get Different Medical Advice Than Men",
    category: "Health",
    date: "10 May, 2024",
    readTime: "4 min read",
    image:
      "/red-heart-hands-woman.jpg",
    link: "/latest-blog/heart-disease-gender-differences"
  },
  {
    title: "Home Sanctuary, Creating Spaces for Relaxation and Renewal",
    category: "Lifestyle",
    date: "10 May, 2024",
    readTime: "9 min read",
    image:
      "/Sanctuary.webp",
    link: "/latest-blog/home-sanctuary-guide"
  },
  {
    title: "Quiz: Do You Know Your Heart-Healthy Foods?",
    category: "Health",
    date: "10 May, 2024",
    readTime: "12 min read",
    image:
      "/cleaning-friedge-732x549-thumbnail.jpg",
    link: "/latest-blog/heart-healthy-foods-quiz"
  },
  {
    title: "FAQ's about Blood Pressure And Health Health.",
    category: "Health",
    date: "10 May, 2024",
    readTime: "6 min read",
    image:
      "/Doctor-measuring-a-patients-blood-pressure-thumbnail.jpg",
    link: "/latest-blog/blood-pressure-faqs"
  },
  {
    title: "10 Ways to Boost Your Veggie Intake Without Salads",
    category: "Lifestyle",
    date: "10 May, 2024",
    readTime: "7 min read",
    image:
      "/mature-female-holding-green-smoothie-732-549-feature-thumb.jpg",
    link: "/latest-blog/boost-veggie-intake"
  },
  {
    title: "Best Exercise For Heart Issues.",
    category: "Lifestyle",
    date: "10 May, 2024",
    readTime: "10 min read",
    image:
      "/GettyImages-961271834-thumbnail-732x549.jpg",
    link: "/latest-blog/heart-healthy-exercises-guide"
  },
];

export default function LatestBlog() {
  return (
    <section className="bg-[#F3ECFC] py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8 lg:px-16 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-7xl flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 gap-4 sm:gap-0"
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
          Latest Blogs & News
        </h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="border border-purple-300 px-4 py-2 rounded-md text-purple-700 hover:bg-purple-100 transition-colors duration-200 text-sm sm:text-base whitespace-nowrap"
        >
          View More
        </motion.button>
      </motion.div>

      <div className="max-w-7xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {blogPosts.map((post, index) => (
          <Link to={post.link} key={index} className="group">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -8 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 h-full flex flex-col"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt="Blog Thumbnail"
                  className="w-full h-48 sm:h-52 lg:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-medium px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-lg">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 lg:p-6 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="truncate">{post.date}</span>
                  </div>

                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2 sm:mb-3 line-clamp-2 group-hover:text-orange-600 transition-colors duration-200 leading-tight">
                    {post.title}
                  </h3>

                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-auto">
                  <span className="inline-flex items-center gap-1.5 sm:gap-2 text-orange-600 font-medium text-xs sm:text-sm">
                    Read More
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform duration-200 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  <button
                    onClick={(e) => e.preventDefault()}
                    className="p-1.5 sm:p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 flex-shrink-0"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 hover:text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="h-1 bg-gradient-to-r from-orange-500 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}