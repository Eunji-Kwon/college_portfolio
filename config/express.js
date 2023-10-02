var config = require('config');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const compress = require('compression');
const methodOverride = require('method-override');
var session = require('express-session');
//const { escapeRegExpChars } = require('ejs/lib/utils');


module.exports = () => {
   
    var app = express();

    if(process.env.NODE_ENV === 'development'){
        app.use(morgan('dev'));
    }
    else if(process.env.NODE_ENV === 'production'){
        app.use(compress())
    }

    app.use(bodyParser.urlencoded({
        extended:true
    }))

    app.use(bodyParser.json());
    app.use(methodOverride());

    const sessionSecret='developmentSessionSecret';
    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: sessionSecret
    }));        

    app.set('views', './app/views');
    app.set('views engine', 'ejs');

    app.use('/',require('../app/routes/index.server.routes.js'))

    app.use(express.static('./public'));
    app.use(express.static('./node_modules'));
    

    return app;
}
