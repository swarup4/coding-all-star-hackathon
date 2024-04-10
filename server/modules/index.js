const express = require('express');
const app = express();

const user = require('./user/controller');
const categories = require('./categories/controller');
const codingtest = require('./codingtest/controller');
const userApi = require('./userApi/controller');
const faq = require('./faq/controller');

app.use('/user', user);
app.use('/category', categories);
app.use('/code', codingtest);
app.use('/userApi', userApi);
app.use('/faq', faq);

module.exports = app;