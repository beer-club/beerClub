const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const KindBeer = sequelize.define('KindBeer', {
    kindCode: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    kindName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'KindBeer',
    tableName: 'kindBeers'
  });
  KindBeer.associate = (models) => {
    KindBeer.hasMany(models.Product, {
      foreignKey: 'kindBeers_kindCode',
      as: 'tipoCerveja'
    });
    
  }
  return KindBeer;
};