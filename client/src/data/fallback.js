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
      caption: 'днем'
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
    'Я очень рад, что знаком с тобой.\nБудь такой же яркой и веселой.\nВнизу есть еще 1 подарок.',

  videoLink: 'https://www.youtube.com/watch?v=m2-A-kbEDa8', // YouTube embed URL или путь '/video/video.mp4'
  videoTitle: 'Видео для тебя',

  giftIntro: 'Твой подарок',
  giftHint: 'Нажми, чтобы открыть',

  concertInfo: {
    band: 'Ne Prosto Orchestra Anime World',
    date: '15.05.2026',
    city: 'Алматы',
    venue: 'Достык'
  },

  finalMessage: 'Я надеюсь, тебе понравилось \nС Днём Рождения',

  musicSrc: '/music/music.mp3'
};
