const mongoose=require('mongoose')

const incomeSchema=new mongoose.Schema({
    category:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    userID:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model('Income',incomeSchema);