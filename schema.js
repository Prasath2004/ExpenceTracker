const mongoose=require("mongoose")

//Define Schema

const expenseTrackerSchema=new mongoose.Schema({
    amount: {
        type:Number
    },
    category:{
        type:String
    },
    date:{
        type:String
    }
}, {versionKey: false})

//creating model
//model name should always start with Capital letter
const Expense=mongoose.model('ExpenseDetails',expenseTrackerSchema);


//Schema for UserDetails

const userDetailsSchema=new mongoose.Schema({
    username:{
        type:String
    },
    emailId:{
        type:String
    },
    password:{
        type:String
    }
},{versionKey:false})

//creating model for UserDetails

const User=mongoose.model("UserDetails",userDetailsSchema);

module.exports={Expense, User}
