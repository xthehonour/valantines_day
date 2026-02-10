import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Intro from './components/Intro';
import Gallery from './components/Gallery';
import Outro from './components/Outro';
import MusicPlayer from './components/MusicPlayer';
function App() {
  const [stage, setStage] = useState('intro');
  return (
    <div className="min-h-screen flex flex-col items-center justify-center overflow-hidden font-pixel">
      <AnimatePresence mode="wait">
        {stage === 'intro' && (
          <Intro key="intro" onNext={() => setStage('gallery')} />
        )}
        {stage === 'gallery' && (
          <Gallery key="gallery" onFinish={() => setStage('outro')} />
        )}
        {stage === 'outro' && (
          <Outro key="outro" />
        )}
      </AnimatePresence>
      <MusicPlayer />
      <div className="fixed inset-0 pointer-events-none z-[-1] opacity-20">
        {[...Array(10)].map((_, i) => (
          <div 
            key={i}
            className="absolute animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            ❤️
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;
