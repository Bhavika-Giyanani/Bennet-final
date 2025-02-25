"use client";
import { motion } from "framer-motion";

export default function AnimatedText({ text }) {
  const words = text.split(" ");
  return (
    <h2 className="flex flex-wrap gap-2">
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ delay: index * 0.2, duration: 0.5 }}
        >
          {word}
        </motion.span>
      ))}
    </h2>
  );
}
