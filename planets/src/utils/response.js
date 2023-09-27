module.exports = (res, statusCode, data) => {

res.status(statusCode).json({
    status: statusCode,
    error: false,
    data: data
});}