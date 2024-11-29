const express = require('express');
const router = express.Router();



router.get('/', (req, res, next) => {
    res.render('pages/admin.ejs', { pageTitle: 'Admin Page' });
});

module.exports = router;