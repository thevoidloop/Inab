const express = require('express');
const app = express();

app.use(require('./category'));
app.use(require('./activity'));
app.use(require('./restrictionsMonth'));
app.use(require('./restrictionsMoon'));
app.use(require('./restrictions'));

module.exports = app;