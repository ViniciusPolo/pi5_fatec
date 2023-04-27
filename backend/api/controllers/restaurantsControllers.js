const Restaurants = require('../models/RestaurantsModel');

module.exports = {
    async indexAll(req, res) {
        try {
            const restaurants = await Restaurants.findAll()
            return res.json(restaurants)
        } catch (err) {
            return res.status(400).send('Broked ->' + err)
        }
    },

    async indexOne(req,res){
        const { id_restaurant } = req.params;
        try {
            const restaurant = await Restaurants.findByPk(id_restaurant, {
                include: { association: 'owner' }
            })
            return res.status(200).send({
                status: 1,
                message: `Restaurant found`,
                restaurant
            })
        } catch (err) {
            return res.status(400).send('User Not Found' + err)
            
        }
    },

    async store(req, res) {
        try {
            const {user_owner, restaurant_name, bio, logo, address} = req.body;
            const restaurants = await Restaurants.create({
                user_owner,
                restaurant_name, 
                bio, 
                logo, 
                address
            })
            return res.status(200).send({
                status: 1,
                message: "Restaurant sucessefull included",
                restaurants
              })
        } catch (error) {
            return res.status(400).send(error)
        }
    },

    async update(req, res) {
        try {
            const { id_restaurant } = req.params
            const {user_owner, restaurant_name, bio, logo, address} = req.body;
            const restaurants = await Restaurants.update({
                user_owner,
                restaurant_name, 
                bio, 
                logo, 
                address
            }, {
                where: { id: id_restaurant }
            });
            return res.status(200).send({
                status: 1,
                message: "Restaurant sucessefull updated",
                restaurants
              })
        } catch (error) {
            return res.status(400).send(error)
        }
    },
}