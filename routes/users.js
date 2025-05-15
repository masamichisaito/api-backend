const express = require('express');
const router = express.Router();
const { User } = require('../models');

router.get('/', async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

router.post('/', async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = await User.create({ name, email });
    res.status(201).json(user);
  } catch (err) {
    console.error('❌ ユーザー登録失敗:', err);
    res.status(500).json({ error: '登録に失敗しました' });
  }
});

module.exports = router;
