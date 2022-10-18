module.exports.errorHandler = (err, req, res, next) => {
    res.status(400).json({status:"error",error:err.message});
    next();
}