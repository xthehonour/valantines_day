import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Envelope } from './PixelArt';
const Intro = ({ onNext }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, y: -50 }}
      className="flex flex-col items-center justify-center p-8 bg-pink-100 rounded-lg pixel-border-pink max-w-md w-full mx-4"
    >
      <div className="mb-8 cursor-pointer transform hover:scale-110 transition-transform" onClick={() => setIsOpen(true)}>
        <Envelope size={150} isOpen={isOpen} />
      </div>
      {!isOpen ? (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-rose-500 text-white px-6 py-3 rounded-none pixel-border hover:bg-rose-600 transition-colors"
        >
          AÇ
        </button>
      ) : (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="mb-4 overflow-hidden rounded-md border-4 border-white shadow-lg">
            <img 
              src="https://picsum.photos/seed/us/400/300" 
              alt="Sevgilimiz" 
              className="w-full h-auto"
            />
          </div>
          <p className="text-sm md:text-base leading-relaxed mb-6 text-rose-800">
            Daima beraber olalım canım sevgilimm
          </p>
          <button 
            onClick={onNext}
            className="bg-rose-500 text-white px-6 py-3 rounded-none pixel-border hover:bg-rose-600 transition-colors"
          >
            Devam Et
          </button>
        </motion.div>
      )}
    </motion.div>
  );
};
export default Intro;
