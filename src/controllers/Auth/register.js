const User =require('../../models/User')
const {StatusCodes} =require('http-status-codes')
const { BadRequestError } = require('../../errors')
const { UnauthenticatedError } = require('../../errors')

const register = async (req, res) =>{
    const user = await User.create({ ...req.body })
    const token =user.createJwt()
    res.status(StatusCodes.CREATED).json({ user :{ name: user.name},token})
}

module.exports = {
    register
}