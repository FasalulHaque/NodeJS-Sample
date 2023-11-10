require('dotenv').config()
const express = require("express");
const mongoose = require('mongoose');
const Product = require("./models/productModel");
const app = express()
const product = require('./models/productModel')


app.use(express.json());

const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT;

app.get("/", (req, res) => {
    res.send("hello idiot")
})

app.post("/products", async (req, res) => {
    try {

        let products = await Product.create(req.body);
        res.status(200).json(products);

    } catch (e) {
        console.log(`error occured ${e}`);
        res.status(500).json({ message: e.message });
    }
})


app.get("/products", async (req, res) => {
    try {

        let products = await Product.find({});
        res.status(200).json(products);

    } catch (e) {
        console.log(`error occured ${e}`);
        res.status(500).json({ message: e.message });
    }
})


app.get("/products/:id", async (req, res) => {
    try {
        const { id } = req.params;
        let products = await Product.findById(id);
        res.status(200).json(products);

    } catch (e) {
        console.log(`error occured ${e}`);
        res.status(500).json({ message: e.message });
    }
})


app.get("/products/delete/:id", async (req, res) => {
    try {
        const { id } = req.params;
        let products = await Product.findByIdAndDelete(id);
        res.status(200).json(products);

    } catch (e) {
        console.log(`error occured ${e}`);
        res.status(500).json({ message: e.message });
    }
})

app.put("/products/update/:id", async (req, res) => {
    try {
        const { id } = req.params;
        let products = await Product.findByIdAndUpdate(id, req.body);
        res.status(200).json(products);

    } catch (e) {
        console.log(`error occured ${e}`);
        res.status(500).json({ message: e.message });
    }
})






mongoose.connect(MONGO_URL)
    .then(() =>
        console.log('MongoDB Connected!'),
        app.listen(PORT, () => {
            console.log(`server started at localhost ${PORT}`)
        })
    ).
    catch((e) => {
        console.log(`error occured ${e}`)

    })

