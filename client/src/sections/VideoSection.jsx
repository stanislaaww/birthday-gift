import { motion } from 'framer-motion';

/**
 * Поддерживает:
 *  - YouTube ссылки (https://youtu.be/XXX или https://www.youtube.com/watch?v=XXX)
 *  - YouTube embed (https://www.youtube.com/embed/XXX)
 *  - локальный mp4 ('/video/video.mp4')
 *  - пустую ссылку — показываем placeholder
 */
function getYouTubeEmbedUrl(link) {
  if (!link) return null;
  if (link.includes('/embed/')) return link;
  let videoId = null;
  const ytMatch = link.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})/);
  if (ytMatch) videoId = ytMatch[1];
  if (videoId) return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`;
  return null;
}

export default function VideoSection({ link = '', title = 'Видео для тебя' }) {
  const embedUrl = getYouTubeEmbedUrl(link);
  const isLocal = link && (link.endsWith('.mp4') || link.startsWith('/video'));

  return (
    <section className="section relative">
      <div className="max-w-4xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <p className="subtitle-script mb-2">маленькое видео</p>
          <h2 className="font-serif text-4xl md:text-5xl gradient-text font-semibold">
            {title}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="glass rounded-3xl p-3 md:p-5 shadow-2xl"
        >
          <div className="relative w-full rounded-2xl overflow-hidden bg-gradient-to-br from-lavender-200 to-peach-200" style={{ aspectRatio: '16/9' }}>
            {embedUrl ? (
              <iframe
                src={embedUrl}
                title={title}
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : isLocal ? (
              <video
                src={link}
                controls
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <div className="text-6xl mb-4 animate-pulse-soft">🎬</div>
                <p className="text-lavender-600 font-medium text-lg mb-2">
                  Здесь будет видео
                </p>
                <p className="text-gray-500 text-sm max-w-xs">
                  Добавь YouTube-ссылку или mp4-файл в поле <code className="px-2 py-0.5 rounded bg-white/60 text-peach-500">videoLink</code>
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
