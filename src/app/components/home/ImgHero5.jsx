"use client";

import { getHomePage } from "@/sanity/lib/queries";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

const ImgHero = () => {
  const [heroImage, setHeroImage] = useState("");
  useEffect(() => {
    async function fetchData() {
      const data = await getHomePage();
      console.log(data);
      setHeroImage(data?.herosection?.image || "/pills.png"); // Fallback if no image
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

  const textHoverVariants = {
    hover: {
      scale: 1.02,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const accentTextHoverVariants = {
    hover: {
      scale: 1.02,
      color: "#c5e320",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
<motion.section
  className="outfit relative container flex items-center mt-[96px] "
  initial="hidden"
  animate="visible"
  exit="hidden"
  viewport={{ once: true }}
>

      <div className="w-full max-w-[1440px] mx-auto px-3 md:px-0 xl:px-3 2xl:px-0">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 ">
          <motion.div
            className="w-full md:w-1/2 space-y-1"
            variants={leftContentVariants}
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.1] overflow-hidden"
              variants={leftItemVariants}
            >
              {/* Smol Box */}
              {/* <div>
                <img
                  src="./tab.svg"
                  className="lg:hidden xl:block w-14"
                  alt="Smol Tablet"
                />
              </div> */}

              <div className="flex scale-[0.8]  flex-wrap -ml-7 sm:-ml-10 lg:-ml-[4rem] 2xl:-ml-[5rem] items-baseline gap-x-3">
                <motion.span
                  whileHover="hover"
                  variants={textHoverVariants}
                  className="inline-block cursor-default"
                >
                  <span className="outfit">a</span> le<span className="outfit">g</span><span className="outfit">a</span>cy of
                </motion.span>
                <motion.span
                  whileHover="hover"
                  variants={accentTextHoverVariants}
                  className="text-[#AECA1D] inline-block cursor-default"
                >
                  he<span className="outfit">a</span>lthc<span className="outfit">a</span>re.
                </motion.span>
              </div>

              <div className="flex flex-wrap scale-[0.8] mt-1 md:-mt-2 -ml-7 md:-ml-10 lg:-ml-[4rem] 2xl:-ml-[5rem] items-baseline gap-x-3 -mt-6">
                <motion.span
                  whileHover="hover"
                  variants={textHoverVariants}
                  className="inline-block cursor-default"
                >
                  together,
                </motion.span>
                <div className="inline-flex items-baseline gap-x-2">
                  <motion.span
                    whileHover="hover"
                    variants={textHoverVariants}
                    className="inline-block cursor-default"
                  >
                    we
                  </motion.span>
                  <motion.span
                    whileHover="hover"
                    variants={accentTextHoverVariants}
                    className="text-[#AECA1D] inline-block cursor-default"
                  >
                    he<span className="outfit">a</span>l
                  </motion.span>
                  <span className="text-[#AECA1D]">.</span>
                </div>
              </div>
            </motion.h1>

            <motion.p
              className="text-xl md:text-3xl text-gray-700 cursor-default -mt-10 font-bold"
              variants={leftItemVariants}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
            >
              dedicated to wellness since 3 decades
              </motion.p>

            <motion.div variants={leftItemVariants}>
              <div className=" mt-4">
                <Link
                  href="#hero"
                  className="bg-black pl-4 py-3 md:mb-[20rem]  lg:ml-0 text-white text-sm md:text-base rounded-full font-bold"
                >
                  know more{" "}
                  <span className="bg-[#AECA1DE5] rounded-full px-4 py-3">
                    ↓
                  </span>
                </Link>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 h-[400px] md:h-[480px] xl:h-[460px] 2xl:ml-[6rem] "
            variants={rightImageVariants}
          >
            <div className="relative h-full rounded-[2rem] ">
             
              {/* <img
                src="/tab.svg"
                alt="Medical consultation"
                className="z-40 scale-75 absolute mt-[18rem]  md:mt-[25rem] md:-ml-12 lg:mt-[23rem] lg:-ml-12 "
              /> */}

              <div
                className="w-[280px]  sm:w-[400px] h-[350px] md:w-[360px] lg:w-[420px] md:h-full xl:w-[36rem] 2xl:w-full max-w-[40rem] mx-auto md:mx-0 rounded-[2rem]"
                style={{
                  maskImage: "url('/homemold.png')",
                  WebkitMaskImage: "url('/homemold.png')",
                  maskSize: "contain",
                  WebkitMaskSize: "contain",
                  maskSize: "100% 150%",
                  WebkitMaskSize: "100% 150%",
                  maskPosition: "center",
                  WebkitMaskPosition: "center",
                  backgroundImage: "url(/heroOption3.jpeg)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundColor: "gray", // Fallback background
                }}
              />
              {/* <img
                src="/Homepage2.png"
                alt="Home Page Image"
                className="w-full xl:w-[36rem] 2xl:w-full max-w-[41rem] h-full object-cover rounded-[2rem] "
              /> */}

              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-[2rem]" />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ImgHero;
