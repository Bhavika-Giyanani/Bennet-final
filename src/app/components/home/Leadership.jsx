"use client";

import { motion } from "framer-motion";

const Leadership = () => {
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

  const cardData = [
    {
      id: 1,
      name: "Mr. J. K. Jain",
      position: "Founder & Promoter Director",
      desc: "A visionary leader who established Bennet's foundation in the pharmaceutical industry. His innovative approach continues to guide the company's growth and success.",
    },
    {
      id: 2,
      name: "Mr. Siddharth Jain",
      position: "Technical Director",
      desc: "A versatile expert overseeing supply chain, regulatory affairs, and quality control. His comprehensive management ensures smooth operations across all technical aspects of the business.",
    },
    {
      id: 3,
      name: "Mrs. Vrushti Jain",
      position: "Creative Director",
      desc: "An innovative thinker spearheading new product development and marketing initiatives. Her creative vision drives Bennet's expansion into cutting-edge pharmaceutical solutions.",
    },
    {
      id: 4,
      name: "Mrs. Vaishali Jain",
      position: "Director",
      desc: "A financial strategist managing Bennet's financial and legal affairs. Her expertise is crucial in steering the company's growth within the domestic pharmaceutical market.",
    },
  ];

  return (
    <section className="container mx-auto px-4 relative overflow-hidden">
      <motion.div
        className="flex justify-start md:justify-center md:gap-0 lg:gap-0 items-center my-8 md:my-10 mb-10 md:mb-14 overflow-hidden"
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
          LEADERSHIP
        </motion.h2>
        <motion.div
          className="w-0 text-left md:w-[40%] lg:w-[50%] mt-2"
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
      <motion.div
        className="mb-10 md:mb-16"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
          Innovation Meets{" "}
          <span className="text-[#AECA1D] inline-block">Compassion</span>{" "}
          <span className="inline-block">Exceeding Expectations with Our</span>{" "}
          <span className="inline-block">"Exceptional Teams"</span>
        </h2>
      </motion.div>

      {/* Cards Grid */}
      <motion.div
        className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {cardData.map((card, index) => (
          <motion.div
            key={card.id}
            className="bg-black text-white p-6 md:p-10 rounded-xl md:rounded-2xl hover:scale-[1.02] transition-transform duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
            }}
          >
            <h2 className="text-lg md:text-2xl font-bold mb-2 md:mb-3">
              {card.name}
            </h2>
            <p className="text-[#AECA1D] font-bold mb-3 md:mb-4">
              {card.position}
            </p>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              {card.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Leadership;
