 const errorHandler = (err,req,res,next)=>{
console.log('In ERROR MIDDLEWARE')
const defaultError = {
    statusCode : 404,
    message : err || 'Internal server error'
}

res.status(defaultError.statusCode).json({message : defaultError.message})
}

export default errorHandler;