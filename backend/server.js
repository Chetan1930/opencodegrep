const express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
const {createFile}=require('./createFile')
const {runcpp}=require('./runCpp')
const {runjava}=require('./runJava')
const {runpy}=require('./runPy')
const {runjs}=require('./runJs')
const {runc}=require('./runC')

const app = express()
app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/run',async (req, res) => {
    const {language,code}=req.body
    const fileCreatedPath=await createFile(code,language)
    if(language==='cpp'){
        runcpp(fileCreatedPath)
    }
    if(language==='java'){
        runjava(fileCreatedPath)
    }
    if(language==='py'){
        runpy(fileCreatedPath)
    }
    if(language==='js'){
        runjs(fileCreatedPath)
    }
    if(language==='c'){
        runc(fileCreatedPath)
    }
    res.send({staus:'success'})
})

app.listen(process.env.PORT || 5000, () => {
    console.log("listening on port 5000");
})

