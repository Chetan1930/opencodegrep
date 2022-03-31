const {exec}=require('child_process')
const path =require('path')
const runjs=(codePath)=>{
    var runfile=path.resolve(codePath)
    const op=runfile.replaceAll(/\\/g,"/")
    const filename=path.basename(codePath)
    const command=`cd ${path.dirname(op)} && node ${filename.split('.')[0]}.js}`
    exec(`${command}`,(err,stdout,stderr)=>{
        console.log(err);
        console.log(stdout);
        console.log(stderr);
    })
 }
module.exports={runjs};