const mongoose=require("mongoose")

const BookSchema=new mongoose.Schema({
    name:String,
    author:String,
    description:String,
    price:String,
    image:String
})
const BookModel=mongoose.model("Books",BookSchema);

module.exports=BookModel

//TjdPU8ASTEKLMU5E