import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, RotateCcw, Volume2, VolumeX } from 'lucide-react';
const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);
  useEffect(() => {
    if (audioRef.current) { audioRef.current.volume = isMuted ? 0 : volume; }
  }, [volume, isMuted]);
  const togglePlay = () => {
    if (isPlaying) { audioRef.current.pause(); } 
    else { audioRef.current.play().catch(e => console.log("Müzik çalma hatası:", e)); }
    setIsPlaying(!isPlaying);
  };
  const restart = () => {
    audioRef.current.currentTime = 0;
    audioRef.current.play();
    setIsPlaying(true);
  };
  return (
    <div className="fixed bottom-4 left-4 z-50 bg-rose-500 text-white p-2 pixel-border flex items-center gap-4 shadow-xl">
      <audio ref={audioRef} src="/music.mp3" loop />
      <button onClick={togglePlay} className="hover:bg-rose-600 p-1 transition-colors">
        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
      </button>
      <button onClick={restart} className="hover:bg-rose-600 p-1 transition-colors">
        <RotateCcw size={20} />
      </button>
      <div className="flex items-center gap-2 border-l border-rose-400 pl-4">
        <button onClick={() => setIsMuted(!isMuted)} className="hover:text-rose-200">
          {isMuted || volume === 0 ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </button>
        <input 
          type="range" min="0" max="1" step="0.1" value={volume} 
          onChange={(e) => setVolume(parseFloat(e.target.value))}
          className="w-16 h-1 bg-rose-300 rounded-none appearance-none cursor-pointer accent-white"
        />
      </div>
      <div className="hidden md:block text-[8px] border-l border-rose-400 pl-4 uppercase tracking-tighter">
        {isPlaying ? 'Oynatılıyor' : 'Durduruldu'}
      </div>
    </div>
  );
};
export default MusicPlayer;
