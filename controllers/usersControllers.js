const path = require('path');
const { read } = require('fs');
const bcrypt = require ('bcryptjs');
const crypto = require('crypto');
const { validationResult } = require('express-validator');
const jsonTable = require ('../database/jsonTable'); 
const { localsName } = require('ejs');
const { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } = require('constants');
const { nextTick } = require('process');
const usersModel = jsonTable('users');
const usersTokensModel = jsonTable('usersTokens');



module.exports = {
    login: (req, res) => {
        res.render("./users/login");
    },
    authenticate: (req, res) => {
        let errorsLogin = validationResult(req);
        
        if (errorsLogin.isEmpty()) {
            let user = usersModel.findByFields('email', req.body.email);
            
            if(user) {
                if (bcrypt.compareSync(req.body.password, user.password)) {
                    delete user.password;
                    req.session.user = user; //guardo el usuario en sesión
                    
                    //si elige remember
                    if (req.body.remember == 'on') {
                        const token = crypto.randomBytes(64).toString('base64'); // creo el token

                        usersTokensModel.create({userId: user.id, token }); //lo almaceno en un archivo usando el model

                        res.cookie('userToken', token, { maxAge: 1000 * 60 * 60 * 24 * 30 * 3 } ); //genero la cookie
                        
                    }
                    return res.redirect('/products');

                } else {
                    res.render ('./users/login', { errors: { password: {msg: 'Usuario o clave incorrecta'} }, email: req.body.email });
                }
                
            } else {
                res.render ('./users/login', { errors: { password: {msg: 'Usuario o clave incorrecta'} }, email: req.body.email });
            }
        } else {
            
            res.render ('./users/login', { errors: errorsLogin.mapped(), email: req.body.email });
        }
        
    },
    register: (req, res) => {
        let errors = validationResult(req);
        res.render("./users/register");
    },
    createAdmin: (req, res) => {
        //levantar todos los usuarios y pasárselos a la vista
        res.render ('./users/register');
    }, 
    editAdmin: (req, res) => {
        //let users = usersModel.all;
        //res.render ('usersAdmin', users);
    },
    logout: (req, res) => {
        let userTokens = usersTokensModel.findAllByField('userId', req.session.user.id);
        userTokens.forEach(userToken => {
            usersTokensModel.delete(userToken.id);
        });
        res.clearCookie('userToken');
        
        req.session.destroy();
        
        return res.redirect('/')
    },
    createUser: (req, res) => {
        let errorsCreateUser = validationResult (req);
        let file = '';
        if (req.file) {
            file = req.file.filename;
        } else {
            file = 'default.jpg';
        }
        if (!errorsCreateUser.isEmpty()) {
            return res.render ('./users/register', { errors: errorsCreateUser.mapped(), register: req.body } );

        } else {
            let userToCreate = {
                id: 1,
                full_name: req.body.full_name, 
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 12), 
                street: req.body.street,
                number: req.body.number,
                floor: req.body.floor,
                department: req.body.department,
                city: req.body.city,
                category: 'user',
                image: file

            };
            usersModel.create(userToCreate);
            if (req.session.user && req.session.user.category == 'admin') {
                console.log(req.session.user)
                res.redirect ('../usersAdmin')
            } else {
                res.render ('./users/login');
            }
        }

    },
    editUser: (req, res) => {

        let userToEdit = usersModel.find(req.params.id);
        
        res.render ('./users/editUsers', { userToEdit: userToEdit });

    },
    updateUser: (req, res) => {
        
        let oldUser = usersModel.find(req.params.id);

        let category = '';
        let password = '';
        let file = '';

        if (req.session.user.category == 'admin') {
            category = req.body.category;
        } else {
            category = 'user';
        }
       
        if(req.body.password == '') {
            password = oldUser.password;
        } else {
            password = bcrypt.hashSync(req.body.password, 12);
        }
        if (req.file) {
            file = req.file.filename;
        } else {
            file = oldUser.image;
        }

        let userUpdate = {
            id: parseInt(req.params.id),
            full_name: req.body.full_name,
            email: req.body.email,
            password: password,
            street: req.body.street,
            number: req.body.number,
            floor: parseInt(req.body.floor),
            department: req.body.department,
            city: req.body.city,
            category: category,
            image: file
        };

        let idUserUpdate = usersModel.update(userUpdate);
        if (req.session.user.id == idUserUpdate) {
            req.session.user = userUpdate;
            res.render ('home1', { user: userUpdate });

        } else {
            
            res.redirect ('../usersAdmin');
        } 
        

    },
    
    showAll: (req, res, next) => {
        let users = usersModel.all();
        res.render ('./users/usersAdmin', { users });

    },
    delete: (req, res) => {
        usersModel.delete(req.params.id);
        if (req.session.user.category == 'admin') {
            res.redirect ('../usersAdmin');
        } else {
            
            res.redirect ('../logout');

            

        }
    }
}