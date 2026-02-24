const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const dbhandler = require('./handler/db_handler');

const app = express();

//Middleware
app.use(cookieParser());
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

//routes
const default_routes = require('./routes/default_routes');
const user_routes = require('./routes/user_routes');

app.use(default_routes);
app.use(user_routes);

//Localhost 3000
app.listen(3000);
dbhandler.connectToDatabase('mongodb://10.12.5.6:27017/UUS-database');

//404
app.use((req, res) => {
  res.status(400).render('404');
});
