class AppError extends Error{
    constructor(messsage,statusCodes){
        super(message)
        this.statusCodes=statusCodes;
        this.isOperational=true;
        Error.captureStackTrace(this,this.constructor)
    }
}

module.exports=AppError