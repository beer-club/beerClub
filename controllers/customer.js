const Customer = require('../models/customer');

module.exports = CustomerController = {
    create: (req, res) => {
        const { email, password, cpf, phoneNumber } = req.body;

        const createdCustomer = new Customer({
            email,
            password,
            cpf,
            phoneNumber
        });

        res.status(201).json({
            customer: createdCustomer
        });
    }
}