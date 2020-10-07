module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('customers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cpf: {
        type: Sequelize.STRING(11),
        allowNull: false,
        unique: true,
      },
      name: {
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
        type: Sequelize.INTEGER,
        allowNull: false,
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
    await queryInterface.dropTable('customers');
  }
};