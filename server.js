const express = require('express')
const cors = require('cors')

const app = express() ; 
const PORT = 8003 ; 

app.use(cors()) ; 

app.get('/' , (req ,res)=>{
    res.send({
        msg : "hello from server"
    })
})
app.get('')
app.listen(PORT , ()=>{
    console.log(`app is running at the PORT :${PORT}\nVisit http://localhost:${PORT}`) ; 
})

