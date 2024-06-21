const express = require('express');
const router = express.Router();
const { User } = require('../models');

router.get('/register', (req, res) => {
  res.render('register');
});

router.post('/register', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.create({ email, password });
  req.session.userId = user.id;
  res.redirect('/');
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email }});
  if (user && user.password === password) {
    req.session.userId = user.id;
    res.redirect('/');
  } else {
    res.redirect('/login');
  }
});

module.exports = router;