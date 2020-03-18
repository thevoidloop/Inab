const express = require('express');
const app = express();

app.use(require('./category'));
<<<<<<< HEAD
app.use(require('./moon'));
// app.use(require('./login'));
// app.use(require('./upload'));
// app.use(require('./imagen'));
=======
app.use(require('./activity'));
app.use(require('./restrictionsMonth'));
app.use(require('./restrictionsMoon'));
app.use(require('./restrictions'));
>>>>>>> b1b8ba88e0beb375de10a4e2bd1e1251778f1815

module.exports = app;