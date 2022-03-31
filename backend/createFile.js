const fs=require('fs')
var randomWords = require('random-words');



const createFile=async (content,ext)=>{
    filename=randomWords(1)[0]+`${new Date().getHours()}${new Date().getSeconds()}${new Date().getMilliseconds()}`
    if(ext=='java'){
        newjavaClass=content.replace('Main',filename)
        await fs.writeFileSync(`./codes/${filename}.${ext}`,newjavaClass.toString())
    }
    else{
    await fs.writeFileSync(`./codes/${filename}.${ext}`,content.toString())
    }
    return `./codes/${filename}.${ext}`
}
module.exports={createFile};