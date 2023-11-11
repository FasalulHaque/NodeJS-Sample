require('dotenv').config()
const express = require("express");
const mongoose = require('mongoose');
const Product = require("./models/productModel");
const User = require("./models/userModel");
const app = express()
const product = require('./models/productModel')


app.use(express.json());

const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT;

app.get("/", (req, res) => {
    res.send("Server Working")
})




app.post("/users", async (req, res) => {
    try {

        let userDetails = await User.create(req.body);
        res.status(200).json({ message: "user created successfuly" });

    } catch (e) {
        console.log(`error occured ${e}`);
        res.status(500).json({ message: e.message });
    }
})


app.get("/users", async (req, res) => {
    try {

        let userDetails = await User.find({});
        res.status(200).json(userDetails);

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

    const { id } = req.params;
    try {

        let product = await Product.findById(id);
        res.status(200).json(product);

    } catch (e) {
        console.log(`error occured ${e}`);
        res.status(500).json({ message: e.message });
    }
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

