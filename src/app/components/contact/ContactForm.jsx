"use client";

import { motion } from "framer-motion";

export default function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  return (
    
    <motion.div
      className="bg-[#D7E48E] py-16 mt-4 px-4 sm:px-6 lg:px-8 rounded-3xl"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h1 className="text-2xl font-bold mb-2">CONTACT US</h1>
          <h2 className="text-4xl font-bold mb-4">Drop a Message Here</h2>
          <p className="text-black">
            Any question or remarks? Just write us a message!
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6"
          variants={containerVariants}
        >
          {/* Email, Phone, First Name, Last Name */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <motion.div variants={itemVariants}>
              <input
                type="email"
                name="email"
                placeholder="EMAIL"
                required
                className="w-full px-4 py-3 rounded-md bg-white border border-black/50"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <input
                type="tel"
                name="phone"
                placeholder="PHONE NO."
                className="w-full px-4 py-3 rounded-md bg-white border border-black/50"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <input
                type="text"
                name="firstName"
                placeholder="FIRST NAME"
                required
                className="w-full px-4 py-3 rounded-md bg-white border border-black/50"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <input
                type="text"
                name="lastName"
                placeholder="LAST NAME"
                required
                className="w-full px-4 py-3 rounded-md bg-white border border-black/50"
              />
            </motion.div>
          </div>

          {/* Subject and Message */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <motion.div variants={itemVariants}>
              <input
                type="text"
                name="subject"
                placeholder="SUBJECT"
                required
                className="w-full px-4 py-3 rounded-md bg-white border border-black/50"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <textarea
                name="message"
                placeholder="WRITE MESSAGE"
                rows="1"
                required
                className="w-full px-4 py-3 rounded-md bg-white border border-black/50"
              ></textarea>
            </motion.div>
          </div>

          {/* Footer and Submit */}
          <motion.div className="text-sm text-black" variants={itemVariants}>
            Your email address will not be published. Required fields are marked
            *
          </motion.div>
          <motion.div
            variants={itemVariants}
            // whileHover={{ scale: 1.05 }}
            // whileTap={{ scale: 0.95 }}
          >
            <button
              type="submit"
              className="w-32 bg-black text-white px-6 py-3 rounded-md hover:bg-[#2b3f56]/90 hover:font-bold transition-colors"
            >
              SUBMIT
            </button>
          </motion.div>
        </motion.form>
      </div>
    </motion.div>
  );
}
