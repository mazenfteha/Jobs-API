const Job =require('../../models/Job')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, NotFoundError } = require('../../errors')

const deleteJob = async (req, res) =>{
    const{
        user:{userId},
        params:{id:jobId}
    } =req

    const job = await Job.findByIdAndRemove({
        _id:jobId,
        createdBy:userId
    })
    if(!job){
        throw new NotFoundError(`No job with id ${jobId}`)
    }
    res.status(StatusCodes.OK).send()
}

module.exports = {deleteJob};
