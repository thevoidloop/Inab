const express = require('express');
const bodyParser = require('body-parser');
const _ = require('underscore');

const moon = require('../services/moon.js');


const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.post('/moon', (req, res) => {

    if (isNaN(Date.parse(req.body.date))) {
        return res.status(400).json({
            ok: false,
            err: 'Fecha no valida'
        });
    }

    let date = new Date(req.body.date);
    res.json(moon.getMoon(date));

});
app.post('/moon/lunation', (req, res) => {

    if (isNaN(Date.parse(req.body.datei))) {
        return res.status(400).json({
            ok: false,
            err: 'Fecha inico no valida'
        });
    }
    if (isNaN(Date.parse(req.body.datef))) {
        return res.status(400).json({
            ok: false,
            err: 'Fecha fin no valida'
        });
    }
    let datei = new Date(req.body.datei);
    let datef = new Date(req.body.datef);
    res.json(moon.getLunation(datei, datef));


});







module.exports = app;