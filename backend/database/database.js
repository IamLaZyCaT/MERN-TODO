const mongoose = require('mongoose');

const connectDatabase=async() =>{
    await mongoose.connect('mongodb+srv://ashishkumal788:passw0rd@cluster0.cy5ge8k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    console.log("database is connected");
}

module.exports=connectDatabase;