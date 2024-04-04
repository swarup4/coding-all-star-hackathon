const express = require('express');
const app = express();

const user = require('./user/controller');
const categories = require('./categories/controller');
const codingtest = require('./codingtest/controller');
const faq = require('./faq/controller');

app.use('/user', user);
app.use('/category', categories);
app.use('/code', codingtest);
app.use('/faq', faq);

module.exports = app;