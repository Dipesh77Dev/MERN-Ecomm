// importing modules
require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

// middleware - 
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 8080;
const dbUrI = process.env.DB_URI;

app.get("/", (req,res) => 
res.send("Hello World")
);

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});