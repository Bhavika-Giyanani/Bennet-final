"use client";

import { motion } from "framer-motion";

const ImgHero = ({ data }) => {
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
      className="relative container flex items-center mt-[96px] "
      initial="hidden"
      animate="visible"
      exit="hidden"
      viewport={{ once: true }}
    >
      <div className="w-full max-w-[1440px] mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 ">
          <motion.div
            className="w-full md:w-1/2 space-y-6"
            variants={leftContentVariants}
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.1] overflow-hidden"
              variants={leftItemVariants}
            >
              {/* Smol Box */}
              <div>
                <img
                  src="./SmolBox.svg"
                  className="lg:hidden xl:block"
                  alt="Smol Box"
                />
              </div>

              <div className="flex flex-wrap items-baseline gap-x-3">
                <motion.span
                  whileHover="hover"
                  variants={textHoverVariants}
                  className="inline-block cursor-default"
                >
                  A Legacy of
                </motion.span>
                <motion.span
                  whileHover="hover"
                  variants={accentTextHoverVariants}
                  className="text-[#AECA1D] inline-block cursor-default"
                >
                  Wellness.
                </motion.span>
              </div>

              <div className="flex flex-wrap items-baseline gap-x-3 mt-2">
                <motion.span
                  whileHover="hover"
                  variants={textHoverVariants}
                  className="inline-block cursor-default"
                >
                  Together,
                </motion.span>
                <div className="inline-flex items-baseline gap-x-2">
                  <motion.span
                    whileHover="hover"
                    variants={textHoverVariants}
                    className="inline-block cursor-default"
                  >
                    We
                  </motion.span>
                  <motion.span
                    whileHover="hover"
                    variants={accentTextHoverVariants}
                    className="text-[#AECA1D] inline-block cursor-default"
                  >
                    Heal
                  </motion.span>
                  <span className="text-[#AECA1D]">.</span>
                </div>
              </div>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-700 cursor-default"
              variants={leftItemVariants}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
            >
              Dedicated to wellness since 1996
            </motion.p>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 h-[400px] md:h-[500px]"
            variants={rightImageVariants}
          >
            <div className="relative h-full rounded-[2rem] ">
              <img
                src="/Box.svg"
                alt="Medical consultation"
                className="z-40 scale-75 absolute mt-[22rem]  md:mt-[25rem] md:-ml-12 lg:mt-[23rem] lg:-ml-12 "
              />
              <div
                className="w-full xl:w-[36rem] 2xl:w-full max-w-[41rem] h-full rounded-[2rem]"
                style={{
                  maskImage: "url('/homemold.png')",
                  WebkitMaskImage: "url('/homemold.png')",
                  maskSize: "contain",
                  WebkitMaskSize: "contain",
                  maskSize: "100% 150%",
                  WebkitMaskSize: "100% 150%",
                  maskPosition: "center",
                  WebkitMaskPosition: "center",
                  backgroundImage: `url(${data.image})`,
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
