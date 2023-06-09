const express = require('express')
const router = express.Router()

const menusControllers = require ('../controllers/menusControllers');

router.get('/menus', menusControllers.indexAll);
router.get('/menus/:id_menu', menusControllers.indexOne);
router.get('/restaurant-menu/:restaurant_id', menusControllers.indexByRestaurant);

router.post('/menus', menusControllers.store);

router.put('/menus/:id_menu', menusControllers.update)

module.exports = router