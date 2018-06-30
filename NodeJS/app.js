const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// object destructuring
const { mongoose } = require('./db.js');
var employeeCtrl = require('./controllers/employeeCtrl.js');

var app = express();

// middleware
app.use(bodyParser.json());
// cors -- allow request from any port number or domain
app.use(cors({origin: 'http://localhost:4200'}));
app.use('/employees', employeeCtrl);

app.listen(3000, () => console.log('Server started at port 3000!'));