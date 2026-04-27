import { motion } from 'framer-motion';
import Particles from '../components/Particles';
import DaysCounter from '../components/DaysCounter';

export default function HeroSection({ content, onStart }) {
  return (
    <section className="section relative noise overflow-hidden">
      {/* Мягкие радужные блобы */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-lavender-300 opacity-40 blur-3xl animate-float-slow" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-peach-200 opacity-50 blur-3xl animate-float" />
      <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-peach-100 opacity-40 blur-3xl animate-float-slow" />

      <Particles count={35} variant="mixed" />

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="subtitle-script mb-4"
        >
          для тебя
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-semibold leading-tight mb-6"
        >
          <span className="gradient-text-shine">{content.heroTitle}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          {content.heroSubtitle}
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={onStart}
          className="btn-primary text-lg"
        >
          Начать →
        </motion.button>

        

        {/* Стрелка-намёк скролла */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-lavender-400 text-2xl"
        >
          ↓
        </motion.div>
      </div>
    </section>
  );
}
