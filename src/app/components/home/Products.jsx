"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { getHomePage } from "@/sanity/lib/queries";

const Products = () => {
  const [heroImage, setHeroImage] = useState("");
  useEffect(() => {
    async function fetchData() {
      const data = await getHomePage();
      setHeroImage(data?.productsection?.image || "/pills.png"); // Fallback if no image
    }
    fetchData();
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const lineVariant = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="container mx-auto mt-12 md:mt-20 mb-16 md:mb-6 px-4">
      {/* Header with line */}
      <motion.div
        className="flex justify-start md:justify-center md:gap-0 lg:gap-0 items-center my-8 md:my-10 mb-10 md:mb-14 overflow-hidden"
        initial={{ opacity: 0, x: -70 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { duration: 1, ease: "easeOut" },
        }}
        viewport={{ once: true, amount: 0.9 }}
      >
        <motion.h2
          className="didot w-3/5 md:w-[60%] lg:w-[50%] text-white text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-stroke-black"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 1, ease: "easeOut" },
          }}
          viewport={{ once: true }}
        >
          OUR PRODUCTS
        </motion.h2>

        <motion.div
          className="w-0 text-left md:w-[40%] lg:w-[50%] mt-2"
          initial={{ opacity: 0, x: 70 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 1, ease: "easeOut" },
          }}
          viewport={{ once: true }}
        >
          <hr className="border-t-2 border-[#AECA1D]" />
        </motion.div>
      </motion.div>

      {/* Main Content */}

      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center md:mt-32">
        {/* Image Section */}
        <motion.div
          className="relative order-2 md:order-1"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <div className="relative mx-4 md:mx-0">
            {/* Decorative Shapes - Responsive sizes */}
            <div className="absolute -top-6 md:-top-10 -left-6 md:-left-10 w-24 md:w-40 h-24 md:h-40 rounded-full bg-[#AECA1D]/10 -z-10" />
            <div className="absolute -bottom-6 md:bottom-10 -right-6 md:-right-10 w-20 md:w-32 h-20 md:h-32 2xl:bottom-32 2xl:right-16 rounded-full bg-[#2C3D5A]/10 -z-10" />
            {/* Image container */}
            <div className="relative w-full aspect-square">
              <div className="absolute inset-0 rounded-2xl md:rounded-[2rem] overflow-hidden">
                <div
                  className="w-full h-full md:w-[550px] md:h-[500px]  rounded-[2rem] hover:scale-105 transition-transform duration-300"
                  style={{
                    maskImage: "url('/homeproductmold.png')",
                    WebkitMaskImage: "url('/homeproductmold.png')",
                    maskSize: "contain",
                    WebkitMaskSize: "contain",
                    maskSize: "100% 150%",
                    WebkitMaskSize: "120% 100%",
                    maskPosition: "center",
                    WebkitMaskPosition: "center",
                    backgroundImage: `url("/product2.jpg")`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    maskRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundColor: "black",
                  }}
                />
                {/* <img
                  src="/pills.png"
                  alt="Our products"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
                /> */}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="space-y-6 md:space-y-8 order-1 md:order-2"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-2xl md:text-3xl  md:-mt-12 font-bold"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            Empowering lives and affordability <br />
          </motion.h3>

          <div className="space-y-4 md:space-y-6 text-base md:text-xl text-gray-700">
            <motion.p variants={fadeInUp} transition={{ delay: 0.2 }}>
              At Bennet Pharmaceuticals, we are dedicated to delivering
              high-quality, innovative pharmaceutical solutions across various
              therapeutic areas.
            </motion.p>

            <motion.p variants={fadeInUp} transition={{ delay: 0.3 }}>
              Our broad product portfolio meets the diverse needs of healthcare
              professionals and patients alike, ensuring accessibility and
              reliability in every product.
            </motion.p>

            <motion.p variants={fadeInUp} transition={{ delay: 0.3 }}>
            We offer tailored solutions through our three core divisions: <span className="font-bold text-black" >Main, Critical Care</span>
            , and the <span className="font-bold text-black" > Emiror Division</span>, 
            bringing specialized and innovative care to those who need it most.
            </motion.p>

          </div>

          {/* Know More */}
          <motion.div
            className="flex items-center gap-4 lg:pt-8"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href="/products"
                className="bg-[#83961D] text-white text-xl font-medium px-8 py-2 rounded-full transition-all duration-300 hover:bg-[#96ac22] hover:shadow-lg"
              >
                Know More
              </Link>
            </motion.div>

            <motion.div
              whileHover={{
                x: 10,
                scale: 1.1,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/products"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black text-white text-2xl transition-all duration-300 hover:bg-gray-900 hover:shadow-lg"
              >
                <motion.span
                  className="text-xs"
                  whileHover={{
                    x: 3,
                    transition: {
                      duration: 0.2,
                      repeat: Infinity,
                      repeatType: "reverse",
                    },
                  }}
                >
                  →
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>



    </section>
  );
};

export default Products;
