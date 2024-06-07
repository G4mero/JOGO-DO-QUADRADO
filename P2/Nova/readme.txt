# Projeto Servidor e Cliente REST

## Grupo:
Rafael Souza 
Paulo Kenji Souza IIyama

## Instruções para Execução

### Servidor
1. Instale as dependências:
    ```bash
    npm install
    ```
2. Inicie o servidor:
    ```bash
    node server.js
http://localhost:3000
    ```

### Cliente
1. Com o servidor rodando, execute o cliente:
    ```bash
    node client.js
    ```

## Endpoints do Servidor

### GET /
- Retorna uma mensagem de boas-vindas.

### GET /api/data
- Retorna alguns dados de exemplo.

### POST /api/data
- Recebe dados no corpo da requisição e retorna uma mensagem de confirmação.
