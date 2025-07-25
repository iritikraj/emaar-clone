'use client';

import { motion } from 'framer-motion';

const AnimatedDivider = () => {
  return (
    <motion.div
      className="w-32 h-px mx-auto my-6"
      initial={{ width: 0 }}
      whileInView={{ width: 128 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        background: 'linear-gradient(to right, transparent, #c5a47e, transparent)',
      }}
    />
  );
};

export default AnimatedDivider;