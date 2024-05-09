require('dotenv').config()
console.log("Chai aur code");

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req,res)=>{
    res.send("Amitadotcom")
})

app.get('/login',(req,res)=>{
  res.send('<h1>Please login to  admin poratl for user access details</h1>')
})
app.get('/youtube', (req,res)=>{
 res.send("<h2>Chai aur code</h2>")
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

