//Eunji Kwon - 301306237

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const express = require('./config/express');

const app = express();
app.set('view engine', 'ejs'); //
app.listen(9703);


module.exports = app;
console.log("Server is running at.. http://localhost:9703");
