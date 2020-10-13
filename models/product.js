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
    imagem: DataTypes.STRING,
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
    /*
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
    Product.belongsToMany(models.ProductSuplier, {
      foreignkey: 'products_id',
      targetKey: 'id',
      as: 'FornecedoresDoProduto',
      through: 'ProductSuplier'
    });
    Product.belongsToMany(models.Subscription, {
      foreignkey: 'products_id',
      targetKey: 'id',
      as: 'assinaturas',
      through: 'Subscription'
    });
    Product.belongsToMany(models.OrderProduct, {
      foreignkey: 'products_id',
      targetKey: 'id',
      as: 'produtosDoPedido',
      through: 'OrderProduct'
    });
    Product.belongsToMany(models.ProductKit, {
      foreignkey: 'products_id',
      targetKey: 'id',
      as: 'kitsDeProduto',
      through: 'ProductKit'
    });
    Product.hasMany(model.Inventory, {
      foreignkey: 'product_id',
      targetKey: 'id',
      as: ''
    });
    */
  } 
  return Product;
};