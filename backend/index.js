import express from "express";
import { PORT,mongoDBURL } from "./config.js";

import mongoose, { Mongoose } from "mongoose";

const app = express();

app.get('/',(request, response)=>{
    response.send('Hello World');
});

mongoose
.connect(mongoDBURL)
.then(()=>{
 console.log('App connected to database');
 app.listen(PORT, () =>{
  console.log(`Server is running on port ${PORT}`);
 });
})
 .catch((error)=>{
  console.log(error);
 });
