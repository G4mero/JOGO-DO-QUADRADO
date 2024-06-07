/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 3000;
app.use(cors());
mongoose.connect('mongodb://127.0.0.1:27017/api_rest',
{  useNewUrlParser: true,
   useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error'));
db.once('open',function(){
    console.log('Conexão estabelecida com sucesso');
});

app.use(express.json());
app.get('/',(req,res)=>{
    res.send('API funcionando corretamente!');
});

app.listen(port,()=>{
    console.log('Servidor iniciado na porta ${port}');
});

const Product = require('./product');


app.get('/products',async (req,res) => {
    try{
       const productsResultado = await Product.find();
        res.send(productsResultado);
    } catch (err) {
        res.status(500).send(err);
    }
});
//https://cursos.alura.com.br/forum/topico-model-find-no-longer-accepts-a-callback-280263
app.get('/products/:id',async (req,res) => {
    try{
       const productsResultado = await Product.findById(req.params.id);
       if(!productsResultado) return res.satus(404).send("Produto não foi encontrado");
        res.send(productsResultado);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.post('/products',async (req,res) => {
       try{
        const product = new Product(req.body);
         await product.save();
        res.send(product.toJSON());
    } catch (error) {
        res.status(501).send({message: '${error.message} - erro ao cadastrar produto'}
        );};
        });
        
app.put('/products/:id',async (req,res) => {
    try{
       const productsResultado = await Product.findByIdAndUpdate(req.params.id,req.body);
       if(!productsResultado) return res.satus(404).send("Produto não foi encontrado");
        res.send(productsResultado);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.delete('/products/:id',async (req,res) => {
    try{
       const productsResultado = await Product.findByIdAndDelete(req.params.id);
       if(!productsResultado) return res.satus(404).send("Produto não foi encontrado");
        res.send(productsResultado);
    } catch (err) {
        res.status(500).send(err);
    }
});


