module.exports = (req, res, next) => {
    
    if (req.session.user) {
        // Se lo paso a la vista
        res.locals.user = req.session.user;
    } else {
        res.locals.user = ''
    }
    next();
}