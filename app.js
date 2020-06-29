require('nocamel');

// global config
config = require('./config');

// set up express
const express = require('express');
const app = express();
app.set('view engine', 'twig');
app.set('views', './views');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'));

// global database object
db = require('./models/init');

// each controller file
const home = require('./controllers/home');

// your routes
app.get('/', home.home); // routes url / to controllers/home.js home method

// start the app
app.listen(8000, () => {});
