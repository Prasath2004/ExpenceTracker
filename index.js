const express=require("express");
const app=express();
const bodyparser=require("body-parser")
const mongoose=require("mongoose");
const {User, Expense} = require("./schema.js")
const cors=require("cors")
app.use(bodyparser.json())

app.use(cors())

async function mongoDb(){
    try{

        await mongoose.connect("mongodb+srv://717821p145:ULXG7ToN8rFqjSH0@cluster0.k2sseco.mongodb.net/ExpenseTracker?retryWrites=true&w=majority&appName=Cluster0")
        console.log(Expense);

        const port=process.env.PORT||8000

        app.listen(port,(req,res)=>{
            console.log(`Connected and listening on ${port}`);
        })
    }catch(error){
        console.log(error);
        console.log("connect aagala");
    }
   
}
mongoDb();

app.post("/addExpense",async (req,res)=>{
  // console.log(req.body);
   try{
       await Expense.create({
           "amount":req.body.amount,
           "category":req.body.category,
           "date":req.body.date
        })

        res.status(201).json({
            "status":"success",
            "message":"Expense added successfully"
        })
   // console.log(req.body);

    }catch(error){

        res.status(500).json({
            "status":"failure",
            "message":"Expense not added",
            "error":error.message
        })

    }
})

//get all Expenses

app.get("/getExpense",async (req,res)=>{
    const expensedetail=await Expense.find();
    console.log(expensedetail);
})

//delete the Expenses

app.delete("/deleteExpense/:id",async (req,res
)=>{
    try{
        await Expense.findByIdAndDelete(req.param.id);
       //console.log(req.param.id);
        res.status(200).json({
            "status":"success",
            "message":"Deleted successfully"
        })
    }
    catch(error){
        res.status(500).json({
            "status":"failure",
            "message":"Not Deleted"
        })
    }
})
//Update the expense

app.patch("/updateExpense/:id",async (req,res)=>{
    try{
        await Expense.findByIdAndUpdate((req.params.id),{
            "amount":req.body.amount,
            "category":req.body.category,
            "date":req.body.date
        })

        res.status(200).json({
            "status":"success",
            "message":"Updated successfully"
        })


    }catch(error){
        res.status(500).json({
            "status":"failure",
            "message":"Not Updated",
            "error":error.message
        })
    }
})
