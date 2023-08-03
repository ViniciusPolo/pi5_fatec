const express = require('express')
const router = express.Router()

const addressesController = require ('../controllers/addressesControllers');

router.get('/', addressesController.indexAll);
router.get('/:belong_to/:belong_type', addressesController.indexOne);

router.post('/', addressesController.store);
router.put('/:belong_to/:belong_type', addressesController.update);

module.exports = router
