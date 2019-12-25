const express = require('express')
const app = express()
const serverless = require('serverless-http')
const router = express.Router()
const path = require('path')
const bodyparser = require('body-parser')
process.env.SILENCE_EMPTY_LAMBDA_WARNING=true
var count=60
var message="Waiting"

app.use(bodyparser.json())
app.use(express.static('../dist'));
// app.use('/.netlify/functions/app',router)
app.listen(9500)
// for local
// app.get('/.netlify/functions/app/',(req,res)=>{
//     let root=path.join(__dirname,'../source/myapp/dist')
// //     res.sendFile('home.html',{root:root})
// app.get('/.netlify/functions/app/test3',(req,res)=>{
//     let root=path.join(__dirname,'../source/myapp/dist')
//     res.sendFile('home.html',{root:root})
// // app.get('/',(req,res)=>{
// //     res.sendFile('home.html',{root:"../dist"})
// // })

// app.post('/polling',(req,res)=>{
//     count-=1
//     res.json({message:count})
// })
// //for product
// app.get('/test2',(req,res)=>{
//     let root=path.join(__dirname,'../source/myapp/dist')
//     res.sendFile('home.html',{root:root})
// })

// router.get('/',(req,res)=>{
//     let root=path.join(__dirname,'../source/myapp/dist')
//     res.sendFile('home.html',{root:root})
// })
// router.get('/test',(req,res)=>{
//     let root=path.join(__dirname,'../source/myapp/dist')
//     res.sendFile('home.html',{root:root})
// })
// router.get('/set',(req,res)=>{
//     message = req.body.message
//     res.json({message:message})
// })

// router.post('/polling',(req,res)=>{
//     res.json({message:message})
// })


module.exports = app
module.exports.handler = serverless(app)