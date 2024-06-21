const { Sequelize, DataTypes } = require('sequelize');

class Comment extends Sequelize.Model {}
Comment.init({
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  articleId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Article',
      key: 'id'
    }
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'User',
      key: 'id'
    }
  }
}, {
  sequelize,
  modelName: 'Comment'
});

module.exports = Comment;