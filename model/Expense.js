const mongoose=require('mongoose')

const expenseSchema=new mongoose.Schema({
    category:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    userID:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model('Expense',expenseSchema);