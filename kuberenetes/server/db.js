require('dotenv').config();
const mongoose = require("mongoose");

const db_link = process.env.DB_LINK
const Connection = async()=>{
    try {
        await mongoose.connect(db_link);
        console.log("db is connected")
    } catch (error) {
        console.log(error);
        
    }
}

Connection();