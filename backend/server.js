const express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
const { createFile } = require('./createFile')
const { runcpp } = require('./runCpp')
const { runjava } = require('./runJava')
const { runpy } = require('./runPy')
const { runc } = require('./runC')
const {deleteFile}=require('./deleteFile')


const app = express()
app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/run', async (req, res) => {
    const { language, code } = req.body
    if (!language) return res.json({ error: 'No language mentioned' })
    if (!code) return res.json({ error: 'Empty code' })
    const fileCreatedPath = await createFile(code, language)
    if (language === 'cpp') {
        const out = await runcpp(fileCreatedPath)
        deleteFile(fileCreatedPath)
        res.send(out);
    }
    if (language === 'java') {
        const out =await  runjava(fileCreatedPath)
        deleteFile(fileCreatedPath)
        res.send(out);
    }
    if (language === 'py') {
        const out = await runpy(fileCreatedPath)
        deleteFile(fileCreatedPath)
        res.send(out);
    }
    if (language === 'c') {
        const out = await runc(fileCreatedPath)
        deleteFile(fileCreatedPath)
        res.send(out);
    }
})

app.listen(process.env.PORT || 5000, () => {
    console.log("listening on port 5000");
})
