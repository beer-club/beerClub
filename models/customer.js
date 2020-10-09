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
    Customer.belongsTo(models.RecoverPassword, {
<<<<<<< HEAD
      foreignkey: 'RecoverPasswords_customers_id',
=======
      foreignkey: 'customers_id',
>>>>>>> 9452a15044bff0f0d63915eea3ff4b0715ea6812
      targetKey: 'id',
      as: 'cliente'
    });
    /*Customer.belongsToMany(models.Subscription, {
      foreignkey: 'customers_id',
      targetKey: 'id',
      as: 'assinaturasCliente',
      through: 'Subscription'
    });*/
  }
  return Customer;
};