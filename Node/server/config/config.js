//Puerto

process.env.PORT = process.env.PORT || 3000;

//Entorno

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//Vencimiento del token

process.env.CADUCIDAD_TOKEN = '48h';
//SEED de auntenticacion

process.env.SEED = process.env.SEED || 'desarrollo';

//Base de datos

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://192.168.1.232:27017/dbInab';
} else {
    urlDB = process.env.URLDB;
};

process.env.URI = urlDB;