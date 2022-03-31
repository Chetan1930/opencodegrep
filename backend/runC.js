const {exec}=require('child_process')
const path =require('path')
const runc=(codePath)=>{
    var runfile=path.resolve(codePath)
    const op=runfile.replaceAll(/\\/g,"/")
    const filename=path.basename(codePath)
    const command=`cd ${path.dirname(op)} && g++ ${filename.split('.')[0]}.c && ${filename.split('.')[0].exe}`
    exec(`${command}`,(err,stdout,stderr)=>{
        console.log(err);
        console.log(stdout);
        console.log(stderr);
    })
 }
module.exports={runc};