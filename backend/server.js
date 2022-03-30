const express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
const app = express()
app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/run', (req, res) => {
    console.log(req.body);
    res.send("hello")
})

app.listen(process.env.PORT || 5000, () => {
    console.log("listening on port 5000");
})

