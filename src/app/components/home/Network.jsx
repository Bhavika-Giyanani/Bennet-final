"use client";

import { motion } from "framer-motion";

const Network = () => {
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

  return (
    <section className="container mx-auto mt-12 md:mt-20 px-4">
      {/* Header Section */}
      <motion.div
        className="flex justify-start lg:justify-center md:gap-0 lg:gap-0 items-center my-8 md:my-10 mb-10 md:mb-14 overflow-hidden"
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
          OUR MANUFACTURING
          <br className="block" />
          NETWORK
        </motion.h2>

        <motion.div
          className="w-0 text-left md:w-[0%] lg:w-[50%] mt-2"
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

      {/* Subheading */}
      <motion.h2
        className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold mt-8 md:mt-12 leading-tight"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        transition={{ delay: 0.3 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        Experience the{" "}
        <span className="text-[#AECA1D] inline-block">BENNET</span>{" "}
        <span className="inline-block">difference in</span>{" "}
        <span className="inline-block">every product.</span>
      </motion.h2>
    </section>
  );
};

export default Network;
