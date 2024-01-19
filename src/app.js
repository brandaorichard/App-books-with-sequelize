const express = require('express');

const userBookController = require('./controllers/userBook.controller');

const app = express();
app.use(express.json());

app.get('/health/live', (req, res) => res.sendStatus(200));

app.get('/userbooks/:id', userBookController.getUsersBooksById);

module.exports = app;