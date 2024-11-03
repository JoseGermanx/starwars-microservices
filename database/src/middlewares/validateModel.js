module.exports = (req, res, next) => {
    const { model } = req.params;

    if(['Character', 'Film', 'Planet', 'User'].includes(model)){
        return next();
    } else {
        throw new Error('Model not found 404');

    }
}