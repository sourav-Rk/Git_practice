import express from "express";
import dotenv from 'dotenv'
dotenv.config()
const app = express()
//login form
app.listen(process.env.PORT,console.log('running on server 6000') );