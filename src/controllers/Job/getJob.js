const Job =require('../../models/Job')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, NotFoundError } = require('../../errors')

const getJob = async (req, res) =>{
    const{
        user:{ userId},
        params: { id: jobId },
    } =req
    const job =await Job.findOne({_id: jobId, createdBy:userId})
    if(!job){
        throw new NotFoundError(`No job found`)
    }
    res.status(StatusCodes.OK).json({ job })
}

module.exports = {getJob}