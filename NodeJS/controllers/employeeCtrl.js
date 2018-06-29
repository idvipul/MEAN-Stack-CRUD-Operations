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

// insert into employees
router.post('/', (req, res) => {
    // create an object of employee model class i.e. send JSON data of new employees
    var emp = new Employee({
        name: req.body.name,
        position: req.body.position,
        option: req.body.option,
        salary: req.body.salary
    })

    // insert new record into MongoDB
    emp.save((err, docs) => {
        if (!err) {
            // res.send(docs);
            res.json(docs);
        } else {
            console.log("Error in Employee save: " +JSON.stringify(err, undefined, 2));
        }
    });
});

module.exports = router;