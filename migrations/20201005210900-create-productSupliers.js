module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('productSupliers', {
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
      supliers_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'supliers',
          key: 'id',
      }
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
    await queryInterface.dropTable('productSupliers');
  }
};