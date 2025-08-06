import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const TrendingBlogs = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 4;

    // Blog posts data (8 total)
    const blogPosts = [
        {
            id: 1,
            category: "Lifestyle",
            date: "10 May, 2024",
            title: "Quiz: What should I Eat For a Healthy Breakfast.",
            excerpt: "We promise there's a nutritious option that fits your lifestyle.",
            image: "/overhead-view-breakfast-plates-eggs-waffles-fruit-coffee-732x549-thumbnail.jpg",
            bgColor: "bg-purple-100",
            Link: "/blog/break-fast-quiz"
        },
        {
            id: 2,
            category: "Lifestyle",
            date: "10 May, 2024",
            title: "Getting Too Much and Too Little Sleep Can Hurt Your Heart.",
            excerpt: "Did you know that sleep can offset your risk of your heart attack?.",
            image: "/Female_Sleeping_732x549-thumbnail.jpg",
            bgColor: "bg-orange-100",
            Link: "/blog/sleep-heart-health-article"
        },
        {
            id: 3,
            category: "Lifestyle",
            date: "10 May, 2024",
            title: "Willson phillips'carnie wilson on living with depression",
            excerpt: "The point is that It Ebbs and Flows , and that's ok",
            image: "/carnie-wilson-732x549-thumbnail.jpg",
            bgColor: "bg-green-100",
            Link: "/blog/carnie-wilson-depression-article"
        },
        {
            id: 4,
            category: "Lifestyle",
            date: "10 May, 2024",
            title: "6 Healthier mini deserts",
            excerpt: "These little treat crumbles, cookies, truffles and even a latte.",
            image: "/4334234-6-Healthier-Mini-Desserts-thumbnail-732x549-1.jpg",
            bgColor: "bg-yellow-100",
            Link: "/blog/healthier-mini-desserts"
        },
        {
            id: 5,
            category: "Lifestyle",
            date: "09 May, 2024",
            title: "8 healthy cold snack for summer",
            excerpt: "Beat the summer heat with these 8 refreshing and healthy cold snacks that are perfect for staying cool and energized all day!",
            image: "/typical-brazilian-freezies-still-life.jpg",
            bgColor: "bg-blue-100",
            Link: "/blog/summer-cold-snacks-guide"
        },
        {
            id: 6,
            category: "Design",
            date: "09 May, 2024",
            title: "Why do i feel pain in my lower abdomen?",
            excerpt: "Lower abdominal pain can be caused by digestive issues, infections, or reproductive conditions, and should be evaluated if persistent or severe.",
            image: "/woman-sitting-chair-with-abdominal-pain-pressing-her-hand-her-stomach.jpg",
            bgColor: "bg-pink-100",
            Link: "/blog/lower-abdominal-pain-guide"
        },
        {
            id: 7,
            category: "Business",
            date: "08 May, 2024",
            title: "20 Paleo Dessert recipes.",
            excerpt: "Discover 20 delicious and guilt-free Paleo dessert recipes that satisfy your sweet tooth while keeping it clean and grain-free.",
            image: "/high-angle-delicious-food-concept (1).jpg",
            bgColor: "bg-indigo-100",
            Link: "/blog/parleo-dessert-recipes"
        },
        {
            id: 8,
            category: "Health",
            date: "08 May, 2024",
            title: "21 Dairy-Free Desserts",
            excerpt: "Indulge in sweet delights without the dairy—discover 21 creamy crave-worthy desserts perfect for a dairy-free lifestyle",
            image: "/layered-trifle-dessert-serving-glasses.jpg",
            bgColor: "bg-teal-100",
            Link: "/blog/dairy-free-dessert-recipes"
        }
    ];

    // Recent posts data
    const recentPosts = [
        {
            id: 1,
            title: "The 20 Best Low Carb Vegetables.",
            date: "10 May, 2024",
            image: "/avocado-tomato-tomatoes-732x549-thumbnail-732x549.jpg",
            link: "/recent-post/low-carb-vegetables-guide"
        },
        {
            id: 2,
            title: "Fruit And Vegetables Safety.",
            date: "09 May, 2024",
            image: "/food-safety-fruits-vegetables_thumb-1-732x549.jpg",
            link: "/recent-post/fruit-vegetable-safety-guide"
        },
        {
            id: 3,
            title: "17 creative ways to eat more vegetables.",
            date: "08 May, 2024",
            image: "/soup-kitchen-cooking-732x549-thumbnail-732x549.jpg",
            link: "/recent-post/creative-vegetable-ways"
        },
        {
            id: 4,
            title: "How to Eat More Vegetables for a Healthy Heart",
            date: "07 May, 2024",
            image: "/man-tossing-salad-lettuce-spinach-green-vegetables-732x549-thumbnail (1).jpg",
            link: "/recent-post/vegetable-heart-health-guide"
        }
    ];

    // Gallery images
    const galleryImages = [
        "/healththing.jpeg",
        "/images.jpeg",
        "/heal.webp",
        "/injection.jpeg",
        "/blood.jpeg",
        "/Blood-Pressure.jpg"
    ];

    // Pagination logic
    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = blogPosts.slice(indexOfFirstBlog, indexOfLastBlog);
    const totalPages = Math.ceil(blogPosts.length / blogsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="max-w-7xl mx-auto mt-20 px-4 mb-8">
          {/* Section Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center"
          >
            Trending Blogs
          </motion.h2>
    
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Section - Blog Cards */}
            <div className="lg:col-span-2 space-y-8">
              {currentBlogs.map((blog, index) => (
                <motion.article
                  key={blog.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                >
                  <Link to={blog.Link || "#"} className="block">
                  <div className="flex flex-col md:flex-row">
                    {/* Image */}
                    <div className={`${blog.bgColor} p-6 md:w-80 flex-shrink-0`}>
                      <motion.img
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-48 md:h-56 object-cover rounded-2xl"
                      />
                    </div>
    
                    {/* Content */}
                    <div className="p-6 md:p-8 flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                          <span className="text-purple-600 font-medium text-sm">
                            {blog.category}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                          <span>{blog.date}</span>
                        </div>
                      </div>
    
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 line-clamp-2 leading-tight">
                        {blog.title}
                      </h3>
    
                      <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                        {blog.excerpt}
                      </p>
    
                      <motion.button
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700 transition-colors"
                      >
                        Continue Reading
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </motion.button>
                    </div>
                  </div>
                  </Link>
                </motion.article>
              ))}
    
              {/* Pagination */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex items-center justify-center gap-2 mt-12"
              >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="flex items-center gap-1 p-2 rounded-lg text-gray-500 hover:text-purple-600 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                  <span>Previous</span>
                </motion.button>
    
                {[...Array(totalPages)].map((_, index) => (
                  <motion.button
                    key={index + 1}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handlePageChange(index + 1)}
                    className={`w-10 h-10 rounded-lg font-semibold transition-all ${
                      currentPage === index + 1
                        ? "bg-purple-600 text-white shadow-lg"
                        : "bg-gray-100 text-gray-600 hover:bg-purple-100 hover:text-purple-600"
                    }`}
                  >
                    {index + 1}
                  </motion.button>
                ))}
    
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="flex items-center gap-1 p-2 rounded-lg text-gray-500 hover:text-purple-600 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>Next</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </motion.button>
              </motion.div>
            </div>
    
            {/* Right Sidebar */}
            <div className="space-y-8">
              {/* Portfolio Card */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-3xl p-6 shadow-lg"
              >
                <div className="text-center">
                  <motion.img
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ duration: 0.3 }}
                    src="/man.webp"
                    alt="Peter D. Morris"
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover shadow-lg"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    Peter D. Morris
                  </h3>
                  <p className="text-purple-600 font-medium mb-4">
                    Product Designer
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    Hey, I'm a New York based product designer. Health Linee is where I
                    share design, tech, technology, and personal projects. Let's
                    explore world together.
                  </p>
    
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-purple-700 transition-colors w-full mb-4"
                  >
                    Contact Me
                  </motion.button>
    
                  {/* Social Media Icons */}
                  <div className="flex items-center justify-center gap-4">
                    <span className="text-gray-600 font-medium">Follow :</span>
                    <div className="flex gap-3">
                      {["twitter", "facebook", "linkedin"].map((platform) => (
                        <motion.a
                          key={platform}
                          whileHover={{ scale: 1.2, y: -2 }}
                          href="#"
                          className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-purple-100 transition-colors"
                        >
                          <div className="w-4 h-4 bg-gray-600 rounded-sm"></div>
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
    
              {/* Recent Posts */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-3xl p-6 shadow-lg"
              >
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <h3 className="text-xl font-bold text-gray-900">Recent Post</h3>
                </div>
    
                <div className="space-y-4">
  {recentPosts.map((post) => (
    <Link to={post.link} className="flex-shrink-0 flex gap-4" key={post.id}>
      <motion.div
        whileHover={{ x: 5 }}
        className="flex gap-4 cursor-pointer group"
      >
        <img
          src={post.image}
          alt={post.title}
          className="w-16 h-16 rounded-xl object-cover flex-shrink-0"
        />
        <div className="flex-1">
          <h4 className="text-sm font-semibold text-gray-900 line-clamp-2 group-hover:text-purple-600 transition-colors mb-1">
            {post.title}
          </h4>
          <p className="text-xs text-gray-500">{post.date}</p>
        </div>
      </motion.div>
    </Link>
  ))}
</div>

              </motion.div>
    
              {/* Gallery */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-3xl p-6 shadow-lg"
              >
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <h3 className="text-xl font-bold text-gray-900">Gallery</h3>
                </div>
    
                <div className="grid grid-cols-2 gap-3">
                  {galleryImages.map((image, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05, rotate: 1 }}
                      transition={{ duration: 0.3 }}
                      className="cursor-pointer"
                    >
                      <img
                        src={image}
                        alt={`Gallery ${index + 1}`}
                        className="w-full h-24 object-cover rounded-xl hover:shadow-lg transition-shadow"
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      );
  };

export default TrendingBlogs;