const express = require('express');
const mongoose = require('mongoose');
const Content = require('../models/Content');

const router = express.Router();

// GET /api/content — получить контент сайта
router.get('/', async (req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({ error: 'DB not connected' });
    }
    let content = await Content.findOne({ key: 'main' });
    if (!content) {
      content = await Content.create({ key: 'main' });
    }
    res.json(content);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// PUT /api/content — обновить контент (admin)
router.put('/', async (req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({ error: 'DB not connected' });
    }
    const updated = await Content.findOneAndUpdate(
      { key: 'main' },
      { $set: req.body },
      { new: true, upsert: true }
    );
    res.json(updated);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
