const express = require('express');
const app = express();

const user = require('./user/controller');
const dashboard = require('./dashboard/controller');
const submission = require('./submission/controller');
const faq = require('./faq/controller');
const review = require('./reviews/controller');
const prize = require('./prizes/controller');
const hackathon = require('./hackathon/controller');
const point = require('./points/controller');
const email = require('./email/controller');

app.use('/user', user);
app.use('/dashboard', dashboard);
app.use('/submission', submission);
app.use('/faq', faq);
app.use('/review', review);
app.use('/prize', prize);
app.use('/hackathon', hackathon);
app.use('/point', point)
app.use('/email', email)

module.exports = app;