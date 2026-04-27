// 🎀 Запасные данные — используются, если backend/MongoDB недоступны.
// Здесь же легко поменять контент без БД.

export const fallbackContent = {
  girlName: 'Настя',
  

  heroTitle: 'С Днём Рождения Нася',
  heroSubtitle: 'Хочу выразить свое поздравление в этом сайте ',

  photos: [
    {
      src: '/photos/photo1.jpg',
      caption: 'C'
    },
    {
      src: '/photos/photo2.jpg',
      caption: 'Днем'
    },
    {
      src: '/photos/photo3.jpg',
      caption: 'Рождения'
    },
    {
      src: '/photos/photo4.jpg',
      caption: 'Тебя'
    },
    {
      src: '/photos/photo5.jpg',
      caption: 'Дорогая'
    },
    {
      src: '/photos/photo6.jpg',
      caption: 'Настя'
    }
  ],

  message:
    'Я очень рад, что ты есть в моей жизни.\nТы делаешь каждый день ярче.\nИ сегодня я хочу сделать для тебя небольшой сюрприз.',

  videoLink: '', // YouTube embed URL или путь '/video/video.mp4'
  videoTitle: 'Видео для тебя',

  giftIntro: 'Твой подарок',
  giftHint: 'Нажми, чтобы открыть',

  concertInfo: {
    band: 'Ne Prosto Orchestra Anime World',
    date: '15.05.2026',
    city: 'Алматы',
    venue: 'Достык'
  },

  finalMessage: 'Я надеюсь, тебе понравится ❤️\nС Днём Рождения',

  musicSrc: '/music/music.mp3'
};
