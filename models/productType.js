const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const ProductType = sequelize.define('ProductType', {
    typeCode: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    typeName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'ProductType',
    tableName: 'productTypes'
  });
  /* ProductType.associate = (models) => {
    ProductType.hasMany(models.Product, {
      foreignkey: 'productTypes_typeCode',
      targetKey: 'typeCode',
      as: 'tipoProduto'
    });
  } */
  return ProductType;
};