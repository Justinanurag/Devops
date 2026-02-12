import express from "express"
const app=express();
const PORT=3000

app.get("/",(req,res)=>{
    res.send("Server is live")
})
app.get("/cpu",(req,res)=>{
    for(let i=0;i<100000;i++){
        Math.random();
    }
    res.send("Cpu used increase");
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});


