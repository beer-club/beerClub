const { Product } = require('../models');
const { Sequelize } = require('../models');

module.exports = BeerController = {
    get: async (req, res) => {
        try {
            produtos = await Product.findAll({
                include: [
                    'tipoCerveja',
                    'tipoProduto',
                    'fornecedoresDoProduto'
                ], where: {
                    productTypes_typeCode: 1
                }
            });
            res.render(
                'cervejas',{
                    title: 'Cervejas',
                    cervejas: produtos
                }
            );
        } catch (err) {
            console.log(err);
        };
    }
};