"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const AboutHero = ({ data }) => {
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
      className="flex overflow-visible scale-95  mt-20  lg:mt-14 mb-10  max-w-[1440] mx-auto"
      initial="hidden"
      animate="visible"
      exit="hidden"
      viewport={{ once: true }}
    >
      <div className="w-full h-full px-2 ">
        <div className="flex flex-col md:flex-row ">
          {/* Left Side */}
          <motion.div
            className="w-full  ml-2 md:ml-0 lg:mt-12 z-30"
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
                    className="z-40 ml-0 md:ml-2 mt-[1rem] md:mt-3 md:my-0 lg:ml-2 lg:mt-0 "
                    alt="Smol Box"
                  />
                </div>

                <div className="flex flex-col  sm:flex-row md:flex-col">
                  <div className="">
                    Your <span className="text-[#AECA1D]">Health</span>,
                  </div>
                  <div className="leading-tight sm:-mt-1.5 md:m-0">
                    Our Priority!
                  </div>
                </div>

                <div className="relative z-30">
                  <div className="flex md:flex-col">
                    <div className="leading-tight md:relative">
                      Building
                      <div className="md:absolute md:-mt-[5.5rem] flex md:ml-[17.5rem] lg:-mt-[7.5rem] lg:ml-[23rem] ">
                        Health{" "}
                        <span className="text-black md:text-[#AECA1D] ">
                          ier
                        </span>
                      </div>
                    </div>

                    <div className="text-[#AECA1D] leading-tight -ml-[1rem] md:ml-0 md:-mt-4">
                      Communities
                    </div>
                  </div>
                </div>
              </div>
            </motion.h1>

            <div className=" -ml-3 lg:ml-2 md:-ml-1 lg:-mt-[1.3rem]  ">
              <motion.p
                className="text-xl md:text-2xl text-gray-700 ] "
                variants={leftItemVariants}
              >
                <span className=" "> Transforming Lives Since 1996.</span>
              </motion.p>
            </div>

            <motion.div variants={leftItemVariants}>
              <div className="-ml-4 md:-ml-2 lg:-ml-0 mt-4">
                <Link
                  href="#"
                  className="bg-black pl-4 py-3 md:mb-[20rem]  lg:ml-0 text-white text-sm md:text-base rounded-full font-bold"
                >
                  Know More{" "}
                  <span className="bg-[#AECA1DE5] rounded-full px-4 py-3">
                    ↓
                  </span>
                </Link>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            className="w-full max-h-[36rem] z-10 scale-90"
            variants={rightImageVariants}
          >
            {/* Image */}

            <div
              className="h-full scale-95 mt-6 md:mt-0 rounded-[2rem] z-10"
              style={{
                maskImage: "url('/aboutmold.png')",
                WebkitMaskImage: "url('/aboutmold.png')",
                maskSize: "contain",
                WebkitMaskSize: "contain",
                maskSize: "100% 150%",
                WebkitMaskSize: "115% 100%",
                maskPosition: "center",
                WebkitMaskPosition: "center",
                backgroundImage: `url(${data.image})`,
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
