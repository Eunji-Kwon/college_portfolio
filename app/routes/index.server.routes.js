const express = require('express');
const app = express();

app.set('view engine','ejs');

const router = express.Router();

router.get('/',(req,res,next)=>{
    res.render('index.ejs', {title:'Home'})
})


router.get('/about',(req,res,next)=>{
    res.render('about.ejs', {title:'About Me'})
})

router.get('/projects',(req,res,next)=>{
    res.render('projects.ejs', {title:'Projects'})
})




router.get('/services',(req,res,next)=>{
    res.render('services.ejs', {title:'Services'})
})

router.get('/contact',(req,res,next)=>{
    res.render('contact.ejs', {title:'Contact'})
})

module.exports = router;