const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const employeeRoutes = require('./routes/Employee');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({extended:false}));

var corsOptions = {
    origin: '*'
  }

app.use(cors(corsOptions));

app.use("/api",employeeRoutes);

app.use("/", (req,res,next) => res.json({
    success:false,
    message:"No such URL exists"
}));

app.listen(PORT,async () => {

    try{
        // connect to db
        mongoose.set('strictQuery', false)
        await mongoose.connect("mongodb+srv://devfordev:devfordev@firstcluster.babmv.mongodb.net/river_bank_solutions?retryWrites=true&w=majority");
        console.log("Connected to the database successfully");
    }catch(error){
        console.log("error connecting to the database ",error);
    }finally{
        console.log(`Application started on port : ${PORT}`)
    }
    
})