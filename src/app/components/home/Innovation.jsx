import React from 'react'
import { motion } from "framer-motion";

const Innovation = () => {

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
    
      const itemVariants = {
        hidden: { opacity: 0, y: 30 },
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
    <div>

    

        <motion.div
        className="my-10 container md:mt-16 space-y-6 md:space-y-8"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
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
          className="w-3/5 md:w-[60%] lg:w-[50%]  text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-stroke-black"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 1, ease: "easeOut" },
          }}
          viewport={{ once: true }}
        >
          OUR CAPABILITIES
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

        <div className="bg-[#D7E48E] text-black rounded-xl md:rounded-2xl p-6  md:px-12 grid md:grid-cols-2 gap-6 md:gap-8 items-center hover:scale-[1.01] transition-transform duration-300">
          <h3 className="text-3xl font-bold">Innovation</h3>
          <p className="text-base md:text-xl ">
            <span className=" text-xl font-bold">PATENT </span>{" "}
            granted for enhancing the bioavailability of highly unstable
            molecule{" "}
            <span className=" text-xl font-bold">
              {" "}
              LACTOFERRIN{" "}
            </span>{" "}
            by salt technology.
            <br />
            <span className="h-1 w-1"></span>
            <br />
            Innovation research done in collaboration with{" "}
            <span className=" text-xl font-bold">
              {" "}
              NIPER-A{" "}
            </span>{" "}
            for
            <span className=" text-xl font-bold">
              {" "}
              SILVER NANOMIX PARTICLES{" "}
            </span>{" "}
            .
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default Innovation
