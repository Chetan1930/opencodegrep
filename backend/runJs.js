const {exec}=require('child_process')
const path =require('path')
const runjs=async(codePath)=>{
    var runfile=path.resolve(codePath)
    const op=runfile.replaceAll(/\\/g,"/")
    const filename=path.basename(codePath)
    const command=`cd ${path.dirname(op)} && node ${filename.split('.')[0]}.js}`
    var arr = []
    exec(`${command}`, (err, stdout, stderr) => {
        arr.push(err)
        arr.push(stdout)
        arr.push(stderr)
    })
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
    await delay(1000)
    return arr
 }
module.exports={runjs};