const { user, user_token } = require('../database/models')

module.exports = async (req, res, next) => {
    res.locals.user = false;
    if (req.session.user) {
        // Se lo paso a la vista
        res.locals.user = req.session.user;
        return next();
    } else if (req.cookies.userToken) {
        //let userToken = usersTokensModel.findByField('token', req.cookies.userToken);
        let exitsUserToken = await user_token.findOne( { where: { token: req.cookies.userToken } } )
        if(exitsUserToken) {
            const userLog = await user.findByPk(exitsUserToken.user_id)
            if (userLog) {
                delete userLog.password;
                req.session.user = userLog.dataValues;
                res.locals.user = userLog.dataValues;
            } else {
                user_token.destroy({ where: { user_id: req.session.user.id }})
                res.clearCookie('userToken');
            }
        }               
    }
    next();
}