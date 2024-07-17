const { createJob } = require('./createJob')
const { getJob} = require('./getJob')
const { updateJob } = require('./updateJob')
const { getAllJobs } = require('./getAllJobs')
const { deleteJob } = require('./deleteJob')


module.exports = {
    createJob,
    getJob,
    updateJob,
    getAllJobs,
    deleteJob,
}