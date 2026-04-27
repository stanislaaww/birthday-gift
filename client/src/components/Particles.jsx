import { useMemo } from 'react';
import { motion } from 'framer-motion';

/**
 * Анимированный фон с плавающими частицами/звёздами/сердечками.
 * variant: 'stars' | 'hearts' | 'mixed'
 */
export default function Particles({ count = 30, variant = 'mixed' }) {
  const items = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      const r = Math.random();
      let symbol = '✦';
      if (variant === 'hearts' || (variant === 'mixed' && r > 0.7)) symbol = '♥';
      else if (variant === 'stars' || (variant === 'mixed' && r > 0.4)) symbol = '✦';
      else symbol = '·';

      return {
        id: i,
        symbol,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 8 + Math.random() * 18,
        duration: 8 + Math.random() * 10,
        delay: Math.random() * 6,
        opacity: 0.25 + Math.random() * 0.35,
        color: r > 0.5 ? '#a085f0' : '#ff8966'
      };
    });
  }, [count, variant]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {items.map(p => (
        <motion.span
          key={p.id}
          className="absolute select-none"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            fontSize: p.size,
            color: p.color,
            opacity: p.opacity
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 10, -10, 0],
            opacity: [p.opacity, p.opacity * 1.5, p.opacity],
            rotate: [0, 15, -15, 0]
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          {p.symbol}
        </motion.span>
      ))}
    </div>
  );
}
