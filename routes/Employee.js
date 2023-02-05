const express = require('express');
const router = express.Router();

const {saveEmployee,getEmployeeByEmail,updateEmployee,deleteEmployee, getEmployees} = require('../controllers/Employee');

router.post('/save_employee',(req,res,next) => saveEmployee(req,res,next));

router.get('/get_employee_by_email',(req,res,next) => getEmployeeByEmail(req,res,next));

router.get('/employees',(req,res) => getEmployees(req,res));

router.put('/update_employee',(req,res,next) => updateEmployee(req,res,next));

router.delete('/delete_employee',(req,res,next) => deleteEmployee(req,res,next));

module.exports = router;