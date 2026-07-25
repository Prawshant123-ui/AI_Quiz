const bcrypt=require('bcrypt')
const env=require('../config/env')

const hashPassword=async(plainPassword)=>{
    return bcrypt.hash(plainPassword,env.bcryptSaltRounds)
}

const comparePassword=async(plainPassword,hash)=>{
    return bcrypt.compare(plainPassword,hash)
}

module.exports={hashPassword,comparePassword}