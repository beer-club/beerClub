module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('orderproducts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      salesorders_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'SalesOrder',
          key: 'id'
        }
      },
      products_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'products',
          key: 'id',
          }
      },
      amount: {
        type: Sequelize.INTEGER,
      },
      price: {
        type: Sequelize.DECIMAL(5,2),
      },
      totalAmount: {
        type: Sequelize.DECIMAL(8,2)
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
    await queryInterface.dropTable('orderproducts');
  }
};