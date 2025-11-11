import express from "express";
import { PrismaClient } from "./generated/prisma/client.js";

const app = express();
const PORT = 3000;
const prismaClient = new PrismaClient();

app.get("/", async (req, res) => {
    const data= await prismaClient.user.findMany();
 res.json({
    data    
 })
  res.json({
    message: "get Endpoint",
  });
});
app.post("/", async(req, res) => {
     await prismaClient.user.create({
    data: {
      username: Math.random().toString(),
      password: Math.random().toString(),
    },
  });
  res.json({
    message: "post Endpoint",
  });
});
app.listen(PORT);
