const yargs = require('yargs')
const system = require('./system')


yargs.command({
    command:'add',
    describe:'Add New Student',
    builder:{
        id:{
            describe:'The Student Uniq ID',
            demandOption: true,
            type:'Number'
        },
        name:{
            describe:'Student Name',
            demandOption:true,
            type:'String'
        },
        subject:{
            describe:'Student Subject',
            demandOption:true,
            type:'String'
        },
        grade:{
            describe:'Student Grade',
            demandOption:true,
            type:'Number'
        },
        comment:{
            describe:'Comment on the Student',
            type:'String'
        }
        },
        handler:(argv)=>{
            system.addStd(argv)
        }
})

yargs.command({
    command:'delete',
    describe:'Delete Student',
    builder:{
        id:{
            describe:'Student ID',
            demandOption:true,
            type:'Number'
        }
    },
    handler:(argv)=>{
        system.deleteStd(argv)
    }
})

yargs.command({
    command:'read',
    describe:'Read Student Info',
    builder:{
        id:{
            describe:'Student ID',
            demandOption:true,
            type:'Number'
        }
    },
    handler:(argv)=>{
        system.readStd(argv)
    }
})

yargs.command({
    command:'list',
    describe:'List of Students',
    handler:()=>{
        system.listStd()
    }
})

yargs.parse()