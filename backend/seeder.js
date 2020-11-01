import mongoose from 'mongoose';
//Lo importamos por el URI
import dotenv from 'dotenv';
import colors from 'colors';

import products from './data/products.js';
import users from './data/users.js';

import User from './models/userModel.js';
import Product from './models/productModel.js';
import Order from './models/orderModel.js';

import connectDB from './config/db.js';

dotenv.config()

connectDB()

const importData = async () =>{
    try {
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        const createdUser = await User.insertMany(users)
        //Se pone cero por que es el admin en los datos
        const adminUser = createdUser[0]._id

        //Agregamos el admin a los productos
        const sampleProducts = products.map( product =>{
            return {...product, user:adminUser}
        })
        await Product.insertMany(sampleProducts)

        console.log('Data Imported!'.green.inverse)
        process.exit()

    } catch (error) {
        console.log(`${error}`.red.inverse)
        process.exit(1)
    }
}

const destroytData = async () =>{
    try {
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        console.log('Data Destroyed!'.red.inverse)
        process.exit()

    } catch (error) {
        console.log(`${error}`.red.inverse)
        process.exit(1)
    }
}

//Se llama con node backend/seeder -d

if(process.argv[2] === '-d') {
    destroytData()
}
else {
    importData()
}
