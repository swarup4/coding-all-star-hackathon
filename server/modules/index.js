const express = require('express');
const app = express();

const user = require('./user/controller');
const submission = require('./submission/controller');
const faq = require('./faq/controller');
const review = require('./reviews/controller');
const prize = require('./prizes/controller');
const hackathon = require('./hackathon/controller');

app.use('/user', user);
app.use('/submission', submission);
app.use('/faq', faq);
app.use('/review', review);
app.use('/prize', prize);
app.use('/hackathon', hackathon);

module.exports = app;