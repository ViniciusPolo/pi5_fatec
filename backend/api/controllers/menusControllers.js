const Menus = require('../models/MenusModel');

module.exports = {
    async indexAll(req, res) {
        try {
            const menus = await Menus.findAll()
            return res.json(menus)
        } catch (err) {
            return res.status(400).send('Broked ->' + err)
        }
    },

    async indexOne(req,res){
        const { id_menu } = req.params;
        try {
            const menu = await Menus.findOne({
                where : {id : id_menu}
            })
            return res.status(200).send({
                status: 1,
                message: `Menu found`,
                menu
            })
        } catch (err) {
            return res.status(400).send('Menu Not Found' + err)
            
        }
    },

    async indexByRestaurant(req,res){
        const { restaurant_id } = req.params;
        try {
            const restaurant = await Menus.findAll(
                {where: { restaurant_id: restaurant_id }
            })
            return res.status(200).send({
                status: 1,
                message: `Menu by Restaurant found`,
                restaurant
            })
        } catch (err) {
            return res.status(400).send('Menu by Restaurant Not Found' + err)
            
        }
    },

    async store(req, res) {
        try {
            const {restaurant_id, food_name, price, prepare_time, ingredients, image, type_of_product} = req.body;
            const ingrediants = ingredients
            const menus = await Menus.create({
                restaurant_id,
                food_name, 
                price, 
                prepare_time, 
                ingrediants, 
                image,
                type_of_product
            })
            return res.status(200).send({
                status: 1,
                message: "Menu sucessefull included",
                menus
              })
        } catch (error) {
            return res.status(400).send(error)
        }
    },

    async update(req, res) {
        try {
        const { id_menu } = req.params
        const {restaurant_id, food_name, price, prepare_time, ingrediants, image, type_of_product} = req.body;     
        const menus = await Menus.update({
            restaurant_id,
            food_name, 
            price, 
            prepare_time, 
            ingrediants, 
            image,
            type_of_product
        }, {
            where: { id: id_menu }
        });
        Menus.end()

        return res.status(200).send({
            status: 1,
            message: "Menu updated!",
            menus
        })
    } catch (error) {
        return res.status(400).send(error)
    }
    },

    async updateImage(req, res) {
        try {
            const { id_menu } = req.params
            const {image} = req.body;
            const menus = await Menus.update({
                logo, 
            }, {
                where: { id: id_menu }
            });
            return res.status(200).send({
                status: 1,
                message: "Menu Image sucessefull updated",
                menus
              })
        } catch (error) {
            return res.status(400).send(error)
        }
    },

}