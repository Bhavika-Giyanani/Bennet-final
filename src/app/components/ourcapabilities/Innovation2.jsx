"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Innovation2 = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  return (
    <motion.section
      className="mb-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container flex flex-col justify-center items-center max-w-[1440px] mx-auto px-4">
        {/* Image Slider */}
        <motion.div
          className="relative h-[400px] lg:h-[500px] w-full overflow-hidden rounded-lg"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Image
            src="/GroupPhoto1.jpg"
            alt="Team Meeting"
            fill
            className="object-cover rounded-lg max-w-[1440px]" // Adjust max-width to match the container
          />
        </motion.div>

        {/* Contact Details */}
        <motion.div
          className="relative bottom-[5vh] p-2 xl:p-6 w-full lg:w-[80vw] xl:w-[60vw] 2xl:w-[60vw] max-w-[1410px] bg-[#D7E48E] mx-auto text-center rounded-3xl space-y-6"
          variants={fadeInUp}
        >
          <p className="text-base md:text-xl xl:text-2xl text-black">
            <span className="text-xl font-bold">PATENT </span> granted for
            enhancing the bioavailability of highly unstable molecule{" "}
            <span className="text-xl font-bold"> LACTOFERRIN </span> by salt
            technology.
            <br />
            <span className="h-1 w-1"></span>
            <br />
            Innovation research done in collaboration with{" "}
            <span className="text-xl font-bold"> NIPER-A </span> for
            <span className="text-xl font-bold">
              {" "}
              SILVER NANOMIX PARTICLES{" "}
            </span>{" "}
            .
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Innovation2;
