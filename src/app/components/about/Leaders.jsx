"use client";
import { motion } from "framer-motion";

const Leadership = ({data}) => {
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
      img: data?.leaders[0]?.image  || null,
    },
    {
      id: 2,
      name: "Mr. Siddharth Jain",
      position: "Technical Director",
      desc: "A versatile expert overseeing supply chain, regulatory affairs, and quality control. His comprehensive management ensures smooth operations across all technical aspects of the business.",
      img: data?.leaders[1]?.image || null,
    },
    {
      id: 3,
      name: "Mrs. Vrushti Jain",
      position: "Creative Director",
      desc: "An innovative thinker spearheading new product development and marketing initiatives. Her creative vision drives Bennet's expansion into cutting-edge pharmaceutical solutions.",
      img: data?.leaders[2]?.image || null,
    },
    {
      id: 4,
      name: "Mrs. Vaishali Jain",
      position: "Director",
      desc: "A financial strategist managing Bennet's financial and legal affairs. Her expertise is crucial in steering the company's growth within the domestic pharmaceutical market.",
      img: data?.leaders[3]?.image || null,
    },
  ];

  return (
    <div>
      <section className="relative container mx-auto my-20 px-4">
     
        {/* Leadership Header */}
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

        {/* Background Elements */}
        <div className="absolute -z-10 inset-0 overflow-hidden pointer-events-none">
          <div className="absolute left-0 w-[600px] h-[600px] opacity-10">
            <img
              src="/hero.png"
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          <div className="absolute right-0 top-1/3 w-[600px] h-[600px] opacity-10">
            <img
              src="/hero.png"
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Subheading */}
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Innovation Meets Compassion
            <br />
            Exceeding Expectations with Our{" "}
            <span className="text-[#AECA1D]">"Exceptional Teams"</span>
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8  md:gap-12 relative z-10 max-w-[1020px] mx-auto px-0 "
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {cardData.map((card, index) => (
            <motion.div
              key={card.id}
              className="relative h-[540px] md:h-[584px] md:w-[350px] lg:h-[540px] lg:w-[484px] rounded-2xl overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={card.img}
                alt={card.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 m-4 p-6 bg-white/90 backdrop-blur-sm rounded-xl transition-transform duration-300 group-hover:translate-y-0">
                <h3 className="text-xl font-bold mb-2">{card.name}</h3>
                <p className="font-bold text-[#AECA1D] mb-3">{card.position}</p>
                <p className="text-gray-700 max-w-[23.8rem] ">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>


      </section>
    </div>
  );
};

export default Leadership;
