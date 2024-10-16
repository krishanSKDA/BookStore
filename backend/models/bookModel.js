import mongoose from "mongoose";

//create schema
const bookSchema = mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
        },
        author:{
            type:String,
            required:true,
        }
    }
);
export const Book =mongoose.model('Cat',{name:String});