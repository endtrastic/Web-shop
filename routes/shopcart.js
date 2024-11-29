const express = require('express');
const router = express.Router();



router.get('/', (req, res, next) => {
    res.render('pages/cart.ejs', { pageTitle: 'Cart Page' });
});

module.exports = router;