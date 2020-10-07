const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    productCode: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    productName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    productDescription: DataTypes.STRING,
    abv: DataTypes.DECIMAL(4,2),
    ibu: DataTypes.TINYINT,
    drinkingTemperature: DataTypes.STRING,
    countryOfOrigin: DataTypes.STRING,
    price: DataTypes.DECIMAL(7,2),
    measureUnit: DataTypes.STRING,
    status: DataTypes.TINYINT,
    kindBeers_kindCode: {
      type: DataTypes.INTEGER,
      references: {
        model: 'KindBeer',
        key: 'kindCode'
      }
    },
    productTypes_typeCode: {
      type: DataTypes.INTEGER,
      references: {
        model: 'ProductType',
        key: 'typeCode'
      }
    },
  }, {
    sequelize,
    modelName: 'Product',
    tableName: 'products',
  });
  
  Product.associate = (models) => {
    Product.belongsTo(models.KindBeer, {
      foreignkey: 'kindBeers_kindCode',
      targetKey: 'kindCode',
      as: 'tipoCerveja'
    });
    Product.belongsTo(models.ProductType, {
      foreignkey: 'productTypes_typeCode',
      targetKey: 'typeCode',
      as: 'tipoProduto'
    });
  }
  return Product;
};