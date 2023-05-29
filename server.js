 const express = require('express')
const logger = require('./middleware/logger')
 const app = express()
 app.use(logger)
 app.use(express.static(__dirname + "/public"))   //read files static 
 const port = 4560
 app.listen(port , (error)=>{
    error ? console.log(error)
        : console.log( `server runing on port ${port}`)
 }) 

