import mongoose from "mongoose";
const BookSchema = new mongoose.Schema({
    name:String,
    title:String,
    price:Number,
    category:String,
    image:String
})
const Book = mongoose.model("Book",BookSchema);
export default Book;