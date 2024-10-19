import express, { json, request, response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose, { Mongoose } from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from './routes/bookRoute.js';
import cors from 'cors';


const app = express();
//Allow all origin with Default of cors(*)
app.use(cors());

// Allow custom origins
// app.use(cors({ origin: 'http://localhost:3000' ,
//   methods: ['GET', 'POST','PUT','DELETE'],
//   allowedHeaders: ['Content-Type'],
// })); 


// Middleware for parsing request body
app.use(express.json());

// Home route
app.get('/', (request, response) => {
  console.log(request);
  return response.status(234).send('Welcome Buddies');
});

//book routes
app.use('/books',booksRoute);

// MongoDB Connection
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
