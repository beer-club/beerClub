module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('deliverys', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      salesorders_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'salesorders',
          key: 'id',
          }
      },
      deliveryCode: {
        type: Sequelize.STRING,
      },
      deliveryDate: {
        type: Sequelize.DATE,
      },
      deliveryTimestamp: {
        type: Sequelize.DATE,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('deliverys');
  }
};