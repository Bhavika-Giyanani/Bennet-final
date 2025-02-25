"use client"
import Image from "next/image";
import { motion } from 'framer-motion';

const Innovation = () => {
  return (
    <section className="px-2 md:px-6 pb-10 max-w-[1440px] mx-auto px-0">
      <div className="flex flex-col space-y-8 md:space-y-14">
       
        
        {/* Header with line */}
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
          INNOVATION
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

          {/* Card Content */}
        <div className="relative rounded-[2rem] bg-gray-100 p-16  md:p-20 border border-[#2C3D5A]/20">

          <div className="absolute inset-0 flex justify-center items-center scale-75">
            <Image
              src="/GreenMolecule.png"
              alt="Molecule background"
              width={500}
              height={500}
              className="lg:scale-90"
            />
          </div>

          {/* Text */}
          <div className="relative space-y-6 text-lg md:text-2xl">
            <motion.p
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              We are proud to announce that <span className="text-2xl text-black font-bold"> Actoferrin  </span> (Lactoferrin 100mg
              tablets) has been granted a <span className="text-2xl text-black font-bold"> Patent  </span>, powered by  <span className="text-2xl text-black font-bold"> SALT  </span> technology for
              enhanced bioavailability, setting a new standard in healthcare
              solutions.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              As a major breakthrough in wound healing, we have been awarded a
              <span className="text-2xl text-black font-bold"> Patent  </span> for  <span className="text-2xl text-black font-bold"> Silver nanoparticles  </span> .
            </motion.p>
            <motion.p
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              Further pushing the boundaries of science, we have a research
              collaboration with  <span className="text-2xl text-black font-bold"> NIPER A </span> , marking another milestone in our
              journey of innovation.
            </motion.p>
          </div>

        </div>

        
      </div>
    </section>
  );
};

export default Innovation;
