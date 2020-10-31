import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';
//Cuando se agregan archivos se agrega la extension .js
import products from './data/products.js';

const app = express()

dotenv.config()

connectDB()

app.get('/',(req,res)=>{
    res.send('API is running')
})

app.get('/api/products',(req,res)=>{
    //Se castean a json y se envian
    res.json(products);
})
app.get('/api/products/:id',(req,res)=>{
    const product = products.find(p => p._id ===req.params.id)
    res.json(product);
})

const PORT = process.env.PORT || 5000

app.listen(PORT,console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))



