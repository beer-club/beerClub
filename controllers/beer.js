const { Product } = require('../models');
const { Sequelize } = require('../models');

module.exports = BeerController = {
    get: async (req, res) => {
        try {
            cervejas = await Product.findAll();
        } catch (err) {
            console.log(err);
        };

        res.render(
            'cervejas',{
                title: 'Cervejas',
                cervejas: cervejas
            }
        );
    }
};