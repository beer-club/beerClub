const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Customer } = require('../models');

module.exports = SessionController = {
    login: async (req, res) => {

        // Informacoes do corpo da requisição
        const { email, password } = req.body;
        console.log(email, password);

        // Check da existencia do usuario
        let existingUser;

        try {
            existingUser = await Customer.findOne({ 
                where: { email: email }
             });
        } catch (err) {
            return res.status(500).json({ error: 'step1-Login falhou, tente novamente' });
        }

        if (!existingUser) {
            return res.status(403).json({ error: 'Credenciais invalidas, não foi possível logar.' });
        };

        // Check da senha do usuario
        let isValidPassword = false;

        try {
            isValidPassword = await bcrypt.compare(password, existingUser.password);
        } catch (err) {
            return res.status(500).json({ error: 'Não foi possivel logar, veja suas credenciais' });
        };

        if (!isValidPassword) {
            return res.status(403).json({ error: 'Credenciais invalidas, não foi possível logar.' });
        };

        // Criar token de autenticação

        let token;

        try {
            token = jwt.sign(
                {
                    userId: existingUser.id,
                    email: existingUser.email
                },
                'senhaSecreta',
                { expiresIn: '1d' }
            );
        } catch (err) {
            return res.status(500).json({ error: 'Falha no login, tente novamente' });
        };

        res.json({
            userId: existingUser.id,
            email: existingUser.email,
            token: token
        });

    }
};