const Addresses = require('../models/AddressesModel');

module.exports = {
    async indexAll(req, res) {
        try {
            console.log("Aqui")
            const addresses = await Addresses.findAll() 
            return res.json(addresses || {})
        } catch (err) {
            return res.status(400).send('Broked ->' + err)
        }
    },

    async indexOne(req,res){
        const { belong_to, belong_type } = req.params;
        try {
            const address = await Addresses.findOne({
                where : {
                    belong_to : belong_to,
                    belong_type: belong_type
                }
            })
            return res.status(200).send({
                status: 1,
                message: `Address found`,
                address
            })
        } catch (err) {
            return res.status(400).send('User Not Found' + err)
            
        }
    },

    async store(req, res) {
        try {
            const {belong_to,
                   belong_type,
                   street,
                   number,
                   complement,
                   cep,
                   state,
                   country,
                   latitude,
                   longitude} = req.body;
            
            const address = await Addresses.create({
                belong_to,
                belong_type,
                street,
                number,
                complement,
                cep,
                state,
                country,
                latitude,
                longitude,
            })
            return res.status(200).send({
                status: 1,
                message: "Address sucessefull included",
                address
              })
        } catch (error) {
            return res.status(400).send(error)
        }
    },

    async update(req, res) {
        try{
        const { id_user } = req.params
        const {belong_to,
            belong_type,
            street,
            number,
            complement,
            cep,
            state,
            country,
            latitude,
            longitude} = req.body;

        const users = await Addresses.update({
            belong_to,
            belong_type,
            street,
            number,
            complement,
            cep,
            state,
            country,
            latitude,
            longitude,
        }, {
            where : {
                belong_to : belong_to,
                belong_type: belong_type
            }
        });

        return res.status(200).send({
            status: 1,
            message: "Address updated!",
            users
        })
    } catch (error) {
        return res.status(400).send(error)
    }
    },

}