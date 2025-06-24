const express=require('express')
const userRouter=require('./auth.routes')
const proposalRouter=require('./proposals')

const app=express()

app.use('/user',userRouter)
app.use('/proposal',proposalRouter)

module.exports=app