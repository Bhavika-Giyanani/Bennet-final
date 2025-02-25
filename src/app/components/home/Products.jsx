"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const Products = ({ data }) => {
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
    <section className="container mx-auto mt-12 md:mt-20 px-4">
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
          className="w-3/5 md:w-[60%] lg:w-[50%] text-white text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-stroke-black"
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
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
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
            <div className="absolute -bottom-6 md:-bottom-10 -right-6 md:-right-10 w-20 md:w-32 h-20 md:h-32 rounded-full bg-[#2C3D5A]/10 -z-10" />
            {/* Image container */}
            <div className="relative w-full aspect-square">
              <div className="absolute inset-0 rounded-2xl md:rounded-[2rem] overflow-hidden">
                <div
                  className="w-full xl:w-[36rem] 2xl:w-full max-w-[41rem] h-full rounded-[2rem] hover:scale-105 transition-transform duration-300"
                  style={{
                    maskImage: "url('/homeproductmold.png')",
                    WebkitMaskImage: "url('/homeproductmold.png')",
                    maskSize: "contain",
                    WebkitMaskSize: "contain",
                    maskSize: "100% 150%",
                    WebkitMaskSize: "120% 100%",
                    maskPosition: "center",
                    WebkitMaskPosition: "center",
                    backgroundImage: `url(${data.image})`,
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
            className="text-2xl md:text-4xl  md:-mt-12 font-bold"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            Empowering Health Journeys <br />
            <span className="h-1 w-1"></span>
            <br />
            Nurturing Health Through Innovation
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
              reliability in every product we offer.
            </motion.p>
          </div>

          {/* Know More */}
          <motion.div
            className="flex items-center  gap-4 pt-8"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href="/products#Ourproducts"
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
                href="/products#Ourproducts"
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

      {/* Our Innovation */}
      <motion.div
        className="mt-10 md:mt-16 space-y-6 md:space-y-8"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="bg-black text-white rounded-xl md:rounded-2xl p-6  md:px-12 grid md:grid-cols-2 gap-6 md:gap-8 items-center hover:scale-[1.01] transition-transform duration-300">
          <h3 className="text-3xl font-bold">Our Innovation</h3>
          <p className="text-base md:text-xl text-gray-400">
            <span className="text-white text-xl font-semibold">PATENT </span>{" "}
            granted for enhancing the bioavailability of highly unstable
            molecule{" "}
            <span className="text-white text-xl font-semibold">
              {" "}
              LACTOFERRIN{" "}
            </span>{" "}
            by salt technology.
            <br />
            <span className="h-1 w-1"></span>
            <br />
            Innovation research done in collaboration with{" "}
            <span className="text-white text-xl font-semibold">
              {" "}
              NIPER-A{" "}
            </span>{" "}
            for
            <span className="text-white text-xl font-semibold">
              {" "}
              SILVER NANOMIX PARTICLES{" "}
            </span>{" "}
            .
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Products;
