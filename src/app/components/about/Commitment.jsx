"use client";

import { motion } from "framer-motion";

const Commitment = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <section id="commitment" className="relative bg-[url('/commitment.png')] bg-cover  bg-center bg-fixed py-20 max-w-[1440px] mx-auto px-0">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content Container */}
      <div className="relative w-full max-w-[1440px] mx-auto px-4">
        <motion.div
          className="flex flex-col space-y-16 text-white"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Header Section */}
          <motion.div
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-16"
            variants={fadeInUp}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold md:w-1/3">
              Our Commitment
            </h2>
            <p className="text-lg md:text-xl text-gray-100 md:w-1/2">
            We are committed to serving the healthcare needs of our nation. As a Pharmaceutical company, we pledge to deliver high-quality, 
            affordable medicines that improve lives and address unmet medical needs. We are dedicated to investing in formulation development,
             fostering innovation, and promoting healthcare education and awareness.
              <br className="hidden md:block" />


             <br/>
             Through our unwavering commitment to quality, integrity, and patient-centricity, we aim to make a positive impact on the health
              and well-being of our nation, and contribute to the country's journey towards a healthier tomorrow.  
          
            </p>
            
          </motion.div>

          {/* Cards Grid */}
          {/* <motion.div
            className="grid md:grid-cols-3 gap-6 md:gap-8"
            variants={fadeInUp}
            viewport={{ once: true }}
          >
            {[
              {
                text: "We offer tailored solutions through our three core divisions: Ethical, Critical Care, and the Emiror Division, bringing specialized and innovative care to those who need it most.",
                delay: 0.2,
              },
              {
                text: "We collaborate with over 500 passionate sales personnel and a network of 1,000+ distributors, ensuring consistent access to care across the country with a presence in 15+ states.",
                delay: 0.4,
              },
              {
                text: "With over 100,000 retail outlets nationwide, we bring superior healthcare solutions within easy reach for everyone. We believe in the transformative power of healthcare",
                delay: 0.6,
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                className="bg-black/80 backdrop-blur-sm text-white rounded-2xl p-8 md:p-10 text-center"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: card.delay }}
                whileHover={{ scale: 1.02 }}
              >
                <p className="text-lg md:text-xl text-gray-100">{card.text}</p>
              </motion.div>
            ))}
          </motion.div> */}


        </motion.div>
      </div>
    </section>
  );
};

export default Commitment;
