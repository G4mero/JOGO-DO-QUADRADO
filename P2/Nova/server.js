/*
Grupo:
- Rafael Souza
- Paulo Kenji Souza IIyama
*/

const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/api/data', (req, res) => {
    res.json({ message: 'Aqui estão os dados' });
});

app.post('/api/data', (req, res) => {
    const newData = req.body;
    res.json({ message: 'Dados recebidos', data: newData });
});

app.get('/api/message', (req, res) => {
    res.json({ message: 'Esta é uma nova mensagem' });
});

app.get('/api/message/:name', (req, res) => {
    const name = req.params.name;
    res.json({ message: `Olá, ${name}!` });
});

app.listen(port, () => {
    console.log(`Servidor REST rodando em http://localhost:${port}`);
});
