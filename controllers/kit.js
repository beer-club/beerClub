const { Product } = require('../models');
const { Sequelize } = require('../models');

module.exports = KitController = {
    get: async (req, res) => {
        try {
            produtos = await Product.findAll({
                include: [
                    'tipoCerveja',
                    'tipoProduto',
                    'fornecedoresDoProduto'
                ], where: {
                    productTypes_typeCode: 3
                }
            });
            res.render(
                'kits',{
                    title: 'kits',
                    cervejas: produtos
                }
            );
        } catch (err) {
            console.log(err);
        };
    }
};