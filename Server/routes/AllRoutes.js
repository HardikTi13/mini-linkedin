const express=require('express')
const userRouter=require('./auth.routes')

const app=express()

app.use('/user',userRouter)

module.exports=app