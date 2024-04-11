const express = require('express')
const app = express()
const port = 3000

const myLogger = function (req, res, next) {
  console.log('LOGGED')
  next()
}

// app.use(myLogger)

app.get('/',myLogger, (req, res) => {
  res.send('<h1>Hello World!</h1>')
  
})
app.get('/about',(req,res)=>{
  res.send("About us")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

