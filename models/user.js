const { v4: uuidv4 } = require('uuid');

class User {
    constructor(nombre, direccion, correo) {
        this.id = uuidv4(); // Genera un ID único para cada usuario
        this.nombre = nombre;
        this.direccion = direccion;
        this.correo = correo;
    }
}

module.exports = User;
