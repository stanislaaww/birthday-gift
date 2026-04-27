import { useMemo } from 'react';
import { motion } from 'framer-motion';

export default function DaysCounter({ startDate }) {
  const days = useMemo(() => {
    if (!startDate || startDate === '[ДАТА]') return null;
    const start = new Date(startDate);
    if (Number.isNaN(start.getTime())) return null;
    const diff = Date.now() - start.getTime();
    return Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)));
  }, [startDate]);

  if (days === null) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.8 }}
      className="glass inline-flex items-center gap-3 px-6 py-3 rounded-full mt-6"
    >
      <span className="text-lavender-500 text-sm">Мы вместе уже</span>
      <span className="font-serif text-2xl gradient-text-shine font-semibold">
        {days.toLocaleString('ru-RU')}
      </span>
      <span className="text-peach-500 text-sm">дней 💜</span>
    </motion.div>
  );
}
