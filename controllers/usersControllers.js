const path = require('path');
const { read } = require('fs');
const bcrypt = require ('bcryptjs');
const crypto = require('crypto');
const { validationResult } = require('express-validator');
const jsonTable = require ('../database/jsonTable'); 
const usersModel = jsonTable('users');
const usersTokensModel = jsonTable('usersTokens');



module.exports = {
    login: (req, res) => {
        res.render("login");
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
        if (!errorsCreateUser.isEmpty()) {
            return res.render ('register', { errors: errorsCreateUser.mapped(), register: req.body } );

        } else {
            let user = {
                id: 1,
                full_name: req.body.fullName, 
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 12), 
                street: req.body.street,
                number: req.body.number,
                floor: req.body.floor,
                department: req.body.department,
                city: req.body.city,
                category: 'user',
                image: 'default.jpg'

            };
            usersModel.create(user);
            res.render ('login');
        }

    },
    editUser: (req, res) => {
        let user = usersModel.find(req.params.id);
        res.render ('editUsers', { user: user });

    },
    updateUser: (req, res) => {
        let oldUser = usersModel.find(req.params.id);

        let category = '';
        let password = '';
        if (oldUser.category == 'admin') {
            category = req.body.category;
        } else {
            category = 'user';
        }
       
        if(req.body.password == '') {
            password = oldUser.password;
        } else {
            password = bcrypt.hashSync(req.body.password, 12);
        }
        

        let user = {
            id: parseInt(req.params.id),
            fullName: req.body.fullName,
            email: req.body.email,
            password: password,
            street: req.body.street,
            number: req.body.number,
            floor: parseInt(req.body.floor),
            department: req.body.department,
            city: req.body.city,
            category: category,
            image: "default.jpg"
        };

         
        usersModel.update(user);
        res.render ('home1', { user: user });
        //req.session.user = user;

    }

}