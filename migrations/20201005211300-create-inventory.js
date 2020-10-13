module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('inventorys', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      products_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'products',
          key: 'id',
          }
      },
      measureUnit: {
        type: Sequelize.STRING,
      },
      balance: {
        type: Sequelize.INTEGER,
      },
      lot: {
        type: Sequelize.INTEGER,
      },
      expiryDate: {
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
    await queryInterface.dropTable('inventorys');
  }
};