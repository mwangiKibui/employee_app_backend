const Employee = require('../models/Employee');


module.exports.getEmployees = async (req,res,next) => {
    try{
        let response = await Employee.find({
        });
        return res.json({
            success:true,
            message:"Employees retrieved successfully",
            data:response
        })
    }catch(error){
        return res.json({
            success:false,
            message:"An Error Occurred while getting employees",
            error:new Error(error).message
        })
    }
}

module.exports.saveEmployee = async (req,res,next) => {
    try{
        let {firstName,lastName,email,employmentNumber,salary} = req.body;
        // check if there is another employee with the same email.
        let employeeExists = await Employee.findOne({
            email
        });
        if(employeeExists){
            return res.json({
                success:false,
                message:"Employee with same email already exists",
            })
        }
        // check if there is an employee with the same employee number.
        employeeExists = await Employee.findOne({
            employmentNumber
        });
        if(employeeExists){
            return res.json({
                success:false,
                message:"Employee with same employment number already exists",
            })
        }
        let response = await Employee.create({
            firstName,
            lastName,
            email,
            employmentNumber,
            salary
        });
        return res.json({
            success:true,
            message:"Employee saved successfully",
            data:response
        })
    }catch(error){
        return res.json({
            success:false,
            message:"An Error Occurred while saving employee",
            error:new Error(error).message
        })
    }
}

module.exports.getEmployeeByEmail = async(req,res,next) => {
    try{
        let {email} = req.query;
        let response = await Employee.findOne({
            email
        });
        if(response){
            return res.json({
                success:true,
                message:"Employee Retrieved successfully",
                data:response
            })
        }else{
            return res.json({
                success:false,
                message:`Employee with email ${email} does not exist.`,
                data:response
            })
        }
    }catch(error){
        return res.json({
            success:false,
            message:"An Error Occurred while retrieving employee",
            error:new Error(error).message
        })
    }
}

module.exports.updateEmployee = async (req,res,next) => {
    try{
        let {email} = req.query;
        let {firstName,lastName} = req.body;
        let response = await Employee.find({
            email
        });
        if(response){
            let response = await Employee.updateOne({
                email
            },{
                $set:{
                    firstName,
                    lastName
                }
            });
            return res.json({
                success:true,
                message:"Employee updated successfully",
                data:response
            })
        }else{  
            return res.json({
                success:false,
                message:`Employee with email ${email} does not exist`
            })
        }
    }catch(error){
        return res.json({
            success:false,
            message:"An Error Occurred while updating employee",
            error:new Error(error).message
        })
    }
}

module.exports.deleteEmployee = async (req,res,next) => {
    try{
        let {email} = req.query;
        let response = await Employee.find({
            email
        });
        if(response){
            let response = await Employee.deleteOne({
                email
            });
            return res.json({
                success:true,
                message:"Employee deleted successfully",
                data:response
            })
        }else{  
            return res.json({
                success:false,
                message:`Employee with email ${email} does not exist`
            })
        }
    }catch(error){
        return res.json({
            success:false,
            message:"An Error Occurred while deleting employee",
            error:new Error(error).message
        })
    }
}