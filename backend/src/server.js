import express from "express";
import { ENV } from "./config/env.js";

const app = express()


app.get("/",(req,res)=>{
    res.send("hello bhasakr")
})

app.listen(ENV.PORT,()=>{
    console.log(`server listening at the port ${ENV.PORT}`)
})
