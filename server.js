const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('RESTful API is up and running');
});

// Aquí se agregarán los endpoints de la API

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});