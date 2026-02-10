import React from 'react';
export const Heart = ({ size = 24, color = "#ff4d6d" }) => (
  <svg width={size} height={size} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ imageRendering: 'pixelated' }}>
    <path d="M2 1H3V2H5V1H6V2H7V5H6V6H5V7H3V6H2V5H1V2H2V1Z" fill={color} />
    <path d="M2 2H3V3H5V2H6V3H7V5H6V6H5V7H3V6H2V5H1V3H2V2Z" fill={color} />
  </svg>
);
export const Envelope = ({ size = 100, isOpen = false }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ imageRendering: 'pixelated' }}>
    <rect x="1" y="4" width="14" height="10" fill="#fbcfe8" />
    <path d="M1 4L8 9L15 4" stroke="#ec4899" strokeWidth="1" />
    <rect x="1" y="4" width="14" height="10" stroke="#ec4899" strokeWidth="1" fill="none" />
    {isOpen && (
      <path d="M1 4L8 0L15 4" fill="#f9a8d4" stroke="#ec4899" strokeWidth="1" />
    )}
  </svg>
);
export const FlowerBouquet = ({ size = 400 }) => {
  const imageUrl = new URL("../assets/fotolar/Gemini_Generated_Image_5rs1as5rs1as5rs1.png", import.meta.url).href;
  return (
    <img 
      src={imageUrl}
      alt="Çiçek Buketi"
      style={{ width: size, height: 'auto', imageRendering: 'pixelated' }}
    />
  );
};
