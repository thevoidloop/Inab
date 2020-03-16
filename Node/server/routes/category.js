const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Category = require('../models/category');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/category', (req, res) => {
    let body = req.body;

    let category = new Category({
        name: body.name
    });

    category.save((err, categoryDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err: err
            });
        }

        res.json({
            ok: true,
            user: categoryDB
        });
    });
});



module.exports = app;