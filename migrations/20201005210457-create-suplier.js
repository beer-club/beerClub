module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('supliers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cnpj: {
        type: Sequelize.STRING(14),
        allowNull: false,
        unique: true,
      },
      companyName: {
        type: Sequelize.STRING,
        allowNull: false,
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
      phoneNumber: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('supliers');
  }
};