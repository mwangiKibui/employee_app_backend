const {Schema,model} = require('mongoose');

const employeeSchema = new Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    employmentNumber:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    }
},{
    timestamps:true
});

module.exports = model('Employees',employeeSchema);