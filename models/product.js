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
      foreignKey: true,
      },
    productTypes_typeCode: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
  }, {
    sequelize,
    modelName: 'Product',
    tableName: 'products',
  });
  
  Product.associate = (models) => {
    Product.belongsTo(models.KindBeer, {
      foreignKey: 'kindBeers_kindCode',
      as: 'tipoCerveja',
      targetKey: 'kindCode'
    });
    Product.belongsTo(models.ProductType, {
      foreignKey: 'productTypes_typeCode',
      as: 'tipoProduto'
    });
    Product.belongsToMany(models.Suplier, {
      foreignKey: 'products_id',
      as: 'fornecedoresDoProduto',
      through: models.ProductSuplier
    });
    Product.belongsToMany(models.Subscription, {
      foreignKey: 'products_id',
      as: 'assinaturas',
      through: 'subscriptions'
    });
    Product.belongsToMany(models.OrderProduct, {
      foreignKey: 'products_id',
      as: 'produtosDoPedido',
      through: 'orderProducts'
    });
    Product.belongsToMany(models.ProductKit, {
      foreignKey: 'products_id',
      as: 'kitsDeProduto',
      through: 'productKits'
    });
    /*Product.belongsToMany(models.Inventory, {
      foreignKey: 'product_id',
      as: 'estoque',
      through: 'inventorys'
    });*/
  } 
  return Product;
};