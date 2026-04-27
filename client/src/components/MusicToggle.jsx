import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MusicToggle({ src }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [hint, setHint] = useState(true);

  useEffect(() => {
    audioRef.current = new Audio(src);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.35;

    const t = setTimeout(() => setHint(false), 6000);
    return () => {
      clearTimeout(t);
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, [src]);

  const toggle = () => {
    if (!audioRef.current) return;
    setHint(false);
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play().catch(() => {});
      setPlaying(true);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      <AnimatePresence>
        {hint && !playing && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="glass px-4 py-2 rounded-full text-sm text-lavender-600 shadow-md whitespace-nowrap"
          >
            Включить музыку 🎵
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.08 }}
        onClick={toggle}
        aria-label="Toggle music"
        className="glass w-12 h-12 rounded-full flex items-center justify-center shadow-lg text-xl"
      >
        <motion.span
          animate={playing ? { rotate: [0, 360] } : { rotate: 0 }}
          transition={{ duration: 4, repeat: playing ? Infinity : 0, ease: 'linear' }}
        >
          {playing ? '🎶' : '🎵'}
        </motion.span>
      </motion.button>
    </div>
  );
}
