const { Model, DATE } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Traking = sequelize.define('Traking', {
    salesOrders_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignkey: true,
    },
    traking: {
      type: DataTypes.STRING,
    },
    statusDate: {
      type: DataTypes.DATE,
    },
  }, {
    sequelize,
    modelName: 'Traking',
    tableName: 'trakings'
  });
  
  Traking.associate = (models) => {
    Traking.belongsTo(models.SalesOrder, {
      foreignkey: 'salesOrders_id',
      as: 'restreamento'
    });
  }
  return Traking; 
};