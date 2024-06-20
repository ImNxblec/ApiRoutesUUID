const express = require('express');
const User = require('../models/user');

const router = express.Router();

const USERS = [
    new User('Carlos Dimitrakis', 'Mapasuingue oeste', 'carlos.dimitrakis@example.com'),
    new User('Guadalupe cedeño', 'Mapasuingue oeste', 'Guadalupe@example.com')
];

router.get('/', (req, res, next) => {
    res.json({ usuarios: USERS });
});

router.get('/:uid', (req, res, next) => {
    const usuario = USERS.find(u => u.id === req.params.uid);
    if (!usuario) {
        const error = new Error('Usuario no encontrado para el ID proporcionado');
        error.code = 404;
        return next(error);
    }
    res.json({ usuario });
});

router.post('/', (req, res, next) => {
    const { nombre, direccion, correo } = req.body;
    const nuevoUsuario = new User(nombre, direccion, correo);
    USERS.push(nuevoUsuario);
    res.status(201).json({ usuario: nuevoUsuario });
});

module.exports = router;
