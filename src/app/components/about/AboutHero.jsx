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
      className=" didot flex overflow-visible scale-95  mt-20  lg:mt-14 mb-10 mx-auto"
      initial="hidden"
      animate="visible"
      exit="hidden"
      viewport={{ once: true }}
    >
      <div className="w-full h-full px-2 md:px-0 ">
        <div className="flex flex-col md:flex-row">
          {/* Left Side */}
          <motion.div
            className="w-full ml-4 md:ml-0 lg:mt-12 z-30 space-y-4"
            variants={leftContentVariants}
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] lg:scale-90 lg:-ml-6"
              variants={leftItemVariants}
            >
              <div className="md:ml-2 md:mt-2 lg:-mt-[3.5rem]  scale-105 overflow-visible">
                {/* Smol Box */}
                <div>
                  <img
                    src="./SmolBox.svg"
                    className="z-40 ml-0 md:ml-2  md:my-0 lg:ml-2 lg:mt-4 "
                    alt="Smol Box"
                  />
                </div>

                <div className="flex flex-col sm:flex-row md:flex-col">
                  <div className="">
                    your <span className="text-[#AECA1D]">health</span>,
                  </div>
                  <div className="leading-tight sm:-mt-1.5 md:m-0">
                    our priority!
                  </div>
                </div>

                <div className="relative z-30">
                  <div>
                    
                    <h1 className="md:hidden">
                      building healthier{" "}
                      <span className="text-[#AECA1D]">communities</span>
                    </h1>

                  </div>
                  <div className="hidden md:flex md:flex-col">
                    <div className="leading-tight md:relative">
                      building
                      <div className="md:absolute md:-mt-[5.5rem] flex md:ml-[18.5rem] lg:-mt-[7.5rem] lg:ml-[24.6rem] ">
                        heal{" "}
                        <span className="text-black md:text-[#AECA1D] ">
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

            <div className=" -ml-2 lg:ml-2 md:-ml-1 lg:-mt-[1.3rem]  ">
              <motion.p
                className="text-xl md:text-2xl text-gray-700 cursor-default font-bold"
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
              <div className="-ml-2 md:-ml-2 lg:-ml-0 mt-6">
                <Link
                  href="#commitment"
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

          {/* Right Side */}
          <motion.div
            className="w-full max-h-[36rem] z-10 scale-90 xl:ml-10"
            variants={rightImageVariants}
          >
            {/* Image */}

            <div
              className="h-[20rem] w-[20rem] sm:w-[24rem] md:h-[28rem] md:w-[21rem] lg:h-[30rem] lg:w-[30rem] xl:w-[44rem] xl:h-[35rem] 2xl:w-[48rem] scale-95 mt-6 md:mt-0 rounded-[2rem] z-10"
              style={{
                maskImage: "url('/aboutmold.png')",
                WebkitMaskImage: "url('/aboutmold.png')",
                maskSize: "contain",
                WebkitMaskSize: "contain",
                maskSize: "100% 150%",
                WebkitMaskSize: "115% 100%",
                maskPosition: "center",
                WebkitMaskPosition: "center",
                backgroundImage: `url(${heroImage})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundColor: "black",
              }}
            >
              {/* <img
                src="/AboutUs.png"
                alt="Medical consultation"
                className="w-full h-full max-h-[36rem] md:h-[30rem] lg:h-full object-cover rounded-[2rem]"
              /> */}

              <div className=" inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-[2rem]" />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mt-4"></div>
    </motion.section>
  );
};

export default AboutHero;
