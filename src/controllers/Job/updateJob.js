const Job =require('../../models/Job')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, NotFoundError } = require('../../errors')

const updateJob = async (req, res) =>{
    const{
        body:{company,position},
        user:{ userId},
        params: { id: jobId },
    } =req
    if(company === '' || position === ''){
        throw new BadRequestError('Company or position fields cannot be empty')
    }
    const job = await Job.findByIdAndUpdate(
        {_id:jobId,createdBy:userId},
        req.body,
        {new:true,runvalidators:true}
        )
    if(!job){
        throw new NotFoundError(`No job with id ${jobId}`)
    }
    res.status(StatusCodes.OK).json({ job })
}

module.exports = {updateJob}