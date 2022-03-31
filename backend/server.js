const express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
const {createFile}=require('./createFile')

const app = express()
app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/run', (req, res) => {
    const {language,code}=req.body
    const fileCreatedPath=createFile(code,language)
    console.log(fileCreatedPath);
    res.send({staus:'success'})
})

app.listen(process.env.PORT || 5000, () => {
    console.log("listening on port 5000");
})

