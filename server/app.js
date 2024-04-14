const cors = require("cors")
const express = require("express");
const app = express();
require("./db")
const userModel = require("./models/Userschema")
const port = process.env.PORT || 6001;
app.use(express.json());
app.use(cors());


app.get("/",async(req,res)=>{
    try {
        res.send("hello dosto kaise ho")
        
    } catch (error) {
        console.log(error);
        
    }
})



app.post("/api/v1/singin",async(req,res)=>{
    try {
        console.log(req.body);
        const {name,email,password} = req.body;
        const user = new userModel({
            name : name,
            email: email,
            password: password,
        })
        const newUser = await user.save();
        console.log(newUser);
        res.status(200).send(newUser)
    } catch (error) {
        console.log(error);
        
    }
})

app.post("/api/v1/login",async(req,res)=>{
    try {
        console.log(req.body);
        const {email, password} = req.body;
        const user = await userModel.findOne({email:email});
        if(user.password === password){
            res.status(200).send(user);
            console.log("login success");
        }
        
    } catch (error) {
        console.log(error);
        
    }
})

app.get("/api/v1/dashboard",async(req,res)=>{
    try {
        const user = await userModel.find();
        res.status(200).send(user);
        
    } catch (error) {
        console.log(error);
        
    }
})

app.listen(port,()=>{
    console.log(`server is running at port ${port}`);
})