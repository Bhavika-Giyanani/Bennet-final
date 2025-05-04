"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getAboutPage } from "@/sanity/lib/queries";

const AboutHero = () => {
  const [heroImage, setHeroImage] = useState("");
  useEffect(() => {
    async function fetchData() {
      const data = await getAboutPage();
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

  return (
    <motion.section
      className="flex overflow-visible scale-95 2xl:scale-100 mt-20 lg:mt-14 mb-10 mx-auto"
      initial="hidden"
      animate="visible"
      exit="hidden"
      viewport={{ once: true }}
    >
      <div className="w-full h-full md:px-0">
        <div className="flex flex-col md:flex-row">
          {/* Left Side */}
          <motion.div
            className="w-full ml-4 md:ml-0 md:mt-2 lg:mt-[4.5rem] z-30 space-y-4"
            variants={leftContentVariants}
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-5xl lg:text-7xl font-bold leading-[1.1] lg:scale-90 lg:-ml-6"
              variants={leftItemVariants}
            >
              <div className="md:ml-2 mt-4 md:mt-[1rem] lg:-mt-12 lg:scale-105 overflow-visible">
                {/* Smol Box */}
                <div>
                  <img
                    src="./SmolBox.svg"
                    className="z-40 md:my-0 lg:mt-4"
                    alt="Smol Box"
                  />
                </div>

                <div className="flex flex-col sm:flex-row md:flex-col">
                  <div className="">
                    your <span className="text-[#AECA1D]">he<span className="outfit">a</span>lth</span>,
                  </div>
                  <div className="leading-tight sm:-mt-1.5 md:m-0">
                    our priority!
                  </div>
                </div>

                <div className="relative z-30">
                  <div>
                    <h1 className="md:hidden">
                      building he<span className="outfit">a</span><span className="outfit">l</span>thier{" "}
                      <span className="text-[#AECA1D]">communities</span>
                    </h1>
                  </div>
                  <div className="hidden md:flex md:flex-col">
                    <div className="leading-tight md:relative">
                      building
                      <div className="md:absolute md:-mt-[3.7rem] flex md:ml-[12rem] lg:-mt-[5.5rem] lg:ml-[18rem]">
                        he<span className="outfit">a</span><span className="outfit">l</span>{" "}
                        <span className="text-black md:text-[#AECA1D]">
                          thier
                        </span>
                      </div>
                    </div>

                    <div className="text-[#AECA1D] leading-tight -ml-[1rem] md:ml-0 md:-mt-4">
                      communities
                    </div>
                  </div>
                </div>
              </div>
            </motion.h1>

            <div className="md:ml-2 md:-ml-1 lg:-mt-[1.3rem]">
              <motion.p
                className="text-xl md:text-3xl text-gray-700 cursor-default font-bold"
                variants={leftItemVariants}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeInOut" },
                }}
              >
                transforming lives since 3 decades.
              </motion.p>
            </div>

            <motion.div variants={leftItemVariants}>
              <div className="lg:-ml-2 lg:-ml-0 mt-6">
                <Link
                  href="#commitment"
                  className="bg-black pl-4 py-3 md:mb-[20rem] lg:ml-2 text-white text-sm md:text-base rounded-full font-bold"
                >
                  know more{" "}
                  <span className="bg-[#AECA1DE5] rounded-full px-4 py-3">
                    ↓
                  </span>
                </Link>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Fixed for proper stretching on 2xl screens */}
          <motion.div
            className="w-full z-10 scale-90 xl:ml-10 mt-6 md:mt-0 2xl:flex 2xl:justify-center"
            variants={rightImageVariants}
          >
            {/* Image with improved responsive behavior */}
            <div
              className="md:max-h-[29rem] lg:max-h-[33rem] 2xl:ml-[8rem] xl:max-h-[33rem] 2xl:max-h-none w-auto md:h-[30rem] lg:h-[26rem] xl:h-[33rem] 2xl:w-full mt-6 md:mt-0 rounded-[2rem] z-10 h-[350px] sm:h-[350px]"
              style={{
                maskImage: "url('/aboutmold.png')",
                WebkitMaskImage: "url('/aboutmold.png')",
                maskSize: "contain",
                WebkitMaskSize: "contain",
                maskRepeat: "no-repeat",
                WebkitMaskRepeat: "no-repeat",
                maskPosition: "center",
                WebkitMaskPosition: "center",
                backgroundImage: `url(${heroImage})`,
               backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundColor: "black",
                display: "block",
              }}
            >
              <div className="inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-[2rem]" />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mt-4"></div>
    </motion.section>
  );
};

export default AboutHero;