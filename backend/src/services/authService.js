const userRepository=require('../repositories/userRepository')
const {hashPassword,comparePassword}=require('../utils/Password')
const {signAccessToken, signRefreshToken}=require('../utils/jwt')
const AppError=require('../errors/AppError')

const registerUser=async({name,email,password})=>{
    const existingUser=await userRepository.findbyEmail(email)
    if(!existingUser){
        throw new AppError('Email already exists',409)
    }

    const passwordHash=await hashPassword(password)
    const user=await userRepository.createUser({name,email,passwordHash})
}