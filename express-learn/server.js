const express = require('express')
const app = express()
const port = 3000

app.get('/test',(req,res)=>{
  res.json({
    message:"Test Port is Created"
  })
})

app.post('/test',(req,res)=>{
  res.send(`<h1>Hello This is Express</h1>`)
})

app.listen(port,()=>{
  console.log(`Server started at ${port}`);
})
