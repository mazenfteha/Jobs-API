
const authRouter =require('../routes/auth.routes')
const jobsRouter =require('../routes/jobs.routes')

const notFoundMiddleware = require('../middleware/not-found');
const errorHandlerMiddleware = require('../middleware/error-handler');
const authenticateUser = require('../middleware/authentication')


module.exports = (app) => {
    app.use('/api/v1/auth',authRouter)
    app.use('/api/v1/jobs',authenticateUser,jobsRouter)
    app.use(notFoundMiddleware);
    app.use(errorHandlerMiddleware);
}