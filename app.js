let express = require('express')

let  app = express()

app.get('/one',(req,res)=>{
    res.status(200).json({message: 'one'})
})

app.listen(8080)