const {execSync}=require('child_process')
const path =require('path')
const runjava=async(codePath)=>{
    var runfile=path.resolve(codePath)
    const op=runfile.replaceAll(/\\/g,"/")
    const filename=path.basename(codePath)
    const command=`cd ${path.dirname(op)} && javac ${filename.split('.')[0]}.java && java ${filename.split('.')[0]}`
    var arr = []
    try {
        const out=execSync(`${command}`)
        arr.push(out.toString());
    }catch(e){
        arr.push('')
        arr.push(e.stderr.toString());
    }
    return arr
 }
module.exports={runjava}