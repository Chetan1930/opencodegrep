const {exec}=require('child_process')
const path =require('path')
const runjava=(codePath)=>{
    var runfile=path.resolve(codePath)
    const op=runfile.replaceAll(/\\/g,"/")
    const filename=path.basename(codePath)
    const command=`cd ${path.dirname(op)} && javac ${filename.split('.')[0]}.java && java ${filename.split('.')[0]}`
    exec(`${command}`,(err,stdout,stderr)=>{
        console.log(err);
        console.log(stdout);
        console.log(stderr);
    })
 }
module.exports={runjava};