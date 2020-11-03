import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public 
const getProducts = asyncHandler( async(req,res) => {
    //Si pasamos un objeto vacio nos regresa todos los registros
    const products = await Product.find({})
    //Se castean a json y se envian
    res.json(products);
})

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public 
const getProductById = asyncHandler( async(req,res) => {
    const product = await Product.findById(req.params.id)

    if(product){
        res.json(product);
    }
    else{
        res.status(404)
        //Si no se especifica el status es 500 por default
        throw new Error('Product not found')
    } 
})

export {
    getProducts,
    getProductById
 }