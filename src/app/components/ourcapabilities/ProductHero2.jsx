"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { getProductPage } from "@/sanity/lib/queries";
import { useEffect, useState } from "react";

const ProductHero2 = () => {
  const [heroImage, setHeroImage] = useState("");
  useEffect(() => {
    async function fetchData() {
      const data = await getProductPage();
      setHeroImage(data?.secondherosection?.image || "/pills.png"); // Fallback if no image
    }
    fetchData();
  }, []);
  const leftContentVariants = {
    hidden: { opacity: 0, x: -200 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.8,
        ease: "easeInOut",
      },
    },
  };

  const leftItemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, ease: "easeInOut" } },
  };

  const rightImageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  return (
    <motion.section
      className="relative  mb-10 py-10 sm:mt-16 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-6 "
      initial="hidden"
      animate="visible"
      exit="hidden"
      viewport={{ once: true }}
    >
      <div className="grid md:grid-cols-2 gap-8  items-center">
        {/* Left Side */}
        <motion.div className="space-y-6 " variants={leftContentVariants}>
          <motion.h1
            className="text-4xl  md:text-5xl lg:text-6xl xl:text-7xl font-medium leading-tight"
            variants={leftItemVariants}
          >
            <div className="text-[#AECA1D] mt-16 sm:mt-0 md:-mt-8 ">
              empowerin<span className="outfit">g</span>
            </div>
            <div className="flex flex-wrap">
              <span className="mr-2">lives <span className="outfit">a</span>nd</span>
              <span><span className="outfit">a</span>fford<span className="outfit">a</span>bi<span className="outfit">l</span>ity</span>
            </div>
          </motion.h1>

          {/* <motion.p className="text-xl sm:text-2xl md:text-2xl" variants={leftItemVariants}>
            Transforming lives since 1996
          </motion.p> */}

          <motion.div variants={leftItemVariants}>
            <div className="md:-ml-4 lg:-ml-0">
              <Link
                href="#product"
                className="bg-black pl-4 py-3 md:mb-[20rem] md:ml-4 lg:ml-0 text-white text-sm md:text-base rounded-full font-bold"
              >
                know more{" "}
                <span className="bg-[#AECA1DE5] rounded-full px-4 py-3">↓</span>
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          className="w-full max-w-[640px] mx-auto md:ml-auto lg:-mt-10"
          variants={rightImageVariants}
        > 
          <div
            className="h-[18rem] md:h-[16rem] lg:[22rem] xl:h-[22rem] scale-95 mt-6 md:mt-0 rounded-[2rem] z-10"
            style={{
              maskImage: "url('/secondmold.png')",
              WebkitMaskImage: "url('/secondmold.png')",
              maskSize: "contain",
              WebkitMaskSize: "contain",
              maskSize: "100% 150%",
              WebkitMaskSize: "100% 100%",
              maskPosition: "center",
              WebkitMaskPosition: "center",
              backgroundImage: `url(${heroImage})`,
             backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundColor: "black",
            }}
          ></div>
          
        </motion.div>
      </div>

      {/* Green Card */}
      <motion.div
        className="p-4 md:p-8 flex flex-col mt-10 md:flex-row items-center justify-between bg-[#D7E48E] rounded-xl max-w-screen-xl mx-auto gap-6 md:gap-12"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="font-bold text-lg md:text-xl w-full md:w-1/2">
          At Bennet Pharmaceuticals, we are dedicated to delivering
          high-quality, innovative pharmaceutical solutions across various
          therapeutic areas.
        </h2>
        <p className="text-lg w-full md:w-1/2 mt-4 md:mt-0">
          Our broad product portfolio meets the diverse needs of healthcare
          professionals and patients alike, ensuring accessibility and
          reliability in every product we offer.
        </p>
      </motion.div>
    </motion.section>
  );
};

export default ProductHero2;
