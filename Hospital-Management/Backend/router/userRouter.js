const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Hospital=require('../models/hospitals');
const bcrypt = require('bcryptjs');   
const { hash } = require('bcryptjs');

router.get('/',(req,res)=>{
    try {
        return res.status(201).json({message:" Welcome to Hospital API's "});
    } catch (error) {
        return res.status(500).json({message:error.message})
        
    }
})
router.post('/register',async (req, res) => {
    try {
        const {name, username, email, password} = req.body;
        if(!name){
            return res.status(400).json({ message: 'Name is required' });
        }
        if(!username){
            return res.status(400).json({ message: 'Username is required' });
        }
        if(!email){
            return res.status(400).json({ message: 'Email is required' });
        }
        if(!password){
            return res.status(400).json({ message: 'Password is required' });
        }
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'Username already exists' });
        }
        const existingEmail = await User.findOne({ email });
        if (existingEmail) {
            return res.status(400).json({ message: 'Email already exists' });
        }
        const hashPassword = await bcrypt.hash(password, 10);
        const newUser={
            name,
            username,
            email,
            password:hashPassword
        }
        const user = new User(newUser);
        await user.save();
        return res.status(201).json({message: 'User registered successfully', user});
    }
        
    catch (error) {
        return res.status(500).json({ message: error.message });
        
    }
});
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username) {
            return res.status(400).json({ message: 'Username is required' });
        }
        if (!password) {
            return res.status(400).json({ message: 'Password is required' });
        }
        const user = await User.findOne({ username:username });
        if (!user) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }
        return res.status(200).json({mesaage:"logged in"});
    }
        catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

router.get("/hospitals",async(request,response)=>{
    try {
        const hospitals=await Hospital.find({});
        response.status(200).json(hospitals);
    } catch (error) {
        response.status(500).json({message:error.message});
    }
}
);
router.get("/hospitals/:id",async(request,response)=>{
    try {
        const hospitals=await Hospital.findById(request.params.id);
        response.status(200).json(hospitals);
    }
    catch (error) {
        response.status(500).json({message:error.message});
    }
}
);
router.post("/hospitals",async(request,response)=>{
    try {
        const{name,city,totalBeds,availableBeds}=request.body;
        if(!name){
            return response.status(400).json({message:"Name is required"});

        }
        else if(!city){
            return response.status(400).json({message:"City is required"});
        }
        else if(!totalBeds){
            return response.status(400).json({message:"Total no. of beds is required"});
        }
        else if(!availableBeds){
            return response.status(400).json({message:"Available no. of beds is required"});
        }
        
        const newHospital={
            name:request.body.name,
            city:request.body.city,
            totalBeds:request.body.totalBeds,
            availableBeds:request.body.availableBeds,
        }
            
        const hospitals=new Hospital(newHospital);
        await hospitals.save();
        response.status(201).json({message:"Hospital added successfully",hospitals});
        
    } catch (error) {
        response.status(500).json({message:error.message});
    }
});
router.put("/hospitals/:id",async(request,response)=>{
    try {
        const hospital=await Hospital.findByIdAndUpdate(request.params.id,request.body,{new:true});
        response.status(200).json({message:"Hospital data updated successfully",hospital});
    } catch (error) {
        response.status(500).json({message:error.message});
    }
});
router.delete("/hospitals/:id",async(request,response)=>{
    try {
        const hospital=await Hospital.findByIdAndDelete(request.params.id);
        response.status(200).json({message:"Hospital data deleted successfully",hospital});
    } catch (error) {
        response.status(500).json({message:error.message});
    }
});

module.exports = router;



