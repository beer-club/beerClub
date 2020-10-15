const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Customer } = require('../models');

module.exports = CustomerController = {
    create: async (req, res) => {
        
        // Informacoes do corpo da requisição
        const { email, password, cpf, phoneNumber, username } = req.body;
        
        console.log(email, password, cpf, phoneNumber, username);

        // Check da existencia do usuario
        const existingUser = await Customer.findOne({ 
            where: { email: email }
         });

        if (existingUser) {
            return res.status(400).json({ error: 'step1-Usuario ja existe!' });
        };
        
        // Hash da senha
        let hashedPassword;

        try {
            hashedPassword = await bcrypt.hash(password, 10);
        } catch (err) {
            return res.status(500).json({ error: 'step2-Cadastro não concluido, tente novamente' });
        };

        // Criacao do usuario

        const createdCustomer = await Customer.create({
            email,
            password: hashedPassword,
            cpf,
            phoneNumber,
            name: username
        });

        try {
            await createdCustomer.save();
        } catch(error) {
            return res.status(500).json({ error: 'step3-Cadastro não concluido, tente novamente' });
        };

        // Criar token de autenticação
        let token;

        try {
            token = jwt.sign(
                { 
                    userId: createdCustomer.id, 
                    username: createdCustomer.username, 
                    email: createdCustomer.email 
                },
                'senhaSecreta',
                {expiresIn: '1d'}
            )
        } catch (err) {
            return res.status(500).json({ error: 'step4-Cadastro não concluido, tente novamente' });
        };

        res.status(201).json({
            userId: createdCustomer.userId,
            email: createdCustomer.email,
            username: createdCustomer.username,
            token: token
        });
    }
}