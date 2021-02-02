const express = require('express');
const PORT = 3001;
const apiRoute = require('./src/routes/apiRoute');
const path = require('path');
require('dotenv').config();
const mongoose = require('mongoose');

const app = express();

////////////// Conexao temporaria /////////////////


mongoose.connect(process.env.MONGO_CONNECTION_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    (err) => {
        if (err)
            console.log(err)
        else
            console.log("Conectado ao mongo")
    }
);
///////////////////////////////////////////////////
app.use("/", express.static(path.join(__dirname, "client/build")));
//app.use("/admin/", express.static(path.join(__dirname, "admin/build")));
app.use('/api', express.json(),apiRoute);

app.listen(PORT, () => {
    console.log('server running on port: ', PORT)
})