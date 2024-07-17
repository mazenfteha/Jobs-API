const Job =require('../../models/Job')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, NotFoundError } = require('../../errors')

const createJob = async (req, res) =>{
    req.body.createdBy =req.user.userId
    const job = await Job.create(req.body)
    res.status(StatusCodes.CREATED).json({job})
}

module.exports = {createJob}