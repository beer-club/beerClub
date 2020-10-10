const { Customer } = require('../models');
const { sequelize } = require('../models');

module.exports = CustomerController = {
    create: async (req, res) => {
        const { email, password, cpf, phoneNumber, username } = req.body;
        
        console.log(email, password, cpf, phoneNumber, username);

        try {
            const createdCustomer = await Customer.create({
                email,
                password,
                cpf,
                phoneNumber,
                name: username
            });

            res.status(201).json({
                customer: createdCustomer
            });
        } catch(error) {
            console.log(error)
        }
    }
}