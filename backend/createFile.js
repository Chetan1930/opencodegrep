const fs=require('fs')
const {v4:jobId}=require('uuid')
const createFile=(content,ext)=>{
    filename=jobId()
    fs.writeFileSync(`./codes/${filename}.${ext}`,content)
    return `./codes/${filename}.${ext}`
}
module.exports={createFile};