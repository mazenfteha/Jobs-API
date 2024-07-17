const User =require('../../models/User')
const {StatusCodes} =require('http-status-codes')
const { BadRequestError } = require('../../errors')
const { UnauthenticatedError } = require('../../errors')


const login =async (req, res) =>{
    const {email, password} =req.body

    if(!email || !password){
        throw new BadRequestError('please provide email and password')
    }
    const user = await User.findOne({email})
    if(!user){
        throw new UnauthenticatedError('Invalid Credentials')
    }
    const isPasswordCorrect =await user.comparePassword(password)
    if(!isPasswordCorrect){
        throw new UnauthenticatedError('Invalid Credentials')
    }

    const token = user.createJwt();
    res.status(StatusCodes.OK).json({ user: {name: user.name }, token})
}

module.exports ={
    login
}