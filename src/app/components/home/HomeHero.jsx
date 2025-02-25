"use client";

import { motion } from "framer-motion";
import { Box } from "lucide-react";

const HomeHero = () => {
  return (
    <section className="container mx-auto my-20 px-4 ">
      <motion.div
        className="relative rounded-[2rem] bg-gray-100 p-16 md:p-20 border border-[#2C3D5A]/20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Circular Icon */}
        <motion.div
          className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-[#AECA1D] rounded-full flex items-center justify-center border-4 border-white shadow-lg z-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          whileHover={{
            scale: 1.05,
            backgroundColor: "#c5e320",
            transition: { duration: 0.3 },
          }}
        >
          <Box className="w-8 h-8 text-white" />
        </motion.div>

        {/* Background decorative circles */}
        <div className="absolute top-1/2 right-10 w-32 h-32 bg-blue-50/50 rounded-full blur-2xl" />
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-rose-50/50 rounded-full blur-2xl" />
        <div className="absolute top-20 left-1/2 w-36 h-36 bg-green-50/50 rounded-full blur-2xl" />

        <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto text-center space-y-10">
          <motion.h2
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3, ease: "easeInOut" },
            }}
          >
            Our Legacy of Care: A Journey Since 1996
          </motion.h2>

          
          <div className="absolute "> 
               <img
                    src="/GreenMolecule.png"
                    alt="Medical consultation"
                    className="-mt-10 relative w-full h-[0rem] lg:h-[38rem] rounded-[2rem] z-0"
                  />

                  </div>

          <motion.div
            className="space-y-8 text-lg md:text-2xl text-black"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.p
              whileHover={{
                scale: 1.01,
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
            >
              Since 1996, we've been dedicated to enriching the lives of our
              citizens with the power of good health. Our journey has been one of unwavering commitment to providing
              quality healthcare solutions that inspire trust and confidence. At Bennet, we're more than just a pharmaceutical company, we're a
              catalyst for positive change.
            </motion.p>

            <motion.p
              whileHover={{
                scale: 1.01,
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
            >
              We're passionate about empowering caregivers, ensuring that vital care reaches every corner of India, and making a lasting impact 
              on the well-being of our people. From our manufacturing facilities to our extensive distribution network, we're commited to delivering 
              excellence in pharmaceuticals. We believe in the transformative power of healthcare and are determined to create a brighter,
               healthier futture for all.
            </motion.p>

            <motion.p
              whileHover={{
                scale: 1.01,
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
            >
             Join us on this journey as we strive to build a <br/>
              <span className="text-3xl text-black font-semibold" > Stronger, Healthier India Together! </span>
            </motion.p>


          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default HomeHero;
