const express = require('express');
const bodyParser = require('body-parser');

// object destructuring
const { mongoose } = require('./db.js');
var employeeCtrl = require('./controllers/employeeCtrl.js')

var app = express();

// middleware
app.use(bodyParser.json());
app.use('/employees', employeeCtrl);

app.listen(3000, () => console.log('Server started at port 3000!'))