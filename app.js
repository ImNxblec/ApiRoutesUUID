const express = require('express');
const bodyParser = require('body-parser');
const usersRoutes = require('./routes/users');

const app = express();

app.use(bodyParser.json());

app.use('/api/users', usersRoutes);

// Manejo de errores
app.use((error, req, res, next) => {
    if (res.headersSent) {
        return next(error);
    }
    res.status(error.code || 500);
    res.json({ mensaje: error.message || 'Error desconocido' });
});

app.listen(3000, () => {
    console.log('Servidor en ejecución en el puerto 3000');
});
