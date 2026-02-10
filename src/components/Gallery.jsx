import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { photos } from '../data/photos';
import { ChevronLeft, ChevronRight } from 'lucide-react';
const Gallery = ({ onFinish }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextPhoto = () => {
    if (currentIndex < photos.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      onFinish();
    }
  };
  const prevPhoto = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-rose-50 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-0 w-[200%] h-1/4 flex animate-scroll-left">
          {[...Array(20)].map((_, i) => (
            <img key={i} src={photos[i % photos.length].url} className="h-full object-cover border-2 border-pink-200" alt="" />
          ))}
        </div>
        <div className="absolute bottom-0 w-[200%] h-1/4 flex animate-scroll-right">
          {[...Array(20)].map((_, i) => (
            <img key={i} src={photos[(i + 5) % photos.length].url} className="h-full object-cover border-2 border-pink-200" alt="" />
          ))}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scroll-left { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes scroll-right { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
        .animate-scroll-left { animation: scroll-left 30s linear infinite; }
        .animate-scroll-right { animation: scroll-right 30s linear infinite; }
      `}} />
      <div className="relative z-10 max-w-2xl w-full px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 1.2, rotate: 5 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-4 pb-12 pixel-border-pink shadow-2xl"
          >
            <div className="w-full aspect-video flex items-center justify-center overflow-hidden">
              <img 
                src={photos[currentIndex].url} 
                alt={photos[currentIndex].caption} 
                style={{
                  transform: photos[currentIndex].rotate ? `rotate(${photos[currentIndex].rotate}deg)` : 'none'
                }}
                className={`w-full h-full border-2 border-pink-100 ${
                  photos[currentIndex].fitMode === 'contain' ? 'object-contain' : 'object-cover'
                }`}
              />
            </div>
            <div className="mt-8 text-center px-4">
              <p className="text-sm md:text-base text-rose-700 leading-relaxed">
                {photos[currentIndex].caption}
              </p>
            </div>
            <div className="absolute bottom-4 right-4 text-xs text-rose-300">
              {currentIndex + 1} / {photos.length}
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12">
          <button 
            aria-label="Previous"
            onClick={prevPhoto}
            disabled={currentIndex === 0}
            className={`p-2 bg-pink-200 text-rose-500 rounded-none pixel-border hover:bg-pink-300 transition-colors ${currentIndex === 0 ? 'opacity-30 cursor-not-allowed' : ''}`}
          >
            <ChevronLeft size={32} />
          </button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12">
          <button 
            aria-label="Next"
            onClick={nextPhoto}
            className="p-2 bg-rose-500 text-white rounded-none pixel-border hover:bg-rose-600 transition-colors shadow-lg"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Gallery;
