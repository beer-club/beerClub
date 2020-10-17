const { Product } = require('../models');
const { Sequelize } = require('../models');

module.exports = AcessorioController = {
    get: async (req, res) => {
        try {
            produtos = await Product.findAll({
                include: [
                    'tipoCerveja',
                    'tipoProduto',
                    'fornecedoresDoProduto'
                ], where: {
                    productTypes_typeCode: 4
                }
            });
            res.render(
                'acessorios',{
                    title: 'Acessorios',
                    cervejas: produtos
                }
            );
        } catch (err) {
            console.log(err);
        };
    }
};