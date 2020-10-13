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
      foreignkey: true,
      },
    productTypes_typeCode: {
      type: DataTypes.INTEGER,
      foreignkey: true,
    },
  }, {
    sequelize,
    modelName: 'Product',
    tableName: 'products',
  });
  
  Product.associate = (models) => {
    Product.belongsTo(models.KindBeer, {
      foreignkey: 'kindBeers_kindCode',
      as: 'tipoCerveja'
    });
    Product.belongsTo(models.ProductType, {
      foreignkey: 'productTypes_typeCode',
      as: 'tipoProduto'
    });
    Product.belongsToMany(models.ProductSuplier, {
      foreignkey: 'products_id',
      as: 'fornecedoresDoProduto',
      through: 'productsupliers'
    });
    Product.belongsToMany(models.Subscription, {
      foreignkey: 'products_id',
      as: 'assinaturas',
      through: 'subscriptions'
    });
    Product.belongsToMany(models.OrderProduct, {
      foreignkey: 'products_id',
      as: 'produtosDoPedido',
      through: 'orderProducts'
    });
    Product.belongsToMany(models.ProductKit, {
      foreignkey: 'products_id',
      as: 'kitsDeProduto',
      through: 'productKits'
    });
    Product.belongsToMany(models.Inventory, {
      foreignkey: 'product_id',
      as: 'estoque',
      through: 'inventorys'
    });
  } 
  return Product;
};