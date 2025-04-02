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
       <motion.h2
              className="text-3xl md:text-4xl font-bold lg:max-w-4xl"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              OUR CAPABILITIES 
            </motion.h2>

        <div className="bg-black text-white rounded-xl md:rounded-2xl p-6  md:px-12 grid md:grid-cols-2 gap-6 md:gap-8 items-center hover:scale-[1.01] transition-transform duration-300">
          <h3 className="text-3xl font-bold">Innovation</h3>
          <p className="text-base md:text-xl text-gray-400">
            <span className="text-white text-xl font-semibold">PATENT </span>{" "}
            granted for enhancing the bioavailability of highly unstable
            molecule{" "}
            <span className="text-white text-xl font-semibold">
              {" "}
              LACTOFERRIN{" "}
            </span>{" "}
            by salt technology.
            <br />
            <span className="h-1 w-1"></span>
            <br />
            Innovation research done in collaboration with{" "}
            <span className="text-white text-xl font-semibold">
              {" "}
              NIPER-A{" "}
            </span>{" "}
            for
            <span className="text-white text-xl font-semibold">
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
