const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const path = require('path');
const bcrypt = require('bcrypt');

const app = express();

//Assigning a port number
const PORT = process.env.PORT || 7000;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({
  extended: false
}));


app.use(express.static(path.join(__dirname, 'public')));

//Rendering homepage
app.get('/', (req,res)=> {
    res.render("index");
});

//Rendering admin login page
app.get('/admin/login', (req,res)=>{
    res.render("adminlogin")
});


//Rendering admin dashboard page
app.get('/admin/dashboard', (req,res)=>{
    res.render("admindashboard")
});

app.get('/admin/logout', (req,res)=> {
    req.logout();
    res.redirect('/admin/login')
})


//Rendering users dashboard page
app.get('/users/dashboard', (req,res)=>{
    res.render("userDashboard")
});














//Start the server
app.listen(PORT, ()=>{
    console.log(`My server is running on port ${PORT}`)
});









