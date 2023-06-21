const Requests = require('../models/RequestsModel');
const Menus = require('../models/MenusModel');

async function getTotalValue(food_id, quantity){
    const id_menu = food_id;
    try {
        const {price} = await Menus.findOne({
            where : {id : id_menu}
        })
        const total_value = price * quantity
        return total_value
    } catch (err) {
        return res.status(400).send('Total Value not calculated' + err)
    }
}

module.exports = {
    async indexAll(req, res) {
        try {
            const requests = await Requests.findAll()
            return res.json(requests)
        } catch (err) {
            return res.status(400).send('Broked ->' + err)
        }
    },

    async indexOne(req,res){
        const { id_request } = req.params;
        try {
            const request = await Requests.findOne({
                where : {id : id_request}
            })
            return res.status(200).send({
                status: 1,
                message: `Request found`,
                request
            })
        } catch (err) {
            return res.status(400).send('Request Not Found' + err)
            
        }
    },

    async indexByRestaurant(req,res){
        const { restaurant_id } = req.params;
        try {
            const restaurant = await Requests.findAll(
                {where: { restaurant_id: restaurant_id }
            })
            return res.status(200).send({
                status: 1,
                message: `Request by Restaurant found`,
                restaurant
            })
        } catch (err) {
            return res.status(400).send('Request by Restaurant Not Found' + err)
            
        }
    },

    async indexByUserOpened(req,res){
        const { user_id, is_open } = req.params;
        try {
            const restaurant = await Requests.findAll(
                {where: { user_id: user_id,
                          is_open: is_open
                        }
            })
            return res.status(200).send({
                status: 1,
                message: `Request Open by User found`,
                restaurant
            })
        } catch (err) {
            return res.status(400).send('Request by Restaurant Not Found' + err)
            
        }
    },

 
    async store(req, res) {
        try {
            const {restaurant_id, food_id, user_id, total_delivery, status_prepare, status_payment,quantity, is_open} = req.body;
            let status_payment_default, status_prepare_default
            if (!status_prepare) status_prepare_default= 1;
            if (!status_payment) status_payment_default= 1;
            const total_value = await getTotalValue(food_id, quantity)

            const requests = await Requests.create({
                restaurant_id,
                food_id, 
                user_id, 
                status_prepare: status_prepare || status_prepare_default, 
                status_payment: status_payment || status_payment_default,
                total_value,
                total_delivery,
                is_open,
                quantity
            })
            return res.status(200).send({
                status: 1,
                message: "Request sucessefull included",
                requests
              })
        } catch (error) {
            return res.status(400).send(error)
        }
    },

    async update(req, res) {
        try{
        const { id_request, is_open } = req.params
        const {restaurant_id, food_id, user_id, total_delivery, status_prepare, status_payment,quantity} = req.body;
            let status_payment_default, status_prepare_default, id_request_root_default
            if (!status_prepare) status_prepare_default= 1;
            if (!status_payment) status_payment_default= 1;
            const total_value = await getTotalValue(food_id, quantity)
        const requests = await Requests.update({
                restaurant_id,
                food_id, 
                user_id, 
                status_prepare: status_prepare || status_prepare_default, 
                status_payment: status_payment || status_payment_default,
                total_value,
                total_delivery,
                is_open,
                quantity
        }, {
            where: {  [Op.and]: [{id: id_request }, {id_request_root: id_request_root }]}
        });

        return res.status(200).send({
            status: 1,
            message: "Request updated!",
            requests
        })
    } catch (error) {
        return res.status(400).send(error)
    }
    },

}