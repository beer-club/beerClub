const { Product } = require('../models');
const { Sequelize } = require('../models');

module.exports = BeerController = {
    get: async (req, res) => {
        try {
            cervejas = await Product.findAll({
                include: [
                    'tipoCerveja',
                    'tipoProduto',
                    'fornecedoresDoProduto'
                ]
            });
            console.log(cervejas);
            res.render(
                'cervejas',{
                    title: 'Cervejas',
                    cervejas: cervejas
                }
            );
        } catch (err) {
            console.log(err);
        };
    }
};