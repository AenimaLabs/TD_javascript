const express = require('express');
const router = express.Router();
const { User, Article, Category, Comment } = require('../models');

router.get('/', async (req, res) => {
  const articles = await Article.findAll({
    include: [
      {
        model: User,
        as: 'author'
      },
      {
        model: Category,
        as: 'category'
      }
    ]
  });
  res.render('index', { articles });
});

module.exports = router;