const express = require('express');
const app = express();

const user = require('./user/controller');
const code = require('./code/controller');
const userApi = require('./userApi/controller');
const faq = require('./faq/controller');
const review = require('./reviews/controller');
const prize = require('./prizes/controller');
const hackathon = require('./hackathon/controller');

app.use('/user', user);
app.use('/code', codingtest);
app.use('/userApi', userApi);
app.use('/faq', faq);
app.use('/review', review);
app.use('/prize', prize);
app.use('/hackathon', hackathon);

module.exports = app;