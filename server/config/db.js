const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      console.warn('⚠️  MONGODB_URI не задан — сервер запустится без БД (frontend будет использовать fallback-данные).');
      return null;
    }
    const conn = await mongoose.connect(uri);
    console.log(`✅ MongoDB подключена: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error('❌ Ошибка MongoDB:', error.message);
    console.warn('   Продолжаю без БД — frontend будет использовать fallback-данные.');
    return null;
  }
};

module.exports = connectDB;
