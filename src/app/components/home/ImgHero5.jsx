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
    hidden: { opacity: 0},
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
  className="outfit flex w-full mb-10 "
  initial="hidden"
  animate="visible"
  exit="hidden"
  viewport={{ once: true }}
>

      <div className="">
        <div className="flex flex-col md:flex-row  gap-8 ">

        {/* Left Side Variants */}
          <motion.div
            className="w-full md:w-1/2 space-y-[0.02rem]"
            variants={leftContentVariants}
          >
            <motion.h1
              className="text-4xl sm:text-5xl -ml-8 sm:-ml-9 md:-ml-12 lg:-ml-16 xl:-ml-18 md:text-7xl lg:text-8xl font-semibold leading-[1.1] overflow-hidden"
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

              <div className="scale-[0.8] ">
                <motion.span
                  whileHover="hover"
                  variants={textHoverVariants}
                  className=" cursor-default"
                >
                  <span className="outfit">a</span> le<span className="outfit">g</span><span className="outfit">a</span>cy of 
                </motion.span>
                <motion.span
                  whileHover="hover"
                  variants={accentTextHoverVariants}
                  className="text-[#AECA1D] cursor-default ml-2 md:ml-3"
                >
              he<span className="outfit">a</span>lthc<span className="outfit">a</span>re.
                </motion.span>
              </div>

              <div className="flex flex-wrap scale-[0.8] gap-x-3 ">
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
                    className="text-[#AECA1D] inline-block  cursor-default"
                  >
                    he<span className="outfit">a</span>l
                  </motion.span>
                  <span className="text-[#AECA1D]">.</span>
                </div>
              </div>
            </motion.h1>

            <motion.p
              className="text-xl md:text-3xl text-gray-700 cursor-default -mt-10 font-bold  2xl:ml-4"
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
                  className="bg-black pl-4 py-3 md:mb-[20rem]  2xl:ml-4 lg:ml-0 text-white text-sm md:text-base rounded-full font-bold"
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
            className="w-full md:w-1/2 "
            variants={rightImageVariants}
          >
            <div className="relative h-full rounded-[2rem] ">
             
                           <div
                className="w-[280px]  sm:w-[400px] h-[350px] md:w-[360px] lg:w-[420px] md:h-full 2xl:ml-[6rem] xl:w-[36rem] max-w-[40rem] mx-auto md:mx-0 rounded-[2rem]"
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
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundColor: "gray", // Fallback background
                }}
              />

            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ImgHero;
