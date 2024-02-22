console.time('reallyExpensiveFunction');
import { ErrorRequestHandler, NextFunction, Response } from "express";
import {AdminRoute,VandorRoute}from './routes'
import bodyParser from "body-parser"
import mongoose from "mongoose";
import { MONGO_URL } from "./config";

const express=require("express");



const app=express()
// middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use('/admin',AdminRoute);
app.use('/vandor',VandorRoute);

mongoose.connect(MONGO_URL).then((result)=>{
    console.log("success connect with mongofucker")
}).catch(error=>{
    console.log(error)
})
const port=3000
app.listen(port,()=>{
    // console.clear();
    console.log("App is listen in port",port)
})
app.use((err:ErrorRequestHandler,req:Request,res:Response,next:NextFunction)=>{

    res.send(err)
})