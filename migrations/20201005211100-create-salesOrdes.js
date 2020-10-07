module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('salesOrders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      orderNumber: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
      customer_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Customer',
          key: 'id'
        }
      },
      date: {
        type: Sequelize.date,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      address: {
        type: Sequelize.STRING
      },
      addressNumber: {
        type: Sequelize.INTEGER
      },
      addressComplement: {
        type: Sequelize.STRING
      }, 
      zipCode: {
        type: Sequelize.STRING
      }, 
      city: {
        type: Sequelize.STRING
      },
      federativeUnit: {
        type: Sequelize.STRING
      }, 
      country: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('salesOrders');
  }
};