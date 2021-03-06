const express = require('express')
const router = express.Router()
const Income = require('../model/Income')


router.get("/", async (req, res) => {
    try {
        console.log("income get");
        const incomes = await Income.find()
        res.json(incomes)
    } catch (error) {
        res.send('Error' + error)
    }
})
router.get("/get/:userID", async (req, res) => {
    console.log("income get nme user");

    try {
        const income = await Income.findOne(req.params)
        res.json(income)
    } catch (err) {
        res.send('Error ' + err)
    }
})

router.post('/', async (req, res) => {
    console.log("income post");

    const income = new Income({
        category: req.body.category,
        price: req.body.price,
        date: req.body.date,
        userID: req.body.userID,

    })

    try {
        const newIncome = await income.save()
        res.json(newIncome)
    } catch (error) {
        res.send(error.message)

    }
})


router.get("/get/income/:userID", async (req, res) => {
    console.log("income get nme user");

    try {
        const income = await Income.find(req.params)
        let tot = 0;
        for (const i in income) {
            tot += income[i].price;
            console.log(" tot-> " + tot);

        }
        res.json(tot)
    } catch (err) {
        res.send('Error ' + err.message)
    }

})

// db.incomes.aggregate(
//     [
//         {$match:{}},{$group:{userID:"60e803ec8c475437dcd4df65",total:{$sum:'$price'}}}
//     ]

// )

module.exports = router


