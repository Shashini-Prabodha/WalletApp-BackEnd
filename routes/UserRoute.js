const express = require('express')
const router = express.Router()
const User=require('../model/User')


router.get("/",async(req,res)=>{
     try {
        console.log("in get");
        const users=await User.find()
        res.json(users)
    } catch (error) {
        res.send('Error'+error)
    }
})
router.get("/get/:_id", async(req,res) => {
    console.log("income get name user");

    try{
           const user = await User.findOne(req.params)
           res.json(user)
    }catch(err){
        res.send('Error ' + err)
    }
})
router.get("/get/email/:email", async(req,res) => {
    console.log("income get email user"+req.params.email);

    try{
           const user = await User.findOne(req.params)
           res.json(user)
    console.log("sent user");

    }catch(err){
        res.send('Error ' + err)
    }
})
router.post('/',async(req,res)=>{
    const user=new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    })

    try {
        const newuser= await user.save()
        res.json(newuser)
    } catch (error) {
        res.send(error.message)
        
    }
})

module.exports = router
