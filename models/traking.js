const { Model, DATE } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Traking = sequelize.define('Traking', {
    salesOrders_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
  /* Traking.associate = (models) => {
    traking.belongToMany(models.SalesOrder, {
      foreignkey: 'salesOrders_id',
      targetKey: 'id',
      as: 'PedidoTraking'
    });
  } */
  return Traking; 
};