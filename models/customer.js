const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    email: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cpf: {
      type: DataTypes.STRING(11),
      allowNull: false,
      unique: true,
    },
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    addressNumber: DataTypes.INTEGER,
    addressComplement: DataTypes.STRING,
    zipCode: DataTypes.STRING,
    city: DataTypes.STRING,
    federativeUnit: DataTypes.STRING,
    country: DataTypes.STRING,
    phoneNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Customer',
    tableName: 'customers',
  });
  
  Customer.associate = (models) => {
    Customer.hasMany(models.RecoverPassword, {
      foreignKey: 'customers_id',
      as: 'cliente'
    });
    Customer.belongsToMany(models.Product, {
      foreignKey: 'customers_id',
      as: 'assinaturasCliente',
      through: models.Subscription
    });

    Customer.hasMany(models.SalesOrder, {
      foreignKey: 'customers_id',
      as: 'pedidosDoCliente',
    });
  }
  return Customer;
};