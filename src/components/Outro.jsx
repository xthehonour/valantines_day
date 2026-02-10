import React from 'react';
import { motion } from 'framer-motion';
import { FlowerBouquet } from './PixelArt';
const Outro = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center justify-center text-center p-8"
    >
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, -5, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="mb-12"
      >
        <FlowerBouquet size={400} />
      </motion.div>
      <motion.h2 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-2xl md:text-4xl text-rose-600 mb-8 leading-tight"
      >
        Bu çiçek sana :)
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="text-rose-400 text-xs"
      >
        Seni Seviyorum ❤️
      </motion.div>
    </motion.div>
  );
};
export default Outro;
