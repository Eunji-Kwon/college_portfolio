//Eunji Kwon - 301306237

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const express = require('./config/express');

const app = express();
app.set('view engine', 'ejs'); //
//app.listen(9703);
app.listen(process.env.PORT || 9703, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });

module.exports = app;

