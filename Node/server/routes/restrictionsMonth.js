const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const RestrictionsMonth = require('../models/restrictionsMonth');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post('/restrictionsMonth', (req, res) => {
    let body = req.body;

    let restrictionsMonth = new RestrictionsMonth({
        activity: body.activity,
        month: body.month
    });

    restrictionsMonth.save((err, restrictionsMonthDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err: err
            });
        }
        res.json({
            ok: true,
            restrictionsMonth: restrictionsMonthDB
        });
    });
});


app.get('/restrictionsMonth', (req, res) => {
    let body = req.body;


    RestrictionsMonth.find({ activity: body.activity }, (err, restrictionsMonthDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err: err
            });
        }

        if (JSON.stringify(restrictionsMonthDB) === '[]') {
            return res.status(400).json({
                ok: false,
                err: 'No se encontro las restricciones'
            });
        }

        console.log(restrictionsMonthDB.length);
        res.json({
            ok: true,
            restrictions: restrictionsMonthDB
        });
    });
});




module.exports = app;