module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('inventoryrecords', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      inventorys_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'inventorys',
          key: 'id',
          }
      },
      lot: {
        type: Sequelize.STRING,
      },
      movementType: {
        type: Sequelize.STRING,
      },
      movementDate: {
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
    await queryInterface.dropTable('inventoryRecords');
  }
};