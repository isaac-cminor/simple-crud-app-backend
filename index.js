const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product.model.js')
const productRoute = require('./routes/product.route.js')
const app = express();

// middleware
app.use(express.json());

app.use(express.urlencoded({ extended: false }));


// routes
app.use('/api/products', productRoute);

// Get Products

app.get('/', (req, res) => {
    res.send('Hello from Node API Server Updated')
});



mongoose.connect("mongodb+srv://isaacmwesigwa7:HxEjE2YJ8jrQnSxC@backenddb.rteau.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
    .then(() => {
        console.log("Connected to database!");
        app.listen(3000, () => {
            console.log('Server is running on port 3000')
        });
    })
    .catch(() => {
        console.log("Connection Failed");
    });