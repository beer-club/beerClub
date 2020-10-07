const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const NewsLetter = suquelize.define('NewsLetter', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
   }, {
    sequelize,
    modelName: 'NewsLetter',
    tableName: 'newsLetters'
  });
  NewsLetter.associate = (models) => {
    // icluir aqui relações de associação das chaves com as outras tabelas
  }
  return NewsLetter;
};