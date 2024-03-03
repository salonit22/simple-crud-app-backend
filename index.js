const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const ProductRoute = require("./routes/product.route.js");
const app = express()

// midddleware
app.use(express.json());

app.listen(9000, () => {
    console.log('server is running on port 9000')
});


//routes
app.use("/api/products", ProductRoute);


app.get('/', (req, res) => {
    res.send("hello from Node API server updated");
});


mongoose.connect("mongodb+srv://salonithiyagu:thl73d2EfpLosxHk@cluster0.132xcwz.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log("connected to the database")
    })
    .catch(() => {
        console.log("connection failed")
    })
