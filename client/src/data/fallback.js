// 🎀 Запасные данные — используются, если backend/MongoDB недоступны.
// Здесь же легко поменять контент без БД.

export const fallbackContent = {
  girlName: '[ИМЯ]',
  relationshipStart: '[ДАТА]', // формат YYYY-MM-DD, например '2023-06-15'

  heroTitle: 'С Днём Рождения ❤️',
  heroSubtitle: 'У меня для тебя есть маленькое путешествие',

  photos: [
    {
      src: '/photos/photo1.jpg',
      text: 'Наше первое фото вместе.\nЯ тогда понял, что ты особенная',
      caption: 'Начало'
    },
    {
      src: '/photos/photo2.jpg',
      text: 'Этот день был одним из самых счастливых',
      caption: 'Счастье'
    },
    {
      src: '/photos/photo3.jpg',
      text: 'С тобой даже обычные моменты\nстановятся особенными',
      caption: 'Магия'
    },
    {
      src: '/photos/photo4.jpg',
      text: 'Каждая улыбка с тобой\nостаётся со мной навсегда',
      caption: 'Тепло'
    },
    {
      src: '/photos/photo5.jpg',
      text: 'С тобой я научился\nценить маленькие радости',
      caption: 'Вместе'
    },
    {
      src: '/photos/photo6.jpg',
      text: 'Ты — моя любимая часть\nкаждого дня',
      caption: 'Любовь'
    }
  ],

  message:
    'Я очень рад, что ты есть в моей жизни.\nТы делаешь каждый день ярче.\nИ сегодня я хочу сделать для тебя небольшой сюрприз.',

  videoLink: '', // YouTube embed URL или путь '/video/video.mp4'
  videoTitle: 'Видео для тебя',

  giftIntro: 'У меня есть для тебя подарок',
  giftHint: 'Нажми, чтобы открыть',

  concertInfo: {
    band: '[НАЗВАНИЕ ГРУППЫ]',
    date: '[ДАТА КОНЦЕРТА]',
    city: '[ГОРОД]',
    venue: '[МЕСТО ПРОВЕДЕНИЯ]'
  },

  finalMessage: 'Я надеюсь, тебе понравится ❤️\nС Днём Рождения',

  musicSrc: '/music/music.mp3'
};
