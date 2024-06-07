/*
Grupo:
Rafael Souza 
Paulo Kenji Souza IIyama
*/

const axios = require('axios');

// Fazendo uma requisição GET
axios.get('http://localhost:3000/api/data')
    .then(response => {
        console.log('GET /api/data', response.data);
    })
    .catch(error => {
        console.error('Erro na requisição GET', error);
    });

// Fazendo uma requisição POST
axios.post('http://localhost:3000/api/data', { data: 'exemplo de dados' })
    .then(response => {
        console.log('POST /api/data', response.data);
    })
    .catch(error => {
        console.error('Erro na requisição POST', error);
    });
