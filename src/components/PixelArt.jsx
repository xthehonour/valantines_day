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
  <svg width={size} height={size} viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ imageRendering: 'pixelated' }}>
    {/* Üst Kırmızı Çiçekler */}
    <rect x="60" y="10" width="10" height="10" fill="#991b1b" />
    <rect x="70" y="8" width="10" height="10" fill="#7f1d1d" />
    <rect x="80" y="10" width="10" height="10" fill="#991b1b" />
    <rect x="50" y="20" width="10" height="10" fill="#b91c1c" />
    <rect x="65" y="18" width="10" height="10" fill="#991b1b" />
    <rect x="80" y="20" width="10" height="10" fill="#991b1b" />
    <rect x="90" y="22" width="10" height="10" fill="#b91c1c" />
    <rect x="100" y="18" width="10" height="10" fill="#991b1b" />
    <rect x="110" y="20" width="10" height="10" fill="#b91c1c" />
    
    {/* İkinci Sıra Kırmızılar */}
    <rect x="40" y="30" width="10" height="10" fill="#dc2626" />
    <rect x="55" y="28" width="10" height="10" fill="#b91c1c" />
    <rect x="70" y="30" width="10" height="10" fill="#dc2626" />
    <rect x="85" y="30" width="10" height="10" fill="#dc2626" />
    <rect x="100" y="32" width="10" height="10" fill="#b91c1c" />
    <rect x="115" y="30" width="10" height="10" fill="#dc2626" />
    <rect x="35" y="40" width="10" height="10" fill="#991b1b" />
    <rect x="50" y="40" width="10" height="10" fill="#dc2626" />
    <rect x="65" y="42" width="10" height="10" fill="#dc2626" />
    <rect x="80" y="40" width="10" height="10" fill="#b91c1c" />
    <rect x="95" y="42" width="10" height="10" fill="#dc2626" />
    <rect x="110" y="45" width="10" height="10" fill="#991b1b" />
    <rect x="125" y="42" width="10" height="10" fill="#b91c1c" />
    
    {/* Orta Kırmızılar */}
    <rect x="30" y="50" width="10" height="10" fill="#b91c1c" />
    <rect x="45" y="50" width="10" height="10" fill="#ef4444" />
    <rect x="60" y="52" width="10" height="10" fill="#dc2626" />
    <rect x="75" y="50" width="10" height="10" fill="#ef4444" />
    <rect x="90" y="52" width="10" height="10" fill="#dc2626" />
    <rect x="105" y="55" width="10" height="10" fill="#b91c1c" />
    <rect x="25" y="60" width="10" height="10" fill="#991b1b" />
    <rect x="40" y="60" width="10" height="10" fill="#ef4444" />
    <rect x="55" y="62" width="10" height="10" fill="#dc2626" />
    <rect x="70" y="60" width="10" height="10" fill="#f87171" />
    <rect x="85" y="62" width="10" height="10" fill="#ef4444" />
    <rect x="100" y="65" width="10" height="10" fill="#dc2626" />
    <rect x="115" y="65" width="10" height="10" fill="#b91c1c" />
    <rect x="20" y="70" width="10" height="10" fill="#dc2626" />
    <rect x="35" y="72" width="10" height="10" fill="#f87171" />
    <rect x="50" y="70" width="10" height="10" fill="#ef4444" />
    <rect x="65" y="72" width="10" height="10" fill="#fca5a5" />
    <rect x="80" y="70" width="10" height="10" fill="#dc2626" />
    <rect x="95" y="72" width="10" height="10" fill="#f87171" />
    <rect x="110" y="75" width="10" height="10" fill="#ef4444" />
    
    {/* Alt Pembe Çiçekler */}
    <rect x="25" y="80" width="10" height="10" fill="#f87171" />
    <rect x="40" y="82" width="10" height="10" fill="#fca5a5" />
    <rect x="55" y="82" width="10" height="10" fill="#f87171" />
    <rect x="70" y="85" width="10" height="10" fill="#fca5a5" />
    <rect x="85" y="85" width="10" height="10" fill="#f87171" />
    <rect x="100" y="88" width="10" height="10" fill="#fca5a5" />
    <rect x="30" y="92" width="10" height="10" fill="#fbcfe8" />
    <rect x="45" y="94" width="10" height="10" fill="#fecaca" />
    <rect x="60" y="95" width="10" height="10" fill="#fbcfe8" />
    <rect x="75" y="97" width="10" height="10" fill="#fecaca" />
    
    {/* Sol Yapraklar */}
    <rect x="10" y="35" width="10" height="10" fill="#22c55e" />
    <rect x="5" y="45" width="10" height="10" fill="#16a34a" />
    <rect x="0" y="55" width="10" height="10" fill="#15803d" />
    <rect x="8" y="65" width="10" height="10" fill="#22c55e" />
    <rect x="2" y="75" width="10" height="10" fill="#22c55e" />
    <rect x="12" y="28" width="10" height="10" fill="#86efac" />
    <rect x="15" y="80" width="10" height="10" fill="#16a34a" />
    <rect x="5" y="88" width="10" height="10" fill="#15803d" />
    
    {/* Sağ Yapraklar */}
    <rect x="175" y="35" width="10" height="10" fill="#22c55e" />
    <rect x="180" y="45" width="10" height="10" fill="#16a34a" />
    <rect x="190" y="55" width="10" height="10" fill="#15803d" />
    <rect x="182" y="65" width="10" height="10" fill="#22c55e" />
    <rect x="188" y="75" width="10" height="10" fill="#22c55e" />
    <rect x="173" y="28" width="10" height="10" fill="#86efac" />
    <rect x="175" y="80" width="10" height="10" fill="#16a34a" />
    <rect x="185" y="88" width="10" height="10" fill="#15803d" />
    
    {/* Üst Yeşil Aksan */}
    <rect x="100" y="5" width="10" height="10" fill="#86efac" />
    <rect x="120" y="12" width="10" height="10" fill="#22c55e" />
    <rect x="25" y="12" width="10" height="10" fill="#22c55e" />
    <rect x="140" y="25" width="10" height="10" fill="#22c55e" />
    <rect x="15" y="25" width="10" height="10" fill="#86efac" />
    
    {/* Sarı Merkezler */}
    <rect x="60" y="37" width="6" height="6" fill="#fbbf24" />
    <rect x="75" y="48" width="6" height="6" fill="#fbbf24" />
    <rect x="55" y="60" width="6" height="6" fill="#fcd34d" />
    <rect x="85" y="55" width="6" height="6" fill="#fbbf24" />
    <rect x="45" y="75" width="6" height="6" fill="#fcd34d" />
    <rect x="70" y="70" width="6" height="6" fill="#fbbf24" />
    <rect x="100" y="65" width="6" height="6" fill="#fcd34d" />
    
    {/* Kahverengi Gövde */}
    <rect x="75" y="110" width="50" height="50" fill="#92400e" />
    <rect x="70" y="130" width="60" height="8" fill="#b45309" />
    <rect x="65" y="150" width="70" height="8" fill="#b45309" />
    
    {/* Saksı - Turuncu/Kahve */}
    <rect x="60" y="160" width="80" height="15" fill="#d97706" />
    <rect x="55" y="175" width="90" height="20" fill="#b45309" />
    <rect x="50" y="195" width="100" height="20" fill="#a16207" />
    
    {/* Saksı Dekorasyon - Kırmızı Şeritler */}
    <rect x="75" y="175" width="12" height="8" fill="#dc2626" />
    <rect x="113" y="175" width="12" height="8" fill="#dc2626" />
    <rect x="70" y="210" width="15" height="5" fill="#dc2626" />
    <rect x="115" y="210" width="15" height="5" fill="#dc2626" />
  </svg>
);
