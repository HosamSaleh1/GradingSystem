const fs = require('fs')
const ch = require('chalk')

const addStd = (std)=>{
    const stds = loadStds()
    const dublicatId = stds.find((std1)=>{
        return std1.id === std.id
    })
    if (!dublicatId){
        stds.push(std)
        saveStds(stds)
        console.log(ch.blue.bgWhite.bold('Added Successfully'))
    }else{
        console.log(ch.red.bgGrey.bold('Error Duplicated ID'))
    }
}

const deleteStd = (id) =>{
    const stds = loadStds()
    const delStd = stds.find((std)=>{
        return std.id === id
    })
    if (!delStd){
        console.log(ch.red.bgYellow.italic('No Student with this ID'))
    }else{
        const stdToKeep = stds.filter((std)=>{
            return std.id !== id
        })
        saveStds(stdToKeep)
        console.log(ch.red.bgWhiteBright.bold('Deleted Successfully'))
    }
}

const readStd = (id)=>{
    const stds = loadStds()
    const read = stds.find((std)=>{
        return std.id === id
    })
    if (read){
        console.log(ch.blueBright.bgWhite.bold(read))
    }else{
        console.log(ch.red.bgYellow.italic('No Student with this ID'))
    }
}

const listStd = ()=>{
    const stds = loadStds()
    if (stds.length === 0){
        console.log(ch.white.bgYellow.bold('No Student Add Yet`'))
    }else{
        stds.forEach((std)=>{
            console.log(ch.white.bgGreen.bold.italic(std))
        })
    }
}

const loadStds = ()=>{
    try{
        const stds = fs.readFileSync('Student.json').toString()
        return JSON.parse(stds)
    }
    catch(e){
        return []
    }
}

const saveStds = (stds)=>{
    const stdsJson = JSON.stringify(stds)
    fs.writeFileSync('Students.json',stdsJson)
}

module.export = {
    addStd,
    deleteStd,
    readStd,
    listStd
}