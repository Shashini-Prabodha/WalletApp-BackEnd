const express = require('express')
const router = express.Router()
const Income=require('../model/Income')


router.get("/",async(req,res)=>{
     try {
        console.log("in get");
        const incomes=await Income.find()
        res.json(incomes)
    } catch (error) {
        res.send('Error'+error)
    }
})
router.get("get/:id", async(req,res) => {
    try{
           const income = await Income.findById(req.params.id)
           res.json(income)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.post('/',async(req,res)=>{
    const income=new Income({
        category:req.body.category,
        price:req.body.price,
        date:req.body.date,
        userID:req.body.userID,

    })

    try {
        const newIncome= await income.save()
        res.json(newIncome)
    } catch (error) {
        res.send(error.message)
        
    }
})

module.exports = router
