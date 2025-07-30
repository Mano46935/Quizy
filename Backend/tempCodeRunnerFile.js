const User=require('./Users');
const mongoose=require('mongoose');
const express=require('express');
const app=express();
const cors = require("cors");
app.use(cors());

app.use(express.json());
mongoose.connect("mongodb://localhost:27017")
.then(()=> console.log("Mongodb connected"))
.catch(()=>console.log("Not connected"));
app.post("/register",async(req,res)=>{
    const {username,password}=req.body;
    try{
        const userExist=await User.findOne({username});
        if(userExist) return res.status(400).json({message:"User already exists."});
        const user=new User({username,password});
        await user.save();
    res.json({ message: "Registered successfully" });
  } catch (err) {
    res.status(400).json({ message: "Error registering user" });
    }
});
app.post("/login",async(req,res)=>{
    const {username,password}=req.body;
    try{
        const user=await User.findOne({username,password});
        if(!user) return res.status(400).json({message: "Invalid Credentials"});
       res.json({ success: true, message: "Login successful", username });

    }
    catch (err) {
    res.status(500).json({ message: "Login failed" });
  }
});
app.listen(3000,()=>{
    console.log("Server running");
});