const express = require('express');
const router = express.Router();
const shopControl = require('../controllers/shopController');


console.log(shopControl)


router.get('/', shopControl.GetAllbooks);


// Exporting the router
module.exports = router;  

