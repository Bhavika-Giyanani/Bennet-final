"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import parse from "html-react-parser";
import Link from "next/link";

export default function HeroSection({
  imageLink,
  moldLink,
  title,
  description,
  knowMoreLink, 
}) {
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

  const pathname = usePathname();
  const routeKey = pathname || "";

  return (
    <AnimatePresence mode="wait">
      <motion.section
        key={routeKey}
        className="relative flex items-center overflow-hidden mt-[80px] xl:mt-[96px]"
        initial="hidden"
        animate="visible"
        exit="hidden"
        viewport={{ once: true }}
      >
        <div className="w-full max-w-[1440px] mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left-side content */}
            <motion.div
              className="w-full md:w-1/2 space-y-6 z-20 "
              variants={leftContentVariants}
            >
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1]"
                variants={leftItemVariants}
              >
                {parse(title)}
              </motion.h1>

              <motion.p
                className="text-xl md:text-3xl text-gray-700 font-bold"
                variants={leftItemVariants}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeInOut" },
                }}
              >
                {description}
              </motion.p>

              {/* Conditionally render the Know More button if knowMoreLink is provided */}
              {knowMoreLink && (
                <motion.div variants={leftItemVariants}>
                  <div className="md:-ml-4 lg:-ml-0 mb-4">
                    <Link
                      href={knowMoreLink} 
                      className="bg-black pl-4 py-3 md:mb-[20rem] md:ml-4 lg:ml-0 text-white text-sm md:text-base rounded-full font-bold"
                    >
                      know more{" "}
                      <span className="bg-[#AECA1DE5] rounded-full px-4 py-3">
                        ↓
                      </span>
                    </Link>
                  </div>
                </motion.div>
              )}
            </motion.div>

            {/* Right-side image */}
            <motion.div
              className="w-full z-10 md:w-1/2 h-[300px] md:h-[500px]"
              variants={rightImageVariants}
            >
              <div className="relative h-full rounded-[2rem] overflow-hidden flex items-center">
                <div
                  className="w-full h-[300px] md:w-full md:h-[400px] lg:h-[500px] xl:h-full max-h-[34rem]"
                  style={{
                    maskImage: `url('${moldLink}')`,
                    WebkitMaskImage: `url('${moldLink}')`,
                    maskSize: "contain",
                    WebkitMaskSize: "contain",
                    maskSize: "100% 100%",
                    WebkitMaskSize: "100% 100%",
                    maskPosition: "center",
                    WebkitMaskPosition: "center",
                    backgroundImage: `url(${imageLink})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    maskRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundColor: "black",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-[2rem]" />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </AnimatePresence>
  );
}
