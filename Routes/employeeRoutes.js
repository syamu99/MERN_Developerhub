const express = require('express')
const router = express.Router()
const employeeController =require('../Controllers/Employee_Controller')
const employee = require('../Models/Employee')

//post,get,put/patch,delete

router.post('/add-emp',employeeController.createEmployee)  //in Browser http://localhost:5000/employees/add-emp
router.get('/allemployees',employeeController.getEmployees) //in Browser http://localhost:5000/employees/allemployees
router.get('/employees/:id',employeeController.singleEmployee)   //in Browser http://localhost:5000/employees/66649499720af0740ee9c54d
router.put('/update/:id',employeeController.updateEmployee) 
module.exports = router