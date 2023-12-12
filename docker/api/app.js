const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect('mongodb://mongo:27017/namesDB', { useNewUrlParser: true, useUnifiedTopology: true });

const NameSchema = new mongoose.Schema({
    name: String
});

const NameModel = mongoose.model('Name', NameSchema);

// Ruta para manejar solicitudes GET a la raíz "/"
app.get('/', (req, res) => {
    res.send('API en funcionamiento. Puedes enviar nombres a través de la ruta /api/saveName.');
});

app.post('/api/saveName', async (req, res) => {
    const { name } = req.body;
    const newName = new NameModel({ name });
    await newName.save();
    res.send('Nombre guardado con éxito.');
});

app.listen(port, () => {
    console.log(`API running at http://localhost:${port}`);
});
