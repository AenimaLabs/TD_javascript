const { Sequelize, DataTypes } = require('sequelize');

class Category extends Sequelize.Model {}
Category.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
}, {
  sequelize,
  modelName: 'Category'
});

module.exports = Category;