const mongoose = require("mongoose");

const db_link = "mongodb://localhost:27017/kubernetes"
const Connection = async()=>{
    try {
        await mongoose.connect(db_link);
        console.log("db is connected")
    } catch (error) {
        console.log(error);
        
    }
}

Connection();