"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const Cards = () => {


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: index * 0.2,
      },
    }),
  };

  return (
    <section className="container mx-auto px-4 py-10">
      <motion.div
        className="flex flex-col space-y-12 md:text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          Our Commitment
        </motion.h2>

        <motion.p
          className="text-xl md:text-2xl max-w-4xl mx-auto text-start"
          variants={itemVariants}
        >
          We are committed to serving the healthcare needs of our nation. As a Pharmaceutical company, we pledge to deliver high-quality,
           affordable medicines that improve lives and address unmet medical needs. We are dedicated to investing in formulation development, 
           fostering innovation, and promoting healthcare education and awareness. <br />
        

          <span className="h-1 w-1"></span><br/>

          Through our unwavering commitment to quality, integrity, and patient-centricity, we aim to make a positive impact
           on the health and well-being of our nation, and contribute to the country's journey towards a healthier tomorrow.<br />

         
        </motion.p>

        
      </motion.div>
    </section>
  );
};

export default Cards;
