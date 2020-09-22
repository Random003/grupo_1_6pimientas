const jsonTable = require ('../database/jsonTable'); 
const usersModel = jsonTable('users');
const usersTokensModel = jsonTable('usersTokens');
const { user, userToken } = require('../database/models')

module.exports = (req, res, next) => {
    
    if (req.session.user) {
        // Se lo paso a la vista
        res.locals.user = req.session.user;

    } else if (req.cookies.userToken) {
       //let userToken = usersTokensModel.findByField('token', req.cookies.userToken);
       let exitsUserToken = userToken.findOne( { where: { token: req.cookies.userToken}})
       
        if (exitsUserToken) {
            //let user = usersModel.find(userToken.userId);
            let userLog = user.findByPk(exitsUserToken.id)
            if (userLog) {
                delete userLog.password;
                
                req.session.user = userLog;
                res.locals.user = userLog;
            }
        // Si no existe el token en base, le borramos la cookie
        } else {
            res.clearCookie('userToken');
        }
    }
    next();
}