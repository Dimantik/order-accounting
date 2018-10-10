const app = require('express')();
const http = require('http').Server(app);
const bodyParser = require('body-parser');
const db = require('./db/db');

db.setUpConnection();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use('/api', require('./routes/router'));

module.exports = http;