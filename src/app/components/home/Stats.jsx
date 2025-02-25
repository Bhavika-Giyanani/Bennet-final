"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

// Utility function for Indian number formatting
const formatNumber = (num) => {
  return num.toLocaleString("en-IN");
};

const CountUpAnimation = ({ end, duration = 2, className }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const progressPercent = Math.min(progress / (duration * 1000), 1);

      setCount(Math.floor(progressPercent * end));

      if (progressPercent < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration]);

  return <span className={className}>{formatNumber(count)}+</span>;
};

const Stats = () => {
  const floatingAnimation = {
    initial: { y: 0 },
    animate: {
      y: [-20, 4, -20],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
<>

    {/* Text */}
    <motion.p
    className="text-xl container px-4 md:text-2xl text-black lg:max-w-4xl mx-auto text-start mt-14 mb-6"
    variants={itemVariants}
  >
      We collaborate with over 500 passionate sales personnel and a network of 1,000+ distributors,
    ensuring consistent access to care across the country with a presence in 15+ states.<br />

    <span className="h-1 w-1"></span><br/>

    With over 1,00,000 retail outlets nationwide , we bring superior healthcare solutions within easy reach for everyone.<br/>

   
  </motion.p>

    {/* Card */}
    <section className="container mx-auto px-4 py-16 my-10">
      <motion.div
        className="relative rounded-[2rem] bg-[#AECA1D]/40 border border-black flex flex-col md:flex-row items-center justify-between py-20 md:py-24 px-8 md:px-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Top Circle */}
        <motion.div
          className="absolute -top-16 md:right-32 z-10 rounded-full bg-black text-white w-32 h-32 md:w-40 md:h-40 flex flex-col items-center justify-center text-center shadow-lg"
          variants={floatingAnimation}
          initial="initial"
          animate="animate"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-1">
            <CountUpAnimation end={100} className="font-bold" />
          </h2>
          <p className="text-sm md:text-base">
            Sku and
            <br />
            products
          </p>
        </motion.div>

        {/* Main Stats */}
        <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-10 md:gap-4">
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-5xl md:text-7xl font-bold mb-4">
              <CountUpAnimation end={500} className="font-bold" />
            </h2>
            <p className="text-xl md:text-2xl">
              Passionate
              <br />
              Representative
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-5xl md:text-7xl font-bold mb-4">
              <CountUpAnimation end={1000} className="font-bold" />
            </h2>
            <p className="text-xl md:text-2xl">
              Distributors
              <br />
              Network
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-5xl md:text-7xl font-bold mb-4">
              <CountUpAnimation end={100000} className="font-bold" />
            </h2>
            <p className="text-xl md:text-2xl">
              Retail
              <br />
              Outlets
            </p>
          </motion.div>
        </div>

        {/* Bottom Circle */}
        <motion.div
          className="absolute -bottom-[88px] md:left-32 z-10 rounded-full bg-black text-white w-32 h-32 md:w-40 md:h-40 flex flex-col items-center justify-center text-center shadow-lg"
          variants={floatingAnimation}
          initial="initial"
          animate="animate"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-1">
            <CountUpAnimation end={15} className="font-bold" />
          </h2>
          <p className="text-sm md:text-base">
            States
            <br />
            distributed
          </p>
        </motion.div>
      </motion.div>
    </section>

    {/* Text 2 */}
    <motion.p
    className="text-4xl px-4 font-semibold text-black mx-auto container lg:max-w-4xl  mt-16 mb-6"
    variants={itemVariants}
  >
Join us on our mission to empower individuals and communities through trusted healthcare. 

   
  </motion.p>

           {/* Know More Button */}
           <motion.div
          className="flex items-center justify-center gap-4 pt-8"
          variants={itemVariants}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              href="#"
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
              href="#"
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

</>

  );
};

export default Stats;
