const express = require('express');
const path = require('path');

const userRoutes = require('./routes/users');

const app = express();


app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use('/', userRoutes);


app.use((req, res) => {
  res.status(404).send('Page not found');
});

module.exports = app;