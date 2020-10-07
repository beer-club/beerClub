const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const RecorverPassword = sequelize.define('RecorverPassword', {
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
  RecorverPassword.associate = (models) => {
    RecorverPassword.hasMany(models.Customer, {
      foreignkey: 'customers_id',
      targetKey: 'id',
      as: 'senha'
    });
  }
  return ProductType;
};