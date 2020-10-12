module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('trakings', {
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
      traking: {
        type: Sequelize.STRING,
      },
      trakingDate: {
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
    await queryInterface.dropTable('trakings');
  }
};