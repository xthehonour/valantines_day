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
export const FlowerBouquet = ({ size = 200 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ imageRendering: 'pixelated' }}>
    <rect x="7" y="10" width="2" height="6" fill="#15803d" />
    <path d="M6 10L5 13" stroke="#15803d" strokeWidth="1" />
    <path d="M10 10L11 13" stroke="#15803d" strokeWidth="1" />
    <rect x="7" y="5" width="2" height="2" fill="#e11d48" />
    <rect x="6" y="6" width="4" height="1" fill="#e11d48" />
    <rect x="7" y="6" width="2" height="2" fill="#fb7185" />
    <rect x="4" y="3" width="2" height="2" fill="#f43f5e" />
    <rect x="5" y="4" width="1" height="1" fill="#fca5a5" />
    <rect x="10" y="3" width="2" height="2" fill="#f43f5e" />
    <rect x="11" y="4" width="1" height="1" fill="#fca5a5" />
    <path d="M5 9L8 14L11 9H5Z" fill="#fff" stroke="#fbcfe8" />
  </svg>
);
