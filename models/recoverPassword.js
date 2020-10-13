const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const RecoverPassword = sequelize.define('RecoverPassword', {
    token: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    customer_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Customer',
        key: 'id'
      }
    },
  }, {
    sequelize,
    modelName: 'RecoverPassword',
    tableName: 'recoverPasswords'
  });
  RecoverPassword.associate = (models) => {
    
    RecoverPassword.hasMany(models.Customer, {
      foreignkey: 'customers_id',
      targetKey: 'id',
      as: 'senha'
    });
    
  }
  return RecoverPassword;
};