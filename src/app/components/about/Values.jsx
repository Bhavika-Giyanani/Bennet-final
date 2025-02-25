"use client";

import { motion } from "framer-motion";

const Values = () => {
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
    <section className="max-w-[1440px] mx-auto px-0 " >
      <div className="bg-[#DFEAA580] py-16">
        <div className="w-full max-w-[1440px] mx-auto px-4">
          <div className="flex flex-col gap-8 mb-16">
            <div className="flex items-center gap-8">
              <motion.h2
                className="text-5xl md:text-7xl font-bold"
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                viewport={{ once: true }}
              >
                CORE
                <br />
                VALUES
              </motion.h2>

              <motion.div
                className="h-[2px] ml-60 md:ml-80 overflow-x-hidden  bg-black flex-grow"
                initial="hidden"
                whileInView="visible"
                variants={lineVariant}
                viewport={{ once: true }}
              />
            </div>

            <motion.p
              className="text-xl md:text-2xl text-gray-700 max-w-3xl"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              At Bennet, our core values guide our mission and shape our
              culture, ensuring we deliver exceptional healthcare solutions.
            </motion.p>

          </div>

          <div className="relative  z-0 min-h-[800px] md:min-h-[600px]">
            {/* Circle Background Pattern */}
            <div className="absolute inset-0 z-30">
              <svg className="w-full h-full" viewBox="0 0 800 800">
                <circle
                  cx="400"
                  cy="400"
                  r="300"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="1"
                />
                <circle
                  cx="250"
                  cy="400"
                  r="300"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="1"
                />
                <circle
                  cx="550"
                  cy="400"
                  r="300"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="1"
                />
              </svg>
            </div>

            {/* Value Cards */}
            <div className="relative z-10 grid gap-8 z-40 ">
             
              {/* Top Card */}
              <motion.div
                className="bg-white p-6 rounded-2xl shadow-lg max-w-sm mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-2xl font-bold text-[#AECA1D] mb-3">
                  Integrity
                </h3>
                <p className="text-gray-700">
                  We uphold the highest ethical standards in every aspect of our
                  work, ensuring transparency and honesty.
                </p>
              </motion.div>

              {/* Middle Row */}
              <div className="flex flex-col md:flex-row mx-auto md:justify-between gap-8">
                <motion.div
                  className="bg-white p-6 rounded-2xl shadow-lg max-w-sm"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-2xl font-bold text-[#AECA1D] mb-3">
                    Collaboration
                  </h3>
                  <p className="text-gray-700">
                    Teamwork and partnership are at the heart of our operations,
                    as we work together with healthcare professionals and
                    communities to achieve shared goals.
                  </p>
                </motion.div>

                {/* Center Card - Empowerment */}
                <motion.div
                  className="bg-white p-6 rounded-2xl shadow-lg max-w-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-2xl font-bold text-[#AECA1D] mb-3">
                    Empowerment
                  </h3>
                  <p className="text-gray-700">
                    We believe in empowering individuals—both our employees and
                    our customers—by providing the tools and resources necessary
                    for better health and well-being.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-white p-6 rounded-2xl shadow-lg max-w-sm"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-2xl font-bold text-[#AECA1D] mb-3">
                    Excellence
                  </h3>
                  <p className="text-gray-700">
                    Our commitment to excellence drives us to deliver
                    high-quality products and services that consistently exceed
                    expectations, setting new standards in the industry.
                  </p>
                </motion.div>
              </div>

              {/* Bottom Card */}
              <motion.div
                className="bg-white p-6 rounded-2xl shadow-lg max-w-sm mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-2xl font-bold text-[#AECA1D] mb-3">
                  Innovation
                </h3>
                <p className="text-gray-700">
                  We embrace creativity and forward-thinking, driving continuous
                  improvement in our pharmaceutical solutions to meet evolving
                  healthcare challenges.
                </p>
              </motion.div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Values;