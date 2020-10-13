const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const ProductKit = sequelize.define('ProductKit', {
    products_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignkey: true,
    },
    products_id1: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignkey: true,
    },
  }, {
    sequelize,
    modelName: 'ProductKit',
    tableName: 'productKits'
  });
  ProductKit.associate = (models) => {
    // Relação
  }
  return ProductKit;
};