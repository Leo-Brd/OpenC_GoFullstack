const express = require('express');

const app = express();

app.use((req, use, next) => {
    console.log("test");
    next();
})

app.use((req, res, next) => {
    res.status(201);
    next();
})

app.use((req, res, next) => {
    res.json({ message : 'Votre requete a bien ete recue'})
})

module.exports = app;