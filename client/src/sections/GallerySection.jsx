import { motion } from 'framer-motion';

export default function GallerySection({ photos = [] }) {
  return (
    <section className="section relative">
      <div className="max-w-6xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h2 className="subtitle-script mb-2">Воспоминания с тобой</h2>
          {/* <h2 className="font-serif text-4xl md:text-5xl gradient-text font-semibold">
            Наши моменты
          </h2> */}
          <p className="text-gray-500 mt-3 max-w-md mx-auto">
            Нажми на каждое фото — там спрятано маленькое сообщение 💜
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {photos.map((photo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="photo-card glass"
            >
              <img
                src={photo.src}
                alt={photo.caption || `Фото ${idx + 1}`}
                onError={(e) => {
                  // Запасной плейсхолдер если фото нет
                  e.currentTarget.src = `https://images.unsplash.com/photo-${[
                    '1518895949257-7621c3c786d7',
                    '1494790108377-be9c29b29330',
                    '1503023345310-bd7c1de61c7d',
                    '1519741497674-611481863552',
                    '1469371670807-013ccf25f16a',
                    '1517841905240-472988babdf9'
                  ][idx % 6]}?w=600&q=80`;
                }}
                loading="lazy"
              />
              <div className="photo-overlay">
                <div className="text-white">
                  {photo.caption && (
                    <div className="font-script text-2xl mb-1 opacity-90">
                      {photo.caption}
                    </div>
                  )}
                  <p className="text-sm md:text-base whitespace-pre-line leading-snug font-medium">
                    {photo.text}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
