const {exec}=require('child_process')
const path =require('path')
const runpy=(codePath)=>{
    var runfile=path.resolve(codePath)
    const op=runfile.replaceAll(/\\/g,"/")
    // console.log(path.dirname(op));
    const filename=path.basename(codePath)
    const command=`cd ${path.dirname(op)} && python${filename.split('.')[0]}.py }`
    exec(`${command}`,(err,stdout,stderr)=>{
        console.log(err);
        console.log(stdout);
        console.log(stderr);
    })
 }
module.exports={runpy};