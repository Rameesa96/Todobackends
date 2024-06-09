
const express = require('express');
const mongoose= require('mongoose')
const path=require('path')
const cors = require("cors")
const Shop = require('./src/routers/shops')
const User =require('./src/routers/user')
const Category = require('./src/routers/category')
const Products = require('./src/routers/products')
const app = express();
require("dotenv").config()

const port = process.env.PORT
const database_url=process.env.DATABASE_URL

mongoose.connect(`${database_url}`)
mongoose.connection.on("connected",()=>{
    console.log("database connected")
})
mongoose.connection.on("error",()=>{
    console.log("database error")
})

app.get('/', (req, res) => {
  res.send('Hello, World!');
});
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use('/shop',Shop)
app.use('/user',User)
app.use('/shop',Shop)
app.use('/products',Products)
app.use('/category',Category)


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
