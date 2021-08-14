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
  extended: true
}));
app.use(express.static(path.join(__dirname, 'public')));










//Start the server
app.listen(PORT, ()=>{
    console.log(`My server is running on port ${PORT}`)
});









