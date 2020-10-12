module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      productCode: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
      },
      productName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      productDescription: {
        type: Sequelize.STRING
      },
      abv: {
        type: Sequelize.DECIMAL
      },
      ibu: {
        type: Sequelize.TINYINT
      },
      drinkingTemperature: {
        type: Sequelize.STRING
      },
      countryOfOrigin: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.DECIMAL
      },
      measureUnit: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.INTEGER
      },
      imagem: {
        type: Sequelize.STRING
      },
      kindBeers_kindCode: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'kindBeers',
          key: 'kindCode',
        }
      },
      productTypes_typeCode: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'productTypes',
          key: 'typeCode',
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
    await queryInterface.dropTable('products');
  }
};