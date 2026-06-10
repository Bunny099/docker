console.log("hello")
import express  from "express";
const PORT = process.env.PORT || 8080;
const app = express();

app.get("/",(req,res)=>{
    return res.status(200).json({message:"Success!"})
})

app.listen(PORT,()=>{
    console.log(`Server is running on port:${PORT}`)
})

