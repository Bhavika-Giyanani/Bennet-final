"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const Cards = () => {
  const cardsData = [
    {
      id: 1,
      title: "Ethical Division",
    },
    {
      id: 2,
      title: "Critical Care Division",
    },
    {
      id: 3,
      title: "Emiror Division",
    },
  ];

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

          {/* 3 Black Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {cardsData.map((card, index) => (
            <motion.div
              key={card.id}
              custom={index}
              variants={cardVariants}
              whileHover={{
                scale: 1.03,
                y: -5,
                transition: { duration: 0.3 },
              }}
              className="bg-black text-white rounded-2xl px-2 md:px-8 py-4 md:py-4 transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              <motion.h2
                className="text-2xl md:text-3xl font-bold "
                whileHover={{ scale: 1.05, x: 10 }}
                transition={{ duration: 0.2 }}
              >
                {card.title}
              </motion.h2>
            </motion.div>
          ))}
        </div>
        
      </motion.div>
    </section>
  );
};

export default Cards;
