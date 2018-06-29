const express = require('express');
var router = express.Router();
var objectId = require('mongoose').Types.ObjectId;

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
    // create an object of employee model class i.e. send JSON data of employees
    var emp = new Employee({
        name: req.body.name,
        position: req.body.position,
        option: req.body.option,
        salary: req.body.salary
    });

    // insert new record into MongoDB
    emp.save((err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            console.log("Error in Employee save: " +JSON.stringify(err, undefined, 2));
        }
    });
});

// view employee by id
router.get('/:id', (req, res) => {
    // check if id is valid MongoDB id
    if (!objectId.isValid(req.params.id))
        // return res.status(400).send(`No record with given id: ${req.params.id}`);
        return res.status(400).send("No record with given id:" +req.params.id);

    // if valid -- search id
    Employee.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            console.log("Error in Retrieving Employee: " +JSON.stringify(err, undefined, 2));
        }
    });
});

module.exports = router;