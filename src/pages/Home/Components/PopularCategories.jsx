import { motion } from "framer-motion";

const categories = [
  {
    id: 1,
    title: "mental health",
    // subtitle: "Innovation",
    image: "/rectangular_image_1.png",
    bgColor: "bg-blue-50",
    blurColor: "from-blue-400/30 to-purple-400/30"
  },
  {
    id: 2,
    title: "Nutrition",
    subtitle: "",
    image: "/ChatGPT Image May 23, 2025, 06_48_33 AM.png",
    bgColor: "bg-red-50",
    blurColor: "from-red-400/30 to-orange-400/30"
  },
  {
    id: 3,
    title: "fitness",
    subtitle: "",
    image: "/rectangular_image_2.png",
    bgColor: "bg-green-50",
    blurColor: "from-green-400/30 to-teal-400/30"
  },
  {
    id: 4,
    title: "product review",
    // subtitle: "Developments",
    image: "/rectangular_image_3.png",
    bgColor: "bg-slate-50",
    blurColor: "from-slate-400/30 to-blue-400/30"
  },
  {
    id: 5,
    title: "sleep",
    subtitle: "",
    image: "/rectangular_image_4.png",
    bgColor: "bg-orange-50",
    blurColor: "from-orange-400/30 to-yellow-400/30"
  },
  {
    id: 6,
    title: "old aged",
    subtitle: "",
    image: "/rectangular_image_5.png",
    bgColor: "bg-amber-50",
    blurColor: "from-amber-400/30 to-orange-400/30"
  }
];

const PopularCategories = () => {
  return (
    <div className="max-w-6xl mx-auto mt-20 px-4">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16"
      >
        Popular Categories
      </motion.h2>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.1,
              type: "spring",
              stiffness: 100
            }}
            whileHover={{ 
              y: -10,
              transition: { duration: 0.3, type: "spring", stiffness: 300 }
            }}
            className="group cursor-pointer"
          >
            <div className="relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              {/* Purple Blur Effect - Bottom Left */}
              <div className={`absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-r ${category.blurColor} rounded-full blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-300`}></div>
              <div className={`absolute -bottom-3 -left-3 w-12 h-12 bg-gradient-to-r ${category.blurColor} rounded-full blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-300`}></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Image Container */}
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                  className={`${category.bgColor} rounded-2xl p-4 mb-6 overflow-hidden`}
                >
                  <img
                    src={category.image}
                    alt={`${category.title} category image`}
                    className="w-full h-32 object-cover rounded-xl"
                  />
                </motion.div>

                {/* Text Content */}
                <div className="space-y-1">
                  <motion.h3
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    className="text-xl font-bold text-gray-900 leading-tight"
                  >
                    {category.title}
                  </motion.h3>
                  {category.subtitle && (
                    <motion.p
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2, delay: 0.05 }}
                      className="text-xl font-bold text-gray-900"
                    >
                      {category.subtitle}
                    </motion.p>
                  )}
                </div>

                {/* Hover Arrow */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-6 right-6 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center shadow-md"
                >
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    className="text-gray-600"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7V17"/>
                  </svg>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Explore More Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-center mt-16"
      >
        <motion.button
          whileHover={{ 
            scale: 1.05,
            backgroundColor: "rgba(147, 51, 234, 0.1)",
            borderColor: "rgba(147, 51, 234, 0.3)"
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ 
            type: "spring", 
            stiffness: 300,
            damping: 20 
          }}
          className="border-2 border-purple-200 text-purple-600 px-8 py-3 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300 bg-white/50 backdrop-blur-sm"
        >
          Explore More
        </motion.button>
      </motion.div>
    </div>
  );
};

export default PopularCategories;
