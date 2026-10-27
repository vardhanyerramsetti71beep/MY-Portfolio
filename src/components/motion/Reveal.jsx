import React from "react";
import { motion } from "framer-motion";

export default function Reveal({
  children,
  className = "",
  y = 24,
  delay = 0,
  duration = 0.65,
  ease = [0.16, 1, 0.3, 1]
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
