import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function MessageSection({ message = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [typed, setTyped] = useState('');

  useEffect(() => {
    if (!inView) return;
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setTyped(message.slice(0, i));
      if (i >= message.length) clearInterval(interval);
    }, 45);
    return () => clearInterval(interval);
  }, [inView, message]);

  return (
    <section ref={ref} className="section relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-lavender-200 opacity-30 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-peach-200 opacity-30 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-3xl text-center mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="subtitle-script mb-6 text-peach-500"
        >
          от меня — для тебя
        </motion.div>

        <div className="glass rounded-3xl p-8 md:p-14 shadow-xl">
          <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-gray-700 leading-relaxed whitespace-pre-line min-h-[180px] md:min-h-[220px]">
            {typed}
            {typed.length < message.length && (
              <span className="inline-block w-0.5 h-7 md:h-9 bg-lavender-500 ml-1 align-middle animate-pulse" />
            )}
          </p>

          {typed.length >= message.length && message.length > 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 text-4xl"
            >
              💜
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
