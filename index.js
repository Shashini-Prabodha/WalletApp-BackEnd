
const express = require("express")
const mongoose=require('mongoose')
const port=3000
const url='mongodb://localhost:27017/wallet' //mongo db connect to db
const bodyParser = require('body-parser')

const app = express()

// app.use(express.json);

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});
const connection=mongoose.connection // get connection obj

connection.on('open',() =>{
    console.log('connected ...!')
})

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())


const user = require("./routes/UserRoute")
app.use('/user',user)

const income = require("./routes/IncomeRoute")
app.use('/income',income)

const expense = require("./routes/ExpenseRoute")
app.use('/expense',expense)

app.listen(port ,()=>{
    console.log("Server Start")
})


