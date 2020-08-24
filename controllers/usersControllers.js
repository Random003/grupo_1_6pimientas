const path = require('path');
const jsonTable = require ('../database/jsonTable'); 
const { read } = require('fs');
const usersModel = jsonTable('users');
const bcrypt = require ('bcryptjs');
const { validationResult } = require('express-validator');



module.exports = {
    login: (req, res) => {
        res.render("login");
    },
    authenticate: (req, res) => {
        let errorsLogin = validationResult(req);
        if (errorsLogin.isEmpty()) {
            let user = usersModel.findByFields('email', req.body.email);
            console.log(user);
            if(user) {
                if (bcrypt.compareSync(req.body.password, user.password)) {
                    delete user.password;
                    req.session.user = user;
                    res.redirect('/products');
                } else {
                    res.render ('login', { errors: { password: {msg: 'Usuario o clave incorrecta'} }, email: req.body.email });
                }
                
            } else {
                res.render ('login', { errors: { password: {msg: 'Usuario o clave incorrecta'} }, email: req.body.email });
            }
        } else {
            
            res.render ('login', { errors: errorsLogin.mapped(), email: req.body.email });
        }
        //res.send(req.body);
    },
    register: (req, res) => {
        let errors = validationResult(req);
        res.render("register");
    },
    createAdmin: (req, res) => {
        //levantar todos los usuarios y pasárselos a la vista
        res.render ('addUsers');
    }, 
    editAdmin: (req, res) => {
        let users = usersModel.all;
       res.render ('usersAdmin', users);
    },
    logout: (req, res) => {
        req.session.destroy();
        return res.redirect('/')
    }

}