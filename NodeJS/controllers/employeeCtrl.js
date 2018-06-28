const express = require('express');
var router = express.Router();

// store exported employee from models
var { Employee } = require('../models/employee');

router.get('/', (req, res) => {
    // retrieve all employees from Employees Collection
    Employee.find((err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            consol.log("Error in retrieving Employees: "+ JSON.stringify(err, undefined, 2));
        }
    });
});

module.exports = router;