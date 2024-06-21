const express = require('express');
const router = express.Router();
const { Article, User, Category, Comment } = require('../models');

router.get('/new', (req, res) => {
  res.render('article/new');
});

router.post('/new', async (req, res) => {
  const { title, content, categoryId } = req.body;
  const userId = req.session.userId;
  const article = await Article.create({ title, content, categoryId, userId });
  res.redirect('/');
});

router.get('/:id', async (req, res) => {
  const article = await Article.findByPk(req.params.id, {
    include: [
      {
        model: User,
        as: 'author'
      },
      {
        model: Category,
        as: 'category'
      },
      {
        model: Comment,
        as: 'comments'
      }
    ]
  });
  res.render('article', { article });
});

router.post('/:id/comment', async (req, res) => {
  const { content } = req.body;
  const userId = req.session.userId;
  const articleId = req.params.id;
  await Comment.create({ content, articleId, userId });
  res.redirect(`/articles/${articleId}`);
});

module.exports = router;