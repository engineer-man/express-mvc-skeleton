require('nocamel');

// global config
config = require('./config');

// set up express
const express = require('express');
const redis = require('redis');
const session = require('express-session');
const store = require('connect-redis')(session);
const app = express();

let redis_client = redis.createClient({ host: 'redis', port: 6379 });

app.set('view engine', 'twig');
app.set('views', './views');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'));
app.use(session({
    store: new store({ client: redis_client }),
    secret: 'whatever',
    resave: false,
    saveUninitialized: true
}));

// global database object
db = require('./models/init');

// each controller file
const home = require('./controllers/home');

// your routes
app.get('/', home.home); // routes url / to controllers/home.js home method

// start the app
app.listen(8000, () => {});
