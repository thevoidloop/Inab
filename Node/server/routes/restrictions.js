const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Category = require('../models/category');
const RestrictionsMoon = require('../models/restrictionsMoon');
const RestrictionsMonth = require('../models/restrictionsMonth');
const Activity = require('../models/activity');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get("/moonDays", async(req, res) => {

    let body = req.body;
    let data = await mostrar(body.month, body.moon);
    res.json({
        ok: true,
        data
    });
});


function moon(luna) {
    return new Promise(function(resolve, reject) {
        RestrictionsMoon.find({ moon: luna }, function(err, data) {
            Activity.populate(data, { path: "activity" }, function(err, data) {
                let idMoon = [];
                for (let i in data) {
                    idMoon.push(data[i].activity.name);
                }
                resolve(idMoon);
            });
        });
    })
}

function month(mes) {
    return new Promise(function(resolve, reject) {
        RestrictionsMonth.find({ month: mes }, function(err, data) {
            Activity.populate(data, { path: "activity" }, function(err, data) {
                let idMonth = [];
                for (let i in data) {
                    idMonth.push(data[i].activity.name);
                }
                resolve(idMonth);
            });
        });
    })
}

async function mostrar(mes, luna) {
    try {
        let data = [];
        let idMoon = await moon(luna);
        let idMonth = await month(mes);

        for (i in idMonth) {
            for (f in idMoon) {
                if (idMonth[i] === idMoon[f]) {

                    let info = {
                        name: idMoon[f]
                    }
                    data.push(info);
                }
            }
        }
        return (data);
    } catch (error) {
        console.log(error);
    }
}

module.exports = app;