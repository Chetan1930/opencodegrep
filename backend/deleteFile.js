const fs=require('fs')
const path=require('path')
const deleteFile=(filePath)=>{
        const fn=`./codes/${path.basename(filePath)}`.split('.')[1].split('/')[2]
        const ext=`./codes/${path.basename(filePath)}`.split('.')[2]
        fs.unlinkSync(`./codes/${path.basename(filePath)}`)
        if(ext==='java')
        fs.unlinkSync(`./codes/${fn}.class`)
        if(ext==='c'||ext==='cpp')
        fs.unlinkSync(`./codes/a.exe`)
}
module.exports={deleteFile}