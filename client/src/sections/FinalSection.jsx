import { motion } from 'framer-motion';
import Particles from '../components/Particles';

export default function FinalSection({ message = '', onRestart }) {
  return (
    <section className="section relative overflow-hidden">
      <Particles count={40} variant="hearts" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-80 h-80 rounded-full bg-peach-200 opacity-40 blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-lavender-200 opacity-40 blur-3xl animate-float-slow" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: 'spring' }}
          className="text-7xl md:text-8xl mb-6"
        >
          💝
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="font-serif text-3xl md:text-5xl gradient-text-shine font-semibold whitespace-pre-line leading-tight mb-10"
        >
          {message}
        </motion.h2>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={onRestart}
          className="btn-glass text-base"
        >
          ↻ Посмотреть ещё раз
        </motion.button>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-12 subtitle-script text-lavender-500"
        >
          с любовью ♡
        </motion.p>
      </div>
    </section>
  );
}
