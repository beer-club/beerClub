const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Suplier = sequelize.define('Suplier', {
    cnpj: {
      type: DataTypes.STRING(14),
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    companyName: {
      type:  DataTypes.STRING,
      allowNull: false,
    },
    address: DataTypes.STRING,
    addressNumber: DataTypes.INTEGER,
    addressComplement: DataTypes.STRING,
    zipCode: DataTypes.STRING,
    city: DataTypes.STRING,
    federativeUnit: DataTypes.STRING,
    country: DataTypes.STRING,
    phoneNumber: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Suplier',
    tableName: 'supliers'
  });
  suplier.associate = (models) => {
    // icluir aqui relações de associação das chaves com as outras tabelas
  }
  return Suplier;
};