const express = require('express')
const router = express.Router()

const requestsControllers = require ('../controllers/requestsControllers');

router.get('/', requestsControllers.indexAll);
router.get('/:id_request', requestsControllers.indexOne);
router.get('/:restaurant_id', requestsControllers.indexByRestaurant);
router.get('/:user_id/:is_open', requestsControllers.indexByUserOpened);

router.post('', requestsControllers.store);

router.put('/:id_request', requestsControllers.update)

router.delete('/delete-item/:id_request', requestsControllers.deleteItem)

router.delete('/delete-basket/:user_id', requestsControllers.deleteAllItemsOpened);

module.exports = router