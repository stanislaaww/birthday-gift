# 💜 Birthday Gift — Романтический интерактивный сайт-подарок

Полноценный full-stack проект на **React + Node.js + Express + MongoDB** с анимациями Framer Motion и стилями TailwindCSS. Лавандово-персиковая палитра, glassmorphism, мягкие плавные анимации.

## ✨ Что внутри

- 🌸 **Экран приветствия** — градиент, анимированные частицы, кнопка «Начать»
- 📸 **Галерея воспоминаний** — grid-сетка с glassmorphism и hover-подписями
- 💌 **Поздравление** — текст печатается по буквам (typing animation)
- 🎬 **Видео-секция** — поддержка YouTube embed и локального mp4
- 🎁 **Подарок** — анимированный конверт, который открывается и выпускает билет
- 💕 **Финальный экран** — финальное поздравление + кнопка «Посмотреть ещё раз»
- 🎵 **Фоновая музыка** — кнопка вкл/выкл
- ⏳ **Счётчик «Мы вместе XXX дней»**
- 📱 **Полная адаптивность** — телефон / планшет / компьютер

## 📁 Структура проекта

```
birthday-gift/
├── client/                          # React frontend
│   ├── public/
│   │   ├── index.html
│   │   ├── music/                   # сюда положите music.mp3
│   │   └── photos/                  # сюда положите фотографии
│   ├── src/
│   │   ├── components/
│   │   │   ├── Particles.jsx        # анимированные частицы фона
│   │   │   ├── MusicToggle.jsx      # кнопка вкл/выкл музыки
│   │   │   └── DaysCounter.jsx      # счётчик дней вместе
│   │   ├── sections/
│   │   │   ├── HeroSection.jsx      # экран приветствия
│   │   │   ├── GallerySection.jsx   # галерея воспоминаний
│   │   │   ├── MessageSection.jsx   # типинг-поздравление
│   │   │   ├── VideoSection.jsx     # видео
│   │   │   ├── GiftSection.jsx      # подарок-конверт + билет
│   │   │   └── FinalSection.jsx    # финальный экран
│   │   ├── data/
│   │   │   └── fallback.js          # запасные данные если MongoDB недоступна
│   │   ├── hooks/
│   │   │   └── useContent.js        # хук загрузки контента с backend
│   │   ├── styles/
│   │   │   └── index.css            # Tailwind + кастомные стили
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── vite.config.js
│   └── .env.example
│
├── server/                          # Node.js backend
│   ├── config/
│   │   └── db.js                    # подключение MongoDB
│   ├── models/
│   │   └── Content.js               # схема контента
│   ├── routes/
│   │   └── content.js               # API endpoints
│   ├── seed.js                      # скрипт начального заполнения БД
│   ├── index.js                     # express-сервер
│   ├── package.json
│   └── .env.example
│
├── package.json                     # корневой (npm-скрипты)
├── render.yaml                      # деплой на Render
├── vercel.json                      # деплой на Vercel
└── README.md
```

## 🚀 Быстрый старт (локально)

### 1. Установка зависимостей

```bash
# В корне проекта
npm install
npm run install:all
```

### 2. Настройка переменных окружения

**`server/.env`:**
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/birthday-gift
# или MongoDB Atlas:
# MONGODB_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/birthday-gift
CLIENT_URL=http://localhost:5173
```

**`client/.env`:**
```env
VITE_API_URL=http://localhost:5000
```

### 3. Заполнение базы данных начальными данными

```bash
cd server
npm run seed
```

### 4. Запуск (в двух терминалах)

```bash
# Терминал 1 — backend
cd server
npm run dev

# Терминал 2 — frontend
cd client
npm run dev
```

Откройте: **http://localhost:5173**

> **💡 Если MongoDB недоступна** — сайт всё равно будет работать на запасных данных из `client/src/data/fallback.js`.

---

## 🖼 Как заменить фото и текст

### Вариант А — через MongoDB (рекомендуется)

Отредактируйте `server/seed.js` — замените массив `photos`, `videoLink`, `concertInfo` и т.д., затем:

```bash
cd server
npm run seed
```

### Вариант Б — без MongoDB (быстро)

Отредактируйте `client/src/data/fallback.js` — там все тексты, фото и данные. Сайт автоматически возьмёт их.

### Куда положить файлы

- **Фото**: `client/public/photos/photo1.jpg`, `photo2.jpg`, …
- **Музыка**: `client/public/music/music.mp3`
- **Локальное видео**: `client/public/video/video.mp4` (или указать YouTube-ссылку)

---

## 🎫 Как поменять билет (концерт)

В `server/seed.js` (или `client/src/data/fallback.js`) найдите объект `concertInfo`:

```js
concertInfo: {
  band: "Название группы",
  date: "31 декабря 2026",
  city: "Москва",
  venue: "ВТБ Арена"
}
```

После изменений в seed — перезапустите `npm run seed`.

---

## 👤 Как изменить имя и дату начала отношений

В `client/src/data/fallback.js` (и/или в `seed.js`):

```js
girlName: "[ИМЯ]",                  // → замените на имя
relationshipStart: "[ДАТА]"         // → формат: "2023-06-15"
```

Счётчик «Мы вместе XXX дней» считается автоматически.

---

## 🌍 Деплой

### Frontend на **Vercel** или **Netlify**

```bash
cd client
npm run build
```

- **Vercel**: импортируйте репозиторий, root directory = `client`, framework = Vite
- **Netlify**: build command = `npm run build`, publish directory = `dist`

В переменных окружения укажите `VITE_API_URL` = URL вашего backend.

### Backend на **Render**

1. Создайте Web Service на [render.com](https://render.com)
2. Root directory = `server`
3. Build: `npm install`
4. Start: `npm start`
5. Environment Variables:
   - `MONGODB_URI` — строка подключения MongoDB Atlas
   - `CLIENT_URL` — URL вашего frontend
   - `PORT` = 10000

В корне есть `render.yaml` — можно деплоить через Blueprint в один клик.

### MongoDB

Используйте бесплатный кластер на [MongoDB Atlas](https://www.mongodb.com/atlas). Создайте кластер → Database User → Network Access (0.0.0.0/0) → скопируйте connection string в `MONGODB_URI`.

---

## 💖 Готово!

С Днём Рождения её! 🎂✨
