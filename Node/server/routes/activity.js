const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Activity = require('../models/activity');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/activity', (req, res) => {
    let body = req.body;

    let activity = new Activity({
        name: body.name,
        category: body.category
    });

    activity.save((err, activityDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err: err
            });
        }
        res.json({
            ok: true,
            activity: activity
        });
    });
});

module.exports = app;