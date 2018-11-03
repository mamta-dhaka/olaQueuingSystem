var express = require('express');

var router = express.Router();
var customer = require('./api/customer.route');

var driver = require('./api/driver.route');
var request = require('./api/request.route');

const cron = require('node-cron');
var RequestController = require('../controllers/requestController');

router.use('/driver', driver);
router.use('/customers', customer);
router.use('/request', request);

cron.schedule("* * * * *", async function() {
    console.log("running a task every minute");
    await RequestController.updateRequestIfTimeLimitExceeded();
});

module.exports = router;
