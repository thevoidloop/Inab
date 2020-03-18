const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const RestrictionsMoon = require('../models/restrictionsMoon');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post('/restrictionsMoon', (req, res) => {
    let body = req.body;

    let restrictionsMoon = new RestrictionsMoon({
        activity: body.activity,
        moon: body.moon
    });

    restrictionsMoon.save((err, restrictionsMoonDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err: err
            });
        }
        res.json({
            ok: true,
            restrictionsMoon: restrictionsMoon
        });
    });
});


app.get('/restrictionsMoon', (req, res) => {
    let body = req.body;


    RestrictionsMoon.find({ activity: body.activity }, (err, restrictionsMoonDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err: err
            });
        }

        if (JSON.stringify(restrictionsMoonDB) === '[]') {
            return res.status(400).json({
                ok: false,
                err: 'No se encontro las restricciones'
            });
        }

        console.log(restrictionsMoonDB.length);
        res.json({
            ok: true,
            restrictions: restrictionsMoonDB
        });
    });
});




module.exports = app;