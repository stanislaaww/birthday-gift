const mongoose = require('mongoose');

const PhotoSchema = new mongoose.Schema({
  src: { type: String, required: true },
  text: { type: String, required: true },
  caption: { type: String, default: '' }
}, { _id: false });

const ConcertSchema = new mongoose.Schema({
  band: { type: String, default: '[НАЗВАНИЕ ГРУППЫ]' },
  date: { type: String, default: '[ДАТА КОНЦЕРТА]' },
  city: { type: String, default: '[ГОРОД]' },
  venue: { type: String, default: '[МЕСТО ПРОВЕДЕНИЯ]' }
}, { _id: false });

const ContentSchema = new mongoose.Schema({
  key: { type: String, default: 'main', unique: true },

  girlName: { type: String, default: '[ИМЯ]' },
  relationshipStart: { type: String, default: '[ДАТА]' }, // YYYY-MM-DD

  heroTitle: { type: String, default: 'С Днём Рождения ❤️' },
  heroSubtitle: { type: String, default: 'У меня для тебя есть маленькое путешествие' },

  photos: { type: [PhotoSchema], default: [] },

  message: {
    type: String,
    default: 'Я очень рад, что ты есть в моей жизни. Ты делаешь каждый день ярче. И сегодня я хочу сделать для тебя небольшой сюрприз.'
  },

  videoLink: { type: String, default: '' }, // YouTube URL или путь /video/video.mp4
  videoTitle: { type: String, default: 'Видео для тебя' },

  giftIntro: { type: String, default: 'У меня есть для тебя подарок' },
  giftHint: { type: String, default: 'Нажми, чтобы открыть' },

  concertInfo: { type: ConcertSchema, default: () => ({}) },

  finalMessage: { type: String, default: 'Я надеюсь, тебе понравится ❤️\nС Днём Рождения' },

  musicSrc: { type: String, default: '/music/music.mp3' }
}, { timestamps: true });

module.exports = mongoose.model('Content', ContentSchema);
