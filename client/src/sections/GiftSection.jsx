import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

export default function GiftSection({ content }) {
  const [opened, setOpened] = useState(false);
  const { concertInfo = {}, giftIntro, giftHint } = content;

  const handleOpen = () => {
    if (opened) return;
    setOpened(true);

    // Конфетти 🎉
    const colors = ['#a085f0', '#ff8966', '#d3c1ff', '#ffbfa1', '#b89eff'];
    const fire = (particleRatio, opts) => {
      confetti({
        origin: { y: 0.6 },
        colors,
        ...opts,
        particleCount: Math.floor(220 * particleRatio)
      });
    };
    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });

    // Сердечки эмодзи
    setTimeout(() => {
      confetti({
        particleCount: 30,
        spread: 80,
        origin: { y: 0.7 },
        scalar: 1.6,
        shapes: ['circle'],
        colors: ['#ff8966', '#a085f0']
      });
    }, 500);
  };

  return (
    <section className="section relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-lavender-200 opacity-40 blur-3xl animate-float-slow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-peach-200 opacity-40 blur-3xl animate-float" />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto text-center px-4">
        <AnimatePresence mode="wait">
          {!opened ? (
            <motion.div
              key="closed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6 }}
            >
              <p className="subtitle-script mb-4">сюрприз</p>
              <h2 className="font-serif text-4xl md:text-6xl gradient-text-shine font-semibold mb-4">
                {giftIntro}
              </h2>
              <p className="text-gray-500 text-lg mb-12">{giftHint}</p>

              <div className="flex justify-center">
                <motion.div
                  className="envelope"
                  whileHover={{ y: -8, rotate: -1 }}
                  whileTap={{ scale: 0.97 }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    y: { duration: 3, repeat: Infinity, ease: 'easeInOut' }
                  }}
                  onClick={handleOpen}
                >
                  <div className="envelope-body" />
                  <div className="envelope-flap" />
                  <div className="envelope-pocket" />
                  <motion.div
                    className="envelope-heart"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    💌
                  </motion.div>
                </motion.div>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-10 text-sm text-lavender-500 animate-pulse"
              >
                ↑ нажми на конверт
              </motion.p>
            </motion.div>
          ) : (
            <motion.div
              key="opened"
              initial={{ opacity: 0, y: 60, scale: 0.85 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="subtitle-script mb-3 text-peach-500"
              >
                твой подарок
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="font-serif text-4xl md:text-6xl gradient-text-shine font-semibold mb-10"
              >
                Надеюсь понравиться ✨
              </motion.h2>

              {/* БИЛЕТ */}
              <motion.div
                initial={{ rotate: -3, scale: 0.9 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ delay: 0.5, type: 'spring', stiffness: 80 }}
                className="relative inline-block max-w-2xl w-full mx-auto"
              >
                <div className="relative bg-gradient-to-br from-white via-lavender-50 to-peach-50 rounded-2xl shadow-2xl overflow-hidden border-2 border-white/80">
                  {/* Перфорация */}
                  <div className="absolute left-0 top-0 bottom-0 w-2 flex flex-col justify-around items-center">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <div key={i} className="w-2 h-2 rounded-full bg-lavender-100" />
                    ))}
                  </div>
                  <div className="absolute right-0 top-0 bottom-0 w-2 flex flex-col justify-around items-center">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <div key={i} className="w-2 h-2 rounded-full bg-peach-100" />
                    ))}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 p-6 md:p-8 gap-6 md:gap-4">
                    {/* Основная часть */}
                    <div className="md:col-span-2 text-left md:border-r-2 md:border-dashed md:border-lavender-200 md:pr-6">
                      <div className="text-xs uppercase tracking-[0.3em] text-lavender-500 mb-2">
                        🎫 Билет на концерт
                      </div>
                      <h3 className="font-serif text-3xl md:text-4xl gradient-text font-bold mb-4 leading-tight">
                        {concertInfo.band}
                      </h3>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-gray-700">
                          <span className="text-peach-500">📅</span>
                          <span className="font-medium">{concertInfo.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700">
                          <span className="text-lavender-500">📍</span>
                          <span className="font-medium">
                            {concertInfo.city}
                            {concertInfo.venue && (
                              <span className="text-gray-500"> · {concertInfo.venue}</span>
                            )}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Корешок */}
                    <div className="text-center flex flex-col justify-center items-center">
                      <div className="text-5xl mb-2 animate-pulse-soft">🎶</div>
                      <div className="text-xs text-gray-500 uppercase tracking-widest"></div>
                      <div className="font-serif text-3xl gradient-text font-bold"></div>
                      <div className="text-xs text-gray-400 mt-1">хорошо проведи время</div>
                    </div>
                  </div>

                  {/* Сияющая полоска */}
                  <div className="h-1 bg-gradient-to-r from-lavender-400 via-peach-400 to-lavender-400 bg-[length:200%_auto] animate-shine" />
                </div>

                {/* Сияние вокруг */}
                <div className="absolute inset-0 -z-10 blur-2xl opacity-60 bg-gradient-to-r from-lavender-300 to-peach-300 rounded-2xl" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="mt-8 flex justify-center gap-2 text-3xl"
              >
                {['💜', '✨', '🎵', '✨', '💜'].map((emoji, i) => (
                  <motion.span
                    key={i}
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.15 }}
                  >
                    {emoji}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
