const mongoose = require('mongoose');

const uri = 'mongodb://127.0.0.1:27017/cats';

mongoose.connect(uri)
    .then(() => console.log('Conectado 👍'))
    .catch(() => console.log('Fallo conexion ⚠️'))