const { Sequelize, DataTypes } = require('sequelize');

class User extends Sequelize.Model {}
User.init({
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'reader'
  }
}, {
  sequelize,
  modelName: 'User'
});

module.exports = User;