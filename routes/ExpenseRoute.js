const express = require('express')
const router = express.Router()
const Expense=require('../model/Expense')


router.get("/",async(req,res)=>{
     try {
        console.log("in get");
        const expenses=await Expense.find()
        res.json(expenses)
    } catch (error) {
        res.send('Error'+error)
    }
})
router.get("get/:id", async(req,res) => {
    try{
           const expense = await Expense.findById(req.params.id)
           res.json(expense)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.post('/',async(req,res)=>{
    const expense=new Expense({
        category:req.body.category,
        price:req.body.price,
        date:req.body.date,
        userID:req.body.userID,

    })

    try {
        const newExpense= await expense.save()
        res.json(newExpense)
    } catch (error) {
        res.send(error.message)
        
    }
})


router.get("/get/expense/:userID", async (req, res) => {
    console.log("expense get nme user");

    try {
        const expense = await Expense.find(req.params)
        let tot = 0;
        for (const i in expense) {
            tot += expense[i].price;
            console.log(" tot-> " + tot);

        }
        res.json(tot)
    } catch (err) {
        res.send('Error ' + err.message)
    }

})


module.exports = router
