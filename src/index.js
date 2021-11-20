const dateHandler = require('./middlewares/dateHandler');

const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (_req, res) => {
res.status(200).json({ message: 'Funfando belezinha!' });
});

app.get('/api/:date?', dateHandler);

app.listen(PORT, () => console.log(`Aplicação rodando lisa na porta ${PORT}`));