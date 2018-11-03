var express = require('express')
var router = express.Router()
var CustomerController = require('../../controllers/customerController');
router.get('/', CustomerController.getCustomer);
router.post('/', CustomerController.createCustomer);
router.delete('/:id',CustomerController.removeCustomer);
module.exports = router;
