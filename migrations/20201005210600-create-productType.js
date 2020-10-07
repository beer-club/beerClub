module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('productTypes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      typeCode: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
      },
      typeName: {
        type: Sequelize.STRING,
        allowNull: false
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
    await queryInterface.dropTable('productTypes');
  }
};