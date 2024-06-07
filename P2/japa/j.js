// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Rotas da API serão definidas aqui

app.listen(PORT, () => {
  console.log(Servidor rodando na porta ${PORT});
});o 