const express = require('express');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 5000;
const app = express();


app.use(cors());
app.use(express.json());


app.get("/" ,(req,res) => {
res.send("Hello world")
});

app.listen(port,() => {
    console.log("Listen to port!",port);
});

