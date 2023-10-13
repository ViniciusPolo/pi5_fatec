const Users = require('../models/UsersModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const dotenv = require("dotenv");


module.exports = {
    async indexAll(req, res) {
        try {
            const users = await Users.findAll()
            return res.json(users)
        } catch (err) {
            return res.status(400).send('Broked ->' + err)
        }
    },

    async indexOne(req,res){
        const { id_user } = req.params;
        try {
            const user = await Users.findOne({
                where : {id : id_user}
            })
            return res.status(200).send({
                status: 1,
                message: `User found`,
                user
            })
        } catch (err) {
            return res.status(400).send('User Not Found' + err)
            
        }
    },

    async store(req, res) {
        try {
            const {first_name, last_name, email, password, type_of_user, address, documents, image, client_gender, client_age} = req.body;
            
            if (!password) return res.status(500).send({ error: 'Path "password" is required' })
            // Encripta o valor de "password" em "password_hash"
            const password_hash = await bcrypt.hash(password, 12)

            let age = client_age;
            let gender = client_gender.toUpperCase();

            console.log(gender)

            if (["M", "MASC", "MASCULINO"].includes(gender)) gender = "M"
            if (["F", "FEM", "FEMININO"].includes(gender)) gender = "F"
            else gender = null

            if (age > 0 && age < 18) {
                age = "18-";
            } else if (age >= 18 && age < 25) {
                age = "18 e 25";
            } else if (age >= 25 && age < 30) {
                age = "25 e 30";
            } else if (age >= 30 && age < 40) {
                age = "30 e 40";
            } else if (age >= 40 && age < 60) {
                age = "40 e 60";
            } else if (age >= 60) {
                age = "60+";
            } else {
                age = null;
            }

            console.log(password_hash)
            const users = await Users.create({
                first_name,
                last_name,
                email,
                password_hash,
                type_of_user,
                address,
                documents,
                image,
                gender,
                age,
            })
            return res.status(200).send({
                status: 1,
                message: "User sucessefull included",
                users
              })
        } catch (error) {
            return res.status(400).send(error)
        }
    },

    async update(req, res) {
        try{
        const { id_user } = req.params
        const {first_name, last_name, email, password, type_of_user, address, documents, image, client_gender, client_age} = req.body;

        if (!password) return res.status(500).send({ error: 'Path "password" is required' })
            // Encripta o valor de "password" em "password_hash"
            const password_hash = await bcrypt.hash(password, 12)

        let age = client_age;
            let gender = client_gender.toUpperCase();

            console.log(gender)

            if (["M", "MASC", "MASCULINO"].includes(gender)) gender = "M"
            if (["F", "FEM", "FEMININO"].includes(gender)) gender = "F"
            else gender = null

            if (age > 0 && age < 18) {
                age = "18-";
            } else if (age >= 18 && age < 25) {
                age = "18 e 25";
            } else if (age >= 25 && age < 30) {
                age = "25 e 30";
            } else if (age >= 30 && age < 40) {
                age = "30 e 40";
            } else if (age >= 40 && age < 60) {
                age = "40 e 60";
            } else if (age >= 60) {
                age = "60+";
            } else {
                age = null;
            }

            const users = await Users.update({
                first_name,
                last_name,
                email,
                password_hash,
                type_of_user,
                address,
                documents,
                image,
                gender,
                age,
            }, {
            where: { id: id_user }
        });

        return res.status(200).send({
            status: 1,
            message: "User updated!",
            users
        })
    } catch (error) {
        return res.status(400).send(error)
    }
    },

    async updateImage(req, res) {
        try {
            const { id_user } = req.params
            const {image} = req.body;
            const users = await Users.update({
                image, 
            }, {
                where: { id: id_user }
            });
            return res.status(200).send({
                status: 1,
                message: "User Image sucessefull updated",
                users
              })
        } catch (error) {
            return res.status(400).send(error)
        }
    },

    async login(req,res) {
        try {
            const user = await Users.findOne({where: {email: req.body.email}})
            if(!user) res.status(401).send("Unauthorized")
            else {
                console.log("USER", user.dataValues)
                bcrypt.compare(req.body.password, user.dataValues.password_hash, function(err, result){
                    if (result){
                        const token = jwt.sign({id: user.id}, process.env.SECRET, {expiresIn: 3600})
                        res.json({auth: true, user_id: user.id, token})
                    } else res.status(401).end()
                })
            }
        } catch (error) {
            console.error(error)
            // HTTP 500: Internal Server Error
            res.status(500).send(error)
        }
    },

    async logout (req, res) {
    try{
        res.send({ auth: false, token: null })
    } catch (error) {
        return res.status(400).send(error)
    }
    }


}