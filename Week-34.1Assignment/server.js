import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./DbConnection.js";

dotenv.config();


await connectDB();

const app = express();
const PORT = 3000;

app.get("/",(req,res)=>{
  res.send({
    message:"Server is live now"
  })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
