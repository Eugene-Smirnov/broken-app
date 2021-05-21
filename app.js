const express = require('express');
const app = express();
const db = require('./db');
const user = require('./controllers/usercontroller');
const game = require('./controllers/gamecontroller');
const bodyParser = require('body-parser');

db.sync();
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use('/api/auth', user);
app.use(require('./middleware/validate-session'));
app.use('/api/game', game);

module.exports = app;
